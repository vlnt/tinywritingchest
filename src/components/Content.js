import React, {useState} from 'react'
import data from '../data'
import Post from './Post' 

const URL_FIREBASE_REALTIME_DATABASE = 'https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app/data.json'

export default function Content(props){
    let dataReceived = false
    const [posts, setPosts] = useState({})
    
    if(!posts.length){
        console.log('fetching...')
        fetch(URL_FIREBASE_REALTIME_DATABASE)
        .then(res => {
            dataReceived = true
            return res.json()
        }).then(data => {
            console.log('from web:', data)
            setPosts(data)
        })
        }
     console.log('posts:',  posts.length)
    const postRefs = posts.map(item => {
        return <Post key={item.id}
                          post={item}
                     />
    })
    
    return(
        <main className='main'>
            <section className='blog-items'>
                {postRefs}
            </section>
        </main>
    )
}