
import { blogAll } from "../../api/internal";
import{useState,useEffect} from "react"




function Blog(){



    const[blogs,setBlogs]=useState([])
    useEffect(() => {
    (async _=>{
    
      let response=  await blogAll() 
      setBlogs(response)
      console.log(response)
    
    
    })();
    
    
    
    setBlogs([])
    
    
    
    }, [])
    

    return (
        <>
Blogs pageeee
        </>
    )
}


export default Blog;