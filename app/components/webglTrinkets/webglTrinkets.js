'use strict';

angular.module('portfolioApp')
  .directive('webglTrinkets', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
				//console.log("hej");
				var camera, scene, renderer, controls, mesh,
					amountTrinkets = 9,
					trinketGroup,
					contW = $(element).width(), //set by css
					contH = 100,
					windowHalfX = contW / 2,
          windowHalfY = contH / 2;

				//console.log("width, height = " + contW + ":" + contH);
        scope.init = function () {

					// Camera
					camera = new THREE.PerspectiveCamera( 20, contW / contH, 1, 1000 );
          camera.position.z = 100;

          // Scene
          scene = new THREE.Scene();

          // Light
          scene.add( new THREE.AmbientLight( 0xffffff ));

					// Objects
					trinketGroup = new THREE.Group();

					var geometry = new THREE.OctahedronGeometry(3);
					var material = new THREE.MeshPhongMaterial({
                color: '#990099',
                emissive: new THREE.Color("rgb(30, 30, 30)"),
                transparent: true
              });

					for (var i = 0; i < amountTrinkets; ++i) {
						var trinket = new THREE.Mesh(geometry, material);

						var xPos = 0, yPos = 0, zPos = 0;

						while(Math.abs(xPos) <= 8 && Math.abs(zPos) <= 8) {
							xPos = Math.random() * (12 - -12) - 12;
							zPos = Math.random() * (12 - -12) - 12;
						}

						yPos = Math.random() * (7 - -7) - 7;

						trinket.position.set(xPos, yPos, zPos);
						trinket.scale.set(0.85, 1, 0.85);
						trinketGroup.add(trinket);
					}

					scene.add(trinketGroup);

          // Renderer
          renderer = new THREE.WebGLRenderer( { alpha: true } );
          renderer.setClearColor( 0x000000, 0 );
          renderer.setSize( contW, contH );
          element[0].appendChild( renderer.domElement );

					// Handle any resize effects
					window.addEventListener('resize', function() {
						contW = $(element).width(); //set by css
						camera.aspect = contW / contH;
						camera.updateProjectionMatrix();
						renderer.setSize( contW, contH );
					});
				};

        scope.animate = function () {
          requestAnimationFrame( scope.animate );
          scope.render();
        };

				scope.render = function () {
					trinketGroup.rotation.y += 0.005;
					renderer.render( scene, camera );
				};

				// Run
        scope.init();
        scope.animate();
			}
		}
	});
