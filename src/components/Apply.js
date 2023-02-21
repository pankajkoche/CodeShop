import React, { useState } from 'react';
import {motion } from 'framer-motion'
import {MdCloudUpload,MdDelete} from 'react-icons/md'
import Loader from './Loader'
import {deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable} from 'firebase/storage'
import { storage,} from '../firebase.config';


const Apply = () => {

const [title, setTitle]=useState("");
const [discription, setDiscription]=useState("");
const [content, setContaint] =useState("");
const [imageAsset, setImageAsset] = useState(null);
const [fields, setFields] = useState(false);
const [alertStatus, setAlertStatus] = useState("danger");
const [msg, setMsg] = useState(null);
const [isLoading, setIsLoading] = useState(false);

const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while uploading : Try AGain 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageAsset(downloadURL);
          setIsLoading(false);
          setFields(true);
          setMsg("Image uploaded successfully 😊");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 4000);
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully 😊");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if (!title || !content || !imageAsset || !discription ) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          discription: discription,
          content: content,
        };
        //saveItem(data);
        setIsLoading(false);
        setFields(true);
        setMsg("Data Uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
        clearData();
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try AGain 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }

   // fetchData();
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setDiscription("");
    setContaint("");
  };

  /*const fetchData = async () => {
    //await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };*/
    return (
        <div className='w-full h-auto flex min-h-screen items-center justify-center'>
            <div className='w-[90%] md:[75%] border border-gray-300 p-4
                rounded-lg flex flex-col items-center justify-center gap-4 bg-slate-50'>

                    {
                        fields && (

                            <motion.p initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}

                                className={`w-full p-2 rounded-md text-lg font-semibold text-center 
                                ${alertStatus==='danger'? "bg-red-400 text-red-800":"bg-emerald-400 text-emarald-8 " }`}>
                                {msg}
                            </motion.p>
                        )
                    }

                    <div className='w-full py-2 border-b border-gray-400 flex
                    items-center gap-4'>

                        <input required
                         value={title}
                         onChange={(e)=>setTitle(e.target.value)}
                         placeholder="Add Title"
                        className='w-full h-full text-lg bg-transparent 
                        font-semibold outline-none border-none text-textColor'/>
                    </div>
                   
                    <div className="group flex justify-center py-2 gap-4  items-center 
                        flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 
                        cursor-pointer rounded-lg">
                        {isLoading ? <Loader /> :<>
                        
                           {!imageAsset? <>
                            <label className='w-full h-full flex flex-col items-center justify-center
                            cursor-pointer '>
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <MdCloudUpload className="text-gray-5000 text-3xl hover:text-gray-700"/>

                                    <p className="text-gray-500 hover:text-gray-700">
                                        Click here to upload
                                    </p>
                                </div>
                                <input
                                type="file"
                                name="uploadimage"
                                accept="image/"
                                onChange={uploadImage}
                                className="w-0 h-0"
                                />
                            </label>
                            </>:(<>
                                <div className="relative h-full">
                            <img
                            src={imageAsset}
                            alt="uploaded image"
                            className="w-full h-full object-cover"
                            />
                            <button
                            type="button"
                            className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
                            onClick={deleteImage}
                            >
                            <MdDelete className="text-white" />
                            </button>
                        </div>
                                    </>)
                                    }
                        </>}
                                            

                    </div>

                    <div className='w-full py-2 border-b border-gray-400 flex
                    items-center gap-2'>

                        <input required
                         value={discription}
                         onChange={(e)=>setDiscription(e.target.value)}
                         placeholder="Add discription"
                        className='w-full h-full text-lg bg-transparent 
                        font-semibold outline-none border-none text-textColor'/>

                    </div>
                    <div className='w-full py-2 border-b border-gray-400 flex
                    items-center gap-2'>

                        <textarea required rows="4" 
                         value={content}
                         onChange={(e)=>setContaint(e.target.value)}
                         placeholder="content"
                        className='w-full h-full text-lg bg-transparent 
                        font-semibold outline-none border-none text-textColor'/>

                    </div>

                    <div className="flex items-center w-full py-2">
                        <button
                            type="button"
                            className="ml-0 md:ml-auto w-full md:w-auto 
                            border-none outline-none bg-red-500 px-12 py-2 
                            rounded-lg text-lg text-white font-semibold"
                            onClick={saveDetails}
                        >
                            Save
                        </button>
                    </div>


                </div>
        </div>
    );
};

export default Apply;


