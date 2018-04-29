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
        }
      });

      return false;

  });

$('#songEntry').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/song/' + songName,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

$('#buttonDelete').click(function(){
    alert('button clicked');

});

});