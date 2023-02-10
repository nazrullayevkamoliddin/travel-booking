const postModel = require("../models/post");

const getAllPosts = async (req, res) => {
  try {
    const getAll = await postModel.find();
    res.status(200).json({
      success: true,
      message: "success",
      getAll: getAll.reverse()
    });
  } catch (error) {
    res.send(error);
  }
};

const getOnePost = async (req, res) => {
  try {
    const getOne = await postModel.findById(req.params.id);

    if (!getOne) {
    return  res.status(404).json({
        success: false,
        message: `the post not found`,
      });
    }
    res.status(200).json({
        success:true,
        message:"Post Topildi",
        getOne
    });
  } catch (error) {
    res.send(error);
    console.log(error)
  }
};

const createPost = async (req, res) => {
    try {
        const {title, text, image} = req.body
        const newPost = await postModel.create({
            title,
            text,
            image
        });
        res.status(201).json({
            success:true,
            message:'Successfuly add post',
            newPost
        });
    } catch (error) {
        res.send(error)
    }
};

const updatePost = async (req,res) => {
    try {
        const {title,image, text} = req.body;

        const update = await postModel.findByIdAndUpdate(req.params.id, {
            title, image, text
        })

        if(!update){
            res.status(400).json({
                success:false,
                message:"Post yangilanmadi"
            })
        }
        
        res.status(200).json({
            success:true,
            message:"Post yangilandi",
            update
        })

    } catch (error) {
        res.send(error)
        console.log(error)
    }
};

const deletePost = async(req,res) => {
    try {
        const remove = await postModel.findByIdAndRemove(req.params.id);
        if(!remove){
            res.status(400).json({
                sucess:false,
                message:"Bunday post topilmadi"
            });
        };
        
        res.status(202).json({
            sucess:true,
            message:'Post ochirildi'
        });

    } catch (error) {
        res.send(error)
        console.log(error)
    }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
};
