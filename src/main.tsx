import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GameHubApp from "./game-hub-app/GameHubApp";
import JamifyApp from "./jamify/JamifyApp";
import GeospatialApp from "./geospatial/GeospatialApp";
import BeeApp from "./bee-listener/BeeApp";
import HockeyHubApp from "./hockey-hub-app/HockeyHubApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game-hub",
    element: <GameHubApp />,
  },
  {
    path: "/jamify",
    element: <JamifyApp />,
  },
  {
    path: "/geospatial",
    element: <GeospatialApp />,
  },
  {
    path: "/bee-listener",
    element: <BeeApp />,
  },
  {
    path: "/hockey-hub",
    element: <HockeyHubApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
