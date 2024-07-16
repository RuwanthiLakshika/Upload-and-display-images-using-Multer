const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const UserModel = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const mongoURI= 
    "mongodb+srv://runthilakshika:P1DWvGaQ1C5CKHjW@cluster0.jultbjy.mongodb.net/";

mongoose.connect(mongoURI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Failed to connect to MongoDB:", err));

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
    UserModel.create({ image: req.file.filename })
    .then(result => res.json(result))
    .catch((err) => res,json(err));
    });


app.get('/getImage', (req, res) => {
    UserModel.find()
    .then(result => res.json(result))
    .catch((err) => res.json(err));
    });

app.listen(3000, () => {
    console.log('Server started');
    });