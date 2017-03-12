import React, { Component } from 'react';
import Dance from '../../public/img/dance.js';
const HappyFace = require('../../public/img/happy-face.png');

class Application extends Component {
  render() {
    return (
      <section className='Application'>
        <h1>React Webpack Boilerplate is all set-up, happy coding! <Dance /></h1>
        <img src={HappyFace} alt='happy face' />
      </section>
    );
  }
}

export default Application;
