(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BRIGHTEDGELOGO = function() {
	this.initialize(img.BRIGHTEDGELOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b_mc.b1.enabled=false;
		_root.l_mc.b2.enabled=false;
		_root.u_mc.b3.enabled=false;
		_root.e_mc.b4.enabled=false;*/
	}
	this.frame_515 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(514).call(this.frame_515).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").p("ACHmlIgBgBIgCgFIgFgGQgWgZglARQgXALgEAUQgDAPAJARIAEAGIABABIADAFIAEADIADACIgBACIgCAGQgJASgYApQgYAogEAFQgEAFgdgCQgbgCgKgEQgFgCgJgPQgEgLgJgRQgLgVgEgIQgFgIgCgHQgCgMAIgUIABgDIAAgBIABgDIAAgFIgBgCIAAgCIgBgDIgBgEIgBgBQgBgFgDgEIAAAAIgCgEIgBgBIgCgDIgBgBIgCgDIgBgBIgDgDIAAgBIgEgDIAAAAIgMgJQgWgMgQAPIgEAEIgDAFIgJATIgBAGIgBADIAAABQgIAkAfAQIgBAAIAHADIAAAAIAGACIABAAIAEABIABAAIADABQAIABARAxQAQAuABAQQABAKgJAIIgIAGIgDAAIgCAAIgCAAIgDABIgCAAIgKADIgLAFQgKAGgGAKQhFgEgRACIgGABIAAABIAAABIAAAAIgBACIAAABIgCAGIAAACIAAABIAAABIgCAFIAAABIgBAFIAAACIAAACIAAADIgBABIAAAGIAAABIAAAEIAAACIAAAEIADAKIACAEQAIALAUAGQAXAHAcgDIAAAEIgBAOQAAAcARARIAABDIgRAJIgbASIgGAGIgCABIgNAOIgGAJIgLAXQgBABgCAIIgBACIgDAVIAAgBIAAAHIgBADIABAQIABALIAAAAIABAEIgFAIIgCAEIAAAAIgCAFIgBABIgDALIAAABQgHAjAWAmIAJAPIAWAaIAIAGIADACIALAFIAFABIAIAAIAHgCIACgBIADgBIACgBIAkgVIABAFIAAABIAEATQAIAwAIAWIAGAMIAAABIADADIAAABIADACQA9AlA8hjQAGgKAPgIQAJgFATgLQAjgYAIg3QAAgZACgdQAFg6AJgUQAIgPAngoQAegsgXgxIAJg2QAkAHAggHQAbgGALgOIADgFIACgJIABgGIAAgBIABgCIAAgQIgBAAIAAgDIAAgDIAAgCIgBgCIAAgDIAAgCIAAgBIgBgFIAAgBIgBgBIAAgCIgCgIIAAgBIgBgDIAAgBIAAgBIAAgBIgDAAIAAAAQgVgFhbACIgEgKQgKgYgogLQgmgKgBgFQgCgJAPg0IAQgyIAOgDQAOgHAIgUIAEgRIAAgCIAAgGIAAgCIAAgGg");
	this.shape.setTransform(28.5797,44.9244);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah3G3IgDgCIAAgBIgDgDIAAgBIgGgMQgIgWgIgwIgEgTIAAgBIgBgFIgkAVIgCABIgDABIgCABIgHACIgIAAIgFgBIgLgFIgDgCIgIgGIgWgaIgJgPQgWgmAHgjIAAgBIADgLIABgBIACgFIAAAAIACgEIAFgIIgBgEIAAAAIgBgLIgBgQIABgDIAAgHIAAABIADgVIABgCIADgJIALgXIAGgJIANgOIACgBIAGgGIAbgSIARgJIAAhDQgRgRAAgcIABgOIAAgEQgcADgXgHQgUgGgIgLIgCgEIgDgKIAAgEIAAgCIAAgEIAAgBIAAgGIABgBIAAgDIAAgCIAAgCIABgFIAAgBIACgFIAAgBIAAgBIAAgCIACgGIAAgBIABgCIAAAAIAAgBIAAgBIAGgBQARgCBFAEQAGgKAKgGIALgFIAKgDIACAAIADgBIACAAIACAAIADAAIAIgGQAJgIgBgKQgBgQgQguQgRgxgIgBIgDgBIgBAAIgEgBIgBAAIgGgCIAAAAIgHgDIABAAQgfgQAIgkIAAgBIABgDIABgGIAJgTIADgFIAEgEQAQgPAWAMIAMAJIAAAAIAEADIAAABIADADIABABIACADIABABIACADIABABIACAEIAAAAQADAEABAFIABABIABAEIABADIAAACIABACIAAAFIgBADIAAABIgBADQgIAUACAMQACAHAFAIIAPAdQAJARAEALQAJAPAFACQAKAEAbACQAdACAEgFQAEgFAYgoQAYgpAJgSIACgGIABgCIgDgCIgEgDIgDgFIgBgBIgEgGQgJgRADgPQAEgUAXgLQAlgRAWAZIAFAGIACAFIABABIAFAPIAAAGIAAACIAAAGIAAACIgEARQgIAUgOAHIgOADIgQAyQgPA0ACAJQABAFAmAKQAoALAKAYIAEAKQBbgCAVAFIAAAAIADAAIAAABIAAABIAAABIABADIAAABIACAIIAAACIABABIAAABIABAFIAAABIAAACIAAADIABACIAAACIAAADIAAADIABAAIAAAQIgBACIAAABIgBAGIgCAJIgDAFQgLAOgbAGQggAHgkgHIgJA2QAXAxgeAsQgnAogIAPQgJAUgFA6IgCA2QgIA3gjAYIgcAQQgPAIgGAKQgrBIgtAAQgRAAgQgKg");
	this.shape_1.setTransform(28.5797,44.9244);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2D2D2D").p("AgIAcQADgHAVgWQAVgZABgBQACgGgFgBQgJgDgLAFQgFACgNAIQgVAMgLAWQgHANANAIQANAIAIgNg");
	this.shape_2.setTransform(11.2311,20.2205);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdAhQgNgIAHgNQALgWAVgMQANgIAFgCQALgFAJADQAFABgCAGIgWAaQgVAWgDAHQgFAIgHAAQgFAAgEgDg");
	this.shape_3.setTransform(11.2311,20.2205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.3,-1.9,59.5,92.80000000000001), null);


(lib.Symbol16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.ehead.b1.enabled=false;
		_root.lhead.b2.enabled=false;
		_root.hhead.b3.enabled=false;
		*/
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(143).call(this.frame_144).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Slotcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").p("Am8nUIgEAAQgEAAgBABIgGACIgFAEIgEAEIAAAAQgFAGgEALIgEANIgBAEIAAACQgGAZADAdIAAACQAFAtAaAoIAIAKQAZAhAOAmQAMAgAJANQASAdAhATQBgA3BKBFQAtArAZAjIAEAFIABAAIgEACIgHAFQgLgPgSgUQgbgcgdgUQgkgZgngUQgkgSgJgFQgXgOgKgFQgRgJgFAKQgHAPANAmQAHASAVAvQAgBFAQASQAqAvBKgGQgOAZADARIAAABIACAGIAAABIAEAGIAAAAQgFAPAKAPQAEAFAFADIABALQABAQAAAbQADAeAMAUQALARAVALQAEAPASACIABAGIABAAIAAADIAEAIQAEAHAGAFIAJAGQAQAHAcAAQAXgBAOgFQAGgDAIgFQAFgEACgEQAEgFADgHIABgCIABgDIACgGIABAAQAwgPAUgZQANgQAIglQAEgRACgeIABgHIAGgHQAKgOgEgOIAFgIIABgEIAAAAIABgDQAGgVgMgVQBIAFApgvQARgUAehDQAVguAHgUQANgmgHgOQgFgKgSAIQgWAOgLAGQgYAMgUALQgmAUgkAZQgsAfgnAyQgEgEgDgBIAxg9QBIhLB3hHQAhgUATgcQAJgPALgeQAPgmAZghQAhgqAFg1QADgagFgdIAAAAIgEgRIAAAAQgIgZgRgGQgRgFgFASIAAACIgCAHIAAABQgBAHAAAIQgCAKgDAcIgBADQgHAhgSAeQgLASgJAIQgQgVgWgEQgWgDABAQQAAAFADAGQADAFAMANQAJARgEAgIgBAGIAAABIgCAGIAAABQgJAXgZAWQgVARgIAFIgGAEQgOAHgNAEQgdAKgeAPIgYANIgBgpQgDgVgEgKIAAAAQgGgOgJgCQgMgDgFAhQgGA0gRAiQgZAxgNAiIAAgBQgKAdgEAPQgCAFgBAEQgEAQgBAIQgigDgjADIgBgHQgEgVgKgbIgDgHQgQgogagxIgBgCQgSgkgGgaQgFgagEgQIAAgBIgDgKIgCgEIgCgDIAAgBQgBgBgBAAIgBgBIgCAAIgCAAIgDABQgPAFAAAsQgBAWADAVIgTgKQgMgIgdgLIgbgLQgYgIgXgRQgWgRgOgTQgVggAGgeQADgWARgSQAEgEAAgFIAAgCQAAgPgVAEQgVADgVARQgVgVgNgnQgGgQgDgWQgDgbgBgCQgCgRgBgDIAAgCIgBgCIgBgCIAAgCIgBgCIgDgEIgBgBIgCgBIgBgBg");
	this.shape.setTransform(-9.6336,-4.3448,1.331,1.331);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6HPIgJgGQgGgFgEgHIgEgIIAAgDIgBAAIgBgGQgSgCgEgPQgVgLgLgRQgMgUgDgeIgBgrIgBgLQgFgDgEgFQgKgPAFgPIAAAAIgEgGIAAgBIgCgGIAAgBQgDgRAOgZQhKAGgqgvQgQgSgghFQgVgvgHgSQgNgmAHgPQAFgKARAJIAhATIAtAXQAnAUAkAZQAdAUAbAcQASAUALAPIAHgFIAEgCIgBAAIgEgFQgZgjgtgrQhKhFhgg3QghgTgSgdQgJgNgMggQgOgmgZghIgIgKQgagogFgtIAAgCQgDgdAGgZIAAgCIABgEIAEgNQAEgLAFgGIAAAAIAEgEIAFgEIAGgCIAFgBIAEAAIAEABIABABIACABIABABIADAEIABACIAAACIABACIABACIAAACIADAUIAEAdQADAWAGAQQANAnAVAVQAVgRAVgDQAVgEAAAPIAAACQAAAFgEAEQgRASgDAWQgGAeAVAgQAOATAWARQAXARAYAIIAbALQAdALAMAIIATAKQgDgVABgWQAAgsAPgFIADgBIACAAIACAAIABABQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAABIACADIACAEIADAKIAAABIAJAqQAGAaASAkIABACQAaAxAQAoIADAHQAKAbAEAVIABAHQAjgDAiADQABgIAEgQIADgJQAEgPAKgdIAAABQANgiAZgxQARgiAGg0QAFghAMADQAJACAGAOIAAAAQAEAKADAVIABApIAYgNQAegPAdgKQANgEAOgHIAGgEQAIgFAVgRQAZgWAJgXIAAgBIACgGIAAgBIABgGQAEgggJgRIgPgSQgDgGAAgFQgBgQAWADQAWAEAQAVQAJgIALgSQASgeAHghIABgDQADgcACgKQAAgIABgHIAAgBIACgHIAAgCQAFgSARAFQARAGAIAZIAAAAIAEARIAAAAQAFAdgDAaQgFA1ghAqQgZAhgPAmQgLAegJAPQgTAcghAUQh3BHhIBLIgxA9QADABAEAEQAngyAsgfQAkgZAmgUIAsgXIAhgUQASgIAFAKQAHAOgNAmQgHAUgVAuQgeBDgRAUQgpAvhIgFQAMAVgGAVIgBADIAAAAIgBAEIgFAIQAEAOgKAOIgGAHIgBAHQgCAegEARQgIAlgNAQQgUAZgwAPIgBAAIgCAGIgBADIgBACQgDAHgEAFQgCAEgFAEQgIAFgGADQgOAFgXABQgcAAgQgHg");
	this.shape_1.setTransform(-9.6336,-4.3448,1.331,1.331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy3, new cjs.Rectangle(-75.4,-67.9,131.60000000000002,128.8), null);


(lib.Slotcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").p("AH/oQQgpAIglAdQgYASgjANQgggMghAAQgjAAgiAMQgVAIgOAJQgxgYgmgMQhEgVhBAAQiXAAiGBuQgOgPgcgjQgWgdgNgOQgWgWgYgPQgrgbg6ACQg5ACguAeQgqAcgXAtQggBDAOBfQAOBgBJAtQA0AgBFAAQAMAAAVgGQgWBEgRBkIgDAUQgTAdgFA3QgFA8AQA6IACAHIAVgVQgJA4AiA2IAGAJIACgLQAEgRAMgNQAAAdAIAYQANAnAfAUIAIAFIgBgJQAAgTABgaQAZAoA3AbQBWAqCMAAIAAAAQCJAADTAcIABAAIASgBQAcAEAZAAQBEAAAdggQATgUgCgdIgBgIQAVhIAwgrQATgGASgJQAVAJAVAAQAlAAANgfQASgqgPhRQAbgpgXglQgMgTgcgMQgahYgdgvQgBgDAAgiQABgcgCggQBggaAohEQAohBgahZQgThBg3giQg4gihAAMg");
	this.shape.setTransform(37.7144,85.3181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AEZIeIgSABIgBAAQjTgciJAAIAAAAQiMAAhWgqQg3gbgZgoIgBAtIABAJIgIgFQgfgUgNgnQgIgYAAgdQgMANgEARIgCALIgGgJQgig2AJg4IgVAVIgCgHQgQg6AFg8QAFg3ATgdIADgUQARhkAWhEQgVAGgMAAQhFAAg0ggQhJgtgOhgQgOhfAghDQAXgtAqgcQAugeA5gCQA6gCArAbQAYAPAWAWQANAOAWAdQAcAjAOAPQCGhuCXAAQBBAABEAVQAmAMAxAYQAOgJAVgIQAigMAjAAQAhAAAgAMQAjgNAYgSQAlgdApgIQBAgMA4AiQA3AiATBBQAaBZgoBBQgoBEhgAaQACAggBAcQAAAiABADQAdAvAaBYQAcAMAMATQAXAlgbApQAPBRgSAqQgNAfglAAQgVAAgVgJQgSAJgTAGQgwArgVBIIABAIQACAdgTAUQgdAghEAAQgZAAgcgEg");
	this.shape_1.setTransform(37.7144,85.3181);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy, new cjs.Rectangle(-34.8,29.7,145.1,111.3), null);


(lib.StarIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98673C").s().p("AgUAIQgUgeAEgeQADgTAOACQAHAAAGAFIAIAuQAOA1AVAkQgqgogPgXg");
	this.shape.setTransform(-15.9368,-18.4931,0.7851,0.7851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA46C").s().p("AhFAeQAOgqAXgTQAmgfAmgFQAogGgEAdQgDgMgSACQgTABgZAPQg+AkggBHQACgRAIgWg");
	this.shape_1.setTransform(-45.4704,-50.9659,0.7851,0.7851);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98673C").s().p("AgSBHIghgFQAHgqAGgSQAVgDAfgvQAQgXALgXQAOCvgEAGQgegNgngHg");
	this.shape_2.setTransform(14.5715,-3.9454,0.7851,0.7851);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#98673C").s().p("Ag3AJIAagNQAjgOAwAAIACANQgQABgVAEQgqAGgZANg");
	this.shape_3.setTransform(-3.7162,1.7071,0.7851,0.7851);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2A766").s().p("ACXAFQg/gRhPgBQi4gEhCBEQAngzAggUQAxgfB1AAQBzgBA4AdQAfAQAsA7QgYgdhDgSg");
	this.shape_4.setTransform(5.4691,5.1218,0.7851,0.7851);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C8C8C").s().p("AgrALQgSgFAAgGQAAgFASgEQASgEAZgBQAaABASAEQASAEAAAFQAAAGgSAFQgSADgaAAQgZAAgSgDg");
	this.shape_5.setTransform(2.1906,38.0713,0.785,0.785);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AgPAVQgPgIgFgNQgFgMAGgJQALgTAeAZIAaATQAIAJgEAHQgFAJgRABQgPAAgPgJg");
	this.shape_6.setTransform(-3.6511,42.041,0.785,0.785);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AgOAfQgRAAgGgKQgFgIAJgIIAbgUQAfgaAMATQAGAKgFAMQgGANgPAJQgPAJgPAAIgBAAg");
	this.shape_7.setTransform(8.019,42.1209,0.785,0.785);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#575757").s().p("AhQAKQgHgGgBgGIAAgFQAdgSA7AAQA3gBAiAVQgBAHgKAIQgXAQg2AAQg9AAgUgQg");
	this.shape_8.setTransform(2.2887,38.6993,0.785,0.785);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3D3D").s().p("AhPAzQg0gZAFgXQAOhMBwAAQA+AAAiAXQAcAUAEAhQADAdg1AXQgtATggAAQghAAgvgXg");
	this.shape_9.setTransform(2.2023,42.4479,0.785,0.785);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDFB6").s().p("ABFBNQgugNgTAAQgGAAhEAKQgrAHgTgOQgRgLgBgYQgBgZAPgYQAog+BkAAQBcAAAoA+QAPAYABAYQAAAYgPALQgSAOgaAAQgLAAgNgDg");
	this.shape_10.setTransform(2.3068,41.1794,0.7851,0.7851);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEC497").s().p("ABiBaQgUAAgjgHQgjgGgHAAQhAAMgiABQg+AAAEg/QADgxAigeQApglBNAAQBLAAAoAlQAfAdAIAyQALA/hCAAIgBAAg");
	this.shape_11.setTransform(2.3947,42.0596,0.7851,0.7851);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB66D").s().p("AAABGIgygPQAAgkAPgpQASgyAZABQAWAAANAuQAKAlgCAmQgBAWgdAAQgJAAgMgCg");
	this.shape_12.setTransform(2.6167,31.7688,0.7851,0.7851);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA9C56").s().p("AgBBfIhSgUQAHg8ARgsQAahEAoAAQAnAAAWA/QATAzgEAzQgBAegxAAQgPAAgTgDg");
	this.shape_13.setTransform(2.7624,31.1794,0.7851,0.7851);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AA7ARQg0gNgRgBQgSAAgmALQgfAJgWgFIgFgSIAxgIQALgDAUgKIBNAAQAtANAvADIgIAWQgLAFgPAAQgOAAgSgFg");
	this.shape_14.setTransform(3.2111,48.8217,0.785,0.785);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_15.setTransform(-14.2164,22.8646,0.7851,0.7851);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_16.setTransform(24.3303,22.5309,0.7851,0.7851);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D2D2D").s().p("AggAtQgQgLgBgWQgBgUAOgTQAOgSAUgFQAUgGAPAMQAQALABAVQABAVgNASQgOATgVAFQgGACgGAAQgNAAgKgIg");
	this.shape_17.setTransform(24.4843,24.788,0.7851,0.7851);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D2D2D").s().p("AgCAzQgVgFgOgTQgOgSACgVQACgVAPgLQAQgMATAGQAVAFAOASQAOATgCAUQgBAWgQALQgKAIgNAAQgGAAgGgCg");
	this.shape_18.setTransform(-14.6875,24.788,0.7851,0.7851);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE7C42").s().p("AhxAgQg3gyADgeQACgPAugLQA1gNBNADQBSACApAQQAfAMgBAPQgDAcg7AvQhAAygvAAQgwAAg6g2g");
	this.shape_19.setTransform(5.0696,11.7339,0.7851,0.7851);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C19974").s().p("AAnBIQgegBgYgGIgTgHQgDgfgDgOQgHgYgPgTQgIgKgDgOIAMgJQAQgKAaADQAYADAWARQAUAQANAYQAPAdgCAYQgCAdgeAAIgCAAg");
	this.shape_20.setTransform(-13.4653,25.1928,0.7851,0.7851);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C19974").s().p("AgeBJQgugBAFgoQADgbANgWQARgeAhgRQATgKAZADQAZADAIAOQgEASgOAQQgJAKgEARQgDANgCAdQgYAYgoAAIgCAAg");
	this.shape_21.setTransform(23.5063,25.2922,0.7851,0.7851);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DB8947").s().p("AiPD0QAHhaAAgZQABhEgRgyQgEgJgthJQgnhBgBgWQAYgfAagXQAggiCNgCQCIgDA3AbQAgARAlAzQgJAvgvA1Qg5BBgLAXQgZAygLA1QgKAyAABBg");
	this.shape_22.setTransform(5.4691,21.5806,0.7851,0.7851);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9D3A8").s().p("ABbD+IjggHQgbgDgigUQgvgdgHgqIAEhEQACgqgagfQgqgwAphPQAcg2A3gxQAiggCMgDQCHgEA2AbQAeAOAjAvQAgArALAhQALAjgMAXQgEAKgZAaQgNAOgBApQgCA8gGAeQgLAxgzAgQgqAbglAAIgBAAg");
	this.shape_23.setTransform(5.1061,22.0639,0.7851,0.7851);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0B88C").s().p("AhtE/QgigVgFgyQg4gUgbggQgfglgGhDQAAgzgCgeQgEg0gYgeQgggnA2hRQAZgmBBhGQAggiCNgCQCIgDA3AbQAbAOAfAoQAPASAnA8QAXAjgDAiQgCAdgTAVQgNAOgEAsQgFBCgGAaQgOBCgXAeQgkAshYAbQgLAtgkATQgeAQgvAAQg5AAgcgSg");
	this.shape_24.setTransform(5.0664,28.4106,0.7851,0.7851);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B38D6F").s().p("AhmAFQgWghgHgjQgGgfAJgNQAGgKArAaQAvAdAyA1QAiAiAtAUQAWAKAPADQgSAhgeAUQh/gOg9hcg");
	this.shape_25.setTransform(-20.1434,4.5073,0.785,0.785);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFC79C").s().p("AhdBvQgZgbgWgtIghhMQgxhqAggbQAOgNA1AUQBAAYAyAlQAzAnAvA9QAgApAtAZQAWANAQAEQgCANgKASQgWAkgtAbIggABQh9AAg9hBg");
	this.shape_26.setTransform(-24.7721,1.0311,0.785,0.785);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3683C").s().p("AhPCeQgdgfgZgyIglhPQgnhVgLgiQgZhEANgZQAJgSAfAPQASAJApAaIBQApQBEAlBAAsQA9AqA3A8QAbAfAPAWIAAALQgBAPgHAQQgUAwg9AkQgeAEgcAAQhpAAhAhDg");
	this.shape_27.setTransform(-27.179,-2.6347,0.785,0.785);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B38D6F").s().p("Ah4BOIgNgTIAmgNQAsgVAigiQAxg1AwgeQAqgaAGAKQAJANgGAfQgHAjgVAhQg9Bch+AQQgTgNgRgVg");
	this.shape_28.setTransform(30.3605,4.6069,0.785,0.785);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFC79C").s().p("Ah/CuQgtgbgUgjIgKgdIAmgRQAsgZAggpQAug9AzgnQAvgjBDgcQAzgVAQANQAfAbgwBrIgkBOQgYAugbAcQg7A+hoAAQgXAAgbgDg");
	this.shape_29.setTransform(34.9502,1.0552,0.785,0.785);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3683C").s().p("AiSDeQg9gjgUgxQgGgPgCgPIAAgLIAqg1QA2g9A9gqQBAgtBDgmIBOgoQAUgLAogZQAggQAJATQANAZgYBEQgLAggnBXIgkBPQgZAygdAfQhABFhrAAQgaAAgegEg");
	this.shape_30.setTransform(37.3266,-2.6243,0.785,0.785);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#98673C").s().p("Al9HqQAQhZAjhFQAqhIAUgvQAghHALhGQAIg0ADgBQAcgKgGB4QgHB5gjA+IBkhNQB0hWBQgsQA8ghAlg/QAmhCghgeQgOgNgRAPIgOARQALgUACgUQAHg6gRgeQgUgXgGgJQgFgHAOgDQAOgDAUAHQA5ATAjBLIAug8QAuhGgEg0QgDgrgWgEIgWAEQAGgUADgcIAFgqQAFgoAgAIQAeAHARAwQAPAsgEAzQgDAsgMAiQgPAtggAqQguA8gZBBQgVA2gQAZQghAzg6AjQjUB/iBCHQgoArgbAlIgTAeg");
	this.shape_31.setTransform(42.7927,-35.2236,0.7851,0.7851);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DCA46C").s().p("AgCgZQgkgPgIAnQADgcALgJQAKgJASAGQAmAMANBJQgNg2gkgPg");
	this.shape_32.setTransform(69.1967,-73.2307,0.7851,0.7851);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DCA46C").s().p("AAbABQgXgRgdgGQgggFgEAPQgCgRAOgHQAOgGAVAHQA1ARAXA5QgKgSgZgUg");
	this.shape_33.setTransform(54.8156,-53.5328,0.7851,0.7851);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DCA46C").s().p("AgPAeQAdg8AMhdQAFgiAEgJQAGgOAPADQARAEAKAaQgFgMgKAAQgJAAgFAKQgEAIgEAVIgKA3QgLA6gZAuIg0BUIgeA4QATg3Awheg");
	this.shape_34.setTransform(20.0713,-23.4817,0.7851,0.7851);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DCA46C").s().p("AhzBPQAAglgRgbQA3gcA4gSQAdgKAbgRQAVgOAggaQAJgHAKgDQASgFAFANQAJAWgXAeQgXAeglASQgfAQhKAxIhFAtQADgNAAgSg");
	this.shape_35.setTransform(41.1107,-27.8149,0.7851,0.7851);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B78047").s().p("AmPHjQACgXAPgwQAchfA9h3QAeg9AMhcQAEgiAFgKQAGgNAPAEQAfAIAIBLQAEAmgDAkIArgYQA2gaA1gSQA+gWA1gzQA2gzAGgvQAHg5gRgeQgVgYgGgJQgOgXATgKQAXgMBIAxIAkgxQAmg/AMhEQADg8AFgaQAIgsAiALQAmAMANBEQAKAxgGA1QgJBdg7BNQgtA8gZBBQgVA1gQAaQghAzg7AjQjTB/iBCHQgpAqgbAmIgTAdQg2gTgxgGg");
	this.shape_36.setTransform(41.8967,-36.6896,0.7851,0.7851);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#98673C").s().p("AC7FwQiNiOi+huQg7gighgzQgPgYgWg4QgZhBgtg8QgggqgLgpQgHgcAAguQgBg0AOguQASg3AdgCQAWgBAGAuQAJBMAMAeQgEgGgHgFQgNgJgNAIQgbAUAGBAQAIBQBHBNIANgfQASgjAYgaQAkgkAigGQAMgDAGADQAFAEgFAFQgdAfgHAoQgKA2AlA5QgNgTgPgJQgfgTgLAwQgGAXAPAiQASAsAnAYQCLBWA4AnQB+BVBMBIQgNhOgmh2QgIgbgDgrQgEgxAHghQADgPAJgCQAHgBADAJQAHAdAIAuQALAtAhBBQA1BpAXA7QAYA/AIAwIhoAZQgggwhHhHg");
	this.shape_37.setTransform(-30.2913,-35.0161,0.7851,0.7851);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DCA46C").s().p("AgLBAIgKgyQgFgkABgoQABhPAYgJQATgIAHAZQgGgIgKAGQgKAGgCAPQgOBGAQBpQAIA1AMAnQgTgggMg5g");
	this.shape_38.setTransform(-14.9446,-25.8381,0.7851,0.7851);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DCA46C").s().p("AhCgNQgYgOgSgWQgVgXAAgUQAAgVAMgEQALgDAUAOQAtAfAtAQQAcAKAhAOQAqASASALQgtgKAEAuQAEAtAqAsQhIg6h8hKg");
	this.shape_39.setTransform(-29.1523,-25.6346,0.7851,0.7851);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DCA46C").s().p("AgpgNQAOg+AjgMQAggLAKApQgLgSgXAHQgXAJgNAfQgWAygFBEQgFg4ALgvg");
	this.shape_40.setTransform(-58.9087,-69.5512,0.7851,0.7851);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B78047").s().p("ADFGFQiNiOi+huQg7gighgzQgPgYgWg4QgZhBgtg8Qg7hNgJhdQgGg2AKgwQANhEAmgMQAigLAJAsQAGAaADA8QAMBGAiA6QASAeAPAPQBIgwAeAPQAKAFABAMQAAALgIAIQgZAZgDAGQgQAeAHA7QAGAvA2AzQA1AzA+AWQA1ASA4AcQAdAPARAKQgEglABgnQABhOAZgKQAPgGAHAPQAGAKAGAiQARBfAZAuQBJCGAgBhQAQAwABAWQgmAEglALIgdAKQgggwhHhHg");
	this.shape_41.setTransform(-31.0763,-36.6896,0.7851,0.7851);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EEC497").s().p("AhVAuQgigVgEgxQAbgqBkAEQBlADATAsQgKAsglATQgdAPgwAAQg4AAgdgRg");
	this.shape_42.setTransform(3.1531,49.8601,0.7851,0.7851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-76.7,136.1,131.6);


(lib.RoundedSquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3330").s().p("Ag5AvQAcgrAughQAXgRATgIQgQALgVATQgpAlgcAqg");
	this.shape.setTransform(-48.5677,2.5349,0.5979,0.5979);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgGAJAAQAKAAAIAGQAGAIABAJQgBAKgGAHQgIAIgKgBQgJABgIgIg");
	this.shape_1.setTransform(0.6968,-3.668,0.5979,0.5979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(38.9007,-7.868,0.5979,0.5979);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("AgqA+QgSgZAAglQAAgkASgaQASgaAYABQAagBASAaQASAagBAkQAAAlgSAZQgSAagZAAQgZAAgRgag");
	this.shape_3.setTransform(-0.5135,-1.5156,0.5979,0.5979);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3330").s().p("AAOAKQgUgdgYgLIAEgHQAZALASAhQAJAQAFAPQgGgNgLgPg");
	this.shape_4.setTransform(18.588,-42.1708,0.5979,0.5979);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A3230").s().p("AjeEvQg7gkgjg6Qgkg5gLhLQgXiZA0hrQAlhKBDgsQBKgxBdgDQBcgDBFArQAoAZAiAkQAWAXAjAuQAxA/AnAmQASARAkAwQgwgkgqgtQgYgagngyQgkgvgWgWQgggigmgYQhBgphYAEQhZADhGAuQhQA0ggBeQghBeATB7QAKBIAiA3QAjA3A3AiQA+AnBTAJQBRAJBLgZQhMAggoAAQhuAAhTgzg");
	this.shape_5.setTransform(-49.5245,-33.358,0.5979,0.5979);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF7A44").s().p("ACkBUIhEhDQgnglgbgSQhXg6hegEQhSgEhcAlQBJhQBzgOQBsgNBOAyQA5AkBIBeQBOBpBGA2QhMgChWhPg");
	this.shape_6.setTransform(-46.8144,-44.3114,0.5979,0.5979);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3230").s().p("ABpBXQgygWgSgbQhYAHgxgYQgggQgMgZQgIgSAFgUQAEgTAOgNQAUgSAaAFQAoAHAuA7QAYAfASAeQAQAXAuAfQAXAQAUALQgVgGgYgMgAh3hPQgLAKgDAPQgDAPAGAOQAJAVAcANQAsAUBOgFQgXgmgbgeQgkgogdgFIgHAAQgOAAgMAKg");
	this.shape_7.setTransform(-47.6446,-30.8382,0.5979,0.5979);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#924A37").s().p("AAKAQQgtgagRgaIBpBJQgUgIgXgNg");
	this.shape_8.setTransform(-42.0061,-26.7158,0.5979,0.5979);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#924A37").s().p("AhNAYQgQgTACgWQACgVAQgOQAlghA4A2QAmAkAgA3IACAEIgBgBQgXACgTAAQhcAAgigpg");
	this.shape_9.setTransform(-50.682,-32.7746,0.5979,0.5979);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#924A37").s().p("ABiBYQgwgegKgUQgagxgngjQg9g3g5AdQAdgxA8AJQBEAJArBfQAQArAkAsQAUAWAPANQgWgLgYgPg");
	this.shape_10.setTransform(-47.2629,-31.4435,0.5979,0.5979);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AE5E3B").s().p("ABFFQQhegEhfguQhYgqhEhFQhhhhAMjHQAviZCXguQBAgUBCAHQBAAHAwAeQA6AkBJBdQBQBkBJA3IhyDRIirCLg");
	this.shape_11.setTransform(-48.6358,-34.062,0.5979,0.5979);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#924A37").s().p("Ai3E9QiZhBgaixQgViNAshlQAmhZBSgwQBKgrBYAAQBTABA+AmQA6AkBIBdQBPBlBJA2IkfFgQg9AUg7AAQhKAAhIgfg");
	this.shape_12.setTransform(-49.1547,-33.3446,0.5979,0.5979);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373130").s().p("AgigqQBIhKBHA6QghgDgsARQhXAig1BeQAThHA3g3g");
	this.shape_13.setTransform(-0.8129,-24.7125,0.5979,0.5979);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3D3531").s().p("AgkAUQACgTAFgGQAKgOANgIQARgNAbADQgRAFgSAMQgiAWgGAlIABgTg");
	this.shape_14.setTransform(11.4883,22.9248,0.5979,0.5979);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3D3531").s().p("ABMCvQg0gVgogkQhDg8hHheQhLhjgIgtIADgMIAIAEQBFAvBQAqQCHBIBZAFQAjADArgEIANgBIgGANQgnBIAPBlIAAABQAAAPgNAHQgNAIgYAAQglAAgtgSgAiBgbQBBBTA6AzQAmAjAwATQArARAjAAQAjAAABgOQgPhiAihJQgeACglgDQhTgFh7g8QhNgnhQg0QAUAyBEBXg");
	this.shape_15.setTransform(24.6139,33.2603,0.5978,0.5978);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF8F8").s().p("AADAKQgDgCgDgFQgIgKAEgDQAFgDAHALQADADABAEQABAFgCABIgCABIgDgCg");
	this.shape_16.setTransform(33.4085,40.8876,0.5978,0.5978);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BE4D4D").s().p("AALALQgNgZgTgNIAEgHQAUAOAMAcQAFAPACAMQgDgLgIgNg");
	this.shape_17.setTransform(27.5967,38.3767,0.5978,0.5978);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BE4D4D").s().p("AB2BQIgRgBIgBABQhNAAhchHQgWgQgvg1IgIgKIAFgCQAPgHAVAAQApAAAoAXQAcgKAYAAQA9AAAlA7QAIALAGAQQAGAOABAHIgDABQAKAagXAKQgEACgHAAIgCAAgAiFhDIACACQArAyAYASQBfBJBFAAQAYAAAJgDQAMgFgBgLQAAgEgEgJIgBgCIABAAQgKgfgQgWQgigvg0AAQgZAAgaAKIgCABIgBgBQgngXgoAAQgQAAgMAEg");
	this.shape_18.setTransform(27.8892,39.6244,0.5978,0.5978);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8B0B2").s().p("AAhA6QglgHg6ghQgUgMgMgSQgMgWALgLQAYgYAtBAQABgwAggGQAmgGAvBAQAFAMADAKIACANQgBANgPAHQgOAGgRAAQgLAAgLgCg");
	this.shape_19.setTransform(30.53,40.867,0.5978,0.5978);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F59799").s().p("AA4BIQg4gQhFg0QgXgRgyg5QAXgLAjAGQAfAFAaAQQBTgfAzA8QAaAdAIAkIACANQAAANgQAHQgNAFgRAAQgTAAgWgGg");
	this.shape_20.setTransform(28.0386,39.7548,0.5978,0.5978);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#523232").s().p("AhDBZQATgrAGgxQAFgygKgxQARAEAUABQAmADApgDQgpBMAQBmQAAATgiADIgKAAQgdAAgmgOg");
	this.shape_21.setTransform(33.985,38.1914,0.5978,0.5978);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3C3131").s().p("ACDC1QhNgOg+g4QhCg6hHhdQhJhjgJgtQBCAvBTArQCJBIBaAGQAnADAogEQgoBLAQBoQgBAXgkAAQgPAAgVgEg");
	this.shape_22.setTransform(24.4495,33.3577,0.5978,0.5978);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373230").s().p("AAOCqQgeAAg2goQgxglgLgYQgEgIAEgGQAGgIAQgBQAHABATADQAZADAIAAQAUAAAMgKQALgKAFgMQADgNgDgJQgHgUgeACQgSABgTAOQgMAHgSATQgNAMgGAFQgJAGgHAAIgGgBIgCgBQgUgOgMgdQgMgdACgfQADgwAjgTQBMgrBQAAQA8AAAxAXQAsATARAcQAsBJhFBMIgGAGIAAADQgIAbgoAnQgtAtgiABgAh1A/QAHASAvAjQAzAoAaAAIABAAQAbgBAmglQAighANgaIgFgBQglgIgLgRQgKgQAGgYQAFgQATAAQAPAAAPANQAPANAIAZQAyg+gjg6QgPgZgqgSQgugUg3AAQhMAAhJAoQgdAQgCAoQgBAaAKAaQAKAZARANQAFAAATgUQAVgUAMgIQAWgPAWgCQAngCAMAeQAFAOgFAQQgGARgOANQgPAOgaAAQgKgBgZgDQgRgDgHAAQgGAAgDACgACJAvIgBgCQgFgbgOgPQgLgMgMAAQgIAAgCAGQgEARAHAKQAHAOAfAFIAMAEg");
	this.shape_23.setTransform(49.4357,14.0195,0.5979,0.5979);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D3531").s().p("AgJAqQADgTACgjIAAgfIAOAAIgBAhQgBAigEAVg");
	this.shape_24.setTransform(50.4405,26.4151,0.5978,0.5978);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#895F46").s().p("AhSgWQA2gVAyAMQAaAGAPAKIAKAPQAKAUAAARQgvg1h2gGg");
	this.shape_25.setTransform(55.3051,8.5681,0.5979,0.5979);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C4032").s().p("AAJCGQg4gFhMgqQAHgHAqAGQArAHASgQQAagXgHgbQgGgbgnABQgdACgjAiQggAggJgDQghgYgFg2QgGg7AngWQBkg3BmASQBXAQAcAuQAWAlgIAjQgHAhggAjQgIgrgbgOQgZgNgGAVQgJAkAhAOQAQAHATAEIgBADQguAwhAAAIgQgBg");
	this.shape_26.setTransform(49.4505,12.32,0.5979,0.5979);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#553830").s().p("AhKB1Qg6guAIgLQAGgIAqAGQAtAHASgQQAagXgHgaQgGgcgnACQgdACgjAhQggAggJgDQghgYgFg2QgGg7AngWQBkg3BmASQBXAQAcAuQAWAlgIAkQgHAgggAjQgIgrgbgNQgZgNgGAVQgJAjAhAOQAQAHATAEQgIAZgmAmQgrArggABIgCAAQgeAAg5gug");
	this.shape_27.setTransform(49.4505,14.0012,0.5979,0.5979);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#37322F").s().p("AhtBfQgwgqgCg3QgCguAkglQAXgYAhgNQAigOAkAAQBCABAvAoQAvAoAAA3QAAA4gvAoQgvAohCAAQg9AAgxgpgAg/htQgfANgVAVQgfAgABApQACAxAsAmQAsAlA4AAQA8AAArgjQAqglAAgyQAAgxgqgkQgrgkg8AAQghAAgfAMg");
	this.shape_28.setTransform(49.3397,13.7504,0.5979,0.5979);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#433531").s().p("AhqBYQgtgngBgzQgCg1AuglQAugkA/AAQA/AAAtAmQAsAmAAA0QAAA1gsAmQgtAmg/AAQg9AAgugpg");
	this.shape_29.setTransform(49.354,13.7654,0.5979,0.5979);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2D2D2D").s().p("AgDCSQhGgDgggmQghgpALhGQAKg8AlgnQAmgoAtAAIADAAQAtACAlArQAlAsAFA5QAHBFgkAoQghAjhAABgAhLhjQgjAmgJA4QgLBCAfAmQAeAkBCADQBCACAggkQAiglgHhBQgFg2gigpQgjgqgqgCIgDAAQgrAAgjAmg");
	this.shape_30.setTransform(0.9585,-3.668,0.5979,0.5979);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgDCCQg3gBgjggQgngjAIg6QAJg4AlgnQAlgoAuABQAsACAkAqQAlArAEA3QADA5gpAhQgjAdg0AAIgEgBg");
	this.shape_31.setTransform(0.9781,-4.3251,0.5979,0.5979);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B8B8").s().p("AgDCNQhQgCgdgzQgUgmAJg4QAJg6AlgmQAlgoAuABQArACAkAqQAkAqAFA4QAGA4gYAlQgfAwhJAAIgHgBg");
	this.shape_32.setTransform(0.9597,-3.666,0.5979,0.5979);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#924A37").s().p("AgrEgQgygHgjgSQgkgTgCgZQgbjuBNiYQAfg9ApggQAmgeAiAEQA5AIAmBOQAgBDAMBoQALBcgIBUQgIBTgWAUQgxAthVAAQgXAAgagDg");
	this.shape_33.setTransform(0.9374,-12.3857,0.5979,0.5979);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3D3531").s().p("AjBHVQhNgUg1hHQgfgpgjhSQgSgqgGgKIgKgPQgyhPgSg4QghhoA1hHIABAAQAXgZBFgvQA3glAYgVQAogiASgeQAmhFA5g0QBGhAA6AFQA/AGCiBYQCmBaBDBGIABACQAhA3AUBqQAXB6gdBCQgVAyg7AAQgiAAgigPQhEAhhLAOQgmBeAMBSQADAugeAhQgwAzhrAAQhOAAhogcgAiKmoQg1AxgmBCQgSAhgqAjQgYAUg5AnQhEAvgVAWQgxBCAgBjQARA1AwBLIALAQQAGALASAqQAjBSAdAmQAyBDBIATQBmAbBNAAQBlAAArguQAbgdgDgnQgOhVAqhmIACgDIAEgBIAvgLQA4gPAqgWIADgBIAEABQAAACAUAGQAYAHAVAAQAyAAARgpQAag7gUh0QgThnghg5QhBhDikhaQighXg8gFIgHgBQgyAAg9A6g");
	this.shape_34.setTransform(29.9789,20.884,0.5979,0.5979);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DCB192").s().p("Ag8giQhthFg6gaQA+AFCiBYQCkBZBDBFQADAFgxgEQgxgFAEANQgxhGiUhfg");
	this.shape_35.setTransform(42.3966,-0.5682,0.5979,0.5979);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C58051").s().p("AAqEmQhOgWhBgnQgOgHhSg5QgygigpgNQg4gQhNAIQgnACgPgSQgOgQALgOQASgUBlhFQBWg9AZgtQAnhFA4gyQBDg+A2AGQA9AFChBXQCmBbBCBFQAXAmATBKQAVBTgCBDQACAXgRATQgQASgYAFQg9AOgig9Qg3A0hcAQQgjAGggAAQgpAAgkgKg");
	this.shape_36.setTransform(30.7538,9.7747,0.5979,0.5979);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A2633E").s().p("AjAHOQhbgYg5hiQgRgegVgxQgVgwgIgNIgfgxQgZgrgOglQgshxA4hLQASgUBlhGQBWg9AZgsQAnhGA4gyQBDg+A2AGQA9AFChBYQCmBaBCBFQAhA3ATBpQAWB4gbA+QgWAyg/gFQgTgCgVgHIgSgGQgrAWg5APIgvALQgpBiANBVQAFBIhMAgQgrATg9AAQhMAAhpgcg");
	this.shape_37.setTransform(29.9788,20.8946,0.5979,0.5979);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373130").s().p("AAZAHQgthFgsAIQAXgiAfARQAqAYAgB9QgPgkgYgjg");
	this.shape_38.setTransform(40.9633,-23.2549,0.5979,0.5979);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D2D2D").s().p("AgbAoQgLgRAAgXQAAgXALgQQAMgRAPAAQAQAAALARQAMARAAAWQAAAXgMARQgLARgQAAQgPAAgMgRg");
	this.shape_39.setTransform(38.2729,-6.3135,0.5979,0.5979);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2D2D2D").s().p("AAEB6QgwgBgagfQgegkAIg7QAIg2AXgfQAYggAfAAIACABQAgABAeAjQAgAlAEAwQAFBFgcAeQgWAYgoAAgAg3hUQgWAegHAyQgDAaAFAXQAFAZANAQQAXAbAtABQAoACAVgWQAagdgFhBQgDgsgegkQgcgggdgBIgCAAQgcAAgVAdg");
	this.shape_40.setTransform(40.5569,-8.2417,0.5979,0.5979);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AACBnQglgFgagaQgdgbACgkQACgwAYggQAYghAiABQAeABAeAiQAeAlADAuQAEAygcAXQgUAQgcAAIgPgBg");
	this.shape_41.setTransform(40.5974,-9.0896,0.5979,0.5979);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B8B8").s().p("AAEB2Qg5gBgXgrQgSgiAGgtQAHgyAWgfQAXghAgABQAfABAdAjQAeAlAEAtQAIB3hZAAIgFgBg");
	this.shape_42.setTransform(40.5625,-8.2396,0.5979,0.5979);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#924A37").s().p("AgIDdQhDgIgHgpQgfi2Aah1QAXhkAsAGQA+AIAnC4QAQBGADA/QADBAgLAQQgbAmg2AAIgTgBg");
	this.shape_43.setTransform(40.5135,-14.4281,0.5979,0.5979);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3A3230").s().p("AjfMcIgBAAQjhAAiKhEQhZgsgphBQgBAzABAWIABAPIgMgIQgygigVg9QgOgoAAgtQgTAVgGAbIgEARIgJgOQgfgxgJg2QgGgmAFgkIghAiIgDgMQgahdAIhhQAHhYAfgvIAFgfQAei3AviEQBXj0CdiXQDdi8D8AAQBqAABsAiQA+AUBOAlQBOgtBaAAQCKAABwB0QBjBmAhCfQASBYgDCGQgBA2ADAFQA4BaAqCjQArClgFBoIAAAFIgcAOQh9BDgwAsQhOBGgiBzQgZBYg5AaQgnARiCAFIguACQlVgsjcAAgArLJOIARAeQAaAlAsAdQCMBfEIAAIABAAQDdAAFVAsIAtgBQB9gFAlgRQA0gWAXhSQAjh3BQhIQAyguB/hDIAVgLQADhngqihQgqigg1hWQgEgHAAgPIAAgtQACiFgShVQgfichhhkQhrhuiEAAQg7AAg6AWIgvAXIgDACIgEgCQhPgmg7gTQhsgjhpABQj2gBjZC4QiaCVhWDxQgvCCgdC2IgGAiIAAABIgBABQgbAngJBOQgKBbAYBeIA4g9IgLAiIgHA0QgBBBAhA7QAIgWAQgRQAIgIAGgGIANgIIgBAPIADBBQAOBIAwAnIABg8IABgbIADgjg");
	this.shape_44.setTransform(2.145,0.0297,0.5979,0.5979);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BF7A44").s().p("AhRgcQjOgfimA1QhJAYhOAyQDoi4EHAUQCKALCmBPIAkgSQAugUAwgGQCbgSB8B9QhygzhCgBQhlgCguBgQifhijHgdg");
	this.shape_45.setTransform(5.16,-43.8366,0.5979,0.5979);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AE5E3B").s().p("AjxKvQjYg8iShvQhphOgWijQgHgxgDhgQgEhlgFgsQgFgngTghQgYgrgigJIAEgKQgUABgIADIgGAEIgFABIgSgCQBXkGCkieQDujJEOAQQCPAJCsBSIAkgSQAugUAxgGQCcgSB9CBQB5B9AUDSQAFA4gBBRQgBA+AEAIQAzBSAqCZQAoCUACBrQhWgYhLAOQhUAQgvA8QiDDCjtAtQgRgUgQAHQgeAOgQAAQjUgNivgxg");
	this.shape_46.setTransform(5.5038,-4.9848,0.5979,0.5979);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#924A37").s().p("AjfMVQkPAAiNhiQgsgfgaglIgRgfIgBAhQgCAmABAeQg7gngQhQQgGgZAAgaIABgVQgIAFgIAKQgSAVgGAcQgqhBAAhIIAHg8IgqAsQgahfAJhhQAIhVAdgrQAKg9AKg0QAUhlAchZQBXkRCqiiQDtjKEPARQCPAJCrBSIAlgTQAugUAwgFQCdgSB8CBQB5B9AUDRQAGA4gBBRQgBA/AEAIQA3BZAqClQAqCigFBlQiQBOgtAmQhYBLgjB6QgaBchBAWQghALimAIQlWgsjcAAg");
	this.shape_47.setTransform(2.1389,0.0222,0.5979,0.5979);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3A3230").s().p("AAQErQgshRg9hfQh6i7hbhcIgJgJIAMgDQBjgaA6gsQA8gtBCgOQBmgUBZA3QBaA4AeBoQAqCNhABqQgjA6g/ApQhAAphTARIgEABIgGABgAgNkaQg/ANg5ArQg6ArhcAaQBXBaBvCrQA7BaA0BdQBQgRA9gmQA8gnAig3QA9hlgoiHQgehkhUg0Qg8gmhFAAQgaAAgaAGg");
	this.shape_48.setTransform(47.2981,-35.0354,0.5979,0.5979);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BF7A44").s().p("AjrAmQBjgZA8gtQBMg6BWgEQBRgEBFAsQg0gJgvADQg3AFgpAUQglAShMA1Qg/ArgxAQQgcgigXgXg");
	this.shape_49.setTransform(43.6021,-47.0465,0.5979,0.5979);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#924A37").s().p("Ai0g+QBaBGBjgKQBigLBKhUQgcBMhKA0QhEAwheATQgnhFg6hbg");
	this.shape_50.setTransform(53.661,-23.2568,0.5979,0.5979);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3A3230").s().p("Ag6BgIgogFIgDAAIgegqIAKgDQANgFATgRQALgJAZgYIAYgaQATgWAMgLQAYgVAYgFQAIgBAJAAQAzAEALApQAIAdgQAjQgRAkgeAUQgUAPggAGQgbAFghAAIgUAAgAA1hPQgVAEgWATQgLAKgQAUIgZAaIgiAhQgSAPgNAIIAPAVQA+AKAxgKQAdgGASgNQAbgRAOggQAPgfgHgYQgHgggqgDIgNACg");
	this.shape_51.setTransform(50.0254,-33.8039,0.5978,0.5978);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#924A37").s().p("AhjBUQgOgVgIgKQARgHAYgWIAugtQAGgFAcghQAggdAgAAQA/AFgFA8QgGA3gwAgQgkAZhFAAg");
	this.shape_52.setTransform(50.1697,-33.8025,0.5978,0.5978);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#924A37").s().p("AiCA5QAUgOA1hBQArg2ArgMQAvgOAhApQAPAVAHAXQgJgGgNgHQgcgMgagCQgbgBhGBEIhCBGg");
	this.shape_53.setTransform(49.8497,-36.3302,0.5979,0.5979);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AE5E3B").s().p("AhTB+Qh7jAhehfQBjgZA8guQB8heCEAtQCCAsAoCJQAvCdhWBvQhMBiiXAeQgohKg+hgg");
	this.shape_54.setTransform(47.4926,-35.0897,0.5978,0.5978);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-54.5,137.7,105.1);


(lib.Slots = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.slot0 = new lib.Symbol1();
	this.slot0.name = "slot0";
	this.slot0.setTransform(485.4,316.95,1,1,0,0,0,26.1,30.4);

	this.slot1 = new lib.Slotcopy3();
	this.slot1.name = "slot1";
	this.slot1.setTransform(778.35,392.1,1,1,0,0,0,-38.5,8.4);

	this.slot2 = new lib.Slotcopy();
	this.slot2.name = "slot2";
	this.slot2.setTransform(340.9,421.2,1,1,0,0,0,16.1,86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot2},{t:this.slot1},{t:this.slot0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(290.2,284.7,582.3,190.40000000000003), null);


(lib.StarPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.instance = new lib.StarIcon("single",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAWQgHgJAAgNQAAgMAHgJQAHgJAIAAQAKAAAGAJQAHAJAAAMQAAANgHAJQgGAJgKAAQgIAAgHgJg");
	this.shape.setTransform(-22.1067,-11.4313,0.5378,0.5378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgmA1QgQgWAAgfQAAgeAQgWQAQgWAWAAQAXAAAQAWQAQAWAAAeQAAAfgQAWQgQAWgXAAQgWAAgQgWg");
	this.shape_1.setTransform(-20.09,-9.4281,0.5378,0.5378);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAZQgIgLAAgOQAAgNAIgLQAIgKAJAAQAKAAAIAKQAHALABANQgBAOgHALQgIAKgKAAQgJAAgIgKg");
	this.shape_2.setTransform(1.8649,-10.5978,0.5378,0.5378);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("AgrA8QgSgZAAgjQAAgiASgZQASgYAZAAQAaAAASAYQASAZAAAiQAAAjgSAZQgSAYgaAAQgZAAgSgYg");
	this.shape_3.setTransform(4.137,-8.3391,0.5378,0.5378);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F48884","#C25C68"],[0.012,1],15.7,4,-25,-12.1).s().p("AjIBXQgGgEgIgIQgHgGAFgYQAEgPAJgNQAQgWATgKQAVgLAagIQAcgJBGgLQBQgLAggKQA/gTAfgpQAKACAHACIAQBSQALBYgbAiQglAxhrALQgXADgWAAQhnAAhsgxg");
	this.shape_4.setTransform(28.3393,-16.6141,0.5377,0.5377);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEC92F","#F79939"],[0,1],-20.1,-47.1,45.8,96.4).s().p("Ai5BaQgQgJgOgYQgcgwAPhIQAHgiAYgVQANgLALgEICxgEQC3gCAcALIAQBSQALBYgbAiQglAxhrALQgXADgWAAQhnAAhsgxg");
	this.shape_5.setTransform(27.5213,-16.7699,0.5377,0.5377);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AAZBOQgPgVgwg4Qgxg3gRgPQgGgFACgKQADgJAIgCQA4gMA6AwQAnAgAsA9QAYAjglAVQgPAJgNAAQgTAAgPgVg");
	this.shape_6.setTransform(6.4492,-30.7801,0.5378,0.5378);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AhNBXQgjgVASgjQAfg5A2ggQAigVANgGQAegMAYAGQAGABACAGQACAGgDAFQgDAGg2A+Qg3A+gKAQQgMAVgTAAQgKAAgNgHg");
	this.shape_7.setTransform(-24.2923,-34.53,0.5378,0.5378);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D3F32").s().p("AivA7QgDgCABgDQAQgvAxgdQApgZA3gJQA2gJAyAQQA0AQAkAmQAEAEgDAEQgCAEgFgBIhagTQg2gKgkADQgrAEgpAUQgbAMgxAhIgCABIgDgBg");
	this.shape_8.setTransform(4.4935,-28.0734,0.5378,0.5378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D3F32").s().p("ABWAmQgJgDgYgOQgUgLgNgEQgUgGgbgDQgcgFgUABQgMAAgGgHQAZgPAhgGQAQgDALAAIASADQAXAFATANQAhAVAJAaQABAEgDADQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgCgBg");
	this.shape_9.setTransform(-18.5765,-25.8976,0.5378,0.5378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D3F32").s().p("AgyBgQgEgBgBgDQgRgyAfhNQAPgkAJgLQASgWAaAQQAZAOAHAdQAHAagKAbQgJAdgVAPQgXARgcgHIgGgCIgPAhQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_10.setTransform(-19.3938,25.6466,0.5378,0.5378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3F32").s().p("AAfCCQglhEgRgzIgKgkQgIg4AEgyQASANAUBOQAHAZAUA6QAQA3gIAfQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIAAABIgDgCg");
	this.shape_11.setTransform(-36.207,28.5426,0.5378,0.5378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8EF68").s().p("Ai7EmQgEgFgKgJQgkkED5h1QA0gZA8hJQAngwAlg8IAAABQAZBShDBRQgpAwhhBBQg6AmgZAWQgtAngVApQgUAqgOAyQgOA1gCAtg");
	this.shape_12.setTransform(-27.2012,11.5898,0.5378,0.5378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FEC92F","#F79939"],[0,1],-34.6,-73.8,31.3,69.6).s().p("AkDH6Qg9gZhChvQg5hjAUhfQAHgdANgaQAHgNAFgHQgpkJD+h5QA/gdBLhmQAlgzAYgtIGYEIQgCArhGBxQhYCMgiBaQgtBziwCAQg1Ang+AlIgyAcQgkAcgjAAQgTAAgSgHg");
	this.shape_13.setTransform(-16.9311,21.698,0.5378,0.5378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AhNB4QgggqgBg9IACgjQAKAoAnAUQAmATAlgRQAlgRgPhcQgMhHgOgaQAuAIAcA7QAZAzAAA9QAAA9ghAqQggAqguAAQgtAAgggqg");
	this.shape_14.setTransform(-22.1637,-10.9151,0.5378,0.5378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhNB5QgggrgBg8QABhFAYgyQAeg9A2AAQA0AAAgA9QAcA1AABCQAAA8ghArQggAqguAAQgtAAgggqg");
	this.shape_15.setTransform(-22.1637,-10.9554,0.5378,0.5378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3D3").s().p("AhtCWQgsguAAhPQAAgmAJgmQAKgnARgfQABABgFAzQgCA2AIAVQAVAxAwAQQAwAQAmgmQAcgcAIgsQAIgpgLgpQgNg7g3gdQBBAKAsBEQAoA/AABNQAABPgvAuQgsAshCAAQhBAAgpgsg");
	this.shape_16.setTransform(3.8096,-11.3453,0.5378,0.5378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhtCXQgsguAAhPQAAhUAlhBQAnhFA9gCQBJgCAyBIQAvBCAABUQAABOgvAvQgsAshCAAQhBAAgpgsg");
	this.shape_17.setTransform(3.8096,-11.3871,0.5378,0.5378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#983637","#843337"],[0,1],-5,13.5,5.5,-13.1).s().p("AhyDHQgHgggBhCQgBgYgMgPIEPlbQgGC7goCmQgKAAgLABQgyAJgjApQggAjgSA2QgNAmAAAoQgagkgJgzg");
	this.shape_18.setTransform(-5.601,32.3201,0.5378,0.5378);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F48D96").s().p("Ag7AlQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQA+gNAegiQAKgMAQgaQgSAzgYA0QgQAGgNAAQgaAAgXgSg");
	this.shape_19.setTransform(-6.048,45.853,0.5378,0.5378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E04B50").s().p("AhpDOQgPgqgChdQgBgXgMgQIEPlbQgHDFgrCsQgmCcg8BqQhFgqgYhEg");
	this.shape_20.setTransform(-5.601,33.9064,0.5378,0.5378);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#713031","#4A3232"],[0,1],-14.4,30.1,1,4.8).s().p("AiuEFQgLgrgFg2IgEgtIGFnxQgKEnhXDfQhODLhbAgQgKAEgKAAQg3AAgch2g");
	this.shape_21.setTransform(-8.7603,37.3226,0.5378,0.5378);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8EF68").s().p("AgxAfQAFgYAMgcQAQgkAXgRQARgCAMAMQAMALACARQADAjgOAeQgSApgVAEIgLABQgjAAgDgsg");
	this.shape_22.setTransform(-26.1284,-57.0162,0.5378,0.5378);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8EF68").s().p("Ag1AsQgXgKAFgYQACgPAKgOQAJgOAOgHQAWgMAYABQAYAAASALQAVANAAAWQAAAogwANQgSAEgQAAQgXAAgVgIg");
	this.shape_23.setTransform(11.4393,-59.4021,0.5378,0.5378);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#CB753D","#985539"],[0,1],-4.8,-18.1,126.2,457.2).s().p("AgEApIgWgGQgJgEgEgNQgHgaANgNQANgNANgGQALgEAPACQAQAEAFALQAFAKgHAUIgLAfIgEAGIgBABQgDACgDAAIgEABQgHAAgJgDg");
	this.shape_24.setTransform(16.5631,8.9099,0.5378,0.5378);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CB753D","#985539"],[0,1],-2.2,-7.7,128.8,467.6).s().p("AAMA2QgpgFgXgGQgPgDABgLQABgEAIgTIANgbIAFgIQAFgHAMgGQAQgIAGgCQAOgEAXAHQAZAHADAOIAAAAQAGAXgMAVQgJAQgVATQgDADgJAAIgFAAg");
	this.shape_25.setTransform(20.3344,1.9231,0.5378,0.5378);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#CB753D","#985539"],[0,1],0.9,4.1,131.9,479.4).s().p("AgNAWQgNgDgDgCQgDgDgCgKQgCgNAEgGQAKgSAdARQAcAQABATIgBAFIgBABIgCABQgVAAgYgEg");
	this.shape_26.setTransform(19.9511,-4.7647,0.5378,0.5378);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CB753D","#985539"],[0,1],-1.4,-4.1,129.7,471.2).s().p("AgpAmQgNgDgGgFQgOgLAIgMIAUgQIAogiQASgRANAEQAHACAJALIASAVQAIAKACAMQACAMgEAQIgKAdQgzgFgvgOg");
	this.shape_27.setTransform(10.7804,2.4813,0.5378,0.5378);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FEC92F","#F79939"],[0,1],-19.9,-53.1,46,90.4).s().p("AkQR6QgmgYgnjmQgokLgThWQgZhsgEjgIAAj6QAAgngMiPIgMiGQgFhnBMgnQAmgUAmABIAXgQQAVgVgCgaQgDgpgoh3QgsiBgVgDQg2gGgjgjQg5g6AvhsQAag6AsgHQAmgGAqAgQAmAeAVArQAWAugNAdQgXA0AHAfQAEARAPAXQAZA3AXAvQArBUASAHQAZAJBGAFQBLAFAMgMQAPgPBMiBQBNiFAAgOQgNgIgQgYQgSgbgGgdQgQhSBXgpQBggtA6BEQAZAeAGApQAHArgRAqQgTAzgnASIgjAIIgpCEQgpCIAHAYQADAMAfAJIBEARQBnAcAaA/QAzB7gJB4IgfC9QA8CDhPBxQgUAcgxA0QgqArgKAWQgZAygLCYQgGBMgBBCQgVCOhbA/IhIApQgmAXgQAZQhcCVhgAeQgXAIgYAAQgqAAgqgZg");
	this.shape_28.setTransform(-2.1296,0.0411,0.5378,0.5378);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F48884","#C25C68"],[0.012,1],-5.3,-0.1,5.9,-2.2).s().p("AgwBvQhZgMgdgqQgUgdALhIIAQhEQAGgCAIAAQAgAtBaAUIBKAOQAqAIAZALIAMAAQA/AwgRAoIgMAJQhTAihPAAQgZAAgZgEg");
	this.shape_29.setTransform(-30.1618,-18.5578,0.5377,0.5377);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FEC92F","#F79939"],[0,1],-19.3,0,19.4,0).s().p("Ag+BwQhZgMgdgqQgUgdALhIIAQhEQAXgICXAHQBMAEBHAFIATANQATATAFAcQAJA8gYAmIgaAbQhTAihOAAQgaAAgZgEg");
	this.shape_30.setTransform(-29.4074,-18.612,0.5377,0.5377);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-62.9,80.1,125.9);


(lib.Pieces = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.piece2 = new lib.RoundedSquarePiece();
	this.piece2.name = "piece2";
	this.piece2.setTransform(820.4,192.25);
	new cjs.ButtonHelper(this.piece2, 0, 1, 1);

	this.piece0 = new lib.StarPiece();
	this.piece0.name = "piece0";
	this.piece0.setTransform(574.2,192.25);
	new cjs.ButtonHelper(this.piece0, 0, 1, 1);

	this.piece1 = new lib.SquarePiece();
	this.piece1.name = "piece1";
	this.piece1.setTransform(244.7,204.25,1,1,0,0,0,0,12);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece1},{t:this.piece0},{t:this.piece2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(181.9,115.6,704.5,139.70000000000002), null);


(lib.Game = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.win = false;
		createjs.Sound.play("intro");
		this.resetPosition = true;
		this.piecePrefix = "piece";
		this.slotPrefix = "slot";
		createjs.Touch.enable(stage);
		this.start = function()
		{
			for (var i = 0, total = this.pieces.children.length; i < total; i++)
			{
				var piece = this.pieces.children[i];
				piece.originalX = piece.x;
				piece.originalY = piece.y;
			}
			
			this.on("mousedown", this.mouseDownHandler.bind(this));
			this.on("pressmove", this.pressMoveHandler.bind(this));
			this.on("pressup", this.pressUpHandler.bind(this));
		}.bind(this);
		
		this.mouseDownHandler = function(e)
		{
			if (e.target.parent == this.pieces)
				this.pieces.setChildIndex(e.target, this.pieces.children.length - 1);
		};
		
		this.pressMoveHandler = function(e)
		{
			if (e.target.parent == this.pieces)
			{
				e.target.x = e.stageX / stage.scaleX;
				e.target.y = e.stageY / stage.scaleY;
			}
		};
		
		this.pressUpHandler = function(e)
		{
			var target = e.target;
			var slot;
			var objects;	
			
			if (!target || target.parent != this.pieces)
				return;
			
			objects = this.slots.getObjectsUnderPoint(target.x, target.y);
			
			if (objects.length == 0)
			{
				this.returnToOrigin(target);		
				return;
			}		
			
			slot = objects[0].parent;
			
			if (slot)
			{
				if (target.name.replace(this.piecePrefix, "") == slot.name.replace(this.slotPrefix, ""))
				{
					target.x = slot.x;
					target.y = slot.y;
					target.mouseEnabled = false;
					//target.alpha = 0.5;
					
					target.inPlace = true;
					var my2=createjs.Sound.createInstance("yes");
			
		this.my2;
		my2.play();
				}
				else
					this.returnToOrigin(target);
				
			}
			
			for (i = 0, total = this.pieces.children.length; i < total; i++)
				if (!this.pieces.getChildAt(i).inPlace)
					return;
					
			this.onWin();
		};
		
		this.returnToOrigin = function(obj)
		{
			if (this.resetPosition)
			{
				obj.x = obj.originalX;
				obj.y = obj.originalY;
				var my3=createjs.Sound.createInstance("wro");
			
		this.my3;
		my3.play();
				
			}
		}.bind(this);
		
		this.onWin = function()
		{
			this.win = true;
			//exportRoot.gotoAndStop(1);
			
			
		}.bind(this);
		
		
		stage.on("drawstart", this.start, this, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Menu
	this.instance = new lib.Symbol16();
	this.instance.setTransform(-79.05,-70.05,1,1,0,0,0,15,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape.setTransform(120.4069,28.5061,0.3726,0.3726);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(60.5058,43.1694,0.3719,0.3719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(59.4348,45.9244,0.3726,0.3726);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.6454,46.9314,0.3726,0.3726);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.6379,46.9034,0.3726,0.3726);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(49.4719,41.6148,0.3726,0.3726);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(49.4658,41.6426,0.3726,0.3726);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(49.8887,42.1282,0.3719,0.3719);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.7427,44.7967,0.3726,0.3726);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.8055,47.0897,0.3726,0.3726);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.7963,47.0525,0.3726,0.3726);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.6199,41.7731,0.3726,0.3726);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.6162,41.7917,0.3726,0.3726);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.9172,45.0503,0.3726,0.3726);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.8986,44.9638,0.3726,0.3726);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(49.3233,45.0218,0.3726,0.3726);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(49.3233,45.0218,0.3726,0.3726);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(44.3862,37.1226,0.3726,0.3726);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(38.378,45.4596,0.3726,0.3726);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.852,53.2098,0.3726,0.3726);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.6881,48.3193,0.3726,0.3726);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(40.2783,42.4881,0.3726,0.3726);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(44.3583,37.0201,0.3726,0.3726);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(40.5112,38.5571,0.3726,0.3726);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.9676,51.9429,0.3726,0.3726);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.7865,41.7895,0.3726,0.3726);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.6836,34.7426,0.3726,0.3726);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.8825,38.0293,0.3726,0.3726);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(116.5225,37.8057,0.3726,0.3726);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(118.2178,37.0574,0.3726,0.3726);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(117.2025,36.6382,0.3726,0.3726);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(114.4359,32.642,0.3726,0.3726);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.8085,32.1437,0.3726,0.3726);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(117.1745,32.1509,0.3726,0.3726);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(117.1931,33.2009,0.3726,0.3726);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(117.0534,33.1916,0.3726,0.3726);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(118.2271,32.968,0.3726,0.3726);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.9696,32.7714,0.3726,0.3726);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(115.0414,33.1357,0.3726,0.3726);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.7805,34.1511,0.3726,0.3726);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.8992,33.5314,0.3726,0.3726);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(118.5904,32.3391,0.3726,0.3726);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(119.2963,35.3434,0.3726,0.3726);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(115.5467,39.2464,0.3726,0.3726);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(115.3511,38.2142,0.3726,0.3726);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(115.1058,36.5494,0.3726,0.3726);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.8545,37.3322,0.3726,0.3726);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(118.3296,33.322,0.3726,0.3726);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(118.1247,33.2568,0.3726,0.3726);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.957,33.2848,0.3726,0.3726);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(117.3236,33.2848,0.3726,0.3726);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.8951,33.2848,0.3726,0.3726);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(118.1899,34.3746,0.3726,0.3726);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(117.1512,34.4491,0.3726,0.3726);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.9973,34.3656,0.3726,0.3726);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.9973,34.3656,0.3726,0.3726);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(117.0814,34.0579,0.3726,0.3726);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(117.0907,34.0664,0.3726,0.3726);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(118.0501,34.2906,0.3726,0.3726);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(118.0501,34.2906,0.3726,0.3726);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(118.1712,34.0495,0.3726,0.3726);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(118.1712,34.0495,0.3726,0.3726);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.7992,35.2782,0.3726,0.3726);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.7522,41.4821,0.3726,0.3726);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.7027,40.4667,0.3726,0.3726);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(116.1964,48.6152,0.3726,0.3726);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(116.2135,47.0973,0.3726,0.3726);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(116.1409,45.6441,0.3726,0.3726);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.8254,44.1473,0.3726,0.3726);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.7866,42.6191,0.3726,0.3726);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.6973,39.9474,0.3726,0.3726);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.6953,39.9264,0.3726,0.3726);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.6144,39.4979,0.3726,0.3726);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(113.5562,44.9802,0.3726,0.3726);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.9627,32.1959,0.3726,0.3726);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.6643,33.0519,0.3726,0.3726);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(102.5234,39.3675,0.3726,0.3726);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.9362,46.0164,0.3726,0.3726);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(97.2786,43.46,0.3726,0.3726);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(97.4451,40.8931,0.3726,0.3726);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.9818,42.3255,0.3726,0.3726);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.861,40.5522,0.3726,0.3726);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(99.2802,38.6817,0.3726,0.3726);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.6528,37.1242,0.3726,0.3726);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(97.4078,46.7486,0.3726,0.3726);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.8643,44.8371,0.3726,0.3726);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(98.3207,42.7878,0.3726,0.3726);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(95.5355,49.3795,0.3726,0.3726);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(99.2895,35.3816,0.3726,0.3726);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(97.1098,42.4042,0.3726,0.3726);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(97.1005,42.3856,0.3726,0.3726);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(95.461,49.3813,0.3726,0.3726);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(95.4618,49.3803,0.3726,0.3726);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(99.2802,35.3574,0.3726,0.3726);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(99.2895,35.362,0.3726,0.3726);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.6721,43.2717,0.3726,0.3726);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.6594,43.238,0.3726,0.3726);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.897,30.3239,0.3726,0.3726);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.8805,33.6367,0.3726,0.3726);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.9962,31.3658,0.3726,0.3726);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(71.0276,31.2168,0.3726,0.3726);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.8444,31.4497,0.3726,0.3726);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.8351,31.4404,0.3726,0.3726);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(71.1211,34.5427,0.3726,0.3726);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(70.2729,34.207,0.3726,0.3726);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(71.0244,33.9927,0.3726,0.3726);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.8565,33.5642,0.3726,0.3726);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(70.2729,33.6201,0.3726,0.3726);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.8565,33.5456,0.3726,0.3726);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(70.2823,33.6108,0.3726,0.3726);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.8255,33.4357,0.3726,0.3726);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(70.2366,33.4367,0.3726,0.3726);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.9178,32.9805,0.3726,0.3726);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(70.1177,33.0873,0.3726,0.3726);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.9704,33.2236,0.3726,0.3726);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(72.0232,31.1378,0.3719,0.3719);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.9529,33.8809,0.3726,0.3726);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSCDIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(87.45,43.699,0.3726,0.3726);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(87.4314,43.7177,0.3726,0.3726);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.8302,45.7391,0.3726,0.3726);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.8295,45.7474,0.3726,0.3726);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(107.2912,40.0196,0.3726,0.3726);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(107.2819,40.0196,0.3726,0.3726);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(107.4216,46.0278,0.3726,0.3726);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(107.4216,46.0465,0.3726,0.3726);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(65.1124,40.0196,0.3726,0.3726);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(65.103,40.0196,0.3726,0.3726);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(65.2428,46.0278,0.3726,0.3726);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(65.2428,46.0465,0.3726,0.3726);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(51.2794,46.7215,0.3726,0.3726);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.9733,41.451,0.3726,0.3726);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.8708,38.7155,0.3726,0.3726);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(81.0319,38.5757,0.3726,0.3726);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.7946,35.6322,0.3726,0.3726);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.8877,39.8705,0.3726,0.3726);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.9064,39.0788,0.3726,0.3726);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.9343,38.3522,0.3726,0.3726);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.9696,36.8431,0.3726,0.3726);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(74.3902,44.9193,0.3726,0.3726);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(68.0466,44.556,0.3726,0.3726);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(75.1079,45.5355,0.3726,0.3726);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(67.3941,45.0215,0.3726,0.3726);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(68.5309,36.4239,0.3726,0.3726);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.5485,33.7735,0.3726,0.3726);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(67.5299,33.7823,0.3726,0.3726);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.963,38.1845,0.3726,0.3726);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.9608,38.1566,0.3726,0.3726);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(73.1061,36.9021,0.3726,0.3726);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.7987,38.783,0.3726,0.3726);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.7987,38.8016,0.3726,0.3726);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.9529,36.9121,0.3726,0.3726);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(71.0743,42.8833,0.3726,0.3726);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.7168,46.4656,0.3726,0.3726);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(72.795,44.4432,0.3719,0.3719);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(54.4652,52.7161,0.3726,0.3726);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.7052,54.8027,0.3726,0.3726);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.6668,38.2777,0.3726,0.3726);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(50.3107,35.0919,0.3726,0.3726);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(47.3391,56.4794,0.3726,0.3726);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(47.218,33.6667,0.3726,0.3726);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(53.366,55.5479,0.3726,0.3726);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(54.1019,34.682,0.3726,0.3726);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.527,45.5714,0.3726,0.3726);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.6118,46.121,0.3726,0.3726);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.631,46.1107,0.3726,0.3726);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.8073,47.1462,0.3726,0.3726);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.8335,47.0897,0.3726,0.3726);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.663,42.1468,0.3726,0.3726);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.663,41.8195,0.3726,0.3726);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.9892,44.983,0.3726,0.3726);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.9476,44.983,0.3726,0.3726);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.9079,53.247,0.3726,0.3726);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.7813,48.3659,0.3726,0.3726);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(40.3994,42.6744,0.3726,0.3726);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.5725,37.3089,0.3726,0.3726);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.8372,38.9577,0.3726,0.3726);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(41.1166,51.9429,0.3726,0.3726);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.9821,41.9758,0.3726,0.3726);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.9351,34.8724,0.3726,0.3726);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.6765,38.0167,0.3726,0.3726);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(118.4493,37.2653,0.3726,0.3726);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(117.428,36.898,0.3726,0.3726);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.6967,32.8004,0.3726,0.3726);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(116.0135,32.2582,0.3726,0.3726);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(117.2917,32.2428,0.3726,0.3726);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(117.3888,33.3872,0.3726,0.3726);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(117.2584,33.3779,0.3726,0.3726);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(117.2018,32.9374,0.3726,0.3726);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(115.3292,33.2187,0.3726,0.3726);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.9853,34.3458,0.3726,0.3726);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(114.1127,33.7259,0.3726,0.3726);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.8182,32.5149,0.3726,0.3726);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(119.5386,35.5218,0.3726,0.3726);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.7474,39.4247,0.3726,0.3726);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(115.556,38.4004,0.3726,0.3726);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(115.3014,36.7357,0.3726,0.3726);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(118.0595,37.4952,0.3726,0.3726);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(118.5345,33.499,0.3726,0.3726);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(118.3203,33.4431,0.3726,0.3726);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(118.1433,33.4617,0.3726,0.3726);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(117.5192,33.4617,0.3726,0.3726);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(117.0907,33.4617,0.3726,0.3726);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(118.387,34.5609,0.3726,0.3726);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(117.3515,34.6354,0.3726,0.3726);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(117.1913,34.5514,0.3726,0.3726);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(117.1913,34.5514,0.3726,0.3726);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(117.277,34.2357,0.3726,0.3726);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(117.277,34.2357,0.3726,0.3726);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(118.2458,34.4717,0.3726,0.3726);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(118.2458,34.4717,0.3726,0.3726);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(115.0014,35.4645,0.3726,0.3726);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.9514,41.6687,0.3726,0.3726);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.8983,40.653,0.3726,0.3726);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(116.4014,48.7921,0.3726,0.3726);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(116.4102,47.2761,0.3726,0.3726);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(116.3365,45.8304,0.3726,0.3726);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(116.0272,44.3325,0.3726,0.3726);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.9915,42.8054,0.3726,0.3726);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(117.8144,37.2996,0.3719,0.3719);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.835,40.0289,0.3726,0.3726);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.8085,39.6842,0.3726,0.3726);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.7537,45.1664,0.3726,0.3726);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.7646,31.3938,0.3726,0.3726);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.7646,31.3938,0.3726,0.3726);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.6621,33.1171,0.3726,0.3726);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.7161,39.5538,0.3726,0.3726);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.7132,46.0849,0.3726,0.3726);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(97.4744,43.6463,0.3726,0.3726);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.65,41.0794,0.3726,0.3726);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(98.1776,42.5118,0.3726,0.3726);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(99.1261,40.7199,0.3726,0.3726);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.5858,42.9555,0.3726,0.3726);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(95.4901,49.5565,0.3726,0.3726);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(99.4665,35.391,0.3726,0.3726);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(97.2868,42.5812,0.3726,0.3726);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(97.2961,42.5719,0.3726,0.3726);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.61,49.546,0.3726,0.3726);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.6482,49.6184,0.3726,0.3726);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(99.5037,35.4691,0.3726,0.3726);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(99.4304,35.3574,0.3726,0.3726);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.8507,43.3515,0.3726,0.3726);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.8457,43.4196,0.3726,0.3726);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.6456,43.8854,0.3726,0.3726);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.6363,43.8947,0.3726,0.3726);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(80.0259,45.9254,0.3726,0.3726);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(80.0344,45.9337,0.3726,0.3726);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(107.4868,40.2059,0.3726,0.3726);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(107.4775,40.2059,0.3726,0.3726);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.6172,46.2141,0.3726,0.3726);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.6172,46.2234,0.3726,0.3726);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_250.setTransform(66.3887,37.4511,0.3719,0.3719);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(65.308,40.2059,0.3726,0.3726);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(65.4384,46.2141,0.3726,0.3726);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(65.4384,46.2234,0.3726,0.3726);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(51.475,46.9078,0.3726,0.3726);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(51.1689,41.6326,0.3726,0.3726);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(79.0664,38.9018,0.3726,0.3726);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(81.2275,38.762,0.3726,0.3726);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.9217,46.6519,0.3726,0.3726);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(72.9902,44.6292,0.3719,0.3719);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.5956,52.8558,0.3726,0.3726);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.789,54.9796,0.3726,0.3726);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.6855,38.464,0.3726,0.3726);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(50.4318,35.2689,0.3726,0.3726);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(47.3485,56.6564,0.3726,0.3726);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(47.3857,33.8437,0.3726,0.3726);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(53.5151,55.7528,0.3726,0.3726);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(54.1019,34.8683,0.3726,0.3726);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.7492,55.0635,0.3726,0.3726);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.7585,55.0449,0.3726,0.3726);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(79.3314,51.8723,0.3719,0.3719);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(78.2839,54.6536,0.3726,0.3726);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(104.5339,62.1315,0.3726,0.3726);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.7113,60.7643,0.3726,0.3726);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.8105,46.8118,0.3726,0.3726);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.9748,46.9819,0.3726,0.3726);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.9886,46.7917,0.3726,0.3726);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgNAMQgFgGAAgGQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAGgGAGQgFAEgIAAQgHAAgGgEg");
	this.shape_277.setTransform(572.875,56.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AggA9QgSgHAAgMQAAgMAOAAQAFAAAKAEQALADAFAAQAXAAAAgKQAAgFgQgIQgYgKgGgEQgQgMAAgRQAAgXAYgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgLAAQgMAAgDgKIgJgBQgbAAgBAIQABAFAQAHQAXAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgQAAgMgFg");
	this.shape_278.setTransform(561.7,51.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAhBYQgIAFgJACQgJABgIAAQgaAAgRgRQgSgRAAgaQAAggASgSQASgUAbAAQAJAAAHACQAHACAFAEQACgoACgPQACgOANAAQAHAAAEAEQAEAFAAAGQAAASgCAiQgDAhAAARQAAAqADAOIAAADQAAAHgFAEQgEAEgHAAQgIAAgEgIgAgXAFQgJAKAAAUQAAANAJAJQAKAJAMAAQAIAAAFgCQADgBAIgHIAEgDIAAgrQgEgHgGgDQgHgEgIAAQgRAAgIAJg");
	this.shape_279.setTransform(548.775,47.925);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_280.setTransform(535.325,51.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAcAAQAVAAANAGQASAKAAARQAAANgOAKQgHAFgUAIIgnARQAHAGAHADQAIAEAKAAQAPgBALgGQAKgGAFAAQANAAAAAMQAAANgTAJQgRAHgSAAQgbAAgSgOgAgQgbQgHAHgFAOIAbgLQAOgHAKgGQgIgEgNAAQgJgBgJAIg");
	this.shape_281.setTransform(521.7,51.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_282.setTransform(508.475,48);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAHAAQANAAADAOQATgQAaAAQAYAAAAAfIgBAIQgBASgPAAQgPAAAAgPIgBgMQgZAEgLAXIAAA6QAAAHgEAEQgFAFgIAAQgHAAgEgFg");
	this.shape_283.setTransform(485.35,51.225);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_284.setTransform(476.275,48.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAdAAQATAAAOAGQASAKAAARQAAANgOAKQgHAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAGAAQAMAAAAAMQAAANgUAJQgQAHgTAAQgbAAgSgOgAgPgbQgIAHgFAOIAagLQAPgHAKgGQgIgEgMAAQgLgBgHAIg");
	this.shape_285.setTransform(465.75,51.15);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_286.setTransform(452.525,48);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIABgMIAAgOIgCg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIgBgMQABgGAEgFQAFgDAHAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAFgGgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQAAAbgRAAQgGAAgFgFg");
	this.shape_287.setTransform(439.75,49.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_288.setTransform(416.975,48);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIABgMIAAgOIgCg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIgBgMQABgGAEgFQAFgDAHAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAFgGgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQAAAbgRAAQgGAAgFgFg");
	this.shape_289.setTransform(404.2,49.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_290.setTransform(395.425,48.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAEAlQgDgLgDgcIgDAGIgSAtQgCAFgDADQgFAIgKAAQgGAAgGgKQgGgKgEgQQgEgOgHgwIgCgRQAAgGAFgEQAFgFAGAAQANAAADANIADAQIABAQIAFAdIAUg6QAFgPAMAAQANAAAEARIAGAfIAGAgIAThGQACgLAMAAQAHAAAFAFQAFAEAAAHIAAADQgNAugMAkQgEALgIALQgFAIgKAAQgOAAgJgdg");
	this.shape_291.setTransform(383.675,51.375);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AghA9QgRgHAAgMQAAgMAOAAQAGAAAJAEQALADAFAAQAXAAAAgKQAAgFgQgIQgXgKgHgEQgQgMAAgRQgBgXAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgMAAQgLAAgDgKIgJgBQgbAAgBAIQABAFAPAHQAYAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgOgFg");
	this.shape_292.setTransform(358.95,51.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgKBcQgFgEAAgIIAAihQAAgGAFgEQAFgEAFgBQAHABAFAEQAEAEAAAGIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_293.setTransform(349.875,47.85);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_294.setTransform(340.125,51.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgJBEQgFgFAAgGQAAgOgDgaQgDgZAAgNQAAgHgBgFQgOAIgNASIgCADIgBAkIAAAJIAAAIQAAAGgFAEQgFADgHAAQgKAAgEgIQgCgGAAgNIAAgrIAAgRIgBgRQAAgKAEgJQAEgKAJAAQAGAAAFAFQAGAFAAAGIgBAKQARgUAQAAQASAAAIANQAHgGAIgDQAJgDAKAAQAXAAAIAWIAFAgQAEASAFAsQAAAHgFAEQgFAFgHAAQgNAAgCgOQgDgMgCgWIgEghQgDgVgFAAQgCAAgKAGQgKAFgEAEQAAANADAYQADAaAAANQAAAGgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape_295.setTransform(324.2773,51.225);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_296.setTransform(311.625,48.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_297.setTransform(301.825,51.025);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_298.setTransform(288.825,51.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAUAAAOAGQASAKAAARQAAANgPAKQgGAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgOgAgPgbQgIAHgEAOIAZgLQAQgHAJgGQgIgEgNAAQgKgBgHAIg");
	this.shape_299.setTransform(264.8,51.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_300.setTransform(251.575,48);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgHgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGAAgFgFg");
	this.shape_301.setTransform(238.8,49.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHAAQALAAAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_302.setTransform(216.025,48);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgkAzQgSgPAAgZQAAgXAQgYQATgdAYAAQAMAAARAGQATAJAAAKQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgLASQgKARAAAMQAAAMAJAHQAIAGAOABQAHAAAMgHQALgFADAAQAGgBAFAFQAEAFAAAFQAAAKgTAJQgTAIgKAAQgZAAgSgPg");
	this.shape_303.setTransform(202.45,51.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIABgMIAAgOIgCg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIgBgMQABgGAEgFQAFgDAHAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgFAFgGgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQAAAbgRAAQgGAAgFgFg");
	this.shape_304.setTransform(190.9,49.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_305.setTransform(178.625,51.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AA/BNIgGgdQgFgVgIgmIgRAwIgHAWQgEAMgFAJQgGALgKAAQgLAAgGgNIgHgWQgJgegHggIgPA4IgEAaQgFARgNAAQgIAAgEgGQgFgEAAgHQABgTAHgbIAOgsIAGgkQAGgZAGgIQAGgJAJAAQALAAAFALQAFAKAFAgQAFAeAKAjQANgiAMgqIAGgbQAGgRAOAAQAMAAAHAUQACAIADAVQAHAxAKAkQALAkgBADQABAHgGAFQgFAEgGAAQgNAAgHgSg");
	this.shape_306.setTransform(161.45,48.475);

	this.instance_1 = new lib.BRIGHTEDGELOGO();
	this.instance_1.setTransform(727,28,0.0876,0.0876);

	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(-9,-1,0.9696,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pieces},{t:this.instance_1},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(-12.65,16.85,0.9357,0.9357);

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1));

	// Layer_3
	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#4D3A32").s().p("AgEATQgSgFgJgOIACgMIAAAAQASAQAJAAQAGABALgIQAJgHAFgJIADAYQgHAIgLAEQgHADgGAAIgFgBg");
	this.shape_307.setTransform(527.025,596.3083);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#4D3A32").s().p("AgMAUQgQgCgIgKIgCgMQAiAPAQgIQAPgGAHgRIAFAVQgOANgLAEQgHADgIAAIgLgBg");
	this.shape_308.setTransform(501.2,603.1696);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#4D3A32").s().p("AgFAQQgFgBgJgGQgKgHgGgHIAIgLIAMALQAIAFAEAAQAHACAMgCQAMgDAHgGIgBANIgHAGQgIAHgPAAIgJgBg");
	this.shape_309.setTransform(483.25,601.8625);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#6D3F32").s().p("AhAA9IAAgCQAUgIAQgMQAhgZAUgYQAageAJgiQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQACAlgYAiQgTAZgjAcQgXASgXAJg");
	this.shape_310.setTransform(521.2044,521.595);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["#CB753D","#985539"],[0,1],-46.2,-172.6,4.1,9.7).s().p("AgehJIAUAEQAMACAGAEQAIAGAHAJQALASgDAXQgCAYgFASIgIAUQgGAPABAEIgpiTg");
	this.shape_311.setTransform(468.7981,521.925);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#CB753D","#985539"],[0,1],-48,-173.6,2.3,8.6).s().p("AgRAgQgGgCAAgMIADgRIgBgRQABgNAGgCQADgBAEACIARAGQAKAEACAGQAEAHgHAIQgIALgJAJQgKAMgHAAIgCgBg");
	this.shape_312.setTransform(475.2564,521.6877);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["#CB753D","#985539"],[0,1],-50.4,-185.1,-0.1,-2.8).s().p("AgFAjIAAAAIAAAAgAgUgXIgBgJQABgBAIgBQALgBASAGIACACIACADIAAABQACAIgCAHIgHAOIgLAPQgIANAAABQgNgngCgTg");
	this.shape_313.setTransform(472.7167,534.4731);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#CB753D","#985539"],[0,1],-52.5,-191.4,-2.2,-9.1).s().p("AgQgPIAGgGQAEgDABABIAFACQAIADAJAIIgBABQAAALgQAQIgHAGg");
	this.shape_314.setTransform(474.125,540.9708);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#CB753D","#985539"],[0,1],-53.9,-196.4,-3.7,-14.1).s().p("AgDAWQgFgBgDgEQgCgDgBgJIgCgNIAAgCQgBgBAHgFIAIgEQAMgDAFAFQAEAFgDANIgGATIgBACIgCABIgHAAIgDAAg");
	this.shape_315.setTransform(475.3125,545.9708);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["#CB753D","#985539"],[0,1],-55.8,-201.6,-5.5,-19.3).s().p("AgKAXQgBgHADgLQADgJgDgXQANALADAGQAGAKgEAMQgCAJgGAEQgEADgDAAQgEAAgBgFg");
	this.shape_316.setTransform(475.3306,551.7235);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#CB753D","#985539"],[0,1],-51.8,-188,-1.5,-5.7).s().p("AAAAgQgNgOgFgDQgHgGAAgGIABgDIACgEIAHgNQAFgHAEgEQACgDAHgFQAKgFACADQAHAOABAYIACAUQABAOgGAEQgDACgDAAQgGAAgIgIg");
	this.shape_317.setTransform(477.1504,536.511);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["#CB753D","#985539"],[0,1],-49.3,-179.3,0.9,2.9).s().p("AgDAdQgXgGgHgSIgBgCIAVgTQANgMALgCQAQgEAGASQACAHABAXIAAAMQgLAGgMAAQgIAAgIgDg");
	this.shape_318.setTransform(476,527.5056);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#7A4A35","#633631"],[0,1],-3.6,-3.3,4.4,4.7).s().p("Ag2AQQgBgHAQgUIAdgkQAJANARAFQATAFANgJIAGgEIABAeQAAARgDALQgDANgxAJIgwAGQgEgRgCgQg");
	this.shape_319.setTransform(481.2755,605.55);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#FEC92F","#F79939"],[0,1],-17.9,16.3,14.1,-16.6).s().p("AgFHOQgBgIAbgkQAegmABgHQAEgOgPiNQgPiQgKgKQgQgPgNgnQgSgvALgnQAKgig0jDIg2i8IDBB2QABAOAFCMIAECqQAAAkALClQALCwAGATQAFARgFAJIgKAXQgDALABAZQABAZgDAMQgEANgxAJIgwAGQgDgRgCgQg");
	this.shape_320.setTransform(476.4316,560.95);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#CB753D","#985539"],[0,1],-50.8,-184.9,-0.5,-2.7).s().p("AgUAUIgPgQQgUgSAEgHIACgBIAKgFIAKgFIARgCIACABQAmAIATAVQAGAGAAAGQAAAHgHAEQgKAGgRAEIgaAGg");
	this.shape_321.setTransform(497.2852,527.65);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#CB753D","#985539"],[0,1],-53.6,-193,-3.4,-10.7).s().p("AgUAhQgEgCgBgDQgBgDABgIQADgQgBgSQAAgKAHgGIAQgJQAGgEADACIACADIABADIAEANIAFAMIAGAcIgEAfQgdgCgOgLg");
	this.shape_322.setTransform(503.45,534.7886);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#CB753D","#985539"],[0,1],-57.7,-209.2,-7.4,-27).s().p("AgGAOIgGgCIgEgEQgBgFAEgHQAEgIAFgBIAFAAQAJADAGAFIABAAQABAEgPALQgGAEgDAAIAAAAg");
	this.shape_323.setTransform(498.3716,553.5689);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#CB753D","#985539"],[0,1],-57.5,-207.8,-7.2,-25.6).s().p("AgOADQABgLgBgYQAOgCACABIADACIAHAJIADAEQACAGgEAJIgHALQgIARgKAHQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgCgSACgOg");
	this.shape_324.setTransform(494.4762,553.1929);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#CB753D","#985539"],[0,1],-55.4,-202.2,-5.2,-19.9).s().p("AALAnIAAAAIAAAAgAAAAeQgJgGgFAAIgEgRIAAgDIABgCIABgCQAFgHADgPQABgFACgBIADgCIAEgDQALgHAEAEQACACgBALIgDAOIgDAZQgCAVABACIgLgJg");
	this.shape_325.setTransform(503.9071,544.3906);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#CB753D","#985539"],[0,1],-56.5,-205.1,-6.3,-22.8).s().p("AgWANIgBgBIAAgCQAHgRAFgIIABgDIADgBQANgEADAAQAKgCACAJQAEAPgBAPIgDACQgEAHgHABIgEABQgKAAgSgMg");
	this.shape_326.setTransform(499.4361,548.7388);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#CB753D","#985539"],[0,1],-55.8,-202.2,-5.6,-19.9).s().p("AgTAQQgHgFAMgLIAEgGQAHgMAGAEIAQAIIADACQACAEgGAFQgEAFgFACQgHADgHABIgHAAIgDAAIgEAAg");
	this.shape_327.setTransform(495.1694,546.9333);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#CB753D","#985539"],[0,1],-54.5,-197.5,-4.3,-15.2).s().p("AgMgdQAAACAPAFIADAEQAEAHADAMQABAGgBAFQgBADgEACQgHAFgIAIgAgMgdIAAAAIAAAAg");
	this.shape_328.setTransform(493.5375,542.225);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#CB753D","#985539"],[0,1],-54.6,-199.2,-4.4,-16.9).s().p("AgFAcQgIgCgKgPQgFgHgBgEIABgCQABgDAEgDIAFgDIAMgEQAIgDAFgFQAGgEACAAIAEABQAGABACABQAFAEgEANQgCAJgFAIQgJASgMAAIgFAAg");
	this.shape_329.setTransform(499.1221,542.475);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#CB753D","#985539"],[0,1],-53,-192.2,-2.7,-9.9).s().p("AgUAZQgKgEgEgGQgGgHAIgIIADgBIAdgTIAIgGQAJgFABABIAKAHIAFAFQADAEABAPQABANgCAJIgDAFQgCACgIABIgKAAQgTAAgOgGg");
	this.shape_330.setTransform(495.7772,535.9134);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#CB753D","#985539"],[0,1],-51.4,-185.8,-1.2,-3.6).s().p("AABAoQgFAAgDgEQgDgDgBgMIgBgQIgDgZQAAgOgCgFQAGAHAIASQAEAKAPAQIACAFIAAADIgIARQgCADgFAAIgCAAg");
	this.shape_331.setTransform(492.4875,530.0536);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#CB753D","#985539"],[0,1],-50.7,-184.9,-0.5,-2.6).s().p("AgHAPIgFgFQgFgHgKgGQABgHAIgDIAOgBIAQgBQAMgBAEADIgBAOQgBAEgPAHQgIAEgEAAIgGgBg");
	this.shape_332.setTransform(504.55,525.5752);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#7A4A35","#633631"],[0,1],-3.3,-2.2,5.6,2.3).s().p("AgPAyQgbgLgBgXIgBgdIAAgWQAJAHAOgCQAjgBANgXQAEAVAHAWIAHAXQABALgFAIQgEAFgOANQgHAGgLAAQgIAAgMgFg");
	this.shape_333.setTransform(502.0161,607.3756);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#FEC92F","#F79939"],[0,1],18.5,12.4,-7.7,-11.9).s().p("AAPG9QgagKgBgXIgBgmQAAgRgDgOQgEgNgCiWQgDicgBgOIgUhAQgQgyADgmQAEgpgOiDIgQh7ICrgNIgQCaQgNCRABAhQABAigHAsIgNA6QgDAPAHBnQAKCEABAVQABAsAKAkIALAnQABALgFAIQgEAEgOANQgHAHgLAAQgJAAgMgGg");
	this.shape_334.setTransform(498.925,567.8006);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#CB753D","#985539"],[0,1],-24.4,-88.4,25.9,93.9).s().p("AgBAoQgbgqgPgUIgBgBIAZguQAJgKAGgBQAGgBAJAIIAGAGQAEAGABAHQAHAZAKAyIAEAPQACAKAAAGIgLAdQgMgIgXghg");
	this.shape_335.setTransform(481.075,428.1888);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#CB753D","#985539"],[0,1],-42.8,-157.2,7.4,25.1).s().p("AAHAwQgGgEgJgIIgQgNQgOgKgEgIQgHgLANgJQAEgDAMgEIASgFQAVgLAPgLIALASQgEALgDAUIgFAeQgGAUgMAAQgDAAgFgCg");
	this.shape_336.setTransform(525.3244,489.9297);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#CB753D","#985539"],[0,1],-45.1,-160.8,5.1,21.5).s().p("AALApIgOAAQgEgBgPgMQgDgIACgJIAEgRIAEgSQAEgPgBgCQAYArANAoQAAgBgOAAg");
	this.shape_337.setTransform(532.0469,492.35);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#CB753D","#985539"],[0,1],-41.5,-152.2,8.7,30.1).s().p("AgbAlQgMgSgHgUQgIgYACgTQACgTAmAQQASAJAcAQQAXAKgFARQgDANgTATQgRASgOAAQgOAAgMgSg");
	this.shape_338.setTransform(504.0728,490.454);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#CB753D","#985539"],[0,1],-46.8,-169.1,3.5,13.2).s().p("AApAdIgZgGIhHgTIgCgCQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgSACgIQADgOAOgCIBUAIIAIAeQAFAWACAZQgBgIgRgGg");
	this.shape_339.setTransform(530.58,501.525);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#CB753D","#985539"],[0,1],-43.7,-159.3,6.6,23).s().p("AgRA3QgKgCgCgWQgBgZgCgGQgDgKAAgQQAAgVAGgFQADgCAKgBQAGgBAPgEQAOgCAGAGQAGAFACAMIAAADQADAPAAAHQAAAMgEAJIgVA3g");
	this.shape_340.setTransform(514.5731,495.25);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#CB753D","#985539"],[0,1],-45.4,-165.5,4.8,16.8).s().p("AgPAwQgOgQgBgFIABgHQACgKAIgaQAHgYACgOQAFABAMgGQAMgFAFAFQAEADAAANIAAAQIgEAlQgBAWAHAPIABACQgQAHgKAGIgCABQgFAAgNgPg");
	this.shape_341.setTransform(520.5917,500.3049);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#CB753D","#985539"],[0,1],-47,-170.4,3.2,11.9).s().p("AgmArIgKgOIgKgOIgDgHQAAgFALgJIAOgMIARgRQALgKAJgCQAFgBAEACQAMADANAKQANAKAIAKQAGAIgBAFQAAADgHAHIgNAPQgIAJgIAEQgKAFgOACIgZADIgCAAQgHAAgFgFg");
	this.shape_342.setTransform(512.401,507.8621);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#CB753D","#985539"],[0,1],-43.6,-161.2,6.6,21.1).s().p("AAQA7QgQgDgHgMIgEgIIgIgaQgDgIgCgCQgEgCgHgBQgfgCgMgFQgHgCgFgRQgFgQADgHQAEgJAUACIAaAGIAbAFQAGACAMAHQAMAGAHABQAJABARgHQAPgHAMAFQARAHACAZQACAJgDAJQgDAMgQAQQgRAQgMAEQgJACgJAAIgLgBg");
	this.shape_343.setTransform(501.3969,500.8328);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#CB753D","#985539"],[0,1],-42.6,-151.4,7.7,30.8).s().p("AhFAwQgJgKgDgIQgIgXAVgTIArgtQABgBAXANIAZAOIATAIQANAEAGAGIAFAFQAHALAIAiQADAKgDADQgCABgNABQhDACgzAEIAAAAQgIAAgKgKg");
	this.shape_344.setTransform(483.4589,495.7474);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#CB753D","#985539"],[0,1],-40.6,-146.9,9.6,35.3).s().p("AAHAqQglgKghgSQgKgGAAgGQABgCAEgFIAOgVQAIgLAIgEQAJgFATgCQAUgCAHAFIAeAVQASANAGANQADAIAAANIgBAWQAAABgBABQAAAAAAABQAAAAAAABQgBAAAAABIgDAAQgeAAgfgIg");
	this.shape_345.setTransform(490.8488,488.6964);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#CB753D","#985539"],[0,1],-38.6,-139.1,11.6,43.1).s().p("AgsAZQgBgEADgHIAHghQAFgXAJgFQANgIAQALQAKAGAQAOQAJAHACAJQADAcguAXQgPAIgLAAQgTAAgBgag");
	this.shape_346.setTransform(481.1088,482.9863);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#CB753D","#985539"],[0,1],-39.2,-142.7,11.1,39.6).s().p("AAVA/QgJgJgJgIIgrggQgRgNgEgHQgDgHACgGQAAgEAKgPQAIgOAHgFQAJgIANADQAFABAPAHIAWAHQANADAGAHQAGAHAGAQQAFAOABANIgBAIQgBAIgSATQgPAQgGAAIgCgBg");
	this.shape_347.setTransform(470.025,489.7359);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.lf(["#CB753D","#985539"],[0,1],-41.9,-150.4,8.4,31.9).s().p("AAEBMQgagFgjgdQgHgGgDgTIgDgcIgDgfQAAgWAIgHQALgKAVAPQAMAJARAPQAcAWAUAUIAXAWQANAPgLALQgFAEgVALIgSAKQgIADgIAAIgFAAg");
	this.shape_348.setTransform(468.3199,498.65);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#CB753D","#985539"],[0,1],-36.5,-133.9,13.7,48.4).s().p("AANAlQgRgDgVgIQgYgJAAgHQAAgQACgJQAEgOALgEQANgFAbADIAqAGQgBA5gaAJIgEAAIgGAAg");
	this.shape_349.setTransform(472.145,479.5779);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#CB753D","#985539"],[0,1],-38.2,-135.8,12,46.5).s().p("AA2A7IgdgIIgdgKQg5gQgEgRQgCgIANgFIAUgGQARgIAJgLQADgDAFgLQAFgJAFgEQACgCADAAQAGgCAEAIQABADABAJQADAaANAdQACAFAOAUQALASgHADIgDAAIgGgBg");
	this.shape_350.setTransform(490.1069,476.9575);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#CB753D","#985539"],[0,1],-60.5,-220.7,-10.3,-38.4).s().p("AgJgIQgKgPgCgGQgCgLAOgGIALgFQABAOAMAdQAKAWgDAmQgKgbgVghg");
	this.shape_351.setTransform(530.4426,556.925);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#CB753D","#985539"],[0,1],-58.3,-211.4,-8.1,-29.2).s().p("AgXgDIgCgSQAAgNAJACQAFABAIAJIAJANIAMALQAHAJABAFIAAACQgBAFgHAFQgGAEgGABIgEABQgRAAgIglg");
	this.shape_352.setTransform(527.625,547.9429);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#CB753D","#985539"],[0,1],-53.4,-197.1,-3.2,-14.8).s().p("AABA7IgJgMQgFgIgIgUQgKgQAAgHQAAgEADgIIAEgMIAAgBIADgJQAFgJAMgJQAFgFAQgJQAEgCACAAIADADQAGAHAAAHQABAEgCAMIgYBwQABgFgHgJg");
	this.shape_353.setTransform(532.28,530.87);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#CB753D","#985539"],[0,1],-51.5,-187.2,-1.3,-4.9).s().p("AgRApIgHgDIgPgJIgBgfQAAgVAHgJQADgEAEgCQAFgDAKABIAOACQAVADARAIQgKAZgPARQgKAKgHAGQgLAKgFAAIAAAAg");
	this.shape_354.setTransform(532.25,520.4725);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#CB753D","#985539"],[0,1],-48.9,-178.4,1.3,3.9).s().p("AgCArQgLgBgJgKQgIgHgHgMIgCgEIABgEIAGghQAEgVAPgEQAMgDAQAKQAOAHAKALQACAmgDAsQgSgIgWgDg");
	this.shape_355.setTransform(532.815,510.764);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#CB753D","#985539"],[0,1],-56.6,-204,-6.4,-21.8).s().p("AghAaIgCgDIAAgCIABgWQACgLAHgIQAagbAMAJQALAJAMAmIAAAAIgCAHQgdASgQAHIgBAAQgFAAgQgPg");
	this.shape_356.setTransform(528.775,539.7416);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#CB753D","#985539"],[0,1],-54.5,-197.7,-4.3,-15.5).s().p("AgIAPQgEgFACgLQACgLAEgGQAEgBAGAHQAGAGgBAGQgBAIgGAHQgDAEgCAAQgDAAgEgEg");
	this.shape_357.setTransform(527.1617,533.2357);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#CB753D","#985539"],[0,1],-48.1,-175,2.1,7.3).s().p("AgnAqQgMgEgDgKQgDgLAIgJQAJgIAbgSIAagQQARgIAMAAQAVACgMAhQgKAagOAQIgMgDQgIAAgUAHQgLAEgHAAIgIgBg");
	this.shape_358.setTransform(522.8056,509.8881);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#CB753D","#985539"],[0,1],-48.9,-178.2,1.3,4.1).s().p("AgVAOQgKgRAAgHIABgCQAJgVAjAMQAiAMgeAUIgUAPIgEAAQgIAAgHgMg");
	this.shape_359.setTransform(513.6977,515.8357);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#CB753D","#985539"],[0,1],-46.7,-170.7,3.5,11.6).s().p("AgBAhIgKgMIgNgSQgGgHAAgMQAAgOAJgGQAGgDANAFQALAEAKAJQALAKABAGQAAAGgEAJIgHAQQgGALgDABIgDAAQgFAAgEgFg");
	this.shape_360.setTransform(501.7028,511.049);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#CB753D","#985539"],[0,1],-48.7,-175.8,1.6,6.4).s().p("AAAAWQgUgJgDgFIgBgCQgDgGADgHQACgIAGgFQAHgIAFABQAEAAAFAHQAJAKAHANQAKASgIAGIgEABQgGAAgNgGg");
	this.shape_361.setTransform(506.9829,515.3126);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#CB753D","#985539"],[0,1],-44.6,-163.5,5.7,18.7).s().p("AALAbIgKgKIgPgLQgKgGgFgDQgOgNAOgIIAdgJIAGgBIAEgBIACABIATAIIADABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAFAigRAWQgGgCgGgHg");
	this.shape_362.setTransform(495.0056,505.1667);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#CB753D","#985539"],[0,1],-47.4,-170.5,2.8,11.8).s().p("AAnAeIAAAAIAAAAgAADAXQgjgEgEgGQgFgGAIgMQAFgKAIgHQAKgLAKAIIAPATIAOAPQAKANAAAIQAAgDgkgEg");
	this.shape_363.setTransform(496.4406,512.4938);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#CB753D","#985539"],[0,1],-45.4,-164.2,4.9,18.1).s().p("AAIApIgYgLIgYgEQgOgDgCgKQgDgJAEgOQAGgRACgHQAFgTAxASIAYAJQAOAGAHAIQADAEACAFQAEAKgJARQgIARgKADIgHABQgIAAgLgEg");
	this.shape_364.setTransform(487.4659,508.1247);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#CB753D","#985539"],[0,1],-44.2,-163.7,6.1,18.6).s().p("AgHA+IgEgDIgWgXIgDgFIgCgFIgDgSIgEgQIgEgLQAAgGAEgFQAFgHAMgFIAUgHQAMgFAKgBIAOgEQAKgCADAAQADABADADQAEAEgBALIgDAQQgCAIABAOIABAVQgBAGgDADIgIAFQgIAEgKAJIgRAPQgEADgCAAIgBAAg");
	this.shape_365.setTransform(475.793,510.549);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#CB753D","#985539"],[0,1],-48.8,-178.1,1.5,4.1).s().p("AAJAdIgcgKQgEgCgHgIIgQgPQgLgLACgHQACgGAPgBQALAAAPADIAYAGIAJADIAFACIARAEQAJADADAJQAGAOgXAQQgEADgIAAQgHAAgKgDg");
	this.shape_366.setTransform(500.4633,519.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#CB753D","#985539"],[0,1],-47.2,-170.8,3,11.4).s().p("AAMAkQgMABgGgBQgJgBgJgFQgMgGgNgQQgRgSAQgGQAEgBABgEIAOgLQAVgNAgAaIAYATQAQAPgDALQgEALgRAAQgTgBgHAAg");
	this.shape_367.setTransform(486.4489,515.5694);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#CB753D","#985539"],[0,1],-49,-178,1.3,4.2).s().p("AgIAPIgFgDIgMgJQgIgHABgDQADgGASAAQAbgBALAGQADACACAEQACAEgEADQgCACgMADQgJADgJACg");
	this.shape_368.setTransform(491.5001,521.8929);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#CB753D","#985539"],[0,1],-47.2,-171.5,3,10.7).s().p("AgCAQQgKgGgFgFQgIgIACgIQADgSAUAKQAVAKADAMQABAFgDAEIAAACIgHAIIgDACg");
	this.shape_369.setTransform(479.4018,518.2432);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#CB753D","#985539"],[0,1],-44.1,-159.9,6.2,22.4).s().p("AASAeIgTgHIgKgFQgEgDgFgIIgKgOQgFgLAGgHQARgRAcAlQAXAdgHAGIAAAAIgGABIgIgBg");
	this.shape_370.setTransform(466.9391,509.0784);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#CB753D","#985539"],[0,1],-33.9,-123.9,16.3,58.4).s().p("AgbBFQgGgHgHgLIgLgUQgIgMgCgPIgDgcQgBgQAMgPIAYgYQAJgJATAJQAJAEASAMQAOAHAHAGQAKAKAGAYQAFAVgFAPQgFARgXASQgMAKgYARIgEACIgBAAQgFAAgQgPg");
	this.shape_371.setTransform(483.2982,465.7693);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#CB753D","#985539"],[0,1],-34.9,-125.3,15.3,57).s().p("AgCAuQgSgFgJgJQgNgNADgTQADgRAPgJIANgNQAIgIAFAAIAEAAIAAAAQANACAIAbQAEAOAEAWQADAMgBAFQgCAIgLAEQgFABgHAAQgIAAgJgCg");
	this.shape_372.setTransform(472.8585,470.3766);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#CB753D","#985539"],[0,1],-31.1,-112,19.2,70.2).s().p("AggBUIgEgEIgHgPQgKgYAGghIAKgsIADgUQACgMAGgGQAHgHASgCQAOgBAMACQAQAZAFAOQAJAZgKAQQgYApgtAqQgDADgDAAIgCAAg");
	this.shape_373.setTransform(472.9159,456.0569);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#CB753D","#985539"],[0,1],-29.8,-109.3,20.5,73).s().p("AAQBFIgXgeQgVgXgSgbQgIgNADgIQABgEANgOQATgXAVgHQAcgKAEAgIAHAyQAOBbgFAAIgBAAQgUAAgOgOg");
	this.shape_374.setTransform(483.4017,450.0158);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#CB753D","#985539"],[0,1],-27.4,-95.6,22.8,86.7).s().p("AghBQQgSgMAOgcQATgigCgIQgCgMgOglQgFgQAJgKQAGgHAEADIAJAKIAuA8IABABQAEAGAGARQgIATghAcQgTAQgPAHg");
	this.shape_375.setTransform(477.9015,437.1671);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#CB753D","#985539"],[0,1],-22,-80,28.2,102.2).s().p("AgGApQgEgCgCgJIgEgwQgCgTAFgDQAEgCAGADIAHAHQAPAKgBATQAAAPgKARQgIANgFAAIgBgBg");
	this.shape_376.setTransform(475.2496,420.8511);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#CB753D","#985539"],[0,1],-19.9,-70.5,30.4,111.8).s().p("AggAWQgGgGgBgCQgCgFAAgJIgBgWQAAgNADgIQAGgNANgDIASgFQAGgDADAAQAJACAHAZQAEANAEAUIAKAgQAFAWgKAKQgFAFgKAGQgZgUgcgag");
	this.shape_377.setTransform(477.5083,410.0469);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#CB753D","#985539"],[0,1],-16.4,-58.9,33.8,123.3).s().p("AgJAhQgRgCgFgOQgDgKACgSQAEgXASACQAKABAaAIIAIAkQACAKgUAGQgNAEgIAAIgEAAg");
	this.shape_378.setTransform(474.9822,398.2755);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#CB753D","#985539"],[0,1],-14,-49.4,36.3,132.9).s().p("AAIArQgPgGgIgFQgQgHgEgJQgGgKABgTQABgOAFgGQAFgGAMgGIARgJIAEgBQARgBALAyQAFAZAEAmQgHgCgagMg");
	this.shape_379.setTransform(473.135,388.599);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.lf(["#CB753D","#985539"],[0,1],-10.4,-39.2,39.8,143.1).s().p("AgLAbQgEgGgGgPIgJgRQgGgNAEgHQADgHAVADQAQABALAFIAEACQAQALgGAZQgGAZgUADIgCAAQgJAAgHgKg");
	this.shape_380.setTransform(470.5138,378.1258);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.lf(["#CB753D","#985539"],[0,1],-9,-30.8,41.2,151.5).s().p("AASAaIgQABQgMAAgPgFIgEgCQgFgCAAgCIABgDQAHgNAMgKQAGgEATgMQALARANAkQgHgCgKABg");
	this.shape_381.setTransform(468.725,369.775);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#CB753D","#985539"],[0,1],-6.8,-23.9,43.4,158.4).s().p("AAJAjIAAAAgAgLAZIAAAAQgHgEgCgDQgCgDAAgIQAAgIACgOQADgRAFgBQAIgDALATIAPAZQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABIgNAUQABgCgVgIg");
	this.shape_382.setTransform(466.35,362.9795);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#CB753D","#985539"],[0,1],-1.5,-6.5,48.7,175.8).s().p("AADAnQgDgBgCgCQgIgGgJgeQgDgIAAgMQAAgPAHgDQAGgCAOAPIASAUQgEAsgOAAIgCAAg");
	this.shape_383.setTransform(464.025,344.7409);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.lf(["#CB753D","#985539"],[0,1],-8.8,-31.4,41.4,150.9).s().p("AgBAOQgTgEgCgHQgBgFALgJIAJgFQAGgDAEADIABABIAFAKIAFAKIAFAIIAAAEIgCABg");
	this.shape_384.setTransform(477.5497,367.95);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.lf(["#CB753D","#985539"],[0,1],-21.9,-80.1,28.3,102.1).s().p("AglAmIgPgsQgIgbgBgTQAAgIAEgCQADgBAEACQAcAMAagCQAQgBAIABQAPADAAAMQAGAPAFAWIAIAmQgtAUgJACIgMACQgYAAgJgZg");
	this.shape_385.setTransform(490.425,416.7064);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.lf(["#CB753D","#985539"],[0,1],-24.8,-88.7,25.4,93.5).s().p("AARAdQgZABgOgBQgbgEgDgSQAUgEAagMIAsgWIAPA+QgMgCgYAAg");
	this.shape_386.setTransform(493.15,425.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.lf(["#CB753D","#985539"],[0,1],-28.9,-103.8,21.4,78.5).s().p("AglBbQgDgBgCgTIgDgWQgEgegBghIgCghQgBgWAGgKQAEgFAJgBIAOAAQAVADAVgMQAGAHAJAUQAWA0gIAjQgHAdgaAaQgUAUgSAAQgJAAgIgEg");
	this.shape_387.setTransform(494.2646,441.2977);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.lf(["#CB753D","#985539"],[0,1],-40.7,-147.5,9.5,34.7).s().p("AgqAnQgRgQgFgqQgCgOANgHQAKgGAPAAQAMABAKAJIAQATQAFAFAHAEIATAJQAMAGAHAGQAFAEABAEQACANg0AIQgSAFgOAAQgTAAgHgIg");
	this.shape_388.setTransform(518.1904,481.711);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.lf(["#CB753D","#985539"],[0,1],-40.4,-145.6,9.9,36.7).s().p("AgLAPQgUgMgJgNQgHgNAGgIQADgDARgKQAqA1AYAjIgDABQgkgTgRgLg");
	this.shape_389.setTransform(522.8241,478.425);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#CB753D","#985539"],[0,1],-37.2,-133.6,13,48.7).s().p("AADBGQgIAAgJgJIgMgQIgegjIgCgDIAAgDQAJgZASgYIAWgbQAPAYAtA6QAIALAAAFQAAAFgIALQgKANgUAOIgHADIgCABQgEAAgFgDgAgKhIIABAAIgBAAg");
	this.shape_390.setTransform(512,468.5125);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.lf(["#CB753D","#985539"],[0,1],-34.2,-122.7,16,59.5).s().p("AgJArIgBgCQgGgLgCgRQgCgQACgOIAEgMQADgIgDgFQAOAeAUAfIgLAKIgIAJQgFAFgEAAIgBAAg");
	this.shape_391.setTransform(508.0806,457.9391);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["#CB753D","#985539"],[0,1],-38.6,-141.3,11.6,41).s().p("AAzA+QgPgEgTgIQgkgRgagcIgVgYQgNgTAGgJQAGgKAhgDIAsgCQAHgBAEABQADABAFAFIAcAdIAGAHIACAEIADAKIAIA6QABAMgOAAIgMgCg");
	this.shape_392.setTransform(502.8372,479.1137);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["#CB753D","#985539"],[0,1],-32.4,-118.2,17.8,64.1).s().p("AgQCVQgHgHgHgMIgKgWQgHgMgFgPIgIgRQgIgTgBgGQgCgLAGgPIAGgOQACgHADgEQADgDAFgDIAIgFIAPgOQAegnAJgPQAWglgHgZQAPAyAXA2QgDARAAAaIACAqIACAfQAAATgFALQgJAUgbAVQgTAQgMAAQgIAAgGgFg");
	this.shape_393.setTransform(498.3021,455.5786);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.lf(["#CB753D","#985539"],[0,1],-19.1,-65.1,31.1,117.2).s().p("AAfBGQgRgGgLgHQgVgMgbgHIgFgCIgCgEQgFgQgBgHQgDgOAGgJIAKgIQAogbAOgaIAEgCQAYBLALAlIAMAqIgdgHg");
	this.shape_394.setTransform(487.7882,401.65);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.lf(["#CB753D","#985539"],[0,1],-13.9,-52.3,36.4,130).s().p("AgCBJIgEgMQgDgJgJgRIgOgbQgHgOgCgOIgIgXQgFgQAFgHQAGgIAPACIAWAEIAgAFQAHAMAGAWIALAjQAFAQgGALQgCAGgQARQgJAKgGAEQgGAEgHAAIgFgBg");
	this.shape_395.setTransform(482.6315,388.831);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#CB753D","#985539"],[0,1],-11.1,-39.1,39.1,143.1).s().p("AACAiIglgdQgIgFgFgcQgBgJABgEQACgFAIgDQAJgFATACQAUADADAJQAQAlAVA5QgSAAgegUg");
	this.shape_396.setTransform(479.7375,375.7442);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.lf(["#CB753D","#985539"],[0,1],-7,-26.3,43.3,155.9).s().p("AgKAkQgFgBgMgeQgMgbgBgJQA9AAgCgEIAWAuIgGADIgWAPQgLAHgIAAIgEAAg");
	this.shape_397.setTransform(473.975,363.3924);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.lf(["#CB753D","#985539"],[0,1],-4.8,-14.2,45.5,168.1).s().p("AAhA9QgIgEgMgBIgUAAIgGgBIgDgDIgSgZQgIgPABgNQACgLAGgTQAGgWACgJIAHAIQASAaAVAnIANAZQAKAWgDAEIgCABIgGgCg");
	this.shape_398.setTransform(470.1728,351.6271);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.lf(["#7A4A35","#633631"],[0,1],-2.8,-3.7,3.3,3.5).s().p("AAAAyQgQgBgSgJQgJgEAHggIANguQAQATASgEQAQgCAJgUQAKA8gNAVQgKASgVAAIgCAAg");
	this.shape_399.setTransform(526.3847,599.9026);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.lf(["#FEC92F","#F79939"],[0,1],-35.3,-32.9,34.7,40).s().p("AFAVPQgQAAgSgJQgKgFAKgmQAMgoAAgGQgIk7AAg9QAAgmgriGIgqh+QgIAQgwAJIiGATQhdANhag9QhkhDg3iHQgthwAqhpIAjhNQASgrgBgfQgDg+Abh4IAchrQAXmChukcQgjhZgrhEIglgyIAtjOQBaA6BdC3QBcC4BYEpQASBAAtDBQAcB5AsBiQAZA3AwBBIBZBxQBvCOAXBqQAYBzgjC0QgHAigVBYQgOA7AAARQAAAZAOAeQALAagEAsIgdEnQAAAKAGApQAEAogKASQgKASgVAAIgDgBg");
	this.shape_400.setTransform(494.2752,468.9526);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#4D3A32").s().p("AAAAOQgVgCgMgMIABgOQAHAJAOADQANACALgCIAVgKQgDAIgFAGIABAFQgMAIgNAAIgCgBg");
	this.shape_401.setTransform(509.575,596.3056);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#7A4A35","#633631"],[0,1],-3.3,-3.1,2.6,3.5).s().p("AgiAgQgDgXAEgzQAMAJARADQAQADANgFIAAAAIAIAdQAGAWgEAFQgGAJgdAHQgLADgIAAQgOAAgBgLg");
	this.shape_402.setTransform(509.645,599.7583);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#FEC92F","#F79939"],[0,1],3.8,-19,-2.9,14.9).s().p("AAVFuQgCgSADgqQACgqADgLQADgLgLh4QgKh4gGgUQgWhGgUhCQgoiBgMhJIB6gUIAHCAQAICCAJAPQAQAaAEBwIAHBWQAHBKAAAoIACAoQABAIgGAKIgFAJIAIAdQAGAWgEAFQgGAJgeAHQgLADgIAAQgOAAgBgLg");
	this.shape_403.setTransform(504.0431,566.3333);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#4D3A32").s().p("AgpgkQAZAbATANQALAIAGACQANAMAJAMQg2gWgdg0g");
	this.shape_404.setTransform(555.5,568.5);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#DF9B61").s().p("AAWAUIgTgPQgWgPgWgXQAaAIAZAVQAaAUAGASIgUgOg");
	this.shape_405.setTransform(553.475,561.475);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#7A4A35","#F79939"],[0,1],-7.2,-11.4,6.5,12.9).s().p("AAuBSQgjgXgpgUQgfgPgQg1QgKgigCglQAOgTAEgDQAbAFAfAYQAeAYAEAVQAFAbAkAoQgLgDgSgJIgOgIQAdAZAYA0QAMAbAHAUQgKgQgjgZg");
	this.shape_406.setTransform(555.65,570.15);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.lf(["#FEC92F","#F79939"],[0,1],1.3,8.8,-8.6,-18.8).s().p("AB+E0QgjgYgqgTQgigQgPhDIgKg/IgEgEQhOhognh7QgIgZgIgsIgOhGQgHgmgBgPQgCgnAUgEQAQgCAHAJQAEAGACARIAHBbQAIBVAQA1QARA3AVAqQAXAvAhAqIADAEQAdAFAfAYQAfAYAEAVQAGAbAjApQgLgDgRgJIgPgJQAdAaAYA0QANAbAGAUQgKgQgjgYg");
	this.shape_407.setTransform(547.6448,547.624);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#6F5E56").s().p("AABgMQAIgKAIgGIAHABQgMAJgMAWIgLAVIgMAEQAHgWARgTg");
	this.shape_408.setTransform(743.1,599.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#6F5E56").s().p("AgCgOIAJgTIAHABQgIAPgFAXIgCAVIgMAHQABgYAKgYg");
	this.shape_409.setTransform(761.4,607.65);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#8C7A72").s().p("AgQAfQgFgDAJgQQgoAMAFgLQAJgRAigZIANgCQATAAAVANQgNAlgEAEQgEAGgUACIgNABQgIAAgDgBg");
	this.shape_410.setTransform(743.7421,600.2318);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#77675F").s().p("AgdAgQgCgCABgGIACgHQgRAHgJgCQgKgBAGgNQAEgHAMgMQAMgMAPgLIATgCQAbAEAfAbQgFAUgEAGQgGAHggAGQgPADgKAAQgOAAgFgFg");
	this.shape_411.setTransform(744.8875,600.7207);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFECDA").s().p("AgEAOQgKgEgFgGQgFgGACgFQACgGAIgBQAIgCAJADQAKAEAFAGQAFAGgCAGQgCAFgIACIgFAAQgGAAgGgCg");
	this.shape_412.setTransform(818.775,478.0861);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFECDA").s().p("AgFAQQgMgEgGgIQgHgGADgHQACgHAKgCQAKgCALAEQAMAFAGAIQAHAHgDAGQgCAHgKACIgHABQgHAAgHgEg");
	this.shape_413.setTransform(819.025,470.8103);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFECDA").s().p("AAKAQQgIAAgIgFQgIgFgEgGQgEgHADgEQACgEAIAAQAIAAAIAGQAIAFAEAFQAEAGgDAFQgCAEgGAAIgCAAg");
	this.shape_414.setTransform(835.3,461.65);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFECDA").s().p("AgGAOQgLgFgFgIQgGgHADgGQADgGAKAAQAJAAAKAFQALAGAGAHQAFAIgDAFQgCAGgKAAIgCAAQgJAAgJgFg");
	this.shape_415.setTransform(830.2279,462.7271);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFECDA").s().p("AgCAMQgLgDgHgGQgHgFABgFQACgFAJgBQAIgBAKADQAMADAGAGQAHAFgBAFQgCAFgJABIgFAAQgHAAgGgCg");
	this.shape_416.setTransform(817.825,438.3225);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFECDA").s().p("AgEAOQgLgEgGgHQgGgGACgGQACgFAJgCQAJgBAKAEQALAEAGAHQAHAGgDAGQgCAFgJACIgFAAQgHAAgHgDg");
	this.shape_417.setTransform(824.3347,453.5855);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFECDA").s().p("AgEANQgJgDgEgGQgFgFACgGQACgFAIgCQAHgCAIAEQAIADAFAGQAFAFgCAGQgDAFgHACIgFAAQgFAAgFgCg");
	this.shape_418.setTransform(835.2522,432.6611);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFECDA").s().p("AgEAOQgMgEgHgHQgGgGACgGQACgGAJgBQAKgBALAEQAMAEAHAHQAHAGgCAGQgCAGgKABIgEAAQgIAAgJgDg");
	this.shape_419.setTransform(829.2487,435.725);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFECDA").s().p("AgEAPQgMgEgHgIQgHgGADgGQACgHAKgBQAKgBAKAEQAMAEAHAIQAHAGgDAGQgCAHgKABIgFAAQgIAAgHgDg");
	this.shape_420.setTransform(827.375,447.4733);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFECDA").s().p("AgFARQgOgFgIgIQgHgIACgHQADgHALgCQAMgBANAFQANAFAIAIQAHAIgCAHQgDAHgLACIgGAAQgJAAgJgEg");
	this.shape_421.setTransform(805.825,452.325);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFECDA").s().p("AgGAVQgRgGgJgKQgJgKADgIQADgJANgCQAOgCAQAGQAPAGAKALQAKAJgEAJQgDAIgOACIgFAAQgMAAgLgEg");
	this.shape_422.setTransform(813.05,459.14);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFECDA").s().p("AgGATQgOgGgJgJQgIgIADgIQACgHANgCQAMgCANAFQAPAFAJAJQAIAIgDAIQgCAIgNACIgHAAQgJAAgKgDg");
	this.shape_423.setTransform(818.7656,447.1613);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#EA9C56").s().p("AjgD2QABgIgBgpIAdgCQAkgEAkgKQBygiA/hYQBRhsgChyQgBgkgIggIgJgYQB0BpgGCZQgEBNgaA3QgaAphCAiQhZAuh2AAQg5AAg/gKg");
	this.shape_424.setTransform(816.9172,464.0479);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#C4753F").s().p("AgNBOQAdhEAGg/QAEgjgDg/QAYAyAGBJQACAkgCAbQgKAAgIADQgDABgbAwQgcAygeAPQAbgrANgfg");
	this.shape_425.setTransform(789.0694,485.125);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#6F5E56").s().p("AgCgOIAFgSIAIAAIgFASQgFAVAAASQgEAEgHAEQACgZAGgWg");
	this.shape_426.setTransform(859.475,593.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#F2A766").s().p("AAtAJQhDgwhKATQAKgSAVgMQAZgOAaADQBEAIAsB0QgTgdgigZg");
	this.shape_427.setTransform(776.15,443.0305);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#A98167").s().p("AAOAZQgGgZgZg3IgZgzQA0BCAdAuQAJAQgKAfQgDAJgUAuQAFg3gGgcg");
	this.shape_428.setTransform(835.4814,526.9);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#B2886B").s().p("AAFgHIgehQIAQAVIAZAmQAKAPAAAdQAAATgEA1QgJhMgIgTg");
	this.shape_429.setTransform(860.725,521.625);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#816F68").s().p("AgaAbQgQgBgDgEQgGgGAXgTQAWgTAOgEIAMADQAOAGANAIQgQATgUAKQgOAHgQAAIgHAAg");
	this.shape_430.setTransform(808.1546,595.3932);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#71615B").s().p("Ag9AVQAAgMAYgTQAUgRAPgEIASAGQAXALAXAUQgIALgGAFQgTAKgsAAQguAAAAgLg");
	this.shape_431.setTransform(809.3,595.875);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#948075").s().p("AAHAbIgLgJQggASgJgKQgDgDAGgRQAFgPAIgQIAIgEQAMgFATADQAVADAQAKQgJAugKAEIgFABQgHAAgJgGg");
	this.shape_432.setTransform(761.4859,607.5059);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#7F6D62").s().p("AAEAgIgTgOQgKAGgLAEQgVAIgCgLQgCgLAGgSQAEgKAKgVIAIgFQAMgEATADQAWADAXAOQALAIAHAGQgFAxgPADIgGABQgNAAgSgLg");
	this.shape_433.setTransform(762.7265,608.551);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#8C7A72").s().p("AALAaIgMgKIADgxQAbABAVANIgCAZQgEAbgKABIgCAAQgHAAgOgIgAgwANQACgMAKgYIAIgFQALgFARAAIACAAIgMAxQgaANgHAAQgJAAAEgQg");
	this.shape_434.setTransform(859.801,593.6298);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#77675F").s().p("AAGAeIgRgPQgYATgQgDQgSgEAYg7IAIgFQALgFARAAQAaAAAYAPQAMAHAHAGQAAAWgGARQgGAPgJADIgFAAQgMAAgQgNg");
	this.shape_435.setTransform(860.731,594.5);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#BC9271").s().p("AgkBnIAQhVQACgLAWgkQAYgnAJgiQgBAngNAmQgOAngBAIIgJBSg");
	this.shape_436.setTransform(788.875,499.75);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#C89F7C").s().p("AAEA/QABgygBgQQgDgXgJgXIgKgTIAQAPQAPASADAVQACARABBBg");
	this.shape_437.setTransform(768.45,503.85);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFECDA").s().p("AgJARQgFgGgBgKQgBgIAEgHQAEgHAHAAQAFgBAGAGQAFAGABAKQABAIgFAHQgEAHgGAAIgBAAQgFAAgFgFg");
	this.shape_438.setTransform(785.4063,483.325);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFECDA").s().p("AgIAPQgEgGgBgJQAAgIAEgGQAEgGAFAAQAFAAAFAGQADAGABAIQAAAIgEAHQgEAGgGAAIAAAAQgFAAgDgGg");
	this.shape_439.setTransform(783.1,488.7018);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFECDA").s().p("AgLAaQgIgJgCgOQgCgNAEgKQAFgLAKgBQAIgCAIAJQAIAJACANQACANgFALQgFALgJABIgCAAQgHAAgHgHg");
	this.shape_440.setTransform(783.1228,471.9695);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFECDA").s().p("AgJAWQgGgHgDgLQgCgLAEgJQAEgJAIgBQAGgBAHAHQAHAHACALQADAKgEAJQgEAJgIABIgDAAQgFAAgGgFg");
	this.shape_441.setTransform(776.6647,479.082);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFECDA").s().p("AgKAYQgPgHgIgMQgIgLAEgKQAFgKAOgCQAOgCAPAHQAPAHAIAMQAIALgFAKQgEAKgOACIgGAAQgMAAgLgFg");
	this.shape_442.setTransform(793.4643,461.6737);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFECDA").s().p("AgFAOQgJgDgFgIQgEgGADgGQADgGAIgBQAIgBAIAEQAIAEAFAHQAEAGgDAGQgCAGgIABIgEAAQgGAAgGgDg");
	this.shape_443.setTransform(788.625,454.025);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFECDA").s().p("AgHASQgMgFgFgJQgFgIADgIQADgHAKgCQALgBAKAFQAMAFAFAJQAFAIgDAHQgEAIgKABIgGABQgHAAgHgEg");
	this.shape_444.setTransform(801.35,461.3113);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFECDA").s().p("AgBAaQgKgFgGgKQgHgLABgJQABgLAIgFQAHgEAJAEQAKAEAGALQAHAKgBAKQgBALgIAEQgEADgEAAQgFAAgDgCg");
	this.shape_445.setTransform(773.775,448.2566);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFECDA").s().p("AgDAVQgHgFgFgJQgEgIACgJQABgIAHgDQAGgEAHAFQAIAEAEAJQAEAJgBAIQgCAJgHADIgFACQgEAAgEgDg");
	this.shape_446.setTransform(764.7983,445.7584);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFECDA").s().p("AgDAXQgJgFgEgKQgFgJACgJQACgJAHgEQAHgDAIAFQAHAEAFAKQAFAJgCAJQgCAKgHADQgDABgDAAQgFAAgDgCg");
	this.shape_447.setTransform(771.5,460.2795);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFECDA").s().p("AgEAOQgMgFgIgHQgHgGACgGQACgGAKAAQAKgBAMAFQANAEAHAHQAIAGgDAGQgCAGgKAAIgCABQgKAAgKgEg");
	this.shape_448.setTransform(796.3352,438.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFECDA").s().p("AAAAIQgHAAgGgEQgFgDAAgCQABgEAFgCQAGgBAHAAQAIABAFADQAFADAAADQgBADgFACIgJACIgEgBg");
	this.shape_449.setTransform(786.425,434.4104);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFECDA").s().p("AgCALQgIgCgFgFQgFgEABgFQABgEAHgCQAHgBAHACQAJACAEAFQAFAEgBAFQgBAEgHACIgFAAIgJgBg");
	this.shape_450.setTransform(786.891,441.771);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFECDA").s().p("AgRAGQgIgDAAgEIABgDIAsgEQAGADAAAEQAAAEgIADQgHADgLAAQgKAAgHgDg");
	this.shape_451.setTransform(774.325,435.175);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AgRAIQgIgDAAgFQAAgEAIgDQAIgEAJABQALgBAHAEQAIADAAAEQAAAFgIADQgHAEgLgBQgKABgHgEg");
	this.shape_452.setTransform(774.325,434.95);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFECDA").s().p("AgBAJQgQgBgGgHIAngKQAJAFgBAEQAAAFgHACQgGADgIAAIgEgBg");
	this.shape_453.setTransform(790.7264,431.9625);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("AAAALQgKAAgIgEQgHgEAAgEQABgFAHgDQAJgCAJAAQALABAGAEQAIAEgBAEQAAAFgHACQgGADgHAAIgFgBg");
	this.shape_454.setTransform(790.6,431.7583);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("AAAAKQgLAAgHgEQgHgEAAgDQABgEAIgDQAIgCAJAAQAKABAIAEQAHAEAAADQgBAEgHADQgGACgHAAIgFgBg");
	this.shape_455.setTransform(804.6999,426.3101);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFECDA").s().p("AgKADQgGAAgJgDIAZgCIAagBQgEAEgKACIgLABIgLgBg");
	this.shape_456.setTransform(812.925,427.275);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("AgCAQQgOgCgKgGQgKgGACgGQAAgHALgDQAMgDAOACQAOADAKAGQAKAGgBAFQgCAHgLADQgGACgIAAIgLgBg");
	this.shape_457.setTransform(812.05,426.025);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("AgCAKQgKgCgGgFQgHgDABgEQABgEAIgBQAIgCAJACQALACAGAEQAHAEgBAEQgBAEgIABIgIABIgKgBg");
	this.shape_458.setTransform(823.8295,424.375);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgCAIQgIgCgFgDQgFgDAAgEQABgDAHgBQAHgBAHACQAIACAGAEQAFACgBAEQgBADgGABIgGAAIgJgBg");
	this.shape_459.setTransform(829.4054,424.5155);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFECDA").s().p("AgBAKQgJgCgGgEQgGgEABgDQABgEAGgCQAHgCAJACQAJACAGAEQAGADgBAEQgBAEgHACIgGABIgJgBg");
	this.shape_460.setTransform(808.5051,429.9821);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFECDA").s().p("AgDAMQgLgEgGgHQgHgFACgFQACgFAJAAQAIgBAKAEQALAEAHAHQAGAFgCAFQgCAFgIAAIgCAAQgJAAgIgDg");
	this.shape_461.setTransform(803.1845,438.475);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFECDA").s().p("AgFAQQgLgEgHgIQgHgHADgGQACgGAKgDQAKgBALAEQAMAFAGAHQAHAHgDAHQgCAGgKACIgGAAQgHAAgIgDg");
	this.shape_462.setTransform(799.9768,472.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#F9D3A8").s().p("AgGAdQgKgJgEgOQgEgNADgMQADgMAJgDQAIgCAJAIQAJAIAEAPQAEANgDAMQgDAMgJADIgEAAQgGAAgGgGg");
	this.shape_463.setTransform(854.525,472.725);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#F9D3A8").s().p("AAKAcQgLgCgLgJQgMgKgFgKQgEgMAGgHQAFgHANACQALACAMAJQALAKAFAKQADAMgFAHQgEAFgIAAIgGAAg");
	this.shape_464.setTransform(858.1,448.959);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#F9D3A8").s().p("AAEAPQgFgBgGgFQgGgFgBgGQgCgGADgEQAEgDAGABQAFABAGAFQAGAGACAFQABAGgDAEQgDACgEAAIgDAAg");
	this.shape_465.setTransform(848.8361,449.925);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#F9D3A8").s().p("AgCAQQgGgEgDgIQgCgHABgGQACgHAEgBQAFgDAFAFQAFAEADAIQACAGgBAHQgBAHgFACIgDAAQgEAAgCgDg");
	this.shape_466.setTransform(852.9362,480);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#F9D3A8").s().p("AgCAQQgGgEgDgIQgCgHABgGQACgHAFgBQAFgDAEAFQAFAEADAIQACAHgBAGQgBAHgFACIgDAAQgEAAgCgDg");
	this.shape_467.setTransform(862.2362,465);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#F9D3A8").s().p("AAAAVQgHgEgFgJQgGgIAAgIQAAgJAFgDQAGgEAHAEQAHAEAGAIQAFAIABAIQAAAJgGAEQgCACgEAAQgDAAgEgCg");
	this.shape_468.setTransform(856.4229,462.7558);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#F9D3A8").s().p("AADASQgGgCgHgHQgGgHgBgGQgBgIAEgEQAFgEAHACQAGADAGAHQAHAGABAHQABAIgEAEQgDACgEAAIgFgBg");
	this.shape_469.setTransform(847.0163,456.053);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#F9D3A8").s().p("AgHAOQgLgHgGgIQgFgIAEgGIABgDQAYALAbAQQAAAJgNABIgDAAQgKAAgIgFg");
	this.shape_470.setTransform(847.4529,434.1821);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFECDA").s().p("AgGAPQgLgFgGgJQgGgIAEgGQADgGAKAAQAKgBAKAGQAKAGAGAIQAFAJgCAFQgDAGgKAAIgDAAQgJAAgIgFg");
	this.shape_471.setTransform(847.4736,433.9802);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#F9D3A8").s().p("AgIAOQgJgFgEgJQgEgHAEgFQADgHAJABQAJAAAJAFQAJAFAEAIQAEAIgDAGQgEAFgJAAQgJABgJgGg");
	this.shape_472.setTransform(844.85,440.35);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#B86B3D").s().p("AgfBxQAGgTAjheQAZhCADgfQAFgygUg7IgVgxQAyA6AQBJQAHAjgUA+QgMAigdBKQgrCPgoAgQAQhJAWhGg");
	this.shape_473.setTransform(862.5157,471.4);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#CE7C42").s().p("AgVFAQgZgWgdg/QgehJgNgbQgGgLgKgEQAOgUAMgjQAXhGgOhPQgKg+gjg5IgggsQBHgPAVgkQALgTgEgPQB+A4BFBcQAwBAAKA+QAGAigTA8QgLAjgcBKQg7C8g5AAQgOAAgPgNg");
	this.shape_474.setTransform(851.5867,465.0593);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#DB8947").s().p("AmgEaQgYhsgQgiIgqhOQgfg7gGgqQgKhBgBhiIAChVIAzACQBGgCBdgOQAWgDB/ghQBngbBYgEQBJgDBGALQBNAMA+AdQBuAzBIBVQA/BKAJBAQAFAggTA6QgMAigbBKQhKDvhHg8QgZgVgcg9IgqhgQgGgOgKgFQgKgFgJAIQgcAbgQANQgbAYgdAPQhRAoiUAAIhPgIQgfgDgIARQgXAwgYAcQgaAegVABIgEAAQg8AAgdhYg");
	this.shape_475.setTransform(814.5931,463.7376);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#F2A766").s().p("AEhCpQkfgbiZgtQi6g3h6g1IhWgsQAhgDA5gIQBQgLAtgMQAUgFBxgtQB8grBfgDQBjgCA1AIQBdAOA9AyQBfBNA8BXQA0BNALA8QhxgEiQgNg");
	this.shape_476.setTransform(814.625,440.5202);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#B79077").s().p("AhogvIAFhcIDVACIgCBeQgGAJgMAMQgZAXggAQQg/AcgbAQQgqAagRA1QAChPAGhsg");
	this.shape_477.setTransform(748.75,422.375);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#F9D3A8").s().p("AjoLKQgcgCAAgSQgBggAJglQAkiQAAi2QgDg/gDgdQgqgEgxgcQhhg3gbh1IATgNQAXgTAOgZQARgcAIgeIAFgYQhBhMgTjdQgGhFgBhMIABg+IBphKIgED8QAEEHAqAxIBugLQCEgLBvACQFnAGAZCFQgZA4hDA5QiHBxjPgFQAPg2gBhCIgegFQgRAqgdApQgbAngDAIQgXBEgcCVQgcCcgOAtQgBAFgDAeQgDAagGAOQgMAbgaAAIgFgBg");
	this.shape_478.setTransform(792.1,480.7601);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#E0B88C").s().p("AgpEvQgOgEANgmIAWg3QAIgSADgZQAEgeABgzQABiPgHhlQgDgzgKhNIAIgKQALgIANAOQAVAUAAA+QAACqAIB/QAFBBAFArQAGBZgVAFQgNADgJgFIgGgFQgGAHgJAHQgPAKgKAAIgGgBg");
	this.shape_479.setTransform(859.9107,566.7282);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFD9AF").s().p("Ag7DhQAGgRAihAQAcg3AIgvQAIgqAEhTQADhHAAg+QAAgFAEgCQAEgCAGAEQAOAJAAAiQAAB5gHBnQgEA7gLA5QgGAcgFARQgIAPgnADg");
	this.shape_480.setTransform(763.5258,584.9275);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E0B88C").s().p("AnEPZQgFgZAfg3QAnhCAJg0QAJgyAEhzQADhmgDglQgFgvgBgZQgCgpAKgpQAVhRAJhoQAJhigEhKQgPAAgXgCQgtgEghgMQhDgYg/hAQhWhWAAhlQAAguAOg6IALAYQAOAcAOASQAUAYAYAOQgshogJkoIAAkTIC6ALIgBBUQgBBdACAyIIcBeQIeBnAIAtQAGAjguBaQg7B1gMAmQgMAqglCnQgGAbgIAGQgIAHgVgHQgdgJgcgmQgdgogSg8QgJgcgFgtQgEgjgDgBIgbAvQgiA6g7AlQhhA8iaANQgxAEgwgCIgngCIgcCEQghCSgXBHQgDAKgCArQgFAxgVAyQgJAWgMB5QgOCEAIA1QAGAtgBAmQgCAngKAPQgEAHgHgPQgGgMAAAOIgCAmIhDAPQgKAGgKADQgHACgEAAQgKAAgBgIg");
	this.shape_481.setTransform(803.1596,510.8279);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#C89F7C").s().p("AmLPaIgPgOQgKAFgKADQgUAGgCgLQgFgaAfg2QAnhDAJg0QAJgyAEhyQADhmgDgmQgFgvgBgYQgCgqAKgpQAVhSAJhYQAJhVgChJQhOgFgqgUQhBgdg2g7QhDhJgXhcQgKgmAJg6IAKg0QgUhZAKj1IAOjiIDUAFIgBBTQgBBdACAzIIcBdQIeBnAIAuQAGAjgcBQQgoBugGAZQgWBigGA+QgFA5AJAlQAHAfAaAhQAVAcgBAYIgFBCQgDA8AABsQAACrAKCAIALBsQAFAsgFAlQgFApgOAEQgNADgQgRIgOgTQgGAFgJAFQgTAJgMgEQgOgEAMgiIAWgzQAQgiABhaQABiMgHhuQgHhdgKg0QgMg1g8hcQgshEg0hbIgshPQhTBZjdAcQhEAJhLABIg9AAIgcB8QggCKgTA/QgDAKgCAqQgFAygVAyQgJAWgMB5QgOCEAIA0QAGAugBAlQgCAogKAPQgEAGgHgPQgGgLAAANQgCAygHARQgEAIgKADIgGABQgLAAgOgLg");
	this.shape_482.setTransform(803.1765,511.861);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#B29079").s().p("AASA4Qg4gagkgmIgGhBIChA/IgNBUQgVgFgdgNg");
	this.shape_483.setTransform(758.725,509.125);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#EFC79C").s().p("AgrDcIABgLQABgUADgPQACgOAAgLQACgqgalXIB5AmIgSCgQgTCjAAASQAAAwgDASQgGAagcACIgFAAQgXAAgCgRg");
	this.shape_484.setTransform(756.925,526.5598);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#EFC79C").s().p("AhDDAQAhgjANgiQAqhzAPh6QAFgmABgmIAHgFQAIgDAGANQAOAdgZCdQgHAvgUBCQgTA+gKAUg");
	this.shape_485.setTransform(748.6148,579.6048);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#DBB086").s().p("Ah7HTQAhgiALggQArhzAPh7QAHg5gBhEIgChQQABgVADgPQACgOAAgLQACgpgalZICfA0IgWCVQgXCbgDAgIABAeQABAUgEAXQgDAYgIAWIgKAdQgKAsgKBCQgMBJgEAuQgDAegCBIQgDA7gCAPQgEATgGABQgFABgJgPQgEgJgEAGIgGAXIgEAMg");
	this.shape_486.setTransform(754.425,551.825);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#A98167").s().p("AhwgGQALg7BdgPQAtgHArAEIAHAVQALAbAPAfQgPAPgaATQgzAmgzASQgjgvgvgtg");
	this.shape_487.setTransform(819.25,508.9406);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C89F7B").s().p("AhtD+QAWgZAKgDQAxg1AahEQANgkAkh5QApiNAMhHQACgNAJABQAIAAAEAIQAHAOAAAWQgBAkgTBJQggB6gsBrQgqBogeAhQgVAXglAIIghADg");
	this.shape_488.setTransform(816.5767,570.2741);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#BA9172").s().p("AisHHQARgPANgEQAyg2AahDQATgyAqiVQAwitgCgpQgDg0gwhTQg2hehVhTQALg7BcgNQAugGAqAFIAfBHQAnBSAoA4QAOAUAWAaQAOAWgKAfQgGARgpBZQgoBWgYBHQgbBUgYBVQgTBDgJApQgHAjgEAPQgGASgGABQgEABgFgKQgFgLgEACQgFACgKAUQgNAagQASIhxAFQAFgOATgSg");
	this.shape_489.setTransform(823,549.3413);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#3B3230").s().p("ADwEcQgHg6gih9QguimhdhoQh5iIi9gJIA0gDQA6gBAaALQBAAdAfATQAwAeAiAnQBhBxAwCwQAiB9AHA5QAEAdgDAFIgJADQADgFgEgdg");
	this.shape_490.setTransform(269.7317,439.421);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#37322F").s().p("AAcAjQgggMgWACQgLABgHgIQgHgIgBgOQgBgMAEgKQAEgKAJgCIABAAQApgDAZAYQAOAOAGAUQAGASgGADQgCACgEAAQgDAAgOgFgAAfAaIANAEQAAgRgOgQQgUgaglAAIgHABQgEABgDAHQgCAHAAAJQADAVAOgBIAHgBQAVAAAdALg");
	this.shape_491.setTransform(148.5965,607.0382);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#653F31").s().p("AAWAcQgbgJgVABQgTACgDgaQgCgbAPgCQAxgDAXAiQAIALACANQADALgCABIgBAAQgFAAgUgGg");
	this.shape_492.setTransform(148.5573,607.0248);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#37322F").s().p("AgxAOQgCgQAFgOQAFgPAOgDIAHgBQASAAAWATQATAPAJANQAEAHgCAEQgCAFgJACIghADIgpADIAAAAQgKAAgEgWgAgZgZQgMADgCASQgCAJACAKQACAJACACIAogDQAfgCAFgCQgFgKgTgPQgVgUgQAAg");
	this.shape_493.setTransform(153.3772,601.875);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#653F31").s().p("AgtAEQAAgcATgGQASgFAdAaQAcAXgDAHQgCAEgTABIg8AFIgBAAQgJAAAAgbg");
	this.shape_494.setTransform(153.3941,601.8537);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#3B3230").s().p("AAcAnQAKgigPgTQgMgQgagGIgZgEIAcgBQAeADANASQASAYgMAmg");
	this.shape_495.setTransform(142.5441,604.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#3B3230").s().p("AhIJKQgzgMgXgoQggg4AchdQAYhQgDhNQgGh4hIhUIg1g7Qhfhsgkg7Qg7higPh6IAJgBQAPB4A6BhQAkA8BeBoIA1A8QBLBWAFB7QAEBQgZBRQgJAfgCAfQgDAwARAfQAVAkAvAMQCyAtB7ADQBpADAogZQAMgIACgJIAAgDIADAAQAPgDAQgMQAQgLAKgOQAIgMgCgJQgOgpgpgVQgpgUgwAJQg8ALgXgbQgUgZAUgzIABgBQDBlGgWklQgPjNh0imIAcAkQAeAoALAWQA2BzAOB8QAlE4jOFZQgSAuARAVQASAWA3gJQA0gLAsAXQAsAWAQAtIAAABQADAMgLAQQgJAOgQANQgSAMgRAFQgEAKgNAJQgkAYhgAAQh+AAjDgxg");
	this.shape_496.setTransform(106.9321,549.35);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#AE5E3B").s().p("ABoC9QgsguhohRQhghKgsgyQhGhQghhnIDyhYIDIgoQBTB1AgCQQAzDmhZEAQgvhnhRhSg");
	this.shape_497.setTransform(118.8405,523.025);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#924A37").s().p("AhHJJQhHgRgNhHQgIgvASg8QAXhMgChMQgDh9hMhZIhXhhQgxg3gcgpQhNhwgQiKILejWQBqCYAWC8QAlE3jNFYQgVA0AXAXQAVAVA2gKQAzgKArAXQApAWAPApQAEARgXAXQgXAXgZAEQgGAjhnAHIglABQh9AAjCgxg");
	this.shape_498.setTransform(106.9481,548.981);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#37322F").s().p("AAoAhQgggFgPABIgPACQgQACgIgDQgHgDgDgIQgEgJACgKQACgLAIgKQAKgLAPgBQAWgCAeAaQAcAXADANQAAAFgEACIgDABgAAwAYQgJgOgTgOQgXgUgRAAIgCAAQgMACgHAIQgGAHgBAJQgDAPAJAEQAEACAPgCIAPgCQANgBAlAGIAGAAIAAAAg");
	this.shape_499.setTransform(265.9414,599.793);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#653F31").s().p("AAfAbQgZgEgNABIgVADQgKABgGgDQgPgGAHgWQAGgXAXgCQAWgDAfAeQAgAbgIAEIgXgDg");
	this.shape_500.setTransform(265.9465,599.7902);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#3B3230").s().p("AgHgZIgngHIAqADQAqANAJAvIgKACQgHgqglgQg");
	this.shape_501.setTransform(259.3875,597.125);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#3B3230").s().p("AAHIaQhRgEgqg8QgXgigQhEIgGgYQgEgNgNgSQgIgMgWgcQhLhfg3hhQg2hegZhoQgWhdgChzQAAgeAHg/IAHg5QgLCvASB0QAVCLBFB6QA2BfBMBfIAfApQANATAEAOIAGAZQAQBDAWAgQAnA4BNAEQBTAEBUgDQAtgCAcABIABAAQA9ABAegCQAygFAPgRQAJgLgDgRIgBgCIABgCIADgGQAYgxgJgWQgIgPgWgIQgKgBgggCQhFgGghgJQg9gPgUgjQgjg/gOhrQgQh8AjhEQANgYAqg2QBNhhAYhBQAphvgniGIAOAmQAOArAAAjQACBagqBUQgYAwg7BKQgpA0gNAaQgiBCAPB5QAOBoAjA9QASAgA6AOQAhAJBCAFQAjACAIACQAcAIAIAUQAIARgHAZQgEAOgLAXIgDAGQAEAUgMANQgRAVgzAFQgfAEhAgDIgBAAQgkAAglACQgoACgeAAQgjAAg/gEg");
	this.shape_502.setTransform(222.0048,552.65);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#C78855").s().p("AhuCrQAIhgBHhEQBAhAAhhkQAdhZAAhmQAvCnhOCLQgXAnguA8QgtA5gNAYQgRAigEA4QgDA4ALBBQgqhcAIhWg");
	this.shape_503.setTransform(243.282,533.375);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#AE5E3B").s().p("ABUFLQgvg9g6h3QgwhihZg9IhEgtQgkgZgTgYQgmgrgYhFQgRgwgQhTIGJhgIFVAZQAwCnhPCMQgWAngwA9QgtA4gMAZQgdA5AJBoQAKBuAwBjQhSgThIhcg");
	this.shape_504.setTransform(216.9071,540.025);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#924A37").s().p("AAHIZQhZgFgohJQgNgZgJgkIgMgwQgHgUg0hDQhDhUg0hdQhEh3gWiHQgTh3ALi0ILjhIQAwCnhPCMQgWAngwA9QgtA5gMAZQgkBEARB7QAOBpAiA9QAYAqBXANQAuAHBBAEQApAMgFAoQgCAPgTAoQAJApg8ALQghAHhTgCQgVgBhKADIgwABQgtAAg1gDg");
	this.shape_505.setTransform(222.0055,552.3196);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#37322F").s().p("AA4AiQgegLgkAAQgPAAgPACIgRADIgCgFQgCgIAAgKQgCgRAHgLQAFgJALgBIACAAQAoAAAdAVQARAMALASQAGAKgDAEIgBACgAAyAWQgLgSgRgKQgZgSgjAAIgBAAQgFACgEAEQgHAMAFAWQAWgDASAAQAiAAAaAJIAAAAg");
	this.shape_506.setTransform(269.7477,596.725);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#653F31").s().p("AgRATIglADQgDgLAAgMQABgYAQgDQAvgBAfAdQAQAQAEAOQghgNgqACg");
	this.shape_507.setTransform(269.75,596.6996);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#3B3230").s().p("AmYAvQBEhYBmg1QCEhEC3gIQCBgFCQAaQBIANAvAOIgCAKQgwgOhGgNQiPgaiBAFQisAHiBBAQiqBVhKCwQAhhZAbgkg");
	this.shape_508.setTransform(214.2,422.6847);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#AE5E3B").s().p("ABQimQDQgIC3A4IutEeQCGk+GggQg");
	this.shape_509.setTransform(213.9,422.825);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#3B3230").s().p("AluLXQiYgliThGQiphQiHhwQiHhwhAhwIAAAAIAAgBQgTiWAriFQAriFBkhrQBehkCAhCQBUgsBTgWQBagYBqgLQA+gGB0gEQBRgDAogDQA8gGAqgLQBZgYCZg9QBNgeA9gbIAEAJQg9AbhOAeQiZA+hZAYQgrALg9AFQgjADhXAEQhzAEg+AGQhpAKhZAYQjiA+icCjQjNDXAlEwQA/BsCCBsQCGBwCqBSQGTDBFzhDQAIgBBjhNQCih9BfhBQCsh2B1gvQBqgqBDhUQAogyAzhqQAjhJAWghQAlg2AvgbIAFAIQguAbgjA0QgWAggjBIQgzBsgpAyQhFBWhsArQh0AuirB2QhhBDifB7IhOA8QgaATgHABQhYAQhhAAQiRAAiWgkg");
	this.shape_510.setTransform(177.2217,486.725);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#AE5E3B").s().p("Al1JbQhWgpg8hNQg9hPgChPQiOBFiAAqQgxgfg6gaQhYiTAKjEQAKi3BaieQBgg2BhgaQCEgkDKgIQDLgIA8gQQA8gQCIhLQB6hCBcgNQBxgQBvAGQCnAKBvA8QAoAVAnAuQASAVAuBCQAuBCAvCzQAXBZAPBLQg2AfgoBDIhCCDQgrBVgtAyQhABFheAmQgKAEhZAOQhrAShmALQkxAhg5guQg+BkhgAVQgaAGgaAAQg9AAhBgfg");
	this.shape_511.setTransform(190.569,470.3426);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#924A37").s().p("AqYJnQishSiGhwQiEhug+htQglkvDLjZQCdioDmg+QCDgjDLgIQDKgIA9gRQBZgYCag9QBOgfA7gaIMlJVQg1AegpBEIhCCCQgqBUguAyQg/BGhfAlQiZA9kCDAIijB9QhGA2gJACQhgARhhAAQkcAAkriQg");
	this.shape_512.setTransform(177.3398,486.7866);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#3B3230").s().p("AhOHcQhNg1g2hQQg3hQADg3QACgfALgbQAHgPATggQAbgpAPghQAvhqAVhxQAdiUgUiRIgEgeIANAbQBBCFCVC+QBMBgBABFIACADIgCADQgXAig3A7QghAjgNAQQgXAcgMAXQgVApACApQADAuAiAZQAIAFAXABQAnABAZARIABABIABACQASA7gCAXQgCAQgRALQgKAHgoAHQgtAIgtAAQhhAAg2gmgAisAhQgOAggcAsQgTAegGAPQgLAZgBAdQgDA1A1BOQA1BNBLA0QA1AkBdAAQAtAAAtgIQAlgGAIgGQANgIABgNQACgVgRg3QgWgOgkgBQgZgBgKgHQgmgbgDgyQgDgtAWgrQANgYAXgdIAvg0QA1g6AWgeQhGhOhHhaQiFiqhCh9QAaD4hsDyg");
	this.shape_513.setTransform(70.6922,551.525);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#924A37").s().p("AhKHMQhNg1g1hOQg2hOADg3QACgqAZgqQArhHAKgWQA0h1AVh9QAXiKgSiHQBCCHCWC/QBLBgA/BEQgWAfg/BFQg5A9gRAiQgWAqACAqQADAxAlAaQAIAGAgABQAgACAWAPQASA6gCAWQgCAOgOAKQgZAQhaAEIgaABQhcAAg1glg");
	this.shape_514.setTransform(70.5944,552.7318);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#3B3230").s().p("AgiAqQAqgUARglIAKgjIgGApQgOArgsARg");
	this.shape_515.setTransform(288.75,564.65);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#3B3230").s().p("AgZAlQASgNARgjIAQghIgIAjQgNAlgYARgAAagsIAAAAg");
	this.shape_516.setTransform(293.25,571.575);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#3B3230").s().p("AgIAkQAIgRAEgeIAEgcIABAeQgBAfgIARg");
	this.shape_517.setTransform(300.475,571.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#3B3230").s().p("AgbAuQAFgWAZgmIAZgiIgUAkQgVAogEAUg");
	this.shape_518.setTransform(282.125,537.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#3B3230").s().p("AC6GmQgHADgIABQgUAAgPgWQgPgXAGgZQgSABgKgMQgUgXALhOQABghgLgxQgKgxACgfQgeAIg7AAQhVAAhQgRQiCgdhAhDIgCgDIABgDQAghTDQipIDTifIAIgGIAAAKQAABGA2BFQAhAoBZBPIAYAUQA+A3AXBnQAeCGgrDPQgJApgbASQgQAKgTAAIgCAAQgJAMgMAKQgUAOgRAAQgWAAgPgYgADAGcQANAZASAAQAQAAATgRIARgSIACgCIADAAIADABQARAAAOgKQAWgPAJglQAliygSh9QgSh9hGg9IgYgVQhYhNgigpQg2hEgDhGQhxBQhsBYQi6CaghBNQA/BAB/AcQBNAQBTAAQBBAAAcgJIAHgCIgBAHQgCAVADAWIAHAoQAGAbABANQAEAYgCAWQgKBJARAVQAJALARgFIAJgCIgDAJQgJAYAPAXQAMARAPAAQAHAAAHgGIAFgEg");
	this.shape_519.setTransform(272.1293,534.3);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#C78855").s().p("ACJCzQgKhvgwhRQgcgyhMhGQhRhJgcgsQgSgggDgiQgDgjANgeIAGgDQgBBLA/BLQAeAkBtBfQBDA8AUB1QAVB/glC4QALiBgHhNg");
	this.shape_520.setTransform(293.885,529.15);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#AE5E3B").s().p("AAxDeQgGgmgKhbQgIhPgJgjQgIggg1gWQhOgggKgHQgwgfgLhAQgHgsAIhQIBbhBQAABLA/BLQAdAkBtBfQBEA8AUB3QAVCAgnC7IgHAWQhYgbgbiWg");
	this.shape_521.setTransform(289.9125,530.55);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#924A37").s().p("AC8GcQgUATgXgaQgYgaAMggQg4AOARh3QACghgMg1QgLgyAEghQhCAViJgTQirgYhMhQQAghUDVirIDNiaQgBBMA/BLQAeAjBuBgQBEA8ATB2QAVCBgmC7QgLAtgfAPQgPAHgNgCQgPATgTAKQgMAHgLAAQgVAAgNgbg");
	this.shape_522.setTransform(272.1706,534.5278);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#37322F").s().p("Ag0AyIABgGQAKgMAkhRIAAgBQACgCADAAQAKAAAnAYIAEACIgCAFQgPAjglAWQgdARgQAAQgDAAgDgDgAgmApQAVgFASgNQAcgUAMgYQgegSgKgDIgnBTg");
	this.shape_523.setTransform(281.675,571.35);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#653F31").s().p("AguAuQAGgIAVgsIATgrIAHACQANAEAcASQgPAkgqAXQgeAQgHAAQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBABgBg");
	this.shape_524.setTransform(281.5264,571.525);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#37322F").s().p("AgpAtQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBIABgCQAIgKAXhGIAAgCIACgBQAIgFAoAYIADADIgCADQgNAagfAWQgaATgIAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAgbAgQApgXARgdQgYgPgJgBQgQAugJAWg");
	this.shape_525.setTransform(286.4917,577.8288);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#653F31").s().p("AgFgpIAHACQAMADAYAPQgVApg2AWQAIgKAYhJg");
	this.shape_526.setTransform(286.425,577.8);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#37322F").s().p("AgmAtQAAgBgBAAQAAAAAAgBQAAAAAAgBQABgBAAAAIABgDQAHgLARhEIAAgBIACgBQAIgGAnAUIAEACIgCAEQgLAagcAYQgYATgIAAIgBAAIgEgBgAgXAeQAkgXAOgdQgWgLgJgCQgLApgIAYg");
	this.shape_527.setTransform(292.775,580.1883);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#653F31").s().p("AgIgnIAHAAQAMADAWAMQgQAogxAYQAGgKAShFg");
	this.shape_528.setTransform(292.75,580.175);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#37322F").s().p("AgdAvIABgGQAEgMAAhGIAAgCIABgBQAHgIAqALIAEABIAAAEQgFAcgWAdQgTAbgHAAIgEAAIgCgBgAgOglQgBAqgCAaQAegfAGghQgTgEgKAAIgEAAg");
	this.shape_529.setTransform(300.3,578.1138);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#653F31").s().p("AgUgCIAAgmIAIgCQAMAAAZAGQgHArgqAkQADgHABgmg");
	this.shape_530.setTransform(300.325,578.0731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30.6,5.4,1067.8000000000002,607.5), null);


// stage content:
(lib.head1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Game
	this.instance = new lib.Symbol16_1();
	this.instance.setTransform(-263.75,274.2,1,1,0,0,0,20,16);

	this.game = new lib.Game();
	this.game.name = "game";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3C408C").s().p("EhJCAyoMAAAhlPMCSFAAAMAAABlPgEhCLAt3MCEWAAAMAAAhbtMiEWAAAg");
	this.shape.setTransform(450.05,314.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#679699").s().p("AgfDlIAAhAIA/AAIAABAgAgRB0IgRjyIAAhmIBFAAIAABmIgQDyg");
	this.shape_1.setTransform(518.525,310.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#679699").s().p("AB2DlIjvlnIAAFnIg6AAIAAnJIA+AAIDvFmIAAlmIA6AAIAAHJg");
	this.shape_2.setTransform(487.025,310.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#679699").s().p("AgeDlIAAnJIA8AAIAAHJg");
	this.shape_3.setTransform(456.05,310.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#679699").s().p("ABuDlIhglcIgOg2IgNA2IhhFcIg+AAIh6nJIA+AAIBGErQAMAwAHAuIAVhUIBXk1IBIAAIBCDnQAZBWALBMQAJgsANg4IBJklIA9AAIh+HJg");
	this.shape_4.setTransform(417.65,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.game},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,191.5,735.4000000000001,446.6);
// library properties:
lib.properties = {
	id: '89F82C848AF01143994B9EC4912F3C28',
	width: 914,
	height: 623,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/wro.mp3", id:"wro"},
		{src:"sounds/yes.mp3", id:"yes"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

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
an.compositions['89F82C848AF01143994B9EC4912F3C28'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;