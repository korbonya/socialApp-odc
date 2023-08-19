import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String,
    userId: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

export default Post;