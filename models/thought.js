const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  text: { type: String, required: true },
  reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reaction' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
