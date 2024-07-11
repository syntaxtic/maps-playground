import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  Box,
  Button,
  Container,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Flight as FlightIcon,
} from "@mui/icons-material";

import maplibregl, { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import * as turf from "@turf/turf";

const Page = () => {
  const { data, error } = useSWR("/styles/demotiles.json", (path) =>
    fetch(path).then((r) => r.json())
  );

  const router = useRouter();

  if (error) return <Box>Failed to load</Box>;
  if (!data) return <Box>Loading...</Box>;

  return (
    <Container
      disableGutters
      sx={{
        width: "100%",
        minHeight: "100vh",
        maxWidth: "unset!important",
        padding: "3rem",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <MapContainer styles={data} />
        <Button
          variant="outlined"
          onClick={router.back}
          sx={{
            marginTop: 0,
          }}
        >
          Back to Main Page
        </Button>
      </Box>
    </Container>
  );
};

const MapContainer = ({ styles }: { styles: StyleSpecification }) => {
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map>();
  const [spots, setSpots] = useState<maplibregl.LngLat[]>([]);
  const [markers, setMarkers] = useState<maplibregl.Marker[]>([]);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    if (!mapRef.current || !spots.length) return;

    if (markers.length >= 2) {
      markers.forEach((marker) => marker.remove());
    }

    const marker = new maplibregl.Marker()
      .setLngLat(spots[spots.length - 1])
      .addTo(mapRef.current);
    setMarkers((prev) => (prev.length >= 2 ? [marker] : [...prev, marker]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spots]);

  useEffect(() => {
    if (mapRef.current) return;

    const mapWidth = mapWrapperRef.current?.clientWidth || 0;
    let zoom = 3.5;
    if (mapWidth > 600) zoom = 4;
    if (mapWidth > 900) zoom = 2;

    const map = new maplibregl.Map({
      container: mapWrapperRef.current!,
      style: styles,
      center: [0, 51.5], // London
      minZoom: 1,
      zoom,
      renderWorldCopies: true,
      pitchWithRotate: false,
    });
    mapRef.current = map;

    map.on("load", () => {
      map.addControl(new maplibregl.NavigationControl({}), "top-right");

      map.dragRotate.disable();
      map.touchZoomRotate.disableRotation();
    });

    map.on("click", (e) => {
      setSpots((prev) => (prev.length >= 2 ? [e.lngLat] : [...prev, e.lngLat]));
    });
  }, [mapRef, styles]);

  useEffect(() => {
    if (!mapRef.current) return;

    if (mapRef.current.getSource("route")) {
      mapRef.current.removeLayer("route");
      mapRef.current.removeSource("route");
    }

    if (spots.length < 2) {
      setDistance(0);
      return;
    }

    const origin = spots[0].toArray();
    const destination = spots[1].toArray();
    setDistance(turf.distance(origin, destination, { units: "kilometers" }));

    const route = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [origin, destination],
          },
        },
      ],
    };

    mapRef.current.addSource("route", {
      type: "geojson",
      data: route,
    });

    mapRef.current.addLayer({
      id: "route",
      source: "route",
      type: "line",
      paint: {
        "line-width": 2,
        "line-color": "#007cbf",
      },
    });
  }, [spots]);

  return (
    <Box>
      <Box
        ref={mapWrapperRef}
        sx={{
          height: 500,
          border: "1px solid #ccc",
        }}
      ></Box>
      <Box sx={{ display: "flex" }}>
        <List sx={{ flex: 1 }}>
          <ListItem>
            <ListItemIcon
              sx={{
                minWidth: "unset",
                marginRight: "1rem",
              }}
            >
              <LocationIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                spots.length
                  ? `Longitude: ${spots[0].lng.toFixed(
                      2
                    )}, Latitude: ${spots[0].lat.toFixed(2)}`
                  : "waiting..."
              }
              secondary="From"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon
              sx={{
                minWidth: "unset",
                marginRight: "1rem",
              }}
            >
              <LocationIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                spots.length > 1
                  ? `Longitude: ${spots[1].lng.toFixed(
                      2
                    )}, Latitude: ${spots[1].lat.toFixed(2)}`
                  : "waiting..."
              }
              secondary="To"
            />
          </ListItem>
        </List>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
          }}
        >
          <Chip
            icon={<FlightIcon />}
            label={
              spots.length < 2 ? "waiting..." : `${distance.toFixed(2)} km`
            }
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Page;
