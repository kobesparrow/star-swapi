import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import './ScrollingText.css'

const ScrollingText = (props) => {
    return(
      <article className="crawl-container"> 
        <Crawl
          title={ props.scrollingMovieInfo.title }
          subTitle={ props.scrollingMovieInfo.release_date }
          text={ props.scrollingMovieInfo.opening_crawl }
        />
      </article>
    )
}

export default ScrollingText;