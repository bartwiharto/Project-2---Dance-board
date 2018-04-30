$(document).ready(function(){

  $('form').on('submit', function(e){

      e.preventDefault();

      var songName = $('form input');
      var list = [{teamName: teamName.val()}, {competition: competition.val()}, {teamYear: teamYear.val()}, {teamYoutube: teamYoutube.val()}];

      $.ajax({
        type: 'POST',
        url: '/team',
        data: list,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

$('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/team/' + teamName,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });
});