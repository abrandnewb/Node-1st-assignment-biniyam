import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies');
  this.route('authors', function() {
    this.route('detail',{path:'/:author_id'});
    this.route('edit',{path:'/edit/:author_id'});
    this.route('new');
  });
  this.route('blogs', function() {
    this.route('detail',{path:'/:blog_id'});
    this.route('edit',{path:'/edit/:blog_id'});
    this.route('comments', function() {
      this.route('new');
    });
    this.route('new');
  });
});

export default Router;
