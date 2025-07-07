import express from 'express';
import {
  getPosts, getPostById, createPost, updatePost, deletePost
} from '../controllers/postController.js';
import validate from '../middleware/validatePost.js';

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(validate, createPost);

router.route('/:id')
  .get(getPostById)
  .put(validate, updatePost)
  .delete(deletePost);

export default router;
