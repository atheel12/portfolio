import Nav from "./components/Nav";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skills/skill";
import Work from "./components/Works/work";
import Contact from "./components/Education/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Intro/>
    <Skill/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
