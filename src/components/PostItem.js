import React, {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"

const URL_FIREBASE_REALTIME_DATABASE = 'https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app/data.json'

const PostItem = (props) => {
    const [posts, setPosts] = useState([])
    let param = useParams()
    console.log(param)
    useEffect(() => {
        async function getPosts(){
            if(!posts.length){
                const res = await fetch(`${URL_FIREBASE_REALTIME_DATABASE}`)
                const data = await res.json()

                setPosts(data)
               } 
        }

        getPosts()
        console.log(posts)
       
    }, [])

    const postItem = posts.map(item => {
        if(item.id == param.postId){
            return (
                <article>
                    <h3>{item.title}</h3>
                    <div>{item.text}</div>
                </article>
            )
        }
    })
    
    return (
        <>
            {postItem}
        </>
    )
}

export default PostItem