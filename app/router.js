import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('debug');
  this.route('page1');
  this.route('page2');

  this.route('section1', function() {
    this.route('page1');
    this.route('page2');
    this.route('page3');
  });

  this.route('section2', function() {
    this.route('page1');
    this.route('page2');
  });
});
