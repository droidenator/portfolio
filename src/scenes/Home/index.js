import React from 'react';
import { changePageTitle } from '../../services/domUtils';

export default function Home() {
  changePageTitle('Home - Sean Corrales');
  return (
    <div>
      <h1>Hi! My name is Sean Corrales.</h1>
      <h4>
        I'm a software developer building stuff with JavaScript, node.js, HTML,
        and CSS.
      </h4>
    </div>
  );
}
