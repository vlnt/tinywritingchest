import React, {useState} from 'react'
import { Input, TextArea, Button } from 'semantic-ui-react'
import { db } from '../utils/firebase'
import { ref, child, push, update } from "firebase/database";

const NewPost = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    console.log(props.uid)

    function writeNewPost() {

        const date = new Date().toISOString()
        //console.log("inside write func ", date)
        const newPostKey = push(child(ref(db), 'data')).key;
        // A post entry.
        const postData = {
          uid: props.uid,
          id: newPostKey,
          date: date,
          text: body,
          title: title,
        };
      
        // Get a key for a new Post.
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        const updates = {};
        updates['/data/' + newPostKey] = postData;
        //updates['/user-posts/' + uid + '/' + newPostKey] = postData;
      
        return update(ref(db), updates);
      }

    const onTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
    }

    const onBodyChange = (e) => {
        e.preventDefault()
        setBody(e.target.value)
        console.log(body)
    }


    // function save(title, body){
    //     writeNewPost(title, body)
    // }

    return(
        <main>
            <div className='new-post'>
                <h3>Create post</h3>
                <Input onChange={onTitleChange} fluid label='Title'/>
                <TextArea onChange={onBodyChange} placeholder='Start typing here ...' rows={30} />
                <a>
                <Button onClick={writeNewPost} floated="left" content="Create" icon="add circle" primary={true}/>
                </a>
            </div>
        </main>
        
    )
}

export default NewPost