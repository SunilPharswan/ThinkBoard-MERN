export function getAllNotes(req, res){
    res.status(200).send("Notes Fetched");
}

export function createNotes(req, res){
    res.status(201).json({message:"Notes Posted"});
}

export function updateNotes(req, res){
    res.status(201).json({message:"Notes Updated"});
}

export function deleteNotes(req, res){
    res.status(201).json({message:"Notes Deleted"});
}