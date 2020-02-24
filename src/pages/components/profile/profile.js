import React from "react";
import { imageURL, profileSize } from "../../../api";
import "./profile.scss";

export const Profile = props => {
  const { name, character, job, profile_path } = props.profile;

  return (
    <div className="col-sm-12 col-lg-3">
      <div className="profile">
        <div className="profile-image">
          {profile_path !== null ? (
            <img
              src={`${imageURL}${profileSize.big}${profile_path}`}
              alt={name}
            />
          ) : (
            ""
          )}
        </div>
        <div className="profile-title">{name}</div>
        <div className="profile-subtitle">{job ? job : character}</div>
      </div>
    </div>
  );
};
