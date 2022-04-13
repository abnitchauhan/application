// 1. Import *useState* and *useEffect*
import React, {useState, useEffect} from 'react';
import './App.css';

function UserDisplay() {
   
  let [userProfile, setUserProfile] = useState([]) 
    // 3. Create out useEffect function
  useEffect(() => {
    fetch("http://localhost:8000/")
    .then(response => response.json()) 
    .then(data => setUserProfile(data))
  },[])

  return (
    <div className='container'>
    <h2 className='text-center'>Recent Users</h2>
    <div className='row'>
     {
     userProfile.map((element,i) => { 
       console.log(element.name);
      return(
        <div className="col-md-3">
          <div className='main'>
          <div className="box">
            <p className="follow" align="center">Follow</p>
            <img className="profile-img" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" width={25} />
            <img className="background-img" src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" />
            <p className="name"><img className="icon" src="https://cdn1.iconfinder.com/data/icons/micon-social-pack/512/twitch-512.png" />{element.name}</p>
            <p className="bio">{element.profession}</p>
          </div>
          </div>
        </div>
        // <div className='col-md-2' key={i}>
        //   <div className='user-box d-flex text-center'>
        //    <img src='https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png' alt='user image' width={25} />
        //     <h4 className='text-center'>
        //       {element.name}
        //     </h4>
        //     </div>
        // </div>
        );
      })
     }
  </div>
  </div>
  );
}

export default UserDisplay;