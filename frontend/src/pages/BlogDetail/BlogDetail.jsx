import styles from "./BlogDetail.module.css"
import { getBlogById, postComment, deleteBlog, getCommentsById } from "../../api/internal";
import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function BlogDetail(){

const[blog,setBlog]=useState([])
const [comments, setComments]= useState([])
const [owns, setOwns]= useState(false)
const [newComment, setNewComment]= useState("")

const navigate = useNavigate()

const params = useParams()
const blogId = params.id 

const username= useSelector((state)=>state.user.username)
const userId  = useSelector((state)=>state.user._id)


return(
    <div className={styles.wrapper} >

    <div className={styles.left}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p>@ {blog.author+ " on" + new Date(blog.createdAt).toDateString()}</p>
        <div className={styles.photo}>
            <img src={blog.photo} width={250} height={250} />
        </div>

        <p className={styles.content}>{blog.content}</p>
        {
            owns && (
                <div className={styles.buttonWrapper}>
                    <button className={styles.edit}>Edit</button>
                    <button className={styles.delete}>Delete</button>
                </div>
            )
        }
    </div>

    <div className={styles.right}></div>



    </div>
)    
}


export default BlogDetail;