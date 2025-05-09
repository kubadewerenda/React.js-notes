import PropTypes from "prop-types";

function List(props){
    const itemList = props.items || [];
    const category = props.category || "Kategoria";

    // const fruits = [
    //     {id: 1, name: "apple", calories: 95}, 
    //     {id: 2, name: "orange", calories: 45}, 
    //     {id: 3, name: "banana", calories: 105}, 
    //     {id: 4, name: "coconut", calories: 159}, 
    //     {id: 5, name: "pineapple", calories: 37}
    // ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));// Alfabetycznie
    // fruits.sort((a, b) => b.name.localeCompare(a.name));// odwrócone
    // fruits.sort((a, b) => a.calories - b.calories);// od najmniejszych kalorii
    // fruits.sort((a, b) => b.calories - a.calories);// od najwiekszych kalorii

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);// kalorie mniejsze niz 100 i zwraca do tablicy 
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);// kalorie wieksze niz 100 i zwraca do tablicy

    // key= id poniewaz react wymaga aby przypisac do danego elementu jego unikalny klucz czyli np id
    const listItems = itemList.map(fruit => 
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            {fruit.calories}
        </li>
    );

    return(
        <div>
            <h3 className="list-category">
                {category}
            </h3>
            <ol className="list-items">
                {listItems}
            </ol>
        </div>
    );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

export default List