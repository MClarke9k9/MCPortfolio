import React, { Component } from 'react';
import Slider from '../../components/Slider';
import Details from '../../components/Details';
import Pushdown from '../../components/Pushdown';
import Portfolio from '../../components/Portfolio';
import AdditionalDetails from '../../components/AdditionalDetails';

import Follow from '../../components/Follow';
import Contact from '../../components/Contact';
import AboutMe from '../../components/AboutMe';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <Slider />
        <Pushdown />
        <AboutMe />
        {/*<TestItems />*/}
        <Details />
        <AdditionalDetails />
        <Portfolio />
        <Follow />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
