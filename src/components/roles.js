import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import content from '../../content/roles.yaml';
import Engineer from "../../static/images/engineer-logo.png";
import Design from "../../static/images/designer-logo.png";
import PM from "../../static/images/pm-logo.png";

export default () => (
  <section id='roles'>
    {content.map((value, index) => {
      let pos, imagepos;
      if (index % 2 === 0) {
        pos = 'left';
        imagepos = 'right';
      } else {
        pos = 'right';
        imagepos = 'left';
      }

      return (
        <div key={value.name} className={'row role ' + value.name}>
          <ScrollAnimation
            animateIn='pulse'
            animateOnce={true}
            initiallyVisible={true}
            className={'six columns role-media ' + imagepos}
          >
            {value.name === "Engineer" && <img src={Engineer} alt='' />}
            {value.name === "Designer" && <img src={Design} alt='' />}
            {value.name === "Product Manager" && <img src={PM} alt='' />}
          </ScrollAnimation>
          <div className={'six columns ' + pos}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
            {value.link ? (
              <a href={value.link}>
                <button>{value.action}</button>
              </a>
            ) : null}
          </div>
        </div>
      );
    })}
  </section>
);
