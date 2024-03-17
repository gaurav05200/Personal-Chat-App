import User from "../models/user.model.js";
export const getUserForSideBar = async (req, res) => {
  try {
    const loggedIn = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedIn } }).select(
      "-password"
    );

    res.status(200).send(allUsers);
  } catch (error) {
    console.log("Error in user controller", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
