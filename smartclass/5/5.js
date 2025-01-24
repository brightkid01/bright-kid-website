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



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1 = function() {
	this.initialize(img.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);


(lib.Symbol109 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(58,61,118,0.247)").s().p("EhKyANxIAA7hMCVlAAAIAAbhg");
	this.shape.setTransform(464.7218,88.125,0.9707,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,929.5,176.3);


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap3, null, new cjs.Matrix2D(0.235,0,0,0.235,-8.6,-5.6)).s().p("AhVA4IAAhvICrAAIAABvg");
	this.shape.setTransform(8.575,5.625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,11.3);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.Bitmap2, null, new cjs.Matrix2D(0.235,0,0,0.235,-8.6,-5.6)).s().p("AhVA4IAAhvICrAAIAABvg");
	this.shape.setTransform(8.575,5.625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,11.3);


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
		/* stop();*/
		
		
		this.stop();
	}
	this.frame_1 = function() {
		playSound("wro");
	}
	this.frame_59 = function() {
		/* stop();*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(58).call(this.frame_59).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAhvIAADf");
	this.shape.setTransform(0,11.225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(59));

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
		/* this.stop();*/
		
		
		this.stop();
	}
	this.frame_1 = function() {
		playSound("yes");
	}
	this.frame_74 = function() {
		/* this.stop();*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(73).call(this.frame_74).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(0,13.075);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(74));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,28.2);


(lib.Symbol20copy = function(mode,startPosition,loop,reversed) {
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
		/* this.stop();*/
		
		this.stop();
	}
	this.frame_4 = function() {
		/* stop();*/
		
		
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoFEgIAWABQCHAACnjOIAcgjIgkgnQiZigABhwQgBhdCnh8QAYCgB1CXIAfAnIAYgfQCsjcCNgBQBtAAA4CnIgXgCQgxAAhbBCQhZBCg/BVIgeAoIAdAeQCnChC0AAQhgDDhqAAQhfABizioIgugrIgQAVQihD0hnAAQh3AAhyjBg");
	this.shape.setTransform(7.8,9.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-38.6,103.6,96.2);


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

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
		
		this.stop();
	}
	this.frame_141 = function() {
		/* stop();
		
		_root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;
		_root.b4.enabled=true;*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(140).call(this.frame_141).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol113 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAkFnIAAiQIkkAAIAAh4IE1nFIB0AAIAAHFIBYAAIAAB4IhYAAIAACQgAiABfICkAAIAAj0g");
	this.shape.setTransform(29.575,56.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAcEgIAAhzIjpAAIAAhhID4lqIBcAAIAAFqIBHAAIAABhIhHAAIAABzgAhmBMICCAAIAAjDg");
	this.shape_1.setTransform(29.675,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAcEgIAAhzIjpAAIAAhhID4lqIBcAAIAAFqIBHAAIAABhIhHAAIAABzgAhmBMICCAAIAAjDg");
	this.shape_2.setTransform(29.675,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(58,61,118,0.247)").s().p("AkhHNIAAuZIJDAAIAAOZg");
	this.shape_3.setTransform(28.5,55.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,60.3,115.8);


(lib.Symbol112 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AilEyQg/g1gMhaICJgOQAGAuAdAbQAcAbAmAAQAqABAegkQAegiAAhHQAAhBgegiQgegfguAAQg7AAgvAzIhvgQIBGl0IFqAAIAACBIkCAAIgVB5QAugXAuAAQBcAAA/BCQBABCAABqQAABYg0BGQhFBeh7AAQhkAAg+g1g");
	this.shape.setTransform(30.525,57.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiDD1QgygrgKhIIBtgLQAEAlAXAWQAXAWAfAAQAhAAAYgcQAYgcAAg5QAAg0gXgaQgZgagkAAQgvAAgmAoIhZgMIA4kpIEiAAIAABmIjOAAIgSBhQAlgRAlAAQBJAAAzA1QAyA0ABBUQAABHgqA3Qg3BNhiAAQhQAAgxgrg");
	this.shape_1.setTransform(30.4,57.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiCD4QgzgtgIhIIBqgOQAFApAWAWQAXAVAfABQAhAAAYgaQAXgaAAgsQAAgqgWgXQgXgZggAAQgUAAgdAJIAMhZQArABAYgUQAXgVAAgiQAAgdgRgRQgRgRgcAAQgcgBgUAVQgUATgEAlIhlgRQALg0AVgfQAVgfAmgRQAmgTAwABQBPAAAxAzQApAqAAA2QAABLhTAsQAxALAeAkQAdAlAAAzQAABMg3A1Qg3A2hRAAQhOAAgzgtg");
	this.shape_2.setTransform(29.625,57.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(58,61,118,0.247)").s().p("AlUHhIAAvBIKoAAIAAPBg");
	this.shape_3.setTransform(35.25,56.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.3,115.8);


(lib.Symbol111 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AjwFnQAIhIAnhAQAohBByhrQBchWAWgfQAbgqAAgqQAAgtgYgZQgYgZgsAAQgqAAgaAaQgZAagEA8IiIgOQAMhxBAgxQBBgxBfAAQBrAAA8A5QA9A5gBBVQAAAwgQAsQgTArglAvQgZAghBA8QhAA7gRAUQgSATgKATIEPAAIAAB/g");
	this.shape.setTransform(28.55,56.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ai/EgQAGg7AfgzQAfg0BdhWQBJhDARgZQAWgiAAgiQAAgkgTgUQgUgTgjAAQghgBgVAVQgUAVgDAwIhtgLQAJhbA0gnQAzgnBNAAQBVAAAwAtQAwAuAABEQAAAngNAjQgOAigeAmQgUAZg0AwQg0AwgNAPQgOAPgJAPIDZAAIAABng");
	this.shape_1.setTransform(28.825,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai/EgQAGg7AfgzQAfg0BdhWQBJhDARgZQAWgiAAgiQAAgkgTgUQgUgTgjAAQghgBgVAVQgUAVgDAwIhtgLQAJhbA0gnQAzgnBNAAQBVAAAwAtQAwAuAABEQAAAngNAjQgOAigeAmQgUAZg0AwQg0AwgNAPQgOAPgJAPIDZAAIAABng");
	this.shape_2.setTransform(28.825,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(58,61,118,0.247)").s().p("AksGHIAAsMIJZAAIAAMMg");
	this.shape_3.setTransform(29.25,57.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,60.599999999999994,115.8);


(lib.Symbol110 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhTF8QhdAAAAg6QAAhBBoAAIAVAAIAAmwQgqAdgNAAQgcAAgUgTQgUgUAAgaQAAgaAhgdIA3goIA7gwQAkgaAiAAQAsAAAAA1QAAA6gFBpQgFBqAADDIAAB2IAhAAQAcAAATASQAUASAAAbQAAAbgUASQgTASgcAAg");
	this.shape.setTransform(31.175,74.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhCEwQhKAAAAguQAAg1BSAAIASABIAAlaQgiAYgLAAQgVAAgQgQQgRgPAAgVQAAgWAagWIAsggIAwgnQAcgVAcAAQAjAAAAAqQAAAvgEBUQgEBVAACbIAABfIAaAAQAWAAAQAOQAPAPAAAVQAAAWgPAOQgQAPgWAAg");
	this.shape_1.setTransform(31.425,73.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCEwQhKAAAAguQAAg1BSAAIASABIAAlaQgiAYgLAAQgVAAgQgQQgRgPAAgVQAAgWAagWIAsggIAwgnQAcgVAcAAQAjAAAAAqQAAAvgEBUQgEBVAACbIAABfIAaAAQAWAAAQAOQAPAPAAAVQAAAWgPAOQgQAPgWAAg");
	this.shape_2.setTransform(31.425,73.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(58,61,118,0.247)").s().p("Al8IJIAAwRIL5AAIAAQRg");
	this.shape_3.setTransform(37.25,64.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0,76.1,143.4);


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
		/* stop();*/
		
		
		
		this.stop();
	}
	this.frame_4 = function() {
		/* stop();*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00873C").s().p("Al8G2IgYg4Qg0h6gtg6Qgtg6g3gUQBdhiBOAAQBEAABRC1IAbA9QCTj3DljpQDnjqDbh9IAeAsQi7CNjiEhQjjEjh4D8IhAAsQhRA4gbAaQgMgpgmhdg");
	this.shape.setTransform(46.375,-15.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-72.6,120.39999999999999,114.39999999999999);


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
	this.instance.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
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


// stage content:
(lib._5 = function(mode,startPosition,loop,reversed) {
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
		/* fscommand("fullscreen","true");*/
		
		
		this.stop();
		this.stop();
		//this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		createjs.Sound.play("intro");
		//this.stop();
		
		this.b1.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.dhoti.play();
			this.wrong1.play();
			var my1=createjs.Sound.createInstance("wro");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {	
			this.wrong2.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.correct.play();
			var my3=createjs.Sound.createInstance("yes");
		this.my3;
		my3.play();
		
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
		
			this.wrong3.play();
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_7
	this.b8 = new lib.Symbol6();
	this.b8.name = "b8";
	this.b8.setTransform(1326.25,114.05,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(-212.1,184);

	this.instance_1 = new lib.Symbol25copy();
	this.instance_1.setTransform(2123.85,587.25,1,1,0,0,0,20,16);

	this.wro_sou = new lib.Symbol22copy();
	this.wro_sou.name = "wro_sou";
	this.wro_sou.setTransform(2117.5,521.9);

	this.cor_sou = new lib.Symbol21copy();
	this.cor_sou.name = "cor_sou";
	this.cor_sou.setTransform(2098.5,476.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4CWQgKgIAAgLQAAgNAHgMQAKgOAPAAQAOAAAHAKQAGAJAAALQAAAMgHAKQgIANgOAAQgLAAgJgHgAgtBDQgIgIgBgLQAAgPAagUIAuggQAZgTAAgPQAAgSgTgQQgSgQgUAAQgKAAgTAMQgSAMgHAAQgMAAgIgJQgHgIgBgLQABgTAhgQQAdgOATAAQAqAAAjAfQAhAfABApQgBAogoAeIgfAXQgVANgJAMQgJAKgMAAQgLAAgIgIg");
	this.shape.setTransform(1225.4,116.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAHgHQAGgIAMAAQAWAAAEAXQAigaApAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_1.setTransform(1187.55,121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgwAagjQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAJAAQAVABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_2.setTransform(1166.15,120.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6CUQgGAIgLAAQgKAAgIgHQgIgHABgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgZgKgAgWgDQgNAFgQALIAABTQAbAMASAAQAZAAAQgRQAPgRAAgZQAAgZgNgRQgNgQgXAAQgJAAgOAGg");
	this.shape_3.setTransform(1143.4,115.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRByQgHgIAAgMQAAgWgFgrQgFgqAAgWQAAgNgCgHQgXANgWAfIgEAEIgBA9IAAAOIAAAOQAAAKgJAHQgIAFgLAAQgRAAgGgOQgEgKAAgWIAAhHIgBgdIAAgdQAAgQAGgOQAIgTANABQALAAAJAJQAJAHAAALIgCAQQAdghAbAAQAeAAANAWQAMgKAOgGQAPgFAQAAQAnAAANAmQADAIAGAtQAFAfAJBKQABALgJAHQgIAIgMAAQgWgBgEgWQgDgUgEglIgHg4QgFgjgIAAQgFAAgQAJQgQAJgHAGQAAAXAFAoQAGAsAAAUQAAAMgIAIQgIAGgLAAQgLAAgIgGg");
	this.shape_4.setTransform(1116.4053,121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_5.setTransform(1089.9053,121.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_6.setTransform(1069.425,120.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAHgIQAHgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_7.setTransform(1032,117.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_8.setTransform(1011.875,120.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgwAagjQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAJAAQAVABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_9.setTransform(990.55,120.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAHgHQAGgIAMAAQAWAAAEAXQAigaApAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgGgHg");
	this.shape_10.setTransform(970.45,121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgTQAAgKAGgHQAHgIAMAAQAWAAAEAXQAhgaArAAQAnAAAAA0IgBAMQgBAegaAAQgYAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgHgHg");
	this.shape_11.setTransform(951.25,121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAfQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_12.setTransform(930.4958,121.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_13.setTransform(909.575,120.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgwAagjQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFAQAAQAbAAARgLQARgKAJAAQAVABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_14.setTransform(870.9,120.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAtCPQgEgQgEgcQgEgcABgSIAAgPIAAgOIAAgRQgBgKgJAAQgWAAgRATQgIAKgQAcQAABHgHAOQgHAQgRAAQgLAAgJgHQgIgIAAgKIACgLQACgEABgxQgBgnABhaIABgHIABgeIgCgSIgDgSQAAgLAJgHQAIgHALAAQATAAAHAUQAEAMAAAYIgBAoIgBAmQAOgPAQgGQAQgHASAAQAiAAAOATQALAOACAcIADAwIADAmQADAWAEAQIABAHQAAAMgJAGQgIAIgLgBQgTABgHgUg");
	this.shape_15.setTransform(848.85,115.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRCIQgJgHABgKIAAgWIABgVQAAgXgEhNIglgDQgYgDAAgWQAAgLAHgIQAIgIALAAIAhADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgHAAgLACQAEBOAAAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_16.setTransform(827.55,117.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAtCSQgJgSgUgZIgegnIgaARQgBAbAAAZQgBAMgHAHQgIAIgLgBQgcAAAAggIACguQADgggBgPIABhAIABhAIgBgUIgBgTQAAgMAIgHQAHgHAMAAQAMAAAHAHQAJAHgBAMIABATIABAVIgBA3IgBA1QAbgTA1g2QAIgJALAAQALAAAJAIQAIAIAAALQAAAIgHAJQgXAZghAcIApA1QAeAnAAANQAAAKgJAIQgJAIgLAAQgOAAgJgPg");
	this.shape_17.setTransform(790.65,115.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_18.setTransform(768.475,120.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYCOQgIgIABgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_19.setTransform(753.45,116.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_20.setTransform(741.7,115.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_21.setTransform(725.775,120.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_22.setTransform(686.525,115.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_23.setTransform(664.825,120.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_24.setTransform(643.175,120.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag3BmQgdgKAAgWQAAgTAXgBQAKAAAQAGQASAGAIAAQAnAAABgQQAAgKgcgNQgngRgLgHQgcgTAAgcQAAgnApgOQAZgIAxAAQATAAAKAFQAMAHAAATQABAigUABQgTgBgEgQQgHgBgJAAQguAAAAANQAAAHAcAOQAmARAOAKQAcAUAAAaQAAAhgfARQgZAOgkAAQgaAAgWgIg");
	this.shape_25.setTransform(604.6,120.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAHgHQAGgIAMAAQAWAAAEAXQAhgaAqAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_26.setTransform(585.9,121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_27.setTransform(564.975,120.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgwAagjQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFAQAAQAbAAARgLQARgKAKAAQAUABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_28.setTransform(542.3,120.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhgCUQgJgJAAgMIAAjOIgBgaQAAgPABgLQADgSAfgEQAPgEAiAAQAkAAAiAYQAoAbAAAqQAAAXgIAPQgHAMgQAOQATAJAPASQAQAVAAAVQAAAagcAXQgTAPgVAIQgsARhGAAQgLAAgKgKgAg0BpQAigCAmgLQAigKAAgLQgBgPgVgMQgRgKgPgBIg0gBgAg0hoIAAAqIAAApQASACAJgBQA7gFAAgnQAAgOgSgNQgRgNgVAAIgeAAg");
	this.shape_29.setTransform(519.5438,115.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgwAagjQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAASgLQARgKAJAAQAVABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_30.setTransform(477.45,120.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAuCPQgFgQgEgcQgDgcgBgSIABgPIAAgOIAAgRQgCgKgIAAQgWAAgQATQgKAKgPAcQAABHgHAOQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgLQABgEABgxQgBgnAChaIAAgHIABgeIgCgSIgBgSQAAgLAIgHQAIgHALAAQAUAAAGAUQAEAMAAAYIgBAoIgBAmQAOgPAQgGQAPgHATAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAAMgIAGQgIAIgMgBQgUABgFgUg");
	this.shape_31.setTransform(455.4,115.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQADBOAAAYIAAAKIABALQAAAtgcAAQgKAAgIgHg");
	this.shape_32.setTransform(434.1,117.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgRCIQgJgHABgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAHgIQAIgIAMAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgHAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_33.setTransform(397.9,117.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_34.setTransform(378.175,120.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_35.setTransform(356.9053,121.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAfQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_36.setTransform(335.8958,121.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhXB3QgdgeAAgqQABhBA5hEQAwg6AyAAIAQAAIAMADQAIgJAMAAQAVAAAEAXQAEAQgBAWQAAAKgFAIQgIALgOAAQgSgBgIgSQgEgJgDgCQgEgBgMAAQgZAAgfAmQgtA1AAAvQAAAVAOAPQAOAPAVAAQASAAATgKQAIgEAXgPQAPgKAHAAQAMAAAIAJQAIAHAAALQAAALgKAJQg2Atg2AAQgtAAgeggg");
	this.shape_37.setTransform(313.55,116);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_38.setTransform(1108.55,1058.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_39.setTransform(1098.775,1052.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_40.setTransform(1085.225,1052.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_41.setTransform(1075.425,1052.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_42.setTransform(1061.2,1058.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_43.setTransform(1054.525,1052.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_44.setTransform(1041.7,1052.15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_45.setTransform(1028.7,1052.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_46.setTransform(1009.4,1052.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_47.setTransform(994.475,1052.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_48.setTransform(979.725,1052.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_49.setTransform(966.725,1052.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_50.setTransform(953.85,1052.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_51.setTransform(940.525,1052.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_52.setTransform(927.15,1052.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_53.setTransform(907.75,1052.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_54.setTransform(893.575,1052.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_55.setTransform(879.675,1052.15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_56.setTransform(860.775,1052.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_57.setTransform(845.975,1052.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_58.setTransform(831.325,1052.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_59.setTransform(817.425,1052.15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_60.setTransform(799.275,1052.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_61.setTransform(785.925,1052.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_62.setTransform(770.825,1052.15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_63.setTransform(760.4,1052.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_64.setTransform(751.025,1052.15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_65.setTransform(736.675,1052.15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_66.setTransform(716.9,1052.125);

	this.instance_2 = new lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1();
	this.instance_2.setTransform(1408.5,55.9,0.256,0.256);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cor_sou},{t:this.wro_sou},{t:this.instance_1},{t:this.instance},{t:this.b8}]}).wait(1));

	// Layer_4
	this.wrong3 = new lib.Symbol20copy();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(1592.5,412.8,0.98,0.98,0,0,0,52.1,48.3);

	this.wrong2 = new lib.Symbol20copy();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1164.15,392.15,0.98,0.98,0,0,0,52.1,48.3);

	this.wrong1 = new lib.Symbol20copy();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(872.5,360.45,0.98,0.98);

	this.correct = new lib.Symbol19();
	this.correct.name = "correct";
	this.correct.setTransform(1315.55,364,0.9999,0.9999);

	this.b4 = new lib.Symbol113();
	this.b4.name = "b4";
	this.b4.setTransform(1529.9,302.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Symbol113(), 3);

	this.b3 = new lib.Symbol112();
	this.b3.name = "b3";
	this.b3.setTransform(1319.85,301.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol112(), 3);

	this.b2 = new lib.Symbol111();
	this.b2.name = "b2";
	this.b2.setTransform(1083.5,301.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol111(), 3);

	this.b1 = new lib.Symbol110();
	this.b1.name = "b1";
	this.b1.setTransform(877.9,299.8,1,1,0,0,0,32.6,71.7);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol110(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.correct},{t:this.wrong1},{t:this.wrong2},{t:this.wrong3}]}).wait(1));

	// Background
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_67.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(1));

	// Layer_1
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgKATIgIgIQgDgFAAgGQAAgFADgFQADgFAFgDIAKgDIALADIAIAIIADAKIgDALIgIAIIgLADgAgIgPQgEACgCAFIgDAIIADAJIAGAHIAIACIAJgCIAHgHIACgJIgCgIIgHgHIgJgCgAAGAMIgGgJIgDgBIgCAAIAAAKIgEAAIAAgXIAOABIACADIABADIgBAEIgFABIACACIAGAJgAgFAAIAFAAIAEgBIABgDIgBgCIgBgBIgEAAIgEAAg");
	this.shape_68.setTransform(283.4,79.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A53792").s().p("Ag2BIIADgOIAOACIAJgBIABgRIgChbIgUADIgCgLIAcgFIATgKIAEAEIgEAYIACgCIAKgLQAHgFAGgBIAMgBQAGABAEADIAIAJIAEAMIAAAMIgFAOIgJAKIgLAFIgNAAIgHgCIgGgGIgDgIIAAgIQABgDADgCIAFgFIAHgEIAGAAIAGACIAFADIADAFIAAAGIgEAHIgJACIgFAAIACADIACAAIAHAAIAGgDIAEgGIADgIIgBgGIgDgFIgFgFIgGgCIgHAAIgHACQgDABgEADIgHAIIgFAJIgCAEIgIBKIAbgIIAEgBIABAOIgDABIgdAHIgQACgAgYg3IABABIADBgIgCAVIgBACIABAAIAIhTIADgGIACgDIgDgBIAEggIABgCgAAQgEIgCgDIgCgFIAAgFIABgFIACgEIABAAIABgDIgIAGIgBACIAAAGIACAGIADADIADACgAAXgYIgCACIgCADIgBADIABAEIAEgIIAAgCIAAgCgAAegTIABgCIAAgDIgBgBgAAxggIgBgGIgDgJIAAgBIgGgGQgDgDgEgBIgJABQgFABgGAEIgJAKIgBABIgBABIACgCIAIgGIAJgCIAJAAIAIAEIAHAFIAEAIIABABg");
	this.shape_69.setTransform(178.625,109.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A53792").s().p("AgxA+IAXABIACg1IgDg/IgUAEIgBgFQAcgDARgLIgHApQAJgTAKgIQANgIAKACQAJABAGAKQAGAKgCAMQgCAPgLAHQgJAHgMgCQgHgBgDgGQgEgGABgIQAAgDAHgFQAHgEAEABIAIAEQAEADAAAFQgBAGgKAAIADgHQABgFgDgBQgEAAgDADQgCADgBAFQgBAEADADIAFAFQAJACAHgGQAHgHABgJQACgHgGgHQgFgGgJgCIgQACQgHADgHALIgIANIgIBPIAfgIIAAAHIgdAHIgiABg");
	this.shape_70.setTransform(178.7,109.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EE3338").s().p("AhLAlIADgCQBWghANgJIABgBQAYgOgHgBIgBAAIgcgIIhBgGIgGAAIABgYIAMADIAjgBQAhACAbAJIAAABIASANQAPAQgTAPQgJAHgWAMQgqAXhAAUIgHADgAAvghQAUAEgOAOIgUAPQgMAJhXAjIAAAEQA7gUAngWQAUgKAIgHIABAAQAKgIgJgKIgMgJQgbgKgjgBIggABIAAABIAKAAQAqAAAnAOg");
	this.shape_71.setTransform(165.3138,110.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EE3338").s().p("AhHApQBYgiANgKIAQgLQANgLgNgCIgdgJIhDgGIABgMIAHABIAfgBQAjACAbAJIAQALQAMAOgPALIgeATQgqAXhAAUg");
	this.shape_72.setTransform(165.304,110.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EE3338").s().p("AgOAqIADgPIACgBQA1ggAHgPIAAAAIAAgDIgKgCIgBABIgNABQgTAEgUAKIgBAAIgyAcIgDAAIgJgCQgHgEAKgLIAAAAIAlgZQArgYAqACIAWAIQARAOgcAYIgBAAIhCAvgAgVgUQgUAKgSANQAcgQAPgHQAWgKATgEIAOgCQgdABgfAPgAA8gQIgMAOIAHgFQAUgSgQgHQAHAFgGALg");
	this.shape_73.setTransform(161.5691,101.6384);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EE3338").s().p("AgHAeIAcgTQAegUAEgKIACgHQgCgHgPABIgOACQgTAEgVAKQgLADgpAZIgEgBQgDgCAEgFIAkgYQAqgYAoADIASAGQAOAKgXAVIhDAug");
	this.shape_74.setTransform(161.5731,101.7086);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EE3338").s().p("AghCHIgGgKIAAAAQgEgQARhPIAShLQARhHARgPQAJgHAEAHIACADIgBADIgNAjIAAAAQgHAQgUBeIgSBcIgBABQgGAWgGAAIgCAAgAAAgqIgQBHQgQBMACAQIAWhqQAThbAHgRIAKgfQgJAKgTBIg");
	this.shape_75.setTransform(160.3951,107.2767);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AgfCBIgDgEQgDgPAQhOIAShKQAQhBANgQQAHgIADAFIgNAkQgHAQgTBfIgUBcQgEAQgEAAIAAAAg");
	this.shape_76.setTransform(160.3269,107.1046);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AhKAlIACgBQBXghAMgKIABgBQAagOgJgBIAAAAIgdgJIhBgGIgFAAIABgWIALACQAPgBATABQAiABAbAJIAAAAIASAOQAOAQgSAOQgJAHgWAMQgqAXhAAVIgGACgAAvggQAUADgOAPIgVAOQgNAKhVAhIgBAGQA8gUAogXIAcgRQALgIgJgLIgNgJQgbgKgiAAIgfAAIgDAAIAAACIAKAAQArAAAnAPg");
	this.shape_77.setTransform(165.5765,111.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AhGApQBXgiANgKIAQgLQANgLgNgCQgLgFgSgDIhDgHIABgMIAHABIAfAAQAjAAAbALIAQAKQAMAOgPALQgJAHgVALQgqAYg/AUg");
	this.shape_78.setTransform(165.579,111);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgNAqIADgPIACgBQA1gfAHgQIAAgDQgCgDgJAAIAAAAIgOACQgTAEgUAKIgBAAQgKADgpAZIgCABIgIgDQgHgEAJgKIAAAAIAlgYQArgZAqADIAAAAIAWAIQAQAMgbAZIgBAAIhCAugAgcgRQgXANgOAMQAngZALgCQAVgLAUgEIAPgBQATgCACAJQABAGgEAFQgEAIgOALIAOgJQASgQgKgIQgEgEgKgBIgIAAQgiAAgjATg");
	this.shape_79.setTransform(161.833,101.9134);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgGAeIAbgTQAegUAEgKIACgHQgCgHgOACIgPABQgTAEgVAKQgLAEgpAZIgEgCQgDgCAEgFIAkgYQAqgYAoADIASAGQAOALgXAUIhDAug");
	this.shape_80.setTransform(161.8266,101.9632);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AghCGIgGgJIAAAAQgDgQARhOIARhLQAShIAQgOQAJgHAEAHIACACIgCADIgIAVIgEAOIAAAAQgHAQgUBeIgTBcIAAABQgFAWgHAAIgCgBgAAAgqIgQBIQgRBNACAPIAEgMIATheQAThcAIgRQAGgWAEgKQgKAIgTBLg");
	this.shape_81.setTransform(160.6275,107.5396);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgfCBIgDgEQgDgPARhOIARhKQAQhCANgPQAHgIADAFIgNAkQgHAQgTBeIgUBcQgEARgEAAIAAAAg");
	this.shape_82.setTransform(160.5775,107.4046);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("ABiBnQgpAqg5AAQg4AAgpgqQgogrAAg8QAAg7AogrQApgqA4AAQA5AAApAqQAoArAAA7QAAA8goArg");
	this.shape_83.setTransform(161.325,107.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFF215").s().p("AhhBnQgogrAAg8QAAg7AogrQApgqA4AAQA5AAApAqQAoArAAA7QAAA8goArQgpAqg5AAQg4AAgpgqg");
	this.shape_84.setTransform(161.325,107.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgZgcIAzAgIgeAZg");
	this.shape_85.setTransform(152.825,93.925);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F26C36").s().p("AgzAAIBlgPIACAfg");
	this.shape_86.setTransform(142.5,108.25);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AgFgbIAbAWIgrAhg");
	this.shape_87.setTransform(153.65,121.55);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AAPgVIAPAlIg7AGg");
	this.shape_88.setTransform(146.5,113.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AgegQIA9gDIgMAng");
	this.shape_89.setTransform(145.8,103.15);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AgZgcIAzAhIgdAYg");
	this.shape_90.setTransform(152.8,93.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F26C36").s().p("Ag1gpIBrA3IgXAcg");
	this.shape_91.setTransform(146.2,96.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F26C36").s().p("AAkgoIARAfIhpAzg");
	this.shape_92.setTransform(146.975,119.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgIALQgEgFABgGQgBgFAEgFQADgEAFAAQAFAAADAEQAEAFABAFQgBAGgEAFQgDAEgFAAQgFAAgDgEg");
	this.shape_93.setTransform(246.3,101.925);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AAQAIQgBgGgHgBIgGABIgRgCIgCgFIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAABQAAAGASgBIAHAAQAHABACAHg");
	this.shape_94.setTransform(280.475,89.8375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgHAHIgEgHIgBgFIACAAIAAAFQABADADADIABABIAEAAIABAAIADgEIAIgLIACABQgIAMgFADIgFABg");
	this.shape_95.setTransform(279.075,95.475);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgGACIgEgEIACgBIADAEIAQACIAAABg");
	this.shape_96.setTransform(276.725,95.05);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgOgIIABgBQANARAPABIAAABQgRgCgMgQg");
	this.shape_97.setTransform(279.65,93.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgDAGIADgDIACgEIgBgFIACgBIABAHIgDAEIgDAEg");
	this.shape_98.setTransform(277.925,93.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#9D4035").s().p("AAEAHIgFABIgEgGIAEABIgBgKIAEACIAEAMIgCABg");
	this.shape_99.setTransform(273.15,86.225);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9D4035").s().p("AgIACIABgFIAEAGIAAgEQABgGAEgBIgBACIAAAGIAHgHQABALgHAEIgCABQgCAAgGgHg");
	this.shape_100.setTransform(275.5063,85.3721);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9D4035").s().p("AgIAGIABgDQAAgGAHgCQAOgCgJAEQgGACgBADIABAEIgCABg");
	this.shape_101.setTransform(277.863,85.3886);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AAAAEIABgHIAAABIgBAGg");
	this.shape_102.setTransform(277.875,87.175);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AAAADIAAgFIABAAIAAAFg");
	this.shape_103.setTransform(277.65,87.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AAAAAIgGAAIgBgBIAHgBQAGAAADAEIgCABQgCgDgFAAg");
	this.shape_104.setTransform(279.65,86.775);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgHADIAFgFQAFgEAFAHIgBABQgEgGgEAEIgFAEg");
	this.shape_105.setTransform(277.525,86.4554);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#201F1F").s().p("AAAAAIgCAAIgBgBIADAAQADAAABACIgCABg");
	this.shape_106.setTransform(274.2,87.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgGAFIAMgKIABABIgLAKg");
	this.shape_107.setTransform(273.75,88.825);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AAFAGIgKgGIgFgEQgFAAABAEIACADIgBABIgDgFQgBgGAHACIABAAIAEAEQAFAEAFABIABAAIADABIAIgBIAAABIgIABg");
	this.shape_108.setTransform(272.2368,87.76);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgHAFIAHgHQAHgGABAIIgBAAQgCgGgFAGIgGAGg");
	this.shape_109.setTransform(280.3,85.73);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgBACQAFgCgGgBIAAgCIAEADQADACgFACg");
	this.shape_110.setTransform(281.5113,90.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CB7246").s().p("AgDAAQAAgFADAAQAEAAAAAFQABAGgFAAQgDAAAAgGg");
	this.shape_111.setTransform(275.0775,97.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CB7246").s().p("AgDAAQAAgFADAAQAEAAAAAFIgBAEIgDACIAAAAQgCAAgBgGg");
	this.shape_112.setTransform(274.725,95.8019);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#9D4035").s().p("AAAAMIgCgDQgEgEAAgHIADgHQADgFAGAIIABAIQAAAKgGAAIgBAAg");
	this.shape_113.setTransform(274.3,92.9262);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE3338").s().p("AgDAKQgCgCAAgIIABgJIAKAJIgHAKg");
	this.shape_114.setTransform(279.025,94.275);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AAAADIAAgFIABAAIgBAFg");
	this.shape_115.setTransform(279.85,87.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AAAAEIAAgHIAAAAIAAAHg");
	this.shape_116.setTransform(279.5,87.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AAAgDIAAAAIABAHIAAABg");
	this.shape_117.setTransform(279.2,87.35);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgBADIACgFIABAAIgCAFg");
	this.shape_118.setTransform(278.125,87.325);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AAAgBIAAAAIABADIAAAAg");
	this.shape_119.setTransform(277.375,87.35);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgBAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIgBACQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_120.setTransform(279.6,89.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAAAAIAAgBIABABIgBACg");
	this.shape_121.setTransform(277.825,89.325);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgDAAQABgFADABQADABAAAEQgCAFgCgBQgDgBAAgEg");
	this.shape_122.setTransform(277.5746,89.1764);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AAAAFQgDgBAAgEQABgFADABQADABAAAEQgBAEgDAAIAAAAg");
	this.shape_123.setTransform(277.5746,89.1764);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgEAJQgCgDgBgFIACgHIABgBIAAABQgCADAAAEIADAHQADAEAAgBIAGgDIABgIIgCgHIgFgDIgBAAIABgBQACAAADAEIADAHIgCAIQgCAEgEAAg");
	this.shape_124.setTransform(277.7,88.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgEAIQgCgDAAgFQgBgDACgEQACgDADAAQACgBADADIACAIIgBAIIgGAEg");
	this.shape_125.setTransform(277.72,88.6964);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgCAAQABgEACAAQADABgBAEIgDADQgDgBABgDg");
	this.shape_126.setTransform(279.3744,89.0826);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgCAAQABgEACABQADABgBADIgDAEQgDgBABgEg");
	this.shape_127.setTransform(279.3744,89.0472);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgEAHQgCgCgBgEIABgCIAAACIACAFIAEADIAFgDIACgGIgCgFQgCgDgDgBIgEAEIgBABIAAgBIAFgEQADAAACADIADAGIgCAGQgCAEgEAAg");
	this.shape_128.setTransform(279.575,88.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgEAHIgDgHIACgGQACgDADAAIAFADIADAGIgCAGQgCADgEAAIAAABQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_129.setTransform(279.575,88.6536);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CB7246").s().p("AgDABQAAgDADgBQAEAAAAADQAAAEgEAAQgDAAAAgDg");
	this.shape_130.setTransform(273.775,90.75);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CB7246").s().p("AgBACIgBgCQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIACAAIABACIgCADg");
	this.shape_131.setTransform(275.4,101.425);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#9D4035").s().p("AgDAGIgDgGIACgEQACgDACAAIAFACIACAFIgCAGIgFACQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_132.setTransform(275.325,99.675);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#9D4035").s().p("AgHAMIgBgXIAIgBIADAGIAGALIgDAIg");
	this.shape_133.setTransform(276.175,113.525);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CB7246").s().p("AgCAFIgCgEQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIACgCQAFAAAAAFQAAAGgFAAg");
	this.shape_134.setTransform(276.2,111.0481);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9D4035").s().p("AgHAIIgBgOIAFgFQAFgEAFAJIACAJQAAAJgJABIAAAAQgFAAgCgFg");
	this.shape_135.setTransform(276.0763,108.5581);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#9D4035").s().p("AgCAGIgCgGQAAgGAEgBQAFABAAAGIgBAFIgDACQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_136.setTransform(275.525,106);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CB7246").s().p("AgDALIgDgWIAFABQAEACAEAHIAAAHQgBAGgGAAIgDgBg");
	this.shape_137.setTransform(275.475,103.3563);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgSC1IgChdIgLh0IgFgaIgEgLQgEgNADgMIgDABIgFAAQgKAAgGgGIgFgGIgDgKQgCgKAFgCIAMACIALAEIAOgBIgDgJIgQgjQgLgCACgHIAFgHIAAgBIABAAQANABgFAMQAaAoAFABQAEABADgJIADglQgEgJAEgEIAFgBIAAAAQAMAHgLAIIAAApIAEABIABAAIAZgOQAIgFADAHIACAIIgFAMIgFAFIAAASIAEAIIANABQAMgEAHAUIAGAUIAAABQgEAJgPAEIgYgCIgGAJIgGAHIgBABIgBAAIgBABQgEABgEgFIAFA2QABATAJAxIAAAAQAEAgAMAyIAAACIgBAAIg4AEIgCAAQgBAAAAAAQAAAAAAgBQAAAAABgBQAAgBABgBgAgohUQAAAJADAJIAEAMIAEAZIAMB1QACBbgBADIAAAAIA1gDQgLgsgFgmQgJgxgBgSIgEg6IABgDIACACQADAHADgCIABAAIAAAAIABgBIAGgGIAGgJIAAgBIABAAIAKACIAOgBQAOgCADgJIgFgUQgHgRgJADIgBABIAAgBIgNgBIgBAAQgFgEAAgFIgBgVIABAAIAFgDQAEgFAAgHIgBgGQgCgGgGAEIgbAPIgEgCIgBAAIgBgtIABAAIACgEQADgDgFgEQgIACAFAJIABABIgDAlQgDANgIgCIgggrIgBAAIABgBIABgFQgBgFgGAAQgJAKANABIABAAIAQAlIAAABIADAKIABABIgGACIAAgBIgLAAQgFAAgHgEIgKgCQgEACADAIIADAJIADAFQAGAFAJAAIAFAAIAGgBg");
	this.shape_138.setTransform(277.0464,98.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFF215").s().p("AgRC2IgCheIgLh0IgEgaIgEgLQgDgJAAgKIABgIIgJACQgJAAgHgGIgDgGIgDgJQgCgJAEgCIAKACIAMAFIAMgBIAAABIADgBIgDgLIgQglQgKgBACgFIAEgHQAHAAABAGIgBAGIAOAUQAOAVAEABQAGABADgKIACgmQgEgIAEgEIAEgBQAGAEgCAFIgEAFIABArIAEABIAagPQAIgEACAGIACAHQgBAIgEAGIgFADIAAATQAAAFAEADIAOABQALgEAHAUIAFAUQgDAJgOACIgPABIgKgCIgMAQIgBABIgBAAIAAAAQgEADgDgGIgCgBIAFA4QABAUAIAxQAEAfAMAzIg4AEg");
	this.shape_139.setTransform(277.0417,98.75);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#9D4035").s().p("AALBSIgHABIgCABQABgCAFgBIACgCIgGABIgCABQAAgEADgBIAEgBIgGABIgDABQAAgDAFgBIAFAAIgFgCIgFgBIAIgEIgHABIAGgEIgHABIAHgEIgEgBIgDAAIAJgFIgIABIAIgFIgIABIAHgFIgGABIgCgBQAAAAAAgBQABAAAAAAQABgBAAAAQABgBABAAIAEgCIgIAAIAGgEIgGAAIAHgEIgHAAIAIgGIgJACIAHgHIgGAAIAFgDIgGgBIAHgDIgHgBIAHgGIgEAAIgEABIAHgGIgHAAIAGgDIgGAAIAHgFIgFAAIgDABIAGgFIgDgBIgEAAIAHgEIgDAAIgFABIAHgGIgDgBIgDABIAGgFIgEgBIgDABIAIgIIgIgBIAHgHIgJACIAHgGIgHgBIAGgHIgHAAIAEgDIgGgBIAGgDIgFAAIAEgDIgFgBIAGgEIgIABIAFgEIgFgBIAFgDIgGgCIAFgCIgFgBIAFgBIgDgEIAJgBIgBABQgCAEABAGIACAGQAFAGACARIAJBfIgBAjIgJABg");
	this.shape_140.setTransform(273.475,98.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#9D4035").s().p("AgxBYQgIgJAAgNQgBgNAFgPQAFgQAJgPQAFgIAHgHIAPgNQAPgLAKAAQAFgBAKAGIABgFQAOhLAJAQQAHANAAA+QAAA8gHAhQgIAmgMgqIgEgUQgRATgPALQgQAMgKAAIgDAAQgJAAgHgHgAAEgMQgEAFgDAIIgFAUIgCASQABAQAJgBQAFAAAHgGIAQgPIgBgHIgKAGIgCgCIADgSQgBgKgFgKIgGgFIgBAAg");
	this.shape_141.setTransform(271.6432,107.4396);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("AgiAFIAYgHQAbgFARAJ");
	this.shape_142.setTransform(198.4947,85.4774);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgBAYIgHgCIAPgyIACA5QgDgDgHgCg");
	this.shape_143.setTransform(256.375,86.925);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EE3338").s().p("AhDAsIAYgpQAhgqAogKIAZgEQAXADgRAeIgCADIgWAUQgQAOgSAIIg8AdgAgPgGQgQAPgNAWIAqgVQAagKAYgcIABgBQAEgIgJAAIgKACIgBAAQgaAGgWAXg");
	this.shape_144.setTransform(252.699,97.775);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AAQBCQgQgKgIgbIgCgEQgDgLAAgFIgCgJIgCgHIgRgaQgLgOgEgNIAKgJIAAAAIAPAJIAYATQAbAaALARQARAcgGAcIgBADQgDAGgIADIgLAAQgFgBgFgDgAgNgcIABABIAIAOIAEASIAAAEIAEAPQAHAWAMAHIAGADIAEgBIACgBQAEgWgOgWQgJgOgYgaIgNgKg");
	this.shape_145.setTransform(251.6922,109.175);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EE3338").s().p("AgNAUIgEgBIgEgHIgEgDIAEAAIgCgIIAJAJQADADACgGIAEgHIACgCIALgBQAGACAFgGQAEgDAAgJIADACIgCALIgFAGIgIABQgGgBgDADIgCAEIgGAKQgCADgDAAIgCAAg");
	this.shape_146.setTransform(243.675,104.8111);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgCAUIgFgCQgHgEgEgJQAAgIgEgFIgEgHIAEAAIAFAEIgBgIIACgBIADAEIAAAHQABAJAGACIADADIAIAEIAKACQAKACACAFIgEADg");
	this.shape_147.setTransform(243.975,100.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgEABIgPAOIAGgUQATgPAIAJQAHAHgBATQgIgXgQAJg");
	this.shape_148.setTransform(244.9132,102.8563);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE3338").s().p("AgLAHIAAgCQALAAAGgFIAEgGIACAAIgFAHQgGAGgKAAIgCAAg");
	this.shape_149.setTransform(246.425,99.8268);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EE3338").s().p("AgLAGIAAgBQALAAAGgFIAEgGIACAAIgFAHQgFAGgKAAIgDgBg");
	this.shape_150.setTransform(247.125,96.6067);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EE3338").s().p("AgLAHIAAgCQALAAAGgFIAEgGIACABIgFAGQgGAGgKAAIgCAAg");
	this.shape_151.setTransform(247.775,93.9268);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EE3338").s().p("AgLAGIAAgBQALAAAGgFIAEgGIACABIgFAGQgGAGgJAAIgDgBg");
	this.shape_152.setTransform(243.925,110.4567);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EE3338").s().p("AgLAHIAAgCQALAAAGgFIAEgGIACABIgFAGQgGAGgKAAIgCAAg");
	this.shape_153.setTransform(244.7,107.1768);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AgLAHIAAgCQALABAGgGIAEgGIACABIgFAFQgGAHgKAAIgCAAg");
	this.shape_154.setTransform(245.475,103.6767);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgYAKQgFgFANgFIAPgEIAPACIAAACQAAAFgPABIAAgEIADgBIAHgBIgJAAIgLACQgMADADACIAPABIAYgGIAIgCIADgDIgagDIgVAFQgMACgCADIgDgDQADgCAMgEIAWgFQAWgDAJAHIAAABIABAEIgGAEIgJAEIgZAFg");
	this.shape_155.setTransform(240.7,114.9421);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EE3338").s().p("AgWAIIgBAAIAAgFIADABIAPACQANAAANgHQAAgEgMAAIgCAAQAKABgQAIIAAAAIgPAAIgBgEQAAgFAJgCIAPgCQANAAACAFIAAAEIgBABQgPAJgOAAQgIAAgIgCgAgEgEIgIAEIABABIALgBIABAAIgCgBIAAgDg");
	this.shape_156.setTransform(247.125,90.939);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("Ag+B5QA6hMANhXIAFg1IgCgXIAPAEIAKgBQASgDAEgGIAEACIgWBjQgJAwgZBbIgBACIgDgBQgHgIgdAHIgaAJgAALgdQgOBOgzBFQArgPAOAIQAahdAIgqIAAgCIABgGIAThVIgTAHIgLAAIgKgCQAEAlgKAug");
	this.shape_157.setTransform(243.4,103);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EEEAA4").s().p("AAMgpQAEgcAAgaIgBgUIAXACQASgDAFgGIgWBjQgJAwgZBaIglgBIgcAJQA6hMAOhYg");
	this.shape_158.setTransform(243.375,102.975);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EE3338").s().p("AgXAMQgLgCgBgEIAAgBQAAgFALgEQAIgEAQgCIAYgBQALABABAGQAAAEgLAFIgYAGIgCABgAAAgGQgOADgJADIgIAFIAIACIAWAAIABgBIAXgFIAIgFIgIgCg");
	this.shape_159.setTransform(240.5739,114.975);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EEEAA4").s().p("AggAFQgBgEAJgDIAYgGIAXgBQAKABAAAEQABADgKAEIgXAGIgXABQgKgBAAgEg");
	this.shape_160.setTransform(240.5782,114.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EE3338").s().p("AgPALQgIgCgBgFQgBgEAIgEIARgFIABAAQAIgCAIACQAIABAAAFIAAABQABAEgIAEQgHADgKACgAgPAAQgGABABACIAFADIAQAAIAPgFQAFgBAAgCIgFgDIgQAAQgJACgGADg");
	this.shape_161.setTransform(247.125,90.8625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EEEAA4").s().p("AgPAIIgHgEQgBgEAHgCQAGgDAKgCQAJgBAGABQAIABAAAEIgGAGIgQAEg");
	this.shape_162.setTransform(247.15,90.8625);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCADIABABIACADIABgDQgDgDAAgCg");
	this.shape_163.setTransform(244.3945,104.2141);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EEEAA4").s().p("AgBACIgBgCIABgDQABACADACIgCAEg");
	this.shape_164.setTransform(244.35,104.45);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3F4096").s().p("AACgBIADADIgGAAIgDABQADgHADADg");
	this.shape_165.setTransform(198.375,82.2591);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE3338").s().p("AAEAXQgRgHgDgDIADgLQACgLgEgNIANAHQANALAHATIgBAFQgCADgFAAIgGAAg");
	this.shape_166.setTransform(203.5,87.9417);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00A85A").s().p("AABALIgGgBQACgKgGgIIgGgHQAPABAKAPIAGAPg");
	this.shape_167.setTransform(200.275,84.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EE3338").s().p("AgLAFQgBgJAIgJIAFAAIAIAJQAFAJgDAHIgTABg");
	this.shape_168.setTransform(198.5974,83.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EE3338").s().p("AgOARQAEgVANgIIADgBIgFADQgLAIgEATIAZgIQgFgJAJgQIgCAAIACAAQgGALABAHIACAHIAAAAIgaAIg");
	this.shape_169.setTransform(196.55,84.175);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3F4096").s().p("AADgMQAHgEAFAAQgGALAAAIIADAHIgaAHQAEgUANgJg");
	this.shape_170.setTransform(196.55,84.15);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgLABIgCgGIATADIAIgFQAAAIgGAEIgHACIgBABQgGAAgFgHg");
	this.shape_171.setTransform(198.7518,89.5018);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgBABIACgBIABgBIAAAAIgBABIgBABIgBABg");
	this.shape_172.setTransform(197.3,88.925);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgDACIAAgCIABgBIAAAAIgBADIAHgCIAAAAIABAAIAAAAIgIACg");
	this.shape_173.setTransform(198.6,88.55);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_174.setTransform(200.025,87.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_175.setTransform(197.325,87.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgCAAQAAgDACAAQADAAAAADIgDAEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_176.setTransform(200.025,87.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAIgDAEQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_177.setTransform(197.3,87.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgGADIACgDIADgBQAEgCAEADIAAABIgFgBQgEgBgEAEg");
	this.shape_178.setTransform(199.95,87.5942);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AAFABQgEgDgHAFIAFgDQAFgEADAFIAAACIgCgCg");
	this.shape_179.setTransform(197.2286,87.598);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AABABQgBAAAAgBQAAAAAAAAQAAAAgBAAQgBABgBAAIADgBQACgBACACg");
	this.shape_180.setTransform(200.125,86.7886);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgDABQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACAAIAEAAIgGABg");
	this.shape_181.setTransform(197.0417,87);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgiANQgEgMAEgOIAXgHQAagFATAKIACAMQACAOgHALIAAgVIgEABIgDACQAFgNgHADIgBgEQgHAIgFgHIgCACIgMABIAAgBIgKACIgCgDQgCgCgDAFIgEAGIAAgCIgFADIABADIgBASQgCgEgBgGg");
	this.shape_182.setTransform(198.5007,87.2388);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgBAZIgGgCIgIgCIgGgBQgEAAgDgFIgCgFIgCgIIgBgWIAFgDIAogCIALABIAHAEIABAAIADAGIAAAOIgCAIQgBAJgLAEIgFABIgCABIgKADgAgcgXIgFAEIACAVIABAIIADAFIAGAFIAGAAIASAFIARgFQAKgEABgIIADgWIgEgGIgHgDg");
	this.shape_183.setTransform(198.475,88.375);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FCD4C3").s().p("AgPAVIgGgBIgGgFIgDgFIgCgIIgBgVIAFgEIAogCIALACIAHADIAEAGIgBAOIgBAIQgCAJgKADIgFABIgCABIgKAEg");
	this.shape_184.setTransform(198.475,88.375);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EB5C38").s().p("AgDBmIgLgKIgHgOQgCgJAAgKIAFheIgXAIIAAgQIACgBIAWgGIgDgxIAcgGIgDAuIAhgLIAEARIgmAJIgNBnIABAPIAEALIAFAGIAIACIAFgBIAFgGIACgJIABgMIAAgFIgBgBIAAABIgCAKIgDAEIgEABIgGgBIgFgDIgCgFQgCgDAAgEIACgIIADgGIAGgFIAHgCIAIACIAIAFIAFAHIADAJIgCAPIgGAPIgJALQgFAEgGAAgAAZA0IADAGIABAHIgBANIgDALIAFgOIACgOIgBgFIgEgGIgFgDgAgLBUIgDgIIgCgRIAPhsIABAAIACgBIgDABIACgwIgOAEIACApIAAAIIgYAGIAAACIAYgIIgGBnIACARIAEAIgAAHAxIgDAFIgBAFIABAEIADAEIgCgGIABgGIACgFIADgEgAAPAzIgCACIgBAEIAAAEIAAABIAAAAIACgEIABgFIAFAEIABABIgEgHIgBAAgAAKg1IACAAQADgCAFgBIAOgDIAAgCg");
	this.shape_185.setTransform(226.825,105.225);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EB5C38").s().p("AgLBaQgJgLAAgUIAGhjIgXAIIAAgIIAXgIIgCgwIAVgFIgDAvIAVgIIANgEIACAKIglAJIgGAyQgHArAAAMQAAASAGALQAGAJAKAAQAIAAAEgJQAEgJAAgOIgDgLQgDgGgEAAQgDAAgCAEIgCAKQAAAEADAAQAEAAABgHIACACIgCAIIgFADQgEAAgEgDQgEgEAAgFQAAgHAFgFQAFgGAFAAQAIAAAGAGQAHAHAAAGQAAAPgHANQgIAOgJAAQgOAAgJgMg");
	this.shape_186.setTransform(226.775,105.275);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00A85A").s().p("Ag+BJIgEgEIAAAAIgEgGIAAgHQABgDACgCIAEgDIAFgCIAFgBIAFACIADADIACADIADgMIACgXIABhQIgBAAIgDgBIgFAAIgDgBIACgLIApAFIAEAAIgCAMIgMgBIgFAvIABAAIAMACIAegCIACgjQABgHADgFIAHgJIAJgFIAKgBIAIADIAFAFIAEAIIAAAIIgCAFIgFAEIgFACIgGABIgEgCIgEgDIgDgEIAAgBIgCAIIgFBYIADAAIALgDIACAMIgmAEIgEABIABgLIAAgDIANAAIgBgxIglABIgIAAIgIAxIgEAKIgFAJIgIAGIgIABIAAABgAg4BAIABABIADAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAg/A4IgBABIAAAEIACADIAAgHIAAgCgAAng/IgGAHIgCAJIgDAmIABAAIAAAfIAFhAIADgLIAEgKIADgDgAgfhBIAABLIACgOIABgCIgBgBIABgDIAGg1IAAgBIgJgBgAAyg/IgEAEIgBACIABgBIADgCIAEAAIAFABIgBgDIgCgBIgCgBg");
	this.shape_187.setTransform(213.725,108.725);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00A85A").s().p("Ag4BIQgEAAgEgFQgEgFABgFQABgEAFgCIAIgDQAEABACADIABAFIgCAEIgDABIgEgFIABAAIACACIACgDIAAgDIgDgCQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIgDAFIABAHQAAABAAABQABAAAAABQABAAAAAAQABABAAAAQAHABAEgHQAFgIACgOIADhqIgDAAIgIgCIAAgEIAnAEIgBAFIgMgBIgGA2IAIACIASAAIAYgCIACgmQACgMAIgHQAHgGAKABQAGABAEAGQAFAGgBAHIgFAHIgJADQgEgBgDgDIgCgFIADgFIAFgCIADACIABACIgCADIgDgEQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAABIABAFIADACIAEgDIADgIIgBgIIgGgFQgGgBgEAIQgFAJgCALIgGBcIAPgCIABAFIgiADIAAgGIAOAAIgCg4IgaADIgYgCIgJA0IgJASQgEAGgGAAIgDAAg");
	this.shape_188.setTransform(213.723,108.7484);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00A85A").s().p("AgIAWIgHgFIgFgHIgBgIIABgIIAGgIIAGgGIAHgCQAJAAAGAEQAFAFACAJIABABIgFABIgFgHIgIgCIgGABIgGAEQgDACgBACIgBAEIABAGIADAFIAFADIAEABIAFgCIACgGIgBgGIgCAIIgFACIgCgBIgCgCIgDgDIAAgCIABgFIADgCIADgCIAEgBIAEABIAGACIADAEIACAFIgCAHIgEAEIgHAEIgFABgAgGgRIgGAFIgFAHQgBADAAAEQAAAEABACIAFAGIAFAEIABAAIgFgDIgEgGIgCgHIACgFIAFgGIAHgEIAHgBIAJACIADADIgEgGQgFgDgIgBgAAIAAIADAJIgDAIIACgBIAEgEIABgFIgBgDIgCgEIgHgBIADABgAgEAFIABADIABABIABABIACgCIABgBIgCAAIgDgBIgBgDgAAAABIgBABIAAABIAAABIABABIAEgCIABgBIgDgCIgCAAg");
	this.shape_189.setTransform(260.9,98.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00A85A").s().p("AgNAPQgGgFAAgIQAAgJAGgGQAGgHAHgBQAQABAEAQIgBAAQgGgIgJAAQgHAAgGAEQgGAFAAAFQAAAIAFAEQAGAFAEgBQAJABAAgKQAAgKgHAAIgDABIgBADQAAADADAAIAEgBQgBAGgFABIgDgDIgCgEQAAgEADgCQADgCADAAQAFAAAEADQAFABAAAGQAAAHgGADQgFAEgGABQgIAAgFgHg");
	this.shape_190.setTransform(260.875,98.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00A85A").s().p("AgaA4IARgBQAAg2gGg1IgLAAIgDAAIAAgMIAVABIAKgCIASgFIAAAOIgMADIgGBrIAcgCIAAAPIgDAAIg1AEgAgJg3QAGAvAAAyIAFhkIgKABIgBAAg");
	this.shape_191.setTransform(261.125,109.225);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00A85A").s().p("AgXA7IASgBQAAg6gHg3IgOgBIAAgFIATAAIAXgEIAAAGIgLADIgFBxIAbgCIAAAIIglABIgNACg");
	this.shape_192.setTransform(261.1,109.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00B0F0").s().p("AgIAWIgGgFIgGgHIgBgIIABgIIAGgIIAGgGIAIgCQAIAAAGAEQAFAFADAJIAAABIgEAAIgBABIAAgBIgFgGIgIgCIgGABIgGAEIgEAEIgBAEIABAGIADAFIAFADIAEABIAGgCIABgGIgBgGIgCAIIgFACIgCgBIgCgCIgCgDIgBgCIACgFIACgCIADgCIAEgBIAFABIAFACIAEAEIABAFIgCAHIgEAEIgGAEIgGABgAgGgRIgGAFIgEAHIgCAHIABAGIAFAGIAGAEIAAAAIgFgDIgEgGQgCgDAAgEIACgFIAFgGIAHgEIAHgBIAJACIADADIgEgGQgFgDgHgBgAAIAAIADAJIgDAIIACgBIAEgEIABgFIgBgDIgCgEIgFgBIgBAAgAgEAFIABADIABABIABABIACgCIABgBIgCAAIgDgBIgBgDgAAAABIgBABIAAABIAAABIABABIAGgDIgEgCIgCAAg");
	this.shape_193.setTransform(188.45,98.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00B0F0").s().p("AgNAPQgGgFAAgIQAAgJAGgGQAGgHAHgBQAQABAEAQIgBAAQgFgIgKAAQgHAAgGAEQgGAFAAAFQAAAIAFAEQAGAFAEgBQAJABAAgKQAAgKgHAAIgDABIgBADQAAADADAAIAEgBQgBAGgEABIgEgDIgCgEQAAgEADgCQADgCADAAQAFAAAEADQAFACAAAFQAAAHgGADIgLAFQgIAAgFgHg");
	this.shape_194.setTransform(188.425,98.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00B0F0").s().p("AgaA4IARgBQAAg7gGgwIgOAAIAAgMIAVABIAYgFIAEgCIAAAOIgMADIgGBrIAcgCIAAAPIgnABIgRADgAgJg3QAGAvAAAyIAFhkIgKABIgBAAg");
	this.shape_195.setTransform(188.675,109.225);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00B0F0").s().p("AgWA7IARgBQAAg8gHg1IgOgBIAAgFIATAAIAYgEIAAAGIgMADIgFBxIAbgCIAAAIIglABIgMACg");
	this.shape_196.setTransform(188.65,109.275);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFF215").s().p("AgmgjQAegBAiAJIAdAIQgDAGgTALQgJAGgWAJIg4AXg");
	this.shape_197.setTransform(164.675,110.3947);

	this.instance_3 = new lib.Symbol81("synched",0);
	this.instance_3.setTransform(159.5,107.15,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFF215").s().p("AgPgRIAbgHIAKAAQAKgBgHAKIgJAKIgqAeg");
	this.shape_198.setTransform(164.1441,101.3738);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#EE3338").s().p("AgsAYQAdgHAegVIAYgVIAGAaQgiAXgeACg");
	this.shape_199.setTransform(212.075,96.65);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EE3338").s().p("AAEAGIg2AQIA0gsIAxAoIgEAFQgCgCgpgPg");
	this.shape_200.setTransform(215.8,96.425);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EE3338").s().p("AgLgJQALAHAMgDQAHgCADgEIAHAWIgagKIggALg");
	this.shape_201.setTransform(198.2,91.35);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EE3338").s().p("AgCAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIgDADg");
	this.shape_202.setTransform(198.35,98.625);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EE3338").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIACACIgCADg");
	this.shape_203.setTransform(198.4,97.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EE3338").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIACACIgCACg");
	this.shape_204.setTransform(198.425,96.05);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EE3338").s().p("AgMANIACgbIAVgBQADgBgCAeIgJACIgDAAQgIAAgEgDg");
	this.shape_205.setTransform(198.5031,93.4516);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EE3338").s().p("AgMAAIAVgJIAEAJIgVAKg");
	this.shape_206.setTransform(204.375,107.325);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EE3338").s().p("AgNAAQAFgDAAgFIAWAIIgEAIg");
	this.shape_207.setTransform(193.475,106.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#3F4096").s().p("AgPAOQgCgCgBgGIgDgGIARgNIABgBIADAFQAHAJANACIACAEQAAAEgGAAIgJACIgGAAIgGgEIAAAHg");
	this.shape_208.setTransform(205.625,108.275);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#3F4096").s().p("AAGAOIAAgIIgFAEIgCABIgFAAIgJgCQgGAAAAgEIACgEQANgCAHgKIADgEIAAABIASAMIgDAHQgBAGgCABQgCAEgDAAIgFgCg");
	this.shape_209.setTransform(192.3731,107.5092);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EE3338").s().p("AALANIgLgCIgGgDIgFgEIgHgEIgDgEQgFAAASgVIAIAGIABAAIAIABQAJAAAFAGIgEAGIgCAOIAAAJIgDAJg");
	this.shape_210.setTransform(194.3194,92.725);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EE3338").s().p("AgGAnQgCgBgCgJQgEgMACgLIAGgRQgEgSAEgFIADgEQADgBAEAIIABAJQAEgDAAAKIgGAIQAFALgEAPIAJAHIABABIgBABIgSALgAgFgUIABAJIAAABIgGARQgCAKAEALIAAABIADAHIAPgJIgHgGIgBgBIABgUIgDgHIAAgBIABAAIAEgFIABgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBABIgCACIgBgCQADgHgDgEIAAAAIgEgGIgCACIAAAAQgDAEACAJg");
	this.shape_211.setTransform(192.6295,88.1637);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FCD4C3").s().p("AgJAdQgEgMACgKIAGgSIgBgJQgCgKADgEIACgCQADgBADAHQADAFgEAIIADgDQADgCAAAHQgCAGgFACIADAHQACAIgDAMIAEACIAFAFIgSALg");
	this.shape_212.setTransform(192.6045,88.1938);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#EE3338").s().p("AgeAtQgCgGABgWIACgTIAAgBIABAAIAEgIQgCgMADgLIADgIIACABQABADAOAAIAJgBIAJgBIAEgEIACgBIACAFIAAABQgCAKAFAOIAFAMIAAAAQACAQgCAMIgBABQgFABACAFIACAFIABABIgBABIgEAFIAAAAIg3ABgAgXgLIgEAKIgCATQgBATACAGIA0gBIADgEIgDgHQAAgGAFgCQACgNgCgMIgGgNQgEgOACgKIgBgCIgFADIgJACIgJABQgMAAgEgEQgFAKABASg");
	this.shape_213.setTransform(198.5094,95.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFF215").s().p("AgdASIACgTIAEgJQgBgNADgKIADgIQAAAHAUgCQATgCgBgFIACADQgCAMAFAOIAFALQADAQgDAMQgFABABAGIADAGIgEAGIg1ABQgDgGACgVg");
	this.shape_214.setTransform(198.4918,95.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EE3338").s().p("AgEAWIgIgRQgDgIACgHIAAgHIgDgFQAiALgCAIIgBAGQgDAJgJAGQgEAFgCAAIgBgBg");
	this.shape_215.setTransform(202.1531,93.5417);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EE3338").s().p("AgPAiQgDgDABgDQgFgCAAgFIABgFQAFgHAHAGIANgSQgHgGAAgIIgBgEIAAAAIAAAAIAIgMIAAgBIADACIAOAPIACAFIAAANIgEAIQgNAOgLADIgDAFIgCADIgEABgAgTASQgEAGAIACIACABIgBABIgBABIABADIABAAIABAAIADgCIACgFIAAgBIABAAIAGgDIARgOIAEgHIAAgMIgCgEIgOgOIgHAKIACAIIAHAJIAAABIgPATIgBACIgBgBQgCgDgDAAQgCAAgCADg");
	this.shape_216.setTransform(203.325,96.775);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FCD4C3").s().p("AgQAdIABgCQgGgBAAgFIABgEQADgFAEACIAEADIAPgUQgGgEgBgFIgCgJIAIgLIAPAQIACAEIAAANIgEAHQgIAJgJAFIgHADIgDAHIgGABg");
	this.shape_217.setTransform(203.325,96.775);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00B0F0").s().p("AgOAOIAFgbIAYgCIAAAfIgUAAg");
	this.shape_218.setTransform(198.475,93.525);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#3F4096").s().p("AAlAUQgJgTgcgLIgNAKQgQANgJAPIgbgJQACgKAEgGQACgDAHgJIASgbIA3gBIAQANQARAQABAQQAGAJAAACQAGAKgFADIgWAGg");
	this.shape_219.setTransform(198.676,103.825);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#ED2790").s().p("AgVBcIgMgGIgIgKQgDgGgBgHQAAgIAFgHIARgOIABABIAAgBIABgSIgIgEIgJgJIgFgKIgDgMQAAgJAEgKQACgJAHgHIAMgKQAGgEAIAAIAIABIAEADIABgBIABABIABAAIABAAIABABIABABIADAGIgCABIgFAEIAGAFIAIALIACAMIgDAQIgJAMIgMAKIgKADIgBARIAIgFIANgHIAJgDIAIgBIAIACIAHAGIAEAJIACAKQAAATgQAPQgHAHgLAEIgUAEgAgbA3IgBAFQAAAGACAEIAEAIIAHAFIAIACIAPgDQAIgDAGgGIAIgMIADgLIgCgHQgDgDgEAAIgHAAIgHACIgOAHIgRALIgDgDIgDgCIACgCIABgGIgBADIgCAFgAgiA0QgEAFAAAGIACAJIAHAIIAEADIgCgBQgDgEgCgGQgBgFAAgHQAAgHABgEgAAjAmQAEAFAAAHIAAAGIABgKIgBgIIgDgHIgEgEIgGgBIgGABIgIACIgdARIgBAEIALgHIAPgHIAQgDQAHAAAEAFgAgPg3IgHAHIgFALIgCAOIABAOIAFAJIAEAGIAGACIAIgDIAGgGIAEgLIACgNIgCgIIgCgHIgBgBIABAGQAAAEgDAFQgEAEgFAAQgGAAgFgFQgDgFAAgHIABgGIAEgFIAFgEIAHgBIAKACIABABIgBgBIgEgDIgGgCQgEAAgFADgAglgjQgCAGAAAKIABAKIAGAJIADADQgDgEgBgHIgCgPIACgQIAEgKQgFAHgDAHgAAMgjIABAKIgBAPIgFAKIAGgKIADgNIgCgKIgEgIgAgKggIABABIACgCIAAAAIgDgBgAgHguIgCABIgCAEIADgDIADgBIAFACIgCgCQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAgAAHhdIAAgBIAEAHg");
	this.shape_220.setTransform(199.8,109.975);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#ED2790").s().p("AgfBGQgKgHAAgNQAAgNARgLIABACQgHAHgBAMQABAMAGAIQAHAIAKAAQASABANgNQAMgNAAgMIgDgKQgEgEgFAAIgPACQgGACgIAFIgQAKIgCgCQADgHABgMIACgVQgLgBgIgLQgGgJAAgMQAAgTALgNQALgNANAAQAHAAAGAEIgCgCIACAAIADADIABACIgDACQgGgGgHAAQgMAAgGAMQgIALAAAPQAAAQAGAKQAFAKAIgBQALABAFgMQAHgLAAgPQAAgJgFgIQgFgIgGABQgDAAgDADIgCAHQAAALAGAAIADgBIABgFIgBgDIgEACIACgEIACgCQAFAAAAAGIgDAHQgCADgEAAQgFAAgEgEQgDgEAAgFQABgEAEgFQAGgFAEAAQAJABAJAHQAHAKABALQAAAQgMAMQgKAKgLAAIgDAbIAagQQAJgDAHAAQAIAAAFAGQAEAIAAAJQAAASgOAOQgPANgVAAQgOAAgKgIg");
	this.shape_221.setTransform(199.8,111.25);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EE3338").s().p("AgYgCIAbgXIAWAzg");
	this.shape_222.setTransform(170.15,120.725);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EE3338").s().p("AgQgXIAhgEIgIA3g");
	this.shape_223.setTransform(161.975,124.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#DE3438").s().p("AgZACIAzgfIgYA7g");
	this.shape_224.setTransform(172.225,95.925);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EE3338").s().p("AgSAbIAWg5IAPA9g");
	this.shape_225.setTransform(163.025,90.425);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#F26C36").s().p("AgQg+IAhAHIggB2g");
	this.shape_226.setTransform(157.925,127.175);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#F26C36").s().p("AgWg8IAtByIghAHg");
	this.shape_227.setTransform(157.7,87.975);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#F26C36").s().p("AgjgnIAVgPIAyBtg");
	this.shape_228.setTransform(168.25,125.575);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#F26C36").s().p("AgiArIBFhhIguBtg");
	this.shape_229.setTransform(169.55,89.75);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#373535").s().p("AgzAAIBmgPIgBAJIACAWg");
	this.shape_230.setTransform(142.8,108.425);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("Ag2BIIADgOIADABIAUABIABgSIgChbIgUAEIgCgMIADAAIAYgFIAUgKIAEAEIgEAZIACgCIAKgMIANgHIAMAAQAFABAFADIAHAJIAFAMIAAANIgFANIgJALIgLAEIgOAAIgHgCIgFgGIgDgHIAAgJIADgFIAGgFIAHgDIAGgBIAGACIAFADIADAFIAAAHIgFAGIgIACIgFAAIACADIACAAIAHAAIAGgDIAEgGIADgIIgBgGIgDgFIgFgFIgGgCIgIAAIgGACQgEABgDADIgHAJIgFAIIgCAEIgIBKIAMgDIAOgFIAEgCIABAMIAAADIggAIIgPACgAgWg4IgCABIABACIADBfIgCAVIgBACIABAAIAIhSIADgHIACgDIgEgBIAGgigAAOgaIgFADIgBADQgBACAAADIADAGIADAEIADABIgCgDIgCgFIgBgFIACgFIACgEIACgCgAATgTIgBADIAAACIAAACIADgEIACgDIAAgDIAAgCIgBAAgAAegUIgBABIABAAIABgCIAAgDIgBgBgAAxggIgBgGIgDgKIgGgGQgEgDgEAAIgJAAIgKAGIgKAJIAAABIgBABIABgCIAJgGIAJgCIAJABIAIADQAEACADADIAFAJg");
	this.shape_231.setTransform(178.975,109.375);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AgxA+IAXABIgBh0IgUAEIgBgFQAbgCASgMIgHApQAIgSAMgJQALgJALACQAKACAFAKQAGAJgCANQgDAPgJAHQgJAHgNgCQgHgBgEgGQgDgHABgHQAAgEAHgEIALgDQAGABADADQAEADgBAFQgBAFgKABIADgHQABgFgEgBQgDAAgCADQgEAEAAAEIACAHIAGAFQAJACAGgHQAGgFACgKQABgIgFgGIgNgIIgQACQgIADgHAKIgIAPIgIBOIAfgIIABAHIgdAHIgiABg");
	this.shape_232.setTransform(179.0267,109.35);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#373535").ss(3,0,0,2.6).p("AAiAKQgpAXhAAUIABgOQBYghANgLIAPgLQAOgLgNgCIgdgJIhDgGIABgMIAHABIAfgBQAiACAcAKIAPALQANANgQAMQgIAHgWALg");
	this.shape_233.setTransform(165.5563,111.233);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AhGApQBXgiANgKIAQgLQANgMgNgCIgcgIIhDgGIAAgMIAHABIAfgBQAjACAbAKIAQALQAMANgPAMQgJAGgVAMQgqAXg/AUg");
	this.shape_234.setTransform(165.629,111.05);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#373535").ss(3,0,0,2.6).p("ABDgrQAOAKgXAVIhDAtIACgMIAcgTQAegTAEgLIACgHQgCgGgPABIgOACQgTAEgVAKQgLADgpAZIgEgBQgDgDAEgEIAkgYQAqgYAoACg");
	this.shape_235.setTransform(161.9147,102.8632);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AgHAeIAcgTQAegTAEgLIACgHQgCgGgPABIgOACQgTAEgVAKQgLADgpAZIgEgBQgDgDAEgFIAkgXQAqgYAoACIASAHQAOAKgXAVIhDAtg");
	this.shape_236.setTransform(161.9147,101.9882);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#373535").ss(3,0,0,2.6).p("AAah7QgOAQgQBBIgRBKQgRBOADAPIADAEQAEABAFgRIAThcQAThfAIgQIAMgkQgDgFgGAIg");
	this.shape_237.setTransform(160.7441,107.4387);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgfCBIgDgEQgDgPAQhOIAShKQAQhBANgQQAHgIADAFIgNAkQgHAQgUBfIgTBcQgEAQgEAAIAAAAg");
	this.shape_238.setTransform(160.6769,107.4387);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgFgbIAbAWIgrAhg");
	this.shape_239.setTransform(153.75,121.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AAPgVIAPAlIg7AGg");
	this.shape_240.setTransform(146.65,113.25);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgegQIA9gCIgMAlg");
	this.shape_241.setTransform(145.975,103.45);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgZgdIAzAhIgeAZg");
	this.shape_242.setTransform(153.175,94.25);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("Ag1gpIBqA3IgVAcg");
	this.shape_243.setTransform(146.75,97.075);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AAkgoIARAeIhpA0g");
	this.shape_244.setTransform(147.225,119.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgIALQgDgFAAgGQAAgGADgEQAEgEAEAAQAFAAAEAEQADAFAAAFQAAAGgDAFQgEAEgFAAQgEAAgEgEg");
	this.shape_245.setTransform(246.625,102.275);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgRgFIACADQAEADANAAIAGgBQAHAAACAI");
	this.shape_246.setTransform(280.942,90.1257);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgIgEIAEAEIARAC");
	this.shape_247.setTransform(276.9478,95.4551);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AARAJIgKgDQgKgEgJgL");
	this.shape_248.setTransform(279.8356,94.1925);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgHIABAFIgGAI");
	this.shape_249.setTransform(278.2922,93.5071);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AAEAHIgFAAIgEgEIAEAAIgBgKIAEACIAEAMIgCABg");
	this.shape_250.setTransform(273.6,86.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AAAAJQgDgBgFgGIABgEIAEAFIAAgEQABgFAEgCIgBACIAAAGIAHgGQABAKgHAFg");
	this.shape_251.setTransform(275.8563,85.55);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgIAGIAAgDQABgGAHgBQAPgDgLAEQgFACgBADIABAEIgCABg");
	this.shape_252.setTransform(278.0533,85.5357);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgDIgBAH");
	this.shape_253.setTransform(278.225,87.525);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgCIAAAF");
	this.shape_254.setTransform(278,87.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgHAEIAFgEQAFgEAEAG");
	this.shape_255.setTransform(277.9482,86.704);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFAAIADAAQACAAABAD");
	this.shape_256.setTransform(274.8,87.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAGgFIgLAK");
	this.shape_257.setTransform(274.1,89.15);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLADIgCgEQgCgEAHABIAEAEIALAFIADABIAJgB");
	this.shape_258.setTransform(272.3885,88.0948);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAGIAGgGQAGgHACAH");
	this.shape_259.setTransform(280.7168,85.9744);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgDgCQAIACgHAD");
	this.shape_260.setTransform(281.9942,91.179);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgCAFIgBgEIABgEIACgCQAEAAAAAFQAAAGgEAAg");
	this.shape_261.setTransform(275.425,97.875);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgDAAQAAgEADgBQAEAAAAAFIgBAEIgDACIAAAAQgCAAgBgGg");
	this.shape_262.setTransform(275.075,96.1269);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgDAJQgDgEAAgHIADgHQADgFAGAHIABAJQAAAKgHAAg");
	this.shape_263.setTransform(274.6469,93.2708);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgDAKQgCgCAAgIIAAgJIALAJIgHAKg");
	this.shape_264.setTransform(279.375,94.575);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgCIgBAF");
	this.shape_265.setTransform(280.2,87.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIAAAH");
	this.shape_266.setTransform(279.825,87.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_267.setTransform(279.525,87.625);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgCIgBAF");
	this.shape_268.setTransform(278.45,87.65);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgCIABAF");
	this.shape_269.setTransform(277.725,87.65);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIgBACg");
	this.shape_270.setTransform(279.925,89.525);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIgBACg");
	this.shape_271.setTransform(278.15,89.675);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgCIABACIgEAFQgEgBACgEQABgFACABg");
	this.shape_272.setTransform(277.8947,89.5291);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgCAAQABgFACABIACACIABACIgEAFQgEgBACgEg");
	this.shape_273.setTransform(277.8795,89.5159);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAGAIQgCAEgDAAQgCAAgCgDIgDgIIACgHQABgEADAAIAFADIACAHg");
	this.shape_274.setTransform(278.0214,88.9421);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgDAJIgDgIIACgIQABgDADgBIAFAEIACAHIgBAIQgCADgDAAIgBABQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_275.setTransform(278.025,88.9536);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgBgDIACAAQADAAgBAEIgBADIgCAAQgEAAACgEg");
	this.shape_276.setTransform(279.7,89.3744);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgCAAIABgDIACAAQADAAgBAEIgBADIgCAAQgEAAACgEg");
	this.shape_277.setTransform(279.7,89.375);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgDAAQAAgCADgBIAEADQAAAEgEAAQgDAAAAgEg");
	this.shape_278.setTransform(274.1222,91.075);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAIADABIAAABIgCADIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_279.setTransform(275.7469,101.7281);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgEAGIgCgFIACgFIAEgDIAFACIACAFIgCAFIgFADIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_280.setTransform(275.675,99.9792);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgHAMIgBgXIAIgBIADAGIAGALIgDAIg");
	this.shape_281.setTransform(276.525,113.85);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgCAEIgCgDQAAgGAEAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAIACAEIgBAEIgDACg");
	this.shape_282.setTransform(276.5477,111.35);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgHAIIgBgNIAFgGQAFgEAFAJIACAJQAAAJgJABIgBAAQgEAAgCgFg");
	this.shape_283.setTransform(276.425,108.8951);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgCAFIgCgFQAAgCABgCIADgDIAEACIABAFQAAAHgEAAIgBABQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_284.setTransform(275.875,106.3042);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AgDALIgDgVIAFAAQAEACAEAIIAAAGQgBAFgFAAIgEAAg");
	this.shape_285.setTransform(275.825,103.6929);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AgSC1IgChdIgLh0IgFgZIgEgLIAAgBQgEgNADgMIgIABQgKAAgGgFIgFgHIgDgJQgCgLAFgCIAMACIALAEIADAAIAKAAIgCgJIgQgkQgLgBACgIIAFgHIAAgBIAAAAQAOABgFANQAaAnAFACQAFAAACgJIADglQgFgJAFgDIAFgCIABAAQAGAEgCAFIgEAGIAAApIAEABIAagNQAIgGADAHIACAIQgBANgJAEIAAATQAAAEAEADIANABQAMgEAHAUIAFAUIAAABQgDAKgPADIgZgBIgFAJIgIAIIgBAAQgEACgEgFIAFA2QABATAIAwQAEAgAMAzIABABIgBAAIg4AEIgCAAQAAAAgBAAQAAAAAAgBQABAAAAgBQAAgBABgBgAgnhbIgBAHQAAAJADAKIAEALIAEAaIAMB0QACBbgBADIA1gDQgMg1gEgcQgJgxgBgTIgEg5QAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAIACABQADAHADgBIAAgBIABAAIABgBIAAAAIAGgGIAGgJIAAgBIABAAIAJACQALACAEgCIAIgDQAHgDACgFIgFgVQgHgRgJAEIgBAAIAAgBIgOAAIgBgBQgEgDAAgGIAAgUIAAgBQAJgDAAgMIgBgGQgCgFgGAEIgaAOIgBAAIgEgBIgBgBIgBgsIABgBIACgDQACgEgEgDQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgCADADAGIAAABIgCAmQgDAMgHgCQgFgBgOgVIgOgUIgBgBIABAAIABgGQgBgFgGAAIgDAGQgBAFAIABIAAAAIARAlIADAMIgDABIgCAAIAAgBIgIABIgDgBIgWgFQgEABADAJIADAIIAAABIADAFQAGAFAJgBIAJgBIACAAg");
	this.shape_286.setTransform(277.2609,98.9474);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#201F1F").s().p("AgRC2IgCheIgQiOIgEgLQgCgJAAgKIABgHIgJABQgKAAgGgGIgEgFIgDgJQgCgKAEgCIALACIAMAEIAMAAIAAABIADgBIgDgLIgQgkQgLgBACgHIAEgGQAIAAABAGIgBAGIANAUQAPAVAEAAQAGACACgKIADgmQgEgIADgDQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAGAEgDAFIgDAEIABArIAEACIABgBIAZgOQAIgEACAGIACAHQgBAIgEAFIgFADIAAAUQAAAFAEADIAOACQALgEAHATIAFAUQgDAJgOADIgQAAIgJgCQgGALgGAFIgBABIgCABQgDABgEgFQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAAAAAABIAEA5QABATAKAxQADAgANAyIg5AEg");
	this.shape_287.setTransform(277.2667,98.925);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AALBSIgHABIgCABQABgCAFgBIACgCIgGABIgCABQAAgDAEgCIADAAQgDgCgEACIgCABQAAgEAFAAIAFAAQAAgCgFAAIgFgBIAJgEIgHABIAGgDIgIAAIAIgEIgFgBIgDAAIAJgFIgHABIAHgFIgHABIAGgFIgGABIgBgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBABAAIAEgCIgHAAIAFgDIgGgBIAIgEIgIAAIAIgGIgIACIAGgHIgGAAIAFgDIgFgBIAGgDQABgCgHACIAGgHIgIABIAIgFIgJgBIAHgDIgGAAIAHgFIgFAAIgDABIAGgFIgDgBIgEAAIAHgEIgDAAIgFABIAHgGQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDABIAGgFIgEgBIgDABIAIgIIgIgBIAHgGIgJABIAHgGIgGgBIAGgHIgHAAIADgDIgFAAIAFgDIgEgBIADgDIgFgBIAGgDIgIAAIAGgEIgGgBIAFgDIgHgBIAGgDIgFgBIAGAAIgEgFIgBAAIAKgBIgBABQgCAEABAHIACAFQAFAGABAQIAKBgIgBAjIgJABg");
	this.shape_288.setTransform(273.8,98.325);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgxBYQgIgIgBgOQAAgNAFgPQAEgPAKgPIAMgQQAIgIAHgFQAOgKALgBQAFAAAKAFIABgFQAOhLAJAQQAHANAAA+QAAA8gHAhQgIAmgMgqIgEgUIggAeQgQAMgKAAIgDAAQgJAAgHgHgAAFgNIgBABIgHAOIgGATIgBATQABAPAJgBQAFAAAHgGIAPgPIAAgHIgKAGQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgEIACgPQgBgKgFgKIgGgFg");
	this.shape_289.setTransform(271.9727,107.7396);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AAAAeIhdgdIAAgCIBhgcIABAAIBZAcIAAACIheAdgAhWAAIBWAbIBXgbIhTgag");
	this.shape_290.setTransform(247.95,84.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AhcAAIBggbIBZAbIhdAcg");
	this.shape_291.setTransform(247.975,84.075);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#373535").s().p("AgbADIgRgGIAEgMIAqAMIAqgMIABAPQgMABgTAJIgQAHQgGgHgTgHg");
	this.shape_292.setTransform(247.775,87.05);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AhCAsIAYgpQAggqAogJIAZgEQAWACgRAdIgCADIgVAUQgQAOgTAHIg7AegAAhgkQgbAHgXAXQgQAQgNAWIAsgVQAQgHAPgLIAVgVQAFgKgKAAg");
	this.shape_293.setTransform(253.0286,98.1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AATBFQgRgLgHgaIgBgEQgEgKAAgFIgEgRIgRgaQgLgPgEgLIgFgQIAdAQIAYATIABAAQAaAaALARQAQAcgFAcIgBACIgKAIIgLABQgFgBgFgDgAgLgYIABABIAIAPIAHAgIABAEQAGAWANAHIAGADIAFAAIADgCQADgWgNgXQgKgQgYgYIgRgNg");
	this.shape_294.setTransform(251.2938,109.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AgNAUIgEgBIgFgHIgDgDIAEAAIgCgIIAJAJQADADACgGIAEgHIACgCIALgBQAGACAFgGQAEgDAAgJIADACIgCALQgCAHgDgBIgIABQgGgBgEAEIgBADQgBAGgFAFQgCACgEAAIgBAAg");
	this.shape_295.setTransform(244.025,105.1286);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AARAVIgTgBIgGgCQgGgEgFgKQABgGgEgGIgEgHIAEAAQAEAAABAEIgBgIIACgCIADAFIAAAHQABAIAGADIACACIAJAFIAKACQAKACACAFIgFAEg");
	this.shape_296.setTransform(244.325,100.725);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AgDABIgQAOIAHgUQASgPAJAJQAGAHgBAUQgIgXgPAIg");
	this.shape_297.setTransform(245.2317,103.1813);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAJgGIgEAGQgGAFgLAA");
	this.shape_298.setTransform(246.9271,100.2209);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAJgGIgEAGQgFAFgMAA");
	this.shape_299.setTransform(245.9726,104.0631);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#373535").s().p("AgXAKQgGgGAOgEIAPgEIANACIABABQgBAFgOABIAAgDQAKgBABgCIgKABIgMACQgLADACACIARABIAYgFIAIgDIADgDIAAgBQgHgGgUADIgVAFQgMACgCADIgCgCQADgCALgEIAXgFQAWgCAHAGIABAAIAAAEIgFAEIgJADIgZAGg");
	this.shape_300.setTransform(240.6,115.2515);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AgVAIIgCgBIAAgDIADABQAVAGAUgMIgBgCIgKgDIgIABQAJAAgDAEIgHAEIAAAAIgPAAIgBgDQABgEAJgDIAPgCQALAAADAFIAAAEIgBAAQgOAKgNAAgAgEgEQgHACgBACIABABIALgBQAGgCgHABIAAgDg");
	this.shape_301.setTransform(247.425,90.95);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#201F1F").s().p("Ag9B6QA5hMAOhXIAFg1IgCgYIADABIALAEIAKgBQATgEAEgFIACACIgVBjQgKAvgZBaIAAACIgCgBIgkgBIgbAJgAALgfQgOBQg0BHQAtgRAOAKQAbhpAGgfIAWhgQgIAFgNADIgLABIgLgDQAEAmgJAsg");
	this.shape_302.setTransform(243.7,103.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#373535").s().p("AALgpQAFgcAAgaIgBgUIAXADQASgEAFgGIgVBfIgBAEQgJAwgZBaIglgBIgcAJQA6hMANhYg");
	this.shape_303.setTransform(243.725,103.275);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#373535").s().p("AgiAFIAAAAQAAgFAKgDIAYgGIACgBIAWAAQAKABABAFIgKAIQgJAEgPACIgCABIgWAAQgKgBgBgFgAACgHIgCABIgXAGIgIAFQAAACAIABIAWAAIACgBIAXgGQAIgCAAgDQAAgCgIgBg");
	this.shape_304.setTransform(240.825,115.275);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AghAFQAAgDAJgEQAKgDAOgDIAXgBQAKACABADQAAAEgJADIgYAGIgXABQgKgBgBgEg");
	this.shape_305.setTransform(240.9,115.375);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#373535").s().p("AgQAKQgIgCAAgEQAAgEAHgDQAHgEAKgCIAQAAQAIACABAFQAAADgHAEIgRAFgAgQgBQgFACAAADIAGADIAPAAIABAAQAKgCAFgDIAGgEIgGgEIgQAAg");
	this.shape_306.setTransform(247.525,91.075);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#373535").s().p("AgPAIQgHgBAAgEQAAgDAGgDIAQgFIAQAAQAHACAAADQABADgHADIgQAFIgIABIgIgBg");
	this.shape_307.setTransform(247.3768,90.925);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgBgCIAAABIAAAEIACAEIABgDg");
	this.shape_308.setTransform(244.6913,104.5442);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#373535").s().p("AgBABIAAgEIAAgBIADAGIgBADg");
	this.shape_309.setTransform(244.675,104.725);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#373535").s().p("AgCBmIgMgJIgHgPIgCgTIAFheIgWAIIAAgQIAWgGIgCgyIAcgFIgDAtIAigMIADARIgDABIgjAJIgNBnQAAAIABAHIAFALIAFAGIAHADIAFgCIAEgFIAEgKIABgNIgBgEIgBAGIgCAEIgEADIgDACQgHAAgDgFIgDgEIgBgHIABgIIADgHIAGgEIAGgCIAJACIAIAFIAGAHIACAIIgCARIgGAOIgIALQgGADgGAAgAAZA0IADAGIABAGIgBAOIgEAKIABgBIAGgMIABgPIgBgFIgFgFIgEgDgAgLBUIgDgIIgBgRIAOhqIAAgBIAGgDIgHADIABgHIADgqIgOAEIABAjIAAANIgXAHIAAACIAXgJIgGBoIADARIADAIgAAHAxIgDAFIgBAFIABADIABAEIACABIgCgGIABgGIACgFIADgFgAAOA1IgCAEIAAAFIABgBIACgJIAGAFIAAABIgBgDIgDgEIgBAAIgBAAgAAMg2IAWgEIgBgEg");
	this.shape_310.setTransform(227.15,105.55);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgLBaQgJgLAAgUIAGhjIgXAJIAAgJIAXgHIgCgxIAVgFIgDAvIAVgIIANgEIACAKIglAKIgGAyQgHAnAAAQQAAASAGAKQAGAKAJAAQAIAAAFgJQAEgIAAgQIgDgLQgDgFgEAAQgDAAgCADIgCAKQAAAFADAAQAEgBABgGIACABIgCAJIgFACQgEABgEgEQgEgDAAgGQAAgHAFgFQAEgFAGAAQAHgBAHAHQAHAGAAAGQAAAQgIANQgHANgKAAQgNAAgJgMg");
	this.shape_311.setTransform(227.125,105.55);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#373535").s().p("Ag+BJIgFgEIgDgGIAAgHIACgEIAFgEIAFgDIAFAAIAFACIADADIACADIAAgBIADgLIADhnIgBAAIgIgCIgDAAIACgKIAZADIAUABIgCAMIgMgBIgFAwIABAAIADAAIARABIAWgCIACgjQABgIADgFIAGgJIAKgEIAKgBIAHACIAGAGIADAIIABAHIgDAGIgEADIgFAEIgGAAIgIgFIgDgDIAAgCIgCAHIgGBYIAEAAIALgCIABAMIgcACIgNACIABgNIAOgBIgCgwIglABIgIAAIgIAxIgEALIgFAJIgHAFIgKACgAg3BAIAAABIAEAAIgBAAIgEgCgAhAA5IABAEIABADIgBgCIABgFIAAgCgAAng/IgGAHIgDAKIgCAlIABAAIgBAEIABAbIAFhAIACgLIAFgKIACgDgAgfAKIADgRIgBAAIAHg4IAAgBIgJgBgAA/gyIgBACIACgBIAAgDIAAgDgAAyhAIgEAFIAAABIADgCIAEgBIAFADIgBgEIgCgCIgCAAg");
	this.shape_312.setTransform(214.075,109.05);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#373535").s().p("Ag4BIQgEAAgEgFQgEgFABgFQABgDAEgDIAIgCQAFABACACIABAGIgCADIgDABQgEAAAAgFIABAAIACACIACgDIAAgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAIgEABIgCAFQgBAFABACQABAEADAAQAHABAEgHQAFgHACgPIADhqIgDAAIgIgCIAAgEIAnAFIgBAEIgMAAIgGA1IAIACIASABIAYgDIACgmQACgMAIgHQAHgGAKABQAGABAEAGQAFAGgBAHIgGAHIgIACIgHgDQgDgDABgCIADgFIAFgCIADACIABACIgCADIgDgEIgCAEIABAEIADADIAEgEIADgIIgBgIQgCgEgEAAQgGgBgFAIQgEAGgCANIgGBcIAPgCIABAFIgiADIAAgFIAOgBIgCg4IgaADIgYgBIgJAzIgJASQgEAGgHAAIgCAAg");
	this.shape_313.setTransform(214.073,109.0484);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#373535").s().p("AgIAVIgHgEIgEgHIgCgJQAAgEACgEIAFgIIAGgFIAIgCQAIAAAGAEQAGAEABAJIABACIgDABIgBAAIgGgHIgIgCIgGABIgGADIgEAFIgCAEIACAGIADAFIAFACIAEABIAGgBIACgGIgCgGIAAACIgCAGIgFACIgCgBIgDgDIgCgFIABgEIADgCIADgCIAEgBIAFABIAFACIAEAEIABAFIgBAHIgFAEIgGAEIgGABgAAJAAIACAJIgDAIIACgBIAEgEIABgFIgBgEIgDgDIgEgBIgCAAgAgGgRIgGAFIgEAGQgCAEAAADQAAAFACACIAEAGIABABIgEgGIgCgHIACgGIAFgFQACgCAFgCIAHgBQAFAAAEACIAEADIgFgGQgFgEgHAAgAgEAGIACADIABABIACgCIABgBIgCAAIgDgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBgAgBACIAAACIABAAIACAAIADgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgBAAg");
	this.shape_314.setTransform(261.225,99.225);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AgOAPQgFgFAAgJQAAgHAGgIQAHgGAGAAQAQAAAEAQIgBAAQgGgJgJAAQgGAAgHAFQgGAFAAAFQAAAHAGAFIAJAEQAJAAABgJQgBgJgHAAIgCAAIgDADIAEADIADgCQgBAHgDAAIgEgCIgCgFQAAgDADgCIAGgCQAGAAADADQAFACAAAFQAAAGgFAEQgGAEgGAAQgHAAgHgGg");
	this.shape_315.setTransform(261.2,99.225);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#373535").s().p("AgaA4IARAAQAAg4gFgzIgQgBIAAgLIAXAAIAJgBIASgGIAAAOIgMADIgGBrIAYgCIAFAAIAAAPIgoABIgRADgAgJg3QAGAvAAAyIAFhkIgJACIgCAAg");
	this.shape_316.setTransform(261.45,109.525);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AgWA7IARgBQAAg6gHg3IgOgBIAAgEIATAAIAXgGIAAAHIgLADIgFBxIAbgBIAAAIIglAAIgMACg");
	this.shape_317.setTransform(261.45,109.55);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#373535").s().p("AgIAVQgDgBgDgEIgFgGIgCgJIACgIIAFgIIAGgFIAIgCQAIAAAGAEQAGAEABAJIABACIgCAAIgBAAIgBABIgBgBIgFgGIgIgCIgGABIgGADIgEAFQgCACAAACQAAAEACACIADAFIAFADIAEABIAGgCIABgCIABAEIACgBIAEgEIABgFIgBgEIgCgDIgFgBIgDgBIABADIABABIgBAAIAAgBIgDgBIgBAAIgBABIgBABIAAACIABAAIAEgBIABgBIABAFIgCAEIgFACIgCgBIgCgDIgCgCIAAgDIABgEIACgCIADgCIAEgBIAFABQADABACACIAEADIABAFIgBAGIgFAFIgGAEIgGABgAgGgRIgGAFIgEAGIgCAHIABAHIAFAHIAFADIACABIgGgEIgEgGIgCgHIACgGIAFgFIAHgEIAHgBIAJACIAEAEIgFgHQgFgEgHAAgAgEAEIAAACIABACIABABIABABIACgCIABgBIgCAAIgCgBIgCgDIABgCgAAHANIgBgGIAAgCIAAgCIACAGIgBAEgAAGAHg");
	this.shape_318.setTransform(188.775,99.225);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AgNAPQgGgFAAgJQAAgIAGgHQAGgGAHAAQAQAAAEAQIgBAAQgGgJgJAAQgGAAgHAFQgGAFAAAFQAAAHAFAFIAKAEQAJAAAAgJQAAgJgHAAIgDAAIgBADQAAABAAAAQAAABABAAQAAAAABABQAAAAAAAAIAFgCQgCAHgEAAIgDgCIgCgFQAAgEADgBIAGgCQAFAAAEADQAFABAAAGQAAAGgGAEQgFAEgGAAQgIAAgFgGg");
	this.shape_319.setTransform(188.775,99.225);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#373535").s().p("AgaA4IARAAQAAg4gFgzIgQgBIAAgLIAXAAIAJgBIASgGIAAAOIgMADIgFBrIAYgCIAEAAIAAAPIgoABIgRADgAgJg3QAGAvAAAyIAFhiIAAgCIgJACIgCAAg");
	this.shape_320.setTransform(189,109.525);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AgWA7IARgBQAAg6gHg3IgOgBIAAgEIATAAIAXgGIAAAHIgLADIgFBxIAbgBIAAAIIglAAIgMACg");
	this.shape_321.setTransform(189,109.55);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#373535").s().p("AgmgjQAegBAiAIIAdAJIgWARIhXAmg");
	this.shape_322.setTransform(165.025,110.7388);

	this.instance_4 = new lib.Symbol79("synched",0);
	this.instance_4.setTransform(159.9,107.45,0.64,0.64);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AgPgSQAWgIAPACQAKAAgHAJIgJAKIgqAeg");
	this.shape_323.setTransform(164.4941,101.6632);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#201F1F").s().p("AgrAYQAdgHAcgVIAagVIAEAaQghAXgeACg");
	this.shape_324.setTransform(212.4,96.975);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AADAGIg1AQIA0gsIAxAoIgEAFg");
	this.shape_325.setTransform(216.125,96.725);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#373535").s().p("AgVBcIgMgGIgIgLQgEgFAAgHQAAgIAFgHQAGgIAIgFIADgBIABABIAAAAIABgSIgIgFIgJgJIgGgKIgCgMQAAgLAEgHQACgJAHgIQAFgHAHgDQAGgFAIAAIAHADIAFACIABgBIABABIABAAIAAAAIABAAIABABIAAAAIABAAIAAABIACACIABAEIgIAEIAIAGIAGALIADAMIgDAQQgDAHgGAFIgMAKIgKACIgBASIANgJIARgGIAIgBIAJACIAGAGIAEAJIACAKQAAATgQAPIgSALIgVAEgAgcA8IACAKIAEAIIAHAEIAIACIAPgDQAIgCAGgHIAIgLIACgLIgBgHQgDgDgEAAIgHABIgHABIgHADIgPAJIgIAGIgIgFgAgjA0QgDAFAAAGIACAJIAGAIIAEADIgBgCIgFgKIgCgLIACgLgAAYAiQAHgBAEAFQAEAEAAAIIAAAFIABgJIgBgJIgEgGIgDgEIgGgBIgHAAIgPAHIgWANIgBAFIAbgQIAIgBgAgPg3IgHAHIgFAMIgCANIABAOIAFAJIAEAGIAGACIAIgDIAFgGIAFgLIACgNIgCgIIgDgHIABAFQAAAEgDAFQgEADgFAAQgHABgEgFQgDgFAAgHIABgFIAEgGIAGgEIAGgBIALACIAAgBIgFgCIgGgCQgFAAgEADgAglgjIgCAQIABAKIAGAJIADAEIAAgBIgEgLQgCgFAAgKIACgPIAEgLQgFAFgDAJgAAOgZIgCAPIgGAKIAIgKIACgNIgCgKIgFgIgAgKghIABABIABAAIAAgBIgCgBgAgIguIgBACIgCACIAAAAIADgCQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAFACIgCgCIgEgBgAAHhdIAAAAIAEAFIAAAAg");
	this.shape_326.setTransform(200.15,110.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("AgfBGQgKgIAAgMQAAgOARgKIABACQgIAHAAAMQAAALAHAJQAGAIALAAQATAAAMgMQAMgNAAgNIgDgJQgDgEgGAAIgPACQgGACgJAFIgOAKIgDgCIAGgoQgLgCgHgJQgHgKAAgMQAAgSALgOQALgOANAAQAIAAAFAFIgBgCIACABIABABIABABIABABIgDADQgFgGgIAAQgLAAgHALQgIALAAAQQAAAQAGAKQAGAJAHAAQAKAAAGgLQAHgMAAgOQAAgJgFgIQgFgIgGAAQgDAAgCAEIgDAHQAAALAGAAIADgBIABgFIgBgCIgEABIABgEIADgCQAFAAAAAGIgCAHIgHADQgFAAgDgEQgDgEAAgGQAAgEAEgEQAFgFAFAAQAKAAAHAJQAIAIAAAMQAAAQgLALQgJALgMAAIgDAbIAagQIARgEQAHAAAFAHQAEAHAAAKQAAASgOANQgPAPgVAAQgOAAgKgJg");
	this.shape_327.setTransform(200.125,111.575);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#373535").s().p("AgWgCIAZgWIAUAxg");
	this.shape_328.setTransform(170.375,120.95);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#373535").s().p("AgQgXIAhgEIgJA3g");
	this.shape_329.setTransform(162.125,124.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#373535").s().p("AgZACIAzgfIgXA7g");
	this.shape_330.setTransform(172.25,96.225);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgSAbIAXg6IAOA+g");
	this.shape_331.setTransform(163.225,90.75);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#373535").s().p("AgQg+IAhAIIggB1g");
	this.shape_332.setTransform(157.95,127.475);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgWg8IAtBzIghAGg");
	this.shape_333.setTransform(158,88.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#373535").s().p("AgjgnIAVgPIAyBtg");
	this.shape_334.setTransform(168.525,125.925);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgiArIBFhhIguBtg");
	this.shape_335.setTransform(169.55,90.05);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#3F4096").s().p("AhCAcIgBgBIAAgCIAAgDIgBgBIAAgOIABgCIgBgBIABgBIAAgGIgIAAIgDABIgFAAIgBAAIgBgBIAAAAIgBABIgCAAIgBAAIgBACIgCgCIgDAAIAAABIgCAAIgBgBIAAABIgBgBIgCAAIgBABIAAAAIAAAEIgBACIABACIAAABIgBACIABABIAAAAIgBAEIAAABIAAADIABACIAAADIgBAAIAAAAIgBABIgCgBIgBgCIAAgEIgBgCIgBgCIABgBIAAgDIgBgIIAAgDIgBAAIAAgBIAAAAIgBgDIAAAAIABgBIACgBIAAgEIAAgCIAAgBIAAAAIAAgDIABgCIgBgGIABgDIAAAAIACgCIABAAIAAAAIABABIABAAIABABIAAACIAAABIABAAIgBABIAAABIAAABIAAAAIAAAJIAAABIAAABIAAABIgBACIAAABIABAAIABAAIACAAIAEAAIABAAIABAAIABAAIAAAAIACAAIADAAIABAAIAAAAIABgBIABABIAAAAIACAAIABAAIAAAAIABAAIAKgBIACAAIAAgBIAAgEIAAgDIAAgBIAAgCIgCgEIAAgDIACgCIAAAAIAAgCIADAAIABABIAAAAIAAAAIACAAIAAABIABAAIAAAEIgBABIABABIAAABIAAADIAAACIAAABIAAAAIgBAHIADAAIAEgCIAFAAIABAAIABAAIABAAIABACIgDACIAAAAIAAAAIgBgBIgCACIAAgBIgBAAIgBABIAAAAIgBAAIgBAAIgDAAIAAABIgBABIgBAAIAAgBIgBABIAAAAIAAACIAAAEIgBABIABAAIAAABIgBABIAAABIABACIgBABIAAAEIgBAEIABAAIgBACIAAABIAAABIAAAAIABACIAAABIgBAEIgDACgAhBADIAAABIAAAAIAAABIgBACIAAAIIABABIgBABIAAABIABABIAAAAIABgNIAAgBIAAAAIAAgBIAAAAIAAgBIAAgCIgBAAgAhpAPIAAgCIgBABIAAABIAAgBgAhqAMIABABIAAgCIAAgBIgBAAgAhqgZIAAACIABAEIgBADIABACIAAABIgBABIABAAIAAABIgBAFIgBABIgCABIABABIABABIABACIAAAKIABgDIAAgHIABgCIACgBIADgBIAAgBIABABIABAAIAAABIABAAIABgBIABAAIAAAAIACAAIgBgBIgBAAIgFAAIgFAAIAAgBIAAgCIAAgDIABAAIgBgBIAAgBIABgHIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIgCgBIAAAAgAhBgCIAAACIACgCIgCAAIAEgEIgCAAIABgKIAAgDIAAAAIAAgCIgBgCIAAAAIAAgBIABgBIgBABIAAgCIgBAAIAAAAIAAABIgCAAIgBAAIABABIABAFIAAADIABADIAAABIgBABIABABIAAACIgBAAIABABIABABIgCAAIAAAEgAhbgEIAAAAIABAAIAAAAIADAAIABgBIACAAIAAAAIABABIAFAAIADgBIAEAAIABAAIAAgBIABABIAAgBIgBAAIgJABIgFAAIAAAAIgBAAIgGAAgABhAcIgBABIgCAAIgBgBIgCAAIAAAAIgCgBIgCgCIAAgBIgBAAIAAgBIgBgBIAAAAIAAAAIgBAAIAAgCIgBgFIAAgDIABgCIAAgCIAAgCIAAgCIABAAIAAgBIAAgDIAAgBIAAAAIABgBIgBgDIAAgCIABgDIABADIABAAIAAAAIABgBIAAgBIADgFIAAAAIAAgBIABAAIABgCIABgBIAAgBIABAAIABgBIABgBIAAAAIABgBIABAAIADAAIAAAAIACAAIAAABIAAABIACAAIAAABIAAAAIACACIgBAAIAAABIABACIAAAAIgBABIABADIAAAAIgCAEIgCACIAAABIAAABIgDACIgDABIgBABIAAAAIgDABIgBAAIgCABIgBgBIAAAAIgBAAIgBADIAAAAIgBADIAAABIAAADIABAAIgBAAIAAAEIAAABIABABIAAAAIAAABIACABIABAAIAAABIABAAIAEAAIACAAIABgBIAAAAIABgBIAAAAIABAAIAAgBIACgBIAAAAIABgBIABgBIAAAAIABgBIABgCIABAAIACAAIAAAAIABACIgBACIgCAEIAAAAIgBAAIAAABIgBABIgBAAIgCACIgBABIgBAAIAAABIgCAAIAAABIgBAAIAAAAIgBAAIgBABgABhAaIABgBIABAAIACAAIAAgBIABAAIAAgBIABAAIACgBIABgBIAAAAIABgBIAAgBIABAAIAAgBIgBAAIAAABIAAAAIgBAAIAAABIgBABIgBAAIAAABIgCAAIAAAAIAAAAIgBABIgBABIgKgBIAAgBIgCAAIgBgBIAAABIACABIAAABIABABIACAAIAAAAIAAABIABAAIABgBIAAABIACAAIABgBgABWAUIABAAIAAAAIgBgBgABXAGIABgDIABgCIADAAIAAABIACgBIABAAIACgBIABAAIAAAAIAFgDIAAgBIABgBIABgCIABgDIAAgCIgBAEIAAABIgBABIgBAAIAAAAIgBABIgBABIgBABIgBAAIAAAAIgBABIAAAAIgBAAIgBAAIAAABIgCAAIgBABIgBAAIgBAAIgBgBIAAAAIAAgBIgBAAIABgDIAAAAIgDAAIABADIAAABIgBAAIACABIgBAAIgBABIAAABIABABIgBABIAAABIgBAAgABhgMIgBABIgBADIgBABIAAAAIgDAEIABAAIAAABIABgBIACAAIAAgBIABAAIAAAAIABAAIABAAIAAgBIAAAAIABAAIAAgBIAAAAIABAAIABgBIAAgBIABAAIAAAAIABAAIAAgCIABgCIAAgCIAAgBIgDAAIAAAAIgBAAIgBABIgBAAIAAABIAAgBIAAABIgBAAgABegOIAAABIgDAGIgBAAIABABIABgDIADgFIAAAAIABAAIAAgBIABAAIABgBIABgBIABAAIAAAAIABgBIABAAIAAABIABgBIAAAAIABABIAAgBIgBgBIgCAAIAAgBIgBAAIAAABIgBAAIgBAAIgBACIgBABIAAABIgBAAIAAAAgAglAcIgBAAIgBgBIgEAAIgCgEIgBgBIABAAIAAgBIgBgDIgBAAIABgCIgBgCIABgBIAAgFIAAAAIABgEIAAAAIABAAIAAgEIABAAIAAgBIAAgBIAAgBIAAgBIABgBIABAAIgBAAIAAgBIACgCIAAgDIABAAIABAAIgBgBIAAgBIAAgBIABAAIACAAIABgCIAAgBIACAAIABgBIAAAAIABABIACAAIABgBIABgBIAAACIABAAIABABIACAAIAAABIAAAAIABAAIABACIABAAIAAABIABAAIAAABIACADIABAEIAAABIABADIAAAAIAAACIAAADIgBABIAAAAIAAACIgBACIgBABIAAABIAAABIAAAAIgBABIAAAAIAAAAIgCACIgBACIAAAAIAAACIgBAAIgBAAIAAABIgBABIgCAAIgBAAIgBACIgBABIgBAAIgBAAIgBAAIgCACIgBACgAglAZIABAAIAAgBIACAAIgEAAIgBAAIAAAAIgBAAIAAAAIgBAAIAAgBIgBAAIgBgBIAAAAIAAAAIABABIAAABIADABIABAAIAAgBgAgmgBIAAABIABABIgCABIAAACIgBAAIAAACIgBABIAAADIgBADIAAADIAAACIAAACIABABIAAABIABAAIABAAIAAAAIABAAIADAAIAAgBIABAAIABAAIAAgBIACAAIABAAIAAAAIAAgBIABgBIAAgBIACAAIAAgBIACgBIABgBIAAgBIACAAIAAgBIAAgBIAAgBIAAgBIABAAIAAAAIAAgBIAAAAIABgCIAAAAIAAgBIAAAAIAAgBIAAgBIgBAAIABgBIAAgCIgBAAIABgBIgBgBIAAgDIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAgBIgBgBIgBAAIgCgCIgBAAIgBABIAAAFIgDAAIgCABIAAABIgBAAIgBACIAAABIAAAAgAgsALIAAABIABgCIAAgBIgBAAIAAAAgAgrAHIAAAAIAAgBIAAAAgAgngHIAAABIAAABIgBABIgBABIAAADIgBABIAAACIABAAIAAgBIABgCIAAgCIABgBIABgCIAAgBIAAAAIABgBIAAAAIAAgBIADgCIACAAIAAgCIABgCIACgBIABAAIABABIACAAIABABIACABIgDgCIAAAAIgCgBIgBAAIgBAAIAAAAIgCAAIgBAAIgDACIgCABIAAABIAAABIgBACIABAAIgBABIgBAAgAgVgIIAAABIACABIABABIAAADIAAABIAAABIABAAIAAAAIgBgDIAAgBIAAgBIgBgCIgBgDgAA2AZIAAAAIgBAAIgBAAIAAgBIAAABIgBAAIgBgBIAAAAIgCAAIgCAAIAAAAIgBABIgBgBIAAAAIgBgBIgCgBIgBgEIAAgBIACAAIAAgBIABAAIABgCIAAACIABAAIACAAIAAACIABAAIAAACIABAAIABAAIAAAAIAPgBIABgBIAAAAIABgBIACAAIACgBIAAgCIgBAAIAAgBIgBAAIgBAAIAAAAIgBgBIgBAAIAAgBIgCAAIgCgBIAAAAIgCAAIgBAAIAAgBIgBAAIAAgBIgDgBIgBAAIAAgBIgDgBIgBAAIAAAAIgCgCIgBAAIgBgDIgBgBIAAgBIAAgEIAAAAIAAgCIABgDIACgBIAAgBIABAAIADgDIAAAAIAFgDIABAAIAFgBIAAAAIAFAAIABABIABAAIABADIAAAAIAAABIAAABIAAABIgBABIgBABIgCgBIAAgBIgCgBIAAABIgBAAIAAgBIgBAAIgBAAIgCABIgCABIAAAAIgBAAIgBAAIAAABIgCAAIAAABIgBAAIAAAAIgBACIgBABIAAAAIgBABIgBADIAAAAIAAABIABABIAAAAIABABIABABIABAAIACABIACAAIABABIABAAIABAAIAAABIAEABIABAAIADACIABAAIAAAAIAAABIADAAIABABIABACIABABIAAAAIACABIgBAAIAAABIABABIAAAAIAAABIgBABIgCADIAAABIAAABIgCAAIgBAAIAAABIgDAAIgBABIgBAAIAAAAIAAABIgCAAIgBgBIgCABIgFAAIgBABgAA4AWIABABIAAgBIAGAAIACAAIABAAIAAAAIABAAIACgBIABAAIABgBIABAAIAAgBIgBAAIgEABIAAABIgBAAIgPABIACAAIABABIABgBgAArAVIABABIABAAIAAAAIABAAIgBAAIAAgCIgBAAIAAgBIgBABIAAgBIgBAAgABJAOIAAABIABAAIAAABIgBABIAAABIgBABIABAAIABgEIAAgBIAAAAIAAgBIgBAAIgBgCIgBgBIgCAAIAAABIABAAIAAAAIABABIAAAAIABAAIAAABIABAAIABAAgAA6AGIABAAIAAABIABAAIACABIABAAIACABIACAAIgBAAIAAgBIgDgBIAAAAIgEgBIAAgBIgCAAIAAAAIgBgBIgBAAgAAxgKIgBABIgBADIAAAAIAAABIABgCIABgBIABgCIACgCIAAAAIABAAIABgBIABgBIABAAIAAAAIACgBIACAAIABAAIAAgBIABAAIABAAIACABIADAAIAAAAIABABIAAgBIgBgBIAAgBIgBAAIgBAAIgDAAIgFABIgFACIgDADIAAAAIAAAAgAAcAYIgBAAIgBgBIAAAAIgEgDIAAgDIgBgBIAAgCIgBgBIAAgEIABgBIgBgBIAAgDIgBAAIAAABIgBABIgBAAIAAACIAAAAIgBABIgBACIgBABIgBABIgBAAIgBAAIgCAEIgBABIgCACIgCABIAAABIgEACIgBgBIgBAAIgCgBIgBgBIAAAAIABgBIgCgCIABAAIAAAAIgBgDIAAAAIAAgBIAAgBIAAgEIAAgBIAAgBIgBAAIABgBIABgCIgBAAIAAgBIABAAIAAgCIgBgDIAAAAIABgGIAAgDIAAgDIgBAAQAAgBAAAAQABgBAAAAQAAAAABAAQABAAAAAAIACABIABABIAAAAIAAAKIgBABIAAAEIAAABIAAABIABAAIgBABIAAABIAAAAIAAABIAAACIAAACIABABIgBAAIAAADIABAAIgBABIABABIAAACIABgBIABgCIAAAAIABgBIAAgBIACAAIAAgBIAEgCIAAAAIABgBIACgDIABgBIAAgBIABAAIACgCIABgBIAAgBIABAAIABgBIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABgBIACgFIAAgBIAAAAIAAgBIABAAIAAgBIABgCIAAAAIABAAIABgBIACAAIAAACIAAABIAAABIAAAEIgBAAIgBACIgBADIAAAAIgBABIAAACIAAAAIAAACIgBABIAAADIAAAGIAAAAIAAACIABADIACAAIAAABIAAAAIABABIABAAIACAAIABAAIABgCIACAAIACABIABABIgBABIgBACIgBAAIgCABIgBABIgBAAIgDAAgAAZATIACADIABAAIABAAIAAAAIACAAIABAAIAAAAIACAAIAAgBIACgBIAAgBIgBAAIgBACIgCAAIgBABIAAgBIgCAAIgBAAIgBgBIgBAAIAAgBIAAAAIgBAAIAAgBIgBgBIAAgBgAgDASIABABIAAABIABABIAAAAIABABIACgBIABgBIAAgBIACgBIACgDIAAAAIADgDIgBABIgBAAIgBAAIAAACIgBAAIAAAAIgCABIAAABIAAAAIgCACIgBABIgBAAIAAAAIgCgCgAgEAPIAAABIABAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgDIgBAAIAAAFIAAAAIAAABIABACgAALAKIAAABIACgCIAAgBIABgBIgBAAIAAABgAASACIAAABIABAAIAAgBIABgBIADgBIAAACIAAAAIAAgCIABgBIAAgCIABAAIAAgBIABgDIAAAAIABgDIABgDIAAgBIgCADIAAADIAAAAIgCAEIAAAAIgBABIAAABIAAABIgBABIgBAAIAAAAIAAAAIgBABIgBAAgAgEgOIABAGIgBAGIABACIAAAAIAAgHIABgFIAAgBIAAgBIAAAAIgBAAg");
	this.shape_336.setTransform(246.225,124.75);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#3F4096").s().p("AhBAcIgCgCIAAgEIAAgCIABAAIgBgBIAAgLIABgCIgBgBIAAgCIAAgEIABgEIgCACIAAgCIgBACIgBgBIgDABIgCAAIgDABIgFAAIgBAAIgCgBIAAABIgCAAIgBAAIgBABIgCgBIgCAAIgBAAIgBAAIgBAAIgBAAIgBAAIgEAAIAAACIAAADIgBADIABACIgBACIABABIgBAFIAAABIAAADIABABIAAADIgBAAIgBgBIgBgGIgCgCIACgBIgBgBIAAgDIgBgIIAAgCIgCgBIAAgEIACgBIABgEIAAgCIABABIAAgBIgBgEIABgCIgBgFIAAgCIABgCIACgBIABABIAAACIABABIgBADIABACIgBAHIAAACIAAAEIABAAIABAAIADAAIACAAIABAAIACABIAAgBIABAAIABAAIAGAAIABgBIAAABIADAAIACAAIAKgBIADAAIAAgBIAAgEIgBgEIABgCIgCgHIABgBIABAAIAAgCIABAAIAAABIADAAIAAABIABAAIAAACIgBABIABADIAAABIAAABIAAACIgBAJIAEAAIADgBIAGAAIgCABIgCAAIgBABIgBgBIgDACIgBACIgCgCIgBADIAAAAIgCACIABAAIABAAIgCAFIACAAIgBACIgBAAIABACIgBAAIAAAFIgBAFIAAAFIABAAIAAACIgBABIAAAAIAAACgABgAbIgCABIgBgBIgBAAIAAAAIgEgBIAAgBIgCgBIAAgBIgBgCIAAgBIgBgEIAAgEIABgCIAAgEIABgBIAAgFIAAAAIAAAAIAAgBIAAgEIAAgCIABABIADAAIAAgBIADgHIABgBIABgCIACgCIACABIAAgCIACAAIABAAIABAAIAAABIAAAAIACABIADAEIgBACIABADIgBAAIgBACIgCAEIAAABIgFACIgBABIgBAAIgCABIgBAAIgCABIAAAAIgCgBIgDAFIAAACIgBAAIABAEIgBABIAAADIABACIABACIADACIAAAAIAFABIADAAIACgCIABgBIABAAIAAgBIABgBIABAAIABgBIAAgBIADgCIABAAIABABIgBABIgCADIAAAAIgCADIgBAAIgCACIAAABIgBAAIgBAAIgBAAIgBABIAAAAIgCABgABagCIACACIADgBIAAgBIABAAIABAAIABAAIABgCIAAAAIABgBIACgCIABgBIAAgBIACgCIAAgBIgBgEIgBAAIgCAAIgBAAIgDABIAAABIAAgBIgBAAIAAABIAAABIAAABIgBABIgBAAIAAADIgBAAgAgmAaIAAABIgCgBIgCAAIgDgDIABgCIgCgDIAAgIIACgBIAAgBIAAgCIABAAIAAgCIAAgEIABAAIAAgDIABgCIAAgBIABgCIABAAIgBgBIACgBIAAgCIAEgEIABAAIABAAIACAAIACgBIAAABIADABIABAAIADAEIAAABIABAAIABACIACAFIAAABIABACIgBACIABABIAAADIgBABIAAABIgDAFIAAABIgBABIgBABIgBABIAAABIgBABIgBAAIgBACIgGADIAAABIgBAAIgCABIgCABgAgggLIAAADIgBAAIgDABIgBABIgBABIAAADIgBABIgBABIABAAIgCABIAAACIAAACIAAABIgBABIAAABIAAABIAAABIgBADIAAABIAAADIAAABIAAACIACAEIAAAAIACAAIABAAIADAAIABgBIAAAAIABAAIABgCIABABIAAgBIABAAIABgBIABgCIACAAIAAgBIADgBIAAgBIABgBIABgDIAAgBIABgBIAAAAIABgBIgBAAIABgBIAAgEIAAgCIAAAAIAAgBIAAAAIgBgBIAAgCIgBgCIgBgBIAAgBIAAAAIAAgBIgBgBIAAAAIAAgBIgCgBIgEgDQgBAAAAABQgBAAAAAAQAAAAAAABQAAAAgBABgAA7AYIgBABIgBAAIgBgBIgBABIgBAAIgCgBIgBABIgCgBIgDAAIAAAAIgBAAIgBAAIAAgBQgDAAAAgFIACAAIAAgBIAAAAIAAAAIABAAIAAABIABgBIABABIAAABIABAAIAAACIACAAIAAABIABgBIAMAAIAEgBIAAgBIABAAIAAAAIAEgCIABAAIAAAAIABgBIgBAAIAAgBIgBgBIgBgBIAAgBIgBAAIgBgBIgBAAIgBgBIAAAAIgDgBIgCAAIgBAAIgBAAIAAAAIAAAAIgBgBIgDgBIgBgBIgDgBIgBAAIgCgDIgBgCIgBgBIAAgFIABgDIACgCIAAAAIACgDIABgBIAGgCIACgBIADAAIAEAAIAAAAIAAAAIACABIAAABIABABIgBADIgBABIgBgDIgDAAIgBgBIgBAAIgBABIgCAAIgCACIgBAAIgBABIgCABIgBAAIAAAAIgCABIAAACIgBAAIgBAFIAAAAIAAABIABABIAAAAIADACIAAAAIACABIACAAIABACIACAAIAAABIAFABIABABIADABIAAAAIABAAIACAAIACABIABACIAAABIAAABIABAAIAAAAIABACIgBABIgBACIgBABIAAABIgBAAIgCACIgCAAIgBAAIgBABIAAAAIgCAAIgEAAIgBABgAAcAYIgCgBIgDgDIgBgDIAAgBIAAAAIgBgDIAAgDIAAgBIAAgCIAAgFIgBAAIAAABIgCADIgBAAIgBACIgCABIgBACIgDADIgFAFIgCABIAAACIgDACIgCgBIAAAAIgBgBIAAgBIgBAAIABgBIgCgCIABgBIgBAAIAAgBIAAgBIAAgBIAAgGIAAgBIAAgCIAAgGIABgHIgBgDIAAgDIACgBIABAAIABABIgBADIAAAEIAAAEIAAABIAAACIgBABIABAAIgBACIABAAIgBACIAAABIAAABIAAACIAAABIABABIAAAFIAAABIACACIABgBIACgBIAAAAIABgCIACAAIAAgBIAAgBIAEgCIAAgBIACgBIABgCIABgBIACgDIAAAAIAAgBIACAAIAAgCIACAAIABAAIAAAAIAAgBIAAAAIACgCIgBgBIACgFIABAAIAAgBIACgEIABgBIAAABIABACIgBAEIgBABIgBAFIgCAAIAAACIAAAAIAAACIgBABIAAALIABAAIAAABIABADIACAAIAAABIACABIACAAIACAAIACgCIABAAIABABIgBACIAAAAIgBABIgCABIgBAAIgDABgAgxgIIABAAIABAAIgCABg");
	this.shape_337.setTransform(246.25,124.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#3F4096").s().p("AB6AjIgBAAIgBgBIgFAAIAAgBIgCgDIAAAAIAAgBIAAgBIgBgDIAAgBIABgBIgBgCIAAAAIABgCIAAgEIAAAAIAAgCIABgCIABAAIAAgBIgBAAIABgCIAAgBIABgBIgBgCIAAgBIABgBIABgBIgBgBIACgBIABgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIABAAIACgCIAAgBIABAAIACgBIAAAAIABABIACAAIACgBIAAABIABABIACAAIABABIAAAAIACABIABACIAAABIABAAIABADIAAAAIABADIABABIAAAAIAAAEIAAAAIAAACIAAAAIAAABIAAACIgBABIAAACIAAACIgBABIAAABIgBABIAAABIgBAAIAAACIgBAAIgBACIgBAAIAAACIAAAAIgCAAIAAABIgBABIgBABIgBAAIgBABIgCABIAAAAIgBABIgBAAIgCABIgBACgAB6AgIAAAAIABAAIABgBIgDAAIgBABIAAgBIgBABIgBAAIAAgBIgBAAIgCgCIAAAAIACADIADAAIABAAIAAAAgAB2AQIgCAEIABABIAAACIgBACIAAACIACABIAAABIABAAIAAAAIABAAIABAAIACAAIABgBIAAAAIABAAIABAAIAAgBIACAAIABAAIABgCIAAgBIACAAIAAAAIAEgEIABAAIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIABgBIAAAAIAAgBIAAgCIAAAAIgBgBIABgBIAAgBIAAgBIAAAAIgBAAIABgBIgBgBIAAgCIAAgBIgBgBIAAgBIgBAAIAAAAIAAgBIgBAAIgBgCIgEgCIAAAAIgBAAIAAAFIgDAAIgDAAIAAABIgBABIAAADIgBAAIAAAAIAAACIAAAAIAAABIAAABIgBAAIAAABIgBABIAAABIAAABIgBABIAAABIAAAAgACCAbIAAABIABAAIABgBIAAAAIgBAAgAByARIAAAAIAAABIAAABIABgCIAAgBgAB4AAIgBAAIABABIgBACIgBABIAAADIgBABIAAACIABgDIABAAIAAgCIABgBIAAgBIABgCIAAgBIAAAAIABgBIADgCIABAAIAAgCIACgCIACgBIAAAAIAAAAIAAAAIgCAAIgBAAIgDACIgCABIAAABIgBACIAAABIAAAAIAAABIgBAAgACDgHIADABIABABIAAgBIgBgBIgBAAIgBAAIgBgBIAAAAgAALAjIAAABIgDAAIAAgBIgCAAIAAAAIgCgBIgCgBIAAgBIgBgBIAAAAIAAgBIgBgBIAAAAIAAgCIgBgEIAAgEIAAgEIABgBIAAgBIgBgBIABgBIAAgBIAAgBIAAgCIAAAAIAAAAIAAgBIAAgBIABgBIgBgCIAAgCIABgCIABACIABAAIAAAAIABgBIACgGIAAgBIABAAIAAgBIAGgFIAAABIAAgBIABAAIACgBIACAAIAAABIABAAIABABIAAAAIACAAIAAABIAAABIABABIAAAAIAAABIAAACIAAAFIAAABIgBABIgCACIAAACIAAAAIgGAEIAAAAIgBABIAAAAIgDABIAAAAIgDABIgBAAIgBgBIAAAAIgBAEIAAAAIAAABIgBABIAAAEIAAABIAAAAIAAABIAAABIAAAAIAAACIABABIAAAAIAAABIACABIAAAAIAAABIACAAIAEAAIABAAIACgBIAAgBIABAAIAAAAIAAgBIADgBIABgBIABgBIAAAAIABAAIABgCIAAgBIACAAIAAABIABACIAAABIgCACIAAACIAAAAIgBAAIAAACIAAAAIgBABIgBAAIgCABIgBABIgBAAIgBABIgBAAIAAABIgBAAIgCABgAAMAhIAAAAIACgBIABAAIABgBIABAAIAAAAIAAgBIADgBIAAgBIABAAIABgBIAAgBIABAAIAAgBIgBAAIAAABIAAAAIgBAAIAAABIgBABIgBAAIAAABIgCAAIAAABIgCAAIgBABIgJAAIAAAAIAAgBIgCgBIgBgBIAAABIACACIAAABIABAAIABAAIABABIABAAIAAAAIABAAIABAAIACAAgAACAbIAAAAIgBgBgAADAEIgBABIAAABIABAAIAAABIgBAAIAAADIAAACIAAACIABgEIABgCIADAAIAAABIABgBIACAAIACgBIABAAIAAgBIAFgDIAAgCIACgBIABgDIAAAAIABAAIgBgCIAAABIAAABIgBABIAAABIgCABIAAAAIgCABIgBABIAAABIgBAAIAAABIgBAAIAAAAIgBABIgBAAIAAAAIgBAAIgBABIgBABIgBAAIgCgBIAAAAIgBgBIAAAAIgBgBIACgDIgCAAIgBAAgAAMgGIAAABIgBABIgBADIAAAAIgCABIAAAAIgCAEIABAAIABAAIACgBIAAgBIABABIABgBIABAAIAAgBIABAAIAAgBIAAAAIABAAIABAAIAAgBIABAAIAAAAIAAAAIAAgCIACgCIAAgCIAAgBIgDAAIAAAAIgCAAIgBABIAAAAIAAABIgBAAgAAFAAIAAAAIAAAAIABAAIAAgBIABgBIAAAAIABgDIABAAIABgBIAAAAIAAgCIABAAIAAAAIABAAIAAgBIACgBIAAAAIAAAAIACgBIAAAAIAAABIABAAIAAgBIABAAIABABIAAgBIgBgBIgCAAIgBgBIgBABIgBABIAAAAIgBABIgBABIAAABIgBAAIAAAAIAAAAIgBACIgBAAIAAAAIgBABIgBACIAAADIgBAAgAh3AjIgBAAIgBgBIgEAAIgBgCIgCgCIAAgBIAAgBIgBgDIAAAAIAAgCIAAgGIACgFIAAgBIABAAIAAgBIAAAAIAAgCIAAgBIABgBIAAgEIABAAIABgBIgBAAIAAgBIACgBIAAgBIAAgBIABAAIAAgCIAAAAIAAgCIABAAIACAAIABgCIAAgBIACAAIABgBIABABIACAAIAAgBIACAAIAAABIAAAAIACABIACAAIAAABIADADIAAABIABAAIABADIABAAIABADIAAABIABAEIAAAAIAAACIAAAAIAAABIAAACIgBABIAAACIgCADIAAAAIAAABIgBABIAAABIAAAAIgBACIgBAAIAAACIgBAAIAAACIgBAAIgBAAIgCACIgBABIgBAAIgBABIgBABIgBAAIgBABIgBAAIgCABIgBABIAAABgAh3AgIAAAAIABAAIAAAAIABgBIgEAAIAAABIAAgBIgBABIAAAAIgBgBIAAAAIgBAAIgCgCIAAAAIADADIACAAIAAAAIABAAgAh4AFIAAACIAAABIgBABIAAAAIAAABIAAABIgBABIAAABIgBABIAAADIgBADIAAAHIABABIAAABIABAAIABAAIAAAAIABAAIADAAIAAgBIABAAIABAAIAAgBIACAAIABAAIAAAAIAAgBIABgBIAAgBIACAAIAAAAIAEgEIAAAAIABAAIAAgBIAAgBIAAgBIAAgBIABAAIAAAAIAAgBIAAAAIABgBIAAgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAAAIgBAAIABgBIgBgBIAAgCIAAgBIAAgBIgBgBIgBAAIAAgBIAAAAIgBgCIgBAAIgBgBIgCgBIgBAAIgBAAIAAAFIgDAAIgCAAIgBABIgBABIAAACIAAABIgBAAgAhuAcIAAAAIABgBIgBAAgAh/ARIABABIAAABIABgCIgBgBIAAAAIgBAAgAh5AAIAAAAIAAABIgBACIgBABIAAACIAAACIAAABIABgCIAAAAIAAgCIABgCIAAgCIABgBIABgBIADgCIACAAIAAgCIABgCIACgBIABAAIgBAAIAAAAIgBAAIgCAAIgDACIgCABIAAABIgBACIAAABIAAAAIAAABIgBAAgAhnAAIABAAIAAAAIABACIAAACIABACIAAAAIAAABIABAAIgBgDIAAgBIgCgDIgBgCgAhugHIADABIABAAIACABIgDgCIgBAAIgCgBgACbAhIgBAAIAAgKIAAAAIAAgCIAAgBIAAgCIAAgBIAAAAIAAgEIAAAAIAAgDIAAAAIAAgBIAAgBIAAgBIAAgHIgBAAIgBAAIAAAAIABgBIgBgEIAAgBIgBgBIAAgBIAEgCIABAAIABABIAAABIABABIAAABIAAACIAAAGIAAABIAAABIAAACIAAAAIAAABIAAACIAAAAIAAABIAAABIABgBIAAAAIAAgBIABgBIAAgBIAAAAIABgBIABgBIAAgBIABgBIABgBIAAgBIAAAAIABAAIAAgBIACAAIAAAAIABgBIAAgBIAAAAIABAAIACgCIABAAIABgBIAAAAIAAgBIABAAIACgCIACAAIADAAIABgBIABABIABAAIAAABIAAACIgBAAIgCABIgCABIgBAAIgBAAIgBABIAAAAIgBABIgBABIAAAAIAAAAIgBAAIgCABIgBABIAAAAIgBABIgBABIAAAAIgCADIAAAAIAAAAIAAABIAAACIgBAAIgBAAIAAABIAAABIgBABIAAAAIAAABIgCABIAAACIABABIgCAAIABAAIgCAEIAAABIABAAIgBAAIAAACIAAADIABACIAAAAIAAABIgBACIgBAAIAAABgACcAWIAAAIIACABIAAAAIAAgBIAAAAIgBAAIAAgGIABgBIgBgBIABgBIAAgDIAAAAIAAgBIABgBIAAAAIgBgBIgBAAIAAgBIgBgCIAAAFIABAAIgBABIAAADIAAAAgACcALIABAAIgBAAgACcADIAAAAIAAAAIgBgHIABgCIgBgBIAAgBIgBABIAAACIABADIAAACIABADgAiLAhIgBgBIgBAAIgCgEIgBAAIgBgFIgBgCIAAgEIAAgBIAAAAIAAgBIABgCIgBgBIAAgFIgBgBIABgCIgBAAIAAgBIAAgBIABAAIgBgCIAAgCIgBgBIAAgCIAAgBIAAgBIgIAJIAAACIgDADIgEACIAAACIgBABIgBAAIAAABIgCACIgBABIAAAAIgBABIgDAEIgBAAIAAACIAAAAIgBAAIAAABIgBAAIAAgBIgCgCIAAgCIgBgBIABgBIgBgCIgBgBIgBAAIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgDIgCgCIAAgBIgBgBIgCgBIgDgFIgBAAIAAABIgBAFIgCADIABACIgBACIgCAGIAAABIgBABIgBACIAAAAIgBADIgBADIABABIgBABIgBAEIACABIgDACIgBABIgCAAIgBgBIAAgBIgBgBIABgBIABgFIABgBIABAAIAAgCIAAgCIABgCIAAgBIABgCIAAgBIAAgCIABgBIAAgCIABgCIABgGIgBgBIAAgBIABgBIAAAAIABgHIAAgBIgBgDIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIABAAIABgBIACAAIABACIABAAIAAABIAAAAIAAABIABACIAAAAIABABIABAAIgBACIABAAIABABIABAAIAAABIABACIABAAIAAACIAEAFIABABIABACIACAEIADAFIAAACIACAAIABgDIAEgDIAAgBIAAAAIACAAIAAgBIABgBIAAgBIAAgBIABAAIABgBIAAgBIADgBIABgBIABgCIABgBIABAAIABgDIAAgBIABAAIABAAIACgEIABAAIABAAIAAgDIgBgBIAAgBIABgCIAAgCIABAAIACABIAAAAIAAAAIABAAIAAAAIAAABIABACIACABIAAAEIAAAAIABABIgBABIAAABIABAAIAAACIABAAIgBABIAAABIAAACIAAACIAAABIABAHIgBABIAAABIABAAIAAABIAAABIAAABIgBAAIABABIAAAFIABADIAAAEIAAABIAAABIABABIABABIABABIAAABIAAABIgBABIgBAAIAAABgAiPANIgBACIAAAFIABACIABAAIABAFIACACIgBAAIAAgBIgBgBIAAgBIAAgEIgBgDIAAgGIgBAAgAivASIAAAAIAAAAIAAACIACgBIABgDIgBAAIAAACIgCgBgAjKAQIAAACIABgCIAAgBIACgJIABgBIgBgCIgBAEIgBABIAAADIAAACIAAACgAiqANIgBACIAAAAIACAAIABgCIACgBIAAgCIAAAAIABAAIAAgBIABgBIAEgDIACgDIABgCIAAAAIAAAAIACgBIgBgBIAAAAIgBABIAAABIgBAAIgBAAIgBACIAAACIgCABIAAABIgBAAIAAAAIgBABIgBABIgBAAIAAABIAAAAIgBACIgBABIAAAAgAiUgQIAAAAIAAAAIABADIgBAEIAAAAIACABIAAACIAAACIABACIAAACIABACIAAAAIgBABIAAAAIABABIAAAAIgBABIABABIAAACIAAACIAAABIAAACIACgCIAAgBIgCgCIACAAIAAgBIAAgCIAAgBIgCgEIAAgCIAAgBIAAgBIgBAAIABgCIAAAAIAAgBIAAgBIgBgBIAAAAIgBgBIABgBIAAgFIgBAAIAAgCIgBAAgAi5AAIAAAAIABAAIABACIgBgCIgDgCgAjFgQIgBABIACAEIgBAEIAAAEIgBABIAAABIAAAAIAAABIAAABIACgCIABgEIAAgDIABAAIABAAIAAAAIACABIADADIgBgCIgBgBIAAgBIAAgBIgBAAIgBAAIAAAAIgBgBIAAgCIgBgBIAAgCIgBgBIAAAAIAAgBIgBAAIAAAAIgBAAgAibgDIAAABIAAABIAEgGIAAAAIACgCIAAgBIgBAAIAAACIgCACIgBAAIAAAAgABTAgIAAABIgDgBIAAAAIgBAAIAAAAIgBAAIgCgBIgBAAIgBABIAAAAIgBgBIAAAAIgBAAIgCgCIgBgEIAAgBIABAAIABAAIACgCIABABIAAAAIABABIABABIAAACIACAAIAAAAIAQgBIAAgBIABAAIABgBIABAAIADgBIAAAAIAAgBIgBAAIAAgBIgBAAIgBgBIgBAAIAAgBIgBAAIgBgBIgCAAIgBgBIgCAAIAAAAIAAAAIgBAAIgBgBIAAAAIgBgBIgCgBIgBAAIgBgBIgDAAIgBAAIAAgBIgCgCIAAAAIgBgDIgBgBIAAgBIAAgFIAAAAIAAAAIAAgBIABgCIABgCIAAgBIABAAIADgDIAGgCIAGgCIAAAAIAEABIABAAIAAAAIABABIABABIABABIAAABIAAABIAAABIgBABIgCABIgBgBIgBgBIgBAAIAAAAIgBAAIAAAAIgBgBIgEABIAAABIgCAAIAAAAIAAABIgBAAIgBAAIgCABIAAABIAAAAIgCABIgBABIgBAAIAAADIAAACIABABIAAABIADABIAAAAIAAAAIABABIACAAIABABIACABIAAAAIABAAIAEACIABAAIABABIABAAIABAAIABABIAAAAIACAAIACABIABACIABABIgBAAIABAAIABABIgBABIABAAIAAABIAAABIgBABIAAABIgBACIAAABIAAABIgCAAIgBACIgEAAIgBABIgBgBIAAAAIAAABIgBAAIgCAAIgBAAIgFAAIgBABgABUAeIABAAIABAAIAGAAIABgBIABAAIABAAIAAAAIAAAAIABAAIABgBIAAAAIABAAIACgBIAAAAIABgBIgBAAIgEABIAAAAIgBAAIAAABIgBAAIgDABIAAAAIgLABIACAAIABAAIAAAAIABAAgABHAcIACABIABAAIAAAAIABAAIgBAAIAAgCIgBAAIAAgBIgBABIAAgBIgBAAgABlAaIABAAIABgCIAAgBIAAgBIgBgBIAAABIABABIgBAAIAAABIgBAAgABXAOIAAAAIABAAIABAAIAAABIACAAIABAAIACABIACAAIAAABIAAgBIAAAAIgCAAIAAgBIgCAAIgEgCIAAAAIgBAAIgBAAIgCgBIAAAAgABMACIAAgCIAAAAgABOgDIgCABIAAACIABgBIABAAIAAgCIABAAIABgBIACgBIABgBIAAAAIABgBIABAAIABAAIABgBIABAAIACAAIAAgBIACAAIABAAIAAABIAEAAIgBgBIAAgBIgBAAIAAAAIgDAAIgGABIgEACIgDACIAAACIgBAAgABhgIIAAABIAAgBIAAAAgAArAgIgBABIAAgBIgBAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCgBIgBAAIgBABIgBAAIgBgBIAAAAIgBAAIgBgCIgBgEIAAgBIACAAIAAAAIABgCIABABIABAAIABABIAAABIABAAIAAACIACAAIAAAAIABAAIAPgBIAAgBIABAAIABgBIACAAIABgBIAAAAIAAgBIgBgBIAAAAIAAgBIgCgBIgBAAIAAgBIgDAAIgCgBIgBAAIAAAAIAAAAIgBAAIAAgBIgBAAIgBgBIgDgBIgBgBIgDAAIgDgDIgBAAIgBgDIgBgBIAAgHIABgCIACgCIAAgBIABAAIADgDIAAAAIAGgCIAFgCIAAAAIAGABIAAAAIABAAIAAABIAAABIABABIAAABIAAABIAAABIgBABIAAABIgCgBIgBgBIgCAAIAAAAIgBAAIAAAAIgBgBIgBABIgCAAIAAABIgBAAIgBAAIAAABIgCAAIAAAAIgCABIAAAAIgBABIgBABIAAABIgBAAIgBAAIAAADIAAAAIAAACIABABIAAABIACABIAAAAIACABIACAAIABABIACABIABAAIAAAAIADACIABAAIAEABIAAAAIABABIABAAIADABIAAACIACABIAAAAIABABIAAABIAAAAIABABIAAABIgBAAIAAABIgBABIAAACIgBAAIgBABIAAABIgCAAIgBACIgDAAIAAAAIAAABIgCgBIAAABIgCAAIgBAAIgBAAIgGAAIgBABgAAsAeIABAAIABAAIAFAAIABgBIABAAIACAAIAAAAIAAAAIABAAIABgBIAAAAIABAAIABgBIAAAAIABAAIAAgBIgBAAIgCABIgBAAIgBABIAAAAIgFABIAAAAIgKABIABAAIABAAIAAAAIABAAgAAfAcIABABIABAAIAAAAIABAAIAAAAIAAgCIgCAAIAAgBIgBABIAAgBIAAAAgAA9AZIgBABIABAAIABgCIAAgBIAAgBIAAgBIAAAAIgBABIAAAAIABAAIAAABIgBABIAAAAgAAvAOIAAAAIABAAIABAAIABABIABAAIADABIACAAIAAABIAAgBIAAAAIgBAAIgBgBIgCAAIgBAAIgDgCIAAAAIgBAAIgBAAIgBgBIgBAAIgBAAgAAmgDIgCABIgBACIAAACIABgCIABgBIABAAIABgCIAAAAIABgBIAAAAIAAgBIABAAIABgBIAAAAIABAAIABgBIAAAAIACAAIADgBIAAAAIABgBIAAAAIABAAIACABIAEAAIAAgCIgCAAIAAAAIgEAAIgCAAIAAAAIgCABIgGACIgBACIgBACIgBAAgAA5gIIAAABIABgBIgBAAgAC/AgIgDgCIgCgDIAAgHIABgIIAAgHIABgCIAAgCIgBgBIAAAAIABAAIAAgHIgBgBIABgBIACgBIAAAAIABABIAAgBIABAAIABAAIAAABIAAABIABAAIABABIgBABIAAABIgBAFIAAABIAAACIAAABIAAAAIAAABIAAABIgBADIAAABIAAAAIAAADIAAADIgBABIAAABIAAADIABADIAAABIABAAIAAAAIABgBIABAAIAAAAIACgBIABAAIABgBIABgBIABAAIABgBIAAAAIAAgBIAAgBIABAAIAAAAIACgBIAAgCIAEAAIAAABIABABIAAAAIgBACIgBABIAAABIgBAAIgBAAIAAACIgBABIgBAAIAAAAIgCACIAAABIgBAAIgCABIgBABIAAAAIgBABIgDABIAAAAIgCAAIgBABgAC8AUIAAABIAAAFIACADIABABIABgBIABAAIAAAAIACgBIAAAAIADgCIABAAIAAgBIABAAIABgBIABgBIAAAAIAAAAIAAAAIgCAAIgBABIAAAAIgBABIAAAAIgBABIgBAAIAAAAIgBAAIAAABIgCAAIgCAAIgBgBIgBAAIAAgBIABAAIgCgEIAAgBIABgCIgBgBIABgBIAAgDgADLAWIABAAIgBAAgAC+AEIAAAAIAAABIgBABIABAGIAAgCIAAgBIABgEIAAgCgAC/gEIAAABIgBABIAAACIABADIAAgBIABgBIgBgBIABgGIAAAAIAAAAIAAgBIgCAAIABACIgBAAgAhVAgIgBgBIgBgCIAAAAIgBgCIAAAAIABgCIAAgDIgBgCIAAAAIAAgBIABgBIAAgGIgBgBIABgBIAAgBIAAAAIABgEIgBAAIAAgCIAAAAIAAgBIAAgCIAAgBIAAAAIAAgCIAAgCIABgDIADABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAADIAAABIAAACIAAAEIgBABIABABIAAABIgBABIAAABIAAABIABABIgBADIAAADIAAAAIABgCIAAAAIAAgBIABAAIAAAAIAAgBIACgBIAAAAIABgBIAAgBIABgBIAAgDIABAAIABgBIABAAIAAgBIACgFIAAAAIABgCIABAAIABgBIAAgCIABAAIAAAAIAAgCIACAAIAAgBIACgCIAEgEIABAAIABACIABAAIAAAAIAAABIAAAAIABACIAAAAIABABIgBACIABACIAAADIADANIAAAAIAAACIABABIAAABIABABIAAABIAAABIABAAIAAgBIABAAIAAAAIABAAIABgBIACgBIAAgBIABAAIAAgBIABAAIABgBIABgEIACgBIADAAIAAAEIgBAAIgBABIgBACIAAABIgBABIAAABIgBAAIAAABIgBABIgBABIAAAAIgBABIAAAAIAAABIgCAAIgBABIgBAAIgCABIgBgBIAAABIgBAAIAAgBIgBAAIgCgCIgCgDIgBgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIgBgCIAAgDIgBgJIAAAAIgBgBIAAAAIAAAAIAAgBIgHAJIAAABIgBABIgBABIAAABIAAACIgBABIAAAAIAAAAIgCAAIgBACIAAACIgBABIgBACIgBABIgBACIgEAEIAAABIgBABIgBAAIgCABgAhVAZIAAABIAAABIAAABIAAABIAAABIABAAIABgBIAAgCIABAAIAAgBIAEgDIABgCIAAAAIAAgBIABgBIAAgBIABgBIAAAAIAAgBIACgCIAAAAIAAgBIABAAIAAgCIAAAAIAAAAIgBABIAAABIgBAAIgBABIAAABIgBADIgBABIAAABIgCAAIAAABIAAABIgCAAIAAACIAAABIgCAAIAAAAIgBABIgBgBIAAgBgAg4AMIABACIgBACIABACIAAACIABAAIgBABIABABIAAABIAAAAIABACIABAAIAAAAIAAABIABABIABAAIACAAIAAAAIABAAIABgBIAAAAIABAAIAAgCIABAAIABgBIgCAAIAAACIgBAAIgBAAIgBABIAAAAIgBAAIAAAAIgCgBIgBAAIAAgBIgBAAIABgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBAAIAAgEIgBgDIAAAAgAgrAXIABAAIABAAIAAgBgAhVARIAAAFIAAAAIAAgEIAAgCIAAAAgAgoAUIgBAAIAAABIABAAIAAgCgAgnASIABgBIgBAAgAhVANIAAACIAAgCIAAAAIAAgCIAAABIAAAAgAg6gDIAAABIAAABIABABIgBAAIAAAAIABABIAAAAIABAJIAAgDIgBgDIAAgDIAAgCIAAgBIgBgBIAAAAIAAgCIAAAAIgBAAIAAgBIgBAAIgBABIAAAAIAAAAIAAABIgBABIAAABIACgCgAhDABIAAABIgBACIgBABIAAABIgBADIgCABIABAAIABgBIABgBIACgFIADgDIABgBIAAgBIgBAAIgBAAIAAACIAAAAIgBAAgAhVAFIAAAAIAAAEIAAABIABgBIAAgEIAAgCIAAgEIAAgBIgBgBIAAgCIAAAAgAgPAfIgEABIgCgBIAAAAIgEgCIAAAAIgDgEIgCgEIAAgBIgBgEIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgGIAAAAIAAgBIAAgCIAAAAIgCAAIAAAAIgCAAIgBAAIgBgBIgBgCIAAgBIgBgBIABAAIAAgBIAAgBIAIAAIAAgCIgBgDIABgBIgBAAIAAgBIABgDIgBgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgCIABgBIAAgCIADACIACABIAAAIIAAABIAAACIAAABIAAACIAAABIAAABIAAAAIAAABIABAAIAAAAIABgBIASAAIACACIgBACIgBABIgBAAIgBAAIgBAAIgBAAIgCAAIgCABIgDAAIgCABIgCAAIgBAAIAAAAIgCAAIgBAAIgBAAIAAAAIgBAAIgBALIABAFIAAACIABADIAAAAIABACIABABIABABIABABIADABIAFgBIABAAIADgCIACAAIACACIAAABIgBABIgBACIgCAAIAAABIgEAAIgBABgAgYAbIADACIABAAIACABIABAAIACgBIABAAIAAAAIABAAIAAAAIACgBIACgBIACAAIgBAAIgBAAIgDABIgBAAIgEABIgBAAIgDgBIgBgBIgCgBIAAAAgAgdgBIABABIAAAAIABgBIABgBIACAAIAAAAIABAAIABAAIABAAIAAAAIACgBIABgBIgFAAIAAAAIgBABIgDAAIgBgDIAAACIgFAAIgBgBIgBABIgBABIAAAAIACAAIABABIABAAIABAAIAAAAIABAAgAgdgVIABABIgBABIABABIAAAEIAAAAIABgCIAAgEIgBgCIAAAAIAAAAIgBgBIAAAAgAC4gRIAAgBIAAgCIAAAAIACgCIABgBIABgBIAAgBIABAAIgBgCIADAAIAAgBIABAAIAAgBIABAAIAAgBIAAgBIABgBIABgBIAAAAIAAgCIACABIACABIABACIAAABIAAABIgBABIAAAAIgCACIgBAAIgDAEIAAAAIgCABIgBABIAAABIgCAAIgCACgADBgaIAAABIABgDIABgBIABABIAAgBIAAgBIABAAIABgBIgBgBIAAAAIgBABIAAACIgBAAIAAAAIgCACIAAAAg");
	this.shape_338.setTransform(211.05,124.025);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#3F4096").s().p("AALAiIgBABIgCgBIgBAAIgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAIAAgBIgCgBIAAgBIgBgBIAAgBIAAgFIAAgFIAAgCIAAgCIAAgBIAAgBIABgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAgBIABAAIACAAIAAAAIABgBIACgFIAAgBIABAAIAAgBIABAAIABgCIADgDIAAABIABgCIACAAIAAAAIABAAIABABIAAAAIACABIABAAIAAACIABADIAAABIAAADIAAAAIgBADIgCACIAAABIgGAEIAAABIgBAAIgCABIgBAAIgCABIgDgBQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgBABIAAADIgBAAIABAEIgBAAIAAACIABAEIABACIADABIAAAAIAFABIADAAIACgBIAAgBIABAAIAAgBIADgBIAAAAIABgBIAAgBIACgDIABAAIABABIgBACIgBADIgBAAIgBACIgDACIgBABIgBAAIAAABIgCAAIAAABIAAAAIgCABgAAHAAIgCADIABABIABABIADgBIAAgBIABAAIABAAIABAAIABgCIAAAAIAAAAIADgBIABgBIACgEIAAgBIgBgDIgCAAIgBAAIgBAAIgCABIgBABIAAgBIgBABIAAAAIAAAAIAAABIgBABIgBAAIgBAEIgBAAgAB5AhIAAABIgCgBIgDAAIgCgEIAAgBIgBgDIAAgCIAAgDIAAgBIAAgCIABgCIAAgBIACgEIAAgDIABgCIgBgCIABgBIABgBIAAgBIAAAAIABgBIAAgCIACgBIAAgCIAEgDIAAAAIABAAIADAAIACgBIAAABIACABIABAAIADADIABABIABAAIABADIACADIAAABIAAAEIAAACIAAABIAAACIgBABIAAABIAAADIgBABIgBACIgBAAIAAABIgBABIgBACIgBABIAAABIgBAAIgBACIgGACIgBABIgBAAIgCABIgBACgAB/gFIAAADIgCABIgDABIgBABIAAACIgBABIgBABIAAACIgBABIAAACIgBABIAAABIAAABIAAABIgBABIAAACIgBADIABAAIAAADIgBACIAAACIADADIAAAAIACAAIABAAIACAAIABgBIAAAAIABAAIACgBIABABIAAgBIABAAIABgBIABgCIABAAIABgBIACgCIAAgBIACgBIABgCIAAgBIABgBIAAAAIABgCIgBAAIABgBIgBgBIAAAAIABgCIAAgCIgBgBIABAAIgBgBIABAAIgBgCIAAgCIgBgBIgBgBIAAAAIAAAAIgBAAIABgCIgBgBIgBAAIAAgBIgFgDQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAAAgAh4AhIAAABIgBgBIgEAAIgCgEIAAgBIgBgDIABgCIgBgDIABgBIgBgBIAAgBIABgCIAAgBIABgCIAAAAIABgCIAAgDIABgCIAAgDIABgBIAAgBIABAAIABgBIAAgCIABgBIAAgCIAEgDIABAAIABAAIACAAIACgBIAAABIACABIACAAIAAABIABAAIACACIAAABIABAAIADAGIAAABIABAEIgBACIABABIgBACIAAABIAAABIgDAGIAAAAIgBABIgBABIgBACIgBABIAAABIgBAAIgBACIgBABIgCAAIgEACIAAAAIgDABIgBACgAhygFIABADIgCABIgDABIgBAAIgBABIAAACIgBABIAAADIgBABIgBADIAAABIgBABIAAABIgBABIABACIgCADIABAAIAAADIgBACIAAACIAEADIABAAIABAAIACAAIABgBIABAAIABAAIABgBIABABIAAgBIABAAIABgBIABgCIABAAIABgBIACgCIABgBIABgBIABgCIAAgBIABgBIAAAAIABgCIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAAAIgBgDIAAgCIgBgBIgBgBIAAAAIAAAAIAAgCIgBgBIgBgBIABAAIgFgDIgBAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAAAgACdAfIAAABIgCAAIAAgKIgBgBIABgBIAAgKIgBgBIABgBIgBgBIAAgDIAAgBIAAgBIAAgCIgBAAIABgCIgBgDIAAgCIgBAAIADgCIAAABIABABIAAADIABAGIAAABIAAAHIABABIgBAAIABADIAAAAIAAgCIADgEIAAAAIABgBIABgDIABgBIABAAIAAgBIABgBIAAgBIABAAIACgBIAAAAIADgDIABAAIABgBIAAAAIAEgCIABAAIABAAIABgBIACABIgBABIgCAAIgCACIgDAAIgBABIgCACIAAABIgBAAIgBABIgBAAIgBABIgBABIgBAAIAAACIgCADIAAAAIAAABIgBAAIgCAEIgBAAIAAAEIgBAAIAAABIgBADIAAABIAAACIAAAEIAAABIABABIgBACgAiMAeIgDgCIgBgGQgBAAAAgFIAAgBIAAgEIAAgBIAAgFIgBgBIABgCIgBAAIABgBIgBgCIAAgDIgBgBIAAgCIgCgCIgBABIgBABIgGAHIgBACIgCADIgEADIAAABIgCABIAAABIgCABIgBACIgBABIgDAEQAAAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAIgBAAIgBgCIAAgBIgBgBIABgBIgBgBIAAgCIgCgDIgFgIIgCgCIAAgBIgCgBIgCgEIgDgCIgCAAIAAABIAAAGIgCACIAAACIgEANIgCAFIAAADIgCAEIABAAIgCADIgBgBIAAgCIABgFIABgBIAAgDIACgCIAAgCIABgCIgBgBIACgDIAAgCIACgIIgBgBIABgCIABgBIAAgIIgBgDIABgBIgBgBIABgBIABAAIABAAIABABIAAAAIACABIAAACIABACIAAAAIAAAAIACACIABABIAAABIABABIABACIAEAFIABACIABABIABAEIADAFIADAEIAAgCIACAAIABgCIACgBIABgCIAAgBIAEgCIAAgCIABAAIABgBIAAAAIABAAIgBgCIAEgBIAAgBIABgDIABABIAAgBIACgDIAAAAIABAAIACgEIABgBIABAAIAAgBIAAgCIgBgCIACgDIADABIAAACIABABIAAAEIABAAIgBACIABAAIAAABIAAAAIAAACIABAAIgBACIAAAAIAAACIABACIgBABIACAHIgBABIAAACIABAAIgBACIAAAAIAAAGIABADIAAAEIABABIABACIABABIABACIgBABgAC9AdIgCgDIAAgGIAAAAIABgJIAAAAIAAgEIABgFIgBgCIABAAIAAgDIAAgBIAAgCIAAgBIAAABIAAgCIAAgBIABABIABgBIABAAIAAACIABAAIAAABIgBAGIAAABIgBACIAAACIgBAEIAAAGIAAACIAAADIAAAFIAAAAIABABIABAAIABAAIAEgCIAAgBIADgBIACgBIAAgBIABAAIAAgBIABAAIAAAAIACgBIAAgCIACABIAAAAIAAABIgDACIgBACIgBABIgBABIgCACIAAAAIgCABIgBACIgEAAIAAABIgCAAIAAABgABYAeIgBABIgCAAIgBgBIgBABIgBAAIgCgBIAAABIgCgBIgDAAIgBAAIgBAAIAAAAIAAgBQgDAAAAgEIACAAIgBgBIABgBIAAABIABAAIAAABIABgBIAAABIAAABIABAAIAAACIACAAIABABIAAgBIAMAAIAEgBIAAgBIACAAIAAAAIAEgCIAAgBIABAAIAAgBIgBAAIABgBIgBgBIgBAAIgBgBIAAAAIgBgBIgCAAIgBgBIAAAAIgDgBIgBAAIgBgBIgBABIAAgBIgBAAIgDgCIgBgBIgEgBIAAAAIgCgCIgBgDIgBgCIgBgEIABAAIABgDIABgCIABAAIACgCIABgBIAFgCIADgBIADgBIAEAAIAAABIAAAAIABABIAAABIACABIgCADIgBgCIgDAAIgCgBIAAAAIgBABIgDAAIgCABIgBAAIgBABIgCABIgCABIgBADIgBAAIgBADIABAAIAAABIABADIAAAAIADACIAAAAIACABIACAAIABABIACAAIAAABIAEABIABABIACAAIACABIABABIACAAIABABIABACIAAABIABAAIAAAAIAAAAIABACIgBABIgBADIgBABIAAABIgBAAIgBABIgCAAIgBAAIgBABIgBAAIgBAAIgFAAIAAABgAAvAeIAAABIgCAAIgBgBIgBABIgBAAIgCgBIgBABIgBgBIgEAAIAAAAIgBAAIgBAAIAAgBQgCAAAAgEIABAAIAAgBIABgBIAAABIAAABIABgBIABABIAAABIABAAIAAACIACAAIABABIAAgBIAMAAIAEgBIAAgBIABAAIABAAIADgCIABAAIAAgBIABAAIAAgBIgBAAIAAgBIgBgBIAAAAIgBgBIgBgBIgCAAIgBgBIAAAAIgDgBIgBAAIgBgBIgBABIAAgBIgBAAIgEgCIgBgBIgDgBIAAAAIgCgCIgCgDIgBgCIAAgEIAAAAIABgDIACgCIABAAIABgCIABgBIAGgCIADgBIACgBIAEAAIABABIABABIAAABIABABIAAACIgBABIgBgCIgDAAIgCgBIgBABIgDAAIgCABIgBAAIgBABIgEACIgBADIgBAAIgBADIAAAAIAAABIACADIAAAAIACACIABAAIABABIACAAIABABIACAAIAGADIADABIABABIACAAIACABIABACIAAABIAAAAIABAAIAAAAIABACIgBABIgBADIgBABIAAABIgBAAIgCABIgBAAIgBAAIgBABIgBAAIgCAAIgEAAIAAABgAhXAbIAAgBIAAgCIABAAIgBgBIAAgCIAAgBIAAgBIAAgCIABgEIAAgBIgBgBIABgBIAAgBIAAgEIAAgBIAAgBIgBgBIABgCIAAgBIAAgDIAAgCIAAgBIACABIAAABIAAABIABADIAAABIAAADIAAACIAAAEIgBABIABACIgBADIAAABIAAAEIAAAEIABgBIABAAIABgCIABgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABgBIACgEIAAgCIACgBIABgBIADgFIgBgBIABAAIACgDIAAgBIABAAIAAAAIAAgBIABAAIACgDIABAAIAAgCIADgBIAAgBIABAAIABABIAAABIABAAIAAACIABABIgBACIABACIAAACIABAHIABADIAAAEIABABIAAACIABAAIAAABIABABIgBABIABAAIAAABIACABIABgBIAAABIABgCIABAAIAAgBIACgBIACgBIAAgBIABgBIACgEIACgBIABAAIAAACIgBACIAAAAIgDAEIgBAAIgBADIgBABIgBAAIAAACIgFABIgCAAIAAAAIgBAAIgDgGIAAgBIgBgBIAAgCIgBgBIAAgDIAAgCIAAgCIgCgJIAAgBIgBgDIAAAAIgGAGIgCADIgBADIgCABIABABIgBACIgBAAIAAABIAAAAIgCADIgBACIgBABIgBABIgCADIgCACIgBACIAAABIgBAAIgCACgAgPAdIgEABIgDAAIgDgCIgCgDIgCgFIgBgEIAAgDIAAgBIAAgBIAAgBIABgBIgBgBIAAgIIAAgBIgBABIgBgBIgBABIgCgCIgBAAIgBgCIAAgBIAAAAIAAgBIADAAIABAAIAEAAIAAgEIgBgCIABAAIAAgBIAAgBIAAgDIgBgCIAAgBIgBgBIACgDIADABIgBABIABADIAAAEIgBABIABACIgBAEIABAAIgBABIABACIABAAIABgBIATAAIAAABIgBABIgGAAIgDABIgCAAIgBACIgBAAIAAgCIgBACIgBAAIAAABIgDgBIgBABIAAgBIgCABIgBAEIABADIgBAHIABADIAAABIABACIAAABIACAEIABABIACABIADABIAFgBIABAAIADgCIABABIABABIgBACIgBgBIgBABIgDAAIgBABgAC5gSIAAgCIACgBIABgDIABAAIAAAAIABAAIAAgBIAAAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIABgBIAAgBIABAAIAAgBIABgCIADADIgCACIAAABIgBABIgBAAIgCADIgBABIgCAAIgBACIgBABIgCACg");
	this.shape_339.setTransform(211.075,124.05);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EE3338").s().p("AjZA0QgFgFAAgJQgBgIAGgGIAAgBIgEgEIgCgEQAAgGAMgEIAAgBQgGgCgCgEIgCgKQAAgIAEgGQAFgFAGAAIADAAIABgDIAFgIQADgEAEAAIAGACIAAABIAAAMIgBABIAAgBIgBgCIgEgBIgEABIgBADIAAABIAFAHIADAKQAAAMgNAHIgFADQgEACgBABQAAAAABAAQAAABAAAAQABAAAAAAQABABABAAIAEAAQAJACAFAFQAEAEAAAKQAAAKgGAFQgHAGgHAAQgHAAgGgFgAjTAeQgCADAAAEQAAAEADACQADAEADgBQAEAAACgDIADgHQAAgJgJAAIgBAAQgDAAgDADgAjRgSQgCACgBAEIADAGIAGACIAFgCIACgGIgDgGQgBgCgEAAgAipAbIACgGIgBgCIgEgEIgBgFIACgHIAFgCQAEAAACADIABAHIgEAMIgGAFgAhKAVIgFgJIgCgMIgBgaIAAAAIAMgDIgBAVQAAATAGAAQAGAAAAgVIgBgUIALgDIAAABIAAAgIgBAIIgDAJIgGAFIgHACgABAAYIgFgJIAAAAQgIAGgFgBQgIgBgDgEQgEgFAAgJQABgIAHgJIABAAIgBgBIgDgIQgEgHABgHQAAgHAFgGQAFgEAGAAQAHAAADAGQAFAGgBAIIgBAGIgCAEIgDAEIgHAHIAAABIAIAOIABAAIAGgNIAHAHIAAAAIgIAOIAFAIIAAABIgEAHgAAngDIAAAGIABAGIAGACIAEAAIAEgEIAAgBIgLgPgAArgrIgDAHIABAFIACAFIADAFIABAAIABgBIAEgGIADgIIgBgGIgFgDgAgOAXIABgaIgBgHIgBgDIgBgCIgDgBIgDACIgDAEIgBAGIgCAXIAAABIgJAAIACg4IABAAIAKgBIAAAIIAGgBQAEAAACACIAGAHIACAVIgBAWIAAABIgJAAgAj0ABIgBgLIgBgDIgBgCIgCgBIgEACIgDAEIgCAdIgBABIgIAAIACg4IAKgBIAAABIAAAHIAAAAIAHgBQADAAAEACIAEAHIACAVIgBAWIAAABIgIAAgACvAQIAAgBQgFAEgEAAQgEAAgEgEQgEgDABgHQgBgGAFgEQAEgEAGAAIAGABIAAAAIAAgDIAAgFIgEgCQgHAAgGAGIgBgBIgCgKQAHgIAJAAQAHAAAFAFQADAGAAAJIgCAfIAAABIgJABgACkAFIABADIADABIAFgCIACgFIgBgCIgCAAQgJAAABAFgAh8AVIAAAAIAChIIAhABIAAABIgCANIgBABIgUgBIAAATIAPgBIAAAAIgBAOIAAAAIgOAAIAAABIAAAZIAAAAgADJAUIgCgxIAAgBIAGgCIABABIABAFIAFgEIAHgCIAHACIABABIgDAOIgBAAQgDgEgEAAQgEAAgCAGIAAABIACAeIAAABIgLACgABvALQgHgKAAgOQAAgRAKgKQAJgLAOAAIAIACIABABIgDAPIgBAAIgGgCQgIAAgGAGQgGAGABAKQAAATARAAIAFgBIAAABIABAMIAAABIgEABIgGABQgLAAgIgKgADwAMQgFgHAAgJQgBgKADgIQAFgJAHgBQAJgBAFAHQAFAHAAALIAAAEIgVACIgBAAQAAAFADACIAHACIAHgEIAAABIADALIAAAAQgFAEgHAAQgJAAgFgHgAD8gVIgFADIgBAHIAAAAIAMgBIAAAAQgBgJgFAAIAAAAg");
	this.shape_340.setTransform(256.15,136.8725);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EE3338").s().p("AipAxIgBgBIgBAAIgDhcIALgEIABABIAAAuIABAAQAFgIAHAAQAFAAAEAFQAEAFAAAHIgBAVIgEASIgBABIgIgDIgBgBIAEgaQAAgOgFAAQgDAAgDADQgDAEAAADIgBAiIgBABgAkoAtIgFgKIgCgLIgBgaIAAgBIAMgCIAAAAIgBATQAAAVAGAAQAGAAAAgWIgBgTIALgDIAAAAIAAAfIgCAKIgCAIIgFAGIgIACQgFAAgDgDgAE6AuIABgWIgCgMIgBgDIgBgCIgCgBIgEACIgDAFIgDAeIAAAAIgIAAIgBAAIABgKIABgtIABgBIAKgBIAAAJIAGgCQAEAAADADIAFAFIADAXIgCAWIAAAAIgIABgAhKAuIABgaIgBgIIgBgDIgCgCIgCgBIgDACIgDAFIgBAFIgCAZIAAAAIgJAAIAAAAIACg4IALgBIAAAJIAGgCQAEAAADADIAFAFIADAXIgCAWIAAAAIgIABgAjrAUIgBgIIgBgDIgCgCIgCgBIgEACIgCAFIgBAFIgCAZIAAAAIgJAAIACg3IAAgBIAKgBIABABIgBAHIABABIAAAAQADgCADAAQAEAAADADIAEAFIADAXIgBAWIAAAAIgJABgABBAMIAAgBIgIAAIAAgJIABAAIAGgBIABAAIAAgRQAAgJAEgFQAEgGAHAAQAFAAADADIAFAIIABAEIgBABIgGAFIAAAAIgBgEIgCgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgDACIgDAEIAAATIALAAIABAAIgBAMIgLAAIABAfIgLADgAjXAqIAAgBIADgKIABgBIAKAFIAEgBIABgEIgBgEIgFgDIgEgBIgFgHQgCgDAAgGQAAgHAFgEQAEgFAHAAQAGAAAFAEIAAABIgEAJIgBAAIgGgCIgEABQgBABAAAAQAAAAAAABQgBABAAAAQAAABAAAAIACAFIAKAGIADADIADAEIABAFQAAAIgGAEQgFAEgHAAQgIAAgFgEgADmAuIAAgHIgBAAIgHAEQgGAAgDgEQgDgEAAgGQAAgHAEgEQAEgFAGAAIAGABIABAAIAAgCIgCgGIgEgCQgGAAgGAGIAAAAIgDgKQAIgIAIAAQAHAAAEAGQAEAEAAAJIgCAhIAAABIgJABgADbAdIABACIADABQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIACgFIgBgCIgCgBQgIABAAAGgAFTAtIgBgzIAHAAIADAAIACAAIABAAIgCAyIAAABIgJAAgAAXAqIgGgHIgDgJIgBgJIACgMQACgGAEgFQAFgEAFAAIAIACIAFAFIADAGIACAIIAAAIIgCALIgGALQgEAEgGAAgAAbAFIgDAGIAAAFIAAAJIACAEIACADIAEABIAFgDIACgHIAAgGIgCgKQgBgFgFAAQgDAAgBADgAh5AoIgBgDIAAgrIAMAAIAAAAIgBAzIgKAAgAEAAsIgCgyIAHgCIAAAAIABAGIAAAAIAFgFIAGgBIAIACIAAAAIgCANIAAAAQgEgDgEAAQgEAAgCAFIgBACIAEAfIgBAAIgLADgAB/AsIgBhGIABAAIAMgBIABAAIgDA5IAVgBIAAAAIgCAOIgdACgAlcAsIAAAAIgBgQQAFADAGAAIAHgBIADgFQAAgFgGgDIgGgDIgFgFIgEgGIgBgIIACgKQAHgOATAAIADABIACAAIAAAQIAAAAIgLAAIgEABIgEADQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIABAEIADADIAKAGIAGAGIACAEIAAAFIgCAKIgGAGIgIAEIgJABgACtAkQgFgHgBgLQgBgKAEgIQAFgIAHgBQAJgBAEAHQAFAGABALIAAADIAAABIgWADQAAAFADACIAHACIAGgDIABAAIADALIAAABQgFAEgIAAQgJAAgEgHgAC4ABIgEAEIgCAGIABABIAMgCQgCgJgEAAIgBAAgAguAkQgEgHgBgLQgBgKAEgIQAEgIAIgBQAIgBAFAHQAEAGABALIABADIgBABIgVADIgBAAQAAAFAEACIAGACIAHgDIAAAAIADALIAAABQgFAEgIAAQgIAAgFgHgAgjABQgCABgCADIgBAGIAAABIAMgCQgBgJgFAAIgBAAgAFSgSIgCgGIACgGQACgDADAAQACAAACADIADAGIgDAHIgFACgAh7gSIgCgGIACgGQACgDADAAQADAAACADIACAGIgCAHIgFACg");
	this.shape_341.setTransform(192.925,134.525);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#DEE99D").s().p("AjBEeIjegQQjogbgyg3QgUgagHg+QgQh6A9i1IAEgNQAKgPAegOQBggqEHgBICRgFQCtgGCTACQHXAFAWBEIATA3QAVBEAFA/QAODIiXBKQh7AYifASQi1AUiIAAQhoAAhQgMg");
	this.shape_342.setTransform(213.7015,110.5688);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#CFDE56").s().p("AjWFhIj3gTQkCgig3hEQgWgggJhMQgRiYBDjeIAFgRQALgTAhgRQBrg0EkgBIChgHQDBgGCjACQIMAGAYBTQAqBrAIB8QAQD4ioBbQiIAdiyAWQjJAZiXAAQh0AAhYgPg");
	this.shape_343.setTransform(213.9686,110.8613);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#A9D046").s().p("ArFGRQg5AAgpgqQgpgsAAg8IAAn+QAAg8ApgrQApgrA5AAIWLAAQA6AAAoArQApArAAA8IAAH+QAAA8gpAsQgoAqg6AAg");
	this.shape_344.setTransform(214,110.55);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBPkALjMifHAAAIAA3FMCfHAAA");
	this.shape_345.setTransform(855.7953,128.075,1.0834,1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("rgba(255,255,255,0.498)").s().p("EhPjALjIAA3FMCfHAAAIAAXFg");
	this.shape_346.setTransform(855.7953,128.075,1.0834,1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_347.setTransform(960,540);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_348.setTransform(959.975,539.975);

	this.instance_5 = new lib.Symbol109("synched",0);
	this.instance_5.setTransform(1283.1,320.45,1,1,0,0,0,478.7,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.instance_4},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.instance_3},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).wait(1));

	// Layer_10
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#39302C").s().p("AgFgGIgKgIIALAHQAMAIAIAMIgDACQgHgMgLgJg");
	this.shape_349.setTransform(1604.2354,794.1894,1.8156,1.8156);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCIAEgCQAHAAAAAGQAAAHgHAAg");
	this.shape_350.setTransform(1563.0667,789.1058,1.8156,1.8156);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAIADACIACACQAAAFgFgBQgEABAAgFg");
	this.shape_351.setTransform(1531.1576,785.7015,1.8156,1.8156);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#292929").s().p("AgLARQgFgHAAgKQAAgJAFgHQAFgHAGAAQAHAAAFAHQAFAHAAAJQAAAKgFAHQgFAGgHABQgGAAgFgHg");
	this.shape_352.setTransform(1564.0653,790.9214,1.8156,1.8156);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#39302C").s().p("AgEACQAFgIAHgDIABACQgHADgFAHIgEAHg");
	this.shape_353.setTransform(1548.1335,757.6959,1.8156,1.8156);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#372F2C").s().p("AgLBbIgMgFQAUAHAXgCQAWgDARgKQAfgTAGgnQAFgggJgZQgJgagWgOQgTgMgYgBQgYgBgSALIgTAPIgQATQgVAbgVAPIAngtQAUgYAQgKQATgMAZABQAZABAVANQASALAKAUQAOAdgGAoQgGAqggATQgYAOgeAAg");
	this.shape_354.setTransform(1605.0343,764.9513,1.8156,1.8156);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C07B42").s().p("AgwACQAUgZAQgKQAVgNAdAEQAfADAUAWQg0gVgtAcIglAhQgWAVgWAAQAUgOAVgcg");
	this.shape_355.setTransform(1602.7829,756.0697,1.8156,1.8156);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#372F2C").s().p("AgMAGIAMgPQAMgQALgCQAHgCAGAFQAJAIgFALQgDAGgJAEQgNAHgYgCQgIALgXAHQAVgMAHgKgAAYgXQgPACgQAbQAkADAHgQQAEgIgHgGQgEgCgEAAIgBAAg");
	this.shape_356.setTransform(1603.4897,767.0148,1.8156,1.8156);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#944934").s().p("AAPgJQgIAKgVAJg");
	this.shape_357.setTransform(1598.7432,770.3597,1.8156,1.8156);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#944934").s().p("AgZARIABgBQAHgOAMgKQAPgOAKAJQAKAJgJALQgJALgaAAIgLgBg");
	this.shape_358.setTransform(1606.0522,765.4297,1.8156,1.8156);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#944934").s().p("AgOgCQALgZASgDQAQgCAJANQgQgIgRAPQgKAJgHANQgEAJgZAMQARgPAIgSg");
	this.shape_359.setTransform(1603.1461,766.5569,1.8156,1.8156);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#AF5E39").s().p("AgVBaIgvglIgfg4QAUgPAWgaQAUgZAQgKQAdgRAlALQAqAMAMApQAEA1gbAaQgTASgYAMQgaAMgZABg");
	this.shape_360.setTransform(1604.2725,764.3913,1.8156,1.8156);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#944934").s().p("AgWBZIhPhdQAUgPAWgbQAUgZAQgKQAngYAsAZQAzAdgLBIQgIAwgqARQgTAIgUAAQgQAAgRgFg");
	this.shape_361.setTransform(1604.7318,764.8157,1.8156,1.8156);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#342D2D").s().p("AgIgLIgVgEQAUgQATAUQAPAOAFAUQgPgZgXgJg");
	this.shape_362.setTransform(1564.3377,772.0149,1.8156,1.8156);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#3B322E").s().p("AAAgEIgJgFIAEAAQAFABACACIAGAGIACAKQgCgJgIgFg");
	this.shape_363.setTransform(1554.0342,810.7114,1.8156,1.8156);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#3B322E").s().p("Ag5AsQAGgbgMgTIgBgEIADABIAVAAQAZgCAkgTQAYgLASgNIACgBIAAADQgCANgUAaQgTAYgUARQgJAKgOAFQgNAFgLAAQgMAAgCgIgAg0AsQAAAEAJAAQAYAAAVgTIAigjQATgYAFgNQg8AngoADIgSAAQAJATgDAag");
	this.shape_364.setTransform(1543.0498,819.2447,1.8156,1.8156);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFF8F8").s().p("AgBADQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABAAIACgCIAAADQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_365.setTransform(1535.6159,825.4858,1.8156,1.8156);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#BF4C4C").s().p("AAFgIIABABQgHAGgEAKQACgLAIgGg");
	this.shape_366.setTransform(1540.5079,823.4206,1.8156,1.8156);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#BF4C4C").s().p("AgbAVIgFABIgDgBQgHgDAEgHIgCAAQABgGAFgGQAKgQARAAIAOACQALgFALAAIAKABIACABIgDADIgTARQgYATgVABgAgegCQgGAHgBAGIgBABQgCAGAEABIAKABQASAAAagUIATgRIgIgCQgLAAgLAHIAAAAIgOgDQgOAAgJANg");
	this.shape_367.setTransform(1540.281,824.4645,1.8156,1.8156);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#F8B2B3").s().p("AgXAOQgEgBAAgEIABgDIACgGQAMgRALACQAIACAAAMQANgRAGAHQADACgDAGIgJAHQgTAMgNAAQgEAAgEgCg");
	this.shape_368.setTransform(1538.0918,825.484,1.8156,1.8156);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#F6999B").s().p("AgiAUQgEgBAAgEIAAgEQACgJAIgIQAOgQAVAJQAIgEAIgCIAQABIgUATQgTAPgPAEg");
	this.shape_369.setTransform(1540.1902,824.4645,1.8156,1.8156);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#522F2E").s().p("AgLAVQAEgZgLgVIAVAAIAKgBQgGAaAMAYIgVADQgJAAAAgGg");
	this.shape_370.setTransform(1535.1973,823.2844,1.8156,1.8156);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#392D2E").s().p("Ag3ArQAEgbgLgUIAWAAQAZgBAlgUQAXgLASgNQgDANgUAaQgUAYgRAQQgRAPgVADIgKACQgKAAAAgHg");
	this.shape_371.setTransform(1543.186,819.311,1.8156,1.8156);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#342E2C").s().p("AgDAuQgKgBgMgMQgLgKgCgIIgCgCQgTgTAMgUQAFgIAMgFQAOgGAQAAQAVAAAVALQAKAGABANIgDAPIgJAMIAAAAIgCAAIgKgGQgLgKgHAAQgIAAgDAEQgBAGAGAGIAJACIAQgBQAEAAACACIAAAEQgDAGgNAKQgPALgIAAgAgVAgQALAJAHABIAAAAQAHAAAOgLIAPgOIgDAAIgQABQgHAAgFgDQgHgIADgIQACgIALABQAJAAAMALIAHAFIAHgJQADgHAAgHQgBgLgIgEQgTgLgVAAQgPAAgNAGQgLAFgEAGQgKAQAOAQQAEgOAKAAQAFAAACAFQACAGgDAEQgDAFgLACIgBAAQAEAHAJAJgAgfABQgEAEgBAHIgBABIAEgBQAIgCACgDQACgDgBgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDAAgDADg");
	this.shape_372.setTransform(1522.3001,803.5398,1.8156,1.8156);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#3B322E").s().p("AgCgLIADAAIACAWIgDABg");
	this.shape_373.setTransform(1521.4896,813.6617,1.8156,1.8156);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#8A5E45").s().p("AgTAAIADgDIALgEQANgEAPAGQggACgNANQAAgEADgGg");
	this.shape_374.setTransform(1517.4045,799.1042,1.8156,1.8156);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#6C3E2E").s().p("AgkAYIAAgBIAJgDQAJgEgCgJQgCgGgHAEQgHADgCAMQgTgUAMgRQAHgMAZgFQAbgEAbAOQALAGgBAQQgCAOgJAGQgCABgJgIQgKgKgIAAQgLgBgBAIQgCAHAHAGQAFAEAMgBQALgCACACQgXAMgRAAQgSAAgMgMg");
	this.shape_375.setTransform(1522.3312,802.1267,1.8156,1.8156);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#54352D").s().p("AgDAsQgJgBgLgLQgLgKgCgHIAJgDQAJgEgCgIQgCgGgHAEQgHACgCAMQgTgTAMgSQAHgMAZgFQAbgEAbAOQALAGgBAQQgCAOgJAGQgCABgJgIQgKgJgIAAQgLgBgBAHQgCAHAHAGQAFAEAMgCIAOABQACADgQAMQgQANgIAAIAAAAg");
	this.shape_376.setTransform(1522.3312,803.5355,1.8156,1.8156);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#342E2C").s().p("AgeAaQgNgLAAgOQAAgPANgKQAMgLASAAQAVAAAOANQAJAKAAAMQAAAPgOALQgNAKgRABQgSAAgMgLgAgcgWQgLAJAAAOQAAANALAJQAMAKAQAAQAPAAAMgLQANgKAAgMQAAgKgIgJQgMgNgUAAQgQAAgMAKg");
	this.shape_377.setTransform(1522.3974,803.3128,1.8156,1.8156);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#41322D").s().p("AgdAYQgMgJAAgOQAAgOAMgKQANgKAQAAQARAAANAJQANAKgBAOQgBANgMALQgMALgRAAQgRAAgMgLg");
	this.shape_378.setTransform(1522.399,803.3128,1.8156,1.8156);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#292929").s().p("AAAAnQgSAAgJgJQgKgLACgSQACgPAKgMQAKgLAMgBIABAAQAMAAAKALQAKAKADAQQADASgJALQgJALgTAAgAgWgYQgJALgCAOQgBASAJAJQAIAKASgBQATgBAHgJQAJgKgDgRQgDgPgJgLQgKgKgLAAIgBAAQgLABgKALg");
	this.shape_379.setTransform(1562.8497,789.1058,1.8156,1.8156);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgXAbQgLgJAAgPQACgOAKgMQAKgLAMAAQAMgBAKALQAKAKADAPQACAPgLAKQgKAIgPABIgBAAQgOAAgJgIg");
	this.shape_380.setTransform(1562.8204,788.6072,1.8156,1.8156);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#B9B9BA").s().p("AgdAZQgGgKABgOQABgPAKgLQAKgMAMAAQAMgBAKAMQAKAKADAQQAGAlgnABIgBAAQgUAAgJgNg");
	this.shape_381.setTransform(1562.8541,789.1508,1.8156,1.8156);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#944934").s().p("AglBCQgPgNAHg9QAIhBAfgEQAVgDASAjQAUApgHA/QgBAOggAEIgNABQgXAAgOgMg");
	this.shape_382.setTransform(1562.7746,782.0085,1.8156,1.8156);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#3B322D").s().p("AgnB4QgIgJABgMQADgWgKgZQgUgDgTgKQgJAEgKAAQgQAAgGgNQgIgSAGggQAGgcAJgPIAAgBQASgSAugZQAtgXAQgCQAQgBATARQAQAOALASQAHAOAeATIAaATQAOAUgJAbQgEAPgOAVIgDAEIgHAOQgJAWgIALQgPATgVAGIgyAHQgeAAgNgOgAhcAjIABAAQASAKAWADIABAAIAAABQAMAagEAYQgBALAIAHQALANAcAAQAVAAAbgHQAUgFAOgSQAIgLAKgWIAGgOIADgEQAjgygVgcQgGgGgTgNIgWgQQgMgJgFgJQgKgRgPgNQgSgRgOABQgQACgsAXQgtAYgSASQgJAPgFAcQgGAeAIAQQAEALAOAAIASgEg");
	this.shape_383.setTransform(1538.5592,809.1177,1.8156,1.8156);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#DDB393").s().p("AgxAhIgNAAQATgTAsgXQAsgXASgCQgSAIgcASQgoAZgOASQABgDgNABg");
	this.shape_384.setTransform(1528.2073,791.6476,1.8156,1.8156);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#C68150").s().p("AhbA/QgJAQgRgEQgQgDABgOQAAgSAFgWQAGgTAGgLQASgSAugYQAsgYAQgCQAPgBASARQAQANAKATQAIAMAXAQIAhAXQACAEgDAEQgEAFgLAAQgigEgcASQgmAbgbAHIgnABQgZgEgQgOg");
	this.shape_385.setTransform(1537.9278,799.9488,1.8156,1.8156);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#A3633B").s().p("AgtBlQAEgXgLgaQgVgDgUgKIgQAEQgRACgGgOQgHgQAGggQAFgcAJgPQASgSAugYQAsgYAQgCQAPgBASARQAQANAKATQAIAMAXAQIAhAYQAPAUgMAeIglBIQgQAbgZAGIhOACQgVgIABgUg");
	this.shape_386.setTransform(1538.6079,808.6636,1.8156,1.8156);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#342D2D").s().p("AADgSQAJgFAFAJQgLgCgMASQgHAJgDAKQAIghALgGg");
	this.shape_387.setTransform(1529.4328,773.1285,1.8156,1.8156);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#292929").s().p("AgHALQgCgEgBgHQAAgFAEgFQADgEADAAQAEAAADAEQADAFABAFQgBAHgDAEQgDAEgEAAQgDAAgEgEg");
	this.shape_388.setTransform(1531.7023,786.927,1.8156,1.8156);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#292929").s().p("AgBAhQgLAAgGgHQgIgHABgTQABgMAJgKQAIgKAIAAIABAAQAJAAAGAJQAGAIACAOQADAPgJAKQgGAIgNABgAgOgUQgIAJAAALQgCARAHAIQAFAGAMAAQALAAAHgIQAHgJgCgPQgCgNgGgIQgGgIgHAAIgBAAQgHAAgIAKg");
	this.shape_389.setTransform(1529.7517,785.4292,1.8156,1.8156);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgYAEQABgMAJgKQAIgJAHAAQAKgBAGAKQAHAIABAMQABAWgaAEIgFAAQgUAAABgYg");
	this.shape_390.setTransform(1529.7409,784.7365,1.8156,1.8156);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#B9B9BA").s().p("AgYAAQABgLAJgKQAIgJAHgBQAJAAAHAJQAFAIADAOQACALgGAJQgGALgPABIgCAAQgYAAACggg");
	this.shape_391.setTransform(1529.7857,785.3842,1.8156,1.8156);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#944934").s().p("AgYAxQgIgKALguQALgyAQgCQAMgBAHAbQAHAfgJAwQgCALgSACIgFABQgPAAgHgLg");
	this.shape_392.setTransform(1529.7084,780.3762,1.8156,1.8156);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#372F2C").s().p("AhpDhIgugGQgQgHgHgYQgJgfgVgSQgOgMgigRIgHgEIgBgBIAAgBQgBgcAMgsQAMgrAOgYIABgQQAAglAFgXQAIgqAcgcQAegfAmAAQAZAAAWAMQA0gZAsAAQBGABA8AyQAsAoAYBCQAMAjAJAxIABAIQAIAMADAYQACAagHAaIgBACIgJgIQAEAYgQAXIgCAEIgBgFQgCgIgFgEQAAAggXAPIgDADIAAgYQgLASgZALQgmATg+AAIiaALgAiyizQgbAbgIAqQgFAXAAAkIgBASQgOAXgMAqQgMAsABAbIAGADQAjASAOAMQAWATAJAgQAHAXAOAFIAsAGIANAAICagLQBJAAAmgaQAMgIAHgJIAFgJIADgIIACAgQANgKADgUIACgRIgBgEIAIAGIAHAKQAJgQgBgRIgCgOIgDgKIAQARQAHgZgEgYQgCgVgHgLIgBAAIAAgBIgBgJQgVh9hCg+Qg8gyhEABQgsgBgzAZIgCABIgNgHQgQgGgRAAQgkAAgdAdg");
	this.shape_393.setTransform(1561.8289,792.1469,1.8156,1.8156);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#C07B42").s().p("Ah0ABQgSABgfANQAighAqAGQAWACAOAJQAtgVAngDQBIgFA/AwQgWgOgTgFQgugOg4AIQg2AHgsAbQgNgagcAAg");
	this.shape_394.setTransform(1559.2994,756.4288,1.8156,1.8156);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#AF5E39").s().p("AgzDFQgFgCgFAFQhBgMgkg0QgNgQgXgEIgsADQABgdAKgoQAMgpAOgVQgBgbADgdQAFg4AhghQAjgjArAFQAVACAPAKQAugWAngDQBLgFBBA3QAtAqAZBGIgGABIAAAAIgKgCIABACQgKACgGAMQgGAJgBALQgDAYgBA1QgHAsgdAUQhKA3iEAIg");
	this.shape_395.setTransform(1559.027,788.069,1.8156,1.8156);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#944934").s().p("AiTDaQgSgGgHgYQgKghgYgUQgMgKgogVQgBgcALgrQAMgsAPgYQgBgbADgcQAGg4AhgiQAigjArAFQAWADAOAJQAvgWAngCQBKgFBCA2QAuAsAYBJQAHATAMA+QAIALACAXQADAagHAaIgMgMIACAQQAAATgMASQgBgIgFgFIgFgFIgBAUQgEAVgRALIAAgbIgFAIIgTASQgnAbhLAAIiaALg");
	this.shape_396.setTransform(1561.8483,792.1541,1.8156,1.8156);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#372F2C").s().p("AgHBRQgwgKgTggQgSgdAMglQAIgcAZgPQAYgOAcAFQASADAQAMQARANAaAGIAEABIgDACQgZAaghAxQgRAZgLAWIgBABgAgthDQgYAOgIAbQgKAkAQAbQATAeAuAKQAthPAngoQgagHgPgLQgPgLgSgEIgOgBQgSAAgRAJg");
	this.shape_397.setTransform(1524.1167,763.571,1.8156,1.8156);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#C07B42").s().p("AAVAKIgfgTQgWgKggAFQATgMAWACQAYABAUAPQASAMAaAGIgOAPQgNgEgRgLg");
	this.shape_398.setTransform(1527.1633,753.7773,1.8156,1.8156);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#944934").s().p("AgVAIQgUgMgIgWQAVAXAaADQAbACAZgSIgbAqQgZgEgTgOg");
	this.shape_399.setTransform(1518.7662,773.1739,1.8156,1.8156);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#372F2C").s().p("AgFAYQgKgCgFgDQgIgGgFgJQgEgJACgIQADgLAOgBIAFAAQALADAKANIAGAHQAOAMAFACIADABIgIALIAAAAIgBAAQgJACgIAAQgIAAgHgCgAgfgMQgCAHAEAHQAEAJAIAFQAEADAIABQALADAUgCIAEgGQgFgDgNgMIgHgGQgKgNgJgCIgDAAQgMABgCAIg");
	this.shape_400.setTransform(1521.8376,764.5725,1.8156,1.8156);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#944934").s().p("AgSARQgNgIgBgOQgCgQASgCQAIAAAIAIIAWAVQAHAGAFACIgHAIIgQACQgTAAgKgHg");
	this.shape_401.setTransform(1521.7058,764.5498,1.8156,1.8156);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#944934").s().p("AALAGQgSgSgHAAQgHABgIADIgGAEQACgGAEgGQAJgLANAEQALADAMAOIAUAVIgGAKg");
	this.shape_402.setTransform(1521.9889,762.564,1.8156,1.8156);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#AF5E39").s().p("AhDAtQgXgdANgqQALglAkgMQAjgMAiAaQARAMAbAHQgaAZgiAzIgbAuQgqgIgVgbg");
	this.shape_403.setTransform(1523.9288,763.5204,1.8156,1.8156);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#342E2C").s().p("AgXATQgDgCACgJQADgJAHgHQAMgLAUABQAJACgBAPQAAAGgEAEQgEAEgFgBQgLgBgPAGIgIACgAgNgBQgHAIAAAHIAGgBQAOgGAKAAIADAAQAFABACgFIABgFQABgKgFgBIgDgBQgRAAgKANg");
	this.shape_404.setTransform(1677.7409,950.996,1.8156,1.8156);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#663D2D").s().p("AgRAAQAMgRAXABQAHACgBANQgBAMgJgBIgkAHQgFgDAKgOg");
	this.shape_405.setTransform(1677.6272,950.9552,1.8156,1.8156);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#342E2C").s().p("AARASIgjgEQgEAAgCgDQAAgBACgEQAEgGAJgHQAKgKAJAAIADABQAHACADAHQACAGgBAIQgBALgGAAgAgIgDQgJAHgCAFIAkAEIACgFIAAgJQgBgJgGgBIgCgBQgHAAgLAJg");
	this.shape_406.setTransform(1673.5173,946.4273,1.8156,1.8156);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#663D2D").s().p("AARAPIgcgCQgJgBgBgCQgCgDAOgLQANgNAJADQAJADAAANQAAANgEAAIgBAAg");
	this.shape_407.setTransform(1673.5322,946.4232,1.8156,1.8156);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#382F2C").s().p("AgOgJQAGgIAOgDIAOABIgMACQgNAEgGAHQgHAJAFAQIgEABQgGgSAJgLg");
	this.shape_408.setTransform(1683.0339,948.7422,1.8156,1.8156);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#382F2C").s().p("Ai3EoQgHgFgBgEQgJgCgIgHIgMgMQgFgJABgFIAAgBQAIgVAVgMQAWgKAZAFQAaAFAJgLQAJgLgKgWQhjioASiWQAHg8Aag3QAFgLAOgTIAOgRQg4BQgHBjQgLCNBdCeIABAAQAKAZgKANQgLANgdgGQgXgEgUAKQgUAKgHATQgBAFAEAFQAEAIAIAFQAIAGAHABIACAAIAAACIAHAHQATANAzgBQA7gCBVgWQAXgFAKgRQAPgagOgrQgLgnABgnQADg8AkgqIAagcQAtgyASgdQAcgwAHg6IAFABQgHA7gdAwQgRAcgvA0IgZAcQgjApgDA6QgBAmALAnQANAtgPAbQgLATgZAGQhdAYg9gBQgtABgTgMg");
	this.shape_409.setTransform(1714.2455,900.2657,1.8156,1.8156);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#AF5E39").s().p("AiBg2QAPhFAog5IBgATIB1ArQgQAygiAmQgWAZguAjQgxAngVAWQgoAogWAyQgsh8Aahvg");
	this.shape_410.setTransform(1703.8279,877.1622,1.8156,1.8156);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#944934").s().p("AiJEyQgygDgDgRQgMgCgLgLQgLgLACgIQAHgUAUgLQAVgLAZAFQAaAFAKgLQALgLgKgZQhjinASiVQAKhcAzhJIFjBnQgIBEglA2IhQBdQgkAqgCA9QgBAlALAlQAJAdgEAXQgGAhgjAJQhcAYg8AAIgTgBg");
	this.shape_411.setTransform(1714.2897,899.96,1.8156,1.8156);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#342E2C").s().p("AgaAQQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgGAOgLQAOgNALABQAOACACAOQACALgHADIgMABIgHgBIgdADgAgZAOIAAgCIAAAAgAgJgBQgJAGgEAHIAagDIARABQAEgCgBgIQgDgKgKgBIgBAAQgIAAgLAKg");
	this.shape_412.setTransform(1574.5795,944.6052,1.8156,1.8156);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#663D2D").s().p("AgOAAQAPgPALACQAKABAEALQADAKgHADIgIABIgKgBIgdACQgEgBAPgNg");
	this.shape_413.setTransform(1574.5576,944.5989,1.8156,1.8156);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#382F2C").s().p("AgQAPQAEgXATgGIALAAQgFAAgEACQgRAIgEATg");
	this.shape_414.setTransform(1579.4525,942.3422,1.8156,1.8156);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#382F2C").s().p("AimEFQgZgDgIgKQgFgGABgKIgBgDQgNgZAGgNQAEgJAOgFIBFgIQAcgHAIgPQARgeAHgyQAIg7gRggIgaglQgdgjgMgYQgUgoABgsQAAgRAHgVIAGgSQgSBAAUA2QAMAfAkAvQAVAaAGAMQARAhgIA8QgGA0gSAeQgJARgdAHIhGAJQgLADgDAIQgFAKALAYIACAEIAAABQgCAIAFAFQAHAJAYACIBQABQAmACArgCQAlgCATgcQAKgPAIggIADgMQADgLAUgZQAlguAaguQAhg6ALhEQAIg4gFhUIAHBIQgBA4gLAtQgLAygbAtQgZAsgmAxQgTAYgEAKIgDAMQgHAhgLAQQgVAdgmACg");
	this.shape_415.setTransform(1613.1868,903.0345,1.8156,1.8156);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#C88A55").s().p("AApBuQgCgagIgRQgGgMgWgbQgWgdgLgTQgmhDAXhRQAAAxAOAsQAQAwAeAfQAjAhAEAuQAEApgVAtQAGgfgCgcg");
	this.shape_416.setTransform(1594.5191,886.2402,1.8156,1.8156);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#AF5E39").s().p("AhXBxQAFgzgOgbQgGgMgWgbQgXgdgLgTQgmhEAXhRICmgMIC9AvQgIAngIAYQgMAigSAUIg7AuQgrAdgYAvQgcA7gWAcQgjAtgoAJQAYgwAEg1g");
	this.shape_417.setTransform(1617.7006,892.0501,1.8156,1.8156);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#944934").s().p("AiwEDQgcgGAEgUQgJgTgBgHQgDgUAUgGIA2gFQAqgHALgUQARgdAHgzQAIg8gRggQgGgMgWgcQgXgdgLgTQgmhEAXhRIFlAjQAGBXgJA6QgLBBghA6QgZAsghApQgZAhgDAJIgRA1QgTAjgrADg");
	this.shape_418.setTransform(1613.2164,902.7622,1.8156,1.8156);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#342E2C").s().p("AgdARIAAgCQgCgBAEgFQAPgZAfAAIABAAQAGACACAEQAFAIgEANIgBACIgCAAIgVgCQgRAAgOAGgAgJgCQgJAEgFAJIAcgEIAUABQACgLgDgFIgFgDIAAAAQgRAAgLAJg");
	this.shape_419.setTransform(1571.2213,941.8883,1.8156,1.8156);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#663D2D").s().p("AgRAAQAOgOAXABQAIABAAAMIgCALQgbgGgaAJQACgHAIgHg");
	this.shape_420.setTransform(1571.2823,941.8868,1.8156,1.8156);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#382F2C").s().p("ABtgrQg+gfhTgDQg/gDhFANIg4ANIgCgFIA5gNQBGgMA/ACQBYAEBAAgQAxAaAhAqQAOASAPArQgkhVhSgpg");
	this.shape_421.setTransform(1620.0311,788.9772,1.8156,1.8156);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#AF5E39").s().p("Ajjg5IA5gNQBFgMA/ACQDKAIBACZg");
	this.shape_422.setTransform(1620.3035,789.0798,1.8156,1.8156);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#382F2C").s().p("Ag2FqQgFgCgxglQhQg+gsgeQhSg6g4gWQg1gUghgqQgUgZgZgzQgRgjgKgQQgRgZgWgMIACgFQAXAOASAaQAKAPASAkQAYAzATAYQAhApAzAVQA5AVBTA6QAtAeBPA+QAwAlAEABQCzAgDDheQBSgnBBg2QA/g0Aeg1QASiShjhpQhMhPhtgdQgqgMgzgFIhWgFQhMgCghgJQgrgMhKgdIhDgcIACgFIBDAcQBKAeAqAMIAyAIICQAIQA0AEAqAMQApALAoAVQA/AgAtAwQAxA1AUBAQAVA/gJBJIAAABQggA2hBA2QhBA2hSAnQiPBFiQAAg");
	this.shape_423.setTransform(1652.5072,845.2531,1.8156,1.8156);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#AF5E39").s().p("ABfEwQgvgLgdgxQgbAXiUgQQh+gOgXgJQhMgegrhXIggg/QgUghgagPQBSipAjgzQAxhHBUgOIB+AEQAsAGA8AgQBBAlAdAHQAdAIBiAEQBiAEA/ARQAvANAvAaQArBNAFBXQAFBfgqBIIg0AcQgngNgxgWIgqgTQgCAmgdAmQgdAmgqATQggAPgeAAQgMAAgMgCg");
	this.shape_424.setTransform(1640.7318,830.9961,1.8156,1.8156);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#944934").s().p("Ag1FnIh1hYQh9hchKgeQhMgegrhXIggg+QgUghgagPIGGkgIBCAbQBLAeArALQAdAIBiAEQBiAEA/ARQBvAeBNBSQBiBpgSCRQgeA2hAA0QhBA3hTAoQiRBFiKAAQguAAgugIg");
	this.shape_425.setTransform(1652.4079,845.313,1.8156,1.8156);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#382F2C").s().p("AhOD1QgUgDgEgEQgIgFgBgIQgBgLAJgdIAAgBIABAAQALgIAUgBQALAAADgDQARgMABgWQABgUgKgTQgIgRgfgiQgagbgMgRIgBgCIBFhQQBIhcAfhAIAGgOIgCAPQgQB+A2B5IAhA7QAFANABAPQABAbgaAmQgaAnglAZQgbATgugBgAg0hOIhEBRQAKAPAaAcIAXAZQAMAOAFALQALAVgBAWQgCAYgSANIgRAEQgRAAgLAIQgIAaABAKQAAAGAGAFIAWAFIAsAEQAsAAAagRQAkgaAaglQAZglgBgaQgBgOgFgNIgMgVQgOgWgGgPQg0h1AMh4QggA9hABSg");
	this.shape_426.setTransform(1746.0864,902.1721,1.8156,1.8156);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#944934").s().p("AguDwQgrgCgMgIQgIgEAAgHQgBgLAIgcQALgHAQgBIATgEQASgMABgYQABgUgKgUQgJgRgbgdQgfgigKgOIBChQQBJhcAghBQgSB9A3B7IAaAtQAMAUABAVQABAagaAmQgaAmglAaQgaARgsAAIgMAAg");
	this.shape_427.setTransform(1746.1731,903.2413,1.8156,1.8156);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#382F2C").s().p("AgNgEIgDgTIAFAQQAJARATAKIgCAEQgVgIgHgUg");
	this.shape_428.setTransform(1554.4881,913.7465,1.8156,1.8156);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#382F2C").s().p("AgIgEIgDgRIAGARQAJAQAIAHIgCADQgMgIgGgSg");
	this.shape_429.setTransform(1550.5845,919.7834,1.8156,1.8156);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#382F2C").s().p("AgDgEIAAgOIACAOQACANAEAIIgFACQgDgIAAgPg");
	this.shape_430.setTransform(1544.2299,919.4203,1.8156,1.8156);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#382F2C").s().p("AgEgHIgIgOIAKANQAMASADALIgFABQgCgLgKgSg");
	this.shape_431.setTransform(1560.4795,889.826,1.8156,1.8156);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#382F2C").s().p("AiHDHIgBAAQgJAAgIgGQgNgIgFgUQgUhkAOhBQALgxAegbIAMgKQArgmAQgUQAaghAAgiIAAgEIBqBQQBkBRAQAoIABACIgCABQgeAghAAOQgmAIgpAAIgrgDQABAMgFAaQgFAYAAAQQAGAmgKALQgFAGgIgBQADANgIAKQgHALgKAAIgHgCQgHAMgLAAQgOAAgOgRgAg+iMQgQAVgrAlIgMAKQgiAegIA7QgIA8ARBXQAHAeAXAAIADAAIAJAJQAJAIAIAAQAJAAAGgMIABgCIACACIAHACQAHAAAGgIQAIgMgFgLIgBgEIAEABQAIACAEgFQAJgKgFgjQgBgQAFgaQAGgagCgOIAAgEIADABIAtAFQAoAAAlgIQA+gOAegeQgQgmhahKQg0grg2gmQgBAhgbAhg");
	this.shape_432.setTransform(1569.1484,887.0572,1.8156,1.8156);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#C88A55").s().p("AhHAkQAJg4AhgdQA0guAPgSQAegkAAglIADACQAGAPgBARQgCARgJAOQgNAVgnAkQgkAigOAZQgXAmgFA2QgEAmAGA+QgShaAKg9g");
	this.shape_433.setTransform(1550.0135,882.5183,1.8156,1.8156);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#AF5E39").s().p("AhSC3QgThbAKg/QAKg4AhgcQA0gvAOgRQAfglAAglIAsAgQAEAogEAUQgFAfgXAQQgFADgmAQQgZAKgEAPQgIAggIBWQgNBIgrANg");
	this.shape_434.setTransform(1553.5008,883.7438,1.8156,1.8156);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#944934").s().p("Ah2DRIgQgOIgOgCQgPgHgFgWQgShbAKg/QAJg4AhgdQA1guAPgSQAegkAAglIBjBLQBnBTAPApQglAmhSALQhCAKgggKQACAPgFAYQgGAaAAAQQAJA6gbgHQAGAQgMAMQgLAMgKgJQgGAOgKAAQgGAAgGgEg");
	this.shape_435.setTransform(1569.1028,887.2439,1.8156,1.8156);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#342E2C").s().p("AABASQgSgMgHgQIgBgBIACgCQAUgMADAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAAQARAmAFAHIABACIgDACQgIAAgOgIgAATAUIgTgoQgDABgQAJQAGAMANAJQAJAGAKADg");
	this.shape_436.setTransform(1560.7065,919.6018,1.8156,1.8156);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#663D2D").s().p("AgWgLQANgIAHgCIADgBIAWAtQghgGgMgcg");
	this.shape_437.setTransform(1560.8426,919.5564,1.8156,1.8156);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#342E2C").s().p("AACAOQgPgLgGgMIgBgCIACgBQASgMAEADIABABIAAAAQAMAiADAFIABADIgCABQgFAAgMgJgAAOAQIgNghQgDABgMAHQAJAPATAKg");
	this.shape_438.setTransform(1556.5306,925.2818,1.8156,1.8156);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#663D2D").s().p("AgRgKQALgHAGgCIADAAIAGASQAHASADADQgbgLgJgTg");
	this.shape_439.setTransform(1556.576,925.321,1.8156,1.8156);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#342E2C").s().p("AABANQgNgMgFgLIgBgCIACgCQASgJAEADIABABQAJAhACAEIABADIgCABQgEAAgMgJgAAMAPQgFgPgEgQQgGABgJAFQAHANARAMIAAAAg");
	this.shape_440.setTransform(1550.9476,927.3889,1.8156,1.8156);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#663D2D").s().p("AgPgLIAQgHIADgBIAMAnQgXgMgIgTg");
	this.shape_441.setTransform(1550.993,927.3181,1.8156,1.8156);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#342E2C").s().p("AANAWQgEABgKgNQgKgOgCgNIAAgDIACgBIAXgBIABABIAAABQAAAlABACIAAADgAAJAOIgBghIgQADQADAQAOAOIAAAAg");
	this.shape_442.setTransform(1544.3207,925.6841,1.8156,1.8156);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#663D2D").s().p("AgLgRIAVgDIAAATQABASABAEQgUgSgDgUg");
	this.shape_443.setTransform(1544.4742,926.0543,1.8159,1.8159);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#39302C").s().p("AgKgIIgLgHIAOAGQARAKAMANIgFACQgLgNgQgLg");
	this.shape_444.setTransform(1358.712,575.9571,1.8159,1.8159);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgDQAAgCACgCQADgDADAAQAEAAACADIAEAEIgEAGIgGACg");
	this.shape_445.setTransform(1299.2427,569.9194,1.8159,1.8159);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGABQAHgBAAAFIgCAEIgFABQgGAAAAgFg");
	this.shape_446.setTransform(1253.3469,565.9699,1.8159,1.8159);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#292929").s().p("AgQATQgIgIABgLQgBgKAIgIQAHgIAJAAQAKgBAHAIQAHAIAAALQAAALgHAIQgHAIgKAAQgJAAgHgIg");
	this.shape_447.setTransform(1300.6954,572.005,1.8159,1.8159);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#39302C").s().p("AgGACQAHgJAKgEIABACQgJAEgHAIIgHAJg");
	this.shape_448.setTransform(1277.6794,533.6023,1.8159,1.8159);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#372F2C").s().p("AghBkIA9AFQAggDAZgMQAtgVAIguQAIgmgNgdQgNgdgggQQgcgPgigBQgjgBgaANQgPAHgNALQgIAHgOAOIgZAYQgRAOgTALQAPgPAHgFIA5g1QAOgLAPgIQAcgOAkACQAkAAAeAQQAaAOAOAWQAVAigJAvQgIAvgwAXQghAQgrAAg");
	this.shape_449.setTransform(1359.5927,541.942,1.8159,1.8159);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#C07B42").s().p("AhGACQAdgdAXgLQAegQAqAFQAuAEAdAZQhMgZhAAiIg1AlQgiAZgeAAQAbgQAfghg");
	this.shape_450.setTransform(1356.3514,531.6059,1.8159,1.8159);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#372F2C").s().p("AgRAHIARgSQASgSAPgDQALgBAHAGQAGAEACAGQACAGgEAFQgEAHgNAFQgTAIgjgCQgLANghAIQAfgOAKgMgAAjgbQgMABgOANQgKAJgJALQA0ADAKgRIABgJQgBgFgEgDQgFgDgHAAIgBAAg");
	this.shape_451.setTransform(1357.3254,544.3018,1.8159,1.8159);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#944934").s().p("AAVgLQgLAMgeALg");
	this.shape_452.setTransform(1350.5407,548.1745,1.8159,1.8159);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#944934").s().p("AgkATIABAAQAMgSAPgKQAWgRAOAKQAQALgOAMQgNANgiAAIgTgBg");
	this.shape_453.setTransform(1361.0857,542.457,1.8159,1.8159);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#944934").s().p("AgWgCQASgdAagDQAXgDAMAPQgWgJgYASQgPAKgKAPQgIAKgiAOQAYgRAKgVg");
	this.shape_454.setTransform(1356.8962,543.784,1.8159,1.8159);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#AF5E39").s().p("AgeBpIhEgrIgthBQAdgRAggfQAdgdAWgLQApgVA3ANQA7APATAvQAFA9gmAfQgcAVgiANQgmAOglACg");
	this.shape_455.setTransform(1358.5378,541.2315,1.8159,1.8159);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#944934").s().p("AggBmIhxhtQAcgRAggfQAcgdAXgLQAYgMAhAAQAjAAAdANQBIAhgQBUQgKA3g9AUQgcAKgdAAQgXAAgYgGg");
	this.shape_456.setTransform(1359.2017,542.0208,1.8159,1.8159);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#342D2D").s().p("AgLgNIgfgFQAcgSAcAXQAWARAHAWQgUgcgigLg");
	this.shape_457.setTransform(1301.0132,550.09,1.8159,1.8159);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#3B322E").s().p("AAAgGIgOgFIAGAAIALADIAJAHQADADAAAKQgCgLgNgHg");
	this.shape_458.setTransform(1286.2594,595.0236,1.8159,1.8159);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#3B322E").s().p("AhSAzIAAAAQAHgggQgWIgCgEIAFABIAfAAQA3gDBcgwIADgCIABAEQgDAOgeAfQgcAcgaASQgQAMgUAGQgSAGgPAAQgTAAgBgJgAhMAzQAAAFAOgBIAfgFQATgGAPgKQAXgQAagaQAagaAIgRQhYAvg3ADIgbAAQAOAWgGAeg");
	this.shape_459.setTransform(1270.416,604.8292,1.8159,1.8159);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFF8F8").s().p("AgCADQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQACgDACAAQABABAAAAQAAABAAABQgBAAAAAAQgBAAgBABQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_460.setTransform(1259.8738,612.0221,1.8159,1.8159);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#BF4C4C").s().p("AgEACQAEgIAHgEIACACQgIAEgFAHIgEAIg");
	this.shape_461.setTransform(1266.8297,609.6867,1.8159,1.8159);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#BF4C4C").s().p("AgzAZQgJgEAEgIIgBAAQABgGAHgIQAOgTAZAAIAUAEQAPgIARAAIAOACIACABIgeAYQgkAWgfAAgAgsgDQgIAIgCAIIAAAAIAAABQgFAGAHADIAOABQAaAAAmgXIAbgUIAAgBIgLgBQgRAAgOAHIgCAAIgTgDQgVAAgNAOg");
	this.shape_462.setTransform(1266.4211,610.8216,1.8159,1.8159);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#F8B2B3").s().p("AghARQgGgCAAgFIABgEIADgGQASgTAPACQANACAAAOQARgUAKAIQAFADgFAHIgNAJQgcAMgSAAQgHAAgFgBg");
	this.shape_463.setTransform(1263.2553,612.0544,1.8159,1.8159);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#F6999B").s().p("AgxAWQgGgCgBgEIABgEQAEgLAKgIQAUgTAgAKQALgFAMgCIAXACIgdAWQgbAQgWAFQgJACgIAAQgGAAgFgCg");
	this.shape_464.setTransform(1266.2395,611.0153,1.8159,1.8159);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#522F2E").s().p("AgRAZQAHgfgQgYIAeABIAPgCQgIAfAQAbIgeAFQgNgBgBgGg");
	this.shape_465.setTransform(1259.1577,609.5505,1.8159,1.8159);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#392D2E").s().p("AhQAyQAHgggQgXIAfABQAkgCA1gXQAigNAZgPQgDAPgdAeQgcAdgaARQgYASgfAEIgOACQgOAAgBgIg");
	this.shape_466.setTransform(1270.5976,604.933,1.8159,1.8159);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#342E2C").s().p("AgGA1QgNgBgSgOQgPgMgEgIIAAgBIgCgCQgbgXARgWQAGgJASgGQAUgHAXAAQAfAAAeANQAOAGABAPQABAJgFAJQgFAJgHAFIgBAAIgDAAQgDAAgKgHQgPgMgMAAQgMgBgCAGQgDAHAJAHQAFADAIAAIAXgCQAGAAADADIgBADQgEAHgTAMQgVANgMAAgAgfAkQAPAMALAAIAAAAQAKAAAUgMIAWgRIgEAAIgXACQgKAAgHgEIgHgJQgCgGACgDQAEgJAPABQANAAASAMQAHAHACgBIABAAQAGgDAEgHQAEgIgBgJQAAgNgMgEQgdgMgdAAQgWgBgSAHQgQAFgGAIQgOASATASQAEgIAGgCQAFgFAHAAQAIAAABAGQACAGgEAFQgFAGgOACIgBAAQAFAIANAKgAguABQgFAEgCAJIAAABIAEgBQAMgDADgDQADgDgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgFAAgFADg");
	this.shape_467.setTransform(1240.6062,586.6707,1.8159,1.8159);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#3B322E").s().p("AgDgCIAAgLIAFAAIACAaIgFABQgBgGgBgKg");
	this.shape_468.setTransform(1239.4102,598.3376,1.8159,1.8159);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#8A5E45").s().p("AgcAAIAEgFIAQgFIApADQguABgTARQAAgGAEgFg");
	this.shape_469.setTransform(1233.5541,581.6771,1.8159,1.8159);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#6C3E2E").s().p("Ag0AbIgBAAIAOgEQANgEgEgMQgCgGgKAEQgLAEgDAOQgagXAQgUQALgOAjgFQAngGAoARQAQAHgDASQgCAQgNAIQgDABgNgKQgOgLgMAAQgPgBgCAJQgDAIAKAHIAsADQghAPgZAAQgaAAgRgPg");
	this.shape_470.setTransform(1240.6134,584.9881,1.8159,1.8159);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#54352D").s().p("AgFAzQgNgBgRgNQgPgLgDgIIAOgEQANgEgEgLQgCgGgKAEQgLADgDAOQgagWAQgVQALgOAjgFQAngGAoARQAQAHgDASQgCAQgNAIQgDABgNgKQgOgKgMAAQgPgBgCAIQgDAIAKAHQAHAFASgCIATABQADADgXAOQgWAPgLAAIgBAAg");
	this.shape_471.setTransform(1240.6134,586.6238,1.8159,1.8159);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#342E2C").s().p("AgsAeQgSgNAAgRQAAgRASgMQASgMAaAAQAfAAATAPQAOALgBAPQAAARgTANQgTANgZgBQgaAAgSgMgAgogaQgRAMAAAOQAAAPARAMQARALAXAAQAWAAASgMQARgMABgOQABgNgNgJQgSgPgcAAQgXAAgRALg");
	this.shape_472.setTransform(1240.7328,586.3983,1.8159,1.8159);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#41322D").s().p("AgqAdQgSgNAAgQQAAgPASgNQASgLAYAAQAZAAASALQASAMAAAQQgBAQgSALQgSANgYAAQgYAAgSgLg");
	this.shape_473.setTransform(1240.7279,586.3983,1.8159,1.8159);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#292929").s().p("AgnAiQgPgNADgVQACgRAPgOQAPgNASAAIABAAQARAAAPAMQAPANADASQAGAUgOANQgNAMgcABIgCABQgZAAgNgMgAgggcQgNANgCAQQgEATAOAMQAMAMAagBQAbgBAMgMQAMgLgEgUQgEgRgOgMQgOgMgQAAIgBAAQgRABgOANg");
	this.shape_474.setTransform(1298.8879,569.9648,1.8159,1.8159);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AgiAgQgQgLABgSQABgQAPgNQAOgNASgBQARAAAPAMQAPAMADARQADASgPALQgOAKgWAAIgDABQgSAAgOgJg");
	this.shape_475.setTransform(1298.8813,569.3361,1.8159,1.8159);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#B9B9BA").s().p("AgqAdQgJgLACgSQACgQAOgOQAPgNARAAQARAAAPAMQAOAMAEASQAEAQgJANQgLAPggABIgBAAQgeAAgMgPg");
	this.shape_476.setTransform(1298.9031,569.9645,1.8159,1.8159);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#944934").s().p("Ag3BNQgIgGgEgaQgDgaAFgcQALhMAsgEQAfgDAZAoQAfAvgLBJQgCARgvAFIgSABQgiAAgUgOg");
	this.shape_477.setTransform(1298.924,561.6915,1.8159,1.8159);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#3B322D").s().p("Ag4CKQgNgKADgOQAEgagPgdQgjgGgWgIIgbAEQgXAAgIgPQgLgUAIgmQAIghANgRIABgBQAbgWBBgcQBAgbAZgBQAXgCAbAUQAXAQAPAVQAHAKAPAKQAKAHAWALIAlAXQAhAjg0A8IgFAFIgJAQQgOAagMAMQgVAWgeAHQgoAIggAAQgqAAgTgQgAiFAoQAcALAfAEIABAAIABABQAQAfgFAbQgBANAKAIQARAPAoAAIBGgJQAegFATgVQALgNAOgZIAKgQIADgFQAzg6gfghIgkgVQgVgMgKgHQgRgKgIgKQgOgVgVgPQgagTgVABQgWAChBAbQhAAbgaAVQgOASgGAgQgIAkAKASQAHANATAAIAbgFIAAAAg");
	this.shape_478.setTransform(1264.0151,593.1529,1.8159,1.8159);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#DDB393").s().p("AhHAmIgSAAQAagVBBgcQBAgbAYgCQgWAIgsAWQg6AdgTAVQABgDgTABg");
	this.shape_479.setTransform(1249.0797,572.8702,1.8159,1.8159);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#C68150").s().p("AhJBdQgkgFgWgQQgNATgYgFQgXgEABgQQgBgVAIgaQAIgWAJgMQAagVBCgcQBAgbAXgCQAWgCAaATQAWAQAPAVQAKAOAiATIAwAbQAEAFgGAFQgGAFgPAAQgxgEgoAVQg3AegnAJQgOADgPAAQgNAAgPgCg");
	this.shape_480.setTransform(1263.0747,582.6681,1.8159,1.8159);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#A3633B").s().p("AgkCSQgegKACgWQAFgbgQgeQgegEgcgLQgLAEgMABQgZABgJgPQgKgTAIglQAIghANgRQAagVBCgcQBAgbAXgCQAWgCAaATQAWAQAPAVQAKAOAiATIAwAcQAWAXgSAjIgcAoQgHAKgTAiQgXAegkAIQgpAIgeAAQgYAAgRgGg");
	this.shape_481.setTransform(1264.0106,593.146,1.8159,1.8159);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#342D2D").s().p("AAFgVQAMgGAIALQgQgDgSAVIgPAWQAMgmARgHg");
	this.shape_482.setTransform(1250.8047,551.453,1.8159,1.8159);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#292929").s().p("AgKAMQgEgFAAgHQAAgHAEgEQAEgGAGAAQAGAAAFAGQAEAEAAAHQAAAHgEAFQgFAGgGAAQgGAAgEgGg");
	this.shape_483.setTransform(1254.0733,567.468,1.8159,1.8159);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#292929").s().p("AgCAmQgQAAgJgHQgLgJACgWQACgOAMgMQAMgLAMAAIABAAQAMAAAKAKQAJAKADAQQAEASgNALQgKAKgSAAgAgUgYQgLALgCANQgBAVAKAIQAIAHAQAAQARgBAJgJQALgKgDgRQgDgPgIgJQgJgKgLAAIgBAAQgLABgLAKg");
	this.shape_484.setTransform(1251.285,565.6067,1.8159,1.8159);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgiAEQABgNAMgLQAMgLALAAQANgBAKALQAJAKABAOQABALgLAIQgLAIgOACIgHAAQgdAAACgcg");
	this.shape_485.setTransform(1251.2516,564.8733,1.8159,1.8159);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#B9B9BA").s().p("AgjAAQACgNAMgMQALgKAMgBQAMAAAKAKQAIAKADAPQADAOgIAKQgJANgWABIgBAAQgkAAADglg");
	this.shape_486.setTransform(1251.3094,565.6524,1.8159,1.8159);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#944934").s().p("AgjA5QgKgMAPg1QAPg5AYgDQASgBAIAfQALAkgNA4QgCAMgbADIgIAAQgUAAgLgMg");
	this.shape_487.setTransform(1251.256,559.791,1.8159,1.8159);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#372F2C").s().p("AjaD9QgXgHgKgcQgNgjgfgWQgTgOgxgUIgKgEIgBgBIgBgBQgBghARgzQAQgyAWgcIABgTQgBgpAHgbQANgyAoggQAsgkA2AAQAjAAAgAOQAggLAXgHQArgKApAAQBjAABYA6QA+AwAjBLQATApAMA4IACAKQAMAPADAcQADAegKAcIgCAEIgNgKQAFAcgVAaIgEAFIgBgFQgDgJgHgGQAAAmgiARIgEADIAAgEIAAgXQgQAUgkANQg2AWhZgBIgBAAIjvAOgAkBjOQgmAfgNAwQgHAbABAoQABASgDAEQgVAagQAxQgRAyABAgIAIAEQAzAVATANQAgAXAOAlQAJAZAVAIIBAAGIASABIDdgOIABAAQBpAAA3gdQAbgPAHgQIAFgKIACAmQATgMAFgWIACgVIgBgEIAFACQACAAAEAFQAGAEAEAIQAMgTAAgTIgDgRIgEgLIAWAUQAJgegEgcQgDgYgLgNIAAgBIgCgKQgMg3gSgpQgihLg+guQhVg6hiAAQg/AAhLAdIgCABIgBgBQgbgOgmAAQg0AAgqAjg");
	this.shape_488.setTransform(1297.4499,573.4149,1.8159,1.8159);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#C07B42").s().p("AimABQgbABgtAQQAxgnA+AGQAfADAUALQBBgZA3gDQBogGBcA4QgegPgegHQhCgRhRAKQhOAIhAAfQgRgegoAAg");
	this.shape_489.setTransform(1293.7952,532.0523,1.8159,1.8159);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#AF5E39").s().p("AhLDlQgGgCgIAGQhdgPg0g8QgSgTgigEIhAADQACghAPguQAQgwAVgZQgBggAEggQAIhCAwgmQAxgpA+AGQAfADAVALQBDgaA5gDQBqgFBfA/QBAAwAjBSIgHABIgCAAIgCgBIgLgCIACADQgOADgKAOQgHAKgDAMQgEAdgDA8QgIAzgqAYQhrBAi9AJg");
	this.shape_490.setTransform(1293.432,568.7055,1.8159,1.8159);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#944934").s().p("AjUD9QgZgHgLgcQgOgngigWQgSgMg5gZQgCgfAQgzQARgyAWgcQgBggAEggQAIhCAwgmQAxgpA+AGQAfADAVALQBDgaA4gDQBrgFBeA/QBEAyAiBVQAJAWASBIQALANAEAbQAEAegLAeIgRgOIADASQAAAWgRAVQgCgJgHgGIgGgFIgCAWQgHAZgXAMIgBgfQgGAPgcAQQg4AehsAAQhWAAiHAOg");
	this.shape_491.setTransform(1297.5041,573.4267,1.8159,1.8159);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#372F2C").s().p("AgKBeQhFgLgcgmQgZggAQgsQAMghAkgRQAjgRAoAGQAbAFAXAOQAYAOAmAHIAEABIgDADQglAdgvA5QgjArgGAMIgBACgAhChNQghAQgLAfQgQAqAYAfQAaAjBCALQBFheA1grQgkgIgXgOQgWgNgZgEQgKgCgLAAQgbAAgYAMg");
	this.shape_492.setTransform(1243.1727,540.3604,1.8159,1.8159);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#C07B42").s().p("AAdALQgegQgOgFQgggMgtAGQAbgNAgABQAhABAfASQAXANAnAIIgUASQgTgFgZgOg");
	this.shape_493.setTransform(1247.627,529.011,1.8159,1.8159);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#944934").s().p("AgeAKQgegQgKgYQAcAbAnADQAnACAkgVQgYAcgPAWQgkgHgbgOg");
	this.shape_494.setTransform(1235.5061,551.443,1.8159,1.8159);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#372F2C").s().p("AgIAcQgNgCgIgEQgLgHgHgLQgGgKADgJQAEgNAUgBIAHABQAPACAPAQIAKAIQAUAOAHACIAEABIgLAMIgBABIgBABIgXABQgNAAgLgCgAgtgOQgDAIAGAJQAGAKAKAFQAHAEAMACQAPADAdgDIAGgHIgagRIgKgHQgOgPgNgCIgFAAQgRABgDAJg");
	this.shape_495.setTransform(1239.869,541.5362,1.8159,1.8159);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#944934").s().p("AgaAUQgTgKgCgQQgDgTAZgBQAOgBALAJIAOAMIASANQAJAIAHACIgJAJIgYACQgbAAgOgIg");
	this.shape_496.setTransform(1239.7074,541.5442,1.8159,1.8159);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#944934").s().p("AARAHQgbgUgLAAQgKAAgLAEIgJAEQACgHAHgGQANgNATAEQAQAEARARQAVATAIAFIgJALg");
	this.shape_497.setTransform(1240.1366,539.1006,1.8159,1.8159);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#AF5E39").s().p("AhgA0QgigiASgwQAQgrA0gNQA0gOAxAdQAXAOAnAIQglAegxA7IgnA0Qg8gJgegfg");
	this.shape_498.setTransform(1242.904,540.2702,1.8159,1.8159);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#342E2C").s().p("AgfATQgEgBADgKQAEgJAKgHQAPgMAaABQAGABADAFQADAFgBAHQgBAGgEAEQgFAEgHgBQgQAAgSAGIgLACgAgSgBQgJAHAAAJIAIgCQARgFAPAAIAEAAQAGAAADgFIACgFIgBgIIgEgEIgFAAQgXAAgNANg");
	this.shape_499.setTransform(1457.5581,742.7817,1.8159,1.8159);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#663D2D").s().p("AgVAAQAOgRAfABQAJACgBANQgBAMgNAAIgvAGQgGgCAOgPg");
	this.shape_500.setTransform(1457.3715,742.7328,1.8159,1.8159);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#342E2C").s().p("AgYAOQgFAAgCgDQgBgBACgEQAGgGAMgHQAOgKALAAIAFAAQAJACADAIQADAGgBAHQgCAMgHAAgAgKgDQgMAHgDAGIAwADIACgFIABgKQgDgJgHgBIgDgBQgKAAgNAKg");
	this.shape_501.setTransform(1452.0168,738.1131,1.8159,1.8159);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#663D2D").s().p("AAXAQIgmgDIgNgDQgCgDASgLQARgNAMADQAMADAAANQAAAOgFAAIgBAAg");
	this.shape_502.setTransform(1451.9835,738.0769,1.8159,1.8159);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#382F2C").s().p("AgTgJQAJgKATgBIARABIgQABQgQADgIAJQgJAJAGAQIgGACQgHgUALgKg");
	this.shape_503.setTransform(1464.5109,740.4738,1.8159,1.8159);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#382F2C").s().p("AjyExQgIgEgDgFQgXgEgPgSQgHgIACgGIAAgBQAKgWAcgLQAcgLAiAFQAiAFAMgLQALgLgMgXQiDitAYibQAJg/Aig5QAHgLATgUIARgSQhJBTgKBmQgOCTB7CjIABAAQANAagNANQgOANgngFQgegFgaAKQgbALgJAUQgBAEAFAGIAQANIAUAHIACABIAAABQACAEAIAEQAZANBCgBQBPgCBxgWQAegGANgSQALgQgCgYQgBgQgGgPQgQgpADgnQADg+AvgrIAigeQA8g0AXgeQAlgwAKg9IAGABQgKA9gmAyQgWAdg9A1IgiAeQguAqgDA8QgCAnAPAnQASAvgVAcQgOAUghAGQh9AZhPAAQg6AAgagNg");
	this.shape_504.setTransform(1505.7107,690.4015,1.8159,1.8159);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#AF5E39").s().p("Airg4QAVhHA0g7IB/AUICbAsQgVA0gtAoQgcAZg9AkQhCApgcAWQg0ApgeA0Qg5iAAhhzg");
	this.shape_505.setTransform(1491.9415,666.4322,1.8159,1.8159);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#944934").s().p("Ai1E9QhBgEgEgRQgQgDgOgLQgPgLACgJQAKgVAagKQAbgMAhAFQAiAFAOgKQAOgMgNgaQiDisAYibQAOheBDhMIHUBrQgLBFgxA4IhoBgQgwAsgDA/QgBAmAPAmQAMAegGAYQgIAjguAJQh7AYhRAAIgWAAg");
	this.shape_506.setTransform(1505.7186,690.0383,1.8159,1.8159);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#342E2C").s().p("AglANQACgGASgLQASgNAOABQAKABAGAFQAFAFACAFQACAMgKADIhBACQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgLgBQgMAGgHAIIAFgBIA1gBQAFgCgBgIIgFgHQgFgFgHAAIgCAAQgKAAgOAKg");
	this.shape_507.setTransform(1321.8136,736.1548,1.8159,1.8159);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#663D2D").s().p("AgSAAQATgPAOABQAPACAEALQAEALgJADIgKAAIgOgBIgmADQgGgCAVgNg");
	this.shape_508.setTransform(1321.8067,736.1552,1.8159,1.8159);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#382F2C").s().p("AgdAQQAGgXAagHIAbgBIgZADQgXAIgFAUg");
	this.shape_509.setTransform(1329.4313,733.8005,1.8159,1.8159);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#382F2C").s().p("AjbENQgggCgLgKQgHgHACgKIgCgDQgQgaAHgOQAGgKARgEIBbgIQAlgHALgRQAWgeAJg0QAKg9gWggQgIgMgagbQglglgQgYQgbgqABgtQABgSAIgWIAJgSQgYBDAaA3QAPAhAxAwQAbAbAIAMQAWAigKA+QgJA2gWAfQgNARgmAIIhcAJQgPAEgEAHQgHALAQAZIACADIAAACQgCAIAGAGQAJAJAgACIBpABQA3ACA0gDQAwgCAZgcQAOgQAKghIAEgMQAEgLAbgbQAvguAjgxQAtg8ANhGQALg6gHhXIAFAcQAFAggBAOQgBA7gOAuQgQA0giAuQghAvgyAxQgbAbgDAJIgEAMQgKAigPARQgbAegzACg");
	this.shape_510.setTransform(1372.6671,693.2161,1.8159,1.8159);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#C88A55").s().p("AA2ByQgCgcgLgRQgIgMgdgdQgdgdgOgTQgzhGAfhUQgBAzATAtQAVAyAoAfQAtAiAGAwQAFAsgbAuQAHgggCgdg");
	this.shape_511.setTransform(1348.0254,675.8746,1.8159,1.8159);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#AF5E39").s().p("AhyB1QAGg1gSgcQgIgMgdgcQgegegPgUQgyhGAfhTIDZgOID6AxQgLApgKAZQgPAigYAVQgNAMgXANIgrAWQg5AfgeAwQglA9geAdQguAvg0AJQAfgxAGg3g");
	this.shape_512.setTransform(1378.5452,681.9124,1.8159,1.8159);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#944934").s().p("AjnELQgmgGAFgUQgMgUgBgIQgEgUAbgGIBHgFQA3gHAPgVQAWgeAJg1QALg9gXgiQgIgMgdgdQgegegOgUQgyhGAehTIHWAjQAHBagMA8QgOBDgrA8QghAugrArQghAhgEAKIgIAYQgGASgIAMQgaAlg4ACg");
	this.shape_513.setTransform(1372.6083,692.9437,1.8159,1.8159);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#342E2C").s().p("AgmARIgBgBQgBgCADgFQAVgZAoAAIACAAQAGAAAEAFQAHAIgFAPIgBACIgDgBIgbgCQgXAAgTAGIAAAAgAgNgDQgMAFgGAJIAmgFIAZACQAEgLgFgFQgCgDgEAAIgBAAQgWAAgPAIg");
	this.shape_514.setTransform(1317.4216,733.4373,1.8159,1.8159);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#663D2D").s().p("AgWAAQAUgOAdAAQALACAAAMIgCALIgXgCQgagBgWAHIgBAAQgGAAAUgPg");
	this.shape_515.setTransform(1317.1412,733.455,1.8159,1.8159);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#382F2C").s().p("ACQgsQhSgghugEQhSgChbANIhLANIgCgEIBMgOQBbgNBTADQB0ADBUAjQBBAaArArQASASAVAtQgwhYhrgqg");
	this.shape_516.setTransform(1381.6372,575.2837,1.8159,1.8159);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#AF5E39").s().p("Akrg7IBLgNQBbgNBTACQEJAJBVCeg");
	this.shape_517.setTransform(1382.0004,575.3873,1.8159,1.8159);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#382F2C").s().p("AhIF2QgGgBhAgnQhphAg7gfQhsg7hKgXQhFgWgsgrQgagZghg2QgWgkgOgPQgWgbgdgNIADgEQAeANAXAcQAOAQAXAkQAgA1AaAZQAqAqBEAVQBKAXBuA7ICjBgQA/AmAGABQDrAhEBhgQBtgqBVg3QBTg3Aog2QAXiXiChsQhjhRiQgfQg5gMhDgFIkBgRQg4gMhigfIhYgcIACgFIBYAdQBiAeA4AMQArAJBjACIBxAGQBEAFA5AMQA2AMA1AVQBSAiA7AxQBAA2AbBDQAbBBgLBLIAAABIgBAAQgpA4hWA4QhVA4hrAoQi/BIi8AAg");
	this.shape_518.setTransform(1424.3948,633.4744,1.8159,1.8159);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#AF5E39").s().p("AB9E7Qg9gLgogyQgkAXjCgQQipgPgbgJQhjgfg6haIgqhBQgagigigQIA8hdQBBhmAdggQBAhJBvgPQA8gHBpALQA7AGBNAiQBXAlAmAIICoANQCBAEBTARQA/ANA8AbQA6BPAGBbQAHBig4BKQgkANghAQQgzgNhBgXIg3gUQgCAngnAoQgmAng3AUQgpAQgnAAQgRAAgQgDg");
	this.shape_519.setTransform(1408.9457,618.4776,1.8159,1.8159);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#944934").s().p("AhHFzIiahaQikhghigfQhjgfg5hZIgqhBQgagigigPIIBkrIBXAdQBiAfA5AMICnAMQCBAEBUASQCSAfBkBUQCCBsgYCXQgoA3hTA3QhWA4htApQi/BIi0AAQg+AAg+gJg");
	this.shape_520.setTransform(1424.2744,633.4864,1.8159,1.8159);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#382F2C").s().p("AhnD9IgfgHQgLgGgBgHQgCgMAMgeIAAAAIABgBQAPgIAagBIATgDQAWgMACgXQABgVgNgUQgMgSgogiQgjgdgOgRIgCgCIACgBQApgiAwgwQBehfAqhDIAIgNIgDAPQgMBJASBJQAOA5AeA0QAJAQARAWIARAXQAHANABAQQACAcgjAoQgiAogxAaQgjATg9AAgAhEhQQgzAygnAhQAPARAhAbQAoAhAMAUQAPAVgCAXQgCAZgYANIgXAEQgXAAgNAIQgLAbABAKQABAHAIAEIAdAGIA5AEQA7AAAhgSQAwgaAigmQAigngCgbQgBgOgHgNIgQgXQgQgUgLgSQhEh4AQh9QgqA/hUBWg");
	this.shape_521.setTransform(1547.6165,692.3535,1.8159,1.8159);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#944934").s().p("Ag9D4Qg4gCgQgIQgKgEgBgIQgBgKALgeQAPgHAUgBIAZgEQAXgNACgYQACgVgOgVQgMgRgjgfQgpgjgOgOQAogjAwgvQBghgAqhDQgMBDAPBFQANA+AhA7QAGAKAcAkQAQAVABAVQACAbgiAoQgiAngxAaQghASg6AAIgSAAg");
	this.shape_522.setTransform(1547.662,693.4317,1.8159,1.8159);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#382F2C").s().p("AgRgEIgEgUIAGARQAMASAZAKIgCAEQgcgIgJgVg");
	this.shape_523.setTransform(1295.384,704.2928,1.8159,1.8159);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#382F2C").s().p("AgKgEIgGgSIAKARQALARAMAHIgEAEQgPgJgIgSg");
	this.shape_524.setTransform(1290.1634,710.5575,1.8159,1.8159);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#382F2C").s().p("AgFgEIAAgPIADAOQADAPAFAIIgGACQgEgIgBgQg");
	this.shape_525.setTransform(1281.8559,710.1489,1.8159,1.8159);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#382F2C").s().p("AgEgFIgNgSIARARQAPASADALIgHABQgCgKgNgTg");
	this.shape_526.setTransform(1303.056,679.234,1.8159,1.8159);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#382F2C").s().p("AiyDNIgBAAQgMAAgKgEQgRgJgGgVQgbhoAShDQAOgzAogbIAQgKQA5gnAVgVQAigjAAgjIAAgEICLBTQCEBTAVAqIABABIgCACQgoAhhTAPIhpAIIg5gEQACAPgHAZQgHAaABAPQAHAngNAMQgGAGgLgBQAEANgKALQgKALgNAAIgKgCQgJAMgOAAQgTABgSgTgAhSiQQgVAVg4AmIgQAKQgsAfgMA+QgLA+AYBaQAJAeAeABIAEAAIABABIALAIQAMAJAKAAQAMgBAIgLIACgEIACACQAEAEAFAAQAKgBAHgIQAKgLgGgNIgCgEIAGABQALACAFgFQAMgLgHglQgBgQAHgaQAHgbgCgOIgBgFIAFACIA7AEIBmgIQBQgNAoggQgUgnh3hNQg/gohNgsQgCAigjAjg");
	this.shape_527.setTransform(1314.6755,676.6464,1.8159,1.8159);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#C88A55").s().p("AheAlQANg6ArgeQBFgwATgSQAoglgBgmIAEACQAIAPgBASQgCARgMAPQgRAWg0AlQgwAjgSAaQgeAngHA4QgFAmAHBBQgXhcANhAg");
	this.shape_528.setTransform(1289.5097,672.0159,1.8159,1.8159);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#AF5E39").s().p("AhsC9QgZheANhAQANg6ArgfQBFgwATgSQAoglAAgmIA6AhQAFAogEAVQgHAhgfAQIg4ATQghALgGAQQgKAggLBZQgRBLg4AOg");
	this.shape_529.setTransform(1294.0692,673.287,1.8159,1.8159);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#944934").s().p("AibDYIgVgOIgTgDQgTgIgHgWQgYheANhAQAMg6AsgfQBGgwATgSQAoglgBgmICCBNQCIBWAUAqQgwAohuALQhVAKgrgKQADAPgIAaQgHAbABAQQALA8gjgHQAIAQgQANQgPAMgMgJQgJAOgNAAQgHAAgIgEg");
	this.shape_530.setTransform(1314.5861,676.9188,1.8159,1.8159);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#342E2C").s().p("AABASQgYgLgIgRIgBgCIACgBQAZgMAFAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAWAnAHAHIAAADIgDACQgLAAgSgJgAAYAVIgYgpQgGAAgTAKQAIAMARAJQAMAHAMADg");
	this.shape_531.setTransform(1303.6008,710.3305,1.8159,1.8159);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#663D2D").s().p("AAGARQgagLgKgSQAdgOABACIAdAvQABABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgEAAgUgIg");
	this.shape_532.setTransform(1303.7836,710.4894,1.8159,1.8159);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#342E2C").s().p("AADAOQgUgLgIgMIgBgCIACgCQAYgMAGADIABAAIAAABQAOAiAGAGIAAADIgCABQgGAAgQgJgAASAQIgQgiQgFABgPAHQAKAOAaAMg");
	this.shape_533.setTransform(1298.017,716.2383,1.8159,1.8159);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#663D2D").s().p("AgXgKQAOgHAJgCIADgBIAVApQgigLgNgUg");
	this.shape_534.setTransform(1298.1532,716.1867,1.8159,1.8159);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#342E2C").s().p("AABANQgSgMgHgMIAAgCIACgBQAYgKAGADIABAAIAAABQALAiAEAFIABADIgEABQgFAAgPgKgAAPAPIgMggIgUAHQAJANAXAMg");
	this.shape_535.setTransform(1290.799,718.3506,1.8159,1.8159);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#663D2D").s().p("AgUgMQAWgJAEACIAPAnQgfgMgKgUg");
	this.shape_536.setTransform(1290.7536,718.3341,1.8159,1.8159);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#342E2C").s().p("AgBAKQgPgOgCgOIAAgDIAhgBIABAAIAAABQAAAjADAGIAAADIgEAAQgEAAgMgNgAALAOIgBghIgWACQAGARARAOg");
	this.shape_537.setTransform(1282.0829,716.6406,1.8159,1.8159);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#663D2D").s().p("AgPgSIAcgCIAAATQABASACAEQgbgSgEgVg");
	this.shape_538.setTransform(1282.0375,716.5044,1.8159,1.8159);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#39302C").s().p("AgFgGIgKgIIALAHQANAIAHAMIgDACQgHgMgLgJg");
	this.shape_539.setTransform(618.4622,838.8594,1.8156,1.8156);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("AgEAFQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAgCACgCIAEgCQAHAAAAAGQAAAHgHAAg");
	this.shape_540.setTransform(577.4744,833.7757,1.8156,1.8156);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("AgEAAQAAgEAEAAIADACIACACQAAAFgFgBQgEABAAgFg");
	this.shape_541.setTransform(545.5648,830.3714,1.8156,1.8156);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#292929").s().p("AgLARQgFgHAAgKQAAgJAFgHQAFgHAGAAQAHAAAFAHQAFAHAAAJQAAAKgFAHQgFAGgHABQgGAAgFgHg");
	this.shape_542.setTransform(578.473,835.5913,1.8156,1.8156);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#39302C").s().p("AgEACQAFgIAHgDIABACQgHADgFAHIgEAHg");
	this.shape_543.setTransform(562.5409,802.3653,1.8156,1.8156);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#372F2C").s().p("AgLBbIgLgFQATAHAWgCQAXgDARgKQAfgTAGgnQAFgggJgZQgJgagWgOQgTgMgZgBQgXgBgRALIgTAPIgQATQgVAbgVAPIAmgtQAVgYAQgKQASgMAYABQAaABAUANQATALAKAUQAOAdgGAoQgGAqghATQgXAOgeAAg");
	this.shape_544.setTransform(619.3519,809.6208,1.8156,1.8156);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#C07B42").s().p("AgwACQAUgZAQgKQAUgNAdAEQAgADAUAWQg1gVgrAcIglAhQgXAVgVAAQATgOAVgcg");
	this.shape_545.setTransform(617.1005,800.739,1.8156,1.8156);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#372F2C").s().p("AgLAGIAKgPQANgQAKgCQAHgCAGAFQAJAIgFALQgDAGgIAEQgOAHgYgCQgHALgXAHQAWgMAHgKgAAXgXQgOACgQAbQAjADAIgQQADgIgHgGQgDgCgEAAIgCAAg");
	this.shape_546.setTransform(617.8073,811.6844,1.8156,1.8156);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#944934").s().p("AAOgJQgHAKgUAJg");
	this.shape_547.setTransform(613.0608,815.0293,1.8156,1.8156);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#944934").s().p("AgZARIABgBQAHgOAMgKQAPgOAKAJQAKAJgJALQgJALgaAAIgLgBg");
	this.shape_548.setTransform(620.279,810.0992,1.8156,1.8156);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#944934").s().p("AgOgCQAKgZATgDQAQgCAIANQgPgIgRAPQgKAJgGANQgFAJgYAMQARgPAHgSg");
	this.shape_549.setTransform(617.4636,811.2264,1.8156,1.8156);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#AF5E39").s().p("AgUBaIgvglIgfg4QAUgPAWgaQAUgZAQgKQAbgRAmALQApAMANApQADA1gaAaQgTASgYAMQgaAMgYABg");
	this.shape_550.setTransform(618.5901,809.0608,1.8156,1.8156);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#944934").s().p("AgVBZIhPhdQAUgPAVgbQAUgZAQgKQAmgYAtAZQAyAdgLBIQgHAwgqARQgTAIgUAAQgPAAgRgFg");
	this.shape_551.setTransform(619.0494,809.4852,1.8156,1.8156);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#342D2D").s().p("AgIgLIgVgEQAUgQATAUQAPAOAFAUQgPgZgXgJg");
	this.shape_552.setTransform(578.7454,816.6845,1.8156,1.8156);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#3B322E").s().p("AAAgEIgJgFIAEAAQAFABACACIAGAGIACAKQgCgJgIgFg");
	this.shape_553.setTransform(568.4417,855.3816,1.8156,1.8156);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#3B322E").s().p("Ag5AsQAGgbgMgTIgBgEIADABIAVAAQAZgCAkgTQAYgLASgNIACgBIAAADQgCANgUAaQgTAYgUARQgJAKgOAFQgNAFgLAAQgMAAgCgIgAg0AsQAAAEAJAAQAYAAAVgTIAigjQATgYAFgNQg8AngoADIgSAAQAJATgDAag");
	this.shape_554.setTransform(557.4571,863.9151,1.8156,1.8156);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFF8F8").s().p("AgBADQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAABAAIACgCIAAADQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAg");
	this.shape_555.setTransform(550.0232,870.1563,1.8156,1.8156);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#BF4C4C").s().p("AAFgIIABABQgHAGgEAKQACgLAIgGg");
	this.shape_556.setTransform(554.9153,868.091,1.8156,1.8156);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#BF4C4C").s().p("AgbAVIgFABIgDgBQgHgDAEgHIgCAAQABgGAFgGQAKgQARAAIAOACQALgFALAAIAKABIACABIgDADIgTARQgYATgVABgAgegCQgGAHgBAGIgBABQgCAGAEABIAKABQASAAAagUIATgRIgIgCQgLAAgLAHIAAAAIgOgDQgOAAgJANg");
	this.shape_557.setTransform(554.6883,869.135,1.8156,1.8156);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#F8B2B3").s().p("AgXAOQgEgBAAgEIABgDIACgGQAMgRALACQAIACAAAMQANgRAGAHQADACgDAGIgJAHQgTAMgNAAQgEAAgEgCg");
	this.shape_558.setTransform(552.4991,870.1545,1.8156,1.8156);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#F6999B").s().p("AgiAUQgEgBAAgEIAAgEQACgJAIgIQAOgQAVAJQAIgEAIgCIAQABIgUATQgTAPgPAEg");
	this.shape_559.setTransform(554.5975,869.135,1.8156,1.8156);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#522F2E").s().p("AgLAVQAEgZgLgVIAVAAIAKgBQgGAaAMAYIgVADQgJAAAAgGg");
	this.shape_560.setTransform(549.6046,867.9549,1.8156,1.8156);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#392D2E").s().p("Ag3ArQAEgbgLgUIAWAAQAZgBAlgUQAXgLASgNQgDANgUAaQgUAYgRAQQgRAPgVADIgKACQgKAAAAgHg");
	this.shape_561.setTransform(557.5933,863.9814,1.8156,1.8156);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#342E2C").s().p("AgDAuQgKgBgMgMQgLgKgCgIIgCgCQgTgTAMgUQAFgIAMgFQAOgGAQAAQAVAAAVALQAKAGABANIgDAPIgJAMIAAAAIgCAAIgKgGQgLgKgHAAQgIAAgDAEQgBAGAGAGIAJACIAQgBQAEAAACACIAAAEQgDAGgNAKQgPALgIAAgAgVAgQALAJAHABIAAAAQAHAAAOgLIAPgOIgDAAIgQABQgHAAgFgDQgHgIADgIQACgIALABQAJAAAMALIAHAFIAHgJQADgHAAgHQgBgLgIgEQgTgLgVAAQgPAAgNAGQgLAFgEAGQgKAQAOAQQAEgOAKAAQAFAAACAFQACAGgDAEQgDAFgLACIgBAAQAEAHAJAJgAgfABQgEAEgBAHIgBABIAEgBQAIgCACgDQACgDgBgEQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQgDAAgDADg");
	this.shape_562.setTransform(536.7071,848.2099,1.8156,1.8156);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#3B322E").s().p("AgCgLIADAAIACAWIgDABg");
	this.shape_563.setTransform(535.8966,858.332,1.8156,1.8156);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#8A5E45").s().p("AgTAAIADgDIALgEQANgEAPAGQggACgNANQAAgEADgGg");
	this.shape_564.setTransform(531.8114,843.7742,1.8156,1.8156);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#6C3E2E").s().p("AgkAYIAAgBIAJgDQAJgEgCgJQgCgGgHAEQgHADgCAMQgTgUAMgRQAHgMAZgFQAbgEAbAOQALAGgBAQQgCAOgJAGQgCABgJgIQgKgKgIAAQgLgBgBAIQgCAHAHAGQAFAEAMgBQALgCACACQgXAMgRAAQgSAAgMgMg");
	this.shape_565.setTransform(536.7383,846.7968,1.8156,1.8156);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#54352D").s().p("AgDAsQgJgBgLgLQgLgKgCgHIAJgDQAJgEgCgIQgCgGgHAEQgHACgCAMQgTgTAMgSQAHgMAZgFQAbgEAbAOQALAGgBAQQgCAOgJAGQgCABgJgIQgKgJgIAAQgLgBgBAHQgCAHAHAGQAFAEAMgCIAOABQACADgQAMQgQANgIAAIAAAAg");
	this.shape_566.setTransform(536.7383,848.2056,1.8156,1.8156);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#342E2C").s().p("AgeAaQgNgLAAgOQAAgPANgKQAMgLASAAQAVAAAOANQAJAKAAAMQAAAPgOALQgNAKgRABQgSAAgMgLgAgcgWQgLAJAAAOQAAANALAJQAMAKAQAAQAPAAAMgLQANgKAAgMQAAgKgIgJQgMgNgUAAQgQAAgMAKg");
	this.shape_567.setTransform(536.8044,847.983,1.8156,1.8156);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#41322D").s().p("AgdAYQgMgJAAgOQAAgOAMgKQANgKAQAAQARAAANAJQANAKgBAOQgBANgMALQgMALgRAAQgRAAgMgLg");
	this.shape_568.setTransform(536.8061,847.983,1.8156,1.8156);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#292929").s().p("AAAAnQgSAAgJgJQgKgLACgSQACgPAKgMQAKgLAMgBIABAAQAMAAAKALQAKAKADAQQADASgJALQgJALgTAAgAgWgYQgJALgCAOQgBASAJAJQAIAKASgBQATgBAHgJQAJgKgDgRQgDgPgJgLQgKgKgLAAIgBAAQgLABgKALg");
	this.shape_569.setTransform(577.2574,833.7757,1.8156,1.8156);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgXAbQgLgJAAgPQACgOAKgMQAKgLAMAAQAMgBAKALQAKAKADAPQACAPgLAKQgKAIgPABIgBAAQgOAAgJgIg");
	this.shape_570.setTransform(577.2281,833.2771,1.8156,1.8156);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#B9B9BA").s().p("AgdAZQgGgKABgOQABgPAKgLQAKgMAMAAQAMgBAKAMQAKAKADAQQAGAlgnABIgBAAQgUAAgJgNg");
	this.shape_571.setTransform(577.2618,833.8207,1.8156,1.8156);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#944934").s().p("AglBCQgPgNAHg9QAIhBAfgEQAVgDASAjQAUApgHA/QgBAOggAEIgNABQgXAAgOgMg");
	this.shape_572.setTransform(577.1823,826.6783,1.8156,1.8156);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#3B322D").s().p("AgnB4QgIgJABgMQADgWgKgZQgUgDgTgKQgJAEgKAAQgQAAgGgNQgIgSAGggQAGgcAJgPIAAgBQASgSAugZQAtgXAQgCQAQgBATARQAQAOALASQAHAOAeATIAaATQAOAUgJAbQgEAPgOAVIgDAEIgHAOQgJAWgIALQgPATgVAGIgyAHQgeAAgNgOgAhcAjIABAAQASAKAWADIABAAIAAABQAMAagEAYQgBALAIAHQALANAcAAQAVAAAbgHQAUgFAOgSQAIgLAKgWIAGgOIADgEQAjgygVgcQgGgGgTgNIgWgQQgMgJgFgJQgKgRgPgNQgSgRgOABQgQACgsAXQgtAYgSASQgJAPgFAcQgGAeAIAQQAEALAOAAIASgEg");
	this.shape_573.setTransform(552.9665,853.7879,1.8156,1.8156);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#DDB393").s().p("AgxAhIgNAAQATgTAsgXQAsgXASgCQgSAIgcASQgoAZgOASQABgDgNABg");
	this.shape_574.setTransform(542.6144,836.3175,1.8156,1.8156);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#C68150").s().p("AhbA/QgJAQgRgEQgQgDABgOQAAgSAFgWQAGgTAGgLQASgSAugYQAsgYAQgCQAPgBASARQAQANAKATQAIAMAXAQIAhAXQACAEgDAEQgEAFgLAAQgigEgcASQgmAbgbAHIgnABQgZgEgQgOg");
	this.shape_575.setTransform(552.335,844.6189,1.8156,1.8156);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#A3633B").s().p("AgtBlQAEgXgLgaQgVgDgUgKIgQAEQgRACgGgOQgHgQAGggQAFgcAJgPQASgSAugYQAsgYAQgCQAPgBASARQAQANAKATQAIAMAXAQIAhAYQAPAUgMAeIglBIQgQAbgZAGIhOACQgVgIABgUg");
	this.shape_576.setTransform(553.0152,853.3339,1.8156,1.8156);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#342D2D").s().p("AADgSQAJgFAFAJQgLgCgMASQgHAJgDAKQAIghALgGg");
	this.shape_577.setTransform(543.8399,817.7981,1.8156,1.8156);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#292929").s().p("AgHALQgCgEgBgHQAAgFAEgFQADgEADAAQAEAAADAEQADAFABAFQgBAHgDAEQgDAEgEAAQgDAAgEgEg");
	this.shape_578.setTransform(546.1095,831.5969,1.8156,1.8156);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#292929").s().p("AgBAhQgLAAgGgHQgIgHABgTQABgMAJgKQAIgKAIAAIABAAQAJAAAGAJQAGAIACAOQADAPgJAKQgGAIgNABgAgOgUQgIAJAAALQgCARAHAIQAFAGAMAAQALAAAHgIQAHgJgCgPQgCgNgGgIQgGgIgHAAIgBAAQgHAAgIAKg");
	this.shape_579.setTransform(544.1589,830.099,1.8156,1.8156);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AgYAEQABgMAJgKQAIgJAHAAQAKgBAGAKQAHAIABAMQABAWgaAEIgFAAQgUAAABgYg");
	this.shape_580.setTransform(544.148,829.4064,1.8156,1.8156);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#B9B9BA").s().p("AgYAAQABgLAJgKQAIgJAHgBQAJAAAHAJQAFAIADAOQACALgGAJQgGALgPABIgCAAQgYAAACggg");
	this.shape_581.setTransform(544.1929,830.0541,1.8156,1.8156);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#944934").s().p("AgYAxQgIgKALguQALgyAQgCQAMgBAHAbQAHAfgJAwQgCALgSACIgFABQgPAAgHgLg");
	this.shape_582.setTransform(544.1156,825.0459,1.8156,1.8156);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#372F2C").s().p("AhoDhIgugGQgQgHgHgYQgJgfgWgSQgNgMgigRIgHgEIgBgBIAAgBQgBgcALgsQAMgrAPgYIABgQQgBglAFgXQAJgqAbgcQAfgfAmAAQAYAAAWAMQA1gZAsAAQBGABA8AyQArAoAXBCQANAjAIAxIACAIQAIAMACAYQACAagHAaIgBACIgJgIQAEAYgPAXIgCAEIgCgFQgBgIgFgEQAAAggXAPIgDADIAAgYQgLASgYALQgmATg+AAIiaALgAiyizQgaAbgJAqQgFAXABAkIgBASQgPAXgLAqQgMAsABAbIAFADQAkASANAMQAWATAKAgQAGAXAPAFIAsAGIAMAAICbgLQBIAAAmgaQANgIAHgJIAFgJIADgIIABAgQANgKADgUIABgRIAAgEIAIAGIAGAKQAJgQAAgRIgCgOIgDgKIAPARQAHgZgDgYQgCgVgIgLIAAAAIAAgBIgCgJQgUh9hCg+Qg7gyhEABQgtgBgzAZIgBABIgOgHQgQgGgQAAQgkAAgeAdg");
	this.shape_583.setTransform(576.1458,836.8168,1.8156,1.8156);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#C07B42").s().p("Ah0ABQgSABgfANQAighAqAGQAWACAOAJQAtgVAngDQBIgFA/AwQgWgOgTgFQgugOg4AIQg2AHgsAbQgNgagcAAg");
	this.shape_584.setTransform(573.707,801.0981,1.8156,1.8156);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#AF5E39").s().p("AgzDFQgFgCgFAFQhBgMgjg0QgOgQgXgEIgsADQABgdAKgoQAMgpAOgVQAAgbACgdQAGg4AhghQAjgjAqAFQAWACAOAKQAvgWAngDQBLgFBBA3QAtAqAXBGIgFABIgBAAIgJgCIACACQgKACgGAMQgGAJgCALQgCAYgCA1QgGAsgdAUQhLA3iDAIg");
	this.shape_585.setTransform(573.3439,832.7389,1.8156,1.8156);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#944934").s().p("AiTDaQgSgGgHgYQgKghgYgUQgMgKgogVQgBgcAMgrQALgsAPgYQAAgbACgcQAGg4AhgiQAjgjAqAFQAWADAOAJQAvgWAngCQBLgFBBA2QAvAsAXBJQAGATAMA+QAIALADAXQACAagHAaIgMgMIACAQQAAATgLASQgCgIgFgFIgEgFIgCAUQgDAVgQALIgBgbIgFAIIgTASQgnAbhKAAIiaALg");
	this.shape_586.setTransform(576.1652,836.8241,1.8156,1.8156);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#372F2C").s().p("AgHBRQgwgKgTggQgSgdAMglQAIgcAZgPQAYgOAcAFQASADAQAMQARANAaAGIAEABIgDACQgZAaghAxQgRAZgLAWIgBABgAgthDQgYAOgIAbQgKAkAQAbQATAeAuAKQAthPAngoQgagHgPgLQgPgLgSgEIgOgBQgSAAgRAJg");
	this.shape_587.setTransform(538.5237,808.2405,1.8156,1.8156);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#C07B42").s().p("AAVAKIgfgTQgWgKggAFQATgMAWACQAYABAUAPQASAMAaAGIgOAPQgNgEgRgLg");
	this.shape_588.setTransform(541.5704,798.4466,1.8156,1.8156);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#944934").s().p("AgVAIQgUgMgIgWQAVAXAaADQAbACAZgSIgbAqQgZgEgTgOg");
	this.shape_589.setTransform(533.1731,817.8435,1.8156,1.8156);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#372F2C").s().p("AgFAYQgKgCgFgDQgIgGgFgJQgEgJACgIQADgLAOgBIAFAAQALADAKANIAGAHQAOAMAFACIADABIgIALIAAAAIgBAAQgJACgIAAQgIAAgHgCgAgfgMQgCAHAEAHQAEAJAIAFQAEADAIABQALADAUgCIAEgGQgFgDgNgMIgHgGQgKgNgJgCIgDAAQgMABgCAIg");
	this.shape_590.setTransform(536.2446,809.242,1.8156,1.8156);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#944934").s().p("AgSARQgNgIgBgOQgCgQASgCQAIAAAIAIIAWAVQAHAGAFACIgHAIIgQACQgTAAgKgHg");
	this.shape_591.setTransform(536.1128,809.2193,1.8156,1.8156);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#944934").s().p("AALAGQgSgSgHAAQgHABgIADIgGAEQACgGAEgGQAJgLANAEQALADAMAOIAUAVIgGAKg");
	this.shape_592.setTransform(536.3959,807.2334,1.8156,1.8156);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#AF5E39").s().p("AhDAtQgXgdANgqQALglAkgMQAjgMAiAaQARAMAbAHQgaAZgiAzIgbAuQgqgIgVgbg");
	this.shape_593.setTransform(538.3358,808.1898,1.8156,1.8156);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#342E2C").s().p("AgXATQgDgCACgJQADgJAHgHQAMgLAUABQAJACgBAPQAAAGgEAEQgEAEgFgBQgLgBgPAGIgIACgAgNgBQgHAIAAAHIAGgBQAOgGAKAAIADAAQAFABACgFIABgFQABgKgFgBIgDgBQgRAAgKANg");
	this.shape_594.setTransform(691.969,995.6686,1.8156,1.8156);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#663D2D").s().p("AgRAAQAMgRAXABQAHACgBANQgBAMgJgBIgkAHQgFgDAKgOg");
	this.shape_595.setTransform(691.8552,995.6279,1.8156,1.8156);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#342E2C").s().p("AARASIgjgEQgEAAgCgDQAAgBACgEQAEgGAJgHQAKgKAJAAIADABQAHACADAHQACAGgBAIQgBALgGAAgAgIgDQgJAHgCAFIAkAEIACgFIAAgJQgBgJgGgBIgCgBQgHAAgLAJg");
	this.shape_596.setTransform(687.7453,991.0998,1.8156,1.8156);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#663D2D").s().p("AARAPIgcgCQgJgBgBgCQgCgDAOgLQANgNAJADQAJADAAANQAAANgEAAIgBAAg");
	this.shape_597.setTransform(687.7602,991.0957,1.8156,1.8156);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#382F2C").s().p("AgOgJQAGgIAOgDIAOABIgMACQgNAEgGAHQgHAJAFAQIgEABQgGgSAJgLg");
	this.shape_598.setTransform(697.2621,993.4148,1.8156,1.8156);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#382F2C").s().p("Ai3EoQgHgFgBgEQgJgCgIgHIgMgMQgFgJABgFIAAgBQAIgVAVgMQAWgKAZAFQAaAFAJgLQAJgLgKgWQhjioASiWQAHg8Aag3QAFgLAOgTIAOgRQg4BQgHBjQgLCNBdCeIABAAQAKAZgKANQgLANgdgGQgXgEgUAKQgUAKgHATQgBAFAEAFQAEAIAIAFQAIAGAHABIACAAIAAACIAHAHQATANAzgBQA7gCBVgWQAXgFAKgRQAPgagOgrQgLgnABgnQADg8AkgqIAagcQAtgyASgdQAcgwAHg6IAFABQgHA7gdAwQgRAcgvA0IgZAcQgjApgDA6QgBAmALAnQANAtgPAbQgLATgZAGQhdAYg9gBQgtABgTgMg");
	this.shape_599.setTransform(728.4742,944.9375,1.8156,1.8156);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#AF5E39").s().p("AiBg2QAPhFAog5IBgATIB1ArQgQAygiAmQgWAZguAjQgxAngVAWQgoAogWAyQgsh8Aahvg");
	this.shape_600.setTransform(718.0564,921.8336,1.8156,1.8156);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#944934").s().p("AiJEyQgygDgDgRQgMgCgLgLQgLgLACgIQAHgUAUgLQAVgLAZAFQAaAFAKgLQALgLgKgZQhjinASiVQAKhcAzhJIFjBnQgIBEglA2IhQBdQgkAqgCA9QgBAlALAlQAJAdgEAXQgGAhgjAJQhcAYg8AAIgTgBg");
	this.shape_601.setTransform(728.5184,944.6318,1.8156,1.8156);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#342E2C").s().p("AgaAQQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgGAOgLQAOgNALABQAOACACAOQACALgHADIgMABIgHgBIgdADgAgZAOIAAgCIAAAAgAgJgBQgJAGgEAHIAagDIARABQAEgCgBgIQgDgKgKgBIgBAAQgIAAgLAKg");
	this.shape_602.setTransform(588.9874,989.2777,1.8156,1.8156);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#663D2D").s().p("AgOAAQAPgPALACQAKABAEALQADAKgHADIgIABIgKgBIgdACQgEgBAPgNg");
	this.shape_603.setTransform(588.9655,989.2714,1.8156,1.8156);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#382F2C").s().p("AgQAPQAEgXATgGIALAAQgFAAgEACQgRAIgEATg");
	this.shape_604.setTransform(593.8605,987.0147,1.8156,1.8156);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#382F2C").s().p("AilEFQgZgDgIgKQgFgGABgKIgBgDQgNgZAGgNQAEgJANgFIBFgIQAcgHAJgPQARgeAGgyQAHg7gQggIgaglQgcgjgMgYQgUgoAAgsQABgRAGgVIAHgSQgSBAAUA2QALAfAlAvQAUAaAHAMQAQAhgIA8QgGA0gRAeQgKARgdAHIhFAJQgMADgDAIQgFAKAMAYIACAEIAAABQgCAIAEAFQAIAJAYACIBQABQAkACAsgCQAkgCAUgcQAKgPAIggIACgMQAEgLAUgZQAkguAaguQAig6AKhEQAJg4gFhUIAGBIQAAA4gLAtQgMAygaAtQgZAsgmAxQgUAYgDAKIgDAMQgIAhgLAQQgUAdgnACg");
	this.shape_605.setTransform(627.5045,947.7063,1.8156,1.8156);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#C88A55").s().p("AApBuQgCgagIgRQgGgMgVgbQgWgdgLgTQgmhDAXhRQAAAxAOAsQAQAwAeAfQAhAhAFAuQAEApgVAtQAFgfgBgcg");
	this.shape_606.setTransform(608.8377,930.9118,1.8156,1.8156);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#AF5E39").s().p("AhXBxQAEgzgNgbQgGgMgVgbQgXgdgLgTQgmhEAXhRICkgMIC+AvQgIAngIAYQgMAigSAUIg8AuQgrAdgXAvQgcA7gXAcQgiAtgnAJQAYgwADg1g");
	this.shape_607.setTransform(632.0184,936.7218,1.8156,1.8156);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#944934").s().p("AivEDQgcgGAEgUQgJgTgBgHQgDgUAUgGIA1gFQArgHALgUQARgdAGgzQAIg8gRggQgGgMgVgcQgXgdgLgTQgmhEAXhRIFkAjQAGBXgKA6QgKBBghA6QgZAsghApQgZAhgDAJIgRA1QgUAjgqADg");
	this.shape_608.setTransform(627.5341,947.434,1.8156,1.8156);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#342E2C").s().p("AgdARIAAgCQgCgBAEgFQAPgZAfAAIABAAQAGACACAEQAFAIgEANIgBACIgCAAIgVgCQgRAAgOAGgAgJgCQgJAEgFAJIAcgEIAUABQACgLgDgFIgFgDIAAAAQgRAAgLAJg");
	this.shape_609.setTransform(585.6291,986.5608,1.8156,1.8156);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#663D2D").s().p("AgRAAQAOgOAXABQAIABAAAMIgCALQgbgGgaAJQACgHAIgHg");
	this.shape_610.setTransform(585.6902,986.5593,1.8156,1.8156);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#382F2C").s().p("ABtgrQg/gfhTgDQg+gDhEANIg5ANIgCgFIA6gNQBFgMA+ACQBYAEBAAgQAxAaAhAqQAOASAQArQgkhVhSgpg");
	this.shape_611.setTransform(634.349,833.6471,1.8156,1.8156);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#AF5E39").s().p("Ajig5IA4gNQBEgMBAACQDJAIBACZg");
	this.shape_612.setTransform(634.6213,833.7497,1.8156,1.8156);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#382F2C").s().p("Ag2FqQgGgCgwglQhQg+gsgeQhSg6g4gWQg0gUgigqQgUgZgYgzQgRgjgLgQQgRgZgWgMIADgFQAWAOASAaQAKAPASAkQAYAzAUAYQAgApA0AVQA4AVBSA6QAtAeBQA+QAvAlAFABQCzAgDCheQBTgnBBg2QA/g0Aeg1QARiShihpQhMhPhtgdQgrgMgzgFIhWgFQhMgCghgJQgqgMhLgdIhDgcIACgFIBDAcQBKAeAqAMIAyAIICRAIQAzAEArAMQApALAoAVQA+AgAtAwQAxA1AVBAQAUA/gJBJIAAABQgfA2hBA2QhCA2hRAnQiQBFiQAAg");
	this.shape_613.setTransform(666.8257,889.924,1.8156,1.8156);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#AF5E39").s().p("ABfEwQgvgLgegxQgbAXiUgQQh8gOgYgJQhLgegshXIggg/QgTghgagPQBRipAjgzQAyhHBUgOIB8AEQAtAGA7AgQBCAlAcAHQAeAIBiAEQBiAEA/ARQAvANAuAaQArBNAFBXQAFBfgqBIIg0AcQgngNgxgWIgqgTQgBAmgeAmQgcAmgqATQggAPgeAAQgMAAgMgCg");
	this.shape_614.setTransform(655.05,875.6667,1.8156,1.8156);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#944934").s().p("Ag1FnIh1hYQh8hchLgeQhLgegshXIggg+QgTghgagPIGFkgIBCAbQBLAeAqALQAeAIBiAEQBiAEA/ARQBvAeBMBSQBiBpgRCRQgfA2g/A0QhCA3hTAoQiRBFiJAAQguAAgugIg");
	this.shape_615.setTransform(666.7263,889.9838,1.8156,1.8156);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#382F2C").s().p("AhOD1QgUgDgEgEQgIgFgBgIQgBgLAJgdIAAgBIABAAQALgIAUgBQALAAADgDQARgMABgWQABgUgKgTQgIgRgfgiQgagbgMgRIgBgCIBFhQQBIhcAfhAIAGgOIgCAPQgQB+A2B5IAhA7QAFANABAPQABAbgaAmQgaAnglAZQgbATgugBgAg0hOIhEBRQAKAPAaAcIAXAZQAMAOAFALQALAVgBAWQgCAYgSANIgRAEQgRAAgLAIQgIAaABAKQAAAGAGAFIAWAFIAsAEQAsAAAagRQAkgaAaglQAZglgBgaQgBgOgFgNIgMgVQgOgWgGgPQg0h1AMh4QggA9hABSg");
	this.shape_616.setTransform(760.3156,946.8439,1.8156,1.8156);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#944934").s().p("AguDwQgrgCgMgIQgIgEAAgHQgBgLAIgcQALgHAQgBIATgEQASgMABgYQABgUgKgUQgJgRgbgdQgfgigKgOIBChQQBJhcAghBQgSB9A3B7IAaAtQAMAUABAVQABAagaAmQgaAmglAaQgaARgsAAIgMAAg");
	this.shape_617.setTransform(760.4023,947.9131,1.8156,1.8156);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#382F2C").s().p("AgNgEIgDgTIAFAQQAJARATAKIgCAEQgVgIgHgUg");
	this.shape_618.setTransform(568.8956,958.4185,1.8156,1.8156);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#382F2C").s().p("AgIgEIgDgRIAGARQAJAQAIAHIgCADQgMgIgGgSg");
	this.shape_619.setTransform(564.992,964.4555,1.8156,1.8156);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#382F2C").s().p("AgDgEIAAgOIACAOQACANAEAIIgFACQgDgIAAgPg");
	this.shape_620.setTransform(558.6373,964.0924,1.8156,1.8156);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#382F2C").s().p("AgEgHIgIgOIAKANQAMASADALIgFABQgCgLgKgSg");
	this.shape_621.setTransform(574.8872,934.4976,1.8156,1.8156);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#382F2C").s().p("AiHDHIgBAAQgJAAgHgGQgNgIgFgUQgVhkAPhBQALgxAegbIALgKQArgmAQgUQAbghAAgiIAAgEIBqBQQBkBRAOAoIABACIgBABQgeAgg/AOQgnAIgpAAIgqgDQABAMgFAaQgGAYABAQQAFAmgKALQgEAGgJgBQADANgHAKQgIALgKAAIgHgCQgHAMgLAAQgOAAgOgRgAg9iMQgRAVgrAlIgLAKQgiAegJA7QgIA8ASBXQAHAeAWAAIADAAIAJAJQAKAIAHAAQAJAAAGgMIACgCIACACIAGACQAIAAAGgIQAHgMgEgLIgCgEIAEABQAJACAEgFQAIgKgFgjQAAgQAFgaQAFgagBgOIgBgEIAEABIAsAFQApAAAlgIQA9gOAdgeQgOgmhbhKQgzgrg3gmQgBAhgaAhg");
	this.shape_622.setTransform(583.4654,931.7288,1.8156,1.8156);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#C88A55").s().p("AhHAkQAJg4AhgdQA0guAPgSQAegkAAglIADACQAGAPgBARQgCARgJAOQgNAVgnAkQgkAigOAZQgXAmgFA2QgEAmAGA+QgShaAKg9g");
	this.shape_623.setTransform(564.421,927.1897,1.8156,1.8156);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#AF5E39").s().p("AhSC3QgThbAKg/QAKg4AhgcQA0gvAOgRQAfglAAglIAsAgQAEAogEAUQgFAfgXAQQgFADgmAQQgZAKgEAPQgIAggIBWQgNBIgrANg");
	this.shape_624.setTransform(567.9083,928.4153,1.8156,1.8156);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#944934").s().p("Ah1DRIgQgOIgOgCQgPgHgFgWQgThbAKg/QAJg4AigdQA1guAOgSQAfgkAAglIBiBLQBnBTAPApQgkAmhTALQhCAKgfgKQABAPgFAYQgGAaABAQQAJA6gcgHQAGAQgLAMQgMAMgJgJQgHAOgKAAQgFAAgGgEg");
	this.shape_625.setTransform(583.4198,931.9155,1.8156,1.8156);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#342E2C").s().p("AABASQgSgMgHgQIgBgBIACgCQAUgMADAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAAQARAmAFAHIABACIgDACQgIAAgOgIgAATAUIgTgoQgDABgQAJQAGAMANAJQAJAGAKADg");
	this.shape_626.setTransform(575.1141,964.2739,1.8156,1.8156);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#663D2D").s().p("AgWgLQANgIAHgCIADgBIAWAtQghgGgMgcg");
	this.shape_627.setTransform(575.2503,964.2285,1.8156,1.8156);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#342E2C").s().p("AACAOQgPgLgGgMIgBgCIACgBQASgMAEADIABABIAAAAQAMAiADAFIABADIgCABQgFAAgMgJgAAOAQIgNghQgDABgMAHQAJAPATAKg");
	this.shape_628.setTransform(570.9382,969.954,1.8156,1.8156);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#663D2D").s().p("AgRgKQALgHAGgCIADAAIAGASQAHASADADQgbgLgJgTg");
	this.shape_629.setTransform(570.9836,969.9932,1.8156,1.8156);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#342E2C").s().p("AABANQgNgMgFgLIgBgCIACgCQASgJAEADIABABQAJAhACAEIABADIgCABQgEAAgMgJgAAMAPQgFgPgEgQQgGABgJAFQAHANARAMIAAAAg");
	this.shape_630.setTransform(565.3551,972.0612,1.8156,1.8156);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#663D2D").s().p("AgPgLIAQgHIADgBIAMAnQgXgMgIgTg");
	this.shape_631.setTransform(565.4005,971.9903,1.8156,1.8156);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#342E2C").s().p("AANAWQgEABgKgNQgKgOgCgNIAAgDIACgBIAXgBIABABIAAABQAAAlABACIAAADgAAJAOIgBghIgQADQADAQAOAOIAAAAg");
	this.shape_632.setTransform(558.7281,970.3563,1.8156,1.8156);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#663D2D").s().p("AgLgSIAVgBIAAASQABASABADQgUgRgDgVg");
	this.shape_633.setTransform(558.8594,970.3876,1.8158,1.8158);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#39302C").s().p("AgTAUQAJgRAQgOIAOgLIgMANQgOAPgJARg");
	this.shape_634.setTransform(847.117,551.8012,1.8158,1.8158);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgFAHQgCgCgBgEQAAgDACgDQACgDAEAAQADgBADADIADAGQABADgDADQgDADgDAAQgDAAgDgCg");
	this.shape_635.setTransform(901.8633,539.1739,1.8158,1.8158);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgDAFIgCgEQgBgFAGgBQAGgBAAAGQAAAGgGABg");
	this.shape_636.setTransform(944.477,530.0538,1.8158,1.8158);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#292929").s().p("AgMAZQgIgJgCgOQgBgNAGgKQAGgLAJAAQAJgBAHAJQAIAJABAOQABANgFAKQgGALgKAAIgCAAQgHAAgGgIg");
	this.shape_637.setTransform(900.7446,541.8139,1.8158,1.8158);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#39302C").s().p("AAGADQgIgJgKgDIACgEQAOAGAJAUg");
	this.shape_638.setTransform(917.7969,493.0148,1.8158,1.8158);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#372F2C").s().p("AhGB5QgugXgOg5QgOg4APgrQALgdAXgTQAagVAigFQAjgFAaAOQAPAIAOAMIBTBSQgdgSgigkQgcgfgYgMQgYgNghAEQghAFgYAUQgcAXgJAkQgIAlALAtQANA2AsAXQAZAMAfAAQAeAAAbgMQgbAQgPABIgPABQggAAgagNg");
	this.shape_639.setTransform(841.8836,511.121,1.8158,1.8158);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#C07B42").s().p("AA+AeQgkgegSgKQg/gihFAkQAYghAqgJQAogJAeAPQAWAMAeAgQAhAlAcASIgEAAQgbAAgggZg");
	this.shape_640.setTransform(844.2118,497.1761,1.8158,1.8158);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#372F2C").s().p("AAOAOQgfAGgUgHQgMgFgFgIQgEgHABgIQABgHAFgFQAGgIAKABQAPABAUAVIARAUQALAOAfANQgggGgNgPgAAKAJQgKgNgJgKQgQgOgKgBQgHAAgFAFQgIAJAGAMQAEAHAKAEIAtABIAAAAg");
	this.shape_641.setTransform(844.66,513.3035,1.8158,1.8158);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#944934").s().p("AgUgLIApAXQgdgJgMgOg");
	this.shape_642.setTransform(851.2934,517.6189,1.8158,1.8158);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#944934").s().p("AgbAMQgPgOANgOQANgOAWASQAQAMANATIABACIAAgBQgQADgNAAQgXAAgLgLg");
	this.shape_643.setTransform(840.9075,511.6456,1.8158,1.8158);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#944934").s().p("AAPAOQgLgQgPgMQgZgTgUAOQAJgUAXABQAZABATAiQAHAPAQAQIAOAMQgjgOgHgMg");
	this.shape_644.setTransform(844.9835,512.5335,1.8158,1.8158);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#AF5E39").s().p("AgfBxQgigNgcgXQgnghgDhLQALg7A3gYQAxgUApAUQAXAMAeAgQAhAjAdASIgiBTIg7A6IgDABIgJAAQgeAAgggMg");
	this.shape_645.setTransform(842.5322,509.8563,1.8158,1.8158);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#944934").s().p("Ag2B9Qg8gTgQhCQgZhlBBguQAZgTAhgEQAfgDAYAMQAWAMAeAgQAhAjAdASIhdCPQgcANgbAAQgWAAgVgHg");
	this.shape_646.setTransform(842.2159,511.1702,1.8158,1.8158);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#342D2D").s().p("AgOgPQAYgfAcATQgNABgPAIQgfAPgQAmQAFgcASgWg");
	this.shape_647.setTransform(897.9593,515.4587,1.8158,1.8158);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#3B322E").s().p("AgMAJQAAgHACgCIAHgKQAGgFAKAAQgGADgGAFQgMAJgBAOg");
	this.shape_648.setTransform(916.9798,568.4611,1.8158,1.8158);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#3B322E").s().p("AAmA+QgTgGgRgNQgagUgegfQgggjgEgRIAAgFIAEABQBbAzA0gBIAegDIAEgCIgCAFQgLAcAJAmIAAAAQABAMgSACgAgtgGQAcAcAWASQAQALATAGIAdADQAMgBAAgFQgIglAKgdIgZADQg0AChYgwQAJATAcAeg");
	this.shape_649.setTransform(932.2779,579.0836,1.8158,1.8158);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FFF8F8").s().p("AgBACQgDgDABgCQACgCACAFQAEACgCACIgBABQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_650.setTransform(943.7355,586.6004,1.8158,1.8158);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#BF4C4C").s().p("AgIgIIABgEQAMAIAEAQQgGgOgLgGg");
	this.shape_651.setTransform(936.9535,584.3494,1.8158,1.8158);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#BF4C4C").s().p("AgYAGIgcgXIgEgEIACgBIANgEQARgBAOAHQAIgEAKgCQAXgCAQAVQAIAJACAIIgCAAQAFAKgIAEIgFACIgGAAIAAAAIgHABQgaAAgggVgAgogXIgLADIABABQATASAJAEQAlAYAZgCIANgDQAGgEgFgHIAAgBQgDgKgJgIQgOgRgTACQgIABgKAFIgBAAQgNgGgNAAIgEAAg");
	this.shape_652.setTransform(937.3337,585.8092,1.8158,1.8158);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#F8B2B3").s().p("AgWAKQgIgDgFgHQgFgHADgEQAJgKASAVQgBgRALgDQAOgEATAXIAEAHQAFAIgJAFQgFADgJAAQgQAAgZgMg");
	this.shape_653.setTransform(940.5576,586.6817,1.8158,1.8158);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#F6999B").s().p("AgZAEIgegYQAJgFANABQAMABAKAFQAdgPAVAUQALALAEAMQAEAIgIAFIgaACQgWgDgbgSg");
	this.shape_654.setTransform(937.5489,585.8323,1.8158,1.8158);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#522F2E").s().p("AgVAlQAMgjgMglIAPAAIAcgDQgMAeAKAmQAAAHgMACg");
	this.shape_655.setTransform(944.0805,583.3053,1.8158,1.8158);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#392D2E").s().p("AA7A+QgdgCgagTQgZgUgegfQgfgjgFgRQAcAQAfANQA1AWAhgBIAegEQgMAeAJAmQABALgTAAIgIgBg");
	this.shape_656.setTransform(932.1417,579.2122,1.8158,1.8158);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#342E2C").s().p("AgTA0QgTgMgFgIQgCgEABgCQADgEAFAAIAWAAQAIgBAEgEQAHgJgEgIQgCgHgLACQgKACgOAPQgIAKgEABIgCgBIgBAAQgHgEgGgLQgGgKAAgMQgBgSAMgIQAbgTAegDQAVgCATAGQARAGAIAKQASAZgWAfIgCADIAAABQgCALgOAQQgOASgNACIgBAAIgCAAQgLAAgTgMgAgnAcQAEAHASAMQATANALgBQAKgCANgPQALgOAEgKIgCAAQgOgCgEgGQgFgGABgIQACgGAHgBQAFgBAGAFQAGAEAEAJQAQgZgPgVQgGgJgQgFIgmgEQgcADgaASQgKAIABAOQABAKAEAJQAFAJAHAEIAIgIQAOgRANgCQAOgCAFAKQADAEgCAHQgCAHgEAFQgFAGgKABIgVAAgAA2ANIAAgBQgDgKgGgEQgEgEgFAAQAAAAgBAAQgBABAAAAQAAAAgBABQAAABAAAAQgBAFADAEQADAEAMACIAEABg");
	this.shape_657.setTransform(958.4502,553.8853,1.8158,1.8158);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#3B322E").s().p("AgBAQIgBgfIAEgBIABAhg");
	this.shape_658.setTransform(961.2852,568.0526,1.8158,1.8158);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#8A5E45").s().p("AgfgDQAUgKASADIAPAEIAFAGQAEAGABAGQgUgSgrADg");
	this.shape_659.setTransform(964.826,546.8357,1.8158,1.8158);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#6C3E2E").s().p("AgpAmIASgCQARABAGgHQAIgJgEgKQgEgKgNACQgLABgMAPQgKANgEgBQgNgIgEgUQgEgVAOgKQAjgZAmADQAhADAMARQARAYgVAdQgFgQgLgEQgJgDgCAHQgCAOANAEIANACIAAACQgRAWgcAAQgUAAgegNg");
	this.shape_660.setTransform(958.4427,551.9082,1.8158,1.8158);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#54352D").s().p("AgVAvQgXgPACgEIASgDQARABAHgHQAIgJgEgKQgEgJgNACQgLABgMAOQgKANgEgBQgNgIgEgTQgEgWAOgKQAjgZAmADQAhADAMARQARAYgVAdQgFgPgLgEQgJgEgCAIQgCANANAEIANACQgCAKgNAQQgOASgMACIgCAAQgLAAgVgPg");
	this.shape_661.setTransform(958.4427,553.8719,1.8158,1.8158);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#342E2C").s().p("AgkAoQgUgOgDgVQgCgQAMgQQAQgUAdgDQAYgDATAOQATANACAVQACAUgQASQgQARgZACIgGAAQgTAAgQgMgAgDgtQgcADgOATQgKANACAOQACATASANQASAMAUgCQAWgCAPgPQAOgPgCgSQgCgTgRgMQgOgKgTAAIgFAAg");
	this.shape_662.setTransform(958.6334,553.6613,1.8158,1.8158);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#41322D").s().p("AgjAlQgSgNgDgUQgDgSAQgQQAQgQAYgCQAWgCASAMQASANACAUQACATgPAQQgPAQgYADIgFAAQgTAAgQgMg");
	this.shape_663.setTransform(958.6307,553.7044,1.8158,1.8158);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#292929").s().p("AgjArQgOgOABgbQACgWAMgQQANgQARgCIABAAQAQgBAPAPQAQAPAEAVQAEAagMAPQgKAPgYADIgDAAIgFAAQgWAAgLgMgAgggiQgLAQgCAUQgBAaANANQAMANAYgCQAZgCAKgPQAMgPgGgXQgEgVgOgOQgOgOgPABIgBAAQgQABgMAQg");
	this.shape_664.setTransform(902.3524,539.1985,1.8158,1.8158);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FFFFFF").s().p("AgfAoQgQgMABgWQABgVAMgQQANgRARgBQAQgBAPAPQAPAPADAUQAEAVgOAOQgNANgVABIgEABQgRAAgMgKg");
	this.shape_665.setTransform(902.2996,538.4202,1.8158,1.8158);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#B9B9BA").s().p("AgnAlQgJgOACgVQABgVAMgQQANgRARgBQAPgBAPAPQAPAPAEAVQAEATgIAPQgKAUgdACIgFABQgZAAgMgRg");
	this.shape_666.setTransform(902.3333,539.1483,1.8158,1.8158);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#944934").s().p("AgIBuQgsgBgEgUQgShZAWg8QAUgzAeABQApABATBbQAHAiAAAgQAAAfgHAIQgUAYgpAAIgFgBg");
	this.shape_667.setTransform(901.7409,529.1553,1.8158,1.8158);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#3B322D").s().p("Ag2C4QgegFgWgZQgMgOgRgeIgKgSIgFgGQg3hGAagtIABAAQAHgKAYgUIAbgZQAOgOAFgMQAMgbATgWQAYgbAVAAQAYgBA/AcQBBAcAbAYIABAAQAOAUALAnQANAtgIAZQgGAUgWACIgagDQgaAQgZAHQgLAlAIAfQADAQgLAOQgQAVgoAFgAgYi1QgUAAgXAaQgRAUgMAbQgGANgOAPIgcAZQgXAUgHAKQgQAZAQAkQAIAUAUAaIAFAGIALATQAQAeAMANQAVAXAbAFIBDAEQAmgEAOgTQAIgMgCgOQgIghAMgnIAAgBIACgBIARgGQAUgHAPgKIABgBIAJADIARABQATgCAEgQQAIgXgMgrQgKgngPgTQgbgYhAgbQg8gbgWAAIgBAAg");
	this.shape_668.setTransform(937.6545,564.1932,1.8158,1.8158);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#DDB393").s().p("AgXgLQgrgXgWgHIABAAQAWgBA/AbQBAAbAbAYIgQACQgTAAACAEQgVgYg6gdg");
	this.shape_669.setTransform(949.1648,538.3635,1.8158,1.8158);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#C68150").s().p("AhIBJQgngWguAKQgOACgHgGQgFgGADgGIApgmQAegZAHgSQAMgcATgVQAXgZAUAAQAXgBA+AbQBBAcAbAYQAKANAKAbQAKAeACAaQADATgVAIQgWAHgPgWQgSAWgiAJIg1AEQglgGg4ggg");
	this.shape_670.setTransform(938.2706,550.8925,1.8158,1.8158);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#A3633B").s().p("Ag1C0QgjgFgZgkIgegyQgagkgEgKQgVgqASgdIApgmQAegaAHgSQAMgcATgVQAXgZAUAAQAXgBA+AbQBBAcAbAYQAOATALAnQAMAtgHAYQgHATgXABIgWgEQgPAKgVAIIgRAGQgMAmAIAgQAFAbgbAPQgVAMgjAAQgWAAgbgFg");
	this.shape_671.setTransform(937.6025,564.2905,1.8158,1.8158);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#342D2D").s().p("AAJADQgSgYgQAFQAGgOANAFQAQAHAQAuQgGgNgLgMg");
	this.shape_672.setTransform(945.17,512.076,1.8158,1.8158);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#292929").s().p("AgIAQQgEgGgBgJQgBgIADgGQAEgHAGAAQAFgBAFAGQAEAGABAJQABAHgEAHQgDAHgGAAIgCAAQgDAAgFgFg");
	this.shape_673.setTransform(943.9299,531.9274,1.8158,1.8158);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#292929").s().p("AgWAlQgMgMAAgYQAAgTAIgNQAIgNALgBIABAAQALgBANAMQANANADATQAFAZgKAMQgHAKgPABIgCAAIgDAAQgPAAgJgJgAgYgdQgGAMgBASQgBAWAMAMQAJAJAQgBQAPgBAHgJQAJgMgFgXQgDgRgMgMQgLgMgLABIAAAAQgLABgHAMg");
	this.shape_674.setTransform(946.4362,529.4678,1.8158,1.8158);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FFFFFF").s().p("AADAnQgNgBgKgIQgMgKgBgOQAAgRAHgNQAIgNAMgBQALgBAMAMQANANADAQQAGAlghAAIgDAAg");
	this.shape_675.setTransform(946.3923,528.4262,1.8158,1.8158);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#B9B9BA").s().p("AgaAfQgIgMABgSQABgSAGgNQAIgNAMgBQALAAAMAMQAMAMADASQAJAsgkADIgDAAQgSAAgKgOg");
	this.shape_676.setTransform(946.4422,529.4708,1.8158,1.8158);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#944934").s().p("AACBTQgYAAgEgQQgShDAFgsQAFgnAQAAQAXABAVBEQAVBAgJAPQgKATgZAAIgBgBg");
	this.shape_677.setTransform(946.0057,522.4313,1.8158,1.8158);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#372F2C").s().p("AjJErQgjgNgRgXIADAhIgFgDQghgRgFgvQgGAIgBALIgBAHIgEgGQgXgeABgjIgLAOIgBgEQgOgjAAgkQgBgiAKgTIABgMQAEhGANgzQAXhfA1g/QBMhQBdgJQA+gGBHAcQAcgUAhgEQAzgFAuAoQAoAjASA7QAKAgAEAzQACAUABACQAYAgAWA7QAWA9ACAnIAAACIgKAHQgsAdgQATQgbAdgIAtQgGAigUAMQgOAIgwAHIgRACIAAAAQh9gEhUAIIAAAAQgYACgWAAQg1AAgmgOgAj+D8IAHALQAMAMARAKQA3AeBigJIAAgBQBVgIB9AEIAQgCQAvgGAMgIQATgKAGggQAIguAbgfQARgTAtgeIAHgFQgCgngWg7QgVg6gXgeQgDgEgBgWQgEgygKgfQgRg6gogiQgrgmgxAFQgWACgVALIgQAKIgBABIgCgBQhIgbg9AGQhbAJhKBNQg0A+gXBeQgMAzgFBGIgBANIAAAAQgIAQgBAeQAAAjAMAiIATgZIgDANIgBAUQACAZAOAVQADgJAFgHIAFgGIAEgDIAAAGIAEAYQAIAbATAMIgDgug");
	this.shape_678.setTransform(906.0375,542.8334,1.8158,1.8158);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#C07B42").s().p("AgvgmQA1gCA/AYIAOgIQAPgJATgEQA4gNAzAsQgtgPgYABQglADgOAlQg/gehKgEQhNgEg8AZQgbANgaAVQBPhNBhgCg");
	this.shape_679.setTransform(902.9528,493.8781,1.8158,1.8158);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#AF5E39").s().p("AjRDaQgrgZgOg9QgJhKgJgjQgDgPgIgLQgLgPgNgCIACgEQgKABgDADIgCABIgGgBQAWhmA4hBQBRhVBkgEQA3gCBAAZIAOgJQAPgJATgEQA5gNAzAtQAxArAQBOQAHAoADAmQAWAeAVA2QAUA3AFAoIg8ACQgfAJgPAZQgqBOhVAaQgIgHgGADIgRAHIgjABQiaAAhfg9g");
	this.shape_680.setTransform(908.2186,536.9853,1.8158,1.8158);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#944934").s().p("AjdEfQgRgKgLgOIgIgKIADAmQgYgNgIgdIgFgbIgFAGQgGAJgBAKQgSgWgDgcIABgXIgPATQgMgjAAglQAAghAJgRQAIhXAFgdQAXhqA5hEQBRhVBkgEQA3gCBAAZIAOgJQAPgJATgEQA5gNAzAtQAxArAQBOQAHAoADAmQAXAgAWA7QAWA8ACAnQgzAigQARQgdAfgJAvQgGAkgXAKQgNAGg8AJQiBgEhRAIQgZADgWAAQhDAAgqgYg");
	this.shape_681.setTransform(906.0396,542.8271,1.8158,1.8158);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#372F2C").s().p("AgaAzQg0hBglggIgDgDIAFgCQAjgNAUgTQAUgTAYgHQAlgMAjASQAjARAPAmQAVAygUArQgLAYgWASQgWARgeAKIgDABgAgMhoQgXAHgUASQgTATgiANQAkAfAwA7QAeAoARAaQA8gUAVguQATgogUgxQgOglghgQQgUgKgUAAQgOAAgOAFg");
	this.shape_682.setTransform(950.4364,497.7994,1.8158,1.8158);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#C07B42").s().p("AhVAWQAkgOAVgSQAagYAfgFQAegFAbAOQgsgDgcARQgNAJgaAWQgVATgSAHg");
	this.shape_683.setTransform(945.397,484.8778,1.8158,1.8158);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#944934").s().p("AhBgOQAjAWAlgIQAjgHAYgiQgHAegZAVQgYAWgiAKg");
	this.shape_684.setTransform(958.8793,510.4011,1.8158,1.8158);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#372F2C").s().p("AgiAnIgBgBIgMgOIAEgCIAXgXIAIgKQANgVANgFIAGgBQAUAAAGAPQAEALgFAOQgFAOgKAIQgIAHgLADIgdAFgAAQgfQgMAEgLATIgJAKIgWAXIAHAIIAogEQAKgDAHgGQAJgHAEgNQAFgLgEgKQgEgLgPAAg");
	this.shape_685.setTransform(954.2742,499.007,1.8158,1.8158);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#944934").s().p("AgrAYIAOgMIAbghQAKgNAMgBQAYAAAAAWQAAAVgRAOQgNAKgYADIgXABg");
	this.shape_686.setTransform(954.4306,499.0514,1.8158,1.8158);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#944934").s().p("AguAZIAYgfQAOgWAPgHQARgHANAOQAHAIADAIQgNgIgQABQgJAAgYAcIgWAdg");
	this.shape_687.setTransform(953.7497,496.3892,1.8158,1.8158);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#AF5E39").s().p("AgXA0Qg0hDgnghQAkgNAVgTQAqgoAyAMQAyALAUAyQAXA5gcAtQgYAog3ARg");
	this.shape_688.setTransform(950.6966,497.7115,1.8158,1.8158);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#342E2C").s().p("AgOARQgGABgFgEQgFgFgCgIQgBgHACgGQACgHAFgBQAZgEAQANQAKAIAEAKQAEALgDACIgDACgAAUAOIAHACQgBgLgJgIQgNgOgWACIgEAAQgDABgBAFIAAAJQADANAIgCIAFAAg");
	this.shape_689.setTransform(773.9163,763.483,1.8158,1.8158);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#663D2D").s().p("AAOAQIgdgBQgLACgDgQQgDgPAJgDQAcgFAQAUQAOAQgFAFg");
	this.shape_690.setTransform(773.9918,763.4304,1.8158,1.8158);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#342E2C").s().p("AgdAKQgCgKACgHQADgKAHgDIAFgBQAKgBAOAKIASAPQADAEAAADQgCADgFABIgrAJIgBAAIAAAAQgFAAgEgNgAgOgPIgDABQgHACAAALIABALIADAHIAtgJQgEgGgMgIQgMgKgJAAIgCABg");
	this.shape_691.setTransform(778.5999,757.6605,1.8158,1.8158);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#663D2D").s().p("AgbAEQgBgRAKgEQALgFASAOQASAMgBAFQgBACgLACIgkAHIAAAAQgGAAgBgQg");
	this.shape_692.setTransform(778.6096,757.6608,1.8158,1.8158);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#382F2C").s().p("AAUAXQAEgWgKgKQgIgJgQgCIgPgBIAQgCQASAAAJAKQAMANgFAYg");
	this.shape_693.setTransform(766.9249,761.3441,1.8158,1.8158);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#382F2C").s().p("AgLF2QgfgFgRgWQgWghALg6QAKgxgGgvQgLhJgwguIgjgiQg/g6gZgiQgpg4gQhKIAFgBQAQBIApA4QAZAiA+A5IAjAhQAyAxAKBKQAHAwgKAyQgLA4AVAeQAOAVAeAFQBrAQBLgFQA+gFAWgSQAHgFABgFIAAgCIACgBQAIgCAJgIIAOgRQAEgIgBgGQgLgYgagKIg2gBQgjALgPgQQgOgOAKggIAAgBQBgjRgeixQgWh7hOhdIASAUQAVAXAHAMQAnBBAQBLQApC8hnDeQgIAcALAMQAMANAggKIA6ACQAcALAMAaIAAAAQADAIgGAKIgNASQgKAJgKADQgBAHgIAGQgVARg4AGQgXACgbAAQg+AAhSgNg");
	this.shape_694.setTransform(723.1237,702.0052,1.8158,1.8158);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#AF5E39").s().p("ABNB3QgcgZhDgqQg9gpgegbQgugrgag9ICLhDIB1glQA4BCAcBVQAsCIgmCiQgjg8g1gug");
	this.shape_695.setTransform(731.8694,672.1431,1.8158,1.8158);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#944934").s().p("AgLF2QgrgGgMgqQgIgdAHglQAJgxgFgtQgJhMgzgxIhthrQg0g/gShUIGpisQBIBUAYBxQAoC7hmDdQgJAhAPANQAOALAfgJQAegJAbALQAaALAMAYQADAKgNAPQgMAQgOAEQgCAVg9ALQgeAEgnAAQg+AAhUgMg");
	this.shape_696.setTransform(723.1509,701.5563,1.8158,1.8158);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#342E2C").s().p("AghAOQgDgFABgGQAAgHAEgGQAFgHAJgCQANgDAUAOQASAMACAIQABADgDACIgCAAIgIAAQgUgBgHABIgYADQgEgBgCgFgAgagGQgDAEgBAFQgBAKAGACIAVgEQAHgBAWABIAEAAQgGgIgNgHQgOgLgKABIgCAAQgHACgDAGg");
	this.shape_697.setTransform(900.429,742.9701,1.8158,1.8158);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#663D2D").s().p("AgaARQgJgDADgOQACgOAOgCQANgDAUAQQAUAOgEADIglAAIgMADg");
	this.shape_698.setTransform(900.4349,742.9615,1.8158,1.8158);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#382F2C").s().p("AgFgOIgYgCIAZgBQAaAFAIAcIgGACQgHgZgWgHg");
	this.shape_699.setTransform(892.8297,740.644,1.8158,1.8158);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#382F2C").s().p("AgrEwQgQgSgNgpIgFgOQgFgMgbgdQgxgzgog5Qgmg3gVg8QgTg3gIhHQgCgSABgmIABgjQAEBrARBFQAVBSAwBGQAmA2AzA2QAcAeAFANIAFAOQANAoAPASQAbAgAugDICPgOIABAAIA2gGQAdgGAIgMQAFgGgDgLIAAgBIAAAAIACgFQALgfgHgNQgFgJgOgCIhXgDQglgFgOgVQgZgkgOhAQgRhKARgsQAHgSAVggQAohAAKgpQAShGgehNIAKAVQALAaACAUQAGA3gUA1QgLAfgfAxQgVAhgHARQgQAqAQBIQAPA/AYAjQAMASAkAGIBWACQAQACAHAMQAJAQgNAhIgBADQADANgGAJQgJANgeAHIg5AGIgBAAIiPAOIgHAAQgrAAgbggg");
	this.shape_700.setTransform(847.9658,693.9026,1.8158,1.8158);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#C88A55").s().p("Ag3BuQAAg6AmguQAigqAOg/QAMg4gGg8QAmBhgnBZQgLAZgZAnQgXAlgGAQQgIAWABAiQABAiALAmQgfg1AAg1g");
	this.shape_701.setTransform(868.4862,672.0977,1.8158,1.8158);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#AF5E39").s().p("ABYDNQgfghgrhGQgig4g4ghIgrgWQgXgNgNgNQgZgZgSgoQgOgdgOgwIDkhRIDNgFQAnBhgnBaQgLAZgZAoQgYAlgGAPQgNAkALA+QAMBDAjA6QgygHgwg0g");
	this.shape_702.setTransform(837.4252,680.5865,1.8158,1.8158);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#944934").s().p("AguEnQgJgOgIgVIgKgdQgFgMgiglQgugwgkg1QgwhFgVhQQgShHgEhuIG0hVQAnBggnBaQgLAZgZAoQgYAmgGAPQgQArARBKQAOA/AYAjQARAYA1ADIBDAAQAZAFgBAYIgJAjQAIAYgjALIjVAYIgFAAQgxAAgcgog");
	this.shape_703.setTransform(847.5719,693.6231,1.8158,1.8158);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#342E2C").s().p("AgiARIgDgLQgCgKAEgHQACgFAGgCIACAAQAlgEAXAcQAFAHgCACIAAABIgDABIgogDIgSADIgKADgAgYgNIgBABIgFAEQgDAHAEANIAYgEIAjABQgHgJgLgFQgNgIgQAAIgHAAg");
	this.shape_704.setTransform(904.1918,739.1934,1.8158,1.8158);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#663D2D").s().p("AgjACQAAgOAJgDQAcgDAUAQQAKAIAEAIIgugCIgVAFg");
	this.shape_705.setTransform(904.1762,739.1357,1.8158,1.8158);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#382F2C").s().p("AkGBgQALgiAIgOQAjg5A7gnQBJgxBtgQQBNgKBXAHIBJAJIgBAGIhIgJQhXgHhMAKQhnAPhIAvQhdA6gjBrg");
	this.shape_706.setTransform(825.7814,554.3161,1.8158,1.8158);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#AF5E39").s().p("AAkhxQB8gSBwAXIofDmQA8jJD3gig");
	this.shape_707.setTransform(825.2821,555.0418,1.8158,1.8158);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#382F2C").s().p("AlmGnQhpgnhXg8QhYg8gshAIgBAAIAAgBQgThaARhSQAShSA1hIQAyhCBJgwQAvgfAxgTQA0gUA/gMQAkgIBFgJIBIgLQAkgHAYgJQBSggCIhOIADAGQiJBOhSAfQgZAKgkAHIixAcQg+AMg0AUQiDAzhUBsQhtCOAoC1QArA+BUA7QBXA8BqAnQD8BdDZg+QAGgCA1g0QBbhXA0gtQBfhSBDgiQA9ggAjg2QAVggAYhDQARgwALgVQATgjAagTIAEAFQgaATgSAiQgLAVgQAuQgZBDgVAiQgkA2g+AhQhDAjhfBRQg0AthaBWQg3A2gGABQg3AQg3AFQgkAEgkAAQiOAAiUg3g");
	this.shape_708.setTransform(791.6647,626.6304,1.8158,1.8158);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#AF5E39").s().p("Ai8GLQg2gUgogsQgpgsgGgwQhRAzhJAhQgggQgkgNQg9hUgFh2QgFhvAshmQA4gnA3gVQBMgdB4gRQB5gRAjgOQAjgNBNg1QBEgwA2gOQBhgXA6AEQBpAHBFBSQAfAlBJB1IBDBuQgeAVgVAqIggBUQgqBxhaAvQgaAOiaAhQi1AmglgYQgeBAg5ATQgVAIgYAAQgdAAghgMg");
	this.shape_709.setTransform(805.0355,607.1538,1.8158,1.8158);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#944934").s().p("AlmGkQhrgohXg8QhUg7gsg/Qgoi1BsiPQBUhvCGgzQBMgeB4gRQB5gRAjgNQBTggCHhNIIEE6QgeAWgVArIggBUQgqBwhaAvQhYAuiOCEIiGB8QhZAZhdAAQiKAAiXg3g");
	this.shape_710.setTransform(791.7558,626.6976,1.8158,1.8158);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#382F2C").s().p("AgdEkQgxgcglgtQglgtgCgiQgBgTAFgQQADgKAKgVQAOgbAGgUQA1iggkicIgEgRIAJAPQAuBNBkBqQAzA2AqAnIACABIgBACQgMAVgdAnQgiAugJAVQgKAaAEAZQAEAdAWAMIAlACQALACAKAGIABAAIAAABQAPAjAAAOQAAAKgKAIQgFAEgYAHIg1AKIgaABQgnAAgbgPgAhvAcIghBOQgFAQABASQABAhAkArQAlAsAwAbQAfASA5gFQAcgDAagHQAVgHAFgDQAHgGAAgIQgBgNgNggQgJgFgKgBIgQAAQgPACgHgFQgYgOgFgeQgEgbALgcQAGgPAMgTIAZgiQAcglALgUQgsgqgyg0QhZhgguhIQAeCXgyCXg");
	this.shape_711.setTransform(685.4507,711.1293,1.8158,1.8158);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#944934").s().p("AgcEaQgxgbgkgtQgkgsgCghQgBgaANgbQAUgtAFgPQAZhJAEhOQAGhVgShQQAvBOBkBrIBcBbQgKAUgjAuQgdAogJAWQgLAaAEAaQAEAdAYAOIAYACQATgBAPAIQAOAiAAAOQAAAIgIAHQgOALg2AIQgUADgSAAQgnAAgbgPg");
	this.shape_712.setTransform(685.4517,712.4003,1.8158,1.8158);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#382F2C").s().p("AgRAbQAXgOAIgXIAEgWIgBAZQgGAbgZANg");
	this.shape_713.setTransform(921.2015,701.6044,1.8158,1.8158);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#382F2C").s().p("AgMAZQAPgPAKgmIgDAVQgFAYgNAMg");
	this.shape_714.setTransform(926.7851,708.7314,1.8158,1.8158);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#382F2C").s().p("AgDAWIAEgcIABgRIACARQABATgEALg");
	this.shape_715.setTransform(934.7663,707.4149,1.8158,1.8158);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#382F2C").s().p("AgMAeQABgOAMgYIANgVIgKAWQgJAYgCANg");
	this.shape_716.setTransform(911.0331,672.0069,1.8158,1.8158);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#382F2C").s().p("ACED+QgEADgFAAQgMABgKgMQgLgNACgQQgKACgHgHQgOgNADgvQgBgTgKgfQgJgegBgSIg0AKQg0AFgvgFQhQgKgqgmIgBgBIABgCQAOg0ByhwQA5g6A7g0IAFgEIAAAGQAEAqAkAnQAXAXA5AoIAQAMQAoAdAUA9QAZBPgNCBQgDAZgPANQgJAHgLABIgBAAQgRAYgQABIgDAAQgLAAgJgMgACHD3QAIAPAMgBQAJgBALgMIAJgLIABgCIADAAQALgBAHgHQANgKACgXQAMhvgShLQgShJgugiIgPgLQg5gngWgYQglgmgGgqQhCA7g3A3QhnBogOAwQApAkBNAJQAuAFAygFQAngEAQgHIAEgBIAAAEQAAAUAKAeQAKAeAAAWQgCAtAMALQAGAGAKgEIAFgCIgBAGQgEAPAKANQAIAKAKgBIAHgEIADgDg");
	this.shape_717.setTransform(900.6987,668.3973,1.8158,1.8158);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#C88A55").s().p("ABgBkQgNhDghgtQgUgegxgmQg1gmgTgZQgNgRgDgWQgEgUAGgUIADgDQAFAvAqApQATAVBGAyQAsAgATBFQAUBMgLByQgBhOgJgvg");
	this.shape_718.setTransform(922.3254,662.0654,1.8158,1.8158);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#AF5E39").s().p("AAtCFQgUhrgOgnQgHgSgggKQgxgPgGgDQgegQgLgnQgHgYABgyIAygtQAFAuAqAqQATAUBGAyQAsAgATBGQAUBNgMB0IgDAOQg2gLgZhag");
	this.shape_719.setTransform(918.384,663.6542,1.8158,1.8158);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#944934").s().p("ACED3QgKANgQgOQgPgPAFgUQghALAEhJQgBgUgLgfQgJgeAAgUQgmAQhSgDQhngEgzgtQAPg0B0hzQA7g6A2gwQAFAuAqAqQATAUBHAyQAsAgATBHQAUBMgMB0QgDAdgSAKIgRAFQgHANgLAHQgIAGgHAAQgMAAgJgPg");
	this.shape_720.setTransform(900.7284,668.7109,1.8158,1.8158);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#342E2C").s().p("AgcAhIAAgEIAVg7IABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQAFgBAaANIACABIgBACQgHAWgVAQQgQAMgJABgAgVAbIAWgOQAPgNAGgQQgNgGgLgEg");
	this.shape_721.setTransform(914.4377,710.0007,1.8158,1.8158);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#663D2D").s().p("AgZAdIAWg8IADABIAaALQgHAXgWAQQgSAMgDAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_722.setTransform(914.2412,710.2303,1.8158,1.8158);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#342E2C").s().p("AgXAcIAAgEIAOgyIABgBIAAgBQAGgEAXANIACABIAAADQgGAPgRAQQgPANgFAAIgBABIgCgCgAgPAUQAWgQAKgTQgRgIgEAAg");
	this.shape_723.setTransform(920.2936,716.6468,1.8158,1.8158);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#663D2D").s().p("AgFgZIAEAAQAGABAQAHQgLAbgeAQQAEgHALgsg");
	this.shape_724.setTransform(920.2028,716.6755,1.8158,1.8158);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#342E2C").s().p("AgUAcIgBgCIABgCIAJgxIACgBQAEgEAYAKIADABIgBACQgFARgQAPQgMANgEABgAgNATQAVgRAGgSQgOgFgFAAg");
	this.shape_725.setTransform(927.2844,718.5237,1.8158,1.8158);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#663D2D").s().p("AgHgZIAEAAQAHABAOAHQgIAYgbATQADgHAHgsg");
	this.shape_726.setTransform(927.3298,718.5367,1.8158,1.8158);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#342E2C").s().p("AgNAdIAAgEQABgHgEgqIAAgCIABAAIAdgCIADABIgBADQAAARgMASQgJASgFAAgAgHASQAPgUACgUIgTgBg");
	this.shape_727.setTransform(935.0016,715.4952,1.8158,1.8158);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#663D2D").s().p("AgNgYIAFgBIAWABQgCAagWAYQACgHgFgrg");
	this.shape_728.setTransform(934.9562,715.359,1.8158,1.8158);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#39302C").s().p("AgKgIIgLgHIAOAGQARAKAMANIgFACQgLgNgQgLg");
	this.shape_729.setTransform(373.1035,620.5745,1.8158,1.8158);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FFFFFF").s().p("AgGAGQgCgDAAgDQAAgCACgCQADgDADAAQAEAAACADIAEAEIgEAGIgGACg");
	this.shape_730.setTransform(313.6362,614.537,1.8158,1.8158);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FFFFFF").s().p("AgGAAQAAgFAGABQAHgBAAAFIgCAEIgFABQgGAAAAgFg");
	this.shape_731.setTransform(267.742,610.5876,1.8158,1.8158);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#292929").s().p("AgQATQgIgIABgLQgBgKAIgIQAHgIAJAAQAKgBAHAIQAHAIAAALQAAALgHAIQgHAIgKAAQgJAAgHgIg");
	this.shape_732.setTransform(315.0888,616.6225,1.8158,1.8158);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#39302C").s().p("AgGACQAHgJAKgEIABACQgJAEgHAIIgHAJg");
	this.shape_733.setTransform(292.0736,578.221,1.8158,1.8158);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#372F2C").s().p("AghBkIA9AFQAggDAZgMQAtgVAIguQAIgmgNgdQgNgdgggQQgcgPgigBQgjgBgaANQgPAHgNALQgIAHgOAOIgZAYQgRAOgTALQAPgPAHgFIA5g1QAOgLAPgIQAcgOAkACQAkAAAeAQQAaAOAOAWQAVAigJAvQgIAvgwAXQghAQgrAAg");
	this.shape_734.setTransform(373.9842,586.5605,1.8158,1.8158);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#C07B42").s().p("AhGACQAdgdAXgLQAegQAqAFQAuAEAdAZQhMgZhAAiIg1AlQgiAZgeAAQAbgQAfghg");
	this.shape_735.setTransform(370.743,576.2248,1.8158,1.8158);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#372F2C").s().p("AgRAHIARgSQASgSAPgDQALgBAHAGQAGAEACAGQACAGgEAFQgEAHgNAFQgTAIgjgCQgLANghAIQAfgOAKgMgAAjgbQgMABgOANQgKAJgJALQA0ADAKgRIABgJQgBgFgEgDQgFgDgHAAIgBAAg");
	this.shape_736.setTransform(371.7169,588.9203,1.8158,1.8158);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#944934").s().p("AAVgLQgLAMgeALg");
	this.shape_737.setTransform(364.9324,592.7928,1.8158,1.8158);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#944934").s().p("AgkATIABAAQAMgSAPgKQAWgRAOAKQAQALgOAMQgNANgiAAIgTgBg");
	this.shape_738.setTransform(375.4771,587.0755,1.8158,1.8158);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#944934").s().p("AgWgCQASgdAagDQAXgDAMAPQgWgJgYASQgPAKgKAPQgIAKgiAOQAYgRAKgVg");
	this.shape_739.setTransform(371.2877,588.4025,1.8158,1.8158);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#AF5E39").s().p("AgeBpIhEgrIgthBQAdgRAggfQAdgdAWgLQApgVA3ANQA7APATAvQAFA9gmAfQgcAVgiANQgmAOglACg");
	this.shape_740.setTransform(372.9293,585.8501,1.8158,1.8158);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#944934").s().p("AggBmIhxhtQAcgRAggfQAcgdAXgLQAYgMAhAAQAjAAAdANQBIAhgQBUQgKA3g9AUQgcAKgdAAQgXAAgYgGg");
	this.shape_741.setTransform(373.5931,586.6393,1.8158,1.8158);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#342D2D").s().p("AgLgNIgfgFQAcgSAcAXQAWARAHAWQgUgcgigLg");
	this.shape_742.setTransform(315.4066,594.7083,1.8158,1.8158);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#3B322E").s().p("AAAgFIgOgFIAGAAIALADIAJAHQADADAAAIQgCgJgNgHg");
	this.shape_743.setTransform(300.6533,639.5042,1.8158,1.8158);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#3B322E").s().p("AhSAyIAAAAQAHgggQgWIgCgDIAFAAIAfAAQA3gDBcgvIADgBIABAEQgDAMgeAfQgcAcgaATQgQALgUAHQgSAFgPAAQgTAAgBgJgAhMAyQAAAFAOAAIAfgGQATgGAPgKQAXgQAagZQAagbAIgPQhYAtg3ADIgbAAQAOAWgGAeg");
	this.shape_744.setTransform(284.8105,649.3095,1.8158,1.8158);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FFF8F8").s().p("AgCADQgBAAAAAAQAAgBAAAAQAAgBABgBQAAAAABAAQACgDACAAQABABAAAAQAAABAAABQgBAAAAAAQgBAAgBABQAAABgBAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_745.setTransform(274.2686,656.3658,1.8158,1.8158);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#BF4C4C").s().p("AgEACQAEgIAHgEIACACQgIAEgFAHIgEAIg");
	this.shape_746.setTransform(281.2243,654.0305,1.8158,1.8158);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#BF4C4C").s().p("AgzAZQgJgDAEgJIgBAAQABgGAHgIQAOgTAZAAIAUADQAPgHARAAIAOADIACABIgeAXQgkAWgfAAgAgsgCQgIAHgCAIIAAABIAAAAQgFAHAHACIAOABQAaAAAmgXIAbgUIAAgBIgLgBQgRAAgOAHIgCAAIgTgDQgVAAgNAPg");
	this.shape_747.setTransform(280.8157,655.1654,1.8158,1.8158);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#F8B2B3").s().p("AghARQgGgCAAgFIABgEIADgGQASgTAPACQANACAAAOQARgUAKAIQAFADgFAHIgNAJQgcAMgSAAQgHAAgFgBg");
	this.shape_748.setTransform(277.65,656.3982,1.8158,1.8158);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#F6999B").s().p("AgxAWQgGgCgBgEIABgEQAEgLAKgIQAUgTAgAKQALgFAMgCIAXACIgdAWQgbAQgWAFQgJACgIAAQgGAAgFgCg");
	this.shape_749.setTransform(280.6341,655.3591,1.8158,1.8158);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#522F2E").s().p("AgRAZQAHgggQgXIAeAAIAPgBQgIAfAQAbIgeAFQgNgCgBgFg");
	this.shape_750.setTransform(273.5525,653.8943,1.8158,1.8158);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#392D2E").s().p("AhQAyQAHghgQgWIAfAAQAkgCA1gWQAigOAZgNQgDANgdAfQgcAcgaASQgYARgfAFIgOABQgOAAgBgHg");
	this.shape_751.setTransform(284.992,649.4132,1.8158,1.8158);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#342E2C").s().p("AgGA1QgNgBgSgOQgPgMgEgIIAAgBIgCgCQgbgXARgWQAGgJASgGQAUgHAXAAQAfAAAeANQAOAGABAPQABAJgFAJQgFAJgHAFIgBAAIgDAAQgDAAgKgHQgPgMgMAAQgMgBgCAGQgDAHAJAHQAFADAIAAIAXgCQAGAAADADIgBADQgEAHgTAMQgVANgMAAgAgfAkQAPAMALAAIAAAAQAKAAAUgMIAWgRIgEAAIgXACQgKAAgHgEIgHgJQgCgGACgDQAEgJAPABQANAAASAMQAHAHACgBIABAAQAGgDAEgHQAEgIgBgJQAAgNgMgEQgdgMgdAAQgWgBgSAHQgQAFgGAIQgOASATASQAEgIAGgCQAFgFAHAAQAIAAABAGQACAGgEAFQgFAGgOACIgBAAQAFAIANAKgAguABQgFAEgCAJIAAABIAEgBQAMgDADgDQADgDgBgFQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgFAAgFADg");
	this.shape_752.setTransform(255.0016,631.2877,1.8158,1.8158);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#3B322E").s().p("AgDgDIAAgJIAFAAIACAYIgFABQgBgGgBgKg");
	this.shape_753.setTransform(253.8057,642.818,1.8158,1.8158);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#8A5E45").s().p("AgcAAIAEgFIAQgFIApADQguABgTARQAAgGAEgFg");
	this.shape_754.setTransform(247.9498,626.2942,1.8158,1.8158);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#6C3E2E").s().p("Ag0AbIgBAAIAOgEQANgEgEgMQgCgGgKAEQgLAEgDAOQgagXAQgUQALgOAjgFQAngGAoARQAQAHgDASQgCAQgNAIQgDABgNgKQgOgLgMAAQgPgBgCAJQgDAIAKAHIAsADQghAPgZAAQgaAAgRgPg");
	this.shape_755.setTransform(255.0089,629.6052,1.8158,1.8158);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#54352D").s().p("AgFAzQgNgBgRgNQgPgLgDgIIAOgEQANgEgEgLQgCgGgKAEQgLADgDAOQgagWAQgVQALgOAjgFQAngGAoARQAQAHgDASQgCAQgNAIQgDABgNgKQgOgKgMAAQgPgBgCAIQgDAIAKAHQAHAFASgCIATABQADADgXAOQgWAPgLAAIgBAAg");
	this.shape_756.setTransform(255.0089,631.2409,1.8158,1.8158);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#342E2C").s().p("AgsAeQgSgNAAgRQAAgRASgMQASgMAaAAQAfAAATAPQAOALgBAPQAAARgTANQgTANgZgBQgaAAgSgMgAgogaQgRAMAAAOQAAAPARAMQARALAXAAQAWAAASgMQARgMABgOQABgNgNgJQgSgPgcAAQgXAAgRALg");
	this.shape_757.setTransform(255.1282,631.0153,1.8158,1.8158);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#41322D").s().p("AgqAdQgSgNAAgQQAAgPASgNQASgLAYAAQAZAAASALQASAMAAAQQgBAQgSALQgSANgYAAQgYAAgSgLg");
	this.shape_758.setTransform(255.1234,631.0153,1.8158,1.8158);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#292929").s().p("AgnAiQgPgNADgVQACgRAPgOQAPgNASAAIABAAQARAAAPAMQAPANADASQAGAUgOANQgNAMgcABIgCABQgZAAgNgMgAgggcQgNANgCAQQgEATAOAMQAMAMAagBQAbgBAMgMQAMgLgEgUQgEgRgOgMQgOgMgQAAIgBAAQgRABgOANg");
	this.shape_759.setTransform(313.2814,614.5824,1.8158,1.8158);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FFFFFF").s().p("AgiAgQgQgLABgSQABgQAPgNQAOgNASgBQARAAAPAMQAPAMADARQADASgPALQgOAKgWAAIgDABQgSAAgOgJg");
	this.shape_760.setTransform(313.2748,613.9537,1.8158,1.8158);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#B9B9BA").s().p("AgqAdQgJgLACgSQACgQAOgOQAPgNARAAQARAAAPAMQAOAMAEASQAEAQgJANQgLAPggABIgBAAQgeAAgMgPg");
	this.shape_761.setTransform(313.2966,614.582,1.8158,1.8158);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#944934").s().p("Ag3BNQgIgGgEgaQgDgaAFgcQALhMAsgEQAfgDAZAoQAfAvgLBJQgCARgvAFIgSABQgiAAgUgOg");
	this.shape_762.setTransform(313.3175,606.3094,1.8158,1.8158);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#3B322D").s().p("Ag4CKQgNgLADgNQAEgbgPgcQgjgGgWgJIgbAFQgXAAgIgPQgLgTAIgmQAIghANgRIABgBQAbgWBBgcQBAgbAZgBQAXgCAbAUQAXAQAPAVQAHAKAPAKQAKAHAWALIAlAXQAhAjg0A7IgFAFIgJAQQgOAZgMANQgVAWgeAGQgoAJggAAQgqAAgTgQgAiFAoQAcAKAfAEIABABIABABQAQAegFAcQgBAMAKAJQARAPAoAAIBGgJQAegGATgVQALgMAOgZIAKgRIADgFQAzg4gfghIgkgVQgVgMgKgHQgRgKgIgKQgOgVgVgPQgagTgVABQgWAChBAbQhAAbgaAVQgOASgGAgQgIAkAKARQAHAMATAAIAbgEIAAgBg");
	this.shape_763.setTransform(278.4097,637.6335,1.8158,1.8158);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#DDB393").s().p("AhHAmIgSAAQAagVBBgcQBAgbAYgCQgWAIgsAWQg6AdgTAVQABgDgTABg");
	this.shape_764.setTransform(263.4749,617.4876,1.8158,1.8158);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#C68150").s().p("AhJBcQgkgFgWgPQgNASgYgFQgXgEABgOQgBgVAIgaQAIgWAJgMQAagWBCgcQBAgbAXgCQAWgBAaATQAWAQAPAVQAKAOAiATIAwAaQAEAFgGAFQgGAGgPgBQgxgEgoAVQg3AdgnAJQgOADgPAAQgNAAgPgCg");
	this.shape_765.setTransform(277.4694,627.1491,1.8158,1.8158);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#A3633B").s().p("AgkCSQgegKACgWQAFgcgQgdQgegEgcgLQgLAEgMAAQgZACgJgQQgKgRAIglQAIghANgRQAagVBCgcQBAgbAXgCQAWgCAaATQAWAQAPAVQAKAOAiATIAwAcQAWAXgSAiIgcAoQgHAJgTAiQgXAfgkAHQgpAJgeAAQgYAAgRgGg");
	this.shape_766.setTransform(278.4053,637.6266,1.8158,1.8158);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#342D2D").s().p("AAFgVQAMgGAIALQgQgDgSAVIgPAWQAMgmARgHg");
	this.shape_767.setTransform(265.1999,596.0712,1.8158,1.8158);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#292929").s().p("AgKAMQgEgFAAgHQAAgHAEgEQAEgGAGAAQAGAAAFAGQAEAEAAAHQAAAHgEAFQgFAGgGAAQgGAAgEgGg");
	this.shape_768.setTransform(268.4683,612.0856,1.8158,1.8158);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#292929").s().p("AgCAmQgQAAgJgHQgLgJACgWQACgOAMgMQAMgLAMAAIABAAQAMAAAKAKQAJAKADAQQAEASgNALQgKAKgSAAgAgUgYQgLALgCANQgBAVAKAIQAIAHAQAAQARgBAJgJQALgKgDgRQgDgPgIgJQgJgKgLAAIgBAAQgLABgLAKg");
	this.shape_769.setTransform(265.6801,610.2245,1.8158,1.8158);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FFFFFF").s().p("AgiAEQABgNAMgLQAMgLALAAQANgBAKALQAJAKABAOQABALgLAIQgLAIgOACIgHAAQgdAAACgcg");
	this.shape_770.setTransform(265.6467,609.491,1.8158,1.8158);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#B9B9BA").s().p("AgjAAQACgNAMgMQALgKAMgBQAMAAAKAKQAIAKADAPQADAOgIAKQgJANgWABIgBAAQgkAAADglg");
	this.shape_771.setTransform(265.7045,610.2701,1.8158,1.8158);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#944934").s().p("AgjA5QgKgMAPg1QAPg5AYgDQASgBAIAfQALAkgNA4QgCAMgbADIgIAAQgUAAgLgMg");
	this.shape_772.setTransform(265.6511,604.4089,1.8158,1.8158);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#372F2C").s().p("AjaD9QgXgIgKgbQgNgkgfgWQgTgOgxgSIgKgFIgBAAIgBgBQgBghARgzQAQgyAWgcIABgTQgBgpAHgcQANgxAoggQAsgkA2AAQAjAAAgAOQAggMAXgGQArgKApAAQBjAABYA6QA+AvAjBMQATApAMA4IACAKQAMAPADAbQADAegKAdIgCACIgNgJQAFAbgVAaIgEAFIgBgFQgDgJgHgGQAAAmgiASIgEACIAAgEIAAgXQgQAUgkAOQg2AVhZAAIgBAAIjvANgAkBjOQgmAfgNAxQgHAbABAoQABASgDADQgVAbgQAxQgRAyABAgIAIAEQAzATATAOQAgAXAOAkQAJAaAVAHIBAAHIASAAIDdgOIABAAQBpAAA3gdQAbgPAHgPIAFgLIACAmQATgMAFgWIACgUIgBgFIAFADQACAAAEAEQAGAFAEAHQAMgTAAgTIgDgQIgEgKIAWATQAJgdgEgcQgDgYgLgNIAAgBIgCgKQgMg3gSgpQgihLg+guQhVg6hiAAQg/AAhLAdIgCAAIgBAAQgbgOgmAAQg0AAgqAig");
	this.shape_773.setTransform(311.8434,617.8962,1.8158,1.8158);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#C07B42").s().p("AimABQgbABgtAQQAxgnA+AGQAfADAUALQBBgZA3gDQBogGBcA4QgegPgegHQhCgRhRAKQhOAIhAAfQgRgegoAAg");
	this.shape_774.setTransform(308.1888,576.6711,1.8158,1.8158);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#AF5E39").s().p("AhLDkQgGgCgIAGQhdgOg0g8QgSgSgigEIhAADQACghAPguQAQgwAVgZQgBggAEggQAIhCAwgmQAxgpA+AGQAfADAVALQBDgaA5gDQBqgFBfA/QBAAwAjBSIgHABIgCAAIgCgBIgLgCIACADQgOADgKAOQgHAKgDAMQgEAdgDA8QgIAzgqAXQhrBAi9AIg");
	this.shape_775.setTransform(307.8257,613.1869,1.8158,1.8158);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#944934").s().p("AjUD8QgZgGgLgdQgOgmgigXQgSgMg5gXQgCgfAQgzQARgyAWgcQgBggAEggQAIhCAwgmQAxgpA+AGQAfADAVALQBDgaA4gDQBrgFBeA/QBEAyAiBVQAJAWASBIQALANAEAbQAEAegLAeIgRgOIADAQQAAAXgRAUQgCgIgHgHIgGgFIgCAXQgHAYgXANIgBgfQgGAPgcAPQg4AehsAAQhWAAiHAOg");
	this.shape_776.setTransform(311.8976,617.908,1.8158,1.8158);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#372F2C").s().p("AgKBeQhFgLgcgmQgZggAQgsQAMghAkgRQAjgRAoAGQAbAFAXAOQAYAOAmAHIAEABIgDADQglAdgvA5QgjArgGAMIgBACgAhChNQghAQgLAfQgQAqAYAfQAaAjBCALQBFheA1grQgkgIgXgOQgWgNgZgEQgKgCgLAAQgbAAgYAMg");
	this.shape_777.setTransform(257.568,584.979,1.8158,1.8158);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#C07B42").s().p("AAdALQgegQgOgFQgggMgtAGQAbgNAgABQAhABAfASQAXANAnAIIgUASQgTgFgZgOg");
	this.shape_778.setTransform(262.0222,573.6299,1.8158,1.8158);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#944934").s().p("AgeAKQgegQgKgYQAcAbAnADQAnACAkgVQgYAcgPAWQgkgHgbgOg");
	this.shape_779.setTransform(249.9018,596.0612,1.8158,1.8158);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#372F2C").s().p("AgIAcQgNgCgIgEQgLgHgHgLQgGgKADgJQAEgNAUgBIAHABQAPACAPAQIAKAIQAUAOAHACIAEABIgLAMIgBABIgBABIgXABQgNAAgLgCgAgtgOQgDAIAGAJQAGAKAKAFQAHAEAMACQAPADAdgDIAGgHIgagRIgKgHQgOgPgNgCIgFAAQgRABgDAJg");
	this.shape_780.setTransform(254.2645,586.1547,1.8158,1.8158);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#944934").s().p("AgaAUQgTgKgCgQQgDgTAZgBQAOgBALAJIAOAMIASANQAJAIAHACIgJAJIgYACQgbAAgOgIg");
	this.shape_781.setTransform(254.1029,586.1628,1.8158,1.8158);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#944934").s().p("AARAHQgbgUgLAAQgKAAgLAEIgJAEQACgHAHgGQANgNATAEQAQAEARARQAVATAIAFIgJALg");
	this.shape_782.setTransform(254.5321,583.7192,1.8158,1.8158);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#AF5E39").s().p("AhgA0QgigiASgwQAQgrA0gNQA0gOAxAdQAXAOAnAIQglAegxA7IgnA0Qg8gJgegfg");
	this.shape_783.setTransform(257.2994,584.8888,1.8158,1.8158);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#342E2C").s().p("AgfATQgEgBADgKQAEgJAKgHQAPgMAaABQAGABADAFQADAFgBAHQgBAGgEAEQgFAEgHgBQgQAAgSAGIgLACgAgSgBQgJAHAAAJIAIgCQARgFAPAAIAEAAQAGAAADgFIACgFIgBgIIgEgEIgFAAQgXAAgNANg");
	this.shape_784.setTransform(471.9463,787.1211,1.8158,1.8158);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#663D2D").s().p("AgVAAQAOgRAfABQAJACgBANQgBAMgNAAIgvAGQgGgCAOgPg");
	this.shape_785.setTransform(471.7597,787.0722,1.8158,1.8158);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#342E2C").s().p("AgYAPQgFgBgCgDQgBgBACgEQAGgGAMgIQAOgJALAAIAFAAQAJACADAIQADAGgBAIQgCALgHAAgAgKgDQgMAHgDAFIAwAEIACgFIABgJQgDgKgHgBIgDAAQgKgBgNAKg");
	this.shape_786.setTransform(466.4052,782.4527,1.8158,1.8158);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#663D2D").s().p("AAXAQIgmgDIgNgDQgCgDASgLQARgNAMADQAMADAAANQAAAOgFAAIgBAAg");
	this.shape_787.setTransform(466.3719,782.4164,1.8158,1.8158);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#382F2C").s().p("AgTgJQAJgKATgBIARAAIgQACQgQAEgIAIQgJAIAGASIgGABQgHgTALgLg");
	this.shape_788.setTransform(478.8989,784.8132,1.8158,1.8158);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#382F2C").s().p("AjyExQgIgEgDgFQgXgEgPgSQgHgIACgGIAAgBQAKgWAcgLQAcgLAiAFQAiAFAMgLQALgLgMgXQiDitAYibQAJg/Aig5QAHgLATgUIARgSQhJBTgKBmQgOCTB7CjIABAAQANAagNANQgOANgngFQgegFgaAKQgbALgJAUQgBAEAFAGIAQANIAUAHIACABIAAABQACAEAIAEQAZANBCgBQBPgCBxgWQAegGANgSQALgQgCgYQgBgQgGgPQgQgpADgnQADg+AvgrIAigeQA8g0AXgeQAlgwAKg9IAGABQgKA9gmAyQgWAdg9A1IgiAeQguAqgDA8QgCAnAPAnQASAvgVAcQgOAUghAGQh9AZhPAAQg6AAgagNg");
	this.shape_789.setTransform(520.0972,734.7427,1.8158,1.8158);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#AF5E39").s().p("Airg4QAVhHA0g7IB/AUICbAsQgVA0gtAoQgcAZg9AkQhCApgcAWQg0ApgeA0Qg5iAAhhzg");
	this.shape_790.setTransform(506.3285,710.7741,1.8158,1.8158);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#944934").s().p("Ai1E9QhBgEgEgRQgQgDgOgLQgPgLACgJQAKgVAagKQAbgMAhAFQAiAFAOgKQAOgMgNgaQiDisAYibQAOheBDhMIHUBrQgLBFgxA4IhoBgQgwAsgDA/QgBAmAPAmQAMAegGAYQgIAjguAJQh7AYhQAAIgXAAg");
	this.shape_791.setTransform(520.1052,734.3795,1.8158,1.8158);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#342E2C").s().p("AglANQACgGASgLQASgNAOABQAKABAGAFQAFAFACAFQACAMgKADIhBACQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgLgBQgMAGgHAIIAFgBIA1gBQAFgCgBgIIgFgHQgFgFgHAAIgCAAQgKAAgOAKg");
	this.shape_792.setTransform(336.2064,780.4944,1.8158,1.8158);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#663D2D").s().p("AgSAAQATgPAOABQAPACAEALQAEALgJADIgKAAIgOgBIgmADQgGgCAVgNg");
	this.shape_793.setTransform(336.1994,780.4949,1.8158,1.8158);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#382F2C").s().p("AgdAQQAGgXAagHIAbgBIgZADQgXAIgFAUg");
	this.shape_794.setTransform(343.8238,778.1402,1.8158,1.8158);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#382F2C").s().p("AjbENQgggCgLgKQgHgHACgKIgCgDQgQgaAHgOQAGgKARgEIBbgIQAlgHALgRQAWgeAJg0QAKg9gWggQgIgMgagbQglglgQgYQgbgqABgtQABgSAIgWIAJgSQgYBDAaA3QAPAhAxAwQAbAbAIAMQAWAigKA+QgJA2gWAfQgNARgmAIIhcAJQgPAEgEAHQgHALAQAZIACADIAAACQgCAIAGAGQAJAJAgACIBpABQA3ACA0gDQAwgCAZgcQAOgQAKghIAEgMQAEgLAbgbQAvguAjgxQAtg8ANhGQALg6gHhXIAFAcQAFAggBAOQgBA7gOAuQgQA0giAuQghAvgyAxQgbAbgDAJIgEAMQgKAigPARQgbAegzACg");
	this.shape_795.setTransform(387.0581,737.5571,1.8158,1.8158);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#C88A55").s().p("AA2ByQgCgcgLgRQgIgMgdgdQgdgdgOgTQgzhGAfhUQgBAzATAtQAVAyAoAfQAtAiAGAwQAFAsgbAuQAHgggCgdg");
	this.shape_796.setTransform(362.4173,720.2163,1.8158,1.8158);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#AF5E39").s().p("AhyB0QAGg0gSgdQgIgMgdgbQgegegPgUQgyhGAfhTIDZgNID6AwQgLApgKAYQgPAjgYAVQgNAMgXANIgrAXQg5AdgeAyQglA7geAfQguAtg0ALQAfgzAGg3g");
	this.shape_797.setTransform(392.936,726.2538,1.8158,1.8158);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#944934").s().p("AjnELQgmgGAFgUQgMgUgBgIQgEgUAbgGIBHgFQA3gHAPgVQAWgeAJg1QALg9gXgiQgIgMgdgdQgegegOgUQgyhGAehTIHWAjQAHBagMA8QgOBDgrA8QghAugrArQghAhgEAKIgIAYQgGASgIAMQgaAlg4ACg");
	this.shape_798.setTransform(386.9993,737.2848,1.8158,1.8158);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#342E2C").s().p("AgmARIgBgBQgBgCADgFQAVgZAoAAIACAAQAGAAAEAFQAHAIgFAPIgBACIgDgBIgbgCQgXAAgTAGIAAAAgAgNgDQgMAFgGAJIAmgFIAZACQAEgLgFgFQgCgDgEAAIgBAAQgWAAgPAIg");
	this.shape_799.setTransform(331.8145,777.777,1.8158,1.8158);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#663D2D").s().p("AgWAAQAUgOAdAAQALACAAAMIgCALIgXgCQgagBgWAHIgBAAQgGAAAUgPg");
	this.shape_800.setTransform(331.5341,777.7947,1.8158,1.8158);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#382F2C").s().p("ACQgsQhSgghugEQhSgChbANIhLANIgCgEIBMgOQBbgNBTADQB0ADBUAjQBBAaArArQASASAVAtQgwhYhrgqg");
	this.shape_801.setTransform(396.028,619.9011,1.8158,1.8158);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#AF5E39").s().p("Akrg7IBLgNQBbgNBTACQEJAJBVCeg");
	this.shape_802.setTransform(396.3911,620.0047,1.8158,1.8158);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#382F2C").s().p("AhIF1QgGgBhAgnQhphAg7gfQhsg7hKgXQhFgVgsgrQgagZghg2QgWglgOgPQgWgagdgNIADgFQAeANAXAcQAOAQAXAlQAgA0AaAZQAqArBEAUQBKAXBuA8ICjBfQA/AnAGAAQDrAhEBhgQBtgqBVg3QBTg2Aog2QAXiYiChrQhjhRiQgeQg5gMhDgFIkBgRQg4gMhigfIhYgcIACgFIBYAcQBiAfA4AMQArAJBjACIBxAGQBEAFA5AMQA2AMA1AVQBSAiA7AwQBAA1AbBDQAbBBgLBMIAAABIgBAAQgpA3hWA4QhVA4hrAoQi/BIi8AAg");
	this.shape_803.setTransform(438.784,677.9536,1.8158,1.8158);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#AF5E39").s().p("AB9E6Qg9gKgogyQgkAXjCgRQipgOgbgKQhjgfg6hZIgqhCQgagigigPIA8heQBBhkAdggQBAhJBvgPQA8gHBpALQA7AGBNAiQBXAlAmAIICoANQCBAEBTARQA/ANA8AbQA6BOAGBaQAHBjg4BJQgkANghAQQgzgNhBgWIg3gUQgCAngnAnQgmAng3AVQgpAPgnAAQgRAAgQgDg");
	this.shape_804.setTransform(423.3355,662.9574,1.8158,1.8158);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#944934").s().p("AhHFyIiahaQikhghigfQhjgfg5hZIgqhBQgagigigPIIBkpIBXAcQBiAfA5AMICnANQCBAEBUARQCSAfBkBTQCCBsgYCXQgoA3hTA3QhWA4htApQi/BIi0AAQg+AAg+gJg");
	this.shape_805.setTransform(438.6637,677.9657,1.8158,1.8158);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#382F2C").s().p("AhnD9IgfgHQgLgGgBgHQgCgMAMgeIAAgBIABAAQAPgIAagBIATgDQAWgMACgXQABgVgNgUQgMgSgogiQgjgegOgQIgCgCIACgBQApgiAwgwQBehfAqhDIAIgNIgDAPQgMBJASBJQAOA6AeAzQAJAQARAWIARAXQAHANABAQQACAcgjAoQgiAogxAaQgjATg9AAgAhEhRQgzA0gnAfQAPASAhAbQAoAhAMATQAPAWgCAWQgCAagYANIgXAEQgXABgNAHQgLAbABALQABAGAIAEIAdAGIA5AEQA7AAAhgSQAwgaAigmQAigngCgbQgBgOgHgNIgQgXQgQgTgLgTQhEh4AQh8QgqA+hUBVg");
	this.shape_806.setTransform(562.0016,736.6946,1.8158,1.8158);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#944934").s().p("Ag9D4Qg4gCgQgIQgKgEgBgIQgBgKALgeQAPgHAUgBIAZgEQAXgNACgYQACgVgOgVQgMgRgjgfQgpgjgOgOQAogjAwgvQBghgAqhDQgMBDAPBFQANA+AhA7QAGAKAcAkQAQAVABAVQACAbgiAoQgiAngxAaQghASg6AAIgSAAg");
	this.shape_807.setTransform(562.0472,737.7728,1.8158,1.8158);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#382F2C").s().p("AgRgEIgEgUIAGARQAMASAZAKIgCAEQgcgIgJgVg");
	this.shape_808.setTransform(309.7776,748.6335,1.8158,1.8158);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#382F2C").s().p("AgKgEIgGgSIAKARQALARAMAHIgEAEQgPgJgIgSg");
	this.shape_809.setTransform(304.5572,754.898,1.8158,1.8158);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#382F2C").s().p("AgFgEIAAgPIADAOQADAPAFAIIgGACQgEgJgBgPg");
	this.shape_810.setTransform(296.25,754.4894,1.8158,1.8158);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#382F2C").s().p("AgEgFIgNgSIARARQAPASADALIgHABQgCgKgNgTg");
	this.shape_811.setTransform(317.4494,723.5755,1.8158,1.8158);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#382F2C").s().p("AiyDOIgBAAQgMAAgKgGQgRgIgGgVQgbhnAShEQAOgyAogcIAQgKQA5gnAVgVQAigjAAgiIAAgGICLBTQCEBVAVApIABABIgCACQgoAihTANIhpAJIg5gDQACAOgHAZQgHAaABAQQAHAmgNAMQgGAGgLAAQAEAMgKALQgKALgNAAIgKgCQgJANgOAAQgTgBgSgRgAhSiQQgVAVg4AmIgQALQgsAfgMA9QgLA/AYBZQAJAfAegBIAEAAIABABIALAJQAMAJAKgBQAMAAAIgLIACgDIACACQAEACAFAAQAKABAHgKQAKgKgGgMIgCgFIAGAAQALADAFgFQAMgKgHglQgBgSAHgZQAHgbgCgPIgBgDIAFABIA7AEIBmgIQBQgOAogfQgUgnh3hMQg/gphNgsQgCAigjAjg");
	this.shape_812.setTransform(329.0685,720.988,1.8158,1.8158);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#C88A55").s().p("AheAlQANg6ArgeQBFgwATgRQAogmgBgmIAEACQAIAPgBASQgCAQgMAQQgRAWg0AkQgwAkgSAaQgeAngHA4QgFAnAHBAQgXhcANhAg");
	this.shape_813.setTransform(303.9035,716.3577,1.8158,1.8158);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#AF5E39").s().p("AhsC9QgZheANhAQANg6ArgfQBFgwATgRQAogmAAgmIA6AhQAFAogEAWQgHAggfAPIg4AUQghALgGAQQgKAggLBZQgRBMg4ANg");
	this.shape_814.setTransform(308.4629,717.6288,1.8158,1.8158);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#944934").s().p("AibDZIgVgPIgTgDQgTgHgHgXQgYheANhAQAMg6AsgfQBGgwATgRQAogmgBgmICCBNQCIBWAUAqQgwAnhuANQhVAJgrgKQADAPgIAZQgHAbABARQALA7gjgGQAIAPgQANQgPANgMgJQgJAOgNAAQgHAAgIgDg");
	this.shape_815.setTransform(328.9791,721.2604,1.8158,1.8158);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#342E2C").s().p("AABASQgYgLgIgRIgBgCIACgBQAZgNAFAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAWAnAHAIIAAACIgDABQgLAAgSgIgAAYAVIgYgpQgGABgTAJQAIAMARAJQAMAIAMACg");
	this.shape_816.setTransform(317.9941,754.671,1.8158,1.8158);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#663D2D").s().p("AAGARQgagLgKgSQAdgOABACIAdAvQABABAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQgEAAgUgIg");
	this.shape_817.setTransform(318.177,754.8299,1.8158,1.8158);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#342E2C").s().p("AADAOQgUgLgIgMIgBgCIACgCQAYgMAGADIABAAIAAABQAOAiAGAGIAAADIgCABQgGAAgQgJgAASAQIgQgiQgFABgPAHQAKAOAaAMg");
	this.shape_818.setTransform(312.4105,760.5786,1.8158,1.8158);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#663D2D").s().p("AgXgKQAOgHAJgCIADgBIAVApQgigLgNgUg");
	this.shape_819.setTransform(312.5467,760.527,1.8158,1.8158);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#342E2C").s().p("AABANQgSgMgHgMIAAgCIACgBQAYgKAGADIABAAIAAABQALAiAEAFIABADIgEABQgFAAgPgKgAAPAPIgMggIgUAHQAJANAXAMg");
	this.shape_820.setTransform(305.1928,762.6908,1.8158,1.8158);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#663D2D").s().p("AgUgMQAWgJAEACIAPAnQgfgMgKgUg");
	this.shape_821.setTransform(305.1474,762.6743,1.8158,1.8158);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#342E2C").s().p("AgBAKQgPgOgCgOIAAgDIAhgBIABAAIAAABQAAAjADAGIAAADIgEAAQgEAAgMgNgAALAOIgBghIgWACQAGARARAOg");
	this.shape_822.setTransform(296.4769,760.9809,1.8158,1.8158);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#663D2D").s().p("AgPgSIAcgCIAAATQABASACAEQgbgSgEgVg");
	this.shape_823.setTransform(296.4315,760.8447,1.8158,1.8158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349}]}).wait(1));

	// Layer_8
	this.instance_6 = new lib.Symbol1_1("synched",0);
	this.instance_6.setTransform(-20.8,-101.3,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '02A7AEEBE82EF047AED1EC1AA7501744',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1.png", id:"BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1"},
		{src:"images/sound.png", id:"sound"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/yes.mp3", id:"yes"},
		{src:"sounds/wro.mp3", id:"wro"}
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
an.compositions['02A7AEEBE82EF047AED1EC1AA7501744'] = {
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