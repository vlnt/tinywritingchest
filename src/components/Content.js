import React, { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
//import data from '../data'
import Post from "./Post";

const URL_FIREBASE_REALTIME_DATABASE =
  "https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app/data.json";

export default function Content(props) {
  let dataReceived = false;
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    async function getPosts(){
        if(!posts.length){
            const res = await fetch(URL_FIREBASE_REALTIME_DATABASE)
            const data = await res.json()
            setPosts(data)
           }
    }

     getPosts()
}, [])
     
  const postRefs = Array.from(Object.values(posts)).map((item, index) => {
    return <Post key={index} post={item} />;
  })


  return (
    <main className='main'>
            <section className='blog-items'>
                {postRefs}
            </section>
        </main>
  );
}
