const JokeController = require ('../controllers/joke.controller')


module.exports = app => {
    app.get('/api/alljokes', JokeController.allJokes)
    app.get('/api/oneJoke/:id', JokeController.oneJoke)
    app.post('/api/postjoke', JokeController.createJoke)
    app.put('/api/updatejoke/:id', JokeController.updateJoke)
    app.delete('/api/deletejoke/:id', JokeController.deleteJoke)
}