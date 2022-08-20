const router = require("express").Router();
const omise = require("omise")({
    'secretKey' : process.env.OMISE_KEY,
    'omiseVersion' : '2019-05-29'
});

router.post("/payment", (req, res) => {
  omise.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "THB",
    },
    (omiseErr, omiseRes) => {
      if (omiseErr) {
        res.status(500).json(omiseErr);
      } else {
        res.status(200).json(omiseRes);
      }
    }
  );
});

module.export = router;
