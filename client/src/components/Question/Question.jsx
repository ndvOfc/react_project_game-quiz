import React from 'react';

function Question({question, answer}) {

  
  // const question = 'Какой-то вопрос, прилетевший по id из БД';
  // const answers = 'строка, вариантов ответа, на вопрос, из БД';
  function shuffle(array) {
    const result = array.sort(() => Math.random() - 0.5);
    return result;
  }

  return (
    <div>
            <div>
              <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 style={{"color":'black'}}class="modal-title" id="exampleModalLabel">{question}</h5>
                    </div>
                    <div class="modal-body">
                      {shuffle(answer.split(',')).map((answer, index) => <div><button style={{ "marginBottom": "10px" }} type="submit" class="btn btn-success">{index+1} вариант: {answer}</button></div>) }
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
    
  );
}

export default Question;
