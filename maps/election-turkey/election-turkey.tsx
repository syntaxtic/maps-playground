import { useRef, useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { Box, Button, Chip, Container, Stack } from "@mui/material";
import { Circle as CircleIcon } from "@mui/icons-material";

import maplibregl, { LngLatLike } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import * as turf from "@turf/turf";
import GeoJSON from "geojson";

import { fakeData, parties, colors } from "./fake-data";

const Page = () => {
  const { data, error } = useSWR("/geojson/tr-cities.geojson", (path) =>
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
        <MapContainer geojson={data} />
        <Button
          variant="outlined"
          onClick={router.back}
          sx={{
            marginTop: "2rem",
          }}
        >
          Back to Main Page
        </Button>
      </Box>
    </Container>
  );
};

const MapContainer = ({ geojson }: { geojson: GeoJSON.FeatureCollection }) => {
  const timeRange = 7;
  const mapRef = useRef<maplibregl.Map>();
  const mapWrapperRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(timeRange);
  const [step, setStep] = useState(0);
  const [timeoutState, setTimeoutState] = useState<null | ReturnType<
    typeof setTimeout
  >>(null);

  useEffect(() => {
    geojson.features.forEach((feature) => {
      feature.id = feature.properties!.number;
    });
  }, [geojson]);

  useEffect(() => {
    if (mapRef.current) return;

    const mapWidth = mapWrapperRef.current?.clientWidth || 0;
    let zoom = 3.5;
    if (mapWidth > 600) zoom = 4;
    if (mapWidth > 900) zoom = 5;

    const map = new maplibregl.Map({
      container: mapWrapperRef.current!,
      style: { version: 8, sources: {}, layers: [] },
      center: turf.center(geojson as turf.AllGeoJSON).geometry
        .coordinates as LngLatLike,
      zoom,
      renderWorldCopies: false,
    });
    mapRef.current = map;

    map.on("load", () => {
      map.addSource("cities", {
        type: "geojson",
        data: geojson,
      });

      map.addLayer({
        id: "cities-layer",
        type: "fill",
        source: "cities",
        paint: {
          "fill-color": ["string", ["feature-state", "fillColor"], colors[0]],
          "fill-outline-color": "#000",
        },
      });

      const fs = new maplibregl.FullscreenControl({});
      map.addControl(fs, "bottom-left");

      const nav = new maplibregl.NavigationControl({});
      map.addControl(nav, "bottom-left");

      map.on("click", "cities-layer", (e) => {
        map.panTo(e.lngLat);
      });

      // Popup
      const popup = new maplibregl.Popup({
        closeOnClick: false,
        closeButton: false,
        offset: 15,
      });

      map.on("mouseenter", "cities-layer", () => {
        popup.addTo(map);
      });

      map.on("mousemove", "cities-layer", (e) => {
        popup.setLngLat(e.lngLat).setHTML(e.features![0].properties!.name);
      });

      map.on("mouseleave", "cities-layer", () => {
        popup.remove();
      });
    });
  }, [geojson, mapRef]);

  useEffect(() => {
    if (isPaused) return;
    if (timeoutState) clearTimeout(timeoutState);
    if (timer > 0) {
      setTimeoutState(setTimeout(() => setTimer((v) => v - 1), 1000));
    } else {
      setTimeoutState(
        setTimeout(() => {
          setTimer(timeRange);
          setStep((v) => (v + 1) % 5);
        }, 1000)
      );
    }
    // eslint-disable-next-line
  }, [timer, isPaused]);

  useEffect(() => {
    if (
      !mapRef.current ||
      !mapRef.current.isStyleLoaded() ||
      !mapRef.current.isSourceLoaded("cities")
    )
      return;

    fakeData.forEach((city) => {
      mapRef.current!.setFeatureState(
        { source: "cities", id: city.number },
        {
          party: city.steps[step].party,
          isElected: city.steps[step].isElected,
          isStarted: city.steps[step].isStarted,
          fillColor: colors[city.steps[step].party],
        }
      );
    });
  }, [step]);

  const resetMap = () => {
    mapRef.current?.flyTo({
      center: turf.center(geojson as turf.AllGeoJSON).geometry
        .coordinates as LngLatLike,
      zoom: 5,
      bearing: 0,
      pitch: 0,
    });
  };

  const resetTimer = () => {
    if (timeoutState) clearTimeout(timeoutState);
    setTimer(timeRange);
    setStep(0);
  };

  return (
    <Box>
      <Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Button disabled>Updating in {timer} seconds</Button>
          <Button disabled>Polls: {(step % 5) * 25}%</Button>
        </Stack>
      </Box>
      <Box
        ref={mapWrapperRef}
        sx={{
          height: 500,
          border: "1px solid #ccc",
          "& .maplibregl-popup-tip": {
            display: "none",
          },
          "& .maplibregl-popup-content": {
            padding: "5px",
            backgroundColor: "#000",
            color: "#fff",
          },
        }}
      ></Box>
      <Stack
        direction="row"
        spacing={0}
        sx={{
          justifyContent: "center",
          flex: "1 1 0",
        }}
      >
        {parties.map((party, index) => (
          <Chip
            key={index}
            icon={<CircleIcon />}
            size="small"
            label={party}
            sx={{
              backgroundColor: "transparent",
              border: "none",
              "& .MuiChip-icon": { color: colors[index + 1] },
            }}
          />
        ))}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          flex: "1 1 0",
          marginTop: "1rem",
        }}
      >
        <Button variant="outlined" onClick={resetMap}>
          Reset Map
        </Button>
        <Button variant="outlined" onClick={resetTimer}>
          Reset Timer
        </Button>
        <Button variant="outlined" onClick={() => setIsPaused((v) => !v)}>
          {`${isPaused ? "Resume" : "Pause"} Timer`}
        </Button>
      </Stack>
    </Box>
  );
};

export default Page;
