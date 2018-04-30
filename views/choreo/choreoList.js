$(document).ready(function(){

  $('form').on('submit', function(e){

      e.preventDefault();

      var choreoName = $('form input');
      var list = [{choreoName: choreoName.val()}, {choreoSongName: choreoSongName.val()}, {choreoYear: choreoYear.val()}, {choreoYoutube: choreoYoutube.val()}];

      $.ajax({
        type: 'POST',
        url: '/choreo',
        data: list,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

$('p').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/choreo/' + choreoName,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
});