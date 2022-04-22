import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { initTopicsAC } from "../../redux/actionCreators/topicsAC";
import { useNavigate } from 'react-router-dom';

import Question from "../Question/Question";
import css from './Topic.module.css'



const Topic = (props) => {

  const question = props.topic.questionRun
  const theme = props.topic.theme




  // это стейт который делает ден
  // const {group}=useSelector(state => state.group);
  // const {questions}= useSelector(state => state.questions)
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   fetch('/questions')
  //   .then(res=>res.json())
  //   .then(data=>dispatch((data[0]),(data[1])))
  // },[dispatch])

  return (
    <div className="container">
      <div className="row row-cols-6 my-2">
        <div className="col">{theme}</div>
        {/* <div className="col">{topic[0].topicName}</div> */}
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[0][2]}
        <Question question={question[0][0]} answer={question[0][1]}/>
        </button></div>
        <div className="col"><button  type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[1][2]}
        <Question question={question[1][0]} answer={question[1][1]}/>
        </button></div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[2][2]}
        <Question question={question[2][0]} answer={question[2][1]}/>
        </button></div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[3][2]}
        <Question question={question[3][0]} answer={question[3][1]}/>
        </button></div>
        <div className="col"><button type="button" class="btn btn-primary"data-bs-toggle="modal" data-bs-target="#exampleModal">
        {question[4][2]}
        <Question question={question[4][0]} answer={question[4][1]}/>
        </button></div>
      </div>
    </div>
  )
  
}

export default Topic;
