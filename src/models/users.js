var mongoose = require("mongoose");

const User = mongoose.model("User", {
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: number,
    validate(value) {
      if (value.length != 10)
        throw new Error("Please enter a valid phone number");
    },
  },
});
module.exports = User;
