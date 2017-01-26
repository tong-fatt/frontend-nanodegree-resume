/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append(["Ho Tong Fatt"]);
 // var awesomeThoughts = "I am Tong Fatt and I am AWESOME!";
 // console.log(awesomeThoughts);
 // var email = "cameron@udacity.com";
 // var newEmail = email.replace("udacity", "gmail");
 // console.log(email);
 // console.log(newEmail);
 // var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
 // console.log(awesomeThoughts);
 // console.log(funThoughts);
 // $("#main").append(funThoughts);
 // var name = "Ho Tong Fatt";
 // var role = "Business Operation Manager";
 // formattedName = HTMLheaderName.replace("%data%", name);
 // formattedRole = HTMLheaderRole.replace("%data%", role);
 // $("#header").prepend(formattedRole);
 // $("#header").prepend(formattedName);
 
 
 // $("#main").append(skills.length);
 var bio = {
 	"name": "Ho Tong Fatt", 
 	"role": "full stack developer", 
 	"contacts":{
 		"mobile": "94864571",
 		"email":"tho662003@yahoo.com", 
 		"github":"https://tong-fatt.github.io/",
 		"linkedin":"https://www.linkedin.com/in/tongfatt-ho/",
 		"location":"584 pasir risk street 53, singapore 510584"},
 	"pictureURL": "images/My_Photo.png",
 	"welcome message": "Hi, nice to meet you", 
 	"skills": ['html','css', 'javascript', 'python','r', 'octave ', 'c', 'vba', 'fortran','lisp' ]
 	};

 var work = {
 	jobs:[{
		"work_title": "business operation manager", 
		"employer": "hp inc",
  		"years_worked": "2003 Jan- 2016 Oct",
  		"description": "a bridge between marketing and factory;\
  		turned marketing monthly revenue forecast into\
  		into factory weekly shipment forecast to meet quaterly'\
  		sales targets",
  		"location":"138 depot road, singapore 109683" 
  	},{
  		"work_title": "channel program manager",
  		 "employer": "hp inc",
  		 "years_worked": "1999 - 2003",	
  		 "description": "worked with marketing on product\
  		 customization development for short term marketing \
  		 programs to drive incremental revenue & profit",	
  		 "location": "138 depot road, singapore"
  	},{
  		"work_title": "material manager",
  		"employer": "hp inc",
  		"years_worked": "1998-1999",
  		"description":"a bridge to mitigate SKU mix through\
  		strategic material buffering and postponing product\
  		completion",
  		"location": "138 depot road, singapore"
  	},{
  		"work_title": "business process manager",
  		"employer": "hp inc",
  		"years_worked": "1996-1997",
  		"description":"enabled marketing strategies and deals through quick\
  		supply chain responsese.g. product customaization, setting up \
  		postponement operation",
  		"location": "138 depot road, singapore"
  	},{
  		"work_title": "process engineers",
  		"employer":"hp inc",
  		"years_worked":"1995-1996",
  		"description":"enabled shipping and postponement physical operations e.g. NPI,\
  		 set up new sites etc.",
  		"location": "138 depot road, singapore"

  	},{
  		"work_title": "test engineer",
  		"employer":"delphi automotive electronics",
  		"years_worked": "1991 - 1994",
  		"description": "responsible for testers on production: equipment uptime, throughput,\
  		 cost reductions, yield, test programme developemnt and automation",
  		 "location": "ang mo kio ave 10, singapore"
  	}]
  };

 var education = {
	"schools": [{
		"name": "nanyang techological university",
		"year_started": "1993",
		"level": "master of science",
		"major": "computer integrated manufacturing",
		"year_ended": "1998",
		"location": "50 Nanyang Ave, Singapore 639798 "
	}, {
		"name": "national university of sinagpore ",
		"year_started": "1987",
		"level": "bachelor degree",
		"major": "electrical and electronics engineering",
		"year_ended": "1991",
		"location": "21 Lower Kent Ridge Rd, Singapore 119077"
		}],
	
	
	"online_courses":[{
		"name": "johns hopkins university",
	 "year_ended": "july 2016",
	 "level": "certificates",
	 "specialization":"10 modules data science in r",
	 "certificates URL": "https://www.coursera.org/account/accomplishments/specialization/77MALE2A4S7G"
	}, {
		"name": "stanford university",
		"year_ended": "oct 2016",
		"level": "certificates",
	 	"specialization":"machine learning in octave",
	 	"certificates URL": "https://www.coursera.org/account/accomplishments/certificate/8GNRUHU9UCBH"
	 },{
	 	"name": "udacity",
		"year_ended": "jan 2017",
		"level": "certificates",
	 	"specialization":"machine learning in python",
	 	"certificates URL": ""
	 },{
	 	"name": "udacity",
		"year_ended": "jan 2017",
		"level": "certificates",
	 	"specialization":"javascript introduction",
	 	"certificates URL": ""
	 }]
}
  ;

  var projects = {
	"projects": [
	{
		"name": "Word_Predictor",
		"date": "Oct-2016",
		"description": "An app implemented in R that predicts the next word \
		similar to that on mobile devices - under Johns Hopkins Capstone Project",
		"url": "url"
	}, {
		"name": "machine_learning",
		"date": "Sep-2016",
		"description": "Predicting model in R using random forest algorithmns -\
		under Johns Hopkins mini-projects",
		"url": "url"
	},{
		"name": "gradient_descent",
		"date": "Nov-2016",
		"description": "Implemented using matrix operations in Octave as part of\
		assignment under stanford's machine learning course",
		"url": "url"
	}, {
		"name": "neural_network_cost_function",
		"date": "Nov-2016",
		"description":"Implemented using matrix operations in Octave as part of\
		assignment under stanford's machine learning course",
		"url": "url"
	},{
		"name": "svm",
		"date":"Jan-2017",
		"description": "mini-projects using sci-learn in python as part of Udacity\
		 mini-projects",
		"url": "url"
	}, {

		"name": "pca",
		"date": "Jan-2017",
		"description": "mini-projects using sci-learn in python as part of Udacity\
		mini-projects",
		"url": "url"
	}]
}

 
projects.display = function() {
	
	$("#projects").append(HTMLprojectStart);
	for(project in projects.projects) 
 	{
	formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].name);
	$(".project-entry:last").append(formattedprojectTitle);
	formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	$(".project-entry:last").append(formattedprojectDates);
	formattedprojectDes = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedprojectDes);
	//formattedprojectImage = HTMLprojectImage.replace("%data%", )
	}
}

