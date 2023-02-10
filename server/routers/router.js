const {Router} = require('express');
const postRouter = Router();
const {getAllPosts, getOnePost, createPost, updatePost, deletePost} = require('../controllers/postController');

// get all posts

postRouter.get('/', getAllPosts);
postRouter.get('/post/:id', getOnePost);
postRouter.post('/add', createPost);
postRouter.put('/post/:id', updatePost);
postRouter.delete('/remove/:id', deletePost);

module.exports = postRouter;