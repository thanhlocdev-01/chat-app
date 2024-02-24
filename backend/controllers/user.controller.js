const User = require("../models/user.model");

const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUserSidebar: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getUserForSidebar;
