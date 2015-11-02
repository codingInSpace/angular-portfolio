angular.module('portfolioApp', ['angularModalService'])
	.controller('PresentationController', function() {
		this.title ="Jonathan Grangien"
		this.presentationText = "MSc. student of Computer Science in Media Technology at Linköpings University, Sweden. I like programming, mainly websites, applications and graphics.";
		this.github = "https://github.com/codingInSpace";
		this.linkedin = "https://www.linkedin.com/profile/view?id=AAIAABp3dUQB-1E0m93nZr0MAetxMgn_ROHTh90";


	})

	.controller('ProjectsController', function($scope, ModalService) {

		// $scope.showProjectModal = function(title, descLong, teamDesc, tryLink, tryLinkDesc, sourceLink, sourceLinkDesc){
		$scope.showProjectModal = function(project){
			ModalService.showModal({
		    templateUrl: "app/templates/modaltemplate.html",
		    controller: "ModalController",
				inputs: {
	        title: project.title,
					image: project.image,
					descLong: project.descLong,
					teamDesc: project.teamDesc,
					tryLink: project.tryLink,
					tryLinkDesc: project.tryLinkDesc,
					sourceLink: project.sourceLink,
					sourceLinkDesc: project.sourceLinkDesc
	      }
		  }).then(function(modal) {

		    //it's a bootstrap element, use 'modal' to show it
		    modal.element.modal();
		    modal.close.then(function(result) {
		      console.log(result);
		    });
		  });
		}

		this.myProjects =
		[
			{
				title: "Galaxy Goose",
				descShort: "Interactive WebGL application",
				descLong: "An experimental WebGL application where you can create and customize planets interactively.",
				image: "assets/img/galaxygoose1.png",
				teamDesc: "Team of five.",
				tryLink: "https://codinginspace.github.io/myGalaxy",
				tryLinkDesc: "Try it!",
				sourceLink: "https://github.com/codingInSpace/myGalaxy",
				sourceLinkDesc: "Source"
			},
			{
				title: "Reverbify",
				descShort: "Reverb simulation app",
				descLong: "An app built as part of a sound physics course. The user can upload or record a sound and combine it with a chosen environment's echo effect.",
				image: "assets/img/reverbify1.png",
				teamDesc: "Team of three",
				tryLink: "https://reverbify.meteor.com",
				tryLinkDesc: "Try it!",
				sourceLink: "https://github.com/codingInSpace/reverbify",
				sourceLinkDesc: "Source"
			},
			{
				title: "Trappans Personalportal",
				descShort: "Club staff portal",
				descLong: "Staff portal for a local pub/club. I've worked on dynamic JavaScript- and some php-backend.",
				image: "assets/img/portalen.png",
				teamDesc: "Team of four",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "",
				sourceLinkDesc: ""
			},
			{
				title: "Mapus",
				descShort: "Study tool app",
				descLong: "An Android app for students to use for quickly communicating where to meet to study, with the help of interactive maps.",
				image: "assets/img/mapus1.png",
				teamDesc: "Team of five.",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "https://github.com/sovanny/Mapus",
				sourceLinkDesc: "Source"
			},
			{
				title: "Get Busy",
				descShort: "\"Gamifying\" motivation app",
				descLong: "A mobile app for \"gamifying\" your motivation to achieve daily goals, built to try meteor.js.",
				image: "assets/img/getbusy1.png",
				teamDesc: "Personal project",
				tryLink: "https://getbusy.meteor.com",
				tryLinkDesc: "Try it!",
				sourceLink: "",
				sourceLinkDesc: ""
			}
		];

	})

	.controller('ModalController',  [
	  '$scope', '$element', 'title', 'image', 'descLong', 'teamDesc', 'tryLink', 'tryLinkDesc', 'sourceLink', 'sourceLinkDesc', 'close',
	  function($scope, $element, title, image, descLong, teamDesc, tryLink, tryLinkDesc, sourceLink, sourceLinkDesc, close) {

			$scope.title = title;
			$scope.image = image;
			$scope.descLong = descLong;
			$scope.teamDesc = teamDesc;
			$scope.tryLink = tryLink;
			$scope.tryLinkDesc = tryLinkDesc;
			$scope.sourceLink = sourceLink;
			$scope.sourceLinkDesc = sourceLinkDesc;

			// console.log("trylink: " + $scope.tryLink);

			$scope.close = function() {
		 	  close({}, 500); 	// close, but give 500ms for animation
		  };

			//  This cancel function must use the bootstrap 'modal' function because
		  //  it doesn't have the 'data-dismiss' attribute.
		  $scope.cancel = function() {
				$element.modal('hide');		//  Manually hide the modal.
		    close({}, 500); 					// close, but give 500ms for animation
		  };

	}])

	.directive('projectCardButtons', function() {
		console.log("buttons!");
		return {
			restrict: "E",
			replace: false,
			scope: {
				tryLink: "=",
				tryLinkDesc: "=",
				sourceLink: "=",
				sourceLinkDesc: "="
			},
			templateUrl: "app/directives/projectCardButtons.html"
		}
	})

	.directive('contactLinks', function() {
		return {
			restrict: "E",
			replace: false,
			scope: {
				item: "="
			},
			templateUrl: "app/directives/contactLinks.html"
		}
	});
