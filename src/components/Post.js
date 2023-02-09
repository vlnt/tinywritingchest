import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Card, Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function Post(props) {
  
  const formattedDate = new Date(props.post.date).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const postLink = `./posts/${props.post.id}`

  return (
    
    <Card
    fluid
      header={props.post.title}
      description={formattedDate}
      extra={<Link to={postLink}>Read</Link>}
    />
  );
}
