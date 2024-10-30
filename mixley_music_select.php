<?php 

/**********************************************************************************************************************

Plugin Name:   Mixley Music & Video (Music Selection Form)

Description:   This music search form plugin provides a search form widget to channel your favorite musical artists and music tracks as well as music videos.  

Version:       1.0.7

Author:        Joseph Salinas  

Author URI:    http://www.mixley.com

License:       GPLv2




"Mixley Music And Video (Music selection Form)" is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.
 
"Mixley Music And Video (Music selection Form)" is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with Mixley Music And Video (Music selection Form)". If not, see www.gnu.org/licenses/gpl-2.0.html .




/**
 * Description two php file containing the path constants to load and the widget load library.
 */
 
 
 
require_once (dirname(__FILE__) . '/includes/constants.php' ); 
require_once (dirname(__FILE__) . '/class/mxly-widget-lib.php' ); 



/**
 *
 * Description   Mixley Widget_Select - Identifies your favorite music artist and produces a music selection feed with music videos.
 *               This class contains the methods needed to insert the music selection form.
 *
 * @since        1.x.x
 */ 



	class Mixley_Music_Select extends WP_Widget {
	
	
	
			/**    
			*
			* Description. Constructor for the Mixley_music_select class. 
			*
			* @since       1.x.x
			*
			* @see         class Mixley_Music_select, parent class wp_widgets.
			* @link        URL
			*
			* @param       type (string) base id - base ifd for widget.
			* @param       type (string) name - name of the widget.
			* @param       type  (array) options - widget options.
			* @return      type (object) mixley_Music_Select , inheritance (parent object) wp_widget class.
			*/   
	
	
			function __construct() {
	
		 
		   
				   parent::__construct(
	
			 
	
						 // base ID of the widget
				
						 'mixley_music_select',
			
					 
			
						 // name of the widget
				
						 __('Mixley Music And Video (Music Selection Form)', 'name' ),
			
					 
			
						 // widget options
				
						 array (
				
							'description' => __( 'Identifies your favorite music artist and produces a music selection feed with music videos.', 'name')
				
						 )
		 
		 
				   ); 
			 
		  
			}
	
	
	
			/**
			*
			* Description. This method 'form' is not needed in this widget, maybe in future widget
			*
			* @since       1.x.x
			* @deprecated  1.x.x   - no new_function_name()
			* @class       public - must be public to word with word press
			* @see         n/a
			*
			* @param       n/a
			* @return      n/a
			*/
	
	  
			
			public function form( $instance ) {
			  
			  
				  // Form not used in this widget
			   
			   
			}
	
	
	
	
			/**
			*
			* Description. This method 'update' is not needed in this widget, maybe in future widget.
			*
			* @since       1.x.x
			* @deprecated  x.x.x  - no new_function_name
			* @class       public - must be public to word with word press
			* @see         n/a
			*
			* @param       n/a
			* @return      n/a
			*/
	
	 
	
			public function update( $new_instance, $old_instance ) { 
			
			
				  // Updates not used in this widget  
		
		
			}
	
	
	
			/**
			*
			* Description. The widget function the starts widget functionality.
			*
			* @since       1.x.x
			* @class       public - must be public to word with word press
			* @see         widget()
			* @link        URL
			*
			* @param      (string) $args, (instances) $instance 
			* @return     (HTML) widget form - print the mixley selection form in HTML form
			*/
	
	 
	 
			public function widget( $args, $instance ) {
					  
					  
				  $new_widget = new Mixley_Widget();    
			
			
				  $new_widget->jsmx_load_search_form(); 
				                  		    
		
		   }
		   
		   
		 
	}
 
 
 
	/**
	 *
	 * Description.   A wp method from wordpress 'add_action'
	 *
	 * @since         1.x.x
	 *
	 * @param        (string) 'widgets_init', (string) 'wp_enqueue_scripts'
	 *                                              
	 * @return type  (method) Mixley_Widget::register_jsmx_music_select', (method) 'Mixley_Widget::load_jsmx_files' 
	 */
 
 
 
	add_action( 'widgets_init', 'Mixley_Widget::register_jsmx_music_select' );
	add_action( 'wp_enqueue_scripts', 'Mixley_Widget::load_jsmx_files' ); 
	
	
?>

