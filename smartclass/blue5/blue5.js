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


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.frame_2 = function() {
		playSound("_1");
	}
	this.frame_27 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_29 = function() {
		playSound("_2");
	}
	this.frame_49 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_52 = function() {
		playSound("_3");
	}
	this.frame_74 = function() {
		/* stop();*/
		this.stop();
	}
	this.frame_76 = function() {
		playSound("_4");
	}
	this.frame_100 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_102 = function() {
		playSound("_5");
	}
	this.frame_121 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_123 = function() {
		playSound("_6");
	}
	this.frame_142 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_150 = function() {
		/* stop();*/
		
		this.stop();
	}
	this.frame_153 = function() {
		/* stop();*/
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(25).call(this.frame_27).wait(2).call(this.frame_29).wait(20).call(this.frame_49).wait(3).call(this.frame_52).wait(22).call(this.frame_74).wait(2).call(this.frame_76).wait(24).call(this.frame_100).wait(2).call(this.frame_102).wait(19).call(this.frame_121).wait(2).call(this.frame_123).wait(19).call(this.frame_142).wait(8).call(this.frame_150).wait(3).call(this.frame_153).wait(3));

	// Layer_15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah1DdQg1gjgBhDQgBhdA/goQguglAAg3QAAg+AvgqQAugnA/gBQBMAAAmApQAgAjAAA+QAAAigMAVQgMATgaAPQAnAWARAbQATAgAAA0QAABEg1AmQgwAjhJAAQhGAAgtgegAhAA3QgVAVABAoQABAeAdAQQAWAMAeAAQAxAAATgVQAOgQAAglQAAgggZgVQgUgPgngMQgtAUgPAPgAhEhqQAAAhA8APQAggJANgIQAXgOAAgXQAAgkgQgNQgMgKggAAQhFAAABBBg");
	this.shape.setTransform(21.8483,50.2747);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(151).to({_off:false},0).to({_off:true},4).wait(1));

	// Layer_14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhxDuQgOgMAAgRQAAgOAWgyIBEifQArhdAug3IiDgDIhIgCQgqgDAAgmQAAgRAMgMQANgMATAAQAoAABQADIB3ACIA6AAQARAAANAHQAQAIAAAQQAAARgTAZIggAjQgoAtgiBBQgLAUguBiQgGANgUA6QgQAsgRAZQgMASgXAAQgRAAgOgMg");
	this.shape_1.setTransform(22.425,50.775);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(144).to({_off:false},0).to({_off:true},6).wait(6));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AiHDDQgjgzAAhTQAAiZCEhyIAggeQAXgWAPAAQARAAAOANQANAMAAARQACAPgmAkIgzAvQgdAdgNAbQARgHAPgDQAOgDAMAAQBPAAArApQAsApAABKQAABMguAyQgwAzhQABQhaAAgqhAgAgtARQgKAEgaAQIgBAYQgBA8AVAfQAUAdApAAQAoAAAXgcQAWgaAAguQAAgjgWgTQgWgRgrAAQgXAAgTAHg");
	this.shape_2.setTransform(22,50.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(122).to({_off:false},0).to({_off:true},21).wait(13));

	// Layer_11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AinC5QgIgMAAgLQAAgSAOgLQANgMASgBQASABANANIAXAYQAUAOAgAAQAwAAAhgkQAggiAAgyQAAgvgQgWQgQgYggAAQg3AAghAkIgbAdQgSAQgTAAQgSAAgNgMQgNgMABgQIAFg3QALhdAAgfQAAgIgGgNQgGgOAAgHQAAgQAQgIQANgGARAAIAUABIATAAICYABIAYgCIAZgCQARAAALAMQALAKAAARQAAAwhggBIgTAAIgQAAIhdAAQgBATgHAtQAqgVA4AAQBOABAoA5QAgAvAABHQAABXg1A4Qg3A7hbAAQhhAAguhFg");
	this.shape_3.setTransform(22.35,50.25);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(101).to({_off:false},0).to({_off:true},20).wait(35));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAjC8IAAhMIh+AAQhmAAAAgpQAAgSASgVIAeghQAzhJBniQQAZghAoAAQATAAANAKQAQALAAAVIABDtQApACAOAHQAQAJAAAZQAAAagYAKQgRAGgegBQABAugCA1QAAASgLALQgLAMgTAAQgwAAAChAgAg7AcIBeAAIAAiNQgfAwg/Bdg");
	this.shape_4.setTransform(21.6755,49.325);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(75).to({_off:false},0).to({_off:true},25).wait(56));

	// Layer_4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AheDlQgwgYgQgsQgCgHAAgIQgBgRAPgMQAOgLAQAAQAUAAANAPQAUAcADADQATAPAnAAQAdABAXgTQAXgSgBgZQABhPhqgKQgvgFAAgiQAAgaAlgMIBDgQQAVgGALgLQALgLAAgPQACgvhLAAQgYAAgeATQgdASgLAAQgSAAgNgMQgMgOAAgQQgBgbA2gaQAwgZAdAAQBIABArAfQAwAiAAA/QAAAkgOAYQgNAZgbAOQBCAjAABQQgBBCgvAsQgxAuhDgBQgzAAgpgUg");
	this.shape_5.setTransform(21.55,50.15);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(50).to({_off:false},0).to({_off:true},24).wait(82));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhpDzIgKgBQgdAAgLgYQgFgOAAgfQAAg7AagoQAUgfAugeIBUg4QAygkAAgvQAAgMgUgLQgUgMgTAAQghAAglAeQgmAegOAAQgRAAgNgJQgPgKAAgSQAAgTAPgOQAngiAdgQQApgWArAAQA3AAAsAdQAzAhgBA1QAAA2gZAmQgSAegrAbIhOAyQg8AogFAyIAzgFQBEgEAdAAQAbAAAbAMQAgAPABAXQAAAQgNANQgLANgTAAQgIAAgRgDQgQgDgIAAIhcAAQgMAAgZADQgYADgMAAIgKgBg");
	this.shape_6.setTransform(22.15,49.325);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(28).to({_off:false},0).to({_off:true},21).wait(107));

	// Layer_16
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag3BmQgdgKAAgWQAAgTAYgBQAIAAARAGQASAGAIAAQAnAAABgQQgBgKgbgNQgogRgLgHQgbgTAAgcQAAgnAqgOQAYgIAxAAQATAAAKAFQAMAHAAATQABAigUABQgTgBgEgQQgHgBgJAAQguAAAAANQAAAHAcAOQAmARAOAKQAcAUAAAaQAAAhgfARQgZAOgkAAQgaAAgWgIg");
	this.shape_7.setTransform(551.6,-71.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFAQAAQAbAAARgLQARgKAJAAQAVABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_8.setTransform(530.7,-71.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_9.setTransform(514.7,-76.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_10.setTransform(502.95,-77.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AglCkQgIgGAAgLIABgFQAEgcAAgZIAAhgIgNABIgLABQgMAAgIgGQgHgIAAgLQAAgSATgGQAIgCAagBIACgXQAGgrASgVQAWgbAvAAQAjAAAAAaQAAAZghAAQgXAAgLARQgIAMgDAbIgBAFIAmgDQAkAAAAAaQAAAZgmgBIgmACIAAA0IABA0QAAAkgFAVQgEAVgVAAQgLAAgIgIg");
	this.shape_11.setTransform(487.225,-76);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAhgaArAAQAnAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_12.setTransform(468.1,-71.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_13.setTransform(446.7,-71.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgRCIQgIgHAAgKIAAgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQADBOAAAYIAAAKIABALQAAAtgcAAQgKAAgIgHg");
	this.shape_14.setTransform(426.45,-74.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgRCIQgJgHAAgKIABgWIABgVQAAgXgEhNIglgDQgYgDAAgWQAAgLAHgIQAHgIAMAAIAhADIAAgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOAAAYIAAAKIAAALQAAAtgdAAQgJAAgIgHg");
	this.shape_15.setTransform(407.6,-74.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_16.setTransform(387.5553,-71.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag5CUQgIAIgKAAQgKAAgIgHQgHgHAAgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgYgKgAgVgDQgNAFgRALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgNAGg");
	this.shape_17.setTransform(365.45,-76.925);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_18.setTransform(324.225,-77.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_19.setTransform(301.35,-71.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAHgIQAGgHAMAAQAWAAAEAXQAhgaAqAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_20.setTransform(281.25,-71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_21.setTransform(260.7053,-71.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAfQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_22.setTransform(239.6958,-71.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_23.setTransform(223.75,-77.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAfQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_24.setTransform(207.6958,-71.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_25.setTransform(186.775,-71.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFAQAAQAbAAARgLQARgKAKAAQAUABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_26.setTransform(148.1,-71.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_27.setTransform(126.6553,-71.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_28.setTransform(110.75,-77.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("Ag5CUQgIAIgKAAQgLAAgHgHQgIgHAAgLIABgOIABgPIAAjcQAAgOAGgLQAIgOAPAAQAUAAAAAXIAAAIIgBAIIAABLQAOgIAOgEQANgEALAAQAuAAAdAhQAaAeAAAtQgBAtgeAgQgfAggtAAQgbAAgZgKgAgWgDQgNAFgQALIAABTQAaAMAUAAQAYAAAPgRQARgRgBgZQABgZgNgRQgOgQgXAAQgJAAgOAGg");
	this.shape_29.setTransform(93.6,-76.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AglCkQgIgGAAgLIABgFQAEgcAAgZIAAhgIgNABIgLABQgMAAgIgGQgHgIAAgLQAAgSATgGQAIgCAagBIACgXQAGgrASgVQAWgbAvAAQAjAAAAAaQAAAZghAAQgXAAgLARQgIAMgDAbIgBAFIAmgDQAkAAAAAaQAAAZgmgBIgmACIAAA0IABA0QAAAkgFAVQgEAVgVAAQgLAAgIgIg");
	this.shape_30.setTransform(53.925,-76);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAfQgbAkgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_31.setTransform(33.2458,-71.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgTQAAgKAGgIQAHgHAMAAQAWAAAEAXQAhgaAqAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_32.setTransform(-3.6,-71.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_33.setTransform(-25,-71.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("Ag6CUQgGAIgLAAQgKAAgIgHQgIgHABgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgZgKgAgWgDQgNAFgQALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgOAGg");
	this.shape_34.setTransform(-47.75,-76.925);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgRByQgHgIAAgMQAAgWgFgrQgFgqAAgWQAAgNgCgHQgXANgWAfIgEADIgBA+IAAAOIAAAOQAAAKgJAHQgIAFgLAAQgRAAgGgOQgEgKAAgWIAAhHIgBgdIAAgdQAAgQAGgOQAIgTANABQALAAAJAJQAJAHAAALIgCAQQAdghAbAAQAeAAANAWQAMgKAOgGQAPgFAQAAQAnAAANAmQADAIAGAtQAFAfAJBKQABALgJAHQgIAIgMAAQgWgBgEgWQgDgUgEglIgHg4QgFgjgIAAQgFAAgQAJQgQAJgHAGQAAAXAFAoQAGAsAAAUQAAAMgIAIQgIAGgLAAQgLAAgIgGg");
	this.shape_35.setTransform(-74.7447,-71.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_36.setTransform(-101.2447,-71.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AiJCWQgHgHAAgMIABgXIABgYIABgiIABgjIgBgkIAAglQAAgMgDgXQgCgXAAgMQAAgMAKgJQAKgJANAAQAOAAASAZQBYB+BWBPIAAgdQAAhggCghIgCgVIgCgWQAAgbAcAAQAgAAAABiIAAAfIgBB7QAAAJgEAWQgEAZgYAAQgOAAgRgQQhLhDheh6IgBA+IABAuIAAAvQAAA5gcAAQgOAAgJgJg");
	this.shape_37.setTransform(-127.675,-76.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},142).wait(13));

	// Layer_1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("Ag2D3Qg8AAAAgmQAAgqBDAAIAOAAIAAkYQgcATgIAAQgSAAgNgNQgNgNAAgQQAAgSAVgSIAkgaIAngfQAXgSAWAAQAdAAAAAjQAAAlgEBFQgDBFAAB+IAABNIAVAAQATAAAMALQANAMAAASQAAARgNAMQgMAMgTAAg");
	this.shape_38.setTransform(21.025,48.925);
	this.shape_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(1).to({_off:false},0).to({_off:true},26).wait(129));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-108,709.8,202.6);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
		/* _root.b1_mc.b1.enabled=false;
		_root.b2_mc.b2.enabled=false;
		_root.b3_mc.b3.enabled=false;
		_root.b4_mc.b4.enabled=false;
		_root.b5_mc.b5.enabled=false;
		_root.b6_mc.b6.enabled=false;
		_root.b7_mc.b7.enabled=false;
		_root.b16_mc.b8.enabled=false;
		_root.b9.enabled=false;
		_root.b10.enabled=false;
		_root.b11.enabled=false;
		_root.b12.enabled=false;
		_root.b13.enabled=false;
		_root.b14.enabled=false;
		_root.b15.enabled=false;
		
		
		
		*/
		
		this.stop();
		playSound("intro");
	}
	this.frame_348 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(347).call(this.frame_348).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8F8F8").ss(1,1,1).p("AC0sLIlnYX");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(348));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-79,38,158.1);


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
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;
		_root.b5.enabled=false;
		_root.b6.enabled=false;
		_root.b7.enabled=false;
		_root.b8.enabled=false;
		_root.b9.enabled=false;
		_root.b10.enabled=false;
		_root.b11.enabled=false;
		_root.b12.enabled=false;
		_root.b13.enabled=false;
		_root.b14.enabled=false;
		_root.b15.enabled=false;
		_root.b16.enabled=false;
		*/
		
		this.stop();
	}
	this.frame_181 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(180).call(this.frame_181).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,31.9).s().p("Aj4EPQhAg1gYi9IASAKIAEABQAoAPAsgHIAngMQAdgNAWgXQAWgXALgeQAGgPACgNIASAIQAeAMAggCQAfgBAdgNQAmgRAagjIAVgmIACgIQAQgqgIgqIgKgiIAFACQBHAbA7gjQBCBYAJBPQAKBfhNBAQjWCzhAAoQhZA2hCAAQgwAAgkgdg");
	this.shape.setTransform(33.7075,29.9854);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,67.4,60), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AjgBJQgZivAdhrQAXhYDbB4QBuA8BpBNQg1BDiRBsQiRBsgvAEIgCAAQgtAAgYiug");
	this.shape.setTransform(23.5337,24.6845);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(-0.1,0,47.300000000000004,49.4), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0.1,0,0,0.1,0,24).s().p("AjgDoQgsgOAuiuQAtirBEhYQA3hICbDDQBPBhBDBwQhLAqiuArQiHAhg6AAQgSAAgLgDg");
	this.shape.setTransform(24.5244,23.4515);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(-0.1,-0.1,49.300000000000004,47.1), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,24.1).s().p("AAEDKQivgrhLgqQBDhwBOhhQCcjDA3BIQBEBYAtCrQAuCtgsAPQgLADgSAAQg6AAiGghg");
	this.shape.setTransform(24.6756,23.5015);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,49.4,47.1), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AigBIQAIgXALgsQCqgZB6hDQAcBXgyAcQg2Agh5AUQgzAIgdAAQgnAAAFgQg");
	this.shape.setTransform(16.1072,8.7961);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,32.3,17.6), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AhkCVQgKgigMggQCAhzBBh7QBHA6gaA0QgbA3haBTQhFA/gVAAQgIAAgBgHg");
	this.shape.setTransform(12.2887,15.5984);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,24.6,31.2), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AjMBnQhCgrARiFQCMAZB5gJQCNgKBrg5IACgBQgDBUgvA4Qg3BDhwAZQhUATg8AAQhCAAgjgXg");
	this.shape.setTransform(25.7759,12.5649);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,51.6,25.2), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AgNDZQgvgChNhNIAMgCIACgBQAYgHARgSIANgTQASgigLgjQgCgIgEgIIAKgCQAkgKATgiQAKgWAAgYIgEgYIgCgEQgGgYgSgRIgRgMIADgBQAogMAPgkQA8AQAfAhQAmAngNA4QgiCagPAoQgkBfg8AAIgCAAg");
	this.shape.setTransform(13.7563,21.7012);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,27.5,43.4), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AgqBJQgGhagUhbIgCgFQBEg/AigEQAsgFgGBbQgHBkAHBsQgDAggQAOQgSAPgrACIgoAEQAIgzAAg5g");
	this.shape.setTransform(7.0856,18.087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,14.2,36.2), null);


(lib.Path_8_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AhRCZQgVgDgTgaQgzhgg7hRQhMhpB0AGQA6ADCkAtQBOAWBQAsQAoAWAYAQIAJAfQgsAMg5ASQhyAmhCAkQgiASgVAAIgHAAg");
	this.shape.setTransform(26.2089,15.3589);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,52.4,30.7), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("ABEDCQhpg3hJgXQgrgNgNgSQgNgRAFggQAhhmAQhkQAWiBBOBYQAlArBTCVQAoBGAYBYQANAsAEAdIgPAcQgngXg2gbg");
	this.shape.setTransform(17.6286,24.3818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,35.3,48.8), null);


(lib.Path_7_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],1.2,2,0,1.2,2,16).s().p("AAyCNQhFgyhFgeQhGgeAlhMQAMgaAcglIArg3QAegpAnAmQAJAIA7BSQAcAmAGBiQAEAygDApIgcAiQgVgTgjgZg");
	this.shape.setTransform(13.5403,18.5543);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_13, new cjs.Rectangle(0.1,0.1,27,37), null);


(lib.Path_7_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,23.9).s().p("Ai8B4QgXgkgZhBIglhgQgdhFBPgVQAdgIAzgEIBYgFQBFgFCDBEQBBAiA0AjIAUA+QgpAMg7AZQh1AxhbBAQgkAZggAAQg0AAgqhBg");
	this.shape.setTransform(28.1722,18.5457);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_11, new cjs.Rectangle(0,0,56.4,37.1), null);


(lib.Path_7_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AA6CMQhKgphIgVQhKgVAbhPQAJgcAXgoIAkg8QAYgtArAhQAJAHBGBKQAhAiATBgQAJAxADAqIgYAlQgXgQgmgVg");
	this.shape.setTransform(14.3739,17.7141);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_9, new cjs.Rectangle(0.1,0.1,28.599999999999998,35.3), null);


(lib.Path_7_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AiaBAQgHgcgDguIgDhFQgEgzA3ADQALABBjAXQAtAMBGBGQAiAjAaAhIAAAsQgdgBgqAEQhWAHhHAWQgQAFgNAAQgxAAgRhAg");
	this.shape.setTransform(16.8864,12.7838);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_7, new cjs.Rectangle(0,0,33.8,25.6), null);


(lib.Path_7_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AjjA4Qgfg/gVhNQgRhBAAgcQACgpB5AUQBRAOBlAhQBNAaBqBRQA2AoAmAjIANAsQihBDinA6QgTAGgSAAQhXAAhIiWg");
	this.shape.setTransform(29.6993,20.5973);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,59.4,41.2), null);


(lib.Path_7_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AgHC6QhqgjgvhjQgmhQCehaQBOgtBWgdIAOgCIAdBpQACAcgDAqQgIBUgbBIQgPApgoAMQgPAFgRAAQgYAAgbgJg");
	this.shape.setTransform(16.768,19.4783);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,33.6,39), null);


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
	this.shape.graphics.f("#F17199").s().p("AhzCaQgigSgWgtQgyhjAmhnQAehTCuAxQBYAYBRApIALAIIg2BeQgSAVghAbQhBA3hGAfQgTAIgSAAQgUAAgTgKg");
	this.shape.setTransform(19.8795,16.4203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(-0.2,0,40.2,32.9), null);


(lib.Path_6_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],-4,-3.8,0,-4,-3.8,16.2).s().p("AiVA/QgPh5AQg8QANgyBJgEQAPgBBbAKQAfADAsA1QAXAaAQAaIh0CGQh4BGggAWQgDACgDAAQgUAAgNhug");
	this.shape.setTransform(15.6871,17.3367);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_15, new cjs.Rectangle(-0.1,0.1,31.6,34.6), null);


(lib.Path_6_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,24.2).s().p("AAtDZQimhMhBhDQg1g3A0hfQASghAggpIAsg4QAbgkBmgQQAzgHAtgBIBSD9IgCBuQgCB2ACAlQAAAPgVAAQgmAAhsgyg");
	this.shape.setTransform(21.3937,26.6922);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_13, new cjs.Rectangle(0,0,42.8,53.4), null);


(lib.Path_6_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AiEBJQgeh3AHg9QAHgzBJgNQAMgDBegDQAfgBAyAvQAaAYATAYIhhCUQhuBUgeAaQgDADgDAAQgUAAgahpg");
	this.shape.setTransform(15.65,17.7593);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_11, new cjs.Rectangle(0,0,31.4,35.5), null);


(lib.Path_6_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgPB7QhbhTgbg3QgWguA1gyQAJgJBOg3QAYgSBEAMQAjAGAdAJIAACxIgZBGQgaBLgGAYQgCAHgHAAQgWAAhEhAg");
	this.shape.setTransform(14.0897,18.6704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_9, new cjs.Rectangle(0.1,0,28.099999999999998,37.4), null);


(lib.Path_6_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("ABfEcQhmhNhxhGQiBhRAGhMQADgbAVgvQAehAAIgVIAahcQANgyAOgUQAlg2BrBHQBgBABID+QAxCvALCCIgsBDQgogihBgwg");
	this.shape.setTransform(24.3595,36.6963);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_8, new cjs.Rectangle(0,0.2,48.8,73.1), null);


(lib.Path_6_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AgODPQgkgZhxhuQhBg/A6haQAwhLBLgiQA5gaBWgQQArgIAggDIASA7QASA7gRCWQgSCpg0AlQgTANgYAAQgnAAg0glg");
	this.shape.setTransform(19.7521,24.4285);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(-0.1,0,39.7,48.9), null);


(lib.Path_6_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AAqCZQgVgDgUgaQgyhgg7hQQhfiDDMApIABAEQAdBVAsBTQAdAuAjAqIgkARQghASgWAAIgGAAg");
	this.shape.setTransform(13.9316,15.3363);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,27.9,30.7), null);


(lib.Path_6_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AgeCuQgqgOgOgSQgNgRAGggQAghnAQhjQAPhaAqAPQAgAMA0BOIgDAEQgqBUgaBVQgOA1gEA3QgSgIgTgFg");
	this.shape.setTransform(9.6182,18.6673);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0.1,0,19.099999999999998,37.4), null);


