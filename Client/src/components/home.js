import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Chat } from "./chatbot";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from ".//Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Chat/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
