import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { auth } from './utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header";
import Content from "./components/Content";
import PostItem from "./components/PostItem";
import Login from "./components/user/login";
import NewPost from "./components/NewPost";

export default function App() {
  const [user, setUser] = useState();
  //console.log("user in app: ", auth.currentUser);
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(uid)
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
  }, [])
  console.log(user)
  return (
    <>
        <BrowserRouter>
          <Header user={user} />
          <Routes>
            <Route path="/create" element={<NewPost uid={user} />} />
            <Route path="/posts/:postId" element={<PostItem />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<Content />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}
