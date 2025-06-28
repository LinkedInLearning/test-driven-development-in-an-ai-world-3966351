
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

// Middleware to handle CORS
app.use(cors()); // This allows *any* origin.

// handle file uploads
router.post('/upload', (req, res) => {
  const file = req.body.file;
  fs.writeFileSync(`/uploads/${file.name}`, file.content);
});


// serve static files
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

 
app.post('/credentialUpload', (req, res) => {
  const file = req.body.file;
  const allowedExtensions = ['.txt', '.pdf', '.png'];
  const ext = path.extname(file.name);

  if (!allowedExtensions.includes(ext)) {
    return res.status(400).json({ error: 'Unsupported file type.' });
  }

  if (file.content.length > 1_000_000) {
    return res.status(400).json({ error: 'File too large.' });
  }

  const uploadPath = path.join(__dirname, 'uploads', path.basename(file.name));

  try {
    fs.writeFileSync(uploadPath, file.content);
    res.status(200).json({ message: 'File uploaded safely.' });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed.' });
  }
});
 

