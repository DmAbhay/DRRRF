import { useState } from "react";

export function NameInput() {
    const [name, setName] = useState(""); // initialize with empty string

    const handleChange = (e) => {
        setName(e.target.value); // update state with input value
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <h4>Your name: {name}</h4>
        </div>
    );
}


export function AgeInput() {

    const [age, setAge] = useState("");// initialize with empty string

    const handleChange = (e) => {
        setAge(e.target.value); // update state with input value
    };
    return (
        <>
            <div>

                <input type="number" value={age} onChange={handleChange}/>
                <h1>Your name is {age}</h1>
            </div>
        </>
    )
}




