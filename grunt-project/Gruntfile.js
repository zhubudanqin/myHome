/*global module:false*/
module.exports = function(grunt) {
	grunt.file.defaultEncoding = 'utf8';
	// Project configuration.
	var req = {
		options: {
			baseUrl: 'app',
			optimize: "none",
			mainConfigFile: 'app/main.js',
			paths: grunt.file.readJSON('app/config/exclude.json')

		}
	};
	//var requireJsModules = [];
	grunt.file.expand({
		cwd: "app/action"
	}, "**/*.js").forEach(function(file) {
		//if (file !== 'jQuery.js') {
		//requireJsModules.push('action/' + file.replace(/\.js$/, ''));
		var fileName = file.replace(/\.js$/, '');
		req[fileName] = {
			options: {
				name: 'action/' + fileName,
				out: '<%=project.pkgDir%>/js/' + file,
				include: ['main']
			}
		};
		//}
	});
	grunt.file.expand({
		cwd: ".tmp/css"
	}, "*.css").forEach(function(file) {
		var fileName = file.replace(/\.css$/, '');
		req[fileName+'-css'] = {
			options: {
				optimizeCss: 'standard',
				cssIn: ".tmp/css/"+file,
				out: ".tmp/css/"+file
			}
		};
	});

	grunt.initConfig({
		project: grunt.file.readJSON('app/config/project.json'),
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		/**压缩文件配置*/
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			page: {
				files: [{
					expand: true,
					/**需要处理的文件（input）所在的目录*/
					cwd: '<%=project.pkgDir%>/',
					/**需要处理的文件*/
					src: ['js/*.js', '!*.min.js'],
					/**处理后的文件名或所在目录*/
					dest: '<%=project.pkgDir%>/',
					ext: '.js'
				}]
			}
		},
		/**css压缩*/
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%=project.pkgDir%>/css/',
					src: ['*.css', '!*.min.css'],
					dest: '<%=project.pkgDir%>/css',
					ext: '.css'
				}]
			}
		},
		/**清空文件夹*/
		clean: {
			build: ["<%=project.pkgDir%>/"],
			testjs: ["<%=project.pkgDir%>/*.js"],
			js: ["<%=project.pkgDir%>/js/", "<%=project.pkgDir%>/js/"],
			css: ["<%=project.pkgDir%>/css/", "<%=project.pkgDir%>/css/", "<%=project.pkgDir%>/images/"],
			release: ["<%=project.pkgDir%>/"],
			resource: ["<%=project.pkgDir%>/"]
		},
		/**监视文件的变动执行对于的task*/
		watch: {
			js: {
				files: ['app/**/*.js'],
				tasks: [ 'newer:clean:js', 'requirejs', 'replace:js','newer:jshint']
			},
			css: {
				files: 'page/css/**/*.less',
				tasks: ['less','sprite' /*,'copy'*/ ],
				options: {
					livereload: true
				}
			},
			test:{
				files:['app/**/*.js','page/**/*.*'],
				task:['clean', 'less', 'concat', 'copy:test', 'sprite', 'requirejs', 'replace:test', 'replace:testcss', 'replace:js', 'jshint','clean:testjs']
			}
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'page/images/',
					src: '**/*.*',
					dest: '<%=project.pkgDir%>/images/'
				}, {
					expand: true,
					cwd: '../',
					src: 'lib/ui/**/*.*',
					dest: 'app/'
				}, {
                    expand: true,
                    cwd: '../',
                    src: 'lib/css/**/*.*',
                    dest: 'page/css'
                },{
                	expand: true,
					cwd: 'page/font/',
					src: '*',
					dest: '<%=project.pkgDir%>/font/'
                }]
			},
			build: {
				files: [{
					expand: true,
					cwd: 'page/',
					src: ['images/**/*.*'],
					dest: '<%=project.pkgDir%>/'
				},{
                    expand: true,
                    cwd: 'app/',
                    src: 'view/**/*',
                    dest: '<%=project.pkgDir%>/'
                }]
			},
			test: {
				files: [{
					expand: true,
					cwd: 'page/',
					src: ['*.php', '*.html', 'template/**/*.*', 'images/**/*.*','font/*.*'],
					dest: '<%=project.pkgDir%>/'
				}, {
					expand: true,
					cwd: '<%=project.pkgDir%>/',
					src: ['**/*.js'],
					dest: '<%=project.pkgDir%>/js/'
				}, {
                    expand: true,
                    cwd: '../',
                    src: 'lib/css/**/*.*',
                    dest: 'page/css'
                }, {
                    expand: true,
                    cwd: '../',
                    src: 'lib/ui/**/*.*',
                    dest: 'app/'
                },{
                    expand: true,
                    cwd: 'app/',
                    src: 'view/**/*',
                    dest: '<%=project.pkgDir%>/'
                }]
			}
		},
		concat: {
			js: {
				options: {
					separator: '' //,
						//banner:'(function($){\n',
						//footer:'})(jQuery);'
				},
				files: grunt.file.readJSON('app/config/merge.json')
			}
		},
		less: {
			build: {
				options: {
					paths: ["page/css"]
				},
				files: grunt.file.readJSON('page/merge.json')
			}
		},
		usemin: {
			html: 'page/about.php',
			options: {
				//assetsDirs: ['page/css/'],
				/*patterns: [
					[/(\/img\/[\/\w-]+\.png)/, 'replace image in js']
				]*/
			}
		},
		replace: {
			all: {
				src: ['<%=project.pkgDir%>/**/*.html', '<%=project.pkgDir%>/**/*.php'],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: /=\"\/?(img\/.*\.(?:css|jpg|gif|png|js|ico){1})/g,
					to: "=\"<%=project.static.proUrl %>/<%=project.slotPro%><%=project.package%>/$1"
				}, {
					from: /\$page=(?:\'|\")(\w+)(?:\'|\")/g,
					to: "$page='<%=project.static.proUrl %>/<%=project.slotPro%><%=project.package%>/js/$1'"
				}, {
					from: /\$debug\s?=\s?true/g,
					to: "$debug=0"
				}, {
					from: /(\$baseCssUrl\s?=\s?)'(\w|\/|\.)*'/g,
					to: "$1'<%=project.static.proUrl %>/<%=project.slotPro%><%=project.package%>/css/'"
				}, {
					from: /(\$baseJsUrl\s?=\s?)'(\w|\/)*'/g,
					to: "$1'<%=project.static.proUrl %>/'"
				}]
			},
			css: {
				src: '<%=project.pkgDir%>/**/*.css',
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: /url\(\s?(?:\"|\')?(\.)*\/img\/((?:\w+\/)*(?:\w|\-|\_)+\.(?:jpg|png|ico|svg|gif){1})\s?(?:\"|\')?\)/g,
					to: 'url("<%=project.static.proUrl %>/<%=project.slotPro%><%=project.package%>/images/$2?v=<%= new Date().getTime() %>")'
				}]
			},
			js: {
				src: ['<%=project.pkgDir%>/**/*.js', '<%=project.pkgDir%>/**/*.js'],
				overwrite: true,
				replacements: [{
					from: /\s*define\(\"\w+\".*function\(\)\{\}\)\;/g,
					to: ""
				}]
			},
			test: {
				src: ['<%=project.pkgDir%>/**/*.html', '<%=project.pkgDir%>/**/*.php'],
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: /=\"\/?(img\/.*\.(?:css|jpg|gif|png|js|ico){1})/g,
					to: "=\"<%=project.static.testUrl %>/<%=project.slotTest%><%=project.package%>/$1"
				}, {
					from: /\$page=(?:\'|\")(\w+)(?:\'|\")/g,
					to: "$page='<%=project.static.testUrl %>/<%=project.slotTest%><%=project.package%>/js/$1'"
				}, {
					from: /\$debug\s?=\s?true/g,
					to: "$debug=0"
				}, {
					from: /(\$baseCssUrl\s?=\s?)'(\w|\/|\.)*'/g,
					to: "$1'<%=project.static.testUrl %>/<%=project.slotTest%><%=project.package%>/css/'"
				}, {
					from: /(\$baseJsUrl\s?=\s?)'(\w|\/)*'/g,
					to: "$1'<%=project.static.testUrl %>/<%=project.slotTest%>'"
				}]
			},
			testcss: {
				src: '<%=project.pkgDir%>/**/*.css',
				overwrite: true, // overwrite matched source files
				replacements: [{
					from: /url\(\s?(?:\"|\')?(\.)*\/img\/((?:\w+\/)*(?:\w|\-|\_)+\.(?:jpg|png|ico|svg|gif){1})\s?(?:\"|\')?\)/g,
					to: 'url("<%=project.static.testUrl %>/<%=project.slotTest%><%=project.package%>/images/$2?v=<%= new Date().getTime() %>")'
				}]
			},
            dev: {
                src: ['<%=project.pkgDir%>/**/*.html', '<%=project.pkgDir%>/**/*.php'],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: /=\"\/?(img\/.*\.(?:css|jpg|gif|png|js|ico){1})/g,
                    to: "=\"<%=project.static.devUrl %>/<%=project.slotDev%><%=project.package%>/$1"
                }, {
                    from: /\$page=(?:\'|\")(\w+)(?:\'|\")/g,
                    to: "$page='<%=project.static.devUrl %>/<%=project.slotDev%><%=project.package%>/js/$1'"
                }, {
                    from: /\$debug\s?=\s?true/g,
                    to: "$debug=0"
                }, {
                    from: /(\$baseCssUrl\s?=\s?)'(\w|\/|\.)*'/g,
                    to: "$1'<%=project.static.devUrl %>/<%=project.slotDev%><%=project.package%>/css/'"
                }, {
                    from: /(\$baseJsUrl\s?=\s?)'(\w|\/)*'/g,
                    to: "$1'<%=project.static.devUrl %>/<%=project.slotDev%>'"
                }]
            },
            devcss: {
                src: '<%=project.pkgDir%>/**/*.css',
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: /url\(\s?(?:\"|\')?(\.)*\/img\/((?:\w+\/)*(?:\w|\-|\_)+\.(?:jpg|png|ico|svg|gif){1})\s?(?:\"|\')?\)/g,
                    to: 'url("<%=project.static.devUrl %>/<%=project.slotDev%><%=project.package%>/images/$2?v=<%= new Date().getTime() %>")'
                }]
            }
		},
		jshint: {
			all: {
				src: [
					"app/**/*.js",
					//"resource/js/*.js",
					"Gruntfile.js"
				]
			},
			options: {
				jshintrc: '.jshintrc'
			}
		},
		ftpscript: {
			main: {
				options: {
					host: '120.26.51.183',
					port: 22,
					ftpCommand: 'SFTP',
					passive: true,
					mkdirs: true
				},
				files: [{
					expand: true,
					cwd: '<%=project.pkgDir%>/',
					src: ['**\/*.*'],
					dest: '/var/www/webresource/<%=project.slotTest%>/<%=project.package%>/'
				}]
			}
		},
		//sftpCredentials: grunt.file.readJSON('sftp-credentials.json'),
		'sftp-deploy': {
            test: {
                auth: {
					host: '10.0.18.205',
					port: 22,
					authKey: '10.0.18.205'
                },
                cache: 'sftpCache.json',
                src: '<%=project.pkgDir%>/',
                dest: '/var/www/html/<%=project.slotTest%><%=project.package%>/',
                exclusions: ['<%=project.pkgDir%>/**/.DS_Store', '<%=project.pkgDir%>/**/Thumbs.db'],
                serverSep: '/',
                concurrency: 4,
                progress: true
            },
			dev: {
				auth: {
					host: '10.0.18.205',
					port: 22,
					authKey: '10.0.18.205'
				},
				cache: 'sftpCache.json',
				src: '<%=project.pkgDir%>/',
				dest: '/var/www/html/<%=project.slotDev%><%=project.package%>/',
				exclusions: ['<%=project.pkgDir%>/**/.DS_Store', '<%=project.pkgDir%>/**/Thumbs.db'],
				serverSep: '/',
				concurrency: 4,
				progress: true
			},
            pro:{
                auth: {
                    host: '10.0.18.205',
                    port: 22,
                    authKey: '10.0.18.205'
                },
                cache: 'sftpCache.json',
                src: '<%=project.pkgDir%>/',
                dest: '/var/www/html/<%=project.package%>/',
                exclusions: ['<%=project.pkgDir%>/**/.DS_Store', '<%=project.pkgDir%>/**/Thumbs.db'],
                serverSep: '/',
                concurrency: 4,
                progress: true
            }
		},
		sprite: {
			options: {
				// sprite背景图源文件夹，只有匹配此路径才会处理，默认 images/slice/
				imagepath: '<%=project.pkgDir%>/images/sprite/',
				// 映射CSS中背景路径，支持函数和数组，默认为 null
				imagepath_map: null,
				// 雪碧图输出目录，注意，会覆盖之前文件！默认 images/
				spritedest: '<%=project.pkgDir%>/images/',
				// 替换后的背景路径，默认为 file.dest 和 spritedest 的相对路径
				spritepath: null,
				// 各图片间间距，如果设置为奇数，会强制+1以保证生成的2x图片为偶数宽高，默认 0
				padding: 2,
				// 是否使用 image-set 作为2x图片实现，默认不使用
				useimageset: false,
				// 是否以时间戳为文件名生成新的雪碧图文件，如果启用请注意清理之前生成的文件，默认不生成新文件
				newsprite: false,
				// 给雪碧图追加时间戳，默认不追加
				spritestamp: false,
				// 在CSS文件末尾追加时间戳，默认不追加
				cssstamp: true,
				// 默认使用二叉树最优排列算法
				algorithm: 'binary-tree',
				// 默认使用`pixelsmith`图像处理引擎
				engine: 'pixelsmith'
			},
			autoSprite: {
				files: [{
					// 启用动态扩展
					expand: true,
					// css文件源的文件夹
					cwd: '<%=project.pkgDir%>/css/',
					// 匹配规则
					src: '*.css',
					// 导出css和sprite的路径地址
					dest: '<%=project.pkgDir%>/css/',
					// 导出的css名
					ext: '.css'
				}]
			}
		},
		requirejs: req
			/*sftp: {
			    deploy: {
			        files: {
			            "./": "deploy/**"
			        },
			        options: {
			            "path": "<%= sftpCredentials.path %>",
			            "host": "<%= sftpCredentials.host %>",
			            "username": "<%= sftpCredentials.username %>",
			            "port": "<%= sftpCredentials.port %>",
			            "password": "<%= sftpCredentials.password %>",
			            "srcBasePath": "deploy/",
			            "createDirectories": true
			        }
			    }
			}*/
	});
	/**
	  ftpscript的用户名和密码是放在跟gruntfile.js同目录下.ftppass文件里面，具体格式为：
	  {
	    "ftp.server.host": {
	      "username": "username1",
	      "password": "password1"
	    },
	    "authKey":{
	      "username": "username2",
	      "password": "password2"
	    }
	  }    
	*/
	/**
	  时间戳和文件中url替换模块
	  grunt-rev 和 grunt-usemin   contrib-imagemin(图片压缩)
	*/
	//输出进度日志
	/*grunt.event.on('watch', function(action, filepath, target) {
		grunt.log.writeln(target + ': ' + '文件: ' + filepath + ' 变动状态: ' + action);
	});*/
	//grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	//grunt.loadNpmTasks('grunt-ftpscript');
	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-usemin');
	//grunt.loadNpmTasks('grunt-css-import');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-sftp-deploy');
	grunt.loadNpmTasks('grunt-css-sprite');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

    //监听页面是否发生变化执行生成操作
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('w', ['watch']);
    //生成线上代码
    grunt.registerTask('build', ['clean', 'less', 'concat', 'requirejs', 'copy:build', 'sprite', 'replace:css', 'replace:js', 'uglify'/*, 'sftp-deploy:build','clean:resource'*/]);
    //本地less编译调试
    grunt.registerTask('release:css', ['clean:css', 'less', 'copy:main','sprite']);
    //生成dev环境包
    grunt.registerTask('dev', ['clean', 'less', 'concat', 'copy:test', 'sprite', 'requirejs', 'replace:dev', 'replace:devcss', 'replace:js', 'jshint','clean:testjs']);
    //生成测试环境包
    grunt.registerTask('test', ['clean', 'less', 'concat', 'copy:test', 'sprite', 'requirejs', 'replace:test', 'replace:testcss', 'replace:js', 'clean:testjs']);
    //清除文件
    grunt.registerTask('clear', ['clean']);
    //上传测试环境
    grunt.registerTask('upload', ['sftp-deploy:pro']);
    grunt.registerTask('commit', ['sftp-deploy:dev']);
    grunt.registerTask('commit:dev', ['sftp-deploy:dev']);
    grunt.registerTask('commit:test', ['sftp-deploy:test']);
    grunt.registerTask('commit:pro', ['sftp-deploy:pro']);
    //合并页面级文件
    grunt.registerTask('require', ['requirejs']);
    //检查代码规范
    grunt.registerTask('check', ['jshint']);
    //压缩js
    grunt.registerTask('jsmin', ['uglify']);
};