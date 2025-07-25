const express = require('express');
const router = express.Router();
const { transcribeAudio } = require('../services/whisperService');

router.post('/', async (req, res) => {
  try {
    const filePath = req.body.path;

    if (!filePath) {
      return res.status(400).json({ error: 'Audio path is required in request body' });
    }

    const transcript = await transcribeAudio(filePath);
    res.json({ transcript });
  } catch (err) {
    console.error('Transcription error:', err.message);
    res.status(500).json({ error: 'Failed to transcribe audio' });
  }
});

module.exports = router;