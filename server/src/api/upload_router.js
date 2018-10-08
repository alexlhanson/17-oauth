'use strict';

import express from 'express';
const uploadRouter = express.Router();

import multer from 'multer';
const upload = multer({dest: `${__dirname}/../../tmp`});

import auth from '../auth/lib/middleware.js';

uploadRouter.post('/upload', auth, upload.any(), (req, res, next) => {
  if (!req.files.length) next('error uploading file');

  let file = req.files[0];
  let key = `${file.filename}.${file.originalname}`;

  
});

export default uploadRouter;