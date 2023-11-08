import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/max.png'
          alt='main blog image showing my portrait '
          width={300}
          height={300}
        />
      </div>
      <h1 className=''>hi, I'm ahmed</h1>
      <p>I am mern developer, love to mix the art with the code </p>
    </section>
  );
}

export default Hero;