(lib.Path_5_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0.1,0,0,0.1,0,32.2).s().p("AgvGZQjAhBBJlYQAZh7A2iAQAthuAggnQAug5CXCmQhMAKgnBNQgnBKAdBHQhGAqgKBYQgLBcBGAyQgwAegVA7QgVA7ATA2g");
	this.shape.setTransform(18.6295,41.5199);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_11, new cjs.Rectangle(-0.1,0,37.5,83.1), null);


(lib.Path_5_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgMB/QhKgVAbhQQAJgbAXgoIAjg8QAWgoAlAWQhCBtgJCKg");
	this.shape.setTransform(6.7739,12.8461);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_10, new cjs.Rectangle(0.1,0.1,13.4,25.599999999999998), null);


(lib.Path_5_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgqBAQgHgcgDguIgDhFQgEgtAsgDQAFCABCB5IgEABQgPAFgOAAQgvAAgShAg");
	this.shape.setTransform(5.662,12.7922);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_8, new cjs.Rectangle(0,0,11.3,25.6), null);


(lib.Path_5_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AjJEPQhJgpgji/QgfitBwhVQBXhDCJAFQBSADByBLQBEAtA5A1IiUDdIipBtQhaA6g9AAQgcAAgWgMg");
	this.shape.setTransform(31.6793,28.299);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_7, new cjs.Rectangle(0,0,63.4,56.6), null);


(lib.Path_5_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AhDA4Qgfg/gVhNQgRhBAAgcQACgqB9AWQgeAfAIAwQAJAvAkAWQgQAsAZAqQAbAtAygCQgMAfALAiQALAiAbARIgJAEQgTAGgSAAQhXAAhHiWg");
	this.shape.setTransform(13.6993,20.5859);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,27.4,41.2), null);


(lib.Path_5_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AADCCQhpgigvhjQgehABfhHQBOBXBlA4QAUAMAqATQgGAWgIAXQgQApgoAMQgPAFgSAAQgYAAgbgJg");
	this.shape.setTransform(15.715,13.8949);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,31.5,27.8), null);


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
	this.shape.graphics.f("#F17199").s().p("AgRCaQghgSgXgtQgyhjAmhnQAYhCB1ARQgIB1AgBwQAGAWAQArQgZAOgSAIQgSAIgTAAQgUAAgTgKg");
	this.shape.setTransform(10.0045,16.4262);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(-0.2,0,20.4,32.9), null);


(lib.Path_4_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,31.5).s().p("AABF/QhsgEg1itQgXhJgpkTQgPhjBHhBQA6g2BsgWQAUBCBHAbIAGABIgfATQgiAcgPAoIgEAIIgKAqQgDArARAnQANAdAXAWQAYAVAeALIATAGQgIAMgGAPQgLAdABAgQABAgANAdIAWAjQAbAiAoAPIAEACIAUAFQiMB7hRAAIgFAAg");
	this.shape.setTransform(22.7184,38.2797);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_12, new cjs.Rectangle(0,0,45.5,76.6), null);


(lib.Path_4_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgoBIQgeh3AHg9QAIg5BZgKQgNCLAsCmQgqAggMAMQgDACgDAAQgTAAgahog");
	this.shape.setTransform(6.475,17.6353);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_11, new cjs.Rectangle(0,0,13,35.3), null);


(lib.Path_4_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AACBdQhahTgbg3QgZg0BGg6QBBB7CABzQgMAggKAiQgCAHgHAAQgVAAhFg/g");
	this.shape.setTransform(12.3211,15.5984);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0.1,0,24.5,31.2), null);


(lib.Path_4_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AipBjQAGgVAUgqQAVgtAJgaIAahcQAOgxANgUQAmg3BqBIQAwAgArBRQhlAThRBVQhBBDg7B0Qg5g4AThCg");
	this.shape.setTransform(17.5375,22.2463);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0.1,0.2,34.9,44.199999999999996), null);


(lib.Path_4_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AgECNQglgZhxhuQgpgmAJg2QAIgtApgvQAhAWAogMIAEgBIgIATQgGAYAIAYIABAFIAKAWQANAVAVALQAgASAlgLIALgEQAAAIADAJQALAjAhASIAWAIQAYAGAXgIIADAAIAKgFQgVBrgmAbQgTAOgXAAQgoAAgzgmg");
	this.shape.setTransform(18.8115,17.8535);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,37.7,35.7), null);


(lib.Path_4_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AAhCLQgXgCgggdQg5gzhmg+QgzgggogWIAQgbQAcgLAsgMQBYgYBRgDQCqgGA4AKQBzAWhjBVQhMBBhIBQQgXATgTAAIgEAAg");
	this.shape.setTransform(27.29,14.0246);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0.1,54.6,27.9), null);


(lib.Path_3_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],1.2,-3.7,0,1.2,-3.7,15.3).s().p("AgmBcQgog/g8g8QgegfgWgSIAcghQApgJAxgEQBigIAqAVQBaAuAKAIQArAhgkAjIgvAzQghAhgYAQQgdAUgZAAQggAAgXglg");
	this.shape.setTransform(19.1401,12.9491);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_14, new cjs.Rectangle(0,0,38.3,25.9), null);


(lib.Path_3_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,22.9).s().p("AjoCiQAVg7AhhCQBBiDA9glQB/hOARgGQBMgeASBKIAbBkQASBDACAqQAHB+hzACQhwABh7AdQg+AOgoAOg");
	this.shape.setTransform(23.3425,22.5025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_12, new cjs.Rectangle(0,0.1,46.7,44.9), null);


(lib.Path_3_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgUBhQgwg6hDgzQgigbgYgPIAYglQAogNAwgLQBggVAsAQQBeAiAMAHQAvAbgfAoIgpA4QgbAlgWATQgfAcgbAAQgdAAgYgfg");
	this.shape.setTransform(19.366,12.7675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_10, new cjs.Rectangle(0,0,38.8,25.6), null);


(lib.Path_3_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AA8B7QhHgWhVgHQgrgEgcABIAAgsQAZghAjgjQBFhGAtgMQBjgXAMgBQA2gDgEAzIgDBFQgDAugHAcQgRBAgxAAQgOAAgPgFg");
	this.shape.setTransform(16.8387,12.7838);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,33.7,25.6), null);


(lib.Path_3_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AglD5QhCgughi0QgVhwAphMQAjhCBMgiIgBACQgLB4AsCGQAnBzBOB4QhHAogzAAQghAAgagRg");
	this.shape.setTransform(14.4083,26.634);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,28.8,53.3), null);


(lib.Path_3_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AjeDnQAMgzAWg/QAth+Axg/QBChUA8g5QBZhUAYAhQARAXAVBBQAZBKAKBHQAbDGhvAdQirAuirAhg");
	this.shape.setTransform(22.298,27.4474);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,44.6,54.9), null);


(lib.Path_3_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AgMCRQg9gvgyhFQgZgggOgZIgehpIAMgFQBZgVBbgDQC0gHALBZQANBshIBVQghAmglAKQgLADgKAAQgcAAgZgTg");
	this.shape.setTransform(19.25,16.3498);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,38.5,32.8), null);


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
	this.shape.graphics.f("#F17199").s().p("Ah0C6QgjgVgGgsQgJhMANhTQAGgqAIgbIA2heIAMAFQBMAwBCA+QCEB7g3BGQhFBWhuAJIgPAAQgoAAgcgQg");
	this.shape.setTransform(16.1958,20.2272);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,32.4,40.5), null);


(lib.Path_2_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],-1.2,3.7,0,-1.2,3.7,17.2).s().p("AilCLQARgkAyiBIBziHIA6AeQA7AkAIAeQAXBZABAPQAIBJgvAUQg6AZh6AEIghABQhaAAALgXg");
	this.shape.setTransform(16.6698,16.1577);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_18, new cjs.Rectangle(0,0,33.4,32.3), null);


(lib.Path_2_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AgUBdQiKkMAshsQAuhwA1BnQAPAfBDDLQAgBdARCjQAIBRACA/QhOhyhEiHg");
	this.shape.setTransform(12.5446,34.252);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_16, new cjs.Rectangle(0,0.1,25.2,68.4), null);


(lib.Path_2_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0.1,0,0,0.1,0,25.6).s().p("AhJBEQgYkuBThSQBUhVAJBzQADAlgQDTQgHBigvCdQgXBOgWA7QgciHgMiXg");
	this.shape.setTransform(7.9382,35.3983);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_15, new cjs.Rectangle(0,0.1,15.9,70.7), null);


