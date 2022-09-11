const router = require("express").Router()
let Class = require("../models/class_model")


router.route("/").get((req, res) => {
    Class.find()
        .then(c => res.json(c))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").get((req, res) => {
    Class.findById(req.params.id)
        .then(c => res.json(c))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const c = req.body.className
    const newClass = new Class({
        className: c
    })
    newClass.save()
        .then(() => res.json("Class added!"))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req, res) => {
    Class.findByIdAndDelete(req.params.id)
        .then(() => res.json("Class deleted."))
        .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router
