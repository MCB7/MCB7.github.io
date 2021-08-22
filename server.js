const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const port = 3001;

//config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connect to mongodb
mongoose.connect("mongodb+srv://admin:serum@cluster0.9v0ik.mongodb.net/elections")

//Candidate schema
const CandidateSchema = {
    city: String,
    type: String,
    active: String,
    name: String,
    bio: String,
    policy1: String,
    policy1detail: String,
    policy2: String,
    policy2detail: String,
    policy3: String,
    policy3detail: String,
    policy4: String,
    policy4detail: String,
    policy5: String,
    policy5detail: String,
    policy6: String,
    policy6detail: String,
    policy7: String,
    policy7detail: String,
    policy8: String,
    policy8detail: String,
    policy9: String,
    policy9detail: String,
    policy10: String,
    policy10detail: String,
    
}
//Candidate model
const Candidate = mongoose.model("Candidates", CandidateSchema, "candidates" );

//Search route 
app.get('/foundcandidate',(req, res) => {
    Candidate.find()
    .then(Candidate => res.json(Candidate))
    .catch(Candidate => res.status(400).json('Error: '+ err))
});



//read route
app.get('/candidates',(req, res) => {
    Candidate.find()
    .then(Candidate => res.json(Candidate))
    .catch(Candidate => res.status(400).json('Error: '+ err))
});

//create route
app.post('/newcandidate', (req,res) => {
    const newCandidate = new Candidate(
        {
            city: req.body.city,
            type: req.body.type,
            active: req.body.active,
            name: req.body. name,
            bio: req.body.bio,
            policy1: req.body.policy1,
            policy1detail: req.body.policy1detail,
            policy2: req.body.policy2,
            policy2detail: req.body.policy2detail,
            policy3: req.body.policy3,
            policy3detail: req.body. policy3detail,
            policy4: req.body.policy4,
            policy4detail: req.body.policy4detail,
            policy5: req.body.policy5,
            policy5detail: req.body.policy5detail,
            policy6: req.body.policy6,
            policy6detail: req.body.policy6detail,
            policy7: req.body.policy7,
            policy7detail: req.body.policy7detail,
            policy8: req.body. policy8,
            policy8detail: req.body.policy8detail,
            policy9: req.body.policy9,
            policy9detail: req.body.policy9detail,
            policy10: req.body.policy10,
            policy10detail: req.body.policy10detail
        }
    );

    newCandidate.save()
        .then(candidate => console.log(candidate))
        .catch(err => res.status(400).json("Error" + err));
});

//delete route 
app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Candidate.findByIdAndDelete({ _id: id}, (req, res, err) => {
        if (!err) {
            console.log("Candidate deleted");
        } else {
            console.log(err);
        }
        
    });
});

//update route
app.put("/put/:id", (req,res) => {
    const updatedCandidate = {
        city: req.body.city,
        type: req.body.type,
        active: req.body.active,
        name: req.body. name,
        bio: req.body.bio,
        policy1: req.body.policy1,
        policy1detail: req.body.policy1detail,
        policy2: req.body.policy2,
        policy2detail: req.body.policy2detail,
        policy3: req.body.policy3,
        policy3detail: req.body. policy3detail,
        policy4: req.body.policy4,
        policy4detail: req.body.policy4detail,
        policy5: req.body.policy5,
        policy5detail: req.body.policy5detail,
        policy6: req.body.policy6,
        policy6detail: req.body.policy6detail,
        policy7: req.body.policy7,
        policy7detail: req.body.policy7detail,
        policy8: req.body. policy8,
        policy8detail: req.body.policy8detail,
        policy9: req.body.policy9,
        policy9detail: req.body.policy9detail,
        policy10: req.body.policy10,
        policy10detail: req.body.policy10detail
    }
        

    Candidate.findByIdAndUpdate(
        { _id: req.params.id }, 
        {$set: updatedCandidate}, 
        (req, res, err) => {
              if(!err) {
                  console.log("Item updated");
              } else {
                  console.log(err);
              }

            } 
        );
    });



app.listen(port, function() {
    console.log("Express is running")
})