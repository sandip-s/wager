module.exports = {
	charlie: {
		fullName: "Charlie Furrer",
		friends: [module.exports.sandip, module.exports.zhiwei],
		wagers: ["(Charlie) completed (Sandip)'s wager to cook family dinner by November 24th.",
				 "(Charlie) completed (Zhiwei)'s wager to go a day without checking Instagram by November 24th.",
				 "(Charlie) completed (Zhiwei)'s wager to get lunch with a professor by November 21st."]
	},

	adam: {
		fullName: "Adam Mosharrafa", 
		friends: [module.exports.sandip, module.exports.zhiwei],
		wagers: ["(Adam) completed (Zhiwei)'s wager to do laundry by November 23rd.",
				 "(Adam) completed (Sandip)'s wager to run 3 miles by November 22nd.",
				 "(Adam) failed (Sandip)'s wager to call brothers and parents by November 22nd."]
	},

	sandip: {
		fullName: "Sandip Srinivas", 
		friends: [module.exports.adam, module.exports.zhiwei, module.exports.charlie],
		wagers: ["(Sandip) failed (Adam)'s wager to finish history paper draft by November 18th.",
				 "(Sandip) completed (Charlie)'s wager to go to the gym by November 17th.",
				 "(Sandip) failed (Zhiwei)'s wager to swim laps by November 16th."]
	},

	zhiwei: {
		fullName: "Zhiwei Gu", 
		friends: [module.exports.adam, module.exports.sandip, module.exports.charlie], 
		wagers: ["(Zhiwei) failed (Sandip)'s wager to try new juice cleanse by November 25th.",
				 "(Zhiwei) completed (Charlie)'s wager to run a half marathon by November 15th.",
				 "(Zhiwei) completed (Adam)'s wager to read a new book by November 14th."]
	}
}

