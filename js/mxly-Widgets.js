
/**
 *  These javascripts pages contains 5 javascript classes/methods: Classes 
 *  mixleyController, class mixleyWidgetView, class Mxly_urlpaths, class Mxly_Secure_Input, Mxly_Secure_Out, method httpRequest(AJAX), .
 *  The classes mixleyController and httpRequest handle the query input to remote server, the 
 *  class mixleyWidgetsView handles the HTML output display  of the feeds and any error 
 *  that occur. The method 'httpRequest' used in AJAX progrtamming is a parent of the 
 *  class mixleyController and these two items control the transfer of data from client
 *  to remote server and the types of data that is transfer between remote servers. The Class 
 *  'mixleyWidgetsView' contains the 'DOM' it responsible for inserting the HTML and the css displays.
 *
 * @summary    This javascripts page contains 5 javascript classes/methods: Classes mixleyController, class mixleyWidgetView, httpRequest.
 *             class Mxly_urlpaths, class Mxly_Secure_Input, class Mxly_Secure_Out.
 *             The classes handle the query input to mixley, the HTML output display of the feeds and any error that occur.
 *
 * @link       URL
 * @since      1.x.x 
 * @requires   n/a
 * @class      mixleyController, httpRequest, class mixleyWidgetView
 * @classdesc  These classes containing the methods needed to accept queries and retrieve feeds from the remote Server.
 * @class      mixleyWidgetsView
 * @classdesc  A class contain the methods needed to output feed retrieved from the remote Servers to output to the page in HTML form.
 *             These classes contain the methods needed to output feed thats been 'escaped' from the remote Servers to output to the page in HTML form.
 * @class      class Mxly_urlpaths, class Mxly_Secure_Input, class Mxly_Secure_Out.
 * @classdesc  class Mxly_urlpaths contains the urls that are 'dynamically obtained' to avoid hard coded urls.
 *             
 */
 
