import React from 'react'
import Post from './post'

export default function PostRef(props){
    const [isShown, setIsShown] = React.useState(false)

    const formattedDate = new Date(props.post.date).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })

    function showPost(e){
        const postContent = document.getElementById(`${props.post.id}`)
        if(!isShown){
            setIsShown(true)
            postContent.style.display = 'flex'
            e.target.innerText = 'Hide'
        } else{
            setIsShown(false)
            postContent.style.display = 'none'
            e.target.innerText = 'Read'
        }
        
    }

    return(
        <div className='post'>
            <h3>{props.post.title}</h3>
            <p id='date'>{formattedDate}</p>
            <div id={props.post.id} className='text'>{props.post.text}</div>
            <button className='btn' type='button' onClick={showPost}> Read</button>
        </div>
    )
}