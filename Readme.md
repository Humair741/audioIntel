# 🎧 AudioIntel – AI-Powered Audio Summarizer

**AudioIntel** is an upcoming AI tool that helps users summarize long-form audio content (like podcasts, interviews, or lectures) into concise, structured summaries. This project will transcribe uploaded audio files, identify key topics, and generate timestamps and digestible summaries using AI.

## Technologies & Packages Used So Far

| Package       | Purpose                                                                 | Alternatives |
|---------------|-------------------------------------------------------------------------|--------------|
| **express**   | Lightweight server framework to build the API routes                    | Fastify, Koa |
| **cors**      | Enables cross-origin requests (important for frontend integration)      | N/A          |
| **dotenv**    | Loads environment variables from `.env` file                            | Built-in in some frameworks |
| **multer**    | Middleware for handling file uploads (`multipart/form-data`)            | Busboy, Formidable |
| **path** (core) | Helps handle and normalize file system paths in different OS          | N/A (built-in) |


## Features Completed So Far

### 1. Git Setup with Clean Structure
- One root `.git` repository (no nested Git folders)
- `.gitignore` configured for:
  - Node modules
  - `.env` files
  - Uploads
  - Frontend build cache

### 2. Backend Initialization
- Created `server/` folder with Express.js base
- Environment config using `.env`
- Created folder structure with `controllers`, `routes`, `utils`, and `uploads`

## 3. Audio Upload Route (/api/upload)
### Set up using Multer, configured with:
- diskStorage for saving files into uploads/
- Filename uniqueness via timestamp
- File type filtering for .mp3, .wav, .m4a
- Successfully tested audio upload via Postman and Thunder Client

### Return Response:
- json
- Copy
- Edit
{
  "filename": "harvard.wav",
  "path": "uploads/harvard.wav"
}

## 4. Local Transcription using faster-whisper (Python)
Wanted a fully free, local AI stack, so instead of paying for Whisper API, integrated OpenAI’s Whisper model via faster-whisper.

### Steps taken:
- Installed faster-whisper via pip
- Installed and configured ffmpeg for audio decoding
- Created a Python script: python/transcribe.py that:
- Loads Whisper model (base size)
- Accepts a file path as an argument

### Outputs the full transcript via stdout

## Challenges Faced:
Problem	How I Solved It
ffmpeg not found	Installed it manually and added to system PATH
ModuleNotFoundError: faster_whisper	Used pip install faster-whisper, verified Python path
ENOENT on file path	Changed Multer config to save relative to uploads/ not server/uploads/, avoiding server/server/... issues
Python couldn't find file	Carefully tested command-line paths and restructured how we call it

## 5. Node + Python Integration
### I created whisperService.js inside /server/services/ to:
- Call the Python script using Node’s child_process.exec
- Pass in audio path as CLI arg
- Capture stdout from Python and return as a JSON API response

## 6. Transcription API Route (/api/transcribe)
- POST /api/transcribe
- Accepts JSON body with path key

### Calls transcribeAudio() and returns:
{
  "transcript": "The stale smell of old beer lingers..."
}

### Testing Flow
- Upload File
- POST to /api/upload (form-data key: audio)
- Copy the path
- e.g., uploads/1753394126745.wav
- Transcribe File

### POST to /api/transcribe with raw JSON:
{ "path": "uploads/1753394126745.wav" }

### What’s Working Now
- Clean Express backend
- Fully functional file upload
- Whisper model working locally (no API usage)
- Node ↔ Python communication
- Accurate transcript output
- Good debug logs for both layers
- Project runs 100% free and offline