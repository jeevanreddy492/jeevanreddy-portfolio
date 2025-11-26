import About from "./components/About";
import Contact from "./components/Contact";
import Experience1 from "./components/Experience1";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    // <div style={{ textAlign: "center", marginTop: "100px" }}>
    //   <h1>Hello, I'm Jeevan Reddy 👋</h1>
    //   <p>Welcome to my portfolio built with React + Vite!</p>

    //   </Navbar/>

    // </div>
    <div>
      <Navbar/>
      <Hero/>
      <Experience1/>
      <About/>
      
      <Projects/>
      <Contact/>
    </div>
  );
}
