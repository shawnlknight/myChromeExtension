$(document).ready(function(){




  $.getJSON("http://www.reddit.com/r/news.json", function(json) {
    var post = json.data.children;
    var reddit = '';

     for(var i=0, l=post.length; i<l; i++) {
          var object = post[i].data;

          if(object.thumbnail === 'default' || object.thumbnail === 'nsfw' || object.thumbnail === 'self' || object.thumbnail === '')
            object.thumbnail = 'images/steve.jpg';


          reddit += '<img src="'+object.thumbnail+'" class="thumbImg">\n';
          reddit += '<div class="linkDetails"><a href="'+object.url+'" target="_blank"><div class="title">'+object.title+'</div></a>\n';

        }


        // Insert into DOM
        $(".posts").html(reddit);



  });


});