/**
 * @summary   The method 'httpRequest' used in AJAX preogramming to allow the transfer of data from client to remote server..      
 *
 * @since      1.x.x
 * @access     private
 *
 * @see        class mixleyController, httpRequest.
 * @link       URL
 *
 * @param      n/a.
 * @return     type (httprequest object) xmlhttp.
 */ 

 
	jsmx_httpRequest = function(){	
	
		  
		  if( window.XMLHttpRequest ){
				
				  jsmx_xmlhttp = new XMLHttpRequest();
			   
				 if( null != jsmx_xmlhttp.overrideMimeType ){  
			   
					  jsmx_xmlhttp.overrideMimeType("application/json");
				 
				 }
			   
		  }
			
		  else if( null != window.XDomainRequest ){
				
				  jsmx_xmlhttp = new XDomainRequest();
			   
		 }else{
				
				  jsmx_xmlhttp = false;
			   
		 }
		
	}


 /**
 * @summary    Class mixleyController used to connect with 'httpRequest' and to return the variety of different feeds from a remote server.
 *
 * Long.       Class mixleyController used to connect with mixley server and to return the required feeds.
 *
 * @since      1.x.x
 * @see        class mixleyController
 * @link       URL
 *
 * @param      n/a.
 * @return     type Description.
 */
 
		var mixleyController = {
			
		  
	   /**
		 * @summary    The methods accepts one variable(artist name) and returns an artist's top track feed.      
		 *
		 * @since      1.x.x
		 * @see        class mixleyController(), getTrackResponse(), getMusicWidgetFeed
		 * @link       URL
		 *
		 * @param      (string) topic - artist name.
		 * @return     type n/a.
		 */
		  
		  
			  jsmx_getTracksResponse : function ( topic ){
					   
					 var state='';
						
					 state =  '?toptracks=' + topic; 
					   
					 this.jsmx_getMusicWidgetFeed( 'searchTopTracksbyCORS.php', state );	
					   
			  },
		  
			/**
			 * @summary    The methods accepts two variable artist name and track name and uses it to query remote server for a video feed.    
			 *
			 * @since      1.x.x
			 * @see        class mixleyController(), getVideoFeed(), getMusicWidgetFeed
			 * @link       URL
			 *
			 * @param     (string) artist - artist name, 
			 * @param     (string) topic - track name.
			 * @return    type n/a
			 */
		
			  jsmx_getVideoFeed : function( artist, topic ){
					  
					 var state='';
				   
					 state = '?q=' + artist + '&mainq=' + topic; 
				   
					 this.jsmx_getMusicWidgetFeed( 'searchVideosbyCORS.php', state );	  
			  },
		  
		 
			/**
			 * @summary    The method accepts query containing a particular music genre ie. Disco, Hip Hop, Rap  and will return a top artists feed for that Genre. 
			 *
			 * @since      1.x.x
			 * @see        class mixleyController(), getTopArtistsByGenre(), getMusicWidgetFeed
			 * @link       URL
			 *
			 * @param      type (string) tag - genre category.
			 * @return     type n/a.
			 */
		
		 
			  jsmx_getTopArtistsbyGenre : function ( tag ){
					  
					 var state='';
					   
					 state = '?tag=' +  tag; 
					   
					 this.jsmx_getMusicWidgetFeed( 'searchTopArtistbyCORS.php', state );	
					   
			  },
			   
		
		 
			/**
			 * @summary    The method accepts no query from user and returns a 'current' top artists feed. 
			 *
			 * @since      1.x.x
			 *
			 * @see        class mixleyController(), getTopArtists(), getMusicWidgetFeed
			 * @link       URL
			 *
			 * @param      type (string) tag - artistCharts (default).
			 * @return     type n/a.
			 */
		
		
			  jsmx_getTopArtists : function ( ){
					  
					 var state='';
					  
					 state = '?tag=artistChart'; 
					  
					 this.jsmx_getMusicWidgetFeed( 'searchArtistChartsbyCORS.php', state );	   	 
					  
			  },
			 
			/**
			 * @summary    This method accepts a videoId and return a video feed of video most related to the particular video.
			 *
			 * @since      1.x.x
			 *
			 * @see        class mixleyController(), getRelatedVideo(), getMusicWidgetFeed
			 * @link       URL
			 *
			 * @param      type (string) videoId - video identifer of a video.
			 * @param      type (string) page - n/a.
			 * @param      type (string) token - n/a.
			 * @return     type n/a.
			 */
		
		
			  jsmx_getRelatedVideo : function( videoId ){
					   
					 var state = '?relatedToVideoId=' +  videoId   + '&page=1'  + '&pageToken=""';
				   
					 this.jsmx_getMusicWidgetFeed( 'relatedVideosbyCORS.php', state );
					   
			  },
			  
			/**
			 * @summary    This Method 'getMusicWidgetFeed' used to connect with mixley server and to return the required feeds.
			 *
			 * @since      1.x.x
			 * @access     private
			 *
			 * @class      Class mixleyController
			 * @augments   n/a
			 *
			 * @see        Class mixleyController, Class mixleyWidgetsView
			 * @link       URL
			 *
			 * @fires      target:event xmlhttp.send - send request to mixley server
			 * @listens    target:event xmlhttp.onreadystatechange - awaits response feed from mixley server
			 *
			 * @param      type (string) file - The file path to the mixley server php page that will render the json feed. 
			 * @param      type (string) state - the parameters (variables) sent as query.
			 * @return     type a JSON encoded Feed
			 */
		
		 
			  jsmx_getMusicWidgetFeed : function( file, state ){
					  
					 var url, feed, file, state; 
					
					 url = Mxly_urlpaths.jsmx_mixleycalls_url( file, state );
					 
					 jsmx_xmlhttp.open( 'GET', url, true );  
					 
					 jsmx_xmlhttp.send( null ); 
				 
					 jsmx_xmlhttp.onreadystatechange = function( ){
						 
						if( 4 == jsmx_xmlhttp.readyState && 200 == jsmx_xmlhttp.status ){
						
							  try{ 
								 feed = JSON.parse( jsmx_xmlhttp.responseText );
								
								 switch( file ){
								 
									   case 'searchTopTracksbyCORS.php' : 
										     mixleyWidgetsView.jsmx_lastfm_feed_response( feed );  
										     break;
										   
									   case 'searchTopArtistbyCORS.php' :
									   case 'searchArtistChartsbyCORS.php' :
										     mixleyWidgetsView.jsmx_topartist_feed_response( feed );
										     break;
										   
									   case 'relatedVideosbyCORS.php' :	
										     mixleyWidgetsView.jsmx_youtube_relatedvideo_feed( feed );
										     break;  
									
										   
									   default:
										     mixleyWidgetsView.jsmx_youtube_feed_response( feed ); 
												
									}
								 
							 }catch(e){ 
							  
								 Mxly_Feed_Exceptions.jsmx_get_error_handle( );
							 
							}
							  
						}
					   
					}
					
			  }
			  
	}
	
	/**
	 * @summary    A prototype for the class mixleyController to inherit the 'httpRequest' method.     
	 *
	 * @since      1.x.x
	 *
	 * @class      mixleyController
	 * @augments   httpRequest()
	 *
	 * @see        httpRequest(), mixleyController
	 * @link       URL
	 *
	 * @param      type n/a.
	 * @return     type httpRequest object.
	 */


	mixleyController.jsmx_getMusicWidgetFeed.prototype = new jsmx_httpRequest();
		
	/**
	 * @summary    The Class 'mixleyWidgetsView', when called, will output all items that requires HTML on the page.
	 *      
	 * @since      1.x.x
	 *
	 * @class      Class mixleyWidgetsView
	 * @augments 
	 *
	 * @see        Class mixleyController
	 * @link       URL
	 *
	 * @param      type n/a.
	 * @return     type  mixleyWidgetView object.
	 */


 
	var mixleyWidgetsView =  {
		
		
		/**
		 * @summary   Not used with wordpress - The method 'init' will load the insertForm and insertButoon 
		 *
		 * @access    private 
		 * @since     1.x.x
		 *
		 * @see       insertForm(), this.insertButton() 
		 * @link      URL
		 *
		 * @param     type n/a.
		 * @return    n/a
		 */
	
	
		   jsmx_init  :  function (){
				   
				 this.jsmx_insertForm();
				   
				 this.jsmx_insertButton();
				   
		   },
		    
		/**
		 * @summary   The method 'retrieveFormElement' retrieves form value in the music selection form.   
		 *
		 * @since     1.x.x
		 *
		 * @see       Class Mixley_Widget (php class), search_form() (php method), Class mixleyController (js class)
		 * @link      URL
		 *
		 * @param     (string) topic - user input value.
		 * @return    type form element value.
		 */
	
	
	
		   jsmx_retrieveFormElement : function( ){
				 
				 var checked, elem; elem = document.getElementById( "music" ); 
				 
				 checked = Mxly_Secure_Input.jsmx_is_encode_and_match( elem.elements[0].value );
				 
				 if( null !=  checked ){
					
					 mixleyController.jsmx_getTracksResponse( checked );
				 
				 }else{
					
					 Mxly_Feed_Exceptions.jsmx_get_empty_handle( );
					
				 }
				 
		   },
			
	   /** 
		 * @summary   The method 'getPlayer' opens a video player that accepts a videoId and returns a video
		 *    
		 * @since     1.x.x
		 *
		 * @see       YouTubeFeedRespoinse, YouTubeRelatedVideofeed
		 * @link      URL
		 *
		 * @param     (string) videoId - video identifier for the video
		 * @return    Mixley videplayer.
		 */
	
	
		   jsmx_getPlayer : function( videoId ){
			   
			      var newWindow;
						  
				  newWindow = window.open(  Mxly_urlpaths.jsmx_player_url( videoId ) , 'Mixleyplayer', 'width=680, height=770, toolbar=no' );
				   
				  newWindow.moveTo( '600','50' );   
				  
		   },
		  
		  
		/**
		 * @summary   (Not used with wordpress) - The method 'insertForm' will insert a form that accept music artists queries.
		 *    
		 * @access    private
		 *
		 * @since     1.x.x
		 *
		 * @see       class mixley_widget()
		 * @link      URL
		 * 
		 * @param     n/a
		 * @return    HTML form outputed to the page.
		 */
	
	
	 
		   jsmx_insertForm : function ( ){  
			  
				  var div = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); div.style.display = 'block'; 
				 
				  div.innerHTML = '<br>Search Music Artist:<br><form id="music" method="" action="">' + 
				  
								  '<input type="text" value="" maxlength="255"></input></form>' +
								 
								  '<a href="' + Mxly_urlpaths.jsmx_C.company_widget_url  + '">Mixley/a>';
				
		   },
		
		
		/**
		 * @summary  (Not used with wordpress) - The method 'insertbutton' will insert a button to be used by the insertForm() method. 
		 *    
		 * @access    private
		 *
		 * @since     1.x.x
		 *
		 * @see       methods: insertForm, insertButton 
		 * @link      URL
		 *
		 * @param     n/a 
		 * @return    type output button for a music selection form.
		 */
	
	
	  
		   jsmx_insertButton : function( ){
				  
				  var div = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle );
				 
				  div.innerHTML = '<button onclick="mixleyWidgetsView.jsmx_retrieveFormElement()">Get It</button>';  
				 
		   },
	  
		/**
		 * @summary   The method 'TopArtistFeedResponse' will accept a variable and a top artist feed that will output to the page the return feed in HTML form.     
		 *
		 * @since     1.x.x
		 *
		 * @see       class mixleyController, getMusicWidgetFeed, TopArtistFeedResponse
		 * @link      URL
		 *
		 * @param    type (JSON-encoded object) feed - the object contains top artists feed
		 * @param    type (string) type - the type.
		 * @return   type (string) HTML output to the page.
		 */
	
	
	 
		   jsmx_topartist_feed_response : function ( feed ) {
				   
				  var i, maxum, hold, firstdiv, imgdiv, div, a, img; 
				 
				  hold = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); firstdiv = document.createElement( 'div' ); firstdiv.style.width='250px'; 
				  
				  firstdiv.style.display='block';  hold.innerHTML = '';
			
				  if( null != feed.searchTerm ){
					  
					  firstdiv.innerHTML = '<div align="left"><a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyWidgetsView.jsmx_genre_feed_response()">' + 
												 
										   'Music Genre</a> | <a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyController.jsmx_getTopArtists()">Top Artists</a>' + 
										   
										   '  |  <a href="' +  Mxly_urlpaths.jsmx_C.donate_url + '"  class="jsmx_link">Donate</a></div><p><h3>' +  feed.searchTerm  + '</h3></p>';  
					 
				
				  }else{
						
						
					  firstdiv.innerHTML = '<div align="left"><a href="javascript:void(0);"  class="jsmx_link" onclick= ' +
										   
										   '"mixleyWidgetsView.jsmx_genre_feed_response()">Music Genre</a> | <a href="' +  Mxly_urlpaths.jsmx_C.donate_url + 
										   
										   '"  class="jsmx_link" >Donate</a></div><p><h3> Most Popular Artists  </h3></p>';      
					
					
				 }
			
				 for ( i = 0, maxum = feed['results'].length; i < maxum;  i++ ){
					 
					 imgdiv = document.createElement( 'div' );  div = document.createElement( 'div' ); imgdiv.setAttribute( 'class', 'jsmx_firstdivision' );   
					 
					 div.style.width="150px"; div.setAttribute('class', 'jsmx_secdivision jsmx_titleadjust');  a = document.createElement('a'); a.href="javascript:void(0);"; 
					 
					 a.setAttribute('onclick', 'mixleyController.jsmx_getTracksResponse( "' + Mxly_Secure_Input.jsmx_is_encode_and_match( feed['results'][i].name ) + '" )'); 
					 
					 if( null != feed['results'][i].image ){
						 
						   img = document.createElement( 'img' );
						   
						   img.src = feed['results'][i].image; img.height='60'; img.width='75';  
						   
						   a.appendChild(img); imgdiv.appendChild(a); 
					   
					 }    
				   
					 if( null !=  feed['results'][i].name ){
						
						   div.innerHTML = '<p>' +  feed['results'][i].name  + '</p>';
					  
					 }
					
					firstdiv.appendChild(imgdiv); firstdiv.appendChild(div);
				 }
				 
				 hold.appendChild(firstdiv);
				 
		   },
	 
		/**
		 * @summary   The method 'LastfmFeedResponse' will return a Artist's Top Tracks feed and output to the page in HTML form. 
		 *
		 * @since     1.x.x
		 *
		 * @see       methods getMusicWidgetFeed(), LastfmFeedResponse
		 * @link      URL
		 *
		 * @param     type (JSON-encoded object) feed - the JSON object containing the artist's top tracks 
		 * @return    type (string) HTML object output to the page.
		 */
	
	
	 
		   jsmx_lastfm_feed_response : function ( feed ) {
				   
				  var i, maxum, hold, firstdiv, div;
				  
				  hold = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); firstdiv = document.createElement( 'div' );
				  
				  firstdiv.style.display='block'; firstdiv.style.width='260px'; hold.innerHTML = '';
				  
				  firstdiv.innerHTML = '<a href="javascript:void(0);" class="jsmx_link" onclick="mixleyWidgetsView.jsmx_genre_feed_response()">Music Genre' +
									   
									   '</a>  |  <a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyController.jsmx_getTopArtists()">Top Artists </a> | <a href="' + 
									   
									   Mxly_urlpaths.jsmx_C.donate_url + '" class="jsmx_link" >Donate</a></br></div><br><div class="jsmx_firstdivision" valign="top"><img src="' + 
									   
									   feed['results'][0].image + '" height="60" width="75"></img></div><div class="jsmx_secdivision jsmx_titleadjust"><h4> Top Tracks: <br></h4>' + 
									   
									   '<h3>' + feed.searchTerm  + '</h3></div>';
									   
				
				 for ( i = 0, maxum = feed['results'].length; i < maxum; i++ ) {
					 
					 div = document.createElement( 'div' );  div.innerHTML=''; 
					 
					 if( null != feed['results'][i].rank  ){ 
					 
						   div.innerHTML = '<span class="jsmx_textadjust"><br>Rank:' + feed['results'][i].rank + '</span><br>';  
					 
					 }
					 
					 if( null != feed['results'][i].name ){
						 
						   div.innerHTML += '<a href="javascript:void(0);"  class="jsmx_link" onclick=mixleyController.jsmx_getVideoFeed("' + Mxly_Secure_Input.jsmx_is_encode_and_match( feed.searchTerm ) +
											
											'","' + Mxly_Secure_Input.jsmx_is_encode_and_match( feed['results'][i].name ) + '")>' +  feed['results'][i].name  + '</a><br>';     
					
					 }
					 
					 if( null != feed['results'][i].playcount ){
						 
						   div.innerHTML += '<span class="jsmx_textadjust">' + feed['results'][i].playcount + ' Plays</span><br><br>';
					
					 }
									 
					 
					 firstdiv.appendChild(div);
					 
				 }
				 
				 hold.appendChild(firstdiv);
				 
		   },
	  
		/**
		 * @summary   The method 'YouTubeFeedResponse' will accept a video feed and will output to the page in HTML form.    
		 *
		 * @since     1.x.x
		 * 
		 * @see       method YouTubeFeedResponse()
		 * @link      URL
		 *
		 * @param     type (JSON-encoded object) feed - the object contains the video feed that will be used to output to the page
		 * @return    type (string) HTML output to the page.
		 */
	
	
	 
		   jsmx_youtube_feed_response : function ( feed ) {
				  
				  var i, maxum, hold, firstdiv, imgdiv, div, a, title, img;  
				  
				  hold = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); firstdiv = document.createElement('div'); imgdiv = document.createElement('div');
				  
				  div = document.createElement('div');  hold.innerHTML = ''; firstdiv.style.display='block'; firstdiv.style.width='250px'; 
				  
				  firstdiv.innerHTML = '<div><a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyWidgetsView.jsmx_genre_feed_response()">' + 
									   
									   'Music Genre</a>  |  <a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyController.jsmx_getTopArtists()">' + 
									   
									   'Top Artists</a> |  <a href="javascript:void(0);"  class="jsmx_link" onclick=mixleyController.jsmx_getTracksResponse("' + 
																																	
										Mxly_Secure_Input.jsmx_is_encode_and_match( feed.minorq )  + '")>Artists Tracks</a> | <a href="' +  Mxly_urlpaths.jsmx_C.donate_url +
									   
									   '"  class="jsmx_link">Donate</a></div><p><h3>' +  feed.mainq  + '</h3></p>';
									   
				
				  for ( i = 0, maxum = feed['results'].length; i < maxum; i++ ){
					  
						  imgdiv = document.createElement('div'); imgdiv.setAttribute('class', 'jsmx_firstdivision'); div.style.height="85px"; 
						  
						  div.style.width="150px"; div = document.createElement('div');  div.setAttribute('class', 'jsmx_secdivision jsmx_textadjust');
						  
						  a = document.createElement('a'); a.href="javascript:void(0);";
						  
						  a.setAttribute('onclick', 'mixleyWidgetsView.jsmx_getPlayer("' + feed['results'][i].videoId  + '")');  
						  
						  if( null != feed['results'][i].image ){
							  
								img = document.createElement('img'); img.src =  feed['results'][i].image  ; 
								
								img.height='85'; img.width='110'; a.appendChild(img); imgdiv.appendChild(a); 
							
						  }
						  
						  if( null != feed['results'][i].title ){
							  
								title =  feed['results'][i].title; 
								
								div.innerHTML =  title.substring(0, 60) + ' - ';
							
						 }
						 
						 if( null != feed['results'][i].author ){ 
						 
								div.innerHTML +=   feed['results'][i].author ; 
						   
						 }
						 
						 firstdiv.appendChild(imgdiv); firstdiv.appendChild(div);
				  }
				  
				  hold.appendChild(firstdiv);
				
		   },
	  
		/**
		 * @summary   The method 'YouTubeRelatedVideoFeed' accepts a related video feed that will output it to the page in HTML form. 
		 *
		 * @since     1.x.x
		 *
		 * @see       methods getMusicWidgetFeed, YouTubeRelatedVideoFeed
		 * @link      URL
		 *
		 * @param     type (JSON-encoded object) feed - A object containing the feed of related video to a specific video id.
		 * @return    type (string) HTML related video feed output to the page.
		 */
	
	
	 
		  jsmx_youtube_relatedvideo_feed : function ( feed ) {
				  
				  var i, maxum, hold, firstdiv, imgdiv, div, a, title, img;   
				  
				  hold = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); firstdiv = document.createElement('div'); firstdiv.style.align="left"; hold.innerHTML = '';
				  
				  imgdiv = document.createElement('div'); firstdiv.style.display='block'; firstdiv.style.width='450px'; firstdiv.innerHTML = '<br><br>';
				
				  for ( i = 0, maxum = feed['results'].length; i < maxum; i++ ){
					  
						 imgdiv = document.createElement('div');  div = document.createElement('div');  var a = document.createElement('a');
						 
						 imgdiv.setAttribute('class', 'jsmx_firstdivisionplayer'); imgdiv.style.width="120px"; div.style.align="left"; 
						
						 div.style.height="120px";  div.style.width="300px"; div.setAttribute('class', 'jsmx_secdivisionplayer jsmx_playertext'); 
						 
						 a.href="javascript:void(0);"; a.setAttribute('onclick', 'mixleyWidgetsView.jsmx_getPlayer("' + feed['results'][i].videoId + '")');  
					 
						 if( null != feed['results'][i].image ){
						  
								img = document.createElement('img'); img.src = feed['results'][i].image;
								
								img.height='100'; img.width='120'; a.appendChild(img); imgdiv.appendChild(a); 
								
						 }
						 
						 if( null != feed['results'][i].title ){
						 
								title = feed['results'][i].title; 
								
								div.innerHTML =   title.substring(0, 60) + '<br>'; 
					   
						 }
						 
						 if( null != feed['results'][i].author ){ 
						 
							   div.innerHTML += 'by ' + feed['results'][i].author;  
					   
						 }
						 
						 firstdiv.appendChild(imgdiv); firstdiv.appendChild(div);
				   
				}
				
				hold.appendChild(firstdiv);
				
		  },
	  
		/**
		 * @summary   The method 'GenreFeedResponse' returns a feed containing an assortment of musicial genres and outputs the feed to the page in HTML form.  
		 *
		 * @since     1.x.x
		 *
		 * @see       method GenreFeedResponse
		 * @link      URL
		 *
		 * @param     type n/a.
		 * @return    type (string) HTML music genre feed outputed to the page.
		 */
	
	
	 
		  jsmx_genre_feed_response : function ( ) {
				  
				 var i, maxum, hold, firstdiv, imgdiv, div, a, img;  
				 
				 hold = document.getElementById( Mxly_urlpaths.jsmx_C.feedhandle ); firstdiv = document.createElement('div'); imgdiv = document.createElement('div');
				 
				 div = document.createElement('div');  hold.innerHTML = ''; firstdiv.style.display='block'; firstdiv.style.width='250px'; 
				 
				 firstdiv.innerHTML = '<div><a href="javascript:void(0);"  class="jsmx_link" onclick="mixleyController.jsmx_getTopArtists()">Top Artists</a> | <a href="' + 
									  
									  Mxly_urlpaths.jsmx_C.donate_url + '"  class="jsmx_link" >Donate</a></div><p><h3>Music Genre</h3></p>';
			   
				 for ( i = 0, maxum = jsmx_genra.length; i < maxum; i++ ){
					 
						 imgdiv = document.createElement('div'); imgdiv.setAttribute('class', 'jsmx_firstdivision');  div = document.createElement('div'); 
						 
						 div.style.height="85px"; div.style.width="150px";  div.setAttribute('class', 'jsmx_secdivision jsmx_titleadjust'); div.innerHTML='';
						 
						 a = document.createElement('a'); a.href="javascript:void(0);"; 
						 
						 a.setAttribute('onclick', 'mixleyController.jsmx_getTopArtistsbyGenre("' + Mxly_Secure_Input.jsmx_is_encode_and_match( jsmx_genra[i][1] )  + '")');  
				  
						 if( null != jsmx_genra[i][0] ){ 
						 
							   img = document.createElement('img'); img.src = Mxly_urlpaths.jsmx_genre_images_url( jsmx_genra[i][0 ] );
							   
							   img.height='75'; img.width='90'; a.appendChild(img); imgdiv.appendChild(a); 
						 
						 } 
					 
						 if( null != jsmx_genra[i][1] ){ 
						 
							   div.innerHTML = '<p>' +  jsmx_genra[i][1] + '</p><br>'; 
						   
						 } 
					 
						 firstdiv.appendChild(imgdiv); firstdiv.appendChild(div);
					 
				 }
				
				 hold.appendChild(firstdiv);
				
		  }
		  
		  
	}


	
	
	
// mixleyWidgets.init(); 
  

 