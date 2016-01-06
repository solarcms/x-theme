/*!
 * *************************************
 *    Author Tseegii Tselmeg   
 * *************************************
 * 
 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by n0m4dz on 12/29/15.
	 */
	__webpack_require__(2);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	//require('./configs/ui-jp.js');
	//require('./configs/ui-include.js');
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	// lazyload config
	var MODULE_CONFIG = {
	                  easyPieChart: ['../libs/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
	                  sparkline: ['../libs/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
	                  plot: ['../libs/jquery/flot/jquery.flot.js', '../libs/jquery/flot/jquery.flot.resize.js', '../libs/jquery/flot/jquery.flot.pie.js', '../libs/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js', '../libs/jquery/flot-spline/js/jquery.flot.spline.min.js', '../libs/jquery/flot.orderbars/js/jquery.flot.orderBars.js'],
	                  vectorMap: ['../libs/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', '../libs/jquery/bower-jvectormap/jquery-jvectormap.css', '../libs/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js', '../libs/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js'],
	                  dataTable: ['../libs/jquery/datatables/media/js/jquery.dataTables.min.js', '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js', '../libs/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
	                  footable: ['../libs/jquery/footable/dist/footable.all.min.js', '../libs/jquery/footable/css/footable.core.css'],
	                  screenfull: ['../libs/jquery/screenfull/dist/screenfull.min.js'],
	                  sortable: ['../libs/jquery/html.sortable/dist/html.sortable.min.js'],
	                  nestable: ['../libs/jquery/nestable/jquery.nestable.css', '../libs/jquery/nestable/jquery.nestable.js'],
	                  summernote: ['../libs/jquery/summernote/dist/summernote.css', '../libs/jquery/summernote/dist/summernote.js'],
	                  parsley: ['../libs/jquery/parsleyjs/dist/parsley.css', '../libs/jquery/parsleyjs/dist/parsley.min.js'],
	                  select2: ['../libs/jquery/select2/dist/css/select2.min.css', '../libs/jquery/select2-bootstrap-theme/dist/select2-bootstrap.min.css', '../libs/jquery/select2-bootstrap-theme/dist/select2-bootstrap.4.css', '../libs/jquery/select2/dist/js/select2.min.js'],
	                  datetimepicker: ['../libs/jquery/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css', '../libs/jquery/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.dark.css', '../libs/js/moment/moment.js', '../libs/jquery/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'],
	                  chart: ['../libs/js/echarts/build/dist/echarts-all.js', '../libs/js/echarts/build/dist/theme.js', '../libs/js/echarts/build/dist/jquery.echarts.js'],
	                  bootstrapWizard: ['../libs/jquery/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js']
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * google-material-color v1.2.6
	 * https://github.com/danlevan/google-material-color
	 */
	(function (root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    root.palette = factory();
	  }
	})(this, function () {
	  // avoid using lodash in dependencies
	  function keys(obj) {
	    var keys, key;

	    keys = [];

	    for (var key in obj) if (obj.hasOwnProperty(key)) {
	      keys.push(key);
	    }

	    return keys;
	  }

	  // avoid using lodash in dependencies
	  function random(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	  }

	  return {
	    palette: {
	      'red': {
	        '50': '#FFEBEE',
	        '100': '#FFCDD2',
	        '200': '#EF9A9A',
	        '300': '#E57373',
	        '400': '#EF5350',
	        '500': '#F44336',
	        '600': '#E53935',
	        '700': '#D32F2F',
	        '800': '#C62828',
	        '900': '#B71C1C',
	        'A100': '#FF8A80',
	        'A200': '#FF5252',
	        'A400': '#FF1744',
	        'A700': '#D50000'
	      },

	      'pink': {
	        '50': '#FCE4EC',
	        '100': '#F8BBD0',
	        '200': '#F48FB1',
	        '300': '#F06292',
	        '400': '#EC407A',
	        '500': '#E91E63',
	        '600': '#D81B60',
	        '700': '#C2185B',
	        '800': '#AD1457',
	        '900': '#880E4F',
	        'A100': '#FF80AB',
	        'A200': '#FF4081',
	        'A400': '#F50057',
	        'A700': '#C51162'
	      },

	      'purple': {
	        '50': '#F3E5F5',
	        '100': '#E1BEE7',
	        '200': '#CE93D8',
	        '300': '#BA68C8',
	        '400': '#AB47BC',
	        '500': '#9C27B0',
	        '600': '#8E24AA',
	        '700': '#7B1FA2',
	        '800': '#6A1B9A',
	        '900': '#4A148C',
	        'A100': '#EA80FC',
	        'A200': '#E040FB',
	        'A400': '#D500F9',
	        'A700': '#AA00FF'
	      },

	      'deep-purple': {
	        '50': '#EDE7F6',
	        '100': '#D1C4E9',
	        '200': '#B39DDB',
	        '300': '#9575CD',
	        '400': '#7E57C2',
	        '500': '#673AB7',
	        '600': '#5E35B1',
	        '700': '#512DA8',
	        '800': '#4527A0',
	        '900': '#311B92',
	        'A100': '#B388FF',
	        'A200': '#7C4DFF',
	        'A400': '#651FFF',
	        'A700': '#6200EA'
	      },

	      'indigo': {
	        '50': '#E8EAF6',
	        '100': '#C5CAE9',
	        '200': '#9FA8DA',
	        '300': '#7986CB',
	        '400': '#5C6BC0',
	        '500': '#3F51B5',
	        '600': '#3949AB',
	        '700': '#303F9F',
	        '800': '#283593',
	        '900': '#1A237E',
	        'A100': '#8C9EFF',
	        'A200': '#536DFE',
	        'A400': '#3D5AFE',
	        'A700': '#304FFE'
	      },

	      'blue': {
	        '50': '#E3F2FD',
	        '100': '#BBDEFB',
	        '200': '#90CAF9',
	        '300': '#64B5F6',
	        '400': '#42A5F5',
	        '500': '#2196F3',
	        '600': '#1E88E5',
	        '700': '#1976D2',
	        '800': '#1565C0',
	        '900': '#0D47A1',
	        'A100': '#82B1FF',
	        'A200': '#448AFF',
	        'A400': '#2979FF',
	        'A700': '#2962FF'
	      },

	      'light-blue': {
	        '50': '#E1F5FE',
	        '100': '#B3E5FC',
	        '200': '#81D4FA',
	        '300': '#4FC3F7',
	        '400': '#29B6F6',
	        '500': '#03A9F4',
	        '600': '#039BE5',
	        '700': '#0288D1',
	        '800': '#0277BD',
	        '900': '#01579B',
	        'A100': '#80D8FF',
	        'A200': '#40C4FF',
	        'A400': '#00B0FF',
	        'A700': '#0091EA'
	      },

	      'cyan': {
	        '50': '#E0F7FA',
	        '100': '#B2EBF2',
	        '200': '#80DEEA',
	        '300': '#4DD0E1',
	        '400': '#26C6DA',
	        '500': '#00BCD4',
	        '600': '#00ACC1',
	        '700': '#0097A7',
	        '800': '#00838F',
	        '900': '#006064',
	        'A100': '#84FFFF',
	        'A200': '#18FFFF',
	        'A400': '#00E5FF',
	        'A700': '#00B8D4'
	      },

	      'teal': {
	        '50': '#E0F2F1',
	        '100': '#B2DFDB',
	        '200': '#80CBC4',
	        '300': '#4DB6AC',
	        '400': '#26A69A',
	        '500': '#009688',
	        '600': '#00897B',
	        '700': '#00796B',
	        '800': '#00695C',
	        '900': '#004D40',
	        'A100': '#A7FFEB',
	        'A200': '#64FFDA',
	        'A400': '#1DE9B6',
	        'A700': '#00BFA5'
	      },

	      'green': {
	        '50': '#E8F5E9',
	        '100': '#C8E6C9',
	        '200': '#A5D6A7',
	        '300': '#81C784',
	        '400': '#66BB6A',
	        '500': '#4CAF50',
	        '600': '#43A047',
	        '700': '#388E3C',
	        '800': '#2E7D32',
	        '900': '#1B5E20',
	        'A100': '#B9F6CA',
	        'A200': '#69F0AE',
	        'A400': '#00E676',
	        'A700': '#00C853'
	      },

	      'light-green': {
	        '50': '#F1F8E9',
	        '100': '#DCEDC8',
	        '200': '#C5E1A5',
	        '300': '#AED581',
	        '400': '#9CCC65',
	        '500': '#8BC34A',
	        '600': '#7CB342',
	        '700': '#689F38',
	        '800': '#558B2F',
	        '900': '#33691E',
	        'A100': '#CCFF90',
	        'A200': '#B2FF59',
	        'A400': '#76FF03',
	        'A700': '#64DD17'
	      },

	      'lime': {
	        '50': '#F9FBE7',
	        '100': '#F0F4C3',
	        '200': '#E6EE9C',
	        '300': '#DCE775',
	        '400': '#D4E157',
	        '500': '#CDDC39',
	        '600': '#C0CA33',
	        '700': '#AFB42B',
	        '800': '#9E9D24',
	        '900': '#827717',
	        'A100': '#F4FF81',
	        'A200': '#EEFF41',
	        'A400': '#C6FF00',
	        'A700': '#AEEA00'
	      },

	      'yellow': {
	        '50': '#FFFDE7',
	        '100': '#FFF9C4',
	        '200': '#FFF59D',
	        '300': '#FFF176',
	        '400': '#FFEE58',
	        '500': '#FFEB3B',
	        '600': '#FDD835',
	        '700': '#FBC02D',
	        '800': '#F9A825',
	        '900': '#F57F17',
	        'A100': '#FFFF8D',
	        'A200': '#FFFF00',
	        'A400': '#FFEA00',
	        'A700': '#FFD600'
	      },

	      'amber': {
	        '50': '#FFF8E1',
	        '100': '#FFECB3',
	        '200': '#FFE082',
	        '300': '#FFD54F',
	        '400': '#FFCA28',
	        '500': '#FFC107',
	        '600': '#FFB300',
	        '700': '#FFA000',
	        '800': '#FF8F00',
	        '900': '#FF6F00',
	        'A100': '#FFE57F',
	        'A200': '#FFD740',
	        'A400': '#FFC400',
	        'A700': '#FFAB00'
	      },

	      'orange': {
	        '50': '#FFF3E0',
	        '100': '#FFE0B2',
	        '200': '#FFCC80',
	        '300': '#FFB74D',
	        '400': '#FFA726',
	        '500': '#FF9800',
	        '600': '#FB8C00',
	        '700': '#F57C00',
	        '800': '#EF6C00',
	        '900': '#E65100',
	        'A100': '#FFD180',
	        'A200': '#FFAB40',
	        'A400': '#FF9100',
	        'A700': '#FF6D00'
	      },

	      'deep-orange': {
	        '50': '#FBE9E7',
	        '100': '#FFCCBC',
	        '200': '#FFAB91',
	        '300': '#FF8A65',
	        '400': '#FF7043',
	        '500': '#FF5722',
	        '600': '#F4511E',
	        '700': '#E64A19',
	        '800': '#D84315',
	        '900': '#BF360C',
	        'A100': '#FF9E80',
	        'A200': '#FF6E40',
	        'A400': '#FF3D00',
	        'A700': '#DD2C00'
	      },

	      'brown': {
	        '50': '#EFEBE9',
	        '100': '#D7CCC8',
	        '200': '#BCAAA4',
	        '300': '#A1887F',
	        '400': '#8D6E63',
	        '500': '#795548',
	        '600': '#6D4C41',
	        '700': '#5D4037',
	        '800': '#4E342E',
	        '900': '#3E2723'
	      },

	      'grey': {
	        '50': '#FAFAFA',
	        '100': '#F5F5F5',
	        '200': '#EEEEEE',
	        '300': '#E0E0E0',
	        '400': '#BDBDBD',
	        '500': '#9E9E9E',
	        '600': '#757575',
	        '700': '#616161',
	        '800': '#424242',
	        '900': '#212121'
	      },

	      'blue-grey': {
	        '50': '#ECEFF1',
	        '100': '#CFD8DC',
	        '200': '#B0BEC5',
	        '300': '#90A4AE',
	        '400': '#78909C',
	        '500': '#607D8B',
	        '600': '#546E7A',
	        '700': '#455A64',
	        '800': '#37474F',
	        '900': '#263238'
	      },

	      'black': {
	        '500': '#000000',
	        'Text': 'rgba(0,0,0,0.87)',
	        'Secondary Text': 'rgba(0,0,0,0.54)',
	        'Icons': 'rgba(0,0,0,0.54)',
	        'Disabled': 'rgba(0,0,0,0.26)',
	        'Hint Text': 'rgba(0,0,0,0.26)',
	        'Dividers': 'rgba(0,0,0,0.12)'
	      },

	      'white': {
	        '500': '#ffffff',
	        'Text': '#ffffff',
	        'Secondary Text': 'rgba(255,255,255,0.7)',
	        'Icons': '#ffffff',
	        'Disabled': 'rgba(255,255,255,0.3)',
	        'Hint Text': 'rgba(255,255,255,0.3)',
	        'Dividers': 'rgba(255,255,255,0.12)'
	      }

	    },

	    get: function (color, shade) {
	      return this.palette[color][shade || '500'];
	    },

	    find: function (color) {
	      var colors = color.split('-'),
	          color,
	          shade = 500;

	      if (colors.length == 3) {
	        color = colors[0] + '-' + colors[1];
	        shade = colors[2];
	      }
	      if (colors.length == 2) {
	        if (colors[1].indexOf('0') > 0) {
	          color = colors[0];
	          shade = colors[1];
	        } else {
	          color = colors[0] + '-' + colors[1];
	        }
	      }
	      return this.get(color, shade);
	    },

	    random: function (shade) {
	      var colors, color, shades;

	      colors = keys(this.palette);
	      color = colors[random(0, colors.length - 1)];

	      if (shade == null) {
	        shades = keys(color);
	        shade = shades[random(0, shades.length - 1)];
	      }

	      return this.get(color, shade);
	    }
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {
	/**
	 * 0.1.0
	 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
	 * 
	 * @ flatfull.com All Rights Reserved.
	 * Author url: http://themeforest.net/user/flatfull
	 */
	var uiLoad = uiLoad || {};

	(function ($, $document, uiLoad) {
		"use strict";

		var loaded = [],
		    promise = false,
		    deferred = $.Deferred();

		/**
	  * Chain loads the given sources
	  * @param srcs array, script or css
	  * @returns {*} Promise that will be resolved once the sources has been loaded.
	  */
		uiLoad.load = function (srcs) {
			srcs = $.isArray(srcs) ? srcs : srcs.split(/\s+/);
			if (!promise) {
				promise = deferred.promise();
			}

			$.each(srcs, function (index, src) {
				promise = promise.then(function () {
					return src.indexOf('.css') >= 0 ? loadCSS(src) : loadScript(src);
				});
			});
			deferred.resolve();
			return promise;
		};

		/**
	  * Dynamically loads the given script
	  * @param src The url of the script to load dynamically
	  * @returns {*} Promise that will be resolved once the script has been loaded.
	  */
		var loadScript = function (src) {
			if (loaded[src]) return loaded[src].promise();

			var deferred = $.Deferred();
			var script = $document.createElement('script');
			script.src = src;
			script.onload = function (e) {
				deferred.resolve(e);
			};
			script.onerror = function (e) {
				deferred.reject(e);
			};
			$document.body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise();
		};

		/**
	  * Dynamically loads the given CSS file
	  * @param href The url of the CSS to load dynamically
	  * @returns {*} Promise that will be resolved once the CSS file has been loaded.
	  */
		var loadCSS = function (href) {
			if (loaded[href]) return loaded[href].promise();

			var deferred = $.Deferred();
			var style = $document.createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				deferred.resolve(e);
			};
			style.onerror = function (e) {
				deferred.reject(e);
			};
			$document.head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise();
		};
	})(jQuery, document, uiLoad);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
	    "use strict";

	    // Checks for ie

	    var isIE = !!navigator.userAgent.match(/MSIE/i) || !!navigator.userAgent.match(/Trident.*rv:11\./);
	    isIE && $('body').addClass('ie');

	    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
	    var ua = window['navigator']['userAgent'] || window['navigator']['vendor'] || window['opera'];
	    /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(ua) && $('body').addClass('smart');
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
		"use strict";

		$(document).on('blur', 'input, textarea', function (e) {
			$(this).val() ? $(this).addClass('has-value') : $(this).removeClass('has-value');
		});
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
	  "use strict";

	  $(document).on('click', '[ui-nav] a', function (e) {
	    var $this = $(e.target),
	        $active,
	        $li;
	    $this.is('a') || ($this = $this.closest('a'));

	    $li = $this.parent();
	    $active = $li.siblings(".active");
	    $li.toggleClass('active');
	    $active.removeClass('active');
	  });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
		"use strict";

		//uiLoad.load('../libs/jquery/screenfull/dist/screenfull.min.js');

		$(document).on('click', '[ui-fullscreen]', function (e) {
			e.preventDefault();
			if (screenfull.enabled) {
				screenfull.toggle();
			}
		});
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
		"use strict";

		$.extend(jQuery.easing, {
			def: 'easeOutQuad',
			easeInOutExpo: function (x, t, b, c, d) {
				if (t == 0) return b;
				if (t == d) return b + c;
				if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
				return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
			}
		});

		$(document).on('click', '[ui-scroll-to]', function (e) {
			e.preventDefault();
			var target = $('#' + $(this).attr('ui-scroll-to'));
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 600, 'easeInOutExpo');
		});
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
		"use strict";

		$(document).on('click', '[ui-toggle-class]', function (e) {
			e.preventDefault();
			var $this = $(e.target);
			$this.attr('ui-toggle-class') || ($this = $this.closest('[ui-toggle-class]'));
			var classes = $this.attr('ui-toggle-class').split(','),
			    targets = $this.attr('ui-target') && $this.attr('ui-target').split(',') || $this.attr('target') && $this.attr('target').split(',') || Array($this),
			    key = 0;
			$.each(classes, function (index, value) {
				var target = $(targets[targets.length && key]),
				    current = target.attr('ui-class'),
				    _class = classes[index];

				current != _class && target.removeClass(target.attr('ui-class'));
				target.toggleClass(classes[index]);
				target.attr('ui-class', _class);
				key++;
			});
			$this.toggleClass('active');
		});
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }
]);