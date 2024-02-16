import styled from "styled-components";
import iphone15pro from "../assets/hero_iphone15pro.jpg";
import iphone15_announce from "../assets/hero_iphone15_announce.jpg";

const StyledRibbon = styled.div`
   display: flex;
   padding: 12px 0;
   font-size: 14px;

   div {
      margin: auto;
   }

   a {
      text-decoration: none;

      &:hover {
         text-decoration: underline;
      }
   }
`;

const StyledHero = styled.section`
   display: flex;
   flex-direction: column;
`;

const Hero = () => {
   return (
      <>
         <StyledRibbon>
            <div>
               <span>
                  <a href="/shop">Shop online</a>
               </span>
               {" "}and get Specialist help, free delivery and more. Get in‑stock items with Apple Pickup.</div>
         </StyledRibbon>
         <StyledHero>
            <img src={iphone15pro} alt="iphone15pro" />
            <img src={iphone15_announce} alt="iphone15_announce" />
         </StyledHero>
      </>
   )
}

export default Hero