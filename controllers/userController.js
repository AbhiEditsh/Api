const User = require("../models/userModel");

// Create User (POST)
exports.createUser = async (req, res) => {
  try {
    const { firstname, lastname, fathername, mothername, dob, mob, email, address, gender, hobbies } = req.body;

    if (!firstname || !lastname || !fathername || !mothername || !dob || !mob || !email || !address || !gender || !hobbies) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const validGenders = ["Male", "Female", "Other"];
    if (!validGenders.includes(gender)) {
      return res.status(400).json({ message: "Invalid gender. Accepted values: Male, Female, Other" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const mobRegex = /^[0-9]{10}$/;
    if (!mobRegex.test(mob)) {
      return res.status(400).json({ message: "Invalid mobile number. It should be 10 digits" });
    }

    if (!Array.isArray(hobbies) || hobbies.length === 0) {
      return res.status(400).json({ message: "Hobbies should be an array with at least one hobby" });
    }

    const user = new User({
      firstname,
      lastname,
      fathername,
      mothername,
      dob,
      mob,
      email,
      address,
      gender,
      hobbies
    });

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
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
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
