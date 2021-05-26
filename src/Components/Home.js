
import React from 'react';
import '../CSS/App.css';
import '../CSS/ButtonCross.css'
import '../CSS/CardAnimation.css'
import articleData from '../Data/HomeArticleData'

import Header from './Header'
import Carousel from './Carousel'
import CardAnimation from './CardAnimation'
import Footer from './Footer'


class Home extends React.Component {
  render(){

    console.log(articleData[0])
  return (
    <div className="App">
      
      <Header />
      <Carousel />
      <div className="Card-container">
      <CardAnimation src={articleData[0].imgsrc} heading={articleData[0].heading} content={articleData[0].content} />
      <CardAnimation src={articleData[1].imgsrc} heading={articleData[1].heading} content={articleData[1].content} />
      <CardAnimation src={articleData[2].imgsrc} heading={articleData[2].heading} content={articleData[2].content} />
      </div>
      <Footer />
    </div>
  )
  }
}

export default Home;
