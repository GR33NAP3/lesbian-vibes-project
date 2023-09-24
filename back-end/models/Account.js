const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const profileSchema = new mongoose.Schema({
  userId: {
    type: Number,
    allowNull: false,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    allowNull: false,
  },
  lastName: {
    type: String,
  },
  birthday: {
    type: Number,
    allowNull: false,
  },
  email: {
    type: String,
    allowNull: false,
    unique: true,
  },
});
profileSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

profileSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return callback(error);
    } else {
      callback(null, isMatch);
    }
  });
};
module.exports = mongoose.model("Account", profileSchema);
