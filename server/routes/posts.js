import {createPost, getPosts, getPost, updatePost, deletePost} from '../controllers/post.js'
import protect from '../middlewares/protect.js'
import express from 'express'

const router = express.Router()

router.get('/', protect, getPosts)
router.post('/', protect, createPost)
router.get('/:id', protect, getPost)
router.patch('/:id', protect, updatePost)
router.delete('/:id', protect, deletePost)


export default router;