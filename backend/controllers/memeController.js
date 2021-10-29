import asyncHandler from "express-async-handler";
import Meme from "../models/MemeModel.js";

// @desc    post meme
// @route   POST api/meme/
// @access  Public
const postMeme = asyncHandler(async (req, res) => {
    const {filename} = req.body;
        const memeCreated = await Meme.create({
            filename,
            user: req.user._id,
          });
    
        res.status(201).json(memeCreated);
  });

// @desc    Fatch all Memes
// @route   GET api/memes
// @access  Public
const getMemes = asyncHandler(async (req, res) => {
  const memes = await Meme.find({});
  res.json(memes);
});

// @desc    Delete Meme
// @route   GET api/memes/:id
// @access  private
const deleteMeme = asyncHandler(async (req, res) => {
  const meme = await Meme.findById(req.params.id);
  console.log(meme.user)
  console.log(req.user._id === meme.user)
  if(String(meme.user) === String(req.user._id)){
    const status = await Meme.remove({_id : meme._id})
    res.status(201).json("data deleted" + status);
  } else {
    res.status(401).json("unauthorized");
  }
});

export {postMeme, getMemes, deleteMeme}