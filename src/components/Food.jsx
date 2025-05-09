function Food(){
    const fruit1 = "Orange";
    const fruit2 = "Banana"


    return(
        <ul>
            <li>Apple</li>
            <li>{fruit1}</li>
            <li>{fruit2.toLowerCase()}</li>
        </ul>
    );
}

export default Food