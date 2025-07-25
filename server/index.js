
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const uploadRoutes = require('./routes/uploadRoutes'); // remove .js extension
const transcribeRoutes = require('./routes/transcribeRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', uploadRoutes);
app.use('/api/transcribe', transcribeRoutes);

app.get('/', (req, res) => res.send('🎙 AudioIntel backend is alive'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
