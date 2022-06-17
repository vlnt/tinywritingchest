import React from 'react'
import data from '../data'
import PostRef from './postRef'
import Post from './post'

export default function Content(props){
    const postRefs = data.map(item => {
        return <PostRef key={item.id}
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