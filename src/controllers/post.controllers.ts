import { Request, Response } from 'express'
import { Post } from '../entity/Post';

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find();

        return res.send(posts);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const createPost = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;

        const post = new Post();

        post.name = name;
        post.description = description;

        await post.save();

        return res.json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const postId = parseInt(req.params.id);

        const post = await Post.findOneBy({ id: postId });

        if (!post) return res.status(404).json({message: 'Post not found'});

        const result = await Post.delete({id: postId});

        res.json(post);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}