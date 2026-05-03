import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/events_corner.svg";
import CartSvg from "../images/catering_cart.svg";
import { cartAnimation } from "../helpers/animations";

const YELLOW = "#faf9e1";
const CHARCOAL = "#414042";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  top: 55%;
  right: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
  }
`;

const Cart = styled.div`
  width: 25%;
  height: auto;
  position: absolute;
  bottom: 5%;
  left: 17%;

  &:hover {
    animation: ${cartAnimation} 2s steps(5, end) forwards;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
    bottom: 50%;
    left: 8%;
    &:hover {
      animation: none;
    }
  }
`;

const Heading = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-family: AvertaBold;
  font-size: 3.5rem;
  color: ${(props) => props.color};

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 40%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  font-size: 0.9rem;
  font-family: Averta;
  color: ${(props) => props.color};
  line-height: 27px;

  .bold {
    font-family: AvertaSemiBold;
  }

  a {
    color: ${(props) => props.color};
    text-decoration: none;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 2.5vw;
    line-height: 20px;
  }
`;

const SceneThree = (props) => (
  <SceneWrapper backgroundColor={YELLOW} height="1200px" mobileHeight="150vh">
    <Badge>
      <img src={BadgeSvg} />
    </Badge>
    <Cart>
      <img src={CartSvg} />
    </Cart>
    <Heading top="17%" left="10%" color={CHARCOAL}>
      <span>CATERING</span>
    </Heading>
    <TextBlock top="25%" left="10%" color={CHARCOAL}>
      <p>
        Sweetcream comes to you! We offer catering services for parties and
        events serving parties of all sizes.{" "}
        <a href="mailto:info@sweetcreamdairy.com" className="bold">
          CONTACT US
        </a>{" "}
        for more information.
      </p>
    </TextBlock>
  </SceneWrapper>
);

export default SceneThree;
