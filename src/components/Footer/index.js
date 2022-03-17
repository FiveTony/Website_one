import React from 'react'
import { FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrap, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

import { FaYoutube, FaVk } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules'


const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop()
   }
   return (
      <FooterContainer>
         <FooterWrap>
            <FooterLinksContainer>
               <FooterLinksWrap>
                  <FooterLinksItems>
                     <FooterLinkTitle>About us</FooterLinkTitle>
                     <FooterLink to="/signin">How it works</FooterLink>
                     <FooterLink to="/signin">Careers</FooterLink>
                     <FooterLink to="/signin">Vacations</FooterLink>
                     <FooterLink to="/signin">Investors</FooterLink>
                     <FooterLink to="/signin">Terms of service</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                     <FooterLinkTitle>Videos</FooterLinkTitle>
                     <FooterLink to="/signin">Agency</FooterLink>
                     <FooterLink to="/signin">Submit</FooterLink>
                     <FooterLink to="/signin">Vacations</FooterLink>
                     <FooterLink to="/signin">Investors</FooterLink>
                  </FooterLinksItems>
               </FooterLinksWrap>
               <FooterLinksWrap>
                  <FooterLinksItems>
                     <FooterLinkTitle>Contact us</FooterLinkTitle>
                     <FooterLink to="/signin">Contact</FooterLink>
                     <FooterLink to="/signin">Support</FooterLink>
                     <FooterLink to="/signin">Destinations</FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                     <FooterLinkTitle>Social Media</FooterLinkTitle>
                     <FooterLink to="/signin">Instagram</FooterLink>
                     <FooterLink to="/signin">Facebook</FooterLink>
                     <FooterLink to="/signin">Youtube</FooterLink>
                     <FooterLink to="/signin">Twitter</FooterLink>
                  </FooterLinksItems>
               </FooterLinksWrap>
            </FooterLinksContainer>
            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>
                     smooth
                  </SocialLogo>
                  <WebsiteRights>
                     smooth  © {new Date().getFullYear()} Copyright Text
                  </WebsiteRights>
                  <SocialIcons>
                     <SocialIconLink href="//www.vk.com" target="_blank" aria-label="VK">
                        <FaVk />
                     </SocialIconLink>
                     <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer >
   )
}

export default Footer