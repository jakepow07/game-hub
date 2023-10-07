import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

// API key: a34fd16e20014cd9ac5937788d363299

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
    >
      <GridItem area="nav">Dark Mode</GridItem>
      <NavBar />
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main"> 
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
