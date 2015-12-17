/******************************
 * 
 * Module that manages cookies
 * 
 ******************************/

// set namespace
var iip =  iip || {};
iip.utils =  {};

iip.utils.CookieManager = (function($) {
	'use strict';
    
	/**
	 * Fetch cookie
	 * @param  string name  name of cookie to fetch
	 * @return string cookie value
	 */
	function get( name ) {
	    var cookieParts = document.cookie.split( ';' ),
	        i = 0,
	        part, partData, value;

	    while ( part = cookieParts[i++] ) {
	        partData = part.split('=');

	        if ( partData.shift().replace(/\s/, '') === name ) {
	            value = partData.shift();
	            break;
	        }
	    }
	    return value;
	}

	/**
	 * Sets a cookie.  Note: If no domain is specified, the default location.host property is used and no leading dot is added
	 * If the domain is explicitly set, a leading dot will be added.  Setting it explicitly to ensure dot is added for support of older browsers
	 * @param string name    cookie name
	 * @param string value   cookie value
	 * @param object options cookie options (path, domain, days)
	 */
	function set( name, value, options ) {
		
		var expires = '',
			path = '; path=/',
			domain = '; domain=' + location.host,
			date;

		if ( options ) {

			if ( options.days ) {
				date = new Date();
	         	date.setTime( date.getTime() +  (options.days*24*60*60*1000) );
	        	expires = '; expires=' + date.toGMTString();
			} 

			if( options.path ) {
				path = '; path=' + options.path;
			}
		}

		document.cookie = name + '=' + value + expires + domain + path;
	}

	/**
	 * Remove a cookie
	 * @param  string name  name of cookie to remoove
	 */
	function remove ( name ) {
 		set( name, '', -1 );
	}

	/**
	 * Fetch all cookies (not yet implemented)
	 * @param  string name  name of cookie to remove
	 */
	function getAll() {
	}

	// public api
	return {
		set: set,
		get: get,
		remove: remove,
		getAll: getAll
	}


})( jQuery );
