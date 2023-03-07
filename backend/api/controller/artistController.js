const Artist = require("../model/Artist");

exports.getAllArtist = async (req, res) => {
  try {
    let artist = await Artist.find();
    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.addNewArtist = async (req, res) => {
  try {
    const artist = new Artist({
      name: req.body.name,
      country: req.body.country
    });
    console.log(artist)

    let newArtist = await artist.save();

    res.status(200).json({ data: newArtist });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteArtist = async (req, res) => {
  try {
    const id = req.params.artistId;
    let result = await Artist.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

