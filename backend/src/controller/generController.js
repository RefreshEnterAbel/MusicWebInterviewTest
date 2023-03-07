import Gener from "../model/Gener.js"

export const getAllGeners = async (req, res) => {
  const gener = await Gener.find();
  res.status(200).json({
    status: 'success',
    data: gener,
  })
};

export const addNewGener = async (req, res) => {
  const gener = new Gener({
    name: req.body.title
  });
  const newGener = await gener.save();
  res.status(201).json({
    status: 'success',
    data: newGener,
  })
};

export const deleteGener = async (req, res) => {
  const id = req.params.generId;
  const result = await Gener.remove({ _id: id });
  res.status(201).json({
    status: 'success',
    data: {
      id: id
    },
  })
};