(lib.Path_2_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,25.7).s().p("AgKDYQgwicgHhiQgQjUADgkQAJh0BUBWQBTBSgYEtQgLCYgdCGQgWg6gWhPg");
	this.shape.setTransform(8.0618,35.4065);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0.1,0.1,15.9,70.7), null);


(lib.Path_2_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,25.6).s().p("AAKESQgUgfhGhfIhDhYIhSj8QAlgaAugYQBcgwArAOIBEATQAzAPAhAQQBjAwgLBLQgNBchbCfQhLCEgdAAQgHAAgEgGg");
	this.shape.setTransform(23.005,28.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,46,56.1), null);


(lib.Path_2_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AigCZQAIgYAUhNIAShHIBiiVQAcAJAgAOQBAAcALAcQAiBWAEAOQAQBIgsAaQg2Afh5AUQgzAJgdAAQgnAAAFgQg");
	this.shape.setTransform(16.1175,16.8711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11, new cjs.Rectangle(0,0,32.3,33.8), null);


(lib.Path_2_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AhTC0QgGgYgahLIgYhGIAAixQAdgJAigGQBEgMAYASQBOA3AJAJQA1AygWAuQgbA3hbBTQhEBAgWAAQgHAAgCgHg");
	this.shape.setTransform(14.0353,18.6704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,28.1,37.4), null);


(lib.Path_2_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("Ag6COQi0h/ibhPIAshCQB8gpC2gWQEEggBhBAQBrBHgkA4QgNAUgoAfQhAAxgLAKQgRAPgwA1QgiAmgZAMQgTALgZAAQg8AAhXg/g");
	this.shape.setTransform(39.4172,20.4642);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,78.9,41), null);


(lib.Path_2_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("ABNDgQhAgChsiDQhhhzgSg7IgSg8QAcgPAogRQBRgiA+gKQBRgNBSAkQBjArgUBYQgiCagPAoQglBfg8AAIgCAAg");
	this.shape.setTransform(22.8604,22.2921);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,45.7,44.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("AhUCQQgQgNgUgSQAVgeAQgdQA5hkAUh0QB1ALAIBFQANBthIBVQggAmgkAKQgMADgLAAQgcAAgZgTg");
	this.shape.setTransform(12.0994,16.3092);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,24.2,32.6), null);


(lib.Path_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("Ah0BoQgkgVgFgsQgEgaAAgUQAigGAigJQBxggBehCQBMBcgsA2QhFBWhuAIIgPABQgoAAgcgRg");
	this.shape.setTransform(16.2217,12.0766);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,32.5,24.2), null);


(lib.Path_1_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,31).s().p("Aj1FQIgRgHQAygcAYg6QAXg6gRg3QBXAJA0hMQAyhIgXhPQBDghAVhSQAVhTgyg7QDfgXgDBKQgCAxgnBxQgtCEg+BrQiKD0iTAAQglAAgmgPg");
	this.shape.setTransform(26.302,35.1421);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,52.6,70.3), null);


(lib.Path_1_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("ABaEtQighXgZgMQgwgYghgXQglgZgGgOQgKgZAYhpQAfiGBFh9QBDh5BBBtQAUAhAaBCQAbBCAGAKQAVAjAyDEQAZBiAUBbQAHAcgcAAQghAAhOglg");
	this.shape.setTransform(22.2411,33.7766);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(-0.1,0,44.7,67.6), null);


(lib.Path_1_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,29).s().p("AAUEYQhyiOgSgVQgigngXgjQgZglAAgPQAAgbBAhYQBQhwBvhZQBshVAUB+QAGAmgCBHQgBBHABAMQAHAogfDIQgPBkgQBcQgDAUgOAAQgdAAhIhQg");
	this.shape.setTransform(19.45,36.069);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0.1,38.9,72), null);


(lib.Path_1_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,29).s().p("AiKFUQgPhcgPhkQgejIAFgoQACgMgBhHQgChHAHgmQASh+BtBWQBvBZBQBvQA/BYAAAbQAAAPgXAlQgYAjgiAoIiECiQhIBQgdAAQgOAAgEgUg");
	this.shape.setTransform(19.45,36.0468);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0.1,38.9,72), null);


(lib.Path_1_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AhpBHIgDgDQB8hCBJhmQAkAZgdAlIgpA3QgbAlgWAUQgeAbgbAAQgdAAgZgeg");
	this.shape.setTransform(10.8846,10.0885);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,21.8,20.2), null);


(lib.Path_1_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EA5F6B").s().p("AgzB7IgEgBQBCh5AFiAQAsADgEAtIgDBFQgDAugHAcQgRBAgwAAQgOAAgPgFg");
	this.shape.setTransform(5.638,12.7922);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,11.3,25.6), null);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FDB839").s().p("AjVEqQg/gxAbibIAjjFICUjeQBFAfBEAuQByBMAjBLQA5B8gcBqQgjCJitAmQhUASg8AAQhKAAgkgcg");
	this.shape.setTransform(25.893,32.6309);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0.1,0,51.6,65.3), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#9ECE71").s().p("AACCsQgJgigagTQApgagCg0QgDgyglgbQATgngTgsQgUgsgqgJQBchYAYAiQAQAXAWBAQAZBLAJBFQAcDHhvAeIgJACQAMgegKgig");
	this.shape.setTransform(9.748,23.6512);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,19.5,47.3), null);


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
	this.shape.graphics.f("#F17199").s().p("AhMCLQgXgCghgdIgfgaQAsgfAngnQA9hFAwhNIADgEQBdAEAbAWQAiAchFA7QhMBBhHBRQgWASgTAAIgFAAg");
	this.shape.setTransform(16.35,13.9383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,32.7,27.9), null);


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


