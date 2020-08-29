const mongoose = require('mongoose');
const SkillSchema = require('./Skill').schema;

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: {
    type: Number,
    required: true,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    alias: 'i',
  },
  grade: {
    type: Number,
    required: true,
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
    alias: 'i',
  },
  biography: {
    type: String,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  register_date: { type: Date, default: Date.now },
  rating: { type: Number, default: null },
  skills: [SkillSchema],
  courses: [String],
  needSkills: [String],
});

module.exports = mongoose.model('Users', UserSchema);