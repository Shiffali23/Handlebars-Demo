	var income;
	var totalIncome,lastBalance;
	$(document).on('click', '.add-income', function(){
		income =true;
	    totalIncome  = document.getElementsByName('totalIncome')[0].value;
		var source = document.getElementById('basic-template').innerHTML;
		template = Handlebars.compile(source);
		var newHtml = template({totalIncome:totalIncome,income:income});
		document.getElementById('add-income').innerHTML = newHtml;
	})
	$(document).on('click', '.add-data', function(){
		income =false;
	    var description  = document.getElementsByName('description')[0].value;
	    var amount  = document.getElementsByName('amount')[0].value;
		var source = document.getElementById('expenses-template').innerHTML;
		template = Handlebars.compile(source);
		
		// clear input fields
		$('input[name=description]').val("");
		$('input[name=amount]').val("");
		
		var newHtml = template({description:description,amount:amount});		
		var oldHtml = document.getElementById('add-html').innerHTML
		document.getElementById('add-html').innerHTML = oldHtml+newHtml;
		source = document.getElementById('basic-template').innerHTML;
		template = Handlebars.compile(source);
		newHtml = template({amount:amount,income:income});
		document.getElementById('left-amount').innerHTML = newHtml;
	})

	Handlebars.registerHelper('balance', function (amount)  {
		totalIncome = lastBalance?lastBalance:totalIncome;
		lastBalance = totalIncome-amount;
		return  totalIncome-amount;
	});