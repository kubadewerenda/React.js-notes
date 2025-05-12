import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

// jesli color to colorContext
export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("JakubD");

    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;