'use strict';

import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const userSchema = Schema({
  username: { type: String, required: true, unique: true },
});

userSchema.statics.createFromOAuth = function (githubUser) {
  console.log('creating user from github user');
  if (!githubUser) {
    return Promise.reject('invalid github user');
  }

  console.log('im the githubUser:', githubUser);
  return this.findOne({ username: githubUser.login })
    .then(user => {
      if (!user) { throw new Error('User not found');}
      console.log('welcome back');
      return user;
    })
    .catch(err => {
      let username = githubUser.login;

      return this.create({
        username: username,
      });
    });
};

userSchema.methods.generateToken = function () {
  return jwt.sign({id:this._id}, process.env.SECRET);
};

export default mongoose.model('users', userSchema);