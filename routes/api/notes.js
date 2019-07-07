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
})

module.exports = router;