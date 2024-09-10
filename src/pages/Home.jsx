import Card from "../components/card";

import { Blogdata } from "../components/blogdata";



const Home = () => {
    return (  
<>
<section className=" my-4 container">
  <div className="container">
    <div className="space-y-12 grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-Ashcolor">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="md:text-2Xl text-gray-800 font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
            esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
            architecto eius quis quibusdam fugiat dicta.
          </p>




          <a
            href="#"
            className="btn-secondary"
          >
     READ BLOG
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


       <Card/>

    
        
       </>
    );
}
 
export default Home;