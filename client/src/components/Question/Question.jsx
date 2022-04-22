import React from 'react';

function Question({topic, close}) {

  console.log('========.', topic);
  // const question = 'Какой-то вопрос, прилетевший по id из БД';
  // const answers = 'строка, вариантов ответа, на вопрос, из БД';
const array = topic.answers.split(",")
    const result = array.sort(() => Math.random() - 0.5);
  

const cl=()=>{
  close()
}
  console.log(result);

  return (



  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style={{color: "black"}}>
        <p>{topic.questions}</p>
      </div>
      {result.map((el,i)=> <div style={{color: "black"}}>{i+1} :{el}</div>)}
      <div class="modal-footer">
        <button onClick={cl} type="button" >Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>

           

    
  );
}

export default Question;
