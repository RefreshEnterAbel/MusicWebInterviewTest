const Gener = require("../model/Gener");

exports.getAllGeners = async (req, res) => {
  try {
    let gener = await Gener.find();
    res.status(200).json(gener);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewGener = async (req, res) => {
  try {
    const gener = new Gener({
      name:req.body.title
    });
     console.log(gener)
    let newGener = await gener.save();
   
    res.status(200).json({ data: newGener });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteGener = async (req, res) => {
  try {
    const id = req.params.generId;
    let result = await Gener.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

