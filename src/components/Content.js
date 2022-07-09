import React, {useState} from 'react'
//import data from '../data'
import Post from './Post' 

const URL_FIREBASE_REALTIME_DATABASE = 'https://tinywritingchest-default-rtdb.europe-west1.firebasedatabase.app/data.json'

export default function Content(props){
    let dataReceived = false
    const [posts, setPosts] = useState([])
    
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