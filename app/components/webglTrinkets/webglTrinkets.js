'use strict';

angular.module('portfolioApp')
  .directive('webglTrinkets', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
				//console.log("hej");
				var camera, scene, renderer, controls, mesh,
					contW = $(element).width(), //set by css
					contH = 100,
					windowHalfX = contW / 2,
          windowHalfY = contH / 2;

        scope.init = function () {
					// Camera
					camera = new THREE.PerspectiveCamera( 20, contW / contH, 1, 1000 );
          camera.position.z = 100;

          // Scene
          scene = new THREE.Scene();

          // Light
          scene.add( new THREE.AmbientLight( 0xffffff ));

					// Cube test
					var geometry = new THREE.BoxGeometry( 10, 10, 10 );
					var material = new THREE.MeshBasicMaterial({});
					mesh = new THREE.Mesh( geometry, material );
					scene.add( mesh );

          // Renderer
          renderer = new THREE.WebGLRenderer( { alpha: true } );
          renderer.setClearColor( 0x000000, 0 );
          renderer.setSize( contW, contH );
          element[0].appendChild( renderer.domElement );


				};

        scope.animate = function () {
          requestAnimationFrame( scope.animate );
          scope.render();
        };

				scope.render = function () {
					mesh.rotation.x += 0.005;
					mesh.rotation.y += 0.01;
					renderer.render( scene, camera );
				};

				// Run
        scope.init();
        scope.animate();
			}
		}
	});
