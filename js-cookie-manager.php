<?php
/**********************************************************************************************************

Plugin Name: 	 JS Cookie Manager
Description:     This plugin manages cookies via javascript
Version:         1.0
Author:          Terri Regan
License:         GPL-2.0+
Text Domain:     america
Domain Path:     /languages
 
 ************************************************************************************************************/

 //* Prevent loading this file directly
defined( 'ABSPATH' ) || exit;


class JS_Cookie_Manager {

	const PLUGIN_VERSION = '1.0.0';

	function bootstrap() {
		add_action( 'wp_enqueue_scripts',  array( $this, 'iip_enqueue_scripts' ) );
	}

	function iip_enqueue_scripts() {
		wp_register_script('js-cookie-manager', plugin_dir_url( __FILE__ ) . 'js/dist/js-cookie-manager.min.js', array(),  '1.0.0', true );

		wp_enqueue_script( 'js-cookie-manager');
		wp_enqueue_script( 'lang-cookie-listener', plugin_dir_url( __FILE__ ) . 'js/dist/lang-cookie-listener.min.js', array('jquery', 'js-cookie-manager'), '1.0.0', true );
	}
}

// Initialize  plugin
global $iip_js_cookie_manager;
$iip_js_cookie_manager = new JS_Cookie_Manager();
$iip_js_cookie_manager->bootstrap();
