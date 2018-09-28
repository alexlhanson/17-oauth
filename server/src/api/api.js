'use strict';

import express from 'express';
const router = express.Router();

router.post(() => {

});

router.get('/oauth', (req, res, next) => {
  console.log(req.query);

  oauth.authorize(req)
    .then()
    
    .catch();

});

router.put(() => {

});

router.delete(() => {

});

export default router;