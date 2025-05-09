import React, {useState} from "react";

function MyComponents11(){
    const [count, setCount] = useState(0);
        
    const increment = () => {
        // Używa AKTUALNEGO stanu do obliczenia KOLEJNEGO stanu

        // Funkcje set nie wywołują aktualizacji natychmiast

        // React grupuje aktualizacje stanu ze względów wydajnościowych

        // KOLEJNY stan staje się AKTUALNYM stanem po aktualizacji

        //dlatego to dziala
        setCount(prevCount => prevCount + 1);//tak zapisujemy lub
        setCount(c => c + 1);//pierwsza litere 

        //a to nie dziala
        // setCount(count + 1);
        // setCount(count + 1);
    };

    const decrement = () => {
        setCount(c => c - 1);
    };

    const reset = () => {
        setCount(c => c = 0);
    };

    return(
        <div className="counter-container">
            <p className="count-display">
                {count}
            </p>
            <button className="counter-button" onClick={decrement}>-</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>+</button>
        </div>
    );
}

export default MyComponents11