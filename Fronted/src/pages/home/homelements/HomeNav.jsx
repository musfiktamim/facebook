import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Homenavbox from "./homenavitems/Homenavbox";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };

function HomeNav() {
  return (
    <div className="w-[360px] h-[100px] grid grid-flow-col m-auto items-center pl-1 pr-1 bg-white mt-2">
      <Carousel containerClass="carousel-container" transitionDuration={500} responsive={responsive} swipeable={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
        <Homenavbox />
      </Carousel>
    </div>
  )
}

export default HomeNav
