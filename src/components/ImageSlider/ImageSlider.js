import {useState} from 'react'
import { SliderData } from './SliderData'
import IconNext from '../../assets/images/icon-next.svg'
import IconPrevious from '../../assets/images/icon-previous.svg'
import './Slider.css'
const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>{
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className='slider'>
      <img src={IconNext} className='right-arrow' onClick={nextSlide}/>
      <img src={IconPrevious} className= 'left-arrow' onClick={prevSlide}/>
        {SliderData.map((slide, index) =>{
            return(
              <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                   <img src={slide.image} alt="sneaker" className='image'  />
                )}
               
              </div>
            ) 
        })}
    </section>
  )
}

export default ImageSlider