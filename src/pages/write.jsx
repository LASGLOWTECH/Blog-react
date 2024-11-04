
import { MdUpload } from "react-icons/md";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import instance from "../axios.config";
import { useLocation } from "react-router-dom";
import moment from "moment/moment";
const Write = () => {

    const state = useLocation().state
    const [value, setValue] = useState(state?.descr || "");
    const [title, setTitle] = useState(state?.title || "");
    const [cat, setCat] = useState(state?.cat || "");
    const [file, setFile] = useState(null);

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', file)
            const res = await instance.post("/upload", formData)
            const data = res.data

            console.log(data);

        } catch (error) {
            console.log(error);

        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const imgUrl = upload()


        try {

            state ?await instance.put(`/posts/${state.id}`,{
              title, 
              descr:value,
               cat,
               img:file? imgUrl:"" 
            }):
            await instance.post(`/posts/`,{
                title, 
                descr:value,
                 cat,
                 img:file? imgUrl:"" ,
                 date:moment(Date.now()).format("YYYY-MM-D-HH:mm:ss")
              })
  


        } catch (error) {
            console.log(error);

        }
    }
    console.log(value);

    return (
        <div className="write  my-10 container grid grid-cols-1 md:grid-cols-3">
            <div className=' col-span-2'>
                <input
                    type="text"
                    className="w-full border-none p-4 pe-12 text-sm  text-Darkash bg-lime-50"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <div className='h-[300px] overflow-scroll border-none'>
                    <ReactQuill className='text-gray-900 h-[100%] b' theme="snow" value={value} onChange={setValue} />;


                </div>
            </div>

            <div className=' mx-3 col-span-1'>

                <div className='flex flex-col'>
                    <h3 className="md:text-2Xl pb-3  text-gray-800 font-medium sm:text-2xl">  Publish</h3>

                    <span className='text-gray-800'>


                        <b>Status:</b> Draft
                    </span>

                    <span className='text-Darkash'>


                        <b>Visibility:</b> Public
                    </span>
                    <input type='file'
                        id='file'
                        className='hidden'
                        onChange={e => setFile(e.target.files[0])} />
                    <label htmlFor='file'

                        className='text-Darkash py-2 flex flex-row font-medium'><MdUpload className=" shadow-lg text-2xl fill-Nature" />Upload</label>
                </div>

                <div className='space-x-3'>
                    <button className='btn-secondary2'>Save as draft</button>
                    <button className='btn-primary' onClick={handleSubmit}>Pulish</button>
                </div>
                <div className=' flex flex-col space-y-3'>

                    <h3 className="md:text-2Xl   text-Nature font-medium  pt-4 sm:text-2xl">  Category</h3>
                    <div className=''>
{/* Tech  */}
                        <input type='radio'
                            checked={cat === "tech"}
                            className=''
                            value='tech'
                            id='tech'
                            name='cat'
                            onChange={e => setCat(e.target.value)} />
                        <label htmlFor='tech' className='text-Nature font-medium'>Technology</label></div>

{/* design */}
                    <div className=''>
                        <input type='radio'
                            checked={cat === "design"}
                            className=''
                            value='Design' 
                            id='Design'
                            name='cat'
                            onChange={e => setCat(e.target.value)} />
                        <label htmlFor='design' className='text-Darkash  border-Nature fill-Nature font-medium'>Design</label></div>

{/* entertainment */}
                    <div className=''>
                        <input type='radio'
                            checked={cat === "entertainment"}
                            className=''
                            value='entertainment' id='entertainment'
                            name='cat'
                            onChange={e => setCat(e.target.value)} />
                        <label htmlFor='entertainment'
                            className='text-Darkash font-medium'>Entertainment</label></div>
{/* music */}
                    <div className=''>
                        <input type='radio'
                            checked={cat === "music"}
                            className=''
                            value='music' id='entertainment'
                            name='cat'
                            onChange={e => setCat(e.target.value)} />
                        <label htmlFor=' music' className='text-Darkash font-medium'>Music</label></div>

                </div>




            </div>


        </div>
    );
}

export default Write;