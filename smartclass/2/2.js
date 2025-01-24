(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
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


(lib.Symbol113 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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


(lib.Symbol112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiiE2QhAg4gLhbICFgQQAHAzAbAbQAcAbAoAAQApAAAeghQAcggAAg2QAAg0gcgeQgbgfgoAAQgaAAgkAKIAPhuQA2ABAegZQAdgaAAgrQAAgkgVgVQgWgWgjAAQgjAAgZAZQgZAYgFAvIh+gVQANhBAbgnQAagnAwgWQAvgWA7AAQBkAAA9BAQAzA1AABCQAABehnA4QA9AOAlAtQAlAtAABBQAABfhFBCQhFBChlAAQhhAAhAg3g");
	this.shape.setTransform(29.525,57.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiCD4QgzgtgIhIIBqgOQAFApAWAWQAXAVAfABQAhAAAYgaQAXgaAAgsQAAgqgWgXQgXgZggAAQgUAAgdAJIAMhZQArABAYgUQAXgVAAgiQAAgdgRgRQgRgRgcAAQgcgBgUAVQgUATgEAlIhlgRQALg0AVgfQAVgfAmgRQAmgTAwABQBPAAAxAzQApAqAAA2QAABLhTAsQAxALAeAkQAdAlAAAzQAABMg3A1Qg3A2hRAAQhOAAgzgtg");
	this.shape_1.setTransform(29.625,57.3);

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


(lib.Symbol111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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


(lib.Symbol110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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


(lib.Symbol109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EhImANxIAA7hMCRNAAA");
	this.shape.setTransform(464.725,88.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(58,61,118,0.247)").s().p("EhImANxIAA7hMCRNAAAIAAbhg");
	this.shape_1.setTransform(464.725,88.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,931.5,178.3);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		/* stop();*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AoFEgIAWABQCHAACnjOIAcgjIgkgnQiZigABhwQgBhdCnh8QAYCgB1CXIAfAnIAYgfQCsjcCNgBQBtAAA4CnIgXgCQgxAAhbBCQhZBCg/BVIgeAoIAdAeQCnChC0AAQhgDDhqAAQhfABizioIgugrIgQAVQihD0hnAAQh3AAhyjBg");
	this.shape.setTransform(7.8,9.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44,-38.6,103.6,96.2);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("intro");
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
		
		this.stop();
	}
	this.frame_153 = function() {
		/* stop();
		_root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;
		_root.b4.enabled=true;*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(152).call(this.frame_153).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("Al8G2IgYg4Qg0h6gtg6Qgtg6g3gUQBdhiBOAAQBEAABRC1IAbA9QCTj3DljpQDnjqDbh9IAeAsQi7CNjiEhQjjEjh4D8IhAAsQhRA4gbAaQgMgpgmhdg");
	this.shape.setTransform(46.225,-15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Al8G2IgYg4Qg0h6gtg6Qgtg6g3gUQBdhiBOAAQBEAABRC1IAbA9QCTj4DljoQDnjqDbh9IAeAsQi7CNjiEhQjjEjh4D8IhAAsQhRA4gbAaQgMgpgmhdg");
	this.shape_1.setTransform(48.225,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-72.6,122.5,124.39999999999999);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sound();
	this.instance.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// stage content:
(lib._2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
		this.clearAllSoundStreams();
		 
		this.stop();
		this.stop();
		/* fscommand("fullscreen","true");*/
		
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		this.stop();
		//createjs.Sound.play("intro");
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

	// Layer 6
	this.instance = new lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1();
	this.instance.setTransform(1400.5,55.9,0.256,0.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.wrong3 = new lib.Symbol20copy();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(1202.5,408.8,0.98,0.98,0,0,0,52.1,48.3);

	this.wrong2 = new lib.Symbol20copy();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1018.2,402.8,0.98,0.98,0,0,0,52.1,48.3);

	this.wrong1 = new lib.Symbol20copy();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(613.55,403.8,0.98,0.98,0,0,0,52.1,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wrong1},{t:this.wrong2},{t:this.wrong3}]}).wait(1));

	// Layer 2
	this.correct = new lib.Symbol19();
	this.correct.name = "correct";
	this.correct.setTransform(745.5,355.45,0.9999,0.9999);

	this.timeline.addTween(cjs.Tween.get(this.correct).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.b8 = new lib.Symbol6();
	this.b8.name = "b8";
	this.b8.setTransform(1338,100.7,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(-226.1,22,1,1,0,0,0,18,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape_1.setTransform(259.4166,79.1272,0.64,0.64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_2.setTransform(154.6558,109.0625,0.64,0.64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_3.setTransform(154.6912,109.0449,0.64,0.64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_4.setTransform(141.3121,110.7744,0.64,0.64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_5.setTransform(141.2993,110.7264,0.64,0.64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_6.setTransform(137.579,101.6426,0.64,0.64);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_7.setTransform(137.5686,101.6905,0.64,0.64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_8.setTransform(136.3863,107.2709,0.64,0.64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_9.setTransform(136.3264,107.1078,0.64,0.64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_10.setTransform(141.5871,111.0464,0.64,0.64);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_11.setTransform(141.5713,110.9824,0.64,0.64);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_12.setTransform(137.8332,101.9146,0.64,0.64);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_13.setTransform(137.8267,101.9465,0.64,0.64);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_14.setTransform(136.6263,107.5436,0.64,0.64);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_15.setTransform(136.5943,107.3949,0.64,0.64);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_16.setTransform(137.3237,107.4945,0.64,0.64);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_17.setTransform(137.3237,107.4945,0.64,0.64);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_18.setTransform(128.8439,93.9269,0.64,0.64);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_19.setTransform(118.5241,108.2465,0.64,0.64);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_20.setTransform(129.6438,121.5582,0.64,0.64);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_21.setTransform(122.492,113.1584,0.64,0.64);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_22.setTransform(121.788,103.1426,0.64,0.64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_23.setTransform(128.7959,93.7509,0.64,0.64);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_24.setTransform(122.188,96.3908,0.64,0.64);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_25.setTransform(122.972,119.3822,0.64,0.64);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_26.setTransform(222.2816,101.9427,0.64,0.64);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_27.setTransform(256.4567,89.839,0.64,0.64);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_28.setTransform(255.0807,95.4842,0.64,0.64);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_29.setTransform(252.7448,95.1002,0.64,0.64);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_30.setTransform(255.6567,93.8149,0.64,0.64);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_31.setTransform(253.9128,93.0949,0.64,0.64);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_32.setTransform(249.1609,86.2311,0.64,0.64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_33.setTransform(251.5186,85.3751,0.64,0.64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_34.setTransform(253.8648,85.3875,0.64,0.64);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_35.setTransform(253.8968,87.191,0.64,0.64);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_36.setTransform(253.6568,87.175,0.64,0.64);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_37.setTransform(255.6727,86.791,0.64,0.64);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_38.setTransform(253.5128,86.4532,0.64,0.64);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_39.setTransform(250.2009,87.079,0.64,0.64);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_40.setTransform(249.7529,88.823,0.64,0.64);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_41.setTransform(248.2391,87.7586,0.64,0.64);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_42.setTransform(256.2967,85.7107,0.64,0.64);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_43.setTransform(257.5092,90.8709,0.64,0.64);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_44.setTransform(251.0688,97.5748,0.64,0.64);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_45.setTransform(250.7328,95.8019,0.64,0.64);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_46.setTransform(250.3115,92.9424,0.64,0.64);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_47.setTransform(255.0327,94.2869,0.64,0.64);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_48.setTransform(255.8487,87.399,0.64,0.64);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_49.setTransform(255.4967,87.287,0.64,0.64);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_50.setTransform(255.2087,87.335,0.64,0.64);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_51.setTransform(254.1208,87.335,0.64,0.64);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_52.setTransform(253.3848,87.335,0.64,0.64);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(255.6087,89.207,0.64,0.64);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_54.setTransform(253.8248,89.335,0.64,0.64);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_55.setTransform(253.5604,89.1914,0.64,0.64);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_56.setTransform(253.5604,89.1914,0.64,0.64);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_57.setTransform(253.7048,88.663,0.64,0.64);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_58.setTransform(253.7208,88.6775,0.64,0.64);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_59.setTransform(255.3687,89.0627,0.64,0.64);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_60.setTransform(255.3687,89.0627,0.64,0.64);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_61.setTransform(255.5767,88.6486,0.64,0.64);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_62.setTransform(255.5767,88.6486,0.64,0.64);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_63.setTransform(249.7849,90.7589,0.64,0.64);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_64.setTransform(251.4218,101.4147,0.64,0.64);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_65.setTransform(251.3368,99.6707,0.64,0.64);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_66.setTransform(252.1848,113.6665,0.64,0.64);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_67.setTransform(252.2141,111.0594,0.64,0.64);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_68.setTransform(252.0894,108.5634,0.64,0.64);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_69.setTransform(251.5475,105.9926,0.64,0.64);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_70.setTransform(251.4808,103.3677,0.64,0.64);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_71.setTransform(253.0452,98.7787,0.64,0.64);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_72.setTransform(253.0416,98.7427,0.64,0.64);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_73.setTransform(249.4675,98.0068,0.64,0.64);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_74.setTransform(247.65,107.4231,0.64,0.64);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_75.setTransform(174.4915,85.4649,0.64,0.64);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_76.setTransform(232.3773,86.935,0.64,0.64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_77.setTransform(228.7,97.7828,0.64,0.64);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_78.setTransform(227.6915,109.2029,0.64,0.64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_79.setTransform(219.6916,104.8119,0.64,0.64);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_80.setTransform(219.9776,100.4032,0.64,0.64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_81.setTransform(220.8995,102.8634,0.64,0.64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_82.setTransform(222.4095,99.8175,0.64,0.64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_83.setTransform(223.1295,96.6048,0.64,0.64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_84.setTransform(223.7695,93.9296,0.64,0.64);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_85.setTransform(219.9136,110.4605,0.64,0.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_86.setTransform(220.6976,107.1773,0.64,0.64);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_87.setTransform(221.4816,103.6574,0.64,0.64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_88.setTransform(216.6977,114.9793,0.64,0.64);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_89.setTransform(223.1455,90.9365,0.64,0.64);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_90.setTransform(219.4016,102.9986,0.64,0.64);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_91.setTransform(219.3856,102.9666,0.64,0.64);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_92.setTransform(216.5697,114.9823,0.64,0.64);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_93.setTransform(216.5712,114.9807,0.64,0.64);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_94.setTransform(223.1295,90.8951,0.64,0.64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_95.setTransform(223.1455,90.9029,0.64,0.64);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_96.setTransform(220.3674,104.4886,0.64,0.64);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_97.setTransform(220.3456,104.4306,0.64,0.64);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_98.setTransform(174.3787,82.2494,0.64,0.64);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_99.setTransform(179.5032,87.9395,0.64,0.64);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_100.setTransform(176.2667,84.0391,0.64,0.64);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_101.setTransform(174.603,83.7831,0.64,0.64);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_102.setTransform(172.5708,84.1831,0.64,0.64);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_103.setTransform(172.5548,84.1671,0.64,0.64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_104.setTransform(174.7635,89.4957,0.64,0.64);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_105.setTransform(173.3068,88.919,0.64,0.64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_106.setTransform(174.5974,88.551,0.64,0.64);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(176.0267,87.815,0.64,0.64);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_108.setTransform(173.3068,87.911,0.64,0.64);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_109.setTransform(176.0267,87.783,0.64,0.64);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_110.setTransform(173.3228,87.895,0.64,0.64);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_111.setTransform(175.9734,87.5942,0.64,0.64);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_112.setTransform(173.2444,87.596,0.64,0.64);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_113.setTransform(176.132,86.8124,0.64,0.64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_114.setTransform(173.0401,86.9958,0.64,0.64);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_115.setTransform(174.5048,87.23,0.64,0.64);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_116.setTransform(174.4747,88.359,0.64,0.64);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_117.setTransform(174.4747,88.359,0.64,0.64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSg/IAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAgAgShGg");
	this.shape_118.setTransform(202.81,105.2226,0.64,0.64);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_119.setTransform(202.778,105.2546,0.64,0.64);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_120.setTransform(189.7224,108.7265,0.64,0.64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_121.setTransform(189.7211,108.7409,0.64,0.64);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_122.setTransform(236.8892,98.9027,0.64,0.64);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_123.setTransform(236.8732,98.9027,0.64,0.64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_124.setTransform(237.1132,109.2225,0.64,0.64);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_125.setTransform(237.1132,109.2545,0.64,0.64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_126.setTransform(164.443,98.9027,0.64,0.64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_127.setTransform(164.427,98.9027,0.64,0.64);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_128.setTransform(164.667,109.2225,0.64,0.64);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_129.setTransform(164.667,109.2545,0.64,0.64);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_130.setTransform(140.6836,110.4139,0.64,0.64);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_131.setTransform(140.1577,101.3613,0.64,0.64);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_132.setTransform(188.0744,96.6628,0.64,0.64);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_133.setTransform(191.7863,96.4228,0.64,0.64);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_134.setTransform(174.2027,91.3669,0.64,0.64);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(174.3627,98.6467,0.64,0.64);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_136.setTransform(174.3947,97.2868,0.64,0.64);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_137.setTransform(174.4427,96.0388,0.64,0.64);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_138.setTransform(174.5033,93.4468,0.64,0.64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_139.setTransform(180.3786,107.3185,0.64,0.64);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_140.setTransform(169.4829,106.6945,0.64,0.64);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_141.setTransform(181.6114,108.3768,0.64,0.64);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_142.setTransform(168.3621,107.494,0.64,0.64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_143.setTransform(170.3146,92.7269,0.64,0.64);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_144.setTransform(168.6274,88.1745,0.64,0.64);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_145.setTransform(168.5954,88.1895,0.64,0.64);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_146.setTransform(174.492,95.7508,0.64,0.64);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_147.setTransform(174.4882,95.7028,0.64,0.64);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_148.setTransform(178.173,93.5482,0.64,0.64);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_149.setTransform(179.3626,96.7788,0.64,0.64);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_150.setTransform(179.3626,96.8108,0.64,0.64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_151.setTransform(174.4747,93.5653,0.64,0.64);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_152.setTransform(174.6832,103.8215,0.64,0.64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_153.setTransform(175.7867,109.9745,0.64,0.64);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_154.setTransform(175.8027,111.2544,0.64,0.64);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_155.setTransform(146.1554,120.7102,0.64,0.64);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_156.setTransform(137.9796,124.2941,0.64,0.64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_157.setTransform(148.2194,95.9108,0.64,0.64);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_158.setTransform(139.0196,90.439,0.64,0.64);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_159.setTransform(133.9157,127.174,0.64,0.64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_160.setTransform(133.7077,87.991,0.64,0.64);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_161.setTransform(144.2675,125.5741,0.64,0.64);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_162.setTransform(145.5315,89.735,0.64,0.64);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_163.setTransform(118.7801,108.4385,0.64,0.64);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_164.setTransform(154.9952,109.3825,0.64,0.64);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_165.setTransform(155.0283,109.3649,0.64,0.64);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_166.setTransform(141.5902,111.1434,0.64,0.64);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_167.setTransform(141.6353,111.0464,0.64,0.64);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_168.setTransform(137.9072,102.5565,0.64,0.64);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_169.setTransform(137.9072,101.9943,0.64,0.64);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_170.setTransform(136.7498,107.4278,0.64,0.64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_171.setTransform(136.6784,107.4278,0.64,0.64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_172.setTransform(129.7398,121.6222,0.64,0.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_173.setTransform(122.652,113.2384,0.64,0.64);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_174.setTransform(121.996,103.4626,0.64,0.64);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_175.setTransform(129.1639,94.2469,0.64,0.64);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_176.setTransform(122.748,97.0788,0.64,0.64);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_177.setTransform(123.228,119.3822,0.64,0.64);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_178.setTransform(222.6175,102.2627,0.64,0.64);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_179.setTransform(256.8887,90.062,0.64,0.64);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_180.setTransform(253.0094,95.4625,0.64,0.64);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_181.setTransform(256.0543,94.172,0.64,0.64);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_182.setTransform(254.3001,93.5412,0.64,0.64);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_183.setTransform(249.6089,86.5031,0.64,0.64);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_184.setTransform(251.8706,85.5719,0.64,0.64);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_185.setTransform(254.0661,85.5454,0.64,0.64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_186.setTransform(254.2328,87.511,0.64,0.64);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_187.setTransform(254.0088,87.495,0.64,0.64);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_188.setTransform(253.9116,86.7384,0.64,0.64);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_189.setTransform(250.6952,87.2215,0.64,0.64);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_190.setTransform(250.1045,89.1575,0.64,0.64);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_191.setTransform(248.6058,88.0927,0.64,0.64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_192.setTransform(256.688,86.0128,0.64,0.64);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_193.setTransform(257.9253,91.1774,0.64,0.64);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_194.setTransform(251.4136,97.8811,0.64,0.64);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_195.setTransform(251.0848,96.1217,0.64,0.64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_196.setTransform(250.6475,93.2624,0.64,0.64);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_197.setTransform(255.3847,94.5669,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_198.setTransform(256.2007,87.703,0.64,0.64);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_199.setTransform(255.8327,87.607,0.64,0.64);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_200.setTransform(255.5287,87.639,0.64,0.64);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_201.setTransform(254.4568,87.639,0.64,0.64);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_202.setTransform(253.7208,87.639,0.64,0.64);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_203.setTransform(255.9474,89.527,0.64,0.64);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_204.setTransform(254.1688,89.655,0.64,0.64);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_205.setTransform(253.8936,89.5106,0.64,0.64);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_206.setTransform(253.8936,89.5106,0.64,0.64);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_207.setTransform(254.0408,88.9684,0.64,0.64);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_208.setTransform(254.0408,88.9684,0.64,0.64);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_209.setTransform(255.7047,89.3736,0.64,0.64);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_210.setTransform(255.7047,89.3736,0.64,0.64);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_211.setTransform(250.1323,91.0789,0.64,0.64);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_212.setTransform(251.7639,101.7352,0.64,0.64);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_213.setTransform(251.6728,99.9907,0.64,0.64);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_214.setTransform(252.5368,113.9705,0.64,0.64);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_215.setTransform(252.5519,111.3664,0.64,0.64);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_216.setTransform(252.4254,108.8834,0.64,0.64);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_217.setTransform(251.8941,106.3106,0.64,0.64);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_218.setTransform(251.8328,103.6877,0.64,0.64);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_219.setTransform(253.2707,98.9619,0.64,0.64);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_220.setTransform(253.2816,98.9187,0.64,0.64);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_221.setTransform(249.8009,98.3268,0.64,0.64);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_222.setTransform(247.9891,107.743,0.64,0.64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_223.setTransform(223.9615,84.0871,0.64,0.64);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_224.setTransform(223.9615,84.0871,0.64,0.64);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_225.setTransform(223.7855,87.047,0.64,0.64);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_226.setTransform(229.0311,98.1028,0.64,0.64);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_227.setTransform(227.3084,109.3205,0.64,0.64);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_228.setTransform(220.0279,105.1319,0.64,0.64);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_229.setTransform(220.3296,100.7231,0.64,0.64);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_230.setTransform(221.2358,103.1834,0.64,0.64);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(222.8649,100.1056,0.64,0.64);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_232.setTransform(221.9369,103.9455,0.64,0.64);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_233.setTransform(216.6197,115.2833,0.64,0.64);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_234.setTransform(223.4495,90.9527,0.64,0.64);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_235.setTransform(219.7056,103.3026,0.64,0.64);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_236.setTransform(219.7216,103.2866,0.64,0.64);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_237.setTransform(216.8257,115.2653,0.64,0.64);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_238.setTransform(216.8912,115.3896,0.64,0.64);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_239.setTransform(223.5135,91.0868,0.64,0.64);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_240.setTransform(223.3875,90.8949,0.64,0.64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_241.setTransform(220.6743,104.6256,0.64,0.64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_242.setTransform(220.6656,104.7426,0.64,0.64);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_243.setTransform(203.146,105.5426,0.64,0.64);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_244.setTransform(203.13,105.5586,0.64,0.64);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_245.setTransform(190.0583,109.0465,0.64,0.64);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_246.setTransform(190.0731,109.0609,0.64,0.64);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_247.setTransform(237.2252,99.2227,0.64,0.64);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_248.setTransform(237.2092,99.2227,0.64,0.64);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_249.setTransform(237.4492,109.5425,0.64,0.64);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_250.setTransform(237.4492,109.5585,0.64,0.64);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_251.setTransform(164.779,99.2227,0.64,0.64);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_252.setTransform(164.779,99.2227,0.64,0.64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_253.setTransform(165.003,109.5425,0.64,0.64);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_254.setTransform(165.003,109.5585,0.64,0.64);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_255.setTransform(141.0196,110.7339,0.64,0.64);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_256.setTransform(140.4937,101.6733,0.64,0.64);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_257.setTransform(188.4104,96.9828,0.64,0.64);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_258.setTransform(192.1223,96.7428,0.64,0.64);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_259.setTransform(176.1387,110.2945,0.64,0.64);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_260.setTransform(176.1387,111.5744,0.64,0.64);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_261.setTransform(146.3794,120.9502,0.64,0.64);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_262.setTransform(138.1236,124.5981,0.64,0.64);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_263.setTransform(148.2514,96.2308,0.64,0.64);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_264.setTransform(139.2276,90.7429,0.64,0.64);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_265.setTransform(133.9317,127.478,0.64,0.64);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_266.setTransform(133.9957,88.295,0.64,0.64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_267.setTransform(144.5235,125.9261,0.64,0.64);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_268.setTransform(145.5315,90.055,0.64,0.64);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_269.setTransform(222.2176,124.7421,0.64,0.64);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_270.setTransform(222.2336,124.7101,0.64,0.64);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_271.setTransform(187.0504,124.0381,0.64,0.64);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_272.setTransform(187.0664,124.0381,0.64,0.64);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_273.setTransform(232.1533,136.882,0.64,0.64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_274.setTransform(168.9069,134.5339,0.64,0.64);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_275.setTransform(189.6884,110.5691,0.64,0.64);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_276.setTransform(189.9707,110.8612,0.64,0.64);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_277.setTransform(189.9944,110.5345,0.64,0.64);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_278.setTransform(1108.55,1058.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_279.setTransform(1098.775,1052.15);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_280.setTransform(1085.225,1052.15);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_281.setTransform(1075.425,1052.15);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_282.setTransform(1061.2,1058.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_283.setTransform(1054.525,1052.15);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_284.setTransform(1041.7,1052.15);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_285.setTransform(1028.7,1052.15);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_286.setTransform(1009.4,1052.15);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_287.setTransform(994.475,1052.15);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_288.setTransform(979.725,1052.15);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_289.setTransform(966.725,1052.15);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_290.setTransform(953.85,1052.15);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_291.setTransform(940.525,1052.15);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_292.setTransform(927.15,1052.15);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_293.setTransform(907.75,1052.275);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_294.setTransform(893.575,1052.15);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_295.setTransform(879.675,1052.15);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_296.setTransform(860.775,1052.15);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_297.setTransform(845.975,1052.15);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_298.setTransform(831.325,1052.15);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_299.setTransform(817.425,1052.15);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_300.setTransform(799.275,1052.15);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_301.setTransform(785.925,1052.15);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_302.setTransform(770.825,1052.15);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_303.setTransform(760.4,1052.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_304.setTransform(751.025,1052.15);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_305.setTransform(736.675,1052.15);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_306.setTransform(716.9,1052.125);

	this.b4 = new lib.Symbol113();
	this.b4.name = "b4";
	this.b4.setTransform(1139.9,300.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Symbol113(), 3);

	this.b3 = new lib.Symbol112();
	this.b3.name = "b3";
	this.b3.setTransform(950.15,297.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol112(), 3);

	this.b2 = new lib.Symbol111();
	this.b2.name = "b2";
	this.b2.setTransform(760.4,299.6,1,1,0,0,0,29.9,57.9);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol111(), 3);

	this.b1 = new lib.Symbol110();
	this.b1.name = "b1";
	this.b1.setTransform(567.9,297.8,1,1,0,0,0,32.6,71.7);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol110(), 3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag5CWQgKgIAAgLQAAgNAIgMQAKgOAQAAQANAAAHAKQAGAJAAALQAAAMgHAKQgIANgOAAQgMAAgJgHgAgtBDQgJgIAAgLQAAgPAagUIAuggQAYgTAAgPQAAgSgSgQQgTgQgTAAQgKAAgSAMQgTAMgHAAQgMAAgHgJQgJgIABgLQgBgTAjgQQAdgOASAAQAqAAAjAfQAhAfAAApQAAAognAeIghAXQgTANgKAMQgJAKgLAAQgLAAgJgIg");
	this.shape_307.setTransform(1247.05,100.825);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IABgSIAAgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigZAqAAQAngBAAA0IgBAOQgBAdgaAAQgYABAAgaIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMAAQgMgBgHgHg");
	this.shape_308.setTransform(1209.2,105.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdgmAwABQAigBAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAKAKANAFQANAFAQAAQAaAAASgLQARgKAJABQAVAAAAATQAAAXggAOQgcAMgfgBQguAAgdgWgAgaguQgNAMgIAYIAtgTQAYgMARgKQgOgHgVgBQgRAAgNANg");
	this.shape_309.setTransform(1187.8,105.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("Ag6CUQgHAIgKAAQgKAAgIgHQgIgHAAgLIABgOIABgPIAAjcQAAgOAGgLQAIgOAPAAQAUAAAAAXIAAAIIgBAIIAABLQAOgIAOgEQANgEALAAQAuAAAdAhQAaAeAAAtQAAAtgfAgQgfAggtAAQgbAAgagKgAgWgDQgNAFgQALIAABTQAaAMAUAAQAYAAAPgRQAQgRAAgZQABgZgNgRQgOgQgXAAQgJAAgOAGg");
	this.shape_310.setTransform(1165.05,100.175);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgRBxQgHgHAAgMQAAgVgFgsQgFgqAAgWQAAgNgCgHQgXANgWAeIgEAFIgBA9IAAAOIAAAOQAAAKgJAHQgIAFgLAAQgRAAgGgOQgEgKAAgWIAAhHIgBgdIAAgcQAAgRAGgPQAIgSANAAQALABAJAIQAJAIAAAKIgCARQAdghAbgBQAeAAANAXQAMgKAOgGQAPgFAQAAQAnAAANAnQADAHAGAtQAFAfAJBJQABAMgJAHQgIAIgMgBQgWAAgEgWQgDgUgEglIgHg4QgFgjgIAAQgFAAgQAJQgQAJgHAHQAAAWAFAoQAGAsAAAUQAAAMgIAHQgIAIgLgBQgLABgIgIg");
	this.shape_311.setTransform(1138.0553,105.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_312.setTransform(1111.5553,105.575);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_313.setTransform(1091.075,105.175);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgRCIQgIgHAAgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAIgIQAGgIANAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgJgBQgIAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_314.setTransform(1053.65,102.125);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_315.setTransform(1033.525,105.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdgmAwABQAigBAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAJAKAOAFQANAFAQAAQAbAAARgLQARgKAKABQAUAAAAATQAAAXggAOQgcAMgfgBQgtAAgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgHgVgBQgRAAgNANg");
	this.shape_316.setTransform(1012.2,105.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IABgSIAAgSQAAgLAGgHQAHgIAMAAQAWAAAEAWQAhgZArAAQAngBAAA0IgBAOQgBAdgaAAQgYABAAgaIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMAAQgMgBgHgHg");
	this.shape_317.setTransform(992.1,105.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AhMBmQgHgIAAgKIAAh/IAAgSIABgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAhgZAqAAQAogBAAA0IAAAOQgCAdgZAAQgZABAAgaIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMAAQgMgBgGgHg");
	this.shape_318.setTransform(972.9,105.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAdAAApQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANANQALAKAOAAQAQAAAMgMQAOgOABgWQADg+gkAAQgXgBgOAWg");
	this.shape_319.setTransform(952.1458,105.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_320.setTransform(931.225,105.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdgmAwABQAigBAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAKAKANAFQANAFARAAQAZAAATgLQAQgKAKABQAUAAAAATQAAAXghAOQgbAMgegBQgvAAgdgWgAgaguQgNAMgIAYIAsgTQAagMAPgKQgNgHgVgBQgRAAgNANg");
	this.shape_321.setTransform(892.55,105.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAuCPQgFgPgEgdQgEgcAAgSIABgPIABgPIgBgQQgBgKgJAAQgWAAgQATQgKAKgPAcQAABGgHAPQgHAQgRAAQgLAAgIgHQgJgIAAgKIACgLQACgEAAgxQAAgnABhaIAAgGIABggIgCgRIgCgSQABgLAIgHQAIgIALABQATgBAHAVQAEAMAAAYIgCAoIgBAmQAPgPAQgGQAQgHASAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAALgIAIQgJAHgLAAQgTAAgGgUg");
	this.shape_322.setTransform(870.5,100.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAGgIAMAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAIAAQAWAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgJgBQgJAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_323.setTransform(849.2,102.125);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAtCSQgKgSgSgZIgfgnIgZARQgDAbAAAZQAAALgIAIQgHAHgMAAQgbAAAAggIACgvQACgfABgPIABhAIAAhAIAAgTIgBgUQAAgMAHgHQAIgIAMABQALgBAIAIQAHAHABAMIAAAUIABAUIgBA3IgBA1QAagTA2g2QAJgJALAAQALAAAIAIQAIAIAAALQAAAJgIAIQgXAZgfAcIApA1QAdAmAAANQAAALgJAIQgJAIgKgBQgPAAgJgOg");
	this.shape_324.setTransform(812.3,99.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_325.setTransform(790.125,105.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgYCOQgHgIgBgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAJgHALAAQALAAAIAHQAHAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQAAALgHAIQgIAHgLAAQgLAAgIgHgAgRhjQgJgIAAgMQAAgNAJgIQAJgIALAAQANAAAJAIQAJAIAAANQAAAMgJAIQgJAIgNAAQgLAAgJgIg");
	this.shape_326.setTransform(775.1,100.825);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgSCaQgIgIAAgMIAAkNQAAgLAIgIQAIgGAKAAQAMAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_327.setTransform(763.35,99.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_328.setTransform(747.425,105.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AA2CTQgNAIgPADQgOACgOAAQgsAAgdgcQgdgcAAgsQAAg1AegfQAdghAvAAQAPAAALAEQAMADAIAGQADhDADgZQAEgXAWAAQALAAAHAHQAHAIAAALQAAAcgEA5QgFA4AAAcQAABGAFAYIAAAFQAAALgHAHQgIAHgLAAQgOAAgHgNgAgoAJQgOAQAAAiQAAAVAQAPQAPAPAVAAQAOAAAIgDQAFgDANgKIAGgGIAAhIQgGgMgLgFQgKgGgOAAQgcAAgPAQg");
	this.shape_329.setTransform(708.175,100.025);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_330.setTransform(686.475,105.175);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_331.setTransform(664.825,105.475);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgUAXAAQAKABARAFQAQAGAKAAQAmAAAAgQQABgKgcgNQgngRgMgHQgbgTAAgcQAAgnApgOQAZgIAwAAQAUAAAJAFQANAHABATQgBAigSABQgUAAgEgQQgIgCgIAAQguAAAAANQAAAHAbANQAnASAOAKQAcATAAAbQAAAhgfARQgaAOgjAAQgaAAgVgIg");
	this.shape_332.setTransform(626.25,105.3);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_333.setTransform(606.525,105.175);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAdAAApQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANANQALAKAOAAQAQAAAMgMQAOgOABgWQADg+gkAAQgXgBgOAWg");
	this.shape_334.setTransform(585.0458,105.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgYCOQgIgIAAgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAIgHAMAAQAKAAAJAHQAHAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQABALgIAIQgIAHgLAAQgLAAgIgHgAgRhjQgJgIAAgMQAAgNAJgIQAJgIALAAQANAAAJAIQAJAIAAANQAAAMgJAIQgJAIgNAAQgLAAgJgIg");
	this.shape_335.setTransform(569.65,100.825);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgSCaQgIgIAAgMIAAkNQAAgLAIgIQAIgGAKAAQAMAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgLAAgHgHg");
	this.shape_336.setTransform(557.9,99.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagjQAdgmAwABQAigBAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAJAKAOAFQANAFAQAAQAbAAASgLQAQgKAKABQAUAAAAATQAAAXggAOQgcAMgfgBQgtAAgegWgAgaguQgNAMgHAYIAsgTQAZgMAPgKQgNgHgVgBQgRAAgNANg");
	this.shape_337.setTransform(523.85,105.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AAtCPQgEgPgEgdQgEgcABgSIAAgPIABgPIgBgQQgBgKgJAAQgWAAgRATQgIAKgQAcQAABGgHAPQgHAQgRAAQgLAAgIgHQgJgIAAgKIACgLQABgEACgxQgCgnAChaIABgGIABggIgCgRIgDgSQAAgLAJgHQAIgIALABQATgBAHAVQAEAMAAAYIgBAoIgCAmQAOgPARgGQAQgHASAAQAhAAAPATQALAOACAcIADAwIADAmQADAWAEAQIABAHQAAALgJAIQgHAHgMAAQgTAAgHgUg");
	this.shape_338.setTransform(501.8,100.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIABgVQAAgXgEhNIglgDQgYgDAAgWQAAgLAHgIQAIgIALAAIAhADIAAgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOAAAYIAAAKIAAALQAAAtgdAAQgJAAgIgHg");
	this.shape_339.setTransform(480.5,102.125);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAHgIQAIgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgIAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_340.setTransform(444.3,102.125);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_341.setTransform(424.575,105.175);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAnBhQgZAJgaAAQgbAAgTgMQgWgNgEgaQgHgwAAgmQAAgZAFggQAEgWAXAAQALAAAIAHQAIAHAAALQAAAIgDASQgCATAAAJQAAAcABATQACAVAEANIAKADIAIABQAVAAAagGIAAgiIgBggQAAgoAEgdQADgXAYAAQALAAAIAHQAJAHgBALIgEBFIAAAmIABAoIAAAMIABAMQAAALgIAHQgIAHgLAAQgRAAgHgOg");
	this.shape_342.setTransform(403.3053,105.575);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAdAAApQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANANQALAKAOAAQAQAAAMgMQAOgOABgWQADg+gkAAQgXgBgOAWg");
	this.shape_343.setTransform(382.2958,105.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhXB3QgcgfgBgqQAAhAA5hEQAxg6AyAAIAPAAIAMACQAJgIANAAQATAAAFAXQADARABAVQAAAKgHAIQgHAKgOAAQgRAAgJgSQgEgJgEgCQgCgBgNAAQgZAAgfAmQgtA1AAAuQAAAWAOAPQAPAPATAAQASAAAVgKQAGgEAXgPQAPgKAJAAQALAAAJAJQAHAHAAALQAAAMgKAIQg2Atg3AAQgsAAgeggg");
	this.shape_344.setTransform(359.95,100.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgNBsQgHgFAAgIIAAgRIABgRIgDhQIgdgCQgUgDAAgSQAAgIAGgGQAGgHAJAAIAbACIgBgQIgBgPQAAgKAHgFQAGgGAJAAQAWAAAAAnIAAAMIAQgBQASAAAGACQANAFAAAOQAAAKgGAFQgGAGgKABIgHAAIgIgBIgPABIADBSIAAAHIAAAJQAAAkgWAAQgIAAgGgGg");
	this.shape_345.setTransform(1803.475,1012.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AAsBSIgug3IgnAlIgNAMQgHAHgIAAQgJAAgGgGQgGgGAAgJQAAgJAMgLIAVgSIAegcIgSgYQgLgPgJgIQgIgGAAgJQAAgIAGgGQAGgHAIAAQAMAAATAXIAYAgIAbgXQAQgOAHgKQAHgKAKAAQAJAAAGAGQAHAGAAAIQAAAKgQAQIgXAUIgYAXIAwA5QAFAGAAAGQAAAIgHAHQgGAGgJAAQgJAAgGgIg");
	this.shape_346.setTransform(1786.525,1014.225);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("Ag1BDQgagUAAgjQAAgnAVgbQAXgeAmAAQAbAAASAIQAYANAAAXQAAASgTANQgJAGgbALIgzAXQAHAIALAEQALAFAMgBQAVAAAPgJQANgHAHAAQARAAAAAQQAAARgaAMQgWAJgZAAQgkAAgYgSgAgVgkQgKAJgGATIAjgPQAUgJAMgJQgKgFgRAAQgNAAgLAKg");
	this.shape_347.setTransform(1767.875,1014.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AhtB4QgGgGAAgJIABgTIABgTIABgbIAAgcIAAgdIgBgdIgCgcIgCgcQABgKAHgHQAJgHAKAAQALAAAOAUQBGBlBFA/IAAgYQAAhMgBgbIgDgRIgBgRQAAgVAXAAQAZAAAABOIAAAZIgBBhQAAAIgCARQgDAUgVAAQgKAAgOgMQg8g2hKhhIgCAxIABAlIABAlQgBAugWAAQgLAAgHgHg");
	this.shape_348.setTransform(1746.25,1011.025);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_349.setTransform(960,540);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_350.setTransform(959.975,539.975);

	this.instance_2 = new lib.Symbol109("synched",0);
	this.instance_2.setTransform(865.1,298.45,0.827,0.827,0,0,0,478.7,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.b8}]}).wait(1));

	// Layer 3
	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#3F2F2D").s().p("AguBeIgBAAQgOgHgJgNIgMgZQgFgSgHgLIgogqQgKgMgGgPQgJgXALgQQAHgLAPAAIABABQAEABAFAJQAWAdAkAZQARAMAQAIQA5AcA8gFIAVgCQAbgDAIAEIAGAHQADANgMAPQgKAMgPAIIgVAHIg5AGQgJACgTAJIgcAMIgKABQgLAAgLgGgAgOBfIAagLQAQgIANgEIAkgEQAdgCANgGQANgHAKgMQAMgOgEgLIgEgFQgFgDgbADIgWACQg9AEg5gcIgigUQgmgagUgdIgJgJQgMAAgGAJQgKAOAJAWQAFAOAKAMIAnArQAHAJAHATIALAZQAIAMAOAHIgBACIABgCQAPAIAQgEg");
	this.shape_351.setTransform(580.6068,723.9783);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#A96A59").s().p("AgTAhQg/gggQg4QAXAoAwAdQA5AkBFADQgQADgPAAQgsAAgrgXg");
	this.shape_352.setTransform(577.875,720.8111);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#8B3F33").s().p("AgoBWQgUgKgMgVIgUgmQgFgJgXgRQgTgPgHgUQgIgTAFgLQAFgMAQAAIARATQARAWAhAXQAiAXAnAMQAnAMAogDIApgEQAQAAADAJQADALgPAJIgbAOQgNAHgUAAIgqADIglAQg");
	this.shape_353.setTransform(580.7507,722.874);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#6F342D").s().p("AguBdQgUgKgJgXIgSgpIgcgdQgTgTgIgUQgIgTAHgOQAGgPARAAIAQATQASAWAhAXQAiAYAmALQAoAMAngDIApgEQARAAACAJQAEAMgMAOQgKAMgOAHQgOAHgVACIgrAEIgqASQgNAGgLAAQgMAAgKgFg");
	this.shape_354.setTransform(580.6136,723.9681);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#7A4030").s().p("AA7CRQgugGgzgaIgDgBQgngTgagXQgbgXgCgQIAAgBQAQhPCDhGQAXgMAYgJIAUgGIgfANQgkARgeATQhkA9gOBDQADAPAaAWQAaAWAlATQAzAaAvAHQAvAGAegQIABADQgWAMgfAAQgLAAgNgCg");
	this.shape_355.setTransform(580.825,713.0818);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#E47838").s().p("AgUBFQghgNgWgaQA4AHAigmQAPgQAdg8QADAVAMA4QAHAxgXAUQgSAJgUAAQgUAAgUgJg");
	this.shape_356.setTransform(588.8581,721.25);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FED19C").s().p("AgPgRQA0gmA3gUQgrAag4AvQg7AwgZAeQAKgtBCgwg");
	this.shape_357.setTransform(578.55,707.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#F9A139").s().p("AgeB1QhigugGgnQAOhFBlg9QAegUAlgQIAegMIA5EZQgYAMgeAAQgwAAg/geg");
	this.shape_358.setTransform(580.875,712.9544);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#7A4030").s().p("AAIAZIgRgKQgagPgMgTIgGgPIAIAOQAMASAaAOQAYAQAVAFIAQABIgMABQgPAAgTgKg");
	this.shape_359.setTransform(610.175,739.425);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#7A4030").s().p("AAAgNIAJgaIgJAbQgHAeADAVIgDABQgDgWAKgfg");
	this.shape_360.setTransform(575.2404,737.75);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#7A4030").s().p("AA+CVQgmgDgfgTIhBg1Qg+AGgugXQgdgOgYgcQgagcgBgnQgCggAQggQAHgPAMgKIAJgIQgeAcgHAsQgJA0AiAmQA5BDBlgJIAAgBIABABIAWASQAaAYASALQAeASAlAEQAxAFA7gfQAxgaAogpIADACQgpAqgyAaQgzAbgtAAIgNgBg");
	this.shape_361.setTransform(581.8936,734.4842);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FEDEA2").s().p("AAsCFQg2gOgcgsQgVgdAeg6QABgIgJgDQgJgDgJADQgXAsgrAQQguASgogfQgbgTgNgXQgFgfAOglQANggAQgLQA2gUBKAiQAlARAZAVIBuAfQB0AoAgApQACAIAJAOQghAyhFAUQggALgeAAQgVAAgVgFg");
	this.shape_362.setTransform(580.8953,732.3853);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#EDB878").s().p("AA+CVQgvgEgmgdIgxgqQhmAJg6hEQgigmAJg1QAIgsAdgdIHJC4IAXAVQgnAngvAaQg2AdguAAIgMgBg");
	this.shape_363.setTransform(581.9058,734.327);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#828282").s().p("AgeA5IAAgBQgWgaAJhUIAAgCIABAAIAeAFQAUAGAQAIQAUAJACAJIABAAIgBABQgLAVgUAXQgXAZgVAGgAgqgBQABAmAMAQQATgFAVgXQAUgWAMgWQgDgGgRgJQgQgHgSgHIgdgFQgDAbABAZg");
	this.shape_364.setTransform(588.7694,749.55);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFDEB").s().p("AgdAGQgCgbAEghIAhACQAWAFADALQgGAZgNAaQgOAegNAKQgMgOgCgjg");
	this.shape_365.setTransform(587.3917,749.525);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#D4D5D2").s().p("AgrAGQgCgbAEghQANgCAhANQAkANAEALQgMAXgUAVQgWAZgUAFQgMgOgCgjg");
	this.shape_366.setTransform(588.7667,749.517);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#828282").s().p("AAOAuQg+gTglgTQgMgFgHgFIgBAAIAAgBQABgLAGgTQAGgTAGgKIAAgBIACAAQAVgFBTAhQA4AWAdAOIABAAIAAAcQgDAbgLAIIAAAAIgDAAQgSAAg5gSgAhTg8IgLAcQgGARgBALIASAJQAjASA9AUQA+ATAQgBQAIgHADgXIAAgcQiMg/gnAAIgGAAg");
	this.shape_367.setTransform(576.5,744.5762);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFDEB").s().p("AAyAsIgagFQhIgZgTgOQACgPAKgcIBGAnQAsAZAJANQgCAKgOAAIgCAAg");
	this.shape_368.setTransform(572.875,744.2262);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#D4D5D2").s().p("AgDAnQhPgagVgQQABgLAGgSQAGgTAFgKQAWgFBVAiQArARAnARIAAAaQgDAbgKAIIgDAAQgVAAhGgYg");
	this.shape_369.setTransform(576.525,744.581);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#828282").s().p("AgeA4QgWgaAJhVIAAgBIABAAQAJgBAVAGQAUAGAQAIQAUAKACAHIABABIgBABQgLAVgUAWQgXAagVAGIgBAAgAgog1QgDAbABAZQABAmAMAQQATgFAVgXQAUgWAMgWQgEgHgQgIQgQgIgSgFQgSgGgJAAIgCAAg");
	this.shape_370.setTransform(566.8796,741.7679);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFDEB").s().p("AgZAGQgCgbAEghQAOgCAPAGQASAGADALIgTAuQgKAfgJAMQgMgPgCgjg");
	this.shape_371.setTransform(565.0917,741.7339);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#D4D5D2").s().p("AgrAGQgCgbAEghQANgCAhANQAkANAEALQgMAXgUAWQgWAYgUAGQgMgPgCgjg");
	this.shape_372.setTransform(566.8667,741.742);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#2F2D2C").s().p("AhICuQg6gDgxgYQgagNgQgQQgTgSgFgjQgDgVACg1IABhMQgCgtgKgnIAAgCIABAAIAegCIAAACQAGAgAAAnIAABAQgCAzACAVQAFAiARASQAPAPAZANQAtAWAzACQA5ACAmgcQAUgNAWgZIBfh2QAjgnAkgYIABgBIANAGIADABIgCACQgoAggkAqQgWAYgjAwIgsA5QgXAcgYAPQgkAZg4AAIgMAAgAj9ioQAJAnADAtIgBBLQgCA0ADAVQAFAiARASQAQAQAZAMQAxAYA5ADQA/ACAngbQAYgOAXgcIArg5QAigvAWgYQAkgqAoggIgKgEQgkAYghAnIhgB1QgWAagTANQgnAcg7gCQg0gCgtgWQgZgMgRgRQgRgSgEgjQgEgVADg0QAChXgIgug");
	this.shape_373.setTransform(586.45,752.1398);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#452F2E").s().p("AhlCpQhOgMgogoQgbgbAChXQAEhzgPg6IAdgBQAHArgDBzQgCBMAZAZQAmAnBHALQBMAMAxgjQAdgTA/hTQA+hRA2gkIANAFQg9AvhDBcQg+BVgiAWQglAZg2AAQgUAAgWgDg");
	this.shape_374.setTransform(586.375,752.168);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#828282").s().p("AgDA7QgZgBgMgHIgBAAIgBAAIAAgBQgCgSAKggQAMglARgTIABgCIABABQARALAOAhQAPAhAAAbIAAABIgBAAQgOALgbAAIgEAAgAgeAAQgKAgACAQQALAGAYABQAbABAPgKQAAgagNgeQgOgggPgLQgQASgLAjg");
	this.shape_375.setTransform(583.1518,762.429);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFDEB").s().p("AgDA5IgUgJQgDgRALghQAMgkAQgTQANAagBBQQgNAJgLAAIgEgBg");
	this.shape_376.setTransform(581.4964,762.5731);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#D4D5D2").s().p("AgDA5QgZgBgMgHQgDgRALghQAMgkARgTQAPALAPAgQAOAgAAAbQgOALgaAAIgEAAg");
	this.shape_377.setTransform(583.1679,762.479);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#828282").s().p("AhyAYQgWgKgMgNIgBgBIABAAQAXgcAVgJIABgBIAEADIA4ASQAnAKAUABQAQACAQgBIggACIg7gLQgngJgSgJIgDgCQgVAKgVAYQAMALAVAKQAiASArAHIBQgDQAjgLAggdQAYgXAIgTQgfAYgaAIIgZABQARgBAOgFQAWgIAggZIAEgDIgBAEQgCAPgcAdQgjAignAMIhRADQgsgHgjgSg");
	this.shape_378.setTransform(581.65,762.525);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFDEB").s().p("AgYAjQhCgHgxgkQANgNAOgGQAQAJAqALIA+AKQAtAFAegKQAYgIAggZQAAAGgLAPIgeAgQgtASgxAAQgNAAgPgBg");
	this.shape_379.setTransform(582.5,761.679);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#D4D5D2").s().p("Ag6AnQg9gOgcgbQAYgbAUgKQAPAJAqALIA+ALQAtAFAegKQAYgIAhgaQgCAOgcAdQghAigoAMQgTAGgYAAQgbAAghgJg");
	this.shape_380.setTransform(581.65,762.8215);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#828282").s().p("AAAA+QgOgIgMgOQgMgPAAgLIAAgBQAIgVAOgVQAQgYARgMIABgBIABABQANAJAFAqQAGAsgNAjIAAABIgBAAQgEABgFAAQgJAAgLgFgAgOgbQgMAUgJAVQABALALANQAMAOANAHQAQAHAJgDQAMgigFgqQgFgngLgKQgRAMgPAXg");
	this.shape_381.setTransform(567.459,758.381);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFDEB").s().p("AgTAyQgJgJgBgSQAJgXANgTQAPgYASgMQAHAHgGAnQgGAogOAXQgGACgFAAQgJAAgGgGg");
	this.shape_382.setTransform(566.671,757.4993);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#D4D5D2").s().p("AgMAyQgYgTAAgRQAIgWAOgVQAPgYARgMQANAJAFAqQAFArgMAjQgFACgEAAQgPAAgRgQg");
	this.shape_383.setTransform(567.4464,758.4047);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#8E3838").s().p("AgeBVQgugIgmgTQgkgRgKgUQgQggAageQAQgUAfgQQAWgLAbABQAbAAAYAMIARALQAdgPA0ABQAsABAaAKIACABIgCACQgQAOgmAzIgpAzQgWAagOAGQgLAFgRAAQgPAAgVgEgAhmhKQgdAPgQATQgZAdAQAeQAJATAjASQAlASAtAIQArAHATgIQAPgHAVgZIAogxQAigwATgRQgbgKgrAAQgxAAgbAPIgBAAIgBAAQgJgHgJgFQgXgLgagBIgDAAQgZAAgUAKg");
	this.shape_384.setTransform(586.2297,757.1997);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#F37D7F").s().p("Ag7AuQgkgSgKgUQgRghAeghQAxgRAzAKQAyAJArAhQAYAQgdAnQgeAdg1AJQgngIghgQg");
	this.shape_385.setTransform(580.9161,758.4297);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#EF6666").s().p("AhDBKQhKgWgQggQgPgdAVgdQARgVAggRQAagNAgAEQAiADAYAUQAcgPA0AAQAtABAaAKQgPANgzBDQgtA6gVAKQgLAFgSAAQgcAAgrgNg");
	this.shape_386.setTransform(586.1918,757.2482);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#2F2D2C").s().p("AhICtQg6gDgxgYQgagNgQgQQgTgSgFgjQgDgVACg1IABhMQgCgtgKgnIAAgCIABAAIHDAfIABABQAUAUAeAPIAMAFIgCACQgoAggkAqQgWAYgjAwIgsA5QgXAcgYAPQgkAZg4AAIgMAAgAjxhVIgBBLQgCA0ADAVQAFAiARASQAQAQAZAMQAxAYA5ADQA/ACAngbQAYgOAXgcIArg5QAiguAWgZQAkgqAoggIgHgDQgegPgVgVIm/gfQAJAnADAtg");
	this.shape_387.setTransform(586.45,752.2148);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#7C2E2F").s().p("AAKCWQgdgOgSgSQgbgaAChXQAEhzgPg7IB1AFQgqBNAIBeQAJBeA3BFQgigHgegNg");
	this.shape_388.setTransform(568.175,752);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#442F2E").s().p("AhlCoQhOgMgogoQgbgaAChYQAEhzgPg6IHDAgQAKAKARAMQATANAOAFQg9AvhDBbQg+BWgiAWQglAZg2AAQgUAAgWgEg");
	this.shape_389.setTransform(586.375,752.218);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#4C372E").s().p("AA3BWQACglgLgdQgPgpgngUQgcgNgfgCIgDgBIABgCQAIgTAWgLQAYgNATAHIAHADQAiARAQArQAUA1gWBBIgFAMg");
	this.shape_390.setTransform(625.9706,689.9744);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#4C372E").s().p("ABdAuQgWgZgZgMQgogTgqAMQgdAJgcAYIgJAIIAHgKQAmg5A2gQQArgOAhAQIAHAEQARAMAFAZQAEAZgKASIgCACg");
	this.shape_391.setTransform(583.3071,667.0911);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#7A4030").s().p("AA0BCIgOgIQg0glgjg9IgBgBIgIgSIgCgIIADgBIADAIIAHARIABABQAjA9AzAkIAVALIgBADg");
	this.shape_392.setTransform(568.675,701.575);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#7A4030").s().p("ABqADQgrgSg9AAQg8AAgrALIggAKIAGgFQAGgEALgDQAtgNBDAAQAtAAAkALQAZAHARAMIAIAIQgJgIgSgIg");
	this.shape_393.setTransform(615.3,725.55);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#F9A139").s().p("AgnAsQgugIgegfIgUgcIAfgLQArgLA9AAQA/AAArAUQAVAKAJAKQgZAPgjAOQg2AWgnAAQgMAAgKgCg");
	this.shape_394.setTransform(615.475,728.3139);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#2C2E33").s().p("AgfBAQgPgIgCgYQgCgZANgZQANgaAVgNQATgOAQAIQAPAIACAYQACAYgNAaQgNAagVANQgMAJgLAAQgGAAgGgDgAgCg2QgTANgNAZQgMAYABAXQACAWAOAHQAPAHARgMQATgNANgZQAMgYgBgWQgCgXgOgHQgFgDgGAAQgKAAgLAIg");
	this.shape_395.setTransform(573.4444,696.875);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgDAIQgDgBgBgDQgBgEACgCQACgEADgBQACgBADABQADABABAEIgBAGIgFAEg");
	this.shape_396.setTransform(571.3583,697.4625);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgJAUQgHgDgBgJQgCgIADgHQAFgJAIgDQAGgEAHAEQAHADABAJQACAHgDAIQgEAJgIADQgEACgDAAQgEAAgDgCg");
	this.shape_397.setTransform(573.35,694.35);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#2C2E33").s().p("AgPAhQgIgEgBgMQgBgNAHgNQAHgNAKgHQAJgHAIAEQAIAEABAMQABANgHANQgGANgLAHQgFAFgGAAIgGgCg");
	this.shape_398.setTransform(573.425,696.8865);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#4F74B8").s().p("AgYAnQgPgIgCgXQgBgXAMgZQAAAjAXAKQAVALAcgUQgNAYgUANQgLAIgLAAQgGAAgFgCg");
	this.shape_399.setTransform(572.867,699.2372);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#354D9E").s().p("AgeA+QgPgHgBgYQgCgXANgZQAMgaAUgMQATgNAPAHQAPAHABAYQACAXgNAZQgNAagTANQgMAIgKAAQgGAAgGgDg");
	this.shape_400.setTransform(573.4303,696.8897);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#2C2E33").s().p("AgTBVIgIgCQgTgKgIgbQgHgbAHgfQAJgkAVgVQAXgVAVAFIAJADQASAKAIAbQAIAbgIAfQgIAjgXAVQgRASgRAAIgJgCgAgWhCQgVAUgHAjQgIAdAIAbQAGAaATAJIAHACQAUAGAVgWQAUgUAIgiQAIgegIgZQgGgbgSgIIgHgDIgIgBQgQAAgSAQg");
	this.shape_401.setTransform(615.35,716.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgIAHQgCgEABgEQABgEAEgDIAHgCIAGAFIABAHIgFAIIgHABQgEAAgCgEg");
	this.shape_402.setTransform(613.0583,717.25);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgFAZQgKgCgFgJQgEgJACgJQADgLAIgGQAIgGAJACQAJADAGAJQAFAJgDAJQgCALgJAGQgGAEgGAAIgFgBg");
	this.shape_403.setTransform(614.6,713.3101);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#2C2E33").s().p("AgJAqQgLgCgFgOQgFgPAEgQQAEgSALgKQALgLAKACQALADAFAPQAFAOgEAQQgEASgLALQgIAIgJAAIgEgBg");
	this.shape_404.setTransform(615.35,716.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#4F74B8").s().p("AgRAwQgWgFgKgdQgJgbAIgjQAMAoAkAIQAiAHAXgeQgIAigVAVQgRARgRAAIgJgBg");
	this.shape_405.setTransform(615.1921,720.2321);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#354D9E").s().p("AgTBUQgWgFgKgdQgJgcAIgiQAIgjAVgVQAWgUAVAFQAWAFAJAcQAKAcgIAiQgIAjgVAVQgRARgRAAIgJgBg");
	this.shape_406.setTransform(615.3699,716.6081);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#292929").s().p("AgnCqIgQgGQglgSgPg3QgPg2APg9QAQhHArgpQAsgrAsALIAPAFQAmATAPA2QAPA2gPA+QgQBGgsAqQgjAigiAAQgJAAgJgCgAgtiGQgrApgQBGQgOA8AOA1QAPA1AkASIAPAFQAqAKAqgpQArgqAQhEQAOg9gOg1QgPg1gkgSIgPgFQgJgCgIAAQghAAgiAhg");
	this.shape_407.setTransform(616.325,712.543);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgyCMQgegEgUgUQgNg1AOg7QAQhEArgqQAqgqAsAKQAoAKAUAxQALCZhsA3QgXAMgZAAIgLgBg");
	this.shape_408.setTransform(615.6627,709.6281);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#D4D4D4").s().p("AgnCoQgsgKgTg5QgUg4AQhFQARhFArgqQAqgqArAKQAtALATA4QAUA5gRBEQgQBGgrAqQgiAhgjAAQgIAAgJgCg");
	this.shape_409.setTransform(616.3176,712.5421);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#292929").s().p("AgmCoQgtgLgUg4QgTg5AQhEQARhGArgpQArgqAqAKQAtAKATA5QAUA4gQBFQgRBFgrAqQgiAigiAAQgJAAgIgCg");
	this.shape_410.setTransform(616.9,711.3509);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#292929").s().p("AgHCUQg/gtgfhBIgBgBIAAAAQALgkANgZQAkhJAogfQAogfAjARQAfAQgBA4QgBA4ggA/QgfBAgsAjIgBABgAAAh8QgnAfgkBHQgPAegIAdQAfA/A9AtQAqgiAfg/QAfg+ACg3QABg3gegPQgLgGgNAAQgXAAgYAVg");
	this.shape_411.setTransform(573.2766,692.5375);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AhUBcIgOgaQAJggAOgdQAihDAlggQApgjAkASQATAJAHAaQABBAggA2QghA6g1AQQgHADgHAAQgZAAgbgbg");
	this.shape_412.setTransform(573.1015,689.6447);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#D4D4D4").s().p("AhkAmQAJggAOgdQAihEAlgfQApgkAkASQAfAPgBA4QgBA3ggA/QgfBAgsAiQg/gugeg/g");
	this.shape_413.setTransform(573.3016,692.4972);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#292929").s().p("AhkAmQAHgeAQgeQAihEAlggQApgkAkASQAfAPgBA4QgBA3ggA/QgfBAgsAiQg+gtgfhAg");
	this.shape_414.setTransform(573.9016,691.2972);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FEC781").s().p("AiMCiQgOhLA9iYQAlhfA1gsQAygqAsAWQAsAVAHBLQAHBKgfBlQgkB6gsAmQgdAag7AAQhNAAgNhHg");
	this.shape_415.setTransform(617.4165,706.0748);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FEC781").s().p("AhkCvQgpg1gDgZQgIg3A3huQAohQA6gpQA6gpAsAVQAqAWABA6QAAA4gmBiQhLDAhFAAQghAAgfgqg");
	this.shape_416.setTransform(578.0553,685.5633);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#7A4030").s().p("AjCKtQhHgKhIgjQgsgWgdgaQgdgZgHgZQgKgeAIgfQAGgTATgmIAWgsQARgqgFgrQgEgjgWgxQgMgbgegoQgfgtgNgbQgUgtgCg0QgChMAjhAQAihAA/gmQAOgcAahBQAdhJASglQAeg8AhgoQA1hABIgfQBIgfA5APQASAEAPAIQAbANAlAjQAdAbAPAHIA/AFQAsgCAZADQAsAGAsAWIASAKQA/AjAiA/QAiA+ACBVQACA7gOA+QgJAogbBQIgdBcQA7CCg7B2QgvBfhdAsQgeAOgsANIhPAWQhCARgaAKQgrAPgNARQgLARgQAnIgVArQgOAXgUAPQgcAUgyAAQgSAAgVgCgAh1qWQhHAgg0A+QghAogeA8QgSAlgdBJIgoBdIgBABQg+AlgiBAQgiA/ACBLQABA0AVAsQAMAaAfAtQAfAqALAaQAXAyAEAjQAFArgSArIgWAtQgTAlgFASQgIAfAJAdQAHAYAdAZQAcAZAsAWQBFAiBHAKQBPALAlgcQATgOAOgWIAUgrQAQgmANgTQANgSAqgPQAcgKBCgRIBPgWQAsgOAdgOQBcgrAvheQA6h0g7iBIAAAAIAAgBIAehdQAbhRAJgmQAOg+gCg7QgDhUghg+Qgig9g9gjIgTgKQgrgWgsgFQgagEgqACIgiABIgegGIgDgBQgOgHgdgbQgkgigagNQgPgHgSgFQgRgFgUAAQgqAAgwAVg");
	this.shape_417.setTransform(597.757,721.2494);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FEDEA2").s().p("Ai2DXQhwgrgVhRQADgTALgYIAWgrQARgiAhgjQAegeAGgYIAUhUQAQgXAPgOIEIASQAogBA6APIBfAYQhkBigqBgQgwAOgiBNQgrBfgVAVQgQAMgRACQgaAIgfAAQg1AAhCgZg");
	this.shape_418.setTransform(584.35,761.6948);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#F9A139").s().p("Ak8KAQhxgsgUhQQADgTALgYIAWgsQAQgiAigjQAdgeAHgZIAUhZQADgwgogPQhDgagtgoQg0gugNg2QAAhJAjg+QAig9A8gkIBBiaQAqhhAsg1QA1hBBIgeQBHgeA3AOQArALAoAlQAuApAMAGIArAFIA0gBQBKAABGAnQA9AjAhA8QAjA+ADBXQACBFggBMQg1CCgJAcQAPAgAMApQAOAsABAZQgVB7h8BMQhzBGiJgFQhIgCgmBSIgfBGQgTApgVAVQgQAMgSACQgbAIgeAAQg1AAhCgZg");
	this.shape_419.setTransform(597.781,719.2086);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#EDB878").s().p("AiVDrQg8gWgsgfQgvgigKggQgMgmASgrIAnhQIAIgWQANgUAohRQAeg/AhgeIEHASQAoAAA6AOIBgAYQidCYgOCVIgHAHQgJANgaA7QgUAsgcAVQgdAWgvAAQg1AAhLgbg");
	this.shape_420.setTransform(584.3139,763.8157);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#E47838").s().p("AkbKUQg9gWgsgfQgvgigKggQgMgmATgrIAnhRQARgqgFgqQgEgkgWgxQgLgXgUgdIgjgyQgohAgChGQgChMAjhAQAig/A+glIBBiaQAqhhAsg1QA1hBBIgeQBHgeA3AOQArALAoAlQAuApAMAGIArAFIA0gBQBKAABGAnQA9AjAhA8QAjA+ADBXQACBKgZBXIg3CtQA6B/g4B0QgvBgheAtQgqATiHAkQhqAdgSAZQgJANgaA7QgTAsgcAVQgeAWgwAAQg0AAhLgbg");
	this.shape_421.setTransform(597.7771,721.3295);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#382E2C").s().p("AAhgBQgwgMg3AHIAAgEQA3gHAwAPQAZAGANAJQgNgIgZgGg");
	this.shape_422.setTransform(593.175,628.711);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#382E2C").s().p("AAPCEQAeh4gkhTQgKgagQgUIgOgPIAPAPQAQAUAMAaQAlBTgeB5g");
	this.shape_423.setTransform(611.6216,648.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#382E2C").s().p("Ag4BkQAhhfApg9QAWggAPgNIACADQgPANgVAfQgpA9ghBfg");
	this.shape_424.setTransform(619.425,650.525);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#382E2C").s().p("Ah5BfQA1hsBvg3QAqgUAlgIQgkAJgqAVQhtA3g1Bsg");
	this.shape_425.setTransform(624.95,652.975);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#382E2C").s().p("AANBzQALhwgVhFQgGgWgJgPIgIgLIAKALQAJAPAHAWQAWBEgLBxg");
	this.shape_426.setTransform(668.4583,687.475);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#382E2C").s().p("AgBgbIAFgrIgEArQgCA0AGAuIgEAAQgFguAEg0g");
	this.shape_427.setTransform(657.133,711);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#382E2C").s().p("ABsC5QhAgfgthLQgegxgRg5QgCAbAFAiQAGAjAKAXIADAGIgGgEQg5gxgZhgQgThKAEhFIADAAQgEBDASBHQAXBdA2AxQgKgZgFgkQgEgjADgaIABgJIACAJQASA8AfA1QA1BXBNAcIgCADg");
	this.shape_428.setTransform(662.3652,721.8);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#382E2C").s().p("AAtLHQAAgvARgsQAKgZAYgnIADgFQgfgBgoAKQguALgWATIgBABIgBgBIhZhqQhfhsgrgVIgMgEIAOABQApAVBbBlIBfBwQAXgTAwgLQAqgKAdACIADAAIgGAKQgXAlgJAXQgRApgBAsQA+iBDfg2IADgBIgBADQgLBhhXBIQCDg9BTh2QBSh2AEiGIAAgFIADAFQAUAeAKAcQAFgbgFgqIgOhVQgThigDg3QgDg5AGhRQADguAKhfIAJhiQAHhagOgwQgUhHhEgiIgEgCQg3gag8ATQgkALg8AnIglAWQgYAOgRgJQgLgFgJgPQgWgogjgjQgkgigpgUQg5geg7AGQhIAGgvAuQgeAeg4BeIgMAVQg7BjgxA6QhGBThCAcQAtAAA9gWIAJgDIgHAGQg5AygbA6QgWAxgLBOQgGAsADA3QABAfAHA8IAHBGQAkhBAIgxIABgIIACAIQAGAVANAZIAcAtQAsBFAJAnQAPBCgqBHQAVgBAjgZIBWhJIAJABQgEAAgDACIhZBKQglAagWAAIgDAAIACgDQArhHgOhBQgJgogshEQgkg4gJgdQgJAwgmBBIgDAFIAAgGIgGhLQgHg9gCgfQgCg3AGgsQAKhNAVgwQAag6A2gxQg/AWgtgCIgIgBIAIgDQBEgZBHhUQAzg8A8hlIAMgVQA3hdAfgeQAxgxBIgGQA7gFA8AdQApAVAkAjQAkAjAWApQAUAiAkgVIAlgWQA+gnAjgLQA9gTA4AaQBIAiAWBIQAOAygHBcIgJBiQgKBfgDAuQgGBRADA5QADA3ATBhIAPBaQAFAsgHAbIgBAGIgCgGQgJgagUggQgGCIhWB4QhXB3iHA7IgNAFIALgIQA4grAbgzQATgkAGgrQjiA3g6CFIgEAHg");
	this.shape_429.setTransform(595.492,716.8132);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#4C322E").s().p("ABCJqQAJgWAbgrQgdgBgpAJQgyALgXAUQg1hDg6hAQh1h/gYAVIhJA+QgwAmgZAAQA5hegvheIgthLQgcgtgIgeQgJA1gnBCIgLh4QgJhVAIg8QALhRAYgyQAbg5A4gxQhGAZgugDQBDgZBGhRQA0g9A+hoQBChtAbgdQAxg1BNgHQBOgGBKAzQBAAtAjBBQAVAkAmgWIA0ggQAigVAYgLQBKggBCAfQBGAhAVBFQAQAzgHBdIgSC3QgLB5AEBKQACAwAYCAQASBhgJAnQgKgdgWgiQgECLhZB6QhXB3iGA6QA7guAcg3QARgiAFgqQjlA3g7CHQgBgzAUgug");
	this.shape_430.setTransform(595.4952,716.4886);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#382E2C").s().p("Ah4A7IAAgEQBZADBUg6IAXgPIgWARQhQA5hWAAIgIAAgABngnIASgTIgSAUIgNALIANgMg");
	this.shape_431.setTransform(542.975,677.2322);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#382E2C").s().p("AgYA/QAMg9ATglIASgcIgQAcQgSAngMA7g");
	this.shape_432.setTransform(528.85,734.9);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#382E2C").s().p("AgUBjQAEhNAShEIATg1IgRA1QgRBFgDBMg");
	this.shape_433.setTransform(546.85,772.55);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#382E2C").s().p("AgiBkQAsg5AShOIAHhDIgGBFQgPBOguA6g");
	this.shape_434.setTransform(560.25,808.225);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#382E2C").s().p("AgsAzQAsggAbgmIASgiIgRAjQgZApgtAeg");
	this.shape_435.setTransform(600.175,798.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#382E2C").s().p("Ai3D8QDph9BYiwQAjhIAJhKIACg7IAAA8QgIBKgjBIQhZCyjpB9g");
	this.shape_436.setTransform(639.325,777.875);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#382E2C").s().p("AmrPfQAAglgQgmQgKgYgZgrQggg4gNghQgVg5gBhAQgMAWgTAUQgTAWgQAIIgFADIACgFQAegzgQhNQgNg3gnhOIgig7Qgeg0gIgZQgPgpAIguQgSAkgbAXQgYAUgRABIgGABIAEgEQAjggADg/QABgmgQhXQgLhBgEgfQgFg1AHgpQAMhIAdg5QARghAjgwIAcgrIglgCQgcgDgOgIIgEgCIAEgCQBmgbBkhhQBHhFBRh2QBAhdA3gzQBOhIBOgKQhAgfgIgYIgBgDIADABQAQADAYgDICHgVQA1gDAwAPQAUAGAZAMQA9AeApA0QAlAvAFAsQA2gxAvgTQBBgaBFATQAaAHAbANQA4AcAqAzQAYAdAcAxQAaAvAoAUQAfAPAXgIIAJgDIgHAGQgRAPgYAGQgZAGgVgGQAPBBgFBLQgEAygUCFQgTB5AHBWQAGBWAjB5QAmB/gXB4QgaCAhXBkQhaBmiJA8QhfAphsARQjeAhg2A8IgEAEIAAgFQAFguASgiQgWANgoAMIhSAWQhUAUgqAPQhHAYgrAgIgDACgAoeJ4QAABCAWA6QANAiAgA5QAZArAJAXQARAmABAlQArggBGgYQApgOBUgVIBVgWQArgNAVgPIAGgEIgDAGQgVAjgEAtQA6g6DZghQBqgQBggpQCJg8BYhmQBVhgAZh8QAah7gmiAQgjh5gHhWQgGhXATh5QAUiHADgxQAFhMgQhBIAAgDIADABIApACQAXgEAQgNQgVAEgbgNQgqgVgbgvQgbgxgXgcQgrg0g2gbQgZgMgcgHQhFgUhBAbQgtATg3AxIgCADIAAgEQgFgrglgvQgog0g9gfQgVgKgYgIQgvgPg1ADIiFAVQgYADgPgCQAJAVBBAgIAFADIgGAAQhPAIhPBIQg4AzhABeQhSB1hGBFQhjBhhkAdQAPAHAbADIAmABIghAwQgiAvgRAiQgcA4gMBIQgIAoAGA1QACAdAMBCQAPBVAAAnQgBA+giAiQAVgFAXgXQAagaAPglIAEABQgMA0ANArQAIAbAgA2IAhA7QAoBNAMA2QASBMgbA0QAQgKASgWQASgWAKgUIADgGg");
	this.shape_437.setTransform(599.4,719.2571);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#8C4E36").s().p("AA0AdQhDgUg8ARQAPgMAcgGIAugHQg1gKgeAAQgwAAgeAXQAdgeAqgNQAmgMArAEQgugSg0AMQgyAMgoAfQBHhRBsgJQBqgJBRBGQg5glhsgGQBJAKBdBGQhUg9hSAGQAqAKAlAYQAlAYAYAiQhJgyg6AJQBTASA4BGQg0gsg+gTg");
	this.shape_438.setTransform(587.6,639.7737);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#8C4E36").s().p("Ahqg0QAXgFAbAEIAxALQgjgRgxgEQgUgChEAAQBDgNAbgCQA7gFAyAQQAzAQApAgQAlAaAZAkIACAJQgqg+hzgmIBCAwQAjAdAKAjIgugvQgcgZgYgKQAbAbANAUQATAdACAbQg4hhiTgmg");
	this.shape_439.setTransform(603.775,628.2419);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#8C4E36").s().p("AASgYQhJguhNAJQAfgOAqAHQAcAEAuARQgYgRgmgLIhCgRQBMgEBBAkQBGAkAjBBQgYgpg/gYQA5AsAYBJQgmhLhHgqg");
	this.shape_440.setTransform(650.65,646.1547);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#8C4E36").s().p("ABBBwQgMg2gcglIABBEQgDAmgNAbQgGhcgEghQgMhCgggxQgNgVgcgPQgPgIgngNQA8AAArAzQAlAtANBDIgBgrQgDgZgLgRQALAGALASQAMATAHAGQgUhKhEg0QARABAVAKIAhARQgWgjgpgZQgegSg0gSQBjAHBLBVQBIBPAQBmQgbg2gLgQQgagnghgPQAfA2AHBMQAEA2gHBYQgHhHgGgcg");
	this.shape_441.setTransform(654.075,666.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#8C4E36").s().p("AgPBHQAJglgDgXIg6BrQAsh3gaiAQARAXAHAiQAFAYABAoIAJg1QAEgegEgWQANAlADAsQADAigEAvQA3hfAChRQAQBEgcBHQgYA+g0A4QAAgQALgrg");
	this.shape_442.setTransform(665.3794,760.275);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#8C4E36").s().p("AhHgHQABhnAxg6QgMAdgFAlQgEAZgDAqQAGgZAQgcIAfgxQgNArgEAWQgIAlADAdQADgcAUgmIAhhAQgSBGgCAgQAPgkAjgtQgWAjgKA5IgNBfQgHgVgFgaIgKgwQgJAZgEApIgFBDIgPg5QgHghAGgaQgLAjgHA0IgLBYQgOicABgUg");
	this.shape_443.setTransform(530.3741,709.15);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#723D30").s().p("AlwM8QADhJgmgvIgNBbQgJA1gTAiIhQi/QgGgMgEgRQgDgSABgOQACgdAViGQAPhjgEhBQgJBvg0BqQAHgugGg4QgEglgNg/IgNBRQgHAuACAjIg1hSQghgygIgnQgQhKAOhJQAOhJArg+IgQAHQgeAmglBjQgiBbgoAmQAVgxgXh9QgZiMALg8QAMhFAag3QARgiAggtQBngLBTgxQBag2AphXQhFBAhXAhQhaAjhYgGQBdgiBchfQBChCBKhsQBGhlA8g0QBKhABLgIQBJgBA0AOQgbgMhLgUQhBgQghgVIgBgBQAUAEBigSQBcgQBCAVQAzAQAqAgQAlAbAZAkQANA0gfBIQABgWgLgYIgVgoQAHAjABAXQABAegHAaQgPgtgZgkQgcgnglgVQBPBKgRCaQgFgVgGgLQgJgRgPgHIATBIQg0g4gcgZQgygsgzgBQBBAoAzBZQAdAzA2BpQBRhdASgSQA8g+A6gdQgfgDglAQIg/AfQASgVAfgSQASgLAlgTQgyAGgVANQAYgdAsgbIBNgqQgqgBgzARQgxARgiAcQAlhLAhghQA1g2BRgKIAAAAQAfgBAjAJQBMAWA4A5QAiAjAjA+QAXAqAlAWQAjAVAcgKQgSAQgZAFIgugBQAPBAgEBKQgDAzgVCJQgSB3AGBWQAGBXAjB6IAMAsQgTgJgTgYIgegpQhlh+gHiMQgMApgJBQQgXgogKgbQgOgmADggIAJhPQAFgvgCgfQg1B9AbCIQAbCMBlBPIgCgkQAlBWBmA+QADAngEAmQggByg6BJQgiAsgdAVQgsAggogMQAlg+APhLQAQhJgHhKQgHBPgYBBQgRArgpBOQgVAjghAeQgrAlgkAAQAOgeADgMQgkAmgbAUQgkAbgmAKQgcALhPARQhDAOgmAUQAUgcAXgyQAag3ALgUQgeAyguAjQgwAlg7AOIhoAPQg7AJgkAZIAhgwQATgdAIgVIizCmQAUhhABgeg");
	this.shape_444.setTransform(599.6447,715.5418);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#4C322E").s().p("Am7OMIgphLQg6hmgBhiQgKAWgUAXQgVAYgRAIQAdgxgOhJQgMg6gqhSQgwhRgQgjQgag5APg/QgRApgdAbQgaAXgTACQA0gwgWiGQgOhMgFgnQgJhDAIgvQAQhbArhGQAwhBAQgdIglgCQgegDgPgJQBmgbBlhkQBHhEBRh1QBFhlA9g1QBKhABLgHQhEgjgIgXQATAEBigRQBcgRBDAWQBRAaA3A9QAvA1AGA0QA1gxAvgUQBBgbBGAUQBNAVA3A5QAiAkAjA+QAYAqAkAVQAkAVAbgJQgRAPgZAGIgugCQAPBBgEBKQgEAygUCJQgTB4AGBWQAGBXAkB5QAlB+gXB5QgYB+hYBlQhTBfh8A6QhmAvh4ATQjeAig4A8QAFgxAVglQgfAViWAmQiSAlg+AvQgBgpgTgrg");
	this.shape_445.setTransform(599.275,719.1918);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#7A4030").s().p("AAAB6QhEgEhCghIAAAAQghgZgBgpQgBgoAggcIAAAAIABAAIAggJIApgSQA5gbAegJQA0gQAjAMQAXAIAPASQAPATAEAaQAFAjgPAkQgOAlgdAaQgkAhhCAAIgNAAgAAYhtQgeAJg4AbQg3AagSABQgfAbABAmQACAnAfAYQBBAhBDADQBKAEAngjQAcgZAOglQAOgjgFgiQgFgugmgSIgLgFQgPgEgRAAQgYAAgeAIg");
	this.shape_446.setTransform(681.9126,707.3706);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#F7997C").s().p("AABBmQhCgEhCggQgXgSgHgbQA1AMAvgGQA1gHAngcQgYALghAAIg8gHQANgBAPgHIAZgMQgdAFgUgKQAngLBSgyQBHgfAlA7QAPAZAAAiQgNAsghAdQgkAghAAAIgPAAg");
	this.shape_447.setTransform(681.725,709.1861);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#E67456").s().p("AAAB4QhDgEhCggQgfgYgCgnQgCgpAggbQAPgCAhgOIBAgeQBWglAwAPQA7AUgCBGQgBBCg0AvQgkAghAAAIgOAAg");
	this.shape_448.setTransform(681.921,707.3683);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#7A4030").s().p("AiyC0IAAAAQgTgOgLgmQgLgmgCg2QgCg8ALg1QAOg8AagXIAAAAIABAAQAXgDA6gVQA/gYAhgGQA6gLA0ARQAMAEAKAFQBGAjAMBVQAMBOgoBWQgWAugjAgQgkAfguAOQgjALgmAAQhJAAhVgngAAGjTQghAGg+AYQg3AWgaACQgZAWgNA8QgLA0ABA7QACA0ALAmQALAlASAOQB5A4BigaQBkgZAthiQAnhTgJhLQgKhWhIgkQgJgFgMgEQgggKghAAQgWAAgWAEg");
	this.shape_449.setTransform(684.8886,704.4168);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#F9A139").s().p("Ag+DGQhUgJg/g0QgShGALhWQAKhcAjgeQAWgCAlgOIBEgZQBZgeBGAXQA6ATAbAzQAZAugFBAQgdCEhhAvQg7AehBAAQgQAAgQgCg");
	this.shape_450.setTransform(684.8732,702.664);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#E47838").s().p("AiyCyQgsgiACiDQACiDAvgpQAWgCAlgNIBEgZQBZgeBGAXQBTAbASBZQARBSgrBcQgsBehdAdQgjAKglAAQhKAAhVgng");
	this.shape_451.setTransform(684.9114,704.4319);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#7A4030").s().p("AAACGQgPgDgPgIQgogTgXgpQgbgvAIg1QAHg0ApgbQAngZAuANIAaAKQAgAPATAeQAOAWADAWIAAAAQgDAVgrA/QguBEgXAKIAAABgAg+hxQgnAZgIA0QgIAzAbAuQAXAoAmATIAdAKQAWgKAshDQAqg+ADgUQgDgVgOgWQgSgcgegPQgLgGgPgEQgPgEgOAAQgcAAgZAQg");
	this.shape_452.setTransform(549.3086,653.2389);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#F7997C").s().p("Ag/A5QgkgzAJg9IAEgQQAZggAlgIQA0gKAlApQAjAogJA0IgogbQgXgRgTgHQATAMAPAWIAZApIgogVQgYgOgRgBQA4AVAFBFQgSAUgKAEQgxgJgigwg");
	this.shape_453.setTransform(547.2349,655.027);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#E67456").s().p("AhUBLQgkgzAJg9QAIgyAmgaQAmgbAwAOQArALAaAhQATAZAEAcQgDAUgqA/QguBDgWALQgygJgigwg");
	this.shape_454.setTransform(549.3019,653.225);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#7A4030").s().p("AgGDnQgVgDgYgLQhAgggnhKQgqhOAQhMQALg0AbgpQAbgqAngZQA7gmBAAPQAXAGASAJQAxAYAaAyQAUAmACAnIAAABQgIAmhGBvQhLB3glAWgAhKjIQgmAZgbApQgaApgLAzQgQBKApBOQAnBIA+AfQAVALAXADQAlgWBJh1QBGhuAIgmQgCgmgUglQgagygwgXQgTgKgVgEQgSgEgRAAQgsAAgpAag");
	this.shape_455.setTransform(550.7793,651.4127);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#F9A139").s().p("Ah+B/Qg/hVAThXQAThcA5guQA6gvBLASQBFAQAlA4QAdAsACAxQgIAmg5BhQg/BsglAWQhNgKg8hRg");
	this.shape_456.setTransform(551.5387,650.2107);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#E47838").s().p("AiLCFQg5hYAShYQAUhcBAg1QBCg2BLASQBEAQAmA4QAcAsACAxQgHAkhGBvQhKB3gmAWQhMgKg5hWg");
	this.shape_457.setTransform(550.7748,651.4108);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#382E2C").s().p("AjdLDIgBAAQhBhFCTqlQAujTA9j2IA0jSIACACQBKBIAqBSQA3BtgGB2QgGBzAEA6QADAuARBMQAlCZABBdQACCCg5B0Qg9B6h0BAQhkA1iCAEgAglnTQg9D4gsDPQiLKHA9BFQCNgFBng+QBog/A4hvQA5h0gCiCQgBhbgliZQgRhNgEguQgEg6AGh0QAGhzg1hrQgphShJhHg");
	this.shape_458.setTransform(663.8069,723.95);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#723D30").s().p("Ah8hWQArjEA4jfIAti2QBOBMAqBYQAyBpgGBvQgGBxAEA5QAEAwARBOQAkCWACBaQADCFg7B2IgHAPQAdhYgRhNQgJBKgdA8QghBDg1AoQADgOAQgpQAOgjgBgVQg4BUhYA8QhXA7hmAZQgdiRCMp1g");
	this.shape_459.setTransform(663.8256,722.35);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#4C322E").s().p("AiKgoQAujUA9j3IAzjNQBOBMAqBZQAyBogGBvQgGByAEA5QAEAvARBOQAkCXACBZQADCFg7B2Qg8B6h0A+QhjA2iCAEQhBhECTqlg");
	this.shape_460.setTransform(663.8215,724.025);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#7A4030").s().p("AhAB5QgNgDgGgEQgVgOgHg8QgHg6ALgvQALg0AcgEIAPAAQAVAEAVAVQANAPALASQAZAoAfAFQATADAVgMIAGgDIgBAGQgEATgLAZQgOAigPAOQgcAcgpAPQgcALgYAAIgNgBgAhmhAQgKAwAHA4QAHA5ASAMIARAGQAbAEAkgNQAmgPAcgbQAMgMANgdIAPgqQgUAKgSgDQgkgFgYgrQgdgyghgFIgNAAQgYAEgLAvg");
	this.shape_461.setTransform(786.5389,972.6707);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FEDEA2").s().p("Ag8A+QgDg0AKgnQALguAZgEQAWgDAXAUQASAPAOAZIACACQgBAggOAaQgQAcgdAMIggACQgRgEgNgOg");
	this.shape_462.setTransform(781.5296,968.7739);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#EDB878").s().p("AhRBwQgfgVAChkQAChnApgGQAXgDAYAUQARAPAOAZQAPAaAWAMIA/gBQgDASgLAZQgOAhgPAOQgiAigwANQgWAGgQAAQgSAAgLgHg");
	this.shape_463.setTransform(786.4939,972.6563);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#7A4030").s().p("AhQBiQgUglAXhUQAVhSAbgRQAQgKAVAEQAjAFAoAfIABAAIAAABQAHASAABMQgBBXgUATQgNANgbAGIg1ACQgrgGgOgagAgZh1QgYAPgWBPQgXBSATAkQANAYAnAGIAzgCQAagGAMgMQARgRABhTQABhHgGgWQgngeghgEIgJgBQgOAAgJAGg");
	this.shape_464.setTransform(772.0989,971.6296);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FEDEA2").s().p("AhWBJQABgvAUg2QAUg2ARgLQAWgOAhANQAbAJAbAVQADAKADAyQgVAKghAsQgeApgbAJIgOABQgcAAgUgcg");
	this.shape_465.setTransform(772.1,969.0481);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#EDB878").s().p("AgGCAQg3gCgRgfQgTgkAXhTQAVhQAagQQAVgOAiANQAbAJAaAVQAHATAABKQgBBWgTASQgWAWguAAIgGAAg");
	this.shape_466.setTransform(772.0793,971.7041);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#7A4030").s().p("AgGB+QgZgDgWgNQgZgNgIgRQgRgmAghJQAchEAbgRQAUgOAdAFQAgAFAZATIAAABIABABQAGARgPBXQgQBfgVARQgNALgVAAIgRgCgAgMhvQgaAQgcBBQgfBHARAkQAGAPAWAMQAWANAZAEQAfAEAPgMQAUgRAPhbQAOhSgFgTQgYgTgcgEIgOgCQgSAAgNAKg");
	this.shape_467.setTransform(763.3253,970.6944);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FEDEA2").s().p("Ag3BQQgUgLgLgVQAKgnAWgnQAVglAQgLQAVgOAfAGQAcAGAWASQADAGgDAcIgHA/QgtAsgpAJIgMABQgTAAgQgJg");
	this.shape_468.setTransform(763.5625,967.0995);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#EDB878").s().p("AgZB2QgvgOgLgaQgQglAehHQAchDAbgRQAVgOAfAGQAbAFAXASQAGAQgPBXQgPBdgVARQgMALgVAAQgOAAgVgHg");
	this.shape_469.setTransform(763.3125,970.7036);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#7A4030").s().p("AgfBoQgXgDgOgUQgMgSABgVQADgkARgfQASghAagUQArgjAxAMIABABIABACQAFAggRBCQgVBOgkATQgQAIgQAAIgJgBgAgMhKQgZAUgRAfQgQAfgDAiQgBAUALAQQAMARAVADQASADATgKQAhgQAUhKQARg9gEgjIgHgCIgOgBQghAAgfAYg");
	this.shape_470.setTransform(757.4531,969.6285);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FEDEA2").s().p("Ag5BGQgOgEgEgMQAMg6ArgmQArgnA0ANQABALgCAZQgDAagGAbIg7AlQgYAOgXAAQgIAAgIgCg");
	this.shape_471.setTransform(757.5531,966.6658);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#EDB878").s().p("Ag2BbQgXgSABgfQAGhAAsgsQAuguA4AOQAFAhgRBBQgVBNgiARQgRAIgPAAQgRAAgOgLg");
	this.shape_472.setTransform(757.4547,969.6396);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#7A4030").s().p("AgmCEQgigFgSgQQgOgOgBghQgCgsAUg7QATg4ASgTQAXgXAaAFQAQACANAOQAMAOAEAXIAHArQAJA8AHAZQANAuAXALIAEACIgEADQgPANgrAGQgaAEgWAAQgTAAgQgCgAgthuQgSASgSA3QgUA7ACAqQABAfANAMQAOANAiAGQAjAFAogGQAogFASgLQgWgOgNguQgIgbgIg5IgHgrQgIgrgggGIgGAAQgVAAgQARg");
	this.shape_473.setTransform(627.6448,944.6458);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FEDEA2").s().p("AgzBcQgOgGgLgVQAFgqASguQAQgsAPgQQAXgYAcAIQAeAJAIApIAKA9QgOA1gcAWQgTAPgXAAQgUAAgYgKg");
	this.shape_474.setTransform(625.05,941.674);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#EDB878").s().p("AhWBtQgbgZAVhXQAThRAbgcQAYgYAbAIQAeAJAIAoIARBqQAPBEAcAOQgXAShDAEIgQAAQg7AAgYgWg");
	this.shape_475.setTransform(627.4954,944.6211);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#7A4030").s().p("AgcB8QgagEgTgNQgXgRgDgZQgHg1Alg8QAkg8ApgNIAlgEQAUADARANQANAJAGALIABABIgBAHQgNBMgOArQgTBAgYAOQgSAKgXAAIgSgCgAAKh0QgmANgkA6QgkA8AGAxQADAXAWAPQARANAZADQAfAGAYgNQAngWAcirIABgFQgUgbgggFg");
	this.shape_476.setTransform(615.3949,944.5276);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FEDEA2").s().p("AhABVQgXgNgJgYQALguAfgpQAggpAdgKQAfgKAcAOQAUAKALARQgLBBgLAnQggAXgMAHQgZAPgVADIgOACQgSAAgRgKg");
	this.shape_477.setTransform(615.575,941.6592);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#EDB878").s().p("AguB1QgugPgEglQgHg0Amg8QAjg7AngMQAfgKAcAOQAUAKALAQQgeC0goAVQgTAKgUAAQgRAAgTgGg");
	this.shape_478.setTransform(615.3956,944.5229);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#7A4030").s().p("AgmByQgXgEgRgRQgRgRgDgYQgFglAlg4QAlg6AkgLIAkgDQAUADARAMQANAJAGALIABABIAAABQgGAlgbA7QghBGgcAQQgPAIgTAAIgKAAgAAJhoQgiAKgkA4QgkA2AFAjQADAWAPAQQAPAPAWAEQAWADASgLQAbgOAfhFQAag4AHglIgSgSQgQgLgSgCg");
	this.shape_479.setTransform(608.6952,942.3821);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FEDEA2").s().p("AhEBLQgRgLgHgZQANgmAdgiQAeglAZgIQAegJAbAOQAWAKAKAQQgHAlgcA9IhTAbQgKAEgKAAQgNAAgLgHg");
	this.shape_480.setTransform(609,939.4206);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#EDB878").s().p("AhfA3QgFgkAlg4QAlg4AigKQAegJAcANQAVAKAKARQgGAkgbA6QggBGgbAPIg+ABQghgQgFglg");
	this.shape_481.setTransform(608.6702,941.995);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#7A4030").s().p("AhvMYQgtgGg3ghQg6gighgsQgjguAIgrIAAgCIABAAQA4gwAQhPQAKgvgBhqIAAgKQgDjLAthWQgjh8gbh1QgzjiABhmQABhdAnhNIAmg6IgkA8QgjBNgBBbQgBBmA0DkQAbB2AiB5IABABIgBABQgtBUACDLIABAKQABBqgKAxQgRBPg5AyQgGAnAhAtQAgArA8AiQA4AhArAEQAqgDAYgSQAYgSAPgoIAVhGQANgwAJgXIAQggQAQgfAEgQQAHgcgIgeIAAgBQgBg8A9iRQA7iNA/hfQAxhKARiYIAHiLIgFCLQgOCagxBLQg+Bfg7CLQg9CQABA7QAIAggHAdQgFASgQAgIgPAeQgLAbgMArIgVBHQgPAqgZATQgaATgsADg");
	this.shape_482.setTransform(645.0838,877.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#F9A139").s().p("AjwLuQhDg9AKg6QA6gzARhSQAJgvgChxQgDjLAuhVQgkh8gfiKQgvjTABhgQAChdAkhPIAjg7IBTAjQBnAyBfBKQBgBKBHBEIA0A2QAHARADAXQADAWgDASQgNB9gKAuQgWBdg0BBIibDYQgYApABAuQADAjAQBDQAKA6gWAnIgqBYQgaAzgaAhQgYAlgzAPQgiALgsAAIgXgBg");
	this.shape_483.setTransform(642.1281,872.661);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#E47838").s().p("Aj/LTQhWhEALhCQA7gyAQhTQAJgugBhxQgEjLAvhVQgkh9gfiJQgwjUAChgQABhdAkhOIAkg7IJAGgIgHCKQgRCZgxBMQg+Beg7CLQg+CSABA8QAKAmgOAmIgfA/QgKAYgMArIgVBKQgQApgYASQgZATgrAEQhGgIhMg+g");
	this.shape_484.setTransform(645.3623,876.8);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#7A4030").s().p("AQCQWQhRgMhGgtQgqgbgdghIgBgBIABgCQAlhMgHhuQgGhegjhcIgVgQQiDhlhRhJQiPiAhTh2QgzABh8AZQiBAahIAHQh9ANhpgPQhIgLhBgYIhUgJIAAAAQizgaiQhVQiPhThZiDQhWh/ggiXQghiXAbiVIABgBIAAgBQBahfEShRQCTgrDsgvIAdgFQAmgIAqAGQBXANBTBBQBNA7AhBFQAhAzB8BTQB8BTBXAcICNAIQBZAOBOAeQB6AwBABOQBVBoAmB7QAgBmAKCbQAGBaAkBIQAVApAvA5QAhApAIAVQALAdABAwIgGBeQgFA3gBAoQgBAqAJAnQAGAWANAkQANAkACARQACAkgIA9QgJBCgOAgIgBABIgCABQgkAHgkAAQgbAAgcgEgAFRBwIABACQBSB1CQCBQBRBICDBlIAWARIABABQAcBNAKBOQAQCDgrBaQAeAgApAbQBDAqBPAMQA+AJA+gMQANgfAJhBQAIg9gCghQgCgQgNgkQgNglgFgWQgKgoABgqQABgZAFhHIAGhcQgBgwgKgcQgHgTgigpQgvg6gVgqQglhIgGhbQgKiagghmQglh6hUhnQg/hOh5guQhPgfhXgNIiMgIIgBAAQhXgch+hUQh+hUghg0QghhFhMg6QhRg/hWgNQgpgGglAIIgdAFQjoAtiVAsQkQBRhaBeQgbCTAgCWQAhCWBVB9QBYCCCPBTQCOBUCyAaIBUAJIABAAQBAAYBIALQBoAPB9gNQBHgHCBgaIBggSIBSgIg");
	this.shape_485.setTransform(681.0408,869.2091);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FEDEA2").s().p("AFAGBQgzgnhiiFQglgwglAAQgeAAgjAiIg9BEQgmAqgcANQhUAqhrgkQhngig+hUQglg7gmhnQgZiIAZiHQBnhuFZhaIgLBvQgGBCADAwQAIBUAiBHQAjBLA9A4QBnBbCDA/QB0A4CQAkQgMAjgbAVQgoAigsAAQgvAAgygng");
	this.shape_486.setTransform(616.7937,814.4338);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FEDEA2").s().p("Ag1AeQgegcgdg6IDhAdQgOAkgQASQgUAYgeAEQgKACgKAAQgkAAgegbg");
	this.shape_487.setTransform(697.45,856.7026);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#F9A139").s().p("ANfOtQAnhOgJhxQgGhdgjhcIgLgIQiEhlhFg9QiJh4hVhuQhqicA6juQgSAfgZBMQgbA9guAFQhHAOgzhSQgSgdgWgxIghhQQgQgjggggQgggigogSQAdBHgCBGQgDBPgvAmQhTBHhihNQgzgnhiiEQglgxglABQgeAAgjAhIg+BFQgmApgcAOQhUAqhrgkQhngjg+hTQglg7gmhnQgZiJAZiIQBehjEohUQCBglD/gzQBjgUBwBFQBnBAAqBaQAhA0B+BTQB9BUBXAcQBzgICFAnQClAwBPBhIAWAdQBRCgAMCTQAFA9ggBgQgjBnAAAxQgCAyBJAvIA9AnQAhAYAPAbQAVAggTA1IggBRQgHAjAIAxIATBVQAZBvghA/QghA6hAAmQhUgig0g7g");
	this.shape_488.setTransform(675.3519,867.8503);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#EDB878").s().p("AAFIWQjUgOirheQifhXhfiMQhYiCgfibQgeiTAaiOQBohtFZhbIgLBwQgGBCADAvQAIBUAhBIQAkBMA9A3QCsCXD9BMQC1A1EnAeQgZBMAjBqQARA0AWA4IgSgZQguAAhgATIizAgQhWANhPAAQiOAAh1gqg");
	this.shape_489.setTransform(639.616,829.5884);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#E47838").s().p("AOwP9QhUghg2g8QAnhOgIhyQgHhcgihcIgMgIQiOhuhLhCQiTiDhUh5QguAAhgATIizAgQjyAki1hBQjVgOirheQifhWhfiMQhYiCgficQgeiTAaiOQBehkEohUQCBgkD/gzQBjgUBwBFQBnBAAsBaQAhA0B8BTQB+BUBWAcQB0gICEAnQCmAwBPBhQBUBnAlB4QAhBmAKCeQAIB3BABcIAwA+QAYAfAHASQAPAngFBQIgKCTQgBA7AUA6QAWBBABAKQACAjgIA+QgKBCgNAeQglAHglAAQhEAAhDgag");
	this.shape_490.setTransform(681.0444,869.1981);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#7A4030").s().p("Ag1ATQATgtAggiQAmgoAhAHIgBAGQgegFglAlQgeAggTAsQgSAtAGAcIgGABQgHgdAUgvg");
	this.shape_491.setTransform(660.5938,939.0479);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#7A4030").s().p("AgqAUQANgmAagiQAagiAagLIACAGQgYAKgaAiQgZAhgMAkQgQAuARAaIgFAEQgSgeAQgwg");
	this.shape_492.setTransform(668.2485,944.225);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#7A4030").s().p("AADCSQgqgGgPgVQgQADgQgDQgZgDgSgOQgTgOgHgVQgUgGgOgOQgQgQgBgQQgBgjApgwQAhgoAkgYQAbgSAYAEQAQACAYARIAGAEIgOADQARAGAMAMIAXAaIAUgCQAZAEAOAqQAJAaAJBBIABAJQADAVAZAQQAVAOAYAEIASABIgOAFQgsAQgcgEQgLgCgFgFQgQAJgdAEIgZABQgQAAgQgCgAgzBxIABABQALATArAHQAcAEAdgDQAcgEAOgJIACgBIACABQAIAIATgBIAugIQgZgGgTgOQgXgRgDgVIgBgJQgJg+gIgZQgNgqgWgDIgTADIgDABIgBgCIgZgeQgNgMgWgGIgMgEIAVgEIACAAQgTgMgNgCQgVgEgaARQgiAXghAnQgoAvABAhQABAOAPAOQAOANASAGIABAAIABACQAGATASANQARAOAYADQARADAPgDg");
	this.shape_493.setTransform(669.5738,942.0358);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FEDEA2").s().p("AAkBVQgOgMgDgTIgFglIgaAlQgRATgSAEQglAJgFghQgEgXALglIgcASIgcgBIgEgGQAQgYAbgbQAYgXAVgOQAagRAWADQAOACAZARIgSADQAXAHAOAMQAKAJAQAWQAagLARAWQANAQAJArQgIApggALQgKADgKAAQgWAAgZgOg");
	this.shape_494.setTransform(665.45,937.4638);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#EDB878").s().p("AAbCQQg6gEgQgZQgiAGgdgPQgcgPgJgbQgTgFgOgOQgQgPgBgQQgBghAogwQAhgnAkgYQAagRAVADQAQACAYARIgRADQAWAHAOAMQAKAJAPAWQAlgPASAvQAKAaAMBSQAEAXAbARQAXAPAZADQhEAXgTgTQgXAPgrAAIgSgBg");
	this.shape_495.setTransform(668.9988,942.0567);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#7A4030").s().p("AjJHHQgrgGgPgVQgQADgQgDQgZgDgSgOQgTgOgHgVQgUgGgOgOQgQgQgBgQQgBgkApgwQAhgoAkgYQAbgSAYAEQAPACAYAQQAjAEAngVQAngUAkgoQAjgnAVgrQATgqgFgaQgKgfglgeQgXgTg3gkQg4gkgcgVQgtglgagmIgCgCIACgCQA3hBDag1QDKgyBbAOQAUADAHAHQAjAfAeB7QAcBzgCBNQgBBBhmCpQgzBWg4BRQgQAWgZATIhRAyQgkAXgtARQg1ATgcgEQgLgCgFgFQgQAJgdAEIgYABQgRAAgQgCgAkAGmIABABQALATAsAHQAcAEAdgDQAcgEAOgJIACgBIACABQAEAFALACQAbAEA0gTQAsgRAjgWIBQgyQAZgSAPgWQA4hQAzhVQBlioABhAQAChMgbhyQgeh5gigfQgGgGgSgCQhcgOjKAzQjUA1g1A9QAZAkAtAkQAaAUA4AkQA3AkAYAUQAlAgAMAgQAFAbgTArQgVAsglApQglApgoAVQgpAVgkgEIgBAAIAAAAQgYgRgOgBQgVgEgaARQgiAXghAnQgoAvABAiQABAOAPAOQAOANASAGIABAAIABACQAGATASANQARAOAYADQARADAPgDg");
	this.shape_496.setTransform(690.0526,911.1196);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#F9A139").s().p("AiJF0QgPgMgDgTIgEglIgcAlQgRATgSAEQgkAJgGghQgEgXALgmIgbATIgdgBIgEgGQARgZAbgbQAXgXAVgOQAagRAWADQAQACAYARQBPAHBPheQAhgnASgoQATgpgFgYQgSgvhphFQh3hMgng5QAZgeBIgfQBAgcBYgXQAIBXBQBUQAuAxBwBbQAvAsg0BPQgcAthFBSQgPAWgbBIQgXA6geAaQghAUgogHQgqgHgNgkQgHAtggANQgLAEgMAAQgWAAgYgOg");
	this.shape_497.setTransform(682.9463,908.7618);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#E47838").s().p("Ai3HGQg7gEgQgZQgiAFgdgPQgcgOgJgbQgTgGgOgOQgQgPgBgPQgBgjAogvQAhgoAkgXQAagRAVADQAQACAYAQQBPAIBRhfQAggmATgpQARgogFgYQgQgwhrhEQh3hNgng5QA8hHD4g3QBlgWBQgGQBTgGARAQQAiAfAeB5QAcBygCBOQgBA+heCdQg3Bfg8BVQgSAagjAXIhDAqQgtAcg0AQQg/AUgRgRQgXAOgrAAIgSAAg");
	this.shape_498.setTransform(690.0527,911.1473);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#37322D").s().p("AAhAIQgogdg3gKIACgGQA4AKAmAhQAUARAJAPQgKgOgUgQg");
	this.shape_499.setTransform(804.825,792.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#37322D").s().p("ABWDkQg1gHg1geQgvgZghgsQgTgbgagzIgXgrQgNgUgPgJQgfgUgTAWQgKAKgDAQQgDARAEAQIADAPIgJgNQgXgggDgkQgDglARgdQAPgXAYgLQAYgKAdAEQgVgRgOgXQgQgYAAgTIABgIIAFAGQAhAkA6AIIDoAHQBHALAyAoQBEA1AHBcQAEAsgMAsQgLAsgWAZQgaAegsANQgaAIgeAAQgSAAgTgDgAjYgrQAKACAOAIQAPAKAOAVIAYAsQAZAyATAaQAgArAuAZQA1AdAzAHQAwAIAqgNQAqgMAZgdQAUgWALgnQANgsgEgwQgHhZhBg0QgwgmhHgLIjogHQg4gJghgfQAEATARAXQARAXAVANIARAKIgTgFIg6ACQgbAJgOAYQgQAZACAfQABAfARAdQgBgPAEgMQAEgOAIgJQANgNAQAAIAGAAg");
	this.shape_500.setTransform(816.203,802.7906);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#723D30").s().p("ABYC5QhXgPhIg+IAPABIARgCQgngPghg5QgnhAgUgQQghgWghATQgdARgPAoQgMg2AhgkQAignA7APIgCgCQA0AMAgAWQApAaAQAtQADhDhKgkQgqgSgUgKQgjgSgPgWIgKgOQAhAfA6AIQAfAEBSgCIB4AGQBDALAvAlQAsAkASA1QARBWg2A4QgsAxhHAAQgTAAgVgDg");
	this.shape_501.setTransform(815.7799,799.9306);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#4C322E").s().p("AgSC6QhCgkgshUIgfg8QgQgcgSgLQgjgXgWAcQgTAZAJAiQguhAAeg8QAfg+BMATQgYgPgTgaQgTgcAAgUQAhAkA6AJQAiAGBRgDIB7AFQBFALAvAmQBJA7ACBlQACBagrAxQgnAshFAFIgRABQhEAAhJgog");
	this.shape_502.setTransform(816.1214,803.03);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#7A4030").s().p("AgEGoIgGgBQirgbiJh9QhThLg2hdQgOgZgFgiQgFgnALgfQAQgtApgRIACgBIABACQAYAcAvBKQBEBxAyAyQBUBXBxAZIAtAIQBUANBEgMQBEgMAvgkQBLg6ANhtQAPiFgth0QgthzhrhlIAAgBIAAgBQgGgPAMgPQAIgKAOgFIAcgDQAHABAHADIABABQBnBnAyBoQBJCYgWCxQgVCphtBSQhdBHiSAAQgyAAg4gIgAnOgYQgLAeAFAlQAFAhANAYQA1BcBSBLQCIB7CqAbIAGABQDZAgB7hdQBrhSAVimQAWivhIiWQgyhohmhmIgfgCQgQAEgKALQgJAMAEAMQBsBlAtB1QAuB1gQCHQgNBvhNA7QgwAlhFANQhGAMhVgNIgtgIQhzgZhVhYQgygzhGhyQgrhGgZgdQgmAQgNApg");
	this.shape_503.setTransform(810.903,854.8487);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#F9A139").s().p("AhLF9Qh6gwhjhdQhThNhQh5QABgjAOgaQAQgeAfgNQAYAbAqBDQAwBPAaAjQBnCKCRAgQCtAmBsg5QBrg4APiFQAfkMjVjJQgIgVAYgPQAYgQAbAMQBQBRAtBLIAZBPQAMArAGAjQAdCRgnB6QgvCRiAAsQhoAfg+AGQgUACgUAAQhGAAg9gag");
	this.shape_504.setTransform(809.5639,852.5265);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#E47838").s().p("AgJGkQivgbiKiAQhOhJg0haQgaguAIg4QAIg/A0gWQAYAbAqBEQAwBPAaAiQBnCLCRAfQCtAmBsg4QBrg4APiGQAfkLjVjJQgIgVAYgQQAYgPAbALQBuBuAyByQA/CPgVCnQgXC2h8BRQhZA5iCAAQg0AAg7gKg");
	this.shape_505.setTransform(810.8932,854.7745);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#7A4030").s().p("Ag3BpQgXgPgDgQQAAgKAHgKIASgPQAXgSAHgOQAIgPgBgWQAAgPgFggIgGgoIAAgEIAEAAQARABAeAQQAhARANAOQANAOACAgQABAXgEAkQgEAcgUAbQgTAYgWAJIgZACQgWgDgWgOgAgNgeQABAYgJAPQgIAQgYATIgQAOQgGAIAAAHQACANAVANQAUAOAWADIAWgBQAUgJASgYQAUgZADgbQAJhOgTgVQgMgNgdgPQgbgPgSgDg");
	this.shape_506.setTransform(552.9422,909.05);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FEDEA2").s().p("AgvgRIgFglQAQACAfAPQAfAQANAPQAQAQgCAsQgng1g9gSg");
	this.shape_507.setTransform(555.4861,902.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FEDEA2").s().p("AgfAPQgigQgDgTIAAgEQAaAYAnAAQAkAAAkgTQgTAegbAMQgHACgJAAQgPAAgXgKg");
	this.shape_508.setTransform(551.9,918.5445);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#EDB878").s().p("AgpBtQgigRgDgTQAAgOAVgRQAagVAIgOQAKgTgEgkIgKhHQARACAeAPQAgAQANAOQAVAXgKBPQgEAbgTAaQgTAZgVAJQgHADgIAAQgQAAgXgLg");
	this.shape_509.setTransform(552.9113,909.1195);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#7A4030").s().p("AgHA4IgCgBQgQgEgXgbQgPgSgZgjIgEgHIAIACIAFABIAsgCQAegFAPgOIABgBIACAAQAUADAdAUQAbAUAEAMIAAABQgCANgnAXQglATgRAAIgFAAgAghgdIgtACQAuBGAZAGQAPAFApgXQAigTAEgMQgEgJgagSQgbgTgSgDQgOAOgfAGg");
	this.shape_510.setTransform(543.9,921.138);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FEDEA2").s().p("AgJAqQgQgFgXgcIglgzIAEABQApAmAiAJQApAMAzgWQgLAPgiARQgcAPgPAAIgHgBg");
	this.shape_511.setTransform(543.95,922.169);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#EDB878").s().p("AgKA0QgQgEgYgcIglgzQAQAEAdgEQAjgFAQgQQATACAdAVQAcATADAKQgCANgnAWQgiASgQAAIgHgBg");
	this.shape_512.setTransform(544.1,921.1382);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#7A4030").s().p("AgJAjQgJgEgRgRQgSgQgOgUIgFgGIAHABQARACARgCIAjgIIABAAQATAGAYATQAZASAAAOIAAABIgBAAQgEAIghADIgoABgAgcAMIAVARIADABIAmgCQAcgDAFgEQgDgLgVgRQgWgRgRgFIgGACQggAJgYgCg");
	this.shape_513.setTransform(535.3,921.85);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FEDEA2").s().p("AgKAbQgHgDgRgQQgSgRgPgTQANAHAVAQIAdAUIAsgDQAcgEAAAJQgEAGgiAEIgbACQgJAAgEgCg");
	this.shape_514.setTransform(535.475,922.3125);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#EDB878").s().p("AgKAfQgHgDgRgQQgSgRgPgTIAogBIAdgHQATAEAXATQAYASAAAMQgEAGgiAEIgbACQgJAAgEgCg");
	this.shape_515.setTransform(535.475,921.9125);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#7A4030").s().p("Aj5LuIgMgDQgigOgkgXQgrgbgKgTQgJgSgMhGQgJg2gEgtQgFgxAEgfQAHgrAagVQAWg5BehtQBsh8Beg3IgEgJQgihKgOg8QgZhvAWhtQAShaBEhiQAlg3BIhNIAkgqQAJgTAuAHQAnAGAwAVQA0AXAfAcIABABQA3CGAXEBQAYEKgkCCQg+B4izBrQiHBRiOArQAVAUAXAgQAXAfAFAPQAGATgCAYQgCAegMAdQgOAghDAdQg1AXgoAAIgTgCgABxrfIglAsQhHBMglA3QhEBhgRBZQgWBsAZBuQAOA6AiBLIAGAOIgCABQhfA2hsB9QhfBtgVA4IgBABQgZAUgGAoQgEAeAFAyQAFAzAJA0QALBBAIAQQAJARAoAaQAjAWAkAQIALACQArAHBBgcQBCgbAMgfQAMgcACgcQACgYgGgRQgFgOgXggQgZgigVgTIgEgDIAFgCQCNgqCIhRQC1hqA9h4QAkiBgYkIQgXkAg2iFQgfgbgzgWQgvgVgmgGQgNgCgJAAQgWAAgFAKg");
	this.shape_516.setTransform(559.8695,847.5229);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#F9A139").s().p("AlcKzQgSgJgLgbIgQgwIgLhTQgFgwAEgeQAGgsAagVQAVg4BfhtQBsh9Bgg4QglhUgMgvQgeh1AXhzQAWhwBkh9QBkhsAIgQQANgZBQAZQBQAYAwArQApBiAZC3IhYgKIhTgSQhegRgvA2QhFBVAyC2QAmCHBPB/QgjBoiWA5QiwAzhFAmQApBEAFAnQAHA3gwA0QgYAagcAKQgOAGgNAAQgUAAgSgMg");
	this.shape_517.setTransform(558.7684,842.8766);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#E47838").s().p("AkELoQgigOgkgXQgqgbgJgRQgJgRgLhDQgJg1gFgxQgFgwAEgdQAGgsAagWQAVg4BfhtQBsh9Bgg2QglhVgMgvQgeh1AXh0QAWhvBkh9QBkhsAIgRQANgYBQAYQBQAYAwArQA2CEAYEAQAZEKglCDQg/B7i4BsQiHBOiLAqQAVATAZAiQAYAgAFAPQAGARgCAYQgBAdgNAeQgOAhhJAdQgyAUgjAAQgQAAgNgFg");
	this.shape_518.setTransform(559.8814,847.5019);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#3F2F2D").s().p("AguBeIgBAAQgOgHgJgNIgMgZQgFgSgHgLIgogqQgKgMgGgPQgJgXALgQQAHgLAPAAIABABQAEABAFAJQAWAdAkAZQARAMAQAIQA5AcA8gFIAVgCQAbgDAIAEIAGAHQADANgMAPQgKAMgPAIIgVAHIg5AGQgJACgTAJIgcAMIgKABQgLAAgLgGgAgOBfIAagLQAQgIANgEIAkgEQAdgCANgGQANgHAKgMQAMgOgEgLIgEgFQgFgDgbADIgWACQg9AEg5gcIgigUQgmgagUgdIgJgJQgMAAgGAJQgKAOAJAWQAFAOAKAMIAnArQAHAJAHATIALAZQAIAMAOAHIgBACIABgCQAPAIAQgEg");
	this.shape_519.setTransform(1211.9568,745.6283);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#A96A59").s().p("AgTAhQg/gggQg4QAXAoAwAdQA5AkBFADQgQADgPAAQgsAAgrgXg");
	this.shape_520.setTransform(1209.225,742.4611);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#8B3F33").s().p("AgoBWQgUgKgMgVIgUgmQgFgJgXgRQgTgPgHgUQgIgTAFgLQAFgMAQAAIARATQARAWAhAXQAiAXAnAMQAnAMAogDIApgEQAQAAADAJQADALgPAJIgbAOQgNAHgUAAIgqADIglAQg");
	this.shape_521.setTransform(1212.1007,744.524);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#6F342D").s().p("AguBdQgUgKgJgXIgSgpIgcgdQgTgTgIgUQgIgTAHgOQAGgPARAAIAQATQASAWAhAXQAiAYAmALQAoAMAngDIApgEQARAAACAJQAEAMgMAOQgKAMgOAHQgOAHgVACIgrAEIgqASQgNAGgLAAQgMAAgKgFg");
	this.shape_522.setTransform(1211.9636,745.6181);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#7A4030").s().p("AA7CRQgugGgzgaIgDgBQgngTgagXQgbgXgCgQIAAgBQAQhPCDhGQAXgMAYgJIAUgGIgfANQgkARgeATQhkA9gOBDQADAPAaAWQAaAWAlATQAzAaAvAHQAvAGAegQIABADQgWAMgfAAQgLAAgNgCg");
	this.shape_523.setTransform(1212.175,734.7318);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#E47838").s().p("AgUBGQghgOgWgaQA4AGAigkQAPgSAdg7QADAUAMA5QAHAxgXAVQgSAIgUAAQgUAAgUgIg");
	this.shape_524.setTransform(1220.2081,742.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FED19C").s().p("AgPgQQA0goA3gTQgrAbg4AuQg7AwgZAeQAKguBCgug");
	this.shape_525.setTransform(1209.9,728.95);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#F9A139").s().p("AgeB1QhigugGgnQAOhFBlg9QAegUAlgQIAegMIA5EZQgYAMgeAAQgwAAg/geg");
	this.shape_526.setTransform(1212.225,734.6044);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#7A4030").s().p("AAIAZIgRgKQgagPgMgTIgGgPIAIAOQAMASAaAOQAYAQAVAFIAQABIgMABQgPAAgTgKg");
	this.shape_527.setTransform(1241.525,761.075);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#7A4030").s().p("AAAgMIAJgbIgJAbQgHAeADAWIgDAAQgDgWAKgeg");
	this.shape_528.setTransform(1206.5904,759.4);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#7A4030").s().p("AA+CVQgmgDgfgTIhBg1Qg+AGgugXQgdgOgYgcQgagcgBgnQgCggAQggQAHgPAMgKIAJgIQgeAcgHAsQgJA0AiAmQA5BDBlgJIAAgBIABABIAWASQAaAYASALQAeASAlAEQAxAFA7gfQAxgaAogpIADACQgpAqgyAaQgzAbgtAAIgNgBg");
	this.shape_529.setTransform(1213.2436,756.1342);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FEDEA2").s().p("AAsCFQg2gOgcgsQgVgdAeg6QABgIgJgDQgJgDgJADQgXAsgrAQQguASgogfQgbgTgNgXQgFgfAOglQANggAQgLQA2gUBKAiQAlARAZAVIBuAfQB0AoAgApQACAIAJAOQghAyhFAUQggALgeAAQgVAAgVgFg");
	this.shape_530.setTransform(1212.2453,754.0353);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#EDB878").s().p("AA+CVQgvgEgmgdIgxgqQhmAJg6hEQgigmAJg1QAIgsAdgdIHJC4IAXAVQgnAngvAaQg2AdguAAIgMgBg");
	this.shape_531.setTransform(1213.2558,755.977);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#828282").s().p("AgeA5IAAgBQgWgaAJhVIAAgBIABAAIAeAFQAUAGAQAIQAUAJACAIIABABIgBAAQgLAXgUAVQgXAagVAGgAgqgBQABAmAMAQQATgGAVgWQAUgWAMgWQgDgGgRgJQgQgIgSgGIgdgFQgDAbABAZg");
	this.shape_532.setTransform(1220.1194,771.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFDEB").s().p("AgdAGQgCgbAEghIAhACQAWAFADALQgGAZgNAaQgOAegNAKQgMgOgCgjg");
	this.shape_533.setTransform(1218.7417,771.175);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#D4D5D2").s().p("AgrAGQgCgbAEghQANgCAhANQAkANAEALQgMAXgUAVQgWAZgUAFQgMgOgCgjg");
	this.shape_534.setTransform(1220.1167,771.167);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#828282").s().p("AANAuQg9gTglgTQgMgFgHgFIgBAAIAAgBQABgLAGgTQAGgTAGgKIAAgBIACAAQAVgFBTAhQA4AWAdAOIABAAIAAAcQgEAbgKAIIAAAAIgDAAQgSAAg6gSgAhTg8IgLAcQgGARgBALIASAJQAjASA9AUQA+ATAQgBQAIgHADgXIAAgcQiMg/gnAAIgGAAg");
	this.shape_535.setTransform(1207.85,766.2262);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFDEB").s().p("AAyAsIgagFQhIgZgTgOQACgPAKgcIBGAnQAsAZAJANQgCAKgOAAIgCAAg");
	this.shape_536.setTransform(1204.225,765.8762);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#D4D5D2").s().p("AgDAnQhPgagVgQQABgLAGgSQAGgTAFgKQAWgFBVAiQArARAnARIAAAaQgDAbgKAIIgDAAQgVAAhGgYg");
	this.shape_537.setTransform(1207.875,766.231);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#828282").s().p("AgeA4QgWgaAJhVIAAgBIABAAQAJgBAVAGQAUAGAQAIQAUAKACAHIABABIgBABQgLAVgUAWQgXAagVAGIgBAAgAgog1QgDAbABAZQABAmAMAQQATgFAVgXQAUgWAMgWQgEgHgQgIQgQgIgSgFQgSgGgJAAIgCAAg");
	this.shape_538.setTransform(1198.2296,763.4179);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFDEB").s().p("AgZAGQgCgbAEghQAOgCAPAGQASAGADALIgTAuQgKAfgJAMQgMgPgCgjg");
	this.shape_539.setTransform(1196.4417,763.3839);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#D4D5D2").s().p("AgrAGQgCgbAEghQANgCAhANQAkANAEALQgMAXgUAWQgWAYgUAGQgMgPgCgjg");
	this.shape_540.setTransform(1198.2167,763.392);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#2F2D2C").s().p("AhICuQg6gDgxgYQgagNgQgQQgTgSgFgjQgCgVABg1IABhMQgCgtgKgnIAAgCIABAAIAegCIAAACQAGAgAAAnIAABAQgCAzACAVQAFAiARASQAPAPAZANQAtAWAzACQA5ACAmgcQAUgNAWgZIBfh2QAjgnAkgYIABgBIANAGIADABIgCACQgoAggkAqQgWAYgjAwIgsA5QgXAcgYAPQgkAZg4AAIgMAAgAj9ioQAJAnADAtIgBBLQgCA0ADAVQAFAiARASQAQAQAZAMQAxAYA5ADQA/ACAngbQAYgOAXgcIArg5QAigvAWgYQAkgqAnggIgJgEQgkAYghAnIhgB1QgWAagUANQgmAcg8gCQgzgCgtgWQgZgMgRgRQgSgSgDgjQgEgVADg0QAChXgIgug");
	this.shape_541.setTransform(1217.8,773.7898);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#452F2E").s().p("AhlCpQhOgMgogoQgbgbAChXQAEhzgPg6IAdgBQAHArgDBzQgCBMAZAZQAmAnBHALQBMAMAxgjQAdgTA/hTQA+hRA2gkIANAFQg9AvhDBcQg+BVgiAWQglAZg2AAQgUAAgWgDg");
	this.shape_542.setTransform(1217.725,773.818);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#828282").s().p("AgDA7QgZgBgMgHIgBAAIgBAAIAAgBQgCgSAKggQAMglARgTIABgCIABABQARALAOAhQAPAhAAAbIAAABIgBAAQgOALgbAAIgEAAgAgeAAQgKAgACAQQALAGAYABQAbABAPgKQAAgagNgeQgOgggPgLQgQASgLAjg");
	this.shape_543.setTransform(1214.5018,784.079);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFDEB").s().p("AgDA5IgUgJQgDgRALghQAMgkAQgTQANAagBBQQgNAJgLAAIgEgBg");
	this.shape_544.setTransform(1212.8464,784.2231);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#D4D5D2").s().p("AgDA5QgZgBgMgHQgDgRALghQAMgkARgTQAPALAPAgQAOAgAAAbQgOALgaAAIgEAAg");
	this.shape_545.setTransform(1214.5179,784.129);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#828282").s().p("AhyAYQgWgKgMgNIgCgBIACAAQAXgcAVgJIABgBIAEADIA4ASQAnAKAUABQAQACAQgBIggACIg7gLQgngJgSgJIgDgCQgVAKgVAYQAMALAVAKQAiASArAHIBQgDQAjgLAggdQAYgXAIgTQgfAYgZAIIgaABQARgBAOgFQAWgIAggZIADgDIAAAEQgCAPgdAdQgiAignAMIhRADQgsgHgjgSg");
	this.shape_546.setTransform(1213,784.175);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFDEB").s().p("AgYAjQhCgHgxgkQANgNAOgGQAQAJAqALIA9AKQAuAFAegKQAYgIAggZQAAAGgLAPIgfAgQgsASgxAAQgNAAgPgBg");
	this.shape_547.setTransform(1213.85,783.329);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#D4D5D2").s().p("Ag6AnQg9gOgcgbQAYgbAUgKQAPAJAqALIA+ALQAtAFAegKQAYgIAhgaQgCAOgcAdQghAigoAMQgTAGgYAAQgbAAghgJg");
	this.shape_548.setTransform(1213,784.4715);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#828282").s().p("AAAA+QgOgIgMgOQgMgPAAgLIAAgBQAIgVAOgVQAQgYARgMIABgBIABABQANAJAFAqQAGAsgNAjIAAABIgBAAQgEABgFAAQgJAAgLgFgAgOgbQgMAUgJAVQABALALANQAMAOANAHQAQAHAJgDQAMgigFgqQgFgngLgKQgRAMgPAXg");
	this.shape_549.setTransform(1198.809,780.031);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFDEB").s().p("AgTAyQgJgJgBgSQAJgXANgTQAPgYASgMQAHAHgGAnQgGAogOAXQgGACgFAAQgJAAgGgGg");
	this.shape_550.setTransform(1198.021,779.1493);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#D4D5D2").s().p("AgMAyQgYgTAAgRQAIgWAOgVQAPgYARgMQANAJAFAqQAFArgMAjQgFACgEAAQgPAAgRgQg");
	this.shape_551.setTransform(1198.7964,780.0547);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#8E3838").s().p("AgeBVQgugIgmgSQgkgSgKgUQgQggAageQAQgUAfgQQAWgLAbABQAbAAAYAMIARALQAdgPA0ABQAsABAaAKIACABIgCACQgQAOgmAyIgpA0QgWAagOAGQgLAFgRAAQgPAAgVgEgAhmhKQgdAQgQASQgZAdAQAeQAJATAjASQAlASAtAHQArAIATgJQAPgGAVgYIAogyQAigvATgSQgbgJgrAAQgxgBgbAPIgBAAIgBAAQgJgHgJgFQgXgLgagBIgDAAQgZAAgUAKg");
	this.shape_552.setTransform(1217.5797,778.8497);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#F37D7F").s().p("Ag7AuQgkgSgKgUQgRghAeghQAxgRAzAKQAyAJArAhQAYAQgdAnQgeAdg1AJQgngIghgQg");
	this.shape_553.setTransform(1212.2661,780.0797);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#EF6666").s().p("AhDBKQhKgWgQggQgPgdAVgdQARgVAggRQAagNAgAEQAiADAYAUQAcgPA0AAQAtABAaAKQgPANgzBDQgtA6gVAKQgLAFgSAAQgbAAgsgNg");
	this.shape_554.setTransform(1217.5418,778.8982);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#2F2D2C").s().p("AhICtQg6gDgxgYQgagNgQgQQgTgSgFgjQgCgVABg1IABhMQgCgtgKgnIAAgCIABAAIHDAfIABABQAUAUAeAPIAMAFIgCACQgoAggkAqQgWAYgjAwIgsA5QgXAcgYAPQgkAZg4AAIgMAAgAjxhVIgBBLQgCA0ADAVQAFAiARASQAQAQAZAMQAxAYA5ADQA/ACAngbQAYgOAXgcIArg5QAiguAWgZQAkgqAnggIgGgDQgegPgVgVIm/gfQAJAnADAtg");
	this.shape_555.setTransform(1217.8,773.8648);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#7C2E2F").s().p("AAKCVQgdgNgSgRQgbgbAChYQAEhzgPg5IB1AEQgqBNAIBeQAJBeA3BEQgigGgegOg");
	this.shape_556.setTransform(1199.525,773.65);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#442F2E").s().p("AhlCoQhOgMgogoQgbgaAChYQAEhzgPg6IHDAgQAKAKARAMQATANAOAFQg9AvhDBbQg+BWgiAWQglAZg2AAQgUAAgWgEg");
	this.shape_557.setTransform(1217.725,773.868);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#4C372E").s().p("AA3BWQACglgLgdQgPgpgngUQgcgNgfgCIgDgBIABgCQAIgTAWgLQAYgNATAHIAHADQAiARAQArQAUA1gWBBIgFAMg");
	this.shape_558.setTransform(1257.3206,711.6244);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#4C372E").s().p("ABdAuQgWgZgZgMQgogTgqAMQgdAJgcAYIgJAIIAHgKQAmg5A2gQQArgOAhAQIAHAEQARAMAFAZQAEAZgKASIgCACg");
	this.shape_559.setTransform(1214.6571,688.7411);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#7A4030").s().p("AA0BCIgOgIQg0glgjg9IgBgBIgIgSIgCgIIADgBIADAIIAHARIABABQAjA9AzAkIAVALIgBADg");
	this.shape_560.setTransform(1200.025,723.225);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#7A4030").s().p("ABqADQgrgSg9AAQg8AAgrALIggAJIAGgEQAGgEALgDQAtgMBDAAQAtgBAkALQAZAHAQAMIAJAJQgJgJgSgIg");
	this.shape_561.setTransform(1246.65,747.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#F9A139").s().p("AgnAsQgugIgegfIgUgcIAfgLQArgLA9AAQA/AAArAUQAVAKAJAKQgZAPgjAOQg2AWgnAAQgMAAgKgCg");
	this.shape_562.setTransform(1246.825,749.9639);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#2C2E33").s().p("AgfBAQgPgIgCgYQgCgZANgZQANgaAVgNQATgOAQAIQAPAIACAYQACAYgNAaQgNAagVANQgMAJgLAAQgGAAgGgDgAgCg2QgTANgNAZQgMAYABAXQACAWAOAHQAPAHARgMQATgNANgZQAMgYgBgWQgCgXgOgHQgFgDgGAAQgKAAgLAIg");
	this.shape_563.setTransform(1204.7944,718.525);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgDAIQgDgBgBgDQgBgEACgCQACgEADgBQACgBADABQADABABAEIgBAGIgFAEg");
	this.shape_564.setTransform(1202.7083,719.1125);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgJAUQgHgEgCgIQgBgIADgIQAEgHAJgEQAGgDAHADQAHAEABAHQACAIgDAIQgEAIgIAEQgEACgDAAQgEAAgDgCg");
	this.shape_565.setTransform(1204.7,716);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#2C2E33").s().p("AgPAhQgIgEgBgMQgBgNAHgNQAHgNAKgHQAJgHAIAEQAIAEABAMQABANgHANQgGANgLAHQgFAFgGAAIgGgCg");
	this.shape_566.setTransform(1204.775,718.5365);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#4F74B8").s().p("AgYAnQgPgIgCgXQgBgXAMgZQAAAjAXAKQAVALAcgUQgNAYgUANQgLAIgLAAQgGAAgFgCg");
	this.shape_567.setTransform(1204.217,720.8872);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#354D9E").s().p("AgeA+QgPgHgBgYQgCgXANgZQAMgaAUgMQATgNAPAHQAPAHABAYQACAXgNAZQgNAagTANQgMAIgKAAQgGAAgGgDg");
	this.shape_568.setTransform(1204.7803,718.5397);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#2C2E33").s().p("AgTBWIgIgEQgTgJgIgbQgIgbAIgfQAJgkAVgUQAXgWAVAGIAJACQATAKAHAbQAIAbgIAfQgIAjgXAWQgRARgRAAIgJgBgAgWhCQgVAVgIAiQgHAeAHAZQAHAbATAIIAHADQAUAFAVgUQAUgVAIgiQAIgdgIgbQgGgagSgJIgHgDIgIAAQgQAAgSAQg");
	this.shape_569.setTransform(1246.7,738.25);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("AgIAGQgCgEABgDQABgFAEgCIAHgCIAGAFIABAIIgFAHIgHABQgEgBgCgEg");
	this.shape_570.setTransform(1244.4083,738.9);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("AgFAZQgKgCgFgJQgEgJACgJQACgLAJgGQAIgGAJACQAJADAGAJQAFAJgDAJQgCALgJAGQgGAEgGAAIgFgBg");
	this.shape_571.setTransform(1245.95,734.9601);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#2C2E33").s().p("AgJArQgLgDgFgPQgFgOAEgQQAEgSALgLQALgKAKADQALACAFAOQAFAPgEAQQgEASgLAKQgIAJgJAAIgEAAg");
	this.shape_572.setTransform(1246.7,738.25);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#4F74B8").s().p("AgRAwQgWgFgKgdQgJgbAIgjQAMAoAkAIQAiAHAXgeQgIAigVAVQgRARgRAAIgJgBg");
	this.shape_573.setTransform(1246.5421,741.8821);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#354D9E").s().p("AgTBUQgWgFgKgdQgJgcAIgiQAIgjAVgVQAWgUAVAFQAWAFAJAcQAKAcgIAiQgIAjgVAVQgRARgRAAIgJgBg");
	this.shape_574.setTransform(1246.7199,738.2581);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#292929").s().p("AgnCqIgQgGQglgSgPg3QgPg2APg9QAQhHArgpQAsgrAsALIAPAFQAmATAPA2QAPA2gPA+QgQBGgsAqQgjAigiAAQgJAAgJgCgAgtiGQgrApgQBGQgOA8AOA1QAPA1AkASIAPAFQAqAKAqgpQArgqAQhEQAOg9gOg1QgPg1gkgSIgPgFQgJgCgIAAQghAAgiAhg");
	this.shape_575.setTransform(1247.675,734.193);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AgyCMQgegEgUgUQgNg1AOg7QAQhEArgqQAqgqAsAKQAoAKAUAxQALCZhsA3QgXAMgZAAIgLgBg");
	this.shape_576.setTransform(1247.0127,731.2781);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#D4D4D4").s().p("AgnCoQgsgKgTg5QgUg4AQhFQARhFArgqQAqgqArAKQAtALATA4QAUA5gRBEQgQBGgrAqQgiAhgjAAQgIAAgJgCg");
	this.shape_577.setTransform(1247.6676,734.1921);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#292929").s().p("AgmCoQgtgLgUg4QgTg5AQhEQARhGArgpQArgqAqAKQAtAKATA5QAUA4gQBFQgRBFgrAqQgiAigiAAQgJAAgIgCg");
	this.shape_578.setTransform(1248.25,733.0009);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#292929").s().p("AgHCUQg/gtgfhBIgBgBIAAAAQALgkANgZQAkhJAogfQAogfAjARQAfAQgBA4QgBA4ggA/QgfBAgsAjIgBABgAAAh8QgnAfgkBHQgPAegIAdQAfA/A9AtQAqgiAfg/QAfg+ACg3QABg3gegPQgLgGgNAAQgXAAgYAVg");
	this.shape_579.setTransform(1204.6266,714.1875);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("AhUBcIgOgaQAJggAOgdQAihDAlggQApgjAkASQATAJAHAaQABBAggA2QghA6g1AQQgHADgHAAQgZAAgbgbg");
	this.shape_580.setTransform(1204.4515,711.2947);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#D4D4D4").s().p("AhkAmQAJggAOgdQAihEAlgfQApgkAkASQAfAPgBA4QgBA3ggA/QgfBAgsAiQg/gugeg/g");
	this.shape_581.setTransform(1204.6516,714.1472);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#292929").s().p("AhkAmQAHgeAQgeQAihEAlggQApgkAkASQAfAPgBA4QgBA3ggA/QgfBAgsAiQg+gtgfhAg");
	this.shape_582.setTransform(1205.2516,712.9472);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FEC781").s().p("AiMCiQgOhLA9iYQAlhfA1gsQAygqAsAWQAsAVAHBLQAHBKgfBlQgkB6gsAmQgdAag7AAQhNAAgNhHg");
	this.shape_583.setTransform(1248.7665,727.7248);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FEC781").s().p("AhkCvQgpg1gDgZQgIg3A3huQAohQA6gpQA6gpAsAVQAqAWABA6QAAA4gmBiQhLDAhFAAQghAAgfgqg");
	this.shape_584.setTransform(1209.4053,707.2133);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#7A4030").s().p("AjCKtQhHgKhIgjQgsgWgdgaQgdgZgHgZQgKgeAIgfQAGgTATgmIAWgsQARgqgFgrQgEgjgWgxQgMgbgegoQgfgtgNgbQgUgtgCg0QgChMAjhAQAihAA/gmQAOgcAahBQAdhJASglQAeg8AhgoQA1hABIgfQBIgfA5APQASAEAPAIQAbANAlAjQAdAbAPAHIA/AFQAsgCAZADQAsAGAsAWIASAKQA/AjAiA/QAiA+ACBVQACA7gOA+QgJAogbBQIgdBcQA7CCg7B2QgvBfhdAsQgeAOgsANIhPAWQhCARgaAKQgrAPgNARQgLARgQAnIgVArQgOAXgUAPQgcAUgyAAQgSAAgVgCgAh1qWQhHAgg0A+QghAogeA8QgSAlgdBJIgoBdIgBABQg+AlgiBAQgiA+ACBMQABA0AVAsQAMAaAfAtQAfAqALAaQAXAyAEAjQAFArgSArIgWAtQgTAlgFASQgIAfAJAdQAHAYAdAZQAcAZAsAWQBFAiBHAKQBPALAlgcQATgOAOgWIAUgrQAQgmANgTQANgSAqgPQAcgKBCgRIBPgWQAsgOAdgOQBcgrAvheQA6h0g7iBIAAAAIAAgBIAehdQAbhRAJgmQAOg+gCg7QgDhUghg+Qgig+g9giIgTgKQgrgWgsgFQgagEgqACIgiABIgegGIgDgBQgOgHgdgbQgkgigagNQgPgHgSgFQgRgFgUAAQgqAAgwAVg");
	this.shape_585.setTransform(1229.107,742.8994);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FEDEA2").s().p("Ai2DXQhwgrgVhRQADgTALgYIAWgrQARgiAhgjQAdgeAHgYIAUhUQAQgXAPgOIEIASQAogBA6APIBfAYQhkBigqBgQgwAOgiBNQgrBfgVAVQgQAMgRACQgaAIgfAAQg1AAhCgZg");
	this.shape_586.setTransform(1215.7,783.3448);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#F9A139").s().p("Ak8KAQhxgsgUhQQADgTALgYIAWgsQAQgiAigjQAdgeAHgZIAUhZQADgwgogPQhDgagtgoQg0gugNg2QAAhJAjg+QAig9A8gkIBBiaQAqhhAsg1QA1hBBIgeQBHgeA3AOQArALAoAlQAuApAMAGIArAFIA0gBQBKAABGAnQA9AjAhA8QAjA+ADBXQACBFggBMQg1CCgJAcQAPAgAMApQAOAsABAZQgVB7h8BMQhzBGiJgFQhIgCgmBSIgfBGQgTApgVAVQgQAMgSACQgbAIgeAAQg1AAhCgZg");
	this.shape_587.setTransform(1229.131,740.8586);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#EDB878").s().p("AiVDrQg8gWgsgfQgvgigKggQgMgmASgrIAnhQIAIgWQANgUAohRQAeg/AhgeIEHASQAoAAA6AOIBgAYQidCYgOCVIgHAHQgJANgaA7QgUAsgcAVQgdAWgvAAQg1AAhLgbg");
	this.shape_588.setTransform(1215.6639,785.4657);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#E47838").s().p("AkbKUQg9gWgsgfQgvgigKggQgMgmATgrIAnhRQARgqgFgqQgEgkgWgxQgLgXgUgdIgjgyQgohAgChGQgChMAjhAQAig/A+glIBBiaQAqhhAsg1QA1hBBIgeQBHgeA3AOQArALAoAlQAuApAMAGIArAFIA0gBQBKAABGAnQA9AjAhA8QAjA+ADBXQACBKgZBXIg3CtQA6B/g4B0QgvBgheAtQgqATiHAkQhqAdgSAZQgJANgaA7QgTAsgcAVQgeAWgwAAQg0AAhLgbg");
	this.shape_589.setTransform(1229.1271,742.9795);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#382E2C").s().p("AAhgBQgwgMg3AHIAAgEQA3gHAwAPQAZAGANAJQgNgIgZgGg");
	this.shape_590.setTransform(1224.525,650.361);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#382E2C").s().p("AAPCEQAeh4gkhTQgKgagQgUIgOgOIAPAOQAQATAMAbQAlBSgeB5g");
	this.shape_591.setTransform(1242.9716,670.15);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#382E2C").s().p("Ag4BkQAhhfApg9QAWggAPgNIACADQgPANgVAfQgpA9ghBfg");
	this.shape_592.setTransform(1250.775,672.175);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#382E2C").s().p("Ah5BfQA1hsBvg3QAqgUAlgIQgkAJgqAVQhtA3g1Bsg");
	this.shape_593.setTransform(1256.3,674.625);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#382E2C").s().p("AANBzQALhwgVhFQgGgWgJgPIgIgLIAKALQAJAPAHAWQAWBEgLBxg");
	this.shape_594.setTransform(1299.8083,709.125);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#382E2C").s().p("AgBgbIAFgsIgEAsQgCA0AGAuIgEAAQgFguAEg0g");
	this.shape_595.setTransform(1288.483,732.65);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#382E2C").s().p("ABsC6QhAgggthLQgegxgRg4QgCAaAFAjQAGAiAKAWIADAHIgGgFQg5gvgZhhQgThKAEhFIADAAQgEBDASBIQAXBcA2AxQgKgZgFgkQgEgiADgbIABgJIACAJQASA8AfA1QA1BXBNAbIgCAEg");
	this.shape_596.setTransform(1293.7152,743.45);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#382E2C").s().p("AAtLHQAAgvARgsQAKgZAYgnIADgFQgfgBgoAKQguALgWATIgBABIgBgBIhZhqQhfhsgrgVIgMgEIAOABQApAVBbBlIBfBwQAXgTAwgLQAqgKAdACIADAAIgGAKQgXAlgJAXQgRApgBAsQA+iBDfg2IADgBIgBADQgLBhhXBIQCDg9BTh2QBSh2AEiGIAAgFIADAFQAUAeAKAcQAFgbgFgqIgOhVQgThigDg3QgDg5AGhRQADguAKhfIAJhiQAHhagOgwQgUhHhEgiIgEgCQg3gag8ATQgkALg8AnIglAWQgYAOgRgJQgLgFgJgPQgWgogjgjQgkgigpgUQg5geg7AGQhIAGgvAuQgeAeg4BeIgMAVQg7BjgxA6QhGBThCAcQAtAAA9gWIAJgDIgHAGQg5AygbA6QgWAxgLBOQgGAsADA3QABAfAHA8IAHBGQAkhBAIgxIABgIIACAIQAGAVANAZIAcAtQAsBFAJAnQAPBCgqBHQAVgBAjgZIBWhJIAJABQgEAAgDACIhZBKQglAagWAAIgDAAIACgDQArhHgOhBQgJgogshEQgkg4gJgdQgJAwgmBBIgDAFIAAgGIgGhLQgHg9gCgfQgCg3AGgsQAKhNAVgwQAag6A2gxQg/AWgtgCIgIgBIAIgDQBEgZBHhUQAzg8A8hlIAMgVQA3hdAfgeQAxgxBIgGQA7gFA8AdQApAVAkAjQAkAjAWApQAUAiAkgVIAlgWQA+gnAjgLQA9gTA4AaQBIAiAWBIQAOAygHBcIgJBiQgKBfgDAuQgGBRADA5QADA3ATBhIAPBaQAFAsgHAbIgBAGIgCgGQgJgagUggQgGCIhWB4QhXB3iHA7IgNAFIALgIQA4grAbgzQATgkAGgrQjiA3g6CFIgEAHg");
	this.shape_597.setTransform(1226.842,738.4632);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#4C322E").s().p("ABCJqQAJgWAbgrQgdgBgpAJQgyALgXAUQg1hDg6hAQh1h/gYAVIhJA+QgwAmgZAAQA5hegvheIgthLQgcgtgIgeQgJA1gnBCIgLh4QgJhVAIg8QALhRAYgyQAbg5A4gxQhGAZgugDQBDgZBGhRQA0g9A+hoQBChtAbgdQAxg1BNgHQBOgGBKAzQBAAtAjBBQAVAkAmgWIA0ggQAigVAYgLQBKggBCAfQBGAhAVBFQAQAzgHBdIgSC3QgLB5AEBKQACAwAYCAQASBhgJAnQgKgdgWgiQgECLhZB6QhXB3iGA6QA7guAcg3QARgiAFgqQjlA3g7CHQgBgzAUgug");
	this.shape_598.setTransform(1226.8452,738.1386);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#382E2C").s().p("Ah4A7IAAgEQBZADBUg6IAXgPIgWARQhQA5hWAAIgIAAgABngnIASgTIgSAUIgNALIANgMg");
	this.shape_599.setTransform(1174.325,698.8822);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#382E2C").s().p("AgYA/QAMg9ATglIASgbIgQAcQgSAmgMA8g");
	this.shape_600.setTransform(1160.2,756.55);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#382E2C").s().p("AgUBjQAEhNAShDIATg1IgRA1QgRBDgDBNg");
	this.shape_601.setTransform(1178.2,794.2);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#382E2C").s().p("AgiBkQAsg5ARhOIAIhDIgGBFQgPBOguA6g");
	this.shape_602.setTransform(1191.6,829.875);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#382E2C").s().p("AgsAyQAsgfAbgnIASggIgRAiQgZAogtAgg");
	this.shape_603.setTransform(1231.525,820.55);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#382E2C").s().p("Ai3D8QDph9BYiwQAjhIAJhKIACg7IAAA8QgIBKgjBIQhZCyjpB9g");
	this.shape_604.setTransform(1270.675,799.525);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#382E2C").s().p("AmrPfQAAglgQgmQgKgYgZgrQggg4gNghQgVg5gBhAQgMAWgTAUQgTAWgQAIIgFADIACgFQAegzgQhNQgNg3gnhOIgig7Qgeg0gIgZQgPgpAIguQgSAkgbAXQgYAUgRABIgFABIADgEQAjggADg/QABgmgQhXQgLhBgEgfQgFg1AHgpQAMhIAdg5QARghAjgwIAdgrIgmgCQgcgDgOgIIgEgCIAEgCQBmgbBjhhQBIhFBRh2QBAhdA3gzQBOhIBOgKQhAgfgIgYIgBgDIADABQAPADAZgDICHgVQA1gDAwAPQATAGAaAMQA9AeApA0QAlAvAFAsQA2gxAvgTQBAgaBGATQAaAHAbANQA4AcAqAzQAYAdAcAxQAaAvAoAUQAfAPAXgIIAIgDIgGAGQgRAPgYAGQgZAGgWgGQAQBBgFBLQgDAygVCFQgSB5AGBWQAGBWAjB5QAlB/gWB4QgaCAhXBkQhaBmiJA8QhfAphsARQjeAhg2A8IgEAEIAAgFQAFguASgiQgWANgoAMIhSAWQhUAUgqAPQhHAYgrAgIgDACgAoeJ4QAABCAWA6QANAiAgA5QAZArAJAXQARAmABAlQArggBGgYQApgOBUgVIBVgWQArgNAVgPIAGgEIgDAGQgVAjgEAtQA6g6DZghQBqgQBfgpQCKg8BYhmQBVhgAZh8QAah7gmiAQgjh5gHhWQgGhXATh5QAUiHADgxQAFhMgQhBIAAgDIADABIApACQAXgEAQgNQgVAEgbgNQgqgVgbgvQgbgxgXgcQgrg0g2gbQgZgMgcgHQhFgUhBAbQgtATg3AxIgCADIAAgEQgFgrglgvQgog0g9gfQgVgKgYgIQgvgPg1ADIiFAVQgXADgRgCQAKAVBBAgIAFADIgGAAQhPAIhPBIQg4AzhABeQhSB1hGBFQhjBhhkAdQAPAHAbADIAmABIghAwQgiAvgRAiQgcA4gMBIQgIAoAGA1QACAdAMBCQAPBVAAAnQgBA+giAiQAVgFAXgXQAagaAPglIAEABQgMA0ANArQAJAbAfA2IAhA7QAoBNAMA2QASBMgbA0QAQgKASgWQASgWAKgUIADgGg");
	this.shape_605.setTransform(1230.75,740.9071);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#8C4E36").s().p("AA0AdQhDgUg8ARQAPgMAcgGIAugHQg1gKgeAAQgwAAgeAXQAdgeAqgNQAmgMAsAEQgugSg1AMQgyAMgoAfQBHhRBsgJQBqgJBRBGQg5glhsgGQBJAKBdBGQhUg9hSAGQAqAKAlAYQAlAYAYAiQhJgyg6AJQBTASA4BGQg0gsg+gTg");
	this.shape_606.setTransform(1218.95,661.4237);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#8C4E36").s().p("Ahqg0QAXgFAbAEIAxALQgjgRgxgEQgUgChEAAQBDgNAbgCQA7gFAyAQQAzAQApAgQAlAaAZAkIACAJQgqg+hzgmIBCAwQAjAdAKAjIgugvQgcgZgYgKQAbAbANAUQATAdACAbQg4hhiTgmg");
	this.shape_607.setTransform(1235.125,649.8919);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#8C4E36").s().p("AASgYQhJguhNAJQAfgOAqAHQAcAEAuARQgYgRgmgLIhCgRQBMgEBBAkQBGAkAjBBQgYgpg/gYQA5AsAYBJQgmhLhHgqg");
	this.shape_608.setTransform(1282,667.8047);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#8C4E36").s().p("ABBBxQgMg3gcgkIABBCQgDAngNAaQgGhagEghQgMhDgggxQgNgVgcgPQgPgHgngPQA8ABArAzQAlAtANBDIgBgrQgDgagLgQQALAGALASQAMAUAHAEQgUhJhEg0QARABAVAKIAhARQgWgjgpgZQgegRg0gTQBjAHBLBVQBIBPAQBmQgbg2gLgQQgagmghgRQAfA3AHBMQAEA3gHBXQgHhHgGgbg");
	this.shape_609.setTransform(1285.425,687.85);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#8C4E36").s().p("AgPBHQAJglgDgXIg6BrQAsh3gaiAQARAXAHAiQAFAYABAoIAJg1QAEgegEgWQANAlADAsQADAigEAvQA3hfAChRQAQBEgcBHQgYA+g0A4QAAgQALgrg");
	this.shape_610.setTransform(1296.7294,781.925);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#8C4E36").s().p("AhHgGQABhnAxg7QgMAdgFAlQgEAZgDAqQAGgZAQgcIAfgyQgNAsgEAWQgIAlADAeQADgdAUgmIAhhAQgSBGgCAhQAPglAjgsQgWAigKA5IgNBgQgHgWgFgaIgKgvQgJAYgEAoIgFBEIgPg5QgHgiAGgYQgLAhgHA2IgLBXQgOidABgSg");
	this.shape_611.setTransform(1161.7241,730.8);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#723D30").s().p("AlwM8QADhJgmgvIgNBbQgJA1gTAiIhQi/QgGgMgEgRQgDgSABgOQACgdAViGQAPhjgEhBQgJBvg0BqQAHgugGg4QgEglgNg/IgNBRQgHAuACAjIg1hSQghgygIgnQgQhKAOhJQAOhJArg+IgQAHQgeAmglBjQgiBbgoAmQAVgxgXh9QgZiMALg8QAMhFAag3QARgiAggtQBngLBTgxQBag2AphXQhFBAhXAhQhaAjhYgGQBdgiBchfQBChCBKhsQBGhlA8g0QBKhABLgIQBJgBA0AOQgbgMhLgUQhBgQghgVIgBgBQAUAEBigSQBcgQBCAVQAzAQAqAgQAlAbAZAkQANA0gfBIQABgWgLgYIgVgoQAHAjABAXQABAegHAaQgPgtgZgkQgcgnglgVQBPBKgRCaQgFgVgGgLQgJgRgPgHIATBIQg0g4gcgZQgygsgzgBQBBAoAzBZQAdAzA2BpQBRhdASgSQA8g+A6gdQgfgDglAQIg/AfQASgVAfgSQASgLAlgTQgyAGgVANQAYgdAsgbIBNgqQgqgBgzARQgxARgiAcQAlhLAhghQA1g2BRgKIAAAAQAfgBAjAJQBMAWA4A5QAiAjAjA+QAXAqAlAWQAjAVAcgKQgSAQgZAFIgugBQAPBAgEBKQgDAzgVCJQgSB3AGBWQAGBXAjB6IAMAsQgTgJgTgYIgegpQhlh+gHiMQgMApgJBQQgXgogKgbQgOgmADggIAJhPQAFgvgCgfQg1B9AbCIQAbCMBlBPIgCgkQAlBWBmA+QADAngEAmQggByg6BJQgiAsgdAVQgsAggogMQAlg+APhLQAQhJgHhKQgHBPgYBBQgRArgpBOQgVAjghAeQgrAlgkAAQAOgeADgMQgkAmgbAUQgkAbgmAKQgcALhPARQhDAOgmAUQAUgcAXgyQAag3ALgUQgeAyguAjQgwAlg7AOIhoAPQg7AJgkAZIAhgwQATgdAIgVIizCmQAUhhABgeg");
	this.shape_612.setTransform(1230.9947,737.1918);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#4C322E").s().p("Am7OMIgphLQg6hmgBhiQgKAWgUAXQgVAYgRAIQAdgxgOhJQgMg6gqhSQgwhRgQgjQgag5APg/QgRApgdAbQgaAXgTACQA0gwgWiGQgOhMgFgnQgJhDAIgvQAQhbArhGQAwhBAQgdIglgCQgegDgPgJQBmgbBlhkQBHhEBRh1QBFhlA9g1QBKhABLgHQhEgjgIgXQATAEBigRQBcgRBDAWQBRAaA3A9QAvA1AGA0QA1gxAvgUQBBgbBGAUQBNAVA3A5QAiAkAjA+QAYAqAkAVQAkAVAbgJQgRAPgZAGIgugCQAPBBgEBKQgEAygUCJQgTB4AGBWQAGBXAkB5QAlB+gXB5QgYB+hYBlQhTBfh8A6QhmAvh4ATQjeAig4A8QAFgxAVglQgfAViWAmQiSAlg+AvQgBgpgTgrg");
	this.shape_613.setTransform(1230.625,740.8418);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#7A4030").s().p("AAAB6QhEgEhCghIAAAAQghgZgBgpQgBgoAggcIAAAAIABAAIAggJIApgSQA5gbAegJQA0gQAjAMQAXAIAPASQAPATAEAaQAFAjgPAkQgOAlgdAaQgkAhhCAAIgNAAgAAYhtQgeAJg4AbQg3AagSABQgfAbABAmQACAnAfAYQBBAhBDADQBKAEAngjQAcgZAOglQAOgjgFgiQgFgugmgSIgLgFQgPgEgRAAQgYAAgeAIg");
	this.shape_614.setTransform(1313.2626,729.0206);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#F7997C").s().p("AABBmQhCgEhCggQgXgSgHgbQA1AMAvgGQA1gHAngcQgYALghAAIg8gHQANgBAPgHIAZgMQgdAFgUgKQAngLBSgyQBHgfAlA7QAPAZAAAiQgNAsghAdQgkAghAAAIgPAAg");
	this.shape_615.setTransform(1313.075,730.8361);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#E67456").s().p("AAAB4QhDgEhCggQgfgYgCgnQgCgpAggbQAPgCAhgOIBAgeQBWglAwAPQA7AUgCBGQgBBCg0AvQgkAghAAAIgOAAg");
	this.shape_616.setTransform(1313.271,729.0183);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#7A4030").s().p("AiyC0IAAAAQgTgOgLgmQgLgmgCg2QgCg8ALg1QAOg8AagXIAAAAIABAAQAXgDA6gVQA/gYAhgGQA6gLA0ARQAMAEAKAFQBGAjAMBVQAMBOgoBWQgWAugjAgQgkAfguAOQgjALgmAAQhJAAhVgngAAGjTQghAGg+AYQg3AWgaACQgZAWgNA8QgLA0ABA7QACA0ALAmQALAlASAOQB5A4BigaQBkgZAthiQAnhTgJhLQgKhWhIgkQgJgFgMgEQgggKghAAQgWAAgWAEg");
	this.shape_617.setTransform(1316.2386,726.0668);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#F9A139").s().p("Ag+DGQhUgJg/g0QgShGALhWQAKhcAjgeQAWgCAlgOIBEgZQBZgeBGAXQA6ATAbAzQAZAugFBAQgdCEhhAvQg7AehBAAQgQAAgQgCg");
	this.shape_618.setTransform(1316.2232,724.314);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#E47838").s().p("AiyCyQgsgiACiDQACiDAvgpQAWgCAlgNIBEgZQBZgeBGAXQBTAbASBZQARBSgrBcQgsBehdAdQgjAKglAAQhKAAhVgng");
	this.shape_619.setTransform(1316.2614,726.0819);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#7A4030").s().p("AAACGQgPgDgPgIQgogTgXgpQgbgvAIg1QAHg0ApgbQAngZAuANIAaAKQAgAPATAeQAOAWADAWIAAAAQgDAVgrA/QguBEgXAKIAAABgAg+hxQgnAZgIA0QgIAzAbAuQAXAoAmATIAdAKQAWgKAshDQAqg+ADgUQgDgVgOgWQgSgcgegPQgLgGgPgEQgPgEgOAAQgcAAgZAQg");
	this.shape_620.setTransform(1180.6586,674.8889);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#F7997C").s().p("Ag/A5QgkgzAJg9IAEgQQAZggAlgIQA0gKAlApQAjAogJA0IgogbQgXgRgTgHQATAMAPAWIAZApIgogVQgYgOgRgBQA4AVAFBFQgSAUgKAEQgxgJgigwg");
	this.shape_621.setTransform(1178.5849,676.677);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#E67456").s().p("AhUBLQgkgzAJg9QAIgyAmgaQAmgbAwAOQArALAaAhQATAZAEAcQgDAUgqA/QguBDgWALQgygJgigwg");
	this.shape_622.setTransform(1180.6519,674.875);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#7A4030").s().p("AgGDnQgVgDgYgLQhAgggnhKQgqhOAQhMQALg0AbgpQAbgqAngZQA7gmBAAPQAXAGASAJQAxAYAaAyQAUAmACAnIAAABQgIAmhGBvQhLB3glAWgAhKjIQgmAZgbApQgaApgLAzQgQBKApBOQAnBIA+AfQAVALAXADQAlgWBJh1QBGhuAIgmQgCgmgUglQgagygwgXQgTgKgVgEQgSgEgRAAQgsAAgpAag");
	this.shape_623.setTransform(1182.1293,673.0627);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#F9A139").s().p("Ah+B/Qg/hVAThXQAThcA5guQA6gvBLASQBFAQAlA4QAdAsACAxQgIAmg5BhQg/BsglAWQhNgKg8hRg");
	this.shape_624.setTransform(1182.8887,671.8607);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#E47838").s().p("AiLCFQg5hYAShYQAUhcBAg1QBCg2BLASQBEAQAmA4QAcAsACAxQgHAkhGBvQhKB3gmAWQhMgKg5hWg");
	this.shape_625.setTransform(1182.1248,673.0608);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#382E2C").s().p("AjdLDIgBgBQhBhECTqmQAujSA9j2IA0jSIACACQBKBIAqBTQA3BtgGB1QgGBzAEA5QADAuARBOQAlCYABBcQACCDg5B0Qg9B6h0A/QhkA2iCAEgAglnTQg9D3gsDPQiLKIA9BEQCNgEBng+QBog+A4hxQA5hzgCiCQgBhcgliXQgRhOgEguQgEg6AGhzQAGh0g1hrQgphShJhIg");
	this.shape_626.setTransform(1295.1569,745.6);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#723D30").s().p("Ah8hWQArjFA4jdIAti3QBOBMAqBYQAyBpgGBvQgGByAEA5QAEAvARBOQAkCXACBZQADCFg7B1IgHAPQAdhWgRhNQgJBIgdA+QghBDg1AoQADgPAQgqQAOghgBgXQg4BUhYA9QhXA7hmAZQgdiRCMp1g");
	this.shape_627.setTransform(1295.1756,744);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#4C322E").s().p("AiKgoQAujUA9j3IAzjNQBOBMAqBZQAyBogGBvQgGByAEA5QAEAvARBOQAkCXACBZQADCFg7B2Qg8B6h0A+QhjA2iCAEQhBhECTqlg");
	this.shape_628.setTransform(1295.1715,745.675);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#7A4030").s().p("AhAB5QgNgDgGgEQgVgOgHg8QgHg6ALgvQALg0AcgEIAPAAQAVAEAVAVQANAPALASQAZAoAfAFQATADAVgMIAGgDIgBAGQgEATgLAZQgOAigPAOQgcAcgpAPQgcALgYAAIgNgBgAhmhAQgKAwAHA4QAHA5ASAMIARAGQAbAEAkgNQAmgPAcgbQAMgMANgdIAPgqQgUAKgSgDQgkgFgYgrQgdgyghgFIgNAAQgYAEgLAvg");
	this.shape_629.setTransform(1417.8889,994.3207);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FEDEA2").s().p("Ag8A+QgDg0AKgnQALguAZgEQAWgDAXAUQASAPAOAZIACACQgBAggOAaQgQAcgdAMIggACQgRgEgNgOg");
	this.shape_630.setTransform(1412.8796,990.4239);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#EDB878").s().p("AhRBwQgfgVAChkQAChnApgGQAXgDAYAUQARAPAOAZQAPAaAWAMIA/gBQgDASgLAZQgOAhgPAOQgiAigwANQgWAGgQAAQgSAAgLgHg");
	this.shape_631.setTransform(1417.8439,994.3063);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#7A4030").s().p("AhQBiQgUglAXhUQAVhSAbgRQAQgKAVAEQAjAFAoAfIABAAIAAABQAHASAABMQgBBXgUATQgNANgbAGIg1ACQgrgGgOgagAgZh1QgYAPgWBPQgXBSATAkQANAYAnAGIAzgCQAagGAMgMQARgRABhTQABhHgGgWQgngeghgEIgJgBQgOAAgJAGg");
	this.shape_632.setTransform(1403.4489,993.2796);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FEDEA2").s().p("AhWBJQABgvAUg2QAUg2ARgLQAWgOAhANQAbAJAbAVQADAKADAyQgVAKghAsQgeApgbAJIgOABQgcAAgUgcg");
	this.shape_633.setTransform(1403.45,990.6981);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#EDB878").s().p("AgGCAQg3gCgRgfQgTgkAXhTQAVhQAagQQAVgOAiANQAbAJAaAVQAHATAABKQgBBWgTASQgWAWguAAIgGAAg");
	this.shape_634.setTransform(1403.4293,993.3541);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#7A4030").s().p("AgGB+QgZgDgWgNQgZgNgIgRQgRgmAghJQAchEAbgRQAUgOAdAFQAgAFAZATIAAABIABABQAGARgPBXQgQBfgVARQgNALgVAAIgRgCgAgMhvQgaAQgcBBQgfBHARAkQAGAPAWAMQAWANAZAEQAfAEAPgMQAUgRAPhbQAOhSgFgTQgYgTgcgEIgOgCQgSAAgNAKg");
	this.shape_635.setTransform(1394.6753,992.3444);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FEDEA2").s().p("Ag3BQQgUgLgLgVQAKgnAWgnQAVglAQgLQAVgOAfAGQAcAGAWASQADAGgDAcIgHA/QgtAsgpAJIgMABQgTAAgQgJg");
	this.shape_636.setTransform(1394.9125,988.7495);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#EDB878").s().p("AgZB2QgvgOgLgaQgQglAehHQAchDAbgRQAVgOAfAGQAbAFAXASQAGAQgPBXQgPBdgVARQgMALgVAAQgOAAgVgHg");
	this.shape_637.setTransform(1394.6625,992.3536);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#7A4030").s().p("AgfBoQgXgDgOgUQgMgSABgVQADgkARgfQASghAagUQArgjAxAMIABABIABACQAFAggRBCQgVBOgkATQgQAIgQAAIgJgBgAgMhKQgZAUgRAfQgQAfgDAiQgBAUALAQQAMARAVADQASADATgKQAhgQAUhKQARg9gEgjIgHgCIgOgBQghAAgfAYg");
	this.shape_638.setTransform(1388.8031,991.2785);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FEDEA2").s().p("Ag5BGQgOgEgEgMQAMg6ArgmQArgnA0ANQABALgCAZQgDAagGAbIg7AlQgYAOgXAAQgIAAgIgCg");
	this.shape_639.setTransform(1388.9031,988.3158);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#EDB878").s().p("Ag2BbQgXgSABgfQAGhAAsgsQAuguA4AOQAFAhgRBBQgVBNgiARQgRAIgPAAQgRAAgOgLg");
	this.shape_640.setTransform(1388.8047,991.2896);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#7A4030").s().p("AgmCEQgigFgSgQQgOgOgBghQgCgsAUg7QATg4ASgTQAXgXAaAFQAQACANAOQAMAOAEAXIAHArQAJA8AHAZQANAuAXALIAEACIgEADQgPANgrAGQgaAEgWAAQgTAAgQgCgAgthuQgSASgSA3QgUA7ACAqQABAfANAMQAOANAiAGQAjAFAogGQAogFASgLQgWgOgNguQgIgbgIg5IgHgrQgIgrgggGIgGAAQgVAAgQARg");
	this.shape_641.setTransform(1258.9948,966.2958);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FEDEA2").s().p("AgzBcQgOgGgLgVQAFgqASguQAQgsAPgQQAXgYAcAIQAeAJAIApIAJA9QgNA1gcAWQgTAPgXAAQgUAAgYgKg");
	this.shape_642.setTransform(1256.4,963.324);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#EDB878").s().p("AhWBtQgbgZAVhXQAThRAbgcQAYgYAbAIQAeAJAIAoIARBqQAPBEAcAOQgXAShDAEIgQAAQg7AAgYgWg");
	this.shape_643.setTransform(1258.8454,966.2711);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#7A4030").s().p("AgcB8QgagEgTgNQgXgRgDgZQgHg1Alg8QAkg8ApgNIAlgEQAUADARANQANAJAGALIABABIgBAHQgNBMgOArQgTBAgYAOQgSAKgWAAIgTgCgAAKh0QgmANgkA6QgkA8AGAxQADAXAWAPQARANAZADQAfAGAYgNQAngWAcirIABgFQgUgbgggFg");
	this.shape_644.setTransform(1246.7449,966.1776);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FEDEA2").s().p("AhABVQgXgNgJgYQALguAfgpQAggpAdgKQAfgKAcAOQAUAKALARQgLBBgLAnQggAXgMAHQgZAPgVADIgOACQgSAAgRgKg");
	this.shape_645.setTransform(1246.925,963.3092);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#EDB878").s().p("AguB1QgugPgEglQgHg0Amg8QAjg7AngMQAfgKAcAOQAUAKALAQQgeC0goAVQgTAKgUAAQgRAAgTgGg");
	this.shape_646.setTransform(1246.7456,966.1729);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#7A4030").s().p("AgmByQgXgEgRgRQgRgRgDgYQgFglAlg4QAlg6AkgLIAkgDQAUADARAMQANAJAGALIABABIAAABQgGAlgbA7QghBGgcAQQgPAIgTAAIgKAAgAAJhoQgiAKgkA4QgkA2AFAjQADAWAPAQQAPAPAWAEQAWADASgLQAbgOAfhFQAag4AHglIgSgSQgQgLgSgCg");
	this.shape_647.setTransform(1240.0452,964.0321);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FEDEA2").s().p("AhEBLQgRgLgHgZQANgmAdgiQAeglAZgIQAegJAbAOQAWAKAJAQQgGAlgcA9IhTAbQgKAEgKAAQgNAAgLgHg");
	this.shape_648.setTransform(1240.35,961.0706);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#EDB878").s().p("AhfA3QgFgkAlg4QAlg4AigKQAegJAcANQAVAKAKARQgGAkgbA6QggBGgbAPIg+ABQghgQgFglg");
	this.shape_649.setTransform(1240.0202,963.645);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#7A4030").s().p("AhvMYQgtgGg3ghQg6gighgrQgjgvAIgrIAAgBIABgBQA4gxAQhOQAKgwgBhpIAAgKQgDjLAthWQgjh8gbh2QgzjiABhkQABhdAnhOIAmg5IgkA6QgjBOgBBcQgBBlA0DjQAbB3AiB4IABACIgBABQgtBUACDKIABALQABBqgKAxQgRBPg5AyQgGAnAhAsQAgAsA8AjQA4AgArAEQAqgCAYgSQAYgTAPgoIAVhHQANguAJgYIAQgfQAQggAEgQQAHgcgIgfIAAgBQgBg6A9iTQA7iLA/hgQAxhKARiYIAHiKIgFCKQgOCagxBLQg+Bfg7CLQg9CQABA7QAIAggHAdQgFASgQAfIgPAfQgLAbgMArIgVBHQgPApgZAUQgaATgsAEg");
	this.shape_650.setTransform(1276.4338,898.75);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#F9A139").s().p("AjwLuQhDg9AKg6QA6gzARhSQAJgvgChxQgDjLAuhVQgkh8gfiKQgvjTABhgQAChdAkhPIAjg7IBTAjQBnAyBfBKQBgBKBHBEIA0A2QAHARADAXQADAWgDASQgNB9gKAuQgWBdg0BBIibDYQgYApABAuQADAjAQBDQAKA6gWAnIgqBYQgaAzgaAhQgYAlgzAPQgiALgsAAIgXgBg");
	this.shape_651.setTransform(1273.4781,894.311);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#E47838").s().p("Aj/LUQhWhEALhCQA7gzAQhTQAJgugBhxQgEjLAvhWQgkh7gfiKQgwjUAChfQABheAkhOIAkg8IJAGhIgHCKQgRCZgxBLQg+Beg7CMQg+CTABA6QAKAngOAmIgfA/QgKAYgMArIgVBKQgQApgYATQgZASgrADQhGgHhMg9g");
	this.shape_652.setTransform(1276.7123,898.45);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#7A4030").s().p("AQCQWQhRgMhGgtQgqgbgdghIgBgBIABgCQAlhMgHhuQgGhegjhcIgVgQQiDhlhRhJQiPiAhTh2QgzABh8AZQiBAahIAHQh9ANhpgPQhIgLhBgYIhUgJIAAAAQizgaiQhVQiPhThZiDQhWh/ggiXQghiXAbiVIABgBIAAgBQBahfEShRQCTgrDsgvIAdgFQAmgIAqAGQBXANBTBBQBNA7AhBFQAhAzB8BTQB8BTBXAcICNAIQBZAOBOAeQB6AwBABOQBVBoAmB7QAgBmAKCbQAGBaAkBIQAVApAvA5QAhApAIAVQALAdABAwIgGBeQgFA3gBAoQgBAqAJAnQAGAWANAkQANAkACARQACAkgIA9QgJBCgOAgIgBABIgCABQgkAHgkAAQgbAAgcgEgAFRBwIABACQBSB1CQCBQBRBICDBlIAWARIABABQAcBNAKBOQAQCDgrBaQAeAgApAbQBDAqBPAMQA+AJA+gMQANgfAJhBQAIg9gCghQgCgQgNgkQgNglgFgWQgKgoABgqQABgZAFhHIAGhcQgBgwgKgcQgHgTgigpQgvg6gVgqQglhIgGhbQgKiagghmQglh6hUhnQg/hOh5guQhPgfhXgNIiMgIIgBAAQhXgch+hUQh+hUghg0QghhFhMg6QhRg/hWgNQgpgGglAIIgdAFQjoAtiVAsQkQBRhaBeQgbCTAgCWQAhCWBVB9QBYCCCPBTQCOBUCyAaIBUAJIABAAQBAAYBIALQBoAPB9gNQBHgHCBgaIBggSIBSgIg");
	this.shape_653.setTransform(1312.3908,890.8591);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FEDEA2").s().p("AFAGBQgzgnhiiFQglgwglAAQgeAAgjAiIg9BEQgmAqgcANQhUAqhrgkQhngig+hUQglg7gmhnQgZiIAZiHQBnhuFZhaIgLBvQgGBCADAwQAIBUAiBHQAjBLA9A4QBnBbCDA/QB0A4CQAkQgMAjgbAVQgoAigsAAQgvAAgygng");
	this.shape_654.setTransform(1248.1437,836.0838);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FEDEA2").s().p("Ag1AeQgegcgdg6IDhAdQgOAkgQASQgUAYgeAEQgKACgKAAQgkAAgegbg");
	this.shape_655.setTransform(1328.8,878.3526);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#F9A139").s().p("ANfOtQAnhOgJhyQgGhcgjhbIgLgJQiEhlhFg9QiJh4hVhuQhqicA6jvQgSAggZBMQgbA8guAHQhHANgzhSQgSgdgWgyIghhPQgQgjggggQgggigogSQAdBHgCBGQgDBPgvAmQhTBHhihNQgzgnhiiFQglgwglABQgeAAgjAiIg+BDQgmAqgcAOQhUAqhrgkQhngig+hUQglg7gmhnQgZiJAZiHQBehlEohUQCBgkD/gzQBjgUBwBFQBnBAAqBaQAhA0B+BTQB9BUBXAcQBzgICFAnQClAwBPBhIAWAcQBRChAMCTQAFA8ggBhQgjBnAAAxQgCAyBJAvIA9AnQAhAYAPAbQAVAggTA1IggBRQgHAjAIAwIATBWQAZBvghA/QghA6hAAmQhUgig0g7g");
	this.shape_656.setTransform(1306.7019,889.5003);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#EDB878").s().p("AAFIWQjUgOirheQifhXhfiMQhYiCgfibQgeiTAaiOQBohtFZhbIgLBwQgGBCADAvQAIBUAhBIQAkBMA9A3QCsCXD9BMQC1A1EnAeQgZBMAjBqQARA0AWA4IgSgZQguAAhgATIizAgQhWANhPAAQiOAAh1gqg");
	this.shape_657.setTransform(1270.966,851.2384);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#E47838").s().p("AOwP9QhUghg2g8QAnhOgIhyQgHhcgihcIgMgIQiOhuhLhCQiTiDhUh5QguAAhgATIizAgQjyAki1hBQjVgOirheQifhWhfiMQhYiCgficQgeiTAaiOQBehkEohUQCBgkD/gzQBjgUBwBFQBnBAAsBaQAhA0B8BTQB+BUBWAcQB0gICEAnQCmAwBPBhQBUBnAlB4QAhBmAKCeQAIB3BABcIAwA+QAYAfAHASQAPAngFBQIgKCTQgBA7AUA6QAWBBABAKQACAjgIA+QgKBCgNAeQglAHglAAQhEAAhDgag");
	this.shape_658.setTransform(1312.3944,890.8481);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#7A4030").s().p("Ag1ATQATgtAggiQAmgoAhAHIgBAGQgegFglAlQgeAggTAsQgSAtAGAcIgGABQgHgdAUgvg");
	this.shape_659.setTransform(1291.9438,960.6979);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#7A4030").s().p("AgqAUQANgmAagiQAagiAagLIACAGQgYAKgaAiQgZAhgMAkQgQAuARAaIgFAEQgSgeAQgwg");
	this.shape_660.setTransform(1299.5985,965.875);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#7A4030").s().p("AADCSQgqgGgPgVQgQADgQgDQgZgDgSgOQgTgOgHgVQgUgGgOgOQgQgQgBgQQgBgjApgwQAhgoAkgYQAbgSAYAEQAQACAYARIAGAEIgOADQARAGAMAMIAXAaIAUgCQAZAEAOAqQAJAaAJBBIABAJQADAVAZAQQAVAOAYAEIASABIgOAFQgsAQgcgEQgLgCgFgFQgQAJgdAEIgYABQgRAAgQgCgAgzBxIABABQALATArAHQAcAEAdgDQAcgEAOgJIACgBIACABQAIAIATgBIAugIQgZgGgTgOQgXgRgDgVIgBgJQgJg+gIgZQgNgqgWgDIgTADIgDABIgBgCIgZgeQgNgMgWgGIgMgEIAVgEIACAAQgTgMgNgCQgVgEgaARQgiAXghAnQgoAvABAhQABAOAPAOQAOANASAGIABAAIABACQAGATASANQARAOAYADQARADAPgDg");
	this.shape_661.setTransform(1300.9238,963.6858);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FEDEA2").s().p("AAkBVQgOgMgDgTIgEglIgbAlQgRATgSAEQglAJgFghQgEgXALglIgcASIgcgBIgEgGQAQgYAbgbQAYgXAVgOQAagRAWADQAOACAYARIgRADQAXAHAOAMQAKAJAPAWQAcgLAQAWQANAQAJArQgIApggALQgKADgKAAQgWAAgZgOg");
	this.shape_662.setTransform(1296.8,959.1138);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#EDB878").s().p("AAbCQQg6gEgQgZQgiAGgdgPQgcgPgJgbQgTgFgOgOQgQgPgBgQQgBghAogwQAhgnAkgYQAagRAVADQAQACAYARIgRADQAWAHAOAMQAKAJAPAWQAlgPASAvQAKAaAMBSQAEAXAbARQAXAPAZADQhEAXgTgTQgXAPgrAAIgSgBg");
	this.shape_663.setTransform(1300.3488,963.7067);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#7A4030").s().p("AjJHHQgrgGgPgVQgQADgQgDQgZgDgSgOQgTgOgHgVQgUgGgOgOQgQgQgBgQQgBgkApgwQAhgoAkgYQAbgSAYAEQAPACAYAQQAjAEAngVQAngUAkgoQAjgnAVgrQATgqgFgaQgKgfglgeQgXgTg3gkQg4gkgcgVQgtglgagmIgCgCIACgCQA3hBDag1QDKgyBbAOQAUADAHAHQAjAfAeB7QAcBzgCBNQgBBBhmCpQgzBWg4BRQgQAWgZATIhRAyQgkAXgtARQg1ATgcgEQgLgCgFgFQgQAJgdAEIgYABQgRAAgQgCgAkAGmIABABQALATAsAHQAcAEAdgDQAcgEAOgJIACgBIACABQAEAFALACQAbAEA0gTQAsgRAjgWIBQgyQAZgSAPgWQA4hQAzhVQBlioABhAQAChMgbhyQgeh5gigfQgGgGgSgCQhcgOjKAzQjUA1g1A9QAZAkAtAkQAaAUA4AkQA3AkAYAUQAlAgAMAgQAFAbgTArQgVAsglApQglApgoAVQgpAVgkgEIgBAAIAAAAQgYgRgOgBQgVgEgaARQgiAXghAnQgoAvABAiQABAOAPAOQAOANASAGIABAAIABACQAGATASANQARAOAYADQARADAPgDg");
	this.shape_664.setTransform(1321.4026,932.7696);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#F9A139").s().p("AiJF0QgPgMgDgTIgEglIgcAlQgRATgSAEQgkAJgGghQgEgXALgmIgbATIgdgBIgEgGQARgZAbgbQAXgXAVgOQAagRAWADQAQACAYARQBPAHBPheQAhgnASgoQATgpgFgYQgSgvhphFQh3hMgng5QAZgeBIgfQBAgcBYgXQAIBXBQBUQAuAxBwBbQAvAsg0BPQgcAthFBSQgPAWgbBIQgXA6geAaQghAUgogHQgqgHgNgkQgHAtggANQgLAEgMAAQgWAAgYgOg");
	this.shape_665.setTransform(1314.2963,930.4118);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#E47838").s().p("Ai3HGQg7gEgQgZQgiAFgdgPQgcgOgJgbQgTgGgOgOQgQgPgBgPQgBgjAogvQAhgoAkgXQAagRAVADQAQACAYAQQBPAIBRhfQAggmATgpQARgogFgYQgQgwhrhEQh3hNgng5QA8hHD4g3QBlgWBQgGQBTgGARAQQAiAfAeB5QAcBygCBOQgBA+heCdQg3Bfg8BVQgSAagjAXIhDAqQgtAcg0AQQg/AUgRgRQgXAOgqAAIgTAAg");
	this.shape_666.setTransform(1321.4027,932.7973);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#37322D").s().p("AAhAJQgogfg3gJIACgGQA4AKAmAhQAUARAJAPQgKgOgUgPg");
	this.shape_667.setTransform(1436.175,814.35);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#37322D").s().p("ABWDkQg1gHg1geQgvgZghgsQgTgbgagzIgXgrQgNgUgPgJQgfgUgTAWQgKAKgDAQQgDARAEAQIADAPIgJgNQgXgggDgkQgDglARgdQAPgXAYgLQAYgKAdAEQgVgRgOgXQgQgYAAgTIABgIIAFAGQAhAkA6AIIDoAHQBHALAyAoQBEA1AHBcQAEAsgMAsQgLAsgWAZQgaAegsANQgaAIgeAAQgSAAgTgDgAjYgrQAKACAOAIQAPAKAOAVIAYAsQAZAyATAaQAgArAuAZQA1AdAzAHQAwAIAqgNQAqgMAZgdQAUgWALgnQANgsgEgwQgHhZhBg0QgwgmhHgLIjogHQg4gJghgfQAEATARAXQARAXAVANIARAKIgTgFIg6ACQgbAJgOAYQgQAZACAfQABAfARAdQgBgPAEgMQAEgOAIgJQANgNAQAAIAGAAg");
	this.shape_668.setTransform(1447.553,824.4406);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#723D30").s().p("ABYC5QhXgPhIg+IAPABIARgCQgngPghg5QgnhAgUgQQghgWghATQgdARgPAoQgMg2AhgkQAignA7APIgCgCQA0AMAgAWQApAaAQAtQADhDhKgkQgqgSgUgKQgjgSgPgWIgKgOQAhAfA6AIQAfAEBSgCIB4AGQBDALAvAlQAsAkASA1QARBWg2A4QgsAxhHAAQgTAAgVgDg");
	this.shape_669.setTransform(1447.1299,821.5806);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#4C322E").s().p("AgSC6QhCgkgshUIgfg8QgQgcgSgLQgjgXgWAcQgTAZAJAiQguhAAeg8QAfg+BMATQgYgPgTgaQgTgcAAgUQAhAkA6AJQAiAGBRgDIB7AFQBFALAvAmQBJA7ACBlQACBagrAxQgnAshFAFIgRABQhEAAhJgog");
	this.shape_670.setTransform(1447.4714,824.68);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#7A4030").s().p("AgEGoIgGgBQirgbiJh9QhThLg2hdQgOgZgFgiQgFgnALgfQAQgtApgRIACgBIABACQAYAcAvBKQBEBxAyAyQBUBXBxAZIAtAIQBUANBEgMQBEgMAvgkQBLg6ANhtQAPiFgth0QgthzhrhlIAAgBIAAgBQgGgPAMgPQAIgKAOgFIAcgDQAHABAHADIABABQBnBnAyBoQBJCYgWCxQgVCphtBSQhdBHiSAAQgyAAg4gIgAnOgYQgLAeAFAlQAFAhANAYQA1BcBSBLQCIB7CqAbIAGABQDZAgB7hdQBrhSAVimQAWivhIiWQgyhohmhmIgfgCQgQAEgKALQgJAMAEAMQBsBlAtB1QAuB1gQCHQgNBvhNA7QgwAlhFANQhGAMhVgNIgtgIQhzgZhVhYQgygzhGhyQgrhGgZgdQgmAQgNApg");
	this.shape_671.setTransform(1442.253,876.4987);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#F9A139").s().p("AhLF9Qh6gwhjhdQhThNhQh5QABgjAOgaQAQgeAfgNQAYAbAqBDQAwBPAaAjQBnCKCRAgQCtAmBsg5QBrg4APiFQAfkMjVjJQgIgVAYgPQAYgQAbAMQBQBRAtBLIAZBPQAMArAGAjQAdCRgnB6QgvCRiAAsQhoAfg+AGQgUACgUAAQhGAAg9gag");
	this.shape_672.setTransform(1440.9139,874.1765);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#E47838").s().p("AgJGkQivgbiKiAQhOhJg0haQgaguAIg4QAIg/A0gWQAYAbAqBEQAwBPAaAiQBnCLCRAfQCtAmBsg4QBrg4APiGQAfkLjVjJQgIgVAYgQQAYgPAbALQBuBuAyByQA/CPgVCnQgXC2h8BRQhZA5iCAAQg0AAg7gKg");
	this.shape_673.setTransform(1442.2432,876.4245);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#7A4030").s().p("Ag3BoQgXgPgDgPQAAgLAHgIIASgQQAXgTAHgOQAIgNgBgYQAAgOgFggIgGgpIAAgDIAEAAQARACAeAPQAhAQANAPQANAOACAgQABAWgEAkQgEAdgUAbQgTAYgWAJIgZACQgWgDgWgPgAgNgeQABAYgJAQQgIAPgYASIgQAPQgGAHAAAJQACAMAVAOQAUANAWADIAWgCQAUgIASgXQAUgaADgbQAJhOgTgVQgMgNgdgPQgbgPgSgCg");
	this.shape_674.setTransform(1184.2922,930.7);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FEDEA2").s().p("AgvgRIgFgkQAQABAfAQQAfAPANAOQAQARgCAtQgng1g9gTg");
	this.shape_675.setTransform(1186.8361,924.25);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FEDEA2").s().p("AgfAPQghgQgEgTIAAgEQAaAYAnAAQAkAAAkgTQgTAegbAMQgHACgJAAQgPAAgXgKg");
	this.shape_676.setTransform(1183.25,940.1945);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#EDB878").s().p("AgpBtQgigRgDgTQAAgOAVgRQAagVAIgOQAKgTgEgkIgKhHQARACAeAPQAgAQANAOQAVAXgKBPQgEAbgTAaQgTAZgVAJQgHADgIAAQgQAAgXgLg");
	this.shape_677.setTransform(1184.2613,930.7695);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#7A4030").s().p("AgHA4IgCgBQgRgEgWgbQgPgSgYgjIgFgHIAIACIAFABIAsgCQAfgFAOgOIAAgBIADAAQAUADAdAUQAbAUAEAMIAAABQgCANgnAXQglATgRAAIgFAAgAghgdIguACQAvBGAZAGQAQAFAogXQAigTAEgMQgEgJgagSQgbgTgSgDQgOAOgfAGg");
	this.shape_678.setTransform(1175.25,942.788);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FEDEA2").s().p("AgJAqQgQgFgXgcIglgzIAEABQApAmAiAJQAoAMA0gWQgLAPgiARQgcAPgPAAIgHgBg");
	this.shape_679.setTransform(1175.3,943.819);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#EDB878").s().p("AgKA0QgQgEgYgcIglgzQAQAEAdgEQAjgFAQgQQATACAdAVQAcATADAKQgCANgnAWQgiASgQAAIgHgBg");
	this.shape_680.setTransform(1175.45,942.7882);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#7A4030").s().p("AgJAjQgJgEgRgRQgSgQgOgUIgFgFIAHABQARABARgCIAjgHIABAAQATAEAYAUQAZASAAANIAAABIgBABQgEAHghAFIgoABgAgcAMIAVARIADABIAmgCQAcgDAFgFQgCgKgWgRQgWgRgRgEIgGABQggAJgYgCg");
	this.shape_681.setTransform(1166.65,943.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FEDEA2").s().p("AgKAbQgHgDgRgQQgSgRgPgTQANAHAVAQIAdAUIAsgDQAcgEAAAJQgEAGgiAEIgbACQgJAAgEgCg");
	this.shape_682.setTransform(1166.825,943.9625);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#EDB878").s().p("AgKAfQgHgDgRgQQgSgRgPgTIAogBIAdgHQATAEAXATQAYASAAAMQgEAGgiAEIgbACQgJAAgEgCg");
	this.shape_683.setTransform(1166.825,943.5625);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#7A4030").s().p("Aj5LuIgMgDQgigOgkgXQgrgbgKgTQgJgSgMhGQgJg2gEgtQgFgxAEgfQAHgrAagVQAWg5BehtQBsh8Beg3IgEgJQgihKgOg8QgZhvAWhtQAShaBEhiQAlg3BIhNIAkgqQAJgTAuAHQAnAGAwAVQA0AXAfAcIABABQA3CGAXEBQAYEKgkCCQg+B4izBrQiHBRiOArQAVAUAXAgQAXAfAFAPQAGATgCAYQgCAegMAdQgOAghDAdQg1AXgoAAIgTgCgABxrfIglAsQhHBMglA3QhEBhgRBZQgWBsAZBuQAOA6AiBLIAGAOIgCABQhfA2hsB9QhfBtgVA4IgBABQgZAUgGAoQgEAeAFAyQAFAzAJA0QALBBAIAQQAJARAoAaQAjAWAkAQIALACQArAHBBgcQBCgbAMgfQAMgcACgcQACgYgGgRQgFgOgXggQgZgigVgTIgEgDIAFgCQCNgqCIhRQC1hqA9h4QAkiBgYkIQgXkAg2iFQgfgbgzgWQgvgVgmgGQgMgCgKAAQgWAAgFAKg");
	this.shape_684.setTransform(1191.2195,869.1729);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#F9A139").s().p("AlcKzQgSgJgLgbIgQgwIgLhTQgFgwAEgeQAGgsAagVQAVg4BfhtQBsh9Bgg4QglhUgMgvQgeh1AXhzQAWhwBkh9QBkhsAIgQQANgZBQAZQBQAYAwArQApBiAZC3IhYgKIhTgSQhegRgvA2QhFBVAyC2QAmCHBPB/QgjBoiWA5QiwAzhFAmQApBEAFAnQAHA3gwA0QgYAagcAKQgOAGgNAAQgUAAgSgMg");
	this.shape_685.setTransform(1190.1184,864.5266);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#E47838").s().p("AkELoQgigOgkgXQgqgbgJgRQgJgRgLhDQgJg1gFgxQgFgwAEgdQAGgsAagWQAVg4BfhtQBsh9Bgg2QglhVgMgvQgeh1AXh0QAWhvBkh9QBkhsAIgRQANgYBQAYQBQAYAwArQA2CEAYEAQAZEKglCDQg/B7i4BsQiHBOiLAqQAVATAZAiQAYAgAFAPQAGARgCAYQgBAdgNAeQgOAhhJAdQgyAUgjAAQgQAAgNgFg");
	this.shape_686.setTransform(1191.2314,869.1519);

	this.instance_3 = new lib.Symbol1_1("synched",0);
	this.instance_3.setTransform(-20.8,-101.3,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '5F1DBA06CE13FD42AAD4D4D1BB17F3B2',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1.png", id:"BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1"},
		{src:"images/sound.png", id:"sound"},
		{src:"sounds/yes.mp3", id:"yes"},
		{src:"sounds/wro.mp3", id:"wro"},
		{src:"sounds/intro.mp3", id:"intro"}
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
an.compositions['5F1DBA06CE13FD42AAD4D4D1BB17F3B2'] = {
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