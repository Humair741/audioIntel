const { exec } = require('child_process');
const path = require('path');

const transcribeAudio = (audioFilePath) => {
  return new Promise((resolve, reject) => {
    const pythonScriptPath = path.join(__dirname, '../python/transcribe.py');

    exec(`python "${pythonScriptPath}" "${audioFilePath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Python Error:', stderr);
        return reject(error);
      }

      const transcript = stdout.trim();
      resolve(transcript);
    });
  });
};

module.exports = { transcribeAudio };