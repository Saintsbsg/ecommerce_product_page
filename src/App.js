import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";
import InfoCard from "./components/InfoCard/InfoCard";
import Input from "./components/Inputs/Input";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div>
       <Modal/>
      <Header/>
      <ImageSlider slides={SliderData}/>
      <InfoCard/>
      <Input/>
    </div>
  );
}

export default App;
