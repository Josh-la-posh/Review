import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const {image, job, text, id, name} = people[index]

    const checkNumber = ( num ) => {
        if (num>people.length-1) {
            return 0;
        } else if (num < 0) {
            return people.length -1
        } else {
            return num;
        }
    }

    const randomPerson = () => {
        let randomNum = Math.floor(Math.random() * people.length)
        if (randomNum === index) {
            return index + 1;
        }
        setIndex(checkNumber(randomNum));
    }

    const nextPerson = () => {
        setIndex(checkNumber(index+1));
    }

    const prevPerson = () => {
        setIndex(checkNumber(index-1));
    }

  return (
      <article className='review'>
          <div className='img-container'>
              <img src={image} alt={name} className='person-img'/>
              <span className="quote-icon">
                  <FaQuoteRight />
              </span>
          </div>
          <div>
              <h4 className="author">{name}</h4>
              <p className="job">{job}</p>
              <p className="text">{text}</p>
          </div>
          <div className="button-container">
              <button className="prev-btn" onClick={prevPerson}>
                  <FaChevronLeft />
              </button>
              <button className="next-btn" onClick={nextPerson}>
                  <FaChevronRight />
              </button>
          </div>
          <div className="random-btn" onClick={randomPerson}>surprise me</div>
      </article>
      )
};

export default Review;
