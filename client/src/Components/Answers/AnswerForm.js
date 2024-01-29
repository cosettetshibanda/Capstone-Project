import { useContext, useState } from "react";
import { QuestionContext } from "../../Context/QuestionContext";
import { useParams } from "react-router-dom";

function AnswerForm() {
  const params = useParams();
  const { questions } = useContext(QuestionContext);

  const question = questions.find(
    (question) => question.id === parseInt(params.question_id)
  );

  console.log(params);

  const [formData, setFormData] = useState({
    answer: "",
    question_id: parseInt(params.question_id, 10) || 0,
  });

  console.log("formData", formData);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]:
        e.target.name === "question_id"
          ? parseInt(e.target.value, 10) || 0
          : e.target.value,
    }));
  };

  console.log("formData2", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAnswer = {
      ...formData,
    };

    fetch("/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAnswer),
    })
      .then((r) => r.json())
      .then((data) => {
        // handleAddQuestion(data)
      });

    setFormData({
      answer: "",
    });
  };

  return (
    <div className="NewAnswer">
      {question && <h3>{question.post}</h3>}
      <form onSubmit={handleSubmit}>
        <input
          value={formData.answer}
          type="text"
          name="answer"
          placeholder="Post"
          onChange={handleChange}
        />
        <button type="submit">Add Answer</button>
      </form>
    </div>
  );
}

export default AnswerForm;