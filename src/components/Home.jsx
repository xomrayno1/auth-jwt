import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {LOG_OUT} from '../utils/Constant'
import {
    Link
} from 'react-router-dom'
import {
    uploadFile
} from '../redux/action/authAction'
 
function Home(props) {
   
    const [file, setFile] = useState();
    const {user}  = useSelector(state => state.auth)
    const [imagePreview, setImagePreview] = useState(null);
    const dispatch = useDispatch();

    function handleOnChangeFile(e){
        setFile(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
    function onHandleUpload(){
        const fd = new FormData();
        fd.append('multipartFile',file);
       
        dispatch(uploadFile(fd))
    }
    return (
        <div >
            <h1>Home</h1>
            <div>
                {
                    user.roles && user.roles.map((item,idx) => {
                    return (
                        <>
                            {
                                item.authority === 'ROLE_USER' ? <Link to="/category">Category</Link> : null
                            }
                            {
                                item.authority === 'ROLE_ADMIN' ? (
                                            <>
                                                <Link to="/products">Product</Link>
                                            </>
                                            ) : null
                            }
                        </>
                    )
                    })
                }
                 
            </div>
            <div>
                <input type="file" name="images"  onChange={handleOnChangeFile} />
            </div>
            <div>
                <h2>Img Preview</h2>
                <img    src={imagePreview}/>
            </div>
            <div>
                <button onClick={onHandleUpload}>Upload</button>
            </div>
            <div>
                <h1>Img Load Database</h1>
                <img    src={`http://localhost:8080/${user.images}`} />
            </div>
             
        </div>
    );
}

export default Home;