import { useEffect } from "react";

const BeeApp = () => {
  useEffect(() => {
    window.location.replace(
      "https://github.com/jamshale/bee-listener/blob/develop/streamer/frequency-script_noise_reduce.py"
    );
  }, []);

  return null;
};

export default BeeApp;
