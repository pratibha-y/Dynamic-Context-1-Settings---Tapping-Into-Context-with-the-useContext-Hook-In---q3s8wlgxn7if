/*import React, { createContext } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const greeting = "Hello"
  
    return (
        <UserContext.Provider value={{ greeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }*/



import React, { createContext, useState } from "react";


const UserContext = createContext()

const Wrapper = (props) => {

    const [greeting, changeGreeting] = useState("Hello")
  
    return (
        <UserContext.Provider value={{ greeting, changeGreeting }}>
            {props.children}
        </UserContext.Provider>
    )
}
export { Wrapper, UserContext }
