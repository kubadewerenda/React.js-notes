function Buttons7(){
    let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // };

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    // e - event 
    const handleClick = (e) => e.target.textContent = "OUCH!";//Zmienia wartosc textu po kliknieciu

    // gdy mamy funkcje z danymi to musi byc strzalkowa zeby nie wywoalala sie przed kliknieciem () => handleClick2("Ben")
    return(
    <button onDoubleClick={(e) => handleClick(e)}>
        Click Me
    </button>
    );
}

export default Buttons7