import { useState } from "react"
import "./Post.css"

export const Post = ({props}) => {
    const [data, setData] = useState(props);
    // console.log(data);
  return (
    <div className="post_div">
        <h3>Title : {data.title}</h3>
        <p>{data.body}</p>
    </div>
  )
}
