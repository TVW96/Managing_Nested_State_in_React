import { React, useState } from 'react';
import "./UserProfile.scss";
import userImage from "./user.png";

function UserProfile() {
    const [userProfile, setUserProfile] = useState({
        name: "John",
        email: "johnlockhart@gmail.com",
        address: {
            street: "",
            city: "",
            country: ""
        }
    });

    const updateAddress = (street, city, country) => {
        setUserProfile((prevProfile) => {
            const updatedProfile = {
                ...prevProfile, // spread previous userProfile properties
                address: { // Replace address with a new object
                    street,
                    city,
                    country
                }
            };
            console.log("Updated userProfile:", updatedProfile); // Debugging output
            return updatedProfile;
        });
    };




    return (
        <div className='page'>
            <div className='section'>
                <div className='userProfile-Input'>
                    <p><strong>User:</strong></p>
                    <label>Name:
                        <input
                            type="text"
                            value={userProfile.name}
                            onChange={(e) =>
                                setUserProfile((prev) => ({ ...prev, name: e.target.value }))
                            }
                        />
                    </label>
                    <label>Email:
                        <input
                            type="email"
                            value={userProfile.email}
                            onChange={(e) =>
                                setUserProfile((prev) => ({ ...prev, email: e.target.value }))
                            }
                        />
                    </label>
                    <button>Search user</button>
                </div>
                <div className='userProfile-Input'>
                    <form>
                        <p><strong>User Address information:</strong></p>
                        <label>
                            street:
                            <input type="text" id='street' placeholder='street' />
                        </label>
                        <label>
                            city:
                            <input type="text" id='city' placeholder='city' />
                        </label>
                        <label>
                            country:
                            <input type="text" id='country' placeholder='country' />
                        </label>
                    </form>
                    <button onClick={() => updateAddress(
                        document.getElementById('street').value,
                        document.getElementById('city').value,
                        document.getElementById('country').value,
                    )}>
                        Update Address
                    </button>
                </div>
            </div>
            <h3>User Profile</h3>
            <div className='userProfile'>
                <h3> {userProfile.name}</h3>
                <img src={userImage}
                    style={{
                        objectFit: "contain",
                        width: "30%",
                        height: "30%"
                    }} />
                <h4>{userProfile.email}</h4>
                <h4>{userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</h4>
            </div>
        </div>
    )
}

export default UserProfile