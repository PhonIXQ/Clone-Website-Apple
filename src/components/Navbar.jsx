import styled from "styled-components";
import { navLinks } from "../constants";
import iconLogo from "../assets/logo.svg";
import iconSearch from "../assets/search.svg";
import iconBag from "../assets/bag.svg";

const StyledNav = styled.div`
   display: flex;
   height: 44px;
   max-width: 1024px;
   margin: auto;
   padding: 0 22px;
   align-items: center;
   justify-content: space-between;

   img {
      display: flex;
      align-items: center;
   }
`;

const StyledList = styled.ul`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   list-style: none;
   
   li {
      display: flex;
      padding: 0 8px;

      a {
         font-size: 12px;
         font-weight: 400;
         color: rgba(0, 0, 0, 8);
         text-decoration: none;

         &:hover {
            color: #000;
         }
      }
   }
`;

const Navbar = () => {
   return (
      <StyledNav>
         <StyledList>
            <li>
               <a href="/">
                  <img src={iconLogo} alt="iconLogo" /></a>
            </li>
            {navLinks.map(({ id, title }, idx) => (
               <li key={id}>
                  <a href={id}>{title}</a>
               </li>
            ))}
            <li>
               <a href="/">
                  <img src={iconSearch} alt="iconSearch" /></a>
            </li>
            <li>
               <a href="/">
                  <img src={iconBag} alt="iconBag" /></a>
            </li>
         </StyledList>
      </StyledNav>
   )
}

export default Navbar