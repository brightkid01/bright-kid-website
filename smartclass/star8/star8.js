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



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,437);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,425,366);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,616);


(lib.Image_16 = function() {
	this.initialize(img.Image_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.Image_17 = function() {
	this.initialize(img.Image_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,800);


(lib.Image_3 = function() {
	this.initialize(img.Image_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,1567);


(lib.Image_4 = function() {
	this.initialize(img.Image_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,468);


(lib.BRIGHTEDGELOGO = function() {
	this.initialize(img.BRIGHTEDGELOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
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
		_root.star_mc1.b2.enabled=false;
		_root.b3.enabled=false;
		_root.star_mc2.b4.enabled=false;
		_root.b5.enabled=false;
		_root.star_mc4.b6.enabled=false;
		_root.b7.enabled=false;
		_root.b8.enabled=false;
		_root.star_mc3.b9.enabled=false;
		*/
		this.stop();
		playSound("intro");
	}
	this.frame_176 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(175).call(this.frame_176).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(1,1,1).p("AgngjQAnAhAoAm");
	this.shape.setTransform(82.1,21.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(176));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.1,25.9);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,0,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151.5,130.5);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_4();
	this.instance.setTransform(0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,171,140.4);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#355C3B").s().p("AAiATQgNAAgMgGQgQgQghgCQgJgBgEgFIgMgNQAaAFAnAPQAzASAOAFIABAGg");
	this.shape.setTransform(37.1,161.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E7F4A").s().p("AhOALIhJgEQgqgDgegJQAUgKAeAEIAxAIQAgACA4ABQA9AAAaAAQAfACA4gDQA7gFAbABQglAPhBACQg/ACgwAAQg2AAgjgDg");
	this.shape_1.setTransform(94.725,169.087);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#723B7B").s().p("AAAAEIgegBQALgGATAAIAfABQgLAGgRAAIgDAAg");
	this.shape_2.setTransform(102.825,90.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#59352D").s().p("AgJgIQANAGAFALQgQAAgCgRg");
	this.shape_3.setTransform(19,154.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#59352D").s().p("AgBAGQgLAAgDgLIAYAFIAHAGIgLAAIgGAAg");
	this.shape_4.setTransform(21.5,156.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#355C3B").s().p("AgYAAIAAgGIAYAEQAPACAKAGIgKABQgQAAgXgHg");
	this.shape_5.setTransform(56.7,167.2522);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#59352D").s().p("AAAAGQgNgCgIgIIATAAQAMgGAMALIAAAGQgTAAgDgBg");
	this.shape_6.setTransform(38.325,163.3886);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3F4532").s().p("AAAAHIgbgIQgDgEAEgEQAIgDAIADQAGACAIAGIAZAMIgDAAQgMAAgOgEg");
	this.shape_7.setTransform(43.2607,164.2528);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F4532").s().p("AAGAIIgPgEQgJgDgGgEIAAgGQAggIARAaQgEADgFAAQgFAAgFgEg");
	this.shape_8.setTransform(35.525,162.0026);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3F4532").s().p("AgpgJIBQAMQABABABABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgHABQgqAAgggTg");
	this.shape_9.setTransform(50.2625,166.2551);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#59352D").s().p("AgogSQANABAVAMQAVALAMABQAIgBAGAGQABAEgDADQgwgHgfgeg");
	this.shape_10.setTransform(29.075,159.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3F4532").s().p("AAKAQIgfgQQgNAAgGgMQgFgDgBgDIAAgHIBQAkIAKAFQAGACgFAIQgPgBgUgJg");
	this.shape_11.setTransform(27.1464,157.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#355C3B").s().p("AAAAGQgqgGgggLIBLAIQArAFAfAKIhLgGg");
	this.shape_12.setTransform(66.675,169.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A0B1C3").s().p("AAAgGIAoABQgOAFgZACQgeACgLADQAPgNAZAAg");
	this.shape_13.setTransform(96.25,96.7741);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39396F").s().p("AAAACQgQgCgLgFQAKABATgBQAQABAKAKIgcgEg");
	this.shape_14.setTransform(48.9,136.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2F874D").s().p("AAGATIgiggIgDgLIAmAYIAZAZg");
	this.shape_15.setTransform(14.925,147.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E7F4A").s().p("ACoBQIhugaIgdgHQgQgDgNABQgTACgagJQgcgMgPgFIgUgIQgMgEgJgBIgrgRQgYgLgOgPIglgaQgWgPgLgPQAHgFAHAEIAMAHQA6AiAkARQA0AZAwALIAeAMQASAIAMgCQARANAaAHQAIADAmAIQAnAICCAXQASADAFAKQgygCg/gNg");
	this.shape_16.setTransform(43.575,158.9779);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D9751").s().p("AAAACQgUgCgNgFIAiAAQAUACANAJIgigEg");
	this.shape_17.setTransform(69.475,165.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E904F").s().p("AACAqQgYgBgpgEIhCgGIgHAAQgmgJg3gLIhfgQQgNgDgZgIQgagIgNgCQgRgCACgPQAEgBAMADQAJACAGgEQASARAeAEQARACAjACQAdAKARAEQAZAFAWgBIAjAEQAVACANAGQClAVCIgDQA1gBBDgHIB4gQQgOAJgWAEIgmAGIgNAAQgIAAgFAGQhEAMhaABIiegCg");
	this.shape_18.setTransform(85.3438,165.3857);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2E7F4A").s().p("AhWAUQgBgIAFgBIAKAAIAsgGQAZgDAQgGIAfgHQAHAAAOgHQAOgGAIABQghAYg6ANQgMgBgRADIgbAHIgJABQgJAAgIgEg");
	this.shape_19.setTransform(125.8417,166.4833);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#306740").s().p("ABAAsQgpgBh8gMQgXgFg0gHQgwgGgbgHIg0gIQgSAAgWgFIgngLIABAAIgQgEQgKgDgBgJQABgFAFgCQALgFAPADIAZAHQCEAiBcAHIALACQDsAgDGgcIAKgDQAKACAPgDIAYgEIARgDQAJAAAGAGQgJAIgSAEIgdAHQiYAUhwAAIgZgBg");
	this.shape_20.setTransform(84.375,167.2028);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#453E30").s().p("AgJgPIAQATQAGAEgEAGIgCACQgPgKgBgVg");
	this.shape_21.setTransform(11.0895,145.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#453E30").s().p("AAbAoIAAAAQgLgGgIgNIgGAAQgXgfgggYIgBgMIAEgCQAKAEAKAJIASARQAJALAZARQAYAQAJAOQAAAFgEADIgFABQgJAAgKgJg");
	this.shape_22.setTransform(17.275,151.3672);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8C98AB").s().p("AAAAEQgXgEgKAAQAGgEAMAAIASgCIATACIANAKIgIABQgLAAgQgDg");
	this.shape_23.setTransform(99.95,93.0705);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6A3E75").s().p("AgkAHQgDgFgGgBIgKAAIAAgFIANAAQAKgEAVABQAUABAKgFIATAAQALAAAHAGIhJANQgFAEgEAAQgGAAgEgFg");
	this.shape_24.setTransform(104.025,91.7081);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A6B6C3").s().p("AgPgCIAfAAQgIAFgIAAQgHAAgIgFg");
	this.shape_25.setTransform(109.975,105.8875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A6B6C3").s().p("Ag4AWQAAgJgGgGQgDgEgKgGIgRgGQgJgFAEgLQACgJAKAAIARABQAAAEgCALQgBAIAIgBQAQgDAcAOQAaAOARgFIAOAAQAHABAEAFQAGAGAUACQASABAGAKIgNABQg+AAhQgNg");
	this.shape_26.setTransform(97.876,102.1059);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A6B8C9").s().p("AgwAuQgUgKgXgGQgNgDgEgIQgEgIALgLQAJgEADgIQAPgJAaAAQAfgBAJgDIA6gOQAjgIAZgDQgJASgTgBQghgBgXAVQgHAGgRABQgRAAgHAFIgNABQgIABAAAJQAAANARABQAIAAAEAHIAGAMQgJAIgMAAQgJAAgKgFg");
	this.shape_27.setTransform(101.1698,98.7917);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#553461").s().p("AgSAFIAHgKIAeAIIgTADIgSgBg");
	this.shape_28.setTransform(67.925,90.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#553461").s().p("AgbACQAMgGAPACIAcAEIggACg");
	this.shape_29.setTransform(73.85,91.5368);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5E3969").s().p("AgLASQgOgGgfABQgeAAgPgGIAIgEIgFAAQgPgBgLADIgQABQgKgBgGgFQADgCADgBIgGgBQgHgDgEgFIgBAAQAFgFAGAAIAMADQAZAHAlADIA/AEQBOAIBbgCQAJgEADABQAGAAACAJQgGAEgOgBQgNgBgGAEg");
	this.shape_30.setTransform(83.525,91.2229);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#315667").s().p("AgOgCIAPAAQAJAAAFAFIgPAAQgJAAgFgFg");
	this.shape_31.setTransform(69.475,67.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#315667").s().p("AgRgCQAGABALgCQAMAAAHAGIgTAAIgBABQgKAAgGgGg");
	this.shape_32.setTransform(75.4,68.4518);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8A4C9B").s().p("AgPADQAGgFAJAAIAQAAIgHAFg");
	this.shape_33.setTransform(103.125,70.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8A4C9B").s().p("AgBgCQAOgDACgEQgBAKgLAEIgRAEQABgJAMgCg");
	this.shape_34.setTransform(106.85,69.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8E509D").s().p("AghAdQgNgJgZACQgbADgOgBQgMAFgGgHQgEgEgBgMQgCgLAHgHQAIgHALABQAXABApgEQArgFATABIAxAAQAbgDAUgKQANgHAMAHQgQANgZAFQgMACggABIgYACQgNADgHAJQgIALAIAKIAPAPIACAJQgjAAgWgNg");
	this.shape_35.setTransform(90.4039,75.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#763B81").s().p("AgbAEIgKgBQgGgBgDgDQATgGAbAAIAvAAIAAAGIgEACQgKAEgTAAQgUABgIADQgIgBgFgEg");
	this.shape_36.setTransform(101.275,90.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#723B7B").s().p("AgXAKQgMACgGgEQgDgEACgEIAcAAQAQABALgGQAEABALgEQAKgEAGAGQgVAMgdAFQgFgDgMACg");
	this.shape_37.setTransform(110.275,89.995);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#883C93").s().p("AgTALIgKgBQgGgBgDgFQAHgEATgDQAQgCAHgIIAcAAQgDAJgJAGIgQALIAAgDQgEgCgKAFQgEABgDAAQgFAAgEgDg");
	this.shape_38.setTransform(113.525,88.292);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#763B81").s().p("AAMAJQhigLgggBQgOAAgKgMQAfACBrANQBUAJA1ABQADAAAHAFIgaABQgrAAg+gHg");
	this.shape_39.setTransform(77.875,89.036);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#723B7B").s().p("Ag+ANQgfgIgMABIgGgGQgEgEgEABQgaADgngLQgvgPgQgBQgCAAgCgDIgEgGQATACA9AOQAyALAggCQAUAJAkACQAsABALACQAkAHAzADIBXAGIAsAAQACADAJAAQAIAAABAHQgCAGgFABIg5ABQiTAAhrgYg");
	this.shape_40.setTransform(72.975,88.6938);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#763B81").s().p("AAuASIg6gNQgkgGgXgJIgKgBQgFgBgDgEQATgHAbAHQAmAJAGAAQALAAAWADQADAEAGABIAKAAQAFAHAOAAQAOgBAEAHQgJAHgPAAQgJAAgLgDg");
	this.shape_41.setTransform(54.525,86.0949);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8F4B9B").s().p("AAJAbQgGgCgcgDQgWgCgLgMQAAgIgIgHQgJgLgCgEQAagSAtAMQAmAKAbAPIATALIgIAMQgFAHAAAGIgKABQgaAAgUgHg");
	this.shape_42.setTransform(86.925,79.7725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#33345B").s().p("AgSgFQAHAAANAAQAMABAFAKQgYgCgNgJg");
	this.shape_43.setTransform(56.075,139.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#575E6B").s().p("AANALIhkgQQgTgCgIgKQAPgCAWAGIAlAJICbAXIgMAAQgoAAgygIg");
	this.shape_44.setTransform(63.875,111.7357);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7D858D").s().p("ABlBCIg7gDQgmgBgUgCQg1gFhDgNIh3gaQh0gahEgmIgHADQgLgQAAgKQBEApBrAWQAOACAUAGIAhAJQAWAJAaAEQAVACAegBQAWgBAjAIQAsALANACIA8ADQATAIAfABIAzADQB9ATCZgnIAVgEIgIAMQgGAFgHACQgNgHgSAFQgUAJgLABQg/ALhSAAQg8AAhFgGg");
	this.shape_45.setTransform(77.0489,105.8848);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#59352D").s().p("AgIAJQgOgNgIgOQABgJAFgDQArAMAMArQgCAFgKABIgbgWg");
	this.shape_46.setTransform(14.325,151.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5E362D").s().p("ADFBhQhngFgzgFQhXgIhBgSQgbgHgrgHIhIgMQgfgGgsgTQg+gagKgDQhCgYg0gtQADgGAJgDQAGAAACABIARAQIAGAEQAFAEAIABIANAEIAVANQAkAWAqANIARAGIAQAHQAOAIAcACIA9APQArAPAhAAQAfAGAQABIAJADQBVATA+ABQAyAHA+ADQApACBIABQApAAA2gFIBfgLIATgCQAJABAHAGIAAAGIg+AKQglAGgaADQhOAHg+AAQgdAAgagBg");
	this.shape_47.setTransform(67.925,163.089);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A5B1BA").s().p("AAnAWQgIgTgSABQgTAGgKAAIgfACQgSgBgOgHQgMgFgUABIgjAAQABgGgIgEQgKgFgBgCIASAAQANgKAUAEIAhAHQAyAAAnALIAGAAQAQAHAQgHQAXAEAkgCQAwgCALAAQgeAUgzAEQgUABgKACIgJACIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_48.setTransform(106.875,106.1032);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#97A2B4").s().p("AgPADQAGgFAJAAIAQAAQgGAFgJAAIgQAAg");
	this.shape_49.setTransform(93.15,94.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#97A2B4").s().p("AAWAKIg3AAIgNgLQAFgFAHgCIANgBQAbgBAoAOIABAAQgEAGgIAAIgNAAg");
	this.shape_50.setTransform(98.775,93.272);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A1B0C0").s().p("AiFAZQAygPA2gDQAigEARgJQAEgFAHAAIAOAAQAfADAygQIAGANIh0AeIgmABQgYABgPAEg");
	this.shape_51.setTransform(98.75,94.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A0B1C3").s().p("ABNAjQgZABgNgBQgVgDgNgOQgFgHgXgBQgagBgIgDQgSgFgHgSQgBgBgFgBIgJgBQAEgIAJgDQAFgCALAAIBfABQAbgGAkACQAIAFgDAGQgBACgHAHQgCABgJACQgHABgDAFQACADAVAOQAOAKgJARIgGABQgIAAgDgDg");
	this.shape_52.setTransform(82.6606,100.7714);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#99A1A8").s().p("AiLADQAVABAogBQAkABAZAKQAbALAlgWQAOgJAagFQAjgHAGgDIAMANIgHALIhWATIgWAAQhPAAhVgTg");
	this.shape_53.setTransform(110.575,107.743);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#89929A").s().p("AgYAYQgsgChIgHIgNgBQgHgCgBgJQgNgJgegEQgfgDgNgIQAdgBAmAFIBBALQANACAVAAIAhABIArAGQAZAEAPgBQAWgBArABQAmAAAZgIQAYgOASgEQAXgGAWAFQgCAKgJADQhFAXhOAHQgiADgmAAIgrgBg");
	this.shape_54.setTransform(99.025,110.231);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#393A70").s().p("AADANQgJgKgDgOIAMAGIABAFIAGANg");
	this.shape_55.setTransform(20.825,122.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#393A70").s().p("ABzA4IgMAAQgKgIgRgBQgYgCgFgCQgigDgpgRIhHgeIgegNQgRgHgLgJIgNgLQgGgGgBgIIBFAeQAKAUAaADQAYADAoAPQArASAUADQARAEAZACQAOAJAaAGQAfAGAKAEIggABQgTAAgMgHg");
	this.shape_56.setTransform(41.425,131.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#353561").s().p("ACrBVQgGgBgDgFQgGgGgMgCIgTgFQgegBgpgMQgugQgWgHIgOgEQgIgCgHAFQgugRgegQQgogWgcgdIgLgMQgGgHgBgIQADgEAEAEIASAMQAaAZAsAUQAZAMAzATQAaALA1ANQAJAEASACQATACAIAEQAJACAEAEQADAMALABQAHABAMgCQAnABAWAYQgFgEgHACQgJACgEAAIgKAAg");
	this.shape_57.setTransform(41.725,131.9375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373A6B").s().p("Ag0AKQA7gaAuAJIAAAHQgMAIgQgDQgPgDgXAEQgXAEgMAAIgEAAg");
	this.shape_58.setTransform(114.3,141.2224);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2E9A52").s().p("AgLgKQAOgGAEALIAGASIgFAAQgVAAACgXg");
	this.shape_59.setTransform(19.296,148.4439);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2D9751").s().p("AgIANQgggIgJgUQASgCAfALQAhALARgCIAAAGQgQAHgSAAQgMAAgMgDg");
	this.shape_60.setTransform(51.725,162.5499);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F9751").s().p("AAGAWIgRgOQgEgEgEgHIgHgNIgCgKQAzgIAGA4IAAAGIgFAAQgJAAgJgGg");
	this.shape_61.setTransform(12.725,145.0958);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2D9751").s().p("ACKBJIgRgBQhcgUg/gkIgygUQgfgNgPgRQgBgDgOgKQgKgIgCgJQABgFADgDIAYAAIALAOQAHAIAHADIAsAXQAaANASAHQBmAjAzAVIALAEQAHADACAFIgBAEQgGAFgIAAIgEAAg");
	this.shape_62.setTransform(31,154.5577);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2E904F").s().p("AgiAOIAGgMQAHgBAYgJQATgHANAAQgGAJgVAIQgEABgPAJQgIAEgHAAQgEAAgEgCg");
	this.shape_63.setTransform(133.725,163.8746);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2DB055").s().p("AgMAGQAMgWAMAWg");
	this.shape_64.setTransform(67.9,148.5875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2E9A52").s().p("AAOAfIhsgFQhBgDgsgLQgigNgmACQglgCgLgCQgbgFgTgOQgDgEADgGIATAAQAhACAxAKIBSAPIAuAGQAaAEAUAAQAhgBBWAFQBLAFAsgEIBKgFQAqgEAegIIAGAAIBLgMQAEAJgMAHQgTAHgQACQiTAbhxAAQgcAAgagCg");
	this.shape_65.setTransform(93.7453,166.104);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2DB055").s().p("ABxBZQg2gDgmgQQgRgHgggCQghgDgQgGQABgTgMgMQgLgKgSgCQgGAAghgNQgXgKgRAJQgCABgEgEQgDgDgCghQgCgiACgEQAJgNAKAPQAGAKAJACQAGABANgCQARgCAZgBIApAAQgcAQAZANQASAKAPAaQAKAVAVAIQANAGAbACIAbAHQARAEAKAAQADgBAEACQADACABACQAKAfAhACQA0ADACABIAJACQAFABADADIhgAAg");
	this.shape_66.setTransform(73.8056,156.4358);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6B3A2E").s().p("AhyA4QAKgIARgFQAXgGAGgDQApgMAwgWQAOgJARgGIAWgRQAPgKAFgLIAMgKQACAfgUAVQgLAMghATIg4AQQghAJgWAJQgYAKggAAQgEgEADgEg");
	this.shape_67.setTransform(131.0526,163.925);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#984135").s().p("AgIAFQABgNgBgHQATALgCAUIgBAAQgOAAgCgLg");
	this.shape_68.setTransform(4.6839,152.5761);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333B5F").s().p("AgSAHQAFgCANgIQALgIAJAAQgRAVgWACg");
	this.shape_69.setTransform(129.025,137.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333B5F").s().p("AgbAJQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIACgDIAAAAIA5gKIgKAJQgHAAgQAFQgLADgIAAIgFAAg");
	this.shape_70.setTransform(122.4125,140.1923);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373A6B").s().p("AgmAMQAMgPAXgEQAMgCAbgDQABABABAAQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgQAHQgTAIgIACQgKADgJAAIgLgBg");
	this.shape_71.setTransform(123.5083,139.2231);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3C438D").s().p("AgPADQAGgFAJAAIAQAAQgGAFgJAAIgQAAg");
	this.shape_72.setTransform(120.575,137.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3C438D").s().p("AgBgEQAGgDAHAHIgXAGQAFgIAFgCg");
	this.shape_73.setTransform(124,136.6841);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3C438D").s().p("AAAAEIgegBQALgHATABIAfABQgLAGgRAAIgDAAg");
	this.shape_74.setTransform(115.9,138.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3B3D7C").s().p("AheAVQATgKAKgLQALgDAUABQAVACALgFQADgDAMAAQAKAAAFgEIAGAAQAEgBAHgGQAIgEAGAFQAMAAATgMIAmgHIgMAOIgSALQgMAIgIABIgkAJQgWAGgNAHIgIADQg5ABgsAOIgZABIAhgRg");
	this.shape_75.setTransform(119.35,138.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#39396F").s().p("AAqATQgPgIgWgFIglgGQgLAAgFgCQgIgDAFgNQAKACAVACQAUABALACQARgDAUAPQAAAJAGADIAAAGg");
	this.shape_76.setTransform(58.144,138.475);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3C3D80").s().p("AAnASQgOgGgFAAQgugHgRgGIgLgFQgGgDACgIQARgEAUADIAlAIQAaAAAFACQAPAFgDAXIgGAAQgGAAgIgCg");
	this.shape_77.setTransform(57.0273,136.5733);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3C3E82").s().p("ABnAoQgZgEgNAFQgPACgSgFIgggKIg1gSQghgLgUgEQgPgDgHgFQgLgHAAgPIAfgGQAvAZBAARQAeAIBXARQAQAEAEAJQgHADgLAAQgIAAgLgCg");
	this.shape_78.setTransform(44.575,131.5389);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B43638").s().p("AgHAAQgEgMANgJIAGAHQADAGgGAMQgFALACAHQgHgOgCgIg");
	this.shape_79.setTransform(84.5318,11.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5D382E").s().p("AgDAlQgXgtALgjIALAUQADABADAIQACAHAOAZQACAHgBAGQgEAJgGAEg");
	this.shape_80.setTransform(10.3142,144.775);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A6B8C9").s().p("AgOgFIAeAAIgYALQgKgEAEgHg");
	this.shape_81.setTransform(113.0429,93.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9DA5B5").s().p("AgPAJQABgJAKgHQAEgEAMgGIAEAAQADAegiAFg");
	this.shape_82.setTransform(116.2159,88.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#97A2B4").s().p("AgsAZQgEAAgFgDIgJgHQgDgFAEgGQANgHAUgDIAigFQAKACAPgHQASgJAGgBQAFAAADADQADAHgFAFIgQAIQgKAEgFAGIgCAEQgWAQgeAAIgUgCg");
	this.shape_83.setTransform(108.5297,91.7679);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#767F42").s().p("AAAAIQhLgFg9gIQAXgKAnADQAxAEANgCQA0ALA9ABIAUAAQALABAFALQhYgDgxgDg");
	this.shape_84.setTransform(77.3,37.4904);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#838C44").s().p("AA8ANQgXgGglgCQgvgDgMgCQgMABgGgBQgJAAgEgLIABAAQAcgCAzAEQA1AFAZgBQARgBAFANQgJAAgDAGg");
	this.shape_85.setTransform(85.05,37.5692);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A7B045").s().p("AgBAFQgJgCgEgIQATgBAKAMQgOAAgCgBg");
	this.shape_86.setTransform(90.65,35.1216);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A7B045").s().p("AgUABIAAgFQAEABARgDQANgDAIAKIgTAAQgKgBgHAHg");
	this.shape_87.setTransform(96.85,36.251);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#315667").s().p("AghgJIAiACQAUACANAIQABADgBADIgGABQgjAAgagTg");
	this.shape_88.setTransform(60.775,67.1551);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2C7D85").s().p("AjqgHIgVgKQgMgGgKACQgGgDAAgJQAcALA1AHQA5AIAYAHQAGACAKgGQAJgHAGADQATAMAdADQARABAgAAQAhADA0AGIBUAKQASACAkgEQAkgEASABQgSAMgeAAIgMAAQkFAAjFgpg");
	this.shape_89.setTransform(77.625,64.7261);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2D6770").s().p("AAPAcIgcAAQgGgDgMAAQgNABgGgDIgZgBQgFgDgKAAQgLABgFgEIgmAAQgOAAgUgFIgigIQgwAAgbgkQAPgDAVAGIAjALQA+AKBSAJICPALIBmAHQA5ACAsgKIAOAAQgEANgPAEIgaAHIjIABQgLgHgRAAg");
	this.shape_90.setTransform(78.625,65.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#878F97").s().p("ABrAxQhFgSgigKQg8gRgpgUQgOgIgIgMIgBgGQAIgIAKACQADABANAJIASAOQALAGALgKQAHgFAKALQAJAJAQAIIAaAMQALAJAXADQAaADAJAEQAFADAMADQAKADAEAJQgFAFgGAAIgEAAg");
	this.shape_91.setTransform(43.3,102.3765);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#86929A").s().p("ACWAqQgIgBgcgGQgegHhBgHQg+gGgggIQgEgBgHgEQgZgRgpgHQgOgBgHgCQgLgDgCgNIBLAAQBIAXBpAOQAFAAAMAHQAJAGAIgCIAhAGIAhAFIAOACQAIADgBALQgNAIgRAAIgHAAg");
	this.shape_92.setTransform(64.1868,107.2667);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A5B1BA").s().p("AgHADQgEgFADgFIAHgIIAKARIABAHIgGAHIgCAAQgIAAgBgNg");
	this.shape_93.setTransform(124.1734,105.2285);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AFBBC4").s().p("AgSAQQgFgBgYgBIgKgBQgFgFgVgDQgRgCgFgNQAKgEAVABQAVACAKgFQAngGAgAMQAOAFAZgDQAbgEAMACQACAGgEAFIgFAKIgIADQgmAFgfAAQgWAAgSgDg");
	this.shape_94.setTransform(113.4364,104.7144);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#553461").s().p("AgOACQAFgFAJABIAPAAQgDAEgGAAIgJABg");
	this.shape_95.setTransform(60.775,89.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5E3969").s().p("AAHAMQgGgFgNAAQgOgBgGgFQADgDAHAAQAHAAADgDIAAAAQAPgNAYANQADADACAEQAAAGgIAEg");
	this.shape_96.setTransform(63.6,89.9186);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5F3869").s().p("AgUANQgzgQgjgdQALgGAMAJQAPALAGgBQADACAIAAQAHgBADADIBAASQAnALAcAAQAKgBAGAKQABAEgCAFQgFAEgKgCQgLgCgFADQhDgNgbgJg");
	this.shape_97.setTransform(51.8031,86.3137);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A6B8C9").s().p("AgOAHIANgKQAHgGAKAFIgSALg");
	this.shape_98.setTransform(116.2,91.7238);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#ABBCCC").s().p("AABA8QgZgCgFACQgUgFgHgDQgQgNgKgEQgQgGAAgOQABgJAHgFQAEgBAKgCQAXgFAqgQQApgQAWgEIAHgFQAEgDAKgBQAJgCAEgCQAHgGAGAGQgOAVgdALQgjALgQAHIgDAAIgSAGQgKAEgBAHQgBAKALADQAPAEACACQADAEAMACQALABAEAFIAAAHQgJALgQAAIgEAAg");
	this.shape_99.setTransform(106.0243,98.1953);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#95489A").s().p("ABbAcIghgEIgigDQgGgBgSgLQgQgJgNADQgoAIgzgTQgFgKAFgGQACgEALgFQAKgCAbAKQAXAIAPgKQAIANALAGQALAFARAAQANAAAjAHQAfAGATgCQACAAADAFIAFAJIAAAHIgJAFIgHABQgJAAgHgHg");
	this.shape_100.setTransform(105.506,84.0323);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#324B35").s().p("AgTACIgMgCQgGAAgDAGIgSgGQAKgNASADIAdAGIAQACIATACQADAEAKABQAKABACAFIgLABQgaAAgpgKg");
	this.shape_101.setTransform(65.125,49.5692);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8893A6").s().p("AAAADQgJAAgGgFQAGABAKgBQAJAAAGAFIgKAAIgGAAg");
	this.shape_102.setTransform(44.55,89.0375);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8C98AB").s().p("AglAOQgNgHgVAAQgXACgLgBIAAgGQAQABAZgDIApgEQAWgKAgABIA5ADQAKAEACACQAGAEAAAIIgHAAQgEADgLAAQgLgBgFAEg");
	this.shape_103.setTransform(84.7519,93.5205);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#818FA1").s().p("ACMAxQgtgHhHgFIh0gIQgjgEgMgUQgFgEgLABQgLAAgFgCQADgFgBgDQgBgDgFgDQgTgIgIgFQgNgKgFgNQAHgCAIAFIALAKQAuAjA/AJQAVAEAqAKQAkAHAbgFQAFgGANgBQAKAAAJACQAJAEAZAAQAPAAAKADQALADARAAIAcAAIARABQAKADABALQgVAJgbAAQgPAAgSgDg");
	this.shape_104.setTransform(60.15,88.8432);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4F3F83").s().p("AgZAHIACgGQAWgQAbAPQgCAEgGACIgMACg");
	this.shape_105.setTransform(100.325,69.311);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#325568").s().p("AgaADIgBgEQAKABARgCQARAAALAFg");
	this.shape_106.setTransform(76.3,69.6482);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#30505D").s().p("AA4AQQgJgEgTABQgTABgJgDQgIgCgmgDQgdgCgRgGQgDgFAFgDQAHgFAKAAQAGAAALACQAMAEAVAAQAPAAAJACQAJADALAAIAUAAQAJADAUgDQARAAAHAOIgQAAQgJAAgGAGg");
	this.shape_107.setTransform(73.4804,68.37);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#874899").s().p("AgPAdIgEgBIgyAAQAGgHAQABQAQABAGgGQACgFAGgDIAJgFQAHgEAQgEQAQgFAIgFQAJADAHgGIALgLQAIANgIAIIgRAKIgBAAQgDAHgMADQgMAEgEAFIgGAAQgLAHgLAAIgEAAg");
	this.shape_108.setTransform(103.5815,68.4118);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#325568").s().p("AhZAEQADgLALgBIATgBIBHgBQAsAAAcAGQAGAEgEAFIhZAFIgYABQgmAAgbgHg");
	this.shape_109.setTransform(88.8464,69.503);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2C878F").s().p("ABAAbQgUgGgtgGQgsgGgXgIIgOgEQgHgDgEgHIgFgGQANgLARAFQAKACAQAIQAZAHAoAFQAxAFAQADIALAGQgOARgOAAIgHgBg");
	this.shape_110.setTransform(58.675,62.6837);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C878F").s().p("AgJAQQiSgQgXAAQgVgBgIgOIAAgGIDZAUQA3AEBsAAQARAAAHgLIAKAAIABAEQgEATgbACIgRABQgeAEgmAAQguAAg3gGg");
	this.shape_111.setTransform(89.375,65.9899);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#9CAD48").s().p("AgQAMQgHgHgZgFQgWgEgIgOIAyAAQAFAGAJAAIAOAAIANABQAHADAAAIQAFAEALACIAPAGIAZAAQABAAABABQAAAAAAABQABAAAAABQAAAAgBABIgCACIgPABQgoAAglgHg");
	this.shape_112.setTransform(87.0625,34.5618);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#BF3639").s().p("AgPADQAGgGAJAAIAQAAQgFAFgGABIgMABg");
	this.shape_113.setTransform(96.3,31.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BF3639").s().p("Ag/BqQAIgPARgCQAJgCAUABQAbgDAFgGQAFgIgLgYQgKgVgGgdIgIg0IgGgMQgJgVAPgRQARACAAAUQgBAPALAlQAJAfgFAUQAIACAHAHIAKAOQAQAYgBAIQgCAHgYAMQgHAEgBAIg");
	this.shape_114.setTransform(86.1313,20.775);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#93519E").s().p("AgPBDIgqgKQgMgDgMgOIgEgFQgMgMgEgHQgGgNAHgMQAIgMAOgDQAGgCAVABQAtABAhgUIALgHIAHgDQATgGAKgGIAEgBIANACQAHABAFgDQAGATgPAIQgNAHgDAEQgHAHAFANQACAGgFADIgLACQgWAIANAWIglAZQgGALgOAAIgLgBg");
	this.shape_115.setTransform(100.6119,75.5953);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#29B0C4").s().p("AB2AjIhOgFIgSgDQgWgIgjgFIg7gKIgugOQgcgJgVAEIgGgTIAsAAQAaAXAoAHICLAYQBRANA9gGQggAIgpAAIgFAAg");
	this.shape_116.setTransform(88.775,59.1765);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#874899").s().p("AgJAAQgBgKgFgIIAYAAIgDAHQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAQAQgIAGQgDABgTADIAAgTg");
	this.shape_117.setTransform(60.8056,77.475);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8A4C9B").s().p("Ag5AbQgtgQgeAGQgJACgOgMQgOgKgKACQgMAJgNgJIgMgFQgEgbAEgDQAEgDAaAHQAJACANgCIAVgDIEbgDIAPAAQAJAAAFgGQAKgDAOgBIAXACQAFAHgEAEIgJADQgeALgZgCQgagCguAEQgyAFgVAAQgSAAgFAKQgGAKAPAJIAPAOQAIAJgGANQgRgCg1gUg");
	this.shape_118.setTransform(79.6749,75.75);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#317044").s().p("AgPADQAGgFAJAAIAQAAIgHAFg");
	this.shape_119.setTransform(93.15,41.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#767F42").s().p("AADAHQgEgGgJAAIgRAAQAAgMAMAHIArABIgSALg");
	this.shape_120.setTransform(95.65,38.7411);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#595C37").s().p("Ag0gCIA0AAQAggBAVAFIg3ABIgaABIgDAAQgNAAgIgGg");
	this.shape_121.setTransform(89.4,39.7996);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#636E3E").s().p("ABgANQgjABgSgEQgiABg0gFIhXgIQgVgCgKgKIAAgBQAqgBA5ADIBhAGIBJADQAOgBAJACQADADAOAAQALAAADAKIgMAGQgSgEgkABg");
	this.shape_122.setTransform(79.75,38.4625);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2F7F4A").s().p("AAEAgIhEgNQgJgCAAgJQABgJAIgBQAGgBAWgBIAPgBQAIgCABgKQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIADgDIASAAIAPgHQAIgEAIAFIgFAKQgDAFgEACQgUAKAFALQACAGAJADQAFABALABIAQgBQAKABAFAGQgVAHgaAAIgXgBg");
	this.shape_123.setTransform(95.3987,43.1409);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8E4096").s().p("AgegNQARAAAGABQALAEAFALQADAGAHABIAMABQgIADgIAAQgYAAgVgbg");
	this.shape_124.setTransform(49.85,78.8815);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8E4096").s().p("AgUgCQABgIAKgBQATgEAMAVIgrAGIABgOg");
	this.shape_125.setTransform(55.15,78.7505);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#813B8B").s().p("AA8AfQgVgGgLgBIgbgEQgQgEgKACQgLACgOgKQgQgKgIAAQgLgJgHgWQAdASAmABQATALAeABQAvADAWAWQgKAHgNAAIgKgBg");
	this.shape_126.setTransform(48.675,83.1221);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#904297").s().p("ABIAhQgKgHgQAAQgWABgFgBQgLADgFABQgJABAKgSQABgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAIgGgBQgMABgbgFQgagEgOACQgIgUgTACQgKABgEgBQgHgCgCgKQAMgGARACIAcADQAQAFAoACQAjACARAJQAPAGAlADQAhACAQAMQADAKgHAFIgPAEQgFACgKAAg");
	this.shape_127.setTransform(101.2329,85.4089);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7E3C8C").s().p("ABCAiQgTgGgdgBIgugBQgRgBg6gJQgugHgdACQgHAAgJgDIgRgEIgKgCQgDgCgSgBQgNgCgDgMQALgKAUAGQAWAHAJgGQAAgFgIgDQgKgEgEgFQASACAoAKQAjAIATACIAwAEQAbADAQAIQARAJAaACQAOACAdAAIB/AAIAPAAQAJAAAGgGQAFgFAIABIAMAEQAGAEAAAHQgLAKgRAAQgTgBgKABIguAAQgbAAgTAFIgTABQgPAAgKgCg");
	this.shape_128.setTransform(85.7,87.8114);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#833C92").s().p("ACrAlQgXgLgjgFQgngFgUgEIgzgJQgTgDgNgGQABACAAADQgBAFgHADIgNABIgWgDQgOgCgKADQgOACgJgHQgNgLgVgFQgLgEgbgDQgQAAgIgCQgPgDgEgPQAxgBBRATQADgFgFgEQgEgEABgCQACgEAHABIAKACQAjABBCATQBCASAkAAQARAAAmAJQAiAJAUgDQALgBABAHIgCANQgOAKgSABIgEAAQgOAAgMgGgAgwgLIACgBIAEAAIgFgCIgBADg");
	this.shape_129.setTransform(69.55,86.1222);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8B4598").s().p("AAqAlQhOgGgsgOIgsgIQgagFgPgNIAJgIQAFgEgCgHQgHgSAUgFQAfAIBAAMQA4ANAlAOQAKAHAXAEQAZAFAKAFQAIAGAUADQAZAFgEAVQgkgJhXgGg");
	this.shape_130.setTransform(76.3588,80.375);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2D3549").s().p("ABYAkIhQgUQgugMgggLIgWgHQgNgEgHgHQAHgLAKABIATAFIBAAUQAmALAbAEIAoANIAKAFQAGADADAEIABAGg");
	this.shape_131.setTransform(48.575,137.4208);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#33345B").s().p("AkagHQgDgDAAgCIABgDQAMgLAQAGIALAGQAQAIAJgCQBZANBxACQA9ABCNgEQAEgDAJAAIANgCQANAAAZgIQAXgDAPAMIgCAEQh3ATh7AAQieAAimgeg");
	this.shape_132.setTransform(88.175,141.8712);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2D6B43").s().p("ABrBtQgegGg8gUQgsgNgVgIQgmgNgZgQQgVgOgrgjQgXgUgCgdQgBgUALgiQAEACACAJQABAJAEADQABAOAFAEQAHAHAIASQA1A+BSAgIAeAOQBdAjBOAQIAOACQAIACABAKIgHAAQgoAAgvgLg");
	this.shape_133.setTransform(37.2707,129.0289);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#29AABD").s().p("AgCAJQgMgCgIgJQAHgGALAAIASAAQAHAEACAEQACADgEAHQgTAAgEgBg");
	this.shape_134.setTransform(67.7446,56.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2AABC6").s().p("AgRAKIgVgCQgEgEABgDQABgCAGgCQAMgGARAAIAdAAIATALQgIAHgMABIgVABIgFAAIgOgBg");
	this.shape_135.setTransform(69.2909,55.4958);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#29AABD").s().p("AA+AaQgegBgmgIIhEgQIgRgGQgKgDgEgJIAEgDQASgJASAIQAhAPAuAIIBTAPIAHACQADACgBAFg");
	this.shape_136.setTransform(80.3893,59.3118);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#314635").s().p("AAjAUQgpgBhDgGQgNgFgjgFQgegEgQgIQAAgKAHgBIAMACIBRAOQAmgDBMAIQBPAJAqgEIgYANQgdACggAAIgwgBg");
	this.shape_137.setTransform(77.825,51.2271);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#355236").s().p("ABCAPQABAAAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAQgoAGhBgHQhNgJgbABIgRgEQgKgEgBgKQAdgJA2AHQAjAFA0ADIBUAGIBXgBQgTARgfAEIg3AEQgBgCABgEg");
	this.shape_138.setTransform(85.65,51.0545);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2CA3B2").s().p("AA8AYQhTgThOgKQgKgBgkgPQgcgLgTAEQgCABgDgGIgFgKQAgACApAKQARAEA2ARIApANQAYAHAUgKQAMgGARAEIAcAHIApAHQAXAFAQAIQAEALARABQASABAEAGQhGgEhLgQg");
	this.shape_139.setTransform(70.4,59.425);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#575E6B").s().p("AgZgEIAzAFQgMAEgKAAQgPAAgOgJg");
	this.shape_140.setTransform(72.925,115.4992);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3E428D").s().p("AgsArQgGgBgDgFQAIgJAVgGQAUgGAGgJQACgGAFgEIAJgKIALgOIAIgMQAFgGAFADQAIAPgCAIQgBALgQAMQgLAKgYALQgYALgKAIIgLgBg");
	this.shape_141.setTransform(120.5118,110.4609);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3C3E81").s().p("ABSAkQgRgDgigLIhVgXQg0gPgegVQASgDAZAMQAfAPALACIANAEQAIACAGgBQAWAEA2ANQAwANAcAEQACAAADADIAEAFQgMADgOAAQgOAAgPgDg");
	this.shape_142.setTransform(46.825,110.5835);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3C3C7A").s().p("AApA8IgggPQgXgLgVgEIgHgGIgFgKQgDgGgEgCQgogdAignIALAMQAFAIABASQADAOARAKQALAQAXALIAoASIAOAGQAIADAEAHQgIACgIAAQgJAAgLgDg");
	this.shape_143.setTransform(36.6815,103.7636);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#575E6B").s().p("AigAJIgPgGICKAAIAAgGIhuAAQgOAAgGgBQgMgDgHgIQAigBA9AFQBBAGAdAAQBkgBAqgFIAVgCQAMAAAJADQgWAJggADIg2AHQg5AHg7AAQg8AAg/gHg");
	this.shape_144.setTransform(94.1,115.2727);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#555B64").s().p("ACLA7IgKAAQgMAEgOgDIgZgIQgUACgegEIgvgFQhKgPhWgYQg4gXgXgNIgRgKQgIgHABgMQAEgFAGACIAJAGQAgARAwAQIBSAZQAuANA5AJQAlAGBEAGIALAAQAGAAAEADIAAAAQAWAHAkAAQAuABAMABIAUABQALABAIAFQgfAJgqAAQggAAgngFg");
	this.shape_145.setTransform(62.5694,109.7232);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#707880").s().p("AC0BLQhEgBhygIIgKgCIhxgQQhDgKgtgLQhMgQhSglIgQgHQgJgEgHgBQgXgNAIgTQAHgFAIACQAFACAJAFQBWAnBrAZQBUASBzAOQB3APCfgBQBdAAA/gTIAPgCQAIAAAGAFQAFAKgFAFQgCACgLAFIgUAJQgMAEgLAAIgXABQhMALhcAAIgPAAg");
	this.shape_146.setTransform(76.5044,107.8372);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7B3B30").s().p("AAWBLQgYgYgNgJQhGgwAYhLQADgKAJgBQgLAdARAtQAKAdAcAZIA0ApIAMAGQAHAEACAHQgXgBgXgSg");
	this.shape_147.setTransform(12.4781,149.15);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#943D34").s().p("ABkAeQghgDgVACQgXgJgogIQgwgKgSgEIgkgLQgUgHgMgNQASgEAZALQAkAOAFABIA7ALQAhAFAVAHQANAEAqAEQAhADATAMQgOAAgngFg");
	this.shape_148.setTransform(48.3,170.5698);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#943D34").s().p("ABWBVQgWgJgfgVQgQgKgqgSQglgQgTgOIgSgTQgLgMgKgCQgGgFgEgLQgGgMgDgEQgFgDgCgJQAHgDAAgKQAUAOASAeQALAVAXAQQAOAKAeANQAiAQBCAnQAIAEAcAGQAXAFALAMIgPABQgXAAgXgJg");
	this.shape_149.setTransform(17.75,157.8985);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#77392F").s().p("AAWCBQiCgFiJgkQhjgXgwgPQhTgbg0gsQg3gag1g6QgNgPAJgNIASAMQAFgCAEACIAIAEQATAVAlAgQAuAhBBAdQAiAOBUAfQAkANA8AJQBRANARAEQCmAmDkgIQBjgDBlgTQAaABAmgNIA9gUQAIgCAQgHQAOgFALAJQgRATgfALIg2ASQgaAKgbAEQgWgEggAHQgtAKgIAAQhLAGhfAAQhWAAhngFg");
	this.shape_150.setTransform(72.107,160.6631);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8FA0B3").s().p("Ag3ATQgTgCgigKQgjgLgRgBQgIgCgFgLQAKAGARgDQATgEAGABQAfAHBJgBQBCgBAlANQAEAAAGgBIAKgEQAVgKAOABQATgBAPAPQgsAJgMABQgfADgZgIQgrgMghASQgPAIgUAAIgHAAg");
	this.shape_151.setTransform(63.55,94.9002);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#98A6B0").s().p("ACKAYQgUgGgcgCIgwgCIgJgBQgGAAgCgDQgoAFhOgNQhQgMgmADIAGgTQAbgEArAJQAzALAUAAIAtADQAbgRAqANQAfALAdgGQAYgGAdAIIAyAQQgPAOgWACIgHAAQgOAAgRgEg");
	this.shape_152.setTransform(94.15,106.9795);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#9AABB9").s().p("ABFAqIg1gLIgngCQgYgBgNgLIgZgSQgBgPgQgFQgUgHgFgGQAMgFASAAIAeABQANgKAKALQAKAMAPAFQALAEATABQAQABAHAFQAPAKAVAFIAmAFIAQAJQAHAGgHAMQgQAGgUAAIgTgCg");
	this.shape_153.setTransform(79.669,102.6189);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#97A8BA").s().p("AigAZQgYgEgJgEQgSgIgDgTQBEgkBCASQATAGAegFIAygJQATgCAeAAIAwAAIASAAQAKAAAIgDIALgCQAJABARgCQAQABAKAHQgDAOgNAEIgYADQgWABgkAHQgrAHgPABQgRADgaAAIgqAAIgQABQgKAAgGAFQgJAEgNABIgVABIARAJQAKAFgJAPQgcgOgxgGg");
	this.shape_154.setTransform(79.475,97.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#919DA6").s().p("ADPA8IhjgHQgagChBgJQg4gIgiAAQgjgKg2gLQg8gKgegGQgYgFgKgPQgIgGgQgBQgTgCgGgDIAfgZQAiAZA5AOIBhAVIAeAHQAMgIARgBQALgBATADQBtASBBABIBLALQArAFAgABIAUAAQAMABAHAGQgBAOgKACIgTAAQgWACgbAAIgygBg");
	this.shape_155.setTransform(81.625,105.4192);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#903633").s().p("AhtABIABgFIAeAEQASACAOgBQAdgIARgBQAZgBAVAKIA4AAQAFgDADAEIgVAGIgMABIhdAAQg3AAgmgIg");
	this.shape_156.setTransform(84.5,31.291);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AC3537").s().p("AgWAsQAAgnABgZQAAgKAFgQQAFgTABgGIADgVQACgKAIgGQALAIABARQgEAIADAMIAGATIADAJQABAEgDAEQgMACAAAJQABALgCAgQgCAbADARQAFAcgEAFQgEAFgbAAg");
	this.shape_157.setTransform(83.231,18);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#B43638").s().p("AgNBUQgRgCgMgHQgKgHgSgBQgVgBgHgDIgLgCQgFgCADgJQADgJAGABQADABAHAEQAbAMAiABQAXABAngFQARgGAFgLQAFgLgEgRQgEgOACgXIADgnQABgSAQAAQAKAEABAKQAHApAWBBQAKAegoADIgiADQgTAEgNAHIgRAAIgMAAg");
	this.shape_158.setTransform(77.8938,23.2993);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3D3F85").s().p("AgFAJQgKgKAIgKIACgCIAFABQAAAGAFAGQAHAHgBAGIgFABQgFAAgGgFg");
	this.shape_159.setTransform(20.0285,120.4833);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3D408A").s().p("AgKARIgIgLQgEgHAGgHQABgLAOAEQANAEABgLQAGAEgBAJQgBAKADADIgYATQgDgCgDgEg");
	this.shape_160.setTransform(21.6658,120.075);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3D3F85").s().p("AAiAoQgQgBgTgLIgigSQgQgGgGgIQgGgJABgIQAGgKAEgEQAHgGAKACIAGAGQAHATAWALIAlASIAOAFQAJADAEAFQgJANgRAAIgEgBg");
	this.shape_161.setTransform(27.2929,124.5075);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2EA053").s().p("AAJgHQgDAPgOAAQAHgLAKgEg");
	this.shape_162.setTransform(10.25,138.375);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2D794A").s().p("AgnAMQgEgEAEgEQAGgEAKgCIAQgEIAXgEQAOgDAJAGIADADQgJAGgQAEIgZAGg");
	this.shape_163.setTransform(120.525,141.075);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2E9F53").s().p("ABnBQQgLgEgGAAQgNgBgDgCQgHgEAFgNQACgEgHgGQgHgFgHgBQgrgHg6ghQgjgTgHgGQgWgTAAgbIAEgIQAPADALASQAQAaADADQATATAfAPIA1AZQAMAFAaAJQAVAJALAPIAFACIAGAAQgEAKgIAAIgCAAg");
	this.shape_164.setTransform(23.775,134.0792);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#2D9852").s().p("AAhBbQgOgUgbgMIgygSQhSgfglhEIAAgGQAAgVANgKQATAsA3A2QAKAKAUAJIAjAOQBdArBdAFQANABAEAGIgyAAQgdAAgUgGQgKgDgQAJQgHAFgFAAQgFAAgDgFg");
	this.shape_165.setTransform(30.225,131.9564);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#30A754").s().p("AACBGQgugMgcgbIgJgIQgDgEAGgHQAVgDgJgXQgHgRgBgMQgBgPAHgOIAAgIQAAgFAGAAQAKgCAEAMQAKAUgCAiQAAALABAEQACAGAIAAQAIAAAAgGQgBgJAAgDIACgPQADgIAGgEQASAqAGAEQAGAFAPgLIALgEQAQgNAIAUQADAIgHAIQgHAHgEgCQgFgCgdgBQgUgBgKgOQABAgAFAEQAEAEAcgKQALgEAEALQAEALAPAOQARAQAEAIQg3gKgagHg");
	this.shape_166.setTransform(34.0388,147.9414);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#2EA053").s().p("AC1BxQgjgKgOgCQgigQhIgZQhHgZgigQQgcgOgagQQgOgQAIgOQgIAHgIAAQgNACgLgEQgIgEAAgEQgGgkgugGQgFgCgBgJQgBgKgDgCIAAgNIAGAAQAHAPANgFQAOgGAVACIAjAEQARgBALAXQALAWgHATIgEAJQgDAFACAJQADgJAWgDQASgCgIgYQAUAEAAAOQAAAIgEAQQAUAbAmANIBDATQAWAGAOAJQAJAJANAFIAYAHQATAFAlAMQAiAKAZgDQAGgBgEAHQgGAIAGADQgFAGgOACIgCABQgSAAgdgKg");
	this.shape_167.setTransform(33.7464,151.4013);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#2FAA55").s().p("AC6CEQjGgHipgnQgEgBgDgEIgGgHQgBgCAEgEQACgDgGABQgrAJglgUQgHgDghgIQgZgFgMgOQgEgHgQgOQgNgMgFgKQgDgGgFgBQgEgBgIACQgSAFgKgFQgJgFgEgSIgCgMQABgHAFgEQAEgDAGADIAIAGQAWAKAhgJQgDgIgJAAQgLgBgCgDQgdgGAGgfQAEgWAeADQAHABApgCQAdgBASAIIhdAAQgbAAACAVQADAWAZgKQAKgDAUACQAVADAKgDQAIgCADAGQADAGgDAJQgBAFgBALQgCAIgMgCQgKgEgFAAQgXABgBAOQgBAIAGAEIAOAEQAPAEAeAFQAbAGAPAOIASATQAMAOAGADQAMAFAOgOQAIgIAOAEQAMAEACAIQAEAVAPAFQAHACAYAAQAfgLAdALQAxARA+AJQAkAFBOAHQC+AAAmABIAagHQAQgDALAJQgBAJgGACQgDACgKABQhbAOhqAAIgzgBg");
	this.shape_168.setTransform(77.375,154.8575);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#2EAD55").s().p("AkFBuQgKgVgUAKQgfANgYgcQgigmgpgCQgNAAgRgHQgTgIABgPQABgOAUgFIAPgCQAOgBAAgIQAAgHgGgCQgCgBgIAAIgagBQgQgBgLACQgKACgIgGQgHgGgBgLQgBgLAGgGQAGgHALAAIAzgBQAeAAAVAEQC6APA+AJQA7AIBWAAICSgBQBIACBVgSQBwgWBSg4QASAYgDALQgEAKgeAOIgeAKQgSAGgIANQhvAmioAGQhvAFg3gBIhBAAIhAAAIgQABQgIgBgGgFQgMgKgNAKQgoAIgUACQgiADgagLQgHgDgEAFQgEAHAJAWQAKAVAIABQAQABAWAIIAkANQAWAGAGAMQAGALgIAVQgLAFgJAAQgTAAgKgWg");
	this.shape_169.setTransform(87.1451,149.2035);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3D499A").s().p("AhCA1IATgMQAFgLAMgGIAXgJQASgIAKgPQAKgQgCgUQAAgFACgDIACABQAfAFADARQACAJgIALIgOAPQgrAvhAAAIgGAAg");
	this.shape_170.setTransform(121.97,110.781);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#3D499A").s().p("AgyAMQgfgDgRAAQgYAHgsgFQgtgEgWAEQgLgNgbABQgdABgLgIQAHgHAMAAIATAAICVAPQBaAIA6gCIBEgDQApgCAaAAQAcABAxgHQA1gJAWgBQgIAKgOAFQgIABgTADQg6AIhLACQgoAChcAAQgPAAgggEg");
	this.shape_171.setTransform(84.1,117.6983);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#34B455").s().p("AgDgEQARgEADgDIgCAIQgCAGgCACQgDADgFgCIgSAGQgBgOANgCg");
	this.shape_172.setTransform(141.1966,157.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#2FAA55").s().p("AhaAhQAIgMASgFQAJgDATgCQA7gLAqgcIAGAAQAJgOALAHQgBASgPAKIgcAPQgrAPgUAFIglAJQgIABgHAAQgMAAgKgFg");
	this.shape_173.setTransform(132.425,162.037);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#34B455").s().p("AhABrQgUgGgsgEQgdgDgGgCQgSgFgJgUQgIgQgmABQgqACgigeIg2g7QgIgJAEgIQADgHALgFIAKgDQAMgCAPADICZACQBdABA9gFIBMgFQAugDAfgFQA+gJAcgKIAXgIQAOgDALAHIAGAAQgFANgGAEQgIAGgNgEQgEgCgGAAQgGAAgCADQgUAXgnADQgrgCgUAEQgVAEhcAGQhFAFgqAQQgMAFgLgKQgMgKgHAMQgGAKANAIIA2AdQAgARAcAFIBLAJQAtAFAcAQQAGAEACgBQASgEBHAEQA4ACAggVQAGgFAUgFQASgFAJgIQAEgFAGAFQAHAGABAAQgCAOgOAHIgZAJQgUAKgmAJQgpAKgRAHQgFABgGgBQhOAGhOAAQg3AAg5gDg");
	this.shape_174.setTransform(101.711,155.3363);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#AB4237").s().p("AgGAAQAAgBAIgDIAEgBQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABQgDAHgFABIgCAAQgGAAACgGg");
	this.shape_175.setTransform(38.4792,184.5601);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B44538").s().p("AhEAGQBFgXBDgBQgCASgQAGIgdAEQgHABgfABQgYAAgOAHQgMgBgBgMg");
	this.shape_176.setTransform(108.4,179.675);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B64438").s().p("AiqAxQgPgJgQAAIAcgNQAQgJAHgOQADgHAJAAIAQADQAWAEAmgBQAxAAANABQgDgKgHgBIgLABQgSABgCgMQgCgKAUgEQAmgIBEgHQBPgIAcgEIANAMQgCAKgHACIgPAAIgPgBQgJAAgFAFQgDACgNACQgJACAAAIQAAAIAJAAIAPAAQAKADgBAGQgCAMgPABQg7ACgYgDIgrgEQgOgBgFADQgJAFgCAOQgBAJgHAHQgJAHgHgDQgTgGgaAFQgdAIgPACIgGAAQgSAAgSgKg");
	this.shape_177.setTransform(82.55,186.2143);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#B14338").s().p("AgBANQgEgDgBgHIACgPIAKAXIgGACIgBAAg");
	this.shape_178.setTransform(9.95,167.325);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B44538").s().p("AhEASIBpgYQAEgBAJgFQADgGAJgBIAHATIhEAPQgYAFgVAAQgNAAgLgCg");
	this.shape_179.setTransform(122.125,176.0094);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#963F34").s().p("Ah/BkIAHgMQAGgKAOgEIAXgGIA3gSQAegMAUgQQAfgUALgLQATgUACgbQAEgJADgBQAKgHACgMIALgOIAHAHIgFAuQgFAagNASQgOATgZAQIgsAaQg2Ahg/AIQgQgEgQAEg");
	this.shape_180.setTransform(133.025,163.425);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#9D4035").s().p("AhtAVQhhgDgwgDQgUgBgmgQQgRgGgWAAIAAgGQAXgGAeADIA1AJICoANQBhAIBGgEQArgCB0gLIBIgKQAKgHAGgBQAIgBAHAJQgWALgfAFQgQADgmADQhlALhNADQgqABgnAAQgyAAgtgCg");
	this.shape_181.setTransform(88.175,174.9839);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#9F4036").s().p("ADJB+QgkgEgQAFQgFABgGgGQgJgJgCgBQhvgthLgIIgNAAQgPAIgGACQgNAEAJgdQADgLgdgGQgdgHgMAJQgLgHgSgfQgPgagVgGQgFgCgDgGIgDgKQgJgWgDgLQgFgTAGgQIAGAGQAIAIACAFIAGARQAEAIAKABQAbAcAzAbQBLAlAKAHQAtAdA2AHIAGAAQBfAkBEAIIAUADQAMAEAHAIQABAFgEAEQgMAHgUAAIgTgCg");
	this.shape_182.setTransform(27.7264,161.9115);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#AB4237").s().p("AAcAyQgigPg9gDQgkgCg2gHIgFACQgBAAAAABQgBAAgBAAQAAAAAAAAQgBAAAAgBQgSgOgRAIQgEACgYATQgIgWgRgGQgNgEgYAEIgQADQgIgBgFgGQgNgRgYgJQgPgFgegEQgOgCgBgLQAGgMAMAAIAJAAQAGAAABAEQABAGgGACQgJADgDAEQAfgCARAEQAZAGAPATQAKALAWgPQAQgLAVADIAkAJQAJADASAHQAQAEAOgRQAHgJAYAAQAXAAAQAHQATAJAYAAQAKAAAegFQBzgPBlATQALACAPgFQARgGAHAAIBLAAQAqgBAggFQghALgQAEQgcAGgXgCQgYgCgvAHQgVADgogIQgngKgWADQg5AJgUAsQgEAIgFABIgCAAQgDAAgGgDg");
	this.shape_183.setTransform(62.3,180.0036);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#3C3D80").s().p("AAAAIQgDgBgIgGQgDgEADgEIAMAAQADAGAJAAIAAAFQgFAEgFAAIgDAAg");
	this.shape_184.setTransform(64.7182,140.6161);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3E4699").s().p("AgJAAQAHgIAMAFIgNAJg");
	this.shape_185.setTransform(39.625,112.3888);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3C438D").s().p("AghAWQADgEAMgEQAMgEADgHQAUgUARgKQgHAYgYATQgKAIgHACIgGACQgHAAgGgGg");
	this.shape_186.setTransform(131.8,133.2167);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#2D794A").s().p("Ag4AwQAAgIAHgGQAKgGAJgDQASgFAOgQIAPgOQAPgNATgZIAFgCQAGA5g5AXIgcAMQgRAIgOABg");
	this.shape_187.setTransform(130.1536,135.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#3E4699").s().p("AAyATIg3AAQgJgHghgIQgcgHgLgPQAVALAdABIAyAAQAfAAAqASQgHAGgLABIgTAAg");
	this.shape_188.setTransform(47.975,114.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#3D418F").s().p("AhdAyQhtgGg2gCQgOAAgTgEIghgIQgHgDADgHIAmADQAWACAOACQA1AKBGgKQAagDAyAFQA0AGAWgCQAmgDAagFQATgEAFgKQAJgUAXgHQAEgBAlgEQAqgFAOgDQAggGAWgLQAIgEAKAAIARADQAAALgKAFQgMAEgFAEIgPAIQgJAEgHgBQgOgDgNAJIgIACQgUABgJADIgIACIgaABQgQAAgKAHQgWAPgNAHQgVALgSACQgxAGg+AAIg1gBg");
	this.shape_189.setTransform(98.7,138.3651);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3D418F").s().p("ACoBoQgJgDgCgMQABgSgPgFQgSgCgIgEQgXgMgngGQhjgPhYgrIgmgSQgWgLgOgKIgPgMQgGgHAFgMQAKAGAEgMQAFgNAIACQAKADACANQACAOAEADIANAHICgA9IAJADQAGABgEgMQgDgLAPAHQAVAKAjAIIA5AOIAnALQAWAFATgGQAEgBAEAFQAEAFACAGQgWAAgJACQgSADgBAVQgCASAIAOQgEADgGAAIgEAAg");
	this.shape_190.setTransform(46.6364,129.7736);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#404D9D").s().p("AEEBgQgMgCgEgOQgGgNgjALQgbAIgegLQgPgFgDAAQgqABg5gHIhjgNQgygGgNgDQgigJgXgUQgHgHgGABQgiAGgzgQQg9gUgVgBQgKgBgBgFQgDgOgLgQQgPgQgGgKQAKgJAPAAQAIAAATADQASABApAIQAlAIAWAAQAXAABLAIQgFALgMABIgVAAQgOAAgIACQgKAEgCAKQgBAMAKACIASACQAJAEATAEQAQAFAJAKQAFAFAJACQAJADALgCQAUgGAeAPQARAIATAAQAXABAGABQAPAEAMAOQAKAMAXACQAOACAbAAIAnAEQAZADAPAAQAlACALAAQAbgCATgJQALgFAFADQAZASAhgLIA3gUQAFAFAAAGQAAAGgGgBQgMgCgUAKQgVALgMAAIgkAAQgVACgOALQgFAEgGAAIgEAAg");
	this.shape_191.setTransform(89.05,125.4392);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#49C3D2").s().p("AgCgPQAMAPgMAQg");
	this.shape_192.setTransform(111.2875,60.325);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#9CAD48").s().p("AAAACIgSAAQAFgKAMABIASAEIACABIgCAKQgHgFgKgBg");
	this.shape_193.setTransform(97.275,36.771);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2D9852").s().p("AgIACIAOgQQAKAPgQAOQAAgLgIgCg");
	this.shape_194.setTransform(13.8352,120.875);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#3D408A").s().p("AgFAJQAAgJgCgCIgBgEIAGgLQAHgDABABQAFAAgDAJQgFATABAJIgDACQgGgCAAgJg");
	this.shape_195.setTransform(18.9696,117.3208);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#317044").s().p("AgSAMIAAgMQABgFAHgCIAKgEIAFgBIAOALIgHAHIgOAFQgFACgFAAIgGgBg");
	this.shape_196.setTransform(98.5,39.5271);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#2E9F53").s().p("AgDAMQgEgHgJAFQAFgSASgNQAPgBgHAOQgDAEgBAMQgCAKgHAEQgBAAgEgKg");
	this.shape_197.setTransform(12.2114,123.243);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#8A4C9B").s().p("AgOAaQgGgBgHgHQgBgGAIgJQAIgHgBgHIADgHIAFgHIAhAaQgJANgVAEQgFAIgGAAIgBAAg");
	this.shape_198.setTransform(111.2194,66.9764);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#BB3839").s().p("AAAAkQgCgDgBgJQgBgHgCgEQgGgNABgPQABgJAFgUQAKAOAHAZQgIAJAEAPQAFATgCAGIgEABQgFgCgCgHg");
	this.shape_199.setTransform(84.21,5.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#2C9CA9").s().p("AgHAGQgzgGgLAAQAKgLAWAFQAsAJA+gIIABAFQAAAEgDADQgHADgGgEQgMADgRAAQgPAAgRgDg");
	this.shape_200.setTransform(103.6,64.5399);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#6B3E31").s().p("AAFA3IgJgKQgbglAYgmIAAgUIAFgGIAHATQADAEADAJQgEAQAFAXQAHAhAAAHQgEACgDAAQgEAAgDgCg");
	this.shape_201.setTransform(8.2297,142.95);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#BDC743").s().p("AgCAMQgSgIgKgLQACgDAHgCQAIgBACgDQADgBAIAAQAJAAAEgEIAFAAQARAVgFAWIgggKg");
	this.shape_202.setTransform(96.5732,32.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#984135").s().p("AgJgCQAJgeATgUQACAJgIAZQgHAVAHANQAHAJgKAFQgDAAgCgDIgEgEQgGgEgDAEQgBABgBAJIgBALQgBAGgGADQACgjAHgUg");
	this.shape_203.setTransform(2.4375,146.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A1B0C0").s().p("AgqAcQAAgLAJgFIASgIQAagFACgaIAGgGIAGgBIASAOQgHAYgSAMQgHAAgIAFIgMAKIgIADIgJABQgKAAgGgHg");
	this.shape_204.setTransform(115.925,89.6141);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#8893A6").s().p("AgMARIgNgSQgHgMgIgFQAHgMAMgHIAGAaIAYARQAPAMALAFQAOAGgPAJIgGAAQgVAAgTgVg");
	this.shape_205.setTransform(39.5939,84.9469);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#838C44").s().p("AAEANQgtgDgMABIgFAAIgHgHIAAgRIBpAHQADAFAKABQAKAAADAFIgEADQgQAGgYAAIgSgBg");
	this.shape_206.setTransform(69.475,35.8579);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C3D0DA").s().p("AgIAVQgOgSAHgKQADgFACgKIAFgPQAcAlgFAlIgCABQgNAAgLgRg");
	this.shape_207.setTransform(123.4311,94.9527);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#2F889B").s().p("Ag7AGQgHgCgEgGIgHgLIAYgQQAAAWAUAHQAIgDAPAEIAjAJQAVAFAQABQAIABADACQAGADgBAIIgRAAQg5AAg/gYg");
	this.shape_208.setTransform(62.6,49.5812);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C4493A").s().p("AggAtQATgCAEgFQAPgQAKgXQAGgOAHgfQACgIADgCQADgCAHAAIAGANQgKAhgMAVQgQAbgXARIgUAAQgKABgIAFQACgNAPgBg");
	this.shape_209.setTransform(146.425,166.275);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#8E9B47").s().p("ABMAQQgNgIgaAAQgWAAgtgEQgtgEgXAAIgRgEQgKgDgCgLIA8AFQAjADAYgCQAIgIAOACIAYAEIAUAEQAMACAIgBIAOADQAHABANAAQALABAEAKQABADAAADQgDAEgGACIgTABQgOAAgKgDg");
	this.shape_210.setTransform(86.2813,37.0031);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#3D408C").s().p("AAIAwQgSgUgIgLQgOgSAHgWIgBgFIgCgGIARgNQALgHAJABIAAAMQgIAWADAQQACASASANQAEADABAEQAAAFgCAFQgEAJgFAAQgFAAgFgGg");
	this.shape_211.setTransform(29.7042,101.672);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B1BE44").s().p("AADAVIghgOQgFgGgTgBQgSAAgEgNIAoAAQAZAAAOgGQABgDAEgBIAGAAIAhAPQATAIALAKQACAKgGADIgEAAQgJgCgNACIgWABQgLAAgLgDg");
	this.shape_212.setTransform(91.925,34.1125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#32844C").s().p("AgEAgQgPgBgDgCQgKgDgDgIQgHgPAUgPIANgNQAGgFAGgBQAPAFAJANQAFAJAGASIgLASQgGgEgKACIgOACIgBAAg");
	this.shape_213.setTransform(100.0938,42.5286);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8E4096").s().p("AgbAaQgHgNAAgRIACggIBDAxQgJAXgSABIgCAAQgKAAgXgLg");
	this.shape_214.setTransform(42,75.5761);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#49C3D2").s().p("AgeAVIgCgFIgCgGQARgBADgJQACgFgEgQQgBgFAHgDQAHgCAFAFQAFAFACgDIACgGQAUAPAEAcQgLAPgVADIgGAAQgRAAgKgKg");
	this.shape_215.setTransform(107.375,56.2708);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#4A5334").s().p("ABTAXIg4gDQgmgBhLgMQghgFgRgRIAMgHQAGAAAIAEQAgAIAxAEIBRAGIAiACQAGADAUABQARABAIAIQgUAIgcAAIgGAAg");
	this.shape_216.setTransform(75.45,38.605);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#74408E").s().p("AhFAPQgXgHgSgYQgIgLgTgEIAZgPIACABIAIAHIAKAMQANAOAVAIQAMAEAcAFQAjARAdAAQAJADAjADQAcACAQAHQAFADgCAGIgDABQhlAAhmggg");
	this.shape_217.setTransform(59.9173,65.3004);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#34633E").s().p("AAuALQAEgLgHgBIgMABQghAAgtgEIhPgJIgHgDIgHgDICPAGQBWAKAzgEIABALIgIAGQgcAJgPABIgIAAQgTAAgRgJg");
	this.shape_218.setTransform(89.475,49.6154);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#33B355").s().p("Ag1BWQAAgIAGgGQACgCAKgGIARgGQAggMAFgIQAGgHgDgfQALgWAAgOQABgTgTgOIAEgSIAjAlQgFAwAEAaQAEAbgcAKIhKAaIgEABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape_219.setTransform(134.8731,136.1442);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#8D969F").s().p("ABRAqIghgCQgkgIgTgQQgLgIgFABQgPAFgOgHQgHgDgRgLQgLgIgPABQgHgCgDgGQgCgIAFgEIAGgHIAgAJQASAFAPAAQALABARAOQARAOALACIAXAJQAOAGAJACIAcgEQAPABAHAQQgNAIgSAAIgCAAg");
	this.shape_220.setTransform(41.5827,99.7265);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#2EA9B3").s().p("AAUANQgUgIgVAJIgGAAQgagIgYACQgFgEgIAAIgOAAQgLgBgDgCQgFgDAEgLQAJgEANAAIAWABQBPAQBcgKIAAgGQAHgFAHAEIAMAHIgBAKQAAAFgDAEQggAIgRACIgKABQgVAAgSgHg");
	this.shape_221.setTransform(98.7738,63.0052);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B6C2CC").s().p("ABAAZQgFgGgFAAQgdAGgogGQgugJgYgCQgCgDABgCQAAgBAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAFgHAVgDQASgDAGgMQAQANAYABQAOgBAcgEQAGAAAOADQAKgCgBgQQALAJgIAPQgEAHADAHIAKAKQgMACAAAMIgDABQgEgBgFgGg");
	this.shape_222.setTransform(117.695,102.45);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#798296").s().p("ABIA4QgOgFgsgHQgkgGgWgKQgUgIgXgPIgpgZQgNgMAJgQQAGgJAMgDIADAAQADADAIANQAGAKAHADQAjAYAxAPQAdAKA8ANIAOADIAUAEQANACAEALQgPAKgTAAQgOAAgRgFg");
	this.shape_223.setTransform(50.6244,86.0104);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#9E509D").s().p("AguARQA2gSAagxQAXAtgQA4g");
	this.shape_224.setTransform(115.0403,77.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#939CA6").s().p("AAuA0IgVgJIgzgaQgegOgZgCQgMgBgEgLQgEgJABgMIAEgWQASAdAjADQATADAFACQAOAGAFAPQABAHATAEQATAEANgCQAYgFAZAOQgCALgKAHIgUALIgGAAQgIAAgJgDg");
	this.shape_225.setTransform(40.9889,96.7438);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B44538").s().p("AhsBoIBCgdQAogSAZgRQAagSAPgaQANgXAEghQABgGgGgLIgLgRQgKABADgJIAHgGQATAIAKATQAHALAIAZQgRABgCAWQgLBAhHAdIggAPIgfAQQgPAHgOAAQgMAAgMgFg");
	this.shape_226.setTransform(139.3,163.6521);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B0C0CF").s().p("AhNA9QgIgEgEgDQgFgFAAgHQAAgHAGgGIAMgHQAagNARgDQARgDARgJIAegVIAVgQQAGgEAJgMQAIgMAHgFQAFACADAGIAFAKQgXAngvAcQgOAJgDAHQgGALASALQAIAQgUADIgRAGQgKAEgHABQgVgCgegOg");
	this.shape_227.setTransform(112.0979,95.175);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#9A4C9B").s().p("AANAaQgmgFgUgDQgRgDgJgGQgLgHgDgOQANgbAbABQAJAGAMAAIAXAAQAvgCAoAjIgHAiQgEAEgEAAQgXgIgjgFg");
	this.shape_228.setTransform(110.525,82.6211);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#355A3A").s().p("ACLAcQgRgCg6gEQgvgEgbgGQgZgGggALQgOABgjgHQgfgFgSAFQgegFAJgZIABgIQAVgEAkAFQAqAHAQAAQANgBAUAEIAhAHQAtAHCEAIQAMAAADADQADAEgHAKQgKAHgSAAIgRgCg");
	this.shape_229.setTransform(75.8679,48.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B64438").s().p("AiEABIgngXQgJgHAEgFIAGgFQAFgCACABQAeAMAhgNQAHgDAEADQADADgIALQgHAIAHABIAMABQAoAMBQAbQBHAUA3gEQAFAAAJAFIgQAAQh6AAisgqg");
	this.shape_230.setTransform(68.7657,192.7094);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#2F7948").s().p("ABSAhQghgDgRAAQgegBgngGIhGgNQgKABgGgCQgJgCABgMQACgMAJgEQAGgDANABQAmABAlgBIAPAAQAJAAAEgGIAGAAQAFgDAHAAIAMABQAHAJgFAFQgDADgKAEIgPABQgJABgGAFQBAAYA3gOQAEgBAGgGQAGgEAFAAIABAeQgRAHgYAAIgJAAg");
	this.shape_231.setTransform(90.7648,44.3857);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#8C9AAC").s().p("AClA7QgggKgXAEQgeAFg3gHQg4gHgcAEQgFAAgHgDIgKgHQgIgMgHgEQgJgGgPABQgYADgZgUQgYgVgHgbQADgHAJgGQAIgCAGAEQADADAEAIQAIAOAOAKQALAIATAHIAIACQAaAEAGADQAeAOAoAFQAXADAwABQApACAZADQAkAEAcAJQAFAEgBAGQgGAKgKACIgBAAQgHAAgLgEg");
	this.shape_232.setTransform(54.3025,89.2331);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#804598").s().p("ADyAvIgFgBIjgAAQh8gBhVggQgLgFgNABQgZADgKgIQgKgHgDgXIAAgFQAAgBAAAAQAAgBgBAAQAAgBgBAAQgBAAgBAAIgJgBQACgEAEgCIAIgEIAOgCQAIgBAEAGQAYAgArAMQAJADBGAMQBAALAogDIA0AAIALABQAnAKBBgHQAjgDAjgBIAQAAQAJABAHAEQAFAGgDAEQgBACgHADQgIADgKAAIgMgBg");
	this.shape_233.setTransform(72.9029,66.6625);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#317044").s().p("ACOAqIg2gCQghgBgTgNQgUgKgjgCQgrgDgNgDIhXgVQgSgFACgLQABgGAHAAIALAAQAogIBAABQBYACAPgBQgDAMgKACIgTAAIgqABQgbgBgRAEQADALAIADIAOACQB+AVBYgDIAJADQADAMgIAHQgIAKgPAAIgIgBg");
	this.shape_234.setTransform(86.1612,45.5577);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#BAC9D7").s().p("AgyA0QgNgHgDgLQgCgLAJgJQAdgdA6gvQALAGABANIACAJQACAFgCADQgJATAIAOQAFALASANIAAAFQAFAJgCAHQgCAHgKABQgjADgSAAIgEAAQgcAAgUgLg");
	this.shape_235.setTransform(118.8286,95.6287);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#2C9CA9").s().p("AC4A6QgtgIgIAAQg0ABhPgNQhrgTgVgDQgcgDgNgJQgIgEgLgDQgLgDgDACQgQALgHgHIgKgUQgEgYAPgPIABAUQAQAIAbAHIAsAKQAmAMAUAEQAhAJAbABQAWACAtAIQAtAJAXABIAkAFQAVADAOgCIAaACQAPACAIALQgOAHgTAAQgJAAgLgCg");
	this.shape_236.setTransform(72.2829,59.0612);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#2B919A").s().p("ACmAxIhrgIQhggHg8gJIhkgRQg/gJgmgJIgEgDIABglICaAkQA2ANBWAHQBuAKAeAFQASADATgGIAKgCQAfgCATAKQAMAGAVgFQAPgDAGAAQALABAIAIQgCAMgJAFQgGACgOABIgYAAQgmAAgsgCg");
	this.shape_237.setTransform(78.9,62.0375);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#92A348").s().p("AgEAgIgQgCIgRAAQgjAAgTgCQgdgEgXgJQgMgZAZgaQApATA0ACQA1gHBdAHQAXABAQADQABALgIACIgPACIg0ABQgbABgUgGIAUAGQANADAHADIAMAGQAFAFgHAIQgRAGgVAAQgVAAgWgFgAAXADQADAFgCgGQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIgBAAQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABg");
	this.shape_238.setTransform(77.3172,33.0064);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#CD373A").s().p("AgRCDQgRgNAVgKQARgIAAgMQgBgKgMgKQgMgKgGgPQgFgLgDgUQgFgjgEgPQgGgcgMgVQgGgQgCgIQgCgOAOgJIAvBkQAbA6ARArQAEALAQAPQAPAPADAMQgCAEgFACQgXADgKAEQgOACgLAAQgNAAgKgEg");
	this.shape_239.setTransform(91.2875,18.7087);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#9A539F").s().p("Ag4A6QgKgKAAgJQAAgIAKgNQAdgkARgcQALgOAWgEQAPAIAMAQQAGAIALAWQgFAfgYATQgSAOgiAJQgKACgHAAQgPAAgKgHg");
	this.shape_240.setTransform(111.6988,73.5674);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#2BB5CA").s().p("AAyA2IhigQQg5gLgngQQgQgHgFgEIgMgJQgHgGABgHIBBAEQCWAHBsgmQADgBADgJQAFgCAFADIAIAGQgZAPgjAKIhAAMIgtAFQgeACgXALQBEAXA1AKQA/AMA5gDQADAGgFAEQgcAGgfAAQgiAAgmgHg");
	this.shape_241.setTransform(90.0796,56.7855);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#874899").s().p("AicA3QgNgHgXgTQgPgNgFgBQgGgDgWABQgHABgBgFIgBgIQgCgOgCgHQgEgMgPAAQADgJAJgHIAQgKQAJgEAFACQAGACACALQAGAdAhgDQAMgBAGADQBSAdByAEQBDADCFgCIAWgBQAMABAIAIQgBALgJADQgFABgLgBQghgChQAFQhIAEgpgFQgSgCglADQglAEgTgDQgJgBgFAHQgEAKgEADQgHACgHAAQgPAAgPgHg");
	this.shape_242.setTransform(69.225,68.9749);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#8B4598").s().p("AAGBCQgFgHgLgDQgNgEgFgFIgMgGQgqgGgagrQALgqAVgUQATgNAGAZQACAKAHAFQAEAEALAEQAXAHALAMQAgAhAsgBQAKAEAGAGQAPARgJATIgDAEIgZAAQgcgUgQAaQgFADgFAAQgJAAgIgJg");
	this.shape_243.setTransform(49.6071,72.7676);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#35C0D3").s().p("AgGAtIhlgXQgZgFAAgPQgBgJAKgDQAFgCAMgBQAPgEAZgBQAegBAKgCQAagEAegJIA4gTQALADAJAOIACADIAAACQgJAFgHALIgJAUIgEACQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABQAMAJAPgDQAJgCASgHIABALQAGAQgGAQQgFACgMgCQgLgBgGACIgaACQgjAAgqgJg");
	this.shape_244.setTransform(97.8988,56.8033);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#326C42").s().p("ABHA6QgRgDgYgBIgogBQgZgFhEgGQg7gGgigJQgIgbAMgXQAMgXAdgOQBnAeCEgBQAegBAHgDQAKgCAPAAIAYgBIAKgBIAKAAQAFABADADQAEAHgFAHQgHAFgMABQgXABgJADIgKACQgRABhTgBQg8AAgnAIQBJAdA2ACQAcABAYAHQAIACACACQAFAEgGAIQgMAHgSAAQgLAAgNgDg");
	this.shape_245.setTransform(76.9242,43.1125);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#883C93").s().p("ADEBBQgTgRgfgFIg3gIIg9gIQgjgFgYgJQgUgIgjgEQgngEgQgFIgCgBQAAAAAAAAQgBAAAAABQAAAAAAABQgBAAAAABQgEALgDACQgDABgNgCQg7gLgtgCIglgEQgXgCgOgTIgDgCIABgRQgCgEACgDQABAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAPALAPgEQAMgCAQgNQAHgBAIAHQAPANALAFQAPAHAQgCIAIgCIAVgFQAMgCAJAAQAOAAAKAEQAZANAoAIIBDAMQAfAGBCAFQBBAFAhAHQAOgBAXADIAlAFQAQABABAIIAAAJQAAAEAJgDQAPgEAWAEIAOAEQAHADgBAKQgGALgPAAIhBABQgmAAgbgDg");
	this.shape_246.setTransform(73.8518,83.4233);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#2E894D").s().p("ADhCOQhTgBhCgJQgggEhhgKQhSgIgxgIQgRgEghgCQgjgDgQgDQhYgRhOgxQgtgbghhGQgCgFABgEIAGgPQAEgKAAgGIAQgQQAKgJALgDIADAEQAHANgFALQgLAYAKAWQAGAOAWAWQAsArA9AVQBJAZAbAIQA5ARAuAIQASADAlAAIAbABQB6AVBJADIA4ADIA4ADQB5ADCEgWIARABQAKABAGAHQgiAMgsAGQgbADg1ADQhUADg0AAIgNAAg");
	this.shape_247.setTransform(66.4938,130.8281);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#2BA4B8").s().p("AhDA+Qg6gMhLgaQgHgCgfgDQgYgDgMgKQgEgKAFgJQAJgTAKgLQANgOASgFQBQArBSgIQBOAHB/gBQAgABAWgDQAdgFAXgMQAGgEAIAAIALAIQAEAKgGAFIgNAGQgYAKgfAFQgRAEgoAEQhnAMhbgMIgegBQgSgBgKAKQAFAGALACQANACAEACQAFAEANAFQALAFACALQgGAKgNAAIgIgBg");
	this.shape_248.setTransform(77.1622,54.4957);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#3D4293").s().p("ACvBmIhogBQghAAg9gIQhBgHgegBQhAgXg3AEQgXACgmgWIAAgGQAAgDgGADIgTAAQgDgRgTgGQgcgIgEgDIgWgLQgNgHgCgOQgBgHgJAAQgMgBgDgDQgJgHgCAFIgCANQgDAGgFAAQgGgBgBgGQgDgNgKgBQAHgRASgQIAhgbQAIADABAJIAAAOQABAOARARQARASANACQAHABAGADQAdAQArAMIBKAVQBKAWAygBIBaAJQATAHAJACQAPADAOgFQAGgBAJACQA2AKBDAAQAmgBBTgGQAUgBAjgGQAngIAQgBQAOgDAMACQAQAEAGAGQACAKgIABQgLABgCACQgnAOgzAGQggADg8ACIhAAAIgoAAg");
	this.shape_249.setTransform(69.119,108.3833);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#8D3D33").s().p("ACfC9IhFgDQgpgCgcgIQgdgIgsgIIhKgNQhRgPgtgUQgGgCgJgBIgPgCIgKgCQgKgEgkgMQgdgJgQgKQgSgMg4gdQgvgYgZgUQgLgIgQgaQgOgXgOgJQgKgRAGgVIAOgkQACgMAKgKQAFgGAOgKQAGAGgCALQgRAlAFAaQAEAaAdAcQAcAcASANQAbAUAcAIQAvAfA+AXQAtARBIATQAkAJCIAdQBsAWCiAAIC1AAQAxgBAtgNQAngLAZANQADAGgCAFQgCACgGAFQiYAciSAAQhAAAg+gFg");
	this.shape_250.setTransform(61.843,157.2413);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#94A2B1").s().p("ABZBbQg+gPgrgcQgOgKgdAAQgfAAgMgGQgCgBgIAAQgGgBgBgDQgHgRgTgHIghgHQgdgIgFgcQAFgjAZgiQAFgCABACQAHAfAbANQAPAIAmAGQAKACAJAIIAPAPQAhAQArAKIARADQAJADAGAFQATAcAsAFQAZAEAMADQAUAFAOAJQAUALAGAPQAAAPgLAFQhbgPgWgFg");
	this.shape_251.setTransform(52.525,95.3375);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#CC4A3A").s().p("AhOCBQgBgIAHgDQAGgCgBgRQgBgNARAGQAJAEAIgGQAHgEAAgIQgBgKgHABIgOADQgNAEgJgHQgIgHABgLQABgKgGgGIgQgJQAigEAjgWQAUgNAjgdQARgPARghQATgnAJgMQAfBXgxBPQgxBRhYAkQgIgFgCgIg");
	this.shape_252.setTransform(142.6506,175.875);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A33436").s().p("Ag3CeQgZgGgRgSQAmgoAphIIBDh1QAMgRAUgkQAGgLAEABQADABACAMQAFArgEAUIgIAJQgGAGAIAHQACADgCADQgOAhABA3QAABIgDATQgHATgUgCIg1gDIgEAAQAIACAAAKQgBAFgFACIgZABQgNAAgKgBg");
	this.shape_253.setTransform(74.0471,15.9401);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C6493A").s().p("AhPBtQgLgBgJgHIgIgFQgDgCAJgGQAGgEgDgEQgCgFgHgCIgZgCQgIgEAZgPQAIgGgBgIQgBgKgLgFQgdgQAggQIAIgFQAFgDAEAAQAgAAArgTQA/gfAGgDQAKgDAQgLQARgNAJgDQAFgJALgBIASABQAGAEgBAGQgCAFgFACQgIADgmAfQgcAWgagBQAKAYAEAFQAKALAUgDQAEAAAFABQAEADAAAFQABAIgEAHQgEAFgHACQgRADgIAOQgEAJgDAVIguAVQgcAMgWAAIgWgCg");
	this.shape_254.setTransform(131.8757,182.35);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#3E4699").s().p("AA2BfIg2gSQgggMgUgPQgKgJgNAKQgOAKgNgFQgHgDgOgOQgogngKgHQgfgXgggFQgNgBAAgOQAAgLAFADIAJAEQAJgDABgKQABgIgCgBQgBgCgJACQgGABgDgLQgFgMgJgBQABAHAFAPQACANgOAHIgFgRQgCgKgHgFIAJgYQAFgNAIgIQAFgBANABQALAAAIgEQAFgDAMAFQAOAFAFAKQALATAWALQAKAFAgAJQAPAFACAEQACAGgJAKIgCAJIgNAMQgIAHAIAHIARARQALAKANAAQAxgBAWAZQASAUAjASIA6AdQAkAWAtgBQA3gCAiAUQiJgMhYghg");
	this.shape_255.setTransform(46.8,117.6779);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#3D4395").s().p("AB2B3QACgBAXgCQgkACgxgOQg5gSgdgHIgNgEQgIgCgGAHQgEAGgOgFIhRgdQgwgRgggPQgKgEgGgKIgLgTIgLAIQgHAEgHgBQgGgCgFgFQgDgOgLgCQgFgBgQACQgEgBgEgDQgFgFADgNQADgMgFgGQgHgOADgUQAFgWABgMQASAEgFAUQAEgBABgIIgEgRQgCgKAKgCQAQgCATAcQAGAKgGAIQgGAIgRAEQAkAHAiAYQAPAKAnAkQAMAMAIACQAKAFANgFQAbgJAeAaQAXAVAbgCQARAAAYAMQA6AdA8AFQAsADAvALQAZAPApAFIBEAIQgEAJgHABIgOgBQhsABg2gBQghAAgUANQgFgWANgGg");
	this.shape_256.setTransform(53.1903,121.9899);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#50B854").s().p("AgzBzIgcgNQgQgHgQACQgTAEgDgmQAAgNACgFQADgIANABQAPAAAPgNIAKgHQAHgEABABQAVASARgNQAKgIARgRQAPgJAKgBQANgCAOAHQAPAIALgPQALgOgEgYQgCgHADgYQACgUgHgLQgDgGAEgBQAEgCAGACQA1A8gLBYIgEArQAAAFgEAFIgFAIQgEADgFAAQgRgGgTAIQgNAFgRANQgXASgYAAQgUAAgcgLg");
	this.shape_257.setTransform(133.0217,146.0429);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#BA4539").s().p("AhQBoQhAgBhPgNQgegGgRgIIgegMQgRgHgOgCQgMgBABgLQADgFAGgBIAKgBQAHgGAHAEQAbAMAqgEIBEgGIANgBQAHgCACgFQAMgaAYgDQAMgCAiADQAqAGArgFQgCgDgLgHQgHgFACgIQABgJAKgFIARgHQAGgDAUAAQAQAAAIgJQAOgJAXgBIAmgCQASgCALgDQAOgFAKgKQBKgHAugQQAIgDAKAHQgYAVgkACQgeADgyATQg2AVgYAEQgHABgGAEQgHAFAAAGQACAPAXgBIAhAAQgKAIgNACQgFABgSAAQghgBgcAHQglAIAIAmQAFAVAGAKQAKAPAUABQgeAIglAAQglAAgsgIg");
	this.shape_258.setTransform(94.717,186.6489);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#2FA454").s().p("AndB2IABgOQgIALgNAEIgZADQgHABgBgHQgBgDACgKQAGgggIgMQgJgMgfgEQgdgDgPADQgKABgFgBQgHgCgEgIQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCABQgDAAgEgCQgHgHADgMQAAgtACgWQAEgmAUgZQALgKAFAGQADAEAEALIABAJQgCAbAUATIApAaQAfATA/ATQAMADAEADQAJAEADAIQAIATANACQALABARgLQAWgEAnADQArADATgCQBkAMDIAUQA1AFBIABIB8gBQBJgBBTgTIAdgJQASgFAJgFIAbgJQBMgYALg/IAGgMQAYAMACASQACARgUAcQheBKiYAPQkEAZj6gnQgPgCgzgBQgogBgYgIQgWgGgeAAIg1ACQglACAfAqQAAAegcgPQgUgKACgUQgDACAAAEIgBAGIgCAMQgCAHgHAAQgRABgDgUIgCgcQgBgRgGgLQgKAJAAAMQgBAGAEARQAGATgBAEQgBANgTADQgFgEgBgHg");
	this.shape_259.setTransform(73.4262,136.4507);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#BF4739").s().p("AjdC+QgYAAgLgLQgKgKgEgcQgCgTAKgOQAKgOATgGQASgGAbABIATABIgFgBQgMgDgDgNQgEgWAggGQAUgEA4gVQAvgRAfgCQAUgCAZgOQAEgCABgHQABgHACgCQArgDAtgWQAagNAzgjQALgHAHgSIAKggQAEgOADgEQAGgHANAFQAHACgBALQgGALgFAQIgIAcQgRA0gtAIIgKAHQhiBFhaAQQgUAEgEAHQgDAHAKASQAHANgFAIQgFALAAAFQAAAHAMAEIACAAIAAACQAIAOgQAHQAKAAALAFIANADQAIADADAFQgQAMgZAFIgsAGQg2AKgZACQgXADgVAAQgTAAgRgCg");
	this.shape_260.setTransform(123.7143,178.0774);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#424F9F").s().p("ADHCOQgTgDggADQgpACgMAAIhPgDQgtgEgegMQgggNgxgKQg3gKgbgHQgQgEgfgOQgfgOgRgEQgGgCgDgGQgDgGACgHQAFgRAUgDIAcgCQAQgCAKgGQAjACA9AAQBEAAAcABQAiABA4gGQBBgIAaAAQAHAAAQgJIAIgEIA2gMQAegJASgTQAUgWAAgKQAAgMgVgVQAAgRAPAGIAXASQAPAKAHAKIgIAFQgEACAAACQgDAcgZAQQgfAOgOAKQgMAKgaAEQgZAEgGAFQgOAMgdgCQgdgDgNALQgPAMgfACQgoACgJACQgEABgcgEQgUgEgNAQQARAEAoAUQAiAQAYADIB9AOIBJAHQAqACAhgFQALgBACgJQABgNACgCQAGAIAAALIAAARIgJgEQgGgBgDAGQgdARgXAHQgSAFgTAAQgLAAgLgCg");
	this.shape_261.setTransform(99.2681,118.3873);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#42B654").s().p("ABdCjQgVgEgxgBQgsgBgagIQgmgKhggNQgbgEgcgRQgKgGgmgbQgMgJAGgNQAGgNALADQAYAGAmgJQAugMAOAAQAjAAA9gHQBCgHAcgBQATgBAHgCQAOgDAJgIQAKgLAWABQARABAJgNQAPgKAVgIIAmgNQAOgFAFgIQAGgIgBgPQgDgYAAgMQAAgVAMgNIAMALQAGAGgBAJQACAjgBAoQgCAegKAJQgLAIgdgFQgRgCgPAHQgLAGgOANIgKAMQgGAFgGgDQgRgJgUAIQgWALgLADQgQAFABAQQADAWAPAAQAOABARAHIAeANQAyAWAjgdQAJgGAOgGIAZgKQAPgGAKANQAFAMgOALQgFAFgPAHQgNAGgGAGIgJACQgTAEgeALQglAOgLADIgWAIQgIACgHAAIgIgBg");
	this.shape_262.setTransform(114.9703,147.365);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#4653A2").s().p("AC1BsIgEgHIgDgEQghAOgtgCIhOgIIh3gNQgbgDgegLQgPgGgngRIgOgHQgHgGADgIQACgJAJgEQAIgDAJABQAQADAVgCIAlgDQAkgCAhgMQAJgEAPgBQATgBAFgBIAmgGQAXgEAMgIIAegPQATgIAJgLQAFgGAOgKQAMgJAAgOQAAgGAFgDQAGgEAIADQBRBOgZBtQgEAGgRAJQgOAHgCAMg");
	this.shape_263.setTransform(113.971,119.0479);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#B14338").s().p("AjMBoQgcgIg5gUQhxgmhCgpQg5gkgOgMQgngdgUgiIAIACQAEAAACACQAOAQADgIIACgTQANAaAfATQASALAlATQAOALASAAQArABAWAcQAFAGAKAAIARgBQAdgEALAFQALAFAKAWQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQgBgCACgDQAJgPAMgFQAMgEARAEQAfAHBDAGQBAAGAhAIQALADALgMQA6g/BbAcQAaAJARgEQAagGBCgCQA7gCAggLIDngfQgBAKgIAEIgQADIgsALQgaAGgTABIgJADQhQAIgzAQQgvAJgRACQglAEgcgCQgOgBgcAMQgZALgQgFQABAFADABIAGACQAOAFgBAJQgCAJgQABQg4AEgkgEQgTgCgKACQgOAEgJAMQgJALgdAIQgKADgMADIgGABQgLgPgYgBQgfAAgJgFIASARQAKAJACAJQgogEgvgOg");
	this.shape_264.setTransform(67.225,180.625);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#A64137").s().p("Ak4CdQg1gWglASQgMAFgDgDQgRgLgkgLQglgLgQgLQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgEADQgdgBgigZQgegWgGgUIAAAKQgBAGgHACQgFACgEgEIgHgIQgHgHgFgDQgcgWgRgjQgNgcgIgqIgGgUQgDgNAHgIQAFgEgBgIQAAgKABgDIAFgLQAFgEAIAHIACAFQABAgAJARQAIAQAfAcQAHAGAFAPQAFANAIAGQAJAGAPAAQAyAAAIAiQABAHAFAAIAIgDQAkgFAwAQQBkAhAoAQQAwARBBgRIAKABQBXAaBzAEQAmABCngDQChgCBtgdIA4gRQAhgLAWgKQAegOAwgkQAegVADgrIACgTQABgKAGgHQANABAHAKQAFAJgBAKQgDAggDANQgHAZgRAPQg/A6hgAcIgJAEIgTAHQiRAahMAGQgcAFg/ABQg7ABggAIQgMADgXgFQgbgGgIAAQg+gBggAAQg2ABgoAJQgWAEgbgIQgzgRgjAXQgIAGgKAAQgJAAgMgGg");
	this.shape_265.setTransform(74.0133,164.7148);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#3D499A").s().p("ABDCUQgUgFgXAEQgxAIg8gEQgpgChEgJQgNgDgGgIQgNgRAIgTQAOgTAeAAQBtgCAxADQgfgCgPgDQgcgFgUgMQgZgQgrgCQhFgChCgkQg9ghgZgVQgVgRgmgCQgSAAgNgLQgWgTAAgLQgBgLAVgVQAIgFALACIAJAEIAEADQAXARAeAGQAQAEANANQAGAHAPAKQAMALAAAOQABAGAIACQAXAHArAPQAoAMAcACQAlACAbARQAaAQA1AIQAlAFBbAJQBTAHAuAJQAPACATgEQASgDALAAQAQACALAKQAGAGAFgCQANgEA6gIQAtgGAXgSIACgCQACgHAGgCQAEgCAIABQAHgHAQgHQAQgHAHgGIACACQABACgCADIADAEIABAJQABAFgBADQgEAKgFAGIgGAGIgWARQgNAKgMACQgRAAgiANQggAMgTAAIglAEQgaADgKAEQgUAGgMAQQgMAQgZAFIgrAEIgmABQgiAAgYgFg");
	this.shape_266.setTransform(85.7244,127.2112);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.6,197.9);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A3533F").s().p("AgcgIQANAGAPgBIAdgFQgSARgLAAQgMAAgQgRg");
	this.shape.setTransform(42.375,71.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A37941").s().p("AAAAMQgSgDgNAFQgFACgCgGQgCgGAFgFQATgVAgAKIAJAFQAFADAEAAIAGAFQAAAPgKABIgCAAQgHAAgVgFg");
	this.shape_1.setTransform(43.6859,104.491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A17840").s().p("AgQAJQgYgHgFgCQgDgCABgFQACgEAEgEQAMgNAgAEQAhAEAJAQQAGAIgHADIglATQgHgMgQgFg");
	this.shape_2.setTransform(36.0535,101.8779);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B48A4E").s().p("AgEAIQgBgEAAgHIACgFQABgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAGgBgBAIIABASQgHAAgDgFg");
	this.shape_3.setTransform(45.9,131.4388);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B08245").s().p("AgHgOQAaAKgUATQABgRgHgMg");
	this.shape_4.setTransform(55.4594,108.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#884E36").s().p("AgZAIIgSgQQADgGAFACIAJADIAAABQAZAWAhgXQADgFAJAAQAAAHgGAHQgDACgJAHQgNAGgNAAQgNAAgMgHg");
	this.shape_5.setTransform(42.125,71.463);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3B3B3A").s().p("AgHgFQAIgFAIAEIgBAMIgMADQgFgHACgHg");
	this.shape_6.setTransform(46.2,58.2934);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5A4A30").s().p("AgFAJQgJgCABgPQABAAAAAAQABAAABAAQAAAAABAAQAAAAABAAQACAEAIADQAJABADAJIgTAAg");
	this.shape_7.setTransform(46.195,60.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E4DFCD").s().p("AgLAIQgDgGAEgFIAIgIIAJABIAHAMIgMAIQgCACgDAAQgEAAgEgEg");
	this.shape_8.setTransform(48.1484,58.03);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9B7C4D").s().p("Ag0AFIgDgEQAEgGAHgCQADgCALgBQAWgIAhAKQAGADAJgCIAQgDQgHAOgMgCQgOgEgIgBIgNAKQgSAGgJABIgDAAQgOAAgKgJg");
	this.shape_9.setTransform(45,70.3268);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A6814F").s().p("AADAFQgBgFgDAAIgHgCQAOgLADARQgBABAAABQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBAAAAg");
	this.shape_10.setTransform(50.925,68.3236);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F783F").s().p("Ai7gOQA+ADB9ACQB9ABA/ADQhzAThJABIgGAAQhkAAhRgdg");
	this.shape_11.setTransform(35.35,79.8765);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A77B41").s().p("AgbApIgEgDQgDgEgKgCQgJgBgEgFQAAgEAMgIQAJgHgIgJQgBgkglABIgfAAQALgHASABIAdADQAkAEAOAAQAbABAWgIIAvAAQAHAEAHAKIAJAQIgSALQgOgGgFgFQgLgJgIAAQgIAAgJAMQgIAKgDAAQgDgBgFgNQgEgNgMAGIgJACQgHABgCAFQgCAGAFADIAJAEQAFAEAQAFQAMAGgEAPQgCAJgVAEIgNABQgLAAgJgDg");
	this.shape_12.setTransform(52.1,98.9836);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B08245").s().p("AAZAwQgQgCgHgDQgFgCACAGQABAJAAABIgVgIQgMgEgLABQgJABgGgHQgHgIgFgEQgIADADgJQgEgNAIABIANAAQAGgBAOABQANABAHgEQAKgGABgEQABgFgKgHIgIgEQgKgEgEgDQgHgFACgJQABgJAIgEIAQgDQALgCAFAHQADAFABALIAOgOQAIgJAKACQAaAFAKAVQgNAPgTACQgKABgEACQgFAEABAHQABAIAHgCQAJgDACAAIAOABIAOAIQALAJABAFQACAIgOAHQgEACgGAFIgKAIQgHgGgOgDg");
	this.shape_13.setTransform(54.8342,101.7765);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA8B4B").s().p("AgfACIgpAAQBGgMBMABQgJAIgVgCQgUgCgJAHQgMAIgLAAQgMAAgLgIg");
	this.shape_14.setTransform(59.7,94.4422);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B08448").s().p("AgEABQgVgJgeAKIgYAAQgPABgIgGQAegIAoACQAYABAuAFIAXAAQAVgHAVAHQgCAMgUAAIgrABQgZAAgRgJg");
	this.shape_15.setTransform(46.275,95.005);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B18344").s().p("AglgOQAJgEAUABQATABAKgDIARAAQAAAJgGAHQgGAGgJAAQgIABgJAGIgNAKQgZgNABgVg");
	this.shape_16.setTransform(64.9731,95.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A97E43").s().p("AgCAFIgMgNQAOABAEACQAIADADAKIgHABQgGAAgEgEg");
	this.shape_17.setTransform(27.425,99.6363);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A67B41").s().p("AA3AfQgHgMgIABQgFAAgLAHQgGAEgHABQgHAAgEgGQgDgHAGgEQAPgJADgEQgXAGgcgDIgtgIQgHgHADgEIAKgHQAOgSASADQAMABAUAOIAlAUQAWALARAEQABADAHAFQAEAFgGAFQgFAGgHAAQgHAAgDgHg");
	this.shape_18.setTransform(40.0131,110.2848);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A97E43").s().p("ABGBHQgLgDgDgHQgHgTgTgDIgggGQgNgGgPAPQgagFgGAAQgTgBgOAGQgKgYAagGQgSgDgNgPQgNgTgHgIQACgDAUgKQAOgIgEgQQAPgDAjAJIAMAIQAZAPARADQAYADAVgQQAFgBADADQACADgCADQgHAJADAJQABAFAIAKQgCADgJADQgIACgBAFQgUgDgLAAQgQgBgLAMQAKgHAXAHQAXAHALgNQAJAHAbAGQAXAFAJANQAQAKgKAUIgSAAQgLAAgIADQgGADgGAAIgIgBg");
	this.shape_19.setTransform(42.5555,103.8959);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A67B40").s().p("AAHATIgOgGQgIgDgHAEIgNgEQgGgEAHgJIASgMIASgEQALAAAHAIIANAHQAIADgEAHQgGAOgQAAIgIgBg");
	this.shape_20.setTransform(37.0597,116.105);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD8042").s().p("AABAJQAIgGgFgDQgGgBgJAEQgKAHgGACQABgTAQgFIAcgFQAQAOgKAHQgPAIgCAGQgLgEAFgFg");
	this.shape_21.setTransform(50.5173,123.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AD8044").s().p("AgFA6QgDgDgGACIgKAFQgKgOgUgNQgXgNgLgHQADgHAFgBQAEAAAIACIAOADQAIAAAGgFQgEgMgPgDQgVgEgCgCQAGgLgBgHQgCgIgOgEQgLgCgIgPQAHgGAIABIAPAEQASAHATgDQAPgCAEABQAJADgCAPQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQABAAAAAAIADgCQAHgJAQAIQARAIAHgMIAJABQADAUAUAEQAeAGADADQAJAGADADQADAGgDAJIgYARIhjgrQABAZAYALQApAQADADQgTAPgJAFQgGADgHAAQgKAAgLgJg");
	this.shape_22.setTransform(43.6625,116.0051);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CD9953").s().p("AgEABIAAgLIAIAKQADAFgGAGQgEgDgBgHg");
	this.shape_23.setTransform(54.0613,126.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B1803F").s().p("AgFAGQgDgEAEgKIALAQIgEABQgGAAgCgDg");
	this.shape_24.setTransform(51.0519,137.1611);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B78343").s().p("AgEgEQADgDAKgBQgHALgKAGQABgKADgDg");
	this.shape_25.setTransform(51.5,133.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AB7F40").s().p("AABAFQACgFgGgJQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgCQAJAQgCAGQgDAHgPAAQAJgFABgFg");
	this.shape_26.setTransform(48.051,135.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A87E41").s().p("AgCAHIgMgTQASACALARIgRAGg");
	this.shape_27.setTransform(44.425,136.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CD9953").s().p("AgHAsIgJgHQgEgEACgGQgIgMAIgMQAFgKANgHQAGgDAAgPQAAgOAKgDQAOAWgOAUQgJADgCAIQgBADAAANQgDAPADAPQgHAAgEgGg");
	this.shape_28.setTransform(52.5125,133.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8F6C3B").s().p("AAEgJQAEgCAAAHQABAOgPABQgEgOAOgGg");
	this.shape_29.setTransform(37.4347,131.8868);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9E763F").s().p("AANgNQAAALgIAGQgFAEgMAGg");
	this.shape_30.setTransform(35.275,128.525);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A4783F").s().p("AgNAEIANgLQAHgHAJABIgXAcIgCAAQgJAAAFgLg");
	this.shape_31.setTransform(40.261,136.5476);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A87F42").s().p("AgGAMQgMgJADgHQADgFAMgHIAEAAQAEACACAHQADAGADABQgHAOgFACIgCABQgDAAgFgFg");
	this.shape_32.setTransform(44.8605,132.7097);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B38647").s().p("AgBAgIAHgKIAHgKQAEgHgJgHQgIgIgGADQgHAFgEACIgOAIQAAgIAJgJQAMgMACgFIAAAAQADgJAKgEQAPgIAKAIQAFAEgGAGQgGAFADAEQAGAJgGAJQABAOgJAMQgFAGgPAOQgEgGAFgGg");
	this.shape_33.setTransform(48.569,127.2186);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B88E4D").s().p("AgfBAQgQgFgIABQAAgKAJgIIAPgLIALgIQAGgEAGAAQALAAAEgNIABgHQAAgEgGgCQgCAAgCgCQgGgQALgOQAHgMAQgJQAHgFAFADQAEACAGAGQAHAGAAAEQACAGgFAGQgIAJgMAUQgQALAQALIADATQAAAKgPABIgLAFIgJgGQgFgDgEAJQgGAKgMAAIgEAAg");
	this.shape_34.setTransform(45.05,132.0298);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7A6240").s().p("AAAADIgogFIBRAAQgOAFgSAAIgJAAg");
	this.shape_35.setTransform(43.025,29.72);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BB8540").s().p("AgEgEQAEgEAMgDQgIAOgPAJQAAgLAHgFg");
	this.shape_36.setTransform(77.025,113.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D1A467").s().p("AgEABIgBgJIALAAIAAAJQgCAGgEACQgEgCAAgGg");
	this.shape_37.setTransform(54.7,133.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C6944B").s().p("AgJAJIgFgJQgBgEAFgEQAJAKAKgCQACAAAEABIgIAIg");
	this.shape_38.setTransform(73.9589,107.825);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BA8645").s().p("AgDgCIASgPQgCAMgJAIQgEAFgOAKQACgMAJgIg");
	this.shape_39.setTransform(56.775,135.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B78646").s().p("AgFALQgHgLACgHQACgIAOgBQAFAFAAALIgLASg");
	this.shape_40.setTransform(53.5609,134.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B98544").s().p("AgPAPIAageQAGAEgBACQgBADgKANIgIAGQgEADgEAAIgEgBg");
	this.shape_41.setTransform(71.8327,111.5058);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B48544").s().p("AgWAQQAEgKAMgGIASgNQAFgDADABQADACAAAGQgGABgQAMQgKAKgKAAIgDAAg");
	this.shape_42.setTransform(58.825,121.2215);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BF904E").s().p("AgFANQAGgMgHABQgLACAAgBQAIgNAUgEQAJAHgCAHIgJAKQgDAFgGAAIgFgCg");
	this.shape_43.setTransform(67.669,103.1113);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B18345").s().p("AggATIAXgNQANgHACgPQABgEAJADQAMAEAEgCQADAHgGAEQgJAEAAACQgEAGgKAEIgPAHg");
	this.shape_44.setTransform(66.8363,101.4857);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BB8C4C").s().p("AgQABIgEgIQgBgGAGgDIAQgGQAKgDAGABQAFABgCAIQgBAHgHAEQgJAFgCADQgBAFALAEIgQAMIgLgYg");
	this.shape_45.setTransform(57.1102,114.4025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B78748").s().p("AgTANQAVgJgDgIQgCgGgUgIQALgKAOAHQASAIAGgCQgEASgQAKQgJAGgWAGQABgJAFgDg");
	this.shape_46.setTransform(66.175,108.5309);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BE8D4B").s().p("AgXASQgNgDgDgIQgDgFAWgPQAUgRAGADQASAIAQAQQADACgVAOQgVAPgHAAQgDgGgOgEg");
	this.shape_47.setTransform(63.9307,115.7019);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BF904E").s().p("Ag4AgQACgFAIgGQAJgFABgFIACgFQAagSgWgdIgCgIQAAgDAHADQAHADAIAGIAOALQAKgGAIAGIgTAMQAZAFAFACQAQAFAIAKQgHAGgIgCIgPgFQANASgMAKQgSAIgGAGIgJgEQgHAAgBAKg");
	this.shape_48.setTransform(63.1,106.4308);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BB8C4C").s().p("AgUBQQgDgCgBgEQACgHAAgMIABgSIAAgGQgBgPgFgIIgKAJQgGAEgHgCQgCgDgBgQQACgFAIgJQAHgKgDgJIgCgLQgBgHADgFQABgKAHgEQAEgCAMgCIARgGIAVAEQANACAIAHQAIAGABAEQADAGgIAGQgMgBgNAKQgQAOgFABIgNgCQgGABAIAMQAZAmgZAyQgDADgEAAIgEgBg");
	this.shape_49.setTransform(56.3063,124.9917);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B38546").s().p("AAqA8IgKgPQgGgIgIgBQgTgCgNgGQgPgHgIgQQgwgLgagbQgBgKAGgEQAEgCAJgCQAHgBAUAFQAQAEALgFQACgBADACQACACABADQAIAVARAEQALADAXgEIALgCQAIgDgBgFQAAgDgFgGIgFgGQgGgTAMACIAbACQAQAEAFAPIgHAQQgBAIAPACQAHABAIAMQAAAOgOAJQgTAOgCAEQgPAIABgSQAAgEAFgFQAFgGAAgEQgZABAJAUQAFAMgDAHQgEAJgHAAIgGgBg");
	this.shape_50.setTransform(50.5618,111.6658);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CB9E61").s().p("AgIAFQAIgMgCgMIAFgCQAEgBACAEQgHANABAJIAAAKQgCAFgDADg");
	this.shape_51.setTransform(60.3,135.2546);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B88545").s().p("AgKgDQADgFAMgFQAKAGgDAKQAAAHgJgCQgJgBABAIQgKgMAFgGg");
	this.shape_52.setTransform(58.8748,137.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B68341").s().p("AgDAFIgDgMQAFgBAEAFIAEAHIgFAEIgBAAQgCAAgCgDg");
	this.shape_53.setTransform(56.25,139.9259);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B68645").s().p("AgUATQAAgDAHgBQANAAAEgLQgPgPAOgPQAJAAgCAHQADAIAJAEQAAAHgIAHQgJALgBADIgXAGQgCgGABgCg");
	this.shape_54.setTransform(52.595,138.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CE9A54").s().p("AAEA4QgHgEgEAFQgLAFgSgFQAAgPASgPIAGgGQAEgGAKgLQAKgKAEgHQAFgFgHgKQgIgMAHgKQALgQAEAHIAGALQgGAHADALQADANAAAEQAEAFgBAHQgBADgDAHQgBACgNALQgIAHAFAKIgCAMQgBAHADAFQgIAAgEgHg");
	this.shape_55.setTransform(56.635,134.7435);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BB8943").s().p("AAJgIQgGALgLAGQABgQAQgBg");
	this.shape_56.setTransform(69.125,120.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D0974D").s().p("AgDAUIgIADQgFABgCgFQgCgEADgFIAHgGQABgDAGgCQADgEgDgGIAQgLIgDANQgCAIAHAGQAIAGgFAFIgLAIIgKgEg");
	this.shape_57.setTransform(71.6441,120.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BB8B48").s().p("AgWAUQAlgVgogSQAOgJAOAHIAXAMQgOAXggALIgCgFg");
	this.shape_58.setTransform(64.425,123.2219);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BA8C4F").s().p("AAEADIgVAAIgFAAQAIgGAOABIAYAAQgHAFgMAAIgBAAg");
	this.shape_59.setTransform(70,74.3205);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#99784A").s().p("AgdAQQgBgCgTgHQgMgFADgOIAMgBQAggEAUAFQAGADAVACQASADAJAGQgCAHgKABQgLABgCAFg");
	this.shape_60.setTransform(44.1867,73.6238);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9D7B4B").s().p("AgkAgQABgKAIgBQAEgBAJACQgGgEgVgCQgSgCgJgJQAEgNAPgNIAWACQAMACAIgJIAGgFIAFAAIAGAAQgEAZABAEQAAADAIAEQAHADAPAKQANAGALgHIAHAEQgqALgtAAIgRAAg");
	this.shape_61.setTransform(51.4,71.9939);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A6814F").s().p("AgoAYQgZgMgCgHQgCgHAOgYIAMAGQACAPAOAAIAWAAQABABAEgEIAGgDQAJAKAWAGQAWAHAJAIQgNAFgTAAIghABIgVABIgEAAQgKAAgIgDg");
	this.shape_62.setTransform(57.9066,71.4841);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CCC2AA").s().p("AgHAFIgIgGIAHgFIAMAAQAHABAFADQAAAFgFADIgJABQgEAAgFgCg");
	this.shape_63.setTransform(46.2,57.1393);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E1DDD1").s().p("AABAMIgMgMQABgLAKgBQAEgCAFAGQAGALgFAHIgCAAIgCACIgDABIgCgBg");
	this.shape_64.setTransform(44.7263,58.1757);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A78C44").s().p("AgGAIQgHgCgEgFQAAgKAMgBQAFAAAHAFIALAHIAAAEQgEAFgIAAg");
	this.shape_65.setTransform(47.075,56.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#DAD2A8").s().p("AAAAEIgRgDQACgDADgBIAGgBIAMAAQAHABAFADIgIAFg");
	this.shape_66.setTransform(36.625,56.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F4EFE7").s().p("AgLgCIAHgHQALgHAFALQgGABAAAIQAAAIgGABIAAAAQgJAAgCgPg");
	this.shape_67.setTransform(35.35,58.0237);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A88D4A").s().p("AAHAIQgDgBgJABQgIABgEgFQAKgMAGABQAEAAAPAQg");
	this.shape_68.setTransform(37.725,56.0964);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E6E1CF").s().p("AgLgEQgBgGAHgCQAFAAAGADQAIAFgDAMQgIAFgEAAQgKAAAAgRg");
	this.shape_69.setTransform(38.8516,57.9502);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AD8952").s().p("AgFABIgGgBQgDgCACgEQABAAAAgBQAAAAABAAQAAAAABAAQABgBABAAIAGAAQAWgBgLASIgPgIg");
	this.shape_70.setTransform(50.2035,65.5195);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#866E3C").s().p("AAEAMQgBgFgDgEQgFgCgEgHQgBgEADgDIAHgHIAKANIAAAOQAAAJgGAFIAAgJg");
	this.shape_71.setTransform(49.6214,57.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AD8952").s().p("AAbAgQgMgBgjgMQgdgKgVADQgLABgEgEQgGgGAHgLIgGgXQANACAYAHQAXAGAQgDIAFAHQAKgBARAMQARALALAAIAbAAQAQADACATQgNgIgTAEQgZAEgGAAIgBAAg");
	this.shape_72.setTransform(62.05,70.2273);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C99752").s().p("AgOgCIAGgGIAXAGIgRALQgDgIgJgDg");
	this.shape_73.setTransform(45.625,151.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C4934C").s().p("AghASIgigFQgVgDgOAIQgEgJgBAAQgQgCAFgEIAKgHIC1gMQADgDADADIgJAGQgFAEAAACQABAJARABQAMABAZAAIAAAFQg3AHhGAAIgcgBg");
	this.shape_74.setTransform(60.3405,76.3183);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A07555").s().p("AAAAHIgFAAIgGgQIAGAAQATAAgCARQgDACgDAAQgDAAgDgDg");
	this.shape_75.setTransform(38.3091,71.5639);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#917448").s().p("AglAKQgRgKAIgDIAMgGQANADAcgGQAbgGAPAHQgDAGgHADIgNAEIgSACQgEAAgDgDIgPAOQgDABgEAAQgHAAgJgGg");
	this.shape_76.setTransform(37.0194,70.4417);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#917448").s().p("AAjAPQgcgOgXAHQglALgQgbQAQgHAkAFQAiAGASgJQAEgDAEADQABAHANAGQAMAHABAIg");
	this.shape_77.setTransform(34.175,73.6682);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9A7D4F").s().p("AgXAOIAAgEQALgVAJgCQAIgDATAPQgOAJgIADQgIAEgIAAIgJgBg");
	this.shape_78.setTransform(36.5,66.6457);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#715B37").s().p("AgOASQgQgEgGgRIAGgNQAMAAACAKIABAGQACAEADABQAFAAgGgCQgCgCgBgCQAAgEAEgDQAGgEAHgBQAFAAAKgDQAKgCAFABQAIAJgHAIIgSATIgegBg");
	this.shape_79.setTransform(46.619,59.8969);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5F4F33").s().p("AgCAXQgUgBgMgWQAAgBAAgJQAAgGAGgBQAGAFAHgEIAKgGQAFgBAGADQAHAIAQAGQAFADACAIQgRASgSAAIgDAAg");
	this.shape_80.setTransform(37.1,59.4841);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#34302D").s().p("AAmASQgfgFgNADQgLgCgQABIgcADIgNAAQgHgBgFgFQgHgGADgEQACgCAIAAQAPgJAggIIAeAAQAPgFAaALQAbALANAAQANgEAAAKQgCAHgGADQgKADgOAAQgJAAgMgBg");
	this.shape_81.setTransform(42.205,68.1889);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A88654").s().p("AAzA9IgHgEQgEgFgHABIgNABQgjgHgmgQIANgQIgLgFQgGgCgDgDQgKgHAJgNQAEgEAEgBQAFgBACADQAMATAQgDQAKgDASgKQABgGAEgGIAIgLQACgDADgKQACgIAEgDIAHAJQAbAbgcAXIgLAEQgGAEAFAJQgDADgHgBIAIADQAKACAEAKQACAEAGABIAJABQAMALgDALQgDADgEAAIgIgBg");
	this.shape_82.setTransform(47.2331,63.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#A17841").s().p("ABAAdIgSgJIgSgKQgTgIgJAAQgOAAgKAQQgEAGgKADIgSAEIgGAAQgEgEgKgFIgPgJIgLgHQgGgFgHABQAEgIgDgJQgEgHgKgLQAvAHBCgBIAXAAQAJACAPgBQARgCAGABIAjAAQAmABABAiQgPAVgOAEIgKABQgLAAgPgFg");
	this.shape_83.setTransform(35.15,97.389);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B78C4A").s().p("AgrAOQgNgJgZgBQgcgCgLgEQAEgFAIgBQAMgCAGgCIgdgDIAAgDIAHgCIAsAAQAcgBARAHQACABAFgCIAIgFQABAMALAAIAaAAQAfgCARADQAaAFAQAQQgFAGgJABQgEAAgLgBQg6gJgzALQgSAAgHgIg");
	this.shape_84.setTransform(38,93.1941);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#AD8245").s().p("AkkAHIgFgQQgDgKACgEQADgFAMABIAwgBIAvAAQAqACCSgBQAbAAAVAGQAJgQAWACQAlAFA3AAIBcAAIAIADQADABALgDQAJgCAGAFIg6ARQgXgBgqAKQgsAKgUAAQgkABhHAMQhFAMgkABIgOAAQhtAAhGgdg");
	this.shape_85.setTransform(45.2479,80.3643);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BB985E").s().p("AgiAhQgggGgPACQgBABgEgEQgHgFABgZQACgZAIgHQADAUATAJQAFADAcAHQA2ASA2gLIAMAAQAAAFgEAFIgIAHQgPgIgUAGQgXAJgLACIgMABQgOAAgUgEg");
	this.shape_86.setTransform(27.215,50.1529);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C09C60").s().p("AAVBLQgXgCglgLQgQgFgRgNQgJgGgCgEQgEgHAGgJIAAgMQAAgHgGgDQACgPAKgSIASgeIAUgGQAMgDAJACQAAANgMAJIgUARQgLAOgCASQgCASALAKQADADAEABQAEABACgCQAJgOALACQAFACAOALIAJAGQAGACABgNQABgLAMAJQALAJATgBIARAFQALAFABACQAAACgHAHQgCACAEAMQgXALgbAAIgMgBg");
	this.shape_87.setTransform(27.0767,44.6281);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C6A162").s().p("ABSBHQgIgDgJgNQgRgZgtAQQgEAFgGABIgNgCIgKgIQgGgDgCAOQAAADgGAAQgFABgCgDQgIgLgbAFQgZAFgIgTQgIgTABgNQACgOAPgNIAlghIAigMIADAFQgCAGgOAPQgMAMABAMIgRAFIA8AeIAHADQADABABgFQAEgPANgBQAKgBAJAFQAPAKAgAOQAgAOAQALIgbADQADADAPABQALABACALQgPgIgKAFQgIAEgGAAIgGAAg");
	this.shape_88.setTransform(32.6632,42.9974);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AA8955").s().p("AgXBBQgSgCgaABIgsADQABgLAKgGIARgKQAcgWAUAeQABACAHgBIAMgBQAAgIgJgCQgLgDAAgFQACgEAKAAQAJgBADgFIAAgMQAAgHAKAHQAHAFAGgDIAKgFQATgCAHgIQAJgKgDgSQAAgDACgFIACgIQAcgWAZAEIgLAMQgUAGgGASQgGARAJATQACADALAIQAGAIgOAIQgHgHgJAAQgHABgDAJQgKAcgYAFIgIAAQgNAAgYgDg");
	this.shape_89.setTransform(23.6,61.4676);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B7813F").s().p("AgCABQACgKgCgIQAOALgEAIQgCAFgOALIAGgRg");
	this.shape_90.setTransform(79.6769,115.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC8941").s().p("AgNARQACgDAGgEQASgTgOgQQAZAEgNAVQgDAFgPAVQgLgEAFgFg");
	this.shape_91.setTransform(80.7603,108.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D19C52").s().p("AgIgIIARALIAAAGQgQgBgBgQg");
	this.shape_92.setTransform(33.875,159.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B18040").s().p("AgDACQgKgKACgLQACADAOAOQAKAJgEANQgBgDgNgPg");
	this.shape_93.setTransform(26.5885,140.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B48343").s().p("AAAAMQAAgEgLgIQgIgHAHgKIAcAjg");
	this.shape_94.setTransform(33.1117,152.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C08E4C").s().p("AgKgTIASAPQAIAKgJAOQgVgRAEgWg");
	this.shape_95.setTransform(29.9891,147.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B88747").s().p("AgNAEQgKgHAFgNQALgDAJAHQAFADAKAKQAMAMgZAFIgRgOg");
	this.shape_96.setTransform(31.9885,145.0903);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C3924E").s().p("AAEAVIgRgPQgJgIgDgLQgDgMAGgBQAGAAAFAEIAWAQQAMAJAEAMQgDAJgIADQgEgGgIAAg");
	this.shape_97.setTransform(34.3888,151.7975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CF9B53").s().p("AAPAhQgGgPgFgHQgHgLgOgBQgGgCgDgIIgFgOIAAgGQAEgCAGAAIAKADIAHADQAEADgCAFQAFAQAFAGQAJAJAPgCQABAMgCAFQgDAHgKAAIgDgBg");
	this.shape_98.setTransform(36.23,156.4517);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BA8A4A").s().p("AgKARQgLgJgEgSQADgEAOgHQAFAAAFAEIAJAGQAPAGAAAIQgBAHgLAKQgFACgFAAQgHAAgHgFg");
	this.shape_99.setTransform(38.0008,155.495);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B78748").s().p("AgagGIAMgLQAIgHAHADQAYAHACAOQAAAIgIAGQgFAEgMAEQgSgMgKgQg");
	this.shape_100.setTransform(36.8515,148.7526);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C3914D").s().p("AgOAQIgLgGQAFgaALgDQAKgCAaAUQgDASgNADIgEAAQgHAAgOgEg");
	this.shape_101.setTransform(42.7,159.382);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BC8B4A").s().p("AgOASQgOgLADgKQADgHAOgMIAIABIATAHQALAGgEAIQgFAMgJAGQgGAFgGAAQgHAAgHgFg");
	this.shape_102.setTransform(46.8461,156.1625);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BC8D4B").s().p("AgCAWQgJgCgVgXQAOgPALgDQANgDAOAPQAPgDgDAOIgGAGQgSAOgIAAIgCAAg");
	this.shape_103.setTransform(42.1007,152.5039);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C4934C").s().p("AgJgHQgTACgHgCQAHgHANAAIAUABQAEAGALAAQAMAAAEAEQgFAHgMAEQgRAFgCACQAEgVgNgBg");
	this.shape_104.setTransform(77.125,77.2483);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B48443").s().p("AgDgEQAHgGAQgHQABAIgIAFQgJAFgBAFIgFAFIgSAGQAFgNAMgIg");
	this.shape_105.setTransform(74.4015,96.95);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C4924F").s().p("AgOAVQgCgIAIgGIALgIIgFgSQAPgEACAJIgBASIgQARg");
	this.shape_106.setTransform(76.1633,95.4277);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#BD8B49").s().p("AgIAEQAEgKgDgLQgCgIAGAAIAJgBQAWAQgLALQgRAMgFAHIgPAHQAJgPADgIg");
	this.shape_107.setTransform(72.9306,103.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C28B45").s().p("AgQAWQgBgEgKgDQgJgCACgJIAAgFIAJgCQAFgCACgDQALgTAOAAQALABARANIAAAMQgPAGgNANQgHAHgDACIgDABQgFAAgFgGg");
	this.shape_108.setTransform(76.4068,106.5056);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BE8C46").s().p("AgZAaQgMgIAGgKIAKgRIAFgNQAEgGAJACIAHABQADAEAQAGQAMAEgBALQgCAJgZALQgQAHgJAAQgEAAgDgBg");
	this.shape_109.setTransform(78.033,98.5131);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CB974C").s().p("Ag4A1QAGgNAEgEQAGgGAMADQAHACADgFIAEgLQACgHgDgEQgDgFgHgBIgHAAQgEgBgBgDQgCgDgKgFQgIgFADgHQADgJAHgFQAIgFAJACQAMACAVgJQAVgIANADIgJAJQgFAFgDABQgRABgDAKQgDAIAFANQAEAHALACIAUAAQACAAAFgDQAEgCAEAAQAEAKgFAFIgOAGQgYAKgGAWg");
	this.shape_110.setTransform(70.7342,86.9359);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BA8B4B").s().p("Ag0AnQgEgDgEABIgGAEQgHADgHAAIgNABQgGgBgCgIQgEgTAUgEQAUgEANgKQAJgHAMgHQAHgGAWgKQASgJAIgKQAFAAAQACQANABAIgDIAdAAQAKAJgDAJQgFAIgQAJQgQAJgFAIQgJAFgOgHQgOgJgIADQABAGAKAEQAJAEABAGQgJADgWARQgRAPgPACIgDAAQgKAAgMgMg");
	this.shape_111.setTransform(66.391,98.5078);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#BD8F4B").s().p("AhIBfQgUgSgfgCQglAAgSgCQgNABgFgCQgJgEAEgOIBpAAIAPAAQAIgBACgHQACgIgFgHQgFgHgIgDQgUgJAEgIQACgEAQgIQAigSAhAEQASADAYgIQAOgFAagLIAegGQARgEAKgJQAFgIAKgDQAFgCANgCIACAAQgDAAgEgCQgCgEADgDIAMgGQAEgDAHAAIALAAQAfABgSAaQgbADgoAPQg2ATgNADQgGACgIAFIgOAIQgOAHAFANQAEANANgBQAMgBAHAEQAJAEgBAJQgBAJgKADIgUABIhcAJQAOATAXABQAOAAAZgEQAXAAAsgCQAngBAbAHQgHAJgOAAQgPgCgHABIgUABQgcgBgqAEIhGAGQgGABgGAAIgNgBg");
	this.shape_112.setTransform(57.343,85.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DCA456").s().p("AgIADIAAgFQAEgGAHAAIAGARg");
	this.shape_113.setTransform(47.975,172.975);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B78442").s().p("AgJgIIAPACQAHADgFAMQgMgHgFgKg");
	this.shape_114.setTransform(37.5042,162.425);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C5924B").s().p("AADAVQgHgBgFgKIgJgQIARgOIANAKQAIAGgCAHQgBAIgEAFQgEAFgFAAIgBAAg");
	this.shape_115.setTransform(40.5125,169.1271);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#B08447").s().p("AgIARQgNgNgGgCQgFgCACgEQABgEAEgDQAEgDAHgJQAHgHAIAFIAdATIABAOQgFAAgHgIQgGgJgIACQABAGAIAKQAGALgIAIQgKAAgKgLg");
	this.shape_116.setTransform(25.3077,115.8413);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AF8448").s().p("AgIAVQgYgUgCAAQADgHAKgGIAPgLQAGgFAGADQAFACABAGQACAOABACQADAEAOgDQAFAAgEAJQgEAIgFAHQgHAEgHAAQgJAAgJgHg");
	this.shape_117.setTransform(23.5566,108.045);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#AE8449").s().p("ABABcQgFgGgHADQgKADgCAAQgDgEgYgNQgQgJgDgPQAHgCANgLQANgHAPAEQgJgKgdgVQgVgPgIgQQAAgCgSgEQgTgEgHgHIgQgHQgJgEAEgIQAEgKAKgHQAKgGANAAIAJABQAGABADgFQAHgFAHAEIALAHIAMANQAIAHAJgCIAIABIATAXQALANAMAFQAGACABAFQAAAEgEAGQgJAIgBALIgEAKQgBAGADAEQAHAHASAMQANAMgMATQgIAKgJAAIgFgBg");
	this.shape_118.setTransform(27.2015,106.55);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A37B43").s().p("AgIABQAKgKABgEIAGgGQAOACgGAIQgIALgGAFQgIAJgNAEQABgKAJgJg");
	this.shape_119.setTransform(41.49,128.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B48A4E").s().p("AAzAhQgMgGgSgNQghgYgLgCQgOgDgYASQgDgEgIgBQgDgEgDgMIgGgMQgDgHAHgEQAGgEAGAEQADADAGAHQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAIAJIAIAGQAUAKgGgTQALgPANAKIAEAMQADAFAGADIAlAQQATANAFAUIAMALQgRgCgRgJg");
	this.shape_120.setTransform(33.8526,118.9309);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B38647").s().p("AgUAvQADgIgJgCIgSgGIgJgDQgFgDABgHQAKgOATAIQAWAJAOgTQgMgIgYgHIgLgEQgGgDAAgGIgEgQQgDgJAFgFQAFgEAIADIAOAHQASAFAUAMQAMAGAYAQQAHALgEAOQgFAEgUAHQgQAFgFAKIgDADQgHAAgHAHQgKAIgFABQgDgCAEgKg");
	this.shape_121.setTransform(46.8921,120.2183);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CE9A54").s().p("AgFAAQABgCgBgCIAGgBQAGAAgBAFQAAADgEACIgHABg");
	this.shape_122.setTransform(50.65,142.15);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A97E43").s().p("AAKgJQgDAJgEADQgDAFgIACQACgMAQgHg");
	this.shape_123.setTransform(27.85,129.925);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A87F3F").s().p("AABgIQACAAAFgGQAFgEAGAEQgRAUgUALg");
	this.shape_124.setTransform(30.6,133.6875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A47B3F").s().p("AgSAPIAPgZIAVgGIgFALIgbAWg");
	this.shape_125.setTransform(32.3,126.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B48447").s().p("AAAAIQgNgJgGgEQAFgNAHACQAFABAHAJIAPAXQgKAAgKgJg");
	this.shape_126.setTransform(29.75,138.0862);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#9D8060").s().p("AgNAAIAAgLIAQAAQAJACACAKQABAHgGACIgKACQgMgCAAgKg");
	this.shape_127.setTransform(24.415,133.4125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B7884A").s().p("AACAcIgVgTIgJgKQgFgHgKABQgIAAAAgJIACgPQAGAIARAFQASAFAGAFQADAHAFAAQAIgCAOABQAQAAAHgBQACADgDADQABAIgHAGIgMAJQgIAGgIAAQgHAAgHgEg");
	this.shape_128.setTransform(39.1521,137.7651);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B98B4B").s().p("AAUAoQgTgEgFgNIgHgNQgEgFgLABQgHAAgJgGQgKgIgEgKQAOgVALgBQALAAAUAUQAIAJAMAGIAXAKQAAACALAKQAJAGgNAKQgKAIgMAAIgIgBg");
	this.shape_129.setTransform(38.747,143.459);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C29250").s().p("Ag7BEQgBgHAGgHQAIgJABgCQAGgHALgEIAPgDQATgFgMgSQgSgPATgOQASgQAPgdIALgIQAHgEAGACQAEAEACAGIACAMIgBAIQgCAEgEAPQgCAMgHAFQgOAEgEANIgBAWQAAALAKADQAJAFADAFQAAAJgLAFQgMAEgCAFQgJAAgDAGQgcgYgpAMg");
	this.shape_130.setTransform(48.4179,133.6167);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C49450").s().p("AAOA+QABgCAJgLQAHgHgHgIQgGgKgNADQgMAGgHAAIgSgMQAIgPgLgHQgQgGgEgGQgCgKgJAFQgKAFgCgGQAAgKgLgLQgMgLgBgJQAEgLANgBIAHAAQALgCALALQAPANADABIANASQAEACARAJQAMAHALAAQAGgBADAIIAFAMQAPATASgGQALgDgCgKQgCgLABgCQAIgDAIAEIAMAJQgFAEACAFIADAJQgXAKgBAGQgBAGAOATQgCAHgFACQgMgHgPACQgEABgVAHg");
	this.shape_131.setTransform(35.65,144.7906);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B48A4E").s().p("AgcBDQgPgFgEgNQAAgCgGgHQgEgGAFgFQACgCAHgCQAFgCgFgGQgGgGgGAFQgFAHgEACQgCAAgGAFQgFADgFgCIgEgQQgEgJATgBQAEAAAFgPIAKgdQgCgEACgDIAFgEQgBgDgJgGQgHgFAEgFQAFgHAHADIAMAJIALAFQAFAEABAHQABAFANAIQANgOAIAKIANASQACAEgCAGIgFAKIAJgMQAGgHgEgHQgKgNALgGQAQgHAAgDQAHAFAKAAIASAAQADAKgJAKQgLANgBAFQgJAMABAPQgKAPADANQgHAKgQAGQgFABgMAIQgKAIgHAAIgZgIg");
	this.shape_132.setTransform(38.9097,129.6667);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7D6037").s().p("AgMgDIAPgIIAJAAQAGABACAFIgUAFQgMAEgHAIQgCgKAJgFg");
	this.shape_133.setTransform(33.8638,31.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#745C3B").s().p("Ag0AJQAQgNAcgGIAugJQAOgEAAAOIABABQgEAIgMAEIgUAFIgSAEQgMACgJgFIgXALQgGgDgBgJg");
	this.shape_134.setTransform(23.55,36.7556);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8C7044").s().p("ABUAIQgOgOgRgBQgZgHgjAAQgqACgUAAIgegBQgCgDgHAAQgGABgDgEQA8gWBFAQQAwgIAtArQAAAFAGAFIAHAHQgKAAgCAGIgWgZg");
	this.shape_135.setTransform(45.9,31.9882);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B4925A").s().p("AgSAbQgDgEAFgFQAEgFABgIIAAgNIAHgLQAHgSARAHQgBARgKAQQgDAGgRAYIgHgGg");
	this.shape_136.setTransform(19.4554,40.8168);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B19058").s().p("AAAAJQgHAAgFgFQACgFAIgBQAIgCACgEQAEADABAFIAAAJIgNAAg");
	this.shape_137.setTransform(9.925,60.25);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B19058").s().p("AhwAxQABgDAJgLQAGgJAAgJQgBgIAJACIANADQAMAAgCgEIgGgIQAHgUAWgIQANgFAbgGQALgDASAKQATAKALgCQADgFgHgHQgHgIAEgHQATANAKADQARAEAOgPQAIAjgNANQgMAOgnADQgCAAgFADQgEADgEgBQgMABgFgCQgagMgfAJIg1AZQgGADgHAAIgLgBg");
	this.shape_138.setTransform(18.468,60.925);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BC8A48").s().p("AgLgHQAFgIAPAFIAGAGQgCAEgGADIgIAEIgMAGQgCgPAEgFg");
	this.shape_139.setTransform(71.4295,118.575);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C58D47").s().p("AgTAXQADgEAAgBQACgHgEgPQgDgPAHgHIADgCQAgAIgBAOQgBAMgMAKQgHAFgQAIQgEgCABgEg");
	this.shape_140.setTransform(74.081,121.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C78F46").s().p("AgIAcIgVgDQgHgIAEgIIAJgMIAJgHQAYgiAYAjQgSALgFALIAAAGQgHAJgKAAIgCAAg");
	this.shape_141.setTransform(74.7638,113.8136);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CA974B").s().p("AgKAkQgDgEABgEIAIgKQAEgGAAgGQgIgOgPALIgKAIQgGAEgGgDIAAgMQgDgDAGgHQAGgHgDgFIAAgMQAFgGAKABQAHADAIgDQAFgCAGgGIANgKQAHgDAIADIAGAAQAUAKgPAWIgIAIQgFAGACAGIgJAKQgDAGAGAGQAIAKgDAKQgCAFgJAMQgDAFgIAAQgQgBgBgWg");
	this.shape_142.setTransform(76.9906,112.1558);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C4924F").s().p("AhnC/QAAgGAKgQIAFgSQAUgsgVgoQgMgYAdADQALAAALgIIATgOQgCgPgOgDIgXgEQgDgCAAgEQACgFAGgFIAJgIQAFgGAOgLQANgKACgMQACgJAGgCQAEgBAKACQAggGAKgZQgHgIgSgGIgMgCQgHgDAAgHQgBgGAGgEIAMgFIAIgCQAOgCACAEQAGAJADgDQABgBAAgJIAAgIQgBgEAEgGQADgFgCgFIgLgIQgHgFAEgIQAEgIAIACIAPAFQANAGAHgCIAJgCQAFgBAEAEIgGAdQAAACgIACQgGACAFAHQAEAHgEAKQgEAMACAFIAGAGQADADAAAEQgBADACAPQACAHgCAFQgDAHgKAKQgBABAAAAQgBABAAAAQAAABABAAQAAAAABAAQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAQADAFAAAGQgEAQgHAOIAHALQgRAGgHARQgLAGgHAMQgIAAgDAGQgIACgJgDIgRgGQAPAPgJALQgOAKgEAGQgBADgHAIQgDAGAOABQAHABAHAFIALALQgCAEgJAAQgJAAgDAKQgBAGgKgFIgSgJQgYgCAKAUQAFALgEAHIgQASQgKAKgEAJQgDAFgHABQgLAAgDgMg");
	this.shape_143.setTransform(63.7,117.4132);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B88745").s().p("AgIAJQgCgJAHgDQACgDAKgCIgLARg");
	this.shape_144.setTransform(53.25,153.025);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CD9851").s().p("AgIAAIAHgJQADgDAHAHIgLAQQgFgCgBgJg");
	this.shape_145.setTransform(67.35,132.8417);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C99752").s().p("AgOAJIAcgXIABAGQgKAPgNAIg");
	this.shape_146.setTransform(48.575,150.675);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#B98542").s().p("AgEgFQAGgKANAJQgFABgJAIQgHAIgIAAQAGgDAEgNg");
	this.shape_147.setTransform(69.7,126.4047);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BA8643").s().p("AgCgCQAIgKALgCIABAGQgFACgMAKQgIAKgKABIAPgRg");
	this.shape_148.setTransform(57.075,149.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B88542").s().p("AgHAAQAJgJABgFIAMAAQgJAPgTAOQgCgJAIgGg");
	this.shape_149.setTransform(57.931,142.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#DAA357").s().p("AgFALQgLgHALgIIARgHIgFAVQgBABgFABIgGgBg");
	this.shape_150.setTransform(65.2811,143.275);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C08A44").s().p("AgQAPIAOgRQAHgKAMgFQgBAIgGAHQgIAIgBADQgDAGgDACIgEABQgDAAgEgDg");
	this.shape_151.setTransform(66.375,141.235);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#BB8745").s().p("AgBgCQAKgIAMgEQgKAOgHAFQgLAJgNABIATgRg");
	this.shape_152.setTransform(62.65,138.35);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BC843F").s().p("AgTAMQAFgCANgMQAKgLALgDIgVAcIgJAFIgDAAQgEAAgCgFg");
	this.shape_153.setTransform(72.6,129.2409);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#BE8944").s().p("AgGAAQgDgNAOgEQACACAJgCQAGAAgIAKIgNAPQgIAJgLAAg");
	this.shape_154.setTransform(67.7583,133.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#D0974D").s().p("AgGALQgPgFAFgIQAJgJABgGIAGAHQAFAEAFgFQAHAEACAHQgBAHgEADIgJAHg");
	this.shape_155.setTransform(65.4375,133.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CD9851").s().p("AADAQQgLgHgKAIQgLgNARgJQAIABAHgIQAKgJADgBIAGAFQABAFgBAKQgCAJACAEIAAANQgDgBgQgHg");
	this.shape_156.setTransform(62.4539,133.95);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C99752").s().p("AgSAOQgJgIAAgCQAAgDAJgDIAogdQAAAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgEAKgRAKQgLAHAKAHIAOAIQAJAFAFAFIgGAHg");
	this.shape_157.setTransform(47.825,145.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BC8B47").s().p("AgJAXIgJgCQgGAAgDgEQgFgLgBgGQgBgIAJgHQAKAEAQgGQATgHAJADIAFAAQABAHgIAGQgJAGgBAEQgJAVgQAAIgBAAg");
	this.shape_158.setTransform(62.4462,131.4282);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C5934E").s().p("AgbAgQgHgFgBgHQAAgDACgKQABgHAGgCIAMgFQAEgFAFgMIAMgJQAHgCAEAOIAIAAQAIABACAGIAAAGQgZAUgPAIIgPgBIADANQgDACgDAAQgDAAgCgCg");
	this.shape_159.setTransform(61.095,137.8125);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C3904B").s().p("AgVAQQgHgFgBgJQgBgKAWgKQAWgKAQAWQgGAEgLAKQgLAKgGAEQgJAAgIgGg");
	this.shape_160.setTransform(55.7978,148.7212);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#BD8D4A").s().p("AgiAGQAIgJAMAAIALACQAEgfANAMQATARACgBQgNATgbAJQgVgBgIgRg");
	this.shape_161.setTransform(51.2,145.6176);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C6924C").s().p("AgNAVIgSgVQAKgRANgHQAOAEAIAEQAMAGAGAKIgKAGQgGAFgBAFQgKAJgHAAQgGAAgFgEg");
	this.shape_162.setTransform(50.925,152.255);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B8884A").s().p("AgSAWQgTgTADgKQADgLAagIIAWAHQANAFAGALIAAAEQgIAVgVADQgEACgFAAQgHAAgJgFg");
	this.shape_163.setTransform(46.4355,149.0741);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C5934E").s().p("Ag5AXQABgEAGgGIALgIQAIgFADgDIAIgFQAEgCgJgFIgFAAQgCgFADgDIAHgEQARgFAGABQAFABAJgBQAKAAAFABQADAEAEgBIAHgDQAHACAGAFQACAEgBADQgCAEgIAIQgHAGgCAFQABAIgMgFQgLgFAEAOQgOgEgVAIQgZAKgKAAQgJgFABgFg");
	this.shape_164.setTransform(52.5964,143.2475);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CD9851").s().p("AgdAuQgIgFgFgBQgZgIAUgTIAYgPQANgKAIgLQACgEAJgFQAJgDAJgKIAGgFQAFgDAHABQAKAFgHAJQgHAIADAFQACADAJAFQADADgBAEIgCAIQAAAIgBADQgDAFgIAAQgJgCgHAJQgJAKgEABQgGANgLgEQgIgDAAAEIACAIQgDADgEAAIgNgHg");
	this.shape_165.setTransform(66.8181,124.2625);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#AC8B55").s().p("AhNADIgLgEQgGgDAFgJIABgBQAFAAAMAIQAKAGAIgCQARAIAZAAIAqgCQALABAUgEQASgBAMAJIh0AGIgCAAQgZAAgagMg");
	this.shape_166.setTransform(65.4364,34.401);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CD9443").s().p("AgDABIADgKQAEADABAFIAAAIIgIADQgDAAADgJg");
	this.shape_167.setTransform(54.2125,204.275);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D29243").s().p("AAEgLIADAAQABAHgDAFQgDAEgIAHQACgPAIgIg");
	this.shape_168.setTransform(54.9475,198.425);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#E2A14E").s().p("AgEAAIAMgKQgCAKgCAEQgDAFgEACQgHgEAGgHg");
	this.shape_169.setTransform(51.5865,204.85);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#D59648").s().p("AgEABQgFgFAFgFQACgCADAFIAHAGQAAAJgGACQAAgCgGgIg");
	this.shape_170.setTransform(48.0934,205.0942);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E3A44F").s().p("AAEgKQAEAHgFAFIgHAKQgFgMANgKg");
	this.shape_171.setTransform(53.2184,201.55);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#ECAE5C").s().p("AgEACQgEgFAJgHIAFAVQgIgGgCgDg");
	this.shape_172.setTransform(47.6179,195.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#C38940").s().p("AgGgFQAEgHAEAKIAFALQgRgHAEgHg");
	this.shape_173.setTransform(43.5136,188.66);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CB8F42").s().p("AgCADIgEgHQgDgFACgFIAKAHIAFAWg");
	this.shape_174.setTransform(46.2056,201.725);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CC9144").s().p("AgEgDQAEgJAMgBIgLAOQgEAJgHAFQACgPAEgDg");
	this.shape_175.setTransform(54.7,183);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#C1893F").s().p("AgHAFQgFgGAJgMIANAbQgOgFgDgEg");
	this.shape_176.setTransform(44.975,194.975);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#C58A42").s().p("AgJAHIAAAAIgCgLQgBgIAHgGQAAAJAFAJQACAGAKANg");
	this.shape_177.setTransform(42.8191,191.375);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#BF8842").s().p("AgEAGQgFgHgBgQIAVAjQgLgEgEgIg");
	this.shape_178.setTransform(41.175,184.925);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CE9348").s().p("AgEgEIARgKQgBAKgHAHIgPAMQgFgOALgFg");
	this.shape_179.setTransform(51.6944,186.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D4994C").s().p("AgKAJIgFgJQgDgFAEgDQAGgFAJABIARAEQgGAMgEAFQgDAEgFAAQgEAAgGgEg");
	this.shape_180.setTransform(48.84,189.4141);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CE9A4E").s().p("AgiAUQgUgDgCgNQgBgHAIgCQAKgDABgCQAHgCAPABQAOAAAGgEQAKACAQgDQAUgEAHAAIAAAWIgBAAQgFAGgNABQgPACgFADQgIAEgKACIgQABQgKAAgIgBg");
	this.shape_181.setTransform(71.9691,75.6318);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#AC844A").s().p("AgLAOIivAAIgQABQgJgBgFgGIBYAAQAGgGALgCIASAAIA/AAQAXABAcgCIAzgIQALgCAZAAQAWgBANgDIAggGQASgCAMAOIAMAAIAAAGIgDADQgIADgQABQgRACgIADQgbAGguACQg2ACgUADIgIAAQgMAAgJgIg");
	this.shape_182.setTransform(50.625,74.4336);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#B88F56").s().p("AAVAbQgSgTgQADQgPADgTgKQgXgMgIgBQgEgBgCgFQgCgGADgFIAAgBIBAAAQAWAAAfAIIA0AQQgGANgVgCQgSgDgIAUQgDADgEAAIgFgBg");
	this.shape_183.setTransform(69.0219,70.9433);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#93733C").s().p("AgFAAQgDgEgFgBIgKgBQAMgJAMAEQAJACAOAJIAAAFQgBAGgGACQgPgBgHgMg");
	this.shape_184.setTransform(47.075,55.324);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#826D3D").s().p("AgSAAQAEgHALgPIAFAAQALgGAIAHQACAFgEAFIgGAHQgEAEgEADQgGAGgEAGQgFAJgFABQgKgNAHgMg");
	this.shape_185.setTransform(44.4784,56.904);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C09C60").s().p("AgcAKQgCgHAFgDIAJgHQANgLAPAFIANAEQAEADgLAHIAMADQgEAGgLAAQgLAAgDAGg");
	this.shape_186.setTransform(38.2464,51.936);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#896F3C").s().p("AAaASQgGgNgDgDQgHgHgEgCQgGgDgHAGIgTANQgCACgCAGQgCAFgDACQgHgIABgKIAGgRQgBgGAFgCQAIgCAAgBQAKgHAZAAIAMAGQANAOADAKQAFAOgKAPQgFgDgEgJg");
	this.shape_187.setTransform(37.1161,57.025);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#BA9358").s().p("AgKAeIgUgKQgSgJgDgIQgDgIAHgSQABgCgCgFIgDgJIAKABQAGABABAFQAFAdAhgGQAMgBAOAHIAXAKIAAAXQgPAKgQAAQgRAAgPgKg");
	this.shape_188.setTransform(61.7321,65.1125);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B38F56").s().p("AAPBCQgWgHgMgCQgNgCgGgGIgEgMQgDgHgGgDQgKgKAOgLQAbgUgZgeQgJgMgCgEQgCgFAEgCQAWAGASARQAMALARAZQAMAIgDAEQgKASAKALQAFAGAUAKQAIAFAAAGQgCAEgEACQgIACgJAAQgJAAgKgCg");
	this.shape_189.setTransform(54.9545,62.094);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#B4925A").s().p("AiDBUQgEgCAAgGQgBgHgBgDIAHgHQAFgFAAgFQAEgTAPgTIAbghQAFgIgBgWQgCgTAQgOIAEgBQAKAHgEARQgMAcAJAPQAIAPAdAEQA0AJApgOQAHgDAKABIASACQATADAIAKIAAAFQgFAGgLACIgSAEQgcgDgWAVQgYAQgRgGQgFgCgCACIgEAHQgFAHgJgBQgEgBgLgEQgegLgVAEQgaAFgRAaQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgDAAgDgDg");
	this.shape_190.setTransform(24.5,52.744);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#BF8942").s().p("AgIAHIARgQIAAAGQgDAKgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgFgDg");
	this.shape_191.setTransform(64.425,148.4964);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#BE8740").s().p("AAMgLQgJAPgOAIQADgVAUgCg");
	this.shape_192.setTransform(60.625,152.725);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#BD8744").s().p("AgGALQgEgEAEgFQAGgFAAgDIAFgEQAHAGgGAFQgGAJAAABg");
	this.shape_193.setTransform(57.1585,155.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#B98643").s().p("AgEgBIAQgOQACAHgEAEIgFAHIgQANQgBgLAIgGg");
	this.shape_194.setTransform(61.8311,145.35);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CC954D").s().p("AgGATQgbgRAVgRQACABAQgEQALgDAFAMIgLALIgGAMQgCAGgFAAIgEgBg");
	this.shape_195.setTransform(64.2406,147.2672);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C68E44").s().p("AgBABIgKgOQALAAAGAJQADAFADAOQgIgFgFgJg");
	this.shape_196.setTransform(42.4,183);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C89145").s().p("AAHgLQAOAPgfAIg");
	this.shape_197.setTransform(51.6904,173.275);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CE964B").s().p("AgHACQgGgFgBgJQAOgFAPAFQAAACgGAKQgEAHAGAJQgMgIgGgGg");
	this.shape_198.setTransform(45.6269,186.3875);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D19C52").s().p("AgWADQAFgLAMgFQAFgDAEADIAIAFIALARIgVgFQgMgDgHAOQgFgDAAgJg");
	this.shape_199.setTransform(47.7,174.7182);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CB944B").s().p("AgUACQAJgTAFgBQAGAAAVAPQgKAUgHABIgBABQgGAAgRgRg");
	this.shape_200.setTransform(47.975,176.002);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CF974D").s().p("AAEATQgHgBgGgGQgGgGgCgHQgBgGAFgGQAGgFAGAAQAGAAADALQADAKAHAAQgEAQgIAAIgCAAg");
	this.shape_201.setTransform(45.1839,179.185);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#D19C52").s().p("AgQAMQgJgJAHgHQAFABAFgEIAIgHQARgLAFAVQABAIgGAGIgNAJg");
	this.shape_202.setTransform(50.1656,172.5746);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CF984B").s().p("AgOANQgHgIAEgIIAJgNQADgFAFAGQAGAHADAAQACABAJgDQgFASgEAGQgEAFgFAAQgGAAgKgGg");
	this.shape_203.setTransform(48.6273,182.5812);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CA954C").s().p("AgEAPIgLgHIgIgIQgFgFAHgEIANgIQAIgEAIAHIARALQADADgCAEQgHANgLACIgCAAQgFAAgFgEg");
	this.shape_204.setTransform(44.599,173.1048);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C7924D").s().p("AgQALQgJgJAGgOQACABATgJQANgHAGAVQADAFgEAEQgFAGAAACIgGALIgGABQgQgKgDgCg");
	this.shape_205.setTransform(54.9649,155.7718);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C9934C").s().p("AgUAIQgEgIAPgTQAJgCAJAEQAIAEAEAJQAEAGgIAHQgJAJgBADQgYgFgDgIg");
	this.shape_206.setTransform(47.5467,169.4442);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C28E4B").s().p("AgKARQAAgDgKgIQgHgGAIgJQAMgNALAEQAHABANAMQABAZgUAAQgGAAgJgDg");
	this.shape_207.setTransform(47.0271,162.7383);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C9944C").s().p("AgMAXQgTgKAFgMQACgGAPgMQAMgKAJAKIAQARIgSAQQgKAHgKAAIgCAAg");
	this.shape_208.setTransform(51.356,159.2428);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CF9B53").s().p("AhFAbIAVgFQAOgDAGgJIAAgLIALgEQARgGABgKQABgGgGgEQgIgDgDgCIgIgGQgIAAgDgGQgDgFAGgFQAHgGAKgDQADgBAEABQAEACAEAFQAJALAIAEQAKAFAMgEQAEgBADADIAAAGQABAIAKAKQALANABAEIgLALQgFAAgEgCQgIgHgFgBQgHgCgKAFQgJAGADAKQAGALgCADIgGAGQgDACgFgBQgVgHgDAEQgEADABAWIgFAGQgdgHgMgig");
	this.shape_209.setTransform(48.25,158.205);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E7B469").s().p("AgOgTQAKAEAHALIAMATIAAAFQgfgJACgeg");
	this.shape_210.setTransform(87.294,36.775);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A47C46").s().p("AABAEQgEgEgGgBIgOABQAGgMAFgDQAEgCAIAFIAMAIIAMAIIgGAMg");
	this.shape_211.setTransform(78.8,29.5714);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#755C39").s().p("AgSAKIgNgLQgBgGAEgCIAJgBIAzAPQgGAGgLAAQgPgBgDABg");
	this.shape_212.setTransform(59.74,35.425);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#CCA76A").s().p("AAJASQgKgRgZgOIgGgMQAJgGAJAFQAEACAKAKQAVATACAEIAHAHQADAFAAAFQgFADgEAAQgIAAgHgLg");
	this.shape_213.setTransform(54.5036,33.7867);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#8E6C3D").s().p("AhLAFQAFgGANAAQAPgCAEgCQAOABArgEQAjgDAWAFQgRALgfAAQgmABgMAEQgFgBgWABIgDAAQgOAAgJgFg");
	this.shape_214.setTransform(66.9875,36.0346);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#BC9358").s().p("Ag1AJIgQgBQgJgDgBgKIAkAAIBwgEQAGAAACADIADAGIgBAGIgLAAIgFAAIg6ADIgdABQgRAAgMgBg");
	this.shape_215.setTransform(67.975,34.6944);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B48B4A").s().p("AifARQgIgGgQgDQgIgBgFgEQgGgEABgFQACgJAHACIAMAEIAOABQAIgBAEgHQAEgHgEgFIgJgJICZAMQAmAGA3gGQA/gHAsAIIAEAEQgIAFADADIAJADQAJAGgIAIIiJABQhSAAg3gFQgJgBgPADQgSADgHAAQgLgBAAALQgCAOgDACIgFAGQgDgOgLgHg");
	this.shape_216.setTransform(30.0482,77.875);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A97C40").s().p("AAGASQgCgFgLgMQgJgIgBgKQAVAQAOATg");
	this.shape_217.setTransform(14.775,96.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#B68A4D").s().p("AAgBPQgBgJgFgDQAEgLgKgIQgOgLgBgDQgFgKgLAJQgPALgGAAQgGAFACAMQACANgDAFQgPgFACgLQAGgNABgGQAIgLgIgCQgLgDgBgCQAIgFgGgHQgNgLgEgFQgHgLAOgNQABgBgLABQgHgMACgLQAFgFAGAFQACgDAPgJQAKgHgBgLQAIADARABQAOACAFAMQgCAKgHABQgLgBgEACIgLAFQgGAEgBAFQAAAFAEAEIAJAFQADADACAAQAWAEAYAUIAoAiQAQALgBAGQgBAFgSAIIgNAIQgFACgFAAIgGgBg");
	this.shape_218.setTransform(23.3398,103.735);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A78452").s().p("AiDAoQABgJAFgCIANgCQAdgCAWgVQAOgLAYAAIAnACQAFgBAIACIAPACQAkACATgbQAJgNAHgBQAHAAAKALQgOAWgKAIQgQAMgVgCQgYgCgdAGIgxAOIgPAAQgKABgGADQgYAKgXAAQgLAAgLgCg");
	this.shape_219.setTransform(18.6,67.7462);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99784A").s().p("AgeAmQgugEgegMQgTABgKgHQADgIAIgEQAHgEAHAAQAUACAugFQAqgFAWAEQAGABAOgCQANgCAHAEQAIADABgOIAAgMQABgGAFgEQANgHAKACQADACgBAEIgGAQQAGANADACQADABAJgIIAJgGQAFgCAEAHQAGANgGAHQgHAJgKAAIgqgCQgagBgPgDQAVAMAegFQAYgEATAJQANAHgKAIQgQAFgagBQghAAgJABIhMgFg");
	this.shape_220.setTransform(24.3065,71.8368);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A08251").s().p("AiJA/QAbgFAFgCQAIgEAPACQArAIAhgoQAFgHgDgHIgHgLQgNgaAQgdQAKgSAPAIQADAFAAANQgBALAEAGQAPARANABQAMABATgPQAIgKgGgPQgIgTABgFIAtAAQACAGgIARQgGAOAHAJQAFAMARAEQAVAEAFADQgLAQgPADQgQACgYgKQARASAAAFQAAAFgSANQgIADgQgBQgbgXgYAgQgPAGgIgEIgGgFQgfARgvAFQg1ADgbADQAIgOATgCg");
	this.shape_221.setTransform(31.85,62.575);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B08448").s().p("AhmgGIAAgFQASgNAZgEQAQgCAdABIAoAAQANABAbgCQAXABAOANQAAAJgIACIgOAAQggADgQgEQgOgEgGAGQgFAEAAANQgCADgFADQgQgPgTAJQgVANgLAFQgPgLgVgag");
	this.shape_222.setTransform(23.325,95.825);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B38949").s().p("Ai6BKQgLAAgHgHQACgEAFgBIAIgCQALgDgCgKQgBgDgEgBIgHAAQgYgCgLgDQgSgGgNgMQASAHAMgIQAKgHAAgPQAAgRgPgHQgJgFgVAAIgGgMQAFgJAGgBQAQACArAKQAmAIAXACQBeAHBugZQANgDAVAAQAZAAAIgBQATgCAhgGIA0gKQAWgEAJAGQAEAKgHAEIgMADIhGAXQgrAPgfgEQgIgBgUAIQgPAGgCAFQgFAHAOALQAPALgGAPQgFANgWAAIg0ABIg0ABQgQAFgYgEIgpgFIgIgBIAFAEQgFAIgKADQgNACgFADIgRABIgDAAg");
	this.shape_223.setTransform(42.3727,86.1708);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D5AE6A").s().p("ABKBCQgKgOgPgFIgegDQgLgEgPgBIgbABQgPAAgRgLIgegWQgDgCgBgGQgCgIAGgEQAHgEAZgaQATgTASgEQAGgHAJgBIAQAAQA1gBAkAIQALAIgDAKIAAAGQgkgQgtAJQgMADhDAXQAgAiAdABQAIAAAXAJQATAGAPgDQAKgDAKALQAJAKAFAPQgBARgKACIgDABQgHAAgGgKg");
	this.shape_224.setTransform(41.6911,37.3418);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#CDA767").s().p("AAxBcQgPAAgEgFQADgIAGgBQADgBAKADQgSgGgWgJIglgUQgNgGgHAAQgLgBgIAKQgHAJgNgHIgTgJQgkgQgCgOQgBgMAhgaQAHgGABgFIACgDQAJgEAIgLIAOgTQAGgKAMgHQAHgDAQgDIAOgBQAIAAAFADQAHAIgKAFQgOAHgNANIgXAXQgOAQAMAGQALAEAVAOQATAKARgGQASgGARAUQACAGgJAFQgIADADAFQAHAIAUAIQAIACASgBQAkAEARAkQgJACgdgCQgYgBgOAHQgEgJgNABg");
	this.shape_225.setTransform(38.7735,39.95);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D5A562").s().p("AgGgBIAGgDQAHgBAAAFIgCACQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgCAAQgEAAgCgGg");
	this.shape_226.setTransform(62.9,55.7708);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C59E5F").s().p("ABeAmQgEgIgIgCIgPgBQgNgCgVgLQgWgMgNgCQgKgBgPADQgQADgIgBQgEADgFAAQgFABgBgDQgFgNgKABQgLAEgGABQgHABgFgDIgCgCQAEgNgJgKQgNgJgFgGQAPgNASABQARABALALQANAMAPADQAJACAVgCIAIABQApgIAgAMQAIgBAIAIQAKAJAEABQAJASANADQAOADACAEQABAEgLALQgJAIAJAFQAMAGABACIgKAAQgWAAgKgTg");
	this.shape_227.setTransform(46.425,51.9429);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#BF883E").s().p("AAGASIgHgCQAAgIgFgEIgBgLQABgHAFgEQgBAHADAJIAGANQACAIgDAAIAAgBg");
	this.shape_228.setTransform(41.9893,193.9516);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C68A3F").s().p("AgEAAQAEgKAAgEQAOALgOANIgEAFQgDgHADgIg");
	this.shape_229.setTransform(43.6807,201.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B68542").s().p("AAAAKIgFgDIgBgGIABgLIAIALIADAFIABAEIgDABIgEgBg");
	this.shape_230.setTransform(21.2563,129.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A3835E").s().p("AgEAGIgKAAIgBgWQAPgCAGADQAKAFgCAQQAFAHgHAFg");
	this.shape_231.setTransform(19.321,128.0636);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C89752").s().p("AAAAZQgGgKACgJQAFgGgDgEIgGgIQgCgIgJgFIgOgJIAAAAIABgGIAdAAIAiAdQAHALgHAIIgMAQQAFAFgFAGIgLAGIgIgQg");
	this.shape_232.setTransform(21.144,129.825);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#AC793D").s().p("AgDABQgBgBACgJIAFAJQADAFgDAFQgFgDgBgGg");
	this.shape_233.setTransform(23.5256,144.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#AF8C56").s().p("AhgAqQAAgQARgBQAEgDAEgSQADgNANgBQAhgSAugPQAkgLAkATQACAEgEAIQgFAHAGAGQAFAGgLAEQgLADgLgEQgogSgaAiQgQAWghAEIgNABQgIABgEAFQgMgGgLAAg");
	this.shape_234.setTransform(12.7531,66.8867);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B78441").s().p("AgMgGIAAgGQASABAHAYg");
	this.shape_235.setTransform(36.025,165.775);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#E6A95A").s().p("AgCALQgCgGgEgCIARgXQAAARgBAFQgCALgIAIg");
	this.shape_236.setTransform(63.825,172.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B38240").s().p("AgEAGQgFgIAFgJQAKABgBAJQAAALACACg");
	this.shape_237.setTransform(24.0684,142.175);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#AE7F43").s().p("AgMgKIAGgHQABAFAMALQAKAHgGAMg");
	this.shape_238.setTransform(22.5243,136.275);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B27E3F").s().p("AAHAVIgHgDIgJgKIACgcIAKAUQAFAIABAHQACAGgDAAIgBAAg");
	this.shape_239.setTransform(21.2558,137.9309);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A03D3C").s().p("AgcAIQALgPAPAAQAPAAAQAPg");
	this.shape_240.setTransform(44.725,5.15);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#782F2F").s().p("AgiAJIAAgQQAbgNAYANIASAGQgBAIgHACIgOAAIgPAAQgKAAgEAGg");
	this.shape_241.setTransform(45.9,6.775);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B07C40").s().p("AgCAFIgGgIIAAgGIAQAMIgBAHIgCAAQgFAAgCgFg");
	this.shape_242.setTransform(29.75,157.7773);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B07F3F").s().p("AgEAAQAAgJAHgFIAAAWQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgFABIgCgPg");
	this.shape_243.setTransform(28.555,155.975);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B57F42").s().p("AgIgCIABgLQASAJgDASg");
	this.shape_244.setTransform(32.1145,161.25);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B68443").s().p("AgBAIQgEgGgDgCIAAgLQAUAFgDARIgEABQgEAAgCgEg");
	this.shape_245.setTransform(33.8941,158.6536);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#CF9A54").s().p("AgCAUIgIgLQgCgNAFgHIAAgMIAQAXQgEAEAEAIQAFAIgFAEIgCAAQgGAAgDgEg");
	this.shape_246.setTransform(29.703,155.6583);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C5914B").s().p("AAAAUQgBgHgGgIIgJgMQADgNANAAIADACIAHAIIAHAIQABARgNAGg");
	this.shape_247.setTransform(33.0286,160.675);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#A47C45").s().p("AgLgCQAAgHAEAAIAHADIAMAKIgGAGg");
	this.shape_248.setTransform(82.95,32.475);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#AB874F").s().p("AgLABQgCgDACgDIAGgFIARAHIABAKQgCACgEAAIgHACQgGAAgFgKg");
	this.shape_249.setTransform(81.7125,31.075);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#9A7445").s().p("AAFAMQgGgMgFgHIgWgNQgCgJAIAEQAkAFAPAjQgBAJgFADQgKgDgIgMg");
	this.shape_250.setTransform(86.455,35.526);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#BC8540").s().p("AgJACQADgNAKADIAGABIAAAFIgQAMQgDgDAAgFg");
	this.shape_251.setTransform(66.025,147.1485);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#C18841").s().p("AgBAAIAAgQIALALQgBAOgSAJQAHgJABgJg");
	this.shape_252.setTransform(68.425,149.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B17F41").s().p("AgGAGQABgBgGgOQgDgKAOgDQgFAKAHALQAKANAAAFQACAEgDACg");
	this.shape_253.setTransform(16.6468,123.975);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C48B47").s().p("AgDABQAJgQABgKQACADAFAIQAEAGgFAGIgNAPQgHAKgIADQACgHAKgSg");
	this.shape_254.setTransform(81.0016,118.95);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C18942").s().p("AgLASQAHgIAEgMIAFgXQASAPgQAPQgDADgEAHIgGALQgLgBAGgHg");
	this.shape_255.setTransform(82.9986,111.325);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#D29B51").s().p("AggBkIgEgRQgDgLACgHIAKgMQARgNgPgPQgJgNAOgPQACgHAOgMQAIgMgOgMQgEgCgCgEQgDgHAFgFQgBgIAJABQAIAAABgEIANgQQAIgKAIgEQANAPgKAQQgOAYgBAEQgFAJAFAJQAHAMgJAPQgLARABAHQgHAJgBACQgCAGAFAHQADAOgIAPIgSAYIgGAGg");
	this.shape_256.setTransform(81.4924,111.625);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#755D3B").s().p("AgfAUIAfgMQATgHAGgPIABgGQAFADABAJQgHAWgTAFQgGACgOAAIgRgBg");
	this.shape_257.setTransform(11.6,49.1167);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B27F3E").s().p("AAFAMQgHgCgEgIIgGgOIABgEIAFAAQABACAMAMQAJAIgFALg");
	this.shape_258.setTransform(30.1758,154.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B4823F").s().p("AgLgGQgDgGAEgHIAXAhQADAFgKABg");
	this.shape_259.setTransform(27.1484,150.175);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B68546").s().p("AAGAYIgXgiQADgCAEgIQAEgFAGADQABAIAIANQAIAMABAHQgDAGgHAAIgCAAg");
	this.shape_260.setTransform(28.875,147.3636);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#C3914D").s().p("AA2BRQgNgCgIgXQgBgEgNgDQgOgEgCgJQAAgHgGgEIgLgGIgRgMIgCgDIgDgGIgNgTIgRgMQAAgHgKgKQgJgKABgIQADgIAJgEQABAIAIAGIAOAJQAEAFAWAPQARAMAEAOIACAHQAAADgCACIgIADQAAAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAcgCQAGgDAJAHQAPANgGAPQAUgDAJASQALAFAAAMQgRAKgKAAIgEAAg");
	this.shape_261.setTransform(37.9893,159.6893);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C99752").s().p("AAkCMQgMgCgBgFQgBgEAKgHQASgEAAgQQAMgQgLgIQgQgHgFgFIgTgVQgLgNgPADQgBAFAGAJQAGAIgBAGQgCAFgEABQgOgEgDgDQgIgFAEgNQABgFgFgFIgHgIQAEgEACgIQAEgJgFgGIgLgLQgEgCgGADQgGADgCAAIgSgSQAAgIgFgDQgEgEgDgIQgDgJgCgDQAEgPgEgOQACgJgLgJQgLgJACgJIABgFQAFgJAGABQAJAHADAHQACADAPAIQAMAGAAAMIgFAHIgEAJQAAAIAGAIIANAMIANADQAHACACAHQABAKAHAJIAPAOIASANIAcAbIATAOQAZAdAdgRQAJABAFAHIgIAUQgDAMAJAKQAAAHgDAEIgDABQgigWgVAlQgJAEgIAAIgFAAg");
	this.shape_262.setTransform(33.9277,147.187);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#CF9B4F").s().p("AhKBcQgMgHAKgJIAPgOQAJgJAJgCQgOAAgPgDQgIgBgDgGQgDgFgBgJQgEgUAOgHIAQgGIAQgGQARAEADgNIAEgVIABgEQAEgGAPgFIgJgEQgFgCgBgEIABgEIAUgCQAMgBAJACQASAGAIgNQALgQAaAAQAAAfgLAKQgKAKgcgDQgWgCgTATQgVATABAWIgBAWQAAANAGAKQAMASAGADQAHAEAhgBIAGABIAAAFQgfgBgVAHQgKgDgZAFIgRACQgLAAgHgEg");
	this.shape_263.setTransform(79.29,83.0092);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A97A3E").s().p("AAAABQgDgHgHgCQgBAAAAgBQAAAAgBgBQAAgBAAAAQAAgBAAAAIACgBQAUABADAVIgGAGQgEgDgDgLg");
	this.shape_264.setTransform(85.17,92.55);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#BB8741").s().p("AgKAMQAJgHABgKQACgHgCgOQAIAGADAEQAFAGAAAIIgKASQgGAKgMABQgHgHAJgIg");
	this.shape_265.setTransform(83.0346,101.325);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#C28645").s().p("AgLAJQAJgLgCgXIACgDQAaAFgJAXQgGADgIAMQgHAMgHACQgHgIAJgMg");
	this.shape_266.setTransform(84.9297,103.975);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C18846").s().p("AgKAKIAKgKQAGgGAAgEQAAgFgHgEIABgGQABgDAFADQAIAGACAEQAEAGgEAIIghAcQABgKAGgHg");
	this.shape_267.setTransform(87.2441,96.5558);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#C18C4B").s().p("AgPAGQgRgLgCgNQAJgJAPAAIAZABQALAAAFAIQACAFACANIgMAQQgIAJgJADQgEgJgRgNg");
	this.shape_268.setTransform(82.325,94.15);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C6944B").s().p("AA2CNQgHgDgCgFIAOgXQAHgNgNgNQgCgNAIgQQADgGAHgDQAHgBAFADQAFAGgEAIQgEALAAACQAEACAPAAQAJAAAIgFQAHgFADgIQACgHgHgEQgIgDgDgDQgIgFgDgEIgEgOQgDgIgLAFQgOABgNgDQg6gHhlAIQgOABgHgBQgLgBgIgGIgJgHQgFgEACgGQACgLAQAAQAagBAygHQALAAAEgFIgBgDQgPgGgHgEQgMgHACgPQADgXAigKQAPgFAjgOQAggMATgFQAVgFAQAEQAGARgEAJQgEALgSACQgPgCgXAHQgZAIgKAAQgEAAgDADQgDACAAAEQAAAIAKAGIAQAKQAJAHgDALQgCALgJAGQgGAEgMADQAQADAhgBQAKAEAYgDQAXgCAMAFQAFADANAMQAKALAKAEQAHACgBAGIgCALIABARQAMAOgIAQIgOAaQgCAFgJABQgJAAgCAGQgSgGgIAAQgPABgJANQgDAEgKAAIgEAAg");
	this.shape_269.setTransform(67.6638,92.5268);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#B4803D").s().p("AgEAJQgEgQAOgHQgFAMAFARg");
	this.shape_270.setTransform(33.0079,169.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#B58341").s().p("AAFgNIgDAbQgPgQASgLg");
	this.shape_271.setTransform(35.9644,173.525);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#BE8943").s().p("AAGAPQgGgMgLgFIAAgMQAVAOACAPg");
	this.shape_272.setTransform(39.475,178.875);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#B2823F").s().p("AgEAAQgDgHAEgHQAAADAHALQAGAIgKAHIgEgPg");
	this.shape_273.setTransform(35.4314,177.075);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#BC8A43").s().p("AgLgCIAAgMIAPAMQAJAGgBALg");
	this.shape_274.setTransform(37.6857,172.45);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#BA8541").s().p("AAAAPQgIgMgCgBQgHgNANgJQABAUAQAUIgEABQgGAAgDgGg");
	this.shape_275.setTransform(34.6628,167.7548);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#D59C50").s().p("AgOADIAMgRQARAAAAARIgMAMg");
	this.shape_276.setTransform(38.575,180.025);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#C9934C").s().p("AgDAPIgMgRIABgMQAFAEAJgCQAKgCADAAIADAVQgBAIgNAAIgFAAg");
	this.shape_277.setTransform(41.6,175.944);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#D19C52").s().p("AgOgFIAGgLQAEgGAGAAQAKgBACAFQACAEgCAJIAAAPQAAAJgFAFQgMgKgLgTg");
	this.shape_278.setTransform(39.8,177.9977);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#D19C52").s().p("AgIBDQgIAAgDgFQgDgHgJgJQgJgKgDgEQAAgJgFgDQgbgRAIgXIAGgGQAEgCADABIgHgFQgLgFAAgMQACgOAJgKQAGgCAGADIAJAHIAUATIAVAMQAOAHAEANQADAJAOgCQAPgEAFACIAAAGQgIAbAZAOIAAAFIgBAEQgHAEgEABQgFAAgFgCIgJgEQgUgHgBAWIgBAGQgIAHgGABIgCAAQgGAAgGgIg");
	this.shape_279.setTransform(40.9,167.7784);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E2A24C").s().p("AgFgBQABgJAEACQAMAIgMAKQAAgJgFgCg");
	this.shape_280.setTransform(49.4564,208.149);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#DA9B4A").s().p("AgCAGIgGgHQABgJAFgDIALARQgCAKgDAAQgDAAgDgIg");
	this.shape_281.setTransform(47.375,207.5586);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#ECAE5C").s().p("AgMAgQgCgCAAgDIABgHQAAgDgDgCIgBgSQAEgEgDgLQgCgKAHgEQADABADAEIAFAGQANgBAEADQADAEgDAMQgEABgBADQAAAGgBABIgLAAQgBACgBAEQgBAEgCACQgCAMgBABIgCAAIgCgBg");
	this.shape_282.setTransform(47.1442,205.3944);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#CA9241").s().p("AgEAAQAEgIAAgDIAGAGIgGARQgHgFADgHg");
	this.shape_283.setTransform(54.8276,207.35);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E19E4E").s().p("AgFAEIAGgKIAFgEIAAAKIgGALg");
	this.shape_284.setTransform(52.4,208.075);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#EAAC59").s().p("AgBAYIgCgDIgBgNQgDgCAAgGQAAgFgCgCIAFgMQAEgGAHgBQAEALgBAPIgCAaIgGABQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAgBgBg");
	this.shape_285.setTransform(55.1688,204.125);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#886C43").s().p("AgVAvQgBgFgBgBQAAgFAIgSQAFgOgCgJIAAgMQAKgCAFgPQAFgPAIgDQAIAGAAAGQABAJgJACQgMANgGAaQgJAhgGAKQgCgCgCgEg");
	this.shape_286.setTransform(16.65,42.95);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#C19449").s().p("AgEAHQgMgHAAgOQAGAAAIAHQAHAHAGgBIAGAQQgPgEgGgEg");
	this.shape_287.setTransform(3.075,86.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#B08443").s().p("AgFAOQgGgOALgOQALACgFAJQgGAKAGACIgGAFg");
	this.shape_288.setTransform(17.1167,120.15);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#B38341").s().p("AgLgIQgDgIAJACQAEAFAKAHQAHAGgFALg");
	this.shape_289.setTransform(18.3995,122.4716);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#AE7C3E").s().p("AgKgEIgBgLQAAgGAHgBQgBAIAIANQAJANAAALg");
	this.shape_290.setTransform(14.1734,116.875);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#B28245").s().p("AgEASQgGgHgGgNIgBgMIARgLQAAALAIAPQAJARABAJQgOgBgIgIg");
	this.shape_291.setTransform(22.425,126);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#AE8143").s().p("AgEAMQgLgLgDgMIAXgSQACAFgBANQgCALAHAGIAGALQAEAHgEAFIgVgRg");
	this.shape_292.setTransform(18.425,111.05);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#B18345").s().p("AgPADQgHgMANgTQAAAOAKAQIASAbQgcgMgGgOg");
	this.shape_293.setTransform(21.1275,118.675);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#B38444").s().p("AgOABQgGgIACgHQACgHAKgCQAJgCgDAHQgCAJACAAQAHACADAHIAHAOQAHAIgQACQgJgRgNgGg");
	this.shape_294.setTransform(15.7072,113.9028);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CC9954").s().p("AgDAWIgQgTQgJgLAJgNIABgBQADgDAEABQARAIAEARQADAGAJAAQAFAGgFAHQgHAFgHAAQgGAAgFgDg");
	this.shape_295.setTransform(18.4876,123.8656);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#BA8E4F").s().p("AgYBBQgRgPgHgJQgLgPAGgTQAGgIgGgJIgGgMQgEgHgBgGIAAgTQAAgLAJgGQAKABAUANQATALAMgCQAHACAEAJQADAOARALQAVAMAEAHQAHAMgOADQgJABgIgFIgMgKIgWgOQgMgJgIAOQgGAJANAJQAHAFAQAJIAHADQADADgCAFIADAFQABADALAFQAIAEgFAIQgFAGgGgEQgHgIgDgBQgLgHgJAGQgFACgMAKg");
	this.shape_296.setTransform(25.4518,115.05);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#B18649").s().p("AAmAkQgZgLgJgYQgBAHABAIQAAAGgCACIgJAGQgHADgGgFQgFgEgCgJQgDgNgDgDQgZAUgIACQgUAHgQgXIAAgFQAFgSANgDQAKgCARAHQgIgHACgIQAOgSANgDQANgDATAKIArAdQAaAQAUAGQANADAFAGQACAIgKAIQgJAJACAHQgDAHgGAAIgpgSg");
	this.shape_297.setTransform(33.9174,122.3167);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#BD904F").s().p("ABSBuQgLgFgIABQgWgCgSgSQgcgegZAYQgHABgEgGIgGgKIgOgTQgIgLgPAFQgEABgEgDQgCgEgOgJQgLgHgBgKQAJgIgGgFQgJgEgEgDQgDgHAFgLQAHgLgCgGIgMgaQgIgQAGgNQAEgGAIAAQASAGALAAQAQgBAPgJQAQgJAEANIAFAXQABADgCAFIgCAHQAFgGADgCQAFgDAHADQAEAcgYAXQgGAHAAAKQgBADgGAJIAIgJIAIgLQAHgIADgCQAHgEAHAEQAIAFgCAIQgBAEgEAJIABAKIAAADQAHASAYARQAZASASgBQApgRAgAaQAEACACAEQACADgBAFQgNAUgcALQgFgBgMgGg");
	this.shape_298.setTransform(36.171,133.6744);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#C39D60").s().p("AhXAgQAxgoA0gCQAWgBAMgGQARgHAIgSQACgHANAAQgMAhggAMQgMAEgwAHQgqAFgSAmg");
	this.shape_299.setTransform(23.6,33.825);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#AC8B55").s().p("AjNBDIAGgSIAAgGQAAgQALgLQAIgJASgHQAVgIAngDQAngEARgfQACgDAJgGQAkgOAyAAQAPAABJAEQAVABASAOQATANAJAWIgDADQgHACgCgDQgcggg3ACQgEgBgEgCQhHgFgpALIgRAJQgKAGgCAJQgIAPgEAFQgIAKgNABQg2gIguAfQgLAIgHAQQgEAIgFAAQgDAAgEgDg");
	this.shape_300.setTransform(35.975,34.4731);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#C28940").s().p("AgFgEQADgCAJgBIgKAQQgGgJAEgEg");
	this.shape_301.setTransform(55.7158,175.95);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#C68C44").s().p("AgKABQACgBAIgGQAGgEAGABIgLAPIgMAFg");
	this.shape_302.setTransform(57.6,179.0909);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#C18640").s().p("AgGAPQgGgJAGgHIAMgNQAAgBAAAAQABAAAAAAQAAABAAAAQABAAAAABIACAGIgGANQgEAIgGACg");
	this.shape_303.setTransform(63.681,171.125);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#DEA254").s().p("AgIALQgKgHAIgJQAEgHAHADIAOADIgBAGQgDAAgHAHQgEAEgEAAIgEAAg");
	this.shape_304.setTransform(57.3893,178.0919);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#CA9347").s().p("AgUgJQAOAJAKgDQAGgCALgIIAAALIgXAQg");
	this.shape_305.setTransform(50.875,180.05);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#C38C42").s().p("AgDABQAHgKgMgJIAWALIgMARIgPAJQAAgEAKgOg");
	this.shape_306.setTransform(55.6739,169.375);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DEA254").s().p("AgNAKQgFgEAGgIQAOgVAPAQIgRAWQgKgCgDgDg");
	this.shape_307.setTransform(60.0864,174.1337);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D39A4F").s().p("AgQAHQgIgHAKgJQAJgJAHgBQAIgBALAGIgBAGIgJAGQgEADACAHQgFAMgMAAQABgDgJgKg");
	this.shape_308.setTransform(54.4346,175.9923);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#917143").s().p("AgUAQIgUgEIgRgHIAGgEQAcAIAcgHQAWgEAfgPQACAMgIAGQgFAFgNAFQgFACgMABQgLAAgGADIgGABIgOgCg");
	this.shape_309.setTransform(8.3368,49.4031);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#B19058").s().p("AgUBVQAQgKABgHQAAgIgUgEQgDgBgUgKQgNgIgMAEIgCgLQgBgGADgFQAHgEANACQAOACAGgBIAigDQATgEAIgRQAMgbAFgZQAFgXAOgHQALAIgDANQgFASACAGQgFAJgFAgQgEAagNAMQgHAIgMASQgMATgIAHIgMABQgIAAgFgEg");
	this.shape_310.setTransform(11.3947,48.75);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#B9935A").s().p("AghBYQgCgBABgEIAAgPQAAgJgGgFQAFgWABgeIAAgzQABgUgHgLQAEgIAIAAQADAAAKAEQALADATAMQARAHAAAHQAAAIgPAKIgCACQAKgHALAHQAEAHgDAFQgBAEgGAGQAAABgGADQgEACAHAEIAHADQAFAEACAEQACAGgGAAQgPABgMAOQgLARgHAHQgIAEgEAOQgFAOgGAEg");
	this.shape_311.setTransform(8.3368,61.0485);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#DCA557").s().p("AgkAWQgMgCgEgFQgGgMAJgIIBogSIAAARQgaASgRAGQgOAGgQAAQgJAAgJgCg");
	this.shape_312.setTransform(82.6759,74.1043);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#DCA557").s().p("Ag7BbQgGgBgEgDQgFgDACgFQADgMgFgTQgFgWABgKQADgbAPgRQARgTAaAAQAWABANgLQAMgJAHgVIAEgDQASgFAVAIIgKARQgGAIgJAEQgYAKAEAiIAAAiQgggCgFAFQgFAEgEAdQgHAIgBADQAAAFAMABQADAAAFgBQAEAAAAAHQgHABgDAFQgLAIgPAAIgcgCg");
	this.shape_313.setTransform(84.1417,82.5824);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#C48741").s().p("AAAALIgFgWIAFAAQAFAEABAHIAAAMg");
	this.shape_314.setTransform(73.5125,146.275);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BF8742").s().p("AgDgCIARgPQgBALgJAJIgRAPQAAgMAKgIg");
	this.shape_315.setTransform(71.45,136.325);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C08540").s().p("AAMgRIgWAiQgCgcAYgGg");
	this.shape_316.setTransform(75.8457,131.6);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#BB8340").s().p("AgOAVQABgLAMgLQANgMACgHQAFAOgMAJQgPANgBAFg");
	this.shape_317.setTransform(69.1985,143.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#BF8643").s().p("AgGAMQAAgOgBgPQAOADABAUIgFAGQgBgBgFAGIgCABQgBAAAAgGg");
	this.shape_318.setTransform(79.65,125.1723);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#BF8640").s().p("AgLAUQgBgCAEgFIAJgPQAFgKABgKQAIAKgEAJQgDAFgHAKIgFALQgGAAgBgDg");
	this.shape_319.setTransform(76.9248,133.375);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#BA853F").s().p("AgOAWIAOgTQAIgLgEgNQAIADACAHQABACAAAJQgDAAgJAOQgEAIgJAAIgEAAg");
	this.shape_320.setTransform(71.475,145.249);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#C38745").s().p("AgBACQAJgOgFgNQASAJgMATIgGALIgQAMQAAgGAMgSg");
	this.shape_321.setTransform(74.9611,140.65);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#C18740").s().p("AAAABQAJgMgEgLQAKAOgIAMQgMANgEAGQAAgGAJgQg");
	this.shape_322.setTransform(73.3453,138.35);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#C18641").s().p("AgOATIAMgTQAFgMgCgMIAJACQAEADABADIABAMQgHAEgGAJIgKAQQgJgCACgEg");
	this.shape_323.setTransform(77.249,123.85);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#D0974D").s().p("AgWA+QAIgDABgKIABgQQgCgEACgDIAEgFIgJAIQgGAGgHgCQgWgQAXgQQAFgCACgDQACgEgEgFIAKgUQACgDAJgHQASgPAAgGQgBgGgUgPIgJgIQgGgJADgGQAIgDAMgBIAUgCQAGAOARAMIAEAQQABAJgBAGQgCAIgJARQgJAPgBAKQgKAHAHAKQAKANgBAEQgUANgDAWIgRAMQgEAGgLAMQgLAKgDAIQgDAFgJAAQgJglAigQg");
	this.shape_324.setTransform(73.6015,127.125);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#D09A51").s().p("Ag8COIgUACQgEgDgBgDQgBgEADgGQACgHgBgEQgEgGgKgFQgLgGgEgDIgEgHIABgIQADgFAFgEIASgMQAKgHAEgIQABgKAJgDIAQgEQARgMAEgMQgBgXAWAIQAQgCAQgXIACgHQACgHAEgDQADgCALAAIAPgHQAGgFgBgKQgEgBgKAGQgLAHgMgNQgFgFAAgFQAAgFAGgIQAGgHAAgFQABgMALgCQAQgEACgCIANgIQAIgGAGgCQAEAAAEADQAHAIgJAJQgMALAGAOQAAAAAAAAQABABgBAAQAAABAAAAQAAABAAABQgBAAAAABQABAAAAAAQAAAAABAAQABAAABAAQALgEAFAFQAHAXgOAIQgOAHgHAPQgEAJgGATQAAAGAKAIQAJAGgBAIQgBALgMALQgOANgDAGIgGAGQgEADgDgBQgFgDgMAAQgMAAgFgFIgGAAQgHgDgEAFIgFAKIgSARIgGgEQgSgLgMAEQgMAFgBAJQAAAJAOADQAGABALgKQAKgIAIACQAFAEAMAEQALAEAFAFQAGAGgCADQgBACgHACQgNAHgKAQQgNgHgFAOQADAGgJABQgHgIgMABg");
	this.shape_325.setTransform(61.2417,140.375);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#D4A663").s().p("AAcAWIgJgDIgTgPQgMgHgNALQgDAFgJAAQgCgXAQgIQARgIAUAOIASAOIAGALIAAAHQgDACgEAAIgDAAg");
	this.shape_326.setTransform(79.0831,28.6939);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#E4B36B").s().p("AAHAaQgpACgLAAIgKgBQgGAAgDgEQgGgNgSABIAAgLIAhADQASAAAOgDIA4AAQAVAAgBgRQAJgKAFgBQAKAAADAAQAHACACAIQgMABgFAIQgEAHADAKQACAIgDAGQgDAEgIADQgUgEggABg");
	this.shape_327.setTransform(70.05,31.8);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#EBBC72").s().p("ABtAvQgOgBgTgLQgVACgKgOQgWgegmgKQgNgEg8gHIgagBQgPgCgLgDIAXgMICJAYQANACAEAIQAMASAWAEQAKACAfAAQACADAOAGQALAFACAJQgNAMgQAAIgDAAg");
	this.shape_328.setTransform(53.55,28.2328);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#CCA666").s().p("AjzA2QADgSAPgLQAIgHAVgLQATgFAqgCQAjgFAQgcQAygXA9ACQAoACBKAPQANADAIALQAJAOARAJQAJAFAXAIQAXgMABAYQgGAGgKABIgSAAQgSAAgVgQQglgxhBABIhEAAQgmACgcAKQgUAUgeALQgXAIgiAEQgYACgVATIgLAIQgFADgFAAIgFgBg");
	this.shape_329.setTransform(39.2,31.6608);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#F4B561").s().p("AgEgCQADgGAHAAIgBALIgKAGg");
	this.shape_330.setTransform(62.35,182.975);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#C38640").s().p("AgDgCQABgCAJgEIgBAGIgLALQgDgIAFgDg");
	this.shape_331.setTransform(61.765,178.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#DC9D4C").s().p("AAEAKQgLgFgBgOIARALQgCAIgCAAIgBAAg");
	this.shape_332.setTransform(49.125,201.88);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#C4843E").s().p("AgCAAIAFgLQAEARgJAGQgDgFADgHg");
	this.shape_333.setTransform(59.5079,190);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#DA9C4C").s().p("AgIAJQADgKABgCQAEgGAJACIgGAKQgDAGgHAAIgBAAg");
	this.shape_334.setTransform(51.5,199.3769);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#D49749").s().p("AgGgBQgEgIAMABIAGAQIgLABQADgCgGgIg");
	this.shape_335.setTransform(47.4688,199.4191);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#CC8E43").s().p("AAEgKQAHgEgBAEIgCAHQgJANgIADQAAgPANgIg");
	this.shape_336.setTransform(56.3313,186);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#C58A42").s().p("AgLADQAFgBAGgIQAEgIAIABIgQAcQgHgDAAgJg");
	this.shape_337.setTransform(59.4,181.8444);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#C5873F").s().p("AgFAAQADgEAHgIIACAYIgFABQgMgGAFgHg");
	this.shape_338.setTransform(59.7806,193.725);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CF9144").s().p("AgLAPQgBgCACgDQAIgTAMgGQAFAGgFAGQgJADgCAIIgFAHIgDABIgCgBg");
	this.shape_339.setTransform(60.799,184.225);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#C2883F").s().p("AACASQgKgEABgJIAFgPQABAAACgFQADgEACAFQACAGAAAJIAAARg");
	this.shape_340.setTransform(61.6,186.7658);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#CC9045").s().p("AgJAQQgCgGAGgKQAFgKAAgFQAJACAAALQAAANACACQgFgEgGADQgGAEgCAAIgBAAg");
	this.shape_341.setTransform(57.1983,194.2775);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D89C4E").s().p("AgFAMIgGgKQgEgGAFgGQAJgGAGADQAIACABALQABAHgEAFQgDADgFAAQgDAAgFgDg");
	this.shape_342.setTransform(48.8422,195.5198);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#DDA153").s().p("AgNALQADgGADgPQAFgKARAOQgGAMgDAFQgEAEgEAAQgFAAgGgEg");
	this.shape_343.setTransform(53.25,188.6024);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#DDA153").s().p("AgPgBIAXgRIABAIQAIAIgBAIQgBAIgJAEIgGABQgMAAgDgUg");
	this.shape_344.setTransform(51.0309,191.6731);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E7AA59").s().p("AgeAiQgCgFADgFIAGgIIAFgFIAMgRQAAgPAQgIQAJgBADgGIAEAAQAJAHgHALIABAMIgMAQIgHAJQgEAFgBAFIgFAFQgFgFgKAGQgEACgEAAQgEAAgDgDg");
	this.shape_345.setTransform(60.7087,176.3385);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#E7AA59").s().p("Ag3AmQANgFAQgMIAAgGQAHgLARgRIAFgGIAKgQQAFgKAIgDIAAgHQAHgCAGAHQAGAIAFgBQACACABAEQABAFACABQgGAHADALQADANgCAEIgPgLQgHAAgEAGQgEAGgDADIgHAHQgIgBgHAGIgNANIgIANQgGAHgJgDIgMAGg");
	this.shape_346.setTransform(53.275,186.4671);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F3B45E").s().p("AgbBUQAEgHgBgCQAAgEgJABIgGAAQgHABgCgGIgEgKQABgFAGgDQAHgEAAgGQAAgGgGgDIgJgGIgGgKQgBgHAEgFIAGgFQAFgFAGAEIAAAGIAHAJQAEAFAHgDQAEgCABgGIABgJIAIgJQAFgGAEgCQAVglAIgUQAEgKAEABQACABAHAGIADARQABAKAIADQgJAHACAPQAEASgDAGQgCADgIABQgIAAAAAHIgFALQgEAGgBAEQgFAKAHAGQACAGAAAEQAAADgEAJQgDAHACAFQgGAHgEgFIgHgIQgDgCgDAGQgCAGgEgEQgBAAgJAIQgCACgDAAQgEAAgEgEg");
	this.shape_347.setTransform(52.2295,200.7368);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E1A659").s().p("AghBnIADgMQACgHgFgFIgBgKQgBgFgFgDIgLgdQAFgGgFgLQgCgGgBgEIAAAEQABAIgDADQgDAGgEgGQgFgHABgRQABgSgGgJQgCgCAIADQAKAFgEgMIgIgWQgCgEgEAAIgGADQABgDgKgVQgGgOAPgKIACgJQADgEAHACIAMAMQAHADAGAKIAKAQIAGAGQAOATAOgTIAAgMQAVAAAOgYQAEgDAFgJQAGgGAJABQAEAFAKABQAMACADADQACACAAADIgBADQgMAMgJAQIgIAJIgNAMQgHAGgBAJQgBAEgDADQgBACgOgBQgLgBADAOQADANgDAGQgHALABAMIAAADIAGAQIAAAEIACAKQACAHgKABQgGADADAGQADAHgCACQgCAGgFACQgFgCgBAEIABAGIAAAQQAAAKgJAEIgFABgAgwgKIAAACQgBAFgCACIgBAAQAJgEgEgFIgBgBIAAABg");
	this.shape_348.setTransform(46.954,192.3929);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#BA8C4F").s().p("AhlAaQgDgDgCgFQgBgVAZgEIAfgFQAWAAArAEQAmACAbgLIAMgEQAHgEADgEIAGAAIAAAGQgIAJgRAFIgcAJQgTAMgfAFIg0AIIgbAEIgIABQgKAAgIgEg");
	this.shape_349.setTransform(82.7745,71.7517);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#C09457").s().p("AgTAXQhKgPgjgOQgHgNAJgJQASAOAbgKQALgEAPgBQAJAEAVAFQARAGAGAOQAGgGAPABQAQAAAFgCQAMgFAZADQAZAEAMgHQACgBAGAFIAKAIQgJAQgTAHQgNAEgUAAQgeADgQAAIgDAAQgXAAgSgHg");
	this.shape_350.setTransform(79.7137,68.7766);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#C0985B").s().p("ABsBJQgfgSgiABQgLAAgKgOQgKgPgIgCIgfghQgUgTgUgGQgYgOgUAHIgIABQgfAEgPgEQgKgDgEgHQgBgEABgFQAEgIAKgCIARgEQAbgNAiAKQATAFAmAPQANAEAVASQAUARAQABIA7AXQAGADAOAYQAMARAQgBQAMgCAIAFQAFADAJAJQgWAPgVAAQgPAAgPgIg");
	this.shape_351.setTransform(56.03,59.1965);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#DDB46F").s().p("AgDAAQACgEADgCIACABIABADQABAIgKABIABgHg");
	this.shape_352.setTransform(18.2761,24.05);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#DDB46F").s().p("ACHAZQgRgXgdgHQgRgGglgDQg2gEgTAAQgpABgfAPQgFACgGgFIgeAPQgTAIgPgMQAKgHABgOQACgPAOACQAXAEAigEIA5gGQAIAAADgGQAigFArAHQASADA6AOQAHABAHAGIALAMQAHAHALAJIAVANQAEAHgDAHQgIACgHAAQgUAAgPgSg");
	this.shape_353.setTransform(42.835,28.8409);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#C58D42").s().p("AgDgDQACgFAHAEQgBAKgKAAQAAgGACgDg");
	this.shape_354.setTransform(58.85,160.3029);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#C28840").s().p("AgEAHQgEgDAEgEQAFgFAAgCIAGAFQgGAKgDAAIgCgBg");
	this.shape_355.setTransform(65.775,158.261);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#C28842").s().p("AgJAKIASgYQABALgEAHQgCADgHAIQgEgBgCgEg");
	this.shape_356.setTransform(66.8591,156.475);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#B9833F").s().p("AAKgKIgRAVQgIgUAZgBg");
	this.shape_357.setTransform(64.3468,155.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#C08740").s().p("AgOAIQAGgCAIgKQAHgKAHgBQgHATgMAKIgEACQgEAAgBgIg");
	this.shape_358.setTransform(62.65,161.914);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#C38940").s().p("AgLAIIABgIIAXgQQgBAJgIAIIgMAQQgEgEABgFg");
	this.shape_359.setTransform(61.69,168.575);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#BF8841").s().p("AgMASQAEgSAVgRQgCALgHAJIgLAPg");
	this.shape_360.setTransform(64.825,164.375);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#BE8441").s().p("AgFAAIALgUQAGADAAAKIgWAcQgCgLAHgKg");
	this.shape_361.setTransform(69.9778,152.975);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C28645").s().p("AgBABQAFgOgCgLQALAQgGALIgPAWQgBgJAIgPg");
	this.shape_362.setTransform(68.2386,159.125);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#C08842").s().p("AgLANQAOgOAAgRQAIAEAAAIIAAAMQgCAAgHAKQgCADgCAAQgEAAgFgGg");
	this.shape_363.setTransform(66.4625,166.1184);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D19A50").s().p("AgIARQgPgGAHgLQAIgOAAgDQACACANAAQAKAAADAKQgEACgIALQgHAKgHAAIgCgBg");
	this.shape_364.setTransform(62.1494,160.9594);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#D19A50").s().p("AgVAHQgEgIAGgIQAPgUAcALQgBAJgFADIgNAIQgFAFAAAJQgCAGgJAAIgKgPg");
	this.shape_365.setTransform(63.533,154.6016);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#D89F52").s().p("AgLAWQgGgBgCgFQgBgOAKgOQALgQAMAKQAJAHgCAHQgCAEgJAFIgLARIgJAAg");
	this.shape_366.setTransform(58.5228,165.1577);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#CC964D").s().p("AgQAMIgJgHQgFgFAIgGIAOgMQAIgFAJAFQAHADAMALIgBAFIgJAFQgFADgCADQgGAKgGAAQgHAAgIgKg");
	this.shape_367.setTransform(51.3538,166.1625);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#D19A50").s().p("AgtAPQABgGAYgQQAJgHAAgNQgEgHAIgGQAEgBADACIAYgCQANAAAKAJIgGARIgSAGQgDABgDAEIgGAGQgKACgIATQgKASgMABQgRgUABgHg");
	this.shape_368.setTransform(57.1473,160.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#D9A055").s().p("AgoA8QgRgDgGAAQgGgFADgJQAEgLgBgDQACgHAGgEQAEgCAIgBQAKgFAKgLQAAgJgKgEQgMgEgCgDQgDgCAAgFQACgJAPgMIAJgIQAGgDAGAAQAEABADADQAAAEgCAKQAAAIAHAEQAFACADgCIAGgGIAIgIQAFgEAGADQAJAAADAGIADAJQACAFAHgDIALAXQABAIgIAMQgJAOgBAHIgMgPQgIgJgJABIgDABQgZAFgEAFQgEAFABAZIgFAGIgKABIgMgBg");
	this.shape_369.setTransform(63.7291,151.4625);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#DCA456").s().p("AgzCJQgFgCgEgFIgIgOQgFgIgHgEQgLgJgCgDQgBgCABgFIAEgGIADgLQABgHADgDQARgJgCgUQAAgDADgEQAHgCAHAEIALAIIALALQAJAIAEABQAIABAFgKIgCgKQgCgHACgEQAEgDAEABIAJABQAIgCADgCQAEgEgDgIQgGgFgMAEQgLAGgGgEQgCgDgBgEQAHgOgCgJQgCgKgRgEIgFgGQgIgOgBgIQAAgGAIgCQAcACAEgYQABgFAGgDQAJgDALgHIASgNIAIgGQAEgDAFgBQADAAAEADQACAGgBAGQgBAGgFACQgSAIgDANQgCALAIARIAAAGQgGACgGgDIgKgEQgNgEgIALQgEAFAHAFQAIAHAKgHQAIgFACgBQAGgCAFACIAYAGQALgCAHAIIgMAMQgLgCgCAGIABANIARgEQAKgBACAKQAEAUgbAPQgmABAJAjIgGAGQgBAGgKAHQgJAHgCAGQAAADgCAEQgBABgTABQgMABADARQAAAHgDAFQgGADgJAAIgQgBg");
	this.shape_370.setTransform(49.3704,171.625);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#A47F4E").s().p("AAAAJQgHgTgJgJIAAgBQgDgCABgEQADgJAGgDIAVAkIAHAdQgEABgBAEIgCAHQgFgIgHgWg");
	this.shape_371.setTransform(90.4125,40.875);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#EFBB6E").s().p("AAHBXQgQgEgcgkQgcgkgBgQQAFgEABgHIgBgNQAAgBgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgBIABgCQAGgJACgTQABgWAUAAQAJAAALALQAIAHAGAFIARANIAMAGQAHADADAGQAEAQAWAVIABAEQgBAFgKALQgFAJAOAIIAAAGQAAAHgZATQgXAQgJAAIgBAAg");
	this.shape_372.setTransform(82.025,38.2848);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#F5C87C").s().p("AAYAzQgSgKgIgCQgYgGgKgKQgNgMADgWQAAgBgEgDIgGgFQgPgNAJgOQALALAPAAQAKAAARgIQAOgHAEAAQALgBAFAOQgSAEAAASQABAXgDAEQATgDAQALQAJAGARASIgIgCQgFgCAAABQgJAMgMAAIgIgBg");
	this.shape_373.setTransform(46.3097,16.8919);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#DEB36C").s().p("AgEAEQgBgKgDgFIARAAQgEAFABAGIADAMIgBAAQgJAAgDgIg");
	this.shape_374.setTransform(59.725,40.5764);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#D6AB67").s().p("AAEAiQgGgKgUgIQgUgIgGgIQAAgIgHgIQgJgJgCgEQgDgEADgDQAMgBAJAIQAGAEAJALQAHAJAEACQAHAEAJgBIAQAAQAGADATAAQAQAAAIAIIAFAFQAEADgGAEQgZAPgTgEQgEAEgFAAQgEAAgEgEg");
	this.shape_375.setTransform(58.4895,35.9984);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#E2B36B").s().p("AASA4QgUACgKgEQgOgFgHgTQgCgFgQgGQgSgHgFgEQgPgOAOgLQAEgDAIgCIAMgDIAOgFQAHgEAAgJQAQgIAfgBQAigBAOgHQAJgBAFAFQAEALgBADQAAAHgKADIgPADQgCACgMgEQgJgDgBAJQgBAKALABQAPAAAEADQgLAMABAWIACAmQgLgHgZACg");
	this.shape_376.setTransform(68.1093,40.9667);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#DEB36C").s().p("AA6A8QgPgRgcgHQgfgGgPgEIgegJQgQgGgLgIQgOgLAAgHQAAgHAQgLQAOgKAHAAQAjgDAjgMQANgEAPAHQAJADARAKIAPANQAHAJgGALQgBANAKAJQATATAAAGQgBAGgVAQg");
	this.shape_377.setTransform(46.0006,36.8523);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#AB7E3F").s().p("AgHADQgJgMAQgPQgFAMAGANQAKASAAAGQgMgOgGgIg");
	this.shape_378.setTransform(8.9674,101.2375);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#B07D40").s().p("AAAARQgJgNgDgCQgLgXAXgEQgHANAHAOIAQAYQgKAAgGgJg");
	this.shape_379.setTransform(6.6694,93.775);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#B08143").s().p("AgUgJQAEgCAEgKQAGgHAIAIQgFAMALALQANAPgBAIg");
	this.shape_380.setTransform(13.3509,106.7367);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#AC7E40").s().p("AgBARIgVgRIAAAAQABgJAHgHQAEgFAKgHQgMASANAPIAWAYQgMgBgMgLg");
	this.shape_381.setTransform(11.25,98.675);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#AA7D42").s().p("AANAdIgGAAQgDgGgNgNQgLgKgBgLIARgMQADgFAFAAQAGgBgCAGQgEAMAFAKQACAGAJAMQADAFgBADQgBAEgGAAIgCAAg");
	this.shape_382.setTransform(16.4625,103.4262);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#BC8F4F").s().p("AADAaIgLgGIgKgNIgLgNQgMgPAPgFQAJAAAHAHIAKANQAEAEACAAQACAAABgHQADgCAEAAQAeAAgRAXIgLALQgEAEgGAAIgFgBg");
	this.shape_383.setTransform(16.2559,107.2625);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#BF9250").s().p("AAOAVQgRgQgVgDQgPgCgDgVQgBgIAGgDIANgCQAPgCgEgFQgIgHgBgDIAMAAQAKgEASAGQAUAJgGAPQgDALgMADQgEABgWAAQAXAIAJAEQAOAJAFAOQADALgEAGIAAAMIgbghg");
	this.shape_384.setTransform(11.8371,78.67);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#BD8F4E").s().p("AAUA3IgGgGIgJgHIgJgIQgegSAZgZQAGgKgHgCQgMgDAAgBIgMgKQgIgFAFgIQAFgIAIABQAIABAIAHIAKAJQgIABAAAEQABAFAFADIAIAFIAFAFQADAGAJAKQAJALADAHQAEAQgBAIQgEAIgEACQgDADgEAAIgFgBg");
	this.shape_385.setTransform(12.2256,96.7069);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#A0804F").s().p("AhbAeIgGAAQgUAAgJgHIgGgLIAEgDQAQAAAhgIQAhgIARAAQAWACApgIQAqgIAVABQADABANgJQALgHAIAIQACAegFAGQgFAGgcAAIhHADIhFAEQgIAAgZAKIgEAAQgHAAgDgCg");
	this.shape_386.setTransform(18.6786,70.478);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#B78C4B").s().p("AhBA0QgEgIADgEQADgDAJAEQAoAGgEgqIgBgzQgEgGADgHQASgEANAEQAPAGAEANQAIAeghAMIArAIIANACQAHADABAHQABAPgTAFIgOAEQggAAg2AQQgMgCgEgIg");
	this.shape_387.setTransform(17.9382,88.75);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#CC9C55").s().p("AgQBNIgGgIQgCgEACgFQARgcAAgTQABgYgXgXQgPgPADgIQACgHAVgLIAMAAQAQgFAMAMQgMALgJAFQgMAHgPABIA9A5QAHAHgIAUQgJAUgLAHIgOAEQgIABgEAFg");
	this.shape_388.setTransform(6.4707,80.4015);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#CCA060").s().p("AgDAFQgFgBAEgJQALAAAAALIgKgBg");
	this.shape_389.setTransform(79.8809,62.875);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#CCA060").s().p("AAAgGQAIgCALAIIglAIQAMgMAGgCg");
	this.shape_390.setTransform(80.4,60.2978);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#CCA060").s().p("AAAAHQgLgHgFgBQAHgIAJACQAFABANAFQgGAJgHAAIgFgBg");
	this.shape_391.setTransform(82.9,63.6688);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#D4AB67").s().p("ABHAwQgRgCgNABQgJACgJgGIgPgLQgLgUgVgJQgPgFgcgDQgLgBgIgGQgKgGgCgKQgCgHAHgGIAMgIQAfgKAWAWQAIAIAIAAQAHgBAHgIQANgEAJAIQAEAEALATQAJANALAEQAJAXAgASIAAAGIgdgFg");
	this.shape_392.setTransform(51.7778,46.4304);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#CCA060").s().p("ABKAnQgDgEgPgBIg/ABQgOADgSgHIgdgNQgNgIgDgEQgGgHAFgLQADgGgEgFIgJgHQgIgHgDgEQgFgHAIgJQAOgFAPAEQAGACAUAKQADACgFAGQgEAGAGACQAFABA2AgQAkAVAggGQAOgDAJAIQAIAIgBAQQgJgCgJAEQgHADgMAJQAGgQgEgGg");
	this.shape_393.setTransform(66.6955,56.4988);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#D9AB66").s().p("ABfA8QgIgBgNgOQgEgDgEABQgTAGgZgJQgagNgPgDIgagIQgQgEgMAAQglgCgEgmIAUgJQgCgHgMABQgLAAAAgJIACgFIACgCIARACQAKADAEAGQAQAYAdAHQAHACAuAFQgBAHgJADQgIADgDAGIA7AJIAiAFQAVADANAKIAAALQgPANgJAAIgBAAg");
	this.shape_394.setTransform(69.15,49.9218);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#F2C478").s().p("ABiBOQgRgCgNgMQgOgOgUgIQgLgEgbgFIgfgHQgSgDgOAAQgUgBgIgMIgYgLQgYgSAVgZQAJgKACgFQAGgJgCgJQAJgBAEAGIAFANQAGAVAbAOQAaAOAVgIQAOgGAKAMQAKAYAUgCQAQgCAOAIQAJAFAOANQAAANAQgCQAMgBAFAHQADAGgBAMQgPAJgQAAIgEAAg");
	this.shape_395.setTransform(51.4403,22.5194);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B17F41").s().p("AABAMQgIgKABgNIAMALIABAMg");
	this.shape_396.setTransform(15.37,125.15);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#ECC279").s().p("AAAAEIgLgIQAMgBALAFQgFAFgFAAIgCgBg");
	this.shape_397.setTransform(59.45,12.274);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#D09244").s().p("AgIACQAHgCABgJQADgEAEAEQAFAJgHAIIgKAEg");
	this.shape_398.setTransform(44.8587,206.0933);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#A28244").s().p("AgGAIQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAIAGgSQAFADABAGIgBAJIgKAHQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBg");
	this.shape_399.setTransform(94,68.125);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#AB7840").s().p("AACAMIgFgIQgCgEAAgFIACgFQALgBgCALIAAAMg");
	this.shape_400.setTransform(20.6458,139.846);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#EAAC59").s().p("AABgOIAAAMQAAAGAEAEIgDAHQgNgOAMgPg");
	this.shape_401.setTransform(57.5311,202.925);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#A2743F").s().p("AgFgFIACgGQAAgBAAAAQABAAAAAAQABAAAAABQABABAAABQADADABAHIACAMQgLgJAAgJg");
	this.shape_402.setTransform(7.7,103.5188);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#BF8C4B").s().p("AgFABQAAgJAFgHQABgFADAEIACABQgCADgCAOQgCAMgFAFIAAgSg");
	this.shape_403.setTransform(60.0625,196.6861);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#BA8247").s().p("AAAABIgIgQQADgFADAFQASANgNAVQAAgJgDgJg");
	this.shape_404.setTransform(16.3511,127.9375);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#79603E").s().p("AgHgCIgCgIQABgEAIAAQAAALAKABIgEAJQgCAGgEACg");
	this.shape_405.setTransform(92.425,45.0472);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#B48348").s().p("AgEACQgDgHADgIIAHgBQgBADADALQADAJgFAGIgHgNg");
	this.shape_406.setTransform(26.2696,155.325);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#C08643").s().p("AAGgRIAAASQgBAKgFAHQgMgRASgSg");
	this.shape_407.setTransform(69.4464,165.025);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#C08A47").s().p("AgFABQAAgOAFgJQADgEADAEIAAAGQgCAFgCAQQgCANgFAHIAAgYg");
	this.shape_408.setTransform(61.775,190.8875);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#C0843E").s().p("AgFAAQAFgNAAgGIAHAAQAAATgIAUQgHgIADgMg");
	this.shape_409.setTransform(73.5684,151.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#BA7F3E").s().p("AgFgOIAGgGQAHAYgCARQgJgKgCgZg");
	this.shape_410.setTransform(37.6461,187.75);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#B07D40").s().p("AgIgMQAFgGAGAAIAGAlQgPgOgCgRg");
	this.shape_411.setTransform(5.075,95.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#CD9650").s().p("AgGABIgGgSIAKAAQADACAGgDQAHADgCAIIgCADQgKACACAIQAEALgCACQgGgHgEgLg");
	this.shape_412.setTransform(40.8132,196.15);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#B77C40").s().p("AgEAQIgBgHQABgDgBgMQAAgKAFgFQAAAEAFARQAEAOgJAIQgDgCgBgEg");
	this.shape_413.setTransform(28.2571,159.575);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#C28640").s().p("AgDAMQgFgBgBgEQgBgLANgIIAHAHIgBAJQAAAGgFADIgHgBg");
	this.shape_414.setTransform(67.318,169.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#96504F").s().p("AgEgQQABABgBAIQAAAHAFAAQAFgDADADQAFALgHAGIgKAAQgOgRANgQg");
	this.shape_415.setTransform(41.6811,5.975);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#BD8C49").s().p("AgEgRIAMAGQAAAQgLANQgHgVAGgOg");
	this.shape_416.setTransform(79.8935,130.525);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#C78D49").s().p("AAAASIgLgdQABAAAAAAQAAAAABAAQAAAAABAAQAAgBAAAAQADgIAGACQALAJAAASQgCAGgCACQAAABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAIgDgBg");
	this.shape_417.setTransform(44,204.4602);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#C28A43").s().p("AgNANQADgPAMgJQADgEADAFIAGAGIAAAGQgBADgDACQgEADgDgDQgEgFgDAHQgDAFgDAAIgDgBg");
	this.shape_418.setTransform(73.275,148.5658);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#C78F4A").s().p("AgGABQgEgJAIgGQALgGAAANQgCAOgJAJQABgCgFgNg");
	this.shape_419.setTransform(86.1953,108.9553);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#AE7A3F").s().p("AgKgNQACgLAFgCQgBAIADAJIAHAOIAFALQACAGgHAFg");
	this.shape_420.setTransform(13.4972,119);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#C68C4B").s().p("AgDARIgFgGIAFgWQgCgJAHADIAHAGQAAATgFAJIgEACIgDgCg");
	this.shape_421.setTransform(80.3,127.5591);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E1A659").s().p("AAAAQIgGgUQgCgMACgKIALAHQAFAJgDANIgEAYQgEgDABgIg");
	this.shape_422.setTransform(38.3821,188.275);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#DEA55E").s().p("AgKAFQAFgEgBgJQAAgLAFgEQAHgBACAFIADAKQAAAMgHAQQgCAEgEABg");
	this.shape_423.setTransform(43.0766,200.8827);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#B97F3E").s().p("AgLgSQADgEADABIAGADIAAAAIAKAcIgJAMg");
	this.shape_424.setTransform(35.3,180.4639);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#B98543").s().p("AgJAOIAFgQQACgLgBgHIANAAQgBAEAAARQAAANgHAHQgDgLgIAEg");
	this.shape_425.setTransform(86.825,106.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#C79B5D").s().p("AAAAUQgCgCgDgIIgEgOQgDgKAGgGIAGgBQAOAYgEARQgEACgDAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_426.setTransform(92.372,42.7317);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FBCA7A").s().p("AgJAGQgGgGAFgEIAHgHQALADAFANQgFAHgGAAQgFAAgGgGg");
	this.shape_427.setTransform(82.0786,26.0254);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#C08942").s().p("AgIAJQgEgGAGgEQAAgPAFgEIAMANIgIAcg");
	this.shape_428.setTransform(63.6908,182.35);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#D19C5E").s().p("AgCARQAHgRgQgRQgCgIAEgDIAAgGQAHgCAEAFIAHAKQADAFAAADQADALgHAIIAAAPQAAAKgGAFg");
	this.shape_429.setTransform(16.9867,128.0964);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#C18A46").s().p("AgGgCQABgCgHgNQgEgJAPgDQANAKACATQgBAGgBALQgCAKgJADg");
	this.shape_430.setTransform(41.8981,198.4);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#BE8746").s().p("AgHAHQAGgPgCgDQgEgIAJgEQAEACABAEIACAIQgBAWgHALQgNgFAFgMg");
	this.shape_431.setTransform(75.6688,143.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#C48B47").s().p("AgFAAQAGgYAAgFQAHAFAAAKQgBANABACQgDASgIALQgIgMAGgSg");
	this.shape_432.setTransform(82.1587,121.675);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#BF8745").s().p("AgLACQAAgGARgNIAEAHQADAHgEAHIgFANQgPgIAAgHg");
	this.shape_433.setTransform(91.1513,92.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#C28B47").s().p("AgFgGQACgCADgJQACgGAJAJQgBANgBAFQgDAKgHAGQgPgPALgLg");
	this.shape_434.setTransform(84.2717,115.0009);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#BF8844").s().p("AgGAAIACgaQAHAAAEAGIAAAZQgCAOgJAIQgDgLABgQg");
	this.shape_435.setTransform(89.2875,99.05);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#C48D47").s().p("AgBgaIAKAAQACAXgSAeQgFgVALggg");
	this.shape_436.setTransform(77.864,137.275);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#E3A55B").s().p("AgHAYQAAgFgBgHIgCgMIAAgRIAIgJQADgFAHADQAFAGgCAMQgDALADAFIgLAYIgBAAQgFAAgBgGg");
	this.shape_437.setTransform(74.6308,145.0654);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#AA8347").s().p("AASATIgtgWQgEgLADgHQAEADAKALQAHAHAHACQAMgIANAKQAHAJgCAHQgDACgDAAQgDAAgDgDg");
	this.shape_438.setTransform(3.0496,70.9389);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#DFA55C").s().p("AgIAbIACgQQABgJgHgFQgCgHAFgGIAJgKQgDgIAIgEIAGAAQAEALgEARQgGAWAAAEIAAAMQgBAHgEAEQgFgCgDgKg");
	this.shape_439.setTransform(76.5504,138.425);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#B57F41").s().p("AgEAHIgGgZQAHgDABgJQADgCADADIAEAFQgFAJAFASQAGATgHAJQgHgJgEgPg");
	this.shape_440.setTransform(32.826,173.41);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#997A56").s().p("AgMAHQABgDgBgMQgBgKAFgFQAHgEAFAFQgGALAKAMQAIAKgFAGIgMAIQgLgHAAgLg");
	this.shape_441.setTransform(18.4787,130.9559);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#E1A459").s().p("AAAAYIgCgPQgCgIgFgEIgGgHQgDgFAEgEIAHgGQAIgFAFAAQAHACAFAMQgDAFgDATQgDAPgHAIQgDgEABgDg");
	this.shape_442.setTransform(62.2479,186.1229);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#F7BC71").s().p("AACALQgGgDgNgIQgJgEADgIIAeAAQAGADAEAHIAHAMQgGADgGAAQgFAAgFgCg");
	this.shape_443.setTransform(84.6625,30.1066);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#BF8742").s().p("AgCAUQAEgMACgGQgEgCgDAEQgEAFgEgCQAAgEAKgRQAGgNgFgLQALADgBANQgBAQADAEQgCAbgKAOQgFgIADgLg");
	this.shape_444.setTransform(71.225,156.075);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#D09647").s().p("AgCAiQAAgGgDgBQgHgKACgPQACgVgBgEQAAgVAUAHIAAAMQgGALAHASQABAIgEALIgIARQgDgBAAgFg");
	this.shape_445.setTransform(56.5468,204.0263);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#8C3B36").s().p("AglAFQABgJAIgCIAPgBIAOAAQAJAAAEgEQAFAFAHACIAMAEIgDAMg");
	this.shape_446.setTransform(48,7.75);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#CC9045").s().p("AgKAhIgBgNIAAgNQACgDgDgVQgBgRAOgGQADAEABAMQAAALAIADQAAALgEAPIgJAZQgIgBgCgHg");
	this.shape_447.setTransform(58.1932,199.675);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#BF8842").s().p("AgDAoIgIgjIgDgXQgBgNAGgKQAJgEAJAJQAJAIgDAMQgDAJgBATQAAAUgDAJQgDACgCAAQgDAAgDgDg");
	this.shape_448.setTransform(39.9469,190.4202);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#D9A054").s().p("AgCAhQgGgSgIgGQgEgEABgGQADgHAEgDQACgCALgOQAIgJAKgBIgBAAIABAAIAAAAQADALgFATQgFAUABAJQABAMgHAEQgFAAgEgFg");
	this.shape_449.setTransform(80.4594,122.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#B28041").s().p("AgIAPQgJgPAAgKQAFgEADgMQACgMAIgCQgCALAHAOQAKARACAFQgIABgEgHQgGgGgCgBQgGAHAKAQQALAOgLAKQgBgJgJgRg");
	this.shape_450.setTransform(11.2,110.45);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#CF9A53").s().p("AAFAeIgIAAQgFgGgEgMIgGgSIACgIQABgEAHABQAGgDAAgJQALgDAIAPQgGARAIAUQAAAEgBADQgDADgGAAIgEAAg");
	this.shape_451.setTransform(37.375,183.3269);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#E6A95A").s().p("AgDAaIgLgWQgDgEAAgDQACgIACgDQADgGAIABIAUgUQgPAjAKAfQABAKgGADQgJgCgCgMg");
	this.shape_452.setTransform(63.9464,177.575);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#AB8C66").s().p("AgMAhIgFgHQgCgFAAgEIAEgPQACgIgFgGQgDgFABgGQABgFAGgEQAGgBAGADIAIAJQACADABAFQAAAGAFAJQAFAMABAFIgCAHQgDAHgGAAQgKgIgMAIg");
	this.shape_453.setTransform(20.2025,131.8275);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#C6944F").s().p("AgXgeQACgFACAFQAFABAGAJQAGAIAFgBQAHgDAJAGQAJAIgHAGIgIASQgGAKgJACg");
	this.shape_454.setTransform(23.2158,144.1375);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#D6A156").s().p("AgKAOQABgDgDgLQgCgJAEgGIgFgRQgDgKAHgHIAKAGQADAEgCAHQAEAGAJAAQADAEAAADQACAGgDAGQgCAEgCAJQgBAKgEAEIAAAAQgEAEACALQABALgFAEQgKgQAAgUg");
	this.shape_455.setTransform(27.6603,155.425);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#BD8946").s().p("AgJAWQgHgSgBgLQAHgFABgQQACgQAHgEQgBAMAGAMIAMAXQgFABgGgEQgFgFgEABQAPAfgLAbIgKgcg");
	this.shape_456.setTransform(31.2,165.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#D23D41").s().p("AAAACQgZgHgHgNQAVgJAQAIQAOAHAOATIAAARQgIgNgZgJg");
	this.shape_457.setTransform(47.925,2.3811);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#B79055").s().p("AgOAaQgFgEgGgOQAFgHAAgMIAAgVIAKALQAHAOADABQACABAMgJQALACABAIIgBAOQgDAHgGAGIgMAKIgCAAQgKAAgGgHg");
	this.shape_458.setTransform(2.7813,67.9306);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#CC9C55").s().p("AgLAgQgGgIgCgOIgFgXQAPgBAJgRIAJADQAGACADACQAIAIgBAGQgCAGgMADQgGADgDAJIgCAPQgEAGgGAAIgBAAg");
	this.shape_459.setTransform(5.4363,91.3768);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#683930").s().p("AgsANIgGgWQAFgFAHAAIAYADQAGACAbACQAUACAMAHIgCALQgYACgZAAQgVAAgXgCg");
	this.shape_460.setTransform(46.35,8.7316);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#DBA458").s().p("AgIA1IgEgHQABgDAAgDIgCgHQAAgDgHgXQgFgOAHgHQAHgHgGgOQgFgMAJgFQAHgCAFAFIAIAJIAFAFIAKAQQACAEgBAEIgFAKIgEAJQgCAHgDADQgJAJACASIgCAHQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgEgBg");
	this.shape_461.setTransform(32.6771,166.2483);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#CA9048").s().p("AgKAJQAEgLgHAFQgHAFACgEQgEgEABgHIAHgTIAFgUIADgDQADABAGAPQAGALANgJIgWBRQgWgMAMgdg");
	this.shape_462.setTransform(65.3795,175.325);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#CE9D57").s().p("AADAlQgEgJgDgDQgDgGABgGQAHgFgHgKQAAgBAAAAQAAAAgBAAQAAAAAAABQAAAAgBABIgCADQgCACgDACIgIgSQgEgMABgKQAHgPARALQAVATAFAMQAGAPgFAQQgCACgBAIQgBAHgEADIgDAAQgHAAgEgHg");
	this.shape_463.setTransform(21.6715,138.6335);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#B03D3F").s().p("AAmAaIgOgGQgJgEgIgGQgagWgbAYQgLgCAAgHIAEgMIACgGQASgPASAGQALADAUARQALAJAIACQAKAEAMgEIABAKQAAAFgFADQgFACgEAAIgGgBg");
	this.shape_464.setTransform(46.5739,5.2374);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#D6A156").s().p("AgYAPQADgHgDgLQgEgNABgGIAEgHQAEgBAEABIAFACQADACADgCIgCgLQAAgHAGgCQAFAAAFADIAKAGQAFAEACAFQACAGgCAFQgCADgFAFIgGAIIgHAQIgFAUQgCAMgLADg");
	this.shape_465.setTransform(30.621,160.25);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#C44043").s().p("AATAYQgWgRgLgFQgUgIgUAGQAHgYAagHQAKAGAVAHQASAIAKALQAAABAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQABgFADAAQANANgDAPQgHAJgJAAQgJAAgKgIg");
	this.shape_466.setTransform(46.8273,3.6254);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#D7A762").s().p("AAaAnQgIgQgDgDQgLgYglgQQgKgHgEgIQgDgGACgGQABgEADgDQAIABANAFIAVAHQAgAnAUA2QgDADgFAAQgJgDgHgNg");
	this.shape_467.setTransform(87.4219,35.375);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#E0A457").s().p("AAOAjQACgOgIgEQgIgGgCgFIgKgTIgKgLIgLgJQgCgDABgEQABgEAFgEQAEgBADACIASASQAIAAAGgLQAHgMAHAAQAMALgCALQgMAMALAIQAAAFgDAOQgDAMACAIIgJAYQgJgEACgOg");
	this.shape_468.setTransform(70.3666,150.425);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#CC9954").s().p("AAAAzQgDgGgCgBQgFgEgBgHQABgIgBgEQACgJgKgRQgJgQAGgLIAAAAQAGABAEAEQgIgLAFgLIAFgGQAXgCgBAZQADAEAJAGQAFAGgLAIQABAEgCAHQgDAJACAEIgDAHQgDAFAAAJIABANQgCAEgDACIgBAAQgFAAAAgFg");
	this.shape_469.setTransform(15.3467,119.6278);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#D7A051").s().p("AgwgGQAQgNAYARQAIAIARgDQARgDAKgMIAGgJIAFgKIAFAMQgTAbggANQgYAKgoABQgMgWATgQg");
	this.shape_470.setTransform(88.4559,84.925);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#DAA156").s().p("AgPBNQgBgIgBgFIgCgHQgBgHgHgPQgHgMANgRIAOgTQAHgNgHgMQgHgNAIgKIAMgRQAIgLALABQAHAIgBAJQgBAFgEAMQgDAGgBAKQAAAMgCAEIgBAPQAAAIgFAFQgKAFgCALIAAATIgKAwQgGgEgBgIg");
	this.shape_471.setTransform(83.9342,112.8707);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#E1A659").s().p("AAkAiQgIgPgPAAIgZADQgFAAgGAFIgLAHQgEgEgHACQgPADgDgMQgCgHAFgDIAKgHQAYgCAogNQAdgJAUgWQACAQgBAJQgDANgKAIQgGAGgCAKIgDATQgIAAAEgHg");
	this.shape_472.setTransform(88.1648,87);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#AD8955").s().p("AgxAgQgCgBgGADIgLgFIgHgRIAGgFQAYAMAZgDQAUgDAbgNQAhgPALgaQAIALgEAOIgKAWQgCAFgDADQgcAUgYAGQgIACgJAAQgUAAgUgKg");
	this.shape_473.setTransform(8.2779,46.515);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#CF9A54").s().p("AgKAwQgMgJgFgWQgGgZgGgIIAJgRQAGgKAHgFQAIgBAGAGIAIALIAaAiIAHAJQAEAGgCAGQgDAJgKAGIgIACQgLgBgCgHQABgFgDgGIgEgKIAAgCQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAEABAOQABAKgEAHIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_474.setTransform(26.9475,149.1762);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#D39A53").s().p("AALAlIgEgNQgEgHgJADQgFgDAAgJIgNgKQgHgGgHgCQgEgDAAgEQABgHAKgEQAZgTAfAGQASADAAAPIgKASQgEAJAKAJIgQAeIgBAAQgGAAgFgGg");
	this.shape_475.setTransform(87.675,92.6048);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#D29B51").s().p("AAIA3QgEgBgBgEQgDgOgNgMIgKgMQgGgIgDgFQgDgIADgHIAcghQAEgFAFAAQAFACAHAIQAKAIgEAIIgKAMQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIABAAQAFgKAKgCQAEACACAEQADAZgHAYIgKAXQgEACgEAAIgDAAg");
	this.shape_476.setTransform(85.8508,98.7955);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#DBA458").s().p("AgBBFQgPgKACgTIACgCIgDABIgJgBQgFgDgBgGIAAgLIgFgcQgEgRAEgMQgEgRAGgJQACgCAEgBQAFABAIAIQAHAHAFABQAFAEABAKQAAAGgEAEIAAACQAHgDAHAFIALAKQAIAGADAFQADAFgCAFIgIAKQgEAGgBAFIgOAfQgEAJgGAAIgBAAg");
	this.shape_477.setTransform(36.6003,174.7548);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FBC063").s().p("Agog8QAEgJAIABQAGACABAEQAAACAAABQABABAAAAQAAABAAAAQABgBAAAAIACgDIAIACQAGACADAAIAGAAQADAAAIAHQADACAFgBIAIgBQAGACABAGQADAKgKAGQgLAIAAAGQgBAKgHATQgEATALANQADAEgBAGQgCAGgGAEg");
	this.shape_478.setTransform(48.3596,213.42);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FBC866").s().p("AgcBAQAEgJgHgOQgHgPABgGQADgWAFgNQAGgTANgMIAJgMQACgDAGABQAFAAADgCIAJgKIAHgCQAGABAAAGIABAJIgtB6QgEALgGAAQgFAAgGgLg");
	this.shape_479.setTransform(52.8191,213.9375);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#DEAA64").s().p("AA1AUQgDgPgLAAQgJABgTgEQgRgDgKABQgcABgTgZQgEgFAEgGQAqgMAaASQARALAKgCQALgBAHgSQAAgCADgCIAFgEIAGAgQADASgCAOQgFAEgBAKQAAAMgEAFIgCgcg");
	this.shape_480.setTransform(87.5146,57.125);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#C39D60").s().p("AhKAkQgGgHAAgKIABgTIAaATQAEgWAUgEQAMgCAVACIAiAAQAQgEACgYQABgHAHgCQAEgCAKAAQAEAEgBAGIgCALIgDANQgRAmgsAPQgTAGgTAAQgZAAgagLg");
	this.shape_481.setTransform(8.1778,44.0888);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#D4A157").s().p("AgEBgQgigUAPgsQAJgXgDgaQgCgOgJgjQgFgVACgKQAOgBAMAHQAIAFANAMQABAJgDACQgOAFAAALQAAAGAIAMQAYAiABALQAAALgWAhQgEAEgFAAIgJgCQAHAEAOAHIAGAFQgBAUgOAAQgEAAgFgCg");
	this.shape_482.setTransform(3.4332,80.3379);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#D3AC6A").s().p("AhMAuQgHgCgGgGQAMglAQgQIACAOQACAEAKgGQAogeAkgCIAegIQATgFANAFQgHAKgRAOQgRAPgHAHIg3ANQghAIgSATQgDADgFAAIgFAAg");
	this.shape_483.setTransform(10.45,36.7742);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#DDB46F").s().p("AhHA2QgDgCgFgIQAcgzA8guIAHALQAEAHgBAHQgCAHAGAAIAKgDQACAMAKACIASADQAKADADADQAEADAAAJQgPgEgZAFQgbAGgIgBQgUgCgQANQgQAQgKAGQgHAEgEAAIgDAAg");
	this.shape_484.setTransform(14.4525,27.175);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#C49451").s().p("AAWBZQgBgJgGgIIgMgNQgIgNAHgEQAHgFgFgBQgFgCABgCQAHgHgHgFQgIgHABgDQAGgPgTgRQgEgDAAAEIAAAGQgBAGgFADQgGAAABAEIAAAHIgCAHQgGAJgEABQgHgJgCgUQADgHgBgGIgGgLQgHgKABgDQABgEAKgKQAAAAAAAAQABgBAAAAQAAgBAAAAQgBAAAAgBIgCgCQgKgMAJgOIABgGQAMgBAMAMQAPAQAFACQAHAFAFAGQAEAJALALIASATQAIAKgFANQgMASALANQAHAHASANQAEAEADAFQACAEgCADIgLALQgNAKgHABQgKAAgDgHg");
	this.shape_485.setTransform(17.1308,115.374);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#CCA666").s().p("AhDAuQgHgOgFgGQABgPALgTQALACANgIQAVgOAcgIQAQgFAmgHQAEAAAEADQAMAJAAANQgBAFgDACIgFADQgDACgBACQgGAYgSAHQgNAGgbgCQgcgDgWAUQgGAGgGAAQgEAAgEgDg");
	this.shape_486.setTransform(8.2,41.4976);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#E6A95A").s().p("AgeBNQgHgHgHAEIgRgFQgJgDgEgGQgDgGABgHQABgGAFgEIAJgGQAFgDADgEIARgYIAGgJQAUgWgfgEQgEgFADgGIAGgKIANgPQACgCAEgHQAEgFAGACQAEAFgBAGIgCALQgCANAMgGQABAAAAAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAABAAQAAAAABAAQABgBAAAAQAOgPAEgGIAGgHQACgEADAEQAMABAAALQAFADAHgGQAGgGAFADQAGAJgFAIIgFANQgBAHAHAGIgCAKQgNATgHgKQgGgPgFgFQgJAAgCAIIgDAMQgDAHgKAAQgCABgGgEQgFgEgEAFQgEAFABAFQABAEADAIQABAOgLAGQgCABgLAAQgJAAAAAKQAAAGAIgBQACABAOgEQAIgCAEAJIAAAGQgEACgGAKQgFAIgHABIgBAAQgFAAgGgHg");
	this.shape_487.setTransform(60.169,174.077);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C1985C").s().p("AgIBeQgLgFADgLQACgLgHgIQgJgiAFgqIALhMQAEgCAKACQAMAEAEAIIAIAdQAKBLgOAwQgDAGgIAKQgHAIgFAAIgFgBg");
	this.shape_488.setTransform(2.8804,58.7704);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E4A959").s().p("AgUBYQgLgBgFgMQgBgGAAgKIgBgQQgFgpAqgZQgCgJgJgCQgLgCgCgDQgGgHADgJQAIgLARgGIAbgJIAHgEQAEgDAEACQABANgIAeQgHAbAEAQQACAIABANIAAAVQACASgKAKQgJAJgRAFQgKAEgGAAIgCAAg");
	this.shape_489.setTransform(90.7001,77.481);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#D9A054").s().p("Ag2BzQgDgDgEgJQgBgJALgMQALgLgCgKQgBgDgIgKQgHgIADgIQABgCAKgJQAVgSAGgNQADgEAFgFIAJgHQAPgTAEgMIgIgSQgDgKAIgIIALgRQAHgJAIgDQAFAAACADQAKANgFAJQgEAHAFgBQAGAAgBACQAEAJgFAPQgDAGgBALIgDASIgBALQgBAHgEAEQgFAFgHgBQgEgBgDgDQgBgFADgEIAFgGQgNAKADARIgEALQgCAGAAAFQADANgIAPQgLAVgBAEQgBALgDAEQgBADgEABQgEAAgCgCQgEACgIANQgGALgKABQgHgCgFgGg");
	this.shape_490.setTransform(74.2252,135.475);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#F6C475").s().p("AgxAqIgVgMQgLgHgGgJQgFgNgTgFQgPgFAHgMQAOADAHABQALABAKgEQAPgFATAHQAQAGALAAQAPAAALgLQAIgHALgCQAMgDAKADQAJACAFgEQADgCAEgIIANAMQABASAQgBIAUAWQgFAFgHABQgFABgKAAQgGgBgOgJQgZgPgKAFQgJAEgEAcQgDAMgLAEQgGACgOABIgVAAQgMAAgJgDg");
	this.shape_491.setTransform(73.1636,28.125);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#EABF76").s().p("ABBA9QgJgIgSgGIgegKIgIgCQgDgBgEAEQgJALgFgFQgCgCgDgMQgKgegYAKQgJAFgNgGQgMgHgHAEQgCgIALgIQAKgIgFgJQAsgcAmgHQAAATgJALQgJAKgcAQQAAADAGAAQAjgBAMAEQAOAEAfAaQAQANAOgMQASgGAHAQQgCAHgHAFIgMAIQgFACgEAAQgEAAgDgCg");
	this.shape_492.setTransform(31.7596,19.2375);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#D8B16E").s().p("AiBAxQgIgGAHgNQACgQAUgTQASAAACgDQALgWAagGIAugJQAjgNAVAUIASALQAVACAWgLIALgFQAHgBAFAGQgLAkgoADIg6AGQhFgChEAnIgJAFIgDAAQgEAAgCgCg");
	this.shape_493.setTransform(17.3491,32.1784);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#ECAE5C").s().p("AhJBvIgEgHQgEgNACgGQACgDACgGIADgJQAPgKgHgGIgPgJQgHgMALgMQAGgGAJAAQACABAGAHQAFAGAGgDQAFgDgCgHQgCgKAAgCQACgEADgBQAOgEAKgNIAHgJIAJgJQAGgFAGgCIAFACQAAAAABAAQABAAAAAAQAAgBAAgBQAAAAAAgCQgBgMADgHIAJgPIAJgPIADgGIAIgJQAKgKAGAAQALAGABASQgBAKgFAJIgMALIgIAHQgFAEAEAGQAEAEABAFQgFAHAGAKQAGALgDAFQgFAIAAANQgBAPgCAGIAAAJQgBAFgEADIgDgCIgCgFQgBgEgFADQAIACgCAJQgEAFgBALQgBAMgCAEQgKAAgDgJQgBgMgCgFIgCgHIgCgMQgBgIgGgDQgMAHgJATQgLAZgGAGQgIAAgEAHIgDANQgDAOgIACIgCABQgKAAgJgMg");
	this.shape_494.setTransform(55.5257,190.058);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#CA9C5C").s().p("AgFA1QgDgBgCgDQgIgKgPgHIgbgMQgSgMgTgDQgmgEgGguQAhgIAPAAQAZABATARQACACAKgBQAIgBAEAFIASALQgCAHAGACQAGABABACIAGAAQAFgCAMADQAMADAGgEQASgCAHAQQAFALAIAAQAHAAAGgIQAMgOAHAEQAEACAGAPQAHgDABgMQAAgLAFgEIABAnQAGAKgKAKQgEACgEgBQgRgGgZAAIgpADIgXgBQgOAAgHAJIgCACIgDgBg");
	this.shape_495.setTransform(80.1625,64.2571);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#E4BA74").s().p("AgsA3QgFgMgUgFIgNgEQgHgDgCgHQADgEgFACQgPgBgDgMIgBgVQApgmAjgPIADABQAEATAFAEQAEAEAWACQALABACADQAJATAYAFIAoAIQAQAGAEAEQAFAEAAALQgiAMgjgBQgXgBgOAGQgRAGgLASIgDAAQgJAAgLgLg");
	this.shape_496.setTransform(26.675,23.0633);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#E0A557").s().p("AAuBSIAAgKQAAgHgCgEQgBgFABgEIgCACIgBAEQgIALgHAAQgJgDgFgKQgBgEACgDIgDAGQgBAGgFAEQgOAQgKAEQgUABABgNQAFgQgBgHIACgIQABgEgEgDQgFgEgGAJQgDADgEAJQgEAIgDAEQgMAFgMgKQgDgDgBgFIACgIQAEgDANgUQAKgQAMgEIAPgLQAMgGAGAEQgDgEACgFIADgJIAIgIIAJgKQAFgHAMgNIAKgLQAIgDAIAGIANAIQAFgBAFgHQAGgHAFgBQAEAAADADQADARgCAWIgFAmQABAHgEAJIgIAPQgIAOAAAWIgDANQgDAHgEAEIgDAAQgDAAgDgEgAgNABQgCAKADAEQAJACADgFIACgMQgCgDgGgDQgFgCgDgDQADAEgCAIg");
	this.shape_497.setTransform(62.7864,160.6474);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#E7B469").s().p("ABDA5QgUgIgRADQgRAEgLgJQgMgKgJgEQgMgEgNAFQgGACgLgKQgKgIgJAGQgOgfAIgZIACgJQgBgEgHgBQgSgDAEgPQABgHAHgCQADgBAKAAQAPAAAFACIAdAnQARAWAPANQAUAWAIgPQACgDAVgKQAOgIgHgSQgEgJAGgIQAGgIALgEQAOAHAHAUIALAfIADAKQABAFgCAFIABAVIgJAjIgggSg");
	this.shape_498.setTransform(81.6418,44.675);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#ECC279").s().p("AgoBJQgHgBgLgGQgGgDgIgIIgNgLQgQgMgIgEQgPgGgOAJQgFADgGgCQgHgBgDgGQgDgGAFgEIAKgGQAMgGAKgMIARgYQATgLAhgGIA2gMQApgTA0ATQAJADAbAEQAWADANAHQgJAHgOABIgXAAQgUAAgdAEQgRgGgQAIQgTAJgWgEQgFAAAAABQgBACAEAHQAEAQgOAPQgSAUANAbQgGALgKAAIAAAAg");
	this.shape_499.setTransform(42.1438,16.3322);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FACB7D").s().p("AgnAvQgKgBgRgMQgRgMgMgBQgIAAAAgVQAAgWAIgHQAEgDAOgGQAUgJAbAAIAuACIAMAGQAGACAHgDIAhAJQASAGANAJIAAAKQgBAFgIgBIgJgBQgEACADAHQADANgJAIIgSALQgHAFgEgFIgHgMQgHgMgSAIIg3Aag");
	this.shape_500.setTransform(56.6,16.375);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#DFAF68").s().p("ACOBYQgLgGgUAAQgZgBgHgCQgXgFgigFIg4gJQgRgCAAgLQAAgFAFgDIAMgFQg9AIgtg1QAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAABQgCAFACgEIADAAQAIAFAAADQAAAJgHAEIgPADQgQgCgJgOIgNgZQAAgHAKgKQALgMgNgMQgLgIgDgFQgFgJAGgLIAgALQATAGAHAPIAFAPQAEAHAJABQAJAGAUAJQARAJAHANQAFAKAVgCQAQgBAeADIBWAVQA0ANAhALQACABADAJIABgRQACgJAJgEQAEAHACALIADATQgNAfgIADIgDABQgKAAgZgMg");
	this.shape_501.setTransform(73.2364,45.8015);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#C49551").s().p("AgMC1QgIgPgDgeIgFgLQgCgGgFgCQgIgKgBgPIgDgaIgHgQQgFgJACgIQACgEADgCQAGgBAFAHQgHgMgBgEQAAgFAEgOQAKgIgGgGQgIgGgDgEQgCgEAAgEQAEgDASgKQAOgHAEgMQADgLAAgFQgBgIgHgHIgngnQgKgJABgGQACgHALgDQAHgCAMgIQALgHAHgCIAIABQAKAGABAFQACAHgKAHQgOAJAAAGQABAHAPAFQAtAOASAxQACAOgBApQgBAighgCQgGgBgPgHQgMgHgJABQABAHARAJQAPAIgGAPIgcAbQAMgBAMALQASANAFACQAEADAEAGQADAGAOAOQALAMACALQgBARgOgJIgMgKIgLgMQgIgEgEAFQgEAIgDACIgEAHQgCACgEANQgDAKgJAAIgBAAg");
	this.shape_502.setTransform(10.7402,91.2262);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#D5A562").s().p("ACZBPQgHgFghADQgZABgKgUIgGgCQgRgHgQAEIgIgBIgRgKQgOgGgEgLQgIgYgaAEQgfADghgSQglgZgUgLQgHgDACgHIAFgMQABgEADgDQAGgEAIABIAOACQAOADArAOQAjALAXADQAIABAQAFQAQAEALgFQAQANAYAFIArAHQAaAFAEAEQAEADABAOQABgFAHgDIAAApQgEAHACAQQgBAFgDAEQgCADgCAAIgCAAgACdAWIAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABABAAIgCgJIAAACg");
	this.shape_503.setTransform(77.4778,58.5156);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FBCA7A").s().p("AA9BAQgOgCgsgCQgkgCgWgFIgZgPQgPgHgOgBQgcgCAAgZQAJgNASgJQAKgFAWgHQAQgHAMAMQAJAJAJgDQAIgCAAgJQABgOAJgHIASgLQBSAhA0A3QACAVgUgBQgZgDgVAQQgHAGgGAAIAAAAg");
	this.shape_504.setTransform(66.6385,21.0769);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94.7,221.4);


(lib.Symbol10copy = function(mode,startPosition,loop,reversed) {
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
		/* stop();*/
		this.stop();
	}
	this.frame_2 = function() {
		playSound("one1wavcopy");
	}
	this.frame_18 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_20 = function() {
		playSound("two1wav");
	}
	this.frame_33 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_36 = function() {
		playSound("threewav");
	}
	this.frame_53 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_55 = function() {
		playSound("fourwav");
	}
	this.frame_70 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(16).call(this.frame_18).wait(2).call(this.frame_20).wait(13).call(this.frame_33).wait(3).call(this.frame_36).wait(17).call(this.frame_53).wait(2).call(this.frame_55).wait(15).call(this.frame_70).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AArDoIAAheIibAAQh+AAAAgzQAAgVAWgbIAlgoQA+haCAixQAfgpAxAAQAXAAARAMQATAOAAAaIABEkQAzACARAJQATAKAAAfQABAhgeAMQgVAIglgCQABA5gCBBQAAAWgOAOQgNAOgYAAQg7AAADhOgAhJAjIB0AAIAAiuQgmA8hOByg");
	this.shape.setTransform(509.3004,74.175);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54).to({_off:false},0).wait(18));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ah0EaQg6gegUg3QgDgIAAgJQAAgWARgOQAQgOAWAAQAYAAAPATQAZAiAEADQAYAUAvAAQAkAAAdgXQAcgWAAgfQAAhhiDgNQg5gFAAgqQAAggAtgQIBSgTQAbgIANgNQANgNABgTQACg6hcAAQgeAAglAXQgkAYgNAAQgXgBgPgQQgQgQAAgUQAAghBBghQA8gdAkAAQBYAAA2AmQA6AqAABOQAAAsgQAeQgQAegiASQBQArABBkQAABPg8A4Qg6A3hUAAQg+AAgzgZg");
	this.shape_1.setTransform(509.15,75.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(35).to({_off:false},0).to({_off:true},18).wait(19));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AB0EpQgUgDgJgBIhyAAQgPABgeADQgeADgPABIgNgCIgMgCQgjAAgNgcQgIgSAAgmQAAhIAhgxQAZgmA3gnIBphEQA9gtAAg5QAAgPgYgOQgZgPgXAAQgpABguAkQguAlgSAAQgUAAgQgKQgTgMAAgXQAAgXATgSQAvgqAkgTQAygbA2gBQBDABA2AjQA/AoAABDQAABBgfAvQgYAmgzAhIhhA+QhKAwgGA+QAWgDAqgDQBSgEAkAAQAhAAAhAOQApASAAAcQAAAUgPAQQgPARgWAAQgKgBgVgDg");
	this.shape_2.setTransform(509.875,60.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(19).to({_off:false},0).to({_off:true},14).wait(39));

	// _
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhCEwQhKAAAAguQAAg1BSAAIASABIAAlaQgiAYgLAAQgVAAgQgQQgRgPAAgVQAAgWAagWIAsggIAwgnQAcgVAcAAQAjAAAAAqQAAAvgEBUQgEBVAACbIAABfIAaAAQAXAAAPAOQAPAPAAAVQAAAWgPAOQgPAPgXAAg");
	this.shape_3.setTransform(508.475,59.725);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1).to({_off:false},0).to({_off:true},17).wait(54));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhuDMQg7gWAAgqQAAgnAvAAQASAAAiALQAhALATAAQBOAAABggQAAgUg4gYQhPgjgXgPQg3gnAAg3QAAhPBTgbQAxgQBjAAQAnAAATAKQAZAOAAAlQAABGglAAQgnAAgIghQgQgCgQAAQhdAAAAAZQAAAQA4AZQBNAkAbAUQA5AoAAA0QAABDg/AiQgyAchIAAQg0AAgrgQg");
	this.shape_4.setTransform(297.325,70.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgxEcQgPgPAAgWIgBhIIgChHQAAgjAEg1QAEgzAAgjQAAgWAPgPQAPgPAYAAQAWAAAPAPQAQAPAAAWQAAAjgEAzQgEA1AAAjIABBHIACBIQAAAWgQAPQgPAOgWAAQgYAAgPgOgAgkjHQgSgQAAgZQAAgYASgRQATgQAYAAQAZAAASAQQASARAAAYQAAAZgSAQQgSARgZAAQgYAAgTgRg");
	this.shape_5.setTransform(268.125,61.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiaDLQgMgOAAgWIAAj+IAAgkIABglQAAgWANgOQANgPAYAAQAsAAAIAtQBEg0BUAAQBPAAAABoIgBAaQgDA8gzAAQgxAAgBgzIgCgnQhWAOgmBMIAADDQAAAXgPAOQgPAPgYAAQgYAAgNgQg");
	this.shape_6.setTransform(202.75,70.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ABeC0QgkARgbAJQgbAJgTAAQheAAgvgzQgvgyAAhkQAAheBGhCQBFhEBgAAQAlAAAxAVQA7AaAAAhQAAAOgJAKQgEAQgCAXQgCAXAAAgQAABJAKAgIASAoQAQAhAAAFQAAAVgQANQgQAOgVAAQgSAAgngjgAg3hOQgoApAAA2QAAA0ATAbQATAaAlAAQAYAAAVgIQAWgIATgQQgMhcAAguQAAgMACgQQACgRADgUQgHgEgGgBIgLgCQg0AAgoAqg");
	this.shape_7.setTransform(160.875,70.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgjEQQgRgOAAgVIABgqIABgrQAAgvgHiaIhJgGQgxgGAAgtQAAgWAPgPQAPgPAXAAQAPAAA0AEIgCgpIgCgnQAAgWAQgOQAQgOAXAAQA5AAAABhIgBAgQAYgEAPAAQAtAAARAGQAfALAAAlQAAAWgPAPQgQAPgXAAIgTgBIgUAAQgQAAgVADQAHCdAAAwIABATIAAAWQAABag5AAQgUAAgQgNg");
	this.shape_8.setTransform(119.575,64.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AjTD+QgvgkAAgwQAAgZAOgQQAPgQAaAAQAjAAARAkQAWAvBPAAQBCAAA+gdQBCgeAAgkQAAgxgpgQQgdgLhWgCQhDgBg2gXQhIghABg8QABhNBQg/QBQg/BggBQAmAAA5ASQBFAWAAAdQAAATgOARQgPARgZAAQgSAAglgIQglgHgSAAQgyAAgtAXQgvAZAAAcQAAAPAOAKQAOAJAdAEIBjAFQBWAHAzArQA3AtAABTQAABlhyA0QhYAnhwAAQhjAAg5gsg");
	this.shape_9.setTransform(73,62.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhKFKQgQgOAAgWIABgKQAJg3AAgyIAAjDIgaAEIgWACQgYAAgQgOQgQgOAAgYQAAgkAngLQARgFAzgCQAAgHAFglQALhXAkgqQAtg1BdAAQBIAAAAAyQAAAzhCAAQgwAAgVAiQgQAYgGA0IgBAMQA0gFAXAAQBJAAAAAyQAAAzhOgCQgYAAgyAEQgCAoABBAIACBqQAABHgJApQgJArgqgBQgWABgQgOg");
	this.shape_10.setTransform(-10.375,62.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AiACkQg5g2gDhbQgDhVAyhEQA8hPBpAAQBOAAAuA+QApA4AABUQAABagwBAQg3BHhaAAQhIAAg0gygAg4hCQgYAlAAAwQAAAwAbAYQAVAVAcgBQAhAAAZgWQAdgbABgvQAGh8hIgBIgBAAQguAAgbAsg");
	this.shape_11.setTransform(-51.6585,71.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AiACkQg5g2gDhbQgDhVAyhEQA8hPBpAAQBOAAAuA+QApA4AABUQAABagwBAQg3BHhaAAQhIAAg0gygAg4hCQgYAlAAAwQAAAwAbAYQAVAVAcgBQAhAAAZgWQAdgbABgvQAGh8hIgBIgBAAQguAAgbAsg");
	this.shape_12.setTransform(-128.4085,71.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AkTEtQgOgQAAgWQAAgQACgfQADgggBgQIAChFIAChFIgChJIgBhKQAAgYgEguQgFgvAAgXQAAgYAUgSQAUgSAagBQAdAAAjAzQCwD9CtCfIABg8QAAjAgFhDIgEgqQgFgbAAgQQAAg2A6ABQA/AAAADEIAAA+IgDD1QAAAUgGAqQgIAygyAAQgbAAgjgeQiWiIi8jzIgCB7IACBdIABBdQAABzg5AAQgcAAgSgRg");
	this.shape_13.setTransform(-181.4,61.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},70).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,0,752.2,129.5);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#893131").s().p("AgHAFQgCgDACgCIAIgGQAFABACACQACACgCACQgEAFgFABIgBAAQgDAAgCgCg");
	this.shape.setTransform(118.4125,174.4042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#893131").s().p("AgOAIQAEgLAJgDQABgBAPAAQgBALgIAEIgIABIgMgBg");
	this.shape_1.setTransform(119.35,170.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#893131").s().p("AgBAHQgXgHgKABQARgNARADQAOACAUAPQgGADgJAAQgJAAgLgEg");
	this.shape_2.setTransform(67.6,160.6986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5A2E2E").s().p("AABAOIgpgCIASgRQATgKAaACIgGAIQgFAEABABQAFAFAJAAIAOAAQgOAJgWAAIgEAAg");
	this.shape_3.setTransform(104.65,194.7055);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#782E2E").s().p("AiiAPQAQgMAagCQAPAAAdAAQAmgBBRgHQBOgHAqgBIgJAJIgWAHQgNAEgLgEQhegBhNAQg");
	this.shape_4.setTransform(91.575,194.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5A2E2E").s().p("AkYgBIAAgOICuADQAMAABSAJQA5AFAmgLQA+gJAlALIBjACQiRAViTAAQiFAAiIgRg");
	this.shape_5.setTransform(67,196.465);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#893131").s().p("AgIAOQAAgOACgEQAEgIALAAIgJAag");
	this.shape_6.setTransform(28.675,167.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#802F30").s().p("AgDANQgGgBgBgEQgCgDACgFIAEgJQAEgGAFADQADABACAEIAEAHQgDAOgJAAIgDgBg");
	this.shape_7.setTransform(25.6056,166.919);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7D3240").s().p("AgPAjIgEgjQgDgbAJgGQAJgFAZALQgLAUABARQACAZgWAAIgGAAg");
	this.shape_8.setTransform(150.7359,157.9555);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#95A4B1").s().p("AgWBtQgPgCgDgLQgBgEAAgRIgCgbQgCgQAFgKQAFgKgEgHQgDgFgLgEQgNgEgLgPQgKgSgHgHQgPgRAHgRQAGgQAXgGQAYgFAnABIA9ACQAOABAPAPQAQAQAKADIhGAKQAOAXAYgGQARgEAHADQAIAEgCASIgBAXQgEAJgWgEQgUgDgNAQQgKAOgDAXIgCATQgBAKgEAGQgGANgOAEQgGACgJAAIgLAAg");
	this.shape_9.setTransform(83.4386,58.9839);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9BA6B2").s().p("AgOAGQAOgQAPAFQgCAMgKAAQgMgDgFACg");
	this.shape_10.setTransform(102.8,47.8529);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A1AAB3").s().p("AgjgCIApgCIAeAEIgkAFIgFAAQgRAAgNgHg");
	this.shape_11.setTransform(93.2,46.9352);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#562E2E").s().p("AghAJQgGgGAPgJIAJgEIAJgFIAQAAQgCAHAUABQARABgRARIgbAAQgKAFgIAAQgKAAgGgHg");
	this.shape_12.setTransform(108.6494,194.0596);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#802F30").s().p("ABMA2IgWgGQgNgEgJABQgmAGgfgbQgggjgSgRQgKgKAHgKQAEgGAFABQAFABAEAFQAZAiAvAWQAcANA6AWQACABACADIAEAGg");
	this.shape_13.setTransform(41.572,180.6179);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#812F30").s().p("AhEBDQgLgBgFgIQArglApgRQAegKACggIgEgPQgCgJAMAAQAHAAAPgEQAOgCAHAHQAIAHgIAJQgJALAAADQADAogjAQQgrAMgRAMIgcATIgUgBg");
	this.shape_14.setTransform(151.9065,171.8921);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#562E2E").s().p("AkdBNQAMgMAigDQAhgCAMgPQBIgFBXgWQAugLBsggQAbgIB6goIASgIIAAAIQgRAZghAMIg7ARQhsAjhcAYQgbAHg4AJQg4AJgbAHIgNACQgHACgEAFIgcABQgZAAgTgFg");
	this.shape_15.setTransform(143.725,185.5279);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#802F30").s().p("AmCAwQgMgDg4gDQgPAAgGgBQgLgDgCgPQAIgIAKAIQAygCBrAKQBnAJA2gEICKgHQBQgFA5gMQBhgTA1gFQAfgCA9gWQA7gWAhgCIATABQALABAGAIIiqAwQhmAbhKACQgeABg8ANQg7AMgfABQh1AFg6ABIgOABQhcAAhEgNg");
	this.shape_16.setTransform(98.075,183.7035);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#802F30").s().p("AizB7QgNAAgJgJQgLgCgdAGQgaAGgSgGIEdhKQAKgDAngUQAfgPAYABQANABgIgIQgLgKACgFQA1AKAagpQAPgYAYg0QAIAJASACQAUACAIAFQANAKABAGQACAIgPAIQgkASAZAgIgBASQgLAPgXAKIgoAMQhxAig5APQhhAbhKAMIgXACIgCAAg");
	this.shape_17.setTransform(144.3868,178.6286);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A13436").s().p("AAGAFIgWgEQAJgEAIgBIAPACQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgCAEg");
	this.shape_18.setTransform(99.025,89.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D3336").s().p("AgRAOQgBgIAIgGIALgLQAFgFAEAFIAIARQgGAIgLABIgSgBg");
	this.shape_19.setTransform(99.5941,91.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A13436").s().p("AAEAKIgXgBIgLAAQgHABABgKQALgLAZADIAaAAIALAIQADAGgNADQgHABgKAAIgGAAg");
	this.shape_20.setTransform(101.5469,92.849);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A13436").s().p("AgeADQgUgEATgIQAPgGAVABIAkABQgQAVgQAFQgFACgEAAQgOAAgQgMg");
	this.shape_21.setTransform(107.2687,89.8729);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9D3336").s().p("Ag2APQASgbAggFIA7AAQgwAegxAFg");
	this.shape_22.setTransform(129.175,112.4125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B1A8B8").s().p("AhmAHQgWAAgEgCQgOgDgHgMQBdALCUgBIA5ADQgEAIgJAAg");
	this.shape_23.setTransform(77.9,119.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9D3336").s().p("Ah7CDIAHgEQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAmAKQAVADALgSQAMgTgCgZQgCgZgOgRQgageACghQABgYAUgmQAFgJARABQASAAAFgKIABgSIAkgDQAVgDAOgLIAaAKIATgBQALAAAAAOQAAAQgLAFQgIADgRgBQgDAAgKACQAbAugXA8QgLAeAHAGQAHAJAsgJQglAagGAIQgOARANAVQgLASgYACQgcgBgMABIg/AGIgCABQgjAAgcgOg");
	this.shape_24.setTransform(104.8,102.9009);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#863031").s().p("AgIAEQABgDAIgLIAGAHQAAABABABQABAAAAABQAAAAAAAAQAAAAAAAAQgEAHgGAEQgIgGABgBg");
	this.shape_25.setTransform(93.2271,166.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#802F30").s().p("AgLAAQALgOAJAKQAHAGgKAHQgNAAgEgJg");
	this.shape_26.setTransform(36.265,164.1209);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#843843").s().p("AgfgBQAOgFARgBQALgBAVABQgNAPgSAAQgLAAgVgJg");
	this.shape_27.setTransform(93.625,150.605);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#823640").s().p("AADANQgHgBgcgPQAOgHASgBIAggBQgKAZgQAAIgDAAg");
	this.shape_28.setTransform(113.45,148.4853);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#883139").s().p("AgXAHQgFgIALgFQAMgGABgEIARAAQAAACAKALQAGAHgMAGQgOAHgIAAQgMAAgGgKg");
	this.shape_29.setTransform(127.1555,149.2533);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#843843").s().p("AgDAPQgbgEgVgJIBbgSIAJAEIADASQACALgJAAQgfAAgRgCg");
	this.shape_30.setTransform(103.7432,149.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#853034").s().p("AANA/QgIgCgFgHQAAgJgJgBQgMgBgCgEIgOgRQAVgNgHgcQgJghAJgLIA1ABQgFAIgPABQgPABgGAEQAFAPASABQAVAAAGAGQgRAjgBAIQgHAZANAWIgOgBg");
	this.shape_31.setTransform(144.55,154.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#863031").s().p("AB+BBQgtgJgfghQgGgIgDABQgeATgjgUQgxgagJgBIg/gTQgmgLgbAUQgDgIAEgHQACgEAHgIQANAAAFgJQAGgIALgBIATABQAOABAEAIQAKACA3AdQAoAUAhgGQBAgLAYAiQAPgLAUAMQAXANAMgDQAUgGAIACQAOAEgLAbQgBADAPANQgbADgVAAQgWAAgRgDg");
	this.shape_32.setTransform(49.7433,170.8315);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#863031").s().p("AihAwIAOgLQAIgHADgGQAHgPADgBQAFgCAJAQQALATAggQIArgXQAPgHANANQABACgFAMQgEAKAOgBQAOAAAAgKQgCgOABgGQAEglAigBQAPAAADgCQAYgcAVARQAMAJAVAWQAMAIgHANIgOAZQgaAOgmAFIhDAFQgvAGgpAAQgyAAgmgJg");
	this.shape_33.setTransform(88.1406,172.507);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#802F30").s().p("AgmCaQgzgCgrgSQgJgKgPgBIgbABQgyADhFgMQhOgQgngHQgJgCgngRQgegOgXAFQgGgOgNgHQgLgHgOABQgVACgbgRQgggUgOgCQgFAAgCgDQgDgEAEgEQACgDAHgCIAKgDQAbAHAzAcQAxAcAeAGQAMACAHgBQAIgBAEgJQAFgLgIgCQgLABgEgDQgagTgCgNQgCgPAVgbIATgdQgFgIgFAAQgDAAgGAFQgIAGgEAAQgGACgFgIQgFgHADgFQADgGAGAAIALABQAfABANgEQAVgGAHgaIAKgJQAngWAwAQQAcAJA1AYIAlAPQAWAGASgIQALgFAGAHQAZAgAzAJQAcAGA4AIIAJAAQAXgKAkADQA1AEAGAAQAXgBBIgKQA7gJAkACQAyATAegJQAggJASgpQAKgWAOAAQAIgBAUALQALAPAIAEQALAGATgHQAugRAoALIASASQglAVg1AJQgQADhPAHQgYADguAIIhGAMQitAUiDgCQgwgBhdgVQhdgUgwgBQgcgBgQgHQgWgJgNgXQgKgRgQgDQgRgEgTAOQgaATgLASQgPAXAEAcQABAGALAFQAGADAMABQAQABgMAWQgJAUAVgFQAUgFAHAAQANAAANAHQAEADArAOQAcAKANAUQACADAHABQAGABAGgBQBEgHB+AJQCEAJA8gEIDJgOQAVgBADABQANACACARQgHAJgOABQgtgCg6AEIhmAIQgYACgjAHIg7ALQguAIgkAAIgNgBg");
	this.shape_34.setTransform(69.5107,181.8159);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9BA6B2").s().p("AiDCfQhqgIhXgVQABgDgBgDQgMgPAFgLQAEgJARgJQAIgFAOgLQAOgMAHgFQARgLALgBQAQgCARAMQAjAaApgUQAogUAFgrQACgTAEgKQAGgOAOgFQANgEANAJQAIAFAMANQALAKgBAOQAAANgJAMQgMAQABAWQABATANADQAMAEAEgMQAEgMAdgiQAXgagDgbQgCgbgFgKQgJgPgWgDQABgEALgFQAKgFgCgLIirgDIABgJICNACIAZACQAOgBAIgJQAHgFANACQgGgDgSACQgRABgIgIIDUgTQARAQAcgHQAkgKAKACQgBANgMABQgPADgCABQABAEATAHQAPAGgIARQgkgQg5AGQhXAIgPAAQAkAXAcgJQAZgIAIANQAGAIAAAXQACBQgEAwQgCAcAKAMQALANAcgCQgEACgWAFQgQADgFALQgRAPgbADIgwABIgRABQgNAGgTAAIggAAIgUAAQhpAAhGgFg");
	this.shape_35.setTransform(84.0414,134.0771);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6E353E").s().p("AgNgJQAGACAMABQAKAEgBAMIgDAAQgTAAgFgTg");
	this.shape_36.setTransform(178.6262,160.0049);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9DA6A5").s().p("AgLAAQgBgHAJgFIAJAHQAFAEABAFIgQAJIgHgNg");
	this.shape_37.setTransform(124.7148,81.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#793130").s().p("AgYgHQAegIATAZIgEAAQgcAAgRgRg");
	this.shape_38.setTransform(17.5,193.4758);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#843441").s().p("AgtAGQgCgRAPABIAaAAQAFgBACgDIAQAAQAIgCAEgIQAHAGAEAMIAGATQgIgHgLAIQgMAIgFgBIgJACQgKACgJAAQgZAAgCgTg");
	this.shape_39.setTransform(147.4136,149.3891);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#802F30").s().p("AhKAEQAVgFADgDQAPgHAZgDIAogFQARgCALAKIAmABQhMAchzACQAFgLAQgFg");
	this.shape_40.setTransform(105.625,196.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#76333F").s().p("AgoAcQgHgEAAgMQACgNAAgGIABgWQAsAAAwATIgeAIQgQAEgKAJIgOAPQgFAEgFAAQgEAAgEgCg");
	this.shape_41.setTransform(160.1734,155.437);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#81323A").s().p("AgSAyQgWgWADgZQADgTAWgYQAGgEAMgMQALgGAMAOIAJAHIgCAnQgRACgFADQgKAGADARQAFAVgMAMQgNAAgFgJg");
	this.shape_42.setTransform(149.1764,155.5494);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#793130").s().p("AAAAQQgPgEhAgTQgFgQAGABQARAFA9AJQAyAHAbAQQADABACAGQgLABgNAAQgbAAgfgHg");
	this.shape_43.setTransform(29.8738,195.3252);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#612E2D").s().p("Ag2ASQgEgDACgCQAAgBAAgBQABgBAAAAQAAAAABAAQAAAAAAAAQASgIAigYQAegPAdAXQgMASgaAKIgsAPg");
	this.shape_44.setTransform(177.8046,176.317);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#742E2E").s().p("AhWBGQgFgKAIgHQATgMA2gbQAtgXAZgSQALgHAAgOQgBgQACgHQAUA0gEATQgFATglATQgagHgeAMQgiARgSAGIgLAFIgGABQgDAAgEgCg");
	this.shape_45.setTransform(178.9655,171.0893);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#983334").s().p("AgmArQgEgFgMgZIAThHQAQAAAZAYQAZAVAVgFQAEACgBACQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQgJALgGADQgJAGgLgCQgCAAgPAWQgKAOgOgdQgHAKAHAOQAIAQAAAGQgRgKgFgGg");
	this.shape_46.setTransform(46.3438,148.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#752E2E").s().p("AgWAeQgmgtgVgUQgJgJAGgJIAMgPQAbgBAHATQACAFAAAJQACAHAJACQAPADAZAMQAbAMAOADQAQADAGAEQALAHgCAQIgbgIQgQgFgMAGIAXAQQAOAJgMASQgrgDgkgkg");
	this.shape_47.setTransform(8.7523,184.9226);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6C2D2D").s().p("AkIBMQAZgWAngKIBFgOQBugVBMgWQBjgdBQgoQAWgFAJAUQgpAihIAVQhSASgoAOQh6AtisATg");
	this.shape_48.setTransform(148.775,186.0157);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9EA8B7").s().p("AAAB9Qh1gChfggIBDjXQAGAMACAaQACAbAFAMQAEAKgNAUQgOAVACAQQAEAhARAXQATAaAcABQAcAAA3AJQAxADAhgYQAEgDAGAHQAHAHAFgFIBtACIAAAKQiAAQhRAAIgEAAg");
	this.shape_49.setTransform(80.225,76.5507);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9A3334").s().p("ABdBFQgQgCgKgKIgIgOQgZAZgkgCQgsgJgWgCQgJAHgJgIQgUACgrgMQAYgJBWgVQBDgQAngWQAQgJAJgJQAKgLAEgPQAbA4ARA7QAAANgJAFIgUAEIgLAAIgRAAg");
	this.shape_50.setTransform(135.3763,142.1333);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#873031").s().p("AhMBOQgDgOAJgMQAQgUgGgKQgEgIgXgFQgSgEAEgNIASgJQAVgGANgSQAJgOAGgYQADgKADgDQAEgFAIAAIAYAQQAEAGAKAFIAPAJIAgALQATAGAKAMQAIAVgGAQQgGAPgUAOQgaARglASIhBAdQgSgGgEgOg");
	this.shape_51.setTransform(176.3596,167.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#903233").s().p("AAVA9QgagGgzAGQg2AHgZgDIgpgGQgUgFgNgQIAfhiQAKAAAEAJIAGAQQgFggAVAAIAjAAQACAoAQAQQAPAOAnADQBHAHAxAJQBCANA7AWQg0ALg0AAQgrAAgqgHg");
	this.shape_52.setTransform(58.775,155.7728);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#692D2D").s().p("ABDBHQiIgBh2gdQg4gPgZgFQgtgKglAAIgSgBQgNgGgmgKIgEgJQABgGgEgEIgIgHIgQgMQgJgHAGgKQAEgJAMAAQAHgBAOADIARAFQAKADAHAAQAiADA6ARQBAASAcAEQA5AIBWAHQAJABAVgBQAQADADATQgbAPgsgHQgygHgMADQBsALCMAAQBGAAB5gEIgRgFQgEgVAZAAQAQAAA3gEQArgEAbAEQAMAFgBAIQgBAGgJAJQgJAJgSAEQgWAGgGADIiiAOQhbAHg/AAIgIAAgAFxAYIgLAEIALAAQAEgCgDgDIgEgDIADAEg");
	this.shape_53.setTransform(56.9245,193.4223);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#883131").s().p("AAzB9QgXgBgggOQgMgFgsgbQghgUgZgEQgEgGgLgIQgMgJgEgFQAqhSBbgYQARgFApgSQAmgQAXgFQAMgBANAHQAIAEANAKQADAHgEAEIgKAGQgNAEgGAWQgNAngngDQAGAEAAAGQAAALgMAMQgWAZACASQACATAeAPQAPAIgHAPQgLARgQAAIgDAAg");
	this.shape_54.setTransform(16.4981,175.4174);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#812F30").s().p("Ai9BnQgIgDADgKIANgCQAHgBABgCQABgNgNAAQgQgBgDgHIBGgaIhJgCQAUgRATADQATAEgBgIQgFgeAYgEQAlgHACgCQAEAEAJgBQAKgBAEACQAPADAGgBQANgJADgTQAEgcACgDQACgMACgEQADgJAHgEQAPgBAKALQAGAHADALIAEAWIAngRQAXgJASAGQALAFAnAFQAgAEAQAQQgPArgMARQgJANgHAEQgKAHgOgFQgHgJgQAGQgPAGgHgIQAHgIACgFQADgJgMgIQgMgIgEgBQgHgCgIAJQgPAOgeAEQgfAEgFARQgMAkgVAAQgRABgdgWQACAZgWAQQgWAPgnAEIgNgGg");
	this.shape_55.setTransform(153.925,162.196);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A2AAB2").s().p("ABxCBQgDgNgDgFQgMgdgigUQgjgVgdAGQgVAEgLgGQgKgHgDgSQgCgQgMgEIgXgBQADgKgWgGQgTgGANgTQgEgBgGADIgJADQgSAGgIgBQgPgBgEgUIBUgPQAwgJAigLQAQgMAggIQAogMAJgEIAKgJIBMC+QgIABgMgLQgMgJgIAHQgKAJABARQAAAEAFAZQABAGAJAKQAFAJgOAGQgGADgEAAQgGAAgDgFg");
	this.shape_56.setTransform(125.75,123.1363);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A03436").s().p("AgZDDQgcgYgMg2QgJgtgBgYQgCglAOgbQAJgSgBgKQAAgLgNgOIgRgUQgHgRAcgHQAEgBAAgHQAAgGgEAAQgngGASgsQAGgPgNgEQgOgFACgHQAKgLAPAGQAUAHAFgCQAWAjAUA2IAhBbIBVDlQgTAMgcACIgTABQgoAAgZgVg");
	this.shape_57.setTransform(100.6375,23.0367);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A13436").s().p("Ah5CIQACgPgBgzQAAgqAGgZQADgNAAgIQgBgeADgHQAEgHAXgMQgDgDgSgGQgOgEgDgMIAsgNQAagIASgEQAOgDAEgCQAJgFADgKIAJgJQAGgLALACIA4CIQAfBOALA9QACAJgLAFQgqAGgPAEQgfAGgXAMIhsAIQgQgOABgNg");
	this.shape_58.setTransform(123.4874,98.4527);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#9BA6B2").s().p("AAGDHQgdgTgEgjQAAgqgBgWIADgyQABgfgLgSQgNgeAhgXQAGgEAIgCIAOgFQAKgCAAgLQAAgJgLgDIgMgBQgSgEgGgEQgMgGABgNQABgNAOgBIAVgBQALgDAQAFQgRgGgIgGQgLgIgGgNQgZgLgpAAQg6ABgIgBIgygBIABgQQAlAKA7ABQBTAAAMABQANAEAWAAIARAAQgFgCgFgEQAMgGAPAAQAKgBATACQgHAMAIAFQAFAEAMAFQgDAGgMACQgNACgEAIQAYAGAIAUQAGAOAAAaQAAAZADAhIAGA5QADAfAHANQAMAUAdAAQAUAAgBAUIAAASQgCAJgJAEIgRAJQgJAGACAIQAIAegSAHQgaACgMADQgbAJgaAAQgdAAgagLg");
	this.shape_59.setTransform(90.0774,66.4262);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#98A7B5").s().p("AAXDQQgPAAhJgHQgpgEgTghQgUgiAOgvQAGgXADgkIAFg6QAQhPAghbQAkgEAzABIBYADQALAMgHAFQgDACgNACQgPADgXgBIgmAAQgRAAgHABQgOADgFALQgFALAHAMIAOAVQAEAIAFACQApAZgOAvIABANIACAWQAEALAMADQALACAIgHQAFgEAIgLIAHgOQAEgGAKACQAOARAAAaQAAAPgCAfQgBAuADARQAFAiAUAYQAAALgIADIgRAFQgiAIgrAAIgNAAg");
	this.shape_60.setTransform(77.4239,67.5248);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A1AAB3").s().p("AheDfQgFgHAFgGQAdgBALgfQAPgoAIgHQAGgFgFgIQgFgGgJgDQgZgIgMgWQgJgQgDgcIgHgyQgDgeABgWQABgogWgaQgdgjAwAEIACgBQgPgDgFgDQgJgGAQgPIBHgNQAWgWAYAHQAGAkAVAzQAdBIAEANQAGASAgBRQAYA9AJApQAAAEABAJQACAJgBAEQgEAJgJAAIhsAYQg5ALgvAAIgEAAg");
	this.shape_61.setTransform(111.036,65.1807);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9DA7B0").s().p("AiSCFQACgOAQgEIADgBQgYgCgFgSIAAgjIgBhrQAAgWgIgKQgJgLgVABQgGABgHgCQgPgBgGgDQgKgFAAgKQgBgMALgDQACgBASgCIBOgJQAsgCAiAKQAUAEAKAFQAOAHAGAQQADAMAKAEQAIAEAOAAQBVADAnBJQgFgcgBgNQAAgWASgMQALgHALAKIASARQALApARAWQADAWgMAPQgJAMgVAJQh3AzhhAEIgTABQgKABgIAFQgLANgUgDQgbgEgHADIgQACIgEAAQgEAAgDgFg");
	this.shape_62.setTransform(122.1962,134.4992);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#9CA9B6").s().p("AjLCdQgIgFgfgfQATgnAShAIAdhpIALgmIAKgnQATATAlAKIA8ARQAxAQBKAAIB+gBIANAAQACAOgBADQgCADgMgBIAAAAQAIAEgBALQAAAOAMANQANAOAAALQADAjgTAiQgEAHglAxQgGAHgKABQgJABgJgEQgOgHgBgYQAAgKAEgMIAHgWQAEgQgFgLQgFgLgQgDQgNgDgHAJQgDAEgEARQgeBqhugjQgdgKgkAVQgjAVgIAgQgNAGgNAAQgOAAgNgIgACjhTQAHABAQgCIglAAIAOABg");
	this.shape_63.setTransform(66.97,130.4018);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#973335").s().p("AiADtQgTgBgJgDQgPgEgIgNQAGgxAWhKQAehiAFgXQAHghAQgyIAZhTQAHgZANgLQAPgLAZAGQALADAcgEQAYAAALAUQgSAGgEASQgFASAMASQAMARABAGQAEAMgKAMQgDAEAAAFQAAAFADADQAUAVgEAeQgDAQgLAhQgIAnAMAuQAGAXAYA5QAFANAPACIAbADQAIABASAAQAOADgCAVQgMAGgWADQgcADgHACIgdABQgRABgMAEQgNADgiAAg");
	this.shape_64.setTransform(88.5125,23.8471);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#782E2E").s().p("ACpC0IgSgBQAGgSgQAAQgTgBAAgHQgMgMgRgCQgMgBgTAEQhMANhrAAQh6gCg+AAQgPAAhPgJQg5gGglAIQgPAEgXgQQg+grg/ACQgXAAgMgYQgLgdgIgLQgKgOAFgUQAFgTAPgRQAggkAbgBQAbAAAjAhQAVAUAXABQAkACBFARQBFAPAiACQAxADBiAJQBWAEA+gOQAYgGBBgDQAmgDBSgMQBNgOArgBQARgBAagLQAhgNAJgDQAPgFAggHQAagKAIgaQADgLAKACIASAFQAOAFAGABQALAAAFgKQANgaAjgOQAygTAHgFQALgJAMAEQALAEADALQAEAOAOAJQAUANACADQgBAIgMAOQgIAUgPAYIgcApIgIAMQgFAFgFABQghAGgZASQgNAKgXAIQgJADghAKQh1AigfAIQgtAMgpAIIAIABQAGAQgKAGIgVAHQgGACgJAAQAOABAJAEQAEAEgBAEIgCAEQgaAMgsgDQgHAEgIAAIgDAAgADIB/QgBABAAAAQgBABAAAAQAAABAAAAQAAABABABQAEAEgDgGQAHAAAWgGIgdADg");
	this.shape_65.setTransform(96.5524,177.7138);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9A3336").s().p("Ah9C7QhBgCgzgKQgugJgWgHQgngLgSgeQAGguAVhHQAbhaAGgZQACgKAFgPIAJgZQALgFAOACIAYAFQBTAUBngBQBCgBB3gMQBKgDBogYQAbgGAMAFQAKAOgIAJQgEADgQAGQgrAQgpAFIgNAEIgfACIggABIgJAAQgFABAKAHQADAKgGAIQgJAHgPgEQgMgEgEgNQACgEgCgEIgDgDQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAJgKAMQAAAEAGAHQAGAGgBAGQgaBFAlAtQADAEACAJQAHAdAAANQABAYgPAQIgIAGQA+gEBCgVQASgBAjgHQAfgEAWAFQAHADAFAGQgCANgLAGQgFADgQACIhBAOQgoAIgaACQgoAJhCADQhRAEgXADIhcABIgZAAg");
	this.shape_66.setTransform(88.025,102.1429);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#893131").s().p("AiXChQgQgZgbgLQgVgJgjgEIg7gQQgkgKgaAJQgJADgEgCQgQgLgogPQglgOgSgOQgEgPgPAFQgeAFgFAAQgfgIgNgQQATgNAjgHQAtgJAMgEQBmAcBWgUQASgEAkAHQBMAPAzgLQgsgQg9gIQgegEhTgGQgggDgPgaQgOgZAJgkQAYgUAVgFIAOAAQBKATBlAGICwAHQAXAHARABQAVAAATgJQAJgCAJADQALAFAbgDQAZgDAOAJQAGAEAGgKQAGgNAEgEQAGgFALgBQAcAJAGAAQASABALgTQAOgKAZABQAnAHATAHQAJAEgFAKQgEALAFABQAKADAEgNQAFgOAGgBQATAAAoADQAiAAAXgQQAFgEAGAFQAFAFACAIQgEAMAKAhQAKAegPARQgCADAHAGIAOAIQARAMgPAMIghAMQgUAHgDAWQgBAJgLgCIgUgDIAUADQANACAHAGQgFANgNAGQgHADgRACQATANAAAIQgBAKgZAEQg0gBguALQgPADgLgDQgLgEgJgMIgKgHQgOgFgJAIQgEADgJARQgTAkgqAIQgqAHgkgaQAPg0gvgRQgQgGgcASQgbATgFATQgGAYgMAEQgMAEgNgSQgJgMgJACIgPAJQgaAMgIACQgUAGgSgIQgKgFgNAKQgPAMgGAAIgFABIgHgBg");
	this.shape_67.setTransform(86.139,161.6602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.9,200.6);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image_2();
	this.instance.setTransform(0,0,0.2491,0.2491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.3,199.3);


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

	// Layer 1
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.8,198.9);


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
	this.instance = new lib.Image_3();
	this.instance.setTransform(0,0,0.1191,0.1191);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.5,186.6);


(lib.Symbol14_1 = function(mode,startPosition,loop,reversed) {
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
		/* _root.p_mc1.b1.enabled=false;
		_root.p_mc2.b2.enabled=false;
		_root.p_mc3.b3.enabled=false;
		_root.b4.enabled=false;
		_root.b5.enabled=false;
		_root.b6.enabled=false;
		_root.b7.enabled=false;
		_root.b8.enabled=false;*/
		this.stop();
	}
	this.frame_287 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(286).call(this.frame_287).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.sound();
	this.instance_1.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


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
	this.instance = new lib.Image_1();
	this.instance.setTransform(0,0,0.2272,0.2272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.5,140);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_3
	this.instance = new lib.Image_16();
	this.instance.setTransform(0,0,0.2347,0.2348);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,17.2,11.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_3
	this.instance = new lib.Image_17();
	this.instance.setTransform(0,0,0.2347,0.2348);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,17.2,11.3), null);


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
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b6 = new lib.Symbol8();
	this.b6.name = "b6";
	this.b6.setTransform(99.6,99.6,1,1,0,0,0,99.6,99.6);
	new cjs.ButtonHelper(this.b6, 0, 1, 1);

	this.instance = new lib.Image_2();
	this.instance.setTransform(0,0,0.2491,0.2491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b6}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.3,199.3);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b9 = new lib.Symbol6();
	this.b9.name = "b9";
	this.b9.setTransform(102.4,99.4,1,1,0,0,0,102.4,99.4);
	new cjs.ButtonHelper(this.b9, 0, 1, 1);

	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b9}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,204.8,198.9);


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

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b4 = new lib.Symbol4();
	this.b4.name = "b4";
	this.b4.setTransform(72.7,70,1,1,0,0,0,72.7,70);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.instance = new lib.Image_1();
	this.instance.setTransform(0,0,0.2272,0.2272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.5,140);


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
	this.frame_0 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b2 = new lib.Symbol2();
	this.b2.name = "b2";
	this.b2.setTransform(95.3,93.3,1,1,0,0,0,95.3,93.3);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.instance = new lib.Image_3();
	this.instance.setTransform(0,0,0.1191,0.1191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,190.5,186.6);


// stage content:
(lib.star8 = function(mode,startPosition,loop,reversed) {
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
		/* var count:Number = new Number();
		count = 0;
		fscommand("fullscreen", "true");*/
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.star_mc1.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.correct_mc.play();
		this.correct1.play();
		var my2=createjs.Sound.createInstance("yes");
		    this.my2;
		     my2.play();
		count= count+1;
		this.star_mc1.play();
		this.total=count;
		this.star_mc1.mouseEnabled=false;
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.star_mc2.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.correct_mc.play();
		this.correct2.play();
		var my3=createjs.Sound.createInstance("yes");
		    this.my3;
		     my3.play();
		count= count+1;
		this.star_mc2.play();
		this.total=count;
		this.star_mc2.mouseEnabled=false;
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.star_mc3.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			this.correct_mc.play();
		this.correct3.play();
		var my4=createjs.Sound.createInstance("yes");
		    this.my4;
		     my4.play();
		count= count+1;
		this.star_mc3.play();
		this.total=count;
		this.star_mc3.mouseEnabled=false;
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.star_mc4.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			this.correct_mc.play();
		this.correct4.play();
		var my5=createjs.Sound.createInstance("yes");
		    this.my5;
		     my5.play();
		count= count+1;
		this.star_mc4.play();
		this.total=count;
		this.star_mc4.mouseEnabled=false;
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b1.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this.wrong1.play();
			var my9=createjs.Sound.createInstance("wro");
		this.my9;
		my9.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b3.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.wrong2.play();
			var my10=createjs.Sound.createInstance("wro");
		this.my10;
		my10.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.wrong3.play();
			var my11=createjs.Sound.createInstance("wro");
		this.my11;
		my11.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b8.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			this.wrong4.play();
			var my12=createjs.Sound.createInstance("wro");
		this.my12;
		my12.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b7.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			this.wrong5.play();
			var my13=createjs.Sound.createInstance("wro");
		this.my13;
		my13.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		this.b19.addEventListener("click", fl_MouseClickHandler_19.bind(this));
		
		function fl_MouseClickHandler_19() {
			
			//this.wrong3.play();
			var my20=createjs.Sound.createInstance("intro");
		this.my20;
		my20.play();
			
			
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
	this.wrong1 = new lib.Symbol10copy();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(982.95,527.75,1,1,0,0,0,536.8,57.7);

	this.wrong2 = new lib.Symbol10copy();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1497.4,604.5,1,1,0,0,0,536.8,57.7);

	this.correct2 = new lib.Symbol14_1();
	this.correct2.name = "correct2";
	this.correct2.setTransform(1725.85,594.05,1,1,0,0,0,536.8,57.7);

	this.wrong3 = new lib.Symbol10copy();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(2008.35,604.5,1,1,0,0,0,536.8,57.7);

	this.correct3 = new lib.Symbol14_1();
	this.correct3.name = "correct3";
	this.correct3.setTransform(1080.3,874.8,1,1,0,0,0,536.8,57.7);

	this.wrong4 = new lib.Symbol10copy();
	this.wrong4.name = "wrong4";
	this.wrong4.setTransform(1279.35,861.45,1,1,0,0,0,536.8,57.7);

	this.wrong5 = new lib.Symbol10copy();
	this.wrong5.name = "wrong5";
	this.wrong5.setTransform(1609.05,834.7,1,1,0,0,0,536.8,57.7);

	this.correct4 = new lib.Symbol14_1();
	this.correct4.name = "correct4";
	this.correct4.setTransform(1827,814.7,1,1,0,0,0,536.8,57.7);

	this.correct_mc = new lib.Symbol10copy();
	this.correct_mc.name = "correct_mc";
	this.correct_mc.setTransform(1398,901,1,1,0,0,0,536.8,57.7);

	this.correct_mc_1 = new lib.Symbol10copy();
	this.correct_mc_1.name = "correct_mc_1";
	this.correct_mc_1.setTransform(-47.15,842.15,1,1,0,0,0,536.8,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correct_mc_1},{t:this.correct_mc},{t:this.correct4},{t:this.wrong5},{t:this.wrong4},{t:this.correct3},{t:this.wrong3},{t:this.correct2},{t:this.wrong2},{t:this.wrong1}]}).wait(1));

	// Layer_1
	this.instance = new lib.Symbol14_1();
	this.instance.setTransform(-116.35,79.85,1,1,0,0,0,16,66);

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

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape_29.setTransform(283.4166,79.1272,0.64,0.64);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_30.setTransform(178.6558,109.0625,0.64,0.64);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_31.setTransform(178.6912,109.0449,0.64,0.64);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_32.setTransform(165.3121,110.7744,0.64,0.64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_33.setTransform(165.2993,110.7264,0.64,0.64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_34.setTransform(161.579,101.6426,0.64,0.64);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_35.setTransform(161.5686,101.6905,0.64,0.64);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_36.setTransform(160.3863,107.2709,0.64,0.64);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_37.setTransform(160.3264,107.1078,0.64,0.64);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_38.setTransform(165.5871,111.0464,0.64,0.64);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_39.setTransform(165.5713,110.9824,0.64,0.64);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_40.setTransform(161.8332,101.9146,0.64,0.64);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_41.setTransform(161.8267,101.9465,0.64,0.64);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_42.setTransform(160.6263,107.5436,0.64,0.64);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_43.setTransform(160.5943,107.3949,0.64,0.64);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_44.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_45.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_46.setTransform(152.8439,93.9269,0.64,0.64);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_47.setTransform(142.5241,108.2465,0.64,0.64);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_48.setTransform(153.6438,121.5582,0.64,0.64);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_49.setTransform(146.492,113.1584,0.64,0.64);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_50.setTransform(145.788,103.1426,0.64,0.64);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_51.setTransform(152.7959,93.7509,0.64,0.64);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_52.setTransform(146.188,96.3908,0.64,0.64);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_53.setTransform(146.972,119.3822,0.64,0.64);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_54.setTransform(246.2816,101.9427,0.64,0.64);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_55.setTransform(280.4567,89.839,0.64,0.64);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_56.setTransform(279.0807,95.4842,0.64,0.64);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_57.setTransform(276.7448,95.1002,0.64,0.64);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_58.setTransform(279.6567,93.8149,0.64,0.64);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_59.setTransform(277.9128,93.0949,0.64,0.64);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_60.setTransform(273.1609,86.2311,0.64,0.64);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_61.setTransform(275.5186,85.3751,0.64,0.64);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_62.setTransform(277.8648,85.3875,0.64,0.64);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_63.setTransform(277.8968,87.191,0.64,0.64);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_64.setTransform(277.6568,87.175,0.64,0.64);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_65.setTransform(279.6727,86.791,0.64,0.64);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_66.setTransform(277.5128,86.4532,0.64,0.64);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_67.setTransform(274.2009,87.079,0.64,0.64);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_68.setTransform(273.7529,88.823,0.64,0.64);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_69.setTransform(272.2391,87.7586,0.64,0.64);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_70.setTransform(280.2967,85.7107,0.64,0.64);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_71.setTransform(281.5092,90.8709,0.64,0.64);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_72.setTransform(275.0688,97.5748,0.64,0.64);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_73.setTransform(274.7328,95.8019,0.64,0.64);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_74.setTransform(274.3115,92.9424,0.64,0.64);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_75.setTransform(279.0327,94.2869,0.64,0.64);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_76.setTransform(279.8487,87.399,0.64,0.64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_77.setTransform(279.4967,87.287,0.64,0.64);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_78.setTransform(279.2087,87.335,0.64,0.64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_79.setTransform(278.1208,87.335,0.64,0.64);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_80.setTransform(277.3848,87.335,0.64,0.64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_81.setTransform(279.6087,89.207,0.64,0.64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_82.setTransform(277.8248,89.335,0.64,0.64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_83.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_84.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_85.setTransform(277.7048,88.663,0.64,0.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_86.setTransform(277.7208,88.6775,0.64,0.64);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_87.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_88.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_89.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_90.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_91.setTransform(273.7849,90.7589,0.64,0.64);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_92.setTransform(275.4218,101.4147,0.64,0.64);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_93.setTransform(275.3368,99.6707,0.64,0.64);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_94.setTransform(276.1848,113.6665,0.64,0.64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_95.setTransform(276.2141,111.0594,0.64,0.64);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_96.setTransform(276.0894,108.5634,0.64,0.64);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_97.setTransform(275.5475,105.9926,0.64,0.64);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_98.setTransform(275.4808,103.3677,0.64,0.64);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_99.setTransform(277.0452,98.7787,0.64,0.64);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_100.setTransform(277.0416,98.7427,0.64,0.64);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_101.setTransform(273.4675,98.0068,0.64,0.64);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_102.setTransform(271.65,107.4231,0.64,0.64);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_103.setTransform(198.4915,85.4649,0.64,0.64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_104.setTransform(256.3773,86.935,0.64,0.64);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_105.setTransform(252.7,97.7828,0.64,0.64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_106.setTransform(251.6915,109.2029,0.64,0.64);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_107.setTransform(243.6916,104.8119,0.64,0.64);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_108.setTransform(243.9776,100.4032,0.64,0.64);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_109.setTransform(244.8995,102.8634,0.64,0.64);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_110.setTransform(246.4095,99.8175,0.64,0.64);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_111.setTransform(247.1295,96.6048,0.64,0.64);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_112.setTransform(247.7695,93.9296,0.64,0.64);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_113.setTransform(243.9136,110.4605,0.64,0.64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_114.setTransform(244.6976,107.1773,0.64,0.64);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_115.setTransform(245.4816,103.6574,0.64,0.64);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_116.setTransform(240.6977,114.9793,0.64,0.64);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_117.setTransform(247.1455,90.9365,0.64,0.64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_118.setTransform(243.4016,102.9986,0.64,0.64);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_119.setTransform(243.3856,102.9666,0.64,0.64);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_120.setTransform(240.5697,114.9823,0.64,0.64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_121.setTransform(240.5712,114.9807,0.64,0.64);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_122.setTransform(247.1295,90.8951,0.64,0.64);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_123.setTransform(247.1455,90.9029,0.64,0.64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_124.setTransform(244.3674,104.4886,0.64,0.64);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_125.setTransform(244.3456,104.4306,0.64,0.64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_126.setTransform(198.3787,82.2494,0.64,0.64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_127.setTransform(203.5032,87.9395,0.64,0.64);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_128.setTransform(200.2667,84.0391,0.64,0.64);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_129.setTransform(198.603,83.7831,0.64,0.64);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_130.setTransform(196.5708,84.1831,0.64,0.64);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_131.setTransform(196.5548,84.1671,0.64,0.64);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_132.setTransform(198.7635,89.4957,0.64,0.64);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_133.setTransform(197.3068,88.919,0.64,0.64);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_134.setTransform(198.5974,88.551,0.64,0.64);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_135.setTransform(200.0267,87.815,0.64,0.64);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_136.setTransform(197.3068,87.911,0.64,0.64);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_137.setTransform(200.0267,87.783,0.64,0.64);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_138.setTransform(197.3228,87.895,0.64,0.64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_139.setTransform(199.9734,87.5942,0.64,0.64);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_140.setTransform(197.2444,87.596,0.64,0.64);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_141.setTransform(200.132,86.8124,0.64,0.64);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_142.setTransform(197.0401,86.9958,0.64,0.64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_143.setTransform(198.5048,87.23,0.64,0.64);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_144.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_145.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgUiSIADA/IgBANIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAg2g7IAAACIAkgNgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_146.setTransform(226.81,105.2226,0.64,0.64);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_147.setTransform(226.778,105.2546,0.64,0.64);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_148.setTransform(213.7224,108.7265,0.64,0.64);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_149.setTransform(213.7211,108.7409,0.64,0.64);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_150.setTransform(260.8892,98.9027,0.64,0.64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_151.setTransform(260.8732,98.9027,0.64,0.64);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_152.setTransform(261.1132,109.2225,0.64,0.64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_153.setTransform(261.1132,109.2545,0.64,0.64);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_154.setTransform(188.443,98.9027,0.64,0.64);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_155.setTransform(188.427,98.9027,0.64,0.64);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_156.setTransform(188.667,109.2225,0.64,0.64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_157.setTransform(188.667,109.2545,0.64,0.64);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_158.setTransform(164.6836,110.4139,0.64,0.64);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(165,110.8,0.64,0.64,0,0,0,8.6,5.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_159.setTransform(164.1577,101.3613,0.64,0.64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_160.setTransform(212.0744,96.6628,0.64,0.64);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_161.setTransform(215.7863,96.4228,0.64,0.64);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_162.setTransform(198.2027,91.3669,0.64,0.64);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_163.setTransform(198.3627,98.6467,0.64,0.64);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_164.setTransform(198.3947,97.2868,0.64,0.64);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_165.setTransform(198.4427,96.0388,0.64,0.64);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_166.setTransform(198.5033,93.4468,0.64,0.64);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_167.setTransform(204.3786,107.3185,0.64,0.64);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_168.setTransform(193.4829,106.6945,0.64,0.64);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_169.setTransform(205.6114,108.3768,0.64,0.64);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_170.setTransform(192.3621,107.494,0.64,0.64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_171.setTransform(194.3146,92.7269,0.64,0.64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_172.setTransform(192.6274,88.1745,0.64,0.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_173.setTransform(192.5954,88.1895,0.64,0.64);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_174.setTransform(198.492,95.7508,0.64,0.64);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_175.setTransform(198.4882,95.7028,0.64,0.64);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_176.setTransform(202.173,93.5482,0.64,0.64);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_177.setTransform(203.3626,96.7788,0.64,0.64);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_178.setTransform(203.3626,96.8108,0.64,0.64);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_179.setTransform(198.4747,93.5653,0.64,0.64);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_180.setTransform(198.6832,103.8215,0.64,0.64);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_181.setTransform(199.7867,109.9745,0.64,0.64);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_182.setTransform(199.8027,111.2544,0.64,0.64);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_183.setTransform(170.1554,120.7102,0.64,0.64);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_184.setTransform(161.9796,124.2941,0.64,0.64);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_185.setTransform(172.2194,95.9108,0.64,0.64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_186.setTransform(163.0196,90.439,0.64,0.64);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_187.setTransform(157.9157,127.174,0.64,0.64);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_188.setTransform(157.7077,87.991,0.64,0.64);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_189.setTransform(168.2675,125.5741,0.64,0.64);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_190.setTransform(169.5315,89.735,0.64,0.64);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_191.setTransform(142.7801,108.4385,0.64,0.64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_192.setTransform(178.9952,109.3825,0.64,0.64);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_193.setTransform(179.0283,109.3649,0.64,0.64);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_194.setTransform(165.5902,111.1434,0.64,0.64);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_195.setTransform(165.6353,111.0464,0.64,0.64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_196.setTransform(161.9072,102.5565,0.64,0.64);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_197.setTransform(161.9072,101.9943,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_198.setTransform(160.7498,107.4278,0.64,0.64);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_199.setTransform(160.6784,107.4278,0.64,0.64);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_200.setTransform(153.7398,121.6222,0.64,0.64);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_201.setTransform(146.652,113.2384,0.64,0.64);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_202.setTransform(145.996,103.4626,0.64,0.64);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_203.setTransform(153.1639,94.2469,0.64,0.64);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_204.setTransform(146.748,97.0788,0.64,0.64);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_205.setTransform(147.228,119.3822,0.64,0.64);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_206.setTransform(246.6175,102.2627,0.64,0.64);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_207.setTransform(280.8887,90.062,0.64,0.64);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_208.setTransform(277.0094,95.4625,0.64,0.64);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_209.setTransform(280.0543,94.172,0.64,0.64);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_210.setTransform(278.3001,93.5412,0.64,0.64);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_211.setTransform(273.6089,86.5031,0.64,0.64);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_212.setTransform(275.8706,85.5719,0.64,0.64);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_213.setTransform(278.0661,85.5454,0.64,0.64);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_214.setTransform(278.2328,87.511,0.64,0.64);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_215.setTransform(278.0088,87.495,0.64,0.64);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_216.setTransform(277.9116,86.7384,0.64,0.64);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_217.setTransform(274.6952,87.2215,0.64,0.64);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_218.setTransform(274.1045,89.1575,0.64,0.64);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_219.setTransform(272.6058,88.0927,0.64,0.64);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_220.setTransform(280.688,86.0128,0.64,0.64);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_221.setTransform(281.9253,91.1774,0.64,0.64);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_222.setTransform(275.4136,97.8811,0.64,0.64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_223.setTransform(275.0848,96.1217,0.64,0.64);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_224.setTransform(274.6475,93.2624,0.64,0.64);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_225.setTransform(279.3847,94.5669,0.64,0.64);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_226.setTransform(280.2007,87.703,0.64,0.64);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_227.setTransform(279.8327,87.607,0.64,0.64);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_228.setTransform(279.5287,87.639,0.64,0.64);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_229.setTransform(278.4568,87.639,0.64,0.64);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_230.setTransform(277.7208,87.639,0.64,0.64);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_231.setTransform(279.9474,89.527,0.64,0.64);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_232.setTransform(278.1688,89.655,0.64,0.64);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_233.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_234.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_235.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_236.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_237.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_238.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_239.setTransform(274.1323,91.0789,0.64,0.64);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_240.setTransform(275.7639,101.7352,0.64,0.64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_241.setTransform(275.6728,99.9907,0.64,0.64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_242.setTransform(276.5368,113.9705,0.64,0.64);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_243.setTransform(276.5519,111.3664,0.64,0.64);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_244.setTransform(276.4254,108.8834,0.64,0.64);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_245.setTransform(275.8941,106.3106,0.64,0.64);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_246.setTransform(275.8328,103.6877,0.64,0.64);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_247.setTransform(277.2707,98.9619,0.64,0.64);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_248.setTransform(277.2816,98.9187,0.64,0.64);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_249.setTransform(273.8009,98.3268,0.64,0.64);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_250.setTransform(271.9891,107.743,0.64,0.64);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_251.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_252.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_253.setTransform(247.7855,87.047,0.64,0.64);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_254.setTransform(253.0311,98.1028,0.64,0.64);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_255.setTransform(251.3084,109.3205,0.64,0.64);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_256.setTransform(244.0279,105.1319,0.64,0.64);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_257.setTransform(244.3296,100.7231,0.64,0.64);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_258.setTransform(245.2358,103.1834,0.64,0.64);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_259.setTransform(246.8649,100.1056,0.64,0.64);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_260.setTransform(245.9369,103.9455,0.64,0.64);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_261.setTransform(240.6197,115.2833,0.64,0.64);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_262.setTransform(247.4495,90.9527,0.64,0.64);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_263.setTransform(243.7056,103.3026,0.64,0.64);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_264.setTransform(243.7216,103.2866,0.64,0.64);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_265.setTransform(240.8257,115.2653,0.64,0.64);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_266.setTransform(240.8912,115.3896,0.64,0.64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_267.setTransform(247.5135,91.0868,0.64,0.64);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_268.setTransform(247.3875,90.8949,0.64,0.64);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_269.setTransform(244.6743,104.6256,0.64,0.64);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_270.setTransform(244.6656,104.7426,0.64,0.64);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_271.setTransform(227.146,105.5426,0.64,0.64);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_272.setTransform(227.13,105.5586,0.64,0.64);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_273.setTransform(214.0583,109.0465,0.64,0.64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_274.setTransform(214.0731,109.0609,0.64,0.64);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_275.setTransform(261.2252,99.2227,0.64,0.64);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_276.setTransform(261.2092,99.2227,0.64,0.64);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_277.setTransform(261.4492,109.5425,0.64,0.64);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_278.setTransform(261.4492,109.5585,0.64,0.64);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIAAgDIACACIgCABIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHgAAJAKg");
	this.shape_279.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_280.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_281.setTransform(189.003,109.5425,0.64,0.64);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_282.setTransform(189.003,109.5585,0.64,0.64);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_283.setTransform(165.0196,110.7339,0.64,0.64);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(165.35,111.1,0.64,0.64,0,0,0,8.5,5.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_284.setTransform(164.4937,101.6733,0.64,0.64);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_285.setTransform(212.4104,96.9828,0.64,0.64);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_286.setTransform(216.1223,96.7428,0.64,0.64);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_287.setTransform(200.1387,110.2945,0.64,0.64);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_288.setTransform(200.1387,111.5744,0.64,0.64);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_289.setTransform(170.3794,120.9502,0.64,0.64);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_290.setTransform(162.1236,124.5981,0.64,0.64);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_291.setTransform(172.2514,96.2308,0.64,0.64);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_292.setTransform(163.2276,90.7429,0.64,0.64);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_293.setTransform(157.9317,127.478,0.64,0.64);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_294.setTransform(157.9957,88.295,0.64,0.64);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_295.setTransform(168.5235,125.9261,0.64,0.64);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_296.setTransform(169.5315,90.055,0.64,0.64);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_297.setTransform(246.2176,124.7421,0.64,0.64);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_298.setTransform(246.2336,124.7101,0.64,0.64);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_299.setTransform(211.0504,124.0381,0.64,0.64);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_300.setTransform(211.0664,124.0381,0.64,0.64);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_301.setTransform(256.1533,136.882,0.64,0.64);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_302.setTransform(192.9069,134.5339,0.64,0.64);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_303.setTransform(213.6884,110.5691,0.64,0.64);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_304.setTransform(213.9707,110.8612,0.64,0.64);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_305.setTransform(213.9944,110.5345,0.64,0.64);

	this.instance_3 = new lib.BRIGHTEDGELOGO();
	this.instance_3.setTransform(1424,56,0.25,0.25);

	this.instance_4 = new lib.Symbol17();
	this.instance_4.setTransform(-87.05,-95.2,1,1,0,0,0,43.1,43.1);

	this.b8 = new lib.Symbol14();
	this.b8.name = "b8";
	this.b8.setTransform(759.85,686.75,1,1,0,0,0,75.8,65.2);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.b7 = new lib.Symbol13();
	this.b7.name = "b7";
	this.b7.setTransform(1077.15,686.8,1,1,0,0,0,85.5,70.2);
	new cjs.ButtonHelper(this.b7, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.b5 = new lib.Symbol12();
	this.b5.name = "b5";
	this.b5.setTransform(1482.7,415.65,1,1,0,0,0,76.3,98.9);
	new cjs.ButtonHelper(this.b5, 0, 1, 1);

	this.b3 = new lib.Symbol11();
	this.b3.name = "b3";
	this.b3.setTransform(981.6,415.65,1,1,0,0,0,47.4,110.7);
	new cjs.ButtonHelper(this.b3, 0, 1, 1);

	this.b1 = new lib.Symbol9();
	this.b1.name = "b1";
	this.b1.setTransform(449.55,415.7,1,1,0,0,0,93.9,100.3);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.star_mc4 = new lib.Symbol7();
	this.star_mc4.name = "star_mc4";
	this.star_mc4.setTransform(1382.7,704.1,1,1,0,0,0,99.6,99.6);

	this.star_mc3 = new lib.Symbol5();
	this.star_mc3.name = "star_mc3";
	this.star_mc3.setTransform(515.3,685,1,1,0,0,0,102.4,99.4);

	this.star_mc2 = new lib.Symbol3();
	this.star_mc2.name = "star_mc2";
	this.star_mc2.setTransform(1183.85,415.7,1,1,0,0,0,72.7,70);

	this.star_mc1 = new lib.Symbol1();
	this.star_mc1.name = "star_mc1";
	this.star_mc1.setTransform(742.6,415.7,1,1,0,0,0,95.3,93.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWATQgJgJAAgKQAAgJAJgIQAKgJAMAAQAOAAAJAIQAJAIAAAKQAAALgKAIQgJAIgNAAQgMAAgKgIg");
	this.shape_306.setTransform(1123.05,130.175);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgxAaghQAdgmAwAAQAiAAAWALQAeAOAAAfQAAAUgYARQgLAIghAOIhBAdQAKAKANAFQANAFARAAQAZAAATgKQAQgLAJABQAVAAAAAUQAAAVghAPQgbALgeAAQgvAAgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgHgVAAQgRAAgNAMg");
	this.shape_307.setTransform(1103.05,121.05);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigaApAAQAoAAAAA0IAAAOQgCAdgaAAQgYABAAgaIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMAAQgMAAgGgIg");
	this.shape_308.setTransform(1082.95,121.15);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_309.setTransform(1062.4053,121.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAHgIQAIgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_310.setTransform(1042.8,117.775);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("Ag9BVQgegZAAgrQAAglAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOAAgSAdQgQAdAAATQAAAVAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAIQAHAHAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_311.setTransform(1022.675,121.05);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAJgHALAAQALAAAHAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQAAALgHAIQgIAHgLAAQgLAAgIgHgAgRhjQgKgIABgMQgBgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_312.setTransform(1007.65,116.475);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhRCcQgHgHgBgLIABhJIAAhMQgBgqgCgfIgCgmQgBgQAIgMQAIgNAOAAQAMAAAGAHQAIAIAAAKIAAACQANgIAOgDQAMgDANAAQAtgBAUAmQAPAdABAuQAAAqgZAcQgaAegsAAQgPAAgTgEIgBBQQABALgIAHQgIAIgMAAQgLAAgIgIgAgLhdQgMAGgNALQACApAAAnQASAGAQAAQAUAAALgOQAKgNAAgVQAAgagCgLQgGgXgTAAQgMAAgNAFg");
	this.shape_313.setTransform(991.15,125.75);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("Ag2BmQgegLAAgVQAAgUAYABQAJAAARAFQAQAGAKAAQAmAAAAgQQABgKgcgNQgngRgMgHQgbgTAAgcQAAgnAqgOQAYgIAwAAQAUAAAJAFQANAHABATQgBAigSAAQgUAAgEgPQgIgCgIAAQguAAAAANQAAAHAbANQAnASAOAKQAcAUAAAZQAAAigfARQgaAOgjAAQgaAAgVgIg");
	this.shape_314.setTransform(952.85,120.95);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAJgHALAAQALAAAHAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQgBALgHAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_315.setTransform(938.25,116.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAuCPQgFgPgEgdQgDgcAAgSIAAgOIABgQIgBgQQgBgKgJAAQgWAAgRATQgJAKgPAcQAABGgHAPQgHAQgRAAQgLAAgIgHQgJgIAAgKQAAgEACgGQABgFABgwQAAgnABhbIAAgGIACggIgDgRIgCgSQAAgLAJgHQAIgIALABQATgBAHAWQAEALAAAZIgCAnIgBAmQAOgPARgGQAQgHASAAQAhAAAPASQALAOACAdIADAwIADAnQADAVAEAQIABAIQAAAKgIAIQgJAGgLABQgUgBgFgTg");
	this.shape_316.setTransform(921,115.75);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAHgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_317.setTransform(899.7,117.775);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_318.setTransform(862.625,120.825);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_319.setTransform(846.8,116.475);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("Ag3BmQgdgLAAgVQAAgUAXABQAKAAAQAFQASAGAIAAQAnAAABgQQAAgKgcgNQgngRgLgHQgcgTAAgcQAAgnApgOQAZgIAxAAQATAAAKAFQAMAHAAATQABAigUAAQgTAAgEgPQgHgCgJAAQguAAAAANQAAAHAcANQAmASAOAKQAcAUAAAZQAAAigfARQgZAOgkAAQgaAAgWgIg");
	this.shape_320.setTransform(813.4,120.95);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgSQAAgLAGgHQAHgIAMAAQAWAAAEAWQAhgaAqAAQAoAAAAA0IAAAOQgCAdgZAAQgZABAAgaIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMAAQgMAAgGgIg");
	this.shape_321.setTransform(794.7,121.15);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_322.setTransform(773.775,121.125);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_323.setTransform(753.15,117.775);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("Ag2BmQgegLAAgVQAAgUAYABQAIAAASAFQAQAGAKAAQAmAAAAgQQABgKgcgNQgngRgMgHQgbgTAAgcQAAgnAqgOQAYgIAwAAQAUAAAJAFQANAHABATQgBAigSAAQgUAAgEgPQgIgCgIAAQguAAAAANQAAAHAbANQAnASAOAKQAcAUAAAZQAAAigfARQgaAOgjAAQgaAAgVgIg");
	this.shape_324.setTransform(733.7,120.95);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgxAaghQAdgmAwAAQAiAAAWALQAeAOAAAfQAAAUgYARQgLAIghAOIhBAdQAKAKANAFQANAFARAAQAZAAATgKQAQgLAKABQAUAAAAAUQAAAVghAPQgbALgeAAQgvAAgdgWgAgaguQgNAMgIAYIAsgTQAZgMAQgKQgNgHgVAAQgRAAgNAMg");
	this.shape_325.setTransform(695.45,121.05);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAuCPQgFgPgEgdQgEgcAAgSIABgOIABgQIgBgQQgCgKgIAAQgWAAgRATQgJAKgPAcQAABGgHAPQgHAQgRAAQgLAAgIgHQgJgIAAgKIACgKQACgFAAgwQAAgnABhbIAAgGIABggIgCgRIgBgSQAAgLAIgHQAIgIALABQAUgBAGAWQAEALAAAZIgCAnIgBAmQAPgPAQgGQAPgHATAAQAhAAAPASQALAOACAdIACAwIAEAnQADAVAEAQIABAIQAAAKgIAIQgJAGgLABQgTgBgGgTg");
	this.shape_326.setTransform(673.4,115.75);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_327.setTransform(652.1,117.775);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_328.setTransform(615.9,117.775);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_329.setTransform(596.175,120.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_330.setTransform(574.9053,121.225);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANANQALAKAOAAQAQAAAMgMQAOgOABgWQADg+gkAAQgXgBgOAXg");
	this.shape_331.setTransform(553.8958,121.25);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AhXB3QgcgeAAgrQAAhAA4hEQAxg6AyAAIAQAAIALACQAJgIAMAAQAUAAAFAXQAEARAAAVQgBAKgFAIQgIAKgOAAQgRAAgJgSQgEgJgDgCQgEgBgMAAQgYAAggAmQgtA1AAAuQAAAWAOAPQAPAPATAAQATABATgLQAIgEAXgPQAPgKAHAAQAMAAAJAJQAHAHAAALQAAAMgKAIQg2Atg3AAQgrAAgfggg");
	this.shape_332.setTransform(531.55,116.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.star_mc1},{t:this.star_mc2},{t:this.star_mc3},{t:this.star_mc4},{t:this.b1},{t:this.b3},{t:this.b5},{t:this.b7},{t:this.b8},{t:this.instance_4},{t:this.instance_3},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.instance_2},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.instance_1},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Background
	this.correct1 = new lib.Symbol14_1();
	this.correct1.name = "correct1";
	this.correct1.setTransform(1279.35,566.65,1,1,0,0,0,536.8,57.7);

	this.total = new cjs.Text("", "bold 12px 'Comic Sans MS'", "#3C408C");
	this.total.name = "total";
	this.total.lineHeight = 7;
	this.total.lineWidth = 337;
	this.total.parent = this;
	this.total.setTransform(833.6,799.4);

	this.b19 = new lib.Symbol6_1();
	this.b19.name = "b19";
	this.b19.setTransform(1213.85,112.55,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b19, 0, 1, 1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_333.setTransform(960,540);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("EiH4BMcMAAAiY3MEPxAAAMAAACY3g");
	this.shape_334.setTransform(954.525,531.575);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_335.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.b19},{t:this.total},{t:this.correct1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(907.5,419,1012.5,675.4000000000001);
// library properties:
lib.properties = {
	id: 'A05FC83A7EA7F8428609B9B42BA617CB',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_0.png", id:"Image_0"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/Image_16.png", id:"Image_16"},
		{src:"images/Image_17.png", id:"Image_17"},
		{src:"images/Image_2.png", id:"Image_2"},
		{src:"images/Image_3.png", id:"Image_3"},
		{src:"images/Image_4.png", id:"Image_4"},
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/sound.png", id:"sound"},
		{src:"sounds/_7wav.mp3", id:"_7wav"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/fourwav.mp3", id:"fourwav"},
		{src:"sounds/one1wavcopy.mp3", id:"one1wavcopy"},
		{src:"sounds/threewav.mp3", id:"threewav"},
		{src:"sounds/two1wav.mp3", id:"two1wav"}
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
an.compositions['A05FC83A7EA7F8428609B9B42BA617CB'] = {
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