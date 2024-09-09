import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { NavLink } from "react-router-dom";

// import { Dialog } from '@mui/material';

function ProfileAbout({ Muser, alreadyfriends }) {
  return (
    <div className="h-24 px-3 pl-5 flex items-center justify-between bg-white w-[96%] rounded-md m-auto">
      <div>
        <p className="font-bold">{Muser.username}</p>
        <NavLink
          to={"/friends/friend"}
          className={"text-sm font-thin font-sans hover:underline"}
        >
          {alreadyfriends.length} friends
        </NavLink>
      </div>
      <div>
        <button className="text-sm bg-blue-400 rounded-md p-[5px]">
          <EditIcon />
          Edit profile
        </button>
      </div>
    </div>
  );
}

export default ProfileAbout;
