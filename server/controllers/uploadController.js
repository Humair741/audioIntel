const uploadAudio = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { originalname, filename, path } = req.file;

  res.json({
    message: 'Audio file uploaded successfully',
    file: {
      name: originalname,
      savedAs: filename,
      path,
    },
  });
};

module.exports = { uploadAudio };