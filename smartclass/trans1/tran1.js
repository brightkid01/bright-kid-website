(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Mesh = function() {
	this.initialize(img.Mesh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,113);


(lib.Mesh_0 = function() {
	this.initialize(img.Mesh_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Mesh_1 = function() {
	this.initialize(img.Mesh_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.Mesh_1_0 = function() {
	this.initialize(img.Mesh_1_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,48);


(lib.Mesh_1_1 = function() {
	this.initialize(img.Mesh_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,285);


(lib.Mesh_2 = function() {
	this.initialize(img.Mesh_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,91);


(lib.Mesh_2_0 = function() {
	this.initialize(img.Mesh_2_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,285);


(lib.Mesh_3 = function() {
	this.initialize(img.Mesh_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,315,103);


(lib.Mesh_3_0 = function() {
	this.initialize(img.Mesh_3_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,285);


(lib.Mesh_4 = function() {
	this.initialize(img.Mesh_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,545,133);


(lib.Mesh_4_0 = function() {
	this.initialize(img.Mesh_4_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,285);


(lib.Mesh_5 = function() {
	this.initialize(img.Mesh_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,48);


(lib.Mesh_6 = function() {
	this.initialize(img.Mesh_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,92);


(lib.Mesh_7 = function() {
	this.initialize(img.Mesh_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,285);


(lib.Mesh_8 = function() {
	this.initialize(img.Mesh_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,43);


(lib.Mesh_9 = function() {
	this.initialize(img.Mesh_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


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


(lib.Symbol93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.b1.enabled=false;
		_root.b2.enabled=false;
		_root.b3.enabled=false;
		_root.b4.enabled=false;*/
	}
	this.frame_105 = function() {
		/* stop();
		_root.b1.enabled=true;
		_root.b2.enabled=true;
		_root.b3.enabled=true;
		_root.b4.enabled=true;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(104).call(this.frame_105).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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


(lib.Symbol87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mesh_8();
	this.instance.setTransform(73.5,341.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#372F2C","#39302D","#3E332E","#48382F","#563F30","#6C4830","#6F4931","#6E4931","#44372F","#372F2C"],[0,0.11,0.204,0.29,0.376,0.459,0.467,0.471,0.831,1],-61.4,0,61.4,0).s().p("AotBzIg4jlITLAAIhADlg");
	this.shape.setTransform(126.125,296.075);

	this.instance_1 = new lib.Mesh_7();
	this.instance_1.setTransform(83.35,0);

	this.instance_2 = new lib.Mesh_1_1();
	this.instance_2.setTransform(32.55,0);

	this.instance_3 = new lib.Mesh_2_0();
	this.instance_3.setTransform(126.15,0);

	this.instance_4 = new lib.Mesh_3_0();
	this.instance_4.setTransform(0,0.15);

	this.instance_5 = new lib.Mesh_4_0();
	this.instance_5.setTransform(131.35,0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E03191").s().p("ApfWPQkZkli0msQjAnIAAm1QAAj7BjjkQBgjdCuiqQCvirDihdQDrhhD/AAQEBAADqBhQDiBdCvCrQCuCqBgDdQBjDkAAD7QAAHFi8HFQiwGlkWEfg");
	this.shape_1.setTransform(126.125,142.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C7556").s().p("AgIECIAAoDIARAAIAAIDg");
	this.shape_2.setTransform(126.425,330.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C7556").s().p("AgIECIAAoDIARAAIAAIDg");
	this.shape_3.setTransform(152.625,330.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9C7556").s().p("AgbEBIAloDIASABIgkIEg");
	this.shape_4.setTransform(176.6,330.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9C7556").s().p("AgIECIAAoDIARAAIAAIDg");
	this.shape_5.setTransform(99.65,330.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C7556").s().p("AgakBIASgBIAkIDIgTACg");
	this.shape_6.setTransform(75.65,330.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#533F33").s().p("AjTBzIAAjlIGnAAIAADlg");
	this.shape_7.setTransform(126.125,307.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,252.4,384.6);


(lib.Symbol85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mesh_6();
	this.instance.setTransform(382.55,110.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6853C").s().p("AgGN1IAA7pIANAAIAAbpg");
	this.shape.setTransform(226.625,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6853C").s().p("An8N4QgNkHhrjYQiylpmDhLQgRAAgbgKQgxgSgygtQgjgfgBg4QgBhIA1hcQA2hdBehZQBvhqBHgyQBihGBygoQD3hYITAAQIcAADTAqQBlAUA5AhQAwAdAcAwQA1BbCbEtQChE5ARAwIACAHIgGACQgzAWg3E1QgmDbgeEcIgNAAQAakFAjjNQA5lQA6gpQgZg+iekzQiYkngwhSQg0haizgiQjTgooTgBQoPABj1BWQhxAnhiBGQhGAyhuBoQhbBXg1BaQg0BaAABEQACAzAeAbQAwArAuARQAZAKAQgBIACAAQGJBNC1FvQBsDaAOELg");
	this.shape_1.setTransform(226.7241,110.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E3E3E").s().p("Ah4AkQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAIDxAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAg");
	this.shape_2.setTransform(201.875,124.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E3E3E").s().p("Ah4AkQgPAAgKgLQgLgKAAgPQAAgOALgKQAKgLAPAAIDxAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAg");
	this.shape_3.setTransform(251.125,124.325);

	this.instance_1 = new lib.Mesh_2();
	this.instance_1.setTransform(9.75,110.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.133,1],-52.3,0,52.4,0).s().p("AlwEpQhVAAglgYQgvgfAVhMQAUhJBUhgQBsh9CXhNQCbhRE7gJQCUgEAoAtQAPARADAaIAAAuIAAGQQAAAngeAOQgSAJgkAAg");
	this.shape_4.setTransform(162.2257,62.0337);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E3E3E").s().p("AmWFHQheAAgogaQg0gjAXhTQAWhQBdhrQB3iJCmhVQCshaFagKQCkgEAsAyQARASADAdIAAAzIAAG6QAAAqghAQQgVAJgnAAg");
	this.shape_5.setTransform(162.2223,62.035);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0.133,1],-45.2,0,45.3,0).s().p("AlvEmQgkAAgSgJQgegOAAgmIAAmNIAAguQADgaAPgRQAngsCUAEQCoAECAAMQB8ALArAOQA8ATBWDHQBKCoAOBTQAJAygyAQQghALhaAAg");
	this.shape_6.setTransform(285.7367,62.0585);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3E3E3E").s().p("AmYFHQgoAAgUgJQgigQAAgqIABm6IAAgzQADgdAQgSQAsgyCkAEQC9AFCMANQCLANAvAPQBDAWBgDdQBSC6AQBcQAJA4g4ASQgkAMhkAAg");
	this.shape_7.setTransform(285.7378,62.035);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,0.867],-14.9,9,13.3,-14.6).s().p("AhYCUQiJjGg1hiQgqhOAOgzQAJghAfgRQCKBkCGBvQDtDBBABmQAYBAiQAxQgtAPg4AMIgwAJQg5hQhFhkg");
	this.shape_8.setTransform(363.1649,49.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E3E3E").s().p("AhhCcQiNjNg2hlQg2hlAkg3QARgcAdgHID6C/QEHDVBFBsQAnBTifA0QgxARhAALIg1AIQg7hThGhng");
	this.shape_9.setTransform(362.1271,50.7);

	this.instance_2 = new lib.Mesh_3();
	this.instance_2.setTransform(83,0);

	this.instance_3 = new lib.Mesh_4();
	this.instance_3.setTransform(11.45,67.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3E3E3E").s().p("AhVBWQgkgjAAgzQAAgyAkgkQAjgjAyAAQAyAAAlAjQAjAkAAAyQAAAzgjAjQglAkgyAAQgyAAgjgkg");
	this.shape_10.setTransform(460.9,184.05);

	this.instance_4 = new lib.Mesh_1();
	this.instance_4.setTransform(429.05,152.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C2A264").s().p("AkCEDQhrhsAAiXQAAiWBrhsQBrhrCXAAQCXAABsBrQBrBsAACWQAACXhrBsQhsBriXAAQiXAAhrhrg");
	this.shape_11.setTransform(460.9,184.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBE4B9").s().p("AlTFTQiMiMAAjHQAAjFCMiOQCOiMDFAAQDHAACNCMQCMCOAADFQAADHiMCMQiNCNjHAAQjFAAiOiNg");
	this.shape_12.setTransform(460.9,184.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E3E3E").s().p("AmPGQQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpQAADqilCmQimCljqAAQjpAAimilg");
	this.shape_13.setTransform(460.875,184.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E3E3E").s().p("AhVBWQgkgjAAgzQAAgyAkgkQAkgjAxAAQAyAAAlAjQAjAkAAAyQAAAzgjAjQglAkgyAAQgxAAgkgkg");
	this.shape_14.setTransform(88.1,184.05);

	this.instance_5 = new lib.Mesh_0();
	this.instance_5.setTransform(56.25,152.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C2A264").s().p("AkCEDQhrhsAAiXQAAiWBrhsQBrhrCXAAQCYAABrBrQBrBsAACWQAACXhrBsQhrBriYAAQiXAAhrhrg");
	this.shape_15.setTransform(88.1,184.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBE4B9").s().p("AlTFTQiMiMAAjHQAAjFCMiOQCNiMDGAAQDHAACNCMQCMCNAADGQAADHiMCMQiNCNjHAAQjGAAiNiNg");
	this.shape_16.setTransform(88.125,184.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3E3E3E").s().p("AmPGQQilimAAjqQAAjpClimQCmilDpAAQDqAACmClQClCmAADpQAADqilCmQimCljqAAQjpAAimilg");
	this.shape_17.setTransform(88.125,184.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3E3E3E").s().p("Aw2CCQg2AAglgmQgngmABg2QgBg1AngmQAlgmA2AAMAhtAAAQA1AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg1AAg");
	this.shape_18.setTransform(272.7,197.025);

	this.instance_6 = new lib.Mesh_5();
	this.instance_6.setTransform(0,152.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(img.Mesh_1_0, null, new cjs.Matrix2D(1,0,0,1,-17,-24)).s().p("AipDwIAAnfIFTAAIAAHfg");
	this.shape_19.setTransform(543.85,176.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.instance_6},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_5},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.shape_10},{t:this.instance_3},{t:this.instance_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.9,240.6);


(lib.Symbol84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D95C1").s().p("AnKBrIwlh6IMdALQNsAHGRgLQFzgLFOhhQCngwBdguQg1BihoBlQjPDKj8ASQghACgvAAQk9AAvFhog");
	this.shape.setTransform(306.975,149.2178);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767777").s().p("AhJgYQAtgjgMgrQBRBeAhAnQgCAIgIANQgOAbgYAYg");
	this.shape_1.setTransform(516.775,143.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767777").s().p("Aing8QCigVBLgpIBiCJQhvBWjPAWg");
	this.shape_2.setTransform(499.425,155.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#767777").s().p("AhrBZQAOhVALgxIAJgiIA1gCQBBgEA9gHIACC2QgwADgyAAQg5AAg8gEg");
	this.shape_3.setTransform(468.6,159.0509);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBECED","#EDEDED","#E6E5E5","#D7D8D8","#C4C4C4","#B2B2B2"],[0,0.275,0.49,0.686,0.867,1],-84.6,34.8,84.6,-31.8).s().p("At+DfIJxjNQKOjVCSgqQCTgqB7AnQA+ATAhAcI6/HFg");
	this.shape_4.setTransform(95.65,179.8669);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#929292").s().p("AuADYIJ1jEQKSjMCSgqQBwggBqAHQBTAHAxAaIAKAlI7CGyg");
	this.shape_5.setTransform(96.525,182.3797);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#326996").s().p("ApEmKIFGgaINDLeIp6Brg");
	this.shape_6.setTransform(161.075,103.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D95C1").s().p("ApnlJIA5gXIFFgZINRLJIhGArg");
	this.shape_7.setTransform(164.575,96.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EBECED","#EDEDED","#E6E5E5","#D7D8D8","#C4C4C4","#B2B2B2"],[0,0.275,0.49,0.686,0.867,1],-175.6,69.7,175.7,-68.7).s().p("A9jFkMAsRgMxQF+huFBBmQCiAzBUBJMg2hANgg");
	this.shape_8.setTransform(189.15,223.227);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#929292").s().p("A9dFRIgTgwQB3gmSukjQTXkwE5haQElhVETAUQDbARB+BFIAbBgMg28AM1g");
	this.shape_9.setTransform(190.525,229.9758);

	this.instance = new lib.Mesh();
	this.instance.setTransform(145.3,108.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#EBECED","#EDEDED","#E6E5E5","#D7D8D8","#C4C4C4","#B2B2B2"],[0,0.275,0.49,0.686,0.867,1],-97.7,51,106.7,-29.5).s().p("Au2JDIaXxvIDWgfIxrSXg");
	this.shape_10.setTransform(489.55,58.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#929292").s().p("As8I9IZwypIAJAXIxJTBg");
	this.shape_11.setTransform(502.6,62.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EBECED","#EDEDED","#E6E5E5","#D7D8D8","#C4C4C4","#B2B2B2"],[0,0.275,0.49,0.686,0.867,1],-44.1,22.2,47.5,-13.9).s().p("AmgEcILuovIBTgLIoaI+g");
	this.shape_12.setTransform(235.475,107.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#929292").s().p("AlxEZILgpEIADAIIoMJPg");
	this.shape_13.setTransform(240.45,108.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("AgsCOQgygZgWg8QgXg7ATg7QASg7AxgYQAxgXAxAZQAyAaAXA8QAWA6gTA8QgTA7gwAXQgYAMgXAAQgZAAgagOg");
	this.shape_14.setTransform(525.8802,98.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#8A8A8A","#BAB9B9","#DADAD9","#929292"],[0,0.337,0.51,1],7,14.3,-6.9,-14.2).s().p("Ag1CqQg8gegahIQgbhGAWhHQAXhHA6gcQA6gcA7AfQA8AfAbBHQAaBHgWBGQgXBHg6AcQgcANgcAAQgeAAgfgQg");
	this.shape_15.setTransform(525.8926,98.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#B2B2B2","#AFAFAF","#979696","#888788","#807F80","#7D7D7D"],[0,0.02,0.227,0.447,0.69,1],1,12.4,-0.9,-9.4).s().p("AgCCqQh+gog8gqQhUg8AihHQAghDBygtQBygtBZAVQBUATAkBeQAjBYgiBGQgsBfhjAAQgpAAgygRg");
	this.shape_16.setTransform(515.1751,98.0083);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C4C4C").s().p("AhYC5QhFgjgXhPQgWhOAlhNQAlhNBLgdQBKgdBFAjQBFAjAWBPQAWBOglBNQglBNhLAdQgiANggAAQgnAAglgTg");
	this.shape_17.setTransform(225.3883,263.4676);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#8A8A8A","#BAB9B9","#DADAD9","#929292"],[0,0.337,0.51,1],8.7,22,-8.6,-21.9).s().p("AhrDeQhSgqgahfQgbheAshbQAthcBagjQBYgkBSArQBSAqAbBfQAbBdgtBcQgsBchaAjQgoAPgmAAQgwAAgtgWg");
	this.shape_18.setTransform(225.4,263.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#B2B2B2","#AFAFAF","#979696","#888788","#807F80","#7D7D7D"],[0,0.02,0.227,0.447,0.69,1],-25.7,10.2,29,-11.3).s().p("AhMDPQh9hShFhbQhWhxAzhNQA4hVCrgPQCpgPBnBEQBkBCAYBnQAXBig5BXQg6BXhjASQgWADgVAAQhRAAhPg0g");
	this.shape_19.setTransform(213.8064,260.4228);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,585.6,287.9);


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
	this.instance.setTransform(0,0,0.0977,0.0977);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.5,81.5);


(lib.Path_67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABF2F").s().p("AkNAKIIbgVQhaAIhxAGQiZAJhlAAQguAAgkgCg");
	this.shape.setTransform(26.975,1.228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_67, new cjs.Rectangle(0,0,54,2.5), null);


(lib.Path_66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak4gDIJxAFQiqACh+AAQkGAAhDgHg");
	this.shape.setTransform(31.3,0.389);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_66, new cjs.Rectangle(0,0,62.6,0.8), null);


(lib.Path_65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAWg1QgKAwghA7g");
	this.shape.setTransform(2.225,5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_65, new cjs.Rectangle(0,0,4.5,10.9), null);


(lib.Path_64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAWg1QgLAwggA7g");
	this.shape.setTransform(2.2,5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_64, new cjs.Rectangle(0,0,4.4,10.9), null);


(lib.Path_63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#295BA2").s().p("AqfgJIU/AMQkAAGkoABIhiAAQn+AAi3gTg");
	this.shape.setTransform(67.2,0.9835);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_63, new cjs.Rectangle(0,0,134.4,2), null);


(lib.Path_62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("Ap4gIITxAMQkWAEkoABIhUAAQoEAAhbgRg");
	this.shape.setTransform(63.25,0.8805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_62, new cjs.Rectangle(0,0,126.5,1.8), null);


(lib.Path_61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4660A7").s().p("Ag2AuIABhcIBsACIgBBbg");
	this.shape.setTransform(5.475,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_61, new cjs.Rectangle(0,0,11,9.4), null);


(lib.Path_60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4660A7").s().p("AgzAuIABhcIBmACIgBBbg");
	this.shape.setTransform(5.175,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_60, new cjs.Rectangle(0,0,10.4,9.4), null);


(lib.Path_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABF2F").s().p("AkNAKIIbgVQhaAIhxAGQiZAJhlAAQguAAgkgCg");
	this.shape.setTransform(27,1.228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_59, new cjs.Rectangle(0,0,54,2.5), null);


(lib.Path_58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ak4gDIJxAFQiqACh+AAQkGAAhDgHg");
	this.shape.setTransform(31.3,0.389);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_58, new cjs.Rectangle(0,0,62.6,0.8), null);


(lib.Path_57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAWg1QgKAwghA7g");
	this.shape.setTransform(2.225,5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_57, new cjs.Rectangle(0,0,4.5,10.9), null);


(lib.Path_56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAWg1QgLAwggA7g");
	this.shape.setTransform(2.2,5.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_56, new cjs.Rectangle(0,0,4.4,10.9), null);


(lib.Path_55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#295BA2").s().p("AqfgJIU/AMQkAAGkoABIhiAAQn+AAi3gTg");
	this.shape.setTransform(67.2,0.9835);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_55, new cjs.Rectangle(0,0,134.4,2), null);


(lib.Path_54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("Ap4gIITxAMQkWAEkoABIhUAAQoEAAhbgRg");
	this.shape.setTransform(63.25,0.8805);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_54, new cjs.Rectangle(0,0,126.5,1.8), null);


(lib.Path_53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4660A7").s().p("Ag2AuIABhcIBsACIgBBbg");
	this.shape.setTransform(5.475,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_53, new cjs.Rectangle(0,0,11,9.4), null);


(lib.Path_52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4660A7").s().p("AgzAuIABhcIBmACIgBBbg");
	this.shape.setTransform(5.175,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_52, new cjs.Rectangle(0,0,10.4,9.4), null);


(lib.Path_51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjlgBIHLgCQhGADhdADQhAABg2AAQhpAAhJgFg");
	this.shape.setTransform(23.025,0.4362);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_51, new cjs.Rectangle(0,0,46.1,0.9), null);


(lib.Path_50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAZg/QgLA5gmBGg");
	this.shape.setTransform(2.5,6.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_50, new cjs.Rectangle(0,0,5,12.8), null);


(lib.Path_49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAZg/QgHAkgVAwQgLAZgKASg");
	this.shape.setTransform(2.475,6.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_49, new cjs.Rectangle(0,0,5,12.8), null);


(lib.Path_48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABF2F").s().p("AiTgBIEngBQhoAFhMAAQhFAAgugEg");
	this.shape.setTransform(14.825,0.2632);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_48, new cjs.Rectangle(0,0,29.7,0.6), null);


(lib.Path_47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAQgnQgHAkgYArg");
	this.shape.setTransform(1.575,4.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_47, new cjs.Rectangle(0,0,3.2,8.1), null);


(lib.Path_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAQgnQgHAjgYAsg");
	this.shape.setTransform(1.575,4.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_46, new cjs.Rectangle(0,0,3.2,8.1), null);


(lib.Path_45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF6A9").s().p("AhBACQg5gBgigBIE5gCQhWAFhWAAIgygBg");
	this.shape.setTransform(15.65,0.2722);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_45, new cjs.Rectangle(0,0,31.3,0.6), null);


(lib.Path_44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B64AC").s().p("AgZhYIAyAAIABCwIgyABg");
	this.shape.setTransform(2.575,8.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_44, new cjs.Rectangle(0,0,5.2,17.8), null);


(lib.Path_43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AiIAAIERgBQiIADhEAAQg6AAgLgCg");
	this.shape.setTransform(13.675,0.2455);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_43, new cjs.Rectangle(0,0,27.4,0.5), null);


(lib.Path_42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5C4C4").s().p("AgGm1QAQCRgFF7QgCC+gFChg");
	this.shape.setTransform(0.6568,43.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_42, new cjs.Rectangle(0,0,1.3,87.7), null);


(lib.Path_41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_41, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAABQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(0.25,0.2264);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_40, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_39, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_38, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AAAACQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAgBgBQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAg");
	this.shape.setTransform(0.25,0.2375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_36, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_35, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_34, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D23539").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_33, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgGHfIgFu9IASAAIAFO9g");
	this.shape.setTransform(1.2,47.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_32, new cjs.Rectangle(0,0,2.4,95.9), null);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgnmdIBLgBIAEM8IhKABg");
	this.shape.setTransform(3.975,41.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_31, new cjs.Rectangle(0,0,8,83), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0.325,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgDAAQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBgBgBg");
	this.shape.setTransform(0.35,0.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AAAADQgCABAAgEQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape.setTransform(0.325,0.335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgDAAQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape.setTransform(0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_26, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABABAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape.setTransform(0.325,0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_25, new cjs.Rectangle(0,0,0.7,0.7), null);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FD1E7").s().p("AhGBIQgdgegBgpQAAgpAdgeQAegdApAAQApgBAeAeQAdAdAAApQABApgeAeQgdAdgqABQgoAAgegdg");
	this.shape.setTransform(10.05,10.0496);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_24, new cjs.Rectangle(0,0,20.1,20.1), null);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#872F47").s().p("AhgBfQgogoAAg3QAAg1AognQAogoA4AAQA4AAApAnQAnAmAAA3QABA2goAoQgoAng5AAIAAAAQg4AAgogmg");
	this.shape.setTransform(13.65,13.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,27.3,26.6), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#817F7F").s().p("AiRDoIEXgFIAKnLIACHRg");
	this.shape.setTransform(61.4125,23.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(46.8,0,29.299999999999997,46.6), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC632").s().p("AEBC2IAMl4IADGDIofACg");
	this.shape.setTransform(44.825,19.4625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(17.7,0,54.3,39), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC325F").s().p("AmehLQgCg4AegqQAXggApgVQgcAuAAAyIADHUIK5gEIgCnUQAAhRhFg/QhEg/hrgWIAbgrQC8AgBCB7QAgA9gFA3IADIaIs6ADg");
	this.shape.setTransform(41.5405,40.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0.1,0,83,81.3), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("Agwg5IBhgBIAAB0IhgABg");
	this.shape.setTransform(4.925,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,9.9,11.8), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMhBIALAAIguCDg");
	this.shape.setTransform(2.35,6.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,4.7,13.2), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgXAkQAZiBApg9IAACNQgMADgRAXQggAtgYBgQAFg1AOhBg");
	this.shape.setTransform(4.3,15.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_1, new cjs.Rectangle(0,0,8.6,30.9), null);


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC325F").s().p("AAABcQg2iUgFiiQAPAwAaAtQAdA0AvAlIACD/QgVgPgnhwg");
	this.shape.setTransform(5.975,21.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13_0, new cjs.Rectangle(0,0,12,43.7), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC325F").s().p("AAIA9QgnhegUhtQAJAdAGAQQAgBRA3A1IABBqQgNgKgfhIg");
	this.shape.setTransform(5.175,14.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12_0, new cjs.Rectangle(0,0,10.4,28.5), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgBAAQgBAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAQACADgEAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape.setTransform(0.233,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3375BA").s().p("AgYhCIAxAAQACBBgMBDIgmABg");
	this.shape.setTransform(2.4966,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_2, new cjs.Rectangle(0,0,5,13.3), null);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3A63").s().p("An1i9IPpgFIACGAIiYABIAAg0QAAhlhmhFQhohGiQAAQiPABhnBIQhmBGABBkIAAA0IiYABg");
	this.shape.setTransform(50.2,19.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_1, new cjs.Rectangle(0,0,100.4,39.1), null);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AgxitIBhgBIACFcIhhABg");
	this.shape.setTransform(4.975,17.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11_0, new cjs.Rectangle(0,0,10,35), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AgCAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBg");
	this.shape.setTransform(0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,0.5,0.5), null);


(lib.Path_10_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhDEqIAFpVICCACIgGJVg");
	this.shape.setTransform(6.8,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_4, new cjs.Rectangle(0,0,13.6,60), null);


(lib.Path_10_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhDEqIAGpVICBACIgGJVg");
	this.shape.setTransform(6.8,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_3, new cjs.Rectangle(0,0,13.6,60), null);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3375BA").s().p("AgXgiIAvAAQgDAkgFAgIgmABg");
	this.shape.setTransform(2.4,3.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_2, new cjs.Rectangle(0,0,4.8,7), null);


(lib.Path_10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3A63").s().p("AiSiDIEjgCIACEJIkkACg");
	this.shape.setTransform(14.675,13.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_1, new cjs.Rectangle(0,0,29.4,26.7), null);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26AEAB").s().p("Ai8giIF4gCIABBHIl4ACg");
	this.shape.setTransform(18.85,3.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10_0, new cjs.Rectangle(0,0,37.7,7.4), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE3537").s().p("AAjAwIhWhfIBnBfg");
	this.shape.setTransform(5.175,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,10.4,9.5), null);


(lib.Path_9_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4QASAtAHBEg");
	this.shape.setTransform(1.325,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_10, new cjs.Rectangle(0,0,2.7,11.4), null);


(lib.Path_9_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4QASAtAHBEg");
	this.shape.setTransform(1.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_9, new cjs.Rectangle(0,0,2.6,11.4), null);


(lib.Path_9_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhFEqIAHpVICDABIgFJWg");
	this.shape.setTransform(6.95,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_8, new cjs.Rectangle(0,0,13.9,59.9), null);


(lib.Path_9_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4QASAtAHBEg");
	this.shape.setTransform(1.325,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_7, new cjs.Rectangle(0,0,2.7,11.4), null);


(lib.Path_9_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4QASAtAHBEg");
	this.shape.setTransform(1.3,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_6, new cjs.Rectangle(0,0,2.6,11.4), null);


(lib.Path_9_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhEEqIAFpVICEABIgGJWg");
	this.shape.setTransform(6.925,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_5, new cjs.Rectangle(0,0,13.9,59.9), null);


(lib.Path_9_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgPhCQAWA1AJBQg");
	this.shape.setTransform(1.625,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_4, new cjs.Rectangle(0,0,3.3,13.3), null);


(lib.Path_9_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgQhCQAPAhAKA1IAIAvg");
	this.shape.setTransform(1.65,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_3, new cjs.Rectangle(0,0,3.3,13.3), null);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgKgpQAPAiAFAxg");
	this.shape.setTransform(1.05,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_2, new cjs.Rectangle(0,0,2.1,8.4), null);


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgKgpQAPAiAFAxg");
	this.shape.setTransform(1.05,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_1, new cjs.Rectangle(0,0,2.1,8.4), null);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#26AEAB").s().p("Ai7gMIF3gCIAAAbIl3ACg");
	this.shape.setTransform(18.825,1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_9_0, new cjs.Rectangle(0,0,37.7,3), null);


(lib.Path_8_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgrgmQAqAaAtAzg");
	this.shape.setTransform(4.4,3.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_11, new cjs.Rectangle(0,0,8.8,7.7), null);


(lib.Path_8_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgrgmQAqAaAtAzg");
	this.shape.setTransform(4.4,3.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_10, new cjs.Rectangle(0,0,8.8,7.7), null);


(lib.Path_8_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("Ag+EqIAGpVIB3ACIgGJVg");
	this.shape.setTransform(6.275,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_9, new cjs.Rectangle(0,0,12.6,60), null);


(lib.Path_8_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgrgmQAqAaAtAzg");
	this.shape.setTransform(4.4,3.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_8, new cjs.Rectangle(0,0,8.8,7.7), null);


(lib.Path_8_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgrgmQAqAaAtAzg");
	this.shape.setTransform(4.4,3.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_7, new cjs.Rectangle(0,0,8.8,7.7), null);


(lib.Path_8_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("Ag+EqIAGpVIB3ACIgGJVg");
	this.shape.setTransform(6.275,29.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_6, new cjs.Rectangle(0,0,12.6,60), null);


(lib.Path_8_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgzgrQAxAdA2A6g");
	this.shape.setTransform(5.225,4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_5, new cjs.Rectangle(0,0,10.5,8.9), null);


(lib.Path_8_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgzgrQAfASAmAkQAVATANAOg");
	this.shape.setTransform(5.2,4.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_4, new cjs.Rectangle(0,0,10.4,8.9), null);


(lib.Path_8_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgggbQAfASAiAlg");
	this.shape.setTransform(3.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_3, new cjs.Rectangle(0,0,6.6,5.6), null);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgggbQAfASAiAlg");
	this.shape.setTransform(3.3,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_2, new cjs.Rectangle(0,0,6.6,5.6), null);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC325F").s().p("AiSgxIEkgCIABBlIkkACg");
	this.shape.setTransform(14.65,5.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_1, new cjs.Rectangle(0,0,29.3,10.4), null);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B69D40").s().p("AoHgFIQPgGIAAARIwPAGg");
	this.shape.setTransform(52,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8_0, new cjs.Rectangle(0,0,104,2.3), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8DA3D").s().p("AhthUICpgBIAyCqIi8ABg");
	this.shape.setTransform(11.025,8.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,22.1,17.2), null);


(lib.Path_7_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gCQAwgFBDAMg");
	this.shape.setTransform(5.825,0.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_13, new cjs.Rectangle(0,0,11.7,0.9), null);


(lib.Path_7_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gCQAxgGBCANg");
	this.shape.setTransform(5.825,0.4704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_12, new cjs.Rectangle(0,0,11.7,1), null);


(lib.Path_7_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("Ag6EqIAGpVIBvABIgGJWg");
	this.shape.setTransform(5.875,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_11, new cjs.Rectangle(0,0,11.8,59.9), null);


(lib.Path_7_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gCQAwgFBDAMg");
	this.shape.setTransform(5.825,0.4306);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_10, new cjs.Rectangle(0,0,11.7,0.9), null);


(lib.Path_7_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gCQAxgGBCANg");
	this.shape.setTransform(5.825,0.4704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_9, new cjs.Rectangle(0,0,11.7,1), null);


(lib.Path_7_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("Ag6EqIAHpVIBtABIgGJWg");
	this.shape.setTransform(5.85,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_8, new cjs.Rectangle(0,0,11.7,59.9), null);


(lib.Path_7_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AhEgCQAlgEA1AFIAuAGg");
	this.shape.setTransform(6.85,0.4738);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_7, new cjs.Rectangle(0,0,13.7,1), null);


(lib.Path_7_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AhDgCQAjgEA1AFIAvAGg");
	this.shape.setTransform(6.825,0.4738);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_6, new cjs.Rectangle(0,0,13.7,1), null);


(lib.Path_7_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgBQAkgEAxAIg");
	this.shape.setTransform(4.325,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_5, new cjs.Rectangle(0,0,8.7,0.6), null);


(lib.Path_7_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgBQAkgEAxAIg");
	this.shape.setTransform(4.325,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_4, new cjs.Rectangle(0,0,8.7,0.6), null);


(lib.Path_7_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("ABHh8QgVA7g+BkQgfAzgbAng");
	this.shape.setTransform(7.075,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_3, new cjs.Rectangle(0,0,14.2,25), null);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC632").s().p("AhTh7IClgBIACD4IilABg");
	this.shape.setTransform(8.4,12.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_2, new cjs.Rectangle(0,0,16.8,25.1), null);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F333D").s().p("AoHgIIQPgGIAAAXIwPAFg");
	this.shape.setTransform(52,1.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_1, new cjs.Rectangle(0,0,104,2.9), null);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B64AC").s().p("AjXgMIGvgCIAAAbImuACg");
	this.shape.setTransform(21.6,1.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7_0, new cjs.Rectangle(0,0,43.2,3.1), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBJQANAAAGgOIAEgOIAAh1QAFBbgCAbQgBASgMAGQgFADgGAAIgCAAg");
	this.shape.setTransform(1.3767,7.2786);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,2.8,14.6), null);


(lib.Path_6_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAOgLQAVgKAQgHIhlA5QAYgUAogUg");
	this.shape.setTransform(5.075,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_14, new cjs.Rectangle(0,0,10.2,5.8), null);


(lib.Path_6_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAzgcIhlA5QAmgeA/gbg");
	this.shape.setTransform(5.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_13, new cjs.Rectangle(0,0,10.2,5.8), null);


(lib.Path_6_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhCEqIAGpVIB/ABIgGJWg");
	this.shape.setTransform(6.675,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_12, new cjs.Rectangle(0,0,13.4,59.9), null);


(lib.Path_6_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAOgLQAVgKAQgHIhlA5QAYgUAogUg");
	this.shape.setTransform(5.075,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_11, new cjs.Rectangle(0,0,10.2,5.8), null);


(lib.Path_6_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAzgcIhlA5QAmgeA/gbg");
	this.shape.setTransform(5.1,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_10, new cjs.Rectangle(0,0,10.2,5.8), null);


(lib.Path_6_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AhCEqIAGpVIB/ABIgGJWg");
	this.shape.setTransform(6.675,29.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_9, new cjs.Rectangle(0,0,13.4,59.9), null);


(lib.Path_6_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AARgNQAYgMASgJIh1BFQAbgXAwgZg");
	this.shape.setTransform(5.9,3.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_8, new cjs.Rectangle(0,0,11.8,6.9), null);


(lib.Path_6_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AARgNQAYgNASgIIh1BFQAbgYAwgYg");
	this.shape.setTransform(5.9,3.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_7, new cjs.Rectangle(0,0,11.8,7), null);


(lib.Path_6_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAlgVIhJArQAbgWAugVg");
	this.shape.setTransform(3.725,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_6, new cjs.Rectangle(0,0,7.5,4.4), null);


(lib.Path_6_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAlgVIhJArQAbgXAugUg");
	this.shape.setTransform(3.725,2.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_5, new cjs.Rectangle(0,0,7.5,4.4), null);


(lib.Path_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("ABah8QgeA6hNBlQgmAzgiAng");
	this.shape.setTransform(8.95,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_4, new cjs.Rectangle(0,0,17.9,25), null);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("AhUjkICmgBIADHKIimABg");
	this.shape.setTransform(8.45,23.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_3, new cjs.Rectangle(0,0,16.9,46.1), null);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#344F9B").s().p("AgNDdIgCm5IAcAAIACG5g");
	this.shape.setTransform(1.55,22.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_2, new cjs.Rectangle(0,0,3.1,44.3), null);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B64AC").s().p("Ag/gaIB/gBIAAA3Ih/AAg");
	this.shape.setTransform(6.4,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_1, new cjs.Rectangle(0,0,12.8,5.6), null);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EC24E").s().p("Ak1gHIJrgDIgQARIpLADg");
	this.shape.setTransform(31,1.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6_0, new cjs.Rectangle(0,0,62,2.1), null);


(lib.Path_5_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAYg0IgvBpQAMgwAjg5g");
	this.shape.setTransform(2.425,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_15, new cjs.Rectangle(0,0,4.9,10.6), null);


(lib.Path_5_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAYg0IgwBpQANgvAjg6g");
	this.shape.setTransform(2.45,5.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_14, new cjs.Rectangle(0,0,4.9,10.7), null);


(lib.Path_5_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AgqErIAGpVIBPABIhTJUg");
	this.shape.setTransform(4.3,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_13, new cjs.Rectangle(0,0,8.6,59.8), null);


(lib.Path_5_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAYg0IgvBpQAMgwAjg5g");
	this.shape.setTransform(2.425,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_12, new cjs.Rectangle(0,0,4.9,10.6), null);


(lib.Path_5_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAYg0IgwBpQANgvAjg6g");
	this.shape.setTransform(2.45,5.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_11, new cjs.Rectangle(0,0,4.9,10.7), null);


(lib.Path_5_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A1A1").s().p("AgqErIAGpVIBPABIhTJUg");
	this.shape.setTransform(4.3,29.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_10, new cjs.Rectangle(0,0,8.6,59.8), null);


(lib.Path_5_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAFgUQAMgYAKgSIg2B9QAJgjAXgwg");
	this.shape.setTransform(2.75,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_9, new cjs.Rectangle(0,0,5.5,12.6), null);


(lib.Path_5_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAFgUQAMgYAKgSIg2B9QAJgjAXgwg");
	this.shape.setTransform(2.75,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_8, new cjs.Rectangle(0,0,5.5,12.6), null);


(lib.Path_5_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AARgnIghBPQAIgkAZgrg");
	this.shape.setTransform(1.725,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_7, new cjs.Rectangle(0,0,3.5,7.9), null);


(lib.Path_5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AASgnIgjBPQAJgkAagrg");
	this.shape.setTransform(1.75,3.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_6, new cjs.Rectangle(0,0,3.5,7.9), null);


(lib.Path_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("ABsh+QgkA3hcBoQgwA1goApg");
	this.shape.setTransform(10.85,12.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_5, new cjs.Rectangle(0,0,21.7,25.5), null);


(lib.Path_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("AhTgtICmgBIABBcIimABg");
	this.shape.setTransform(8.35,4.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_4, new cjs.Rectangle(0,0,16.7,9.4), null);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#344F9B").s().p("AgNAzIgBhkIAcgBIABBlg");
	this.shape.setTransform(1.475,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_3, new cjs.Rectangle(0,0,3,10.2), null);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3A63").s().p("AkehhII8gDIABDGIo8ADg");
	this.shape.setTransform(28.725,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_2, new cjs.Rectangle(0,0,57.5,20.2), null);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8DA3D").s().p("AoggaIRBgGIAAA7IxBAFg");
	this.shape.setTransform(54.525,3.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_1, new cjs.Rectangle(0,0,109.1,6.5), null);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EC24E").s().p("AjogbIHRgDIg1A7IlmACg");
	this.shape.setTransform(23.325,3.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,46.7,6.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F9E9E").s().p("AjPC4IAAg7IAWAAQAXgHAAgdIgBiZQgBgRADgSQAFgfASgVQAageAxgBIEPgBIAAA7IkPACQgVAAgJALQgHAIgDAQQgBAKAAAIIABAEIAACZQABAsgcAbQgUAVgbAEg");
	this.shape.setTransform(20.825,18.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,41.7,36.9), null);


(lib.Path_4_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4IAZBxQgSgtgHhEg");
	this.shape.setTransform(1.25,5.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_12, new cjs.Rectangle(0,0,2.5,11.5), null);


(lib.Path_4_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4IAZBxQgSgtgHhEg");
	this.shape.setTransform(1.275,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_11, new cjs.Rectangle(0,0,2.6,11.4), null);


(lib.Path_4_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AqsArIgMhjIVxAPIgOBig");
	this.shape.setTransform(69.7,5.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_10, new cjs.Rectangle(0,0,139.4,11.3), null);


(lib.Path_4_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4IAZBxQgSgtgHhEg");
	this.shape.setTransform(1.275,5.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_9, new cjs.Rectangle(0,0,2.6,11.5), null);


(lib.Path_4_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgMg4IAZBxQgSgtgHhEg");
	this.shape.setTransform(1.275,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_8, new cjs.Rectangle(0,0,2.6,11.4), null);


(lib.Path_4_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AqsArIgMhjIVxAPIgOBig");
	this.shape.setTransform(69.7,5.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_7, new cjs.Rectangle(0,0,139.4,11.3), null);


(lib.Path_4_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgIgTIgHgvIAfCFQgPgigJg0g");
	this.shape.setTransform(1.6,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_6, new cjs.Rectangle(0,0,3.2,13.3), null);


(lib.Path_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgHgTIgIgvIAfCFQgOgigJg0g");
	this.shape.setTransform(1.575,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_5, new cjs.Rectangle(0,0,3.2,13.3), null);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgJgpIATBTQgOghgFgyg");
	this.shape.setTransform(1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_4, new cjs.Rectangle(0,0,2,8.4), null);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgJgpIATBTQgOghgFgyg");
	this.shape.setTransform(1,4.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_3, new cjs.Rectangle(0,0,2,8.4), null);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AB6iAQhHBZitCog");
	this.shape.setTransform(12.25,12.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_2, new cjs.Rectangle(0,0,24.5,25.7), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKgDICVgBQgRAFgbACQgRACgPAAQglAAgkgIg");
	this.shape.setTransform(7.525,0.484);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,15.1,1), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("AhEg5ICIgBIABB0IiIABg");
	this.shape.setTransform(6.875,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,13.8,11.8), null);


(lib.Path_3_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgnIBVBPQgqgbgrg0g");
	this.shape.setTransform(4.3,3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_17, new cjs.Rectangle(0,0,8.6,8), null);


(lib.Path_3_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgnIBVBPQgpgbgsg0g");
	this.shape.setTransform(4.3,3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_16, new cjs.Rectangle(0,0,8.6,8), null);


(lib.Path_3_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("ArrAwIgOhuIXzAPIgQBug");
	this.shape.setTransform(76.2,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_15, new cjs.Rectangle(0,0,152.4,12.6), null);


(lib.Path_3_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgnIBVBPQgqgbgrg0g");
	this.shape.setTransform(4.3,3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_14, new cjs.Rectangle(0,0,8.6,8), null);


(lib.Path_3_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgnIBVBPQgqgbgrg0g");
	this.shape.setTransform(4.3,3.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_13, new cjs.Rectangle(0,0,8.6,8), null);


(lib.Path_3_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("ArrAwIgOhuIXzAPIgQBug");
	this.shape.setTransform(76.2,6.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_12, new cjs.Rectangle(0,0,152.4,12.6), null);


(lib.Path_3_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA3539").s().p("Ak/gGQASgMAVgBIIxgDQAVAAASAMQARAKAJATIqzAEQAJgTARgKg");
	this.shape.setTransform(34.625,2.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_11, new cjs.Rectangle(0,0,69.3,4.5), null);


(lib.Path_3_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgSgKIgggjIBlBaQgegSgnglg");
	this.shape.setTransform(5.1,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_10, new cjs.Rectangle(0,0,10.2,9.1), null);


(lib.Path_3_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgSgKIgggjIBlBaQgegSgnglg");
	this.shape.setTransform(5.1,4.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_9, new cjs.Rectangle(0,0,10.2,9.1), null);


(lib.Path_3_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgfgcIA/A5QgfgUggglg");
	this.shape.setTransform(3.225,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_8, new cjs.Rectangle(0,0,6.5,5.8), null);


(lib.Path_3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgfgcIA/A5QgfgTgggmg");
	this.shape.setTransform(3.225,2.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_7, new cjs.Rectangle(0,0,6.5,5.8), null);


(lib.Path_3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AigiWIE/gCIACEvIk/ACg");
	this.shape.setTransform(16.05,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_6, new cjs.Rectangle(0,0,32.1,30.6), null);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AA4h7QgTBEgvBgQgYAwgVAjg");
	this.shape.setTransform(5.575,12.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_5, new cjs.Rectangle(0,0,11.2,24.8), null);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFgYQAFgfAGgWIAFBbQgLAPgEAaQgBANAAAKQgLgpALg9g");
	this.shape.setTransform(1.1186,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_4, new cjs.Rectangle(0,0,2.3,15.7), null);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#903149").s().p("AgwiNIBggBIABEcIhgABg");
	this.shape.setTransform(4.925,14.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_3, new cjs.Rectangle(0,0,9.9,28.5), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DC325F").s().p("AkegKII9gDIAAAYIo9ADg");
	this.shape.setTransform(28.675,1.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,57.4,2.7), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkEgBIIJgDIABAFIoKADIgCAAg");
	this.shape.setTransform(26.25,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,52.5,0.9), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36406A").s().p("AuNghIcagKIAABNI8ZAKg");
	this.shape.setTransform(90.95,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,181.9,8.8), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F9E9E").s().p("AslBkIJrgDIgCnoIBxAAIAEJIINsgFIABBKIhpgCQhoAAAAADIAAB6I14AHg");
	this.shape.setTransform(80.575,39.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,161.2,78.5), null);


(lib.Path_2_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gGIBzANIgPAAQgrAAg5gNg");
	this.shape.setTransform(5.8,0.7225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_20, new cjs.Rectangle(0,0,11.6,1.5), null);


(lib.Path_2_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gGIBzANIgNAAQgtAAg5gNg");
	this.shape.setTransform(5.825,0.7164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_19, new cjs.Rectangle(0,0,11.7,1.5), null);


(lib.Path_2_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AqsAHIgDgaIVfANIgFAag");
	this.shape.setTransform(68.75,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_18, new cjs.Rectangle(0,0,137.5,4.1), null);


(lib.Path_2_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgSABQgWgDgRgEIBzANIgNAAQgbAAgkgGg");
	this.shape.setTransform(5.825,0.72);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_17, new cjs.Rectangle(0,0,11.7,1.5), null);


(lib.Path_2_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("Ag5gGIBzANIgNAAQgtAAg5gNg");
	this.shape.setTransform(5.825,0.7164);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_16, new cjs.Rectangle(0,0,11.7,1.5), null);


(lib.Path_2_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AqsAHIgDgaIVfANIgFAag");
	this.shape.setTransform(68.75,2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_15, new cjs.Rectangle(0,0,137.5,4.1), null);


(lib.Path_2_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0AB35").s().p("AgjAkQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVgBAPAPQAPAPAAAVQAAAVgPAPQgOAPgWAAQgUAAgPgPg");
	this.shape.setTransform(5.125,5.1242);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_14, new cjs.Rectangle(0,0,10.3,10.3), null);


(lib.Path_2_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA3539").s().p("AlKARQgVgUgCgdILDgEQgCAegUATQgWAVgdAAIowADQgdAAgWgUg");
	this.shape.setTransform(35.4,3.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_13, new cjs.Rectangle(0,0,70.8,7.5), null);


(lib.Path_2_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgUABIgvgIICHAOIgSABQgfAAgngHg");
	this.shape.setTransform(6.8,0.7548);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_12, new cjs.Rectangle(0,0,13.6,1.5), null);


(lib.Path_2_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgUABIgvgIICHAOIgSABQgfAAgngHg");
	this.shape.setTransform(6.8,0.7548);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_11, new cjs.Rectangle(0,0,13.6,1.5), null);


(lib.Path_2_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgEIBVAIIgNABQgfAAgpgJg");
	this.shape.setTransform(4.3,0.4723);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_10, new cjs.Rectangle(0,0,8.6,1), null);


(lib.Path_2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AgqgEIBVAIIgNABQgfAAgpgJg");
	this.shape.setTransform(4.3,0.4723);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_9, new cjs.Rectangle(0,0,8.6,1), null);


(lib.Path_2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C33539").s().p("AhECGQAAgZgSgSQgSgSgZAAIgLABIgBiSIALABQAaAAASgSQARgSAAgZIAAgIICIAAIAAAHQAAAZASASQASASAaAAIALgBIABCSIgMgBQgZAAgSASQgSASAAAZIABAIIiJAAg");
	this.shape.setTransform(14.15,14.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_8, new cjs.Rectangle(0,0,28.3,28.3), null);


(lib.Path_2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AAph7QgQBLgiBcQgRAwgOAgg");
	this.shape.setTransform(4.1,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_7, new cjs.Rectangle(0,0,8.2,24.8), null);


(lib.Path_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgEm2QAMCSgDF7QgCC/gDCgg");
	this.shape.setTransform(0.5281,43.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_6, new cjs.Rectangle(0,0,1.1,87.7), null);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#903149").s().p("AgxjoIBggBIADHSIhgABg");
	this.shape.setTransform(4.975,23.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_5, new cjs.Rectangle(0,0,10,46.8), null);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C23553").s().p("AgGCOQgOkpAbjtIAEMRQgLhmgGiVg");
	this.shape.setTransform(1.1554,39.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_4, new cjs.Rectangle(0,0,2.3,78.6), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B69D40").s().p("AnHgCIOOgFQi+AHjRAFQiTADhrAAQjEAAg9gKg");
	this.shape.setTransform(45.55,0.7838);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,91.1,1.6), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("AjXgjIGvgCIAABJImuACg");
	this.shape.setTransform(21.6,3.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,43.2,7.7), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPhLIBKgBIgqCYIhLABg");
	this.shape.setTransform(5.925,7.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,11.9,15.3), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#335190").s().p("AuMAAIcZgKIAAALI8ZAKg");
	this.shape.setTransform(90.925,1.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,181.9,2.2), null);


(lib.Path_1_38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("Ag+AEQANgOANgKQAlgeAygFQAZgDARADQhVgFg6A6QgdAdgNAeQAEgXAageg");
	this.shape.setTransform(9.3,5.7182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_38, new cjs.Rectangle(0,0,18.6,11.5), null);


(lib.Path_1_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAygdQglAfg/Acg");
	this.shape.setTransform(5.05,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_37, new cjs.Rectangle(0,0,10.1,5.9), null);


(lib.Path_1_36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("Ag+AEQANgNAMgLQAmgdAygGQAZgCARADQhVgGg6A6QgdAdgNAeQAEgXAageg");
	this.shape.setTransform(9.275,5.6932);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_36, new cjs.Rectangle(0,0,18.6,11.4), null);


(lib.Path_1_35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAygdQglAfg+Acg");
	this.shape.setTransform(5.025,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_35, new cjs.Rectangle(0,0,10.1,5.9), null);


(lib.Path_1_34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("Ag+AEQANgOANgKQAlgeAygFQAZgDARADQhVgFg6A6QgdAdgNAeQAEgXAageg");
	this.shape.setTransform(9.3,5.7182);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_34, new cjs.Rectangle(0,0,18.6,11.5), null);


(lib.Path_1_33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAygdQglAfg/Acg");
	this.shape.setTransform(5.05,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_33, new cjs.Rectangle(0,0,10.1,5.9), null);


(lib.Path_1_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("Ag+AEQANgNANgLQAlgdAygGQAZgCARADQhVgGg6A6QgdAdgNAeQAEgXAageg");
	this.shape.setTransform(9.275,5.6932);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_32, new cjs.Rectangle(0,0,18.6,11.4), null);


(lib.Path_1_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAygdQglAfg+Acg");
	this.shape.setTransform(5.025,2.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_31, new cjs.Rectangle(0,0,10.1,5.9), null);


(lib.Path_1_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0AB35").s().p("AgjAkQgPgOAAgWQAAgUAPgPQAPgPAUAAQAVAAAPAOQAPAQAAAUQAAAVgPAPQgOAPgWAAIAAAAQgUAAgPgPg");
	this.shape.setTransform(5.125,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_30, new cjs.Rectangle(0,0,10.3,10.2), null);


(lib.Path_1_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DA3539").s().p("Ak6gBIJ1gEQgRAIgRAAIoxADQgSAAgQgHg");
	this.shape.setTransform(31.475,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_29, new cjs.Rectangle(0,0,63,1.2), null);


(lib.Path_1_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("AhIAGQAPgRAOgMQAsgjA5gIQAegDAUADQhjgFhDBGQgiAhgPAkQAFgbAegjg");
	this.shape.setTransform(10.75,6.8125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_28, new cjs.Rectangle(0,0,21.5,13.7), null);


(lib.Path_1_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AA6gjQgaAZgvAZQgYAMgTAJg");
	this.shape.setTransform(5.85,3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_27, new cjs.Rectangle(0,0,11.7,7.1), null);


(lib.Path_1_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("AhIAGQAPgRAOgMQAsgjA5gIQAegDAUADQhjgFhDBGQgiAhgPAkQAFgbAegjg");
	this.shape.setTransform(10.75,6.8125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_26, new cjs.Rectangle(0,0,21.5,13.7), null);


(lib.Path_1_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AA6gjQgbAZguAZQgYAMgTAJg");
	this.shape.setTransform(5.85,3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_25, new cjs.Rectangle(0,0,11.7,7.1), null);


(lib.Path_1_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("AgtAEQAJgKAJgIQAbgXAlgEQASgCANACQg/gDgpArQgWAWgJAWQACgRAUgWg");
	this.shape.setTransform(6.8,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_24, new cjs.Rectangle(0,0,13.6,8.6), null);


(lib.Path_1_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAlgWQgbAXguAWg");
	this.shape.setTransform(3.7,2.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_23, new cjs.Rectangle(0,0,7.4,4.5), null);


(lib.Path_1_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C87AC").s().p("AgtAEQAJgLAJgHQAbgXAlgEQASgCANACQg/gEgpAsQgWAWgJAWQACgRAUgWg");
	this.shape.setTransform(6.8,4.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_22, new cjs.Rectangle(0,0,13.6,8.7), null);


(lib.Path_1_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5F8").s().p("AAlgWQgbAXguAWg");
	this.shape.setTransform(3.675,2.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_21, new cjs.Rectangle(0,0,7.4,4.5), null);


(lib.Path_1_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AjugCIHdACQhoAChwABIhQAAQiVAAgggFg");
	this.shape.setTransform(23.85,0.32);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_20, new cjs.Rectangle(0,0,47.7,0.7), null);


(lib.Path_1_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEm1QAMCRgDF7QgCC+gDChg");
	this.shape.setTransform(0.5281,43.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_19, new cjs.Rectangle(0,0,1.1,87.7), null);


(lib.Path_1_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAAJgJAAQgCAAgDgDg");
	this.shape.setTransform(0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_18, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgCACQgDADgEAAIAAAAQgDAAgCgCg");
	this.shape.setTransform(0.8792,0.8792);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_17, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.875,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_16, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgIAAQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAEgDACQgDADgDAAQgIAAAAgJg");
	this.shape.setTransform(0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_15, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgIAAQAAgDADgCQADgDACAAQADAAADACQADADAAADQAAAEgDACQgCADgEAAQgHAAgBgJg");
	this.shape.setTransform(0.9,0.8708);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_14, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgIAAQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAIgJABQgIgBAAgIg");
	this.shape.setTransform(0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_13, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAJAAAAAIQAAADgCADQgDADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.8792,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_12, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape.setTransform(0.875,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_11, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#592E31").s().p("AgIAAQAAgCADgDQACgDADAAQADAAADADQADACAAADQAAADgDADQgCADgEAAQgIAAAAgJg");
	this.shape.setTransform(0.875,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_10, new cjs.Rectangle(0,0,1.8,1.8), null);


(lib.Path_1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#903149").s().p("Agwg8IBggBIABB6IhgABg");
	this.shape.setTransform(4.9,6.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_9, new cjs.Rectangle(0,0,9.8,12.4), null);


(lib.Path_1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5C4C4").s().p("AjygCIHlgCQhPAEhkADQhCACg5AAQhxAAhGgHg");
	this.shape.setTransform(24.325,0.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_8, new cjs.Rectangle(0,0,48.7,1.1), null);


(lib.Path_1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5C4C4").s().p("AjCnBIGFgCIlyALIgON8g");
	this.shape.setTransform(19.5,45.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_7, new cjs.Rectangle(0,0,39,90.4), null);


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC632").s().p("AjVAKQAJhUBKhAQAlggAjgPQBbgqBkgCQAygBAfAIQg1gGhFAJIg7ALQiMAmg8BiQgeAxgCAoIABDVg");
	this.shape.setTransform(21.425,22.9941);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,42.9,46), null);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AgMAMQgbgagNgmIBpBpQgmgNgbgcg");
	this.shape.setTransform(5.3,5.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,10.6,10.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AgfhyIA9gBIABDmIg9ABg");
	this.shape.setTransform(3.15,11.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,6.3,23.2), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8DA3D").s().p("AAOBOIgmicIAxCcg");
	this.shape.setTransform(2.475,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,5,15.7), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EC24E").s().p("AhFhGIC9gBIiCCOIhtABg");
	this.shape.setTransform(11.95,7.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,23.9,14.4), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiMAEQAVgTAigDIDwgDIjuAHQgLABgOAFQgcAIgSAWQAEgJAKgJg");
	this.shape.setTransform(15.525,2.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,31.1,4.5), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F47C36").s().p("AsljDILcgEIABDIINtgEIABDDI5JAIg");
	this.shape.setTransform(80.625,20.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,161.3,40.1), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC632").s().p("AlugfILcgEIAABDIrbAEg");
	this.shape.setTransform(36.65,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,73.3,7.2), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9F9E9E").s().p("AkTmXIIjgDIAEMyIojACg");
	this.shape.setTransform(27.6,41.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,55.2,82.1), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C33539").s().p("AnvhNIBWAAIABBEIOIgEIAABWIveAFg");
	this.shape.setTransform(49.625,7.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,99.3,15.7), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("AmIhgIMPgEICaDDIxBAGgAl/hWIiKCzILLgEIgmiyg");
	this.shape.setTransform(54.475,10.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,109,20.3), null);


(lib.Group_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A6AB1").s().p("Ah+hhIBlgBICYDEIipABQgnhggthkg");
	this.shape.setTransform(12.7,9.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,25.4,19.8), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B64AC").s().p("AgwhPIDdgBIhSCgIkHABg");
	this.shape.setTransform(17.3,8.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,34.6,16.3), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B64AC").s().p("AA+hQQg+Bfg9BCg");
	this.shape.setTransform(6.225,8.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,12.5,16.1), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3375BA").s().p("AAKgdQACgzgFgqQAJAZAFArQAKBVgQBbIgmABQAegyADhmg");
	this.shape.setTransform(2.4423,12.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,4.9,24.6), null);


(lib.CompoundPath_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AgBDSQhXAAg9g/Qg9g+AAhWQABhXA+g9QA/g9BWAAQBXABA9A/QA9A+gBBWQAABXg/A9Qg9A9hVAAIgCgBgAiMiPQg7A6gBBTQgBBSA7A8QA6A8BTAAQBSABA7g6QA8g7ABhTQABhSg7g7Qg6g7hTgBIgBAAQhSAAg7A5g");
	this.shape.setTransform(21.0506,21.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_14, new cjs.Rectangle(0,0,42.1,42.1), null);


(lib.CompoundPath_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AgBDSQhXAAg9g/Qg9g+AAhWQABhXA/g9QA+g9BWAAQBXABA9A+QA9A/gBBWQAABXg/A9Qg9A9hVAAIgCgBgAiMiPQg7A6gBBTQAABSA6A8QA6A7BTABQBSABA8g6QA7g7ABhTQABhSg7g7Qg6g7hTgBIgBAAQhSAAg7A5g");
	this.shape.setTransform(21.0506,21.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_13, new cjs.Rectangle(0,0,42.1,42.1), null);


(lib.CompoundPath_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AC1BaIgDgLIgiAKIhFAAIBVgzQgTgggegVIhNBnIg9AAQAHgFAIgBIgeiBQgkAIgeAWIBLBpIgVgBIhXhLQgYAcgMAjIAiAMIhLgBQAQhNA+gxQA+gyBQABQBQABA+AzQA8AyAPBNgAAABQQAKAAALAEIAzh5QghgOgmgBg");
	this.shape.setTransform(21.925,8.999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_12, new cjs.Rectangle(0,0,43.9,18), null);


(lib.CompoundPath_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("AqqA3IABh6IVUANIgBB6gAqbAmIUPANIAChiI0QgNg");
	this.shape.setTransform(68.325,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_11, new cjs.Rectangle(0,0,136.7,13.7), null);


(lib.CompoundPath_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AgBDSQhXAAg9g/Qg9g+AAhWQABhXA+g9QA/g9BWAAQBXABA9A/QA9A+gBBWQAABXg/A9Qg9A9hVAAIgCgBgAiMiPQg7A6gBBTQAABTA6A7QA6A8BTAAQBSABA7g6QA8g6ABhUQABhSg7g7Qg6g7hTgBIgBAAQhSAAg7A5g");
	this.shape.setTransform(21.0506,21.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_10, new cjs.Rectangle(0,0,42.1,42.1), null);


(lib.CompoundPath_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AgCDSQhWAAg9g/Qg+g+AChWQAAhXA/g9QA+g9BWAAQBXABA9A+QA9A/AABWQgBBXg/A9Qg9A9hWAAIgCgBgAiMiPQg7A6gBBTQAABSA5A8QA6A7BUABQBSABA8g6QA7g7ABhTQAAhSg6g7Qg7g7hSgBIgCAAQhRAAg7A5g");
	this.shape.setTransform(21.05,21.0506);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_9, new cjs.Rectangle(0,0,42.1,42.1), null);


(lib.CompoundPath_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AC1BaIgDgLIgiAKIhFAAIBVgzQgTgggegVIhNBnIg9AAQAHgFAIgBIgeiBQgkAIgeAWIBLBpIgVgBIhXhLQgZAegLAhIAiAMIhLgBQAQhNA+gxQA+gyBQABQBQABA+AzQA8AyAPBNgAAABQQAKAAALAEIAzh5QghgOgmgBg");
	this.shape.setTransform(21.925,8.999);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_8, new cjs.Rectangle(0,0,43.9,18), null);


(lib.CompoundPath_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A45698").s().p("AqqA3IABh6IVUANIgBB6gAqbAmIUQANIABhiI0QgNg");
	this.shape.setTransform(68.325,6.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_7, new cjs.Rectangle(0,0,136.7,13.7), null);


(lib.CompoundPath_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AisCvQhIhIgBhmQgBhkBIhJQBIhIBmgBQBlgBBIBIQBJBIAABmQABBlhIBIQhIBJhmAAIgBAAQhkAAhIhHgAAAjqQhhABhFBFQhEBFAABgQABBhBFBEQBFBFBggBQBhAABFhFQBFhGgBhgQgBhhhFhEQhFhEhgAAIAAAAg");
	this.shape.setTransform(24.625,24.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_6, new cjs.Rectangle(0,0,49.3,49.3), null);


(lib.CompoundPath_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AisCuQhIhHgBhmQgBhlBIhIQBIhIBmgBQBkAABJBHQBJBIAABmQABBkhIBJQhIBJhmAAIgBAAQhkAAhIhIgAAAjqQhhAAhFBFQhEBGAABgQABBhBFBEQBFBFBggBQBhgBBFhFQBEhFAAhgQgBhhhFhFQhFhEhgAAIAAABg");
	this.shape.setTransform(24.625,24.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_5, new cjs.Rectangle(0,0,49.3,49.2), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AodBYQgBhsBMhNQBNhNBsgBQBZAABGA1QBFAzAZBRIA4AAQAYhRBEg1QBGg1BYgBQBtAABNBMQBNBNABBrQAAAugQAuIgvAAIAKgXIiNgtIgBAEIAAAAIgDAGIAAAAIgDAHIAAAAIgDAFIgBABIgBACIA0AsIgqAAIgXggIgBABIgEAEIgCABIgEACIgCABIgEACIgBABIgCABIgFABIAFASIgXAAIAAgPIgfAAIgGAPIgdAAIALgPIhDAAIgYAQIhkAAIgFgPIg5AAIgFAQIguAAIAGgQIh0ABIASAPIgqABIgLgQIgkAAIAEAQIgXAAIAAgQIgMAAIgLgCIgCAAIgDgBIgBAAIgIATIgdAAIAVgcIgDgCIgBgBIgEgEIgBgBIgFgFIgEgEIAAgBIgDgEIhQAyIhjABQgRgsAAgvgAnyBYQAAAiALAiICGgtIgBgFQgCgJAAgJIAAgHIiOgJgAFcA9QADALAAAMIAAAFICTAKIABgQQAAgigLgigAnoAVICHAqIAEgKIADgEIAAAAQADgGAFgFIhthbQgcAigNAogAFDAZIAJAJIAIAKIABABIB8hMQgXglgigZgAmZhZIBUByIACgBIAMgHIAMgDIABgBIgjiKQgpALgjAZgAEXAIIAFABIACAAIAFABIACAAIAGACIACABIAEABIACABIAAAAIA2iFQgpgQgqgBgAjhAMIBDgBIBAgnQgXglgigZgAkYAMIAfAAIA0iAQgqgPgpAAgABKAJIB0AAIhOhAQgZAdgNAjgACWhbIBLBkIAkgBIgjiHQgpAKgjAag");
	this.shape.setTransform(54.2006,17.8998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,108.4,35.8), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AhtBvQgtgugBhBQAAg+AtguQAuguBAAAQA/gBAuAuQAuAtABBAQAAA/gtAuQguAuhAABQg/AAgvgtgAhohoQgsAsABA8QAAA+AsArQArArA9AAQA9AAAsgsQArgsAAg8QgBg9grgsQgtgrg8AAQg9ABgrArg");
	this.shape.setTransform(15.55,15.5497);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,31.1,31.1), null);


(lib.CompoundPath_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABF2F").s().p("ArXA3QgagBgSgSQgSgSAAgZQABgZASgSQATgSAZAAIWvAPQAZAAASASQASATgBAYQABAagTASQgSARgZAAgArogoQgRANAAATQAAASARANQARANAXAAIVgAOQAZAAARgNQARgNAAgSQAAgSgRgNQgRgOgXAAI1ggOIgCAAQgYAAgQANg");
	this.shape.setTransform(78.95,6.8993);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_1, new cjs.Rectangle(0,0,157.9,13.8), null);


(lib.CompoundPath_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABF2F").s().p("ArXA3QgagBgSgSQgSgSAAgZQABgZASgSQATgSAZAAIWvAPQAZAAASASQASATgBAYQABAagTASQgSARgZAAgArogoQgRANAAATQAAASARANQARANAXAAIVgAOQAZAAARgNQARgNAAgSQAAgSgRgNQgQgOgYAAI1ggOIgCAAQgXAAgRANg");
	this.shape.setTransform(78.95,6.8993);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2_0, new cjs.Rectangle(0,0,157.9,13.8), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#298E8C").s().p("AhtBvQgtgugBhBQAAg+AtgvQAugtBAgBQA/AAAuAtQAuAuABBAQAAA/gtAuQguAuhAABIgBAAQg/AAgugtgAAAiTQg9gBgrAtQgsArABA8QAAA+AsArQArAsA9gBQA9AAAsgsQArgsAAg8QgBg+grgqQgsgsg8AAIgBABg");
	this.shape.setTransform(15.55,15.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,31.1,31.1), null);


(lib.CompoundPath_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AC2BaIgEgLIgiAKIhFAAIBUgzQgSgggegUIhNBmIg9AAQAGgEAJgCIgeiAQgjAIgfAVIBLBpIgWAAIhWhLQgYAagMAkIAiAMIhMgBQAShNA9gwQA/gyBPAAQBPABA+AzQA9AyAQBNgAAABQQALABAKAEIAzh6QgkgOgiAAg");
	this.shape.setTransform(21.95,8.9998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_1, new cjs.Rectangle(0,0,43.9,18), null);


(lib.CompoundPath_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AC2BaIgEgLIgiAKIhEAAIBTgzQgSgggegUIhNBmIg9AAQAGgEAJgCIgeiAQgjAIgfAVIBLBpIgWAAIhWhLQgZAcgLAiIAiAMIhMgBQAShNA9gwQA/gyBPAAQBPABA+AzQA9AyAQBNgAAABQQAMABAJAEIAzh6QgkgOgiAAg");
	this.shape.setTransform(21.95,8.9998);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1_0, new cjs.Rectangle(0,0,43.9,18), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#979696").s().p("AkmggQAwgwBEgBQBCAAAwAtQAwAsAEBBIAZAAQADhBAwgtQAvgtBCgBQBFAAAwAwQAxAvABBEIgbAAQgBgVgGgUIheAfQACAEAAAHImzACIAAgCIhigGIAAAIIgcABQABhFAwgvgAgnBJQgBgOgFgSIhhAgIAAAAIBnAAIAAAAgAk1AqIBeAeQACgIAFgGIhLg9QgRATgJAagAAuAoIBeAeQACgHAFgHIhLg9QgSAUgIAZgAibA2QAFAEAEAHIBWg2QgOgWgWgQgADKAyQAFAEAFAHIBTg0QgOgWgWgQgAkDgaIA6BOQAHgFAHgCIgYheQgaAHgWAQgABggcIA6BOQAFgEAJgDIgYheQgaAGgWARgAixAvQAHAAAHADIAmhdQgZgKgcAAgACyAqQAIAAAHADIAlhaQgZgKgcAAg");
	this.shape.setTransform(34.375,8.3747);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,68.8,16.8), null);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C8DA3D").s().p("Aogg3IRAgGIABB2IxBAFgAoZgpIABBbIQsgFIgBhcg");
	this.shape.setTransform(54.525,6.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_0, new cjs.Rectangle(0,0,109.1,12.5), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE3338").s().p("AjPC4IAAg7IAWAAQAYgGgBgfIgBiYQgBgSADgSQAGgeARgVQAbgfAwAAQBRgBC+AAIAAA7IkOABQgVABgKAKQgIAJgCAPQgBAKAAAJIABADIAACZQABAtgcAbQgUAVgbAEIgFAAgAjJCDQgDACABAEIAAAaQgBAGAIAAQANABAPgFQAYgIAMgXQADgEADgJQAGgRgBgVIgBilQAAgNAFgOQAKgcAWgEID4gBQATACABgIQAAgIgBgPIAAgDQgDgDgKAAIj0ACQgMABgPAFQgdAMgLAWQgQAXAAAfIABCqIgCAUQgIAVgXABIgJAAg");
	this.shape.setTransform(20.8,18.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,41.6,36.9), null);


(lib.Symbol89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(1));

	// Layer_1
	this.instance = new lib.Symbol92("synched",0);
	this.instance.setTransform(85,-71,0.64,0.64,0,0,0,85,85);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.3516},28).to({_off:true},1).wait(1));

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


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_3();
	this.instance.setTransform(80.5,39.2,1,1,0,0,0,80.5,39.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,161.2,78.5), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_8();
	this.instance.setTransform(12.85,8.6,1,1,0,0,0,11,8.6);

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.setTransform(12,24.25,1,1,0,0,0,12,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,23.9,31.4), null);


(lib.Symbol86 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_67();
	this.instance.setTransform(526.85,153.1,1,1,0,0,0,26.9,1.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#625238").s().p("AgEALQgEgCgDgFQgBgEACgEQACgFAFgBQADgCAFACQAEACACAFQACADgCAFQgCAEgFACIgEABIgEgBg");
	this.shape.setTransform(494.05,155.6071);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#413B2F").s().p("AgIAUQgJgEgDgIQgDgIAEgJQAEgIAIgDQAIgDAJAEQAIAEADAIQADAIgEAIQgEAJgIADQgEABgEAAQgEAAgEgCg");
	this.shape_1.setTransform(494.575,155.8174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#298E8C").s().p("AgNAeQgMgGgFgNQgFgMAGgMQAGgNANgEQAMgFAMAGQANAGAEANQAFAMgGAMQgGAMgNAFQgFACgGAAQgGAAgHgDg");
	this.shape_2.setTransform(494.5922,155.8078);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#625238").s().p("AgEAJQgEgCgBgEQgBgDACgEQACgEAEgBQADgBAEACQADACACAEQABADgCAEQgCAEgEABIgDAAIgEgBg");
	this.shape_3.setTransform(558.375,152.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#413B2F").s().p("AgJAUQgIgEgDgJQgDgIAEgIQAEgIAJgDQAHgDAJAEQAIAEADAJQADAIgEAIQgEAIgJADIgHABQgEAAgFgCg");
	this.shape_4.setTransform(558.8088,152.8793);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#298E8C").s().p("AgOAeQgMgGgEgNQgFgMAGgNQAHgMANgFQALgEANAGQAMAHAFANQAEAMgGAMQgHAMgNAEQgFACgFAAQgHAAgHgDg");
	this.shape_5.setTransform(558.8,152.8664);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FABF2F").s().p("AlIAdQgCgDAAgFIgBgQQAAgLAIgBIKGgYQAIgBABAMIAAAQQABAEgDAEQgCAEgDgBIqHAZIgBAAQgDAAgCgDg");
	this.shape_6.setTransform(526.1792,154.4244);

	this.instance_1 = new lib.Path_66();
	this.instance_1.setTransform(629.9,168.9,1,1,0,0,0,31.3,0.4);
	this.instance_1.alpha = 0.5;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#625238").s().p("AgFACQgCgFAGgCQAFgCACAGQABACgBACQgBABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAIgCABQgDAAgCgFg");
	this.shape_7.setTransform(595.295,169.4388);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#413B2F").s().p("AgHAPQgGgEgCgGQgCgGADgGQAEgGAGgCQAGgCAGADQAGAEACAGQACAGgDAGQgEAGgGACIgFABQgDAAgEgCg");
	this.shape_8.setTransform(595.5464,169.5036);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#298E8C").s().p("AgLAWQgJgFgDgKQgCgJAEgJQAFgJAKgDQAJgDAJAFQAJAFADAKQADAJgFAJQgFAJgKADIgHABQgFAAgGgDg");
	this.shape_9.setTransform(595.5366,169.5134);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#625238").s().p("AgFABQgBgEAFgCQAFgBACAFQABAFgFACIgCAAQgDAAgCgFg");
	this.shape_10.setTransform(663.625,169.8666);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#413B2F").s().p("AgHAOQgGgDgCgHQgCgFADgGQAEgGAHgCQAFgCAHAEQAFADACAHQACAFgDAGQgEAHgHABIgEABQgDAAgEgDg");
	this.shape_11.setTransform(664.35,170.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#298E8C").s().p("AgLAVQgJgFgDgKQgCgJAFgIQAFgJAKgDQAIgDAJAFQAJAFADAKQACAJgFAJQgFAJgKADIgGABQgGAAgFgEg");
	this.shape_12.setTransform(664.375,170.1104);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DA3539").s().p("AlYAKQgDAAgDgDQgCgDAAgEIAAgKQAAgJAJAAIKwAKQAIABAAAIIAAALQABAEgDADQgDACgEAAg");
	this.shape_13.setTransform(629.7,169.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2B5B59").s().p("AACAnQA0gwAGhFIgBATQgHAygfAjQgLANgOAMQgfAZgXADQAfgMAdgcg");
	this.shape_14.setTransform(608.4,179.45);

	this.instance_2 = new lib.Path_1_38();
	this.instance_2.setTransform(587.15,156,1,1,0,0,0,9.3,5.7);

	this.instance_3 = new lib.Path_65();
	this.instance_3.setTransform(600.2,158.35,1,1,0,0,0,2.2,5.4);
	this.instance_3.alpha = 0.5;

	this.instance_4 = new lib.Path_1_37();
	this.instance_4.setTransform(606.05,163.35,1,1,0,0,0,5,3);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Path_2_20();
	this.instance_5.setTransform(607.6,170.85,1,1,0,0,0,5.8,0.7);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Path_3_17();
	this.instance_6.setTransform(604.15,177.75,1,1,0,0,0,4.3,4);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_4_12();
	this.instance_7.setTransform(597.95,181.65,1,1,0,0,0,1.3,5.7);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_5_15();
	this.instance_8.setTransform(590.2,180.8,1,1,0,0,0,2.4,5.3);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_6_14();
	this.instance_9.setTransform(584.65,175.45,1,1,0,0,0,5,2.9);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_7_13();
	this.instance_10.setTransform(583,168,1,1,0,0,0,5.8,0.4);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_8_11();
	this.instance_11.setTransform(586.05,161.05,1,1,0,0,0,4.4,3.9);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.Path_9_10();
	this.instance_12.setTransform(592.75,157.25,1,1,0,0,0,1.3,5.7);
	this.instance_12.alpha = 0.5;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DA3539").s().p("AAAAlQgPAAgKgLQgLgLAAgPQAAgPAMgKQAKgLAPAAQAPAAALALQAKALAAAOQgBAQgKAKQgLALgOAAIgBAAg");
	this.shape_15.setTransform(595.3,169.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#298E8C").s().p("AgmAmQgQgQABgWQAAgWAQgQQAQgQAWAAQAWABAQAQQAQAQAAAWQgBAWgQAQQgQAQgWAAQgWgBgQgQg");
	this.shape_16.setTransform(595.3,169.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3C4C79").s().p("AhZAIICyg4IifBgQgKgSgJgWg");
	this.shape_17.setTransform(586.35,174.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4660A7").s().p("Ag3BAIBviVIhICrQgVgJgSgNg");
	this.shape_18.setTransform(589.725,178.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4660A7").s().p("AhGhLICNB5QgPARgSANg");
	this.shape_19.setTransform(602.4,177.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C4C79").s().p("AgWBdIACi6IAqC1QgVAGgTAAIgEgBg");
	this.shape_20.setTransform(597.35,178.8521);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4660A7").s().p("AhcAOQABgWAIgVICwA7g");
	this.shape_21.setTransform(585.975,166.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4660A7").s().p("ABGgwQANAVAGAUIiyA4g");
	this.shape_22.setTransform(604.25,164.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4660A7").s().p("AgWhYQAXgFAVAAIgCC7g");
	this.shape_23.setTransform(593.25,160.1229);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3C4C79").s().p("AhGgtQAPgRATgOIBrCYg");
	this.shape_24.setTransform(588.2,161.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C4C79").s().p("AARhWQAVAKASANIhvCVg");
	this.shape_25.setTransform(600.875,160.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3C4C79").s().p("AhdgdIC7AQQgDAXgHAUg");
	this.shape_26.setTransform(604.65,172.475);

	this.instance_13 = new lib.CompoundPath_14();
	this.instance_13.setTransform(595.35,169.55,1,1,0,0,0,21.1,21.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#298E8C").s().p("AgBDWQhZAAg+hAQg+g/AAhYQABhZBAg+QA/g+BYABQBZABA+A/QA+A/gBBYQgBBZg/A+Qg/A9hWAAIgCAAgAgqi1QgiAIggAVQgSAOgPARQgZAcgLAiQgHAVgCAXIgBAOQAAAdAJAcQAIAXALASQATAhAdAUQASAOAVAJQAkAOAjAAQAUABAYgGQAkgIAdgVQATgOAPgRQAYgcALgiQAHgUADgYIAAgOQAAgdgIgcQgHgVgMgUQgTgfgegWQgSgOgVgJQgigOgkAAIgDAAQgTAAgWAFg");
	this.shape_27.setTransform(595.3006,169.4756);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#413B2F").s().p("AgCDgQhcAAhBhDQhBhCABhcQABhdBChBQBChBBcABQBdABBBBCQBBBCgBBcQgBBdhCBBQhCBAhbAAIgCAAgAiViXQhAA+gBBYQAABYA+BAQA+A/BZABQBXABBAg/QA/g+ABhYQABhYg+hAQg+g/hZgBIgCAAQhWAAg/A+g");
	this.shape_28.setTransform(595.325,169.4256);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2B5B59").s().p("AgnBFQAXgOASgRQA0gvAFhEIAAAQQgHAygfAkQgLAMgOANQgfAZgXADg");
	this.shape_29.setTransform(677.45,180.25);

	this.instance_14 = new lib.Path_1_36();
	this.instance_14.setTransform(656.25,156.7,1,1,0,0,0,9.3,5.7);

	this.instance_15 = new lib.Path_64();
	this.instance_15.setTransform(669.3,159.05,1,1,0,0,0,2.2,5.4);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.Path_1_35();
	this.instance_16.setTransform(675.15,164,1,1,0,0,0,5,3);
	this.instance_16.alpha = 0.5;

	this.instance_17 = new lib.Path_2_19();
	this.instance_17.setTransform(676.65,171.55,1,1,0,0,0,5.8,0.7);
	this.instance_17.alpha = 0.5;

	this.instance_18 = new lib.Path_3_16();
	this.instance_18.setTransform(673.2,178.45,1,1,0,0,0,4.3,4);
	this.instance_18.alpha = 0.5;

	this.instance_19 = new lib.Path_4_11();
	this.instance_19.setTransform(667,182.35,1,1,0,0,0,1.3,5.7);
	this.instance_19.alpha = 0.5;

	this.instance_20 = new lib.Path_5_14();
	this.instance_20.setTransform(659.35,181.45,1,1,0,0,0,2.5,5.3);
	this.instance_20.alpha = 0.5;

	this.instance_21 = new lib.Path_6_13();
	this.instance_21.setTransform(653.8,176.1,1,1,0,0,0,5.1,2.9);
	this.instance_21.alpha = 0.5;

	this.instance_22 = new lib.Path_7_12();
	this.instance_22.setTransform(652.05,168.75,1,1,0,0,0,5.8,0.5);
	this.instance_22.alpha = 0.5;

	this.instance_23 = new lib.Path_8_10();
	this.instance_23.setTransform(655.1,161.75,1,1,0,0,0,4.4,3.9);
	this.instance_23.alpha = 0.5;

	this.instance_24 = new lib.Path_9_9();
	this.instance_24.setTransform(661.85,157.95,1,1,0,0,0,1.3,5.7);
	this.instance_24.alpha = 0.5;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DA3539").s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAQAAAKALQALALAAAOQgBAQgKAKQgLALgPAAQgPAAgKgLg");
	this.shape_30.setTransform(664.3739,170.15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#298E8C").s().p("AgmAmQgQgQAAgWQABgWAQgQQAQgQAVAAQAXAAAQARQAQAQAAAVQgBAXgQAQQgQAQgWAAQgWgBgQgQg");
	this.shape_31.setTransform(664.3742,170.1742);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C4C79").s().p("AhYAHICxg3IifBhQgLgTgHgXg");
	this.shape_32.setTransform(655.425,175.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4660A7").s().p("Ag3BAIBviVIhICsQgVgKgSgNg");
	this.shape_33.setTransform(658.775,178.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4660A7").s().p("AhGhLICNB5QgNAPgUAQg");
	this.shape_34.setTransform(671.45,177.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3C4C79").s().p("AgUhdIAqC2QgUAFgXAAg");
	this.shape_35.setTransform(666.425,179.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4660A7").s().p("AhcAOQACgWAHgVICwA7g");
	this.shape_36.setTransform(655.025,167.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4660A7").s().p("ABHgvQANAVAFATIiyA4g");
	this.shape_37.setTransform(673.3,165.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4660A7").s().p("AgVhXQAWgGAVABIgCC6g");
	this.shape_38.setTransform(662.325,160.7979);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3C4C79").s().p("AhGgtQAOgRATgNIBsCXg");
	this.shape_39.setTransform(657.275,162.525);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3C4C79").s().p("AAQhVQAYAKAQAMIhvCVg");
	this.shape_40.setTransform(669.95,161.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3C4C79").s().p("AhdgdIC6AQQgBAVgIAWg");
	this.shape_41.setTransform(673.7,173.15);

	this.instance_25 = new lib.CompoundPath_13();
	this.instance_25.setTransform(664.4,170.25,1,1,0,0,0,21.1,21.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#298E8C").s().p("AgBDWQhZAAg+hAQg+g/ABhYQABhZA/g+QA/g+BYABQBZABA+A/QA+A/gBBYQAABZhAA+Qg+A9hXAAIgCAAgAgqi1QgkAIgeAVQgTAOgOARQgYAbgMAjQgHAVgCAXIgBAOQAAAeAJAbQAHAXAMASQATAfAdAWQASAOAVAJQAkAOAjAAQAXAAAVgFQAjgIAfgVQAUgQANgPQAXgaANgkQAHgWACgWIAAgOQABgdgJgcQgGgUgNgVQgSgggegWQgQgMgYgKQghgOglAAIgDAAQgUAAgVAFg");
	this.shape_42.setTransform(664.375,170.175);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#413B2F").s().p("AgBDgQhdgBhBhCQhBhCABhcQABhdBChBQBChBBcABQBdABBBBCQBBBCgBBcQgBBdhCBBQhBBAhbAAIgCAAgAiViYQg/A+gBBZQgBBYA+BAQA+A/BZABQBYABA/g/QBAg+AAhYQABhYg+hAQg+g/hZgBIgCAAQhXAAg+A9g");
	this.shape_43.setTransform(664.375,170.125);

	this.instance_26 = new lib.CompoundPath_12();
	this.instance_26.setTransform(597.4,156.05,1,1,0,0,0,21.9,9);

	this.instance_27 = new lib.CompoundPath_1_1();
	this.instance_27.setTransform(666.45,156.7,1,1,0,0,0,21.9,9);

	this.instance_28 = new lib.Path_63();
	this.instance_28.setTransform(628.1,91.05,1,1,0,0,0,67.2,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4660A7").s().p("AgEAAQAAgDAEgBQAFABAAADQAAAEgFAAQgEAAAAgEg");
	this.shape_44.setTransform(630.625,94.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3B3F73").s().p("AgLALQgEgFAAgGQAAgGAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAGQAAAHgFAEQgFAFgGAAQgGAAgFgFg");
	this.shape_45.setTransform(631.075,95.45);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4660A7").s().p("AgEAAQAAgDAEgBQAFABgBADQAAAFgEAAQgEAAAAgFg");
	this.shape_46.setTransform(594.7077,94.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3B3F73").s().p("AgLALQgEgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgFg");
	this.shape_47.setTransform(595.1523,95.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4660A7").s().p("AgEAAQAAgDAEAAQAFAAAAADQAAAEgFABQgEgBAAgEg");
	this.shape_48.setTransform(612.675,94.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3B3F73").s().p("AAAAQQgGAAgFgFQgEgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgGAAIgBAAg");
	this.shape_49.setTransform(613.1023,95.2523);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4660A7").s().p("AgDAAQgBgDAEAAQAEAAABADQgBAEgEABQgEgBABgEg");
	this.shape_50.setTransform(702.45,95.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3B3F73").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_51.setTransform(702.8977,96.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4660A7").s().p("AgEAAQAAgEAEAAQAFAAgBAEQABAFgFAAQgEAAAAgFg");
	this.shape_52.setTransform(684.5,95.125);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgFQAFgEAFAAQAHAAAFAFQAEAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgFg");
	this.shape_53.setTransform(684.9477,95.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4660A7").s().p("AgDAAQAAgDADgBQAEABABADQgBAEgEABQgDgBAAgEg");
	this.shape_54.setTransform(666.55,94.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_55.setTransform(666.975,95.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4660A7").s().p("AgEAAQABgEADAAQAFAAAAAEQAAAEgFABQgDgBgBgEg");
	this.shape_56.setTransform(648.575,94.775);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgFQAFgEAFAAQAHAAAFAFQAEAEAAAGQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_57.setTransform(649.025,95.625);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4660A7").s().p("AgEAAQABgDADgBQAEABAAADQAAAEgEAAQgDAAgBgEg");
	this.shape_58.setTransform(576.75,94.05);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3B3F73").s().p("AAAAQQgFAAgGgFQgEgEAAgHQAAgGAFgFQAEgEAHAAQAGAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgGAAIgBAAg");
	this.shape_59.setTransform(577.2,94.9023);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4660A7").s().p("AgDAAQgBgEAEAAQAFAAAAAEQAAAFgFAAQgEAAABgFg");
	this.shape_60.setTransform(558.8,93.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3B3F73").s().p("AgKALQgFgEAAgHQAAgGAFgFQAFgEAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgFg");
	this.shape_61.setTransform(559.25,94.725);

	this.instance_29 = new lib.CompoundPath_2_1();
	this.instance_29.setTransform(631.8,95.45,1,1,0,0,0,79,6.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FABF2F").s().p("ArXA3QgagBgSgSQgSgSAAgZQABgZASgSQATgSAZAAIWvAPQAZAAASASQASATgBAYQAAAagSASQgSARgaAAg");
	this.shape_62.setTransform(631.75,95.4493);

	this.instance_30 = new lib.Path_2_18();
	this.instance_30.setTransform(631.6,151.5,1,1,0,0,0,68.8,2);
	this.instance_30.alpha = 0.5;

	this.instance_31 = new lib.Path_3_15();
	this.instance_31.setTransform(632.1,98.65,1,1,0,0,0,76.2,6.3);
	this.instance_31.alpha = 0.6016;

	this.instance_32 = new lib.Path_4_10();
	this.instance_32.setTransform(631.6,147.95,1,1,0,0,0,69.7,5.7);
	this.instance_32.alpha = 0.5;

	this.instance_33 = new lib.Path_5_13();
	this.instance_33.setTransform(704,123.65,1,1,0,0,0,4.3,29.9);

	this.instance_34 = new lib.Path_6_12();
	this.instance_34.setTransform(679.05,123.4,1,1,0,0,0,6.7,29.9);

	this.instance_35 = new lib.Path_7_11();
	this.instance_35.setTransform(653.3,123.15,1,1,0,0,0,5.9,29.9);

	this.instance_36 = new lib.Path_8_9();
	this.instance_36.setTransform(626.9,122.85,1,1,0,0,0,6.3,29.9);

	this.instance_37 = new lib.Path_9_8();
	this.instance_37.setTransform(598.1,122.6,1,1,0,0,0,7,29.9);

	this.instance_38 = new lib.Path_10_4();
	this.instance_38.setTransform(570.6,122.3,1,1,0,0,0,6.8,29.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DC3356").s().p("AqxEkIhIpVIXzAPIhUJUg");
	this.shape_63.setTransform(632.1,122.95);

	this.instance_39 = new lib.CompoundPath_11();
	this.instance_39.setTransform(631.3,159,1,1,0,0,0,68.3,6.8);
	this.instance_39.alpha = 0.6016;

	this.instance_40 = new lib.Path_62();
	this.instance_40.setTransform(629.25,154.7,1,1,0,0,0,63.3,0.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#295BA2").s().p("AqqA3IABh6IVUANIgBB6g");
	this.shape_64.setTransform(631.325,158.675);

	this.instance_41 = new lib.Path_61();
	this.instance_41.setTransform(696.9,153.9,1,1,0,0,0,5.5,4.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4660A7").s().p("Ag+AuIABhcIB8ABIgBBcg");
	this.shape_65.setTransform(697.7,153.9);

	this.instance_42 = new lib.Path_60();
	this.instance_42.setTransform(566,152.6,1,1,0,0,0,5.2,4.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4660A7").s().p("AhAAuIABhcICAACIgBBbg");
	this.shape_66.setTransform(564.625,152.575);

	this.instance_43 = new lib.Path_59();
	this.instance_43.setTransform(313.85,153.1,1,1,0,0,0,27,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#625238").s().p("AgEALQgFgCgBgFQgCgEACgEQACgFAFgBQADgCAFACQAEACACAFQACADgCAFQgCAEgFACIgEABIgEgBg");
	this.shape_67.setTransform(280.9627,155.6071);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#413B2F").s().p("AgIAUQgJgEgDgIQgDgIAEgJQAEgIAIgDQAIgDAJAEQAIAEADAIQADAIgEAIQgEAJgIADQgEABgEAAQgEAAgEgCg");
	this.shape_68.setTransform(281.4826,155.8174);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#298E8C").s().p("AgNAeQgMgGgFgNQgFgMAGgMQAGgNANgEQAMgFAMAGQANAGAEANQAFAMgGAMQgGAMgNAFQgFACgGAAQgGAAgHgDg");
	this.shape_69.setTransform(281.4922,155.8078);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#625238").s().p("AgEAJQgEgCgBgEQgBgDACgEQACgEAEgBQADgBAEACQADACACAEQABADgCAEQgCAEgEABIgDAAIgEgBg");
	this.shape_70.setTransform(345.275,152.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#413B2F").s().p("AgJAUQgIgEgDgJQgDgIAEgIQAEgIAJgDQAIgDAIAEQAIAEADAJQADAIgEAIQgEAIgJADIgHABQgEAAgFgCg");
	this.shape_71.setTransform(345.725,152.8793);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#298E8C").s().p("AgOAeQgMgGgFgNQgEgMAGgNQAGgMANgFQAMgEANAGQAMAHAEANQAFAMgGAMQgHAMgNAEQgFACgFAAQgHAAgHgDg");
	this.shape_72.setTransform(345.7164,152.8664);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FABF2F").s().p("AlIAdQgCgDAAgFIgBgQQAAgLAIgBIKGgYQAEgBACAEQADADAAAFIAAAQQABAEgDAEQgCAEgDgBIqHAZIgBAAQgDAAgCgDg");
	this.shape_73.setTransform(313.0792,154.425);

	this.instance_44 = new lib.Path_58();
	this.instance_44.setTransform(416.8,168.9,1,1,0,0,0,31.3,0.4);
	this.instance_44.alpha = 0.5;

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#625238").s().p("AgFACQgCgFAGgCQAFgCACAGQACAGgGABIgCABQgDAAgCgFg");
	this.shape_74.setTransform(382.2,169.4388);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#413B2F").s().p("AgHAPQgGgEgCgGQgCgGADgGQADgGAHgCQAGgCAGADQAGAEACAGQACAGgEAGQgDAGgHACIgEABQgDAAgEgCg");
	this.shape_75.setTransform(382.45,169.5036);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#298E8C").s().p("AgLAWQgJgFgCgKQgDgJAEgJQAFgJAKgDQAJgDAJAFQAJAFADAKQADAJgFAJQgFAJgKADIgHABQgFAAgGgDg");
	this.shape_76.setTransform(382.4463,169.5134);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#625238").s().p("AgFABQgBgEAGgCQAEgBACAFQABAFgFACIgCAAQgEAAgBgFg");
	this.shape_77.setTransform(450.5334,169.8666);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#413B2F").s().p("AgHAOQgGgDgCgHQgCgFADgGQAEgGAGgCQAGgCAGAEQAGADACAHQACAFgEAGQgEAHgGABIgEABQgEAAgDgDg");
	this.shape_78.setTransform(451.3,170.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#298E8C").s().p("AgLAVQgJgFgDgKQgCgJAFgIQAFgJAKgDQAIgDAJAFQAJAFADAKQACAJgFAJQgFAJgKADIgGABQgGAAgFgEg");
	this.shape_79.setTransform(451.275,170.1104);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DA3539").s().p("AlYAKQgEAAgCgDQgDgDAAgEIABgKQAAgEACgDQADgCADAAIKxAKQAJABgBAIIAAALQAAAEgCADQgDACgEAAg");
	this.shape_80.setTransform(416.6048,169.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2B5B59").s().p("AACAmQA0gvAFhEIAAARQgHAygfAjIgZAZQgfAZgXADQAegMAegcg");
	this.shape_81.setTransform(395.3,179.55);

	this.instance_45 = new lib.Path_1_34();
	this.instance_45.setTransform(374.05,156,1,1,0,0,0,9.3,5.7);

	this.instance_46 = new lib.Path_57();
	this.instance_46.setTransform(387.1,158.35,1,1,0,0,0,2.2,5.4);
	this.instance_46.alpha = 0.5;

	this.instance_47 = new lib.Path_1_33();
	this.instance_47.setTransform(392.95,163.35,1,1,0,0,0,5,3);
	this.instance_47.alpha = 0.5;

	this.instance_48 = new lib.Path_2_17();
	this.instance_48.setTransform(394.5,170.85,1,1,0,0,0,5.8,0.7);
	this.instance_48.alpha = 0.5;

	this.instance_49 = new lib.Path_3_14();
	this.instance_49.setTransform(391.05,177.75,1,1,0,0,0,4.3,4);
	this.instance_49.alpha = 0.5;

	this.instance_50 = new lib.Path_4_9();
	this.instance_50.setTransform(384.85,181.65,1,1,0,0,0,1.3,5.7);
	this.instance_50.alpha = 0.5;

	this.instance_51 = new lib.Path_5_12();
	this.instance_51.setTransform(377.1,180.8,1,1,0,0,0,2.4,5.3);
	this.instance_51.alpha = 0.5;

	this.instance_52 = new lib.Path_6_11();
	this.instance_52.setTransform(371.55,175.45,1,1,0,0,0,5,2.9);
	this.instance_52.alpha = 0.5;

	this.instance_53 = new lib.Path_7_10();
	this.instance_53.setTransform(369.9,168,1,1,0,0,0,5.8,0.4);
	this.instance_53.alpha = 0.5;

	this.instance_54 = new lib.Path_8_8();
	this.instance_54.setTransform(372.95,161.05,1,1,0,0,0,4.4,3.9);
	this.instance_54.alpha = 0.5;

	this.instance_55 = new lib.Path_9_7();
	this.instance_55.setTransform(379.65,157.25,1,1,0,0,0,1.3,5.7);
	this.instance_55.alpha = 0.5;

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DA3539").s().p("AAAAlQgPAAgKgLQgLgLAAgPQAAgPALgKQALgLAOAAQAQAAAKALQALALAAAOQgBAQgKAKQgLALgOAAIgBAAg");
	this.shape_82.setTransform(382.2239,169.475);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#298E8C").s().p("AgmAmQgQgQABgWQAAgWAQgQQAQgQAWAAQAXABAPAQQAQAQgBAWQAAAWgQAQQgQAQgWAAQgWgBgQgQg");
	this.shape_83.setTransform(382.2,169.475);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3C4C79").s().p("AhYAIICxg4IifBgQgLgSgHgWg");
	this.shape_84.setTransform(373.275,174.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4660A7").s().p("Ag3BAIBviVIhICrQgVgJgSgNg");
	this.shape_85.setTransform(376.625,178.125);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4660A7").s().p("AhGhLICNB5QgPAQgSAOg");
	this.shape_86.setTransform(389.3,177.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3C4C79").s().p("AgVBdIABi6IAqC1QgVAGgTAAIgDgBg");
	this.shape_87.setTransform(384.275,178.8521);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4660A7").s().p("AhcAOQABgTAIgYICwA7g");
	this.shape_88.setTransform(372.875,166.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#4660A7").s().p("ABHgwQANAWAFATIiyA4g");
	this.shape_89.setTransform(391.15,164.625);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4660A7").s().p("AgVhYQAWgFAWAAIgDC7g");
	this.shape_90.setTransform(380.15,160.1229);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3C4C79").s().p("AhGgtQAPgRATgOIBrCYg");
	this.shape_91.setTransform(375.1,161.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3C4C79").s().p("AARhWQAWAKARANIhvCVg");
	this.shape_92.setTransform(387.775,160.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3C4C79").s().p("AhdgdIC6AQQgCAXgHAUg");
	this.shape_93.setTransform(391.55,172.475);

	this.instance_56 = new lib.CompoundPath_10();
	this.instance_56.setTransform(382.25,169.55,1,1,0,0,0,21.1,21.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#298E8C").s().p("AgBDWQhZAAg+hAQg+g/ABhYQABhZA/g+QA/g+BYABQBZABA+A/QA+A/gBBYQgBBZg/A+Qg+A9hXAAIgCAAgAgqi1QgiAIggAVQgSAOgPARQgXAbgNAjQgHAYgCAUIgBAOQAAAeAJAbQAHAWAMATQATAhAdAUQASAOAVAJQAkAOAjAAQAUABAYgGQAjgIAfgVQASgOAPgRQAYgcALgiQAHgUADgYIAAgOQAAgdgIgcQgGgUgNgVQgUgggdgVQgQgNgXgKQgigOgkAAIgDAAQgUAAgVAFg");
	this.shape_94.setTransform(382.225,169.4756);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#413B2F").s().p("AgBDgQhdAAhBhDQhBhCABhcQABhdBChBQBChBBcABQBdABBBBCQBBBCgBBcQgBBdhCBBQhCBAhaAAIgCAAgAiViXQg/A+gBBYQgBBYA+BAQA+A/BZABQBYABA/g/QA/g+ABhYQABhYg+hAQg+g/hZgBIgCAAQhWAAg/A+g");
	this.shape_95.setTransform(382.225,169.4256);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2B5B59").s().p("AACAmQA0gvAFhEIAAAQQgHAyggAkIgZAZQgeAZgYADQAfgLAegdg");
	this.shape_96.setTransform(464.35,180.25);

	this.instance_57 = new lib.Path_1_32();
	this.instance_57.setTransform(443.15,156.7,1,1,0,0,0,9.3,5.7);

	this.instance_58 = new lib.Path_56();
	this.instance_58.setTransform(456.2,159.05,1,1,0,0,0,2.2,5.4);
	this.instance_58.alpha = 0.5;

	this.instance_59 = new lib.Path_1_31();
	this.instance_59.setTransform(462.05,164,1,1,0,0,0,5,3);
	this.instance_59.alpha = 0.5;

	this.instance_60 = new lib.Path_2_16();
	this.instance_60.setTransform(463.55,171.55,1,1,0,0,0,5.8,0.7);
	this.instance_60.alpha = 0.5;

	this.instance_61 = new lib.Path_3_13();
	this.instance_61.setTransform(460.15,178.45,1,1,0,0,0,4.3,4);
	this.instance_61.alpha = 0.5;

	this.instance_62 = new lib.Path_4_8();
	this.instance_62.setTransform(453.9,182.35,1,1,0,0,0,1.3,5.7);
	this.instance_62.alpha = 0.5;

	this.instance_63 = new lib.Path_5_11();
	this.instance_63.setTransform(446.25,181.45,1,1,0,0,0,2.5,5.3);
	this.instance_63.alpha = 0.5;

	this.instance_64 = new lib.Path_6_10();
	this.instance_64.setTransform(440.7,176.1,1,1,0,0,0,5.1,2.9);
	this.instance_64.alpha = 0.5;

	this.instance_65 = new lib.Path_7_9();
	this.instance_65.setTransform(438.95,168.75,1,1,0,0,0,5.8,0.5);
	this.instance_65.alpha = 0.5;

	this.instance_66 = new lib.Path_8_7();
	this.instance_66.setTransform(442,161.75,1,1,0,0,0,4.4,3.9);
	this.instance_66.alpha = 0.5;

	this.instance_67 = new lib.Path_9_6();
	this.instance_67.setTransform(448.75,157.95,1,1,0,0,0,1.3,5.7);
	this.instance_67.alpha = 0.5;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA3539").s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAQAAAKALQALALAAAOQAAAQgLAKQgLALgPAAQgPAAgKgLg");
	this.shape_97.setTransform(451.275,170.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#298E8C").s().p("AgmAmQgQgQAAgWQABgWAQgQQAQgQAWAAQAWAAAQARQAQAQAAAVQgBAXgQAQQgQAQgWAAQgWgBgQgQg");
	this.shape_98.setTransform(451.275,170.1742);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3C4C79").s().p("AhZAHICyg3IifBhQgLgTgIgXg");
	this.shape_99.setTransform(442.35,175.025);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#4660A7").s().p("Ag3BAIBviVIhICsQgWgKgRgNg");
	this.shape_100.setTransform(445.7,178.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#4660A7").s().p("AhGhLICNB5QgNAPgUAQg");
	this.shape_101.setTransform(458.375,177.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3C4C79").s().p("AgUhdIAqC2QgUAFgYAAg");
	this.shape_102.setTransform(453.35,179.525);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#4660A7").s().p("AhdAOQADgWAGgVICxA7g");
	this.shape_103.setTransform(441.95,167.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#4660A7").s().p("ABHgvQAMAVAGATIixA4g");
	this.shape_104.setTransform(460.225,165.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#4660A7").s().p("AgVhXQAWgGAVABIgBC6g");
	this.shape_105.setTransform(449.225,160.7979);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3C4C79").s().p("AhGgtQAOgRATgNIBsCXg");
	this.shape_106.setTransform(444.2,162.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3C4C79").s().p("AAQhVQAXAJARANIhvCVg");
	this.shape_107.setTransform(456.875,161.525);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3C4C79").s().p("AhcgdIC5AQQgCAVgHAWg");
	this.shape_108.setTransform(460.625,173.15);

	this.instance_68 = new lib.CompoundPath_9();
	this.instance_68.setTransform(451.35,170.25,1,1,0,0,0,21.1,21.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#298E8C").s().p("AgBDWQhZAAg+hAQg+g/ABhYQABhZA/g+QA/g+BYABQBZABA+A/QA+A/gBBYQAABZhAA+Qg+A9hXAAIgCAAgAgqi1QgkAIgeAVQgTAOgOARQgYAbgMAjQgHAVgCAXIAAAOQgBAdAJAcQAHAXAMASQATAfAdAWQARANAWAKQAkAOAjAAQAYAAAUgFQAjgIAfgVQAUgQANgPQAXgaANgkQAHgWACgWIAAgOQABgdgJgcQgGgUgNgVQgSgggegWQgRgMgXgKQghgOglAAIgDAAQgUAAgVAFg");
	this.shape_109.setTransform(451.2756,170.175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#413B2F").s().p("AgBDgQhdgBhBhCQhBhCABhcQABhdBChBQBChBBcABQBdABBBBCQBBBCgBBcQAABdhDBBQhBBAhbAAIgCAAgAiViYQg/A+gBBZQgBBYA+BAQA+A/BZABQBYABA/g/QBAg+AAhYQABhYg+hAQg+g/hZgBIgCAAQhXAAg+A9g");
	this.shape_110.setTransform(451.275,170.125);

	this.instance_69 = new lib.CompoundPath_8();
	this.instance_69.setTransform(384.3,156.05,1,1,0,0,0,21.9,9);

	this.instance_70 = new lib.CompoundPath_1_0();
	this.instance_70.setTransform(453.35,156.7,1,1,0,0,0,21.9,9);

	this.instance_71 = new lib.Path_55();
	this.instance_71.setTransform(415,91.05,1,1,0,0,0,67.2,1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#4660A7").s().p("AgEAAQABgDADgBQAFABgBADQABAEgFAAQgDAAgBgEg");
	this.shape_111.setTransform(417.55,94.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAHAAAFAFQAEAEAAAGQAAAGgFAFQgEAFgHAAQgGAAgEgFg");
	this.shape_112.setTransform(417.975,95.45);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#4660A7").s().p("AgEAAQABgDADgBQAFABAAADQgBAFgEAAQgEAAAAgFg");
	this.shape_113.setTransform(381.625,94.225);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3B3F73").s().p("AgLALQgEgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgFAEgGAAQgGAAgFgFg");
	this.shape_114.setTransform(382.075,95.075);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#4660A7").s().p("AgCADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAgDADAAQAFAAAAADQAAAEgFABIgCgCg");
	this.shape_115.setTransform(399.5938,94.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3B3F73").s().p("AAAAQQgGAAgFgFQgEgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgGAAIgBAAg");
	this.shape_116.setTransform(400.025,95.2523);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#4660A7").s().p("AgEAAQABgDADAAQAEAAABADQgBAEgEABQgDgBgBgEg");
	this.shape_117.setTransform(489.35,95.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3B3F73").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_118.setTransform(489.7977,96.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#4660A7").s().p("AgDAAQgBgEAEAAQAFAAAAAEQAAAFgFAAQgEAAABgFg");
	this.shape_119.setTransform(471.4,95.125);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3B3F73").s().p("AgKALQgFgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgFAEgGAAQgGAAgEgFg");
	this.shape_120.setTransform(471.85,95.975);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#4660A7").s().p("AgEAAQABgDADgBQAEABAAADQAAAEgEABQgDgBgBgEg");
	this.shape_121.setTransform(453.45,94.95);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgEQAFgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_122.setTransform(453.8977,95.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#4660A7").s().p("AgDAAQgBgEAEAAQAFAAAAAEQAAAEgFABQgEgBABgEg");
	this.shape_123.setTransform(435.5,94.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3B3F73").s().p("AgKALQgFgFAAgGQAAgGAFgFQAFgEAFAAQAHAAAFAFQAEAEAAAGQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_124.setTransform(435.925,95.625);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4660A7").s().p("AgEAAQAAgDAEgBQAFABgBADQABAEgFAAQgEAAAAgEg");
	this.shape_125.setTransform(363.65,94.05);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3B3F73").s().p("AAAAQQgGAAgFgFQgEgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAFgGAAIgBAAg");
	this.shape_126.setTransform(364.1023,94.9023);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#4660A7").s().p("AgDAAQAAgEADAAQAFAAAAAEQgBAFgEAAQgDAAAAgFg");
	this.shape_127.setTransform(345.7,93.875);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3B3F73").s().p("AgLALQgEgEAAgHQAAgGAFgFQAFgEAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgFgFg");
	this.shape_128.setTransform(346.15,94.725);

	this.instance_72 = new lib.CompoundPath_2_0();
	this.instance_72.setTransform(418.7,95.45,1,1,0,0,0,79,6.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FABF2F").s().p("ArXA3QgagBgSgSQgSgSAAgZQABgZASgSQASgSAaAAIWvAPQAZAAASASQASATAAAYQAAAagSASQgTARgZAAg");
	this.shape_129.setTransform(418.65,95.4493);

	this.instance_73 = new lib.Path_2_15();
	this.instance_73.setTransform(418.5,151.5,1,1,0,0,0,68.8,2);
	this.instance_73.alpha = 0.5;

	this.instance_74 = new lib.Path_3_12();
	this.instance_74.setTransform(419,98.65,1,1,0,0,0,76.2,6.3);
	this.instance_74.alpha = 0.6016;

	this.instance_75 = new lib.Path_4_7();
	this.instance_75.setTransform(418.5,147.95,1,1,0,0,0,69.7,5.7);
	this.instance_75.alpha = 0.5;

	this.instance_76 = new lib.Path_5_10();
	this.instance_76.setTransform(490.9,123.65,1,1,0,0,0,4.3,29.9);

	this.instance_77 = new lib.Path_6_9();
	this.instance_77.setTransform(465.95,123.4,1,1,0,0,0,6.7,29.9);

	this.instance_78 = new lib.Path_7_8();
	this.instance_78.setTransform(440.25,123.15,1,1,0,0,0,5.9,29.9);

	this.instance_79 = new lib.Path_8_6();
	this.instance_79.setTransform(413.8,122.85,1,1,0,0,0,6.3,29.9);

	this.instance_80 = new lib.Path_9_5();
	this.instance_80.setTransform(384.95,122.6,1,1,0,0,0,6.9,29.9);

	this.instance_81 = new lib.Path_10_3();
	this.instance_81.setTransform(357.5,122.3,1,1,0,0,0,6.8,29.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DC3356").s().p("AqxEkIhIpVIXzAPIhUJUg");
	this.shape_130.setTransform(419,122.95);

	this.instance_82 = new lib.CompoundPath_7();
	this.instance_82.setTransform(418.2,159,1,1,0,0,0,68.3,6.8);
	this.instance_82.alpha = 0.6016;

	this.instance_83 = new lib.Path_54();
	this.instance_83.setTransform(416.15,154.7,1,1,0,0,0,63.3,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#295BA2").s().p("AqqA3IABh6IVUANIgBB6g");
	this.shape_131.setTransform(418.225,158.675);

	this.instance_84 = new lib.Path_53();
	this.instance_84.setTransform(483.8,153.9,1,1,0,0,0,5.5,4.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#4660A7").s().p("Ag+AuIABhcIB8ABIgBBcg");
	this.shape_132.setTransform(484.6,153.9);

	this.instance_85 = new lib.Path_52();
	this.instance_85.setTransform(352.9,152.6,1,1,0,0,0,5.2,4.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4660A7").s().p("AhAAuIABhcICAACIgBBbg");
	this.shape_133.setTransform(351.525,152.575);

	this.instance_86 = new lib.Group_0();
	this.instance_86.setTransform(179.05,12.9,1,1,0,0,0,6.2,8.1);
	this.instance_86.alpha = 0.3984;

	this.instance_87 = new lib.Group_1_0();
	this.instance_87.setTransform(190.15,12.75,1,1,0,0,0,17.3,8.1);
	this.instance_87.alpha = 0.3984;

	this.instance_88 = new lib.Group_2_0();
	this.instance_88.setTransform(264.35,12.45,1,1,0,0,0,12.7,9.8);
	this.instance_88.alpha = 0.5;

	this.instance_89 = new lib.Group_3();
	this.instance_89.setTransform(222.6,12.75,1,1,0,0,0,54.5,10.1);
	this.instance_89.alpha = 0.5;

	this.instance_90 = new lib.Path_51();
	this.instance_90.setTransform(185.95,159.45,1,1,0,0,0,23,0.4);
	this.instance_90.alpha = 0.5;

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#625238").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAFAAAEAEQADAEAAAEQABAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_134.setTransform(155.8528,164.325);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#413B2F").s().p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgQAAgNgMg");
	this.shape_135.setTransform(157.7491,166.125);

	this.instance_91 = new lib.Path_1_30();
	this.instance_91.setTransform(157.7,166.05,1,1,0,0,0,5.1,5.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FEE728").s().p("AgsAuQgTgTAAgbQAAgZASgTQATgTAaAAQAaAAATATQATASAAAaQAAAagTATQgSATgbAAIAAAAQgaAAgSgSg");
	this.shape_136.setTransform(157.75,166.125);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#625238").s().p("AgIAJQgDgEgBgFQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEADQgEAFgFAAQgEAAgEgEg");
	this.shape_137.setTransform(211.525,164.05);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#413B2F").s().p("AgdAfQgNgNAAgSQAAgRANgMQAMgNARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgQAAgNgMg");
	this.shape_138.setTransform(213.3491,165.825);

	this.instance_92 = new lib.Path_2_14();
	this.instance_92.setTransform(213.3,165.75,1,1,0,0,0,5.1,5.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FEE728").s().p("AgsAuQgTgTAAgbQAAgZATgTQASgTAaAAQAaAAATATQATASAAAaQAAAagSATQgUATgaAAIAAAAQgaAAgSgSg");
	this.shape_139.setTransform(213.35,165.825);

	this.instance_93 = new lib.Path_1_29();
	this.instance_93.setTransform(185.4,173.1,1,1,0,0,0,31.4,0.6);

	this.instance_94 = new lib.Path_2_13();
	this.instance_94.setTransform(185.45,169.95,1,1,0,0,0,35.4,3.7);

	this.instance_95 = new lib.Path_3_11();
	this.instance_95.setTransform(185.4,160.55,1,1,0,0,0,34.6,2.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DA3539").s().p("AlLA3QgWgWgBgfQABgeAVgXQAVgWAfAAIIxgDQAeAAAWAWQAVAWAAAfQAAAegVAXQgVAWgfAAIowADQgfAAgVgWg");
	this.shape_140.setTransform(185.45,165.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#2B5B59").s().p("AADAtQA8g4AFhRIAAAVQgIA6gkArIgcAdQgkAegbAEQAkgOAigig");
	this.shape_141.setTransform(173.2125,177.575);

	this.instance_96 = new lib.Path_1_28();
	this.instance_96.setTransform(148,150.5,1,1,0,0,0,10.8,6.8);

	this.instance_97 = new lib.Path_50();
	this.instance_97.setTransform(163.3,153.05,1,1,0,0,0,2.5,6.4);
	this.instance_97.alpha = 0.5;

	this.instance_98 = new lib.Path_1_27();
	this.instance_98.setTransform(170.3,158.7,1,1,0,0,0,5.9,3.6);
	this.instance_98.alpha = 0.5;

	this.instance_99 = new lib.Path_2_12();
	this.instance_99.setTransform(172.15,167.55,1,1,0,0,0,6.8,0.8);
	this.instance_99.alpha = 0.5;

	this.instance_100 = new lib.Path_3_10();
	this.instance_100.setTransform(168.25,175.55,1,1,0,0,0,5.1,4.5);
	this.instance_100.alpha = 0.5;

	this.instance_101 = new lib.Path_4_6();
	this.instance_101.setTransform(161,180.35,1,1,0,0,0,1.6,6.7);
	this.instance_101.alpha = 0.5;

	this.instance_102 = new lib.Path_5_9();
	this.instance_102.setTransform(152.05,179.45,1,1,0,0,0,2.8,6.3);
	this.instance_102.alpha = 0.5;

	this.instance_103 = new lib.Path_6_8();
	this.instance_103.setTransform(145.45,173.25,1,1,0,0,0,5.9,3.5);
	this.instance_103.alpha = 0.5;

	this.instance_104 = new lib.Path_7_7();
	this.instance_104.setTransform(143.4,164.65,1,1,0,0,0,6.9,0.5);
	this.instance_104.alpha = 0.5;

	this.instance_105 = new lib.Path_8_5();
	this.instance_105.setTransform(146.75,156.3,1,1,0,0,0,5.2,4.4);
	this.instance_105.alpha = 0.5;

	this.instance_106 = new lib.Path_9_4();
	this.instance_106.setTransform(154.55,151.9,1,1,0,0,0,1.6,6.7);
	this.instance_106.alpha = 0.5;

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#4660A7").s().p("AgdAeQgNgMAAgSQAAgRANgMQAMgNARAAQASAAANANQAMAMAAARQAAARgMANQgNANgSAAQgQAAgNgNg");
	this.shape_142.setTransform(157.7491,166.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#783874").s().p("AgsAtQgTgSAAgbQAAgZATgTQASgTAaAAQAaAAATASQATATAAAaQAAAagSATQgTATgbAAQgZAAgTgTg");
	this.shape_143.setTransform(157.7257,166.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#3C4C79").s().p("AhnAKIDPhDIi5BzQgOgXgIgZg");
	this.shape_144.setTransform(147.35,171.925);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#4660A7").s().p("Ag/BMIB/ixIhRDLQgZgLgVgPg");
	this.shape_145.setTransform(151.35,176.275);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#4660A7").s().p("AhThXICnCLQgSAVgVAPg");
	this.shape_146.setTransform(166.15,174.925);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3C4C79").s().p("AgahsIA1DTQgbAGgZABg");
	this.shape_147.setTransform(160.425,177.05);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#4660A7").s().p("AhsASQABgXAIgbIDQBBg");
	this.shape_148.setTransform(146.825,162.775);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4660A7").s().p("ABSg5QAOAWAIAZIjPBEg");
	this.shape_149.setTransform(168.15,160.275);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4660A7").s().p("AgahmQAYgGAbgBIACDbg");
	this.shape_150.setTransform(155.075,155.15);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3C4C79").s().p("AhTgzQARgUAVgQICBCvg");
	this.shape_151.setTransform(149.325,157.275);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3C4C79").s().p("AARhlQAZALAWAPIh/Cxg");
	this.shape_152.setTransform(164.15,155.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3C4C79").s().p("AhsggIDZAPQgCAcgIAWg");
	this.shape_153.setTransform(168.675,169.425);

	this.instance_107 = new lib.CompoundPath_6();
	this.instance_107.setTransform(157.7,166.1,1,1,0,0,0,24.6,24.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#298E8C").s().p("AiwCyQhJhJgBhoQAAhnBIhJQBKhKBogBQBnAABJBIQBKBKABBoQAABnhJBKQhJBJhoABIgBAAQhmAAhKhJgAAAjaQgcAAgZAGQgpALgjAZQgVARgSATQgaAhgOAqQgIAbgBAYIgBAPQABAlAKAfQAIAYAOAXQAYAlAiAZQAVAPAZALQAqAQAogBQAZAAAbgGQAqgKAigaQAVgPASgVQAcgiAMgpQAIgWACgdIABgPQAAgigLgiQgIgZgOgXQgXgjgjgaQgWgPgZgLQgogPgoAAIgBAAg");
	this.shape_154.setTransform(157.75,166.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#413B2F").s().p("Ai3C7QhNhNgBhsQgBhsBNhNQBMhNBtgBQBsgBBNBNQBNBMAABtQABBrhMBOQhNBNhsAAIgCAAQhrAAhMhLgAAAj5QhoABhJBKQhJBJABBnQAABoBKBJQBKBJBmgBQBoAABJhKQBJhKAAhnQgBhohKhJQhJhIhnAAIAAAAg");
	this.shape_155.setTransform(157.7255,166.0255);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2B5B59").s().p("AADAtQA8g4AFhRIAAAVQgIA6gkArIgdAdQgjAegbAEQAkgOAigig");
	this.shape_156.setTransform(229.2125,177.275);

	this.instance_108 = new lib.Path_1_26();
	this.instance_108.setTransform(204,150.2,1,1,0,0,0,10.8,6.8);

	this.instance_109 = new lib.Path_49();
	this.instance_109.setTransform(219.3,152.75,1,1,0,0,0,2.5,6.4);
	this.instance_109.alpha = 0.5;

	this.instance_110 = new lib.Path_1_25();
	this.instance_110.setTransform(226.3,158.4,1,1,0,0,0,5.9,3.6);
	this.instance_110.alpha = 0.5;

	this.instance_111 = new lib.Path_2_11();
	this.instance_111.setTransform(228.15,167.25,1,1,0,0,0,6.8,0.8);
	this.instance_111.alpha = 0.5;

	this.instance_112 = new lib.Path_3_9();
	this.instance_112.setTransform(224.2,175.25,1,1,0,0,0,5.1,4.5);
	this.instance_112.alpha = 0.5;

	this.instance_113 = new lib.Path_4_5();
	this.instance_113.setTransform(217,180.05,1,1,0,0,0,1.6,6.7);
	this.instance_113.alpha = 0.5;

	this.instance_114 = new lib.Path_5_8();
	this.instance_114.setTransform(208.05,179.15,1,1,0,0,0,2.8,6.3);
	this.instance_114.alpha = 0.5;

	this.instance_115 = new lib.Path_6_7();
	this.instance_115.setTransform(201.45,172.95,1,1,0,0,0,5.9,3.5);
	this.instance_115.alpha = 0.5;

	this.instance_116 = new lib.Path_7_6();
	this.instance_116.setTransform(199.3,164.35,1,1,0,0,0,6.8,0.5);
	this.instance_116.alpha = 0.5;

	this.instance_117 = new lib.Path_8_4();
	this.instance_117.setTransform(202.75,156,1,1,0,0,0,5.2,4.4);
	this.instance_117.alpha = 0.5;

	this.instance_118 = new lib.Path_9_3();
	this.instance_118.setTransform(210.6,151.6,1,1,0,0,0,1.7,6.7);
	this.instance_118.alpha = 0.5;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4660A7").s().p("AgdAeQgNgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAARgMANQgNANgSAAQgRAAgMgNg");
	this.shape_157.setTransform(213.725,165.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#783874").s().p("AgsAuQgTgUAAgZQAAgaATgTQASgSAagBQAaAAATATQATASAAAaQAAAagSATQgTATgbAAQgZAAgTgSg");
	this.shape_158.setTransform(213.725,165.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3C4C79").s().p("AhnAKIDPhDIi5BzQgOgZgIgXg");
	this.shape_159.setTransform(203.3,171.625);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4660A7").s().p("Ag/BMIB/ixIhRDLQgZgLgVgPg");
	this.shape_160.setTransform(207.325,175.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#4660A7").s().p("AhThXICnCLQgRAUgVAQg");
	this.shape_161.setTransform(222.125,174.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3C4C79").s().p("AgahtIA1DUQgbAHgYAAg");
	this.shape_162.setTransform(216.375,176.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#4660A7").s().p("AhsASQACgbAIgXIDPBBg");
	this.shape_163.setTransform(202.775,162.475);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#4660A7").s().p("ABSg5QANAWAJAaIjPBDg");
	this.shape_164.setTransform(224.125,159.975);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#4660A7").s().p("AgahmQAbgGAZAAIABDZg");
	this.shape_165.setTransform(211.025,154.85);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3C4C79").s().p("AhTgzQASgVAUgPICBCvg");
	this.shape_166.setTransform(205.3,156.975);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3C4C79").s().p("AAShlQAXAJAXARIh/Cxg");
	this.shape_167.setTransform(220.1,155.625);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#3C4C79").s().p("AhtggIDbAPQgDAYgIAag");
	this.shape_168.setTransform(224.65,169.125);

	this.instance_119 = new lib.CompoundPath_5();
	this.instance_119.setTransform(213.7,165.85,1,1,0,0,0,24.6,24.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#298E8C").s().p("AivCyQhKhJgBhnQAAhoBJhJQBJhKBoAAQBmgBBKBJQBKBJABBoQAABmhJBKQhJBKhoABIgBAAQhmgBhJhIgAAAjaQgZAAgcAGQgpALgjAZQgUAQgSAUQgcAigNAoQgHAXgDAdIAAAPQAAAjALAgQAHAYAPAZQAXAjAjAaQAVAPAZAKQAoAQAqAAQAZAAAbgHQAqgKAjgaQAVgQARgUQAcghANgpQAIgaACgZIAAgPQgBglgKgfQgJgZgNgWQgYgmgigYQgXgQgXgKQgogPgpAAIgBAAg");
	this.shape_169.setTransform(213.725,165.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#413B2F").s().p("Ai3C7QhNhNgBhsQgBhsBNhNQBMhNBtgBQBrgBBNBNQBOBMAABtQABBshNBNQhMBNhtAAIgCAAQhqAAhMhLgAAAj5QhoABhJBKQhJBJAABnQABBoBKBJQBJBJBngBQBoAABJhKQBJhKAAhnQgBhnhKhJQhJhJhnAAIAAAAg");
	this.shape_170.setTransform(213.725,165.7255);

	this.instance_120 = new lib.CompoundPath_4();
	this.instance_120.setTransform(187.1,157.4,1,1,0,0,0,54.2,17.9);

	this.instance_121 = new lib.Path_48();
	this.instance_121.setTransform(95.2,175.5,1,1,0,0,0,14.8,0.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#625238").s().p("AgFACQgCgGAGgBQAGgCABAGQACAFgGACIgCABQgEAAgBgFg");
	this.shape_171.setTransform(77.1235,175.9735);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#413B2F").s().p("AgFALQgEgCgCgFQgBgEACgEQACgFAFgCQAEgBAFACQAEACACAFQABAEgCAFQgDAEgEACIgEAAQgCAAgDgBg");
	this.shape_172.setTransform(77.425,176.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#298E8C").s().p("AgIAQQgGgEgDgHQgBgGADgHQADgGAIgDQAGgCAGAEQAIADABAHQACAGgDAHQgEAHgGACIgGABQgDAAgFgCg");
	this.shape_173.setTransform(77.4,176.1117);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#625238").s().p("AgFACIABgEQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAFgCABAFQACAFgGACIgBAAQgDAAgCgEg");
	this.shape_174.setTransform(112.4667,175.791);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#413B2F").s().p("AgFALQgFgCgBgFQgBgEACgFQACgEAFgCQAEgBAFACQAEADACAFQABAEgCAEQgDAFgFABIgDAAQgCAAgDgBg");
	this.shape_175.setTransform(112.7024,175.825);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#298E8C").s().p("AgIAQQgGgEgCgHQgDgGAEgHQAEgGAHgDQAGgBAHADQAHAEACAHQACAGgEAGQgEAHgHACIgFABQgDAAgFgCg");
	this.shape_176.setTransform(112.6883,175.85);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FABF2F").s().p("AixALQgEAAAAgHIAAgHQAAgHAEAAIFjAAQAEAAAAAHIAAAIQAAAGgEAAg");
	this.shape_177.setTransform(94.775,176);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2B5B59").s().p("AACAbQAlgiAEgxIAAAKQgFAlgXAbIgRASQgXATgRACQAXgIAVgWg");
	this.shape_178.setTransform(87.1875,183.3625);

	this.instance_122 = new lib.Path_1_24();
	this.instance_122.setTransform(71.25,166.15,1,1,0,0,0,6.8,4.3);

	this.instance_123 = new lib.Path_47();
	this.instance_123.setTransform(80.95,167.7,1,1,0,0,0,1.6,4);
	this.instance_123.alpha = 0.5;

	this.instance_124 = new lib.Path_1_23();
	this.instance_124.setTransform(85.3,171.35,1,1,0,0,0,3.7,2.3);
	this.instance_124.alpha = 0.5;

	this.instance_125 = new lib.Path_2_10();
	this.instance_125.setTransform(86.5,176.95,1,1,0,0,0,4.3,0.5);
	this.instance_125.alpha = 0.5;

	this.instance_126 = new lib.Path_3_8();
	this.instance_126.setTransform(84,182.05,1,1,0,0,0,3.2,2.9);
	this.instance_126.alpha = 0.5;

	this.instance_127 = new lib.Path_4_4();
	this.instance_127.setTransform(79.45,185,1,1,0,0,0,1,4.2);
	this.instance_127.alpha = 0.5;

	this.instance_128 = new lib.Path_5_7();
	this.instance_128.setTransform(73.75,184.5,1,1,0,0,0,1.7,4);
	this.instance_128.alpha = 0.5;

	this.instance_129 = new lib.Path_6_6();
	this.instance_129.setTransform(69.65,180.5,1,1,0,0,0,3.7,2.2);
	this.instance_129.alpha = 0.5;

	this.instance_130 = new lib.Path_7_5();
	this.instance_130.setTransform(68.3,175.1,1,1,0,0,0,4.3,0.3);
	this.instance_130.alpha = 0.5;

	this.instance_131 = new lib.Path_8_3();
	this.instance_131.setTransform(70.45,169.85,1,1,0,0,0,3.3,2.8);
	this.instance_131.alpha = 0.5;

	this.instance_132 = new lib.Path_9_2();
	this.instance_132.setTransform(75.45,167,1,1,0,0,0,1.1,4.2);
	this.instance_132.alpha = 0.5;

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FABF2F").s().p("AgSATQgIgIAAgLQAAgKAHgIQAJgIAKAAQALgBAIAJQAIAHAAALQABALgJAIQgHAIgMAAIAAAAQgKAAgIgIg");
	this.shape_179.setTransform(77.4,176);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#298E8C").s().p("AgZAaQgKgLgBgPQAAgOALgLQALgLAOAAQAPAAALALQAKAKAAAPQABAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_180.setTransform(77.4,175.975);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#2D7270").s().p("AgcAdQgLgMAAgRQgBgPAMgMQAMgMAPAAQgIAAAUAMQAdARABAKQgBAQgMAMQgLANgRAAQgPAAgNgMg");
	this.shape_181.setTransform(77.4,176);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3C4C79").s().p("AhBAHICDgrIh0BJQgJgOgGgQg");
	this.shape_182.setTransform(70.825,179.675);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#4660A7").s().p("AgnAwIBQhvIgzB/QgQgGgNgKg");
	this.shape_183.setTransform(73.35,182.425);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#4660A7").s().p("Ag0g3IBpBYQgLANgNAKg");
	this.shape_184.setTransform(82.725,181.575);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#3C4C79").s().p("AgQhEIAhCFQgRAEgPAAg");
	this.shape_185.setTransform(79.1,182.925);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#4660A7").s().p("AhEALQAAgMAGgTICDApg");
	this.shape_186.setTransform(70.5,173.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#4660A7").s().p("AA0gkQAJARAFANIiDArg");
	this.shape_187.setTransform(83.975,172.325);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4660A7").s().p("AgQhAQARgEAPAAIABCJg");
	this.shape_188.setTransform(75.7,169.075);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#3C4C79").s().p("Ag0ggQAMgOAMgJIBRBvg");
	this.shape_189.setTransform(72.1,170.425);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#3C4C79").s().p("AALg/QAQAGAOAKIhQBvg");
	this.shape_190.setTransform(81.45,169.575);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#3C4C79").s().p("AhEgUICJAJQAAAQgGAQg");
	this.shape_191.setTransform(84.3,178.1);

	this.instance_133 = new lib.CompoundPath_3();
	this.instance_133.setTransform(77.45,176.1,1,1,0,0,0,15.6,15.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#298E8C").s().p("AhuBxQgvgvAAhBQgBhBAvguQAtgvBCgBQBBAAAvAvQAuAuABBBQAABBguAuQguAvhCABIgBAAQhAAAgugugAghiGQgZAHgXARQgMAIgMAOQgSAWgIAZQgGATAAANIAAAJQgBAWAIAWQAFAQAJANQAOAYAWAQQAOAJAQAGQAYAKAbAAQAPAAASgEQAagGAWgRQANgJALgNQASgWAIgZQAGgQAAgRIABgJQgBgWgGgVQgFgNgKgQQgPgYgVgPQgOgLgQgFQgYgKgbAAQgPAAgSADg");
	this.shape_192.setTransform(77.4,176);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#413B2F").s().p("Ah0B2QgwgxAAhEQgBhEAwgxQAxgwBEgBQBEAAAwAwQAyAwAABFQAABEgwAxQgxAwhEABIgBAAQhDAAgxgwgAAAidQhCAAgtAvQgvAvABBAQAABCAvAuQAuAuBBAAQBCgBAuguQAugvAAhBQgBhBguguQgvguhBAAIAAAAg");
	this.shape_193.setTransform(77.4,175.975);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2B5B59").s().p("AACAeQAmglADg0IAAAPQgFAlgXAbIgSATQgWASgRADQAWgJAWgVg");
	this.shape_194.setTransform(122.8,182.95);

	this.instance_134 = new lib.Path_1_22();
	this.instance_134.setTransform(106.85,165.95,1,1,0,0,0,6.8,4.3);

	this.instance_135 = new lib.Path_46();
	this.instance_135.setTransform(116.55,167.55,1,1,0,0,0,1.6,4);
	this.instance_135.alpha = 0.5;

	this.instance_136 = new lib.Path_1_21();
	this.instance_136.setTransform(120.85,171.15,1,1,0,0,0,3.6,2.3);
	this.instance_136.alpha = 0.5;

	this.instance_137 = new lib.Path_2_9();
	this.instance_137.setTransform(122.1,176.75,1,1,0,0,0,4.3,0.5);
	this.instance_137.alpha = 0.5;

	this.instance_138 = new lib.Path_3_7();
	this.instance_138.setTransform(119.6,181.85,1,1,0,0,0,3.2,2.9);
	this.instance_138.alpha = 0.5;

	this.instance_139 = new lib.Path_4_3();
	this.instance_139.setTransform(115.05,184.8,1,1,0,0,0,1,4.2);
	this.instance_139.alpha = 0.5;

	this.instance_140 = new lib.Path_5_6();
	this.instance_140.setTransform(109.45,184.3,1,1,0,0,0,1.8,4);
	this.instance_140.alpha = 0.5;

	this.instance_141 = new lib.Path_6_5();
	this.instance_141.setTransform(105.25,180.25,1,1,0,0,0,3.7,2.1);
	this.instance_141.alpha = 0.5;

	this.instance_142 = new lib.Path_7_4();
	this.instance_142.setTransform(103.9,174.9,1,1,0,0,0,4.3,0.3);
	this.instance_142.alpha = 0.5;

	this.instance_143 = new lib.Path_8_2();
	this.instance_143.setTransform(106.05,169.65,1,1,0,0,0,3.3,2.8);
	this.instance_143.alpha = 0.5;

	this.instance_144 = new lib.Path_9_1();
	this.instance_144.setTransform(111.05,166.8,1,1,0,0,0,1.1,4.2);
	this.instance_144.alpha = 0.5;

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FABF2F").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAHAAALQAAALgIAIQgIAIgLAAQgLAAgHgIg");
	this.shape_195.setTransform(113.025,175.825);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#298E8C").s().p("AgbAdQgMgMgBgRQAAgQANgLQALgMAQAAQARgBALAMQAMAMAAAQQAAAQgLAMQgMAMgQAAQgQAAgMgLg");
	this.shape_196.setTransform(113,175.824);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#3C4C79").s().p("AhBAHICDgrIh0BJQgKgOgFgQg");
	this.shape_197.setTransform(106.425,179.475);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#4660A7").s().p("AgoAwIBQhvIgyB/QgQgGgOgKg");
	this.shape_198.setTransform(108.95,182.225);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#4660A7").s().p("Ag0g3IBpBYQgLAOgNAJg");
	this.shape_199.setTransform(118.325,181.375);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#3C4C79").s().p("AgQhEIAhCFQgRAEgPAAg");
	this.shape_200.setTransform(114.7,182.725);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#4660A7").s().p("AhEAMQAAgNAGgTICDApg");
	this.shape_201.setTransform(106.1,173.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#4660A7").s().p("AA0gkQAIAOAGAQIiDArg");
	this.shape_202.setTransform(119.575,172.125);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#4660A7").s().p("AgQhAQANgDATgBIABCJg");
	this.shape_203.setTransform(111.325,168.875);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#3C4C79").s().p("Ag0ggQALgOANgJIBRBvg");
	this.shape_204.setTransform(107.7,170.225);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#3C4C79").s().p("AALg/QASAIALAIIhQBvg");
	this.shape_205.setTransform(117.05,169.375);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#3C4C79").s().p("AhEgUICJAKQgBAQgFAPg");
	this.shape_206.setTransform(119.9,177.9);

	this.instance_145 = new lib.CompoundPath_2();
	this.instance_145.setTransform(113.05,175.9,1,1,0,0,0,15.6,15.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#298E8C").s().p("AhvBxQgugvgBhBQAAhBAuguQAugvBCAAQBAgBAvAuQAvAuAABCQABBAguAvQgvAvhBAAIgBAAQhAAAgvgtgAghiFQgaAGgWAQQgNAJgLAOQgSAVgIAaQgGATAAANIgBAKQAAAVAHAVQAGAQAJAOQAOAYAWAPQAOAKAPAGQAZAKAbAAQAQAAARgEQAagHAWgQQANgJAMgNQARgXAIgYQAFgPABgSIAAgJQAAgWgHgVQgFgQgJgOQgOgXgWgQQgMgIgRgIQgZgKgbAAQgUABgNAEg");
	this.shape_207.setTransform(113.0003,175.825);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#413B2F").s().p("Ah0B2QgwgxgBhEQAAhEAwgxQAwgwBFgBQBDAAAxAwQAxAxABBEQAABEgwAxQgxAwhEABIgBAAQhDAAgxgwgAAAidQhCABguAuQguAvAABAQABBCAuAuQAvAuBBAAQBBgBAvguQAugvgBhBQAAhBgvguQguguhBAAIAAAAg");
	this.shape_208.setTransform(113.0247,175.775);

	this.instance_146 = new lib.Path_45();
	this.instance_146.setTransform(257.95,141.2,1,1,0,0,0,15.7,0.3);
	this.instance_146.alpha = 0.5;

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFC632").s().p("Ag+B8QgBgXgRgRQgQgQgYAAIgKABIgBiHIAKAAQAYAAARgQQAQgRAAgYIAAgHIB/AAIgBAHQAAAXARARQAQAQAYAAQAGAAAFgBIACCIIgMgBQgXAAgRAQQgRARAAAYIABAHIh/AAg");
	this.shape_209.setTransform(258,155.975);

	this.instance_147 = new lib.Path_2_8();
	this.instance_147.setTransform(258.05,155.75,1,1,0,0,0,14.2,14.1);

	this.instance_148 = new lib.Path_3_6();
	this.instance_148.setTransform(258.05,156.2,1,1,0,0,0,16.1,15.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EE3338").s().p("AioieIFQgCIABE/IlQACg");
	this.shape_210.setTransform(258,156.15);

	this.instance_149 = new lib.Path_44();
	this.instance_149.setTransform(273.7,161.7,1,1,0,0,0,2.6,8.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#4B64AC").s().p("AgqhXIBUgBIABCxIhUAAg");
	this.shape_211.setTransform(275.4,161.75);

	this.instance_150 = new lib.Path_43();
	this.instance_150.setTransform(45.3,157.5,1,1,0,0,0,13.7,0.3);

	this.instance_151 = new lib.Path_1_20();
	this.instance_151.setTransform(24.3,187.4,1,1,0,0,0,23.9,0.3);

	this.instance_152 = new lib.Path_2_7();
	this.instance_152.setTransform(56.35,172.95,1,1,0,0,0,4.1,12.4);

	this.instance_153 = new lib.Path_3_5();
	this.instance_153.setTransform(49.55,172.9,1,1,0,0,0,5.5,12.3);

	this.instance_154 = new lib.Path_4_2();
	this.instance_154.setTransform(19.15,172.9,1,1,0,0,0,12.3,12.8);

	this.instance_155 = new lib.Path_5_5();
	this.instance_155.setTransform(24.65,172.8,1,1,0,0,0,10.8,12.7);

	this.instance_156 = new lib.Path_6_4();
	this.instance_156.setTransform(33.6,172.55,1,1,0,0,0,9,12.5);

	this.instance_157 = new lib.Path_7_3();
	this.instance_157.setTransform(41.45,172.8,1,1,0,0,0,7,12.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#364B9C").s().p("AigAAIFBgCIAAADIlBACg");
	this.shape_212.setTransform(47.4,159.375);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#3A6AB1").s().p("AiggMIFBgCIAAAbIlBACg");
	this.shape_213.setTransform(47.4,158.225);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#364B9C").s().p("AkSgEIIlgBIAAAIIolADg");
	this.shape_214.setTransform(27.5,189.825);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#3A6AB1").s().p("AkSgSIIkADIABAfIolADg");
	this.shape_215.setTransform(27.5,188.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#3A6AB1").s().p("AAAibIEwgCIhlE4In6ADgAjqBxIAqAAIDekBIgTAAgAiVBxIA9AAIC4kBIgdAAgAgkBwIAwAAICSj/IgagBgAA6BwIAzgBIBzj+IgdAAgACiBvIAdAAIBWj+IgVAAg");
	this.shape_216.setTransform(32.475,174.225);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#364B9C").s().p("AAAibIEvgCIhkE4In5ADgAjqBxIAqAAIDekBIgTAAgAiVBxIA9AAIC4kBIgdAAgAgkBwIAwAAICRj/IgZgBgAA6BwIAzgBIBzj+IgdAAgACiBvIAdAAIBWj+IgVAAg");
	this.shape_217.setTransform(33.15,174.225);

	this.instance_158 = new lib.Path_42();
	this.instance_158.setTransform(42.75,113.2,1,1,0,0,0,0.7,43.8);
	this.instance_158.alpha = 0.5;

	this.instance_159 = new lib.Path_1_19();
	this.instance_159.setTransform(62,113.1,1,1,0,0,0,0.5,43.8);
	this.instance_159.alpha = 0.6992;

	this.instance_160 = new lib.Path_2_6();
	this.instance_160.setTransform(59,109.35,1,1,0,0,0,0.5,43.9);

	this.instance_161 = new lib.Path_3_4();
	this.instance_161.setTransform(16.4,111.65,1,1,0,0,0,1.1,7.8);
	this.instance_161.alpha = 0.6992;

	this.instance_162 = new lib.Group();
	this.instance_162.setTransform(20.15,113.85,1,1,0,0,0,2.5,12.3);
	this.instance_162.alpha = 0.3984;

	this.instance_163 = new lib.Path_41();
	this.instance_163.setTransform(37.85,142.65,1,1,0,0,0,0.3,0.3);

	this.instance_164 = new lib.Path_1_18();
	this.instance_164.setTransform(37.95,143,1,1,0,0,0,0.8,0.8);
	this.instance_164.alpha = 0.5;

	this.instance_165 = new lib.Path_40();
	this.instance_165.setTransform(37.9,153.65,1,1,0,0,0,0.3,0.2);

	this.instance_166 = new lib.Path_1_17();
	this.instance_166.setTransform(38,154.05,1,1,0,0,0,0.8,0.8);
	this.instance_166.alpha = 0.5;

	this.instance_167 = new lib.Path_39();
	this.instance_167.setTransform(37.75,131.6,1,1,0,0,0,0.3,0.3);

	this.instance_168 = new lib.Path_1_16();
	this.instance_168.setTransform(37.9,132,1,1,0,0,0,0.8,0.9);
	this.instance_168.alpha = 0.5;

	this.instance_169 = new lib.Path_38();
	this.instance_169.setTransform(37.7,120.5,1,1,0,0,0,0.3,0.3);

	this.instance_170 = new lib.Path_1_15();
	this.instance_170.setTransform(37.85,120.85,1,1,0,0,0,0.8,0.8);
	this.instance_170.alpha = 0.5;

	this.instance_171 = new lib.Path_37();
	this.instance_171.setTransform(37.65,109.45,1,1,0,0,0,0.3,0.3);

	this.instance_172 = new lib.Path_1_14();
	this.instance_172.setTransform(37.85,109.8,1,1,0,0,0,0.9,0.8);
	this.instance_172.alpha = 0.5;

	this.instance_173 = new lib.Path_36();
	this.instance_173.setTransform(37.6,98.3,1,1,0,0,0,0.3,0.2);

	this.instance_174 = new lib.Path_1_13();
	this.instance_174.setTransform(37.8,98.8,1,1,0,0,0,0.9,0.9);
	this.instance_174.alpha = 0.5;

	this.instance_175 = new lib.Path_35();
	this.instance_175.setTransform(37.55,87.3,1,1,0,0,0,0.3,0.3);

	this.instance_176 = new lib.Path_1_12();
	this.instance_176.setTransform(37.65,87.65,1,1,0,0,0,0.8,0.8);
	this.instance_176.alpha = 0.5;

	this.instance_177 = new lib.Path_34();
	this.instance_177.setTransform(37.5,76.25,1,1,0,0,0,0.3,0.3);

	this.instance_178 = new lib.Path_1_11();
	this.instance_178.setTransform(37.6,76.65,1,1,0,0,0,0.8,0.9);
	this.instance_178.alpha = 0.5;

	this.instance_179 = new lib.Path_33();
	this.instance_179.setTransform(37.4,65.15,1,1,0,0,0,0.3,0.3);

	this.instance_180 = new lib.Path_1_10();
	this.instance_180.setTransform(37.55,65.5,1,1,0,0,0,0.8,0.8);
	this.instance_180.alpha = 0.5;

	this.instance_181 = new lib.Path_4_1();
	this.instance_181.setTransform(69.45,68.45,1,1,0,0,0,7.5,0.5);
	this.instance_181.alpha = 0.6992;

	this.instance_182 = new lib.Path_5_4();
	this.instance_182.setTransform(69.85,154.9,1,1,0,0,0,8.3,4.7);
	this.instance_182.alpha = 0.3984;

	this.instance_183 = new lib.Path_6_3();
	this.instance_183.setTransform(69.75,136.5,1,1,0,0,0,8.4,23);
	this.instance_183.alpha = 0.3984;

	this.instance_184 = new lib.Path_7_2();
	this.instance_184.setTransform(69.5,78.55,1,1,0,0,0,8.4,12.5);
	this.instance_184.alpha = 0.5;

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFC632").s().p("AhVnRICmgBIAFOlIimABg");
	this.shape_218.setTransform(69.675,112.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFC632").s().p("AgUgDQAAgsAPgqIAOggIAKBJQAHBagPBQQggg2ABhHg");
	this.shape_219.setTransform(16.5835,113.85);

	this.instance_185 = new lib.Path_10_2();
	this.instance_185.setTransform(20,122.65,1,1,0,0,0,2.4,3.5);
	this.instance_185.alpha = 0.3984;

	this.instance_186 = new lib.Path_11_2();
	this.instance_186.setTransform(20.05,119.5,1,1,0,0,0,2.5,6.7);
	this.instance_186.alpha = 0.3984;

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#3375BA").s().p("AgYh5IAggBIANBEQAKBVgQBbIgmABg");
	this.shape_220.setTransform(20.0173,113.825);

	this.instance_187 = new lib.Path_13_1();
	this.instance_187.setTransform(26.75,85.5,1,1,0,0,0,4.3,15.5);

	this.instance_188 = new lib.Path_32();
	this.instance_188.setTransform(33.1,111.75,1,1,0,0,0,1.2,47.9);

	this.instance_189 = new lib.Path_1_9();
	this.instance_189.setTransform(37.2,153.5,1,1,0,0,0,4.9,6.2);
	this.instance_189.alpha = 0.5;

	this.instance_190 = new lib.Path_2_5();
	this.instance_190.setTransform(37.15,136.35,1,1,0,0,0,5,23.4);
	this.instance_190.alpha = 0.5;

	this.instance_191 = new lib.Path_3_3();
	this.instance_191.setTransform(36.8,78.1,1,1,0,0,0,4.9,14.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#903149").s().p("AgyneIBgAAIAFO9IhgAAg");
	this.shape_221.setTransform(37,111.75);

	this.instance_192 = new lib.Path_5_3();
	this.instance_192.setTransform(60.05,152.3,1,1,0,0,0,1.4,5.1);
	this.instance_192.alpha = 0.5;

	this.instance_193 = new lib.Path_6_2();
	this.instance_193.setTransform(60.1,135.25,1,1,0,0,0,1.6,22.1);
	this.instance_193.alpha = 0.5;

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#344F9B").s().p("AgLHQIgFufIAcAAIAFOfg");
	this.shape_222.setTransform(59.925,110.975);

	this.instance_194 = new lib.Path_8_1();
	this.instance_194.setTransform(47,152.4,1,1,0,0,0,14.7,5.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#DC325F").s().p("AiSjbIEjgCIACG6IkjABg");
	this.shape_223.setTransform(46.875,135.35);

	this.instance_195 = new lib.Path_10_1();
	this.instance_195.setTransform(46.6,77.85,1,1,0,0,0,14.7,13.3);
	this.instance_195.alpha = 0.6992;

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#EE305D").s().p("AiUnOIEkgCIAEOgIkiABg");
	this.shape_224.setTransform(46.75,111.05);

	this.instance_196 = new lib.Path_12_0();
	this.instance_196.setTransform(27.25,143.35,1,1,0,0,0,5.2,14.3);
	this.instance_196.alpha = 0.3984;

	this.instance_197 = new lib.Path_13_0();
	this.instance_197.setTransform(26.45,135.75,1,1,0,0,0,6,21.9);
	this.instance_197.alpha = 0.3984;

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#C23553").s().p("AAHBFQgrhrgSh6QALAhANAeQAjBTAxA0IABB7QgPgKghhSg");
	this.shape_225.setTransform(26.925,141.45);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C23553").s().p("AgTEEQgVgygPg5QgEg0ABgtQABiqA5icQARgxAVgqIASggIAEMTQgsgygjhUg");
	this.shape_226.setTransform(26.3472,104.375);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C23553").s().p("AAlGnQgXgsgSg3Qg4ikABisQACirA5icQARgxAVgqIARggIAFOdQgGgFgRgjg");
	this.shape_227.setTransform(26.3981,111.275);

	this.instance_198 = new lib.Path_31();
	this.instance_198.setTransform(76.3,111.2,1,1,0,0,0,4,41.5);

	this.instance_199 = new lib.Path_30();
	this.instance_199.setTransform(128.05,149.3,1,1,0,0,0,0.3,0.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#872F47").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_228.setTransform(128.4,149.95);

	this.instance_200 = new lib.Path_29();
	this.instance_200.setTransform(127.95,134.2,1,1,0,0,0,0.3,0.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#872F47").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_229.setTransform(128.325,134.85);

	this.instance_201 = new lib.Path_28();
	this.instance_201.setTransform(127.95,119.1,1,1,0,0,0,0.4,0.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#872F47").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_230.setTransform(128.25,119.75);

	this.instance_202 = new lib.Path_27();
	this.instance_202.setTransform(127.8,104,1,1,0,0,0,0.3,0.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#872F47").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgDAEgBQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_231.setTransform(128.1719,104.65);

	this.instance_203 = new lib.Path_26();
	this.instance_203.setTransform(127.8,89,1,1,0,0,0,0.4,0.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#872F47").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_232.setTransform(128.0781,89.575);

	this.instance_204 = new lib.Path_25();
	this.instance_204.setTransform(127.65,73.9,1,1,0,0,0,0.3,0.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#872F47").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAIAAAAQgEAAgDgDg");
	this.shape_233.setTransform(128,74.4781);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AhCAvQgTgoAVgoQAXgrA3gCQAwgBAOASQgYgMgdgBQg5gCgaA3IgGAbQgCAjAaAmQgOgMgKgUg");
	this.shape_234.setTransform(105.2238,88.3944);

	this.instance_205 = new lib.Path_24();
	this.instance_205.setTransform(107.25,89.65,1,1,0,0,0,10.1,10.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#2BBEDF").s().p("AhLBNQgggfgBgtQgBgtAhggQAfggAtAAQAsAAAhAgQAfAfABAtQAAAtggAgQgfAgguAAIAAAAQgsAAgfggg");
	this.shape_235.setTransform(107.2,89.575);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6CC6B3").s().p("AhLBNQgggfgBgtQgBgtAhggQAfggAtAAQAsAAAhAgQAfAfABAtQAAAtggAgQgfAgguAAIAAAAQgsAAgfggg");
	this.shape_236.setTransform(107.2,89.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#6CC6B3").s().p("AhLBNQgggfgBgtQgBgtAhggQAfggAtAAQAsAAAhAgQAfAfABAtQAAAtggAgQgfAgguAAIAAAAQgsAAgfggg");
	this.shape_237.setTransform(107.2,89.575);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#553C2E").s().p("AhWBYQgkgkgBgzQAAgzAkgkQAkgkAzgBQAzAAAkAkQAlAkAAAzQAAAzgkAkQgkAkg0ABIAAAAQgyAAgkgkg");
	this.shape_238.setTransform(107.2,89.575);

	this.instance_206 = new lib.Path_23();
	this.instance_206.setTransform(107.25,89.6,1,1,0,0,0,13.7,13.3);

	this.instance_207 = new lib.Path_1_8();
	this.instance_207.setTransform(103.9,72.4,1,1,0,0,0,24.3,0.5);
	this.instance_207.alpha = 0.5;

	this.instance_208 = new lib.Path_2_4();
	this.instance_208.setTransform(127.55,111.2,1,1,0,0,0,1.2,39.3);

	this.instance_209 = new lib.Path_3_2();
	this.instance_209.setTransform(101.45,151.35,1,1,0,0,0,28.7,1.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#DC325F").s().p("AkfjBII9gDIACGGIo9ADg");
	this.shape_239.setTransform(101.325,132.95);

	this.instance_210 = new lib.Path_5_2();
	this.instance_210.setTransform(101.05,82,1,1,0,0,0,28.7,10.1);
	this.instance_210.alpha = 0.6992;

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EE305D").s().p("AkgmcII8gDIAFM8Io9ADg");
	this.shape_240.setTransform(101.2,111.05);

	this.instance_211 = new lib.Path_22();
	this.instance_211.setTransform(260.05,108.9,1,1,0,0,0,61.4,23.3);

	this.instance_212 = new lib.Path_1_7();
	this.instance_212.setTransform(192.45,83,1,1,0,0,0,19.5,45.1);
	this.instance_212.alpha = 0.5;

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_241.setTransform(236.025,120.55);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_242.setTransform(236.35,121.175);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBg");
	this.shape_243.setTransform(210.85,120.675);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_244.setTransform(211.1781,121.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3375BA").s().p("AgCAAQAAgDACABQADgBAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_245.setTransform(223.425,120.615);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_246.setTransform(223.775,121.25);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#3375BA").s().p("AgDAAQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_247.setTransform(255.35,55.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_248.setTransform(255.7,56.2219);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_249.setTransform(243.575,47.525);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_250.setTransform(243.9,48.15);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#3375BA").s().p("AgDAAQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABABAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_251.setTransform(231.4,43.75);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAIAAAAQgEAAgDgDg");
	this.shape_252.setTransform(231.725,44.3781);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABABABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_253.setTransform(216.6,43.55);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_254.setTransform(216.9281,44.175);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_255.setTransform(202.325,47.75);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_256.setTransform(202.65,48.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAIAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_257.setTransform(190.725,55.935);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_258.setTransform(191.075,56.55);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#3375BA").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_259.setTransform(185.05,67.55);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_260.setTransform(185.4,68.175);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_261.setTransform(185.125,80.875);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_262.setTransform(185.45,81.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQADgBAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_263.setTransform(185.2,94.215);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_264.setTransform(185.525,94.85);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_265.setTransform(185.275,107.55);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_266.setTransform(185.6,108.175);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBAAQAAAAgBAAQgDAAABgDg");
	this.shape_267.setTransform(260.915,67.15);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_268.setTransform(261.25,67.775);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3375BA").s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_269.setTransform(260.975,80.475);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_270.setTransform(261.325,81.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3375BA").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_271.setTransform(261.05,93.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEACgFABQgEAAgDgDg");
	this.shape_272.setTransform(261.4,94.45);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#3375BA").s().p("AAAADQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_273.setTransform(261.125,107.135);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_274.setTransform(261.45,107.7719);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#3375BA").s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_275.setTransform(261.2,120.425);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#344F8A").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAIAAAAQgEAAgDgDg");
	this.shape_276.setTransform(261.525,121.0281);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#3375BA").s().p("AgDAAQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape_277.setTransform(248.6,120.475);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#344F8A").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_278.setTransform(248.95,121.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_279.setTransform(198.25,120.75);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#344F8A").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_280.setTransform(198.6,121.375);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#3375BA").s().p("AgCAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_281.setTransform(185.675,120.825);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#344F8A").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEACgFABQgEAAgEgDg");
	this.shape_282.setTransform(186,121.45);

	this.instance_213 = new lib.Path_21();
	this.instance_213.setTransform(235.05,102.85,1,1,0,0,0,44.8,19.4);

	this.instance_214 = new lib.Path_1_6();
	this.instance_214.setTransform(206.25,67.45,1,1,0,0,0,21.4,23);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFC632").s().p("AmQiAQgBhzB1hRQB1hSClgBQClgBB2BRQB1BQABBzIACIYIseAEgAgCl2QiVABhpBKQhqBKABBoIACHjILRgEIgCnjQgBhohqhJQhqhIiTAAIgCAAg");
	this.shape_283.setTransform(223.3749,83.0748);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#2B7E9C").s().p("AmDh7QgBhwBxhPQBxhPCggBQCggBByBOQBxBOABBwIACIGIsEAEgAgBlpQiRABhmBHQhmBIAABkIADHUIK5gEIgCnUQAAhkhnhHQhmhFiPAAIgBAAg");
	this.shape_284.setTransform(223.3749,83.1494);

	this.instance_215 = new lib.Path_2_3();
	this.instance_215.setTransform(214.5,24.6,1,1,0,0,0,45.6,0.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#26AEAB").s().p("AmIhgIMPgEICaDDIxBAGg");
	this.shape_285.setTransform(222.575,12.775);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#3375BA").s().p("AmIhgIMPgEICaDDIxBAGg");
	this.shape_286.setTransform(222.575,12.775);

	this.instance_216 = new lib.CompoundPath_0();
	this.instance_216.setTransform(222.6,28.5,1,1,0,0,0,54.5,6.2);

	this.instance_217 = new lib.Path_5_1();
	this.instance_217.setTransform(222.6,31.55,1,1,0,0,0,54.5,3.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#C8DA3D").s().p("Aogg3IRAgGIABB2IxBAFg");
	this.shape_287.setTransform(222.625,28.525);

	this.instance_218 = new lib.Path_7_1();
	this.instance_218.setTransform(223.05,34.35,1,1,0,0,0,52,1.4);

	this.instance_219 = new lib.Path_20();
	this.instance_219.setTransform(223.45,84.4,1,1,0,0,0,41.6,40.6);

	this.instance_220 = new lib.Path_8_0();
	this.instance_220.setTransform(223.6,135.25,1,1,0,0,0,52,1.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFC632").s().p("AoHgOIQPgGIAAAjIwPAFg");
	this.shape_288.setTransform(223.6,134.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#DC325F").s().p("AoIieICrgBIAACPIK6gDIgBiQICrgBIACFDIwPAGg");
	this.shape_289.setTransform(223.525,119.875);

	this.instance_221 = new lib.Path_11_1();
	this.instance_221.setTransform(223.15,57.05,1,1,0,0,0,50.2,19.5);
	this.instance_221.alpha = 0.6992;

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#C23553").s().p("AgeASIAAgjIA9AAIAAAjg");
	this.shape_290.setTransform(271.925,34.825);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#C23553").s().p("AgRASIgBgjIAlAAIAAAjg");
	this.shape_291.setTransform(172.95,35.375);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EE305D").s().p("AoKn+IQPgGIAGQDIwPAGgAgBl5QiQABhnBIQhmBHABBkIACHUIK6gDIgCnUQgBhlhmhGQhnhGiPAAIgBAAg");
	this.shape_292.setTransform(223.325,84.675);

	this.instance_222 = new lib.Group_9();
	this.instance_222.setTransform(219.65,130.45,1,1,0,0,0,49.6,7.8);

	this.instance_223 = new lib.Group_10();
	this.instance_223.setTransform(105,112.95,1,1,0,0,0,27.6,41.1);

	this.instance_224 = new lib.Path_19();
	this.instance_224.setTransform(100.4,174.85);

	this.instance_225 = new lib.CompoundPath_1();
	this.instance_225.setTransform(96.45,167.5,1,1,0,0,0,34.4,8.3);

	this.instance_226 = new lib.Path_1_5();
	this.instance_226.setTransform(68.2,186.5,1,1,0,0,0,5.3,5.3);

	this.instance_227 = new lib.Path_18();
	this.instance_227.setTransform(71.55,66.1,1,1,0,0,0,4.9,5.9);

	this.instance_228 = new lib.Path_1_4();
	this.instance_228.setTransform(73.25,46.85,1,1,0,0,0,3.1,11.6);
	this.instance_228.alpha = 0.5;

	this.instance_229 = new lib.Path_2_2();
	this.instance_229.setTransform(88.3,68.1,1,1,0,0,0,21.6,3.8);
	this.instance_229.alpha = 0.3984;

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FEF6A9").s().p("AjXgDIGvgCIAAAJImvACg");
	this.shape_293.setTransform(88.275,61.3);

	this.instance_230 = new lib.Path_4_0();
	this.instance_230.setTransform(103.05,65.95,1,1,0,0,0,6.9,5.9);
	this.instance_230.alpha = 0.3984;

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#F47C36").s().p("AjXg5IGvgCIAAB0ImuACg");
	this.shape_294.setTransform(88.275,66);

	this.instance_231 = new lib.Path_6_1();
	this.instance_231.setTransform(103.3,30.35,1,1,0,0,0,6.4,2.8);
	this.instance_231.alpha = 0.3984;

	this.instance_232 = new lib.Path_7_0();
	this.instance_232.setTransform(88.1,31.8,1,1,0,0,0,21.6,1.5);
	this.instance_232.alpha = 0.3984;

	this.instance_233 = new lib.Mesh_9();
	this.instance_233.setTransform(69.6,28.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#4B64AC").s().p("AjXgZIGvgDIAAA3ImvACg");
	this.shape_295.setTransform(88.1,30.45);

	this.instance_234 = new lib.Path_9_0();
	this.instance_234.setTransform(88.25,60.25,1,1,0,0,0,18.8,1.4);

	this.instance_235 = new lib.Path_10_0();
	this.instance_235.setTransform(88.15,31.15,1,1,0,0,0,18.9,3.6);

	this.instance_236 = new lib.Path_11_0();
	this.instance_236.setTransform(102.15,44.95,1,1,0,0,0,5,17.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#3A6AB1").s().p("Ai8itIF3gCIACFdIl3ABg");
	this.shape_296.setTransform(88.175,45.1);

	this.instance_237 = new lib.Path_17();
	this.instance_237.setTransform(61.05,7.8,1,1,0,0,0,2.4,6.5);
	this.instance_237.alpha = 0.5;

	this.instance_238 = new lib.Path_16();
	this.instance_238.setTransform(115.15,15.15,1,1,0,0,0,0.3,0.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#A33436").s().p("AgIAAQAAgIAIAAQAEAAACACQADAEAAACQAAAIgJABQgIgBAAgIg");
	this.shape_297.setTransform(115.575,15.35);

	this.instance_239 = new lib.Path_15();
	this.instance_239.setTransform(103.95,15.2,1,1,0,0,0,0.3,0.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#A33436").s().p("AgIAAQAAgCACgDQADgDADAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgHAAgBgJg");
	this.shape_298.setTransform(104.35,15.4);

	this.instance_240 = new lib.Path_14();
	this.instance_240.setTransform(92.75,15.25,1,1,0,0,0,0.3,0.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#A33436").s().p("AgGAGQgCgDAAgDQAAgDACgCQADgDADAAQAJAAAAAIQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_299.setTransform(93.1708,15.475);

	this.instance_241 = new lib.Path_13();
	this.instance_241.setTransform(81.55,15.3,1,1,0,0,0,0.3,0.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#A33436").s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAADADQACACAAADQAAADgCADQgDADgEAAQgCAAgDgDg");
	this.shape_300.setTransform(81.9292,15.525);

	this.instance_242 = new lib.Path_12();
	this.instance_242.setTransform(70.25,15.4,1,1,0,0,0,0.2,0.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#A33436").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_301.setTransform(70.725,15.575);

	this.instance_243 = new lib.Path_11();
	this.instance_243.setTransform(59.1,15.45,1,1,0,0,0,0.3,0.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A33436").s().p("AgIAAQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_302.setTransform(59.525,15.625);

	this.instance_244 = new lib.Path_10();
	this.instance_244.setTransform(63.5,22.65,1,1,0,0,0,5.2,4.8);
	this.instance_244.alpha = 0.5;

	this.instance_245 = new lib.Path_1_3();
	this.instance_245.setTransform(116,8.4,1,1,0,0,0,2.5,7.9);

	this.instance_246 = new lib.Path_2_1();
	this.instance_246.setTransform(63.85,8.95,1,1,0,0,0,5.9,7.7);
	this.instance_246.alpha = 0.6992;

	this.instance_247 = new lib.Group_1();
	this.instance_247.setTransform(107.15,15.7,1,1,0,0,0,12,15.7);

	this.instance_248 = new lib.Path_3_1();
	this.instance_248.setTransform(88,0.5,1,1,0,0,0,26.3,0.5);
	this.instance_248.alpha = 0.6992;

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#C8DA3D").s().p("AkFhTIIJgDIAyCqIprADg");
	this.shape_303.setTransform(88.05,8.675);

	this.instance_249 = new lib.Path_5_0();
	this.instance_249.setTransform(88.05,28.55,1,1,0,0,0,23.3,3.1);

	this.instance_250 = new lib.Path_6_0();
	this.instance_250.setTransform(88.05,18.15,1,1,0,0,0,31,1.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#7EC24E").s().p("Ak1hEIJrgEIiCCOIlmADg");
	this.shape_304.setTransform(88.05,24.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#4B64AC").s().p("AgiASIgkghIAxgHIAVgsIAWAsIAxAGIgkAiIAJAxIgsgXIgqAXg");
	this.shape_305.setTransform(151.525,90.275);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFACC").s().p("AgrAYIgtgrIA9gJIAbg3IAbA3IA+AJIgsAqIAKA9Ig3gdIg1Aeg");
	this.shape_306.setTransform(151.525,90.15);

	this.instance_251 = new lib.Path_7();
	this.instance_251.setTransform(134.35,125,1,1,0,0,0,1.4,7.3);
	this.instance_251.alpha = 0.5;

	this.instance_252 = new lib.Path_1_1();
	this.instance_252.setTransform(152.3,103.85,1,1,0,0,0,15.5,2.2);
	this.instance_252.alpha = 0.5;

	this.instance_253 = new lib.CompoundPath();
	this.instance_253.setTransform(150.8,119.1,1,1,0,0,0,20.8,18.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EE3338").s().p("AjPC4IAAg7IAWAAQAXgGAAgfIAAiYQgCgSADgSQAGgeARgVQAbgfAwAAQBRgBC+AAIAAA7IkOABQgVABgKAKQgIAJgCAPQgBAKAAAJIABADIAACZQABAtgcAbQgUAVgbAEIgEAAg");
	this.shape_307.setTransform(150.8,119.125);

	this.instance_254 = new lib.Path_5();
	this.instance_254.setTransform(150.8,120.4,1,1,0,0,0,20.8,18.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#893031").s().p("AuMgDIcZgJIAAAQI8ZAJg");
	this.shape_308.setTransform(153.925,157.725);

	this.instance_255 = new lib.Path_2_0();
	this.instance_255.setTransform(153.95,174.85,1,1,0,0,0,90.9,1.1);
	this.instance_255.alpha = 0.3984;

	this.instance_256 = new lib.Path_3_0();
	this.instance_256.setTransform(154,167,1,1,0,0,0,91,4.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#36406A").s().p("AuMhXIcZgJIABC3I8ZAKg");
	this.shape_309.setTransform(153.95,166.15);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#893031").s().p("AuMgGIcZgKIAAAYI8ZAJg");
	this.shape_310.setTransform(153.725,124.025);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#DC325F").s().p("AuMgGIcZgJIAAAWI8ZAKg");
	this.shape_311.setTransform(153.825,144.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#3A6AB1").s().p("AuMgpIcZgKIABBdI8aAKg");
	this.shape_312.setTransform(153.85,144.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#A43436").s().p("AuOkNIcagJIADIkI8aAKg");
	this.shape_313.setTransform(153.875,150.25);

	this.instance_257 = new lib.Group_2();
	this.instance_257.setTransform(188.65,110.8,1,1,0,0,0,80.5,39.2);

	this.instance_258 = new lib.Path_0();
	this.instance_258.setTransform(144.5,76.1,1,1,0,0,0,36.6,3.6);
	this.instance_258.alpha = 0.5;

	this.instance_259 = new lib.Path_1_0();
	this.instance_259.setTransform(188.7,128.4,1,1,0,0,0,80.6,20);
	this.instance_259.alpha = 0.3984;

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFC632").s().p("AsmmDILcgEIAEJIINsgFIABDEI5JAIg");
	this.shape_314.setTransform(188.625,110.825);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#26AEAB").s().p("AsmmDILcgEIAEJIINsgFIABDEI5JAIg");
	this.shape_315.setTransform(188.625,110.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_315},{t:this.shape_314},{t:this.instance_259},{t:this.instance_258},{t:this.instance_257},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.instance_256},{t:this.instance_255},{t:this.shape_308},{t:this.instance_254},{t:this.shape_307},{t:this.instance_253},{t:this.instance_252},{t:this.instance_251},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.instance_250},{t:this.instance_249},{t:this.shape_303},{t:this.instance_248},{t:this.instance_247},{t:this.instance_246},{t:this.instance_245},{t:this.instance_244},{t:this.shape_302},{t:this.instance_243},{t:this.shape_301},{t:this.instance_242},{t:this.shape_300},{t:this.instance_241},{t:this.shape_299},{t:this.instance_240},{t:this.shape_298},{t:this.instance_239},{t:this.shape_297},{t:this.instance_238},{t:this.instance_237},{t:this.shape_296},{t:this.instance_236},{t:this.instance_235},{t:this.instance_234},{t:this.shape_295},{t:this.instance_233},{t:this.instance_232},{t:this.instance_231},{t:this.shape_294},{t:this.instance_230},{t:this.shape_293},{t:this.instance_229},{t:this.instance_228},{t:this.instance_227},{t:this.instance_226},{t:this.instance_225},{t:this.instance_224},{t:this.instance_223},{t:this.instance_222},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.instance_221},{t:this.shape_289},{t:this.shape_288},{t:this.instance_220},{t:this.instance_219},{t:this.instance_218},{t:this.shape_287},{t:this.instance_217},{t:this.instance_216},{t:this.shape_286},{t:this.shape_285},{t:this.instance_215},{t:this.shape_284},{t:this.shape_283},{t:this.instance_214},{t:this.instance_213},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.instance_212},{t:this.instance_211},{t:this.shape_240},{t:this.instance_210},{t:this.shape_239},{t:this.instance_209},{t:this.instance_208},{t:this.instance_207},{t:this.instance_206},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_205},{t:this.shape_234},{t:this.shape_233},{t:this.instance_204},{t:this.shape_232},{t:this.instance_203},{t:this.shape_231},{t:this.instance_202},{t:this.shape_230},{t:this.instance_201},{t:this.shape_229},{t:this.instance_200},{t:this.shape_228},{t:this.instance_199},{t:this.instance_198},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.instance_197},{t:this.instance_196},{t:this.shape_224},{t:this.instance_195},{t:this.shape_223},{t:this.instance_194},{t:this.shape_222},{t:this.instance_193},{t:this.instance_192},{t:this.shape_221},{t:this.instance_191},{t:this.instance_190},{t:this.instance_189},{t:this.instance_188},{t:this.instance_187},{t:this.shape_220},{t:this.instance_186},{t:this.instance_185},{t:this.shape_219},{t:this.shape_218},{t:this.instance_184},{t:this.instance_183},{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164},{t:this.instance_163},{t:this.instance_162},{t:this.instance_161},{t:this.instance_160},{t:this.instance_159},{t:this.instance_158},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.shape_211},{t:this.instance_149},{t:this.shape_210},{t:this.instance_148},{t:this.instance_147},{t:this.shape_209},{t:this.instance_146},{t:this.shape_208},{t:this.shape_207},{t:this.instance_145},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138},{t:this.instance_137},{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.instance_133},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.instance_121},{t:this.instance_120},{t:this.shape_170},{t:this.shape_169},{t:this.instance_119},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.instance_107},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.shape_141},{t:this.shape_140},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.shape_139},{t:this.instance_92},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.instance_91},{t:this.shape_135},{t:this.shape_134},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.shape_133},{t:this.instance_85},{t:this.shape_132},{t:this.instance_84},{t:this.shape_131},{t:this.instance_83},{t:this.instance_82},{t:this.shape_130},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.shape_129},{t:this.instance_72},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.shape_110},{t:this.shape_109},{t:this.instance_68},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.instance_56},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.instance_44},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.instance_43},{t:this.shape_66},{t:this.instance_42},{t:this.shape_65},{t:this.instance_41},{t:this.shape_64},{t:this.instance_40},{t:this.instance_39},{t:this.shape_63},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.shape_62},{t:this.instance_29},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.shape_43},{t:this.shape_42},{t:this.instance_25},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_13},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,710.7,192.6);


// stage content:
(lib.tran1 = function(mode,startPosition,loop) {
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
		
		this.b1.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		function fl_MouseClickHandler_1() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			
			this.correct.play();
			var my1=createjs.Sound.createInstance("yes");
		this.my1;
		my1.play();
			// End your custom code
		}
		
		
		
		
		
		this.b2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2() {	
			this.wrong1.play();
			var my2=createjs.Sound.createInstance("wro");
		this.my2;
		my2.play();
			
		}
		this.b3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3() {
		
			this.wrong2.play();
			var my3=createjs.Sound.createInstance("wro");
		this.my3;
		my3.play();
		
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
		
			this.correct1.play();
			var my4=createjs.Sound.createInstance("yes");
		this.my4;
		my4.play();
		
		}
		
		this.mysou.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16() {
			
			//this.wrong3.play();
			var my16=createjs.Sound.createInstance("intro");
		this.my16;
		my16.play();
			
			
		
		}
		/* var count:Number = new Number();
		 var ct= new Number;
		_root.attachMovie("brush","brush",10);
		fscommand("fullscreen", "true");*/
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_10
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_8
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer_3
	this.instance = new lib.BRIGHTEDGELOGO();
	this.instance.setTransform(1424,56,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.correct1 = new lib.Symbol88();
	this.correct1.name = "correct1";
	this.correct1.setTransform(1762,993.25,0.8649,0.7822,0,0,0,148,147);

	this.instance_1 = new lib.Symbol93();
	this.instance_1.setTransform(-276.1,108,1,1,0,0,0,12,32);

	this.wrong2 = new lib.Symbol89();
	this.wrong2.name = "wrong2";
	this.wrong2.setTransform(637.1,1091.85,1,1,0,0,0,85,85);

	this.wrong1 = new lib.Symbol89();
	this.wrong1.name = "wrong1";
	this.wrong1.setTransform(1285.05,680.45,1,1,0,0,0,85,85);

	this.correct = new lib.Symbol88();
	this.correct.name = "correct";
	this.correct.setTransform(850,613.25,0.8649,0.7822,0,0,0,148,147);

	this.b4 = new lib.Symbol87();
	this.b4.name = "b4";
	this.b4.setTransform(1429.8,781.2,1,1,0,0,0,126.2,192.3);
	new cjs.ButtonHelper(this.b4, 0, 1, 1);

	this.b3 = new lib.Symbol86();
	this.b3.name = "b3";
	this.b3.setTransform(659.3,785.2,1,1,0,0,0,355.4,96.3);
	new cjs.ButtonHelper(this.b3, 0, 1, 1);

	this.b2 = new lib.Symbol85();
	this.b2.name = "b2";
	this.b2.setTransform(1349,366.85,1,1,0,0,0,280.4,120.3);
	new cjs.ButtonHelper(this.b2, 0, 1, 1);

	this.b1 = new lib.Symbol84();
	this.b1.name = "b1";
	this.b1.setTransform(501.75,320.85,1,1,0,0,0,292.8,144);
	new cjs.ButtonHelper(this.b1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4},{t:this.correct},{t:this.wrong1},{t:this.wrong2},{t:this.instance_1},{t:this.correct1}]}).wait(1));

	// Layer_1
	this.mysou = new lib.Symbol6();
	this.mysou.name = "mysou";
	this.mysou.setTransform(1254.9,109.75,1.8331,1.8331,0,0,0,40.8,40.8);
	new cjs.ButtonHelper(this.mysou, 0, 1, 1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgVATQgKgJAAgKQAAgJAKgIQAJgJAMAAQAOAAAJAIQAJAIAAAKQAAALgJAIQgKAIgNAAQgMAAgJgIg");
	this.shape_306.setTransform(1157.1,117.225);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgUAXAAQAKABAQAFQARAGAJAAQAnAAAAgQQAAgKgbgNQgogRgKgHQgcgTAAgcQAAgnApgOQAZgIAwAAQAUAAAKAFQANAHgBATQAAAigTABQgTAAgEgQQgIgCgIAAQguAAAAANQAAAHAcANQAmASAOAKQAcATAAAbQAAAhgfARQgaAOgjAAQgaAAgVgIg");
	this.shape_307.setTransform(1138.55,108);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagiQAdgnAwABQAigBAWALQAeAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAKAKANAFQANAFARAAQAZAAATgLQAQgKAKABQAUAAAAATQAAAXghAOQgbAMgegBQgvAAgdgWgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgHgVAAQgRgBgNANg");
	this.shape_308.setTransform(1117.65,108.1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgSCaQgIgIAAgMIAAkNQAAgLAJgIQAHgGALAAQALAAAHAHQAIAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_309.setTransform(1101.1,102.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_310.setTransform(1085.175,108.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgYCOQgIgIAAgLIAAgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAHgHAMAAQAKAAAJAHQAHAHAAAMQAAARgCAZQgCAaAAASIABAjIAAAkQABALgIAIQgIAHgLAAQgLAAgIgHgAgRhjQgJgIAAgMQAAgNAJgIQAJgIALAAQANAAAJAIQAJAIAAANQAAAMgJAIQgJAIgNAAQgLAAgJgIg");
	this.shape_311.setTransform(1070.15,103.525);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAtCPQgEgPgEgdQgDgcgBgSIABgOIAAgQIAAgQQgCgKgIAAQgWAAgQATQgJAKgQAcQAABGgHAPQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgKQABgFACgxQgCgnAChaIAAgGIABggIgBgRIgCgSQgBgLAJgHQAIgIALABQAUgBAGAWQAEALAAAZIgBAnIgBAmQANgPARgGQAPgHATAAQAhAAAPATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAALgJAHQgHAIgMAAQgUAAgGgUg");
	this.shape_312.setTransform(1052.9,102.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagiQAdgnAwABQAigBAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAJAKAOAFQANAFARAAQAZAAATgLQAQgKAKABQAUAAAAATQAAAXghAOQgbAMgegBQguAAgegWgAgaguQgNAMgHAYIArgTQAZgMAQgKQgNgHgVAAQgRgBgNANg");
	this.shape_313.setTransform(1029.55,108.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgqCLQgYg6gdhqIgQg0QgLglAAgOQAAgMAIgHQAJgHALAAQASAAAIATIAIAiIASBAQAPA2APArQAchJAQgsIARgvQAMgbANgPQAJgKAMAAQALgBAJAIQAIAIAAALQAAAIgFAHQgLAPgJAWIgOAnIg0CGQgJAYgNAYQgJAPgPAAQgUAAgIgTg");
	this.shape_314.setTransform(1005.375,103.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgRCIQgJgHAAgKIABgWIAAgVQABgXgEhNIgkgDQgZgDAAgWQAAgLAIgIQAHgIALAAIAiADIgBgVIgBgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgIAHgLAAIgKAAIgKgBQgIAAgKACQAEBOgBAYIAAAKIABALQAAAtgdAAQgJAAgIgHg");
	this.shape_315.setTransform(964.95,104.825);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AhMBmQgHgIAAgKIAAh/IAAgSIABgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigZApAAQAogBAAA0IAAAOQgCAdgZAAQgZABAAgaIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMAAQgMgBgGgHg");
	this.shape_316.setTransform(946.25,108.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("Ag/BSQgdgbgBgtQgCgrAZghQAegoA0AAQAnAAAXAfQAVAdAAApQAAAsgZAhQgbAjgsAAQgkAAgagZgAgcghQgLATAAAYQAAAXANANQALAKAOgBQAQAAAMgLQAOgOABgWQADg+gkAAQgXgBgOAWg");
	this.shape_317.setTransform(925.4958,108.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AhQCcQgJgHABgLIAAhJIAAhMQgBgrgBgeIgEgnQABgQAGgLQAJgNAPAAQAKAAAIAHQAHAIAAAKIAAACQANgHANgEQAMgDANAAQAugBAVAmQAOAdAAAuQAAAqgXAcQgbAegsAAQgPAAgTgEIAABQQgBALgHAHQgHAIgMAAQgMAAgHgIgAgKhdQgNAGgNALQACApAAAnQASAGAQAAQAVAAAKgOQAKgMAAgWQAAgbgDgKQgFgXgUAAQgMAAgLAFg");
	this.shape_318.setTransform(904.8,112.8);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("Ag2BmQgegKAAgWQAAgUAXAAQAKABAQAFQARAGAJAAQAnAAAAgQQAAgKgbgNQgogRgKgHQgcgTAAgcQAAgnApgOQAZgIAwAAQAUAAAKAFQANAHgBATQAAAigTABQgTAAgEgQQgIgCgIAAQguAAAAANQAAAHAcANQAmASAOAKQAcATAAAbQAAAhgfARQgaAOgjAAQgaAAgVgIg");
	this.shape_319.setTransform(883.85,108);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAoBaIgGgoQgDgWAAgTIABgQIABgSIAAgGIABgKQAAgQgIAAQgRAAgPAWQgQAVgJAgIgCASIgBARIgBARIgCARQAAAMgHAHQgIAIgMAAQgLAAgIgIQgIgHAAgMIgBgQIgBgRQAAgTADgiQADghAAgTIgBgSIgBgSQAAgLAIgHQAIgIALAAQAaAAACAfIAAACQAdgcAeAAQAlAAAOAeQAKAVAAApIAAAOIgBAMQAAAPAFAYQAEAYAAAPQAAALgIAHQgIAIgLAAQgYAAgDgYg");
	this.shape_320.setTransform(864.125,107.875);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAvBaQgSAJgNAEQgOAEgJAAQgvAAgXgZQgYgZAAgyQAAguAjgiQAjghAvAAQATAAAYAKQAeANAAAQQAAAIgFAFQgCAHgBAMIgBAbQAAAkAFARIAJAUQAIAQAAADQAAAKgIAHQgIAGgKAAQgJAAgUgRgAgbgnQgUAVAAAaQAAAbAKANQAJANATAAQALAAALgEQALgEAJgIQgGgtAAgXIABgPIADgSIgHgCIgFgBQgaAAgUAUg");
	this.shape_321.setTransform(842.475,108.175);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AhNBmQgGgIAAgKIAAh/IABgSIAAgSQAAgLAGgHQAHgIAMAAQAWAAAEAWQAhgZArAAQAngBAAA0IgBAOQgBAdgaAAQgYABAAgaIgBgUQgrAIgTAlIAABiQAAALgIAHQgHAIgMAAQgMgBgHgHg");
	this.shape_322.setTransform(822,108.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgSCOQgJgIAAgLIABgIIABgJIgBgbIgCgbQAAgbgEgrQgFg0AAgTIgKAAQgsAAgagGQgVgGAAgUQAAgKAHgIQAIgKANABIAfAEQAUACAMAAIAjgBIAjAAIAsACIAtACQAMAAAIAIQAHAHAAAMQAAALgHAHQgIAIgMAAQgPAAghgCIgvgCIAFBPQAEAyAAAdIACAUIABATQAAAPgGAMQgIAPgPAAQgKAAgIgHg");
	this.shape_323.setTransform(798.275,103.1202);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AhMBmQgHgIAAgKIAAh/IAAgSIABgSQAAgLAHgHQAGgIAMAAQAWAAAEAWQAigZApAAQAogBAAA0IAAAOQgCAdgZAAQgZABAAgaIgBgUQgrAIgTAlIAABiQAAALgHAHQgIAIgMAAQgMgBgGgHg");
	this.shape_324.setTransform(757.6,108.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgYCOQgHgIAAgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAHgHQAJgHALAAQALAAAHAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQgBALgHAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_325.setTransform(742.5,103.525);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("ABjCTQgQAAgPgkQgKgXgIgeQgOACghACQgeACgQADQgJAWgXArQgIAOgPAAQgLAAgIgHQgJgIAAgLQAAgKAdg6QgDgGAAgFQABgKASgFQAbgvAjgzQAvhKAMAAQAVAAAHAaIANA+QALA5ASBHIAKAaQAHARAAAIQAAALgJAIQgIAHgKAAIgBAAgAgPASQAJgCARgBIAcgCIgMhBIgqBGg");
	this.shape_326.setTransform(721.65,103.7265);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AhCBUQghgYAAgtQAAgwAagiQAdgnAwABQAigBAXALQAdAPAAAeQAAAWgYAQQgLAIghAOIhBAdQAKAKANAFQANAFAQAAQAbAAARgLQARgKAJABQAVAAAAATQAAAXggAOQgcAMgfgBQgtAAgegWgAgaguQgNAMgIAYIAtgTQAYgMARgKQgOgHgVAAQgRgBgNANg");
	this.shape_327.setTransform(678.4,108.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAtCPQgEgPgEgdQgDgcAAgSIAAgOIAAgQIAAgQQgCgKgIAAQgWAAgQATQgKAKgPAcQAABGgHAPQgIAQgQAAQgLAAgJgHQgIgIAAgKIACgKQACgFABgxQgBgnABhaIABgGIAAggIgBgRIgCgSQgBgLAJgHQAIgIALABQATgBAHAWQAEALAAAZIgBAnIgBAmQANgPARgGQAQgHASAAQAiAAAOATQALAOACAcIACAwIAEAmQADAWAEAQIABAHQAAALgJAHQgHAIgMAAQgUAAgGgUg");
	this.shape_328.setTransform(656.35,102.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgRCIQgJgHABgKIAAgWIABgVQgBgXgDhNIglgDQgYgDAAgWQAAgLAHgIQAIgIAMAAIAgADIgBgVIAAgTQAAgLAIgHQAIgIALAAQAcAAAAAxIAAAQQAMgCAHAAQAXAAAIADQAQAGAAASQAAALgIAIQgHAHgMAAIgKAAIgKgBQgHAAgLACQADBOABAYIAAAKIAAALQAAAtgcAAQgKAAgIgHg");
	this.shape_329.setTransform(635.05,104.825);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAtCSQgKgSgTgZIgegnIgaARQgBAbAAAZQAAALgJAIQgHAHgLAAQgcAAAAggIACgvQACgeAAgQIABhAIABhAIgBgTIgBgUQAAgMAIgHQAHgIAMABQAMgBAHAIQAIAHAAAMIABAUIABAUIgBA3IgBA1QAbgTA1g2QAIgJALAAQALAAAJAIQAIAIAAALQAAAJgHAIQgYAZgfAcIAoA1QAeAnAAAMQAAALgJAIQgJAIgLgBQgOAAgJgOg");
	this.shape_330.setTransform(598.15,102.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("Ag9BVQgegZAAgqQAAgmAbgqQAggvAoAAQAUAAAbALQAhANAAASQAAAJgGAIQgHAIgLAAQgJAAgLgJQgMgJgYAAQgOgBgSAeQgQAdAAAUQAAAUAOALQAOAMAXAAQANAAATgKQASgKAGAAQAKAAAIAHQAHAIAAAKQAAAPghAPQgeAOgSAAQgqAAgegZg");
	this.shape_331.setTransform(575.975,108.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgYCOQgIgIABgLIgBgkIgBgjQAAgSACgaQACgZAAgRQAAgMAIgHQAIgHALAAQAKAAAIAHQAIAHAAAMQAAARgCAZQgCAaAAASIABAjIABAkQAAALgIAIQgIAHgKAAQgMAAgIgHgAgRhjQgKgIAAgMQAAgNAKgIQAJgIAMAAQAMAAAJAIQAJAIAAANQAAAMgJAIQgJAIgMAAQgMAAgJgIg");
	this.shape_332.setTransform(560.95,103.525);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgSCaQgIgIAAgMIAAkNQAAgLAJgIQAHgGALAAQALAAAIAHQAHAHAAALIAAEDQAAAlgbAAQgKAAgIgHg");
	this.shape_333.setTransform(549.2,102.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AhXB3QgcgfAAgqQgBhAA5hEQAxg6AyAAIAPAAIAMACQAJgIANAAQATAAAFAXQADARABAVQAAAKgHAIQgHAKgOAAQgRAAgJgSQgEgJgEgCQgCgBgNAAQgZAAgfAmQgtA1AAAuQAAAWAOAPQAPAPATAAQASAAAVgKQAGgEAXgPQAPgKAJAAQALAAAJAJQAHAHAAALQAAAMgKAIQg2Atg3AAQgsAAgeggg");
	this.shape_334.setTransform(531.85,103.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AggBXQgmgSgTgTIgKg7QAAgWAjgfQAigdAegIQA/AaAlA2QAAAagYAhQgcAngwAVQgOgFgSgIg");
	this.shape_335.setTransform(612,-596);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.mysou}]}).wait(1));

	// Layer_2
	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("EiH4BMcMAAAiY3MEPxAAAMAAACY3g");
	this.shape_336.setTransform(965.275,544.075);

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
p.nominalBounds = new cjs.Rectangle(1055.6,-66,779.4000000000001,1160.4);
// library properties:
lib.properties = {
	id: '92D4FCC9AAE2334598B6651AA7A51027',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#3C408C",
	opacity: 1.00,
	manifest: [
		{src:"images/Mesh.png", id:"Mesh"},
		{src:"images/Mesh_0.png", id:"Mesh_0"},
		{src:"images/Mesh_1.png", id:"Mesh_1"},
		{src:"images/Mesh_1_0.png", id:"Mesh_1_0"},
		{src:"images/Mesh_1_1.png", id:"Mesh_1_1"},
		{src:"images/Mesh_2.png", id:"Mesh_2"},
		{src:"images/Mesh_2_0.png", id:"Mesh_2_0"},
		{src:"images/Mesh_3.png", id:"Mesh_3"},
		{src:"images/Mesh_3_0.png", id:"Mesh_3_0"},
		{src:"images/Mesh_4.png", id:"Mesh_4"},
		{src:"images/Mesh_4_0.png", id:"Mesh_4_0"},
		{src:"images/Mesh_5.png", id:"Mesh_5"},
		{src:"images/Mesh_6.png", id:"Mesh_6"},
		{src:"images/Mesh_7.png", id:"Mesh_7"},
		{src:"images/Mesh_8.png", id:"Mesh_8"},
		{src:"images/Mesh_9.png", id:"Mesh_9"},
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/right.jpg", id:"right"},
		{src:"images/sound.png", id:"sound"},
		{src:"images/wrong.jpg", id:"wrong"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/yes.mp3", id:"yes"},
		{src:"sounds/wro.mp3", id:"wro"}
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
an.compositions['92D4FCC9AAE2334598B6651AA7A51027'] = {
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