const express = require("express");
const router = express.Router();
const controller = require("./controller");
    
router.get("/api/speed-test", controller.getIntenetSpeed );
module.exports = router;
