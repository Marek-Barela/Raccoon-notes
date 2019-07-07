const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String
  }
})

module.exports = Note = mongoose.model("Notes", NoteSchema);