const mongoose = require("mongoose");
// const crypto = require('crypto');
import { AES } from 'crypto-js';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    resetPasswordToken: {
      type: String,
      required: false
  },
  resetPasswordExpires: {
    type: Date,
    required: false
  }
  },
  { timestamps: true }
);

userSchema.methods.generatePasswordReset = function() {
  this.resetPasswordExpires = Date.now() + 120000;
};

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
