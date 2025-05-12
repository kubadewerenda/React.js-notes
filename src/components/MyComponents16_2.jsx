import React, {useState, useEffect} from "react";

function MyComponents16_2(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    //Bez useEffect - ponad 1000 nowych event listenerow
    //window.addEventListener("resize", handleResize);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);//[], tylko po odswiezeniu czyli zamontowaniu componentu, [width, height] - co chwile gdy sie zmieni to odswieza title
    
    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}

export default MyComponents16_2