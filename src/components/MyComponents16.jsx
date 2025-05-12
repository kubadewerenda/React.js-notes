import React, {useState, useEffect} from "react";

function MyComponents16(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    function handleAddCount(){
        setCount(c => c + 1);
    }

    function handleSubtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // return () => {
        //     //Cleaned up code
        // }
    }, [count, color]);

    return(
        <div>
            <hr />
            <h3 style={{color: color}}>Count: {count}</h3>
            <button onClick={handleAddCount}>Add</button>
            <button onClick={handleSubtractCount}>Subtract</button><br />
            <button onClick={changeColor}>Change Color</button><br />
        </div>
    );
}

export default MyComponents16