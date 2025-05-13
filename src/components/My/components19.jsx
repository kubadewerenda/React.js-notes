import React, {useState, useEffect, useRef} from "react";

function MyComponents19(){
    let [number, setNumber] = useState(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");//Bez useRef renderuje komponent za kazdym razem jak sie kliknie button
        console.log(inputRef1);
    });

    function handleClick1(){
        // setNumber(n => n + 1);
        // ref.current++;
        // console.log(ref.current);//komponent nie renderuje sie co klikniecie, ale zwieksza sie wartosc ref
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    };

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    };

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    };

    return(
        <div>
            <button onClick={handleClick1}>Click Me 1</button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>Click Me 2</button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>Click Me 3</button>
            <input ref={inputRef3} />
        </div>
    );
}

export default MyComponents19