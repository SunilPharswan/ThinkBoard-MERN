import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Notes Fetched");
});

router.post("/", (req, res) => {
    res.status(201).json({message:"Notes Posted"});
});

router.put("/:id", (req, res) => {
    res.status(201).json({message:"Notes Updated"});
});

router.delete("/:id", (req, res) => {
    res.status(201).json({message:"Notes Delete Successfully"});
});

export default router;