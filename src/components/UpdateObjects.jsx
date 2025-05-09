import React, {useState} from "react";

function UpdateObjects(){
    const [car, setCar] = useState({
        year: 2013, 
        make: "Mercedes-Benz", 
        model: "C350",
    });

    function handleYearChange(event){
        //...car tworzy kopie starego car ale potem nadpisujemy tylko np. year
        setCar(c => ({...c, year: event.target.value}));
    };

    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    };

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    };

    return(
    <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
    </div>
    );
}

export default UpdateObjects