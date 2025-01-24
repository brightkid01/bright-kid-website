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
p.nominalBounds = new cjs.Rectangle(0,0,555,502);


(lib.Image_1 = function() {
	this.initialize(img.Image_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,248);


(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,118);


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
	this.frame_7 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoFEgIAWABQCHAACnjOIAcgjIgkgnQiZigABhwQgBhdCnh8QAYCgB1CXIAfAnIAYgfQCsjcCNgBQBtAAA4CnIgXgCQgxAAhbBCQhZBCg/BVIgeAoIAdAeQCnChC0AAQhgDDhqAAQhfABizioIgugrIgQAVQihD0hnAAQh3AAhyjBg");
	this.shape.setTransform(7.8,-23.9);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-72,103.6,96.2);


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
	this.frame_6 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00873C").s().p("Al8G2IgYg4Qg0h6gtg6Qgtg6g3gUQBdhiBOAAQBEAABRC1IAbA9QCTj3DljpQDnjqDbh9IAeAsQi7CNjiEhQjjEjh4D8IhAAsQhRA4gbAaQgMgpgmhdg");
	this.shape.setTransform(106.375,-15.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-72.6,166.6,114.39999999999999);


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

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;*/
		
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(340).call(this.frame_341).wait(2));

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
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.7928,0.7928);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,440,398);


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
	this.instance = new lib.Image_1();
	this.instance.setTransform(0,0,1.0936,1.0936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,344.5,271.2);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FAB14E","#F1633C"],[0.012,1],-18.1,0,18.2,0).s().p("AhzCnQhLglALiBQALh+BvgaQAfgHBKgFQBKgFAkgIIAJAAQgUAbACAZQADAbAdAMQgNATgyBUQgmBBggAfQg+A/g4AAQgXAAgWgKg");
	this.shape.setTransform(18.1547,17.7308);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,36.3,35.5), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FAB14E","#F1633C"],[0.012,1],-38.2,0,38.3,0).s().p("AlgDoQg1hJAoh/QAjhyBGg8QBHg9BqgoQBdgjBngLIAEAKQBLA1BSBMQBsBlABAoQAAA/iDBaQhnBGhWAeQhnAlhwAHIgkACQh5AAgrg6g");
	this.shape.setTransform(38.2067,28.9598);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(-0.1,0,76.6,57.9), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FAB14E","#F1633C"],[0.012,1],-33.6,0,33.7,0).s().p("Aj7CoQgxhFgQhFQgZhmAHhTQAKh7BRgGIAAAJQBIgbByA0QBGAhBjBHQA8AsA8BCQAQAQBYBoQg0AShLAfIh8A0QhRAYgqAPQhOAZggAkQhChAglg1g");
	this.shape.setTransform(33.6069,28.5244);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,67.3,57.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FAB14E","#F1633C"],[0.012,1],-90.9,0,91.1,0).s().p("AmFHzQCtjBBThgQB/iSBUhIQCVh/B0gCQhRgDh6gzQiIhAg7gaQg2gYiIgwQh7gshBggQgwgXhBgzIhrhRQgjgZhfgsQhVgogpghIAOgFQDchGDUgJQDdgKDYA5QC1AxDRBSQDHBPCzBbQDiB0hOC6QgcBDhMBdQhaBrgpAyQhwCLi8BrQiQBRjVBLQjNA9hvAoQjJBGhaBSQBLiPCRiqg");
	this.shape.setTransform(90.9911,81.2509);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,182,162.5), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FAB14E","#F1633C"],[0.012,1],-88.9,0,88.7,0).s().p("AtYKNIAEgDQgSACgOAAQBZgaBYhEQBAgzBYhfICSidQBVhWBJgsQCrhlBcgrQCkhNBygFQjkgGjAgtQjQgwi/hiQgqgWhyhaQhohSgXgHIgFggQAkAZA/gcQAigQBAggQApgNBAgMIBpgTQDlgtDRAaQBZALBzApIDCBHQCRAuA3AXQBsAuBIBEQCmCdi1CqQg4Azh0BNQh+BTgdAZQinCNiaBVQitBfi7AnQhjAUjgANQjRAMhtAbQAAAAAAAAQAAAAAAgBQAAAAABgBQABgBAAAAg");
	this.shape.setTransform(88.9581,65.6489);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.5,0.1,177,131.20000000000002), null);


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
	this.instance = new lib.sound();
	this.instance.setTransform(0,0,0.0977,0.0977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.5,81.5);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.1,0,15.2,0).s().p("AhhB3QgXgJgSgOIgNgMIAOALQASAOAXAIQAcAKAigSQAggRAYggQAhguAthJQAjg5ADAAQADgEADgBQAEgCACACQAEAEgGAIQgDAAgkA4QgvBHgkAuQgZAgghAQQgWALgTAAQgNAAgLgEgAiXBUIAAAAIAAAAgAiXBUIAAAAIAAAAgAiXBUIAAAAIAAAAg");
	this.shape.setTransform(302.917,146.842);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.2,0,15.2,0).s().p("AhlB1QgVgGgRgMIgMgKIAMAJQARAMAWAFQAaAIAigTQAfgSAYggQAjgrAwhHQAlg2ADAAQADgEAEgBQADgBACACQAFAEgIAIQgCAAgmA0QgzBFgkArQgZAgghARQgZANgUAAQgJAAgJgDgAiXBZIAAAAIAAAAgAiXBZIAAAAIAAAAgAiXBZIAAAAIAAAAg");
	this.shape_1.setTransform(302.7594,146.0746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.2,0,15.2,0).s().p("AhoB0QgUgFgQgJIgLgJIALAIQAQAKAUADQAZAGAhgVQAegSAaggQAigpA1hEQAngzADgBQADgDAEgBQADgBACACQAEAEgHAIQgDAAgoAxQg4BDgjAoQgbAfgfASQgbAPgUAAQgHAAgGgBgAiXBdIAAAAIAAAAg");
	this.shape_2.setTransform(302.5844,145.3131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.2,0,15.3,0).s().p("AhsByQgTgCgOgIIgLgGIALAGQAOAHATACQAXADAhgWQAcgTAcggIBbhoQApgwADgBQAEgDADAAQAEgBABACQAEAEgIAHQgDAAgpAuQhCBJgdAeQgcAfgeASQgdASgVAAIgIgBgAiYBiIAAAAIAAAAg");
	this.shape_3.setTransform(302.4057,144.5903);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.8,0,14.8,0).s().p("Ah0BwQgSAAgNgFQANAEASAAQAmACBIhMIBfhjQAqgtAEgBQAEgDADAAQAEgBABACQAEAFgJAGQgDAAiNCNQhGBGgoAAIgEAAg");
	this.shape_4.setTransform(302.726,143.8802);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.3,0,15.3,0).s().p("AiPBtIgJgDIAJADQAMACAQgCQAggDBMhLQA0gzAvgsQAtgpAEgBQAIgGAEAEQADAFgIAGQgEABgtAnQgwAqg1AzQhPBKgiAAIgMABQgJAAgHgCgAiYBqIAAAAIAAAAg");
	this.shape_5.setTransform(302.0409,143.1936);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.7,0,15,0).s().p("AiVBuQALAAAPgFQARgDAggaIA5g0QAygvA2gsQAtgmAFgBQAIgGAEAFQADAGgJAFQgEAAguAlQg3AqgzAuQgpAkgSAOQghAZgRADQgOADgKAAIgDAAg");
	this.shape_6.setTransform(302.2784,142.6145);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-16,0.1,14.8,0.1).s().p("AiABmQAOgGAfgbIA6g1QAzgsA5gqQAugiAGgCQAEgCAEAAQABAAABAAQAAAAABAAQAAAAABABQAAAAABABQADAEgKAGQgFABgwAhQg5AogzArIg8AzQggAagQAFQgLAEgIACIATgHg");
	this.shape_7.setTransform(302.3,142.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.4,0,15.5,0).s().p("Ah/BgQAMgHAggeQApgnARgOQBRhCBVgwQAKgFADAFQADAFgKAFQhWAshSBBIg8A0QggAbgNAHQgVANgHABQAHgBAUgOg");
	this.shape_8.setTransform(301.5596,141.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.4,0.1,15.5,0.1).s().p("AiCBbQAGgFAjgjQAigiAYgSQA0gqBAgkQAhgTAYgLQAKgFACAGQADAFgKAEQhaAnhUA/QgYARgjAiQgkAhgHAFIgZAVg");
	this.shape_9.setTransform(301.376,141.3988);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.5,0.1,15.5,0.1).s().p("AiHBXIAngsQAfgiAcgTQA1goBDghQAigRAZgKQAEgCAEABQADAAABADQACAFgKAEQgZAJgiAQQhEAfg1AmQgbASggAhIgpAqQgPAQgFAIQAFgIAOgRg");
	this.shape_10.setTransform(301.2792,140.9325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.5,0,15.6,0).s().p("AiKBRQAuhEAxghQA2gnBHgeQAjgPAagJQALgCABAFQABACgDADQgCACgEABQgaAIgkAOQhGAcg2AlQgzAggvBAQgPAXgDAKQACgKAPgXg");
	this.shape_11.setTransform(301.0625,140.6583);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.5,0,15.6,0).s().p("AiYBqQADgOAIgQQALgYAWgbQAcghAfgUQA4gmBJgaQAlgOAbgHQAKgDACAFQABAGgKADQgbAGglANQhJAYg3AkQgfATgdAgQgWAZgNAYQgIAPgEAOIgDAKIADgKg");
	this.shape_12.setTransform(300.8844,140.2471);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.6,0.6,15.6,0.6).s().p("AiSBNQAJgaAWgdQAagiAhgUQA5gkBMgXQAmgMAcgGQALgCABAFQABADgDACQgDADgEAAQgcAGgmAKQhMAVg5AiQggATgbAhQgXAbgKAZQgHASgDAQQACgQAHgSg");
	this.shape_13.setTransform(300.8036,139.2733);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.6,0.2,15.7,0.2).s().p("AibBqQABgTAFgUQAHgbAVgfQAagjAigTQA8gjBNgUQAngKAdgFQALgCABAGQABAGgLACQgcAEgnAJQhPARg6AhQghASgbAiQgWAdgIAbQgGATgBATIgBAKIABgKg");
	this.shape_14.setTransform(300.5542,139.3375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.7,0,15.8,0).s().p("AicBoQgBgVAEgWQAFgdAWggQAYgkAjgUQA9ghBRgRQApgIAdgEQALgBABAGQABACgEADQgDACgEAAQgeADgoAHQhQAOg9AgQgiASgZAiQgWAegGAdQgFAWAAAUIAAAQIAAgPg");
	this.shape_15.setTransform(300.3753,139.0923);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.8,0.2,15.9,0.2).s().p("AidBoQgBgXACgXQADggAVghQAYglAkgTQA/ghBTgNQAqgGAegCQAMgBABAGQAAAFgMACQgeABgpAGQhTAKg+AeQgjASgZAkQgVAegEAgQgEAXACAXIAAAOIgBgOg");
	this.shape_16.setTransform(300.1469,138.5304);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-16,0.2,16,0.2).s().p("AidBoQgDgZABgaQACgiAUgiQAXgmAlgTQBAgfBWgKQArgEAfgBQANAAAAAGQAAAGgLABQggAAgrADQhUAHhAAdQglARgXAkQgUAggCAiQgDAaADAZIABAPIgCgPg");
	this.shape_17.setTransform(299.85,138.0875);

	this.instance = new lib.Path_7();
	this.instance.setTransform(302.2,143.3,1,1,0,0,0,18.2,17.7);
	this.instance.alpha = 0.6992;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_18.setTransform(300.85,67.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_19.setTransform(295.7,66.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_20.setTransform(293.7,62.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_21.setTransform(290.1,60.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_22.setTransform(291.125,67.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_23.setTransform(298.05,70.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_24.setTransform(317.675,66.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_25.setTransform(307.975,70.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_26.setTransform(313.175,68.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_27.setTransform(310.725,65.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_28.setTransform(310.375,61.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_29.setTransform(306.025,66.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_30.setTransform(303.95,63.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_31.setTransform(305.375,59.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_32.setTransform(295.95,58.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_33.setTransform(287.025,64.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_34.setTransform(299.425,62.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_35.setTransform(284.825,55.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_36.setTransform(279.675,54.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgKAKAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_37.setTransform(277.675,51.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_38.setTransform(274.1,48.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_39.setTransform(275.1,55.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_40.setTransform(282.05,58.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_41.setTransform(301.65,54.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_42.setTransform(291.95,58.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_43.setTransform(297.15,57.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_44.setTransform(294.7,53.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_45.setTransform(294.35,49.65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQADgEADAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_46.setTransform(290,54.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_47.setTransform(287.925,51.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_48.setTransform(289.35,47.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_49.setTransform(279.925,47.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_50.setTransform(271,52.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_51.setTransform(283.4,51.05);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_52.setTransform(259.975,57.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_53.setTransform(254.825,56.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_54.setTransform(252.825,52.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_55.setTransform(249.25,50.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_56.setTransform(250.25,57.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_57.setTransform(257.2,60.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_58.setTransform(276.8,56.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_59.setTransform(267.1,60);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_60.setTransform(272.3,58.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_61.setTransform(269.85,55.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_62.setTransform(269.5,51.35);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_63.setTransform(265.15,56.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_64.setTransform(263.075,53.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_65.setTransform(264.5,49.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_66.setTransform(255.075,48.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_67.setTransform(246.15,54.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQAEgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_68.setTransform(258.55,52.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_69.setTransform(275.725,66.725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_70.setTransform(270.575,65.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_71.setTransform(268.575,62.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_72.setTransform(265,59.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_73.setTransform(266,66.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_74.setTransform(272.95,69.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_75.setTransform(292.55,65.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_76.setTransform(282.85,69.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_77.setTransform(288.05,68.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_78.setTransform(285.6,64.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_79.setTransform(285.25,60.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_80.setTransform(280.9,65.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_81.setTransform(278.825,62.35);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_82.setTransform(280.275,58.35);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_83.setTransform(270.825,58.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_84.setTransform(261.925,63.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_85.setTransform(274.3,62.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgCQAEgEADAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_86.setTransform(233.35,112.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_87.setTransform(228.2,111.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_88.setTransform(226.2,107.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_89.setTransform(222.625,105.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_90.setTransform(223.65,112.15);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_91.setTransform(230.575,115.575);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_92.setTransform(250.175,110.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQADgEADAAQAFAAADAEQADACAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_93.setTransform(240.475,114.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_94.setTransform(245.675,113.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAALgLAAQgDAAgDgDg");
	this.shape_95.setTransform(243.225,109.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_96.setTransform(242.875,106.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_97.setTransform(238.525,111.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_98.setTransform(236.45,107.95);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_99.setTransform(237.9,103.95);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_100.setTransform(228.45,103.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgCQADgEAEAAQAFAAADAEQADACAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_101.setTransform(219.55,109.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_102.setTransform(231.95,107.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_103.setTransform(218.525,91.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_104.setTransform(213.375,90.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_105.setTransform(211.35,87.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_106.setTransform(207.775,84.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_107.setTransform(208.8,91.575);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_108.setTransform(215.725,95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_109.setTransform(235.35,90.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQADgEADAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_110.setTransform(225.65,94.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_111.setTransform(230.85,93.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_112.setTransform(228.4,89.375);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_113.setTransform(228.025,85.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQADgEADAAQAFAAADAEQADACAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_114.setTransform(223.675,90.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_115.setTransform(221.625,87.35);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_116.setTransform(223.05,83.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_117.setTransform(213.6,83.15);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQACgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_118.setTransform(204.7,88.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_119.setTransform(217.1,87.05);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_120.setTransform(231.85,77.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_121.setTransform(226.7,76.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_122.setTransform(224.7,73.175);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_123.setTransform(221.1,70.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_124.setTransform(222.125,77.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_125.setTransform(229.05,80.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_126.setTransform(248.675,76.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_127.setTransform(238.975,80.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_128.setTransform(244.175,79.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_129.setTransform(241.725,75.375);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_130.setTransform(241.35,71.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_131.setTransform(237,76.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_132.setTransform(234.95,73.35);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_133.setTransform(236.375,69.35);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_134.setTransform(226.95,69.15);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_135.setTransform(218.025,74.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_136.setTransform(230.425,73.05);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_137.setTransform(241.7,64.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_138.setTransform(236.55,63.575);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_139.setTransform(234.525,60.175);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_140.setTransform(230.95,57.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_141.setTransform(231.975,64.55);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_142.setTransform(238.9,67.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_143.setTransform(258.525,63.375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_144.setTransform(248.825,67.275);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgKAKAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_145.setTransform(254.025,66.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_146.setTransform(251.575,62.35);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_147.setTransform(251.2,58.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_148.setTransform(246.85,63.675);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_149.setTransform(244.8,60.325);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_150.setTransform(246.225,56.35);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_151.setTransform(236.8,56.125);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_152.setTransform(227.875,61.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_153.setTransform(240.275,60.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_154.setTransform(231.75,100.45);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_155.setTransform(226.6,99.325);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_156.setTransform(224.6,95.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_157.setTransform(221.025,93.45);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_158.setTransform(222.05,100.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_159.setTransform(228.975,103.725);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_160.setTransform(248.575,99.125);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_161.setTransform(238.875,103.05);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_162.setTransform(244.075,101.85);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_163.setTransform(241.625,98.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_164.setTransform(241.275,94.375);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_165.setTransform(236.925,99.45);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_166.setTransform(234.85,96.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_167.setTransform(236.3,92.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_168.setTransform(226.85,91.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_169.setTransform(217.95,97.65);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_170.setTransform(230.35,95.775);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_171.setTransform(248.875,121.775);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_172.setTransform(243.725,120.65);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_173.setTransform(241.725,117.25);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_174.setTransform(238.15,114.775);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_175.setTransform(239.15,121.625);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_176.setTransform(246.1,125.05);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_177.setTransform(265.7,120.45);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_178.setTransform(256,124.35);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_179.setTransform(261.2,123.15);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_180.setTransform(258.75,119.425);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_181.setTransform(258.4,115.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgCQAEgEADAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_182.setTransform(254.05,120.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_183.setTransform(251.975,117.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_184.setTransform(253.4,113.425);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_185.setTransform(243.975,113.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_186.setTransform(235.05,118.975);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQACgDAEAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgEAAgCgDg");
	this.shape_187.setTransform(247.45,117.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_188.setTransform(303.55,128.675);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_189.setTransform(298.4,127.55);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_190.setTransform(296.375,124.15);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_191.setTransform(292.8,121.675);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgKAKAAQALAAAAAKQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_192.setTransform(293.825,128.55);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_193.setTransform(300.75,131.95);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_194.setTransform(320.375,127.35);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_195.setTransform(310.675,131.25);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_196.setTransform(315.875,130.075);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgKAKAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_197.setTransform(313.425,126.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_198.setTransform(313.05,122.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_199.setTransform(308.7,127.65);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_200.setTransform(306.65,124.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_201.setTransform(308.075,120.325);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQACgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgCgDg");
	this.shape_202.setTransform(298.65,120.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_203.setTransform(289.725,125.875);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_204.setTransform(302.125,124);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_205.setTransform(275.05,128.825);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_206.setTransform(269.9,127.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_207.setTransform(267.875,124.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_208.setTransform(264.3,121.825);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_209.setTransform(265.325,128.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_210.setTransform(272.25,132.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgCQADgEAEAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_211.setTransform(291.875,127.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_212.setTransform(282.175,131.425);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_213.setTransform(287.375,130.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_214.setTransform(284.925,126.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_215.setTransform(284.55,122.75);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_216.setTransform(280.2,127.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_217.setTransform(278.15,124.475);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_218.setTransform(279.575,120.475);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_219.setTransform(270.15,120.25);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_220.setTransform(261.225,126.025);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_221.setTransform(273.625,124.15);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQACgEAEAAQAFAAADAEQADACAAAEQAAAFgDADQgDADgFAAQgEAAgCgDg");
	this.shape_222.setTransform(289.3,116.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_223.setTransform(284.15,115.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_224.setTransform(282.15,112.275);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_225.setTransform(278.575,109.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_226.setTransform(279.6,116.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_227.setTransform(286.525,120.075);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_228.setTransform(306.125,115.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgCQADgEAEAAQAEAAAEAEQADACAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_229.setTransform(296.45,119.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_230.setTransform(301.65,118.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_231.setTransform(299.2,114.475);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_232.setTransform(298.825,110.75);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_233.setTransform(294.475,115.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_234.setTransform(292.4,112.45);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgDgDg");
	this.shape_235.setTransform(293.85,108.45);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_236.setTransform(284.4,108.25);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgCQADgEADAAQAFAAADAEQADACAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_237.setTransform(275.5,114);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_238.setTransform(287.9,112.15);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_239.setTransform(260.4,119.125);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FCEE35").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_240.setTransform(255.25,118);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_241.setTransform(253.25,114.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_242.setTransform(249.675,112.125);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_243.setTransform(250.7,118.975);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgKAKAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_244.setTransform(257.625,122.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_245.setTransform(277.225,117.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_246.setTransform(267.55,121.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_247.setTransform(272.725,120.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_248.setTransform(270.3,116.775);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAAEADQADAEAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_249.setTransform(269.925,113.05);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_250.setTransform(265.575,118.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_251.setTransform(263.5,114.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_252.setTransform(264.95,110.75);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FCEE35").s().p("AgHAIQgDgEAAgEQAAgDADgDQADgEAEAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_253.setTransform(255.5,110.55);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FCEE35").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_254.setTransform(246.6,116.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FCEE35").s().p("AgHAIQgDgDAAgFQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_255.setTransform(259,114.45);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_256.setTransform(292.4,79.525);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgEQADgDAEAAQAFAAADADQAEAEAAADQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_257.setTransform(286.75,78.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_258.setTransform(284.55,75.05);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_259.setTransform(280.65,72.625);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_260.setTransform(281.75,79.375);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_261.setTransform(289.35,82.725);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_262.setTransform(310.85,78.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_263.setTransform(300.225,82.05);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_264.setTransform(305.925,80.875);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgCQADgEAEAAQAFAAAEAEQADACAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_265.setTransform(303.25,77.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_266.setTransform(302.85,73.55);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_267.setTransform(298.075,78.525);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_268.setTransform(295.8,75.225);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_269.setTransform(297.375,71.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_270.setTransform(287.05,71.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_271.setTransform(277.25,76.75);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_272.setTransform(290.85,74.925);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_273.setTransform(297.4,104.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_274.setTransform(291.75,103.575);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_275.setTransform(289.55,100.225);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_276.setTransform(285.6,97.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_277.setTransform(286.725,104.55);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_278.setTransform(294.325,107.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_279.setTransform(315.825,103.375);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_280.setTransform(305.2,107.225);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_281.setTransform(310.9,106.05);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_282.setTransform(308.2,102.375);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_283.setTransform(307.8,98.725);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_284.setTransform(303.05,103.7);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_285.setTransform(300.8,100.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_286.setTransform(302.35,96.45);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_287.setTransform(292,96.25);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_288.setTransform(282.25,101.925);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_289.setTransform(295.825,100.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_290.setTransform(288.4,91.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgCQAEgEAEAAQAFAAADAEQAEACAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_291.setTransform(282.75,90.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_292.setTransform(280.55,87.35);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_293.setTransform(276.625,84.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_294.setTransform(277.75,91.65);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgDQAEgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_295.setTransform(285.35,95);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_296.setTransform(306.85,90.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_297.setTransform(296.2,94.35);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_298.setTransform(301.9,93.175);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_299.setTransform(299.225,89.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_300.setTransform(298.825,85.825);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_301.setTransform(294.05,90.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_302.setTransform(291.8,87.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_303.setTransform(293.375,83.575);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_304.setTransform(283.025,83.375);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_305.setTransform(273.25,89.05);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_306.setTransform(286.85,87.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_307.setTransform(256.25,78.875);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_308.setTransform(250.6,77.775);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_309.setTransform(248.4,74.425);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_310.setTransform(244.475,72);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_311.setTransform(245.6,78.75);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_312.setTransform(253.2,82.1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_313.setTransform(274.7,77.575);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_314.setTransform(264.075,81.425);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_315.setTransform(269.75,80.25);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgFAAgDgDg");
	this.shape_316.setTransform(267.1,76.575);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_317.setTransform(266.7,72.9);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_318.setTransform(261.9,77.875);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_319.setTransform(259.65,74.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_320.setTransform(261.225,70.65);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgCQADgEAEAAQAFAAADAEQAEACAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_321.setTransform(250.875,70.45);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_322.setTransform(241.1,76.125);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_323.setTransform(254.7,74.275);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgEQADgDAEAAQAFAAADADQAEAEAAADQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_324.setTransform(261.225,104.05);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_325.setTransform(255.6,102.95);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_326.setTransform(253.375,99.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_327.setTransform(249.45,97.15);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_328.setTransform(250.575,103.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgCQADgEAEAAQAFAAADAEQAEACAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_329.setTransform(258.175,107.25);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgCQADgEAEAAQAFAAADAEQAEACAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_330.setTransform(279.675,102.75);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_331.setTransform(269.05,106.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgEQAEgDAEAAQAFAAADADQAEAEAAADQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_332.setTransform(274.75,105.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_333.setTransform(272.05,101.75);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_334.setTransform(271.65,98.075);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_335.setTransform(266.9,103.05);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_336.setTransform(264.625,99.75);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_337.setTransform(266.2,95.825);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_338.setTransform(255.85,95.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_339.setTransform(246.075,101.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_340.setTransform(259.675,99.45);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_341.setTransform(252.25,91.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_342.setTransform(246.6,90.05);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgDQAEgEAEAAQAFAAAEAEQADADAAADQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_343.setTransform(244.4,86.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_344.setTransform(240.45,84.275);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_345.setTransform(241.6,91.025);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_346.setTransform(249.2,94.375);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_347.setTransform(270.7,89.85);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgDAEgEQADgDAEAAQAFAAAEADQADAEAAADQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_348.setTransform(260.05,93.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_349.setTransform(265.75,92.525);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_350.setTransform(263.075,88.85);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_351.setTransform(262.675,85.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FCEE35").s().p("AgHAIQgEgDAAgFQAAgDAEgDQADgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgDgDg");
	this.shape_352.setTransform(257.9,90.15);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FCEE35").s().p("AgIAIQgDgEAAgEQAAgEADgDQAEgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_353.setTransform(255.65,86.875);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAADAEQAEADAAADQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_354.setTransform(257.2,82.95);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEAAQAMAAAAAKQAAAFgEADQgDADgFAAQgEAAgEgDg");
	this.shape_355.setTransform(246.85,82.725);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FCEE35").s().p("AgHAIQgEgEAAgEQAAgEAEgDQADgDAEAAQAFAAAEADQADADAAAEQAAAEgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_356.setTransform(237.1,88.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FCEE35").s().p("AgIAIQgDgDAAgFQAAgDADgDQAEgEAEAAQAFAAAEAEQADADAAADQAAAFgDADQgEADgFAAQgEAAgEgDg");
	this.shape_357.setTransform(250.7,86.55);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-35,0,34.4,0).s().p("AjqCTQgtgDgogQIgXgKIAXAKQAoAOAtADQBlAJCcg7QB5gmBshdQAmghAYgeQAVgbgFgDQAFgSAEgBQACgBACAHQACAIgDAIQAEAGgWAcQgZAegpAiQhtBch8AlQiEAwheAAQgRAAgQgCg");
	this.shape_358.setTransform(214.89,160.1254);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-34.4,0,33.7,0).s().p("AjpCVQgrgCgmgMIgWgIIAWAIQAmALArABQBdADCbg+QB4goBshZQAnggAZgdQAWgZgFgDQAFgRAEgBQACAAABAHQACAHgDAIQAEAFgXAbQgaAdgoAgQhuBYh6AnQiUA3haAAIgNAAg");
	this.shape_359.setTransform(213.9125,158.5908);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-33.7,0,33.1,0).s().p("Ak1CNIgVgHIAVAHQAlAIAogCQBRgCCghBQB2gqBthVQAngfAZgbQAWgYgEgDQAGgQADAAQADAAABAGQAAAHgDAHQAKAPhgBKQhvBUh4AoQifBAhTAAIgJAAQgkAAghgIg");
	this.shape_360.setTransform(212.9411,157.13);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-32.7,0,32.8,0).s().p("AktCSIgagGIAaAGQAjAFAngEQAqgDBBgXQAvgQBNgiQB1grBthSQBhhJgNgIQAHgPAEABQACAAAAAGQABAGgEAHQAKANhhBIQhvBQh3AqQhNAggxAQQhBAVgrADIgcABQgYAAgWgEgAlHCMIAAAAIAAAAgAlHCMIAAAAIAAAAgAlHCMIAAAAIAAAAg");
	this.shape_361.setTransform(211.6531,155.7137);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-32.1,0,32.1,0).s().p("AknCXIgZgEIAZAEQAgACAlgGQAogGA/gaQAegMBbgpQBygtBuhOQBhhGgLgHQAIgNADAAQACAAAAAGQAAAGgDAHQAHAMhgBEQhwBMh1ArQhWAmgkAOQhAAYgoAFQgZAEgWAAIgWgBgAlACUIAAAAIAAAAgAlACTIAAABIAAgBgAlACTIAAAAIAAAAgAlACTIAAAAIAAAAgAlACTIAAAAIAAAAg");
	this.shape_362.setTransform(210.7,154.3991);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-31.4,0,31.5,0).s().p("AkjCbIgXgBIAXAAQAfAAAjgJQAkgIA9gdQAlgQBSgpQBxguBuhKQBhhCgKgHQAJgMADAAQACABAAAGQgBAGgEAGQAHAKhhBBQhwBIhzAtQhSAnglAQQg+AbglAIQghAIgdAAIgEAAgAk6CaIAAAAIAAAAgAk6CaIAAAAIAAAAgAk6CaIAAAAIAAAAgAk6CaIAAAAIAAAAgAk6CaIAAAAIAAAAg");
	this.shape_363.setTransform(209.775,153.1254);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-30.8,0,30.9,0).s().p("AkeCdQAdgEAhgLQAfgKA9ggIBzg8QBwgvBvhIQBhg+gIgGQAKgMACABQACABgBAFQgBAGgEAGQAGAJhiA9QhuBFhzAuIh0A6Qg+AfggAKQghAKgdADIgVACIAVgCg");
	this.shape_364.setTransform(208.8417,152.021);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-30.2,0,30.2,0).s().p("AkZCfQAbgGAfgOQAbgLA9gkQBLgtAkgTQBvgxBuhDQBig8gGgFQAKgKACABQACABgBAFQgCAGgEAFQAFAIhiA6QhuBBhyAvQgiARhOAtQg+AjgbAKQgfAOgbAGIgVADg");
	this.shape_365.setTransform(207.895,150.9406);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-29.5,0,29.6,0).s().p("AkUChQAZgKAcgQQAWgLA9gpQBCgsAqgXQBwg0Btg+QBhg5gEgEQAKgJADABQABACgBAEQgCAFgEAFQADAHhiA3QhsA8hzAyQgrAXhBAqQg/AogWALQgcAPgaAJIgTAHIATgHg");
	this.shape_366.setTransform(206.9625,149.8648);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-28.9,0,29,0).s().p("AjeCEQAMgHBCgzQA7gsAtgaQB0g4Bog4QBig1gDgDQALgJADACQABACgCAEQgCAFgFAEQADAGhjAzQhkA0h6A4QguAZg7ArIhPA5QgsAdgYAJQAYgKArgeg");
	this.shape_367.setTransform(206.0571,148.774);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-29,0.5,27.7,0.5).s().p("AjkCGIBJg/QA2guAvgbIDbhvQBigygCgCQAMgIADADQABABgCAEQgDAFgFAEQACAEhkAwIjcBqQgvAbg2AsIhLA+QgdAYgTANQATgOAcgYg");
	this.shape_368.setTransform(205.8042,147.2234);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-27.7,0,27.7,0).s().p("AjcB+QApgrAbgaQAygvAwgdQBagxCAg8QBjgugBgBQAMgIADAEQABABgDAEQgCAEgGAEQABAChkAuQiGA9hVArQgvAbgzAvQgcAZgqAqQglAlgUARQATgSAlglg");
	this.shape_369.setTransform(204.1643,146.6193);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-27.1,0,27.1,0).s().p("AjbB7IA/hKQAugxAwgfQBdg0B8g2IBkgsQANgGADADQABACgDAEQgEAEgFADIhlArQh+A1hcAxQgvAdgvAwIhBBJIg0A+g");
	this.shape_370.setTransform(203.2625,145.5388);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-26.8,0.7,26.1,0.7).s().p("AjfB/QAtg/AOgRQArgzAvggQBdg3B7gxQA9gZApgOQAGgDAFAAQAFgBAAACQACAFgOAHIhmAnQh8AwhcA0QgvAegsAyQgSAVgqA5IgmA4IAkg5g");
	this.shape_371.setTransform(202.775,143.745);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-25.8,0,25.9,0).s().p("AjZB1QAhg6AUgbQAog1AvghQBcg5B7guQA9gWArgNQAPgFABAFQACAFgPAGQgrANg9AVQh7AshcA2QguAfgpA0QgWAdghA3QgcAwgOAeQANgeAcgxg");
	this.shape_372.setTransform(201.4114,143.3375);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-25.5,0.9,25,0.9).s().p("AjcB6QAbg5AWghQAlg4AugiQBbg6B7gqQA+gVAsgKQAQgDABAFQABAFgQAFQgrAKg+ATQh7AohaA3QguAhgmA2QgXAhgbA4QgTAngLAdQAKgdASgog");
	this.shape_373.setTransform(200.8279,141.3529);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-24.8,1,24.4,1).s().p("AjaB4QAWg7AVgkQAig6AugjQBbg8B6gmQA+gTAugIIAMgBQAFABABACQABAGgRAEQgtAHg+ASQh6AjhaA6QgtAhgjA5QgVAjgZA7QgQAqgKAgQAJggAQgrg");
	this.shape_374.setTransform(199.8403,140.1667);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-24,0,24,0).s().p("AjXBsQASg+AVgnQAfg9AtgkQBZg9B7gjQA/gRAugFQATgCAAAGQAAACgFADQgFADgHAAQguAFg+AQQh6AfhZA7QgtAiggA7QgVAogTA8QgTA8gHAqQAGgqASg8g");
	this.shape_375.setTransform(198.6523,140.025);

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(212.75,147.15,1,1,0,0,0,38.2,28.9);
	this.instance_1.alpha = 0.6992;

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-27.8,0,27.9,0).s().p("AEGCiQAAgCgRgYQgVgdgageQhThdhXg2QhVg+h3gbQgngIgigEQgcgDgBACQABgCAcADQAiACAnAIQB3AZBYA8QBaA2BVBcQAbAeAWAdQASAYAAACQAEAGABAGQACAFgDABIgCABQgFAAgIgMgAkWisIABAAIgBAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAgAkWisIAAAAIAAAAg");
	this.shape_376.setTransform(229.4995,19.1396);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-26.6,0,26.7,0).s().p("AD6CnQAAgDgRgXQgVgcgageQhQhchUg5QhSg+hwgfQgkgLgggEQgZgEgBABQABgBAZADQAgAEAlAKQBwAdBUA9QBXA5BSBaQAbAeAWAcQARAXABADQAKAOgGAEIgCAAQgFAAgIgLgAkKiwIAAAAIAAAAgAkKiwIAAAAIAAAAgAkKiwIAAAAIAAAAgAkKixIAAABIAAgBgAkKixIAAAAIAAAAgAkKixIAAAAIAAAAgAkKixIAAAAIAAAAgAkKixIAAAAIAAAAgAkKixIAAAAIAAAAg");
	this.shape_377.setTransform(228.0471,19.7901);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-25.4,0,25.5,0).s().p("ADuCrIgRgYQgVgdgageQhOhahRg7QhNg/hqgkQgigMgdgGQgXgEAAABQAAgCAXAFQAdAFAjALQBpAhBRA/QBSA5BRBbQAbAdAVAcQASAXAAACQAEAGACAFQABAFgCACIgCAAQgFAAgIgLg");
	this.shape_378.setTransform(226.5571,20.4285);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-24.2,0,24.3,0).s().p("ADrC5QgFgDgEgGQAAgCgRgWQgVgcgZgeQhKhYhQg+QhIhAhkgpQgggNgagHQgUgGgBACQABgCAUAFQAbAHAgANQBlAnBKA+QBPA8BPBYQAaAdAWAcQAQAVACAEQAKANgGAEIgCABIgEgCgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAgAjyi5IAAAAIAAAAg");
	this.shape_379.setTransform(225.097,21.0515);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-23,0,23.1,0).s().p("ADfC9QgEgDgEgFIgSgYQgUgbgZgeQhNhbhIg8QhEhBhdguQgegOgXgJQgRgGgCABQACgBARAGQAYAIAdAOQBgAtBFA+QBJA7BQBaQAZAdAWAcQARAVABACQAEAGABAFQACAFgCABIgCABIgFgCg");
	this.shape_380.setTransform(223.5821,21.7033);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-21.8,0,21.9,0).s().p("ADTDCQgEgDgEgFQgZgjgmgtQhJhZhFg/QhAhAhYg0QgcgQgUgJQgPgIgBABQABgBAQAHQAVAKAbAPQBaAzBAA9QBFA9BOBZQAZAeAVAaIASAXQAFAFABAFQACAFgCACIgCAAIgFgBg");
	this.shape_381.setTransform(222.1321,22.3376);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-21,-0.1,20.4,-0.1).s().p("AC8C8QgaghglgtQhLhbg+g/Qg4g8hVg9IgqgcIgIgEIAIAEIArAbQBVA5A7A9QBEBBBJBWQAmAsAaAhQAKANgEAEIgDABQgEAAgIgKg");
	this.shape_382.setTransform(220.9698,23.1508);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-19.4,0,19.5,0).s().p("ACzDDIg+hNQhQhig0g5Qgwg5hShFQgxgpAAABQAAgCAyApQBPA/A3A8QA6A9BNBbIA/BMQAFAFABAFQACAFgCABIgDABQgEAAgIgJg");
	this.shape_383.setTransform(219.1694,23.6438);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-18.3,0,18.3,0).s().p("ACnDIIg+hNIh+ibQgdgkglgoIg2g4IgpgrIAqAqQBPBNAsA0QA/BIBDBRIA/BKIAGAKQACAFgCABIgDABQgEAAgIgIgAi2jPIAAAAIAAAAgAi2jPIAAAAIAAAAgAi2jPIAAAAIAAAAg");
	this.shape_384.setTransform(217.7068,24.2755);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-17.4,-0.5,16.8,-0.5).s().p("ACYDHQgEgDg6hIQhGhZgzhEQgZgigjgrIgxg8QgQgVgLgQQALAQARAUIAzA6QAkArAaAiQBGBZA2BAQA8BIADABQAKAMgEAEIgDACQgEAAgIgJg");
	this.shape_385.setTransform(216.5925,25.4516);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-15.9,0,15.9,0).s().p("ACYDYQgFgCgEgFQgEgBg5hJQhAhQg0hOIg3hQIgrg+QgPgXgHgRIgEgLIAEALQAIARAPAWIAtA+IA5BOQA3BOBABMQA6BHAEABQAKALgEAFIgCABIgEgBg");
	this.shape_386.setTransform(214.7821,25.55);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-14.7,0,14.7,0).s().p("ACMDcQgEgCgFgEQgBgBgRgTQgUgYgWgdQhBhSguhNIgyhSQgagrgMgXQgMgXgEgTIgCgMIACAMQAFASANAYQALAVAcArIA0BRQAvBKBDBSQA4BFAFABQAFAFABAEQACAFgCACIgCAAIgEgBg");
	this.shape_387.setTransform(213.275,26.1944);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-13.5,0,13.6,0).s().p("AB4DaQgCAAgRgTQgTgXgXgdQhBhWgohKQg+hygPgnQgKgagCgTIABgOIAAAOQACAUALAYQAPAmBCBxQAqBLBBBRQAYAdATAWQARATACAAQAEAEACAEQACAFgCACIgDABQgEAAgIgIg");
	this.shape_388.setTransform(211.775,26.8403);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-12.4,0,12.5,0).s().p("ABtDfQgCAAgRgTQgUgXgVgcQg/hUglhNQg1hugNgxQgIgaABgVIADgPIgCAPQgBAUAIAaQAQAyA3BrQAnBMA/BRQAWAcAUAWQARASACAAQAKAKgEAFQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgEAAgIgHg");
	this.shape_389.setTransform(210.1933,27.4698);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-11.5,-0.3,11.5,-0.3).s().p("ABjDgQgCAAgRgTQgUgWgVgcQg9hSghhQQgvhsgJg4QgGgcAFgWIADgJIgDAJQgDAWAGAbQALA3AwBsQAhBJBABVQAWAbAUAVQARASACAAQAKAKgEAFQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgIgHg");
	this.shape_390.setTransform(208.5191,28.4698);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-10.5,0,10.6,0).s().p("ABaDoQgCAAgRgSQgUgWgVgcQg8hTgdhRQgohpgFhAQgDgdAHgXIAHgRIgHARQgGAYAEAcQAHA/AqBpQAeBOA+BRQAVAbAUAVQAQARACAAQALAKgEAEQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgEAAgHgHgAhdjuIAAAAIAAAAg");
	this.shape_391.setTransform(206.782,28.7583);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-9.7,-0.3,9.7,-0.3).s().p("ABRDqQgCABgRgSQgTgVgVgdQg7hRgZhUQgihqAAhEQgBgeAKgZIAHgNIgHANQgJAZACAeQABBEAlBoQAaBPA8BSQAVAbAUAUQAQARACAAQAFADACAFQACAEgCACQAAABAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgEAAgIgHg");
	this.shape_392.setTransform(204.9526,29.6848);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-8.9,0,9,0).s().p("ABTD3QgFgBgEgEQgDAAgQgRQgUgVgUgcQg7hSgUhUQgdhqAFhKQACggAMgaIANgTIgMAUQgMAagBAgQgDBGAfBrQAXBVA6BNQAUAaAUAUQARARACgBQAKAJgDAFQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBgAg9j3IAAAAIAAAAg");
	this.shape_393.setTransform(203.082,30.0281);

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(227.05,28.5,1,1,0,0,0,33.6,28.5);
	this.instance_2.alpha = 0.6992;

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-72.7,0,72.7,0).s().p("ArFHHQAXgMAXgQIAggVQAWgNATgGIAygNQAhgIAVgJQBgguChgrQA5gRBUgrICNhIQBUgnA4giQBJgtAwgyIBshgQA9g3AhgjQAWgYA5g2QArgpAOgXIAegxIANgUQAJgPALgKQAKgKACACQACACgHALIgRAbIgMAUIgfAxQgPAYgsApQg6A2gVAYQgiAjg+A2IhtBgQgwAxhKAtQg6AjhUAmIiNBHQhUAqg6ARQilArhcAsQgWAJghAIIgyAMQgTAFgVAOIghAVQgXAQgXALIgRAIIARgIg");
	this.shape_394.setTransform(107.2391,148.8326);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-72.9,0.1,72.6,0.1).s().p("ArIHIQAXgMAXgRIAfgWQAVgOATgGIAwgPQAggKAVgJQAwgZBGgaQBCgYBFgWQA/gWBMgpQBcg0AvgYQBWgqA2giQBJgsAxgxIBvhdQA/g1AighQAYgZA5gyQAtgnAPgVQAPgVAQgYIANgTQAKgOALgJQALgIABACQACABgHALIgSAYQgCACgrA+QgQAWgtAnQg7AzgXAXQgiAhhAA1IhvBdQgyAvhKAuQg4AjhVAoQgcANgqAXIhFAmQhPAqg+AUQhSAag1AUQhKAcgsAVQgVAKggAJIgxAPQgTAGgVAOIgfAWQgXAQgXAMIgNAHIANgHg");
	this.shape_395.setTransform(107.4132,148.631);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74.9,1.2,70.7,1.2).s().p("AqvG2IAegXQAVgPASgHIAvgRQAggLAUgKQAugZBGgcQBLgfA6gVQBEgbBFgnQBbg3AugYQBYgtA0ghQBKgtAygvIBxhbQBCg0AhgeQAbgaA5gtQAuglAPgTIAwg7QAKgNAMgIQAKgHABACQACACgaAfQgDACgtA5QgRAVguAlQg7AugZAYQghAdhDA1QhTBAgfAaQgyAvhLAsQg1AhhYAsQguAYhbA2QhGAohFAaQg3AThNAfQhNAggoAVQgUAJggALIgwARQgSAHgUAPIgfAWIgTAOIATgOg");
	this.shape_396.setTransform(109.3541,147.3664);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-75.8,2,69.9,2).s().p("AqbGlQATgQASgIIAugSQAggNATgLQAkgUBPgkICBg4QBJghA/glQBZg5AwgZQBdg0AtgcQBLguAygtQAkgdBQg7QBFg0AhgbQAcgZA6gqQAvgiAQgSQAwg1ACgBQALgMAMgHQAKgGABACQABABgIAJIgTAVQgCABgwA1QgRASgwAjQg7ArgbAXQghAbhGA0QhQA6gkAdQgyAthMAtQgvAdhcAyQgdAQgoAYIhEApQhAAmhJAfQgsAShVAmQhKAggqAXQgTALggALQgjAOgLAFQgSAIgUAPIgeAXIAegXg");
	this.shape_397.setTransform(110.2306,146.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74.8,1.2,71,1.2).s().p("AqwGzIAdgYQAUgQARgJIAtgVQAfgOATgLQAfgSBSgpIB/g9QBWgrAwgfQBYg7AugbQBpg8AhgUQBNgwAygrQAogeBOg3QBJgzAfgYQAfgZA6gmQAxghAQgPQAygxADgBQALgKAMgGQAKgFACACQABACgIAHIgVASIg1AyQgRAQgyAhQg6AmgeAYQgfAYhKAzQhOA2goAeQgzArhNAvQgjAVhoA7QguAahYA6QgtAchbAtIh+A9QhSAnggATQgTALggANQghAPgMAGQgQAIgUARIgeAYIgVARIAVgSg");
	this.shape_398.setTransform(109.1056,147.1733);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-73.1,0.1,72.8,0.1).s().p("ArKHIQAVgOAVgTIAdgZQATgRAQgJQANgIAfgPIAxgbQAWgOBagwIB7hCIBCglQAngWAcgSIBBgtQApgdAagQQBdg2AtgcQBOgxAygoQAugiBLgxIBqhIQAhgYA6gjQA0gfAQgNIA3gtQAMgJAMgEQALgEABACQAAABgIAHIgVAPIg4AtQgRAOgzAfQg6AjghAYQgbAThQA0QhMAxgtAgQgyAphPAwQguAchcA2QguAbhXA9QgcASgoAWIhCAkQgrAWhQAsQhfAygSALQgSAKggAQQgeAPgNAIQgRAJgTARIgdAZQgVATgVAOIgNAHIANgIg");
	this.shape_399.setTransform(107.3764,148.1917);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-73.3,0.2,72.7,0.2).s().p("ArNHKQAVgPAVgUIAcgaQATgSAPgKQAOgJAdgQIAwgcQAUgOAhgSIA6ghIB4hHQBYgzArgeIBAgvQAogdAbgRICJhUQBRgzAxglQAwgiBKguIBuhEQAjgYA6ggQA2gdAQgLIA6goQAMgIAMgDQALgDAAACQABACgJAFIgWAOQgDABg3AnQgQAMg2AdQg6AfgjAXIhuBEQhKAugxAhQgxAlhRAyIiKBUQgbAQgnAdIhBAuQgbASgoAYIhBAmIg9AkIg8AiIg6AhQghASgUAOIgxAcIgqAZQgQAJgTASIgcAaQgUATgVAPIgJAGIAIgGg");
	this.shape_400.setTransform(107.5139,147.9604);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-73.8,0.6,72.3,0.6).s().p("AqpGqIAbgbQASgTAQgKQAOgLAagQIAwgfQAUgOAggTIA5giIA6gmIA8gnIBAgpQApgZAYgSIA/gxQAngeAbgQQAjgYBmhAQBVg1AugiQAzgiBKgqQBOgtAigUQAmgYA5gcQA8gcANgIQA5gjADAAQANgHAMgCQALgCAAACQABACgKAEIgWAMQgFABg4AiQgQAKg4AbQg7AcgkAWIhxBBQhKAqgzAhQguAihWA1QhpBBggAVQgZAQgoAeIhAAwQgYASgqAZIhAAoIg8AnQglAYgVANIg5AiQghATgUAOIgwAeIgpAbQgPAKgSASIgcAbQgUAVgVAOQAVgPAUgUg");
	this.shape_401.setTransform(107.9513,147.5375);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74.4,1,71.8,1).s().p("AqvGtIAagcQASgTAOgLQAJgIBNg1QATgOAhgVIA4gkQAXgPAigZIA6gqQARgMAugeQAqgcAWgRIA/gzQAmgdAagTQAwghBZg4QBeg7AngbQA1giBKgoIByg9QAogXA7gZQA+gaAMgHQA7geAEAAQANgFANgBQALgBAAACQAAACgKAEIgYAJQgEAAg6AeQgPAHg8AaQg6AZgnAVIhyA9QhLAog1AhQgnAbhfA6QhZA4gvAgQgaASgmAeIg/AxQgYASgqAbQgvAegQAMIg6AqQgiAZgXAOIg4AkQghAUgUAOIgvAgQgYARgPAMQgPALgSATIgaAcQgPAPgPANQAOgMAQgRg");
	this.shape_402.setTransform(108.4637,146.9969);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-76,2.6,70.3,2.6).s().p("AqnGgQARgUAOgMQARgPBDgyQASgOAhgWIA4glQAWgPAhgbIA4gtQASgPAsgdQAqgeAWgRIA9g0QAngfAZgTQA1gnBTg0ICHhVQA3ghBKgmIB1g6QArgVA6gWIBMgdQA9gaAEABQAOgFANAAQALAAAAADQAAACgKACIgZAHQgEgBg9AaIhMAeQg6AWgpAUIh2A5QhJAlg4AiIiHBTQhTA0g1AmQgZASgnAfIg+A0QgVARgsAdQgsAegSAOIg4AsQghAbgWAPIg4AlQgiAWgSAOQg/AugWATQgNALgSAUIgWAZIAWgag");
	this.shape_403.setTransform(110.075,145.1625);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74.9,1.5,71.5,1.5).s().p("Aq2GxIAZgdQARgWANgMQAYgYA5gtQARgOAigXIA3gnQAXgRAfgcIA2gvQATgRAqgdQAsggATgRIA9g0QAlghAagUQA3grBQgyICJhTQA5giBLgjIB3g2QAtgVA6gSIBOgaQA9gVAHABQAPgDANACQALABAAACQgBACgKABIgaAFQgGgCg9AWIhOAaQg6ASgsAUIh4A2QhKAig6AhIiIBTQhRAxg3AqQgZATglAhIg9A1QgUAQgsAfQgrAegTAQIg2AvQgfAbgXARIg4AnQghAXgSAOQg4ArgaAZQgMANgSAUIgZAdQgKAMgKAJIAUgVg");
	this.shape_404.setTransform(108.8875,146.15);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74,0.6,72.5,0.6).s().p("AquGoIAZgeQAQgWAMgNQAfghAwgnQARgOAigZQAmgcAQgNQAWgRAfgeIA0gyQATgSApgfQAtghASgQIA7g2QAlgjAZgUQA6guBNgxQApgZBhg5QBYgwCohEQAwgUA5gQIBRgVQBAgSAHACQAPgBANACQAMACgBADQgBABgKABIgbACQgCAAgRADQgWAFgdAIIhQAVQg6ARguASIh6AyQhLAgg7AhQhgA3gqAZQhOAxg5AtQgZAUglAiQgwAsgMAKQgSAQgtAhQgpAegTASIg1AyQgfAdgWARIg3ApQghAXgRAPQgyAogeAgQgMANgRAVIgYAfQgTAXgUAQQAUgRASgXg");
	this.shape_405.setTransform(107.879,146.8219);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-73.6,0.3,73,0.3).s().p("ArQHPQATgSASgXQAHgIARgYQAQgXAMgNQAegkAugoQARgPAhgaQAlgcARgOQAWgSAdgeIAzg1QASgUApgfQAtgjARgPQANgMAtgtQAlgkAYgUQA6gxBNgxQAzggBZgwQBggyClg8QAxgSA6gOIBTgSQBCgNAHADQAQgBANAEQAMADgBADQgBABgLAAIgbAAQgCgBgSADQgXACgeAHIhSARQg5AOgxARIh8AvQhMAeg9AfQhYAwgzAgQhNAwg6AwQgYATgkAkIg8A5QgRAPguAiQgoAfgTATIgyA1QgeAegWASQgRAPglAbQgiAagQAOQgxAqgdAiQgLAOgRAWIgXAfQgSAYgUARIgJAHIAJgHg");
	this.shape_406.setTransform(107.4415,146.8852);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-75,1.7,71.7,1.7).s().p("Aq6G0QAHgJAQgXQAQgZAKgNQAjgsAogkQAQgPAhgbIA1grQAVgTAdggIAxg4QASgVAoggQAtglAQgOIA6g7QAkglAYgVQBlhYCvhbQBkgxClg3QA0gQA6gLIBVgOQAfgFAYgBQATgBACABQAQABAOAFQALAEgBADQAAABgMgBIgcgCQgCgBgTABQgXABgfAFQh5AShIAWQinA2hiAwQivBahkBWQgYAUgkAlIg6A6QgRAQgtAkQgoAfgSAVIgxA3QgdAggWATQgSAPgjAdQgiAbgQAOQgqAlghArQgLANgQAYIgXAgIgRAVIARgWg");
	this.shape_407.setTransform(108.8165,145.225);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-75,1.7,71.8,1.7).s().p("Aq7G2QAHgKAPgXIAagoQAegsAqgoQAOgOAjgcQAigdASgRQAVgUAcghIAvg7QASgWAmghQAuglAPgPIA5g9QAjgmAYgVQBnheCuhWQBqgyClgwQBZgYBugJQAhgDAXAAQAUAAADACQAQACAOAGQAMAFgCADQgBABgMgCIgdgEQgCgBgTgBQgZAAgfADQhsAJhZAXQilAvhpAxQisBThoBdQgYAWgjAlIg5A8QgQAQguAlQgnAggRAWIgwA6QgcAhgVAUQgSARgjAcQgjAdgOAOQgnAkgiAwIgZAmQgPAXgIAKQgIAMgKALIASgXg");
	this.shape_408.setTransform(108.7583,144.875);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-73.8,0.3,73.1,0.3).s().p("ArTHWQATgSARgaIAVgiIAZgpQAggyAmglQAOgPAigdQAigeARgSQAVgUAbgjIAtg9QASgYAmggQAugoAOgQIA4g+QAjgnAXgWQBshmCqhOQBwgyCkgqQBggWBsgEQAggBAaACQAUACADACQARADAOAHQAMAGgCADQgBABgMgCIgegHQgCgCgVgBQgYgCghABQhrADheAWQijAnhwAyQisBOhoBjQgYAWgjAmIg4A+QgPAQguAmQgmAhgSAXIguA9QgaAjgWAUQgRASgiAdQgiAegPAOQgkAkgjA0IgYAoIgWAhQgRAagSASIgJAIIAIgIg");
	this.shape_409.setTransform(107.4083,145.8458);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-74.8,1.4,72.2,1.4).s().p("Aq7G4QAIgMANgXIAXgqQAhg2AjgmQAOgOAigfQAigeARgTQAUgVAaglIArg/QARgZAmghQAugqAOgPQANgPAqgxQAhgoAYgXQBrhrCshKQBzgxClgkQBsgVBlADQAiAAAaAEQAVADADACQARAEAOAJQAMAHgBACQgCACgMgEIgfgJQgCgCgVgDQgagDghgBQhlgDhpAUQiiAih1AxQiqBIhsBqQgXAWgiAoIg3A/QgOAPgvApQgmAigQAYIgtA/QgaAlgUAVQgRASgiAfQgiAegOAPQglAlggA2IgXAqQgNAXgIALQgLARgMAOQALgNALgSg");
	this.shape_410.setTransform(108.4333,144.2063);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-75,1.6,72.1,1.6).s().p("Aq9G+IAqhPQAfg5AjgmQAMgOAjghQAggfASgUQAUgWAZgmIAqhCQAQgaAmgiQAugsANgPQANgOAogzQAigpAXgYQBthwCrhFQB6gyCjgdQBvgSBmAHQBNAGAKAIQASAGAOAKQAMAIgCADQgBABgNgFIgggLQgIgIhMgGQhkgIhuARQiiAch6AxQiqBDhtBvQgXAWghAqQgpAygOAPQgNAPguArQgmAigQAZIgrBCQgZAmgUAWQgRATghAgQgiAggOAOQgjAmgfA5IgrBPQgJAPgKANQAKgNAJgQg");
	this.shape_411.setTransform(108.5458,143.3625);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-90.4,0,88.3,0).s().p("ANSDsQgSgfglgmQhJhNhogtQghgPhfgyQhYgug3gZQgrgQh4gkQhqgfg8gaQkDhbl5AbQh5AOhYATQgkAHgTAGQATgGAkgIQBYgTB5gPQCjgNCKAJQC6AMCXA0QCiAlCoBGQCPA8CCBKQBwBCBFA5QBCA3gKAQQAMAQAGAPQAHAOgCABIgBAAQgFAAgbgng");
	this.shape_412.setTransform(94.061,66.4731);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-91.4,0,87.4,0).s().p("ANIDqQgBAAgHgKIgTgXQhJhShngxQgTgJgOgGQglgQhdguQhZgug2gYQgqgPhvgiQhkgeg4gXIgTgIQhMgbhLgQQhOgRhegJQhFgHhcgCQhFgChKACIgFAAQh6AKhWAQIgkAHIAhgHQBmgTBtgIQBAgDBJABQBRABBIAGQBYAHBNAOQBSAPBVAcIAOAFQCYAlCgBAQCJA3CABDIAcAPQBdAzA8ApQAsAcAVAVQAbAZgEAKIAAABQALAQAGAOQAGAOgDACIgBAAQgFAAgbgjg");
	this.shape_413.setTransform(94.975,67.6578);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-91.4,0,87.5,0).s().p("ANIDqQgCAAgHgIIgTgWQhPhMhlguIghgOQgngRhbgsQhcgsg0gXQgogOhxgjQhjgfg5gXIgSgIQhGgahRgTQhJgQhigMQg/gGhigHQhHgFhGAAIgFAAQhpADhmAPIgjAFIAhgFQBjgPBvgFQA/AABIAEQBQAEBJAHQBlALBAAMQBRAQBVAeIAOAFQEhBKEjCRIAdAPQBdAvA+AnQAvAZASASQAbAVgDAJIAAABQAKAPAGAOQAFAOgEADIgBAAQgFAAgbgfg");
	this.shape_414.setTransform(94.8971,68.6088);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-90,0,89.1,0).s().p("ANWDrQgCAAgHgHIgTgUQhYhJhfgpIgigNQgqgRhZgqQhfgsgxgVQgjgMh2glQhigfg6gYIgTgIQhLgdhLgRQhBgQhqgOQg8gIhjgKQhGgIhFgDIgFAAQhbAAhzALIg5AHIgIACIAIgCIA3gHQBxgMBgAAQA7ACBLAIICYAPQBqANA7AMQBRARBVAeIAOAGQEZBMEuCMIAdAOQBdAsBAAkQAzAXAPAOQAaASgCAHIAAABQAKAPAEAOQAFAOgEAEIAAAAQgGAAgcgbg");
	this.shape_415.setTransform(93.3264,69.5099);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-89.5,0,89.6,0).s().p("ANbDtQgDABgagZQgrgegdgSQg3ghg7gZIgigMQgtgShXgnQhmgtgrgSQgegLh7gmQhhgfg6gZIgTgIQhNgehJgSQg2gNh0gSIiegWQhJgLhBgGIgFAAQhYgEh0AIQhMAFAAADQAAgCASgCIA3gEQB1gKBbAFQA4AEBNALICYAUQBxAQA0ALQBSATBTAeIAPAGQEYBQExCGIAdAMQBmAtA6AdIApARQASAHAIAIQAZANgCAHIAAABQAKAOAEANQAEAPgFAFIAAAAQgFAAgdgXgAt/j0IAAAAIAAAAg");
	this.shape_416.setTransform(92.7382,70.3352);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-93.2,0,86.1,0).s().p("AM2DvQgFABgagWIhJgrQg5gfg6gXQgQgGgSgGQgvgRhWglQhtgvglgOQgZgJh/gpQhhgfg6gZIgTgJQhMgehKgTQglgJgwgKIhVgOIidgaQhKgPg9gHIgFgBQhQgHh8AEIgCAAQB7gFBUAHQA3AGBNAPQAhAGB2ASQB6ATArAKQBOATBXAhIAPAFQEOBRE+CCIC+BPIArAOQASAGAHAHQAPAFAEADQAFADAAAEIAAABQAJANAEAOQAEAOgGAGIgBAAQgGAAgcgTg");
	this.shape_417.setTransform(96.33,71.0591);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-97.5,0,81.9,0).s().p("AMLDzQgFABgbgTIhLgnQg7gdg5gVIgigMQgygQhUgjIiTg8IiYgyQhdgfg9gaIgUgIQhKgfhLgUQgngKiCgZQhtgUgvgKQhLgSg7gKIgFgBQg1gHg8gCIgGgBQBFACA0AHQA0AJBOASQA1AMBhAQIBSAOQAwAJAjAJQBIASBeAjIAPAGQDqBJFkCHIAdALICkA9IAsAKQASAFAHAGIASAFQAGACgBADIAAABQAJAMADAOQADAPgGAGIgBABQgGAAgcgPg");
	this.shape_418.setTransform(100.525,71.7285);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-101.3,-0.7,78.2,-0.7).s().p("ALlDzQgGABgagQIhOgjQg+gbg3gTIgigLQg0gQhTghIiTg6IiZgyQhbgfg+gbIgUgIQhRghhDgTQgjgKgygLIhUgRQhfgSg8gQQhNgWg3gLIgFgBIgsgHIAuAGQAwAKBRAXQAzANBjATIBRAPQAxAJAiAJQBMAVBaAjIAPAGQCHAsC0A/IEVBiIAfAKQBeAhBHAWIAuAHQASADAGAFIASACQAFABAAADIAAAAQAJAMACAOQADAPgHAHIgCAAQgHAAgbgKg");
	this.shape_419.setTransform(104.1575,72.7452);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-96.4,-0.6,83.3,-0.6).s().p("AMXD6QgIADgagPQgOgFhCgYQhCgag0gRIgigKQg2gQhSgeIiUg6IiYgyQhageg/gcIgUgJQhRghhDgVQgigJgzgLIhTgSQhmgXg0gPQhQgbgygNIgFgBQg0gLg8gHIgfgCIAfACQA9AGA1ALQApAKBXAcQA/AUBWARIBRARQAzAKAhAJQBGATBfAnIAPAGIE8BsQC1A+BiAgIAfAJQBmAhBCAQIAuADQASACAFAEIATgBQAFAAAAACIAAABQAIALACAOQACAPgHAHIgEABQgIAAgYgHg");
	this.shape_420.setTransform(99.1336,72.95);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-95.6,-0.8,84.2,-0.8).s().p("AMeD+QgJAEgZgNQgWgFg9gUQhLgZgrgNIgjgKQg4gPhQgdIiVg3IiZgzQhageg/gdIgTgIQhQgjhDgVQghgKg0gLIhTgTQhhgXg4gUQhPgegygPIgEgBQgygNg9gJIgugFIAuAFQA+AIA0AOQAmALBYAgQA6AVBaAUIBRASQAzALAhAJQBFAUBgAoIAPAGQGACIDWA/IAfAJQBqAfBAALIAwABQASgBAEAEQAJgBAKgDQAFgCAAACIAAAAQAIAKABAOQACAQgIAJQgCABgFAAQgJAAgVgEg");
	this.shape_421.setTransform(98.2743,73.527);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-97,-1.2,83,-1.2).s().p("ALtD6QgagEg6gRIh3giIgjgJQg6gPhPgbQgzgRhjgkIiYgzQhYgfhBgcIgTgJQhXgmg8gTQgggKg1gNIhTgUQhcgWg7gZQhWgkgpgOIgEgBQgzgQg8gKIgVgEIAVADQA+AKAzARQAoANBVAkQA8AYBYAVIBRATQA1AMAfAJQA8ASBoArIAPAHQFZB/EABFIAfAJQBrAbBCAIQAVABAcgDQASgCAEACQAKgCAIgFQAFgDABABIAAABQAHAJABAOQABAQgJAKQgBABgKABIgagBIgHABQgKAAgTgHg");
	this.shape_422.setTransform(99.4928,74.3471);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-96.5,-1.4,83.6,-1.4).s().p("ALxD/QgdgDg5gNIh5geIgjgJQhfgXjBhEIiZgzQhVgfhDgdIgTgJQhYgng7gUQgfgKg1gNIhTgVQhegZg4gaQhUgogpgQIgFgCQgxgRg9gNIgegFIAfAFQA+AMAzASQAnAPBUAoQA4AaBbAYIBRAUQA0AMAgAKQA3ARBtAuIAPAHQCfA8CgAzQCdAzCAAfIAfAIQBoAYBHAFQAYgBAagEQATgEADACQAKgEAIgHQAFgEABABIAAAAQAGAJABAOQAAAQgJAKQgCACgJACQgLACgQAAQgDABgGAAQgLAAgQgEg");
	this.shape_423.setTransform(98.9137,75.1446);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-97.5,-1.9,82.8,-1.9).s().p("ALmEBQgfgBg5gLQgjgGhXgUIgjgHQhrgYi3g/Qhhgfg3gUQhVgghDgfIgTgJQhYgmg6gVQgegJg3gPQg5gOgZgIQhXgZg+geQhXgugkgQIgFgBQgxgVg8gOIgMgDIANADQA9AOAzAVQAhAOBZAuQA5AcBZAaQAXAHA6AOQA2ANAeAKQA8AUBoAtIAPAGQCdA/CjAzQCcAxCDAdIAfAHQBqAVBHACQAagCAagHQATgFACABQAKgFAIgJQAFgGABABQAGAIAAAOQAAAQgKAMQgEAFgjAFQgGACgIAAQgKAAgNgDg");
	this.shape_424.setTransform(99.7875,76.194);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-94.1,-1.4,86.4,-1.4).s().p("AMIENQg6ADibggIgkgHQh3gZisg5Qi8g9h0g3IgTgJQhagog4gUQgdgKg3gOQg5gQgZgIQhagbg6ghQhUgxgmgSIgEgBQgwgXg8gRIhSgUIBTAUQA+ARAxAXQAYALAjAUIA+AjQA7AgBWAaQAZAHA5APQA2AOAdAKQAwAQB0AyIAPAHQCcBCCkAyQCdAvCEAaIAhAHQBtASBFgCQAcgDAZgJQAUgHABAAQAKgGAHgKQAGgHABAAQAFAHAAAOQgBARgKAMQgLAJgcAFQgJADgOAAIgPgBg");
	this.shape_425.setTransform(96.2021,76.25);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-96.2,-2.1,84.5,-2.1).s().p("AIaD3IgkgGQiAgYilg3Qi0g5h8g7IgTgJQhggsgxgSQgdgKg3gPQg5gQgZgJQhbgeg4ghQhVg3gigSIgEgCQgwgZg8gSIgogMIApALQA+ATAxAZQAYANAiAVIA9AmQA3AhBaAdQAZAJA4APQA3APAdAKQAkAMAuAUIBSAkIAPAHQCaBDCnAyQCcAuCHAXIAgAFQBwARBFgGQAegEAYgLIAUgKQAKgHAIgMQAFgJABAAQAFAGgBAOQgBASgLAMQgCADgJAEQgMAHgQAEQgPAHgYgBIgcABQhCAAh6gWg");
	this.shape_426.setTransform(98.2458,77.6929);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-92.6,-1.2,88.3,-1.2).s().p("AI6EOIgkgGQiFgWihg0Qiug2iCg/IgTgJQhigvgugRQgcgKg4gQQg4gQgagKQhWgdg7gmQhVg8ghgTIgEgCQgvgag9gVIhXgcQgOgEgNgGQANAGAOAEIBZAbQA+AVAwAcQAYANAiAXIA8ApQA6AmBWAcQAaAKA4APQA3AQAcAKQAjAMAvAVIBSAmIAPAHQCaBECnAxQCdAuCIAUIAhAEQBwAPBHgLQAfgFAYgNQAMgGAIgGQAKgJAIgOQAFgKABAAQAFAFgCAPQgCARgLAOQgCADgJAFQgNAIgQAGQgQAHgYABQgXAEgeAAQhCAAhkgQg");
	this.shape_427.setTransform(94.4688,77.5146);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-92.6,-1.3,88.5,-1.3).s().p("AI2EaIgkgFQiIgVifgxQimgziKhEIgTgJQhigwgugSQgbgKg4gQQg3gQgbgLQhXgfg5goQhYhCgcgSIgEgDQgvgdg8gWIhXgfQgPgFgOgHQAOAHAPAFIBZAeQA9AXAwAeQAYAOAhAZIA8AsQA3AnBYAgQAaAKA4AQQA3AQAcAJQAuASB2A4IAPAHQCaBHCoAwQCeAtCJAQIAhAEQBzAMBHgOQAggHAYgPIATgOQAKgKAHgQQAGgMABAAQAEAEgCAPQgCASgMAOQgPAPgaALQgPAIgaAEQgjAHgvAAQg8AAhQgLg");
	this.shape_428.setTransform(94.3458,78.4559);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.lf(["#FAB14E","#F9AA4B","#F69445","#F48341","#F3763F","#F26B3D","#F2653C","#F1633C"],[0.012,0.043,0.149,0.263,0.388,0.529,0.702,1],-92.7,-1.4,88.6,-1.4).s().p("AIxElQiPgPijgvQiugzichNIhRgoQgwgXgigOQgZgKg6gRQg2gQgbgMQhZghg3gqQhThFgfgVQgvggg9gaIhYgiQgQgFgNgIQAOAHAPAGIBYAhQA+AZAvAgQAYAQAhAaIA6AvQA5ArBWAgQAbALA2AQQA5AQAbALQAjANAvAXIBRAnQCdBMCuAxQCiAuCOAOQCNAOBQgUQAigIAYgQQAMgJAGgIQAKgLAHgSQAGgOABAAQAEAAgCAQQgCATgOAQQgbAgg4ANQgvAMhDAAQgyAAg9gHg");
	this.shape_429.setTransform(94.3208,79.5087);

	this.instance_3 = new lib.Path_0();
	this.instance_3.setTransform(95.05,114.1,1,1,0,0,0,89,65.7);
	this.instance_3.alpha = 0.6992;

	this.instance_4 = new lib.Path_1_0();
	this.instance_4.setTransform(91,118.35,1,1,0,0,0,91,81.2);
	this.instance_4.alpha = 0.6992;

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.rf(["#FFFFFF","#373535"],[0,0.145],-0.6,-1.1,0,-0.6,-1.1,6.8).s().p("AgYAaQgKgLAAgPQAAgOAKgLQALgKANAAQAPAAAKAKQAKALAAAOQAAAPgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_430.setTransform(357.225,98.875);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.lf(["rgba(0,0,0,0)","rgba(126,121,121,0)","#7E7979","#534E4E","#373535"],[0,0.765,0.765,0.859,0.929],-9.9,0,11.7,0).s().p("AggAjQgNgPAAgUQAAgTANgPQAOgOASAAQATAAAOAOQANAOAAAUQAAAUgNAPQgOAOgTAAQgSAAgOgOg");
	this.shape_431.setTransform(357.225,98.875);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.lf(["#57585A","#58595A","#777576","#979495","#B6B3B4","#D1CFCF","#E7E5E5","#F7F6F6","#FFFFFF","#EFEEED","#D3D0D0","#ACA7A7","#7E7979","rgba(126,121,121,0)","rgba(0,0,0,0)"],[0.078,0.078,0.129,0.176,0.231,0.286,0.341,0.404,0.482,0.529,0.6,0.678,0.765,0.765,1],-9.9,0,11.7,0).s().p("AggAjQgNgPAAgUQAAgTANgPQAOgOASAAQATAAAOAOQANAOAAAUQAAAUgNAPQgOAOgTAAQgSAAgOgOg");
	this.shape_432.setTransform(357.225,98.875);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.rf(["#B5C47F","#C4A161","#CD864E","#D17644","#D36F41"],[0.012,0.243,0.451,0.612,0.702],-2.5,-6.7,0,-2.5,-6.7,22.4).s().p("AgzA5QgVgYAAghQAAghAVgXQAWgYAdAAQAfAAAVAYQAVAXAAAhQAAAigVAXQgVAYgfAAQgdAAgWgYg");
	this.shape_433.setTransform(357.225,98.875);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.lf(["#B53E40","#BF423F","#DF503A","#F05638"],[0.271,0.341,0.592,0.729],-10.5,0,8.3,0).s().p("Ag2A9QgXgZAAgkQAAgjAXgZQAXgZAfAAQAhAAAWAZQAXAZAAAjQAAAkgXAZQgWAaghAAQgfAAgXgag");
	this.shape_434.setTransform(356.6,100);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.lf(["#B53E40","#C2433F","#D44B3C","#E1513A","#EC5538","#F05638"],[0.278,0.306,0.365,0.427,0.518,0.714],-3.9,-1.6,14,1.7).s().p("Ag0CJQgZhHAAhLQABhQAbg8QAehBA3gZIAqgPQg/A8gRAcQgzBSAICAQAIB+A4BUQgtgrgahKg");
	this.shape_435.setTransform(327.8495,105);

	this.instance_5 = new lib.Mesh();
	this.instance_5.setTransform(163.55,35.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.lf(["#B53E40","#F05638","#F26E3B","#F8A248","#FAB14E"],[0.012,0.588,0.643,0.753,0.784],-11.2,-9,5.5,6.8).s().p("AgTAIQA4gyAbgsIAOgFQAOAJAXAcQggAzhJArQhCAog6ALQAegcBBg3g");
	this.shape_436.setTransform(364.825,114.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_436},{t:this.instance_5},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.instance_4},{t:this.instance_3},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.instance_2},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.instance_1},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,376.3,199.7);


// stage content:
(lib.grey7 = function(mode,startPosition,loop,reversed) {
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
			this.correct.play();
			var my2=createjs.Sound.createInstance("yes");
		this.my2;
		my2.play();
			
		}
		this.b3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.wrong2.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
		
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

	// Layer_3
	this.b8 = new lib.Symbol6_1();
	this.b8.name = "b8";
	this.b8.setTransform(1259.05,108.95,1.8331,1.8331,0,0,0,40.8,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(1));

	// Layer_2
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
	this.shape_146.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSCDIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
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
	this.shape_279.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
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

	this.instance = new lib.BRIGHTEDGELOGO();
	this.instance.setTransform(1303.6,56.4,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.correct = new lib.Symbol19();
	this.correct.name = "correct";
	this.correct.setTransform(794.65,466.95,1.0999,1.0999);

	this.wrong1 = new lib.Symbol20copy();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(542.1,584.5,0.9486,0.9486,0,0,0,52.1,48.2);

	this.wrong2 = new lib.Symbol20copy();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1501.75,561.8,0.9486,0.9486,0,0,0,52.1,48.2);

	this.b1 = new lib.Symbol5();
	this.b1.name = "b1";
	this.b1.setTransform(433.35,512.95,1,1,0,0,0,188.2,99.8);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.b2 = new lib.Symbol4();
	this.b2.name = "b2";
	this.b2.setTransform(911.65,512.95,1,1,0,0,0,220,199);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b3 = new lib.Symbol3();
	this.b3.name = "b3";
	this.b3.setTransform(1476.2,512.95,1,1,0,0,0,172.2,135.6);
	new cjs.ButtonHelper(this.b3, 0, 1, 1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWATQgJgJAAgKQAAgJAJgIQAKgJAMAAQAOAAAJAIQAJAIAAAKQAAALgKAIQgJAIgNAAQgMAAgKgIg");
	this.shape_306.setTransform(1164.25,129.225);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAHgIQAIgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_307.setTransform(1146.3,116.825);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_308.setTransform(1126.175,120.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAWAKQAeAPAAAeQAAAVgYASQgLAHghANIhBAdQAKALANAFQANAFARAAQAaAAARgLQARgJAJgBQAVABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_309.setTransform(1104.85,120.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AhGCKQgDgHAAgGQAAgKAJgIQAIgHALAAQANAAAJANIAPAZQAHAOAIAAQAKAAADgcQAAgUgHhYQgHhXAAgQQAAgMAHgJQAIgLANAAQAJAAAJAGQAKAHAAAJIAGBrQAGBfAAAVQAAAdgSAXQgUAagdAAQguAAgfhCgAAHiZQgIgJAAgMQAAgMAIgJQAJgIANAAQAMAAAKAIQAJAJAAAMQAAAMgJAJQgKAIgMAAQgNAAgJgIg");
	this.shape_310.setTransform(1084.025,121.075);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("Ag5CUQgIAIgKAAQgKAAgIgHQgHgHgBgLIABgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIAAAIIgBAIIAABLQAOgIAOgEQANgEALAAQAuAAAdAhQAaAeAAAtQAAAtgfAgQgfAggtAAQgbAAgZgKgAgVgDQgOAFgQALIAABTQAaAMAUAAQAXAAAQgRQAQgRABgZQgBgZgNgRQgNgQgXAAQgJAAgNAGg");
	this.shape_311.setTransform(1065.95,114.875);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALAKAOAAQAQAAAMgLQAOgNABgYQADg+gkABQgXAAgOAVg");
	this.shape_312.setTransform(1043.2958,120.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_313.setTransform(1003.675,114.725);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAWAKQAeAPAAAeQAAAVgYASQgLAHghANIhBAdQAKALANAFQANAFAQAAQAbAAARgLQARgJAJgBQAVABAAATQAAAXggAOQgcAMgfAAQgugBgdgWgAgaguQgNAMgIAYIAtgTQAYgMARgKQgOgIgVAAQgRAAgNANg");
	this.shape_314.setTransform(980.8,120.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IABgSIAAgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAhgaArAAQAnAAAAA0IgBAMQgBAegaAAQgYAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgHgHg");
	this.shape_315.setTransform(960.7,120.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_316.setTransform(940.1553,120.275);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALAKAOAAQAQAAAMgLQAOgNABgYQADg+gkABQgXAAgOAVg");
	this.shape_317.setTransform(919.1458,120.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAIgHQAIgHAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_318.setTransform(903.2,114.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALAKAOAAQAQAAAMgLQAOgNABgYQADg+gkABQgXAAgOAVg");
	this.shape_319.setTransform(887.1458,120.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_320.setTransform(866.225,120.1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("Ag5CXQgIgHAAgMQAAgSAphZQgWgqguhSIgKgPQgFgJAAgHQAAgLAIgHQAJgJALABQANAAAHAJQAcAlAjBKIAag4QAOgdANgWQAIgOAPAAQALAAAJAIQAIAGAAAMQAAAFgDAHIhECKQgZAzgMAiIgNAkQgHASgSAAQgLAAgIgHg");
	this.shape_321.setTransform(827.775,125.35);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFAQAAQAbAAASgLQAQgJAKgBQAUABAAATQAAAXghAOQgbAMgfAAQgugBgdgWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_322.setTransform(805.45,120.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IAAgSIABgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAhgaArAAQAnAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgHgHg");
	this.shape_323.setTransform(785.35,120.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AhkB9QAAgKAHgIQAHgGALAAQAJAAAQAEQARACAMAAQAcAAAOgRQAOgSACgmQgKALgMAFQgNAFgOAAQgnAAgYgZQgYgaAAgmQAAg1AgghQAigiA4AAQASAAAOAFQANAEAIAJQAZADAAAaQAAAOgEAWQgIAvgCAxQgCBAgTAcQgaAmhAAAQhMAAAAgegAgdhYQgRAUAAAfQAAAYAJALQAJALARAAQAPAAARgSQAPgRACgSQAEgSAFgnQgHgEgHgDQgGgCgGAAQggAAgSAWg");
	this.shape_324.setTransform(764.525,125.35);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFAQAAQAbAAASgLQAQgJAKgBQAUABAAATQAAAXghAOQgbAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_325.setTransform(725.35,120.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAtCPQgEgQgEgcQgEgcABgSIAAgPIABgOIgBgRQgBgKgJAAQgWAAgRATQgIAKgQAcQAABHgHAOQgHAQgRAAQgLAAgIgHQgJgIAAgKIACgLQABgEABgxQgBgmAChbIABgHIABgeIgDgSIgCgSQAAgLAJgHQAIgHALgBQATABAHAUQAEAMAAAYQAAAUgCAUIgBAmQAOgOARgHQAPgHATAAQAiAAAOATQALAOACAcIADAwIADAmQADAWAEAQIABAHQAAAMgJAGQgIAIgLgBQgUABgGgUg");
	this.shape_326.setTransform(703.3,114.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAHgIQAIgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQADBOAAAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_327.setTransform(682,116.825);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("Ag5CXQgIgHAAgMQAAgSAphZQgWgqguhSIgKgPQgFgJAAgHQAAgLAIgHQAJgJALABQANAAAHAJQAcAlAjBKIAag4QAOgdANgWQAIgOAPAAQALAAAJAIQAIAGAAAMQAAAFgDAHIhECKQgZAzgMAiIgNAkQgHASgSAAQgLAAgIgHg");
	this.shape_328.setTransform(643.975,125.35);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AglCkQgIgGAAgLIABgFQAEgcAAgZIAAhgIgNABIgLACQgMgBgIgGQgHgIAAgLQAAgSATgGQAIgDAaAAIACgXQAGgrASgVQAWgbAvAAQAjAAAAAaQAAAZghAAQgXAAgLARQgIAMgDAbIgBAFIAmgDQAkAAAAAZQAAAagmgBIgmACIAAA0IABA0QAAAkgFAVQgEAVgVAAQgLAAgIgIg");
	this.shape_329.setTransform(622.625,115.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgYCOQgHgIgBgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAJgHALAAQALAAAHAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQAAALgHAIQgIAHgLAAQgLAAgIgHgAgRhjQgKgIABgMQgBgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_330.setTransform(607.6,115.525);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAhADIgCgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgJgBQgJAAgKACQADBOAAAYIAAAKIABALQAAAtgcAAQgKAAgIgHg");
	this.shape_331.setTransform(592.15,116.825);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_332.setTransform(572.425,119.875);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFARAAQAaAAASgLQAQgJAKgBQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_333.setTransform(550.3,120.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_334.setTransform(527.425,114.725);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AhcCOQgIgIAAgLQAAgLAIgHQAIgIANAAQAOAAAXgEIAAhXQAAg1AEgwIgqABQgMAAgIgHQgIgIAAgMQAAgLAIgHQAHgHAKAAQAQgDAqAAQAkAAA6AJQAYADAAAYQAAANgJAGQgIAHgJgBQgKAAgpgFQgDAkAAA6IAABZIA1gBQALAAAIAIQAIAHAAAMQAAALgIAHQgIAIgMAAIgiABIghAAQgMgBgbAEQgaAEgNAAQgMAAgIgIg");
	this.shape_335.setTransform(504.875,115.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.b3},{t:this.b2},{t:this.b1},{t:this.wrong2},{t:this.wrong1},{t:this.correct}]}).wait(1));

	// Background
	this.instance_1 = new lib.Symbol6();
	this.instance_1.setTransform(-182.1,202.05,1,1,0,0,0,50,38);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_336.setTransform(960,540);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_337.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.instance_1}]}).wait(1));

	// White_bg
	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("EiH4BMcMAAAiY3MEPxAAAMAAACY3g");
	this.shape_338.setTransform(959.975,535.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_338).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '5B6EDD595FBB2643BFBF39E89E90389B',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/Image_1.png", id:"Image_1"},
		{src:"images/Mesh.png", id:"Mesh"},
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
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
an.compositions['5B6EDD595FBB2643BFBF39E89E90389B'] = {
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