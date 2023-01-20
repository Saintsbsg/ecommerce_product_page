import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";
import InfoCard from "./components/InfoCard/InfoCard";
import Input from "./components/Inputs/Input";
function App() {
  return (
    <div >
      <Header/>
      <ImageSlider slides={SliderData}/>
      <InfoCard/>
      <Input/>
      {/* <Button/> */}
    </div>
  );
}

export default App;
