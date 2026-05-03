import React from "react";
import styled from "styled-components";
import { SceneWrapper } from "../components/styledElements";
import BadgeSvg from "../images/icecream_corner.svg";
import ChartSvg from "../images/chart.svg";
import PensSvg from "../images/pens.svg";
import ArrowSvg from "../images/arrow.svg";
import { rotationBuilder } from "../helpers/animations";

const PINK = "#e0dbed";
const YELLOW = "#FBFBE3";

const Badge = styled.div`
  width: 15%;
  height: auto;
  position: absolute;
  bottom: 0%;
  left: 0%;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 35%;
  }
`;

const Chart = styled.div`
  width: 300px;
  height: auto;
  position: absolute;
  top: 200px;
  right: 85px;
  animation: ${rotationBuilder()} 250s steps(60, start) infinite;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 30%;
    top: 23%;
    right: 5%;
  }
`;

const Pens = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  top: 340px;
  right: 230px;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 20%;
    top: 27%;
    right: 18%;
  }
`;

const Arrow = styled.div`
  width: 3%;
  height: auto;
  position: absolute;
  top: 525px;
  right: 150px;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    width: 4%;
    top: 33%;
    right: 10%;
  }
`;

const ChartText = styled.div`
  position: absolute;
  width: 20%;
  text-align: center;
  top: 650px;
  right: 50px;
  font-size: 0.8rem;
  font-family: Averta;
  color: #414042;
  line-height: 20px;
  transform: rotate(-8deg);

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    top: 37%;
    font-size: 1.7vw;
    line-height: 10px;
    right: 5%;
    width: 30%;
  }
`;

const TextBlock = styled.div`
  position: absolute;
  width: 50%;
  top: ${props => props.top};
  left: ${props => props.left || "10%"};
  font-size: 0.9rem;
  font-family: Averta;
  color: #414042;
  line-height: 27px;

  .bold {
    font-family: AvertaSemiBold;
  }

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    line-height: 15px;
    font-size: 2.7vw;
    p {
      margin-bottom: 10%;
    }
  }
`;

const Heading = styled.div`
  font-family: AvertaBold;
  font-size: 3.5rem;
  color: ${props => props.color};
  margin: 5% 0;

  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    font-size: 6vw;
  }
`;

const SourcingList = styled.div`
  width: 100%;
  margin: 5% 0;
  display: flex;
  justify-content: space-around;

  .column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      margin-bottom: 5%;
    }
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    margin: 7% 0;
  }
`;

const IceCreamWrapper = styled.div`
  @media only screen and (min-device-width: 300px) and (max-device-width: 812px) {
    ${TextBlock}.first {
      top: 10%;
      width: 80%;
    }
    ${TextBlock}.second {
      top: 23%;
      width: 45%;
    }
    ${TextBlock}.third {
      top: 50%;
      width: 80%;
    }
  }
`;

const SceneTwo = () => (
  <SceneWrapper backgroundColor={PINK} height="1500px" mobileHeight="185vh">
    <IceCreamWrapper>
      <Chart>
        <img src={ChartSvg} />
      </Chart>
      <Pens>
        <img src={PensSvg} />
      </Pens>
      <Badge>
        <img src={BadgeSvg} />
      </Badge>
      <TextBlock className="first" top="15%">
        <p>
          We make ice cream because we love eating it! Our hope is to find the
          most delicious version of each flavor, whether it be an old classic or
          a fresh new idea. We are always tweaking and improving our recipes and
          have found that keeping our recipes simple and sourcing our
          ingredients responsibly most often leads to the best results.
        </p>
      </TextBlock>
      <TextBlock className="second" top="25%" width>
        <Heading>SIMPLICITY</Heading>
        <p>
          We keep our ingredient list short. We believe that fewer components
          translates to better, brighter, and more genuine flavor. We chose to
          pasteurize our own mix so that we could avoid industrial ingredients
          like gums, emulsifiers and artificial flavorings. Instead, we choose
          to work with ingredients you’d likely find at the farmer’s market and
          your local grocery store. You’ll probably find most of our ingredients
          at home in your kitchen pantry!
        </p>
      </TextBlock>
      <TextBlock className="third" top="43%">
        <Heading>SOURCING</Heading>
        <p>
          Our goal is to reinvest as much of our sales as possible back into the
          local economy. We source our ingredients and flavorings directly from
          Maine farms and producers whenever possible. That means direct, hand
          to hand transactions with the farmers themselves.
        </p>
        <SourcingList>
          <div className="column">
            <span>Passamaquoddy Wild Blueberry Farm</span>
            <span>Harris Farm</span>
            <span>McDougal Orchards</span>
          </div>
          <div className="column">
            <span>Sawyer's Maple Farm</span>
            <span>Snell Farm</span>
            <span>Stevenson's Strawberries</span>
          </div>
        </SourcingList>
      </TextBlock>
      <ChartText>
        <p>
          Recorder charts! You'll see these in the back of our shop. They keep
          track of the temperature of the ice cream mix during pasteurization.
        </p>
      </ChartText>
      <Arrow>
        <img src={ArrowSvg} />
      </Arrow>
    </IceCreamWrapper>
  </SceneWrapper>
);

export default SceneTwo;
