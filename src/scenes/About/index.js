import React from 'react';
import { changePageTitle } from '../../services/domUtils';

export default function About() {
  changePageTitle('About - Sean Corrales');
  return (
    <div className="page-container">
      <h2>About</h2>
      <p>
        I've been a web developer for almost 20 years. I started out in 2001
        building sites using plain HTML. I quickly learned PHP and MySQL and
        started building dynamic web sites that could be managed by
        non-technical users. Since 2015, my primary focus has been Javascript
        and node.js with plenty of HTML and CSS as needed. Lately, I've been
        working with React, Koa, and MongoDB.
      </p>
      <p>
        Over the span of my career, I've worked with several talented designers
        who helped me develop strong CSS skills and an excellent eye for detail
        in design. I've developed custom e-commerce solutions, built and managed
        Linux servers, created custom modules for various CMSs, built custom
        montioring applications, mentored junior developers, and a ton of other
        stuff.
      </p>
      <p>
        I like fixing bugs and writing tests. I love building applications with
        great UX. My favorite things to build are things that will have a
        positive impact on my users.
      </p>
    </div>
  );
}
