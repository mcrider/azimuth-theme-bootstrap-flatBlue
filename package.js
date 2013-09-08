Package.describe({
    summary: "Flat Blue theme for Azimuth CMS"
});

Package.on_use(function (api) {
  api.use(['bootstrap'], 'client');

  api.add_files([
    'theme/flatBlue.css',
    'theme/fonts.css'
  ], 'client');
});

