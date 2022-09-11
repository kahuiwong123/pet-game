const mongoose = require("mongoose")
const Schema = mongoose.Schema

const testSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},

		subject: {
			type: String,
			required: true
		},

		questions: {
			type: [
				{
					questionValue: String,

					choices: [{
						choiceValue: String,
						correct: Boolean
					}]
				}
			],
			default: []
		},

		scores: {
			type: [{
				scoreValue: Number,
				percentage: String,
				time: Number,
				date: Date
			}],

			default: []
		}
	},
)

const Test = mongoose.model("Test", testSchema)
module.exports = Test
