
import { Link } from "react-router-dom";
import React from 'react'
// import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"
import { HiMiniBars3BottomRight } from "react-icons/hi2"
import { BiSolidPhoneCall } from "react-icons/bi";
import { useState } from 'react'




export default function Navbar() {


    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(prev => !prev)

    }

    const handleClose = () => {
        setShow(false)
    }


    const navLinks = [{ link: 'Home', goto: "/" }, { link: 'Services', goto: "/#Services " }, { link: 'login', goto: "/login" }, { link: 'Contact', goto: "/#contact" },

    ]
    return (
        <>
            <div className='p-2 shadow-sm '>

                <div className=" container  flex  justify-between  w-full items-center     ">

                    <div className='text-6xl '>
                        <Link href='/'>
                            <img src="./lasglowtech.svg"
                                width={100}
                                height={100}
                                alt="image" />

                        </Link>
                    </div>


                    <div className=' hidden  md:flex  text-base flex-col md:flex-row text-gray-700 justify-end'>
                        {navLinks.map((links) => {
                            return (


                                <a href={links.goto} className='text-gray-700 hover:border-b-2 hover:border-b-darkestBlue px-6   font-bold tracking-wider text-base ' key={links} >{links.link}</a>


                            )
                        })}


                    </div>

                    <div className="  flex items-center space-x-2 callarea shadow-lg rounded-2xl md:hidden  px-4 py-1 border-2 bg-white border-darkestBlue">

                        <BiSolidPhoneCall className="text-2xl fonr-bold text-darkBlue " />

                        <a href="tel:+2349031821590">Call Now</a>
                    </div>

                    <div className="  md:flex hidden callarea shadow-lg rounded-3xl px-3 py-2 border-2 border-gray-700">
                        <p className="text-gray-700 text-[20px] font-bold tracking-wider "><span className="text-Nature">Call Now:</span> +234-903-577-8224</p>

                    </div>

                    {!show ? (< div className=' flex items-center   justify-center md:hidden'><HiMiniBars3BottomRight className="font-extrabold text-2xl  text-darkestBlue transition  ease-in duration-500 rounded-4xl w-10 h-10 " onClick={handleShow} /></div>) : (< div className=' flex items-center     justify-center md:hidden'><AiOutlineClose className="font-bold text-lg  text-darkestBlue transition duration-500  rounded-4xl  w-8 h-8 " onClick={handleClose} /></div>)}


                </div>







                {show && (<div className=' flex md:hidden mx-auto transition translate-y-6 transform-gpu bg-white shadow-lg  duration-700 ease-in-out delay-150 flex-col pb-10 z-100    items-center'  >

                    {navLinks.map((links) => {
                        return (


                            <a href={links.goto} className='text-gray-800 border-t-2 border-grey-50  w-full block text-center  hover:bg-darkBlue hover:text-white px-6  py-4 font-bold tracking-wider text-base ' onClick={handleClose} key={links} >{links.link} </a>


                        )
                    })}


                </div>)}





            </div>








        </>


    )
}
