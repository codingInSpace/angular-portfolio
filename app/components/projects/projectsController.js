angular.module('portfolioApp').controller('ProjectsController', function($scope, ModalService) {

  // $scope.showProjectModal = function(title, descLong, teamDesc, tryLink, tryLinkDesc, sourceLink, sourceLinkDesc){
  $scope.showProjectModal = function(project){
    
    ModalService.showModal({
      templateUrl: "app/components/modal/modalView.html",
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
        // console.log(result);
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
});
