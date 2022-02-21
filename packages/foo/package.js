Package.describe({
  name: 'local:foo',
  summary: 'Test package.',
  version: '1.0.0',
  git: '',
});

Package.onUse(function(api) {
  api.addFiles('foo.css', 'client');
  api.mainModule('foo.js', 'client', {
    lazy: true,
  });
});
