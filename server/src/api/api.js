'use strict';

import express from 'express';
const router = express.Router();
import authorize from '../auth/lib/oauth.js';
import User from '../auth/model.js';

router.post('/register', (req, res, next) => {
  console.log('Im posting');
  let user = new User(req.body);
  user.save()
    .then(user => res.send(user.generateToken()))
    .catch(next);
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

router.all('*', (req, res, next) => {
  res.status(404).send('Bad request').end();
});

export default router;