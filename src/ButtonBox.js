import React from 'react';
import workone from './portfolio work 1.png';
import worktwo from './portfolio work 2.png';
import workthree from './portfolio work 3.png';
import workfour from './portfolio work 4.png';
import './App.css';

export const posts = [
    
    { id: 0, 
      content: {
        title: 'Data Visualization',
        image: workone,
        content: 'used nivo and d3.js charts to display large amounts of data',
      },
    },
      { id: 1,
      content : {
        title: 'UI/UX',
        image: worktwo,
        content: 'developed optimal application layout for clients',
      },
    },
      { id: 2,
        content : {
          title: 'Blockchain Analytics',
          image: workthree,
          content: 'used knowledge of digital assets to create a trading platform',
        },
    },
        { id: 3,
            content : {
              title: 'React.js & GraphQL',
              image: workfour,
              content: 'designed and built dynamic, re-usable components',
            },
        },
  ]   
  
    const UiCard = props => {
      let {image, title, content} = props.content;
      return (
        <div class="card-wrapper">
          <div className='card-img'>
            <img src={image} />
          </div>
          <div className='card-content'>
            <h3>{title}</h3>
            <div className="content-description">{content}</div>
          </div>
        </div>
      );
    }
    
  export class SocialCard extends React.Component {
      render() {
        return (
          <div className='card-body'>
            <UiCard content={this.props.content}/>
          </div>
         
        );
      }
    };