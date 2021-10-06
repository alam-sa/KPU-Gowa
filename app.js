const cors = require('cors');
const express = require('express');
// const router = require('./routes');
// const errorHandler = require('./middlewares/error-handler');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send(`
//   <div style="display: flex; justify-content: center; align-items: center; background-color: black; color: pink; height: 100vh; width: 100vw">
//     <h1><b> Welcome to Elefin 2.0 </b><h2><i> &ensp; You've successfully run this service for Supplier! </i></h2></h1>
//   </div>
// `));

// app.use(router);
// app.use(errorHandler);

app.listen(port, () => console.log(`service running at port ${port}`));