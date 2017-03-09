import React, { Component } from 'react';
const HappyFace = require('../../public/img/happy-face.png');

class Application extends Component {
  render() {
    return (
      <section className='Application'>
        <h1>React Webpack Boilerplate is all set-up, happy coding!</h1>
        <img src='https://www.yay.com/static/img/about-01.png' />
        {<img src={HappyFace} alt='happy face' />}
      </section>
    );
  }
}

export default Application;
