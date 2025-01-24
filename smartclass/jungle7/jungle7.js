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



(lib.BRIGHTEDGELOGO = function() {
	this.initialize(img.BRIGHTEDGELOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.right = function() {
	this.initialize(img.right);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2076,1596);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);


(lib.wrong = function() {
	this.initialize(img.wrong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1580,1580);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_62 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(62).call(this.frame_62).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_50 = function() {
		/* if(_root.count==4)
		{
			_root.final_mc.gotoAndPlay(2);
			}*/
			
			this.stop();
	}
	this.frame_52 = function() {
		/* stop();
		
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(2).call(this.frame_52).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wrong();
	this.instance.setTransform(0,0,0.1048,0.1048);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.7,165.7);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.right();
	this.instance.setTransform(0,0,0.1048,0.1048);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.7,167.4);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAMQgEgFAAgHQAAgGAEgFQAEgFAEAAQAGAAADAFQADAFAAAGQAAAHgDAFQgDAFgGAAQgEAAgEgFg");
	this.shape.setTransform(18.4,52.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgVAdQgJgMAAgRQAAgQAJgMQAKgMALAAQAMAAAKAMQAIAMABAQQgBARgIAMQgKAMgMAAQgLAAgKgMg");
	this.shape_1.setTransform(20.45,54.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJANQgEgFAAgIQAAgHAEgGQAEgFAFAAQAGAAAEAFQAEAGAAAHQAAAIgEAFQgEAGgGAAQgFAAgEgGg");
	this.shape_2.setTransform(43,53.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("AgXAhQgKgOAAgTQAAgSAKgOQAKgNANAAQAPAAAJANQAKAOAAASQAAATgKAOQgKANgOAAQgNAAgKgNg");
	this.shape_3.setTransform(45.325,56.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F48884","#C25C68"],[0.012,1],8.7,2.3,-13.7,-6.6).s().p("AhuAwIgIgGQgEgEADgNQABgGAGgJQAJgMALgGQAKgFAPgFQATgGAkgFQArgGASgFQAjgLARgXIAJADIAJAtQAGAwgPATQgUAbg7AGIgaABQg4AAg7gbg");
	this.shape_4.setTransform(70.2113,47.5444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FEC92F","#F79939"],[0,1],-11,-26,25.3,53.2).s().p("AhmAyQgJgFgHgNQgQgaAIgoQAEgSAOgMQAHgGAGgDIBhgCQBlgBAQAGIAJAtQAFAwgOATQgVAbg7AGIgZACQg5AAg7gbg");
	this.shape_5.setTransform(69.3645,47.3878);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AAOArQgIgMgbgfQgagdgKgJQgDgDABgFQABgFAFgBQAygLA6BSQANATgUAMQgIAEgHAAQgLAAgIgLg");
	this.shape_6.setTransform(47.7161,33.0179);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AgqAwQgTgLAKgTQARggAdgRQARgMAJgDQAQgHANADQAEABABAEQABADgBADQgCADgeAiQgeAigFAIQgHAMgKAAQgGAAgHgEg");
	this.shape_7.setTransform(16.1651,29.1433);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D3F32").s().p("AhgAhQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAJgaAbgQQAXgOAegEQAegFAbAIQAdAJAUAVQABAAAAABQABAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgxgKQgegGgTACQgYACgXALQgNAGgdATIgBAAIgBAAg");
	this.shape_8.setTransform(45.7021,35.7824);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D3F32").s().p("AAvAVIgSgJQgLgHgHgCQgYgHgcAAQgIAAgCgDQAWgOAZABIAKABQAMADALAHQASAMAFAOQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgCABIgCAAg");
	this.shape_9.setTransform(22.0313,38.0191);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6D3F32").s().p("AgcA1IgCgCQgKgdASgpQAIgUAFgGQAJgMAPAJQAcAQgMAlQgNAlgggHIgDgBIgIARQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape_10.setTransform(21.212,90.9166);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6D3F32").s().p("AARBIQgUgmgJgcIgGgUQgEgeACgcQAJAHALAsIAQAtQAIAegEARIgBACIgCgBg");
	this.shape_11.setTransform(3.9194,93.9194);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F8EF68").s().p("AhnCiIgIgIQgTiOCJhBQAcgNAigqQAWgbATggIAAABQAOAtglAtQgXAag1AkQggAWgOALQgZAWgLAWQgLAXgIAcQgIAegBAYg");
	this.shape_12.setTransform(13.1597,76.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FEC92F","#F79939"],[0,1],-19,-40.7,17.3,38.5).s().p("AiOEXQgigNgkg+Qggg3ALg0IASgpQgXiTCNhCQAigQApg4QAVgcANgZIDhCSQgBAXgnA/QgwBMgTAyQgZBAhhBGIhbA6QgUAPgTAAQgLAAgJgEg");
	this.shape_13.setTransform(23.698,86.8778);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AgqBDQgSgYAAghIABgTQAFAWAVAKQAWALATgJQAVgKgJgyQgGgngIgPQAaAFAPAgQAOAdAAAhQAAAhgSAYQgSAXgZAAQgZAAgRgXg");
	this.shape_14.setTransform(18.35,53.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqBDQgSgXAAgiQAAgmAOgbQAQgiAdAAQAdAAARAiQAQAdAAAkQAAAigSAXQgSAXgZAAQgZAAgRgXg");
	this.shape_15.setTransform(18.35,53.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3D3D3").s().p("Ag8BTQgYgaAAgrQAAgtATgkIgBAdQgCAeAFALQAMAbAZAJQAbAJAVgVQAPgPAFgZQAEgWgFgXQgIgggegQQAkAFAXAmQAXAjAAAqQAAArgaAaQgZAYgjAAQgkAAgXgYg");
	this.shape_16.setTransform(45,52.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag8BTQgYgZAAgrQAAgvAUgjQAWgnAhAAQAogBAcAnQAaAkAAAvQAAAqgaAaQgZAZgjAAQgkAAgXgZg");
	this.shape_17.setTransform(45,52.9488);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#983637","#843337"],[0,1],-2.8,7.5,3,-7.2).s().p("Ag/BuQgDgSgBgkQAAgNgHgJICVi/QgDBngWBcIgMAAQgzAKgXBDQgGAVgBAWQgPgUgFgcg");
	this.shape_18.setTransform(35.325,97.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F48D96").s().p("AggAUQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAgBABAAIABgBQAigIAQgSIAPgUQgLAdgNAbQgJADgHAAQgOAAgMgKg");
	this.shape_19.setTransform(34.8917,111.712);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E04B50").s().p("Ag5ByQgJgXgBgzQAAgNgHgJICVi/QgDBsgYBfQgWBWggA6QgmgWgNgmg");
	this.shape_20.setTransform(35.325,99.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#713031","#4A3232"],[0,1],-8,16.6,0.5,2.7).s().p("AhgCQIgLhOIDXkSQgGCjgwB6QgrBxgyARQgGACgFAAQgeAAgQhBg");
	this.shape_21.setTransform(32.1,102.9199);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8EF68").s().p("AgbARQADgOAHgOQAIgVANgIQAJgBAHAGQAGAGABAKQACATgIAQQgIAWgNADIgHAAQgSAAgCgYg");
	this.shape_22.setTransform(14.2625,6.0865);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F8EF68").s().p("AgdAYQgNgFADgNQADgTARgJQAMgGAMAAQANAAAKAGQAMAHAAANQAAAVgaAHQgKADgIAAQgNAAgMgFg");
	this.shape_23.setTransform(52.8048,3.6268);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#CB753D","#985539"],[0,1],-2.6,-10,69.7,252.4).s().p("AgBAWIgNgDQgFgCgCgHQgEgOAHgHQAHgHAIgEQAFgCAIABQAJACADAGQADAGgEALIgGARIgCADIgBABIgDABIgCAAIgIgCg");
	this.shape_24.setTransform(58.0794,73.7519);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CB753D","#985539"],[0,1],-1.2,-4.2,71.2,258.1).s().p("AAHAeQgUgCgPgEQgIgCAAgGQABgDAFgKIAJgSQADgEAHgEIALgFQAIgCANADQAOAFABAHQAGAUgZAXQgCACgEAAIgEAAg");
	this.shape_25.setTransform(61.9481,66.5779);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#CB753D","#985539"],[0,1],0.5,2.3,72.8,264.6).s().p("AgHAMQgHgBgBgCQgDgBgBgGQgBgGADgEQAFgKAQAJQAPAJABAKIgBADIAAABIgCAAQgLAAgNgCg");
	this.shape_26.setTransform(61.5607,59.7311);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#CB753D","#985539"],[0,1],-0.8,-2.3,71.6,260.1).s().p("AgXAVQgHgCgDgDQgHgGAEgGIALgJIAWgSQAJgKAIADQAEABAFAGIAJALQAFAGABAGQABAJgIAXQgZgDgdgIg");
	this.shape_27.setTransform(52.1525,67.174);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FEC92F","#F79939"],[0,1],-11,-29.3,25.4,49.9).s().p("AiWJ4QgVgNgWh/QgViTgLgwQgOg8gCh7IAAiJQAAgWgGhPIgHhKQgDg5AqgVQAVgLAVAAIANgJQAMgLgCgPQgCgXgWhBQgYhHgMgCQgdgDgUgUQgfgfAag8QAOggAZgEQAVgDAXASQAVAQALAYQAMAZgHAQQgMAdAEARQACAJAIANQAJAWASAiQAXAvAKAEQAPAFAmACQAoADAHgHQAIgHAqhIQArhJAAgIQgXgNgHgkQgIgtAwgXQA1gZAgAmQAfAlgUAxQgLAcgVAKIgTAFIgXBIQgWBLADAOQACAGA3APQA5APAOAjQAcBCgEBEIgSBpQAiBHgsA/QgLAPgcAdQgXAYgFAMQgOAcgGBTQgDAqgBAkQgLBPgzAjIgnAXQgWAMgIAOQgzBTg0AQQgNAEgNAAQgYAAgXgOg");
	this.shape_28.setTransform(38.9074,64.6543);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F48884","#C25C68"],[0.012,1],-2.9,0.1,3.3,-1.1).s().p("AgaA+QgxgHgQgXQgLgQAGgnIAJgmIAHgBQASAZAyALQBGAPAHADIAHAAQAiAagJAWIgGAFQguASgsAAQgNAAgOgBg");
	this.shape_29.setTransform(10.1724,45.5485);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FEC92F","#F79939"],[0,1],-10.7,0,10.7,0).s().p("AgiA+QgxgHgQgXQgLgQAGgnIAJgmQANgEBSAEIBRAFIALAHQALAKACAQQAGAggOAWIgOAOQguATgrAAQgOAAgOgCg");
	this.shape_30.setTransform(10.9589,45.5043);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D3A32").s().p("AgHAbQgLgDgKgHQgMgHgFgKQADgMAAgFIAAgBIARARQALAHAKABQAKAAAPgLQAOgLAHgMIAEAjQgKALgPAFQgKAEgJAAIgJgBg");
	this.shape_31.setTransform(154.6,448.3029);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D3A32").s().p("AgRAdQgYgEgLgNQAAgIgCgKQAvAWAZgMQAVgIALgZIAGAfQgTASgRAGQgLAEgMAAIgOgBg");
	this.shape_32.setTransform(117.4,458.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4D3A32").s().p("AgIAXQgHgBgNgJQgPgLgHgKIAMgPIARAPQAJAIAHABQALACARgEQARgEALgIIgCATIgKAIQgMAKgXAAIgMgBg");
	this.shape_33.setTransform(91.6,456.305);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D3F32").s().p("AhcBXIAAgCQAegMAVgRQAxglAcgiQAlgrAOgyQAAAAAAgBQABAAAAAAQAAgBABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQACA1gjAxQgaAkgzApQggAZgiAOg");
	this.shape_34.setTransform(146.2333,340.7708);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#CB753D","#985539"],[0,1],-66.5,-248.4,5.8,13.9).s().p("AgshpIAdAFQASADAIAGQANAJAIAOQAQAYgDAhQgDAdgHAhIgMAdQgJAUABAGQgShKgpiJg");
	this.shape_35.setTransform(70.7814,341.2375);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#CB753D","#985539"],[0,1],-69.1,-249.9,3.3,12.4).s().p("AgZAuQgJgDABgRIAEgYIgBgZQABgTAIgDQADgBAHACIAZAJQAPAGADAIQAFAKgKANQgJAOgOAOQgQARgKAAIgDgBg");
	this.shape_36.setTransform(80.0783,340.8985);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#CB753D","#985539"],[0,1],-72.6,-266.4,-0.2,-4.1).s().p("AgegiQgBgMABgBQACgCALAAQARgCAYAJIAEACIACAEIAAACQADAMgDALQgCAGgIAOIgQAWQgMASAAACQgSg5gEgcg");
	this.shape_37.setTransform(76.4318,359.3393);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#CB753D","#985539"],[0,1],-75.5,-275.5,-3.2,-13.2).s().p("AgXgVIAIgKQAGgDACAAIAHADQAMAFAMALIAAACQgBAPgXAYIgLAJg");
	this.shape_38.setTransform(78.425,368.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#CB753D","#985539"],[0,1],-77.7,-282.7,-5.3,-20.3).s().p("AgFAgQgIgBgEgGQgDgFgBgNIgCgSIgBgDQAAgDAJgGQAJgFADgBQASgEAGAHQAGAHgEATIgIAbIgCADIgDABIgLABIgEAAg");
	this.shape_39.setTransform(80.1787,375.8888);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#CB753D","#985539"],[0,1],-80.3,-290.1,-8,-27.8).s().p("AgPAhQgCgJAFgQQAEgNgDgiQASAQAFAJQAIAOgFASQgEANgJAGQgGADgEAAQgGAAgBgHg");
	this.shape_40.setTransform(80.1933,384.1462);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#CB753D","#985539"],[0,1],-74.6,-270.6,-2.2,-8.2).s().p("AAAAvQgTgVgHgFQgKgHAAgJIACgGIADgFIAKgSQAGgLAFgGQAFgFAKgGQAOgIACAEQAMAWABAiIADAdQABAUgJAGQgEADgFAAQgJAAgLgLg");
	this.shape_41.setTransform(82.805,362.2611);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#CB753D","#985539"],[0,1],-71.1,-258.1,1.3,4.2).s().p("AgFArQghgKgKgZIgCgDIAegcQAUgRAPgEQAYgGAIAbQADALABAhIAAARQgPAIgSAAQgLAAgMgDg");
	this.shape_42.setTransform(81.175,349.2965);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#7A4A35","#633631"],[0,1],-5.2,-4.8,6.4,6.8).s().p("AhOAYQgBgLAWgdIApg1QANAVAaAGQAaAHATgNIAKgFIAAAqQABAZgEAPQgFAUhGANIhFAIQgGgXgDgXg");
	this.shape_43.setTransform(88.7552,461.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FEC92F","#F79939"],[0,1],-25.7,23.4,20.4,-24).s().p("AgIKZQgBgNAngzQArg2ACgJQAGgWgWjKQgWjQgOgNQgXgYgUg2QgahFARg4QAOgxhLkZIhOkPIEWCrQACAUAHDKQAGDIAAArQAAAzAQDwQAQD9AIAbQAHAZgGAOIgPAfQgEAQABAlQACAkgFAQQgFAUhHAMIhFAJQgFgYgDgXg");
	this.shape_44.setTransform(81.7815,397.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#CB753D","#985539"],[0,1],-73.1,-266.2,-0.8,-3.9).s().p("AgzAGQgegbAHgJIADgCIAdgOQAWgFADACIACABQAXAFAVAKQAYAMAOAPQAIAJABAJQABAKgLAFQgOAIgYAGIgnAJg");
	this.shape_45.setTransform(111.7771,349.5077);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#CB753D","#985539"],[0,1],-77.2,-277.8,-4.9,-15.4).s().p("AgeAvQgEgDgCgEQgCgFACgLQAEgXgBgaQAAgPAJgIQAGgFARgIQAKgGAEAEIADAEIABADQABAHAGAMIAGASIAIApIgEArQgrgCgVgQg");
	this.shape_46.setTransform(120.675,359.7569);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#CB753D","#985539"],[0,1],-83,-301.2,-10.7,-38.9).s().p("AgJAVIgIgEQgFgEgBgCQgBgHAFgKQAGgMAHgCIAIABQANAEAIAHIABAAQACAGgWAQQgIAHgFAAIAAAAg");
	this.shape_47.setTransform(113.3423,386.8182);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#CB753D","#985539"],[0,1],-82.8,-299.2,-10.4,-36.9).s().p("AgVAEQACgRgBgjIAMgBQAIgBADACIAEADIAKAMQADADACAEQADAJgGALIgLASQgNAYgNAKIgDAEQgCgWACgYg");
	this.shape_48.setTransform(107.7654,386.255);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#CB753D","#985539"],[0,1],-79.8,-291.1,-7.4,-28.8).s().p("AgBAqQgMgIgIAAIgFgZIAAgDIACgEIABgCQAHgLAFgWQABgGACgDIALgGQARgKAFAGQADACgDAQIgDATIgFAlQgDAgACACIgRgOg");
	this.shape_49.setTransform(121.3125,373.6492);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#CB753D","#985539"],[0,1],-81.4,-295.1,-9.1,-32.7).s().p("AggASIgBgBQAAAAAAAAQgBgBAAAAQAAAAABAAQAAgBAAAAQAGgRAKgUIACgEIAEgBQASgHAGAAQAOgCADAMQAGAVgCAXIgDADQgHAKgJACIgGABQgQAAgZgSg");
	this.shape_50.setTransform(114.8517,379.8417);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#CB753D","#985539"],[0,1],-80.5,-291.1,-8.1,-28.8).s().p("AgcAXQgGgEAFgJQACgFAGgFIAGgKQAKgRAJAFIAXANIAEADQAEAGgJAHQgHAIgHACQgHADgOACIgOACIgFgBg");
	this.shape_51.setTransform(108.8001,377.2626);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#CB753D","#985539"],[0,1],-78.6,-284.2,-6.2,-21.9).s().p("AgSgrQAAACALAEIAMAFIADAFQAGALAFARQACALgDAFQgBAEgFACQgMAKgKALIgIhXg");
	this.shape_52.setTransform(106.3944,370.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#CB753D","#985539"],[0,1],-78.6,-286.7,-6.3,-24.4).s().p("AgHAoQgMgCgOgXQgIgLgBgEIABgEQACgDAGgEIAHgFIAQgGQANgEAIgHQAHgHAEAAIAFACIALADQAHAGgEATQgEANgGAMQgOAagSAAIgGgBg");
	this.shape_53.setTransform(114.413,370.8294);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#CB753D","#985539"],[0,1],-76.3,-276.7,-4,-14.3).s().p("AgdAlQglgQAUgUIAEgDIApgaQAZgRACABIAOAMQAFADADAEQADAEABAJIACAOQABAPgEAQQgBAFgDADQgCACgMABIgRABQgZAAgUgIg");
	this.shape_54.setTransform(109.6196,361.3862);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#CB753D","#985539"],[0,1],-74.1,-267.5,-1.7,-5.1).s().p("AABA6QgIgBgEgFQgEgFgBgQIgBgXIgFgkIgBgQQAAgJgCgEQAHAKAOAbQAEAJAIALIAPASQADAEAAADIgBAFIgKAYQgEAEgIAAIgCAAg");
	this.shape_55.setTransform(104.8875,352.9278);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#CB753D","#985539"],[0,1],-73,-266.1,-0.7,-3.8).s().p("AgKAVIgHgHQgMgMgKgGQABgKAMgFQAFgBAPAAIAXgCQAQgBAHADIgCAVQgBAHgWAKQgLAFgGAAQgFAAgDgCg");
	this.shape_56.setTransform(122.25,346.5105);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#7A4A35","#633631"],[0,1],-4.8,-3.2,8.1,3.3).s().p("AgWBIQgmgQgCghQgBgSAAgYIgBghQAOALAUgDQAXgBARgIQAUgIAKgRQAFAeAKAgQAJAcABAFQACAQgIAMQgFAGgVATQgKAJgPAAQgNAAgRgHg");
	this.shape_57.setTransform(118.595,464.2641);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#FEC92F","#F79939"],[0,1],26.6,18,-11.1,-17).s().p("AAVKCQglgQgCghQgBgNAAgpQAAgYgEgVQgFgTgEjYQgEjigCgSIgdhcQgXhIAFg4QAGg6gWi9IgVixID1gSIgWDdQgUDQACAwQADBLgdB6QgFAVALCUQANC6ABAiQACBAAOA0IAQA3QACAQgIAMQgFAGgVATQgKAIgPAAQgNAAgSgGg");
	this.shape_58.setTransform(114.15,407.2891);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#CB753D","#985539"],[0,1],-35,-127.1,37.3,135.2).s().p("AAUBYIgWgfQgLgPgTgeIgegsIgBgCIAQgfQARgfADgEQAMgOAJgCQAJgBAOAMIAIAJQADAEAFAOQAJAkAOBIIAFAWQADAOAAAJIgCAJQgLAhgCAAQgOgKgPgTg");
	this.shape_59.setTransform(88.425,206.3167);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#CB753D","#985539"],[0,1],-61.7,-226.2,10.6,36.2).s().p("AAKBFQgJgFgNgMIgXgTQgvghAdgVQAHgGARgEIAZgIQAcgNAZgTIAQAaQgHAQgEAdQgEAggDAMQgEAPgJAIQgFAFgHAAQgFAAgHgDg");
	this.shape_60.setTransform(152.1503,295.1781);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#CB753D","#985539"],[0,1],-65,-231.4,7.3,30.9).s().p("AARA7IgWABQgGgCgIgGIgOgLQgDgMACgOIAGgYQANgugDgEQAjA9ATA6QAAgBgTAAg");
	this.shape_61.setTransform(161.7979,298.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#CB753D","#985539"],[0,1],-59.8,-219,12.5,43.3).s().p("AgnA2QgSgbgKgdQgLgiADgcQADgaA2AXQAbAMAnAXQAjAOgIAaQgFASgbAcQgZAZgUAAQgVAAgQgZg");
	this.shape_62.setTransform(121.5848,295.9657);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#CB753D","#985539"],[0,1],-67.5,-243.4,4.9,19).s().p("AA6AqIgkgJQgWgHhQgVIgDgBQAAgBAAAAQAAAAAAgBQgBgBAAAAQAAgBAAAAIABgmQAEgUAVgCIB5ALIALAqQAHAiAEAiQgCgLgZgIg");
	this.shape_63.setTransform(159.775,311.8875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#CB753D","#985539"],[0,1],-62.9,-229.3,9.5,33.1).s().p("AgZBQQgPgDgDghQgBgkgCgIQgFgOAAgZQAAgdAJgHQAFgEANgCQAKgBAVgFQAUgDAKAJQAHAHADASIABAEQADAVAAALQABAQgGANIgeBPg");
	this.shape_64.setTransform(136.6521,302.8625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#CB753D","#985539"],[0,1],-65.4,-238.3,6.9,24.1).s().p("AgWBGQgVgXgBgIIABgKQADgOAMgnQAKgiADgVQAHABASgIQAQgHAIAHQAGAFAAASIAAAYQgBASgEAjQgCAhAKAUIACADQgXAKgPAJIgDABQgHAAgTgUg");
	this.shape_65.setTransform(145.3438,310.1605);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#CB753D","#985539"],[0,1],-67.7,-245.2,4.6,17.1).s().p("Ag4A+IgOgUIgOgVQgEgGAAgEQAAgHAPgNIAVgRIAYgZQAQgPANgCQAHgBAGACQARAEAUAPQATAOALAPQAIAMgBAGQAAAFgKALIgTAWQgMANgKAFQgOAHgWADIgjAEIgEAAQgKAAgIgHg");
	this.shape_66.setTransform(133.5507,321.0163);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#CB753D","#985539"],[0,1],-62.9,-232.1,9.4,30.3).s().p("AAWBVQgXgFgKgRIgFgMIgMgkQgDgLgFgEQgEgDgLgCQgtgDgRgHQgKgDgHgYQgIgYAFgKQAGgNAcAEQAPACAXAGIAnAHQAIACASALQARAJAKABQANACAZgLQAVgKARAHQANAFAHAOQAHAMABAQQACANgDANQgFASgYAXQgXAWgSAGQgNAEgMAAQgIAAgJgCg");
	this.shape_67.setTransform(117.7039,310.916);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#CB753D","#985539"],[0,1],-61.3,-218,11.1,44.3).s().p("AhjBFQgNgPgEgMQgMggAfgcQAVgUAogsQACgDBFAoIAcAKQASAHAIAIIAIAIQAHAMAGATIAJAiQAEAPgFADQgDADgSAAQhcADhOAHIgCAAQgKAAgOgPg");
	this.shape_68.setTransform(91.8941,303.5925);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#CB753D","#985539"],[0,1],-58.6,-211.6,13.8,50.8).s().p("AAKA8Qg1gOgxgaQgOgHABgLQAAgCAGgIQAHgJANgUQAMgRAMgGQANgHAbgDQAdgDAJAHIAsAeQAaAUAJASQAFAMgBATIgBAgQAAAEgDACIgEABIgDAAQgoAAgtgMg");
	this.shape_69.setTransform(102.5318,293.4177);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#CB753D","#985539"],[0,1],-55.6,-200.3,16.8,62.1).s().p("AgpBIQgWgGgBgdQAAgFAEgLIAKgwQAHghANgIQASgKAZAPQAOAJAXAUQANALACAMQACARgTAWQgTAWgZANQgUAKgPAAIgKgBg");
	this.shape_70.setTransform(88.4867,285.1288);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#CB753D","#985539"],[0,1],-56.4,-205.4,15.9,56.9).s().p("AAfBbQgPgQgMgIIg9gvIgRgNQgKgHgDgJQgFgLACgIQABgGANgVQANgUAKgIQANgLASAEQAHABAWALIAgAJQATAFAIAKQAKALAHAWQAIAVABASIAAAMQgBALgbAcQgVAXgJAAIgDgBg");
	this.shape_71.setTransform(72.5442,294.9079);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#CB753D","#985539"],[0,1],-60.3,-216.5,12,45.8).s().p("AAGBtQglgGg0gqQgLgJgEgcIgEgoQgEglAAgJQAAgfAMgLQAPgMAfAVQAQAMAZAWQAoAdAfAgIAhAfQASAWgQAPQgLAKgaAMIgbAOQgLAFgLAAIgHAAg");
	this.shape_72.setTransform(70.1005,307.7804);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#CB753D","#985539"],[0,1],-52.6,-192.7,19.7,69.7).s().p("AASA0QgYgDgfgMQghgNgBgJQAAgYADgMQAFgVAQgGQATgHAoAFIA8AIQgBAjgFATQgKAhgXAIIgFAAIgKgBg");
	this.shape_73.setTransform(75.5964,280.3158);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#CB753D","#985539"],[0,1],-55,-195.4,17.3,67).s().p("ABOBWQgPgEgbgIIgpgOQhTgWgFgaQgDgMASgHIAegJQAWgKAPgSIALgUQAHgNAHgFIAIgEQAJgBAFAKQADAFABAMQADAiAUAuQADAIATAcQAQAagKAEIgEABIgJgBg");
	this.shape_74.setTransform(101.4464,276.5228);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#CB753D","#985539"],[0,1],-87.2,-317.7,-14.8,-55.3).s().p("AgOgMQgPgXgBgHQgEgQAUgIIAQgHQACATASAqQANAfgEA3QgOgogfgug");
	this.shape_75.setTransform(159.5236,391.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#CB753D","#985539"],[0,1],-84,-304.5,-11.7,-42.1).s().p("AghgGQgEgTABgGQAAgTANADQAGABAMANIAOATIAQARQAMAMAAAIIAAACQgBAIgKAHQgIAFgJADIgGABQgaAAgKg3g");
	this.shape_76.setTransform(155.4719,378.7153);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#CB753D","#985539"],[0,1],-77,-283.7,-4.6,-21.3).s().p("AACBVIgOgRQgFgIgOggIgJgRQgGgLAAgGQAAgGAEgLIAGgSIABgBQABgHADgGQAHgOASgNQAJgHAWgMQAFgDADABQACAAACADQAIAKABAKQABAGgDARIgLA5IgXBpQACgHgKgNg");
	this.shape_77.setTransform(162.1536,354.125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#CB753D","#985539"],[0,1],-74.2,-269.5,-1.8,-7.1).s().p("AgZA7IgKgEIgVgNIgCguQAAgeAKgNQAEgFAGgDQAIgEANABIAVADQAfAEAYAMQgOAkgWAYQgNAPgLAIIgLAJQgIAGgFAAIAAAAg");
	this.shape_78.setTransform(162.1239,339.1668);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#CB753D","#985539"],[0,1],-70.4,-256.7,1.9,5.6).s().p("AgDA+QgKgBgGgDQgFgDgIgIQgMgNgKgPQgCgEAAgCIABgGIAJgvQAFgeAWgGQARgEAXANQAUALAPAQQADAygEBEQgcgMgegEg");
	this.shape_79.setTransform(162.9266,325.1938);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#CB753D","#985539"],[0,1],-81.6,-293.7,-9.2,-31.4).s().p("AgwAlIgCgDIgBgEQAAgYACgHQACgRALgMQAlgnASAOQATAQAOA0IAAAAIgCALQgsAZgWAKIgDABQgIAAgVgXg");
	this.shape_80.setTransform(157.125,366.8913);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#CB753D","#985539"],[0,1],-78.5,-284.6,-6.2,-22.3).s().p("AgMAWQgGgIADgQQACgQAHgJQAGAAAJAJQAJAJgCAIQgCANgIAKQgEAGgEAAQgFAAgFgGg");
	this.shape_81.setTransform(154.8107,357.5125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#CB753D","#985539"],[0,1],-69.3,-251.8,3.1,10.5).s().p("Ag5A8QgQgGgFgOQgEgPAMgNQAMgNAngZIAmgXQAZgMARABQAeABgSAxQgOAlgUAXQgHgDgLgBQgLAAgcAKQgRAGgLAAQgGAAgFgCg");
	this.shape_82.setTransform(148.5047,323.9492);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#CB753D","#985539"],[0,1],-70.4,-256.5,2,5.8).s().p("AgdATQgPgXAAgMIABgDQAGgNAVgDQASgDATAHQATAHAEAMQAEAMgVAPIgdAVIgFABQgMAAgKgSg");
	this.shape_83.setTransform(135.282,332.5785);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#CB753D","#985539"],[0,1],-67.3,-245.7,5,16.7).s().p("AgDAvIgNgRIgSgZQgKgMAAgRQAAgUAOgIQAJgFASAHQAQAHAPAMQAPANABAKQACAKgHAMIgKAWQgIARgGACIgEAAQgGAAgIgIg");
	this.shape_84.setTransform(118.1632,325.5833);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#CB753D","#985539"],[0,1],-70.1,-253.2,2.2,9.2).s().p("AgBAfQgcgMgFgIIgBgCQgEgJAEgLQADgLAIgIQAKgKAHAAQAGABAIAKQAOAOAJASQAOAbgMAJQAAABAAAAQgBAAAAAAQgBAAgBABQAAAAgBAAQgJAAgUgKg");
	this.shape_85.setTransform(125.7578,331.7584);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#CB753D","#985539"],[0,1],-64.2,-235.4,8.2,27).s().p("AARAoIgPgPQgFgFgQgKQgPgJgIgGQgTgTAUgKIApgNIAJgDIAGAAIADABIAcALIADACQACACAAAEQADAWgEAVQgEAXgMAQQgJgDgIgJg");
	this.shape_86.setTransform(108.483,317.1417);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#CB753D","#985539"],[0,1],-68.4,-245.4,4,17).s().p("AA4AqIAAAAIAAAAgAAFAhQg0gGgGgIQgHgJALgSQAIgOALgLQAPgOAOAKIAWAcIAUAWQAOATABAKQAAgDgzgGg");
	this.shape_87.setTransform(110.56,327.675);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#CB753D","#985539"],[0,1],-65.3,-236.3,7.1,26).s().p("AAMA6QgYgLgLgDIgigGQgUgEgEgPQgEgNAGgVQAJgYACgKQAIgcBGAaIAiANQAUAJALAMQAGAHABAFQAGAPgMAYQgMAZgPAEQgFACgFAAQgMAAgPgHg");
	this.shape_88.setTransform(97.647,321.3714);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#CB753D","#985539"],[0,1],-63.6,-235.7,8.7,26.7).s().p("AgKBZQgDAAgDgEIgggiIgFgGQgBgCgBgGQgFgjgGgOQgEgNAAgDQgBgIAGgIQAHgKARgHIAcgKQASgHAQgCIATgFQAOgEAFABQAFABAEAEQAFAHgCAQIgEAWQgCALACAVQABAVgBAKQAAAIgFAEIgMAHQgLAGgPAOIgYAVQgGAEgDAAIgBAAg");
	this.shape_89.setTransform(80.8445,324.8914);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#CB753D","#985539"],[0,1],-70.2,-256.4,2.1,6).s().p("AANApIgogNQgHgDgJgMIgXgVQgRgSADgIQAEgLAVAAQAQAAAVAFIAkAIIAMADIAHAEQAIADARADQAOAFAEALQAEALgKAOQgHALgMAJQgHAEgKAAQgKAAgPgFg");
	this.shape_90.setTransform(116.3612,337.6417);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#CB753D","#985539"],[0,1],-68.1,-245.9,4.3,16.4).s().p("AAQA0QgQACgKgCQgMgBgNgHQgTgLgSgVQgYgbAXgIQAFgCACgFQALgKAJgHQAegSAvAlIAjAcQAXAWgFAQQgFAPgZABQgcgDgKABg");
	this.shape_91.setTransform(96.2003,332.1278);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#CB753D","#985539"],[0,1],-70.5,-256.4,1.9,6).s().p("AgLAVQgDgBgEgEIgRgMQgNgKACgFQAEgJAaAAIAbAAQARABAKAGQAGADACAGQADAGgFAEQgDAEgTAEQgLAEgOADIgEAAIgEAAg");
	this.shape_92.setTransform(103.4425,341.2375);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#CB753D","#985539"],[0,1],-68,-247.1,4.3,15.3).s().p("AAOAhIgRgLQgPgIgHgHQgLgLACgNQAFgZAdAOQAeAOAEASQACAGgEAHIgBACIgKAMQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_93.setTransform(86.0571,335.9622);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#CB753D","#985539"],[0,1],-63.5,-230.1,8.8,32.3).s().p("AAZArIgbgKIgOgHQgGgEgHgMIgPgVQgIgQAKgJQAYgZApA2IASAYQAMAUgHAGIgBABQgDABgEAAQgGAAgHgCg");
	this.shape_94.setTransform(68.1385,322.7933);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#CB753D","#985539"],[0,1],-48.9,-178.3,23.5,84.1).s().p("AgnBjQgJgJgKgRIgQgcQgLgRgEgVIgEgpQgCgXARgWQALgMAZgXQANgMAbAMQAOAGAZARQAVAKAJAJQAPAPAIAhQAHAggGAVQgHAYghAaIg1AnIgGADIgBAAQgFAAgZgWg");
	this.shape_95.setTransform(91.6154,260.4332);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#CB753D","#985539"],[0,1],-50.3,-180.4,22.1,82).s().p("AgEBCQgZgHgNgNQgSgTAEgbQAEgaAUgMQAFgCAPgQQALgMAJAAIAFAAIAAAAQASADAMAmQAFAUAHAgQAEASgCAHQgCAMgQAFQgIACgKAAQgMAAgNgDg");
	this.shape_96.setTransform(76.6497,267.0885);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#CB753D","#985539"],[0,1],-44.8,-161.3,27.6,101).s().p("AguB5QgDgBgDgFQgIgOgDgIQgOgiAKgwIANg/IAEgdQADgSAJgIQALgKAagCQATgCATADQAWAkAHATQANAkgOAYQgiA7hCA8QgGAFgDAAIgCAAg");
	this.shape_97.setTransform(76.7268,246.4677);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#CB753D","#985539"],[0,1],-42.8,-157.3,29.5,105.1).s().p("AAYBkQgWgcgMgPQgfgjgYgmQgMgTAEgLQACgFASgWQAbggAfgLQAogNAGAtIALBIQASCEgHAAIgBAAQgcAAgUgUg");
	this.shape_98.setTransform(91.7711,237.7461);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#CB753D","#985539"],[0,1],-39.5,-137.5,32.8,124.8).s().p("AgwB0QgagSAVgoQAagxgCgMQgDgPgHgVIgNgjQgDgJABgKQABgLAGgHQAJgKAGAEQACABALANIBCBXIABACQAHAJAIAZQgMAcgvAnQgXAWgaAKQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAg");
	this.shape_99.setTransform(83.9008,219.2296);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#CB753D","#985539"],[0,1],-31.8,-115.2,40.6,147.1).s().p("AgKA7QgGgDgBgMIgHhGQgDgcAHgEQAGgDAIAFIALAJQAWAQgBAbQgBAVgOAZQgLASgHAAIgDgBg");
	this.shape_100.setTransform(80.0715,195.7827);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#CB753D","#985539"],[0,1],-28.6,-101.4,43.8,160.9).s().p("AguAgQgHgHgDgFQgEgJABgMIgCggQAAgTAFgLQAFgLAHgFQAFgEAKgDIAMgCIAOgFQAKgEADAAQANACALAkQAFATAGAeIAPAuQAHAfgPAOQgKAKgLAHQgpghgkghg");
	this.shape_101.setTransform(83.3367,180.2225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#CB753D","#985539"],[0,1],-23.7,-84.9,48.7,177.5).s().p("AgNAwQgYgEgIgTQgFgOAEgbQAFgiAbADQAOACAlAMIALA0QAEAOgcAJQgTAGgMAAIgGAAg");
	this.shape_102.setTransform(79.6602,163.2828);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#CB753D","#985539"],[0,1],-20.1,-71.1,52.2,191.2).s().p("AALA+IghgPQgWgLgHgNQgJgOACgcQACgUAIgJQAHgJAQgIIAagNIAFgCQAZgCAPBJQAIAlAFA1QgLgCglgRg");
	this.shape_103.setTransform(76.981,149.3235);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#CB753D","#985539"],[0,1],-15,-56.4,57.4,205.9).s().p("AgQAnQgGgJgJgVIgNgaQgHgSAFgJQAFgLAeADQAYADAOAGIAGAEQAXAQgJAkQgIAkgcAEIgDAAQgNAAgLgOg");
	this.shape_104.setTransform(73.2415,134.2528);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#CB753D","#985539"],[0,1],-13,-44.2,59.3,218.1).s().p("AgkAfIgGgCQgHgCAAgEIABgEQAJgTATgOQAIgHAcgRQANAWAVA3QgKgCgOABIgYABIgCAAQgQAAgUgIg");
	this.shape_105.setTransform(70.7,122.2264);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#CB753D","#985539"],[0,1],-2.2,-9.3,70.1,253).s().p("AAFA4QgEAAgFgEQgIgGgHgTIgJgbQgEgNAAgQQAAgWAKgEQAJgEAUAVIAaAdQgGBCgUAAIgCgBg");
	this.shape_106.setTransform(63.925,86.2108);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#CB753D","#985539"],[0,1],-12.8,-45.2,59.5,217.2).s().p("AgCAVIgSgFQgLgFgBgHQgDgJARgKQATgPAIAHIACABQACADAEALIAPAaQACAFgBACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAg");
	this.shape_107.setTransform(83.4056,119.6494);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#CB753D","#985539"],[0,1],-31.6,-115.3,40.8,147.1).s().p("Ag1A3IgWhAQgMgmgCgcQAAgMAHgCQADgBAHADQAXAJAQADQARADAWgBQA4gEAAAZQAIAWAIAgIAMA3QhDAdgLADQgKACgIAAQgkAAgLgkg");
	this.shape_108.setTransform(101.925,189.7955);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#CB753D","#985539"],[0,1],-35.8,-127.7,36.6,134.7).s().p("AAZArIg6gBQgmgGgEgaQAdgHAmgQIBAgfIAUBaQgRgDgiAAg");
	this.shape_109.setTransform(105.825,202.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#CB753D","#985539"],[0,1],-41.6,-149.4,30.8,113).s().p("Ag2CDQgDgCgEgaIgDghQgFgjgDg4IgDgvQgBggAJgOQAGgIAMgBIAUABQAgADAdgRQAJAKAMAcQAgBNgMAyQgKAqglAlQgcAdgbAAQgNAAgMgGg");
	this.shape_110.setTransform(107.4373,225.1919);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#CB753D","#985539"],[0,1],-58.7,-212.4,13.7,50).s().p("Ag9A4QgXgWgJg+QgDgTASgLQAQgJAWABQAQAAAPAOIAXAbQAIAHAJAGIAcANQARAJAKAIQAHAIABAFQACALgfAKIgpAJQgdAGgPAAIgCAAQgcAAgLgLg");
	this.shape_111.setTransform(141.86,283.371);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#CB753D","#985539"],[0,1],-58.2,-209.7,14.1,52.7).s().p("AAWArIgmgWQgfgUgLgRQgLgSAKgMQAEgFAXgNQA+BOAiAxIgEACQgNgJgZgNg");
	this.shape_112.setTransform(148.5549,278.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#CB753D","#985539"],[0,1],-53.6,-192.3,18.7,70).s().p("AADBlQgKAAgNgNIgTgXIgqgzIgDgEIABgEQALgkAbgjIAfgnQAZAoA+BPQALAPABAIQAAAIgLAOQgRAVgbASQgGAFgFAAIgCABQgGAAgIgEg");
	this.shape_113.setTransform(133,264.36);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#CB753D","#985539"],[0,1],-49.3,-176.8,23,85.6).s().p("AgNA9IgCgCQgJgRgDgYQgCgXADgUIAGgSQADgKgDgIQAUArAdAuIgRAOIgLAMQgIAIgEAAIgCgBg");
	this.shape_114.setTransform(127.3182,249.1549);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#CB753D","#985539"],[0,1],-55.7,-203.3,16.7,59).s().p("AAYBIQg0gXglgpQgXgZgHgLQgTgbAIgNQAJgOAwgFIA/gDQALgBAFACQAFABAGAHIAyA0IADAGQACAGABAIIAMBUQACARgTAAQgVgBgvgTg");
	this.shape_115.setTransform(119.7568,279.6167);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#CB753D","#985539"],[0,1],-46.7,-170.1,25.6,92.2).s().p("AgXDWQgLgJgJgSIgPgfQgHgNgLgaIgLgZQgLgbgCgJQgCgPAJgWIAIgVQAEgLADgFQAEgEAHgEIAMgHQAIgFANgQQArg2AOgXQAfg1gJglQAXBNAfBJQgEAaAAAkIADA8IADAuQAAAbgIARQgMAagnAgQgbAXgSAAQgMAAgIgIg");
	this.shape_116.setTransform(113.256,245.7377);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#CB753D","#985539"],[0,1],-27.5,-93.7,44.8,168.7).s().p("AAtBkQgYgHgQgKIgBAAQgfgTgmgJIgHgDQgCgCgBgEQgIgWgCgMQgDgVAJgLQAEgFAKgHQAcgTAQgOQAVgVAMgWIAHgDQAXBHAbBaIASA+IgqgMg");
	this.shape_117.setTransform(98.126,168.125);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#CB753D","#985539"],[0,1],-20,-75.3,52.3,187.1).s().p("AgEBpIgFgSQgDgIgPgdIgUgnQgJgUgEgUIgLghQgHgXAHgKQAIgMAWACIAgAGIAuAIQAKASAJAfIAPAyQAIAYgIAQQgEAHgXAaQgMAOgJAFQgJAGgJAAIgJgBg");
	this.shape_118.setTransform(90.706,149.6785);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#CB753D","#985539"],[0,1],-16,-56.4,56.3,206).s().p("AADAwIg3gpQgKgIgHgoQgDgNADgGQACgGAMgGQANgGAbADQAdADAFANQAbBDAaBFQgaAAgrgdg");
	this.shape_119.setTransform(86.5375,130.85);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#CB753D","#985539"],[0,1],-10,-38,62.3,224.4).s().p("AgPA0QgHgCgSgrQgQgogCgNQBYABgDgHQANAaASAqIgHADIggAWQgRAMgLAAIgGgBg");
	this.shape_120.setTransform(78.25,113.0523);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#CB753D","#985539"],[0,1],-6.9,-20.4,65.4,242).s().p("AAvBYQgMgGgQgBIgdAAQgGAAgDgBIgEgFQgVgbgGgJQgMgVADgUQACgPAIgdQAKgeACgOIALAMQAeAwAaAuIATAkQAPAfgEAGQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAAAQgEAAgFgDg");
	this.shape_121.setTransform(72.7804,96.1389);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#7A4A35","#633631"],[0,1],-4,-5.4,4.8,5).s().p("AAABIQgYgBgagNQgNgGALgvQAPgzADgPQAYAbAZgFQAWgCAPgeQAGAoAAAXQABAjgLATQgPAagfAAIgCAAg");
	this.shape_122.setTransform(153.6915,453.529);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#FEC92F","#F79939"],[0,1],-50.8,-47.4,49.9,57.6).s().p("AHNelQgYgBgagNQgOgHAOg3QASg5AAgJQgMnFAAhXQAAg3g9jBIg9i2QgMAXhEANQgTAEiuAXQiHATiChYQiQhhhOjCQhBihA8iXQAkhMAOgjQAag9gCgtQgDhaAnitIAoiaQAhosifmYQgxiAg/hhIg1hIIBAkpQCDBTCFEIQCFEIB+GrQAbBfBAEUQApCuA/CNQAkBPBFBeICACiQCgDNAhCZQAjClgzEDQgKAygdB+QgUBVAAAYQAAAlATAqQAQAlgGBAQgpGNAAAbQAAAPAJA8QAFA5gOAZQgOAaggAAIgDAAg");
	this.shape_123.setTransform(107.4622,265.029);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#4D3A32").s().p("AAAAVQgggDgPgTIABgTQAJAMAVAFQATADAPgEIAfgOQgFALgHAJIACAIQgTALgRAAIgDAAg");
	this.shape_124.setTransform(129.5,448.3333);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#7A4A35","#633631"],[0,1],-4.9,-4.4,3.7,5.1).s().p("AgzAuQgCggAFhKQARANAYAEQAXAEAUgHIALAqQAJAfgGAHQgKANgqAKQgPAEgLAAQgVAAgCgPg");
	this.shape_125.setTransform(129.6164,453.2667);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#FEC92F","#F79939"],[0,1],5.5,-27.4,-4.3,21.4).s().p("AAdIPQgCgbAEg8QADg9AEgPQAEgPgPitQgPiugJgdQgfhkgdhfQg5i6gShoICwgdIAKC3QAMC7ANAWQAWAlAHCiIAKB8QAJBrABA5QABAaACAgQABAMgIANIgHANIALAqQAJAggGAHQgKANgrAKQgPAEgLAAQgVAAgCgPg");
	this.shape_126.setTransform(121.533,405.1667);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4D3A32").s().p("AgHAMQgggbgUgmQAiAnAeAVQAPAKAJADQAPAOAQAVQglgPgegcg");
	this.shape_127.setTransform(195.575,408.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#DF9B61").s().p("AAgAcIgbgVQgfgVghgiQAlALAkAeQAmAeAIAaIgcgVg");
	this.shape_128.setTransform(192.675,398.175);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#7A4A35","#F79939"],[0,1],-10.3,-16.5,9.4,18.5).s().p("ABBB3Qgxgig8gcQgsgVgXhOQgOgwgEg2IAMgRQAHgKAHgFQAoAHAsAjQArAiAGAeQAFAZAcAnQAOATANAOQgRgEgZgOIgVgMQAqAmAjBLQARAlAJAeQgNgXg0gjg");
	this.shape_129.setTransform(195.775,410.675);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#FEC92F","#F79939"],[0,1],1.9,12.7,-12.4,-27.1).s().p("AC0G7Qgxgig9gcQgxgYgWhfIgOhbIgFgFQhxiYg4iwQgMgkgMhAIgThkQgLgzgBgaQgDg4AdgFQAXgDAJANQAGAJADAXQADASAIByQAMB6AXBMQAXBQAfA8QAiBFAvA8IAFAFQAoAHAtAjQAtAjAGAeQAFAZAcAnQAOAUANAOQgRgEgZgOIgVgNQAqAnAjBLQARAlAJAeQgNgXg0gjg");
	this.shape_130.setTransform(184.2651,378.264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130,p:{scaleX:1,scaleY:1,x:184.2651,y:378.264}},{t:this.shape_129,p:{scaleX:1,scaleY:1,x:195.775,y:410.675}},{t:this.shape_128,p:{scaleX:1,scaleY:1,x:192.675,y:398.175}},{t:this.shape_127,p:{scaleX:1,scaleY:1,x:195.575,y:408.3}},{t:this.shape_126,p:{scaleX:1,scaleY:1,x:121.533,y:405.1667}},{t:this.shape_125,p:{scaleX:1,scaleY:1,x:129.6164,y:453.2667}},{t:this.shape_124,p:{scaleX:1,scaleY:1,x:129.5,y:448.3333}},{t:this.shape_123,p:{scaleX:1,scaleY:1,x:107.4622,y:265.029}},{t:this.shape_122,p:{scaleX:1,scaleY:1,x:153.6915,y:453.529}},{t:this.shape_121,p:{scaleX:1,scaleY:1,x:72.7804,y:96.1389}},{t:this.shape_120,p:{scaleX:1,scaleY:1,x:78.25,y:113.0523}},{t:this.shape_119,p:{scaleX:1,scaleY:1,x:86.5375,y:130.85}},{t:this.shape_118,p:{scaleX:1,scaleY:1,x:90.706,y:149.6785}},{t:this.shape_117,p:{scaleX:1,scaleY:1,x:98.126,y:168.125}},{t:this.shape_116,p:{scaleX:1,scaleY:1,x:113.256,y:245.7377}},{t:this.shape_115,p:{scaleX:1,scaleY:1,x:119.7568,y:279.6167}},{t:this.shape_114,p:{scaleX:1,scaleY:1,x:127.3182,y:249.1549}},{t:this.shape_113,p:{scaleX:1,scaleY:1,x:133,y:264.36}},{t:this.shape_112,p:{scaleX:1,scaleY:1,x:148.5549,y:278.675}},{t:this.shape_111,p:{scaleX:1,scaleY:1,x:141.86,y:283.371}},{t:this.shape_110,p:{scaleX:1,scaleY:1,x:107.4373,y:225.1919}},{t:this.shape_109,p:{scaleX:1,scaleY:1,x:105.825,y:202.3}},{t:this.shape_108,p:{scaleX:1,scaleY:1,x:101.925,y:189.7955}},{t:this.shape_107,p:{scaleX:1,scaleY:1,x:83.4056,y:119.6494}},{t:this.shape_106,p:{scaleX:1,scaleY:1,x:63.925,y:86.2108}},{t:this.shape_105,p:{scaleX:1,scaleY:1,x:70.7,y:122.2264}},{t:this.shape_104,p:{scaleX:1,scaleY:1,x:73.2415,y:134.2528}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:76.981,y:149.3235}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:79.6602,y:163.2828}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:83.3367,y:180.2225}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:80.0715,y:195.7827}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:83.9008,y:219.2296}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:91.7711,y:237.7461}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:76.7268,y:246.4677}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:76.6497,y:267.0885}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:91.6154,y:260.4332}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:68.1385,y:322.7933}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:86.0571,y:335.9622}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:103.4425,y:341.2375}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:96.2003,y:332.1278}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:116.3612,y:337.6417}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:80.8445,y:324.8914}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:97.647,y:321.3714}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:110.56,y:327.675}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:108.483,y:317.1417}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:125.7578,y:331.7584}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:118.1632,y:325.5833}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:135.282,y:332.5785}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:148.5047,y:323.9492}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:154.8107,y:357.5125}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:157.125,y:366.8913}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:162.9266,y:325.1938}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:162.1239,y:339.1668}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:162.1536,y:354.125}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:155.4719,y:378.7153}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:159.5236,y:391.65}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:101.4464,y:276.5228}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:75.5964,y:280.3158}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:70.1005,y:307.7804}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:72.5442,y:294.9079}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:88.4867,y:285.1288}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:102.5318,y:293.4177}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:91.8941,y:303.5925}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:117.7039,y:310.916}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:133.5507,y:321.0163}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:145.3438,y:310.1605}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:136.6521,y:302.8625}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:159.775,y:311.8875}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:121.5848,y:295.9657}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:161.7979,y:298.675}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:152.1503,y:295.1781}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:88.425,y:206.3167}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:114.15,y:407.2891}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:118.595,y:464.2641}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:122.25,y:346.5105}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:104.8875,y:352.9278}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:109.6196,y:361.3862}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:114.413,y:370.8294}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:106.3944,y:370.5}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:108.8001,y:377.2626}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:114.8517,y:379.8417}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:121.3125,y:373.6492}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:107.7654,y:386.255}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:113.3423,y:386.8182}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:120.675,y:359.7569}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:111.7771,y:349.5077}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:81.7815,y:397.45}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:88.7552,y:461.625}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:81.175,y:349.2965}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:82.805,y:362.2611}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:80.1933,y:384.1462}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:80.1787,y:375.8888}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:78.425,y:368.675}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:76.4318,y:359.3393}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:80.0783,y:340.8985}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:70.7814,y:341.2375}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:146.2333,y:340.7708}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:91.6,y:456.305}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:117.4,y:458.225}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:154.6,y:448.3029}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:10.9589,y:45.5043}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:10.1724,y:45.5485}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:38.9074,y:64.6543}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:52.1525,y:67.174}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:61.5607,y:59.7311}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:61.9481,y:66.5779}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:58.0794,y:73.7519}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:52.8048,y:3.6268}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:14.2625,y:6.0865}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:32.1,y:102.9199}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:35.325,y:99.4}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:34.8917,y:111.712}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:35.325,y:97.775}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:45,y:52.9488}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:45,y:52.975}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:18.35,y:53.35}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:18.35,y:53.375}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:23.698,y:86.8778}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:13.1597,y:76.5}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:3.9194,y:93.9194}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:21.212,y:90.9166}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:22.0313,y:38.0191}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:45.7021,y:35.7824}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:16.1651,y:29.1433}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:47.7161,y:33.0179}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:69.3645,y:47.3878}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:70.2113,y:47.5444}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:45.325,y:56.05}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:43,y:53.725}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:20.45,y:54.925}},{t:this.shape,p:{scaleX:1,scaleY:1,x:18.4,y:52.85}}]}).to({state:[{t:this.shape_130,p:{scaleX:0.8,scaleY:0.8,x:168.3135,y:349.8038}},{t:this.shape_129,p:{scaleX:0.8,scaleY:0.8,x:177.5213,y:375.7323}},{t:this.shape_128,p:{scaleX:0.8,scaleY:0.8,x:175.0413,y:365.7324}},{t:this.shape_127,p:{scaleX:0.8,scaleY:0.8,x:177.3613,y:373.8323}},{t:this.shape_126,p:{scaleX:0.8,scaleY:0.8,x:118.1286,y:371.3257}},{t:this.shape_125,p:{scaleX:0.8,scaleY:0.8,x:124.5952,y:409.8051}},{t:this.shape_124,p:{scaleX:0.8,scaleY:0.8,x:124.5021,y:405.8585}},{t:this.shape_123,p:{scaleX:0.8,scaleY:0.8,x:106.8721,y:259.2172}},{t:this.shape_122,p:{scaleX:0.8,scaleY:0.8,x:143.855,y:410.0149}},{t:this.shape_121,p:{scaleX:0.8,scaleY:0.8,x:79.1271,y:124.1072}},{t:this.shape_120,p:{scaleX:0.8,scaleY:0.8,x:83.5027,y:137.6377}},{t:this.shape_119,p:{scaleX:0.8,scaleY:0.8,x:90.1326,y:151.8757}},{t:this.shape_118,p:{scaleX:0.8,scaleY:0.8,x:93.4674,y:166.9382}},{t:this.shape_117,p:{scaleX:0.8,scaleY:0.8,x:99.4033,y:181.6952}},{t:this.shape_116,p:{scaleX:0.8,scaleY:0.8,x:111.5071,y:243.7844}},{t:this.shape_115,p:{scaleX:0.8,scaleY:0.8,x:116.7076,y:270.8872}},{t:this.shape_114,p:{scaleX:0.8,scaleY:0.8,x:122.7567,y:246.5181}},{t:this.shape_113,p:{scaleX:0.8,scaleY:0.8,x:127.3021,y:258.682}},{t:this.shape_112,p:{scaleX:0.8,scaleY:0.8,x:139.7458,y:270.1339}},{t:this.shape_111,p:{scaleX:0.8,scaleY:0.8,x:134.39,y:273.8906}},{t:this.shape_110,p:{scaleX:0.8,scaleY:0.8,x:106.8522,y:227.348}},{t:this.shape_109,p:{scaleX:0.8,scaleY:0.8,x:105.5624,y:209.0348}},{t:this.shape_108,p:{scaleX:0.8,scaleY:0.8,x:102.4424,y:199.0314}},{t:this.shape_107,p:{scaleX:0.8,scaleY:0.8,x:87.6272,y:142.9153}},{t:this.shape_106,p:{scaleX:0.8,scaleY:0.8,x:72.0429,y:116.1649}},{t:this.shape_105,p:{scaleX:0.8,scaleY:0.8,x:77.4628,y:144.9769}},{t:this.shape_104,p:{scaleX:0.8,scaleY:0.8,x:79.496,y:154.5979}},{t:this.shape_103,p:{scaleX:0.8,scaleY:0.8,x:82.4875,y:166.6542}},{t:this.shape_102,p:{scaleX:0.8,scaleY:0.8,x:84.6309,y:177.8215}},{t:this.shape_101,p:{scaleX:0.8,scaleY:0.8,x:87.572,y:191.3731}},{t:this.shape_100,p:{scaleX:0.8,scaleY:0.8,x:84.9599,y:203.821}},{t:this.shape_99,p:{scaleX:0.8,scaleY:0.8,x:88.0233,y:222.5783}},{t:this.shape_98,p:{scaleX:0.8,scaleY:0.8,x:94.3194,y:237.3913}},{t:this.shape_97,p:{scaleX:0.8,scaleY:0.8,x:82.2842,y:244.3684}},{t:this.shape_96,p:{scaleX:0.8,scaleY:0.8,x:82.2225,y:260.8648}},{t:this.shape_95,p:{scaleX:0.8,scaleY:0.8,x:94.1948,y:255.5407}},{t:this.shape_94,p:{scaleX:0.8,scaleY:0.8,x:75.4136,y:305.428}},{t:this.shape_93,p:{scaleX:0.8,scaleY:0.8,x:89.7483,y:315.9629}},{t:this.shape_92,p:{scaleX:0.8,scaleY:0.8,x:103.6564,y:320.1831}},{t:this.shape_91,p:{scaleX:0.8,scaleY:0.8,x:97.8627,y:312.8954}},{t:this.shape_90,p:{scaleX:0.8,scaleY:0.8,x:113.9912,y:317.3065}},{t:this.shape_89,p:{scaleX:0.8,scaleY:0.8,x:85.5783,y:307.1064}},{t:this.shape_88,p:{scaleX:0.8,scaleY:0.8,x:99.02,y:304.2905}},{t:this.shape_87,p:{scaleX:0.8,scaleY:0.8,x:109.3503,y:309.3333}},{t:this.shape_86,p:{scaleX:0.8,scaleY:0.8,x:107.6887,y:300.9067}},{t:this.shape_85,p:{scaleX:0.8,scaleY:0.8,x:121.5084,y:312.6}},{t:this.shape_84,p:{scaleX:0.8,scaleY:0.8,x:115.4328,y:307.66}},{t:this.shape_83,p:{scaleX:0.8,scaleY:0.8,x:129.1276,y:313.256}},{t:this.shape_82,p:{scaleX:0.8,scaleY:0.8,x:139.7056,y:306.3527}},{t:this.shape_81,p:{scaleX:0.8,scaleY:0.8,x:144.7504,y:333.2029}},{t:this.shape_80,p:{scaleX:0.8,scaleY:0.8,x:146.6018,y:340.7058}},{t:this.shape_79,p:{scaleX:0.8,scaleY:0.8,x:151.2429,y:307.3483}},{t:this.shape_78,p:{scaleX:0.8,scaleY:0.8,x:150.6008,y:318.5266}},{t:this.shape_77,p:{scaleX:0.8,scaleY:0.8,x:150.6246,y:330.4929}},{t:this.shape_76,p:{scaleX:0.8,scaleY:0.8,x:145.2793,y:350.1649}},{t:this.shape_75,p:{scaleX:0.8,scaleY:0.8,x:148.5206,y:360.5125}},{t:this.shape_74,p:{scaleX:0.8,scaleY:0.8,x:102.0595,y:268.4121}},{t:this.shape_73,p:{scaleX:0.8,scaleY:0.8,x:81.3799,y:271.4465}},{t:this.shape_72,p:{scaleX:0.8,scaleY:0.8,x:76.9832,y:293.4178}},{t:this.shape_71,p:{scaleX:0.8,scaleY:0.8,x:78.9382,y:283.12}},{t:this.shape_70,p:{scaleX:0.8,scaleY:0.8,x:91.692,y:275.2968}},{t:this.shape_69,p:{scaleX:0.8,scaleY:0.8,x:102.9279,y:281.9278}},{t:this.shape_68,p:{scaleX:0.8,scaleY:0.8,x:94.4178,y:290.0675}},{t:this.shape_67,p:{scaleX:0.8,scaleY:0.8,x:115.0653,y:295.9263}},{t:this.shape_66,p:{scaleX:0.8,scaleY:0.8,x:127.7426,y:304.0063}},{t:this.shape_65,p:{scaleX:0.8,scaleY:0.8,x:137.1769,y:295.3219}},{t:this.shape_64,p:{scaleX:0.8,scaleY:0.8,x:130.2237,y:289.4836}},{t:this.shape_63,p:{scaleX:0.8,scaleY:0.8,x:148.7217,y:296.7035}},{t:this.shape_62,p:{scaleX:0.8,scaleY:0.8,x:118.17,y:283.9662}},{t:this.shape_61,p:{scaleX:0.8,scaleY:0.8,x:150.34,y:286.1336}},{t:this.shape_60,p:{scaleX:0.8,scaleY:0.8,x:142.6221,y:283.3362}},{t:this.shape_59,p:{scaleX:0.8,scaleY:0.8,x:91.6426,y:212.2481}},{t:this.shape_58,p:{scaleX:0.8,scaleY:0.8,x:112.2223,y:373.0236}},{t:this.shape_57,p:{scaleX:0.8,scaleY:0.8,x:115.7782,y:418.6029}},{t:this.shape_56,p:{scaleX:0.8,scaleY:0.8,x:118.7022,y:324.4015}},{t:this.shape_55,p:{scaleX:0.8,scaleY:0.8,x:104.8124,y:329.5352}},{t:this.shape_54,p:{scaleX:0.8,scaleY:0.8,x:108.598,y:336.3018}},{t:this.shape_53,p:{scaleX:0.8,scaleY:0.8,x:112.4327,y:343.8562}},{t:this.shape_52,p:{scaleX:0.8,scaleY:0.8,x:106.0179,y:343.5927}},{t:this.shape_51,p:{scaleX:0.8,scaleY:0.8,x:107.9424,y:349.0028}},{t:this.shape_50,p:{scaleX:0.8,scaleY:0.8,x:112.7836,y:351.066}},{t:this.shape_49,p:{scaleX:0.8,scaleY:0.8,x:117.9522,y:346.112}},{t:this.shape_48,p:{scaleX:0.8,scaleY:0.8,x:107.1147,y:356.1966}},{t:this.shape_47,p:{scaleX:0.8,scaleY:0.8,x:111.5761,y:356.6471}},{t:this.shape_46,p:{scaleX:0.8,scaleY:0.8,x:117.4422,y:334.9984}},{t:this.shape_45,p:{scaleX:0.8,scaleY:0.8,x:110.324,y:326.7992}},{t:this.shape_44,p:{scaleX:0.8,scaleY:0.8,x:86.3279,y:365.1524}},{t:this.shape_43,p:{scaleX:0.8,scaleY:0.8,x:91.9068,y:416.4916}},{t:this.shape_42,p:{scaleX:0.8,scaleY:0.8,x:85.8427,y:326.6302}},{t:this.shape_41,p:{scaleX:0.8,scaleY:0.8,x:87.1467,y:337.0017}},{t:this.shape_40,p:{scaleX:0.8,scaleY:0.8,x:85.0573,y:354.5095}},{t:this.shape_39,p:{scaleX:0.8,scaleY:0.8,x:85.0457,y:347.9037}},{t:this.shape_38,p:{scaleX:0.8,scaleY:0.8,x:83.6427,y:342.1328}},{t:this.shape_37,p:{scaleX:0.8,scaleY:0.8,x:82.0482,y:334.6643}},{t:this.shape_36,p:{scaleX:0.8,scaleY:0.8,x:84.9654,y:319.9119}},{t:this.shape_35,p:{scaleX:0.8,scaleY:0.8,x:77.5279,y:320.1831}},{t:this.shape_34,p:{scaleX:0.8,scaleY:0.8,x:137.8886,y:319.8098}},{t:this.shape_33,p:{scaleX:0.8,scaleY:0.8,x:94.1826,y:412.2357}},{t:this.shape_32,p:{scaleX:0.8,scaleY:0.8,x:114.8222,y:413.7717}},{t:this.shape_31,p:{scaleX:0.8,scaleY:0.8,x:144.5818,y:405.8341}},{t:this.shape_30,p:{scaleX:0.8,scaleY:0.8,x:29.6707,y:83.6002}},{t:this.shape_29,p:{scaleX:0.8,scaleY:0.8,x:29.0415,y:83.6355}},{t:this.shape_28,p:{scaleX:0.8,scaleY:0.8,x:52.0291,y:98.92}},{t:this.shape_27,p:{scaleX:0.8,scaleY:0.8,x:62.625,y:100.9356}},{t:this.shape_26,p:{scaleX:0.8,scaleY:0.8,x:70.1515,y:94.9814}},{t:this.shape_25,p:{scaleX:0.8,scaleY:0.8,x:70.4614,y:100.4588}},{t:this.shape_24,p:{scaleX:0.8,scaleY:0.8,x:67.3664,y:106.1979}},{t:this.shape_23,p:{scaleX:0.8,scaleY:0.8,x:63.1469,y:50.0986}},{t:this.shape_22,p:{scaleX:0.8,scaleY:0.8,x:32.3135,y:52.0664}},{t:this.shape_21,p:{scaleX:0.8,scaleY:0.8,x:46.5833,y:129.532}},{t:this.shape_20,p:{scaleX:0.8,scaleY:0.8,x:49.1632,y:126.7161}},{t:this.shape_19,p:{scaleX:0.8,scaleY:0.8,x:48.8166,y:136.5655}},{t:this.shape_18,p:{scaleX:0.8,scaleY:0.8,x:49.1632,y:125.4161}},{t:this.shape_17,p:{scaleX:0.8,scaleY:0.8,x:56.9031,y:89.5556}},{t:this.shape_16,p:{scaleX:0.8,scaleY:0.8,x:56.9031,y:89.5766}},{t:this.shape_15,p:{scaleX:0.8,scaleY:0.8,x:35.5834,y:89.8766}},{t:this.shape_14,p:{scaleX:0.8,scaleY:0.8,x:35.5834,y:89.8966}},{t:this.shape_13,p:{scaleX:0.8,scaleY:0.8,x:39.8618,y:116.6985}},{t:this.shape_12,p:{scaleX:0.8,scaleY:0.8,x:31.4313,y:108.3963}},{t:this.shape_11,p:{scaleX:0.8,scaleY:0.8,x:24.0391,y:122.3317}},{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:37.873,y:119.9295}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:38.5284,y:77.6121}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:57.4648,y:75.8228}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:33.8355,y:70.5116}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:59.076,y:73.6112}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:76.3944,y:85.1069}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:77.0719,y:85.2322}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:57.1631,y:92.0366}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:55.3031,y:90.1766}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:37.2634,y:91.1366}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:35.6234,y:89.4766}}]},1).to({state:[{t:this.shape_130,p:{scaleX:0.8,scaleY:0.8,x:168.3135,y:349.8038}},{t:this.shape_129,p:{scaleX:0.8,scaleY:0.8,x:177.5213,y:375.7323}},{t:this.shape_128,p:{scaleX:0.8,scaleY:0.8,x:175.0413,y:365.7324}},{t:this.shape_127,p:{scaleX:0.8,scaleY:0.8,x:177.3613,y:373.8323}},{t:this.shape_126,p:{scaleX:0.8,scaleY:0.8,x:118.1286,y:371.3257}},{t:this.shape_125,p:{scaleX:0.8,scaleY:0.8,x:124.5952,y:409.8051}},{t:this.shape_124,p:{scaleX:0.8,scaleY:0.8,x:124.5021,y:405.8585}},{t:this.shape_123,p:{scaleX:0.8,scaleY:0.8,x:106.8721,y:259.2172}},{t:this.shape_122,p:{scaleX:0.8,scaleY:0.8,x:143.855,y:410.0149}},{t:this.shape_121,p:{scaleX:0.8,scaleY:0.8,x:79.1271,y:124.1072}},{t:this.shape_120,p:{scaleX:0.8,scaleY:0.8,x:83.5027,y:137.6377}},{t:this.shape_119,p:{scaleX:0.8,scaleY:0.8,x:90.1326,y:151.8757}},{t:this.shape_118,p:{scaleX:0.8,scaleY:0.8,x:93.4674,y:166.9382}},{t:this.shape_117,p:{scaleX:0.8,scaleY:0.8,x:99.4033,y:181.6952}},{t:this.shape_116,p:{scaleX:0.8,scaleY:0.8,x:111.5071,y:243.7844}},{t:this.shape_115,p:{scaleX:0.8,scaleY:0.8,x:116.7076,y:270.8872}},{t:this.shape_114,p:{scaleX:0.8,scaleY:0.8,x:122.7567,y:246.5181}},{t:this.shape_113,p:{scaleX:0.8,scaleY:0.8,x:127.3021,y:258.682}},{t:this.shape_112,p:{scaleX:0.8,scaleY:0.8,x:139.7458,y:270.1339}},{t:this.shape_111,p:{scaleX:0.8,scaleY:0.8,x:134.39,y:273.8906}},{t:this.shape_110,p:{scaleX:0.8,scaleY:0.8,x:106.8522,y:227.348}},{t:this.shape_109,p:{scaleX:0.8,scaleY:0.8,x:105.5624,y:209.0348}},{t:this.shape_108,p:{scaleX:0.8,scaleY:0.8,x:102.4424,y:199.0314}},{t:this.shape_107,p:{scaleX:0.8,scaleY:0.8,x:87.6272,y:142.9153}},{t:this.shape_106,p:{scaleX:0.8,scaleY:0.8,x:72.0429,y:116.1649}},{t:this.shape_105,p:{scaleX:0.8,scaleY:0.8,x:77.4628,y:144.9769}},{t:this.shape_104,p:{scaleX:0.8,scaleY:0.8,x:79.496,y:154.5979}},{t:this.shape_103,p:{scaleX:0.8,scaleY:0.8,x:82.4875,y:166.6542}},{t:this.shape_102,p:{scaleX:0.8,scaleY:0.8,x:84.6309,y:177.8215}},{t:this.shape_101,p:{scaleX:0.8,scaleY:0.8,x:87.572,y:191.3731}},{t:this.shape_100,p:{scaleX:0.8,scaleY:0.8,x:84.9599,y:203.821}},{t:this.shape_99,p:{scaleX:0.8,scaleY:0.8,x:88.0233,y:222.5783}},{t:this.shape_98,p:{scaleX:0.8,scaleY:0.8,x:94.3194,y:237.3913}},{t:this.shape_97,p:{scaleX:0.8,scaleY:0.8,x:82.2842,y:244.3684}},{t:this.shape_96,p:{scaleX:0.8,scaleY:0.8,x:82.2225,y:260.8648}},{t:this.shape_95,p:{scaleX:0.8,scaleY:0.8,x:94.1948,y:255.5407}},{t:this.shape_94,p:{scaleX:0.8,scaleY:0.8,x:75.4136,y:305.428}},{t:this.shape_93,p:{scaleX:0.8,scaleY:0.8,x:89.7483,y:315.9629}},{t:this.shape_92,p:{scaleX:0.8,scaleY:0.8,x:103.6564,y:320.1831}},{t:this.shape_91,p:{scaleX:0.8,scaleY:0.8,x:97.8627,y:312.8954}},{t:this.shape_90,p:{scaleX:0.8,scaleY:0.8,x:113.9912,y:317.3065}},{t:this.shape_89,p:{scaleX:0.8,scaleY:0.8,x:85.5783,y:307.1064}},{t:this.shape_88,p:{scaleX:0.8,scaleY:0.8,x:99.02,y:304.2905}},{t:this.shape_87,p:{scaleX:0.8,scaleY:0.8,x:109.3503,y:309.3333}},{t:this.shape_86,p:{scaleX:0.8,scaleY:0.8,x:107.6887,y:300.9067}},{t:this.shape_85,p:{scaleX:0.8,scaleY:0.8,x:121.5084,y:312.6}},{t:this.shape_84,p:{scaleX:0.8,scaleY:0.8,x:115.4328,y:307.66}},{t:this.shape_83,p:{scaleX:0.8,scaleY:0.8,x:129.1276,y:313.256}},{t:this.shape_82,p:{scaleX:0.8,scaleY:0.8,x:139.7056,y:306.3527}},{t:this.shape_81,p:{scaleX:0.8,scaleY:0.8,x:144.7504,y:333.2029}},{t:this.shape_80,p:{scaleX:0.8,scaleY:0.8,x:146.6018,y:340.7058}},{t:this.shape_79,p:{scaleX:0.8,scaleY:0.8,x:151.2429,y:307.3483}},{t:this.shape_78,p:{scaleX:0.8,scaleY:0.8,x:150.6008,y:318.5266}},{t:this.shape_77,p:{scaleX:0.8,scaleY:0.8,x:150.6246,y:330.4929}},{t:this.shape_76,p:{scaleX:0.8,scaleY:0.8,x:145.2793,y:350.1649}},{t:this.shape_75,p:{scaleX:0.8,scaleY:0.8,x:148.5206,y:360.5125}},{t:this.shape_74,p:{scaleX:0.8,scaleY:0.8,x:102.0595,y:268.4121}},{t:this.shape_73,p:{scaleX:0.8,scaleY:0.8,x:81.3799,y:271.4465}},{t:this.shape_72,p:{scaleX:0.8,scaleY:0.8,x:76.9832,y:293.4178}},{t:this.shape_71,p:{scaleX:0.8,scaleY:0.8,x:78.9382,y:283.12}},{t:this.shape_70,p:{scaleX:0.8,scaleY:0.8,x:91.692,y:275.2968}},{t:this.shape_69,p:{scaleX:0.8,scaleY:0.8,x:102.9279,y:281.9278}},{t:this.shape_68,p:{scaleX:0.8,scaleY:0.8,x:94.4178,y:290.0675}},{t:this.shape_67,p:{scaleX:0.8,scaleY:0.8,x:115.0653,y:295.9263}},{t:this.shape_66,p:{scaleX:0.8,scaleY:0.8,x:127.7426,y:304.0063}},{t:this.shape_65,p:{scaleX:0.8,scaleY:0.8,x:137.1769,y:295.3219}},{t:this.shape_64,p:{scaleX:0.8,scaleY:0.8,x:130.2237,y:289.4836}},{t:this.shape_63,p:{scaleX:0.8,scaleY:0.8,x:148.7217,y:296.7035}},{t:this.shape_62,p:{scaleX:0.8,scaleY:0.8,x:118.17,y:283.9662}},{t:this.shape_61,p:{scaleX:0.8,scaleY:0.8,x:150.34,y:286.1336}},{t:this.shape_60,p:{scaleX:0.8,scaleY:0.8,x:142.6221,y:283.3362}},{t:this.shape_59,p:{scaleX:0.8,scaleY:0.8,x:91.6426,y:212.2481}},{t:this.shape_58,p:{scaleX:0.8,scaleY:0.8,x:112.2223,y:373.0236}},{t:this.shape_57,p:{scaleX:0.8,scaleY:0.8,x:115.7782,y:418.6029}},{t:this.shape_56,p:{scaleX:0.8,scaleY:0.8,x:118.7022,y:324.4015}},{t:this.shape_55,p:{scaleX:0.8,scaleY:0.8,x:104.8124,y:329.5352}},{t:this.shape_54,p:{scaleX:0.8,scaleY:0.8,x:108.598,y:336.3018}},{t:this.shape_53,p:{scaleX:0.8,scaleY:0.8,x:112.4327,y:343.8562}},{t:this.shape_52,p:{scaleX:0.8,scaleY:0.8,x:106.0179,y:343.5927}},{t:this.shape_51,p:{scaleX:0.8,scaleY:0.8,x:107.9424,y:349.0028}},{t:this.shape_50,p:{scaleX:0.8,scaleY:0.8,x:112.7836,y:351.066}},{t:this.shape_49,p:{scaleX:0.8,scaleY:0.8,x:117.9522,y:346.112}},{t:this.shape_48,p:{scaleX:0.8,scaleY:0.8,x:107.1147,y:356.1966}},{t:this.shape_47,p:{scaleX:0.8,scaleY:0.8,x:111.5761,y:356.6471}},{t:this.shape_46,p:{scaleX:0.8,scaleY:0.8,x:117.4422,y:334.9984}},{t:this.shape_45,p:{scaleX:0.8,scaleY:0.8,x:110.324,y:326.7992}},{t:this.shape_44,p:{scaleX:0.8,scaleY:0.8,x:86.3279,y:365.1524}},{t:this.shape_43,p:{scaleX:0.8,scaleY:0.8,x:91.9068,y:416.4916}},{t:this.shape_42,p:{scaleX:0.8,scaleY:0.8,x:85.8427,y:326.6302}},{t:this.shape_41,p:{scaleX:0.8,scaleY:0.8,x:87.1467,y:337.0017}},{t:this.shape_40,p:{scaleX:0.8,scaleY:0.8,x:85.0573,y:354.5095}},{t:this.shape_39,p:{scaleX:0.8,scaleY:0.8,x:85.0457,y:347.9037}},{t:this.shape_38,p:{scaleX:0.8,scaleY:0.8,x:83.6427,y:342.1328}},{t:this.shape_37,p:{scaleX:0.8,scaleY:0.8,x:82.0482,y:334.6643}},{t:this.shape_36,p:{scaleX:0.8,scaleY:0.8,x:84.9654,y:319.9119}},{t:this.shape_35,p:{scaleX:0.8,scaleY:0.8,x:77.5279,y:320.1831}},{t:this.shape_34,p:{scaleX:0.8,scaleY:0.8,x:137.8886,y:319.8098}},{t:this.shape_33,p:{scaleX:0.8,scaleY:0.8,x:94.1826,y:412.2357}},{t:this.shape_32,p:{scaleX:0.8,scaleY:0.8,x:114.8222,y:413.7717}},{t:this.shape_31,p:{scaleX:0.8,scaleY:0.8,x:144.5818,y:405.8341}},{t:this.shape_30,p:{scaleX:0.8,scaleY:0.8,x:29.6707,y:83.6002}},{t:this.shape_29,p:{scaleX:0.8,scaleY:0.8,x:29.0415,y:83.6355}},{t:this.shape_28,p:{scaleX:0.8,scaleY:0.8,x:52.0291,y:98.92}},{t:this.shape_27,p:{scaleX:0.8,scaleY:0.8,x:62.625,y:100.9356}},{t:this.shape_26,p:{scaleX:0.8,scaleY:0.8,x:70.1515,y:94.9814}},{t:this.shape_25,p:{scaleX:0.8,scaleY:0.8,x:70.4614,y:100.4588}},{t:this.shape_24,p:{scaleX:0.8,scaleY:0.8,x:67.3664,y:106.1979}},{t:this.shape_23,p:{scaleX:0.8,scaleY:0.8,x:63.1469,y:50.0986}},{t:this.shape_22,p:{scaleX:0.8,scaleY:0.8,x:32.3135,y:52.0664}},{t:this.shape_21,p:{scaleX:0.8,scaleY:0.8,x:46.5833,y:129.532}},{t:this.shape_20,p:{scaleX:0.8,scaleY:0.8,x:49.1632,y:126.7161}},{t:this.shape_19,p:{scaleX:0.8,scaleY:0.8,x:48.8166,y:136.5655}},{t:this.shape_18,p:{scaleX:0.8,scaleY:0.8,x:49.1632,y:125.4161}},{t:this.shape_17,p:{scaleX:0.8,scaleY:0.8,x:56.9031,y:89.5556}},{t:this.shape_16,p:{scaleX:0.8,scaleY:0.8,x:56.9031,y:89.5766}},{t:this.shape_15,p:{scaleX:0.8,scaleY:0.8,x:35.5834,y:89.8766}},{t:this.shape_14,p:{scaleX:0.8,scaleY:0.8,x:35.5834,y:89.8966}},{t:this.shape_13,p:{scaleX:0.8,scaleY:0.8,x:39.8618,y:116.6985}},{t:this.shape_12,p:{scaleX:0.8,scaleY:0.8,x:31.4313,y:108.3963}},{t:this.shape_11,p:{scaleX:0.8,scaleY:0.8,x:24.0391,y:122.3317}},{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:37.873,y:119.9295}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:38.5284,y:77.6121}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:57.4648,y:75.8228}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:33.8355,y:70.5116}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:59.076,y:73.6112}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:76.3944,y:85.1069}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:77.0719,y:85.2322}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:57.1631,y:92.0366}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:55.3031,y:90.1766}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:37.2634,y:91.1366}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:35.6234,y:89.4766}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,208.8,472.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7A38F").s().p("AilBsQhdgBgBgHIBegPQBlgQAsgKQBUgSBPgrQAtgZAagXQAhgaANgfQgIAdgJANQgRAcgZAUQgZAUg4AiQhLAugtALQg4AOhXAAIgWAAg");
	this.shape.setTransform(113.85,52.6114);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B6756").s().p("AgjA3IANgNQAOgQAIgMIAQgfQAOgOAGgYIgEAUQgKAvgYAYQgJAJgMAGQgHAFgDAAIgCgBg");
	this.shape_1.setTransform(133.575,39.6517);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#644D42").s().p("AgJBIQALgbgDghQgEgYAAgQQgDgpAGgCIAEAdQAHArABARQABANgDAKQgDAMgGALQgGAIgCAAIAAAAg");
	this.shape_2.setTransform(136.1893,30.6514);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#816E5C").s().p("AAMApQABgggDgUQgDgRgVgpIgHgMIAEAAQAFAAACABIAEAHQAVAqAEATQAEATgBAfQAAAcgDAPIgLABQADgOABgbg");
	this.shape_3.setTransform(100.3778,60.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#816E5C").s().p("AAQApQADgegFgTQgHgagggpIAMABQACgBAMAWQARAYAEATQAFATgBAeQgCAWgDAMIgKADQADgMACgXg");
	this.shape_4.setTransform(104.1423,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#816E5C").s().p("AAQgDQgFgSgRgYQgNgTgIgHIAMgCQAIAJAKAQQAQAXAGAUQAFARgDAcQgCARgEANIgKAEQANgxgIgcg");
	this.shape_5.setTransform(107.6063,59.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#816E5C").s().p("AgBBMQAHg6gBgbQgBgPgKgiQgGgSgBgGIAKABIAFAUQALAkABAQQABAbgIA8IgBAFIgIAAg");
	this.shape_6.setTransform(96.5363,60.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#816E5C").s().p("AABBYIgHhbIgBgrIgBgpIAIABIABAoQgBAbABAPIAJBcg");
	this.shape_7.setTransform(92.75,60.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#816E5C").s().p("AgBBXQgGgQgDgXQgGgiADgdQACgQAIgZIAJgfIAJACQgRAxgCAWQgEAuARA4g");
	this.shape_8.setTransform(88.4471,60.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#816E5C").s().p("AAGBaQgGgNgHgWQgKgfAAgYQABgbALgeQAHgXAHgLIAJACIgNAfQgMAjgBAXQAAAVAKAgQAIAXAIAQg");
	this.shape_9.setTransform(85.4989,59.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#816E5C").s().p("AAEBbQgZgxAGgzQACgWAJgbQAGgXAHgKIAIADQgGAKgIAXQgHAagCAVQgEAeALAkQAHAVAIANg");
	this.shape_10.setTransform(82.977,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#816E5C").s().p("AAJBfQgJgKgKgYQgPghABggQABggATgfQAHgOAOgPIADABQAEABABACQgKAKgKAQQgTAhgBAdQgBAeAQAkQANAaAJAJg");
	this.shape_11.setTransform(80.1468,58.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#816E5C").s().p("AAABeQgOgUgJgVQgPglAFgeQAGgmAzgpIADgDIAIAEIgGAGQgwAogFAiQgFAbARAnQAKAXAOAUg");
	this.shape_12.setTransform(76.9625,57.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#816E5C").s().p("AgSBdQgLgOgIgWQgRgrAMgjQAJgdAggYQASgOAYgKIAHAHQgSAIgTANQglAZgIAaQgLAhAUAuQAKAWAMARg");
	this.shape_13.setTransform(74.2517,56.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A9927B").s().p("AjLDdQhNgMhIgjQgLgTgEgWQgJgqAQgiQAKgWASgQQAUgSAVgCQAYgCAKAHIAHAIQAEAGAFADQAEACAFABQAHABAFADQAGACAFAFQAFAEAFACQAFACAGAAQAIAAAHACQAHACAHAEQAGAEAGAAQAHABAHgCQAHgCAGAAQAJABAIAFQAJAGAIABQAHAAAIgCQAIgDAIABQALAAAPAFQALABASgDIBWgJQA1gFAqgSQAhgOAQgJQAcgQATgYQARgWAIgQQATgkgEgfQgGguABgaQAAgUAEABQAIACAPAZQAQAcAJAfQAFAQACATQACAVgDAMQgOBFg+BCQhdBkihAsQhQAWhOAAQgrAAgqgHg");
	this.shape_14.setTransform(104.3356,46.2101);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0AE9C").s().p("AAAAFQgFgBABgEQABgFAEABQAFACgBADQgBAEgEAAIAAAAg");
	this.shape_15.setTransform(57.2992,68.6492);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#806750").s().p("AgdAmQALgEAIgJQALgNgSgIQgEgBgHgFQgIgFADABQASAHALAAQALAAALgGQALgHAFgRIADgMQAGAcgJAYQgJAbhAAEIAKgEg");
	this.shape_16.setTransform(64.5113,70.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#806750").s().p("AgGAIQgLgDgJgHQgIgHABgBIAHAFQAKAGAKAAIAKgBQAGgBAGAAIAMACQAGACAAACQAAADgNACIgLABQgJAAgHgDg");
	this.shape_17.setTransform(58.1194,71.1677);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AB9276").s().p("AgFAWQgHgMABgNQABgMAKgJQAJgJADADIgGAJQgHAMgCAJQgCAMAFALIAEAJIgBAAQgDAAgFgKg");
	this.shape_18.setTransform(47.1205,66.4306);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B443B").s().p("AhoBHQACgJgBgFQgBgEgDgCQgEgGAAgQQAAgSAHgQQAIgZAWgTQANgLAMgGQAugYA8ATQAfAKAZAWQgzgog5AIQgTADgVAJQghAPgMAaQgNAcAMAdIAAgUQACgWAMgRQATgcAzgGQArgDAmAbQgVgMgWgEQgUgDgNAAQgWAAgRALQgdARgJAkQgKAjAOAWQAGAIgYAAQgXAAACgJg");
	this.shape_19.setTransform(54.75,64.5224);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5B443B").s().p("AAXBDQgjgCgegVQgegVAEgRQABgGAQgFQAagKASgLQARgLAWgTQAPgMACACQABABgJATQgLAXADARQADATAMAOQARAUAEAIQAEAIgRADQgKACgMAAIgLgBg");
	this.shape_20.setTransform(42.0936,67.5862);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4B433C").s().p("AgCAJIgEgEQgCgEACgFQACgGACgCIADgBQAEAAADABQgFADgCAGQgDAIAHAJQgEgCgDgDg");
	this.shape_21.setTransform(55.8056,69.0417);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6D584B").s().p("AATAPQgGAAgHgEIgGgIIgLgGIgLgCQgHgCgBgCIgBgFQAEAFAGADQAGACAIAAQAEACADADQADAFAFACQAHADAFAAIAHgBQAFABAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQgBABgBAAIgGABIgDAAg");
	this.shape_22.setTransform(55.3417,69.6833);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AB9276").s().p("AABAAIgOgMIgGgFIAHAEQAJAEAGAHQAHAFAGAIIAEAHQgHgIgMgKg");
	this.shape_23.setTransform(60.7525,67.0972);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AB9276").s().p("AAXATQgIgGgIgMQgHgKgHgEQgGgDgIgBIgGgCQAAgDANACQAIABAMAKQAKAJAGAIQAIAMgCABIgBABQgCAAgCgDg");
	this.shape_24.setTransform(59.095,67.5091);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AB9276").s().p("AAYAKQgMgJgMgEQgJgEgNgDQgKgBAAgBQAAgCAIgBQAIgBAIABQALADAJAFQAJAGAHAIQAGAIgBABIgBAAIgIgGg");
	this.shape_25.setTransform(57.24,67.8143);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323235").s().p("AAFANQgDgBgGgHQgFgEgGgBQgFAAgEgBQgJgEAAgDIABgFQACgCAKACQAIABAKgCQAHgCAGABQAKACAIAKQAIAJgDAGQgDAEgJABIgCAAQgIAAgHgEg");
	this.shape_26.setTransform(55.5429,69.2361);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D3935").s().p("AAOAwQgFgBgugXIgTgJQgGgFgCgFQgEgHADgLQABgHADgDQAJgRAcgFQAPgDANABQAQACAPAGQANAFgBADQAAABgFgBIgPABQgQABgKAEQgIAEgIAFQgKAHAAAFQABAPBcALQgZAagcAAIgBAAg");
	this.shape_27.setTransform(54.8479,67.9005);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#534339").s().p("AAVAQQAAgDgEgFQgFgHgIgDQgJgFgLABQgHABgDADQgMABgBgFQgBgEAEgEQAFgGANAAQAJAAAJACQAaAIAPAfg");
	this.shape_28.setTransform(57.09,67.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D3432").s().p("Ag5A0QgjgWgKgiQgIgeAJgSQAHgPARgKQAOgIACADQABABgMARQgIANgEANQgDAMACABIAGgFQAFgGAHgDQAMgGAFAFQACACgBAHQgCAIACABQADADAMgHQAQgIAKgDQATgFAeAMQAYAJAUARQAZAVgEAXQgDASgWAOQgLAIgMAEg");
	this.shape_29.setTransform(55.7708,67.2109);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#866652").s().p("AgfBWQgmgSgaggQggglALgjQAJggAmgSQAigPAkACQAsAEAjAfQAiAfAFAoQAGApgWAaQgWAagrAAIgDAAQgiAAgggOg");
	this.shape_30.setTransform(56.3988,66.5334);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#57453A").s().p("AgGAdIgCg8IADgIIAIAIIAGBHIAAAAQgCAAgNgLg");
	this.shape_31.setTransform(81.075,82.2883);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#57453A").s().p("AgNAAIgCglIAMAFQAUBDgBADIAAAAQgDAAgagmg");
	this.shape_32.setTransform(84.2523,84.0883);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#57453A").s().p("AgFghIAOAJQABAygBADQgBAEgQABg");
	this.shape_33.setTransform(78.625,80.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AE848D").s().p("ABHBIQgKgMgPgKQgNgIgGgJQgFgJAAgNQABgQgFgNQgLglgbgNQgPgIgYgFIgYgFQgDgBAAgHQATgGAUAFQAaAGAVAWQAUAVAGAZQACAJAAARQAAANAGAJQAKAPAUAQIAMAKQAJAMACASQgHgPgJgLg");
	this.shape_34.setTransform(93.525,90.881);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#735C4F").s().p("AB3BxQgLgOgNgEQgIgDgLACQgKACgIgCQgLgDgIgNQgLgRgJgHQgKgIgPgCQgegEgWgFQgbgIgKgEQgNgGgHgKQgFgHAAgJIgCgfQgCgUgGgoQgDgUAFgDQAFgDAKAGIAVAMQAJAHAIAIQAGAHAFADQANAGATgDQAVgFANAFQAJAEAJAJIAXAZQASAVAOAYQgBAqATATIAQAMQAJAGAFAJQAHAKABAMQACAKgDACIAAAAQgBAAgKgMg");
	this.shape_35.setTransform(89.3551,88.8231);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#443933").s().p("ABhCqQgMgGgLgLQgNgNgOgIQgUgIgUgLQgPgKgJgGQgUgOgdgJQgbgIgKgIQgOgLgIgcQgFgSgKg7QgJg7gBgSQAAgbALgJQAQgMAgALQAZAIAYARQAPALANAVQAZAqAVAcQAYAgAZAeQAPATADATIAFAXQADAPAJAKQAFAGAMAJQAKAIAEAIQAEALAAAKQAAAMgHAGQgFAGgKAAQgNAAgTgJg");
	this.shape_36.setTransform(88.0765,85.1861);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#816E5C").s().p("AAGgFQgKgFgSgCQgVgCgKADIANgLQAcgCAWAKQAcALAQAVIgHAGQgRgVgYgIg");
	this.shape_37.setTransform(52.975,20.5398);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#816E5C").s().p("AAAgJQgJgBgWACQgUADgNADIANgNQAfgHAWADQAmAHAZAaIgHAHQgagZgggFg");
	this.shape_38.setTransform(50.975,22.4193);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#816E5C").s().p("AADgFQgcgBgwAWIANgRQAggPAfABQAoABAfAXIgFAIQgggVgigBg");
	this.shape_39.setTransform(48.95,24.0969);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#816E5C").s().p("AhKAGQAjgSAegFQAugHAuAQIgEAIQgsgOgqAHQgOACgYAIQgVAJgQAIg");
	this.shape_40.setTransform(47.55,27.3207);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#816E5C").s().p("AhSANQAqgaApgJQAqgJArAIIgCAJQgpgHgoAJQgRAEgcAMQgZALgSAMg");
	this.shape_41.setTransform(46.525,30.6545);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#816E5C").s().p("AhVAaQAPgQAVgNQAXgPAUgIQAtgQAvAIIgBAKQgugIgqAQQgSAHgYAPQgWAPgPAQg");
	this.shape_42.setTransform(46.975,34.5553);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#816E5C").s().p("AhQAfQAOgOAVgOQAWgPAQgHQApgTAvACIgBAKQgqgCgpASQgPAHgUAOQgTANgNANg");
	this.shape_43.setTransform(48.5,37.7108);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D4A42").s().p("AgagGQgEgRABgTIABgPIAFAVQAFAYAMAMQAHAIARAIQAMAFAAAGIABABIgPAPQgJALgFAEQgTgcgJgkg");
	this.shape_44.setTransform(40.6472,40.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#87715C").s().p("AgfAaQAWgqA2gnIgMAOQgIALgDAIIgDAKQgGAFgcAdQgRASgLAQQADgMAJgSg");
	this.shape_45.setTransform(62.25,18.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D4A42").s().p("AimA1QAGgIAPgNQAwgsBkgkQBmgkBMACQiKAnh0A5QhGAkglAhQAEgRAKgNg");
	this.shape_46.setTransform(82.25,9.1198);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A9927B").s().p("Ak6B8QABgSAFgRIALgaQAHgOAIgOQA5hXCghUQCshZCbgFQASAAAjAIQiNAmh+A/QhGAig5A8QgOAPgIAKIgDADIgEAGIgHAKQACAFgEAHQgDAFgDAAIgDACIgBAHIAAAEIABAHQAAAEgDADIgDADIABAJQAAABABAAQAAAAAAAAQABABAAAAQABAAABABQAEACABAFQABADgBAEQgBAEABADIAGAFQAEAEABADQABAHgBADIAAAEIAEALQABAFgDADQgCADgKAAQgPgBgMADIgSAGIgcAMIgeAKQgJADgGAFIgKALQgGAIgIAHQgNASgGAEQgkg6AEgxg");
	this.shape_47.setTransform(69.1093,23.0736);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#534339").s().p("AAsA7Ig1gJIhBgIQgQgDAEgCQAVgKAzggQA2glAZgOQAXgNAAA4QgBA3gWAOQgFADgIAAIgIAAg");
	this.shape_48.setTransform(27.8768,78.1833);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#534339").s().p("AAVAbQgWgIgQgPQgLgKgIgMQgHgMACgBQABgBALAKQAPAPAOAKQAPALAQAKQAMAGgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgFAAgNgFg");
	this.shape_49.setTransform(15.5788,99.9571);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0816D").s().p("AgjALQgBgDAIgIQAKgLALABQALAAAOAIQAKADAIACQAAABgHABQgJACgIgBIgMgBIgKgCQgKgBgIAFIgHAEIAAAAg");
	this.shape_50.setTransform(11.5697,85.9072);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4B433C").s().p("AgLAhQAIgUgEgNQgDgKgZgSQgYgRAAgFQAAgDAYADIAjAEQAUgBASAJQATAKADANQAGAghUAjg");
	this.shape_51.setTransform(28.1449,90.6058);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#453A34").s().p("AAAAVQgagDgXgSQgUgQADgEQABgBARAMQAWANAYADQAXAEAagGIAVgFQgbAVgfAAIgKAAg");
	this.shape_52.setTransform(17.7861,97.7795);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#534339").s().p("AgPAgQgegDgbgaQgXgXAFgKQADgDATAGQAdAKAZACQAiAEApgHQAdgFACADQACAGgTAOQgUANgXAJQgbAKgPAAIgFAAg");
	this.shape_53.setTransform(18.837,96.9728);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#645042").s().p("AgzAbQgCgBABgHQABgJAFgIQAJgSAVgHQAFgCAIAAQAMgCALAEQALAEAFABQAFAAAHgCIAFgCQABACgDAEQgEAFgFADQgHADgVgCIgOgDIgJAAQgNABgLAJQgIAGgGALQgDAKgBAAIAAAAg");
	this.shape_54.setTransform(11.1554,88.6807);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#323132").s().p("AAFAVQgGAAgKgDQgKgEgKAAIgPABQgFABgCgDQgCgDAEgHQADgHAHgDQAHgEAOAGQAPAFAKgBQAKgBAOgLQALgJAGACQAIAEAAAIQABAKgQAKQgPAJgQAAIgDAAg");
	this.shape_55.setTransform(11.7027,89.8272);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#443D43").s().p("AglAHQgCgFAGgGQAGgHAHgCIARABIAVACQAFAAAHADQAIADABADQAAAEgNAFQgMAEgOACIgOAAQgUAAgDgHg");
	this.shape_56.setTransform(11.5349,89.236);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4C3D35").s().p("AgSBLQgHgFgWgHIgggLQgEgCgDgFQgEgHADgHQAKggAEgJQACgEACgRIAEgSQABgCAMgEIAQgHIAQgMQAFgBAKAFIAMAHQATAJAQALQAVAPAGAMIADgCQADAAAGAEQAJAGgBAPQgBAQgJALQgRAUg2gEQgQgCgMACQgBAAAFAEIAEADQgBABgCAJQgCAIgBAAIAAAAg");
	this.shape_57.setTransform(8.9243,88.0467);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#534339").s().p("Ag9DLQh9gfgagBQgggBg0gFIgugEQgJgSgFgNQgJgYALgLQAPgNAtgdQAsgdAIgCQAZgGAjAHQAvAJAjAAIAugBQASgCAMgFQA3gXAchtIAQhIQAHggAHAAQAaAAAwAIQBHALAgATQAKAQgDAVQgCANgFAZQAIAlBACFQArBaglgCQglgBgwAJQguAJguAQQg5AVhGAAQgvAAg2gKg");
	this.shape_58.setTransform(61.7157,86.3052);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6F5546").s().p("ADXFRQg3gVg+gGIiGgEQhTgDgWABQgXAAgRADIgaAFQgPACgOgBQgqgDgrgZQgUgMgUgWQgRgTgVgIIgbgJQgLgEgDgIQgCgHAGgLQAJgUADgJQAGgUAAgZQAagIATgRIAVgTQAOgLAYgKQASgHAXgTQAggZAagQIA6ggQAcgSAJgTQAFgJABgHQACgLgGgPQgHgRABgLQAAgGAFgNQAIgVAGgLQAKgTAPgIQAIgFAQgCQANgCAJgIQAFgFAEgHIAGgMQAJgQAUgLQAOgHAmgOQAogOAOgEQAVgFARADQAMACANAIIAtAXQASAJAwAUQAyAWAvBUQA2BhABBrQABBsguBiQgyBphFANIgKAAQgVAAgggMg");
	this.shape_59.setTransform(44.1893,71.9483);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3D3632").s().p("AgKA3QgMgEgLgJQgUgPgPgKIgWgNQgIgEgFgGQgEgEgFgLQgHgQAFgKQAIgNAiABQA8ABA7ASQBGAVAAAdQAAALgMAPQgNAPgYAGQgNADgYAAQgaAAgPgFg");
	this.shape_60.setTransform(14.9337,99.7464);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#57453A").s().p("AgBAJQgjgKAAgIQABgEAOgCQAOgCAMAEQANAFALAIQAKAJgCAFQgCADgGAAQgKAAgUgIg");
	this.shape_61.setTransform(34.3413,47.5517);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#443933").s().p("AgJAdQgQgNgLgRQgHgLgEgNQATgLATgDQAlgFANAQQAHAJAAAPQAAAMgFANQgHAOgLAEIgIACQgMAAgOgMg");
	this.shape_62.setTransform(33.9271,49.3108);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3D3632").s().p("Ag+gCQgHgSgBgVQAmgUAlAAQAXABAMAHQANAGAJAKQAKALgBAJQgBAHgMAGIgZAOQgaASgOAiQgngXgQgpg");
	this.shape_63.setTransform(34.2844,49.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3D3632").s().p("AIkDSQgxgPgSgWQgUgZgngQQgxgRgagMQhkgqgxhzQgWg0gigTQgggShOgHIhQgEIhPgEQhKgDhoAkQhfAiiGgXQh8gfgagBQAhgEArABQAoABAsAIQAtAJAXAAQAuABAugSIBogpQBNgYBUgHQAvgEBWACQA2ABBLgCQA3AGAcA0QBEB7BiBgQCCCCCPAgQgbAGgbABIgHABQgjAAgpgOg");
	this.shape_64.setTransform(109.9,117.307);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A47E69").s().p("ACGANQhhgRhiADQhhADgcALQgHAKgBgEQgOgJAAgHQABgOBGgKQB5gRB7AeQAqAJAhANQAbAMAAADQgcgHgvgJg");
	this.shape_65.setTransform(328.7246,18.9426);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6F5546").s().p("AiXB+QgLgegEgmQgMhpA6g7QBAhAB1AVQArAIAiARQAfAQAAALQAAAHgcAGQgqAHgbAGQhtAZgxBDQgbAlgJA2QgIArgDAAQgHAAgLgdg");
	this.shape_66.setTransform(327.2292,45.0063);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#534339").s().p("ACjCXQggidjVhEQhBgUhPgMQg/gHgBgBQAAgDBEglIBDgmQCjAzCMBmQBjBIAsA8QgaAsgdAeQgZAagRAAQgWAAgJgqg");
	this.shape_67.setTransform(276.575,48.4616);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#443933").s().p("AhWATIhFgxQBQgYCagwQBfgegWAJQhQAlgLBSQgDAVgBAuQgDAogLAXQgygwhPg7g");
	this.shape_68.setTransform(299.9818,41.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8D6B57").s().p("Ag8ALQgbgUAMACQATACAtgHQAsgGApgMQARgFgmAjQglAggbAAQgWAAgbgVg");
	this.shape_69.setTransform(283.1545,25.6438);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8D6B57").s().p("AjkAPQgrhOAIgQQAJgRBdALQBJAIBiAWQB5AbBKAVQBJATgPAEQgaATgdATQg5AmgKgFQg2gXhTgDQhkgEhWAhQgYgkgWgng");
	this.shape_70.setTransform(230.233,27.4245);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6F5546").s().p("AkEGHQhZgKhLgbQiTg1gxhmQgZgzABhpQAAhhgkg3Qg/hjidggIguh7QBQgGEKgIQDsgGBQgKQBugOCtAgICVAeQBcASBCAIQAbAEA1gRQA1gRATADQBdAOB1AXQBrAVAtAGQBTAKAiAcQAMAKgDAFQgEAGgQgEQiIghh5ARQh3ARh8BFQgSAKgBAtQgBAaACA3QgKDojABtQiJBOjGAAQg/AAhEgHg");
	this.shape_71.setTransform(267.805,49.7304);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6F5546").s().p("AhpgHQgIgYAGgaQAGgaALgCQAIgBAOAaQAWAnARAVQAkAqA5AZIAuATQi6gEgdhZg");
	this.shape_72.setTransform(153.1667,81.7709);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#493B35").s().p("AhuELQBBhcAQhjQARhtgth9IgdhIQgKgdAHgFQAKgGAbARQAeASAdAiQBSBZASBtQANBTgdBWQgSA1gfAwg");
	this.shape_73.setTransform(134.5144,68.7467);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#493B35").s().p("AALDAQgcgHgigLQhGgXglghQgPgNgngyQgegogSgGQg4gUg2gMICZAAIBCitQBUBRCIAkQCAAhAlgiQAIgHABAbQABAtACAMQAPBSBuBDQg2AfgxACQgyADgbgaQgOgOgGgTQgWAdggAOIg3AXQgXAIgNAAQgKAAgFgFg");
	this.shape_74.setTransform(160.55,97.7593);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4E4438").s().p("AgJAiIgYAAQASgbAOgRQAfgnAEACIgHANQgJAQgHARQgLAbgJAWQAFgOgFAAg");
	this.shape_75.setTransform(191.3767,199.3426);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6E5F47").s().p("AhVA1IAGgOQgEgBgMgBQgLgBgCACIAAAAQgJgIgCgEIAegzQALgTATgRQAGABAOAJQAOAKAIABQAXAFASAAIAiAAQAPgBAsgHIADAqQgxAug9ALQgZAFgQAAIgGABQgbAAgVgJg");
	this.shape_76.setTransform(198.9,198.8548);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#453A34").s().p("AgXAfQgKgSgCgBQgVgLgPgUQgNgUAFgHQADgDAbAMQAhAQAcgDQASgCAZgMQASgJAFAFQAEAEgCAKQgCAJgFAJQgfA1gnAEIgCABQgNAAgLgRg");
	this.shape_77.setTransform(193.4012,159.506);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5F4B3F").s().p("ABrDWQgggdgSgoQgFgLgHgZQgHgegGgQIgcg1Qgcg/hJhPQhAhAAEABQBJARAxgfQAYgPAJgNQgBAgAMBDQAOBJAQAlQATArArBeQAFAJAbAgQAVAZADAYQADAigLAEIgEABQgNAAgZgYg");
	this.shape_78.setTransform(177.1025,136.4879);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#826F5C").s().p("AhBBDQgHgBgNgJQgMgKgGAAIAMgNQADgCgBgJQAAgJAEgFQAEgFAHgEIALgIQAGgFgEgQQAcAAAggIQAkgKAigUQAGAJANAOQALAOAEAOQADAJgGAJQgIAOgCAHQgDAJgBASQhZASgqAAQgMAAgIgBg");
	this.shape_79.setTransform(201.925,189.4954);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#534339").s().p("ABeFdQgIgaADgkQADgmgIggQgJgigMgYQgOgdgXgcQgagfgKgTQgLgUgHgWQgGgagGgTQgXhGhviBQgxg5gIgMQgRgYAXAHQAGACAWAdQAXAeAhAMQARAGAegTIA/gtQBkhKBUgEQAhgCgCA9QgCAlgJBeQgBAmAPBBQAIAiAdBkQgDAJABAVQACAdgBAKIgEA5QgCAnAMAtQAJAlABARQAAAKgBAIIAAAUQgiAVglAJQggAIgcAAIgNgjg");
	this.shape_80.setTransform(185.02,148.0219);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#645543").s().p("AghAqIgHgCIAzgxQALgLALgNIAIgJQADABg2BUIgXgBg");
	this.shape_81.setTransform(359.2827,196.1738);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#443933").s().p("ABHA3QhIgIgYAKQgegagdgcQg6g3AEgLQABgEAjAHQAmAHArAPQB3AqAqA+QgggGglgFg");
	this.shape_82.setTransform(182.0371,16.837);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#55493B").s().p("AgoA5IAFgFQAJgLAagZQAQgQAMgfIALgaQADABgDAVQgEAYgKAVQgMAZgUAXg");
	this.shape_83.setTransform(267.2125,186.75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#443933").s().p("AAjCKQhTgEgXgZQgwgzAQhmQAFgiAKghQAJgbACAAQABAAgBAvQAEA5AUAvQAXA5A4AiQAkAWAtAKQAGABgYABIgbABIgbgBg");
	this.shape_84.setTransform(209.1356,108.3125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A18A72").s().p("AAaAXIhFghIgFgPQAfASAagCIAUgCQALABAFAJQAFAJgBAJQgBAHgHACIgEAAQgFAAgGgDg");
	this.shape_85.setTransform(200.9411,190.5308);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#937E5F").s().p("AhVAyQhGgEAAgFIBNhXQARADAFgGIABgDQALAFAUABIAfADQA3AKATAGQAoANAjAeIgCAPQgCANABAFQhPAEg/AAQg1AAgrgDg");
	this.shape_86.setTransform(367.375,195.5385);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B89F82").s().p("Ag+A9QgZgJghgOIgBgIQgCgHACgFQABgHAGgFIAIgGQARgKAog7QgDBJAFgOQAPgrAVgVQALgLAGgBIALAtQANApAHgKQAcgmAtg5IgKBEIAXAGQgfAugCgCQAIAggDAhQgBALgEARQhPgRhJgcg");
	this.shape_87.setTransform(373.9375,186.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#594C3C").s().p("AAtDQQgVg4gOgLQgigcgbhhQgdhsgLgQQgJgMAKgzQAMg5gTgsIAAgBIA9gDIAbA9QAQApAVAoQARAggGAnQgEAgAMAKQACABARBOIARBNQgBABAIASQAJARgBABQgBABgFgDQgEgCgBABQgBABABASIACAPQhAiUgCACQAAABAeBKQAfBLgBAAQABAGgBABIgIgQIgIgRIAFAYQAFAYgBABIgPgqQgSgygUglQgSgkgPgrIgNgiQgBABAAANQgBAUAHAQQADAIANAQQANAPAEALQAYBAApB9QgPgMgUg5g");
	this.shape_88.setTransform(401.0553,119.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#534339").s().p("AB/DCQgGiHgGg3QgJhQgPgiQgKgYgogrQgdghg6gkQgogZgbgLQg8gugYgQQgFgEAqAEQAsAFAZAHQAkALA3ArQAnAfAXAYQApArAUAeQAgAvAEAvIALBRQAHAyAEAzQADAggCAjQgBAoAAAOQACAbAGAdIAJAoIg8AEQgGgigFh3g");
	this.shape_89.setTransform(377.5234,57.0809);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8D6B57").s().p("AjiDuQgKgDAfgYQAngdBzhPQA3gtBKhzQBIhwAThCQAEgQAFBAQAHBUAHAaQAOAxAYAvQgnAsh9BBQhzA8heAfQg9AUgSAAIgEgBg");
	this.shape_90.setTransform(298.5295,98.0181);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6F5546").s().p("AEDFtQgNhBgagxQgNgYgSgWQgZgdgqglQg0gthOgwQhDgpg4g3Qg+g/ghgyQghgxgLguQgQhAgHgrQgGgtAGgEQAJgEAaA5IAdBDQAXAoAZAeQANAQA3A5QAhAiAuAnQBGA8BRBKQBmBfAoA4QAeArAGApQAGArgKArQgJAmgKAAQgEAAgJgyg");
	this.shape_91.setTransform(345.2786,117.7335);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#534339").s().p("ACcH2QAQg7AGgtQAQiLg3hfQgjhFgZgiQgtg9hOgqQilhYhliaQgggwgVgwIgPgoIC8iuIAtgBQA3gBA2AKQCsAbBfBpIgDAkQgDAsACApQAICCA5AtQAJAEANAdQAPAggGANQgOAaAIBXQAGBIASBcQAIAoAABTQAAA8AOAPIAJAYQAIAegBAmQAAAIgFAKQgHANgGgEQgJgFgMAOIgLAQIi8A5g");
	this.shape_92.setTransform(353.3265,129.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#443933").s().p("AhWEEQgDgDANgQIAignQA0hBAIg8QANhggUiDQgPhrACgBQADgBABgIQADACAWAwQAkBRARCmQASCrgcAgQgVAYg/AIQgXADgPAAQgbAAgHgIg");
	this.shape_93.setTransform(98.6084,71.0906);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6F5546").s().p("ACVB4QguhHgPgRQgugyg3gIQgTgDgnALIhIAUQhdAagbggQgWgbAQgRQANgOArgMIBYgXQA4gQAggSQAegRA7gHQBFgIA2AOQCXAnhKC2QghBRgYAGIgDAAQgRAAgagng");
	this.shape_94.setTransform(176.1051,37.8216);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#534339").s().p("ApVKQQgxgPgRgWQgUgZgogRQgwgRgagLQhkgqgyh0QgWg0ghgTQghgThNgGQh0gFg2gDQhfgHgtgUQgrgSAJg4QAIgyAzhOQgtgOgXgQQgdgUgIgdQgfh/ABgoQABgIAThOQCtANB3gnQBbgeBVhIQAxgpBghaQBchMBpglQBkgkCOAWICFAXQBVANBNABIBLgHQAjgCALADQFQg6HgBxQAfAHA1gUQA6gVAOAAQA+ADBMAOIB7AaQCqAkBcBsQBkESgWEGIlEgXIitCkQgbAAgZAVQgKAJiDBTQiEBTgZAVQgNALgdA+QgbA7gPAKQgGACgVACQgUACgHACQgIgMAAgPIABgWQgBgVgugIQghgFgpAKIhZAZQiRAojGgNQglgCg8gKQhFgLgdgLQgpAEhiAwQhdAuhGADIgIAAQgiAAgqgNg");
	this.shape_95.setTransform(223.4792,72.2114);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#443933").s().p("An6C8QgahWAIgHQAEgDAKANQD5BEEkhWQE4haC3jcQgbA/hABSQiBClieA+QhxAtj9AXQhWAHg8AAQiDAAgLgkg");
	this.shape_96.setTransform(253.0059,108.6873);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#443933").s().p("Ag/GVQAEgmgCgCQgDgEgZAWQgpAjgKgHQgEgDACgPQADgQgFgDQgGgEgOAGQgNAHgLALQgIAHgIANQgFAIgDAAQgIAAgJgbQBjg+AqhYQAZg0AHg8IgBAAIABAAIAQg6QAFgqgeg4QgrhTgHgYQhDjZA4hNQAyhIEyBqIg5EeQgVCjAlBxQACAGgFAOQgEAOgFADQgcAQgoAyQgyA/gaAYQgkAhgQAQQgTATgTAYQgIgZACgYg");
	this.shape_97.setTransform(304.375,123.5809);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#9C8A71").s().p("AAoBcQgbAAhPgXIhKgYQAjgjAKgIIAogYQAIAbAIAAQAEAAAFgIQAIgMAHgIQAMgLALgGQAOgHAGAEQAFAEgCAPQgCAQAEADQAJAFApgiQAUgSAVgYQAQgSABABQABABgOAXQgQAegCAbQgCAYAHAZIgGAIQgJAsgRAFQgZgCgSAAg");
	this.shape_98.setTransform(287.032,165.3243);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6E5F47").s().p("AhmBBQgKABgIgIQgIgIgBgMQAZghANgbIAQgkQARgJATACIAsAHQAPABA1ANQApAJAQgDIgBA2Qg2AcgzAMQgqAKgvAAQgSAAgTgBg");
	this.shape_99.setTransform(274.35,186.3835);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9C8A71").s().p("AgUBAQgygFgxgUIAGgNQAOgNAKgUQAHgOAHgYIASgVICxAsQgJAIgIAKQgRATAAARIAAAcQghAHgiAAQgTAAgUgDg");
	this.shape_100.setTransform(278.725,176.5091);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#413B34").s().p("AgOgBQgBgxAEAAQABABACANQAEASAEAPQAJAaAGAYQgFgPgDAEIgRAOQgDgbgBgYg");
	this.shape_101.setTransform(126.14,194.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5E5140").s().p("Ag4BjQgMAAgEgCQgIgqgBgOQgDgWADgWQAFgDAQgCQAQgCAGgDQAVgMANgLIAYgVQAMgMAageQANANAIAVQALAfgOAUQgBADgyA0QgyA1gFACIgEgPIgNAJQgJAHAAACg");
	this.shape_102.setTransform(130.7228,189.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#706052").s().p("Ag9AkQAAgDgGgGQgGgHAAgGIABgXIACgHQABgFgBgHQApAJAxgQQAYgIAQgKIAOANIgTAZQgLANgFAEQgOANgNAIIgiAVQgGAEgQABQgQACgFADg");
	this.shape_103.setTransform(129.1,183.575);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#443933").s().p("AjdFSQgQgBgPgHIgNgGQAAgRACgVQACgRgBgMQgDg5ABgfQAAgRAdgyQAig9AIgWIAKhoQAGg/AGgNQAGgOAsgiIBehHQApghA6gOQAOgDBDgIIBxDSQhGgDhPALQhPALgTAQQgJAIgcA2IgzBjQgSAjgEAWQgGAgABARQAAALAFAmQAEAZgRAFQgUAGgFATIgEAUQghApgsAAIgLgBg");
	this.shape_104.setTransform(148.525,148.3047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104,p:{scaleX:1,scaleY:1,x:148.525,y:148.3047}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:129.1,y:183.575}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:130.7228,y:189.4}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:126.14,y:194.3}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:278.725,y:176.5091}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:274.35,y:186.3835}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:287.032,y:165.3243}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:304.375,y:123.5809}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:253.0059,y:108.6873}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:223.4792,y:72.2114}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:176.1051,y:37.8216}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:98.6084,y:71.0906}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:353.3265,y:129.35}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:345.2786,y:117.7335}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:298.5295,y:98.0181}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:377.5234,y:57.0809}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:401.0553,y:119.1}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:373.9375,y:186.45}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:367.375,y:195.5385}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:200.9411,y:190.5308}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:209.1356,y:108.3125}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:267.2125,y:186.75}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:182.0371,y:16.837}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:359.2827,y:196.1738}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:185.02,y:148.0219}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:201.925,y:189.4954}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:177.1025,y:136.4879}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:193.4012,y:159.506}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:198.9,y:198.8548}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:191.3767,y:199.3426}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:160.55,y:97.7593}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:134.5144,y:68.7467}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:153.1667,y:81.7709}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:267.805,y:49.7304}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:230.233,y:27.4245}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:283.1545,y:25.6438}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:299.9818,y:41.15}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:276.575,y:48.4616}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:327.2292,y:45.0063}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:328.7246,y:18.9426}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:109.9,y:117.307}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:34.2844,y:49.6}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:33.9271,y:49.3108}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:34.3413,y:47.5517}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:14.9337,y:99.7464}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:44.1893,y:71.9483}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:61.7157,y:86.3052}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:8.9243,y:88.0467}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:11.5349,y:89.236}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:11.7027,y:89.8272}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:11.1554,y:88.6807}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:18.837,y:96.9728}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:17.7861,y:97.7795}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:28.1449,y:90.6058}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:11.5697,y:85.9072}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:15.5788,y:99.9571}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:27.8768,y:78.1833}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:69.1093,y:23.0736}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:82.25,y:9.1198}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:62.25,y:18.75}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:40.6472,y:40.35}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:48.5,y:37.7108}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:46.975,y:34.5553}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:46.525,y:30.6545}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:47.55,y:27.3207}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:48.95,y:24.0969}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:50.975,y:22.4193}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:52.975,y:20.5398}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:88.0765,y:85.1861}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:89.3551,y:88.8231}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:93.525,y:90.881}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:78.625,y:80.125}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:84.2523,y:84.0883}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:81.075,y:82.2883}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:56.3988,y:66.5334}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:55.7708,y:67.2109}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:57.09,y:67.775}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:54.8479,y:67.9005}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:55.5429,y:69.2361}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:57.24,y:67.8143}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:59.095,y:67.5091}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:60.7525,y:67.0972}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:55.3417,y:69.6833}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:55.8056,y:69.0417}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:42.0936,y:67.5862}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:54.75,y:64.5224}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:47.1205,y:66.4306}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:58.1194,y:71.1677}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:64.5113,y:70.575}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:57.2992,y:68.6492}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:104.3356,y:46.2101}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:74.2517,y:56.45}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:76.9625,y:57.775}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:80.1468,y:58.55}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:82.977,y:59.4}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:85.4989,y:59.825}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:88.4471,y:60.425}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:92.75,y:60.525}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:96.5363,y:60.9}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:107.6063,y:59.725}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:104.1423,y:60.4}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:100.3778,y:60.475}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:136.1893,y:30.6514}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:133.575,y:39.6517}},{t:this.shape,p:{scaleX:1,scaleY:1,x:113.85,y:52.6114}}]}).to({state:[{t:this.shape_104,p:{scaleX:0.8,scaleY:0.8,x:159.9292,y:139.1359}},{t:this.shape_103,p:{scaleX:0.8,scaleY:0.8,x:144.3894,y:167.3518}},{t:this.shape_102,p:{scaleX:0.8,scaleY:0.8,x:145.6876,y:172.0117}},{t:this.shape_101,p:{scaleX:0.8,scaleY:0.8,x:142.0215,y:175.9316}},{t:this.shape_100,p:{scaleX:0.8,scaleY:0.8,x:264.0876,y:161.6991}},{t:this.shape_99,p:{scaleX:0.8,scaleY:0.8,x:260.5877,y:169.5985}},{t:this.shape_98,p:{scaleX:0.8,scaleY:0.8,x:270.7331,y:152.7514}},{t:this.shape_97,p:{scaleX:0.8,scaleY:0.8,x:284.6073,y:119.3572}},{t:this.shape_96,p:{scaleX:0.8,scaleY:0.8,x:243.5126,y:107.4425}},{t:this.shape_95,p:{scaleX:0.8,scaleY:0.8,x:219.8917,y:78.2622}},{t:this.shape_94,p:{scaleX:0.8,scaleY:0.8,x:181.9929,y:50.7508}},{t:this.shape_93,p:{scaleX:0.8,scaleY:0.8,x:119.9965,y:77.3656}},{t:this.shape_92,p:{scaleX:0.8,scaleY:0.8,x:323.7679,y:123.9724}},{t:this.shape_91,p:{scaleX:0.8,scaleY:0.8,x:317.3297,y:114.6794}},{t:this.shape_90,p:{scaleX:0.8,scaleY:0.8,x:279.931,y:98.9073}},{t:this.shape_89,p:{scaleX:0.8,scaleY:0.8,x:343.1251,y:66.158}},{t:this.shape_88,p:{scaleX:0.8,scaleY:0.8,x:361.9503,y:115.7726}},{t:this.shape_87,p:{scaleX:0.8,scaleY:0.8,x:340.2564,y:169.6517}},{t:this.shape_86,p:{scaleX:0.8,scaleY:0.8,x:335.0065,y:176.9224}},{t:this.shape_85,p:{scaleX:0.8,scaleY:0.8,x:201.8614,y:172.9163}},{t:this.shape_84,p:{scaleX:0.8,scaleY:0.8,x:208.4169,y:107.1427}},{t:this.shape_83,p:{scaleX:0.8,scaleY:0.8,x:254.8777,y:169.8917}},{t:this.shape_82,p:{scaleX:0.8,scaleY:0.8,x:186.7385,y:33.9634}},{t:this.shape_81,p:{scaleX:0.8,scaleY:0.8,x:328.5328,y:177.4306}},{t:this.shape_80,p:{scaleX:0.8,scaleY:0.8,x:189.1247,y:138.9097}},{t:this.shape_79,p:{scaleX:0.8,scaleY:0.8,x:202.6485,y:172.088}},{t:this.shape_78,p:{scaleX:0.8,scaleY:0.8,x:182.7908,y:129.6826}},{t:this.shape_77,p:{scaleX:0.8,scaleY:0.8,x:195.8296,y:148.0968}},{t:this.shape_76,p:{scaleX:0.8,scaleY:0.8,x:200.2286,y:179.5754}},{t:this.shape_75,p:{scaleX:0.8,scaleY:0.8,x:194.21,y:179.9656}},{t:this.shape_74,p:{scaleX:0.8,scaleY:0.8,x:169.549,y:98.7003}},{t:this.shape_73,p:{scaleX:0.8,scaleY:0.8,x:148.7209,y:75.4906}},{t:this.shape_72,p:{scaleX:0.8,scaleY:0.8,x:163.6425,y:85.9097}},{t:this.shape_71,p:{scaleX:0.8,scaleY:0.8,x:255.3517,y:60.2777}},{t:this.shape_70,p:{scaleX:0.8,scaleY:0.8,x:225.2946,y:42.4333}},{t:this.shape_69,p:{scaleX:0.8,scaleY:0.8,x:267.6311,y:41.0087}},{t:this.shape_68,p:{scaleX:0.8,scaleY:0.8,x:281.0928,y:53.4135}},{t:this.shape_67,p:{scaleX:0.8,scaleY:0.8,x:262.3676,y:59.2627}},{t:this.shape_66,p:{scaleX:0.8,scaleY:0.8,x:302.8903,y:56.4985}},{t:this.shape_65,p:{scaleX:0.8,scaleY:0.8,x:304.0867,y:35.6478}},{t:this.shape_64,p:{scaleX:0.8,scaleY:0.8,x:129.0297,y:114.3382}},{t:this.shape_63,p:{scaleX:0.8,scaleY:0.8,x:68.5381,y:60.1734}},{t:this.shape_62,p:{scaleX:0.8,scaleY:0.8,x:68.2523,y:59.9421}},{t:this.shape_61,p:{scaleX:0.8,scaleY:0.8,x:68.5836,y:58.5348}},{t:this.shape_60,p:{scaleX:0.8,scaleY:0.8,x:53.0577,y:100.2899}},{t:this.shape_59,p:{scaleX:0.8,scaleY:0.8,x:76.4619,y:78.0518}},{t:this.shape_58,p:{scaleX:0.8,scaleY:0.8,x:90.4828,y:89.5371}},{t:this.shape_57,p:{scaleX:0.8,scaleY:0.8,x:48.2503,y:90.9303}},{t:this.shape_56,p:{scaleX:0.8,scaleY:0.8,x:50.3387,y:91.8817}},{t:this.shape_55,p:{scaleX:0.8,scaleY:0.8,x:50.473,y:92.3546}},{t:this.shape_54,p:{scaleX:0.8,scaleY:0.8,x:50.0352,y:91.4375}},{t:this.shape_53,p:{scaleX:0.8,scaleY:0.8,x:56.1804,y:98.071}},{t:this.shape_52,p:{scaleX:0.8,scaleY:0.8,x:55.3397,y:98.7164}},{t:this.shape_51,p:{scaleX:0.8,scaleY:0.8,x:63.6266,y:92.9775}},{t:this.shape_50,p:{scaleX:0.8,scaleY:0.8,x:50.3667,y:89.2188}},{t:this.shape_49,p:{scaleX:0.8,scaleY:0.8,x:53.5739,y:100.4585}},{t:this.shape_48,p:{scaleX:0.8,scaleY:0.8,x:63.4121,y:83.0397}},{t:this.shape_47,p:{scaleX:0.8,scaleY:0.8,x:96.3976,y:38.9526}},{t:this.shape_46,p:{scaleX:0.8,scaleY:0.8,x:106.91,y:27.7897}},{t:this.shape_45,p:{scaleX:0.8,scaleY:0.8,x:90.9102,y:35.4938}},{t:this.shape_44,p:{scaleX:0.8,scaleY:0.8,x:73.6283,y:52.7735}},{t:this.shape_43,p:{scaleX:0.8,scaleY:0.8,x:79.9104,y:50.6622}},{t:this.shape_42,p:{scaleX:0.8,scaleY:0.8,x:78.6904,y:48.1378}},{t:this.shape_41,p:{scaleX:0.8,scaleY:0.8,x:78.3304,y:45.0173}},{t:this.shape_40,p:{scaleX:0.8,scaleY:0.8,x:79.1504,y:42.3503}},{t:this.shape_39,p:{scaleX:0.8,scaleY:0.8,x:80.2704,y:39.7712}},{t:this.shape_38,p:{scaleX:0.8,scaleY:0.8,x:81.8904,y:38.4292}},{t:this.shape_37,p:{scaleX:0.8,scaleY:0.8,x:83.4904,y:36.9256}},{t:this.shape_36,p:{scaleX:0.8,scaleY:0.8,x:111.5711,y:88.6418}},{t:this.shape_35,p:{scaleX:0.8,scaleY:0.8,x:112.594,y:91.5514}},{t:this.shape_34,p:{scaleX:0.8,scaleY:0.8,x:115.9299,y:93.1977}},{t:this.shape_33,p:{scaleX:0.8,scaleY:0.8,x:104.01,y:84.593}},{t:this.shape_32,p:{scaleX:0.8,scaleY:0.8,x:108.5118,y:87.7636}},{t:this.shape_31,p:{scaleX:0.8,scaleY:0.8,x:105.97,y:86.3237}},{t:this.shape_30,p:{scaleX:0.8,scaleY:0.8,x:86.2293,y:73.7199}},{t:this.shape_29,p:{scaleX:0.8,scaleY:0.8,x:85.727,y:74.2619}},{t:this.shape_28,p:{scaleX:0.8,scaleY:0.8,x:86.7823,y:74.7132}},{t:this.shape_27,p:{scaleX:0.8,scaleY:0.8,x:84.9887,y:74.8136}},{t:this.shape_26,p:{scaleX:0.8,scaleY:0.8,x:85.5446,y:75.882}},{t:this.shape_25,p:{scaleX:0.8,scaleY:0.8,x:86.9023,y:74.7446}},{t:this.shape_24,p:{scaleX:0.8,scaleY:0.8,x:88.3863,y:74.5005}},{t:this.shape_23,p:{scaleX:0.8,scaleY:0.8,x:89.7123,y:74.171}},{t:this.shape_22,p:{scaleX:0.8,scaleY:0.8,x:85.3837,y:76.2398}},{t:this.shape_21,p:{scaleX:0.8,scaleY:0.8,x:85.7548,y:75.7265}},{t:this.shape_20,p:{scaleX:0.8,scaleY:0.8,x:74.7854,y:74.5621}},{t:this.shape_19,p:{scaleX:0.8,scaleY:0.8,x:84.9103,y:72.1111}},{t:this.shape_18,p:{scaleX:0.8,scaleY:0.8,x:78.8069,y:73.6377}},{t:this.shape_17,p:{scaleX:0.8,scaleY:0.8,x:87.6058,y:77.4273}},{t:this.shape_16,p:{scaleX:0.8,scaleY:0.8,x:92.7192,y:76.9531}},{t:this.shape_15,p:{scaleX:0.8,scaleY:0.8,x:86.9497,y:75.4126}},{t:this.shape_14,p:{scaleX:0.8,scaleY:0.8,x:124.5782,y:57.4615}},{t:this.shape_13,p:{scaleX:0.8,scaleY:0.8,x:100.5115,y:65.6533}},{t:this.shape_12,p:{scaleX:0.8,scaleY:0.8,x:102.6801,y:66.7133}},{t:this.shape_11,p:{scaleX:0.8,scaleY:0.8,x:105.2274,y:67.3333}},{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:107.4916,y:68.0133}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:109.5091,y:68.3533}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:111.8676,y:68.8333}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:115.3099,y:68.9133}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:118.3388,y:69.2133}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:127.1947,y:68.2733}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:124.4236,y:68.8133}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:121.412,y:68.8733}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:150.0608,y:45.0147}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:147.9694,y:52.2149}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:132.1896,y:62.5825}}]},1).to({state:[{t:this.shape_104,p:{scaleX:0.8,scaleY:0.8,x:159.9292,y:139.1359}},{t:this.shape_103,p:{scaleX:0.8,scaleY:0.8,x:144.3894,y:167.3518}},{t:this.shape_102,p:{scaleX:0.8,scaleY:0.8,x:145.6876,y:172.0117}},{t:this.shape_101,p:{scaleX:0.8,scaleY:0.8,x:142.0215,y:175.9316}},{t:this.shape_100,p:{scaleX:0.8,scaleY:0.8,x:264.0876,y:161.6991}},{t:this.shape_99,p:{scaleX:0.8,scaleY:0.8,x:260.5877,y:169.5985}},{t:this.shape_98,p:{scaleX:0.8,scaleY:0.8,x:270.7331,y:152.7514}},{t:this.shape_97,p:{scaleX:0.8,scaleY:0.8,x:284.6073,y:119.3572}},{t:this.shape_96,p:{scaleX:0.8,scaleY:0.8,x:243.5126,y:107.4425}},{t:this.shape_95,p:{scaleX:0.8,scaleY:0.8,x:219.8917,y:78.2622}},{t:this.shape_94,p:{scaleX:0.8,scaleY:0.8,x:181.9929,y:50.7508}},{t:this.shape_93,p:{scaleX:0.8,scaleY:0.8,x:119.9965,y:77.3656}},{t:this.shape_92,p:{scaleX:0.8,scaleY:0.8,x:323.7679,y:123.9724}},{t:this.shape_91,p:{scaleX:0.8,scaleY:0.8,x:317.3297,y:114.6794}},{t:this.shape_90,p:{scaleX:0.8,scaleY:0.8,x:279.931,y:98.9073}},{t:this.shape_89,p:{scaleX:0.8,scaleY:0.8,x:343.1251,y:66.158}},{t:this.shape_88,p:{scaleX:0.8,scaleY:0.8,x:361.9503,y:115.7726}},{t:this.shape_87,p:{scaleX:0.8,scaleY:0.8,x:340.2564,y:169.6517}},{t:this.shape_86,p:{scaleX:0.8,scaleY:0.8,x:335.0065,y:176.9224}},{t:this.shape_85,p:{scaleX:0.8,scaleY:0.8,x:201.8614,y:172.9163}},{t:this.shape_84,p:{scaleX:0.8,scaleY:0.8,x:208.4169,y:107.1427}},{t:this.shape_83,p:{scaleX:0.8,scaleY:0.8,x:254.8777,y:169.8917}},{t:this.shape_82,p:{scaleX:0.8,scaleY:0.8,x:186.7385,y:33.9634}},{t:this.shape_81,p:{scaleX:0.8,scaleY:0.8,x:328.5328,y:177.4306}},{t:this.shape_80,p:{scaleX:0.8,scaleY:0.8,x:189.1247,y:138.9097}},{t:this.shape_79,p:{scaleX:0.8,scaleY:0.8,x:202.6485,y:172.088}},{t:this.shape_78,p:{scaleX:0.8,scaleY:0.8,x:182.7908,y:129.6826}},{t:this.shape_77,p:{scaleX:0.8,scaleY:0.8,x:195.8296,y:148.0968}},{t:this.shape_76,p:{scaleX:0.8,scaleY:0.8,x:200.2286,y:179.5754}},{t:this.shape_75,p:{scaleX:0.8,scaleY:0.8,x:194.21,y:179.9656}},{t:this.shape_74,p:{scaleX:0.8,scaleY:0.8,x:169.549,y:98.7003}},{t:this.shape_73,p:{scaleX:0.8,scaleY:0.8,x:148.7209,y:75.4906}},{t:this.shape_72,p:{scaleX:0.8,scaleY:0.8,x:163.6425,y:85.9097}},{t:this.shape_71,p:{scaleX:0.8,scaleY:0.8,x:255.3517,y:60.2777}},{t:this.shape_70,p:{scaleX:0.8,scaleY:0.8,x:225.2946,y:42.4333}},{t:this.shape_69,p:{scaleX:0.8,scaleY:0.8,x:267.6311,y:41.0087}},{t:this.shape_68,p:{scaleX:0.8,scaleY:0.8,x:281.0928,y:53.4135}},{t:this.shape_67,p:{scaleX:0.8,scaleY:0.8,x:262.3676,y:59.2627}},{t:this.shape_66,p:{scaleX:0.8,scaleY:0.8,x:302.8903,y:56.4985}},{t:this.shape_65,p:{scaleX:0.8,scaleY:0.8,x:304.0867,y:35.6478}},{t:this.shape_64,p:{scaleX:0.8,scaleY:0.8,x:129.0297,y:114.3382}},{t:this.shape_63,p:{scaleX:0.8,scaleY:0.8,x:68.5381,y:60.1734}},{t:this.shape_62,p:{scaleX:0.8,scaleY:0.8,x:68.2523,y:59.9421}},{t:this.shape_61,p:{scaleX:0.8,scaleY:0.8,x:68.5836,y:58.5348}},{t:this.shape_60,p:{scaleX:0.8,scaleY:0.8,x:53.0577,y:100.2899}},{t:this.shape_59,p:{scaleX:0.8,scaleY:0.8,x:76.4619,y:78.0518}},{t:this.shape_58,p:{scaleX:0.8,scaleY:0.8,x:90.4828,y:89.5371}},{t:this.shape_57,p:{scaleX:0.8,scaleY:0.8,x:48.2503,y:90.9303}},{t:this.shape_56,p:{scaleX:0.8,scaleY:0.8,x:50.3387,y:91.8817}},{t:this.shape_55,p:{scaleX:0.8,scaleY:0.8,x:50.473,y:92.3546}},{t:this.shape_54,p:{scaleX:0.8,scaleY:0.8,x:50.0352,y:91.4375}},{t:this.shape_53,p:{scaleX:0.8,scaleY:0.8,x:56.1804,y:98.071}},{t:this.shape_52,p:{scaleX:0.8,scaleY:0.8,x:55.3397,y:98.7164}},{t:this.shape_51,p:{scaleX:0.8,scaleY:0.8,x:63.6266,y:92.9775}},{t:this.shape_50,p:{scaleX:0.8,scaleY:0.8,x:50.3667,y:89.2188}},{t:this.shape_49,p:{scaleX:0.8,scaleY:0.8,x:53.5739,y:100.4585}},{t:this.shape_48,p:{scaleX:0.8,scaleY:0.8,x:63.4121,y:83.0397}},{t:this.shape_47,p:{scaleX:0.8,scaleY:0.8,x:96.3976,y:38.9526}},{t:this.shape_46,p:{scaleX:0.8,scaleY:0.8,x:106.91,y:27.7897}},{t:this.shape_45,p:{scaleX:0.8,scaleY:0.8,x:90.9102,y:35.4938}},{t:this.shape_44,p:{scaleX:0.8,scaleY:0.8,x:73.6283,y:52.7735}},{t:this.shape_43,p:{scaleX:0.8,scaleY:0.8,x:79.9104,y:50.6622}},{t:this.shape_42,p:{scaleX:0.8,scaleY:0.8,x:78.6904,y:48.1378}},{t:this.shape_41,p:{scaleX:0.8,scaleY:0.8,x:78.3304,y:45.0173}},{t:this.shape_40,p:{scaleX:0.8,scaleY:0.8,x:79.1504,y:42.3503}},{t:this.shape_39,p:{scaleX:0.8,scaleY:0.8,x:80.2704,y:39.7712}},{t:this.shape_38,p:{scaleX:0.8,scaleY:0.8,x:81.8904,y:38.4292}},{t:this.shape_37,p:{scaleX:0.8,scaleY:0.8,x:83.4904,y:36.9256}},{t:this.shape_36,p:{scaleX:0.8,scaleY:0.8,x:111.5711,y:88.6418}},{t:this.shape_35,p:{scaleX:0.8,scaleY:0.8,x:112.594,y:91.5514}},{t:this.shape_34,p:{scaleX:0.8,scaleY:0.8,x:115.9299,y:93.1977}},{t:this.shape_33,p:{scaleX:0.8,scaleY:0.8,x:104.01,y:84.593}},{t:this.shape_32,p:{scaleX:0.8,scaleY:0.8,x:108.5118,y:87.7636}},{t:this.shape_31,p:{scaleX:0.8,scaleY:0.8,x:105.97,y:86.3237}},{t:this.shape_30,p:{scaleX:0.8,scaleY:0.8,x:86.2293,y:73.7199}},{t:this.shape_29,p:{scaleX:0.8,scaleY:0.8,x:85.727,y:74.2619}},{t:this.shape_28,p:{scaleX:0.8,scaleY:0.8,x:86.7823,y:74.7132}},{t:this.shape_27,p:{scaleX:0.8,scaleY:0.8,x:84.9887,y:74.8136}},{t:this.shape_26,p:{scaleX:0.8,scaleY:0.8,x:85.5446,y:75.882}},{t:this.shape_25,p:{scaleX:0.8,scaleY:0.8,x:86.9023,y:74.7446}},{t:this.shape_24,p:{scaleX:0.8,scaleY:0.8,x:88.3863,y:74.5005}},{t:this.shape_23,p:{scaleX:0.8,scaleY:0.8,x:89.7123,y:74.171}},{t:this.shape_22,p:{scaleX:0.8,scaleY:0.8,x:85.3837,y:76.2398}},{t:this.shape_21,p:{scaleX:0.8,scaleY:0.8,x:85.7548,y:75.7265}},{t:this.shape_20,p:{scaleX:0.8,scaleY:0.8,x:74.7854,y:74.5621}},{t:this.shape_19,p:{scaleX:0.8,scaleY:0.8,x:84.9103,y:72.1111}},{t:this.shape_18,p:{scaleX:0.8,scaleY:0.8,x:78.8069,y:73.6377}},{t:this.shape_17,p:{scaleX:0.8,scaleY:0.8,x:87.6058,y:77.4273}},{t:this.shape_16,p:{scaleX:0.8,scaleY:0.8,x:92.7192,y:76.9531}},{t:this.shape_15,p:{scaleX:0.8,scaleY:0.8,x:86.9497,y:75.4126}},{t:this.shape_14,p:{scaleX:0.8,scaleY:0.8,x:124.5782,y:57.4615}},{t:this.shape_13,p:{scaleX:0.8,scaleY:0.8,x:100.5115,y:65.6533}},{t:this.shape_12,p:{scaleX:0.8,scaleY:0.8,x:102.6801,y:66.7133}},{t:this.shape_11,p:{scaleX:0.8,scaleY:0.8,x:105.2274,y:67.3333}},{t:this.shape_10,p:{scaleX:0.8,scaleY:0.8,x:107.4916,y:68.0133}},{t:this.shape_9,p:{scaleX:0.8,scaleY:0.8,x:109.5091,y:68.3533}},{t:this.shape_8,p:{scaleX:0.8,scaleY:0.8,x:111.8676,y:68.8333}},{t:this.shape_7,p:{scaleX:0.8,scaleY:0.8,x:115.3099,y:68.9133}},{t:this.shape_6,p:{scaleX:0.8,scaleY:0.8,x:118.3388,y:69.2133}},{t:this.shape_5,p:{scaleX:0.8,scaleY:0.8,x:127.1947,y:68.2733}},{t:this.shape_4,p:{scaleX:0.8,scaleY:0.8,x:124.4236,y:68.8133}},{t:this.shape_3,p:{scaleX:0.8,scaleY:0.8,x:121.412,y:68.8733}},{t:this.shape_2,p:{scaleX:0.8,scaleY:0.8,x:150.0608,y:45.0147}},{t:this.shape_1,p:{scaleX:0.8,scaleY:0.8,x:147.9694,y:52.2149}},{t:this.shape,p:{scaleX:0.8,scaleY:0.8,x:132.1896,y:62.5825}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,410.9,205);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98673C").s().p("AgQAHQgQgYADgZQADgQALABQAFABAFAEIAHAmQAMArARAdQgigggNgTg");
	this.shape.setTransform(48.8944,60.622);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCA46C").s().p("Ag5AZQAMgiATgQQAfgZAfgFQAggEgDAYQgFgYgwAcQgyAegbA6QACgPAGgRg");
	this.shape_1.setTransform(18.1127,26.7895);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#98673C").s().p("AgOA6IgcgEQAGgiAFgPQARgDAZgmQANgTAKgTQALCPgDAGQgZgLgfgGg");
	this.shape_2.setTransform(80.681,75.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#98673C").s().p("AgtAHIAWgKQAcgMAnAAIACALQg0ADghARg");
	this.shape_3.setTransform(61.625,81.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F2A766").s().p("AAHgLQiWgCg2A2QAggpAagQQAogaBgAAQBeAAAuAXQAaAOAjAwQgqgziVgDg");
	this.shape_4.setTransform(71.2,85.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C8C8C").s().p("AgjAIQgPgDAAgFQAAgEAPgDQAPgEAUAAQAVAAAPAEQAPADAAAEQAAAFgPADQgPAEgVAAQgUAAgPgEg");
	this.shape_5.setTransform(67.8,119.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D2D2D").s().p("AgMASQgMgHgEgLQgEgJAEgIQAJgQAZAWIAVAPQAHAHgEAGQgEAIgOAAQgMAAgMgHg");
	this.shape_6.setTransform(61.7286,123.6837);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AgeARQgEgGAIgHIAVgRQAagVAJAQQAFAIgEAKQgEALgNAHQgMAHgNAAQgOAAgFgIg");
	this.shape_7.setTransform(73.8496,123.8041);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#575757").s().p("AhCAIIgGgOQAYgPAwAAQAuAAAbARQgBAGgIAGQgTAOgsAAQgyAAgRgOg");
	this.shape_8.setTransform(67.9,120.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3D3D3D").s().p("AhBAqQgqgUAEgUQAMg+BbAAQAzAAAcATQAXARADAaQACAYgrATQglAQgaAAQgbAAgngTg");
	this.shape_9.setTransform(67.7933,124.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDFB6").s().p("AA4BAQglgLgQAAIg8AIQgjAFgQgLQgOgJgBgUQgBgUANgTQAhgzBRAAQBLAAAhAzQANATAAAUQAAAUgMAJQgPAKgVAAQgJAAgLgBg");
	this.shape_10.setTransform(67.8724,122.846);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEC497").s().p("ABQBKQhAgLgPAAQg1AKgbAAQgzAAAEgzQACgoAcgZQAhgeA/AAQA9AAAhAeQAaAZAHAoQAIA0g2AAIgBAAg");
	this.shape_11.setTransform(67.9899,123.7752);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCB66D").s().p("AAAA5IgpgMQAAgdANghQAOgpAUAAQATAAAKAmQAIAegCAfQAAASgYAAQgIAAgJgCg");
	this.shape_12.setTransform(68.219,113.0157);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA9C56").s().p("AAABOIhEgQQAGgxAOgkQAVg4AhAAQAfAAASAzQAQAqgDAqQgBAYgoAAQgMAAgPgCg");
	this.shape_13.setTransform(68.3674,112.4441);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AAwAOQgqgLgOAAQgPAAgfAIQgZAIgSgEIgEgPIAngGQAKgDAQgIIA/AAQAkALAoADIgHARQgJAEgMAAQgMAAgPgEg");
	this.shape_14.setTransform(68.85,130.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_15.setTransform(50.675,103.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_16.setTransform(90.85,103.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2D2D2D").s().p("AgaAlQgNgJgBgSQgBgQALgPQAMgQARgEQAQgEAMAJQANAJABASQAAAQgLAQQgLAPgRAEIgJABQgKAAgJgGg");
	this.shape_17.setTransform(91.0219,105.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D2D2D").s().p("AgBAqQgRgEgLgPQgMgPABgRQABgSAMgJQAOgJAPAEQASAEAKAQQAMAPgBAQQgBASgNAJQgIAGgLAAIgJgBg");
	this.shape_18.setTransform(50.2,105.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CE7C42").s().p("AhcAaQgugpADgYQACgNAmgJQArgKA/ACQBDACAhANQAaAKgBAMQgCAXgxAmQg0ApgmAAQgoAAgvgsg");
	this.shape_19.setTransform(70.7676,92.159);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C19974").s().p("AAgA6QgYAAgUgGIgQgFQgCgZgDgMQgFgTgNgQQgHgIgBgLIAJgIQANgHAVACQAUACASAOQARANAKAUQAMAXgBAUQgCAXgZAAIgBAAg");
	this.shape_20.setTransform(51.458,106.2033);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C19974").s().p("AgZA8QglgBAEggQACgWALgSQAOgZAbgOQAPgJAVADQAUADAHALQgEAPgLANQgHAIgDAOQgDALgBAYQgUATghAAIgCAAg");
	this.shape_21.setTransform(90.0057,106.2881);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DB8947").s().p("Ah2DIQAHhMAAgTQAAg3gOgpQgDgIgkg7Qghg2AAgRQATgaAWgSQAagcB0gCQBugCAtAWQAcAOAdApQgIAngmAsQguAzgKAUQgUApgIArQgJApAAA1g");
	this.shape_22.setTransform(71.2,102.4417);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9D3A8").s().p("ABKDQIi3gGQgWgDgbgQQgngXgGgjIADg3QACgjgVgZQgjgnAihBQAXgsAtgoQAcgaBygDQBvgCAsAVQAYAMAdAmQAaAjAJAbQAJAdgJATQgEAIgVAVQgKALgBAiQgBAxgGAZQgIAogqAaQgjAWgdAAIgCAAg");
	this.shape_23.setTransform(70.8062,102.9375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E0B88C").s().p("AhZEFQgcgRgEgpQgugQgWgbQgZgegFg3QAAgqgCgYQgDgqgUgZQgZggAshCQAUgfA1g5QAbgcBzgCQBvgCAsAWQAWALAaAhQAKANAjAzQASAcgCAcQgCAYgQARQgKAMgDAkQgEA2gFAVQgMA2gTAYQgdAkhIAWQgIAlgfAQQgXAMgnAAIgDAAQgtAAgWgOg");
	this.shape_24.setTransform(70.792,109.5425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B38D6F").s().p("AhTAEQgSgbgGgcQgFgaAHgLQAGgIAiAWQAnAYApArQAcAbAkARQASAIANADQgPAbgZAQQhngMgyhLg");
	this.shape_25.setTransform(44.5208,84.5665);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EFC79C").s().p("AhMBbQgUgWgSglIgbg+QgohWAagXQAMgLArARQA0AUAoAeQAqAfAnAzQAbAhAjAUQATALANADQgCAKgIAPQgSAeglAWIgaABQhmAAgyg1g");
	this.shape_26.setTransform(39.6998,80.9625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3683C").s().p("AhACBQgbgdgwhmQgfhFgKgcQgUg4ALgUQAHgPAZAMQAPAHAiAWIBBAhQA4AfA0AkQAyAiAsAxQAXAZAMASIgGAiQgRAogxAdQgaAEgWAAQhWAAg0g3g");
	this.shape_27.setTransform(37.1912,77.1593);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B38D6F").s().p("AhiBAIgLgPIAfgLQAkgRAcgcQAogsAngYQAjgVAFAIQAHAKgFAaQgFAdgSAaQgxBMhoAMQgPgKgOgRg");
	this.shape_28.setTransform(97.1542,84.6665);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EFC79C").s().p("AhnCPQglgWgQgdIgJgYIAfgOQAlgUAagiQAmgyApggQAmgcA3gXQAqgSANALQAZAWgoBYQgtBigZAaQgxAzhVAAQgTAAgVgCg");
	this.shape_29.setTransform(101.9214,80.979);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3683C").s().p("Ah3C1QgygcgRgoIgGgiIAigrQAsgyAygiQA0glA3gfIBAghQARgJAggUQAagNAIAPQAKAVgTA3QgKAegfBDQguBmgcAeQg0A4hXAAQgWAAgYgEg");
	this.shape_30.setTransform(104.4338,77.1563);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#98673C").s().p("Ak4GRQAOhJAcg5QAig7ARgmQAag6AJg5QAHgrADgBQAXgIgGBiQgFBkgdAyIBRg/QBfhGBCgkQAxgbAeg0QAfg2gbgYQgLgLgOAMIgMAOQAKgQACgQQAFgwgOgYQgRgTgEgHQgEgGALgDQALgCARAFQAuAQAdA+IAmgyQAlg5gDgqQgCgjgSgEIgSADIALhKQAEggAbAGQAYAHAOAnQAMAkgDApQgDAkgJAcQgMAlgbAiQglAxgVA2QgRAsgNAVQgbApgwAdQitBohpBuQghAjgWAfIgQAYg");
	this.shape_31.setTransform(110.079,43.2208);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DCA46C").s().p("AgBgUQgdgMgIAfQAEgWAIgIQAIgHAQAEQAeALALA7QgMgsgcgMg");
	this.shape_32.setTransform(137.6,3.6156);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DCA46C").s().p("AAWABQgTgOgYgEQgagFgDANQgCgPAMgFQALgFASAGQArAOATAuQgIgOgVgRg");
	this.shape_33.setTransform(122.6102,24.131);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DCA46C").s().p("AgNAYQAZgxAJhLQAEgcADgIQAFgMANADQAMADAKAVQgFgJgHAAQgIAAgEAIQgEAHgDARIgHAtQgKAvgUAmIgqBFIgZAtQAPgqAnhQg");
	this.shape_34.setTransform(86.425,55.47);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DCA46C").s().p("AheBBQAAgegOgXQAvgXArgOQAYgJAWgNQASgMAZgVQAcgRAHAQQAIARgUAZQgSAZgeAOQgaANg8AoIg5AlQADgKAAgPg");
	this.shape_35.setTransform(108.3542,50.9429);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B78047").s().p("AlHGLQACgTAMgnQAYhNAxhiQAZgyAKhMQADgbAEgIQAFgLAMADQAaAHAGA9QADAfgCAdIAjgTQAsgWArgOQAzgSAsgqQAsgqAFglQAFgwgNgYQgSgTgEgHQgNgTAQgIQAUgLA7AoIAdgoQAfgzAJg4QADgxAEgVQAHgkAbAJQAgAKAKA3QAIAogEAsQgIBLgwA/QglAxgVA2QgRAsgNAVQgbApgwAdQitBohpBuQghAjgWAfIgQAYQgtgQgogFg");
	this.shape_36.setTransform(109.156,41.71);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#98673C").s().p("ACZEtQhzh0ichaQgwgcgbgqQgNgUgRgtQgUg2gmgxQgagigJghQgGgXAAglQAAgsAMgkQAOguAYgBQASgBAEAmQAIA+AJAYQgDgFgFgEQgLgHgKAHQgXAPAFA1QAHBCA6A+IALgZQAOgdAUgVQAegdAbgGQAKgBAFACQAEADgEAFQgYAZgFAhQgIAsAdAuQgKgPgNgIQgYgQgKAoQgEATAMAbQAOAkAgAUQBwBGAwAgQBnBGA+A7QgLhAgehgQgIgXgCgjQgDgoAGgbQACgMAHgCQAGgBADAIQAGAXAGAmQAJAlAbA1QAqBSAUA0QAUA0AHAnIhWAVQgagog6g6g");
	this.shape_37.setTransform(33.925,43.4487);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DCA46C").s().p("AgJA0IgIgpQgEgdAAghQABhAAUgIQAPgGAHAUQgGgHgIAFQgIAFgBAMQgMA6ANBWQAHArAJAgQgPgbgKgug");
	this.shape_38.setTransform(49.925,53.0157);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#DCA46C").s().p("Ag2gLQgTgLgPgSQgRgUAAgPQAAgSAKgCQAJgDAPALQAnAbAjAMQAWAHAcAMQAiAOAPAKQglgIAEAlQADAlAiAkQg7gwhlg8g");
	this.shape_39.setTransform(35.125,53.2179);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DCA46C").s().p("AgigLQAMgyAcgKQAbgJAIAhQgKgPgSAHQgSAGgMAaQgSApgEA3QgEgtAJgng");
	this.shape_40.setTransform(4.1027,7.4536);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B78047").s().p("AChE+Qhzh0ichaQgwgcgbgqQgNgUgRgtQgUg2gmgxQgwg/gHhLQgFgrAIgpQALg3AfgKQAcgJAHAkQAFAVADAyQAJA4AcAwQAPAYAMANQA7goAYAMQAJAFAAAKQABAJgHAHQgUATgDAGQgNAYAGAxQAFAlAsAqQArAqAzASQBFAXA6AjQgEgeABggQABhAAUgIQATgIAJAzQAOBPAUAlQA8BtAaBQQAOAnABASQggADgeAJIgYAJQgagog6g6g");
	this.shape_41.setTransform(33.1038,41.711);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EEC497").s().p("AhFAmQgcgRgEgoQAWgiBSACQBTADAQAkQgIAkgfAPQgXANgoAAIgCAAQgtAAgWgOg");
	this.shape_42.setTransform(68.775,131.8673);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFDFB6").s().p("AAAASQgbgBgOgIQgKgFACgGQABgFAPgFQAQgFARAAQALAAAPAEQAPAEAGAEQAKAGgPAJQgPAIgWAAIgFAAg");
	this.shape_43.setTransform(65.846,138.355);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6F5E56").s().p("AABgSIAXgXIALABQgRAPgSAfIgQAfQgJADgJACQAKgfAZgdg");
	this.shape_44.setTransform(60.6,403.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6F5E56").s().p("AgDgUIANgcIAKACQgMAVgGAiIgFAfQgFAEgMAFQADgjAOgig");
	this.shape_45.setTransform(87.25,415.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8C7A72").s().p("AgYAtQgHgEANgYQg6ARAHgPQAGgLARgRQATgUAVgPIATgDQAbABAfASQgTA4gFAGQgHAIgcAEIgUACQgLAAgFgDg");
	this.shape_46.setTransform(61.5126,404.4516);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#77675F").s().p("AgrAvQgDgCABgJIADgLQgZAKgNgCQgPgCAJgSQAGgMASgRQASgTAWgPIAdgCQAmAGAtAmIgEAQQgFASgEAFQgIAKgvAIQgWAEgQAAQgTAAgIgGg");
	this.shape_47.setTransform(63.1813,405.1399);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFECDA").s().p("AgGAUQgOgFgIgKQgIgIADgIQADgJAMgCQAMgCANAFQAOAFAIAKQAIAIgDAIQgDAJgMACIgIAAQgJAAgIgDg");
	this.shape_48.setTransform(170.925,226.3355);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFECDA").s().p("AgIAYQgRgGgJgMQgKgKAEgKQAEgKAOgDQAPgCAQAGQARAGAKAMQAJAKgEAKQgDAKgPADIgIAAQgMAAgLgEg");
	this.shape_49.setTransform(171.2871,215.723);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFECDA").s().p("AAPAYQgMgCgLgGQgNgIgGgJQgGgJAEgHQAEgGALABQAMAAALAHQANAHAGAJQAGAJgEAHQgEAHgKAAIgBAAg");
	this.shape_50.setTransform(195.025,202.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFECDA").s().p("AgJAUQgQgIgJgLQgHgLADgIQAFgIAOgBQAPAAAOAIQAQAIAIALQAJALgEAJQgFAIgOAAQgOAAgPgIg");
	this.shape_51.setTransform(187.65,203.9485);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFECDA").s().p("AgEASQgRgFgJgIQgKgIACgHQACgHANgCQANgCAPAFQAQAEAKAJQAKAHgCAHQgCAHgNACIgIABQgKAAgKgDg");
	this.shape_52.setTransform(169.5574,168.3272);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFECDA").s().p("AgGAUQgQgGgKgJQgJgJADgJQAEgJANgCQANgBAQAGQAQAFAIALQAJAJgDAIQgDAJgOACIgFAAQgLAAgLgFg");
	this.shape_53.setTransform(179.05,190.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFECDA").s().p("AgGATQgNgFgHgIQgGgIACgIQADgIAMgCQAKgDAMAFQANAFAGAJQAIAIgDAIQgDAIgMACIgGAAQgIAAgIgDg");
	this.shape_54.setTransform(194.95,160.0861);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFECDA").s().p("AgGAVQgRgGgLgKQgKgKAEgIQACgJAOgCQAPgCAQAGQASAGAJAKQALAJgDAJQgDAIgOACIgIABQgLAAgMgEg");
	this.shape_55.setTransform(186.2,164.5517);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFECDA").s().p("AgHAWQgRgGgKgLQgKgKAEgJQADgJAPgCQAOgCAQAGQARAHAKAKQAKAKgEAJQgDAJgOACIgHABQgMAAgMgFg");
	this.shape_56.setTransform(183.475,181.675);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFECDA").s().p("AgIAZQgUgHgLgNQgMgLAEgLQAEgKARgCQAQgCATAHQAUAHALANQAMAMgEAKQgEAKgRADIgHAAQgOAAgOgGg");
	this.shape_57.setTransform(152.075,188.7488);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFECDA").s().p("AgKAeQgYgJgNgOQgOgOAFgNQAFgNAUgDQAUgCAWAJQAYAJANAOQAOAOgFANQgFANgUACIgJABQgQAAgRgHg");
	this.shape_58.setTransform(162.5887,198.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFECDA").s().p("AgIAbQgWgHgMgNQgMgMADgMQAEgLASgDQASgDAVAIQAVAHAMANQANAMgEAMQgEALgSADIgJABQgOAAgPgGg");
	this.shape_59.setTransform(170.934,181.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA9C56").s().p("AlHFnQACgNgCg7IAqgDQA1gFA0gQQCngxBdh/QB2iggEimQAAg0gNguIgNgkQCqCagKDfQgEBwgoBRQgmA8hgAyQiCBDitAAQhSAAhcgPg");
	this.shape_60.setTransform(168.2002,205.8289);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C4753F").s().p("AgTByQAqhkAKhcQAFg0gFhaQAjBHAIBsQAEA1gDAnQgOgBgLAEQgFACgoBHQgpBJgsAVQAog/ATgsg");
	this.shape_61.setTransform(127.6143,236.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6F5E56").s().p("AgDgVIAIgaIALAAIgHAbQgHAfgBAaQgGAGgKAFQADgkAJghg");
	this.shape_62.setTransform(230.275,394.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F2A766").s().p("ABBANQhhhHhtAcQAPgaAfgSQAkgUAmAEQBkALA/CqQgbgpgyglg");
	this.shape_63.setTransform(108.775,175.2167);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A98167").s().p("AATAkQgIgkglhRIgkhLQBLBfArBGQAOAWgPAuQgEAMgeBEQAIhQgKgpg");
	this.shape_64.setTransform(195.3129,297.525);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B2886B").s().p("AAIgLIgsh1IAXAfQAYAjANAVQAOAWgBArQAAAcgGBNQgNhvgKgdg");
	this.shape_65.setTransform(232.1259,289.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#816F68").s().p("AgnAoQgWgCgFgGQgJgJAigcQAggcAVgGIARAFQAVAIATANQgXAcgeAPQgVAKgXAAIgLAAg");
	this.shape_66.setTransform(155.4797,397.3781);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#71615B").s().p("AhZAfQAAgSAigbQAegZAVgHIAbAKQAjAQAfAdIgTAXQgcAPhAAAQhDAAAAgQg");
	this.shape_67.setTransform(157.15,398.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#948075").s().p("AAJAnIgPgNQgMAGgNAFQgbAJgIgJQgEgEAIgYQAHgWANgXIALgHQARgHAcAFQAgAEAXAOQgOBFgOAFIgHABQgKAAgPgJg");
	this.shape_68.setTransform(87.3833,415.058);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7F6D62").s().p("AAGAvIgcgUQgPAJgQAGQgfAMgDgRQgDgRAJgZQAFgQAPgeIAMgHQARgGAdAEQAhAEAgAVQARALAJAJQgHBIgWAFIgIABQgSAAgbgQg");
	this.shape_69.setTransform(89.2029,416.5872);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8C7A72").s().p("AAQAmIgSgOIAGhJQAlABAgATIgDAmQgGAngPACIgCAAQgLAAgUgMgAhHATQAEgSAPgjIALgIQAQgHAYAAIAFAAIgSBIQgnAUgKAAQgNAAAFgYg");
	this.shape_70.setTransform(230.7806,394.8075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#77675F").s().p("AAIAtIgYgXIgUAOQgYAMgPgDQgagGAkhWIALgHQAQgIAYAAQAnAAAjAVQASAKAJALQAAAggJAYQgIAYgNACIgGABQgSAAgZgSg");
	this.shape_71.setTransform(232.0798,396.0814);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BC9271").s().p("Ag2CWIAZh7QADgQAgg1QAjg6ANgyQgCA7gTA3QgVA6gBAKIgMB3g");
	this.shape_72.setTransform(127.35,257.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C89F7C").s().p("AAFBbQAChHgCgYQgDgigOgjIgPgaIAXAWQAWAaAFAeQAEAbABBeg");
	this.shape_73.setTransform(97.575,263.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFECDA").s().p("AgOAYQgIgJgBgNQgBgNAHgKQAGgKAJgBQAJAAAHAIQAJAJAAAOQABAMgFAKQgHALgJAAIgCABQgIAAgHgJg");
	this.shape_74.setTransform(122.25,233.9536);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFECDA").s().p("AgNAWQgGgJAAgNQgBgLAGgKQAGgJAIAAQAIAAAGAJQAGAIAAANQAAAMgFAJQgGAJgJABQgHAAgGgJg");
	this.shape_75.setTransform(118.9231,241.8237);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFECDA").s().p("AgRAmQgLgNgEgUQgDgTAIgPQAHgQANgCQANgCAMAMQALANADAUQAEATgIAQQgHAQgOACIgDAAQgLAAgKgLg");
	this.shape_76.setTransform(118.9128,217.3995);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFECDA").s().p("AgNAgQgKgKgDgRQgDgPAGgNQAGgNALgDQAKgCAKALQAKAKADAQQADAPgGANQgGAOgLACIgDAAQgIAAgJgIg");
	this.shape_77.setTransform(109.525,227.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFECDA").s().p("AgPAjQgWgKgMgRQgLgRAGgOQAHgPAUgDQAVgDAWAKQAWAKAMASQALAQgGAOQgHAPgUADIgLABQgQAAgQgIg");
	this.shape_78.setTransform(134.025,202.3858);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFECDA").s().p("AgIAVQgNgGgHgKQgGgKAEgIQAEgJAMgCQAMgCAMAGQANAGAGAKQAGAKgEAIQgEAJgMACIgFAAQgJAAgJgEg");
	this.shape_79.setTransform(126.975,191.2644);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFECDA").s().p("AgLAaQgRgHgHgNQgJgMAGgLQAFgLAPgCQAPgDAPAHQAQAIAIANQAJAMgGALQgEALgQADIgIAAQgLAAgLgGg");
	this.shape_80.setTransform(145.5,201.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFECDA").s().p("AgCAmQgOgHgKgPQgJgQABgOQACgQALgGQALgHANAHQAOAGAJAPQAKAPgCAPQgBAQgLAGQgFAEgHAAQgGAAgGgDg");
	this.shape_81.setTransform(105.3052,182.8315);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFECDA").s().p("AgFAfQgLgHgGgNQgHgNADgMQACgNAKgEQAKgFAKAHQALAGAGANQAGANgCANQgCAMgKAFQgEABgEAAQgGAAgGgDg");
	this.shape_82.setTransform(92.2,179.188);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFECDA").s().p("AgFAhQgMgHgHgPQgGgNACgOQADgNAKgFQAKgFALAHQAMAHAHAOQAGAOgCANQgDAOgKAFQgEACgEAAQgHAAgGgEg");
	this.shape_83.setTransform(101.975,200.375);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFECDA").s().p("AgGAUQgTgHgKgKQgLgKADgIQADgIAPgBQAPgBARAGQASAHALAKQALAKgDAIQgDAIgPABIgEAAQgNAAgPgFg");
	this.shape_84.setTransform(138.2012,168.625);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFECDA").s().p("AAAAMQgLgBgIgEQgIgFABgEQAAgFAIgCQAJgDAKABQALABAIAEQAIAFgBAEQgBAFgIADQgGACgHAAIgFgBg");
	this.shape_85.setTransform(123.754,162.6268);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFECDA").s().p("AgDAQQgNgEgHgHQgHgGACgHQACgGAKgCQAKgCALADQAMADAHAIQAHAGgCAGQgCAHgJACIgJABQgGAAgGgCg");
	this.shape_86.setTransform(124.425,173.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFECDA").s().p("AgZAJQgLgFAAgGIABgEIBAgHQAJAFAAAGQgBAGgKAFQgMAFgPAAQgOAAgLgFg");
	this.shape_87.setTransform(106.15,163.725);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgZAMQgLgFAAgHQAAgGALgFQALgFAOAAQAPAAAMAFQAKAFABAGQgBAHgKAFQgMAFgPAAQgOAAgLgFg");
	this.shape_88.setTransform(106.15,163.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFECDA").s().p("AgCAOQgWgCgLgKIA7gPQANAGgBAHQgBAHgLAEQgJADgMAAIgFAAg");
	this.shape_89.setTransform(130.0286,159.085);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAAARQgQgBgKgGQgLgGABgGQAAgHAMgEQALgEAOABQAQABAKAGQALAGgBAGQAAAHgLAEQgJADgMAAIgFAAg");
	this.shape_90.setTransform(129.875,158.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAAAPQgQgBgKgFQgLgFABgGQABgGALgEQALgEAPACQAPABALAFQAKAFgBAGQAAAGgLAEQgJADgKAAIgHgBg");
	this.shape_91.setTransform(150.3782,150.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFECDA").s().p("AgPAFQgOgCgHgDIBKgFQgFAGgPAEQgJABgJAAIgPgBg");
	this.shape_92.setTransform(162.4,152.2318);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgCAXQgWgDgOgJQgOgJABgJQACgJAQgFQAQgEAUADQAWADAOAJQAOAJgBAIQgCAKgQAFQgJACgMAAIgPgBg");
	this.shape_93.setTransform(161.125,150.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCAOQgQgDgKgGQgJgFABgGQACgGAMgCQAMgCAOADQAPADAKAGQAJAFgCAGQgBAGgMACIgKABQgIAAgHgCg");
	this.shape_94.setTransform(178.3,147.9832);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCAMQgNgDgHgFQgIgFABgFQACgFAJgBQAKgCALADQANADAHAFQAIAFgBAFQgCAFgJABIgGABQgHAAgIgCg");
	this.shape_95.setTransform(186.425,148.2112);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFECDA").s().p("AgCAOQgNgCgJgGQgIgGABgFQABgGALgDQAKgCALADQAOACAJAHQAIAFgBAFQgBAGgLADIgJABIgNgCg");
	this.shape_96.setTransform(155.95,156.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFECDA").s().p("AgGARQgPgGgKgJQgIgIACgHQACgHANgBQANgBAPAGQAQAFAJAKQAKAIgDAHQgDAHgNABIgDAAQgMAAgNgFg");
	this.shape_97.setTransform(148.2,168.5551);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFECDA").s().p("AgHAXQgRgGgKgLQgKgKAEgKQADgJAPgDQAOgCARAGQARAGAJALQAKALgEAJQgDAKgPACIgIABQgLAAgLgFg");
	this.shape_98.setTransform(143.525,218.498);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F9D3A8").s().p("AgKAqQgNgNgGgVQgGgTAEgSQAFgRAMgEQANgDAMAMQANAMAGAVQAGAUgEARQgFASgMADIgGABQgJAAgKgJg");
	this.shape_99.setTransform(223.075,218.509);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F9D3A8").s().p("AAPApQgRgDgRgOQgRgOgGgPQgGgRAIgKQAJgKARACQARACARAOQARAOAGAQQAGARgIAKQgHAIgOAAIgFAAg");
	this.shape_100.setTransform(228.2627,183.8667);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F9D3A8").s().p("AAGAWQgJgBgIgIQgIgIgDgIQgCgKAFgFQAFgFAJACQAIACAJAHQAIAIADAIQACAKgFAFQgDAEgGAAIgFgBg");
	this.shape_101.setTransform(214.775,185.2844);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F9D3A8").s().p("AgEAXQgIgFgEgMQgEgKACgKQACgJAHgDQAHgCAIAFQAHAHAEALQAEAKgCAKQgDAKgHACIgEABQgFAAgEgFg");
	this.shape_102.setTransform(220.75,229.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F9D3A8").s().p("AgEAYQgIgGgEgMQgEgKACgKQACgKAHgCQAHgCAHAGQAIAGAEALQAEAKgCAKQgCAKgHACIgEABQgFAAgFgEg");
	this.shape_103.setTransform(234.3133,207.2368);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F9D3A8").s().p("AAAAeQgKgFgIgMQgIgNgBgLQAAgNAIgFQAIgFALAFQALAFAIANQAIAMAAAMQABANgIAFQgEACgEAAQgFAAgHgDg");
	this.shape_104.setTransform(225.8015,203.9441);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F9D3A8").s().p("AAFAbQgKgEgJgJQgJgKgCgLQgCgLAHgGQAGgFALADQAJAEAJAKQAJAKACAKQACALgGAGQgFADgGAAIgGgBg");
	this.shape_105.setTransform(212.1415,194.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F9D3A8").s().p("AgKAUQgRgKgIgMQgIgNAGgIIACgDQAjAOAoAZQAAANgTABIgFAAQgPAAgLgHg");
	this.shape_106.setTransform(212.763,162.3113);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFECDA").s().p("AgKAWQgQgIgIgNQgIgNAFgIQAEgIAPgBQAPAAAOAIQAQAJAIAMQAIAMgEAJQgEAIgPABIgDAAQgOAAgNgIg");
	this.shape_107.setTransform(212.7705,162.0289);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F9D3A8").s().p("AgLAVQgOgJgGgLQgGgLAFgJQAFgJAOAAQANAAANAIQANAJAGALQAGALgFAJQgFAJgOAAIgBAAQgNAAgLgIg");
	this.shape_108.setTransform(208.9875,171.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B86B3D").s().p("AgtClQAIgbA0iKQAkhgAFgtQAHhJgdhXIgehHQBJBXAWBpQAKAxgeBaQgQAzgqBtQg/DPg7AvQAYhqAghmg");
	this.shape_109.setTransform(234.7016,216.575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CE7C42").s().p("AgfHTQgkgggrhcQgthqgSgnQgDgIgIgGQgHgHgFgBQAVgdAQg0QAihngThyQgQhbgyhTIgwhBQBogVAfg1QAPgbgFgXQC4BTBlCGQBGBcAPBbQAIAygcBXQgQAzgpBsQhVEThTAAQgVAAgWgTg");
	this.shape_110.setTransform(218.7651,207.3379);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DB8947").s().p("ApgGcQgKgggThRQgQhEgNgbIg9hyQgthVgJg+QgOhfgBiPIACh8IBLACQBmgCCHgUQAggFC5gvQCXgoCBgGQBqgFBlARQBxASBbAqQCfBJBqB9QBcBsANBdQAHAugcBVQgQAygpBtQhsFbhnhXQgkgegphaQgrhmgSgmQgJgUgOgHQgOgHgOAMQgpAngXAUQgoAigrAVQh0A6jaAAIhzgLQgugEgLAYQghBGgjAqQgmArgfABIgFAAQhYAAgrh/g");
	this.shape_111.setTransform(164.8362,205.3978);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F2A766").s().p("AGmD2QmjgmjghDQkOhPizhPIh9g/QAwgFBTgLQB0gRBCgRQAdgICmhBQC1g+CKgEQCQgFBOAMQCHAVBaBJQCKBxBXB/QBMBwAQBYQilgGjRgUg");
	this.shape_112.setTransform(164.875,171.5386);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B79077").s().p("AiYhFIAIiHIE1AFIgBCIQgJANgSARQgkAjgvAXQhdAogmAXQg+AngZBOQADh0AJieg");
	this.shape_113.setTransform(68.825,145.075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F9D3A8").s().p("AlTQSQgpgDgBgaQAAguANg3QA0jTAAkIQgEhcgEgrQg/gGhFgpQiOhQgniqQALgGARgOQAfgcAWgkQAYgpANgsIAHgjQhfhvgclCQgJhlgBhuIABhaICahsIgFBwQgECIACB4QAHF+A+BIICfgQQDAgQCjADQILAJAlDBQgmBThhBTQjEClkugIQAGgTAEggQALg/gBg9IgsgGQgYA8grA9QgoA4gEAMQggBigpDZQgrDkgTBCQgDAHgEArQgDAogJAUQgSAmgmAAIgHAAg");
	this.shape_114.setTransform(132.05,230.2136);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E0B88C").s().p("Ag8G6QgUgFASg5QAFgPAbhBQALgbAGgkQAGgsABhKQABjRgKiTQgFhNgOhuQAEgJAIgGQAQgKATATQAeAeAABaQAAD3ANC7QAGBfAIA+QADA5gCAdQgEAvgTAEQgTAEgNgHIgJgIIgWAVQgVAPgQAAIgIgBg");
	this.shape_115.setTransform(230.9383,355.6173);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFD9AF").s().p("AgcDSQAphQAMhFQALg9AGh6QAFhngBhaQAAgIAGgDQAHgDAIAGQAUAOAAAwQAACbgKCtQgFBWgRBTQgJAqgHAYQgLAVg6AFIg4AAQAIgaAyhcg");
	this.shape_116.setTransform(90.375,382.1471);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#E0B88C").s().p("AqTWeQgHgmAthPQA4hiAOhLQANhJAFinQAFiVgEg3QgHhEgCgkQgCg9AOg7QAeh2AOiYQANiPgGhsQgXAAgggCQhCgGgwgSQhigkhchcQh+h+AAiTQAAhCAWhWIAQAkQAUApAVAaQAdAjAhAUQhAiYgMmwQgEiHACiSIACh4IEPARIgCB6QgBCIADBJID2AoQEnAxD3AvQMXCWALBDQAJAxhDCFQhXCqgRA4QgdBhgUBeIgWByQgJAngMAKQgMAKgegKQgrgOgog4Qgqg7gbhXQgNgqgHhBQgGgygEgCQgDgBgKATQgRAigJAQQgzBVhWA2QiNBZjhASQhGAFhHgCIg4gDIgqDAQgwDWgiBoQgEAOgCA+QgHBJgfBIQgOAggRCxQgUDAALBNQAJBBgDA4QgCA6gOAWQgFAJgMgWQgIgRgBAUIgCA3IhiAXQgOAHgPAFQgLADgHAAQgNAAgBgKg");
	this.shape_117.setTransform(148.1479,274.037);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C89F7C").s().p("ApBWeIgWgVQgOAIgOAEQgeAJgDgQQgHglAuhQQA4hhANhMQANhIAGinQAFiWgEg2QgIhFgBgjQgDg9APg8QAdh3AOiBQAOh8gEhrQgdgCgkgFQhIgLgmgSQhegshPhVQhihqgiiGQgOg3ANhVIAPhLQgeiDAPlkIAVlKIE0AHIgBB5QgBCIACBJID2AoQEoAyD2AvQMXCWAMBCQAJA0gqB0Qg6ChgIAjQghCQgIBaQgIBTANA3QAKAtAmAwQAfAogCAkIgGBgQgFBYAACeQAAD5APC7QACAjAOB7QAHA/gHA3QgIA7gUAFQgUAFgXgZIgTgbQgKAHgNAHQgbANgSgFQgUgFASgzIAghKQALgaAFgkQAHgsAAhLQADjLgLijQgJiGgQhMQgQhLhYiIQhAhkhNiFIg/hzQh6CClCAoQhkANhtACIhZgBIgpC3QgvDJgbBbQgEAPgDA+QgHBIgfBJQgNAggSCwQgUDBALBMQAJBCgCA3QgCA6gOAWQgGAJgLgWQgJgRAAAUQgCBIgLAZQgGANgOAEIgIAAQgSAAgUgPg");
	this.shape_118.setTransform(148.1789,275.5922);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B29079").s().p("AAaBRQhSgmg1g3IgIhfIDrBcIgTB7QgfgIgqgTg");
	this.shape_119.setTransform(83.35,271.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EFC79C").s().p("Ag/FCIAAgQQADgeADgWQAEgUABgRQABglgSkKIgTkDICxA5Qg3HHABArQABBDgGAcQgHAmgqADIgIAAQgiAAgCgYg");
	this.shape_120.setTransform(80.75,296.99);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EFC79C").s().p("AhiEYQAxgyATgzQAZhDAUhRQAahlAMhgQAIg+AAgyIALgHQAMgEAJAUQALAYgJBjQgFBCgNBSQgLBEgdBgQgbBcgQAdg");
	this.shape_121.setTransform(68.5726,374.3734);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DBB086").s().p("AizKpQAugwASgwQAZhEAVhRQAahmAMhgQALhUgDhiIgDh2QACgdAEgXQADgUABgQQACgmgTkLIgTkDIDoBNIggDYQghDigFAvIACAtQABAbgFAjQgEAjgNAhIgOAqQgOBAgQBgQgRBpgFBEQgEArgEBqQgEBWgEAWQgJA2gZgtQgHgOgEAKIgKAhIgGARQgcgIhjgZg");
	this.shape_122.setTransform(77.1,333.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A98167").s().p("AikgJQARhWCGgWQBCgLBAAGIALAfQAPAnAWAuQgWAWgmAbQhKA4hKAaQg6hKg/g8g");
	this.shape_123.setTransform(171.625,271.3159);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C89F7B").s().p("AifFyQAggkAOgEQBHhOAnhiQAVg5AyiuQA8jOAShmQADgTANABQALABAHALQAKAUgBAgQgCA1gbBqQgvCyg/CcQg+CZgrAwQgfAhg2ALIgwAFQANgRAQgRg");
	this.shape_124.setTransform(167.7294,360.7724);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BA9172").s().p("Aj7KYQAZgWATgHQBIhOAmhiQAdhMA8jWQBHj8gEg8QgEhMhGh6QhQiJh7h4QAQhWCGgTQBEgKA+AIIAtBnQA5B4A6BTQAUAcAhAlQAUAhgPAtQgJAag7CAQg6B/gjBnQgpB8giB6QgdBlgMA5QgJA0gHAWQgJAZgJACQgGABgHgPQgHgPgHADQgFACgPAdQgUAmgXAbIikAGQAFgUAdgZg");
	this.shape_125.setTransform(177.0837,330.2096);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125,p:{scaleX:1,scaleY:1,x:177.0837,y:330.2096}},{t:this.shape_124,p:{scaleX:1,scaleY:1,x:167.7294,y:360.7724}},{t:this.shape_123,p:{scaleX:1,scaleY:1,x:171.625,y:271.3159}},{t:this.shape_122,p:{scaleX:1,scaleY:1,x:77.1,y:333.85}},{t:this.shape_121,p:{scaleX:1,scaleY:1,x:68.5726,y:374.3734}},{t:this.shape_120,p:{scaleX:1,scaleY:1,x:80.75,y:296.99}},{t:this.shape_119,p:{scaleX:1,scaleY:1,x:83.35,y:271.6}},{t:this.shape_118,p:{scaleX:1,scaleY:1,x:148.1789,y:275.5922}},{t:this.shape_117,p:{scaleX:1,scaleY:1,x:148.1479,y:274.037}},{t:this.shape_116,p:{scaleX:1,scaleY:1,x:90.375,y:382.1471}},{t:this.shape_115,p:{scaleX:1,scaleY:1,x:230.9383,y:355.6173}},{t:this.shape_114,p:{scaleX:1,scaleY:1,x:132.05,y:230.2136}},{t:this.shape_113,p:{scaleX:1,scaleY:1,x:68.825,y:145.075}},{t:this.shape_112,p:{scaleX:1,scaleY:1,x:164.875,y:171.5386}},{t:this.shape_111,p:{scaleX:1,scaleY:1,x:164.8362,y:205.3978}},{t:this.shape_110,p:{scaleX:1,scaleY:1,x:218.7651,y:207.3379}},{t:this.shape_109,p:{scaleX:1,scaleY:1,x:234.7016,y:216.575}},{t:this.shape_108,p:{scaleX:1,scaleY:1,x:208.9875,y:171.3}},{t:this.shape_107,p:{scaleX:1,scaleY:1,x:212.7705,y:162.0289}},{t:this.shape_106,p:{scaleX:1,scaleY:1,x:212.763,y:162.3113}},{t:this.shape_105,p:{scaleX:1,scaleY:1,x:212.1415,y:194.2}},{t:this.shape_104,p:{scaleX:1,scaleY:1,x:225.8015,y:203.9441}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:234.3133,y:207.2368}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:220.75,y:229.1}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:214.775,y:185.2844}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:228.2627,y:183.8667}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:223.075,y:218.509}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:143.525,y:218.498}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:148.2,y:168.5551}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:155.95,y:156.175}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:186.425,y:148.2112}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:178.3,y:147.9832}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:161.125,y:150.425}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:162.4,y:152.2318}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:150.3782,y:150.825}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:129.875,y:158.775}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:130.0286,y:159.085}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:106.15,y:163.425}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:106.15,y:163.725}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:124.425,y:173.35}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:123.754,y:162.6268}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:138.2012,y:168.625}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:101.975,y:200.375}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:92.2,y:179.188}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:105.3052,y:182.8315}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:145.5,y:201.85}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:126.975,y:191.2644}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:134.025,y:202.3858}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:109.525,y:227.8}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:118.9128,y:217.3995}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:118.9231,y:241.8237}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:122.25,y:233.9536}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:97.575,y:263.9}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:127.35,y:257.9}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:232.0798,y:396.0814}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:230.7806,y:394.8075}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:89.2029,y:416.5872}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:87.3833,y:415.058}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:157.15,y:398.075}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:155.4797,y:397.3781}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:232.1259,y:289.8}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:195.3129,y:297.525}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:108.775,y:175.2167}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:230.275,y:394.625}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:127.6143,y:236.625}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:168.2002,y:205.8289}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:170.934,y:181.225}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:162.5887,y:198.7}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:152.075,y:188.7488}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:183.475,y:181.675}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:186.2,y:164.5517}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:194.95,y:160.0861}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:179.05,y:190.6}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:169.5574,y:168.3272}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:187.65,y:203.9485}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:195.025,y:202.4}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:171.2871,y:215.723}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:170.925,y:226.3355}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:63.1813,y:405.1399}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:61.5126,y:404.4516}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:87.25,y:415.25}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:60.6,y:403.95}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:65.846,y:138.355}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:68.775,y:131.8673}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:33.1038,y:41.711}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:4.1027,y:7.4536}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:35.125,y:53.2179}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:49.925,y:53.0157}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:33.925,y:43.4487}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:109.156,y:41.71}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:108.3542,y:50.9429}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:86.425,y:55.47}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:122.6102,y:24.131}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:137.6,y:3.6156}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:110.079,y:43.2208}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:104.4338,y:77.1563}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:101.9214,y:80.979}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:97.1542,y:84.6665}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:37.1912,y:77.1593}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:39.6998,y:80.9625}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:44.5208,y:84.5665}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:70.792,y:109.5425}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:70.8062,y:102.9375}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:71.2,y:102.4417}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:90.0057,y:106.2881}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:51.458,y:106.2033}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:70.7676,y:92.159}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:50.2,y:105.75}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:91.0219,y:105.75}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:90.85,y:103.4}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:50.675,y:103.775}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:68.85,y:130.75}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:68.3674,y:112.4441}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:68.219,y:113.0157}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:67.9899,y:123.7752}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:67.8724,y:122.846}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:67.7933,y:124.125}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:67.9,y:120.225}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:73.8496,y:123.8041}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:61.7286,y:123.6837}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:67.8,y:119.575}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:71.2,y:85.25}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:61.625,y:81.725}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:80.681,y:75.825}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:18.1127,y:26.7895}},{t:this.shape,p:{scaleX:1,scaleY:1,x:48.8944,y:60.622}}]}).to({state:[{t:this.shape_125,p:{scaleX:0.7998,scaleY:0.7998,x:166.166,y:306.3698}},{t:this.shape_124,p:{scaleX:0.7998,scaleY:0.7998,x:158.6843,y:330.8141}},{t:this.shape_123,p:{scaleX:0.7998,scaleY:0.7998,x:161.8001,y:259.2663}},{t:this.shape_122,p:{scaleX:0.7998,scaleY:0.7998,x:86.1985,y:309.2814}},{t:this.shape_121,p:{scaleX:0.7998,scaleY:0.7998,x:79.3782,y:341.6922}},{t:this.shape_120,p:{scaleX:0.7998,scaleY:0.7998,x:89.1178,y:279.8006}},{t:this.shape_119,p:{scaleX:0.7998,scaleY:0.7998,x:91.1973,y:259.4936}},{t:this.shape_118,p:{scaleX:0.7998,scaleY:0.7998,x:143.0478,y:262.6865}},{t:this.shape_117,p:{scaleX:0.7998,scaleY:0.7998,x:143.0229,y:261.4427}},{t:this.shape_116,p:{scaleX:0.7998,scaleY:0.7998,x:96.8159,y:347.9096}},{t:this.shape_115,p:{scaleX:0.7998,scaleY:0.7998,x:209.2391,y:326.691}},{t:this.shape_114,p:{scaleX:0.7998,scaleY:0.7998,x:130.1478,y:226.3925}},{t:this.shape_113,p:{scaleX:0.7998,scaleY:0.7998,x:79.5802,y:158.2983}},{t:this.shape_112,p:{scaleX:0.7998,scaleY:0.7998,x:156.4014,y:179.464}},{t:this.shape_111,p:{scaleX:0.7998,scaleY:0.7998,x:156.3704,y:206.5447}},{t:this.shape_110,p:{scaleX:0.7998,scaleY:0.7998,x:199.503,y:208.0964}},{t:this.shape_109,p:{scaleX:0.7998,scaleY:0.7998,x:212.249,y:215.4843}},{t:this.shape_108,p:{scaleX:0.7998,scaleY:0.7998,x:191.6828,y:179.2731}},{t:this.shape_107,p:{scaleX:0.7998,scaleY:0.7998,x:194.7085,y:171.8581}},{t:this.shape_106,p:{scaleX:0.7998,scaleY:0.7998,x:194.7024,y:172.0839}},{t:this.shape_105,p:{scaleX:0.7998,scaleY:0.7998,x:194.2053,y:197.5887}},{t:this.shape_104,p:{scaleX:0.7998,scaleY:0.7998,x:205.1307,y:205.382}},{t:this.shape_103,p:{scaleX:0.7998,scaleY:0.7998,x:211.9385,y:208.0155}},{t:this.shape_102,p:{scaleX:0.7998,scaleY:0.7998,x:201.0905,y:225.5019}},{t:this.shape_101,p:{scaleX:0.7998,scaleY:0.7998,x:196.3116,y:190.4579}},{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:207.0992,y:189.324}},{t:this.shape_99,p:{scaleX:0.7998,scaleY:0.7998,x:202.95,y:217.0311}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:139.3256,y:217.0223}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:143.0647,y:177.0777}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:149.2631,y:167.1761}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:173.6372,y:160.8066}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:167.1388,y:160.6242}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:153.4021,y:162.5772}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:154.4219,y:164.0223}},{t:this.shape_91,p:{scaleX:0.7998,scaleY:0.7998,x:144.8068,y:162.8971}},{t:this.shape_90,p:{scaleX:0.7998,scaleY:0.7998,x:128.4082,y:169.2556}},{t:this.shape_89,p:{scaleX:0.7998,scaleY:0.7998,x:128.5311,y:169.5035}},{t:this.shape_88,p:{scaleX:0.7998,scaleY:0.7998,x:109.4329,y:172.9747}},{t:this.shape_87,p:{scaleX:0.7998,scaleY:0.7998,x:109.4329,y:173.2146}},{t:this.shape_86,p:{scaleX:0.7998,scaleY:0.7998,x:124.0493,y:180.9127}},{t:this.shape_85,p:{scaleX:0.7998,scaleY:0.7998,x:123.5126,y:172.3363}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:135.0676,y:177.1337}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:106.0937,y:202.5275}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:98.2756,y:185.582}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:108.7572,y:188.4961}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:140.9052,y:203.7072}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:126.0888,y:195.2408}},{t:this.shape_78,p:{scaleX:0.7998,scaleY:0.7998,x:131.7274,y:204.1357}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:112.1322,y:224.4621}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:119.6406,y:216.1438}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:119.6488,y:235.6783}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:122.3097,y:229.3838}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:102.5745,y:253.3351}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:126.3887,y:248.5362}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:210.1521,y:359.0543}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:209.113,y:358.0355}},{t:this.shape_69,p:{scaleX:0.7998,scaleY:0.7998,x:95.8785,y:375.455}},{t:this.shape_68,p:{scaleX:0.7998,scaleY:0.7998,x:94.4232,y:374.2319}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:150.2229,y:360.6489}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:148.887,y:360.0915}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:210.189,y:274.05}},{t:this.shape_64,p:{scaleX:0.7998,scaleY:0.7998,x:180.7458,y:280.2285}},{t:this.shape_63,p:{scaleX:0.7998,scaleY:0.7998,x:111.5324,y:182.4057}},{t:this.shape_62,p:{scaleX:0.7998,scaleY:0.7998,x:208.7086,y:357.8895}},{t:this.shape_61,p:{scaleX:0.7998,scaleY:0.7998,x:126.6001,y:231.5204}},{t:this.shape_60,p:{scaleX:0.7998,scaleY:0.7998,x:159.0609,y:206.8895}},{t:this.shape_59,p:{scaleX:0.7998,scaleY:0.7998,x:161.2474,y:187.2112}},{t:this.shape_58,p:{scaleX:0.7998,scaleY:0.7998,x:154.5728,y:201.1878}},{t:this.shape_57,p:{scaleX:0.7998,scaleY:0.7998,x:146.1639,y:193.2288}},{t:this.shape_56,p:{scaleX:0.7998,scaleY:0.7998,x:171.2778,y:187.5711}},{t:this.shape_55,p:{scaleX:0.7998,scaleY:0.7998,x:173.4572,y:173.8758}},{t:this.shape_54,p:{scaleX:0.7998,scaleY:0.7998,x:180.4555,y:170.3042}},{t:this.shape_53,p:{scaleX:0.7998,scaleY:0.7998,x:167.7386,y:194.7094}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:160.1464,y:176.8955}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:174.6169,y:205.3856}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:180.5155,y:204.1471}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:161.5299,y:214.8028}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:161.2402,y:223.2908}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:75.0663,y:366.2994}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:73.7317,y:365.7489}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:94.3166,y:374.3855}},{t:this.shape_44,p:{scaleX:0.7998,scaleY:0.7998,x:73.0018,y:365.3477}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:77.2223,y:152.9487}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:79.5651,y:147.7594}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:51.033,y:75.6465}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:27.8359,y:48.2451}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:52.6496,y:84.8504}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:64.4876,y:84.6887}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:51.6898,y:77.0364}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:111.8645,y:75.6457}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:111.2231,y:83.0308}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:93.6827,y:86.6518}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:122.626,y:61.5848}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:134.6159,y:45.1753}},{t:this.shape_31,p:{scaleX:0.7999,scaleY:0.7999,x:112.6028,y:76.8542}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:108.0602,y:103.9765}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:106.0508,y:107.034}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:102.238,y:109.9833}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:54.2793,y:103.979}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:56.2857,y:107.0208}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:60.1416,y:109.9033}},{t:this.shape_24,p:{scaleX:0.7999,scaleY:0.7999,x:81.1784,y:129.9026}},{t:this.shape_23,p:{scaleX:0.7999,scaleY:0.7999,x:81.1898,y:124.6195}},{t:this.shape_22,p:{scaleX:0.7999,scaleY:0.7999,x:81.5048,y:124.2229}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:96.5468,y:127.2995}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:65.7139,y:127.2317}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:81.1589,y:115.9981}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:64.7076,y:126.8691}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:97.3597,y:126.8691}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:97.2221,y:124.9894}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:65.0875,y:125.2894}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:79.6001,y:146.8411}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:79.2391,y:132.2234}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:79.1204,y:132.6807}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:78.9371,y:141.2869}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:78.8432,y:140.5436}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:78.755,y:141.5424}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:78.8403,y:138.4231}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:83.5988,y:141.2857}},{t:this.shape_6,p:{scaleX:0.7998,scaleY:0.7998,x:73.9044,y:141.1894}},{t:this.shape_5,p:{scaleX:0.7998,scaleY:0.7998,x:78.7604,y:137.9033}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:81.5048,y:110.4718}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:73.8461,y:107.6523}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:89.0883,y:102.9331}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:39.0421,y:63.7113}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:63.6633,y:90.7727}}]},1).to({state:[{t:this.shape_125,p:{scaleX:0.7998,scaleY:0.7998,x:166.166,y:306.3698}},{t:this.shape_124,p:{scaleX:0.7998,scaleY:0.7998,x:158.6843,y:330.8141}},{t:this.shape_123,p:{scaleX:0.7998,scaleY:0.7998,x:161.8001,y:259.2663}},{t:this.shape_122,p:{scaleX:0.7998,scaleY:0.7998,x:86.1985,y:309.2814}},{t:this.shape_121,p:{scaleX:0.7998,scaleY:0.7998,x:79.3782,y:341.6922}},{t:this.shape_120,p:{scaleX:0.7998,scaleY:0.7998,x:89.1178,y:279.8006}},{t:this.shape_119,p:{scaleX:0.7998,scaleY:0.7998,x:91.1973,y:259.4936}},{t:this.shape_118,p:{scaleX:0.7998,scaleY:0.7998,x:143.0478,y:262.6865}},{t:this.shape_117,p:{scaleX:0.7998,scaleY:0.7998,x:143.0229,y:261.4427}},{t:this.shape_116,p:{scaleX:0.7998,scaleY:0.7998,x:96.8159,y:347.9096}},{t:this.shape_115,p:{scaleX:0.7998,scaleY:0.7998,x:209.2391,y:326.691}},{t:this.shape_114,p:{scaleX:0.7998,scaleY:0.7998,x:130.1478,y:226.3925}},{t:this.shape_113,p:{scaleX:0.7998,scaleY:0.7998,x:79.5802,y:158.2983}},{t:this.shape_112,p:{scaleX:0.7998,scaleY:0.7998,x:156.4014,y:179.464}},{t:this.shape_111,p:{scaleX:0.7998,scaleY:0.7998,x:156.3704,y:206.5447}},{t:this.shape_110,p:{scaleX:0.7998,scaleY:0.7998,x:199.503,y:208.0964}},{t:this.shape_109,p:{scaleX:0.7998,scaleY:0.7998,x:212.249,y:215.4843}},{t:this.shape_108,p:{scaleX:0.7998,scaleY:0.7998,x:191.6828,y:179.2731}},{t:this.shape_107,p:{scaleX:0.7998,scaleY:0.7998,x:194.7085,y:171.8581}},{t:this.shape_106,p:{scaleX:0.7998,scaleY:0.7998,x:194.7024,y:172.0839}},{t:this.shape_105,p:{scaleX:0.7998,scaleY:0.7998,x:194.2053,y:197.5887}},{t:this.shape_104,p:{scaleX:0.7998,scaleY:0.7998,x:205.1307,y:205.382}},{t:this.shape_103,p:{scaleX:0.7998,scaleY:0.7998,x:211.9385,y:208.0155}},{t:this.shape_102,p:{scaleX:0.7998,scaleY:0.7998,x:201.0905,y:225.5019}},{t:this.shape_101,p:{scaleX:0.7998,scaleY:0.7998,x:196.3116,y:190.4579}},{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:207.0992,y:189.324}},{t:this.shape_99,p:{scaleX:0.7998,scaleY:0.7998,x:202.95,y:217.0311}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:139.3256,y:217.0223}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:143.0647,y:177.0777}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:149.2631,y:167.1761}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:173.6372,y:160.8066}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:167.1388,y:160.6242}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:153.4021,y:162.5772}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:154.4219,y:164.0223}},{t:this.shape_91,p:{scaleX:0.7998,scaleY:0.7998,x:144.8068,y:162.8971}},{t:this.shape_90,p:{scaleX:0.7998,scaleY:0.7998,x:128.4082,y:169.2556}},{t:this.shape_89,p:{scaleX:0.7998,scaleY:0.7998,x:128.5311,y:169.5035}},{t:this.shape_88,p:{scaleX:0.7998,scaleY:0.7998,x:109.4329,y:172.9747}},{t:this.shape_87,p:{scaleX:0.7998,scaleY:0.7998,x:109.4329,y:173.2146}},{t:this.shape_86,p:{scaleX:0.7998,scaleY:0.7998,x:124.0493,y:180.9127}},{t:this.shape_85,p:{scaleX:0.7998,scaleY:0.7998,x:123.5126,y:172.3363}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:135.0676,y:177.1337}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:106.0937,y:202.5275}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:98.2756,y:185.582}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:108.7572,y:188.4961}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:140.9052,y:203.7072}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:126.0888,y:195.2408}},{t:this.shape_78,p:{scaleX:0.7998,scaleY:0.7998,x:131.7274,y:204.1357}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:112.1322,y:224.4621}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:119.6406,y:216.1438}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:119.6488,y:235.6783}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:122.3097,y:229.3838}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:102.5745,y:253.3351}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:126.3887,y:248.5362}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:210.1521,y:359.0543}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:209.113,y:358.0355}},{t:this.shape_69,p:{scaleX:0.7998,scaleY:0.7998,x:95.8785,y:375.455}},{t:this.shape_68,p:{scaleX:0.7998,scaleY:0.7998,x:94.4232,y:374.2319}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:150.2229,y:360.6489}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:148.887,y:360.0915}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:210.189,y:274.05}},{t:this.shape_64,p:{scaleX:0.7998,scaleY:0.7998,x:180.7458,y:280.2285}},{t:this.shape_63,p:{scaleX:0.7998,scaleY:0.7998,x:111.5324,y:182.4057}},{t:this.shape_62,p:{scaleX:0.7998,scaleY:0.7998,x:208.7086,y:357.8895}},{t:this.shape_61,p:{scaleX:0.7998,scaleY:0.7998,x:126.6001,y:231.5204}},{t:this.shape_60,p:{scaleX:0.7998,scaleY:0.7998,x:159.0609,y:206.8895}},{t:this.shape_59,p:{scaleX:0.7998,scaleY:0.7998,x:161.2474,y:187.2112}},{t:this.shape_58,p:{scaleX:0.7998,scaleY:0.7998,x:154.5728,y:201.1878}},{t:this.shape_57,p:{scaleX:0.7998,scaleY:0.7998,x:146.1639,y:193.2288}},{t:this.shape_56,p:{scaleX:0.7998,scaleY:0.7998,x:171.2778,y:187.5711}},{t:this.shape_55,p:{scaleX:0.7998,scaleY:0.7998,x:173.4572,y:173.8758}},{t:this.shape_54,p:{scaleX:0.7998,scaleY:0.7998,x:180.4555,y:170.3042}},{t:this.shape_53,p:{scaleX:0.7998,scaleY:0.7998,x:167.7386,y:194.7094}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:160.1464,y:176.8955}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:174.6169,y:205.3856}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:180.5155,y:204.1471}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:161.5299,y:214.8028}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:161.2402,y:223.2908}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:75.0663,y:366.2994}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:73.7317,y:365.7489}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:94.3166,y:374.3855}},{t:this.shape_44,p:{scaleX:0.7998,scaleY:0.7998,x:73.0018,y:365.3477}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:77.2223,y:152.9487}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:79.5651,y:147.7594}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:51.033,y:75.6465}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:27.8359,y:48.2451}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:52.6496,y:84.8504}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:64.4876,y:84.6887}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:51.6898,y:77.0364}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:111.8645,y:75.6457}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:111.2231,y:83.0308}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:93.6827,y:86.6518}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:122.626,y:61.5848}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:134.6159,y:45.1753}},{t:this.shape_31,p:{scaleX:0.7999,scaleY:0.7999,x:112.6028,y:76.8542}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:108.0602,y:103.9765}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:106.0508,y:107.034}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:102.238,y:109.9833}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:54.2793,y:103.979}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:56.2857,y:107.0208}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:60.1416,y:109.9033}},{t:this.shape_24,p:{scaleX:0.7999,scaleY:0.7999,x:81.1784,y:129.9026}},{t:this.shape_23,p:{scaleX:0.7999,scaleY:0.7999,x:81.1898,y:124.6195}},{t:this.shape_22,p:{scaleX:0.7999,scaleY:0.7999,x:81.5048,y:124.2229}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:96.5468,y:127.2995}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:65.7139,y:127.2317}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:81.1589,y:115.9981}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:64.7076,y:126.8691}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:97.3597,y:126.8691}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:97.2221,y:124.9894}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:65.0875,y:125.2894}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:79.6001,y:146.8411}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:79.2391,y:132.2234}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:79.1204,y:132.6807}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:78.9371,y:141.2869}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:78.8432,y:140.5436}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:78.755,y:141.5424}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:78.8403,y:138.4231}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:83.5988,y:141.2857}},{t:this.shape_6,p:{scaleX:0.7998,scaleY:0.7998,x:73.9044,y:141.1894}},{t:this.shape_5,p:{scaleX:0.7998,scaleY:0.7998,x:78.7604,y:137.9033}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:81.5048,y:110.4718}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:73.8461,y:107.6523}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:89.0883,y:102.9331}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:39.0421,y:63.7113}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:63.6633,y:90.7727}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,244.9,422.9);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		*/
		
		this.stop();
	}
	this.frame_101 = function() {
		/* stop();
		_root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(100).call(this.frame_101).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.sound();
	this.instance_1.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_24 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(134.8,34.8,1,1,0,0,0,82.8,82.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:82.8,y:82.8,alpha:0},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-48,217.7,213.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();
		*/
		
		this.stop();
	}
	this.frame_24 = function() {
		/* stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(108.8,83.7,1,1,0,0,0,108.8,83.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.7,167.4);


// stage content:
(lib.jungle7 = function(mode,startPosition,loop) {
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
		 
		/* fscommand("fullscreen", "true");*/
		
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
			this.correct1.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {	
			this.wrong.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.correct2.play();
			var my3=createjs.Sound.createInstance("yes");
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

	// Layer_4
	this.b8 = new lib.Symbol6_1();
	this.b8.name = "b8";
	this.b8.setTransform(1266.1,111.75,1.821,2.2072,0,0,0,49,40.8);
	new cjs.ButtonHelper(this.b8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.b8).wait(1));

	// Layer_3
	this.cor_sound = new lib.Symbol18();
	this.cor_sound.name = "cor_sound";
	this.cor_sound.setTransform(2060.45,400.05,1,1,0,0,0,20,8);

	this.wro_sound = new lib.Symbol20();
	this.wro_sound.name = "wro_sound";
	this.wro_sound.setTransform(1986.45,268.1,1,1,0,0,0,0,8);

	this.instance = new lib.Symbol16();
	this.instance.setTransform(-96.05,40,1,1,0,0,0,20,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.wro_sound},{t:this.cor_sound}]}).wait(1));

	// Layer_2
	this.correct2 = new lib.Symbol4();
	this.correct2.name = "correct2";
	this.correct2.setTransform(1487,820.2,1,1,0,0,0,108.8,83.7);

	this.wrong = new lib.Symbol7();
	this.wrong.name = "wrong";
	this.wrong.setTransform(997.25,903.35,1,1,0,0,0,82.8,82.8);

	this.correct1 = new lib.Symbol4();
	this.correct1.name = "correct1";
	this.correct1.setTransform(430.05,800.2,1,1,0,0,0,108.8,83.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape.setTransform(283.4166,79.1272,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(178.6558,109.0625,0.64,0.64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(178.6912,109.0449,0.64,0.64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(165.3121,110.7744,0.64,0.64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(165.2993,110.7264,0.64,0.64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(161.579,101.6426,0.64,0.64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(161.5686,101.6905,0.64,0.64);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(160.3863,107.2709,0.64,0.64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(160.3264,107.1078,0.64,0.64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(165.5871,111.0464,0.64,0.64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(165.5713,110.9824,0.64,0.64);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(161.8332,101.9146,0.64,0.64);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(161.8267,101.9465,0.64,0.64);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(160.6263,107.5436,0.64,0.64);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(160.5943,107.3949,0.64,0.64);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(152.8439,93.9269,0.64,0.64);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(142.5241,108.2465,0.64,0.64);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(153.6438,121.5582,0.64,0.64);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(146.492,113.1584,0.64,0.64);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(145.788,103.1426,0.64,0.64);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(152.7959,93.7509,0.64,0.64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(146.188,96.3908,0.64,0.64);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(146.972,119.3822,0.64,0.64);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(246.2816,101.9427,0.64,0.64);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(280.4567,89.839,0.64,0.64);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(279.0807,95.4842,0.64,0.64);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(276.7448,95.1002,0.64,0.64);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(279.6567,93.8149,0.64,0.64);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(277.9128,93.0949,0.64,0.64);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(273.1609,86.2311,0.64,0.64);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(275.5186,85.3751,0.64,0.64);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(277.8648,85.3875,0.64,0.64);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(277.8968,87.191,0.64,0.64);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(277.6568,87.175,0.64,0.64);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(279.6727,86.791,0.64,0.64);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(277.5128,86.4532,0.64,0.64);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(274.2009,87.079,0.64,0.64);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(273.7529,88.823,0.64,0.64);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(272.2391,87.7586,0.64,0.64);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(280.2967,85.7107,0.64,0.64);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(281.5092,90.8709,0.64,0.64);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(275.0688,97.5748,0.64,0.64);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(274.7328,95.8019,0.64,0.64);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(274.3115,92.9424,0.64,0.64);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(279.0327,94.2869,0.64,0.64);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(279.8487,87.399,0.64,0.64);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(279.4967,87.287,0.64,0.64);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(279.2087,87.335,0.64,0.64);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(278.1208,87.335,0.64,0.64);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(277.3848,87.335,0.64,0.64);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(279.6087,89.207,0.64,0.64);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(277.8248,89.335,0.64,0.64);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(277.7048,88.663,0.64,0.64);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(277.7208,88.6775,0.64,0.64);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(273.7849,90.7589,0.64,0.64);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(275.4218,101.4147,0.64,0.64);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(275.3368,99.6707,0.64,0.64);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(276.1848,113.6665,0.64,0.64);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(276.2141,111.0594,0.64,0.64);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(276.0894,108.5634,0.64,0.64);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(275.5475,105.9926,0.64,0.64);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(275.4808,103.3677,0.64,0.64);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(277.0452,98.7787,0.64,0.64);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(277.0416,98.7427,0.64,0.64);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(273.4675,98.0068,0.64,0.64);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(271.65,107.4231,0.64,0.64);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(198.4915,85.4649,0.64,0.64);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(256.3773,86.935,0.64,0.64);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(252.7,97.7828,0.64,0.64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(251.6915,109.2029,0.64,0.64);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(243.6916,104.8119,0.64,0.64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(243.9776,100.4032,0.64,0.64);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(244.8995,102.8634,0.64,0.64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(246.4095,99.8175,0.64,0.64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(247.1295,96.6048,0.64,0.64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(247.7695,93.9296,0.64,0.64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(243.9136,110.4605,0.64,0.64);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(244.6976,107.1773,0.64,0.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(245.4816,103.6574,0.64,0.64);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(240.6977,114.9793,0.64,0.64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(247.1455,90.9365,0.64,0.64);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(243.4016,102.9986,0.64,0.64);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(243.3856,102.9666,0.64,0.64);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(240.5697,114.9823,0.64,0.64);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(240.5712,114.9807,0.64,0.64);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(247.1295,90.8951,0.64,0.64);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(247.1455,90.9029,0.64,0.64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(244.3674,104.4886,0.64,0.64);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(244.3456,104.4306,0.64,0.64);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(198.3787,82.2494,0.64,0.64);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(203.5032,87.9395,0.64,0.64);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(200.2667,84.0391,0.64,0.64);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(198.603,83.7831,0.64,0.64);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(196.5708,84.1831,0.64,0.64);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(196.5548,84.1671,0.64,0.64);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(198.7635,89.4957,0.64,0.64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(197.3068,88.919,0.64,0.64);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(198.5974,88.551,0.64,0.64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(200.0267,87.815,0.64,0.64);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(197.3068,87.911,0.64,0.64);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(200.0267,87.783,0.64,0.64);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(197.3228,87.895,0.64,0.64);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(199.9734,87.5942,0.64,0.64);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(197.2444,87.596,0.64,0.64);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(200.132,86.8124,0.64,0.64);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(197.0401,86.9958,0.64,0.64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(198.5048,87.23,0.64,0.64);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgUiSIADA/IgBANIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAg2g7IAAACIAkgNgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(226.81,105.2226,0.64,0.64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(226.778,105.2546,0.64,0.64);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(213.7224,108.7265,0.64,0.64);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(213.7211,108.7409,0.64,0.64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(260.8892,98.9027,0.64,0.64);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(260.8732,98.9027,0.64,0.64);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(261.1132,109.2225,0.64,0.64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(261.1132,109.2545,0.64,0.64);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(188.443,98.9027,0.64,0.64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(188.427,98.9027,0.64,0.64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(188.667,109.2225,0.64,0.64);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(188.667,109.2545,0.64,0.64);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(164.6836,110.4139,0.64,0.64);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(164.1577,101.3613,0.64,0.64);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(212.0744,96.6628,0.64,0.64);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(215.7863,96.4228,0.64,0.64);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(198.2027,91.3669,0.64,0.64);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(198.3627,98.6467,0.64,0.64);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(198.3947,97.2868,0.64,0.64);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(198.4427,96.0388,0.64,0.64);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(198.5033,93.4468,0.64,0.64);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(204.3786,107.3185,0.64,0.64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(193.4829,106.6945,0.64,0.64);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(205.6114,108.3768,0.64,0.64);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(192.3621,107.494,0.64,0.64);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(194.3146,92.7269,0.64,0.64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(192.6274,88.1745,0.64,0.64);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(192.5954,88.1895,0.64,0.64);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(198.492,95.7508,0.64,0.64);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(198.4882,95.7028,0.64,0.64);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(202.173,93.5482,0.64,0.64);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(203.3626,96.7788,0.64,0.64);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(203.3626,96.8108,0.64,0.64);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(198.4747,93.5653,0.64,0.64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(198.6832,103.8215,0.64,0.64);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(199.7867,109.9745,0.64,0.64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(199.8027,111.2544,0.64,0.64);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(170.1554,120.7102,0.64,0.64);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(161.9796,124.2941,0.64,0.64);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(172.2194,95.9108,0.64,0.64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(163.0196,90.439,0.64,0.64);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(157.9157,127.174,0.64,0.64);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(157.7077,87.991,0.64,0.64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(168.2675,125.5741,0.64,0.64);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(169.5315,89.735,0.64,0.64);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(142.7801,108.4385,0.64,0.64);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(178.9952,109.3825,0.64,0.64);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(179.0283,109.3649,0.64,0.64);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(165.5902,111.1434,0.64,0.64);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(165.6353,111.0464,0.64,0.64);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(161.9072,102.5565,0.64,0.64);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(161.9072,101.9943,0.64,0.64);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(160.7498,107.4278,0.64,0.64);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(160.6784,107.4278,0.64,0.64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(153.7398,121.6222,0.64,0.64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(146.652,113.2384,0.64,0.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(145.996,103.4626,0.64,0.64);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(153.1639,94.2469,0.64,0.64);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(146.748,97.0788,0.64,0.64);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(147.228,119.3822,0.64,0.64);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(246.6175,102.2627,0.64,0.64);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(280.8887,90.062,0.64,0.64);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(277.0094,95.4625,0.64,0.64);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(280.0543,94.172,0.64,0.64);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(278.3001,93.5412,0.64,0.64);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(273.6089,86.5031,0.64,0.64);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(275.8706,85.5719,0.64,0.64);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(278.0661,85.5454,0.64,0.64);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(278.2328,87.511,0.64,0.64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(278.0088,87.495,0.64,0.64);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(277.9116,86.7384,0.64,0.64);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(274.6952,87.2215,0.64,0.64);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(274.1045,89.1575,0.64,0.64);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(272.6058,88.0927,0.64,0.64);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(280.688,86.0128,0.64,0.64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(281.9253,91.1774,0.64,0.64);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(275.4136,97.8811,0.64,0.64);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(275.0848,96.1217,0.64,0.64);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(274.6475,93.2624,0.64,0.64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(279.3847,94.5669,0.64,0.64);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(280.2007,87.703,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(279.8327,87.607,0.64,0.64);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(279.5287,87.639,0.64,0.64);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(278.4568,87.639,0.64,0.64);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(277.7208,87.639,0.64,0.64);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(279.9474,89.527,0.64,0.64);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(278.1688,89.655,0.64,0.64);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(274.1323,91.0789,0.64,0.64);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(275.7639,101.7352,0.64,0.64);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(275.6728,99.9907,0.64,0.64);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(276.5368,113.9705,0.64,0.64);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(276.5519,111.3664,0.64,0.64);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(276.4254,108.8834,0.64,0.64);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(275.8941,106.3106,0.64,0.64);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(275.8328,103.6877,0.64,0.64);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(277.2707,98.9619,0.64,0.64);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(277.2816,98.9187,0.64,0.64);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(273.8009,98.3268,0.64,0.64);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(271.9891,107.743,0.64,0.64);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(247.7855,87.047,0.64,0.64);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(253.0311,98.1028,0.64,0.64);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(251.3084,109.3205,0.64,0.64);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(244.0279,105.1319,0.64,0.64);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(244.3296,100.7231,0.64,0.64);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(245.2358,103.1834,0.64,0.64);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(246.8649,100.1056,0.64,0.64);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(245.9369,103.9455,0.64,0.64);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(240.6197,115.2833,0.64,0.64);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(247.4495,90.9527,0.64,0.64);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(243.7056,103.3026,0.64,0.64);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(243.7216,103.2866,0.64,0.64);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(240.8257,115.2653,0.64,0.64);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(240.8912,115.3896,0.64,0.64);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(247.5135,91.0868,0.64,0.64);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(247.3875,90.8949,0.64,0.64);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(244.6743,104.6256,0.64,0.64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(244.6656,104.7426,0.64,0.64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(227.146,105.5426,0.64,0.64);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(227.13,105.5586,0.64,0.64);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(214.0583,109.0465,0.64,0.64);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(214.0731,109.0609,0.64,0.64);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(261.2252,99.2227,0.64,0.64);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(261.2092,99.2227,0.64,0.64);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(261.4492,109.5425,0.64,0.64);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(261.4492,109.5585,0.64,0.64);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIAAgDIACACIgCABIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHgAAJAKg");
	this.shape_250.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(189.003,109.5425,0.64,0.64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(189.003,109.5585,0.64,0.64);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(165.0196,110.7339,0.64,0.64);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(164.4937,101.6733,0.64,0.64);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(212.4104,96.9828,0.64,0.64);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(216.1223,96.7428,0.64,0.64);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(200.1387,110.2945,0.64,0.64);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(200.1387,111.5744,0.64,0.64);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(170.3794,120.9502,0.64,0.64);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(162.1236,124.5981,0.64,0.64);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(172.2514,96.2308,0.64,0.64);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(163.2276,90.7429,0.64,0.64);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(157.9317,127.478,0.64,0.64);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(157.9957,88.295,0.64,0.64);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(168.5235,125.9261,0.64,0.64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(169.5315,90.055,0.64,0.64);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(246.2176,124.7421,0.64,0.64);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(246.2336,124.7101,0.64,0.64);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(211.0504,124.0381,0.64,0.64);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(211.0664,124.0381,0.64,0.64);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(256.1533,136.882,0.64,0.64);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(192.9069,134.5339,0.64,0.64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(213.6884,110.5691,0.64,0.64);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(213.9707,110.8612,0.64,0.64);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(213.9944,110.5345,0.64,0.64);

	this.instance_1 = new lib.BRIGHTEDGELOGO();
	this.instance_1.setTransform(1424,56,0.25,0.25);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgYAVQgLgKAAgLQAAgKALgKQAKgJAPAAQAPAAAKAJQAKAJAAALQAAAMgKAJQgLAJgOAAQgPAAgKgJg");
	this.shape_277.setTransform(1122.15,120.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("Ag+BzQgggMAAgYQAAgWAZAAQALAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA3AAQAWAAALAGQAOAIAAAUQAAAogVAAQgVAAgFgSIgSgCQg0AAAAAPQAAAIAfAPQArAUAPALQAhAWAAAdQgBAmgiATQgdAQgoAAQgeAAgYgJg");
	this.shape_278.setTransform(1101.3,110.025);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_279.setTransform(1084.275,103.95);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg1AAgagdQgagcgBg4QABg0AmgmQAngmA2AAQAVAAAbAMQAiAOgBATQABAIgGAGIgDAWIgBAeQAAApAGASIAKAXQAJASAAADQgBAMgIAHQgKAIgLAAQgKAAgWgUgAgfgsQgWAYAAAdQAAAeAKAPQALAPAWAAQAMAAAMgFQAMgEALgJQgHg0AAgZIABgRIAEgUIgIgDIgGgBQgdAAgXAXg");
	this.shape_280.setTransform(1066,110.225);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgTCAQgIgJAAgNQAAgZgGgwQgFgwAAgZQAAgOgDgJQgZAQgaAiIgDAEIgBBFIgBARIAAAPQAAAMgKAHQgJAGgNAAQgSAAgHgQQgFgLAAgYIAAhRIAAggIgBggQAAgUAHgPQAIgVAQAAQAMAAAKALQAKAIAAAMIgCATQAhgmAdAAQAiAAAPAaQANgMARgGQAQgHATABQArgBAPAsQADAIAHAzQAGAiAKBTQAAANgJAJQgJAHgNABQgZAAgFgZQgEgYgEgoQgEgtgDgTQgGgngJAAQgFAAgSAKQgSAKgJAHQAAAaAGAtQAGAxAAAXQAAANgIAJQgJAHgNABQgMgBgJgHg");
	this.shape_281.setTransform(1036.3013,110.25);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_282.setTransform(1012.625,104.975);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAtBlIgGgtQgDgYgBgWIABgSIABgUIAAgIIABgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgIAJQgKAIgNAAQgNAAgIgIQgJgJAAgNIgBgSIgBgUQAAgVADgmQACgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAdAAACAjIAAACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAEAbAAARQAAANgIAIQgJAIgNAAQgbAAgDgbg");
	this.shape_283.setTransform(994.3,109.875);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg1AAgagdQgbgcAAg4QAAg0AngmQAngmA2AAQAVAAAbAMQAiAOAAATQAAAIgGAGIgDAWIgBAeQAAApAGASIAKAXQAJASgBADQAAAMgJAHQgIAIgMAAQgKAAgWgUgAgfgsQgWAYAAAdQAAAeALAPQALAPAUAAQANAAAMgFQANgEAKgJQgGg0gBgZIABgRIAEgUIgIgDIgGgBQgdAAgXAXg");
	this.shape_284.setTransform(969.95,110.225);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_285.setTransform(924.875,110.125);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_286.setTransform(906.275,103.95);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AhwCNQAAgNAHgHQAIgIANABQAJAAATAEQASADAPAAQAfAAAQgUQAPgUADgqQgMALgOAGQgOAFgPABQgsAAgbgcQgcgdAAgrQAAg8AlglQAlgmBAAAQAUAAAPAEQAPAGAKAKQAbADAAAeQAAAOgEAbQgJAzgCA4QgCBHgWAhQgdAqhIAAQhVAAAAghgAghhjQgTAWAAAjQAAAaAKAOQAKAMAUAAQARAAASgUQARgUADgTQAEgVAFgtQgHgEgHgCQgIgCgGgBQglABgUAYg");
	this.shape_287.setTransform(888.125,116.05);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAtBlIgGgtQgDgYgBgWIABgSIABgUIAAgIIABgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgJAJQgIAIgNAAQgOAAgIgIQgJgJAAgNIgBgSIgCgUQAAgVAEgmQACgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAcAAADAjIAAACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAEAbABARQAAANgJAIQgJAIgNAAQgbAAgDgbg");
	this.shape_288.setTransform(864.95,109.875);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAsBtQgcAKgdAAQgfAAgVgNQgYgPgFgdQgJg2AAgrQAAgcAHglQAEgYAaAAQAMAAAJAIQAJAIAAAMQAAAKgDAUQgDAVAAAKQAAAfACAWQACAXAEAPIALAEIAKABQAXAAAegHIgBgmIAAgkQAAgtAEghQADgaAbAAQANAAAJAIQAJAIAAAMIgEBOIAAArIAAAtIABANIABAOQAAAMgJAIQgJAIgNAAQgSAAgJgQg");
	this.shape_289.setTransform(841.0763,110.325);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AhPCbQgDgHAAgHQAAgMAKgJQAJgIAMAAQAOAAALAPIAQAdQAJAPAJAAQALAAADgfQAAgXgIhjQgHhiAAgSQAAgNAIgLQAJgMAOAAQAKAAAKAHQALAIAAAJIAIB5QAGBrAAAYQAAAggUAaQgXAeggAAQg1AAgihLgAAIitQgJgJAAgOQAAgOAJgJQAKgKAOAAQAOAAALAKQAKAJAAAOQAAAOgKAJQgLAKgOAAQgOAAgKgKg");
	this.shape_290.setTransform(818.425,111.225);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_291.setTransform(779.025,110.125);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_292.setTransform(754.175,104.175);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgDAAgaQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA4IAAASQANgDAJAAQAZAAAKAEQARAFAAAWQAAAMgIAIQgJAJgNAAIgLAAIgLgBIgVABQAEBZAAAbIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_293.setTransform(730.225,106.45);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AhBCqQgJgIAAgNQAAgUAuhlQgYgug0hdIgKgRQgHgKABgIQAAgMAJgJQAJgJAMAAQAPAAAIAKQAgAqAoBTIAcg+QAQghAPgZQAKgQAQAAQAMAAAKAJQAKAIAAAMQgBAGgDAIIhMCcQgcA5gOAmIgOAoQgIAVgUAAQgNAAgKgIg");
	this.shape_294.setTransform(687.5,116.025);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_295.setTransform(668.875,103.95);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYABgWIABgSIAAgUIABgIIAAgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgCATIgBATQAAANgJAJQgIAIgNAAQgOAAgJgIQgIgJAAgNIgBgSIgCgUQAAgVADgmQAEgmAAgVIgBgUIgBgUQAAgMAJgJQAJgIANAAQAdAAABAjIABACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAFAbAAARQAAANgJAIQgJAIgNAAQgbAAgDgbg");
	this.shape_296.setTransform(651.45,109.875);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AhIBdQgggfgBgzQgCgvAcgnQAigsA6gBQAsAAAaAkQAXAgAAAuQAAAygbAlQgeAogzAAQgogBgegbgAgfglQgNAVAAAbQAAAaAPAOQALAMAQAAQASAAAOgOQAQgPACgZQAChGgoAAQgaAAgPAYg");
	this.shape_297.setTransform(627.3212,110.35);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAzCkQgLgUgVgcIgjgtQgRANgMAIQgCAeAAAbQAAANgIAJQgJAIgNAAQgfAAAAglQAAgRADgiIACg0IABhIIABhJIgBgWIgBgWQAAgNAJgJQAIgHANgBQANABAJAHQAJAJAAANIABAWIABAXIgCA+IgBA8QAegWA8g9QAKgKAMAAQANAAAJAJQAKAJAAAMQAAAKgJAKQgaAcgkAfIAuA8QAhAsAAAOQAAAMgKAJQgJAJgNAAQgRgBgJgQg");
	this.shape_298.setTransform(584.925,103.95);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AhEBgQgjgdAAgvQAAgrAfgvQAjg1AuAAQAXAAAeAMQAlAQAAATQAAALgHAJQgIAJgMAAQgKAAgNgLQgOgKgaAAQgQAAgUAhQgTAgAAAXQAAAXARANQAQAMAZAAQAOAAAWgLQAVgLAGAAQAMAAAIAJQAJAIAAALQAAARgmARQghAQgVAAQgwAAgggcg");
	this.shape_299.setTransform(560.025,110.125);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_300.setTransform(543.125,104.975);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_301.setTransform(529.925,103.95);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AhhCFQghgiAAgvQAAhJBAhNQA3hAA4gBIASABIAOACQAJgJAOAAQAWAAAGAZQADATAAAYQAAAMgHAIQgHANgQAAQgUAAgKgWQgEgJgFgCQgDgCgOAAQgbAAgkAsQgyA7AAA0QgBAYARARQAQARAWAAQAVAAAWgLIAhgVQASgMAIAAQAOAAAJAKQAJAJAAALQAAANgMAKQg9Azg9AAQgxAAgiglg");
	this.shape_302.setTransform(510.3,104.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.instance_1},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.correct1},{t:this.wrong},{t:this.correct2}]}).wait(1));

	// Layer_1
	this.b3 = new lib.Symbol3();
	this.b3.name = "b3";
	this.b3.setTransform(1530.05,460.35,1,1,0,0,0,104.4,236.1);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.b2 = new lib.Symbol2();
	this.b2.name = "b2";
	this.b2.setTransform(886.5,553.75,1,1,0,0,0,205.4,102.5);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.b1 = new lib.Symbol1();
	this.b1.name = "b1";
	this.b1.setTransform(390.35,484.9,1,1,0,0,0,122.4,211.5);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AhtCLQg3goAAhLQAAhQArg4QAvg/BRAAQA3AAAlASQAyAYgBAyQAAAkgnAbQgTANg2AXIhrAwQAPARAWAIQAWAIAcAAQAqAAAfgRQAagQARAAQAhAAAAAgQAAAlg2AYQgtATgyAAQhNAAgwglgAgshNQgVAUgNAoIBIgfQArgUAagQQgWgNgiAAQgeAAgVAUg");
	this.shape_303.setTransform(1597,764.55);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("Ag9EQQgNgMAAgRIAAgIQAIgvAAgoIAAigIgVACIgTACQgUAAgNgMQgMgLAAgTQAAgeAfgJQAOgFArgBIAEgkQAJhIAegkQAkgrBNgBQA7AAAAArQAAAqg2AAQgnAAgSAbQgNAUgFAsIgBAJQArgEATAAQA8AAAAAqQAAAqhAgCQgUAAgpADQgCAhABA1IABBXQAAA6gHAjQgIAigiAAQgSAAgNgLg");
	this.shape_304.setTransform(1561.825,757.45);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("Ag9EQQgNgMAAgRIAAgIQAIgvAAgoIAAigIgVACIgTACQgUAAgNgMQgMgLAAgTQAAgeAfgJQAOgFArgBIAEgkQAJhIAegkQAkgrBNgBQA7AAAAArQAAAqg2AAQgnAAgSAbQgNAUgFAsIgBAJQArgEATAAQA8AAAAAqQAAAqhAgCQgUAAgpADQgCAhABA1IABBXQAAA6gHAjQgIAigiAAQgSAAgNgLg");
	this.shape_305.setTransform(1528.275,757.45);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("ABOCVQgeAOgWAHQgXAHgPAAQhNAAgngqQgngpAAhTQAAhMA6g3QA5g4BPAAQAfAAAoARQAwAVAAAcQAAALgHAIQgDANgCAUQgCATAAAaQAAA8AJAaQAAAEAOAdQANAcAAAEQAAARgNALQgNALgRAAQgPAAgggcgAgthAQggAhgBAtQAAArAQAWQAPAVAfAAQATABASgHQASgGAQgOQgKhMAAglIACgYIAEgeIgMgFIgIgBQgrAAghAjg");
	this.shape_306.setTransform(1493.85,764.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ah/CnQgKgLAAgSIAAjSIAAgeIABgeQAAgRALgMQALgNAUAAQAjAAAHAlQA4gqBGAAQBBgBAABWIgBAWQgDAxgqAAQgpAAAAgqIgBggQhIALgfA/IAAChQAAATgMALQgNAMgTABQgUgBgLgNg");
	this.shape_307.setTransform(1460.05,764.75);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgpDqQgMgMAAgSIgBg7IgBg7QAAgdADgrQADgqAAgdQAAgTANgMQANgMASAAQATAAANAMQAMAMAAATQAAAdgDAqQgEArAAAdIACA7IABA7QAAASgNAMQgMAMgTAAQgTAAgNgMgAgeijQgPgOAAgUQAAgUAPgOQAQgOATAAQAVAAAPAOQAPAOAAAUQAAAUgPAOQgPANgVAAQgTAAgQgNg");
	this.shape_308.setTransform(1435.15,756.975);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AivDbQgrgtAAhbQAAhSAphWQAphXA/g1QAtgmAyAAQAgAAA2AXQA/AaABAfQgBARgNAOQgNANgTAAQgKAAghgSQghgSgcAAQgcAAgwA+QhJBbABBpQAAA2APAUQARAUAwAAQAwAAAlgcQAogeAUg5QhMAGg2AZQgKAFgKAAQgUAAgNgPQgMgNAAgRQAAgyB0gSQBCgLBXAAQATAAANAMQANANABARQAAAYgUANQgWBghCA5QhDA6haAAQhVAAgsgtg");
	this.shape_309.setTransform(1403.3,756.425);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AhqCHQgvgsgChLQgChGApg4QAxhBBWAAQBBgBAmA0QAiAuAABFQAABJgoA1QgtA8hKgBQg8AAgrgpgAgug3QgUAfAAAoQAAAmAWAWQASAQAXAAQAbAAAVgUQAXgVACgmQAEhog7AAIgBAAQgmAAgWAkg");
	this.shape_310.setTransform(1028.9929,764.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgeD9QgNgMgBgTIAAm9QAAgTAOgMQANgLASAAQATAAANAMQAMALgBATIAAGrQABA+gtgBQgSAAgMgMg");
	this.shape_311.setTransform(1002.65,755.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("ABOCVQgdAOgYAHQgWAHgOAAQhPAAgmgqQgngpAAhTQAAhMA5g3QA6g4BOAAQAfAAAoARQAyAVAAAcQAAALgIAIQgDANgCAUQgCATAAAaQAAA8AJAaQABAEAOAdQAMAcAAAEQAAARgMALQgOALgRAAQgPAAgggcgAgthAQghAhABAtQAAArAPAWQAQAVAeAAQATABASgHQASgGAPgOQgJhMAAglIABgYIAFgeIgLgFIgJgBQgrAAghAjg");
	this.shape_312.setTransform(975.85,764.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("Ag9EQQgNgMAAgRIAAgIQAIgvAAgoIAAigIgVACIgTACQgUAAgNgMQgMgLAAgTQAAgeAfgJQAOgFArgBIAEgkQAJhIAegkQAkgrBNgBQA7AAAAArQAAAqg2AAQgnAAgSAbQgNAUgFAsIgBAJQArgEATAAQA8AAAAAqQAAAqhAgCQgUAAgpADQgCAhABA1IABBXQAAA6gHAjQgIAigiAAQgSAAgNgLg");
	this.shape_313.setTransform(940.075,757.45);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("Ag9EQQgNgMAAgRIAAgIQAIgvAAgoIAAigIgVACIgTACQgUAAgNgMQgMgLAAgTQAAgeAfgJQAOgFArgBIAEgkQAJhIAegkQAkgrBNgBQA7AAAAArQAAAqg2AAQgnAAgSAbQgNAUgFAsIgBAJQArgEATAAQA8AAAAAqQAAAqhAgCQgUAAgpADQgCAhABA1IABBXQAAA6gHAjQgIAigiAAQgSAAgNgLg");
	this.shape_314.setTransform(906.525,757.45);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("ABBCfQgqAQgrAAQgtAAgggUQgjgWgHgqQgMhQAAg+QAAgqAJg2QAHgkAlAAQATAAANAMQANALAAASQAAAPgEAeQgFAeAAAPQAAAtADAhQADAiAGAWQAIAEAIABQAHACAHAAQAjAAArgKIAAg4IgBg1QAAhCAGgxQAFgmAnAAQATAAANAMQAOAMgBASIgGBxIAAAAIAAAAIAABBIABBBIABAUIABAUQAAASgNAMQgNAMgTAAQgbAAgMgZg");
	this.shape_315.setTransform(872.7783,764.875);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AifD1QgPgRAAgSIAAlUIgCgsQgBgZADgRQAEgeA0gHQAZgHA4AAQA8AAA4AoQBCAtAABFQAAAlgOAaQgLAUgaAXQAfAPAYAfQAcAiAAAhQAAArgvAmQgfAagiANQhKAchzAAQgUAAgPgQgAhWCtQA3gDBAgTQA4gQAAgSQgBgZgkgTQgbgQgZgCQgcAAg6gDgAhWisIAABEIAABEQAdADAPAAQBhgJAAhAQAAgXgdgVQgdgWgigBIgxABg");
	this.shape_316.setTransform(836.2607,756.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("Ah/CnQgLgLAAgSIAAjSIABgeIABgeQAAgRALgMQAKgNAVAAQAkAAAGAlQA4gqBGAAQBBgBAABWIgBAWQgDAxgqAAQgpAAAAgqIgBggQhIALgfA/IABChQAAATgNALQgMAMgUABQgUgBgLgNg");
	this.shape_317.setTransform(451.8,764.75);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AhtCLQg3goAAhLQAAhQArg4QAwg/BQAAQA3AAAlASQAyAYAAAyQAAAkgoAbQgTANg2AXIhsAwQAQARAWAIQAWAIAcAAQArAAAegRQAagQARAAQAhAAAAAgQAAAlg2AYQgtATgyAAQhMAAgxglgAgshNQgVAUgNAoIBIgfQArgUAagQQgWgNgiAAQgdAAgWAUg");
	this.shape_318.setTransform(416.4,764.55);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AhtCLQg3goAAhLQAAhQArg4QAwg/BQAAQA3AAAlASQAyAYAAAyQAAAkgoAbQgTANg2AXIhsAwQAQARAWAIQAWAIAcAAQArAAAegRQAagQARAAQAhAAAAAgQAAAlg2AYQgtATgyAAQhMAAgxglgAgshNQgVAUgNAoIBIgfQArgUAagQQgWgNgiAAQgdAAgWAUg");
	this.shape_319.setTransform(379.5,764.55);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AhlEEQglgIgVgOQgTAAgNgNQgNgNAAgSQAAggADhBQADhAAAggIgBhrIgChrQAAgSARgRQARgSAUAAQAKAAArAUQAyAYAJADQBeAfBCBAQBQBMAABcQAAA3gbAzQgcAzgvAfQg2AjhgAAQgXAAgfgHgAhwCkQAMAIARAEQAQAEAUAAQBEAAAfgTQAcgTARgfQARggAAgiQAAhPhdg6QgfgUhmgqg");
	this.shape_320.setTransform(338.975,757.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(1));

	// Layer_5
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_321.setTransform(1108.55,1058.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_322.setTransform(1098.775,1052.15);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_323.setTransform(1085.225,1052.15);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_324.setTransform(1075.425,1052.15);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_325.setTransform(1061.2,1058.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_326.setTransform(1054.525,1052.15);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_327.setTransform(1041.7,1052.15);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_328.setTransform(1028.7,1052.15);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_329.setTransform(1009.4,1052.15);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_330.setTransform(994.475,1052.15);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_331.setTransform(979.725,1052.15);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_332.setTransform(966.725,1052.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_333.setTransform(953.85,1052.15);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_334.setTransform(940.525,1052.15);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_335.setTransform(927.15,1052.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_336.setTransform(907.75,1052.275);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_337.setTransform(893.575,1052.15);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_338.setTransform(879.675,1052.15);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_339.setTransform(860.775,1052.15);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_340.setTransform(845.975,1052.15);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_341.setTransform(831.325,1052.15);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_342.setTransform(817.425,1052.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_343.setTransform(799.275,1052.15);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_344.setTransform(785.925,1052.15);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_345.setTransform(770.825,1052.15);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_346.setTransform(760.4,1052.15);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_347.setTransform(751.025,1052.15);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_348.setTransform(736.675,1052.15);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_349.setTransform(716.9,1052.125);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_350.setTransform(1108.55,1058.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_351.setTransform(1098.775,1052.15);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_352.setTransform(1085.225,1052.15);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_353.setTransform(1075.425,1052.15);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_354.setTransform(1061.2,1058.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_355.setTransform(1054.525,1052.15);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_356.setTransform(1041.7,1052.15);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_357.setTransform(1028.7,1052.15);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_358.setTransform(1009.4,1052.15);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_359.setTransform(994.475,1052.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_360.setTransform(979.725,1052.15);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_361.setTransform(966.725,1052.15);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_362.setTransform(953.85,1052.15);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_363.setTransform(940.525,1052.15);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_364.setTransform(927.15,1052.15);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_365.setTransform(907.75,1052.275);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_366.setTransform(893.575,1052.15);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_367.setTransform(879.675,1052.15);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_368.setTransform(860.775,1052.15);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_369.setTransform(845.975,1052.15);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_370.setTransform(831.325,1052.15);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_371.setTransform(817.425,1052.15);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_372.setTransform(799.275,1052.15);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_373.setTransform(785.925,1052.15);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_374.setTransform(770.825,1052.15);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_375.setTransform(760.4,1052.15);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_376.setTransform(751.025,1052.15);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_377.setTransform(736.675,1052.15);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_378.setTransform(716.9,1052.125);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_379.setTransform(1108.55,1058.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_380.setTransform(1098.775,1052.15);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_381.setTransform(1085.225,1052.15);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_382.setTransform(1075.425,1052.15);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_383.setTransform(1061.2,1058.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_384.setTransform(1054.525,1052.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_385.setTransform(1041.7,1052.15);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_386.setTransform(1028.7,1052.15);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_387.setTransform(1009.4,1052.15);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_388.setTransform(994.475,1052.15);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_389.setTransform(979.725,1052.15);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_390.setTransform(966.725,1052.15);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_391.setTransform(953.85,1052.15);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_392.setTransform(940.525,1052.15);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_393.setTransform(927.15,1052.15);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_394.setTransform(907.75,1052.275);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_395.setTransform(893.575,1052.15);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_396.setTransform(879.675,1052.15);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_397.setTransform(860.775,1052.15);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_398.setTransform(845.975,1052.15);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_399.setTransform(831.325,1052.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_400.setTransform(817.425,1052.15);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_401.setTransform(799.275,1052.15);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_402.setTransform(785.925,1052.15);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_403.setTransform(770.825,1052.15);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_404.setTransform(760.4,1052.15);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_405.setTransform(751.025,1052.15);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_406.setTransform(736.675,1052.15);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_407.setTransform(716.9,1052.125);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_408.setTransform(1108.55,1058.3);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_409.setTransform(1098.775,1052.15);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_410.setTransform(1085.225,1052.15);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_411.setTransform(1075.425,1052.15);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_412.setTransform(1061.2,1058.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_413.setTransform(1054.525,1052.15);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_414.setTransform(1041.7,1052.15);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_415.setTransform(1028.7,1052.15);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_416.setTransform(1009.4,1052.15);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_417.setTransform(994.475,1052.15);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_418.setTransform(979.725,1052.15);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_419.setTransform(966.725,1052.15);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_420.setTransform(953.85,1052.15);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_421.setTransform(940.525,1052.15);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_422.setTransform(927.15,1052.15);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_423.setTransform(907.75,1052.275);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_424.setTransform(893.575,1052.15);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_425.setTransform(879.675,1052.15);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_426.setTransform(860.775,1052.15);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_427.setTransform(845.975,1052.15);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_428.setTransform(831.325,1052.15);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_429.setTransform(817.425,1052.15);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_430.setTransform(799.275,1052.15);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_431.setTransform(785.925,1052.15);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_432.setTransform(770.825,1052.15);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_433.setTransform(760.4,1052.15);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_434.setTransform(751.025,1052.15);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_435.setTransform(736.675,1052.15);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_436.setTransform(716.9,1052.125);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_437.setTransform(1108.55,1058.3);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_438.setTransform(1098.775,1052.15);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_439.setTransform(1085.225,1052.15);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_440.setTransform(1075.425,1052.15);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_441.setTransform(1061.2,1058.3);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_442.setTransform(1054.525,1052.15);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_443.setTransform(1041.7,1052.15);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_444.setTransform(1028.7,1052.15);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_445.setTransform(1009.4,1052.15);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_446.setTransform(994.475,1052.15);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_447.setTransform(979.725,1052.15);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_448.setTransform(966.725,1052.15);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_449.setTransform(953.85,1052.15);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_450.setTransform(940.525,1052.15);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_451.setTransform(927.15,1052.15);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_452.setTransform(907.75,1052.275);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_453.setTransform(893.575,1052.15);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_454.setTransform(879.675,1052.15);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_455.setTransform(860.775,1052.15);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_456.setTransform(845.975,1052.15);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_457.setTransform(831.325,1052.15);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_458.setTransform(817.425,1052.15);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_459.setTransform(799.275,1052.15);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_460.setTransform(785.925,1052.15);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_461.setTransform(770.825,1052.15);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_462.setTransform(760.4,1052.15);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_463.setTransform(751.025,1052.15);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_464.setTransform(736.675,1052.15);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_465.setTransform(716.9,1052.125);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_466.setTransform(1108.55,1058.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_467.setTransform(1098.775,1052.15);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_468.setTransform(1085.225,1052.15);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_469.setTransform(1075.425,1052.15);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_470.setTransform(1061.2,1058.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_471.setTransform(1054.525,1052.15);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_472.setTransform(1041.7,1052.15);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_473.setTransform(1028.7,1052.15);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_474.setTransform(1009.4,1052.15);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_475.setTransform(994.475,1052.15);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_476.setTransform(979.725,1052.15);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_477.setTransform(966.725,1052.15);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_478.setTransform(953.85,1052.15);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_479.setTransform(940.525,1052.15);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_480.setTransform(927.15,1052.15);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_481.setTransform(907.75,1052.275);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_482.setTransform(893.575,1052.15);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_483.setTransform(879.675,1052.15);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_484.setTransform(860.775,1052.15);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_485.setTransform(845.975,1052.15);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_486.setTransform(831.325,1052.15);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_487.setTransform(817.425,1052.15);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_488.setTransform(799.275,1052.15);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_489.setTransform(785.925,1052.15);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_490.setTransform(770.825,1052.15);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_491.setTransform(760.4,1052.15);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_492.setTransform(751.025,1052.15);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_493.setTransform(736.675,1052.15);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_494.setTransform(716.9,1052.125);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_495.setTransform(1108.55,1058.3);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_496.setTransform(1098.775,1052.15);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_497.setTransform(1085.225,1052.15);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_498.setTransform(1075.425,1052.15);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_499.setTransform(1061.2,1058.3);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_500.setTransform(1054.525,1052.15);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_501.setTransform(1041.7,1052.15);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_502.setTransform(1028.7,1052.15);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_503.setTransform(1009.4,1052.15);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_504.setTransform(994.475,1052.15);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_505.setTransform(979.725,1052.15);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_506.setTransform(966.725,1052.15);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_507.setTransform(953.85,1052.15);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_508.setTransform(940.525,1052.15);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_509.setTransform(927.15,1052.15);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_510.setTransform(907.75,1052.275);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_511.setTransform(893.575,1052.15);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_512.setTransform(879.675,1052.15);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_513.setTransform(860.775,1052.15);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_514.setTransform(845.975,1052.15);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_515.setTransform(831.325,1052.15);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_516.setTransform(817.425,1052.15);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_517.setTransform(799.275,1052.15);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_518.setTransform(785.925,1052.15);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_519.setTransform(770.825,1052.15);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_520.setTransform(760.4,1052.15);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_521.setTransform(751.025,1052.15);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_522.setTransform(736.675,1052.15);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_523.setTransform(716.9,1052.125);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_524.setTransform(1108.55,1058.3);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_525.setTransform(1098.775,1052.15);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_526.setTransform(1085.225,1052.15);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_527.setTransform(1075.425,1052.15);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_528.setTransform(1061.2,1058.3);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_529.setTransform(1054.525,1052.15);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_530.setTransform(1041.7,1052.15);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_531.setTransform(1028.7,1052.15);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_532.setTransform(1009.4,1052.15);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_533.setTransform(994.475,1052.15);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_534.setTransform(979.725,1052.15);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_535.setTransform(966.725,1052.15);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_536.setTransform(953.85,1052.15);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_537.setTransform(940.525,1052.15);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_538.setTransform(927.15,1052.15);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_539.setTransform(907.75,1052.275);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_540.setTransform(893.575,1052.15);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_541.setTransform(879.675,1052.15);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_542.setTransform(860.775,1052.15);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_543.setTransform(845.975,1052.15);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_544.setTransform(831.325,1052.15);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_545.setTransform(817.425,1052.15);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_546.setTransform(799.275,1052.15);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_547.setTransform(785.925,1052.15);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_548.setTransform(770.825,1052.15);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_549.setTransform(760.4,1052.15);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_550.setTransform(751.025,1052.15);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_551.setTransform(736.675,1052.15);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_552.setTransform(716.9,1052.125);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_553.setTransform(1108.55,1058.3);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_554.setTransform(1098.775,1052.15);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_555.setTransform(1085.225,1052.15);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_556.setTransform(1075.425,1052.15);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_557.setTransform(1061.2,1058.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_558.setTransform(1054.525,1052.15);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_559.setTransform(1041.7,1052.15);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_560.setTransform(1028.7,1052.15);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_561.setTransform(1009.4,1052.15);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_562.setTransform(994.475,1052.15);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_563.setTransform(979.725,1052.15);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_564.setTransform(966.725,1052.15);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_565.setTransform(953.85,1052.15);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_566.setTransform(940.525,1052.15);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_567.setTransform(927.15,1052.15);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_568.setTransform(907.75,1052.275);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_569.setTransform(893.575,1052.15);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_570.setTransform(879.675,1052.15);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_571.setTransform(860.775,1052.15);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_572.setTransform(845.975,1052.15);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_573.setTransform(831.325,1052.15);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_574.setTransform(817.425,1052.15);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_575.setTransform(799.275,1052.15);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_576.setTransform(785.925,1052.15);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_577.setTransform(770.825,1052.15);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_578.setTransform(760.4,1052.15);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_579.setTransform(751.025,1052.15);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_580.setTransform(736.675,1052.15);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_581.setTransform(716.9,1052.125);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_582.setTransform(1108.55,1058.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_583.setTransform(1098.775,1052.15);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_584.setTransform(1085.225,1052.15);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_585.setTransform(1075.425,1052.15);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_586.setTransform(1061.2,1058.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_587.setTransform(1054.525,1052.15);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_588.setTransform(1041.7,1052.15);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_589.setTransform(1028.7,1052.15);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_590.setTransform(1009.4,1052.15);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_591.setTransform(994.475,1052.15);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_592.setTransform(979.725,1052.15);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_593.setTransform(966.725,1052.15);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_594.setTransform(953.85,1052.15);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_595.setTransform(940.525,1052.15);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_596.setTransform(927.15,1052.15);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_597.setTransform(907.75,1052.275);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_598.setTransform(893.575,1052.15);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_599.setTransform(879.675,1052.15);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_600.setTransform(860.775,1052.15);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_601.setTransform(845.975,1052.15);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_602.setTransform(831.325,1052.15);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_603.setTransform(817.425,1052.15);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_604.setTransform(799.275,1052.15);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_605.setTransform(785.925,1052.15);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_606.setTransform(770.825,1052.15);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_607.setTransform(760.4,1052.15);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_608.setTransform(751.025,1052.15);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_609.setTransform(736.675,1052.15);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_610.setTransform(716.9,1052.125);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_611.setTransform(1108.55,1058.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_612.setTransform(1098.775,1052.15);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_613.setTransform(1085.225,1052.15);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_614.setTransform(1075.425,1052.15);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_615.setTransform(1061.2,1058.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_616.setTransform(1054.525,1052.15);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_617.setTransform(1041.7,1052.15);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMAOgeAAIgjAAIAAA5gAgigCIAkAAQARgBAIgGQAIgIAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_618.setTransform(1028.7,1052.15);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgOIASgCQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgCAEgGQADgGAAgGQABgHgEgFQgEgFgJgEQgGgCgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgJAMgFQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_619.setTransform(1009.4,1052.15);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_620.setTransform(994.475,1052.15);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_621.setTransform(979.725,1052.15);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_622.setTransform(966.725,1052.15);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgCAFgGQADgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgJAMgFQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQgBgJAHQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_623.setTransform(953.85,1052.15);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdAsIANAXIAQgYIAcgrIAWAAIg6BSIAAA8g");
	this.shape_624.setTransform(940.525,1052.15);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgOIASgCQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgCAEgGQAEgGAAgGQAAgHgDgFQgEgFgJgEQgGgCgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgJALgFQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQgBgJAHQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_625.setTransform(927.15,1052.15);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_626.setTransform(907.75,1052.275);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_627.setTransform(893.575,1052.15);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_628.setTransform(879.675,1052.15);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_629.setTransform(860.775,1052.15);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_630.setTransform(845.975,1052.15);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgWgIgNQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_631.setTransform(831.325,1052.15);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_632.setTransform(817.425,1052.15);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_633.setTransform(799.275,1052.15);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_634.setTransform(785.925,1052.15);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgUAJgRQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAASAHAOQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgQIA8AAIAAA0QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_635.setTransform(770.825,1052.15);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_636.setTransform(760.4,1052.15);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgDQgEgDgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAAMQAAAQgJAKQgKAJgVAEQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMAAAHgCQAHgDAEgFQAEgHAAgHQAAgKgHgHQgIgGgQAAIgsAAg");
	this.shape_637.setTransform(751.025,1052.15);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAFQANAEAHAIQAHAKAAAMQAAAKgEAIQgEAJgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgCgNAAIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_638.setTransform(736.675,1052.15);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_639.setTransform(716.9,1052.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321}]}).wait(1));

	// Background
	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_640.setTransform(960,540);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_641.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_641},{t:this.shape_640}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '3A4BF9AFE1CD01448A8BC28E2E4480BD',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/right.png", id:"right"},
		{src:"images/sound.png", id:"sound"},
		{src:"images/wrong.png", id:"wrong"},
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
an.compositions['3A4BF9AFE1CD01448A8BC28E2E4480BD'] = {
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