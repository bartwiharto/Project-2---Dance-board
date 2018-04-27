$(document).ready(function(){

  $('form').on('submit', function(e){

      e.preventDefault();

      var songName = $('form input');
      var list = [{artistName: artistName.val()}, {songName: songName.val()}, {songYear: songYear.val()}, {songYoutube: songYoutube.val()}];
      
      $.ajax({
        type: 'POST',
        url: '/song',
        data: list,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();

          // $('#outputSong').append(`<li>${data.songName}</li>`);
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var songs = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/song/' + songs,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});