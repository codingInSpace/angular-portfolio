'use strict';

angular.module('portfolioApp')
  .directive('webglTrinkets', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
				//console.log("hej");
				var camera, scene, renderer, controls, mesh,
					amountTrinkets = 8,
					trinketGroup,
					tweenElems = [],
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

					var trinketColors = {
						light: '#990099',
						dark: '#800080'
					}

					
					for (var i = 0; i < amountTrinkets; ++i) {
						var geometry = new THREE.OctahedronGeometry(3);

						for (var j = 0; j < geometry.faces.length; ++j) {
							var face = geometry.faces[j];
							var factor = Math.random();

							if (factor <= 0.2) {
								face.color.set( trinketColors.dark );
							} else {
								face.color.set( trinketColors.light );
							}
						}

						//geometry.elementsNeedUpdate = true;

						var material = new THREE.MeshBasicMaterial({
							shading: THREE.FlatShading,
              vertexColors: THREE.FaceColors,
							transparent: true
            });



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

						var xEndValue = Math.random() * (12 - -12) - 12;
						var yEndValue = Math.random() * (6 - -6) - 6;
						var zEndValue = Math.random() * (10 - -10) -10;

						var tweenElem = {
							x: xPos,
							x2: xEndValue,
							y: yPos,
							y2: yEndValue,
							z: zPos,
							z2: zEndValue,
							obj: trinket
						}
						
						tweenElems.push(tweenElem);

					}

					scene.add(trinketGroup);

					var animDuration = 8000;
					var delayFactor = 6000;

					for (var i = 0; i < amountTrinkets; ++i) {
						var updateCallback = function() {
							this.obj.position.x = this.x;
							this.obj.position.y = this.y;
							this.obj.position.z = this.z;
						}

						var tween = new TWEEN.Tween(tweenElems[i])
							.to({ x: tweenElems[i].x2, y: tweenElems[i].y2, z: tweenElems[i].z2 }, animDuration)
							.delay(Math.random() * delayFactor)
							.onUpdate( updateCallback )
							.easing(TWEEN.Easing.Quadratic.In)
							.start();

						var tweenBack = new TWEEN.Tween(tweenElems[i], false)
							.to({ x: tweenElems[i].x, y: tweenElems[i].y, z: tweenElems[i].z }, animDuration)
							.delay(Math.random() * delayFactor)
							.onUpdate( updateCallback )
							.easing(TWEEN.Easing.Sinusoidal.InOut);

						tween.chain(tweenBack);
						tweenBack.chain(tween);

					}

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

        scope.animate = function (time) {
          requestAnimationFrame( scope.animate );
          TWEEN.update(time);
          scope.render();
        };

				scope.render = function () {
					trinketGroup.rotation.y += 0.0001;

					for (var i = 0; i < amountTrinkets; ++i) {
						trinketGroup.children[i].rotation.y += 0.005;
					}

					renderer.render( scene, camera );
				};

				// Run
        scope.init();
        scope.animate();
			}
		}
	});
