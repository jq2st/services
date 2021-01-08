const Note = require('../models/Note')

module.exports.getNotes = async function(req, res) {
    try {
        notes = await Note.find()
        res.status(200).json(notes)
    }
    catch (e) {
        res.status(405).json(e)
    }
}

module.exports.getNoteById = async function(req, res) {
    try {
        console.log(req.params.id)
        note = await Note.findById(req.params.id)
        res.status(200).json(note)
    }
    catch (e) {
        res.status(405).json(e)
    }
}

module.exports.addNote = async function(req, res) {
    try {
        const note = await new Note({
            name: req.body.name,
            description: req.body.description
        }).save()
        res.status(201).json(note)
    }
    catch (e) {
        res.status(404).json(req.body)
    }
}

module.exports.editNote = async function(req, res) {
    try {
        const id = req.params.id
        const item = await Note.findOneAndUpdate(
            {_id: id},
            {$set: req.body},
            {new: true}
        )
        res.status(201).json(item)
    }
    catch (e) {
        res.status(404).json(req.body)
    }
}

module.exports.deleteNote = async function(req, res) {
    try {
        const id = req.params.id
        const item = await Note.remove({_id: id})
        res.status(200).json({
            mess: "Deleted"
        })
    }
    catch (e) {
        res.status(404).json(req.body)
    }
}