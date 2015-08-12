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
				<div class="col-md-3 pull-left">
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

	<div ng-controller="ProjectsController as projects">
		<div class="container">
			<div class="row">
				<div class="col-md-2 col-md-offset-5" style="text-align: center;">
					<h1>My projects</h1>
				</div>
			</div>

			<div class="row">

				<!-- Galaxy Goose -->
				<div class="col-md-4">
					<div class="panel panel-default bootcards-media">
					  <div class="panel-heading">
					    <h3 class="panel-title">Galaxy Goose</h3>
					  </div>
					  <div class="panel-body">
					  	An experimental WebGL application where you can create and customize planets interactively. (WIP)
					  </div>
					  <img src="img/galaxygoose1.png" class="img-responsive"/>
					  <div class="panel-body">
					  Team of five.
					  </div>
					  <div class="panel-footer">
					    <div class="btn-group btn-group-justified">
					      <div class="btn-group">
					        <a class="btn btn-default" href="https://codinginspace.github.io/myGalaxy" target="_blank">
					          <i class="fa fa-lg fa-external-link"></i>
					          Try it!
					        </a>
					      </div>
					      <div class="btn-group">
					        <a class="btn btn-default" href="https://github.com/codingInSpace/myGalaxy" target="_blank">
					          <i class="fa fa-lg fa-github"></i>
					          Source
					        </a>
					      </div>
					    </div>
					  </div>
					</div>
				</div>

				<!-- Mapus -->
				<div class="col-md-4">
					<div class="panel panel-default bootcards-media">
					  <div class="panel-heading">
					    <h3 class="panel-title">Mapus</h3>
					  </div>
					  <div class="panel-body">
					  An Android app for students to use for quickly communicating where to meet to study, with the help of interactive maps. (WIP)
					  </div>
					  <img src="img/mapus1.png" class="img-responsive" />
					  <div class="panel-body">
					  Team of five.
					  </div>
					  <div class="panel-footer">
					    <div class="btn-group btn-group-justified">
					      <div class="btn-group">
					        <a class="btn btn-default" href="https://github.com/sovanny/Mapus" target="_blank">
					          <i class="fa fa-lg fa-github"></i>
					          Source
					        </a>
					      </div>
					    </div>
					  </div>
					</div>
				</div>

				<!-- GetBusy -->
				<div class="col-md-4">
					<div class="panel panel-default bootcards-media">
					  <div class="panel-heading">
					    <h3 class="panel-title">Get Busy</h3>
					  </div>
					  <div class="panel-body">
					  	A mobile app for "gamifying" your motivation to achieve daily goals, built to try meteor.js. (WIP) 
					  </div>
					  <img src="img/getbusy1.png" class="img-responsive" />
					  <div class="panel-body">
					  Personal project.
					  </div>
					  <div class="panel-footer">
					    <div class="btn-group btn-group-justified">
					      <div class="btn-group">
					        <a class="btn btn-default" href="https://getbusy.meteor.com" target="_blank">
					          <i class="fa fa-lg fa-external-link"></i>
					          Try it!
					        </a>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>

		</div>
	</div>

</body>
</html>
