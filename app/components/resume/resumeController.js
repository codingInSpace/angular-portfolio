angular.module('portfolioApp').controller('ResumeController', function($scope) {

	this.test = "hej";
  this.example =
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
    }
  ];
});
