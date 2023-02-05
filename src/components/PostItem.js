import React, {useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header, Container, Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css"

const URL_FIREBASE_REALTIME_DATABASE = 'https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app/data.json'

const PostItem = (props) => {
    const [posts, setPosts] = useState([])
    let param = useParams()

    useEffect(() => {
        async function getPosts(){
            if(!posts.length){
                const res = await fetch(`${URL_FIREBASE_REALTIME_DATABASE}`)
                const data = await res.json()

                setPosts(data)
               } 
        }
        getPosts()
    }, [])

    const postItem = posts.map(item => {
        if(item.id == param.postId){
            return (
                <Container text key={item.id}>
                    <Header as='h3'>{item.title}</Header>
                    <label>{item.date}</label>
                    <div>{item.text}</div>
                </Container>
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