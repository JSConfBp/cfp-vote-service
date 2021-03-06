module.exports = {
	title: "CFP Vote Service",
	cfp_fields: [
		"Presentation title",
		"Presentation summary (abstract) to be displayed on the website",
		"More details on your Presentation"
	],
	voting_stages: {
		'stage_1': {
			label: 'First Voting Round'
		},
		'stage_2': {
			label: 'Shortlisting Round',
			include_votes_top: 4
		}
	},
	voting_ui: {
		stage_1: [
			{ label: 'nope', 		value: 0 },
			{ label: 'seen better',	value: 2 },
			{ label: 'maybe', 		value: 4 },
			{ label: 'absolutely', 	value: 8 },
		],
		stage_2: [
			{ label: 'meh', value: 1 },
			{ label: 'yay', value: 2 },
			{ label: 'MUST', value: 3 }
		]
	}
}