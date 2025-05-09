import PropTypes from "prop-types"

function Student(props){

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* warunek ? prawdziwy : fałszywy */}
            <p>Student: {props.isStudent ? "Tak" : "No"}</p>
        </div>
    );
}
// Używanie proptypes do sprawdzania typu danych
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};
// defaultprops - aktualnie nie dziala
// Student.defaultProps = {
//     name: "Guest",
//     age: 0,
//     isStudent: false,
// };
export default Student