express = require('express')
routers = express.Router()
controller = require('../controllers/notes')

routers.get('/notes', controller.getNotes)

routers.get('/notes/:id', controller.getNoteById)

routers.post('/notes', controller.addNote)

routers.put('/notes/:id', controller.editNote)

routers.delete('/notes/:id', controller.deleteNote)

module.exports = routers