<!DOCTYPE html>
<html ng-app="portfolioApp">
<head>
	<meta charset="utf-8">
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
	<title>Jonathan Grangien</title>
	<!-- <meta name="description" content=""> -->
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- angular libs -->
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
	<script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>

	<!-- Modules -->
	<script src="js/app.js"></script>


	<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<!-- windows -->
	<script src="js/jquery.windows.js"></script>

	<!-- Bootstrap and Bootcards-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.2/css/bootcards-desktop.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.2/js/bootcards.min.js"></script>
	
	<!-- Pure css -->
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">

	<!-- Icons -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	<!-- Custom css -->
	<link rel="stylesheet" href="css/app.css">

</head>
<body>

	<section id="0" class="window">
	<div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li id="presentation-link" class="pure-menu-item pure-menu-selected">
                	<a href="#/" class="pure-menu-link">About</a>
                </li>
                <li id="projects-link" class="pure-menu-item">
                	<a href="#/projects" class="pure-menu-link">My Projects</a>
                </li>
                <li id="projects-link" class="pure-menu-item">
                	<a href="#/projects" class="pure-menu-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>

    <div ng-controller="PresentationController as presentation">
		<div class="container">
			<div class="row">
				<div class="col-md-5 pull-left">
					<h1>About me</h1>
					<p>Bacon ipsum dolor amet tongue turducken kielbasa ham pig drumstick filet mignon bacon beef ribs pork chop pork loin. Doner pork landjaeger brisket ham. Boudin pork cupim tenderloin meatball. Ball tip cupim beef ribs, turkey spare ribs pork loin ham. </p>

					<p>Meatloaf ham hock kielbasa tenderloin t-bone fatback landjaeger shankle sausage ball tip pancetta tri-tip hamburger venison. Beef ball tip sirloin tenderloin. Shank brisket jowl tail kevin leberkas shankle landjaeger kielbasa drumstick tongue.</p>
				</div>
				<div class="col-md-5 pull-right">
					<img src="img/seriousman.jpg" class="hidden-xs" />
				</div>
			</div>
		</div>
	</div>
	</section>

	<section id="1" class="window">
	<div ng-controller="ProjectsController as projects">
		<div class="container">
			<div class="row">
				<div class="col-md-2 col-md-offset-5" style="text-align: center;">
					<h1>My projects</h1>
				</div>
			</div>

			<div class="row">

				<!-- Project cards -->
				<div ng-repeat="project in projects.myProjects">
					<div class="col-md-4">
						<div class="panel panel-default bootcards-media">
						  <div class="panel-heading">
						    <h3 class="panel-title">{{ project.title }}</h3>
						  </div>
						  <div class="panel-body">
						  	{{ project.description }}
						  </div>
						  <img ng-src="{{ project.image }}" class="img-responsive"/>
						  <div class="panel-body">
						  	{{ project.teamDesc }}
						  </div>

						  <project-card-buttons item="project"></project-card-buttons>
						  
						  <!-- <div class="panel-footer">
						    <div class="btn-group btn-group-justified">
						      <div class="btn-group">
						        <a class="btn btn-default" ng-href="{{ project.tryLink }}" target="_blank">
						          <i class="fa fa-lg fa-external-link"></i>
						          {{ project.tryLinkDesc }}
						        </a>
						      </div>
						      <div class="btn-group">
						        <a class="btn btn-default" ng-href="{{ project.sourceLink }}" target="_blank">
						          <i class="fa fa-lg fa-github"></i>
						          {{ project.sourceLinkDesc }}
						        </a>
						      </div>
						    </div>
						  </div> -->

						</div>

					</div>
				</div>

			</div>

		</div>
	</div>
	</section>

	<script>

	    $(document).ready(function(){

	        var $windows = $('.window');

	        $windows.windows({
	            snapping: true,
	            snapSpeed: 500,
	            snapInterval: 1100,
	            onScroll: function(s){},
	            onSnapComplete: function($el){},
	            onWindowEnter: function($el){}
	        });

	    });
	</script>

</body>
</html>
