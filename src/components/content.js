import React from 'react'
import data from '../data'
import Post from './Post'

export default function Content(props){
    const postRefs = data.map(item => {
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