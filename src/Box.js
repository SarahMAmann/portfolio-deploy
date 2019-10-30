import React from 'react';
import './App.css';
import {SocialCard, posts} from './ButtonBox'


function Box() {
  return (
    <div>
        <p className="samples">PORTFOLIO SAMPLES</p>
        <div className='card-grid-view'>
      {posts.map(e => (
        <SocialCard 
          key={e.id}
          content={e.content}
          />
      ))}
    </div>
    </div>
  );
}

export default Box;