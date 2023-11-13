const express = require("express");
const router = express.Router();
const User = require("../Models/userSchema");
const bcrypt = require('bcrypt');
// Fetch all users from the database
router.get("/users", async (req, res) => {
  try {
    const { userName } = req.query;
    let userData;
    userData = await User.find().select("-__v");
    res.status(200).json({ data: userData });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

// Add a new user
router.post("/users", async (req, res) => {
  try {
    const {
      userName,
      email,
      password,
      confirmPassword,
      orders,
      cart,
      typeOfUser,
    } = req.body;

    if (!userName || !email || !password || !confirmPassword) {
      res.status(400).json({ message: "Please fill all the fields" });
    } else {
      const isAlreadyExists = await User.findOne({ email: email });

      if (isAlreadyExists) {
        res.status(403).json({ message: "User already exists" });
      } else {
        const newUser = new User({
          userName,
          email,
          password,
          confirmPassword,
          orders,
          cart,
          typeOfUser,
        });
        await newUser.save();
        res.status(201).json({ data: newUser, message: "User added successfully" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

// User login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    console.log(email)

    if (!user) {
      res.status(404).json({ message: "User not found or incorrect credentials" });
    } else if (user.password === password) {
      // Password is correct (assuming plain text password storage)
      res.status(200).json({ data: user, message: "User logged in successfully" });
    } else {
      // Password is incorrect
      res.status(404).json({ message: "User not found or incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

// Fetch individual user by ID or email
router.get("/users/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;
    let userData;

    if (identifier.match(/^[0-9a-fA-F]{24}$/)) {
      userData = await User.findById(identifier).select("-__v");
    } else {
      userData = await User.findOne({
        email: new RegExp(identifier, "i"),
      }).select("-__v");
    }

    if (!userData) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ data: userData });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

// Update user by ID
router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUserData = req.body;

    const updatedUser = await User.findByIdAndUpdate(id, updatedUserData, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ data: updatedUser, message: "User updated successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

// Delete user by ID
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ data: deletedUser, message: "User deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(error);
  }
});

module.exports = router;
