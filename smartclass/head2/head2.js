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
	this.shape.graphics.f().s("#2D2D2D").p("AMsveQhuhjhdgMQhdgNh8AnQhfAdhrA4IgkAVQhAgthZgGQgygEhkAKIgjAEQgtAEhDgFIgZgBQhlhdiNgPQhFgGhEAOQhEAOg5AiQhHAphPCXQguBZhJC4IgBADQgWA1gQAmQgXA3gFAPQgHAVAEAGQADAFAMAEQAFACAUAFQAcAHAPAHQAZAJAPAPQAUAVASAeQAKARAIAJQALAOARALQAYAQAjAMQASAGADAFQADAEADAZQADAaAEANQAFAVALAJQAIAHAhAUQAvAZAKARIAGAJQASAfAOAQQAZAfAeAQQgjBLgSBDQgVBMAHApQAIAxAXAlQAVAiAYALQAJAEAFAAQAGAAAEgDQAJgGgCgPQgBgKgIgaQgJgfgDgQQgFgcAFgVQAIghArhJQAthLAlgoIAIA4QALBAAsCrQAZBjAGAYQATBYAFA6QAJBrgZBAQgQArggAhQgTAVgmAdQgdAWgKALQgTATgGAVQgHAYADAXQADAXAMASQAWAeAoABIACAAQAbAAAbgNQAXgLARgRQASgSgBgKQAAgIgLgPIgFgFQA1gXAhgoQAhgoAlhXQAihPAlixQAkitAGhlQAQgPANgNQA3g+AnhTQAlhSAIhMQAYgBAegLQAigMAhgVQAZBeAlBDQAtBSAuAAIACAAQAwgDA6geQA1gbAHgTQAEgLABgfIABgLIAGAEQAPAIAIADQAQAGANgEQAigKBCgkQBRgqAJgZIAHgTQAJgaAFgKQAIgSAHgBIAJgCQAbgEARgHQAfgNAUgaQARgWAWg0QAVgxAPgLQAFgFAfgSQAngWASgMQAegWAIgTQANggAIgNQAHgNAIgFQADgCAQgDQAQgEAFgBQAKgDADgGQACgFgCgFQhMiUhqiPQhYh3hUhLg");
	this.shape.setTransform(42.805,173.2077,0.8908,0.8908);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnzRjQgogBgWgeQgMgSgDgXQgDgXAHgYQAGgVATgTQAKgLAdgWQAmgdATgVQAgghAQgrQAZhAgJhrQgFg6gThYIgfh7QgsirgLhAIgIg4QglAogtBLQgrBJgIAhQgFAVAFAcQADAQAJAfQAIAaABAKQACAPgJAGQgEADgGAAQgFAAgJgEQgYgLgVgiQgXglgIgxQgHgpAVhMQAShDAjhLQgegQgZgfQgOgQgSgfIgGgJQgKgRgvgZQghgUgIgHQgLgJgFgVQgEgNgDgaQgDgZgDgEQgDgFgSgGQgjgMgYgQQgRgLgLgOQgIgJgKgRQgSgegUgVQgPgPgZgJQgPgHgcgHIgZgHQgMgEgDgFQgEgGAHgVQAFgPAXg3IAmhbIABgDQBJi4AuhZQBPiXBHgpQA5giBEgOQBEgOBFAGQCNAPBlBdIAZABQBDAFAtgEIAjgEQBkgKAyAEQBZAGBAAtIAkgVQBrg4BfgdQB8gnBdANQBdAMBuBjQBUBLBYB3QBqCPBMCUQACAFgCAFQgDAGgKADIgVAFQgQADgDACQgIAFgHANQgIANgNAgQgIATgeAWQgSAMgnAWQgfASgFAFQgPALgVAxQgWA0gRAWQgUAagfANQgRAHgbAEIgJACQgHABgIASQgFAKgJAaIgHATQgJAZhRAqQhCAkgiAKQgNAEgQgGQgIgDgPgIIgGgEIgBALQgBAfgEALQgHATg1AbQg6AegwADIgCAAQguAAgthSQglhDgZheQghAVgiAMQgeALgYABQgIBMglBSQgnBTg3A+IgdAcQgGBlgkCtQglCxgiBPQglBXghAoQghAog1AXIAFAFQALAPAAAIQABAKgSASQgRARgXALQgbANgbAAg");
	this.shape_1.setTransform(42.805,173.2077,0.8908,0.8908);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-62.1,72.2,209.79999999999998,202.60000000000002), null);


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
	this.shape.graphics.f().s("#2D2D2D").p("AJukZQgRg3gygQQgFgCgKgCQgtgIgzAXQgWhOhAhAIgCgFQAPACAQgGQAQgHAJgLIAEgFIgFADQgPAHgWgHQgdgJgWgcQgXgegTgRQghgegogNQgQgFgVgDQgwgGgoAYQgeARgfAmQgIgdgcgbQgggegsgOQgOgFgSgDQghgGgkAIQgUAEglANQgoAPgRgBIgCAAIABACQAHAPAuAPQg6AQgzBIQgYgiglgMQgLgEgRgCQgdgCgbANIgGADIgMAIIgFAEIgCACQgXAUgOAfQgNAegDAjQgCArAYAqQAXAnAkAWQg1BDg9AaIgCABIACABQATAIAkgGQgEAKgLAVQgTAjgHAYQgOApgBAxQAAAbAIAjQAFATAOArQAUA5ADAZQAFAqgVAaIgCACIAEgBQALgCAOgQQAQgSAIgaQAAAgANAZQAIARAZAfQAVAZAHALQAiAvAOAkQATAygPAkIgBAEIADgCQAKgHALgRQAKgPAGgQQAHArAUAkQAMAUAaAiQAWAbAIAOQAOAYAFAZIAAACIACgCQAZgaAsgXQAbgOA2gWQAlgPAPgHQAagMANgLQgJAZACAeIAAAEIACgDQAegtCQgtQBigeBMg7QA9gTAqggQBHg1AchYQAZhLgKhOQgHg8gghTQAQgDAPgIQA8gdAThCQATg+gQgzg");
	this.shape.setTransform(-97.7055,62.3919,1.1906,1.1906);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkDKpQgFgZgOgYQgIgOgWgbQgaghgMgVQgUgkgHgqQgGAQgKAPQgLAQgKAHIgDACIABgDQAPglgTgyQgOgkgigvQgHgLgVgZQgZgfgIgQQgNgaAAgfQgIAagQASQgOAPgLADIgEABIACgDQAVgZgFgqQgDgZgUg5QgOgrgFgUQgIgjAAgaQABgyAOgpQAHgXATgkQALgVAEgKQgkAHgTgIIgCgBIACgBQA9gbA1hCQgkgXgXgmQgYgqACgrQADgkANgeQAOgeAXgUIACgCIAFgEIAMgIIAGgDQAbgNAdACQARABALAEQAlAMAYAjQAzhJA6gQQgugOgHgQIgBgBIACAAQARAAAogOQAlgNAUgEQAkgIAhAFQASADAOAFQAsAOAgAeQAcAcAIAcQAfgmAegRQAogXAwAGQAVACAQAGQAoAMAhAfQATARAXAdQAWAcAdAKQAWAHAPgIIAFgCIgEAEQgJAMgQAGQgQAGgPgBIACAFQBAA/AWBPQAzgYAtAIIAPAEQAyAQARA3QAQA0gTA9QgTBDg8AdQgPAHgQAEQAgBTAHA7QAKBOgZBMQgcBYhHA0QgqAgg9ATQhMA7hiAfQiQAsgeAtIgCADIAAgDQgCgeAJgaQgNALgaAMIg0AXQg2AWgbAOQgsAXgZAaIgCABg");
	this.shape_1.setTransform(-97.2017,62.1073,1.1906,1.1906);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy3, new cjs.Rectangle(-173.7,-20.2,152.1,164.7), null);


(lib.Slotcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").p("Aj+l3QgxAPgtAcIgGADIAAACQAABjAVAXQAiAlAPAjQAWAxgJA4QgQBmAqBBQAAAyAUAuQAgBLBNAnQAeARAtAVIA7AfIALAHIABABIARALIAGAHIADACIAFAGIAEAGIADAGQAOAiATAZQAeAlAhADIAGAAQAUAAARgLQAQgKAJgQIACgFQACgDACgHIADAAIABAAQASACANgEQAPgGAKgSQAPgdADgmIAAgCQASgJALgRQALgQgBgQQgBgQgMgOQgLgOgPgDIgBgEIAAgBQgQhFgmg+IgHgLIgBgBIgLgRIgBgBIgJgNQgRgYgGgLQgKgRgBgNQgBgKABgoQABglgBgTQgCgggKgWQAXAPAKATIADAHIAEgHQAMgVAFgfQAEgcgGgMQgGgPglgUQAWAEALAHIAFAEIABgGQAIgjgOgnQgJgYgOgTQgOgVgJgBQgJgBgYAKQAGgIAMgMIACgCIgCgDQgCgGgIgIQALg2ACgqQADg7gTgHQgKgEgLAJQgGAFgMARQgTAZgLAKQgbAYgOASQgIAAgGAAIgBAAIgBABQgPAMgQAcQACgeAMgSIADgFIgGgBQgZgHgmAAQgjABgcAGQgcg6gmgtQgpgwgVAGQgJADgBAPQAAAJAEAaQAGArgDATIAAABQgGApgCAeg");
	this.shape.setTransform(29.8265,95.2651,1.2839,1.2839);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACkIzQghgDgeglQgTgZgOgiIgDgGIgEgGIgFgGIgDgCIgGgHIgRgLIgBgBIgLgHIg7gfQgtgVgegRQhNgngghLQgUguAAgyQgqhBAQhmQAJg4gWgxQgPgjgiglQgVgXAAhjIAAgCIAGgDQAtgcAxgPQACgeAGgpIAAgBQADgTgGgrQgEgaAAgJQABgPAJgDQAVgGApAwQAmAtAcA6QAcgGAjgBQAmAAAZAHIAGABIgDAFQgMASgCAeQAQgcAPgMIABgBIABAAIAOAAQAOgSAbgYQALgKATgZQAMgRAGgFQALgJAKAEQATAHgDA7QgCAqgLA2QAIAIACAGIACADIgCACQgMAMgGAIQAYgKAJABQAJABAOAVQAOATAJAYQAOAngIAjIgBAGIgFgEQgLgHgWgEQAlAUAGAPQAGAMgEAcQgFAfgMAVIgEAHIgDgHQgKgTgXgPQAKAWACAgQABATgBAlQgBAoABAKQABANAKARQAGALARAYIAJANIABABIALARIABABIAHALQAmA+AQBFIAAABIABAEQAPADALAOQAMAOABAQQABAQgLAQQgLARgSAJIAAACQgDAmgPAdQgKASgPAGQgNAEgSgCIgBAAIgDAAIgEAKIgCAFQgJAQgQAKQgRALgUAAg");
	this.shape_1.setTransform(29.8265,95.2651,1.2839,1.2839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy, new cjs.Rectangle(-16.7,22,93.3,146.6), null);


(lib.Path_120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#686868","#5E5E5E","#4E4F4F","#3D3D3D","#2D2D2D"],[0,0.11,0.286,0.51,0.761,1],17,-1.1,-5.3,9.5).s().p("AhpBcIg8gvQAjh1BKhHQBLACBHAwQAuAeAeAlQgcAcgPAaQgmALg6AlQg9AogSAcQgUgYghgcg");
	this.shape.setTransform(16.625,14.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_120, new cjs.Rectangle(0,0,33.3,28.9), null);


(lib.Path_119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],3.5,0,-3.5,0).s().p("AgigJQAfgcATASQARAPACAfQgagdgrgHg");
	this.shape.setTransform(3.5,2.6597);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_119, new cjs.Rectangle(0,0,7,5.4), null);


(lib.Path_118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#85D1E0","#7EBCC9","#6C969D","#516365","#343636","#2D2D2D"],[0,0.102,0.298,0.573,0.902,1],1.9,-6,-1.9,5.9).s().p("AgTBAQgTgHgIgXQgIgXAJgZQAIgbATgOQATgOATAGQATAHAIAXQAIAXgIAZQgIAbgUAOQgOAKgMAAQgGAAgGgCg");
	this.shape.setTransform(5.0875,6.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_118, new cjs.Rectangle(0,0,10.2,13.2), null);


(lib.Path_117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],7.4,0,-7.4,0).s().p("AgkAGQgRgLgUgNQAJggAIgZQAuAkAWATQAlAdAZAcQgUATgRAUQglgpgkgdg");
	this.shape.setTransform(7.425,7.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_117, new cjs.Rectangle(0,0,14.9,15.1), null);


(lib.Path_116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],5.1,8.8,-9.8,-3.4).s().p("AhABaIgegBQgdiRANg8QAIgJAMgFQAOgGAagFQAnASATBBIAaBeQARAPAXALQAbAMAOAKQgIAZgJAgQhPgwhTgDg");
	this.shape.setTransform(11.5345,14.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_116, new cjs.Rectangle(0,0,23.1,28.3), null);


(lib.Path_115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],2.9,1.7,-3.2,-1.1).s().p("AgSAVQgVgZgIgJQAQgTAVgUQAlArAVAvQgYAHgTAIQgEgHgTgZg");
	this.shape.setTransform(4.825,5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_115, new cjs.Rectangle(0,0,9.7,10.5), null);


(lib.Path_114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#686868","#5E5E5E","#4E4F4F","#3D3D3D","#2D2D2D"],[0,0.11,0.286,0.51,0.761,1],-3.2,-8.7,1.8,8.5).s().p("AgBARQg/gVg9AAQAAgngQguQAmgOA4gCQAdgCAnACQAQACAmAZQAqAaATAWQALARgIAxQgHAqgLAdQglg7hVgfg");
	this.shape.setTransform(14.2313,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_114, new cjs.Rectangle(0,0,28.5,21.4), null);


(lib.Path_113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgeDPQgNgugDgqQgCgvgOgiQgMgfgMgCQgEAAgRAIQgQAIgHgEQgYgMAUhTQAMg2gRg0QgPgvgkgjQAoAKCTB/QBIA/BCA+QATAKAWA0QAVAygJAFQgFADgOgMQgPgMgEABQgDABANBCQANBBgTAGQgVAHgxhAQgrg4gZg1QACAbAKBdQAEBQgWACIgCAAQgVAAgRg8g");
	this.shape.setTransform(19.085,26.7281);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_113, new cjs.Rectangle(0,0,38.2,53.5), null);


(lib.Path_112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],8.5,12.7,-7.8,-15.3).s().p("Ah5BaQAQggAcgeQAUgYAlgeQATgQAwhCQAfgpAWAHQAPAGAGAcQgHgIgLgBQgMgCgIAJQgRAQgKAgQgLAjgJALQgLAPgYATIgnAjQglAjA1A4Qg4gcgrgag");
	this.shape.setTransform(12.15,14.4426);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_112, new cjs.Rectangle(0,0.1,24.3,28.799999999999997), null);


(lib.Path_111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],25.4,0,-25.3,0).s().p("AAbCdQgmgGgqgdQgigXgMgTQgFgKgQgWIgPgTQg/g3gWgeQglgyAFg2QAEADALgCQAQgBAFAAQgJAYAQAhQAOAdAbAdQAOANAbAUQAZAQALAOQAFAHAWAoQANAZASAOQAaAUAgAEQAhAEATgQQgMgEgKgJQgGgFgKgMQAXAJAZgFQAXgEAPgNQAVgUAKguIAMhNIAFAKQAEAGAAADQASAEAWgQQATgPASgZQgEAagSAYQgUAagdAOQgFBJgeA5QgQAfghAJQgPAEgSAAQgSAAgVgEg");
	this.shape.setTransform(25.3394,16.0752);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_111, new cjs.Rectangle(0,0,50.7,32.2), null);


(lib.Path_110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhzAmQgOg4AkgwQAngrA+gGQA/gHAxAjQgygFgsALQguALgbAaQgcAcgFAkQgGAlAOA9QghgngKgpg");
	this.shape.setTransform(11.989,11.7497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_110, new cjs.Rectangle(0,0,24,23.5), null);


(lib.Path_109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AiQAvQgRhGAsg8QAxg2BOgIQBPgIA9AtQg/gHg3ANQg6AOghAhQgjAjgHAtQgHAuASBMQgqgvgMg1g");
	this.shape.setTransform(14.99,14.664);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_109, new cjs.Rectangle(0,0,30,29.4), null);


(lib.Path_108 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgMASIgVg6QgOglgSgeQBEAgAkA/QAkA9gMA7Qg0gcgXg+g");
	this.shape.setTransform(6.5861,10.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_108, new cjs.Rectangle(0,0,13.2,21.6), null);


(lib.Path_107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgnAPQgmg8ALg7QA0AaAaA9IAXA5QAQAlASAcQhFgdgng9g");
	this.shape.setTransform(6.9113,10.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_107, new cjs.Rectangle(0,0,13.9,21.1), null);


(lib.Path_106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AB3FyQgyj2gdhFQgchEg6hYQgshBg0g+QglgugVhCQgTg+ADgzQAggWBFgeQBJghAlgHQASAQAQAlQAgBKgPBnQgWBLAxCGQAMAiA+CEQAtBhATC/QATDBglAFIgCAAQgkAAgkiwg");
	this.shape.setTransform(21.7745,54.6317);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_106, new cjs.Rectangle(0,0,43.6,109.3), null);


(lib.Path_105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2E1E1","#B0AEAE","#726F6F","#3D3C3C","#2D2D2D"],[0,0.102,0.29,0.545,0.859,1],73.6,-1.1,-11.1,-25.9).s().p("AgzIyQhhgwgyg6Qg1g9gkhdQgchHgVhlQgOg+gJhjQgMh9gFggQgci1hnhnQg0g5Apg0QAlgwBOgKQAECVClB6QAmAaAvgEQAxgDASgjQAmhWgEhHQBHAQBWBIQBnBXAxB3QAnABAoAGQBDAJAfAUQAVAgAIBJQAHA/gGBDQgFBDAMApQAOAwAwA4QgLAAgMAGQgTAKgJASIgSBHQgKAlgJAbQgOAbhXAPQhtASghARQgrAVgVAyQgMAagMA9Qhzgyg2gcg");
	this.shape.setTransform(53.6134,63.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_105, new cjs.Rectangle(0,0,107.3,128), null);


(lib.Path_88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgYATQgQgIgJgOQgJgPAFgIQACgEAfAPQAnARAlgIIgJAOIgMAOIACAEQgNACgKAAQgXAAgPgJg");
	this.shape.setTransform(5.6,2.9182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_88, new cjs.Rectangle(0,0.2,11.2,5.5), null);


(lib.Path_87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#F0F0EF","#D7D5D5","#B4B1B1","#8A8787","#615E5E","#3E3E3D","#2D2D2D"],[0,0.102,0.235,0.384,0.545,0.714,0.886,1],9.3,0,-3.5,0).s().p("Ag1D2QgNgGgJgLQgIgJADgTQADgXASgcIgJhHQgIg6ABgbQADinAgg1QANgWAUgDQASgDAUARQAKAZADA7QADA8gGA9QgOCHAPAsQAGATAOAeIAUAqQgLgBgkAEQglAFgSAEQgFACgGAAQgLAAgLgGg");
	this.shape.setTransform(8.2091,25.2054);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_87, new cjs.Rectangle(0,0,16.4,50.4), null);


(lib.Path_86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("ABOBeQgegLgggTQgngXgTgZQgLgOgXgJQgcgNgLgJQgTgQAAgUQABgUASgKQAVgLAWALQAWAKAIAXQAIAYAvAwQAyAyAXAEQAYAFAOAIQANAJgDAIQgCAIgPAAQgPAAgYgIg");
	this.shape.setTransform(13.4695,10.1436);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_86, new cjs.Rectangle(0,0,27,20.3), null);


(lib.Path_85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgjATQABgZAHgRQAHgRAWgMQAUgNAMADQAGABgIAWQgIAZgTAOQgQAPgIAQQgFAKgIAXQgFgUACgZg");
	this.shape.setTransform(3.624,6.3792);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_85, new cjs.Rectangle(0,0,7.3,12.8), null);


(lib.Path_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgCA5QgJAAgEgPQgEgNACgRQACgQALgVQAKgYANgIQgGANgCAUQgCAXAFARQAGARgHANQgGAMgJAAIAAgBg");
	this.shape.setTransform(1.8386,5.751);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_84, new cjs.Rectangle(0,0,3.7,11.5), null);


(lib.Path_83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgUAaQgJgOgDgaQgCgdAOgCQACAAAKATQAMAXAQALQAOALgBANQgCALgIABIgKACQgSAAgPgUg");
	this.shape.setTransform(3.2694,4.5584);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_83, new cjs.Rectangle(0,0,6.6,9.1), null);


(lib.Path_82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AB2EqQgkgRgUgVQhbhigPg0QgJgggWghIgug4QgVgZgJgrQgHgugFgPQgHgaAJg3QAJg9AVgcQgDBUAKBcQAHA7AlA7QARAaAhAlQAKALAGAZQAGAbAJANIAiA2QAZApAVAUQAPAPAvAfQAfAVgJAEQgDACgEAAQgOAAgagNg");
	this.shape.setTransform(16.6834,31.1033);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_82, new cjs.Rectangle(0,0,33.4,62.2), null);


(lib.Path_81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("ABUFeQgUgKgbgpQgegrgKgpQgKgmgohDQgegxgZghQgSgYgIghQgKgpAAhBQABhFAWhYQAWhYAGAgQADANgECSQgDCSAGAbQAHAdAmAyIA6BOQAQAZALAqQAMArAOAYQASAdAjAcQAcAWgBAAQgPAEgNAAQgTAAgOgIg");
	this.shape.setTransform(14.4756,35.5958);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_81, new cjs.Rectangle(0,-0.2,29,71.60000000000001), null);


(lib.Path_80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAEAuQgPgLgHgPQgJgTgCgbQgCgfANABQAJAAAXA4QAXA5gJAAIgBAAQgJAAgOgLg");
	this.shape.setTransform(3.0263,5.7245);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_80, new cjs.Rectangle(0,0,6.1,11.5), null);


(lib.Path_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgdglQArAAAZgNQgKBIhDAdIAJhYg");
	this.shape.setTransform(3.85,5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_79, new cjs.Rectangle(0,0,7.7,10.3), null);


(lib.Path_78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgtgfIALgIIACgBIAdgRQAOgIAOgFIAAgBIAPgGQgDAsAJAvQgdAXgeAdIgLAMQgVhBAAgsg");
	this.shape.setTransform(4.625,7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_78, new cjs.Rectangle(0,0,9.3,15.6), null);


(lib.Path_77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAID9QgmgWgmgsQglgrgehHQgfhJgOhQQgOhOABg6QABg3AMAAQAHAAAWBlQAaB3ATAqQAaA8AuAvQAtAvAzARQAlAMAngCQAhgDAUgKQAFgDgEAQQgFAQgLASQghA2g7AKIgOACQgdAAghgTg");
	this.shape.setTransform(19.3658,27.1621);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_77, new cjs.Rectangle(0,0,38.8,54.3), null);


(lib.Path_76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgIAbQADggAEgjIAFAIQABAoAEAhIgRgOg");
	this.shape.setTransform(0.85,4.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_76, new cjs.Rectangle(0,0,1.7,8.2), null);


(lib.Path_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAqBBQgggFgagNQgrgVgbgYQACgmAEgfQAhAqBMAsQA+AkgFAFQgGAIgRAAQgJAAgMgDg");
	this.shape.setTransform(8.6687,6.7559);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_75, new cjs.Rectangle(0,0,17.4,13.5), null);


(lib.Path_74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhrAeQgHgmgCgmQAYAOAhALQAiALAhADIBIAFQAkADAAALQABANgZALQgZALgiAAQg9AAhPgRg");
	this.shape.setTransform(11.6505,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_74, new cjs.Rectangle(0,0,23.3,9.4), null);


(lib.Path_73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgVAgQgfgFgUgJQgXgKACgMQABgHBGgGQBSgHAggNIADBKIgjABQgxAAgggGg");
	this.shape.setTransform(9.4454,3.8063);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_73, new cjs.Rectangle(0,0,18.9,7.6), null);


(lib.Path_72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgOAwQgegCgTgIQgUgJAAgNQAAgHAcgDQAqgFASgEQATgGAVgLQAXgNAQgOQgCAqgDAoQgoANgnAAIgOAAg");
	this.shape.setTransform(8.375,4.8481);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_72, new cjs.Rectangle(0,0,16.8,9.7), null);


(lib.Path_71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag+AgQgJghgFgfQAjAQA/gCQA2gBABADQADALgRALQgPAKgVAGQglALgvAAIgFgBg");
	this.shape.setTransform(7.7225,3.2511);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_71, new cjs.Rectangle(0,0,15.5,6.5), null);


(lib.Path_70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgcAkQgWgHgLgLQgLgKAEgKQACgGAggDIA0gGQAagFAWgWQAAA2AEAgQgWADgUAAQggAAgYgJg");
	this.shape.setTransform(6.9578,4.4738);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_70, new cjs.Rectangle(0,0,14,9), null);


(lib.Path_69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgrgaQAGACAYACQAJAAAagEQAVgDABAEQACAFgHAJQgGAJgLAFQgTANgaAMQgIgYgMgeg");
	this.shape.setTransform(4.4472,2.8058);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_69, new cjs.Rectangle(0,0,8.9,5.6), null);


(lib.Path_68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgKATQgrAAAAgKQAAgIAqgKQAjgJAPgIIAPA1QgigJgeABg");
	this.shape.setTransform(5.375,2.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_68, new cjs.Rectangle(0,0,10.8,5.3), null);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgnARQgFgRACgVQASgJAZgDQAPgBANACQAOACABAFIgfARQggATgKAXQgHgJgDgIg");
	this.shape.setTransform(4.3827,3.4583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0,0,8.8,6.9), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhmgrQAmANBXADQBLAEADAGQAMAWhEAUQgzAQg4ADQgJgagfg9g");
	this.shape.setTransform(10.3087,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,20.6,8.8), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],12.7,0,-10.2,0).s().p("AAZBOQhBgFgfgaQgSgPgLgmQgOgugMgRIA7gIQgQBGAmAhQAdAaAyAJQAxAJAsgMIAAABQgcATgzAAIgXAAg");
	this.shape.setTransform(12.675,7.8431);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0,0,25.4,15.7), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("ABKFwQgagNgbgbQgXgWgSgxQgNgkgIguQgGgfgTgrQgIgUgWgsQgIgPgFg1QgGg2gNgdQgKgWgWgbIglgqQAggjAHgCQAGgEBIA8QgJgLgUghQgXgoABgJQACgJAigbQAagVAdgTQAEAMANARQANAQALALQgDgWACgdQACgfAIgDQAhANAIAOIABARQABAIAEAIQAPAcAhAxQAaArADAlQAHBBATBnQAZCEAGAlQg5gkgPhOQgHgqgTgoQgUgugNAFQgVALAdBXQAaBOATAZIA8BKQApA6gbAPQgcAOgqhFIg8h1QgUglgIgtQgFgwgEgZQgGghgXgrQgWgmgNgHQgEABgFAFQgFAGgCAIQATAYAEA2QACAogFApQgDAZAUAkIAiBBQAMAdAHApIAOBIQAJAjAeAfQAZAZAeANQgjgCgdgOg");
	this.shape.setTransform(19.777,38.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,39.6,76.9), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AghAOQgWgRgPgXQgPgXAFgHIAyAhQA7AoA2gBIgcApQg2gOgigdg");
	this.shape.setTransform(8.239,5.7746);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0.1,16.5,11.4), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAOAjQgRgUgLgYQgLgbAIgGQAHgEAfAUIAABGg");
	this.shape.setTransform(2.1194,4.3837);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,4.3,8.8), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("ABTBKQgdgRgUgFQhPgVgtg0QgRgUgLgaQgMgbAJgFQAFgEBCAmQBMAsA8ADQAMA7AVAsIAHAPIgrgag");
	this.shape.setTransform(12.5944,10.1102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0.1,25.2,20.099999999999998), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("ABPFfQgZgogPgzQgNgogDhaQgBhggCgeQgDgjgggrQg3hHgFgHQgVgkgRg2QgRg5gBgrIAbgRQAagQAigNQgGBGAbBQQAVA+AjA6QAbArAOAjQAPAqAAAqQAAByALBYQADAYAVBGQAOAtgOAEIgDAAQgRAAgZgmg");
	this.shape.setTransform(13.15,38.8968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,26.3,77.8), null);


(lib.Path_59_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAdBuQgZgVgYgfQgjgrgUg3QAcgyAlgmQgBBDAWA3QAPAkAeAkQANARAGASQAFAWgLAFIgFABQgLAAgYgTg");
	this.shape.setTransform(7.6417,12.9022);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,15.3,25.8), null);


(lib.Path_58_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAwBuQglghgMgZIgBgCQgKgSgNgNQgPgQgPgDQgbgHgRgSQAMg+AUgxQAMBAApAyQAWAaApAiIAJAJQAbAhAKAXQAKAXgLAKQgBABgDAAQgMAAgegbg");
	this.shape.setTransform(9.9689,13.735);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0,20,27.5), null);


(lib.Path_57_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgoAWQgdgNgNgLQgNgNgCgLQgCgLAHgCQAXAKAhAGQBAALBHgeQgjAxguAkQgegIgcgNg");
	this.shape.setTransform(9.8778,4.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,19.8,8.6), null);


(lib.Path_56_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAXElQgkgbgKggQgDgGgagNQgfgQgageQgogughg+QglhGgNhCQgUhhAGhTQABgSAJgWQAJgYAIACQAGADAFA+QAIBWAEAZQAJA7AbA+QAZA4AgAsQA2BJAWgBIAXgCQANAAAFAEQAEAEASAhQAXAiAlADQAbADAugaQApgXAngjQgJA1gPAvQgdAbgfATQgjAVgbADIgNABQghAAgigZg");
	this.shape.setTransform(24.8395,31.7814);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,49.7,63.6), null);


(lib.Path_55_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AA4FlQgkgdgagpQguhLgHiFQgDgyglhqQgnhugRAEQgQAEgJAnQgHAgABAjQACAggIAsQgJAwgLAAQgIAAgEgoQgEgngHADQgNADgTATQgTAUgUAHIAHgFIAFgFIAOgeQAKgYANgNQANgLAFgWIAGgXQADgEAMAGQAKAGABgBQAAgCgDgSIgFgaQAAgJAPgtQASgzAUgsQAQgiAnguQAgARAbAmQAaAlAGAlIAMBHQAFAeAIAbQApB4AJA0QARBiBLAkQAeAPArAKQArAJAnADQgMAYgMAdQgjgNg9gLQhsgUgfhYQgKgegPhQQgOhLgJgXQgHgTgcgzQgYgpgDgVQgEgdgLgVQgLgXgLACQgMADAFAeQAGAfASAhQASAhAVBBQAVA/AIAuQAHAfALBbQANBSAMAbQAKAYAiAtQAcAlgDADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQgKAAgbgVg");
	this.shape.setTransform(30.65,37.839);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,61.3,75.7), null);


(lib.Path_54_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_54_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgUApQghgPgVgjQgUghAKgMQAEgEAfAQQAsAXAYAJQAfAJAmgBQgDAQgDApIgOABQg5AAgfgPg");
	this.shape.setTransform(8.7083,5.6126);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(-0.1,0.1,17.6,11.1), null);


(lib.Path_53_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_53_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag1GPQgqg1gQg7QgQg5AChPQAChAANg9QALg0AghZQAhhcATgcQATgcAFgmQAEglgNgEQgOgEgwBDQgxBDgPAtQgQAxgTBRQgUBUgHAxQgIA8ACA0QACBBASAkQAVAqAIAeQAIAggKACQgJADgLgTIgbgzQgSgkgOg3QgQg9gBg2QgCg6AOhNQAOhNAUgrQAPgeAqhEQAthGAPgdQAag1gLhPQByATAkACQBaAEBGgUQgXArgRA3QgTA7gEAxQgHBLgGBdQgGBggBAjQAAAZAEAxQACAmgNAAQgPAAgGhNQgGhLAJgxQAIgqgCgqIgGhFQgCgbAKhCQAMhLABgLQgUAXgZBrQgXBggDAuQgCAVgQBBQgRBCgEAuQgGBaAwB4QAJAVATAnQAOAfgHAEQgIAGgTgTQgRgSgQgdQhDh2gDiIQgBgoAVhQQAWhTAAgWQAAgjARhPQAOhAALggQAKgeADgNQADgTgIgBQgLgCgMAKQgLALgHAUQgtBzgEA3QgCAVgfBlQgfBjgEAtQgEA5AQBQQAOBGAQAgQATAjAKAjQANArgNAFIgDABQgQAAgigsg");
	this.shape.setTransform(24.4875,44.2877);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,49,88.6), null);


(lib.Path_52_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_52_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgzAlQgogPgfgeQgdgdAFgNQADgJAqAPQA7AVAgAEQAjAFArgFQAkgDAdgIIAPAZIgEAGQgjAPgbAkQgSACgSAAQg2AAgrgRg");
	this.shape.setTransform(14.7382,5.5024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0.1,29.5,10.8), null);


(lib.Path_51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_51_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAbA+Qg1gHg0gVIgCgNIgMhUIAsAiQAdAXAUALQAMAHAuARQAjANgBAIQAAAKgWADIgQABQgNAAgPgCg");
	this.shape.setTransform(9.3254,6.4271);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,18.7,12.9), null);


(lib.Path_50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_50_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAeAYQgUgFgTgBQgggCgUgOQgUgOAFgPQACgJAbAFIAzAJQAnADAjgNIgMAxIgEARIgggKg");
	this.shape.setTransform(7.8078,3.4388);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0.1,15.6,6.800000000000001), null);


(lib.Path_49_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_49_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAAAbQgZgKgoABIAKgcQAGgPABgHQAaAXAbAFQAeAFAKADQAXAHgCAJQgBALgYABIgKABQgSAAgNgGg");
	this.shape.setTransform(6.6297,3.2722);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,13.3,6.6), null);


(lib.Path_48_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_48_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_48_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag2AWIAIguQATAPAkACIAeABQAOACABAIQABAJgSAGQgPAFgTABIgLAAQgTAAgbgDg");
	this.shape.setTransform(5.4526,2.5188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,10.9,5.1), null);


(lib.Path_47_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_47_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAIAZQgegCgNgFQgRgGgGgIQgGgGACgMQACgJAQgBQAOgBATAGQANAFAVACQAWACASgCIgCAkIgkABIgRAAg");
	this.shape.setTransform(6.35,2.5147);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,12.7,5.1), null);


(lib.Path_46_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_46_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgzAZQgEgZgCgeQAXAQAxALQArAJAAAGQABAHgQAFQgOAFgUABIgOABQgZAAgVgGg");
	this.shape.setTransform(5.8279,3.1048);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,11.7,6.2), null);


(lib.Path_45_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_45_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],0.7,2.9,-0.2,-3).s().p("AgGADQgCgWAKgLQgCANAAARQABAVAGAKQgLgFgCgXg");
	this.shape.setTransform(0.716,3.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,1.5,6.2), null);


(lib.Path_44_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_44_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],7.3,24.4,-8.2,-15.5).s().p("AAHgEIAPiBQAOhOAdggQAMA5ADBjQgjAZgFAbQghB5gCBAQgmA6guAjQBFhaARidg");
	this.shape.setTransform(7.95,24.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,15.9,48.7), null);


(lib.Path_43_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgigmQAbALAgALQAIAaABALQACAQgIACIgDAAQgYAAgjhNg");
	this.shape.setTransform(3.4618,3.8867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43_2, new cjs.Rectangle(0,0,6.9,7.8), null);


(lib.Path_43_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_43_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#4A4A4A"],[0.004,1],13.7,26.7,-16,-22.6).s().p("AiUDvQAAgeAIgWQgHgaAHgmQAGghAKgSQgHgRAMgwQAOg2AegoQAOgSAdgbQgiA1gLAXQgVArgGAnQAOgUAugNQgMARghApQgaAmgCAeQAVgRANgCIgbA9QgLAeADAhQAMghAVgRQAdgTAUgSQAXgVANghQAIgVAIgjQAHANADATQAEAUgCASQASgeADgrIgBg/QAaAYABAXQAJgVADgiQACgigFgeQAeAKAOAyQAGgWgDgdQgGgggBgQQgFhOAehCQgTBLAFA+IAIBQQABA2gZApQADgXgEgbQgFgggMgLQAIAwgYA+QgeBOhAAgQgSATg3AvQgvAvgEAkQgPgRAAgmg");
	this.shape.setTransform(14.875,29.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,29.8,58.9), null);


(lib.Path_42_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],151.8,1.3,-48.8,-3.7).s().p("AADAUQgVgUgVghQAkAAAbgDQAaBCgQAGIgEABQgJAAgSgRg");
	this.shape.setTransform(3.9953,3.7077);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42_2, new cjs.Rectangle(0,0,8,7.4), null);


(lib.Path_42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_42_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#616262","#4B4C4C","#3D3E3E","#343434","#2F2F2F","#2D2D2D"],[0,0.09,0.318,0.533,0.725,0.886,1],9.6,1.2,-1.9,-1.2).s().p("AAlA4QgegCgXgMQgrgXgSgnQAPAAAWgLIAhgRQAcgLAbAFQAdBSABAWQgLAGgTAAIgLAAg");
	this.shape.setTransform(7.775,5.6544);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,15.6,11.3), null);


(lib.Path_41_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AADAUQgVgUgVghQAkAAAbgDQAaBCgQAGIgEABQgJAAgSgRg");
	this.shape.setTransform(3.9953,3.7077);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41_2, new cjs.Rectangle(0,0,8,7.4), null);


(lib.Path_41_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_41_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhYAoQAAgKARgFQAegHAKgGQAKgFAnggQAigcAbgIQADAsAHA7QgxAQgyADIgUABQg6AAAAgWg");
	this.shape.setTransform(8.9,6.1526);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,17.8,12.3), null);


(lib.Path_40_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_40_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],138.9,1.6,-61.6,-3.4).s().p("AAEAaQgRgSgQgcIgDgGQARgFARgJIAYAzQALAYgGAFQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgIAAgOgPg");
	this.shape.setTransform(3.3207,4.0956);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40_2, new cjs.Rectangle(0,0,6.7,8.2), null);


(lib.Path_40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_40_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],4.5,0,-4.4,0).s().p("AgSAXIAAAAIgEgIIAAAAIgEgHIAAgBIgHgMIgBgCIgKgSQAcAFAmgKIACAAIAVAuQgiAKgZAFg");
	this.shape.setTransform(4.475,3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,9,6.3), null);


(lib.Path_39_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_39_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAEAaQgRgSgQgcIgDgGQARgFARgJIAYAzQALAYgGAFQgBAAAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgIAAgOgPg");
	this.shape.setTransform(3.3207,4.0956);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39_2, new cjs.Rectangle(0,0,6.7,8.2), null);


(lib.Path_39_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_39_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhPgQQAcAFAngKIA4gPQAdgHAFAJQAGAKgLANQgKAMgTAKQgkASg5ALg");
	this.shape.setTransform(8.0309,4.0342);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,16.1,8.1), null);


(lib.Path_38_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_38_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],164.8,0.9,-35.7,-4.1).s().p("AAAAOQgEgHgRggIAjAFQAPArgMADIgCAAQgIAAgHgMg");
	this.shape.setTransform(2.2341,2.6125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38_2, new cjs.Rectangle(0,0,4.5,5.2), null);


(lib.Path_38_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_38_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag3AdQgLgIABgHQABgFAXgEQAjgFAIgCQAagIAagbIAMA4Qg0ATgiAAQgWAAgNgJg");
	this.shape.setTransform(6.566,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,13.2,7.6), null);


(lib.Path_37_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_37_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAAAOQgEgHgRggIAjAFQAPArgMADIgCAAQgIAAgHgMg");
	this.shape.setTransform(2.2341,2.6125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37_2, new cjs.Rectangle(0,0,4.5,5.2), null);


(lib.Path_37_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_37_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhCgLQAbAEAbgGIAxgQQAbgIADAGQADAIgLAPQgMANgTAKQgcAPgrAFQgNgcgKgSg");
	this.shape.setTransform(6.7408,3.4842);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,13.5,7), null);


(lib.Path_36_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_36_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_36_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_36_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],1.2,0,-1.1,0).s().p("AgLgCQAAgFAMgFIALAZQgUgGgDgJg");
	this.shape.setTransform(1.1741,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,2.4,2.6), null);


(lib.Path_35_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_35_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_35_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_35_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AguAfQgPgFgCgIQgBgGAXgHIAugMQAagJARgUIAQA7QgrAOgjAAQgSAAgOgGg");
	this.shape.setTransform(6.3979,3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,12.8,7.5), null);


(lib.Path_34_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_34_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_34_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_34_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgrgHQAXgBAhgNQAcgLABACQADAFgDAKQgDALgIAGQgUAUgkAKg");
	this.shape.setTransform(4.35,3.1846);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,8.7,6.4), null);


(lib.Path_33_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_33_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_33_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_33_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_33_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgSAdQgMgCgJgEQgMgFAAgGQgBgDAfgJQAjgMARgRIAWA1QgcAGgZAAIgSgBg");
	this.shape.setTransform(5.2496,2.976);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,10.5,6), null);


(lib.Path_32_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgrgLQAKAAAugLQAegHADAJQADALgiAOQgbAMghAJIACglg");
	this.shape.setTransform(4.6122,2.6092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,9.2,5.2), null);


(lib.Path_31_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],15.5,1.4,-55.7,-0.3).s().p("AgNgBIAbACIgZABg");
	this.shape.setTransform(1.425,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31_4, new cjs.Rectangle(0,0,2.9,0.4), null);


(lib.Path_31_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_31_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_31_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_31_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],16,0.6,-17.4,-0.1).s().p("ACkHkQgggIgOgUQgNgSADgnQADg1gCgPQgJgxhdjCQhHiVg+h1QglhDghghQgggegngKQAqgSA5geQBxg8BFg+QgEAxgyBrQgqBZAPAnIB4EPQBOC6ALBUQADAYACArQAEAjAWANQAjAVA7gZIgZAUQgOAMgKAEQgMAFgOAAQgNAAgPgFg");
	this.shape.setTransform(26.75,48.8689);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,53.5,97.8), null);


(lib.Path_30_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_30_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],63.2,3.4,-137.3,-1.6).s().p("AgzAZIAMg+IAYAJQAdAKAmgCIgBAMIgBABIAAAFIAAACIgBAEIAAADIgBAOIgBARIgJAAQg5AAgggNg");
	this.shape.setTransform(5.175,3.8034);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30_3, new cjs.Rectangle(0,0,10.4,7.6), null);


(lib.Path_30_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_30_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_30_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgcAYQgOgGgLgJQgOgLACgKQABgHAOABIAcAGQATADAUgFQAXgFARgPIAFApQACANADALQgVAEgTAAQgeAAgZgLg");
	this.shape.setTransform(6.6925,3.4852);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0.1,0,13.3,7), null);


(lib.Path_29_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_29_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgzAZIAMg+IAYAJQAdAKAmgCIgBAMIgBABIAAAFIAAACIgBAEIAAADIgBAOIgBARIgJAAQg5AAgggNg");
	this.shape.setTransform(5.175,3.8034);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_3, new cjs.Rectangle(0,0,10.4,7.6), null);


(lib.Path_29_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_29_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],103.2,0,0.7,-2.6).s().p("AgRAZIgBgNIgBgCIgBgKIAAgCIgBgNIAAgBIgCgOQAQALAaAJIAFApQgWgBgTgFg");
	this.shape.setTransform(2.375,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29_1, new cjs.Rectangle(0,0,4.8,6.2), null);


(lib.Path_29_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag8AAQgXgSAEgMQADgEAYAEIAkAIQAaAEATgBQAYgCAbgJQgNAfgSAgQhGgDgngeg");
	this.shape.setTransform(8.0198,3.3125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,16.1,6.6), null);


(lib.Path_28_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_28_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_28_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgRAZIgBgNIgBgCIgBgKIAAgCIgBgNIAAgBIgCgOQAQALAaAJIAFApQgWgBgTgFg");
	this.shape.setTransform(2.375,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28_1, new cjs.Rectangle(0,0,4.8,6.2), null);


(lib.Path_28_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],109,2.3,-94,-2.8).s().p("AgNAiIgBgBIgIgUIAAAAIgcg4QAbAKAmADQAbApAJAaQggAFgdACg");
	this.shape.setTransform(5.075,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27_1, new cjs.Rectangle(0,0,10.2,8.8), null);


(lib.Path_27_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_26_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_26_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_26_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgNAiIgBgBIgIgUIAAAAIgcg4QAbAKAmADQAbApAJAaQggAFgdACg");
	this.shape.setTransform(5.075,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_2, new cjs.Rectangle(0,0,10.2,8.8), null);


(lib.Path_26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],101.8,0.1,-0.7,-2.5).s().p("AgYAWIAIguQAPANAaADIgIAhQgOAAgbgDg");
	this.shape.setTransform(2.525,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26_1, new cjs.Rectangle(0,0,5.1,5), null);


(lib.Path_26_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_25_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],59.8,3.5,-140.7,-1.5).s().p("Ag5ALQAHgUAMgZQA0AOAsACIgZA1QghgOg5gKg");
	this.shape.setTransform(5.775,3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_2, new cjs.Rectangle(0,0,11.6,6.9), null);


(lib.Path_25_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgYAWIAIguQAPANAaADIgIAhQgOAAgbgDg");
	this.shape.setTransform(2.525,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25_1, new cjs.Rectangle(0,0,5.1,5), null);


(lib.Path_25_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag5ALQAHgUAMgZQA0AOAsACIgZA1QghgOg5gKg");
	this.shape.setTransform(5.775,3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24_3, new cjs.Rectangle(0,0,11.6,6.9), null);


(lib.Path_24_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],68.4,0.1,-2.8,-1.6).s().p("AgCAzQgbgGgRgSQAFgbAHgaIAAAAIAEgOQAGgWAKgWQANBHAwA0IgIAuQgWgdgTgFg");
	this.shape.setTransform(4.725,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22_4, new cjs.Rectangle(0,0,9.5,17), null);


(lib.Path_22_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgCAzQgbgGgRgSQAFgbAHgaIAAAAIAEgOQAGgWAKgWQANBHAwA0IgIAuQgWgdgTgFg");
	this.shape.setTransform(4.725,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21_3, new cjs.Rectangle(0,0,9.5,17), null);


(lib.Path_21_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_20_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],98.5,0.1,-4,-2.5).s().p("AgbAXIAFgPIABgCIAKgcIABgEQATAQATAIQgGALgGASQgUgEgXAAg");
	this.shape.setTransform(2.825,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_1, new cjs.Rectangle(0,0,5.7,5.4), null);


(lib.Path_20_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],4.2,0.6,-29.2,-0.1).s().p("AgQgFIABgKQAHAAAagGIABAfQgXAJgOADg");
	this.shape.setTransform(1.9,2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20_0, new cjs.Rectangle(0,0,3.8,4.4), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_19_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_19_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgbAXIAFgPIABgCIAKgcIABgEQATAQATAIQgGALgGASQgUgEgXAAg");
	this.shape.setTransform(2.825,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_1, new cjs.Rectangle(0,0,5.7,5.4), null);


(lib.Path_19_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgQgFIABgKQAHAAAagGIABAfQgXAJgOADg");
	this.shape.setTransform(1.9,2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19_0, new cjs.Rectangle(0,0,3.8,4.4), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],62.8,0.3,-8.4,-1.5).s().p("AAKBbQgigrgUg3IAGgMIABAAIAOgWIAAgBQANgTALgNIAAgBIATgVQgBBIAaA5QgRAegNAig");
	this.shape.setTransform(4.525,9.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17_4, new cjs.Rectangle(0,0,9.1,19.4), null);


(lib.Path_17_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_16_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAKBbQgigrgUg3IAGgMIABAAIAOgWIAAgBQANgTALgNIAAgBIATgVQgBBIAaA5QgRAegNAig");
	this.shape.setTransform(4.525,9.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_4, new cjs.Rectangle(0,0,9.1,19.4), null);


(lib.Path_16_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],68.9,3.3,-131.6,-1.7).s().p("AhPBVQAQgdAPgjQAHgQAEgOQA2gSA/g5IgCALIAAACIgCALIAAABIgDAMIAAABIgDAMIAAABIgDALIAAABIgLAjQgdAcgeASQgiAVgcAEIgIAAIgGAAg");
	this.shape.setTransform(8.025,8.545);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_3, new cjs.Rectangle(0,0,16.1,17.1), null);


(lib.Path_16_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],98.6,2.7,-104.4,-2.4).s().p("AgGAcIgEgHIgDgLIAAgCIgBgEIgBgCIAAgKIAAgOQAPgHAQgDQgFAZAFAOQgNANgFANg");
	this.shape.setTransform(1.6625,3.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16_2, new cjs.Rectangle(0,0,3.3,6.7), null);


(lib.Path_16_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],21.8,0,-14.3,0).s().p("AgGAdIgMgeIAAgBIgMgfIAZARQALAGANAEIAMAoIgDAAQgQAAgSgFg");
	this.shape.setTransform(3.075,3.3771);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,6.2,6.8), null);


(lib.Path_15_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_15_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhPBVQAQgdAPgjQAHgQAEgOQA2gSA/g5IgCALIAAACIgCALIAAABIgDAMIAAABIgDAMIAAABIgDALIAAABIgLAjQgdAcgeASQgiAVgcAEIgIAAIgGAAg");
	this.shape.setTransform(8.025,8.545);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_3, new cjs.Rectangle(0,0,16.1,17.1), null);


(lib.Path_15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgGAcIgEgHIgDgLIAAgCIgBgEIgBgCIAAgKIAAgOQAPgHAQgDQgFAZAFAOQgNANgFANg");
	this.shape.setTransform(1.6625,3.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_2, new cjs.Rectangle(0,0,3.3,6.7), null);


(lib.Path_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],7.5,0.6,-25.8,-0.1).s().p("AgMAPIAAgBIgOgdQAVgBAUgIIAMAiQgSAKgSAEg");
	this.shape.setTransform(2.7,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15_0, new cjs.Rectangle(0,0,5.4,4.9), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgGAdIgMgeIAAgBIgMgfIAZARQALAGANAEIAMAoIgDAAQgQAAgSgFg");
	this.shape.setTransform(3.075,3.3771);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,6.2,6.8), null);


(lib.Path_14_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],77.5,3.2,-123,-1.8).s().p("AhQAMQAUgPARgTQA6AIBCgcQgkAxgtAkQgsgLgkgUg");
	this.shape.setTransform(8.05,4.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_3, new cjs.Rectangle(0,0,16.1,8.6), null);


(lib.Path_14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_14_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],2.7,0,-2.7,0).s().p("AgMAPIAAgBIgOgdQAVgBAUgIIAMAiQgSAKgSAEg");
	this.shape.setTransform(2.7,2.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14_0, new cjs.Rectangle(0,0,5.4,4.9), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AggAWIACgFIABgCIADgIIACgGIAAgBIAFgWIAAgBIACgIIABgBIABgIQASAUAdAOQgLAVgIAaQgWgGgXgNg");
	this.shape.setTransform(3.25,4.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,6.5,8.3), null);


(lib.Path_13_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_13_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhQAMQAUgPARgTQA6AIBCgcQgkAxgtAkQgsgLgkgUg");
	this.shape.setTransform(8.05,4.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_3, new cjs.Rectangle(0,0,16.1,8.6), null);


(lib.Path_13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],195,0.2,-5.6,-4.8).s().p("AgBAuQgZgogQgyQgEgPgEgYIA6BFQALANASAOQALAmACAKQAEAUgLADIgEAAQgRAAgXgmg");
	this.shape.setTransform(5.0938,8.3968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_5, new cjs.Rectangle(0,0,10.2,16.8), null);


(lib.Path_12_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgKArQgpgGgigTQALgeAFghQAaAbAoAPQAfALAxAIQANACgGAKQgFALgRAEQgSADgTAAQgRAAgSgDg");
	this.shape.setTransform(8.609,4.594);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,17.2,9.2), null);


(lib.Path_11_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgBAuQgZgogQgyQgEgPgEgYIA6BFQALANASAOQALAmACAKQAEAUgLADIgEAAQgRAAgXgmg");
	this.shape.setTransform(5.0938,8.3968);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_5, new cjs.Rectangle(0,0,10.2,16.8), null);


(lib.Path_11_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_11_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],99.7,2.6,-103.3,-2.5).s().p("AgIAPIAAgBIgFgNIAAAAIgLgbQAGABAXACIAEAAIAQAkIgcAOg");
	this.shape.setTransform(2.475,2.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_3, new cjs.Rectangle(0,0,5,5.5), null);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],15.4,0.4,-18,-0.3).s().p("AglgUQAbADAagGIAFgBIARAmQgXAIgdADg");
	this.shape.setTransform(3.775,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,7.6,5), null);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AhOAHQgQgMACgPQABgQASAIQAtARAmgDQAigDAxgUQgSAhgIApIgZABQhTAAglgfg");
	this.shape.setTransform(9.3186,3.7813);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,18.7,7.6), null);


(lib.Path_10_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgIAPIAAgBIgFgNIAAAAIgLgbQAGABAXACIAEAAIAQAkIgcAOg");
	this.shape.setTransform(2.475,2.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,5,5.5), null);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],3.8,0,-3.7,0).s().p("AglgUQAbADAagGIAFgBIARAmQgXAIgdADg");
	this.shape.setTransform(3.775,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,7.6,5), null);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag5A1QgbhAgFgvQAZAdAdAQQAbAOAsANIAhAJQAWAHgCAHQgBAIgUAGQgRAFgSABIghACQgiAAgXgGg");
	this.shape.setTransform(8.9548,5.8533);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,17.9,11.7), null);


(lib.Path_9_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],52.7,3.7,-147.9,-1.3).s().p("Ag4gDQAHgNAFgUQAzAhAyAAIgcAoQgygOgjgag");
	this.shape.setTransform(5.675,3.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_5, new cjs.Rectangle(0,0,11.4,7.4), null);


(lib.Path_9_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],29.2,0,-6.9,0).s().p("AgLA1IgLgdIAAAAIgFgOQgNgkgDggQAfAkApATQAGAfAJAeQggAAgXgFg");
	this.shape.setTransform(4.375,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,8.8,11.7), null);


(lib.Path_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("Ag4gDQAHgNAFgUQAzAhAyAAIgcAoQgygOgjgag");
	this.shape.setTransform(5.675,3.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_5, new cjs.Rectangle(0,0,11.4,7.4), null);


(lib.Path_8_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],20.7,1.2,-50.5,-0.6).s().p("AgngHIBNADIACAEQgfABgiAHg");
	this.shape.setTransform(4.025,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_4, new cjs.Rectangle(0,0,8.1,1.7), null);


(lib.Path_8_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgLA1IgLgdIAAAAIgFgOQgNgkgDggQAfAkApATQAGAfAJAeQggAAgXgFg");
	this.shape.setTransform(4.375,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,8.8,11.7), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgnAdIgYg+QAWAPAHAEQAPAHARAEIArADQAXACAAAGQAAAHgQAHQgPAIgSACQgKACgJAAQgSAAgRgFg");
	this.shape.setTransform(6.375,3.381);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,12.8,6.8), null);


(lib.Path_7_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],59.4,3.6,-141.1,-1.4).s().p("AgQADIAGgKQAOAJANAGQgUgBgNgEg");
	this.shape.setTransform(1.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_5, new cjs.Rectangle(0,0,3.4,1.6), null);


(lib.Path_7_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgngHIBNADIACAEQgfABgiAHg");
	this.shape.setTransform(4.025,0.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,8.1,1.7), null);


(lib.Path_7_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],106.1,2.4,-96.9,-2.7).s().p("AgQAQIAAgBIgEgPIAAAAIgGggQASAJAbADIAIAzQgSACgVgBg");
	this.shape.setTransform(2.7,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,5.4,6.5), null);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgWAXQgSgDgMgFQgOgGABgHQABgFAOgBIAagCQAfgFAegPQAQAfAOASQgWAEgYAAQgVAAgWgEg");
	this.shape.setTransform(6.6491,2.7065);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,13.3,5.4), null);


(lib.Path_6_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgQADIAGgKQAOAJANAGQgUgBgNgEg");
	this.shape.setTransform(1.7,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,3.4,1.6), null);


(lib.Path_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],38.6,0.9,-32.6,-0.9).s().p("AgegcIAOgCIABgBIAPgDIAbgFQgBATAFAgIgyAcQgHgkgEggg");
	this.shape.setTransform(3.125,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,6.3,7.9), null);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgQAQIAAgBIgEgPIAAAAIgGggQASAJAbADIAIAzQgSACgVgBg");
	this.shape.setTransform(2.7,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,5.4,6.5), null);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],54.5,3.6,-146,-1.4).s().p("AgSAtQgOgyABg4QBZBmglATQgFACgFAAQgNAAgQgRg");
	this.shape.setTransform(3.1731,6.1996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_6, new cjs.Rectangle(0,0,6.4,12.4), null);


(lib.Path_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgegcIAOgCIABgBIAPgDIAbgFQgBATAFAgIgyAcQgHgkgEggg");
	this.shape.setTransform(3.125,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,6.3,7.9), null);


(lib.Path_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AAEAnQgGgngCgmIABABQACApAGAjg");
	this.shape.setTransform(0.475,3.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,1,7.7), null);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],3.8,8,-4.8,-7.7).s().p("AgOAsQAXgdAAgYQgVAMghAFQAPgMATghIAXgtQAEAigSAXQAMgDAPgMQAQgMAFgLQgCAggMAeQgLAcgOALQgRAOggAfQABgHAbggg");
	this.shape.setTransform(4.6,8.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,9.2,16.6), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],15.7,0,-20.4,0).s().p("AAwHcQgygPgMgWQgHgPgvh9QgxiEgSgpQgehEgKguQgMg7ASglQAjhKAGg/QAMh0hAh9QAYgVA8gBQA5AAA+AQQBCASAnAdQAtAhgFAlQAYA1gUA0QguAXhLgGQhGgHgOAKQgjAZgWA1QgVAygDA5QgEBPBGDLQALAhARBBQAPA2ATAWQAbAgArALQAtALAmgSIgRARQgLAKgKADQgMAEgPAAQgYAAgegJg");
	this.shape.setTransform(18.0871,48.4504);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,36.2,96.9), null);


(lib.Path_4_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgSAtQgOgyABg4QBZBmglATQgFACgFAAQgNAAgQgRg");
	this.shape.setTransform(3.1731,6.1996);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,6.4,12.4), null);


(lib.Path_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],117.9,2.2,-85.1,-2.9).s().p("AgOAjQgHgjgCgpQAMAIAQAHQAIAjALAhg");
	this.shape.setTransform(2.375,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,4.8,8.4), null);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],0.1,6.9,0,-6.8).s().p("AgLAFQgFguAcgaQgIATABAtQAAAoAHAfQgSgZgFgmg");
	this.shape.setTransform(1.2568,6.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,2.5,13.5), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2E1E1","#B0AEAE","#726F6F","#3D3C3C","#2D2D2D"],[0,0.102,0.29,0.545,0.859,1],3.2,3.2,-6.6,0.1).s().p("ABUHTQgjgCgJgOQgIgMABgeQACgmgFgUQgJgsgXhIQgbhRgbg+Qg0hugbg9QgyhvgCgXQgBgYARgsIAjhNIAwgxQAkgkAMgXQgDAQAEA7QAEA9AIBMQAIBHAQBTQAPBUARA5IAmCJQAVBGAXArQASAjAaA5QAUAqANANQgSgDgTAKIgYARQgJAFgVAAIgNAAg");
	this.shape.setTransform(18.7941,46.6972);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,37.6,93.4), null);


(lib.Path_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],54.4,3.7,-146.1,-1.3).s().p("AgagEQAEgdAHgPQAKgEANgBQALA7AIAwQgggVgVglg");
	this.shape.setTransform(2.65,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,5.3,10.8), null);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgOAjQgHgjgCgpQAMAIAQAHQAIAjALAhg");
	this.shape.setTransform(2.375,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,4.8,8.4), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],100.1,0.1,-2.3,-2.5).s().p("AgUAoIgCgRIgBgBIAAgDIAAgBIgBgDIAAgBIAAgDIAAgCIgBgDIgBgBIAAgEIAAgBIgCgJIAAAAIAAgFIgBgCIAAgEIAAgBIgBgEIAAgCIAAgEIAAgCIgBgFIAAgBIgBgFIAAgBIgCgNQASANAqAjIAJBFQgXgGgggNg");
	this.shape.setTransform(3.5,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,7,11.8), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],0.1,11.9,-0.1,-11.8).s().p("AgkAgQgFgyANgeIACAmQACAZAFAPQADgkANgkQAPgrAagfQgWAugEArQgDAoAOAtQgOgbgPgGQgLApAHAzQgVgggFg1g");
	this.shape.setTransform(3.8286,11.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,7.7,23.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],14.7,0,-9.6,0).s().p("AgaAwQgdgJgjgnQgogvgQgKQAnAEAggBQATAhAHAKQAQAVASAKQAgATAxADQAtADAkgLIAAAEQgRAOgvAFQgQABgRAAQgnAAglgKg");
	this.shape.setTransform(14.725,5.846);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,29.5,11.7), null);


(lib.Path_2_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],3.4,0,-3.3,0).s().p("AAYA2QgYgvghguQATgIAXgHQAMAaAFAZQAJAXgBAiIgKAAg");
	this.shape.setTransform(3.4053,5.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0,0,6.8,10.9), null);


(lib.Path_2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#4A4B4B","#343535","#2D2D2D"],[0,0.424,0.816,1],25.8,8.3,-8.3,-13.6).s().p("AgGErQgbgTgRgiQgSgkgPgNQg8gygHgHQgjgngRg6QAaAAAQgQQgxgGgZgaQgdgeALgtIB0gWQBIgPAUgdQAMgRAFgcQAGglAGgaQADgRAIgQQAIgSALgHQALgHAMAFQAKAFAIANQAuBFAdBEQAaA/ATBLQAJAjgFAvQALgLAFgRQAEgKACgSQAfAMAPAeQAOAcgLAYQgGAOgRAMQgPALgNACQgFAAgHgIIgMgOQgGAbgIA5QgLAvgcAUQgOAKgVADQgXACgUgHQAGAYAXAOQgNAEgMAAQgcAAgbgSg");
	this.shape.setTransform(25.5617,31.652);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,51.2,63.3), null);


(lib.Path_2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],38.9,5.1,-203.5,-0.9).s().p("AEVFHQgkgugbhCQgXgzhvg6QiNhDhLgqQiIhGg+iOQgxhvARhDQAhBsAfAyQAuBLBcA+QA4AmBXAkIB1AuQBxBWCNEGQAJANAMALQgxgLgtg4g");
	this.shape.setTransform(36.9656,39.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12, new cjs.Rectangle(-0.1,0,74.19999999999999,78.9), null);


(lib.Path_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2E1E1","#B0AEAE","#726F6F","#3D3C3C","#2D2D2D"],[0,0.102,0.29,0.545,0.859,1],8.7,0,-10.2,0).s().p("AAlFaQgbgHgdgWQgWgRgRgvQgDgJgVhJIgchZQgUhAgLgzQgPhFAAgtQgBgzARgpQARgpASgaQASgZAOgGQANgEATABIArAEQAdAEAfgDQAjgDAPgKQgMAfgWArQgZAugdArQgxBJAXCZQAHA3AUA6QAQAvASAjQAOAbAdAWQAZAUAeAMQggAAgSAZQgWAHgVAAQgOAAgNgDg");
	this.shape.setTransform(15.7243,34.885);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,31.5,69.8), null);


(lib.Path_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgagEQAEgdAHgPQAKgEANgBQALA7AIAwQgggVgVglg");
	this.shape.setTransform(2.65,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,5.3,10.8), null);


(lib.Path_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgDAiQABgmADgfIADAEQgEAigBAhg");
	this.shape.setTransform(0.425,3.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,0.9,7.2), null);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AgUAoIgCgRIgBgBIAAgDIAAgBIgBgDIAAgBIAAgDIAAgCIgBgDIgBgBIAAgEIAAgBIgCgJIAAAAIAAgFIgBgCIAAgEIAAgBIgBgEIAAgCIAAgEIAAgCIgBgFIAAgBIgBgFIAAgBIgCgNQASANAqAjIAJBFQgXgGgggNg");
	this.shape.setTransform(3.5,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,7,11.8), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],44.1,0.6,-27.1,-1.2).s().p("AkRBQQAwipCIhSQBJgsBrgMQBYgKB0AKQhsAEhfArQhaAqhVBSQhlBhgVC+IhZACQgDhEAYhVg");
	this.shape.setTransform(29.4833,23.3311);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,59,46.7), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],4.1,6.7,-3.9,-6.2).s().p("AgFgFQAYgmAUgSQgEAhgeApQgWAigVAPQAHgbAagog");
	this.shape.setTransform(3.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,7.8,12.4), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_1_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],56.2,4.7,-188.4,-1.4).s().p("AAUEzQhIhBgWhIQgSg5AHhnQADg4APhkQAFgkgOhgQgKhHATgGQASgHAjAdQgQgDgJAHQgLAJADAUIAOBMQAJAzgEAmQgEA1gRBdQgKBRAPA+QAMA1AjA2QAjA1AyArQgggSgkggg");
	this.shape.setTransform(8.787,35.7155);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_22, new cjs.Rectangle(0,0,17.6,71.5), null);


(lib.Path_1_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],21.6,0,-11.2,0).s().p("ABUDCQg3gEgxg7QgogvgdhIQgNgaghgbQgbgWgxgaQgIg2AHgzQAPAnAuAsQA4A3AJAMQAVAeAcBGQAhBDBAAoQApAaApgVQApgUANg2IAUACQgKAqgjAcQgiAdgsAAIgJgBg");
	this.shape.setTransform(21.581,19.4675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_21, new cjs.Rectangle(0,0,43.2,39), null);


(lib.Path_1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],0.1,0,-0.2,0).s().p("AAAADIAAgGIAAAHg");
	this.shape.setTransform(0.05,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_20, new cjs.Rectangle(0,0,0.1,0.8), null);


(lib.Path_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#E2E1E1","#B0AEAE","#726F6F","#3D3C3C","#2D2D2D"],[0,0.102,0.29,0.545,0.859,1],18,0,-0.8,0).s().p("ABRImQgUgHgLgNQgKgNAAgZQgBgVAFgPQAQgugGgQIgihMQghhLgJgmQgOg4gEgVQgGghACgYIAHg4QACgggEgUQgEgTgohEIg4hcQgRgdgYh4QgYh7ABhBQAwAFBoBRQB9BiAlARQAAAaAEBLQAFBXABApQABA0gFBCIgGBPQgBAdABBAQABBFADAeQADAcANArIAVBCQAGATALA1QANAwAWAUQgNgCgfADQgeADgPAFQgGACgHAAQgKAAgLgEg");
	this.shape.setTransform(20.423,55.367);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,40.9,110.8), null);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],66.7,3.3,-133.8,-1.7).s().p("AgdglQArAAAZgNQgKBIhDAdIAJhYg");
	this.shape.setTransform(3.85,5.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,7.7,10.3), null);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],50.8,0.6,-20.4,-1.2).s().p("AgtgfIALgIIACgBIAdgRQAOgIAOgFIAAgBIAPgGQgDAsAJAvQgdAXgeAdIgLAMQgVhBAAgsg");
	this.shape.setTransform(4.625,7.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,9.3,15.6), null);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],119.1,2.2,-83.9,-2.9).s().p("AgIAbQADggAEgjIAFAIQABAoAEAhIgRgOg");
	this.shape.setTransform(0.85,4.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,1.7,8.2), null);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],101.6,2.5,-101.4,-2.6).s().p("ABAIlQgagTgIgXQgGgVAEgkQAGgkABgKQABgOgSgyQgPgqgXg1Qgag+gQhDQgPhCAAgxQABgpgZg3QgkhGgWgwQgqhbAGiMQAEhGALg0QgKCdA2CTQALAeA1BRQAvBHAGAmQACAJgFAxQgEAzAGAwQANBbBNCwQAEAOgLArQgLAqAIAUQAHASAQAMQAOALARACQALACAbgFQAbgGASACQgMADghAPQgaALgKABIgCAAQgYAAgagSg");
	this.shape.setTransform(19.6375,56.6775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,39.3,113.4), null);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#616262","#4B4C4C","#3D3E3E","#343434","#2F2F2F","#2D2D2D"],[0,0.09,0.318,0.533,0.725,0.886,1],8.8,1.8,-2.2,-1.8).s().p("AAwA5QglgBgZgIQgcgKgUgQQgagVgHgaQAMADANgGQA8gnAuAQIAeArQAVAeAIAbQgJAIghAAIgFAAg");
	this.shape.setTransform(9.55,5.6312);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,19.1,11.3), null);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],100.6,0.1,-1.9,-2.5).s().p("AAOAjQgRgUgLgYQgLgbAIgGQAHgEAfAUIAABGg");
	this.shape.setTransform(2.1194,4.3837);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,4.3,8.8), null);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],124.7,2.6,-75.9,-2.4).s().p("An+IQQhdgahJgyQhXg7gkhPQgvhlAIidQALBGAtBBQARAZBPBcQBbBqDNAaQBVAKBLgJQBLgIAkgYQAOgQAbg1QAWgsAcgXQAHByCBA7QAyAWA2AHQAyAHAcgJQBcgsAyg0QAvgxAkhVQAXg3AKhqQANiHAMg5QARhJAqhHQAmg9ADgwQgOg2ABg+QACg4AMgcQAdgKAqAJQAoAHAoAVQATBVgFBAQgrAwguBFQg9BdgUBCQgCAJgLCJQgLCDgcBOQgoBvhTBHQhhBTiWAZQjAAhi4ACIgYAAQjPAAiWgpg");
	this.shape.setTransform(84.0195,56.9365);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0.1,0,167.9,113.9), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],97.9,0.2,-4.6,-2.4).s().p("AgJK2QgYgHgSgRQgRgRgEgVQgDgTAFgNQAJgPAGgNQAGgPgGg0QgKhRgBgjQgDhYAgiCQACgGgFgcQgFgiAAgUQABgfANgkQANggACgKQACgMgOhIIgXh3QgGgngRiEIgSiUQgOhVAEg9IBdgCQgTBjAPDPQAODRAlCcQgcAagJBCQgKBJAcAnQgoBGgDBtQgCBSAUB1QACAKgPAXQgPAWAFAUQAFARAQALQAOAKATABQAKAAAbgGQAYgFASAEIg1AXQgRAKgUAAQgMAAgLgDg");
	this.shape.setTransform(10.4306,69.6903);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,20.9,139.4), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],1.4,6.1,-0.5,-6.1).s().p("AAAACQgBgrAJgTQgDAIAHA2QACAOgHATQgHATgMAGQAMgQAAgqg");
	this.shape.setTransform(1.2579,6.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,2.5,12.1), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2D2D2D","#3B3B3A","#2D2D2D"],[0,0.498,1],12.9,21.6,-11.8,-23.7).s().p("AhpCvQAFgPAQgkQgUAFgPAOQABgTAeglQAigrAGgRQgQABgTAIQgUAIgHAKQAFghAdgvQAagqAbgcQAcgbAxgqQAxgpARgMQgNAogCA0QgBANAFAeQAFAegBAPQgYgkgbgIQAKBGgLAjQgFgLgJgIIgRgNQgCALAAAsQgBAkgHATQgEgQgGgQQgHgQgEgGQgIBJgcAgQgLANgaATQgZASgMARQgCgTAIgZg");
	this.shape.setTransform(12.025,21.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,24.1,43.8), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],11.8,0,-9,0).s().p("AAQBGQgtgJgSgNQgbgWgQgoQgTgzgIgLQAUAGAtgCQADAjADAPQAGAYAPAQQAgAlA/AIQAjAEANgMQABALgIAFQgIAFgVABQgdgBglgGg");
	this.shape.setTransform(11.8059,7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,23.6,15.3), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],23.2,0.3,-10.2,-0.4).s().p("AgSAXIAAAAIgEgIIAAAAIgEgHIAAgBIgHgMIgBgCIgKgSQAcAFAmgKIACAAIAVAuQgiAKgZAFg");
	this.shape.setTransform(4.475,3.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,9,6.3), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],27.2,0,-8.9,0).s().p("AggAWIACgFIABgCIADgIIACgGIAAgBIAFgWIAAgBIACgIIABgBIABgIQASAUAdAOQgLAVgIAaQgWgGgXgNg");
	this.shape.setTransform(3.25,4.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,6.5,8.3), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E1E1E0","#D6D6D5","#A7A7A7"],[0,0.165,1],0.9,0,-1,0).s().p("AgIACIAJgEIAIAFQgJgBgIAAg");
	this.shape.setTransform(0.925,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,1.9,0.6), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#616262","#4B4C4C","#3D3E3E","#343434","#2F2F2F","#2D2D2D"],[0,0.09,0.318,0.533,0.725,0.886,1],8.4,2.8,-0.9,-3.9).s().p("AgKAzQg5gMgfgvQAQABAOgGQAOgHAJgLQAOgQAOgGQARgGAVAEQA8AnASBEQgdAGgaAAQgcAAgagHg");
	this.shape.setTransform(9.85,5.7552);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,19.7,11.5), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6C6C6C","#616262","#4B4C4C","#3D3E3E","#343434","#2F2F2F","#2D2D2D"],[0,0.09,0.318,0.533,0.725,0.886,1],10,2.6,-3.7,-2.1).s().p("AAnBAQgcAAgZgHQg5gRgNgyQASgCAQgLQAFgDARgOQAPgNAGgDQAUgKAXAFQAJAIARAnQAUAsADAbQgOAHgcAAIgEAAg");
	this.shape.setTransform(8.5,6.4431);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0.1,17,12.8), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4A4A4A","#FFFFFF"],[0,1],12.6,0,-9.4,0).s().p("Ag2A3QgagSgMgkQgNgogTgTQAQgJAbgJQAPAMALAoQALAoASARQAaAWAsAHQAuAHAigOIABAFQgVARg9AAIgCAAQg/AAgggWg");
	this.shape.setTransform(12.5,7.7255);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,25,15.5), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3E3E3E").s().p("AASGPQgTghgRguQgXg/gOiJQgGg4gbhfQgdhpgbgxQgVgngThDQgUhFgHg7QAagGAhgFQgCAoARA1QAQA0AbAmQAvBDgDBfQAAAgAGAeQAHAgAJACQAJACAMhAQAKhBgDggQgEgaADgyIAEhPQACgtgLgiQgLgdgZgaQAaAAAzADQAdAkADBPQAEBKABAAQAKAGAWgfQAUgdAMggQAKgegBg9IA+AJQATBNg6BfQgeAygsA2QgOAggaCTQgcCdADA4QABAlAZBSQATA9gOADIgCAAQgRAAgXgng");
	this.shape.setTransform(21.1594,43.7885);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,42.3,87.6), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F9F9F9","#EBEAE9","#D8D7D6","#C1BFBF","#A6A3A3","#888585","#6A6867","#4F4E4D","#393939","#2D2D2D"],[0,0.38,0.518,0.616,0.694,0.761,0.824,0.878,0.925,0.973,1],0,0,0,0,0,2).s().p("AgGAXQgJgCgEgJQgEgJADgJQADgJAIgFQAJgFAHADQAJADAEAIQAEAJgDAJQgDAJgIAFQgGADgEAAIgGgBg");
	this.shape.setTransform(2.175,2.428);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,4.4,4.9), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#F9F9F9","#EBEAE9","#D8D7D6","#C1BFBF","#A6A3A3","#888585","#6A6867","#4F4E4D","#393939","#2D2D2D"],[0,0.38,0.518,0.616,0.694,0.761,0.824,0.878,0.925,0.973,1],0,0,0,0,0,0.8).s().p("AgCAKQgEgBgCgEQgBgEABgDQABgEAEgCQADgCADABQAEABACAEQABAEgBADQgBAEgEACIgEACIgCgBg");
	this.shape.setTransform(0.9675,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,1.9,2.2), null);


(lib.StarIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#423231").s().p("AgjBtIAAgBQgUgGgMgOQgIgJgLgUQgNgWgHgJQgKgMgVgOQgRgLgJgIQgOgNgJgQQgQgcALgVQAGgOASgCIABAAQAFABAJAKQAeAeAxAZQAUAKAYAIQBMAYBHgQIAZgGQAhgJAJADQAHACACAGQAGAPgLATQgKARgRAMQgQAMgjAGIgqAMQgJAEgXAPQgVAOgMAFQgJAEgLAAQgJAAgKgDgAADBoQALgEAUgPQAVgOANgFQAQgGAbgGIAZgGQANgEALgIQAPgLAJgQQAMgRgGgNQgCgFgEgBQgIgDggAJIgZAGQhKAQhLgYQgYgIgVgLQgxgYgfgfQgJgJgDgBQgPACgGAMQgJATAPAZQAJAQANANQAHAGATAOQAWAPAJAKQAKAMALAUQALAUAHAIQAMAOASAFIAAACIABgBQATAGARgHg");
	this.shape.setTransform(-16.0418,14.0614,0.5985,0.5985);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A86A5A").s().p("AgRAoQhRgbgfhCQAjAsBAAbQBMAiBUgKQgiAMgjAAQgmAAgogOg");
	this.shape_1.setTransform(-18.11,11.4355,0.5985,0.5985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A4136").s().p("AgdBfQgbgIgRgXQgSgcgNgPQgJgJgegRQgagPgNgXQgMgVADgPQAEgQAUgCIAXAUQAZAYAtAWQAuAXAwAHQAzAGAvgKIAxgMQAUgEAEALQAGAMgQAOIgeAWQgPAKgZAEQghAFgQAGIgrAaQgOAJgPAAQgKAAgJgDg");
	this.shape_2.setTransform(-15.9891,13.3619,0.5985,0.5985);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E3731").s().p("AgiBrQgagIgQgaIgdguQgHgIghgYQgagTgNgXQgNgVAFgTQAFgTAUgDIAYAVQAZAXAsAWQAuAXAxAHQAyAHAvgKIAygNQATgDAFAKQAGAOgLATQgKAQgQALQgPALgaAGQgmAIgNAFIgxAeQgTAMgSAAQgIAAgJgDg");
	this.shape_3.setTransform(-16.0394,14.0527,0.5985,0.5985);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#794233").s().p("AgpCeIgEgBQgygRgkgXQglgWgGgTIAAgBQAFhkCThtQAogdAkgPQg3Aeg3AuQhtBdgEBUQAFARAjAXQAkAWAxAQQBEAWA5gBQA6AAAigZIACAEQgiAYg5ACIgIAAQg2AAg/gVg");
	this.shape_4.setTransform(-15.8954,4.4724,0.5985,0.5985);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4773B").s().p("AgSBfQgqgLgfgbQBFgDAig0QAPgWAZhOQAHAZAZBCQASA7gYAcQgdATgiAAQgPAAgSgEg");
	this.shape_5.setTransform(-9.7465,9.9512,0.5985,0.5985);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FED09B").s().p("AgWgSQA5g4A/giQgwAog8BDQg/BFgYApQAEg5BHhGg");
	this.shape_6.setTransform(-19.0676,1.3273,0.5985,0.5985);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F99F3B").s().p("AgeChQg2gQgpgYQgpgZgGgTQAEhWBvhdQA4gvA2gdIB4FLQglAag5AAQgwAAg9gSg");
	this.shape_7.setTransform(-15.8655,4.3776,0.5985,0.5985);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#794233").s().p("AAOAcIgXgJQgigPgSgUIgKgRIAMAPQATASAhAPQAgAOAbACQANABAHgCQgFACgJABIgKABQgQAAgSgGg");
	this.shape_8.setTransform(7.3723,21.3134,0.5985,0.5985);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#794233").s().p("AgBgPIAGgiIgFAjQgDAlAGAaIgDABQgIgaAHgng");
	this.shape_9.setTransform(-18.2751,23.772,0.5985,0.5985);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#794233").s().p("AAOCNQgXgKgkgYQgRgMgMgGQhKASg7gTQgngMghgdQglgggJgtQgHgnANgqQAHgTALgOQAGgIAEgDQgfAngBA3QgBBAAvApQBTBGB4gdIABAAQAKAFAUAOQAlAYAWAKQApAQAugCQA8gDBBgxQA3goAqg5IADADQgqA6g3AoQhDAxg9ADIgMAAQgoAAglgPg");
	this.shape_10.setTransform(-13.761,21.5221,0.5985,0.5985);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEDDA1").s().p("ABNCRQhGgGgpgxQgfgeAahNQAAgJgMgDQgLgCgLAFQgTA6gxAcQg2Aeg2geQglgVgTgZQgLgkAKgvQAKgqARgQQA/ghBfAcQAvAOAjAUICLASQCVAbAuAuQAEAIANAPQgeBDhRAlQgzAag2AAIgTgBg");
	this.shape_11.setTransform(-14.579,19.7347,0.5985,0.5985);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDB677").s().p("AgGCDQgxghgTgJQh4AehUhIQgxgqAChBQABg3AfgoIJMCOIAfATQgnA3g1AoQhEAzg/AEIgMAAQgzAAgugZg");
	this.shape_12.setTransform(-13.7431,21.4165,0.5985,0.5985);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#818181").s().p("AgWBEQgTgSgKgyQgGgfAAgiIAAgBIABgBQAKgDAbAEQAZADAWAHQAZAJAFAIIAAABIAAABQgJAegVAdQgYAkgXAKIgCABgAg1g/QAEBiAdAdQAVgLAWgfQAUgcALgfQgGgIgVgHQgUgGgYgEQgQgCgKAAIgKABg");
	this.shape_13.setTransform(-7.3814,31.242,0.5985,0.5985);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFDEA").s().p("AgcALQgHgggCgqQASgFAXABQAcADAGAMQgDAfgLAjQgNAngNAPQgRgQgJgpg");
	this.shape_14.setTransform(-8.4886,31.1534,0.5985,0.5985);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3D3D1").s().p("AgvAKQgGgggCgqQARgFAqAJQAtAKAHANQgKAegVAeQgXAigWAKQgRgQgKgpg");
	this.shape_15.setTransform(-7.3963,31.2236,0.5985,0.5985);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#818181").s().p("AAWA3QhOgNgwgQQgOgEgLgGIgBAAIAAgBQgBgOAEgXQAEgYAFgNIAAgBIABAAQAZgKBsAZQA3ANA2AQIACAAIAAABIAEAgQABAhgKAMIgBAAIAAAAQgFACgLAAQgaAAg5gJgAhyg5QgFAOgEAWQgEAWABAMQAIAFAPAEQAuAPBOANQBPAMATgEQAOgQgKg3Qg0gPg7gNQhLgSgiAAQgLAAgGACg");
	this.shape_16.setTransform(-16.4002,28.5546,0.5985,0.5985);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFDEA").s().p("AAhArQhcgSgZgPQgBgUAIghIBbAiQA7AWANAPQgBAMgTADIgLABIgWgBg");
	this.shape_17.setTransform(-19.0111,28.8039,0.5985,0.5985);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3D3D1").s().p("AAAAxQhjgSgdgRQgBgNAEgWQAEgYAFgNQAZgKBuAaQA3ANAzAPIAEAeQACAhgLALQgFACgKAAQgfAAhKgNg");
	this.shape_18.setTransform(-16.3962,28.5532,0.5985,0.5985);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#818181").s().p("AgWBEQgfgcgEhoIAAgCIABgBQALgCAaADQAZADAWAHQAZAJAFAJIAAAAIAAABQgJAegVAdQgYAkgXAKIgCABgAg1g/QAEBjAdAcQAVgKAWggQAVgdAKgeQgFgHgWgHQgUgHgYgDQgQgCgKAAIgKAAg");
	this.shape_19.setTransform(-24.1401,27.9604,0.5985,0.5985);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFDEA").s().p("AgYALQgHghgCgpQARgFAUAEQAXAEAHAMQgEAMgLAwQgJAngJAQQgPgPgKgpg");
	this.shape_20.setTransform(-25.5017,27.9085,0.5985,0.5985);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3D3D1").s().p("AguAKQgIgggBgqQAQgFArAKQAuAKAGAMQgKAfgUAdQgYAigWAKQgRgPgJgqg");
	this.shape_21.setTransform(-24.1401,27.94,0.5985,0.5985);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333130").s().p("AinC5QghgLgWgQQgagTgMgqQgIgagHhAQgHg7gGggQgLg3gTguIgBgCIACgBQAJgDAagDIABgBIABACQATA8AMBnQAHA/AHAZQALAoAYASQAUAQAiALQA6ATA+gHQBGgIAqgoQAVgUAWgjQAOgVAZguQAig+AVgfQAjg1AoglIABgBIAVAGIgDADQgrAtgkA6QgWAkghA/QgdA2gOAXQgYAmgZAWQguAphMAIQgTACgTAAQgyAAgwgPgAk5i4QASAtALA3QAGAeAHA8QAHA/AIAaQALApAZASQAXARAgAJQA/AVBGgHQBMgIAsgoQAZgWAYgmQAPgYAbg0QAhg/AWgjQAkg5AqgtIgMgEQgnAkgjA1QgTAdgjA/QgZAtgOAWQgWAjgWAVQgrAphHAIQg/AHg7gTQghgKgWgRQgZgTgMgpQgHgagIhAIgKhMQgIgugMgmQgTACgKAEg");
	this.shape_22.setTransform(-9.9254,34.5617,0.5985,0.5985);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#473231").s().p("AhEDFQhggBg4goQgmgcgMhqQgSiNgbhDQAIgDAZgEQARA0ARCLQAMBeAkAZQA0AoBYABQBeABA3gzQAegdA+hvQA9hvA6g2IAQAFQhABEhAB8Qg9BygkAhQg5AyhkAAIgCAAg");
	this.shape_23.setTransform(-9.9703,34.5765,0.5985,0.5985);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#818181").s().p("AgvBFIgCgBIAAgBQgGgVAHgrQAHguARgaIABgCIACABQAWAKAYAmQAXAlAFAhIAAABIAAAAQgRARgkAFIgVABQgPAAgLgDgAgsADQgHAqAGAUQAQAFAcgDQAigEAQgQQgFgfgWgjQgWgjgVgLQgQAZgHArg");
	this.shape_24.setTransform(-9.2898,40.9306,0.5985,0.5985);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFDEA").s().p("AgBBHQgHAAgTgHQgGgVAHgqQAHgtARgaQAUAdANBgQgPAQgQAAIgBAAg");
	this.shape_25.setTransform(-10.4868,41.0698,0.5985,0.5985);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D3D3D1").s().p("AgvBCQgGgVAHgqQAHgtARgaQAWAKAXAkQAXAkAFAhQgQARgkAEIgUABQgQAAgKgDg");
	this.shape_26.setTransform(-9.2898,40.9514,0.5985,0.5985);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#818181").s().p("AgeBMQg2AAgugPQgbgJgTgNIgBgBIABgCQAWgkAZgQIABgBIABAAIAFACQAXAHAxAFQAxAEAYgCQA3gCAkgTQAagOAigkIAEgDIAAAFQAAASgdAoQgjAwgtAWQgnASg5AAIgDAAgAisAlQATAMAZAIQAtAOA1ABQA6AAAngSQAogTAhgpQAaghAHgZQgiAkgeAOQghAPg1ACQgZACgxgEQgxgEgXgIIgEgBQgYAPgVAig");
	this.shape_27.setTransform(-11.0922,40.4712,0.5985,0.5985);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFDEA").s().p("AimAZQANgQAQgLQAVAIA1AFQAzAFAagDQA3gCAjgRQAbgOAkglQAAAIgLAUQgMAXgSAVQhCAohPADIgOAAQhJAAg8ghg");
	this.shape_28.setTransform(-10.5529,39.6871,0.5985,0.5985);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D3D3D1").s().p("Ag8BHQhMgHgngcQAXgkAYgQQAUAIA1AGQA0AEAZgCQA3gCAjgSQAcgPAjglQABASgdAoQgiAvguAVQgmATg2AAQgRAAgSgCg");
	this.shape_29.setTransform(-11.077,40.5489,0.5985,0.5985);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#818181").s().p("AAJBOQgUgGgRgPQgRgQgCgOIAAgBQAGgcANgbQAPghASgSIABgBIABABQATAIANAzQAPA1gJAsIAAABIgBABQgHAEgJAAQgJAAgKgEgAgZgbQgMAbgGAbQACANARAOQAQAOASAGQATAHAMgHQAJgrgOgyQgNgugQgKQgSARgOAfg");
	this.shape_30.setTransform(-21.3757,39.4198,0.5985,0.5985);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFDEA").s().p("AgOBCQgNgJgDgWQAGgdANgbQANggATgRQAKAHAAAxQABAxgNAfQgKAFgJAAQgHAAgHgFg");
	this.shape_31.setTransform(-22.2841,38.9484,0.5985,0.5985);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D3D3D1").s().p("AgKBDQgggTgDgVQAGgcANgcQAOggASgRQASAIANAxQAPA1gJAsQgHADgJAAQgQAAgVgMg");
	this.shape_32.setTransform(-21.3885,39.4374,0.5985,0.5985);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8D3B3A").s().p("AgQBxQg4gBgxgQQgvgPgQgXQgZglAZgpQARgbAigYQAYgRAhgFQAhgEAfAKQAMAEALAHQAggYA/gIQA3gIAhAIIADABIgCACQgQATgnBHQgaAwgNAVQgWAjgRAKQgUAOgyAAIgIAAgAhLhYQghAEgXARQggAWgRAbQgZAnAZAjQAOAUAuAQQAwAPA4ABQA2ACAWgOQAQgLAWgiQAMgTAbgxQAkhEAQgUQgigGg0AHQg8AJgeAXIgBABIgBgBQgPgIgJgDQgVgGgWAAIgTABg");
	this.shape_33.setTransform(-8.4662,36.4851,0.5985,0.5985);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F37D7E").s().p("Ag9BCQgwgQgPgWQgbgmAfgrQA4geBAACQA/ACA5AgQAgAQgbA0QghApg9AUQgygDgqgNg");
	this.shape_34.setTransform(-11.9334,38.1907,0.5985,0.5985);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE6666").s().p("Ag+BqQhegNgZglQgYgiAWglQAPgcAlgbQAdgUAogCQApgCAiAUQAfgYA/gJQA2gHAhAHQgQATgxBaQgrBQgYAPQgVAOgrAAQgaAAgigFg");
	this.shape_35.setTransform(-8.5267,36.508,0.5985,0.5985);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333130").s().p("AinDJQghgLgWgQQgagTgMgpQgIgagHhBQgHg6gGghQgLg2gTguIgBgCIACgBQAUgHBUgHIC2gKQDagLAwgJIABAAIABAAQALAJATAKQAUAKARAFIAQAFIgDACQgrAugkA6QgWAkghA+QgdA3gOAWQgYAmgZAXQguAohMAIQgTACgTAAQgyAAgwgPgAgfi/Qj3AMgjALQASAuALA2QAGAfAHA8QAHA/AIAaQALApAZASQAXAQAgAKQA/AUBGgHQBMgIAsgoQAZgWAYglQAPgZAbg0QAhg+AWgjQAkg6AqgtIgJgCQgogNgcgWQgpAIjhAMg");
	this.shape_36.setTransform(-9.955,33.5881,0.5985,0.5985);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7B3233").s().p("AAnC8QgngLgYgSQglgcgNhqQgRiMgchEQAXgIB3gIQgkBlAbBxQAbBwBPBJQgrgBgmgLg");
	this.shape_37.setTransform(-21.746,34.4108,0.5985,0.5985);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#453231").s().p("AhEDWQhggBg4gpQgmgcgMhqQgSiMgbhEQAcgKDmgMQD2gNAvgIQAPAKAWAMQAaAMARADQhABEhAB7Qg9B0gkAhQg5AyhkAAIgCAAg");
	this.shape_38.setTransform(-9.9999,33.6029,0.5985,0.5985);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D3A31").s().p("ABVBiQgEgtgTghQgagwg0gRQgggKgqADIgDAAIABgDQAGgYAZgSQAagTAaAEIAJACQArAPAcAxQAiA9gQBTIgDAPg");
	this.shape_39.setTransform(13.3092,-16.6267,0.5985,0.5985);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4D3A31").s().p("Ah0A2QAkhMA/geQAygYArAOIAJADQAXALAKAfQAKAdgJAXIgCADIgCgCQgggbgggJQgzgRgxAXQgiARgdAiIgKALg");
	this.shape_40.setTransform(-19.6472,-28.2004,0.5985,0.5985);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#794233").s().p("ABLBGIgSgHQhGgjg2hDIgBgBQgIgJgFgLIgFgLIAEgCIAFAKQAFAMAHAHIABACQA3BDBDAiQANAGAPAEIgBAFg");
	this.shape_41.setTransform(-26.8784,-1.7701,0.5985,0.5985);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#794233").s().p("AifAXQAHgHAMgFQA1gXBTgMQA0gJAvAHQAfAEAXAMQALAHAGAEQgNgJgcgIQg3gPhJALQhLALgyAUIgkATg");
	this.shape_42.setTransform(9.8412,10.6548,0.5985,0.5985);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F99F3B").s().p("AglA8Qg5gBgqggIgegeIAkgTQAygVBMgMQBLgLA3AQQAcAIANAKQgcAYgoAXQhNAtg3AAIgEAAg");
	this.shape_43.setTransform(9.8412,12.6114,0.5985,0.5985);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#303136").s().p("AgaBTQgUgGgHgdQgGgdALgiQALgiAWgUQAWgUAUAHQAUAGAHAdQAHAdgMAiQgLAigWAUQgQAPgPAAQgGAAgFgCgAgNhBQgVATgKAgQgLAgAGAcQAGAbATAFQATAHATgTQAVgTAKghQALgegGgcQgGgcgSgFIgKgCQgOAAgPAOg");
	this.shape_44.setTransform(-23.9236,-5.6905,0.5985,0.5985);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgCALQgIgDACgKQACgEADgDQADgCAEABQADABACAEQABAEgBAEQgBAEgEADIgEABIgCAAg");
	this.shape_45.setTransform(-25.3624,-5.0171,0.5985,0.5985);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHAaQgKgDgDgJQgEgKADgKQAEgLAIgFQAJgGAIADQAKADADAKQAEAJgDAKQgEALgJAGQgFADgFAAIgGgBg");
	this.shape_46.setTransform(-24.2448,-7.5226,0.5985,0.5985);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#303136").s().p("AgNArQgKgEgEgPQgDgOAGgRQAGgSALgKQALgLAKAEQAKAEAEAPQADAPgGAQQgFASgMAKQgIAIgIAAIgFgBg");
	this.shape_47.setTransform(-23.9237,-5.6905,0.5985,0.5985);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5074B6").s().p("AgVAvQgUgGgGgcQgHgbALgiQAHArAdAIQAcAJAegdQgLAggVATQgQAPgOAAQgFAAgFgCg");
	this.shape_48.setTransform(-24.1375,-3.6667,0.5985,0.5985);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#384E9C").s().p("AgZBRQgUgHgGgcQgGgcALggQALgiAVgTQAVgTATAGQAUAGAGAcQAGAdgLAgQgKAigWATQgPAPgPAAQgFAAgFgCg");
	this.shape_49.setTransform(-23.9306,-5.6849,0.5985,0.5985);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#303136").s().p("AgIBsIgKgDQgZgIgOgfQgPggAEgnQAEgsAWgeQAXgeAcACIAKACQAZAJAOAfQAOAfgDAoQgEAsgWAeQgVAcgZAAIgFAAgAgmhMQgWAcgEAsQgDAlANAeQAOAfAXAHIAJACQAaADAWgdQAVgdAEgrQADglgOgeQgNgfgXgHIgJgCIgEAAQgYAAgTAag");
	this.shape_50.setTransform(8.6447,4.0806,0.5985,0.5985);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAAOQgFgBgEgEQgDgFABgEQAAgGAEgEQAEgDAEAAQAFABAEAEQADAEgBAFQAAAGgEADQgDAEgFAAIAAAAg");
	this.shape_51.setTransform(7.0775,4.8284,0.5985,0.5985);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAgQgMgBgIgKQgHgKAAgMQABgOAKgIQAJgJALABQAMABAHAKQAIAKgBAMQgBAOgJAIQgIAIgLAAIgBAAg");
	this.shape_52.setTransform(7.734,1.791,0.5985,0.5985);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#303136").s().p("AgDA1QgOgBgJgQQgJgRACgVQACgWALgPQALgPANABQAPACAIAQQAJARgCAVQgCAWgLAPQgKAOgMAAIgCgBg");
	this.shape_53.setTransform(8.6591,4.0677,0.5985,0.5985);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5074B6").s().p("AgHA3QgcgCgRggQgRggAEgsQAWAvAsADQArADAXgpQgDArgWAcQgVAcgYAAIgEgBg");
	this.shape_54.setTransform(8.6412,7.064,0.5985,0.5985);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#384E9C").s().p("AgIBpQgcgCgQggQgRghADgrQAEgrAWgeQAWgdAbADQAcACARAgQARAhgEArQgEArgWAdQgVAbgYAAIgEAAg");
	this.shape_55.setTransform(8.664,4.0804,0.5985,0.5985);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2D2D2D").s().p("AgRDVQgOgCgGgCQgwgQgcg/Qgcg/AGhOQAIhYAsg7QAWgcAagOQAagOAbACQAJAAALAEQAwAQAdA+QAcA/gHBOQgHBYgtA7QgqA3gzAAIgIAAgAghjFQgZAOgVAcQgsA6gHBXQgHBMAbA9QAcA+AvAPQAKAEAJAAQA1AFAsg6QAsg6AHhWQAGhMgbg+Qgbg+gvgPQgLgEgIAAIgHAAQgWAAgWALg");
	this.shape_56.setTransform(8.9038,1.045,0.5985,0.5985);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AhmCdQgZg8AGhLQAHhWAtg7QAsg6A2AEQAzAFAhA3QApC4h6BXQghAXgkABIgDAAQgjAAgbgVg");
	this.shape_57.setTransform(8.2064,-0.9405,0.5985,0.5985);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D3D3D3").s().p("AgQDTQg4gFgihBQgihBAHhWQAIhXAsg7QAsg6A3AEQA3AFAiBBQAiBBgHBWQgHBYgtA6QgpA2gxAAIgIAAg");
	this.shape_58.setTransform(8.9033,1.0302,0.5985,0.5985);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2D2D2D").s().p("AgQDTQg4gFgihBQgihBAHhWQAIhXAsg7QAsg6A3AEQA3AFAiBBQAiBBgHBWQgHBYgtA6QgoA2gyAAIgIAAg");
	this.shape_59.setTransform(9.2026,0.1024,0.5985,0.5985);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2D2D2D").s().p("AATC6QhTgsgyhJIgBgBIAAgBQAFgmANgoQAeheArguQAqgtAuAPQAoANAKBEQAJBFgbBSQgbBUgvAyIgCABgAgWiTQgpAtgeBdQgNAkgEAoQAxBIBRAqQAugyAahRQAbhRgJhDQgJhCgmgNQgLgEgKAAQghAAgfAig");
	this.shape_60.setTransform(-24.6048,-9.0731,0.5985,0.5985);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhWCBQgKgMgMgRQAFgpAMgmQAdhXAnguQArgzAwAQQAYAIANAeQAMBOgbBGQgeBNg9AeQgNAGgNAAQgbAAgggXg");
	this.shape_61.setTransform(-24.8989,-10.9956,0.5985,0.5985);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D3D3D3").s().p("AhxBEQAFgpANglQAchYAoguQArgzAvAQQAoAMAJBEQAJBEgbBSQgbBUgvAxQhUgsgxhIg");
	this.shape_62.setTransform(-24.6105,-9.0905,0.5985,0.5985);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2D2D2D").s().p("AhxBEQAFgpANglQAchYAoguQArgzAvAQQAoAMAJBEQAJBEgbBSQgbBUgvAxQhUgsgxhIg");
	this.shape_63.setTransform(-24.3112,-10.0182,0.5985,0.5985);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDC67F").s().p("AiQDeQgehZAtjDQAdh6A3g+QA1g9A6ATQA5ASAWBZQAWBYgTCBQgWCaguA2QgfAlhHAKQgNACgMAAQhJAAgYhHg");
	this.shape_64.setTransform(9.2243,-3.7995,0.5985,0.5985);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FDC67F").s().p("AhWDqQgcgZgMgOQgUgWgIgaQgThBAviPQAhhoBAg9QA/g9A5ASQA3ASAMBHQAKBEgdB+Qg7EEhbAAQgjAAgogog");
	this.shape_65.setTransform(-22.007,-14.6015,0.5985,0.5985);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#794233").s().p("AkSM0Qg7gTgngaQgogagNgcQgRgjAEgnQADgZARgxQANgkAFgWQAOg2gOgyQgLgqgkg3QgTgegsgsQgvgxgTgeQghgzgMhBQgQhaAehUQAehUBFg5QAOgrAShNQAXhhAPgtQAZhPAhg3QA0hWBSgzQBRgzBJAHQAXADAVAGQAiAMAyAjQAoAcAUAFQAZAGA0gLQA0gKAggBQA2gBA6ASIAYAJQBSAgA1BFQA0BGATBmQANBIgGBOQgEAxgSBnIgTB2QBfCSgyCZQgoB8hpBGQghAWgzAYQgcAOhAAbQhOAigdAPQgyAbgLAXQgLAWgOAzQgKAmgIATQgMAdgWAWQgqAphgACIgIABQhVAAhXgdgAj1sgQhQAzgzBVQghA3gZBOQgPAugXBgQgSBLgOAuIgBABQhEA4geBTQgdBTAPBZQAMBAAhAzQATAdAuAxQAsAtATAdQAlA4ALArQAOAzgOA3QgFAXgNAkQgRAwgCAXQgFAnARAiQANAcAnAZQAmAZA6ATQBaAdBYgBQBggCAogoQAVgVAMgdQAIgSAKgmQAMgwANgaQAMgYAxgaQAegQBPgiQA/gbAdgOQAzgYAhgXQBnhFAoh6QAyiYhfiQIAAgBQAGgxANhHQAShnADgwQAGhOgNhHQgShlg0hFQgzhFhRgfIgYgJQg5gSg2ABQgiABgxAKQgdAGgMABQgWACgQgEIgDgBQgWgHgkgaIglgZQgYgOgXgHQgQgFgagEIgTgBQhAAAhGAsg");
	this.shape_66.setTransform(-4.6845,10.4132,0.5985,0.5985);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FEDDA1").s().p("AitEhQiRghgnheQAAgXAJgfIATg5QANgsAigwQAegqAEgfIAGg2QAEgggBgUQAOgbASgXQA6gNBngDQBzgEAvgGQAxgIBHAHIB6AMQhpCJghB9Qg4AZgbBjIgWBRQgPAugTAaQgHAGgKAHQgMAIgKACQgwAYhBAAQgvAAg3gMg");
	this.shape_67.setTransform(-9.4613,40.4997,0.5985,0.5985);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F99F3B").s().p("Aj5MtQiRghgnheQAAgXAJgfIATg5QANgsAigxQAegqAEgfQAJhtgBgEQgEg6g0gLQhWgTg+gpQhHgtgahBQgNhYAfhSQAehQBDg2IAzjHQAhh9ArhIQA2hYBSgzQBQgxBHAIQA1AGA3AkQA/AqAQAFQAVAEAggFIA+gLQBbgOBbAjQBQAgA0BDQA1BFATBoQAPBTgYBjQgqCqgFAiQAYAkAWAuQAZAzAGAeQgDCZiJByQh/BrinASQhXALgiBqQgJAegPA9QgQA1gWAdQgFAGgKAHQgMAIgKACQgxAYhBAAQgvAAg3gMg");
	this.shape_68.setTransform(-4.909,9.1335,0.5985,0.5985);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EDB677").s().p("Ah+E4QhOgQg7geQg/gggSglQgVgsAOg4QAXhCAKgmQACgJADgTQANgbAhhqQAZhRAjgqQA6gNBmgDQB0gEAvgGQAwgIBIAHIB6AMQijDWAKC2IgHAKQgJASgVBMQgQA4geAeQghAhhIAHQgTACgWAAQgwAAg2gKg");
	this.shape_69.setTransform(-9.4469,41.7666,0.5985,0.5985);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E4773B").s().p("AjONEQhNgQg7geQg/gggSglQgWgsAOg4QAYhCAJgnQAOg2gOgzQgLgqgkg4QgRgageggIgzg2Qg8hFgQhXQgQhaAfhUQAehTBEg4IAzjHQAhh9AshIQA1hYBSgzQBQgxBHAIQA2AGA2AkQA/AqARAFQAUAEAggFIA/gLQBagOBbAjQBRAgAzBDQA2BFATBoQAQBZgPBuQgIBCgbCbQBeCQgwCXQgnB8hqBIQgvAfidBEQh8A2gRAiQgJASgWBMQgPA4gfAeQghAhhGAHQgVACgVAAQgwAAg3gKg");
	this.shape_70.setTransform(-4.6898,10.4004,0.5985,0.5985);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3B3230").s().p("AhXAEQBBgSA9AJQAfAFASAHQgSgHgfgCQg9gHhAARg");
	this.shape_71.setTransform(-16.9578,-57.5795,0.5985,0.5985);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3B3230").s().p("AAyCcQAOiWg7hfQgRgegYgVIgTgPIAVAPQAYAUASAeQA8BegOCYg");
	this.shape_72.setTransform(-1.8359,-44.879,0.5985,0.5985);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3B3230").s().p("AgyCEQAWh5AohTIAkg8IADADIgkA8QgnBSgWB4g");
	this.shape_73.setTransform(4.4694,-44.3403,0.5985,0.5985);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3B3230").s().p("AiBCKQAsiNB9hXQAvggArgQQgpARgvAhQh7BXgsCMg");
	this.shape_74.setTransform(8.7265,-43.1806,0.5985,0.5985);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3B3230").s().p("AAnCJQgHiJgmhRQgMgagNgRIgMgMQAGAEAIAJQAOAQANAaQAmBPAICLg");
	this.shape_75.setTransform(43.9273,-22.7933,0.5985,0.5985);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3B3230").s().p("AgLggIgBg2IAEA1QAGBAAPA3IgEABQgPg3gFhAg");
	this.shape_76.setTransform(38.6303,-4.5383,0.5985,0.5985);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3B3230").s().p("AClDOQhUgbhFhSQgsg2gghCQADAhANApQANApAQAZIAFAIIgIgFQhOgwgwhxQglhWgHhVIAEAAQAHBSAjBTQAtBtBKAxQgQgdgMgqQgNgpgBghIAAgLIAEAKQAhBHAvA6QBQBfBiAUIAAAEIgcgHg");
	this.shape_77.setTransform(43.3437,2.7338,0.5985,0.5985);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3B3230").s().p("ACyNVQgJg6ANg4QAIghAWgzIACgGQglAFgvATQg3AWgXAbIgBABIgCgBQg5g3hEg5QiIhyg3gSQgVgHgIAIIgbAgQgsA1gXAWQgoAmgbADIgDABIABgEQAohdgehNQgSguhBhMQg0g6gSgkQgCA7giBWIgDAHIgBgHQgEgUgShHQgShGgIgoQgNhBgCg4QgBheARg/QAVhKA4hGQhJAng2AFIgKAAIAJgEQBOgsBHhzQAzhSA2iFIAMgbQAyh7AggrQAyhDBXgUQBHgSBOAZQA2ASAyAjQAwAkAjAuQAfAmAnggQAOgKAbgXQBCg7AqgUQBHgiBJAWQBeAcAnBUQAaA5AJBxQADApADBQQAFBtAFBAQAIBjAOBGQAMA8AqB4QAaBKAIAgQAOA1gDAiIgBAHIgDgGQgQgfgdgjQARCnhTCgQhUCgiaBgIgOAJIAMgMQA8g/AYhDQAQgugBg1QkIBrguCsIgDAJgADdKEIgBADIgEAKQgVAwgHAfQgNA1AGA1QA0ioEFhqIADgBIAAADQACA0gPAtQgVBBg3A9QCVhhBOieQBPifgTiiIgBgHIAEAFQAZAcAWAlQABghgOgyQgIgfgYhGQgohwgOhEQgOhGgIhjQgFg6gFh0IgHh5QgIhugZg4QglhShZgcIgFgCQhIgWhFAiQgpAUhCA6IgpAiQgbAVgWgIQgPgFgNgPQgigugwgjQgygkg1gRQhMgYhGARQhWAUgxBBQgfApgzB8IgLAcQg2CCgwBRQhFBxhMAuQAegEAngQQAegMAagOIAKgGIgHAJQg9BHgWBMQgSA+ACBgQABA4ANBCQAHAkATBJQAQA7AFAYQAhhWAAg7IAAgKIAEAJQALAYAVAcQANASAcAfQBCBMASAuQAeBOgmBeQAZgGAmglQAVgVArgzIAbggQAJgKAYAIQA3ARCABrQBDA4BDA/QAYgbA6gXQAxgTAkgEg");
	this.shape_78.setTransform(-5.4502,6.4983,0.5985,0.5985);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4D3531").s().p("AC3LfQAHgaAYg7QgjAEgxATQg7AXgYAcQhLhIhShDQikiFgbAeQgwA7gdAeQgzA2gfAEQA0h8hKhqQgMgRg4hBQgqgygQgiQAAA/gkBaIgjiQQgahmgBhMQgChiAUhCQAWhJA7hGQgdARgjANQgqAQgdACQBMgqBGhvQA0hUA5iJQA8iRAbgnQAyhKBcgVQBegXBkAxQBVAqA2BJQAhAnApggIA5gwQAmggAbgSQBUg0BVAaQBbAbAnBQQAcA6AIBzQAFBBAGCgQAJCUASBbQAMA7A0CVQAnBzgEAxQgRgighgmQAUCqhWCkQhUCgiXBeQBAhCAXhIQAOgsgBg0QkMBtgvCtQgKg8AQg9g");
	this.shape_79.setTransform(-5.2157,6.2627,0.5985,0.5985);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3B3230").s().p("AiHBZQBsgMBchVQAvgsAYgoQgYAqguAsQhbBXhuAMg");
	this.shape_80.setTransform(-48.1859,-16.6585,0.5985,0.5985);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3B3230").s().p("AgTBRQAEhMARgxIARgkIgOAkQgPAzgEBKg");
	this.shape_81.setTransform(-52.1661,26.7347,0.5985,0.5985);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3B3230").s().p("AgCg4IAMhEIgKBEQgJBWAJBeIgEABQgJhfALhWg");
	this.shape_82.setTransform(-35.1395,52.1122,0.5985,0.5985);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3B3230").s().p("AgaCAQAshOAGhhIgChTIAFBUQgFBigsBPgAAWiCIAAAAIAAAAg");
	this.shape_83.setTransform(-21.2821,76.562,0.5985,0.5985);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3B3230").s().p("AgsBGQAwguAZg0IAQgsIgOAtQgYA2gwAug");
	this.shape_84.setTransform(6.5568,65.4593,0.5985,0.5985);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3B3230").s().p("Ai2FTQEFjDBJjlQAehegDhbIgIhIIALBJQAEBbgeBeQhLDokEDDg");
	this.shape_85.setTransform(33.0367,45.9773,0.5985,0.5985);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3B3230").s().p("AlMTZQgIgtgagrQgQgagmgxQgxg9gWgmQgkhCgNhNQgLAcgSAdQgUAegSAMIgGAEIADgGQAbhDgjhbQgYhAg/hXQgVgegegkQgug4gPgeQgYgvABg5QgPAvgdAhQgZAcgWAFIgGABIAEgFQAmgtgKhNQgGgugihoQgahKgJgoQgQhAABgxQAChaAYhKQAOgsAihAQATgkAIgVQgVAEgZAAQgjABgSgHIgFgCIAFgCQB2g0BniIQBKhhBNidQA9h8A6hIQBRhlBdgaQhTgcgOgbIgCgDIAEAAQAUABAcgHIA3gTQBBgYAogIQBCgNA9AJQAgAGAZAIQBPAaA7A3QA1AyAPA0QA4hFA1ggQBKgrBYALQAkAFAgAKQBIAYA9A3QAjAfApA1QATAZAZASQAZASAZAIQAnANAbgOIAKgEIgHAIQgSAVgdALQgcAMgbgDQAeBMAHBcQAGA9gBClQgBCWAXBoQAXBoBBCLQBECSgGCXQgHCfhYCKQhaCMicBiQhtBDh/AnQkIBSg3BSIgEAFIAAgGQgEg4ARgtQgZAUguAWQgcANhDAcQhkApgvAYQhRArgtAvIgDADgAoZM7QAMBQAlBDQAVAnAyA+QAmAwAQAaQAaArAIAtQAuguBRgqQAxgaBhgnQBDgcAfgPQAxgXAYgWIAHgGIgEAIQgTAtADA4QA8hQEChQQB/gnBshDQCbhhBaiMQBViEAIiaQAJibhFiUQhCiMgXhoQgXhpABiWQAAingFg8QgIhdgfhMIgBgEIAEABQAYAEAbgJQAagJASgSQgZAJgjgLQg3gSgpg1Qgpg1gjgfQg8g3hIgXQgcgJgmgFQhZgLhIAsQg1Afg4BGIgDAEIgBgFQgNgzg1gzQg7g4hPgaQgbgJgegEQg8gKhCANQglAIhCAYQglANgRAFQgcAIgTgBQAQAZBTAbIAHACIgHACQheAYhTBlQg6BIg+B9QhNCehJBgQhmCIh1A1QATAGAigCQAYgBASgEIAEgBIgBAEQgIAUgVApQgiBAgOArQgYBKgCBZQgBAxAQA/QAJAoAaBKQAiBmAGAtQAKBNgiAvQAXgKAYggQAbglAMgvIAEABQgFBAAYAyQAPAfAwA8IA0BCQA9BWAZBAQAjBZgYBDQASgPATgeQARgdAIgaIADgJg");
	this.shape_86.setTransform(-2.9826,10.0381,0.5985,0.5985);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8B4F39").s().p("ABHAsQhUgMhHAgQAQgSAggMQATgHAkgKQhDgEgkAGQg6AJggAiQAfgqAwgXQAsgVA2gEQg8gNg+AZQg5AVgrAuQBGhvCBgeQCBgeBvBGQhLgiiFAMQAzgBA8AVQArAPA2AdQhtg4hfAXQA1ADAxAXQAyAWAjAmQhjgwhEAVQBoAHBRBLQhHgthPgLg");
	this.shape_87.setTransform(-19.9953,-49.7869,0.5985,0.5985);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8B4F39").s().p("AiJgnQAbgKAhAAQAVAAApAFQgtgPg9ADQgWAChVAMQBSgdAdgGQBHgQBAAKQBAALA4AeQAyAbAlAmIAEAKQg/hDiRgaQBGAiASAMQAvAdATApQgqghgWgQQgmgagggHQAmAcATAWQAcAfAIAhQhWhsi5gTg");
	this.shape_88.setTransform(-9.4164,-59.1287,0.5985,0.5985);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8B4F39").s().p("AATgcQhhgqhdAZQAkgXA0ABQAjAAA6AMQgggQgxgGQg3gFgcgEQBcgTBWAfQBbAgA3BJQgmguhQgSQBMArAsBUQg7hThegng");
	this.shape_89.setTransform(26.5999,-51.1609,0.5985,0.5985);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8B4F39").s().p("ABrB6QgZhAgogoQALA9ABAVQAEAvgLAiQgXhtgNgnQgahPgvg2QgUgXglgNQgQgGg1gKQBKgKA9A2QA1AvAcBPQgFgigFgSQgHgegRgRQAPAFAQATQATAVAJAFQgmhUhbg0QAUgCAbAIQAPAEAcALQgggmg4gXQgngQhCgNQB6gJBrBZQBkBTAnB5Qgrg8gRgTQgmgpgqgOQAvA9AWBbQAPBBAIBrQgVhSgNgig");
	this.shape_90.setTransform(30.8644,-36.492,0.5985,0.5985);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8B4F39").s().p("AAABaQAEgugHgcQggBggSAtQAPhLgGhOQgGhOgbhIQAZAYAOAoQAKAcAJAxQACgtAAgVQgBglgIgaQAXAqALA1QAJAoAFA7QAXg8AJgwQAMg9gIg3QAgBQgVBaQgSBRg1BOQgCgUAEg3g");
	this.shape_91.setTransform(49.3164,30.2809,0.5985,0.5985);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8B4F39").s().p("AhLgCQgQh+AvhQQgIAmgBAtQAAAhAFAyQgDAcAHAZIgEg1QACgfAPgmIAehBQgJA3gCAcQgCAuAJAkQgCgjARgyQAchMACgIQgKBWAEAqQALgvAjg9QgVAugCBHIADB3QgNgZgMgfIgUg4QgIAhADAxIAGBTQgTgsgIgXQgPgnACggQgGArABBCIACBtQgti/gDgUg");
	this.shape_92.setTransform(-54.6426,8.33,0.5985,0.5985);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#714034").s().p("AknQMQgKhag2gxQgBAmACBLQgCBBgRAsIg/hrQglhBgfgtQgKgNgIgUQgIgVgBgRQgCgmABilQABh7gRhOQAJCKgsCKQAAg6gRhCQgMgvgbhHQAAAhgCBCQAAA6AJAqQgIgLhHhPQgxg3gRgtQgghYAEhaQAEhbAohUQgMAKgFACQgfAzgbCAQgYB0gqA1QAQg/gyiUQg3imABhLQAChVAWhHQAPguAeg6QB8ghBbhLQBkhSAihwQhJBahiA4QhoA7hsAIQBrg6BfiDQBDhdBHiQQBCiHBAhLQBOhbBagXQBZgOBAAHQgigJhfgKQhSgJgsgTIgBgBQAZABAngMQAXgIA1gTQBtglBWAOQBAALA3AeQAyAbAlAnQAZA9gYBcQgDgbgRgbIghgsQAOAoAGAcQAHAlgEAgQgbg0glgmQgogrgwgTQA7ApAcBNQAZA/ADBVQgJgYgKgNQgNgTgTgGQAGANALAdQALAbAHAOQhIg6gngZQhGgsg+AIQBWAkBPBkQAsA5BUB1QBSiAASgZQA/hWBAguQgmACgrAaQgvAigXAPQASgcAigcQAUgQAqgeQgeAIgOAGQgXAJgQANQAYgoAxgoQAcgXA6grQg0AHg6AeQg5AegkAnQAfhhAigvQA2hKBhgbQApgHAoAFQBhAMBOA8QAvAkA2BFQAlAvAwATQAuATAggQQgTAVgdAMQgdALgbgEQAeBMAIBaQAGA/gBCoQAACVAWBnQAXBpBCCMQANAbAJAZQgYgHgcgaIgsgsQiRiEgiirQgIA2AEBhQgjgtgRgfQgYgsgDgoQgBgQgChRQgBg6gJglQgqChA5ChQA8CkCIBOIgEgWIgEgVQA8BgCHA6QAJAtADAxQgTCRg4BhQgiA8gfAfQgvAvgzgHQAhhTAGhdQAGhcgXhYQAGBhgSBTQgLA4glBlQgUAvgiApQgtA2gsAGQAMgiABgUQgkA0gdAeQgnAngsAUQggARhdAjQhPAdgqAfQATglAThAQAWhLAJgZQgaBDgzAzQg0A2hGAcIh5AlQhHAWgnAkIAfhAQASgmAGgcIhdB2Qg/BMgfApQAHh3gEgng");
	this.shape_93.setTransform(-2.9385,7.1215,0.5985,0.5985);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#4D3531").s().p("AlzR4QgMgTgzhAQhZhygSh3QgJAdgTAfQgVAhgTANQAahAgfhWQgZhFhBhcQhKhagZgnQgphAAGhQQgNA1gfAmQgbAigXAFQAhgpgDg+QgCgugZhNQgfhagNgvQgXhQACg6QADhyAnhcQAvhYAOgmQgSAEgcABQglACgTgIQB2g0BpiLQBKhhBMicQBDiHA/hKQBOhcBbgWQhZgcgOgcQAYACAngNQAYgHA1gUQBtgkBVAOQBnAQBNBBQBDA4AQA+QA4hGA1ggQBKgsBZALQBhAMBNA7QAwAlA1BFQAlAuAwAUQAvATAfgRQgSAWgeALQgdALgbgEQAfBMAIBaQAGBAgBCnQgBCVAXBnQAXBqBBCMQBECSgGCWQgHCehYCKQhTCCiMBdQhzBMiOAsQkJBSg4BTQgEg9AUgwQgbAZg9AcIh5AzQiqBHhDBFQgJgygfgwg");
	this.shape_94.setTransform(-2.9231,9.9795,0.5985,0.5985);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#794233").s().p("AiSCHIgBAAQgVgLgOgUQgOgTgEgYQgJgxAignIAAgBIABAAQAOgDAXgOIAugdQBCgsAigQQA8gcAtAIQAeAFAWAUQAVAUAJAfQAMApgLAvQgLAwgdAkQgqAzhdAKQgTACgRAAQhCAAhCgWgAAKiCQgiAQhAArQg+ApgWAGQggAlAIAvQAJAwAqAXQBVAbBRgHQBbgJApgyQAegkAKgvQALgtgMgpQgQg1gwgQQgJgDgGgBQgJgBgKAAQglAAgvAVg");
	this.shape_95.setTransform(55.939,-10.2627,0.5985,0.5985);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F6987B").s().p("AiVBvQgfgRgOggQBDAFA4gQQBAgRApgqQgbASgoAFQgdAEgtgCQAQgEARgLIAbgSQghAMgagJQAZgMArgiQAxgoASgLQBRgyA4BBQAXAdAGAoQgIA3gjAqQgqAzhbAJQgTACgSAAQhBAAhCgWg");
	this.shape_96.setTransform(56.1222,-8.9458,0.5985,0.5985);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E57357").s().p("AiSCFQgqgXgJgwQgKgxAignQASgEAmgYIBIgvQBig+A9ALQBKANALBVQAKBRg2BCQgqAzhbAJQgTACgSAAQhAAAhDgWg");
	this.shape_97.setTransform(55.9404,-10.2607,0.5985,0.5985);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#794233").s().p("Ai0D9IAAAAQgZgOgVgsQgVgsgLhAQgOhKAFhCQAFhLAcggIABgBQATgFAagNIAxgaQBHgoApgOQBDgXBCALQAPADAOAEQBbAdAeBlQAOAtgBA1QgCA0gQA3QgRA7glAtQgmAtg1AZQg/AehOAAQhDAAhOgWgAgaj/QgoAOhHAoIgxAaQgaANgUAFQgaAggFBLQgEBBANBHQAMA+AUAsQAUAsAYANQCdAuBzgxQB0gxAlh/QAghqgZhbQgchnhcgeQgPgFgOgCQgUgDgWAAQgsAAgtAPg");
	this.shape_98.setTransform(57.5743,-12.4426,0.5985,0.5985);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F99F3B").s().p("AjjDNQgjhRgDhsQgEhwAlgrQAagHArgXIBNgqQBog1BYAPQBKANAqA4QAmAzAGBPQgKCmhuBKQhTA7hmAEIgPAAQheAAhPgwg");
	this.shape_99.setTransform(57.547,-13.6373,0.5985,0.5985);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E4773B").s().p("AizD7Qg7ghgWigQgWigAyg6QAagGArgXIBNgrQBog0BYAPQBrASAmBoQAjBggkB5QgkB5hsA0QhAAehNAAQhDAAhNgWg");
	this.shape_100.setTransform(57.566,-12.4218,0.5985,0.5985);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#794233").s().p("AAcCiQgSAAgTgHQg0gQgkguQgpg0AAhCQABhBAsgnQAqgmA6AHQASADAQAFQApANAcAgQAWAZAHAZIAAABQAAAagpBVQgrBagaARIAAAAgAhah+QgsAnAAA/QAABAAoAyQAjAtAzAQQAQAGAUABQAZgRAqhZQAnhTABgZQgIgZgUgXQgcgfgogNQgMgFgUgCIgSgCQgtAAgiAfg");
	this.shape_101.setTransform(-46.4651,-34.7519,0.5985,0.5985);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F6987B").s().p("Ag/BSQg1g3AAhMQAAgKACgKQAXgrAsgQQA9gWA1ArQAyAqgBBBIg2gbQgegQgZgFQAZALAWAZQAOANAZAfQgOgCgngQQgfgMgWAAQBIASASBSQgQAbgMAHQg+gDgygzg");
	this.shape_102.setTransform(-47.6771,-33.3408,0.5985,0.5985);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E57357").s().p("AhTBqQg2g4ABhLQAAg+AqgnQApgnA8AHQA3AHAlAjQAcAbAKAgQAAAZgoBUQgrBbgaARQg9gDgygzg");
	this.shape_103.setTransform(-46.4503,-34.7398,0.5985,0.5985);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#794233").s().p("AAoEbQgcAAgcgJQhTgbg9hSQhBhYAGhfQAEhBAZg3QAZg4AqglQBCg4BQAGQAaACAaAIQA/AUAqA5QAfArAJAvIAAAAQgDAwhBCTQhFCegqAhIAAABgAh4jjQgqAkgZA3QgYA2gEBAQgGBdBBBXQA8BRBRAaQAbAKAbgBQAqghBEicQBAiRADgwQgJgtgfgqQgog4g+gUQgagIgagCIgPAAQhFAAg6Ayg");
	this.shape_104.setTransform(-45.6999,-36.3223,0.5985,0.5985);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F99F3B").s().p("Ah8CzQhchcAHhtQAHhzA9hCQA+hDBeAHQBWAHA4A+QAqAvAMA7QgDAwgzCBQg5COgqAhIgDAAQheAAhVhVg");
	this.shape_105.setTransform(-45.2361,-37.3145,0.5985,0.5985);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E4773B").s().p("AiKC9QhWhhAHhuQAHh0BEhLQBGhOBfAIQBVAGA4A+QArAwALA7QgCAthBCUQhFCegqAiIgDAAQhcAAhThcg");
	this.shape_106.setTransform(-45.7007,-36.3242,0.5985,0.5985);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3B3230").s().p("AjVNvQhbhIA3tQQARkHAek2IAakFIABgEIACACQBnBKBCBdQBVB6AOCQQANCMAQBGQAMA2AjBbQBICyATBwQAaCfgxCXQg0CgiCBgQhuBUieAcIgBABgAjKpCQgcE1gREFQgyMrBWBIQCpgfBzhfQBzheAviSQAxiWgbieQgShuhIizQgjhbgMg2QgQhGgNiNQgOiNhUh5QhAhchlhJQgOB6gQCrg");
	this.shape_107.setTransform(48.9377,5.2775,0.5985,0.5985);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#714034").s().p("AjyhlQASj4AbkWIAXjmQBsBOBCBkQBPB2AOCHQANCLAPBFQANA4AjBcQBHCwATBsQAbCigxCYIgHAUQAUhugjhbQADBagYBPQgcBYg5A6QABgSAMg2QAKgrgEgbQg1BwhgBZQhgBYh2AxQg+irA3sUg");
	this.shape_108.setTransform(48.9408,4.1702,0.5985,0.5985);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#4D3531").s().p("Aj3gqQARkJAek3IAakCQBsBOBCBkQBPB2AOCHQANCLAPBFQANA4AjBcQBHCwATBsQAbCigxCYQgzCgiCBgQhuBTieAdQhahHA3tQg");
	this.shape_109.setTransform(48.9336,5.3074,0.5985,0.5985);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.7,-64.5,136.4,149.1);


(lib.Slots = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.slot0 = new lib.Symbol1();
	this.slot0.name = "slot0";
	this.slot0.setTransform(485.4,431.25,1,1,0,0,0,26.1,144.7);

	this.slot1 = new lib.Slotcopy3();
	this.slot1.name = "slot1";
	this.slot1.setTransform(694.95,431.7,1,1,0,0,0,-121.9,48);

	this.slot2 = new lib.Slotcopy();
	this.slot2.name = "slot2";
	this.slot2.setTransform(258.6,409.45,1,1,0,0,0,16.1,86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot2},{t:this.slot1},{t:this.slot0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(226.3,345.3,569,215.99999999999994), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_36();
	this.instance.setTransform(1.2,1.3,1,1,0,0,0,1.2,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,2.4,2.6), null);


(lib.StarPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJQgFgDAAgGQAAgFAFgDQAEgEAEAAQAGAAAEAEQADADAAAFQAAAGgDADQgEAEgGABQgEgBgEgEg");
	this.shape.setTransform(-65.0836,-6.3198,0.6107,0.6107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50616C").s().p("Ah0CQQgFgwgBgeQgBg0AIgkIAAgCQAHgdAPgRQAHgJAGgCQgbAfgGBBQgDAsAGBBQAMgVAYgNQAXgMAbgCQAegDAbALQAfANANAdQAYgGAJgdQAPgygdhTQgehUgvgsIAXASQAcAbAUAuIABACQAVAuAIAtQAHAwgJAfQgLAlggAFIgEAAIgBgDQgKgbgegNQgZgKgdACQgeADgWAOQgaARgGAaIgFAbg");
	this.shape_1.setTransform(-30.0087,16.5017,0.6107,0.6107);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8C6CC").s().p("AgOgKQAHg+AZgTQgRAjgFA4QgEAggDA8QgKgxAHg1g");
	this.shape_2.setTransform(-35.7451,17.2651,0.6107,0.6107);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91A4B0").s().p("Ag4hBIAahRIBIgHQAkAjAMA9QALA9gWAhQgLARgcAKIg0APQhFAVgIA3QgQijAxg5g");
	this.shape_3.setTransform(-31.4441,15.4787,0.6107,0.6107);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A8E98").s().p("Ah0ApQAFhJAfgjIBihZQBFA+AYBwQAaB1g/AKQgWg5hMAGQhNAGgLA5QgHhGADgug");
	this.shape_4.setTransform(-29.9583,15.6467,0.6107,0.6107);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#96874C").s().p("AjgE/QgRgEgDgJQgEgLAMgKQAIgHAbgOQAogWAYgRQAsgeAlgnQA+hEAciAQAUhYgEhBIAAgBQAThRAqgeQAZgTAbADQAjAEAYAhQAXAhABAtQABBdguBtQguBthIBQQg9BDhXAmQhKAgg8AAQgOAAgLgDgABpkhQgfAfgPBBQADBCgUBbQgcCBhABFQgmAogsAeQgYARgpAWQgYANgIAGQgJAHACAHQABAEANADQAtAKBSgcQBlgkBGhNQBIhPAthrQAthtgBhbQAAgqgVgeQgWgegggEIgHAAQgaAAgYAXg");
	this.shape_5.setTransform(-40.241,37.1312,0.6107,0.6107);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFEF9").s().p("AAwBMQBOhpAKjBQAPC/hXB0QhGBgiDAqQCChGA3hNg");
	this.shape_6.setTransform(-44.5659,40.8846,0.6107,0.6107);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF8C7").s().p("AjOD/QgDgKAOgKQAFgEAjgTQBQgrA4g7QAyg3AdhfQAVhGAGhPQAAgkAVgSQASgRAaADQAaADAQAVQASAYgFAlQgKBPgfBJQgiBQg1A6QhOBXhqAlQgmANggADIgPABQgOAAgCgEg");
	this.shape_7.setTransform(-42.2971,40.1771,0.6107,0.6107);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0D388").s().p("AjLE+QgigBgDgMQgDgKAOgKQAFgEAjgTQBQgrA4g7QBAhGAciDQAThXgDhBQAPhDAgggQAcgcAiAEQAgAEAWAfQAXAfABAsQAABagrBrQguBuhKBSQhQBah5AhQgrAMghAAIgFAAg");
	this.shape_8.setTransform(-40.2327,37.1274,0.6107,0.6107);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AAcAAQg3gehCANQAtgtA0APQA4ARAjBRQgigjghgQg");
	this.shape_9.setTransform(-29.6819,-22.2264,0.6107,0.6107);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#50616C").s().p("Aj2PGQgugBgZgiQgPgUgDgbQgDgaAIgbQAHgYAVgVQAMgNAigaQArghAWgYQAkglATgxQAdhKgLh6QgGhFgWhjQgJgpgahjQgyi+gNhOQgPhegKixIgIhzQgFhAAIhqQAGhVAMhWIAAgCQAFgeAIgXIAHgQQgNA/gMB4QgOCRAHBUIAHByQAKCwAPBeQAMBIAzDEIAjCMQAWBoAGBCQALB8gdBKQgUAzglAnQgWAYgsAiQggAYgMANQgVAVgGAVQgIAZADAaQAEAYANASQAXAfApABQAdABAegOQAZgMATgTQARgQAAgKQAAgGgLgPIgIgLIgCgEIAEgCQA9gaAmgtQAlgtAphjQArhlAvjtQAvjsgIhNQgEgjAbhTQARg0ArhuQAshyAQguQAahSgFggIAJgBQAFAhgaBRQgQAxgtBzQgtBygPAvQgaBSADAhQAJBPgvDsQguDsgtBpQgqBjglAuQglAtg9AbIAFAGQAMAPABALQAAAMgUAUQgTATgaANQgfAOgfAAg");
	this.shape_10.setTransform(-47.6601,48.4575,0.6107,0.6107);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#50616C").s().p("AgmAUQAPgTAZgOIACgBQARgJAZgLIADAIQhMAfgVAeg");
	this.shape_11.setTransform(-59.2759,102.5145,0.6107,0.6107);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#50616C").s().p("AABBUQgHgggCgxIAAgCQgBhXAKgVIAIAFQgJAQAABQQAABOAJAjQgEgGgEgRg");
	this.shape_12.setTransform(-58.4234,27.4744,0.6107,0.6107);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#50616C").s().p("AgBAOQgFgbAEgYIAHAEQgEAJADAtIABARQgEgKgCgOg");
	this.shape_13.setTransform(-49.6324,23.2148,0.6107,0.6107);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#50616C").s().p("AieAMQA0gZBKgFQA9gEA+AKIADABQAjAGASAKQAKAGACAEQgigUhhgEQhwgGhGAjg");
	this.shape_14.setTransform(-54.2834,21.6531,0.6107,0.6107);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AAAA8QgHgYAAgrIAAgEQACgvAFgQIAIACQgGASgBA0QgBA0AFAZQgDgDgCgMg");
	this.shape_15.setTransform(-47.7336,8.3442,0.6107,0.6107);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("AgDA/QgGgaAAgpIAAgDQABg3ALgTIAHAFQgKAQAAAqQgBAWACAwIABAeQgCgFgDgOg");
	this.shape_16.setTransform(-57.2911,8.8938,0.6107,0.6107);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("AirAiQBdhWCpAQIADAAQA4AHAWAMIgTgCQhegOg5AEQhmAJhBA7g");
	this.shape_17.setTransform(-54.146,5.703,0.6107,0.6107);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("AiQAfQAggcA8gSQA6gSA4gDIAEAAQAkAAAZALQANAFAFAFQgsgYhhASQhfASgwAog");
	this.shape_18.setTransform(-54.2834,-8.9082,0.6107,0.6107);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("AirAbQBKglA7gOQA8gOA4AJIAEABQAnAIAdAPQAPAHAHAHQhSgmhOAGQhOAFhlA0g");
	this.shape_19.setTransform(-53.0772,-6.3286,0.6107,0.6107);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAAgCQACgggCgIIAJgBQACANgGAtIAAABQgDAVgKAHQAFgNADghg");
	this.shape_20.setTransform(-50.1449,77.1398,0.6107,0.6107);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("AhVgFIAFgHQAZAOBBACQA5ACATgGQgCADgIADQgOAGgZABIgHAAQhTAAgggSg");
	this.shape_21.setTransform(-49.581,73.9947,0.6107,0.6107);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("AgGgFIAAgCIgEggIAIgBIABAHQAFAzAHAXQgMgNgFghg");
	this.shape_22.setTransform(-50.7413,63.9181,0.6107,0.6107);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50616C").s().p("AANAIQhIAAgpgIIACgHQApAHBLAAQA+AAAVgDQgEADgJACQgVAGgeAAg");
	this.shape_23.setTransform(-50.7718,61.2463,0.6107,0.6107);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#50616C").s().p("AgGgKIgCgdIAIAAIADAmQADAeACALQgIgSgGggg");
	this.shape_24.setTransform(-55.5964,52.3148,0.6107,0.6107);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#50616C").s().p("Ah3AEIABgHQAkAEBigCQBdgCALgDQgHADgPADQgeAHgnAAIhAAAQhAAAgUgDg");
	this.shape_25.setTransform(-52.4971,49.6887,0.6107,0.6107);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#50616C").s().p("AgFgmIAHAAIAAAgQABAdADAQQgKghgBgsg");
	this.shape_26.setTransform(-49.7336,39.3373,0.6107,0.6107);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#50616C").s().p("AAFAxQgJgSgEgfIAAgCQgEgjgCgYIAJAAQABAcAEAhQAFAqAJAUQgDgDgGgKg");
	this.shape_27.setTransform(-58.1003,41.3221,0.6107,0.6107);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#50616C").s().p("AiQAIIACgIQAJACBXgEQBFgFAvgBIAEAAQArAAAcAIQg3gCiHAHIhUAEg");
	this.shape_28.setTransform(-53.6879,37.2609,0.6107,0.6107);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#50616C").s().p("AgDAZIgBgBQgegTgXgnIAHgFQAZApAeATQAYANAeACQgIADgLAAIgCABQgWAAgTgPg");
	this.shape_29.setTransform(-60.1461,96.5454,0.6107,0.6107);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#50616C").s().p("AAMAbIgBgBQgtgWgYgjIAGgFQAWAeAkAVQAgASAVACQgEACgIAAQgRAAgSgKg");
	this.shape_30.setTransform(-54.5277,91.415,0.6107,0.6107);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#50616C").s().p("AAQASQgVAAgVgIQgUgIgPgNIAGgGQAXAVAhAFQAlAFAYgSQgDAEgGAGQgMALgSABg");
	this.shape_31.setTransform(-51.6116,84.3766,0.6107,0.6107);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#50616C").s().p("AgCAXIgCgBQgVgPgPghIAIgEQAdBAAsgKQgFAEgIACIgJABQgLAAgKgIg");
	this.shape_32.setTransform(-65.444,101.2047,0.6107,0.6107);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8C6CC").s().p("Ah/OOQABgTAFgPQAHgZAZgYQAJgIAtgjQBOg+AdhJQAchHgJh0QgGhIgXhrIgxjDQgkiOgMhHQgMhLgIhzQgIiCgFhBQgGhUAQiUQANhyAOhCQgPChAICMQAEBSAPChQAJB1AaCIQATBfAiB/QArCjAMCJQANCbgfBiQgaBPhsBMQgzAkgRARQgdAfAAAhg");
	this.shape_33.setTransform(-60.1629,45.7703,0.6107,0.6107);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#91A4B0").s().p("AkiOjQgTgNgBgZQABgTAFgPQAHgZAZgYQAJgIAtgjQBQg+AchJQAchIgJhzQgGhIgXhrIgxjDQgliOgMhHQgMhLgIhzQgHiCgFhBQgHhUARiUQANhyAOhCIILFPQgDADguAUQguATgDAEQg9BKgNCUQgHBZgFDcIgHCSQgJCDgOBpQgtFHhqBxQglAoglAWQgiASgPALQgNAJgcAWQgQAOgOAFQgIAEgIAAQgNAAgMgJg");
	this.shape_34.setTransform(-49.0111,46.81,0.6107,0.6107);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7A8E98").s().p("Aj2PEQgxgBgYgpQgWgnAPgxQAIgZAZgYQAIgIAtgjQBQg+AchJQAchIgJhzQgFhIgYhrIgxjDQgliOgLhHQgNhLgIhzQgHiCgFhBQgHhUARiUQANhyAOhCII3GLQAHAyhYDhQhZDkAFAzQAJBOgvDsQguDsgsBnQgrBmgnAuQglAsg9AaQADAFAJALQAIAKAAAIQAAASgkAaQgqAfgtAAIgCgBg");
	this.shape_35.setTransform(-47.6848,48.3356,0.6107,0.6107);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D2D2D").s().p("AguABIAAgLQAaAMAjgBQATgBAMgCQgHAJgdADIgOABQgYAAgSgKg");
	this.shape_36.setTransform(-23.1472,-11.4701,0.6107,0.6107);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2D").s().p("AguARIACgMQAYAJAkgOQASgHANgJQgRAcgmAFIgcAAIgKAAg");
	this.shape_37.setTransform(-24.2159,-13.7823,0.6107,0.6107);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D2D2D").s().p("AgnAVQAfAAAcgbQAPgPAJgOQgCAUgRARQgYAagrAIg");
	this.shape_38.setTransform(-25.8038,-15.958,0.6107,0.6107);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D2D2D").s().p("AgdAhQAegMASgeQAJgPACgNQAGA4g7ATg");
	this.shape_39.setTransform(-29.2554,-16.3091,0.6107,0.6107);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2D2D2D").s().p("AAjgQQgTgKgcADQgeADgUAWQgJALgNAYQAAggASgYQARgZAagEQArgGAdAaQAdAaAHA0QgVgygdgQg");
	this.shape_40.setTransform(-30.1246,-12.2723,0.6107,0.6107);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#50616C").s().p("AgzBzQgTgFgLgoQgJglADgqQADgvASgdQARgcAcgEQAlgGAaAWQAVARAMAeQAMAfACAnQADAugnAfQgiAagpAAQgOAAgPgEgAgUhtQgYAEgQAaQgQAbgDArQgDAoAJAkQAKAkAOAEQAYAHAagGQAbgGAUgQQAjgbgCgrQgCglgMgdQgLgdgTgPQgUgQgYAAg");
	this.shape_41.setTransform(-30.1114,-7.9606,0.6107,0.6107);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgLALQgFgEAAgHQAAgGAFgEQAFgGAGAAQAHAAAFAGQAFAFAAAFQAAAHgFAEQgFAGgHAAQgGAAgFgGg");
	this.shape_42.setTransform(-29.6971,-7.7591,0.6107,0.6107);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D2D2D").s().p("AgYAnQgLgQAAgXQAAgWALgQQAKgRAOAAQAPAAAKARQALAQAAAWQAAAXgLAQQgKARgPAAQgOAAgKgRg");
	this.shape_43.setTransform(-29.2293,-5.9463,0.6107,0.6107);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#364063").s().p("AgkA4QgPgXAAghQAAggAPgXQAPgXAVgBQAWABAPAXQAPAXAAAgQAAAhgPAXQgPAYgWAAQgVAAgPgYgAgegxQgMAVAAAcQAAAdAMAVQANAVARAAQASAAANgVQAMgVAAgdQAAgcgMgVQgNgVgSAAQgRAAgNAVg");
	this.shape_44.setTransform(-29.3722,-6.332,0.6107,0.6107);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#506EB2").s().p("AgkAuQgJgUAAgYQAAgeAOgWQAOgWASAAQAPAAANAOQAMANAFAVQgCAWgFAPQgKAmgqAWQgOgIgJgTg");
	this.shape_45.setTransform(-29.4638,-6.4694,0.6107,0.6107);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3D5EA7").s().p("AghA1QgOgWAAgfQAAgeAOgWQAOgWATAAQAUAAAOAWQAOAWAAAeQAAAfgOAWQgOAWgUAAQgTAAgOgWg");
	this.shape_46.setTransform(-29.3722,-6.332,0.6107,0.6107);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AglBxQgQgEgKgiQgJgiACgoQAEhnA7gJQAogGAbAdQAVA+gRBBQgJAfgeAVQgaASgjAEg");
	this.shape_47.setTransform(-30.9153,-8.0702,0.6107,0.6107);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CCCCCC").s().p("AgyBvQgQgFgKgiQgJghACgoQAEhoA7gIQAwgIAdAqQAYAjAEA7QADAzgwAeQgeATgeAAQgPAAgPgEg");
	this.shape_48.setTransform(-30.1145,-7.9349,0.6107,0.6107);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2D2D2D").s().p("AgigdQAmgoBAATQhCAMghAkQgVAUgOAnQAAg1Agghg");
	this.shape_49.setTransform(-64.6455,-21.0764,0.6107,0.6107);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2D2D2D").s().p("AgSAkQgIgPAAgVQAAgUAIgPQAIgOAKAAQALAAAIAOQAIAPAAAUQAAAVgIAPQgIAOgLAAQgKAAgIgOg");
	this.shape_50.setTransform(-65.0272,-4.4765,0.6107,0.6107);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#364063").s().p("AgeA1QgMgVAAggQAAgfAMgVQANgWARAAQASAAAMAWQANAVAAAfQAAAggNAVQgMAWgSAAQgRAAgNgWgAgXguQgKAUAAAaQAAAbAKAUQAKATANAAQAOAAAKgTQAKgUAAgbQAAgagKgUQgKgTgOAAQgNAAgKATg");
	this.shape_51.setTransform(-65.2455,-5.0913,0.6107,0.6107);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#506EB2").s().p("AgZAqQgGgSAAgUQAAgdALgVQALgUAPAAQAPAAALATQABApgLAeQgMAigUAJQgKgIgFgRg");
	this.shape_52.setTransform(-65.6246,-5.3203,0.6107,0.6107);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3D5EA7").s().p("AgaAyQgMgVAAgdQAAgdAMgUQALgVAPAAQAQAAAMAVQAKAUABAdQgBAdgKAVQgMAVgQAAQgPAAgLgVg");
	this.shape_53.setTransform(-65.2455,-5.0913,0.6107,0.6107);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2D2D2D").s().p("AgrgYQASgjAZgBQAUgBARAVQARAUAIAhQgWgegGgGQgRgPgVAGQgdAIgPAlQgHAUgGAcQAAgzASgig");
	this.shape_54.setTransform(-66.5234,-11.9887,0.6107,0.6107);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2D2D2D").s().p("AgJAKQgdgEgIgIIAgADQAjABAZgMIAAALQgRAKgYAAIgOgBg");
	this.shape_55.setTransform(-72.2794,-11.5626,0.6107,0.6107);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2D2D2D").s().p("AAJAQQgmgFgRgcIAfAQQAkAOAYgJIACAMQgJACgKAAIgTgCg");
	this.shape_56.setTransform(-71.3634,-14.1105,0.6107,0.6107);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2D2D2D").s().p("AgYACQgSgRgBgUIAXAdQAdAbAfAAIAEAPQgsgIgYgag");
	this.shape_57.setTransform(-69.7908,-16.3244,0.6107,0.6107);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2D2D2D").s().p("AgdglIALAcQASAdAfANIgHAFQg6gSAFg5g");
	this.shape_58.setTransform(-66.1515,-16.4313,0.6107,0.6107);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#50616C").s().p("AAKCBQgfAAgVgeQgYgiAAg9QgBg5ATgmQARgjAbgBQAdgCAUApQASAjAEA0QADAxgMAlQgNApgcADgAgohXQgTAlABA2QABA6AWAhQAUAcAfgDQAYgCALgmQALgigEguQgDgwgQgiQgSglgXAAIgCAAQgWABgOAfg");
	this.shape_59.setTransform(-66.2107,-7.7302,0.6107,0.6107);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUByQgpgrALhcQAKhcAugDIAIABQAXAVAKAsQAJApgFAqQgFAsgSAWQgOASgRAAQgIAAgJgDg");
	this.shape_60.setTransform(-66.8708,-8.1922,0.6107,0.6107);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CCCCCC").s().p("AgqBbQgTghgBg1QgBgxAPglQARgpAbgBQAagBATAlQARAiAEAyQAEAxgLAkQgMAogaACIgHAAQggAAgUghg");
	this.shape_61.setTransform(-66.2179,-7.7328,0.6107,0.6107);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#50616C").s().p("AmQJMIgCgBIgBgBQgOgcgTgQQgTgRgSgBQgXgCgPAVIgEAGIgDgGQgeguAPg8QAIgjAgg8QAYguABgNQACgPgEgRQgDgLgJgVQgQgqgEgdQgIgzAPhAIAAgBQALgfABgSQABgOgFgbQgGgegCgaQgSgpAQhNQAKgyAVg5QAZhCAhg2QAgg3AcgWQApghAxgHQAegFBCAFQBQAFAwgFIAogEQB8gNBBAHQBvANBNBEIABABQAZAXANAWQAGALABAHQhOhsh/gYQhKgOiPAQIgoAEQgxAFhQgGQhAgEgeAEQgvAHgoAgQg8Awg3CSQg6CZAdBBIABAAIAAABQACAaAFAeQAFAcgBAPQgBATgLAhQgOA+AHAyQAEAdAQAoQAJAXADAKQAEASgBAQQgCARgYAuQgfA6gJAgQgOA3AZArQARgVAYACQAVACAVARQAUARAPAdQAkAED4gYQCLgOA6gFQBbgGATAGQAWAHA0gRQA9gUA1grQBJg6AmhZQAyh0gRieIAJAtQAHA5gKBBIgBAFQgbCih0BeQg4Atg/AUQg2ARgYgIQgagJkVAcQjZAVguAAQgRAAgJgBg");
	this.shape_62.setTransform(-38.6536,-6.4057,0.6107,0.6107);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B8C6CC").s().p("AmNGiIAeg3QAPgdACgPQACgUgJgYIgRgvQgYhFAUhZQAPgpgDgcQgIgngEgpQgehDA7ibQA4iSA8gxQA4gsBSACIBPAFQA0ACArgEQCMgNAYAAQBmgBBIAhIAFAHQhighhrALQhvAUgwADQhYACgzAFQheAIgbAZQgyAug0BwQg8CEATBPQAIAhADBLQACBMgGAhQgSAqAVBBQAYBJgCAQQgCAPg2BVQgyBOAEA5QgTg4AlhLg");
	this.shape_63.setTransform(-45.5503,-8.6302,0.6107,0.6107);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#91A4B0").s().p("AlqI2QgWgtg6gIQg5gIgYAhQgWg5AmhOQAKgUAUgkQAQgdABgQQACgUgIgYIgSgvQgXhFAUhZQAOgpgDgbQgIgogDgpQgfhDA8ibQA4iSA8gxQA3gsBTACIBPAFQA0ACArgEIBxgLQBGgFA1AHQCQATBWB2IBeHrQASDfiuBmQg9AjhHANQg7ALgZgIQgZgJjjBEQjWBAgvAAIgHAAg");
	this.shape_64.setTransform(-38.8635,-7.5944,0.6107,0.6107);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7A8E98").s().p("AmNJIQgYgvgigNQgjgOgXAgQgmg8AmhXQAxhWACgaQACgUgIgYIgSgvQgXhFAUhZQAOgogDgcQgIgogDgpQgfhDA8ibQA4iSA8gxQA3gsBTACIBPAFQA0ACArgEIBxgLQBGgFA1AHQCQATBWB2IgVCqIBzFBQAdEQifCOQg4AxhDAXQg3ATgZgIQgagJkGAbQjhAWg9AAIgSgBg");
	this.shape_65.setTransform(-38.7484,-6.4354,0.6107,0.6107);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#50616C").s().p("AknLcQg4AAg3hrQgthWgZhxIjRtgIACgCIBJgzQBag8BZgwQB7hBBsghQCOgsBpAOQBrAPB+BxQBgBWBkCIQB5CjBYCqQACAGgCAFQgEAHgLADQgHADgRADQgUAEgCACQgJAFgIAOQgJAPgPAlQgKAWgiAZQgUAOgtAZIgpAaQgLAIgKATQgHAMgNAeQgZA5gUAbQgWAegkAPQgUAIgeAFIgKACQgJACgJAUQgFAKgLAfIgIAWQgKAchcAxQhMApgmAMQgPAEgSgGQgKgEgQgJIgIgFIgBANQAAAggGAQQgIAWg8AgQhCAig3ADgAmYpYQiSBLh5BaIDPNbQAYBrAsBWQA1BqA0AAIADAAQA1gCBAgiQA5geAHgTQAGgPAAgeIABgSQABgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAQADgBANAHQAPAKAJADQAQAGANgEQAlgMBMgpQBYgvAJgZIAIgVQALgiAHgMQAKgVAMgCIAKgCQAfgFASgIQAhgNAVgdQASgXAag7QAOgfAHgNQALgUAMgJQAKgIAggSQAqgXAVgPQAhgYAJgVQAPgkAJgPQAKgQAKgHQAEgDAWgFQAcgEAEgHIAAgEQhXioh4ijQhkiHhfhVQh8hwhpgOQgagEgbAAQilAAjsB6g");
	this.shape_66.setTransform(11.8393,-3.548,0.6107,0.6107);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#50616C").s().p("Ah1CzQgIgagCgmIAAgCQgBg4ASgyQAkhjBqhCIAFgDQAogWAdgJQAPgEAHAAQi2BJgwCEQgaBHARBoIACANQgEgFgEgNg");
	this.shape_67.setTransform(-0.0699,-24.588,0.6107,0.6107);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B8C6CC").s().p("AhbhCQBIh7CWgHQidAyg8B2Qg2BnAiB6Qg4iOBHh5g");
	this.shape_68.setTransform(-0.2664,-24.5844,0.6107,0.6107);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#697C83").s().p("AkrDlQhjm0FMhpQB0gaBpAoQBZAhBOBRQhLgehiAEQhwAEhcAwQjxB+ACFjIgBABQABg0gFgrg");
	this.shape_69.setTransform(11.8243,-17.5019,0.6107,0.6107);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#7A8E98").s().p("AlUJHQg1gJgghhQghhjAdhRQAnguAOhlQALhTgJhhQhjm2FMhoQD8g6C9D2QA+BQAtBlQAjBMABAYQACAfgMAcQgQAjgkAQQgYALguAMQgjAIgJAMQgCACgNBPQgMBIgmAeQgmAfgmgGQghgLgKAEQgFACgJAdIgUA/QgjBeg9AWQg/AWg4geQgrghgFAEQgJAxgRAoQgcBHg4AAIgQgBg");
	this.shape_70.setTransform(16.4108,-1.6088,0.6107,0.6107);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B8C6CC").s().p("AE5gGQiQiLhxgkQhygkinA3Qh3Aoh7BNQgZgNgTgRQCIhNB3goQCZgzBxAPQB8ARCVCWQBxBwB0CxIgCAEQhKh3h7h3g");
	this.shape_71.setTransform(14.0913,-33.7935,0.6107,0.6107);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#91A4B0").s().p("AmRJxQguhYgZhwIjQteIBHgyQBag8BagwQEhiZC7AZQC8AaDuFCQB4CjBYCqQAFAMgbAGIgmAJQgJAGgJAQQgJAPgPAkQgMAcg6AkQg/AigQAMQgQANgYA2QgbA/gTAZQgZAhgpAOIgyALQgMACgMAcQgHAQgOApQgKAbhbAxQhLAoglAMQgTAGgbgPQgXgNgBACIgBAaQgBAZgFANQgHAUg7AfQhBAig2ADIgDAAQg1AAg1hng");
	this.shape_72.setTransform(11.8406,-3.5477,0.6107,0.6107);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#96874C").s().p("Ag7E3QgbgMgYgnQgbgrgJg4QgMhKA8ibQA5iSA6hHIABgBQA7gsAlAbQAbATAHAyQAGAugPArIAAACIgCABQgmAShGBtQhBBngMAxQgFAYAGAgQADASALAkQAIAeACAKQABASgJAHQgFADgHAAQgHAAgJgEgAAYkXQg5BFg4CRQg8CZALBIQAJA0AaAqQAXAmAZALQAMAGAHgFQAGgDgCgQQgCgKgIgaQgKgkgEgTQgFghAFgaQALgvBBhoQBGhvAqgWQANgogGgrQgGgvgYgRQgMgJgPAAQgZAAghAag");
	this.shape_73.setTransform(-69.5077,41.3061,0.6107,0.6107);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFF8C7").s().p("Ag7D6QgjgugKhBQgKg+Arh9QAoh0A2haQAKgMASABQAQACAPAMQAmAegUApQg8BZgjA6QhABsALBOQACASALAdIAQAsQAGAUgSACIgCAAQgQAAgKgQg");
	this.shape_74.setTransform(-71.8187,42.6111,0.6107,0.6107);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E0D388").s().p("AhcEXQgngvgMhIQgMhJA8iZQA5iSA6hGQBLg6AiA+QAfA4gaBMQgnAThHBuQhCBogLAxQgIAlAVBGQARA6gMAHQgFADgGAAQgTAAgbggg");
	this.shape_75.setTransform(-69.4515,41.3084,0.6107,0.6107);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#50616C").s().p("AB6KrQg0gLgpgsQgXgYgaguIgGgKQgIgMgTgNIgngYQgjgTgMgLQgMgLgHgYQgEgPgDgdQgEgdgDgEQgDgFgVgIQgngNgdgTQgTgMgNgQQgIgKgMgUQgUgigYgZQgRgQgcgLQgQgHgigIIgdgJQgMgFgFgFQgFgHAIgYQAHgTAag9IArhnIACgEQBVjVAzhjQBZitBSgvQBCgnBNgQQBOgQBPAIQBVAIBLAkQBLAkA8A8IAAAAQApBCglDTQgXCGg0CtQg4C7hFCsQhGCsgwBFQgZAmgSAAgAAGqQQg+AQg1AfQhPAvhZCrQgzBjhUDTIgCAEQgQAogbBAQgpBfAEAHQAFAGAkAJQAjAKARAGQAdAMASARQAXAYAWAkQAMAUAHAJQANAPASAMQAdAUAkALQAYAIAFAIQAFAHAEAeQADAcADAOQAGAWALAKQAKAJAjAUIApAYQAUAOAIANIAGALQAaAsAWAYQAoAqAxAKQAMACAZgjQAwhFBFirQBFisA4i7QBCjeATiXQATiXggg0QhGhHhcgjQhUghhdAAQhCAAhAARg");
	this.shape_76.setTransform(-78.6117,-7.7184,0.6107,0.6107);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B8C6CC").s().p("AnVFVQAlhVAYg9QBUjSA0hlQBaivBRgvQCHhQCiARQCtARB4B6IAAAAQgJAOgQAFQgWAGgMAJQhTh1iogMQiPgKhoA9Qh1BFiTFAQgkBQg6CIQgsBigRAIQgFgHAXg5g");
	this.shape_77.setTransform(-79.2231,-24.4419,0.6107,0.6107);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#50616C").s().p("AAXg4QhIg+hTAAIAdgCQAlABAqAUIADACQA4AeAoA1QAsA6AOBMIgIABQgVhuhRhDg");
	this.shape_78.setTransform(-70.2533,-30.0385,0.6107,0.6107);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#697C83").s().p("AC9AuQgkibhVhbQhQhXhjAAQhmABhUBeQA+hjA/g+QBKhIBAgHQBKgCBCAvQAWARAWAbIAeAoQA0BUAgCKQAcB8AGCRQgUCehOBYQAejXgpitg");
	this.shape_79.setTransform(-76.2033,-10.8141,0.6107,0.6107);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7A8E98").s().p("ABwH2QgKgMgTgjQgOgZgKgGIg1gcQgegSgYgVQgVgUgFg/QgEg+gJgGQgJgHgngHQgngIgPgLQgNgKgPgmQgQgsgSgVQgPgSgkgKQgjgJgSgXQgOgPAfhVQAfhWA4hfQCUj7CCgQQBUgCA8AyQAVARAyBBQA8BhAgClQAdCWgCCiQgCCggeBrQggByg0AJQgSADgQAAQg/AAgkgvg");
	this.shape_80.setTransform(-79.9749,-3.76,0.6107,0.6107);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B8C6CC").s().p("AAIgeQg7ggg4AGQBEgXBAAiQBEAkAPBMQgkhAhAghg");
	this.shape_81.setTransform(-71.6534,-33.8374,0.6107,0.6107);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#91A4B0").s().p("AB7KnQg3gMgsgyQgOgQghg3QgLgSgqgYQg0gegIgHQgQgOgGguQgHgwgDgEQgFgGgbgKQgigLgcgTQgbgSgUgiQgagqgWgWQgZgZg4gPQg2gPgFgGQgFgHAXg5QAlhVAYg9QBUjSA0hlQBaiwBRgvQCHhPCiAQQCtASB4B5QAnA/gjDOQgfCxhNDrQhHDbhJCeQhKCdggAAIgCAAg");
	this.shape_82.setTransform(-78.6031,-7.7312,0.6107,0.6107);

	this.instance = new lib.StarIcon("single",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-49.4,163,156.9);


(lib.RoundedSquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.Path_120();
	this.instance.setTransform(9.75,-29,0.6695,0.6695,0,0,0,16.6,14.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AgXAXQgNgGgDgWIAAgVQACAJAFAKQAIAMAIAEQAVALAjgCQgaAJgRAAQgMAAgIgEg");
	this.shape.setTransform(12.5793,51.873,0.6694,0.6694);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("ABRCVQgkgOgWgXQgOgNgOgcQgNgWgLgKIgHgHQgrglgWgZQgrgugIgdQgFgXACgVQABgNACgFIAPAFIgCAPQgCATAFASQAKAoBlBbIAHAGQANAMANAZQAOAYAMANQAVAUAgAOQAhAOAlADIgCAQQgngEgjgPg");
	this.shape_1.setTransform(21.0464,64.0732,0.6694,0.6694);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2D2D").s().p("AAtCsQgtgFgpg0Qgrg0gVhKQgWhNAHg5IAEgaIALAYQAVAqBVBMIAHAHQAMALAOAYQAOAZAMAMQAWAWAjAOIAFACIAAAGQgMBOg4AAgAhagPQAUBEAnAxQAmAyAoAEQASABALgGQAVgNAIgoQgigPgWgVQgNgNgQgcQgMgWgKgJIgHgHQhHhAgZgkQAAAvAPA3g");
	this.shape_2.setTransform(19.2662,67.437,0.6694,0.6694);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E4858A","#AA383B","#BF3F45"],[0,0.749,1],6.9,-11.9,-9.5,17.3).s().p("AA3CaQgqgEgogzQgogygVhHQgVhNAHg2QAUApBOBHQgKAWAAAWQgBAWAHAeQAIAlAgAZQAkAcAlgLQgQAUgaAAIgIAAg");
	this.shape_3.setTransform(18.647,68.0879,0.6694,0.6694);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E4858A","#BF3F45"],[0,1],10,14.1,0,10,14.1,34).s().p("AAuCaQgqgEgogzQgogygVhHQgVhNAHg2QAOAeAsAsIA4A1QALAKAOAYQAOAaANANQAXAWAkAPQgKBGgyAAIgIAAg");
	this.shape_4.setTransform(19.2494,68.0876,0.6694,0.6694);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D2D2D").s().p("AgOgUIgXgkIAeAgQAhAnAMAlIgOAFQgNgkgZgpg");
	this.shape_5.setTransform(7.998,65.3047,0.6694,0.6694);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AgGAbQgZAAgUgUIgOgUIATANQAXANAWgCQARgBANgKQAIgGAMgPIAEgFIANAKIgEAFQgOAQgKAIQgQAMgWACg");
	this.shape_6.setTransform(35.177,70.6769,0.6694,0.6694);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AgHglIAPgEQAGAbgMAeQgEAPgHALQAJgpgHgmg");
	this.shape_7.setTransform(40.1235,52.301,0.6694,0.6694);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AgEAfQACgXgEgVIgFgSIAMARQANAVgDAZg");
	this.shape_8.setTransform(40.1335,61.4387,0.6694,0.6694);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AgIgOIALgKQAJAKgFAUQgCALgDAIQAAgagKgNg");
	this.shape_9.setTransform(26.9216,57.3623,0.6694,0.6694);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AAiAYQgYgagpgHIgQgDIAMgLQAdgZAXAJQAOAGAIASQAIAPABATIgCAXgAAbgCQgGgSgKgEIgHgBQgHAAgHAEQAVAHAQAMIAAAAg");
	this.shape_10.setTransform(24.3611,55.0501,0.6694,0.6694);

	this.instance_1 = new lib.Path_119();
	this.instance_1.setTransform(24.7,54.55,0.6694,0.6694,0,0,0,3.8,3.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("AAwArQAAgdgIgRQgLgVgSgTQgTgVgNgBQgRAAgMASIgJASQAAgNAEgNQAKgZAYAAQAUAAAYAZQAXAXAJAYQAJAYgIAjQgEASgGANQACgYAAgPg");
	this.shape_11.setTransform(26.8813,53.6064,0.6694,0.6694);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#353535").s().p("AgKgHIgUgUIAaAQQAbARAIAPIgPAHQgHgOgTgVg");
	this.shape_12.setTransform(-25.5106,-43.4354,0.6694,0.6694);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#353535").s().p("AA6DSQghgQgigvQgpg1gLg6QgOhDAGhBQAFhAAYgtIAFgJIAIAHQApAoAiCaQAgCRgKBIIgCALgAg2hWQgEA6AMA9QALAyAhAvQAbAoAeAUQAFhJgch/QgeiEghgtQgTArgEA6g");
	this.shape_13.setTransform(-22.4955,-29.227,0.6694,0.6694);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#E4858A","#BF3F45"],[0,1],5.3,-0.6,0,5.3,-0.6,15).s().p("AgCCPQgog1gMg4QgNg/AFg7QAEhDAaguQAmAkAhCXQAhCRgKBHQgfgOghgtg");
	this.shape_14.setTransform(-22.5084,-29.1935,0.6694,0.6694);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#353535").s().p("AgsE4QhNg/gWhJQgSg6AGhmQAEg5AOhkIAAgCQAEgYgDgiQgBgTgGgoQgHgwAAgRQACgcARgGQAsgOBZB0QBVBuAsByQAqBtgYCKQgMBFgVAvQAPg1AIhHQAPiNgmhcQgwh2hShqQhRhngfAKQgJADACAZQAAAPAGAnQAGApABAUQADAjgEAZIAAACQgOBigEA5QgGBkARA3QAVBGBFBDQAjAhAeAUQghgRgmggg");
	this.shape_15.setTransform(-20.7231,-35.7163,0.6694,0.6694);

	this.instance_2 = new lib.Path_1_22();
	this.instance_2.setTransform(-24.85,-35.45,0.6694,0.6694,0,0,0,8.7,35.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],99.8,8.2,-331.7,-2.6).s().p("AgpEzQhJhBgWhIQgRg5AGhnQAEg4AOhkQAGgkgOhgQgKhHASgGQAlgMBVBtQBTBqAwB2QAnBfgTCMQgJBGgSAzIhaAjQgfgSglggg");
	this.shape_16.setTransform(-20.7219,-35.4514,0.6694,0.6694);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#353535").s().p("AhCCOQhhg/Ach5QAThQAugeQAdgUAiAEQAxAEArA7QAoA1ANBCQANBFgdAqQgRAagcALQgVAIgaAAQg1AAgrgcgAhFiFQgiAdgQBCQgaBtBYA5QAcATAkAFQAlAGAbgLQAYgKAOgWQAZglgMg9QgMg8glgzQgng2gqgEIgIgBQgdAAgYAUg");
	this.shape_17.setTransform(-2.111,15.5574,0.6695,0.6695);

	this.instance_3 = new lib.Group_0();
	this.instance_3.setTransform(-5.5,18.15,0.6694,0.6694,0,0,0,1.1,1.7);

	this.instance_4 = new lib.Group_1_0();
	this.instance_4.setTransform(-1.5,14.05,0.6694,0.6694,0,0,0,2.1,3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D2D2D").s().p("AgQA4QgRgGgHgUQgHgUAHgWQAIgYARgMQAPgMARAFQARAGAHAUQAHAUgHAWQgIAXgRAMQgLAJgLAAQgFAAgFgBg");
	this.shape_18.setTransform(-3.382,16.2432,0.6694,0.6694);

	this.instance_5 = new lib.Path_118();
	this.instance_5.setTransform(-3.45,16.15,0.6694,0.6694,0,0,0,5.1,6.7);
	this.instance_5.alpha = 0.6992;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#35375A").s().p("AgYBQQgYgIgKgdQgKgdALggQAKghAYgSQAYgSAYAIQAYAIAKAdQAJAdgKAgQgKAhgZASQgQAMgQAAQgIAAgHgCgAgWhDQgYARgKAgQgKAgAKAcQAJAcAYAIQAXAHAXgRQAYgSAJggQAKgfgJgcQgJgcgYgIQgHgCgHAAQgPAAgRAMg");
	this.shape_19.setTransform(-3.2687,15.707,0.6694,0.6694);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4AA4DB","#3C529F","#303034"],[0,0.408,1],2,-8.8,-1.8,8.4).s().p("AgYBPQgXgIgKgdQgKgcALggQAKggAYgSQAXgSAYAIQAXAIAKAcQAJAdgKAfQgKAhgYASQgRAMgPAAQgIAAgHgCg");
	this.shape_20.setTransform(-3.2732,15.6999,0.6694,0.6694);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#FFFFFF","#FFFFFF","#F2F2F3","#DADBDE","#B7BAC2","#ADB1BA","#AFB3BC","#B7BAC2","#C4C7CD","#D7D9DD","#EAEBED"],[0,0.569,0.663,0.71,0.792,0.89,0.918,0.945,0.961,0.976,0.992,1],0.3,-0.4,0,0.3,-0.4,15.5).s().p("AAGCgQgmgFgegUQhdg9AchyQARhGAlgeQAdgYAlAEQAtAEApA5QAmA0ANA/QALA3gTAmQgQAhggAMQgTAIgZAAQgLAAgNgCg");
	this.shape_21.setTransform(-2.1526,15.552,0.6694,0.6694);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#353535").s().p("AEiCiIgKgUQgMgXgRgaQg7hbhHg6QhlhThugFQhhgFhxAhIgFgPQB2giBiAFQByAFBoBVQBJA8A9BcQAlA4AGAYg");
	this.shape_22.setTransform(-8.1984,-15.342,0.6694,0.6694);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D2D2D").s().p("AhTC0QgjgngngdQgPgNgVgMIgEgDIABgGQAUhQAlhNQAjhJAngfIACgBIABAAQAzgIBaAuQBdAvAZAyIABAGIgDAEQggAfgSAcIgCACIgCABQgqASgfATQggAUgoAiQgoAigbAfIgGAHgAg5ipQgjAcggBFQgjBHgUBOQASALAOALQAmAdAgAiQAcgfAnghQAmghAggTQAfgSAqgTQASgbAcgdQgZgshUgqQhIgkgtAAIgKAAg");
	this.shape_23.setTransform(9.3704,-27.514,0.6694,0.6694);

	this.instance_6 = new lib.Path_117();
	this.instance_6.setTransform(1.7,-20.9,0.6694,0.6694,0,0,0,7.5,7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#4A4A4A","#343434"],[0,1],21.2,-3.6,0,21.2,-3.6,40.8).s().p("AiXBrQgRgMgUgNQAXhVAhhGQAkhJAkgcQAwgHBXAsQBbAtAXAxQgfAfgUAdQguAVgcARQggATgnAiQgqAjgcAhQglgoglgdg");
	this.shape_24.setTransform(9.3536,-27.6448,0.6694,0.6694);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#353535").s().p("AA6CYQhMgvhTgEIgeAAIgGAAIgCgHQgdiUANg8IABgCIABgCQAZgbBmgJQBkgJBLASIALADIgHAJQgLARgJAgQgKAnADAiIABACIgBACQgjBIgVBSIgDALgAgbiKQhZAJgXAVQgLA5AaCIIAYAAQBRAEBMAsQAWhQAfhAQgCggAIgkQAHgeALgXQgsgJg1AAQgfAAghADg");
	this.shape_25.setTransform(-7.45,-31.8636,0.6694,0.6694);

	this.instance_7 = new lib.Path_116();
	this.instance_7.setTransform(-9.85,-31.6,0.6694,0.6694,0,0,0,11.6,14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],15.2,9.6,-13.4,-13.9).s().p("AhiBgIgegBQgdiRANg8QAXgYBigJQBjgJBJARQgMATgJAiQgLAoAEAiQgiBFgXBXQhOgxhUgDg");
	this.shape_26.setTransform(-7.6102,-32.0161,0.6694,0.6694);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#353535").s().p("AC/CCQgigXhNgGQhzgIhpAoIgGACIgEgFIgXgeIgdgkIgFgFIAFgGQAcggApgiQApgjAhgUQAggUAqgSQBFgeAUABQAOACAfAnQAaAlAQAsQAbBIgPBCIgDALgAAWhcQgpATgfASQggATgmAhQgmAfgcAfQAVAYAZAgQBXgfBgAAIAmABQBFAGAnATQAJg0gTg6QgMgkgWgjQgOgVgNgOQgLgMgFgBIgBAAQgTAAg8Abg");
	this.shape_27.setTransform(17.3675,-19.7659,0.6694,0.6694);

	this.instance_8 = new lib.Path_115();
	this.instance_8.setTransform(7.4,-14.85,0.6694,0.6694,0,0,0,5.3,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],19,13.2,-15.7,-2.5).s().p("AioBgQgVgbgJgJQAcghAqgiQAogiAggTQAcgRAtgVQBDgdARACQAJABATAVQAUAYARAhQAuBZgSBRQgkgXhPgGQg1gEg2AHQg+AIg3AVQgDgGgUgZg");
	this.shape_28.setTransform(17.4627,-19.8664,0.6694,0.6694);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2D2D2D").s().p("ACKB9Qgcg1hOgmQgzgYhggEIgFAAIgCgEQgTgngmg2IgGgJIAKgDQBsgpB2AIIADABQAkAOApAcQAqAcAIASQAKAWgIA1QgIA6gXAnIgHANgAighcQAcAoAWArQBfAEA2AZQBJAjAhAyQASglAGgxQAFgrgIgRQgGgNgmgaQgngagigOIglgBQhXAAhVAdg");
	this.shape_29.setTransform(19.3354,-4.9296,0.6694,0.6694);

	this.instance_9 = new lib.Path_114();
	this.instance_9.setTransform(20.95,-5.7,0.6694,0.6694,0,0,0,14.4,10.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#4A4A4A","#343434"],[0,1],18.4,5,0,18.4,5,36.8).s().p("AAhAgQg2gahggEQgYgtgigwQA3gVA+gIQA2gHA0AEQAkAOAnAaQApAcAHAQQAJAUgHAzQgIA4gWAmQgeg5hQglg");
	this.shape_30.setTransform(19.4925,-5.2089,0.6694,0.6694);

	this.instance_10 = new lib.Path_2_14();
	this.instance_10.setTransform(9.95,-8.6,0.6694,0.6694,0,0,0,3.6,5.5);

	this.instance_11 = new lib.Path_113();
	this.instance_11.setTransform(10.5,-5.2,0.6694,0.6694,0,0,0,19.1,26.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#353535").s().p("ABXCxQgigLhKglQhBghgogZIgGgEIADgHQAQggAbgdQAVgZAmghQAWgTAhgtQAYghALgKQATgQATAGQAsAQgQCYQgKBmgWBNIgCAIgABEiUQgJAJgSAZQgjAvgWAVQgjAegVAVQgYAcgPAcQAnAXA4AdQBBAiAjAMQAXhZAIhlQAJh4gcgJIgGgBQgJAAgNANg");
	this.shape_31.setTransform(14.0297,-41.2227,0.6694,0.6694);

	this.instance_12 = new lib.Path_112();
	this.instance_12.setTransform(13.95,-43.1,0.6694,0.6694,0,0,0,12.3,14.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],13.7,13.2,-2.6,-14.8).s().p("AgUB5QhAgggngYQAQggAbgeQAVgXAlgfQASgQAxhCQAfgqAWAIQAjANgMCKQgKBqgXBQQgigKhKgng");
	this.shape_32.setTransform(14.1028,-41.2834,0.6694,0.6694);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D2D2D").s().p("AgZGOQg/gFg3hHQgjgugbhAQgLgZgcgXQgcgYgzgbIgEgCIAAgEQgKhBAMg6QAMg7AdgmQAZghAsgPQAZgJA7gJIA2gIQAegHAWgKQAYgNAKgbQAGgQAGgmQAEgfAEgPQAIgZAQgOQAbgbAmAXIABABIABACIAkA2QAmA/AdBKQAYA/AMA3QAdAHAVAZQAWAaABAdQACAfgUAfQgUAfghASQgHBKgdA3QgSAjgfAKQgYAIgmgFQgNApghAbQglAfgtAAgABAl0QgNAMgHAWQgDAMgEAeQgGAogIATQgNAggcAQQgXAKggAHQgTAEgkAFQg4AIgYAIQgpAOgWAdQgbAjgLA3QgLA3AIA7QAtAZAbAVQAkAdAOAeQAZA+AhArQAzBEA6AEQAtAEAkgeQAhgbAJgoIACgHIAHABQAnAGAVgHQAbgIAPgdQAdg3AFhJIAAgEIAEgDQAfgPATgbQATgcgCgbQgBgZgTgWQgUgWgZgEIgFgBIgCgGQgKg1gYg/QgdhLgnhAIgig0QgMgHgLAAQgMAAgJAJg");
	this.shape_33.setTransform(23.4625,55.2164,0.6694,0.6694);

	this.instance_13 = new lib.Path_111();
	this.instance_13.setTransform(28.1,64.05,0.6694,0.6694,0,0,0,25.4,16.4);

	this.instance_14 = new lib.Path_1_21();
	this.instance_14.setTransform(16.25,68.3,0.6694,0.6694,0,0,0,21.8,19.7);

	this.instance_15 = new lib.Path_2_13();
	this.instance_15.setTransform(27.4,51,0.6694,0.6694,0,0,0,25.7,31.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#4A4A4A","#484848","#444444","#3D3D3D","#343434"],[0,0.22,0.471,0.737,1],18.6,-6.3,0,18.6,-6.3,52.8).s().p("AgYGGQg3gEgxg7QgogvgehIQgMgbghgbQgcgWgxgaQgJg/AMg5QALg6AcgkQAjgsBTgOQBxgTAagMQAmgWAKhCQALhJAUgTQAXgXAhAUQATAcAQAaQAmA/AdBJQAZBBALA5QAcAEAWAZQAVAYABAcQACAcgUAeQgUAeghARQgFBKgeA5QgRAhgfAIQgXAHgngGQgKAqgjAdQgjAcgqAAIgKAAg");
	this.shape_34.setTransform(23.455,55.2204,0.6694,0.6694);

	this.instance_16 = new lib.Path_110();
	this.instance_16.setTransform(4.35,45.2,0.6694,0.6694,0,0,0,12,12);

	this.instance_17 = new lib.Path_109();
	this.instance_17.setTransform(-0.1,40.55,0.6694,0.6694,0,0,0,15.2,14.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D2D2D").s().p("AhSgFQAXgyA0gOQAogKAhAdQAeAZACAdQgSgOgegDQgegDgaAJQgbAJgaAXQgaAXgNAYQAAgsAQghg");
	this.shape_35.setTransform(-4.7006,-1.7405,0.6694,0.6694);

	this.instance_18 = new lib.Path_108();
	this.instance_18.setTransform(19.5,24.5,0.6694,0.6694,0,0,0,6.8,10.9);

	this.instance_19 = new lib.Path_107();
	this.instance_19.setTransform(16.2,29.3,0.6694,0.6694,0,0,0,7,10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#353535").s().p("AE1N4Qg/gFg3hHQgkgugahBQgRglg8gmQgkgXhfguQhigvgpgYQiRhKg9iOQglhXABhcQgfgwgPhAQgVhbARhvQAQhqgohdQgdhCg/hFQgYgagKhXQgGg1AAg+IAAgFIALgGQAugbAhgPQA9gdBCgSQAYgGAgAMQASAHAqAYQAmAWATAIQAfAOAZAAIACAAQCVAABnA2QBnA2BQB3QASAbAsBOQApBJAQAZQAcAsAHBFQAEAqgDBRQgCBIACAXQADAYASAfQALAUAgAtQAkAyASAfQAnBAAdBKQAYA+AMA3QAcAHAWAaQAVAaACAeQACAegVAfQgUAfghASQgGBLgdA3QgSAiggALQgYAIgmgFQgMAogiAcQglAeguAAgAm9tmQhlAdhkA7IgEACQABBHAHA3QAKBDARATQBDBIAdBFQAqBggRBuQgSBvAYBdQAOA6AdArIABACIAAADQgCBYAkBUQA6CKCOBJQA1AfBVAoQBiAvAlAYQA+AoASApQAaA9AhAsQAzBDA5AFQAuADAkgdQAhgcAKgnIACgHIAHABQAmAGAWgHQAagJAQgdQAcg3AFhIIABgFIAEgCQAegPATgcQATgbgBgbQgBgagUgXQgTgWgZgEIgGgBIgBgFQgLg2gYg/QgchKgnhAQgSgdgkgzQghgvgMgVQgTghgDgbQgCgYAChKQADhPgEgnQgGhDgagpQgWghgkhCQgwhUgOgUQhNh0hkg0Qhjg0iRAAIgCAAQgcAAgigOQgUgJgngXQgogXgQgGQgTgJgQAAQgHAAgGACg");
	this.shape_36.setTransform(1.0794,22.4456,0.6694,0.6694);

	this.instance_20 = new lib.Path_106();
	this.instance_20.setTransform(-28.45,0.05,0.6694,0.6694,0,0,0,21.7,54.4);

	this.instance_21 = new lib.Path_105();
	this.instance_21.setTransform(-6.8,12.35,0.6694,0.6694,0,0,0,53.6,63.8);
	this.instance_21.alpha = 0.3984;

	this.instance_22 = new lib.Path_1_20();
	this.instance_22.setTransform(20.85,-2.85,0.6694,0.6694,0,0,0,0.3,0.4);

	this.instance_23 = new lib.Path_2_12();
	this.instance_23.setTransform(-4.15,54.8,0.6694,0.6694,0,0,0,36.9,39.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],69.4,8.9,-362.1,-1.9).s().p("AE2NwQg3gFgyg6QgogvgdhIQgXgzhvg6QiNhDhLgrQiQhKg7iKQglhWAChcQgfgugOg+QgWhcARhvQARhvgthiQgchAg+hEQgXgZgKhaQgFgyAAg5QA3gfAXgLQBAgfBFgTQAggJBKArQBRAvAoAAQCYAABmA3QBjA0BNB0QATAcAoBHQAqBMASAdQAlA5AABtIgDBWQgCAxADAaQAEAjAmA3IBOBzQAmA/AcBJQAZBBAMA4QAcAFAVAYQAVAZACAcQABAdgTAdQgUAegiARQgEBKgeA5QgSAhgeAJQgXAHgngGQgLAqgjAcQgjAdgrAAIgJAAg");
	this.shape_37.setTransform(1.077,22.4512,0.6694,0.6694);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_36},{t:this.instance_19},{t:this.instance_18},{t:this.shape_35},{t:this.instance_17},{t:this.instance_16},{t:this.shape_34},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_33},{t:this.shape_32},{t:this.instance_12},{t:this.shape_31},{t:this.instance_11},{t:this.instance_10},{t:this.shape_30},{t:this.instance_9},{t:this.shape_29},{t:this.shape_28},{t:this.instance_8},{t:this.shape_27},{t:this.shape_26},{t:this.instance_7},{t:this.shape_25},{t:this.shape_24},{t:this.instance_6},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance_5},{t:this.shape_18},{t:this.instance_4},{t:this.instance_3},{t:this.shape_17},{t:this.shape_16},{t:this.instance_2},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-59.9,89.2,141.8);


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
	this.piece1.setTransform(244.7,192.25);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece1},{t:this.piece0},{t:this.piece2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(182,127.8,684.1,172), null);


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
	this.shape.setTransform(120.3504,28.4046,0.3726,0.3726);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(60.6028,42.9636,0.3719,0.3719);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(59.3833,45.8215,0.3726,0.3726);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.5945,46.8284,0.3726,0.3726);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.5871,46.8005,0.3726,0.3726);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(49.4213,41.5122,0.3726,0.3726);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(49.4152,41.5401,0.3726,0.3726);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(49.9875,41.9226,0.3719,0.3719);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.6921,44.6938,0.3726,0.3726);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.7546,46.9868,0.3726,0.3726);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.7454,46.9495,0.3726,0.3726);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.5692,41.6706,0.3726,0.3726);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.5655,41.6891,0.3726,0.3726);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.8666,44.9475,0.3726,0.3726);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.848,44.861,0.3726,0.3726);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(49.2726,44.919,0.3726,0.3726);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(49.2726,44.919,0.3726,0.3726);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(44.336,37.0204,0.3726,0.3726);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(38.3282,45.3567,0.3726,0.3726);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.8017,53.1063,0.3726,0.3726);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.6382,48.2162,0.3726,0.3726);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(40.2284,42.3855,0.3726,0.3726);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(44.308,36.9179,0.3726,0.3726);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(40.4612,38.4548,0.3726,0.3726);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.9176,51.8395,0.3726,0.3726);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.7318,41.6869,0.3726,0.3726);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.6272,34.6406,0.3726,0.3726);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.8262,37.927,0.3726,0.3726);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(116.4663,37.7035,0.3726,0.3726);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(118.1615,36.9552,0.3726,0.3726);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(117.1462,36.5361,0.3726,0.3726);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(114.3799,32.5402,0.3726,0.3726);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.7524,32.0419,0.3726,0.3726);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(117.1183,32.0491,0.3726,0.3726);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(117.1369,33.0991,0.3726,0.3726);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(116.9972,33.0897,0.3726,0.3726);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(118.1708,32.8662,0.3726,0.3726);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.9134,32.6695,0.3726,0.3726);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(114.9853,33.0339,0.3726,0.3726);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.7245,34.0491,0.3726,0.3726);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.8432,33.4295,0.3726,0.3726);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(118.5341,32.2373,0.3726,0.3726);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(119.2399,35.2414,0.3726,0.3726);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(115.4906,39.1441,0.3726,0.3726);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(115.295,38.112,0.3726,0.3726);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(115.0497,36.4473,0.3726,0.3726);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.7982,37.23,0.3726,0.3726);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(118.2733,33.2201,0.3726,0.3726);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(118.0684,33.1549,0.3726,0.3726);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.9007,33.1829,0.3726,0.3726);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(117.2673,33.1829,0.3726,0.3726);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.8389,33.1829,0.3726,0.3726);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(118.1336,34.2727,0.3726,0.3726);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(117.095,34.3472,0.3726,0.3726);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.9411,34.2636,0.3726,0.3726);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.9411,34.2636,0.3726,0.3726);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(117.0252,33.956,0.3726,0.3726);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(117.0345,33.9644,0.3726,0.3726);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(117.9938,34.1887,0.3726,0.3726);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(117.9938,34.1887,0.3726,0.3726);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(118.1149,33.9476,0.3726,0.3726);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(118.1149,33.9476,0.3726,0.3726);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.7431,35.1762,0.3726,0.3726);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.6961,41.3795,0.3726,0.3726);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.6466,40.3643,0.3726,0.3726);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(116.1403,48.512,0.3726,0.3726);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(116.1574,46.9943,0.3726,0.3726);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(116.0847,45.5413,0.3726,0.3726);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.7693,44.0446,0.3726,0.3726);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.7305,42.5165,0.3726,0.3726);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.6412,39.845,0.3726,0.3726);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.6391,39.824,0.3726,0.3726);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.5584,39.3956,0.3726,0.3726);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(113.5003,44.8774,0.3726,0.3726);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.9103,32.0942,0.3726,0.3726);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.6091,32.95,0.3726,0.3726);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(102.4684,39.2652,0.3726,0.3726);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.8812,45.9135,0.3726,0.3726);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(97.224,43.3573,0.3726,0.3726);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(97.3905,40.7906,0.3726,0.3726);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.9272,42.2229,0.3726,0.3726);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.8063,40.4497,0.3726,0.3726);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(99.2254,38.5794,0.3726,0.3726);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.598,37.022,0.3726,0.3726);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(97.3533,46.6456,0.3726,0.3726);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.8097,44.7343,0.3726,0.3726);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(98.2661,42.6851,0.3726,0.3726);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(95.4811,49.2763,0.3726,0.3726);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(99.2347,35.2795,0.3726,0.3726);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(97.0552,42.3016,0.3726,0.3726);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(97.0459,42.283,0.3726,0.3726);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(95.4065,49.2781,0.3726,0.3726);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(95.4074,49.2772,0.3726,0.3726);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(99.2254,35.2554,0.3726,0.3726);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(99.2347,35.26,0.3726,0.3726);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.6174,43.169,0.3726,0.3726);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.6047,43.1353,0.3726,0.3726);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.8446,30.2223,0.3726,0.3726);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.8279,33.5348,0.3726,0.3726);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.9437,31.2641,0.3726,0.3726);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(70.9752,31.1151,0.3726,0.3726);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.7921,31.348,0.3726,0.3726);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.7828,31.3387,0.3726,0.3726);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(71.0686,34.4408,0.3726,0.3726);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(70.2206,34.105,0.3726,0.3726);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(70.9719,33.8908,0.3726,0.3726);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.804,33.4623,0.3726,0.3726);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(70.2206,33.5182,0.3726,0.3726);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.804,33.4437,0.3726,0.3726);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(70.2299,33.5089,0.3726,0.3726);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.773,33.3338,0.3726,0.3726);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(70.1842,33.3348,0.3726,0.3726);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.8653,32.8786,0.3726,0.3726);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(70.0653,32.9854,0.3726,0.3726);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.918,33.1217,0.3726,0.3726);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(72.1184,30.934,0.3719,0.3719);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.9005,33.779,0.3726,0.3726);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSg/IAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAgAgShGg");
	this.shape_117.setTransform(87.3962,43.5963,0.3726,0.3726);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(87.3776,43.615,0.3726,0.3726);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.7771,45.6362,0.3726,0.3726);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.7763,45.6446,0.3726,0.3726);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(107.2358,39.9172,0.3726,0.3726);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(107.2265,39.9172,0.3726,0.3726);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(107.3662,45.9249,0.3726,0.3726);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(107.3662,45.9435,0.3726,0.3726);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(65.0604,39.9172,0.3726,0.3726);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(65.0511,39.9172,0.3726,0.3726);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(65.1908,45.9249,0.3726,0.3726);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(65.1908,45.9435,0.3726,0.3726);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(51.2286,46.6185,0.3726,0.3726);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.9225,41.3485,0.3726,0.3726);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.8177,38.6132,0.3726,0.3726);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(80.9786,38.4734,0.3726,0.3726);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.7422,35.5301,0.3726,0.3726);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.8353,39.7681,0.3726,0.3726);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.8539,38.9764,0.3726,0.3726);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.8819,38.2499,0.3726,0.3726);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.9171,36.7409,0.3726,0.3726);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(74.3375,44.8165,0.3726,0.3726);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(67.9944,44.4532,0.3726,0.3726);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(75.0552,45.4326,0.3726,0.3726);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(67.342,44.9186,0.3726,0.3726);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(68.4786,36.3218,0.3726,0.3726);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.4964,33.6716,0.3726,0.3726);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(67.4778,33.6803,0.3726,0.3726);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.9105,38.0822,0.3726,0.3726);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.9083,38.0543,0.3726,0.3726);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(73.0535,36.8,0.3726,0.3726);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.746,38.6807,0.3726,0.3726);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.746,38.6993,0.3726,0.3726);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.9005,36.8099,0.3726,0.3726);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(71.0219,42.7807,0.3726,0.3726);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.6643,46.3627,0.3726,0.3726);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(72.89,44.2372,0.3719,0.3719);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(54.4141,52.6126,0.3726,0.3726);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.6545,54.699,0.3726,0.3726);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.6157,38.1754,0.3726,0.3726);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(50.2599,34.9899,0.3726,0.3726);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(47.2886,56.3756,0.3726,0.3726);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(47.1676,33.5648,0.3726,0.3726);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(53.315,55.4442,0.3726,0.3726);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(54.0509,34.58,0.3726,0.3726);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.4773,45.4685,0.3726,0.3726);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.5603,46.0181,0.3726,0.3726);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.5795,46.0078,0.3726,0.3726);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.7564,47.0432,0.3726,0.3726);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.7827,46.9868,0.3726,0.3726);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.6123,42.0443,0.3726,0.3726);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.6123,41.717,0.3726,0.3726);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.9385,44.8801,0.3726,0.3726);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.897,44.8801,0.3726,0.3726);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.8576,53.1435,0.3726,0.3726);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.7313,48.2628,0.3726,0.3726);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(40.3495,42.5718,0.3726,0.3726);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.5223,37.2067,0.3726,0.3726);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.7872,38.8553,0.3726,0.3726);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(41.0667,51.8395,0.3726,0.3726);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.9274,41.8732,0.3726,0.3726);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.8787,34.7704,0.3726,0.3726);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.6203,37.9144,0.3726,0.3726);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(118.393,37.1631,0.3726,0.3726);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(117.3717,36.7959,0.3726,0.3726);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.6407,32.6985,0.3726,0.3726);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(115.9574,32.1565,0.3726,0.3726);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(117.2355,32.141,0.3726,0.3726);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(117.3325,33.2853,0.3726,0.3726);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(117.2021,33.276,0.3726,0.3726);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(117.1456,32.8355,0.3726,0.3726);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(115.2731,33.1168,0.3726,0.3726);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.9292,34.2439,0.3726,0.3726);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(114.0567,33.624,0.3726,0.3726);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.7619,32.4131,0.3726,0.3726);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(119.4822,35.4198,0.3726,0.3726);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.6913,39.3224,0.3726,0.3726);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(115.4999,38.2982,0.3726,0.3726);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(115.2453,36.6336,0.3726,0.3726);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(118.0032,37.393,0.3726,0.3726);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(118.4782,33.3971,0.3726,0.3726);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(118.264,33.3412,0.3726,0.3726);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(118.087,33.3599,0.3726,0.3726);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(117.4629,33.3599,0.3726,0.3726);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(117.0345,33.3599,0.3726,0.3726);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(118.3307,34.459,0.3726,0.3726);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(117.2953,34.5335,0.3726,0.3726);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(117.1351,34.4494,0.3726,0.3726);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(117.1351,34.4494,0.3726,0.3726);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(117.2208,34.1338,0.3726,0.3726);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(117.2208,34.1338,0.3726,0.3726);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(118.1894,34.3697,0.3726,0.3726);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(118.1894,34.3697,0.3726,0.3726);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(114.9454,35.3624,0.3726,0.3726);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.8953,41.5661,0.3726,0.3726);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.8422,40.5505,0.3726,0.3726);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(116.3452,48.689,0.3726,0.3726);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(116.354,47.173,0.3726,0.3726);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(116.2803,45.7275,0.3726,0.3726);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(115.9711,44.2297,0.3726,0.3726);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.9354,42.7028,0.3726,0.3726);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(117.902,37.0947,0.3719,0.3719);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.7788,39.9265,0.3726,0.3726);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.7525,39.5818,0.3726,0.3726);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.6977,45.0636,0.3726,0.3726);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.7098,31.2921,0.3726,0.3726);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.7098,31.2921,0.3726,0.3726);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.6073,33.0152,0.3726,0.3726);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.6611,39.4514,0.3726,0.3726);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.6582,45.982,0.3726,0.3726);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(97.4198,43.5435,0.3726,0.3726);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.5954,40.9769,0.3726,0.3726);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(98.123,42.4092,0.3726,0.3726);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(99.0714,40.6174,0.3726,0.3726);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.5311,42.8529,0.3726,0.3726);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(95.4357,49.4533,0.3726,0.3726);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(99.4117,35.289,0.3726,0.3726);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(97.2322,42.4786,0.3726,0.3726);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(97.2415,42.4693,0.3726,0.3726);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.5556,49.4428,0.3726,0.3726);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.5937,49.5152,0.3726,0.3726);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(99.449,35.367,0.3726,0.3726);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(99.3756,35.2553,0.3726,0.3726);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.7961,43.2488,0.3726,0.3726);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.791,43.3169,0.3726,0.3726);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.5918,43.7826,0.3726,0.3726);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.5825,43.7919,0.3726,0.3726);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(79.9727,45.8225,0.3726,0.3726);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(79.9812,45.8308,0.3726,0.3726);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(107.4314,40.1035,0.3726,0.3726);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(107.4221,40.1035,0.3726,0.3726);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.5618,46.1112,0.3726,0.3726);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.5618,46.1205,0.3726,0.3726);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_250.setTransform(66.4848,37.2463,0.3719,0.3719);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(65.256,40.1035,0.3726,0.3726);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(65.3864,46.1112,0.3726,0.3726);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(65.3864,46.1205,0.3726,0.3726);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(51.4242,46.8048,0.3726,0.3726);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(51.1181,41.5301,0.3726,0.3726);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(79.0133,38.7994,0.3726,0.3726);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(81.1742,38.6597,0.3726,0.3726);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.8692,46.549,0.3726,0.3726);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(73.0852,44.4231,0.3719,0.3719);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.5445,52.7523,0.3726,0.3726);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.7383,54.876,0.3726,0.3726);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.6343,38.3617,0.3726,0.3726);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(50.381,35.1668,0.3726,0.3726);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(47.298,56.5526,0.3726,0.3726);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(47.3352,33.7418,0.3726,0.3726);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(53.4641,55.6491,0.3726,0.3726);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(54.0509,34.7663,0.3726,0.3726);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.6945,54.9598,0.3726,0.3726);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.7038,54.9412,0.3726,0.3726);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(79.4254,51.665,0.3719,0.3719);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(78.2309,54.55,0.3726,0.3726);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(104.4787,62.0272,0.3726,0.3726);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.6591,60.6602,0.3726,0.3726);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.7573,46.7088,0.3726,0.3726);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.9216,46.8789,0.3726,0.3726);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.9354,46.6887,0.3726,0.3726);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgNAMQgFgGAAgGQAAgFAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAFQAAAGgGAGQgFAEgIAAQgHAAgGgEg");
	this.shape_277.setTransform(584.775,54.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AghA9QgRgHAAgMQAAgMAOAAQAGAAAJADQALAEAFAAQAXAAAAgKQAAgFgRgIQgWgKgHgEQgQgMAAgRQgBgXAZgIQAPgFAcAAQAMAAAGADQAIAEAAALQAAAVgMAAQgLAAgDgKIgJgBQgcAAAAAIQABAFAPAHQAYAMAIAFQARAMAAAPQAAAUgTALQgPAIgVAAQgPAAgOgFg");
	this.shape_278.setTransform(573.6,49.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAhBYQgIAFgJACQgJABgIAAQgaAAgRgRQgSgRAAgaQAAggASgSQASgUAbAAQAJAAAHACQAHACAFAEQACgoACgPQACgOANAAQAHAAAEAEQAEAFAAAGQAAASgCAiQgDAhAAARQAAAqADAOIAAADQAAAHgFAEQgEAEgHAAQgIAAgEgIgAgXAFQgJAKAAAUQAAANAJAJQAKAJAMAAQAIAAAFgCQADgBAIgHIAEgDIAAgrQgEgHgGgDQgHgEgIAAQgRAAgIAJg");
	this.shape_279.setTransform(560.675,46.125);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_280.setTransform(547.225,49.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgnAyQgUgOAAgbQAAgdAPgUQASgXAdAAQATAAAOAGQASAKAAARQAAANgOAKQgHAFgUAIIgnARQAHAGAHADQAIAEAJAAQAQgBALgGQAKgGAGAAQAMAAAAAMQAAANgTAJQgRAHgTAAQgbAAgRgOgAgPgbQgIAHgFAOIAagLQAQgHAJgGQgIgEgMAAQgLgBgHAIg");
	this.shape_281.setTransform(533.6,49.35);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHABQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXIAEAXIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_282.setTransform(520.375,46.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AguA9QgDgEAAgHIAAhMIAAgKIAAgLQAAgHAEgEQAEgFAIAAQANAAACAOQATgQAaAAQAYAAgBAfIAAAIQgBASgPAAQgPAAAAgPIAAgMQgaAEgLAXIAAA6QAAAHgEAEQgFAFgHAAQgHAAgFgFg");
	this.shape_283.setTransform(497.25,49.425);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_284.setTransform(488.175,46.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAUAAAOAGQASAKAAARQAAANgPAKQgGAFgUAIIgmARQAFAGAIADQAIAEAJAAQAQgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgTAAQgaAAgTgOgAgPgbQgIAHgEAOIAZgLQAQgHAJgGQgIgEgNAAQgKgBgHAIg");
	this.shape_285.setTransform(477.65,49.35);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHABQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_286.setTransform(464.425,46.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAFgDAHAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgIgBIgFAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGAAgFgFg");
	this.shape_287.setTransform(451.65,47.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHABQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_288.setTransform(428.875,46.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgHgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGAAgFgFg");
	this.shape_289.setTransform(416.1,47.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_290.setTransform(407.325,46.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAEAlQgDgLgDgcIgDAGIgSAtQgCAFgDADQgFAIgKAAQgGAAgGgKQgGgKgEgQQgEgOgHgwIgCgRQAAgGAFgEQAFgFAGAAQANAAADANIADAQIABAQIAFAdIAUg6QAFgPAMAAQANAAAEARIAGAfIAGAgIAThGQACgLAMAAQAHAAAFAFQAFAEAAAHIAAADQgNAugMAkQgEALgIALQgFAIgKAAQgOAAgJgdg");
	this.shape_291.setTransform(395.575,49.575);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AghA9QgRgHAAgMQAAgMAOAAQAGAAAKADQAKAEAFAAQAXAAAAgKQAAgFgRgIQgXgKgGgEQgRgMAAgRQAAgXAZgIQAPgFAdAAQAMAAAFADQAIAEAAALQAAAVgMAAQgLAAgCgKIgKgBQgcAAAAAIQAAAFAQAHQAYAMAIAFQARAMAAAPQAAAUgSALQgQAIgVAAQgQAAgNgFg");
	this.shape_292.setTransform(370.85,49.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgKBcQgFgEAAgIIAAihQAAgGAFgEQAFgEAFgBQAHABAFAEQAEAEAAAGIAACbQAAAXgQAAQgGgBgEgEg");
	this.shape_293.setTransform(361.775,46.05);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_294.setTransform(352.025,49.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgJBEQgFgFAAgGQAAgOgDgaQgDgZAAgNQAAgHgBgFQgOAIgNASIgCADIgBAkIAAAJIAAAIQAAAGgFAEQgFADgHAAQgKAAgEgIQgCgGAAgNIAAgrIAAgRIgBgRQAAgKAEgJQAEgKAJAAQAGAAAFAFQAGAFAAAGIgBAKQARgUAQAAQASAAAIANQAHgGAIgDQAJgDAKAAQAXAAAIAWIAFAgQAEASAFAsQAAAHgFAEQgFAFgHAAQgNAAgCgOQgDgMgCgWIgEghQgDgVgFAAQgCAAgKAGQgKAFgEAEQAAANADAYQADAaAAANQAAAGgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape_295.setTransform(336.1773,49.425);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgOBVQgFgFAAgGIAAgWIAAgVIABgaIABgZQAAgHAEgEQAFgFAHAAQAGAAAFAFQAEAEAAAHIgBAZIgBAaIAAAVIABAWQAAAGgFAFQgEAFgGgBQgHABgFgFgAgKg7QgGgFAAgHQAAgIAGgEQAFgFAHgBQAHABAGAFQAFAEAAAIQAAAHgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_296.setTransform(323.525,46.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAYA2IgDgYQgCgNAAgMIAAgJIABgKIAAgFIAAgFQAAgKgEAAQgLAAgIANQgKANgFATIgBAKIgBALIgBAKIAAAKQAAAHgFAFQgFAEgHAAQgHAAgEgEQgFgFAAgHIgBgKIAAgKIABggIACgfIAAgKIgBgLQAAgHAFgEQAFgEAHAAQAPAAABASIAAABQARgRASAAQAWAAAJATQAFAMAAAZIAAAIIAAAHQAAAJADAOQACAPAAAJQAAAGgEAFQgFAEgHAAQgOAAgCgOg");
	this.shape_297.setTransform(313.725,49.225);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_298.setTransform(300.725,49.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgoAyQgTgOAAgbQAAgdAQgUQARgXAcAAQAVAAANAGQASAKAAARQAAANgPAKQgGAFgUAIIgnARQAGAGAIADQAIAEAKAAQAPgBALgGQAKgGAFAAQANAAAAAMQAAANgUAJQgQAHgSAAQgcAAgSgOgAgQgbQgHAHgEAOIAagLQAOgHAKgGQgIgEgNAAQgKgBgIAIg");
	this.shape_299.setTransform(276.7,49.35);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHABQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_300.setTransform(263.475,46.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgCg7IgVgCQgPgBAAgOQAAgGAFgGQAEgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQARAAAAAdIAAAJIALgBQAOAAAEACQAKADAAALQAAAHgEAEQgGAFgHgBIgFAAIgGAAIgLABIACA9IAAAGIAAAHQAAAbgRAAQgFAAgFgFg");
	this.shape_301.setTransform(250.7,47.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAbBVQgDgJgCgRQgCgQAAgMIAAgIIABgJIgBgKQgBgGgFABQgNAAgJALQgGAFgJARQAAAqgEAJQgFAKgKAAQgGAAgFgEQgFgFAAgHIABgFQABgDAAgeIAAhMIABgFIAAgSIgBgKIgBgLQAAgHAFgFQAFgEAHABQALgBAEAMQACAIAAAPIAAAXIgBAXQAJgJAJgEQAJgEALAAQAUAAAJALQAHAIABARIABAdIADAXQABANADAKIAAAEQAAAGgFAFQgFAFgGAAQgMAAgEgNg");
	this.shape_302.setTransform(227.925,46.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgkAzQgTgPABgaQAAgWAQgYQATgdAYAAQAMAAARAGQATAJAAAKQAAAGgEAEQgEAFgHAAQgFAAgHgGQgHgFgOAAQgIAAgKASQgLARAAALQAAANAJAHQAJAGANABQAHAAALgHQAMgFADAAQAHgBAEAFQAFAFgBAFQABAKgVAJQgRAIgLAAQgZAAgSgPg");
	this.shape_303.setTransform(214.35,49.35);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgKBRQgFgEAAgGIAAgMIAAgOIgBg7IgXgCQgOgBAAgOQAAgGAEgGQAFgEAHAAIAUABIgBgMIAAgMQAAgGAEgFQAGgDAGAAQAQAAAAAdIAAAJIAMgBQANAAAGACQAJADAAALQAAAHgFAEQgEAFgHgBIgGAAIgGAAIgLABIACA9IAAAGIABAHQgBAbgQAAQgGAAgFgFg");
	this.shape_304.setTransform(202.8,47.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAcA2IgTAIQgIADgFAAQgcAAgOgPQgOgQAAgeQAAgbAVgUQAVgVAcAAQALABAOAGQASAHAAALQAAADgDAEIgBALIgBARQAAAVADAJIAFANIAFALQAAAHgFADQgEAEgHABQgFAAgMgLgAgQgXQgMAMAAAQQAAAQAGAIQAGAHALAAQAGAAAHgCQAGgCAGgFQgEgbAAgNIABgJIABgLIgEgCIgDgBQgPAAgMANg");
	this.shape_305.setTransform(190.525,49.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("ABABNIgHgdQgGgVgGgmIgSAwIgHAWQgEAMgFAJQgGALgKAAQgLAAgGgNIgHgWQgIgegIggIgPA4IgEAaQgFARgNAAQgIAAgEgGQgEgEAAgHQAAgTAHgbIAOgsIAHgkQAFgZAGgIQAGgJAKAAQAKAAAFALQAFAKAFAgQAFAeAKAjQANgiALgqIAHgbQAHgRANAAQANAAAFAUQADAIADAVQAHAxAKAkQALAkAAADQAAAHgGAFQgFAEgGAAQgOAAgFgSg");
	this.shape_306.setTransform(173.35,46.675);

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
	this.shape_307.graphics.f("#794233").s().p("AgpBPQgPgHgLgoQgLglADghQADgjASgGQAEgBAFAAQAZAAAZAgQAUAYAVAAQAOAAANgKIADgCIAAAEQgBANgFASQgGAXgIALQgQAWgaAOQgXAMgTAAQgHAAgGgCgAg1hLQgPAFgDAhQgCAgAKAlQALAlANAGQAGACAFAAQATAAAVgMQAZgNAQgVQAHgKAFgUQAFgPABgOQgLAIgOAAQgYAAgUgaQgYgegXAAIgIABg");
	this.shape_307.setTransform(839.7822,580.7485,1.331,1.331);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FEDDA1").s().p("AgMA2QgMgBgJgIQgIgiADgbQADgfAQgFQAPgFARALQANAJAMAPIABABQADAVgHATQgIAUgSALQgHAFgJAAIgFgBg");
	this.shape_308.setTransform(835.1934,577.4872,1.331,1.331);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EDB677").s().p("AgoBNQgWgLgJhCQgJhFAbgIQAPgEASALQANAIALAPQANAQAPAGQAWAIAUgPQAAAMgFATQgGAWgIALQgTAaggANQgRAIgNAAQgIAAgGgCg");
	this.shape_309.setTransform(839.7299,580.7776,1.331,1.331);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#794233").s().p("AgvBIQgRgXAGg5QAHg5AQgOQAJgIAQAAQANAAASAHQAMAFAJAFIAAAAIABAAQAGAMAIAzQAIA4gLAPQgIALgRAGQgSAHgRAAQgdAAgMgQgAgghMQgPANgGA2QgIA4ARAWQALAPAbAAQAQAAARgHQAQgFAHgKQAKgNgHg2QgHgxgHgOQgbgPgWAAQgPAAgHAHg");
	this.shape_310.setTransform(827.7524,581.1811,1.331,1.331);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FEDDA1").s().p("Ag0A2QgEgfAIglQAHgmALgJQANgLAXAFQATADAUALQAEAJAGAfQgNAJgSAgQgQAegQAJQgIADgGAAQgQAAgOgQg");
	this.shape_311.setTransform(827.2612,578.9912,1.331,1.331);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EDB677").s().p("AguBGQgQgWAHg5QAGg3APgOQANgLAXAFQATAEAUALQAGAMAIAyQAIA4gLAOQgOASgiAEIgLABQgbAAgMgQg");
	this.shape_312.setTransform(827.7534,581.1899,1.331,1.331);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#794233").s().p("AgXBQQgSgHgHgKQgPgYAOgzQAMgwARgOQAMgLATAAQAVAAATALIABABQAGAKgCA9QgBA/gMAOQgKALgYAAQgPAAgRgGgAgShHQgPAOgMAuQgOAxAPAXQAFAJAQAGQAQAGAQAAQAWAAAJgKQALgNABg9QABg5gFgMQgSgKgTAAQgRAAgMAKg");
	this.shape_313.setTransform(819.1859,581.1478,1.331,1.331);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FEDDA1").s().p("AgdA6QgOgFgKgNQACgbALgbQAKgcAKgIQANgMAVACQATAAAQAKQAFAIAAA5QgZAigcAKQgGACgHAAQgJAAgIgDg");
	this.shape_314.setTransform(819.2497,578.1598,1.331,1.331);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EDB677").s().p("AgEBTQgggFgKgRQgOgWANgzQALgvARgOQANgMAUACQATAAARAKQAFAKAAA8QgBA+gNAOQgKALgVAAIgOgBg");
	this.shape_315.setTransform(819.2095,581.1862,1.331,1.331);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#794233").s().p("AgjA/QgKgLgCgPQgBgYAIgWQAIgXAQgRQAYgbAiADIABABIABABQAGAVgEAtQgGA2gWAQQgOAJgNAAQgPAAgLgLgAgOguQgOAQgIAXQgIAVABAXQABANAKAKQAJAKAOAAQALAAANgIQAUgOAGgzQAFgrgGgXIgEAAQgdAAgVAXg");
	this.shape_316.setTransform(813.8329,580.9615,1.331,1.331);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FEDDA1").s().p("AggA1QgJgCgEgHQACgpAZgcQAZgeAjADQAFASgDAqIgjAeQgSAPgTAAIgEAAg");
	this.shape_317.setTransform(813.8299,578.4763,1.331,1.331);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EDB677").s().p("AgZBEQgRgKgDgVQgCgqAZgiQAagjAmADQAHAVgFAuQgGA0gWAPQgNAJgMAAQgIAAgIgEg");
	this.shape_318.setTransform(813.85,580.9647,1.331,1.331);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#794233").s().p("Ag4BSQgMgIgDgWQgGgdAIgpQAHgoAKgOQAMgRATAAQAYAAALAeIAJAdQALAlAIASQANAcAQAGIADABIgCACQgJAKgcAJQgeAJgZAAQgXAAgNgIgAgxhGQgKAOgGAnQgHAoAFAcQAEAVAJAGQAMAIAWAAQAXAAAbgIQAagIALgIQgQgIgNgdQgIgRgLglIgJgcQgKgcgVAAQgRAAgLAPg");
	this.shape_319.setTransform(696.785,576.3896,1.331,1.331);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FEDDA1").s().p("AgcBCQgLgDgIgMQgBgdAHgfQAGggAJgLQANgTATADQAUADAKAaIAMAoQgDAkgRASQgOAOgVAAQgKAAgLgDg");
	this.shape_320.setTransform(693.6044,573.8968,1.331,1.331);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EDB677").s().p("Ag2BQQgVgOAGg9QAFg3APgVQANgTAUADQATADAKAaIAWBEQAQAsAVAHQgOAOgsAJQgSAEgPAAQgWAAgNgIg");
	this.shape_321.setTransform(696.6918,576.4177,1.331,1.331);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#794233").s().p("AgkBQQgQgJgFgQQgKgjATgsQASgrAbgNQAKgGANAAQANAAANAHQAJAFAGAGIAAABIAAAFQgBB2gaATQgPAMgXAAQgSAAgOgHgAgChMQgZAMgRAqQgSArAJAhQAEAPAQAHQANAHAQAAQAWAAAOgLQAXgSACh0IAAgEQgFgFgJgFQgLgGgMAAQgLAAgLAGg");
	this.shape_322.setTransform(684.5929,577.5542,1.331,1.331);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FEDDA1").s().p("AghA/QgRgHgIgPQACgfARgeQARgeAUgKQASgJAUAGQAOAFAJAKQAAAqgEAdIgaAYQgPAMgOAFQgHACgIAAQgJAAgJgDg");
	this.shape_323.setTransform(684.6228,575.1332,1.331,1.331);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EDB677").s().p("AgQBUQgggFgHgZQgJgiATgrQASgrAZgMQASgJAUAGQAPAFAIAKQgBAwgCAXQgHA5gQAMQgPALgUAAIgOgBg");
	this.shape_324.setTransform(684.5784,577.5775,1.331,1.331);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#794233").s().p("AgoBGQgNgJgFgQQgHgYATgpQATgqAXgLQAKgGANAAQAOAAAMAHQAKAEAFAHIABAAIAAABQgBAZgMAqQgOAygRANQgNAKgPAAQgRAAgMgKgAgChGQgVAKgTApQgTAoAHAWQAEAPAMAJQAMAJAPAAQANAAAMgJQAQgNAOgwQAMgoABgZQgQgQgWAAQgMAAgJAFg");
	this.shape_325.setTransform(678.4415,576.6891,1.331,1.331);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FEDDA1").s().p("AglA4QgMgGgIgQQAFgaAQgaQAQgbAQgIQATgJAUAHQAOAEAJAKQgBAcgMAoIgbAOIgZANQgJAFgIAAQgHAAgGgDg");
	this.shape_326.setTransform(678.5336,574.1494,1.331,1.331);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EDB677").s().p("AgaBLQgXgHgHgYQgHgYATgoQATgpAWgLQATgJAUAHQAOAEAJAKQgBAZgMApQgOAygRAMQgMAKgNAAQgIAAgIgDg");
	this.shape_327.setTransform(678.4106,576.6778,1.331,1.331);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#794233").s().p("AAqIJQgfAAgmgQQgqgRgbgaQgbgbAAgdIAAgBIABAAQAggnADg2QACgggLhGIgBgHQgWiGAVg+QgshmgVg0Qg5iRgJhDQgIg/ASg3IATgrIgRAsQgQA3AIA9QAJBCA6CTQAUA1AsBkIABABIAAABQgWA8AWCGIABAIQAMBGgCAhQgEA2ghAoQAAAbAaAaQAaAZArARQAoAQAdgBQAcgHAOgNQAOgPAGgdIAHgwQAEgjAEgPIAHgWQAIgWABgMQACgTgJgTIAAgBQgGgnAahnQAZhkAhhFQAZg2gEhnIgIhWIAKBWQAGBogaA2QggBGgZBiQgaBnAGAmQAJAUgCAVQgBALgIAYIgHAVQgEAPgEAiIgHAxQgHAegOAPQgPAQgdAGg");
	this.shape_328.setTransform(697.2946,516.3632,1.331,1.331);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F99F3B").s().p("AhhGrQAignACg5QACgggNhLQgWiHAWg9QglhSghhVQg1iIgIhAQgJg+AQg4IASgrIA7APQBJAXBGAoQBIAoA2AmQAbAUAMALQAHAKAEAPQAEAPAAAMQAEBVgCAfQgGBAgcAxQg1BpgcA1QgMAfAFAeQAFAXASAqQAMAmgKAcIgVA/QgMAkgNAZQgNAbggAPQgbANgnAEQgygiABgog");
	this.shape_329.setTransform(694.1067,513.5349,1.331,1.331);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#E4773B").s().p("Ag7HpQhAglABgtQAignADg5QABgggMhLQgWiHAWg9QgmhSgghVQg1iIgJhAQgIg+AQg4IASgrIGoDcIAJBcQAEBogZA3QggBEgaBjQgaBnAGAoQALAZgGAaQgDAPgLAeQgEARgDAeQgEAhgEASQgGAdgPAPQgPAPgcAGIgFABQgsAAg2ggg");
	this.shape_330.setTransform(697.3818,516.1711,1.331,1.331);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#794233").s().p("AKeJfQgfgOgWgTIgBgBIAAgBQASg2gQhJQgOg9ggg7IgPgIQhlg5g6gmQhshHhChGQgiAGhQAdQhVAegtAMQhTAVhHAAQguAAgwgJQggACgZAAQh6AAhngqQhogphJhPQhGhLgkhhQglhhAEhmIAAgBIAAAAQAzhICthRQBfgtCYg1IASgHQAYgJAdAAQA8AAA9AjQA5AfAdArQAbAfBaArQBbArA9AKQArgJAzAAQA8AAA4ANQBWATAyAuQBDA9AlBOQAgBAAWBnQANA6AfAsQATAaAkAhQAcAaAGALQAKASAFAgQADAVACAqIAGBAQADAcAKAZQAGAOAMAXQANAXADALQAFAXABAqQAAAtgGAWIgBABIgBABQgoAPgsAAQg3AAgzgXgADiBOQBCBGBsBHQA7AnBkA3IAQAJIAAABQAbAwAOA0QAYBVgUBAQAXASAeAOQAxAWA2AAQApAAApgPQAGgWgBgsQAAgpgFgWQgDgNgMgUQgNgYgFgOQgKgZgEgcIgGhAQgCgqgDgVQgFgfgKgSQgGgLgbgZQgkghgTgaQgggtgNg7QgWhmgfhAQgmhOhCg8QgxguhVgTQg3gMg8AAQgyAAgsAJIgBAAQg8gKhbgsQhdgrgbgfQgdgrg4gfQg9gig6AAQgbAAgZAJIgSAGQiXA2heAsQitBQgyBIQgDBlAkBgQAkBhBFBJQBIBOBnAqQBnApB5AAQAZAAAggCIAAAAQAxAJAtAAQBHAABSgVQAvgMBSgeQBSgdAigGIABAAg");
	this.shape_331.setTransform(734.4826,497.6299,1.331,1.331);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FEDDA1").s().p("AinEDQhIgNgygxQgdgiglhDQgehaADhaQA6hSDdhfQACAZABAyQADAtAHAfQAdBzBaA9QCSBeDQAUQgFAZgPARQgxA3hJgpQgmgVhOhOQgzgxgrA1QgrBLgcAUQgmAagzAAQgSAAgUgDg");
	this.shape_332.setTransform(670.2302,460.7898,1.331,1.331);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FEDDA1").s().p("AgcAVQgWgPgagkQA8ABBcgDQgFAZgIANQgMASgUAGQgLADgLAAQgSAAgTgMg");
	this.shape_333.setTransform(745.4145,489.6752,1.331,1.331);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#F99F3B").s().p("AKVJAQASg4gQhKQgOg9ggg6IgIgEQhhg2g1giQhnhChDhBQhXhdAQilQgJAYgJA0QgMArgfAJQgtAQgrgyQgFgGg7hbQgNgWgYgSQgagUgcgHQAbAsAFAuQAGA2gbAdQgxA3hJgoQgmgWhOhOQgzgxgrA2QgsBLgcATQg0AlhLgNQhIgNgygyQgdgiglhCQgehbADhaQA1hMC8hVQBPgkCog9QBAgWBRAiQBLAgAmA4QAbAfBbArQBcArA8AKQBMgQBcAMQBzAQA+A5IARAQQBHBkAWBgQAJAngMBEQgNBIAFAgQAEAiA2AXQBBAdAQAUQARAUgHAlQgEAUgKAlQgBAeAgBRQAbBGgPAuQgRAqgmAfQg8gOgpgig");
	this.shape_334.setTransform(728.6986,497.1386,1.331,1.331);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EDB677").s().p("AAsFdQiNALh7gtQhzgqhNhTQhHhOglhlQgiheADhhQA6hSDdhfQACAZABAyQADAtAHAfQAdB0BbA9QCCBTCwAZQB9ARDHgJQgIA1AhBDQAVArAPAZIgOgPQgfAFg+AWQhZAggaAHQhoAghZAAQgxAAgsgJg");
	this.shape_335.setTransform(692.7587,473.5111,1.331,1.331);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E4773B").s().p("ALPJtQg7gNgqgjQASg4gRhLQgNg8ggg6IgJgFQhpg6g5glQhvhJhEhIQgeAFg+AWQhaAggaAHQidAxh/gaQiPALh7gtQhygqhNhTQhIhNgkhlQgihfADhhQA0hMC9hVQBPgkCog8QBAgXBRAjQBLAgAmA3QAbAfBbAsQBbArA9AKQBMgRBcANQByAPA/A5QBCA8AlBMQAgBCAWBoQARBNA0A3IAmAlQATASAHALQANAYAFA2IAIBjQAFAnATAlQAVAoACAHQAFAYAAAqQABAsgGAWQgpAPgrAAQgcAAgdgHg");
	this.shape_336.setTransform(734.4537,497.6085,1.331,1.331);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#794233").s().p("AghASQAIggATgZQAVgfAXACIgBAEQgVgBgTAcQgRAZgIAeQgIAgAHASIgEACQgIgTAIghg");
	this.shape_337.setTransform(724.0772,566.9351,1.331,1.331);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#794233").s().p("AgYASQAFgaAOgZQAOgZAQgLIACAEQgPAJgNAZQgPAagEAYQgFAgANAQIgDADQgPgTAGghg");
	this.shape_338.setTransform(731.4251,570.4003,1.331,1.331);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#794233").s().p("AgfBTQgKADgLAAQgRAAgNgHQgOgIgHgNQgOgCgLgIQgMgIgCgLQgEgYAWgjQASgdAWgUQAQgPAQAAQALAAASAIIAFADIgKADQANADAJAGQAGAFALALQAHgFAGAAQARABAOAaQAHAPAOAsIABAFQAEAOATAJQAPAHAQAAIAMAAIgIAEQgdAPgSAAQgIAAgEgDQgKAHgSAGQgTAFgTAAQgdAAgMgMgAgdBPQALAMAcAAQATAAATgFQASgGAJgHIABgBIABABQAMAJAkgRQgQgCgPgIQgQgIgFgOIgBgGQgNgpgHgPQgNgagPAAQgGAAgHADIgBABIgBgBQgLgMgIgFQgKgHgQgCIgIgBIAOgFIABAAQgOgGgJAAQgOAAgPANQgVAUgSAdQgWAiAEAWQACAJALAJQALAGAMADIABAAIABAAQAGANANAHQANAHAQAAQALAAAKgDIACgBg");
	this.shape_339.setTransform(733.4515,568.6035,1.331,1.331);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FEDDA1").s().p("Ag4AvQgFgPADgaIgQAQQgKAGgJgEIgDgEQAIgTAQgTQANgRANgMQAPgOAPAAQAKAAARAJIgLAEQAQACALAHQAHAEAMANQARgJANAMQALAKAKAbQgCAcgUALQgSAJgbgKQgLgHgDgMQgEgPgDgJIgPAbQgIAPgMAEQgHADgFAAQgNAAgFgPg");
	this.shape_340.setTransform(728.6444,564.4716,1.331,1.331);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EDB677").s().p("AgaBRQgWAHgVgHQgUgHgJgRQgNgCgLgIQgMgIgCgLQgEgWAWgjQASgeAVgTQAQgOAPAAQAKAAASAJIgLAEQAPACALAHQAHAEAMANQAXgNARAdQAJARAQA0QAFAPATAJQASAIARgBQgsAWgOgKQgQAOgmADIgPABQgbAAgKgMg");
	this.shape_341.setTransform(732.9615,568.581,1.331,1.331);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#794233").s().p("AiNE7QgKADgLAAQgRAAgNgHQgOgIgHgNQgOgCgLgIQgMgIgCgLQgEgYAWgkQASgdAWgUQAQgPAQAAQANAAAPAIQAYgBAXgSQAYgRAUgeQAUgeAJgeQAKgegGgQQgLgUgcgQQgRgLgogSQgqgTgTgLQgigUgVgWIgBgBIABgCQAegxCMg5QCBg1A9AAQAOAAAGAEQAaASAgBOQAeBKAHA0QAFArgzB6QgZA+geA7QgIAQgOAPQgJAKgVAQIgTARQgWASgdAQQggASgTAAQgIAAgEgDQgKAHgSAGQgTAFgTAAQgeAAgMgMgAiLE3QALAMAdAAQATAAATgFQASgGAJgHIABgBIABABQADADAIgBQASAAAggRQAcgPAVgSIATgQQAVgRAJgJQAOgPAIgPQAdg8Aag9QAyh6gFgqQgHgzgdhJQgghOgZgRQgFgDgNAAQg+AAiBA2QiHA5geAtQAVAWAhATQAVALAnASQAoATASALQAcARAMAUQAGASgKAeQgJAggUAeQgVAfgZATQgYARgZACIAAAAIgBgBQgQgIgLAAQgOAAgPANQgVAUgSAdQgWAjAEAWQACAJALAJQALAGAMADIABAAIABAAQAGANANAHQANAHAQAAQALAAAKgDIACgBg");
	this.shape_342.setTransform(748.0945,537.7251,1.331,1.331);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#F99F3B").s().p("AibD6QgFgPADgaIgQAPQgKAHgJgFIgDgDQAIgTAPgUQAOgSAMgLQAQgOAPAAQAKAAASAIQA1gDArhHQAqhCgNgjQgRgehMgjQhXgngggiQAPgXAsgbQAogZA5gZQAOA5A8AwQAkAdBTAxQAkAZgaA6QgPAgglA9QgIAQgLAzQgJApgSAUQgUARgbgBQgdAAgMgXQAAAfgUALQgUALgbgLQgLgGgEgMQgDgPgDgJIgQAbQgJAOgLAFQgHADgFAAQgNAAgFgPg");
	this.shape_343.setTransform(741.8366,537.4863,1.331,1.331);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E4773B").s().p("AiME5QgWAHgVgHQgUgHgJgRQgNgCgLgHQgMgJgCgKQgEgXAWgkQASgdAVgTQAQgOAPAAQAKAAASAIQA1gDAshHQAphCgMgjQgRgehNgjQhXgngggiQAhg1Cgg9QCbg8AeATQAZARAgBOQAeBKAHAzQAFApguByQgcBEgfA/QgKAUgVASIgpAjQgaAXgiAQQgmATgOgKQgQAPgmADIgOAAQgdAAgKgMg");
	this.shape_344.setTransform(748.1006,537.6173,1.331,1.331);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#393531").s().p("AAWACQgdgPglgBIAAgEQAmABAdASQAPAJAHAJQgIgIgPgJg");
	this.shape_345.setTransform(832.6259,418.2712,1.331,1.331);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#393531").s().p("AAEB7QgggMgbgbQgPgPgWggIgUgaQgLgMgKgEQgXgKgLAPQgFAIgBALQAAAMAEAKIAEAKIgHgIQgTgTgGgYQgFgYAJgVQAPgjAqgBQgQgIgMgOQgNgPgCgNIAAgFIAEADQAZAVAoAAQAYAAAwgJQA2gKAcAAQAyAAAkAWQAzAdAOA9QAHAcgEAeQgDAfgMATQgPAWgbANQgcANgiAAQgiAAgpgOgAiEgJQALAFAMAMQAHAIANATQAWAfAPAPQAaAaAgAMQAlAOAkAAQAhAAAbgNQAagMAOgWQALgQAEgbQAEgfgHgeQgOg7gxgdQgkgVgwAAQgcAAg1AKQgxAJgYAAQgmAAgZgSQAEAMAOAOQAOAOAPAGIAMAFIgNgBQgWgCgRAJQgQAIgIASQgIASAEAVQAEATAPASQgFgUAKgOQAHgMAOAAQAIAAAJAEg");
	this.shape_346.setTransform(844.0442,426.5564,1.331,1.331);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#714034").s().p("ABMBtQg7gCg2ghQAEABAGgDQAIgDADAAQgbgGgcgiQgggngPgIQgZgMgTAQQgSAOgGAcQgNgiASgcQATgcApADIgCAAQBOAFAaAyQgEgtg1gQQgegIgOgFQgZgIgMgOQgEgCgFgGQAZASAogBQAVAAA2gJQBrgTA2AfQAhAUARAhQAUA4geApQgfAvhCAAIgCAAg");
	this.shape_347.setTransform(843.3554,423.9624,1.331,1.331);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4D3531").s().p("AAFB3QgvgRgmg0Qgng1gOgGQgZgLgMAUQgKASAJAWQglgmAPgrQAOgsA0AFQgRgHgPgQQgQgQgCgNQAZAUAoAAQAXABA2gKQA1gJAdAAQAvABAjAUQA3AgALBEQAKA6gYAlQgVAhguAKQgRAFgSAAQgjAAgngPg");
	this.shape_348.setTransform(844.049,426.7233,1.331,1.331);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#794233").s().p("AAfEpQh0gBhohFQg+gqgtg4QgMgQgHgWQgHgZAEgXQAHgfAZgOIABgBIABABQAUAQAlAtQA5BEAmAcQBBAyBMAFIAgABQB0AAA5g6QAsgugDhKQgGizighwIgBgBQgFgJAGgLQAKgRAWAAIAJABIABAAQBPA6ArBBQBABdADB4QADBzhBBBQhJBMiWAAgAk6AsQgEAWAHAYQAGAWAMAOQAtA4A+AqQBmBEBzABIAEAAQCUAABJhKQA/hCgDhvQgDh3g/hdQgrhAhOg5QgKgDgLAEQgKAEgGAJQgEAIADAIQCiBwAGC2QADBLgtAwQg6A7h2AAIgggBQhOgFhBgyQgmgdg6hFQgmgtgRgPQgXAPgGAcg");
	this.shape_349.setTransform(846.7127,470.4782,1.331,1.331);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#F99F3B").s().p("AgQEUQhWgUhMg0Qg+grhChJQgDgXAHgTQAIgWATgMQAjAeBPBfQBSBSBjAGQB4AIBCgwQBBgwgDhaQgGi1iihwQgHgOAOgMQAOgNATAFQA9AsAmAwQAhBAAMAkQAhBdgOBVQgQBlhRAqQhBAfgpAKQghAIgfAAQgbAAgZgGg");
	this.shape_350.setTransform(845.3152,468.6984,1.331,1.331);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E4773B").s().p("AAfEnQh3gBhohHQg8gpgrg3QgWgbAAgnQgBgrAhgTQAjAdBOBfQBTBSBiAHQB4AIBCgxQBCgvgEhbQgGi0ihhxQgHgNAOgMQAOgNATAFQBUA9AtBHQA4BZADBxQADB8hLBCQhJBAiKAAIgEAAg");
	this.shape_351.setTransform(846.708,470.4533,1.331,1.331);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#794233").s().p("AgeBJQgRgIgDgKQgCgKAPgQQANgNAEgLQADgKgCgPIgIgfIgIgaIgBgCIADAAQALgBAWAHQAXAHAKAJQARANABA3QABATgLAUQgKASgOAIQgGAEgLAAQgOAAgQgHgAgYg0QAHAVACALQADAPgEALQgEALgOAPIgKALQgDAGABAFQACAIAPAHQAPAHAOAAQAKAAAFgDQANgIAKgRQAKgTgBgSQgBg0gPgNQgJgHgVgHQgTgHgNAAg");
	this.shape_352.setTransform(625.4536,554.8535,1.331,1.331);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FEDDA1").s().p("AghgGIgHgYQALgBAWAIQAWAHAKAIQAMAIAEAfQghgfgpgGg");
	this.shape_353.setTransform(626.3598,548.5314,1.331,1.331);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FEDDA1").s().p("AgQAOQgZgHgEgMIAAgCQAUAMAZgDQAYgDAWgQQgLAWgQAJQgGAEgJAAQgIAAgMgEg");
	this.shape_354.setTransform(625.0289,562.9136,1.331,1.331);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#EDB677").s().p("AgUBLQgYgIgEgMQgCgJANgNQAPgRAEgKQAFgOgGgXIgOguQALgBAWAHQAWAHAKAIQAQANABA2QABASgKATQgKATgOAIQgGAEgJAAQgJAAgMgEg");
	this.shape_355.setTransform(625.4523,554.8867,1.331,1.331);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#794233").s().p("AABAmQgRgCgrguIgDgEIAIABQANAAAQgGQAUgGAHgLIABgBIACAAQANAAAVALQAVAKAEAIIAAABQAAAIgYATQgYASgOAAgAgXgPQgQAGgOAAQAmAqAQABQALACAZgUQAWgQAAgHQgDgGgTgKQgUgKgMAAQgIALgUAHg");
	this.shape_356.setTransform(618.3075,566.4074,1.331,1.331);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FEDDA1").s().p("AAAAYQgSgBgpguIAEAAQAfAVAXACQAcAEAhgTQgHALgUAOQgVAOgKAAIgCAAg");
	this.shape_357.setTransform(618.4406,567.9801,1.331,1.331);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#EDB677").s().p("AAAAkQgSgCgpguQAKACAUgGQAXgHAJgMQANgBAVALQATAKAEAHQAAAIgYASQgXASgMAAIgBAAg");
	this.shape_358.setTransform(618.5072,566.4133,1.331,1.331);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#794233").s().p("AgCAYQgGgBgNgKQgOgKgMgKIgDgEIAFAAQARAAAXgKIAFgCIAAAAIAAAAQANABASALQASALACAHIAAABQgDAGgUAFQgTAFgJAAgAgEgRQgVAJgQABQAbAYANADIABAAQAIAAASgFQASgEADgEQgCgHgRgIQgQgKgMgBg");
	this.shape_359.setTransform(610.9872,568.2375,1.331,1.331);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FEDDA1").s().p("AgDAQQgFgBgNgKQgOgJgMgLQAKADAPAJIAWAKQAGABAXgHQASgFABAFQgCAFgXAFQgRAFgGAAIgDAAg");
	this.shape_360.setTransform(611.1536,569.0893,1.331,1.331);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#EDB677").s().p("AgDAWQgFgBgNgJQgOgKgMgLQAOAAANgEIAUgIQALABASALQARAJACAHQgCAFgXAGQgRAEgGAAIgDAAg");
	this.shape_361.setTransform(611.1536,568.2574,1.331,1.331);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#794233").s().p("Ah4IGQgXgGgagLQgggOgIgMQgPgTgbhlQgIghAAgUQAAgdAPgRQAJgoA0hSQA7heA6gtIgEgGQgegtgPgnQgchIAEhLQADg9AjhIQAVgqAng5QASgZACgHQAEgMAeAAQAbAAAiAJQAlAKAYAQIAAAAIAAAAQAyBTApCpQArCvgMBZQgcBWhtBaQhSBChaAsQAQAKASAUQASASAEAKQAPAcgLApQgGAXgpAZQgpAagfgBgAgRn4QgCAGgSAbQgnA4gVAqQgjBHgDA8QgEBLAcBGQAPAoAeAsIAFAJIgBABQg6Atg7BdQg1BSgIAoIAAAAIgBAAQgOAQAAAcQAAAUAIAhQAIAfAMAkQANAqAIAKQAHAKAeAOQAaALAYAHIAIABQAdAAApgZQApgZAEgVQAKgogNgbQgEgIgSgUQgUgTgQgKIgDgCIADgCQBZgrBThDQBuhZAchWQAMhYgritQgoipgyhSQgXgQgkgJQghgJgbAAQgbAAgDAKg");
	this.shape_362.setTransform(625.6559,499.7927,1.331,1.331);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#F99F3B").s().p("AioHnQgNgFgKgQIgQgfQgHgXgIgfQgIggAAgTQgBgeAPgRQAJgoA0hRQA8heA6gvQgig0gMgeQgghLAEhPQAEhMA3hdQAbgvAfgvQAGgRA4AIQA4AIAkAYQAlA+AjB3QgYAEgkgCQgngEgSAAQhAgCgaApQglA/AzB0QAmBVBCBNQgNBJheA1QhwAzgqAgQAiApAHAaQAKAkgbAnQgMATgSAKQgNAHgMAAQgJAAgKgEg");
	this.shape_363.setTransform(622.1662,496.2449,1.331,1.331);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#E4773B").s().p("Ah3IFQgYgGgagMQgfgOgIgKQgHgLgPgrQgLgkgIgfQgIgfAAgUQAAgeAPgRQAIgnA1hSQA7heA6gtQghg2gNgdQgfhLAEhPQADhMA3hdQAcgwAgguQAGgSA3AIQA3AJAlAXQAxBTApCnQArCvgMBbQgdBYhwBZQhSBChYAqQAQAKAUAUQATATAEAKQANAcgKAnQgGAYgtAaQgmAWgbAAIgJAAg");
	this.shape_364.setTransform(625.6551,499.7783,1.331,1.331);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#50616C").s().p("Ag6ANIgVgJQAWAJAqgCQA4gCAngaIgUAQQgbAPggADIgSABQgWAAgTgFg");
	this.shape_365.setTransform(432.9,559.6783);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#50616C").s().p("AhEAIIgTgOQAoAXAvgEQAwgEAogdIgSATQgbATgrACIgLABQgiAAgXgNg");
	this.shape_366.setTransform(432.325,556.2684);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#50616C").s().p("AgkAEQALgPATgFQATgEARAIQAJAEAFAEQgOgHgPAAQgPAAgPAGQgWAIgGAQQACgHAFgIg");
	this.shape_367.setTransform(446.95,561.344);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#50616C").s().p("AghAAQAPgLATAAQAUAAAOAKQAHAEADAFQgSgNgcABQgcACgPAOQAEgGAHgGg");
	this.shape_368.setTransform(433.625,563.175);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#50616C").s().p("AgBgJQgTgFgQAEIAOgFQARgEANAFQAPAFAIAOQAFAHABAGQgMgVgagGg");
	this.shape_369.setTransform(422.225,563.0434);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#878787").s().p("AAyA6QgvgFgbgNQgbgNgCgSQgBgLACgLIAAAAIAAgBQAcguAaADQAYADAOAeQAOAcAAAyIAAAEgAAvAyQgBgtgMgZQgMgbgVgDQgJgBgNALQgMAKgMATQgBAKABAJQABAPAZALQAXALArAFIAAAAg");
	this.shape_370.setTransform(420.13,568.7408);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#E5E5E4").s().p("AgKAnQgdgGgDgVIABgLQAMgTANgLQAOgMALACQAQABALAPQAQArgXAPQgIAGgOAAQgHAAgKgCg");
	this.shape_371.setTransform(419.3653,567.3343);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B8B7B7").s().p("AgTAmQgdgMgBgSQgBgIABgMQAMgUANgLQAOgMALACQAXACANAdQANAcAAAwQgsgEgZgMg");
	this.shape_372.setTransform(420.155,568.7167);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#878787").s().p("AhEAyIAAgEQAJhYApgHQAdgFAZAbQAWAZAKAlIABAEIgEABQg3ALg4AAgAgQgqQgjAGgJBPQA+ACA6gMQgKghgUgWQgTgUgUAAIgHAAg");
	this.shape_373.setTransform(434.95,569.6615);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#E5E5E4").s().p("AgvAvQAIhWAngGQAPgDAOAHQAOALAEAUQAEASgIALQgKANglAJQgcAGgNAAIgCAAg");
	this.shape_374.setTransform(433.289,569.6589);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#B8B7B7").s().p("AhAAvQAJhWAmgGQAcgFAYAbQAUAXAKAkQg2ALg2AAIgVAAg");
	this.shape_375.setTransform(434.925,569.6817);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#878787").s().p("Ag1AzQgIhZArgNQAvgQAZBAIABACIgCABIgHAIQgdAdhBARIgEABgAgQgsQgkALAGBPQA8gQAbgcIAFgEQgSgtgdAAQgIAAgHADg");
	this.shape_376.setTransform(448.9616,567.6729);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#B8B7B7").s().p("AgQgvQArgPAYA9IgHAHQgdAchAARQgHhWAogMg");
	this.shape_377.setTransform(448.9158,567.6098);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#50616C").s().p("AgqKTQglgOgDgWQgBgVAMgsQARg/AAgwQABhSglhrQgVg8gdg8QgSglgig+QgphLgQgnQgbg/gIg/QgKhFABg3QABggAGgxIABgIQg0hmAXh2QAEgVATgKQASgKAfACQAuAEA3AdQA3AdAuAuQAxAxAfA9QApBPADBcIAJA0QAUCBANA9QAVBgAfBJQAnBcAvCMIAbBOQAaBKAFAkQAFAsgVAUQgfAfhFARQg+APhHAAQhJAAgqgPgAkzp5QgWB0AzBlIABABIgBAKQgGAxgBAfQgCA3AKBEQAIA+AbA/QAPAlAqBMQAiA/ARAjQAeA+AVA8QAmBsgBBUQgBAvgRBBQgMArACATQACASAgAMQBAAXBwgMQB4gNAtgsQASgSgFgrQgFgkgZhGIgbhOQgviMgnhbQgfhKgVhgQgNg6gViEIgIg1IAAgBQgEhagohOQgeg7gwgxQgtgtg2gcQg2gdgtgEIgKAAQgwAAgGAhg");
	this.shape_378.setTransform(423.0477,507.325);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#B8C6CC").s().p("ABaJ7QgCgTAJgiQANgxADgTQARhogxiMQgehWhVigQhCh5gMhcQgKhIACg5QABgbAHg5Qg1hnAXh0QACgKAGgIIAHgCQAAA6AMBDQAPBQAYAeQgEBcADAtQAFBeAbBGQAXA9A9BxQA5BpAVA/QA2CjgjB+QgJAigUApQgQAhABAIg");
	this.shape_379.setTransform(406.1879,506.075);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#91A4B0").s().p("AAkKVQgrgHgGgaQgCgTAJgiQAMgwADgUQARhogwiMQgehWhWifQhCh6gMhbQgKhIACg6QABgaAHg6Qg1hmAXh1QAIgnA6AEQA6AEBGArQANA7AqCyQAnCgAYBzQAfCUA5CcIBCCvQATA/gnAjQgrAmhXgXQASAZBWAPQBMAOADAnQACAagnAWQgjAVg1AJQgeAFgaAAQgTAAgRgDg");
	this.shape_380.setTransform(416.5545,506.7051);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#7A8E98").s().p("AgbKTQgxgNgCgYQgCgTAJgiQANgwADgUQARhogxiMQgehWhWifQhCh6gMhbQgKhIACg6QABgaAHg6Qg1hmAXh1QAIgoA9AFQA8AFBGAuQBPAzAyBPQA7BdAEBvQAdCxAIArQAXBvAiBSQAgBLAgBdIAxCNQAZBHAFAkQAGAsgUAUQg8A6igADIgOABQg5AAgngMg");
	this.shape_381.setTransform(423.059,507.3103);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#50616C").s().p("ABpEgQgugcgsg6Qgrg7glhRQgehDgVhIQgUhIgEg1QgEg7ATgQQAlgdBqA0QA2AbA0AjIACACIgBADQgHAcACA/QACAlAIBUQANB+gBAyQgDBPgfAIIgCAAgAh4kPQgQANADA4QAIB0BFCUQBKCjBZA3QAagIABhRQABgwgMh1QgIhTgCgnQgDg9AHgeQgngbgugYQhOgqgrAAQgUAAgLAJg");
	this.shape_382.setTransform(438.9765,522.6694);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#7A8E98").s().p("AhcgQQghhcgJhKQgJhLAVgRQAkgcBrA2QA2AbAvAhQgJAhAGBSQADAwAKBoQASDDgrAKQh1hIhSjkg");
	this.shape_383.setTransform(438.9202,522.6577);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#878787").s().p("AglAkQgDgcAKgTQAJgSAQgHQAKgFAMAEQAMADAIAKIABABIAAASQgBAQgTANQgSAMggADIgEABgAgCgdQgNAGgIAPQgIAQABAYQAcgEAPgKQARgKABgOQABgEgBgKQgKgLgNAAQgFAAgFACg");
	this.shape_384.setTransform(475.8154,551.6779);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#B8B7B7").s().p("AgLgbQAYgTAVAZIABAQQgBAQgUAMQgSAKgdADQgFgsAbgTg");
	this.shape_385.setTransform(475.8353,551.6316);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#50616C").s().p("Ah+IGQgRgKgJhRQgLhYABiHQABiIAMh9QAMiAAWhfQAfiJAugqQBdhWA6ALQAdAFAMAVIAAABQAVCWgcCZQgRBZgzCUQgYBFgJAjQgRA+ABBdQAAA0AIBZQAEAsgBAMQgBAUgXANQgaAOgoAAQgtAAgggSgAggnGQgmAjgcBnQgcBmgPCeQgNB9gBCGQgBCIALBXQAJBOAOAIQAeAQAqABQAnAAAYgOQAUgLAAgPQACgKgFguQgHhYgBg1QAAhfARg+QAJghAYhHQAziUAQhYQAeiYgWiUQgNgSgWgEIgLgBQg3AAhOBKg");
	this.shape_386.setTransform(475.5499,502.1176);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#7A8E98").s().p("Ah8IDQgVgMgJiHQgJiGAJioQAKi5AbiHQAgidAyguQBZhSA5AIQAdAEAKAUQAbC1gyDCQgbBqg6CiQgVBPAHCEQADBDAHBLQgCAhg6AIQgQADgOAAQgoAAgggSg");
	this.shape_387.setTransform(475.5306,502.1047);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#50616C").s().p("AgdADQAKgLAQgDQAPgDANAIQAHAFADADQgNgLgYAFQgZAEgHANg");
	this.shape_388.setTransform(485.9125,555.6341);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#50616C").s().p("AANgFQgWgHgjAIIAPgHQASgGARADQASADAMANQAGAHADAHQgTgQgNgFg");
	this.shape_389.setTransform(474.575,554.9526);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#50616C").s().p("AAFgKQgQgRgRgEIAPACQAQAEAMAOQAMAOACAQQAAAIgBAFQgEgYgTgSg");
	this.shape_390.setTransform(462.3313,552.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#878787").s().p("ABIAtQhWgCg8gcIgDgCIABgDQAPgjAggNQAdgLAcAJQAZAIAOAVQAQAWgHAfIAAADgAgZgfQgcALgOAeQA6AZBPADQAFgcgPgTQgNgRgWgHQgLgEgMAAQgNAAgOAGg");
	this.shape_391.setTransform(471.371,561.2274);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#E5E5E4").s().p("Ag+AUQAQgkAjgKQAegKAdAPQAmAng6AKQgTADgPAAQggAAgYgLg");
	this.shape_392.setTransform(470.4732,560.1818);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#B8B7B7").s().p("AhJAMQAOgfAbgNQAagNAaAHQAcAGAPAVQAQAWgHAfQhWgDg7gbg");
	this.shape_393.setTransform(471.4439,561.2388);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#878787").s().p("AAlA8QhGgdgIgyQgDgSACgVIABgDIADAAQAPABAQAJQAPAJAMAQQAPATAGAVQAFAWgEAWIgBAEgAgigUQAHAsA+AcQAHgogcgiQgVgcgcgDQgBAQACARg");
	this.shape_394.setTransform(461.3194,557.175);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E5E5E4").s().p("AAAAjQgRgKgKgTIgCgHQgDgUACgRQAcABAZAdQAOAigJAJQgFAEgHAAQgHAAgJgEg");
	this.shape_395.setTransform(460.477,555.2939);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#B8B7B7").s().p("AglgTQgDgVACgRQAgACAZAiQAcAlgJApQhEgbgHgxg");
	this.shape_396.setTransform(461.321,557.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#878787").s().p("Ag9AsIAAgFQADgeAOgVQAOgVATgHQAigMAmApIACACIgBADQgJANgNAMQgXAWhLADgAgIghQgSAGgLATQgMASgEAaQBFgEATgSQAKgJAJgNQgagbgZAAQgGAAgFACg");
	this.shape_397.setTransform(487.25,561.3892);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#B8B7B7").s().p("AgSggQAjgVApAtQgJANgMAMQgKAJgaAHQgYAGgiABQAGg2AhgSg");
	this.shape_398.setTransform(487.225,561.3659);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#50616C").s().p("AgGASQgogGgXgQIgPgPQAVATAwAJQAzAIAxgLQgGAFgOAEQgRAFgWAAQgPAAgRgCg");
	this.shape_399.setTransform(476.875,547.012);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#50616C").s().p("AgNASQgmgJgWgQIgOgPQAYAUAuALQA1AOA0gKQgKAFgRADQgOACgPAAQgWAAgXgFg");
	this.shape_400.setTransform(477.125,542.445);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#50616C").s().p("AAQgOIAGAEQgNAQgPAGIgPADQAVgHAQgWg");
	this.shape_401.setTransform(491.775,541.725);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#50616C").s().p("AACALQgHgKgEgPIAHgBQADAQAJAPQgDgBgFgEg");
	this.shape_402.setTransform(465.575,537.55);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#50616C").s().p("AAiL/QhTgdgJg5QgGgqAUguQALgaAcgqQASgaACgKQgEgaAEggQACgTAHgpQALg5ACgfQAFg4gJg4QgZAJgwAHQg7AHg7gEQhLgEg9gXQhRgegwg7Qg1hAgshaQgrhagVhbQgWhfAFhSQAGhsA1hMQA+hZD2guQDogsDmAXQCWAPBeAoQBeApAbA9IAAABQAaCagsB+QgaBKhKBsQglA1gPAcQgYArgHAlQgGApgOCKQgPCUgJBCQgRBtgUAeIAEAbQALBFgCAkQgEA9glAjQgMALggAHQgfAGgoAAQhMAAg6gUgAAoClQAJA7gEA6QgCAhgLA6QgIAogCATQgDAfAEAaIAAABIAAABQgDAJgUAdQgbAqgLAZQgSAsAGAoQAIA0BOAcQA/AWBQgCQBNgCAVgUQAkgiADg6QACgigKhFIgFgcIAAgCIABgBQAUgbAQhtQAKhBAOiWQAOiJAHgqQAHgmAYgtQAPgaAlg3QBMhtAZhJQAqh6gZiZQgag7hcgnQhdgniTgPQjlgWjmAqQj0Atg9BYQgzBKgGBrQgFBRAWBdQAUBaArBaQArBYA0BBQBUBlCtAMQA+AEA9gIQAygHAXgKIAEgCg");
	this.shape_403.setTransform(462.9616,487.0415);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#91A4B0").s().p("AAICGQgwgCgmgVQgpgXgHgmQgKhBBSh3QABAzAdAdQAUAUAqARQAzATALAHQAcASAAAgQAAAmglAVQgeARgrAAIgKgBg");
	this.shape_404.setTransform(470.1904,550.0598);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#50616C").s().p("AgMhAIAAgDQAEgnAHgTIAGgMQgMAjADBUQADBQAOBKIgHACQgUhpAChhg");
	this.shape_405.setTransform(465.6617,489.95);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#B8C6CC").s().p("AgdD3QABgVAMg1QAah3gTheQgJg5gDhPQgEhmANggQAABKAPBkIAYCIQAJA/gdBnQgbBlAIAsQgSgcABgkg");
	this.shape_406.setTransform(467.4508,507.325);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#91A4B0").s().p("AARJcQgggMgGgYQgGgmAShkQARhkgMhWQgIgfgIhYQgIhrAMgjQguAyhlAVQhoAWhWgaQgCg0Ajg3QAOgXA/hPQA3hEAbg1QAnhOAFhaQBYgdAmgXQAlgVBqhTQAXAFAwgJQAjgIANAPQB3CSg1C3QgNAugsBmQgpBdgLAwQgLA1gGCjQgGCygPBeQgHAogXAZQgaAbgwALQgPAEgOAAQgVAAgTgIg");
	this.shape_407.setTransform(467.1087,479.2012);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7A8E98").s().p("ABnMLQiQgVgMhOQgJg2Alg/QApg6AEgQQgGglAShkQAShlgNhWQgWAJgwAHQg/AJg9gEQixgKhWhpQhziJgtjEQgzjgBciGQAwhGCrgtQCfgqDGgFQDMgECUAnQCkArAlBUQAjDThmCrQg5BVgZAmQgrBDgJAyIggEkQgWDKgcAmQAOBlAAAQQAABGgpAnQgQAPg0AGQgVACgWAAQggAAgigEg");
	this.shape_408.setTransform(462.9107,487.0888);

	this.instance_2 = new lib.Path_88();
	this.instance_2.setTransform(75.1,538.75,0.8364,0.8364,0,0,0,6.2,3.3);

	this.instance_3 = new lib.Path_87();
	this.instance_3.setTransform(74.9,560.8,0.8364,0.8364,0,0,0,8.8,25.4);
	this.instance_3.alpha = 0.3984;

	this.instance_4 = new lib.Path_86();
	this.instance_4.setTransform(165.6,496.75,0.8364,0.8364,0,0,0,14.1,10.6);

	this.instance_5 = new lib.Path_1_16();
	this.instance_5.setTransform(166.9,534.75,0.8364,0.8364,0,0,0,20.9,55.7);
	this.instance_5.alpha = 0.3984;

	this.instance_6 = new lib.Path_2_8();
	this.instance_6.setTransform(107.35,541.4,0.8364,0.8364,0,0,0,16.2,35.2);
	this.instance_6.alpha = 0.3984;

	this.instance_7 = new lib.Path_3_7();
	this.instance_7.setTransform(204.8,532.85,0.8364,0.8364,0,0,0,19.3,46.9);
	this.instance_7.alpha = 0.3984;

	this.instance_8 = new lib.Path_85();
	this.instance_8.setTransform(155.35,441.15,0.8364,0.8364,0,0,0,4.3,6.6);

	this.instance_9 = new lib.Path_84();
	this.instance_9.setTransform(152.15,481.05,0.8364,0.8364,0,0,0,2.5,5.9);

	this.instance_10 = new lib.Path_83();
	this.instance_10.setTransform(157.65,480.85,0.8364,0.8364,0,0,0,3.9,5);

	this.instance_11 = new lib.Path_82();
	this.instance_11.setTransform(166.55,472.95,0.8364,0.8364,0,0,0,17.3,31.4);

	this.instance_12 = new lib.Path_81();
	this.instance_12.setTransform(170.4,464.75,0.8364,0.8364,0,0,0,15.1,36);

	this.instance_13 = new lib.Path_80();
	this.instance_13.setTransform(173.8,424.5,0.8364,0.8364,0,0,0,3.6,6.2);

	this.instance_14 = new lib.Path_79();
	this.instance_14.setTransform(200.9,471.85,0.8364,0.8364,0,0,0,4.6,5.6);

	this.instance_15 = new lib.Path_1_15();
	this.instance_15.setTransform(200.9,471.85,0.8364,0.8364,0,0,0,4.6,5.6);

	this.instance_16 = new lib.Path_2_7();
	this.instance_16.setTransform(209.85,422.6,0.8364,0.8364,0,0,0,3.3,5.8);

	this.instance_17 = new lib.Path_3_6();
	this.instance_17.setTransform(209.85,422.6,0.8364,0.8364,0,0,0,3.3,5.8);

	this.instance_18 = new lib.Path_4_6();
	this.instance_18.setTransform(210.05,431.55,0.8364,0.8364,0,0,0,3.9,6.7);

	this.instance_19 = new lib.Path_5_6();
	this.instance_19.setTransform(210.05,431.55,0.8364,0.8364,0,0,0,3.9,6.7);

	this.instance_20 = new lib.Path_6_5();
	this.instance_20.setTransform(206.2,444.45,0.8364,0.8364,0,0,0,2.4,1.3);

	this.instance_21 = new lib.Path_7_5();
	this.instance_21.setTransform(206.2,444.45,0.8364,0.8364,0,0,0,2.4,1.3);

	this.instance_22 = new lib.Path_8_5();
	this.instance_22.setTransform(211.95,440.85,0.8364,0.8364,0,0,0,6.5,4);

	this.instance_23 = new lib.Path_9_5();
	this.instance_23.setTransform(211.95,440.85,0.8364,0.8364,0,0,0,6.5,4);

	this.instance_24 = new lib.Path_10_5();
	this.instance_24.setTransform(214.2,440.45,0.8364,0.8364,0,0,0,0.6,0.5);

	this.instance_25 = new lib.Path_11_5();
	this.instance_25.setTransform(93.9,492.6,0.8364,0.8364,0,0,0,5.6,8.8);

	this.instance_26 = new lib.Path_12_5();
	this.instance_26.setTransform(93.9,492.6,0.8364,0.8364,0,0,0,5.6,8.8);

	this.instance_27 = new lib.Path_78();
	this.instance_27.setTransform(80.05,441.1,0.8363,0.8363,0,0,0,5.5,8.3);

	this.instance_28 = new lib.Path_1_14();
	this.instance_28.setTransform(80.05,441.1,0.8363,0.8363,0,0,0,5.5,8.3);

	this.instance_29 = new lib.Path_2_6();
	this.instance_29.setTransform(79.3,436.3,0.8363,0.8363,0,0,0,0.7,0.5);

	this.instance_30 = new lib.Path_3_5();
	this.instance_30.setTransform(82.05,435.15,0.8363,0.8363,0,0,0,0.8,0.6);

	this.instance_31 = new lib.Path_4_5();
	this.instance_31.setTransform(77,437.85,0.8363,0.8363,0,0,0,0.7,0.8);

	this.instance_32 = new lib.Path_5_5();
	this.instance_32.setTransform(90.05,435.85,0.8363,0.8363,0,0,0,3.9,4.5);

	this.instance_33 = new lib.Path_6_4();
	this.instance_33.setTransform(90.05,435.85,0.8363,0.8363,0,0,0,3.9,4.5);

	this.instance_34 = new lib.Path_7_4();
	this.instance_34.setTransform(104.9,432.55,0.8363,0.8363,0,0,0,4.8,1.2);

	this.instance_35 = new lib.Path_8_4();
	this.instance_35.setTransform(104.9,432.55,0.8363,0.8363,0,0,0,4.8,1.2);

	this.instance_36 = new lib.Path_9_4();
	this.instance_36.setTransform(89.8,432.85,0.8363,0.8363,0,0,0,0.8,0.6);

	this.instance_37 = new lib.Path_10_4();
	this.instance_37.setTransform(101.5,431.95,0.8363,0.8363,0,0,0,0.7,0.5);

	this.instance_38 = new lib.Path_11_4();
	this.instance_38.setTransform(88.75,433.1,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_39 = new lib.Path_12_4();
	this.instance_39.setTransform(106.55,431.95,0.8363,0.8363,0,0,0,1,0.5);

	this.instance_40 = new lib.Path_13_4();
	this.instance_40.setTransform(107.95,432.2,0.8363,0.8363,0,0,0,1,0.4);

	this.instance_41 = new lib.Path_14_4();
	this.instance_41.setTransform(104.7,431.95,0.8363,0.8363,0,0,0,0.7,0.5);

	this.instance_42 = new lib.Path_15_4();
	this.instance_42.setTransform(103.1,431.95,0.8363,0.8363,0,0,0,0.8,0.5);

	this.instance_43 = new lib.Path_16_4();
	this.instance_43.setTransform(70.1,450.1,0.8363,0.8363,0,0,0,5.3,9.9);

	this.instance_44 = new lib.Path_17_4();
	this.instance_44.setTransform(70.1,450.1,0.8363,0.8363,0,0,0,5.3,9.9);

	this.instance_45 = new lib.Path_18_4();
	this.instance_45.setTransform(70.3,443.85,0.8363,0.8363,0,0,0,0.8,0.6);

	this.instance_46 = new lib.Path_19_2();
	this.instance_46.setTransform(67,448.7,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_47 = new lib.Path_20_4();
	this.instance_47.setTransform(68.05,446.75,0.8363,0.8363,0,0,0,0.8,0.7);

	this.instance_48 = new lib.Path_21_3();
	this.instance_48.setTransform(65.8,460.65,0.8363,0.8363,0,0,0,5.5,9.1);

	this.instance_49 = new lib.Path_22_4();
	this.instance_49.setTransform(65.8,460.65,0.8363,0.8363,0,0,0,5.5,9.1);

	this.instance_50 = new lib.Path_24_4();
	this.instance_50.setTransform(62.8,458.3,0.8363,0.8363,0,0,0,0.8,0.5);

	this.instance_51 = new lib.Path_26_4();
	this.instance_51.setTransform(63.2,457,0.8363,0.8363,0,0,0,0.9,0.4);

	this.instance_52 = new lib.Path_27_3();
	this.instance_52.setTransform(61.85,458.3,0.8363,0.8363,0,0,0,0.8,0.5);

	this.instance_53 = new lib.Path_28_4();
	this.instance_53.setTransform(62.8,457,0.8363,0.8363,0,0,0,0.8,0.4);

	this.instance_54 = new lib.Path_29_4();
	this.instance_54.setTransform(63.2,453.55,0.8363,0.8363,0,0,0,0.9,0.6);

	this.instance_55 = new lib.Path_30_4();
	this.instance_55.setTransform(88.9,433.1,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_56 = new lib.Path_31_4();
	this.instance_56.setTransform(109.25,432.2,0.8363,0.8363,0,0,0,2.1,0.4);

	this.instance_57 = new lib.Path_32_4();
	this.instance_57.setTransform(79.5,435.4,0.8363,0.8363,0,0,0,0.7,0.7);

	this.instance_58 = new lib.Path_33_4();
	this.instance_58.setTransform(103.35,431.95,0.8363,0.8363,0,0,0,0.7,0.5);

	this.instance_59 = new lib.Path_34_3();
	this.instance_59.setTransform(105.15,431.95,0.8363,0.8363,0,0,0,1.1,0.5);

	this.instance_60 = new lib.Path_35_3();
	this.instance_60.setTransform(106.9,431.95,0.8363,0.8363,0,0,0,1,0.5);

	this.instance_61 = new lib.Path_36_3();
	this.instance_61.setTransform(101.8,431.95,0.8363,0.8363,0,0,0,1,0.5);

	this.instance_62 = new lib.Path_37_3();
	this.instance_62.setTransform(78.3,436.3,0.8363,0.8363,0,0,0,0.9,0.5);

	this.instance_63 = new lib.Path_38_3();
	this.instance_63.setTransform(66.95,446.75,0.8363,0.8363,0,0,0,0.8,0.7);

	this.instance_64 = new lib.Path_39_3();
	this.instance_64.setTransform(68.45,444.1,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_65 = new lib.Path_40_3();
	this.instance_65.setTransform(77.2,437.2,0.8363,0.8363,0,0,0,0.8,0.6);

	this.instance_66 = new lib.Path_13_3();
	this.instance_66.setTransform(192.45,498.5,0.8364,0.8364,0,0,0,8.8,4.7);

	this.instance_67 = new lib.Path_14_3();
	this.instance_67.setTransform(192.45,498.5,0.8364,0.8364,0,0,0,8.8,4.7);

	this.instance_68 = new lib.Path_15_3();
	this.instance_68.setTransform(199.25,484.25,0.8364,0.8364,0,0,0,8.6,9.1);

	this.instance_69 = new lib.Path_16_3();
	this.instance_69.setTransform(199.25,484.25,0.8364,0.8364,0,0,0,8.6,9.1);

	this.instance_70 = new lib.Path_17_3();
	this.instance_70.setTransform(204.9,482.4,0.8364,0.8364,0,0,0,0.7,0.5);

	this.instance_71 = new lib.Path_18_3();
	this.instance_71.setTransform(204.6,483.35,0.8364,0.8364,0,0,0,0.5,0.5);

	this.instance_72 = new lib.Path_20_3();
	this.instance_72.setTransform(205.45,480.15,0.8364,0.8364,0,0,0,0.8,0.3);

	this.instance_73 = new lib.Path_21_2();
	this.instance_73.setTransform(205.2,481.4,0.8364,0.8364,0,0,0,0.8,0.6);

	this.instance_74 = new lib.Path_22_3();
	this.instance_74.setTransform(205.45,479.1,0.8364,0.8364,0,0,0,0.5,0.6);

	this.instance_75 = new lib.Path_23_3();
	this.instance_75.setTransform(205.65,478.05,0.8364,0.8364,0,0,0,0.5,0.5);

	this.instance_76 = new lib.Path_24_3();
	this.instance_76.setTransform(205.9,451.2,0.8364,0.8364,0,0,0,6.2,3.9);

	this.instance_77 = new lib.Path_25_2();
	this.instance_77.setTransform(205.9,451.2,0.8364,0.8364,0,0,0,6.2,3.9);

	this.instance_78 = new lib.Path_26_3();
	this.instance_78.setTransform(208.9,451.9,0.8364,0.8364,0,0,0,0.7,0.4);

	this.instance_79 = new lib.Path_27_2();
	this.instance_79.setTransform(210.25,449.6,0.8364,0.8364,0,0,0,0.5,0.4);

	this.instance_80 = new lib.Path_28_3();
	this.instance_80.setTransform(209.85,450.95,0.8364,0.8364,0,0,0,0.6,0.5);

	this.instance_81 = new lib.Path_29_3();
	this.instance_81.setTransform(203.35,459.65,0.8364,0.8364,0,0,0,5.7,4.5);

	this.instance_82 = new lib.Path_30_3();
	this.instance_82.setTransform(203.35,459.65,0.8364,0.8364,0,0,0,5.7,4.5);

	this.instance_83 = new lib.Path_31_3();
	this.instance_83.setTransform(207.5,460.85,0.8364,0.8364,0,0,0,0.8,0.4);

	this.instance_84 = new lib.Path_32_3();
	this.instance_84.setTransform(207.55,458.8,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_85 = new lib.Path_33_3();
	this.instance_85.setTransform(207.55,459.55,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_86 = new lib.Path_34_2();
	this.instance_86.setTransform(207.7,457.85,0.8364,0.8364,0,0,0,0.7,0.5);

	this.instance_87 = new lib.Path_35_2();
	this.instance_87.setTransform(207.3,461.6,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_88 = new lib.Path_36_2();
	this.instance_88.setTransform(207.55,460.15,0.8364,0.8364,0,0,0,0.6,0.5);

	this.instance_89 = new lib.Path_37_2();
	this.instance_89.setTransform(119.55,504.45,0.8364,0.8364,0,0,0,2.8,3.3);

	this.instance_90 = new lib.Path_38_2();
	this.instance_90.setTransform(119.55,504.45,0.8364,0.8364,0,0,0,2.8,3.3);

	this.instance_91 = new lib.Path_39_2();
	this.instance_91.setTransform(141.05,503.75,0.8364,0.8364,0,0,0,3.9,4.6);

	this.instance_92 = new lib.Path_40_2();
	this.instance_92.setTransform(141.05,503.75,0.8364,0.8364,0,0,0,3.9,4.6);

	this.instance_93 = new lib.Path_41_2();
	this.instance_93.setTransform(130.55,505.7,0.8364,0.8364,0,0,0,4.8,4.2);

	this.instance_94 = new lib.Path_42_2();
	this.instance_94.setTransform(130.55,505.7,0.8364,0.8364,0,0,0,4.8,4.2);

	this.instance_95 = new lib.Path_43_2();
	this.instance_95.setTransform(107.9,501.9,0.8364,0.8364,0,0,0,4,4.3);

	this.instance_96 = new lib.Path_44_2();
	this.instance_96.setTransform(205.2,480.3,0.8364,0.8364,0,0,0,0.8,0.4);

	this.instance_97 = new lib.Path_45_2();
	this.instance_97.setTransform(204.6,482.4,0.8364,0.8364,0,0,0,0.5,0.5);

	this.instance_98 = new lib.Path_46_2();
	this.instance_98.setTransform(204.95,481.4,0.8364,0.8364,0,0,0,0.8,0.6);

	this.instance_99 = new lib.Path_47_2();
	this.instance_99.setTransform(81.8,470.4,0.8364,0.8364,0,0,0,0.5,0.6);

	this.instance_100 = new lib.Path_48_2();
	this.instance_100.setTransform(81.8,470.4,0.8364,0.8364,0,0,0,0.5,0.6);

	this.instance_101 = new lib.Path_49_1();
	this.instance_101.setTransform(209.85,451.65,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_102 = new lib.Path_50_1();
	this.instance_102.setTransform(81.8,470.4,0.8364,0.8364,0,0,0,0.5,0.5);

	this.instance_103 = new lib.Path_51_1();
	this.instance_103.setTransform(203.95,483.35,0.8364,0.8364,0,0,0,0.6,0.5);

	this.instance_104 = new lib.Path_52_1();
	this.instance_104.setTransform(207.55,459.9,0.8364,0.8364,0,0,0,0.6,0.5);

	this.instance_105 = new lib.Path_53_1();
	this.instance_105.setTransform(207.55,459.3,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_106 = new lib.Path_54_1();
	this.instance_106.setTransform(207.6,458.8,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_107 = new lib.Path_55_0();
	this.instance_107.setTransform(210.25,450.6,0.8364,0.8364,0,0,0,0.5,0.4);

	this.instance_108 = new lib.Path_56_0();
	this.instance_108.setTransform(207.55,460.6,0.8364,0.8364,0,0,0,0.6,0.4);

	this.instance_109 = new lib.Path_57_0();
	this.instance_109.setTransform(205.45,478.25,0.8364,0.8364,0,0,0,0.5,0.4);

	this.instance_110 = new lib.Path_58_0();
	this.instance_110.setTransform(205.45,479.35,0.8364,0.8364,0,0,0,0.8,0.5);

	this.instance_111 = new lib.Path_59_0();
	this.instance_111.setTransform(207.5,461.35,0.8364,0.8364,0,0,0,0.8,0.4);

	this.instance_112 = new lib.Path_77();
	this.instance_112.setTransform(188.1,454.2,0.8364,0.8364,0,0,0,20.2,27.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#353535").s().p("ABXI5QgaAAgbgTQgbgTgHgZQgIgaAJg7QACgNAAgHQABgMgQgxQgPgrgYg1Qgag8gQhDQgPhDAAgyQAAghgOglQgJgYgag0IghhDQglhRgBh8QgBg0ALg2IALgsIgMB7QgFCKAqBaIAhBDQAbA2AJAYQAOAmAAAiQAAAyAPBCQAPBCAaA7QA5CFgCAcIgDAUQgJA5AIAYQAGAVAZASQAaATAYgBQAIAAAWgLQAXgLAQgEQAZgGAYAEQgOgSgIgOQgMgWgFgYQgFgYgih2IgKgkQgIgdgChLQgBhNAGhEQAKhsgFiaIgIiFIAIArQAHA2ACA3QAFCMgKBoQgHBGACBNQACBIAHAaIAKAkQAiB3AFAYQAHAkAgAoIAPATIgNgDQgagIgbAGQgPADgaAMQgXALgKABg");
	this.shape_409.setTransform(167.3209,536.6792,0.8362,0.8362);

	this.instance_113 = new lib.Path_76();
	this.instance_113.setTransform(149,496.15,0.8362,0.8362,0,0,0,2.2,4.8);

	this.instance_114 = new lib.Path_1_13();
	this.instance_114.setTransform(149,496.15,0.8362,0.8362,0,0,0,2.2,4.8);

	this.instance_115 = new lib.Path_2_5();
	this.instance_115.setTransform(148.55,495.5,0.8362,0.8362,0,0,0,1.7,4.3);

	this.instance_116 = new lib.Path_3_4();
	this.instance_116.setTransform(150.4,508.1,0.8362,0.8362,0,0,0,3.9,5.3);

	this.instance_117 = new lib.Path_4_4();
	this.instance_117.setTransform(150.4,508.1,0.8362,0.8362,0,0,0,3.9,5.3);

	this.instance_118 = new lib.Path_5_4();
	this.instance_118.setTransform(148.55,507.6,0.8362,0.8362,0,0,0,1.7,4.7);

	this.instance_119 = new lib.Path_6_3();
	this.instance_119.setTransform(161.05,545.8,0.8362,0.8362,0,0,0,4,4.2);

	this.instance_120 = new lib.Path_7_3();
	this.instance_120.setTransform(161.05,545.8,0.8362,0.8362,0,0,0,4,4.2);

	this.instance_121 = new lib.Path_8_3();
	this.instance_121.setTransform(159.8,547,0.8362,0.8362,0,0,0,1.4,0.7);

	this.instance_122 = new lib.Path_9_3();
	this.instance_122.setTransform(159.35,545.7,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_123 = new lib.Path_10_3();
	this.instance_123.setTransform(167,563.7,0.8362,0.8362,0,0,0,3.7,3.6);

	this.instance_124 = new lib.Path_11_3();
	this.instance_124.setTransform(167,563.7,0.8362,0.8362,0,0,0,3.7,3.6);

	this.instance_125 = new lib.Path_12_3();
	this.instance_125.setTransform(165.95,563.85,0.8362,0.8362,0,0,0,1.4,1);

	this.instance_126 = new lib.Path_13_2();
	this.instance_126.setTransform(166.2,564.9,0.8362,0.8362,0,0,0,1.1,0.7);

	this.instance_127 = new lib.Path_14_2();
	this.instance_127.setTransform(165,561.55,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_128 = new lib.Path_15_2();
	this.instance_128.setTransform(168.3,577.1,0.8362,0.8362,0,0,0,3,4);

	this.instance_129 = new lib.Path_16_2();
	this.instance_129.setTransform(168.3,577.1,0.8362,0.8362,0,0,0,3,4);

	this.instance_130 = new lib.Path_17_2();
	this.instance_130.setTransform(167.55,579.2,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_131 = new lib.Path_18_2();
	this.instance_131.setTransform(167.3,578.45,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_132 = new lib.Path_20_2();
	this.instance_132.setTransform(167.05,577.7,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_133 = new lib.Path_21_1();
	this.instance_133.setTransform(167.7,579.8,0.8362,0.8362,0,0,0,1.2,1.3);

	this.instance_134 = new lib.Path_22_2();
	this.instance_134.setTransform(167,578.2,0.8362,0.8362,0,0,0,1.1,1);

	this.instance_135 = new lib.Path_23_2();
	this.instance_135.setTransform(167.05,576.4,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_136 = new lib.Path_24_2();
	this.instance_136.setTransform(167.05,576.8,0.8362,0.8362,0,0,0,1.3,0.8);

	this.instance_137 = new lib.Path_26_2();
	this.instance_137.setTransform(158.3,527.55,0.8362,0.8362,0,0,0,6.5,5.3);

	this.instance_138 = new lib.Path_27_1();
	this.instance_138.setTransform(158.3,527.55,0.8362,0.8362,0,0,0,6.5,5.3);

	this.instance_139 = new lib.Path_28_2();
	this.instance_139.setTransform(157,530.35,0.8362,0.8362,0,0,0,1.4,1);

	this.instance_140 = new lib.Path_29_2();
	this.instance_140.setTransform(155.5,526.65,0.8362,0.8362,0,0,0,1.3,0.8);

	this.instance_141 = new lib.Path_30_2();
	this.instance_141.setTransform(153.95,523.75,0.8362,0.8362,0,0,0,1.3,0.8);

	this.instance_142 = new lib.Path_31_2();
	this.instance_142.setTransform(156.75,529.6,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_143 = new lib.Path_32_2();
	this.instance_143.setTransform(156.25,528.55,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_144 = new lib.Path_33_2();
	this.instance_144.setTransform(155,525.75,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_145 = new lib.Path_34_1();
	this.instance_145.setTransform(156.25,528.55,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_146 = new lib.Path_35_1();
	this.instance_146.setTransform(155,525.75,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_147 = new lib.Path_36_1();
	this.instance_147.setTransform(155.5,526.75,0.8362,0.8362,0,0,0,1.3,1);

	this.instance_148 = new lib.Path_37_1();
	this.instance_148.setTransform(167.55,579.45,0.8362,0.8362,0,0,0,1.3,1.2);

	this.instance_149 = new lib.Path_38_1();
	this.instance_149.setTransform(167.5,578.95,0.8362,0.8362,0,0,0,1.4,0.7);

	this.instance_150 = new lib.Path_39_1();
	this.instance_150.setTransform(167,577.95,0.8362,0.8362,0,0,0,1.1,1);

	this.instance_151 = new lib.Path_40_1();
	this.instance_151.setTransform(167.05,577.5,0.8362,0.8362,0,0,0,1.3,1.3);

	this.instance_152 = new lib.Path_41_1();
	this.instance_152.setTransform(166.2,564.9,0.8362,0.8362,0,0,0,1.1,0.7);

	this.instance_153 = new lib.Path_42_1();
	this.instance_153.setTransform(167.05,576.65,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_154 = new lib.Path_43_1();
	this.instance_154.setTransform(166.95,575.45,0.8362,0.8362,0,0,0,1.4,1.3);

	this.instance_155 = new lib.Path_44_1();
	this.instance_155.setTransform(156.75,529.35,0.8362,0.8362,0,0,0,1.3,0.7);

	this.instance_156 = new lib.Path_45_1();
	this.instance_156.setTransform(157,530.35,0.8362,0.8362,0,0,0,1.4,1);

	this.instance_157 = new lib.Path_46_1();
	this.instance_157.setTransform(167.7,579.75,0.8362,0.8362,0,0,0,1.2,0.7);

	this.instance_158 = new lib.Path_47_1();
	this.instance_158.setTransform(165.95,563.85,0.8362,0.8362,0,0,0,1.4,1);

	this.instance_159 = new lib.Path_48_1();
	this.instance_159.setTransform(159.55,545.7,0.8362,0.8362,0,0,0,1.4,0.7);

	this.instance_160 = new lib.Path_75();
	this.instance_160.setTransform(155.5,498.1,0.8362,0.8362,0,0,0,10,7.4);

	this.instance_161 = new lib.Path_74();
	this.instance_161.setTransform(158.1,508.25,0.8362,0.8362,0,0,0,13.1,5.5);

	this.instance_162 = new lib.Path_73();
	this.instance_162.setTransform(169.6,518,0.8362,0.8362,0,0,0,10.8,4.6);

	this.instance_163 = new lib.Path_72();
	this.instance_163.setTransform(170.35,534.75,0.8362,0.8362,0,0,0,9.6,5.7);

	this.instance_164 = new lib.Path_71();
	this.instance_164.setTransform(165.4,545.8,0.8362,0.8362,0,0,0,9.2,4.2);

	this.instance_165 = new lib.Path_70();
	this.instance_165.setTransform(170.85,552.8,0.8362,0.8362,0,0,0,8,5.2);

	this.instance_166 = new lib.Path_69();
	this.instance_166.setTransform(168.75,563.55,0.8362,0.8362,0,0,0,5.8,3.4);

	this.instance_167 = new lib.Path_68();
	this.instance_167.setTransform(176,568.8,0.8362,0.8362,0,0,0,6.5,3.5);

	this.instance_168 = new lib.Path_67();
	this.instance_168.setTransform(170.55,577.1,0.8362,0.8362,0,0,0,5.7,4.3);

	this.instance_169 = new lib.Path_66();
	this.instance_169.setTransform(162.7,527.35,0.8363,0.8363,0,0,0,11.1,5.1);

	this.instance_170 = new lib.Path_1_12();
	this.instance_170.setTransform(164.75,535.9,0.8364,0.8364,0,0,0,20.1,57.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],114.9,2.7,-114.7,-3).s().p("AAoIlQgbgTgHgXQgGgVAEgkQAGgkAAgKQABgOgRgyQgPgqgXg1Qgbg+gPhDQgPhCAAgxQAAgpgZg3QgjhGgWgwQgqhbAGiMIAPh6IE+DIIAKCEQAHCagKBtQgGBGABBMQACBKAHAcIAZBWQATBCAFAaQAGAbAPAZIAaAiQglgLgoAQIg0AVIgDAAQgXAAgagSg");
	this.shape_410.setTransform(167.0814,536.5141,0.8362,0.8362);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#2D2D2D").s().p("AgWBMQgigJgRgPQgMgLgIgRQgFgLgHgXQgMgmgLgRIgEgFIAGgBIBKgMQBNgFAjAZIAAAAQAYAZAZApQAdAwgHALIgBABQgcAVg5AAQgkAAgfgIgAgnhLQgmACgpAJQALARAKAjQAGAVAFAKQAHARAMAJQAdAZA/AFQBCAFAhgXQADgIgYgoQgYgngZgbQgZgSg0AAIgQAAg");
	this.shape_411.setTransform(180.1314,586.0388,0.8362,0.8362);

	this.instance_171 = new lib.Path_65();
	this.instance_171.setTransform(179.85,585.6,0.8364,0.8364,0,0,0,13.1,8.3);

	this.instance_172 = new lib.Path_1_11();
	this.instance_172.setTransform(182.1,586.1,0.8364,0.8364,0,0,0,10,6.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.rf(["#4A4A4A","#343434"],[0,1],5.7,-0.3,0,5.7,-0.3,14.9).s().p("AAZBPQhCgEgfgaQgRgPgMgnQgNgtgMgRIBHgLQBMgGAjAYQAYAaAZApQAbAsgGAJQgbAUg0AAIgWgBg");
	this.shape_412.setTransform(180.2604,586.046,0.8362,0.8362);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#353535").s().p("AmDLzQhLgVhCgnQhtg/grhdQgYg1gLhBQgGgkADg4IAEgyQgDA6AGA4QAKBQAdA/QAqBaBrA/QBAAlBKAUQCwAyD7gKQCigFCmgcQCdgbBihaQBLhFAkhlQAVg5AKhPQAGgtAGhUQAEhJAGgSQAThCA8haQAvhHArgwQAMiYhhjQQhjjYhygtQgFAFgCAZQgCAbAEAVIADANIgKgIQgcgZgOgcQgeAUgaAWQgbAWgBAHQgBAGAWAmQATAiAKAMIgGAFIgLgJQg3gtgIgCQgQAKgrAyQg2A7gSAoQgVArgRAzQgPAtAAAIIAFAZQAEATgBADQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgDAAgJgEQgKgFgCAAIgCAKQgHAggPAOQgPAPgRApIgFANIgDACQglAWgnALQhIAVhegFQgjgBhxgSQjHghhogBQi1gEhrBAQiFBRgwCmQgYBUADBGIgIAAQgBgSACgcQAFg4AOg1QAVhIAmg7QAyhMBNguQBshBC3AEQBrABDGAgQBxATAjABQBcAEBGgUQAmgMAkgVIACgBIAEgJQAQgqARgRQAJgHAFgOQACgGADgOQACgMACgDQAFgFASAJIACABIgDgPIgEgZQgBgKAQguQARg0AVgsQATgrA5g9QAxg2ALgFQAEgCANAIQAMAIAeAZQgkg7ABgNQACgNAtgiIAugfIAEgDIACAEQAIAVAZAZQgDgaADgVQADgcAKgCIACAAIABAAQA4AWA6BGQA5BFAxBpQAtBjAXBiQAXBigGBHIAAABIgBABQgrAvguBHQg8BagTBCQgFAQgFBKQgFBUgGAsQgLBQgVA5QglBohMBGQhkBdigAbQjSAijBABQjNAAiWgqg");
	this.shape_413.setTransform(142.0523,447.6403,0.8362,0.8362);

	this.instance_173 = new lib.Path_64();
	this.instance_173.setTransform(195.9,413.1,0.8363,0.8363,0,0,0,20.4,39.1);

	this.instance_174 = new lib.Path_63();
	this.instance_174.setTransform(209.45,439.5,0.8363,0.8363,0,0,0,9.2,6.7);

	this.instance_175 = new lib.Path_62();
	this.instance_175.setTransform(66.5,480.1,0.8363,0.8363,0,0,0,3.3,5.1);

	this.instance_176 = new lib.Path_1_10();
	this.instance_176.setTransform(66.5,480.1,0.8363,0.8363,0,0,0,3.3,5.1);

	this.instance_177 = new lib.Path_2_4();
	this.instance_177.setTransform(67.55,504.85,0.8363,0.8363,0,0,0,4.7,6.6);

	this.instance_178 = new lib.Path_3_3();
	this.instance_178.setTransform(67.55,504.85,0.8363,0.8363,0,0,0,4.7,6.6);

	this.instance_179 = new lib.Path_4_3();
	this.instance_179.setTransform(65.15,504,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_180 = new lib.Path_5_3();
	this.instance_180.setTransform(64.95,503.5,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_181 = new lib.Path_6_2();
	this.instance_181.setTransform(65.4,505.8,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_182 = new lib.Path_7_2();
	this.instance_182.setTransform(65.5,506.25,0.8363,0.8363,0,0,0,1.2,0.6);

	this.instance_183 = new lib.Path_8_2();
	this.instance_183.setTransform(65.5,506.75,0.8363,0.8363,0,0,0,1.2,0.9);

	this.instance_184 = new lib.Path_9_2();
	this.instance_184.setTransform(65.25,504.45,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_185 = new lib.Path_10_2();
	this.instance_185.setTransform(65.3,505.1,0.8363,0.8363,0,0,0,1,0.5);

	this.instance_186 = new lib.Path_11_2();
	this.instance_186.setTransform(64.7,501,0.8363,0.8363,0,0,0,1,0.8);

	this.instance_187 = new lib.Path_12_2();
	this.instance_187.setTransform(65.25,504.85,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_188 = new lib.Path_13_1();
	this.instance_188.setTransform(64.45,499.85,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_189 = new lib.Path_14_1();
	this.instance_189.setTransform(64.7,501.7,0.8363,0.8363,0,0,0,1,1);

	this.instance_190 = new lib.Path_15_1();
	this.instance_190.setTransform(65.5,506.05,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_191 = new lib.Path_16_1();
	this.instance_191.setTransform(64.75,502.15,0.8363,0.8363,0,0,0,0.9,0.9);

	this.instance_192 = new lib.Path_17_1();
	this.instance_192.setTransform(64.75,502.55,0.8363,0.8363,0,0,0,0.9,0.8);

	this.instance_193 = new lib.Path_18_1();
	this.instance_193.setTransform(64.95,502.8,0.8363,0.8363,0,0,0,1,0.4);

	this.instance_194 = new lib.Path_19_1();
	this.instance_194.setTransform(69.3,526.45,0.8363,0.8363,0,0,0,3.9,3.7);

	this.instance_195 = new lib.Path_20_1();
	this.instance_195.setTransform(69.3,526.45,0.8363,0.8363,0,0,0,3.9,3.7);

	this.instance_196 = new lib.Path_22_1();
	this.instance_196.setTransform(67.55,524.45,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_197 = new lib.Path_23_1();
	this.instance_197.setTransform(68.45,524.2,0.8363,0.8363,0,0,0,1.2,1);

	this.instance_198 = new lib.Path_24_1();
	this.instance_198.setTransform(67.45,526.95,0.8363,0.8363,0,0,0,1.1,0.9);

	this.instance_199 = new lib.Path_25_1();
	this.instance_199.setTransform(67.25,547.25,0.8363,0.8363,0,0,0,3.6,3.4);

	this.instance_200 = new lib.Path_26_1();
	this.instance_200.setTransform(67.25,547.25,0.8363,0.8363,0,0,0,3.6,3.4);

	this.instance_201 = new lib.Path_28_1();
	this.instance_201.setTransform(66.5,564.05,0.8363,0.8363,0,0,0,3.6,4);

	this.instance_202 = new lib.Path_29_1();
	this.instance_202.setTransform(66.5,564.05,0.8363,0.8363,0,0,0,3.6,4);

	this.instance_203 = new lib.Path_30_1();
	this.instance_203.setTransform(64.45,562.55,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_204 = new lib.Path_31_1();
	this.instance_204.setTransform(64.95,566.15,0.8363,0.8363,0,0,0,1,1);

	this.instance_205 = new lib.Path_32_1();
	this.instance_205.setTransform(64.7,564.9,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_206 = new lib.Path_33_1();
	this.instance_206.setTransform(64.65,563.85,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_207 = new lib.Path_34_0();
	this.instance_207.setTransform(64.7,501.7,0.8363,0.8363,0,0,0,1,1);

	this.instance_208 = new lib.Path_35_0();
	this.instance_208.setTransform(64.7,501,0.8363,0.8363,0,0,0,1,0.8);

	this.instance_209 = new lib.Path_36_0();
	this.instance_209.setTransform(64.45,499.85,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_210 = new lib.Path_37_0();
	this.instance_210.setTransform(64.95,502.55,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_211 = new lib.Path_38_0();
	this.instance_211.setTransform(64.75,502.15,0.8363,0.8363,0,0,0,0.9,0.6);

	this.instance_212 = new lib.Path_39_0();
	this.instance_212.setTransform(65.25,504.45,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_213 = new lib.Path_40_0();
	this.instance_213.setTransform(65.5,506.75,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_214 = new lib.Path_41_0();
	this.instance_214.setTransform(65.25,504.85,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_215 = new lib.Path_42_0();
	this.instance_215.setTransform(65.4,505.8,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_216 = new lib.Path_43_0();
	this.instance_216.setTransform(65.5,506.5,0.8363,0.8363,0,0,0,1.2,0.9);

	this.instance_217 = new lib.Path_44_0();
	this.instance_217.setTransform(68.45,524.45,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_218 = new lib.Path_45_0();
	this.instance_218.setTransform(65.5,506.3,0.8363,0.8363,0,0,0,1.2,1);

	this.instance_219 = new lib.Path_46_0();
	this.instance_219.setTransform(65.3,505.35,0.8363,0.8363,0,0,0,1,0.8);

	this.instance_220 = new lib.Path_47_0();
	this.instance_220.setTransform(67.55,526.45,0.8363,0.8363,0,0,0,1.2,0.6);

	this.instance_221 = new lib.Path_48_0();
	this.instance_221.setTransform(64.45,562.8,0.8363,0.8363,0,0,0,1,0.9);

	this.instance_222 = new lib.Path_49_0();
	this.instance_222.setTransform(64.95,503.05,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_223 = new lib.Path_50_0();
	this.instance_223.setTransform(64.65,563.85,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_224 = new lib.Path_51_0();
	this.instance_224.setTransform(65.15,504.25,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_225 = new lib.Path_52_0();
	this.instance_225.setTransform(64.7,565.15,0.8363,0.8363,0,0,0,1,1);

	this.instance_226 = new lib.Path_53_0();
	this.instance_226.setTransform(64.9,503.75,0.8363,0.8363,0,0,0,0.8,1);

	this.instance_227 = new lib.Path_54_0();
	this.instance_227.setTransform(66.95,526.95,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_228 = new lib.Path_61();
	this.instance_228.setTransform(75.2,484.9,0.8363,0.8363,0,0,0,13.7,10.8);

	this.instance_229 = new lib.Path_60();
	this.instance_229.setTransform(87.2,467.25,0.8363,0.8363,0,0,0,14.3,39.6);

	this.instance_230 = new lib.Path_59();
	this.instance_230.setTransform(72.7,453,0.8363,0.8363,0,0,0,8.7,13.6);

	this.instance_231 = new lib.Path_58();
	this.instance_231.setTransform(70.15,465,0.8363,0.8363,0,0,0,11.1,14.3);

	this.instance_232 = new lib.Path_57();
	this.instance_232.setTransform(190.7,498.7,0.8363,0.8363,0,0,0,10.8,5.1);

	this.instance_233 = new lib.Path_56();
	this.instance_233.setTransform(185.15,464.95,0.8363,0.8363,0,0,0,25.9,32.6);

	this.instance_234 = new lib.Path_55();
	this.instance_234.setTransform(185.15,431.3,0.8363,0.8363,0,0,0,31.7,38.8);

	this.instance_235 = new lib.Path_54();
	this.instance_235.setTransform(200.25,458.3,0.8363,0.8363,0,0,0,9.7,6.3);

	this.instance_236 = new lib.Path_53();
	this.instance_236.setTransform(133.2,471.85,0.8363,0.8363,0,0,0,25.7,44.8);

	this.instance_237 = new lib.Group_11();
	this.instance_237.setTransform(105.1,468.7,0.8363,0.8363,0,0,0,21.9,44.4);

	this.instance_238 = new lib.Path_1_9();
	this.instance_238.setTransform(152.05,465.6,0.8364,0.8364,0,0,0,84.5,57.4);

	this.instance_239 = new lib.Path_2_3();
	this.instance_239.setTransform(85.85,451.5,0.8364,0.8364,0,0,0,30.1,23.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],142.2,3,-87.4,-2.7).s().p("AmCLvQhdgahKgzQhWg7glhOQguhlAIidIj4AHQgDhFAYhVQAwipCHhRQCGhREGAaQBGAHB/AUQBvATAlABQBgAEBIgWQAigKAogXIANgfQALgYANgNQANgLAFgWIAGgXQADgEALAGQALAGABgBQAAgCgEgSIgEgaQgBgJAQgtQARgzAVgsQATgpA4g/QAwg1AKgEQAGgDBIA8QgJgLgUgiQgXgoACgJQABgJAigbQAbgVAcgSQAFAMANARQAMAPANALQgEgWACgdQACgfAIgCQB1AtBlDbQBhDUgMCXQgrAwguBFQg9BbgTBDQgDAJgLCKQgKCCgdBPQgnBuhTBIQhhBTiWAZQjBAgi4ADIgYAAQjPAAiVgpg");
	this.shape_414.setTransform(142.0456,447.646,0.8362,0.8362);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#353535").s().p("AhtK6QgZgHgTgSQgSgSgEgWQgCgQACgLQACgHAHgNIAIgQQAEgKgBgWQAAgNgFgjQgIg/gBgmQgCg8APhTIAQhMQACgFgEgZQgGggAAgZQABgjAUgzIAIgYQACgLgVhmIgQhYQgKhCgRiOIgPhvQgNhaADg5IAJABQgDA4ANBYIAOBwQATCfAIAwIARBYQAUBogCANQgBAGgHATQgTAxgBAiQgBAYAGAgQAFAagCAHIgQBKQgQBUACA7QACAlAIA/QAEAmABANQAAAWgEALQgEAKgFAHQgGAMgCAGQgCAJADAPQADATARAQQAQAQAXAHQAgAIAagOQA4ghAlAIIgQgmQgZg5gDgUQgEgfABguQABgdAEg4IADgjQAEgxgDgzQgDgzgIgVIgBgCIACgCQAOgSALgVQATgjAAgeQAAgcAGgsQAGgqAIghIADgMQAQhJAUgtQAlhRA7gZQhEhsghiUIgTiAIAIAAIAUCAQAgCUBFBrIADAFIgFACQg7AXgkBPQgTArgRBLIgDAMQgHAhgGApQgHAsAAAbQAAAzgtA5QAIAXADAyQAEAzgEAxIgDAjQgFA4gBAcQgCAtAFAfQADASAZA4IATAvIADAIIgIgDQgigMg9AiQgSAKgVAAQgNAAgMgDg");
	this.shape_415.setTransform(78.4893,526.7279,0.8362,0.8362);

	this.instance_240 = new lib.Path_52();
	this.instance_240.setTransform(82.3,500.1,0.8363,0.8363,0,0,0,15.8,6.4);

	this.instance_241 = new lib.Path_51();
	this.instance_241.setTransform(72.4,505.1,0.8363,0.8363,0,0,0,10.5,6.9);

	this.instance_242 = new lib.Path_50();
	this.instance_242.setTransform(77.95,518.3,0.8363,0.8363,0,0,0,8.9,4.3);

	this.instance_243 = new lib.Path_49();
	this.instance_243.setTransform(72.55,526.95,0.8363,0.8363,0,0,0,7.8,4.3);

	this.instance_244 = new lib.Path_48();
	this.instance_244.setTransform(69.5,547.25,0.8363,0.8363,0,0,0,6.3,3.4);

	this.instance_245 = new lib.Path_47();
	this.instance_245.setTransform(73.6,556.9,0.8363,0.8363,0,0,0,7.6,3.4);

	this.instance_246 = new lib.Path_46();
	this.instance_246.setTransform(69.25,564.05,0.8363,0.8363,0,0,0,6.9,4);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#2D2D2D").s().p("AABgLIAKAOIgVAJg");
	this.shape_416.setTransform(94.9264,500.9808,0.8361,0.8361);

	this.instance_247 = new lib.Path_1_8();
	this.instance_247.setTransform(69.9,526.2,0.8364,0.8364,0,0,0,11,70.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],220.6,0.2,-9,-5.5).s().p("AhrK4QgYgHgSgRQgRgRgEgVQgDgTAFgNQAJgPAGgNQAGgPgGg0QgKhRgBgjQgDhYAgiCQACgGgFgcQgFgiAAgUQABgfANgkQANggACgKQACgMgOhIIgXh3QgGgngRiEIgSiUQgOhVAEg9IEYgGIADAkQAGAtAKAvQAhCVBGBtQhAAZgnBbQgNAhgVBWQgIAhgFAqQgHAsAAAbQAAAbgOAfQgNAagSAXQAHAVAEA0QADAzgEAxIgIBmQgCA6AFAkQADAUASAqQAWAyAEAKQglgNg9AjQgRAKgUAAQgMAAgMgDg");
	this.shape_417.setTransform(78.3921,526.5735,0.8362,0.8362);

	this.instance_248 = new lib.Path_45();
	this.instance_248.setTransform(50.15,514.7,0.8363,0.8363,0,0,0,1.7,3.7);

	this.instance_249 = new lib.Path_1_7();
	this.instance_249.setTransform(42.4,524.9,0.8363,0.8363,0,0,0,2.4,6.7);

	this.instance_250 = new lib.Path_2_2();
	this.instance_250.setTransform(39.45,522.3,0.8363,0.8363,0,0,0,4.9,7);

	this.instance_251 = new lib.Path_3_2();
	this.instance_251.setTransform(46.75,519.75,0.8363,0.8363,0,0,0,4.5,12.5);

	this.instance_252 = new lib.Path_4_2();
	this.instance_252.setTransform(52.2,513.6,0.8363,0.8363,0,0,0,2.3,7.3);

	this.instance_253 = new lib.Path_5_2();
	this.instance_253.setTransform(40.05,533.8,0.8363,0.8363,0,0,0,5.8,9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#353535").s().p("AhJDqQBDhZASidIADglQAIhNAIgkQAOg/AagcIAGgGIACAIQAOBKABCBIAAAAQgJBLguBTQguBSg8AwIgaAUgAAmiZQgHAigHBHIgEAlQgPCHg1BXQAzgxAlhIQAlhJAIhCQAAh3gNhIQgWAcgMA7g");
	this.shape_418.setTransform(57.4479,488.9409,0.8361,0.8361);

	this.instance_254 = new lib.Path_44();
	this.instance_254.setTransform(57.75,487.15,0.8363,0.8363,0,0,0,8.9,24.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],7.8,24.6,-7.6,-15.3).s().p("AAHgEIAOiAQAOhPAegfQAPBKAAB/QgJBKgtBSQgtBRg8AwQBEhbASidg");
	this.shape_419.setTransform(58.2213,488.3347,0.8361,0.8361);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#2D2D2D").s().p("AgnAlQAIgPAOgRQAOgQAXgQIAUgNIgdAcQgfAegMAXg");
	this.shape_420.setTransform(36.1839,532.7677,0.8359,0.8359);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#2D2D2D").s().p("AgeAtQAHgcAcgiIAbgdIgZAkQgYAmgFATg");
	this.shape_421.setTransform(34.0523,542.0044,0.8359,0.8359);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#2D2D2D").s().p("AgPA5QATgaAIgvIAEgsIAAAtQgEAygUAag");
	this.shape_422.setTransform(43.5608,537.2189,0.8359,0.8359);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#2D2D2D").s().p("AiOE5QgPgSAAgmQgBgfAIgXQgGgaAGglQAFggALgUQgHgVANgwQAOg1AegnQARgXAoglIBHg+QA3gvALgNQANgRAQgaIAMgWIAIADQgfBhAGBPIADAcQAGAugCAZQgDAqgVAkIgKATIACgVQADgRgCgUQgCgWgGgQQABA2gaA3QgfBEg6AdQgOAOgTAQQgoAjgRATQgdAigDAcIgBAKgAB1j6QgIAKg8AzQhlBYgZAhQgdAmgOA1QgMAwAHAQIABACIgCACQgKARgGAhQgGAkAHAZIAAABIAAABQgHATgBAbQgBAfAJASQAHgbAdggQARgTAlggQAZgWAIgJIABAAIABgBQBBggAdhQQAVg7gHgsIgCgNIAJAJQATATABA5QANgeABgkQAAgWgFglIgDgdQgFhCAVhPQgOAXgKAMg");
	this.shape_423.setTransform(44.0765,528.0996,0.836,0.836);

	this.instance_255 = new lib.Path_43();
	this.instance_255.setTransform(43,528.15,0.8362,0.8362,0,0,0,16.1,30.2);

	this.instance_256 = new lib.Path_1_6();
	this.instance_256.setTransform(44.4,524.45,0.8362,0.8362,0,0,0,13.6,22.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.rf(["#4A4A4A","#343434"],[0,1],14.1,-27.8,0,14.1,-27.8,65.8).s().p("AiaEEQABgfAHgVQgHgbAHglQAGgiAKgSQgHgRANgvQANg2AegoQAZgiBPhEQBShGAIgKQAOgSAPgaIANgWQgNAmgHAqQgJA1ADAtIAIBQQABA2gZApQADgYgEgbQgFgggMgKQAJAwgZA9QgeBPhAAfQgSATg3AwQgvAvgEAkQgPgSAAglg");
	this.shape_424.setTransform(44.0777,527.7443,0.836,0.836);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#2D2D2D").s().p("ABVBSQgdAAgkgHQgwgJgSgOQgUgPgMgXQgIgNgKgbQgMghgJgNIgHgJIALADQAWAFBFgCQAxgBAUABQAhADAMALIAAABIABABQAGANAMAqQAMApACAMQACAQgGAHQgIAKgbAAgAhYgdQAKAbAHAMQALAVATAOQAQANAsAJQAlAGAdAAQAXABAGgHQAEgEgBgNQgCgLgMgnQgMgqgGgNQgKgKgggCQgUgBgtACQg/ABgUgDQAHALAKAcg");
	this.shape_425.setTransform(75.1667,586.7283,0.8362,0.8362);

	this.instance_257 = new lib.Path_42();
	this.instance_257.setTransform(78.05,586.55,0.8364,0.8364,0,0,0,8.3,6);

	this.instance_258 = new lib.Path_1_5();
	this.instance_258.setTransform(75.2,586.35,0.8364,0.8364,0,0,0,12.5,8.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.rf(["#4A4A4A","#343434"],[0,1],6.9,-1.9,0,6.9,-1.9,15.5).s().p("AAQBGQgtgJgSgNQgbgWgQgoQgTgzgIgKQAVAEBagCQBMgCAPAQQAGANANArQAMAoABAMQADAPgHAFQgIAIgXgBQgdAAglgGg");
	this.shape_426.setTransform(75.4269,586.8329,0.8362,0.8362);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#353535").s().p("AB5IhQgXgKgKgPQgKgOgBgUQgBgMACgbQACgmgDgPQgIgyhcjCQhIiWg+hyQglhFgjghQgcgbglgJIgRgFIARgEQA+gPBKgqQCVhUBGiGIAJgRIgBATQgFBrAGBnQAGBmASB3QARBnAoCRQAkCAAcBCQAQAmAeAzQAXAnAVAeIAHAKIgMgDQgXgIgVAJQgNAGgVASQgSAQgLAEQgMAFgQAAQgWAAgWgJgAh/lGQhLAuhMAYQAkAMAeAhQAeAgAgA9QBAB2BHCTQBdDDAIAyQADAVgDAiQgCAaABALQABATAJAMQAMASAfAJQAeAIAWgJQAKgEARgPQARgOAKgGQASgKASAAIAMABQg6hYgbg/QgbhBgliCQgoiQgRhpQgShygGhiQgGhjAEhnQhBBxh6BNg");
	this.shape_427.setTransform(196.7785,529.2785,0.8362,0.8362);

	this.instance_259 = new lib.Path_41();
	this.instance_259.setTransform(195.25,508.6,0.8363,0.8363,0,0,0,9.8,6.8);

	this.instance_260 = new lib.Path_40();
	this.instance_260.setTransform(187.95,522.4,0.8363,0.8363,0,0,0,5.7,4);

	this.instance_261 = new lib.Path_1_4();
	this.instance_261.setTransform(187.95,522.4,0.8363,0.8363,0,0,0,5.7,4);

	this.instance_262 = new lib.Path_2_1();
	this.instance_262.setTransform(185.65,523.25,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_263 = new lib.Path_3_1();
	this.instance_263.setTransform(184.95,521.9,0.8363,0.8363,0,0,0,1,1);

	this.instance_264 = new lib.Path_4_1();
	this.instance_264.setTransform(185.45,522.35,0.8363,0.8363,0,0,0,1.3,0.6);

	this.instance_265 = new lib.Path_5_1();
	this.instance_265.setTransform(186.1,524.4,0.8363,0.8363,0,0,0,0.7,0.9);

	this.instance_266 = new lib.Path_6_1();
	this.instance_266.setTransform(185.9,523.7,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_267 = new lib.Path_7_1();
	this.instance_267.setTransform(184.7,521.4,0.8363,0.8363,0,0,0,1,1);

	this.instance_268 = new lib.Path_8_1();
	this.instance_268.setTransform(184.35,520.9,0.8363,0.8363,0,0,0,1,1);

	this.instance_269 = new lib.Path_9_1();
	this.instance_269.setTransform(184.05,520.1,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_270 = new lib.Path_10_1();
	this.instance_270.setTransform(194.6,536.7,0.8363,0.8363,0,0,0,4.6,3.4);

	this.instance_271 = new lib.Path_11_1();
	this.instance_271.setTransform(194.6,536.7,0.8363,0.8363,0,0,0,4.6,3.4);

	this.instance_272 = new lib.Path_12_1();
	this.instance_272.setTransform(192.55,537,0.8363,0.8363,0,0,0,1,1);

	this.instance_273 = new lib.Path_13_0();
	this.instance_273.setTransform(191.6,534.95,0.8363,0.8363,0,0,0,1,1);

	this.instance_274 = new lib.Path_14_0();
	this.instance_274.setTransform(201.75,552.8,0.8363,0.8363,0,0,0,3.8,3.4);

	this.instance_275 = new lib.Path_15_0();
	this.instance_275.setTransform(201.75,552.8,0.8363,0.8363,0,0,0,3.8,3.4);

	this.instance_276 = new lib.Path_16_0();
	this.instance_276.setTransform(199.4,551.65,0.8363,0.8363,0,0,0,1,1);

	this.instance_277 = new lib.Path_17_0();
	this.instance_277.setTransform(200.3,553.1,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_278 = new lib.Path_18_0();
	this.instance_278.setTransform(200.55,554.15,0.8363,0.8363,0,0,0,1,1);

	this.instance_279 = new lib.Path_19_0();
	this.instance_279.setTransform(204.9,566.1,0.8363,0.8363,0,0,0,3,2.7);

	this.instance_280 = new lib.Path_20_0();
	this.instance_280.setTransform(204.9,566.1,0.8363,0.8363,0,0,0,3,2.7);

	this.instance_281 = new lib.Path_21_0();
	this.instance_281.setTransform(203.25,565.9,0.8363,0.8363,0,0,0,1,1);

	this.instance_282 = new lib.Path_22_0();
	this.instance_282.setTransform(203.25,564.9,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_283 = new lib.Path_23_0();
	this.instance_283.setTransform(185.2,522.35,0.8363,0.8363,0,0,0,1,0.9);

	this.instance_284 = new lib.Path_24_0();
	this.instance_284.setTransform(200.55,554.15,0.8363,0.8363,0,0,0,1,1);

	this.instance_285 = new lib.Path_25_0();
	this.instance_285.setTransform(185.65,523,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_286 = new lib.Path_26_0();
	this.instance_286.setTransform(184.3,520.65,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_287 = new lib.Path_27_0();
	this.instance_287.setTransform(184.7,521.15,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_288 = new lib.Path_28_0();
	this.instance_288.setTransform(184.95,521.65,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_289 = new lib.Path_29_0();
	this.instance_289.setTransform(185.9,523.7,0.8363,0.8363,0,0,0,1.1,1);

	this.instance_290 = new lib.Path_30_0();
	this.instance_290.setTransform(200.3,553.1,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_291 = new lib.Path_31_0();
	this.instance_291.setTransform(203.25,565.65,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_292 = new lib.Path_32_0();
	this.instance_292.setTransform(192.55,536.75,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_293 = new lib.Path_33_0();
	this.instance_293.setTransform(186.15,524.15,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_294 = new lib.Path_39();
	this.instance_294.setTransform(190.75,521.6,0.8363,0.8363,0,0,0,9,4.9);

	this.instance_295 = new lib.Path_38();
	this.instance_295.setTransform(199.95,526.7,0.8363,0.8363,0,0,0,7.5,4.6);

	this.instance_296 = new lib.Path_37();
	this.instance_296.setTransform(197.1,535.95,0.8363,0.8363,0,0,0,7.6,4.3);

	this.instance_297 = new lib.Group_5();
	this.instance_297.setTransform(199.75,543.75,0.8363,0.8363,0,0,0,1.9,2);

	this.instance_298 = new lib.Path_35();
	this.instance_298.setTransform(204.25,542.05,0.8363,0.8363,0,0,0,7.4,4.3);

	this.instance_299 = new lib.Path_34();
	this.instance_299.setTransform(203.05,552.1,0.8363,0.8363,0,0,0,5.4,4);

	this.instance_300 = new lib.Path_33();
	this.instance_300.setTransform(210.4,557.15,0.8363,0.8363,0,0,0,6.2,4);

	this.instance_301 = new lib.Path_32();
	this.instance_301.setTransform(207.15,565.85,0.8363,0.8363,0,0,0,5.7,3.4);

	this.instance_302 = new lib.Path_31();
	this.instance_302.setTransform(194.3,533.9,0.8364,0.8364,0,0,0,27.3,49.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],17.8,0.7,-19.5,-0.1).s().p("ACFIaQgggIgNgUQgNgSADgnQADg1gDgPQgIgxhcjCQhIiVg/h1QgkhDgighQgfgegngKQA9gOBLgrQCXhUBHiJQgFBuAGBnQAGBlATB2QAQBmAoCPQAlCDAcBDQAPAmAfAzQAWAmAWAgQghgKgfAWIguAiQgMAFgOAAQgNAAgQgFg");
	this.shape_428.setTransform(197.0712,529.9006,0.8362,0.8362);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#353535").s().p("AABHaQgmgPgKgUQgJgSgqhwQg3iRgQglQgdhCgKgtQgOg/ATgnIAAgBQAjhKAGg+QAMhzg/h7IgCgDIADgCQAjgfBwARQBwARBHAvQBDAsgQAwQgVByhZCEQgjA0gDBVQgCA2AKAzQALA9AYA8QAaBBAbAaQAVATAdAQQAUAJAQAMIANAKIgQgCQgOgCgMABQgNABgHAEQgGACgPAPQgTAUgNADQgMADgQAAQgkAAgkgNgAjMnOQA/B9gMB0QgHA+gjBLIAAABQgSAmAOA8QAJAsAdBAQAPAjA4CUQAqByAIAQQAMAWAwANQAvANAfgIQALgDASgSQAQgQAIgDQALgGAVAAIACAAQgNgIgJgEQgggRgUgTQgcgbgbhDQgYg8gMg/QgKg0ACg3QAEhXAkg2QBZiEAUhvIAAAAQAOgrg+goQhDgshrgSQgrgHgfAAQgwAAgVAQg");
	this.shape_429.setTransform(105.8789,532.9273,0.8362,0.8362);

	this.instance_303 = new lib.Path_30();
	this.instance_303.setTransform(102.55,545.7,0.8363,0.8363,0,0,0,8,4.3);

	this.instance_304 = new lib.Path_29();
	this.instance_304.setTransform(109.75,517,0.8363,0.8363,0,0,0,9.1,4.3);

	this.instance_305 = new lib.Path_14();
	this.instance_305.setTransform(93.3,519.05,0.8363,0.8363,0,0,0,4.3,4.9);

	this.instance_306 = new lib.Path_1_3();
	this.instance_306.setTransform(93.3,519.05,0.8363,0.8363,0,0,0,4.3,4.9);

	this.instance_307 = new lib.Path_2_0();
	this.instance_307.setTransform(92,515.7,0.8363,0.8363,0,0,0,1,0.9);

	this.instance_308 = new lib.Path_3_0();
	this.instance_308.setTransform(91.05,519.1,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_309 = new lib.Path_4_0();
	this.instance_309.setTransform(91,519.8,0.8363,0.8363,0,0,0,1.1,0.6);

	this.instance_310 = new lib.Path_5_0();
	this.instance_310.setTransform(91.85,516.55,0.8363,0.8363,0,0,0,1.2,1);

	this.instance_311 = new lib.Path_6_0();
	this.instance_311.setTransform(90.8,520.5,0.8363,0.8363,0,0,0,1.3,0.8);

	this.instance_312 = new lib.Path_7_0();
	this.instance_312.setTransform(91.3,517.3,0.8363,0.8363,0,0,0,1,1);

	this.instance_313 = new lib.Path_8_0();
	this.instance_313.setTransform(91.75,536.25,0.8363,0.8363,0,0,0,5.5,6.9);

	this.instance_314 = new lib.Path_9_0();
	this.instance_314.setTransform(91.75,536.25,0.8363,0.8363,0,0,0,5.5,6.9);

	this.instance_315 = new lib.Path_10_0();
	this.instance_315.setTransform(89.25,537,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_316 = new lib.Path_11_0();
	this.instance_316.setTransform(90.8,540.8,0.8363,0.8363,0,0,0,1.3,0.9);

	this.instance_317 = new lib.Path_12_0();
	this.instance_317.setTransform(89.8,538.3,0.8363,0.8363,0,0,0,1.2,1);

	this.instance_318 = new lib.Path_13();
	this.instance_318.setTransform(90.3,539.55,0.8363,0.8363,0,0,0,1.3,1);

	this.instance_319 = new lib.Path_15();
	this.instance_319.setTransform(97.95,554.85,0.8363,0.8363,0,0,0,4.2,4);

	this.instance_320 = new lib.Path_16();
	this.instance_320.setTransform(97.95,554.85,0.8363,0.8363,0,0,0,4.2,4);

	this.instance_321 = new lib.Path_17();
	this.instance_321.setTransform(95.35,552.1,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_322 = new lib.Path_18();
	this.instance_322.setTransform(96.2,554.65,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_323 = new lib.Path_19();
	this.instance_323.setTransform(90.8,520.35,0.8363,0.8363,0,0,0,1,1);

	this.instance_324 = new lib.Path_20();
	this.instance_324.setTransform(89.8,538.3,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_325 = new lib.Path_21();
	this.instance_325.setTransform(89.25,537,0.8363,0.8363,0,0,0,1,0.7);

	this.instance_326 = new lib.Path_22();
	this.instance_326.setTransform(91.05,519.55,0.8363,0.8363,0,0,0,1,0.6);

	this.instance_327 = new lib.Path_23();
	this.instance_327.setTransform(88,531.35,0.8363,0.8363,0,0,0,1,1);

	this.instance_328 = new lib.Path_24();
	this.instance_328.setTransform(90.3,539.55,0.8363,0.8363,0,0,0,1.3,1);

	this.instance_329 = new lib.Path_25();
	this.instance_329.setTransform(91.3,519.1,0.8363,0.8363,0,0,0,1,1);

	this.instance_330 = new lib.Path_26();
	this.instance_330.setTransform(96.2,554.65,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_331 = new lib.Path_27();
	this.instance_331.setTransform(91.85,517.05,0.8363,0.8363,0,0,0,1.2,0.7);

	this.instance_332 = new lib.Path_28();
	this.instance_332.setTransform(91.85,516.3,0.8363,0.8363,0,0,0,1.1,0.7);

	this.instance_333 = new lib.Path_12();
	this.instance_333.setTransform(97.9,519.55,0.8363,0.8363,0,0,0,9.8,5.5);

	this.instance_334 = new lib.Path_11();
	this.instance_334.setTransform(101.75,529.9,0.8363,0.8363,0,0,0,10.3,4.7);

	this.instance_335 = new lib.Path_10();
	this.instance_335.setTransform(95.6,536.25,0.8363,0.8363,0,0,0,10.1,6.9);

	this.instance_336 = new lib.Path_8();
	this.instance_336.setTransform(100.45,554.85,0.8363,0.8363,0,0,0,7.2,4);

	this.instance_337 = new lib.Path_7();
	this.instance_337.setTransform(108.4,561.25,0.8363,0.8363,0,0,0,7.5,3.7);

	this.instance_338 = new lib.Path_5();
	this.instance_338.setTransform(103.1,532.35,0.8364,0.8364,0,0,0,18.6,48.9);

	this.instance_339 = new lib.Path_1_2();
	this.instance_339.setTransform(121.65,568.55,0.8364,0.8364,0,0,0,1.6,0.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.lf(["#F2F1F1","#EBEAEA","#D8D7D6","#BEBEBC"],[0,0.243,0.6,1],17.8,0,-23.2,0).s().p("AAXHbQgxgPgNgXQgGgOgwh9QgwiEgTgpQgehEgJguQgNg7ASglQAjhKAHg/QAMh0hAh9QAYgVBDACQBAADBGAVQBKAXApAhQAvAmgMAnQgWByhYCCQgfAugHBIQgGA8AMBDQAMA/AYA8QAbBCAbAaQATARAZAOQAfAQAMAJQgfgEgSAIQgHAEgRARQgRAQgMAEQgMADgPAAQgXAAgfgIg");
	this.shape_430.setTransform(105.4399,532.9686,0.8362,0.8362);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#2D2D2D").s().p("AgVBBQgUgGgUgSQgMgLgWgaQgegigQgKIgQgKIAUACQBaAIAYgNIACgCQAVgMAOgEQAcgHAgAIIABABQAKAGAFAFQAZATAUAgQATAfAEAaIAAADIgBABQgMAJgZAGQgdAHghAAQgqAAglgLgAhYAAQAUAXALALQAUARATAGQAzAPA2gGQArgFATgMQgEgZgSgcQgUgdgWgTIgOgKQgdgIgaAHQgOAEgSALIgEACQgXAOhRgGQALAJAZAdg");
	this.shape_431.setTransform(116.5351,575.1629,0.8362,0.8362);

	this.instance_340 = new lib.Path_3();
	this.instance_340.setTransform(116.9,575.55,0.8363,0.8363,0,0,0,15.7,6.4);

	this.instance_341 = new lib.Path_1_1();
	this.instance_341.setTransform(120.5,574.05,0.8363,0.8363,0,0,0,10.8,6.4);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.rf(["#4A4A4A","#343434"],[0,1],7.6,-0.2,0,7.6,-0.2,15.4).s().p("AgaA8QgdgIgjgpQgogugQgKQBdAJAZgOQAWgNAMgEQAcgIAgAJIAPAKQAYATATAfQAUAeADAaQgRAOgvAFQgQACgRAAQgnAAglgLg");
	this.shape_432.setTransform(117.0995,575.1653,0.8362,0.8362);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#2D2D2D").s().p("Ag3BEQgSgNgKgRQgGgKgHgVQgGgRgEgJQgHgPgNgMIgEgEIAFgDQAxgbA9gHQBDgJAXAbIAAAAQASAXARAoQATArACAfIAAADIgCABQgKAIgYAFQgXAFgdAAQhAAAgigWgAgMhPQg5AHgvAYQALAMAIAPIAJAZQAHAUAFAJQAJAQARALQAfAWA+AAQA5gBAWgOQgCgegSgpQgRgmgQgWQgQgRgmAAQgNAAgOACg");
	this.shape_433.setTransform(215.7135,576.042,0.8364,0.8364);

	this.instance_342 = new lib.Path_0();
	this.instance_342.setTransform(215.55,576.2,0.8364,0.8364,0,0,0,12.8,8);

	this.instance_343 = new lib.Path_1_0();
	this.instance_343.setTransform(218.7,575.95,0.8364,0.8364,0,0,0,9.2,6.8);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.rf(["#4A4A4A","#343434"],[0,1],7.9,-0.5,0,7.9,-0.5,15).s().p("Ag1BAQgbgSgLgkQgOgogTgTQAvgaA7gIQBCgJAXAaQARAXARAmQASArACAfQgVARg8AAIgDAAQg/AAgfgWg");
	this.shape_434.setTransform(215.8181,576.0306,0.8364,0.8364);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_434},{t:this.instance_343},{t:this.instance_342},{t:this.shape_433},{t:this.shape_432},{t:this.instance_341},{t:this.instance_340},{t:this.shape_431},{t:this.shape_430},{t:this.instance_339},{t:this.instance_338},{t:this.instance_337},{t:this.instance_336},{t:this.instance_335},{t:this.instance_334},{t:this.instance_333},{t:this.instance_332},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.shape_429},{t:this.shape_428},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270},{t:this.instance_269},{t:this.instance_268},{t:this.instance_267},{t:this.instance_266},{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.shape_427},{t:this.shape_426},{t:this.instance_258},{t:this.instance_257},{t:this.shape_425},{t:this.shape_424},{t:this.instance_256},{t:this.instance_255},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.instance_254},{t:this.shape_418},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.shape_417},{t:this.instance_247},{t:this.shape_416},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.shape_415},{t:this.shape_414},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.shape_413},{t:this.shape_412},{t:this.instance_172},{t:this.instance_171},{t:this.shape_411},{t:this.shape_410},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.shape_409},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30,3.6,1080.3,589.9), null);


// stage content:
(lib.head2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Game
	this.instance = new lib.Symbol16_1();
	this.instance.setTransform(-152.1,456.35,1,1,0,0,0,20,16);

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
p.nominalBounds = new cjs.Rectangle(363,191.5,747.3,446.6);
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