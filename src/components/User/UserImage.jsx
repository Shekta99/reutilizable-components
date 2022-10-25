function UserImage({ imgUrl, imgAlt }) {
  return (
    <>
      <img className="profile-img" src={imgUrl} alt={imgAlt} width="100px" />
      <p>{imgAlt}</p>
    </>
  );
}

export default UserImage;
