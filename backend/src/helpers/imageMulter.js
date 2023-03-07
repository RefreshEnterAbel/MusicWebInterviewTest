import multer from "multer";
// album posture image
const postureStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads/image');
  },

  filename: (req, file, cb) => {
    let datetimestamp = Date.now();
    cb(null, datetimestamp + '_' + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
export const upload = multer({
  storage: postureStorage,
  limits: {
    fileSize: 1024 * 1024 * 1
  },
  fileFilter: fileFilter
}).single("imagePosture");
