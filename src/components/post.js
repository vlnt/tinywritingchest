import React from 'react'

export default function Post(props){
    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      
    return(
        <div className='post'>
            <h3>{props.post.title}</h3>
            <p id='date'>{formattedDate}</p>
            <div>
                {props.post.text}
            </div>
            
        </div>
    )
}