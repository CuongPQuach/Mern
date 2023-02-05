import React,{useState} from "react";
import { useParams } from "react-router-dom";

const WordsandNumbers = (props) => {
    const {word,number,text_color,bground_color} = useParams()
    console.log(word)

    return(
        <div>
            <h2 style={{color:text_color,background:bground_color}}>This is the Words ... {word}</h2>
            <h2>THis is the Numbers ...{number}</h2>
        </div>
    )
}

export default WordsandNumbers