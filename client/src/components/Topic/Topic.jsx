import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { initTopicsAC } from "../../redux/actionCreators/topicsAC";
import { useNavigate } from 'react-router-dom';

import Question from "../Question/Question";
import css from './Topic.module.css'



const Topic = ({topic}) => {
  const [isStatusRowOne, setIsStatusRowOne] = useState(true);
  const [ state , setState] = useState(false)
  // const [isStatusRowTwo, setIsStatusRowTwo] = useState(true);

  // const question = props.topic.questions
  // const theme = props.topic.topic
  

  const changeStatus = () => {
    setIsStatusRowOne(false)
    setState(true)
  }
 
  // const changeStatusRowTwo = () => {
  //   return setIsStatusRowTwo(isStatusRowTwo => !isStatusRowTwo)
  // }
  // {
  //   isStatusRowTwo ? 
  //   <button onClick={changeStatusRowTwo} type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
  //   {question[1].price}
  //   <Question question={question[1].questions} answer={question[1].answers}/>
  //   </button> :        
  //    <button onClick={changeStatusRowTwo} type="button" class="btn btn-outline-danger"data-bs-toggle="modal" data-bs-target="#exampleModal">Завершен</button>
  // }


  return (
    <div className="container">
      <div className="row row-cols-6 my-2">
      {state && <Question close={()=> setState(false)} topic={topic}/>}
      {
          isStatusRowOne ? 
          <>
          <button onClick={changeStatus} type="button" >
          {topic.price}
          {/* <Question topic={topic}/> */}
          </button></> :        
           <button type="button" class="btn btn-outline-danger">Завершен</button>
           
        }
        {/* <div className="col">{theme}</div>
        <div className="col">
        {
          isStatusRowOne ? 
          <button onClick={changeStatus} type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
          {question[0].price}
          <Question question={question[0].questions} answer={question[0].answers}/>
          </button> :        
           <button type="button" class="btn btn-outline-danger">Завершен</button>
        }
        </div>
        <div className="col">

        <button  type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[1].price}
        <Question question={question[1].questions} answer={question[1].answers}/>
        </button>
        </div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[2].price}
        <Question question={question[2].questions} answer={question[2].answers}/>
        </button></div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[3].price}
        <Question question={question[3].questions} answer={question[3].answers}/>
        </button></div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[4].price}
        <Question question={question[4].questions} answer={question[4].answers}/>
        </button></div> */}
      </div>
    </div>
  )
  
}

export default Topic;
