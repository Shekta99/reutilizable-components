import { useState } from "react";
import UserCard from "./components/User/UserCard";

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Sergio",
      imgUrl:
        "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      imgAlt: "foto de perfil",
      age: 23,
      linkedin: "https://www.linkedin.com/in/samarentesm/",
    },
    {
      id: 2,
      name: "Rodrigo",
      imgUrl:
        "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
      imgAlt: "foto de perfil",
      age: 46,
    },
    {
      id: 3,
      name: "Ximena",
      imgUrl:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      imgAlt: "foto de perfil",
      age: 15,
    },
    {
      id: 4,
      name: "Stefany",
      imgUrl:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      imgAlt: "foto de perfil",
      age: 19,
    },
    {
      id: 5,
      name: "Lily",
      imgUrl:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      imgAlt: "foto de perfil",
      age: 32,
    },
    {
      id: 6,
      name: "Gaby",
      imgUrl:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      imgAlt: "foto de perfil",
      age: 20,
    },
  ]);

  const handleClick = (id) => {
    console.log(id);
    setProfiles(
      profiles.map((profile) => {
        if (profile.id === id) {
          return { ...profile, age: profile.age * -1 };
        } else {
          return profile;
        }
      })
    );
  };

  return (
    <>
      {profiles.map((profile) => (
        <UserCard
          key={profile.id}
          id={profile.id}
          name={profile.name}
          imgUrl={profile.imgUrl}
          imgAlt={profile.imgAlt}
          age={profile.age}
          linkedin={profile.linkedin ?? "https://www.linkedin.com/"}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}

export default App;
