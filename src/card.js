import {Button, ButtonToolbar,Card , input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Onecard from './onecard';

const Word = (props)=> {

    let history=useHistory();
    console.log("mapping")
    const my_data =useSelector((state)=>state.dictionary.list);
    // console.log("11111111111111");
    console.log(my_data);
    console.log(my_data[0]);
  return (
      
    <>
    <Card_list>
      {my_data.map((list,index)=> {

        return (
          <Onecard key={index} id={list["id"]} name={list["name"]} byungum={list["byungum"]} completed={list["completed"]} translation={list["translation"]} mean={list["name"]} example={list["example"]}/>
        );
        


      })}
        
        
        
          
        
    </Card_list>
    <Addbutton onClick={() => {
        console.log('aa');
        history.push("/word/add");}}>추가하기</Addbutton>
    </>
      );
  };
  const Title_text=styled.h4`
  text-align:left;
  `;


  const Card_list = styled.div`
display:flex;
max-width: 100%;
max-height: 100%
background-color: blue;
margin : auto;
flex-wrap:wrap;
justify-content: flex-start ;

`;

const Addbutton = styled.button`
position: fixed;
width:100px;
height:100px;
bottom:10px;
right:10px;
`;
  export default Word;
  