import React, {useEffect} from "react";
import Topic from "../Topic/Topic";
import { useDispatch, useSelector } from "react-redux";
import { initTopicsAC } from "../../redux/actionCreators/topicsAC";
import { useParams } from "react-router-dom";
import Question from "../Question/Question";
import { v4 as uuidv4 } from 'uuid';
// import Question from "../Question/Question";


const TopicList = () => {
const {id} = useParams()
  // const {groups} = useSelector(state => state.groups);
  const  {topics} = useSelector(state => state.topics);

  const dispatch = useDispatch();

console.log(id)




  useEffect(()=>{
    fetch('http://localhost:5000/api/group/'+ `${id}`)
    .then(res=>res.json())
    .then(data=>   dispatch(initTopicsAC(data))
    )
  },[dispatch])

console.log(topics)

  return (
    <div>
    {topics.length > 0 && topics.map(topic =>  <Topic key={uuidv4()} topic={topic}/>)}
    </div>
  )
}


// const TopicList = () => {
//   const {topic}=useSelector(state => state.topic);
//   // const {questions}= useSelector(state => state.questions)
//   const dispatch = useDispatch();

//     useEffect(()=>{
//       fetch('api/group/:id')
//       .then(res=>res.json())
//       .then(data=>dispatch(initTopicsAC(data)))
//     },[dispatch])

//     return (
//       <div className="container">

//       </div>
//     )
// }

export default TopicList
