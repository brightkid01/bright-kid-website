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



(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_0 = function() {
	this.initialize(img.Mesh_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_1 = function() {
	this.initialize(img.Mesh_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_11 = function() {
	this.initialize(img.Mesh_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_12 = function() {
	this.initialize(img.Mesh_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_13 = function() {
	this.initialize(img.Mesh_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_14 = function() {
	this.initialize(img.Mesh_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_15 = function() {
	this.initialize(img.Mesh_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_16 = function() {
	this.initialize(img.Mesh_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_2 = function() {
	this.initialize(img.Mesh_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_3 = function() {
	this.initialize(img.Mesh_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_4 = function() {
	this.initialize(img.Mesh_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_5 = function() {
	this.initialize(img.Mesh_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_6 = function() {
	this.initialize(img.Mesh_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


(lib.Mesh_7 = function() {
	this.initialize(img.Mesh_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,25);


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


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(25).call(this.frame_27).wait(2).call(this.frame_29).wait(20).call(this.frame_49).wait(3).call(this.frame_52).wait(22).call(this.frame_74).wait(2).call(this.frame_76).wait(24).call(this.frame_100).wait(2).call(this.frame_102).wait(19).call(this.frame_121).wait(2).call(this.frame_123).wait(19).call(this.frame_142).wait(3));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiHDDQgjgzAAhTQAAiZCEhyIAggeQAXgWAPAAQARAAAOANQANAMAAARQACAPgmAkIgzAvQgdAdgNAbQARgHAPgDQAOgDAMAAQBPAAArApQAsApAABKQAABMguAyQgwAzhQABQhaAAgqhAgAgtARQgKAEgaAQIgBAYQgBA8AVAfQAUAdApAAQAoAAAXgcQAWgaAAguQAAgjgWgTQgWgRgrAAQgXAAgTAHg");
	this.shape.setTransform(22,50.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(122).to({_off:false},0).to({_off:true},21).wait(2));

	// Layer_11
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AinC5QgIgMAAgLQAAgSAOgLQANgMASgBQASABANANIAXAYQAUAOAgAAQAwAAAhgkQAggiAAgyQAAgvgQgWQgQgYggAAQg3AAghAkIgbAdQgSAQgTAAQgSAAgNgMQgNgMABgQIAFg3QALhdAAgfQAAgIgGgNQgGgOAAgHQAAgQAQgIQANgGARAAIAUABIATAAICYABIAYgCIAZgCQARAAALAMQALAKAAARQAAAwhggBIgTAAIgQAAIhdAAQgBATgHAtQAqgVA4AAQBOABAoA5QAgAvAABHQAABXg1A4Qg3A7hbAAQhhAAguhFg");
	this.shape_1.setTransform(22.35,50.25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(101).to({_off:false},0).to({_off:true},20).wait(24));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAjC8IAAhMIh+AAQhmAAAAgpQAAgSASgVIAeghQAzhJBniQQAZghAoAAQATAAANAKQAQALAAAVIABDtQApACAOAHQAQAJAAAZQAAAagYAKQgRAGgegBQABAugCA1QAAASgLALQgLAMgTAAQgwAAAChAgAg7AcIBeAAIAAiNQgfAwg/Bdg");
	this.shape_2.setTransform(21.6755,49.325);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(75).to({_off:false},0).to({_off:true},25).wait(45));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AheDlQgwgYgQgsQgCgHAAgIQgBgRAPgMQAOgLAQAAQAUAAANAPQAUAcADADQATAPAnAAQAdABAXgTQAXgSgBgZQABhPhqgKQgvgFAAgiQAAgaAlgMIBDgQQAVgGALgLQALgLAAgPQACgvhLAAQgYAAgeATQgdASgLAAQgSAAgNgMQgMgOAAgQQgBgbA2gaQAwgZAdAAQBIABArAfQAwAiAAA/QAAAkgOAYQgNAZgbAOQBCAjAABQQgBBCgvAsQgxAuhDgBQgzAAgpgUg");
	this.shape_3.setTransform(21.55,50.15);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(50).to({_off:false},0).to({_off:true},24).wait(71));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhpDzIgKgBQgdAAgLgYQgFgOAAgfQAAg7AagoQAUgfAugeIBUg4QAygkAAgvQAAgMgUgLQgUgMgTAAQghAAglAeQgmAegOAAQgRAAgNgJQgPgKAAgSQAAgTAPgOQAngiAdgQQApgWArAAQA3AAAsAdQAzAhgBA1QAAA2gZAmQgSAegrAbIhOAyQg8AogFAyIAzgFQBEgEAdAAQAbAAAbAMQAgAPABAXQAAAQgNANQgLANgTAAQgIAAgRgDQgQgDgIAAIhcAAQgMAAgZADQgYADgMAAIgKgBg");
	this.shape_4.setTransform(22.15,49.325);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(28).to({_off:false},0).to({_off:true},21).wait(96));

	// Layer_16
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag3BmQgdgLAAgVQAAgUAYABQAIAAASAFQARAGAIAAQAnAAABgQQgBgKgbgMQgogSgLgHQgbgTAAgcQAAgnAqgOQAYgIAxAAQATAAAJAFQAOAHAAASQAAAjgUAAQgTAAgEgPQgIgCgIAAQguAAAAANQAAAIAbAMQAnASAOAKQAcATAAAaQAAAigfARQgZAOgkAAQgaAAgWgIg");
	this.shape_5.setTransform(409.05,-61.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_6.setTransform(389.325,-61.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANANQALAJAOABQAQAAAMgMQAOgOABgXQADg9gkgBQgXAAgOAXg");
	this.shape_7.setTransform(367.8458,-61.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag5CXQgIgIAAgLQAAgRAphaQgWgpguhSIgKgQQgFgJAAgHQAAgKAIgJQAJgHALgBQANAAAHAKQAcAlAjBKIAag4QAOgdANgWQAIgOAPAAQALAAAJAHQAIAIAAAKQAAAGgDAHIhECKQgZAzgMAiIgNAjQgHATgSAAQgLAAgIgHg");
	this.shape_8.setTransform(346.375,-56.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_9.setTransform(324.525,-61.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgSQAAgLAGgHQAHgIAMAAQAWAAAEAWQAhgaArAAQAnAAAAA0IgBAOQgBAegaAAQgYgBAAgZIgBgTQgrAGgTAnIAABhQAAALgIAIQgHAGgMABQgMAAgHgIg");
	this.shape_10.setTransform(304.05,-61.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag9BWQgegbAAgqQAAgmAbgpQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYABQgOAAgSAdQgQAcAAAUQAAAVAOAMQAOALAXAAQANAAATgKQASgKAGAAQAKAAAIAIQAHAHAAAKQAAAPghAPQgeAOgSAAQgqAAgegYg");
	this.shape_11.setTransform(283.425,-61.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_12.setTransform(244.175,-67.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAaghQAdgmAwAAQAiAAAWALQAeAOAAAfQAAAUgYARQgLAIghANIhBAeQAKAKANAFQANAFAQAAQAaAAASgKQARgKAJAAQAVgBAAAVQAAAWggAOQgcALgfAAQgtABgegXgAgaguQgNAMgIAYIAsgTQAZgMARgKQgOgHgVAAQgRAAgNAMg");
	this.shape_13.setTransform(221.3,-61.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigaApAAQAoAAAAA0IgBAOQgBAegaAAQgYgBAAgZIgBgTQgrAGgTAnIAABhQAAALgHAIQgIAGgMABQgMAAgHgIg");
	this.shape_14.setTransform(201.2,-61.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_15.setTransform(180.6553,-61.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANANQALAJAOABQAQAAAMgMQAOgOABgXQADg9gkgBQgXAAgOAXg");
	this.shape_16.setTransform(159.6458,-61.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgSCZQgIgHAAgMIAAkNQAAgLAIgIQAIgGAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgLAAgHgIg");
	this.shape_17.setTransform(143.7,-67.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANANQALAJAOABQAQAAAMgMQAOgOABgXQADg9gkgBQgXAAgOAXg");
	this.shape_18.setTransform(127.6458,-61.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ag9BWQgegbAAgqQAAgmAbgpQAggvAoAAQAUAAAbALQAhAOAAARQAAAKgGAHQgHAIgLAAQgJAAgLgJQgMgKgYABQgOAAgSAdQgQAcAAAUQAAAVAOAMQAOALAXAAQANAAATgKQASgKAGAAQAKAAAIAIQAHAHAAAKQAAAPghAPQgeAOgSAAQgqAAgegYg");
	this.shape_19.setTransform(106.725,-61.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAaghQAdgmAwAAQAiAAAWALQAeAOAAAfQAAAUgYARQgLAIghANIhBAeQAKAKANAFQANAFARAAQAZAAATgKQAQgKAJAAQAVgBAAAVQAAAWghAOQgbALgeAAQgvABgdgXgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgHgVAAQgRAAgNAMg");
	this.shape_20.setTransform(68.05,-61.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_21.setTransform(46.6053,-61.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgSCZQgIgHAAgMIAAkNQAAgLAJgIQAHgGALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgIg");
	this.shape_22.setTransform(30.7,-67.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag5CUQgIAIgKAAQgKAAgIgHQgHgHAAgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgYgKgAgVgDQgNAFgRALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgNAGg");
	this.shape_23.setTransform(13.55,-66.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AglClQgIgIAAgKIABgFQAEgcAAgYIAAhhIgNACIgLAAQgMABgIgIQgHgGAAgMQAAgTATgFQAIgCAagCIACgVQAGgsASgVQAWgbAvAAQAjAAAAAaQAAAZghAAQgXAAgLARQgIAMgDAaIgBAGIAmgCQAkAAAAAYQAAAagmgBIgmACIAAAzIABA1QAAAkgFAVQgEAVgVAAQgLAAgIgHg");
	this.shape_24.setTransform(-26.125,-66.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcggQgLASAAAYQAAAXANANQALAJAOABQAQAAAMgMQAOgOABgXQADg9gkgBQgXAAgOAXg");
	this.shape_25.setTransform(-46.8042,-61.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigaApAAQAoAAAAA0IgBAOQgBAegaAAQgYgBAAgZIgBgTQgrAGgTAnIAABhQAAALgHAIQgIAGgMABQgMAAgHgIg");
	this.shape_26.setTransform(-83.65,-61.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AhCBUQghgZAAgsQAAgxAaghQAdgmAwAAQAiAAAWALQAeAOAAAfQAAAUgYARQgLAIghANIhBAeQAKAKANAFQANAFAQAAQAbAAARgKQARgKAJAAQAVgBAAAVQAAAWggAOQgcALgfAAQgtABgegXgAgaguQgNAMgIAYIAtgTQAYgMARgKQgOgHgVAAQgRAAgNAMg");
	this.shape_27.setTransform(-105.05,-61.75);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("Ag6CUQgHAIgKAAQgLAAgHgHQgIgHAAgLIABgOIABgPIAAjcQAAgOAGgLQAIgOAPAAQAUAAAAAXIAAAIIgBAIIAABLQAOgIAOgEQANgEALAAQAuAAAdAhQAaAeAAAtQgBAtgeAgQgfAggtAAQgbAAgagKgAgWgDQgNAFgQALIAABTQAaAMAUAAQAYAAAPgRQARgRgBgZQABgZgNgRQgOgQgXAAQgJAAgOAGg");
	this.shape_28.setTransform(-127.8,-66.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgRBxQgHgHAAgMQAAgWgFgqQgFgrAAgXQAAgMgCgHQgXANgWAeIgEAFIgBA8IAAAPIAAAOQAAALgJAFQgIAGgLAAQgRAAgGgPQgEgJAAgWIAAhHIgBgcIAAgdQAAgSAGgOQAIgRANgBQALAAAJAJQAJAIAAAKIgCARQAdgiAbAAQAeAAANAYQAMgLAOgGQAPgFAQAAQAnAAANAnQADAHAGAtQAFAfAJBJQABAMgJAHQgIAHgMAAQgWABgEgXQgDgUgEglIgHg4QgFgjgIAAQgFAAgQAJQgQAJgHAHQAAAWAFApQAGAqAAAVQAAAMgIAHQgIAIgLAAQgLAAgIgIg");
	this.shape_29.setTransform(-154.7947,-61.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_30.setTransform(-181.2947,-61.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AiJCWQgHgHAAgMIABgXIABgYIABgiIABgjIgBgkIAAglQAAgMgDgXQgCgXAAgMQAAgMAKgJQAKgJANAAQAOAAASAZQBYB+BWBPIAAgdQAAhggCghIgCgVIgCgWQAAgbAcAAQAgAAAABiIAAAfIgBB7QAAAJgEAWQgEAZgYAAQgOAAgRgQQhLhDheh6IgBA+IABAuIAAAvQAAA5gcAAQgOAAgJgJg");
	this.shape_31.setTransform(-207.725,-66.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(144));

	// Layer_1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("Ag2D3Qg8AAAAgmQAAgqBDAAIAOAAIAAkYQgcATgIAAQgSAAgNgNQgNgNAAgQQAAgSAVgSIAkgaIAngfQAXgSAWAAQAdAAAAAjQAAAlgEBFQgDBFAAB+IAABNIAVAAQATAAAMALQANAMAAASQAAARgNAMQgMAMgTAAg");
	this.shape_32.setTransform(21.025,48.925);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(1).to({_off:false},0).to({_off:true},26).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226,-98.1,647.2,192.7);


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
		/* _root.bb1.enabled=false;
		_root.bb2.enabled=false;
		_root.bb3.enabled=false;
		_root.bb4.enabled=false;
		_root.bb5.enabled=false;
		_root.bb6.enabled=false;
		_root.bb7.enabled=false;
		_root.bb8.enabled=false;
		_root.bb9.enabled=false;
		_root.b1_mc.b1.enabled=false;
		_root.b2_mc.b2.enabled=false;
		_root.b3_mc.b3.enabled=false;
		_root.b4_mc.b4.enabled=false;
		_root.b5_mc.b5.enabled=false;
		_root.b6_mc.b6.enabled=false;*/
		
		
		this.stop();
	}
	this.frame_340 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(339).call(this.frame_340).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABEBqIg+gYIgagRIgYgWQgSgTgEgFIgJgNIgOgaIgGgOIgIgZIgEgWIgCgQIAAgLIAAgEIACAOQADAUAGASIAJAYIAHAMIAHANIAHAMIAKAMIAJAMIALAMQAHAHARANIAxAfIAYAJIAzAQg");
	this.shape.setTransform(10.9625,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABEBqIg+gYIgagRIgYgWQgSgTgEgFIgJgNIgOgaIgGgOIgIgZIgEgWIgCgQIAAgLIAAgEIACAOQADAUAGASIAJAYIAHAMIAHANIAHAMIAKAMIAJAMIALAMQAHAHARANIAxAfIAYAJIAzAQg");
	this.shape.setTransform(10.9625,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABPBsIgKgDIgLgDIgZgIIgbgNIgZgRQgSgNgHgIIgVgZIgJgNIgPgaIgFgNIgIgZIgFgWIgCgRQAAgHAAgEIAAgDIACAOQAEAUAFARIAJAYIAHANIAHANIAIAMIAJAMIAVAXIAXAVIAYARIAZANIAYAKIAUAHIAfAJg");
	this.shape.setTransform(10.95,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,22,22.7), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgYgIIgbgMIgagRIgYgWQgSgTgEgFIgJgNIgHgNIgHgNIgGgOIgHgZQgDgHgCgOIgCggIACAOQADARAHAVIAJAYIAGAMIAHANIAIAMIAJAMIAJAMIALAMIAYAUIAxAfQAIAEAQAFIAVAIIAeAIg");
	this.shape.setTransform(10.975,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,22,22.7), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABPBsIgLgCIgLgEIgYgIIgbgMIgagRIgYgWQgSgTgEgFIgJgNIgHgNIgHgNIgGgOQgGgRgBgIIgFgVIgCggIACAPQADARAHAUIAJAYIAGAMIAHANIAIAMIAJAMIAUAYIAYAVIAYARIAZANQAIAEAQAFIAVAIIAeAIg");
	this.shape.setTransform(10.975,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABPBsIgLgDIgLgDIgYgIIgbgNIgagRQgRgNgHgIIgWgZIgJgNIgHgMIgHgOIgGgNIgHgZIgFgWIgCgRIAAgOIACAOQADARAHAVQACAHAHAQIAGANIAHANIARAYQACAEASATQAIAIAQANIAYARIAZANIAYAKIAVAHIAeAJg");
	this.shape.setTransform(10.975,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BnIgYgIIgbgNIgZgRIgZgVQgRgSgEgHIgJgNIgUgoIgIgZIgFgWIgCggIACAPQADASAHATIAJAYIAGANIAHANIAIAMIAJAMIAKANIALALIAWAVIAZARIAZANIAYAKQALAFAJACIAeAJg");
	this.shape.setTransform(10.95,11.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,21.9,22.9), null);


(lib.Path_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgZgIIgagMIgagRIgYgWQgSgTgEgFIgJgNIgOgaIgGgOIgIgZIgEgVIgCggIACAOQADAQAGAWIAQAkIAHANIARAYIAJAMIALAMQAGAGASAOIAxAfIAYAJQAPAHAGABIAeAIg");
	this.shape.setTransform(10.975,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#DDEDD0").s().p("AA5BmIgZgIIgagNQgOgIgMgIIgYgWIgWgYIgJgNIgIgNIgGgNQgEgJgCgFIgIgZIgEgWIgCgfIACAOQACARAIAVIAJAYIAUAlIAJAMIAVAYIAXAUIAyAfIAYAJQANAGAIABIAeAJg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgZgIIgbgMIgZgRIgYgWQgSgSgEgGIgJgNIgIgNIgGgNIgGgOQgGgRgCgIIgEgVIgCggIACAPQADARAHAUIAJAYIAFAMIAHANIAIAMIAJAMQAFAHAQARIAXAVIAyAeQAIAEAQAFIAVAIIAeAIg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,22,22.7), null);


(lib.Path_6_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_14, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_13, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_6_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_12, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_11, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_6_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_10, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_9, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhvIAGARQAGASAEAGIifC2g");
	this.shape.setTransform(8.025,11.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,16.1,22.4), null);


(lib.Path_6_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_6_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_6_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGAQQAHATAEAFIihC1g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGAQQAHATAEAFIihC1g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,16.1,22.2), null);


(lib.Path_5_9 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353F69").s().p("Ap3LUIADgDQhHgcgVhEQgGgVgBgXIABgSIARgSQgGA8AjAtQAaAgAtAVIULz7QhPgngnhRQgMgagHgbIgEgXIAYgZQADAbAaAxQAqBOBKAnIAcgbIAYAJQAZALAIAAIgdAcIAaAGIgeAbIgZgGI0xTuQARAGAMADIgPAOIgfgHIgJAJIiwA7g");
	this.shape.setTransform(79.475,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_9, new cjs.Rectangle(0,0,159,158.8), null);


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
	this.shape.graphics.f("#353F69").s().p("Ap3LUIADgDQhHgcgVhEQgGgVgBgXIABgSIARgSQgGA8AjAtQAaAgAtAVIULz7QhPgngnhRQgMgagHgbIgEgXIAYgZQADAbAaAxQAqBOBKAnIAcgbIAYAJQAZALAIAAIgdAcIAaAGIgeAbIgZgGI0xTuQARAGAMADIgPAOIgfgHIgJAJIiwA7g");
	this.shape.setTransform(79.475,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_8, new cjs.Rectangle(0,0,159,158.8), null);


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
	this.shape.graphics.f("#353F69").s().p("Ap3LUIADgDQhHgcgVhEQgGgVgBgXIABgSIARgSQgGA9AjAsQAZAgAuAVIULz7QhPgngnhRQgMgagHgbIgEgXIAYgZQACAbAbAyQAqBOBKAmIAcgbIAYAJQAZALAIAAIgdAcQANAEANACIgeAbIgZgGI0xTuQARAGAMADIgPAOIgfgGIgJAIIiwA7g");
	this.shape.setTransform(79.475,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_7, new cjs.Rectangle(0,0,159,158.8), null);


(lib.Path_5_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353F69").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgGA9AjAsQAZAgAtAVIULz7QhPgngmhRQgMgagGgbIgFgXIAYgZQACAbAaAxQArBPBKAmIAbgbIAZAJQAZALAIAAIgeAcIAbAGIgeAbIgZgGI0xTuQARAGAMADIgPAOIgggHIgJAJIivA7g");
	this.shape.setTransform(79.45,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_6, new cjs.Rectangle(0,0,158.9,158.8), null);


(lib.Path_5_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#353F69").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgGA9AjAsQAZAgAtAVIULz7QhPgngmhRQgMgagGgbIgFgXIAYgZQACAbAaAyQArBOBKAmIAbgbIAZAJQAZALAIAAIgeAcQAOAEANACIgeAbIgZgGI0xTuQARAGAMADIgPAOIgggGIgJAIIivA7g");
	this.shape.setTransform(79.45,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,158.9,158.8), null);


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
	this.shape.graphics.f("#353F69").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgGA9AjAsQAZAgAtAVIULz7QhPgngmhRQgMgagGgbIgFgXIAYgZQACAbAaAyQArBOBKAmIAbgbIAZAJQAZALAIAAIgeAcQAOAEANACIgeAbIgZgGI0xTuQARAGAMADIgPAOIgggGIgJAIIivA7g");
	this.shape.setTransform(79.45,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,158.9,158.8), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.05,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,16.1,22.2), null);


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
	this.shape.graphics.f("#353F69").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgWIAAgTIASgSQgHA9AjAsQAaAgAtAVIULz7QhPgngmhRQgMgagHgbIgEgXIAYgZQACAbAbAxQAqBPBKAmIAbgbIAYAKQAaAJAIABIgeAcQAOAEANACIgeAbIgZgGI0xTuQARAGAMADIgQAPIgfgHIgJAIIivA7g");
	this.shape.setTransform(79.475,79.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,159,158.9), null);


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
	this.shape.graphics.f("#2C7871").s().p("Ap3LUIADgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgHA8AjAtQAaAgAtAVIUMz7QhQgngmhRQgMgagHgbIgEgXIAYgZQACAbAbAxQAqBOBKAnIAbgbIAYAJQAaALAIAAIgdAcIAaAGIgeAbIgZgGI0xTuQARAGAMADIgPAOQgUgDgLgEIgKAJIivA7g");
	this.shape.setTransform(79.475,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,159,158.8), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABOBsIgKgCIgLgEIgZgIIgbgMIgZgRIgYgWQgSgSgEgGIgJgNIgIgNIgGgNIgGgOQgGgRgCgIIgEgVIgCggIACAPQADARAHAUIAJAYIAFAMIAHANIAIAMIAJAMQAFAHAQARIAXAVIAyAeQAIAEAQAFIAVAIIAeAIg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#F7EC33").s().p("AA5BmIgZgIIgagMIgagRIgYgWQgSgTgEgFIgJgNIgOgaIgGgOIgIgZIgEgVIgCgcIABgEQAAAFACAJQACAUAHASIAVAxIARAYQAHAJAOAPQAGAGASAOIAyAfIAXAJIAVAIIAeAIg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,22,22.7), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("ABAhuIAGARQAHASAEAGIihC0g");
	this.shape.setTransform(8.075,11.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,16.2,22.2), null);


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
	this.shape.graphics.f("#45653D").s().p("Ap3LUIADgDQhHgcgVhEQgGgVgBgXIABgSIARgSQgHA9AkAsQAZAgAtAVIUMz7QhQgngmhRQgMgagHgbIgEgXIAYgZIAGAYQAJAbAOAZQAqBPBKAmIAcgbIAXAJQAaALAIAAIgdAcIAaAGIgeAbIgZgGI0xTuQARAGAMADIgPAOIgfgHIgJAJIiwA7g");
	this.shape.setTransform(79.475,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,159,158.8), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgZgIIgbgNIgZgRQgRgNgHgIQgPgQgHgJIgJgNIgIgMIgGgOIgGgNIgIgZIgEgWIgCgRIAAgOIACAOQADARAHAVIAJAYIAFAMIAHANIARAYIAVAYIAXAUIAyAeIAYAKQANAGAIABIAeAJg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,22,22.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgZgIIgbgNIgZgRQgRgNgHgIQgPgQgHgJIgJgNIgIgMIgGgOIgGgNIgIgZIgEgWIgCgRIAAgOIACAOQADARAHAVIAJAYIAFAMIAHANIARAYIAVAYIAXAUIAZARIAxAXIAVAHIAeAJg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,22,22.7), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AA5BmIgZgIIgbgNIgZgRQgRgNgHgIQgPgQgHgJIgJgNIgIgMIgGgOIgGgNIgIgZIgEgWIgCgfIACAOQADASAHAUIAJAYIAFAMIAHANIARAYIAVAYIAXAUIAyAeIAYAKQANAGAIABIAeAJg");
	this.shape.setTransform(11,11.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,22,22.7), null);


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

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(152,12.9,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgcAWgVIHdnLQAZgYAfABQAaABAPARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAWANAOQANANASAAQAZABATgTIHenLQARgRACgWQADgVgOgPQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.594,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkdEUQgQgRACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARARQAQAQgDAZQgDAagTATIneHKQgTATgZACIgEAAQgXAAgOgPg");
	this.shape_1.setTransform(81.6,89.0752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgLgJQgJAGgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgIAEgIgCQgIgBgFgHQgFgHACgKQACgLAIgHIgGgOQgSAFgJgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAAABIAHAOQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAKQgBAIgHAHIAIAJQAHgFAJABQAKACAFAGQAKAOgMAQIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAIIgoAlQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_3.setTransform(135.6483,33.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_4.setTransform(140.0882,37.9483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgnAkQgGgIABgKg");
	this.shape_5.setTransform(144.5429,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVARIgDgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAngoQAEACAFAHQAHAIgCAJQgDALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_6.setTransform(126.15,18.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgLAKgGQAJgIAKABQAKAAAGAIQAGAIgCAJQgCAKgKAIQgJAGgJABQgLgBgGgIg");
	this.shape_7.setTransform(132.075,29.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(128.8382,23.9233);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgGAGgIABQgIAAgFgGQgJgJAIgMIgJgIQgGAGgIgBQgHABgFgGQgDgEAAgHQAAgHAEgGIgGgHQgGAEgHAAQgHAAgEgGQgEgFAAgGQABgHAEgGIgHgKQgNAHgJgJQgFgFABgIQABgJAGgGIgGgKQgMAFgJgJIgBgDIASgUIAAABIAJgKIAGADQAFAGgBAJQgBAHgHAGIAAAAIAGALQAGgCAFAAQAHABADAEQAFAFAAAIQgCAHgFAHIAHAJQAGgDAGAAQAHAAAEAFQAFAFAAAGQgBAGgFAHIAHAHQAFgFAGAAQAIAAAEAGQAIAIgHAOIAJAHQAGgFAIgBQAHABAGAFQAHAJgGAMIAIAGQAHgGAIgBQAIAAAGAGIggAdQgIgIAGgNg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgJAHgNIgJgIQgGAGgIAAQgHAAgEgGQgFgFAAgGQABgHAFgFIgHgIQgGAEgHAAQgHAAgEgFQgEgFAAgHQAAgHAFgFIgGgKQgHADgGgBQgGgBgEgEQgFgFABgIQABgIAHgGIgHgLQgNAGgHgJIgDgDIAOgOIAAgBIAFgGIAAABIAKgKIAFAEQAFAGgBAIQgBAIgGAGIgBAAIAGAKQAOgFAIAIQAEAGgBAIQgBAHgFAFIAHAKQAGgEAHABQAHAAAEAFQAEAFgBAHQAAAGgFAFIAGAHQAGgDAHAAQAHAAAEAFQAJAJgJANIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIANIAJAFIAAAAQAHgGAIAAQAJgBAEAGIgMALIAAABIgGAFIgBAAIgMALQgIgIAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgqgCg1ISZzVQADBIAjA3QAzBRBxAdIzVSdQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.2);

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_0();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgWIUu1zQAGB/BsA/QA2AgA1AHI14U4QhqgRgfhPg");
	this.shape_12.setTransform(85.55,79.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCrIjOBCQgRgHgFgLg");
	this.shape_13.setTransform(11.475,152.7);

	this.instance_3 = new lib.Mesh_0();
	this.instance_3.setTransform(139.55,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Av5LgIbZ7ZIEaEaI7ZbZg");
	this.shape_14.setTransform(73.225,93.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-8.2,203.7,203.7);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path_1();
	this.instance.setTransform(152,12.9,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C64539").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgcAWgVIHdnLQAZgYAfABQAaABAPARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAWANAOQANANASAAQAZABATgTIHenLQARgRACgWQADgVgOgPQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.594,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F05837","#FFCB52","#F26740"],[0.075,0.349,0.918],-7,-7.2,8.1,8.4).s().p("AkdEUQgQgRACgZQACgaAUgSIHdnLQAUgTAZgCQAZgBARARQAQAQgDAZQgDAagTATIneHKQgTATgZACIgEAAQgXAAgOgPg");
	this.shape_1.setTransform(81.6,89.0752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F16037").s().p("ABGB+QgBgIAEgHIgLgJQgJAGgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgIAEgIgCQgIgBgFgHQgFgHACgKQACgLAIgHIgGgOQgSAFgJgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAAABIAHAOQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAKQgBAIgHAHIAIAJQAHgFAJABQAKACAFAGQAFAHgBAIQAAAIgGAHIALAKQAJgGAKAAQAKABAGAHQAKANgLAQIALAIIAAAAQAJgHAKAAQAKAAAGAIIgoAlQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC440").s().p("AgEAZQgLAAgGgIQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_3.setTransform(135.6483,33.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC440").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_4.setTransform(140.0882,37.9483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC440").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgoAkQgGgIACgKg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC440").s().p("AgVARIgDgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAngoQAEACAFAHQAHAIgCAJQgDALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_6.setTransform(126.15,18.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC440").s().p("AgVARQgGgHACgKQACgKAKgIQAJgGAKAAQAKAAAGAHQAGAIgCAKQgCALgKAGQgJAIgJgBQgLAAgGgIg");
	this.shape_7.setTransform(132.075,29.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFC440").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(128.8382,23.9233);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F16037").s().p("AA9BOIgJgFQgGAFgIAAQgIABgFgFQgJgKAIgNIgJgHQgGAFgIAAQgHAAgFgFQgDgFAAgGQAAgHAEgGIgGgHQgGAEgHgBQgHAAgEgEQgEgFAAgHQABgHAEgGIgHgKQgNAHgJgJQgFgGABgIQABgHAGgGIgGgLQgMAFgJgJIgBgDIASgUIAAABIAJgKIAGAEQAFAFgBAIQgBAJgHAFIAAAAIAGALQAGgDAFABQAHABADAEQAFAFAAAIQgCAIgFAFIAHAKQAGgDAGAAQAHABAEAEQAFAFAAAGQgBAGgFAGIAHAHQAFgDAGAAQAIAAAEAEQAIAJgHAOIAJAIQAGgGAIgBQAHAAAGAGQAHAJgGAMIAIAGQAHgGAIAAQAIAAAGAFIggAdQgIgIAGgOg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC440").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgKAHgMIgJgIQgGAFgIABQgHgBgEgFQgFgEAAgHQABgHAFgGIgHgGQgGADgHAAQgHAAgEgFQgEgFAAgHQAAgHAFgFIgGgLQgHAEgGgBQgGgBgEgEQgFgFABgIQABgIAHgGIgHgLQgNAGgHgJIgDgEIAOgNIAAgBIAFgGIAAABIAKgKIAFAEQAFAGgBAIQgBAIgGAFIgBABIAGALQAOgHAIAJQAEAFgBAIQgBAIgFAGIAHAKQAGgEAHAAQAHAAAEAFQAEAFgBAHQAAAGgFAGIAGAHQAGgFAHABQAHABAEAEQAJAJgJANIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIANIAJAFIAAAAQAHgFAIgBQAJAAAEAFIgSARIgBAAIgMALQgIgIAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F16037","#F47C37","#F79138","#F89938","#F58137","#F26637","#F15A37"],[0,0.125,0.251,0.322,0.565,0.851,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgpgCg2ISZzVQADBHAjA4QAzBSBxAbIzVSfQhQgWgkhBg");
	this.shape_11.setTransform(82.85,82.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D1563A").s().p("Ap4LUIAEgDQhIgcgUhDQgHgWAAgWIAAgTIASgSQgHA9AjAsQAaAgAtAVIULz7QhPgngmhRQgMgagHgbIgEgXIAYgZQACAbAbAxQAqBPBKAmIAbgbIAYAKQAaAJAIABIgeAcIAbAGIgeAbIgZgGI0xTuQARAGAMADIgQAPIgfgHIgJAIIivA7g");
	this.shape_12.setTransform(80.975,84.575);

	this.instance_1 = new lib.Path_6_1();
	this.instance_1.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F16037").s().p("Ar6KwQgKgZgBgcIABgWIUu1zQAGB+BsBBQA2AgA1AGI14U4QhqgRgfhOg");
	this.shape_13.setTransform(85.55,79.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F16037").s().p("AhxBlIgBgKIBUjRICRCrIjOBBQgRgFgFgMg");
	this.shape_14.setTransform(11.475,152.7);

	this.instance_2 = new lib.Mesh_1();
	this.instance_2.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.6);


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

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD3A93").s().p("Aj5ErQgaAAgQgSQgTgTADgdQADgcAWgVIHdnLQAZgYAfABQAZABAQARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAWANAOQANANASAAQAZABATgTIHenLQARgRACgWQADgVgOgPQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.594,89.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C558A0","#EEC8DE","#CD559E"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkdEUQgQgRACgZQACgaAUgSIHdnLQAUgTAZgCQAZgBARARQAQAQgDAZQgDAagTATIneHLQgTASgZACIgEAAQgXAAgOgPg");
	this.shape_1.setTransform(81.6,89.0252);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C4E9D").s().p("ABGB+QgBgIAEgHIgLgJQgJAGgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgIAEgIgCQgIgBgFgHQgFgHACgKQACgLAIgHIgGgOQgSAFgJgMIgCgEIAlgnQAEADAFAGQAGAHgCALQgCAKgKAHIAAABIAHAOQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAKQgBAIgHAHIAIAJQAHgFAJABQAKACAFAGQAFAHgBAIQAAAIgGAHIALAKQAJgGAKAAQAKABAGAHQAKANgLAQIALAIIAAAAQAJgHAKAAQAKAAAGAIIgoAlQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC89BB").s().p("AgEAZQgLAAgGgIQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_3.setTransform(135.6483,33.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC89BB").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_4.setTransform(140.0983,37.8983);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC89BB").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgnAkQgGgIABgKg");
	this.shape_5.setTransform(144.5429,41.2734);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC89BB").s().p("AgVARIgDgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAngoQAEACAFAHQAHAIgCAJQgDALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_6.setTransform(126.15,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC89BB").s().p("AgVARQgGgIACgJQACgKAKgIQAJgGAKAAQAKAAAGAIQAGAHgCAKQgCAKgJAIQgKAGgJAAQgLAAgGgIg");
	this.shape_7.setTransform(132.0882,29.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC89BB").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(128.8483,23.8733);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C4E9D").s().p("AA9BOIgJgFQgGAFgIAAQgIABgFgFQgJgKAIgNIgJgHQgGAGgIgBQgHABgFgGQgDgFAAgGQAAgHAEgGIgGgHQgGAEgHAAQgHgBgEgFQgEgEAAgHQABgGAEgHIgHgKQgMAIgKgKQgFgFABgJQABgHAGgGIgGgLQgMAFgJgJIgBgDIASgUIAAABIAJgKIAGAEQAFAFgBAJQgBAIgHAFIAAAAIAGALQAGgCAFAAQAHABADAEQAFAFAAAIQgCAHgFAHIAHAJQAGgDAGAAQAHABAEAEQAFAFAAAGQgBAHgFAGIAHAGQAFgDAGAAQAIAAAEAEQAIAJgHAOIAJAIQAGgGAIgBQAHAAAGAGQAHAJgGAMIAIAHIAAgBQAHgGAIgBQAIABAGAFIggAdQgIgJAGgNg");
	this.shape_9.setTransform(27.75,137.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CC89BB").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgKAHgMIgJgIQgGAFgIABQgHgBgEgFQgFgEAAgHQABgHAFgGIgHgGQgGAEgHgBQgHAAgEgFQgEgFAAgHQAAgHAFgFIgGgKQgHACgGAAQgGgBgEgEQgFgFABgIQABgIAHgGIgHgLQgNAFgHgIIgDgEIAOgNIAAgBIAFgGIAAABIAKgKIAFAEQAFAFgBAJQgBAIgGAGIgBAAIAGALQAOgHAIAJQAEAFgBAJQgBAHgFAFIAHAKQAOgIAKAKQAEAFgBAHQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAJgJANIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIANIAJAFIAAAAQAHgFAIgBQAJgBAEAGIgSARIgBAAIgMALQgJgHAHgNg");
	this.shape_10.setTransform(28.25,136.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6B3978","#7E4582","#9B5B94","#B36EA4","#C57BB0","#CB81B6","#BA74A8","#94568F","#7C4581","#6E3B79","#693976"],[0,0.051,0.137,0.216,0.278,0.322,0.392,0.592,0.769,0.91,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgqgCg1ISZzVQADBHAjA4QAzBSBxAbIzVSfQhQgXgkhAg");
	this.shape_11.setTransform(82.85,82.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C4C9C").s().p("Ap4LUIAEgDQhIgcgUhDQgHgWAAgWIAAgTIASgSQgHA9AjAsQAaAgAtAVIULz7QhPgngmhRQgMgagHgbIgEgXIAYgZQACAbAbAxQAqBPBKAmIAbgbIAYAKQAaAJAIABIgeAcIAbAGIgeAbIgZgGI0xTuQARAGAMADIgQAPIgfgHIgJAIIivA7g");
	this.shape_12.setTransform(80.975,84.525);

	this.instance_1 = new lib.Path_6();
	this.instance_1.setTransform(8.55,152.05,1,1,0,0,0,8.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C4E9D").s().p("Ar6KvQgKgYgBgcIABgWIUu1zQAGB+BsBBQA2AfA1AHI14U4QhqgRgfhPg");
	this.shape_13.setTransform(85.55,79.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8C4E9D").s().p("AhxBlIgBgKIBUjRICRCsIjOBAQgRgFgFgMg");
	this.shape_14.setTransform(11.475,152.65);

	this.instance_2 = new lib.Mesh();
	this.instance_2.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.instance = new lib.Path_16();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgeQADgcAWgUIHdnLQAYgYAgABQAZABAQARQATATgDAcQgCAdgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgDAWAOAOQANAMASABQAYABAUgTIHenLQARgQACgXQADgVgOgPQgMgMgTgBIgBAAQgYAAgTASg");
	this.shape.setTransform(81.575,89.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.5).s().p("AkeETQgPgQACgaQACgZAUgTIHdnLQAUgSAZgCQAZgCARASQAQARgDAYQgDAZgTATIndHLQgUAUgZABIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgJAEgGIgLgJQgKAGgKgBQgKAAgGgHQgFgGABgJQAAgHAFgHIgLgLQgJAHgJgBQgKgBgGgHQgFgHABgJQABgJAHgIIgIgJQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgIIgJgNQgSAIgLgNQgGgIACgKQADgLAIgHIgGgPQgRAHgKgNIgCgEIAlgnQAEADAFAGQAGAHgCALQgCALgKAGIAAABIAHAOQARgGALAMQAFAHgCAKQgBAKgJAIIAJAMQAIgDAJAAQAIACAFAGQAFAHgBAKQgBAHgHAIIAHAJQAIgFAJABQAKABAFAHQAFAGgBAJQgBAHgFAIIALAKQAJgHAKACQAKAAAGAIQAFAGgBAHQAAAIgFAHIALAJIAAgBQAJgHAKAAQAKAAAGAIIgPAOIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAKgIQAJgGAKAAQAKAAAGAHQAGAIgCAKQgCALgJAGQgKAIgJgBQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgoAkQgGgIACgKg");
	this.shape_5.setTransform(144.535,41.2984);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASIgDgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoQAFAEAEAFQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_6.setTransform(126.1368,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(132.075,29.1233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_8.setTransform(128.8382,23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgGQgHAFgHAAQgIABgFgGQgEgEAAgGQgBgGAEgFIgJgIQgGAFgIAAQgHAAgFgFQgEgFABgGQAAgHAEgGIgGgHQgGAEgHgBQgHAAgEgFQgFgEABgHQABgHAEgGIgHgKQgGADgFAAQgHgBgEgEQgFgFABgIQABgIAGgGIgGgLQgMAFgJgJIgBgDIAbgdIAGAEQAFAFgBAIQgBAIgHAGIAAAAIAGALQAGgDAFABQAHABADAEQAGAFgBAIQgBAHgGAGIAHAKQAGgEAGABQAHAAAEAFQAFAFgBAGQgBAGgEAGIAHAHQAFgEAGAAQAIAAAEAFQAIAJgHAOIAJAHQAGgFAIgBQAHAAAGAGQAHAJgHAMIAJAGIAAAAQAHgGAIAAQAJAAAEAFIgfAdQgIgJAGgMg");
	this.shape_9.setTransform(27.75,137.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BOIgJgFQgHAFgHAAQgIAAgFgEQgIgKAHgNIgJgHQgGAFgIAAQgHAAgEgFQgFgEAAgHQABgHAFgGIgHgHQgGAEgHgBQgHAAgEgEQgFgGABgGQABgHAFgGIgIgJQgNAGgJgJQgFgFABgJQABgHAHgGIgHgLQgNAFgHgJIgCgDIAMgOIAAAAIAHgGIAAAAIAJgJQADABACADQAFAGgBAHQgBAIgGAHIgBAAIAGAKQANgGAJAJQAEAFgBAIQgBAIgFAFIAHAKQAGgDAHAAQAGABAFAEQAEAFgBAHQAAAFgFAGIAHAHQAFgDAGAAQAHAAAFAEQAIAKgIANIAJAIQAHgGAIAAQAIAAAEAEQAJAKgIANIAJAGIAAgBQAGgGAJAAQAIgBAGAFIgTARIgBAAIgNANQgHgJAGgNg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAiA3QA1BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.instance_1 = new lib.Path_5_6();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_11();
	this.instance_2.setTransform(8.55,152.05,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjQICRCrIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.65);

	this.instance_3 = new lib.Mesh_13();
	this.instance_3.setTransform(139.55,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Av1K5Iau6uIE9E9I6uaug");
	this.shape_14.setTransform(70.525,90.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-10.8,202.9,202.9);


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
	this.instance = new lib.Path_14();
	this.instance.setTransform(152,12.9,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgbgBgPgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZABAQARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAVANAPQANANASAAQAZABATgTIHenLQARgRACgWQADgWgOgOQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgPgQACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARAQQAQARgDAZQgDAagTATIndHKQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.0748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgLgJQgKAGgKAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAIgLgOQgGgHACgKQADgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAKACAFAGQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgoAmQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_4.setTransform(140.0882,37.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgGQAJgIAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIAogoQAEADAFAGQAGAIgDAKQgCAKgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_6.setTransform(126.1368,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_7.setTransform(132.075,29.1483);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAKgIQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.8382,23.8983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BOIgJgFQgHAFgHAAQgIABgFgFQgJgKAIgNIgJgHQgGAFgIAAQgHAAgFgFQgEgFABgHQAAgGAEgGIgGgHQgGAEgHgBQgHAAgEgEQgFgFABgHQABgHAEgGIgHgKQgGADgFgBQgHAAgEgEQgFgGABgIQABgHAGgGIgGgLQgMAFgJgJIgBgDIAbgdQADABADADQAFAFgBAIQgBAJgHAFIAAAAIAGALQAGgDAFABQAHAAADAFQAGAFgBAIQgBAHgGAGIAHAKQAGgDAGAAQAHAAAEAFQAFAEgBAHQgBAGgEAGIAHAHQANgJAKAKQAIAJgHAOIAJAHQAGgFAIgBQAHAAAGAGQAHAJgHAMIAJAGQAGgGAJAAQAIgBAFAFIgfAeQgIgIAGgOg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgHAFgHABQgIAAgFgGQgEgDAAgHQAAgFADgGIgJgIQgGAFgIABQgHgBgEgFQgFgEAAgHQABgHAFgGIgHgHQgGAEgHAAQgHgBgEgEQgFgFABgHQABgHAFgFIgIgLQgGAEgFgBQgHgBgEgEQgFgFABgIQABgIAHgGIgHgLQgMAGgIgJIgCgEIAMgNIAAgBIAHgGIAAABIAJgJIAFADQAFAFgBAJQgBAHgGAGIgBAAIAGAMQAGgDAGAAQAGABAEAFQAEAEgBAIQgBAHgFAHIAHAJQAGgDAHAAQAGAAAFAFQAEAFgBAHQAAAGgFAGIAHAHQAFgFAGAAQAHABAFAFQAIAIgIAOIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIAMIAJAGIAAAAQAHgGAIAAQAIAAAGAFIgTARIgBAAIgNALQgHgIAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgpgCg2ISYzVQAEBIAiA2QA1BTBwAbIzVSfQhQgXgkhAg");
	this.shape_11.setTransform(82.85,82.2);

	this.instance_1 = new lib.Path_5_4();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_9();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsBAQA2AgA0AGI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCrIjPBBQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.7);

	this.instance_3 = new lib.Mesh_11();
	this.instance_3.setTransform(139.55,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AvdKZIZ252IFFFFI52Z2g");
	this.shape_14.setTransform(75.95,87.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-11.9,198,198);


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
	this.instance = new lib.Path_15();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZAAAQASQATATgDAdQgCAcgWAVIneHLQgYAXgdAAIgCAAgADOkIIndHLQgSAQgCAXQgCAVANAPQANAMASABQAZABATgTIHenLQARgRACgWQADgWgOgOQgMgMgTgBQgZAAgTASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgPgQACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARAQQAQARgDAZQgDAZgTATIndHLQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.0748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgIIgLgIQgKAGgKAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAHgLgNQgGgHACgKQADgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAKACAFAGQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgHQAJgHAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgEAaQgLgBgGgHIgDgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoQAEADAFAGQAGAIgDAKQgCAKgJAHQgJAHgIAAIgCAAg");
	this.shape_6.setTransform(126.1368,18.1767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_7.setTransform(132.075,29.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.8382,23.8983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgHAGgHABQgIgBgFgFQgJgJAIgMIgJgIQgGAFgIAAQgHAAgFgFQgEgFABgGQAAgHAEgGIgGgHQgGADgHAAQgHAAgEgFQgFgFABgGQABgHAEgGIgHgKQgGADgFAAQgHgBgEgFQgFgFABgHQABgIAGgHIgGgLQgMAGgJgIIgBgEIAbgdQADABADACQAFAGgBAIQgBAIgHAGIAAABIAGAKQAGgCAFAAQAHAAADAFQAGAFgBAHQgBAIgGAGIAHAKQAOgJAJAKQAFAGgBAHQgBAFgEAGIAHAHQANgJAKALQAIAIgHANIAJAIQAGgGAIABQAHAAAGAEQADAEAAAGQABAHgEAFIAJAGQAGgGAJgBQAIAAAFAFIgfAeQgIgJAGgMg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgHAGgHgBQgIABgFgFQgEgFAAgFQAAgHADgFIgJgIQgGAFgIAAQgHAAgEgEQgFgGAAgGQABgHAFgGIgHgHQgGAEgHgBQgHAAgEgEQgFgFABgHQABgGAFgHIgIgKQgGADgFAAQgHAAgEgFQgFgFABgIQABgIAHgGIgHgLQgNAFgHgJIgCgDIAMgNIAAgBIAHgFIAAAAIAJgJIAFADQAFAGgBAHQgBAJgGAFIgBAAIAGALQANgGAJAJQAEAFgBAIQgBAIgFAFIAHAKQAGgDAHAAQAGABAFAEQAEAFgBAGQAAAGgFAGIAHAHQAFgDAGAAQAHAAAFAEQAIAJgIAOIAJAIQAHgGAIgBQAIABAEAFQAJAJgIAMIAJAHIAAgBQAHgFAIgBQAIAAAGAFIgTARIgBgBIgNANQgHgJAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAiA3QA1BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.instance_1 = new lib.Path_5_5();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_10();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsA/QA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCsIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.65);

	this.instance_3 = new lib.Mesh_12();
	this.instance_3.setTransform(139.55,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AvXKFIZc5dIFUFUI5dZdg");
	this.shape_14.setTransform(74.5,88.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-9.8,196.9,196.9);


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
	this.instance = new lib.Path_10();
	this.instance.setTransform(151.45,12.95,1,1,0,0,0,11,11.4);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8539E").s().p("Aj5EtQgagBgPgQQgTgTADgeQADgdAVgVIHcnOQAYgYAfABQAZABARAQQATAUgDAdQgDAdgWAVInbHOQgYAYgdAAIgDgBgADNkKIncHPQgRARgCAXQgDAVAOAPQAMAMATAAQAYABAUgTIHbnOQARgSADgWQACgVgNgPQgMgNgTAAIgCAAQgXAAgTASg");
	this.shape.setTransform(81.2504,89.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8456A1","#F1CEE2","#9455A0"],[0,0.357,1],-7.2,-7.5,8.5,8.8).s().p("AkdEWQgPgRACgaQACgZAUgTIHbnPQAUgTAZgBQAZgCARARQAQARgDAZQgDAagTATInbHPQgUATgZABIgEAAQgXAAgPgPg");
	this.shape_1.setTransform(81.25,89.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A670AF").s().p("ABFB/QAAgIAEgIIgMgJQgJAHgKgBQgLAAgFgIQgKgMALgRIgLgKQgJAGgJgBQgKAAgGgIQgFgHABgJQABgIAHgIIgIgJQgIAEgJgBQgJgCgFgGQgGgHACgIQABgLAIgGIgJgOQgIADgIgBQgIgCgFgGQgFgIACgKQACgLAIgGIgGgPQgIACgHgBQgIgCgEgGIgCgDIAlgoQAEADAFAFQAGAIgCAKQgCAMgKAGIAHAPQARgGALANQAFAHgCAKQgBAKgJAHIAIANQAJgEAIACQAJABAFAGQAFAHgBAJQgBAIgHAIIAHAJQAIgFAJACQAJAAAFAIQAFAGAAAIQgBAIgFAHIAKALQAJgHALABQAKAAAGAIQAKANgLAQIAKAJIABgBQAJgHAKAAQAKAAAGAIIgQAOIAAAAIgZAXQgEgGgBgIg");
	this.shape_2.setTransform(134.075,30.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgDALgJAHQgJAHgJAAQgLgBgGgIg");
	this.shape_3.setTransform(135.1132,33.9983);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAJgHQAJgHAKABQALAAAGAIQAGAHgCAKQgDALgJAHQgJAHgKAAQgKgBgGgIg");
	this.shape_4.setTransform(139.5632,38.2483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1A6CD").s().p("AgVAEQABgKAJgHQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgKg");
	this.shape_5.setTransform(143.96,41.6484);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1A6CD").s().p("AgVASIgDgCQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBAAAAgBIAngnQAEABAFAIQAGAHgCAKQgCALgJAHQgKAHgJAAQgLgBgGgHg");
	this.shape_6.setTransform(125.675,18.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A6CD").s().p("AgEAaQgLgBgGgHQgGgJACgJQACgLAKgGQAJgIAJAAQALABAGAHQAGAIgCAKQgDALgJAHQgIAHgJAAIgBAAg");
	this.shape_7.setTransform(131.5632,29.3501);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.3351,24.0983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A670AF").s().p("AA9BPIgJgFQgGAFgIAAQgIABgFgGQgIgJAHgNIgJgHQgGAFgIAAQgHAAgEgFQgEgGAAgGQABgHAEgGIgHgHQgGAEgGgBQgHAAgFgEQgEgFABgHQAAgHAFgGIgHgKQgHADgFgBQgHAAgEgEQgEgGABgIQABgHAGgGIgGgMQgNAFgIgIIgCgDIAcgeIAFAEQAFAGAAAHQgCAIgGAHIAAAAIAFAKQAGgCAGABQAHABADADQAFAGgBAIQgBAHgGAGIAHAKQAHgEAGAAQAGABAFAFQAEAEgBAIQAAAGgEAFIAGAHQAFgDAHAAQAHAAAEAEQAJAKgJANIAJAIQAHgGAIAAQAIAAAEAFQAJAKgIAMIAJAGIAAAAQAHgHAIABQAIgBAFAGIgfAdQgHgJAFgNg");
	this.shape_9.setTransform(27.6,138.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1A6CD").s().p("AA9BQIgJgHQgHAGgHABQgIAAgFgGQgIgJAHgMIgJgIQgHAFgHAAQgGAAgFgFQgFgFABgGQAAgIAFgGIgHgGQgGADgHAAQgHAAgEgFQgEgFAAgHQABgHAFgFIgIgLQgGAEgFgBQgHgBgEgEQgFgGABgHQABgIAHgHIgGgKQgNAFgIgJIgCgEIANgMIAAgBIAGgGIAAABIAJgKIAFADQAFAGgBAIQgBAIgGAGIgBAAIAGALQAGgCAGAAQAGABAEAEQAFAFgBAIQgBAHgGAHIAHAJQAGgEAHABQAGAAAEAFQAFAFgBAHQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAIAKgHAMIAIAIQAHgGAIAAQAHAAAFAFQAIAKgHANIAJAFIAAAAQAHgGAIgBQAIAAAFAGIgSARIgBAAIgNALQgHgHAGgNg");
	this.shape_10.setTransform(28.125,138);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9B61A6","#AF7DB6","#C99FC9","#DEBBD9","#ECCEE3","#F2D5E6","#E4C4DE","#C297C5","#AD7DB6","#A16DAD","#9D68AA"],[0,0.067,0.145,0.22,0.278,0.318,0.38,0.588,0.765,0.91,1],-10.6,-5.7,3.1,7.6).s().p("AqVJ1QgXgrgDg1ISUzgQAEBIAjA4QAzBSBxAcIzRSpQhPgXglhAg");
	this.shape_11.setTransform(82.525,82.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9A5AA3").s().p("Ap1LaIAEgDQhIgcgUhEQgHgVAAgYIAAgSIASgSQgHA9AjAtQAaAgAtAVIUG0FQhPgogmhTQgMgagHgbIgEgWIAYgaQACAbAbAyQAqBPBKAnIAbgbIAYAKQAZAJAIACIgdAbQANAEANACIgdAbIgagGI0rT6QAQAGAMACIgPAPQgPgCgQgFIgJAJIivA7g");
	this.shape_12.setTransform(80.625,85.25);

	this.instance_1 = new lib.Path_6_5();
	this.instance_1.setTransform(8.45,153.4,1,1,0,0,0,8,11.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A670AF").s().p("Ar4K2QgJgagCgcIABgWIUq1/QAGCABsBAQA1AgA1AHI1yVEQhqgSgghOg");
	this.shape_13.setTransform(85.2,80.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A670AF").s().p("AhwBmIgBgKIBTjTICQCtIjNBCQgRgGgEgMg");
	this.shape_14.setTransform(11.425,153.975);

	this.instance_2 = new lib.Mesh_7();
	this.instance_2.setTransform(139,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,166);


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
	this.instance = new lib.Path_9();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#914434").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgdAVgVIHenKQAYgYAfABQAaABAQARQATATgDAdQgDAcgWAVIndHLQgXAXgeAAIgCAAgADOkIIneHLQgRARgCAXQgDAVAOAOQAMAMATABQAYABAUgUIHdnKQASgRACgVQADgXgOgOQgMgMgTgBIgBAAQgYAAgTASg");
	this.shape.setTransform(81.575,89.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#AB5254","#FBC8BF","#A24747"],[0,0.361,0.918],-7,-7.2,8.1,8.5).s().p("AkeETQgQgRADgYQACgaAUgSIHdnLQAUgUAZgBQAZgBAQAQQAQARgCAaQgCAZgUATIndHLQgUASgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.5692,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE473A").s().p("ABGB+QgBgJAEgHIgLgJQgKAHgKgBQgKAAgGgIQgFgGABgIQAAgHAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgIIgIgJQgIAFgJgCQgJgBgFgHQgGgGACgJQABgJAHgIIgIgNQgSAHgLgNQgGgHACgKQADgLAIgHIgHgPQgQAGgKgMIgCgEIAlgnQAEACAFAGQAGAIgCAKQgDALgJAHIAAAAIAHAPQAHgDAIABQAIACAEAGQAGAHgCAKQgBAKgJAHIAIANQAJgEAIABQAJACAFAGQAFAHgBAJQgBAIgHAHIAHAKQAIgFAJABQAJABAGAHQAEAGAAAIQgBAJgFAHIAKAKQAKgGAKAAQAKABAGAHQAKANgLAQIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgZAXQgEgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6A0B3").s().p("AgVARQgGgIACgJQACgLAKgGQAJgIAKABQAKAAAGAIQAGAHgCAKQgCAKgKAIQgJAGgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.625,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6A0B3").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.075,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6A0B3").s().p("AgVADQABgJAJgIQAJgGAJgBQAJAAAGAHIgnAkQgGgIACgLg");
	this.shape_5.setTransform(144.51,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6A0B3").s().p("AgVASIgDgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_6.setTransform(126.1368,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6A0B3").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(132.075,29.1233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6A0B3").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_8.setTransform(128.825,23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CE473A").s().p("AA9BPIgJgGQgGAFgIAAQgIABgFgGQgEgEAAgGQAAgGADgFIgJgIQgHAFgHAAQgHAAgEgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHgBQgHAAgEgFQgFgFABgGQAAgHAGgGIgIgKQgGADgGAAQgGgBgEgEQgFgFABgIQABgIAGgGIgGgLQgMAFgIgJIgCgDIAcgdIAFAEQAFAFgBAIQgBAIgHAGIAGALQANgGAJAJQAEAFAAAIQgBAHgGAGIAHAKQAGgEAHABQAGAAAEAFQAFAFgBAGQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAJgIAOIAIAHQAHgFAIgBQAHAAAFAGQAEAEABAGQAAAGgEAFIAJAGIAAAAQAHgGAIAAQAIAAAFAFIgfAdQgIgJAGgMg");
	this.shape_9.setTransform(27.725,137.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6A0B3").s().p("AA9BOIgJgFQgGAGgIgBQgIAAgFgEQgIgKAHgNIgJgHQgGAFgIAAQgGAAgFgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHAAQgHgBgEgFQgFgEABgHQABgGAFgHIgIgKQgMAIgKgKQgFgFABgJQABgHAGgGIgGgLQgMAFgIgJIgDgDIAOgOIgBAAIAHgGIAAABIAJgJIAFADQAFAFgBAJQgBAIgGAFIgBAAIAGALQAGgCAGAAQAGABAEAEQAFAFgBAIQgBAHgGAHIAHAJQAGgDAHAAQAGABAFAEQAEAFgBAGQAAAHgFAGIAHAGQAFgDAHAAQAHAAAEAEQAJAJgIAOIAIAIQAHgGAIgBQAIAAAFAGQAIAJgIAMIAJAHIAAgBQAHgGAIgBQAIAAAGAGIgNALIAAAAIgTASQgIgKAGgMg");
	this.shape_10.setTransform(28.225,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A9544B","#B66355","#D5866E","#ECA082","#F9AC8B","#EA9E80","#C2705C","#AD574A","#A54F45"],[0,0.047,0.173,0.267,0.322,0.38,0.667,0.882,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAjA3QA0BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.825,82.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A93937").s().p("Ap4LUIAEgDQhHgcgVhEQgHgVAAgXIABgSIARgSQgHA9AkAsQAZAgAuAVIUKz7QhPgngmhRQgNgagGgbIgEgXIAYgZQADAbAaAxQAqBOBKAnIAcgbIAXAKQAZAKAJAAIgdAcIAaAGIgeAbIgZgGI0xTuQARAGAMACIgQAPIgegHIgJAJIiwA7g");
	this.shape_12.setTransform(80.95,84.55);

	this.instance_1 = new lib.Path_6_4();
	this.instance_1.setTransform(8.55,152.05,1,1,0,0,0,8.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CE473A").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_13.setTransform(85.525,79.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CE473A").s().p("AhxBmIgBgLIBUjRICRCsIjPBAQgQgGgFgKg");
	this.shape_14.setTransform(11.475,152.65);

	this.instance_2 = new lib.Mesh_6();
	this.instance_2.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.instance = new lib.Path_8();
	this.instance.setTransform(151.85,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49A799").s().p("Aj6ErQgYgBgSgRQgSgUADgdQACgbAWgVIHdnLQAZgYAfABQAZABARARQATATgDAcQgDAdgWAWIndHKQgXAXgeAAIgDAAgADNkHIndHKQgSARgBAWQgDAWAOAOQAMAMATABQAZAAATgSIHdnLQARgRADgWQACgWgNgOQgMgMgTgBIgDAAQgXAAgTATg");
	this.shape.setTransform(81.469,89.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#72CAC7","#D4EEF4","#6BC7B8"],[0,0.345,1],-7,-7.2,8.1,8.5).s().p("AkeEUQgQgRADgaQACgYAUgUIHdnLQAUgTAZgBQAagCAPASQAQAQgCAZQgCAagUASIndHLQgUAUgZABIgEAAQgXAAgPgPg");
	this.shape_1.setTransform(81.45,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3DB5AA").s().p("ABFB+QAAgJAEgGIgMgJQgJAGgKgBQgLAAgFgIQgFgGAAgHQABgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAGgIIgHgJQgJAFgIgCQgKgBgFgGQgFgIABgIQACgJAHgHIgIgOQgIADgIgBQgIgCgFgFQgGgIACgKQACgLAJgHIgHgPQgRAHgKgOIgBgDIAlgnQAGADADAGQAGAHgCALQgDAKgJAHIAAABIAGAOQAIgDAIABQAIACAEAGQAGAHgCAKQgCAKgIAIIAIAMQAJgDAIABQAJABAFAHQAFAGgBAKQgBAHgHAHIAHAKQAIgFAJABQAJACAFAGQAFAHAAAHQgBAJgFAGIAKALQAJgHALABQAKAAAGAJQAEAFAAAIQAAAIgFAHIALAJIAAgBQAJgHAKAAQAKAAAGAIIgQANIAAABIgZAXQgEgGgBgIg");
	this.shape_2.setTransform(134.475,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#84D0CF").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAIgCAJQgDALgJAHQgJAHgKAAQgKgBgGgIg");
	this.shape_3.setTransform(135.5132,33.6983);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#84D0CF").s().p("AgVARQgGgHACgKQACgLAJgGQAKgIAJABQALAAAGAIQAGAHgCAKQgDAKgJAIQgJAGgJABQgLgBgGgIg");
	this.shape_4.setTransform(139.9632,37.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#84D0CF").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgnAkQgGgIABgKg");
	this.shape_5.setTransform(144.3929,41.2984);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#84D0CF").s().p("AgUARIgEgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAogoQAFAEAEAFQAFAIgCAJQgCALgJAHQgJAHgKAAQgLgBgFgIg");
	this.shape_6.setTransform(126,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#84D0CF").s().p("AgVARQgGgIACgJQACgLAJgHQAJgHAKABQALAAAGAIQAGAHgCAKQgDAKgJAHQgJAHgKAAQgKAAgGgIg");
	this.shape_7.setTransform(131.9632,29.1233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#84D0CF").s().p("AgVARQgGgIACgJQACgLAJgHQAJgHAKABQALAAAGAIQAGAHgCAKQgDAKgJAHQgJAHgKAAQgKAAgGgIg");
	this.shape_8.setTransform(128.7132,23.8733);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3DB5AA").s().p("AA+BPIgKgGQgGAFgIAAQgIAAgFgFQgJgIAIgOIgJgHQgGAFgIAAQgGAAgFgFQgFgFAAgGQABgHAFgGIgHgHQgHAEgGgBQgHAAgEgFQgFgFABgGQAAgHAFgGIgGgKQgOAHgJgJQgFgGABgIQABgHAHgGIgGgLQgOAFgHgJIgDgDIAcgdIAGAEQAFAFgBAIQgBAIgGAGIgBAAIAGALQANgGAJAJQAEAFgBAIQgBAHgFAGIAHAKQAHgEAGABQAGAAAFAFQAEAFgBAGQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAKgJANIAJAHQAHgFAIgBQAIAAAEAGQAJAIgIANIAJAGIAAAAQAHgGAIAAQAIgBAFAGIgfAdQgIgKAHgLg");
	this.shape_9.setTransform(27.6,137.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#84D0CF").s().p("AA9BPIgJgGQgHAFgHABQgIAAgFgFQgIgKAHgMIgJgIQgGAGgIAAQgHAAgEgGQgFgEABgHQAAgHAEgGIgGgHQgGAEgHAAQgGAAgFgFQgEgFAAgHQAAgHAGgFIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgJgIIgBgEIANgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAFgBAJQgBAIgHAGIAGAKQANgGAJAJQAEAFAAAIQgBAIgGAGIAHAJQAHgDAGAAQAGABAEAEQAFAFAAAHQgBAGgFAGIAHAHQAFgEAHAAQAHAAAFAFQAIAKgIAMIAJAIQAGgGAIAAQAHAAAGAFQAIAJgHANIAIAFIABAAQAGgGAIAAQAIgBAGAGIghAdQgHgJAGgMg");
	this.shape_10.setTransform(28.1,136.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#6AC9CC","#B2E1EB","#9DD3DA","#74BDBE","#52AFAC","#37A8A1","#2BA59E"],[0,0.271,0.361,0.565,0.745,0.898,1],-10.3,-5.2,3.4,8.1).s().p("AqXJwQgYgrgDg1ISZzUQAEBGAjA4QAzBRByAdIzWSdQhQgWgkg/g");
	this.shape_11.setTransform(82.7,82.15);

	this.instance_1 = new lib.Path_4_0();
	this.instance_1.setTransform(80.85,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_5_0();
	this.instance_2.setTransform(8.4,152.05,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3DB5AA").s().p("Ar6KwQgKgZgBgbIAAgYIUw1yQAFB/BsA/QA2AhA0AGI12U4QhrgRgfhOg");
	this.shape_12.setTransform(85.4,79.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3DB5AA").s().p("AhwBmIgBgKIBQjSICTCqIjNBDQgRgGgEgLg");
	this.shape_13.setTransform(11.45,152.725);

	this.instance_3 = new lib.Mesh_5();
	this.instance_3.setTransform(139.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.4,164.6);


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
	this.instance_1 = new lib.Path_7();
	this.instance_1.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance_1.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8539E").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZAAAQASQATATgDAcQgCAdgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSAQgCAXQgCAVANAPQANAMASABQAYABAUgUIHenKQARgRACgWQADgWgOgOQgMgMgTgBQgZAAgTASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8456A1","#F1CEE2","#9455A0"],[0,0.357,1],-7,-7.2,8.1,8.5).s().p("AkdETQgRgQADgZQACgaAUgSIHdnLQAUgUAZgBQAZgBAQAQQAQARgCAaQgDAYgTAUIneHLQgTASgZACIgEAAQgXAAgOgQg");
	this.shape_1.setTransform(81.6,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A670AF").s().p("ABGB+QgBgJAEgHIgLgJQgJAHgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAHgLgNQgFgHACgKQACgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAIgHAIIAHAJQAIgFAJABQAKABAFAHQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1A6CD").s().p("AgVADQABgKAJgHQAJgHAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1A6CD").s().p("AgEAaQgLgBgGgHIgCgCQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAngoQAFADAFAGQAGAIgDAKQgCAKgJAHQgJAHgJAAIgBAAg");
	this.shape_6.setTransform(126.15,18.1767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A6CD").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_7.setTransform(132.075,29.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1A6CD").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_8.setTransform(128.8382,23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A670AF").s().p("AA9BOIgJgFQgHAFgHAAQgIABgFgGQgIgJAHgNIgJgHQgHAFgHAAQgHAAgEgFQgFgFAAgHQABgGAFgGIgHgHQgHADgGAAQgHAAgEgEQgEgGAAgGQAAgHAGgGIgIgKQgGADgFgBQgHAAgEgEQgFgGABgIQABgIAGgFIgGgMQgMAGgIgJIgCgDIAcgdQACABADADQAFAFgBAIQgBAIgHAGIAAAAIAGALQAGgDAGABQAGABADAEQAFAFgBAIQAAAHgGAGIAHAKQANgJAKALQAEAEABAIQgBAFgFAGIAHAHQAFgEAGAAQAIAAAEAFQAIAJgIAOIAJAHQAHgFAIAAQAHgBAFAFQAIAJgGANIAIAGQAGgGAJAAQAIgBAGAFIggAeQgIgJAGgNg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1A6CD").s().p("AA9BPIgJgGQgHAGgHAAQgIAAgFgGQgEgEAAgGQgBgFAEgGIgJgIQgHAFgHAAQgGAAgGgEQgEgFABgHQAAgHAFgGIgHgHQgHAEgGAAQgHAAgEgGQgFgFABgGQAAgHAFgGIgGgKQgOAHgJgJQgFgFABgIQABgIAGgGIgFgLQgNAFgJgJIgCgDIAOgNIAAgBIAFgFIAAAAIAKgJIAFADQAFAFgBAJQgBAHgGAGIgBAAIAGALQAOgGAIAJQAEAFAAAIQgCAHgFAHIAHAJQAGgDAGAAQAHAAAFAFQAEAFgBAGQAAAGgFAHIAGAHQAGgFAHAAQAHAAAEAGQAJAJgJANIAKAHQAGgFAIgBQAIAAAFAGQAIAIgIANIAJAGIAAAAQAHgFAIgBQAJAAAEAFIgSARIgBAAIgMAMQgIgJAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9B61A6","#AF7DB6","#C99FC9","#DEBBD9","#ECCEE3","#F2D5E6","#E4C4DE","#C297C5","#AD7DB6","#A16DAD","#9D68AA"],[0,0.067,0.145,0.22,0.278,0.318,0.38,0.588,0.765,0.91,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAjA3QA0BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9A5AA3").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgHA9AjAsQAaAgAtAVIULz7QhPgngmhRQgMgagHgbIgEgXIAYgZQACAbAaAxQArBPBKAmIAbgbIAYAJQAaALAIAAIgeAcQAOAEANACIgeAbIgZgGI0xTuQARAGAMADIgQAOIgfgGIgJAJIivA6g");
	this.shape_12.setTransform(80.975,84.55);

	this.instance_2 = new lib.Path_6_3();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A670AF").s().p("Ar6KvQgKgYgCgcIABgXIUv1yQAGB/BsA/QA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_13.setTransform(85.55,79.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A670AF").s().p("AhxBmIgBgKIBUjSICRCsIjPBBQgQgGgFgLg");
	this.shape_14.setTransform(11.475,152.65);

	this.instance_3 = new lib.Mesh_4();
	this.instance_3.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_14},{t:this.shape_13},{t:this.instance_2},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.instance = new lib.Path_4();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A8539E").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZAAAQASQATATgDAcQgCAdgWAVIneHLQgYAXgdAAIgCAAgADOkIIndHLQgSAQgCAXQgCAVANAPQANAMASABQAZABATgTIHenLQARgRACgWQADgWgOgOQgMgMgTgBQgZAAgTASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8456A1","#F1CEE2","#9455A0"],[0,0.357,1],-7,-7.2,8.1,8.5).s().p("AkdETQgRgQADgaQACgZAUgSIHdnMQAUgSAZgCQAZgBAQARQAQAQgCAaQgDAYgTATIneHMQgTASgZACIgEAAQgXAAgOgQg");
	this.shape_1.setTransform(81.6,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A670AF").s().p("ABGB+QgBgJAEgHIgLgIQgJAGgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAHgLgNQgFgHACgKQACgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAIgHAIIAHAJQAIgFAJABQAKABAFAHQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1A6CD").s().p("AgVADQABgKAJgHQAJgHAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D1A6CD").s().p("AgEAaQgLgBgGgHQgEgBgBgCIAngoQAFADAFAGQAGAIgDAKQgCAKgJAHQgJAHgJAAIgBAAg");
	this.shape_6.setTransform(126.15,18.1767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D1A6CD").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_7.setTransform(132.075,29.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D1A6CD").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.8382,23.8983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A670AF").s().p("AA9BPIgJgHQgHAGgHABQgIgBgFgFQgIgJAHgMIgJgIQgHAFgHAAQgHAAgEgFQgFgFAAgGQABgHAFgGIgHgHQgHADgGAAQgHAAgEgFQgEgFAAgGQAAgHAGgGIgIgKQgGADgFAAQgHgBgEgFQgFgFABgHQABgIAGgHIgGgLQgMAGgIgJIgCgDIAcgdQACABADACQAFAGgBAIQgBAIgHAGIAAABIAGAKQAGgCAGAAQAGAAADAFQAFAFgBAHQAAAIgGAGIAHAKQANgJAKAKQAEAGABAHQgBAFgFAGIAHAHQAFgEAGAAQAIAAAEAFQAIAJgIANIAJAIQAHgGAIABQAHAAAFAEQAIAKgGAMIAIAGQAGgGAJgBQAIAAAGAFIggAeQgIgJAGgMg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D1A6CD").s().p("AA9BPIgJgGQgHAGgHgBQgIABgFgFQgEgFAAgFQgBgHAEgFIgJgIQgHAFgHAAQgGAAgGgEQgEgGABgGQAAgHAFgGIgHgHQgHAEgGgBQgHAAgEgEQgFgGABgGQAAgGAFgHIgGgKQgGADgHAAQgGAAgEgFQgFgFABgIQABgIAGgGIgFgLQgNAFgJgJIgCgDIAOgNIAAgBIAFgFIAAAAIAKgJIAFADQAFAGgBAHQgBAJgGAFIgBAAIAGALQAOgGAIAJQAEAFAAAIQgCAIgFAFIAHAKQAGgDAGAAQAHABAFAEQAEAFgBAHQAAAGgFAFIAGAHQAGgDAHAAQAHAAAEAEQAJAKgJANIAKAIQAGgGAIAAQAIAAAFAFQAIAJgIAMIAJAHIAAgBQAHgGAIAAQAJAAAEAFIgSARIgBgBIgMANQgIgJAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#9B61A6","#AF7DB6","#C99FC9","#DEBBD9","#ECCEE3","#F2D5E6","#E4C4DE","#C297C5","#AD7DB6","#A16DAD","#9D68AA"],[0,0.067,0.145,0.22,0.278,0.318,0.38,0.588,0.765,0.91,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAjA3QA0BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9A5AA3").s().p("Ap4LUIAEgDQhIgcgUhEQgHgVAAgXIAAgSIASgSQgHA9AjAsQAaAgAtAVIULz7QhPgngmhSQgMgZgHgbIgEgXIAYgZQACAbAaAyQArBOBKAmIAbgbIAYAKQAaAKAIAAIgeAcQAOAEANACIgeAbIgZgGI0xTuQARAGAMACIgQAPIgfgGIgJAIIivA7g");
	this.shape_12.setTransform(80.975,84.55);

	this.instance_1 = new lib.Path_6_2();
	this.instance_1.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A670AF").s().p("Ar6KvQgKgYgCgcIABgXIUv1yQAGB/BsA/QA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_13.setTransform(85.55,79.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A670AF").s().p("AhxBlIgBgKIBUjQICRCrIjPBAQgQgFgFgMg");
	this.shape_14.setTransform(11.475,152.65);

	this.instance_2 = new lib.Mesh_3();
	this.instance_2.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.instance = new lib.Path_3();
	this.instance.setTransform(151.85,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82A64B").s().p("AkiEbQgTgUADgdQADgcAVgVIHbnNQAYgYAgABQAYAAASARQASATgCAdQgDAcgWAVInaHOQgYAXggAAQgagBgQgQgADMkJInbHOQgRAQgCAXQgCAVAOAOQALAMATABQAZAAAUgSIHanOQASgRACgWQACgVgOgPQgMgMgTgBQgZAAgTATg");
	this.shape.setTransform(81.4694,89.073);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9D046").s().p("ABGB+QgBgJAEgHIgMgJQgJAHgKgBQgLAAgFgIQgFgGAAgIQABgHAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgHIgIgKQgIAFgJgCQgJgBgFgGQgGgHACgJQABgJAHgIIgIgNQgIADgIgBQgIgCgFgGQgGgHACgKQACgLAJgHIgHgPQgQAGgKgMIgCgEIAlgnQAEACAFAGQAGAIgCAKQgDALgJAHIAAAAIAGAPQAIgDAIABQAIACAEAGQAGAHgCAKQgCAKgIAHIAIANQAJgEAIACQAJABAFAGQAFAHgBAJQgBAIgHAIIAHAJQAIgFAJABQAJABAFAHQAFAGAAAIQgBAJgFAHIAKAKQAJgGALAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgZAXQgEgGAAgIg");
	this.shape_1.setTransform(134.475,30.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAE850").s().p("AgVARQgGgHACgKQACgKAJgHQAKgIAJAAQALABAGAHQAGAJgCAJQgCAKgKAHQgJAIgJAAQgLgBgGgIg");
	this.shape_2.setTransform(135.525,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAE850").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(139.975,37.9233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAE850").s().p("AgVAEQABgLAJgGQAJgIAJAAQAJAAAGAIIgnAjQgGgIACgKg");
	this.shape_4.setTransform(144.41,41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAE850").s().p("AgVASIgDgCQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAogoIAIAJQAGAIgCAJQgCALgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_5.setTransform(126.025,18.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAE850").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgDAKgJAHQgJAHgJAAQgLAAgGgIg");
	this.shape_6.setTransform(131.9632,29.1233);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAE850").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAIgCAJQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_7.setTransform(128.7149,23.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9D046").s().p("AA+BOIgJgGQgHAGgHAAQgIABgFgGQgJgJAIgNIgKgHQgGAFgIAAQgGAAgFgFQgEgFAAgHQAAgGAFgGIgHgHQgGAEgHAAQgHgBgEgFQgFgEABgHQAAgGAFgHIgHgKQgGADgGAAQgGAAgEgFQgFgFABgIQABgIAGgGIgGgKQgNAEgIgIIgCgDIATgUIAAAAIAJgJIAFADQAFAFgBAJQgBAIgGAFIgBABIAGAKQAOgGAIAJQAFAGgBAHQgBAHgFAHIAHAJQAGgDAGAAQAHAAAEAFQAFAFgBAGQAAAHgFAFIAHAHQAFgEAHAAQAHAAAEAFQAJAKgIANIAJAHQAGgGAIAAQAIAAAFAFQAIAJgHAMIAJAHIAAgBQAGgGAJAAQAIgBAFAFIgfAfQgIgKAGgMg");
	this.shape_8.setTransform(27.625,137.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAE850").s().p("AA+BOIgJgGQgHAGgHABQgIgBgFgFQgJgJAIgMIgKgIQgGAFgIABQgGgBgFgFQgEgEAAgHQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgFQgFgFABgHQAAgGAGgGIgIgKQgOAHgIgKQgFgFABgHQABgJAGgGIgGgLQgNAGgIgIIgCgEIANgNIgBgBIAHgGIAAAAIAJgJIAFAEQAFAFgBAIQgBAIgGAGIgBAAIAGALQANgHAJAJQAFAGgBAIQgBAHgFAGIAHAJQAGgDAGAAQAHAAAEAFQAFAFgBAHQAAAGgFAGIAHAHQAFgFAHAAQAHAAAEAGQAJAJgIAMIAJAIQAGgGAIAAQAIAAAFAFQAIAJgHANIAJAFQAHgFAIgBQAIAAAFAFIggAdQgHgJAGgMg");
	this.shape_9.setTransform(28.125,136.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#D4E276","#F9F076","#DAE582"],[0,0.271,1],-7,-7.2,8.2,8.3).s().p("AkaEXQgRgRADgZQACgZATgTIHYnRQATgTAagCQAZgCAQARQAQAQgCAaQgCAZgTATInYHRQgTATgaACIgEAAQgXAAgOgPg");
	this.shape_10.setTransform(81.4697,89.0704);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B4D343","#F7F192","#E8EA82","#D3E169","#C3DA56","#B7D54B","#B0D246","#AED145"],[0,0.255,0.325,0.447,0.573,0.706,0.839,0.996],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISZzUQADBHAjA3QA0BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.7,82.175);

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(80.85,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(8.4,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A9D046").s().p("Ar6KvQgKgYgBgcIABgXIUu1yQAGB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.425,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A9D046").s().p("AhxBmIgBgKIBRjSICUCqIjOBDQgRgFgFgMg");
	this.shape_13.setTransform(11.45,152.75);

	this.instance_3 = new lib.Mesh_2();
	this.instance_3.setTransform(139.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.5,164.7);


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
	this.instance = new lib.Path_17();
	this.instance.setTransform(182.4,15.45,1.2,1.2,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj6ErQgagBgPgRQgTgTADgdQADgdAVgUIHenLQAYgYAfABQAaABAQARQATATgDAdQgDAcgWAVIndHLQgXAXgeAAIgDAAgADOkIIneHLQgRARgCAWQgDAWAOAOQAMANATAAQAZABATgTIHdnLQASgRACgWQADgWgOgOQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(97.8987,106.8878,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgQgQADgZQACgaAUgTIHdnKQAUgTAZgCQAZgBAQAQQAQARgCAZQgCAagUATIndHKQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(97.8918,106.8876,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgMgJQgJAGgKAAQgKgBgGgHQgKgNALgQIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAHgHIgIgOQgTAHgKgNQgGgHACgKQADgLAIgHIgHgPQgQAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgDAKgJAHIAAAAIAGAPQAIgDAIABQAIACAEAGQAGAHgCAKQgBAKgJAHIAIANQAJgEAIACQAJABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAJACAGAGQAEAGAAAIQgBAJgFAHIAKAKQAJgGALAAQAKABAGAHQAKANgLAQIALAIIAAAAQAJgHAKAAQAKAAAGAHIgpAmQgEgGAAgIg");
	this.shape_2.setTransform(161.4986,36.2679,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(162.7586,40.4659,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_4.setTransform(168.0986,45.5079,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgGQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgLg");
	this.shape_5.setTransform(173.4205,49.586,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgCIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLAAgGgIg");
	this.shape_6.setTransform(151.3727,21.838,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_7.setTransform(158.4986,34.9759,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAJgIQAKgHAJABQALAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(154.5986,28.676,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgGAGgIABQgIAAgFgGQgIgJAHgMIgJgIQgHAFgHAAQgHAAgEgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgGQgFgFABgGQAAgHAGgGIgIgKQgGADgGAAQgGgBgEgEQgFgFABgIQABgJAGgGIgGgKQgMAFgIgJIgCgDIAcgdIAFADQAFAGgBAJQgBAHgHAGIAAAAIAGALQAGgCAGAAQAGABAEAEQAEAGAAAHQgBAHgGAGIAHAKQAGgEAHAAQAGABAEAEQAFAFgBAHQAAAHgFAFIAHAHQAOgJAJALQAJAIgIANIAIAIQAHgGAIAAQAHABAFAFQAJAJgIAMIAJAGQAHgGAIgBQAIAAAFAGIgfAdQgIgIAGgNg");
	this.shape_9.setTransform(33.2789,164.8176,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgEgFAAgGQAAgGADgFIgJgIQgHAGgHAAQgGAAgFgGQgFgFABgGQAAgHAFgFIgHgIQgOAJgKgKQgFgFABgHQABgHAFgFIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgIgIIgDgEIAOgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAGgBAHQgBAIgGAHIgBAAIAGAKQAGgCAGABQAGAAAEAEQAFAGgBAHQgBAIgGAFIAHAKQAGgEAHABQAGAAAEAFQAFAFgBAHQAAAGgFAFIAHAHQAFgDAHAAQAHAAAEAEQAJAKgIANIAIAHQAHgFAIAAQAIgBAFAGQADAEABAGQAAAGgEAGIAJAFIAAAAQAHgGAIAAQAJAAAFAFIgNALIAAAAIgGAGIAAgBIgOAMQgHgJAGgLg");
	this.shape_10.setTransform(33.8789,164.2176,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJwQgYgqgCg2ISYzUQAEBHAjA3QAzBSBxAbIzVSeQhQgWgkg/g");
	this.shape_11.setTransform(99.3987,98.6078,1.2,1.2);

	this.instance_1 = new lib.Path_5_7();
	this.instance_1.setTransform(97.15,101.5,1.2,1.2,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_12();
	this.instance_2.setTransform(10.25,182.5,1.2,1.2,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsBAQA2AgA0AGI12U4QhrgRgfhPg");
	this.shape_12.setTransform(102.6387,95.5478,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjQICRCrIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(13.7789,183.2076,1.2,1.2);

	this.instance_3 = new lib.Mesh_14();
	this.instance_3.setTransform(167.45,0,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AzYNGMAgeggfIGUGUMggfAgeg");
	this.shape_14.setTransform(98.4,104.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.7,-19.7,248.29999999999998,248.29999999999998);


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
	this.instance = new lib.Path_18();
	this.instance.setTransform(182.4,15.4,1.2,1.2,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj6ErQgZgBgQgRQgTgTADgdQADgdAVgVIHenKQAYgYAfABQAaABAQARQATATgDAcQgDAdgWAWIndHKQgXAXgeAAIgDAAgADOkHIneHKQgRARgCAWQgDAWAOAOQAMAMATABQAZAAATgTIHdnKQASgRACgWQADgWgOgOQgMgMgTgBIgBAAQgYAAgTATg");
	this.shape.setTransform(97.8987,106.8383,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,39.8).s().p("AkeEUQgQgSADgZQACgYAUgUIHdnLQAUgSAZgCQAZgCAQARQAQASgCAYQgCAagUASIndHLQgUATgZACIgEAAQgXAAgPgPg");
	this.shape_1.setTransform(97.8918,106.8383,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF00FF").s().p("ABGB+QgBgIAEgIIgMgJQgJAHgKgBQgKAAgGgIQgFgGAAgHQABgIAFgHIgLgLQgJAHgJgCQgKAAgGgHQgFgHABgJQABgJAHgIIgIgJQgIAFgJgCQgJAAgFgIQgGgGACgJQABgKAHgGIgIgOQgSAHgLgMQgGgIACgKQADgLAIgHIgHgPQgQAHgKgNIgCgEIAlgnQAGAEADAFQAGAHgCALQgDAKgJAHIAAABIAGAOQAIgDAIACQAIABAEAGQAGAHgCAKQgBAKgJAIIAIAMQAJgDAIABQAJABAFAHQAFAGgBAJQgBAJgHAGIAHAKQAIgFAJABQAJABAGAHQAEAHAAAHQgBAIgFAIIAKAKQAJgHALABQAKABAGAHQAKAMgLARIALAJIAAgBQAJgHAKAAQAKAAAGAIIgPANIAAABIgBAAIgZAXQgEgGAAgIg");
	this.shape_2.setTransform(161.4986,36.2185,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_3.setTransform(162.7586,40.4165,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgLAKgGQAJgIAKABQAKAAAGAIQAGAIgCAJQgCAKgKAIQgJAGgJABQgLgBgGgIg");
	this.shape_4.setTransform(168.0986,45.4585,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgKg");
	this.shape_5.setTransform(173.4205,49.5366,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVARQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgIg");
	this.shape_6.setTransform(151.3727,21.7886,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(158.4986,34.9265,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(154.5986,28.6265,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgGQgGAFgIAAQgIABgFgGQgIgJAHgNIgJgHQgGAFgIAAQgHAAgEgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHgBQgHAAgEgFQgFgFABgGQAAgHAGgGIgIgKQgNAHgJgJQgFgGABgIQABgHAGgGIgGgLQgMAFgIgJIgCgDIAcgdIAFAEQAFAFgBAIQgBAIgHAGIAGALQANgGAJAJQAEAFAAAIQgBAHgGAGIAHAKQAGgEAHABQAGAAAEAFQAFAFgBAGQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAIAKgHANIAIAHQAHgFAIgBQAHAAAFAGQAJAIgIANIAJAGIAAAAQAHgGAIAAQAIgBAFAGIgfAdQgIgJAGgMg");
	this.shape_9.setTransform(33.2789,164.7682,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgKAHgMIgJgIQgGAGgIAAQgGAAgFgGQgFgEABgHQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgFQgFgFABgHQABgGAFgGIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgIgIIgDgEIAOgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAFgBAJQgBAIgGAGIgBAAIAGAKQAGgCAGAAQAGABAEAEQAFAFgBAIQgBAIgGAGIAHAJQAGgDAHAAQAGABAEAEQAFAFgBAHQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAJgIANIAIAIQAHgGAIAAQAIAAAFAFQAIAJgIANIAJAFQAHgGAIAAQAIgBAGAGIgNALIAAAAIgUASQgHgKAGgLg");
	this.shape_10.setTransform(33.8789,164.1682,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,91.7).s().p("AqXJwQgYgqgCg2ISYzUQAEBHAjA3QAzBSBxAcIzVSdQhQgWgkg/g");
	this.shape_11.setTransform(99.3987,98.5584,1.2,1.2);

	this.instance_1 = new lib.Path_5_8();
	this.instance_1.setTransform(97.15,101.45,1.2,1.2,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_13();
	this.instance_2.setTransform(10.25,182.55,1.2,1.2,0,0,0,8.1,11.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#99FF00").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(102.6387,95.5284,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#00FF00","#000000"],[0,1],0,0,0,0,0,15.5).s().p("AhxBmIgBgKIBUjRICRCrIjPBBQgQgHgFgKg");
	this.shape_13.setTransform(13.7789,183.1582,1.2,1.2);

	this.instance_3 = new lib.Mesh_15();
	this.instance_3.setTransform(167.45,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.7,197.4);


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
	this.instance = new lib.Path_19();
	this.instance.setTransform(182.4,15.4,1.2,1.2,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj6ErQgZgBgQgRQgTgTADgeQADgcAVgUIHenLQAYgYAfABQAaABAQARQATATgDAdQgDAcgWAVIndHLQgXAXgeAAIgDAAgADOkIIneHLQgRARgCAWQgDAWAOAOQAMAMATABQAZAAATgTIHdnKQASgRACgWQADgWgOgOQgMgMgTgBIgBAAQgYAAgTASg");
	this.shape.setTransform(97.8987,106.849,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.5).s().p("AkeETQgQgRADgYQACgaAUgSIHdnLQAUgUAZgBQAZgBAQAQQAQARgCAaQgCAZgUATIndHLQgUASgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(97.8918,106.849,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgJAEgHIgMgJQgJAHgKAAQgKgBgGgHQgFgHAAgIQABgHAFgHIgLgLQgJAGgJgBQgKAAgGgIQgFgGABgKQABgIAHgHIgIgJQgIAEgJgBQgJgBgFgIQgGgGACgJQABgJAHgIIgIgNQgSAIgLgOQgGgHACgLQADgKAIgHIgHgOQgQAFgKgMIgCgEIAlgnQAGAFADADQAGAIgCAKQgDALgJAHIAAAAIAGAPQAIgDAIACQAIABAEAGQAGAHgCAKQgBAKgJAHIAIAOQAJgFAIABQAJACAFAGQAFAHgBAKQgBAHgHAIIAHAJQAIgFAJABQAJABAGAHQAEAGAAAJQgBAHgFAIIAKAKQAJgGALAAQAKABAGAHQAKAMgLARIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIAAAAIgBAAIgZAXQgEgGAAgIg");
	this.shape_2.setTransform(161.4986,36.2292,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_3.setTransform(162.7586,40.4272,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgKAKgIQAJgGAKgBQAKABAGAHQAGAJgCAJQgCALgKAGQgJAIgJgBQgLAAgGgIg");
	this.shape_4.setTransform(168.0986,45.4691,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgKg");
	this.shape_5.setTransform(173.4205,49.5473,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVARQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgIg");
	this.shape_6.setTransform(151.3727,21.7992,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(158.4986,34.9372,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(154.5986,28.6372,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgGQgHAFgHAAQgIAAgFgFQgIgJAHgNIgJgHQgGAFgIAAQgHAAgEgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHgBQgHAAgEgFQgFgFABgGQAAgHAGgGIgIgKQgNAHgJgJQgFgGABgIQABgHAGgGIgGgLQgMAFgIgJIgCgDIAcgdIAFAEQAFAFgBAIQgBAIgHAGIAGALQANgGAJAJQAEAFAAAIQgBAHgGAGIAHAKQAGgEAHABQAGAAAEAFQAFAFgBAGQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAIAKgHANIAIAHQAHgFAIgBQAHAAAFAGQAJAIgIANIAJAGIAAAAQAHgGAIAAQAIgBAFAGIgfAdQgIgJAGgMg");
	this.shape_9.setTransform(33.2789,164.7788,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgKAHgMIgJgIQgGAGgIAAQgGAAgFgGQgFgEABgHQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgFQgFgFABgHQABgGAFgGIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgIgIIgDgEIAOgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAFgBAJQgBAIgGAGIgBAAIAGAKQAGgCAGAAQAGABAEAEQAFAFgBAIQgBAIgGAGIAHAJQAGgDAHAAQAGABAEAEQAFAFgBAHQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAJgIANIAIAIQAHgGAIAAQAIAAAFAFQAIAJgIANIAJAFQAHgGAIAAQAIgBAGAGIgNALIAAAAIgUASQgHgKAGgLg");
	this.shape_10.setTransform(33.8789,164.1788,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgqgCg1ISYzVQAEBHAjA4QAzBSBxAbIzVSfQhQgXgkhAg");
	this.shape_11.setTransform(99.3987,98.569,1.2,1.2);

	this.instance_1 = new lib.Path_5_9();
	this.instance_1.setTransform(97.15,101.45,1.2,1.2,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_14();
	this.instance_2.setTransform(10.25,182.45,1.2,1.2,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(102.6387,95.539,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBmIgBgLIBUjRICRCsIjPBAQgQgGgFgKg");
	this.shape_13.setTransform(13.7789,183.1688,1.2,1.2);

	this.instance_3 = new lib.Mesh_16();
	this.instance_3.setTransform(167.45,0,1.2,1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(1,1,1).p("AlzF8IlwAAIAAr3IRnAAALkCtIAADPIjPAA");
	this.shape_14.setTransform(85.35,65.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Aw4J1IIzo0IL3r2IGDmDIHEHEInnHnIjPDOIv3P4g");
	this.shape_15.setTransform(99.95,97.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-10.8,216.2,216.20000000000002);


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
	this.b6 = new lib.Symbol17();
	this.b6.name = "b6";
	this.b6.setTransform(82.8,82.3,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.Symbol17(), 3);

	this.instance = new lib.Path_0();
	this.instance.setTransform(152,12.9,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgcAWgVIHdnLQAZgYAfABQAaABAPARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAWANAOQANANASAAQAZABATgTIHenLQARgRACgWQADgVgOgPQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.594,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkdEUQgQgRACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARARQAQAQgDAZQgDAagTATIneHKQgTATgZACIgEAAQgXAAgOgPg");
	this.shape_1.setTransform(81.6,89.0752);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgLgJQgJAGgLAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgIAEgIgCQgIgBgFgHQgFgHACgKQACgLAIgHIgGgOQgSAFgJgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAAABIAHAOQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAKQgBAIgHAHIAIAJQAHgFAJABQAKACAFAGQAKAOgMAQIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAIIgoAlQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_3.setTransform(135.6483,33.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQADgLAJgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_4.setTransform(140.0882,37.9483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgnAkQgGgIABgKg");
	this.shape_5.setTransform(144.5429,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVARIgDgBQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAngoQAEACAFAHQAHAIgCAJQgDALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_6.setTransform(126.15,18.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgLAKgGQAJgIAKABQAKAAAGAIQAGAIgCAJQgCAKgKAIQgJAGgJABQgLgBgGgIg");
	this.shape_7.setTransform(132.075,29.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(128.8382,23.9233);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgGAGgIABQgIAAgFgGQgJgJAIgMIgJgIQgGAGgIgBQgHABgFgGQgDgEAAgHQAAgHAEgGIgGgHQgGAEgHAAQgHAAgEgGQgEgFAAgGQABgHAEgGIgHgKQgNAHgJgJQgFgFABgIQABgJAGgGIgGgKQgMAFgJgJIgBgDIASgUIAAABIAJgKIAGADQAFAGgBAJQgBAHgHAGIAAAAIAGALQAGgCAFAAQAHABADAEQAFAFAAAIQgCAHgFAHIAHAJQAGgDAGAAQAHAAAEAFQAFAFAAAGQgBAGgFAHIAHAHQAFgFAGAAQAIAAAEAGQAIAIgHAOIAJAHQAGgFAIgBQAHABAGAFQAHAJgGAMIAIAGQAHgGAIgBQAIAAAGAGIggAdQgIgIAGgNg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgJAHgNIgJgIQgGAGgIAAQgHAAgEgGQgFgFAAgGQABgHAFgFIgHgIQgGAEgHAAQgHAAgEgFQgEgFAAgHQAAgHAFgFIgGgKQgHADgGgBQgGgBgEgEQgFgFABgIQABgIAHgGIgHgLQgNAGgHgJIgDgDIAOgOIAAgBIAFgGIAAABIAKgKIAFAEQAFAGgBAIQgBAIgGAGIgBAAIAGAKQAOgFAIAIQAEAGgBAIQgBAHgFAFIAHAKQAGgEAHABQAHAAAEAFQAEAFgBAHQAAAGgFAFIAGAHQAGgDAHAAQAHAAAEAFQAJAJgJANIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIANIAJAFIAAAAQAHgGAIAAQAJgBAEAGIgMALIAAABIgGAFIgBAAIgMALQgIgIAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgqgCg1ISZzVQADBIAjA3QAzBRBxAdIzVSdQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.2);

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_0();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgWIUu1zQAGB/BsA/QA2AgA1AHI14U4QhqgRgfhPg");
	this.shape_12.setTransform(85.55,79.65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCrIjOBCQgRgHgFgLg");
	this.shape_13.setTransform(11.475,152.7);

	this.instance_3 = new lib.Mesh_0();
	this.instance_3.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b6}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.6);


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
	this.b3 = new lib.Symbol10();
	this.b3.name = "b3";
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.instance = new lib.Path_15();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZAAAQASQATATgDAdQgCAcgWAVIneHLQgYAXgdAAIgCAAgADOkIIndHLQgSAQgCAXQgCAVANAPQANAMASABQAZABATgTIHenLQARgRACgWQADgWgOgOQgMgMgTgBQgZAAgTASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgPgQACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARAQQAQARgDAZQgDAZgTATIndHLQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.0748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgIIgLgIQgKAGgKAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgIQgFgGABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAHgLgNQgGgHACgKQADgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAKACAFAGQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgHQAJgHAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgEAaQgLgBgGgHIgDgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoQAEADAFAGQAGAIgDAKQgCAKgJAHQgJAHgIAAIgCAAg");
	this.shape_6.setTransform(126.1368,18.1767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_7.setTransform(132.075,29.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.8382,23.8983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgHAGgHABQgIgBgFgFQgJgJAIgMIgJgIQgGAFgIAAQgHAAgFgFQgEgFABgGQAAgHAEgGIgGgHQgGADgHAAQgHAAgEgFQgFgFABgGQABgHAEgGIgHgKQgGADgFAAQgHgBgEgFQgFgFABgHQABgIAGgHIgGgLQgMAGgJgIIgBgEIAbgdQADABADACQAFAGgBAIQgBAIgHAGIAAABIAGAKQAGgCAFAAQAHAAADAFQAGAFgBAHQgBAIgGAGIAHAKQAOgJAJAKQAFAGgBAHQgBAFgEAGIAHAHQANgJAKALQAIAIgHANIAJAIQAGgGAIABQAHAAAGAEQADAEAAAGQABAHgEAFIAJAGQAGgGAJgBQAIAAAFAFIgfAeQgIgJAGgMg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgHAGgHgBQgIABgFgFQgEgFAAgFQAAgHADgFIgJgIQgGAFgIAAQgHAAgEgEQgFgGAAgGQABgHAFgGIgHgHQgGAEgHgBQgHAAgEgEQgFgFABgHQABgGAFgHIgIgKQgGADgFAAQgHAAgEgFQgFgFABgIQABgIAHgGIgHgLQgNAFgHgJIgCgDIAMgNIAAgBIAHgFIAAAAIAJgJIAFADQAFAGgBAHQgBAJgGAFIgBAAIAGALQANgGAJAJQAEAFgBAIQgBAIgFAFIAHAKQAGgDAHAAQAGABAFAEQAEAFgBAGQAAAGgFAGIAHAHQAFgDAGAAQAHAAAFAEQAIAJgIAOIAJAIQAHgGAIgBQAIABAEAFQAJAJgIAMIAJAHIAAgBQAHgFAIgBQAIAAAGAFIgTARIgBgBIgNANQgHgJAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAiA3QA1BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.instance_1 = new lib.Path_5_5();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_10();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsA/QA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCsIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.65);

	this.instance_3 = new lib.Mesh_12();
	this.instance_3.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b3}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.b4 = new lib.Symbol13();
	this.b4.name = "b4";
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.instance = new lib.Path_14();
	this.instance.setTransform(152,12.9,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgbgBgPgRQgTgTADgdQADgdAWgUIHdnLQAYgYAgABQAZABAQARQATATgDAdQgCAcgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgCAVANAPQANANASAAQAZABATgTIHenLQARgRACgWQADgWgOgOQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(81.575,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgPgQACgZQACgaAUgTIHdnKQAUgTAZgCQAZgBARAQQAQARgDAZQgDAagTATIndHKQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.0748);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgLgJQgKAGgKAAQgKgBgGgHQgFgGABgIQAAgIAFgHIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgHIgJgOQgSAIgLgOQgGgHACgKQADgLAIgHIgGgPQgRAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgCAKgKAHIAHAPQARgHALANQAFAHgCAKQgBAKgJAHIAJANQAIgEAJACQAIABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAKACAFAGQAFAGgBAIQgBAIgFAIIALAKQAJgGAKAAQAKABAGAHQAFAGgBAIQAAAIgFAHIALAIIAAAAQAJgHAKAAQAKAAAGAHIgoAmQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7233);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_4.setTransform(140.0882,37.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgGQAJgIAJAAQAKAAAGAHIgoAkQgGgIACgLg");
	this.shape_5.setTransform(144.535,41.3234);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIAogoQAEADAFAGQAGAIgDAKQgCAKgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_6.setTransform(126.1368,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_7.setTransform(132.075,29.1483);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAKgIQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgKAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(128.8382,23.8983);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BOIgJgFQgHAFgHAAQgIABgFgFQgJgKAIgNIgJgHQgGAFgIAAQgHAAgFgFQgEgFABgHQAAgGAEgGIgGgHQgGAEgHgBQgHAAgEgEQgFgFABgHQABgHAEgGIgHgKQgGADgFgBQgHAAgEgEQgFgGABgIQABgHAGgGIgGgLQgMAFgJgJIgBgDIAbgdQADABADADQAFAFgBAIQgBAJgHAFIAAAAIAGALQAGgDAFABQAHAAADAFQAGAFgBAIQgBAHgGAGIAHAKQAGgDAGAAQAHAAAEAFQAFAEgBAHQgBAGgEAGIAHAHQANgJAKAKQAIAJgHAOIAJAHQAGgFAIgBQAHAAAGAGQAHAJgHAMIAJAGQAGgGAJAAQAIgBAFAFIgfAeQgIgIAGgOg");
	this.shape_9.setTransform(27.75,137.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgHAFgHABQgIAAgFgGQgEgDAAgHQAAgFADgGIgJgIQgGAFgIABQgHgBgEgFQgFgEAAgHQABgHAFgGIgHgHQgGAEgHAAQgHgBgEgEQgFgFABgHQABgHAFgFIgIgLQgGAEgFgBQgHgBgEgEQgFgFABgIQABgIAHgGIgHgLQgMAGgIgJIgCgEIAMgNIAAgBIAHgGIAAABIAJgJIAFADQAFAFgBAJQgBAHgGAGIgBAAIAGAMQAGgDAGAAQAGABAEAFQAEAEgBAIQgBAHgFAHIAHAJQAGgDAHAAQAGAAAFAFQAEAFgBAHQAAAGgFAGIAHAHQAFgFAGAAQAHABAFAFQAIAIgIAOIAJAHQAHgFAIAAQAIAAAEAFQAJAJgIAMIAJAGIAAAAQAHgGAIAAQAIAAAGAFIgTARIgBAAIgNALQgHgIAGgMg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgpgCg2ISYzVQAEBIAiA2QA1BTBwAbIzVSfQhQgXgkhAg");
	this.shape_11.setTransform(82.85,82.2);

	this.instance_1 = new lib.Path_5_4();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_9();
	this.instance_2.setTransform(8.55,152.1,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsBAQA2AgA0AGI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjRICRCrIjPBBQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.7);

	this.instance_3 = new lib.Mesh_11();
	this.instance_3.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b4}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.6);


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
	this.b5 = new lib.Symbol14();
	this.b5.name = "b5";
	this.b5.setTransform(82.8,82.3,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.Symbol14(), 3);

	this.instance = new lib.Path_16();
	this.instance.setTransform(152,12.85,1,1,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj5ErQgagBgQgRQgTgTADgeQADgcAWgUIHdnLQAYgYAgABQAZABAQARQATATgDAcQgCAdgWAVIneHLQgXAXgeAAIgCAAgADOkIIndHLQgSARgCAWQgDAWAOAOQANAMASABQAYABAUgTIHenLQARgQACgXQADgVgOgPQgMgMgTgBIgBAAQgYAAgTASg");
	this.shape.setTransform(81.575,89.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.5).s().p("AkeETQgPgQACgaQACgZAUgTIHdnLQAUgSAZgCQAZgCARASQAQARgDAYQgDAZgTATIndHLQgUAUgZABIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(81.6,89.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgJAEgGIgLgJQgKAGgKgBQgKAAgGgHQgFgGABgJQAAgHAFgHIgLgLQgJAHgJgBQgKgBgGgHQgFgHABgJQABgJAHgIIgIgJQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAIgIIgJgNQgSAIgLgNQgGgIACgKQADgLAIgHIgGgPQgRAHgKgNIgCgEIAlgnQAEADAFAGQAGAHgCALQgCALgKAGIAAABIAHAOQARgGALAMQAFAHgCAKQgBAKgJAIIAJAMQAIgDAJAAQAIACAFAGQAFAHgBAKQgBAHgHAIIAHAJQAIgFAJABQAKABAFAHQAFAGgBAJQgBAHgFAIIALAKQAJgHAKACQAKAAAGAIQAFAGgBAHQAAAIgFAHIALAJIAAgBQAJgHAKAAQAKAAAGAIIgPAOIgBAAIgYAXQgFgGAAgIg");
	this.shape_2.setTransform(134.575,30.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAKgIQAJgGAKAAQAKAAAGAHQAGAIgCAKQgCALgJAGQgKAIgJgBQgLAAgGgIg");
	this.shape_3.setTransform(135.6382,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgJAHQgKAHgJAAQgLAAgGgIg");
	this.shape_4.setTransform(140.0882,37.9233);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAKAAAGAHIgoAkQgGgIACgKg");
	this.shape_5.setTransform(144.535,41.2984);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASIgDgCQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoQAFAEAEAFQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgHg");
	this.shape_6.setTransform(126.1368,18.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(132.075,29.1233);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgJAHQgJAGgJAAIgBAAg");
	this.shape_8.setTransform(128.8382,23.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgGQgHAFgHAAQgIABgFgGQgEgEAAgGQgBgGAEgFIgJgIQgGAFgIAAQgHAAgFgFQgEgFABgGQAAgHAEgGIgGgHQgGAEgHgBQgHAAgEgFQgFgEABgHQABgHAEgGIgHgKQgGADgFAAQgHgBgEgEQgFgFABgIQABgIAGgGIgGgLQgMAFgJgJIgBgDIAbgdIAGAEQAFAFgBAIQgBAIgHAGIAAAAIAGALQAGgDAFABQAHABADAEQAGAFgBAIQgBAHgGAGIAHAKQAGgEAGABQAHAAAEAFQAFAFgBAGQgBAGgEAGIAHAHQAFgEAGAAQAIAAAEAFQAIAJgHAOIAJAHQAGgFAIgBQAHAAAGAGQAHAJgHAMIAJAGIAAAAQAHgGAIAAQAJAAAEAFIgfAdQgIgJAGgMg");
	this.shape_9.setTransform(27.75,137.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BOIgJgFQgHAFgHAAQgIAAgFgEQgIgKAHgNIgJgHQgGAFgIAAQgHAAgEgFQgFgEAAgHQABgHAFgGIgHgHQgGAEgHgBQgHAAgEgEQgFgGABgGQABgHAFgGIgIgJQgNAGgJgJQgFgFABgJQABgHAHgGIgHgLQgNAFgHgJIgCgDIAMgOIAAAAIAHgGIAAAAIAJgJQADABACADQAFAGgBAHQgBAIgGAHIgBAAIAGAKQANgGAJAJQAEAFgBAIQgBAIgFAFIAHAKQAGgDAHAAQAGABAFAEQAEAFgBAHQAAAFgFAGIAHAHQAFgDAGAAQAHAAAFAEQAIAKgIANIAJAIQAHgGAIAAQAIAAAEAEQAJAKgIANIAJAGIAAgBQAGgGAJAAQAIgBAGAFIgTARIgBAAIgNANQgHgJAGgNg");
	this.shape_10.setTransform(28.25,136.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJvQgYgqgCg1ISYzUQAEBHAiA3QA1BSBwAbIzVSeQhQgWgkhAg");
	this.shape_11.setTransform(82.85,82.175);

	this.instance_1 = new lib.Path_5_6();
	this.instance_1.setTransform(81,84.55,1,1,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_11();
	this.instance_2.setTransform(8.55,152.05,1,1,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(85.525,79.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjQICRCrIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(11.475,152.65);

	this.instance_3 = new lib.Mesh_13();
	this.instance_3.setTransform(139.55,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b5}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.6,164.5);


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
	this.frame_1 = function() {
		/* stop();*/
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.b2 = new lib.Symbol3();
	this.b2.name = "b2";
	this.b2.setTransform(99.3,98.7,1,1,0,0,0,99.3,98.7);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.instance = new lib.Path_17();
	this.instance.setTransform(182.4,15.45,1.2,1.2,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj6ErQgagBgPgRQgTgTADgdQADgdAVgUIHenLQAYgYAfABQAaABAQARQATATgDAdQgDAcgWAVIndHLQgXAXgeAAIgDAAgADOkIIneHLQgRARgCAWQgDAWAOAOQAMANATAAQAZABATgTIHdnLQASgRACgWQADgWgOgOQgMgNgTAAIgCAAQgYAAgSASg");
	this.shape.setTransform(97.8987,106.8878,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.4).s().p("AkeETQgQgQADgZQACgaAUgTIHdnKQAUgTAZgCQAZgBAQAQQAQARgCAZQgCAagUATIndHKQgUATgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(97.8918,106.8876,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgIAEgHIgMgJQgJAGgKAAQgKgBgGgHQgKgNALgQIgLgLQgJAGgJAAQgKgBgGgHQgFgHABgJQABgJAHgHIgIgKQgIAFgJgBQgJgCgFgGQgGgHACgJQABgJAHgHIgIgOQgTAHgKgNQgGgHACgKQADgLAIgHIgHgPQgQAGgKgMIgCgEIAlgnIAJAIQAGAIgCALQgDAKgJAHIAAAAIAGAPQAIgDAIABQAIACAEAGQAGAHgCAKQgBAKgJAHIAIANQAJgEAIACQAJABAFAGQAFAHgBAJQgBAJgHAHIAHAJQAIgFAJABQAJACAGAGQAEAGAAAIQgBAJgFAHIAKAKQAJgGALAAQAKABAGAHQAKANgLAQIALAIIAAAAQAJgHAKAAQAKAAAGAHIgpAmQgEgGAAgIg");
	this.shape_2.setTransform(161.4986,36.2679,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_3.setTransform(162.7586,40.4659,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgEAZQgLAAgGgIQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAHgCAKQgCALgKAHQgIAGgJAAIgBAAg");
	this.shape_4.setTransform(168.0986,45.5079,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVADQABgKAJgGQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgLg");
	this.shape_5.setTransform(173.4205,49.586,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVASQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgCgCIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLAAgGgIg");
	this.shape_6.setTransform(151.3727,21.838,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_7.setTransform(158.4986,34.9759,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgHACgKQACgKAJgIQAKgHAJABQALAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_8.setTransform(154.5986,28.676,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("AA9BPIgJgHQgGAGgIABQgIAAgFgGQgIgJAHgMIgJgIQgHAFgHAAQgHAAgEgFQgFgFABgGQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgGQgFgFABgGQAAgHAGgGIgIgKQgGADgGAAQgGgBgEgEQgFgFABgIQABgJAGgGIgGgKQgMAFgIgJIgCgDIAcgdIAFADQAFAGgBAJQgBAHgHAGIAAAAIAGALQAGgCAGAAQAGABAEAEQAEAGAAAHQgBAHgGAGIAHAKQAGgEAHAAQAGABAEAEQAFAFgBAHQAAAHgFAFIAHAHQAOgJAJALQAJAIgIANIAIAIQAHgGAIAAQAHABAFAFQAJAJgIAMIAJAGQAHgGAIgBQAIAAAFAGIgfAdQgIgIAGgNg");
	this.shape_9.setTransform(33.2789,164.8176,1.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgEgFAAgGQAAgGADgFIgJgIQgHAGgHAAQgGAAgFgGQgFgFABgGQAAgHAFgFIgHgIQgOAJgKgKQgFgFABgHQABgHAFgFIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgIgIIgDgEIAOgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAGgBAHQgBAIgGAHIgBAAIAGAKQAGgCAGABQAGAAAEAEQAFAGgBAHQgBAIgGAFIAHAKQAGgEAHABQAGAAAEAFQAFAFgBAHQAAAGgFAFIAHAHQAFgDAHAAQAHAAAEAEQAJAKgIANIAIAHQAHgFAIAAQAIgBAFAGQADAEABAGQAAAGgEAGIAJAFIAAAAQAHgGAIAAQAJAAAFAFIgNALIAAAAIgGAGIAAgBIgOAMQgHgJAGgLg");
	this.shape_10.setTransform(33.8789,164.2176,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.3,3.4,8).s().p("AqXJwQgYgqgCg2ISYzUQAEBHAjA3QAzBSBxAbIzVSeQhQgWgkg/g");
	this.shape_11.setTransform(99.3987,98.6078,1.2,1.2);

	this.instance_1 = new lib.Path_5_7();
	this.instance_1.setTransform(97.15,101.5,1.2,1.2,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_12();
	this.instance_2.setTransform(10.25,182.5,1.2,1.2,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB/BsBAQA2AgA0AGI12U4QhrgRgfhPg");
	this.shape_12.setTransform(102.6387,95.5478,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBlIgBgKIBUjQICRCrIjPBAQgQgFgFgMg");
	this.shape_13.setTransform(13.7789,183.2076,1.2,1.2);

	this.instance_3 = new lib.Mesh_14();
	this.instance_3.setTransform(167.45,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.7,197.4);


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
	this.b1 = new lib.Symbol1();
	this.b1.name = "b1";
	this.b1.setTransform(99.3,98.7,1,1,0,0,0,99.3,98.7);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.instance = new lib.Path_19();
	this.instance.setTransform(182.4,15.4,1.2,1.2,0,0,0,11,11.3);
	this.instance.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5177BA").s().p("Aj6ErQgZgBgQgRQgTgTADgeQADgcAVgUIHenLQAYgYAfABQAaABAQARQATATgDAdQgDAcgWAVIndHLQgXAXgeAAIgDAAgADOkIIneHLQgRARgCAWQgDAWAOAOQAMAMATABQAZAAATgTIHdnKQASgRACgWQADgWgOgOQgMgMgTgBIgBAAQgYAAgTASg");
	this.shape.setTransform(97.8987,106.849,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D6FB4","#B4E2EB","#4D72B6"],[0,0.365,1],-7,-7.2,8.1,8.5).s().p("AkeETQgQgRADgYQACgaAUgSIHdnLQAUgUAZgBQAZgBAQAQQAQARgCAaQgCAZgUATIndHLQgUASgZACIgEAAQgXAAgPgQg");
	this.shape_1.setTransform(97.8918,106.849,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A63AC").s().p("ABGB+QgBgJAEgHIgMgJQgJAHgKAAQgKgBgGgHQgFgHAAgIQABgHAFgHIgLgLQgJAGgJgBQgKAAgGgIQgFgGABgKQABgIAHgHIgIgJQgIAEgJgBQgJgBgFgIQgGgGACgJQABgJAHgIIgIgNQgSAIgLgOQgGgHACgLQADgKAIgHIgHgOQgQAFgKgMIgCgEIAlgnQAGAFADADQAGAIgCAKQgDALgJAHIAAAAIAGAPQAIgDAIACQAIABAEAGQAGAHgCAKQgBAKgJAHIAIAOQAJgFAIABQAJACAFAGQAFAHgBAKQgBAHgHAIIAHAJQAIgFAJABQAJABAGAHQAEAGAAAJQgBAHgFAIIAKAKQAJgGALAAQAKABAGAHQAKAMgLARIALAIIAAAAQAJgHAKAAQAKAAAGAHIgPAPIAAAAIgBAAIgZAXQgEgGAAgIg");
	this.shape_2.setTransform(161.4986,36.2292,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAKgHQAJgHAKABQAKAAAGAIQAGAIgCAJQgCALgKAHQgJAHgJAAQgLgBgGgIg");
	this.shape_3.setTransform(162.7586,40.4272,1.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgKAKgIQAJgGAKgBQAKABAGAHQAGAJgCAJQgCALgKAGQgJAIgJgBQgLAAgGgIg");
	this.shape_4.setTransform(168.0986,45.4691,1.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56CAF5").s().p("AgVAEQABgKAJgHQAJgIAJAAQAJAAAGAHIgnAkQgGgIACgKg");
	this.shape_5.setTransform(173.4205,49.5473,1.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#56CAF5").s().p("AgVARQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAIAogoIAJAJQAGAIgDAJQgCALgJAHQgJAHgKAAQgLgBgGgIg");
	this.shape_6.setTransform(151.3727,21.7992,1.2,1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_7.setTransform(158.4986,34.9372,1.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#56CAF5").s().p("AgVARQgGgIACgJQACgLAJgHQAKgHAJABQALAAAGAIQAGAHgCAKQgCAKgKAHQgJAHgJAAQgLAAgGgIg");
	this.shape_8.setTransform(154.5986,28.6372,1.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A63AC").s().p("ABKBfIgLgIQgJAHgJAAQgJAAgGgGQgKgLAJgPIgLgJQgHAGgKAAQgIAAgFgGQgGgGABgIQAAgIAGgHIgJgJQgHAFgIAAQgIAAgFgGQgGgGABgIQAAgIAHgHIgJgMQgQAIgKgLQgGgHABgKQABgJAHgHIgHgNQgPAGgKgKIgCgEIAigjIAGAFQAGAGgBAKQgCAJgIAIIAIAMQAPgHAKALQAGAGgBAJQgBAJgHAIIAJALQAHgEAIAAQAIABAEAFQAGAGgBAIQAAAIgGAHIAIAIQAHgFAIAAQAIAAAFAGQAKAMgJAPIAKAJQAJgGAJgBQAJAAAGAHQAKAKgJAQIALAHIAAgBQAHgHALAAQAJgBAGAHIglAjQgKgKAIgPg");
	this.shape_9.setTransform(33.275,164.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#56CAF5").s().p("AA9BPIgJgGQgGAFgIABQgIAAgFgFQgIgKAHgMIgJgIQgGAGgIAAQgGAAgFgGQgFgEABgHQAAgHAFgGIgHgHQgGAEgHAAQgHAAgEgFQgFgFABgHQABgGAFgGIgIgKQgNAGgJgJQgFgFABgIQABgIAGgGIgGgLQgMAFgIgIIgDgEIAOgNIgBgBIAHgGIAAABIAJgKIAFAEQAFAFgBAJQgBAIgGAGIgBAAIAGAKQAGgCAGAAQAGABAEAEQAFAFgBAIQgBAIgGAGIAHAJQAGgDAHAAQAGABAEAEQAFAFgBAHQAAAGgFAGIAHAHQAFgEAHAAQAHAAAEAFQAJAJgIANIAIAIQAHgGAIAAQAIAAAFAFQAIAJgIANIAJAFQAHgGAIAAQAIgBAGAGIgNALIAAAAIgUASQgHgKAGgLg");
	this.shape_10.setTransform(33.8789,164.1788,1.2,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4E6FB4","#58C0ED","#54AFE2","#4C8CC9","#4775B8","#4465AE","#435CA7","#4258A5"],[0,0.263,0.337,0.506,0.667,0.804,0.922,1],-10.3,-5.2,3.4,8.1).s().p("AqXJvQgYgqgCg1ISYzVQAEBHAjA4QAzBSBxAbIzVSfQhQgXgkhAg");
	this.shape_11.setTransform(99.3987,98.569,1.2,1.2);

	this.instance_1 = new lib.Path_5_9();
	this.instance_1.setTransform(97.15,101.45,1.2,1.2,0,0,0,79.5,79.4);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_6_14();
	this.instance_2.setTransform(10.25,182.45,1.2,1.2,0,0,0,8.1,11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A63AC").s().p("Ar6KvQgKgYgBgcIABgXIUv1yQAFB+BsBAQA2AgA0AHI12U4QhrgRgfhPg");
	this.shape_12.setTransform(102.6387,95.539,1.2,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4A63AC").s().p("AhxBmIgBgLIBUjRICRCsIjPBAQgQgGgFgKg");
	this.shape_13.setTransform(13.7789,183.1688,1.2,1.2);

	this.instance_3 = new lib.Mesh_16();
	this.instance_3.setTransform(167.45,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1}]}).to({state:[{t:this.instance_3},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.7,197.4);


// stage content:
(lib.blue10 = function(mode,startPosition,loop,reversed) {
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
		//this.b1_mc="";
		//this.b3_mc="";
		//this.b4_mc="";
		//this.b2_mc="";
		//this.b5_mc="";
		//this.b6_mc="";
		
		createjs.Sound.play("intro");
		
		var count=0;
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		
		
		this.b1_mc.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct1.play();
			var my11=createjs.Sound.createInstance("yes");
		    this.my11;
		     my11.play();
			count= count+1;
			this.b1_mc.play();
			//this.total=count;
			this.b1_mc.mouseEnabled=false;
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
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct2.play();
			var my12=createjs.Sound.createInstance("yes");
		    this.my12;
		     my12.play();
			count= count+1;
			this.b3_mc.play();
			//this.total=count;
			this.b3_mc.mouseEnabled=false;
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
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct3.play();
			var my13=createjs.Sound.createInstance("yes");
		    this.my13;
		     my13.play();
			count= count+1;
			this.b4_mc.play();
			//this.total=count;
			this.b4_mc.mouseEnabled=false;
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b2_mc.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct4.play();
			var my14=createjs.Sound.createInstance("yes");
		    this.my14;
		     my14.play();
			count= count+1;
			this.b2_mc.play();
			//this.total=count;
			this.b2_mc.mouseEnabled=false;
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b5_mc.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct5.play();
			var my15=createjs.Sound.createInstance("yes");
		    this.my15;
		     my15.play();
			count= count+1;
			this.b5_mc.play();
			//this.total=count;
			this.b5_mc.mouseEnabled=false;
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.b6_mc.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		
		function fl_MouseClickHandler_7()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.ans_mc.play();
			this.correct6.play();
			var my16=createjs.Sound.createInstance("yes");
		    this.my16;
		     my16.play();
			count= count+1;
			this.b6_mc.play();
			//this.total=count;
			this.b6_mc.mouseEnabled=false;
			// End your custom code
		}
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.bb2.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
			this.wrong1.play();
			var my1=createjs.Sound.createInstance("wro");
		this.my1;
		my1.play();
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
		
		this.bb5.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
			this.wrong2.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
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
		
		this.bb8.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			this.wrong3.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
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
		
		this.bb1.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			his.wrong4.play();
			var my4=createjs.Sound.createInstance("wro");
		this.my4;
		my4.play();
		
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
		
		this.bb3.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
			
			this.wrong5.play();
			var my5=createjs.Sound.createInstance("wro");
		this.my5;
		my5.play();
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
		
		this.bb6.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
			this.wrong6.play();
			var my6=createjs.Sound.createInstance("wro");
		this.my6;
		my6.play();
		
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
		
		this.bb9.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
			
			this.wrong7.play();
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
		
		this.bb4.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15()
		{
			this.wrong8.play();
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
		
		this.bb7.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16()
		{
			this.wrong9.play();
			var my9=createjs.Sound.createInstance("wro");
		this.my9;
		my9.play();
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			// End your custom code
		}
		this.b8.addEventListener("click", fl_MouseClickHandler_17.bind(this));
		
		function fl_MouseClickHandler_17() {
			
			//this.wrong3.play();
			var my10=createjs.Sound.createInstance("intro");
		this.my10;
		my10.play();
			
			
		
		}
		this.stop();
		/* var count:Number = new Number();
		count = 0;
		fscommand("fullscreen", "true");*/
		
		
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.b8 = new lib.Symbol6();
	this.b8.name = "b8";
	this.b8.setTransform(1220.95,97.35,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.correct2 = new lib.Symbol11();
	this.correct2.name = "correct2";
	this.correct2.setTransform(1332.1,319.75);

	this.correct3 = new lib.Symbol11();
	this.correct3.name = "correct3";
	this.correct3.setTransform(1332.1,532.2);

	this.correct4 = new lib.Symbol11();
	this.correct4.name = "correct4";
	this.correct4.setTransform(470.3,723.2);

	this.correct5 = new lib.Symbol11();
	this.correct5.name = "correct5";
	this.correct5.setTransform(1332.1,738.3);

	this.correct1 = new lib.Symbol11();
	this.correct1.name = "correct1";
	this.correct1.setTransform(470.3,319.75);

	this.correct6 = new lib.Symbol11();
	this.correct6.name = "correct6";
	this.correct6.setTransform(1558.25,723.2);

	this.total = new cjs.Text("", "72px 'Times New Roman'");
	this.total.name = "total";
	this.total.lineHeight = 82;
	this.total.lineWidth = 388;
	this.total.parent = this;
	this.total.setTransform(712.95,885.15);

	this.ans_mc = new lib.Symbol26();
	this.ans_mc.name = "ans_mc";
	this.ans_mc.setTransform(868.7,949.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ans_mc},{t:this.total},{t:this.correct6},{t:this.correct1},{t:this.correct5},{t:this.correct4},{t:this.correct3},{t:this.correct2},{t:this.b8}]}).wait(1));

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
	this.instance.setTransform(1434,56,0.25,0.25);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWATQgJgJAAgKQAAgJAJgIQAKgJAMAAQAOAAAJAIQAJAIAAAKQAAALgKAIQgJAIgNAAQgMAAgKgIg");
	this.shape_306.setTransform(1143.55,127.325);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag3BmQgdgKAAgWQAAgTAYgBQAIAAARAGQASAGAIAAQAnAAABgQQgBgKgbgNQgogRgLgHQgbgTAAgcQAAgnAqgOQAYgIAxAAQATAAAJAFQAOAHAAATQAAAigUABQgTgBgEgQQgIgBgIAAQguAAAAANQAAAHAbAOQAnARAOAKQAcAUAAAaQAAAhgfARQgaAOgjAAQgaAAgWgIg");
	this.shape_307.setTransform(1125,118.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_308.setTransform(1105.275,117.975);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_309.setTransform(1083.7958,118.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("Ag5CXQgIgHAAgLQAAgSAphaQgWgqguhSIgKgPQgFgIAAgIQAAgLAIgHQAJgIALAAQANAAAHAJQAcAlAjBKIAag4QAOgdANgWQAIgOAPAAQALAAAJAHQAIAIAAAKQAAAGgDAHIhECKQgZAzgMAiIgNAkQgHASgSAAQgLAAgIgHg");
	this.shape_310.setTransform(1062.325,123.45);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_311.setTransform(1040.475,118.275);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgSQAAgLAGgIQAHgHAMAAQAWAAAEAXQAhgaArAAQAnAAAAA0IgBAMQgBAegaAAQgYAAAAgZIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMgBQgMAAgHgHg");
	this.shape_312.setTransform(1020,118.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_313.setTransform(999.375,118.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_314.setTransform(960.125,112.825);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFAQAAQAaAAASgLQARgKAJAAQAVABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgIAYIAsgTQAZgMARgKQgOgIgVAAQgRAAgNANg");
	this.shape_315.setTransform(937.25,118.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhNBmQgGgHAAgLIAAh/IABgSIAAgSQAAgLAHgIQAGgHAMAAQAWAAAEAXQAigaApAAQAoAAAAA0IgBAMQgBAegaAAQgYAAAAgZIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMgBQgMAAgHgHg");
	this.shape_316.setTransform(917.15,118.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_317.setTransform(896.6053,118.375);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_318.setTransform(875.5958,118.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAIgHQAIgHAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_319.setTransform(859.65,112.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_320.setTransform(843.5958,118.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("Ag9BVQgegaAAgpQAAgnAbgpQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgKgYAAQgOABgSAdQgQAcAAAVQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAQQgeANgSAAQgqAAgegZg");
	this.shape_321.setTransform(822.675,118.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFARAAQAZAAATgLQAQgKAJAAQAVABAAATQAAAXghAOQgbAMgeAAQgvgBgdgWgAgaguQgNAMgIAYIAsgTQAagMAQgKQgOgIgVAAQgRAAgNANg");
	this.shape_322.setTransform(784,118.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_323.setTransform(762.5553,118.375);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgSCaQgIgIAAgLIAAkOQAAgLAJgHQAHgHALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_324.setTransform(746.65,112.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("Ag5CUQgIAIgKAAQgKAAgIgHQgHgHAAgLIAAgOIABgPIAAjcQAAgOAGgLQAIgOAOAAQAVAAAAAXIgBAIIAAAIIAABLQAOgIANgEQAOgEALAAQAuAAAcAhQAaAeAAAtQABAtgfAgQgfAgguAAQgbAAgYgKgAgVgDQgNAFgRALIAABTQAbAMASAAQAZAAAQgRQAQgRAAgZQAAgZgOgRQgNgQgXAAQgJAAgNAGg");
	this.shape_325.setTransform(729.5,112.975);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhCBUQghgZAAgsQAAgxAagiQAdgmAwAAQAiAAAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAcQAKALANAFQANAFAQAAQAaAAASgLQARgKAJAAQAVABAAATQAAAXggAOQgcAMgfAAQgtgBgegWgAgaguQgNAMgIAYIAsgTQAZgMARgKQgOgIgVAAQgRAAgNANg");
	this.shape_326.setTransform(688.85,118.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAtCPQgEgQgEgcQgDgcgBgSIABgPIAAgOIAAgRQgBgKgJAAQgWAAgQATQgJAKgQAcQAABHgHAOQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgLQABgEACgxQgCgnAChaIABgHIAAgeIgBgSIgCgSQgBgLAJgHQAIgHALAAQAUAAAGAUQAEAMAAAYIgBAoIgBAmQANgPARgGQAPgHATAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAAMgJAGQgHAIgMgBQgUABgGgUg");
	this.shape_327.setTransform(666.8,112.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgIAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_328.setTransform(645.5,114.925);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgRCIQgJgHABgKIAAgWIABgVQAAgXgEhNIglgDQgYgDAAgWQAAgLAHgIQAIgIALAAIAhADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgHAAgLACQAEBOAAAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_329.setTransform(609.3,114.925);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_330.setTransform(589.575,117.975);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_331.setTransform(568.3053,118.375);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAcAAAqQAAAtgZAgQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANAMQALALAOgBQAQAAAMgLQAOgNABgXQADg/gkABQgXAAgOAVg");
	this.shape_332.setTransform(547.2958,118.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AhXB3QgdgeAAgqQAAhBA6hEQAwg6AyAAIAPAAIANADQAIgJAMAAQAVAAAEAXQAEAQgBAWQAAAKgFAIQgIALgOAAQgSgBgIgSQgEgJgEgCQgDgBgMAAQgZAAgfAmQgtA1AAAvQAAAVAOAPQAPAPAUAAQASAAATgKQAIgEAWgPQAQgKAHAAQAMAAAIAJQAIAHAAALQAAALgKAJQg2Atg2AAQgsAAgfggg");
	this.shape_333.setTransform(524.95,113.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.instance},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.wrong1 = new lib.Symbol24();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(785.7,355.75,1,1,0,0,0,30,36);

	this.wrong2 = new lib.Symbol24();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1105.4,355.75,1,1,0,0,0,30,36);

	this.wrong3 = new lib.Symbol24();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(1607.55,336.45,1,1,0,0,0,30,36);

	this.wrong4 = new lib.Symbol24();
	this.wrong4.name = "wrong4";
	this.wrong4.setTransform(500.3,568.2,1,1,0,0,0,30,36);

	this.wrong5 = new lib.Symbol24();
	this.wrong5.name = "wrong5";
	this.wrong5.setTransform(809.45,559.6,1,1,0,0,0,30,36);

	this.wrong6 = new lib.Symbol24();
	this.wrong6.name = "wrong6";
	this.wrong6.setTransform(1133.35,548.85,1,1,0,0,0,30,36);

	this.wrong7 = new lib.Symbol24();
	this.wrong7.name = "wrong7";
	this.wrong7.setTransform(1588.25,581.05,1,1,0,0,0,30,36);

	this.wrong8 = new lib.Symbol24();
	this.wrong8.name = "wrong8";
	this.wrong8.setTransform(785.7,759.2,1,1,0,0,0,30,36);

	this.wrong9 = new lib.Symbol24();
	this.wrong9.name = "wrong9";
	this.wrong9.setTransform(1105.4,759.2,1,1,0,0,0,30,36);

	this.b6_mc = new lib.Symbol23();
	this.b6_mc.name = "b6_mc";
	this.b6_mc.setTransform(1557.95,728.8,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.b6_mc, 0, 1, 1);

	this.b3_mc = new lib.Symbol22();
	this.b3_mc.name = "b3_mc";
	this.b3_mc.setTransform(1332.15,313.2,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.b3_mc, 0, 1, 1);

	this.b4_mc = new lib.Symbol21();
	this.b4_mc.name = "b4_mc";
	this.b4_mc.setTransform(1249.35,454.05);
	new cjs.ButtonHelper(this.b4_mc, 0, 1, 1);

	this.b5_mc = new lib.Symbol20();
	this.b5_mc.name = "b5_mc";
	this.b5_mc.setTransform(1332.15,738.35,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.b5_mc, 0, 1, 1);

	this.b2_mc = new lib.Symbol19();
	this.b2_mc.name = "b2_mc";
	this.b2_mc.setTransform(472.05,726.5,1,1,0,0,0,99.3,98.7);
	new cjs.ButtonHelper(this.b2_mc, 0, 1, 1);

	this.b1_mc = new lib.Symbol18();
	this.b1_mc.name = "b1_mc";
	this.b1_mc.setTransform(472.05,324.95,1,1,0,0,0,99.3,98.7);
	new cjs.ButtonHelper(this.b1_mc, 0, 1, 1);

	this.bb9 = new lib.Symbol16();
	this.bb9.name = "bb9";
	this.bb9.setTransform(1557.95,545.8,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.bb9, 0, 1, 1);

	this.bb8 = new lib.Symbol15();
	this.bb8.name = "bb8";
	this.bb8.setTransform(1557.95,322.75,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.bb8, 0, 1, 1);

	this.bb7 = new lib.Symbol9();
	this.bb7.name = "bb7";
	this.bb7.setTransform(1078.95,732.55,1,1,0,0,0,82.5,83);
	new cjs.ButtonHelper(this.bb7, 0, 1, 1);

	this.bb6 = new lib.Symbol8();
	this.bb6.name = "bb6";
	this.bb6.setTransform(1079.25,541.45,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.bb6, 0, 1, 1);

	this.bb5 = new lib.Symbol7();
	this.bb5.name = "bb5";
	this.bb5.setTransform(1079.15,318.3,1,1,0,0,0,82.7,82.3);
	new cjs.ButtonHelper(this.bb5, 0, 1, 1);

	this.bb4 = new lib.Symbol6_1();
	this.bb4.name = "bb4";
	this.bb4.setTransform(753.85,732,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.bb4, 0, 1, 1);

	this.bb3 = new lib.Symbol5();
	this.bb3.name = "bb3";
	this.bb3.setTransform(753.85,542.7,1,1,0,0,0,82.8,82.3);
	new cjs.ButtonHelper(this.bb3, 0, 1, 1);

	this.bb2 = new lib.Symbol4();
	this.bb2.name = "bb2";
	this.bb2.setTransform(753.75,319.55,1,1,0,0,0,82.7,82.3);
	new cjs.ButtonHelper(this.bb2, 0, 1, 1);

	this.bb1 = new lib.Symbol2();
	this.bb1.name = "bb1";
	this.bb1.setTransform(472.05,536.4,1,1,0,0,0,99.3,98.7);
	new cjs.ButtonHelper(this.bb1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bb1},{t:this.bb2},{t:this.bb3},{t:this.bb4},{t:this.bb5},{t:this.bb6},{t:this.bb7},{t:this.bb8},{t:this.bb9},{t:this.b1_mc},{t:this.b2_mc},{t:this.b5_mc},{t:this.b4_mc},{t:this.b3_mc},{t:this.b6_mc},{t:this.wrong9},{t:this.wrong8},{t:this.wrong7},{t:this.wrong6},{t:this.wrong5},{t:this.wrong4},{t:this.wrong3},{t:this.wrong2},{t:this.wrong1}]}).wait(1));

	// Background
	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_334.setTransform(960,540);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_335.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_335},{t:this.shape_334}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '575C06AC69E40A4F8272FA7D685D8869',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mesh.png", id:"Mesh"},
		{src:"images/Mesh_0.png", id:"Mesh_0"},
		{src:"images/Mesh_1.png", id:"Mesh_1"},
		{src:"images/Mesh_11.png", id:"Mesh_11"},
		{src:"images/Mesh_12.png", id:"Mesh_12"},
		{src:"images/Mesh_13.png", id:"Mesh_13"},
		{src:"images/Mesh_14.png", id:"Mesh_14"},
		{src:"images/Mesh_15.png", id:"Mesh_15"},
		{src:"images/Mesh_16.png", id:"Mesh_16"},
		{src:"images/Mesh_2.png", id:"Mesh_2"},
		{src:"images/Mesh_3.png", id:"Mesh_3"},
		{src:"images/Mesh_4.png", id:"Mesh_4"},
		{src:"images/Mesh_5.png", id:"Mesh_5"},
		{src:"images/Mesh_6.png", id:"Mesh_6"},
		{src:"images/Mesh_7.png", id:"Mesh_7"},
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
an.compositions['575C06AC69E40A4F8272FA7D685D8869'] = {
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