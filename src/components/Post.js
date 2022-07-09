import React from 'react'
import Button from '@mui/material/Button'
import theme from '../themes'
import { ThemeProvider } from '@emotion/react'

export default function Post(props){
    const [isShown, setIsShown] = React.useState(false)

    const formattedDate = new Date(props.post.date).toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })

    function showPost(e){
        //console.log(e)
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
             <div>
             <h3>{props.post.title}</h3>
                <ThemeProvider theme={theme}>
                    <Button color='primary' variant="contained" onClick={showPost}>Read</Button>
                </ThemeProvider>
            </div>
            
            <p id='date'>{formattedDate}</p>
            <div id={props.post.id} className='text'>{props.post.text}</div>
           
        </div>
    )
}