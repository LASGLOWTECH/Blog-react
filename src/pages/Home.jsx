import Card from "../components/card";

import { posts } from "../components/blogdata";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      <section className=" my-4 container">
        <div className="container">


          {posts.map((post) => (
            <div className=" mt-3 row-reverse-odd md:space-y-12 grid grid-cols-1 lg:h-screen lg:grid-cols-2" key={post.id}>
            

              <div className="relative  z-10 lg:py-16">
                <div className=" relative h-64 sm:h-80 lg:h-full">
                  <img
                    src={post.img}
                    width={1280}
                    height={720}
                    alt={post.id}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="md:my-2 relative flex items-center bg-Ashcolor">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                ></span>

                <div className="p-8  sm:p-16 lg:p-24">
                  <Link to={`/post/${post.id}`}>
                    <h2 className="md:text-2Xl text-gray-800 font-bold sm:text-3xl">
                      {post.title}
                    </h2>

                    <p className="mt-4 text-gray-600">
                      {post.descr}
                    </p>
                    <a
                      href="#"
                      className="btn-secondary"
                    >
                      READ BLOG
                    </a>
                  </Link>




                </div>
              </div>
            </div>




          ))}

        </div>
      </section>


      <Card />



    </>
  );
}

export default Home;