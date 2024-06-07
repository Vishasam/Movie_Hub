import { Grid } from "@chakra-ui/react";
import { lazy } from "react";
import MovieCard from "./MovieCard";

const Header = lazy(() => import("../../Components/UI/Header"))

export default function Home() {
  return (
    <>
      <Header />
      <Grid>
        <MovieCard />
      </Grid>
    </>
  );
}
