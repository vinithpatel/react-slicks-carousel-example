import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-bg-container">
      <Slider {...settings} data-testid="planets">
        {planetsList.map(eachPlanelObject => (
          <PlanetItem
            key={eachPlanelObject.id}
            planetDetails={eachPlanelObject}
          />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
