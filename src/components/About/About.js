import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/zack_bello.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/zack_bello_f_dev_cv.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Zack Bello, a graduate of Bsc. Computer Science at the
            University of Abuja, Abuja FCT, Nigeria. I am a full-stack developer
            specializing on the MERN stack. I am based in Lagos, Nigeria and a
            lover of knowledge exploits.
          </StyledParagraph>
          <StyledParagraph>
            As an adept Software Developer, I have a well-rounded skill set in
            Javascript, Typescript and honed talents in Node.js and its
            framework, Expressjs, React Native and React as well as relational
            and non-relational databases like MongoDB, Postgresql and Devops
            like Docker, AWS services making me an ideal fit for your team.
            Further, I am a recognized expert in agile teamwork and a
            communicative collaborator. My previous roles have strengthened my
            capabilities in communication and critical thinking, including a
            keen attention to detail and accuracy.
          </StyledParagraph>
          <StyledParagraph>
            I am a fast learner who puts himself forward always to learn more. I
            look forward to meeting you and learning from you.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="zack-bello-cv"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
