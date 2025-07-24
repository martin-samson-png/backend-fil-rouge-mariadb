import jwt from "jsonwebtoken";

const authentification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).json({ message: "Accès refusé" });
  }
  try {
    const decrypted = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decrypted._id;
    next();
  } catch (err) {
    console.error("Accès refusé", err.message);
    res.status(401).json({ message: "Accès refusé" });
  }
};

export default authentification;
