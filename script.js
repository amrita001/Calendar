		var date = new Date();
		var dd = date.getDate();	//Today's date
		var mm = date.getMonth();	//Current Month
		var yy = date.getFullYear(); //Current Year

		function Calendar(dd,mm,yy)
		{
			var today = new Date();
			var currentMonth = today.getMonth();
			var currentYear = today.getFullYear();
			var arr=['January','February','March','April','May','June','July','August','September','October','November','December'];
			var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

			var firstDate = new Date(yy,mm,1);	//Gives full date format of the First day of the month
	
			var lastDay = new Date(yy,mm+1,0);	//Gives full date format of the Last day of the month
			
			var lastDate = lastDay.getDate();	//Extracts only Last date of current month

			var i=1, j = firstDate.getDay(); //j extracts only First Day of current month
			var space = j;


			var output = "<table cellspacing='0'cellpadding='10' style='margin-left: auto; margin-right:auto;  width:100%; height:100%;'>"; 


			document.getElementById("month-header").innerHTML = "<p style='background-color:yellow; text-align:center; font-size: 40px;'>" + arr[mm] + " " + yy + "</p>";

			// Displays the Days of the week
			output = output + "<tr>";
			for(var k=0;k<7;k++)
			{
				if(k==0)
				{
					output = output + "<td> <b style='color:Red;'>" + days[k] + "</b> </td>";
					k++;
				}
				output = output + "<td> <b style='color:Darkblue;'>" + days[k] + "</b> </td>";
			}
			output = output + "</tr>";

			// Fills the month with days
			while(i<=lastDate)
			{
				output = output + "<tr>";
				while(space!=0)	// creates empty cells until the 1st "day" comes
				{
					if(space==0)	// if the 1st "day" is Sunday then there is no need of space
						break;

					output = output + "<td>" + " " + "</td>"; // creates empty cells
					space--;
				}
				while(j<=6 && i<=lastDate)
				{
					if(i==dd && j===0 && mm===currentMonth && yy==currentYear) //Today + Sunday
						output = output + "<td style='background-color: #00917C; color:Red;'>" + i + "</td>";

					else if(i===dd && mm===currentMonth && yy===currentYear )	//Today + normal day
						output = output + "<td style='background-color: #00917C;'>" + i + "</td>";

					else if(j===0)
						output = output + "<td style='color:Red;'>" + i + "</td>";

					else
						output = output + "<td>" + i + "</td>";	

					i++;
					j++;
				}
				j=0;	//Again starts filling from Sunday
				output = output + "</tr>";
			}
			output = output + "</table>";
			document.getElementById("calendar-body").innerHTML = output;
		}

	function prev()
	{
		if(mm == 0)
			{	yy = yy - 1;
				mm = 11; // setting array index back to December
			}
		else{
				mm = mm - 1;
			}
		Calendar(dd,mm,yy);
	}
	function next()
	{
		if(mm == 11)
			{	yy=yy+1;
				mm = 0;	//setting array index back to January
			}
		else{
				mm = mm + 1;
			}
		Calendar(dd,mm,yy);
	}
