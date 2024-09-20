
import { MdUpload } from "react-icons/md";
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value);

    return (
        <div className="write  my-10 container grid grid-cols-3">
            <div className=' col-span-2'>
                <input
                    type="text"
                    className="w-full border-none p-4 pe-12 text-sm  text-Darkash bg-lime-50"
                    placeholder="Title"
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
                    <input type='file' id='file' className='hidden'/>
                    <label htmlFor='file' className='text-Darkash py-2 flex flex-row font-medium'><MdUpload className=" shadow-lg text-2xl fill-Nature" />Upload</label>
                </div>

                <div className='space-x-3'>
                    <button className='btn-secondary2'>Save as draft</button>
                    <button className='btn-primary'>update</button>
                </div>
<div className=' flex flex-col space-y-3'>

<h3 className="md:text-2Xl   text-Nature font-medium  pt-4 sm:text-2xl">  Category</h3>
  <div className=''><input type='radio' className='' value='technology' id='technoogy'  name='cat' />
 <label htmlFor='technology' className='text-Nature font-medium'>Technology</label></div>
               

 <div className=''><input type='radio' className='' value='Design' id='Design'  name='cat' />
 <label htmlFor='technology' className='text-Darkash  border-Nature fill-Nature font-medium'>Design</label></div>


       <div className=''> <input type='radio' className='' value='entertainment' id='entertainment'  name='cat' />
 <label htmlFor='technology' className='text-Darkash font-medium'>Entertainment</label></div>
          
</div>




            </div>


        </div>
    );
}

export default Write;