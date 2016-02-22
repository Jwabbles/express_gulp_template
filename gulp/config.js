var publicAssets = "./public/assets";
var sourceFiles  = "./gulp/assets";

module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:8080/',
    browser: 'google chrome',
    files: ['./views/**']
  },
  sass: {
    files: sourceFiles + "/stylesheets/**/*",
    src: sourceFiles + "/stylesheets/styles.scss",
    dest: publicAssets + "/stylesheets",
    settings: {
      imagePath: '/assets/images'
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  },
  iconFont: {
    name: 'OTB Icon Font',
    src: sourceFiles + "/icons/*.svg",
    dest: publicAssets + '/fonts',
    sassDest: sourceFiles + '/stylesheets/base',
    template: './gulp/tasks/iconFont/template.scss',
    sassOutputName: 'iconFont.scss',
    fontPath: '/assets/fonts',
    className: 'icon',
    options: {
      fontName: 'otb-recruitment-icons',
      appendCodepoints: true,
      normalize: true,
      fontHeight: 1001
    }
  },
  browserify: {
    bundleConfigs: [{
      entries: sourceFiles + '/javascripts/global.js',
      dest: publicAssets + '/javascripts',
      outputName: 'global.js',
      extensions: ['.js']
    }]
  }
};
