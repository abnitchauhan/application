// 1. Import *useState* and *useEffect*
import React, {useState, useEffect} from 'react';
import './App.css';

function UserDisplay() {
    // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
    // We're setting the default value of dogImage to null, so that while we wait for the
    // fetch to complete, we dont attempt to render the image
  let [userProfile, setUserProfile] = useState([])

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("http://localhost:8000/")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setUserProfile(data))
  },[])

  return (
    <div>
    {console.log("Users: ", userProfile)};
    </div>
  );
}

export default UserDisplay;