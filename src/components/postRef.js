import React from 'react'
import Post from './post'

export default function PostRef(props){
    //const [isRefPage, setIsRefPage] = React.useState(true)

    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })

    function showPost(){
        //alert(props.post.id)
        const postContent = document.getElementById(`${props.post.id}`)
        postContent.style.display = 'flex'
    }

    return(
        <div className='post'>
            <h3>{props.post.title}</h3>
            <p id='date'>{formattedDate}</p>
            <div id={props.post.id} className='text'>{props.post.text}</div>
            <button type='button' onClick={showPost}> Read</button>
        </div>
    )
}