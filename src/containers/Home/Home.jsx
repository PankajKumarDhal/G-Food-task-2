import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Middle from "../../components/Home/Middle";
import Card from '../../components/Home/card';
import Footer from '../../components/Footer/footer';


// import './App.css'


function Home() {

  return (
    <>
      <Navbar />
      <Middle />
      <Card />
      <Footer />

      
    </>
  )
}

export default Home