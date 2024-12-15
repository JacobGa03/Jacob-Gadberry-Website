import headshot from "./assets/JacobTBPsmall.jpg"
import Section from "./components/Section"
import "./App.css"
import TitleComponent from "./components/TitleComponent"

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
        University of Central Florida. I am particularly interested in
        problem-solving with computers. I hope to learn more about software
        development and soon develop my own software for web applications.
      </p>
      <Section sectionName="Things I've Done"></Section>
      <Section sectionName="Contact Me"></Section>
    </>
  )
}

export default App
