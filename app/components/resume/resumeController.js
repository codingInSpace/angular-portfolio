angular.module('portfolioApp').controller('ResumeController', function($scope) {

	this.linkText = "View full formal resume here";
	this.link = "assets/docs/resume.pdf";
	
  this.experiences =
  [
    {
			title: 'Webmaster',
			subTitle: 'Media Technology Days',
			description: 'Taking in the planning and work behind the exhibition event Media Technology Days (medieteknikdagarna), which aims to inspire and connect students and companies. As webmaster I am responsible for managing the webbsite medieteknikdagarna and things web related.',
			date: '09.2015 - present' 
    },
		{
			title: 'Programming Tutor',
			subTitle: 'LiTHehack',
			description: 'Taking part in the student-driven organization LiTHehack at Linkoping University, I help peers with programming related labs, projects or questions.',
			date: '09.2015 - present' 
    },
		{
			title: 'Laboratory Assistant',
			subTitle: 'Linköping University',
			description: 'Worked as a tutor for a couple of laboratory exercises, and provided general help during a two month period project, in the course User Interfaces and Communication at Linkoping University.',
			date: '09.2015 - 10.2015' 
    },
  ];

  this.goodSkills = 'C++, JavaScript, HTML, CSS, git, Unix, Vim';
  this.intermediateSkills = 'Java, Matlab, PHP, LATEX, MySQL';
  this.basicSkills = 'Python, Windows, Postgres, MongoDB';

  this.communicationSkills =
  [
		{
			lang: 'Swedish',
			proficiency: 'Native'
		},
		{
			lang: 'English',
			proficiency: 'Proficient'
		},
		{
			lang: 'Japanese',
			proficiency: 'Good'
		},
		{
			lang: 'French',
			proficiency: 'Basic'
		}
	];

	this.education = 
	[
		{
			title: 'M.Sc. in engineering of computer science in Mediatechnology',
			subTitle: 'Linköpings Universitet, Norrköping',
			date: '2013 - 2018 (estimated)'
		},
		{
			title: 'Natural Science Program',
			subTitle: '(High school) NT Gymnasiet, Stockholm',
			date: '2009 - 2012'
		}
	];

});
