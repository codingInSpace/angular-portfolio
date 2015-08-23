<!DOCTYPE html>
<html ng-app="portfolioApp">
<head>
	<meta charset="utf-8">
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
	<title>Jonathan Grangien</title>
	<!-- <meta name="description" content=""> -->
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- angular libs -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
	<script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>

	<!-- Modules -->
	<script src="js/app.js"></script>

	<!-- jquery -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

	<!-- fullPage -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.9/jquery.fullPage.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.9/jquery.fullPage.min.css" />
	<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.6.9/vendors/jquery.slimscroll.min.js"></script>

	<!-- WOW -->
	<!-- <script src="js/wow.min.js"></script> -->

	<!-- Bootstrap and Bootcards-->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.2/css/bootcards-desktop.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootcards/1.1.2/js/bootcards.min.js"></script>
	
	<!-- CSS imports -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/pure-min.css">
	<link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	<!-- Custom css -->
	<link rel="stylesheet" href="css/app.css">

</head>
<body>
	<script>
	$(document).ready(function() {
	    $('#fullpage').fullpage({
	    	anchors: ['top', 'projects', 'contact'],
	    	sectionsColor: ['#D6EBE0', '#fff', '#313131'],
	    	scrollOverflow: true
	    });
	});

	// new WOW().init();

	</script>


	<div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li id="presentation-link" class="pure-menu-item pure-menu-selected">
                	<a href="#top" class="pure-menu-link">About</a>
                </li>
                <li id="projects-link" class="pure-menu-item">
                	<a href="#projects" class="pure-menu-link">My Projects</a>
                </li>
                <li id="projects-link" class="pure-menu-item">
                	<a href="#contact" class="pure-menu-link">Contact</a>
                </li>
            </ul>
        </div>
    </div>

    <div id="fullpage">
	    <div class="section">
		    <div ng-controller="PresentationController as presentation">
				<div class="container">
					<div class="row">
						<div class="col-md-5">
							<h1>About me</h1>
							<p>Bacon ipsum dolor amet tongue turducken kielbasa ham pig drumstick filet mignon bacon beef ribs pork chop pork loin. Doner pork landjaeger brisket ham. Boudin pork cupim tenderloin meatball. Ball tip cupim beef ribs, turkey spare ribs pork loin ham. </p>

							<p>Meatloaf ham hock kielbasa tenderloin t-bone fatback landjaeger shankle sausage ball tip pancetta tri-tip hamburger venison. Beef ball tip sirloin tenderloin. Shank brisket jowl tail kevin leberkas shankle landjaeger kielbasa drumstick tongue.</p>
						</div>
						<div class="col-md-5 pull-right">
							<img src="img/seriousman.jpg" class="hidden-xs img-circle" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="section">
			<br><br><br>
			<div ng-controller="ProjectsController as projects">
				<div class="container">
					<div class="row">

						<!-- Project cards -->
						<div ng-repeat="project in projects.myProjects">
							<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-0">
								<!-- <div class="wow fadeIn"> -->
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
									</div>
								<!-- </div> -->
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

		<div class="section">
			<div class="container">
				<div class="row">
					<!-- mail form -->
					<div class="col-sm-4">
						<div class="contact-text">
							<h2>Send an email</h2>
							<p>jonathan.grangien@gmail.com</p>
							<form method="POST">
								<label for="mail-field">Your email</label><br>
								<input type="text" name="mail-field"><br>
								<label for="msg-field">Message</label><br>
								<input type="textarea" name="msg-field"><br>
								<input type="submit" value="Send message">
							</form>
						</div>
					</div>

					<!-- links -->
					<div class="col-sm-4">
						<div class="contact-text">
							<h2>Follow Me</h2>
							<p>link link link</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</body>
</html>
