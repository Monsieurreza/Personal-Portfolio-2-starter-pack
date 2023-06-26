import Footer from "./components/Footer/footer";
import People from "./components/People/people";
import Porfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Experties from "./components/experties/experties";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import css from './styles/app.module.scss'
import './styles/global.scss'
import './styles/index.css'



const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>

    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Porfolio/>
    <People/>
    <Footer/>

    </div>
  )
  
};

export default App;
