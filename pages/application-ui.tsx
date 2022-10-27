import ApplicationCards from "../components/application-ui/ApplicationCards";
import Buttons from "../components/application-ui/Buttons";
import Carousels from "../components/application-ui/Carousels";
import ColorSchemeToggles from "../components/application-ui/ColorSchemeToggles";
import DragNDrop from "../components/application-ui/DragNDrops";
import Footers from "../components/application-ui/Footers";
import Grids from "../components/application-ui/Grids";
import Headers from "../components/application-ui/Headers";
import Inputs from "../components/application-ui/Inputs";
import NavBars from "../components/application-ui/NavBars";
import Sliders from "../components/application-ui/Sliders";
import Stats from "../components/application-ui/Stats";
import Tables from "../components/application-ui/Tables";
import UserInfo from "../components/application-ui/UserInfo";

const ApplicationUI = () => {
  return (
    <>
      <ApplicationCards />
      <Buttons />
      <Carousels image="a" title="a" category="a" />
      {/* <ColorSchemeToggles /> */}
      {/* <DragNDrop /> */}
      <Footers />
      <Grids />
      <Headers />
      <Inputs />
      {/* <NavBars /> */}
      <Sliders />
      {/* <Stats /> */}
      {/* <Tables /> */}
      {/* <UserInfo /> */}
    </>
  );
};

export default ApplicationUI;
