const errorHandler = (err, req, res, next) => {
  console.log("Error occurred:", err.message);
  switch (err.message) {
    case "ArgumentRequired":
      return res.status(400).json({ message: "Missing Data required " });
    case "DatabaseException":
      return res.status(500).json({ message: "A database error occurred" });
    case "DataAlreadyExist":
      return res.status(409).json({ message: "Data already exists" });
    case "DataNotFound":
      return res.status(404).json({ message: "Data not found" });
    default:
      return res.status(500).json({ message: "An unexpected error occurred" });
  }
};
export default errorHandler;
