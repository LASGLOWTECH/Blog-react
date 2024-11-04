
import instance from "../axios.config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Menu = ({cat}) => {


    const [posts, setPosts] = useState([]);
   

    const fetchDta = async () => {
      try {
        const res = await instance.get(`/posts/?cat=${cat}`)
        const posts= res.data
        setPosts(posts);
        console.log(cat);
      } catch (error) {
        console.log(error);
  
      }
    }
  
  
    useEffect(() => {
      fetchDta()
    }, [])
  

    return ( 

        
        <>
        {posts.map((post, index) => (
    <div className=" bg-Ashcolor my-3 pb-5 flex flex-col" key={index}>
 <div className=" relative w-full h-52 ">
 <img
                    src={post.img}
                    width={150}  
                    height={150} 
                   
                    alt="img"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>


                <Link to={`/post/${post.postid}`}  className="px-3"> 
                    <h3 className="md:text-lg my-4 pt-2   text-gray-800 font-bold text-lg">
                      {post.title}
                    </h3>
                    
                    
                    <button className="  px-3 btn-secondary2"
                    >
                      READ BLOG
                    </button>
                  </Link>




                </div>


    
            




 ))} 
        
        </>
     );
}
 
