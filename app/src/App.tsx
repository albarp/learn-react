import Game from "./Components/Game/Game";
import Gallery from "./Components/Gallery/Gallery";
import ProduceFilterableTable from "./Components/Produce/ProduceFilterableTable";
import Profile from "./Components/Profile/Profile";
import PackingList from "./Components/Packing/PackingList";
import Scientists from "./Components/Scientist/Scientist";
import LightSwitch from "./Components/LightSwitch/LightSwitch";
import ColorChoose from "./Components/ColorSwitch/ColorChoose";
import SculptureGallery from "./Components/SculptureGallery/SculptureGallery";
import Chat from "./Components/Chat/Chat";
import TrafficLight from "./Components/TrafficLight/TrafficLight";
import Marketplace from "./Components/Marketplace/Marketplace";
import MovingDot from "./Components/MovingDot/MovingDot";
import UserForm from "./Components/UserForm/UserForm";
import ArtDetail from "./Components/ArtistDetail/ArtDetail";
import BackgroundBox from "./Components/BackGroundBox/BackgroundBox";
import ArtistList from "./Components/ArtistList/ArtistList";
import ArtistDelete from "./Components/ArtistDelete/ArtistDelete";
import ShapeEditor from "./Components/ShapeEditor/ShapeEditor";
import ThreeCounters from "./Components/ThreeCounters/ThreeCounters";

function App() {
  return (
    <>
      <ThreeCounters />
      <ShapeEditor />
      <ArtistDelete />
      <ArtistList />
      <BackgroundBox />
      <ArtDetail />
      <UserForm />
      <MovingDot />
      <Marketplace />
      <TrafficLight />
      <Chat />
      <SculptureGallery/>
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
