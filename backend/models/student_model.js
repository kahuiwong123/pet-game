const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Class = require("./class_model")
const Test = require("./test_model")
const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    nickname: {
        type: String,
        default: ""
    },

    classes: [{
        type: Schema.Types.ObjectId,
        ref: Class
    }],

    tests: [{
        type: Schema.Types.ObjectId,
        ref: Test
    }]
})

const Student = mongoose.model("Student", studentSchema)
module.exports = Student
