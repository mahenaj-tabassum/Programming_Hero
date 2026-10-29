import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

// Get all users from MongoDB
export const FindAllUsersController = async (req, res) => {
  try {
    const database = getDB();
    const userCollection = database.collection("users");

    // Get all users
    const data = await userCollection.find().toArray();

    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Failed to fetch users:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

// Create an user
export const CreateUserController = async (req, res) => {
  try {
    const database = getDB();
    const userCollection = database.collection("users");

    const newUser = req.body;
    const data = await userCollection.insertOne(newUser);
    console.log(data);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        insertedId: data.insertedId,
      },
    });
  } catch (error) {
    console.error("Failed to create user:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

// Find User by ID
export const FindUserByIdController = async (req, res) => {
  try {
    const db = getDB();
    const userCollection = db.collection("users");

    const { id } = req.params;

    // Validate the ID before querying MongoDB
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    // Find the user using their MongoDB ObjectId
    const data = await userCollection.findOne({
      _id: new ObjectId(id),
    });

    // Check whether the user exists
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error("Error finding user:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Delete a user by ID
export const DeleteUserByIdController = async (req, res) => {
  try {
    const database = getDB();
    const userCollection = database.collection("users");

    const userId = req.params.id;

    // Validate the user ID before creating an ObjectId
    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    // Delete the user with the matching ID
    const result = await userCollection.deleteOne({
      _id: new ObjectId(userId),
    });

    // Check whether a user was actually deleted
    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Update User
export const UpdateUserController = async (req, res) => {
  try {
    const database = getDB();
    const userCollection = database.collection("users");
    const { id } = req.params;
    const data = req.body;

    // Validate the user ID before converting it to ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
      });
    }

    // Find the user by their MongoDB _id
    const filter = {
      _id: new ObjectId(id),
    };

    // Update an existing user; insert only if no matching user exists
    const options = { upsert: false };

    // Specify the fields to update
    const updateUserForm = {
      $set: {
        name: data.name,
        email: data.email,
        role: data.role,
      },
    };
    const result = await userCollection.updateOne(
      filter,
      updateUserForm,
      options,
    );

    // Check whether the user exists
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};
