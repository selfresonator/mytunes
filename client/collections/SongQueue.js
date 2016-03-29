// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //determine if the current song is the only song in the collection
      this.playFirst();
    
  },

  playFirst: function() {
    this.get('currentSong');
    this.trigger('play', this);
  }
  
});