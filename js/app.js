angular.module('portfolioApp', [])
	.controller('PresentationController', function() {
		this.title ="Jonathan Grangien"
		this.presentationText = "Msc. student of Computer Science in Media Technology at Linköpings University in Sweden. I like programming, mainly websites and applications, and am looking to improve and explore new stuff.";
		this.github = "https://github.com/codingInSpace";
		this.linkedin = "https://www.linkedin.com/profile/view?id=AAIAABp3dUQB-1E0m93nZr0MAetxMgn_ROHTh90";

		
	})

	.controller('ProjectsController', function() {
		this.text = "Such projects much show";

		this.myProjects = 
		[
			{
				title: "Galaxy Goose",
				description: "An experimental WebGL application where you can create and customize planets interactively. (WIP)",
				image: "img/galaxygoose1.png",
				teamDesc: "Team of five.",
				tryLink: "https://codinginspace.github.io/myGalaxy",
				tryLinkDesc: "Try it!",
				sourceLink: "https://github.com/codingInSpace/myGalaxy",
				sourceLinkDesc: "Source"
			},
			{
				title: "Reverbify",
				description: "An app built as part of a sound physics course. The user can upload or record a sound and combine it with a chosen environment's echo effect. ",
				image: "img/reverbify1.png",
				teamDesc: "Team of three",
				tryLink: "https://reverbify.meteor.com",
				tryLinkDesc: "Try it!",
				sourceLink: "https://github.com/codingInSpace/reverbify",
				sourceLinkDesc: "Source"
			},
			{
				title: "Trappans Personalportal",
				description: "Staff portal for a local pub/club. I've worked on dynamic JavaScript- and some php-backend.",
				image: "img/portalen.png",
				teamDesc: "Team of four",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "",
				sourceLinkDesc: ""
			},
			{
				title: "Mapus",
				description: "An Android app for students to use for quickly communicating where to meet to study, with the help of interactive maps. (WIP)",
				image: "img/mapus1.png",
				teamDesc: "Team of five.",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "https://github.com/sovanny/Mapus",
				sourceLinkDesc: "Source"
			},
			{
				title: "Get Busy",
				description: "A mobile app for \"gamifying\" your motivation to achieve daily goals, built to try meteor.js. (WIP)",
				image: "img/getbusy1.png",
				teamDesc: "Personal project",
				tryLink: "https://getbusy.meteor.com",
				tryLinkDesc: "Try it!",
				sourceLink: "",
				sourceLinkDesc: ""
			},
			{
				title: "Legomania",
				description: "Website with back-end focus of searching for lego sets.",
				image: "img/legomania.png",
				teamDesc: "Team of five",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "https://github.com/Hedlundaren/Legomania",
				sourceLinkDesc: "Source"
			}

		];


		// var toggleSelected = function() {
		// 	$('#presentation-link').removeClass("pure-menu-selected");
		// 	$('#projects-link').addClass("pure-menu-selected");
		// }

		// toggleSelected();
	})
	
	.directive('projectCardButtons', function() {
		return {
			restrict: "E",
			replace: false,
			scope: {
				item: "="
			},
			templateUrl: "js/directives/projectCardButtons.html"
		}
	})

	.directive('contactLinks', function() {
		return {
			restrict: "E",
			replace: false,
			scope: {
				item: "="
			},
			templateUrl: "js/directives/contactLinks.html"
		}
	});
