import React from "react";
import { Parallax } from "react-parallax";
import parralaxImage from "../../assets/quote-background.jpg";
import { ParallaxContainer, ParallaxText } from "../styles/Parallax.styled";

const ParallaxComponent = () => {
  return (
    <Parallax bgImage={parralaxImage} strength={-200} style={{ width: "100%" }}>
      <ParallaxContainer>
        <ParallaxText>
          The courage to continue, <br />
          despite whatever setbacks <br />
          is the huge success.
        </ParallaxText>
      </ParallaxContainer>
    </Parallax>
  );
};

export default ParallaxComponent;
