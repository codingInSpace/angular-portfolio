angular.module('portfolioApp', [])
	.controller('PresentationController', function() {
		this.text = "jonathan";

		// var toggleSelected = function() {
		// 	$('#projects-link').removeClass("pure-menu-selected");
		// 	$('#presentation-link').addClass("pure-menu-selected");
		// }

		// toggleSelected();
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
				title: "This page",
				description: "Personal page, built with AngularJS for learning purposes",
				image: "",
				teamDesc: "Personal project",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "https://github.com/codingInSpace/portfolio",
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
	});
