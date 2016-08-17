var models  = require('../../models');
var moment = require("moment");

var chartColors = [
	"#a6cee3",
	"#1f78b4",
	"#b2df8a",
	"#33a02c",
	"#fb9a99",
	"#e31a1c",
	"#fdbf6f",
	"#ff7f00",
	"#cab2d6",
	"#6a3d9a",
	"#ffff99",
	"#b15928"
];
	
var generatePieChart = function(data, callback) {
	var chartData = [];
	var index = 0;
	for(var label in data)
	{
		var value = data[label];

		chartData.push({value: value, color: chartColors[index], label:label});
		index++;

	}
	
	var Canvas = require('canvas')
	  , canvas = new Canvas(800, 800)
	  , ctx = canvas.getContext('2d')
	  , Chart = require('nchart')
	  , fs = require('fs');
	
	new Chart(ctx).Pie(
		    chartData
		);
	callback(canvas.toBuffer().toString('base64'));
};

exports.getNumbers = function(callback){

	var contractHelper = [];

	var numbers = {
			total : {
				amount : 0,
				amountRunning : 0,
				amountCancelled : 0,
				avgAmount : 0,
				medianAmount: 0,

				count : 0,
				countRunning : 0,
				countCancelled : 0,

				interestToDate : 0,
				interestPaid : 0,
				avgInterestRate : 0,
				medianInterestRate : 0,
				
				avgPeriod : 0,
				medianPeriod : 0
			},
			lastMonth : {
				amountNew : 0,
				amountCancelled : 0,
				countNew : 0,
				countCancelled : 0

			},
			lastYear : {
				amountNew : 0,
				amountCancelled : 0,
				countNew : 0,
				countCancelled : 0
			},
			byRelationship: {},
			charts:{}


	};


	var lastMonth = moment().subtract(1, "months");
	var lastYear = moment().subtract(1,"year");
	var now = moment();

	models.user.findAll({
		  where: ['administrator <> 1'],
		  include:{
				model: models.contract,
				as: 'contracts',
				include : {
					model: models.transaction,
					as: 'transactions'
				}
			}
		}).then(function(users){

			users.forEach(function(user){

				user.contracts.forEach(function (contract) {

					var deposits = 0,
						withdrawals = 0,
						interest = 0;

					contract.transactions.forEach(function (transaction) {

						// general statistics
						if (transaction.amount > 0) {
							deposits += transaction.amount;
							interest += transaction.interestToDate(now);
						} else {
							withdrawals += transaction.amount;
						}

						// last month statistics
						if (moment(transaction.transaction_date).diff(lastMonth) > 0) {
							if (transaction.amount > 0) {
								numbers.lastMonth.amountNew += transaction.amount;
								numbers.lastMonth.countNew ++;
							} else {
								numbers.lastMonth.amountCancelled += transaction.amount;
								numbers.lastMonth.countCancelled ++;
							}
						}

						// last year statistics
						if (moment(transaction.transaction_date).diff(lastYear) > 0) {
							if (transaction.amount > 0) {
								numbers.lastYear.amountNew += transaction.amount;
								numbers.lastYear.countNew ++;
							} else {
								numbers.lastYear.amountCancelled += transaction.amount;
								numbers.lastYear.countCancelled ++;
							}
						}

					});

					// general statistics
					numbers.total.amount += deposits;
					numbers.total.avgInterestRate += contract.amount * contract.interest_rate;
					numbers.total.count ++;
					numbers.total.avgPeriod += contract.period * contract.amount;
					if (contract.isTerminated(now)) {
						numbers.total.amountCancelled += deposits;
						numbers.total.countCancelled ++;
						numbers.total.interestPaid -= deposits + withdrawals;
						numbers.total.interestToDate -= deposits + withdrawals;
					} else {
						numbers.total.amountRunning += deposits;
						numbers.total.countRunning ++;
						numbers.total.interestToDate += interest;
					}
					
					if(numbers.byRelationship[user.relationhip]) {
						numbers.byRelationship[user.relationship] += contract.amount;
					} else {
						numbers.byRelationship[user.relationship] = contract.amount;
					}

					contractHelper.push ({
						interestRate : contract.interest_rate,
						amount : deposits,
						period : contract.period
						});

				});


			});

		numbers.total.avgInterestRate = numbers.total.avgInterestRate / numbers.total.amount;

		contractHelper.sort(function(a,b) {
			if (a.interestRate > b.interestRate)
				return 1;
			else if(b.interestRate > a.interestRate)
				return -1;
			else
				return 0;
		});

		numbers.total.medianInterestRate = contractHelper[Math.ceil(numbers.total.count/2)].interestRate;

		contractHelper.sort(function(a,b) {
			if (a.amount > b.amount)
				return 1;
			else if(b.amount > a.amount)
				return -1;
			else
				return 0;
		});

		numbers.total.medianAmount = contractHelper[Math.ceil(numbers.total.count/2)].amount;

		contractHelper.sort(function(a,b) {
			if (a.period > b.period)
				return 1;
			else if(b.period > a.period)
				return -1;
			else
				return 0;
		});

		numbers.total.medianPeriod = contractHelper[Math.ceil(numbers.total.count/2)].period;
		
		numbers.total.avgAmount = numbers.total.amount / numbers.total.count;
		numbers.total.avgPeriod = numbers.total.avgPeriod / numbers.total.amount;
		
/*		generatePieChart(numbers.byRelationship, function(chart) {
			numbers.charts.byRelationship = chart;
		});*/

		console.log("test2" + numbers.total.amount);
		callback(numbers);
	});

};
