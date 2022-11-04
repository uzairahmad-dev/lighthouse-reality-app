import React from 'react';

type RealtorLinkProps = {
    name: string
    sold: string
    avatar: string
}

const RealtorLink: React.FC<RealtorLinkProps> = ({ name, avatar, sold }) => {
  return (
    <div className="realtor__top-box">
        <a href="#realtor-profile-popup" className="profile no-margin">
            <img className="profile__img" src={avatar} alt="realtor" />
            <div className="profile__details">
                <p className="profile__name">{name}</p> 
                <span className="profile__span">{sold} Houses Sold</span>
            </div>
        </a>
    </div>
  )
}

export default RealtorLink