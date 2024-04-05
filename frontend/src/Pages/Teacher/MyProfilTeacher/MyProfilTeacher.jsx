import React, { useState, useEffect } from 'react';
import './MyProfilTeacher.css';

const MyProfilTeacher = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch profile data from server
        // Példa hívás a szerverről
        // fetchProfileData();

        // Dummy profile data
        const dummyData = {
            id: 2,
            username: 'diák',
            classId: 3,
            email: 'diak@gmail.com',
            roleId: 3
        };

        setProfileData(dummyData);
        setLoading(false);
    }, []);

    return (
        <div className="profile-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <h2>My Profile</h2>
                    <div className="profile-info">
                        <p><strong>ID:</strong> {profileData.id}</p>
                        <p><strong>Username:</strong> {profileData.username}</p>
                        <p><strong>Class ID:</strong> {profileData.classId}</p>
                        <p><strong>Email:</strong> {profileData.email}</p>
                        <p><strong>Role ID:</strong> {profileData.roleId}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default MyProfilTeacher;
