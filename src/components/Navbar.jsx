
import { Link } from "react-router-dom";
import React, { useContext } from 'react'

// import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai"
import { HiMiniBars3BottomRight, HiPower } from "react-icons/hi2"

import { BiSolidPhoneCall } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { useState } from 'react'
import { AuthContext } from "../context/authContext";
import { HiMiniUserCircle } from "react-icons/hi2";
import { BiLogOut } from "react-icons/bi";


export default function Navbar() {
    const { currentUser, logout } = useContext(AuthContext)

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(prev => !prev)

    }

    const handleClose = () => {
        setShow(false)
    }


    const navLinks = [{ link: 'Tech', path: "/?cat=tech" }, { link: 'Entertainment', path: "/?cat=entertainment " }, { link: 'Design', path: "/?cat=design" }, { link: 'Music', path: "/?cat=music" },

    ]
    return (
        <>
            <div className='p-2 shadow-sm '>

                <div className=" container  flex  justify-between  w-full items-center     ">

                    <div className=' '>
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


                                <a href={links.path} className='text-gray-700 transition hover:text-Nature  px-2 font-medium tracking-wider text-base ' key={links} >{links.link}</a>


                            )
                        })}


                    </div>

                    <div className="  flex items-center space-x-2 callarea  rounded-medium px-4 py-1 ">
                        < span className="text-Nature">{currentUser?.username}</span>
                        {currentUser ? (<HiPower onClick={logout} className=" rounded-full bg-Ashcolor  p-2 text-5xl font-bold text-Nature" />
                        ) :
                            <Link to={`/login`} >  < HiMiniUserCircle className=" rounded-full bg-Ashcolor  p-2 text-5xl font-bold text-Nature " />

                            </Link>
                        }



                        <Link to={`/write?edit=2`} className="">
                            <BiEdit className=" rounded-full bg-Ashcolor  p-2 text-4xl font-bold text-Nature " />
                        </Link>



                    </div>



                    {!show ? (< div className=' flex items-center   justify-center md:hidden'><HiMiniBars3BottomRight className="   rounded bg-gray-100 p-2   hover:text-Nature  font-extrabold text-2xl  text-gray-800 transition  ease-in duration-500 rounded-4xl w-10 h-10 " onClick={handleShow} /></div>) : (< div className=' flex items-center     justify-center md:hidden'><AiOutlineClose className="font-bold text-lg  text-gray-800 transition duration-500  rounded-4xl  w-8 h-8 " onClick={handleClose} /></div>)}


                </div>







                {show && (<div className=' flex md:hidden mx-auto transition translate-y-6 transform-gpu bg-white shadow-lg  hover:text-Nature duration-700 ease-in-out delay-150 flex-col pb-10 z-100    items-center'  >

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
