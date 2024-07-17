exports.createPostValidator = (req, res, next) => {
  req.check("title", "Title is required").notEmpty();
  req.check("content", "Content is required").isLength({ min: 2 });

  // Check for errors
  const errors = req.validationErrors();

  if (errors) {
    const errorMessage = errors.map((error) => error.msg);
    return res.status(400).json({ errors: errorMessage });
  }

  // If no errors, proceed to next middleware
  next();
};
