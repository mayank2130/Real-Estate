import bycryptjs from "bcryptjs";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/userListing.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account!"));
  try {
    if (req.body.password) {
      req.body.password = bycryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) return next(errorHandler(401, "You can only delete your own account!"))
  try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token')
    res.status(200).json("User has been deleted!")
  } catch (error) {
    next(error)
  }
};


export const gerUserListings = async (req,res,next ) => {
  if(req.user.id === req.params.id) {
    try {
      const listings= await Listing.find({ userRef: req.params.id})
      res.status(200).json(listings)
    } catch (error) {
      next(error)
    }
  }else{
    return next(errorHandler(401, "You can only view your own listings!"))
  }
}