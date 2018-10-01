'use strict';

import express from 'express';
const router = express.Router();
import authorize from '../auth/lib/oauth.js';

router.post(() => {

});

router.get('/oauth', (req, res, next) => {
  console.log(req.query);

  authorize(req)
    .then(token => {
      console.log('token: ', token);
      res.cookie('token', token);
      res.redirect(process.env.REDIRECT_CLIENT_URI);

    })
    
    .catch(error => error);

});

router.put(() => {

});

router.delete(() => {

});

export default router;