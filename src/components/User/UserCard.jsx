import "./UserCardStyles.css";
import UserImage from "./UserImage";

function UserCard({ id, name, imgUrl, imgAlt, age, linkedin, handleClick }) {
  let bgColor = "white";

  if (age < 18) {
    bgColor = "pink";
  } else if (age < 24) {
    bgColor = "lightgreen";
  } else {
    bgColor = "lightslategray";
  }

  /*const handleClick = () => {
    window.location.assign(linkedin);
  };*/

  return (
    <div
      className="user-card"
      style={{
        "background-color": bgColor,
      }}
      onClick={() => {
        handleClick(id);
      }}
    >
      <h2>{name}</h2>
      {imgUrl && <UserImage imgUrl={imgUrl} imgAlt={imgAlt} />}
      <p>{age}</p>
      {age > 21 ? <button>take a car</button> : <button>take a toy</button>}
    </div>
  );
}

export default UserCard;
