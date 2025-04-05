import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });
    if(!user){
        return res.status(404).json("User not found");
    }

    res.status(200).json(user.savedPosts);
  } catch (error) {
    console.error("Error getting saved posts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const savePost = async (req, res) => {
  try {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if (!clerkUserId) {
      return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });
    if(!user){
        return res.status(404).json("user not found");
    }

    const isSaved = user.savedPosts.some((p) => p === postId);

    if (!isSaved) {
      await User.findByIdAndUpdate(user._id, {
        $push: { savedPosts: postId },
      });
    } else {
      await User.findByIdAndUpdate(user._id, {
        $pull: { savedPosts: postId },
      });
    }

    res.status(200).json(isSaved ? "Post unsaved" : "Post saved");
  } catch (error) {
    console.error("Error saving/unsaving post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};