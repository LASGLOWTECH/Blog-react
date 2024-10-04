
import { useState, useEffect, useContext, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../axios.config";
import { AuthContext } from "../context/authContext";
import moment from "moment/moment";
 
import { BiTrash } from "react-icons/bi";

import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Menu } from "../components/sidemenu";

const Singleblog = () => {  
  const { currentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [post, setPost] = useState({})
    

  const location= useLocation()
  const navigate=useNavigate()
  const postid= location.pathname.split("/")[2]
  console.log(postid);
  
    const fetchDta = async () => {
      try {
        const res = await instance.get(`/posts/${postid}`)
        const post= res.data
        setPost(res.data);
        console.log(post);
        
      } catch (error) {
        setError("Failed to fetch the post.");
        console.log(error);
         
    } finally {
        setLoading(false);
    }
    }
  

    useEffect(() => {
      fetchDta();
    }, [postid]);

    if (loading) {
      return <div className="text-black">Loading...</div>;
  }

  if (error) {
      return <div className="text-black">{error}</div>;
  }
	

  const handleDelete= async () =>{
    try {
      const res = await instance.delete(`/posts/${postid}`)
        const del= res.data
      navigate("/")
        console.log(del);
    } catch (error) {
      setError("Can't delete post");
        console.log(error);
    }
    
  }
    return (  
    
    <>
    
    <div className= "px-10 pb-5 mb-8 bg-Ashcolor md:mx-auto  lg:px-12">
<section className="container ">
    



<div className=" flex justify-between  flex-col items-center max-w-[800px] mb-12   mx-5 md:mx-auto">
    
<h2 className="text-3xl text-gray-800 max-w-[700px] text-center py-5 mb-5  px-5 sm:text-5xl font-semibold ">
    Get Started With our Latest Blog updates, 
</h2>

             
              <img src={post?.img} alt="singleimagr" width={50} height={50} className="my-2 rounded-full" />
              <p className=" mt-1 pb-6  text-gray-800 font-semibold  max-w-[740px]  text-lg text-centerfont-normal  ">{currentUser?.username}</p>
             
   </div>
</section>




    </div>

<div className="  container grid grid-cols-2 lg:grid-cols-3">

 
				
    <div className=" col-span-4 md:col-span-2 container mt-[-100px] max-w-[800px] mb-10  ">
     
      
<>
    { post.img && <img src={post.img} alt={post?.title || "Blog post image"} width={1280} height={720} />}

<div className="flex flex-row  items-center justify-normal pt-3 ">

                 <p className="text-gray-800 font-medium text-base  ">Posted {moment(post.date).fromNow()}</p>
                 
                 
                 {currentUser?.user=== post.user && 
                  <div className="flex flex-row  items-center justify-normal"> <BiTrash onClick={handleDelete} className="ms-4 fill-red-600 text-2xl" />
                  <Link to={`/write?edit=2`}>
                     <BiEdit className="fill-Nature text-2xl " />
                   </Link>
                  </div>
 
                 }
                 
</div>

<h3 className="md:text-lg my-4 pt-2   text-gray-800 font-bold text-lg">
   {post.title}
</h3>
    
<p className="text-base text-gray-800  font-normal  ">
{post.descr} </p>
</> 
    
    </div>


< div className="  container gap-2 col-span-3 md:col-span-1 md:ms-[-60px] ">


<h3 className="md:text-2Xl border  p-2  text-gray-800 font-medium sm:text-2xl">  You might also like</h3>

 <Menu/>


</div>

    
    </div>
    
    </>);
}
 
export default Singleblog;