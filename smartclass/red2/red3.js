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



(lib.CachedBmp_439 = function() {
	this.initialize(img.CachedBmp_439);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,47);


(lib.CachedBmp_437 = function() {
	this.initialize(img.CachedBmp_437);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,229);


(lib.CachedBmp_438 = function() {
	this.initialize(img.CachedBmp_438);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,251,233);


(lib.CachedBmp_435 = function() {
	this.initialize(img.CachedBmp_435);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,54);


(lib.CachedBmp_434 = function() {
	this.initialize(img.CachedBmp_434);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.CachedBmp_432 = function() {
	this.initialize(img.CachedBmp_432);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.CachedBmp_430 = function() {
	this.initialize(img.CachedBmp_430);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.CachedBmp_428 = function() {
	this.initialize(img.CachedBmp_428);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


(lib.CachedBmp_425 = function() {
	this.initialize(img.CachedBmp_425);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1590,120);


(lib.CachedBmp_424 = function() {
	this.initialize(img.CachedBmp_424);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1074,859);


(lib.CachedBmp_436 = function() {
	this.initialize(img.CachedBmp_436);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1888,1242);


(lib.CachedBmp_423 = function() {
	this.initialize(img.CachedBmp_423);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1206,915);


(lib.CachedBmp_426 = function() {
	this.initialize(img.CachedBmp_426);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1890,1244);


(lib.CachedBmp_422 = function() {
	this.initialize(img.CachedBmp_422);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1341,985);


(lib.CachedBmp_421 = function() {
	this.initialize(img.CachedBmp_421);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1486,1041);


(lib.CachedBmp_420 = function() {
	this.initialize(img.CachedBmp_420);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1620,1106);


(lib.CachedBmp_417 = function() {
	this.initialize(img.CachedBmp_417);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,146);


(lib.CachedBmp_416 = function() {
	this.initialize(img.CachedBmp_416);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,97);


(lib.CachedBmp_415 = function() {
	this.initialize(img.CachedBmp_415);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,366,146);


(lib.CachedBmp_419 = function() {
	this.initialize(img.CachedBmp_419);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1752,1164);


(lib.CachedBmp_414 = function() {
	this.initialize(img.CachedBmp_414);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,808,322);


(lib.CachedBmp_412 = function() {
	this.initialize(img.CachedBmp_412);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,217);


(lib.CachedBmp_411 = function() {
	this.initialize(img.CachedBmp_411);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,217);


(lib.CachedBmp_410 = function() {
	this.initialize(img.CachedBmp_410);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,22);


(lib.CachedBmp_409 = function() {
	this.initialize(img.CachedBmp_409);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,93);


(lib.CachedBmp_408 = function() {
	this.initialize(img.CachedBmp_408);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,9);


(lib.CachedBmp_407 = function() {
	this.initialize(img.CachedBmp_407);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.CachedBmp_406 = function() {
	this.initialize(img.CachedBmp_406);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,8);


(lib.CachedBmp_405 = function() {
	this.initialize(img.CachedBmp_405);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,10);


(lib.CachedBmp_404 = function() {
	this.initialize(img.CachedBmp_404);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,13);


(lib.CachedBmp_413 = function() {
	this.initialize(img.CachedBmp_413);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1144,456);


(lib.CachedBmp_402 = function() {
	this.initialize(img.CachedBmp_402);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,108);


(lib.CachedBmp_401 = function() {
	this.initialize(img.CachedBmp_401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,33);


(lib.CachedBmp_403 = function() {
	this.initialize(img.CachedBmp_403);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,107);


(lib.CachedBmp_400 = function() {
	this.initialize(img.CachedBmp_400);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,146);


(lib.CachedBmp_399 = function() {
	this.initialize(img.CachedBmp_399);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,24);


(lib.CachedBmp_397 = function() {
	this.initialize(img.CachedBmp_397);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,25);


(lib.CachedBmp_398 = function() {
	this.initialize(img.CachedBmp_398);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,146);


(lib.CachedBmp_396 = function() {
	this.initialize(img.CachedBmp_396);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,20);


(lib.CachedBmp_395 = function() {
	this.initialize(img.CachedBmp_395);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,27);


(lib.CachedBmp_394 = function() {
	this.initialize(img.CachedBmp_394);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,20);


(lib.CachedBmp_393 = function() {
	this.initialize(img.CachedBmp_393);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,51);


(lib.CachedBmp_392 = function() {
	this.initialize(img.CachedBmp_392);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,9);


(lib.CachedBmp_391 = function() {
	this.initialize(img.CachedBmp_391);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,13);


(lib.CachedBmp_390 = function() {
	this.initialize(img.CachedBmp_390);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,11);


(lib.CachedBmp_389 = function() {
	this.initialize(img.CachedBmp_389);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,19);


(lib.CachedBmp_388 = function() {
	this.initialize(img.CachedBmp_388);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,36);


(lib.CachedBmp_387 = function() {
	this.initialize(img.CachedBmp_387);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,58);


(lib.CachedBmp_386 = function() {
	this.initialize(img.CachedBmp_386);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,60);


(lib.CachedBmp_385 = function() {
	this.initialize(img.CachedBmp_385);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,16);


(lib.CachedBmp_384 = function() {
	this.initialize(img.CachedBmp_384);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,38);


(lib.CachedBmp_383 = function() {
	this.initialize(img.CachedBmp_383);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,63);


(lib.CachedBmp_382 = function() {
	this.initialize(img.CachedBmp_382);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,68);


(lib.CachedBmp_380 = function() {
	this.initialize(img.CachedBmp_380);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,18);


(lib.CachedBmp_381 = function() {
	this.initialize(img.CachedBmp_381);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,24);


(lib.CachedBmp_378 = function() {
	this.initialize(img.CachedBmp_378);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,52);


(lib.CachedBmp_379 = function() {
	this.initialize(img.CachedBmp_379);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,135);


(lib.CachedBmp_377 = function() {
	this.initialize(img.CachedBmp_377);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,142);


(lib.CachedBmp_375 = function() {
	this.initialize(img.CachedBmp_375);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_374 = function() {
	this.initialize(img.CachedBmp_374);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,35);


(lib.CachedBmp_376 = function() {
	this.initialize(img.CachedBmp_376);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,165);


(lib.CachedBmp_372 = function() {
	this.initialize(img.CachedBmp_372);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,20);


(lib.CachedBmp_371 = function() {
	this.initialize(img.CachedBmp_371);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,31);


(lib.CachedBmp_373 = function() {
	this.initialize(img.CachedBmp_373);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,167);


(lib.CachedBmp_369 = function() {
	this.initialize(img.CachedBmp_369);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_370 = function() {
	this.initialize(img.CachedBmp_370);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,21);


(lib.CachedBmp_368 = function() {
	this.initialize(img.CachedBmp_368);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,123);


(lib.CachedBmp_367 = function() {
	this.initialize(img.CachedBmp_367);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,127);


(lib.CachedBmp_366 = function() {
	this.initialize(img.CachedBmp_366);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,15);


(lib.CachedBmp_365 = function() {
	this.initialize(img.CachedBmp_365);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,13);


(lib.CachedBmp_364 = function() {
	this.initialize(img.CachedBmp_364);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,16);


(lib.CachedBmp_363 = function() {
	this.initialize(img.CachedBmp_363);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,25);


(lib.CachedBmp_362 = function() {
	this.initialize(img.CachedBmp_362);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,32);


(lib.CachedBmp_361 = function() {
	this.initialize(img.CachedBmp_361);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,17);


(lib.CachedBmp_360 = function() {
	this.initialize(img.CachedBmp_360);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,24);


(lib.CachedBmp_359 = function() {
	this.initialize(img.CachedBmp_359);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,24);


(lib.CachedBmp_357 = function() {
	this.initialize(img.CachedBmp_357);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,26);


(lib.CachedBmp_358 = function() {
	this.initialize(img.CachedBmp_358);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,59);


(lib.CachedBmp_356 = function() {
	this.initialize(img.CachedBmp_356);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,62);


(lib.CachedBmp_355 = function() {
	this.initialize(img.CachedBmp_355);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,62);


(lib.CachedBmp_354 = function() {
	this.initialize(img.CachedBmp_354);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,8);


(lib.CachedBmp_353 = function() {
	this.initialize(img.CachedBmp_353);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,16);


(lib.CachedBmp_352 = function() {
	this.initialize(img.CachedBmp_352);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,12);


(lib.CachedBmp_351 = function() {
	this.initialize(img.CachedBmp_351);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,55);


(lib.CachedBmp_349 = function() {
	this.initialize(img.CachedBmp_349);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,18);


(lib.CachedBmp_350 = function() {
	this.initialize(img.CachedBmp_350);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,73);


(lib.CachedBmp_348 = function() {
	this.initialize(img.CachedBmp_348);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,14);


(lib.CachedBmp_347 = function() {
	this.initialize(img.CachedBmp_347);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,23);


(lib.CachedBmp_346 = function() {
	this.initialize(img.CachedBmp_346);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,21);


(lib.CachedBmp_345 = function() {
	this.initialize(img.CachedBmp_345);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,11);


(lib.CachedBmp_344 = function() {
	this.initialize(img.CachedBmp_344);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,23);


(lib.CachedBmp_343 = function() {
	this.initialize(img.CachedBmp_343);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,46);


(lib.CachedBmp_342 = function() {
	this.initialize(img.CachedBmp_342);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,10);


(lib.CachedBmp_341 = function() {
	this.initialize(img.CachedBmp_341);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,21);


(lib.CachedBmp_340 = function() {
	this.initialize(img.CachedBmp_340);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,17);


(lib.CachedBmp_339 = function() {
	this.initialize(img.CachedBmp_339);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,34);


(lib.CachedBmp_338 = function() {
	this.initialize(img.CachedBmp_338);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,80);


(lib.CachedBmp_337 = function() {
	this.initialize(img.CachedBmp_337);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,73);


(lib.CachedBmp_336 = function() {
	this.initialize(img.CachedBmp_336);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,80);


(lib.CachedBmp_335 = function() {
	this.initialize(img.CachedBmp_335);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,141);


(lib.CachedBmp_334 = function() {
	this.initialize(img.CachedBmp_334);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,7);


(lib.CachedBmp_333 = function() {
	this.initialize(img.CachedBmp_333);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,5);


(lib.CachedBmp_332 = function() {
	this.initialize(img.CachedBmp_332);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,21);


(lib.CachedBmp_330 = function() {
	this.initialize(img.CachedBmp_330);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,13);


(lib.CachedBmp_331 = function() {
	this.initialize(img.CachedBmp_331);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,38);


(lib.CachedBmp_329 = function() {
	this.initialize(img.CachedBmp_329);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,12);


(lib.CachedBmp_328 = function() {
	this.initialize(img.CachedBmp_328);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,31);


(lib.CachedBmp_327 = function() {
	this.initialize(img.CachedBmp_327);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,36);


(lib.CachedBmp_326 = function() {
	this.initialize(img.CachedBmp_326);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,21);


(lib.CachedBmp_325 = function() {
	this.initialize(img.CachedBmp_325);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,1);


(lib.CachedBmp_324 = function() {
	this.initialize(img.CachedBmp_324);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,1);


(lib.CachedBmp_323 = function() {
	this.initialize(img.CachedBmp_323);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,4);


(lib.CachedBmp_322 = function() {
	this.initialize(img.CachedBmp_322);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,20);


(lib.CachedBmp_320 = function() {
	this.initialize(img.CachedBmp_320);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,5);


(lib.CachedBmp_321 = function() {
	this.initialize(img.CachedBmp_321);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,38);


(lib.CachedBmp_319 = function() {
	this.initialize(img.CachedBmp_319);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,57);


(lib.CachedBmp_318 = function() {
	this.initialize(img.CachedBmp_318);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,62);


(lib.CachedBmp_317 = function() {
	this.initialize(img.CachedBmp_317);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,10);


(lib.CachedBmp_316 = function() {
	this.initialize(img.CachedBmp_316);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,47);


(lib.CachedBmp_315 = function() {
	this.initialize(img.CachedBmp_315);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,42);


(lib.CachedBmp_314 = function() {
	this.initialize(img.CachedBmp_314);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,43);


(lib.CachedBmp_312 = function() {
	this.initialize(img.CachedBmp_312);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,7);


(lib.CachedBmp_313 = function() {
	this.initialize(img.CachedBmp_313);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,90);


(lib.CachedBmp_311 = function() {
	this.initialize(img.CachedBmp_311);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,13);


(lib.CachedBmp_310 = function() {
	this.initialize(img.CachedBmp_310);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,12);


(lib.CachedBmp_308 = function() {
	this.initialize(img.CachedBmp_308);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,151);


(lib.CachedBmp_309 = function() {
	this.initialize(img.CachedBmp_309);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,40);


(lib.CachedBmp_306 = function() {
	this.initialize(img.CachedBmp_306);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,38);


(lib.CachedBmp_305 = function() {
	this.initialize(img.CachedBmp_305);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,10);


(lib.CachedBmp_304 = function() {
	this.initialize(img.CachedBmp_304);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,59);


(lib.CachedBmp_307 = function() {
	this.initialize(img.CachedBmp_307);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,148);


(lib.CachedBmp_302 = function() {
	this.initialize(img.CachedBmp_302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,25);


(lib.CachedBmp_303 = function() {
	this.initialize(img.CachedBmp_303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,24);


(lib.CachedBmp_301 = function() {
	this.initialize(img.CachedBmp_301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,18);


(lib.CachedBmp_300 = function() {
	this.initialize(img.CachedBmp_300);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,12);


(lib.CachedBmp_298 = function() {
	this.initialize(img.CachedBmp_298);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,5);


(lib.CachedBmp_299 = function() {
	this.initialize(img.CachedBmp_299);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,25);


(lib.CachedBmp_296 = function() {
	this.initialize(img.CachedBmp_296);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,10);


(lib.CachedBmp_295 = function() {
	this.initialize(img.CachedBmp_295);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,32);


(lib.CachedBmp_294 = function() {
	this.initialize(img.CachedBmp_294);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,40);


(lib.CachedBmp_297 = function() {
	this.initialize(img.CachedBmp_297);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,35);


(lib.CachedBmp_293 = function() {
	this.initialize(img.CachedBmp_293);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,23);


(lib.CachedBmp_291 = function() {
	this.initialize(img.CachedBmp_291);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,73);


(lib.CachedBmp_292 = function() {
	this.initialize(img.CachedBmp_292);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,76);


(lib.CachedBmp_290 = function() {
	this.initialize(img.CachedBmp_290);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,8);


(lib.CachedBmp_289 = function() {
	this.initialize(img.CachedBmp_289);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,36);


(lib.CachedBmp_288 = function() {
	this.initialize(img.CachedBmp_288);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,37);


(lib.CachedBmp_287 = function() {
	this.initialize(img.CachedBmp_287);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,40);


(lib.CachedBmp_285 = function() {
	this.initialize(img.CachedBmp_285);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.CachedBmp_284 = function() {
	this.initialize(img.CachedBmp_284);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,6);


(lib.CachedBmp_283 = function() {
	this.initialize(img.CachedBmp_283);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,8);


(lib.CachedBmp_282 = function() {
	this.initialize(img.CachedBmp_282);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,35);


(lib.CachedBmp_286 = function() {
	this.initialize(img.CachedBmp_286);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,34);


(lib.CachedBmp_281 = function() {
	this.initialize(img.CachedBmp_281);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,65);


(lib.CachedBmp_280 = function() {
	this.initialize(img.CachedBmp_280);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,69);


(lib.CachedBmp_278 = function() {
	this.initialize(img.CachedBmp_278);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,63);


(lib.CachedBmp_279 = function() {
	this.initialize(img.CachedBmp_279);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,59);


(lib.CachedBmp_276 = function() {
	this.initialize(img.CachedBmp_276);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,56);


(lib.CachedBmp_277 = function() {
	this.initialize(img.CachedBmp_277);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,51);


(lib.CachedBmp_274 = function() {
	this.initialize(img.CachedBmp_274);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,38);


(lib.CachedBmp_275 = function() {
	this.initialize(img.CachedBmp_275);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,40);


(lib.CachedBmp_273 = function() {
	this.initialize(img.CachedBmp_273);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,131);


(lib.CachedBmp_272 = function() {
	this.initialize(img.CachedBmp_272);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,126);


(lib.CachedBmp_271 = function() {
	this.initialize(img.CachedBmp_271);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,117);


(lib.CachedBmp_270 = function() {
	this.initialize(img.CachedBmp_270);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,121);


(lib.CachedBmp_418 = function() {
	this.initialize(img.CachedBmp_418);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.CachedBmp_267 = function() {
	this.initialize(img.CachedBmp_267);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,812,110);


(lib.CachedBmp_266 = function() {
	this.initialize(img.CachedBmp_266);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.CachedBmp_265 = function() {
	this.initialize(img.CachedBmp_265);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,29);


(lib.CachedBmp_264 = function() {
	this.initialize(img.CachedBmp_264);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,28);


(lib.CachedBmp_263 = function() {
	this.initialize(img.CachedBmp_263);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,25);


(lib.CachedBmp_262 = function() {
	this.initialize(img.CachedBmp_262);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,22);


(lib.CachedBmp_261 = function() {
	this.initialize(img.CachedBmp_261);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,19);


(lib.CachedBmp_260 = function() {
	this.initialize(img.CachedBmp_260);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,17);


(lib.CachedBmp_259 = function() {
	this.initialize(img.CachedBmp_259);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,54);


(lib.CachedBmp_258 = function() {
	this.initialize(img.CachedBmp_258);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,52);


(lib.CachedBmp_257 = function() {
	this.initialize(img.CachedBmp_257);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,24);


(lib.CachedBmp_256 = function() {
	this.initialize(img.CachedBmp_256);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,22);


(lib.CachedBmp_255 = function() {
	this.initialize(img.CachedBmp_255);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,19);


(lib.CachedBmp_254 = function() {
	this.initialize(img.CachedBmp_254);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,17);


(lib.CachedBmp_253 = function() {
	this.initialize(img.CachedBmp_253);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,54);


(lib.CachedBmp_252 = function() {
	this.initialize(img.CachedBmp_252);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,52);


(lib.CachedBmp_251 = function() {
	this.initialize(img.CachedBmp_251);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,60);


(lib.CachedBmp_250 = function() {
	this.initialize(img.CachedBmp_250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.CachedBmp_249 = function() {
	this.initialize(img.CachedBmp_249);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,6);


(lib.CachedBmp_248 = function() {
	this.initialize(img.CachedBmp_248);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.CachedBmp_247 = function() {
	this.initialize(img.CachedBmp_247);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,9);


(lib.CachedBmp_246 = function() {
	this.initialize(img.CachedBmp_246);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,8);


(lib.CachedBmp_245 = function() {
	this.initialize(img.CachedBmp_245);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.CachedBmp_244 = function() {
	this.initialize(img.CachedBmp_244);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,17);


(lib.CachedBmp_243 = function() {
	this.initialize(img.CachedBmp_243);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,17);


(lib.CachedBmp_242 = function() {
	this.initialize(img.CachedBmp_242);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,6);


(lib.CachedBmp_241 = function() {
	this.initialize(img.CachedBmp_241);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,3);


(lib.CachedBmp_240 = function() {
	this.initialize(img.CachedBmp_240);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,4);


(lib.CachedBmp_239 = function() {
	this.initialize(img.CachedBmp_239);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,2);


(lib.CachedBmp_238 = function() {
	this.initialize(img.CachedBmp_238);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,4);


(lib.CachedBmp_237 = function() {
	this.initialize(img.CachedBmp_237);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,3);


(lib.CachedBmp_236 = function() {
	this.initialize(img.CachedBmp_236);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_235 = function() {
	this.initialize(img.CachedBmp_235);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_234 = function() {
	this.initialize(img.CachedBmp_234);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.CachedBmp_233 = function() {
	this.initialize(img.CachedBmp_233);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_232 = function() {
	this.initialize(img.CachedBmp_232);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_231 = function() {
	this.initialize(img.CachedBmp_231);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,1);


(lib.CachedBmp_230 = function() {
	this.initialize(img.CachedBmp_230);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,2);


(lib.CachedBmp_229 = function() {
	this.initialize(img.CachedBmp_229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.CachedBmp_228 = function() {
	this.initialize(img.CachedBmp_228);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.CachedBmp_227 = function() {
	this.initialize(img.CachedBmp_227);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,3);


(lib.CachedBmp_226 = function() {
	this.initialize(img.CachedBmp_226);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,2);


(lib.CachedBmp_225 = function() {
	this.initialize(img.CachedBmp_225);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_224 = function() {
	this.initialize(img.CachedBmp_224);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_223 = function() {
	this.initialize(img.CachedBmp_223);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.CachedBmp_222 = function() {
	this.initialize(img.CachedBmp_222);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_221 = function() {
	this.initialize(img.CachedBmp_221);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,4);


(lib.CachedBmp_220 = function() {
	this.initialize(img.CachedBmp_220);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_219 = function() {
	this.initialize(img.CachedBmp_219);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_218 = function() {
	this.initialize(img.CachedBmp_218);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_217 = function() {
	this.initialize(img.CachedBmp_217);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_216 = function() {
	this.initialize(img.CachedBmp_216);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_215 = function() {
	this.initialize(img.CachedBmp_215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_214 = function() {
	this.initialize(img.CachedBmp_214);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_213 = function() {
	this.initialize(img.CachedBmp_213);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.CachedBmp_212 = function() {
	this.initialize(img.CachedBmp_212);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_211 = function() {
	this.initialize(img.CachedBmp_211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_210 = function() {
	this.initialize(img.CachedBmp_210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_209 = function() {
	this.initialize(img.CachedBmp_209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_208 = function() {
	this.initialize(img.CachedBmp_208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_207 = function() {
	this.initialize(img.CachedBmp_207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_206 = function() {
	this.initialize(img.CachedBmp_206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_205 = function() {
	this.initialize(img.CachedBmp_205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.CachedBmp_204 = function() {
	this.initialize(img.CachedBmp_204);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,6);


(lib.CachedBmp_203 = function() {
	this.initialize(img.CachedBmp_203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.CachedBmp_202 = function() {
	this.initialize(img.CachedBmp_202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,5);


(lib.CachedBmp_201 = function() {
	this.initialize(img.CachedBmp_201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_200 = function() {
	this.initialize(img.CachedBmp_200);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_199 = function() {
	this.initialize(img.CachedBmp_199);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,74);


(lib.CachedBmp_198 = function() {
	this.initialize(img.CachedBmp_198);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,74);


(lib.CachedBmp_197 = function() {
	this.initialize(img.CachedBmp_197);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,35);


(lib.CachedBmp_196 = function() {
	this.initialize(img.CachedBmp_196);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,38);


(lib.CachedBmp_195 = function() {
	this.initialize(img.CachedBmp_195);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,4);


(lib.CachedBmp_194 = function() {
	this.initialize(img.CachedBmp_194);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,12);


(lib.CachedBmp_193 = function() {
	this.initialize(img.CachedBmp_193);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,21);


(lib.CachedBmp_192 = function() {
	this.initialize(img.CachedBmp_192);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,28);


(lib.CachedBmp_191 = function() {
	this.initialize(img.CachedBmp_191);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.CachedBmp_190 = function() {
	this.initialize(img.CachedBmp_190);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,9);


(lib.CachedBmp_189 = function() {
	this.initialize(img.CachedBmp_189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,6);


(lib.CachedBmp_188 = function() {
	this.initialize(img.CachedBmp_188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_187 = function() {
	this.initialize(img.CachedBmp_187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_186 = function() {
	this.initialize(img.CachedBmp_186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_185 = function() {
	this.initialize(img.CachedBmp_185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_184 = function() {
	this.initialize(img.CachedBmp_184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_183 = function() {
	this.initialize(img.CachedBmp_183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_182 = function() {
	this.initialize(img.CachedBmp_182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,5);


(lib.CachedBmp_181 = function() {
	this.initialize(img.CachedBmp_181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,4);


(lib.CachedBmp_180 = function() {
	this.initialize(img.CachedBmp_180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,50);


(lib.CachedBmp_179 = function() {
	this.initialize(img.CachedBmp_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,49);


(lib.CachedBmp_178 = function() {
	this.initialize(img.CachedBmp_178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,5);


(lib.CachedBmp_177 = function() {
	this.initialize(img.CachedBmp_177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,4);


(lib.CachedBmp_176 = function() {
	this.initialize(img.CachedBmp_176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,5);


(lib.CachedBmp_175 = function() {
	this.initialize(img.CachedBmp_175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,4);


(lib.CachedBmp_174 = function() {
	this.initialize(img.CachedBmp_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_173 = function() {
	this.initialize(img.CachedBmp_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.CachedBmp_172 = function() {
	this.initialize(img.CachedBmp_172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,9);


(lib.CachedBmp_171 = function() {
	this.initialize(img.CachedBmp_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,6);


(lib.CachedBmp_170 = function() {
	this.initialize(img.CachedBmp_170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,5);


(lib.CachedBmp_169 = function() {
	this.initialize(img.CachedBmp_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,7);


(lib.CachedBmp_168 = function() {
	this.initialize(img.CachedBmp_168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,7);


(lib.CachedBmp_167 = function() {
	this.initialize(img.CachedBmp_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,3);


(lib.CachedBmp_166 = function() {
	this.initialize(img.CachedBmp_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_165 = function() {
	this.initialize(img.CachedBmp_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.CachedBmp_164 = function() {
	this.initialize(img.CachedBmp_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_163 = function() {
	this.initialize(img.CachedBmp_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_162 = function() {
	this.initialize(img.CachedBmp_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_161 = function() {
	this.initialize(img.CachedBmp_161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_160 = function() {
	this.initialize(img.CachedBmp_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,1);


(lib.CachedBmp_159 = function() {
	this.initialize(img.CachedBmp_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,1);


(lib.CachedBmp_158 = function() {
	this.initialize(img.CachedBmp_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.CachedBmp_157 = function() {
	this.initialize(img.CachedBmp_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,1);


(lib.CachedBmp_156 = function() {
	this.initialize(img.CachedBmp_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,9);


(lib.CachedBmp_155 = function() {
	this.initialize(img.CachedBmp_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,11);


(lib.CachedBmp_154 = function() {
	this.initialize(img.CachedBmp_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,10);


(lib.CachedBmp_153 = function() {
	this.initialize(img.CachedBmp_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,42);


(lib.CachedBmp_152 = function() {
	this.initialize(img.CachedBmp_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,41);


(lib.CachedBmp_151 = function() {
	this.initialize(img.CachedBmp_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,30);


(lib.CachedBmp_150 = function() {
	this.initialize(img.CachedBmp_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.CachedBmp_149 = function() {
	this.initialize(img.CachedBmp_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.CachedBmp_148 = function() {
	this.initialize(img.CachedBmp_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,9);


(lib.CachedBmp_147 = function() {
	this.initialize(img.CachedBmp_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.CachedBmp_146 = function() {
	this.initialize(img.CachedBmp_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,27);


(lib.CachedBmp_145 = function() {
	this.initialize(img.CachedBmp_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.CachedBmp_144 = function() {
	this.initialize(img.CachedBmp_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,9);


(lib.CachedBmp_143 = function() {
	this.initialize(img.CachedBmp_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.CachedBmp_142 = function() {
	this.initialize(img.CachedBmp_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,27);


(lib.CachedBmp_141 = function() {
	this.initialize(img.CachedBmp_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,14);


(lib.CachedBmp_140 = function() {
	this.initialize(img.CachedBmp_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,10);


(lib.CachedBmp_139 = function() {
	this.initialize(img.CachedBmp_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,10);


(lib.CachedBmp_138 = function() {
	this.initialize(img.CachedBmp_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,9);


(lib.CachedBmp_137 = function() {
	this.initialize(img.CachedBmp_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,5);


(lib.CachedBmp_136 = function() {
	this.initialize(img.CachedBmp_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_135 = function() {
	this.initialize(img.CachedBmp_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_134 = function() {
	this.initialize(img.CachedBmp_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_133 = function() {
	this.initialize(img.CachedBmp_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,6);


(lib.CachedBmp_132 = function() {
	this.initialize(img.CachedBmp_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,4);


(lib.CachedBmp_131 = function() {
	this.initialize(img.CachedBmp_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,3);


(lib.CachedBmp_130 = function() {
	this.initialize(img.CachedBmp_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,6);


(lib.CachedBmp_129 = function() {
	this.initialize(img.CachedBmp_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,6);


(lib.CachedBmp_128 = function() {
	this.initialize(img.CachedBmp_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.CachedBmp_127 = function() {
	this.initialize(img.CachedBmp_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,16);


(lib.CachedBmp_126 = function() {
	this.initialize(img.CachedBmp_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,15);


(lib.CachedBmp_125 = function() {
	this.initialize(img.CachedBmp_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,18);


(lib.CachedBmp_124 = function() {
	this.initialize(img.CachedBmp_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,18);


(lib.CachedBmp_123 = function() {
	this.initialize(img.CachedBmp_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,9);


(lib.CachedBmp_122 = function() {
	this.initialize(img.CachedBmp_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,14);


(lib.CachedBmp_121 = function() {
	this.initialize(img.CachedBmp_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,13);


(lib.CachedBmp_120 = function() {
	this.initialize(img.CachedBmp_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,7);


(lib.CachedBmp_119 = function() {
	this.initialize(img.CachedBmp_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,15);


(lib.CachedBmp_118 = function() {
	this.initialize(img.CachedBmp_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,38);


(lib.CachedBmp_117 = function() {
	this.initialize(img.CachedBmp_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,31);


(lib.CachedBmp_116 = function() {
	this.initialize(img.CachedBmp_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,11);


(lib.CachedBmp_115 = function() {
	this.initialize(img.CachedBmp_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,11);


(lib.CachedBmp_114 = function() {
	this.initialize(img.CachedBmp_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.CachedBmp_113 = function() {
	this.initialize(img.CachedBmp_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,13);


(lib.CachedBmp_268 = function() {
	this.initialize(img.CachedBmp_268);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3481,1959);


(lib.CachedBmp_112 = function() {
	this.initialize(img.CachedBmp_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.CachedBmp_111 = function() {
	this.initialize(img.CachedBmp_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,25);


(lib.CachedBmp_110 = function() {
	this.initialize(img.CachedBmp_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,22);


(lib.CachedBmp_109 = function() {
	this.initialize(img.CachedBmp_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,22);


(lib.CachedBmp_108 = function() {
	this.initialize(img.CachedBmp_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,6);


(lib.CachedBmp_107 = function() {
	this.initialize(img.CachedBmp_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,29);


(lib.CachedBmp_106 = function() {
	this.initialize(img.CachedBmp_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,28);


(lib.CachedBmp_105 = function() {
	this.initialize(img.CachedBmp_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,30);


(lib.CachedBmp_104 = function() {
	this.initialize(img.CachedBmp_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,26);


(lib.CachedBmp_102 = function() {
	this.initialize(img.CachedBmp_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,11);


(lib.CachedBmp_103 = function() {
	this.initialize(img.CachedBmp_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,58);


(lib.CachedBmp_101 = function() {
	this.initialize(img.CachedBmp_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,9);


(lib.CachedBmp_100 = function() {
	this.initialize(img.CachedBmp_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,8);


(lib.CachedBmp_99 = function() {
	this.initialize(img.CachedBmp_99);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,17);


(lib.CachedBmp_97 = function() {
	this.initialize(img.CachedBmp_97);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,17);


(lib.CachedBmp_96 = function() {
	this.initialize(img.CachedBmp_96);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,6);


(lib.CachedBmp_95 = function() {
	this.initialize(img.CachedBmp_95);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,5);


(lib.CachedBmp_94 = function() {
	this.initialize(img.CachedBmp_94);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,4);


(lib.CachedBmp_93 = function() {
	this.initialize(img.CachedBmp_93);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,6);


(lib.CachedBmp_92 = function() {
	this.initialize(img.CachedBmp_92);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_91 = function() {
	this.initialize(img.CachedBmp_91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_90 = function() {
	this.initialize(img.CachedBmp_90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_89 = function() {
	this.initialize(img.CachedBmp_89);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,3);


(lib.CachedBmp_88 = function() {
	this.initialize(img.CachedBmp_88);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_87 = function() {
	this.initialize(img.CachedBmp_87);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_86 = function() {
	this.initialize(img.CachedBmp_86);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,3);


(lib.CachedBmp_85 = function() {
	this.initialize(img.CachedBmp_85);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,3);


(lib.CachedBmp_84 = function() {
	this.initialize(img.CachedBmp_84);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.CachedBmp_83 = function() {
	this.initialize(img.CachedBmp_83);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,4);


(lib.CachedBmp_82 = function() {
	this.initialize(img.CachedBmp_82);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,4);


(lib.CachedBmp_81 = function() {
	this.initialize(img.CachedBmp_81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.CachedBmp_80 = function() {
	this.initialize(img.CachedBmp_80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_79 = function() {
	this.initialize(img.CachedBmp_79);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.CachedBmp_78 = function() {
	this.initialize(img.CachedBmp_78);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_77 = function() {
	this.initialize(img.CachedBmp_77);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,4);


(lib.CachedBmp_76 = function() {
	this.initialize(img.CachedBmp_76);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_75 = function() {
	this.initialize(img.CachedBmp_75);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,4);


(lib.CachedBmp_74 = function() {
	this.initialize(img.CachedBmp_74);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,4);


(lib.CachedBmp_73 = function() {
	this.initialize(img.CachedBmp_73);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_72 = function() {
	this.initialize(img.CachedBmp_72);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_71 = function() {
	this.initialize(img.CachedBmp_71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_70 = function() {
	this.initialize(img.CachedBmp_70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_69 = function() {
	this.initialize(img.CachedBmp_69);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.CachedBmp_68 = function() {
	this.initialize(img.CachedBmp_68);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.CachedBmp_67 = function() {
	this.initialize(img.CachedBmp_67);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_66 = function() {
	this.initialize(img.CachedBmp_66);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,2);


(lib.CachedBmp_65 = function() {
	this.initialize(img.CachedBmp_65);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,1);


(lib.CachedBmp_63 = function() {
	this.initialize(img.CachedBmp_63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,6);


(lib.CachedBmp_64 = function() {
	this.initialize(img.CachedBmp_64);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,3);


(lib.CachedBmp_62 = function() {
	this.initialize(img.CachedBmp_62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.CachedBmp_61 = function() {
	this.initialize(img.CachedBmp_61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4,5);


(lib.CachedBmp_60 = function() {
	this.initialize(img.CachedBmp_60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,3);


(lib.CachedBmp_59 = function() {
	this.initialize(img.CachedBmp_59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.CachedBmp_58 = function() {
	this.initialize(img.CachedBmp_58);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,74);


(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,73);


(lib.CachedBmp_56 = function() {
	this.initialize(img.CachedBmp_56);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,35);


(lib.CachedBmp_55 = function() {
	this.initialize(img.CachedBmp_55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,38);


(lib.CachedBmp_54 = function() {
	this.initialize(img.CachedBmp_54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,12);


(lib.CachedBmp_53 = function() {
	this.initialize(img.CachedBmp_53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,11);


(lib.CachedBmp_52 = function() {
	this.initialize(img.CachedBmp_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,7);


(lib.CachedBmp_51 = function() {
	this.initialize(img.CachedBmp_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,21);


(lib.CachedBmp_50 = function() {
	this.initialize(img.CachedBmp_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,29);


(lib.CachedBmp_49 = function() {
	this.initialize(img.CachedBmp_49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,8);


(lib.CachedBmp_48 = function() {
	this.initialize(img.CachedBmp_48);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,9);


(lib.CachedBmp_47 = function() {
	this.initialize(img.CachedBmp_47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,6);


(lib.CachedBmp_46 = function() {
	this.initialize(img.CachedBmp_46);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.CachedBmp_44 = function() {
	this.initialize(img.CachedBmp_44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,5);


(lib.CachedBmp_43 = function() {
	this.initialize(img.CachedBmp_43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,4);


(lib.CachedBmp_42 = function() {
	this.initialize(img.CachedBmp_42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,50);


(lib.CachedBmp_41 = function() {
	this.initialize(img.CachedBmp_41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,49);


(lib.CachedBmp_40 = function() {
	this.initialize(img.CachedBmp_40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,5);


(lib.CachedBmp_39 = function() {
	this.initialize(img.CachedBmp_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,4);


(lib.CachedBmp_38 = function() {
	this.initialize(img.CachedBmp_38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,4);


(lib.CachedBmp_37 = function() {
	this.initialize(img.CachedBmp_37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,4);


(lib.CachedBmp_36 = function() {
	this.initialize(img.CachedBmp_36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,4);


(lib.CachedBmp_34 = function() {
	this.initialize(img.CachedBmp_34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,41);


(lib.CachedBmp_35 = function() {
	this.initialize(img.CachedBmp_35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,42);


(lib.CachedBmp_32 = function() {
	this.initialize(img.CachedBmp_32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,29);


(lib.CachedBmp_33 = function() {
	this.initialize(img.CachedBmp_33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,30);


(lib.CachedBmp_30 = function() {
	this.initialize(img.CachedBmp_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,9);


(lib.CachedBmp_31 = function() {
	this.initialize(img.CachedBmp_31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.CachedBmp_27 = function() {
	this.initialize(img.CachedBmp_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,9);


(lib.CachedBmp_29 = function() {
	this.initialize(img.CachedBmp_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.CachedBmp_26 = function() {
	this.initialize(img.CachedBmp_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,9);


(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,28);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,14);


(lib.CachedBmp_28 = function() {
	this.initialize(img.CachedBmp_28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,27);


(lib.CachedBmp_22 = function() {
	this.initialize(img.CachedBmp_22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,10);


(lib.CachedBmp_21 = function() {
	this.initialize(img.CachedBmp_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,10);


(lib.CachedBmp_20 = function() {
	this.initialize(img.CachedBmp_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,9);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,38);


(lib.CachedBmp_18 = function() {
	this.initialize(img.CachedBmp_18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,31);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,10);


(lib.CachedBmp_16 = function() {
	this.initialize(img.CachedBmp_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,11);


(lib.CachedBmp_15 = function() {
	this.initialize(img.CachedBmp_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,12);


(lib.CachedBmp_269 = function() {
	this.initialize(img.CachedBmp_269);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3840,2160);


(lib.CachedBmp_14 = function() {
	this.initialize(img.CachedBmp_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8,13);


(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,25);


(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,24);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,22);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,22);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,12);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,12);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,14);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,14);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,23);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,19);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,119);


(lib.Image_10 = function() {
	this.initialize(img.Image_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,55);


(lib.Image_12 = function() {
	this.initialize(img.Image_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,67);


(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,161);


(lib.Image_2 = function() {
	this.initialize(img.Image_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,85);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,85);


(lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1 = function() {
	this.initialize(img.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.Image_4 = function() {
	this.initialize(img.Image_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,144);


(lib.Image_8 = function() {
	this.initialize(img.Image_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,67);


(lib.Image_6 = function() {
	this.initialize(img.Image_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,111);


(lib.CachedBmp_2 = function() {
	this.initialize(img.CachedBmp_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,147);// helper functions:

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


(lib.Symbol25copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_439();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1,23.5);


(lib.Symbol20copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_438();
	this.instance.setTransform(-138.2,-72,0.4133,0.4133);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-72,138.2,96.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* _root.red.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
	}
	this.frame_319 = function() {
		/* _root.red.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;
		_root.b4.enabled=true;
		stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(319).call(this.frame_319).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_437();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.5,114.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_436();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,944,621);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_435();
	this.instance.setTransform(-0.5,-13.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-0.5,-13.5,1,27), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedBmp_434();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,112.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedBmp_432();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,112.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedBmp_430();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,112.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CachedBmp_428();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,112.5);


(lib.Image_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_12();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_11, new cjs.Rectangle(0,0,245.9,135.1), null);


(lib.Image_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_10();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_9, new cjs.Rectangle(0,0,183.4,110.9), null);


(lib.Image_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_8();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_7, new cjs.Rectangle(0,0,245.9,135.1), null);


(lib.Image_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_6();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_5, new cjs.Rectangle(0,0,465.6,223.7), null);


(lib.Image_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_4();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_3, new cjs.Rectangle(0,0,634.8,290.2), null);


(lib.Image_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_2();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image_1, new cjs.Rectangle(0,0,334.6,171.3), null);


(lib.Image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,0,2.0153,2.0153);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Image, new cjs.Rectangle(0,0,334.6,171.3), null);


(lib.Symbol21copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{corsound:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		/* Click to Play/Stop Sound
		Clicking on the symbol instance plays the specified sound.
		Clicking on the symbol instance a second time stops the sound.
		
		Instructions:
		1. Replace "http://www.helpexamples.com/flash/sound/song1.mp3" below with the desired URL address of your sound file. Keep the quotation marks ("").
		*/
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(28).call(this.frame_33).wait(1));

	// Layer_1
	this.movieClip_1 = new lib.Symbol7();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(0,13.05);
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(1).to({_off:false},0).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,1,27);


(lib.Symbol19copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(-13.65,-31.4,1,1,0,0,0,60.2,57.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(4).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-88.6,120.5,114.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_33 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(1));

	// Layer_7
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(472.1,310.4,1,1,0,0,0,472.1,310.4);
	this.instance.alpha = 0.1016;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},32).wait(1));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_426();
	this.instance_1.setTransform(-0.45,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,945,622);


// stage content:
(lib.red3_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{myb1:0});

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
		 
		////var my=createjs.Sound.createInstance("intro");
		//this.my;
		//my.play();
		//this.b1.enabled=false;
		createjs.Sound.play("intro");
		
		
		
		this.b1.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			this.red_mc1.play();
			this.correct1.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		this.b2.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.red_mc1.play();
			this.wrong1.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			// End your custom code
		}
		this.b3.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.red_mc1.play();
			this.wrong2.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
			// End your custom code
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.red_mc1.play();
			this.wrong3.play();
			var my4=createjs.Sound.createInstance("wro");
		this.my4;
		my4.play();
			//this.wro_sou.play():
			
			// End your custom code
		}
		/* Add Instance from Library to the Stage
		Adds an instance of the specified MovieClip or Button Library symbol to the stage.
		
		Instructions:
		Add "LibrarySymbol" as the linkage property of the symbol.
		*/
		
		
		// If you want to add a different symbol from the library,
		// enter a different name in the Class text field at step 2 above and in the code below.
		//var fl_MyInstance = new lib.LibrarySymbol("3.wav");
		//this.addChild(fl_MyInstance);
		//fl_MyInstance.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_266();
	this.instance.setTransform(281.2,76.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_265();
	this.instance_1.setTransform(173.15,101.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_264();
	this.instance_2.setTransform(173.55,102.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_263();
	this.instance_3.setTransform(157.55,104.6,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_262();
	this.instance_4.setTransform(158.05,105.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_261();
	this.instance_5.setTransform(153.7,96.95,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_260();
	this.instance_6.setTransform(154.35,97.45,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_259();
	this.instance_7.setTransform(156.25,93.7,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_258();
	this.instance_8.setTransform(156.7,94.2,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_257();
	this.instance_9.setTransform(157.85,104.95,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_256();
	this.instance_10.setTransform(158.35,105.45,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_255();
	this.instance_11.setTransform(154,97.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_254();
	this.instance_12.setTransform(154.6,97.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_253();
	this.instance_13.setTransform(156.55,94.05,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_252();
	this.instance_14.setTransform(157,94.5,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_251();
	this.instance_15.setTransform(147,92.4,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_250();
	this.instance_16.setTransform(150.2,90.95,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_249();
	this.instance_17.setTransform(137.3,106.65,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_248();
	this.instance_18.setTransform(151.4,118.75,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_247();
	this.instance_19.setTransform(143.5,110.95,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_246();
	this.instance_20.setTransform(142.7,101.2,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_245();
	this.instance_21.setTransform(150.2,90.8,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_244();
	this.instance_22.setTransform(140.85,92.15,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_243();
	this.instance_23.setTransform(141.65,115.25,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_242();
	this.instance_24.setTransform(245,100.4,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_241();
	this.instance_25.setTransform(278.6,89,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_240();
	this.instance_26.setTransform(277.8,94.5,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_239();
	this.instance_27.setTransform(275.6,94.65,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_238();
	this.instance_28.setTransform(278.15,92.8,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_237();
	this.instance_29.setTransform(277.55,92.3,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_236();
	this.instance_30.setTransform(272.55,85.45,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_235();
	this.instance_31.setTransform(274.65,84.45,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_234();
	this.instance_32.setTransform(277,84.7,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_233();
	this.instance_33.setTransform(277.75,86.8,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_232();
	this.instance_34.setTransform(277.6,86.85,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_231();
	this.instance_35.setTransform(278.8,86.45,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_230();
	this.instance_36.setTransform(276.65,86.05,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_229();
	this.instance_37.setTransform(273.8,86.85,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_228();
	this.instance_38.setTransform(273.1,88.2,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_227();
	this.instance_39.setTransform(270.5,87.1,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_226();
	this.instance_40.setTransform(279.5,85.15,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_225();
	this.instance_41.setTransform(281.2,90.45,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_224();
	this.instance_42.setTransform(274.6,96.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_223();
	this.instance_43.setTransform(274.35,95.2,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_222();
	this.instance_44.setTransform(273.6,91.75,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_221();
	this.instance_45.setTransform(278.45,93.3,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_220();
	this.instance_46.setTransform(279.7,87.05,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_219();
	this.instance_47.setTransform(279.45,86.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_218();
	this.instance_48.setTransform(279.1,86.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_217();
	this.instance_49.setTransform(277.95,87,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_216();
	this.instance_50.setTransform(277.25,87.05,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_215();
	this.instance_51.setTransform(279.45,89,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_214();
	this.instance_52.setTransform(277.7,89.15,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_213();
	this.instance_53.setTransform(276.65,88.2,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_212();
	this.instance_54.setTransform(276.9,87.45,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_211();
	this.instance_55.setTransform(277,87.5,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_210();
	this.instance_56.setTransform(278.5,88.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_209();
	this.instance_57.setTransform(278.8,87.65,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_208();
	this.instance_58.setTransform(278.8,87.65,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_207();
	this.instance_59.setTransform(273.4,90.35,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_206();
	this.instance_60.setTransform(275.1,101.1,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_205();
	this.instance_61.setTransform(274.65,98.85,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_204();
	this.instance_62.setTransform(275.3,112.25,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_203();
	this.instance_63.setTransform(275.7,110.45,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_202();
	this.instance_64.setTransform(275.2,107.25,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_201();
	this.instance_65.setTransform(275,105.25,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_200();
	this.instance_66.setTransform(274.75,102.2,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_199();
	this.instance_67.setTransform(269.6,80.2,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_198();
	this.instance_68.setTransform(269.7,80.35,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_197();
	this.instance_69.setTransform(272.05,89.35,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_196();
	this.instance_70.setTransform(265.75,97.9,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_195();
	this.instance_71.setTransform(194.5,84.5,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_194();
	this.instance_72.setTransform(255.5,84,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_193();
	this.instance_73.setTransform(245.9,92.4,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_192();
	this.instance_74.setTransform(246.65,102.15,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_191();
	this.instance_75.setTransform(241.05,102.8,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_190();
	this.instance_76.setTransform(241.3,98.25,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_189();
	this.instance_77.setTransform(242.85,101.3,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_188();
	this.instance_78.setTransform(245.2,99.15,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_187();
	this.instance_79.setTransform(245.95,95.95,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_186();
	this.instance_80.setTransform(246.6,93.25,0.5,0.5);

	this.instance_81 = new lib.CachedBmp_185();
	this.instance_81.setTransform(242.7,109.8,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_184();
	this.instance_82.setTransform(243.5,106.5,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_183();
	this.instance_83.setTransform(244.3,102.95,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_182();
	this.instance_84.setTransform(237.2,113.75,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_181();
	this.instance_85.setTransform(244.65,89.9,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_180();
	this.instance_86.setTransform(237.15,90.55,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_179();
	this.instance_87.setTransform(237.3,90.7,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_178();
	this.instance_88.setTransform(237,113.75,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_177();
	this.instance_89.setTransform(237.2,113.95,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_176();
	this.instance_90.setTransform(244.55,89.75,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_175();
	this.instance_91.setTransform(244.8,90,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_174();
	this.instance_92.setTransform(243.6,103.35,0.5,0.5);

	this.instance_93 = new lib.CachedBmp_173();
	this.instance_93.setTransform(197.85,81.95,0.5,0.5);

	this.instance_94 = new lib.CachedBmp_172();
	this.instance_94.setTransform(201.75,85.6,0.5,0.5);

	this.instance_95 = new lib.CachedBmp_171();
	this.instance_95.setTransform(198.6,82.45,0.5,0.5);

	this.instance_96 = new lib.CachedBmp_170();
	this.instance_96.setTransform(197.4,82.45,0.5,0.5);

	this.instance_97 = new lib.CachedBmp_169();
	this.instance_97.setTransform(194.95,82.45,0.5,0.5);

	this.instance_98 = new lib.CachedBmp_168();
	this.instance_98.setTransform(195,82.45,0.5,0.5);

	this.instance_99 = new lib.CachedBmp_167();
	this.instance_99.setTransform(197.35,88.75,0.5,0.5);

	this.instance_100 = new lib.CachedBmp_166();
	this.instance_100.setTransform(197.1,88.75,0.5,0.5);

	this.instance_101 = new lib.CachedBmp_165();
	this.instance_101.setTransform(198.15,88.35,0.5,0.5);

	this.instance_102 = new lib.CachedBmp_164();
	this.instance_102.setTransform(199.95,87.7,0.5,0.5);

	this.instance_103 = new lib.CachedBmp_163();
	this.instance_103.setTransform(197.2,87.8,0.5,0.5);

	this.instance_104 = new lib.CachedBmp_162();
	this.instance_104.setTransform(199.7,87.4,0.5,0.5);

	this.instance_105 = new lib.CachedBmp_161();
	this.instance_105.setTransform(196.95,87.5,0.5,0.5);

	this.instance_106 = new lib.CachedBmp_160();
	this.instance_106.setTransform(199.25,87.25,0.5,0.5);

	this.instance_107 = new lib.CachedBmp_159();
	this.instance_107.setTransform(196.5,87.3,0.5,0.5);

	this.instance_108 = new lib.CachedBmp_158();
	this.instance_108.setTransform(199.75,86.65,0.5,0.5);

	this.instance_109 = new lib.CachedBmp_157();
	this.instance_109.setTransform(196.6,86.85,0.5,0.5);

	this.instance_110 = new lib.CachedBmp_156();
	this.instance_110.setTransform(194.8,84.95,0.5,0.5);

	this.instance_111 = new lib.CachedBmp_155();
	this.instance_111.setTransform(195.05,85.7,0.5,0.5);

	this.instance_112 = new lib.CachedBmp_154();
	this.instance_112.setTransform(195.05,85.75,0.5,0.5);

	this.instance_113 = new lib.CachedBmp_153();
	this.instance_113.setTransform(222.6,94.65,0.5,0.5);

	this.instance_114 = new lib.CachedBmp_152();
	this.instance_114.setTransform(222.95,95.05,0.5,0.5);

	this.instance_115 = new lib.CachedBmp_151();
	this.instance_115.setTransform(206.6,101.15,0.5,0.5);

	this.instance_116 = new lib.CachedBmp_150();
	this.instance_116.setTransform(206.9,101.5,0.5,0.5);

	this.instance_117 = new lib.CachedBmp_149();
	this.instance_117.setTransform(258.7,96.6,0.5,0.5);

	this.instance_118 = new lib.CachedBmp_148();
	this.instance_118.setTransform(258.85,96.75,0.5,0.5);

	this.instance_119 = new lib.CachedBmp_147();
	this.instance_119.setTransform(258.1,102.15,0.5,0.5);

	this.instance_120 = new lib.CachedBmp_146();
	this.instance_120.setTransform(258.4,102.6,0.5,0.5);

	this.instance_121 = new lib.CachedBmp_145();
	this.instance_121.setTransform(186.25,96.6,0.5,0.5);

	this.instance_122 = new lib.CachedBmp_144();
	this.instance_122.setTransform(186.4,96.75,0.5,0.5);

	this.instance_123 = new lib.CachedBmp_143();
	this.instance_123.setTransform(185.65,102.15,0.5,0.5);

	this.instance_124 = new lib.CachedBmp_142();
	this.instance_124.setTransform(185.95,102.6,0.5,0.5);

	this.instance_125 = new lib.CachedBmp_141();
	this.instance_125.setTransform(159.2,106.8,0.5,0.5);

	this.instance_126 = new lib.CachedBmp_140();
	this.instance_126.setTransform(161.4,98.85,0.5,0.5);

	this.instance_127 = new lib.CachedBmp_139();
	this.instance_127.setTransform(207.6,94.05,0.5,0.5);

	this.instance_128 = new lib.CachedBmp_138();
	this.instance_128.setTransform(210.6,94.15,0.5,0.5);

	this.instance_129 = new lib.CachedBmp_137();
	this.instance_129.setTransform(195.25,90.2,0.5,0.5);

	this.instance_130 = new lib.CachedBmp_136();
	this.instance_130.setTransform(198.1,98.35,0.5,0.5);

	this.instance_131 = new lib.CachedBmp_135();
	this.instance_131.setTransform(198.15,97,0.5,0.5);

	this.instance_132 = new lib.CachedBmp_134();
	this.instance_132.setTransform(198.2,95.75,0.5,0.5);

	this.instance_133 = new lib.CachedBmp_133();
	this.instance_133.setTransform(197.2,91.85,0.5,0.5);

	this.instance_134 = new lib.CachedBmp_132();
	this.instance_134.setTransform(203.1,106.3,0.5,0.5);

	this.instance_135 = new lib.CachedBmp_131();
	this.instance_135.setTransform(192.05,105.8,0.5,0.5);

	this.instance_136 = new lib.CachedBmp_130();
	this.instance_136.setTransform(203.4,106.8,0.5,0.5);

	this.instance_137 = new lib.CachedBmp_129();
	this.instance_137.setTransform(190.15,105.9,0.5,0.5);

	this.instance_138 = new lib.CachedBmp_128();
	this.instance_138.setTransform(192.05,90.05,0.5,0.5);

	this.instance_139 = new lib.CachedBmp_127();
	this.instance_139.setTransform(191.25,84.25,0.5,0.5);

	this.instance_140 = new lib.CachedBmp_126();
	this.instance_140.setTransform(191.35,84.4,0.5,0.5);

	this.instance_141 = new lib.CachedBmp_125();
	this.instance_141.setTransform(195.25,91.2,0.5,0.5);

	this.instance_142 = new lib.CachedBmp_124();
	this.instance_142.setTransform(195.35,91.25,0.5,0.5);

	this.instance_143 = new lib.CachedBmp_123();
	this.instance_143.setTransform(200.5,91.2,0.5,0.5);

	this.instance_144 = new lib.CachedBmp_122();
	this.instance_144.setTransform(201,93.3,0.5,0.5);

	this.instance_145 = new lib.CachedBmp_121();
	this.instance_145.setTransform(201.1,93.45,0.5,0.5);

	this.instance_146 = new lib.CachedBmp_120();
	this.instance_146.setTransform(196.95,91.85,0.5,0.5);

	this.instance_147 = new lib.CachedBmp_119();
	this.instance_147.setTransform(192.05,100.05,0.5,0.5);

	this.instance_148 = new lib.CachedBmp_118();
	this.instance_148.setTransform(195.15,100.5,0.5,0.5);

	this.instance_149 = new lib.CachedBmp_117();
	this.instance_149.setTransform(195.5,103.4,0.5,0.5);

	this.instance_150 = new lib.CachedBmp_116();
	this.instance_150.setTransform(167.7,118.05,0.5,0.5);

	this.instance_151 = new lib.CachedBmp_115();
	this.instance_151.setTransform(160.2,121.45,0.5,0.5);

	this.instance_152 = new lib.CachedBmp_114();
	this.instance_152.setTransform(169.6,92.9,0.5,0.5);

	this.instance_153 = new lib.CachedBmp_113();
	this.instance_153.setTransform(161.1,87.3,0.5,0.5);

	this.instance_154 = new lib.CachedBmp_112();
	this.instance_154.setTransform(156.2,120.9,0.5,0.5);

	this.instance_155 = new lib.CachedBmp_111();
	this.instance_155.setTransform(155.4,81.85,0.5,0.5);

	this.instance_156 = new lib.CachedBmp_110();
	this.instance_156.setTransform(164.7,120.05,0.5,0.5);

	this.instance_157 = new lib.CachedBmp_109();
	this.instance_157.setTransform(166,84.2,0.5,0.5);

	this.instance_158 = new lib.CachedBmp_108();
	this.instance_158.setTransform(137.55,106.85,0.5,0.5);

	this.instance_159 = new lib.CachedBmp_107();
	this.instance_159.setTransform(173.5,102.1,0.5,0.5);

	this.instance_160 = new lib.CachedBmp_106();
	this.instance_160.setTransform(173.9,102.4,0.5,0.5);

	this.instance_161 = new lib.CachedBmp_105();
	this.instance_161.setTransform(156.75,103.7,0.5,0.5);

	this.instance_162 = new lib.CachedBmp_104();
	this.instance_162.setTransform(153.2,96.3,0.5,0.5);

	this.instance_163 = new lib.CachedBmp_103();
	this.instance_163.setTransform(155.6,93.05,0.5,0.5);

	this.instance_164 = new lib.CachedBmp_102();
	this.instance_164.setTransform(151.5,118.8,0.5,0.5);

	this.instance_165 = new lib.CachedBmp_101();
	this.instance_165.setTransform(143.65,111.05,0.5,0.5);

	this.instance_166 = new lib.CachedBmp_100();
	this.instance_166.setTransform(142.9,101.5,0.5,0.5);

	this.instance_167 = new lib.CachedBmp_99();
	this.instance_167.setTransform(150.55,91.3,0.5,0.5);

	this.instance_168 = new lib.CachedBmp_98();
	this.instance_168.setTransform(141.4,92.85,0.5,0.5);

	this.instance_169 = new lib.CachedBmp_97();
	this.instance_169.setTransform(141.9,115.25,0.5,0.5);

	this.instance_170 = new lib.CachedBmp_96();
	this.instance_170.setTransform(245.35,100.75,0.5,0.5);

	this.instance_171 = new lib.CachedBmp_95();
	this.instance_171.setTransform(278.65,88.95,0.5,0.5);

	this.instance_172 = new lib.CachedBmp_94();
	this.instance_172.setTransform(275.55,94.5,0.5,0.5);

	this.instance_173 = new lib.CachedBmp_93();
	this.instance_173.setTransform(278.05,92.65,0.5,0.5);

	this.instance_174 = new lib.CachedBmp_92();
	this.instance_174.setTransform(277.4,92.15,0.5,0.5);

	this.instance_175 = new lib.CachedBmp_91();
	this.instance_175.setTransform(273,85.7,0.5,0.5);

	this.instance_176 = new lib.CachedBmp_90();
	this.instance_176.setTransform(275,84.65,0.5,0.5);

	this.instance_177 = new lib.CachedBmp_89();
	this.instance_177.setTransform(277.15,84.85,0.5,0.5);

	this.instance_178 = new lib.CachedBmp_88();
	this.instance_178.setTransform(277.65,86.65,0.5,0.5);

	this.instance_179 = new lib.CachedBmp_87();
	this.instance_179.setTransform(277.5,86.65,0.5,0.5);

	this.instance_180 = new lib.CachedBmp_86();
	this.instance_180.setTransform(276.6,85.95,0.5,0.5);

	this.instance_181 = new lib.CachedBmp_85();
	this.instance_181.setTransform(273.65,86.65,0.5,0.5);

	this.instance_182 = new lib.CachedBmp_84();
	this.instance_182.setTransform(272.95,88.05,0.5,0.5);

	this.instance_183 = new lib.CachedBmp_83();
	this.instance_183.setTransform(270.4,87,0.5,0.5);

	this.instance_184 = new lib.CachedBmp_82();
	this.instance_184.setTransform(279.4,85.05,0.5,0.5);

	this.instance_185 = new lib.CachedBmp_81();
	this.instance_185.setTransform(281.05,90.35,0.5,0.5);

	this.instance_186 = new lib.CachedBmp_80();
	this.instance_186.setTransform(274.95,97.25,0.5,0.5);

	this.instance_187 = new lib.CachedBmp_79();
	this.instance_187.setTransform(274.7,95.5,0.5,0.5);

	this.instance_188 = new lib.CachedBmp_78();
	this.instance_188.setTransform(273.9,92.05,0.5,0.5);

	this.instance_189 = new lib.CachedBmp_77();
	this.instance_189.setTransform(278.8,93.55,0.5,0.5);

	this.instance_190 = new lib.CachedBmp_76();
	this.instance_190.setTransform(279.6,86.9,0.5,0.5);

	this.instance_191 = new lib.CachedBmp_75();
	this.instance_191.setTransform(279.3,86.7,0.5,0.5);

	this.instance_192 = new lib.CachedBmp_74();
	this.instance_192.setTransform(278.95,86.7,0.5,0.5);

	this.instance_193 = new lib.CachedBmp_73();
	this.instance_193.setTransform(277.85,86.8,0.5,0.5);

	this.instance_194 = new lib.CachedBmp_72();
	this.instance_194.setTransform(277.15,86.9,0.5,0.5);

	this.instance_195 = new lib.CachedBmp_71();
	this.instance_195.setTransform(279.8,89.35,0.5,0.5);

	this.instance_196 = new lib.CachedBmp_70();
	this.instance_196.setTransform(278,89.45,0.5,0.5);

	this.instance_197 = new lib.CachedBmp_69();
	this.instance_197.setTransform(277,88.5,0.5,0.5);

	this.instance_198 = new lib.CachedBmp_68();
	this.instance_198.setTransform(276.8,87.3,0.5,0.5);

	this.instance_199 = new lib.CachedBmp_67();
	this.instance_199.setTransform(278.85,88.4,0.5,0.5);

	this.instance_200 = new lib.CachedBmp_66();
	this.instance_200.setTransform(273.75,90.65,0.5,0.5);

	this.instance_201 = new lib.CachedBmp_65();
	this.instance_201.setTransform(275.45,101.4,0.5,0.5);

	this.instance_202 = new lib.CachedBmp_64();
	this.instance_202.setTransform(274.95,99.15,0.5,0.5);

	this.instance_203 = new lib.CachedBmp_63();
	this.instance_203.setTransform(275.65,112.55,0.5,0.5);

	this.instance_204 = new lib.CachedBmp_62();
	this.instance_204.setTransform(276.05,110.75,0.5,0.5);

	this.instance_205 = new lib.CachedBmp_61();
	this.instance_205.setTransform(275.55,107.55,0.5,0.5);

	this.instance_206 = new lib.CachedBmp_60();
	this.instance_206.setTransform(275.35,105.55,0.5,0.5);

	this.instance_207 = new lib.CachedBmp_59();
	this.instance_207.setTransform(275.1,102.5,0.5,0.5);

	this.instance_208 = new lib.CachedBmp_58();
	this.instance_208.setTransform(269.8,80.4,0.5,0.5);

	this.instance_209 = new lib.CachedBmp_57();
	this.instance_209.setTransform(269.95,80.55,0.5,0.5);

	this.instance_210 = new lib.CachedBmp_56();
	this.instance_210.setTransform(272.35,89.7,0.5,0.5);

	this.instance_211 = new lib.CachedBmp_55();
	this.instance_211.setTransform(266.1,98.2,0.5,0.5);

	this.instance_212 = new lib.CachedBmp_54();
	this.instance_212.setTransform(238.6,81.1,0.5,0.5);

	this.instance_213 = new lib.CachedBmp_53();
	this.instance_213.setTransform(238.6,81.25,0.5,0.5);

	this.instance_214 = new lib.CachedBmp_52();
	this.instance_214.setTransform(243.25,85.4,0.5,0.5);

	this.instance_215 = new lib.CachedBmp_51();
	this.instance_215.setTransform(246.3,92.8,0.5,0.5);

	this.instance_216 = new lib.CachedBmp_50();
	this.instance_216.setTransform(246.1,102,0.5,0.5);

	this.instance_217 = new lib.CachedBmp_49();
	this.instance_217.setTransform(241.4,103.1,0.5,0.5);

	this.instance_218 = new lib.CachedBmp_48();
	this.instance_218.setTransform(241.65,98.55,0.5,0.5);

	this.instance_219 = new lib.CachedBmp_47();
	this.instance_219.setTransform(243.2,101.6,0.5,0.5);

	this.instance_220 = new lib.CachedBmp_46();
	this.instance_220.setTransform(245.05,99,0.5,0.5);

	this.instance_221 = new lib.CachedBmp_45();
	this.instance_221.setTransform(244.15,102.8,0.5,0.5);

	this.instance_222 = new lib.CachedBmp_44();
	this.instance_222.setTransform(237.2,114.1,0.5,0.5);

	this.instance_223 = new lib.CachedBmp_43();
	this.instance_223.setTransform(245,89.95,0.5,0.5);

	this.instance_224 = new lib.CachedBmp_42();
	this.instance_224.setTransform(237.5,90.9,0.5,0.5);

	this.instance_225 = new lib.CachedBmp_41();
	this.instance_225.setTransform(237.65,91,0.5,0.5);

	this.instance_226 = new lib.CachedBmp_40();
	this.instance_226.setTransform(237.3,114.1,0.5,0.5);

	this.instance_227 = new lib.CachedBmp_39();
	this.instance_227.setTransform(237.55,114.35,0.5,0.5);

	this.instance_228 = new lib.CachedBmp_38();
	this.instance_228.setTransform(245,90.05,0.5,0.5);

	this.instance_229 = new lib.CachedBmp_37();
	this.instance_229.setTransform(245.05,89.95,0.5,0.5);

	this.instance_230 = new lib.CachedBmp_36();
	this.instance_230.setTransform(243.9,103.6,0.5,0.5);

	this.instance_231 = new lib.CachedBmp_35();
	this.instance_231.setTransform(222.95,94.95,0.5,0.5);

	this.instance_232 = new lib.CachedBmp_34();
	this.instance_232.setTransform(223.3,95.35,0.5,0.5);

	this.instance_233 = new lib.CachedBmp_33();
	this.instance_233.setTransform(206.95,101.45,0.5,0.5);

	this.instance_234 = new lib.CachedBmp_32();
	this.instance_234.setTransform(207.25,101.85,0.5,0.5);

	this.instance_235 = new lib.CachedBmp_31();
	this.instance_235.setTransform(259.05,96.9,0.5,0.5);

	this.instance_236 = new lib.CachedBmp_30();
	this.instance_236.setTransform(259.2,97.1,0.5,0.5);

	this.instance_237 = new lib.CachedBmp_29();
	this.instance_237.setTransform(258.4,102.45,0.5,0.5);

	this.instance_238 = new lib.CachedBmp_28();
	this.instance_238.setTransform(258.7,102.9,0.5,0.5);

	this.instance_239 = new lib.CachedBmp_27();
	this.instance_239.setTransform(186.6,96.9,0.5,0.5);

	this.instance_240 = new lib.CachedBmp_26();
	this.instance_240.setTransform(186.75,97.1,0.5,0.5);

	this.instance_241 = new lib.CachedBmp_25();
	this.instance_241.setTransform(185.95,102.45,0.5,0.5);

	this.instance_242 = new lib.CachedBmp_28();
	this.instance_242.setTransform(186.25,102.9,0.5,0.5);

	this.instance_243 = new lib.CachedBmp_23();
	this.instance_243.setTransform(159.5,107.1,0.5,0.5);

	this.instance_244 = new lib.CachedBmp_22();
	this.instance_244.setTransform(161.75,99.15,0.5,0.5);

	this.instance_245 = new lib.CachedBmp_21();
	this.instance_245.setTransform(207.95,94.35,0.5,0.5);

	this.instance_246 = new lib.CachedBmp_20();
	this.instance_246.setTransform(210.95,94.45,0.5,0.5);

	this.instance_247 = new lib.CachedBmp_19();
	this.instance_247.setTransform(195.5,100.85,0.5,0.5);

	this.instance_248 = new lib.CachedBmp_18();
	this.instance_248.setTransform(195.8,103.7,0.5,0.5);

	this.instance_249 = new lib.CachedBmp_17();
	this.instance_249.setTransform(168.05,118.45,0.5,0.5);

	this.instance_250 = new lib.CachedBmp_16();
	this.instance_250.setTransform(160.45,121.75,0.5,0.5);

	this.instance_251 = new lib.CachedBmp_15();
	this.instance_251.setTransform(169.65,93.25,0.5,0.5);

	this.instance_252 = new lib.CachedBmp_14();
	this.instance_252.setTransform(161.3,87.6,0.5,0.5);

	this.instance_253 = new lib.CachedBmp_13();
	this.instance_253.setTransform(156.2,121.2,0.5,0.5);

	this.instance_254 = new lib.CachedBmp_12();
	this.instance_254.setTransform(155.7,82.15,0.5,0.5);

	this.instance_255 = new lib.CachedBmp_11();
	this.instance_255.setTransform(164.95,120.4,0.5,0.5);

	this.instance_256 = new lib.CachedBmp_10();
	this.instance_256.setTransform(166,84.55,0.5,0.5);

	this.instance_257 = new lib.CachedBmp_9();
	this.instance_257.setTransform(235.05,121.65,0.5,0.5);

	this.instance_258 = new lib.CachedBmp_8();
	this.instance_258.setTransform(235.15,121.8,0.5,0.5);

	this.instance_259 = new lib.CachedBmp_7();
	this.instance_259.setTransform(190.1,120.45,0.5,0.5);

	this.instance_260 = new lib.CachedBmp_6();
	this.instance_260.setTransform(190.25,120.55,0.5,0.5);

	this.instance_261 = new lib.CachedBmp_5();
	this.instance_261.setTransform(229.3,131.2,0.5,0.5);

	this.instance_262 = new lib.CachedBmp_4();
	this.instance_262.setTransform(157.8,129.65,0.5,0.5);

	this.instance_263 = new lib.CachedBmp_3();
	this.instance_263.setTransform(140.85,80.75,0.5,0.5);

	this.instance_264 = new lib.CachedBmp_2();
	this.instance_264.setTransform(133.05,74,0.5,0.5);

	this.instance_265 = new lib.CachedBmp_1();
	this.instance_265.setTransform(129.1,70.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_265},{t:this.instance_264},{t:this.instance_263},{t:this.instance_262},{t:this.instance_261},{t:this.instance_260},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.instance_256},{t:this.instance_255},{t:this.instance_254},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.instance_250},{t:this.instance_249},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.instance_243},{t:this.instance_242},{t:this.instance_241},{t:this.instance_240},{t:this.instance_239},{t:this.instance_238},{t:this.instance_237},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.instance_230},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.instance_221},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.instance_217},{t:this.instance_216},{t:this.instance_215},{t:this.instance_214},{t:this.instance_213},{t:this.instance_212},{t:this.instance_211},{t:this.instance_210},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.instance_205},{t:this.instance_204},{t:this.instance_203},{t:this.instance_202},{t:this.instance_201},{t:this.instance_200},{t:this.instance_199},{t:this.instance_198},{t:this.instance_197},{t:this.instance_196},{t:this.instance_195},{t:this.instance_194},{t:this.instance_193},{t:this.instance_192},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.instance_186},{t:this.instance_185},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_5
	this.correct1 = new lib.Symbol19copy();
	this.correct1.name = "correct1";
	this.correct1.setTransform(598.15,979.25,0.9999,0.9999);

	this.wrong1 = new lib.Symbol20copy();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(971.4,1051.7,1.2098,1.2099,0,0,0,52.1,48.3);

	this.wrong2 = new lib.Symbol20copy();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(1251.4,1051.7,1.2098,1.2099,0,0,0,52.1,48.3);

	this.wrong3 = new lib.Symbol20copy();
	this.wrong3.name = "wrong3";
	this.wrong3.setTransform(1531.4,1051.7,1.2098,1.2099,0,0,0,52.1,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.wrong3},{t:this.wrong2},{t:this.wrong1},{t:this.correct1}]}).wait(1));

	// sound
	this.instance_266 = new lib.CachedBmp_267();
	this.instance_266.setTransform(707.5,1032.9,0.5,0.5);

	this.instance_267 = new lib.Symbol25copy();
	this.instance_267.setTransform(2043.85,580.95,1,1,0,0,0,20,16);

	this.wro_sou = new lib.Symbol22copy();
	this.wro_sou.name = "wro_sou";
	this.wro_sou.setTransform(2037.5,515.6);

	this.cor_sou = new lib.Symbol21copy();
	this.cor_sou.name = "cor_sou";
	this.cor_sou.setTransform(2018.5,470.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cor_sou},{t:this.wro_sou},{t:this.instance_267},{t:this.instance_266}]}).wait(1));

	// Layer_4
	this.intro = new lib.Symbol13();
	this.intro.name = "intro";
	this.intro.setTransform(-218.1,66,1,1,0,0,0,10,46);

	this.b1 = new lib.Symbol2();
	this.b1.name = "b1";
	this.b1.setTransform(569.9,958.3,1,1,0,0,0,56.1,56.1);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.b4 = new lib.Symbol5();
	this.b4.name = "b4";
	this.b4.setTransform(1341.65,958.3,1,1,0,0,0,56.1,56.1);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.b3 = new lib.Symbol4();
	this.b3.name = "b3";
	this.b3.setTransform(1084.4,958.3,1,1,0,0,0,56.1,56.1);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.b2 = new lib.Symbol3();
	this.b2.name = "b2";
	this.b2.setTransform(827.15,958.3,1,1,0,0,0,56.1,56.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b2},{t:this.b3},{t:this.b4},{t:this.b1},{t:this.intro}]}).wait(1));

	// Background
	this.instance_268 = new lib.CachedBmp_269();
	this.instance_268.setTransform(0,0,0.5,0.5);

	this.instance_269 = new lib.CachedBmp_268();
	this.instance_269.setTransform(89.75,50.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_269},{t:this.instance_268}]}).wait(1));

	// Layer_6
	this.instance_270 = new lib.CachedBmp_410();
	this.instance_270.setTransform(1745.85,823,0.5,0.5);

	this.instance_271 = new lib.CachedBmp_409();
	this.instance_271.setTransform(1708.05,857.05,0.5,0.5);

	this.instance_272 = new lib.CachedBmp_408();
	this.instance_272.setTransform(1772.2,953.15,0.5,0.5);

	this.instance_273 = new lib.CachedBmp_407();
	this.instance_273.setTransform(1806.35,960.4,0.5,0.5);

	this.instance_274 = new lib.CachedBmp_406();
	this.instance_274.setTransform(1798.6,966.35,0.5,0.5);

	this.instance_275 = new lib.CachedBmp_405();
	this.instance_275.setTransform(1786.6,966.6,0.5,0.5);

	this.instance_276 = new lib.CachedBmp_404();
	this.instance_276.setTransform(1778.45,920.1,0.5,0.5);

	this.instance_277 = new lib.CachedBmp_403();
	this.instance_277.setTransform(1769.8,919.15,0.5,0.5);

	this.instance_278 = new lib.CachedBmp_402();
	this.instance_278.setTransform(1771.2,918.3,0.5,0.5);

	this.instance_279 = new lib.CachedBmp_401();
	this.instance_279.setTransform(1725.6,946.2,0.5,0.5);

	this.instance_280 = new lib.CachedBmp_400();
	this.instance_280.setTransform(1651.9,842.4,0.5,0.5);

	this.instance_281 = new lib.CachedBmp_399();
	this.instance_281.setTransform(1642.9,862.35,0.5,0.5);

	this.instance_282 = new lib.CachedBmp_398();
	this.instance_282.setTransform(1643,841.75,0.5,0.5);

	this.instance_283 = new lib.CachedBmp_397();
	this.instance_283.setTransform(1784.15,858.95,0.5,0.5);

	this.instance_284 = new lib.CachedBmp_396();
	this.instance_284.setTransform(1744.95,887.45,0.5,0.5);

	this.instance_285 = new lib.CachedBmp_395();
	this.instance_285.setTransform(1742.2,883.85,0.5,0.5);

	this.instance_286 = new lib.CachedBmp_394();
	this.instance_286.setTransform(1728.35,874.9,0.5,0.5);

	this.instance_287 = new lib.CachedBmp_393();
	this.instance_287.setTransform(1721.1,872.35,0.5,0.5);

	this.instance_288 = new lib.CachedBmp_392();
	this.instance_288.setTransform(1751.7,865.3,0.5,0.5);

	this.instance_289 = new lib.CachedBmp_391();
	this.instance_289.setTransform(1715.95,860,0.5,0.5);

	this.instance_290 = new lib.CachedBmp_390();
	this.instance_290.setTransform(1730.45,865.65,0.5,0.5);

	this.instance_291 = new lib.CachedBmp_389();
	this.instance_291.setTransform(1726.3,851.65,0.5,0.5);

	this.instance_292 = new lib.CachedBmp_388();
	this.instance_292.setTransform(1725.2,843.3,0.5,0.5);

	this.instance_293 = new lib.CachedBmp_387();
	this.instance_293.setTransform(1718.7,833.1,0.5,0.5);

	this.instance_294 = new lib.CachedBmp_386();
	this.instance_294.setTransform(1718.25,832.55,0.5,0.5);

	this.instance_295 = new lib.CachedBmp_385();
	this.instance_295.setTransform(1757.6,849.8,0.5,0.5);

	this.instance_296 = new lib.CachedBmp_384();
	this.instance_296.setTransform(1754.7,843.2,0.5,0.5);

	this.instance_297 = new lib.CachedBmp_383();
	this.instance_297.setTransform(1746.25,834.7,0.5,0.5);

	this.instance_298 = new lib.CachedBmp_382();
	this.instance_298.setTransform(1745.1,833.55,0.5,0.5);

	this.instance_299 = new lib.CachedBmp_381();
	this.instance_299.setTransform(1748.95,825.2,0.5,0.5);

	this.instance_300 = new lib.CachedBmp_380();
	this.instance_300.setTransform(1724.75,825.2,0.5,0.5);

	this.instance_301 = new lib.CachedBmp_379();
	this.instance_301.setTransform(1709.15,793.1,0.5,0.5);

	this.instance_302 = new lib.CachedBmp_378();
	this.instance_302.setTransform(1711.9,828.05,0.5,0.5);

	this.instance_303 = new lib.CachedBmp_377();
	this.instance_303.setTransform(1708.05,792,0.5,0.5);

	this.instance_304 = new lib.CachedBmp_376();
	this.instance_304.setTransform(1707.15,822.05,0.5,0.5);

	this.instance_305 = new lib.CachedBmp_375();
	this.instance_305.setTransform(1710.1,857.9,0.5,0.5);

	this.instance_306 = new lib.CachedBmp_374();
	this.instance_306.setTransform(1705.25,848.4,0.5,0.5);

	this.instance_307 = new lib.CachedBmp_373();
	this.instance_307.setTransform(1704.65,821.4,0.5,0.5);

	this.instance_308 = new lib.CachedBmp_372();
	this.instance_308.setTransform(1735.95,943.4,0.5,0.5);

	this.instance_309 = new lib.CachedBmp_371();
	this.instance_309.setTransform(1715.1,901.3,0.5,0.5);

	this.instance_310 = new lib.CachedBmp_370();
	this.instance_310.setTransform(1743.2,900.05,0.5,0.5);

	this.instance_311 = new lib.CachedBmp_369();
	this.instance_311.setTransform(1760.7,900.9,0.5,0.5);

	this.instance_312 = new lib.CachedBmp_368();
	this.instance_312.setTransform(1711.05,900.9,0.5,0.5);

	this.instance_313 = new lib.CachedBmp_367();
	this.instance_313.setTransform(1709.95,899.7,0.5,0.5);

	this.instance_314 = new lib.CachedBmp_366();
	this.instance_314.setTransform(1767.6,1015.45,0.5,0.5);

	this.instance_315 = new lib.CachedBmp_365();
	this.instance_315.setTransform(1714.25,1013.3,0.5,0.5);

	this.instance_316 = new lib.CachedBmp_364();
	this.instance_316.setTransform(1727.65,1005.4,0.5,0.5);

	this.instance_317 = new lib.CachedBmp_363();
	this.instance_317.setTransform(1764.55,1013.75,0.5,0.5);

	this.instance_318 = new lib.CachedBmp_362();
	this.instance_318.setTransform(1760.85,997.65,0.5,0.5);

	this.instance_319 = new lib.CachedBmp_361();
	this.instance_319.setTransform(1772.1,1004.55,0.5,0.5);

	this.instance_320 = new lib.CachedBmp_360();
	this.instance_320.setTransform(1762.45,1005.5,0.5,0.5);

	this.instance_321 = new lib.CachedBmp_359();
	this.instance_321.setTransform(1766.9,1011.75,0.5,0.5);

	this.instance_322 = new lib.CachedBmp_358();
	this.instance_322.setTransform(1760.6,997.4,0.5,0.5);

	this.instance_323 = new lib.CachedBmp_357();
	this.instance_323.setTransform(1758.1,992.4,0.5,0.5);

	this.instance_324 = new lib.CachedBmp_356();
	this.instance_324.setTransform(1753.8,958.2,0.5,0.5);

	this.instance_325 = new lib.CachedBmp_355();
	this.instance_325.setTransform(1739.9,961.95,0.5,0.5);

	this.instance_326 = new lib.CachedBmp_354();
	this.instance_326.setTransform(1746.05,988.15,0.5,0.5);

	this.instance_327 = new lib.CachedBmp_353();
	this.instance_327.setTransform(1729.65,985.15,0.5,0.5);

	this.instance_328 = new lib.CachedBmp_352();
	this.instance_328.setTransform(1740.55,969.1,0.5,0.5);

	this.instance_329 = new lib.CachedBmp_351();
	this.instance_329.setTransform(1726.45,960.6,0.5,0.5);

	this.instance_330 = new lib.CachedBmp_350();
	this.instance_330.setTransform(1725.9,957.6,0.5,0.5);

	this.instance_331 = new lib.CachedBmp_349();
	this.instance_331.setTransform(1714.15,1011,0.5,0.5);

	this.instance_332 = new lib.CachedBmp_348();
	this.instance_332.setTransform(1715.4,1006.8,0.5,0.5);

	this.instance_333 = new lib.CachedBmp_347();
	this.instance_333.setTransform(1723.75,998,0.5,0.5);

	this.instance_334 = new lib.CachedBmp_346();
	this.instance_334.setTransform(1735.9,992.25,0.5,0.5);

	this.instance_335 = new lib.CachedBmp_345();
	this.instance_335.setTransform(1736.9,1000.1,0.5,0.5);

	this.instance_336 = new lib.CachedBmp_344();
	this.instance_336.setTransform(1726.6,1002.15,0.5,0.5);

	this.instance_337 = new lib.CachedBmp_343();
	this.instance_337.setTransform(1713.6,997.45,0.5,0.5);

	this.instance_338 = new lib.CachedBmp_342();
	this.instance_338.setTransform(114.1,868.25,0.5,0.5);

	this.instance_339 = new lib.CachedBmp_341();
	this.instance_339.setTransform(111.25,867.15,0.5,0.5);

	this.instance_340 = new lib.CachedBmp_340();
	this.instance_340.setTransform(105.75,876.85,0.5,0.5);

	this.instance_341 = new lib.CachedBmp_339();
	this.instance_341.setTransform(179.7,833.65,0.5,0.5);

	this.instance_342 = new lib.CachedBmp_338();
	this.instance_342.setTransform(141.3,808.25,0.5,0.5);

	this.instance_343 = new lib.CachedBmp_337();
	this.instance_343.setTransform(95.65,820.8,0.5,0.5);

	this.instance_344 = new lib.CachedBmp_336();
	this.instance_344.setTransform(97.95,825.95,0.5,0.5);

	this.instance_345 = new lib.CachedBmp_335();
	this.instance_345.setTransform(95.55,808.15,0.5,0.5);

	this.instance_346 = new lib.CachedBmp_334();
	this.instance_346.setTransform(147.2,892.9,0.5,0.5);

	this.instance_347 = new lib.CachedBmp_333();
	this.instance_347.setTransform(147.7,893.4,0.5,0.5);

	this.instance_348 = new lib.CachedBmp_332();
	this.instance_348.setTransform(140.75,851.9,0.5,0.5);

	this.instance_349 = new lib.CachedBmp_331();
	this.instance_349.setTransform(138.55,846.15,0.5,0.5);

	this.instance_350 = new lib.CachedBmp_330();
	this.instance_350.setTransform(143.2,884.35,0.5,0.5);

	this.instance_351 = new lib.CachedBmp_329();
	this.instance_351.setTransform(139.5,876.55,0.5,0.5);

	this.instance_352 = new lib.CachedBmp_328();
	this.instance_352.setTransform(139.5,876.55,0.5,0.5);

	this.instance_353 = new lib.CachedBmp_327();
	this.instance_353.setTransform(136,875,0.5,0.5);

	this.instance_354 = new lib.CachedBmp_326();
	this.instance_354.setTransform(164.1,862.6,0.5,0.5);

	this.instance_355 = new lib.CachedBmp_325();
	this.instance_355.setTransform(129.5,862.45,0.5,0.5);

	this.instance_356 = new lib.CachedBmp_324();
	this.instance_356.setTransform(129.85,862.75,0.5,0.5);

	this.instance_357 = new lib.CachedBmp_323();
	this.instance_357.setTransform(127.35,857.85,0.5,0.5);

	this.instance_358 = new lib.CachedBmp_322();
	this.instance_358.setTransform(165.9,849.95,0.5,0.5);

	this.instance_359 = new lib.CachedBmp_321();
	this.instance_359.setTransform(163.4,844.25,0.5,0.5);

	this.instance_360 = new lib.CachedBmp_320();
	this.instance_360.setTransform(127.8,853.55,0.5,0.5);

	this.instance_361 = new lib.CachedBmp_319();
	this.instance_361.setTransform(133,839.45,0.5,0.5);

	this.instance_362 = new lib.CachedBmp_318();
	this.instance_362.setTransform(131.75,838.25,0.5,0.5);

	this.instance_363 = new lib.CachedBmp_317();
	this.instance_363.setTransform(135.4,831.2,0.5,0.5);

	this.instance_364 = new lib.CachedBmp_316();
	this.instance_364.setTransform(112.8,850.95,0.5,0.5);

	this.instance_365 = new lib.CachedBmp_315();
	this.instance_365.setTransform(163.35,843.8,0.5,0.5);

	this.instance_366 = new lib.CachedBmp_314();
	this.instance_366.setTransform(162,844.1,0.5,0.5);

	this.instance_367 = new lib.CachedBmp_313();
	this.instance_367.setTransform(130.9,801.05,0.5,0.5);

	this.instance_368 = new lib.CachedBmp_312();
	this.instance_368.setTransform(180.4,851.55,0.5,0.5);

	this.instance_369 = new lib.CachedBmp_311();
	this.instance_369.setTransform(181.55,853.8,0.5,0.5);

	this.instance_370 = new lib.CachedBmp_310();
	this.instance_370.setTransform(181.65,854.2,0.5,0.5);

	this.instance_371 = new lib.CachedBmp_309();
	this.instance_371.setTransform(179.7,846.05,0.5,0.5);

	this.instance_372 = new lib.CachedBmp_308();
	this.instance_372.setTransform(105.95,826.5,0.5,0.5);

	this.instance_373 = new lib.CachedBmp_307();
	this.instance_373.setTransform(106.45,827.3,0.5,0.5);

	this.instance_374 = new lib.CachedBmp_306();
	this.instance_374.setTransform(87.3,879.65,0.5,0.5);

	this.instance_375 = new lib.CachedBmp_305();
	this.instance_375.setTransform(89.9,877.1,0.5,0.5);

	this.instance_376 = new lib.CachedBmp_304();
	this.instance_376.setTransform(83.85,873.05,0.5,0.5);

	this.instance_377 = new lib.CachedBmp_303();
	this.instance_377.setTransform(141.15,895.55,0.5,0.5);

	this.instance_378 = new lib.CachedBmp_302();
	this.instance_378.setTransform(140.8,895.2,0.5,0.5);

	this.instance_379 = new lib.CachedBmp_301();
	this.instance_379.setTransform(163.2,1003.9,0.5,0.5);

	this.instance_380 = new lib.CachedBmp_300();
	this.instance_380.setTransform(162.3,1017.65,0.5,0.5);

	this.instance_381 = new lib.CachedBmp_299();
	this.instance_381.setTransform(162.8,1008.2,0.5,0.5);

	this.instance_382 = new lib.CachedBmp_298();
	this.instance_382.setTransform(164,1011.5,0.5,0.5);

	this.instance_383 = new lib.CachedBmp_297();
	this.instance_383.setTransform(161.6,1007.2,0.5,0.5);

	this.instance_384 = new lib.CachedBmp_296();
	this.instance_384.setTransform(126.05,1020.4,0.5,0.5);

	this.instance_385 = new lib.CachedBmp_295();
	this.instance_385.setTransform(126.65,1006.65,0.5,0.5);

	this.instance_386 = new lib.CachedBmp_294();
	this.instance_386.setTransform(125.55,1006.35,0.5,0.5);

	this.instance_387 = new lib.CachedBmp_293();
	this.instance_387.setTransform(130.8,1001.6,0.5,0.5);

	this.instance_388 = new lib.CachedBmp_292();
	this.instance_388.setTransform(104.8,929.6,0.5,0.5);

	this.instance_389 = new lib.CachedBmp_291();
	this.instance_389.setTransform(103.7,930.2,0.5,0.5);

	this.instance_390 = new lib.CachedBmp_290();
	this.instance_390.setTransform(210.15,864.05,0.5,0.5);

	this.instance_391 = new lib.CachedBmp_289();
	this.instance_391.setTransform(200.9,871.05,0.5,0.5);

	this.instance_392 = new lib.CachedBmp_288();
	this.instance_392.setTransform(221.1,876.35,0.5,0.5);

	this.instance_393 = new lib.CachedBmp_287();
	this.instance_393.setTransform(218.05,868.6,0.5,0.5);

	this.instance_394 = new lib.CachedBmp_286();
	this.instance_394.setTransform(213.7,864.7,0.5,0.5);

	this.instance_395 = new lib.CachedBmp_285();
	this.instance_395.setTransform(214.2,865.2,0.5,0.5);

	this.instance_396 = new lib.CachedBmp_284();
	this.instance_396.setTransform(144.3,908.6,0.5,0.5);

	this.instance_397 = new lib.CachedBmp_283();
	this.instance_397.setTransform(149.65,947.35,0.5,0.5);

	this.instance_398 = new lib.CachedBmp_282();
	this.instance_398.setTransform(135.8,935.95,0.5,0.5);

	this.instance_399 = new lib.CachedBmp_281();
	this.instance_399.setTransform(125.65,947.7,0.5,0.5);

	this.instance_400 = new lib.CachedBmp_280();
	this.instance_400.setTransform(125.1,946.6,0.5,0.5);

	this.instance_401 = new lib.CachedBmp_279();
	this.instance_401.setTransform(161.6,975.8,0.5,0.5);

	this.instance_402 = new lib.CachedBmp_278();
	this.instance_402.setTransform(160.5,974.7,0.5,0.5);

	this.instance_403 = new lib.CachedBmp_277();
	this.instance_403.setTransform(130.9,977.55,0.5,0.5);

	this.instance_404 = new lib.CachedBmp_276();
	this.instance_404.setTransform(129.8,976.5,0.5,0.5);

	this.instance_405 = new lib.CachedBmp_275();
	this.instance_405.setTransform(188.9,899,0.5,0.5);

	this.instance_406 = new lib.CachedBmp_274();
	this.instance_406.setTransform(189.4,899.5,0.5,0.5);

	this.instance_407 = new lib.CachedBmp_273();
	this.instance_407.setTransform(191.4,853.5,0.5,0.5);

	this.instance_408 = new lib.CachedBmp_272();
	this.instance_408.setTransform(191.9,855.4,0.5,0.5);

	this.instance_409 = new lib.CachedBmp_271();
	this.instance_409.setTransform(95.9,895.5,0.5,0.5);

	this.instance_410 = new lib.CachedBmp_270();
	this.instance_410.setTransform(94.85,894.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_410},{t:this.instance_409},{t:this.instance_408},{t:this.instance_407},{t:this.instance_406},{t:this.instance_405},{t:this.instance_404},{t:this.instance_403},{t:this.instance_402},{t:this.instance_401},{t:this.instance_400},{t:this.instance_399},{t:this.instance_398},{t:this.instance_397},{t:this.instance_396},{t:this.instance_395},{t:this.instance_394},{t:this.instance_393},{t:this.instance_392},{t:this.instance_391},{t:this.instance_390},{t:this.instance_389},{t:this.instance_388},{t:this.instance_387},{t:this.instance_386},{t:this.instance_385},{t:this.instance_384},{t:this.instance_383},{t:this.instance_382},{t:this.instance_381},{t:this.instance_380},{t:this.instance_379},{t:this.instance_378},{t:this.instance_377},{t:this.instance_376},{t:this.instance_375},{t:this.instance_374},{t:this.instance_373},{t:this.instance_372},{t:this.instance_371},{t:this.instance_370},{t:this.instance_369},{t:this.instance_368},{t:this.instance_367},{t:this.instance_366},{t:this.instance_365},{t:this.instance_364},{t:this.instance_363},{t:this.instance_362},{t:this.instance_361},{t:this.instance_360},{t:this.instance_359},{t:this.instance_358},{t:this.instance_357},{t:this.instance_356},{t:this.instance_355},{t:this.instance_354},{t:this.instance_353},{t:this.instance_352},{t:this.instance_351},{t:this.instance_350},{t:this.instance_349},{t:this.instance_348},{t:this.instance_347},{t:this.instance_346},{t:this.instance_345},{t:this.instance_344},{t:this.instance_343},{t:this.instance_342},{t:this.instance_341},{t:this.instance_340},{t:this.instance_339},{t:this.instance_338},{t:this.instance_337},{t:this.instance_336},{t:this.instance_335},{t:this.instance_334},{t:this.instance_333},{t:this.instance_332},{t:this.instance_331},{t:this.instance_330},{t:this.instance_329},{t:this.instance_328},{t:this.instance_327},{t:this.instance_326},{t:this.instance_325},{t:this.instance_324},{t:this.instance_323},{t:this.instance_322},{t:this.instance_321},{t:this.instance_320},{t:this.instance_319},{t:this.instance_318},{t:this.instance_317},{t:this.instance_316},{t:this.instance_315},{t:this.instance_314},{t:this.instance_313},{t:this.instance_312},{t:this.instance_311},{t:this.instance_310},{t:this.instance_309},{t:this.instance_308},{t:this.instance_307},{t:this.instance_306},{t:this.instance_305},{t:this.instance_304},{t:this.instance_303},{t:this.instance_302},{t:this.instance_301},{t:this.instance_300},{t:this.instance_299},{t:this.instance_298},{t:this.instance_297},{t:this.instance_296},{t:this.instance_295},{t:this.instance_294},{t:this.instance_293},{t:this.instance_292},{t:this.instance_291},{t:this.instance_290},{t:this.instance_289},{t:this.instance_288},{t:this.instance_287},{t:this.instance_286},{t:this.instance_285},{t:this.instance_284},{t:this.instance_283},{t:this.instance_282},{t:this.instance_281},{t:this.instance_280},{t:this.instance_279},{t:this.instance_278},{t:this.instance_277},{t:this.instance_276},{t:this.instance_275},{t:this.instance_274},{t:this.instance_273},{t:this.instance_272},{t:this.instance_271},{t:this.instance_270}]}).wait(1));

	// Layer_3
	this.instance_411 = new lib.CachedBmp_417();
	this.instance_411.setTransform(1387,825.45,0.5,0.5);

	this.instance_412 = new lib.Image_11();
	this.instance_412.setTransform(1479.15,872.3,1,1,0,0,0,122.9,67.5);
	this.instance_412.alpha = 0.75;
	this.instance_412.compositeOperation = "multiply";

	this.instance_413 = new lib.CachedBmp_416();
	this.instance_413.setTransform(839.65,837.75,0.5,0.5);

	this.instance_414 = new lib.Image_9();
	this.instance_414.setTransform(899.8,872.3,1,1,0,0,0,91.7,55.4);
	this.instance_414.alpha = 0.75;
	this.instance_414.compositeOperation = "multiply";

	this.instance_415 = new lib.CachedBmp_415();
	this.instance_415.setTransform(1179.3,738.15,0.5,0.5);

	this.instance_416 = new lib.Image_7();
	this.instance_416.setTransform(1270.6,785.3,1,1,0,0,0,122.9,67.5);
	this.instance_416.alpha = 0.75;
	this.instance_416.compositeOperation = "multiply";

	this.instance_417 = new lib.CachedBmp_414();
	this.instance_417.setTransform(1206.05,641.75,0.5,0.5);

	this.instance_418 = new lib.Image_5();
	this.instance_418.setTransform(1407.7,732.5,1,1,0,0,0,232.8,111.9);
	this.instance_418.alpha = 0.75;
	this.instance_418.compositeOperation = "multiply";

	this.instance_419 = new lib.CachedBmp_413();
	this.instance_419.setTransform(404.1,597.55,0.5,0.5);

	this.instance_420 = new lib.Image_3();
	this.instance_420.setTransform(690.2,721.35,1,1,0,0,0,317.4,145.1);
	this.instance_420.alpha = 0.75;
	this.instance_420.compositeOperation = "multiply";

	this.instance_421 = new lib.CachedBmp_412();
	this.instance_421.setTransform(567.25,861.9,0.5,0.5);

	this.instance_422 = new lib.Image_1();
	this.instance_422.setTransform(703.35,926.8,1,1,0,0,0,167.3,85.7);
	this.instance_422.alpha = 0.75;
	this.instance_422.compositeOperation = "multiply";

	this.instance_423 = new lib.CachedBmp_411();
	this.instance_423.setTransform(793.3,666.05,0.5,0.5);

	this.instance_424 = new lib.Image();
	this.instance_424.setTransform(929.05,730.5,1,1,0,0,0,167.3,85.7);
	this.instance_424.alpha = 0.75;
	this.instance_424.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_424},{t:this.instance_423},{t:this.instance_422},{t:this.instance_421},{t:this.instance_420},{t:this.instance_419},{t:this.instance_418},{t:this.instance_417},{t:this.instance_416},{t:this.instance_415},{t:this.instance_414},{t:this.instance_413},{t:this.instance_412},{t:this.instance_411}]}).wait(1));

	// Layer_1
	this.instance_425 = new lib.BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1();
	this.instance_425.setTransform(1313,48,0.25,0.25);

	this.instance_426 = new lib.CachedBmp_425();
	this.instance_426.setTransform(419.3,66.85,0.5,0.5);

	this.red_mc1 = new lib.Symbol1();
	this.red_mc1.name = "red_mc1";
	this.red_mc1.setTransform(1032.65,494.6,1,1,0,0,0,472.1,310.4);

	this.instance_427 = new lib.CachedBmp_424();
	this.instance_427.setTransform(885.85,375.45,0.5,0.5);

	this.instance_428 = new lib.CachedBmp_423();
	this.instance_428.setTransform(832.55,347.8,0.5,0.5);

	this.instance_429 = new lib.CachedBmp_422();
	this.instance_429.setTransform(779.4,312.45,0.5,0.5);

	this.instance_430 = new lib.CachedBmp_421();
	this.instance_430.setTransform(721,284.65,0.5,0.5);

	this.instance_431 = new lib.CachedBmp_420();
	this.instance_431.setTransform(667.15,252.3,0.5,0.5);

	this.instance_432 = new lib.CachedBmp_419();
	this.instance_432.setTransform(617.6,223.2,0.5,0.5);

	this.instance_433 = new lib.CachedBmp_418();
	this.instance_433.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_433},{t:this.instance_432},{t:this.instance_431},{t:this.instance_430},{t:this.instance_429},{t:this.instance_428},{t:this.instance_427},{t:this.red_mc1},{t:this.instance_426},{t:this.instance_425}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,547.9000000000001);
// library properties:
lib.properties = {
	id: 'F0AE7500BAD1324AB7564C359B5EFD43',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_439.png", id:"CachedBmp_439"},
		{src:"images/CachedBmp_437.png", id:"CachedBmp_437"},
		{src:"images/CachedBmp_438.png", id:"CachedBmp_438"},
		{src:"images/CachedBmp_435.png", id:"CachedBmp_435"},
		{src:"images/CachedBmp_434.png", id:"CachedBmp_434"},
		{src:"images/CachedBmp_432.png", id:"CachedBmp_432"},
		{src:"images/CachedBmp_430.png", id:"CachedBmp_430"},
		{src:"images/CachedBmp_428.png", id:"CachedBmp_428"},
		{src:"images/CachedBmp_425.png", id:"CachedBmp_425"},
		{src:"images/CachedBmp_424.png", id:"CachedBmp_424"},
		{src:"images/CachedBmp_436.png", id:"CachedBmp_436"},
		{src:"images/CachedBmp_423.png", id:"CachedBmp_423"},
		{src:"images/CachedBmp_426.png", id:"CachedBmp_426"},
		{src:"images/CachedBmp_422.png", id:"CachedBmp_422"},
		{src:"images/CachedBmp_421.png", id:"CachedBmp_421"},
		{src:"images/CachedBmp_420.png", id:"CachedBmp_420"},
		{src:"images/CachedBmp_417.png", id:"CachedBmp_417"},
		{src:"images/CachedBmp_416.png", id:"CachedBmp_416"},
		{src:"images/CachedBmp_415.png", id:"CachedBmp_415"},
		{src:"images/CachedBmp_419.png", id:"CachedBmp_419"},
		{src:"images/CachedBmp_414.png", id:"CachedBmp_414"},
		{src:"images/CachedBmp_412.png", id:"CachedBmp_412"},
		{src:"images/CachedBmp_411.png", id:"CachedBmp_411"},
		{src:"images/CachedBmp_410.png", id:"CachedBmp_410"},
		{src:"images/CachedBmp_409.png", id:"CachedBmp_409"},
		{src:"images/CachedBmp_408.png", id:"CachedBmp_408"},
		{src:"images/CachedBmp_407.png", id:"CachedBmp_407"},
		{src:"images/CachedBmp_406.png", id:"CachedBmp_406"},
		{src:"images/CachedBmp_405.png", id:"CachedBmp_405"},
		{src:"images/CachedBmp_404.png", id:"CachedBmp_404"},
		{src:"images/CachedBmp_413.png", id:"CachedBmp_413"},
		{src:"images/CachedBmp_402.png", id:"CachedBmp_402"},
		{src:"images/CachedBmp_401.png", id:"CachedBmp_401"},
		{src:"images/CachedBmp_403.png", id:"CachedBmp_403"},
		{src:"images/CachedBmp_400.png", id:"CachedBmp_400"},
		{src:"images/CachedBmp_399.png", id:"CachedBmp_399"},
		{src:"images/CachedBmp_397.png", id:"CachedBmp_397"},
		{src:"images/CachedBmp_398.png", id:"CachedBmp_398"},
		{src:"images/CachedBmp_396.png", id:"CachedBmp_396"},
		{src:"images/CachedBmp_395.png", id:"CachedBmp_395"},
		{src:"images/CachedBmp_394.png", id:"CachedBmp_394"},
		{src:"images/CachedBmp_393.png", id:"CachedBmp_393"},
		{src:"images/CachedBmp_392.png", id:"CachedBmp_392"},
		{src:"images/CachedBmp_391.png", id:"CachedBmp_391"},
		{src:"images/CachedBmp_390.png", id:"CachedBmp_390"},
		{src:"images/CachedBmp_389.png", id:"CachedBmp_389"},
		{src:"images/CachedBmp_388.png", id:"CachedBmp_388"},
		{src:"images/CachedBmp_387.png", id:"CachedBmp_387"},
		{src:"images/CachedBmp_386.png", id:"CachedBmp_386"},
		{src:"images/CachedBmp_385.png", id:"CachedBmp_385"},
		{src:"images/CachedBmp_384.png", id:"CachedBmp_384"},
		{src:"images/CachedBmp_383.png", id:"CachedBmp_383"},
		{src:"images/CachedBmp_382.png", id:"CachedBmp_382"},
		{src:"images/CachedBmp_380.png", id:"CachedBmp_380"},
		{src:"images/CachedBmp_381.png", id:"CachedBmp_381"},
		{src:"images/CachedBmp_378.png", id:"CachedBmp_378"},
		{src:"images/CachedBmp_379.png", id:"CachedBmp_379"},
		{src:"images/CachedBmp_377.png", id:"CachedBmp_377"},
		{src:"images/CachedBmp_375.png", id:"CachedBmp_375"},
		{src:"images/CachedBmp_374.png", id:"CachedBmp_374"},
		{src:"images/CachedBmp_376.png", id:"CachedBmp_376"},
		{src:"images/CachedBmp_372.png", id:"CachedBmp_372"},
		{src:"images/CachedBmp_371.png", id:"CachedBmp_371"},
		{src:"images/CachedBmp_373.png", id:"CachedBmp_373"},
		{src:"images/CachedBmp_369.png", id:"CachedBmp_369"},
		{src:"images/CachedBmp_370.png", id:"CachedBmp_370"},
		{src:"images/CachedBmp_368.png", id:"CachedBmp_368"},
		{src:"images/CachedBmp_367.png", id:"CachedBmp_367"},
		{src:"images/CachedBmp_366.png", id:"CachedBmp_366"},
		{src:"images/CachedBmp_365.png", id:"CachedBmp_365"},
		{src:"images/CachedBmp_364.png", id:"CachedBmp_364"},
		{src:"images/CachedBmp_363.png", id:"CachedBmp_363"},
		{src:"images/CachedBmp_362.png", id:"CachedBmp_362"},
		{src:"images/CachedBmp_361.png", id:"CachedBmp_361"},
		{src:"images/CachedBmp_360.png", id:"CachedBmp_360"},
		{src:"images/CachedBmp_359.png", id:"CachedBmp_359"},
		{src:"images/CachedBmp_357.png", id:"CachedBmp_357"},
		{src:"images/CachedBmp_358.png", id:"CachedBmp_358"},
		{src:"images/CachedBmp_356.png", id:"CachedBmp_356"},
		{src:"images/CachedBmp_355.png", id:"CachedBmp_355"},
		{src:"images/CachedBmp_354.png", id:"CachedBmp_354"},
		{src:"images/CachedBmp_353.png", id:"CachedBmp_353"},
		{src:"images/CachedBmp_352.png", id:"CachedBmp_352"},
		{src:"images/CachedBmp_351.png", id:"CachedBmp_351"},
		{src:"images/CachedBmp_349.png", id:"CachedBmp_349"},
		{src:"images/CachedBmp_350.png", id:"CachedBmp_350"},
		{src:"images/CachedBmp_348.png", id:"CachedBmp_348"},
		{src:"images/CachedBmp_347.png", id:"CachedBmp_347"},
		{src:"images/CachedBmp_346.png", id:"CachedBmp_346"},
		{src:"images/CachedBmp_345.png", id:"CachedBmp_345"},
		{src:"images/CachedBmp_344.png", id:"CachedBmp_344"},
		{src:"images/CachedBmp_343.png", id:"CachedBmp_343"},
		{src:"images/CachedBmp_342.png", id:"CachedBmp_342"},
		{src:"images/CachedBmp_341.png", id:"CachedBmp_341"},
		{src:"images/CachedBmp_340.png", id:"CachedBmp_340"},
		{src:"images/CachedBmp_339.png", id:"CachedBmp_339"},
		{src:"images/CachedBmp_338.png", id:"CachedBmp_338"},
		{src:"images/CachedBmp_337.png", id:"CachedBmp_337"},
		{src:"images/CachedBmp_336.png", id:"CachedBmp_336"},
		{src:"images/CachedBmp_335.png", id:"CachedBmp_335"},
		{src:"images/CachedBmp_334.png", id:"CachedBmp_334"},
		{src:"images/CachedBmp_333.png", id:"CachedBmp_333"},
		{src:"images/CachedBmp_332.png", id:"CachedBmp_332"},
		{src:"images/CachedBmp_330.png", id:"CachedBmp_330"},
		{src:"images/CachedBmp_331.png", id:"CachedBmp_331"},
		{src:"images/CachedBmp_329.png", id:"CachedBmp_329"},
		{src:"images/CachedBmp_328.png", id:"CachedBmp_328"},
		{src:"images/CachedBmp_327.png", id:"CachedBmp_327"},
		{src:"images/CachedBmp_326.png", id:"CachedBmp_326"},
		{src:"images/CachedBmp_325.png", id:"CachedBmp_325"},
		{src:"images/CachedBmp_324.png", id:"CachedBmp_324"},
		{src:"images/CachedBmp_323.png", id:"CachedBmp_323"},
		{src:"images/CachedBmp_322.png", id:"CachedBmp_322"},
		{src:"images/CachedBmp_320.png", id:"CachedBmp_320"},
		{src:"images/CachedBmp_321.png", id:"CachedBmp_321"},
		{src:"images/CachedBmp_319.png", id:"CachedBmp_319"},
		{src:"images/CachedBmp_318.png", id:"CachedBmp_318"},
		{src:"images/CachedBmp_317.png", id:"CachedBmp_317"},
		{src:"images/CachedBmp_316.png", id:"CachedBmp_316"},
		{src:"images/CachedBmp_315.png", id:"CachedBmp_315"},
		{src:"images/CachedBmp_314.png", id:"CachedBmp_314"},
		{src:"images/CachedBmp_312.png", id:"CachedBmp_312"},
		{src:"images/CachedBmp_313.png", id:"CachedBmp_313"},
		{src:"images/CachedBmp_311.png", id:"CachedBmp_311"},
		{src:"images/CachedBmp_310.png", id:"CachedBmp_310"},
		{src:"images/CachedBmp_308.png", id:"CachedBmp_308"},
		{src:"images/CachedBmp_309.png", id:"CachedBmp_309"},
		{src:"images/CachedBmp_306.png", id:"CachedBmp_306"},
		{src:"images/CachedBmp_305.png", id:"CachedBmp_305"},
		{src:"images/CachedBmp_304.png", id:"CachedBmp_304"},
		{src:"images/CachedBmp_307.png", id:"CachedBmp_307"},
		{src:"images/CachedBmp_302.png", id:"CachedBmp_302"},
		{src:"images/CachedBmp_303.png", id:"CachedBmp_303"},
		{src:"images/CachedBmp_301.png", id:"CachedBmp_301"},
		{src:"images/CachedBmp_300.png", id:"CachedBmp_300"},
		{src:"images/CachedBmp_298.png", id:"CachedBmp_298"},
		{src:"images/CachedBmp_299.png", id:"CachedBmp_299"},
		{src:"images/CachedBmp_296.png", id:"CachedBmp_296"},
		{src:"images/CachedBmp_295.png", id:"CachedBmp_295"},
		{src:"images/CachedBmp_294.png", id:"CachedBmp_294"},
		{src:"images/CachedBmp_297.png", id:"CachedBmp_297"},
		{src:"images/CachedBmp_293.png", id:"CachedBmp_293"},
		{src:"images/CachedBmp_291.png", id:"CachedBmp_291"},
		{src:"images/CachedBmp_292.png", id:"CachedBmp_292"},
		{src:"images/CachedBmp_290.png", id:"CachedBmp_290"},
		{src:"images/CachedBmp_289.png", id:"CachedBmp_289"},
		{src:"images/CachedBmp_288.png", id:"CachedBmp_288"},
		{src:"images/CachedBmp_287.png", id:"CachedBmp_287"},
		{src:"images/CachedBmp_285.png", id:"CachedBmp_285"},
		{src:"images/CachedBmp_284.png", id:"CachedBmp_284"},
		{src:"images/CachedBmp_283.png", id:"CachedBmp_283"},
		{src:"images/CachedBmp_282.png", id:"CachedBmp_282"},
		{src:"images/CachedBmp_286.png", id:"CachedBmp_286"},
		{src:"images/CachedBmp_281.png", id:"CachedBmp_281"},
		{src:"images/CachedBmp_280.png", id:"CachedBmp_280"},
		{src:"images/CachedBmp_278.png", id:"CachedBmp_278"},
		{src:"images/CachedBmp_279.png", id:"CachedBmp_279"},
		{src:"images/CachedBmp_276.png", id:"CachedBmp_276"},
		{src:"images/CachedBmp_277.png", id:"CachedBmp_277"},
		{src:"images/CachedBmp_274.png", id:"CachedBmp_274"},
		{src:"images/CachedBmp_275.png", id:"CachedBmp_275"},
		{src:"images/CachedBmp_273.png", id:"CachedBmp_273"},
		{src:"images/CachedBmp_272.png", id:"CachedBmp_272"},
		{src:"images/CachedBmp_271.png", id:"CachedBmp_271"},
		{src:"images/CachedBmp_270.png", id:"CachedBmp_270"},
		{src:"images/CachedBmp_418.png", id:"CachedBmp_418"},
		{src:"images/CachedBmp_267.png", id:"CachedBmp_267"},
		{src:"images/CachedBmp_266.png", id:"CachedBmp_266"},
		{src:"images/CachedBmp_265.png", id:"CachedBmp_265"},
		{src:"images/CachedBmp_264.png", id:"CachedBmp_264"},
		{src:"images/CachedBmp_263.png", id:"CachedBmp_263"},
		{src:"images/CachedBmp_262.png", id:"CachedBmp_262"},
		{src:"images/CachedBmp_261.png", id:"CachedBmp_261"},
		{src:"images/CachedBmp_260.png", id:"CachedBmp_260"},
		{src:"images/CachedBmp_259.png", id:"CachedBmp_259"},
		{src:"images/CachedBmp_258.png", id:"CachedBmp_258"},
		{src:"images/CachedBmp_257.png", id:"CachedBmp_257"},
		{src:"images/CachedBmp_256.png", id:"CachedBmp_256"},
		{src:"images/CachedBmp_255.png", id:"CachedBmp_255"},
		{src:"images/CachedBmp_254.png", id:"CachedBmp_254"},
		{src:"images/CachedBmp_253.png", id:"CachedBmp_253"},
		{src:"images/CachedBmp_252.png", id:"CachedBmp_252"},
		{src:"images/CachedBmp_251.png", id:"CachedBmp_251"},
		{src:"images/CachedBmp_250.png", id:"CachedBmp_250"},
		{src:"images/CachedBmp_249.png", id:"CachedBmp_249"},
		{src:"images/CachedBmp_248.png", id:"CachedBmp_248"},
		{src:"images/CachedBmp_247.png", id:"CachedBmp_247"},
		{src:"images/CachedBmp_246.png", id:"CachedBmp_246"},
		{src:"images/CachedBmp_245.png", id:"CachedBmp_245"},
		{src:"images/CachedBmp_244.png", id:"CachedBmp_244"},
		{src:"images/CachedBmp_243.png", id:"CachedBmp_243"},
		{src:"images/CachedBmp_242.png", id:"CachedBmp_242"},
		{src:"images/CachedBmp_241.png", id:"CachedBmp_241"},
		{src:"images/CachedBmp_240.png", id:"CachedBmp_240"},
		{src:"images/CachedBmp_239.png", id:"CachedBmp_239"},
		{src:"images/CachedBmp_238.png", id:"CachedBmp_238"},
		{src:"images/CachedBmp_237.png", id:"CachedBmp_237"},
		{src:"images/CachedBmp_236.png", id:"CachedBmp_236"},
		{src:"images/CachedBmp_235.png", id:"CachedBmp_235"},
		{src:"images/CachedBmp_234.png", id:"CachedBmp_234"},
		{src:"images/CachedBmp_233.png", id:"CachedBmp_233"},
		{src:"images/CachedBmp_232.png", id:"CachedBmp_232"},
		{src:"images/CachedBmp_231.png", id:"CachedBmp_231"},
		{src:"images/CachedBmp_230.png", id:"CachedBmp_230"},
		{src:"images/CachedBmp_229.png", id:"CachedBmp_229"},
		{src:"images/CachedBmp_228.png", id:"CachedBmp_228"},
		{src:"images/CachedBmp_227.png", id:"CachedBmp_227"},
		{src:"images/CachedBmp_226.png", id:"CachedBmp_226"},
		{src:"images/CachedBmp_225.png", id:"CachedBmp_225"},
		{src:"images/CachedBmp_224.png", id:"CachedBmp_224"},
		{src:"images/CachedBmp_223.png", id:"CachedBmp_223"},
		{src:"images/CachedBmp_222.png", id:"CachedBmp_222"},
		{src:"images/CachedBmp_221.png", id:"CachedBmp_221"},
		{src:"images/CachedBmp_220.png", id:"CachedBmp_220"},
		{src:"images/CachedBmp_219.png", id:"CachedBmp_219"},
		{src:"images/CachedBmp_218.png", id:"CachedBmp_218"},
		{src:"images/CachedBmp_217.png", id:"CachedBmp_217"},
		{src:"images/CachedBmp_216.png", id:"CachedBmp_216"},
		{src:"images/CachedBmp_215.png", id:"CachedBmp_215"},
		{src:"images/CachedBmp_214.png", id:"CachedBmp_214"},
		{src:"images/CachedBmp_213.png", id:"CachedBmp_213"},
		{src:"images/CachedBmp_212.png", id:"CachedBmp_212"},
		{src:"images/CachedBmp_211.png", id:"CachedBmp_211"},
		{src:"images/CachedBmp_210.png", id:"CachedBmp_210"},
		{src:"images/CachedBmp_209.png", id:"CachedBmp_209"},
		{src:"images/CachedBmp_208.png", id:"CachedBmp_208"},
		{src:"images/CachedBmp_207.png", id:"CachedBmp_207"},
		{src:"images/CachedBmp_206.png", id:"CachedBmp_206"},
		{src:"images/CachedBmp_205.png", id:"CachedBmp_205"},
		{src:"images/CachedBmp_204.png", id:"CachedBmp_204"},
		{src:"images/CachedBmp_203.png", id:"CachedBmp_203"},
		{src:"images/CachedBmp_202.png", id:"CachedBmp_202"},
		{src:"images/CachedBmp_201.png", id:"CachedBmp_201"},
		{src:"images/CachedBmp_200.png", id:"CachedBmp_200"},
		{src:"images/CachedBmp_199.png", id:"CachedBmp_199"},
		{src:"images/CachedBmp_198.png", id:"CachedBmp_198"},
		{src:"images/CachedBmp_197.png", id:"CachedBmp_197"},
		{src:"images/CachedBmp_196.png", id:"CachedBmp_196"},
		{src:"images/CachedBmp_195.png", id:"CachedBmp_195"},
		{src:"images/CachedBmp_194.png", id:"CachedBmp_194"},
		{src:"images/CachedBmp_193.png", id:"CachedBmp_193"},
		{src:"images/CachedBmp_192.png", id:"CachedBmp_192"},
		{src:"images/CachedBmp_191.png", id:"CachedBmp_191"},
		{src:"images/CachedBmp_190.png", id:"CachedBmp_190"},
		{src:"images/CachedBmp_189.png", id:"CachedBmp_189"},
		{src:"images/CachedBmp_188.png", id:"CachedBmp_188"},
		{src:"images/CachedBmp_187.png", id:"CachedBmp_187"},
		{src:"images/CachedBmp_186.png", id:"CachedBmp_186"},
		{src:"images/CachedBmp_185.png", id:"CachedBmp_185"},
		{src:"images/CachedBmp_184.png", id:"CachedBmp_184"},
		{src:"images/CachedBmp_183.png", id:"CachedBmp_183"},
		{src:"images/CachedBmp_182.png", id:"CachedBmp_182"},
		{src:"images/CachedBmp_181.png", id:"CachedBmp_181"},
		{src:"images/CachedBmp_180.png", id:"CachedBmp_180"},
		{src:"images/CachedBmp_179.png", id:"CachedBmp_179"},
		{src:"images/CachedBmp_178.png", id:"CachedBmp_178"},
		{src:"images/CachedBmp_177.png", id:"CachedBmp_177"},
		{src:"images/CachedBmp_176.png", id:"CachedBmp_176"},
		{src:"images/CachedBmp_175.png", id:"CachedBmp_175"},
		{src:"images/CachedBmp_174.png", id:"CachedBmp_174"},
		{src:"images/CachedBmp_173.png", id:"CachedBmp_173"},
		{src:"images/CachedBmp_172.png", id:"CachedBmp_172"},
		{src:"images/CachedBmp_171.png", id:"CachedBmp_171"},
		{src:"images/CachedBmp_170.png", id:"CachedBmp_170"},
		{src:"images/CachedBmp_169.png", id:"CachedBmp_169"},
		{src:"images/CachedBmp_168.png", id:"CachedBmp_168"},
		{src:"images/CachedBmp_167.png", id:"CachedBmp_167"},
		{src:"images/CachedBmp_166.png", id:"CachedBmp_166"},
		{src:"images/CachedBmp_165.png", id:"CachedBmp_165"},
		{src:"images/CachedBmp_164.png", id:"CachedBmp_164"},
		{src:"images/CachedBmp_163.png", id:"CachedBmp_163"},
		{src:"images/CachedBmp_162.png", id:"CachedBmp_162"},
		{src:"images/CachedBmp_161.png", id:"CachedBmp_161"},
		{src:"images/CachedBmp_160.png", id:"CachedBmp_160"},
		{src:"images/CachedBmp_159.png", id:"CachedBmp_159"},
		{src:"images/CachedBmp_158.png", id:"CachedBmp_158"},
		{src:"images/CachedBmp_157.png", id:"CachedBmp_157"},
		{src:"images/CachedBmp_156.png", id:"CachedBmp_156"},
		{src:"images/CachedBmp_155.png", id:"CachedBmp_155"},
		{src:"images/CachedBmp_154.png", id:"CachedBmp_154"},
		{src:"images/CachedBmp_153.png", id:"CachedBmp_153"},
		{src:"images/CachedBmp_152.png", id:"CachedBmp_152"},
		{src:"images/CachedBmp_151.png", id:"CachedBmp_151"},
		{src:"images/CachedBmp_150.png", id:"CachedBmp_150"},
		{src:"images/CachedBmp_149.png", id:"CachedBmp_149"},
		{src:"images/CachedBmp_148.png", id:"CachedBmp_148"},
		{src:"images/CachedBmp_147.png", id:"CachedBmp_147"},
		{src:"images/CachedBmp_146.png", id:"CachedBmp_146"},
		{src:"images/CachedBmp_145.png", id:"CachedBmp_145"},
		{src:"images/CachedBmp_144.png", id:"CachedBmp_144"},
		{src:"images/CachedBmp_143.png", id:"CachedBmp_143"},
		{src:"images/CachedBmp_142.png", id:"CachedBmp_142"},
		{src:"images/CachedBmp_141.png", id:"CachedBmp_141"},
		{src:"images/CachedBmp_140.png", id:"CachedBmp_140"},
		{src:"images/CachedBmp_139.png", id:"CachedBmp_139"},
		{src:"images/CachedBmp_138.png", id:"CachedBmp_138"},
		{src:"images/CachedBmp_137.png", id:"CachedBmp_137"},
		{src:"images/CachedBmp_136.png", id:"CachedBmp_136"},
		{src:"images/CachedBmp_135.png", id:"CachedBmp_135"},
		{src:"images/CachedBmp_134.png", id:"CachedBmp_134"},
		{src:"images/CachedBmp_133.png", id:"CachedBmp_133"},
		{src:"images/CachedBmp_132.png", id:"CachedBmp_132"},
		{src:"images/CachedBmp_131.png", id:"CachedBmp_131"},
		{src:"images/CachedBmp_130.png", id:"CachedBmp_130"},
		{src:"images/CachedBmp_129.png", id:"CachedBmp_129"},
		{src:"images/CachedBmp_128.png", id:"CachedBmp_128"},
		{src:"images/CachedBmp_127.png", id:"CachedBmp_127"},
		{src:"images/CachedBmp_126.png", id:"CachedBmp_126"},
		{src:"images/CachedBmp_125.png", id:"CachedBmp_125"},
		{src:"images/CachedBmp_124.png", id:"CachedBmp_124"},
		{src:"images/CachedBmp_123.png", id:"CachedBmp_123"},
		{src:"images/CachedBmp_122.png", id:"CachedBmp_122"},
		{src:"images/CachedBmp_121.png", id:"CachedBmp_121"},
		{src:"images/CachedBmp_120.png", id:"CachedBmp_120"},
		{src:"images/CachedBmp_119.png", id:"CachedBmp_119"},
		{src:"images/CachedBmp_118.png", id:"CachedBmp_118"},
		{src:"images/CachedBmp_117.png", id:"CachedBmp_117"},
		{src:"images/CachedBmp_116.png", id:"CachedBmp_116"},
		{src:"images/CachedBmp_115.png", id:"CachedBmp_115"},
		{src:"images/CachedBmp_114.png", id:"CachedBmp_114"},
		{src:"images/CachedBmp_113.png", id:"CachedBmp_113"},
		{src:"images/CachedBmp_268.png", id:"CachedBmp_268"},
		{src:"images/CachedBmp_112.png", id:"CachedBmp_112"},
		{src:"images/CachedBmp_111.png", id:"CachedBmp_111"},
		{src:"images/CachedBmp_110.png", id:"CachedBmp_110"},
		{src:"images/CachedBmp_109.png", id:"CachedBmp_109"},
		{src:"images/CachedBmp_108.png", id:"CachedBmp_108"},
		{src:"images/CachedBmp_107.png", id:"CachedBmp_107"},
		{src:"images/CachedBmp_106.png", id:"CachedBmp_106"},
		{src:"images/CachedBmp_105.png", id:"CachedBmp_105"},
		{src:"images/CachedBmp_104.png", id:"CachedBmp_104"},
		{src:"images/CachedBmp_102.png", id:"CachedBmp_102"},
		{src:"images/CachedBmp_103.png", id:"CachedBmp_103"},
		{src:"images/CachedBmp_101.png", id:"CachedBmp_101"},
		{src:"images/CachedBmp_100.png", id:"CachedBmp_100"},
		{src:"images/CachedBmp_99.png", id:"CachedBmp_99"},
		{src:"images/CachedBmp_98.png", id:"CachedBmp_98"},
		{src:"images/CachedBmp_97.png", id:"CachedBmp_97"},
		{src:"images/CachedBmp_96.png", id:"CachedBmp_96"},
		{src:"images/CachedBmp_95.png", id:"CachedBmp_95"},
		{src:"images/CachedBmp_94.png", id:"CachedBmp_94"},
		{src:"images/CachedBmp_93.png", id:"CachedBmp_93"},
		{src:"images/CachedBmp_92.png", id:"CachedBmp_92"},
		{src:"images/CachedBmp_91.png", id:"CachedBmp_91"},
		{src:"images/CachedBmp_90.png", id:"CachedBmp_90"},
		{src:"images/CachedBmp_89.png", id:"CachedBmp_89"},
		{src:"images/CachedBmp_88.png", id:"CachedBmp_88"},
		{src:"images/CachedBmp_87.png", id:"CachedBmp_87"},
		{src:"images/CachedBmp_86.png", id:"CachedBmp_86"},
		{src:"images/CachedBmp_85.png", id:"CachedBmp_85"},
		{src:"images/CachedBmp_84.png", id:"CachedBmp_84"},
		{src:"images/CachedBmp_83.png", id:"CachedBmp_83"},
		{src:"images/CachedBmp_82.png", id:"CachedBmp_82"},
		{src:"images/CachedBmp_81.png", id:"CachedBmp_81"},
		{src:"images/CachedBmp_80.png", id:"CachedBmp_80"},
		{src:"images/CachedBmp_79.png", id:"CachedBmp_79"},
		{src:"images/CachedBmp_78.png", id:"CachedBmp_78"},
		{src:"images/CachedBmp_77.png", id:"CachedBmp_77"},
		{src:"images/CachedBmp_76.png", id:"CachedBmp_76"},
		{src:"images/CachedBmp_75.png", id:"CachedBmp_75"},
		{src:"images/CachedBmp_74.png", id:"CachedBmp_74"},
		{src:"images/CachedBmp_73.png", id:"CachedBmp_73"},
		{src:"images/CachedBmp_72.png", id:"CachedBmp_72"},
		{src:"images/CachedBmp_71.png", id:"CachedBmp_71"},
		{src:"images/CachedBmp_70.png", id:"CachedBmp_70"},
		{src:"images/CachedBmp_69.png", id:"CachedBmp_69"},
		{src:"images/CachedBmp_68.png", id:"CachedBmp_68"},
		{src:"images/CachedBmp_67.png", id:"CachedBmp_67"},
		{src:"images/CachedBmp_66.png", id:"CachedBmp_66"},
		{src:"images/CachedBmp_65.png", id:"CachedBmp_65"},
		{src:"images/CachedBmp_63.png", id:"CachedBmp_63"},
		{src:"images/CachedBmp_64.png", id:"CachedBmp_64"},
		{src:"images/CachedBmp_62.png", id:"CachedBmp_62"},
		{src:"images/CachedBmp_61.png", id:"CachedBmp_61"},
		{src:"images/CachedBmp_60.png", id:"CachedBmp_60"},
		{src:"images/CachedBmp_59.png", id:"CachedBmp_59"},
		{src:"images/CachedBmp_58.png", id:"CachedBmp_58"},
		{src:"images/CachedBmp_57.png", id:"CachedBmp_57"},
		{src:"images/CachedBmp_56.png", id:"CachedBmp_56"},
		{src:"images/CachedBmp_55.png", id:"CachedBmp_55"},
		{src:"images/CachedBmp_54.png", id:"CachedBmp_54"},
		{src:"images/CachedBmp_53.png", id:"CachedBmp_53"},
		{src:"images/CachedBmp_52.png", id:"CachedBmp_52"},
		{src:"images/CachedBmp_51.png", id:"CachedBmp_51"},
		{src:"images/CachedBmp_50.png", id:"CachedBmp_50"},
		{src:"images/CachedBmp_49.png", id:"CachedBmp_49"},
		{src:"images/CachedBmp_48.png", id:"CachedBmp_48"},
		{src:"images/CachedBmp_47.png", id:"CachedBmp_47"},
		{src:"images/CachedBmp_46.png", id:"CachedBmp_46"},
		{src:"images/CachedBmp_45.png", id:"CachedBmp_45"},
		{src:"images/CachedBmp_44.png", id:"CachedBmp_44"},
		{src:"images/CachedBmp_43.png", id:"CachedBmp_43"},
		{src:"images/CachedBmp_42.png", id:"CachedBmp_42"},
		{src:"images/CachedBmp_41.png", id:"CachedBmp_41"},
		{src:"images/CachedBmp_40.png", id:"CachedBmp_40"},
		{src:"images/CachedBmp_39.png", id:"CachedBmp_39"},
		{src:"images/CachedBmp_38.png", id:"CachedBmp_38"},
		{src:"images/CachedBmp_37.png", id:"CachedBmp_37"},
		{src:"images/CachedBmp_36.png", id:"CachedBmp_36"},
		{src:"images/CachedBmp_34.png", id:"CachedBmp_34"},
		{src:"images/CachedBmp_35.png", id:"CachedBmp_35"},
		{src:"images/CachedBmp_32.png", id:"CachedBmp_32"},
		{src:"images/CachedBmp_33.png", id:"CachedBmp_33"},
		{src:"images/CachedBmp_30.png", id:"CachedBmp_30"},
		{src:"images/CachedBmp_31.png", id:"CachedBmp_31"},
		{src:"images/CachedBmp_27.png", id:"CachedBmp_27"},
		{src:"images/CachedBmp_29.png", id:"CachedBmp_29"},
		{src:"images/CachedBmp_26.png", id:"CachedBmp_26"},
		{src:"images/CachedBmp_25.png", id:"CachedBmp_25"},
		{src:"images/CachedBmp_23.png", id:"CachedBmp_23"},
		{src:"images/CachedBmp_28.png", id:"CachedBmp_28"},
		{src:"images/CachedBmp_22.png", id:"CachedBmp_22"},
		{src:"images/CachedBmp_21.png", id:"CachedBmp_21"},
		{src:"images/CachedBmp_20.png", id:"CachedBmp_20"},
		{src:"images/CachedBmp_19.png", id:"CachedBmp_19"},
		{src:"images/CachedBmp_18.png", id:"CachedBmp_18"},
		{src:"images/CachedBmp_17.png", id:"CachedBmp_17"},
		{src:"images/CachedBmp_16.png", id:"CachedBmp_16"},
		{src:"images/CachedBmp_15.png", id:"CachedBmp_15"},
		{src:"images/CachedBmp_269.png", id:"CachedBmp_269"},
		{src:"images/CachedBmp_14.png", id:"CachedBmp_14"},
		{src:"images/CachedBmp_13.png", id:"CachedBmp_13"},
		{src:"images/CachedBmp_12.png", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png", id:"CachedBmp_10"},
		{src:"images/CachedBmp_8.png", id:"CachedBmp_8"},
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/CachedBmp_7.png", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png", id:"CachedBmp_3"},
		{src:"images/Image_10.png", id:"Image_10"},
		{src:"images/Image_12.png", id:"Image_12"},
		{src:"images/CachedBmp_1.png", id:"CachedBmp_1"},
		{src:"images/Image_2.png", id:"Image_2"},
		{src:"images/Image_0.png", id:"Image_0"},
		{src:"images/BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1.png", id:"BRIGHTEDGEEDUSYSTEMPVTLTDlogopng1"},
		{src:"images/Image_4.png", id:"Image_4"},
		{src:"images/Image_8.png", id:"Image_8"},
		{src:"images/Image_6.png", id:"Image_6"},
		{src:"images/CachedBmp_2.png", id:"CachedBmp_2"},
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
an.compositions['F0AE7500BAD1324AB7564C359B5EFD43'] = {
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