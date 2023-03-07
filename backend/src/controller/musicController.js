import Music from '../model/Music.js'

export const getAllMusics = async (req, res) => {
  const music = await Music.find();
  res.status(200).json({
    status: 'success',
    data: music,
  })
};

export const addNewMusic = async (req, res) => {
  const music = new Music({
    title: req.body.title,
    albumId: req.body.albumId,
    music: req.file
  });

  const newMusic = await music.save();
  res.status(201).json({
    status: 'success',
    data: newMusic,
  })
};

export const deleteMusic = async (req, res) => {
  const id = req.params.musicId;
  const result = await Music.remove({ _id: id });
  res.status(200).json({
    status: 'success',
    data: {
      id: id
    },
  })
};

