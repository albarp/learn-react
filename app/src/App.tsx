import Game from "./Components/Game/Game";
import Gallery from "./Components/Gallery/Gallery";
import ProduceFilterableTable from "./Components/Produce/ProduceFilterableTable";
import Profile from "./Components/Profile/Profile";
import PackingList from "./Components/Packing/PackingList";
import Scientists from "./Components/Scientist/Scientist";

function App() {
  return (
    <>
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
