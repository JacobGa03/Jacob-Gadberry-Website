import headshot from "./assets/JacobTBPsmall.jpg"
import Section from "./components/Section"
import "./App.css"
import TitleComponent from "./components/TitleComponent"
import ContactRow from "./components/ContactRow"

function App() {
  return (
    <>
      <TitleComponent
        title={"Jacob Gadberry"}
        subtitle={"Student && Developer"}
        imageURI={headshot}
      ></TitleComponent>
      <Section sectionName="About Me"></Section>
      <p>
        Hello! My name is Jacob Gadberry, and I am currently a senior at the
        University of Central Florida studying Computer Science. My interests
        include web development. I have had with different technologies like
        React, Node.js, and JavaScript for web. Along with making web
        applications, I have also made cross-platform applications with Flutter.
        I am always looking to learn more and improve my skills.
      </p>
      <Section sectionName="Things I've Done"></Section>
      <h2>DriveU</h2>
      <p>
        A current project that I am working on is called DriveU, a
        student-to-student ride sharing application for university students. I
        am taking the role of Project Manager and lead Flutter developer. As
        project Manager, I ensure that the project is on track and that the team
        is working efficiently. As the lead Flutter developer, I build and
        maintain the cross-platform Flutter application which is the focal point
        of the whole project.
      </p>
      <h2>Accountability</h2>
      <p>
        This application was built as part of COP 4331C (Processes For Object
        Oriented Software Development) at my university. In this project, I was
        the Project Manager as well as the lead Flutter developer for the mobile
        companion app that worked along side the website. As Project Manager, I
        ensured all team members contributed and were on track to complete the
        project within a two month time frame. As the lead Flutter developer, I
        was responsible for building the mobile app that would work with the
        website.
      </p>
      <h2>Open Source Computer Science Materials</h2>
      <p>
        Wiki Knights, a club that I am a part of, has a website in which they
        host tutorials on different topics from the Computer Sciences classes at
        our university. We make informative tutorials on different subjects such
        as C programming and data structures and algorithms. These tutorials
        supplement material given by the professors and I have found it useful
        since I have used it myself in classes.
      </p>

      <ContactRow></ContactRow>
    </>
  )
}

export default App
