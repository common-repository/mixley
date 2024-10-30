		
				
	/**
	* @summary   class Mxly_urlpaths contains the urls that are 'dynamically obtained' to avoid hard coded urls.
	*
	* @access    public
	*
	* @since     1.x.x
	*
	* @see       Mxly_urlpaths 
	* @link      URL
	*
	* @param     type n/a.
	* @return    type file paths to Mixley site.
	*/
	
	var Mxly_urlpaths = {
	
			/**
			 * @summary   jsmx_C object contains the file path value needed to control feed services from Mixley
			 *
			 * @access    public
			 *
			 * @since     1.x.x
			 *
			 * @see       C, TopArtistFeedResponse, LastfmFeedResponse, YouTubeFeedResponse, YouTubeRelatedVideoFeed,
			 * @link      URL
			 *
			 * @param     type n/a.
			 * @return    type file paths to Mixley site.
			 */
	
	
			jsmx_C :  {
				
				company_widget_url : 'http://mixley.com/widgets/',
				
				company_url :        'http://mixley.com',
				
				category :           '/mixley/images/category/',
				
				player_url :         '/mixley/player/MixleyPlayer.php?id="', 
				
				donate_url :         'http://mixley.com/supportmixley/supportmixley.php',
				
				feedhandle :         'putfeed'
			
			},
		   
			/** 
			* @summary   The method 'jsmx_trace_root' (stack trace) used to determine the intenal file path root by throwing a fake error.
			*            works for Firefox, IE, opera, chome, Edge, safari.
			*    
			* @since     1.x.x
			* @access    private
			*
			* @see       jsmx_url_root_trace, mixleyWidgetsView.jsmx_getPlayer
			* @link      URL
			*
			* @param      n/a 
			* @return    (string) - returns the root directory path.
			*/
	
			jsmx_url_root_trace : function( ) {
			
				var ua = navigator.userAgent.toLowerCase(), browser, stack, url;
				
				browser=[]; stack=[]; url=[]; 
				
				browser = ua.match(/(chrome|safari|firefox|trident(?=\/))\/?\s*(\d+)/i);
				
				try{  // create fake error
				
					throw new Error(''); 
				
				}catch(e){
				
					
					if( 'chrome' === browser[1] ) { // Chrome, Edge, Opera
					
						url = e.stack.split(":")[1].split("/").slice(3, 5);
						
					}
							 
					if( 'trident' === browser[1] ){ // IE
					
						stack = e.stack.split("\n");
						url = stack[1].match(/\((.*):[0-9]+:[0-9]+\)/).slice(1, 2);
						url = url[0].split("/").slice(3, 5);
						
					}
					
					if( 'firefox' == browser[1] ){ // firefox
					
						stack = e.stack.split("\n");
						url = stack[1].split("@")[1].split(":"); 
						url = url[1].split("/").slice(3, 5);
						
					}
					
					return url[0] + '/' +  url[1];
				
				}
			
			},
		
			/** 
			* @summary   The method 'jsmx_player_url' used to determine the path to the player.
			*    
			* @since     1.x.x
			* @access    public
			* @see       stack.jsmx_url_root_trace, mixleyWidgetsView.jsmx_getPlayer, jsmx_url_root_trace(), jsmx_C.player_url
			* @link      URL
			*
			* @param      n/a 
			* @return    (string) - returns the path to the player.
			*/
	
		
			jsmx_player_url : function( videoId ){
				
				
				return 'http://' + location.hostname  + '/' + this.jsmx_url_root_trace() +  this.jsmx_C.player_url + videoId + '"';
				
				
			},
			
			/** 
			* @summary   The method jsmx_genre_images_url'' used to create the music category(music genra) path.
			*    
			* @since     1.x.
			* @access    public
			*
			* @see       jsmx_url_root_trace, mixleyWidgetsView.jsmx_getPlayer, jsmx_url_root_trace(), jsmx_C.category
			* @link      URL
			*
			* @param      n/a 
			* @return    (string) - returns the root directory path.
			*/
		
		
			jsmx_genre_images_url : function( url ){
				
				
				return this.jsmx_url_root_trace() + this.jsmx_C.category  + url;
				
				
			},
			
			/** 
			* @summary   The method 'jsmx_mixleycalls_url' used to determine the path to the mixley music widget files.
			*    
			* @since     1.x.
			* @access    public
			*
			* @see       mixleyWidgetsView.jsmx_getPlayer, this.jsmx_C.company_widget_url
			* @link      URL
			*
			* @param      n/a 
			* @return    (string) - returns the root directory path to mixley plugin directory.
			*/
			
			
			jsmx_mixleycalls_url : function( file, state ){
											
				
				return this.jsmx_C.company_widget_url +  file + state;
				
				
			}
		
	}
	
		
	
	
	
	
	