projects.display();

 formattedName = HTMLheaderName.replace("%data%", bio.name);
 formattedRole = HTMLheaderRole.replace("%data%", bio.role);
 formattedContact = HTMLcontactGeneric.replace("%contact%","Contact Info").replace("%data%","See Below");
 // formattedContactList = HTMLcontactGeneric.replace("%data%","See Below");
 formattedContactEmail = HTMLemail.replace("%data%",bio.contacts.email);
 formattedContactMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
 formattedContactGithub = HTMLgithub.replace("%data%",bio.contacts.github);
 formattedContactLinkedIn = HTMLtwitter.replace("%data%",bio.contacts.linkedin);
 formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
 formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio["welcome message"]);


 bio.display();

 bio.diplay = function
 { 
 	$("#header").prepend(formattedPicture);
 	$("#header").prepend(formattedRole);
 	$("#header").prepend(formattedName);
 
 	if((bio.skills).length!= 0 )
 		{
 				$("#header").append(HTMLskillsStart);
 				for (skill in bio.skills)
 				{		 				
 					var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
 		 			$("#skills").append(formattedSkills);
	 		 	}
 		 }
 	$("#topContacts").prepend(formattedContactEmail);
 	$("#topContacts").prepend(formattedContactMobile);
 	$("#topContacts").prepend(formattedContactGithub);
 	$("#topContacts").prepend(formattedContactLinkedIn);
 
	

	work.display()
 	
 	work.display = function
 	{
 
 		$("#workExperience").append(HTMLworkStart);// this line appends css ".work-entry" as the start
  		for(job in work.jobs){
  		formattedEmployer = HTMLworkEmployer.replace("%data%",work["jobs"][job]["employer"]);
 		formattedWorkTitle = HTMLworkTitle.replace("%data%",work["jobs"][job]["work_title"]);
  		formattedEmployerTitle = formattedEmployer + formattedWorkTitle	;
 		$(".work-entry:last").append(formattedEmployerTitle);
 		formattedDates = HTMLworkDates.replace("%data%",work["jobs"][job]["years_worked"]);
 		$(".work-entry:last").append(formattedDates);
 		formattedDescription = HTMLworkDescription.replace("%data%",work["jobs"][job]["description"])
 		$(".work-entry:last").append(formattedDescription);
	} 
 		 

	education.display()
	education.display = function
	{
 		 $("#education").append(HTMLschoolStart); //this line appends css ".eduction-entry" as the start
  		for(study in education.schools)
  		{			
 			formattedLastSchool = HTMLschoolName.replace("%data%", education["schools"][study]["name"]);
 			formattedLevel = HTMLschoolDegree.replace("%data%",education["schools"][study]["level"])
 			formattedSchoolLevel =  formattedLastSchool	+ formattedLevel;
 			$('.education-entry:last').append(formattedSchoolLevel);
 			formattedYearGraduated = HTMLschoolDates.replace("%data%", education.schools[study].year_ended);
 			$(".education-entry:last").append(formattedYearGraduated);
 			formattedSchooLocation = HTMLschoolLocation.replace("%data%", education.schools[study].location);
 			$(".education-entry:last").append(formattedSchooLocation);
 			formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[study].major);
 			$(".education-entry:last").append(formattedSchoolMajor);
		 }
  		$(".eduction-entry:Last").append(HTMLonlineClasses);
  		for(study in education.online_courses)
  		{
  			formattedLastSchool = HTMLonlineTitle.replace("%data%", education["online_courses"][study]["name"]);
  			formattedLevel = HTMLonlineSchool.replace("%data%",education["online_courses"][study]["level"])
  			formattedSchoolLevel =  formattedLastSchool	+ formattedLevel;
  			$('.education-entry:last').append(formattedSchoolLevel);
  			formattedYearGraduated = HTMLonlineDates.replace("%data%", education.online_courses[study].year_ended);
 			$(".education-entry:last").append(formattedYearGraduated);
 			formattedonlineURL = HTMLonlineURL.replace("%data%", education.online_courses[study]["certificates URL"]);
 			$(".education-entry:last").append(formattedonlineURL);

  		}
  	}


 $("#main").append(internationalizeButton);

function inName(name) 
{
	name = name.trim().split(" ");
	name[0] = name[0][0].toUpperCase()+ name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0]+ " " + name[1]

}

//add a map
$("#mapDiv").append(googleMap);

