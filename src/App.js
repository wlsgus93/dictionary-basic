
import './App.css';
import {db} from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc ,doc ,deleteDoc } from "firebase/firestore";
import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonToolbar,Card , input } from 'react-bootstrap';
// import Card from 'mui/material/Card'
import styled from "styled-components";
import Word from "./card";
import Addword from './addWord';
import EditWord from './editWord';
import {loadDickFB} from "./redux/modules/dictionary";
import {useDispatch} from "react-redux";

function App() {
  
  // React.useEffect(async() => {
    // 데이터찍기
    // const query = await getDocs(collection(db, 'dictionary'));
		// await alert("asdf");
    // console.log(query);
    // query.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    
    //데이터 디비에 추가하기
    // addDoc(collection(db,"dictionary"),{name:"exampe",completed:true});

    // //데이터 수정하기
    // const docRef = doc(db,"dictionary","fbMDVNRQ4GaXYj65AUB5");
    // console.log(docRef);
    // updateDoc(docRef,{byungum:"hahahaha"});
    
    // 데이터 삭제
    // const docRef = doc(db, "bucket", "P5Oz4GbccEg9uaca8sJG");
    // await deleteDoc(docRef);

    //콜렉션추가
    // addDoc(collection(db,"asdf"){});
  // }, []);

  const dispatch=useDispatch();

  React.useEffect( () => {
    dispatch(loadDickFB());

  },  []);
  let history=useHistory();
return (
    <div className="App">
      <Header>
        <Title onClick={()=>{
            history.push("/");
          }} >중국어 사전</Title>
      </Header>
      <Switch>
            <Route path="/" exact component={Word} />
            <Route path="/word/add" exact component={Addword} />
            <Route path="/word/:id/edit" component={EditWord} />
      </Switch>
    </div>
  );
};

const Header = styled.div`
max-width: 100%;
min-height: 10vh;
background-color: green;

margin: auto;
border-radius: 5px;
border: 3px solid black;
`;
const Title = styled.h1`
corsor:pointer;
`;

const Card_list = styled.div`
display:flex;
max-width: 100%;
max-height: 100%
background-color: blue;
margin : auto;
flex-wrap:wrap;
`;


export default App;
