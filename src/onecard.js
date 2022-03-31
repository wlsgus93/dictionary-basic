import {Button, ButtonToolbar,Card , input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';


const Onecard = (props)=> {

    
    // console.log("prprprprpprprprp");
    // console.log(props);

  return (
      
      
      
        <Card style={{ width: '18rem', border: "2px solid black", margin: "5px auto" }}>
          <div style={{margin:"5px auto"}}>
            <Card_button>외움</Card_button>
            <Card_button>수정</Card_button>
            <Card_button>삭제</Card_button>
          </div>
          ID={props.id}
          <Card.Body>
            <Title_text>단어이름</Title_text>  
            <Card.Title>{props.name}</Card.Title>
            <Title_text>병음</Title_text>
            <Card.Text>{props.byungum}</Card.Text>
            <Title_text>의미</Title_text>
            <Card.Text>{props.mean}</Card.Text>
            <Title_text >예문</Title_text>
            <Card.Text style={{color:'blue'}}>{props.example}</Card.Text>
            <Title_text>해석</Title_text>
            <Card.Text>{props.translation}</Card.Text>
          </Card.Body>
        </Card>
    

    );
  };
  const Title_text=styled.h4`
  text-align:left;
  `;
  const Card_button=styled.button`
  margin: 5px;
  `;
  export default Onecard;