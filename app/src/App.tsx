import Game from "./Components/Game/Game";
import Gallery from "./Components/Gallery/Gallery";
import ProduceFilterableTable from "./Components/Produce/ProduceFilterableTable";
import Profile from "./Components/Profile/Profile";
import PackingList from "./Components/Packing/PackingList";
import Scientists from "./Components/Scientist/Scientist";
import LightSwitch from "./Components/LightSwitch/LightSwitch";
import ColorChoose from "./Components/ColorSwitch/ColorChoose";

function App() {
  return (
    <>
      <ColorChoose />
      <LightSwitch />
      <Scientists />
      <Game />
      <ProduceFilterableTable />
      <Gallery />
      <Profile />
      <PackingList />
    </>
  );
}

export default App;
