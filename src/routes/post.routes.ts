import { Router } from 'express';
import * as postCtrl from '../controllers/post.controllers';

const router = Router();

router.get('/posts', postCtrl.getPosts);
router.post('/posts', postCtrl.createPost);
router.delete('/posts/:id', postCtrl.deletePost);

export default router;