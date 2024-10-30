/**
*  
* @summary    This javascripts page contains 3 javascript classes: class Mixley_Secure_Input, class Mixley_Secure_Output, class mix_Error_Exceptions.
*             The classes handle the the securing of input into the form input and the secure_out method handles the HTML output display of the feeds and any error that occur.
*             These classes contain the methods needed to output feed thats been 'escaped' from the remote Servers to output to the page in HTML form.
 *            class Mxly_urlpaths contains the urls that are 'dynamically obtained' to avoid hard coded urls.
*
* @link       URL
* @since      1.x.x 
* @requires   n/a
* @class      secure_input
* @classdesc  A class containing the methods needed to accept queries and retrieve feeds from the remote server.
* @class      secure_output
* @classdesc  A class containing the methods needed to output feed retrieved from the remote Servers to output to the page in HTML form. 
*/

	/**
	* @summary   The class 'Mxly_Secure_Inpu'       
	*
	* @since      1.x.x
	* @access     private
	*
	* @see        class secure_input, secure_output, jsmx_is_encode_and_match, jsmx_encode_utf_8_only 
	* @link       URL
	*
	* @param      n/a.
	* @return     type (httprequest object) 
	*/ 



	Mxly_Secure_Input = {
	
			/**
			* @summary   The method 'is_encode_and_match' check if value is a null, and that it is not string.
			*    
			* @since     1.x.x
			*
			* @see       is_encode_and_match()
			* @link      URL
			*
			* @param     n/a
			* @return    encodes and matchs tthe value to a alphanumeric pattern check if value is a null, and that it is not string.
			*/
			
			jsmx_is_encode_and_match : function( check ){
			
			
				if( null != check && check.match( /^([a-zA-Z0-9 '"-():.?!]+)$/ ) ){
				
					return this.jsmx_encode_utf_8_only( check );
				
				}else{
				 
					return null;
				
				}
				
			
			},
			
			
			/**
			* @summary   The method 'jsmx_encode_utf_8_only' check if value is a null, and that it is not string.
			*    
			* @since     1.x.x
			*
			* @see       is_encode_and_match()
			* @link      URL
			*
			* @param     n/a
			* @return    encodes and matchs tthe value to a alphanumeric pattern check if value is a null, and that it is not string.
			*/
			
			jsmx_encode_utf_8_only : function(s){
			
			
				return encodeURIComponent( s ); 
			
			
			}
	  
	
	}

	/**
	* @summary   The class 'mxly_secure_out'       
	*
	* @since      1.x.x
	* @access     private
	*
	* @see        class mxly_secure_out, jsmx_escape_html, jsmx_escape_url, jsmx_escape_attr,  no_spec_char 
	* @link       URL
	*
	* @param      n/a.
	* @return     type mxly_secure_out object
	*/ 


	Mxly_Secure_Out = {
	
			/**
			 * @summary   The method 'escape_html' check if value is a null, and that it is not string.
			 *    
			 * @since     1.x.x
			 *
			 * @see       escape_html
			 * @link      URL
			 *
			 * @param     type (string) text - a text string value to escape.
			 * @return    type (string) sanitized text string encodes and matchs the value to a alphanumeric pattern check if value is a null, and that it is a string.
			 */
	 
			jsmx_escape_html : function ( text ){
			
			
				return this.jsmx_decode_utf_8_only( this.jsmx_no_spec_char( text ) );
			
			
			},
		
		
			/**
			 * @summary   The method 'jsmx_escape_url' check if value is a null, and that it is not string.
			 *    
			 * @since     1.x.x
			 *
			 * @see       jsmx_escape_url ( no used in wordpress yet? )
			 * @link      URL
			 *
			 * @param     type (string) text - a text string value to escape.
			 * @return    type (string) sanitized text string encodes and matchs the value to a alphanumeric pattern check if value is a null, and that it is a string.
			 */
	 
	 
			jsmx_escape_url : function ( text ){
			
				return decodeURIComponent( this.jsmx_no_spec_char( text ) );
			
			},
			
			
			/**
			 * @summary   The method 'escape_attr' check if value is a null, and that it is not string.
			 *    
			 * @since     1.x.x
			 *
			 * @see       is_special_char ( no used in wordpress yet? )
			 * @link      URL
			 *
			 * @param     type (string) text - a text string value.
			 * @return    type (string) sanitized text string encodes and matchs the value to a alphanumeric pattern check if value is a null, and that it is a string.
			 */
	 
	 
			jsmx_escape_attr : function ( text ){
			
				return decodeURIComponent( this.jsmx_no_spec_char( text ) );
			 
			},
			
			/**
			 * @summary   The method ' is_spec_char' check if value is a null, and that it is not string.
			 *    
			 * @since     1.x.x
			 *
			 * @see       is_special_char ( no used in wordpress yet? )
			 * @link      URL
			 *
			 * @param     type (string) text - a text string value to escape.
			 * @return    type (string) sanitized text string encodes and matchs the value to a alphanumeric pattern check if value is a null, and that it is a string.
			 */
	 
			jsmx_no_spec_char : function ( text ){
			
				return text.replace( /[&<>\"]/g, function() { return ''; } );
				
			},
		   
		   
		   
		   
		    jsmx_encode_utf_8_only : function(s){
			   
			    return  unescape( encodeURIComponent( s ) ); 
			   
		    },
		   
		   
		    jsmx_decode_utf_8_only : function(s){
			   
			    return decodeURIComponent( escape( s ) );
			   
		    }
   
	}



	/**
	 * @summary   The Class containing two methods 'getErrorHandle', 'getEmptyHandle' will accept Feed exception errors and return description of the error.   
	 *
	 * @since     1.x.x
	 *
	 * @class     FeedExceptions 
	 * @augments  class mixleyController
	 *
	 * @see       class mixleyController, getMusicWidgetFeed, Class FeedExceptions, getErrorHandle, getEmptyHandle 
	 * @link      URL
	 *
	 * @param     type  An error occuring in hte mixleyController class will trigger the FeedException Class.
	 * @return    type (string) print to screen a small statment describing the error.
	 */


	Mxly_Feed_Exceptions = {
	
	
			/**
			 * @summary   The method 'getErrorHandle' returns a error message to the screen.   
			 *
			 * @since     1.x.x
			 *
			 * @see       method getErrorHandle
			 * @link      URL
			 *
			 * @param     type n/a.
			 * @return    type (string) error feed outputed to the page.
			 */		
	 
			jsmx_get_error_handle : function ( ){
			
				var hold= document.getElementById( 'putfeed' );
				
				hold.innerHTML = 'No results on this query';
			
			},
			
			
			/**
			* @summary   The method 'getEmptyHandle' returns a error message to the screen. 
			*
			* @since     1.x.x
			*
			* @see       method getEmptyHandle
			* @link      URL
			*
			* @param     type n/a.
			* @return    type (string) error feed outputed to the page.
			*/
	 
			jsmx_get_empty_handle : function ( ){
			
				var hold= document.getElementById( 'putfeed' );
				
				hold.innerHTML = 'You must insert a search term or check your spelling';
			
			}
			
		}