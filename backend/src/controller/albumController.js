import Album from "../model/Album.js";

// get all album
export const getAllAlbum = async (req, res) => {
  const album = await Album.find();
  res.status(200).json({
    status: 'success',
    data: album,
  })
};

// add new album
export const addNewAlbum = async (req, res) => {
  const album = new Album({
    title: req.body.title,
    generId: req.body.generId,
    artistId: req.body.artistId,
    date: req.body.date,
    postureImage: req.file
  });

  const newAlbum = await album.save();
  res.status(201).json({
    status: 'success',
    data: newAlbum,
  })
};

// delete album
export const deleteAlbum = async (req, res) => {
  const id = req.params.albumId;
  const result = await Album.remove({ _id: id });
  res.status(201).json({
    status: 'success',
    data: {
      id: id
    },
  })
};

