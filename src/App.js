import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";
function App() {
  return (
    <div >
      <Header/>
      <ImageSlider slides={SliderData}/>
    </div>
  );
}

export default App;
