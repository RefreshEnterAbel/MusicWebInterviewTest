import Artist from '../model/Artist.js'

export const getAllArtist = async (req, res) => {
  const artist = await Artist.find();
  res.status(200).json({
    status: 'success',
    data: artist,
  })
};

export const addNewArtist = async (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    country: req.body.country
  });
  const newArtist = await artist.save();
  res.status(201).json({
    status: 'success',
    data: newArtist,
  })
};

export const deleteArtist = async (req, res) => {
  const id = req.params.artistId;
  const result = await Artist.remove({ _id: id });
  res.status(201).json({
    status: 'success',
    data: {
      id: id
    },
  })
};

