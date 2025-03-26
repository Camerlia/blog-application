import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();
export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  try {
    const posts = await Post.find()
      .limit(limit)
      .skip((page - 1) * 5);
    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;
    res.status(200).json({posts, hasMore});
  } catch (error) {
    console.error("Error getting posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).send(post);
  } catch (error) {
    console.error("Error getting post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth?.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    let existingPost = await Post.findOne({ slug });
    let counter = 2;
    while (existingPost) {
      slug = `${slug}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...req.body });
    const post = await newPost.save();

    res.status(201).json(post); // 201 for successful creation
  } catch (error) {
    console.error("Error creating post:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth?.userId;

  if (!clerkUserId) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const user = await User.findOne({ clerkUserId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const post = await Post.findOneAndDelete({
      _id: req.params.id,
      user: user._id,
    });

    if (!post) {
      return res.status(403).json("You can delete only your posts!");
    }

    res.status(200).json("Post has been deleted");
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});
export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
