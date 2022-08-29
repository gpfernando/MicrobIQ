//import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
import { Button, Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Appbar from "./components/appbar";
import theme from "./styles/theme";
import { useEffect } from "react";
// import Banner from "./components/banner";
// import Products from "./components/products";
// import { UIProvider } from "./context/ui";
// import Footer from "./components/footer";
// import AppDrawer from "./components/drawer";
// import Promotions from "./components/promotions";
// import SearchBox from "./components/search";

function App() {
  useEffect(() => {
    document.title = "MicrobIQ - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>

    <Container
      maxWidth="xl"
      sx={{
        background:'#fff',
      }}
      >
        <Appbar />

      { /*
        Banner
        Promotions
        title
        Products
        footer
        searchbox
        appdrawer
        */
      }

   <div className="App"><Button variant='contained'>Test</Button></div>
    </Container>
      </ThemeProvider>
  );
  }

export default App;