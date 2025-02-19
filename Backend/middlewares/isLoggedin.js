const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

// const 
const isUserLoggedIn = async (req, res, next) => {
    try {
  
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(401).json({ error: "Unauthorize - no token provided or you need to login" });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      if (!decoded) {
        return res.status(401).json({ error: "Unauthorize - invalid token " });
      }

      // console.log(req.user,"from protect")
      next();
  
  
    } catch (error) {
      console.log("Error in protectRoute controller", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports=isUserLoggedIn