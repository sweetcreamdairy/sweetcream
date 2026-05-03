import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import ConeSvg from "../images/cone.svg";
import BadgeSvg from "../images/landing_corner.svg";
import WaveSvg from "../images/wave.svg";

const PALE_PINK = "#f0cdb6";
const SWEETGREEN = "#005851";

const IceCream = styled.div`
  height: auto;
  width: 15%;
  position: absolute;
  top: 145px;
  right: 12%;
  z-index: 2;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 20%;
    right: 5%;
    top: 15%;
  }
`;

const Wave = styled.div`
  width: 100%;
  position: absolute;
  bottom: -2%;
  left: 0%;
  z-index: 0;
`;

const BadgeWrapper = styled.div`
  height: auto;
  width: 10%;
  position: absolute;
  bottom: 0%;
  left: 2%;
  z-index: 2;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 50%;
  top: 200px;
  left: 10%;
  font-size: 2.1rem;
  font-family: Averta;
  color: #414042;
  line-height: 65px;

  .bold {
    font-family: AvertaSemiBold;
    line-height: 20px;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 5vw;
    top: 35%;
    width: 80%;
    line-height: 23px;

    p {
      margin-bottom: 22%;
    }

    .bold {
      font-size: 6vw;
      line-height: 35px;
    }
  }
`;

const IndexPage = () => (
  <SceneWrapper backgroundColor={PALE_PINK}>
    <IceCream>
      <img src={ConeSvg} />
    </IceCream>
    <BadgeWrapper>
      <img src={BadgeSvg} />
    </BadgeWrapper>
    <Wave>
      <img src={WaveSvg} />
    </Wave>
    <TextBlock>
      <p>
        <div className="bold">HANDMADE IN BIDDEFORD</div>
        <div>Now open 7 days a week</div>
      </p>
    </TextBlock>
  </SceneWrapper>
);

export default IndexPage;
