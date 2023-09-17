import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(undefined);

  const { id } = useParams();
  const URL = `${process.env.REACT_APP_BACKEND_URI}/profile/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProfile(data);
    };
    fetchData();
  }, [id, URL]);

  //deletes the current profile from database
  const handleDelete = async (e) => {
    const response = await fetch(URL, {
      method: "delete",
    });
    if (response.status !== 204) console.log("error");
    navigate("/");
  };

  const display = profile && (
    <div style={{ margin: "auto" }}>
      <h1>{profile.userName}</h1>
      <img src={profile.profilePicture} />
      <p>{profile.emailAddress}</p>
      <div>
        <h4>
          {profile.firstName} {profile.lastName}
        </h4>
      </div>

      <a href={`/Profile/update/${id}`}>Update</a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );

  return <div>{display}</div>;
};

export default Profile;
