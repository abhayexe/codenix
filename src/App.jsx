import { useState } from "react";
import Scene from "./components/Scene";
import Overlay from "./ui/Overlay";

function App() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <>
      <Scene onHotspotClick={setActiveHotspot} activeHotspot={activeHotspot} />
      <Overlay
        activeHotspot={activeHotspot}
        onClose={() => setActiveHotspot(null)}
      />
    </>
  );
}

export default App;
