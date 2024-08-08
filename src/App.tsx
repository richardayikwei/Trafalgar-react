import Navbar from './components/Navbar'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import ServiceStatement from './components/ServiceStatement'
import { services } from "./components/Data";
import Profile from './components/Profile'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <SectionOne />
      <ServiceStatement />
      <SectionTwo />
      <SectionThree
        direction={"flex-row"}
        src={services[6].image}
        statement={services[6].statement}
        text={services[6].text}
        btntext={"Learn more"}
        position="justify-start"
      />
      <SectionThree
        direction={"flex-row-reverse"}
        src={services[7].image}
        statement={services[7].statement}
        text={services[7].text}
        btntext="Download &#8595;"
        position="justify-start"
      />
      <Profile />
      <SectionFour />
      <Footer />
    </>
  );
}

export default App
