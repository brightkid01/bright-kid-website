(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1 = function() {
	this.initialize(img.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);


(lib.Symbol25copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol22copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAhvIAADf");
	this.shape.setTransform(0,11.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,24.5);


(lib.Symbol21copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {corsound:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		//createjs.Sound.play("intro");
		//this.stop();
		
		this.b3.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.dhoti.play();
			this.correct.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {	
			this.wrong2.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.wrong3.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
		
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			this.wrong1.play();
			var my4=createjs.Sound.createInstance("wro");
		this.my4;
		my4.play();
		
		}
		
		this.b8.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9() {
			
			//this.wrong3.play();
			var my9=createjs.Sound.createInstance("intro");
		this.my9;
		my9.play();
			
			
		
		}
		//createjs.Sound.play("intro");
		//this.stop();
		
		this.b3.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.dhoti.play();
			this.correct.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {	
			this.wrong2.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.wrong3.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
		
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			this.wrong1.play();
			var my4=createjs.Sound.createInstance("wro");
		this.my4;
		my4.play();
		
		}
		
		this.b8.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9() {
			
			//this.wrong3.play();
			var my9=createjs.Sound.createInstance("intro");
		this.my9;
		my9.play();
			
			
		
		}
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(0,13.075);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,28.2);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3538").s().p("AsBGsIAhACQDJAAD3kzIApg0Ig1g6QjijuAAinQAAiJD3i5QAjDtCvDiIAuA6IAkgwQEAlGDRAAQCiAABUD3QgYgDgLAAQhJAAiGBiQiFBjhcB9IguA9IAsArQD3DwEMAAQiQEjicAAQiOAAkKj5IhFhAIgXAgQjvFqiaAAQiwAAiqkfg");
	this.shape.setTransform(7.8001,18.1024,0.6727,0.6727);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-30,103.6,96.2);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Al8G2IgYg4Qg0h6gtg6Qgtg6g3gTQBdhjBOAAQBEAABRC1IAbA9QCTj4DljoQDnjqDbh9IAeArQi7CNjiEiQjjEih4D9IhAArQhRA5gbAaQgMgpgmhdg");
	this.shape.setTransform(278.425,-81.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-138.6,338.7,138.6);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
		
		this.stop();
	}
	this.frame_123 = function() {
		/* _root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;
		_root.b4.enabled=true;
		stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(122).call(this.frame_123).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D5F5F").s().p("AhZAYQgEAAAAgFIAAglQAAgFAEAAICyAAQAGAAAAAFIAAAlQAAAFgGAAg");
	this.shape.setTransform(15.2,16.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#757879").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_1.setTransform(89.925,34);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5F5F").s().p("AgdAeQgNgMABgSQgBgQANgNQAMgNARAAQARAAANANQAMANAAAQQAAASgMAMQgNANgRAAQgRAAgMgNg");
	this.shape_2.setTransform(89.9,34);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F5F6").s().p("AhmAmQgIAAAAgIIAAg7QAAgIAIAAIDNAAQAIAAAAAIIAAA7QAAAIgIAAg");
	this.shape_3.setTransform(15.2,16.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D5F5F").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_4.setTransform(84.875,19.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#757879").s().p("AgoApQgRgSAAgXQAAgXARgQQARgSAXABQAYgBAQASQARAQAAAXQAAAXgRASQgQARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(84.9,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D5F5F").s().p("AhbBBQgJAAAAgJIAAhvQAAgEADgCQACgDAEAAIC3AAQAJAAAAAJIAABvQAAAJgJAAg");
	this.shape_6.setTransform(84.875,19.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5F5F6").s().p("AheBLQgHAAgEgEQgFgFAAgGIAAh3QAAgGAFgFQAEgEAHAAIC9AAQAHAAAEAEQAFAFAAAGIAAB3QAAAGgFAFQgEAEgHAAg");
	this.shape_7.setTransform(84.875,19.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7BCBBD").s().p("AgGAbQgKgbAOgbQADgHAGAEQAGADgEAHQgKAUAIAWQADAIgHACIgDABQgEAAgCgGg");
	this.shape_8.setTransform(45.105,24.7877);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7BCBBD").s().p("AgRALQgFgGAHgFQALgIAPgEQAHgCACAHQACAHgIABQgMACgIAIQgDADgDAAQgDAAgCgDg");
	this.shape_9.setTransform(48.228,19.8933);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7BCBBD").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_10.setTransform(50.825,25.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#418576").s().p("Ag5A6QgYgYAAgiQAAghAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAhQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_11.setTransform(50.8,25.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7BCBBD").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgeAqAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAfgrgBQgqABgfgfg");
	this.shape_12.setTransform(50.8,25.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5F5F6").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_13.setTransform(50.8,25.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B24938").s().p("AgTAnIAAhNIAnAAIAABNg");
	this.shape_14.setTransform(52.775,75.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#418576").s().p("AgTAnIAAhNIAnAAIAABNg");
	this.shape_15.setTransform(48.825,75.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B24938").s().p("AgTAnIAAhNIAnAAIAABNg");
	this.shape_16.setTransform(52.775,44.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#418576").s().p("AgTAnIAAhNIAnAAIAABNg");
	this.shape_17.setTransform(48.825,44.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DB5139").s().p("AgTEXIAAotIAnAAIAAItg");
	this.shape_18.setTransform(52.775,51.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7BCBBD").s().p("AgTEXIAAotIAnAAIAAItg");
	this.shape_19.setTransform(48.825,51.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DB5139").s().p("AmlAUQgFAAgEgHIgNgaQgDgGAHAAINvAAQAGAAgCAGIgPAbQgEAGgGAAg");
	this.shape_20.setTransform(50.802,87.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CC8E3C").s().p("An7AnIAAhNIP3AAIAABNg");
	this.shape_21.setTransform(50.8,44.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CC8E3C").s().p("An7AnIAAhNIP3AAIAABNg");
	this.shape_22.setTransform(50.8,75.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B24938").s().p("AmpBJQgIAAgKgIQgJgHgEgJIgxhjQgEgJAEgGQAEgHAKAAIPXAAQAKAAAEAHQAEAGgFAKIg3BkQgFAJgJAGQgKAHgJAAg");
	this.shape_23.setTransform(50.8029,84.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5F5F6").s().p("AglAmQgQgPAAgXQAAgVAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAVQAAAXgQAPQgQAQgWAAQgVAAgQgQg");
	this.shape_24.setTransform(89.925,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9AB32").s().p("Am9FhQgZgBgTgSQgSgRAAgbIAApDQAAgaASgSQATgSAZAAIN7AAQAZAAATASQASASAAAaIAAJDQAAAbgSARQgTASgZABg");
	this.shape_25.setTransform(50.8,42.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D5F5F").s().p("AheBLQgGAAgFgEQgFgFAAgGIAAh3QAAgGAFgFQAFgEAGAAIC9AAQAGAAAFAEQAEAFABAGIAAB3QgBAGgEAFQgFAEgGAAg");
	this.shape_26.setTransform(84.9,11.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#757879").s().p("AiggWQAHgFAKAAIEeAAQALAAAHAFIhKAyIitABg");
	this.shape_27.setTransform(84.925,2.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5D5F5F").s().p("AiOByQgKAAgHgIQgHgGAAgKIAAizQAAgJAHgIQAHgGAKAAIEeAAQAJAAAHAGQAHAIAAAJIAACzQAAAKgHAGQgHAIgJAAg");
	this.shape_28.setTransform(84.9,11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.6,92.3);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F5F7").s().p("AhYDnQgHhSAmh5QAzigAIg6QAViMgriZQBfCtANCGQAJBggkBwIggBeQgSA4gIAsQgVB5AmCJQhgiGgMh3g");
	this.shape.setTransform(56.4539,84.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F878C").s().p("AhzEvQgKhsAzifQAdhXAOgvQAYhSAKhEQAbi4g4jJQB9DkAQCvQAMB9gvCUIgqB6QgYBJgKA6QgbCeAyCzQh/iwgPiag");
	this.shape_1.setTransform(34.2884,63.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB431").s().p("AktAjQhkgbhNgqIO9AAQhOAqhjAbg");
	this.shape_2.setTransform(47.925,191.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C23539").s().p("AlwBGQg8g/gfhIQgghNAHhEIMzAAQABAVgBAVQARgEAPAAQAxAAAjAjQAjAiAAAyQAAAxgjAiQgjAjgxAAQgfAAgbgPQgagPgQgZQg9BXhZA3QhgA7hfAAQihAAiFiNgAFChiQgSATAAAaQAAAaASATQATARAaAAQAaAAATgRQASgTAAgaQAAgbgSgSQgTgTgaAAQgaAAgTATg");
	this.shape_3.setTransform(54.613,170.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.3,194.8);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/BNIhsBPIAAmVIFXDbIh/AvIBgCrIhzA+gAAvDGIAqgVIhoixIBdgpIjQiHIAAD5IBUg0g");
	this.shape.setTransform(17.2,25.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545454").s().p("ADAFkQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIA7AAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABgABHFkQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIA9AAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABgAgvFkQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIA7AAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABgAinFkQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIA7AAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABgAkOFkQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgSQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAAOIAlAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABgAELE5QAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA8QgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkREUQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAELDBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkRCcQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAELBJQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAA9QgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkRAkQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAg8QAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAA8QgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAELguQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA8QgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkRhTQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAELimQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkRjLQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAELkeQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAIAAA9QgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAkRlDQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgYQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAlAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABIgfAAIAAASQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAC7lYQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIA8AAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABgABDlYQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIA7AAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBABgAg1lYQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIA8AAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABgAitlYQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQABAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIA9AAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABg");
	this.shape_1.setTransform(10.6,28.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AEBFeQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIg7AAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIgzAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIg9AAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIgzAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIg7AAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAIgxAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIg7AAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAIgyAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAAAAAIglAAIAAgOQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgzQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAg7QgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBIAAgxQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAg8QgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgzQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAg8QgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgzQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAg7QgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBIAAgxQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAAg8QgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgzQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgSIAfAAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAxAAQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABIA9AAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAzAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABIA8AAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAxAAQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIA7AAQABgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBIAxAAQABABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABABIA8AAQAAgBAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAPAAIAAA9QAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIAAAyQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABIAAAxQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIAAAyQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIAAAzQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABIAAAxQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIAAAkg");
	this.shape_2.setTransform(10.6,28.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-7.5,55.1,71.1);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333635").s().p("AkSKBIAAg2IABgBIAbguIAAAAIAZgpIAAgBIAig3IAAgBIAYgoIAAg9QAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAOAAIALgUIAAAAQAghCARhJIAAAAIAGgXIgNgqIAAgGQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIAUAAQAMhJAMh8IAAgBQAIhXAKitIAGiEIAAgEQgOgJAAgRIAAgLQAAgFAJgDIAAgRIgJAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgMQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQANAAAJgPQAIgPAAgdIAAAAQAAgEACgEQABgEADAAQAEAAACAEQACAEAAAEIAAAAQAAAdAIAPQAIAPANAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAMQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgJAAIAAARQAKADAAAFIAAALQAAARgOAJIgBAEIAOD3IABAXIAHBcIAAABIADAcIABACIgBABIADAeIAAABIAEAoIAAABIAFAqIAAAAIAGAvIAAABIAGAiIAUAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABIAAAGIgMAqQAMA3ARAtQANAmAXAsIAOAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAA9IASAeIAAAAIAGAJQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIAAAAIAhA2IAAABIAZApIAAAAIAbAuIABABIgBA2gAhKHtIgFADIgLAGQgpAbgOArIgDANIEpAAIgEgNQgOgrgogbIgLgGIgGgDQghgQgpAAIAAAAQgnAAgjAQgAAzFSIgEgSIAAgBIgKgvQgEgYgDgZIAAAAIgCgLIg3AAIgBALIAAAAIgRBgIAAABIgBAAIgEASIBlAAg");
	this.shape.setTransform(53.075,103.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333635").s().p("AglBGIAAiLIBLAAIAACLg");
	this.shape_1.setTransform(145.875,48.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333635").s().p("AglBGIAAiLIBLAAIAACLg");
	this.shape_2.setTransform(145.875,30.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333635").s().p("AglBGIAAiLIBLAAIAACLg");
	this.shape_3.setTransform(145.875,12.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333635").s().p("AhJNEIAA6HICTAAIAAaHg");
	this.shape_4.setTransform(145.875,83.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3E3E3").s().p("AghGxIAAthIBDAAIAANhg");
	this.shape_5.setTransform(127.2,116.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#418576").s().p("AhwAyIAAhjIDhAAIAABjg");
	this.shape_6.setTransform(127.2,64.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9AB32").s().p("AhwIcIAAw3IDhAAIAAQ3g");
	this.shape_7.setTransform(127.2,113.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBeIAAAwg");
	this.shape_8.setTransform(98.175,48.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAwg");
	this.shape_9.setTransform(98.175,57.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAwg");
	this.shape_10.setTransform(98.175,66.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9AB32").s().p("AhugXIAAgvIDdBeIAAAvg");
	this.shape_11.setTransform(98.175,75.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAwg");
	this.shape_12.setTransform(98.175,85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9AB32").s().p("AhugXIAAgvIDdBeIAAAwg");
	this.shape_13.setTransform(98.175,94.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAvg");
	this.shape_14.setTransform(98.175,103.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAwg");
	this.shape_15.setTransform(98.175,112.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9AB32").s().p("AhugXIAAgvIDdBeIAAAwg");
	this.shape_16.setTransform(98.175,121.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAvg");
	this.shape_17.setTransform(98.175,130.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9AB32").s().p("AhugXIAAgvIDdBeIAAAwg");
	this.shape_18.setTransform(98.175,139.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F9AB32").s().p("AhugXIAAgwIDdBfIAAAvg");
	this.shape_19.setTransform(98.175,148.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C23539").s().p("AiwKvIAA1dIFhAAIAAVdg");
	this.shape_20.setTransform(98.175,98.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D28F7E").s().p("AhBisIBbgLIAoFkIhbALg");
	this.shape_21.setTransform(200.65,88.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C23539").s().p("AisoLIDfgZIB6QwIjfAag");
	this.shape_22.setTransform(203.375,112.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7BCBBD").s().p("AhNl5IBFgIIBWL7IhFAIg");
	this.shape_23.setTransform(183.475,118.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#7BCBBD").s().p("AhNl5IBFgIIBWL7IhFAIg");
	this.shape_24.setTransform(172.375,119.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7BCBBD").s().p("AhmhtICygVIAcDwIizAVg");
	this.shape_25.setTransform(171.35,61.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#418576").s().p("AjappIElgiICQT1IklAig");
	this.shape_26.setTransform(175.95,102.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E3E3E3").s().p("A4tBkIAAjHMAxbAAAIAADHg");
	this.shape_27.setTransform(158.2,177.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.4,187.2);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sound();
	this.instance.setTransform(0,0,0.0977,0.0977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.5,81.5);


// stage content:
(lib.Arrows5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		this.stop();
		this.stop();
		createjs.Sound.play("intro");
		//this.stop();
		
		this.b3.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.dhoti.play();
			this.correct.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {	
			this.wrong2.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.wrong3.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
		
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			this.wrong1.play();
			var my4=createjs.Sound.createInstance("wro");
		this.my4;
		my4.play();
		
		}
		
		this.b8.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9() {
			
			//this.wrong3.play();
			var my9=createjs.Sound.createInstance("intro");
		this.my9;
		my9.play();
			
			
		
		}
		playSound("intro");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(1108.55,1058.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_1.setTransform(1098.775,1052.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_2.setTransform(1085.225,1052.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_3.setTransform(1075.425,1052.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_4.setTransform(1061.2,1058.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_5.setTransform(1054.525,1052.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_6.setTransform(1041.7,1052.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_7.setTransform(1028.7,1052.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_8.setTransform(1009.4,1052.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_9.setTransform(994.475,1052.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_10.setTransform(979.725,1052.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_11.setTransform(966.725,1052.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_12.setTransform(953.85,1052.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_13.setTransform(940.525,1052.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_14.setTransform(927.15,1052.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_15.setTransform(907.75,1052.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_16.setTransform(893.575,1052.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_17.setTransform(879.675,1052.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_18.setTransform(860.775,1052.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_19.setTransform(845.975,1052.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_20.setTransform(831.325,1052.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_21.setTransform(817.425,1052.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_22.setTransform(799.275,1052.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_23.setTransform(785.925,1052.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_24.setTransform(770.825,1052.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_25.setTransform(760.4,1052.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_26.setTransform(751.025,1052.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_27.setTransform(736.675,1052.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_28.setTransform(716.9,1052.125);

	this.instance = new lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1();
	this.instance.setTransform(1313,48,0.25,0.25);

	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(-354.1,74,1,1,0,0,0,10,50);

	this.instance_2 = new lib.Symbol25copy();
	this.instance_2.setTransform(2043.85,587.25,1,1,0,0,0,20,16);

	this.wrongsound = new lib.Symbol22copy();
	this.wrongsound.name = "wrongsound";
	this.wrongsound.setTransform(2037.5,521.9);

	this.corrsound = new lib.Symbol21copy();
	this.corrsound.name = "corrsound";
	this.corrsound.setTransform(2018.5,476.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.corrsound},{t:this.wrongsound},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.wrong3 = new lib.Symbol20();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(808.55,775,0.9999,0.9999,0,0,0,52,48.2);

	this.wrong2 = new lib.Symbol20();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(352.25,355.1,0.9999,0.9999,0,0,0,52,48.2);

	this.wrong1 = new lib.Symbol20();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(1418.6,720.35,0.9999,0.9999,0,0,0,52,48.2);

	this.correct = new lib.Symbol19();
	this.correct.name = "correct";
	this.correct.setTransform(1047.1,596.85,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correct},{t:this.wrong1},{t:this.wrong2},{t:this.wrong3}]}).wait(1));

	// Background
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_29.setTransform(960,540);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_30.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer_4
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape_31.setTransform(283.4166,79.1272,0.64,0.64);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_32.setTransform(178.6558,109.0625,0.64,0.64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_33.setTransform(178.6912,109.0449,0.64,0.64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_34.setTransform(165.3121,110.7744,0.64,0.64);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_35.setTransform(165.2993,110.7264,0.64,0.64);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_36.setTransform(161.579,101.6426,0.64,0.64);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_37.setTransform(161.5686,101.6905,0.64,0.64);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_38.setTransform(160.3863,107.2709,0.64,0.64);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_39.setTransform(160.3264,107.1078,0.64,0.64);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_40.setTransform(165.5871,111.0464,0.64,0.64);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_41.setTransform(165.5713,110.9824,0.64,0.64);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_42.setTransform(161.8332,101.9146,0.64,0.64);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_43.setTransform(161.8267,101.9465,0.64,0.64);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_44.setTransform(160.6263,107.5436,0.64,0.64);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_45.setTransform(160.5943,107.3949,0.64,0.64);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_46.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_47.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_48.setTransform(152.8439,93.9269,0.64,0.64);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_49.setTransform(142.5241,108.2465,0.64,0.64);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_50.setTransform(153.6438,121.5582,0.64,0.64);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_51.setTransform(146.492,113.1584,0.64,0.64);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_52.setTransform(145.788,103.1426,0.64,0.64);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_53.setTransform(152.7959,93.7509,0.64,0.64);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_54.setTransform(146.188,96.3908,0.64,0.64);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_55.setTransform(146.972,119.3822,0.64,0.64);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_56.setTransform(246.2816,101.9427,0.64,0.64);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_57.setTransform(280.4567,89.839,0.64,0.64);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_58.setTransform(279.0807,95.4842,0.64,0.64);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_59.setTransform(276.7448,95.1002,0.64,0.64);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_60.setTransform(279.6567,93.8149,0.64,0.64);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_61.setTransform(277.9128,93.0949,0.64,0.64);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_62.setTransform(273.1609,86.2311,0.64,0.64);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_63.setTransform(275.5186,85.3751,0.64,0.64);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_64.setTransform(277.8648,85.3875,0.64,0.64);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_65.setTransform(277.8968,87.191,0.64,0.64);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_66.setTransform(277.6568,87.175,0.64,0.64);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_67.setTransform(279.6727,86.791,0.64,0.64);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_68.setTransform(277.5128,86.4532,0.64,0.64);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_69.setTransform(274.2009,87.079,0.64,0.64);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_70.setTransform(273.7529,88.823,0.64,0.64);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_71.setTransform(272.2391,87.7586,0.64,0.64);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_72.setTransform(280.2967,85.7107,0.64,0.64);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_73.setTransform(281.5092,90.8709,0.64,0.64);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_74.setTransform(275.0688,97.5748,0.64,0.64);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_75.setTransform(274.7328,95.8019,0.64,0.64);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_76.setTransform(274.3115,92.9424,0.64,0.64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_77.setTransform(279.0327,94.2869,0.64,0.64);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_78.setTransform(279.8487,87.399,0.64,0.64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_79.setTransform(279.4967,87.287,0.64,0.64);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_80.setTransform(279.2087,87.335,0.64,0.64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_81.setTransform(278.1208,87.335,0.64,0.64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_82.setTransform(277.3848,87.335,0.64,0.64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_83.setTransform(279.6087,89.207,0.64,0.64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_84.setTransform(277.8248,89.335,0.64,0.64);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_85.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_86.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_87.setTransform(277.7048,88.663,0.64,0.64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_88.setTransform(277.7208,88.6775,0.64,0.64);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_89.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_90.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_91.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_92.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_93.setTransform(273.7849,90.7589,0.64,0.64);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_94.setTransform(275.4218,101.4147,0.64,0.64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_95.setTransform(275.3368,99.6707,0.64,0.64);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_96.setTransform(276.1848,113.6665,0.64,0.64);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_97.setTransform(276.2141,111.0594,0.64,0.64);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_98.setTransform(276.0894,108.5634,0.64,0.64);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_99.setTransform(275.5475,105.9926,0.64,0.64);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_100.setTransform(275.4808,103.3677,0.64,0.64);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_101.setTransform(277.0452,98.7787,0.64,0.64);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_102.setTransform(277.0416,98.7427,0.64,0.64);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_103.setTransform(273.4675,98.0068,0.64,0.64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_104.setTransform(271.65,107.4231,0.64,0.64);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_105.setTransform(198.4915,85.4649,0.64,0.64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_106.setTransform(256.3773,86.935,0.64,0.64);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_107.setTransform(252.7,97.7828,0.64,0.64);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_108.setTransform(251.6915,109.2029,0.64,0.64);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_109.setTransform(243.6916,104.8119,0.64,0.64);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_110.setTransform(243.9776,100.4032,0.64,0.64);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_111.setTransform(244.8995,102.8634,0.64,0.64);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_112.setTransform(246.4095,99.8175,0.64,0.64);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_113.setTransform(247.1295,96.6048,0.64,0.64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_114.setTransform(247.7695,93.9296,0.64,0.64);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_115.setTransform(243.9136,110.4605,0.64,0.64);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_116.setTransform(244.6976,107.1773,0.64,0.64);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_117.setTransform(245.4816,103.6574,0.64,0.64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_118.setTransform(240.6977,114.9793,0.64,0.64);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_119.setTransform(247.1455,90.9365,0.64,0.64);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_120.setTransform(243.4016,102.9986,0.64,0.64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_121.setTransform(243.3856,102.9666,0.64,0.64);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_122.setTransform(240.5697,114.9823,0.64,0.64);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_123.setTransform(240.5712,114.9807,0.64,0.64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_124.setTransform(247.1295,90.8951,0.64,0.64);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_125.setTransform(247.1455,90.9029,0.64,0.64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_126.setTransform(244.3674,104.4886,0.64,0.64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_127.setTransform(244.3456,104.4306,0.64,0.64);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_128.setTransform(198.3787,82.2494,0.64,0.64);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_129.setTransform(203.5032,87.9395,0.64,0.64);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_130.setTransform(200.2667,84.0391,0.64,0.64);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_131.setTransform(198.603,83.7831,0.64,0.64);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_132.setTransform(196.5708,84.1831,0.64,0.64);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_133.setTransform(196.5548,84.1671,0.64,0.64);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_134.setTransform(198.7635,89.4957,0.64,0.64);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_135.setTransform(197.3068,88.919,0.64,0.64);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_136.setTransform(198.5974,88.551,0.64,0.64);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_137.setTransform(200.0267,87.815,0.64,0.64);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_138.setTransform(197.3068,87.911,0.64,0.64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_139.setTransform(200.0267,87.783,0.64,0.64);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_140.setTransform(197.3228,87.895,0.64,0.64);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_141.setTransform(199.9734,87.5942,0.64,0.64);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_142.setTransform(197.2444,87.596,0.64,0.64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_143.setTransform(200.132,86.8124,0.64,0.64);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_144.setTransform(197.0401,86.9958,0.64,0.64);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_145.setTransform(198.5048,87.23,0.64,0.64);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_146.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_147.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSg/IAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAgAgShGg");
	this.shape_148.setTransform(226.81,105.2226,0.64,0.64);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_149.setTransform(226.778,105.2546,0.64,0.64);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_150.setTransform(213.7224,108.7265,0.64,0.64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_151.setTransform(213.7211,108.7409,0.64,0.64);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_152.setTransform(260.8892,98.9027,0.64,0.64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_153.setTransform(260.8732,98.9027,0.64,0.64);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_154.setTransform(261.1132,109.2225,0.64,0.64);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_155.setTransform(261.1132,109.2545,0.64,0.64);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_156.setTransform(188.443,98.9027,0.64,0.64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_157.setTransform(188.427,98.9027,0.64,0.64);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_158.setTransform(188.667,109.2225,0.64,0.64);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_159.setTransform(188.667,109.2545,0.64,0.64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_160.setTransform(164.6836,110.4139,0.64,0.64);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_161.setTransform(164.1577,101.3613,0.64,0.64);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_162.setTransform(212.0744,96.6628,0.64,0.64);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_163.setTransform(215.7863,96.4228,0.64,0.64);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_164.setTransform(198.2027,91.3669,0.64,0.64);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_165.setTransform(198.3627,98.6467,0.64,0.64);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_166.setTransform(198.3947,97.2868,0.64,0.64);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_167.setTransform(198.4427,96.0388,0.64,0.64);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_168.setTransform(198.5033,93.4468,0.64,0.64);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_169.setTransform(204.3786,107.3185,0.64,0.64);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_170.setTransform(193.4829,106.6945,0.64,0.64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_171.setTransform(205.6114,108.3768,0.64,0.64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_172.setTransform(192.3621,107.494,0.64,0.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_173.setTransform(194.3146,92.7269,0.64,0.64);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_174.setTransform(192.6274,88.1745,0.64,0.64);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_175.setTransform(192.5954,88.1895,0.64,0.64);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_176.setTransform(198.492,95.7508,0.64,0.64);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_177.setTransform(198.4882,95.7028,0.64,0.64);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_178.setTransform(202.173,93.5482,0.64,0.64);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_179.setTransform(203.3626,96.7788,0.64,0.64);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_180.setTransform(203.3626,96.8108,0.64,0.64);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_181.setTransform(198.4747,93.5653,0.64,0.64);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_182.setTransform(198.6832,103.8215,0.64,0.64);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_183.setTransform(199.7867,109.9745,0.64,0.64);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_184.setTransform(199.8027,111.2544,0.64,0.64);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_185.setTransform(170.1554,120.7102,0.64,0.64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_186.setTransform(161.9796,124.2941,0.64,0.64);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_187.setTransform(172.2194,95.9108,0.64,0.64);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_188.setTransform(163.0196,90.439,0.64,0.64);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_189.setTransform(157.9157,127.174,0.64,0.64);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_190.setTransform(157.7077,87.991,0.64,0.64);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_191.setTransform(168.2675,125.5741,0.64,0.64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_192.setTransform(169.5315,89.735,0.64,0.64);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_193.setTransform(142.7801,108.4385,0.64,0.64);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_194.setTransform(178.9952,109.3825,0.64,0.64);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_195.setTransform(179.0283,109.3649,0.64,0.64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_196.setTransform(165.5902,111.1434,0.64,0.64);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_197.setTransform(165.6353,111.0464,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_198.setTransform(161.9072,102.5565,0.64,0.64);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_199.setTransform(161.9072,101.9943,0.64,0.64);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_200.setTransform(160.7498,107.4278,0.64,0.64);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_201.setTransform(160.6784,107.4278,0.64,0.64);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_202.setTransform(153.7398,121.6222,0.64,0.64);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_203.setTransform(146.652,113.2384,0.64,0.64);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_204.setTransform(145.996,103.4626,0.64,0.64);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_205.setTransform(153.1639,94.2469,0.64,0.64);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_206.setTransform(146.748,97.0788,0.64,0.64);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_207.setTransform(147.228,119.3822,0.64,0.64);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_208.setTransform(246.6175,102.2627,0.64,0.64);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_209.setTransform(280.8887,90.062,0.64,0.64);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_210.setTransform(277.0094,95.4625,0.64,0.64);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_211.setTransform(280.0543,94.172,0.64,0.64);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_212.setTransform(278.3001,93.5412,0.64,0.64);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_213.setTransform(273.6089,86.5031,0.64,0.64);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_214.setTransform(275.8706,85.5719,0.64,0.64);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_215.setTransform(278.0661,85.5454,0.64,0.64);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_216.setTransform(278.2328,87.511,0.64,0.64);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_217.setTransform(278.0088,87.495,0.64,0.64);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_218.setTransform(277.9116,86.7384,0.64,0.64);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_219.setTransform(274.6952,87.2215,0.64,0.64);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_220.setTransform(274.1045,89.1575,0.64,0.64);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_221.setTransform(272.6058,88.0927,0.64,0.64);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_222.setTransform(280.688,86.0128,0.64,0.64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_223.setTransform(281.9253,91.1774,0.64,0.64);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_224.setTransform(275.4136,97.8811,0.64,0.64);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_225.setTransform(275.0848,96.1217,0.64,0.64);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_226.setTransform(274.6475,93.2624,0.64,0.64);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_227.setTransform(279.3847,94.5669,0.64,0.64);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_228.setTransform(280.2007,87.703,0.64,0.64);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_229.setTransform(279.8327,87.607,0.64,0.64);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_230.setTransform(279.5287,87.639,0.64,0.64);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_231.setTransform(278.4568,87.639,0.64,0.64);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_232.setTransform(277.7208,87.639,0.64,0.64);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_233.setTransform(279.9474,89.527,0.64,0.64);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_234.setTransform(278.1688,89.655,0.64,0.64);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_235.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_236.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_237.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_238.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_239.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_240.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_241.setTransform(274.1323,91.0789,0.64,0.64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_242.setTransform(275.7639,101.7352,0.64,0.64);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_243.setTransform(275.6728,99.9907,0.64,0.64);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_244.setTransform(276.5368,113.9705,0.64,0.64);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_245.setTransform(276.5519,111.3664,0.64,0.64);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_246.setTransform(276.4254,108.8834,0.64,0.64);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_247.setTransform(275.8941,106.3106,0.64,0.64);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_248.setTransform(275.8328,103.6877,0.64,0.64);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_249.setTransform(277.2707,98.9619,0.64,0.64);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_250.setTransform(277.2816,98.9187,0.64,0.64);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_251.setTransform(273.8009,98.3268,0.64,0.64);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_252.setTransform(271.9891,107.743,0.64,0.64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_253.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_254.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_255.setTransform(247.7855,87.047,0.64,0.64);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_256.setTransform(253.0311,98.1028,0.64,0.64);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_257.setTransform(251.3084,109.3205,0.64,0.64);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_258.setTransform(244.0279,105.1319,0.64,0.64);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_259.setTransform(244.3296,100.7231,0.64,0.64);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_260.setTransform(245.2358,103.1834,0.64,0.64);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_261.setTransform(246.8649,100.1056,0.64,0.64);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_262.setTransform(245.9369,103.9455,0.64,0.64);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_263.setTransform(240.6197,115.2833,0.64,0.64);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_264.setTransform(247.4495,90.9527,0.64,0.64);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_265.setTransform(243.7056,103.3026,0.64,0.64);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_266.setTransform(243.7216,103.2866,0.64,0.64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_267.setTransform(240.8257,115.2653,0.64,0.64);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_268.setTransform(240.8912,115.3896,0.64,0.64);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_269.setTransform(247.5135,91.0868,0.64,0.64);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_270.setTransform(247.3875,90.8949,0.64,0.64);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_271.setTransform(244.6743,104.6256,0.64,0.64);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_272.setTransform(244.6656,104.7426,0.64,0.64);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_273.setTransform(227.146,105.5426,0.64,0.64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_274.setTransform(227.13,105.5586,0.64,0.64);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_275.setTransform(214.0583,109.0465,0.64,0.64);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_276.setTransform(214.0731,109.0609,0.64,0.64);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_277.setTransform(261.2252,99.2227,0.64,0.64);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_278.setTransform(261.2092,99.2227,0.64,0.64);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_279.setTransform(261.4492,109.5425,0.64,0.64);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_280.setTransform(261.4492,109.5585,0.64,0.64);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_281.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_282.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_283.setTransform(189.003,109.5425,0.64,0.64);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_284.setTransform(189.003,109.5585,0.64,0.64);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_285.setTransform(165.0196,110.7339,0.64,0.64);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_286.setTransform(164.4937,101.6733,0.64,0.64);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_287.setTransform(212.4104,96.9828,0.64,0.64);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_288.setTransform(216.1223,96.7428,0.64,0.64);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_289.setTransform(200.1387,110.2945,0.64,0.64);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_290.setTransform(200.1387,111.5744,0.64,0.64);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_291.setTransform(170.3794,120.9502,0.64,0.64);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_292.setTransform(162.1236,124.5981,0.64,0.64);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_293.setTransform(172.2514,96.2308,0.64,0.64);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_294.setTransform(163.2276,90.7429,0.64,0.64);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_295.setTransform(157.9317,127.478,0.64,0.64);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_296.setTransform(157.9957,88.295,0.64,0.64);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_297.setTransform(168.5235,125.9261,0.64,0.64);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_298.setTransform(169.5315,90.055,0.64,0.64);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_299.setTransform(246.2176,124.7421,0.64,0.64);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_300.setTransform(246.2336,124.7101,0.64,0.64);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_301.setTransform(211.0504,124.0381,0.64,0.64);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_302.setTransform(211.0664,124.0381,0.64,0.64);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_303.setTransform(256.1533,136.882,0.64,0.64);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_304.setTransform(192.9069,134.5339,0.64,0.64);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_305.setTransform(213.6884,110.5691,0.64,0.64);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_306.setTransform(213.9707,110.8612,0.64,0.64);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_307.setTransform(213.9944,110.5345,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).wait(1));

	// Layer_1
	this.b8 = new lib.Symbol6();
	this.b8.name = "b8";
	this.b8.setTransform(1767.25,101.45,1.8331,1.8331,0,0,0,40.8,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.b2 = new lib.Symbol4();
	this.b2.name = "b2";
	this.b2.setTransform(769.8,736.1,1,1,0,0,0,50.8,46.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b4 = new lib.Symbol3();
	this.b4.name = "b4";
	this.b4.setTransform(1369.7,684.85,1,1,0,0,0,51.6,97.4);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.b3 = new lib.Symbol2();
	this.b3.name = "b3";
	this.b3.setTransform(1047.1,596.85,1,1,0,0,0,17.2,25);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.b1 = new lib.Symbol1();
	this.b1.name = "b1";
	this.b1.setTransform(330.1,261.45,1,1,0,0,0,158.2,93.5);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FBB431").s().p("A2bA7IAAh1MAs3AAAIAAB1g");
	this.shape_308.setTransform(1401.15,112.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#628493").s().p("Ao6JxIgDgDQgHgHgHgTIgKgYQgDgFADgFIAIgMQAFgIAAgJQAAgIgGgRQgKggAQgOQAHgFgBgRIgBgcQAAgHAGgGIAJgJQADgFgDgFQgDgGAAgNQAAgMgEgEIgCgBIgNgQQgJgKgIAAQgIAAgCgIIAAgPQAAgDgCgDQgDgFgKgKIgOgRIgEgGQgGgLABgNQAAgPAJgFIABAAQAGgDAEgLQADgLAHgCQAEgBACgEQABgDgBgFQgBgDgFgLQgDgFgSAAQgQAAgDgEIgBgCIgIgVQgGgOgMAAQgIAAgJgEIgQgKQgKgFgKgBIgHAAIgagJIgPgGIgHgBQgGgBgEgIQgCgDgEgNQgDgKgEgEIgXgTQgPgNAEAHQAPAXgIACQgFACgHgHIgMgSIgBgBQgOgSgGgKIgFgLQgCgIgTgQQgVgQgEgIQgHgMgBgUQAAgTAFgDQAFgDAAgGIgFgQQgDgKACgBQABgCALAFQALAGgFgLQgEgLgNgFQgOgGgKgKQgMgLACgIQACgHgGgEQgIgEgFgEQgDgCgIgRQgGgMgIABQgIAAgLgEIgPgHQgdgHgNACQgDABgNgBQgJgBgDAFQgDAFgHgFQgIgFgEADQgEACgJANQgJALgFACQgNAEgbAYQgHAGABgJQABgJALgIQAmgdgaAAQgMAAgGgGQgGgGgIAAQgOgBABgNQABgNAJgGQAhgTgUAAQgOAAgPgIQgPgHAQgCQATgCACgBQADgCgFgJQgCgDgPgNQgHgGAOgCQANgBARgNQAQgMALAAQAKAAAfAGQAhAGARABQASACAcANQAVAJAAgFQAAgIAFgDQAGgEARAAQAKAAAKgHQAGgEAJAGIANAIIAPgBQALAAAFAHQAFAGAHAAIAMgBQAIAAADABQAEABACAFQAAAEAEABQACACAIAAQAIAAAGACQAHADAGgJQAIgKAJAAIAEAAIAMADIALAEQAFACAKABIAaAAQAXgBgGgHIgIgKQgDgFgEgBIgCgBQgDgCAAgEQAAgEADgDIAEgDQAEgCAGgFQAEgCADAGQACADAAALQAAAIAIgBQAHgBABAKQABAJADgDQAGgEAGADQAFACABAIQABAHAEgCQAEgBAAgIQAAgPAQAAIADAAQAKABADASQAEATgLAAIgJABIgUAGQgEAXgNAAQgDAAgDABIgEAGQgCAEgFAAQgHABgDAMQgDAMgCABQgEACADAGQAFAJAAADQABAGAFAEQAEADAMAFIAKADIAhAMQANAGAAAGQAAAKAHAKQADAFACgBQACAAABgIIACgaQACgKAGAAQAGAAgCgIIgGgUQgHgkASgFIAFgCQAQgBAVAOQAOAKAAAHQAAARAQgEIABAAQAFgCACgFQABgGADgBQACgBAEABQAFAAAEAGQACAEAEANQADALAEAEQADADANAIQAJAGgCAEQgBADAKAOQAJALgMAAQgZAAgJAPQgCADgCAAIgEgCIgHgGQgCgCgGABIgMADQgRAHAJAAQAEAAAEACQAFACAHAHQAKAMgJALIgBACQgFAGgHAEQgRAHgFAGIgIALQgHALgHAAQgJAAgGAQQgFANAAALQAAAFgIAGIgMAIQgGAEgCAEQgEAGABAJIABAUQAAAMgFgDQgFgCgJgMIgGgFQgQgOgbALQgEACgPgBQgMAAgGAFIgGAHQgHAKgEAOQgDAPAGAGIAIAIQATAUAKgKIAOgMQAPgKAAAKQAAATABAGQADAQALAAQAKAAAAAIQABANACADIAAABQAJAOALACQAEABAEgBQAEgCAPABQALABAFgDIANgJQAHgEADAHIADAFQAEADAKAAIAQgBIAMAAIAPAAQALACANAHIAbASQAPAKAJAAQAKAAACAJIABAVQAAAKAMAEQAIADAVAFIAaAIQANADANAIQAQAKADAHQADAHgHALIgVAcQgNATAAAOQgBARgJAOQgJANgMACQgLACgJAHQgJAIAAAIQAAAEgHAFQgIAFAAALQgBAPgKAOQgKANgGgDIgJgEQgbgOAKAPQAJAMABAHQABAHgKAEQgEACgPANQgLAKgFgBIgCgCQgFgFgCAEIAAALQAAAPgGAGQgDADgEAAQgGAAAGAPQAGARgDABQgCABgGAKIgPAZQAAAEgBADQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgDAAgEgEgARLI8IgEgSQgCgFAGgFQAFgFAKgDIAFgBIAEgCQACgCACgKQACgHAKgBIACAAQAHABAAAJQAAAJgHAHIAAABQgDADgPAKIgJAIQgIAGgCAHQgBABAAABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAgCgGgAO9IRQgLgPAPgFIAGgCQAFAAACADQADADgBAFQgCAMgHADIgDAAQgEAAgDgEgASIIGIgHgDQgFgEgDgOIgEgMIgGgRQgCgIAFgBIADAAQAHAAAFAOQAFANAGADQADABADAFIAAAPQgDAJgFAAIgCgBgAO7H1QgGgDgMgDIgMgDQgHgDgEgGQgHgKgFgOIgEgJQgBgBAAAAQgBgBAAAAQgBAAAAABQgBAAAAABQgCADABADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAIgWgOQgIgDgGgBQgHgBgHACIgKACIAAAAIgKAAIgNgBQgHABgCAFQgCAJgJADQgGACgJgBQgFgBgJAEQgIADgEgCQgEgCADgJQADgLgFgKQgEgKgDgSQgDgRgDgFQgFgIAGgLQAHgMAOgBQAhgBAAgLIAAgGQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCALAAQAFAAACgCQACgCAAgLQAAgIAJAAIACAAQAHAAADAEIAEAHQACAEADgBQAEgCACgJQABgIAGAAIACAAQADgBAEgHQADgFAEACIABABQAOAHAFASIACAIQADAHAIABIAKACQAJgBACgMIABgUQAAgFAFgDQAEgDAEACQAIAEACALQACANASAaQAVAdALAJQAFAEADAIQAEAPgEAVIgEAQQgRAugTAKQgEACgDAAIgFgCgAAzHIIgCgDQgEgHACgOQABgNgIgKQgIgJgCgPQgCgQgFgIQgKgOgEgQQgFgTAIgKQASgZgMgFQgFgBACgMQABgMgHgEQgJgGgGgPQgFgOAEgJQAEgKgBgJQgCgKgLAAQgHAAgOgEIgXgFIgIAAIgGABIgoANQgGACgKgIQgGgEgJgJIgQgQIgYgZIgIgKQgHgLAGgGIABgBQAGgGAAgEIgGgIIgCgDQgFgHAHgRIAGgLIACgCIAIgWQAGgOAHAAQAIgBAHgIQAGgIAAgJQAAgOANgHIAIgDQAEgBAIgEQAHgEAHgBIALgBQAJAAAIgCIAIgDQANgGAOAAQAMAAARgCQAJABgBALQgCAMANAHIAWALIAPAIQAQAHAEgJQADgHALgBIAUADQApAHAJgBQAJgBAIgHQAIgHABgIQACgOgnAAQgQAAgGgDQgHgEADgJQAGgWAPgGQAQgIAQAAQAFAAAOAEQANAEAHAAQAKgBgCgIQgCgHgLgFQgKgGgCgHQgCgHAFgFQAFgFgDgDQgDgDgIAFIgSAMQgLAGgCgGQgDgIgOAGQgOAFAAALIABAPQABAGgDAGQgEAHgHAFQgIAFgHgBQgFgBABAKQAAALgFACQgGAEgGgHIgJgRQgHgPgKgMIgSgSQgHgGgEADQgDACAGAHIAKAJQAFADAGAAQAEAAABADIAAANIgCAJQgDAIgGAIQgHAJAAgMQAAgPgDgGQgDgKgJgDQgEgCgMgJQgIgIgLAAIgdgBQgNABACAJQADAJgBAIQgCAHgEACIgCAAIgGAAQgKACABAIQABAFgCACIgHAFQgFAFgGACQgIACgHgEQgFgDgOABQgLAAAAgHQAAgEgDgKQgDgHAEgHIAEgPQABgHAHAAIABAAIANABIAOABIAHgBQAIgDADgGQACgHgGgGQgNgMAMgXQAEgGAEgBIAOgCIAIgCQASgHAPgPQADgEAEgNQADgKAGAAQAEAAAEAFQADAGAIAAQAIAAAJgDQAJgDAHAAQAEAAAHACIAMADQAGABAEgEQAFgEgDgLQgCgIAIAAQAPAAADgBQAFgCgHgHQgHgHAGgBQAOgCADgBQAJgFgBgFQgBgGgLACIgUAFQgJABgEgKQgEgJAJgOIARgUQAIgJgNgCQgMgCgDALQgCAHgJAJQgKAKgCAHQgDAGAGANQAGALgGAGIgHAIQgJANgGAAQgDAAgIAHQgGAGgDgHQgDgLgFgGQgFgHgFAEIgJAOQgDAGgHgKQgYgmAPgSIAVgTQANgLAFgIQAZgjARgLIAJgDIAegNQAUgKALAFIAXAIQALAEAIAGQAIAFAHAIQAGAFAJABQANACABALQAAALgOAAQgJAAgPgFQgLgDgEADQgFAEAHAGIAMALQAGAHAIADQAJAEAFgDQADgCgGgHQgDgFAHACQAMADAFAAQAHgBgGgFQgLgKAdAAIAAAAQAGAAgCgPQgDgOAHAAQAHAAABAPQAAAMAFgEIAEgDQASgPARgEIADAAQAGgBgCAGQgCAFAIgDIAMgEQAXgHAKAAQAGAAABgGQABgGAGAAQAFAAAJAHQAJAIAIAAQAJAAgBgDQgCgGAAgGQAAgLAGgPQAHgRAIgCQAIgBABALIADAaQADAOgDAJQgCAGgIAKQgGAIAEAFQAFAEAMgFIAGgDQADgCABgDIADgHIACgEIADgBQAEAAAJAIQAKAHAGAAQAJAAgFgKQgGgKgKgFQgGgCgOgCIgFgBQgFgBADgFQABgDgBgFIgCgKIAAgMIAEgFIABgBIAEgBQACAAgBAMQgCALANgGQAOgGAAgDQgBgCAFgBQAIgCAEAGQADAEAEAIQABAEAJALIAOAQQAEAHADACQADABAAgGQAAgHgEgHQgEgHgFgDQgBgBgBgNQgBgMgHgDQgJgEgDgIQgDgIALgCQAKgBAFgCQAEgBAFgGQALgLAngKIAFgBQAIgBAIADQAGACAEgCQADgCAMACQAKABADgGIAAgBIAEgRQADgIAJgBQAMAAgCAKQgDAKAHgBQAGAAAJABIAQADQAHABAIAAQALAAgGAJQgHAKgMACIgBAAQgbAHgMATQgFAJAHADQAIACAIgIIAJgJQAFgFAHgBQAIgCALADIAhADQASABANAFIABAAQAIAEALABIANACIAKADQAKADADAIQAEAKAHgCIAOgHQAEgCAGAAIAMAAIALgBQAGAAAHgFQAHgFAPgEQAVgFgEAIQgDAIAEAGQAEAFAEgGIAEgFQAHgIALAKQAHAGAPADIAYABQAGAAAIALQAJANAFAAIANgBIARgDIAEABQAFAAAEgCQAEgBAIACIAHACIACABQAPAEACgCQABgBgIgLQgEgGACgCQADgBAHACIAMAFIADABIAOAFIAQAFQAHABAGAEIAEACQAYAUAUAAQANAAgHAPQgIAPgKADQgHADgGgGQgIgKgDgBQgGgEgGABQgFAAgDADQgDADACAFQACAHgGgCQgEgBgMgGIgCgBQgHgEABAEQABADAHAGIAJAFIAHAFQAMAIgMADIgJAAIgHABQgLACgGAIIgKANIgCACQgDADgFgCIgKgGIgGgBIgDABIgKADQgGACgIgBIgBAAQgUgEAUgJIAAgBQAHgDgBgEQgBgDgFAAIgFACQgFAEgHADQgNAEgCgGQgDgHgJAAQgJABgGAKIgLAQQgHAJgFABIgHgCQgHgDgJAAIgRACIgEAAQgSgDgIAAQgKgBgEAIQgKAWgLAHIgIADIgDAAQgIADABAGQAAAGAHAAIADAAIAIgBQAOABAEARQAEATgPAZIgHANQgFAMgGAHQgGAIgGACQgEACgGABIgOAAQgHABgCAFIgGAMQgCAFgHACIgDABQgHABACAEIAIAKIACADIAKAVQADALgIACIgHAAQgGgBgEgIIgDgKQAAgFgKgIQgGgEgBgFQgCgPgLgCQgFgCgFAAQgOAAgEAKQgEAKAKAAQAHAAgDAPQgDASAEAGQAJAKAEAMQAFAOgGAHQgEAEgHAMQgGAKgGACIgVANQgQAKgLAAIgHAAQgOACgIAHQgJAHAGALQARAfACAGQAAAEgHAHQgKAKgDAGQgJAQgSgVIgIgHQgRgQAAALQAAAcAIAEQAGADADAEQARAQAAASQAAAJgFgEIgMgLIgEgDQgEgCgEgNQgDgOgFgDQgIgFgCgGQgCgGAGgNQAGgMgFgIQgFgIgMAAQgHAAgBgJQgCgOgCgCIgEgFQgNgIgHgBQgMgDgLAGQgJAFgRANQgOALgDABIgDABQgBADgBALQAAANgCAFQgGAXgMgCQgFgBgPgZIgMgSQgGgHADgYQACgUgFAAQgQAAgXgUQgMgKgFgCIgVAAQgJAAgKAEQgGABgHgFQgFgDgFgBIgIgBQgKgCgEgFIgEgGQgGgNgJAAQgIAAAGAKIAJAPQAHAJAFADQAGADAEgCIAEgBIAIgBQAOAAAIAKQAFAFgLASIgPAZIgBABQgCADgGADIgOAGQgVAIgEACIgNALQgHAFgFgCQgGgBgFgLIgCgFQgFgLgRgbQgQgXgEgMQgOgmgMACQgGAAAJAYQAHATAJARIAPAdQAKATAJAJQAIAIAHAEQANAHAMgBIAEgCQANgEAFACQAIAEgHAQQgIASgPAUQgNASgMAJIgDADQgIAGgIARQgHAQgEABQgFADAEAFIAIAMQAEAIABATQAAATgFAIQgNAbgOACQgHABgBAJQgBAJAGAEQAFAEgGAGQgGAHgLABQgHAAAAAXQABAXgGABQgGAAgRAKQgQAJgLACQgSADgJABIgFAAQgMAAgFgGgAP4GTQgGgHAHgBIACgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgCAGgDAAgADuGFQgCgTgDgDQgHgIAHgTQADgHAEgDQAEgDAOgUQAKgNAGAAQAKgBABAKQABAJgHAHQgFAEAFAXQAEAXgFACQgEABgGAJIgKAOQgGAHgEAAIgCAAQgGAAgCgNgARBFtQgIgEgBgGQgCgFAJAAIACAAQAJACAGAHQAFAHgJABIgCAAQgEAAgFgCgARaFQQgIgDgDgHQgEgIAGgBQAEABAFADQAGAEACAGQACAFgGAAgASPFNQgFgHAHgBIABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAGgEAAgASgFHQgFgGAGgCIABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABgBABQAAAAAAABQgBAGgEAAgADmEpQgFgGAHgCIABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAGgEAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBgAQwEkQgIgBgFgGQgEgHAJAAQACAAAGAEQAEAEABADQABADgFAAgAMoESIgCgBQgFgHAGgBIABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQgCAGgDAAIgBAAgAQVEOQgLgDgEgDQgFgEAIgCQADgBAJACQAIADAGAEQAFAEgHABIgDAAIgJgBgAOUEIQgGgGgIgMQgQgaAKgCIAGABIASAEQAMACAEAAIABAAQAJgBAHAEQAJAEAAAGQgBAEAGAJQAHAKAAADQADAFgHgBIgDAAQgGgBgJgFQgGgCgEABIgFACIgKAFIgDABQgFAAgDgFgALBEFQgNAAgDgFQgCgFAOAAIAEABQALABABAEQACAEgMAAgAKZD7QgJgCgMgJIgJgJQgNgPgGgMQgIgRANAAQAJgCAOALQAMAJAKAOQAJAOAAAJQABAJgIAAIgDAAgAPvDxQgIgEgEgGQgEgGAHABQADAAAGADQAJAGADAFIAAAEIgDAAQgDAAgGgDgAE8DyQgFgFAGgDIABAAQAGgCgBAGQgBAGgEAAIgCgCgANlDoQgHgDgCgFQgCgFAHAAIAEACQAGADADAEQADAFgGAAgALYDnQgGAAgGgEQgHgEgDgGIgBgCQgIgMAIgIIAIgGQAJgEANgOQAKgMAGAAQAKAAgEAYQgCALgLATQgLASgFAAIAAAAgAMUDlQgHgCgEgHQgEgIAFAAQADAAAHAGQAEAEABAEQACAEgFAAgAHHDGIgBgBQgFgGAGgCQADgCACABQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAADgCACIgDABIgBAAgAHCC3IgCgBIgCgEIAAgCIADgCIABgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIgBADQgBABAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAgAHECnIgCgDIAAgEQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIACgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBAGgEAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAE0ChQgFgGAGgCIABgBQAGgBgBAGQgBAGgEAAgAMiCeQgKgNANgEIADgBQAFgCADADQADADgBAFQgDAMgHAAQgEAAgCgDgARgCdQgEgGAGgCIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgCAGgDAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBgAG7CdQgFgGAHgCIABgBQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABAEIgBABQgCAFgCAAgAHxCcQgHgBgBgKQgBgLAHABIACAAQAHABACAJQACAIgIADgAJMCZQgFgGAGgCIABgBQAGgBgBAGQgBAGgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBgAElB8QgFgHAHgCIABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQgBAGgEAAgAG4B7QgFgHAGgBQABgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgCAEQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAIgDgBgAMUBtQgFAAgDgHQgCgGAFAAIAFAAQAEACABAEQACAEgEACIgDABIAAAAgAMQBQQgKgBgBgIQgBgIALgBQADAAACACQAEADAAAGQABAGgFABIgCAAIgCAAgAofBNQgIgBgBgDQgBgDAKAAIAAAAQAIAAAEAEIAAAEIgGAAgAo9BMQgIgBgCgHQgCgHAMgBIAEAAQAIAAgBAIQgBAIgIAAgALCBEIgBgBQgFgCAAgFQgBgGAFAAIABAAQAFABAAAHQABAGgDAAIgCAAgApnA3QgHgDgBgDQgBgEAHAAIACAAQAIABAEAFQAEAFgJAAgAp+AsIgEgBQgJgCgCgGQgCgFAJABIAEAAQAIACACAGQACAFgHAAIgBAAgAMUAoQgGgBgBgIQgBgJAHABIABAAQAHABgBAIQgBAIgEAAIgBAAgApcAcQgFgDgGACIgGACQgDABgDgCQgFgDACgGQACgGAHgCQAEAAACACQAIADAFAIQAEAGgCAAIgEgCgAM/AQIgDgCQgFgGAHgCIABAAQABgBAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAGgDAAIgBAAgAjFgKQgFgGAGgCIACgBQAFgBgBAFQgBAFgDABIgBABIgCgCgANXgiIAAgBQgHgDABgFQABgEAFABIAAAAQAEACABAHQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgDgBgAjTgjQgFgGAGgCQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAADgCACIgDABIgCgCgAi9goQgFgHAGgCIACAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAAAQgBAGgDAAgANyg6QgCgLAGABQADgBACADQAFAFgFAFIgCACQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgCAAgBgGgAODhAQAAgGADAAIACAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDAEIAAAAIgCACQAAAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBgAOMhFQgCgGgEgBQgDgBgEACIgEAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAEgCIAHgCIAGAAQADAAACgEQACgDAEgCQAEgCABgDIACgKQABgFAEABQAFACABAIIAAACIgBACQgDAEgBAKQgBAKgHADQgJACgBACQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAgBgAOih0QgCAAgDgEQgCgEgBgEQAAgBAAAAQABgBAAAAQAAAAABAAQABAAABAAQAEAAABgCIgBgMQgBgHAEACQACAAACACIADAFQABABAAABQAAAAABABQAAAAABAAQAAABABAAQAOADgIAFIgHAHQgDADgCgBIgBgBIgFgFQgBAAgBAAQAAAAAAAAQAAAAAAABQAAABABABQAEAIgEAAIgBAAgAoTiCQgFgBgBgFQgBgEAFgBIACAAQAFgBABAGQAAAGgFAAgAoEiIQgHgBgBgGQgBgHAHgBIACAAQAHgBABAIQABAIgHAAgAOpiXQgFgDgEgFQgEgGAFAAQADAAAFAEQAIAIgCAEIgBAAIgFgCgAnPigIgCAAIgSgJQgFgFAFgKQADgHAAgHQAAgBAGAAIAJABQAHACAEAHIAHAPQAEAJgEAFQgCADgEAAQgEAAgGgDgAOpivIAAAAQgFgFAAgJQgBgJAFABIABAAQAGABACAHQACAGgEgBQgCAAABAHQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAAAIgDgBgAh2jIQgCgOABgCQABgDANgFQAJgEgFgYQgEgWAFAAIADAAQALgBAEANQADAKgCAKQgBACAGAWQAEARgLAAQgGAAgIADIgOAGIgBAAQgFAAgBgIgAiLjOQgEgDABgGIABgUQAAgLAKABIACAAQAIgBABANQABALgEALQgDAGgFABIgCAAQgEAAgCgCgAQJjTQgGgBAAgEIABgNQABgJgCgEQgCgGABgDQABgEAJgIIAJgJIAKgLQAFgEAGAAQADAAADADQAGAHADAMQAEAMgEAAQgDABgBANQgBAMgEAAIgDgCQgHgEgCAEQgCAHgDAFQgDAEgHACIgGABIgGgBgAhAjUQgFgGAHgCIABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAHgEAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAgAOpjdQgFgCgBgEQgCgDAHABIABAAQAGABABADQABAEgFAAgARfjkQgDAAgCgCQgFgDgCgEQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIAGADQAFAEACADQAAABAAAAQABABAAAAQAAAAgBABQAAAAgBAAIgBAAgAhIj9QgFgHAHgCIABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgBAGgEAAgARBkQQgFgBgBgEQgBgEAGAAIABAAQAFABACAEQABAFgFAAgAmJkgQgRgGgLgSQgKgUgFgIQgGgJAEgPQACgNgFgDQgGgEANgOQAHgIgCABQgJAGgJgFQgJgFANgDQAMgCgCgJQgCgIgJADQgKADgFgFQgGgEALgIQAKgIgBgBIgLgDQgEgBgFgNQgHgOgLgDQgLgCgWABIgPAAQgGgBgGgDIgBAAQgIgFAJgHIAIgHQAEgDgGgBIgGAAQgWADgIAAQgIgCADgHQADgHACgDQADgDAGgBIATgBIACAAQAHAAAFgDQAFgDgBgFQAAgFgEgDIgEgCQgIgCAAgHQgBgHANgDIAKgBIAFAAQAMgBALgJQAKgJAOACIAEAAQAMACALAJQAJAGAGgBQAGgCgEgOQgDgJAUAMQAUAMAAgFQgBgJAGAAQAGAAgDgLQgCgLAPABQANAAAPgIQAPgIASAAQAdAAAnARQAoAQgfgDQgigEgVABQgZABAQAKQANAHALgHQAJgGADAGQAFAHAKgBQANgBAEADQALAKAUgJIADgBIAFgBQALAAAMAIQALAIgMACIgeACQgTADAIAGQAFAFgIAJQgIAIAIAEQAMAGgDALQgCAKgLAAQgIAAABAHQACAKgGAFIgLAPQgEAFgKAAQgHAAAJANQAJANgJAAQgOAAgDALQgDAMAOgCQAOgCgBAFQgBAFgPAHQgFADgdAHQgVAGgGAJQgEAHgVAHQgTAHAAAHQAAAUgGARQgIAUgMAAIgHgBgAqQk5QgFgBgBgDIAAgCQABgCAHgCQAKgCABAFQABAGgGACIgDAAIgFgBgAoek6IgfgLQgWgIgPAAIgFgBQgMgDAAgHQgBgHALgBIACAAQAJgBAEgJQAGgLADgDQAIgGgBgCQgBgDgMgJQgHgEgJgDQgNgEgOgBIgRAAIgDgBQgMgBgMgIQgMgJAAgIQAAgXAkgDIAEAAIAQABQAUAEAHADQALAGgKACIgBAAQgGACAGAEQALAGAfAIIAPAEQAKACAFAQQAFASAHADIABABQAIACAGAJQAIAMgIADIgGgBIgJgBQgJgBgBAFQgCAFAIAIIAEADQAEAGAAAHQAAAGgEADQgDACgEAAIgEgBgAqplJQgKgTAYgEIAFABQAMAEAIALQAEAGgEABIgEgBQgHgCgJAEIgLAEIgBAAQgFAAgCgFgAjjlLQgNgLAEgOQAEgNALAEQAHAEAHABIAMABIABAAIAIgBQAJAAADAHQAEAHgGAGIgKAJIgIAEQgHADgHAAQgKAAgJgHgApxl5QgCgGAIgFIAEgBQAHAAADAEQACAFgIAFIgEACIgEAAQgEAAgCgEgAsGmKQgHgGAHgDIAHgBQALAAAIAHQAIAFgIADIgGAAQgNAAgHgFgAtmmKIgCAAIgTgJQgGgCAGgDIABAAQAGgCgHgBQgPgDgBgGQgBgGgUAAQgUAAgFgGQgHgJAFgNQAGgOAPAAQAJgBALAEQAMAFAGAAIAFAAIAVAIQAKAFAIAAIAYgCQAMABAEALIAAACQAIAXAPADIACABQABAAABAAQABAAAAAAQAAAAAAABQAAAAAAAAQgBACgEABQgLADgKAAIgCAAQgHAAgXAGQgMADgHAAQgGAAgDgCgAQwmcQgGgBgBgEQgCgDAHAAIACAAQAFABACAEQABAEgFAAgAE2mgIgBgCQgMgKABgQQAAgQAMgFIADAAIAFgDQADgCAKgRQAGgNAPAAQAMAAAIgHQAGgFARAFQANgBgHALQgHALgLAAQgMAAgVARQgUARgDAMIgEAQQgBAJgEABIgCABQgCAAgEgDgAiDmgQgFgDgBgFQAAgGAGAAIADAAQAIAAADAIQADAIgJAAQgFAAgDgCgASvmiQgKgBAAgGQgBgFALAAQAGAAADAGQADAGgKAAgAsGmkQgIgCgHgHQgFgFgBgDQgBgEAFAAIACAAQAIgBADgCQAEgCgEgDQgEgDABgDQABgDAGgCIAFgBQAHAAACAMQACAMADgBQAGgBgHAKQgGAJgKAAgArhmyQgDgBgCgGQgIgTASgBIAQABQAHABgCAFQgCAFgJAFQgJAEgBACQgBAEgDAAIgBAAgANIm6IgTgCIgNgGIgCgBQgIgGgDgFQgCgFAFAAQADgCAHADIANAHIAKAFIAEAAQAIgBAEAIQADAGgHAAIgDgBgAOXnMQgBgFAKgBQAGgBADADQAFAEgFAEQgDACgDAAIgCAAQgJAAgBgGgAtunSQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAIgJAAQgDgBgBgEQgCgJAGgHQAEgEAGAAQAEAAAHADIAMAGQAFADACgFIADgKQACgDAGABQAGAAAGAKQAHAJAIAAIABAAQAIABAAACQAAACgIABIgJAAIgWgCQgJAAgFADQgGAFgHADQgEACgCAAQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBgAqWnTIgegEQgIAAgFACIgHACQgDgBgEgEQgHgJgCgHQgCgJAKACQAEgCAEACIAHAGQAHAEAJgBQAJAAASABIAUADQATAFgJAFIgKAEIgLABIgJAAgArsnXIgagFIgCAAQgKgBAAgKQABgKALABIAAAAQAHAAAGAHQAGAHADAAIAEAAQAJADAGAEQAIAFgJAAgAPHngQgJgBAAgFQgBgFAJABIABAAQAGAAADAFQADAFgJAAgAOGnrIAAgJQACgCAJgBQAUgBAEABQAFACAAAFQAAAFgFACQgFADgRACIgCAAQgGAAgFgHgAuxnsQgCgIANAAQAIAAAKgHQAKgHAKAAIAFAAQAKACgKAJQgJAHgLAAQgIAAgFAGQgEAFgGAAQgJAAgCgHgAq3nxQAEgXAUgHQAGgCgGgMQgFgMAOgCIACAAQAJAAAJgDQAIgDABgDQAAgDgJgBIgKgBIgKAAIgUABQgHAAgKgDIgGgDQgLgFgCgEQgCgFAPgBIADAAQALAAAdgKIAUgHQASgFAJAAIAIAAQAIAAAJADQAIACAJAAIAGAAQAJgCAPACIAMABIAPADQAOADgKAEIgEACIgPAGQgIAFgEAEIgIAJQgGAIgQAHQgQAHgKgBQgHgBgBAQQgCAQgEAAIgCAAQgDABgJAKQgJAKgGACIgGABIgOABIgXACQgLAAABgHgAssnrQgHgBAAgEQgBgDAIgBIACAAQAKAAABAFQABAFgJAAgArsnuQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAQgBgIAEgGQAFgGAEAAQAFAAgBAIQgBAIAEAAQAHAAgJAFQgGADgEAAIgEgBgArPn/QAAgGAJAAIAFABQAEACAAAEQABADgFABIgEABQgJgBgBgFgAAtn9QgNgJgBgHQgBgGANgBQAPgBgRgGQgRgGgGAHQgHAJgGgRQgFgQARAAQAPAAAFACIAOAFIAIADQARAAAGAFIALAMQALAIgKALQgKAKgOgKQgKgGgDAHQgEAJgCAAQgDAAgDgDgAtmoKIAAgIQACgEAJABQALAAADALQAEALgMAAQgMAAgFgLgAr0oBQgIgCgKAAIgPAAIgKAAQgHAAgGgHQgGgHgCgHQgBgHAGACIADAAQALAAAMAEIAPADIANABQAIAAAFAGQADAEAAAEQABAEgEACIgEABIgEgBgArVoNQgIgEACgKQABgFgKgTQgHgOALABQANgBAHAIQAHAJADAAIABABQAKACADAKQAEAMgMAHIgFADQgGACgFAAQgFAAgEgCgAJOojQgFgDgBgIQAAgHAGgBIACAAQAFgEARAAQASgBgLADQgFABgHALQgHALgHAAIgFgCgAsGooIAAgHQACgCAEAAQAKAAAEAHQAEAIgKAAQgJAAgFgGg");
	this.shape_309.setTransform(1401.1368,202.326);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E3E3E3").s().p("A2bNFIAA6JMAs3AAAIAAaJg");
	this.shape_310.setTransform(1401.15,201.925);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#C23539").s().p("AgfAgQgNgNAAgTQAAgSANgNQAOgNARAAQATAAANANQANANAAASQAAATgNANQgOANgSAAQgRAAgOgNg");
	this.shape_311.setTransform(1396.9,77.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#E3E3E3").s().p("AAAiNIuJE9IgMggIOQk/IAFAQIAGgQIOQE/IgLAgg");
	this.shape_312.setTransform(1396.9,93.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#759297").s().p("A2bN+IAA77MAs3AAAIAAb7g");
	this.shape_313.setTransform(1401.15,196.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#9CBDC3").s().p("A2bNFIAA6JMAs3AAAIAAaJg");
	this.shape_314.setTransform(1472.625,259.775);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_315.setTransform(474.25,321.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_316.setTransform(474.25,317.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_317.setTransform(474.25,314.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_318.setTransform(474.25,310.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_319.setTransform(474.25,307.15);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_320.setTransform(470.6,321.475);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_321.setTransform(470.6,317.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_322.setTransform(470.6,314.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_323.setTransform(470.6,310.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_324.setTransform(470.6,307.15);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_325.setTransform(466.9,321.475);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_326.setTransform(466.9,317.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_327.setTransform(466.9,314.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_328.setTransform(466.9,310.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_329.setTransform(466.9,307.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_330.setTransform(452.225,321.475);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_331.setTransform(452.225,317.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_332.setTransform(452.225,314.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_333.setTransform(452.225,310.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_334.setTransform(452.225,307.15);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_335.setTransform(437.55,321.475);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_336.setTransform(437.55,317.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_337.setTransform(437.55,314.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_338.setTransform(437.55,310.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_339.setTransform(437.55,307.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_340.setTransform(422.85,321.475);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_341.setTransform(422.85,317.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_342.setTransform(422.85,314.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_343.setTransform(422.85,310.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_344.setTransform(422.85,307.15);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_345.setTransform(463.25,321.475);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_346.setTransform(463.25,317.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_347.setTransform(463.25,314.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_348.setTransform(463.25,310.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_349.setTransform(463.25,307.15);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_350.setTransform(459.575,321.475);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_351.setTransform(459.575,317.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_352.setTransform(459.575,314.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_353.setTransform(459.575,310.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_354.setTransform(459.575,307.15);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_355.setTransform(455.9,321.475);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_356.setTransform(455.9,317.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_357.setTransform(455.9,314.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_358.setTransform(455.9,310.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_359.setTransform(455.9,307.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_360.setTransform(448.55,321.475);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_361.setTransform(448.55,317.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_362.setTransform(448.55,314.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_363.setTransform(448.55,310.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_364.setTransform(448.55,307.15);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_365.setTransform(444.9,321.475);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_366.setTransform(444.9,317.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_367.setTransform(444.9,314.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_368.setTransform(444.9,310.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_369.setTransform(444.9,307.15);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_370.setTransform(441.2,321.475);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_371.setTransform(441.2,317.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_372.setTransform(441.2,314.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_373.setTransform(441.2,310.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_374.setTransform(441.2,307.15);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_375.setTransform(433.85,321.475);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_376.setTransform(433.85,317.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_377.setTransform(433.85,314.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_378.setTransform(433.85,310.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_379.setTransform(433.85,307.15);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_380.setTransform(430.2,321.475);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_381.setTransform(430.2,317.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_382.setTransform(430.2,314.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_383.setTransform(430.2,310.7);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_384.setTransform(430.2,307.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_385.setTransform(426.525,321.475);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_386.setTransform(426.525,317.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_387.setTransform(426.525,314.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_388.setTransform(426.525,310.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_389.setTransform(426.525,307.15);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_390.setTransform(419.175,321.475);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_391.setTransform(419.175,317.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_392.setTransform(419.175,314.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#5D5F5F").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_393.setTransform(419.175,310.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_394.setTransform(419.175,307.15);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_395.setTransform(415.5,321.475);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_396.setTransform(415.5,317.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_397.setTransform(415.5,314.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_398.setTransform(415.5,310.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#7BCBBD").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_399.setTransform(415.5,307.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#333635").s().p("AjfCcQhAAAguguQgtguAAhAQAAg/AtguQAugtBAgBIG/AAQBAABAuAtQAtAuAAA/QAABAgtAuQguAuhAAAg");
	this.shape_400.setTransform(444.875,314.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E3E3E3").s().p("AjhDRQhWgBg9g9Qg9g9AAhWQAAhVA9g9QA9g+BWABIHDAAQBWgBA9A+QA9A9AABVQAABWg9A9Qg9A9hWABg");
	this.shape_401.setTransform(444.875,314.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#759297").s().p("A4tBkIAAjHMAxbAAAIAADHg");
	this.shape_402.setTransform(330.1,345.125);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#2C2C2C").s().p("EggeABFIgPiJMBBbAAAQAAA5gpAoQgoAog5AAg");
	this.shape_403.setTransform(1068.35,775.35);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#385665").s().p("ABZCmQgXgHgRgMQgQgNgLgPQgKgPgHgYIBegKQADAVAMANQANALARAAQATAAANgOQAMgOAAgdQAAgfgMgNQgNgOgVAAQgMAAgOAHQgKAFgKAMIhPgLIAeiyIDbAAIAABKIiVAAIgIAxQAOgGARgFQAOgDAPAAQAzAAAeAeQAfAdAAAuQAAAhgQAdQgPAdgeAQQgdAPguAAQghAAgXgFgAi4CmIAAjcQgVAQgWALQgSAKgjALIAAhMQAtgOAcgWQAZgUAQghIBMAAIAAFRg");
	this.shape_404.setTransform(1315.325,479.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E3E3E3").s().p("AgfAvQgLgFgIgNQgIgNAAgQQAAgXAQgOQAOgPAbAAIABAAQAWABALAGQANAGAGANQAHANAAASIAAAFIhNAAQABAKAEAEQAFAGAIAAIABAAQAFAAAGgDQADgCAEgEIAmADQgIAPgNAHQgNAHgXAAQgUAAgLgGgAgOgWQgDAFgBAJIAmAAQgCgLgFgFQgFgFgIAAQgIAAgGAHg");
	this.shape_405.setTransform(1328.5,435.775);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#E3E3E3").s().p("AgsAqQgJgJAAgVIAAg/IAnAAIAAA3QAAAIAEAGQAEADAGAAQAGABAEgGQAFgFAAgNIAAgxIAnAAIAABkIglAAIAAgQQgHAKgJAEQgHAFgMAAQgQAAgKgKg");
	this.shape_406.setTransform(1315.375,435.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E3E3E3").s().p("AgVBGIAAhpIgsAAIAAgiICDAAIAAAiIgtAAIAABpg");
	this.shape_407.setTransform(1302.6,433.85);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#E3E3E3").s().p("AgQBmQgHgIAAgKIAAinQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKIAACnQAAAKgHAIQgHAHgKAAQgJAAgHgHg");
	this.shape_408.setTransform(1345.475,421.425);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#C23539").s().p("AnZCsIAAiyQAAhEAwgwQAwgxBEAAIJqAAQBEAAAxAxQAwAwAABEIAACygAEBgrQgSASAAAZQAAAaASASQATATAaAAQAaAAASgTQASgSAAgaQAAgZgSgSQgSgTgaAAQgaAAgTATgAlZgrQgSASAAAZQAAAaASASQASATAaAAQAaAAATgTQASgSAAgaQAAgZgSgSQgSgTgbAAQgaAAgSATg");
	this.shape_409.setTransform(1315.325,432.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#E3E3E3").s().p("Ak1HbQhEgBgwgwQgwgxAAhEIAAppQAAhEAwgxQAwgwBEgBIJqAAQBEABAxAwQAwAxAABEIAAJpQAABEgwAxQgxAwhEABgAEBlaQgSASAAAaQAAAbASARQATATAaAAQAaAAASgTQASgRAAgbQAAgagSgSQgSgSgagBQgaABgTASgAlZlaQgSASAAAaQAAAbASARQASATAaAAQAaAAATgTQASgRAAgbQAAgagSgSQgSgSgbgBQgaABgSASg");
	this.shape_410.setTransform(1315.325,462.55);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#759297").s().p("Ak1HbQhEgBgwgwQgwgxAAhEIAAppQAAhEAwgxQAwgwBEgBIJqAAQBEABAxAwQAwAxAABEIAAJpQAABEgwAxQgxAwhEABg");
	this.shape_411.setTransform(1315.325,462.55);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#C23539").s().p("AnxD5QABjOCRiRQCSiSDNAAQDOAACRCSQCTCRAADOg");
	this.shape_412.setTransform(530.9,757.375);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#C23539").s().p("AhsBtQgugtAAhAQAAg/AugtQAtgtA/AAQBAAAAtAtQAtAtABA/QgBBAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_413.setTransform(580.5,505.275);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FBB431").s().p("AjzBkQA9hZCJhQQCEhPBygQIArA1QhvAGiXBZQibBcgqBZg");
	this.shape_414.setTransform(843.275,366.35);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FBB431").s().p("AiRCVQg+g9gBhWQgBhVA9g+QA8g+BXgBQBVgBA+A9QA+A8ABBXQABBVg9A+Qg8A+hXABIgCAAQhUAAg9g8g");
	this.shape_415.setTransform(580.5006,505.2506);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#E3E3E3").s().p("ApSEUQgKjdBiiqIigl5QBKhOBcg4QBag3BrgdIECE9QDEgHDABwQDDBxCBDMQkjCSkfCuQkhCvkIC8Qh4jRgKjjg");
	this.shape_416.setTransform(872.3,394.5);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#C23539").s().p("AgrAsQgSgTAAgZQAAgZASgSQATgSAYAAQAZAAATASQASASAAAZQAAAZgSATQgTASgZAAQgYAAgTgSg");
	this.shape_417.setTransform(822.2,331.8);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FBB431").s().p("AiJCKQg5g6AAhQQAAhQA5g5QA5g5BQAAQBQAAA6A5QA5A5AABQQAABQg5A6Qg6A5hQAAQhQAAg5g5g");
	this.shape_418.setTransform(881.15,429.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#E3E3E3").s().p("AzqITMAnngP5IAcBGMgnnAP5gA0YGhMAnngP5IAfBLIgCgFMgnoAP5g");
	this.shape_419.setTransform(723.25,447.975);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E3E3E3").s().p("AjqTlMAIDgm/IBKAPMgIDAnAgAljTMMAIEgm/IBSARIgIgCMgIDAnAg");
	this.shape_420.setTransform(551.2,646.85);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#3E6171").s().p("A7FU1Ijc/jIDPqGIPnAAMAqNAUsIAAU9g");
	this.shape_421.setTransform(1021.275,534.325);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E3E3E3").s().p("EhPiADgIAAm/MCfFAAAIAAG/g");
	this.shape_422.setTransform(962.575,804.625);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#333635").s().p("EgwYABFQg5AAgogoQgpgogBg5MBlGAAAQAAA5goAoQgpAog4AAg");
	this.shape_423.setTransform(954.2,775.35);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#3E4241").s().p("A7oYvMgEQgmyIDQqHIOcgkMAuEAWlIAAW1QAABrhMBMQhMBMhrAAg");
	this.shape_424.setTransform(1029.9,555.675);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#C23539").s().p("AgLgWIAXAAIgMAtg");
	this.shape_425.setTransform(1254.05,717.725);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#C23539").s().p("AgbAcIAchqIAbAAIgpCdg");
	this.shape_426.setTransform(1258.525,723.375);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#C23539").s().p("AgrBVIA7jcIAcAAIhIEPg");
	this.shape_427.setTransform(1263.1,729.025);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#C23539").s().p("Ag6CNIBZlNIAcAAIhnGAg");
	this.shape_428.setTransform(1267.7,734.7);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#C23539").s().p("AhJDGIB3m+IAcAAIiFHxg");
	this.shape_429.setTransform(1272.275,740.35);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#C23539").s().p("AhYD/ICVowIAcAAIikJig");
	this.shape_430.setTransform(1276.875,746);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#C23539").s().p("AhhE5ICopxIAbAAIioJxg");
	this.shape_431.setTransform(1282.075,746.775);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#C23539").s().p("AhhE5ICopxIAbAAIioJxg");
	this.shape_432.setTransform(1288.175,746.775);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#C23539").s().p("AhhE5ICopxIAbAAIioJxg");
	this.shape_433.setTransform(1294.275,746.775);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#C23539").s().p("AhhE5ICopxIAbAAIioJxg");
	this.shape_434.setTransform(1300.375,746.775);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#C23539").s().p("AgOgeIAaAAIADALIgOAyg");
	this.shape_435.setTransform(1311.725,718.55);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#C23539").s().p("AgehXIAcAAIAhB7IgPA0g");
	this.shape_436.setTransform(1307.15,724.225);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#C23539").s().p("AgtiPIAcAAIA/DsIgOAzg");
	this.shape_437.setTransform(1302.575,729.875);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#C23539").s().p("Ag8jIIAcAAIBdFeIgOAzg");
	this.shape_438.setTransform(1298,735.525);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#C23539").s().p("AhLkBIAbAAIB8HPIgOA0g");
	this.shape_439.setTransform(1293.425,741.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#C23539").s().p("ABNE5IinpxIAbAAICaJAIgNAxg");
	this.shape_440.setTransform(1288.85,746.775);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#C23539").s().p("ABHE5IiopxIAcAAICnJxg");
	this.shape_441.setTransform(1283.375,746.775);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#C23539").s().p("ABHE5IiopxIAcAAICnJxg");
	this.shape_442.setTransform(1277.275,746.775);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#C23539").s().p("ABHE5IiopxIAbAAICoJxg");
	this.shape_443.setTransform(1271.175,746.775);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#C23539").s().p("ABHE5IiopxIAbAAICoJxg");
	this.shape_444.setTransform(1265.075,746.775);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#C23539").s().p("AhyFJICxqRIA0AAIixKRg");
	this.shape_445.setTransform(1306.275,749.35);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#C23539").s().p("AA+FJIivqRIAzAAICwKRg");
	this.shape_446.setTransform(1260.1,749.35);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#C23539").s().p("AinAaIAAgzIFPAAIAAAzg");
	this.shape_447.setTransform(1283.175,779.675);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#C23539").s().p("AlYAaIAAgzIKyAAIAAAzg");
	this.shape_448.setTransform(1283.2,713.875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#F9AB32").s().p("AgTAYIAig5IAFBDg");
	this.shape_449.setTransform(1309.125,670.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#B24938").s().p("AiQIEID5wRIAoAKIj5QRg");
	this.shape_450.setTransform(1296.625,725.675);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#F9AB32").s().p("AgMghIAgA7IgnAIg");
	this.shape_451.setTransform(1262.875,668.825);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#7BCBBD").s().p("Ah+oIIApgJIDUQbIgpAIg");
	this.shape_452.setTransform(1273.5,724.35);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#418576").s().p("AgYANIAxguIgPBDg");
	this.shape_453.setTransform(1329.4,681.025);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#F9AB32").s().p("AkfHEIIcudIAjAVIobOdg");
	this.shape_454.setTransform(1301.6,729.65);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#F9AB32").s().p("AgWghIAtAyIgkARg");
	this.shape_455.setTransform(1238.775,676.475);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#418576").s().p("AjyneIAmgQIG+PNIglARg");
	this.shape_456.setTransform(1261.6,727.75);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#616161").s().p("EggWACKIgfkTMA/hAAAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAg");
	this.shape_457.setTransform(1067.575,768.425);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#E3E3E3").s().p("AgQBmQgHgIAAgKIAAinQAAgKAHgIQAHgHAJAAQAKAAAHAHQAHAIAAAKIAACnQAAAKgHAIQgHAHgKAAQgJAAgHgHg");
	this.shape_458.setTransform(1285.175,421.425);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#858786").s().p("EgwYACKQg5AAgogoQgpgpgBg5QABg4ApgoQAogpA5AAMBgyAAAQA4AAApApQAoAoAAA4QAAA5goApQgpAog4AAg");
	this.shape_459.setTransform(954.2,768.425);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#858786").s().p("AgXAXQgKgJAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAJQgKALgOAAQgNAAgKgLg");
	this.shape_460.setTransform(1176.075,691.05);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#858786").s().p("AgXAXQgKgJAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAJQgKALgOAAQgNAAgKgLg");
	this.shape_461.setTransform(1189.225,691.05);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#858786").s().p("AgXAXQgKgJAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAJQgKALgOAAQgNAAgKgLg");
	this.shape_462.setTransform(1202.425,691.05);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#385665").s().p("EgpAAU1MAAAgppMBSBAAAMAAAAppg");
	this.shape_463.setTransform(954.2,534.325);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#333635").s().p("EgnpAZoQhrAAhMhMQhMhMAAhrMAAAgrJQAAhrBMhNQBMhLBrAAMBPTAAAQBrAABMBLQBMBNAABrMAAAArJQAABrhMBMQhMBMhrAAg");
	this.shape_464.setTransform(954.225,549.95);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#585A5A").s().p("AwSHJIH4uRIQ0AAIH5ORg");
	this.shape_465.setTransform(954.225,736.525);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgVATQgKgJAAgKQAAgJAKgIQAJgJAMAAQAOAAAJAIQAJAIAAAKQAAALgJAIQgKAIgNAAQgMAAgJgIg");
	this.shape_466.setTransform(1118.5,111.325);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgTAXAAQAKgBAQAGQARAGAJAAQAnAAABgQQAAgKgcgMQgngSgLgHQgcgTAAgcQAAgnApgOQAZgIAxAAQATAAAKAFQAMAHAAASQAAAkgTAAQgTgBgEgQQgIgBgIAAQguAAAAANQAAAIAcANQAmARAOAKQAcAUAAAaQAAAhgfASQgaANgjAAQgaAAgVgIg");
	this.shape_467.setTransform(1099.95,102.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAHgIQAIgIAMAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgHAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_468.setTransform(1081.1,98.925);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("Ag9BWQgegaAAgrQAAglAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAUQAAAVAOAMQAOALAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegYg");
	this.shape_469.setTransform(1060.975,102.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFAQAAQAbAAARgLQARgJAJgBQAVAAAAAVQAAAVggAPQgcAMgfAAQgtAAgegXgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_470.setTransform(1039.65,102.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AhGCKQgDgHAAgGQAAgKAJgIQAIgHALAAQANAAAJANIAPAZQAHAOAIAAQAKAAADgcQAAgUgHhYQgHhXAAgQQAAgMAHgJQAIgLANAAQAJAAAJAGQAKAHAAAJIAGBrQAGBfAAAVQAAAdgSAXQgUAagdAAQguAAgfhCgAAHiZQgIgJAAgMQAAgMAIgJQAJgIANAAQAMAAAKAIQAJAJAAAMQAAAMgJAJQgKAIgMAAQgNAAgJgIg");
	this.shape_471.setTransform(1018.825,103.175);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("Ag6CUQgGAIgLAAQgKAAgIgHQgIgHABgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgZgKgAgWgDQgNAFgQALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgOAGg");
	this.shape_472.setTransform(1000.75,96.975);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANAMQALAKAOAAQAQABAMgMQAOgNABgYQADg+gkAAQgXAAgOAXg");
	this.shape_473.setTransform(978.0958,102.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_474.setTransform(938.475,96.825);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFARAAQAZAAATgLQAQgJAKgBQAUAAAAAVQAAAVghAPQgbAMgeAAQgvAAgdgXgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_475.setTransform(915.6,102.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AhRCdQgHgIgBgLIABhJIAAhMQAAgqgDgfIgCgmQAAgRAGgLQAJgNAOAAQALAAAHAIQAIAHAAAKIAAACQANgHAOgEQAMgEANAAQAsAAAWAnQAPAcAAAuQAAAqgZAcQgaAegsAAQgQAAgSgEIgBBQQAAALgHAIQgIAHgMAAQgLAAgIgHgAgKhcQgNAFgNAMQACAoAAAnQASAGAQAAQAUAAALgNQAKgNAAgWQAAgbgDgJQgFgZgTAAQgMAAgMAHg");
	this.shape_476.setTransform(894.3,106.9);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_477.setTransform(872.375,102.275);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAtCPQgEgQgEgdQgDgbgBgSIABgPIAAgOIAAgRQgCgKgIAAQgWAAgQATQgJAKgQAcQAABGgHAPQgIAQgQAAQgLAAgJgHQgIgHAAgLIACgLQABgEACgwQgCgoAChaIAAgHIABgeIgBgSIgCgSQgBgLAJgHQAIgHALgBQAUABAGAUQAEAMAAAYIgBAoIgBAmQANgPARgGQAPgHATAAQAhAAAPATQALANACAdIACAwIAEAmQADAWAEAQIABAHQAAAMgJAGQgHAIgMgBQgUAAgGgTg");
	this.shape_478.setTransform(849.95,96.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgTAXAAQAKgBAQAGQARAGAJAAQAnAAAAgQQAAgKgbgMQgogSgKgHQgcgTAAgcQAAgnApgOQAZgIAwAAQAUAAAKAFQANAHgBASQAAAkgTAAQgTgBgEgQQgIgBgIAAQguAAAAANQAAAIAcANQAmARAOAKQAcAUAAAaQAAAhgfASQgaANgjAAQgaAAgVgIg");
	this.shape_479.setTransform(828.05,102.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AAHA+QgFgSgHgwIgFALIgdBLQgDAIgGAFQgIANgRABQgJAAgKgRQgLgRgGgbQgGgYgNhQQgDgSAAgKQAAgKAIgHQAIgIAMAAQAVAAAFAVIAEAbIADAbIAIAxQAOgmATg7QAIgaAVAAQAWAAAHAdQAFATAFAgIAKA2IAeh1QAFgRAUAAQALAAAJAHQAIAHAAALIgBAGQgVBMgUA+QgGARgNATQgKANgPAAQgZgBgOgvg");
	this.shape_480.setTransform(787.725,102.575);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANAMQALAKAOAAQAQABAMgMQAOgNABgYQADg+gkAAQgXAAgOAXg");
	this.shape_481.setTransform(763.0958,102.4);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IAAgSIABgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAhgbArAAQAnAAAAA1IAAAMQgCAegaABQgYAAAAgaIgBgTQgrAGgTAnIAABhQAAALgIAIQgHAGgMAAQgMABgHgIg");
	this.shape_482.setTransform(743.6,102.3);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AhMBmQgHgIAAgKIAAh/IAAgSIABgTQAAgKAHgIQAGgHAMAAQAWAAAEAXQAigbApAAQAoAAAAA1IAAAMQgCAegZABQgZAAAAgaIgBgTQgrAGgTAnIAABhQAAALgHAIQgIAGgMAAQgMABgGgIg");
	this.shape_483.setTransform(724.4,102.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("ABjCTQgPAAgQgkQgKgXgHgeQgPACghACQgeACgQADQgJAWgXArQgIAOgQAAQgKAAgJgHQgIgIAAgLQAAgKAcg6QgCgGAAgFQAAgKATgFQAcgvAhgzQAwhKAMAAQAVAAAHAaIANA+QAMA5ARBHIAKAaQAHARAAAIQAAALgIAIQgIAHgLAAIgBAAgAgOASQAIgCASgBIAbgCIgNhBIgoBGg");
	this.shape_484.setTransform(699.65,97.8265);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFARAAQAZAAATgLQAQgJAKgBQAUAAAAAVQAAAVghAPQgbAMgeAAQgvAAgdgXgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_485.setTransform(656.4,102.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AAuCPQgFgQgEgdQgDgbAAgSIAAgPIABgOIgBgRQgBgKgJAAQgWAAgRATQgJAKgPAcQAABGgHAPQgHAQgRAAQgLAAgIgHQgJgHAAgLQAAgEACgHQACgEAAgwQgBgoAChaIAAgHIACgeIgDgSIgCgSQAAgLAJgHQAIgHALgBQATABAHAUQAEAMAAAYIgCAoIgBAmQAOgPARgGQAQgHASAAQAhAAAPATQALANACAdIADAwIADAmQADAWAEAQIABAHQAAAMgIAGQgJAIgLgBQgUAAgFgTg");
	this.shape_486.setTransform(634.35,96.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAHgIQAHgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_487.setTransform(613.05,98.925);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgSCZQgIgHAAgLIAAkOQAAgLAJgHQAHgHAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgIg");
	this.shape_488.setTransform(580.55,96.7);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgSCZQgIgHAAgLIAAkOQAAgLAIgHQAIgHAKAAQAMAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgLAAgHgIg");
	this.shape_489.setTransform(569.6,96.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_490.setTransform(553.375,102.275);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AAtCRQgJgRgUgZIgegoIgZASQgCAbAAAZQgBAMgHAHQgIAIgLAAQgcgBAAghIACgtQADgfgBgQIABg/IABhBIgBgUIgBgUQABgLAHgHQAHgHAMgBQAMABAHAHQAJAHgBALIABAUIABAVIgBA3IgBA2QAagUA2g2QAIgJALAAQALAAAJAIQAIAIAAALQAAAJgIAIQgWAZghAcIAqA0QAdAoAAANQAAALgJAHQgIAIgMAAQgPgBgIgPg");
	this.shape_491.setTransform(514.7,96.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("Ag9BWQgegaAAgrQAAglAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAUQAAAVAOAMQAOALAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegYg");
	this.shape_492.setTransform(492.525,102.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgYCOQgIgIAAgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAJAHQAHAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQABALgIAIQgIAHgLAAQgLAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIALAAQANAAAJAIQAJAIAAANQAAAMgJAIQgJAIgNAAQgLAAgJgIg");
	this.shape_493.setTransform(477.5,97.625);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgSCZQgIgHAAgLIAAkOQAAgLAIgHQAIgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgLAAgHgIg");
	this.shape_494.setTransform(465.75,96.7);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AhXB3QgdgeABgqQAAhBA4hEQAxg6AyAAIAQABIALACQAJgJANAAQATAAAFAXQAEARAAAVQgBAKgGAIQgHALgOAAQgRAAgJgTQgEgJgDgBQgDgCgNAAQgYAAggAnQgtA0AAAvQAAAVAOAPQAPAPATABQATAAAUgLQAGgDAYgQQAPgKAHAAQAMAAAJAIQAHAJAAAKQAAAMgKAIQg2Atg3AAQgrAAgfggg");
	this.shape_495.setTransform(448.4,97.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#9CBDC3").s().p("EiOpBOdMAAAic5MEdTAAAMAAACc5g");
	this.shape_496.setTransform(958.775,545.1);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("Ak1BLIAAiVIJrAAIAACVg");
	this.shape_497.setTransform(237.95,526);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.b1},{t:this.b3},{t:this.b4},{t:this.b2},{t:this.b8}]}).wait(1));

	// White_bg
	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("EiH4BMcMAAAiY3MEPxAAAMAAACY3g");
	this.shape_498.setTransform(959.975,535.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_498).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: 'AF84F524773F08458FAACDE05B4C441A',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1.png", id:"BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1"},
		{src:"images/sound.png", id:"sound"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/wro.mp3", id:"wro"},
		{src:"sounds/yes.mp3", id:"yes"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AF84F524773F08458FAACDE05B4C441A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;