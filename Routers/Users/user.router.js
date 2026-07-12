const express = require("express");
const router = express.Router();
const getAllUSers = require("../../controller/Users/Get_all_users");
const check_role = require("../../middleware/check_role");

router.use("/" , ( req, res, next )=>{
    next();
});

router.get( "/" , check_role ,getAllUSers  );
router.post( "/" , getAllUSers  );
router.get( "/id" , getAllUSers  );

module.exports = router;