import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
   return (
      <ServicesContainer id="services">
         <ServicesH1>
            Our services
         </ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon1} />
               <ServicesH2>Reduce expenses</ServicesH2>
               <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna scelerisque, dignissim urna id, vehicula risus. </ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon2} />
               <ServicesH2>Virtual offer</ServicesH2>
               <ServicesP>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon3} />
               <ServicesH2>Premium benefit</ServicesH2>
               <ServicesP>  Integer eget pretium eros. Cras facilisis facilisis urna id suscipit.</ServicesP>
            </ServicesCard>
         </ServicesWrapper>

      </ServicesContainer >
   )
}

export default Services