(function(window) {
	

	Element = function(p_class) {
		
		
		if(p_class){
			
			window.$$_CHILDREN = window.$$_CHILDREN || [];
			window.$$_TWEENS = window.$$_TWEENS || {};
			window.$$_canvas = window.$$_canvas || new Canvas( this.id() || "element-root" );
			
			var _temp = eval("new "+p_class+"(window.$$_canvas.context())");
			
				_temp = this.extend(_temp, new Element());
				_temp.id((window.$$_CHILDREN.length)+"_id");
				_temp.index((window.$$_CHILDREN.length));
				_temp.visible(true);
				_temp.alpha(1);
				_temp._tweenie = new Tweenie();
				if(typeof _temp.init === "function") _temp.init();
				window.$$_CHILDREN.push(_temp);
				
			return _temp;
			
		}
		
		
	}

	var _pt = Element.prototype = new Basic();
	
	

	// ====================
	// = Getter / Setters =
	// ====================
	
	_pt.alpha = function(p_val){
		if(p_val != null){
			this._alpha = p_val;
			return this;
		}else{
			return this._alpha;
		}
	}
	
	_pt.visible = function(p_val){
		if(p_val != null){
			this._visible = p_val;
			return this;
		}else{
			return this._visible;
		}
	}
	_pt.mask = function(p_val){
		if(p_val){
			this._mask = p_val;
			return this;
		}else{
			return this._mask;
		}
	}
	
	_pt.id = function(p_val){
		if(p_val){
			this._id = p_val;
			return this;
		}else{
			return this._id ;
		}
	}
	_pt.index = function(p_val){
		if(p_val != null){
			this._index = p_val;
			return this;
		}else{
			return this._index;
		}
	}
	_pt.ready = function(p_val){
		if(p_val){
			this._ready = p_val;
			return this;
		}else{
			return this._ready || false;
		}
	}
	_pt.shadow = function(p_val){
		if(p_val){
			this._shadow = p_val;
			return this;
		}else{
			return this._shadow || {};
		}
	}
	_pt.border = function(p_val){
		if(p_val){
			this._border = p_val;
			return this;
		}else{
			return this._border || {width:0,color:null};
		}
	}
	
	_pt.top = function(){
		var _i = Util.getIndex(this);
		var _childtotop = $$_CHILDREN.splice(_i,1);
		$$_CHILDREN.push(_childtotop[0]);
		return this;
	}
	
	_pt.bottom = function(){
		var _i = Util.getIndex(this);
		var _childtotop = $$_CHILDREN.splice(_i,1);
		$$_CHILDREN.unshift(_childtotop[0]);
		return this;
	}
	
	
	// ====================
	// = public functions =
	// ====================
	
	
	
	_pt.toString = function(){
		return "["+this.name+" Instance]"
	};
	
	
	
	// =====================
	// = private functions =
	// =====================
	
	_pt._applyStroke = function(p_context,p_cords){
		if(this.border().color != null){
			var _c = p_context, _b = this.border(), loc = p_cords;
			_c.beginPath();
			_c.rect(loc.x, loc.y, loc.w, loc.h);
			_c.strokeStyle = _b.color;
			_c.lineWidth = _b.width;
			_c.closePath();
			_c.stroke();
			
			
		}
	}
	
	_pt._applyShadow = function(p_context){
		if(this.shadow().color != null){
			var _c = p_context, _s = this.shadow(), _color = Util.hexToRGB(_s.color);
			
			_c.shadowColor   = 'rgba('+_color.r+', '+_color.b+', '+_color.g+', '+(_s.alpha || 1)+')';
			_c.shadowBlur    = _s.blur;
			_c.shadowOffsetX = _s.x;
			_c.shadowOffsetY = _s.y;
	
			
		}
	}
	


	
	window.Element = Element;
	
}(window));