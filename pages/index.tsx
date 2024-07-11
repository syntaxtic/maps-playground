import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import type { mapData } from "../types/index";
import mapList from "../maps";

const Home: NextPage = () => {
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
          maxWidth: "600px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Maps Playground
        </Typography>
        <Catalog maps={mapList} />
      </Box>
    </Container>
  );
};

const Catalog = ({ maps }: { maps: mapData[] }) => {
  const router = useRouter();

  return (
    <List>
      {maps.map((map, i) => (
        <ListItem key={map.id}>
          <Button
            fullWidth
            sx={{
              padding: "1rem",
              height: "100%",
              backgroundColor: ["#00bbf9", "#d64045"][i % 2],
              borderRadius: "1rem",
              "&:hover": {
                backgroundColor: "black",
              },
              // change defaults
              display: "block",
              textTransform: "none",
              textAlign: "left",
            }}
            onClick={() => router.push("maps/" + map.id)}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
              }}
              gutterBottom
            >
              {map.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#ddd",
              }}
            >
              {map.description}
            </Typography>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Home;
