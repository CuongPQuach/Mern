const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    jokesetup: String,
    jokepunchline: String,
})

const Joke = mongoose.model('Joke',JokeSchema);

module.exports = Joke;