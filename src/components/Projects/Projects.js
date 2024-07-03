import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Clouditix.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Mulberry.png";
import Developer from "../../Assets/Projects/Developer.png"
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Farm from "../../Assets/Projects/farm.png"
import chatify from "../../Assets/Projects/chatify.png";
import Contract from "../../Assets/Projects/contract.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Developer}
              isBlog={false}
              title="Developer HUB "
              description="Developed and launched Developer Hub, a web
              application dedicated to coding-related channels and
              videos Used YouTube API to seamlessly integrate and display
              curated coding videos and channels in the dashboard
              implementing a user-friendly interface using ReactJS, JavaScript, HTML, and CSS"
              demoLink="https://developer-hubs.netlify.app/"
            />
    
          </Col>
          <Col md={4} className="project-card">
             <ProjectCard
              imgPath={Contract}
              isBlog={false}
              title="Contract Right "
              description="I developed Contract Right, a sophisticated web platform using Next.js and TypeScript for a US-based client. This platform enables clients to seamlessly sell their solar energy products. By leveraging the powerful capabilities of Next.js, the site boasts server-side rendering, ensuring fast load times and superior performance. TypeScript was utilized to enhance code quality and maintainability, facilitating a robust and scalable solution. The project emphasizes clean, intuitive design and a smooth user experience, catering to the growing market of renewable energy solutions.






"
              demoLink="https://soler-portal.vercel.app/"
            />
            </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Farm}
              isBlog={false}
              title="Farm Infinity"
              description="Developed and implemented a user-friendly admin dashboard
              managing KYC, registration, and loan processes using ReactJS, PHP and AWS Amplify
              Optimized interface for enhanced user experience, adopted by
              both internal employees and external users. Seamlessly integrated a secure payment gateway into the
              company's website ensuring smooth and secure online
              transactions for users .Implemented the integration of commercial APIs, expanding
              the platform's capabilities and providing users with real-time, up-to-date information"
             
              demoLink="https://www.farminfinity.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="mulberry"
              description="I have successfully developed a home page for our client's website, focusing on creating a visually appealing and inviting introduction to their online presence. By implementing responsive design using ReactJS, I've ensured that the website seamlessly adapts to different devices and screen sizes, guaranteeing a smooth user experience across the board. The website not only meets but exceeds customer expectations, with features and functionalities designed to specifically cater to their needs. This integration of cutting-edge technology and user-centric design reflects our commitment to delivering a high-quality and tailored digital solution for our client."
              demoLink="https://mulberry.dev-servers.live/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Clouditix Technology"
              description="In my role at Clouditix Technologies, a cloud-enabled data management company, I had the opportunity to contribute extensively to various sections of the client's website. Working across different facets of the project, I dedicated my efforts to ensuring a comprehensive and cohesive web presence. Leveraging the versatility of ReactJS, I played a pivotal role in enhancing the user experience across every section of the website. From implementing responsive design elements to addressing specific client requirements, my work aimed at fulfilling and exceeding the client's expectations. Through collaboration and a commitment to excellence, I successfully navigated the complexities of the project, ultimately delivering a robust and dynamic website that aligns seamlessly with the client's vision and objectives.
              "
             
              demoLink="https://clouditix.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
            
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
