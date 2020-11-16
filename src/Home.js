import React from 'react'
import './Home.css'
import Header from './Header.js'
import Banner from './Banner.js'
import Food1 from './Foodimages/Food1.jpeg'
import Food2 from './Foodimages/Food2.jpeg'
import Food3 from './Foodimages/Food7.jpeg'
import Food4 from './Foodimages/Food4.jpeg'
import Food5 from './Foodimages/Food5.jpeg'
import Food6 from './Foodimages/Food6.jpeg'
import Card from "./Card"

function Home() {
  return (
    <div className='home'>
      <Header />
      <Banner /> 
      <div className = 'home_section'>
      <Card 
      className = "images"
      src = {Food1}
      title = "Chicken Peri-Peri"
      description 
      />
      <Card 
      className = "images"
      src = {Food2}
      title = "Ofada rice"
      description 
      />
      <Card 
      className = "images1"
      src = {Food3}
      title = "Chicken Stew"
      description />
      <Card
      className = "images"
      src = {Food4}
      title = " Jollof Rice, Chicken and Plantain"
      description  />
      <Card 
      className = "images"
      src = {Food5}
      title = "Ofada Rice and Chicken sauce"
      description />
      <Card 
      className = "images"
      src = {Food6}
      title = "Amala and Gbegiri"
      description />
      </div>
    </div>
  )
};

export default Home
