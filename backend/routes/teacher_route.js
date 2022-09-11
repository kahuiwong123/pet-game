const router = require('express').Router();
let Teacher = require('../models/teacher_model');

router.route('/').get((req, res) => {
  Teacher.find()
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password

  const newTeacher = new Teacher({ username: username, password: password });

  newTeacher.save()
    .then(() => res.json('Teacher added!'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route("/:id").get((req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => res.json(teacher))
    .catch(err => res.status(400).json("Error: " + err))
})

router.route("/:id").delete((req, res) => {
  Teacher.findByIdAndDelete(req.params.id)
    .then(() => res.json("Teacher deleted."))
    .catch(err => res.status(400).json("Error " + err))
})

router.route("/update/:id").post((req, res) => {
  Teacher.findById(req.params.id)
    .then(teacher => {
      teacher.username = req.body.username
      teacher.password = req.body.password

      teacher.save()
        .then(() => res.json("Teacher updated!"))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
})

module.exports = router;