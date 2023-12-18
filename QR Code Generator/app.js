import express from 'express';
import qr from 'qrcode';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/generate', (req, res) => {
  const url = req.body.url;

  if (url) {
    qr.toDataURL(url, (err, qrImage) => {
      if (err) {
        res.send('Error generating QR code');
      } else {
        res.send(`<img src="${qrImage}" alt="QR Code">`);
      }
    });
  } else {
    res.send('Please provide a valid URL');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
