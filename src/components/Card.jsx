import profilePic from "../assets/sigma.jpg"

function Card(){

    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Jakub Dewerenda</h2>
            <p className="card-text">Jestem studentem Informatyki na III roku.</p>
        </div>
    );
}

export default Card