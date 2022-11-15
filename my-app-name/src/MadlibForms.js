import React, {useState} from "react";

const MadlibForm = ({ createStory }) => {
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createStory(formData)
        setFormData(INITIAL_STATE)

    }


    return (
    
        <form onSubmit={handleSubmit}>
            
            <input id="noun" name="noun" placeholder="noun" type="text"
            value={formData.noun} onChange={handleChange}/>
            <input id="noun2" name="noun2" placeholder="noun2" type="text"
            value={formData.noun2} onChange={handleChange}/>
            <input id="adjective" name="adjective" placeholder="adjective" type="text"
            value={formData.adjective} onChange={handleChange}/>
            <input id="color" name="color" placeholder="color" type="text"
            value={formData.color} onChange={handleChange}/>
            <button>Get Story</button>

        </form>

    )

}

export default MadlibForm