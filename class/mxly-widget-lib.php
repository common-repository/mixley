<?php 

	/**
	* Summary.      Class Mixley_Widget
	*
	* Description   A php Class that initates the wordpress widget plugin, loads the javascript, css files librarys and loads the music selection form.
	*
	* @since        1.x.x
	*
	* @see          Class Mixley_Widget
	* @link         URL
	*
	* @param        n/a
	* @return       n/a
	*/


	class Mixley_Widget  {
		
	  /**
		*
		* Summary.      load_mxly_files( ).
		* 
		* Description.  load_mxly_files( ) load four javascript files and two css file. No dependencies js or css files.
		*
		* @since        1.x.x
		*
		* @see          mxly-Widgets.js, mxly-security-issues.js, genrecatagory.js, mxly-CSS.css
		* @link         URL
		*
		* @param        n/a, - No dependencies js or css files
		* @return       n/a  - loaded files
		*/
	
		public function load_jsmx_files( ) {
		
			// four javascript file
			  
			wp_enqueue_script( 'mxly-Widgets', plugins_url( JSMX_JAVASCRIPT , dirname(__FILE__) ), array(), JSMX_VERS  );
			
			wp_enqueue_script( 'mxly-urls', plugins_url( JSMX_URLS , dirname(__FILE__) ), array(), JSMX_VERS  );
			
			wp_enqueue_script( 'mxly-security-issues', plugins_url( JSMX_SECURE , dirname(__FILE__) ), array(), JSMX_VERS  );
			
			wp_enqueue_script( 'genrecatagory', plugins_url( JSMX_GENRE  , dirname(__FILE__) ), array(), JSMX_VERS  );
			
			// two css file  
			
			wp_enqueue_style( 'mxly-CSS', plugins_url( JSMX_LAYOUT_CSS , dirname(__FILE__) ), array(), JSMX_VERS  );
		
		    wp_enqueue_style( 'mxly-player-CSS', plugins_url( JSMX_PLAYER_CSS , dirname(__FILE__) ), array(), JSMX_VERS );
		}
			
			

	   /**
		*
		* Summary.      register_mixley_music_select().
		* 
		* Description.  registers The Class 'Mixley_Music_Genre' with the Wp_Widget Api. 
		*
		* @since        1.x.x
		*
		* @see          register_mixley_music_select()
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
 
 
		public function register_jsmx_music_select() {
		
			register_widget( 'Mixley_Music_Select' );
		
		}


	   /**
		* Summary.      register_mixley_genre_widget().
		*
		* Description.  registers The Class 'Mixley_Music_Genre' with the Wp_Widget Api. No used in wordpress.
		*
		* @since        1.x.x
		* @depreciated  1.x.x Not for wordpress use
		*
		* @see          register_mixley_genre_widget()
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
 
		public function register_jsmx_genre_widget(){
		
			register_widget( 'Mixley_Music_Genre' );
		
		}
	  
	   /**
		* Summary.      register_mixley_top_artist_widget(
		*
		* Description.  registers The Class Mixley_Top_Artist with the Wp_Widget Api. No used in wordpress
		*
		* @since        1.x.x
		* @depreciated  1.x.x Not for wordpress use
		*
		* @see          register_mixley_top_artist_widget()
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
 
		public function register_jsmx_top_artist_widget(){
		
			register_widget( 'Mixley_Top_Artists' );
		
		}
  
	   /**
		* Summary.      The method 'load_search_form()'. For wordpress use.
		*
		* Description.  The method 'load_search_form()' is used to collect user-submitted querys and to send them to the mixley server.
		*
		* @since        1.x.x
		*
		* @see          load_search_form()
		* @link         URL
		*
		* @param        n/a
		* @return       output HTML form to the page.
		*/
 
		public function jsmx_load_search_form(){
		
			?>
			
				<script type="text/javascript"> 
				
					document.write( '<div align="right" width="100%"><a href="http://mixley.com"><img src="http://mixley.com/widgets/image/Mixley.png" height="36" width="72"></img></a></div>' +
					              '<div align="left" width="100%"> Select Music Artist: <br>' +  
								  '<form id="music" action="GET"><input type="text" value="" size="27px"></input></form>' +
								  '<button class="jsmx_bottonadjust" onclick="mixleyWidgetsView.jsmx_retrieveFormElement()">Get It</button>' +
								  '</div><div id="putfeed"></div>' ); 
								
				</script>
			 
			<?php  
		
		}
  	  
	   /**
		* Summary.      The method 'feed_handle'. For wordpress use.
		*  
		* Description.  The method 'feed_handle' used to insert The div tag and id "putfeed". 
		*
		* @since        1.x.x
		*
		* @see          feed_handle()
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
 
		public function jsmx_feed_handle(){
		
			?>
			
				<script type="text/javascript"> 
				
					document.write(  '<div id="putfeed"></div>' );  
				
				</script>
			 
			<?php  
			
		}
  
		/**
		* Summary.      The method 'get_genre_loader'. No used in wordpress
		*
		* Description.  The method 'get_genre_loader' used to load the genre method. No used in wordpress
		*
		* @since        1.x.x
		* @deprecated   1.x.x   - No used in wordpress
		*
		* @see          get_genre_loader(), class mixleyWidgetsView, GenreFeedResponse(.
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
	 
 
		public function jsmx_get_genre_loader(){
		
			?>
			
				<script type="text/javascript"> 
				
					document.onload = mixleyWidgetsView.jsmx_genre_feed_response();
				
				</script>
			
			<?php
			
		}
  
   
		/**
		* Summary.      The method 'get_top_artist_loader'. No used in wordpress
		*
		* Description.  The method 'get_top_artist_loader' used to load the top artists method. No used in wordpress 
		*
		* @since        1.x.x
		* @deprecated   1.x.x   - No used in wordpress
		*
		* @see          get_top_artist_loader(), class mixleyController,  getTopArtists(). 
		* @link         URL
		*
		* @param        n/a
		* @return       n/a
		*/
  
		public function jsmx_get_top_artist_loader(){
		
			?>
			
				<script type="text/javascript"> 
				
					document.onload = mixleyController.jsmx_getTopArtists();
				
				</script>
			
			
			<?php
		
		}
      
}


?>
