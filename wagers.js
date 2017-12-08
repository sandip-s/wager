module.exports = [
	{
		sender: {
			fullName: "Charlie Furrer",
			goal: "run 5 miles",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Charlie.png'),
		},
		receiver: {
			fullName: "Adam Mosharrafa",
			goal: "run 10 miles",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Adam.png')
		},
		deadline: "12-16-2017",
		status: "Active",
		direction: "Received"
	},
	{
		sender: {
			fullName: "Sandip Srinivas",
			goal: "run 5 miles",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Sandip.png'),
		},
		receiver: {
			fullName: "Adam Mosharrafa",
			goal: "run 10 miles",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Adam.png'),
		},
		deadline: "12-18-2018",
		status: "Pending",
		direction: "Received"
	},
	{
		sender: {
			fullName: "Adam Mosharrafa",
			goal: "eat twenty breadsticks at Olive Garden",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Adam.png'),
		},
		receiver: {
			fullName: "Zhiwei Gu",
			goal: "eat four bowls of salad at Olive Garden",
			reward: "free dinner",
			penalty: "pay for dinner",
			image: require('./Images/Zhiwei.png')
		},
		deadline: "02-16-2018",
		status: "Active",
		direction: "Sent"
	},
	{
		sender: {
			fullName: "Adam Mosharrafa",
			goal: "eat breakfast every day this week",
			reward: "one pat on the back",
			penalty: "do my dishes",
			image: require('./Images/Adam.png'),
		},
		receiver: {
			fullName: "Sandip Srinvas",
			goal: "do twenty pushups every night this week",
			reward: "free dinner",
			penalty: "streak the quad",
			image: require('./Images/Sandip.png')
		},
		deadline: "10-20-2018",
		status: "Pending",
		direction: "Sent"
	},
	{
		sender: {
			fullName: "Adam Mosharrafa",
			goal: "finish the hi-fi by thursday",
			reward: "a healthy amount of sleep",
			penalty: "stay up all night working on the hi-fi",
			image: require('./Images/Adam.png'),
		},
		receiver: {
			fullName: "Charlie Furrer",
			goal: "fill out the hi-fi database on the plane-ride to Philadelphia",
			reward: "twenty dollars",
			penalty: "do the PendingScreen as well",
			image: require('./Images/Charlie.png')
		},
		deadline: "12-19-2018",
		status: "Pending",
		direction: "Sent"
	}

]
