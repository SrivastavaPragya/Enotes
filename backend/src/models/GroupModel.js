const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true }, // Store color as a hex string
  initials: {
    type: String,
    required: true,
    uppercase: true, // Ensure initials are stored in uppercase
    validate: {
      validator: function(v) {
        return /^[A-Z]+$/.test(v); // Ensures the initials contain only uppercase letters
      },
      message: props => `${props.value} is not a valid initial! Initials must be uppercase.`
    }
  }
});

// Setter to transform input to uppercase
groupSchema.path('initials').set(value => value.toUpperCase());

const Group = mongoose.model('Group', groupSchema);

module.exports = { Group };