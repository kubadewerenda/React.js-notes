import React, {useState} from "react";

function UpdateArrays(){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        // reset pola
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    };

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));// zwraca tablice elementow w ktorych nie ma juz danego indexu
        // _ oznacza zignoruj ten elemnt uzwamy gdy dane ele sa nie potrzebne 
    };

    return(
        <div>
             <h2>List of Food</h2>
             <ul>
                {/* unikalnym kluczem dla map bedzie index danych elementow tablicy */}
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li>
                )}
             </ul>
             <input type="text" id="foodInput" placeholder="Enter food name"/>
             <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default UpdateArrays