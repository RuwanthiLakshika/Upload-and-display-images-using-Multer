const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const storage=multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null,'public/images')
    },
    filename: (req, file, cb) => {
    cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
    });

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'),(req, res) => {
  console.log(req.file);
    });

app.listen(3000, () => {
    console.log('Server started');
    });