(lib.Path_4_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17199").s().p("Ai/CzQALgcAXgoQAthPA2g7QBzh+AwggQBghDgKCCQgHBlAIBrQgDAggQAOQgRAOgtADQhMAFh0AcQg6AOgrANg");
	this.shape.setTransform(19.2178,20.9497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0.1,38.5,41.8), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_22();
	this.instance.setTransform(24.65,60.85,1,1,0,0,0,24.5,23.4);
	this.instance.alpha = 0.8984;

	this.instance_1 = new lib.Path_1_11();
	this.instance_1.setTransform(37.15,36.7,1,1,0,0,0,19.4,36.1);
	this.instance_1.alpha = 0.8984;

	this.instance_2 = new lib.Path_2_15();
	this.instance_2.setTransform(54.55,35.35,1,1,0,0,0,8,35.4);
	this.instance_2.alpha = 0.8984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgFAJQgEgDgBgEQAAgDACgEQACgDAFgBQADgBADACQAEADABAEQABADgCAEQgDAEgEAAIgCABQgDAAgCgCg");
	this.shape.setTransform(72.3093,59.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABCgcQgNgHgXAEQgtAJgyA3");
	this.shape_1.setTransform(65.675,62.062);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AAAAKQgFAAgCgEQgDgDABgDQAAgFADgCQAEgDADABQAFAAACADQADAEgBADQAAAFgEACQgDACgDAAIAAAAg");
	this.shape_2.setTransform(75.275,63.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("ABJAAQgKgLgYgDQgtgHhCAl");
	this.shape_3.setTransform(67.975,63.602);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgBAWQgKgBgFgHQgGgHABgIQABgKAHgGQAHgFAJABQAJABAGAHQAFAHgBAJQgBAJgHAGQgGAEgIAAIgBAAg");
	this.shape_4.setTransform(59.3255,65.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhsBVQgFgGAcgfQAcgeAsgjQAsgjAkgUQAkgUAFAHQAGAIgbAeQgcAegtAjQgsAkgjATQgbAPgKAAQgEAAgCgDg");
	this.shape_5.setTransform(48.5,73.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAFDFC").s().p("AlnGjQgsgOAuiuQAtisBEhXQASgXAcAFQgFgLAAgIQAAgaA/hZQBQhvBwhZQBMg9AgAtQBMhEAHB0QACAggQDRQgKCJhTDrQAigXATgIQgBgMAKgJQAGgFAIABQAIAAAGAFQAhghAggLQAWgHASADIABgDQADgDAEgBQAEgBAEACQAEADABAEQABAEgDAEQgCAEgFAAQgEABgDgCQgDgBgBgEIhkAwIABAEQAwgaAmgBQAagBARAKIACgCQAEgDAEABQAFAAACADQADAEgBAEQAAAFgEACQgDADgEgBQgFAAgCgEQgCgCAAgDIh/APQABAMgJAIQgKAIgMgFQgaAig9AwQgtAkgjAUQgkAUgFgIQgEgFAOgUQAPgTAdgaQhkAniGAdQhkAWgvAAQgSAAgKgDg");
	this.shape_6.setTransform(38.1536,42.2028);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#373535").ss(1,1,1).p("AGMHEIsXAAIAAuHIMXAAg");
	this.shape_7.setTransform(35.025,38.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmLHDIAAuFIMXAAIAAOFg");
	this.shape_8.setTransform(35.025,38.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-7.5,81.8,92.3);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2C2F36").s().p("AgGAIQgEgDAAgEQAAgEADgEQADgDAEAAQAEgBAEAEQADADAAAEQABAEgDAEQgEADgEAAIgBAAQgDAAgDgDg");
	this.shape.setTransform(75.9287,37.9565,1.44,1.44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABMgRQgNgKgZABQgyACg/Az");
	this.shape_1.setTransform(65.0517,40.5416,1.44,1.44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgHAIQgDgDAAgEQgBgEAEgEQADgDAEAAQAEgBAEAEQADADAAAEQABAEgEAEQgDADgEAAIgBAAQgEAAgDgDg");
	this.shape_2.setTransform(56.5557,20.6767,1.44,1.44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AAHhNIAGAJQAGANABAPQAEAxgrBF");
	this.shape_3.setTransform(55.5415,31.8726,1.44,1.44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgPASQgIgGAAgKQgBgKAHgHQAHgHAKgBQAIgBAIAHQAIAHAAAKQABAJgHAHQgHAIgKAAIgBAAQgJAAgGgGg");
	this.shape_4.setTransform(52.1998,44.9765,1.44,1.44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhiBvQgHgHAXglQAYgmApgsQAnguAjgcQAigbAIAGQAHAHgYAlQgXAlgpAtQgoAugiAcQgcAWgKAAIgEgBg");
	this.shape_5.setTransform(37.9778,60.9603,1.44,1.44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0.7,0.5,0,0.7,0.5,14).s().p("AilAwQAJgSASgtQCpgECFgzQAPBZg0AWQg6AZh6AEIghABQhaAAALgXg");
	this.shape_6.setTransform(42.9404,87.4311,1.44,1.44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],1.3,1.2,0,1.3,1.2,9.7).s().p("AhxA2IgCgDQCBgwBXhdQAfAeggAgIgvAyQghAhgXAQQgdAUgZAAQghAAgXglg");
	this.shape_7.setTransform(81.8458,70.4563,1.44,1.44);

	this.instance = new lib.Path_2_18();
	this.instance.setTransform(42.85,74.3,1.44,1.44,0,0,0,16.6,16.1);
	this.instance.alpha = 0.8984;

	this.instance_1 = new lib.Path_3_14();
	this.instance_1.setTransform(71.15,64.95,1.44,1.44,0,0,0,19.2,12.9);
	this.instance_1.alpha = 0.8984;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],1.2,-1,0,1.2,-1,13.3).s().p("AgwA/QgPh5AQg8QAOg3BaABQgfCJAXCpQgmAWgUAPQgDACgDAAQgUAAgNhug");
	this.shape_8.setTransform(8.1896,59.1107,1.44,1.44);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0.9,-0.1,0,0.9,-0.1,10.4).s().p("AgfB7QhHgfAlhMQANgZAcglIAqg3QAagmAjAbQhPBjgbCJg");
	this.shape_9.setTransform(20.1432,17.8829,1.44,1.44);

	this.instance_2 = new lib.Path_6_15();
	this.instance_2.setTransform(22.8,59.25,1.44,1.44,0,0,0,15.7,17.4);
	this.instance_2.alpha = 0.8984;

	this.instance_3 = new lib.Path_7_13();
	this.instance_3.setTransform(28.4,26.8,1.44,1.44,0,0,0,13.6,18.6);
	this.instance_3.alpha = 0.8984;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFDFC").s().p("AjSE8IAHgOIADgIIABgBIAqhnQgQAJgDgEQgGgEANgXIhDApQgKAIgFADIgBABIgHAEIgBABIgHAEIgCABIgGABIgEAAIgQALQgYAQgPh8QgPh7AQg7IACgHIABgDIACgEIABgDIADgEIAEgFIAHgHIAFgDIABgBIAGgEIAGgDIACAAIAFgCIADgBIAFgBIAIgCIABgBIAVgCQg0ghAmhIQAFgKBLhlIAEgGIAFgGIAHgFIAEgCIAEgCIAFgBIABAAIAEAAIACAAIACAAIAGACIAFACIABABIADABIAFADQARANAXAfIAnA4QAYAhAJBQQAFAwgCA3IAJgFQgEgOAIgKQAJgKAOADIAXiHQgCAAgEgCQgDgDAAgFQgBgFAEgDQADgEAEAAQAFAAAEADQADADAAAFQABAFgEADIgCACQAJATgCAcQgEAogfAyQAFACADACQAEAEABAEQAugkAogJQAbgFAVAHIABgDQADgEAFAAQAFAAADADQAEADAAAFQAAAEgDAEQgDAEgFAAQgEAAgEgDQgCgDgBgCIiDAnQADAMgIAKIgBABQCCgSA0AaIA+AeQAjASAOAPIAAAAIADADIAAABIADAEIAEAGIABAEIAAABIABADIAAAJIgBAFIgEAJIgFAIIgGAGQhZBagJAGQhBAxgpgvIABAVIAAABIgBAIIgBAGIAAACIgBAHIgCAGIAAABIgGANIgGAIIgFAFIgDADIgCACIgFADIgJAEQg5AZh6AEIgfABQhcAAAKgXg");
	this.shape_10.setTransform(49.3372,48.7948,1.44,1.44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance_3},{t:this.instance_2},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,98.7,97.7);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#2C2F36").s().p("AgIAZQgLgEgFgKQgEgKAEgJQAEgLAKgFQAKgEAJAEQALAEAFAKQAEAKgEAJQgEALgKAFQgFACgFAAQgEAAgFgCg");
	this.shape.setTransform(121.575,52.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ACVhyQglgKg4AYQhuAxhdCp");
	this.shape_1.setTransform(106.75,63.5801);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgJAZQgKgEgFgKQgEgKADgKQAEgKAKgFQAKgEAKADQALAEAEAKQAFAKgEAKQgEAKgKAFQgGADgFAAQgEAAgFgCg");
	this.shape_2.setTransform(81.0623,37.3123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("Agui4IAVAPQAYAWAQAiQA2BsgnC+");
	this.shape_3.setTransform(85.7012,55.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgTA2QgWgIgKgWQgKgVAIgWQAIgWAWgKQAVgKAWAIQAWAIAKAWQALAVgJAWQgIAWgWAKQgMAGgMAAQgJAAgKgEg");
	this.shape_4.setTransform(89.1874,77.5374);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("Ah5FNQgWgIAThnQAUhoAziJQAyiKAzhcQAzhcAXAIQAWAJgUBnQgTBogzCJQgyCKgzBcQgvBUgXAAIgEgBg");
	this.shape_5.setTransform(77.0179,110.8539);

	this.instance = new lib.Path_24();
	this.instance.setTransform(109,155.3,1,1,0,0,0,33.7,29.9);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Path_1_13();
	this.instance_1.setTransform(161.1,92.7,1,1,0,0,0,26.3,35.1);
	this.instance_1.alpha = 0.75;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,39.2).s().p("AjzGVQhWhGgMksQgFhyAJhtQAJhoAPgoIAmhmICCAdQCUAmBiA1QA0AdA3A2QA9A8AkBAQBbCmh6BmQjWC0hAAnQhZA3hCAAQgwAAgkgeg");
	this.shape_6.setTransform(108.4842,141.9104);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,45.3).s().p("AAbFQQizhMjShjIithUIAchMICqh5QDFiBCJgjQC0gvCUgOQDWgWgDBJQgCAxgnBxQgtCEg+BrQiLD0iTAAQglAAgmgPg");
	this.shape_7.setTransform(133.7771,92.7453);

	this.instance_2 = new lib.Path_4_12();
	this.instance_2.setTransform(22.7,120.95,1,1,0,0,0,22.7,38.3);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Path_5_11();
	this.instance_3.setTransform(25.6,41.5,1,1,0,0,0,18.6,41.5);
	this.instance_3.alpha = 0.75;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,39.7).s().p("AivGFQhtgEg1itQgXhJgpkTQgXidCzhAQBFgZBVgFQBNgEA5AOQBtAZCJBGQBFAjAvAdIgnBmQgPAog+BSQhCBYhQBTQjLDUhuAAIgFAAg");
	this.shape_8.setTransform(40.4386,120.3339);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,44.5).s().p("ACmHCQjdhBi6g/Qi/hBBIlYQAah7A1iAQAuhuAfgnQAug4CTCeQBiBsBqCcQBQB1A9DiQAfByAPBaIgcBMQhKgThwghg");
	this.shape_9.setTransform(44.9545,50.2173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFDFC").s().p("AhfOCIgQgRIgJgMIgTgjIAAgBQghhIgNiBQgMhtADiAQgeA9gZAfQgZAhgOgFQgPgFAFg3QAFg1AXhVQhTBqhbBWQhrBlhQAlIgBAAIgbALIgZAGIgBAAIgKABIgMAAQhtgEg2itQgXhIgokUIgDgsIACgQIAAgCIADgQIAFgSIAIgSIAIgMIACgEIASgWIAOgNIAbgVIAegRIAwgUIADgBIAUgGIABgBIAdgHIgKgDQjAhBBJlaQAZh6A2iAQAuhvAfgmIAHgHIABgBIADgCIACAAIACgCIAHgCIACAAIACAAIAEgBIABAAIADABIACAAIAEAAIABAAIAGACIAEABIAGACIABABIAEACIACAAIAMAGIAAAAIAGAEIABAAIAFAEIABAAQBDAtBlB8QBLBaBCBiQA9BbAzCeQAkBtAaB7QARgeANgTQgJgMgDgOQgCgPAEgPQAGgPAMgKQAMgKAPgDIhCk+QgHABgIgCQgLgEgEgLQgEgKADgKQAEgLAKgEQAKgFAKAEQALAEAFAKQAFAKgEAKIgEAHQAnAjARA/QAcBegYCJQALAAAJADQALAEAIAIQBFh5BRg2QA3glA0gCIACgHQADgLAKgFQALgEAKAEQALAEAEAKQAFAKgEAKQgEALgKAFQgKAEgLgEQgHgCgFgGIkBDKQAUAZgLAeQgFAPgLAKQgLAKgQADQAAAQgGAeQBkhJBhg4QCJhQBngaQFGhUCGAWIAIgBIAAgBIAHABIABAAIAGABIACAAIASAFIABABIAFACIABAAIAJAFIAJAGIADADIABACIACACIADAFIABADIABACIABACIABAFIAAAHQgCAygnBxQgtCDg+BsQiuEyi7hOIgJgEQA+BWAJBMIAAAAIACALIAAAVIgCAKIgBACIgBAIIgDAKIAAACIgGATIgCACIgDAKIgGAKIgLASIgCACIgMAPIgVAUQjWCzhBAoQhZA2hBAAQgwAAgkgdg");
	this.shape_10.setTransform(93.7,92.6854);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#373535").ss(1,1,1).p("ALaLuI2zAAIAA3bIWzAAg");
	this.shape_11.setTransform(89.175,89.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ArZLuIAA3bIWzAAIAAXbg");
	this.shape_12.setTransform(89.175,89.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{scaleX:1,scaleY:1,x:93.7,y:92.6854}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:44.9545,y:50.2173}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:40.4386,y:120.3339}},{t:this.instance_3,p:{regX:18.6,scaleX:1,scaleY:1,x:25.6,y:41.5}},{t:this.instance_2,p:{scaleX:1,scaleY:1,x:22.7,y:120.95}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:133.7771,y:92.7453}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:108.4842,y:141.9104}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:161.1,y:92.7}},{t:this.instance,p:{regY:29.9,scaleX:1,scaleY:1,x:109,y:155.3}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:77.0179,y:110.8539}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:89.1874,y:77.5374}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:85.7012,y:55.775}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:81.0623,y:37.3123}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:106.75,y:63.5801}},{t:this.shape,p:{scaleX:1,scaleY:1,x:121.575,y:52.075}}]}).to({state:[{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:93.7263,y:92.68}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:54.7305,y:58.706}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:51.1178,y:114.7984}},{t:this.instance_3,p:{regX:18.7,scaleX:0.8,scaleY:0.8,x:39.3,y:51.75}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,x:36.9,y:115.3}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:125.7874,y:92.7279}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:105.5534,y:132.0594}},{t:this.instance_1,p:{scaleX:0.8,scaleY:0.8,x:147.65,y:92.75}},{t:this.instance,p:{regY:30,scaleX:0.8,scaleY:0.8,x:105.95,y:142.85}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:80.3808,y:107.2146}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:90.1162,y:80.5618}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:87.3273,y:63.1521}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:83.6163,y:48.3822}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:104.1661,y:69.3961}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:116.0259,y:60.1922}}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:93.7263,y:92.68}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:54.7305,y:58.706}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:51.1178,y:114.7984}},{t:this.instance_3,p:{regX:18.7,scaleX:0.8,scaleY:0.8,x:39.3,y:51.75}},{t:this.instance_2,p:{scaleX:0.8,scaleY:0.8,x:36.9,y:115.3}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:125.7874,y:92.7279}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:105.5534,y:132.0594}},{t:this.instance_1,p:{scaleX:0.8,scaleY:0.8,x:147.65,y:92.75}},{t:this.instance,p:{regY:30,scaleX:0.8,scaleY:0.8,x:105.95,y:142.85}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:80.3808,y:107.2146}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:90.1162,y:80.5618}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:87.3273,y:63.1521}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:83.6163,y:48.3822}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:104.1661,y:69.3961}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:116.0259,y:60.1922}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,185.4);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgHAPQgGgEgCgGQgCgGADgGQAEgGAGgCQAGgCAGADQAGAEACAGQACAGgDAGQgDAGgHACIgFABQgDAAgEgCg");
	this.shape.setTransform(60.3,7.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AAhhxQgWAJgRAhQgmBCASB3");
	this.shape_1.setTransform(56.9966,19.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgHAPQgGgEgCgGQgCgGADgGQAEgGAGgCQAGgCAGADQAGAEACAGQACAGgDAGQgDAGgHACIgFABQgDAAgEgCg");
	this.shape_2.setTransform(34.575,15.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AhXhNIAQAAQAUACAVALQBCAiA0Bs");
	this.shape_3.setTransform(43.425,23.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgQAgQgNgHgEgPQgFgNAHgNQAHgNAPgEQANgFANAHQANAHAFAPQAEANgHANQgHANgOAEQgGACgFAAQgIAAgIgEg");
	this.shape_4.setTransform(53.6847,32.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AAVCdQgcg7gahXQgbhXgIhBQgKhBAPgFQAOgEAdA7QAcA7AaBYQAbBWAIBBQAKBBgPAFIgCAAQgOAAgbg3g");
	this.shape_5.setTransform(60.1,53.9251);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,20.8).s().p("AhOD9QgMgSgxhDQCBjdAkjNQB9AygLBUQgNBchbCfQhKCEgeAAQgGAAgEgGg");
	this.shape_6.setTransform(87.3483,63.4281);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,14.5).s().p("AgyDDQAojLg0i3QA+gRAQBCIAbBlQARBCADArQAGB+hxABg");
	this.shape_7.setTransform(94.7425,19.5519);

	this.instance = new lib.Path_2_13();
	this.instance.setTransform(78.4,61.3,1,1,0,0,0,23,28);
	this.instance.alpha = 0.8984;

	this.instance_1 = new lib.Path_3_12();
	this.instance_1.setTransform(77.75,22.5,1,1,0,0,0,23.4,22.5);
	this.instance_1.alpha = 0.8984;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,19.9).s().p("AAuCHQimhNhBhBQg7g9BIhzQCYCSDoBmQgBBTACAVQAAAPgVAAQgmAAhsgxg");
	this.shape_8.setTransform(42.09,76.9922);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,15.4).s().p("AgkBtQgYgkgZhBIglhgQgZg/A8gWQBBCxCYCOIgFADQgkAZggAAQg0AAgphBg");
	this.shape_9.setTransform(13.0074,45.0913);

	this.instance_2 = new lib.Path_6_13();
	this.instance_2.setTransform(42.2,68.75,1,1,0,0,0,21.4,26.7);
	this.instance_2.alpha = 0.8984;

	this.instance_3 = new lib.Path_7_11();
	this.instance_3.setTransform(28.2,44.05,1,1,0,0,0,28.2,18.6);
	this.instance_3.alpha = 0.8984;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFDFC").s().p("AgoGrQinhMhAhDIgIgJIgHgJIgFgKIgEgOIgBgHIgCgMIAAgOIACgMIABgHIABgEIACgIIABgDIADgIIABgCIAMgcQhSAog+hoQgVgkgYg8QgYhCgLgZIgGgVIgBgIIAAgMIACgJIACgEIAAgCIADgFIAIgJIAIgGIAMgHIADgBQAcgMA6gFIBmgHQA8gEBtA0QBBAfBEAsIgBgPQgUgFgFgTQgFgUANgPIiYiHQgDAEgFACQgGACgGgEQgGgDgDgHQgBgHADgGQADgGAHgCQAHgCAGAEQAGADACAHIABAEQAgAEAgAYQAxAlAnBNQAEgEAGgCQAIgCAHABQgLhXAVg5QANgnAZgVIgCgEQgCgGADgGQADgGAHgDQAHgCAGAEQAGADACAHQACAGgDAGQgDAHgHACQgEABgFgCIg1DGQATAFAGATIAAAAQBQizBIgtQAcgRA7gmQAzgeAegGIAFgBIACAAIAHgBIAHAAIAKABIAGACIAHAEIAFAEIAFAEIAEAGIAFAGIAFANIAEANQAHAbASBDQARA/AEApQAKB6haAPQAMAGAPAJIASAOIACACIAHAFIAPATIABABIAEAIIAJAXIACAVIgBAMQgNBchbCgQhcCigXgkIgWggQgpg6g5hLQAAAagIADQgKADgUgiIAAB1IACAOIACAOIAAAgIgCAEIgCAEQAAABgDADIABAeQAAAPgVAAQgmAAhsgyg");
	this.shape_10.setTransform(50.7,47.7172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.instance_3},{t:this.instance_2},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.4,95.5);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_21();
	this.instance.setTransform(51.65,60.95,1,1,0,0,0,24.7,23.5);
	this.instance.alpha = 0.8984;

	this.instance_1 = new lib.Path_1_10();
	this.instance_1.setTransform(39.05,36.75,1,1,0,0,0,19.4,36.1);
	this.instance_1.alpha = 0.8984;

	this.instance_2 = new lib.Path_2_14();
	this.instance_2.setTransform(21.85,35.35,1,1,0,0,0,8.1,35.4);
	this.instance_2.alpha = 0.8984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgBAKQgFgBgCgDQgCgEABgDQABgFADgCQAEgCADABQAEABADADQACAEgBADQgBAEgEADQgDABgCAAIgBAAg");
	this.shape.setTransform(4.0226,59.1633);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AhBgdIAJgDQANgCAOADQAtAJAyA3");
	this.shape_1.setTransform(10.625,62.1056);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgFAIQgEgCAAgFQgBgDADgDQACgEAFAAQADgBAEADQADADABAEQAAADgDAEQgCADgFABIgBAAQgCAAgDgDg");
	this.shape_2.setTransform(1.0458,63.5494);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AhIAAIAIgGQALgGAPgCQAtgHBCAl");
	this.shape_3.setTransform(8.325,63.6199);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgNARQgHgFgBgKQgBgIAFgHQAGgHAJgBQAJgBAHAFQAHAGACAJQABAJgHAHQgFAHgJABIgDAAQgHAAgGgFg");
	this.shape_4.setTransform(16.95,65.3745);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("ABDBJQgkgUgsgjQgtgjgbgeQgcgeAGgIQAGgHAkAUQAjAUAsAjQAtAjAcAeQAbAegGAIQgBACgEAAQgKAAgagPg");
	this.shape_5.setTransform(27.7829,73.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAFDFC").s().p("AC5GQQiFgdhlgnQAcAaAQATQAOAUgEAGQgFAHgkgUQgkgUgsgjQg8gwgbgjQgMAFgKgIQgJgIABgMIh/gPQAAAEgCACQgCADgFABQgEAAgEgDQgDgCAAgFQgBgEADgDQACgEAFAAQAEgBAEADIABACQASgKAaABQAmACAwAZIABgEIhkgvQgCAEgCAAQgDADgEgBQgFgBgCgEQgCgEABgEQABgEADgDQAEgCAEABQAEABADAEIABACQAwgIA5A4QAGgFAIAAQAIAAAGAFQAKAHgCANQAWAKAgAVQgdhRgWhOQgkiAgGhVQgQjRACggQAHh0BMBEQAggsBMA8QBwBZBQBwQA/BYAAAaQAAAJgFAKQAdgEARAWQBEBXAtCsQAuCugsAOQgKADgTAAQgvAAhjgWg");
	this.shape_6.setTransform(38.1464,42.2245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.3,84.5);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
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
	this.b1 = new lib.Symbol23();
	this.b1.name = "b1";
	this.b1.setTransform(38.1,42.2,1,1,0,0,0,38.1,42.2);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol23(), 3);

	this.instance = new lib.Path_22();
	this.instance.setTransform(24.65,60.85,1,1,0,0,0,24.5,23.4);
	this.instance.alpha = 0.8984;

	this.instance_1 = new lib.Path_1_11();
	this.instance_1.setTransform(37.15,36.7,1,1,0,0,0,19.4,36.1);
	this.instance_1.alpha = 0.8984;

	this.instance_2 = new lib.Path_2_15();
	this.instance_2.setTransform(54.55,35.35,1,1,0,0,0,8,35.4);
	this.instance_2.alpha = 0.8984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgFAJQgEgDgBgEQAAgDACgEQACgDAFgBQADgBADACQAEADABAEQABADgCAEQgDAEgEAAIgCABQgDAAgCgCg");
	this.shape.setTransform(72.3093,59.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABCgcQgNgHgXAEQgtAJgyA3");
	this.shape_1.setTransform(65.675,62.062);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AAAAKQgFAAgCgEQgDgDABgDQAAgFADgCQAEgDADABQAFAAACADQADAEgBADQAAAFgEACQgDACgDAAIAAAAg");
	this.shape_2.setTransform(75.275,63.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("ABJAAQgKgLgYgDQgtgHhCAl");
	this.shape_3.setTransform(67.975,63.602);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgBAWQgKgBgFgHQgGgHABgIQABgKAHgGQAHgFAJABQAJABAGAHQAFAHgBAJQgBAJgHAGQgGAEgIAAIgBAAg");
	this.shape_4.setTransform(59.3255,65.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhsBVQgFgGAcgfQAcgeAsgjQAsgjAkgUQAkgUAFAHQAGAIgbAeQgcAegtAjQgsAkgjATQgbAPgKAAQgEAAgCgDg");
	this.shape_5.setTransform(48.5,73.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAFDFC").s().p("AlnGjQgsgOAuiuQAtisBEhXQASgXAcAFQgFgLAAgIQAAgaA/hZQBQhvBwhZQBMg9AgAtQBMhEAHB0QACAggQDRQgKCJhTDrQAigXATgIQgBgMAKgJQAGgFAIABQAIAAAGAFQAhghAggLQAWgHASADIABgDQADgDAEgBQAEgBAEACQAEADABAEQABAEgDAEQgCAEgFAAQgEABgDgCQgDgBgBgEIhkAwIABAEQAwgaAmgBQAagBARAKIACgCQAEgDAEABQAFAAACADQADAEgBAEQAAAFgEACQgDADgEgBQgFAAgCgEQgCgCAAgDIh/APQABAMgJAIQgKAIgMgFQgaAig9AwQgtAkgjAUQgkAUgFgIQgEgFAOgUQAPgTAdgaQhkAniGAdQhkAWgvAAQgSAAgKgDg");
	this.shape_6.setTransform(38.1536,42.2028);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.3,84.5);


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

	// Layer_1
	this.b2 = new lib.Symbol22();
	this.b2.name = "b2";
	this.b2.setTransform(49.3,48.8,1,1,0,0,0,49.3,48.8);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,98.7,97.7), null);


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

	// Layer_1
	this.b4 = new lib.Symbol20();
	this.b4.name = "b4";
	this.b4.setTransform(50.7,47.7,1,1,0,0,0,50.7,47.7);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,101.4,95.5), null);


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

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b3 = new lib.Symbol21();
	this.b3.name = "b3";
	this.b3.setTransform(93.7,92.7,1,1,0,0,0,93.7,92.7);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol21(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgIAZQgLgEgFgKQgEgKAEgJQAEgLAKgFQAKgEAJAEQALAEAFAKQAEAKgEAJQgEALgKAFQgFACgFAAQgEAAgFgCg");
	this.shape.setTransform(121.575,52.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ACVhyQglgKg4AYQhuAxhdCp");
	this.shape_1.setTransform(106.75,63.5801);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgJAZQgKgEgFgKQgEgKADgKQAEgKAKgFQAKgEAKADQALAEAEAKQAFAKgEAKQgEAKgKAFQgGADgFAAQgEAAgFgCg");
	this.shape_2.setTransform(81.0623,37.3123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("Agui4IAVAPQAYAWAQAiQA2BsgnC+");
	this.shape_3.setTransform(85.7012,55.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgTA2QgWgIgKgWQgKgVAIgWQAIgWAWgKQAVgKAWAIQAWAIAKAWQALAVgJAWQgIAWgWAKQgMAGgMAAQgJAAgKgEg");
	this.shape_4.setTransform(89.1874,77.5374);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("Ah5FNQgWgIAThnQAUhoAziJQAyiKAzhcQAzhcAXAIQAWAJgUBnQgTBogzCJQgyCKgzBcQgvBUgXAAIgEgBg");
	this.shape_5.setTransform(77.0179,110.8539);

	this.instance = new lib.Path_24();
	this.instance.setTransform(109,155.3,1,1,0,0,0,33.7,29.9);
	this.instance.alpha = 0.75;

	this.instance_1 = new lib.Path_1_13();
	this.instance_1.setTransform(161.1,92.7,1,1,0,0,0,26.3,35.1);
	this.instance_1.alpha = 0.75;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,39.2).s().p("AjzGVQhWhGgMksQgFhyAJhtQAJhoAPgoIAmhmICCAdQCUAmBiA1QA0AdA3A2QA9A8AkBAQBbCmh6BmQjWC0hAAnQhZA3hCAAQgwAAgkgeg");
	this.shape_6.setTransform(108.4842,141.9104);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,45.3).s().p("AAbFQQizhMjShjIithUIAchMICqh5QDFiBCJgjQC0gvCUgOQDWgWgDBJQgCAxgnBxQgtCEg+BrQiLD0iTAAQglAAgmgPg");
	this.shape_7.setTransform(133.7771,92.7453);

	this.instance_2 = new lib.Path_4_12();
	this.instance_2.setTransform(22.7,120.95,1,1,0,0,0,22.7,38.3);
	this.instance_2.alpha = 0.75;

	this.instance_3 = new lib.Path_5_11();
	this.instance_3.setTransform(25.6,41.5,1,1,0,0,0,18.6,41.5);
	this.instance_3.alpha = 0.75;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,39.7).s().p("AivGFQhtgEg1itQgXhJgpkTQgXidCzhAQBFgZBVgFQBNgEA5AOQBtAZCJBGQBFAjAvAdIgnBmQgPAog+BSQhCBYhQBTQjLDUhuAAIgFAAg");
	this.shape_8.setTransform(40.4386,120.3339);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#2A57A5","#2B55A2","#304E9B","#364591","#3A3A85"],[0,0.314,0.569,0.804,1],0,0,0,0,0,44.5).s().p("ACmHCQjdhBi6g/Qi/hBBIlYQAah7A1iAQAuhuAfgnQAug4CTCeQBiBsBqCcQBQB1A9DiQAfByAPBaIgcBMQhKgThwghg");
	this.shape_9.setTransform(44.9545,50.2173);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAFDFC").s().p("AhfOCIgQgRIgJgMIgTgjIAAgBQghhIgNiBQgMhtADiAQgeA9gZAfQgZAhgOgFQgPgFAFg3QAFg1AXhVQhTBqhbBWQhrBlhQAlIgBAAIgbALIgZAGIgBAAIgKABIgMAAQhtgEg2itQgXhIgokUIgDgsIACgQIAAgCIADgQIAFgSIAIgSIAIgMIACgEIASgWIAOgNIAbgVIAegRIAwgUIADgBIAUgGIABgBIAdgHIgKgDQjAhBBJlaQAZh6A2iAQAuhvAfgmIAHgHIABgBIADgCIACAAIACgCIAHgCIACAAIACAAIAEgBIABAAIADABIACAAIAEAAIABAAIAGACIAEABIAGACIABABIAEACIACAAIAMAGIAAAAIAGAEIABAAIAFAEIABAAQBDAtBlB8QBLBaBCBiQA9BbAzCeQAkBtAaB7QARgeANgTQgJgMgDgOQgCgPAEgPQAGgPAMgKQAMgKAPgDIhCk+QgHABgIgCQgLgEgEgLQgEgKADgKQAEgLAKgEQAKgFAKAEQALAEAFAKQAFAKgEAKIgEAHQAnAjARA/QAcBegYCJQALAAAJADQALAEAIAIQBFh5BRg2QA3glA0gCIACgHQADgLAKgFQALgEAKAEQALAEAEAKQAFAKgEAKQgEALgKAFQgKAEgLgEQgHgCgFgGIkBDKQAUAZgLAeQgFAPgLAKQgLAKgQADQAAAQgGAeQBkhJBhg4QCJhQBngaQFGhUCGAWIAIgBIAAgBIAHABIABAAIAGABIACAAIASAFIABABIAFACIABAAIAJAFIAJAGIADADIABACIACACIADAFIABADIABACIABACIABAFIAAAHQgCAygnBxQgtCDg+BsQiuEyi7hOIgJgEQA+BWAJBMIAAAAIACALIAAAVIgCAKIgBACIgBAIIgDAKIAAACIgGATIgCACIgDAKIgGAKIgLASIgCACIgMAPIgVAUQjWCzhBAoQhZA2hBAAQgwAAgkgdg");
	this.shape_10.setTransform(93.7,92.6854);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b3}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_3},{t:this.instance_2},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,185.4);


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

	// Layer_1
	this.b5 = new lib.Symbol19();
	this.b5.name = "b5";
	this.b5.setTransform(75,74.2,1,1,0,0,0,75,74.2);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.timeline.addTween(cjs.Tween.get(this.b5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,0,0), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_17();
	this.instance.setTransform(70,122.1,1,1,0,0,0,25.8,12.6);

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.setTransform(70.05,101.95,1,1,0,0,0,25.9,32.6);

	this.instance_2 = new lib.Path_2_8();
	this.instance_2.setTransform(100.25,79.5,1,1,0,0,0,39.4,20.4);

	this.instance_3 = new lib.Path_3_7();
	this.instance_3.setTransform(14.4,81.6,1,1,0,0,0,14.4,26.6);

	this.instance_4 = new lib.Path_4_8();
	this.instance_4.setTransform(34,22.15,1,1,0,0,0,17.5,22.3);

	this.instance_5 = new lib.Path_5_7();
	this.instance_5.setTransform(31.7,80,1,1,0,0,0,31.7,28.3);

	this.instance_6 = new lib.Path_6_8();
	this.instance_6.setTransform(40.9,36.55,1,1,0,0,0,24.4,36.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgIAPQgHgEgBgHQgCgGAEgGQADgHAIgBQAGgCAGAEQAGAEACAHQABAGgDAGQgEAHgHABIgEABQgEAAgEgDg");
	this.shape.setTransform(92.45,48.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABugzQgWgLgnAIQhMAQhSBg");
	this.shape_1.setTransform(81.425,54.1066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgIAPQgHgEgBgHQgCgGAEgGQAEgHAHgBQAGgCAGAEQAHADABAIQACAGgEAGQgDAHgIABIgEABQgEAAgEgDg");
	this.shape_2.setTransform(68.425,34.1358);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AgRh6IALAMQAMARAGAYQAUBMgwB0");
	this.shape_3.setTransform(70.2502,46.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgTAgQgNgIgDgPQgEgOAIgOQAIgNAPgDQAPgEANAIQANAIAEAPQAEAPgJANQgIANgPAEIgJABQgKAAgJgGg");
	this.shape_4.setTransform(68.3973,60.9473);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("Ah5DFQgNgIAbhAQAag/AyhRQAxhSAtg0QAtg0ANAIQAOAJgaA/QgaBAgzBQQgyBSgsA0QgnAugPAAIgFgCg");
	this.shape_5.setTransform(56.25,80.7059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.7,134.7);


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
	this.instance = new lib.Path_18();
	this.instance.setTransform(49.55,42.05,1,1,0,0,0,12.3,15.6);

	this.instance_1 = new lib.Path_1_7();
	this.instance_1.setTransform(61.85,15.25,1,1,0,0,0,5.7,12.8);

	this.instance_2 = new lib.Path_2_9();
	this.instance_2.setTransform(47.75,39,1,1,0,0,0,14,18.7);

	this.instance_3 = new lib.Path_3_8();
	this.instance_3.setTransform(50.65,15.25,1,1,0,0,0,16.9,12.8);

	this.instance_4 = new lib.Path_4_9();
	this.instance_4.setTransform(17.9,42.05,1,1,0,0,0,12.3,15.6);

	this.instance_5 = new lib.Path_5_8();
	this.instance_5.setTransform(5.7,15.25,1,1,0,0,0,5.7,12.8);

	this.instance_6 = new lib.Path_6_9();
	this.instance_6.setTransform(19.7,39,1,1,0,0,0,14.1,18.7);

	this.instance_7 = new lib.Path_7_7();
	this.instance_7.setTransform(16.9,15.25,1,1,0,0,0,16.9,12.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgEADAAQAFABADADQAEADgBAEQAAAFgDADQgDADgFABQgEgBgDgDg");
	this.shape.setTransform(43.8781,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AArhBQgQABgTARQgkAigOBP");
	this.shape_1.setTransform(39.625,8.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgHAIQgEgDAAgFQABgEADgDQADgEAFAAQAEABAEAEQACACAAAFQAAAEgDAEQgDACgFAAQgEAAgDgDg");
	this.shape_2.setTransform(25.85,1.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AgnhDIAKADQAMAGAMALQAjAjAKBQ");
	this.shape_3.setTransform(29.875,7.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AAAAYQgJAAgHgHQgHgHAAgKQAAgJAHgIQAIgGAJAAQAKAAAHAHQAHAHgBAJQAAALgHAGQgHAHgJAAIgBAAg");
	this.shape_4.setTransform(34.5267,15.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AgSBpQgGgsABg9QABg9AIgrQAIgrAJAAQAKAAAGAsQAGAsgBA7QgBA+gIAsQgIArgJAAQgKgBgGgrg");
	this.shape_5.setTransform(34.2569,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,57.7);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgFAMQgGgDgBgFQgBgEACgGQADgFAFgBQAFgCAEADQAGADABAGQACAEgDAFQgDAEgFACIgEABQgCAAgDgCg");
	this.shape.setTransform(56.85,11.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AAchaQgSAHgPAaQgeA0AMBg");
	this.shape_1.setTransform(54.0806,20.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgGAMQgFgCgBgGQgCgEADgFQADgGAFgBQAFgCAEADQAFADACAGQACAEgDAEQgDAFgFACIgEABQgCAAgEgCg");
	this.shape_2.setTransform(36.0119,17.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AhFg/IANAAQAQACARAJQA1AcAoBY");
	this.shape_3.setTransform(43.025,23.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgNAZQgKgGgEgLQgDgLAGgKQAGgLALgDQALgDAKAFQALAGADAMQADAKgFALQgGAKgMAEIgIABQgGAAgHgEg");
	this.shape_4.setTransform(51.1885,31.4115);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AAPB/QgWgwgUhHQgUhGgGg1QgGg0ALgDQAMgEAWAwQAVAwAVBHQAUBHAGA0QAGA0gLAEIgCAAQgLAAgVgtg");
	this.shape_5.setTransform(56.075,48.55);

	this.instance = new lib.Path_2_1();
	this.instance.setTransform(81.85,53.7,1,1,0,0,0,12.1,16.3);

	this.instance_1 = new lib.Path_3_0();
	this.instance_1.setTransform(74.8,53.65,1,1,0,0,0,19.3,16.4);

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(74.25,20.9,1,1,0,0,0,19.2,20.9);

	this.instance_3 = new lib.Path_5_0();
	this.instance_3.setTransform(37.15,66.3,1,1,0,0,0,15.7,13.9);

	this.instance_4 = new lib.Path_6_1();
	this.instance_4.setTransform(13.95,39.7,1,1,0,0,0,13.9,15.3);

	this.instance_5 = new lib.Path_7_0();
	this.instance_5.setTransform(38.2,60.65,1,1,0,0,0,16.8,19.4);

	this.instance_6 = new lib.Path_8_0();
	this.instance_6.setTransform(26.2,39.7,1,1,0,0,0,26.2,15.3);

	this.instance_7 = new lib.Path_10();
	this.instance_7.setTransform(86.3,18.15,1,1,0,0,0,7,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,80.2);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgGAMQgFgDgBgFQgCgFADgFQADgFAFgBQAFgCAFADQAFADABAFQABAFgCAFQgDAFgFABIgDABQgDAAgEgCg");
	this.shape.setTransform(64.7643,29.9143);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABTgrQgSgIgdAIQg6APg8BM");
	this.shape_1.setTransform(56.45,34.2685);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgGAMQgFgDgBgGQgBgEACgFQADgFAFgBQAFgCAFADQAFADABAFQACAFgDAFQgDAFgFABIgEABQgCAAgEgCg");
	this.shape_2.setTransform(45.8969,19.2612);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AgOheIAJAJQAJANAFASQASA6giBb");
	this.shape_3.setTransform(47.4195,28.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgNAZQgLgGgDgLQgDgLAGgKQAFgLAMgDQALgDAKAGQALAGADALQADALgGAKQgGALgLADIgIABQgGAAgHgEg");
	this.shape_4.setTransform(46.6355,39.8855);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhXCbQgKgFASgyQATgyAkg/QAjhAAhgqQAhgpALAGQAKAGgSAxQgSAyglA/QgjBAghAqQgdAkgMAAIgDgBg");
	this.shape_5.setTransform(37.8365,55.3808);

	this.instance = new lib.Path_2_0();
	this.instance.setTransform(51.9,77.5,1,1,0,0,0,16.2,12.1);

	this.instance_1 = new lib.Path_3();
	this.instance_1.setTransform(52,69.35,1,1,0,0,0,16.2,20.2);

	this.instance_2 = new lib.Path_4_0();
	this.instance_2.setTransform(69.8,56.5,1,1,0,0,0,27.3,14);

	this.instance_3 = new lib.Path_5();
	this.instance_3.setTransform(10.25,54.6,1,1,0,0,0,10,16.4);

	this.instance_4 = new lib.Path_6_0();
	this.instance_4.setTransform(15.25,18.75,1,1,0,0,0,9.6,18.7);

	this.instance_5 = new lib.Path_7();
	this.instance_5.setTransform(20.1,54.55,1,1,0,0,0,19.9,16.4);

	this.instance_6 = new lib.Path_8();
	this.instance_6.setTransform(23.2,24.4,1,1,0,0,0,17.6,24.4);

	this.instance_7 = new lib.Path_0();
	this.instance_7.setTransform(80.75,56.55,1,1,0,0,0,16.4,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.1,89.6);


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

	// Layer 1
	this.instance_1 = new lib.Path_14();
	this.instance_1.setTransform(91.05,68.8,1,1,0,0,0,13.8,21.7);

	this.instance_2 = new lib.Path_1_3();
	this.instance_2.setTransform(92.95,23.7,1,1,0,0,0,9.8,23.7);

	this.instance_3 = new lib.Path_2_5();
	this.instance_3.setTransform(81.95,68.15,1,1,0,0,0,22.9,22.3);

	this.instance_4 = new lib.Path_3_4();
	this.instance_4.setTransform(80.35,27.4,1,1,0,0,0,22.3,27.4);

	this.instance_5 = new lib.Path_4_5();
	this.instance_5.setTransform(41,84.8,1,1,0,0,0,18.8,17.9);

	this.instance_6 = new lib.Path_5_4();
	this.instance_6.setTransform(13.7,47.45,1,1,0,0,0,13.7,20.6);

	this.instance_7 = new lib.Path_6_5();
	this.instance_7.setTransform(42,78.15,1,1,0,0,0,19.8,24.4);

	this.instance_8 = new lib.Path_7_4();
	this.instance_8.setTransform(29.7,47.45,1,1,0,0,0,29.7,20.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgGAOQgGgDgCgGQgCgGADgFQADgGAGgCQAGgCAFADQAFADADAGQACAFgEAGQgCAGgHACIgEABQgDAAgDgCg");
	this.shape.setTransform(61.3,18.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AAdhnQgFACgHAGQgOAMgKATQghA8ARBs");
	this.shape_1.setTransform(58.361,29.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgGAOQgGgDgCgGQgCgFADgGQADgFAGgCQAFgCAGACQAGADACAHQACAFgDAFQgDAGgHACIgEAAQgDAAgDgBg");
	this.shape_2.setTransform(37.925,26.1456);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AhQhFIAOAAQATABATAKQA9AeAxBi");
	this.shape_3.setTransform(46.05,33.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgOAdQgMgGgEgNQgEgMAGgMQAGgMANgEQAMgEAMAGQAMAGAEANQAEAMgGAMQgGAMgNAEQgFACgFAAQgHAAgHgEg");
	this.shape_4.setTransform(55.525,41.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AAVCPQgag1gZhQQgZhOgJg8QgJg7ANgEQANgFAbA2QAaA1AaBQQAZBPAIA7QAJA7gNAFIgCAAQgNAAgZgyg");
	this.shape_5.setTransform(61.5839,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.8,102.6);


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

	// Layer_1
	this.b6 = new lib.Symbol18();
	this.b6.name = "b6";
	this.b6.setTransform(38.1,42.3,1,1,0,0,0,38.1,42.3);
	new cjs.ButtonHelper(this.b6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b6).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,76.3,84.5), null);


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
	this.instance = new lib.Path_23();
	this.instance.setTransform(23.65,74.95,1,1,0,0,0,23.5,24.7);

	this.instance_1 = new lib.Path_1_12();
	this.instance_1.setTransform(25.9,37.4,1,1,0,0,0,22.2,33.8);

	this.instance_2 = new lib.Path_2_16();
	this.instance_2.setTransform(35.6,34.25,1,1,0,0,0,12.6,34.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgBAKQgEAAgDgEQgCgEAAgDQADgKAJACQAEABACADQADAEgBADQAAAEgEADQgDABgDAAIgBAAg");
	this.shape.setTransform(63.3083,49.5295);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("AAxg1QgPgCgUANQgmAagYBH");
	this.shape_1.setTransform(58.4,54.9922);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgEAJQgEgCgBgEQgBgDACgEQACgEAEgBQADgBAEACQAEACABAEQABAEgCADQgCAEgEABIgDABIgEgCg");
	this.shape_2.setTransform(67.7345,52.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("ABAghQgNgGgXAGQgtAMguA6");
	this.shape_3.setTransform(61.35,55.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgKAUQgIgFgDgJQgCgIAEgIQAFgIAJgDQAIgCAIAEQAIAFADAJQACAIgEAIQgFAIgJADIgGABQgFAAgFgDg");
	this.shape_4.setTransform(53.775,60.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhCB5QgIgFAOgmQAOgmAbgyQAbgyAZggQAaghAIAFQAIAFgOAmQgNAngcAxQgbAygZAgQgXAdgJAAIgCgBg");
	this.shape_5.setTransform(47.0867,72.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.8,99.7);


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
	this.instance = new lib.Path_20();
	this.instance.setTransform(33.1,58.55,1,1,0,0,0,16.1,8.8);

	this.instance_1 = new lib.Path_1_9();
	this.instance_1.setTransform(58.1,43.5,1,1,0,0,0,10.8,10.1);

	this.instance_2 = new lib.Path_2_11();
	this.instance_2.setTransform(33.1,50.5,1,1,0,0,0,16.1,16.9);

	this.instance_3 = new lib.Path_3_10();
	this.instance_3.setTransform(49.7,40.85,1,1,0,0,0,19.4,12.8);

	this.instance_4 = new lib.Path_4_11();
	this.instance_4.setTransform(6.55,42.1,1,1,0,0,0,6.5,17.6);

	this.instance_5 = new lib.Path_5_10();
	this.instance_5.setTransform(10.8,12.75,1,1,0,0,0,6.8,12.8);

	this.instance_6 = new lib.Path_6_11();
	this.instance_6.setTransform(15.75,42.05,1,1,0,0,0,15.7,17.8);

	this.instance_7 = new lib.Path_7_9();
	this.instance_7.setTransform(18.3,17.65,1,1,0,0,0,14.3,17.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C2F36").s().p("AgFAJQgFgCAAgFQgBgEACgEQADgDAFgBQAEgBADADQAEACABAFQABAEgDADQgCAEgEABIgDAAQgDAAgCgCg");
	this.shape.setTransform(51.3,21.8601);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2C2F36").ss(1,1,1).p("ABIgcQgOgIgZAEQgxAIg3A6");
	this.shape_1.setTransform(44.075,24.7804);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2F36").s().p("AgFAJQgEgCgBgFQgBgDADgEQACgEAFgBQADgBAEADQAEACABAFQABADgDAEQgCAEgFABIgBAAQgDAAgDgCg");
	this.shape_2.setTransform(36.425,11.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#2C2F36").ss(1,1,1).p("AgFhOIAGAIQAHALADAQQALAxgjBJ");
	this.shape_3.setTransform(37.0698,19.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C2F36").s().p("AgMAUQgJgFgBgKQgDgKAGgHQAFgJALgBQAIgDAJAGQAIAFABALQACAJgFAIQgFAIgKABIgFABQgHAAgFgEg");
	this.shape_4.setTransform(35.55,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C2F36").s().p("AhTB7QgIgGATgoQASgoAjgxQAigzAeggQAeggAJAGQAIAFgTAoQgSAogjAyQgiAzgeAfQgaAbgKAAIgDAAg");
	this.shape_5.setTransform(27.1856,41.0495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,67.4);


// stage content:
(lib.blue5 = function(mode,startPosition,loop,reversed) {
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
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b1_mc.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.ans_mc.play();
		this.correct1.play();
		var my2=createjs.Sound.createInstance("yes");
		    this.my2;
		     my2.play();
		count= count+1;
		this.b1_mc.play();
		this.total=count;
		this.b1_mc.mouseEnabled=false;
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
		
		this.b2_mc.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			this.ans_mc.play();
		this.correct2.play();
		var my3=createjs.Sound.createInstance("yes");
		    this.my3;
		     my3.play();
		count= count+1;
		this.b2_mc.play();
		this.total=count;
		this.b2_mc.mouseEnabled=false;
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
		
		this.b3_mc.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			this.ans_mc.play();
		this.correct3.play();
		var my4=createjs.Sound.createInstance("yes");
		    this.my4;
		     my4.play();
		count= count+1;
		this.b3_mc.play();
		this.total=count;
		this.b3_mc.mouseEnabled=false;
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
		
		this.b4_mc.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.ans_mc.play();
		this.correct4.play();
		var my5=createjs.Sound.createInstance("yes");
		    this.my5;
		     my5.play();
		count= count+1;
		this.b4_mc.play();
		this.total=count;
		this.b4_mc.mouseEnabled=false;
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
		
		this.b6_mc.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			this.ans_mc.play();
		this.correct5.play();
		var my6=createjs.Sound.createInstance("yes");
		    this.my6;
		     my6.play();
		count= count+1;
		this.b6_mc.play();
		this.total=count;
		this.b6_mc.mouseEnabled=false;
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
		
		this.b9.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			this.wrong1.play();
			var my7=createjs.Sound.createInstance("wro");
		this.my7;
		my7.play();
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
		
		this.b11.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			this.wrong3.play();
			var my8=createjs.Sound.createInstance("wro");
		this.my8;
		my8.play();
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
		
		this.b10.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.wrong2.play();
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
		
		this.b12.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.wrong4.play();
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
		
		this.b13.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			this.wrong5.play();
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
		
		this.b14.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			this.wrong6.play();
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
		
		this.b15.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
			this.wrong7.play();
			var my13=createjs.Sound.createInstance("wro");
		this.my13;
		my13.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		this.b16.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13() {
			
			//this.wrong3.play();
			var my14=createjs.Sound.createInstance("intro");
		this.my14;
		my14.play();
			
			
		
		}
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		/* var count:Number = new Number();
		count = 0;
		fscommand("fullscreen", "true");*/
		
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
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

	this.instance = new lib.BRIGHTEDGELOGO();
	this.instance.setTransform(1424,56,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_6
	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(-330.1,69.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_4
	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgVATQgKgJAAgKQAAgJAKgIQAJgJAMAAQAOAAAJAIQAJAIAAAKQAAALgJAIQgKAIgNAAQgMAAgJgIg");
	this.shape_306.setTransform(1137.05,127.325);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag3BmQgdgKAAgWQAAgTAXgBQAJAAARAGQARAGAJAAQAnAAABgQQAAgKgcgNQgngRgLgHQgcgTAAgcQAAgnApgOQAZgIAxAAQATAAAKAFQAMAHAAATQABAigUABQgTgBgEgQQgHgBgJAAQguAAAAANQAAAHAcAOQAmARAOAKQAcAUAAAaQAAAhgfARQgZAOgkAAQgaAAgWgIg");
	this.shape_307.setTransform(1118.5,118.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFAQAAQAbAAARgLQARgKAKAAQAUABAAATQAAAXghAOQgbAMgfAAQgtgBgegWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_308.setTransform(1097.6,118.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgYCOQgIgIABgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAIgHALAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_309.setTransform(1081.6,113.625);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_310.setTransform(1069.85,112.7);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AglCkQgIgGAAgLIABgFQAEgcAAgZIAAhgIgNABIgLABQgMAAgIgGQgHgIAAgLQAAgSATgGQAIgCAagBIACgXQAGgrASgVQAWgbAvAAQAjAAAAAaQAAAZghAAQgXAAgLARQgIAMgDAbIgBAFIAmgDQAkAAAAAaQAAAZgmgBIgmACIAAA0IABA0QAAAkgFAVQgEAVgVAAQgLAAgIgIg");
	this.shape_311.setTransform(1054.125,113.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgSQAAgLAGgIQAHgHAMAAQAWAAAEAXQAhgaAqAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgGgHg");
	this.shape_312.setTransform(1035,118.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_313.setTransform(1013.6,118.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgIAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_314.setTransform(993.35,114.925);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQAAgXgDhNIgkgDQgZgDAAgWQAAgLAHgIQAIgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQADBOAAAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_315.setTransform(974.5,114.925);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_316.setTransform(954.4553,118.375);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("Ag6CUQgGAIgLAAQgKAAgIgHQgIgHABgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAPAAQAUAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgZgKgAgWgDQgNAFgQALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgOAGg");
	this.shape_317.setTransform(932.35,112.975);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_318.setTransform(891.125,112.825);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAPgKQgNgIgVAAQgRAAgNANg");
	this.shape_319.setTransform(868.25,118.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AhMBmQgHgHAAgLIAAh/IAAgSIABgSQAAgLAHgIQAGgHAMAAQAWAAAEAXQAigaApAAQAoAAAAA0IAAAMQgCAegZAAQgZAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgGgHg");
	this.shape_320.setTransform(848.15,118.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_321.setTransform(827.6053,118.375);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_322.setTransform(806.5957,118.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAIgHQAIgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_323.setTransform(790.65,112.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_324.setTransform(774.5957,118.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_325.setTransform(753.675,118.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAJALAOAFQANAFARAAQAaAAASgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgHAYIAsgTQAYgMAQgKQgNgIgVAAQgRAAgNANg");
	this.shape_326.setTransform(715,118.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_327.setTransform(693.5553,118.375);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_328.setTransform(677.65,112.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("Ag5CUQgIAIgKAAQgKAAgIgHQgHgHgBgLIABgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIAAAIIgBAIIAABLQAPgIANgEQANgEALAAQAuAAAdAhQAaAeAAAtQAAAtgfAgQgfAggtAAQgbAAgZgKgAgVgDQgOAFgQALIAABTQAaAMAUAAQAXAAAQgRQAQgRAAgZQAAgZgMgRQgOgQgXAAQgJAAgNAGg");
	this.shape_329.setTransform(660.5,112.975);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAKAAQAUABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_330.setTransform(619.85,118.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAuCPQgFgQgEgcQgEgcAAgSIABgPIABgOIgBgRQgCgKgIAAQgWAAgQATQgKAKgPAcQAABHgHAOQgHAQgRAAQgLAAgIgHQgJgIAAgKIACgLQACgEAAgxQAAgnABhaIAAgHIABgeIgCgSIgCgSQABgLAIgHQAIgHALAAQAUAAAGAUQAEAMAAAYIgCAoIgBAmQAPgPAQgGQAQgHASAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAAMgIAGQgJAIgLgBQgTABgGgUg");
	this.shape_331.setTransform(597.8,112.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_332.setTransform(576.5,114.925);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgJAAgKACQADBOAAAYIAAAKIABALQAAAtgcAAQgKAAgIgHg");
	this.shape_333.setTransform(540.3,114.925);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_334.setTransform(520.575,117.975);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_335.setTransform(499.3053,118.375);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_336.setTransform(478.2958,118.4);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AhXB3QgcgeAAgqQAAhBA4hEQAxg6AyAAIAQAAIALADQAJgJAMAAQAUAAAFAXQAEAQAAAWQgBAKgFAIQgIALgOAAQgRgBgJgSQgEgJgDgCQgEgBgMAAQgYAAggAmQgtA1AAAvQAAAVAOAPQAPAPATAAQATAAATgKQAIgEAXgPQAPgKAHAAQAMAAAJAJQAHAHAAALQAAALgKAJQg2Atg3AAQgrAAgfggg");
	this.shape_337.setTransform(455.95,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306}]}).wait(1));

	// Layer_2
	this.total = new cjs.Text("", "bold 72px 'Times New Roman'");
	this.total.name = "total";
	this.total.lineHeight = 82;
	this.total.lineWidth = 262;
	this.total.parent = this;
	this.total.setTransform(201.15,393.75);

	this.b16 = new lib.Symbol6();
	this.b16.name = "b16";
	this.b16.setTransform(1220.1,94.05,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b16, 0, 1, 1);

	this.correct1 = new lib.Symbol19();
	this.correct1.name = "correct1";
	this.correct1.setTransform(845.65,991.05,1,1,0,0,0,18,74);

	this.wrong1 = new lib.Symbol19();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(989.95,883.05,1,1,0,0,0,18,74);

	this.correct2 = new lib.Symbol19();
	this.correct2.name = "correct2";
	this.correct2.setTransform(1264.55,954.85,1,1,0,0,0,18,74);

	this.correct3 = new lib.Symbol19();
	this.correct3.name = "correct3";
	this.correct3.setTransform(1083.55,751.1,1,1,0,0,0,18,74);

	this.wrong5 = new lib.Symbol19();
	this.wrong5.name = "wrong5";
	this.wrong5.setTransform(1166,459.85,1,1,0,0,0,18,74);

	this.wrong7 = new lib.Symbol19();
	this.wrong7.name = "wrong7";
	this.wrong7.setTransform(1243.7,302.85,1,1,0,0,0,18,74);

	this.correct5 = new lib.Symbol19();
	this.correct5.name = "correct5";
	this.correct5.setTransform(1298.15,415.8,1,1,0,0,0,18,74);

	this.wrong6 = new lib.Symbol19();
	this.wrong6.name = "wrong6";
	this.wrong6.setTransform(1393.7,395.05,1,1,0,0,0,18,74);

	this.wrong4 = new lib.Symbol19();
	this.wrong4.name = "wrong4";
	this.wrong4.setTransform(1393.7,496.15,1,1,0,0,0,18,74);

	this.correct4 = new lib.Symbol19();
	this.correct4.name = "correct4";
	this.correct4.setTransform(1430.25,713.75,1,1,0,0,0,18,74);

	this.wrong2 = new lib.Symbol19();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1340.3,815.05,1,1,0,0,0,18,74);

	this.wrong3 = new lib.Symbol19();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(1467.1,883.05,1,1,0,0,0,18,74);

	this.instance_2 = new lib.Symbol19();
	this.instance_2.setTransform(-222.1,122,1,1,0,0,0,18,74);

	this.instance_3 = new lib.Symbol19();
	this.instance_3.setTransform(-222.1,122,1,1,0,0,0,18,74);

	this.ans_mc = new lib.Symbol25();
	this.ans_mc.name = "ans_mc";
	this.ans_mc.setTransform(369.95,500.35,1,1,0,0,0,21.9,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_mc},{t:this.instance_3},{t:this.instance_2},{t:this.wrong3},{t:this.wrong2},{t:this.correct4},{t:this.wrong4},{t:this.wrong6},{t:this.correct5},{t:this.wrong7},{t:this.wrong5},{t:this.correct3},{t:this.correct2},{t:this.wrong1},{t:this.correct1},{t:this.b16},{t:this.total}]}).wait(1));

	// Layer_1
	this.b1_mc = new lib.Symbol15();
	this.b1_mc.name = "b1_mc";
	this.b1_mc.setTransform(845.6,922.3,1.44,1.44,0,0,0,38.1,42.2);

	this.b2_mc = new lib.Symbol14();
	this.b2_mc.name = "b2_mc";
	this.b2_mc.setTransform(1263.05,902.85,1.2,1.2,0,0,0,49.3,48.8);

	this.b4_mc = new lib.Symbol13();
	this.b4_mc.name = "b4_mc";
	this.b4_mc.setTransform(1426,632.55,1.2,1.2,0,0,0,50.6,47.7);

	this.b3_mc = new lib.Symbol12();
	this.b3_mc.name = "b3_mc";
	this.b3_mc.setTransform(1125.8,680.5,1,1,0,0,0,93.7,92.7);

	this.b5_mc = new lib.Symbol11();
	this.b5_mc.name = "b5_mc";
	this.b5_mc.setTransform(1269.45,551.45,1,1,0,0,0,75,74.2);

	this.b9 = new lib.Symbol10();
	this.b9.name = "b9";
	this.b9.setTransform(1013.75,813.5,1,1,0,0,0,69.9,67.3);
	new cjs.ButtonHelper(this.b9, 0, 1, 1);

	this.b11 = new lib.Symbol9();
	this.b11.name = "b11";
	this.b11.setTransform(1438.4,812.5,1.44,1.44,0,0,0,33.7,28.8);
	new cjs.ButtonHelper(this.b11, 0, 1, 1);

	this.b10 = new lib.Symbol8();
	this.b10.name = "b10";
	this.b10.setTransform(1299.8,725.2,1.2,1.2,0,0,0,47,40.1);
	new cjs.ButtonHelper(this.b10, 0, 1, 1);

	this.b12 = new lib.Symbol7();
	this.b12.name = "b12";
	this.b12.setTransform(1413.8,430.75,1.2,1.2,0,0,0,48.6,44.9);
	new cjs.ButtonHelper(this.b12, 0, 1, 1);

	this.b14 = new lib.Symbol6_1();
	this.b14.name = "b14";
	this.b14.setTransform(1380.2,309.8,1,1,0,0,0,52.4,51.3);
	new cjs.ButtonHelper(this.b14, 0, 1, 1);

	this.b6_mc = new lib.Symbol5();
	this.b6_mc.name = "b6_mc";
	this.b6_mc.setTransform(1284.65,349.55,1,1,0,0,0,38.1,42.3);

	this.b13 = new lib.Symbol4();
	this.b13.name = "b13";
	this.b13.setTransform(1168.9,401.55,1.2,1.2,0,0,0,34.4,49.8);
	new cjs.ButtonHelper(this.b13, 0, 1, 1);

	this.b15 = new lib.Symbol3();
	this.b15.name = "b15";
	this.b15.setTransform(1256.15,224.95,1,1,0,0,0,34.5,33.6);
	new cjs.ButtonHelper(this.b15, 0, 1, 1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FAFDFC").s().p("AlMFEQgYiwAchrQAIgcAcgHQgJgHgDgHQgKgYAYhqQAfiGBFh+QAwhVAuAdQArhcA0BoQAOAeBBDGQAsCEAOD3QAVggARgRQgGgLAGgMQAEgGAHgDQAHgDAIACQASgrAZgXQARgPASgDIAAgDQABgEAEgCQADgDAFABQAEABACADQADAEgBAEQAAADgEADQgEACgEgBQgDAAgCgCIhKBSIADADQAigqAjgQQAXgKAUACIABgDQACgEAEgBQAEgBAEACQAEACABAEQABAFgCADQgCAEgDABQgFABgEgCIgEgEIhvA+QAGALgGALQgHAMgMAAQgJAognBFQgbAygaAgQgZAhgIgFQgGgDAGgZQAHgXAQgjQhOBLhvBPQh0BRgnADIgCAAQgsAAgZiug");
	this.shape_338.setTransform(1199.4004,408.2202);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FAFDFC").s().p("AiuFBIACgFIABgCIADgLIAHgaIAXhYQgNALgGgDQgGgFAKgYIhNA7IgBACIgOAKIgBACIgFADIgCACIgFAEIgBABIgJAIQgWATgeh5Qgeh4AHg8IACgLIAFgLIAIgMIAGgGIABAAQACgDADgCIABgBIAMgGIACgBIAFgCIACgBIAHgDIAUgFQg4gaAdhMQAEgKA9hvIADgFIAEgFIAJgJIAEgDIACgBIACgBIACgBIACAAIAEgBIAGAAIAIACIACABIADABIAEACIACABIACABIABAAQARALAaAbIAtAxQAcAeASBPQALAuAGA4IAHgHQgGgNAIgLQAIgLANABIAGiIIgFgCQgEgDgBgEQgBgFADgEQACgEAFgBQAEAAAEACQAEADABAEQABAFgDAEIgCACQAMATABAbQABAogYA1IAIAEQAEACACAFQApgqAngOQAagJAVAFIABgDQADgEAFgBQAEAAAEACQAEADABAEQABAFgDAEQgCAEgFAAQgFABgEgCIgDgFIh+A3QAGAMgIALIAAABQCAgiA1ATIBBAXQAlANAQAMIABABIACACIABABIACACIADADIADAEIAAABIACACIAAACIABACIABAEIAAACIAAAHIAAABIgBAFIgBADIgBACIgBADIgBACIgDAFIgEAFQhNBlgIAHQg7A4gugoIADAUIABARIgBAGIAAACIgBAGIAAABIgCAHIAAABIgCAFIgDAGIgGAJIgFAFIgEADIgIAGQg2Agh5AUQg0AIgcAAQgnAAAFgQg");
	this.shape_339.setTransform(1256.175,240.9961);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FAFDFC").s().p("AhaE3IAAgHIABgEIAAgIIAAgDIAAgUIAAgEIAAgFIgBgDIgCgLIAAgBIAChGQgKANgEgBQgHgDADgaQgkAtgVAcIgTAZIgFAIIgCABIgCAEIgEAGQgQAYg8huQg7hsgIg+IAAgKIAAgGIABgGIADgHIAAgCIADgGIAEgFIAAgBQACgEADgCIAAgBIAKgJIAOgLIASgJQg8gMAIhRQABgIAgh9IAEgMIADgFIAGgIIADgDIAIgFIAGgBIAFAAIACgBIACABIAHAAIADAAIACAAIACgBIABAAQATAGAhAVIA3AlQAiAWAmBIQAWAqATA2IAGgJQgJgKAFgNQAEgNAOgDIgciFQgDABgDgCQgEgBgCgEQgCgFACgEQABgFAFgCQAEgCAEACQAEACACAEQACAEgBAFIgCACQAQAPAIAaQAKAngJA6IAIABQAEACAEADQAdgyAigXQAXgQAWAAIAAgDQACgFAEgCQAEgCAFACQAEABACAFQACAEgCAEQgBAFgEACQgFACgEgCIgFgEIhsBVQAIAKgEANQBzhAA5AFIBEAGQAnAEATAIIAEACIABABIAEACIACACIAGAGIADADIACAFIABAEIABAFIAAAEIAAADIAAACIgBAEIAAACIgCAEIgCAIIgZA9QgQAngPAYQgrBFg3gcIAIATIABABIACAGIABACIADAPIAAAGIAAAKIAAAFIgCAHIgDAKIgIAMIgFAGQgsAshxAxQhIAggaAAQgOAAAAgLg");
	this.shape_340.setTransform(1314.275,662.1823);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FAFDFC").s().p("AA5EZIgGgTIgBgDIgkhrQgGARgFgBQgGAAgHgaIgbBPIgBAEIgGASIAAACIgMAkQgHAchchUQhbhTgbg4IgEgIIAAgCIgCgFIgBgKIAAgHIAAgFIACgIIAAgBIADgIIAKgSIACgCIADgFIABgBQAFgGAJgIQg9AIgShPQgCgKgKh+IAAgLIAAgBIACgJIAAgBIADgIIAAAAIAEgGIABAAQACgDADgCIABAAQADgDADAAIABgBIAHgCIABAAQAVgDAoAJQAXAFAuAMQAoAKA7A3QAlAjAhAqIACgKQgLgIAAgNQABgOAMgHIhGh1QgDACgDAAQgFgBgDgDQgDgDAAgFQAAgFAEgDQADgDAFAAQAEAAAEADQADAEAAAEIgBAEQAUAIAQAXQAXAhAIA6QAEgCAFAAQAFAAAEACQALg5AZghQARgWAUgHIgBgEQAAgEAEgDQADgEAFAAQAFAAADAEQADADAAAFQAAAFgEADQgDADgFAAIgFgCIhLBzQALAHAAAOQBXhiA4gOIBGgRQAogJAVADIAAAAIAIACIABABQADAAADADIABAAQADACACADIABAAIAEAGIAAAAIADAIIAAABIACAJIAAABQABAFgBAGQgKB+gCAKQgSBPg9gIIAOAOIABABIADAFIACACIAEAGIAGAMIADAIIAAABIABAGIAAACIABAFIAAADIAAAEIAAADIgBAHIgGAPQgbA4hbBTQhFA/gVAAQgIAAgBgHg");
	this.shape_341.setTransform(1341.9875,837.8734);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FAFDFC").s().p("AiGKgIgfgGIgSgGIgKgFIgDgBIgHgEIAAAAQgQgKgMgRIgBgBIgEgHIgGgLIgDgIIgBgCIgIgjIgCgmIABgDIAAgcIgBgCIAAgPQAGgGABgKQgBgLABgGIAYh9QgWAVgJgFQgNgHAYg8IiIBXIgcASIgNAHIgCABIgZAMIgDABIgKAFIgDABIgNAFIghAIIgDAAIgIABIgDAAIgIAAIgDAAIgKgBIgIgBIgCgBQgSgDgQgLIgKgIIgFgFIgDgCIgUgZIgUglIgMgfIgThCIgRhiIgBgVIAAgDIAAgRIABgFIABgQIAAgDIADgSIAIgcIAJgWIAKgUQAohDBVggQBHgbBUADIgYgPQgzgfgdgdIAAgBQg0gzALg5QACgNArhkIABgDIAEgHIABgDIAIgWQAeiAAXgiQAmg2BrBHIAaAWIAgAlIAWAkIACACQA2BgArClQAbBsAPBnQAAgKAGgKQAMgSAWABIgBjVQgFAAgEgDQgHgEgBgHQgCgHAEgGQAEgHAHgBQAHgCAGAEQAGADABAIQACAHgEAGIgCAEQATAcADAqQAGBAghBUQAHACAEADQAHAEAEAGQA9hEA7gYQAogRAhAGIACgFQAEgGAHgCQAHgCAHAEQAGAEABAHQACAHgEAHQgDAGgIACQgHACgGgEQgFgEgCgEIi/BgQAJATgKASQgLASgVAAIgDAJQCYgqCggQQDpgYBaA7QBrBHgjA3QgNAVgpAfIhKA8QgRAPgwA0QgiAmgZANQhEAkh8hYQgNgLgKgFQAjBLACBMQADBbguA/IgDACIgIALIgdAbIgUAPIgOAIIgiARIgDABQgHADgJADIgDABIgXAHIgVAFIgsAJIhWAKIgIAAgAgxgrIACgCIgDgJIABALg");
	this.shape_342.setTransform(1013.6922,813.5213);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FAFDFC").s().p("AizHLQhWgKgMgyIAAgBIgBgKIAAgDIABgNIAGgYIAGgQIAAgBQAchDBFhVQg/AegHgMQgEgGASgUQARgTAhgZQhcAXg2AAIgcACIgBABIgIAAIgCgBIgsgEIgRgEIgQgIIgFgEQgoghAehRQANgiBBh0IAGgKIAHgIIAHgIIAJgGIABgCIAJgEIAJgEIACAAIAHgCIAKgCIACAAIAUAAIABAAIAJACIACAAIAJACIABAAQATAFAVAKIgDgEQg1hRCAhuQAtgmA6giQAwgcAXgFIAFgBIABAAIADABIAFABIABABIAEADIAGAJIACAEIABACIADAHIAGAXIABAHIACAKIAAACIABAIIABACIABAIIAAACIABAJIAAAAQAGBLgGBRQgFBZhECPQAMgGANgEQAAgQANgHQANgJAOAIIBEiMQgDgCgCgDQgDgEABgFQABgGAFgDQAEgDAGACQAFABADAEQADAFgBAFQgCAFgEADIgEABQAFAZgMAdQgRArgxAtIAHAGIAEALQA+gZAuADQAfACAVAOIACgDQAFgCAFABQAFABADAEQADAFgBAFQgBAFgFADQgEADgFgBQgGgBgDgFIgCgHIicACQAAAPgNAJQgNAIgOgHIgQAQQCYACBTAkQBLAfA/AnIABAAIAIAFIABABIAHAFIACABIAHAFIABABIANAKIACABIASARIAFAFIACADIABACIAEAIIABAFIAAAGIgBADIAAABIgDAEQgPATgwAfQg3Alg3AXQicBBgwhUIgCgEIAAAGIgBADIgCAXIgCALIgHAUIgGAOIgJANIgOAPIgJAFIAAABQgTALgXAAQhLAEgtAAQghAAgQgCg");
	this.shape_343.setTransform(1141.1402,870.9714);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FAFDFC").s().p("AggEfIgGgGIgDgGIgBAAIgEgIIAAgCIgDgHIgBgBIgDgKIAAgBIgCgLIAAgBQgCgHgCgRQgFglACgvQgWAqgIgDQgLgEARg8QgjArghAdIgBAAIgTAQIgBAAIgIAGIgBABIgJAFIgJAEIgBABIgIADIgBAAIgIACIgHABQgjgCgQg3QgHgWgNhaIgBgPIABgHIADgIIADgHIAEgGIADgCIABgCIAEgEIALgIIABgBIAFgDIABAAIAFgDIAIgDIAPgEIAAAAIAFgBIgDgCQg9gVAYhuQAThaAgglIACgCIAEgCIABgBIAEAAIABABIACAAIAFACIAEACIACABIAFADIABABIAFADIARAQIABACIAJAJQAeAiAhAwQAhAyAWBoIAJgPQgHgJAEgJQAEgLALgBIgVhmQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgHgEACgIQABgDAEgBQADgCADABQAEABABAEQACADgBADIgCACQAgAfgNBLIAGABIAGAEQAWgnAagRQASgMAQAAIAAgDQAEgHAIACQAHAEgCAIQgBADgEABQgDACgDgBIgEgDIhTBAQAGAIgDAKQgDAKgKABIgCAPQBSg8A5gPQA/gPAngDIABAAIAFgBIACAAIAFAAIACAAIAFgBIAOAAIAEABIAGAAIAFABIACAAIACABIACAAIACABIACAAIACABIACABIADACIACACIABABIABADIAAABIABADQgCAxguBPQg5Bhg7gZIgDgBQAJANAFALIADAHIACAGIAAABIADANIAAACIAAAEIAAACIAAAFIAAACIgBAEIgDAJIgCAFIgCACIgCADIgGAIIgGAFQhEA5gVANQgdARgUAAQgPAAgMgKg");
	this.shape_344.setTransform(921.425,901.3199);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FAFDFC").s().p("Ah2HcQgkgahxhtIgKgKIgIgLIgIgOIgEgLIgDgNIgBgJIAAgPIABgJIABgCQACgMAEgLIALgXIAAgCQAKgSATgWIgGABQhsAlhXi0Qgfg/gVhNQgRhBAAgcIACgIIABgDIADgEIACgBIADgDIAFgDIADAAIAGgDIAFgBIALgBIAGAAIADgBIAfABIAJABIACABIAKABIACAAIAKACIACAAIALACIAAAAQBTAOBgAgQBlAiCPB7QgDgTAAgOQgSgEgGgSQgFgSANgOIiMh5QgCADgFACQgGACgGgDQgFgDgCgGQgCgGADgGQADgFAGgCQAGgCAFACQAGADACAHIABAEQAdADAeAWQAtAgAkBGQAEgDAGgCQAHgCAFABQgKhPASg0QAMgkAWgTIgBgEQgCgGADgGQACgFAHgCQAGgCAFADQAGADACAGQACAGgDAFQgDAGgGACQgEABgFgBIgtC1QARAEAGARQAFASgMAOIANAXQAziwBBhSQA+hQA9g6IAAAAIASgQIAIgIIACgBIAHgGIACgCIARgMIAGgEIACgBIANgHIAHgDIADgBIAGgCIAEAAIADAAIADAAIACAAIADABIACABIAFADIAEAEQAQAXAWBBQAZBKAJBHQAcDHhvAdIgGACQAZAHAVALIALAGIALAHIABABQALAHAHAIIACACIAOASIAFAKIAEALIADALIABARIgBANIgCANQgiCbgQAoQglBgg+gBIgKgCIgSgFIgCgBIgRgIIgMgIIgpggIgXgXQgwgwgwhCQAQBSgQAFQgJADgRgaQgQgagTguQgCBhgPBOIAAAAIgKArIgNAmIgPAdIgJAMIgGAGIgGAFQgSAOgYAAQgnAAg1glg");
	this.shape_345.setTransform(1380.1743,309.8035);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FAFDFC").s().p("ABeDcQgVgIgMADQhIANgWgpIgCgEIAAgCIgBgEIABgBIACgGQgCgEAAgCIgBgCIABgFIAAgCIABgGIABgBIAGgUIgKAPIgBACIgHAMIAAABIgDAEIgDAIIgBADIgBABIgCAFQgHAXg2gdQg+glgRgGQgcgKgDgLQgDgNAagaIAGgEIAIgFIAHgEIACAAIAHgDIACgBIAUgGIANgDIALgDIAAAAQAzgKBEgEIgGgHQgHADgFgEQgHgEABgHIhFgBIgBADQgDAFgFgDQgFgEADgEQADgEAFACIABABQAJgFAOgBQAVgBAbAKIACgEIADgCQgkgiAEgeIgBAAQgFgEADgEQADgFAFADQAFADgDAFIgDACIAeA/QAGgDAGAEQAFACAAAIIAKAEQgXhAgLg0IgCgMIgBgBIgCgMIgDgeIABgMIABgGIAAgCIACgGQAMgjAOgCQALgCAUAWQAMANA7ApQAwAngSAQIgEADIgHAIIgFAGIAAAAIgIALIgMARIAEgEIASgOIACgBIAEgDIABgBIAHgDIALgEIAFAAQAuAEARBIQADAMAPAQQALAMgFAJQgGALgGACIgcAGIgkAFIgFAAIgDABIgIAAIgFAAIgCAAQgUAAgQgDQASAQgDAEQgDAFgUgJQAOAUAAAIIABABIAIAOIAFAPIAAABIAEANIAAABIADAMIAGAcQAAAGgHALQgEAFgHAAQgFAAgGgCg");
	this.shape_346.setTransform(1004.4077,250.9913);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FAFDFC").s().p("AgDGgQgYgHgGgKQgDgDgUgxIgPgkIgHgWIgOgzQgIgmgBgeQgXApgJgEQgJgDAIgpQgcAdgUAMIgDACIgIAGIhJArIgEACIgLAFIgzAYQgLADgXgLQgSgHADggQAFgqgKgXQg4iFBFg6IAHgGIAXgIIABAAIAMgCIADAAIAKAAIAhABIAPABIADABIAIABIhOgaIgegGQgvgEAghzQAsiEAEgjQAHg5AUgKQAYgMA8AoIAHAFIASASIAGAIIACACIA1BiQAoBaAmCAIAJgOQgIgKAFgNQAEgNAOgCIgaiEQgDABgDgBQgEgCgCgEQgCgEACgFQABgEAEgCQAFgCAEACQAEABACAFQACAEgCAEIgBADQAQAPAHAaQALAmgLA5QAFAAADABQAFACADADQAdgxAigWQAWgPAWgBIAAgDQACgEAEgCQAEgCAFABQAEACACAEQACAFgCAEQgCAEgEACQgEACgEgCIgFgDIhqBSQAIAKgFANQgEANgOACIgDAVQAhgVA1geQA/gkA5gbIAigPIADgCIAcgKIAAAAIANgEIADgCIAZgGIACgBIAWgDIACAAIAIAAIAMAAQBHAKAKAaQAIAUggAwQgMAQgWA0IgoBYQg1BrgmgcIgHgFIgMgHIhMgiIgHgCIAMAIIACABIAJAGIACACIAHAGIAJAIIACABIAQAQIAFAGIAAABIAGAIIAEAHIAAAAIADAHIACAJQAMBZiCA/QgWALgZAiQgPAWgPAAIgGgCg");
	this.shape_347.setTransform(1397.3537,731.6074);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FAFDFC").s().p("Aj+IWQgXg/gegaQitiWA3iDIAHgOIAGgHIAGgHIACgCIAGgGIAHgFIAAAAIATgNIASgLIACAAIAIgFIAMgFIABgBIAXgKIABgCIAGAAQAEAAACgGQAGAAAUgHIgdAFIgVACIgkAFIgEABIgOADIgCAAIgOACIgDABIgdAHIgLADIgDABIgKAEQhFAbgli5QgejagSg0QgehWAUgdQAagiBxAOIAUAEIADABIAKADIACABIAJAEIADABIAXALIAOAHIAbARIACABIAcATIABABQBTA7BtBpQBKBHBGBNIADgcQgSgJgDgVQgBgWAQgMIiBipQgDACgGABQgHABgFgFQgGgEgBgHQAAgIAEgFQAFgGAHgBQAHAAAGAEQAGAFAAAHIAAAFQAhAKAcAgQArAvAYBXQAFgCAHgBQAIgBAHACQAHhbAgg3QAWglAegQIgBgFQgBgHAFgGQAEgFAHgBQAIgBAFAFQAGAEABAIQABAHgFAFQgFAGgHABQgFABgFgDIhdDAQASAKADAUQABAWgRAMQAGAQAFARQCBjTBsh/IBIhNIABgBIANgLIAtgiIALgGIAUgIQBsglAfAdQAaAYgMBaQgIA3AODcQAAC8hJgMIgLgCIgCAAIgMgBIgCAAIgMgCIgCgBQgJgCgFAAIgDAAIgPACIgBACIgPABIgDAAIgQABIgSABIgDAAIgyAEIAOABIAAAAIANACIACABIAkAHIACAAIAJACIADABIAJACIACABIAUAGIADACIAHACIASAJIARALIAGAGIACABIAJAMQAxBHgfBdQgVA9g5BKQgYAfgKBDQgIAxgeAFQgoAGgQgIQgFgEhAg2IhehbIgBgBIgQgSIAAgBQgwg3gcg1QgEBJgQACQgPABgSg/QgSA4ggA5IAAABIgMAVIgBABIgZAnIgBACIglAzIAAABIgLAOQg0BCgFAFQgNALgoACIgCAAQgdAAgRgug");
	this.shape_348.setTransform(1287.5091,511.0353);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FAFDFC").s().p("AiMF0QhKgqgihIQglhRCdhZIg+AZIAAABIgkARQgUALgPAEQgaAIgSgLQgPgJgSgcQgxhcg0hGQg1hKAogTIACgBIADgBIAHgCQAigJBOAPIAAABQAkAHB0AgQBGATBHAlQApAWAiAXQgFghAAgTQgQgEgFgQQgEgRAMgLIh5hvQgCAEgEAAQgFACgFgDQgFgDgCgFQgBgGACgEQADgFAGgCQAFgBAFACQAFADABAGIABADQAaAEAaAUQAmAdAeA/QAEgDAFgBQAFgCAHABQgHhFAQgvQAMgfAUgQIgBgDQgCgGADgFQADgFAFgBQAGgCAEADQAFADACAFQABAGgCAEQgDAFgFACQgFABgDgBIgtCeQAQAFAEAPQAEAQgLAMQAKARAMAbQASgnAYgoQAohDAvgzQBNhTAggeIAAgBQA4g0AjgMIABAAIABgBQA4gRgIBlQgGBYAHBoQAAAigIAPQgKASgaAHQgPAFgXABIgoAEQgeAEgkAGQC1gGAKBXQAKBPgpBLQgoBKg5APQgoALgkgbQgRgNgTgSIAAgBQgygvgshAQALAzACAgQACAhgJADQgJACgRgfQgRgfgRgzQgBBOgVBKIABAAQgGAWgIAXQgQAqgoAMQgRAFgSAAQgrAAgzgdg");
	this.shape_349.setTransform(1225.9291,781.1616);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FAFDFC").s().p("AhSGvQglgVgFgsQgEgbAAgUIABgBQgChFAPhLQgcArgWAYQgXAZgIgFQgIgFALgiQAKghAYgxQg1A0hGAnIAAABQgZAOgRAIQgpASglgUQg0gcgVhRQgWhTAbhJQAfhTCuAwQgZgMglgOIAAABQgWgJgPgEQgYgIgMgHQgXgNgGgUQgEgRAIghQAfhjAOhXQARhkAyAeIABAAIABABQAeASArBCIAAAAQASAcAZAqIAkBCQAjA/AYBNQAPAvAGAmQATgZAPgPQgJgPAJgOQAHgOASAAIgHikIgHgCQgFgDgBgFQgCgFADgFQACgFAGgCQAFgBAFACQAFADACAGQABAFgDAFIgCADQAQAUADAhQAGAxgWBCQAFABAEACQAFADADAFQA6hGA4gNQAcgHAQAIIicBWQAIAOgIAOQgIAOgQAAQgFAUgLAaQAmgOAvgMQBMgRBFgCQCrgGA5AKQBzAVhjBVQgsAlgvAyQgvAygKAJQgZAVgVgCQgXgCghgdQgjgfgzgjQA6A2AWAtQAbA4gfAmQgxA+hSAYQgjAKgdAAQgmAAgcgRg");
	this.shape_350.setTransform(1413.8011,430.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.b15},{t:this.b13},{t:this.b6_mc},{t:this.b14},{t:this.b12},{t:this.b10},{t:this.b11},{t:this.b9},{t:this.b5_mc},{t:this.b3_mc},{t:this.b4_mc},{t:this.b2_mc},{t:this.b1_mc}]}).wait(1));

	// Background
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_351.setTransform(960,540);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_352.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_352},{t:this.shape_351}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(611.4,531.5,1308.6,562.9000000000001);
// library properties:
lib.properties = {
	id: '6DFB4E195D296D4383A25DB599B274ED',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/sound.png", id:"sound"},
		{src:"sounds/_1.mp3", id:"_1"},
		{src:"sounds/_2.mp3", id:"_2"},
		{src:"sounds/_3.mp3", id:"_3"},
		{src:"sounds/_4.mp3", id:"_4"},
		{src:"sounds/_5.mp3", id:"_5"},
		{src:"sounds/_6.mp3", id:"_6"},
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
an.compositions['6DFB4E195D296D4383A25DB599B274ED'] = {
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