import Library from './library';

Library.log();

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  });
}
