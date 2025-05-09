import React, {use, useState} from "react";

function MyComponent(){
    // wartosc name ustawiamy za pomoca setName
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
       setName("JakubD");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleEmployedStatus = () => {
        // zmienia z falszu na prawde i na odwrot
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>

            <p>
                Age: {age}
            </p>
            <button onClick={incrementAge}>
                Age++
            </button>

            <p>
                Employed: {isEmployed ? "Tak" : "Nie"}
            </p>
            <button onClick={toggleEmployedStatus}>
                Toggle Status
            </button>
        </div>
    );
}

export default MyComponent