const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    enum: ['Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'Other'],
    required: true
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 100,
    default: 50
  },
  icon: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);

