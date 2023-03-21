import { useEffect } from "react";

const GeospatialApp = () => {
  useEffect(() => {
    window.location.replace(
      "https://github.com/jamshale/Geospatial/blob/master/Distributed%20Systems%20-%20Project.pdf"
    );
  }, []);

  return null;
};

export default GeospatialApp;
