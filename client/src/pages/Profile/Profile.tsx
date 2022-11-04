import React from 'react';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import ProfileSideBar from '../../components/ProfileSideBar/ProfileSideBar';

type ProfileProps = {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <div className='body'>
      <main className='main'>
        <div className="user-view">
          <ProfileSideBar />
          <div className="user-view__content">
            <ProfileDetails />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile;