/*! CLASS_NAME class
 * Put javascript plugin depedencies below (see main.js for an exmaple)
 * @depends jquery/jquery-1.8.0.min.js
 */
var CHANGE_ME = CHANGE_ME || {};
CHANGE_ME.CLASS_NAME = function(){
	// =================================================
	// = Private variables (example: var _foo = bar; ) =
	// =================================================
	
	
	
	// =================================================
	// = public functions                              =
	// =================================================
	var self = {
		
		init : function(){
	
				debug.group("# [CLASS_NAME.js]");
				
				debug.log('- initialized'); 
				
				//--> sof private functions
				
				//--> eof private functions
			    		
				debug.groupEnd();

		}
		
	};
	
	return self;
	
	// ================================================
	// = Private functionse (function _private() {} ) =
	// ================================================
	
}();
CHANGE_ME.main.queue(CHANGE_ME.CLASS_NAME.init);


