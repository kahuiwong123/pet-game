const router = require("express").Router()
let Test = require("../models/test_model")

router.route("/").get((req, res) => {
    Test.find()
        .then(test => res.json(test))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/add").post((req, res) => {
    const name = req.body.name
    const subject = req.body.subject
    const newTest = new Test({
        name: name,
        subject: subject
    })
    newTest.save()
        .then(() => res.json("Test added!"))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Test.findById(req.params.id)
        .then(test => res.json(test))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req, res) => {
    Test.find()
        .then(test => res.json(test))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route("/:id").delete((req, res) => {
    Test.findByIdAndDelete(req.params.id)
        .then(() => res.json("Test deleted"))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route("/update/:id").post((req, res) => {
    Test.findById(req.params.id)
        .then(test => {
            test.name = req.body.name
            test.subject = req.body.subject
            test.questions = req.body.questions
            test.scores = req.body.scores
            test.save()
                .then(() => res.json("Test updated!"))
                .catch(err => res.status(400).json("Error: " + err))
        })

        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router