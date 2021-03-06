Package.describe({
  summary: "Database support for collaborative documents"
});

Package.on_use(function (api) {
  api.use(['coffeescript', 'underscore', 'logging', 'minimongo', 'util', 'assert', 'moment'], ['client', 'server']);

  api.export('Document');

  api.add_files([
    'stacktrace/stacktrace.js',
    'lib.coffee'
  ], 'client');

  api.add_files([
    'lib.coffee',
    'server.coffee'
  ], 'server');
});

Package.on_test(function (api) {
  api.use(['peerdb', 'tinytest', 'test-helpers', 'coffeescript', 'insecure', 'accounts-base', 'accounts-password', 'assert'], ['client', 'server']);
  api.add_files([
    'tests_defined.js',
    'tests.coffee'
  ], ['client', 'server']);

  api.add_files([
    'tests_migrations.coffee'
  ], 'server');
});
