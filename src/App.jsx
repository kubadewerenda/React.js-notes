import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Card from "./components/Card";
import Button from "./components/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import List from "./components/List";
import Buttons7 from "./components/Buttons7";
import ProfilePicture from "./components/ProfilePicture";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import MyComponents9 from "./components/MyComponents9";
import ColorPicker from "./components/ColorPicker";
import MyComponents11 from "./components/MyComponents11";
import UpdateObjects from "./components/UpdateObjects";
import UpdateArrays from "./components/UpdateArrays";
import UpdateArraysOfObj from "./components/UpdateArraysOfObj";
import ToDoList from "./components/ToDoList";
import MyComponents16 from "./components/MyComponents16";
import MyComponents16_2 from "./components/MyComponents16_2"
import ComponentA from "./components/ComponentA";
import MyComponents19 from "./components/My/components19";


function App() {
    const fruits = [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 45}, 
        {id: 3, name: "banana", calories: 105}, 
        {id: 4, name: "coconut", calories: 159}, 
        {id: 5, name: "pineapple", calories: 37}
    ];

    const vegetables = [
        {id: 6, name: "potatoes", calories: 110}, 
        {id: 7, name: "celery", calories: 15}, 
        {id: 8, name: "carrots", calories: 25}, 
        {id: 9, name: "corn", calories: 63}, 
        {id: 10, name: "broccoli", calories: 50}
    ];

    return(
        // wiecej niz 1 element
        <>
            {/* Sub.1 */}
            <Header />
            <Food />
            <Footer />
            
            {/* ========================================================== */}

            {/* Sub.2 */}
            <Card />
            
            {/* ========================================================== */}

            {/* Sub. 3
            -----React style components

            1. external- w pliku css klasa -> index.css
            2. modules- osobny folder z komponentem i jego klasa css components -> Button -> Button.jsx
            3. inline- w pliku komponentu -> const styles -> styles = 
            */}

            <Button />

            {/* ========================================================== */}

            {/* Sub. 4
            ------Props

            wlasciwosci tylko do odczytu miedzy komponentami, parent moze 
            wyslac dane do child 

            <Component key=value/> 
            */}

            <Student name="Jakub D" age={21} isStudent={true}/>
            <Student name="Benek" age={19} isStudent={false}/>
            
            {/* ------propTypes
            mechanizm ktory upewnia czy przesłane 
            wartosci sa danego typu 

            age: PropTypes.number -> Student.jsx 
            */}

            {/* ------defaultProps 
            domyslne wartosci props gdyby nie 
            zostaly podane przez parent

            name: "Guest" -> Student.jsx 
            */}

            {/* <Student /> */}

            {/* ========================================================== */}

            {/* Sub. 5
            ------conditional rendering

            pozwala kontrolowac co ma byc wyswietlane a co nie
            dzieki warunkom (show,hide or change components) 
            */}

            <UserGreeting isLoggedIn={true} username="JakubD"/>

            {/* ========================================================== */}

            {/* Sub. 6
            ------render lists
            
            Lista itemow generowanych na stronie najczesciej przy uzyciu .map key=value unique
            */}

            {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
            {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}

            {/* ========================================================== */}

            {/* Sub. 7
            ------click events
            
            Interakcja gdy user kliknie na dany element, mozemy sterowac tym co 
            sie stanie poprzez callbacki przy onClick event handler
            */}

            <Buttons7 />
            <ProfilePicture />

            {/* Sub. 8
            ------React hook
            
            Specialna funkcja która pozwala komponentom funkcyjnym korzystac z funkcji Reacta bez pisania komponentow klasowych 
            (useState, useEffect, useContext, useReducer, useCallback i więcej)

            ------React useState

            Hook reacta, który umozliwia tworzenie zmiennej ze stanem oraz funkcji ustawiajacej ktora aktualizuje jej wartosc w virtual DOM
            [name, setName]
            */}

            <MyComponent />
            <Counter />

            {/* ========================================================== */}

            {/* Sub. 9
            ------onChange

            obsluga eventow glownie przy formularzach
            <input>, <textare>, <select>
            uruchamia funkcje zawsze gdy wartosc tych pol ulega zmianie
            */}

            <MyComponents9 />

            {/* ========================================================== */}

            {/* Sub. 10
            ------projekt Color Picker
            */}

            <ColorPicker />

            {/* ========================================================== */}

            {/* Sub. 11
            ------updater function

            Funkcja przekazywana jako arg do setState(), zwykle np.
            setYear(y => y + 1)

            Umożliwia bezpiecznie aktualizacje na podstawie popraedniego stanu
            Uzywana przy wielu aktualizacjach stanu i funkcjach asynchronicznych
            Dobra praktyka jest uzywanie funkcji aktualizujacych(updater functions)
            */}

            <MyComponents11 />

            {/* ========================================================== */}

            {/* Sub. 12
            ------update OBJECTS

            info -> UpdateObjects.jsx
            */}

            <UpdateObjects />

            {/* ========================================================== */}

            {/* Sub. 13
            ------update ARRAYS

            info -> UpdateArrays.jsx
            */}

            <UpdateArrays />

            {/* ========================================================== */}

            {/* Sub. 14
            ------update ARRAYS of Objects

            info -> UpdateArraysOfObj.jsx
            */}

            <UpdateArraysOfObj />

            {/* ========================================================== */}

            {/* Sub. 15
            ------ToDoList projekt

            info to-do-list -> ToDoList.jsx
            */}

            {/* ========================================================== */}

            {/* Sub. 16
            ------useEffect()

            Hook reacta, który mowi zeby wykonał jakis kod kiedy:
            -ten komponent zostanie ponownie wyrenderowany
            -komponent sie zamontuje
            -stan ulegnie zmianie

            useEffect((function, [zależności]))
            1.useEffect(() => {})             uruchamia sie po kazdym nowym renderze
            2.useEffect(() => {}, [])         uruchamia sie tylko przy montowaniu
            3.useEffect(() => {}, [wartości]) uruchamia sie przy montowaniu + gdy wartosc sie zmieni

            Zastosowania:
            -nasłuchwianie zdarzen(event listeners)
            -manipulacja DOM
            -subskrypcje, aktualizacje w czasie rzeczywistym
            -fetching data api
            -sprzatanie po odmontowaniu komponentu

            */}

            <MyComponents16 />
            
            <MyComponents16_2 />

            {/* ========================================================== */}

            {/* Sub. 17
            ------Digital Clock

            info digital-clock -> DigitalClock.jsx
            */}

            {/* ========================================================== */}

            {/* Sub. 18
            ------UseContext()

            Hook reacta, ktory pozwala udostepniac wartosci miedzy wieloma poziomami
            komponentow bez koniecznosci przekazywania propsow na kazdym poziomie
            
            KOMPONENT DOSTAWCY (PROVIDER COMPONENT)
            1. import { createContext } from 'react';
            2. export const MyContext = createContext();
            3. <MyContext.Provider value={value}>
                <Child />
            </MyContext.Provider>

            KOMPONENTY ODBIORCY (CONSUMER COMPONENTS)
            1. import React, { useContext } from 'react';
            2. import { MyContext } from './ComponentA';
            3. const value = useContext(MyContext);
            */}

            <ComponentA />

            {/* ========================================================== */}

            {/* Sub. 19
            ------UseRef()

            useState() - ponownie renderuje element, gdy zmienia sie wartośc stanu

            useRef() - "użycie referencji". Nie powoduje ponownego renderowania, gdy jego wartosc sie zmienia.
                        gdy chcesz aby komponent zapamiętał dana informacje,
                        ale nie chcesz aby ta informacja wywołała nowe renderowanie                   
                        Zwraca obiekt z elementem current.
            1.Dostep/interakcja z elementami DOM
            2.Obsługa fokusu, animacji i przejsc
            3.Zarządzanie timerami i interwałami            
            */}

            <MyComponents19 />

            {/* ========================================================== */}

            {/* Sub. 20
            ------Stopwatch app

            info stopwatch -> Stopwatch.jsx
            */}
        </>
    );
}

export default App
