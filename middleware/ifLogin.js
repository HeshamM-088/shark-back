const jwt = require("jsonwebtoken");

const ifLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is required",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = ifLogin;

// const {jwtDecode} = require("jwt-decode");
// const responseToFront = require("../Helpers/response");

// const ifLogin = async (req , res , next) =>{

// try{

//     const token = req.headers.authorization?.split(" ")[1]
//     console.log(token)

//     const secret = process.env.SECRET_KEY
//     const {role} = jwtDecode( token , secret)

//     if(token){
//         next()
//     }else{
//         res.status(201).json(responseToFront(201,'un auth',null))
//     }

// }catch(e){
//     res.status(402).json({
//             status_code:402,
//             message: e.message,
//             data:null
//         })
// }

// };

// module.exports = ifLogin ;
