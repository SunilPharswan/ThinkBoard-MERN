import Note from "../models/Notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Error Fetching Notes" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;
    console.log(title);
    console.log(content);
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json({ message: "Notes Created Successfully" });
  } catch (error) {
    console.error("Error in createNotes Controller", error);
    res.status(500).json({ message: "Error Creating Notes" });
  }
}

export function updateNotes(req, res) {
  res.status(201).json({ message: "Notes Updated" });
}

export function deleteNotes(req, res) {
  res.status(201).json({ message: "Notes Deleted" });
}
