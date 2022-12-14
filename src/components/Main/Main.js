import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

export default function Main({ loggedIn }) {
    return (
        <>
        <Header loggedIn={loggedIn}/>
        <main className='main-section'>
          <Promo></Promo>
          <AboutProject></AboutProject>
          <Techs></Techs>
          <AboutMe></AboutMe>
          <Portfolio></Portfolio>            
        </main>
        <Footer/>
        </>
    )
}