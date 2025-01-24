(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.BRIGHTEDGELOGO = function() {
	this.initialize(img.BRIGHTEDGELOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,350);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);


(lib.wrong = function() {
	this.initialize(img.wrong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,170);// helper functions:

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


(lib.Symbol97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
	}
	this.frame_121 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(120).call(this.frame_121).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(0.2).p("AATA0QgCAagEA2QgEAEgDABQgFAAgDABQgKgJgBgtQAAg4gCgKIgFiOQAHgIAFgCQAEgBALgCQAJAUABAiQACArACAMQAAAjgCAtg");
	this.shape.setTransform(309.0887,153.8736,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#373535","#444446","#FFFFFF"],[0,0.58,1],-3.2,0,1.2,0).s().p("AgNBUQgBg4gCgKIgEiOQAHgIAFgCIAPgDQAJAUABAiQACArACAMQAAAjgDAtIgGBQQgDAEgDABIgIABQgLgJAAgtg");
	this.shape_1.setTransform(309.0909,153.8793,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(0.2).p("AFGhqQCmgFFLgNQAaAFgPArQAAAbgHAyQgNAxgCAIQgCAJgDACIgPAEQhAACi2AJQiaAIhcACQgFgFgBgJQAAgLAAgFQAIhDAGgrQAHgyAAgBgAEPgFQgJAtgLA3QAAABgDADIj4AJQgEgDgBgCQgBgqAGg2QAIg+AEggIALgHQAqgBA2gDQBCgDBLgCQATADACABQAFAEAAAQQgFAfgKArgAgWhZQAAAngIA5QgEAggJBAQgDAEgCABQgBABgJADQgPAAljAHQjfAEiUgCIgWADQgIgsgEg2QgCgagDhIQALgVAnAOQAkgDGGAAQCegKCyAAQABAAADADg");
	this.shape_2.setTransform(378.8874,173.6417,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#373535","#444446","#FFFFFF"],[0,0.58,1],-84.6,0,84,0).s().p("AtBAaIgFhiQALgVAnAOQAkgCGGgBQCegKCyAAIAEADQAAAngIA5IgNBhIgFAEIgKAEIlyAHQjfAEiUgBIgWACQgIgrgEg3gAgFBoQgBgrAGg2IAMheIALgHQAqAAA2gEICNgEQATACACABQAFAEAAAQQgFAggKArIgUBjIgDAEIj4AJIgFgEgAEmBQIAAgPIAOhvIAHgzIALgIIHxgSQAaAEgPArQAAAbgHAyIgPA6QgCAIgDACIgPAEQhAACi2AKQibAHhbACQgFgFgBgJg");
	this.shape_3.setTransform(378.8894,173.619,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(0.2).p("AA1hNQCCgCBVgDQALAEABAAQAEACAGAIQAAABACBDQACAngEAbIgHAFQmpAJh+AEQgJgCgEgBQgJgegBglQgBgMACg3IAJgOQAZgHAjgBQAQAAAuABQAVAAC/gDg");
	this.shape_4.setTransform(390.3237,149.5384,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#373535","#444446","#FFFFFF"],[0,0.58,1],-31.3,0,28,0).s().p("AkZBRQgJgegBgmQgBgLACg3IAJgOQAZgHAjgBQAQAAAuABIDUgEQCCgBBVgDIAMAEQAEACAGAHIACBFQACAngEAaIgHAGQmpAJh+ADIgNgCg");
	this.shape_5.setTransform(390.3237,149.5394,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#444446","#444446","#373535"],[0,0.431,1],1.1,-6.7,0,1.1,-6.7,20.8).s().p("AgIByQgCAAgCgDIAAhBQgBgsgGgRQgLgCgCAOIAAAaQgEACgDACQgJgbgCglQgBgQAAgyIAIgMQAaAAAQAEQAIARgDAkQgEApAFAQIAFABIADAHQAJAFAGgEIAKgNQANAAABAvQACAqgFAWQgIAKgNgBQgPgBgIACIgNgCg");
	this.shape_6.setTransform(317.9658,63.6207,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#444446","#444446","#373535"],[0,0.431,1],0.1,-1.1,0,0.1,-1.1,8).s().p("AgcAXQgBgDAAgVQADgDACgBIATgCQAEgGABgFIAAgOQACgCANgCQAQAUgBAOQgBAJgQAbQgHADgOAAQgQgGgEgIg");
	this.shape_7.setTransform(334.2756,54.4808,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#444446","#444446","#444446","#444446","#444446"],[0,0.271,0.522,0.749,1],-38.4,-45.3,36.3,43.7).s().p("AqkA3IiUACQgKgFgBgaQgBgZAIgGIAVgDQAGgBAOgGQAYAAAfgDIBsgKQCcAOB6gXIA9gBQAigBAdgFQADACAlABQAvACAUACIIcgLQA8gGBdACICaADQAugHALAAQAiABANAUQgBATgCAGQgDAKgKALQgMACg7ADQhUADg2AEQo1AZo7AJIiXgCg");
	this.shape_8.setTransform(379.1054,160.7992,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#EE3338","#F79634"],[0,0.349,1],-0.2,0.1,0,-0.2,0.1,10.9).s().p("AgYBXIgJgDIgFgEQgEiMgBgOQALgMA/AAIAFAJIAICZQgGAJgZACIglAAg");
	this.shape_9.setTransform(317.4908,150.8193,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#444446","#3F4096"],[0,0.349,1],-1,1.2,0,-1,1.2,8.7).s().p("Ag+AnQgDgDACgXQAFgNABgQIABgfIA5ABQAkABAXAIQAEAIABAdQABAagCASIg4AAIgtAEQgXgGgCgDg");
	this.shape_10.setTransform(434.0395,148.3794,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#444446","#3F4096"],[0,0.349,1],-1.1,0.6,0,-1.1,0.6,11.5).s().p("AhRA3QgGgSgBgUQgBgWAIgNIgCgfQAHgJBFgBIBSABIANACIABAKQgBAEgDAGQAAATgDAeQgCAfgCAIQgHACgQABIhvAFQgSgDgHgCg");
	this.shape_11.setTransform(339.9058,150.4127,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3F4096","#444446","#44444B","#444446","#3F4096"],[0,0.271,0.439,0.71,1],-40.5,32.9,36.4,-29.4).s().p("AoDCPIAMjoIAHgGIBNgBQAsgBAiACQABAWgDBjQgFBigCAHQgNANg8gDQhHgBgSAEQAAAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAgAlGB/IAKi5QACgcABgMQAVgCCYAEQAGAGAAAfQAAAXgDAVQgCADgEByIgEARQgBADgCADQghAFgzACIhTAEQgHgFgCgEgAhfBuQAJi6ADgYQBwgOBvgCQgCBHgECNIgEAJIjdALIgEgGgACbBmIADhjQABhLADgpIACgHQBlgHCMgQQABAKgCAmIgFBYQgFAKACAmQABAmgHAQIgSAFIhwgCQgQAAgFACIgwADIggAAIgEgBgAHOBYIgGAAIAAg0IAEiSQABgWADgJQAYABAKABQAFAmgCAdQAPA+AABbQgHAGgTACIgcgBg");
	this.shape_12.setTransform(65.0947,76.3005,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#3F4096","#444446","#44444B","#444446","#3F4096"],[0,0.271,0.439,0.71,1],-32.6,29.3,34.8,-25.2).s().p("Am0CDQgGgWgDgdIgEgyQA+gICEgiQALAAAFABIABAPIgEAmQgBADAAA9QgDAEgFANQgFABgaACIgcAEIhnAEQgQgDgHAAgAirBiIgCgOQAEhnADgNIAOgEIAXgDIADBUQABAQgDAfQgKAGgKACIgUACQgDgCAAgCgAg9BUQgHgdgDgmIgEhDQAGgDAhgIIBNgQQAwgLAegBIgDCYQgJAOgRACIgigCQgdAIg/AAIgZgBgADRAtIAAgTQAMgaAAgbQAAgQgGglIgEgJIAAgLQAjgGBLgPQBDgMAtAAIAKAHIAHALIgBAqQgCAiAAAwQgBACgCAMIgEAOQgMADgPABIhfAIQgwALg6AFQgDgIAAgMg");
	this.shape_13.setTransform(165.1931,69.9606,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3F4096","#444446","#44444B","#444446","#3F4096"],[0,0.271,0.439,0.71,1],-25.2,23.1,25.3,-17.8).s().p("AkuAwIAEhUQATgOAdgFQARgCAjgDQBhgYAxAGQACAIADBSQAEBPABADQgDAOAAAFQgvAKghAEQgfAAg8AEQg7AEgeAAQgBghAEg2gAAKhfIBIgIQAvgSAlgEQALBDAFAqQAFA8gDAyQgMAHggACQgiACgLAEIhWAEQgCgVADi7gADUANQAAg7AChTIAogFQAYgBAOAKQAEAnAFARIABBHQABAOADAcIgCAcIgDAQQgHAGgfABIgoABQgHgvgEgkg");
	this.shape_14.setTransform(235.0032,60.9769,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3F4096","#444446","#44444B","#444446","#3F4096"],[0,0.271,0.439,0.71,1],-60.7,54.4,65,-47.4).s().p("AJcFpIgGjzQgEiagBhWQAvgRBDAEQACARAAAYIAAArQAHAlAHBQQAIBOAIAoQAHCHAAAoIglADIhjADgAH4EZIhCABQgHgEgCgEIgEgMQgFjiAAhuQAEgQAdgIIAvgMQAOAAAbgCIAFgGIANgDIAAAEIAFADIAJAWIgCA8QAAArACAFQAECYAHBnQgFAUgEAHQgFAAgEACQgUgQgqgDgACTCtQgJgNgDgLIgHgYQgGiCgChCIgIgNIgNAAIgJAMQALBBAAA0QAGAVACAZIAAAvQgJAIgYgDIgggFQijAFhCgBIgFgRIgBhNIgFh3QgDg3gEhSIgFiJQAFgEADgCIAMgFIAmgCQAmgEAngCQA1AIAygEQAVAHAQAaIAbA1QASAhAAAXQABAEACAXQAKAPAIAlQAHAkgDATIAICOQAKApgCBKgAl7CYQgSgsgKgFQgLgHgzAFQgEACgKAAIhEAEQgFgEgCgIIgIhrQgFhBAAgsIgEgHQgVgEgGgCQgIgDAAgQIAaAEIAfABIAjALQASAHAEABQADAHAAAcQABAWAOAPIAwATQAagQAMgLQAOgoABgQQAEgYgdgXQgagHgRAFQgJADgcATQgMgDgQgGIgbgLIgrgMQgWgHgRgJQABgEgCgCIgLgHQgngDgWgGQgogJgKgQIgCgOQAIAAAHABIAOAEIAAAFIAdADQALABARgHQAIgQAkgNIA2gUQB9gRASgDQAcgCA7gJQA6gIAegCQARAKgHAvQAIBPAIB/IAMDPIgEAIQgDACgFACIh8ADIgRAHQgJAEgJAAgArhBZIgIjYQADgeAOgFQAJgEAkgJIAeAAQATAYgfAMQgnAKgHAGQgMAhADAxQABALAJBIQANA5AAAHQgDAFgLABIgRABQgDgDgGgVg");
	this.shape_15.setTransform(369.21,63.1807,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#3F4096","#444446","#44444B","#444446","#3F4096"],[0,0.271,0.439,0.71,1],-9,7.8,7.9,-5.9).s().p("AgHBpIgUgzQgGhGAAgTQgChEASgRQARgBAHADQAJAFAFAPIAEBCIAAAzIAHAwQADAcAAAVQgEAFgFAAIgLABg");
	this.shape_16.setTransform(440.9242,69.6117,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEAEIgBgGIALACIgCAEg");
	this.shape_17.setTransform(310.3509,47.8209,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9E99CA").s().p("A+TSwQgsgCgLhEQgIgvAJg1QAAhKAHgoQANhIA4AUQAgAMgQAiQgIATgTAfQgPBCAVB2QAHAhAAAEQAAATgXAAIgBAAgADdSgQgbAAAcgZQAbgaACAXQACASgHAGQgGAEgNABIgGgBgAChSZQgGgPARAIQASAJgZAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAt8SDIgSoJQgEgZABgJQABgPAbgDQCQgQA4gCQB3gEgNAeQgBADAQEZQAQEXgCADQgFAIgcABIhYgCQhEAJg0AEIgkABQhAAAgBgWgAjXSRIhegDIjUgFQgNAAgTkoQgTknAegCIGSgdQAFgBAEENQAEDdAABVQAAADAJAaQAFARgKADQgcAHg4AAIgIAAgAy8SKQkgAAAAgNIgLoUII1ghIAVI+QAAAEjpAAIg2AAgA7uR/QgIgzgGi2QgFiXgUgvIgHgXQgGgUgHgLIgYgtICuAEICOgFIAPIWQgrAChbABIgPAAQhiAAgBgGgAELR8QgBgJACgDQADgCAIACQAGABgJAIQgFAFgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBgAHRRjQgGgHgHg/QgGg/gBgHQgOidgShPQghiKhYg5QgNgJgagIQgXgGgWgDQhegKCEgIQBCgFBcgCIBggKQBUgJAAAIIAHIDIgDBAQACAqAXAEQAEABAJgFQAJgFAEAAQBHAACVADIBLgEQA+AAgPAVQgDAFgtADQhTAEjpgEIhSAHIgMABQgoAAgSgTgAClR0QgKAAgPgOQgQgPAMgFQAOgGARAVQAPATgOAAIgDAAgEglCARmQgXgBhpgpQhmgoAAgEIgTl4QAAgIEKgMIE0gNQAHAAgLAHIgTALQhSA0gHChQgEBYAMCeQAAASgNAAIh5ABQg0AAgjgBgADSRjQgLgDgLgKQgNgMAHgKQACgCAGAAQAGABACgCIAJgKQAIgJADAGQAEAHgCAWQgDAWgGAAIgBAAgADyRRQgFgfAJgSQAIgPALABQAKABgBAQQgDATgVAbQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgBAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAgAEiRLQgCgGAEgOQADgNgBAVQAAAOgCAAIgCgCgAKsQ7QgRgJgBhQQgCjfgKpSQgJoDAAktQAAgXAEgPQAFgUAIAaQAFAWAAAkIABA8QANDmABGVQABHEAGC3QABAcgDCSIgDCIQAKAIAcAAIAygEQA5gCgUAtQgEAJgGABIgSgBIg/ADIgLAAQgQAAgHgDgAOaQ6Ig0gDQgKAAAAgPQgBgOAHgGQAOgNAlAAQAfAAAWAHQAIACABATQACATgIABQgQAEgWAAIgNgBgAEkQwIgDg9QgCgkANgTQAMgSgEA9QgEA6gFANQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAgABzQVQgIAAAEgOQAEgOAEAGQAEAIAAAHQABAHgHAAIgCAAgADmQDQgTgbATgWQASgWAaAoQAEAJgVAPQgOAKgHAAQgEAAgCgDgACNPKQgLg3AXgJQAvgRABBDQAAAZgIAVQgIAWgMAAQgVAAgLg2gA9wP+QgRgLALgqQALgsAJATQAHAOgEAjQgDAegKAAIgEgBgEgpWAPxQgKgMgDgQQgCgIgBgYQgDiogBjlQAAlPAJgCIAJgBQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABQAKBzgFC7QgHD0ABA7IAKBoQAFBVgJAAQgCAAgDgDgAhlO3IgBmOID4gfQAVgDgOASQgJAKgpAlQhnBbgYAxQgDAFgmB2QghBogDAAIAAAAgAEEOuQgTgIAAguQABgvAQAQQAMANADAnQACAigLAAIgEgBgADZOLQgGgLgMgDQgMgEgFgIQgIgOAQgKQAYgQADgGQAJgRgCAyQgBAqgEAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAgBgACtNGQgLgGAUgSQATgTAEAOQAEAMgMALQgIAIgIAAQgEAAgEgCgADmM3QgHgJgBgPQgBgQAJgGQARgLAJALQAIAKgBASQgBASgIAHQgEADgDAAQgIAAgJgKgACkMNQgJAAAWgMQAUgJAHAIQAGAIgSAEIgSABIgKAAgAPmFwQgMgDgDgLIAAgYIgKnkQgJm7ACAAQASgHAREaQAUFLADAUIAKAxQAIAQAlAHQANADErgLQEWAAhEA6QgCACggAMQgYAJAIAIQAHAGAPgHIAYgKQAQgEAaAAQANgBgQgOQhJg+EvgBQChgBEIAJQAMgBAbAtQAZAsASgDQAmgIgvggIghgXQgNgMALgDQAtgRBdAIQBeAIAxAaQAdAQARBQQAQBKgIApQgFAThJgEIhYgJQhCgFhcAOQgaAFAEgIQACgEAQgPQAbgghXAEQi9AKhkABQigACh/gNQgpgEgLAWQgFALACANQh8ARhVgOIhtgtQhWgjgIAVQgEAMgBATIgBAhQAAANhsADIgzAAQg3AAgPgDgEgpeADBQgMgDAKkKQAIjVAIhyQABgeAMgfQANgjAUgPQA8gtgaAnQgOAVgfApQgEAHAAAMIgCAUQgDAmgGEtQgKERgXAAIgBAAgEgoYACoQAIgGBagLIJkhPQFygwDzgWQEcgZGYgyIKyhWQBsgNAlgDIBXgFIBTgEQA4gJABglQAEiLgDjiQgEkcAAhQQABggAggMQAegMADANQAKA5ACBYIADCTQAHB4ADCeIADEYQAAAJgHAEQgGAFgKAAQj0AVoHA3Qn1A1kIAVQl7AgjHAUQlHAfj5AiQjxAgilAGIgeAAQggAAAFgDgEgmpgIaQgDgDADgEQAZgMgEAMQgDAJgJAAIgJgCgEgmCgIlIADgFQAagJAxgHQA5gJAVgFQD/g9HchSQA+gKBxgYQB7gaA2gJIHBhPQEFgvC8gmQBPgRCMgVQCdgYBAgMIEIgyQCXgbB0gSICdgeQBigTA6gGQEngcFeAYQD9ASGFA3QApAGBPAaQAFACkggJQlRgLhSgBQkkgGhvAAIjlgBQgzAAgPAPQgWAXgIABQgFABgCgNQgEgpgWgGQgVgHgIAAQgOgBglAGQhAAKhqAXIioAjImRBGQj9AriUAbQrJCFlmBBQpyBym/BBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBgAPGpuQgIgPAGgZQAGgaALARQAOAUgKAUQgHANgGAAQgDAAgDgEgAKIqwQgRgSAWgQQATgOAmgGQAmgGAZAFQAcAHgJATQgFANg3gBQg9AAgJAGQgEACgEAHQgBABAAABQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBgAPKrDQgOgEAEicQADhpAGhLQAAgDAGAAQAHAAABADQAEBQAAAQQABAcgFBAQgCAMAFBLQACBBgQAAIgCAAgAM1rHQgOgRAQgPQAOgNAdgHQAdgGAVAFQAXAGgEARQAAADgjAFQgsAHgVAGQgDABgFAGQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCgBgAJGtrQgFh/AJgKQAKgIAQgCIAegCQAbgECKgpQB+gaALA6QAEASgEAeQgEAoAAAIIACBzQAAAfgLACIioAaQhiAOhGAEQgJAAgEh+g");
	this.shape_18.setTransform(228.4691,99.0733,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEgJIAJADQgCAFAAAKIgEACIgDgUg");
	this.shape_19.setTransform(436.069,60.8207,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiAaIgsgBQgbgCgQgFQgSgfAUgNIBgAAQANALAFALIgHAVIgDAJg");
	this.shape_20.setTransform(408.5238,90.0203,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAIQAAgLAFgFQAFgHAKAHQAEAUgOAAg");
	this.shape_21.setTransform(415.0766,91.3951,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D2D4D5").s().p("AaWNdQgggBAAgLQgSm7ADq0QgDgVgDoJQAAgdArgDQAqgEABAWQACBRAADBQAACwAEBjQAEBaADEIQADDeAJCEQAEA3gDB9QgCB2AGA+QAGAxgBAHQgCAegagBIghACIgHgBgAXkNYQgIAAAAgHQgKimgEjdIgEmCQgSqVABh9QAChbANgXQANgVAlAOQARAGADDMQACBpgBCHQARKpgHH3QAAAngIAJQgFAHgRAAQgKAAgNgCgAR1DeIpygkIpvglInngXQjogLlegYIkggQQiugJhvgPQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAHgECdgQICrgSQANgBAWgBIAjgCQKshMJFg2QAlgDBGgKQA/gGAuALQBMAUBmAjICwA/QAjANBZAbQBOAZAtAQQADACAIgDQAHgDAHADQBCAhCAAnQCJAqA5AZQAfAOAAAEQAAAEgSAAIgTgBg");
	this.shape_22.setTransform(166.2947,110.9843,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A1DC").s().p("AI3D+IgJgDIgIgFQgmgNhTgZQhSgYgogNQghgMg5gTIhZgdIgygRIhBgYQgsgQg9gSQhdgdiegyIj5hRQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAvgOBJgIQApgEBRgFQCJgLD1gZQEMgaBxgKQBogKAngHIANgDQAHgBAJAAQAEAAABAEQADCeAABQIAADnIABATQgBALgHAGQgCACgEAAQgFAAgIgCg");
	this.shape_23.setTransform(227.8922,110.08,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EE3338").s().p("EgpOAC6QgGgEAAgMQgFhEgChyQgDicAKgMQAIgJAlADQAUACAjAGQIiAnMkAvIVFBOQAnACB2ACQBDACA7AJQAIACgMAGQgLAFgJAAQvXA/3gBQIkQASQifAJhwAEQgSAAgEgCgAPmCLQgsgEgGg+QgCgZAGgUQAHgUANgCQCNgYB6AHQCpAKBIBIIARAPQALAIALgGQAogVgOgmQgVghABAAQAagEArABQA1ACARgBQANAAAVgGQANgDANAFQASAGAcAUQAmAcAHAFQBIAoBuACQB5ADA1g2QAOgLAYgRQAigVAKgBQBKgFByACIC9ACQAbgBgBA8QAAA9gRABQjrAOmlgCQnMgCjEAIQhtAIg2ADQgwADgoAAQgoAAgigDg");
	this.shape_24.setTransform(230.4648,130.9619,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFF215").s().p("AghAaQgKgGgCgQQgBgNAGgJQAOgFAYgBIAmgBQALAQgBALQAAAPgPAJg");
	this.shape_25.setTransform(422.3181,149.8193,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF215").s().p("AgaAYQgLgGgBgLIADgWQAdgFAQAAQAWgIAFANQAEALgIAVQgLAHgSAAIgeAAg");
	this.shape_26.setTransform(354.2636,150.6449,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah0AgQgDgPABgQQABgSAIgIQBfgEA0AAIAjgFQAWgBAPAEQAKAUgBAKQgBAOgSAJIh3AHQgfACgiAAQgQAEgJAAIgHgDg");
	this.shape_27.setTransform(200.3847,152.7443,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AiSAiQAHgVAAgFIgCgcQgBgTAFgGQAKgCAQACIAbACQAcgDAcgBICngHQAHALgBARIgEAdIAFAZQACAIAAAFQgEAEgKAEIkTAGQgKgCAFgTg");
	this.shape_28.setTransform(200.0948,152.4993,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AA7CvQgMgFgOAAIgHgKIg8gaQglgOgZgGQAAgmgGg+QAAgagCgkIgFhzQAEgEANgHIBfAAQAdgHA3gDQAFBOAGBdIAFBQQAHAiAABLQgHAFgFACQgDABgJABIgbgKg");
	this.shape_29.setTransform(29.7752,168.2191,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAJIgXgEIgCgJQAQgEAZAAIAqADQgCALgCADg");
	this.shape_30.setTransform(210.1925,186.5368,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AhDAoQAAgagBgOQgMgSAFgKQAFgMAXAAIAFAKQBjACAKACQAIAKABAQQABAJAAAVIgEAFQgXACgtABQgqABgXACg");
	this.shape_31.setTransform(209.8185,186.1788,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgPD4QgigEglg3QgegtgMgqQgUhHALhgQAMhtAugsQAighA0ADQAyADAcAgQAiAoAPBSQAOBPgLBPQgMBWgkAwQgkAwg1AAIgPgBg");
	this.shape_32.setTransform(244.6294,178.2139,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgmDYQgagIgRg9QgPg4gBhNQgChNAOg7QAPhBAcgPQB3hBASC/QAHBEgJBRQgIBKgOAeQgLAaglALQgTAFgQAAQgNAAgNgDg");
	this.shape_33.setTransform(72.5073,181.9996,0.8,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BEC0C2").s().p("APRFIQg+gcgbhiQgniRAIiDQALiyBmg2QCYhSBECDQAyBfgGClQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAAAAAAAQABABAAAAQAFBngsBYQgoBQg/AmQgnAYgkAAQgXAAgWgLgAxfEmQg4gLgghBQglhMAHiDQABgrAJhFQAMhYAOgaQA8hoA+AKQA2AIAiBbQAeBQAFCCQAGBtgNA/QgMA9gvAkQgkAcgmAAQgMAAgLgDg");
	this.shape_34.setTransform(161.4093,180.3426,0.8,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AktBJQAAgKgCgEQAbgmAJgOQASgfADgaQAFgFAFgHIAHgKIAagEIGmACQALAKAMAZIAVAoQAMAJAGAIQAFAHAHARIAEAAIAEAJQADAEAAAHIgHAEQlxgBg/ABIgtAIQgUACgoAAQgmAAgQABg");
	this.shape_35.setTransform(129.2737,199.9986,0.8,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ACuBTQg/gCixgHQiXgHhagBIABgOQAkgbAJgFQADgPAKgMIAUgZQADgRAHgJQAHgJAQgKQBqgCCYAEICegHQAQAzAEALQAPAjAWASQABACAMAKIAOANQAEAOgBALg");
	this.shape_36.setTransform(208.8275,200.7586,0.8,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AFTA9QgOgBiogCIi2gBQgiAAgLgBIlbgFIgfgFQAEgOAZgVQAagVAGgQIAgABQAZAAASgBQASABAlAAID0gGICEAGIA/ABIBIgJQAngFAfgKQAkgZAYAZQAIAaAZAnIAUATQALAMABANg");
	this.shape_37.setTransform(308.191,204.2785,0.8,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AX0VaIhqgCQgTgBgigFQgigEgTgBQjKgKlmgGQmOgGijgGQgagBhcACQhJACgsgFQhMgHi0AAQilAAhZgMQgZgDgrACIhDAEQg/gBi2gJQiagIhbABQhUAAh+gCIjTgFInWgMQkUgGjCABQhEABjfAFQhNACAIgKIAGgJQAFgHADgBQA8gIB/AEQB9ADA/gJQAOgCDPgFQDJgHAEgLQADgJgVggQgYglgDgJQgMgngFgdQgEgTgEgJQgCgGiHABIieAAQgngFhKglQhbgugYgJQgzgTgLggQgGgPAAhIQAEl2AAiXQAAkhACheQAEjaAPimQACgLgCgYQgCgXACgNQAKg6AzgrQAugnA+gNQBpgXDKgdQDlgiGEhNQHHhaCggbQCogdE/g9QFMg+CdgcIGAhBQDugoCTgbIDPgnQBvgRBiAAQH6AIGIA4IBmAKQBbAKBBAQQDKAxghBnQgGAUALAtIAPBCIAUC3QAUCeAOAAQA+ABATADQAWAEADAKQACAFgCAdQgDAgAFAfQACAIAHADQAJAEAFAGQAIALgJAKQgOARgCAGQgEAOALAdQALAdgGAOQgPAsgpgWIgbgRQgLgHAAAFQgGA2A3EWQA9EvAEA5QACAiACBBQACBFACAfQACASAGAgQAGAdADArQAFA/gaBxQgfCHgwASQgZAKglABQgrABgWABQhGAGj3gFQjGgEh6AbQgbAGgGAYIgLAyQgSAsgaAoQghAxgeAQQgGAEgJACQgFADADALQABACBkADIB3ADQCiABEmAHQE+AHCKACQArAAAEABQAHADAeAWIkGAKQkZALhEAHQheAJj2AJQjZAHh5ASIgKAAIhPgCg");
	this.shape_38.setTransform(232.1453,109.7708,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,464.3,219.6);


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AAxDaQgWgEgZgPQgQgKgZgTQgWgRgagYIgBgCQgfg1AThIQAOgzArhEQAWgjATgWQAYgcAQgJQASgKALAGQAIAEAIASQAOAgAGBIQAGBBgBBOQgCBNgHAsQgIArghAAIgJAAgAAgjJQgWAQgWAgQgvA+gZA9QgmBdAnA/QAUATAWARQAbAWAPAJQAbAQAWAEQAaADAKgSQAGgKACgPIADgaQAHg8gBhKQgBhTgIg5QgFgggGgUIgGgRQgFgKgGgEQgEgDgFAAQgKAAgPAMg");
	this.shape.setTransform(206.9725,133.4973,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292929").s().p("ADIGcQgygLg6gWQiBgwhnhCQg6glgigeQgpgkgOgdQgHgNgGgiQgIgrgFgsQgMhbgEhgQgBgmAAgnIAAghQABgTADgNQAHgkAZgWQAYgVAlgHQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAQgrAHgXAaQgYAagCAwQgDA0AFBZQAFBmAMBYQAKBAAFAWQAEAPALARQAWAfAtAkQAuAkA5AhQB2BFB3AmQA6ATArAGQAXADALgBQAUAAAMgHQAOgIAGgYQADgNADgbQAEg0gIhQQgPiHgmidIgRhCQgLgkgOgaQghhAg8gkQgdgRgogQIhHgaQhFgXgqgIQg+gNgzAIQABAAAAAAQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQBDgKBXAYQA4APBKAcQA1AUAhAVQAsAbAaAkQAhAtAWBTQAQA6ANBDQATBZAIA4QALBRABBDQAAAggBASQgDAdgJAUQgLAZgcAEIgRABQgZAAglgIg");
	this.shape_1.setTransform(247.8089,145.2413,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292929").s().p("AgBgBIADAAIgCADIgBgDg");
	this.shape_2.setTransform(375.062,146.3446,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#88D1D0","#FCF8C6"],[0,1],1.2,11.7,-1.9,-9.4).s().p("AA/ByQg0gugagRQgxgeggAmQAYg8Atg9QAxhFAeADQAYACAMBUQALBHgCBlQgQgDgSgNg");
	this.shape_3.setTransform(207.6717,126.5804,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#88D1D0","#FCF8C6"],[0,1],2,25.2,-5.1,-23.6).s().p("ABcDpQgogTgxgqQgMgMhGhDQhqhjhLgPQgfgFgZATQgGhoAEg0QAFhaBZgPQAygJBAANQArAIBDAXQB6AqAvAkQBCAzAcBnQAiB1AXCYQgdAFgeAAQhSAAhXgog");
	this.shape_4.setTransform(247.1695,133.6641,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#88D1D0","#FCF8C6"],[0,1],3.3,24.4,-4.6,-29.5).s().p("AnvFEQgahfgMg8QgThXgEhIQgMihDDhlQB5g+DWgpIB6gXQBbgMAgATQCQBXDPEzQglAXg3gEQgjgCg/gQQgegIhKgZQhLgagogKQiMgjhPA1QhGAthTB0QhhCHgqAnQg2Azg/AZg");
	this.shape_5.setTransform(316.3972,122.8501,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#48C2CB","#6BC9CF"],[0,1],0.1,2.3,0,0.1,2.3,19.4).s().p("AgDBIQg2gYgvAwIAIgnQANg0A1hMQA4hVAiAEQAaADAMBoQAKBbgFBsQg0g6g2gYg");
	this.shape_6.setTransform(207.0512,128.4998,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#48C2CB","#6BC9CF"],[0,1],-4,6.8,0,-4,6.8,25.4).s().p("ABMDqQgjgag6g5QhCg/gegYQhIg8g/ADQgnABgdAYQgNiOAGhaQAFhaBZgPQAygJBAANQArAIBEAXQB5AqAvAkQBCAzAcBnQASA/ATBZQAWBsAJBXIgeABQh3AAhlhMg");
	this.shape_7.setTransform(247.5785,136.6169,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#48C2CB","#6BC9CF"],[0,1],-4.1,-7,0,-4.1,-7,46.4).s().p("AoLEbQgahfgMg8QgThXgEhHQgMiiDDhlQB5g+DWgpIB6gXQBbgMAgATQBoA/CJCxQBEBZBiCXQhUAciFg2QiYhIhSgYQiAglhNAqQg9AhgvBdQhCCFgoA3QhYB6huAlQgOgngbhmg");
	this.shape_8.setTransform(318.6372,126.11,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7ECFD6").s().p("AgCDBQgbgRgfgaIgZgXQgSgcgCgfQgCgbAMgtQANg0A1hNQA4hVAiADQAiAEAICeQAJCRgRBZQgHAjgdAAQgYAAglgXg");
	this.shape_9.setTransform(206.986,133.502,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7ECFD6").s().p("ADEGZQhWgUhugzQhyg1hPg7QhZhBgKgxQgVhfgJiGQgJh4AFhHQAFhaBZgPQAygJBAANQArAIBEAXQB5AqAvAkQBCAzAcBnQAmCHAWCbQAeDOgkAzQgLARgkAAQgaAAgogJg");
	this.shape_10.setTransform(247.8171,145.2372,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7ECFD6").s().p("AnPHYQgqg4gjhlQgRgygbhmQgahfgMg8QgThWgEhHQgMijDDhkQB5g/DWgoIB7gXQBagNAgAUQBtBBCPC+QA7BNBpCiQA2BTA7BYQkOgDlIC0QhmA4hgBEIhLA4QhBA1g4AAQhBAAg1hIg");
	this.shape_11.setTransform(323.4971,135.6944,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292929").s().p("AC+OEQjbgNjVg5QkKhGjUhrQiohViQhzQiUh1hziQQhJhag1haQgdgzgJgWQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQA5gfBShFQBWhIBOhWQAkgoBHhSQBzh+BuhTQCVhvCrg8QDChEEEgJQD4gJC4AkQClAhBqA+QAuAaAkAiIAWAWQAMAOAFAMIBtE7IABAFIADACID6DYQAHAHAGACIAXAGQAOAEAHAEIAkAYQBjBEAyA6QBABLANBoQANBpgkBiQgjBghSBSQhTBThuA8QhqA5h3AdQiWAni4AUQiCAQh/AAQg7AAg7gEgAAguCQiGABhrAMQiCAPhsAhQi6A4iaBsQh5BWh1B9QgsAwgwA4QhRBfhYBNQgxArghAZQgtAjgpAWIAIARQBbCzCoCsQCHCKCfBnQC7B5D6BZQG8CfGqgVQCjgIC3gjQB6gWBBgUQB+goBqhDQBqhEBDhTQBOhgAThtQAUh1gmhhQgihVhlhRQgqghgggWIgPgKIgPgJIgwgQQgCAAgEgEIgGgFIj4jXQgDgCgCgGIhgkUIgJgeQgGgSgJgKQgegkgogbQhghEiXglQirgqjgAAIgPAAg");
	this.shape_12.setTransform(279.2095,154.5529,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAFAVQgIgDgHgIQgIgIgCgIQgCgIAFgFQAFgDAIACQAIADAHAIQAHAIACAIQACAJgEADQgDADgEAAIgGgBg");
	this.shape_13.setTransform(388.5635,162.0648,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAcQgXgJgOgNQgNgNAEgMQAEgLAUgDQASgCAXAIQAYAJANANQANANgEAMQgDALgUACIgJABQgQAAgRgGg");
	this.shape_14.setTransform(377.6819,153.4327,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA7ALQhrgcidgSICNADQCiALBsAsIhHANQgWgLg2gOg");
	this.shape_15.setTransform(303.663,87.6259,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4F72B6","#47C8F5"],[0,1],5,6.2,34.3,-37.8).s().p("AolCNIA8g1QBQhABeg3QEti0FQgiIAPgCQBcBBAxA9QAqAzARBFQARBAgGBHQhcBMi8AbQhRALhaAAQkVAAlxhrg");
	this.shape_16.setTransform(351.8449,168.4623,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#4F72B6","#47C8F5"],[0,1],-5.8,1,25,-25.5).s().p("AkTCMQh7hLiEgPIAmghQAxgnA1glQCrh0CVgiQFzgMDmBbQjdAeirA8QkaBjgiCYQgkgig+glg");
	this.shape_17.setTransform(281.7434,99.3254,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#384782").s().p("AiSE0IgCgCIiAhcIAfgcICBBmIgGAlgAjKCSQAcgbAYgaQBAhDB/iYQB5iFBzhBQg4AxhBBBQiBCCgnBPQhBB9gaBlg");
	this.shape_18.setTransform(198.1447,125.8853,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D1AC3D").s().p("AAnB1Qh2huhBh8QAsgcBAg4QA6AsBBAuIAEACIADACIAYAQQgRCVAsCRQgugfg8g3g");
	this.shape_19.setTransform(178.905,159.1848,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9BA29C").s().p("AhGgeIArgoIAFAFIADABIBKA8IACACIAOAKQgJAmgEAZg");
	this.shape_20.setTransform(184.1449,143.2451,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#364C95").s().p("AgXAGQhrhIhFg4IAQgOQAPgOABABIAqAjQAhAbAvAkQA9AvA8AoIBJAxIAzAhIAAAhQh6hLhlhGg");
	this.shape_21.setTransform(189.9648,151.2224,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#364C95").s().p("AlkFMQhdhEhDg6QBAg9A4hBIApgvQBMhWBFhAQBZhUBgg9QBvhIB9gtQCQg0CigSQhaAyhMA0QiHBchmBnQhgBhhBBoQg+BigiBpQgiBggJBmQhVg3hVg/g");
	this.shape_22.setTransform(221.3243,119.4454,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A87D3C").s().p("AExFHQilhPiQhtQiThwh0iHQg9hGgxhJQg1hPgeg/IAkAxQArA5A4A+QBIBQBYBOQBsBfBxBPQCLBfCSBHQA7BBA9A4QhUghhIgig");
	this.shape_23.setTransform(199.7446,181.6845,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DAC040").s().p("AC1EIQh8hQhwhfQhchNhThWQhBhEgxg/QgegmgYgiIgEgIQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAsgcQAwghAtglQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIACACIAFADIBQA8QB6BYCJBWIA0AhQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIAAAFIACASQAEApAKAjQATBGAqBNQBDB8B3CCQhyg3hshFg");
	this.shape_24.setTransform(194.8214,172.4813,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B6B8B6").s().p("AglADQgughgwgmIgygqQgEgEgBABIAoglQAEgEABABIAdAYQAiAdArAhQA6AtA/ArQAlAaAmAZIAaARIgEBBQhyhIhqhPg");
	this.shape_25.setTransform(191.3848,148.317,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4562AB").s().p("ALEL7Ql5gVnah6Qljhbmrj6QkSihi7iTIAggcQCpCRDtCRQGhD/GwBxQHxCCGQAFQF7AFCRhpQgRAdgZAdQiaBJkaAAQhBAAhHgEgAgPI7Qmrhgm3kLQj4iWi1ibQA5g3A+hHQDFjkChhqQEMiyFngZQF1gZD3BIQDJA7BUBtIByFKIEFDhIAxAQIBHAwQBPA7ArA1QBABPAGB1QAGBsgsBiQinBhlDABIgMAAQlkAAn5hzg");
	this.shape_26.setTransform(284.8721,143.8001,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E6A737").s().p("AFdHdQmTgPmui0Ql4iekEkiQiQighIiXQA2BQBYBfQCXCmC8CHQI9GaLdALIBJALQBQAFAmgeIBDgDQBWgEBXgMQETglC0heQgkAbgzAcQiCBIiLAdQk1BCj9AAIhGgBg");
	this.shape_27.setTransform(269.8436,188.416,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8EE53").s().p("AEJIiQmTgPmvi0QmQiokLk7QhUhjg9hnIgrhSQARgJAfgVQA9grBAg5QCpCTDtCRQGhD+GvBwQHyCCGQAGQF7AFCRhpQhSCFiyBjQiBBIiMAdQk1BCj9AAIhFgBg");
	this.shape_28.setTransform(276.6235,182.896,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AD8I2QmTgPmvi0QmQiokLk7QhUhjg9hnIgrhSIAAAAIAAAAIABgBIABAAIAAAAIAGgEIABAAIADgCIAAAAQBig9BrhmQC1CcD4CXQG3EJGqBhQIDB1FngCQFDgCCnhhIAAABIgJATQgpBPhOBHQhEA9haAyQiBBIiMAdQk1BCj9AAIhFgBg");
	this.shape_29.setTransform(277.6634,181.2961,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#292929").s().p("AAWC4QgygHg8gfIgBgCQgOghgHgxQgNhcAbhLQAIgWALgUQAQgcAIgJQABgBAHACQAWAGAXASQAlAgAbA6QATAlANAqQAQA1ACAeQAGA5gdAWQgTANgcAAQgKAAgMgBgAg1ixIgFAJQgcAogNAwQgOA2AEA6QADA6AVAzQAfARAlAMQAyAPAdgGQAWgFAMgPQAMgPACgXQACgcgKgoQgOg3gQgnQgehHgnglQgZgXgXgGIgEgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABg");
	this.shape_30.setTransform(228.6615,85.8175,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#292929").s().p("AhTCbIgEgMIAGgDQBYgxBjglIADALQhkAnhXAxIgFACgAhhBtIAKgFQBbgyBcgiIAEALQhhAlhYAyIgJAEgAhnBNIAJgFQBYgwBcgiIAEAKQhfAlhYAxIgIAFgAhrAoIAFgDQBXgtBYgiIAEAKQhaAihXAxIgGADgAhsAFQBWgtBRgfIAFAKQheAmhMAqIgCAAgAhogjQBDgkBNgfIAGAKQhKAehOAqgAhehPQAxgaA9gaIAIAJQhGAfg1AcgAhMh8IBCgeIAKAIQgwAVglATg");
	this.shape_31.setTransform(228.3642,84.886,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#393E44").s().p("AAdC2QghgDgtgSIgmgSQgTgtgFhAQgKh+BGhaIAQAFQAVAJATATQBBA9AjCMQAgCDhdAAIgPgBg");
	this.shape_32.setTransform(228.6634,85.7951,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#292929").s().p("AieEzQgfgGgcgTQgcgVgOgcQgTgoAJg3QAGgoAXg3QA0h7BkhXQB5htCrgeQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIAdAwQAGAKABALIAdDKIACAIQABAHgBACIgnByQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAnhyQAAABAAgBIgBgEIgfjeIgig7IAAAAIAAAAQABACgUADQhdAUhJApQiCBIhQCCQgjA3gSA0QgYBDADArQADAtAfAiQAgAhAtAIQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_33.setTransform(208.0308,95.5558,0.8,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgeAZQgCgDAHgKQAHgKANgJQALgKALgFQALgGADAEQACADgHAJQgHAKgNAJQgMALgKAFQgHADgEAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_34.setTransform(204.9846,81.386,0.8,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#4F72B6","#47C8F5"],[0,1],-2.7,-1.8,-6.9,-6.7).s().p("AjeDEQgYgIAZhLQA6hvBfhMQB0hfCbgaIAgA3QgiANggAKQiXAxh/CNQgPAQg8BJQgcAigJAAIgBAAg");
	this.shape_35.setTransform(208.149,86.835,0.8,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#384782").s().p("AjcDnQg9gvAOhWQAFgjAPgoQgFAVAAAVQAAAnAVANQALAGAhgpIBXhoQCaitC9hAIAFAkIgtAyQgpAOg6AeQhyA7hTBMQhaBTAPBhQA/hBBLg7QB7hfBkgjQApgPAhgCIADAWIgnBzImEDQQghgGgegXg");
	this.shape_36.setTransform(208.006,99.1457,0.8,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#364C95").s().p("AjcDnQg9gvAOhWQAFgjAPgoQgFAVAAAVQAAAnAVANQALAGAhgpIBXhoQCaitC9hAIAbDEIgnBzImEDQQghgGgegXg");
	this.shape_37.setTransform(208.006,99.1457,0.8,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4562AB").s().p("AjcEUQg9gvAOhWQAViFBqh5QCHidDRgkIAjA7IAfDjIgnBzImEDQQghgGgegXg");
	this.shape_38.setTransform(208.006,95.5458,0.8,0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#292929").s().p("AgwBwQgkgPgUghQgTghACgmQACgnAZgeQAZgeAmgKQAmgLAkAOQAkAOAVAfQAWAfAAAlIAAAAQAAAsgcAiQgbAigrAIQgMACgMAAQgYAAgYgKgAgWhyQgsAJgcAlQgbAmAFAsQAGAuAkAeQAkAfAtgDQAugEAgghQAggiABgvQgBgQgDgMQgMgsgngaQgdgTghAAQgKAAgNADg");
	this.shape_39.setTransform(256.6963,13.3425,0.8,0.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaA1QgQAAgRgDQgigegBgsQAgANAkAAQAdgBAdgJQAigLARgUIAFAMIABABIAEAOIACARIAAASIAAABIgBAKQg1Agg9AAIgGAAg");
	this.shape_40.setTransform(258.6637,13.3696,0.8,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4562AB").s().p("Ag6BHQARADAQAAQBBACA3giQgCAMgGAPQggAegrAAQgoAAgegcgAhdgDIgBgEQAAgbANgYQAMgWAWgPQANgDALAAQAiAAAeATQAcASAPAfQgSATgiALQgcAIgdABQgkAAgggMg");
	this.shape_41.setTransform(258.5837,11.6471,0.8,0.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B6B8B6").s().p("AgBA1Qg/gBg0gdQgDgMAAgLQAAgZALgXQASASAhAKQAcAJAcAAQAdgBAcgJQAjgLARgUQAMAYAAAcQAAAKgCALQg0Agg+AAIgFAAg");
	this.shape_42.setTransform(256.6838,13.3696,0.8,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#364C95").s().p("AhUBVQgjgjAAgyQAAgxAjgjQAkgjAwAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAQgwAAgkgjg");
	this.shape_43.setTransform(256.6838,13.347,0.8,0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#292929").s().p("AgBADIABgFIACAFgAACAAIADgCIgBACgAgEgCIADACIgCAAg");
	this.shape_44.setTransform(256.7038,17.877,0.8,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#364C95").s().p("AiGDDIgTgHQgMgGgEgGQgFgKAFgRIAJgcIBfk+IBCgQIACAHIADgHIBDAQIAXBOQg7AUg+gJIgqECIBGAbQBYAVBSgXQgHAKgWAKQg0AThZAAQhWAAgzgTg");
	this.shape_45.setTransform(256.4285,34.7067,0.8,0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4562AB").s().p("AiIDDIgTgHQgMgGgEgGQgFgKAFgRIAJgcIBfk+IBDgQIABAHIADgHIBDAQIBhFIQAIAWgCAMQgBAJgHAHQgIAHgQAHQg0AThZAAQhWAAgzgTg");
	this.shape_46.setTransform(256.5785,34.7067,0.8,0.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#292929").s().p("AHXDYQgFgvgWhDQgkhkg+hGQhVhhh9ggQhNgThPAEQhRAEhIAaQh1AshNBkQg3BHgdBaQgPAvgEAeQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAJhEAlhOQAxhkBLhAQBkhUCIgRQCkgVB+A+QBlAyBCBjQAvBHAZBaQANAtADAgQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_47.setTransform(284.3267,70.8824,0.8,0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#384782").s().p("AnZDHQAEgaAMgnQAYhOApg/QCGjQEIAAQEKABB/DWQBABsAKBsg");
	this.shape_48.setTransform(284.3233,70.9062,0.8,0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#292929").s().p("AndIjQhEgHghgFQg5gJgrgMQhVgYhJgoQhVgugxgwIgBgBIAAgBIAAgBQADiYBEidQA1h5BUhoQBVhoBshNQCBhcCdgxQCXgvCjgEQCsgFCXAgQCrAjCDBRQBVA0BDBHQBFBKAsBXQArBXAJBDQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIm4CKQgIACgrAVIsEFmIgKAEQgPADggAAQg4AAhHgJgAgtohQi6ARieBFQiDA6huBbQhuBdhNB3QhEBngmBwQgoB3gEB0QAcAcAuAeQCMBeC2AbQBvAPBBAEQA4ACAXgCQAKgBALgEIAUgJIMMlrIARgIIG9iMQgEgZgKgeQguiYh0h0QhchdiCg8Qh3g3iNgYQh4gVh0AAQg8AAg6AGg");
	this.shape_49.setTransform(244.104,85.9589,0.8,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#364C95").s().p("ABJGnQhUgBiVgWQiKgVh6hGQhGgogtgqQAzjNBnirQBGh0BUhXQgDAZAIARQASAlBTgOQA3gJCBgsQCVgxA8gPQBygcA+APIBYAEQgcAagfA5Qg9BygMCcQgJBtgxB/QgkBcg1BcIiAA7QgLAEgkAAIgJAAg");
	this.shape_50.setTransform(209.7045,96.3878,0.8,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhDADQB7goBxgFQjBA1iQAgg");
	this.shape_51.setTransform(227.3242,46.7665,0.8,0.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#4F72B6","#47C8F5"],[0,1],-0.9,-1.6,-4.3,-21.2).s().p("ApGByQgKgZAegoQATgaAfgYQEWihFvAWQEFAQDABkQhHgPhgALQgWACiQAZQh4AUjKApQjsAwhWAQQhWARgPABIgWABQg3AAgNgdg");
	this.shape_52.setTransform(246.035,53.1568,0.8,0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4562AB").s().p("AlkIpQhVgBiVgWQiVgWiChPQgpgZghgcIgagWQAEieBIihQBMiqCIiEQCWiRDIhJQDfhREJAQQHRAdDcEVQBFBXAkBlQASAzAFAgInACNIs2F+QgLADgkAAIgJAAg");
	this.shape_53.setTransform(244.104,85.957,0.8,0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#292929").s().p("AO3F+IsKkJInMicQkMhcjBg/IiTgxQhPgYgngYQg4giARghQALgXAlAAQAUgBAmAIIC0ApQB8AdA5AMQF6BRFYA1QHuBLGoAUQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQlCgPlpgvQmCgzmThRQjegtj7g7IgwgLQgsgJgWAAQguAAgBAgQAAATAZAUQAWAPAgAOQAjAQBRAYQBCAVCCAsIDlBNIVnHXQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_54.setTransform(86.948,119.5957,0.8,0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B6B8B6").s().p("AiNgRIAkgpICvAvIBIAlIgOAig");
	this.shape_55.setTransform(175.045,136.9452,0.8,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DAC040").s().p("AP9FnIgBAAIgFAAIgDAAIgFgBIgBAAIgGAAIgBgBIgGAAIgBAAIgFgBIgCAAIgEAAIgCAAIgFAAIgBAAIgVgCIgBgBIgQgBIgFAAIgCgBIgBAAIgNgCIgBAAI3In3Iidg1Iidg0IgCAAIgBAAIgCgCIgBAAIgBAAIgDgBIgBAAIgCgBIgfgKIAAAAIgEAAIgBgBIgDgBIgBAAIgDgBIgBAAIgEgBIgBgBIgDgBIgBgBIgEgBIgBAAIgDgBIgBgBIgXgIIgDgBIgHgCIgDgBIgFgCIgBgBIgFgCIgDgBIgBAAIgEgCIgBAAIgDgCIgBgBIgEgBIgBgBIgDgBIgBAAIgEgCIgBgBIgDgBIgBgBIgDgCIgCAAIgDgCIgDgBIgEgDIgBgBIgCgBIgIgFIgBAAIgEgDIgBgCIgDgCIgDgCIgCgBIgGgHIAAgBIgDgCIgCgEIgBgBIgBgBIAAgBIgBgBIAAgDIgBgBIgBgBIAAgBIAAgCQBWAuA2ASIbmJBQAkghAogqICzAwIAUB1g");
	this.shape_56.setTransform(90.0063,121.9854,0.8,0.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#364C95").s().p("AANDpIgUh1IiygxIAdgfIENBNIANghIhIgnIivguQAug6AJgjQAJgng/gqQgsgchHgbQBWAGBYAFIA9AFQBGAHA2AHQBhBIAMAyQALAsglA5QgWAhhiBxQgbAfgZAng");
	this.shape_57.setTransform(176.3048,132.6452,0.8,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#4F72B6","#47C8F5"],[0,1],-0.4,1.7,0.5,-7.6).s().p("ABwApQm1htjYhGQIRBeHNAjQBcBBAAAZQAAARgQAWQgJAMgIAHQixgqjbg4g");
	this.shape_58.setTransform(119.1259,114.5055,0.8,0.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ax4k4QANgPAfAAMAh9AJHIBIAnIgNAhg");
	this.shape_59.setTransform(94.7862,115.4855,0.8,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8EE53").s().p("AOSFkI3In3Iidg1Iieg0QhMgWgxgUQhcgnAIgnQGiCLORECQHJCCF1BlIAVB1g");
	this.shape_60.setTransform(89.9607,121.4254,0.8,0.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4562AB").s().p("AOQF8IiggPI3In4Iidg0Iieg1Ih/grQhegoANgoQAIgaAsAAQAUAAAsAKIDnA1QDpA0DhAqQLHCGJOAbICMAOQCPARASANQAeAWAnBgQAsBqgYAoQg0BSgQAUQgsA7gcAAQgcAAilgOg");
	this.shape_61.setTransform(102.8977,120.785,0.8,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#292929").s().p("ACZFMIAAAAQgmikg5ijQgziOguhQQgcgygcgcQgdgdgcgEIBCJcQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIhCpfQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIARAEQAcAKAcAgQAcAgAaAwQAuBXAwCIQA2CdAlCeQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_62.setTransform(19.0307,69.1902,0.8,0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#292929").s().p("AhvDEQgWgFgQgNQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBIBIlzQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIhIFyIADACQAKAHAIADQAlAOAhgPQAfgPAcgkQARgWAagtQA3hbArhpQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABIgCADQg3CCg5BYQgaApgRATQgeAgggAHQgLADgLAAQgKAAgLgCg");
	this.shape_63.setTransform(18.5122,114.2668,0.8,0.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B6B8B6").s().p("AAEA5QgYhDgeg5IAyAPIAFAOIAAAAIAOAdIAAABIAGANIABABIAFAOIABACIAGAOIAAABIAGAPIABAAIAFAQg");
	this.shape_64.setTransform(18.2874,59.9663,0.8,0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#364C95").s().p("AhZEUIgJhTICiAoQgSiagyiIIAtALQArBwAoCQQAUBIALAxgAg7i2Qgfg+gjgxIgdgmQBEAHBMCcg");
	this.shape_65.setTransform(19.0274,69.1862,0.8,0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A87D3C").s().p("AhqDDQgQgDgOgIIgMgIIABgDQAkAKAqgeQBRg8A3i+IiYgzIAJgvIDhBEIg1ByQg/B6grAvQgmAogqAAIgQgBg");
	this.shape_66.setTransform(18.5074,114.2776,0.8,0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhOAmIgMh1ICCAnQAWAtAdBLg");
	this.shape_67.setTransform(15.0074,58.9864,0.8,0.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4562AB").s().p("AhZEUIhBpfQBkAJByFHQA6CkAlCig");
	this.shape_68.setTransform(19.0274,69.1862,0.8,0.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#DAC040").s().p("AhqDDQgQgDgOgIIgMgIIBIlzIDhBEIg1ByQg/B6grAvQgmAogqAAIgQgBg");
	this.shape_69.setTransform(18.5074,114.2776,0.8,0.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#292929").s().p("AIZIHQhPgLiWgiQiHgehcgaQiygzkGhmQjihYjQheIhrgxIg3gaQgOgIgEgJQgFgLADgNQADgNAJgIQAOgLARAFIAfANQDcBmDWBZQACjCA2iHQAghRBNhaQBYhnA/g1QAdgZAVATQAKAKADAMQAEAOgGALQgFAIgJAIIgRAOQgZAXgRASQgdAegrAyQgoAtgYAkQggAvgQAsQghBdgKCFIgDA8IgBAWIAAAKQABADAGADIBvArQB8AuBhAhQAAgpACghQAFh6AahmQAYhgA4hVQA5hXBMhSQATgVAUgTIANgNQAIgHAHgCQANgCALAHQAKAHAFAMQAFAPgFAMQgEAKgMANQgmAmgmAuQhXBogiBFQgoBRgQCFQgHA5gCA5IgCA0IAAAPQABAIAGACIAaAIQDwBIDMANQCDAIBpgLQA3gGA1gMQAUgFAQgGIARgHIARgHQAcgGAWATQAYAUgHAdQgFAXgWAQQgQALgcAKQhFAYhhAHQgoADgnAAQg+AAg8gIgAu+g0QgRAOAEATQACAMAJAHQAFADAPAGQDeBqDQBVQD6BlC/BAQC7BAEMA5QCRAfBVAEQBgAFBfgPQAzgIAhgLQAogNATgPQAOgLAFgQQAGgRgHgQQgIgQgRgIQgRgIgRAEQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQgHACgLAFIgTAIQhQAah1AGQhuAGh0gLQjLgTjnhJQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBhgANhpQARh+AhhFQAeg+BKheQAcgkAogtIAjgkQAHgIADgFQAFgIgBgJQgCgXgSgHQgKgEgJAEQgHADgKAJQglAkgrAzQhWBngmBGQgtBTgWB5QgSBoAAB+QAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBgBQing4ixhGQAAAAgBgBQAAAAAAAAQAAAAAAgBQgBAAAAgBQACgIAAgMIAAgVIADgzQAEg1AHguQAShyAkhDQAhg8BHhRQArgwAXgXIAhggIASgPQAMgKADgIQAHgSgOgSQgPgSgTALQgKAFgNAMIgVAUQgXAXgSATQhdBigrBAQhpCdgBELQAAABAAABQAAAAAAABQgBAAgBAAQAAAAgBAAQhogrhNgiQhagniAg6Ig4gaQgNgHgKAAQgIAAgHAFgAOMF4IAAAAIAAAAgAOMF4IABAAIgBAAIAAAAg");
	this.shape_70.setTransform(322.8857,212.4774,0.8,0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AJqG2QhAgChRgOQgygIhegVQizgnh0giQhpghhtgnQl+iImKi6QAFgNAMgGQANgGAOAHIAMAFQDuBvDUBXQABi1AziKQAVg8Asg+QAggsA5g/IAiANQhFBLgTAYQgxA9gRAzQgTA0gKAqQgJAugFAzQgIBLAAAlIAAAWQAAAGgBAEIAiANIAAADQCxBHCnA4QgBi3AoiPQARg6Ahg6QAbgvAsg6IAfAOQguA5gWAlQgiA2gNAxQgfB5gGBXIgFBRIAAA1IAhALIAAAFQCTAvCEAYQCTAbCLABQCUACBpgYIAegIIAsgSIABAAIABAAQARgEASAIQgCAIgCAGQgPAohuAYQhWAShhAAIgcAAg");
	this.shape_71.setTransform(321.7228,215.379,0.8,0.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B6B8B6").s().p("AJ7INQhBgChQgOQgzgIhdgVQi0gnhzgiQhYgbh+gtQmAiImWjBQgegNAOgfQANggAeAOIAMAGQDuBuDVBYQABi2AyiKQAWg8Atg/QAggsA6hAQBEhLAtglQAagWAUAcQAVAbgaAVQgsAmg4A+Qg7BCgaAjQgsA8gTA4QgfBXgKB5QgEAngBAoIAAAOIAAAIQAAAFgBAFQCxBHCnA4QgBi3AqiQQARhAAohCQAegyA1hCQBAhQA1gyQAYgWAUAbQAVAcgYAWIgcAdQgnApgqA1QgyA/gaAsQgkA8gPA6QgZBjgIB8IgCBjQCTAuCDAYQCTAbCMACQCTACBqgZIAdgIIAsgRIABgBIABAAQAagGAXATQAaAVgNAkQgPAohuAXQhVAShfAAIgfAAg");
	this.shape_72.setTransform(322.8379,212.4263,0.8,0.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#292929").s().p("AK3I8QhlgEhigZQhNgUiRgyQiDgvhYgkQinhGj8iFQjYhyjCh0Ihlg9QgjgVgQgMQgNgIgDgLQgEgMAFgMQAEgNALgHQAOgJARAGIAdARQDYCGDBBqQAXi/BHiBQAphMBXhRQBjhbBFguQAggWASAWQAJAKACANQACAOgIAKQgFAHgLAIIgRALQgWAQgZAUQgsAlglAiQgtApgcAhQglAqgVArQgsBYgZCEQgGAbgFAfIgCAWIgCAJQABAEAFADIBpA4QBvA5BkAuQAFgoAFggQAVh6AkhhQAkhdBBhNQA/hMBZhNQAYgVATgOIAOgLQAJgGAIgBQAMgBAKAIQAKAIADANQAEAPgHAMQgFAKgNALQgrAigrAoQgvAtgbAfQgoArgaAnQgxBMgfCCQgNA0gKA8IgIA0IgCAOQAAAIAHADIAZALQDlBjDJAlQCDAXBoACQBBAAAsgGQAOgBAXgFIASgGQALgDAHgBQAcgDAUAWQAVAXgKAbQgHAWgYANQgRAKgdAGQg4AMhMAAIglAAgAuajFQgSAMABATQABAMAIAIQAEAEAOAJQDVCEDABpQDlB/C+BZQC2BXEABWQCLAwBVAOQBfAQBggEQAxgCAlgHQAogIAVgNQAQgJAHgPQAIgRgFgQQgGgRgQgKQgQgKgSACIgBAAIgSAFIgUAFQhRARh2gIQh3gIhpgXQjFgqjfhkIgBgCQAJhkAZhiQAeh5AqhDQAmg8BUhUQAvguAegZIAmggQASgOAAgOQAAgKgEgJQgEgJgIgFQgKgFgKADQgGACgLAIQgtAigtArQhgBbgwBCQg3BOgjB1QgeBngPB7QAAABAAABQAAAAAAABQgBAAgBAAQAAAAgBAAQihhMinhaQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQADgIABgMIACgVIAJgyQAKgyANgvQAfhuAsg/QAng4BQhIQA2gvAUgQQATgQARgMIAVgNQAMgIAEgIQAJgSgMgTQgNgTgTAIQgOAGgiAbIguAkQhmBVg0A8Qh7CQggEJIgBACQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBAAAAQhMgqhfg2Qhng8hmg/Ig1ggQgLgHgHgCIgGgBQgHAAgGAEg");
	this.shape_73.setTransform(209.3323,232.2902,0.8,0.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AJCHgQhAgKhOgXQgugNhdggQirg7hygwQhVglh3g7Qlri0lzjmQAHgNAMgEQAOgFANAIIALAHQDhCLDIBuQAWizBCiEQAcg5Azg4QAkgoBBg4IAfARQhOBDgVAVQg2A2gYAxQgYAygPAoQgPAsgKAzQgQBKgFAlIgDAVQAAAEgCAGIAgARIgBADQCsBcCcBKQAVi2A4iJQAXg4Aog2QAggsAzgzIAcAQQg0A1gaAhQgoAygSAwQguB0gPBWIgPBPIgHA1IAhAOIgBAGQElCDEBAhQCWATBogMIAJgBIArgJIATgFIAFgCIABAAIABAAQAQgDASALQgCAGgEAIQgTAmhwAKQglAEgnAAQhCAAhGgKg");
	this.shape_74.setTransform(208.4645,234.3852,0.8,0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B6B8B6").s().p("AJRIxQhAgKhPgXQgugNhdggQisg7hwgxQhTgjh6g8Ql1i5l1jpQgcgSARgeQARgdAcARIALAHQDhCLDIBuQAWizBCiEQAdg5A0g6QAkgoBCg5QBLhBAyghQAcgSARAeQARAdgbASQgwAghAA4QhBA6gfAhQgyA1gaA2QgpBTgYB4QgHAhgHAsIAAADIAAADIgCAPQgBAHgCADQCsBcCcBKQAVi2A4iJQAZg+Awg9QAjguA9g8QBLhKA4gpQAbgUARAeQARAegbATIgCACIgBABIgBABIgbAWQgxAqgqAqQg5A6geAnQgsA4gWA4QgiBZgYCAIgOBiQElCDEBAhQCWATBogMIAJgBIArgJIATgFIAFgCIABAAIABAAQAagEAVAWQAXAYgRAiQgTAmhwAKQgmAEgnAAQhBAAhGgKg");
	this.shape_75.setTransform(209.2766,232.243,0.8,0.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#292929").s().p("AT7BzQh1gGkIgaQk7gejMgQQlPgakVgFQkUgEkdAMQlxAPlGAmIgnAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAQC9gZEggTQJAglILAYQDXAKEzAcIIJAwQBoAJA1AEQBXAFBGAAQA+gBAngHQAqgIATgQQAKgIAEgMQAFgMgDgMQgEgPgQgNQgLgIgUgJQgpgUhJgPQhCgOhngMQhpgMh9gIQhdgFiKgGQjngJlagEQlegFkEAQQj5ANkqAjQleApkNA0IgMACQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQDFgnEngmQJThPIEAAQD/AAFYAKQEqAIDNAQQBwAKA7AHQBfANBKAUQA9AQAeAUQAeAUABAZQABAvhPARQgyAKhCAAQghAAhTgFg");
	this.shape_76.setTransform(383.899,10.767,0.8,0.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#9F3335").s().p("ADOA6QhogCoLgxIgLg/IAFgCQEpAUDcAaQCCAPBngHQBAgFArgNIACAGIAAACIABACIAAAFQgFBCjCAAIgcgBg");
	this.shape_77.setTransform(475.8604,15.3602,0.8,0.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3638").s().p("ABYA/QjbgakpgUIEZhZQEGAQCMAcQCdAfARAyQgrANhAAFQgjACgmAAQhKAAhXgKg");
	this.shape_78.setTransform(475.9604,9.296,0.8,0.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B6B8B6").s().p("ASsBDQhRgGllgiQlTgfj7gQQomglp9AnQjGAMi4ASIiQAQIgXgOQEmg1JngZQIegXJrAhQGhAWEzAjQCDAQBngIQBAgFArgMQADAHgBAHQgDAxhgANQglAEg5AAQhJAAhrgHg");
	this.shape_79.setTransform(384.9447,14.0958,0.8,0.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AS5BtQhRgFllgiQlTggj7gRQomgkp9AnQjGAMi4ASIiQAQIgxgdICNgaQC1geDBgZQJuhRIPAGQLgAIE/AbQHDAmgHBdQgDAxhgAMQglAFg5AAQhJAAhrgIg");
	this.shape_80.setTransform(383.9055,10.7066,0.8,0.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#292929").s().p("A3iBuQhPgRABgvQABgZAegUQAegUA9gQQBKgUBfgNQA6gHBxgKQDMgQErgIQFYgKD/AAQIEAAJTBPQEoAnDEAmQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgLgCQkOg0legpQkogjj6gNQkEgQleAFQlaAEjnAJQkhAMisATQhoAMhBAOQhKAPgoAUQgUAJgLAIQgQANgEAPQgDAMAFAMQAEAMAKAIQATAQApAIQAoAHA+ABQBFAABYgFQA1gEBogJQCugPFbghQEygcDYgKQILgYI/AlQEhATC9AZQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgngFQlFgmlygPQkdgMkUAEQkWAFlOAaQjKAQk9AeQkJAah0AGQhTAFghAAQhCAAgygKg");
	this.shape_81.setTransform(127.9767,10.767,0.8,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#9F3335").s().p("AmwgHIAAgHIACgIQArANBBAFQBnAHCCgPQDagaEqgUIAGACIgMA/QoLAxhnACIgcABQjCAAgFhCg");
	this.shape_82.setTransform(36.0271,15.3602,0.8,0.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3638").s().p("AlBBHQhAgFgrgNQARgyCegfQCLgcEGgQIEZBZQkqAUjaAaQhWAKhKAAQgmAAgkgCg");
	this.shape_83.setTransform(35.8871,9.296,0.8,0.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B6B8B6").s().p("A29BGQhfgNgEgxQAAgHACgHQArAMBBAFQBnAICCgQQEygjGigWQJrghIeAXQJoAZElA1IgWAOQjQgbk/gTQp9gnomAlQj7AQlSAfQlnAihPAGQhrAHhKAAQg5AAglgEg");
	this.shape_84.setTransform(126.9224,14.0958,0.8,0.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("A3KBwQhggMgDgxQgHhdHDgmQE+gbLhgIQIPgGJuBRQE2AoDNApIgxAdQjQgbk+gTQp9gnomAkQj7ARlTAgQlmAihQAFQhrAIhJAAQg5AAglgFg");
	this.shape_85.setTransform(127.9815,10.7066,0.8,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#292929").s().p("ABwbQQhmgDhjgaQhMgTiPgyIgEgCQiCgthaglQiohGj+iGQjOhtjMh6Ih0hHIglgYQgRgLgFgQQgFgRAHgRQAGgQAPgKQALgIANAAQAMAAAMAGQAGACAOAKIAHAEQDCB4DEBuQAai1BDh7QAqhQBYhRQAwgsAggbQiYh4h0iQQhIhbg2hcQgYgqgLgXIvXlOQm/iZjNhEQg1B5g1BSQgbAqgSAUQghAigkAJQgMADgOAAQgoAAgcgYQgJgGADgKIBEliQgmgNgfgSQgngYgJgbQgGgSAJgSQAQgfAwAAQARAAAaAEIg+o3QAAgIAFgFQAEgGAIAAIACAAQAMACAIACQAgALAfAkQAdAiAbAxQAvBWAwCMQAyCRAjCPQAuAMA3ALQFzBRFfA1QHEBFGCAWQAIiXBAiVQA3h8BVhpQBWhpBuhPQB4hVCRgxQCQgxCggKIBIjxQgNgMgJgQQgFgJgGgOQk+gjlsgQQjbgJjPAAIiHABQkPAElUAaQjOAQk5AfIgwAFQjiAVhsAGIgOABQhEADgkAAQhCAAgzgKQhbgSABg7QABgiAkgZQAggVBAgRQBJgUBdgNQBAgIBxgJQDHgREwgHQFZgJD+gBIAEAAQIFgBJSBPQDlAfCZAcQAHghAVgYQATgYAdgNQAdgNAdAAQAYAAAXAIQAgAMAWAZQAWAZAIAhQClgdDIgaQJShPIEABIAEAAQD+ABFZAJQEwAHDIARQBxAJBAAIQBcANBJAUQBAARAgAVQAkAYABAjQABA7haASQg1AKhAAAQglAAhEgDIgOgBQhugGjggVIgwgFQk3gejPgRQlUgakQgEIiGgBQjQAAjbAJQlYAOk+AjQgLAegXAXIBPEFQC7AkCQBYQAtAcAoAfQBeA1A9BdQAyBMAYBaQAMArADAYQA7AWAxAcIAKAHQATAIAYATIACABQAdAVAdAbQA2AzA9BKQBHBYBaCGQBnCvBIBNQAfAiAzAgQATANAbAXQAYAVAOASQBDBOANBsQAOBtgkBmQglBihUBVQhRBShuA8QhuA8h8AfQiSAlisAUIgGBHIgBA0IAAALIAWAIQDvBHDKAMQA9AFAuAAQA/gBBAgGQA5gGAwgMQASgEARgGIANgGIAXgIQAGgCAJAAQAQAAAQAIQAPAHAKAMQAUAYgIAeQgFAbgZASQgSAOggALQhEAZhmAIQgnADgmAAQg/AAhAgJQhIgKiZgiIgFgBQh+gbhmgdQixgzkJhmQikhAiihGQg9gOgpgLQjBgziohJQheBagqA/QgvBKggCBQgMAzgKA8IgHAzIgBAGIgBAFIAWAKQDkBiDIAkQCDAYBkABIANAAQA2AAAogGQAUgCAQgDIANgFQAMgDALgDIAIAAQASAAAQAIQAPAJALAOQATAbgLAfQgJAbgbAPQgTALghAHQg4ANhLAAgAqZLOQgmAfgrAnQgsApgaAeQglAqgUApQgrBXgZCCQgFAagFAhIgEAYIBnA2QBhAyBfAtIAIg2QAUh7AlhjQAnhhBChOQAfgmApgpIgRgIQh4g9hshMgAI1RcQBhAkBoAkQAAgcACgaIADgkQhaAHhRAAIhCgBg");
	this.shape_86.setTransform(255.9238,139.6251,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,511.9,279.3);


(lib.Symbol92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wrong();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170,170);


(lib.Symbol90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.right();
	this.instance.setTransform(0,0,0.8222,0.8397);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,296,293.9);


(lib.Symbol69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(3).p("EgCWgsYQieBph4EwQiGFSg2IAQg/JFAwLeQA3M7DAPMQCYKmBTKoIEtAAQBbrICRqHQDAvKA1s6QAvrehApEQg4oAiHlUQh5kwiehqQiUhjiUBjg");
	this.shape.setTransform(65.2942,289.0875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgCVAtLQhTqoiYqmQjAvMg3s7QgwreA/pFQA2oACGlSQB4kwCehpQCUhjCUBjQCeBqB5EwQCHFUA4IAQBAJEgvLeQg1M6jAPKQiRKHhbLIg");
	this.shape_1.setTransform(65.2942,289.0875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F68935").s().p("EgCVAtLQhTqoiYqmQjAvMg3s7QgwreA/pFQA2oACGlSQB4kwCehpQCUhjCUBjQCeBqB5EwQCHFUA4IAQBAJEgvLeQg1M6jAPKQiRKHhbLIg");
	this.shape_2.setTransform(65.2942,289.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-4.6,133.6,584.3000000000001);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sound();
	this.instance.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(253,242,122,0)"],[0,1],-8,39,-0.2,-32.9).s().p("AjhGbQgaAAgSgRQgTgRgDgZQgWjxhfiqQhCh2hchIQgsghg0gTQg1gSg4gCQG7heJRAFQEqACDQAWQiUAGiLArQiLArh5BMQiqBrhfCQQhhCRgSCtQgCAagTARQgTARgZAAg");
	this.shape.setTransform(77.15,41.1124);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,154.3,82.3), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AcREyQghgCgjgPIg7gdQhNgjhpAUQh4AWk8gSQlNgTgzAGQi/AghnALQi2AWhqgmQhtgoiGgVQhKgMhsgJQgsgDhOBAQhNBBgsgEQlzgoiAi6QgxhGgChNQgChEAfgtQAvhEhugGQgjgChNAEQhaAFghAAQh7AAgiAFQgqAGgsAdQguAegdgNQgcgNgFgzQgFgqg+AoQgfAVgfAcQgEg7BGgTQAjgJAkACIBxAfQGdgpAbAAQAdAAB6ARQCIASAfANQAbAMChgRQETgcBagGQC1gLEnAVQDOAOLeA7QGMAeDKAZQBmAMAWAHIAoGAIgEAgQgMAdgmAAIgHAAg");
	this.shape.setTransform(187.0114,30.5842);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,374,61.2), null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35352E").s().p("Ai6BwQAFgVAQgPQAOgMAEACQACABAxgZIBggvIABgSQALgsAigaQAigaAlAIQAmAIATAlQATAlgKAsQgKAtgiAZQgiAagmgIQgdgGgTgZQgSgZgCgiIiEA+QgTAHgLAOQgGAJgCAIg");
	this.shape.setTransform(18.6724,11.3059);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,37.4,22.7), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.988],32.6,-38.2,0,32.6,-38.2,197.4).s().p("AplhpQDbg5C+gXQDzgeGXATQBHAEAwAzQAxAzAABGIAADgQpth3pei+g");
	this.shape.setTransform(61.375,20.4278);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,122.8,40.9), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30353F").s().p("AluBoQgIgJAogTQBRglAlgVQAggSAqgTQgIAAAAgCQAAgHAUgFIAUgEQgDgCAigLQAlgNAqgKQAxgQAYgFQADgGAFAAQAEgBADADQADADABAFQBXgKBGgDQBUgEAIAJQAQgCAHAEQAGAEgDAGQgDAIjpAWQghADhRAMIh2ASIiyBZQhMAngKAAIgBgBg");
	this.shape.setTransform(36.9229,10.4557);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0.1,0,73.7,21), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#30353F").s().p("AmeBQQgIgLAugOQBjggAmgPQApgQAtgNQgJgBAAgCQABgHAWgDIAXgCQgDgCAmgIQArgJAwgGQA4gKAagDQADgFAGAAQAFAAADADQAEADAAAFQBggBBOAEQBdAFAHAKQASgBAIAFQAGAFgEAFQgCAEhgACQhMABhZgBQgmgBhaAFIiEAFQgxAQicA3QhXAegMAAIgCAAg");
	this.shape.setTransform(41.6982,8.0458);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0.1,0,83.30000000000001,16.1), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.988],-65.2,-49,0,-65.2,-49,197.4).s().p("AkkBuIAAkWQAAgPAMgKQAMgJAPADIGhBRQAaAFATASQATASAFAaIA8D8Qklgkkkg3g");
	this.shape.setTransform(29.3,20.139);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0.1,58.6,40.199999999999996), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414141").s().p("AkPEQQhwhxAAifQAAieBwhwQBxhxCeAAQCfAABwBxQBxBwAACeQAACfhxBxQhwBwifAAQieAAhxhwg");
	this.shape.setTransform(38.4,38.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,76.8,76.8), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.988],-183.5,-64.1,0,-183.5,-64.1,197.4).s().p("Ai8BqIg2i/QgDgLAIgIQAHgIALACIGJBRQAMACAKAIQAJAJAEALIAiBrQhZADhdAAQh6AAh/gFg");
	this.shape.setTransform(24.3571,11.1086);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,48.7,22.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35352E").s().p("Ag8AXQgDgEgBgMQAAgLACgFQADgHAogEQAjgEAiABQAGAAAEADQAEAEAAAGIABAEQAAACgCADQgCABgDAAQhBgBAAAFIABAHQAAADgCADQgBADgZADIgSACQgHAAgBgCg");
	this.shape.setTransform(6.475,2.4842);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0.1,13,4.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#35352E").s().p("AAiAYQgYgEgCgDIgBgGIABgHQAAgEhBgCQgDAAgCgCQgCgCAAgDIABgEQABgFAEgEQAEgDAGAAQAjAAAiAFQAnAFAEAIQACAEgCALQgBAMgCAEQgBACgGAAIgUgCg");
	this.shape.setTransform(6.4771,2.6067);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,13,5.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.988],-126.7,-58.3,0,-126.7,-58.3,197.4).s().p("AjZB4Ig4j9QgDgLAIgJQAJgIALACIGyBUQANADAKAJQALAKADANIA0DIQjsgMkAgcg");
	this.shape.setTransform(27.4952,16.005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,55,32), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EEF4F0","#F3F8F5","#FFFFFF"],[0,0.557,1],24.2,-35.2,-17.7,32.3).s().p("AOwKrQjnlHj7kZQsguCq0hoQhAgLgegEQBCgKBOAAQByABB3AWQD3AvDvCLQE6C3EQFHQGxIFDiGBQBxDBAcBbQhChrhzijg");
	this.shape.setTransform(112.475,95.2988);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,225,190.6), null);


(lib.Symbol96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-15.7,17.5,-15.7,-17.5).s().p("AmflsIiIi+IC5CNIOWOYIgxAwg");
	this.shape.setTransform(142.7129,142.6705,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],13.6,20.1,-37,-30.5).s().p("AikgKIl5oqIQ7Q5IgxAwg");
	this.shape_1.setTransform(141.9129,143.4505,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-51.2,-57.7,-15,-21.5).s().p("Ao0odIIqF5II/KRIgwAwg");
	this.shape_2.setTransform(143.7729,141.5905,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],16.3,14,-23.7,-26).s().p("AgqhnQh1iChchGQDmCJCfD5QBQB8AiBhQh8jbiqi8g");
	this.shape_3.setTransform(274.7109,273.1485,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-9.3,-11.6,32.6,30.3).s().p("AgphnQh1iChdhGQDmCKCfD4QBQB8AiBhQh8jbipi8g");
	this.shape_4.setTransform(259.8311,238.249,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],14.1,11.1,-25,-24.3).s().p("AhDhZQiQhfhtgtQECBLDZDHQBtBkA5BVQivi0jViLg");
	this.shape_5.setTransform(221.2717,190.6098,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-26,-23.7,14,16.3).s().p("ABTCKQj4ifiKjmQBHBeCBBzQC8CqDbB8Qhhgih8hQg");
	this.shape_6.setTransform(273.3709,274.4885,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],30.3,32.6,-11.6,-9.3).s().p("ABTCKQj4ifiKjmQBGBdCCB0QC8CqDbB8Qhhgih8hQg");
	this.shape_7.setTransform(238.4914,259.6087,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-24.3,-25,11.1,14.1).s().p("AAtCbQjHjahLkBQAsBrBgCSQCKDVC1CvQhVg5hkhtg");
	this.shape_8.setTransform(190.8522,221.0493,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.4,-0.5,0.7).s().p("AhPhAIARgKICOCPIgVAGg");
	this.shape_9.setTransform(162.9526,189.9898,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.5,-0.5,0.6).s().p("AhThEIAQgLICXCXIgTAIg");
	this.shape_10.setTransform(166.6325,188.2898,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.5,-0.5,0.6).s().p("AhVhHIAPgLICcCbIgRAKg");
	this.shape_11.setTransform(169.9925,186.2898,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.5,-0.5,0.6).s().p("AhWhIIAOgMICfCeIgQALg");
	this.shape_12.setTransform(173.1524,184.0099,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.6,-0.5,0.5).s().p("AhWhJIANgMICgCgIgOAMg");
	this.shape_13.setTransform(176.1324,181.5499,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.6,-0.6,-0.5,0.5).s().p("AhWhJIAKgJIADgEICgCgIgNANg");
	this.shape_14.setTransform(178.9123,178.93,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.7,-0.6,-0.4,0.5).s().p("AhWhJIAOgNICfCfIgNAOg");
	this.shape_15.setTransform(181.5523,176.15,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.7,-0.5,-0.4,0.6).s().p("AhUhHQAGgGAGgJICdCeIgLAPg");
	this.shape_16.setTransform(184.0123,173.17,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.7,-0.6,-0.4,0.5).s().p("AhShGIAMgOICZCZIgJARg");
	this.shape_17.setTransform(186.2722,170.0301,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.8,-0.6,-0.3,0.5).s().p("AhPhDIALgQICUCUIgIATg");
	this.shape_18.setTransform(188.3122,166.6701,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],0.9,-0.6,-0.2,0.5).s().p("AhJg/IAJgQICKCJQgCAMgDAKg");
	this.shape_19.setTransform(189.9922,162.9902,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#E7F5F8","#B7E3EE"],[0,0.761],16.5,-15.2,-11.5,12.8).s().p("AiWBdQgqgqgNg4QBYgQBEhFQA/g/BKAAQA1AAA2AfQATA4gNA6QgNA5grAsQg9A9hWAAQhXAAg9g9g");
	this.shape_20.setTransform(70.1052,73.8716,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B7E3EE","#E7F5F8"],[0.239,1],19.7,-0.5,-19.6,-0.5).s().p("AiTCUQgqgqgNg5QgNgzAOg0QAPg1AngoQA9g9BWAAQBXAAA9A9QAjAiAPAuQATA4gNA5QgNA6grAsQg9A9hXAAQhWAAg9g9g");
	this.shape_21.setTransform(69.8694,69.4716,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#AA3436","#EE3638"],[0.451,0.655],-0.4,0.7,0,-0.4,0.7,46.6).s().p("Aj6D6QhohnAAiTQAAiSBohnQBphpCRAAQCSAABpBpQBnBnAACSQAACThnBnQhpBoiSAAQiRAAhphog");
	this.shape_22.setTransform(69.874,69.4716,0.8,0.8);

	this.instance = new lib.Path_3();
	this.instance.setTransform(71.55,71.15,0.8,0.8,0,0,0,38.4,38.4);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(90.5,82.2,0.8,0.8,0,0,0,112.5,95.3);
	this.instance_1.alpha = 0.8008;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-28.8,9.1,11.1,-30.8).s().p("Ak2BoQgdiZAHiQQAFhOALgtIAAAAIAAgBIABAAIALgCIAAAAQA9gMBQgCQCDgECJAbQB0AWByAqQgbBjg2BcQg3BehQBPQhPBQheA3QhcA2hjAbQgqhxgXh1g");
	this.shape_23.setTransform(26.7138,26.7559,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],20.7,-42.8,-42.8,20.6).s().p("AkiEiQgqhygXh0QgVhvgChrQgBhPAIhDIADgTIAAgBIAEgZIADgLIAAgBIABAAIAEgBIAJgCIAAAAIAagFIACAAQBEgKBPABQByABB2AWQB0AXByApQAuARArATQhEDfisCrQirCsjeBEQgVgwgPgpg");
	this.shape_24.setTransform(30.3056,30.3313,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],43.8,-37,-53.5,60.3).s().p("AkICNIA0gcIBQg3IBphaIA3g+QAGgGAGgIIAegmIA1hTQANgWAFgNIB8CWIgDAYQgCAMgDAJQgEAPgGAQIgIATIgPAaIgaAqIg9BKIgjAiIg1ApIhEApIgTAHQgJAEgWAHIgVAFIgYADg");
	this.shape_25.setTransform(174.9524,174.97,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#575758","#969393","#F3F3F3","#E6E6E5"],[0,0.325,0.627,1],33.9,-45.5,-37.7,26.1).s().p("AK4RPQgbgIg6gaQh1g1iZhfQkTiqlKkGQh1hch2hiQmmlgi0mdQgVgwgPgqQgqhxgXh1QgVhvgChrQgBhPAIhDIADgTIAAgBIAHglIAAAAIAAgBIABAAIALgCIAAAAIAPgDIANgCIACAAQBEgKBPAAQByABB3AXQB0AWByAqQAuARArATQGfC0FfGnQBrCABTBqQEJFOCnEPQBeCZA1B1QAbA6AIAcIB7CVIgCATQgEAZgKAcQgiBYhVBVQhVBWhYAhQgcAKgZAEIgTACg");
	this.shape_26.setTransform(98.0646,98.0702,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#EDE947","#F0EE8E","#F2F5D2"],[0,0.478,1],-43.9,-43.9,16.1,16.1).s().p("ABUCmIB7BwQiGhFhzhbIhZhNIBMBbQiNhLhiiRQgfgtgWgvIgRgmICSiSIAmARQAvAWAtAfQCRBiBLCNIhbhMIBNBZQBbBzBFCGIhwh7QC1EHASASQgSgSkHi1g");
	this.shape_27.setTransform(201.382,200.9796,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],7.3,9.2,-11.2,-11.3).s().p("AAaBbQh1iAgsiYQAbBBA4BVQBRB9BrBoQgygig8hBg");
	this.shape_28.setTransform(195.8321,211.9295,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-11.4,-11.3,9.1,7.3).s().p("Agng0QhWg4hAgbQCYAsCAB2QBBA6AiAzQhohqh9hSg");
	this.shape_29.setTransform(212.3518,195.4297,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-79.6,-79.5,5.7,5.7).s().p("AB7D0IC1ClQjFhlipiGIiEhyIBxCGQjRhviPjVQguhDghhFIgYg4IDWjWIA4AYQBFAiBDAtQDVCQBuDQIiFhwIBxCDQCGCpBnDFIini1QEKGCAcAcQgdgbmBkKg");
	this.shape_30.setTransform(223.3117,222.8893,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F58435","#F0B53C","#EDE947"],[0,0.478,1],-65.3,-65.3,47.5,47.5).s().p("ADWGmIE6EgQlWiwknjpQhchJhNhGIg6g3IDCDpQlpjAj5lyQhOh0g6h4IgqhhIFzlzIBhAqQB4A5B0BOQFyD6DAFpIjpjCIA3A6QBGBNBJBcQDpEnCwFWIkgk6QHNKcAwAxQgxgvqcnOg");
	this.shape_31.setTransform(240.5014,240.079,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],94.6,-94.5,20.4,-20.3).s().p("Al9A1IiuwUIMuMvIA4GCIBwBvICBKfg");
	this.shape_32.setTransform(101.4135,182.7099,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-64.5,-64.5,40.6,40.6).s().p("AmRBBIi9xjINbNdIA+GdIB5B5ICLLSg");
	this.shape_33.setTransform(99.7935,183.6899,0.8,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-12.2,12.3,-86.4,86.5).s().p("AFBGrIhwhwImBg5IsvstIQUCtIOqOqg");
	this.shape_34.setTransform(182.7123,101.4311,0.8,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#AA3436","#EE3638"],[0.18,0.769],-30.2,33.7,-30.2,-33.6).s().p("AFRHEIh5h5Imeg+ItctbIRjC8IPiPhg");
	this.shape_35.setTransform(183.6923,99.8112,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.instance},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315,314.6);


(lib.Symbol94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#779DAE","#373535"],[0,1],-0.4,-2.1,0.6,3.8).s().p("Ag+ARQgCgDAAgNQABgLACgEQAFgGAnAAQAjAAAjAFQAFABAEAEQAEAEgBAGIAAADQAAAHgHgBQhAgJgBAGIAAAHIgCAFQgDADgYABQgYgBgCgEg");
	this.shape.setTransform(258.7318,97.3709,0.88,0.88);

	this.instance = new lib.Path_1_2();
	this.instance.setTransform(258.75,98.3,0.88,0.88,0,0,0,6.4,2.5);
	this.instance.alpha = 0.25;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D75739").s().p("AgOAuQgQgTABgbQAAgbAQgTQAOgTAWAAIAIABQgUADgMASQgNATgBAYQAAAYANATQAMATATADIgHABQgWAAgOgUg");
	this.shape_1.setTransform(257.8528,97.5689,0.88,0.88);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#F49236","rgba(218,89,57,0)"],[0,1],5.3,0.1,-5.2,0).s().p("AglAuQgPgTAAgbQABgbAPgTQAQgTAVAAQAWAAAPAUQAPATAAAbQAAAbgQATQgQATgVAAQgWAAgPgUg");
	this.shape_2.setTransform(259.8114,97.5689,0.88,0.88);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBiKQADA0ABBWQAABYgGAzg");
	this.shape_3.setTransform(183.1876,42.7905,0.88,0.88);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATBCIgShCIgjiFQASAzAWBRQAUBMAJA7g");
	this.shape_4.setTransform(295.1424,54.9341,0.88,0.88);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBEQgHgsgGgYIgaiHQAQA4APBOQAQBVAEA0g");
	this.shape_5.setTransform(242.9159,54.4502,0.88,0.88);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E36339").s().p("AhvAJIDegaIABAJIjeAag");
	this.shape_6.setTransform(328.8894,149.1574,0.88,0.88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF4339").s().p("AhvAJIDdgaIACAJIjeAag");
	this.shape_7.setTransform(328.8014,148.3654,0.88,0.88);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E36339").s().p("AhvAJIDdgaIABAJIjdAag");
	this.shape_8.setTransform(328.6034,146.7815,0.88,0.88);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF4339").s().p("AhvAJIDegaIAAAJIjdAag");
	this.shape_9.setTransform(328.5154,145.9895,0.88,0.88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E36339").s().p("AhvAJIDegaIABAJIjeAag");
	this.shape_10.setTransform(328.4494,144.6915,0.88,0.88);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF4339").s().p("AhvAJIDdgaIACAJIjeAag");
	this.shape_11.setTransform(328.3614,143.8996,0.88,0.88);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E36339").s().p("AhvAJIDegaIABAJIjeAag");
	this.shape_12.setTransform(328.2734,142.4696,0.88,0.88);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BF4339").s().p("AhvAJIDdgaIACAJIjeAag");
	this.shape_13.setTransform(328.1854,141.6556,0.88,0.88);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E36339").s().p("AhvAJIDegaIABAJIjdAag");
	this.shape_14.setTransform(327.9654,140.0057,0.88,0.88);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BF4339").s().p("AhvAJIDegaIABAJIjeAag");
	this.shape_15.setTransform(327.8774,139.2137,0.88,0.88);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#30353F").s().p("AgYgdIABgoIAmgHIgFAPQgFATgBATQgBAXALAnQAFAVAGAOIgZACQgVg3gDgyg");
	this.shape_16.setTransform(102.252,19.0972,0.88,0.88);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#30353F").s().p("AhoAvQgEgDAAgFIC4gTQAIAAAGgHQAGgHgBgHIgEgwQAOAEABAPIADAmQABALgHAJQgIAIgLABIi0ANIgBAAQgEAAgDgDg");
	this.shape_17.setTransform(103.2691,21.9599,0.88,0.88);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#506C84").s().p("AhmAvQgEgDAAgFIgEg2QgBgHAFgGQAFgFAHgBICzgQQAJAAAHAFQAHAGAAAJIADAmQABAMgHAIQgIAJgLAAIi0ANIgBABQgEAAgDgEg");
	this.shape_18.setTransform(103.0909,21.914,0.88,0.88);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#474749","rgba(119,157,174,0)"],[0,1],-16.4,0,-11.8,0).s().p("AjmA2QgygGACgRQACgOAwADQBAAEAYgFQBVgTB1gXQCrgjAkABQAIAAABAIQACALgBANQgBAOgDABQlvBCgyACIgXAAQglAAgcgEg");
	this.shape_19.setTransform(281.5151,178.3435,0.88,0.88);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#779DAE","#474749"],[0,1],-0.6,-4.7,0.7,3.8).s().p("AjmA2QgygGACgRQACgOAwADQBAAEAYgFQBVgTB1gXQCrgjAkABQAIAAABAIQACALgBANQgBAOgDABQlvBCgyACIgXAAQglAAgcgEg");
	this.shape_20.setTransform(281.5151,178.3435,0.88,0.88);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#474749").s().p("Aj+A4QgRgEgKgRQgLgRALgDQAJgDC7gfIDIgiQAXgFCNAEQAIABABAOIkIAxQj1AvgeAAIgDgBg");
	this.shape_21.setTransform(280.6722,177.4668,0.88,0.88);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#779DAE","#373535"],[0,1],-0.3,-2.1,0.6,3.6).s().p("AAlAVQgYAAgCgDQgCgCAAgDIgBgIQAAgFhBAIQgDABgCgCQgCgCAAgDIAAgDQAAgGADgEQAEgEAGgBQAjgEAiAAQAoAAAEAGQADAFAAALQABAMgCAEQgCADgTAAIgGAAg");
	this.shape_22.setTransform(239.3564,96.8237,0.88,0.88);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(239.25,97.85,0.88,0.88,0,0,0,6.5,2.6);
	this.instance_1.alpha = 0.25;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D75739").s().p("AgOAuQgPgSAAgcQAAgbAPgTQAPgTAWAAIAHABQgTADgMASQgOATAAAYQAAAZAOASQAMATATADIgHABQgWAAgPgUg");
	this.shape_23.setTransform(236.2721,96.9749,0.88,0.88);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F49236","rgba(218,89,57,0)"],[0,1],5.1,0,-5.2,0.1).s().p("AglAuQgPgSAAgcQAAgbAPgTQAQgTAVAAQAWAAAPATQAQATAAAbQAAAcgQASQgPAUgWAAQgVAAgQgUg");
	this.shape_24.setTransform(238.274,96.9749,0.88,0.88);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#ED7737","#F48236","#E46538"],[0,0.31,1],-1.8,-0.1,1.6,0.1).s().p("AgDAxQgHAAgEgGQgFgFAAgHIAGhQIAhADIgFBPQgBAHgFAFQgFAFgFAAIgCgBg");
	this.shape_25.setTransform(183.0316,78.5857,0.88,0.88);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C7CCD0").s().p("AguApQgDgDAXgNIAggTQAJgFABgLIgCgMQgCgJAGgGQAGgGAGAAQADABACAGQADAIADAEQAFAFABAPQABANgDAJQgDAOgrAHIgcAFIgHAAQgIAAgCgDg");
	this.shape_26.setTransform(207.6391,60.9343,0.88,0.88);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C7CCD0").s().p("AhOBHQABgZALgQQAFgHAHgEICEhZIACACIiFBaQgGADgFAHQgLAQgBAXg");
	this.shape_27.setTransform(190.4034,67.8698,0.88,0.88);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#808D9E").s().p("AiHCAIAFhSQACgUAMgQQALgMAEACQABAABWg6QBYg9AMgFQAOgHAJAEQAEADACAEQAYAAgDACQgWAQgNAIIgIAEIgBgQQAAgFgEgCQgFgCgEADIhXA+QhAAsgQAJQgUALgIASQgEAJAAAGIgFBSg");
	this.shape_28.setTransform(194.3957,68.9143,0.88,0.88);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6A6F77").s().p("AiOCHIAGhWQABgWAOgRQAMgNAEACQACAABWg8QBYg/ANgHQAOgHAKAHQAEADACAFQAgACgDACQgXARgVALIgPAIIACgcQiPBhghASQgUAMgIASQgEAJAAAHIgFBWg");
	this.shape_29.setTransform(194.7928,68.799,0.88,0.88);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6A6F77").s().p("AiOCHIAGhWQABgWAOgRQAMgNAEACQACAABWg8QBYg/ANgHQAOgHAKAHQAEADACAFQAgACgDACQgXARgVALIgPAIIACgcQiPBhghASQgUAMgIASQgEAJAAAHIgFBWg");
	this.shape_30.setTransform(194.7928,68.799,0.88,0.88);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#808D9E").s().p("AgOAWQgdgDgRgUIgFgKIAKAKQAUAQAcgCQAbgDAagPQANgIAHgIQgJAMgOALQgaAUgZAAIgGAAg");
	this.shape_31.setTransform(205.638,66.3406,0.88,0.88);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#808D9E").s().p("AgjARIAIgWIAbgWIAaABQALABAAADQAAADgEACQgYAOgGADQgUASgOAJIgDABQgEAAADgLg");
	this.shape_32.setTransform(204.3265,61.0693,0.88,0.88);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C7CCD0").s().p("Ag+gKQASgtAhgFQAdgEAeAWQAYARACAKQACAGgeAFQgCgIgHgGQgPgLgcAMQgcANgLAZQgFAOABAKQgJAOgMACQgJgfARgog");
	this.shape_33.setTransform(205.1191,55.5445,0.88,0.88);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6A6F77").s().p("AgGBuQgngDgZgiQgZgiACgsQAEguAdgeQAegeAlACQAnADAaAiQAZAigEAsQgDAugdAeQgcAcgiAAIgFAAg");
	this.shape_34.setTransform(205.451,59.4661,0.88,0.88);

	this.instance_2 = new lib.Path_9_0();
	this.instance_2.setTransform(199.2,64.45,0.88,0.88,0,0,0,18.7,11.3);
	this.instance_2.alpha = 0.25;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F47B36").s().p("AgMiiIAHBDIAQDkIACAeg");
	this.shape_35.setTransform(304.4,111.55,0.88,0.88,0,0,0,0.1,1.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#474749").s().p("AACAyQgSgQgCgbQgCgbAMgVQAGgLAHgGQgFAEgDAJQgKASgCAVQgCAeASAVQAJAKAKAEQgJgCgJgHg");
	this.shape_36.setTransform(15.232,100.0328,0.88,0.88);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F8C486").s().p("AgIAYQgWgCgKgWQgBgCAJgBQALgBADgDQAIgHAKgFQAMgHgCAHIgHAKQgBADAMgBQAVAAAGACQgOAKgHABQgHACgBAJQAAAHgOAAIgGAAg");
	this.shape_37.setTransform(18.2538,102.7822,0.88,0.88);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B46A3A").s().p("AggAMQABgXgBgBIAHgIQAKgHAPABQAPABAKARQAGAIACAIQAEAEgRgBQgLgBgGABIgKACQgCAAgCAAQgBAAAAAAQgBgBAAAAQABAAABgBQADgCAIAAQAMgBAFgGQAEgEgIgEQgEgCgFABQgEABgEAEQgIAFgNAWQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgDAAgBgPg");
	this.shape_38.setTransform(18.6729,96.9106,0.88,0.88);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E19139").s().p("AgjAuQgPgTAAgbQAAgaAPgTQAPgTAUAAQAVAAAPATQAPATAAAaQAAAbgPATQgPATgVAAQgUAAgPgTg");
	this.shape_39.setTransform(17.9944,99.7248,0.88,0.88);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6A6F77").s().p("AgoA0QgRgWAAgeQAAgeARgVQARgWAXAAQAYAAARAWQARAVAAAeQAAAegRAWQgRAWgYAAQgXAAgRgWg");
	this.shape_40.setTransform(17.8404,99.7028,0.88,0.88);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B4CBD7").s().p("AgoA5QgRgYAAghQAAggARgXQARgYAXABQAYgBARAYQAQAXAAAgQAAAhgQAYQgRAXgYgBQgXABgRgXg");
	this.shape_41.setTransform(18.4564,99.7028,0.88,0.88);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E56538").s().p("AgjBAQgPgaABgmQgBglAPgaQAPgbAUAAQAVAAAPAbQAOAaAAAlQAAAmgOAaQgPAbgVAAQgUAAgPgbg");
	this.shape_42.setTransform(19.0724,99.3288,0.88,0.88);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#474749").s().p("AACAzQgTgQgCgcQgCgcAMgWQAIgNAGgFQgFAFgEAJQgKASgCAWQgCAfATAWQAKALAKAFQgKgDgJgIg");
	this.shape_43.setTransform(140.3647,93.917,0.88,0.88);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C486").s().p("AgJAYQgXgBgKgXQgBgCAJgBQALgCAEgDQAJgHAKgFQAMgHgBAGQgCAGgGAFQgBADANgBQAVAAAHACQgPAKgHACQgIACgBAJQAAAIgPAAIgGgBg");
	this.shape_44.setTransform(143.5184,96.7591,0.88,0.88);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B46A3A").s().p("AghANQAAgZgBgBIAHgIQALgIAQACQAQABALASQAFAIACAIQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAQgCACgLgBQgLgBgHACIgLABQgCAAgBAAQgBAAAAAAQgBAAAAAAQAAgBABAAQAEgDAIAAIALgCQAEgBACgDQAFgGgIgDQgKgEgIAIQgIAFgOAXQgBAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgDAAgBgQg");
	this.shape_45.setTransform(143.9188,90.6208,0.88,0.88);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E19139").s().p("AglAwQgPgUAAgcQAAgbAPgUQAQgTAVgBQAWABAPATQAQAUAAAbQAAAcgQAUQgPATgWAAQgVAAgQgTg");
	this.shape_46.setTransform(143.2368,93.543,0.88,0.88);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#6A6F77").s().p("AgqA3QgSgXAAggQAAgfASgWQASgYAYAAQAZAAASAYQASAWAAAfQAAAggSAXQgSAXgZgBQgYABgSgXg");
	this.shape_47.setTransform(143.0828,93.543,0.88,0.88);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#B6CDD8","#7296A5"],[0,1],-0.4,-8,0.5,8.4).s().p("AgqA7QgRgYAAgjQAAghARgZQASgYAYAAQAZAAASAYQARAZAAAhQAAAjgRAYQgSAYgZAAQgYAAgSgYg");
	this.shape_48.setTransform(143.7428,93.543,0.88,0.88);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F47B36","#D2533A"],[0,0.988],0,-6.2,0,8.8).s().p("Ag3BAQgXgbAAglQAAgkAXgaQAXgaAgAAQAhAAAXAaQAXAaAAAkQAAAlgXAbQgXAaghAAQggAAgXgag");
	this.shape_49.setTransform(145.4147,93.543,0.88,0.88);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#474749").s().p("AADBjQglgfgEg3QgEg2AYgrQAOgYANgJQgJAJgIARQgTAigEArQgEA9AkAqQATAVATAIQgSgEgSgPg");
	this.shape_50.setTransform(15.8738,130.3039,0.88,0.88);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E5E8F0").s().p("AgRAvQgsgCgUgtQgBgFARgCQAWgDAHgGQAQgNAUgKQAYgOgEANQgCAKgLAKQgEAGAZgBQAqgBAMAFQgcAUgNADQgKACgDAGQgDAEgBAKQAAAFgNAEQgLAEgMAAIgFAAg");
	this.shape_51.setTransform(21.905,135.7725,0.88,0.88);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C7CCD0").s().p("AhAAYQAAgvgCgCIAOgQQAVgPAgADQAdACAVAiQAKARAEAPQABABAAAAQABABAAAAQAAABgBAAQAAABgBAAQgEAEgWgCQgVgCgNADQgMADgJABQgPABAHgFQAHgEAQgBQAQAAAHgDQAGgCAFgHQAJgLgQgHQgHgDgKACQgKACgIAGQgSAQgYAnQgEAGgCAAQgGAAgBgfg");
	this.shape_52.setTransform(22.6913,124.0193,0.88,0.88);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#808D9E").s().p("AhHBcQgegmAAg2QAAg0AegnQAegmApAAQAqAAAeAmQAeAnAAA0QAAA2geAmQgeAlgqABQgpgBgeglg");
	this.shape_53.setTransform(21.3383,129.622,0.88,0.88);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6A6F77").s().p("AhRBpQgigsAAg9QAAg9AigqQAigsAvAAQAwAAAiAsQAiAqAAA9QAAA9giAsQgiArgwAAQgvAAgigrg");
	this.shape_54.setTransform(21.0744,129.622,0.88,0.88);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#B6CDD8","#7296A5"],[0,1],-0.7,-15.2,0.9,16.3).s().p("AhQBxQgjgwAAhBQAAhBAjguQAhgvAvAAQAwAAAiAvQAhAuABBBQgBBBghAwQgiAugwAAQgvAAghgug");
	this.shape_55.setTransform(22.2843,129.622,0.88,0.88);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E56538").s().p("AhGCAQgfg1AAhLQAAhKAfg1QAdg2ApAAQAqAAAeA2QAdA1ABBKQgBBLgdA1QgeA2gqAAQgpAAgdg2g");
	this.shape_56.setTransform(23.5163,128.874,0.88,0.88);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#474749").s().p("AADBjQgkgfgFg3QgEg2AZgrQAPgaALgHQgIAIgJASQgTAigEArQgDA9AkAqQASAVATAJQgRgFgTgPg");
	this.shape_57.setTransform(125.9646,127.202,0.88,0.88);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E5E8F0").s().p("AgRAvQgsgDgUgtQgBgEARgCQAWgDAHgGQARgOATgKQAYgNgDANIgOAUQgEAFAZAAQAqgBAMAFQgcAUgNADQgKACgDAGQgDAEgBAJQAAAFgNAFQgLAEgMAAIgFAAg");
	this.shape_58.setTransform(131.9898,132.6652,0.88,0.88);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C7CCD0").s().p("AhAAYQAAgvgBgCIAOgQQAUgPAgACQAdADAVAiQAKAQAEAQQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgEAEgWgCQgVgCgNADIgVADQgOABAGgEQAHgEAQgBQAQgBAHgCQAGgDAFgGQAJgLgQgHQgHgDgKACQgJABgIAHQgSAPgZAoQgEAGgCAAQgGAAgBgfg");
	this.shape_59.setTransform(132.7981,120.9178,0.88,0.88);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#808D9E").s().p("AhHBcQgegmAAg2QAAg1AegmQAegmApAAQAqAAAeAmQAeAmAAA1QAAA2geAmQgeAmgqAAQgpAAgegmg");
	this.shape_60.setTransform(131.4451,126.5201,0.88,0.88);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6A6F77").s().p("AhRBpQgigsAAg9QAAg8AigsQAigrAvAAQAwAAAiArQAiAsAAA8QAAA9giAsQgiArgwAAQgvAAgigrg");
	this.shape_61.setTransform(131.1811,126.5201,0.88,0.88);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#B6CDD8","#7296A5"],[0,1],0,-15.2,0.1,16.1).s().p("AhRBwQghguAAhCQAAhBAhguQAigvAvAAQAwAAAhAvQAiAuAABBQAABCgiAuQghAvgwAAQgvAAgigvg");
	this.shape_62.setTransform(132.4131,126.5201,0.88,0.88);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#F47B36","#CF4F3A"],[0,0.98],0,-11.9,0,16.8).s().p("AhrB5QgsgyAAhHQAAhGAsgyQAtgyA+AAQA/AAAsAyQAtAyAABGQAABHgtAyQgsAyg/AAQg+AAgtgyg");
	this.shape_63.setTransform(135.625,126.5201,0.88,0.88);

	this.instance_3 = new lib.Path_11();
	this.instance_3.setTransform(184.95,99.05,0.88,0.88,0,0,0,187,30.6);
	this.instance_3.alpha = 0.5;

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7A7C7C").s().p("AgPAAIAEAAQAEABAEgDQAJgKADAAIAIgCIgCAXQgFACgNACIgMACQgCgJACgGg");
	this.shape_64.setTransform(325.1872,176.4806,0.88,0.88);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D4D3D0").s().p("AgXAIIAAgBQAAAHAHAIQAJALAHgVIgDATIAJgFQAKgOAIgzQgEAjgFAOQgHAXgNAHQgOAAgEggg");
	this.shape_65.setTransform(325.9635,184.8624,0.88,0.88);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#373535","#292929","#2F2F2F","#3F4040","#5A5A5B","#5D5D5F"],[0,0.239,0.486,0.729,0.976,1],3.4,6.2,0.2,-0.6).s().p("AgOBAQgEgHgGgVQAFALAPgNQAHgGAIgJQAFgCADgSQACgIAAggIABgeQAGAigHAwQgEAdgLARQgGAMgHACIAAABQgEAAgDgIg");
	this.shape_66.setTransform(326.4642,178.7734,0.88,0.88);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2E2D2F").s().p("AAMAUQgDAAgCgIIgCgLQgDgHgDgDIgMgPIADgCQAFgBAEAAQAOALACAsQgCgIgBAAg");
	this.shape_67.setTransform(327.0634,170.1393,0.88,0.88);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgVAZQAEgZAKgPQAEgIADgCIAMANQAKAKAAAPIgDAIQAAABgJAAIgFgCIgDgDQgFAAgEAGQgBADgGAAIgHgBg");
	this.shape_68.setTransform(325.9195,170.3574,0.88,0.88);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#FFFFFF","#D7D6D7","#97989B"],[0,0.345,1],2.5,-1.1,-3.7,4.4).s().p("AgFBIQgIggABg0QACgvAMgbIAJgMQgSAcgBA+QgCAvAKAgQAFAUAIAIIgBAAQgKAAgHgbg");
	this.shape_69.setTransform(324.5896,176.6378,0.88,0.88);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#636264").s().p("AgSgQQAFgOAIgDQAHgCAJAJQAIAKAGATQAGATgCAKQgEgcgMgRQgLgRgHAFQgJAGgIAbIgHAbQAEghAHgSg");
	this.shape_70.setTransform(325.7655,168.9559,0.88,0.88);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7A7C7C").s().p("AgbgBQABgBAGACQAHABAHgEIAMgLQAFgDAFgBIAOgBIgCALQgBANAAAIQgKADgWACIgWACQgDgLADgKg");
	this.shape_71.setTransform(221.0976,189.6362,0.88,0.88);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D4D3D0").s().p("AgqALIABgCIAMAXQAQAPAOgeQgCAPgEALIAEABQAFAAAGgHQAUgVANhIQgHAygIAVQgMAggZAKQgZAAgIgug");
	this.shape_72.setTransform(222.4565,201.4939,0.88,0.88);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#373535","#292929","#2F2F2F","#3F4040","#5A5A5B","#5D5D5F"],[0,0.239,0.486,0.729,0.976,1],4.9,8.6,0.5,-0.8).s().p("AgZBbQgFgJgMgfQAJAPAagSQAMgIAOgNQAKgCAGgaQADgNABgsIAAgqQAKA3gLA9QgHAogTAZQgNARgLADIgCAAQgFAAgGgKg");
	this.shape_73.setTransform(223.3102,192.8777,0.88,0.88);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2E2D2F").s().p("AAWAcQgCAAgCgDQgDgDgBgFQgCgHgEgJQgFgKgFgEQgGgEgIgJIgIgIIAHgDQAIgCAGABQAQAJAIAjQAEASAAAQQgCgMgBAAg");
	this.shape_74.setTransform(224.3924,180.6479,0.88,0.88);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgmAjQAIgkAQgVQAIgLAGgDIAWASQALAJAEAOQACAHAAAGIgEALQgBACgHAAIgKAAQgCAAgFgEIgGgEQgLAAgFAJQgDAFgKAAIgNgCg");
	this.shape_75.setTransform(222.3685,180.9758,0.88,0.88);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#FFFFFF","#D7D6D7","#97989B"],[0,0.345,1],3.7,-1.3,-5.2,6.6).s().p("AgLBpQgPguADhJQADhDAWglQALgTAMgGQgUASgJAcQgMAigBA2QgCBDAQAtQAKAcAOAMIgBABQgTAAgMgng");
	this.shape_76.setTransform(220.1906,189.5506,0.88,0.88);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#636264").s().p("AguAWQAGgcAIgRQAJgUANgEQANgDAQANQAPANALAcQAKAbgDAOQgIgngVgZQgUgYgMAIQgPAIgPAmQgIAUgEASIAFgbg");
	this.shape_77.setTransform(222.113,178.9788,0.88,0.88);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#E46438","rgba(211,83,57,0)"],[0,1],-0.5,-4.9,0.5,4.5).s().p("AkpgGIJmhdQgJAwgNAoIpjBvQANggAGhKg");
	this.shape_78.setTransform(276.5529,164.205,0.88,0.88);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F47B36").s().p("AgcCEIAdgEQASgDALgFQAfgMAQgYQAQgXAJggIAQg7IAhh2IgdB3QgGAXgKAkQgJAhgQAXQgTAbgeALQgWAIglAEIg+AHIg9AGIB6gRg");
	this.shape_79.setTransform(194.6273,165.0629,0.88,0.88);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F47B36").s().p("AhkAAIBjgIIBCgCIBDAAIhDADIhCADIhCAEIghABQgQAAgPAKQAOgLARAAg");
	this.shape_80.setTransform(228.2203,131.9539,0.88,0.88);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F47B36").s().p("ABJgLQgrAJgnAFIg/AJg");
	this.shape_81.setTransform(277.55,159.95,0.88,0.88,0,0,0,-9.4,1.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F47B36").s().p("AARCYQgEhMgFhMQgFhCgHhWQgIhTgJhGQAMBQAIBIQAHBEAGBVQAGBZACA/QADBSgCBIQgChmgCg0g");
	this.shape_82.setTransform(250.3324,109.5366,0.88,0.88);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F47B36").s().p("AABg8IAAA6IgBA/g");
	this.shape_83.setTransform(175.1,112.75,0.88,0.88,0,0,0,0.2,-15.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgFAJQgDgDgBgFQgBgEADgDQADgEAEAAQADgBADADQADADABAFQAAAEgCADQgDAEgEAAIgBAAQgCAAgDgCg");
	this.shape_84.setTransform(72.1794,56.2541,0.88,0.88);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AjTBpQgKgLAigWQAXgPBYgxQBQgtBxgmQA4gTAogKIABALQhkANirBhIhsBAQgnAYgGAAIgBAAg");
	this.shape_85.setTransform(52.6974,65.023,0.88,0.88);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B5CDD8").s().p("AjhAhQgFgDBFgUQBMgVA/gHQBVgKBHgDQBUgEAIAJQABAChtAMIi+AWIhlAQQgqAHgIAAIgCAAg");
	this.shape_86.setTransform(75.0438,57.8928,0.88,0.88);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#323131").s().p("AkDAmQAAgHAUgFIAUgEIBQgOQBfgPBKgKQA7gHBLgHIBEgGQAQgDAHAEQAGAEgCAGQgCAFhWAKQhEAIhRAGQgdADiPAVQhRANgUAAQgIAAAAgCg");
	this.shape_87.setTransform(74.5211,58.9101,0.88,0.88);

	this.instance_4 = new lib.Path_4_1();
	this.instance_4.setTransform(66.35,65.05,0.88,0.88,0,0,0,37,10.5);
	this.instance_4.alpha = 0.25;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FEC02E").s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgEAFAAQAHAAAEAEQAEAFAAAFQAAAHgEAEQgEAEgHAAQgFAAgFgEg");
	this.shape_88.setTransform(34.23,73.6776,0.88,0.88);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgEADABQAEgBAEAEQADADAAAEQAAAFgDADQgEAEgEgBQgDABgEgEg");
	this.shape_89.setTransform(140.1569,54.9121,0.88,0.88);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Aj0BSQgKgMAogSQAbgNBngnQBdglCBgaQBAgNAtgGIAAALQhvADjJBPQijBIgPAAIgBgBg");
	this.shape_90.setTransform(117.6515,61.6601,0.88,0.88);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B5CDD8").s().p("Aj7AQQgGgEBOgMQBXgOBGgBQBfgBBOAEQBeAFAHAJQACACh7ABQifACg0ABQgkABhOAFIgyACIgHAAg");
	this.shape_91.setTransform(143.1117,56.3113,0.88,0.88);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#323131").s().p("AkhAMQABgHAXgDIAWgCIBagFQBqgGBTgCQBBgCBUACIBMAAQASgBAHAGQAGAEgDAFQgFAHkDgCQghAAifAHQg7ACgeAAQghAAAAgDg");
	this.shape_92.setTransform(142.3912,57.7275,0.88,0.88);

	this.instance_5 = new lib.Path_4_0();
	this.instance_5.setTransform(132.6,61.85,0.88,0.88,0,0,0,41.7,8);
	this.instance_5.alpha = 0.25;

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FEC02E").s().p("AgKALQgFgEABgHQgBgGAFgEQAEgEAGgBQAGABAFAEQAEAEAAAGQAAAHgEAEQgFAFgGgBQgGABgEgFg");
	this.shape_93.setTransform(96.2902,68.5077,0.88,0.88);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E5E8F0").s().p("AjDBjQgIAAgGgGQgGgFAAgJIAAiXQAAgLAHgHQAIgIALAAIGPAAIAFACIABAFIgGCtQAAAHgFAFQgFAFgIAAg");
	this.shape_94.setTransform(58.7373,178.5925,0.88,0.88);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#503D2F").s().p("AjEBvQgOAAgJgJQgKgJAAgOIAAiZQAAgPALgKQALgMAPAAIGNAAQAKABAIAHQAHAIgBAKIgHCiQgBAPgKAJQgLALgOgBg");
	this.shape_95.setTransform(59.1604,178.5925,0.88,0.88);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.7,0,1.8,0).s().p("AgNAMIgDgXIAfAAIADAXg");
	this.shape_96.setTransform(345.7189,74.7116,0.88,0.88);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.9,0,1.9,0).s().p("AgOAMIgEgYIAgAAIAFAYg");
	this.shape_97.setTransform(345.3449,71.5877,0.88,0.88);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.9,0,1.9,0).s().p("AgNANIAAgBIgFgYIAgAAIAFAZg");
	this.shape_98.setTransform(344.6849,68.2438,0.88,0.88);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.8,0,1.8,0).s().p("AgMAMIgFgXIAcAAIAHAXg");
	this.shape_99.setTransform(343.739,64.8999,0.88,0.88);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.7,0,1.7,0).s().p("AgQgLIAbAAIAGAVIgbACg");
	this.shape_100.setTransform(342.859,61.6219,0.88,0.88);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.6,0,1.7,0).s().p("AgIANIgIgZIAYAAIAJAZg");
	this.shape_101.setTransform(341.935,58.168,0.88,0.88);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.5,0,1.6,0).s().p("AgHANIgIgZIAVAAIAKAZg");
	this.shape_102.setTransform(340.945,55.0221,0.88,0.88);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#FEC02E","#6D5032"],[0,1],-1.3,0,1.4,0).s().p("AgGAKIgHgTIATAAIAHATg");
	this.shape_103.setTransform(339.7791,51.6342,0.88,0.88);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CC4C39").s().p("ACDARIiIgBIoBgKQgJAAgHgGQgHgHABgJQADALAEAEQAGAEAJAAIIBAFICIADQBQABA5AAIERAAIAAABIkRADIhMABIg9AAg");
	this.shape_104.setTransform(61.4197,167.2365,0.88,0.88);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#503D2F").s().p("Au9AqQgEgJAAgHIAAhNIEuAHQFZAHDgABQFjABK5gKIAABAQAAAMgGALQs6AJiaABIgRAAQjEAArQgKg");
	this.shape_105.setTransform(84.6305,177.0316,0.88,0.88);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#F47B36","#C84939"],[0,1],0.2,-8.3,-0.1,9.8).s().p("AuYBXQgRgBgMgMQgMgNAAgRIAAhpQAAgUAOgOQAOgOAUAAIBtAAQABAJAFAGQAGAGAJAAQGbAIEiADQFgADKBgWQAVgBAPAOQAPAPAAAVIAABUQAAAVgPAPQgOAPgVAAQqhAUkEACIgZAAQjWAAqUgXg");
	this.shape_106.setTransform(84.6305,175.4064,0.88,0.88);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FEC02E").s().p("AApC9IgQgBQgKhngeh2QgWhSgchMQANAGANANQAUAUALAcQATAwAWBFQAZBOAGAmQAFAigJAQQgFAIgGAIQgBALABAFIAAABg");
	this.shape_107.setTransform(342.6868,62.7219,0.88,0.88);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C94939").s().p("AAMFUQADgWABiPQAAhlgXj0IgYjgIADAAQAOgCAGgJIAZDVQAZDnABBiQgBB1gEAvQgEAugOAUQgSAdgsAKQAtgMAJg2g");
	this.shape_108.setTransform(348.7548,120.5802,0.88,0.88);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#30353F").s().p("As8EmIBLiuQBAiTAshVQAYgwAqgiQApgiA0gQQExhbD7gfQD0gdGXATQBGADAxAzQAwAzAABHIAAFuQAAAogcAdQgdAdgoAAQlxAEjRALQijAJlsAfQlrAfhKAGICzgVILWhEQCPgNHOgKQAngBAagcQAagcgBgnIgOltQgCgygjgkQgjgjgygCQjKgKkYASQkPASieAfQixAjhqAsQhAAagrAiQgXASh1D3Qg6B8g2B5QgUAFgQAHIgLAHQAggfAbg8g");
	this.shape_109.setTransform(99.6121,40.6811,0.88,0.88);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#395063").s().p("ArWAuQBPgeBSgIIGJgmQFAgfB5gHQCugJCJAGQCkAIAtAcQgaAUggAAQlxAEjSALQidAIlXAdIm4Alg");
	this.shape_110.setTransform(104.9139,65.3222,0.88,0.88);

	this.instance_6 = new lib.Path_5();
	this.instance_6.setTransform(123.75,24.75,0.88,0.88,0,0,0,61.3,20.4);

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.setTransform(264.05,42.5,0.88,0.88,0,0,0,27.5,16);

	this.instance_8 = new lib.Path_2_0();
	this.instance_8.setTransform(314,47.55,0.88,0.88,0,0,0,24.4,11.1);

	this.instance_9 = new lib.Path_3_0();
	this.instance_9.setTransform(209.85,34.25,0.88,0.88,0,0,0,29.3,20.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#395063").s().p("AhQAWQADgmAZgaQAagaAgACQAiACAWAdQAVAdgCAnQgBALgEAMQhxAKgWAAIgOABQgIgWABgXg");
	this.shape_111.setTransform(36.035,66.3235,0.88,0.88);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#395063").s().p("ApZh4IglgUIAIgKQArgiBAgaQBqgsCxgjQCegfEPgSQEYgSDKAKQAyACAjAjQAjAkACAyIAOFtQABAngaAcQgaAcgnABIgxABIghjcIhngQIggCQIAtAEQAxAHASAJIgQAdIgxgGQg0gGgHABQgBAPgCAIIABAGQABAEArAMIArALIAAAAQj0AHiKAHIAOg0QgCgHABgJQACgRAPgLQAKgqAQhOIANhGIjBgNIhAE7IiEAMIA3lVQhNgDhlgIQjJgRh0gZQg3BtieFeIgYADg");
	this.shape_112.setTransform(103.2896,41.2161,0.88,0.88);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#395063").s().p("Aj1hsIABgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAABAAIGyBUQATAEAEASIAeBxQlggNgGADIgcADQgeAEgaAJg");
	this.shape_113.setTransform(263.0453,39.4026,0.88,0.88);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#395063").s().p("AgGAjIi2gHIgfhvIAAgBIACgBIGIBRQASADAEAOIAXBJQiQguhSgFg");
	this.shape_114.setTransform(313.4898,46.9484,0.88,0.88);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#395063").s().p("AEZEaImSgoIAUiqQgDgFgHgFQgOgKgRAAQgSAAgRATQgNAPgFAOQgFANgMB4IgfgDQgUgCgNgPQgOgOAAgVIAAm9QAAgGAEgEQAEgEAGAAIACAAIGjBRQAUAEAPAPQAOAOAGAUIBbGIQgCASgEATIgDAAg");
	this.shape_115.setTransform(211.3028,43.0105,0.88,0.88);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#506C84","#4E6A81","#486379","#3F586C","#395063"],[0.016,0.294,0.569,0.843,1],-66.9,-15.5,410.9,112.7).s().p("As8EmIBLiuQBAiTAshVQAYgwAqgiQApgiA0gQQExhbD7gfQD0gdGXATQBGADAxAzQAwAzAABHIAAFuQAAAogcAdQgdAdgoAAQlxAEjRALQisAKmZAiImeAjQgtACgjAMIgZANQAggfAbg8g");
	this.shape_116.setTransform(99.6121,40.6811,0.88,0.88);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#30353F").s().p("AEGEHImigmQgRgBgNgLQgNgMgEgQIhdmkQgCgMAIgIQAIgIAMACIGxBUQAOACAKAKQAKAJAEAOIBfFtQAEAQgLANQgJALgPAAIgDAAgAkVjyIgBADIBdGkQACALAJAHQAIAHAMABIGiAmIABAAQAHAAAEgGQAEgFgBgHIhgltQgCgIgHgGQgGgGgIgBImzhVQAAAAgBAAQAAAAAAAAQgBABAAAAQAAAAAAABg");
	this.shape_117.setTransform(265.9496,51.5137,0.88,0.88);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#506C84","#4E6A81","#486379","#3F586C","#395063"],[0.016,0.294,0.569,0.843,1],-246.2,-63.8,231.5,64.5).s().p("AEGEHImigmQgRgBgNgLQgNgMgEgQIhdmkQgCgMAIgIQAIgIAMACIGxBUQAOACAKAKQAKAJAEAOIBfFtQAEAQgLANQgJALgPAAIgDAAg");
	this.shape_118.setTransform(265.9496,51.5137,0.88,0.88);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#30353F").s().p("AD2DpIl0gXQgPgBgMgKQgMgKgEgPIhrl9QgDgLAIgIQAHgIALACIGJBRQAMACAKAIQAJAJAEAMIBlE8QAEAOgJAMQgJALgNAAIgDAAgAkCjVIAAABIBqF+QADAJAHAGQAHAHAKAAIF1AXQAGAAADgEQADgGgBgEIhmk8QgEgQgRgCImJhRg");
	this.shape_119.setTransform(316.9477,58.3298,0.88,0.88);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#506C84","#4E6A81","#486379","#3F586C","#395063"],[0.016,0.294,0.569,0.843,1],-302.3,-78.3,175.4,49.9).s().p("AD2DpIl0gXQgPgBgMgKQgMgKgEgPIhrl9QgDgLAIgIQAHgIALACIGJBRQAMACAKAIQAJAJAEAMIBlE8QAEAOgJAMQgJALgNAAIgDAAg");
	this.shape_120.setTransform(316.9477,58.3298,0.88,0.88);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#30353F").s().p("AEVEsIoMgzQgcgDgSgUQgSgUAAgcIAAm9QAAgQAMgJQALgKAPADIGiBSQAaAFATASQASASAGAZIBhGcQAEAQgLAMQgKALgOAAIgDAAgAkhkVQgEAEAAAGIAAG9QAAAVAOAOQANAPAUACIIMA0IACAAQAGAAAEgFQAFgFgCgHIhgmcQgFgUgPgOQgPgPgUgEImihRIgDAAQgGAAgEAEg");
	this.shape_121.setTransform(211.5257,43.0079,0.88,0.88);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#506C84","#4E6A81","#486379","#3F586C","#395063"],[0.016,0.294,0.569,0.843,1],-186.3,-47.1,291.4,81.2).s().p("AEVEsIoMgzQgcgDgSgUQgSgUAAgcIAAm9QAAgQAMgJQALgKAPADIGiBSQAaAFATASQASASAGAZIBhGcQAEAQgLAMQgKALgOAAIgDAAg");
	this.shape_122.setTransform(211.5257,43.0079,0.88,0.88);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#FDF27A","#FEC02E"],[0,1],3.1,-17.6,2,-6.2).s().p("AMyBDQs8irg5gNQg4gNhPgLIhEgJQmXgTj0AeQj8AekxBcQg0APgpAhQgnAhgYAsQAyhiAZgPQAxggCEg0QCKg3BbgVQBrgaDEgXQDYgZBxAFQFaAQC4AiQCUAcPnDpIDfBAQDjBFAZAaIsxipg");
	this.shape_123.setTransform(186.9055,20.7545,0.88,0.88);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#30353F").s().p("AM4BFQsxihhKgRQg4gNhPgLIhEgJQmTgUj4AeQkAAfktBcQg0AOgpAiQgnAhgYAsQAxhiAagRQAxgeCEg0QCKg3BbgWQBsgZDDgXQDYgZBxAFQFeAQC0AiQCUAbPnDpIDDA1QDSA7BGAfIAAABQgPAAscifg");
	this.shape_124.setTransform(186.9131,21.4883,0.88,0.88);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B03538").s().p("AAAgBIABgBIABAEIgDABg");
	this.shape_125.setTransform(304.2941,155.2292,0.88,0.88);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B03538").s().p("AgBgBIADgBIgBAEIgBABg");
	this.shape_126.setTransform(250.0217,163.457,0.88,0.88);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B03538").s().p("AkyAsIJlhcIgBAFIplBcg");
	this.shape_127.setTransform(277.1689,159.3431,0.88,0.88);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B03538").s().p("AgGHJQANgnAIgxIAEAAIgBgFIgCABQAGgiABgeQABgxgJi6IgNjfQgCgwgNiCIgNh6IAAgBIAEABIAOB7QAMCBADAwQAGBeAGCBQAKC6gCAxQgBAvgOA8QgHAegGAVg");
	this.shape_128.setTransform(302.8071,122.9562,0.88,0.88);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B03538").s().p("AgIIWQAdhIgBk2QAAjygMiZQgHhTgMhvQgLhdgCgEIAAgBIAFABIAAAAQAEAXAJBRQAMBqAGBRQAJBqADC+QAEDvgMCEIgDABIABAEIABgBQgHBNgMAeg");
	this.shape_129.setTransform(248.7677,125.9261,0.88,0.88);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B03538").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_130.setTransform(171.99,178.7685,0.88,0.88);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#B03538").s().p("AmxI1QBKgHB+gSIAWgCQAxgFAWgMQAlgTASg0QAGgQAThNQAkiQAZhBQAvhzA1gGQBmgMDiAAQgLmcggisIAAAAIAGAAIgBABQAUBwAND3QAHB7ACBnIAAACIgCAAQjjAAhmAMQg0AGgtByQgZBAgjCPQgTBKgHAUQgSA1gmAUQgWAMgzAFIgXADIjIAZg");
	this.shape_131.setTransform(210.2468,128.808,0.88,0.88);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B03538").s().p("AgXKGIAeypQACg5AKgpIAAAAIAFAAQgLAogBA6IgcREIgCAAIAAAEIACAAIgCBhg");
	this.shape_132.setTransform(173.5739,130.6339,0.88,0.88);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BB923F").s().p("ABFEXQAAgygHgUIgNg5QghiOgUhPQgoiVgdg7IAEgCQAuBdBMFRIAOA5QAHAVgBAzg");
	this.shape_133.setTransform(294.3299,58.0141,0.88,0.88);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#BB923F").s().p("ABKFDIAAAAIABgBQAFgFABgUQABgTgDgRQgBgNgHgFIgIgEIgBAAIgBgCIgUhSQgVhggKhDQgJhFgriAIgrh0IAFgBIAqB0QArCBAKBEQAIA/AVBcIAVBZQAQAEADAVQACAOAAARQgBAZgGAIg");
	this.shape_134.setTransform(240.056,50.3803,0.88,0.88);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BB923F").s().p("ABKFFIAAAAIACgBQAKgFABgVQABgXgFgPQgFgSgMgCIgCAAIAAgCIgfisQgiixgTg1QgXhDgVguQgTgpgHgDIACgEQAKAEAWAzQATAqAWA+QAcBUA3E+QAPAEAGAYQADAPgBATQAAAUgLAIg");
	this.shape_135.setTransform(237.6832,49.9843,0.88,0.88);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BB923F").s().p("AgqFjIgBAAQAIgcANgWQAIgNARgVIAHgIQAWgbAFiZQADhZgDh2QgChVgIhRIgIhAIAEgBIAIBBQAJBRACBVQADB7gEBfQgGCQgWAbIgGAJQgQAUgJANQgMAVgIAcg");
	this.shape_136.setTransform(179.0576,42.5265,0.88,0.88);

	this.instance_10 = new lib.Path_35();
	this.instance_10.setTransform(87.6,107.1,0.88,0.88,0,0,0,77.2,41.1);
	this.instance_10.alpha = 0.5;

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#FDF27A","#FEC02E"],[0,1],-12.2,-86.9,1.8,24.1).s().p("A0eM3QghAAgYgWQgYgVgDghQgOiagwiEQhJjGiGhoQgugkg4gSQg4gRg7ACQAIggAIgJQAJgKAbgXQAcgcAYg2QBFilA1h0QBkjdAngZQAwgfCEg0QCKg3BcgWQBrgZDEgXQDXgZBxAFQFaAQC5AiQCTAbPoDqIDeBAQDkBGAZAZQAxAEADADIAKABQALACADAEQAEAFgDAHQgEAIgJgBIgCAAQAcBFAYBZQAjB/ALBuIAGABQAOABAKALQALALAAAOQABAPgGAKQgHALgPABIgDAAI+SiJIjgAKQiQAGiJApQiKAqh4BMQiVBehbB7QhxCYgTC8QgDAggYAWQgYAWggAAg");
	this.shape_137.setTransform(183.0615,72.453,0.88,0.88);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DE5D39").s().p("AkxGgQggAAgYgWQgYgWgDggQgPiZgyiIQhKjHiHhoIGoijIOFAhQhJADg1AJQgTAEgvALQjXA0iuCCQkLDHggE5QgDAhgYAWQgYAWggAAg");
	this.shape_138.setTransform(95.5202,109.0526,0.88,0.88);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#EC6C37","rgba(202,74,57,0)"],[0,1],0,23.7,0,-4).s().p("Aj0BfIAAiBIH9jqIAGBOQAHBsgHCgQgDA4gXAZQgPAQgiAKQgjAKmzBKQAagkAEiKg");
	this.shape_139.setTransform(326.3705,139.5437,0.88,0.88);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DE5D39").s().p("AJnAgIp8gpIlvgaQl5gagvgBQgwgCiKAHIiCAIQAdgRCUgFQBKgCBFABIeQCHIABAKg");
	this.shape_140.setTransform(246.6338,80.2208,0.88,0.88);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#EC6C37","rgba(202,74,57,0)"],[0,1],-1.8,-19.7,1.8,18.6).s().p("AjkDeIgwm7IIAAkIApGXg");
	this.shape_141.setTransform(325.1495,102.1448,0.88,0.88);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#F47B36","rgba(211,83,57,0)"],[0,1],-3.2,-34.4,2.6,27).s().p("AktilIgZjlIJeArQAVB3APD3QAIB7ADBkIpgCdQAEkUgYkcg");
	this.shape_142.setTransform(275.7389,113.6504,0.88,0.88);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#F48236","rgba(211,83,57,0)"],[0,1],-12.9,-52.6,4.4,29.3).s().p("AmLnnQABg6AKgoIMPA2IgOADQAWBxAKDtQAHB2AABfQjPAAhpAMQhAAIg9CpQghBagoCQQgVA9gmAWQgWAMg3AIIjJAZg");
	this.shape_143.setTransform(209.1029,125.3981,0.88,0.88);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#F48236","rgba(211,83,57,0)"],[0,1],-44.6,-3.6,6.6,4).s().p("AmLnnQABg6AKgoIMPA2IgOADQAWBxAKDtQAHB2AABfQjPAAhpAMQhAAIg9CpQghBagoCQQgVA9gmAWQgWAMg3AIIjJAZg");
	this.shape_144.setTransform(209.1029,125.3981,0.88,0.88);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#F49236","rgba(218,89,57,0)"],[0,1],96.1,-22.7,-6.4,5.8).s().p("AkaIVIpfg4QgEAAgEgDQgIgFAAgMIgNAAQgFAAgDgEQgEgEAAgFQAAgFADgDQAEgEAFAAIASgBQgGihgEiwQgGlfAPhGIAXhpQALg8AFgUIcBhLQgKAogCA6IgeQyIgcADg");
	this.shape_145.setTransform(93.5182,125.5521,0.88,0.88);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#F49236","rgba(218,89,57,0)"],[0,1],-1.6,-26,5.9,59.2).s().p("AkaIVIpfg4QgEAAgEgDQgIgFAAgMIgNAAQgFAAgDgEQgEgEAAgFQAAgFADgDQAEgEAFAAIASgBQgGihgEiwQgGlfAPhGIAXhpQALg8AFgUIcBhLQgKAogCA6IgeQyIgcADg");
	this.shape_146.setTransform(93.5182,125.5521,0.88,0.88);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#F47B36","#C84939"],[0,1],-29.8,-30.3,31.9,98.4).s().p("An1QrQgqgLgbggIgIgxIx+AAIAAApQgKAdgOACIgpgBIghgCQgFAAgHgEQgOgIgGgTIAAgvIgYiFQgEAAgEgDQgIgFAAgMIgMAAQgFAAgEgEQgEgEAAgFQAAgFAEgDQADgEAFAAIATgBQgHihgDiwQgHlgAQhGIAeiTQANhCALgNQAJgKAbgXQAcgdAYg1QBFilA1h0QBkjdAngZQAwggCEg0QCKg3BcgVQBrgaDEgXQDXgZBxAFQFaAQC5AiQCTAcPoDqIDeBAQDkBFAZAaQAxADADADQAKANAlB4QAwCbANCHIAQABQAXADACAhQABAQgGAKQgHAKgPABIgDAAIAZDgQAYD0AABmQgBCWgFAYQgMA1g9AHQhZALwpC8IAAgNQACgQAKgOQAKgQAGgvQAFgsgDgkQgFhRgQhAQgchwgyABIiKACQgQAAgUAJQgnASgSAxQgOAohEDcQhGDKguAIQguAIiCAUIh4ASIloAKIgIABQgNAAgRgEg");
	this.shape_147.setTransform(180.8781,94.2256,0.88,0.88);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#ECF7FD").s().p("AgqAhIgBhAQADhNAVgyQAZAGASAtQATAuAAA9QABA9gRAuQgRAtgZAHQgWgwgFhOg");
	this.shape_148.setTransform(328.1218,173.7307,0.88,0.88);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#B6CDD8","#373535"],[0,1],6.2,4.5,-4.9,-2.3).s().p("AgPCzQgQgYgKgtQgLgsgCg2IAAgWQABg2AJgtQAJgsAQgZIADAAQAcgBAUA1QAVA0ABBKQABBJgUA1QgTA1gbAAg");
	this.shape_149.setTransform(329.0455,173.7305,0.88,0.88);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#779DAE","#373535"],[0,1],7,-0.2,-7,0.3).s().p("AgvCQQgVg7gBhUQgBhTAUg8QAUg8AdAAQAcAAAVA7QAVA7ABBUQABBUgUA7QgUA8gdAAIAAAAQgcAAgVg7g");
	this.shape_150.setTransform(330.3854,173.6869,0.88,0.88);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#323132").s().p("Ag0CfQgXhBgBhdQgBhcAWhCQAVhCAgAAQAfgBAYBCQAXBBABBdQABBcgVBCQgWBCggAAIgBAAQgeAAgYhBg");
	this.shape_151.setTransform(331.0454,173.6867,0.88,0.88);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("Ag3CrQgahGgBhkQgBhjAXhHQAYhHAiAAQAigBAYBHQAaBGABBkQABBjgXBHQgYBHgjAAIAAAAQghAAgYhGg");
	this.shape_152.setTransform(331.5513,173.6867,0.88,0.88);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#323132").s().p("AhODfQgkhbgBiDQgCiBAhhdQAhhcAwgBQAwAAAjBbQAjBcABCDQACCBghBcQghBdgwABIgBAAQgugBgjhbg");
	this.shape_153.setTransform(330.0774,173.3127,0.88,0.88);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#474749").s().p("AhQEyQghgVgRgiQgrhbgCicQgCiFAhhfQAhhfAwgBIBngEQBtACAbAcIgcJmIicAEIgDABQglAAgggTg");
	this.shape_154.setTransform(317.4007,172.8309,0.88,0.88);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#34332E").s().p("ABHDLIivgMIAAlzICsgWIAACgQAAAMAIAHIAIAJQAMALABAQIAHCeQABAOgKAJQgJAJgMAAIgDAAg");
	this.shape_155.setTransform(340.3111,167.8389,0.88,0.88);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#ECF7FD").s().p("Ag4ArIAAhVQAGhpAcg/QAhAJAXA8QAXA8AABRQAABRgXA9QgXA8ghAJQgchAgGhog");
	this.shape_156.setTransform(222.1045,189.3942,0.88,0.88);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#B6CDD8","#373535"],[0,1],5.4,14.3,-6.4,-14.4).s().p("AgWDtQgWghgMg6QgNg8gChHIAAgdQAChHANg8QAMg6AWghIAEAAQAlAAAaBFQAbBFAABiQAABigbBGQgaBFglAAg");
	this.shape_157.setTransform(223.3145,189.3942,0.88,0.88);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#779DAE","#373535"],[0,1],9.1,0,-9.5,0).s().p("AhAC+QgbhPAAhvQAAhvAbhOQAbhPAlAAQAmAAAbBPQAbBOAABvQAABvgbBPQgbBPgmAAQglAAgbhPg");
	this.shape_158.setTransform(225.1184,189.3942,0.88,0.88);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#323132").s().p("AhHDSQgehXAAh7QAAh6AehXQAdhXAqAAQAqAAAeBXQAeBXAAB6QAAB7geBXQgeBXgqAAQgqAAgdhXg");
	this.shape_159.setTransform(225.9764,189.3722,0.88,0.88);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AhNDiQggheAAiEQAAiDAgheQAghdAtAAQAtAAAhBdQAgBeAACDQAACEggBeQghBdgtAAQgtAAgghdg");
	this.shape_160.setTransform(226.6364,189.3942,0.88,0.88);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#323132").s().p("AhsEnQgth7AAisQAAisAth6QAuh6A+ABQBAgBAtB6QAtB6AACsQAACsgtB7QgtB5hAAAQg+AAguh5g");
	this.shape_161.setTransform(224.7004,188.8442,0.88,0.88);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#474749").s().p("AhMGdQgigTgUgjQghg6gUhaQgUhfAAhwQAAiwAth9QAth+BAAAIBpgGQBxACAjAmIgvMsIieAHIgGAAQglAAgggRg");
	this.shape_162.setTransform(210.8628,188.2552,0.88,0.88);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2E2F2E").s().p("AiUAmQA6i+AMgjQASgxAngSQAUgKAPABICLgDQAxAAAcBwQAQBAAGBRQACAigFAtQgFAugLARQgJAOgCAQIgBANIACAAIALgDIAGALQAGAMABAKQACASgHAGQgFADnoAiQAqguA9i3g");
	this.shape_163.setTransform(222.2072,158.661,0.88,0.88);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2E2F2E").s().p("ACEB9IgCgHIjwAAIoTgTIg+hWIVniPIAFANQADAQgHAPQgFAPgdAPIgdALIADAMQADAOADAHQAFALAoABIAgAzIohAqIAAASQgCATgKABIgEAAQgIAAgDgGg");
	this.shape_164.setTransform(245.8418,172.8617,0.88,0.88);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#313032").s().p("AKwBYIgGgUIgTABIAAgZQgNAAgLgJIgJgKIgUACQABALgGAMQgLAWghAAQghAAgPgbIgIgcQgKAIgSAIQgmAPgsAAQgsgBgygQIgpgQIiAAAQgBADgGAFQgKAHgUABQgTABgTgKIgPgKQg4AJiXAQQiAANgVABQgGABgGADIgMAGQgHADglgCQgkgDgBgCQgBgEABgHQACgJAEAAQAEAAAAgHQgBgGgDgHQgDgFgjAFQgiAGgFAFQgEAEg8ADQg7ADgHgEQgGgEgOgVIgMgTIh5AAQgEAagIAOQgJAQgNgIQgLgGAJg4IALg4IYVgHIAAAoQACAeAbAGQANAEANgDQgBBDABADQABACgjgCQgEAXgtAFg");
	this.shape_165.setTransform(122.5927,189.3282,0.88,0.88);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#323132").s().p("AhPDAQglhNgEhwQgDhuAhhPQAhhRAygBQAxgBAlBNQAmBOAEBvQADBvghBQQghBPgyACIgCAAQgvAAgmhNg");
	this.shape_166.setTransform(87.9084,184.9284,0.88,0.88);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#323132").s().p("AiCEmQhFh/gBinQgBinBDh/QBAh5BPAAQBOgBA4B6QA5B5ABCtQABCrg2B7Qg2B6hOAAIgCAAQhOAAhCh6g");
	this.shape_167.setTransform(87.1158,184.5986,0.88,0.88);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#474749").s().p("AgMGuQgugBgngXQgogXgWgoQgig5gShXQgThZAAhtQAAivAwh+QAwh8BEgCIABgBICAgFQCHABAhAoIhaM4g");
	this.shape_168.setTransform(75.9848,183.0364,0.88,0.88);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#464C51","#474E53","#556169","#61757E","#6A8592","#7192A0","#769AAA","#779DAE","#373535"],[0,0.004,0.043,0.086,0.133,0.184,0.243,0.333,1],0.6,-2.1,-0.4,1.5).s().p("AAcAXIg+gPQgHgBgDgGQgDgEABgHQABgGAGgEQAGgDAGABIA+APQAHABADAGQAEAFgCAGQgBAHgGADQgEACgEAAIgEAAg");
	this.shape_169.setTransform(262.1534,19.7352,0.88,0.88);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#464C51","#474E53","#556169","#61757E","#6A8592","#7192A0","#769AAA","#779DAE","#373535"],[0,0.004,0.043,0.086,0.133,0.184,0.243,0.333,1],0.6,-2.5,-0.3,1.5).s().p("AAaAbIg8gMQgIgCgFgIQgFgGACgJQACgIAHgGQAIgEAIABIA8ANQAIADAFAHQAFAHgCAIQgCAIgHAGQgGADgFAAIgFgBg");
	this.shape_170.setTransform(197.9492,4.6216,0.88,0.88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.instance_10},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.instance_5},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_4},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.instance_3},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_2},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,352.5,226.1);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// Layer_1
	this.instance = new lib.Symbol92("synched",0);
	this.instance.setTransform(85,-71,0.64,0.64,0,0,0,85,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},28).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-125.4,139.4,125.4);


(lib.Symbol88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol90("synched",0);
	this.instance.setTransform(-191.85,9.05,0.64,0.64,0,0,0,148.1,147);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.3516},22).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.6,-85,286.6,188.1);


// stage content:
(lib.tran19 = function(mode,startPosition,loop) {
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
		/* fscommand("fullscreen", "true");*/
		
		createjs.Sound.play("intro");
		//this.stop();
		
		this.b1.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		function fl_MouseClickHandler_1() {
			this.wrong1.play();
			var my1=createjs.Sound.createInstance("wro");
			
		this.my1;
		my1.play();
			// End your custom code
		}
		this.b2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			this.correct.play();
			//this.wrong1.play();
			var my2=createjs.Sound.createInstance("yes");
			
		this.my2;
		my2.play();
			// End your custom code
		}
		
		this.b3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			this.correct1.play();
			//this.wrong2.play();
			var my3=createjs.Sound.createInstance("yes");
			
		this.my3;
		my3.play();
			// End your custom code
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.correct1.play();
			this.wrong2.play();
			var my4=createjs.Sound.createInstance("wro");
			
		this.my4;
		my4.play();
			// End your custom code
		}
		this.mysou.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12() {
			
			
			var my12=createjs.Sound.createInstance("intro");
		this.my12;
		my12.play();
			
		}
		/* var count:Number = new Number();
		 var ct= new Number;
		_root.attachMovie("brush","brush",10);
		fscommand("fullscreen", "true");*/
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.mysou = new lib.Symbol6();
	this.mysou.name = "mysou";
	this.mysou.setTransform(1183.6,28.15,1.821,2.2072);
	new cjs.ButtonHelper(this.mysou, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mysou).wait(1));

	// Layer_3
	this.instance = new lib.BRIGHTEDGELOGO();
	this.instance.setTransform(1424,56,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_8
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
	this.shape_32.setTransform(165.3121,110.7745,0.64,0.64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_33.setTransform(165.2993,110.7265,0.64,0.64);

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
	this.shape_41.setTransform(161.8268,101.9465,0.64,0.64);

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
	this.shape_73.setTransform(274.7329,95.8019,0.64,0.64);

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
	this.shape_92.setTransform(275.4217,101.4147,0.64,0.64);

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
	this.shape_96.setTransform(276.0894,108.5635,0.64,0.64);

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
	this.shape_102.setTransform(271.65,107.4232,0.64,0.64);

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
	this.shape_110.setTransform(246.4096,99.8175,0.64,0.64);

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
	this.shape_129.setTransform(198.6031,83.7831,0.64,0.64);

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
	this.shape_146.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSg/IAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAgAgShGg");
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
	this.shape_159.setTransform(164.1577,101.3614,0.64,0.64);

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
	this.shape_168.setTransform(193.4829,106.6946,0.64,0.64);

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
	this.shape_176.setTransform(202.1729,93.5482,0.64,0.64);

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
	this.shape_188.setTransform(157.7078,87.991,0.64,0.64);

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
	this.shape_200.setTransform(153.7399,121.6222,0.64,0.64);

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
	this.shape_245.setTransform(275.8942,106.3106,0.64,0.64);

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
	this.shape_250.setTransform(271.9892,107.743,0.64,0.64);

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
	this.shape_273.setTransform(214.0584,109.0465,0.64,0.64);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.b4 = new lib.Symbol96();
	this.b4.name = "b4";
	this.b4.setTransform(1351.5,802.35,1,1,0,0,0,157.5,157.3);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.b3 = new lib.Symbol95();
	this.b3.name = "b3";
	this.b3.setTransform(417.25,774.7,1,1,0,0,0,232.2,109.8);
	new cjs.ButtonHelper(this.b3, 0, 1, 1);

	this.b2 = new lib.Symbol94();
	this.b2.name = "b2";
	this.b2.setTransform(1512.25,346.7,1,1,0,0,0,176.3,113);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol93();
	this.b1.name = "b1";
	this.b1.setTransform(410.95,364.45,1,1,0,0,0,255.9,139.6);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.wrong1 = new lib.Symbol89();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(633.3,623.5,1,1,0,0,0,85,85);

	this.correct1 = new lib.Symbol88();
	this.correct1.name = "correct1";
	this.correct1.setTransform(843.7,1034.05,0.8649,0.7822,0,0,0,148,147);

	this.wrong2 = new lib.Symbol89();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1609,1029.25,1,1,0,0,0,85,85);

	this.correct = new lib.Symbol88();
	this.correct.name = "correct";
	this.correct.setTransform(1915.9,605.65,0.8649,0.7822,0,0,0,148,147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correct},{t:this.wrong2},{t:this.correct1},{t:this.wrong1},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol97();
	this.instance_1.setTransform(-260.1,138,1,1,0,0,0,4,54);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgVATQgKgJAAgKQAAgJAKgIQAJgJAMAAQAOAAAJAIQAJAIAAAKQAAALgJAIQgKAIgNAAQgMAAgJgIg");
	this.shape_306.setTransform(1174.2,129.225);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgTAXgBQAKAAAQAGQARAGAJAAQAnAAAAgQQAAgKgbgNQgogRgKgHQgcgTAAgcQAAgnApgOQAZgIAwAAQAUAAAKAFQANAHgBASQAAAkgSAAQgUgBgEgQQgIgBgIAAQguAAAAANQAAAHAbAOQAnARAOAKQAcAUAAAaQAAAhgfASQgaANgjAAQgaAAgVgIg");
	this.shape_307.setTransform(1155.65,120);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFARAAQAZAAATgLQAQgJAKgBQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_308.setTransform(1134.75,120.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_309.setTransform(1118.2,114.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_310.setTransform(1102.275,120.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgYCOQgIgIAAgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAJAHQAHAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQAAALgHAIQgIAHgLAAQgLAAgIgHgAgRhjQgJgIgBgMQABgNAJgIQAJgIALAAQANAAAJAIQAJAIAAANQAAAMgJAIQgJAIgNAAQgLAAgJgIg");
	this.shape_311.setTransform(1087.25,115.525);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAtCPQgEgQgEgcQgDgcgBgSIABgPIAAgOIAAgRQgCgKgIAAQgWAAgQATQgJAKgQAcQAABHgHAOQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgLQACgEABgxQgCgmAChbIABgHIAAgeIgBgSIgCgSQgBgLAJgHQAIgHALgBQAUABAGAUQAEAMAAAYIgBAoIgBAmQANgOARgHQAPgHATAAQAiAAAOATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAAMgJAGQgHAIgMgBQgUABgGgUg");
	this.shape_312.setTransform(1070,114.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAXAKQAdAPAAAeQAAAVgYASQgLAHghANIhBAdQAJALAOAFQANAFAQAAQAbAAASgLQAQgJAKgBQAUABAAATQAAAXghAOQgbAMgfAAQgugBgdgWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_313.setTransform(1046.65,120.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgcBXIhBidQgCgGgBgFQAAgLAJgHQAIgHALAAQARAAAIAPQAKAYAhBVQAJgUASgtIARgrQAIgPARAAQAKAAAJAHQAJAHAAALQgBAHggBHQgZA4gPAfQgBAJgHAGQgHAHgJAAQgVAAgHgUg");
	this.shape_314.setTransform(1026.4,119.95);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_315.setTransform(989.6,116.825);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhMBmQgHgIAAgKIAAh/IAAgSIABgTQAAgKAHgIQAGgHAMAAQAWAAAEAXQAigaApAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgGgHg");
	this.shape_316.setTransform(970.9,120.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALAKAOAAQAQAAAMgLQAOgNABgYQADg+gkABQgXAAgOAVg");
	this.shape_317.setTransform(950.1458,120.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AhQCdQgJgIABgLIAAhJIAAhMQgBgrgBgeIgEgnQAAgPAIgMQAIgNAPAAQAKAAAIAIQAHAGAAALIAAACQANgIANgDQAMgEANAAQAuAAAVAnQAOAcAAAuQAAApgXAdQgbAegsAAQgPAAgTgEIAABQQAAALgIAIQgHAHgMAAQgMAAgHgHgAgLhcQgMAFgNAMQACAoABAnQARAGAQAAQAVAAAKgNQAKgNAAgWQAAgagDgKQgFgZgUAAQgMAAgMAHg");
	this.shape_318.setTransform(929.45,124.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgTAXgBQAKAAARAGQAQAGAKAAQAmAAAAgQQAAgKgbgNQgogRgKgHQgcgTAAgcQAAgnApgOQAZgIAwAAQAUAAAKAFQANAHgBASQAAAkgSAAQgUgBgEgQQgHgBgJAAQguAAAAANQAAAHAbAOQAnARAOAKQAcAUAAAaQAAAhgfASQgZANgkAAQgaAAgVgIg");
	this.shape_319.setTransform(908.5,120);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_320.setTransform(888.775,119.875);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_321.setTransform(867.125,120.175);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IAAgSIABgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAigaAqAAQAnAAAAA0IAAAMQgCAegaAAQgYAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgHgHg");
	this.shape_322.setTransform(846.65,120.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgSCOQgJgIAAgLIABgIIABgJIgBgbIgCgbQAAgbgEgrQgFg0AAgTIgKAAQgsAAgagGQgVgGAAgUQAAgKAHgIQAIgKANABIAfAEQAUACAMAAIAjgBIAjAAIAsACIAtACQAMAAAIAIQAHAHAAAMQAAALgHAHQgIAIgMAAQgPAAghgCIgvgCIAFBPQAEAyAAAdIACAUIABATQAAAPgGAMQgIAPgPAAQgKAAgIgHg");
	this.shape_323.setTransform(822.925,115.1202);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_324.setTransform(779.475,114.725);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_325.setTransform(757.075,120.175);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgqAZgiQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAgQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALAKAOAAQAQAAAMgLQAOgNABgYQADg+gkABQgXAAgOAVg");
	this.shape_326.setTransform(735.0458,120.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AhqCSQgIgIAAgLIABgsIAAgsIAAicQAAgNAIgKQAKgOASACIAwADQAcAEASAKQBTAqAAA+QAAAZgRATQgSATgjAOQA0AdAaAeQAHAIAAAJQAAALgIAIQgIAIgMAAQgKAAgJgIQg7g4hGgVIACA/QAAALgIAIQgIAIgLAAQgMAAgIgIgAg8AGIAJAAQAwAAAWgLQAKgFAIgJQAIgIAAgEQAAgWgcgVQgZgTgdgDIgXgBg");
	this.shape_327.setTransform(712.425,115.1925);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdglAwgBQAiABAWAKQAeAPAAAeQAAAVgYASQgLAHghANIhBAdQAKALANAFQANAFAQAAQAaAAASgLQARgJAJgBQAVABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgIAYIAsgTQAZgMARgKQgOgIgVAAQgRAAgNANg");
	this.shape_328.setTransform(670.4,120.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAtCPQgEgQgEgcQgDgcgBgSIABgPIAAgOIAAgRQgCgKgIAAQgWAAgQATQgJAKgQAcQAABHgHAOQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgLQABgEACgxQgCgmAChbIAAgHIABgeIgBgSIgCgSQgBgLAJgHQAIgHALgBQAUABAGAUQAEAMAAAYIgBAoIgBAmQANgOARgHQAPgHATAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAAMgJAGQgHAIgMgBQgUABgGgUg");
	this.shape_329.setTransform(648.35,114.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgIAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_330.setTransform(627.05,116.825);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAtCRQgKgRgSgZIgfgnIgaARQgCAbAAAZQABAMgJAHQgHAIgLAAQgcgBAAggIACguQACggAAgPIAChAIAAhAIAAgUIgCgTQAAgMAIgHQAIgHALgBQAMABAIAHQAHAHAAAMIABATIABAVIgBA3IgBA2QAbgUA1g2QAJgJALAAQAKAAAJAIQAIAIAAALQAAAIgHAJQgYAZgfAcIAoA0QAeAoAAANQAAALgJAHQgJAIgLAAQgOAAgJgQg");
	this.shape_331.setTransform(590.15,114.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_332.setTransform(567.975,120.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_333.setTransform(552.95,115.525);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_334.setTransform(541.2,114.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AhXB3QgcgegBgqQAAhBA5hEQAxg6AyAAIAPAAIANADQAIgJANAAQATAAAFAXQADAQAAAWQABAKgHAIQgHALgOAAQgSgBgIgSQgEgJgEgCQgCgBgNAAQgZAAgfAnQgtA0AAAvQAAAVAOAPQAOAPAVAAQARABAVgLQAGgDAXgQQAPgKAJAAQALAAAJAIQAHAJAAAKQAAALgKAJQg2Atg2AAQgtAAgeggg");
	this.shape_335.setTransform(523.85,115.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.instance_1}]}).wait(1));

	// Layer_2
	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("EiH4BMcMAAAiY3MEPxAAAMAAACY3g");
	this.shape_336.setTransform(953.275,545.625);

	this.instance_2 = new lib.Symbol69();
	this.instance_2.setTransform(905,496.15,1,1,0,0,0,65.3,287.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Symbol69(), 3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#292929").ss(1,1,1).p("AgsCbIBZk1");
	this.shape_337.setTransform(904.7,767.675);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(1,1,1).p("AKAGkIz/AAIAAtHIT/AAg");
	this.shape_338.setTransform(1652.425,286.05);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("Ap/GkIAAtHIT/AAIAANHg");
	this.shape_339.setTransform(1652.425,286.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.instance_2},{t:this.shape_336}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1043.6,588,780.7,506.4000000000001);
// library properties:
lib.properties = {
	id: 'AA8A2A8B067054439FA4FABB92895DE9',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/right.jpg", id:"right"},
		{src:"images/sound.png", id:"sound"},
		{src:"images/wrong.jpg", id:"wrong"},
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
an.compositions['AA8A2A8B067054439FA4FABB92895DE9'] = {
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