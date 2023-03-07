const Album = require("../model/Album");

// get all album
exports.getAllAlbum = async (req, res) => {
  try {
    let album = await Album.find();
    res.status(200).json(album);
  } catch (err) {
    res.status(500).json(err);
  }
};

// add new album
exports.addNewAlbum = async (req, res) => {
  try {
    const album = new Album({
      title: req.body.title,
      generId: req.body.generId,
      artistId: req.body.artistId,
      date: req.body.date,
      postureImage: req.file
    });
    console.log(album)

    let newAlbum = await album.save();

    res.status(200).json({ data: newAlbum });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

// delete album
exports.deleteAlbum = async (req, res) => {
  try {
    const id = req.params.albumId;
    let result = await Album.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

