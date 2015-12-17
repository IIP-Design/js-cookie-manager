/******************************************************
 * 
 * Module that listens language changing events and 
 * updates the cookie if needed
 * Dependencies: iip.utils.CookieManager
 * 
 *****************************************************/


// set namespace
var share =  share || {};
share.utils =  {};

share.utils.CookieListener = (function ($) {

    function langMenuHandler( evt ) {
    	// evt.preventDefault(); // testing
    
    	var code = getLangCode( $( evt.target ).attr( "href" ) );
    	if( code ) {
    		// if cookie with same name, same domain and same - remove it
    		iip.utils.CookieManager.set( '_icl_current_language', code )
    	} 
    }

    function onLoadHandler() {
    	var re = /^\/(fr|es|ru|zh-hans|ar|id|fa|pt-br)\//gi,
    	code = re.exec( location.pathname ); 

		// regex will return null if language is english
        setCookie( (code == null) ? 'en' : code[1] );
    }

    function getLangCode( url ) {
    	if ( url ) {
    		var lang = url.split('/').filter(function (s) {
				return s; 
			}).pop();
    		
    		// if lang = en the domain will be returned as a lang will not be present at end of url (.e. /fr)
    		return ( lang.indexOf('.') != -1 ) ? 'en' : lang;
    		
    	}
		return null;
    }

    function setCookie( code ) {
    	iip.utils.CookieManager.set( '_icl_current_language', code )
    }


    function init() {
		var $langMenu = $(".submenu-languages > li > a");
		$langMenu.on( "click", langMenuHandler );

		onLoadHandler();	
	}

	return {
		init: init
	}

})( jQuery );


// initialize module 
jQuery( document ).ready(function($) {
	share.utils.CookieListener.init();
});