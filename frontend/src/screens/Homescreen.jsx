import React from 'react'
import DisplayMeme from '../components/DisplayMeme'
import { useDispatch, useSelector } from "react-redux"
import memes from '../data/memes.json'
import Loader from "../components/Loader"
import Message from "../components/Message";
import { createPost } from '../actions/memeAction'

const Homescreen = () => {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.memePost);
    const { loading, error, postStatus } = post;

    const submitHandler = (e) => {
        dispatch(createPost("hello.png"));
    };
    return (
        <main className="container mt-5">
            {postStatus && <Message variant='success'>{postStatus}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <div className="row">
                <div className="col-md-5 meme-edit pl-4 pt-2">
                    <canvas id="meme"></canvas>
                </div>
                <div className="col-md-6">
                    <div className="meme-generator">
                        <label>Select an Image</label>
                        <input type="file" id="imageFileInput" />

                        <label>Add Text</label>
                        <input type="text" id="topTextInput" />

                        <label>Bottom Text</label>
                        <input type="text" id="bottomTextInput" />

                        <button type="button" id="download" className="btn btn-dark mr-3">Download</button>
                        <button type="button" id="download" className="btn btn-dark" onClick={ submitHandler }>Post</button>
                    </div>
                </div>
            </div>
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Select meme template</h3>
                    </div>
                </div>
                <DisplayMeme memes={memes} />
            </div>
        </main>
    )
}

export default Homescreen
