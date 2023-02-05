import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {  signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from '../../firebase';
import blobbos from './blobbos.png'
import './profile.css'
import { MyFeed } from "../../components";

const ProfilePage = ({ isUser, setisUser, user, setUser }) => {
    const [formStatus, setFormStatus] = useState(false)
    const [post, setPost] = useState("") //update with posts from database
    const [posts, setPosts] = useState(null) //update with posts collection from database

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const fetchPost = async () => {
        await getDocs(collection(db, "post"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setPosts(newData);            
                console.log("posts: ");    
                
            })
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])
    console.log(posts);


    const navigate = useNavigate();
 
    const handleLogout = (e) => {       
        e.preventDefault();        
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
            sessionStorage.clear();
            window.location.reload(false);
        }).catch((error) => {
        // An error happened.
        });
    }

    const onCreatePost = async (e) => {
        e.preventDefault();
        console.log("post")
   
    }

    const addPost = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "post"), {
              post: post,
              userEmail: sessionStorage.getItem('user'),
              time: new Date().toLocaleString(),
              title: title,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    

    useEffect(() => {
        try {
            var postForm = document.getElementById("post-form")
            if(postForm.style.display === "none") { postForm.style.display = "block";}
            else {postForm.style.display = "none";}
        } catch (e) {
            console.log("waiting")
        }
    }, [formStatus])

    if(sessionStorage.getItem('isUser')) {
        return (
            <div id="profile-container">
                <div className="col">
                    <h1 id="welcome-label">Welcome {sessionStorage.getItem('user')}!</h1>
                    <img src={blobbos} alt="blobbbbs" />
                    <div className="butt-on">
                        <button onClick={handleLogout} id='logout-button'>
                            Logout
                        </button>
                    </div>
                    <div className="butt-on">
                        <button onClick={() => {setFormStatus(!formStatus)}} id='newPost-button'>
                            New Post
                        </button>

                        <div id="post-form">
                            <form>
                                <div className="input">
                                    <input type="text"
                                            label="Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}  
                                            required                                    
                                            placeholder="Post Title" className="butt"                               
                                        />
                                </div>
                                <div className="input">
                                    <textarea rows="10" cols="40"
                                            placeholder="Description" 
                                            onChange={(e) => setPost(e.target.value)} 
                                            required className="butt"                                
                                                         
                                        />
                                </div>
                                <div>
                                    <button className="button"
                                        type="submit" 
                                        onClick={addPost}                        
                                    >  
                                    Upload Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col" id="col2">
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>
                    <MyFeed/>

                </div>


            </div>
        )
    } else {
        return (
            <div>
                <Link exact="true" to="/register" className="link">
                    <button className="butty">Create account</button>
                </Link>
                <Link exact="true" to="/login" className="link">
                    <button className="butty">Sign in</button>
                </Link>
            </div>
        )
    }
}

export default ProfilePage