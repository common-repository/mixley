<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html charset=iso-8859-1" name="viewport" content="width=device-width, initial-scale=1"></meta>
<title>Mixley Video Player</title>

<script type="text/javascript" src="../js/mxly-Widgets.js"></script>
<script type="text/javascript" src="../urls/mxly-urls.js"></script>
<link rel="stylesheet" type="text/css" href="../css/mxly-player-CSS.css"></link>
<link rel="stylesheet" type="text/css" href="../css/mxly-tabs-CSS.css"></link>

<link rel="icon" type="image/png" href="./images/rocketArtIcon.png" ></link>

<script type="text/javascript">
  var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);  
</script>

</head>

<body leftmargin="0" rightmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<div align="left"><img src="../images/Mixley3.png" width="83" height="25" alt="Mixley"></div>
<div id="player"></div>  

<ul id="tab_ul" class="tabs">
        <li id="pop-artists_page"></li>
        <li class="selected"><a rel="tab_div1" href="#" onclick="javascript:tab.ShowMyDiv(this);">Related Videos</a></li>
      
</ul>

<div class="tabcontent"  align="center" id="tab_div1" width="100%" style="display:block; height : 325px; background-color: white; overflow-y:scroll;">
<div id='putfeed' width ="100%" height ="325" align="center" valign="middle">

    <script type="text/javascript">
	   document.onload = mixleyController.jsmx_getRelatedVideo( <?php echo $_GET['id']; ?> );
	</script>

</div>
</div>

<script type="text/javascript">
 

	onYouTubeIframeAPIReady = function() {
		var player; 
		player = new YT.Player('player', {
			height: '390',
			width: '680',
			videoId: <?php echo $_GET['id']; ?>
	   //   events: {
		   // 'onReady': videoPlayerConsole.onPlayerReady,
		   // 'onStateChange': stateChange.onPlayerStateChange,
			//'onError': stateChange.onPlayerError
		//  }
	   })
	}
  
	tab = {
		ShowMyDiv:function(Obj){
		
			var elements = document.getElementsByTagName('div');
			for (var i = 0; i < elements.length; i++){ 
				if(elements[i].className=='tabcontent'){
					elements[i].style.display= 'none';
				}
	        }
			
		    document.getElementById(Obj.rel).style.display= 'block';
	//------------------------------------
	
			var ul_el = document.getElementById('tab_ul');
			var li_el = ul_el.getElementsByTagName('li');
			for (var i = 0; i < li_el.length; i++) {
				li_el[i].className="";
		    }
	
			Obj.parentNode.className="selected";
	   	}			 
					 
	} 
  
      
</script>  

</body>
</html>
