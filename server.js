const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const next = require('next');

const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://vuongvu:123456@ds029715.mlab.com:29715/blog_react';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;
const HOST = process.env.BASE_URL || 'localhost';

app.prepare()
  .then(() => {
    // Connect to MongoDB
    mongoose.connect(MONGO_URL, {}, (err) => {
      // Error handle
      if (err) {
        console.log(`Unable to connect to the MongoDB server: ${err}`);
      } else {
        console.log(`Connection established to ${MONGO_URL}`);
      }
    });

    // Init express server
    const server = express();

    // Log request to the console.
    server.use(logger(dev ? 'dev' : 'common'));

    // Parsers for POST data
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    // Parser Cookie
    server.use(cookieParser('Next Blog'));

    server.use((req, res, next) => {
      req.db = mongoose;

      next();
    });

    // Catch all other routes
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;

      console.log(`> Ready on http://${HOST}:${PORT}`);
    });
  });
