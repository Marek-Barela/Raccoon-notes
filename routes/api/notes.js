const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require("../../middleware/auth");

const Note = require("../../models/Notes");

// @route     POST api/notes
// @desc      Create note
// @access    Private
router.post("/", [ 
  auth, 
  [
    check("title", "Title of the note is required")
      .not()
      .isEmpty()
  ]
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newNote = new Note ({
      title: req.body.title,
      text: req.body.text,
      user: req.user.id
    });

    const note = await newNote.save();

    res.json(note)
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route     GET api/notes/:id
// @desc      Get notes by user ID
// @access    Private
router.get("/:id", auth, async (req, res) => {
  try {
    if(req.user.id !== req.params.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    const notes = await Note.find({
      user: req.params.id
    })
    .sort({ date: -1 });

    res.json(notes);
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Note not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     PUT api/notes/:id
// @desc      Edit note
// @access    Private
router.put("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if(note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!note) {
      return res.status(404).json({ msg: "Note not found" })
    }

    note.title = req.body.title;
    note.text = req.body.text;

    await note.save()

    res.json({ msg: "note updated" });
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Note not found" })
    }
    res.status(500).send("Server error");
  }
})

// @route     DELETE api/notes/:id
// @desc      Delete note by id
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id);

    if(note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized"});
    }

    if(!note) {
      return res.status(404).json({ msg: "Note not found" })
    }

    await note.remove();

    res.json({ msg: "note deleted"});
  }
  catch (err) {
    console.error(err.message);
    if(err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Note not found" })
    }
    res.status(500).send("Server error");
  }
})

module.exports = router;