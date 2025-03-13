const User = require("../models/userModel");

// Create User (POST)
exports.createUser = async (req, res) => {
  try {
  
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get All Users (GET)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users)
      ({
        message: "No users found",
      });
    res.status(200).json({
      message: "Users retrieved successfully",
      users: users,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Single User (GET)
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
        message: "User retrieved successfully",
        user: user,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User (PUT)
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
        message: "User updated successfully",
        user: user,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete User (DELETE)
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


