
	$(document).on('click', '.add-data', function(){
	    var name  = document.getElementsByName('firstName')[0].value;
		var tech  = document.getElementsByName('technology')[0].value;
		var company  = document.getElementsByName('company')[0].value;
		var source = document.getElementById('template-output').innerHTML;
		template = Handlebars.compile(source);
		var newHtml = template({firstName:name,technology:tech,company:company});
		document.getElementById('add-html').innerHTML = newHtml;
	})
	
	Handlebars.registerHelper('greetings', function (str)  { 
		return  'Welcome ' + str;
	});