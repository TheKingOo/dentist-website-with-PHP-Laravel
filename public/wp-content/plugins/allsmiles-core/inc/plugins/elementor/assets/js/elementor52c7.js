(function ( $ ) {
	'use strict';

	$( window ).on(
		'load',
		function () {
			for ( var key in qodefCore.shortcodes ) {
				for ( var keyChild in qodefCore.shortcodes[key] ) {
					qodefElementor.init( key, keyChild );
				}
			}

			qodefElementorSection.init();
			qodefElementorColumn.init();
			elementorSection.init();
			elementorColumn.init();
		}
	);

	var qodefElementor = {
		init: function ( key, keyChild ) {
			$( window ).on(
				'elementor/frontend/init',
				function ( e ) {
					elementorFrontend.hooks.addAction(
						'frontend/element_ready/' + key + '.default',
						function ( e ) {
							// Check if object doesn't exist and print the module where is the error
							if ( typeof qodefCore.shortcodes[key][keyChild] === 'undefined' ) {
								console.log( keyChild );
							}

							qodefCore.shortcodes[key][keyChild].init();
						}
					);
				}
			);
		}
	};

	var qodefElementorSection = {
		init: function () {
			$( window ).on(
				'elementor/frontend/init',
				function () {
					elementorFrontend.hooks.addAction( 'frontend/element_ready/section', elementorSection.init );
				}
			);
		}
	};

	var qodefElementorColumn = {
		init: function () {
			$(window).on('elementor/frontend/init', function () {
				elementorFrontend.hooks.addAction('frontend/element_ready/column', elementorColumn.init);
			});
		}
	};

	var elementorSection = {
		init: function ( $scope ) {
			var $target     = $scope,
				isEditMode  = Boolean( elementorFrontend.isEditMode() ),
				settings    = [],
				sectionData = {};

			//generate parallax settings
			if ( isEditMode && typeof $scope !== 'undefined' ) {

				// generate options when in admin
				var editorElements = window.elementor.elements,
					sectionId      = $target.data( 'id' );

				$.each(
					editorElements.models,
					function ( index, object ) {
						if ( sectionId === object.id ) {
							sectionData = object.attributes.settings.attributes;
						}
					}
				);

				//parallax options
				if ( typeof sectionData.qodef_parallax_type !== 'undefined' ) {
					settings['enable_parallax'] = sectionData.qodef_parallax_type;
				}

				if ( typeof sectionData.qodef_parallax_image !== 'undefined' && sectionData.qodef_parallax_image['url'] ) {
					settings['parallax_image_url'] = sectionData.qodef_parallax_image['url'];
				}

				//offset options
				if ( typeof sectionData.qodef_offset_type !== 'undefined' ) {
					settings['enable_offset'] = sectionData.qodef_offset_type;
				}

				if ( typeof sectionData.qodef_offset_image !== 'undefined' && sectionData.qodef_offset_image['url'] ) {
					settings['offset_image_url'] = sectionData.qodef_offset_image['url'];
				}

				if ( typeof sectionData.qodef_offset_top !== 'undefined' ) {
					settings['offset_top'] = sectionData.qodef_offset_top;
				}

				if ( typeof sectionData.qodef_offset_left !== 'undefined' ) {
					settings['offset_left'] = sectionData.qodef_offset_left;
				}

				//generate output backend
				if ( typeof $target !== 'undefined' ) {
					elementorSection.generateOutput( $target, settings );
				}
			} else {

				// generate options when in frontend using global js variable
				var sectionHandlerData = qodefElementorGlobal.vars.elementorSectionHandler;

				$.each(
					sectionHandlerData,
					function ( index, properties ) {

						properties.forEach( function ( property ) {

							if ( typeof property['parallax_type'] !== 'undefined' && property['parallax_type'] === 'parallax' ) {

								$target                        = $( '[data-id="' + index + '"]' );
								settings['parallax_type']      = property['parallax_type'];
								settings['parallax_image_url'] = property['parallax_image']['url'];

								if ( typeof settings['parallax_image_url'] !== 'undefined' ) {
									settings['enable_parallax'] = 'parallax';
								}
							}

							if ( typeof property['offset_type'] !== 'undefined' && property['offset_type'] === 'offset' ) {

								$target                      = $( '[data-id="' + index + '"]' );
								settings['offset_type']      = property['offset_type'];
								settings['offset_image_url'] = property['offset_image']['url'];
								settings['offset_top']       = property['offset_top'];
								settings['offset_left']      = property['offset_left'];

								if ( typeof settings['offset_image_url'] !== 'undefined' ) {
									settings['enable_offset'] = 'offset';
								}
							}

							//generate output frontend
							if ( typeof $target !== 'undefined' ) {
								elementorSection.generateOutput( $target, settings );

								settings = [];
							}
						} );
					}
				);
			}
		},
		generateOutput: function ( $target, settings ) {

			if ( typeof settings['enable_parallax'] !== 'undefined' && settings['enable_parallax'] === 'parallax' && typeof settings['parallax_image_url'] !== 'undefined' ) {

				$( '.qodef-parallax-row-holder', $target ).remove();
				$target.removeClass( 'qodef-parallax qodef--parallax-row' );

				var $layout = null;

				$target.addClass( 'qodef-parallax qodef--parallax-row' );

				$layout = $( '<div class="qodef-parallax-row-holder"><div class="qodef-parallax-img-holder"><div class="qodef-parallax-img-wrapper"><img class="qodef-parallax-img" src="' + settings['parallax_image_url'] + '" alt="Parallax Image"></div></div></div>' ).prependTo( $target );

				// wait for image src to be loaded
				var newImg    = new Image;
				newImg.onload = function () {
					$target.find( 'img.qodef-parallax-img' ).attr( 'src', this.src );
					qodefCore.qodefParallaxBackground.init();
				};
				newImg.src    = settings['parallax_image_url'];
			}

			if ( typeof settings['enable_offset'] !== 'undefined' && settings['enable_offset'] === 'offset' && typeof settings['offset_image_url'] !== 'undefined' ) {

				$( '.qodef-offset-image-holder', $target ).remove();
				$target.removeClass( 'qodef-offset-image' );

				var $layout = null;

				$target.addClass( 'qodef-offset-image' );

				$layout = $( '<div class="qodef-offset-image-holder" style="position: absolute; z-index: 5; top:' + settings['offset_top'] + '; left:' + settings['offset_left'] + '"><div class="qodef-offset-image-wrapper"><img src="' + settings['offset_image_url'] + '" alt="Offset Image"></div></div>' ).prependTo( $target );
			}
		}
	};

	var elementorColumn = {
		init: function ($scope) {
			var $target = $scope,
				isEditMode = Boolean(elementorFrontend.isEditMode()),
				settings = [],
				sectionData = {};

			if (isEditMode && typeof $scope !== 'undefined') {

				// generate options when in admin
				var editorElements = window.elementor.elements,
					sectionId = $target.parents('section').data('id'),
					columnId = $target.data('id');

				$.each(editorElements.models, function (index, object) {

					if (sectionId === object.id) {
						var newElements = object.attributes.elements;

						$.each(newElements.models, function (index, object) {
							if (columnId === object.id) {
								sectionData = object.attributes.settings.attributes;
							}
						});
					}
				});

				//column shapes options
				if (typeof sectionData.qodef_column_enable_angled_shape_right !== 'undefined') {
					settings['angled_shape_right'] = sectionData.qodef_column_enable_angled_shape_right;
				}
				if (typeof sectionData.qodef_column_angled_shape_right_color !== 'undefined') {
					settings['angled_shape_right_color'] = sectionData.qodef_column_angled_shape_right_color;
				}

				if (typeof sectionData.qodef_column_enable_angled_shape_left !== 'undefined') {
					settings['angled_shape_left'] = sectionData.qodef_column_enable_angled_shape_left;
				}
				if (typeof sectionData.qodef_column_angled_shape_left_color !== 'undefined') {
					settings['angled_shape_left_color'] = sectionData.qodef_column_angled_shape_left_color;
				}

				//generate output backend
				if (typeof $target !== 'undefined') {
					elementorColumn.generateOutput($target, settings);
				}
			} else {

				// generate options when in frontend using global js variable
				var columnHandlerData = qodefElementorGlobal.vars.elementorColumnHandler;

				$.each(columnHandlerData, function (index, properties) {

					properties.forEach(function (property) {

						if (typeof property['angled_shape_right'] !== 'undefined' && property['angled_shape_right'] === 'angled_right_enabled') {

							$target = $('[data-id="' + index + '"]');
							settings['angled_shape_right'] = property['angled_shape_right'];
							settings['angled_shape_right_color'] = property['angled_shape_right_color'];

						}

						if (typeof property['angled_shape_left'] !== 'undefined' && property['angled_shape_left'] === 'angled_left_enabled') {

							$target = $('[data-id="' + index + '"]');
							settings['angled_shape_left'] = property['angled_shape_left'];
							settings['angled_shape_left_color'] = property['angled_shape_left_color'];

						}
						//generate output frontend
						if (typeof $target !== 'undefined') {
							elementorColumn.generateOutput($target, settings);
							settings = [];
						}
					});
				});
			}
		},
		generateOutput: function ($target, settings) {

			if (typeof settings['angled_shape_right'] !== 'undefined' && settings['angled_shape_right'] === 'angled_right_enabled') {

				$('.qodef-angled-shape-right', $target).remove();
				$target.removeClass('qodef-angled-shapes');

				var $layout = null;

				$target.addClass('qodef-angled-shapes');

				$layout = $('<div class="qodef-angled-shape-right"><svg width="100%" viewBox="0 0 100 700" preserveAspectRatio="none"><polygon fill="' + settings['angled_shape_right_color'] + '" points="100 0 0 0 0 700 0 700 100 0" /></svg></div>').prependTo($target);
			}

			if (typeof settings['angled_shape_left'] !== 'undefined' && settings['angled_shape_left'] === 'angled_left_enabled') {

				$('.qodef-angled-shape-left', $target).remove();
				$target.removeClass('qodef-angled-shapes');

				var $layout = null;

				$target.addClass('qodef-angled-shapes');

				$layout = $('<div class="qodef-angled-shape-left"><svg width="100%" viewBox="0 0 100 700" preserveAspectRatio="none"><polygon fill="' + settings['angled_shape_left_color'] + '" points="0 700 100 700 100 0 100 0 0 700"/></svg></div>').prependTo($target);
			}
		}
	};

})( jQuery );
