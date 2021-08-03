import data from "../data";
import {useState} from "react";
const Testimonial = () =>{
    const [index, setIndex]= useState(0);
    const { name, photo, message } = data[index];

    // check for loop.
    const checkNumber = (param) => {
        if( param < 0 ) {
            return data.length-1;
        }
        if( param > data.length-1 ) {
            return 0;
        }
        return param;
    }
    // Navigation functions
    const prevIndex = () =>{
        setIndex((index)=>{
            let newIndex = index+1;
            return checkNumber(newIndex);
        });
    }

    const nextIndex = () =>{
        setIndex((index)=>{
            let newIndex = index-1;
            return checkNumber(newIndex);
        });
    }

    // random user function
    const randomUser = () => {
        let randomNumber = Math.floor(Math.random() * data.length);
        if(randomNumber === index ){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    }
    return(
        <div className="testimonial-wrapper">
            <div className="single-testimonial">
                <div className="photo"><img src={ photo } alt={name} /> </div>
                <div className="message">{ message }</div>
                <div className="name-wrapper">
                    <div className="divider"></div>
                    <div className="name">{name}</div>
                </div>
            </div>
            <div className="navigation">
                <button className="prev" onClick={prevIndex}> Prev </button>
                <button className="prev" onClick={randomUser}> Random </button>
                <button className="next" onClick={nextIndex}> Next </button>
            </div>
        </div>
    )
}
export default Testimonial;