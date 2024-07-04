import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
const useAuth = () => {
  const [currentUser, setCurruntUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurruntUser(user);
      }else{
        setCurruntUser(nul);
      }
    });
  });
  return { currentUser };
};

export default useAuth;
