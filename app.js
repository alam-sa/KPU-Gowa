const cors = require('cors');
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/pdf/:file', function(req, res) {
  res.sendFile(__dirname + `/public/berkas/${req.params.file}`);
})
app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => console.log(`service running at port ${port}`));
