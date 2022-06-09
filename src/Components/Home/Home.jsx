import axios from "axios";
import { useEffect, useState } from "react"
import { Post } from "../Post/Post";
import "./Home.css"

export const Home = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
            setPosts(res.data);
        })

    }, [search])

    const handleSearch = (search) => {
        if(search.length===0){
            return;
        }
        let nposts = posts.filter(post => post.title.includes(search))
        setPosts(nposts);
        // console.log(posts);
    }
    
  return (
    <div>
        <div>
            <input value={text} type="text" placeholder="enter search text" onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={() => {setSearch(text); handleSearch(search);}}>Search</button>
        </div>
        <div>
            {posts.map((post) => {
                return(
                    <div key={post.id}>
                        <Post props={post} />
                        
                    </div>
                )
            })}
        </div>
    </div>
  )
}
