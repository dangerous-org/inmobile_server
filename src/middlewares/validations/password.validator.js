const ValidatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 8)
    return res
      .status(400)
      .json({ message: "password must to be at least 8 characters" });
  next();
};

export default ValidatePassword;
