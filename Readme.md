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