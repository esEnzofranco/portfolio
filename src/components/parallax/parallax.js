import React from "react";
import '../../styles/parallax/parallax.css'
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import backgroundOne from '../../images/parallax/background-1.jpg';
import backgroundTwo from '../../images/parallax/background-2.jpg';
import backgroundThree from '../../images/parallax/background-3.jpg';
import Toolbox from '../toolbox/toolbox'
import Presentation from "../presentation/presentation";
import Projects from "../projects/projects";



const ParallaxComponent = () => {

  return (
    <div className="parallax-component">
      <ParallaxBanner className="first-banner" >
        <ParallaxBannerLayer className="layer" speed={-40}>
          <img className="banner-img" src={backgroundOne} alt="" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="layer" speed={0}>
          <Presentation />
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <ParallaxBanner className="second-banner" >
        <ParallaxBannerLayer className="toolbox-layer layer" speed={-40}>
          <img className="banner-img s" src={backgroundTwo} alt="" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="toolbox-layer layer" speed={-0}>
          <Toolbox />
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <ParallaxBanner className="third-banner" >
        <ParallaxBannerLayer className="layer" speed={-40}>
          <img className="banner-img" src={backgroundThree} alt="" />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="projects-layer" speed={-0}>
          <Projects />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  )
}

export default ParallaxComponent;