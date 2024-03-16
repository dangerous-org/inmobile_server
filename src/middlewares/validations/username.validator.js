const ValidateUserName = (req, res, next) => {
  const { user } = req.body;
  if (user.length < 6)
    return res
      .status(400)
      .json({ message: "User must to be at least 6 characters" });

  if (user.length > 12)
    return res
      .status(400)
      .json({ message: "User must to be at most 12 characters" });

  next();
};

export default ValidateUserName;