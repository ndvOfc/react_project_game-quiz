import React, {useEffect} from "react";
import Topic from "../Topic/Topic";
import { useDispatch, useSelector } from "react-redux";
import { initTopicsAC } from "../../redux/actionCreators/topicsAC";
import { useParams } from "react-router-dom";
import Question from "../Question/Question";
// import Question from "../Question/Question";


const TopicList = () => {

  // const {groups} = useSelector(state => state.groups);
  const topics = useSelector(state => state.topics);
  const dispatch = useDispatch();





  // useEffect(()=>{
  //   fetch(`/groups/${id}`)
  //   .then(data = data.json())
  //   .then(res = dispatch(initTopicsAC(res)))
  // }, [dispatch])

  // useEffect(() => {
  //   dispatch(initTopicsAC(obj))
  // }, [dispatch])
 
  // dispatch(initTopicsAC(obj))


  // console.log(topics);

  return (
    <div>
      {/* {groups.map(topic => <Topic key={topic[0].id} topic={topic}/>)} */}
    {topics.length > 0 && topics.map(topic => <Topic key={topic.id} topic={topic}/>)}
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
