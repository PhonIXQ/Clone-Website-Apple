import styled from "styled-components";
import { footerLinks } from "../constants";

const StyledFooter = styled.footer`
   display: flex;
   margin: auto;
   padding: 40px 0;
   max-width: 980px;

   div {
      display: flex;
      flex-direction: column;
      width: 100%;
   }

   h4 {
      font-size: 12px;
      font-weight: 600;
   }

   li {
      list-style: none;
      font-size: 12px;
      
      a {
         text-decoration: none;
         color: #000;

         &:hover {
            text-decoration: underline;
         }
      }
   }
`


const Footer = () => {
   return (
      <StyledFooter>
         {footerLinks.map((footerLink, idx) => (
            <div key={footerLink.title}>
               <h4>{footerLink.title}</h4>
               <ul>
                  {footerLink.links.map((link, idx) => (
                     <li key={idx}>
                        <a href="/">{link.name}</a>
                     </li>
                  ))}
               </ul>
            </div>
         ))}
      </StyledFooter>
   )
}

export default Footer