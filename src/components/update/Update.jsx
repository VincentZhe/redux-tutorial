import React, { useState } from "react";

import Warning from "../warning/Warning";
import "./update.css";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { updateUser2 } from "../../redux/userSlice";
// import { remove, update } from "../../redux/userSlice";

const Update = () => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);

  const { userInfo, pending, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    // dispatch(update({ name, email }));
    updateUser({ name, email }, dispatch);
    dispatch(updateUser2({ name, email }));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // no any payload in update
    // dispatch(remove());
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://i.ibb.co/ZSJ2Y2B/Wechat-IMG39.jpg"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button
              disabled={pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {error && <span className="error">Something went wrong !</span>}
            {pending === false && (
              <span className="success">Account has been updated !</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;