const { response } = require("express");
const FastSpeedtest = require("fast-speedtest-api");
exports.getIntenetSpeed = async (req, res) => {
  try{
    let speedtest = new FastSpeedtest({
      token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
      verbose: false, // default: false
      timeout: 10000, // default: 5000
      https: true, // default: true
      urlCount: 5, // default: 5
      bufferSize: 8, // default: 8
      unit: FastSpeedtest.UNITS.Mbps, // default: Bps
    });
    speedtest.getSpeed().then(s => {
      res.status(200).send({speed:Math.round(s)});
  }).catch(e => {
      res.status(400).send(ex.message);
  });
  }
  catch(ex){
    res.status(400).send(ex.message);
  }
   
};
