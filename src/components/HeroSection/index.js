import { useState } from 'react'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements'
import Video from '../../videos/video2.mp4'
import { Button } from '../ButtonElement'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
      console.log(hover)

   }

   return (
      <HeroContainer id='home'>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
         </HeroBg>
         <HeroContent>
            <HeroH1>"Smooth Operator" is a song by English band Sade from their debut studio album</HeroH1>
            <HeroP>sign up to get more information</HeroP>
            <HeroBtnWrapper>
               <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80} >
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
               </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection