import { useContext, useState } from "react";
import { QuestionContext } from "../../Context/QuestionContext";
import { useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../../Context/UsersContext";

function AnswerForm() {
  const params = useParams();
  const navigate = useNavigate()
  const { questions, handleAddAnswer } = useContext(QuestionContext);
  const {addUserAnswer} = useContext(UsersContext)
  const [errors, setErrors] = useState()
  const errorsList = errors?.map((error, idx) => <li key={idx} style={{color: 'red'}}>{error}</li>)

  const question = questions.find(
    (question) => question.id === parseInt(params.question_id)
  );


  const [formData, setFormData] = useState({
    answer: "",
    question_id: parseInt(params.question_id, 10) || 0,
  });


  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]:
        e.target.name === "question_id"
          ? parseInt(e.target.value, 10) || 0
          : e.target.value,
    }));
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newAnswer = {
      answer: formData.answer,
      question_id: formData.question_id,
    };
  
    fetch("/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: newAnswer }),
    })
      .then((r) => r.json())
      .then((data) => {
        if(data.errors){
            setErrors(data.errors)
        } else {
            addUserAnswer(data)
            handleAddAnswer(data)
        }
      });
  
    setFormData({
      answer: "",
    });
    navigate(`/view-answers/${question.id}`)
  };

  return (
    <div className="NewAnswer">
        {errorsList}
      {question && <h3>{question.post}</h3>}
      <form onSubmit={handleSubmit}>
        <input
          value={formData.answer}
          type="text"
          name="answer"
          placeholder="Answer"
          onChange={handleChange}
        />
        <button type="submit">Add Answer</button>
      </form>
    </div>
  );
}

export default AnswerForm;