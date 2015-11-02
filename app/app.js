angular.module('portfolioApp', ['angularModalService'])
	.controller('PresentationController', function() {
		this.title ="Jonathan Grangien"
		this.presentationText = "MSc. student of Computer Science in Media Technology at Linköpings University, Sweden. I like programming, mainly websites, applications and graphics.";
		this.github = "https://github.com/codingInSpace";
		this.linkedin = "https://www.linkedin.com/profile/view?id=AAIAABp3dUQB-1E0m93nZr0MAetxMgn_ROHTh90";


	})

	.controller('ProjectsController', function($scope, ModalService) {
		// this.text = "Such projects much show";

		$scope.showProjectModal = function(title, descLong, teamDesc){

			ModalService.showModal({
		    templateUrl: "app/templates/modaltemplate.html",
		    controller: "ModalController",
				inputs: {
	        title: title,
					descLong: descLong,
					teamDesc: teamDesc
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
				descLong: "bla bla bla",
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
				descLong: "",
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
				descLong: "",
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
				descLong: "",
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
				descLong: "",
				image: "assets/img/getbusy1.png",
				teamDesc: "Personal project",
				tryLink: "https://getbusy.meteor.com",
				tryLinkDesc: "Try it!",
				sourceLink: "",
				sourceLinkDesc: ""
			},
			{
				title: "Legomania",
				descShort: "Lego database website",
				descLong: "",
				image: "assets/img/legomania.png",
				teamDesc: "Team of five",
				tryLink: "",
				tryLinkDesc: "",
				sourceLink: "https://github.com/Hedlundaren/Legomania",
				sourceLinkDesc: "Source"
			}
		];

	})

	.controller('ModalController',  [
	  '$scope', '$element', 'title', 'descLong', 'teamDesc', 'close',
	  function($scope, $element, title, descLong, teamDesc, close) {

			$scope.title = title;
			$scope.descLong = descLong;
			$scope.teamDesc = teamDesc;

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
		return {
			restrict: "E",
			replace: false,
			scope: {
				item: "="
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
