const { response, request } = require('express')
const Joke = require ('../models/joke')

module.exports = {
    allJokes: (request,response) => {
        Joke.find({})
            .then((allJokes) => {
                response.json(allJokes)
            })
            .catch((err) => {
                response.status(500).json({message: 'XXXX Error All Joke XXXX', error:err})
            })
    },
    oneJoke: (request,response) => {
        console.log()
        Joke.find({_id:request.params.id})
            .then((oneJoke) =>{
                response.json(oneJoke)
            })
            .catch((err) => {
                response.status(500).json({message:'XXXX Error Single Joke XXXXX', error:err})
            })
    },

    createJoke:(request,response) => {
        console.log('XXXXReqXXXXX',request)
        console.log('XXXXBodyXXXXX',request.body)
        Joke.create(request.body)
            .then((newJoke) =>{
                response.json(newJoke)
            })
            .catch((err) =>{
                response.status(500).json({message:'XXXX Error Joke Create  XXXX', error:err})
            })
    },
    updateJoke:(request,response) =>{
        console.log('XXXXXParamsXXXXX',request.params)
        console.log('XXXXXXBodyXXXXXX',request.body)
        Joke.findOneAndUpdate( { _id: request.params.id } ,request.body, { new: true, runValidators: true} )
            .then(updatedJoke =>{
                response.json({joke: updatedJoke})
            })
            .catch((err) => {
                response.status(500).json({message:'XXXX Error Joke Updated XXXX', error:err})
            });
    },
    deleteJoke:(request,response) =>{
        console.log('XXXXXparamsxxxxxxx',request.params)
        console.log('XXXXXparams with ID xxxxxxx',request.params.id)
        Joke.deleteOne({ _id: request.params.id})
            .then((result) => {
                response.status(200).json({result:result})
            })
            .catch((err) => {
                console.log('xxxx Error XXXX',err)
                response.status(500).json({message:'XXXX Error Joke Delete XXXX', error:err})
            });
    },
}