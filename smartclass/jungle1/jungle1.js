(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Asset2 = function() {
	this.initialize(img.Asset2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,83);


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
p.nominalBounds = new cjs.Rectangle(0,0,1580,1580);// helper functions:

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
	this.shape.graphics.f("#7A4935").s().p("AgZAQQgLgHAAgJQAAgJALgGQALgHAOABQAPgBALAHQALAGAAAJQAAAJgLAHQgLAGgPABQgOgBgLgGg");
	this.shape.setTransform(334.025,104.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAADgCACQgCACgDAAQgGAAAAgHg");
	this.shape_1.setTransform(300.675,77.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_2.setTransform(301.175,75.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#724B34").s().p("AgUAKQAFgQASgEQAJgCAJACQgIAAgHADQgPAGgEANg");
	this.shape_3.setTransform(221.675,178.1929);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#724B34").s().p("AgKAVQAOgIADgUIABgTIADAVQgBAWgQAKg");
	this.shape_4.setTransform(231.1,194.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#724B34").s().p("AgJAfQAPgYAAgWIgEgTIAHATQAFAXgRAbg");
	this.shape_5.setTransform(241.17,195.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#724B34").s().p("AgTgIIgbgEIAcAAQAiADAfAQIgDAGQgfgPgggGg");
	this.shape_6.setTransform(195.325,119.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#754F35").s().p("AgBA7QgXgRgTgdQgTgdgCgXQgDgaAVgGQAWgGAaASQAZAQATAdQATAcABAYQABAagZAIIgJACQgQAAgSgPg");
	this.shape_7.setTransform(63.3887,111.372);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#754F35").s().p("AgUAHQgPgvARgIQAJgEALAMQAMAMAIASQATAvglANIgCAAQgJAAgNgrg");
	this.shape_8.setTransform(93.0737,113.5443);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#754F35").s().p("AgCA2QgkgPAKgzQAEgVALgMQALgOAKAFQAXAIAAA5QAAAugWAAQgFAAgGgDg");
	this.shape_9.setTransform(83.6405,126.0398);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#754F35").s().p("AgfAUQgMgKAJgTQAIgUARgHQARgHAfAMQgPAkgVAjQgRgGgRgOg");
	this.shape_10.setTransform(91.7694,138.4461);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#724B34").s().p("AAKApQABgUgNggIgOgdIARAcQASAggCAVg");
	this.shape_11.setTransform(97.4725,195.8375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#724B34").s().p("AgFgRIgSgbIAWAbQAUAeAFAfIgHABQgEgegSggg");
	this.shape_12.setTransform(103.725,192.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#754F35").s().p("AgTAuQgTgZgBgmQgBgsAiAFQAXAEAPAZQAOAYgKAWQgMAagOAJQgGADgFAAQgJAAgJgLg");
	this.shape_13.setTransform(77.6441,98.9879);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#754F35").s().p("AgcAqQgTgYAMggQAKgeAVgJQARgHALALQAQAQABAgQABAjgZAQQgLAHgJAAQgOAAgLgPg");
	this.shape_14.setTransform(49.0447,90.2333);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#754F35").s().p("AgsAeQgMgUASgYQAQgVAegEQAbgEAKAJQANANgWAVIgtAiQgKAIgJAAQgKAAgGgMg");
	this.shape_15.setTransform(47.8669,68.396);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#754F35").s().p("AgcBEQgugNAFgiQAEgfA3giQAxggAQAFQARAGgBAwQgCAxgaAYQgSARgZAAQgNAAgPgFg");
	this.shape_16.setTransform(69.0357,76.3469);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#754F35").s().p("AgHAgQgUgFgMgRQgNgSAWgJQAhgNAQgCQAZgDABASQABAVgTARQgOAMgNAAIgHgBg");
	this.shape_17.setTransform(63.2895,57.5632);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#754F35").s().p("AglAQQAAgjAagHQAWgGASALQAVANgcAYQgOANgWAAIgCAAQgVAAAAgNg");
	this.shape_18.setTransform(80.4082,53.82);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#754F35").s().p("AgvA2QgRgLAGgSQAEgKgHgSQgHgRAJgTQAGgMAVgHQAWgHAWADQA7AGgHA3QgCASgWAWQgXAWgXACIgIABQgUAAgNgKg");
	this.shape_19.setTransform(92.0587,64.9023);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#754F35").s().p("AgEAZQgZgHAIgbQAHgbAgAQQAKAFgHAWQgFATgOAAIgGgBg");
	this.shape_20.setTransform(104.8771,75.7545);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#754F35").s().p("AgGAZQgqgQAFgWQAGgXArAJQAtAIgHAdQgFAUgVAAQgKAAgOgFg");
	this.shape_21.setTransform(102.9411,90.3558);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#754F35").s().p("AgUAHQgFgLAYgGQAXgGAAAIQAAAIgTAKQgIAEgFAAQgIAAgCgHg");
	this.shape_22.setTransform(115.4569,102.1981);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#754F35").s().p("AgkATQgMgZAkgQQAjgPAPAOQAJAKgkAdQgSAPgMAAQgLAAgGgMg");
	this.shape_23.setTransform(133.8647,95.1961);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#754F35").s().p("AgQAXQgYgXAXgWQAWgWAQATQAQAUgPAaQgIAOgKAAQgJAAgLgMg");
	this.shape_24.setTransform(144.3251,101.8925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#754F35").s().p("AgWAUQgVgVAdgVQAcgVANAbQAMAYgVARQgJAHgJAAQgKAAgMgMg");
	this.shape_25.setTransform(138.1555,77.8861);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#754F35").s().p("Ag/AWQgHgQAPgQQANgPAZgIQA+gVAUAsQAKAUg+AWQgZAJgRAAQgZAAgJgTg");
	this.shape_26.setTransform(122.4694,80.674);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#754F35").s().p("AgYAvQgVgFgIgSQgHgSAJgSQAXgxBBARQARAFADARQACAQgMASQgXAlggAAQgIAAgIgCg");
	this.shape_27.setTransform(94.5367,42.8173);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#754F35").s().p("AgWAKQgEgWATgJQASgIAKASQAKARgaAOQgHAFgGAAQgLAAgDgPg");
	this.shape_28.setTransform(106.1358,45.5484);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#754F35").s().p("AAEAoQhDgOgIgiQgEgQAWgKQAVgKAeABQBLADAAA2QAAAegmAAQgNAAgSgEg");
	this.shape_29.setTransform(113.9448,61.8847);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#754F35").s().p("AglAHQgNgnAqgMQAcgHAQAxQARAvgmAAIgBABQgnAAgMgng");
	this.shape_30.setTransform(133.0211,62.3501);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#754F35").s().p("Ag+AiQgCgTANgWQAjg9BDAUQAeAJgrAuQgrAuglABIgBAAQgRAAgCgUg");
	this.shape_31.setTransform(147.2152,63.2178);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#754F35").s().p("AgGAvQhCgRgCgoQAAgUAbgMQAagMAgADQAiAEASATQAUAWgNAlQgIAVgfAAQgQAAgVgFg");
	this.shape_32.setTransform(123.5806,44.483);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#754F35").s().p("AhBAbQgGgRAUgTQASgUAbgJQAcgLAUAIQAYAKABAhQAAARg8ATQgXAIgQAAQgaAAgHgTg");
	this.shape_33.setTransform(145.6046,35.6912);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#754F35").s().p("AgBAcQgLgCgLgNQgLgNgCgKQgFggA2AYQAgAOgLATQgIAPgQAAIgLgCg");
	this.shape_34.setTransform(147.7159,50.4313);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#754F35").s().p("AgyAjQgIggARgZQAOgUAWgIQAXgJALgBQASgCADAMQAHAVgIATQgEAMgUAaQgUAagVAGIgJABQgSAAgHgag");
	this.shape_35.setTransform(151.7504,85.2284);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#754F35").s().p("AgTAkQgegOgCgVQgDgTAZgKQAegMAWAAQAcAAACAWQABAVgWAWQgQAQgQAAQgKAAgJgFg");
	this.shape_36.setTransform(173.2906,18.6534);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#754F35").s().p("Ag4AtQgRgaAMgbQAPgkAGgIQAKgOASABQAWABAcAPQAfAQgCAPQgBARgiAeQghAggUAEIgGABQgQAAgNgVg");
	this.shape_37.setTransform(170.2302,38.9022);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#754F35").s().p("AgoAAQgGgtAsgBQAsABgBAtQAAAugmABQglgBgGgug");
	this.shape_38.setTransform(189.7643,45.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#754F35").s().p("AgQANQgRgSAMgOQALgOAXAXQAZAWgTAKQgHADgGAAQgLAAgLgMg");
	this.shape_39.setTransform(171.5829,52.3213);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#754F35").s().p("AgOAUQgUgNAGgSQADgJANgEQAMgDANAEQAhAJgbAfQgIAJgJAAQgHAAgJgGg");
	this.shape_40.setTransform(171.0396,66.9345);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#754F35").s().p("AgfAtQgQgGAIgnQAJgnAXgGQAYgHASAfQASAfgXAGQgKAEgUASQgKAJgLAAQgFAAgFgCg");
	this.shape_41.setTransform(189.5305,65.2004);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#754F35").s().p("AARArQgdgFgKACQgXAEgLghQgKgfAQgSQAHgIAXAEQAWAEAWAMQA5AfggAeQgJAJgOAAIgJgBg");
	this.shape_42.setTransform(181.0042,93.3742);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#754F35").s().p("AgMAtQgcgEAAgQQAAgRAWgbQAWgdAOADQAQAEAGAiQAFAigPALQgLAJgSAAIgNgCg");
	this.shape_43.setTransform(204.0238,82.9242);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#754F35").s().p("AgLAeQgWgFACgQQADgOATgPQASgOAKAEQAKADADAZQACAXgJAGQgKAFgLAAQgHAAgIgCg");
	this.shape_44.setTransform(213.0307,64.1849);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#754F35").s().p("AgQAcQgSgGASgaQARgaATACQANACgQAeQgNAZgOAAIgGgBg");
	this.shape_45.setTransform(231.6651,69.7318);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#754F35").s().p("AhCA4QgagEAOgQIAagZQALgMgFgOQgGgVAHgMQAIgPAYALIAZAMIAPgDQARgEAaAlQAZAlgTAJQgLAGgmgFQgigEgOAMQgPAMgTAAIgLgBg");
	this.shape_46.setTransform(198.7266,19.3209);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#754F35").s().p("AgfAUQgpgPARgTQAIgKAcgCQAZgCAZAGQAaAGAEALQAEAMgeAOQgNAHgQAAQgQAAgVgIg");
	this.shape_47.setTransform(223.3405,21.9197);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#754F35").s().p("AhIAjQgIgXAFgUQAFgXARgNQAJgHAdADQAcACAaALQBDAcgxAnQgIAHgVgHQgVgGgIAGQgSANgUAEIgJABQgSAAgGgPg");
	this.shape_48.setTransform(214.0745,40.0231);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#754F35").s().p("AgUAaQgUgJAYgaQAYgbATANQALAIgVAYQgPATgNAAQgFAAgEgCg");
	this.shape_49.setTransform(234.4926,51.27);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#754F35").s().p("AgPABQAAgWANABQANABAEATQADARgQADIgDABQgNAAgBgUg");
	this.shape_50.setTransform(252.1547,46.8131);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#754F35").s().p("AAoAmQgfgLgKACQgbAHgUgJQgYgKAIgaQAIgbAdgDQAbgDAaASQAbASAIAIQAJALgEAMQgDAPgNAAQgEAAgGgCg");
	this.shape_51.setTransform(241.324,33.7602);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#724B34").s().p("AgggJIgDgrIAHAoQAQAqAwARIgBAHQg0gTgPgsgAgjg0IAAAAIAAAAg");
	this.shape_52.setTransform(253.55,94.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#724B34").s().p("AgUAKQATgQAVgIQgRANgSAQg");
	this.shape_53.setTransform(292.5,17.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#724B34").s().p("AhMC9QgRgXgIgjQgRhFAqg9QAog6BChFQAhgiAagXIAHgHIgBAKQgDATAIAqQAGAiABAUQABAggJAcIgdBYIgMgaIgGA0IgBAGIgEgDQgNgIgIgbQgHAXgFAdIgBAEIgEgCQgRgJgNgOQADAUAEAPIADAJIgIgFQgPgLgKgQQgEAbgIAUQgIAVgIACIgDABgAhHAFQgkA2AKA8QAGAjATAcQAGgGAGgSQAIgWACgbIABgMIALAUQAHAKAIAIQgEgWgDgTIgCgVIAJAUIAHAJQAJAMAPAJQAGgjAJgYIAEgLIACALIAEAPQAGAPAHAIIAIhJIAPAkIAXhIQAJgbgBgfQgBgTgGgiQgHgkABgSQhpBlg1BMg");
	this.shape_54.setTransform(281.6706,36.475);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F37872").s().p("AhTBUQgQhDApg7QAdgrAsgyQAmgJAGAOQAbAdACAnQACAegNArIgGgNIgGAwIgEAOQgJgIgGgRIgFgQQgJAXgHAoQgSgKgKgNIgIgLQADAcAGAVQgNgJgJgNIgHgMQgDAegJAYQgIAVgHACQgRgWgIgig");
	this.shape_55.setTransform(280.171,41.1239);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F37872").s().p("AgBAGIADgNIgBAPg");
	this.shape_56.setTransform(286.475,46.55);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F05E5C").s().p("AhiCAQgQhDApg8QAog7BChEQAhgiAZgXQgCAQAKA/QAJA5gMAnIgaBQIgOgfIgHBCQgKgHgIgTIgFgSQgJAXgHAoQgRgKgLgNIgIgLQADAcAGAWQgNgKgJgNIgHgLQgDAegJAXQgIAVgHACQgRgWgIgig");
	this.shape_57.setTransform(281.6516,36.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#724B34").s().p("AiwDcQgIgZACgcQAFhFA0hWQAcgsBChTIAPgSQAjguAogcQAogdAggDQAUgDAMALQAMAKADAUQABANgCAdQgEA4AHAgQAMA1gXBMQgGAWgNAOQAKgYAHggQAQg/gKgtQgFgWAAgaIACgpQACgdgBgLQgCgTgKgIQgLgIgQACQgbACglAaQgqAcglAvIgPATQhQBkgfA8Qg5BtAbBRQgFgHgEgNg");
	this.shape_58.setTransform(279.8897,34.351);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BB8443").s().p("AiiDTQgchXBBh3QAdgzBbhzQAug8AwgTQArgRAYAVQAPANgFAuQgIA+AHAhQAKAugFA3QgDAbgFATQhGBGhMA2QhTA8guAAQglAAgMgmg");
	this.shape_59.setTransform(278.9905,37.4166);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D29E54").s().p("AirDdQgchXBBh3QAdgzBbhzQAwg+A1gcQAzgcAXAUQAQAOgDAvQgEBBAHAgQAJAugPBAQgIAggKAYQhGBGhMA2QhTA7guAAQgkAAgNglg");
	this.shape_60.setTransform(279.8735,36.4348);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#724B34").s().p("AgvBGQgLgFgGgHQgCgCABgGIACgGQADANAQAGQANAGALgEQgqgWAQhDIAAgCIACgBQAQgHAVgBQAWAAAPAHQANAIAFAKQAMgMgBgUQgBgPgJgFQgLgGgXADIgVADIAGgEQAIgFAIgBQAZgCALAGQANAGABAUQABALgEALQgFANgKAGIgEADIgCgFQgCgMgNgGQgNgHgUAAQgSABgQAGQgPBBAtARIAHADIgGAEQgKAGgLAAQgJAAgIgEg");
	this.shape_61.setTransform(299.0924,74.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BB8443").s().p("AgfBDQgSgIgDgOQgKgPgHgTQgOglAMgVQAMgVAjgBQARAAANAEIAXgEQAZgCALAGQAOAHgCAWQgBAWgQAKQgFgVgfgFQgcgFgYALQgRBHAvASQgHAFgKAAQgIAAgIgDg");
	this.shape_62.setTransform(297.6306,74.9037);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3C3430").s().p("AguBDQgdgNAGg3IAMg2QAGgQAQAAIAUACQAUADALAAQAlACAMAUQANATgMAfQgLAcgaATQgZATgaAAQgLAAgNgFgAgzg1QgLAggBAdQgCArAWAKQAKAEALAAQAYAAAXgRQAYgSAKgbQALgbgKgQQgLgRghgCQgMAAgUgDIgTgCQgLAAgFALg");
	this.shape_63.setTransform(332.3432,107.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#523931").s().p("AgbAyQgagMgHgiQgGgbAHgUQAGgPASABIAuAGQAhABAMARQAOASgMAfQgNAggWAIQgHACgIAAQgPAAgUgIg");
	this.shape_64.setTransform(332.7813,106.3944);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#473630").s().p("AgtBAQgZgLADgwQACgdALgeQAFgPASABIAvAGQAgABANARQAOASgNAfQgNAiggASQgTAMgTAAQgMAAgMgFg");
	this.shape_65.setTransform(332.3287,107.4819);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A2763E").s().p("AgYgIIgjglIAlAiQArAjAnAQIgCAGQgogPgqgng");
	this.shape_66.setTransform(304.375,111.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#724B34").s().p("AgDA/IgBgBQgpgSgLgeQgIgWALgZQAHgMARgJQARgIATAAQAjAAARAWIABAAIAAACIgFAvQgOAwgrAGgAgagwQgPAHgFALQgLAWAHAUQAKAbAmARQAkgFANgpQAHgVgBgaQgPgSgfAAQgSAAgPAHg");
	this.shape_67.setTransform(298.1609,75.475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2D2D2D").s().p("AguAkQAFg+A7gfQATAFAKANIgFAtQgNAvgpAFQgVgJgNgNg");
	this.shape_68.setTransform(299.15,75.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag0APQgJgWAMgYQALgXAlgEQAmgEAUAYIgFAtQgNAvgpAFQgmgRgMgbg");
	this.shape_69.setTransform(298.1651,75.4709);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#724B34").s().p("ACXK5QgggOgVgZQgdgiAAguQgigwhNhYQg/hHgVgdQghguAHgVQADgJANgaQAmhJAGgxQAKhVg+hEQgXgagrgtQhPhSgeguQguhIgThkQgWhwAwhtQAQgkAZgdQAMgQAJgHIgSAXQgUAdgQAjQgxBsAVBwQATBjAvBHQAdAuBOBRQAyA0AQATQBABHgLBYQgGAygmBLQgNAYgDAJQgFATAiAvQAVAcA7BCQBRBdAfAtIABABIAAABQgBAsAdAhQATAXAfAPQAiAPAiACQAhABANgKIABgCIABAAIAbgDQAdgHALgQIACgCIACAAIAIAAQAMgDAPgKQAJgFAAgOQABgUgOgZQgNgZgTgOQgfgWhRgLIgFAAQgPgCguhFQgyhMgrheIgBgCIACgCQCAhrAwiSQAph5gWh0QgPhJgahhIgZhRIAcBQQAeBgAOBKQAXB1gpB7QgwCSiABtQAqBbAyBMQArBBAMACIAFAAQBTALAgAYQAUAOAPAbQAOAbgBAVQAAARgMAIQgXAPgQAAQgTAYgzADQgNALgdAAQgmAAgogTg");
	this.shape_70.setTransform(71.7933,129.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D29E54").s().p("ABWBjQgBgDgEgCQgEgDgBgDIABgWQAAgPgKgCQACgJgJgNQgIgNABgIIgPABQgKAAgFgDQADgLgBgIQgQAEgGgLQgFgNgNACQgBgKgGgBQgKgBgCgCQgDgDgDgHIgGgNQgFAAgJAGQgJAGgGgBQACgIgEgCQgFgEgPAKIgIAGQgCgBAAgKQAAgGADgGQAFgNALgMQAKgLAMgEQAQgGALAIQAFAEAHAOQAHANAGAFIAJADQAFACADADIAKAKQAEADAIACQAFABAHgBIANAAQAQAfAMAJQAFAEAEgBIAFAKIABAIQAAAEACADQABABAFAAIAFgBQAEAIgGATQgIAXABAIIAGAAQgNAPgEARIABABQACAJgEAOQgBgMACgMg");
	this.shape_71.setTransform(77.9512,71.163);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D29E54").s().p("ABXCVQgkgBgUgMQgygfguhbQg1hnggggQAoAAAngbIgjAfQAqBcAzBLQArBFAOACQBKAKAhARIgwABIgQAAg");
	this.shape_72.setTransform(89.7,169.3583);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BB8443").s().p("AEZKWQgVgKAAggIgsACQgYAAgJgJQgUgNgdgtQgbgqgWgLQhxgygQhyQgOhpBDhlQgxgWgtggQgOghgbgeIhThXQgtgwgXgeQghgqgUgtQgXg0gNhBQgVhzAyhtQAPgiAVgeQALgOAHgIIH1D6IAYBSQAbBhAOBJQAWBvgkB1QguCZiHBxQAqBcAyBMQAtBFAOABIA0AJQAtAKAWAQQAIAGAHAIIgdAIQgFACgVAYQgMAMgNAAQgGAAgGgDg");
	this.shape_73.setTransform(70.2267,124.4005);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#9B663B").s().p("ADfLLQghgBghgPQhWglABhTQgVgdh/iUQhShfAJgcQAnhGAPg4QAchqhLhSQhuhwgpg1QhChWgXh2QgVhzAyhtQAPgjAVgdQALgPAHgIIH1D6IAYBSQAbBhAOBKQAWBugkB1QguCZiHBxQAqBcAyBMQAtBFAOACIA0AJQAtAKAWAQQAbAUAOAlQAOAmgTANQgRALgMACIgKABQgMARgeAHIgbAEQgNALgdAAIgFgBg");
	this.shape_74.setTransform(71.8193,129.454);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A2763E").s().p("AgiCyQgPANgVAAQgXAAgjgOQgWgKg0gaIgRgIIABgCQACgrAYgVQARgRAjgIQALgDATAAIAhABIAnACQAlAAAXgJQAhgOALgzQAHggABhCQABgbAEgRIAEgRIADASQAEAYAPAXQAJAPAeAiIAmAtQAmAwgBAWQAAASgiAtIgRAYQgwBDhRAAQgkAAglgOgAgiCrQAlAOAkAAQBNAAAvhAIARgYQAggsABgRQAAgSglguIglgtQgZgcgKgOQgPgVgGgTQgCAMABAOQgBBEgIAgQgNA2gkAOQgYAKgmAAIgngCIghgBQgTAAgJADQggAHgQAOQgXATgCAoIAMAGQA0AbAVAIQAiAPAWAAQASgBAOgNIACgBg");
	this.shape_75.setTransform(313.9003,98.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D3A75D").s().p("AgVCfQhJgSg1goQAAAEATAZQANASgTAAQgXgEgVgOQgTgOgOgTQAJgWAVgNQAOgIAZgGQAOgEA+ADQA6ADAcgMQAigNAMg0QAHggABhEQABgZAEgSQAFAfAaAjQARAVAwA4QApAygEAYQgDAMgwBDQgUAcgaAQQgTABgTAAQgxAAgxgMg");
	this.shape_76.setTransform(314.2973,98.3899);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C19450").s().p("AgjCnQgXAWgvgPQgZgIhVgqQACgrAZgVQAQgOAhgIQAPgEA+ADQA5ADAcgMQAigNAMg0QAIggABhEQAAgZAFgSQAEAfAbAjQARAVAwA4QApAygFAYQgCAMgwBDQgnA2g9AJQgNACgOAAQgkAAglgOg");
	this.shape_77.setTransform(313.9223,99.3773);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#724B34").s().p("AEdJnQgSgBgRgLQgQgLgJgQQgYABgWgMQgWgMgRgXQgWgfgEgnQgFgmAOgjQAAhmgSg6IgXANIgNAIQgFABgDgBQgFgCgBgIQgDgXAAgjQhqg+hZg5QizhxgXgnQgRgagHgeQgEgSgEgnQgFg1gHgaQgIgjgGgrQgFgtgBglQAAgUAJgYIADgGQgGAYACA0QADBHAQA9QAHAcAFA0QAEAlAEATQAHAdAQAaQAXAmC8B2QBeA7BbA2IABABIAAABIABAYIADAkIACAFQABABANgJIAbgPIADgCIACAEIAKAnQAKA1AABLIAAACQgOAfAFAlQAEAnAVAdQAQAXAVALQAVALAXgBIACAAIABACQAIAOAPALQAQAJAQACQAaACAQgUIABgCIACAAQAcAEATgIQASgIAFgUQAGgVgMgWQgOgYgdgMIgBgBIAAgBQgHgKgYg9QgLgagOhWQgLg/gHgcQgLgvgOgWQgWgihNhKQgxguiFh7IgyguIADgDQB7hoAfioQAKg0AAg0IgDgsIAFAQQAFAVAAAXQgCBZgdBQQgqB0hbBOIAtApQCEB6A0AyQBLBIAXAjQAOAVAMAwQAGAbAMBCQAOBVAKAaQATAwALAVQAfAMAOAbQAOAZgHAXQgFAUgSAKQgUAMghgFQgQAUgZAAg");
	this.shape_78.setTransform(207.4556,140.05);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D29E54").s().p("AAUAwQijh+hOg+QA9gNA1gkQAugfAugzQgqBYhMBAQCtCfAqAoQBZBVAYAmQAOAUAMAyQhAhviJhyg");
	this.shape_79.setTransform(213.3,132.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BB8443").s().p("AEAIiQgjguADhrQACg1gEgZQgGgpgXgcQhAhTighSQhfgxgegRQhDgngsgsQgogsgbhTQgbhjgPgxQgFhXAPgTQA4AyDbhIQBsglBiguIADArQABA1gJA0QgfCqh+BqQCtCeAqApQBZBVAZAlQAVAgASBmQAUBzAJAYQATAvAJATQgdgDgsgQQAFAZgWANQgJAGgIAAQgJAAgGgJg");
	this.shape_80.setTransform(204.678,133.9864);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#9B663B").s().p("AETJkQghgJgPgcQg7AEgihAQgihAAbg9QAAhMgKg0IgLgmIgkAVQgKAFgCgLIgCgkIgBgXQhZg0hfg8Qi9h3gYgoQgXgkgGg1QgKhSgFgVQgPg+gDhHQgEhLAOgRQA4AyDbhIQBtglBhguIADArQABA1gJA0QgfCqh+BqQCtCfAqAoQBZBVAZAlQAVAgASBmQAUBzAJAYQAYA+AHAIQAbALAOAXQAOAVgDAWQgGA1hFgMQgPAVgYAAQgHAAgJgCg");
	this.shape_81.setTransform(207.4595,139.886);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#754F35").s().p("AgeAyQgVgNgNgPQAsgwBEgfQAbAqgQAcQgPAcgYALQgMAGgLAAQgOAAgNgIg");
	this.shape_82.setTransform(50.1012,49.2644);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#754F35").s().p("AgTAUQgcgJgJgMQAvgMBCgMQgJAlgZALQgGADgIAAQgLAAgRgGg");
	this.shape_83.setTransform(72.25,39.8941);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#754F35").s().p("AghAlQghgCgIgYQgDgLAAgLIBWgNQAvgHAWgFQAEAXgmAYQgnAaghAAIgFAAg");
	this.shape_84.setTransform(124.2693,30.0317);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D29E54").s().p("AAwBhQAAgdAEgMQgFAFgHANQgCgIAAgNIABgVQgIgBgKAIIgOANQgBgFACgYQABgWgFgFQgGgJgLAGQgFACgNALQgCgMgIgTQgIgUgJgIQgHgHgGACQgEABgLAJQgFgJAAgLQgEgCgCACIgDAFIgBgeIgFABIgCgYQAAgTAGgCQAGgCANAZQAMAXgBAJQAFgFAEgMQAEgMAFgFQADAFACAKQABALADAEQADgBANgMQAKgKAGAFQAFADAAAOIAAASIAPgDQAKgCAEAFQAFAGgDAPQgDAMgGAHQASADAOgIQADAJAAAOQgBAMgEAKQARgIALgTQABAQgGAwQgCARgHAJQALABAPgJIAYgNQADAUgEARQgEAXgOAJQgEgKgDgRQgLgCgMASIgQAcQAFgNAAgdg");
	this.shape_85.setTransform(204.0271,67.9457);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#724B34").s().p("AuDJcIhJgcQiYhDiii/QiUiugoiAQgTg7ARgbQAphDBGgpQA0geBUgYQA0gOBzgVQCigeA7gTQA9gUCFgTIBLgLQAjgHAKgHQA1geAzgGQgLgNgGgKIgDgFIAQgBQA8AAAiANQgEgUgHgGIgGgGIAIgBIAkgCQAXAAAQAEIgLgJIBIgTIgJgPIgEgFIBNABIgUgfIAHAAIAfABQAkAAAagBQAKgLAWAAQALAAAOADQgCgWgEgPIgBgFIAFAAQAEAAAwAOQAAgSgEgKIgCgFIAGAAIARAHQATAMAOAZQAVgZAHgVIADgJIAYA6QAWgZANggIAFgKIACALIAQA2QAOgYAEgPIABgGIAFAFIAHANQAHASgBAYIBAgnIgdA8QAfgPAXgPIAFgDIABAFIAHArQAWgLAWgdIADgEIACAFQACACAEANQAHAUADAaQAfgNAggGIAHgBIgIARQgFANgBALIBKgUIgEAHIgHAOQgHAOgCALQAggHASgHIADgCIAXApQALgTAFgSIADgMIAEAMIAEASQAEAVABAQQAmgOAagNIAMgGIgIALQgTAbgNAWQA0gLAoAAIAYABIAQACIgQAFQgdAJghAQIBsgGIAKAAIgIAHIgIAIQgJALgMASQAqADBqAiQBbAdBWBBQA7AtA/BEQAwAzAbA+QAbA+AAA7QAAAfAQAbQAKASAhAmIAmAtQAmAxAAAWQgBASghAtIgSAYQgwBDhRAAQgkAAgmgOQgOANgWAAQgWAAgjgOQgWgJg1gbIgugXQghgQg2gSQgbgKhJgWQhJgWgjgNQg3gTgegRQgMgJgfgJQg/gThhgHIgbgBQh+AAjLA2QjDAzgUAeQgjA2hQAyIgFADIgBgFQAAgJgFgOQgfAugnATIgEACIgBgFQgBgFgFgJQgMAYgdAQIgGADIABgHQABgLgEgRQgTAgggANIgFACIABgQQgdAYgaAAQgUAAgFgQQhaAfhhAAQhcAAhbgbgAmemfIAEAFIgGAAQg0AFg3AfQgMAHgiAHIhNAMQiHATg5ATQg9AUiiAeQh6AXgsAMQhTAXgzAeQhFAogoBCQgPAYASA4QAoB/CSCtQChC+CXBBIBIAcQBaAbBbAAQBjAABZggIAEgBIABAEQABAOASAAQAbAAAegcIAHgGIgCAWQAUgKAPgTQAIgKAEgIIAEgIIACAJQAFAQAAAQQAcgSAIgUIACgHIAEAGQAHAKACAIQAZgNAXgcQAMgOAHgLIAEgGIACAGQAHASAAAIQBMgwAhg0QAWgiDHgzQDMg1B9AAIAcABQBiAHA/ATQAgAKANAJQAdARA2ATQAiAMBKAWIBlAgQA2ATAhAQIAvAXQAzAbAVAIQAjAPAVAAQATAAAOgNIABgCIACABQAmAOAkAAQBNAAAvhAIARgYQAhgsAAgQQAAgTgkguQgNgQgZgdQgigngKgSQgRgdAAghQAAgpgPgvQgZhNg8hAQiPiciZgxQh1gmgiAAIgBAAIgIABIAEgGQANgUAPgRIiBAGIANgHQAZgOAkgNIgGAAQgdAAglAGIggAGIgIACIAEgHQAIgOAVgfQgTAJgVAIIgWAIIAAgFQAAgQgGgfQgHATgKAOIgDAEIgDgEIgXgpQgPAGgUAFIgRADIgEABIAAgEQAAgOANgZIhDASIAAgEQAAgQAJgVQgWAFgVAHQgQAHAAABIgFACIAAgFQgEglgKgWQgQAUgRAMIgOAIIgEABIgBgEQgCgTgEgYQgSAMgWALIgcAMIAag2Ig2AhIAAgHQACgggKgSQgGASgPAVIgEAFIgCgGIgPg0QgPAggWAWIgDADIgWgyQgKAXgTAVIgEADIgCgEQgRgjgZgIQAEAOgCAPIAAAEIgEgBQgggKgSgEQADASABAVIAAAFIgDgCQgOgEgOAAQgTAAgIAKIgBABIgCAAQgmABgzgBIAUAfIhNgBIALASIgFABQgfAHggAJQAIAHAAADIAEAIIgIgDQgSgGgdAAIgdACQAFAHACAMIADAMIAAAGIgFgCQghgPhAAAIgDAAQAHALAJAMg");
	this.shape_86.setTransform(187.3669,63.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D29E54").s().p("AGmCVQAJgVALgHQgUgEggAIIg0AQQAAgKAKgRQAHgOgDgHQgKgIgTAQQgUAQgOgEQARAAAFgPQACgUAEgHQgbARgVgLQgWgMAAgjQgMAEgBARQgCAWgGAFIgLgoQgHgWgKgOIABAeQgBAQgNAKQgIgOgVgVQgUgWgIgNQgIAMADAXQACAagDAJQgVgJgMgcQgTgpgFgFQAAANgBAIQgDAKgJAJQgFgFgCgeQgBgWgUgEQAAAGgHAQQgHAPAAALQgPgEgGgUQgJgbgEgEQAAAGgGALQgFAKAEAHIgWgcQgNgRAAgRQgHAHAAAXQAAASgHABQgQgBgWgSQgegagJgEQAAAjgGAVQgJgRgUgRIgigdQAAAngWAeQABgNgFgOIgJgcQgEAKgLAWQgKAUgDAKIgIgeQgFgUgJgMQgKAWgCAMQgCgGgNgNQgKgMADgKQgIAEgFARQgGATgCACQgKADgNgUQgMgSgHAHQgEAHgDASQgDARgEAGQgIgDgFgKIgIgOIAAAiIgjgPIgigQIAEgCIgMgTIBOABIgUgfIAfABQAkABAbgCQAPgSAtALQgBgXgGgUIA4APQADgTgGgPIARAHQAUAMANAcQAXgZAJgaIAWA2QAZgYAQgmIADAOQAFATAKAdQASgbAEgTIAHAOQAGATgBAaIA7gkIgcA5IAWgJQAXgMASgMIAHAvIAQgJQARgMARgWIAGAPQAGAWADAdIATgIQAYgJAZgFIgGAOQgGAPAAANIBGgTIgIAPQgIARAAALIASgDQAVgFAQgHIAYArQANgTAHgYIAFATQAFAXAAARIAVgIIAvgVQgXAhgNAXIAqgIQAvgHAhADQglALgoAWIB8gHQgMAKgWAiIAQABQgPAFggASQgeAQgTAFQAGgFAJgWg");
	this.shape_87.setTransform(218.1,18.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BB8443").s().p("ATOI3QgTASgggFQgagFgwgYQg3g+higxIi1hMQg4gagmg8Qgng+AAhFQgCAhgMAnQgIAWgTAuQgGALgVgQQgWgRAAgUQgFAFgEAYQgDARgQgEQgGgHgCgIQgEgKAFgKQgcAPgFAAQgNABgKgXIgIARQgEALgJAAQgJAAgHgIQgFgGgHgOQAAASgCAHQgFAOgOgEQgGAAgHgKQgIgKAAgPQgDAEgEAKQgDALgEADQgNAHgpAAQgbAAgQAcQgHAHgVgVQgIgEgMAMQgNANgCAAQg7gIgzAXQgzAXgZAtQhMAXgqAVQgMgdgGgNQgMgVgOgIQgQgIgLAiQgQAygGAHQgIgLACgZQACgYgDgCQgkgMgNAqIgKAlQgHAVgLAJIgGghQgEgSgSgEQAAAWgMAdIgXAuQgOgcAAgVQgNAHgHAeQgHAagOAAQgKAEgIgXQgGgUgLALQgIAEgKAPQgMASgFAFQAAgOgOgcQgOgcAAgOQgVAIgQAcQgVAlgFAEQgKgKADgcQAEgcgLgLIgSAbQgLAPgNAAQgNAFgCgOIABgaQgSAIgUAgQgWAigRAKQgDgIgJg0QgGglgQgIQgKgGgTAcQgUAfgOgEQgPgDgKgeQgLgigNgJQgOAagJALQgPAUgSgJQgKgDgLgVQgKgVgLgDQgPgGgaAaQgUAUgQgaQgIAIgIAQIgMAYQgMAIgIgQQgJgUgFAAQAAAHgLAEQgKADAAAHQgZgJgOADQiSiChlimQhkikAgg1QAohBBDgoQA0gfBWgYQArgMCVgcQCKgaA7gTQA4gTCAgSQBygRARgKQA4ggA0gEQgNgPgHgNIAoABQAsADAYALQgDgbgKgIIAdgCQAigBAVAHQgEgHgJgGIBGgSIgMgUIBNABIgUgfIAgABQAkABAbgBQAPgTAsAMQgBgYgFgTIA3AOQADgSgGgPIARAGQATAMAOAcQAWgYAKgbIAWA2QAZgYAPgmIAEAOQAFAUAJAcQASgbAFgTIAHAOQAGATgBAaIA7gkIgcA5IAVgJQAZgMASgMIAHAvIAPgIQASgNARgWIAGAQQAGAVADAdIATgIQAYgJAYgEIgFANQgGAPAAANIBGgTIgIAPQgIASAAALIASgEQAVgFAQgGIAYArQANgTAHgYIAFATQAEAXAAARIAVgIIAwgVQgYAigMAWIApgIQAwgHAhADQglAMgoAVIB7gGQgLAJgWAiIAdAEQAtAIBPAZQBXAcBRA8QA/AuBDBIQA1A4AaBDQAWA4AAA1QAAAnAbAlQARAYA2A+QApAzgFAXQgCANgwBCQgnA2g9AKQgNACgOAAQgkAAgmgPg");
	this.shape_88.setTransform(187.3237,59.3273);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#9B663B").s().p("AtGJjQgzgKgugRIgkgQQi7hRi3j3QhOhoglhWQgmhYAVgiQAohBBCgoQA1gfBWgYQAqgMCVgcQCLgaA6gTQA4gTCAgSQBygRARgKQA4ggA0gEQgMgPgIgNIAoABQAtADAXALQgDgbgKgIIAegCQAigBAUAHQgDgHgJgGIBFgSIgLgUIBNABIgUgfIAfABQAlABAbgBQAOgTAtAMQgBgYgGgTIA4AOQACgSgGgPIARAGQAUAMANAcQAXgYAJgbIAXA2QAYgYAQgmIADAOQAFAUAKAcQASgbAEgTIAHAOQAHATgCAaIA7gkIgbA5IAVgJQAYgMASgMIAIAvIAPgIQASgNAQgWIAGAQQAHAVADAdIATgIQAXgJAZgEIgGANQgGAPAAANIBHgTIgIAPQgJASAAALIASgEQAVgFAQgGIAYArQANgTAHgYIAFATQAFAXAAARIAVgIIAvgVQgXAigNAWIAqgIQAvgHAhADQglAMgoAVIB8gGQgMAJgWAiIAdAEQAtAIBQAZQBWAcBSA8QA/AuBDBIQA0A5AbBCQAWA4AAA1QAAAnAbAlQARAYA1A+QApAzgEAXQgDANgwBCQgnA2g9AKQgwAHg1gUQgZAZg4gVIiDg/QgxgYiUgtQiKgrgsgZQgLgIgggKQg/gThjgHQhxgJjfA3QjXA2gXAjQgjA2hPAxQgBgLgHgSQgIAMgMAPQgaAdgaANQgBgIgJgNQgCAGgGAIQgNASgWAMQACgQgGgWQgFAJgJALQgRAVgXAJIABgSQgcAagaACQgaACgCgSQhbAghgAAQg9AAg/gNg");
	this.shape_89.setTransform(187.3517,63.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#724B34").s().p("AgRABQALgGAYgBQgVAHgKAGg");
	this.shape_90.setTransform(312.275,34.775);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#724B34").s().p("Ag2BPQgHgLAAgNIgBgBIABgBIAog9QAsg+AigSIAGgDIgBAGQgCAzgiBAIgjA5IgBABIAAAAQgLAEgIAAQgQAAgJgNgAgQgDQgVAdgRAeQABAJAEAIQAHAMANAAQAHAAAIgDQATgcAPgdQAfg6AEguQggAUgnA4g");
	this.shape_91.setTransform(304.825,43.775);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F37872").s().p("AgzBLIgHgVIAmg7QAsg/AjgTQgCAzgjBAIgiA3QgJAFgIAAQgOAAgIgNg");
	this.shape_92.setTransform(304.8,43.9017);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#724B34").s().p("AhZCPQgagSgOgbQgNgZgBgbQAAgnAagkQAvhFBGgjQA0gaAvAAQARAAAJAEQAQAGACANQAFAYggAgQgGAFgCAHIgDAQQgFAjgPAhQgcA+gyA/QgQATgcAAQgaAAgagRgAACh+QhDAiguBCQgZAkAAAkQABAZAMAXQANAaAYAQQAZARAYAAQAYAAAPgRQAxg+Acg9QAPggAEghQACgNACgFQACgJAHgGQALgKAHgNQAKgQgDgKQgBgKgMgFQgJgDgPAAQgtAAg0Aag");
	this.shape_93.setTransform(305.8329,41.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BB8443").s().p("AglCTQgggFgagbQgcgcgEgmQgFgsAdgpQA3hOBIgYQA1gRAlAOQAWAJgMAVQgGAKgYAXQgIAHADAdQADAkgQAhQgcA+ggApQgQASgYAAIgNgBg");
	this.shape_94.setTransform(304.6647,42.0255);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D29E54").s().p("AgxCcQgggFgagbQgbgcgEgmQgFgsAdgpQA3hPBSghQBCgaAjAOQAWAIgIAZQgGATgTARQgIAJgEAYQgFAhgOAfQgRAnggAvIgdAmQgPASgZAAIgNgBg");
	this.shape_95.setTransform(305.8432,41.1483);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#724B34").s().p("AgLAdQAMgIADgNQADgLgHgRIgGgOIAKAOQAKAQgDAOQgEAQgOAJg");
	this.shape_96.setTransform(168.5333,197.925);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#724B34").s().p("AAGAiQAKgagPgXIgRgUIAVATQATAYgMAcg");
	this.shape_97.setTransform(174.9911,196.1375);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#724B34").s().p("AA9IMQANh9gKgvQgQAggQAWIgLANIAEgQQAGgUgBgcQgCg5gcgvQgGAagPATIgFAGIgBgIQgCgUgKgYQgGgPgRgfQgYgtgLgdIgLAvIgEgLQgGgTgIgdQgPg6gGg4IgUAcIgCgGQgPgxAGg2QAEgiAMgfQgQAJgUAEIgDAAIgBgDQgUjKCCh3QBCg7BGgUIAHgBIgDAGQgSAwA9EFQA4DvAiBNQAbA8gCBZQgDBRgWApIgFAJIgCgKQgJgsgKgfQgLA9gSA2QgbBXggAgIgHAHgABEFVQAIAWgBBAQgBAsgFArQAggoAchlIAWheIACgNIAFAMQAJAZAMA2QASgtABhLQABhSgYg3QgjhNg3joQg6j8ANg+QhQAag+BAQhuBxARC3QAWgFARgMIAMgJIgHANIgQAyQgNA9AQA4IAWggIABAKQAIBQAYBNIAKgwIAEAMQALAgAcA1QAdA2AGAdQANgTADgXIABgKIAEAIQAbAnAHAwQAFAggEAeQAQgXALgZIADgIg");
	this.shape_98.setTransform(37.7463,108.375);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BB8443").s().p("ABWE9QgXgLgLgfQAAAOgLABIgQgBQgLgHgHgZQgHgcgJgKQgTA6gXgQQgMgQADgiQAEgrgCgLQgFAOgPAGQgPAHAAgHQgOgaADgsIALhMQhPALgMhVQAWiNBwhTQA3gpA0gOQgSAwA4D1QAyDcAoBmIgxAYQgNAGgNAAQgMAAgMgGg");
	this.shape_99.setTransform(36.525,87.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#9B663B").s().p("ABGHDQAEhSgJgZQgPAkgVAaQAFgVgBgfQgCg8ghgyQgDAdgTAXQgDgegagzQgihAgLggIgKAwQgHgTgIgfQgQg9gGg7IgVAeQgSg7ANhBIARg0QgTAOgZAEQgVjKCDh0QBBg7BEgSQgTAxA9EFQA3DvAkBOQAbA7gDBaQgDBQgVAoQgNg8gKgdIgYBlQgfBtgjAkQAEgkABgog");
	this.shape_100.setTransform(37.7258,108.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#724B34").s().p("AALAqQAHgigSgcIgTgXIAXAWQAWAbgIAmg");
	this.shape_101.setTransform(22.6817,191.475);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#724B34").s().p("AgEAXQAKgJgBgMQgBgKgHgKIgIgJIALAHQALALABALQABAOgNAMg");
	this.shape_102.setTransform(14.4287,194.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#724B34").s().p("AABgKIAHADQgGAKgJAIQAAgEAIgRg");
	this.shape_103.setTransform(17.4,183.125);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#724B34").s().p("AgrH0QhGAKghgqQgTgYgDgmQgDgbAFgUQAFgWALhWQAKhVAAgSQAAgIgDgDQgDgBgJgBQgMgBgEgEQgCgEACgFIAHgLQAUgYADgbQAHg2AEkDQABhAAGhCIAHg1IAAgBIABgBQA/hIA4AAQBCAAAxBeQAiBCAOBWQANBQgOAVQgPAUgbAgQgvA4gKAYQgJASgIAvQgFAggEANQgGAZgKAQQgQAbgDA8QgCArAEBMIABAAQARAAAQAHQAZANANAeQALAZgCAaQgCAYgKAQQgPAWgTgDQgFANgPAHQgNAHgQAAQgYAAgNgMgAgpHsIABABQALAMAXAAQAPAAAMgGQANgHADgMIABgDIADABQASAEAMgUQAKgPACgVQABgZgKgXQgMgbgWgMQgPgHgQAAIgEAAIgDAAIgBgDQgDhOACgtQADg+AQgdQAJgPAGgYIAJgtQAJgxAIgRQAMgZAug4QAcghAOgTQANgSgNhNQgNhVgjhCQguhag+AAQg1AAg9BFIgGA6QgGA/gBA8QgEEDgHA3QgDAdgWAZQgHAKABACQACACAJAAQAKABAEACQAHAFAAAMQAAASgKBWQgLBXgFAWQgFAUADAbQAEAjARAVQAfAnBCgLg");
	this.shape_104.setTransform(171.831,151.525);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BB8443").s().p("AhZEyQgLgLAJgWQAJgUAPgCQgKABgRAIQgQAHAAgDQgNh5ABioIAEkkQBBgyA2AfQAtAaAiBOQAcBAAKBKQAKBGgMARQgKANgtA3QgiApgKAXQgIARgJA6QgKA2gNAXQgPAZgEAvQgegQgRgbg");
	this.shape_105.setTransform(176.4513,135.57);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9B663B").s().p("AgrHwQhVANgbg/QgTgrALgrQAFgWALhWQAKhVAAgTQAAgOgNgCQgQgCgCgCQgDgEAOgRQAQgWADgZQAGgtAFkNQABhBAHhBIAGg0QBLhVA/ARQA1AOAnBPQAhBCANBTQANBNgOATQgKAOgtA2QgiAqgKAWQgIARgKA5QgKA2gNAXQgRAdgDA9QgCArAEBOIAcAEQAeALAPAhQARAngOAlQgOAjgagGQgGAWggAFIgKAAQgWAAgNgMg");
	this.shape_106.setTransform(171.856,151.5483);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#724B34").s().p("Ai5HoQgLADgLAAQgdAAgegPQgegQgQgYQgYgnARgpQAZg6APhMQAMg/ACguQABgUAQgXQAKgPAdghQAggiATgZQAegnAWgqQAqhPASh7IALhtIAAgCIAbgmQAjglAsAAQB1AACKEPIABABIAAABQgKAegZAnQgyBNhQAxQjCB4g1BRQggAxgbB3QAhAHAZAWQAZAWAGAbQAJAngkAYQgDARgQAKQgPAIgUAAQghAAgQgTgAi1HiQAGAIAMAFQANAFAOAAQASAAANgHQAPgIABgPIAAgCIACgBQAhgWgIgjQgFgZgZgVQgagVgfgFIgDgBIAAgEQAHggALglQAWhIAVghQA2hSDDh5QBLguAxhHQAbgpAKgfQhCiDg/hDQhAhEg3AAQgnAAggAhQgSASgKAUQgCA3gKA8QgTB5gpBNQgWAqgeAoQgRAXgiAlQgdAfgKAPQgPAWgBASQgCAvgMA/QgQBNgYA7QgRAnAXAiQAPAXAcAOQAcAPAcAAQANAAAJgDIACgBg");
	this.shape_107.setTransform(32.7104,148.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9B663B").s().p("Ai4HkQgxAQg0gpQg3gsAZg6QAYg5APhLQAOhAABgwQACgcA1g8QBGhOAig/QAqhQATh9IAKhsIAXgiQAdgiAmgFQB4gQCREcQgJAdgZAmQgxBNhQAxQjEB5g0BRQgWAhgWBKQgKAkgHAeQA5AJAaAvQAbAxgvAfQgDAegoAEIgKAAQgfAAgPgUg");
	this.shape_108.setTransform(32.6725,148.7305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108,p:{scaleX:1,scaleY:1,x:32.6725,y:148.7305}},{t:this.shape_107,p:{scaleX:1,scaleY:1,x:32.7104,y:148.725}},{t:this.shape_106,p:{scaleX:1,scaleY:1,x:171.856,y:151.5483}},{t:this.shape_105,p:{scaleX:1,scaleY:1,x:176.4513,y:135.57}},{t:this.shape_104,p:{scaleX:1,scaleY:1,x:171.831,y:151.525}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:17.4,y:183.125}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:14.4287,y:194.55}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:22.6817,y:191.475}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:37.7258,y:108.15}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:36.525,y:87.725}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:37.7463,y:108.375}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:174.9911,y:196.1375}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:168.5333,y:197.925}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:305.8432,y:41.1483}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:304.6647,y:42.0255}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:305.8329,y:41.2}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:304.8,y:43.9017}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:304.825,y:43.775}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:312.275,y:34.775}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:187.3517,y:63.525}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:187.3237,y:59.3273}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:218.1,y:18.75}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:187.3669,y:63.125}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:204.0271,y:67.9457}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:124.2693,y:30.0317}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:72.25,y:39.8941}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:50.1012,y:49.2644}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:207.4595,y:139.886}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:204.678,y:133.9864}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:213.3,y:132.85}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:207.4556,y:140.05}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:313.9223,y:99.3773}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:314.2973,y:98.3899}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:313.9003,y:98.65}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:71.8193,y:129.454}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:70.2267,y:124.4005}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:89.7,y:169.3583}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:77.9512,y:71.163}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:71.7933,y:129.75}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:298.1651,y:75.4709}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:299.15,y:75.6}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:298.1609,y:75.475}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:304.375,y:111.8}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:332.3287,y:107.4819}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:332.7813,y:106.3944}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:332.3432,y:107.475}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:297.6306,y:74.9037}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:299.0924,y:74.9}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:279.8735,y:36.4348}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:278.9905,y:37.4166}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:279.8897,y:34.351}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:281.6516,y:36.7}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:286.475,y:46.55}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:280.171,y:41.1239}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:281.6706,y:36.475}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:292.5,y:17.175}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:253.55,y:94.1}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:241.324,y:33.7602}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:252.1547,y:46.8131}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:234.4926,y:51.27}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:214.0745,y:40.0231}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:223.3405,y:21.9197}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:198.7266,y:19.3209}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:231.6651,y:69.7318}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:213.0307,y:64.1849}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:204.0238,y:82.9242}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:181.0042,y:93.3742}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:189.5305,y:65.2004}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:171.0396,y:66.9345}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:171.5829,y:52.3213}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:189.7643,y:45.75}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:170.2302,y:38.9022}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:173.2906,y:18.6534}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:151.7504,y:85.2284}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:147.7159,y:50.4313}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:145.6046,y:35.6912}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:123.5806,y:44.483}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:147.2152,y:63.2178}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:133.0211,y:62.3501}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:113.9448,y:61.8847}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:106.1358,y:45.5484}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:94.5367,y:42.8173}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:122.4694,y:80.674}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:138.1555,y:77.8861}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:144.3251,y:101.8925}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:133.8647,y:95.1961}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:115.4569,y:102.1981}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:102.9411,y:90.3558}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:104.8771,y:75.7545}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:92.0587,y:64.9023}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:80.4082,y:53.82}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:63.2895,y:57.5632}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:69.0357,y:76.3469}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:47.8669,y:68.396}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:49.0447,y:90.2333}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:77.6441,y:98.9879}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:103.725,y:192.725}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:97.4725,y:195.8375}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:91.7694,y:138.4461}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:83.6405,y:126.0398}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:93.0737,y:113.5443}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:63.3887,y:111.372}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:195.325,y:119.85}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:241.17,y:195.9}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:231.1,y:194.925}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:221.675,y:178.1929}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:301.175,y:75.1}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:300.675,y:77.875}},{t:this.shape,p:{scaleX:1,scaleY:1,x:334.025,y:104.95}}]}).to({state:[{t:this.shape_108,p:{scaleX:0.7998,scaleY:0.7998,x:59.8643,y:139.1474}},{t:this.shape_107,p:{scaleX:0.7998,scaleY:0.7998,x:59.8946,y:139.143}},{t:this.shape_106,p:{scaleX:0.7998,scaleY:0.7998,x:171.1881,y:141.4012}},{t:this.shape_105,p:{scaleX:0.7998,scaleY:0.7998,x:174.8636,y:128.6211}},{t:this.shape_104,p:{scaleX:0.7998,scaleY:0.7998,x:171.1681,y:141.3825}},{t:this.shape_103,p:{scaleX:0.7998,scaleY:0.7998,x:47.6488,y:166.6573}},{t:this.shape_102,p:{scaleX:0.7998,scaleY:0.7998,x:45.2722,y:175.7954}},{t:this.shape_101,p:{scaleX:0.7998,scaleY:0.7998,x:51.8732,y:173.3359}},{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:63.9061,y:106.6896}},{t:this.shape_99,p:{scaleX:0.7998,scaleY:0.7998,x:62.9456,y:90.353}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:63.9224,y:106.8696}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:173.6957,y:177.0651}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:168.5305,y:178.4948}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:278.3558,y:53.0993}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:277.4132,y:53.8009}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:278.3475,y:53.1407}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:277.5214,y:55.3016}},{t:this.shape_91,p:{scaleX:0.7998,scaleY:0.7998,x:277.5414,y:55.2002}},{t:this.shape_90,p:{scaleX:0.7998,scaleY:0.7998,x:283.5002,y:48.0017}},{t:this.shape_89,p:{scaleX:0.7998,scaleY:0.7998,x:183.4667,y:70.9632}},{t:this.shape_88,p:{scaleX:0.7998,scaleY:0.7998,x:183.4443,y:67.606}},{t:this.shape_87,p:{scaleX:0.7998,scaleY:0.7998,x:208.058,y:35.154}},{t:this.shape_86,p:{scaleX:0.7998,scaleY:0.7998,x:183.4789,y:70.6433}},{t:this.shape_85,p:{scaleX:0.7999,scaleY:0.7999,x:197.0364,y:74.5669}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:133.016,y:44.1766}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:91.4131,y:52.0642}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:73.6994,y:59.5581}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:199.6651,y:132.0732}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:197.4403,y:127.3545}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:204.3365,y:126.4456}},{t:this.shape_78,p:{scaleX:0.7998,scaleY:0.7998,x:199.662,y:132.2044}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:284.6927,y:99.6364}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:284.9926,y:98.8467}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:284.6751,y:99.0547}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:91.1752,y:123.7293}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:89.9015,y:119.6874}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:105.4769,y:155.6462}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:96.0798,y:77.1061}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:91.1544,y:123.9661}},{t:this.shape_69,p:{scaleX:0.7998,scaleY:0.7998,x:272.2146,y:80.5518}},{t:this.shape_68,p:{scaleX:0.7997,scaleY:0.7997,x:272.7545,y:80.5856}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:272.2112,y:80.555}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:277.1815,y:109.609}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:299.5399,y:106.1553}},{t:this.shape_64,p:{scaleX:0.7998,scaleY:0.7998,x:299.9019,y:105.2854}},{t:this.shape_63,p:{scaleX:0.7998,scaleY:0.7998,x:299.5514,y:106.1498}},{t:this.shape_62,p:{scaleX:0.7998,scaleY:0.7998,x:271.7871,y:80.0981}},{t:this.shape_61,p:{scaleX:0.7998,scaleY:0.7998,x:272.9563,y:80.0951}},{t:this.shape_60,p:{scaleX:0.7998,scaleY:0.7998,x:257.5843,y:49.3293}},{t:this.shape_59,p:{scaleX:0.7998,scaleY:0.7998,x:256.8781,y:50.1145}},{t:this.shape_58,p:{scaleX:0.7998,scaleY:0.7998,x:257.5972,y:47.6626}},{t:this.shape_57,p:{scaleX:0.7998,scaleY:0.7998,x:259.0065,y:49.5414}},{t:this.shape_56,p:{scaleX:0.7998,scaleY:0.7998,x:262.8644,y:57.4198}},{t:this.shape_55,p:{scaleX:0.7998,scaleY:0.7998,x:257.8223,y:53.0798}},{t:this.shape_54,p:{scaleX:0.7998,scaleY:0.7998,x:259.0217,y:49.3614}},{t:this.shape_53,p:{scaleX:0.7998,scaleY:0.7998,x:267.6834,y:33.9246}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:236.5299,y:95.452}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:226.7511,y:47.1901}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:235.4139,y:57.6302}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:221.2871,y:61.195}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:204.956,y:52.1993}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:212.3673,y:37.7196}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:192.6802,y:35.641}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:219.0255,y:75.9614}},{t:this.shape_44,p:{scaleX:0.7998,scaleY:0.7998,x:204.1211,y:71.5248}},{t:this.shape_43,p:{scaleX:0.7998,scaleY:0.7998,x:196.9171,y:86.5132}},{t:this.shape_42,p:{scaleX:0.7998,scaleY:0.7998,x:178.5052,y:94.8714}},{t:this.shape_41,p:{scaleX:0.7998,scaleY:0.7998,x:185.3248,y:72.3371}},{t:this.shape_40,p:{scaleX:0.7998,scaleY:0.7998,x:170.5351,y:73.724}},{t:this.shape_39,p:{scaleX:0.7998,scaleY:0.7998,x:170.9697,y:62.0359}},{t:this.shape_38,p:{scaleX:0.7998,scaleY:0.7998,x:185.5118,y:56.7799}},{t:this.shape_37,p:{scaleX:0.7998,scaleY:0.7998,x:169.8877,y:51.3028}},{t:this.shape_36,p:{scaleX:0.7998,scaleY:0.7998,x:172.3356,y:35.1071}},{t:this.shape_35,p:{scaleX:0.7998,scaleY:0.7998,x:155.107,y:88.3561}},{t:this.shape_34,p:{scaleX:0.7998,scaleY:0.7998,x:151.88,y:60.5242}},{t:this.shape_33,p:{scaleX:0.7998,scaleY:0.7998,x:150.1914,y:48.7346}},{t:this.shape_32,p:{scaleX:0.7998,scaleY:0.7998,x:132.5758,y:55.7665}},{t:this.shape_31,p:{scaleX:0.7998,scaleY:0.7998,x:151.4796,y:70.7513}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:140.1266,y:70.0573}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:124.8687,y:69.685}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:118.6228,y:56.6187}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:109.3454,y:54.4342}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:131.687,y:84.7134}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:144.2333,y:82.4835}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:149.168,y:101.6847}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:140.8014,y:96.3287}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:126.0781,y:101.9291}},{t:this.shape_21,p:{scaleX:0.7998,scaleY:0.7998,x:116.0675,y:92.4572}},{t:this.shape_20,p:{scaleX:0.7998,scaleY:0.7998,x:117.6161,y:80.7786}},{t:this.shape_19,p:{scaleX:0.7998,scaleY:0.7998,x:107.3635,y:72.0986}},{t:this.shape_18,p:{scaleX:0.7998,scaleY:0.7998,x:98.045,y:63.2346}},{t:this.shape_17,p:{scaleX:0.7998,scaleY:0.7998,x:84.3528,y:66.2285}},{t:this.shape_16,p:{scaleX:0.7998,scaleY:0.7998,x:88.9488,y:81.2524}},{t:this.shape_15,p:{scaleX:0.7998,scaleY:0.7998,x:72.0173,y:74.893}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:72.9593,y:92.3592}},{t:this.shape_13,p:{scaleX:0.7998,scaleY:0.7998,x:95.8341,y:99.3614}},{t:this.shape_12,p:{scaleX:0.7998,scaleY:0.7998,x:116.6946,y:174.3357}},{t:this.shape_11,p:{scaleX:0.7998,scaleY:0.7998,x:111.6936,y:176.8252}},{t:this.shape_10,p:{scaleX:0.7998,scaleY:0.7998,x:107.0239,y:130.882}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:100.6302,y:120.9985}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:108.1752,y:111.0042}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:84.4321,y:109.2667}},{t:this.shape_6,p:{scaleX:0.7998,scaleY:0.7998,x:189.9595,y:116.0477}},{t:this.shape_5,p:{scaleX:0.7998,scaleY:0.7998,x:226.6279,y:176.8752}},{t:this.shape_4,p:{scaleX:0.7998,scaleY:0.7998,x:218.5736,y:176.0953}},{t:this.shape_3,p:{scaleX:0.7998,scaleY:0.7998,x:211.0351,y:162.7124}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:274.7461,y:80.2898}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:274.3461,y:82.5095}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:301.0232,y:104.1671}}]},1).to({state:[{t:this.shape_108,p:{scaleX:0.7998,scaleY:0.7998,x:59.8643,y:139.1474}},{t:this.shape_107,p:{scaleX:0.7998,scaleY:0.7998,x:59.8946,y:139.143}},{t:this.shape_106,p:{scaleX:0.7998,scaleY:0.7998,x:171.1881,y:141.4012}},{t:this.shape_105,p:{scaleX:0.7998,scaleY:0.7998,x:174.8636,y:128.6211}},{t:this.shape_104,p:{scaleX:0.7998,scaleY:0.7998,x:171.1681,y:141.3825}},{t:this.shape_103,p:{scaleX:0.7998,scaleY:0.7998,x:47.6488,y:166.6573}},{t:this.shape_102,p:{scaleX:0.7998,scaleY:0.7998,x:45.2722,y:175.7954}},{t:this.shape_101,p:{scaleX:0.7998,scaleY:0.7998,x:51.8732,y:173.3359}},{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:63.9061,y:106.6896}},{t:this.shape_99,p:{scaleX:0.7998,scaleY:0.7998,x:62.9456,y:90.353}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:63.9224,y:106.8696}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:173.6957,y:177.0651}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:168.5305,y:178.4948}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:278.3558,y:53.0993}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:277.4132,y:53.8009}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:278.3475,y:53.1407}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:277.5214,y:55.3016}},{t:this.shape_91,p:{scaleX:0.7998,scaleY:0.7998,x:277.5414,y:55.2002}},{t:this.shape_90,p:{scaleX:0.7998,scaleY:0.7998,x:283.5002,y:48.0017}},{t:this.shape_89,p:{scaleX:0.7998,scaleY:0.7998,x:183.4667,y:70.9632}},{t:this.shape_88,p:{scaleX:0.7998,scaleY:0.7998,x:183.4443,y:67.606}},{t:this.shape_87,p:{scaleX:0.7998,scaleY:0.7998,x:208.058,y:35.154}},{t:this.shape_86,p:{scaleX:0.7998,scaleY:0.7998,x:183.4789,y:70.6433}},{t:this.shape_85,p:{scaleX:0.7999,scaleY:0.7999,x:197.0364,y:74.5669}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:133.016,y:44.1766}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:91.4131,y:52.0642}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:73.6994,y:59.5581}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:199.6651,y:132.0732}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:197.4403,y:127.3545}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:204.3365,y:126.4456}},{t:this.shape_78,p:{scaleX:0.7998,scaleY:0.7998,x:199.662,y:132.2044}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:284.6927,y:99.6364}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:284.9926,y:98.8467}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:284.6751,y:99.0547}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:91.1752,y:123.7293}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:89.9015,y:119.6874}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:105.4769,y:155.6462}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:96.0798,y:77.1061}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:91.1544,y:123.9661}},{t:this.shape_69,p:{scaleX:0.7998,scaleY:0.7998,x:272.2146,y:80.5518}},{t:this.shape_68,p:{scaleX:0.7997,scaleY:0.7997,x:272.7545,y:80.5856}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:272.2112,y:80.555}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:277.1815,y:109.609}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:299.5399,y:106.1553}},{t:this.shape_64,p:{scaleX:0.7998,scaleY:0.7998,x:299.9019,y:105.2854}},{t:this.shape_63,p:{scaleX:0.7998,scaleY:0.7998,x:299.5514,y:106.1498}},{t:this.shape_62,p:{scaleX:0.7998,scaleY:0.7998,x:271.7871,y:80.0981}},{t:this.shape_61,p:{scaleX:0.7998,scaleY:0.7998,x:272.9563,y:80.0951}},{t:this.shape_60,p:{scaleX:0.7998,scaleY:0.7998,x:257.5843,y:49.3293}},{t:this.shape_59,p:{scaleX:0.7998,scaleY:0.7998,x:256.8781,y:50.1145}},{t:this.shape_58,p:{scaleX:0.7998,scaleY:0.7998,x:257.5972,y:47.6626}},{t:this.shape_57,p:{scaleX:0.7998,scaleY:0.7998,x:259.0065,y:49.5414}},{t:this.shape_56,p:{scaleX:0.7998,scaleY:0.7998,x:262.8644,y:57.4198}},{t:this.shape_55,p:{scaleX:0.7998,scaleY:0.7998,x:257.8223,y:53.0798}},{t:this.shape_54,p:{scaleX:0.7998,scaleY:0.7998,x:259.0217,y:49.3614}},{t:this.shape_53,p:{scaleX:0.7998,scaleY:0.7998,x:267.6834,y:33.9246}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:236.5299,y:95.452}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:226.7511,y:47.1901}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:235.4139,y:57.6302}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:221.2871,y:61.195}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:204.956,y:52.1993}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:212.3673,y:37.7196}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:192.6802,y:35.641}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:219.0255,y:75.9614}},{t:this.shape_44,p:{scaleX:0.7998,scaleY:0.7998,x:204.1211,y:71.5248}},{t:this.shape_43,p:{scaleX:0.7998,scaleY:0.7998,x:196.9171,y:86.5132}},{t:this.shape_42,p:{scaleX:0.7998,scaleY:0.7998,x:178.5052,y:94.8714}},{t:this.shape_41,p:{scaleX:0.7998,scaleY:0.7998,x:185.3248,y:72.3371}},{t:this.shape_40,p:{scaleX:0.7998,scaleY:0.7998,x:170.5351,y:73.724}},{t:this.shape_39,p:{scaleX:0.7998,scaleY:0.7998,x:170.9697,y:62.0359}},{t:this.shape_38,p:{scaleX:0.7998,scaleY:0.7998,x:185.5118,y:56.7799}},{t:this.shape_37,p:{scaleX:0.7998,scaleY:0.7998,x:169.8877,y:51.3028}},{t:this.shape_36,p:{scaleX:0.7998,scaleY:0.7998,x:172.3356,y:35.1071}},{t:this.shape_35,p:{scaleX:0.7998,scaleY:0.7998,x:155.107,y:88.3561}},{t:this.shape_34,p:{scaleX:0.7998,scaleY:0.7998,x:151.88,y:60.5242}},{t:this.shape_33,p:{scaleX:0.7998,scaleY:0.7998,x:150.1914,y:48.7346}},{t:this.shape_32,p:{scaleX:0.7998,scaleY:0.7998,x:132.5758,y:55.7665}},{t:this.shape_31,p:{scaleX:0.7998,scaleY:0.7998,x:151.4796,y:70.7513}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:140.1266,y:70.0573}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:124.8687,y:69.685}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:118.6228,y:56.6187}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:109.3454,y:54.4342}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:131.687,y:84.7134}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:144.2333,y:82.4835}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:149.168,y:101.6847}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:140.8014,y:96.3287}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:126.0781,y:101.9291}},{t:this.shape_21,p:{scaleX:0.7998,scaleY:0.7998,x:116.0675,y:92.4572}},{t:this.shape_20,p:{scaleX:0.7998,scaleY:0.7998,x:117.6161,y:80.7786}},{t:this.shape_19,p:{scaleX:0.7998,scaleY:0.7998,x:107.3635,y:72.0986}},{t:this.shape_18,p:{scaleX:0.7998,scaleY:0.7998,x:98.045,y:63.2346}},{t:this.shape_17,p:{scaleX:0.7998,scaleY:0.7998,x:84.3528,y:66.2285}},{t:this.shape_16,p:{scaleX:0.7998,scaleY:0.7998,x:88.9488,y:81.2524}},{t:this.shape_15,p:{scaleX:0.7998,scaleY:0.7998,x:72.0173,y:74.893}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:72.9593,y:92.3592}},{t:this.shape_13,p:{scaleX:0.7998,scaleY:0.7998,x:95.8341,y:99.3614}},{t:this.shape_12,p:{scaleX:0.7998,scaleY:0.7998,x:116.6946,y:174.3357}},{t:this.shape_11,p:{scaleX:0.7998,scaleY:0.7998,x:111.6936,y:176.8252}},{t:this.shape_10,p:{scaleX:0.7998,scaleY:0.7998,x:107.0239,y:130.882}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:100.6302,y:120.9985}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:108.1752,y:111.0042}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:84.4321,y:109.2667}},{t:this.shape_6,p:{scaleX:0.7998,scaleY:0.7998,x:189.9595,y:116.0477}},{t:this.shape_5,p:{scaleX:0.7998,scaleY:0.7998,x:226.6279,y:176.8752}},{t:this.shape_4,p:{scaleX:0.7998,scaleY:0.7998,x:218.5736,y:176.0953}},{t:this.shape_3,p:{scaleX:0.7998,scaleY:0.7998,x:211.0351,y:162.7124}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:274.7461,y:80.2898}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:274.3461,y:82.5095}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:301.0232,y:104.1671}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,339.5,202.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Asset2();
	this.instance.setTransform(0,49,3.7157,3.7157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,49,338.2,308.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_101 = function() {
		/* stop();
		_root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(101).call(this.frame_101).wait(3));

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


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("AkPG0QgCgUBWgOQBxgUAxgZQBbgwAnhiQAPglABgjQACgggKgNQhVhsgPi0QgPi7BOhjQgjBYAEBnQADBfAkBhQASAwAkApQAWAZA1AtQBIA9gIBFQgIBChLA1QglAag0AWQglAPg7ATQgcAJhhASQhOAOgsAWQgVAJgSAQg");
	this.shape.setTransform(27.7653,48.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,55.6,96.2), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("A0+L+QgsgEgjhUQgNgegFgbQgEgaAGAAQApAAARgUQAOgRgCglQgCgiAIgVQAJBKAVAjQAcAvAsglQA1gsANiFQAGiVAEgwQAOiVCag9QAugRBggXQBlgYAqgPQCbg6BhhpQBrh1AOiaQAKhmgKg/IgGghQgDgUgBgNQgBgNA1AkQAbARAYASQBkBYBpA+QCzBoDuA+QCPAlBvAMQCBAOCDgNQDWgVCTh3QCOhyBCjAIAAAGQgBCVg1CqQg7C9hPAvQgyAXg+AXQh6AsgxgCQj3gMioggQi0gji5hLQg7gYhmg3QhVguhFgqQhngWhDBuIg0BfQgfA4gdAYQh1BfjNA5Qg0APhXASQhDAOgOAHIg5AXQgiAOgVAOQg5AngRBRQgIAmgEBQIgFCNQgICqgrAUQgbANgiA6QgaArgqAAIgGAAg");
	this.shape.setTransform(144.1079,76.6124);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,288.3,153.2), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("AiVAxQA5hSABg/QABgagDg2QgJhZBZAEQAcATAXAXQBkBdAwAqQBTBJBFAyQh7g8h0hHQhmgXhDBvQgTAdghBBQgfA3geAYQg+A0hdApQBghQBdiFg");
	this.shape.setTransform(33.85,26.2392);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0.1,67.7,52.4), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("Ag0EcQgsgDgihUQgNgfgFgaQgFgaAHAAQAgAAAQgMQALA9AmAFQA3AIAmgqQAfgiAPg9QAJgiAMh7QAJhhAcg9IADgHIgBAFQgIAngDBPIgFCNQgICqgrAUQgbAMgjA7QgYAqgqAAIgHAAg");
	this.shape.setTransform(15.083,28.4374);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,30.2,56.9), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996047").s().p("AkED0QhxglhWgsQhYgtgYgiQg9hXgyhyQhGihA6gVQA1gZCAAqIBmAlQA7AVAeAGQAzAKCtACQCNABBKAhQBuAyBaAAQBfAABig3QBmg6A4ANQAcAGAIARQA1AhhxBJQiIBMgcARQgZARgtAyIhUBgQhxB+g8AMQglAIgtAAQiCAAjJhBg");
	this.shape.setTransform(72.0588,30.9761);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0.1,144.2,61.8), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B5C3A").s().p("AgiCkQg7gFhigcIidgwQhJgWg6g/QhDhKAHhOQAtgVBSAcQAuAQBTAmQAvASBXAHQBkAHAnALQCQAnDpAFQBlADAZADQAwAEAAARQgBAdheAxQhcAwg9AGQggADg4gNQg6gNggACQgTACg1ARQgoANgbAAIgKAAg");
	this.shape.setTransform(54.0711,16.4259);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,108.2,32.9), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("AFALKQgIgNAJgfQAIgfgMgTQgJgOgWgUIgigfQgxgzg0h7Qg0h8gsgvQgwgqgSgSQgggegMgtQgMgtggg2QgTgigthAQgmg2hohrQhlhogng5Qg3hTAChTQACgtAOg5IADgPQAVBaA7BiIB1CwQCCDFBNBnIBPBqQA4BBAxAJQAOADAmB0IAvCRQAQAkA8BXQA0BLAOA2QACAHAHAEQAHAEAIgCQAygKAfgiQAfAUAFAHQAPARgPAVQgIALggAJQgpAMgFACQgcARgQAGQgKAEgIAAQgPAAgIgOg");
	this.shape.setTransform(49.8635,72.8028);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,99.8,145.6), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("Ai3C7QAahlAEgVIAXiEQALhKAAg/QBIgNBQgYQBogfBDglQgdAigxAbQgVALhEAdQhsAugSA8QgIAXgmC6QgcCGgpBFQADgvAShMg");
	this.shape.setTransform(20.45,30.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,40.9,62), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3931").s().p("AgGCwQAVgygPhCQgIglgZgpIgvhNQg7hkgChiQABAAA2BEQA9BMAZAZQAGAGBCA0QAqAhAQAhQAoBbhfBiQhWBbhkAOQBRg+AYg4g");
	this.shape.setTransform(14.1676,29.3998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,28.4,58.8), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEAE8").s().p("AAGAGIgPgFQgFgBAAgBIAAAAQAKgGAJgBQAIAAACAJIAAAHIgCABQgDAAgEgDg");
	this.shape.setTransform(1.4979,0.8693);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,3,1.8), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEAE8").s().p("AAFgCQAFAAACACQABACgNAAIgMABQAJgEAIgBg");
	this.shape.setTransform(1.251,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,2.5,0.6), null);


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
	this.instance.setTransform(82.8,82.8,1,1,0,0,0,82.8,82.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.7,165.7);


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B5C3A").s().p("AAWBIIgEgCQAFgYgFgSQgEgQgPgTIgWgeQgLgTABgQQAHAKAaAWQAVATAIAPQAGANgBAkQgCAegGAAIgEgBg");
	this.shape.setTransform(359.7801,22.2371);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D3931").s().p("ABLCCIgYgdQgPgTgMgKIgegYQgTgOgIgNQgKgQgHgWQgGgagEgOQgDgJgPgeQgMgYgCgRQAmgLAnArQAaAeAVAtIAsBaQAfBHgZAJg");
	this.shape_1.setTransform(350.8131,16.463);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81523D").s().p("AAtBrIgMguQgbg9gJgUQgXgnglgkQgHgIgWgNQgUgNgHgJQAjgSAnAnQAXAWAdAuQAJAMA3AoQArAgAGAgIAAAeQgJAhgvAOQgMgHgHgeg");
	this.shape_2.setTransform(353.5,16.555);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BD7C44").s().p("AAVCrQgIAAgBgNQgMifgjidQgBgFACgEQADgFAFgBQAFgBAEADQAEACABAFQAjCfANChQACASgIAAg");
	this.shape_3.setTransform(408.8226,57.9357);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD7C44").s().p("ADXEKQgJgGgCgCQgQgVhCguQgngbhgg+QiIhXgpgfQgtgkAFgTQADgOAhgaQAagUBJgyQBphHAHgNQACgEAFgCQAFgBAEACQAEADACAEQABAFgCAEQgGAMgfAYQgXARg7AoQh5BRgFAPQAFATDKCAQBiA/ApAdQBDAuARAXQAMAQgEAHIgBAEQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgCAAgKgHg");
	this.shape_4.setTransform(384.8411,49.3969);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD7C44").s().p("Ah3CSQgIgOAhhBQAfg9ATgRIAugvQBChDAigYQAEgCAFAAQAFABADAEQADAEgBAFQgBAFgEADQggAXhABBIgwAvQgQAPgbA1QgYAxgCAOQACAKgIAEIgGABQgHAAgDgGg");
	this.shape_5.setTransform(404.9095,67.9958);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD7C44").s().p("AAtDpQgDgEAAgFQAAg1gpilQgmidgbhEQgCgFACgEQACgFAFgBQAEgCAFACQAEACACAEQAdBIAmCeQApCmAAA4QAAAFgEAEQgDADgFAAQgFAAgEgDg");
	this.shape_6.setTransform(361.775,49.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B0B1").s().p("AgiAsQgOgPgGgTQgGgTAFgRQAIgbAdgGQABAAABgBQAAAAABAAQABAAAAAAQABABAAAAQAXgDATAOQAPAMAIATQAIARgDASQgEAeggAKQgJADgHAAQgVAAgSgRgAgYggQgGAEgCAJQgDALAEAMQAEANAKAJQAOAPARgGQARgFADgQQACgLgGgMQgFgMgKgIQgKgHgLAAQgIAAgKAEg");
	this.shape_7.setTransform(410.9023,78.4243);

	this.instance = new lib.Group_3();
	this.instance.setTransform(107.6,156,1,1,0,0,0,14.2,29.4);
	this.instance.alpha = 0.5195;

	this.instance_1 = new lib.Group_4();
	this.instance_1.setTransform(93.35,126);
	this.instance_1.alpha = 0.5195;

	this.instance_2 = new lib.Group_5();
	this.instance_2.setTransform(74.65,216.2,1,1,0,0,0,20.4,30.9);
	this.instance_2.alpha = 0.4102;

	this.instance_3 = new lib.Group_6();
	this.instance_3.setTransform(322,223.15,1,1,0,0,0,49.9,72.8);
	this.instance_3.alpha = 0.3711;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9B5C3A").s().p("ADCG7QgKgLgYgcQgxg4gRgpQgbhDgwiAQgxiEgYg9QgMgdgYguQgVhBgPgmQgjhYhLh9QA+BIBGA6QAgAjAQAYQAXAoARA1QAMAkANA8QAcB8ATBAQAcBeApBbQAFALAtA3QAkAvAaBRQgRgEgagag");
	this.shape_8.setTransform(316.075,185.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81523D").s().p("AFAL7QgIgOAJgfQAIgegMgTQgJgPgWgTIgigfQgxgzg0h7Qg0h9gsgvQgwgqgSgSQgggdgMguQgMgtggg3QgTgggthAQgmg3hohqQhlhogng6Qg3hSAChUQABgaAHghQAIgkAAgHQADgeAbgbQAagaAngPQBcgiA8A1QAKAMA1A2QAnAoASAdQAXAoARA1QAMAjAOA9QAcB9ATBAQAbBeApBbQAJASAPATIAeAiQAnA0AcBkQAXBWA/B7QAQAgAnA2QAqA5APAcIAZAuQAOAXAUAQQANAKAeAUQAVATgRAXQgIALggAKQgpALgFADQgcARgQAGQgKADgIAAQgPAAgIgNg");
	this.shape_9.setTransform(321.9673,218.3227);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9B5C3A").s().p("AgFCeQAJhagHhaQgDgqgihvQgfhlgKgTQAlgcAvBWQAtBTAWB6QAYCEgYBZQgcBqhYAHQAegrALhlg");
	this.shape_10.setTransform(309.075,128.4561);

	this.instance_4 = new lib.Group_10();
	this.instance_4.setTransform(208.65,104.9,1,1,0,0,0,54.1,16.4);
	this.instance_4.alpha = 0.75;

	this.instance_5 = new lib.Group_11();
	this.instance_5.setTransform(220.65,112.6,1,1,0,0,0,72,30.9);
	this.instance_5.alpha = 0.3398;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9B5C3A").s().p("ABDCDQg1hYhChBQihifCShpQBLg3AqBaQAXAyAYBsQAXBGAJBaQAJBXAACaQgNhQg6hhg");
	this.shape_11.setTransform(135.3965,120.3855);

	this.instance_6 = new lib.Group_13();
	this.instance_6.setTransform(55.9,250.6,1,1,0,0,0,15.1,28.4);
	this.instance_6.alpha = 0.3906;

	this.instance_7 = new lib.Group_14();
	this.instance_7.setTransform(162.1,168.1,1,1,0,0,0,33.9,26.3);
	this.instance_7.alpha = 0.3906;

	this.instance_8 = new lib.Group_15();
	this.instance_8.setTransform(184.9,202.45,1,1,0,0,0,144.1,76.6);
	this.instance_8.alpha = 0.3906;

	this.instance_9 = new lib.Group_16();
	this.instance_9.setTransform(88.8,149.3,1,1,0,0,0,27.8,48.1);
	this.instance_9.alpha = 0.3594;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81523D").s().p("A0+P+QgsgEgjhUQgNgegFgbQgEgaAGAAQApAAARgUQAOgRgCglQgDgxAXgiQAfguALgxQAZh1AaiqQAWiSgBgGQgCgUBWgOQBxgUAygZQBcgwAmhhQAPglACgjQACgggLgNQhch2gJjBQgLjKBjhXQDbjACZgkQCUgjEJBJQB/AjDbAgQDJAdCXAIQBeAFBegwQBpg2BigGQC1BHAIAFQBvA+BABlQBBBpgBB7QgBCVg1CqQg7C8hPAvQgyAXg+AXQh6AsgxgCQj3gMioggQi0gji5hKQg7gYhmg3QhVguhFgqQhngWhDBuIg0BeQgfA4gdAYQh1BfjNA5QjAAqgcANIg5AXQgiAOgVAOQg5AngRBRQgIAmgEBQIgFCNQgICqgrAUQgbANgiA6QgaArgqAAIgGAAg");
	this.shape_12.setTransform(184.9081,176.8952);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#806F63").s().p("AggAfQgEgBgEgGIgGgKIAtgTQAagMAPgNQAEACACAEQACAFgDAEQgHARgtAUIgMAGQgHADgFAAIgBAAg");
	this.shape_13.setTransform(39.4694,282.0281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B4337").s().p("AAhAeQgWgfgXgCQghgCgmAbQAEgsAQghQAIgSAYgLQATgFANADIAQADIAOAWQA0BKABAtQgKASgIAMQgcgzgFgHg");
	this.shape_14.setTransform(40.4,272.0304);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F4D42").s().p("Ag2BvQAxgNAkgbQAOgKADgQQADgSgOgKQgNgKgXADQgNACgYAHQgcAKgSAJQgEghAGgiQAFghAMgcQAIgRAYgMQATgEAOACIAPAEIAOAWQA0BLABArQgTAngaAUIg8AgQgOAIgEAAQgGAAgJgLg");
	this.shape_15.setTransform(40.3569,275.4554);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6D5749").s().p("Ag2BvQgeglAAg+QAAg3AWgvQAHgRAYgMQATgEAOACIAQAEIANAWQA1BLAAArQgTAngaAUIg8AgQgPAIgDAAQgGAAgJgLg");
	this.shape_16.setTransform(40.35,275.4554);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3B3330").s().p("AmPEoQBagrAwgfQBGguAxg6QAogxBOg4ICAhbQhWA4hgAqQhAAcggAKQg9ARgmgKQAUgIAjgIIA5gOQCXgsB2hqQANgMAugtQAkglAagUQBOg9BdgGQACAjgnAOQhUAegGADQgqAYg5A6IhbBeQgpAlhJA8QhVBGgfAbQhFA8gtAdQgjAXggANQgkAQgYAAIgLgBg");
	this.shape_17.setTransform(63.4798,124.2332);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3B3330").s().p("AhLBuQAUgRASgbIAfgzQAYgnAxg6IAvgzQAdghAMgWIAJAQQgEALgDAZQgDAagFAJQgFANgQAJIgeAQQgVAPgWAXQgXAYgNAUIgdA0QgRAdgUAQQgVASgjAVIg8AjQAbgeA9gyg");
	this.shape_18.setTransform(88.05,113.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D3E36").s().p("Ak4FkQAbhBB7jDQBNh5BqiOQB6igBuh0QgfgBhaBYQh2B4hDBBQh5B0hUAxQhvA/hGglQB6AJCOhuQBehLBsiGQBdh0AmgrQBdhqA2gfQAigUArgNQArgNAOgIQAIA0g1BLQg/BagJApQgMA3gPBeIgYCXQgQBVgPA2QgUBFgiA/QgyBPgZAqQgsBMgBA2QgHhGA3h2QBFiDAXg8QAehRAQh5QAOiHAMhFQhBBGg2CNIgqB2QgZBEgVAsQgeA+hSCOQhBCAAPBXQgYgwACgsQAEg7AyhUQA9hnBMiwQBZjKAKhbQhJAliLDRQhiCQhNCMQhLCKgVA3QgtB3AXBbQgzh9BDigg");
	this.shape_19.setTransform(57.5215,161.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3B3330").s().p("Ak3FFQBIg9CIhrQiKBag4AcQh9A9hZgOQC3g0CKhrQBlhOCSisQAVgYBFhkQA4hQAogkQApglBMhIQBGg6BMgVQAUA0grBkIgqBbQgaA6gOAtQg4C1guBhQhKCahkBNQBLiCAlhKQBBiFADiAQg7CainCuQg+BAjLC0QAHggAzg3QAMgOBchaQCRiNgDhJQhDBeinCkQi7C1hUAhQAcgjBghiQBlhoAYgcQglAhiOBjQiIBggqAnQA1hQCDhvg");
	this.shape_20.setTransform(51.2425,147.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3B3330").s().p("AkIIdQAZg7gBhOQgHhnAFguQAGhQAsg7QBiiABChsQBTiGAwh6QAUg0AWgkQAYgrAhgjQAtguAQgMQAFgFAfgRQAcgOAAgDIAcAXQgFATgRAuQgRAqgFAZQgOBLAMBYQALBcgEBKQgFBYgbBKQgQAsggApIg0A4QAfglAZg6QAZg5AOhFQAMg3gIhSQgLh8AAgLQgKAkgeCTQgWByggBCQg9CGgGAWQgYBYAwBFQAaAmAeAXQiKgUArjQQANhCAlhiQAkhfAJgcQAJgfADhEQAChDALgfQhlCNg1BnQhICLgVCEQgQBgAbBPQAdBTBKA2Qg/gLglhOQgeg/gEhJQgDg/AMhAQAJg3AWhFQAIgYAuhqQAjhPAGg4QgrBggeA3QgsBRgyA7QhHBNgdApQgvBGAGBKQADAhAIBBQAEA4gRAqQgRAtghAfQghAhgtAQQA8geAehFg");
	this.shape_21.setTransform(61.4,177.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D3931").s().p("AiTGqIgggbQgTgPgQgHQgKgEgrgLQgjgIgNgLQgbgWAKgMIAjgWQAWgOAog6QAgglANA2QADAKACAUQACANADAFQgPAVAHAVQAHAbAfALQATAHAlABQAhABA0gLIBTgSIBdgNQA+gPAPggQAfhFgwhiQgqhVhDgyQg7gug3gLQgvhLgRg6QgqgugUhFQgXhQArgTQAzgXBAASQAsAMAuAlQAmAfAhArQA8BMAjBxQAbBWAPB1QAEAhARBRQALBKgTAnQgTAmhBABQhMgGgeAEQhOAMh4A7IgqAVIgGAAQgOAAgVgOg");
	this.shape_22.setTransform(280.848,205.9918);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#613F31").s().p("AiTGqIgggbQgTgPgQgHQgKgEgrgLQgjgIgNgLQgbgWAKgMIAjgWQAWgOAog6QAgglANA2QAGAYAEAYQAHAMAnABQAsAAA6gOQAegIBCgVQA9gRAoADQAVg9ghg1Qgxg8gbgmQhDhfgLgSQgrhEgQg3QgqgugUhFQgXhQArgTQAzgXBAASQAsAMAuAlQAmAfAhArQA8BMAjBxQAbBWAPB1QAEAhARBRQALBKgTAnQgTAmhBABQhMgGgeAEQhOAMh4A7IgqAVIgGAAQgOAAgVgOg");
	this.shape_23.setTransform(280.848,205.9918);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D3931").s().p("ACgKkQgYgJgGgWQgEgdgHgQQgHgSgQgRIgeggQgpgshYhyQhRhng0gzIgmgeQgZgTgHgQQgHgPAEgiQAHgmABgPQAFgygHg9QgDgcgNhSQgHgsgUg1QgXg8gMghQgSg1AThBQAQg3AngzQAxhABGgZQBMgaBBAkQAfASAgAkQASAUAiArIgJgJQgXAcgXA8QhOgUg3AlQg4AmgZBZQgOAygFBCQgDAtAABIQAAAfgDBIQgBBBAHAlQAFAfAXAZQAKALAnAfQAmAeAlA/IA8BoIBHBvQAxBEApAWQApAWAmgWQAhgUASgqQAcAgARAfQgsAhgsASQgmAQgeAAQgSAAgQgGg");
	this.shape_24.setTransform(176.6562,214.9525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#613F31").s().p("ACgKkQgYgJgGgWQgEgdgHgQQgHgSgQgRIgeggQgpgshYhyQhRhng0gzIgmgeQgZgTgHgQQgHgPAEgiQAHgmABgPQAFgygHg9QgDgcgNhSQgHgsgUg1QgXg8gMghQgSg1AThBQAQg3AngzQAxhABGgZQBMgaBBAkQAfASAgAkQASAUAiArIgJgJQgZAggVA6QgNAigTA+QgcBZAAB8QAAA8gJCiQAACSAvA9QAqA2CFBuQB1BhAtBOQgsAhgsASQgmAQgeAAQgSAAgQgGg");
	this.shape_25.setTransform(176.6562,214.9525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5F473A").s().p("AgdBEQgbgFgLgTQgFgIgGgYQgIgZACgHQACgJAQgCQAWgCADgCQAmgTASgEIAZgIQASgFAHADQAKgCAKAJQgQANgLADQgTAEgOALQgKAIgGANQgGALABANQABAdAOAaIgLAAQgaAAgLgCg");
	this.shape_26.setTransform(202.7625,284.1229);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#645349").s().p("AgzBFQgegFgLgUQgFgIgGgYQgIgZACgHQACgJAQgCQAWgCADgCQAmgTATgEIAYgIQASgFAHADIAFAAIADAAIABABIADABIABABIAEACIADACIABABIADACIABABIADADIAAABQAMAMAKATQAIAOAGASQAGASAAAKIgCACQgMg6glgYIgFgDQgcAMgIAdIgBAGQABAPAGAXIANAbIgFAAIAAABIgPABIgRABQgqAAgJgBg");
	this.shape_27.setTransform(205.2625,284.1188);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#735F53").s().p("AgzBFQgegFgLgUQgFgIgGgYQgIgZACgHQACgJAQgCQAWgCADgCQAmgTATgEIAYgIQASgFAHADQANgDARATQALANAJARQAIAOAGASQAGASAAAKQgrAfhDABQgqAAgJgBg");
	this.shape_28.setTransform(205.2625,284.1188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3A3331").s().p("AC6BtIgzgKQgngIgyAIIgMAAIhJgLQgpgKgZgZQgRgRgLgdQgMgfAFgXQgugZgygBQAmgXBCAgQAGgJAJgFIgHASQAVALAXAQQAQAMAhAiQAeAgAUAMQANAAAKACQgDgNgTgaQgSgYgCgOQgHgZAGgaQAHggAXgIQgOAkAAAYQgBAdAQAgQAKAXAeAZQgNgSgFgLQgHgRADgQQADgUANgOQAOgRASADQghAJAIApQAGAjAXAWQASASAqAGQArAGARgOQAKAEAFALQAEALgGAEQgFAHgVAAIgVgBgAgMA4QgRgJgRgQIgdgeQgVgXgggTQgDAdAPAWQAPAXAgANQAUAIAlACIAAAAg");
	this.shape_29.setTransform(362.005,12.0925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D3E36").s().p("AgYBgQgpgFgugUQgdgOg0geQgugbgYgVQgmglAFgkIASAgQAKATAQAJQAUAMArAWQAoAYAcAMQAqASAfgDIgXgMQgMgHgJgJIgUgWQgLgLgMgHQgmgUgWgIQgjgLgeAGQAXgZAxALQAoAJAcAYQBYBMA4gKQgQgKgegPIgxgWQgpgWgdgrQBMA2A9AXQATAIAnAEQAjAEAVAKQg0gagVgQQgkgeALgzQAMAzApAeQAIAGBDAgQAJAFASAEQgIgIgHgPQgGgNgDgLIAPAXQAKASAVACQgTgQgHgKIgIgTQgGgMgJgCQAPABAQASIAYAdQAKAJAdAMQAWADAUALQAdAPgPASQgGAHgpgDQgIAAgOgFIgVgGQgXgDhCAGQhGAGgRAJQgOADgOAAQgLAAgKgCg");
	this.shape_30.setTransform(355.5569,13.8016);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#865237").s().p("AgjAXQgDgTAUgNQASgMAUgBQAGgCAFADQAFAEAAAHQgFADgOAEQgNADgGAFIgOAOQgHAFgGAAIgGgBg");
	this.shape_31.setTransform(390.8304,41.4815);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D3931").s().p("AAPAaIgWgEIgNADQgHABgGgDIgHgHQgEgFABgDIABgBQADgPATgKQASgJAQACQAQABAKARQAJAQgNANQgFAEgIAAIgIAAg");
	this.shape_32.setTransform(429.1068,74.574);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9B5C3A").s().p("AjSDdQgkgeAMgLQAVgSBPgvQBSg5A5hZQA3hUAtgyQBGhNA/gTQhFAxh5DpQg3BtgVAeQgxBHhFAfQghgPgfgag");
	this.shape_33.setTransform(328.8656,71.075);

	this.instance_10 = new lib.Group();
	this.instance_10.setTransform(394.75,44.1,1,1,0,0,0,1.3,0.3);
	this.instance_10.alpha = 0.2695;

	this.instance_11 = new lib.Group_1();
	this.instance_11.setTransform(394.75,44.6,1,1,0,0,0,1.5,0.8);
	this.instance_11.alpha = 0.2695;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EDEAE8").s().p("AgIANQAIgNgDgNIgCgGIAEAHQAEAGAMAHQgKADgLAKIgIAGg");
	this.shape_34.setTransform(397.425,45.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3D3331").s().p("AgjADQAEgDAEgHIAGgLQAEgGAHgDQgJAGAAALQAAAKAHAHQAJAJAMAAQAMAAAMgIIADACIgEAEQgRAOgNAAIgCAAQgXAAgMgZg");
	this.shape_35.setTransform(393.5,45.904);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#443631").s().p("AgsAGQAEgDAEgHIAGgLQALgMAPgDQgKAHABAJQABAIAHAGQAGAEAKAAQAPgBAFgJIAAAAQAFAFAJAEQgKADgMALQgRAOgMAAIgDAAQgXAAgMgZg");
	this.shape_36.setTransform(394.4,45.629);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#513C33").s().p("AgsAGQAEgDAEgHIAGgLQAHgJAMgEQAMgEAMAFQAGACADAGIAHAJQAEAHAMAGQgKADgMALQgRAOgMAAIgDAAQgXAAgMgZg");
	this.shape_37.setTransform(394.4,45.6224);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#613F31").s().p("AA0AyQgCgBgGgLIgKgPQgMgQgRgKQgUgPgnghQA2AcANAKQAOAKALATIARAkg");
	this.shape_38.setTransform(378.55,41.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#613F31").s().p("AgtAcQgHgIACgOQADgMAIgKQAKgMAQgGQARgGALAIQAHAFAKASQAIAPALAFIgBACQgLgCgJAEQgEACgOAJQgNAKgQABIgDAAQgPAAgKgJg");
	this.shape_39.setTransform(394.6188,45.4635);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#613F31").s().p("ABVA+QgPgIgKgKQgWgUgigZQgKgIgVgHQgagHgIgEQgcgPgNgOQgMgNAFgEIgBgDQAHAPASAJQAKAGAXAGQAdAHAeAUQAZAQAeAaIAyAxIgbgQg");
	this.shape_40.setTransform(396.3492,58.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#613F31").s().p("AgDAYQgTgRgLgHIgVgOQgNgIgEgJQAPADAUAKIAgARIAOAIQALAHAFABQAIADAOgEIAXgGIABACQgMARgaAEIgMABQgQAAgJgIg");
	this.shape_41.setTransform(383.9,37.3704);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#613F31").s().p("AAnAzQgRgbgQgRQgcgXgPgRQgbgdgDgjQAOAbAeAaQAjAfAHAJQAVAbAcBLIgdgvg");
	this.shape_42.setTransform(409.275,59.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#613F31").s().p("AAqAiQgMgGgJgPQgOgWgDgDQgPgSgigCQAjgRAYAeQANAPATArg");
	this.shape_43.setTransform(396.375,42.0041);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#865237").s().p("AAFANQADgLgCgFQgCgEgKgIQgKgIABgHQAaALAEAMQADAHgEAMQgDALgHAGIAAACQgDgGAEgMg");
	this.shape_44.setTransform(433.7973,73.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3D3330").s().p("AAeAYIgcgWQgDgCgggMQgZgKgEgMQAbgHAjAdQAvAlAMAEIAEAHQgPAAgSgMg");
	this.shape_45.setTransform(421.175,87.3655);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D3931").s().p("AA0A5QgYgFgKgJQgIgHgOgWQgNgVgqgaQgqgbgMgTIADgBQAMAKATAJIAiAOQAUAJAKAKQAHAIAKAVQAOAbAlATQA0AbAIAIQgagPgjgKg");
	this.shape_46.setTransform(411.25,82.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D3931").s().p("ABSCTQgXgCgygUQgugTgUgQQghgYgRgzQgOgpAAguQgBg+gBgMIABABQAMAqARBXQAWBHAzAhQAtAeAQAHQAjAQAwACIgTADIgOABIgJAAg");
	this.shape_47.setTransform(378.7,67.57);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#523A31").s().p("AC+DEQgagSgFgCQgOgEgaABQgbAAgOgEQgQgFgYgPIgmgXQgxgbgMgFQgVgJgVADQggAEgKAAQgXgCgxgUQgwgTgUgQQghgYgRgyQgOgqAAguQAAg+gBgMQAGAPAQA1QANAqAOAYQATAhAqAgIApAeQAhAPAxgSQAQgGAJABQAOABAIAMQANASATARQA3AyAwAJQAQADAWAAIAlABQgKgIgIgKQgMgNADgNQADgOAUAAQASABAWATIAdAeQARATANAJQAfAXATgKQAQgIAGgTQACgKABgaQABgQATgjQARghgEgSQgCgMgFgJQAJAGADAJQAHANgJAXIgPAkQgEATABA6QgEAygjABQgGAAgJgHQgJgIgGAAIgDABIgFABIgFADIgMALIgDADIgDACIgBABIgDABIgMABQgMAAgKgGg");
	this.shape_48.setTransform(401.4613,73.0948);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6B4435").s().p("ADbD4QgagSgFgCQgOgEgaABQgbAAgOgEQgQgFgYgPIgmgXQgxgbgMgFQgVgJgVADQggAEgKAAQgXgCgxgUQgwgTgUgQQghgYgRgzQgOgpAAguIAAg5QgBgigHgXQgEgPgYgxQAlAKAYAqQANAYAXAtQAQAXAaAVQAcAWAZAIQAXAHAeAHQAXAIAWAVIAmArQAWAZAWAKIA6AZQAmAPAWABQAhABAkAVQAWANAlAeQAYATAZAGQAYAGAWgHQgBAXgIANQgKAPgUABQgGAAgJgHQgJgIgGAAQgKABgKAKQgKALgFABIgMABQgMAAgKgGg");
	this.shape_49.setTransform(398.575,67.8948);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A57C59").s().p("AgKAAIAHgBQAHAAAHADg");
	this.shape_50.setTransform(368.2,21.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#81523D").s().p("ADjFiQgZgSgGgCQgNgEgaABQgbAAgOgEQgRgFgXgPIgmgXQgxgbgMgFQgVgJgWADQggAEgJAAQgYgCgxgUQgvgTgVgQQgggYgRgzQgOgqgBguIAAg4QgBgigGgXQgGgXgTgjQgXgpgGgQQgbhGAWgtQAIgPBAgNQAzgLA3gEQBEgTBhBWQAtApBXBqQASAWAgAtQAfApAbAXQATAPAlAuQAjAqAXASQAFADAgANQAXAJAHAPQAGAOgJAXIgOAkQgFATACA6QgEAygjABQgGAAgJgHQgJgIgHAAQgKABgJAKQgLALgFABIgLACQgMAAgLgHg");
	this.shape_51.setTransform(397.7174,57.2811);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5C3D32").s().p("AhWCpQBAhdAWguQAdheAZhDQAwiABHgzQgvA3gnBeIhACtQgkBpgmA+QgyBVhHAuQAXgyA/hbg");
	this.shape_52.setTransform(344.3,84.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#523A31").s().p("AjhFAQAHg2AXgoQAOgZAYgeIApg0QA8hRAXgyQAQglAfhcQAihlANgeQAjhEAqgaQAXgOAdgKIAOgFQACAjAJAiIALAoQg1AQgNAHQgfAQgRAkQgcA6gZBZQgTBDgvBRQgQAbhMBwQglA4gPAbQgaAygEAoQgagNgSg/g");
	this.shape_53.setTransform(346.075,99.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6B4435").s().p("AipGiQgQhCgGgUQgRg8gLgdQgUgzgagdQgSgTgXgTQB3AIBTiLQAshJAnhzQA7h/BHhPQBjhtBXAbQAJADACgBQgFAmgDAeQAAAJgQBkQgLBDALApQg2ARgNAHQgfAQgQAkQgcA6gaBYQgSBEgxBRQgQAahLBxQglA4gPAbQgaAygEAoQgYgNgTg5g");
	this.shape_54.setTransform(340.55,90.656);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6B4435").s().p("AnAEuQAtgVBYhSIA6g3QAfggATgcQBNhyC5iOQBGg1BMggQBRgjBOgGIAogFQAegEATAAQi4A+h8BnQhSBEiACfQhVBpgZAYQhDBChNAUQgbAIgiAAQgeAAgigGg");
	this.shape_55.setTransform(328.225,51.217);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#81523D").s().p("Ag5INQgQhBgHgVQgRg8gLgdQgTgzgbgdQgvgzheg7IhLgsQgsgagUgdQgFgHgPgLQgQgLgIgLQAugKBphiIA6g3QAfggATgcQBNhzC5iOQBGg1BMggQBRgjBOgGQAPgBA0gIQAwgDANARQAJALgXApQgbAwgBAHIgOBTQgIAxgCAkQgBAJgQBkQgKBEAKApQg2AQgMAHQgfARgRAjQgcA5gZBaQgTBDgxBRQgQAbhLBwQgmA4gOAbQgaAygEAoQgYgMgSg6g");
	this.shape_56.setTransform(329.4147,79.9201);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3A3331").s().p("AjfA+QgigcgRgJQgdgNgeAVIAEgEQAbgZAeAFQAYAEAfAZQAeAXAhAHQAeAHAogFQA7gGBEgbQAZgJBbgpQgfAAg7gIQhIgKgZgCQh3gKg8AxQAqguBYgKQBBgIBOAOQCpAeBjhSIgDAUQACAGhBAoIhLAtQg3AihUAXQhLAVhIAEIgNAAQhCAAgzgjg");
	this.shape_57.setTransform(300.6,41.5934);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3A3331").s().p("AkWgBQALAMAHAEQBDAhBGgKQA7gIBMgnQBOgoAxgOQAggJAnADQAVABAwAJQgIAQgmAXQgiAUgVAGQh7AqiFARQgvAGgkAAQh9AAAIhIg");
	this.shape_58.setTransform(263.7501,84.0991);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3A3331").s().p("AgDAAIAHAAIgBABg");
	this.shape_59.setTransform(291.375,77.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3A3331").s().p("AAPgNIgHAJQgDAJgTAJQARgMAMgPg");
	this.shape_60.setTransform(306.3625,62);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3A3331").s().p("AhZAeIhZgsQgNgHgqgKQgqgLgPAAQBLgVBCAjQASAKAgATQAcAQAWAEQCQAaCTgpQAkgIANgFQgrAdhNAMQhYAJgoAFQgQADgRAAQgwAAgzgVg");
	this.shape_61.setTransform(275.775,64.2282);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D3E36").s().p("AjdArQA4gkBKgSQA2gOBTgIQBRgIA3gNQArgLAZgRQAJgGARgTQAQgSAKgFIgGAHQgFAwhAAaQgzAVhcALQhuAOgjAIQiKAkhmBaQAMgqBEgug");
	this.shape_62.setTransform(277.575,73.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3A3331").s().p("AAGCMIhKgFQgMAAiGgYQhegRgvAaQAUgTAtgOQAZgIAuAHQA7AKAPAAQAmAAAwgDQA0gDAggFQBMgLAugVQA8gcAlg2QgUADgbAAQgdABgSACQgVACg2gHQg3gHgUACQgjADhGApQg+ApAAgCQAshBBBgaQA2gWBaAAQBYABA2gOQBFgRA4gwIADAGQgWA/gbArQghA1gsAlQhPBAhIANQgSAEgXAAIgggCg");
	this.shape_63.setTransform(277.9,66.0681);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3A3331").s().p("AkgDmQAVgUAlgJQAVgGAsgGQAegHAagMQAigRAMgVQgFgEgXAIIggAJQglAFgZgKQghgRgTgHQghgNgWALQAVgMAXgFQAQgEAhgEQASgCAWABIAoADQAnABAsgSQA2gWAPgIQAogUAUgYQgdgMgsAOQgwAVgWAHQgeAKgrgEQgpgEgggOIANgBIAoAEQAZACAQgCQAngHAngSQAXgMAzgMQAagGAvgSQgHgEgSAAIgbAAQgfgFgWAAQgzABgdAIIgjAMQgUAHgQgCQgLgCg2giQgpgagbASQAbgUAgAHQAJACAyAVQAoARAfgLIAmgOQAVgHASABQAYACA3ALQAyAGAagOQgKgCgjgBQgYgBgsgYQgrgXgYgCQgIAAggACQgYACgPgDQgQgDgTgIIghgPQAQAFAdAEQATADA6gEQAwgCAcAJIBIAjQArAWAigJQgUgJgfgdIg1gyQhDg4gyAkIAIgJQAXgSAUgCQAQgBAaAIQASAGAUAWIAhAkQAmAjAcAOQAtAXAhgTIAeAMQADAGgIAdQgHA2hDAsQhQAtggAVQhCAthLA4QhBALhaABQgpABgaAMQgSgCgIABg");
	this.shape_64.setTransform(321.9783,33.2888);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D3E36").s().p("AlZCoQAsgOBEAMQA7AKAzgGQA8gGApgdIgOADQgXADgvgBQgyAAgZACQAZgRAtgFQAagDA2gCQgrgJgSABQhLAFgoAGQALgDAdgMQAYgKAPgCQAPgDAcgBQAbgBAOgCQAhgFAjgTIgugEQgdgCgUACQiRAJhFBAQAqg1A4gZQAhgOAwgHQAegdApgPQApgQAlACQArABAkgEQhDgigzAOQAZgWAoADQA9AFAJgBQA4gKAugVQgWAIg0gFIg/gHQgfgCgmAOQggAMgdAUQAcgmAvgPQAigLA6gDIgWgFQgugPgXgFQgmgHgeAQQAXgmAxgDQAogDAvATQAsATA0AAQgtgIgcgTQgjgYgCgnQAfAjAbAPQAhATAogDQAfgCA7gMQA1gIAhAPIgJANQgPANgnArQglApgXATIhAA0QgpAggXAXQgeAcggAkQgzAfgpANQgLAEgWALQgVALgNAEQgeAHgXAJQggAAhEgPQhFgPgZAAQgkgBgrAPQguAPgXAZQAmg1AygQgAgEACQgpAHgoATIAugEQBLgFA4gTQgPACgjgBIgQAAQgXAAgHABg");
	this.shape_65.setTransform(311.95,39.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3A3331").s().p("AkcCFQgfgKgVgaQgYgdAOgdQAMANAUAdQAUAYAWAKQArASBOgcQA8gXBBgqIByhPQAwghBPgYQAVgGAsgQQAogNAbgBIAAgDIAEgCQAAAAAAgBQABAAAAABQAAAAAAAAQAAABABAAQgQApgLATQgUAigcAMQgYAKgzAIQg4AJgWAGQgwAQhXAqQhZArgvAQQg3ATgqAAQgXAAgSgGg");
	this.shape_66.setTransform(273.0921,73.3094);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D3931").s().p("AABCPQAEgfgRguIgehJQgLgmAKgnQAJgnAageQADAKAFAgQAFAaAHAPIASAnQAKAWACARIAGAuQACAdgCASQgEAWgRANQgUALgHAHg");
	this.shape_67.setTransform(362.9936,15.375);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6D4733").s().p("AgSAzIgEg8QgBgIgSgkQgMgcAEgUIAAgDQAEAfAuA0QAuAzAEAkIgdATQgSALgJAJQgLgLgCgrg");
	this.shape_68.setTransform(368.2015,17.95);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#887D75").s().p("AgGABQgFgagJgSQADgDAFAAQAFgBADADQAPAMAGAtIADANQABAIgBAEQgCADgHADIgKADIgHgug");
	this.shape_69.setTransform(372.4625,297.9714);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5F473A").s().p("AgiBGQgdgLgHgcQgEgjgJgTQAhgVAngOQApgQAfgCQALABAMATQgGACgJAGQgQAOgcAHQgXAGgHAIQggAfAfA8QgSgEgKgEg");
	this.shape_70.setTransform(364.125,296.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#645349").s().p("Ag0BEQgdgLgHgcQgEgigJgUQAhgUAngPQApgQAfgCQAMABAPAZQAMAWAGAXIAMAnQAEASgIAJIABgFIgGgaQgLhMg0ASQgbAJgEAmQgFAfAJAfQgjgDgSgIg");
	this.shape_71.setTransform(365.906,296.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#735F53").s().p("AAIBPQgmgCgWgJQgdgMgHgcQgEgigJgUQAhgUAngOQApgRAfgCQAMACAPAZQAMAVAGAYIAOAyQAAAUggALQgQAGgbAAIgTgBg");
	this.shape_72.setTransform(365.925,296.4313);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#806F63").s().p("AAVAhQgRgCgXgfQgLgMgBgFQAAgEAEgEIAHgHIAYAfQAPARANAKQgBADgDADIgFABIgCAAg");
	this.shape_73.setTransform(243.225,230.8281);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5B4337").s().p("AhGApQgqgjAFgOIAAAAIAVAcQANAQANAIQAkAWAhgmQAUgWgGgbQgFgZgWgVIAUgDQAegBAeANQAGACALAIQALAJADAGQAEAFgFACQgJADgDAEQg4BLgyANIgGACQgRAAgjgeg");
	this.shape_74.setTransform(249.4253,230.2077);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5F4D42").s().p("AhIAqQgogkAFgOIAEgHQATAhAVAQQANALAPABQARACAIgPQAKgSgNgZQgIgOgZgcQAngRAXgBQAegBAeANQAGACALAIQALAJADAGQAEAFgFACQgJADgDAEQg4BLgyANQgDACgFAAQgTAAghgdg");
	this.shape_75.setTransform(249.4241,230.2158);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6D5749").s().p("AhIAqQgngjAEgPQAHgTAygXQApgSAZgCQAfgBAdANQAHACAJAHQALAIADAGQAEAFgFADQgIAFgDADQg3BLgyANQgEACgEAAQgUAAghgdg");
	this.shape_76.setTransform(249.3536,230.2234);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76,p:{scaleX:1,scaleY:1,x:249.3536,y:230.2234}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:249.4241,y:230.2158}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:249.4253,y:230.2077}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:243.225,y:230.8281}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:365.925,y:296.4313}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:365.906,y:296.375}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:364.125,y:296.2}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:372.4625,y:297.9714}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:368.2015,y:17.95}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:362.9936,y:15.375}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:273.0921,y:73.3094}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:311.95,y:39.025}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:321.9783,y:33.2888}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:277.9,y:66.0681}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:277.575,y:73.075}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:275.775,y:64.2282}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:306.3625,y:62}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:291.375,y:77.925}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:263.7501,y:84.0991}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:300.6,y:41.5934}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:329.4147,y:79.9201}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:328.225,y:51.217}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:340.55,y:90.656}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:346.075,y:99.85}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:344.3,y:84.1}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:397.7174,y:57.2811}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:368.2,y:21.025}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:398.575,y:67.8948}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:401.4613,y:73.0948}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:378.7,y:67.57}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:411.25,y:82.3}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:421.175,y:87.3655}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:433.7973,y:73.65}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:396.375,y:42.0041}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:409.275,y:59.975}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:383.9,y:37.3704}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:396.3492,y:58.05}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:394.6188,y:45.4635}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:378.55,y:41.85}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:394.4,y:45.6224}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:394.4,y:45.629}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:393.5,y:45.904}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:397.425,y:45.875}},{t:this.instance_11,p:{regX:1.5,regY:0.8,scaleX:1,scaleY:1,x:394.75,y:44.6}},{t:this.instance_10,p:{regX:1.3,regY:0.3,scaleX:1,scaleY:1,x:394.75,y:44.1}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:328.8656,y:71.075}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:429.1068,y:74.574}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:390.8304,y:41.4815}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:355.5569,y:13.8016}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:362.005,y:12.0925}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:205.2625,y:284.1188}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:205.2625,y:284.1188}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:202.7625,y:284.1229}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:176.6562,y:214.9525}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:176.6562,y:214.9525}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:280.848,y:205.9918}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:280.848,y:205.9918}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:61.4,y:177.6}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:51.2425,y:147.075}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:57.5215,y:161.425}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:88.05,y:113.45}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:63.4798,y:124.2332}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:40.35,y:275.4554}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:40.3569,y:275.4554}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:40.4,y:272.0304}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:39.4694,y:282.0281}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:184.9081,y:176.8952}},{t:this.instance_9,p:{regX:27.8,regY:48.1,scaleX:1,scaleY:1,x:88.8,y:149.3}},{t:this.instance_8,p:{regX:144.1,regY:76.6,scaleX:1,scaleY:1,x:184.9,y:202.45}},{t:this.instance_7,p:{regX:33.9,regY:26.3,scaleX:1,scaleY:1,x:162.1,y:168.1}},{t:this.instance_6,p:{regX:15.1,regY:28.4,scaleX:1,scaleY:1,x:55.9,y:250.6}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:135.3965,y:120.3855}},{t:this.instance_5,p:{regX:72,regY:30.9,scaleX:1,scaleY:1,x:220.65,y:112.6}},{t:this.instance_4,p:{regX:54.1,regY:16.4,scaleX:1,scaleY:1,x:208.65,y:104.9}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:309.075,y:128.4561}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:321.9673,y:218.3227}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:316.075,y:185.8}},{t:this.instance_3,p:{regX:49.9,regY:72.8,scaleX:1,scaleY:1,x:322,y:223.15}},{t:this.instance_2,p:{regX:20.4,regY:30.9,scaleX:1,scaleY:1,x:74.65,y:216.2}},{t:this.instance_1,p:{regX:0,regY:0,scaleX:1,scaleY:1,x:93.35,y:126}},{t:this.instance,p:{regX:14.2,regY:29.4,scaleX:1,scaleY:1,x:107.6,y:156}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:410.9023,y:78.4243}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:361.775,y:49.55}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:404.9095,y:67.9958}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:384.8411,y:49.3969}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:408.8226,y:57.9357}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:353.5,y:16.555}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:350.8131,y:16.463}},{t:this.shape,p:{scaleX:1,scaleY:1,x:359.7801,y:22.2371}}]}).to({state:[{t:this.shape_76,p:{scaleX:0.7996,scaleY:0.7996,x:243.5503,y:214.8202}},{t:this.shape_75,p:{scaleX:0.7996,scaleY:0.7996,x:243.6067,y:214.8141}},{t:this.shape_74,p:{scaleX:0.7996,scaleY:0.7996,x:243.6077,y:214.8076}},{t:this.shape_73,p:{scaleX:0.7996,scaleY:0.7996,x:238.65,y:215.3037}},{t:this.shape_72,p:{scaleX:0.7996,scaleY:0.7996,x:336.7598,y:267.7594}},{t:this.shape_71,p:{scaleX:0.7996,scaleY:0.7996,x:336.7446,y:267.7144}},{t:this.shape_70,p:{scaleX:0.7996,scaleY:0.7996,x:335.3206,y:267.5745}},{t:this.shape_69,p:{scaleX:0.7996,scaleY:0.7996,x:341.9872,y:268.9909}},{t:this.shape_68,p:{scaleX:0.7996,scaleY:0.7996,x:338.5801,y:45.0883}},{t:this.shape_67,p:{scaleX:0.7996,scaleY:0.7996,x:334.4159,y:43.0293}},{t:this.shape_66,p:{scaleX:0.7997,scaleY:0.7997,x:262.4282,y:89.39}},{t:this.shape_65,p:{scaleX:0.7997,scaleY:0.7997,x:293.5022,y:61.9733}},{t:this.shape_64,p:{scaleX:0.7997,scaleY:0.7997,x:301.5217,y:57.3861}},{t:this.shape_63,p:{scaleX:0.7997,scaleY:0.7997,x:266.273,y:83.5992}},{t:this.shape_62,p:{scaleX:0.7997,scaleY:0.7997,x:266.0131,y:89.2025}},{t:this.shape_61,p:{scaleX:0.7997,scaleY:0.7997,x:264.5737,y:82.1279}},{t:this.shape_60,p:{scaleX:0.7997,scaleY:0.7997,x:289.034,y:80.346}},{t:this.shape_59,p:{scaleX:0.7997,scaleY:0.7997,x:277.0488,y:93.081}},{t:this.shape_58,p:{scaleX:0.7997,scaleY:0.7997,x:254.9576,y:98.0183}},{t:this.shape_57,p:{scaleX:0.7997,scaleY:0.7997,x:284.4258,y:64.0272}},{t:this.shape_56,p:{scaleX:0.7997,scaleY:0.7997,x:307.4684,y:94.6764}},{t:this.shape_55,p:{scaleX:0.7997,scaleY:0.7997,x:306.5171,y:71.7231}},{t:this.shape_54,p:{scaleX:0.7997,scaleY:0.7997,x:316.3732,y:103.2617}},{t:this.shape_53,p:{scaleX:0.7997,scaleY:0.7997,x:320.7914,y:110.614}},{t:this.shape_52,p:{scaleX:0.7997,scaleY:0.7997,x:319.372,y:98.019}},{t:this.shape_51,p:{scaleX:0.7997,scaleY:0.7997,x:362.0889,y:76.5724}},{t:this.shape_50,p:{scaleX:0.7997,scaleY:0.7997,x:338.4844,y:47.579}},{t:this.shape_49,p:{scaleX:0.7997,scaleY:0.7997,x:362.7747,y:85.06}},{t:this.shape_48,p:{scaleX:0.7997,scaleY:0.7997,x:365.0829,y:89.2184}},{t:this.shape_47,p:{scaleX:0.7997,scaleY:0.7997,x:346.881,y:84.8002}},{t:this.shape_46,p:{scaleX:0.7997,scaleY:0.7997,x:372.9107,y:96.5796}},{t:this.shape_45,p:{scaleX:0.7997,scaleY:0.7997,x:380.8476,y:100.6304}},{t:this.shape_44,p:{scaleX:0.7997,scaleY:0.7997,x:390.9414,y:89.6623}},{t:this.shape_43,p:{scaleX:0.7997,scaleY:0.7997,x:361.0154,y:64.3556}},{t:this.shape_42,p:{scaleX:0.7997,scaleY:0.7997,x:371.3313,y:78.7267}},{t:this.shape_41,p:{scaleX:0.7997,scaleY:0.7997,x:351.0394,y:60.6501}},{t:this.shape_40,p:{scaleX:0.7997,scaleY:0.7997,x:360.9948,y:77.1873}},{t:this.shape_39,p:{scaleX:0.7997,scaleY:0.7997,x:359.611,y:67.1221}},{t:this.shape_38,p:{scaleX:0.7997,scaleY:0.7997,x:346.7611,y:64.2324}},{t:this.shape_37,p:{scaleX:0.7996,scaleY:0.7996,x:359.5282,y:67.2149}},{t:this.shape_36,p:{scaleX:0.7996,scaleY:0.7996,x:359.5282,y:67.2202}},{t:this.shape_35,p:{scaleX:0.7996,scaleY:0.7996,x:358.8086,y:67.44}},{t:this.shape_34,p:{scaleX:0.7996,scaleY:0.7996,x:361.947,y:67.4168}},{t:this.instance_11,p:{regX:2.5,regY:1.9,scaleX:0.7998,scaleY:0.7998,x:359.3,y:66.1}},{t:this.instance_10,p:{regX:2.2,regY:1.4,scaleX:0.7998,scaleY:0.7998,x:359.25,y:65.7}},{t:this.shape_33,p:{scaleX:0.7997,scaleY:0.7997,x:307.0293,y:87.6031}},{t:this.shape_32,p:{scaleX:0.7997,scaleY:0.7997,x:387.1905,y:90.4012}},{t:this.shape_31,p:{scaleX:0.7997,scaleY:0.7997,x:356.5815,y:63.9377}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:328.4608,y:41.6787}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:333.6178,y:40.3119}},{t:this.shape_28,p:{scaleX:0.7996,scaleY:0.7996,x:208.2955,y:257.9144}},{t:this.shape_27,p:{scaleX:0.7996,scaleY:0.7996,x:208.2955,y:257.9144}},{t:this.shape_26,p:{scaleX:0.7996,scaleY:0.7996,x:206.2966,y:257.9177}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:185.3834,y:202.5509}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:185.3834,y:202.5509}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:268.7117,y:195.3846}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:268.7117,y:195.3846}},{t:this.shape_21,p:{scaleX:0.7997,scaleY:0.7997,x:93.1417,y:172.7893}},{t:this.shape_20,p:{scaleX:0.7996,scaleY:0.7996,x:85.1425,y:148.3355}},{t:this.shape_19,p:{scaleX:0.7997,scaleY:0.7997,x:90.0402,y:159.8545}},{t:this.shape_18,p:{scaleX:0.7997,scaleY:0.7997,x:114.4533,y:121.4897}},{t:this.shape_17,p:{scaleX:0.7997,scaleY:0.7997,x:94.8049,y:130.1128}},{t:this.shape_16,p:{scaleX:0.7996,scaleY:0.7996,x:76.433,y:250.9872}},{t:this.shape_15,p:{scaleX:0.7996,scaleY:0.7996,x:76.4385,y:250.9872}},{t:this.shape_14,p:{scaleX:0.7996,scaleY:0.7996,x:76.473,y:248.2486}},{t:this.shape_13,p:{scaleX:0.7996,scaleY:0.7996,x:75.7289,y:256.2428}},{t:this.shape_12,p:{scaleX:0.7997,scaleY:0.7997,x:191.9091,y:172.2257}},{t:this.instance_9,p:{regX:28.3,regY:48.5,scaleX:0.7998,scaleY:0.7998,x:114.5,y:149.55}},{t:this.instance_8,p:{regX:144.7,regY:77.2,scaleX:0.7998,scaleY:0.7998,x:191.45,y:192.2}},{t:this.instance_7,p:{regX:34.5,regY:26.9,scaleX:0.7998,scaleY:0.7998,x:173.25,y:164.75}},{t:this.instance_6,p:{regX:15.8,regY:29,scaleX:0.7998,scaleY:0.7998,x:88.35,y:230.75}},{t:this.shape_11,p:{scaleX:0.7997,scaleY:0.7997,x:152.3154,y:127.0359}},{t:this.instance_5,p:{regX:72.7,regY:31.7,scaleX:0.7998,scaleY:0.7998,x:220.1,y:120.5}},{t:this.instance_4,p:{regX:54.6,regY:17.2,scaleX:0.7998,scaleY:0.7998,x:210.4,y:114.3}},{t:this.shape_10,p:{scaleX:0.7997,scaleY:0.7997,x:291.2031,y:133.4898}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:301.5973,y:205.2463}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:296.8848,y:179.236}},{t:this.instance_3,p:{regX:50.3,regY:73.4,scaleX:0.7998,scaleY:0.7998,x:301.05,y:208.75}},{t:this.instance_2,p:{regX:21.1,regY:31.5,scaleX:0.7998,scaleY:0.7998,x:103.35,y:203.15}},{t:this.instance_1,p:{regX:0.6,regY:0.5,scaleX:0.7998,scaleY:0.7998,x:118.3,y:130.95}},{t:this.instance,p:{regX:14.8,regY:29.9,scaleX:0.7998,scaleY:0.7998,x:129.65,y:154.95}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:372.7238,y:93.3613}},{t:this.shape_6,p:{scaleX:0.7996,scaleY:0.7996,x:333.4415,y:70.3553}},{t:this.shape_5,p:{scaleX:0.7996,scaleY:0.7996,x:367.9315,y:85.1045}},{t:this.shape_4,p:{scaleX:0.7996,scaleY:0.7996,x:351.885,y:70.2329}},{t:this.shape_3,p:{scaleX:0.7996,scaleY:0.7996,x:371.0603,y:77.0605}},{t:this.shape_2,p:{scaleX:0.7995,scaleY:0.7995,x:326.7861,y:44.1307}},{t:this.shape_1,p:{scaleX:0.7995,scaleY:0.7995,x:324.638,y:44.0571}},{t:this.shape,p:{scaleX:0.7996,scaleY:0.7996,x:331.8464,y:48.5162}}]},1).to({state:[{t:this.shape_76,p:{scaleX:0.7996,scaleY:0.7996,x:243.5503,y:214.8202}},{t:this.shape_75,p:{scaleX:0.7996,scaleY:0.7996,x:243.6067,y:214.8141}},{t:this.shape_74,p:{scaleX:0.7996,scaleY:0.7996,x:243.6077,y:214.8076}},{t:this.shape_73,p:{scaleX:0.7996,scaleY:0.7996,x:238.65,y:215.3037}},{t:this.shape_72,p:{scaleX:0.7996,scaleY:0.7996,x:336.7598,y:267.7594}},{t:this.shape_71,p:{scaleX:0.7996,scaleY:0.7996,x:336.7446,y:267.7144}},{t:this.shape_70,p:{scaleX:0.7996,scaleY:0.7996,x:335.3206,y:267.5745}},{t:this.shape_69,p:{scaleX:0.7996,scaleY:0.7996,x:341.9872,y:268.9909}},{t:this.shape_68,p:{scaleX:0.7996,scaleY:0.7996,x:338.5801,y:45.0883}},{t:this.shape_67,p:{scaleX:0.7996,scaleY:0.7996,x:334.4159,y:43.0293}},{t:this.shape_66,p:{scaleX:0.7997,scaleY:0.7997,x:262.4282,y:89.39}},{t:this.shape_65,p:{scaleX:0.7997,scaleY:0.7997,x:293.5022,y:61.9733}},{t:this.shape_64,p:{scaleX:0.7997,scaleY:0.7997,x:301.5217,y:57.3861}},{t:this.shape_63,p:{scaleX:0.7997,scaleY:0.7997,x:266.273,y:83.5992}},{t:this.shape_62,p:{scaleX:0.7997,scaleY:0.7997,x:266.0131,y:89.2025}},{t:this.shape_61,p:{scaleX:0.7997,scaleY:0.7997,x:264.5737,y:82.1279}},{t:this.shape_60,p:{scaleX:0.7997,scaleY:0.7997,x:289.034,y:80.346}},{t:this.shape_59,p:{scaleX:0.7997,scaleY:0.7997,x:277.0488,y:93.081}},{t:this.shape_58,p:{scaleX:0.7997,scaleY:0.7997,x:254.9576,y:98.0183}},{t:this.shape_57,p:{scaleX:0.7997,scaleY:0.7997,x:284.4258,y:64.0272}},{t:this.shape_56,p:{scaleX:0.7997,scaleY:0.7997,x:307.4684,y:94.6764}},{t:this.shape_55,p:{scaleX:0.7997,scaleY:0.7997,x:306.5171,y:71.7231}},{t:this.shape_54,p:{scaleX:0.7997,scaleY:0.7997,x:316.3732,y:103.2617}},{t:this.shape_53,p:{scaleX:0.7997,scaleY:0.7997,x:320.7914,y:110.614}},{t:this.shape_52,p:{scaleX:0.7997,scaleY:0.7997,x:319.372,y:98.019}},{t:this.shape_51,p:{scaleX:0.7997,scaleY:0.7997,x:362.0889,y:76.5724}},{t:this.shape_50,p:{scaleX:0.7997,scaleY:0.7997,x:338.4844,y:47.579}},{t:this.shape_49,p:{scaleX:0.7997,scaleY:0.7997,x:362.7747,y:85.06}},{t:this.shape_48,p:{scaleX:0.7997,scaleY:0.7997,x:365.0829,y:89.2184}},{t:this.shape_47,p:{scaleX:0.7997,scaleY:0.7997,x:346.881,y:84.8002}},{t:this.shape_46,p:{scaleX:0.7997,scaleY:0.7997,x:372.9107,y:96.5796}},{t:this.shape_45,p:{scaleX:0.7997,scaleY:0.7997,x:380.8476,y:100.6304}},{t:this.shape_44,p:{scaleX:0.7997,scaleY:0.7997,x:390.9414,y:89.6623}},{t:this.shape_43,p:{scaleX:0.7997,scaleY:0.7997,x:361.0154,y:64.3556}},{t:this.shape_42,p:{scaleX:0.7997,scaleY:0.7997,x:371.3313,y:78.7267}},{t:this.shape_41,p:{scaleX:0.7997,scaleY:0.7997,x:351.0394,y:60.6501}},{t:this.shape_40,p:{scaleX:0.7997,scaleY:0.7997,x:360.9948,y:77.1873}},{t:this.shape_39,p:{scaleX:0.7997,scaleY:0.7997,x:359.611,y:67.1221}},{t:this.shape_38,p:{scaleX:0.7997,scaleY:0.7997,x:346.7611,y:64.2324}},{t:this.shape_37,p:{scaleX:0.7996,scaleY:0.7996,x:359.5282,y:67.2149}},{t:this.shape_36,p:{scaleX:0.7996,scaleY:0.7996,x:359.5282,y:67.2202}},{t:this.shape_35,p:{scaleX:0.7996,scaleY:0.7996,x:358.8086,y:67.44}},{t:this.shape_34,p:{scaleX:0.7996,scaleY:0.7996,x:361.947,y:67.4168}},{t:this.instance_11,p:{regX:2.5,regY:1.9,scaleX:0.7998,scaleY:0.7998,x:359.3,y:66.1}},{t:this.instance_10,p:{regX:2.2,regY:1.4,scaleX:0.7998,scaleY:0.7998,x:359.25,y:65.7}},{t:this.shape_33,p:{scaleX:0.7997,scaleY:0.7997,x:307.0293,y:87.6031}},{t:this.shape_32,p:{scaleX:0.7997,scaleY:0.7997,x:387.1905,y:90.4012}},{t:this.shape_31,p:{scaleX:0.7997,scaleY:0.7997,x:356.5815,y:63.9377}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:328.4608,y:41.6787}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:333.6178,y:40.3119}},{t:this.shape_28,p:{scaleX:0.7996,scaleY:0.7996,x:208.2955,y:257.9144}},{t:this.shape_27,p:{scaleX:0.7996,scaleY:0.7996,x:208.2955,y:257.9144}},{t:this.shape_26,p:{scaleX:0.7996,scaleY:0.7996,x:206.2966,y:257.9177}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:185.3834,y:202.5509}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:185.3834,y:202.5509}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:268.7117,y:195.3846}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:268.7117,y:195.3846}},{t:this.shape_21,p:{scaleX:0.7997,scaleY:0.7997,x:93.1417,y:172.7893}},{t:this.shape_20,p:{scaleX:0.7996,scaleY:0.7996,x:85.1425,y:148.3355}},{t:this.shape_19,p:{scaleX:0.7997,scaleY:0.7997,x:90.0402,y:159.8545}},{t:this.shape_18,p:{scaleX:0.7997,scaleY:0.7997,x:114.4533,y:121.4897}},{t:this.shape_17,p:{scaleX:0.7997,scaleY:0.7997,x:94.8049,y:130.1128}},{t:this.shape_16,p:{scaleX:0.7996,scaleY:0.7996,x:76.433,y:250.9872}},{t:this.shape_15,p:{scaleX:0.7996,scaleY:0.7996,x:76.4385,y:250.9872}},{t:this.shape_14,p:{scaleX:0.7996,scaleY:0.7996,x:76.473,y:248.2486}},{t:this.shape_13,p:{scaleX:0.7996,scaleY:0.7996,x:75.7289,y:256.2428}},{t:this.shape_12,p:{scaleX:0.7997,scaleY:0.7997,x:191.9091,y:172.2257}},{t:this.instance_9,p:{regX:28.3,regY:48.5,scaleX:0.7998,scaleY:0.7998,x:114.5,y:149.55}},{t:this.instance_8,p:{regX:144.7,regY:77.2,scaleX:0.7998,scaleY:0.7998,x:191.45,y:192.2}},{t:this.instance_7,p:{regX:34.5,regY:26.9,scaleX:0.7998,scaleY:0.7998,x:173.25,y:164.75}},{t:this.instance_6,p:{regX:15.8,regY:29,scaleX:0.7998,scaleY:0.7998,x:88.35,y:230.75}},{t:this.shape_11,p:{scaleX:0.7997,scaleY:0.7997,x:152.3154,y:127.0359}},{t:this.instance_5,p:{regX:72.7,regY:31.7,scaleX:0.7998,scaleY:0.7998,x:220.1,y:120.5}},{t:this.instance_4,p:{regX:54.6,regY:17.2,scaleX:0.7998,scaleY:0.7998,x:210.4,y:114.3}},{t:this.shape_10,p:{scaleX:0.7997,scaleY:0.7997,x:291.2031,y:133.4898}},{t:this.shape_9,p:{scaleX:0.7998,scaleY:0.7998,x:301.5973,y:205.2463}},{t:this.shape_8,p:{scaleX:0.7998,scaleY:0.7998,x:296.8848,y:179.236}},{t:this.instance_3,p:{regX:50.3,regY:73.4,scaleX:0.7998,scaleY:0.7998,x:301.05,y:208.75}},{t:this.instance_2,p:{regX:21.1,regY:31.5,scaleX:0.7998,scaleY:0.7998,x:103.35,y:203.15}},{t:this.instance_1,p:{regX:0.6,regY:0.5,scaleX:0.7998,scaleY:0.7998,x:118.3,y:130.95}},{t:this.instance,p:{regX:14.8,regY:29.9,scaleX:0.7998,scaleY:0.7998,x:129.65,y:154.95}},{t:this.shape_7,p:{scaleX:0.7998,scaleY:0.7998,x:372.7238,y:93.3613}},{t:this.shape_6,p:{scaleX:0.7996,scaleY:0.7996,x:333.4415,y:70.3553}},{t:this.shape_5,p:{scaleX:0.7996,scaleY:0.7996,x:367.9315,y:85.1045}},{t:this.shape_4,p:{scaleX:0.7996,scaleY:0.7996,x:351.885,y:70.2329}},{t:this.shape_3,p:{scaleX:0.7996,scaleY:0.7996,x:371.0603,y:77.0605}},{t:this.shape_2,p:{scaleX:0.7995,scaleY:0.7995,x:326.7861,y:44.1307}},{t:this.shape_1,p:{scaleX:0.7995,scaleY:0.7995,x:324.638,y:44.0571}},{t:this.shape,p:{scaleX:0.7996,scaleY:0.7996,x:331.8464,y:48.5162}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436.6,304.4);


// stage content:
(lib.jungle1 = function(mode,startPosition,loop) {
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
		createjs.Sound.play("intro");
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

	this.instance = new lib.Symbol16();
	this.instance.setTransform(-116.05,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.b8}]}).wait(1));

	// Layer_2
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

	this.instance_1 = new lib.BRIGHTEDGELOGO();
	this.instance_1.setTransform(1424,56,0.25,0.25);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgYAVQgLgKAAgLQAAgKALgKQAKgJAPAAQAPAAAKAJQAKAJAAALQAAAMgKAJQgLAJgOAAQgPAAgKgJg");
	this.shape_306.setTransform(1122.15,120.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag+BzQgggMAAgYQAAgWAZAAQALAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA3AAQAWAAALAGQAOAIAAAUQAAAogVAAQgVAAgFgSIgSgCQg0AAAAAPQAAAIAfAPQArAUAPALQAhAWAAAdQgBAmgiATQgdAQgoAAQgeAAgYgJg");
	this.shape_307.setTransform(1101.3,110.025);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_308.setTransform(1084.275,103.95);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg1AAgagdQgagcgBg4QABg0AmgmQAngmA2AAQAVAAAbAMQAiAOgBATQABAIgGAGIgDAWIgBAeQAAApAGASIAKAXQAJASAAADQgBAMgIAHQgKAIgLAAQgKAAgWgUgAgfgsQgWAYAAAdQAAAeAKAPQALAPAWAAQAMAAAMgFQAMgEALgJQgHg0AAgZIABgRIAEgUIgIgDIgGgBQgdAAgXAXg");
	this.shape_309.setTransform(1066,110.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgTCAQgIgJAAgNQAAgZgGgwQgFgwAAgZQAAgOgDgJQgZAQgaAiIgDAEIgBBFIgBARIAAAPQAAAMgKAHQgJAGgNAAQgSAAgHgQQgFgLAAgYIAAhRIAAggIgBggQAAgUAHgPQAIgVAQAAQAMAAAKALQAKAIAAAMIgCATQAhgmAdAAQAiAAAPAaQANgMARgGQAQgHATABQArgBAPAsQADAIAHAzQAGAiAKBTQAAANgJAJQgJAHgNABQgZAAgFgZQgEgYgEgoQgEgtgDgTQgGgngJAAQgFAAgSAKQgSAKgJAHQAAAaAGAtQAGAxAAAXQAAANgIAJQgJAHgNABQgMgBgJgHg");
	this.shape_310.setTransform(1036.3013,110.25);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_311.setTransform(1012.625,104.975);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAtBlIgGgtQgDgYgBgWIABgSIABgUIAAgIIABgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgIAJQgKAIgNAAQgNAAgIgIQgJgJAAgNIgBgSIgBgUQAAgVADgmQACgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAdAAACAjIAAACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAEAbAAARQAAANgIAIQgJAIgNAAQgbAAgDgbg");
	this.shape_312.setTransform(994.3,109.875);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg1AAgagdQgbgcAAg4QAAg0AngmQAngmA2AAQAVAAAbAMQAiAOAAATQAAAIgGAGIgDAWIgBAeQAAApAGASIAKAXQAJASgBADQAAAMgJAHQgIAIgMAAQgKAAgWgUgAgfgsQgWAYAAAdQAAAeALAPQALAPAUAAQANAAAMgFQANgEAKgJQgGg0gBgZIABgRIAEgUIgIgDIgGgBQgdAAgXAXg");
	this.shape_313.setTransform(969.95,110.225);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_314.setTransform(924.875,110.125);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_315.setTransform(906.275,103.95);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhwCNQAAgNAHgHQAIgIANABQAJAAATAEQASADAPAAQAfAAAQgUQAPgUADgqQgMALgOAGQgOAFgPABQgsAAgbgcQgcgdAAgrQAAg8AlglQAlgmBAAAQAUAAAPAEQAPAGAKAKQAbADAAAeQAAAOgEAbQgJAzgCA4QgCBHgWAhQgdAqhIAAQhVAAAAghgAghhjQgTAWAAAjQAAAaAKAOQAKAMAUAAQARAAASgUQARgUADgTQAEgVAFgtQgHgEgHgCQgIgCgGgBQglABgUAYg");
	this.shape_316.setTransform(888.125,116.05);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAtBlIgGgtQgDgYgBgWIABgSIABgUIAAgIIABgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgJAJQgIAIgNAAQgOAAgIgIQgJgJAAgNIgBgSIgCgUQAAgVAEgmQACgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAcAAADAjIAAACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAEAbABARQAAANgJAIQgJAIgNAAQgbAAgDgbg");
	this.shape_317.setTransform(864.95,109.875);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AAsBtQgcAKgdAAQgfAAgVgNQgYgPgFgdQgJg2AAgrQAAgcAHglQAEgYAaAAQAMAAAJAIQAJAIAAAMQAAAKgDAUQgDAVAAAKQAAAfACAWQACAXAEAPIALAEIAKABQAXAAAegHIgBgmIAAgkQAAgtAEghQADgaAbAAQANAAAJAIQAJAIAAAMIgEBOIAAArIAAAtIABANIABAOQAAAMgJAIQgJAIgNAAQgSAAgJgQg");
	this.shape_318.setTransform(841.0763,110.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AhPCbQgDgHAAgHQAAgMAKgJQAJgIAMAAQAOAAALAPIAQAdQAJAPAJAAQALAAADgfQAAgXgIhjQgHhiAAgSQAAgNAIgLQAJgMAOAAQAKAAAKAHQALAIAAAJIAIB5QAGBrAAAYQAAAggUAaQgXAeggAAQg1AAgihLgAAIitQgJgJAAgOQAAgOAJgJQAKgKAOAAQAOAAALAKQAKAJAAAOQAAAOgKAJQgLAKgOAAQgOAAgKgKg");
	this.shape_319.setTransform(818.425,111.225);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_320.setTransform(779.025,110.125);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_321.setTransform(754.175,104.175);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgDAAgaQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA4IAAASQANgDAJAAQAZAAAKAEQARAFAAAWQAAAMgIAIQgJAJgNAAIgLAAIgLgBIgVABQAEBZAAAbIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_322.setTransform(730.225,106.45);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AhBCqQgJgIAAgNQAAgUAuhlQgYgug0hdIgKgRQgHgKABgIQAAgMAJgJQAJgJAMAAQAPAAAIAKQAgAqAoBTIAcg+QAQghAPgZQAKgQAQAAQAMAAAKAJQAKAIAAAMQgBAGgDAIIhMCcQgcA5gOAmIgOAoQgIAVgUAAQgNAAgKgIg");
	this.shape_323.setTransform(687.5,116.025);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_324.setTransform(668.875,103.95);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYABgWIABgSIAAgUIABgIIAAgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgCATIgBATQAAANgJAJQgIAIgNAAQgOAAgJgIQgIgJAAgNIgBgSIgCgUQAAgVADgmQAEgmAAgVIgBgUIgBgUQAAgMAJgJQAJgIANAAQAdAAABAjIABACQAgggAiAAQAqAAAQAjQALAXAAAuIAAAQIgBANQAAARAFAbQAFAbAAARQAAANgJAIQgJAIgNAAQgbAAgDgbg");
	this.shape_325.setTransform(651.45,109.875);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AhIBdQgggfgBgzQgCgvAcgnQAigsA6gBQAsAAAaAkQAXAgAAAuQAAAygbAlQgeAogzAAQgogBgegbgAgfglQgNAVAAAbQAAAaAPAOQALAMAQAAQASAAAOgOQAQgPACgZQAChGgoAAQgaAAgPAYg");
	this.shape_326.setTransform(627.3212,110.35);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAzCkQgLgUgVgcIgjgtQgRANgMAIQgCAeAAAbQAAANgIAJQgJAIgNAAQgfAAAAglQAAgRADgiIACg0IABhIIABhJIgBgWIgBgWQAAgNAJgJQAIgHANgBQANABAJAHQAJAJAAANIABAWIABAXIgCA+IgBA8QAegWA8g9QAKgKAMAAQANAAAJAJQAKAJAAAMQAAAKgJAKQgaAcgkAfIAuA8QAhAsAAAOQAAAMgKAJQgJAJgNAAQgRgBgJgQg");
	this.shape_327.setTransform(584.925,103.95);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AhEBgQgjgdAAgvQAAgrAfgvQAjg1AuAAQAXAAAeAMQAlAQAAATQAAALgHAJQgIAJgMAAQgKAAgNgLQgOgKgaAAQgQAAgUAhQgTAgAAAXQAAAXARANQAQAMAZAAQAOAAAWgLQAVgLAGAAQAMAAAIAJQAJAIAAALQAAARgmARQghAQgVAAQgwAAgggcg");
	this.shape_328.setTransform(560.025,110.125);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_329.setTransform(543.125,104.975);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_330.setTransform(529.925,103.95);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AhhCFQghgiAAgvQAAhJBAhNQA3hAA4gBIASABIAOACQAJgJAOAAQAWAAAGAZQADATAAAYQAAAMgHAIQgHANgQAAQgUAAgKgWQgEgJgFgCQgDgCgOAAQgbAAgkAsQgyA7AAA0QgBAYARARQAQARAWAAQAVAAAWgLIAhgVQASgMAIAAQAOAAAJAKQAJAJAAALQAAANgMAKQg9Azg9AAQgxAAgiglg");
	this.shape_331.setTransform(510.3,104.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.instance_1},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer_1
	this.wrong = new lib.Symbol7();
	this.wrong.name = "wrong";
	this.wrong.setTransform(949.8,568.95,1,1,0,0,0,82.8,82.8);

	this.correct2 = new lib.Symbol4();
	this.correct2.name = "correct2";
	this.correct2.setTransform(1544.6,610.6,1,1,0,0,0,108.8,83.7);

	this.correct1 = new lib.Symbol4();
	this.correct1.name = "correct1";
	this.correct1.setTransform(348.3,642.8,1,1,0,0,0,108.8,83.7);

	this.b3 = new lib.Symbol3();
	this.b3.name = "b3";
	this.b3.setTransform(1526.8,480.9,1,1,0,0,0,169.8,101.4);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.b2 = new lib.Symbol2();
	this.b2.name = "b2";
	this.b2.setTransform(958.1,463.65,1,1,0,0,0,218.3,152.2);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.b1 = new lib.Symbol1();
	this.b1.name = "b1";
	this.b1.setTransform(392.3,480.85,1,1,0,0,0,185.3,169.4);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("ABOCUQgdAPgYAHQgWAHgOAAQhPAAgmgqQgngpAAhTQAAhMA5g4QA6g3BOAAQAfAAAoARQAyAVAAAcQAAALgIAJQgDANgCASQgCAUAAAaQAAA7AJAbQAAAEAPAeQAMAbAAAEQAAARgMALQgOALgRAAQgPAAgggdgAgthAQghAiABAsQAAArAPAWQAQAWAegBQATAAASgGQASgHAPgNQgJhMAAgmIABgXIAFgeIgLgFIgJgBQgrAAghAjg");
	this.shape_332.setTransform(1574.35,735.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AhuCLQg2gpAAhJQAAhRArg4QAvg/BQAAQA4AAAmATQAwAXAAAzQAAAjgnAbQgTANg2AXIhsAwQAQARAWAIQAWAIAbAAQAsAAAdgRQAbgQAQAAQAiAAAAAhQAAAlg2AXQgtATgzAAQhLAAgyglgAgrhNQgWAUgNAoIBJgfQAqgUAagQQgWgNgjAAQgdAAgUAUg");
	this.shape_333.setTransform(1536.85,735.55);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("ABCCVIgJhEQgFgjAAgfIABgbIABgdIABgMIABgPQAAgbgNABQgcAAgZAjQgbAkgPA1IgDAdQgCAPAAAOIgBAcQgDASAAAKQAAASgMANQgNAMgTAAQgUAAgMgMQgNgMAAgTIgCgcIgCgcQAAgfAFg4QAEg3AAgfIgBgeIgBgdQAAgTANgLQANgMATAAQAqAAADAyIAAAEQAwgwAzAAQA9AAAXAzQAPAiAABEIAAAYIAAATQAAAZAHAoQAHAoAAAZQAAARgNANQgNALgTAAQgoABgEgng");
	this.shape_334.setTransform(1501.975,735.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AhfD5QgOgMAAgSQAAgeBFiUQgkhFhNiIIgQgYQgIgPAAgMQAAgSAOgNQANgNASAAQAWAAAMAQQAtA8A8B7IAqhcQAXgwAWglQAOgXAYAAQASAAAOAMQAOANAAARQAAAKgFALIhvDlQgpBUgVA3IgVA8QgMAegeAAQgSAAgOgMg");
	this.shape_335.setTransform(1465.825,744.225);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("ACJD2QgOgNAAgRIgBhGQgDgwAAgXIABghQgzAChJAOIh8AXQAAAVgFAvQgDAqAAAcQABAQgNAMQgNALgTgBQgSAAgNgLQgNgMAAgRQABggAFhAQAGg/AAgfIACh5IABh5QAAgRANgNQANgMATAAQASAAANANQANAMAAASIgCBKIgCBJIgDAfQgCAWABAKIB8gWQBHgNA1gCIAEh1QABgaAOghQASgoAXAAQARABAOALQANAMAAATQABAFgCAFQgGAXAAARIgCAcIgCAdQAAAegDA9QgDA8AAAfQAAAXAEAvQADAuAAAYQAAASgMANQgNAMgTgBQgTAAgOgLg");
	this.shape_336.setTransform(1423.15,727.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AhtCLQg3gpAAhJQAAhRArg4QAvg/BRAAQA3AAAmATQAwAXAAAzQAAAjgnAbQgTANg2AXIhrAwQAPARAWAIQAWAIAcAAQAqAAAfgRQAagQAQAAQAiAAAAAhQAAAlg2AXQgtATgyAAQhNAAgwglgAgrhNQgWAUgNAoIBIgfQArgUAagQQgVgNgjAAQgeAAgUAUg");
	this.shape_337.setTransform(1036.2,735.55);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AhbCoQgwgSAAgjQAAggAmAAQAPAAAcAJQAcAKAPAAQBBAAAAgbQAAgQgtgUQhCgegTgLQgtggAAguQAAhBBFgWQAogOBRAAQAgAAAQAJQAVALAAAeQAAA6ggAAQgfAAgHgaQgNgDgNAAQhMAAAAAWQAAAMAtAVQBAAeAWAQQAvAhAAArQAAA3gzAdQgqAXg7AAQgsAAgjgOg");
	this.shape_338.setTransform(1001.75,735.425);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("Ah/CnQgLgLAAgSIAAjSIABgeIABgdQAAgTALgMQALgMATAAQAlAAAGAlQA4gqBGgBQBAAAAABWIAAAVQgDAygqAAQgoAAAAgqIgCggQhHALggA/IABChQAAATgNALQgMANgUAAQgUAAgLgOg");
	this.shape_339.setTransform(970.85,735.75);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AhqCHQgvgsgChLQgChGApg4QAxhCBWABQBBAAAmAzQAiAuAABFQAABJgoA1QgtA8hKAAQg8gBgrgpgAgug3QgUAfAAAoQAAAmAWAWQASAQAXAAQAbAAAVgUQAXgWACglQAEhng7AAIgBgBQgmAAgWAkg");
	this.shape_340.setTransform(936.6929,735.9);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("ACJD2QgOgNAAgRIgBhGQgDgwAAgXIABghQgzAChJAOIh8AXQAAAVgEAvQgEAqAAAcQAAAQgMAMQgNALgTgBQgTAAgMgLQgNgMABgRQAAggAFhAQAGg/AAgfIACh5IABh5QABgRANgNQAMgMASAAQATAAANANQAMAMAAASIgBBKIgCBJIgDAfQgBAWAAAKIB8gWQBHgNA1gCIAEh1QAAgaAPghQASgoAXAAQARABAOALQANAMAAATQAAAFgBAFQgGAXAAARIgCAcIgCAdQAAAegDA9QgDA8AAAfQAAAXAEAvQADAuAAAYQAAASgMANQgOAMgSgBQgTAAgOgLg");
	this.shape_341.setTransform(895.05,727.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("Ah/CnQgKgLAAgSIAAjSIAAgeIABgdQAAgTALgMQALgMAUAAQAjAAAHAlQA4gqBGgBQBBAAAABWIgBAVQgDAygqAAQgpAAAAgqIgBggQhIALgfA/IAAChQAAATgMALQgNANgTAAQgUAAgLgOg");
	this.shape_342.setTransform(402.55,735.75);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("ABOCUQgeAPgXAHQgWAHgPAAQhOAAgmgqQgngpAAhTQAAhMA5g4QA6g3BOAAQAgAAAnARQAyAVAAAcQAAALgIAJQgDANgCASQgCAUAAAaQAAA7AJAbQABAEAOAeQAMAbAAAEQAAARgMALQgOALgRAAQgPAAgggdgAgthAQghAiABAsQAAArAPAWQAQAWAegBQATAAASgGQASgHAPgNQgJhMAAgmIACgXIAEgeIgLgFIgJgBQgrAAghAjg");
	this.shape_343.setTransform(368,735.7);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AhuCLQg2gpAAhJQAAhRArg4QAvg/BQAAQA5AAAlATQAwAXAAAzQAAAjgnAbQgTANg2AXIhrAwQAPARAWAIQAWAIAbAAQAsAAAegRQAagQAQAAQAiAAAAAhQAAAlg2AXQgtATgzAAQhLAAgyglgAgrhNQgWAUgNAoIBJgfQAqgUAagQQgVgNgkAAQgdAAgUAUg");
	this.shape_344.setTransform(330.5,735.55);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AifD1QgPgRAAgRIAAlVIgCgsQgBgZADgRQAEgeA0gHQAZgHA4AAQA8AAA4AoQBCAtAABFQAAAlgOAZQgLAVgaAXQAfAPAYAeQAcAiAAAjQAAAqgvAmQgfAagiANQhKAchzAAQgUAAgPgQgAhWCtQA3gDBAgTQA4gPAAgUQgBgYgkgUQgbgPgZgDQgcAAg6gCgAhWisIAABFIAABDQAdAEAPgBQBhgIAAhBQAAgXgdgVQgdgXgiAAIgxABg");
	this.shape_345.setTransform(292.9107,727.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.correct1},{t:this.correct2},{t:this.wrong}]}).wait(1));

	// Background
	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_346.setTransform(960,540);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_347.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_347},{t:this.shape_346}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '2D446EE8D93C3E43865E0AF8AC8E01FE',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Asset2.png", id:"Asset2"},
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/right.png", id:"right"},
		{src:"images/sound.png", id:"sound"},
		{src:"images/wrong.png", id:"wrong"},
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
an.compositions['2D446EE8D93C3E43865E0AF8AC8E01FE'] = {
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