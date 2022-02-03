var express = require("express");
var router = express.Router();
var prdct = require("./Model/Product");

router.get("/product", async (req, res) => {
  const data = await prdct.find();
  res.send(data);
  console.log(data);
});
//update
router.post("/product", async (req,     res) => {
  const data = new prdct({
    name: req.body.name,
    price: req.body.price,
  });

  await data.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        "My-message": msg,
      });
    }
  });
});

//insertData
router.patch("/product/:id", async (req, res) => {
  const data = await prdct.findOne({ _id: req.params.id });
  data.name = req.body.name;
  data.price = req.body.price;

  await data.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        msg: msg,
      });
    }
  });
});

//deleteData
router.delete("/product/:id", async (request, response) => {
  const _id = request.params.id;
  const mydata = await prdct.findByIdAndDelete(_id);
  response.send(mydata);
});

module.exports = router;
