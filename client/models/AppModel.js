// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    // console.log(params)
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());


    params.library.on('play', function(song){
      console.log('what is song?', song);
      this.set('currentSong', song);
    }, this);
  }

});
