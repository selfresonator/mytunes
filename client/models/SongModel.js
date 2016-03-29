// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function() {
    this.play();
  },

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
    // this.set('count',this.get('count')+1);
    // console.log(this.get('count'));
  },


  enqueue: function(){
    this.trigger('enqueue', this);
    // this.set('count', 0);
    console.log(this.get('count'));
    // this.trigger('enqueue', this.get('library').at('count'));
  },

  restore: function(){
  }

});
