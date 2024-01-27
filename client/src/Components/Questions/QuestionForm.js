import {useState} from "react"

function QuestionFormForm({params, handleAddAnimal}){
    const [formData, setFormData] = useState({
        name: "",
        img: "",
        category_id: params.id
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] :e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newAnimal = {
            ...formData
        }
    
        fetch ("http://localhost:9292/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        })
        .then(r => r.json())
        .then(data => {

            handleAddAnimal(data)
        })
        setFormData({
            name: "",
            img: ""
        })
    }

    return(
        <div className="NewAnimal" >
        <h2>Add New Question</h2>
        <form onSubmit={handleSubmit}>
            <input value={formData.name}  type="text" name="name" placeholder="Post" onChange={handleChange} />
            <button type="submit">Add Question</button>
        </form>
    </div>
    )
}

export default QuestionForm
