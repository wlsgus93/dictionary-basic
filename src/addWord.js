import {Button, ButtonToolbar,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { addDickFB } from './redux/modules/dictionary';

const Addword = (props)=> {
  const dispatch = useDispatch();
  let history=useHistory();

  const name = React.useRef(null);
  const byungum = React.useRef(null);
  const mean = React.useRef(null);
  const example = React.useRef(null);
  const trans = React.useRef(null);
  // const completed = React.useRef(false);
  
  const addWordList = () => {
    console.log("hi");
    dispatch(addDickFB({name:name.current.value, byungum:byungum.current.value, mean:mean.current.value,example:example.current.value,translation:trans.current.value,completed:false}))
    
    history.push("/");
    // dispatch(createBucket(text.current.value));
    };
  return (
      <div>
        <div>
          <h1 style={{color:"green", background:"yellow", border: "10px solid gray"}}>단어 추가하기</h1>
        </div>
        <div>
          <div style={{background:"blue", margin:"5px auto", width:"100vw"}}>
            <h5 style={{color:'white'}}>단어이름</h5>
            <input style={{width :"30vw" , margin:"5px auto" }} type="text" id="input-word" ref={name}/>
          </div>
          <div style={{background:"blue" , margin:"5px auto"}}>
            <h5  style={{color:'white'}}>병음</h5>
            <input style={{width :"30vw" , margin:"5px auto"}} ref={byungum} ></input>
          </div>
          <div style={{background:"blue" , margin:"5px auto"}}>
            <h5  style={{color:'white'}}>의미</h5>
            <input style={{width :"30vw" , margin:"5px auto"}} ref={mean}></input>
          </div>
          <div style={{background:"blue" , margin:"5px auto"}} >
            <h5  style={{color:'white'}}>예문</h5>
            <input style={{width :"30vw" , margin:"5px auto"}} ref={example}></input>
          </div>
          <div style={{background:"blue", margin:"5px auto"}}>
            <h5 style={{color:'white'}}>해석</h5>
            <input style={{width :"30vw" , margin:"5px auto"}} ref={trans}></input>
            </div>
          </div>
          <div>
            <button style={{margin:"100px"}} onClick={addWordList}>추가하기</button>
          </div>
      </div>
      );
  };
  
  
  const Title_text=styled.h5`
  text-align:left;
  `;

  export default Addword;
  