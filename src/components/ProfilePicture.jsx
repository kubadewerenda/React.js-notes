function ProfilePicture(){
    const imageUrl = "../src/assets/sigma.jpg";

    // dzieki event i target mozemy robic duzo rzeczyz  danym elementem od eventu
    const handleClick = (e) => e.target.style.display = "none";


    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="profile" />
    );
}

export default ProfilePicture