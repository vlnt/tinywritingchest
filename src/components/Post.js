import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function Post(props) {
  const [isShown, setIsShown] = React.useState(false);

  const formattedDate = new Date(props.post.date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function showPost(e) {
    //console.log(e)
    const postContent = document.getElementById(`${props.post.id}`);
    if (!isShown) {
      setIsShown(true);
      postContent.style.display = "flex";
      e.target.innerText = "Hide";
    } else {
      setIsShown(false);
      postContent.style.display = "none";
      e.target.innerText = "Read";
    }
  }

  const postLink = `./posts/${props.post.id}`

  return (
    
    <Card
    color="teal"
    fluid
      header={props.post.title}
      description={formattedDate}
      extra={<Link to={postLink}>Read</Link>}
    />
  );
  // return(
  //     <div className='post'>
  //         <div>
  //          <h3>{props.post.title}</h3>

  //                 <Button basic onClick={showPost}>Read</Button>

  //         </div>

  //         <p id='date'>{formattedDate}</p>
  //         <div id={props.post.id} className='text'>{props.post.text}</div>

  //     </div>
  // )
}
