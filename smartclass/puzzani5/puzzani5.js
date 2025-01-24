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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.a_mc1.b1.enabled=false;
		_root.a_mc2.b2.enabled=false;
		_root.a_mc3.b3.enabled=false;
		_root.a_mc4.b4.enabled=false;*/
	}
	this.frame_148 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(147).call(this.frame_148).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("Ak+XGQA0BOgxBuIg0CIQg1CWAABMQAACuB7B7QB8B8CtAAQCuAAB8h8QB7h7AAiuQAAhMg0iWIg1iIQgwhuAzhOQAzhPB4AAIWaAAMAAAg8HMg8HAAAIAAWbQAAB4BPAzQBOAzBugwICHg1QCXg1BLAAQCvAAB7B8QB8B7AACuQAACvh8B7Qh7B7ivAAQhLAAiXg0IiHg1QhugxhOA0QhPAzAAB4IAAWZIWbAAQB4AAAyBPg");
	this.shape.setTransform(382.5,245.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgEpAkVQh7h7AAiuQAAhMA1iWIA0iIQAxhug0hOQgzhPh4AAI2aAAIAA2ZQAAh4BPgzQBOg0BuAxICHA1QCXA0BMAAQCuAAB7h7QB7h7AAivQAAiuh7h7Qh7h8iuAAQhMAAiXA1IiHA1QhuAwhOgzQhPgzAAh4IAA2bMA8HAAAMAAAA8HI2aAAQh4AAgzBPQgzBOAwBuIA0CIQA1CWAABMQAACuh7B7Qh7B8ivAAQitAAh8h8g");
	mask.setTransform(382.5,245.875);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9A6C").s().p("Aj1AuQDliODDghID/g0IhWAgQhcAIiQAuQkfBbkCC6QBKhCByhGg");
	this.shape_1.setTransform(202.65,290.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767674").s().p("Ag6AXQgagKAAgNQAAgNAagIQAYgKAiAAQAjAAAYAKQAZAIAAANQAAANgZAKQgYAJgjAAQgiAAgYgJg");
	this.shape_2.setTransform(353.8,248.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9A6C").s().p("Av1JmIAAAAIAOgRQBwk0E+iDQDOhVEAAAQBKAABcAVQA3ANBfAdQA+ATAZAHQAsALAZAAQATAAALgHQAVgLAhgIQAUgEAqgHQA3gIAVgHQAjgLAHgTQAIgWgshWQgZgzg9hqIgzhaQgXgrgGgTIgIgVIBAAuQgghDgXhMQgihwgChpIgBg4IAQA2QAPA2AtA/QAcAmA+BIQAuAzAVAbQAAgNAFgMIAGgSIAIARQAbA+A4A/QAdAfAYAUIBhBZQBiBeAmA0QAGAIAEAIIgHARIgIgMQgegxhrhmIhlheQgWgTgbgcQg1g4gdg6QgBAPAGALIgOAIQgSgbhBhLQg0g9gYgfQgogzgUgtQAKB1AvB5QAYA9AVAmIAVAkIgggaIgygoQAQAhA1BdQBGB7AaA2QAkBLgJAZQgJAZgmANQgXAIg8AJQhRAMgeAQQgPAJgWAAQgbAAgsgLQgZgHhBgUQhegdg2gMQhagVhJAAQkIAAjRBbQlECNhiFMIgSBCg");
	this.shape_3.setTransform(261.35,237.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgKQAJgIAMgBQANABAKAIQAIAKABAMQgBANgIAJQgKAKgNgBQgMABgJgKg");
	this.shape_4.setTransform(343.4,197.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoAqQgRgSAAgYQAAgXARgRQARgRAXAAQAYAAASARQARARAAAXQAAAYgRASQgSAQgYABQgXgBgRgQg");
	this.shape_5.setTransform(342.05,187);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(256.15,212.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(254.65,200.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_8.setTransform(246.675,204.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D64AB").s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6QA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6gAh/h/Qg1A1AABKQAABLA1A1QA1A1BKAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhKAAg1A1g");
	this.shape_9.setTransform(246.65,204.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E6BB0").s().p("AgBCKQhMgggrhDQgvhIAThTQAzgoBAAAQBNAAA4A4QA3A3AABMQAABJgwA1QhBgBgrgSg");
	this.shape_10.setTransform(250.0286,201.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5085C3").s().p("AiECGQg3g3gBhPQABhNA3g3QA3g3BNgBQBOABA4A3QA2A3AABNQAABPg2A3Qg4A3hOAAQhNAAg3g3g");
	this.shape_11.setTransform(246.65,204.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC4E3C").s().p("Ah8DFQhpgwgkh5QgMglgCgpIgBgiIAAgDIATgQQBGg6AlgVQA/gjBAAAQAoAAArAOQBfAdBJCLQAkBFAUBHIABAFIgDADQgqAcg4AaQhuAzhaAAQg6AAgugVgAiTioQglAUhEA5IgNALQgDA5AVA7QAkBpBdArQAsATA2AAQBPAABlgrQA4gZAxgfQgXhNgmhEQhEh6hUgaQgpgNgmAAQg9AAg7Aig");
	this.shape_12.setTransform(248.1,204.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah5C+Qhngwgih2QgLgkgDgoIgBggQBlhSArgVQBXgoBhAeQBcAdBJCNQAkBFARBAQg5AohOAfQhYAihGAAQg3AAgugVg");
	this.shape_13.setTransform(248.05,204.3145);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2633B").s().p("AiHDVQh0g1gniFQgMgpgDgsIgBgkQBxhdAxgXQBggtBtAiQBoAhBRCdQAqBOATBIQhBAthXAiQhiAmhPAAQg+AAgzgXg");
	this.shape_14.setTransform(248.05,204.309);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC4E3C").s().p("AgbHPQhIACheg8IhVhBIgRgPIAXACIAaACQAuAAAfgTQhCgUhShJIhJhIIgHgJIAKgEQBEgVA2gfQhVg3hJhXIg5hNIgJgQIASAFQARAEAWAAQAmAAA+gMQhEhFgog6IgcguIgEgKIBcAAQg6hLgbg1IgQgoIgBgLIALADQAvANB3AVQCDAWBAAQQBrAdA5AnQCGBaBwCMQDPEEgTEcIgBAEIgDACQg6AghIAdQiPA5hjAAQhhAAgqg6gAgTHAIACAEQAlA2BcABQBagBCFgzQBNgeA9ghQARkWjLj9QhwiNiBhVQg4gmhpgbQg9gQiEgXQhngSgzgMQAWA7BRBlIAKAMIhkAAQAoBHBhBhIAJAKIgNACQg/APg1ABIgagBQAgAvAoAsQBCBFBJAuIAKAGIgKAGQgvAehNAbQAsAvArAkQBMA9A6AOIAOACIgLAKQgJAJgSAHQgiAPgrAAQAwAoAwAaQBLApA5gDg");
	this.shape_15.setTransform(156.7589,113.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9F5EA").s().p("AgRHFQhGADhhg+IhSg+QAzAGAogQQAUgIAKgKQhEgPhZhOIhLhLQA0gRAugXQAWgLANgIQhag4hLhZIg6hOQAjAJBAgJQAggFAZgGQhIhJgrg9IgcgvIBgAAQg/hOgdg5IgRgoQCmBWBrA+QBtA+BfBBQCNBeBxCKQCjDFApDdQheAyhrAeQhRAWg9AAQhjAAgrg9g");
	this.shape_16.setTransform(156.1,114.2821);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECE3C4").s().p("AgaHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBrA4C3A+QCcA1BBAtQB8BUB6CoQCbDVApDiQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_17.setTransform(157.075,114.1083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0D3AC").s().p("AgbHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBGAUDEAgQC1AjBMA0QCdBpB1CiQCuDwgSEFQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_18.setTransform(157.1592,114.1083);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC4E3C").s().p("AiMLPQg2gHgbgOQhdg0hVhrQhXhtg/iSQhOi1gMlRQgLk+Ayh7QANggARgHQAlgPCKAOQCaAPClAsQC+AyCSBKQC/BhBfCBQBgCDAACWQgBB0g6B6QgiBGg3A8IgxAuQBXhYA1iBQBpkAicjVQikjgm+h4QijgsiYgQQiJgPgkAPQgLAFgLAaQgxB4AME+QAMFQBLCuQBeDaCGB4QBwBkBoAHQgVAAgbgEg");
	this.shape_19.setTransform(161.7008,113.6871);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F37E3A").s().p("AkqI0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPB7AMQCKAOCTApQGVBxCnDlQChDchVEAQgrCBhLBUIofFQQhjgHhgiPg");
	this.shape_20.setTransform(162.774,115.3159);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7985D").s().p("Ak9I0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPCCALQCSANCbAnQGtBuCnDlQChDbhtEEQg2CDhXBWIofFQQhjgHhgiPg");
	this.shape_21.setTransform(164.6657,115.3005);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3733C").s().p("AlGJCQhlh6hfjfQhYjLgCloQgBiWAShoQAShtAfgMQAkgPCCALQCSANCbAnQGsBuCoDlQCgDbhsEEQg3CDhWBWIofFQQhpgHhqiBg");
	this.shape_22.setTransform(164.0105,115.3005);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2633B").s().p("AlGJaQiBh6hZjPQhYjMgCmAQgBigAShvQASh0AfgNQAjgOCJANQCZAQCkArQHCB3CoDlQCgDbhsEEQg3CDhWBWIofFQQhygIh3hxg");
	this.shape_23.setTransform(161.8105,114.4246);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC4E3C").s().p("AgZgMIAFgOQAUAIAPAXQAHAMAEAKQgYgcgbgLg");
	this.shape_24.setTransform(266.05,99.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CB9A6C").s().p("AgjB4Qg4gUgsgnQhDg8hShLIhEhCIBJA8QBXBIBDA6QBWBMB1AAQB2AABhhMIACgCIADAAQAhAIATgFIADAOQgWAFgggHQgxAng6ATQg4AUg6AAQg8AAg1gVg");
	this.shape_25.setTransform(313.35,272.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323232").s().p("AgYC4QgEgPgMgUQgZgngtgdQgmgYgaggQgeglgCgkQgCgxAwgkQAfgYA3gPQA2gOA6AAQA8AAAqAPQApAPAOAcQAhBDg8BMQgjArhOA6IgUAPQgYATgMATIgJAQIgIACgAhFidQg0ANgeAXQgqAfACApQACAhAcAhQAXAdAkAWQBAApAWA3QAQgXAZgVIAVgQQBLg4AggnQA7hHgeg7QgMgYgmgNQgngOg3AAQg3ABg0AOg");
	this.shape_26.setTransform(344.8679,259.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgyCkIAIgKQAIgQAGgSQAWhCgwgeQhQgxgNgSQgcglA6gsQBDgzBTgDQBXgEAbA3QAjBHhOBTQgaAcgoAfIgwAlQgUAQgMAPQgIANgJANg");
	this.shape_27.setTransform(349.0472,259.7895);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("AghCBQgBg5gwgeQhGgrgRgiQgXgvA7gsQBDgzBkgCQBogCAbA3QAjBGhOBUQgZAbgoAfIgyAmQgYAUgOAUIgJAQQAIgWgBgdg");
	this.shape_28.setTransform(347.1695,259.7215);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AghCRQgZgpgwgfQhCgpgUg0QgXg/A8gtQBCgzB8gBQB+gBAcA3QAjBHhOBTQgaAcgoAfIgxAlQgaAVgNAUIgJAQQgDgPgNgVg");
	this.shape_29.setTransform(344.8464,259.6741);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB9A6C").s().p("AhSIvQishbiVggQiUghhaAiIAkgQQAqgPAagBQBdAAB3AkQB4AkCDBGIACABQB2B5CLgUQBdgNBVhHQBCg2Aeg3IACgDIAEgBQAmgFAlghQBEg9ATh/QALhLgog9QgZgmhRhIQgugpgWgWQgngngegmQhRhJgnhKQgBAPAFALIgNAIQgSgbhBhLQg1g9gXgfQgogzgVgtQALB1AvB5QAXA9AWAmIAVAkIgggaIgygoQAPAhA2BdQBGB7AaA1QAjBMgIAZQgJAZgnANQgWAIg8AJQhRAMgdAQQgZAOg2gKQghgGhWgbQhegdg2gMQhbgVhJAAQhEAAg/AGIgCgPQBBgGBEAAQBKAABcAVQA4ANBfAdQBQAZAgAGQA1ALAVgMQAUgLAhgIQATgEArgHQA3gIAVgHQAjgLAHgTQAHgWgrhXQgZgyg9hqIgzhaQgXgrgHgTIgHgVIBAAuQgghDgXhMQghhwgDhpIgBg4IAPA2QAQA2AtA/QAbAmA/BIQAtAzAVAbQABgNAFgMIAGgSIAHARQAiBOBcBVQAfAmAnAmQAXAXAsAoQBTBKAaAoQAqBBgMBQQgSCAhEBAQgoAmgtAIQggA6hEA3QhYBIhfANQgYADgRAAQh7AAhphsg");
	this.shape_30.setTransform(301.6736,232.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F5EA").s().p("AucGiQAagnAdggIAYgZQC2i3Ekg7QCSgeBtAHQBvABDEA8QBYAcAgAGQA3ALAYgNQAbgPBugSQBYgOAMggQALgihfiqQhwjHgHgTIAVAOQAZATAbAWQgagsgahHQg0iMgDiEQAVBJBUBkICECfQgDgGgBgKQgDgSAHgTQAiBQBdBVQBGBXCBBuQBaBbgPBoQgSB6g/A/QgqApgtAHQgWAog5AgQg9AjhMAIQjCAUifiiQhPgqi2ABQixADjOArQjcAvisBNQjBBYhbBsQAWiNBTh9g");
	this.shape_31.setTransform(262.2821,239.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECE3C4").s().p("AvrKGQA2g7CIhIII1nIQBEgHBAAAQBvAADFA9QBXAbAhAHQA2ALAYgNQAbgPBvgSQBYgOALghQAMghhgiqQhwjHgGgUIAUAPQAaATAaAWQgZgsgahHQg1iNgDiEQAWBKBTBkICECeQgCgFgCgKQgDgSAHgTQAiBQBdBVQBHBXCABuQBaBbgPBoQgRB6hAA/QgpApguAGQgWAqg4AmQg/ArhKAQQjEApidihQiUhOiagHQh+gFhxAqQhvALiZAwQkzBgjRC4QAAgPAagdg");
	this.shape_32.setTransform(262.2321,239.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0D3AC").s().p("AhJIRQinhZiUgiQidgkheAjIABkkQBEgGBAAAQBvAADGA9QBXAbAhAGQA2ALAXgNQAbgOBvgTQBYgOALggQAMgihgipQhwjHgGgUIAUAOQAaATAaAWQgZgsgahGQg1iNgDiEQAWBJBTBkICECfQgCgGgCgJQgDgTAHgSQAiBQBdBVQBHBWCABuQBaBbgPBoQgRB6hAA/QgpApguAHQgYAsgyAvQg9A5hEAcQg9AYg5AAQh2AAhohqg");
	this.shape_33.setTransform(301.2321,234.5452);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC4E3C").s().p("AhZDAIgDgBIgCgDQhdjRA+heQA8hcDEAOIAGABIABAFQADALADAWQAGAmAAAkQABBzg1BHQgnAzgxAXQgiAPgjAAQgbAAgDgDgAhwhrQg5BYBXDFQAKADANAAQAgAAAfgPQAugVAkgwQAug+ADhkQACg7gMg2IgsgCQiSAAgvBJg");
	this.shape_34.setTransform(341.7102,192.5518);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D2D2D").s().p("AhHBIQgagdAAgrQAAgqAagdQAbgeApAAQAqAAAdAeQAeAeAAApQAAAqgeAeQgdAegqAAQgpAAgbgeg");
	this.shape_35.setTransform(336.725,192.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D64AB").s().p("AhbCRIgCgCIgCgDQhRjSBmhPIACgBQAYgIAWABQBBgBAuAvQAvAuAABBQAABCgvAuQguAvhBgBQgiABgfgOgAhCiJQhbBIBLDFQAcAMAcAAQA7AAAqgqQAqgrAAg7QAAg6gqgrQgqgpg7AAQgTgBgVAGg");
	this.shape_36.setTransform(339.8151,192.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E6BB0").s().p("AhHA2Qg4g8ARhSQALgTAUgQQAUgGAYgBQA9ABAtArQAsAtAAA9QAABCgwAsQhYgVgyg3g");
	this.shape_37.setTransform(340.7931,190.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5085C3").s().p("AhYCKQhPjOBihMQATgGAYAAQA+AAAsAsQAtAsAAA+QAAA/gtAsQgsAsg+AAQghAAgdgNg");
	this.shape_38.setTransform(339.8447,192.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHC7IgQgCQixmPGLAdIAFAdQAGAlABAkQABBzg0BFQg0BGhFAOQgPADgOAAIgNgBg");
	this.shape_39.setTransform(341.7172,192.5609);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2633B").s().p("AhQDWIgTgDQjLnHHEAhIAGAhQAHAqAAApQACCDg8BQQg7BPhOAQQgRAEgSAAIgNgBg");
	this.shape_40.setTransform(341.6978,192.5923);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC4E3C").s().p("AuUPZQgeAFgUAAQgrAAgRgXQgVgcARg/Ih/AlIAFgNQAihrAZiYQglApgLAIIgLAHIgBgNIgFh4QgEhEADgZQAFgiAZgkIhdAeIADgNQAdh+A5hdQgsAZggAOIgMAFIACgNQAOhsBLipQBMipBgiLQATgcAshOQCZkLB8iBQDdjnEBAAQCHAACQA/QAegPAmgLQBEgUBKAAQBpAABpApQCKA3B9B5QDSDJBdCsQBAB3AfCiIADAMIgMgDQgrgNgcgLQArBQAWBVQAaBfgLBEIgBAJIgJgDQgtgRgigRQASBdAABFQgBBcgfBPIgFAOIgIgNQgfgyhqhmIhlhdQgXgTgagdQg1g4gdg5QgBAPAFAKIgNAIQgSgbhBhKQg1g8gXgfQgog0gVgsQALB0AvB5QAXA8AWAnIAVAjIgggaIgygoQAPAhA2BdQBGB7AaA3QAjBLgIAZQgJAZgnAOQgWAHg8AKQhRAMgeAQQgPAIgXAAQgaAAgsgLQgZgGhBgUQhegeg2gMQhbgVhIAAQkIAAjSBbQlDCOhiFMIgTBBgAv0NjQgUBDASAYQANARAjAAQAVAAAkgGIAHgBQBwkzE9iEQDPhVEAAAQBJAABcAVQA4ANBfAeQA+ATAZAGQArALAZAAQAUAAALgGQAVgMAhgHQATgFArgGQA3gJAVgGQAjgLAHgUQAHgWgrhWQgZg0g9hpIgzhaQgXgrgHgUIgHgVIBAAvQgghDgXhLQgihxgDhoIgBg4IAQA2QAQA1AtA/QAbAmA/BIQAtA0AVAaQABgNAFgMIAGgRIAHARQAbA8A5A/QAdAgAXATIBhBZQBjBfAlA1QAbhNgChaQgBhDgThcIgDgQIAOAIIAWALQAcANAhANQAIhGgdhfQgZhVgrhMIgLgSIAUAHQAAACBMAYQgeiahCh3QhcimjLjDQhshph2g2Qh2g2h3AAQhNAAhIAXIg5AWIgDACIgDgBQiQg/iFAAQj8AAjZDkQh5CAiYEIQgwBUgQAXQhcCEhKCjQhJChgSBtQAugWAtgcIAkgWIgaAhIgkA7QgpBOgXBcIBzglIgPATQgiAqgHAhQgFAYAFBJQAEA0ABA0QARgRAhgmIARgTIgEAZIgPBbQgUBqgYBMIB+glg");
	this.shape_41.setTransform(251.6781,200.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F37E3A").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA5gOQBIgMBPAIQD8AaDhDZQDaDRBVCQQA7BkAbCLIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_42.setTransform(260.9201,179.2733);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7985D").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA3gXQBHgXBOgBQD5gCDhDZQDVDNBdCxQA8BxAeCaIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_43.setTransform(260.9201,179.2733);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3733C").s().p("AvQLyQghhzgBhjQAAAWgUBEQgSA8AJAqQh3jHBokFQgbAJgXAeIgnAyQALhRArhPQAshTBBg2QgsAAgkALQgiALgiAXQAYiTBRi/QBKiBA5hdQBtiyBrhuQFKlRGeC2IA3gXQBHgXBOgBQD4gCDhDZQDVDNBeCxQA7BxAeCbIhDgWIgWgIQAvBTAZBaQAcBjgLBFQglgOgggPIgYgMQAVBjAABIQAABdgfBQQgfgzhrhoIhlhdQgYgTgdggQg6g/gbhAQgHATADASQABAKADAFIiEieQhUhjgVhKQADCEA0CMQAaBHAaAsQgbgWgZgTIgVgPQAHAUBwDHQBfCrgLAhQgMAhhYAOQhuASgbAPQgYANg3gLQgggHhYgbQjFg9huAAQjVAAi4A+QkeBgiKDjQg2iNgThAg");
	this.shape_44.setTransform(258.8701,187.7983);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2633B").s().p("AuNPvQhJALgZgNQgpgVAbhZIh+AlQAahOAVhwIAQhfQg0A7gLAHQgJiYACgnQABg1Arg0IhoAhQAYhjAqhTIAmg/Qg7AlgtATQAPhtBLinQBLipBfiIQBLiAA5heQBsiyBrhuQFLlTGeC2IA3gWQBHgXBOgBQD5gDDhDZQDVDNBdCxQA8BxAeCcIhDgWIgWgIQAvBSAZBbQAbBigKBFQglgOgggPIgYgMQAUBjAABJQABBcgfBQQgggzhrhnIhlhdQgXgTgdggQg6hAgcg/QgHASADATQACAJACAGIiEieQhThkgWhJQADCEA1CMQAaBGAZAsQgagWgagTIgUgOQAGAUBwDHQBgCqgMAiQgLAghYAOQhvATgbAOQgYANg2gLQghgGhXgbQjGg9huAAQkEAAjRBZQlNCPhjFSg");
	this.shape_45.setTransform(251.8201,197.0348);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC4E3C").s().p("ACZIEQhwgihxg1Qjhhqg/hyIgBgDIABgDQAMgiAZgzQAyhmBGhfQDbkxFHiBIAJgEIAEA3QAODOgRBxQgcDAh2CVQAdgBAegOQAOgGAJgHIAjgbIgYAlQg3BTguA2IBAgPIAdgIIANgDIgEANQgWBBg8BOIg7BEIgDADgAizhXQhwCVg2COQA7BpDRBlQB0A4ByAjQAdgeAdgmQAxhBAWg4Qg4AQgvAIIgZAFIASgSQACAAAYgcQAhgoAng5QgnASgngDIgOgCIAJgLQB5iUAejBQARhxgOjPIgCgiQkzB8jTEcg");
	this.shape_46.setTransform(324.0713,85.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9F5EA").s().p("AgfFZQjmhqg+hyQADgVAOglQAchGAxhGQCgjiFHiBIAICRQACBQgMA+QgbCbiFCiQAkADBjgqQAzgVAqgVQguBHgoAxIgeAhQA2gJA+gSQgVBBg9BOIg5BBQhmgehyg2g");
	this.shape_47.setTransform(321.05,93.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECE3C4").s().p("AgfF9Qjmhrg+hyQAHgaAUgqQAnhUA7hRQC+kFFHiBQANDIgXBxQgjCziFCkQAkACBNgfQAngRAfgQQguBHgoAwIgeAiQA2gKA+gRQgVBAg9BPIg5BBQhmgfhyg1g");
	this.shape_48.setTransform(321.05,90.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0D3AC").s().p("Ag+GoQjmhqg+hyQALgfAYgzQAyhlBEheQDakwFIiCIAJCiQADBkgJBOQgaDUiDCfQAkADAkgQQATgIALgJQgvBIgnAwIgfAiQA3gKA+gRQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_49.setTransform(324.161,85.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC4E3C").s().p("AivG0Qh/hEhdhBQhghCgPggIgBgCIABgDQAyiCBeiWQC8ksDoh4QDChlBhABQBNAAAeA/QARAlAIBbQALCDgPCCQgKBTgRBEQAWgQARgRIARgQIgEAXQgEAZgDA1QgFBCgGAgQgLA2gcApIAvgUIAPgGIgYA/QgoBsgZAzQgoBSg1A5QgRATgogBQiHAAk0ilgABCnoQjeBzi2EbQhgCUg5CQQASAfBgBBQBdA+B8BCQEuChB+AAQAiAAALgOQA0g4AohRQAZgzAohpIALggIhaAoIAYgaQAmgqAOg7QAJgkAEhHIAEg7QgVARgWAPIgSALIAGgTQAPguAMhMQAXiXgNiaQgIhcgSgkQgagyhBAAQhcAAi/Big");
	this.shape_50.setTransform(320.05,86.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F37E3A").s().p("ACjI2QhwghibhNQiQhIhyhLQh2hOgQgkQAvh+BdiWQC7ksDph5QD4h/BOBDQAeAZANA9QAEAXAHBcQANCdgHB8QgFA/gGAeQAggUAagaQgIAwgFBkQgMBZgxA3QA2gZAUgHQg8CcgNAcQgtBhg5A/QgPAPgkAAQgoAAhEgUg");
	this.shape_51.setTransform(319.8,87.1808);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7985D").s().p("ACjI+QhwghibhOQiQhIhyhLQh2hNgQglQAvh+BdiVQC7ktDph4QD+iDBYAqQAkASARAyQALAiAGBIQANCdgXCYQgMBMgPAsQAggUAagZQgIAvgFBlQgMBYgxA3QA2gYAUgIQg8CcgNAcQgtBhg5A/QgPAQgkAAQgoAAhEgUg");
	this.shape_52.setTransform(319.8,86.4235);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB9A6C").s().p("AgFgqIAAAAIANgRQgCAQAHAPIgZBYg");
	this.shape_53.setTransform(161.025,302.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC4E3C").s().p("ABnOqQiYgXichmQh0hNhLhWQAOA4AQAmQAIATAFAIIAWAgIgggVQiDhZiPi7QjAj7gfjrQgij7CljBQAThxBnh1QDAjZGKhDIAMgCIgEANQgWA4gFApQAVgSAYgSIACgBIACgBQAagDAkAAQDHAAEMB3IAQAIIgQAGQhzAvhZA0QBXAaBgAwQAxAZAfATIANAIIgOAFQhTAihbBGQCLBJCaAyQBOAaAzAMIAXAEIgWAJQi7BOifAeQBtBEBsArQA2AVAhAJIAaAGIgaAIQjHBAiPAgQBkA9CUBhIAMAHIgOAGQh6Avh6ASQBOBDA6BDIAHAIIgKAEQiuBKhOgGQAnApAtAeQAgAWAFAAIAQAIIgRAGQg+AVhdAAQhQAAhWgOQAvAeA2AXIAdAMIgfACQg3ADg9ABQg3AAgygDQA6BhAgBGIAFAMgABbOZQgphUgxhQIgGgNIANACIAiACQAqABAqAAIBVgCQhEghgkgdIgagVIAgAHIA8AMQBIAKBAAAQBNAAA5gQQhDgog7hBIgbgdIAkASIAGACQAJABAMAAQBNAACXg/QhGhNhHg7IgNgLIARgBIBIgMQBYgTBVgfQithxhOguIgRgKIATgDIBXgVQBygeCHgqQiRgtichkIgRgLIATgCIBggVQB4gfB9gyQhMgVhUgdQiGgxh3hAIgKgFIAIgHQAWgSAggVQBBgsA3gYQgugbg3gaQhWgohNgVIgQgFIAOgJQAUgMAjgSQBHgmBPghQkAhvi9AAQggAAgaADQggAYgaAXIgMALIAAgRQAAglAahIQmIBGi5DdQhdBvgOBjIAAACIgCACQiiC8AhD3QAeDZCrDrQB/CuCLBqQgWg0gRhOIgIgkIAVAeQA1BLB6BXQChBzCgAdIAAAAg");
	this.shape_54.setTransform(86.7095,650);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F37E3A").s().p("AgnKXQithKh5h5Qjai/gTjRQhDA5gJBdQgGA2AIBsQhJh5gSh3QgViHA0hyQAWg2AzgYQAwgXA5AMQhTg+gGhpQgFhaAyhjIAIgMQCciFEegwQgTAxgHAoQgEAUAAAJQAbgYAigYQBNgKBpARQCcAaC6BTQhWAihMAoQglAUgVANQBcAaBmAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCQBMCfA1QBQAaAzALQiGA3iBAhIhlAXQB0BKBzAuQA6AXAiAJQiSAuh5AgIhdAWQBlA8CjBrQhbAihdAUIhMANQA1AsA1A3QAbAbAPATQhqAthKAPQi2gLiqhKg");
	this.shape_55.setTransform(96.725,631.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3733C").s().p("AiXKTQkLiWhYkbQgJBDAjBoQArCBAFApQiShbhjh+QhtiMgTiTQATi8CDiZQgDgZAFgoQALhQAqhJQCJjnGXhFQgTAxgHAoQgEATAAAKQAbgYAigYQBMgLBqARQCcAaC6BTQhWAihMApQglATgVANQBcAaBmAzQAzAaAhAUQg6AXhFAvQgjAWgXATQCQBMCfA2QBQAaAzALQiGA3iBAiIhlAVQB0BLBzAuQA6AXAiAIQiSAvh5AgIhdAVQBlA8CjBsQhbAihdAUIhMAMQA1AsA1A3QAbAbAPATQiIA6hRAIQgZADgRgDIgLgDQA0A5A9AnQlBgJjmiBg");
	this.shape_56.setTransform(90.325,636.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2633B").s().p("AjgMQQh8hZg1hLQAQBKAUAvQAJAZAHAJQhUg4hqh1QiBiRhQiZQjemqEBkqQANhlBehxQC8jjGXhFQgSAxgIAoQgDAUAAAJQAagYAhgYQBOgKBpARQCcAaC7BTQhXAihLAoQgmAUgUANQBbAaBnAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCPBMCgA1QBQAaAzALQiHA4iAAhIhlAXQB0BKBzAuQA5AWAjAJQiSAuh6AgIhcAWQBkA8CjBrQhaAiheAUIhLANQA1AsA1A3QAaAbAQATQiJA5hQAIQgaADgQgDIgMgCQAsAxA0AjQAaATARAIQhXAeiMgMIh7gSQAgAZA0AbQAaANAUAJQhNAEhWgBIhHgDQA/BoAhBKQiogaiph5g");
	this.shape_57.setTransform(85.7609,650);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC4E3C").s().p("AgOABIAGgNIAXAMIgGANg");
	this.shape_58.setTransform(88.625,725.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CAA87C").s().p("AqVOIQjNgwiLg/QA3BcAeBBIAFANIgNgCQiZgYichmQh0hNhLhWQAOA5AQAlQAIATAFAIIAWAhIgggWQiDhYiPi8QjAj7gfjrQgij7CljBQAThxBnh0QDAjaGKhCIAMgCIgEAMQgWA5gFApQB8hqCwgsQBlgZBaAAIAiABIgSANQhfBCgUAsQCahVDtAAQB3AACAAVQA/ALApALIAjAJIgkAFQg9AJgnAUQgcAPgPASQBGgMBPAAQCDAAB6AeQB6AfBDAxIAKAHIgLAGQggARgfAPQA2AIBYAmQAyAWBtA2QB8A+AuARIApAPIgsgBIh1gBQA0AUBRAiQBvAuAzAPQBVAZBRAAQAgAAAsgFIAPgCIgIAOQgXAjgdAZQCRgBDvhNQB3gmBdgnIAPgGIgRA6QhPEJhACFQhuDpihBwQBcgLAngHIATgDIgMAPQgoAzh+BaQibBui5BeQoJEInrAAQmWAAlXhPgAv8MBIBIAgQBdAlB1AfQFyBjHIAAQHOAAH4j2QC2hYCfhsQCAhWA6g8IiwAYIAcgSQCrhrB0juQBDiHBRkRIAIgdQh6AyiEAnQjfBCiFgEIgXgBIATgMQAegUAaglQgeADgfAAQhTAAhWgaQg2gQhvguQhmgrhFgXIgmgOIAogBIB3AAQgogShegvQh1g7g6gYQhggng0AAIgkAAIAhgOQAegNAwgaQhDgsh1gcQh2gch6AAQhVAAhOAOIgNADIAEgMQAGgPASgQQAlggBDgPQicgiicAAQj0AAiaBbIgJAFIgCgKQgDgMANgVQAYgoBHg0QhiAChnAdQinAvh0BpIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD2QAeDaCrDqQB/CuCLBrQgWg0gRhPIgIgkIAVAeQA1BLB6BXQChB0ChAdQgphUgxhRIgOgXg");
	this.shape_59.setTransform(189.9096,647.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F9F5EA").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgGAXQhdCNhJBjQhgB/hfBoQiWCzkXBPQjBA2k5AOQAoAUBLAwQBDAoA1AIQhWgFiRAFQiyAHg2AAQkRgDimhpQAABAA8BCQAgAlBHBGQjehVhuguQi8hQiEhVQALBfAcBAQAfBKA/A/QmghXlyj+QAfBgArBVQh5hXhXhtQAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_60.setTransform(189.6109,644.9066);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ECE3C4").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgxCkQgSAig4BYQgyBRgbA1Qh0DTjRB5Qi5BrkGAjQAtAIBZAaQBQAUA2gJQjhBqjgAoQjnAqjRgiQA3ALA8AYQAuATBaAsQlAAAhkgJQjmgWimhYQARArA8A0QBIBAAPATQnGhLjhhQQlziEjFj3QAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_61.setTransform(189.6109,644.9066);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0D3AC").s().p("ArmNsQh1gghcglIhGggQA/BoAiBKQipgaiqh5Qh7hYg2hMQARBKATAwQAKAYAGAJQhUg4hph1QiCiRhQiZQjempECkrQAMhkBehyQC9jjGXhFQgTAygHAnQgEAUAAAKQCIh8DKgrQBlgVBJADQhSA5gcAqQgOAVADAKQC2hrEvASQCYAJByAfQhWAMgsAjQgWARgFAPQCdgfC2AfQCvAdBYBBQg2AegjAPQBJAACrBSQDrBxASAHIh0gBIgqABQB3ApCwBKQCQAzCLgRQgSAdgaAYQgNANgJAGQCTAED7hQQB+gnBggpQhbEyg7B9Qh3EAi1BxQB1gPAugHQgpAziBBbQibBui7BdQoHEFnhAAQnOAAlzhkg");
	this.shape_62.setTransform(189.6109,647.7816);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC4E3C").s().p("ACgGJQBnhBA+hyQA+hzgEhzQgDhUgmhHQgzhchrg7QjGhsjSA7QhCATg7AhQgeARgSANQARgOAdgSQA8glBCgVQDUhDDMBvQBgA1A2BSQA1BSAEBmQAEB4g/B1QhAB1hrBEg");
	this.shape_63.setTransform(116.4369,550.3487);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F37E3A").s().p("AlikOQAQgNAegRQA7giBDgUQDUg9DMBvQDYB2ioDoQh6Cpj9Cig");
	this.shape_64.setTransform(111.7298,547.8819);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3733C").s().p("AlzkOQAQgNAegRQA7giBDgUQDUg9DMBvQDeB5hgDlQgnBdhWBcQhPBWhfA8g");
	this.shape_65.setTransform(113.4013,547.8819);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2633B").s().p("AmLklQAQgOAegRQA7giBDgTQDVg+DLBwQB1A/AzBoQAuBegNBwQgNBpg8BgQg9BghaA5g");
	this.shape_66.setTransform(115.8432,550.2319);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC4E3C").s().p("AARgnIAOAHQgWAmgVAVQgLALgHACQAPgTAgg8g");
	this.shape_67.setTransform(279.525,506.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB9A6C").s().p("AgogwQiQgehZAgIATgIQAXgKAUgFQAhAFAaAAIAcgBIAcABIAUgBQAOAJANADIBZAXQAzANAmAHIArAQQAjAYAtAQQAJALANANQiqhWiQggg");
	this.shape_68.setTransform(265.35,279.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB9A6C").s().p("Ai8gjQAtAeA0AOQAZANAZgDIABAAQATADAQAAQBgAABRg0IARAEQhKAwhLALQgVADgTAAQhjAAhZhHg");
	this.shape_69.setTransform(316.825,294.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D3AC").s().p("AglAEQAfgDAggJIALACQgoAEgiALg");
	this.shape_70.setTransform(241.45,273.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D3AC").s().p("AiVABIAcAKQAZANAagDIAAAAQAUADAQAAQBgAABRg1IAHACQhFAshHAKQgTADgTAAQg/AAg6gdg");
	this.shape_71.setTransform(319.75,294.169);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E0D3AC").s().p("AhYglQAnAJAgAEQArAiA3ATIAHAJQhfgvhRgcg");
	this.shape_72.setTransform(282.4,281.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC4E3C").s().p("AAfgqQgeAEgTAAQgSABgNgFIAJgDQANAGAPAAQAcAAASgTIALgBQgCAQAHAPIgaBYg");
	this.shape_73.setTransform(157.325,302.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAA87C").s().p("AlSSkQBii3A7kIQA3j2gGiwQhKB6gbAWIgLAJIgBgOQgKh3gRhTQgLg3gNgfQgkAzgdAUQgQALgJAAIgHAAIAAgHQgGiKgThuQgMhEgPgwQg+BTgMAMIgKAKIgDgOQgwkCgThTQgIATgDAiQgDAYAAAVIAAAfIgOgcQhtjUADilQgRAigIAbQgDAOgBAHIAAApIgOgmQglhigSinQgUizAOiRQgeAFgUAAQgSAAgNgFIAJgDQANAGAPAAQAdAAASgTIALgBQgBAJACAKQgNCFAQCmQAPCZAhBnQALgmAdgzIAQgcIgCAhQgOCiBoDWQAFhGAUgZIAKgLIADAOIARBRQAXBwAdCZQAWgbAxhDIAIgKIAFAMIAZBcQAYB2AICjQAggRAvhDIAGgJIAGAKIAWA8QAWBXANCNQAngxA8hlIAMgUIABAYQAMCng1D6Qg4EJhgDBQC3h7CkiBQETjYBChyIAOgYIAAAcIgCAQQgDAXgHAiQBGhKB1iFIAIgJIAXBDQBChJAkiGQAZhdANiEIABgLIAKAFIAWATQAYAbAOAqQAXhkAKhiQAPidgbhjIgFgSIAQAKQAEAAA9ArQgEhIgpiBQgZhOg1iOIgkhjIAPAGQAMAFAPAIQAdAQAUASQgNjLgNhYIgDgYIAQASIASASQAWAUAXASQgEiaAAhYIAPgJQAAB/AFCLIAAAPIgMgIQgcgVgigfQANBqALC4IACAWIgPgRQgZgcgsgWIAZBDQA5CZAZBPQAqCJAABIIAAAOIhIgyQAaB4gZC3QgNBdgUBMIgIAdIgHgdQgOhDgkghQgOCIgcBeQgoCHhGBIIgJAJIgWhCQiTCogyAwIgSARIAGgYQAIglAFgbQheCDkuDmQiZBziVBkIgZAQg");
	this.shape_74.setTransform(244.225,412.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9F5EA").s().p("AheIjIgljUQgVh8gFhXQgWAbghBhQgdBQgyAhQAJhKgMhoQgTh2gHg8QgbBphOA7QAnh+gDicQgBgZgUkAQgMAdg8BFQg1A8gIAxQgPhWAYieQAcirgIhKQgRAagkAhIhBA8QgJg2AUhIIAhh/QgJAHhOAvQgyAegaAjQADgwAPgxQAUgGAIgUQAvgVApgdIALABQAZgBANgRQAzgMAzgXIArgHQBMgDBDgVQAXgDAWgFQAngDAjgLIAHACQgkAHgfAQQEoA7D+CsQEaC+AiDTQAAAGAFAHQgRgMgTgJIgRgIIBhEJQA6CtAABTIg3gmIgWgOQAfBwgWC1QgMBfgWBeIgFgVQgBiVgYhjQgfiBhQhXQABEqhaEKQggh2gQg8QgahoAAhKQgjChiaCuIiECNQhPBVgsA/QAsiogoj/g");
	this.shape_75.setTransform(260.2,369.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ECE3C4").s().p("AiDKwIgVjIQgNh5AAhQQgkAugkBLIg9CDQgDgbgmivQgch+AJhXQgOAegiA7QgaA0AAAlQgZhmAHitQAIjWgFg7QgeAPgdA0QgeA0gdAOQgGg+ARivQAOiSgZhbQgeA0hDBiQgyBVgCBIQABkPA6jWQg7BLgaAmQgrBBgUA7QAAi6AximQAWgHAKgUIAEgBQAJAEAMAAQAgAAAMgdQAygXAmgbIALABQAZAAANgSQAzgMAygWIAsgHQBLgDBEgWQAXgCAWgGQAngDAjgKIAHABQgkAHggAQQMxCkBYHdIACAjQgUgXgkgVIgggPIBgEIQA7CuAABSIg3gmIgWgOQAeBwgVC1QgMBggXBeQgShlg+iTQAACXhHCQQhCCIh0BoQAJgigKg/QgNhOAAgSQh2CphtBtQiLCMiZBHQA2iggUjwg");
	this.shape_76.setTransform(255.025,381.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0D3AC").s().p("AjKM9QA3kAgMitQg0BYgjAuQgRAXgHAGQgMiWgYhbIgVg9QgmA4gfAWQgPALgHAAQgIingZh7IgYhaQhFBdgNANQgfijgXhzIgRhSQgQASgGA0QgDAaAAAWQh2jmAOivQgcAwgLAlQgGATAAAJQgmhlgSitQgTizAQiNIgRACQAJgFAFgHIAJgBQgEAWAMASQANATAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAnAAARggIAFgBQAJAEAMAAQAgAAAMgdQAxgXAngbIAKABQAZAAANgSQAzgMAzgWIArgHQBMgDBEgWQAWgCAXgGQApgDAggKQAgAGAbAAIAdgBIAbABIAVgBQAOAJANADIBkAZQA5AOAtAHQAtAjA3ATQBFBSBlAdQAYANAbgDIAAAAQATADARAAQBbAABOgwQAAB/AFCHQgcgUgbgZIgWgWQAPBmAMDSQgUgXgjgVIgggPIBgEIQA6CuAABTIg3gmIgWgOQAhB3gbDDQgNBjgUBKQgMg4gbghIgZgXQgPCXgfBmQgmB8hDBFIgWhDQicCygxAvQAKguAFgeIACgVQhKCBlHD5QikB8iVBjQBnjBA7kTg");
	this.shape_77.setTransform(247.475,402.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC4E3C").s().p("AhhJsIipgQIgFgBIgBgFQhLj6gKiZQgFhXAPglQgniKgQimQgSi3AWh0QAFgcAZgmIASgZQg1BOAKDfQAJDRA0C3IABADIgCADIgGAWQgFAfACAwQAGCZBNEDQFiAlBigHQAqm4AVhxIABgCQAqhXAmiCQBMkEgTjdIAKA4QAJA/gCAfQgKC2g/DFQgiBpgiBFQgPBRgZD1IgXDnIAAAHIgGAAQgRACgZAAQhSAAiugPg");
	this.shape_78.setTransform(183.4132,515.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC4E3C").s().p("AAtHBQgVg/ggg1QgVgjgWgXQg5CigIAMIgIARIgGgRQgdhTglhJQgeAhgTApIgGAOIgHgOQgZgzgLhDIg+BSIgBgVQgBhCAMgcQgoiPgRiYQgUi0AXhxQAMg5AXgiIAVgWQg7BLALDpQAJDPA0C4IABADIgCADIgEAPQgFAVgBAfIA7hMIACASIAGAmQAJAtAPAjQAYgsAbgcIAHgHIAFAJIAVAqQAYAzAVA4QAXg8AmhsIAEgKIAIAHIAiApQAkAzAaBBQAJhCAfhaIAEgMIAIAJIBkBrQARgdAcgkIANhVIABgCQAqhYAmiBQBMkDgTjdIAPgCQASDchJEAQgoCOgsBXQgGAigHAzIAAACIgBACQghArgRAdIgFAJIgHgHIhihoQgXBFgKA7QgFAdAAAQIAAAug");
	this.shape_79.setTransform(183.3433,500.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F37E3A").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_80.setTransform(183.6938,497.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3733C").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_81.setTransform(183.6938,497.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AhaJpQgGioASknQALgdgIgdIgDA6QgKAbgXAUQgXAVgeAHQAAhAgEghQALg8gHgkQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhNAAipgOg");
	this.shape_82.setTransform(183.6987,514.6813);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#444444").s().p("AAAgcQAIAcgKAdg");
	this.shape_83.setTransform(176.077,527.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3D3D3D").s().p("AiBJmQgHg9gFheIgIicQgHAPgeAXQgdAWgIAPQAFgmAkiQQAbhtgJgzQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhUAAjJgRg");
	this.shape_84.setTransform(183.6987,514.6817);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373737").s().p("AhGJrIjFgTQhRkNgFiaQgBgxAGgfIAGgVQg0i6gHjRQgHjmA9hNILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgQABgbAAQhJAAiXgMg");
	this.shape_85.setTransform(183.6938,514.688);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC4E3C").s().p("AwgXqQhQhSAFirIAAgDQAIk7AOi0QAXk2A1jyQCPqHF6kHQBag+BWg5QEEiuBahcQCKiKBKjYIAGABIAKgBQhLDeiMCMQhbBekICwIiwB4Ql2EDiNKDQg1DxgXE0QgNCygJE7IAAAEQgECjBMBPQBIBJCSAAQCvAAE0huQCxg/FRiVQGAiqEAjbQBQhEA6hCIArg2QBgh/AXkNQAOiigLl5QgJkwAEieQAGjHh1jtQhmjPiWibQgngogmgfQAJAAAKgDQAmAgAfAgQCXCbBoDUQB1DwgFDKQgECcAJExQALF7gPClQgXEOhiCCIgrA2Qg6BDhRBEQkCDemDCrQltChjBBDQkUBgipAAQiZgBhMhOg");
	this.shape_86.setTransform(132.8253,441.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F37E3A").s().p("AuNTEQg7g/AGjiQADksAFinQAKkoAkjSQBopRF0kCQBphJDRh/QCshpBNg+IA8ChQAkBgAbA9QAPgPAHgtQAIgsAPgPQAABkAqCJQAYBOA0CgQASgbAKgoIARhDQAACKgCBGQgDB3gKBZQAIgxAuhNQA0hZANgmQAuA/ADBjQACBxAiBFQAPgeAngfQAngeAPgeQgRCiBECyQAhBWB4DgQgTAogWAdIhFBSQhhBniLBlQjqj4hGk5Qg0CTkBBZQhsAmhwANQhwANhOgRQAMErguCxQg7DfirCeQg/ALgwAAQhbAAglgpg");
	this.shape_87.setTransform(140.3221,471.6952);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3733C").s().p("Au5X/QhqhOAFjYQAEkvAGiqQALkvAmjaQBrpkF0kCIERi6QCHhdBNhDQC9ioBYj4QAJAEAMAAQAeAAANgaQAJgHADgIQAcgFAPgaIAHgIQAnAAARgfIAFgCQAJAFAMAAQAgAAAMgdQAugVAqgeIAKABQATAAANgLQCmCIB8D2QCFELgGDoQgECXAIEJQAIEfgCBqQgCDOgaCFQgfCghGBdIhFBTQhhBniLBlQjqj4hFk5Qg3CaiTBRQiRBQidghQAKDviYDtQhvCtjjDQQhBAMg2AAQhqAAg+gtg");
	this.shape_88.setTransform(139.8983,439.8418);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2633B").s().p("AxlTwQAJk2ANixQAXk2A1jyQCOqOF4kFIEPi3QCGhbBIg/QBchRA9hbQBChjAuiIQAfgBARgVIAJgCQgEAXAMARQANAUAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAmAAATggIAEgBQAJAEAMAAQAgAAAMgdQAtgUArgeIAKABIAMgBQCyCWB/DvQCKEEgGDdQgECYAIEJQAIEfgCBpQgCDOgaCFQgfCghGBeIgpA0Qg5BBhQBFQkADdmFCrQktCFimA+Qj+BfinAZQg6AIgyAAQk2AAAIlDg");
	this.shape_89.setTransform(132.8513,441.5762);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC4E3C").s().p("AjYLFQgmhYgzi+IgDgPQgih+gOkjIgHkPIAAgCQAiiSFOjkQCohzCzheIAMgHIgBAOIgZCdQgmDAhGC0QAOCggODOQgaGFiBEOQhLChhLAAQhKAAhDicgAgPpnQktDTggCFIAHEUQAOEcAhB7IAEAPQAwC0AkBXQBACcBDAAQBCAABHiYQCDkTAYmNQAHh8gEh7IgFhkIgBgCIABgBQA+ifAmirQAWhiAKhWQjGBsikBzg");
	this.shape_90.setTransform(259.275,536.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC4E3C").s().p("Ag4GPQgjhFgtgzIhFByIgGgMQgnhHgfhJQghAtggBEIgNAcIgBgfIgDh+IAAgzIAAgBQAiiTFOjiQCohzCzhfIAMgGIgBANIgZCeQgmC/hGC0QAEApACBHIAAACIgBACQg1BIg9AcIgEACIgDgDQhKg0g9gwQgSCEgDAbIgCAZgAiEEFIAZAeQAdAlAYArIAWiiIAKAIIAjAcIBqBNQA2gaAwhAQgChJgEglIgBgCIABgCQA+ieAmiqQAWhjAKhVQjGBsikBzQktDRggCFQAABCACBPQAdg4AggqIAIgJIAFALIAUAsQAYA1AYAuIBBhsg");
	this.shape_91.setTransform(259.275,492.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F37E3A").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_92.setTransform(259.225,491.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3733C").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_93.setTransform(259.225,491.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#444444").s().p("Ah8GwQgjixAAiyIgsBBQgZAigUAUQgRicAcjCQARh0A1jqQB8hbChhfICKhOIgYCbQgnDAhHC3QASCJgSDyQgcFyh1ECQhDiigiivg");
	this.shape_94.setTransform(269.2885,528.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3D3D3D").s().p("Ai0HWQgTguAAhLQAEhXAAgsQgIAPgUAfQgRAeAAAbQhcnjCFlwQCDhmC6hvIChhcIgYCbQgnDAhHC2QATCNgUD2QgdF6h6ECQgnBRgkAmQgjjGg/iog");
	this.shape_95.setTransform(266.982,535.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373737").s().p("AinMPQg7hchLkYQgih/gNkkIgHkLQAiiSFVjnQCshzCkhXIgYCbQgmDAhIC2QATCNgTD2QgeF6h7ECQhJCdhGAAQgwAAgthIg");
	this.shape_96.setTransform(259.225,537.0093);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(189.1,0,386.79999999999995,491.8), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("Ak76BQAxBugzBOQg0BPh4AAI2aAAMAAAA8HMA8HAAAIAA2bQAAh4hPgzQhOgzhuAwQg8AbhLAaQiWA1hMAAQiuAAh7h8Qh8h7AAiuQAAivB8h7QB7h7CuAAQBMAACWA1QBLAaA8AaQBuAxBOg0QBPgzAAh4IAA2ZI2aAAQh4AAgzhPQgzhOAvhuQAbg8AahMQA2iWAAhMQAAiuh8h7Qh8h8iuAAQiuAAh7B8Qh7B7AACuQAABMA1CWQAaBMAaA8g");
	this.shape.setTransform(193.4,500.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgeDAmRMAAAg8HIWaAAQB4AAA0hPQAzhOgxhuQgag8gahMQg1iWAAhMQAAiuB7h7QB7h8CuAAQCvAAB7B8QB7B7AACuQAABMg1CWQgaBMgbA8QgvBuAzBOQAzBPB4AAIWaAAIAAWZQAAB4hPAzQhNA0hugxQg8gahMgaQiXg1hLAAQivAAh7B7Qh7B7AACvQAACuB7B7QB7B8CvAAQBLAACXg1QBMgaA8gbQBugwBNAzQBPAzAAB4IAAWbg");
	mask.setTransform(193.4,500.175);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9A6C").s().p("Al+CMQBCgyBHgsQDkiPDEgfID/g0IhWAeQhcAJiQAtQkfBbkCC6g");
	this.shape_1.setTransform(398.75,264.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767674").s().p("Ag6AWQgagJAAgNQAAgMAagKQAYgJAiAAQAjAAAYAJQAaAKAAAMQAAANgaAJQgYAKgjAAQgiAAgYgKg");
	this.shape_2.setTransform(549.9,221.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9A6C").s().p("Av1JmIAAAAIAOgRQBwk0E+iDQDOhVEAAAQBKAABcAVQA3ANBfAdQA+ATAZAHQArALAaAAQATAAALgHQAVgLAhgIQAUgEAqgHQA3gIAVgHQAjgLAHgTQAHgWgrhWQgZgzg9hqIgyhaQgYgrgGgTIgHgVIA/AuQgghDgXhMQgihwgChpIgBg4IAPA2QAQA2AtA/QAcAmA+BIQAuAzAVAbQAAgNAFgMIAGgSIAIARQAbA+A4A/QAdAfAYAUIBhBZQBiBeAmA0QAFAIAFAIIgHARIgIgMQgfgxhqhmIhlheQgWgTgbgcQg1g4gdg6QgBAPAGALIgOAIQgSgbhBhLQg0g9gYgfQgogzgUgtQAKB1AvB5QAXA9AWAmIAVAkIgfgaIgzgoQAQAhA1BdQBGB7AaA2QAkBLgJAZQgJAZgnANQgWAIg8AJQhRAMgeAQQgPAJgWAAQgbAAgsgLQgZgHhBgUQhegdg2gMQhagVhJAAQkIAAjRBbQlECNhhFMIgTBCg");
	this.shape_3.setTransform(457.45,210.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAXQgIgKgBgNQABgMAIgJQAKgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAKQgJAIgNABQgMgBgKgIg");
	this.shape_4.setTransform(539.5,171.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoApQgRgRgBgYQABgXARgRQARgSAXAAQAYAAASASQAQARAAAXQAAAYgQARQgSARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(538.15,160.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(452.25,186.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(450.75,174.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_8.setTransform(442.775,178.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D64AB").s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6QA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6gAh/h/Qg1A1AABKQAABLA1A1QA2A1BJAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhJAAg2A1g");
	this.shape_9.setTransform(442.75,178.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E6BB0").s().p("AgBCLQhMghgrhCQgvhKAThSQAzgoBAAAQBNAAA4A3QA3A3AABOQAABHgwA2QhBgBgrgRg");
	this.shape_10.setTransform(446.1286,174.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5085C3").s().p("AiECFQg3g2gBhPQABhNA3g3QA3g4BNAAQBOAAA4A4QA3A3AABNQAABPg3A2Qg4A3hOAAQhNAAg3g3g");
	this.shape_11.setTransform(442.75,178);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC4E3C").s().p("Ah8DFQhpgwgkh5QgMglgCgpIgBgiIAAgDIATgQQBGg6AmgVQA9gjBBAAQAoAAArAOQBfAdBJCLQAlBFATBHIABAFIgDADQgqAcg4AaQhuAzhaAAQg6AAgugVgAiTioQglAUhEA5IgOALQgCA5AVA7QAkBpBdArQAsATA2AAQBPAABlgrQA4gZAwgfQgXhNglhEQhEh6hUgaQgpgNgmAAQg9AAg7Aig");
	this.shape_12.setTransform(444.2,178.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah4C+Qhogwgih2QgLgkgDgoIgBggQBlhSArgVQBXgoBhAeQBdAdBICNQAkBFASBAQg6AohOAfQhYAihGAAQg3AAgtgVg");
	this.shape_13.setTransform(444.15,178.0645);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2633B").s().p("AiHDVQh0g1gniFQgMgpgEgsIAAgkQBxhdAxgXQBggtBtAiQBpAhBRCdQApBOATBIQhAAthYAiQhiAmhPAAQg+AAgzgXg");
	this.shape_14.setTransform(444.15,178.059);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC4E3C").s().p("AgbHPQhIACheg8IhVhAIgRgQIAXACIAaACQAuAAAfgTQhCgUhShJIhJhIIgHgJIAKgDQBEgWA2gfQhVg3hJhXIg5hOIgJgOIASAEQARAEAWAAQAmAAA+gMQhEhFgog6IgcguIgEgKIBcAAQg6hLgbg0IgQgpIgBgLIALADQAvAOB3ATQCDAXBAAQQBrAdA5AnQCGBaBwCNQDPEDgTEcIgBAFIgDABQg6AghIAdQiPA5hjAAQhhAAgqg6gAgTHBIACADQAlA3BcgBQBaABCFg0QBNgeA9ghQARkWjLj9QhwiNiBhVQg4gmhpgcQg9gPiEgXQhngRgzgNQAWA7BRBlIAKAMIhkAAQAoBHBhBhIAJAJIgNAEQg/APg1gBIgagBQAgAwAoArQBCBGBJAuIAKAGIgKAHQgvAdhNAbQAsAvArAjQBMA/A6AMIAOAEIgLAJQgJAJgSAIQgiAPgrgBQAwAoAwAaQBLApA5gCg");
	this.shape_15.setTransform(352.8589,87.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9F5EA").s().p("AgQHFQhHADhhg+IhSg+QAzAGAogQQAUgIAKgKQhEgPhZhOIhLhLQA0gRAugXQAXgLAMgIQhag4hLhZIg5hOQAiAJBAgJQAggFAZgGQhIhJgrg9IgcgvIBhAAQhAhOgdg5IgQgoQClBWBrA+QBtA+BgBBQCMBeBxCKQCjDFApDdQheAyhrAeQhRAWg9AAQhjAAgqg9g");
	this.shape_16.setTransform(352.2,88.0321);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECE3C4").s().p("AgaHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBrA4C3A+QCcA1BBAtQB8BUB6CoQCbDVApDiQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_17.setTransform(353.175,87.8583);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0D3AC").s().p("AgbHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBGAUDEAgQC1AjBMA0QCdBpB1CiQCuDwgSEFQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_18.setTransform(353.2592,87.8583);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC4E3C").s().p("AiMLPQg2gHgbgOQhdg0hVhrQhXhtg/iSQhOi1gMlRQgLk+Ayh7QANggARgHQAlgPCKAOQCaAPClAsQC+AyCSBKQC/BhBfCBQBgCDAACWQgBB0g6B6QgiBGg3A8IgxAuQBXhYA1iBQBpkAicjVQikjgm+h4QijgsiYgQQiJgPgkAPQgLAFgLAaQgxB4AME+QAMFQBLCuQBeDaCGB4QBwBkBoAHQgVAAgbgEg");
	this.shape_19.setTransform(357.8008,87.4371);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F37E3A").s().p("AkqI0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPB7AMQCKAOCTApQGVBxCnDlQChDchVEAQgrCBhLBUIofFQQhjgHhgiPg");
	this.shape_20.setTransform(358.874,89.0659);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7985D").s().p("Ak9I0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPCCALQCSANCbAnQGtBuCnDlQChDbhtEEQg2CDhXBWIofFQQhjgHhgiPg");
	this.shape_21.setTransform(360.7657,89.0505);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3733C").s().p("AlGJCQhlh6hfjfQhYjLgCloQgBiWAShoQAShtAfgMQAkgPCCALQCSANCbAnQGsBuCoDlQCgDbhsEEQg3CDhWBWIofFQQhpgHhqiBg");
	this.shape_22.setTransform(360.1105,89.0505);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2633B").s().p("AlGJaQiBh6hZjPQhYjMgCmAQgBigAShvQASh0AfgNQAjgOCJANQCZAQCkArQHCB3CoDlQCgDbhsEEQg3CDhWBWIofFQQhygIh3hxg");
	this.shape_23.setTransform(357.9105,88.1746);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC4E3C").s().p("AgZgMIAFgOQAUAIAPAXQAIAMADAKQgYgcgbgLg");
	this.shape_24.setTransform(462.15,73.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CB9A6C").s().p("AgjB5Qg4gVgsgnQhDg7hShMIhEhBIBKA7QBWBIBDA6QBVBMB2AAQB2AABhhMIACgCIADABQAiAGASgEIADAOQgVAFghgHQgxAmg6AVQg4ASg6ABQg8gBg1gTg");
	this.shape_25.setTransform(509.45,245.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323232").s().p("AgYC3QgEgOgMgUQgZgogtgcQgmgYgagfQgeglgCgmQgCgvAwglQAfgYA3gOQA2gPA6AAQA8AAAqAQQApAPAOAbQAhBDg8BMQgjArhOA6IgUAPQgYAUgMATIgJAOIgIADgAhFieQg0AOgeAXQgqAfACApQACAhAcAhQAXAdAkAWQBAAoAWA4QAQgXAZgVIAVgQQBLg3AggoQA7hHgeg8QgMgXgmgNQgngNg3AAQg3AAg0ANg");
	this.shape_26.setTransform(540.9679,233.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgyCkIAIgKQAIgQAGgSQAWhCgwgeQhQgxgNgSQgcglA6gsQBDgzBTgDQBXgEAbA3QAjBHhOBTQgaAcgoAfIgwAlQgUAQgMAPQgIANgJANg");
	this.shape_27.setTransform(545.1472,233.5395);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("AghCBQgBg5gwgeQhGgrgRgiQgXgvA7gsQBDgzBkgCQBogCAbA3QAjBGhOBUQgZAbgoAfIgyAmQgYAUgOAUIgJAQQAIgWgBgdg");
	this.shape_28.setTransform(543.2695,233.4715);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AghCRQgZgpgwgfQhCgpgUg0QgXg/A8gtQBCgzB8gBQB+gBAcA3QAjBHhOBTQgaAcgoAfIgxAlQgaAVgNAUIgJAQQgDgPgNgVg");
	this.shape_29.setTransform(540.9464,233.4241);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB9A6C").s().p("AhSIvQishbiVggQiUghhaAiIAkgQQAqgPAagBQBdAAB3AkQB4AkCDBGIACABQB2B5CLgUQBdgNBVhHQBCg2Aeg3IACgDIAEgBQAmgFAlghQBEg9ATh/QALhLgog9QgZgmhRhIQgugpgWgWQgngngegmQhRhJgnhKQgBAPAFALIgNAIQgSgbhBhLQg1g9gXgfQgogzgVgtQALB1AvB5QAXA9AWAmIAVAkIgggaIgygoQAPAhA2BdQBGB7AaA1QAjBMgIAZQgJAZgnANQgWAIg8AJQhRAMgdAQQgZAOg2gKQghgGhWgbQhegdg2gMQhbgVhJAAQhEAAg/AGIgCgPQBBgGBEAAQBKAABcAVQA4ANBfAdQBQAZAgAGQA1ALAVgMQAUgLAhgIQATgEArgHQA3gIAVgHQAjgLAHgTQAHgWgrhXQgZgyg9hqIgzhaQgXgrgHgTIgHgVIBAAuQgghDgXhMQghhwgDhpIgBg4IAPA2QAQA2AtA/QAbAmA/BIQAtAzAVAbQABgNAFgMIAGgSIAHARQAiBOBcBVQAfAmAnAmQAXAXAsAoQBTBKAaAoQAqBBgMBQQgSCAhEBAQgoAmgtAIQggA6hEA3QhYBIhfANQgYADgRAAQh7AAhphsg");
	this.shape_30.setTransform(497.7736,205.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F5EA").s().p("AucGiQAqg+AlgiQC2i3Ekg8QCSgdBtAIQBvgBDEA+QBYAaAgAHQA3ALAYgNQAbgPBugSQBYgOAMghQALghhfipQhwjHgHgVIAVAPQAZATAbAWQgagsgahGQg0iOgDiEQAVBKBUBkICECeQgDgFgBgJQgDgTAHgTQAiBQBdBWQBGBWCBBvQBaBagPBoQgSB6g/A/QgqApgtAGQgWApg5AgQg9AjhMAIQjCAUifijQhPgpi2ACQixACjOArQjcAvisBOQjBBXhbBsQAWiNBTh9g");
	this.shape_31.setTransform(458.3821,213.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECE3C4").s().p("AwCKnQAHgPAQgSQA2g7CIhIII1nIQBEgHBAAAQBvAADFA9QBXAbAhAHQA2ALAYgNQAbgPBvgSQBYgOALghQAMghhgiqQhwjHgGgUIAUAPQAaATAaAWQgZgsgahHQg1iNgDiEQAWBKBTBkICECeQgCgFgCgKQgDgSAHgTQAiBQBdBVQBHBXCABuQBaBbgPBoQgRB6hAA/QgpApguAGQgWAqg4AmQg/ArhKAQQjEApidihQiUhOiagHQh+gFhxAqQhvALiZAwQkzBgjRC4QAAgEADgHg");
	this.shape_32.setTransform(458.3321,213.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0D3AC").s().p("AhJIRQinhZiUgiQidgkheAjIABkkQBEgGBAAAQBvAADGA9QBXAbAhAGQA2ALAXgNQAbgOBvgTQBYgOALggQAMgihgipQhwjHgGgUIAUAOQAaATAaAWQgZgsgahGQg1iNgDiEQAWBJBTBkICECfQgCgGgCgJQgDgTAHgSQAiBQBdBVQBHBWCABuQBaBbgPBoQgRB6hAA/QgpApguAHQgYAsgyAvQg9A5hEAcQg9AYg5AAQh2AAhohqg");
	this.shape_33.setTransform(497.3321,208.2952);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC4E3C").s().p("AhZDAIgDgBIgCgDQhdjRA+heQA8hcDEAOIAGABIABAFQADALADAWQAGAmAAAkQABBzg1BHQgnAzgxAXQgiAPgjAAQgbAAgDgDgAhwhrQg5BYBXDFQAKADANAAQAgAAAfgPQAugVAkgwQAug+ADhkQACg7gMg2IgsgCQiSAAgvBJg");
	this.shape_34.setTransform(537.8102,166.3018);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D2D2D").s().p("AhHBIQgagdAAgrQAAgqAagdQAbgeApAAQAqAAAdAeQAeAeAAApQAAAqgeAeQgdAegqAAQgpAAgbgeg");
	this.shape_35.setTransform(532.825,166.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D64AB").s().p("AhbCRIgCgBIgCgEQhRjSBmhQIACgBQAYgHAWAAQBBAAAuAvQAvAuAABBQAABBgvAvQguAuhBAAQgiAAgfgNgAhCiJQhbBIBLDGQAcALAcAAQA7AAAqgqQAqgqAAg8QAAg6gqgqQgqgrg7ABQgTAAgVAFg");
	this.shape_36.setTransform(535.9151,166.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E6BB0").s().p("AhHA2Qg4g8ARhTQALgSAUgQQAUgHAYABQA9AAAtArQAsAtAAA9QAAAhgNAcQgMAcgXAWQhYgWgyg3g");
	this.shape_37.setTransform(536.8931,164.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5085C3").s().p("AhYCKQhPjOBihLQATgHAYAAQA+AAAsAsQAtAtAAA9QAAA/gtAsQgsAsg+AAQghAAgdgNg");
	this.shape_38.setTransform(535.9447,166.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHC7IgQgCQixmPGLAdIAFAdQAGAlABAkQABBzg0BFQg0BGhFAOQgPADgOAAIgNgBg");
	this.shape_39.setTransform(537.8172,166.3109);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2633B").s().p("AhQDWIgTgDQjLnHHEAhIAGAhQAHAqAAApQACCDg8BQQg7BPhOAQQgRAEgSAAIgNgBg");
	this.shape_40.setTransform(537.7978,166.3423);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC4E3C").s().p("AuUPZQgeAFgUAAQgrAAgRgXQgVgcARg/Ih/AlIAFgNQAihrAZiYQgXAagPANIgKAKIgLAHIgBgNIgFh4QgEhEADgZQAFgiAZgkIhdAeIADgNQAdh+A5hdQgcAQgaANIgWAKIgMAFIACgNQAOhsBLipQBMipBgiLQATgcAshOQCZkKB8iCQDdjnEBAAQCHAACQA/QAegPAmgLQBEgUBKAAQBpAABpApQCKA3B9B5QDSDJBdCsQBAB3AfCiIADAMIgMgDQgrgNgcgLQArBQAWBVQAaBfgLBEIgBAJIgJgDQgtgRgigRQASBdAABFQgBBcgfBPIgFAOIgIgNQgfgyhqhmIhlhdQgXgTgagdQg1g4gdg5QgBAPAFAKIgNAIQgSgbhBhKQg1g8gXgfQgog0gVgsQALB0AvB5QAXA8AWAnIAVAjIgggaIgygoQAPAhA2BdQBGB7AaA3QAjBLgIAZQgJAZgnAOQgWAHg8AKQhRAMgeAQQgPAIgXAAQgaAAgsgLQgZgGhBgUQhegeg2gMQhbgVhIAAQkIAAjSBbQlDCOhiFMIgTBBgAv0NjQgUBDASAYQANARAjAAQAVAAAkgGIAHgBQBwkzE9iEQDPhVEAAAQBJAABcAVQA4ANBfAeQA+ATAZAGQArALAZAAQAUAAALgGQAVgMAhgHQATgFArgGQA3gJAVgGQAjgLAHgUQAHgWgrhWQgZg0g9hpIgzhaQgXgrgHgUIgHgVIBAAvQgghDgXhLQgihxgDhoIgBg4IAQA2QAQA1AtA/QAbAmA/BIQAtA0AVAaQABgNAFgMIAGgRIAHARQAbA8A5A/QAdAgAXATIBhBZQBjBfAlA1QAbhNgChaQgBhDgThcIgDgQIAOAIIAWALQAcANAhANQAIhGgdhfQgZhVgrhMIgLgSIAUAHQAAACBMAYQgeiahCh3QhcimjLjDQhshph2g2Qh2g2h3AAQhNAAhIAXIg5AWIgDACIgDgBQiQg/iFAAQj8AAjZDkQh5CAiYEIQgwBUgQAXQhcCEhKCjQhJChgSBtQAugWAtgcIAkgWIgaAhQgQAVgUAmQgpBOgXBcIBzglIgPATQgiAqgHAhQgFAYAFBJQAEA0ABA0QARgRAhgmIARgTIgEAZIgPBbQgUBqgYBMIB+glg");
	this.shape_41.setTransform(447.7781,173.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F37E3A").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QAgguBkiwQBtiyBrhuQFKlRGdC2IA5gOQBIgMBPAIQD8AaDhDZQDaDRBVCQQA7BkAbCLIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_42.setTransform(457.0201,153.0233);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7985D").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QAgguBkiwQBtiyBrhuQFKlRGdC2IA3gXQBHgXBOgBQD5gCDhDZQDVDNBdCxQA8BxAeCaIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_43.setTransform(457.0201,153.0233);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3733C").s().p("AvQLyQghhzgBhjQAAAWgUBEQgSA8AJAqQh3jHBokFQgbAJgXAeIgnAyQALhRArhPQAshTBBg2QgsAAgkALQgiALgiAXQAYiTBRi/QAfguBkiwQBtiyBrhuQFKlRGeC2IA3gXQBHgXBOgBQD4gCDhDZQDVDNBeCxQA7BxAeCbIhDgWIgWgIQAvBTAZBaQAcBjgLBFQglgOgggPIgYgMQAVBjAABIQAABdgfBQQgfgzhrhoIhlhdQgYgTgdggQg6g/gbhAQgHATADASQABAKADAFIiEieQhUhjgVhKQADCEA0CMQAaBHAaAsQgbgWgZgTIgVgPQAHAUBwDHQBfCrgLAhQgMAhhYAOQhuASgbAPQgYANg3gLQgggHhYgbQjFg9huAAQjVAAi4A+QkeBgiKDjQg2iNgThAg");
	this.shape_44.setTransform(454.9701,161.5483);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2633B").s().p("AuNPvQhJALgZgNQgpgVAbhZIh+AlQAahOAVhwIAQhfQggAlgTASIgMALQgJiYACgnQABg1Arg0IhoAhQAYhjAqhTIAmg/QglAXglATIgeAOQAPhtBLinQBLipBfiIQAgguBkiwQBsiyBrhuQFLlTGeC2IA3gWQBHgXBOgBQD5gDDhDZQDVDNBdCxQA8BxAeCcIhDgWIgWgIQAvBSAZBbQAbBigKBFQglgOgggPIgYgMQAUBjAABJQABBcgfBQQgggzhrhnIhlhdQgXgTgdggQg6hAgcg/QgHASADATQACAJACAGIiEieQhThkgWhJQADCEA1CMQAaBGAZAsQgagWgagTIgUgOQAGAUBwDHQBgCqgMAiQgLAghYAOQhvATgbAOQgYANg2gLQghgGhXgbQjGg9huAAQkEAAjRBZQlNCPhjFSg");
	this.shape_45.setTransform(447.9201,170.7848);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC4E3C").s().p("ACZIEQhwgihxg1Qjhhqg/hyIgBgDIABgDQAMgiAZgzQAyhmBGhfQDbkxFHiBIAJgEIAEA3QAODOgRBxQgcDAh2CVQAdgBAegOQAOgGAJgHIAjgbIgYAlQg3BTguA2IBAgPIAdgIIANgDIgEANQgWBBg8BOIg7BEIgDADgAizhXQhwCVg2COQA7BpDRBlQB0A4ByAjQAdgeAdgmQAxhBAWg4Qg4AQgvAIIgZAFIASgSQACAAAYgcQAhgoAng5QgnASgngDIgOgCIAJgLQB5iUAejBQARhxgOjPIgCgiQkzB8jTEcg");
	this.shape_46.setTransform(520.1713,59.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9F5EA").s().p("AgfFZQjmhrg+hxQADgWAOgjQAbhHAyhGQCgjhFHiCIAICSQACBPgMA9QgbCciFCiQAjADBkgqQAzgUAqgWQgvBIgnAvIgeAjQA2gLA+gQQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_47.setTransform(517.15,67.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECE3C4").s().p("AgfF9Qjmhrg+hxQAIgaATgrQAmhVA8hQQC+kFFHiCQAMDKgWBwQgjCziFCjQAjADBOgfQAngRAfgRQgvBIgnAwIgeAiQA2gKA+gRQgWBBg8BNIg5BBQhmgehyg1g");
	this.shape_48.setTransform(517.15,64.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0D3AC").s().p("Ag+GoQjmhqg+hyQALgfAYgzQAyhlBEheQDakwFIiCIAJCiQADBkgJBOQgaDUiDCfQAkADAkgQQATgIALgJQgvBIgnAwIgfAiQA3gKA+gRQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_49.setTransform(520.261,59.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC4E3C").s().p("AivGzQh+hDhehAQhghDgPgfIgBgEIABgCQANgiAYgzQAwhlA7heQC8ksDph5QDBhjBhgBQBMAAAfBAQASAmAHBZQALCEgPCCQgJBTgTBEQAXgQASgRIAQgQIgEAWQgFAagDA1QgEBCgGAgQgMA2gbAoIAvgUIAQgFIgZA/QgoBrgYAzQgqBTg0A6QgRASgoAAQiHAAk0ingABCnnQjeByi2EbQhgCUg4CQQARAfBgBBQBdA/B8BBQEuChB+gBQAhAAAMgNQA0g3AohSQAZgyAohqIALggIg5AZIghAPIAYgaQAmgqAOg7QAIgjAFhIIAEg8QgVATgXAOIgRALIAGgTQAPguAMhMQAXiXgNiaQgIhcgSgkQgagyhBAAQhcAAi/Bjg");
	this.shape_50.setTransform(516.15,60.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F37E3A").s().p("ACjI2QhwghibhNQiQhIhyhLQh2hOgQgkQALggAYgyQAuhlA7hdQC7ksDqh5QD3h/BOBDQAfAZAMA9QAEAXAHBcQANCdgHB8QgFA/gGAeQAggUAagaQgIAwgGBkQgLBZgxA3QA2gZAUgHQg8CcgNAcQgsBhg7A/QgOAPgkAAQgoAAhEgUg");
	this.shape_51.setTransform(515.9,60.9308);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7985D").s().p("ACjI+QhwghibhOQiQhIhyhLQh2hNgQglQALgfAYgzQAuhkA7hdQC7ktDqh4QD9iDBYAqQAlASAQAyQALAiAGBIQANCdgYCYQgLBMgPAsQAggUAagZQgIAvgGBlQgLBYgxA3QA2gYAUgIQg8CcgNAcQgsBhg7A/QgOAQgkAAQgoAAhEgUg");
	this.shape_52.setTransform(515.9,60.1735);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB9A6C").s().p("AgFgrIAAABIANgSQgCARAHAPIgZBZg");
	this.shape_53.setTransform(357.125,275.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC4E3C").s().p("ABnOqQiYgXichnQh0hMhLhXQAWBbAVAfIAWAgIgggVQiDhZiPi7QjAj7gfjrQgij7CljBQAThxBnh1QDAjZGKhCIAMgCIgEAMQgWA4gFAqQAVgTAYgSIACgBIACAAQAagEAkAAQDHAAEMB3IAQAHIgQAHQhzAvhZA0QBXAaBgAwQAxAYAfAUIANAIIgOAFQhTAihbBGQCLBICaA0QBOAZAzAMIAXAEIgWAJQi7BNifAfQBtBFBsArQA2AUAhAIIAaAHIgaAIQjHBAiPAgQBkA9CUBhIAMAIIgOAFQh6Avh6ASQBOBDA6BEIAHAHIgKAEQiuBKhOgGQAnApAtAdQAgAXAFAAIAQAIIgRAGQg+AVhdABQhQAAhWgPQAvAeA2AXIAdAMIgfADQg3ADg9AAQg3gBgygCQA6BhAgBGIAFANgABbOZQgphTgxhRIgGgMIANABIAiABQAqACAqAAIBVgCQhEghgkgeIgagUIAgAIIA8ALQBIAKBAAAQBNAAA5gQQhDgog7hAIgbgeIAkASIAGACQAJABAMABQBNgBCXg+QhGhOhHg6IgNgMIARgCIBIgLQBYgSBVggQithwhOguIgRgKIATgEIBXgVQBygdCHgrQiRgsichlIgRgKIATgEIBggUQB4gfB9gyQhMgUhUgfQiGgwh3hAIgKgFIAIgHQAWgRAggXQBBgrA3gYQgugag3gaQhWgohNgWIgQgFIAOgJQAUgMAjgSQBHgmBPghQkAhvi9AAQggAAgaADQggAXgaAYIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD1QAeDbCrDqQB/CuCLBrQgWg1gRhOIgIgkIAVAeQA1BLB6BXQChBzCgAdIAAAAg");
	this.shape_54.setTransform(282.8096,623.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F37E3A").s().p("AgnKXQithKh5h4QjajAgTjRQhDA5gJBdQgGA2AIBsQhJh5gSh3QgViGA0hzQAWg2AzgYQAwgWA5ALQhTg+gGhpQgFhaAyhkIAIgLQCciFEegwQgTAygHAnQgEATAAALQAbgZAigYQBNgLBpASQCcAaC6BSQhWAjhMAoQglAUgVANQBcAaBmAzQAzAZAhAVQg6AWhFAvQgjAXgXASQCQBNCfA1QBQAbAzALQiGA2iBAiIhlAWQB0BKBzAuQA6AYAiAIQiSAvh5AfIhdAWQBlA7CjBsQhbAjhdATIhMANQA1ArA1A3QAbAcAPASQhqAuhKAPQi2gMiqhJg");
	this.shape_55.setTransform(292.825,605.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3733C").s().p("AiXKTQkLiWhYkbQgJBEAjBnQArCBAFAqQiShdhjh9QhtiLgTiTQATi9CDiYQgDgaAFgoQALhQAqhIQCJjpGXhFQgTAygHAnQgEAUAAAKQAbgYAigYQBMgLBqASQCcAZC6BTQhWAjhMAnQglAUgVAOQBcAZBmAzQAzAZAhAVQg6AXhFAuQgjAYgXASQCQBNCfA1QBQAaAzALQiGA3iBAiIhlAWQB0BJBzAvQA6AXAiAIQiSAvh5AfIhdAXQBlA7CjBrQhbAjhdATIhMANQA1AsA1A3QAbAcAPASQiIA6hRAIQgZADgRgDIgLgDQA0A5A9AnQlBgJjmiBg");
	this.shape_56.setTransform(286.425,610.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2633B").s().p("AjgMPQh8hYg1hLQAQBJAUAwQAJAZAHAJQhUg4hqh1QiBiRhQiZQjemqEBkrQANhkBehxQC8jjGXhFQgSAygIAnQgDATAAALQAagZAhgYQBOgLBpASQCcAaC7BSQhXAjhLAoQgmAUgUANQBbAaBnAzQAzAZAhAVQg6AWhFAvQgjAXgXASQCPBNCgA1QBQAbAzALQiHA3iAAiIhlAWQB0BKBzAuQA5AXAjAIQiSAvh6AfIhcAWQBkA7CjBsQhaAjheATIhLANQA1ArA1A3QAaAcAQASQiJA6hQAIQgaAEgQgEIgMgDQAsAyA0AkQAaARARAJQhXAeiMgMIh7gSQA0ApBOAhQhNAFhWgCIhHgDQA/BoAhBKQiogbiph5g");
	this.shape_57.setTransform(281.8609,623.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC4E3C").s().p("AgOABIAGgNIAXAMIgGAMg");
	this.shape_58.setTransform(284.725,699.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CAA87C").s().p("AqVOIQjNgwiLg/QA3BcAeBBIAFANIgNgCQiZgYichmQh0hNhLhWQAWBaAVAfIAWAhIgggWQiDhYiPi8QjAj7gfjrQgij7CljBQAThxBnh0QDAjaGKhCIAMgCIgEAMQgWA5gFApQB8hqCwgsQBlgZBaAAIAiABIgSANQhfBCgUAsQCahVDtAAQB3AACAAVQA/ALApALIAjAJIgkAFQg9AJgnAUQgcAPgPASQBGgMBPAAQCDAAB6AeQB6AfBDAxIAKAHIgLAGQggARgfAPQA2AIBYAmQAyAWBtA2QB8A+AuARIApAPIgsgBIh1gBQA0AUBRAiQBvAuAzAPQBVAZBRAAQAgAAAsgFIAPgCIgIAOQgXAjgdAZQCRgBDvhNQB3gmBdgnIAPgGIgRA6QhPEJhACFQhuDpihBwQBcgLAngHIATgDIgMAPQgoAzh+BaQibBui5BeQoJEInrAAQmWAAlXhPgAv8MBIBIAgQBdAlB1AfQFyBjHIAAQHOAAH4j2QC2hYCfhsQCAhWA6g8IiwAYIAcgSQCrhrB0juQBDiHBRkRIAIgdQh6AyiEAnQjfBCiFgEIgXgBIATgMQAegUAaglQgeADgfAAQhTAAhWgaQg2gQhvguQhmgrhFgXIgmgOIAogBIB3AAQgogShegvQh1g7g6gYQhggng0AAIgkAAIAhgOQAegNAwgaQhDgsh1gcQh2gch6AAQhVAAhOAOIgNADIAEgMQAGgPASgQQAlggBDgPQicgiicAAQj0AAiaBbIgJAFIgCgKQgDgMANgVQAYgoBHg0QhiAChnAdQinAvh0BpIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD2QAeDaCrDqQB/CuCLBrQgWg0gRhPIgIgkIAVAeQA1BLB6BXQChB0ChAdQgphUgxhRIgOgXg");
	this.shape_59.setTransform(386.0096,621.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F9F5EA").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgGAXQhdCNhJBjQhgB/hfBoQiWCzkXBPQjBA2k5AOQAoAUBLAwQBDAoA1AIQhWgFiRAFQiyAHg2AAQkRgDimhpQAABAA8BCQAgAlBHBGQjehVhuguQi8hQiEhVQALBfAcBAQAfBKA/A/QmghXlyj+QAfBgArBVQh5hXhXhtQAJCYBkCqQAeAzA+BdQBCBiAcAvQiCgxh6hig");
	this.shape_60.setTransform(385.7109,618.6566);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ECE3C4").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgxCkQgSAig4BYQgyBRgbA1Qh0DTjRB5Qi5BrkGAjQAtAIBZAaQBQAUA2gJQjhBqjgAoQjnAqjRgiQA3ALA8AYQAuATBaAsQlAAAhkgJQjmgWimhYQARArA8A0QBIBAAPATQnGhLjhhQQlziEjFj3QAJCYBkCqQAeAzA+BdQBCBiAcAvQiCgxh6hig");
	this.shape_61.setTransform(385.7109,618.6566);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0D3AC").s().p("ArmNsQh1gghcglIhGggQA/BoAiBKQipgaiqh5Qh7hYg2hMQARBKATAwQAKAYAGAJQhUg4hph1QiCiRhQiZQjempECkrQAMhkBehyQC9jjGXhFQgTAygHAnQgEAUAAAKQCIh8DKgrQBlgVBJADQhSA5gcAqQgOAVADAKQC2hrEvASQCYAJByAfQhWAMgsAjQgWARgFAPQCdgfC2AfQCvAdBYBBQg2AegjAPQBJAACrBSQDrBxASAHIh0gBIgqABQB3ApCwBKQCQAzCLgRQgSAdgaAYQgNANgJAGQCTAED7hQQB+gnBggpQhbEyg7B9Qh3EAi1BxQB1gPAugHQgpAziBBbQibBui7BdQoHEFnhAAQnOAAlzhkg");
	this.shape_62.setTransform(385.7109,621.5316);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC4E3C").s().p("ACgGJQBnhBA+hyQA+hzgEhzQgDhUgmhHQgzhchrg7QjGhsjSA7QhCATg7AhQgeARgSANQARgOAdgSQA8glBCgVQDUhDDMBvQBgA1A2BSQA1BSAEBmQAEB4g/B1QhAB1hrBEg");
	this.shape_63.setTransform(312.5369,524.0987);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F37E3A").s().p("AlikOQAQgNAegRQA7giBDgUQDUg9DMBvQDYB2ioDoQh6Cpj9Cig");
	this.shape_64.setTransform(307.8298,521.6319);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3733C").s().p("AlzkOQAQgNAegRQA7giBDgUQDUg9DMBvQDeB5hgDlQgnBdhWBcQhPBWhfA8g");
	this.shape_65.setTransform(309.5013,521.6319);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2633B").s().p("AmLklQAQgOAegRQA7giBDgTQDVg+DLBwQB1A/AzBoQAuBegNBwQgNBpg8BgQg9BghaA5g");
	this.shape_66.setTransform(311.9432,523.9819);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC4E3C").s().p("AARgnIAOAHQgWAmgVAVQgLALgHACQAPgTAgg8g");
	this.shape_67.setTransform(475.625,480.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB9A6C").s().p("AgogvQiRgghYAiIATgJQAXgKAUgGQAhAHAaAAIAcgCIAcACIAUgBQAOAIANADIBZAXQAzANAmAHIArAQQAjAYAtAQQAJALANAOQiqhYiQgeg");
	this.shape_68.setTransform(461.45,253.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB9A6C").s().p("Ai8gjQAtAeA0AOQAZAOAZgDIABAAQATACAQAAQBgAABRg0IARAEQhKAwhLALQgVADgTAAQhjAAhZhHg");
	this.shape_69.setTransform(512.925,268.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D3AC").s().p("AglAEQAfgDAggJIALACQgpAEghALg");
	this.shape_70.setTransform(437.55,247.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D3AC").s().p("AiWABIAdAKQAZANAagDIAAAAQAUADAQAAQBgAABRg1IAIACQhGAshHAKQgTADgTAAQg/AAg7gdg");
	this.shape_71.setTransform(515.85,267.919);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E0D3AC").s().p("AhYglQAnAJAgAEQArAiA3ATIAIAJQhggvhRgcg");
	this.shape_72.setTransform(478.5,254.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC4E3C").s().p("AAfgrQgeAFgTABQgSAAgNgFIAJgDQANAGAPAAQAcAAASgTIALgCQgCARAHAPIgaBZg");
	this.shape_73.setTransform(353.425,275.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAA87C").s().p("AlSSkQBii3A7kIQA3j2gGiwQhKB6gbAWIgLAJIgBgOQgRjOgihSQgkAzgdAUQgQALgJAAIgHAAIAAgHQgGiKgThuQgMhEgPgwQg+BTgMAMIgKAKIgDgOQgwkCgThTQgIATgDAiQgDAYAAAVIAAAfIgOgcQhtjUADilQgRAigIAbQgDAOgBAHIAAApIgOgmQglhigSinQgUizAOiRQgeAFgUAAQgSAAgNgFIAJgDQANAGAPAAQAdAAASgTIALgBQgBAJACAKQgNCFAQCmQAPCZAhBnQALgmAdgzIAQgcIgCAhQgOCiBoDWQAFhGAUgZIAKgLIADAOIARBRQAXBwAdCZQAWgbAxhDIAIgKIAFAMIAZBcQAYB2AICjQAggRAvhDIAGgJIAGAKIAWA8QAWBXANCNQAngxA8hlIAMgUIABAYQAMCng1D6Qg4EJhgDBQC3h7CkiBQETjYBChyIAOgYIAAAcIgCAQQgDAXgHAiQBGhKB1iFIAIgJIAXBDQBChJAkiGQAZhdANiEIABgLIAKAFIAWATQAYAbAOAqQAXhkAKhiQAPidgbhjIgFgSIAQAKQAEAAA9ArQgEhIgpiBQgZhOg1iOIgkhjIAPAGQAMAFAPAIQAdAQAUASQgNjLgNhYIgDgYIAQASIASASQAWAUAXASQgEiaAAhYIAPgJQAAB/AFCLIAAAPIgMgIQgcgVgigfQANBqALC4IACAWIgPgRQgZgcgsgWIAZBDQA5CZAZBPQAqCJAABIIAAAOIhIgyQAaB4gZC3QgNBdgUBMIgIAdIgHgdQgOhDgkghQgOCIgcBeQgoCHhGBIIgJAJIgWhCQiTCogyAwIgSARIAGgYQAIglAFgbQheCEkuDlQiZBziVBkIgZAQg");
	this.shape_74.setTransform(440.325,386.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9F5EA").s().p("AheIjIgljTQgVh+gFhWQgWAcghBgQgdBQgyAhQAJhKgMhnQgTh3gHg8QgbBqhOA6QAnh+gDibQgBgagTkBQgNAfg7BEQg2A8gIAxQgQhWAZifQAciqgIhLQgRAbgkAhIhBA7QgJg0AUhKIAhh+QgJAHhOAvQgyAegaAjQAEgwAOgwQAUgHAIgTQAvgWAqgeIAKABQAZABANgTQAzgLAzgXIArgGQBLgEBEgVQAXgCAWgGQAngDAjgKIAHABQgkAHgfAQQEoA8D+CrQEZC9AjDVQAAAFAFAHQgRgLgTgKIgQgHIBgEIQA6CtAABTIg3gmIgWgOQAfBwgWC1QgMBggWBeIgFgWQgBiVgYhiQgfiDhQhVQABEphaEKQggh2gPg7QgbhpAAhJQgjCgiaCuIiECNQhPBVgsA/QAsiogoj/g");
	this.shape_75.setTransform(456.3,343.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ECE3C4").s().p("AiDKwIgVjIQgNh5AAhQQgkAugkBLIg9CDQgDgbgmivQgch+AJhXQgOAegiA7QgaA0AAAlQgZhmAHitQAIjWgFg7QgeAPgdA0QgeA0gdAOQgGg+ARivQAOiSgZhbQhDBkgeAyQgyBVgCBIQABkPA6jWQg8BLgZAmQgrBBgUA7QAAi6AximQAWgHAKgUIAEgBQAJAEAMAAQAgAAAMgdQAygXAmgbIALABQAZAAANgSQAzgMAygWIAsgHQBLgDBEgWQAXgCAWgGQAngDAjgKIAHABQgkAHggAQQMxCkBYHdIACAjQgUgXgkgVIgggPIBgEIQA7CuAABSIg3gmIgWgOQAeBwgVC1QgMBggXBeQgShlg+iTQAACXhHCQQhCCIh0BoQAJgigKg/QgNhOAAgSQh2CphtBtQiLCMiZBHQA2iggUjwg");
	this.shape_76.setTransform(451.125,355.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0D3AC").s().p("AjKM9QA3kAgMitQg0BYgjAuQgRAXgHAGQgMiWgYhbIgVg9QgmA4gfAWQgPALgHAAQgIingZh7IgYhaQhFBdgNANQgfijgXhzIgRhSQgQASgGA0QgDAaAAAWQh2jmAOivQgcAwgLAlQgGATAAAJQgmhlgSitQgTizAQiNIgRACQAJgFAFgHIAJgBQgEAWAMASQANATAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAnAAARggIAFgBQAJAEAMAAQAgAAAMgdQAxgXAngbIAKABQAZAAANgSQAzgMAzgWIArgHQBMgDBEgWQAWgCAXgGQApgDAggKQAgAGAbAAIAdgBIAbABIAVgBQAOAJANADIBkAZQA5AOAtAHQAtAjA3ATQBFBSBlAdQAYANAbgDIAAAAQATADARAAQBbAABOgwQAAB/AFCHQgcgUgbgZIgWgWQAPBmAMDSQgUgXgjgVIgggPIBgEIQA6CuAABTIg3gmIgWgOQAhB3gbDDQgNBjgUBKQgMg4gbghIgZgXQgPCXgfBmQgmB8hDBFIgWhDQicCygxAvQAKguAFgeIACgVQhKCBlHD5QikB8iVBjQBnjBA7kTg");
	this.shape_77.setTransform(443.575,375.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC4E3C").s().p("AhhJsIipgQIgFgBIgBgFQhLj6gKiZQgFhXAPglQgniKgQimQgSi3AWh0QAFgcAZgmIASgZQg1BOAKDfQAJDRA0C3IABADIgCADIgGAWQgFAfACAwQAGCZBNEDQFiAlBigHQAqm4AVhxIABgCQAqhXAmiCQBMkEgTjdIAKA4QAJA/gCAfQgKC2g/DFQgiBpgiBFQgPBRgZD1IgXDnIAAAHIgGAAQgRACgZAAQhSAAiugPg");
	this.shape_78.setTransform(379.5132,488.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC4E3C").s().p("AAtHBQgVg/ggg1QgVgjgWgXQg5CigIAMIgIARIgGgRQgdhTglhJQgeAhgTApIgGAOIgHgOQgZgzgLhDIg+BSIgBgVQgBhCAMgcQgoiPgRiYQgUi0AXhxQAMg5AXgiIAVgWQg7BLALDpQAJDPA0C4IABADIgCADIgEAPQgFAVgBAfIA7hMIACASIAGAmQAJAtAPAjQAYgsAbgcIAHgHIAFAJIAVAqQAYAzAVA4QAXg8AmhsIAEgKIAIAHIAiApQAkAzAaBBQAJhCAfhaIAEgMIAIAJIBkBrQARgdAcgkIANhVIABgCQAqhYAmiBQBMkDgTjdIAPgCQASDchJEAQgoCOgsBXQgGAigHAzIAAACIgBACQghArgRAdIgFAJIgHgHIhihoQgXBFgKA7QgFAdAAAQIAAAug");
	this.shape_79.setTransform(379.4433,474.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F37E3A").s().p("AgUFPIglgtQgyCMgTAtQgWg+gbg6IgXgtQgWAVgUAhQgKARgFAMQgTgngLgzIgHgtIg9BQQgBgtAGgcIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNEKQgmCGgqBZQgGAigHA1QghApgSAhIhrhyQgaBMgKBAQgGAfAAARQgahOgqg+g");
	this.shape_80.setTransform(379.7938,471.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3733C").s().p("AgUFPIglgtQgyCMgTAtQgWg+gbg6IgXgtQgWAVgUAhQgKARgFAMQgTgngLgzIgHgtIg9BQQgBgtAGgcIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNEKQgmCGgqBZQgGAigHA1QghApgSAhIhrhyQgaBMgKBAQgGAfAAARQgahOgqg+g");
	this.shape_81.setTransform(379.7938,471.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AhaJpQgGioASknQALgdgIgdIgDA6QgKAbgXAUQgXAVgeAHQAAhAgEghQALg8gHgkQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhNAAipgOg");
	this.shape_82.setTransform(379.7987,488.4313);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#444444").s().p("AAAgcQAIAdgKAcg");
	this.shape_83.setTransform(372.177,500.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3D3D3D").s().p("AiBJmQgHg9gFheIgIicQgHAPgeAXQgdAWgIAPQAFgmAkiQQAbhtgJgzQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhUAAjJgRg");
	this.shape_84.setTransform(379.7987,488.4317);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373737").s().p("AhGJrIjFgTQhRkNgFiaQgBgxAGgfIAGgVQg0i6gHjRQgHjmA9hNILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgQABgbAAQhJAAiXgMg");
	this.shape_85.setTransform(379.7938,488.438);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC4E3C").s().p("AwgXqQhQhSAFirIAAgEQAIk6AOi0QAXk3A1jxQCPqIF6kFQBag/BWg5QEEiuBahbQCKiLBKjYIAGABIAKgBQhLDdiMCOQhbBekICvIiwB4Ql2EDiNKDQg1DwgXE1QgNCygJE6IAAAFQgECjBMBPQBIBJCSABQCvgBE0huQCxg/FRiVQGAipEAjbQCAhuA1hOQBgiAAXkMQAOiigLl5QgJkxAEieQAGjHh1jtQhmjQiWiZQgngogmggQAJAAAKgEQAmAhAfAgQCXCbBoDTQB1DxgFDKQgECcAJExQALF7gPCkQgXEPhiCCQg1BPiBBvQkCDdmDCqQltCijBBDQkUBfipAAQiZAAhMhOg");
	this.shape_86.setTransform(328.9253,415.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F37E3A").s().p("AuNTEQg7g/AGjiQADksAFinQAKkoAkjSQBopRF0kCQBphJDRh/QCshpBNg+IA8ChQAkBgAbA9QAPgPAHgtQAIgsAPgPQAABkAqCJQAYBOA0CgQASgbAKgoIARhDQAACKgCBGQgDB3gKBZQAIgxAuhNQA0hZANgmQAuA/ADBjQACBxAiBFQAPgeAngfQAngeAPgeQgRCiBECyQAhBWB4DgQgTAogWAdIhFBSQhhBniLBlQjqj4hGk5Qg0CTkBBZQhsAmhwANQhwANhOgRQAMErguCxQg7DfirCeQg/ALgwAAQhbAAglgpg");
	this.shape_87.setTransform(336.4221,445.4452);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3733C").s().p("Au5X/QhqhOAFjYQAEkvAGiqQALkvAmjaQBrpkF0kCQBmhHCrhzQCHhdBNhDQC9ioBYj4QAJAEAMAAQAeAAANgaQAJgHADgIQAcgFAPgaIAHgIQAnAAARgfIAFgCQAJAFAMAAQAgAAAMgdQAugVAqgeIAKABQATAAANgLQCmCIB8D2QCFELgGDoQgECXAIEJQAIEfgCBqQgCDOgaCFQgfCghGBdIhFBTQhhBniLBlQjqj4hFk5Qg3CaiTBRQiRBQidghQAKDviYDtQhvCtjjDQQhBAMg2AAQhqAAg+gtg");
	this.shape_88.setTransform(335.9983,413.5918);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2633B").s().p("AxlTwQAJk2ANixQAXk2A1jyQCOqOF4kFQBnhHCohwQCGhbBIg/QBchRA9hbQBChjAuiIQAfgBARgVIAJgCQgEAXAMARQANAUAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAmAAATggIAEgBQAJAEAMAAQAgAAAMgdQAtgUArgeIAKABIAMgBQCyCWB/DvQCKEEgGDdQgECYAIEJQAIEfgCBpQgCDOgaCFQgfCghGBeQgyBMiABuQkADdmFCrQktCFimA+Qj+BfinAZQg6AIgyAAQk2AAAIlDg");
	this.shape_89.setTransform(328.9513,415.3262);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC4E3C").s().p("AjYLFQgmhYgzi+IgDgPQgih+gOkjIgHkPIAAgCQAiiSFOjkQCohzCzheIAMgHIgBAOIgZCdQgmDAhGC0QAOCggODOQgaGFiBEOQhLChhLAAQhKAAhDicgAgPpnQktDTggCFIAHEUQAOEcAhB7IAEAPQAwC0AkBXQBACcBDAAQBCAABHiYQCDkTAYmNQAHh8gEh7IgFhkIgBgCIABgBQA+ifAmirQAWhiAKhWQjGBsikBzg");
	this.shape_90.setTransform(455.375,510.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC4E3C").s().p("Ag4GPQgjhFgtgzIhFByIgGgMQgnhHgfhJQghAtggBEIgNAcIgBgfIgDh+IAAgzIAAgBQAiiTFOjiQCohzCzhfIAMgGIgBANIgZCeQgmC/hGC0QAEApACBHIAAACIgBACQg1BIg9AcIgEACIgDgDQhKg0g9gwQgSCEgDAbIgCAZgAiEEFIAZAeQAdAlAYArIAWiiIAKAIIAjAcIBqBNQA2gaAwhAQgChJgEglIgBgCIABgCQA+ieAmiqQAWhjAKhVQjGBsikBzQktDRggCFQAABCACBPQAdg4AggqIAIgJIAFALIAUAsQAYA1AYAuIBBhsg");
	this.shape_91.setTransform(455.375,466.125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F37E3A").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_92.setTransform(455.325,465.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3733C").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_93.setTransform(455.325,465.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#444444").s().p("Ah8GwQgjixAAiyIgsBBQgZAigUAUQgRibAcjCQARh1A1jqQB8haChhgQBRgwA5gdIgYCbQgnC/hHC2QASCJgSDzQgcFyh1EBQhDiigiiug");
	this.shape_94.setTransform(465.3885,502.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3D3D3D").s().p("Ai0HWQgTguAAhLQAEhXAAgsQgIAPgUAfQgRAeAAAbQhcnjCFlwQCDhmC6hvQBdg4BEgkIgYCbQgnDAhHC2QATCNgUD2QgdF6h6ECQgnBRgkAmQgjjGg/iog");
	this.shape_95.setTransform(463.082,508.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373737").s().p("AinMPQg7hchLkYQgih/gNkkIgHkLQAiiSFVjnQCshzCkhXIgYCbQgmDAhIC2QATCNgTD2QgeF6h7ECQhJCdhGAAQgwAAgthIg");
	this.shape_96.setTransform(455.325,510.7593);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,254.3,386.9,491.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("AAj+DI2ZAAIAAWaQAAB5hPAyQhOA0hugwQg8gbhMgaQiWg1hLAAQivAAh7B7Qh8B8AACtQAACvB8B7QB7B7CvAAQBLAACWg0QBMgbA8gaQBugxBOA0QBPAzAAB4IAAWaMA8HAAAMAAAg8HI2bAAQh4AAgzBPQgzBNAwBvIA1CIQA1CWAABMQAACuh7B7Qh8B8iuAAQivAAh7h8Qh7h7AAiuQAAhMA1iWIA0iIQAxhug0hOQgzhPh4AAg");
	this.shape.setTransform(330.025,552.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A12eEIAA2aQAAh5hPgzQhOgzhuAwQg8AbhMAbQiWA0hLAAQivAAh7h8Qh8h7AAiuQAAitB8h8QB7h7CvAAQBLAACWA1QBMAaA8AaQBuAxBOgzQBPg0AAh4IAA2aIWZAAQB4AAAzBPQA0BOgxBuIg0CIQg1CWAABLQAACvB7B7QB7B8CvAAQCuAAB8h8QB7h7AAivQAAhLg1iWIg1iIQgwhuAzhOQAzhPB4AAIWbAAMAAAA8Hg");
	mask.setTransform(330.025,552.65);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9A6C").s().p("Aj1AuQDliPDDgfID/g0IhWAeQhcAJiQAtQkfBbkCC6QBKhBByhGg");
	this.shape_1.setTransform(202.65,264.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767674").s().p("Ag6AWQgagJAAgNQAAgMAagKQAYgJAiAAQAjAAAYAJQAZAKAAAMQAAANgZAJQgYAKgjAAQgiAAgYgKg");
	this.shape_2.setTransform(353.8,221.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9A6C").s().p("Av1JmIAAAAIAOgRQBwk0E+iDQDOhVEAAAQBKAABcAVQA3ANBfAdQA+ATAZAHQAsALAZAAQATAAALgHQAVgLAhgIQAUgEAqgHQA3gIAVgHQAjgLAHgTQAIgWgshWQgZgzg9hqIgzhaQgXgrgGgTIgIgVIBAAuQgghDgXhMQgihwgChpIgBg4IAQA2QAPA2AtA/QAcAmA+BIQAuAzAVAbQAAgNAFgMIAGgSIAIARQAbA+A4A/QAdAfAYAUIBhBZQBiBeAmA0QAGAIAEAIIgHARIgIgMQgegxhrhmIhlheQgWgTgbgcQg1g4gdg6QgBAPAGALIgOAIQgSgbhBhLQg0g9gYgfQgogzgUgtQAKB1AvB5QAYA9AVAmIAVAkIgggaIgygoQAQAhA1BdQBGB7AaA2QAkBLgJAZQgJAZgmANQgXAIg8AJQhRAMgeAQQgPAJgWAAQgbAAgsgLQgZgHhBgUQhegdg2gMQhagVhJAAQkIAAjRBbQlECNhiFMIgSBCg");
	this.shape_3.setTransform(261.35,210.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAXQgJgKAAgNQAAgMAJgJQAJgJAMAAQANAAAKAJQAIAJABAMQgBANgIAKQgKAIgNABQgMgBgJgIg");
	this.shape_4.setTransform(343.4,171.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoApQgRgRAAgYQAAgXARgRQARgSAXAAQAYAAASASQARARAAAXQAAAYgRARQgSARgYAAQgXAAgRgRg");
	this.shape_5.setTransform(342.05,160.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(256.15,186.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(254.65,174.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_8.setTransform(246.675,178.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D64AB").s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6QA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6gAh/h/Qg1A1AABKQAABLA1A1QA1A1BKAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhKAAg1A1g");
	this.shape_9.setTransform(246.65,178.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E6BB0").s().p("AgBCLQhMghgrhCQgvhKAThSQAzgoBAAAQBNAAA4A3QA3A3AABOQAABHgwA2QhBgBgrgRg");
	this.shape_10.setTransform(250.0286,174.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5085C3").s().p("AiECFQg3g2gBhPQABhNA3g3QA3g4BNAAQBOAAA4A4QA2A3AABNQAABPg2A2Qg4A3hOAAQhNAAg3g3g");
	this.shape_11.setTransform(246.65,178);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC4E3C").s().p("Ah8DFQhpgwgkh5QgMglgCgpIgBgiIAAgDIATgQQBGg6AlgVQA/gjBAAAQAoAAArAOQBfAdBJCLQAkBFAUBHIABAFIgDADQgqAcg4AaQhuAzhaAAQg6AAgugVgAiTioQglAUhEA5IgNALQgDA5AVA7QAkBpBdArQAsATA2AAQBPAABlgrQA4gZAxgfQgXhNgmhEQhEh6hUgaQgpgNgmAAQg9AAg7Aig");
	this.shape_12.setTransform(248.1,178.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah5C+Qhngwgih2QgLgkgDgoIgBggQBlhSArgVQBXgoBhAeQBcAdBJCNQAkBFARBAQg5AohOAfQhYAihGAAQg3AAgugVg");
	this.shape_13.setTransform(248.05,178.0645);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2633B").s().p("AiHDVQh0g1gniFQgMgpgDgsIgBgkQBxhdAxgXQBggtBtAiQBoAhBRCdQAqBOATBIQhBAthXAiQhiAmhPAAQg+AAgzgXg");
	this.shape_14.setTransform(248.05,178.059);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC4E3C").s().p("AgbHPQhIACheg8IhVhAIgRgQIAXACIAaACQAuAAAfgTQhCgUhShJIhJhIIgHgJIAKgDQBEgWA2gfQhVg3hJhXIg5hOIgJgOIASAEQARAEAWAAQAmAAA+gMQhEhFgog6IgcguIgEgKIBcAAQg6hLgbg0IgQgpIgBgLIALADQAvAOB3ATQCDAXBAAQQBrAdA5AnQCGBaBwCNQDPEDgTEcIgBAFIgDABQg6AghIAdQiPA5hjAAQhhAAgqg6gAgTHBIACADQAlA3BcgBQBaABCFg0QBNgeA9ghQARkWjLj9QhwiNiBhVQg4gmhpgcQg9gPiEgXQhngRgzgNQAWA7BRBlIAKAMIhkAAQAoBHBhBhIAJAJIgNAEQg/APg1gBIgagBQAgAwAoArQBCBGBJAuIAKAGIgKAHQgvAdhNAbQAsAvArAjQBMA/A6AMIAOAEIgLAJQgJAJgSAIQgiAPgrgBQAwAoAwAaQBLApA5gCg");
	this.shape_15.setTransform(156.7589,87.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9F5EA").s().p("AgRHFQhGADhhg+IhSg+QAzAGAogQQAUgIAKgKQhEgPhZhOIhLhLQA0gRAugXQAWgLANgIQhag4hLhZIg6hOQAjAJBAgJQAggFAZgGQhIhJgrg9IgcgvIBgAAQg/hOgdg5IgRgoQCmBWBrA+QBtA+BfBBQCNBeBxCKQCjDFApDdQheAyhrAeQhRAWg9AAQhjAAgrg9g");
	this.shape_16.setTransform(156.1,88.0321);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECE3C4").s().p("AgaHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBrA4C3A+QCcA1BBAtQB8BUB6CoQCbDVApDiQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_17.setTransform(157.075,87.8583);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0D3AC").s().p("AgbHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBGAUDEAgQC1AjBMA0QCdBpB1CiQCuDwgSEFQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_18.setTransform(157.1592,87.8583);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC4E3C").s().p("AiMLPQg2gHgbgOQhdg0hVhrQhXhtg/iSQhOi1gMlRQgLk+Ayh7QANggARgHQAlgPCKAOQCaAPClAsQC+AyCSBKQC/BhBfCBQBgCDAACWQgBB0g6B6QgiBGg3A8IgxAuQBXhYA1iBQBpkAicjVQikjgm+h4QijgsiYgQQiJgPgkAPQgLAFgLAaQgxB4AME+QAMFQBLCuQBeDaCGB4QBwBkBoAHQgVAAgbgEg");
	this.shape_19.setTransform(161.7008,87.4371);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F37E3A").s().p("AkqI0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPB7AMQCKAOCTApQGVBxCnDlQChDchVEAQgrCBhLBUIofFQQhjgHhgiPg");
	this.shape_20.setTransform(162.774,89.0659);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7985D").s().p("Ak9I0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPCCALQCSANCbAnQGtBuCnDlQChDbhtEEQg2CDhXBWIofFQQhjgHhgiPg");
	this.shape_21.setTransform(164.6657,89.0505);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3733C").s().p("AlGJCQhlh6hfjfQhYjLgCloQgBiWAShoQAShtAfgMQAkgPCCALQCSANCbAnQGsBuCoDlQCgDbhsEEQg3CDhWBWIofFQQhpgHhqiBg");
	this.shape_22.setTransform(164.0105,89.0505);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2633B").s().p("AlGJaQiBh6hZjPQhYjMgCmAQgBigAShvQASh0AfgNQAjgOCJANQCZAQCkArQHCB3CoDlQCgDbhsEEQg3CDhWBWIofFQQhygIh3hxg");
	this.shape_23.setTransform(161.8105,88.1746);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC4E3C").s().p("AgZgMIAFgOQAUAIAPAXQAHAMAEAKQgYgcgbgLg");
	this.shape_24.setTransform(266.05,73.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CB9A6C").s().p("AgjB5Qg4gVgsgnQhDg7hShMIhEhBIBJA7QBXBIBDA6QBWBMB1AAQB2AABhhMIACgCIADABQAhAGATgEIADAOQgWAFgggHQgxAmg6AVQg4ASg6ABQg8gBg1gTg");
	this.shape_25.setTransform(313.35,245.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323232").s().p("AgYC3QgEgOgMgUQgZgogtgcQgmgYgagfQgeglgCgmQgCgvAwglQAfgYA3gOQA2gPA6AAQA8AAAqAQQApAPAOAbQAhBDg8BMQgjArhOA6IgUAPQgYAUgMATIgJAOIgIADgAhFieQg0AOgeAXQgqAfACApQACAhAcAhQAXAdAkAWQBAAoAWA4QAQgXAZgVIAVgQQBLg3AggoQA7hHgeg8QgMgXgmgNQgngNg3AAQg3AAg0ANg");
	this.shape_26.setTransform(344.8679,233.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgyCkIAIgKQAIgQAGgSQAWhCgwgeQhQgxgNgSQgcglA6gsQBDgzBTgDQBXgEAbA3QAjBHhOBTQgaAcgoAfIgwAlQgUAQgMAPQgIANgJANg");
	this.shape_27.setTransform(349.0472,233.5395);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("AghCBQgBg5gwgeQhGgrgRgiQgXgvA7gsQBDgzBkgCQBogCAbA3QAjBGhOBUQgZAbgoAfIgyAmQgYAUgOAUIgJAQQAIgWgBgdg");
	this.shape_28.setTransform(347.1695,233.4715);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AghCRQgZgpgwgfQhCgpgUg0QgXg/A8gtQBCgzB8gBQB+gBAcA3QAjBHhOBTQgaAcgoAfIgxAlQgaAVgNAUIgJAQQgDgPgNgVg");
	this.shape_29.setTransform(344.8464,233.4241);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB9A6C").s().p("AhSIvQishbiVggQiUghhaAiIAkgQQAqgPAagBQBdAAB3AkQB4AkCDBGIACABQB2B5CLgUQBdgNBVhHQBCg2Aeg3IACgDIAEgBQAmgFAlghQBEg9ATh/QALhLgog9QgZgmhRhIQgugpgWgWQgngngegmQhRhJgnhKQgBAPAFALIgNAIQgSgbhBhLQg1g9gXgfQgogzgVgtQALB1AvB5QAXA9AWAmIAVAkIgggaIgygoQAPAhA2BdQBGB7AaA1QAjBMgIAZQgJAZgnANQgWAIg8AJQhRAMgdAQQgZAOg2gKQghgGhWgbQhegdg2gMQhbgVhJAAQhEAAg/AGIgCgPQBBgGBEAAQBKAABcAVQA4ANBfAdQBQAZAgAGQA1ALAVgMQAUgLAhgIQATgEArgHQA3gIAVgHQAjgLAHgTQAHgWgrhXQgZgyg9hqIgzhaQgXgrgHgTIgHgVIBAAuQgghDgXhMQghhwgDhpIgBg4IAPA2QAQA2AtA/QAbAmA/BIQAtAzAVAbQABgNAFgMIAGgSIAHARQAiBOBcBVQAfAmAnAmQAXAXAsAoQBTBKAaAoQAqBBgMBQQgSCAhEBAQgoAmgtAIQggA6hEA3QhYBIhfANQgYADgRAAQh7AAhphsg");
	this.shape_30.setTransform(301.6736,205.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F5EA").s().p("AucGiQAagnAdggIAYgZQC2i3Ekg8QCSgdBtAIQBvgBDEA+QBYAaAgAHQA3ALAYgNQAbgPBugSQBYgOAMghQALghhfipQhwjHgHgVIAVAPQAZATAbAWQgagsgahGQg0iOgDiEQAVBKBUBkICECeQgDgFgBgJQgDgTAHgTQAiBQBdBWQBGBWCBBvQBaBagPBoQgSB6g/A/QgqApgtAGQgWApg5AgQg9AjhMAIQjCAUifijQhPgpi2ACQixACjOArQjcAvisBOQjBBXhbBsQAWiNBTh9g");
	this.shape_31.setTransform(262.2821,213.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECE3C4").s().p("AvrKGQA2g7CIhIII1nIQBEgHBAAAQBvAADFA9QBXAbAhAHQA2ALAYgNQAbgPBvgSQBYgOALghQAMghhgiqQhwjHgGgUIAUAPQAaATAaAWQgZgsgahHQg1iNgDiEQAWBKBTBkICECeQgCgFgCgKQgDgSAHgTQAiBQBdBVQBHBXCABuQBaBbgPBoQgRB6hAA/QgpApguAGQgWAqg4AmQg/ArhKAQQjEApidihQiUhOiagHQh+gFhxAqQhvALiZAwQkzBgjRC4QAAgPAagdg");
	this.shape_32.setTransform(262.2321,213.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0D3AC").s().p("AhJIRQinhZiUgiQidgkheAjIABkkQBEgGBAAAQBvAADGA9QBXAbAhAGQA2ALAXgNQAbgOBvgTQBYgOALggQAMgihgipQhwjHgGgUIAUAOQAaATAaAWQgZgsgahGQg1iNgDiEQAWBJBTBkICECfQgCgGgCgJQgDgTAHgSQAiBQBdBVQBHBWCABuQBaBbgPBoQgRB6hAA/QgpApguAHQgYAsgyAvQg9A5hEAcQg9AYg5AAQh2AAhohqg");
	this.shape_33.setTransform(301.2321,208.2952);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC4E3C").s().p("AhZDAIgDgBIgCgDQhdjRA+heQA8hcDEAOIAGABIABAFQADALADAWQAGAmAAAkQABBzg1BHQgnAzgxAXQgiAPgjAAQgbAAgDgDgAhwhrQg5BYBXDFQAKADANAAQAgAAAfgPQAugVAkgwQAug+ADhkQACg7gMg2IgsgCQiSAAgvBJg");
	this.shape_34.setTransform(341.7102,166.3018);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D2D2D").s().p("AhHBIQgagdAAgrQAAgqAagdQAbgeApAAQAqAAAdAeQAeAeAAApQAAAqgeAeQgdAegqAAQgpAAgbgeg");
	this.shape_35.setTransform(336.725,166.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D64AB").s().p("AhbCRIgCgBIgCgEQhRjSBmhQIACgBQAYgHAWAAQBBAAAuAvQAvAuAABBQAABBgvAvQguAuhBAAQgiAAgfgNgAhCiJQhbBIBLDGQAcALAcAAQA7AAAqgqQAqgqAAg8QAAg6gqgqQgqgrg7ABQgTAAgVAFg");
	this.shape_36.setTransform(339.8151,166.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E6BB0").s().p("AhHA2Qg4g8ARhTQALgSAUgQQAUgHAYABQA9AAAtArQAsAtAAA9QAABCgwAtQhYgWgyg3g");
	this.shape_37.setTransform(340.7931,164.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5085C3").s().p("AhYCKQhPjOBihLQATgHAYAAQA+AAAsAsQAtAtAAA9QAAA/gtAsQgsAsg+AAQghAAgdgNg");
	this.shape_38.setTransform(339.8447,166.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHC7IgQgCQixmPGLAdIAFAdQAGAlABAkQABBzg0BFQg0BGhFAOQgPADgOAAIgNgBg");
	this.shape_39.setTransform(341.7172,166.3109);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2633B").s().p("AhQDWIgTgDQjLnHHEAhIAGAhQAHAqAAApQACCDg8BQQg7BPhOAQQgRAEgSAAIgNgBg");
	this.shape_40.setTransform(341.6978,166.3423);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC4E3C").s().p("AuUPZQgeAFgUAAQgrAAgRgXQgVgcARg/Ih/AlIAFgNQAihrAZiYQglApgLAIIgLAHIgBgNIgFh4QgEhEADgZQAFgiAZgkIhdAeIADgNQAdh+A5hdQgsAZggAOIgMAFIACgNQAOhsBLipQBMipBgiLQATgcAshOQCZkLB8iBQDdjnEBAAQCHAACQA/QAegPAmgLQBEgUBKAAQBpAABpApQCKA3B9B5QDSDJBdCsQBAB3AfCiIADAMIgMgDQgrgNgcgLQArBQAWBVQAaBfgLBEIgBAJIgJgDQgtgRgigRQASBdAABFQgBBcgfBPIgFAOIgIgNQgfgyhqhmIhlhdQgXgTgagdQg1g4gdg5QgBAPAFAKIgNAIQgSgbhBhKQg1g8gXgfQgog0gVgsQALB0AvB5QAXA8AWAnIAVAjIgggaIgygoQAPAhA2BdQBGB7AaA3QAjBLgIAZQgJAZgnAOQgWAHg8AKQhRAMgeAQQgPAIgXAAQgaAAgsgLQgZgGhBgUQhegeg2gMQhbgVhIAAQkIAAjSBbQlDCOhiFMIgTBBgAv0NjQgUBDASAYQANARAjAAQAVAAAkgGIAHgBQBwkzE9iEQDPhVEAAAQBJAABcAVQA4ANBfAeQA+ATAZAGQArALAZAAQAUAAALgGQAVgMAhgHQATgFArgGQA3gJAVgGQAjgLAHgUQAHgWgrhWQgZg0g9hpIgzhaQgXgrgHgUIgHgVIBAAvQgghDgXhLQgihxgDhoIgBg4IAQA2QAQA1AtA/QAbAmA/BIQAtA0AVAaQABgNAFgMIAGgRIAHARQAbA8A5A/QAdAgAXATIBhBZQBjBfAlA1QAbhNgChaQgBhDgThcIgDgQIAOAIIAWALQAcANAhANQAIhGgdhfQgZhVgrhMIgLgSIAUAHQAAACBMAYQgeiahCh3QhcimjLjDQhshph2g2Qh2g2h3AAQhNAAhIAXIg5AWIgDACIgDgBQiQg/iFAAQj8AAjZDkQh5CAiYEIQgwBUgQAXQhcCEhKCjQhJChgSBtQAugWAtgcIAkgWIgaAhIgkA7QgpBOgXBcIBzglIgPATQgiAqgHAhQgFAYAFBJQAEA0ABA0QARgRAhgmIARgTIgEAZIgPBbQgUBqgYBMIB+glg");
	this.shape_41.setTransform(251.6781,173.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F37E3A").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA5gOQBIgMBPAIQD8AaDhDZQDaDRBVCQQA7BkAbCLIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_42.setTransform(260.9201,153.0233);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7985D").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA3gXQBHgXBOgBQD5gCDhDZQDVDNBdCxQA8BxAeCaIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_43.setTransform(260.9201,153.0233);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3733C").s().p("AvQLyQghhzgBhjQAAAWgUBEQgSA8AJAqQh3jHBokFQgbAJgXAeIgnAyQALhRArhPQAshTBBg2QgsAAgkALQgiALgiAXQAYiTBRi/QBKiBA5hdQBtiyBrhuQFKlRGeC2IA3gXQBHgXBOgBQD4gCDhDZQDVDNBeCxQA7BxAeCbIhDgWIgWgIQAvBTAZBaQAcBjgLBFQglgOgggPIgYgMQAVBjAABIQAABdgfBQQgfgzhrhoIhlhdQgYgTgdggQg6g/gbhAQgHATADASQABAKADAFIiEieQhUhjgVhKQADCEA0CMQAaBHAaAsQgbgWgZgTIgVgPQAHAUBwDHQBfCrgLAhQgMAhhYAOQhuASgbAPQgYANg3gLQgggHhYgbQjFg9huAAQjVAAi4A+QkeBgiKDjQg2iNgThAg");
	this.shape_44.setTransform(258.8701,161.5483);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2633B").s().p("AuNPvQhJALgZgNQgpgVAbhZIh+AlQAahOAVhwIAQhfQg0A7gLAHQgJiYACgnQABg1Arg0IhoAhQAYhjAqhTIAmg/Qg7AlgtATQAPhtBLinQBLipBfiIQBLiAA5heQBsiyBrhuQFLlTGeC2IA3gWQBHgXBOgBQD5gDDhDZQDVDNBdCxQA8BxAeCcIhDgWIgWgIQAvBSAZBbQAbBigKBFQglgOgggPIgYgMQAUBjAABJQABBcgfBQQgggzhrhnIhlhdQgXgTgdggQg6hAgcg/QgHASADATQACAJACAGIiEieQhThkgWhJQADCEA1CMQAaBGAZAsQgagWgagTIgUgOQAGAUBwDHQBgCqgMAiQgLAghYAOQhvATgbAOQgYANg2gLQghgGhXgbQjGg9huAAQkEAAjRBZQlNCPhjFSg");
	this.shape_45.setTransform(251.8201,170.7848);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC4E3C").s().p("ACZIEQhwgihxg1Qjhhqg/hyIgBgDIABgDQAMgiAZgzQAyhmBGhfQDbkxFHiBIAJgEIAEA3QAODOgRBxQgcDAh2CVQAdgBAegOQAOgGAJgHIAjgbIgYAlQg3BTguA2IBAgPIAdgIIANgDIgEANQgWBBg8BOIg7BEIgDADgAizhXQhwCVg2COQA7BpDRBlQB0A4ByAjQAdgeAdgmQAxhBAWg4Qg4AQgvAIIgZAFIASgSQACAAAYgcQAhgoAng5QgnASgngDIgOgCIAJgLQB5iUAejBQARhxgOjPIgCgiQkzB8jTEcg");
	this.shape_46.setTransform(324.0713,59.625);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9F5EA").s().p("AgfFZQjmhrg+hxQADgWAOgjQAchHAxhGQCgjhFHiCIAICSQACBPgMA9QgbCciFCiQAkADBjgqQAzgUAqgWQguBIgoAvIgeAjQA2gLA+gQQgVBAg9BOIg5BBQhmgehyg2g");
	this.shape_47.setTransform(321.05,67.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECE3C4").s().p("AgfF9Qjmhrg+hxQAHgaAUgrQAnhVA7hQQC+kFFHiCQANDKgXBwQgjCziFCjQAkADBNgfQAngRAfgRQguBIgoAwIgeAiQA2gKA+gRQgVBBg9BNIg5BBQhmgehyg1g");
	this.shape_48.setTransform(321.05,64.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0D3AC").s().p("Ag+GoQjmhqg+hyQALgfAYgzQAyhlBEheQDakwFIiCIAJCiQADBkgJBOQgaDUiDCfQAkADAkgQQATgIALgJQgvBIgnAwIgfAiQA3gKA+gRQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_49.setTransform(324.161,59.725);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC4E3C").s().p("AivGzQh/hDhdhAQhghDgPgfIgBgEIABgCQANgiAYgzQAwhlA7heQC8ksDoh5QDChjBhgBQBNAAAeBAQARAmAIBZQALCEgPCCQgKBTgRBEQAWgQARgRIARgQIgEAWQgEAagDA1QgFBCgGAgQgLA2gcAoIAvgUIAPgFIgYA/QgoBrgZAzQgoBTg1A6QgRASgoAAQiHAAk0ingABCnnQjeByi2EbQhgCUg5CQQASAfBgBBQBdA/B8BBQEuChB+gBQAiAAALgNQA0g3AohSQAZgyAohqIALggIhaAoIAYgaQAmgqAOg7QAJgjAEhIIAEg8QgVATgWAOIgSALIAGgTQAPguAMhMQAXiXgNiaQgIhcgSgkQgagyhBAAQhcAAi/Bjg");
	this.shape_50.setTransform(320.05,60.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F37E3A").s().p("ACjI2QhwghibhNQiQhIhyhLQh2hOgQgkQALggAYgyQAuhlA7hdQC7ksDph5QD4h/BOBDQAeAZANA9QAEAXAHBcQANCdgHB8QgFA/gGAeQAggUAagaQgIAwgFBkQgMBZgxA3QA2gZAUgHQg8CcgNAcQgtBhg5A/QgPAPgkAAQgoAAhEgUg");
	this.shape_51.setTransform(319.8,60.9308);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7985D").s().p("ACjI+QhwghibhOQiQhIhyhLQh2hNgQglQALgfAYgzQAuhkA7hdQC7ktDph4QD+iDBYAqQAkASARAyQALAiAGBIQANCdgXCYQgMBMgPAsQAggUAagZQgIAvgFBlQgMBYgxA3QA2gYAUgIQg8CcgNAcQgtBhg5A/QgPAQgkAAQgoAAhEgUg");
	this.shape_52.setTransform(319.8,60.1735);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB9A6C").s().p("AgFgrIAAABIANgSQgCARAHAPIgZBZg");
	this.shape_53.setTransform(161.025,275.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC4E3C").s().p("ABnOqQiYgXichnQh0hMhLhXQAOA5AQAmQAIATAFAIIAWAgIgggVQiDhZiPi7QjAj7gfjrQgij7CljBQAThxBnh1QDAjZGKhCIAMgCIgEAMQgWA4gFAqQAVgTAYgSIACgBIACAAQAagEAkAAQDHAAEMB3IAQAHIgQAHQhzAvhZA0QBXAaBgAwQAxAYAfAUIANAIIgOAFQhTAihbBGQCLBICaA0QBOAZAzAMIAXAEIgWAJQi7BNifAfQBtBFBsArQA2AUAhAIIAaAHIgaAIQjHBAiPAgQBkA9CUBhIAMAIIgOAFQh6Avh6ASQBOBDA6BEIAHAHIgKAEQiuBKhOgGQAnApAtAdQAgAXAFAAIAQAIIgRAGQg+AVhdABQhQAAhWgPQAvAeA2AXIAdAMIgfADQg3ADg9AAQg3gBgygCQA6BhAgBGIAFANgABbOZQgphTgxhRIgGgMIANABIAiABQAqACAqAAIBVgCQhEghgkgeIgagUIAgAIIA8ALQBIAKBAAAQBNAAA5gQQhDgog7hAIgbgeIAkASIAGACQAJABAMABQBNgBCXg+QhGhOhHg6IgNgMIARgCIBIgLQBYgSBVggQithwhOguIgRgKIATgEIBXgVQBygdCHgrQiRgsichlIgRgKIATgEIBggUQB4gfB9gyQhMgUhUgfQiGgwh3hAIgKgFIAIgHQAWgRAggXQBBgrA3gYQgugag3gaQhWgohNgWIgQgFIAOgJQAUgMAjgSQBHgmBPghQkAhvi9AAQggAAgaADQggAXgaAYIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD1QAeDbCrDqQB/CuCLBrQgWg1gRhOIgIgkIAVAeQA1BLB6BXQChBzCgAdIAAAAg");
	this.shape_54.setTransform(86.7095,623.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F37E3A").s().p("AgnKXQithKh5h4QjajAgTjRQhDA5gJBdQgGA2AIBsQhJh5gSh3QgViGA0hzQAWg2AzgYQAwgWA5ALQhTg+gGhpQgFhaAyhkIAIgLQCciFEegwQgTAygHAnQgEATAAALQAbgZAigYQBNgLBpASQCcAaC6BSQhWAjhMAoQglAUgVANQBcAaBmAzQAzAZAhAVQg6AWhFAvQgjAXgXASQCQBNCfA1QBQAbAzALQiGA2iBAiIhlAWQB0BKBzAuQA6AYAiAIQiSAvh5AfIhdAWQBlA7CjBsQhbAjhdATIhMANQA1ArA1A3QAbAcAPASQhqAuhKAPQi2gMiqhJg");
	this.shape_55.setTransform(96.725,605.45);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3733C").s().p("AiXKTQkLiWhYkbQgJBEAjBnQArCBAFAqQiShdhjh9QhtiLgTiTQATi9CDiYQgDgaAFgoQALhQAqhIQCJjpGXhFQgTAygHAnQgEAUAAAKQAbgYAigYQBMgLBqASQCcAZC6BTQhWAjhMAnQglAUgVAOQBcAZBmAzQAzAZAhAVQg6AXhFAuQgjAYgXASQCQBNCfA1QBQAaAzALQiGA3iBAiIhlAWQB0BJBzAvQA6AXAiAIQiSAvh5AfIhdAXQBlA7CjBrQhbAjhdATIhMANQA1AsA1A3QAbAcAPASQiIA6hRAIQgZADgRgDIgLgDQA0A5A9AnQlBgJjmiBg");
	this.shape_56.setTransform(90.325,610.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2633B").s().p("AjgMPQh8hYg1hLQAQBJAUAwQAJAZAHAJQhUg4hqh1QiBiRhQiZQjemqEBkrQANhkBehxQC8jjGXhFQgSAygIAnQgDATAAALQAagZAhgYQBOgLBpASQCcAaC7BSQhXAjhLAoQgmAUgUANQBbAaBnAzQAzAZAhAVQg6AWhFAvQgjAXgXASQCPBNCgA1QBQAbAzALQiHA3iAAiIhlAWQB0BKBzAuQA5AXAjAIQiSAvh6AfIhcAWQBkA7CjBsQhaAjheATIhLANQA1ArA1A3QAaAcAQASQiJA6hQAIQgaAEgQgEIgMgDQAsAyA0AkQAaARARAJQhXAeiMgMIh7gSQAgAaA0AaQAaAOAUAIQhNAFhWgCIhHgDQA/BoAhBKQiogbiph5g");
	this.shape_57.setTransform(85.7609,623.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC4E3C").s().p("AgOABIAGgNIAXAMIgGAMg");
	this.shape_58.setTransform(88.625,699.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CAA87C").s().p("AqVOIQjNgwiLg/QA3BcAeBBIAFANIgNgCQiZgYichmQh0hNhLhWQAOA5AQAlQAIATAFAIIAWAhIgggWQiDhYiPi8QjAj7gfjrQgij7CljBQAThxBnh0QDAjaGKhCIAMgCIgEAMQgWA5gFApQB8hqCwgsQBlgZBaAAIAiABIgSANQhfBCgUAsQCahVDtAAQB3AACAAVQA/ALApALIAjAJIgkAFQg9AJgnAUQgcAPgPASQBGgMBPAAQCDAAB6AeQB6AfBDAxIAKAHIgLAGQggARgfAPQA2AIBYAmQAyAWBtA2QB8A+AuARIApAPIgsgBIh1gBQA0AUBRAiQBvAuAzAPQBVAZBRAAQAgAAAsgFIAPgCIgIAOQgXAjgdAZQCRgBDvhNQB3gmBdgnIAPgGIgRA6QhPEJhACFQhuDpihBwQBcgLAngHIATgDIgMAPQgoAzh+BaQibBui5BeQoJEInrAAQmWAAlXhPgAv8MBIBIAgQBdAlB1AfQFyBjHIAAQHOAAH4j2QC2hYCfhsQCAhWA6g8IiwAYIAcgSQCrhrB0juQBDiHBRkRIAIgdQh6AyiEAnQjfBCiFgEIgXgBIATgMQAegUAaglQgeADgfAAQhTAAhWgaQg2gQhvguQhmgrhFgXIgmgOIAogBIB3AAQgogShegvQh1g7g6gYQhggng0AAIgkAAIAhgOQAegNAwgaQhDgsh1gcQh2gch6AAQhVAAhOAOIgNADIAEgMQAGgPASgQQAlggBDgPQicgiicAAQj0AAiaBbIgJAFIgCgKQgDgMANgVQAYgoBHg0QhiAChnAdQinAvh0BpIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD2QAeDaCrDqQB/CuCLBrQgWg0gRhPIgIgkIAVAeQA1BLB6BXQChB0ChAdQgphUgxhRIgOgXg");
	this.shape_59.setTransform(189.9096,621.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F9F5EA").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgGAXQhdCNhJBjQhgB/hfBoQiWCzkXBPQjBA2k5AOQAoAUBLAwQBDAoA1AIQhWgFiRAFQiyAHg2AAQkRgDimhpQAABAA8BCQAgAlBHBGQjehVhuguQi8hQiEhVQALBfAcBAQAfBKA/A/QmghXlyj+QAfBgArBVQh5hXhXhtQAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_60.setTransform(189.6109,618.6566);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ECE3C4").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgxCkQgSAig4BYQgyBRgbA1Qh0DTjRB5Qi5BrkGAjQAtAIBZAaQBQAUA2gJQjhBqjgAoQjnAqjRgiQA3ALA8AYQAuATBaAsQlAAAhkgJQjmgWimhYQARArA8A0QBIBAAPATQnGhLjhhQQlziEjFj3QAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_61.setTransform(189.6109,618.6566);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0D3AC").s().p("ArmNsQh1gghcglIhGggQA/BoAiBKQipgaiqh5Qh7hYg2hMQARBKATAwQAKAYAGAJQhUg4hph1QiCiRhQiZQjempECkrQAMhkBehyQC9jjGXhFQgTAygHAnQgEAUAAAKQCIh8DKgrQBlgVBJADQhSA5gcAqQgOAVADAKQC2hrEvASQCYAJByAfQhWAMgsAjQgWARgFAPQCdgfC2AfQCvAdBYBBQg2AegjAPQBJAACrBSQDrBxASAHIh0gBIgqABQB3ApCwBKQCQAzCLgRQgSAdgaAYQgNANgJAGQCTAED7hQQB+gnBggpQhbEyg7B9Qh3EAi1BxQB1gPAugHQgpAziBBbQibBui7BdQoHEFnhAAQnOAAlzhkg");
	this.shape_62.setTransform(189.6109,621.5316);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC4E3C").s().p("ACgGJQBnhBA+hyQA+hzgEhzQgDhUgmhHQgzhchrg7QjGhsjSA7QhCATg7AhQgeARgSANQARgOAdgSQA8glBCgVQDUhDDMBvQBgA1A2BSQA1BSAEBmQAEB4g/B1QhAB1hrBEg");
	this.shape_63.setTransform(116.4369,524.0987);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F37E3A").s().p("AlikOQAQgNAegRQA7giBDgUQDUg9DMBvQDYB2ioDoQh6Cpj9Cig");
	this.shape_64.setTransform(111.7298,521.6319);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3733C").s().p("AlzkOQAQgNAegRQA7giBDgUQDUg9DMBvQDeB5hgDlQgnBdhWBcQhPBWhfA8g");
	this.shape_65.setTransform(113.4013,521.6319);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2633B").s().p("AmLklQAQgOAegRQA7giBDgTQDVg+DLBwQB1A/AzBoQAuBegNBwQgNBpg8BgQg9BghaA5g");
	this.shape_66.setTransform(115.8432,523.9819);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC4E3C").s().p("AARgnIAOAHQgWAmgVAVQgLALgHACQAPgTAgg8g");
	this.shape_67.setTransform(279.525,480.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB9A6C").s().p("AgogvQiQgghZAiIATgJQAXgKAUgGQAhAHAaAAIAcgCIAcACIAUgBQAOAIANADIBZAXQAzANAmAHIArAQQAjAYAtAQQAJALANAOQiqhYiQgeg");
	this.shape_68.setTransform(265.35,253.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB9A6C").s().p("Ai8gjQAtAeA0AOQAZAOAZgDIABAAQATACAQAAQBgAABRg0IARAEQhKAwhLALQgVADgTAAQhjAAhZhHg");
	this.shape_69.setTransform(316.825,268.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D3AC").s().p("AglAEQAfgDAggJIALACQgoAEgiALg");
	this.shape_70.setTransform(241.45,247.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D3AC").s().p("AiVABIAcAKQAZANAagDIAAAAQAUADAQAAQBgAABRg1IAHACQhFAshHAKQgTADgTAAQg/AAg6gdg");
	this.shape_71.setTransform(319.75,267.919);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E0D3AC").s().p("AhYglQAnAJAgAEQArAiA3ATIAHAJQhfgvhRgcg");
	this.shape_72.setTransform(282.4,254.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC4E3C").s().p("AAfgrQgeAFgTABQgSAAgNgFIAJgDQANAGAPAAQAcAAASgTIALgCQgCARAHAPIgaBZg");
	this.shape_73.setTransform(157.325,275.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAA87C").s().p("AlSSkQBii3A7kIQA3j2gGiwQhKB6gbAWIgLAJIgBgOQgKh3gRhTQgLg3gNgfQgkAzgdAUQgQALgJAAIgHAAIAAgHQgGiKgThuQgMhEgPgwQg+BTgMAMIgKAKIgDgOQgwkCgThTQgIATgDAiQgDAYAAAVIAAAfIgOgcQhtjUADilQgRAigIAbQgDAOgBAHIAAApIgOgmQglhigSinQgUizAOiRQgeAFgUAAQgSAAgNgFIAJgDQANAGAPAAQAdAAASgTIALgBQgBAJACAKQgNCFAQCmQAPCZAhBnQALgmAdgzIAQgcIgCAhQgOCiBoDWQAFhGAUgZIAKgLIADAOIARBRQAXBwAdCZQAWgbAxhDIAIgKIAFAMIAZBcQAYB2AICjQAggRAvhDIAGgJIAGAKIAWA8QAWBXANCNQAngxA8hlIAMgUIABAYQAMCng1D6Qg4EJhgDBQC3h7CkiBQETjYBChyIAOgYIAAAcIgCAQQgDAXgHAiQBGhKB1iFIAIgJIAXBDQBChJAkiGQAZhdANiEIABgLIAKAFIAWATQAYAbAOAqQAXhkAKhiQAPidgbhjIgFgSIAQAKQAEAAA9ArQgEhIgpiBQgZhOg1iOIgkhjIAPAGQAMAFAPAIQAdAQAUASQgNjLgNhYIgDgYIAQASIASASQAWAUAXASQgEiaAAhYIAPgJQAAB/AFCLIAAAPIgMgIQgcgVgigfQANBqALC4IACAWIgPgRQgZgcgsgWIAZBDQA5CZAZBPQAqCJAABIIAAAOIhIgyQAaB4gZC3QgNBdgUBMIgIAdIgHgdQgOhDgkghQgOCIgcBeQgoCHhGBIIgJAJIgWhCQiTCogyAwIgSARIAGgYQAIglAFgbQheCDkuDmQiZBziVBkIgZAQg");
	this.shape_74.setTransform(244.225,386.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9F5EA").s().p("AheIjIgljTQgVh+gFhWQgWAcghBgQgdBQgyAhQAJhKgMhnQgTh3gHg8QgbBqhOA6QAnh+gDibQgBgagUkBQgMAfg8BEQg1A8gIAxQgPhWAYifQAciqgIhLQgRAbgkAhIhBA7QgJg0AUhKIAhh+QgJAHhOAvQgyAegaAjQADgwAPgwQAUgHAIgTQAvgWApgeIALABQAZABANgTQAzgLAzgXIArgGQBMgEBDgVQAXgCAWgGQAngDAjgKIAHABQgkAHgfAQQEoA8D+CrQEaC9AiDVQAAAFAFAHQgRgLgTgKIgRgHIBhEIQA6CtAABTIg3gmIgWgOQAfBwgWC1QgMBggWBeIgFgWQgBiVgYhiQgfiDhQhVQABEphaEKQggh2gQg7QgahpAAhJQgjCgiaCuIiECNQhPBVgsA/QAsiogoj/g");
	this.shape_75.setTransform(260.2,343.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ECE3C4").s().p("AiDKwIgVjIQgNh5AAhQQgkAugkBLIg9CDQgDgbgmivQgch+AJhXQgOAegiA7QgaA0AAAlQgZhmAHitQAIjWgFg7QgeAPgdA0QgeA0gdAOQgGg+ARivQAOiSgZhbQgeA0hDBiQgyBVgCBIQABkPA6jWQg7BLgaAmQgrBBgUA7QAAi6AximQAWgHAKgUIAEgBQAJAEAMAAQAgAAAMgdQAygXAmgbIALABQAZAAANgSQAzgMAygWIAsgHQBLgDBEgWQAXgCAWgGQAngDAjgKIAHABQgkAHggAQQMxCkBYHdIACAjQgUgXgkgVIgggPIBgEIQA7CuAABSIg3gmIgWgOQAeBwgVC1QgMBggXBeQgShlg+iTQAACXhHCQQhCCIh0BoQAJgigKg/QgNhOAAgSQh2CphtBtQiLCMiZBHQA2iggUjwg");
	this.shape_76.setTransform(255.025,355.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0D3AC").s().p("AjKM9QA3kAgMitQg0BYgjAuQgRAXgHAGQgMiWgYhbIgVg9QgmA4gfAWQgPALgHAAQgIingZh7IgYhaQhFBdgNANQgfijgXhzIgRhSQgQASgGA0QgDAaAAAWQh2jmAOivQgcAwgLAlQgGATAAAJQgmhlgSitQgTizAQiNIgRACQAJgFAFgHIAJgBQgEAWAMASQANATAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAnAAARggIAFgBQAJAEAMAAQAgAAAMgdQAxgXAngbIAKABQAZAAANgSQAzgMAzgWIArgHQBMgDBEgWQAWgCAXgGQApgDAggKQAgAGAbAAIAdgBIAbABIAVgBQAOAJANADIBkAZQA5AOAtAHQAtAjA3ATQBFBSBlAdQAYANAbgDIAAAAQATADARAAQBbAABOgwQAAB/AFCHQgcgUgbgZIgWgWQAPBmAMDSQgUgXgjgVIgggPIBgEIQA6CuAABTIg3gmIgWgOQAhB3gbDDQgNBjgUBKQgMg4gbghIgZgXQgPCXgfBmQgmB8hDBFIgWhDQicCygxAvQAKguAFgeIACgVQhKCBlHD5QikB8iVBjQBnjBA7kTg");
	this.shape_77.setTransform(247.475,375.925);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC4E3C").s().p("AhhJsIipgQIgFgBIgBgFQhLj6gKiZQgFhXAPglQgniKgQimQgSi3AWh0QAFgcAZgmIASgZQg1BOAKDfQAJDRA0C3IABADIgCADIgGAWQgFAfACAwQAGCZBNEDQFiAlBigHQAqm4AVhxIABgCQAqhXAmiCQBMkEgTjdIAKA4QAJA/gCAfQgKC2g/DFQgiBpgiBFQgPBRgZD1IgXDnIAAAHIgGAAQgRACgZAAQhSAAiugPg");
	this.shape_78.setTransform(183.4132,488.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC4E3C").s().p("AAtHBQgVg/ggg1QgVgjgWgXQg5CigIAMIgIARIgGgRQgdhTglhJQgeAhgTApIgGAOIgHgOQgZgzgLhDIg+BSIgBgVQgBhCAMgcQgoiPgRiYQgUi0AXhxQAMg5AXgiIAVgWQg7BLALDpQAJDPA0C4IABADIgCADIgEAPQgFAVgBAfIA7hMIACASIAGAmQAJAtAPAjQAYgsAbgcIAHgHIAFAJIAVAqQAYAzAVA4QAXg8AmhsIAEgKIAIAHIAiApQAkAzAaBBQAJhCAfhaIAEgMIAIAJIBkBrQARgdAcgkIANhVIABgCQAqhYAmiBQBMkDgTjdIAPgCQASDchJEAQgoCOgsBXQgGAigHAzIAAACIgBACQghArgRAdIgFAJIgHgHIhihoQgXBFgKA7QgFAdAAAQIAAAug");
	this.shape_79.setTransform(183.3433,474.375);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F37E3A").s().p("AgUFPIglgtQgyCMgTAtQgWg+gbg6IgXgtQgWAVgUAhQgKARgFAMQgTgngLgzIgHgtIg9BQQgBgtAGgcIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNEKQgmCGgqBZQgGAigHA1QghApgSAhIhrhyQgaBMgKBAQgGAfAAARQgahOgqg+g");
	this.shape_80.setTransform(183.6938,471.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3733C").s().p("AgUFPIglgtQgyCMgTAtQgWg+gbg6IgXgtQgWAVgUAhQgKARgFAMQgTgngLgzIgHgtIg9BQQgBgtAGgcIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNEKQgmCGgqBZQgGAigHA1QghApgSAhIhrhyQgaBMgKBAQgGAfAAARQgahOgqg+g");
	this.shape_81.setTransform(183.6938,471.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AhaJpQgGioASknQALgdgIgdIgDA6QgKAbgXAUQgXAVgeAHQAAhAgEghQALg8gHgkQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhNAAipgOg");
	this.shape_82.setTransform(183.6987,488.4313);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#444444").s().p("AAAgcQAIAdgKAcg");
	this.shape_83.setTransform(176.077,500.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3D3D3D").s().p("AiBJmQgHg9gFheIgIicQgHAPgeAXQgdAWgIAPQAFgmAkiQQAbhtgJgzQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhUAAjJgRg");
	this.shape_84.setTransform(183.6987,488.4317);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373737").s().p("AhGJrIjFgTQhRkNgFiaQgBgxAGgfIAGgVQg0i6gHjRQgHjmA9hNILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgQABgbAAQhJAAiXgMg");
	this.shape_85.setTransform(183.6938,488.438);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC4E3C").s().p("AwgXqQhQhSAFirIAAgEQAIk6AOi0QAXk3A1jxQCPqIF6kFQBag/BWg5QEEiuBahbQCKiLBKjYIAGABIAKgBQhLDdiMCOQhbBekICvIiwB4Ql2EDiNKDQg1DwgXE1QgNCygJE6IAAAFQgECjBMBPQBIBJCSABQCvgBE0huQCxg/FRiVQGAipEAjbQBQhFA6hCIArg1QBgiAAXkMQAOiigLl5QgJkxAEieQAGjHh1jtQhmjQiWiZQgngogmggQAJAAAKgEQAmAhAfAgQCXCbBoDTQB1DxgFDKQgECcAJExQALF7gPCkQgXEPhiCCIgrA2Qg6BDhRBFQkCDdmDCqQltCijBBDQkUBfipAAQiZAAhMhOg");
	this.shape_86.setTransform(132.8253,415.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F37E3A").s().p("AuNTEQg7g/AGjiQADksAFinQAKkoAkjSQBopRF0kCQBphJDRh/QCshpBNg+IA8ChQAkBgAbA9QAPgPAHgtQAIgsAPgPQAABkAqCJQAYBOA0CgQASgbAKgoIARhDQAACKgCBGQgDB3gKBZQAIgxAuhNQA0hZANgmQAuA/ADBjQACBxAiBFQAPgeAngfQAngeAPgeQgRCiBECyQAhBWB4DgQgTAogWAdIhFBSQhhBniLBlQjqj4hGk5Qg0CTkBBZQhsAmhwANQhwANhOgRQAMErguCxQg7DfirCeQg/ALgwAAQhbAAglgpg");
	this.shape_87.setTransform(140.3221,445.4452);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3733C").s().p("Au5X/QhqhOAFjYQAEkvAGiqQALkvAmjaQBrpkF0kCIERi6QCHhdBNhDQC9ioBYj4QAJAEAMAAQAeAAANgaQAJgHADgIQAcgFAPgaIAHgIQAnAAARgfIAFgCQAJAFAMAAQAgAAAMgdQAugVAqgeIAKABQATAAANgLQCmCIB8D2QCFELgGDoQgECXAIEJQAIEfgCBqQgCDOgaCFQgfCghGBdIhFBTQhhBniLBlQjqj4hFk5Qg3CaiTBRQiRBQidghQAKDviYDtQhvCtjjDQQhBAMg2AAQhqAAg+gtg");
	this.shape_88.setTransform(139.8983,413.5918);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2633B").s().p("AxlTwQAJk2ANixQAXk2A1jyQCOqOF4kFIEPi3QCGhbBIg/QBchRA9hbQBChjAuiIQAfgBARgVIAJgCQgEAXAMARQANAUAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAmAAATggIAEgBQAJAEAMAAQAgAAAMgdQAtgUArgeIAKABIAMgBQCyCWB/DvQCKEEgGDdQgECYAIEJQAIEfgCBpQgCDOgaCFQgfCghGBeIgpA0Qg5BBhQBFQkADdmFCrQktCFimA+Qj+BfinAZQg6AIgyAAQk2AAAIlDg");
	this.shape_89.setTransform(132.8513,415.3262);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC4E3C").s().p("AjYLFQgmhYgzi+IgDgPQgih+gOkjIgHkPIAAgCQAiiSFOjkQCohzCzheIAMgHIgBAOIgZCdQgmDAhGC0QAOCggODOQgaGFiBEOQhLChhLAAQhKAAhDicgAgPpnQktDTggCFIAHEUQAOEcAhB7IAEAPQAwC0AkBXQBACcBDAAQBCAABHiYQCDkTAYmNQAHh8gEh7IgFhkIgBgCIABgBQA+ifAmirQAWhiAKhWQjGBsikBzg");
	this.shape_90.setTransform(259.275,510.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC4E3C").s().p("Ag4GPQgjhFgtgzIhFByIgGgMQgnhHgfhJQghAtggBEIgNAcIgBgfIgDh+IAAgzIAAgBQAiiTFOjiQCohzCzhfIAMgGIgBANIgZCeQgmC/hGC0QAEApACBHIAAACIgBACQg1BIg9AcIgEACIgDgDQhKg0g9gwQgSCEgDAbIgCAZgAiEEFIAZAeQAdAlAYArIAWiiIAKAIIAjAcIBqBNQA2gaAwhAQgChJgEglIgBgCIABgCQA+ieAmiqQAWhjAKhVQjGBsikBzQktDRggCFQAABCACBPQAdg4AggqIAIgJIAFALIAUAsQAYA1AYAuIBBhsg");
	this.shape_91.setTransform(259.275,466.125);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F37E3A").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_92.setTransform(259.225,465.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3733C").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_93.setTransform(259.225,465.475);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#444444").s().p("Ah8GwQgjixAAiyIgsBBQgZAigUAUQgRibAcjCQARh1A1jqQB8haChhgICKhNIgYCbQgnC/hHC2QASCJgSDzQgcFyh1EBQhDiigiiug");
	this.shape_94.setTransform(269.2885,502.15);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3D3D3D").s().p("Ai0HWQgTguAAhLQAEhXAAgsQgIAPgUAfQgRAeAAAbQhcnjCFlwQCDhmC6hvIChhcIgYCbQgnDAhHC2QATCNgUD2QgdF6h6ECQgnBRgkAmQgjjGg/iog");
	this.shape_95.setTransform(266.982,508.875);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373737").s().p("AinMPQg7hchLkYQgih/gNkkIgHkLQAiiSFVjnQCshzCkhXIgYCbQgmDAhIC2QATCNgTD2QgeF6h7ECQhJCdhGAAQgwAAgthIg");
	this.shape_96.setTransform(259.225,510.7593);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(84.2,359.2,491.7,386.90000000000003), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("AV3npIAA2aMg8HAAAMAAAA8HIWbAAQB4AAAzhPQAzhOgwhuQgbg8gahLQg1iXAAhMQAAiuB8h7QB7h7CuAAQCvAAB7B7QB8B7AACuQAABMg1CXQgbBLgaA8QgwBuAzBOQAzBPB4AAIWZAAIAA2aQAAh5BPgzQBOgzBuAwICIA1QCWA1BMAAQCuAAB7h7QB8h8AAiuQAAiuh8h7Qh7h7iuAAQhMAAiWA1IiIA0QhuAxhOgzQhPg0AAh4g");
	this.shape.setTransform(245.875,193.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgieEQh4AAgzhPQgzhNAwhvQAag8AbhMQA1iWAAhMQAAiuh8h7Qh7h7ivAAQiuAAh7B7Qh8B7AACuQAABMA1CWQAaBMAbA8QAwBugzBOQgzBPh4AAI2bAAMAAAg8HMA8HAAAIAAWaQAAB4BPA0QBOAzBugxICIg0QCWg1BMAAQCuAAB7B7QB8B7AACuQAACuh8B7Qh7B8iuAAQhMAAiWg1IiIg1QhugwhOA0QhPAzAAB4IAAWag");
	mask.setTransform(245.875,193.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CB9A6C").s().p("Al+CMQBCgyBHgsQDkiODEghID/g0IhWAgQhcAIiQAuQkfBbkCC6g");
	this.shape_1.setTransform(398.75,290.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#767674").s().p("Ag6AXQgagKAAgNQAAgNAagIQAYgKAiAAQAjAAAYAKQAaAIAAANQAAANgaAKQgYAJgjAAQgiAAgYgJg");
	this.shape_2.setTransform(549.9,248.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB9A6C").s().p("Av1JmIAAAAIAOgRQBwk0E+iDQDOhVEAAAQBKAABcAVQA3ANBfAdQA+ATAZAHQArALAaAAQATAAALgHQAVgLAhgIQAUgEAqgHQA3gIAVgHQAjgLAHgTQAHgWgrhWQgZgzg9hqIgyhaQgYgrgGgTIgHgVIA/AuQgghDgXhMQgihwgChpIgBg4IAPA2QAQA2AtA/QAcAmA+BIQAuAzAVAbQAAgNAFgMIAGgSIAIARQAbA+A4A/QAdAfAYAUIBhBZQBiBeAmA0QAFAIAFAIIgHARIgIgMQgfgxhqhmIhlheQgWgTgbgcQg1g4gdg6QgBAPAGALIgOAIQgSgbhBhLQg0g9gYgfQgogzgUgtQAKB1AvB5QAXA9AWAmIAVAkIgfgaIgzgoQAQAhA1BdQBGB7AaA2QAkBLgJAZQgJAZgnANQgWAIg8AJQhRAMgeAQQgPAJgWAAQgbAAgsgLQgZgHhBgUQhegdg2gMQhagVhJAAQkIAAjRBbQlECNhhFMIgTBCg");
	this.shape_3.setTransform(457.45,237.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWAWQgIgJgBgNQABgMAIgKQAKgIAMgBQANABAJAIQAJAKAAAMQAAANgJAJQgJAKgNgBQgMABgKgKg");
	this.shape_4.setTransform(539.5,197.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoAqQgRgSgBgYQABgXARgRQARgRAXAAQAYAAASARQAQARAAAXQAAAYgQASQgSAQgYABQgXgBgRgQg");
	this.shape_5.setTransform(538.15,187);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_6.setTransform(452.25,212.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_7.setTransform(450.75,200.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_8.setTransform(442.775,204.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D64AB").s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6QA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6gAh/h/Qg1A1AABKQAABLA1A1QA2A1BJAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhJAAg2A1g");
	this.shape_9.setTransform(442.75,204.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E6BB0").s().p("AgBCKQhMgggrhDQgvhIAThTQAzgoBAAAQBNAAA4A4QA3A3AABMQAABJgwA1QhBgBgrgSg");
	this.shape_10.setTransform(446.1286,201.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5085C3").s().p("AiECGQg3g3gBhPQABhNA3g3QA3g3BNgBQBOABA4A3QA3A3AABNQAABPg3A3Qg4A3hOAAQhNAAg3g3g");
	this.shape_11.setTransform(442.75,204.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BC4E3C").s().p("Ah8DFQhpgwgkh5QgMglgCgpIgBgiIAAgDIATgQQBGg6AmgVQA9gjBBAAQAoAAArAOQBfAdBJCLQAlBFATBHIABAFIgDADQgqAcg4AaQhuAzhaAAQg6AAgugVgAiTioQglAUhEA5IgOALQgCA5AVA7QAkBpBdArQAsATA2AAQBPAABlgrQA4gZAwgfQgXhNglhEQhEh6hUgaQgpgNgmAAQg9AAg7Aig");
	this.shape_12.setTransform(444.2,204.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah4C+Qhogwgih2QgLgkgDgoIgBggQBlhSArgVQBXgoBhAeQBdAdBICNQAkBFASBAQg6AohOAfQhYAihGAAQg3AAgtgVg");
	this.shape_13.setTransform(444.15,204.3145);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2633B").s().p("AiHDVQh0g1gniFQgMgpgEgsIAAgkQBxhdAxgXQBggtBtAiQBpAhBRCdQApBOATBIQhAAthYAiQhiAmhPAAQg+AAgzgXg");
	this.shape_14.setTransform(444.15,204.309);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC4E3C").s().p("AgbHPQhIACheg8IhVhBIgRgPIAXACIAaACQAuAAAfgTQhCgUhShJIhJhIIgHgJIAKgEQBEgVA2gfQhVg3hJhXIg5hNIgJgQIASAFQARAEAWAAQAmAAA+gMQhEhFgog6IgcguIgEgKIBcAAQg6hLgbg1IgQgoIgBgLIALADQAvANB3AVQCDAWBAAQQBrAdA5AnQCGBaBwCMQDPEEgTEcIgBAEIgDACQg6AghIAdQiPA5hjAAQhhAAgqg6gAgTHAIACAEQAlA2BcABQBagBCFgzQBNgeA9ghQARkWjLj9QhwiNiBhVQg4gmhpgbQg9gQiEgXQhngSgzgMQAWA7BRBlIAKAMIhkAAQAoBHBhBhIAJAKIgNACQg/APg1ABIgagBQAgAvAoAsQBCBFBJAuIAKAGIgKAGQgvAehNAbQAsAvArAkQBMA9A6AOIAOACIgLAKQgJAJgSAHQgiAPgrAAQAwAoAwAaQBLApA5gDg");
	this.shape_15.setTransform(352.8589,113.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9F5EA").s().p("AgQHFQhHADhhg+IhSg+QAzAGAogQQAUgIAKgKQhEgPhZhOIhLhLQA0gRAugXQAXgLAMgIQhag4hLhZIg5hOQAiAJBAgJQAggFAZgGQhIhJgrg9IgcgvIBhAAQhAhOgdg5IgQgoQClBWBrA+QBtA+BgBBQCMBeBxCKQCjDFApDdQheAyhrAeQhRAWg9AAQhjAAgqg9g");
	this.shape_16.setTransform(352.2,114.2821);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECE3C4").s().p("AgaHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBrA4C3A+QCcA1BBAtQB8BUB6CoQCbDVApDiQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_17.setTransform(353.175,114.1083);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E0D3AC").s().p("AgbHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBGAUDEAgQC1AjBMA0QCdBpB1CiQCuDwgSEFQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_18.setTransform(353.2592,114.1083);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BC4E3C").s().p("AiMLPQg2gHgbgOQhdg0hVhrQhXhtg/iSQhOi1gMlRQgLk+Ayh7QANggARgHQAlgPCKAOQCaAPClAsQC+AyCSBKQC/BhBfCBQBgCDAACWQgBB0g6B6QgiBGg3A8IgxAuQBXhYA1iBQBpkAicjVQikjgm+h4QijgsiYgQQiJgPgkAPQgLAFgLAaQgxB4AME+QAMFQBLCuQBeDaCGB4QBwBkBoAHQgVAAgbgEg");
	this.shape_19.setTransform(357.8008,113.6871);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F37E3A").s().p("AkqI0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPB7AMQCKAOCTApQGVBxCnDlQChDchVEAQgrCBhLBUIofFQQhjgHhgiPg");
	this.shape_20.setTransform(358.874,115.3159);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F7985D").s().p("Ak9I0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPCCALQCSANCbAnQGtBuCnDlQChDbhtEEQg2CDhXBWIofFQQhjgHhgiPg");
	this.shape_21.setTransform(360.7657,115.3005);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3733C").s().p("AlGJCQhlh6hfjfQhYjLgCloQgBiWAShoQAShtAfgMQAkgPCCALQCSANCbAnQGsBuCoDlQCgDbhsEEQg3CDhWBWIofFQQhpgHhqiBg");
	this.shape_22.setTransform(360.1105,115.3005);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E2633B").s().p("AlGJaQiBh6hZjPQhYjMgCmAQgBigAShvQASh0AfgNQAjgOCJANQCZAQCkArQHCB3CoDlQCgDbhsEEQg3CDhWBWIofFQQhygIh3hxg");
	this.shape_23.setTransform(357.9105,114.4246);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BC4E3C").s().p("AgZgMIAFgOQAUAIAPAXQAIAMADAKQgYgcgbgLg");
	this.shape_24.setTransform(462.15,99.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CB9A6C").s().p("AgjB4Qg4gUgsgnQhDg8hShLIhEhCIBKA8QBWBIBDA6QBVBMB2AAQB2AABhhMIACgCIADAAQAiAIASgFIADAOQgVAFghgHQgxAng6ATQg4AUg6AAQg8AAg1gVg");
	this.shape_25.setTransform(509.45,272.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#323232").s().p("AgYC4QgEgPgMgUQgZgngtgdQgmgYgaggQgeglgCgkQgCgxAwgkQAfgYA3gPQA2gOA6AAQA8AAAqAPQApAPAOAcQAhBDg8BMQgjArhOA6IgUAPQgYATgMATIgJAQIgIACgAhFidQg0ANgeAXQgqAfACApQACAhAcAhQAXAdAkAWQBAApAWA3QAQgXAZgVIAVgQQBLg4AggnQA7hHgeg7QgMgYgmgNQgngOg3AAQg3ABg0AOg");
	this.shape_26.setTransform(540.9679,259.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#444444").s().p("AgyCkIAIgKQAIgQAGgSQAWhCgwgeQhQgxgNgSQgcglA6gsQBDgzBTgDQBXgEAbA3QAjBHhOBTQgaAcgoAfIgwAlQgUAQgMAPQgIANgJANg");
	this.shape_27.setTransform(545.1472,259.7895);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D3D3D").s().p("AghCBQgBg5gwgeQhGgrgRgiQgXgvA7gsQBDgzBkgCQBogCAbA3QAjBGhOBUQgZAbgoAfIgyAmQgYAUgOAUIgJAQQAIgWgBgdg");
	this.shape_28.setTransform(543.2695,259.7215);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AghCRQgZgpgwgfQhCgpgUg0QgXg/A8gtQBCgzB8gBQB+gBAcA3QAjBHhOBTQgaAcgoAfIgxAlQgaAVgNAUIgJAQQgDgPgNgVg");
	this.shape_29.setTransform(540.9464,259.6741);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CB9A6C").s().p("AhSIvQishbiVggQiUghhaAiIAkgQQAqgPAagBQBdAAB3AkQB4AkCDBGIACABQB2B5CLgUQBdgNBVhHQBCg2Aeg3IACgDIAEgBQAmgFAlghQBEg9ATh/QALhLgog9QgZgmhRhIQgugpgWgWQgngngegmQhRhJgnhKQgBAPAFALIgNAIQgSgbhBhLQg1g9gXgfQgogzgVgtQALB1AvB5QAXA9AWAmIAVAkIgggaIgygoQAPAhA2BdQBGB7AaA1QAjBMgIAZQgJAZgnANQgWAIg8AJQhRAMgdAQQgZAOg2gKQghgGhWgbQhegdg2gMQhbgVhJAAQhEAAg/AGIgCgPQBBgGBEAAQBKAABcAVQA4ANBfAdQBQAZAgAGQA1ALAVgMQAUgLAhgIQATgEArgHQA3gIAVgHQAjgLAHgTQAHgWgrhXQgZgyg9hqIgzhaQgXgrgHgTIgHgVIBAAuQgghDgXhMQghhwgDhpIgBg4IAPA2QAQA2AtA/QAbAmA/BIQAtAzAVAbQABgNAFgMIAGgSIAHARQAiBOBcBVQAfAmAnAmQAXAXAsAoQBTBKAaAoQAqBBgMBQQgSCAhEBAQgoAmgtAIQggA6hEA3QhYBIhfANQgYADgRAAQh7AAhphsg");
	this.shape_30.setTransform(497.7736,232.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F9F5EA").s().p("AucGiQAqg+AlgiQC2i3Ekg7QCSgeBtAHQBvABDEA8QBYAcAgAGQA3ALAYgNQAbgPBugSQBYgOAMggQALgihfiqQhwjHgHgTIAVAOQAZATAbAWQgagsgahHQg0iMgDiEQAVBJBUBkICECfQgDgGgBgKQgDgSAHgTQAiBQBdBVQBGBXCBBuQBaBbgPBoQgSB6g/A/QgqApgtAHQgWAog5AgQg9AjhMAIQjCAUifiiQhPgqi2ABQixADjOArQjcAvisBNQjBBYhbBsQAWiNBTh9g");
	this.shape_31.setTransform(458.3821,239.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECE3C4").s().p("AwCKnQAHgPAQgSQA2g7CIhIII1nIQBEgHBAAAQBvAADFA9QBXAbAhAHQA2ALAYgNQAbgPBvgSQBYgOALghQAMghhgiqQhwjHgGgUIAUAPQAaATAaAWQgZgsgahHQg1iNgDiEQAWBKBTBkICECeQgCgFgCgKQgDgSAHgTQAiBQBdBVQBHBXCABuQBaBbgPBoQgRB6hAA/QgpApguAGQgWAqg4AmQg/ArhKAQQjEApidihQiUhOiagHQh+gFhxAqQhvALiZAwQkzBgjRC4QAAgEADgHg");
	this.shape_32.setTransform(458.3321,239.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0D3AC").s().p("AhJIRQinhZiUgiQidgkheAjIABkkQBEgGBAAAQBvAADGA9QBXAbAhAGQA2ALAXgNQAbgOBvgTQBYgOALggQAMgihgipQhwjHgGgUIAUAOQAaATAaAWQgZgsgahGQg1iNgDiEQAWBJBTBkICECfQgCgGgCgJQgDgTAHgSQAiBQBdBVQBHBWCABuQBaBbgPBoQgRB6hAA/QgpApguAHQgYAsgyAvQg9A5hEAcQg9AYg5AAQh2AAhohqg");
	this.shape_33.setTransform(497.3321,234.5452);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BC4E3C").s().p("AhZDAIgDgBIgCgDQhdjRA+heQA8hcDEAOIAGABIABAFQADALADAWQAGAmAAAkQABBzg1BHQgnAzgxAXQgiAPgjAAQgbAAgDgDgAhwhrQg5BYBXDFQAKADANAAQAgAAAfgPQAugVAkgwQAug+ADhkQACg7gMg2IgsgCQiSAAgvBJg");
	this.shape_34.setTransform(537.8102,192.5518);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2D2D2D").s().p("AhHBIQgagdAAgrQAAgqAagdQAbgeApAAQAqAAAdAeQAeAeAAApQAAAqgeAeQgdAegqAAQgpAAgbgeg");
	this.shape_35.setTransform(532.825,192.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D64AB").s().p("AhbCRIgCgCIgCgDQhRjSBmhPIACgBQAYgIAWABQBBgBAuAvQAvAuAABBQAABCgvAuQguAvhBgBQgiABgfgOgAhCiJQhbBIBLDFQAcAMAcAAQA7AAAqgqQAqgrAAg7QAAg6gqgrQgqgpg7AAQgTgBgVAGg");
	this.shape_36.setTransform(535.9151,192.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E6BB0").s().p("AhHA2Qg4g8ARhSQALgTAUgQQAUgGAYgBQA9ABAtArQAsAtAAA9QAAAggNAeQgMAcgXAUQhYgVgyg3g");
	this.shape_37.setTransform(536.8931,190.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5085C3").s().p("AhYCKQhPjOBihMQATgGAYAAQA+AAAsAsQAtAsAAA+QAAA/gtAsQgsAsg+AAQghAAgdgNg");
	this.shape_38.setTransform(535.9447,192.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhHC7IgQgCQixmPGLAdIAFAdQAGAlABAkQABBzg0BFQg0BGhFAOQgPADgOAAIgNgBg");
	this.shape_39.setTransform(537.8172,192.5609);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E2633B").s().p("AhQDWIgTgDQjLnHHEAhIAGAhQAHAqAAApQACCDg8BQQg7BPhOAQQgRAEgSAAIgNgBg");
	this.shape_40.setTransform(537.7978,192.5923);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BC4E3C").s().p("AuUPZQgeAFgUAAQgrAAgRgXQgVgcARg/Ih/AlIAFgNQAihrAZiYQgXAagPANIgKAKIgLAHIgBgNIgFh4QgEhEADgZQAFgiAZgkIhdAeIADgNQAdh+A5hdQgcAQgaANIgWAKIgMAFIACgNQAOhsBLipQBMipBgiLQATgcAshOQCZkKB8iCQDdjnEBAAQCHAACQA/QAegPAmgLQBEgUBKAAQBpAABpApQCKA3B9B5QDSDJBdCsQBAB3AfCiIADAMIgMgDQgrgNgcgLQArBQAWBVQAaBfgLBEIgBAJIgJgDQgtgRgigRQASBdAABFQgBBcgfBPIgFAOIgIgNQgfgyhqhmIhlhdQgXgTgagdQg1g4gdg5QgBAPAFAKIgNAIQgSgbhBhKQg1g8gXgfQgog0gVgsQALB0AvB5QAXA8AWAnIAVAjIgggaIgygoQAPAhA2BdQBGB7AaA3QAjBLgIAZQgJAZgnAOQgWAHg8AKQhRAMgeAQQgPAIgXAAQgaAAgsgLQgZgGhBgUQhegeg2gMQhbgVhIAAQkIAAjSBbQlDCOhiFMIgTBBgAv0NjQgUBDASAYQANARAjAAQAVAAAkgGIAHgBQBwkzE9iEQDPhVEAAAQBJAABcAVQA4ANBfAeQA+ATAZAGQArALAZAAQAUAAALgGQAVgMAhgHQATgFArgGQA3gJAVgGQAjgLAHgUQAHgWgrhWQgZg0g9hpIgzhaQgXgrgHgUIgHgVIBAAvQgghDgXhLQgihxgDhoIgBg4IAQA2QAQA1AtA/QAbAmA/BIQAtA0AVAaQABgNAFgMIAGgRIAHARQAbA8A5A/QAdAgAXATIBhBZQBjBfAlA1QAbhNgChaQgBhDgThcIgDgQIAOAIIAWALQAcANAhANQAIhGgdhfQgZhVgrhMIgLgSIAUAHQAAACBMAYQgeiahCh3QhcimjLjDQhshph2g2Qh2g2h3AAQhNAAhIAXIg5AWIgDACIgDgBQiQg/iFAAQj8AAjZDkQh5CAiYEIQgwBUgQAXQhcCEhKCjQhJChgSBtQAugWAtgcIAkgWIgaAhQgQAVgUAmQgpBOgXBcIBzglIgPATQgiAqgHAhQgFAYAFBJQAEA0ABA0QARgRAhgmIARgTIgEAZIgPBbQgUBqgYBMIB+glg");
	this.shape_41.setTransform(447.7781,200.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F37E3A").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QAgguBkiwQBtiyBrhuQFKlRGdC2IA5gOQBIgMBPAIQD8AaDhDZQDaDRBVCQQA7BkAbCLIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_42.setTransform(457.0201,179.2733);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F7985D").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QAgguBkiwQBtiyBrhuQFKlRGdC2IA3gXQBHgXBOgBQD5gCDhDZQDVDNBdCxQA8BxAeCaIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_43.setTransform(457.0201,179.2733);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3733C").s().p("AvQLyQghhzgBhjQAAAWgUBEQgSA8AJAqQh3jHBokFQgbAJgXAeIgnAyQALhRArhPQAshTBBg2QgsAAgkALQgiALgiAXQAYiTBRi/QAfguBkiwQBtiyBrhuQFKlRGeC2IA3gXQBHgXBOgBQD4gCDhDZQDVDNBeCxQA7BxAeCbIhDgWIgWgIQAvBTAZBaQAcBjgLBFQglgOgggPIgYgMQAVBjAABIQAABdgfBQQgfgzhrhoIhlhdQgYgTgdggQg6g/gbhAQgHATADASQABAKADAFIiEieQhUhjgVhKQADCEA0CMQAaBHAaAsQgbgWgZgTIgVgPQAHAUBwDHQBfCrgLAhQgMAhhYAOQhuASgbAPQgYANg3gLQgggHhYgbQjFg9huAAQjVAAi4A+QkeBgiKDjQg2iNgThAg");
	this.shape_44.setTransform(454.9701,187.7983);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E2633B").s().p("AuNPvQhJALgZgNQgpgVAbhZIh+AlQAahOAVhwIAQhfQggAlgTASIgMALQgJiYACgnQABg1Arg0IhoAhQAYhjAqhTIAmg/QglAXglATIgeAOQAPhtBLinQBLipBfiIQAgguBkiwQBsiyBrhuQFLlTGeC2IA3gWQBHgXBOgBQD5gDDhDZQDVDNBdCxQA8BxAeCcIhDgWIgWgIQAvBSAZBbQAbBigKBFQglgOgggPIgYgMQAUBjAABJQABBcgfBQQgggzhrhnIhlhdQgXgTgdggQg6hAgcg/QgHASADATQACAJACAGIiEieQhThkgWhJQADCEA1CMQAaBGAZAsQgagWgagTIgUgOQAGAUBwDHQBgCqgMAiQgLAghYAOQhvATgbAOQgYANg2gLQghgGhXgbQjGg9huAAQkEAAjRBZQlNCPhjFSg");
	this.shape_45.setTransform(447.9201,197.0348);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BC4E3C").s().p("ACZIEQhwgihxg1Qjhhqg/hyIgBgDIABgDQAMgiAZgzQAyhmBGhfQDbkxFHiBIAJgEIAEA3QAODOgRBxQgcDAh2CVQAdgBAegOQAOgGAJgHIAjgbIgYAlQg3BTguA2IBAgPIAdgIIANgDIgEANQgWBBg8BOIg7BEIgDADgAizhXQhwCVg2COQA7BpDRBlQB0A4ByAjQAdgeAdgmQAxhBAWg4Qg4AQgvAIIgZAFIASgSQACAAAYgcQAhgoAng5QgnASgngDIgOgCIAJgLQB5iUAejBQARhxgOjPIgCgiQkzB8jTEcg");
	this.shape_46.setTransform(520.1713,85.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F9F5EA").s().p("AgfFZQjmhqg+hyQADgVAOglQAbhGAyhGQCgjiFHiBIAICRQACBQgMA+QgbCbiFCiQAjADBkgqQAzgVAqgVQgvBHgnAxIgeAhQA2gJA+gSQgWBBg8BOIg5BBQhmgehyg2g");
	this.shape_47.setTransform(517.15,93.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECE3C4").s().p("AgfF9Qjmhrg+hyQAIgaATgqQAmhUA8hRQC+kFFHiBQAMDIgWBxQgjCziFCkQAjACBOgfQAngRAfgQQgvBHgnAwIgeAiQA2gKA+gRQgWBAg8BPIg5BBQhmgfhyg1g");
	this.shape_48.setTransform(517.15,90.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E0D3AC").s().p("Ag+GoQjmhqg+hyQALgfAYgzQAyhlBEheQDakwFIiCIAJCiQADBkgJBOQgaDUiDCfQAkADAkgQQATgIALgJQgvBIgnAwIgfAiQA3gKA+gRQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_49.setTransform(520.261,85.975);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BC4E3C").s().p("AivG0Qh+hEhehBQhghCgPggIgBgCIABgDQANgiAYgzQAwhmA7hdQC8ksDph4QDBhlBhABQBMAAAfA/QASAlAHBbQALCDgPCCQgJBTgTBEQAXgQASgRIAQgQIgEAXQgFAZgDA1QgEBCgGAgQgMA2gbApIAvgUIAQgGIgZA/QgoBsgYAzQgqBSg0A5QgRATgogBQiHAAk0ilgABCnoQjeBzi2EbQhgCUg4CQQARAfBgBBQBdA+B8BCQEuChB+AAQAhAAAMgOQA0g4AohRQAZgzAohpIALggIg5AaIghAOIAYgaQAmgqAOg7QAIgkAFhHIAEg7QgVARgXAPIgRALIAGgTQAPguAMhMQAXiXgNiaQgIhcgSgkQgagyhBAAQhcAAi/Big");
	this.shape_50.setTransform(516.15,86.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F37E3A").s().p("ACjI2QhwghibhNQiQhIhyhLQh2hOgQgkQALggAYgyQAuhlA7hdQC7ksDqh5QD3h/BOBDQAfAZAMA9QAEAXAHBcQANCdgHB8QgFA/gGAeQAggUAagaQgIAwgGBkQgLBZgxA3QA2gZAUgHQg8CcgNAcQgsBhg7A/QgOAPgkAAQgoAAhEgUg");
	this.shape_51.setTransform(515.9,87.1808);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7985D").s().p("ACjI+QhwghibhOQiQhIhyhLQh2hNgQglQALgfAYgzQAuhkA7hdQC7ktDqh4QD9iDBYAqQAlASAQAyQALAiAGBIQANCdgYCYQgLBMgPAsQAggUAagZQgIAvgGBlQgLBYgxA3QA2gYAUgIQg8CcgNAcQgsBhg7A/QgOAQgkAAQgoAAhEgUg");
	this.shape_52.setTransform(515.9,86.4235);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB9A6C").s().p("AgFgqIAAAAIANgRQgCAQAHAPIgZBYg");
	this.shape_53.setTransform(357.125,302.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC4E3C").s().p("ABnOqQiYgXichmQh0hNhLhWQAWBaAVAfIAWAgIgggVQiDhZiPi7QjAj7gfjrQgij7CljBQAThxBnh1QDAjZGKhDIAMgCIgEANQgWA4gFApQAVgSAYgSIACgBIACgBQAagDAkAAQDHAAEMB3IAQAIIgQAGQhzAvhZA0QBXAaBgAwQAxAZAfATIANAIIgOAFQhTAihbBGQCLBJCaAyQBOAaAzAMIAXAEIgWAJQi7BOifAeQBtBEBsArQA2AVAhAJIAaAGIgaAIQjHBAiPAgQBkA9CUBhIAMAHIgOAGQh6Avh6ASQBOBDA6BDIAHAIIgKAEQiuBKhOgGQAnApAtAeQAgAWAFAAIAQAIIgRAGQg+AVhdAAQhQAAhWgOQAvAeA2AXIAdAMIgfACQg3ADg9ABQg3AAgygDQA6BhAgBGIAFAMgABbOZQgphUgxhQIgGgNIANACIAiACQAqABAqAAIBVgCQhEghgkgdIgagVIAgAHIA8AMQBIAKBAAAQBNAAA5gQQhDgog7hBIgbgdIAkASIAGACQAJABAMAAQBNAACXg/QhGhNhHg7IgNgLIARgBIBIgMQBYgTBVgfQithxhOguIgRgKIATgDIBXgVQBygeCHgqQiRgtichkIgRgLIATgCIBggVQB4gfB9gyQhMgVhUgdQiGgxh3hAIgKgFIAIgHQAWgSAggVQBBgsA3gYQgugbg3gaQhWgohNgVIgQgFIAOgJQAUgMAjgSQBHgmBPghQkAhvi9AAQggAAgaADQggAYgaAXIgMALIAAgRQAAglAahIQmIBGi5DdQhdBvgOBjIAAACIgCACQiiC8AhD3QAeDZCrDrQB/CuCLBqQgWg0gRhOIgIgkIAVAeQA1BLB6BXQChBzCgAdIAAAAg");
	this.shape_54.setTransform(282.8096,650);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F37E3A").s().p("AgnKXQithKh5h5Qjai/gTjRQhDA5gJBdQgGA2AIBsQhJh5gSh3QgViHA0hyQAWg2AzgYQAwgXA5AMQhTg+gGhpQgFhaAyhjIAIgMQCciFEegwQgTAxgHAoQgEAUAAAJQAbgYAigYQBNgKBpARQCcAaC6BTQhWAihMAoQglAUgVANQBcAaBmAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCQBMCfA1QBQAaAzALQiGA3iBAhIhlAXQB0BKBzAuQA6AXAiAJQiSAuh5AgIhdAWQBlA8CjBrQhbAihdAUIhMANQA1AsA1A3QAbAbAPATQhqAthKAPQi2gLiqhKg");
	this.shape_55.setTransform(292.825,631.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3733C").s().p("AiXKTQkLiWhYkbQgJBDAjBoQArCBAFApQiShbhjh+QhtiMgTiTQATi8CDiZQgDgZAFgoQALhQAqhJQCJjnGXhFQgTAxgHAoQgEATAAAKQAbgYAigYQBMgLBqARQCcAaC6BTQhWAihMApQglATgVANQBcAaBmAzQAzAaAhAUQg6AXhFAvQgjAWgXATQCQBMCfA2QBQAaAzALQiGA3iBAiIhlAVQB0BLBzAuQA6AXAiAIQiSAvh5AgIhdAVQBlA8CjBsQhbAihdAUIhMAMQA1AsA1A3QAbAbAPATQiIA6hRAIQgZADgRgDIgLgDQA0A5A9AnQlBgJjmiBg");
	this.shape_56.setTransform(286.425,636.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E2633B").s().p("AjgMQQh8hZg1hLQAQBKAUAvQAJAZAHAJQhUg4hqh1QiBiRhQiZQjemqEBkqQANhlBehxQC8jjGXhFQgSAxgIAoQgDAUAAAJQAagYAhgYQBOgKBpARQCcAaC7BTQhXAihLAoQgmAUgUANQBbAaBnAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCPBMCgA1QBQAaAzALQiHA4iAAhIhlAXQB0BKBzAuQA5AWAjAJQiSAuh6AgIhcAWQBkA8CjBrQhaAiheAUIhLANQA1AsA1A3QAaAbAQATQiJA5hQAIQgaADgQgDIgMgCQAsAxA0AjQAaATARAIQhXAeiMgMIh7gSQA0AoBOAiQhNAEhWgBIhHgDQA/BoAhBKQiogaiph5g");
	this.shape_57.setTransform(281.8609,650);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC4E3C").s().p("AgOABIAGgNIAXAMIgGANg");
	this.shape_58.setTransform(284.725,725.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CAA87C").s().p("AqVOIQjNgwiLg/QA3BcAeBBIAFANIgNgCQiZgYichmQh0hNhLhWQAWBaAVAfIAWAhIgggWQiDhYiPi8QjAj7gfjrQgij7CljBQAThxBnh0QDAjaGKhCIAMgCIgEAMQgWA5gFApQB8hqCwgsQBlgZBaAAIAiABIgSANQhfBCgUAsQCahVDtAAQB3AACAAVQA/ALApALIAjAJIgkAFQg9AJgnAUQgcAPgPASQBGgMBPAAQCDAAB6AeQB6AfBDAxIAKAHIgLAGQggARgfAPQA2AIBYAmQAyAWBtA2QB8A+AuARIApAPIgsgBIh1gBQA0AUBRAiQBvAuAzAPQBVAZBRAAQAgAAAsgFIAPgCIgIAOQgXAjgdAZQCRgBDvhNQB3gmBdgnIAPgGIgRA6QhPEJhACFQhuDpihBwQBcgLAngHIATgDIgMAPQgoAzh+BaQibBui5BeQoJEInrAAQmWAAlXhPgAv8MBIBIAgQBdAlB1AfQFyBjHIAAQHOAAH4j2QC2hYCfhsQCAhWA6g8IiwAYIAcgSQCrhrB0juQBDiHBRkRIAIgdQh6AyiEAnQjfBCiFgEIgXgBIATgMQAegUAaglQgeADgfAAQhTAAhWgaQg2gQhvguQhmgrhFgXIgmgOIAogBIB3AAQgogShegvQh1g7g6gYQhggng0AAIgkAAIAhgOQAegNAwgaQhDgsh1gcQh2gch6AAQhVAAhOAOIgNADIAEgMQAGgPASgQQAlggBDgPQicgiicAAQj0AAiaBbIgJAFIgCgKQgDgMANgVQAYgoBHg0QhiAChnAdQinAvh0BpIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD2QAeDaCrDqQB/CuCLBrQgWg0gRhPIgIgkIAVAeQA1BLB6BXQChB0ChAdQgphUgxhRIgOgXg");
	this.shape_59.setTransform(386.0096,647.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F9F5EA").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgGAXQhdCNhJBjQhgB/hfBoQiWCzkXBPQjBA2k5AOQAoAUBLAwQBDAoA1AIQhWgFiRAFQiyAHg2AAQkRgDimhpQAABAA8BCQAgAlBHBGQjehVhuguQi8hQiEhVQALBfAcBAQAfBKA/A/QmghXlyj+QAfBgArBVQh5hXhXhtQAJCYBkCqQAeAzA+BdQBCBiAcAvQiCgxh6hig");
	this.shape_60.setTransform(385.7109,644.9066);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ECE3C4").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgxCkQgSAig4BYQgyBRgbA1Qh0DTjRB5Qi5BrkGAjQAtAIBZAaQBQAUA2gJQjhBqjgAoQjnAqjRgiQA3ALA8AYQAuATBaAsQlAAAhkgJQjmgWimhYQARArA8A0QBIBAAPATQnGhLjhhQQlziEjFj3QAJCYBkCqQAeAzA+BdQBCBiAcAvQiCgxh6hig");
	this.shape_61.setTransform(385.7109,644.9066);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0D3AC").s().p("ArmNsQh1gghcglIhGggQA/BoAiBKQipgaiqh5Qh7hYg2hMQARBKATAwQAKAYAGAJQhUg4hph1QiCiRhQiZQjempECkrQAMhkBehyQC9jjGXhFQgTAygHAnQgEAUAAAKQCIh8DKgrQBlgVBJADQhSA5gcAqQgOAVADAKQC2hrEvASQCYAJByAfQhWAMgsAjQgWARgFAPQCdgfC2AfQCvAdBYBBQg2AegjAPQBJAACrBSQDrBxASAHIh0gBIgqABQB3ApCwBKQCQAzCLgRQgSAdgaAYQgNANgJAGQCTAED7hQQB+gnBggpQhbEyg7B9Qh3EAi1BxQB1gPAugHQgpAziBBbQibBui7BdQoHEFnhAAQnOAAlzhkg");
	this.shape_62.setTransform(385.7109,647.7816);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BC4E3C").s().p("ACgGJQBnhBA+hyQA+hzgEhzQgDhUgmhHQgzhchrg7QjGhsjSA7QhCATg7AhQgeARgSANQARgOAdgSQA8glBCgVQDUhDDMBvQBgA1A2BSQA1BSAEBmQAEB4g/B1QhAB1hrBEg");
	this.shape_63.setTransform(312.5369,550.3487);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F37E3A").s().p("AlikOQAQgNAegRQA7giBDgUQDUg9DMBvQDYB2ioDoQh6Cpj9Cig");
	this.shape_64.setTransform(307.8298,547.8819);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3733C").s().p("AlzkOQAQgNAegRQA7giBDgUQDUg9DMBvQDeB5hgDlQgnBdhWBcQhPBWhfA8g");
	this.shape_65.setTransform(309.5013,547.8819);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E2633B").s().p("AmLklQAQgOAegRQA7giBDgTQDVg+DLBwQB1A/AzBoQAuBegNBwQgNBpg8BgQg9BghaA5g");
	this.shape_66.setTransform(311.9432,550.2319);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BC4E3C").s().p("AARgnIAOAHQgWAmgVAVQgLALgHACQAPgTAgg8g");
	this.shape_67.setTransform(475.625,506.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB9A6C").s().p("AgogwQiRgehYAgIATgIQAXgKAUgFQAhAFAaAAIAcgBIAcABIAUgBQAOAJANADIBZAXQAzANAmAHIArAQQAjAYAtAQQAJALANANQiqhWiQggg");
	this.shape_68.setTransform(461.45,279.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB9A6C").s().p("Ai8gjQAtAeA0AOQAZANAZgDIABAAQATADAQAAQBgAABRg0IARAEQhKAwhLALQgVADgTAAQhjAAhZhHg");
	this.shape_69.setTransform(512.925,294.35);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D3AC").s().p("AglAEQAfgDAggJIALACQgpAEghALg");
	this.shape_70.setTransform(437.55,273.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D3AC").s().p("AiWABIAdAKQAZANAagDIAAAAQAUADAQAAQBgAABRg1IAIACQhGAshHAKQgTADgTAAQg/AAg7gdg");
	this.shape_71.setTransform(515.85,294.169);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E0D3AC").s().p("AhYglQAnAJAgAEQArAiA3ATIAIAJQhggvhRgcg");
	this.shape_72.setTransform(478.5,281.225);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BC4E3C").s().p("AAfgqQgeAEgTAAQgSABgNgFIAJgDQANAGAPAAQAcAAASgTIALgBQgCAQAHAPIgaBYg");
	this.shape_73.setTransform(353.425,302.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAA87C").s().p("AlSSkQBii3A7kIQA3j2gGiwQhKB6gbAWIgLAJIgBgOQgRjOgihSQgkAzgdAUQgQALgJAAIgHAAIAAgHQgGiKgThuQgMhEgPgwQg+BTgMAMIgKAKIgDgOQgwkCgThTQgIATgDAiQgDAYAAAVIAAAfIgOgcQhtjUADilQgRAigIAbQgDAOgBAHIAAApIgOgmQglhigSinQgUizAOiRQgeAFgUAAQgSAAgNgFIAJgDQANAGAPAAQAdAAASgTIALgBQgBAJACAKQgNCFAQCmQAPCZAhBnQALgmAdgzIAQgcIgCAhQgOCiBoDWQAFhGAUgZIAKgLIADAOIARBRQAXBwAdCZQAWgbAxhDIAIgKIAFAMIAZBcQAYB2AICjQAggRAvhDIAGgJIAGAKIAWA8QAWBXANCNQAngxA8hlIAMgUIABAYQAMCng1D6Qg4EJhgDBQC3h7CkiBQETjYBChyIAOgYIAAAcIgCAQQgDAXgHAiQBGhKB1iFIAIgJIAXBDQBChJAkiGQAZhdANiEIABgLIAKAFIAWATQAYAbAOAqQAXhkAKhiQAPidgbhjIgFgSIAQAKQAEAAA9ArQgEhIgpiBQgZhOg1iOIgkhjIAPAGQAMAFAPAIQAdAQAUASQgNjLgNhYIgDgYIAQASIASASQAWAUAXASQgEiaAAhYIAPgJQAAB/AFCLIAAAPIgMgIQgcgVgigfQANBqALC4IACAWIgPgRQgZgcgsgWIAZBDQA5CZAZBPQAqCJAABIIAAAOIhIgyQAaB4gZC3QgNBdgUBMIgIAdIgHgdQgOhDgkghQgOCIgcBeQgoCHhGBIIgJAJIgWhCQiTCogyAwIgSARIAGgYQAIglAFgbQheCEkuDlQiZBziVBkIgZAQg");
	this.shape_74.setTransform(440.325,412.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F9F5EA").s().p("AheIjIgljUQgVh8gFhXQgWAbghBhQgdBQgyAhQAJhKgMhoQgTh2gHg8QgbBphOA7QAnh+gDicQgBgZgTkAQgNAdg7BFQg2A8gIAxQgQhWAZieQAcirgIhKQgRAagkAhIhBA8QgJg2AUhIIAhh/QgJAHhOAvQgyAegaAjQAEgwAOgxQAUgGAIgUQAvgVAqgdIAKABQAZgBANgRQAzgMAzgXIArgHQBLgDBEgVQAXgDAWgFQAngDAjgLIAHACQgkAHgfAQQEoA7D+CsQEZC+AjDTQAAAGAFAHQgRgMgTgJIgQgIIBgEJQA6CtAABTIg3gmIgWgOQAfBwgWC1QgMBfgWBeIgFgVQgBiVgYhjQgfiBhQhXQABEqhaEKQggh2gPg8QgbhoAAhKQgjChiaCuIiECNQhPBVgsA/QAsiogoj/g");
	this.shape_75.setTransform(456.3,369.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ECE3C4").s().p("AiDKwIgVjIQgNh5AAhQQgkAugkBLIg9CDQgDgbgmivQgch+AJhXQgOAegiA7QgaA0AAAlQgZhmAHitQAIjWgFg7QgeAPgdA0QgeA0gdAOQgGg+ARivQAOiSgZhbQhDBkgeAyQgyBVgCBIQABkPA6jWQg8BLgZAmQgrBBgUA7QAAi6AximQAWgHAKgUIAEgBQAJAEAMAAQAgAAAMgdQAygXAmgbIALABQAZAAANgSQAzgMAygWIAsgHQBLgDBEgWQAXgCAWgGQAngDAjgKIAHABQgkAHggAQQMxCkBYHdIACAjQgUgXgkgVIgggPIBgEIQA7CuAABSIg3gmIgWgOQAeBwgVC1QgMBggXBeQgShlg+iTQAACXhHCQQhCCIh0BoQAJgigKg/QgNhOAAgSQh2CphtBtQiLCMiZBHQA2iggUjwg");
	this.shape_76.setTransform(451.125,381.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E0D3AC").s().p("AjKM9QA3kAgMitQg0BYgjAuQgRAXgHAGQgMiWgYhbIgVg9QgmA4gfAWQgPALgHAAQgIingZh7IgYhaQhFBdgNANQgfijgXhzIgRhSQgQASgGA0QgDAaAAAWQh2jmAOivQgcAwgLAlQgGATAAAJQgmhlgSitQgTizAQiNIgRACQAJgFAFgHIAJgBQgEAWAMASQANATAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAnAAARggIAFgBQAJAEAMAAQAgAAAMgdQAxgXAngbIAKABQAZAAANgSQAzgMAzgWIArgHQBMgDBEgWQAWgCAXgGQApgDAggKQAgAGAbAAIAdgBIAbABIAVgBQAOAJANADIBkAZQA5AOAtAHQAtAjA3ATQBFBSBlAdQAYANAbgDIAAAAQATADARAAQBbAABOgwQAAB/AFCHQgcgUgbgZIgWgWQAPBmAMDSQgUgXgjgVIgggPIBgEIQA6CuAABTIg3gmIgWgOQAhB3gbDDQgNBjgUBKQgMg4gbghIgZgXQgPCXgfBmQgmB8hDBFIgWhDQicCygxAvQAKguAFgeIACgVQhKCBlHD5QikB8iVBjQBnjBA7kTg");
	this.shape_77.setTransform(443.575,402.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC4E3C").s().p("AhhJsIipgQIgFgBIgBgFQhLj6gKiZQgFhXAPglQgniKgQimQgSi3AWh0QAFgcAZgmIASgZQg1BOAKDfQAJDRA0C3IABADIgCADIgGAWQgFAfACAwQAGCZBNEDQFiAlBigHQAqm4AVhxIABgCQAqhXAmiCQBMkEgTjdIAKA4QAJA/gCAfQgKC2g/DFQgiBpgiBFQgPBRgZD1IgXDnIAAAHIgGAAQgRACgZAAQhSAAiugPg");
	this.shape_78.setTransform(379.5132,515.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BC4E3C").s().p("AAtHBQgVg/ggg1QgVgjgWgXQg5CigIAMIgIARIgGgRQgdhTglhJQgeAhgTApIgGAOIgHgOQgZgzgLhDIg+BSIgBgVQgBhCAMgcQgoiPgRiYQgUi0AXhxQAMg5AXgiIAVgWQg7BLALDpQAJDPA0C4IABADIgCADIgEAPQgFAVgBAfIA7hMIACASIAGAmQAJAtAPAjQAYgsAbgcIAHgHIAFAJIAVAqQAYAzAVA4QAXg8AmhsIAEgKIAIAHIAiApQAkAzAaBBQAJhCAfhaIAEgMIAIAJIBkBrQARgdAcgkIANhVIABgCQAqhYAmiBQBMkDgTjdIAPgCQASDchJEAQgoCOgsBXQgGAigHAzIAAACIgBACQghArgRAdIgFAJIgHgHIhihoQgXBFgKA7QgFAdAAAQIAAAug");
	this.shape_79.setTransform(379.4433,500.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F37E3A").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_80.setTransform(379.7938,497.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3733C").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_81.setTransform(379.7938,497.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AhaJpQgGioASknQALgdgIgdIgDA6QgKAbgXAUQgXAVgeAHQAAhAgEghQALg8gHgkQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhNAAipgOg");
	this.shape_82.setTransform(379.7987,514.6813);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#444444").s().p("AAAgcQAIAcgKAdg");
	this.shape_83.setTransform(372.177,527.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3D3D3D").s().p("AiBJmQgHg9gFheIgIicQgHAPgeAXQgdAWgIAPQAFgmAkiQQAbhtgJgzQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhUAAjJgRg");
	this.shape_84.setTransform(379.7987,514.6817);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373737").s().p("AhGJrIjFgTQhRkNgFiaQgBgxAGgfIAGgVQg0i6gHjRQgHjmA9hNILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgQABgbAAQhJAAiXgMg");
	this.shape_85.setTransform(379.7938,514.688);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BC4E3C").s().p("AwgXqQhQhSAFirIAAgDQAIk7AOi0QAXk2A1jyQCPqHF6kHQBag+BWg5QEEiuBahcQCKiKBKjYIAGABIAKgBQhLDeiMCMQhbBekICwIiwB4Ql2EDiNKDQg1DxgXE0QgNCygJE7IAAAEQgECjBMBPQBIBJCSAAQCvAAE0huQCxg/FRiVQGAiqEAjbQCAhtA1hPQBgh/AXkNQAOiigLl5QgJkwAEieQAGjHh1jtQhmjPiWibQgngogmgfQAJAAAKgDQAmAgAfAgQCXCbBoDUQB1DwgFDKQgECcAJExQALF7gPClQgXEOhiCCQg1BPiBBuQkCDemDCrQltChjBBDQkUBgipAAQiZgBhMhOg");
	this.shape_86.setTransform(328.9253,441.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F37E3A").s().p("AuNTEQg7g/AGjiQADksAFinQAKkoAkjSQBopRF0kCQBphJDRh/QCshpBNg+IA8ChQAkBgAbA9QAPgPAHgtQAIgsAPgPQAABkAqCJQAYBOA0CgQASgbAKgoIARhDQAACKgCBGQgDB3gKBZQAIgxAuhNQA0hZANgmQAuA/ADBjQACBxAiBFQAPgeAngfQAngeAPgeQgRCiBECyQAhBWB4DgQgTAogWAdIhFBSQhhBniLBlQjqj4hGk5Qg0CTkBBZQhsAmhwANQhwANhOgRQAMErguCxQg7DfirCeQg/ALgwAAQhbAAglgpg");
	this.shape_87.setTransform(336.4221,471.6952);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F3733C").s().p("Au5X/QhqhOAFjYQAEkvAGiqQALkvAmjaQBrpkF0kCQBmhHCrhzQCHhdBNhDQC9ioBYj4QAJAEAMAAQAeAAANgaQAJgHADgIQAcgFAPgaIAHgIQAnAAARgfIAFgCQAJAFAMAAQAgAAAMgdQAugVAqgeIAKABQATAAANgLQCmCIB8D2QCFELgGDoQgECXAIEJQAIEfgCBqQgCDOgaCFQgfCghGBdIhFBTQhhBniLBlQjqj4hFk5Qg3CaiTBRQiRBQidghQAKDviYDtQhvCtjjDQQhBAMg2AAQhqAAg+gtg");
	this.shape_88.setTransform(335.9983,439.8418);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E2633B").s().p("AxlTwQAJk2ANixQAXk2A1jyQCOqOF4kFQBnhHCohwQCGhbBIg/QBchRA9hbQBChjAuiIQAfgBARgVIAJgCQgEAXAMARQANAUAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAmAAATggIAEgBQAJAEAMAAQAgAAAMgdQAtgUArgeIAKABIAMgBQCyCWB/DvQCKEEgGDdQgECYAIEJQAIEfgCBpQgCDOgaCFQgfCghGBeQgyBMiABuQkADdmFCrQktCFimA+Qj+BfinAZQg6AIgyAAQk2AAAIlDg");
	this.shape_89.setTransform(328.9513,441.5762);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC4E3C").s().p("AjYLFQgmhYgzi+IgDgPQgih+gOkjIgHkPIAAgCQAiiSFOjkQCohzCzheIAMgHIgBAOIgZCdQgmDAhGC0QAOCggODOQgaGFiBEOQhLChhLAAQhKAAhDicgAgPpnQktDTggCFIAHEUQAOEcAhB7IAEAPQAwC0AkBXQBACcBDAAQBCAABHiYQCDkTAYmNQAHh8gEh7IgFhkIgBgCIABgBQA+ifAmirQAWhiAKhWQjGBsikBzg");
	this.shape_90.setTransform(455.375,536.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BC4E3C").s().p("Ag4GPQgjhFgtgzIhFByIgGgMQgnhHgfhJQghAtggBEIgNAcIgBgfIgDh+IAAgzIAAgBQAiiTFOjiQCohzCzhfIAMgGIgBANIgZCeQgmC/hGC0QAEApACBHIAAACIgBACQg1BIg9AcIgEACIgDgDQhKg0g9gwQgSCEgDAbIgCAZgAiEEFIAZAeQAdAlAYArIAWiiIAKAIIAjAcIBqBNQA2gaAwhAQgChJgEglIgBgCIABgCQA+ieAmiqQAWhjAKhVQjGBsikBzQktDRggCFQAABCACBPQAdg4AggqIAIgJIAFALIAUAsQAYA1AYAuIBBhsg");
	this.shape_91.setTransform(455.375,492.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F37E3A").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_92.setTransform(455.325,491.725);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F3733C").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_93.setTransform(455.325,491.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#444444").s().p("Ah8GwQgjixAAiyIgsBBQgZAigUAUQgRicAcjCQARh0A1jqQB8hbChhfQBRgwA5geIgYCbQgnDAhHC3QASCJgSDyQgcFyh1ECQhDiigiivg");
	this.shape_94.setTransform(465.3885,528.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3D3D3D").s().p("Ai0HWQgTguAAhLQAEhXAAgsQgIAPgUAfQgRAeAAAbQhcnjCFlwQCDhmC6hvQBdg4BEgkIgYCbQgnDAhHC2QATCNgUD2QgdF6h6ECQgnBRgkAmQgjjGg/iog");
	this.shape_95.setTransform(463.082,535.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373737").s().p("AinMPQg7hchLkYQgih/gNkkIgHkLQAiiSFVjnQCshzCkhXIgYCbQgmDAhIC2QATCNgTD2QgeF6h7ECQhJCdhGAAQgwAAgthIg");
	this.shape_96.setTransform(455.325,537.0093);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,491.8,386.9), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.bear_mc1.b1.enabled=false;
		_root.bear_mc2.b2.enabled=false;
		_root.bear_mc3.b3.enabled=false;
		_root.bear_mc4.b4.enabled=false;*/
	}
	this.frame_415 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(414).call(this.frame_415).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB9A6C").s().p("Aj1AuQDliODDghID/g0IhWAgQhcAIiQAuQkfBbkCC6QBKhCByhGg");
	this.shape.setTransform(202.65,264.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#767674").s().p("Ag6AXQgagKAAgNQAAgNAagIQAYgKAiAAQAjAAAYAKQAZAIAAANQAAANgZAKQgYAJgjAAQgiAAgYgJg");
	this.shape_1.setTransform(353.8,221.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB9A6C").s().p("Av1JmIAAAAIAOgRQBwk0E+iDQDOhVEAAAQBKAABcAVQA3ANBfAdQA+ATAZAHQAsALAZAAQATAAALgHQAVgLAhgIQAUgEAqgHQA3gIAVgHQAjgLAHgTQAIgWgshWQgZgzg9hqIgzhaQgXgrgGgTIgIgVIBAAuQgghDgXhMQgihwgChpIgBg4IAQA2QAPA2AtA/QAcAmA+BIQAuAzAVAbQAAgNAFgMIAGgSIAIARQAbA+A4A/QAdAfAYAUIBhBZQBiBeAmA0QAGAIAEAIIgHARIgIgMQgegxhrhmIhlheQgWgTgbgcQg1g4gdg6QgBAPAGALIgOAIQgSgbhBhLQg0g9gYgfQgogzgUgtQAKB1AvB5QAYA9AVAmIAVAkIgggaIgygoQAQAhA1BdQBGB7AaA2QAkBLgJAZQgJAZgmANQgXAIg8AJQhRAMgeAQQgPAJgWAAQgbAAgsgLQgZgHhBgUQhegdg2gMQhagVhJAAQkIAAjRBbQlECNhiFMIgSBCg");
	this.shape_2.setTransform(261.35,210.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAWQgJgJAAgNQAAgMAJgKQAJgIAMgBQANABAKAIQAIAKABAMQgBANgIAJQgKAKgNgBQgMABgJgKg");
	this.shape_3.setTransform(343.4,171.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoAqQgRgSAAgYQAAgXARgRQARgRAXAAQAYAAASARQARARAAAXQAAAYgRASQgSAQgYABQgXgBgRgQg");
	this.shape_4.setTransform(342.05,160.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAZQgKgKAAgPQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_5.setTransform(256.15,186.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_6.setTransform(254.65,174.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D2D2D").s().p("AhUBVQgkgjAAgyQAAgxAkgjQAjgkAxAAQAyAAAjAkQAkAjAAAxQAAAygkAjQgjAkgyAAQgxAAgjgkg");
	this.shape_7.setTransform(246.675,178.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D64AB").s().p("AiJCKQg6g5AAhRQAAhQA6g5QA5g6BQAAQBRAAA5A6QA6A5AABQQAABRg6A5Qg5A6hRAAQhQAAg5g6gAh/h/Qg1A1AABKQAABLA1A1QA1A1BKAAQBLAAA1g1QA1g1AAhLQAAhKg1g1Qg1g1hLAAQhKAAg1A1g");
	this.shape_8.setTransform(246.65,178.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E6BB0").s().p("AgBCKQhMgggrhDQgvhIAThTQAzgoBAAAQBNAAA4A4QA3A3AABMQAABJgwA1QhBgBgrgSg");
	this.shape_9.setTransform(250.0286,174.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5085C3").s().p("AiECGQg3g3gBhPQABhNA3g3QA3g3BNgBQBOABA4A3QA2A3AABNQAABPg2A3Qg4A3hOAAQhNAAg3g3g");
	this.shape_10.setTransform(246.65,178);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC4E3C").s().p("Ah8DFQhpgwgkh5QgMglgCgpIgBgiIAAgDIATgQQBGg6AlgVQA/gjBAAAQAoAAArAOQBfAdBJCLQAkBFAUBHIABAFIgDADQgqAcg4AaQhuAzhaAAQg6AAgugVgAiTioQglAUhEA5IgNALQgDA5AVA7QAkBpBdArQAsATA2AAQBPAABlgrQA4gZAxgfQgXhNgmhEQhEh6hUgaQgpgNgmAAQg9AAg7Aig");
	this.shape_11.setTransform(248.1,178.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah5C+Qhngwgih2QgLgkgDgoIgBggQBlhSArgVQBXgoBhAeQBcAdBJCNQAkBFARBAQg5AohOAfQhYAihGAAQg3AAgugVg");
	this.shape_12.setTransform(248.05,178.0645);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2633B").s().p("AiHDVQh0g1gniFQgMgpgDgsIgBgkQBxhdAxgXQBggtBtAiQBoAhBRCdQAqBOATBIQhBAthXAiQhiAmhPAAQg+AAgzgXg");
	this.shape_13.setTransform(248.05,178.059);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC4E3C").s().p("AgbHPQhIACheg8IhVhBIgRgPIAXACIAaACQAuAAAfgTQhCgUhShJIhJhIIgHgJIAKgEQBEgVA2gfQhVg3hJhXIg5hNIgJgQIASAFQARAEAWAAQAmAAA+gMQhEhFgog6IgcguIgEgKIBcAAQg6hLgbg1IgQgoIgBgLIALADQAvANB3AVQCDAWBAAQQBrAdA5AnQCGBaBwCMQDPEEgTEcIgBAEIgDACQg6AghIAdQiPA5hjAAQhhAAgqg6gAgTHAIACAEQAlA2BcABQBagBCFgzQBNgeA9ghQARkWjLj9QhwiNiBhVQg4gmhpgbQg9gQiEgXQhngSgzgMQAWA7BRBlIAKAMIhkAAQAoBHBhBhIAJAKIgNACQg/APg1ABIgagBQAgAvAoAsQBCBFBJAuIAKAGIgKAGQgvAehNAbQAsAvArAkQBMA9A6AOIAOACIgLAKQgJAJgSAHQgiAPgrAAQAwAoAwAaQBLApA5gDg");
	this.shape_14.setTransform(156.7589,87.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9F5EA").s().p("AgRHFQhGADhhg+IhSg+QAzAGAogQQAUgIAKgKQhEgPhZhOIhLhLQA0gRAugXQAWgLANgIQhag4hLhZIg6hOQAjAJBAgJQAggFAZgGQhIhJgrg9IgcgvIBgAAQg/hOgdg5IgRgoQCmBWBrA+QBtA+BfBBQCNBeBxCKQCjDFApDdQheAyhrAeQhRAWg9AAQhjAAgrg9g");
	this.shape_15.setTransform(156.1,88.0321);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ECE3C4").s().p("AgaHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBrA4C3A+QCcA1BBAtQB8BUB6CoQCbDVApDiQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_16.setTransform(157.075,87.8583);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E0D3AC").s().p("AgbHGQhHADhhg9IhSg/QAzAHAogRQAUgIAKgJQhEgQhZhNIhLhLQA0gRAugXQAXgMAMgIQhZg3hMhZIg5hPQAiAJBAgJQAggEAagHQhJhIgrg9IgcgvIBhAAQhAhPgdg4IgQgpQBGAUDEAgQC1AjBMA0QCdBpB1CiQCuDwgSEFQhiA2hwAjQhdAdhCAAQheAAgog7g");
	this.shape_17.setTransform(157.1592,87.8583);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BC4E3C").s().p("AiMLPQg2gHgbgOQhdg0hVhrQhXhtg/iSQhOi1gMlRQgLk+Ayh7QANggARgHQAlgPCKAOQCaAPClAsQC+AyCSBKQC/BhBfCBQBgCDAACWQgBB0g6B6QgiBGg3A8IgxAuQBXhYA1iBQBpkAicjVQikjgm+h4QijgsiYgQQiJgPgkAPQgLAFgLAaQgxB4AME+QAMFQBLCuQBeDaCGB4QBwBkBoAHQgVAAgbgEg");
	this.shape_18.setTransform(161.7008,87.4371);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F37E3A").s().p("AkqI0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPB7AMQCKAOCTApQGVBxCnDlQChDchVEAQgrCBhLBUIofFQQhjgHhgiPg");
	this.shape_19.setTransform(162.774,89.0659);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F7985D").s().p("Ak9I0QhJhshsj6QhZjOgQlYQgHiRANhjQAOhpAfgMQAjgPCCALQCSANCbAnQGtBuCnDlQChDbhtEEQg2CDhXBWIofFQQhjgHhgiPg");
	this.shape_20.setTransform(164.6657,89.0505);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3733C").s().p("AlGJCQhlh6hfjfQhYjLgCloQgBiWAShoQAShtAfgMQAkgPCCALQCSANCbAnQGsBuCoDlQCgDbhsEEQg3CDhWBWIofFQQhpgHhqiBg");
	this.shape_21.setTransform(164.0105,89.0505);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E2633B").s().p("AlGJaQiBh6hZjPQhYjMgCmAQgBigAShvQASh0AfgNQAjgOCJANQCZAQCkArQHCB3CoDlQCgDbhsEEQg3CDhWBWIofFQQhygIh3hxg");
	this.shape_22.setTransform(161.8105,88.1746);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BC4E3C").s().p("AgZgMIAFgOQAUAIAPAXQAHAMAEAKQgYgcgbgLg");
	this.shape_23.setTransform(266.05,73.175);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CB9A6C").s().p("AgjB4Qg4gUgsgnQhDg8hShLIhEhCIBJA8QBXBIBDA6QBWBMB1AAQB2AABhhMIACgCIADAAQAhAIATgFIADAOQgWAFgggHQgxAng6ATQg4AUg6AAQg8AAg1gVg");
	this.shape_24.setTransform(313.35,245.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#323232").s().p("AgYC4QgEgPgMgUQgZgngtgdQgmgYgaggQgeglgCgkQgCgxAwgkQAfgYA3gPQA2gOA6AAQA8AAAqAPQApAPAOAcQAhBDg8BMQgjArhOA6IgUAPQgYATgMATIgJAQIgIACgAhFidQg0ANgeAXQgqAfACApQACAhAcAhQAXAdAkAWQBAApAWA3QAQgXAZgVIAVgQQBLg4AggnQA7hHgeg7QgMgYgmgNQgngOg3AAQg3ABg0AOg");
	this.shape_25.setTransform(344.8679,233.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#444444").s().p("AgyCkIAIgKQAIgQAGgSQAWhCgwgeQhQgxgNgSQgcglA6gsQBDgzBTgDQBXgEAbA3QAjBHhOBTQgaAcgoAfIgwAlQgUAQgMAPQgIANgJANg");
	this.shape_26.setTransform(349.0472,233.5395);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D3D3D").s().p("AghCBQgBg5gwgeQhGgrgRgiQgXgvA7gsQBDgzBkgCQBogCAbA3QAjBGhOBUQgZAbgoAfIgyAmQgYAUgOAUIgJAQQAIgWgBgdg");
	this.shape_27.setTransform(347.1695,233.4715);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373737").s().p("AghCRQgZgpgwgfQhCgpgUg0QgXg/A8gtQBCgzB8gBQB+gBAcA3QAjBHhOBTQgaAcgoAfIgxAlQgaAVgNAUIgJAQQgDgPgNgVg");
	this.shape_28.setTransform(344.8464,233.4241);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CB9A6C").s().p("AhSIvQishbiVggQiUghhaAiIAkgQQAqgPAagBQBdAAB3AkQB4AkCDBGIACABQB2B5CLgUQBdgNBVhHQBCg2Aeg3IACgDIAEgBQAmgFAlghQBEg9ATh/QALhLgog9QgZgmhRhIQgugpgWgWQgngngegmQhRhJgnhKQgBAPAFALIgNAIQgSgbhBhLQg1g9gXgfQgogzgVgtQALB1AvB5QAXA9AWAmIAVAkIgggaIgygoQAPAhA2BdQBGB7AaA1QAjBMgIAZQgJAZgnANQgWAIg8AJQhRAMgdAQQgZAOg2gKQghgGhWgbQhegdg2gMQhbgVhJAAQhEAAg/AGIgCgPQBBgGBEAAQBKAABcAVQA4ANBfAdQBQAZAgAGQA1ALAVgMQAUgLAhgIQATgEArgHQA3gIAVgHQAjgLAHgTQAHgWgrhXQgZgyg9hqIgzhaQgXgrgHgTIgHgVIBAAuQgghDgXhMQghhwgDhpIgBg4IAPA2QAQA2AtA/QAbAmA/BIQAtAzAVAbQABgNAFgMIAGgSIAHARQAiBOBcBVQAfAmAnAmQAXAXAsAoQBTBKAaAoQAqBBgMBQQgSCAhEBAQgoAmgtAIQggA6hEA3QhYBIhfANQgYADgRAAQh7AAhphsg");
	this.shape_29.setTransform(301.6736,205.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F9F5EA").s().p("AucGiQAagnAdggIAYgZQC2i3Ekg7QCSgeBtAHQBvABDEA8QBYAcAgAGQA3ALAYgNQAbgPBugSQBYgOAMggQALgihfiqQhwjHgHgTIAVAOQAZATAbAWQgagsgahHQg0iMgDiEQAVBJBUBkICECfQgDgGgBgKQgDgSAHgTQAiBQBdBVQBGBXCBBuQBaBbgPBoQgSB6g/A/QgqApgtAHQgWAog5AgQg9AjhMAIQjCAUifiiQhPgqi2ABQixADjOArQjcAvisBNQjBBYhbBsQAWiNBTh9g");
	this.shape_30.setTransform(262.2821,213.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ECE3C4").s().p("AvrKGQA2g7CIhIII1nIQBEgHBAAAQBvAADFA9QBXAbAhAHQA2ALAYgNQAbgPBvgSQBYgOALghQAMghhgiqQhwjHgGgUIAUAPQAaATAaAWQgZgsgahHQg1iNgDiEQAWBKBTBkICECeQgCgFgCgKQgDgSAHgTQAiBQBdBVQBHBXCABuQBaBbgPBoQgRB6hAA/QgpApguAGQgWAqg4AmQg/ArhKAQQjEApidihQiUhOiagHQh+gFhxAqQhvALiZAwQkzBgjRC4QAAgPAagdg");
	this.shape_31.setTransform(262.2321,213.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E0D3AC").s().p("AhJIRQinhZiUgiQidgkheAjIABkkQBEgGBAAAQBvAADGA9QBXAbAhAGQA2ALAXgNQAbgOBvgTQBYgOALggQAMgihgipQhwjHgGgUIAUAOQAaATAaAWQgZgsgahGQg1iNgDiEQAWBJBTBkICECfQgCgGgCgJQgDgTAHgSQAiBQBdBVQBHBWCABuQBaBbgPBoQgRB6hAA/QgpApguAHQgYAsgyAvQg9A5hEAcQg9AYg5AAQh2AAhohqg");
	this.shape_32.setTransform(301.2321,208.2952);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BC4E3C").s().p("AhZDAIgDgBIgCgDQhdjRA+heQA8hcDEAOIAGABIABAFQADALADAWQAGAmAAAkQABBzg1BHQgnAzgxAXQgiAPgjAAQgbAAgDgDgAhwhrQg5BYBXDFQAKADANAAQAgAAAfgPQAugVAkgwQAug+ADhkQACg7gMg2IgsgCQiSAAgvBJg");
	this.shape_33.setTransform(341.7102,166.3018);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D2D2D").s().p("AhHBIQgagdAAgrQAAgqAagdQAbgeApAAQAqAAAdAeQAeAeAAApQAAAqgeAeQgdAegqAAQgpAAgbgeg");
	this.shape_34.setTransform(336.725,166.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D64AB").s().p("AhbCRIgCgCIgCgDQhRjSBmhPIACgBQAYgIAWABQBBgBAuAvQAvAuAABBQAABCgvAuQguAvhBgBQgiABgfgOgAhCiJQhbBIBLDFQAcAMAcAAQA7AAAqgqQAqgrAAg7QAAg6gqgrQgqgpg7AAQgTgBgVAGg");
	this.shape_35.setTransform(339.8151,166.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4E6BB0").s().p("AhHA2Qg4g8ARhSQALgTAUgQQAUgGAYgBQA9ABAtArQAsAtAAA9QAABCgwAsQhYgVgyg3g");
	this.shape_36.setTransform(340.7931,164.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5085C3").s().p("AhYCKQhPjOBihMQATgGAYAAQA+AAAsAsQAtAsAAA+QAAA/gtAsQgsAsg+AAQghAAgdgNg");
	this.shape_37.setTransform(339.8447,166.35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhHC7IgQgCQixmPGLAdIAFAdQAGAlABAkQABBzg0BFQg0BGhFAOQgPADgOAAIgNgBg");
	this.shape_38.setTransform(341.7172,166.3109);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E2633B").s().p("AhQDWIgTgDQjLnHHEAhIAGAhQAHAqAAApQACCDg8BQQg7BPhOAQQgRAEgSAAIgNgBg");
	this.shape_39.setTransform(341.6978,166.3423);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BC4E3C").s().p("AuUPZQgeAFgUAAQgrAAgRgXQgVgcARg/Ih/AlIAFgNQAihrAZiYQglApgLAIIgLAHIgBgNIgFh4QgEhEADgZQAFgiAZgkIhdAeIADgNQAdh+A5hdQgsAZggAOIgMAFIACgNQAOhsBLipQBMipBgiLQATgcAshOQCZkLB8iBQDdjnEBAAQCHAACQA/QAegPAmgLQBEgUBKAAQBpAABpApQCKA3B9B5QDSDJBdCsQBAB3AfCiIADAMIgMgDQgrgNgcgLQArBQAWBVQAaBfgLBEIgBAJIgJgDQgtgRgigRQASBdAABFQgBBcgfBPIgFAOIgIgNQgfgyhqhmIhlhdQgXgTgagdQg1g4gdg5QgBAPAFAKIgNAIQgSgbhBhKQg1g8gXgfQgog0gVgsQALB0AvB5QAXA8AWAnIAVAjIgggaIgygoQAPAhA2BdQBGB7AaA3QAjBLgIAZQgJAZgnAOQgWAHg8AKQhRAMgeAQQgPAIgXAAQgaAAgsgLQgZgGhBgUQhegeg2gMQhbgVhIAAQkIAAjSBbQlDCOhiFMIgTBBgAv0NjQgUBDASAYQANARAjAAQAVAAAkgGIAHgBQBwkzE9iEQDPhVEAAAQBJAABcAVQA4ANBfAeQA+ATAZAGQArALAZAAQAUAAALgGQAVgMAhgHQATgFArgGQA3gJAVgGQAjgLAHgUQAHgWgrhWQgZg0g9hpIgzhaQgXgrgHgUIgHgVIBAAvQgghDgXhLQgihxgDhoIgBg4IAQA2QAQA1AtA/QAbAmA/BIQAtA0AVAaQABgNAFgMIAGgRIAHARQAbA8A5A/QAdAgAXATIBhBZQBjBfAlA1QAbhNgChaQgBhDgThcIgDgQIAOAIIAWALQAcANAhANQAIhGgdhfQgZhVgrhMIgLgSIAUAHQAAACBMAYQgeiahCh3QhcimjLjDQhshph2g2Qh2g2h3AAQhNAAhIAXIg5AWIgDACIgDgBQiQg/iFAAQj8AAjZDkQh5CAiYEIQgwBUgQAXQhcCEhKCjQhJChgSBtQAugWAtgcIAkgWIgaAhIgkA7QgpBOgXBcIBzglIgPATQgiAqgHAhQgFAYAFBJQAEA0ABA0QARgRAhgmIARgTIgEAZIgPBbQgUBqgYBMIB+glg");
	this.shape_40.setTransform(251.6781,173.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F37E3A").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA5gOQBIgMBPAIQD8AaDhDZQDaDRBVCQQA7BkAbCLIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_41.setTransform(260.9201,153.0233);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F7985D").s().p("AtSKEQgRhoAAiLQg5AXgyAqQg1AsghA3QAMh+A3hnQA6hrBihBQgugJgpAWQguAggeAOIBTheQAyg5AtgbQgzAAhiAPQhpAQgvACQAchlAzh5QBLiBA5hdQBtiyBrhuQFKlRGdC2IA3gXQBHgXBOgBQD5gCDhDZQDVDNBdCxQA8BxAeCaIhDgVIgWgIQAvBSAZBbQAbBjgKBFQglgOgggPIgYgMQAUBjAABIQABBdgfBQQgggzhrhoIhlhdQgXgTgdggQg6g/gchAQgHATADASQACAKACAFIiEieQhThjgWhKQADCDA1CNQAaBHAZAsQgagWgagTIgUgPQAGAUBwDHQBgCrgMAhQgLAhhYAOQhvASgbAPQgYANg2gLQghgHhXgbQjGg9huAAQieAAiTAkQjdA2iUB9QgzhfgWiHg");
	this.shape_42.setTransform(260.9201,153.0233);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3733C").s().p("AvQLyQghhzgBhjQAAAWgUBEQgSA8AJAqQh3jHBokFQgbAJgXAeIgnAyQALhRArhPQAshTBBg2QgsAAgkALQgiALgiAXQAYiTBRi/QBKiBA5hdQBtiyBrhuQFKlRGeC2IA3gXQBHgXBOgBQD4gCDhDZQDVDNBeCxQA7BxAeCbIhDgWIgWgIQAvBTAZBaQAcBjgLBFQglgOgggPIgYgMQAVBjAABIQAABdgfBQQgfgzhrhoIhlhdQgYgTgdggQg6g/gbhAQgHATADASQABAKADAFIiEieQhUhjgVhKQADCEA0CMQAaBHAaAsQgbgWgZgTIgVgPQAHAUBwDHQBfCrgLAhQgMAhhYAOQhuASgbAPQgYANg3gLQgggHhYgbQjFg9huAAQjVAAi4A+QkeBgiKDjQg2iNgThAg");
	this.shape_43.setTransform(258.8701,161.5483);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E2633B").s().p("AuNPvQhJALgZgNQgpgVAbhZIh+AlQAahOAVhwIAQhfQg0A7gLAHQgJiYACgnQABg1Arg0IhoAhQAYhjAqhTIAmg/Qg7AlgtATQAPhtBLinQBLipBfiIQBLiAA5heQBsiyBrhuQFLlTGeC2IA3gWQBHgXBOgBQD5gDDhDZQDVDNBdCxQA8BxAeCcIhDgWIgWgIQAvBSAZBbQAbBigKBFQglgOgggPIgYgMQAUBjAABJQABBcgfBQQgggzhrhnIhlhdQgXgTgdggQg6hAgcg/QgHASADATQACAJACAGIiEieQhThkgWhJQADCEA1CMQAaBGAZAsQgagWgagTIgUgOQAGAUBwDHQBgCqgMAiQgLAghYAOQhvATgbAOQgYANg2gLQghgGhXgbQjGg9huAAQkEAAjRBZQlNCPhjFSg");
	this.shape_44.setTransform(251.8201,170.7848);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BC4E3C").s().p("ACZIEQhwgihxg1Qjhhqg/hyIgBgDIABgDQAMgiAZgzQAyhmBGhfQDbkxFHiBIAJgEIAEA3QAODOgRBxQgcDAh2CVQAdgBAegOQAOgGAJgHIAjgbIgYAlQg3BTguA2IBAgPIAdgIIANgDIgEANQgWBBg8BOIg7BEIgDADgAizhXQhwCVg2COQA7BpDRBlQB0A4ByAjQAdgeAdgmQAxhBAWg4Qg4AQgvAIIgZAFIASgSQACAAAYgcQAhgoAng5QgnASgngDIgOgCIAJgLQB5iUAejBQARhxgOjPIgCgiQkzB8jTEcg");
	this.shape_45.setTransform(324.0713,59.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F9F5EA").s().p("AgfFZQjmhqg+hyQADgVAOglQAchGAxhGQCgjiFHiBIAICRQACBQgMA+QgbCbiFCiQAkADBjgqQAzgVAqgVQguBHgoAxIgeAhQA2gJA+gSQgVBBg9BOIg5BBQhmgehyg2g");
	this.shape_46.setTransform(321.05,67.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECE3C4").s().p("AgfF9Qjmhrg+hyQAHgaAUgqQAnhUA7hRQC+kFFHiBQANDIgXBxQgjCziFCkQAkACBNgfQAngRAfgQQguBHgoAwIgeAiQA2gKA+gRQgVBAg9BPIg5BBQhmgfhyg1g");
	this.shape_47.setTransform(321.05,64.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E0D3AC").s().p("Ag+GoQjmhqg+hyQALgfAYgzQAyhlBEheQDakwFIiCIAJCiQADBkgJBOQgaDUiDCfQAkADAkgQQATgIALgJQgvBIgnAwIgfAiQA3gKA+gRQgWBAg8BOIg5BBQhmgehyg2g");
	this.shape_48.setTransform(324.161,59.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC4E3C").s().p("AivG0Qh/hEhdhBQhghCgPggIgBgCIABgDQAyiCBeiWQC8ksDoh4QDChlBhABQBNAAAeA/QARAlAIBbQALCDgPCCQgKBTgRBEQAWgQARgRIARgQIgEAXQgEAZgDA1QgFBCgGAgQgLA2gcApIAvgUIAPgGIgYA/QgoBsgZAzQgoBSg1A5QgRATgogBQiHAAk0ilgABCnoQjeBzi2EbQhgCUg5CQQASAfBgBBQBdA+B8BCQEuChB+AAQAiAAALgOQA0g4AohRQAZgzAohpIALggIhaAoIAYgaQAmgqAOg7QAJgkAEhHIAEg7QgVARgWAPIgSALIAGgTQAPguAMhMQAXiXgNiaQgIhcgSgkQgagyhBAAQhcAAi/Big");
	this.shape_49.setTransform(320.05,60.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F37E3A").s().p("ACjI2QhwghibhNQiQhIhyhLQh2hOgQgkQAvh+BdiWQC7ksDph5QD4h/BOBDQAeAZANA9QAEAXAHBcQANCdgHB8QgFA/gGAeQAggUAagaQgIAwgFBkQgMBZgxA3QA2gZAUgHQg8CcgNAcQgtBhg5A/QgPAPgkAAQgoAAhEgUg");
	this.shape_50.setTransform(319.8,60.9308);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7985D").s().p("ACjI+QhwghibhOQiQhIhyhLQh2hNgQglQAvh+BdiVQC7ktDph4QD+iDBYAqQAkASARAyQALAiAGBIQANCdgXCYQgMBMgPAsQAggUAagZQgIAvgFBlQgMBYgxA3QA2gYAUgIQg8CcgNAcQgtBhg5A/QgPAQgkAAQgoAAhEgUg");
	this.shape_51.setTransform(319.8,60.1735);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CB9A6C").s().p("AgFgqIAAAAIANgRQgCAQAHAPIgZBYg");
	this.shape_52.setTransform(161.025,275.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BC4E3C").s().p("ABnOqQiYgXichmQh0hNhLhWQAOA4AQAmQAIATAFAIIAWAgIgggVQiDhZiPi7QjAj7gfjrQgij7CljBQAThxBnh1QDAjZGKhDIAMgCIgEANQgWA4gFApQAVgSAYgSIACgBIACgBQAagDAkAAQDHAAEMB3IAQAIIgQAGQhzAvhZA0QBXAaBgAwQAxAZAfATIANAIIgOAFQhTAihbBGQCLBJCaAyQBOAaAzAMIAXAEIgWAJQi7BOifAeQBtBEBsArQA2AVAhAJIAaAGIgaAIQjHBAiPAgQBkA9CUBhIAMAHIgOAGQh6Avh6ASQBOBDA6BDIAHAIIgKAEQiuBKhOgGQAnApAtAeQAgAWAFAAIAQAIIgRAGQg+AVhdAAQhQAAhWgOQAvAeA2AXIAdAMIgfACQg3ADg9ABQg3AAgygDQA6BhAgBGIAFAMgABbOZQgphUgxhQIgGgNIANACIAiACQAqABAqAAIBVgCQhEghgkgdIgagVIAgAHIA8AMQBIAKBAAAQBNAAA5gQQhDgog7hBIgbgdIAkASIAGACQAJABAMAAQBNAACXg/QhGhNhHg7IgNgLIARgBIBIgMQBYgTBVgfQithxhOguIgRgKIATgDIBXgVQBygeCHgqQiRgtichkIgRgLIATgCIBggVQB4gfB9gyQhMgVhUgdQiGgxh3hAIgKgFIAIgHQAWgSAggVQBBgsA3gYQgugbg3gaQhWgohNgVIgQgFIAOgJQAUgMAjgSQBHgmBPghQkAhvi9AAQggAAgaADQggAYgaAXIgMALIAAgRQAAglAahIQmIBGi5DdQhdBvgOBjIAAACIgCACQiiC8AhD3QAeDZCrDrQB/CuCLBqQgWg0gRhOIgIgkIAVAeQA1BLB6BXQChBzCgAdIAAAAg");
	this.shape_53.setTransform(86.7095,623.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F37E3A").s().p("AgnKXQithKh5h5Qjai/gTjRQhDA5gJBdQgGA2AIBsQhJh5gSh3QgViHA0hyQAWg2AzgYQAwgXA5AMQhTg+gGhpQgFhaAyhjIAIgMQCciFEegwQgTAxgHAoQgEAUAAAJQAbgYAigYQBNgKBpARQCcAaC6BTQhWAihMAoQglAUgVANQBcAaBmAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCQBMCfA1QBQAaAzALQiGA3iBAhIhlAXQB0BKBzAuQA6AXAiAJQiSAuh5AgIhdAWQBlA8CjBrQhbAihdAUIhMANQA1AsA1A3QAbAbAPATQhqAthKAPQi2gLiqhKg");
	this.shape_54.setTransform(96.725,605.45);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3733C").s().p("AiXKTQkLiWhYkbQgJBDAjBoQArCBAFApQiShbhjh+QhtiMgTiTQATi8CDiZQgDgZAFgoQALhQAqhJQCJjnGXhFQgTAxgHAoQgEATAAAKQAbgYAigYQBMgLBqARQCcAaC6BTQhWAihMApQglATgVANQBcAaBmAzQAzAaAhAUQg6AXhFAvQgjAWgXATQCQBMCfA2QBQAaAzALQiGA3iBAiIhlAVQB0BLBzAuQA6AXAiAIQiSAvh5AgIhdAVQBlA8CjBsQhbAihdAUIhMAMQA1AsA1A3QAbAbAPATQiIA6hRAIQgZADgRgDIgLgDQA0A5A9AnQlBgJjmiBg");
	this.shape_55.setTransform(90.325,610.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E2633B").s().p("AjgMQQh8hZg1hLQAQBKAUAvQAJAZAHAJQhUg4hqh1QiBiRhQiZQjemqEBkqQANhlBehxQC8jjGXhFQgSAxgIAoQgDAUAAAJQAagYAhgYQBOgKBpARQCcAaC7BTQhXAihLAoQgmAUgUANQBbAaBnAyQAzAaAhAUQg6AXhFAvQgjAXgXATQCPBMCgA1QBQAaAzALQiHA4iAAhIhlAXQB0BKBzAuQA5AWAjAJQiSAuh6AgIhcAWQBkA8CjBrQhaAiheAUIhLANQA1AsA1A3QAaAbAQATQiJA5hQAIQgaADgQgDIgMgCQAsAxA0AjQAaATARAIQhXAeiMgMIh7gSQAgAZA0AbQAaANAUAJQhNAEhWgBIhHgDQA/BoAhBKQiogaiph5g");
	this.shape_56.setTransform(85.7609,623.75);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BC4E3C").s().p("AgOABIAGgNIAXAMIgGANg");
	this.shape_57.setTransform(88.625,699.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CAA87C").s().p("AqVOIQjNgwiLg/QA3BcAeBBIAFANIgNgCQiZgYichmQh0hNhLhWQAOA5AQAlQAIATAFAIIAWAhIgggWQiDhYiPi8QjAj7gfjrQgij7CljBQAThxBnh0QDAjaGKhCIAMgCIgEAMQgWA5gFApQB8hqCwgsQBlgZBaAAIAiABIgSANQhfBCgUAsQCahVDtAAQB3AACAAVQA/ALApALIAjAJIgkAFQg9AJgnAUQgcAPgPASQBGgMBPAAQCDAAB6AeQB6AfBDAxIAKAHIgLAGQggARgfAPQA2AIBYAmQAyAWBtA2QB8A+AuARIApAPIgsgBIh1gBQA0AUBRAiQBvAuAzAPQBVAZBRAAQAgAAAsgFIAPgCIgIAOQgXAjgdAZQCRgBDvhNQB3gmBdgnIAPgGIgRA6QhPEJhACFQhuDpihBwQBcgLAngHIATgDIgMAPQgoAzh+BaQibBui5BeQoJEInrAAQmWAAlXhPgAv8MBIBIAgQBdAlB1AfQFyBjHIAAQHOAAH4j2QC2hYCfhsQCAhWA6g8IiwAYIAcgSQCrhrB0juQBDiHBRkRIAIgdQh6AyiEAnQjfBCiFgEIgXgBIATgMQAegUAaglQgeADgfAAQhTAAhWgaQg2gQhvguQhmgrhFgXIgmgOIAogBIB3AAQgogShegvQh1g7g6gYQhggng0AAIgkAAIAhgOQAegNAwgaQhDgsh1gcQh2gch6AAQhVAAhOAOIgNADIAEgMQAGgPASgQQAlggBDgPQicgiicAAQj0AAiaBbIgJAFIgCgKQgDgMANgVQAYgoBHg0QhiAChnAdQinAvh0BpIgMAMIAAgRQAAgmAahHQmIBFi5DdQhdBvgOBjIAAADIgCABQiiC9AhD2QAeDaCrDqQB/CuCLBrQgWg0gRhPIgIgkIAVAeQA1BLB6BXQChB0ChAdQgphUgxhRIgOgXg");
	this.shape_58.setTransform(189.9096,621.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F9F5EA").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgGAXQhdCNhJBjQhgB/hfBoQiWCzkXBPQjBA2k5AOQAoAUBLAwQBDAoA1AIQhWgFiRAFQiyAHg2AAQkRgDimhpQAABAA8BCQAgAlBHBGQjehVhuguQi8hQiEhVQALBfAcBAQAfBKA/A/QmghXlyj+QAfBgArBVQh5hXhXhtQAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_59.setTransform(189.6109,618.6566);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#ECE3C4").s().p("A0cMgQhchKgog4QARBKATAwQAKAZAGAJQhUg4hph2QiCiQhQiZQjemqECkrQAMhkBehxQC9jjGXhFQgTAxgHAoQgEATAAAKQCIh7DKgrQBlgWBJADQhSA5gcArQgOAVADAKQC2hsEvATQCYAJByAeQhWANgsAjQgWARgFAPQCdgfC2AeQCvAdBYBCQg2AdgjAPQBJAACrBSQDrBxASAHIh0AAIgqAAQB3ApCwBLQCQAyCLgRQgSAegaAYQgNAMgJAGQCTAFD7hQQB+goBggpIgxCkQgSAig4BYQgyBRgbA1Qh0DTjRB5Qi5BrkGAjQAtAIBZAaQBQAUA2gJQjhBqjgAoQjnAqjRgiQA3ALA8AYQAuATBaAsQlAAAhkgJQjmgWimhYQARArA8A0QBIBAAPATQnGhLjhhQQlziEjFj3QAJCYBkCqQA5BiCBC/QiCgxh6hig");
	this.shape_60.setTransform(189.6109,618.6566);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E0D3AC").s().p("ArmNsQh1gghcglIhGggQA/BoAiBKQipgaiqh5Qh7hYg2hMQARBKATAwQAKAYAGAJQhUg4hph1QiCiRhQiZQjempECkrQAMhkBehyQC9jjGXhFQgTAygHAnQgEAUAAAKQCIh8DKgrQBlgVBJADQhSA5gcAqQgOAVADAKQC2hrEvASQCYAJByAfQhWAMgsAjQgWARgFAPQCdgfC2AfQCvAdBYBBQg2AegjAPQBJAACrBSQDrBxASAHIh0gBIgqABQB3ApCwBKQCQAzCLgRQgSAdgaAYQgNANgJAGQCTAED7hQQB+gnBggpQhbEyg7B9Qh3EAi1BxQB1gPAugHQgpAziBBbQibBui7BdQoHEFnhAAQnOAAlzhkg");
	this.shape_61.setTransform(189.6109,621.5316);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BC4E3C").s().p("ACgGJQBnhBA+hyQA+hzgEhzQgDhUgmhHQgzhchrg7QjGhsjSA7QhCATg7AhQgeARgSANQARgOAdgSQA8glBCgVQDUhDDMBvQBgA1A2BSQA1BSAEBmQAEB4g/B1QhAB1hrBEg");
	this.shape_62.setTransform(116.4369,524.0987);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F37E3A").s().p("AlikOQAQgNAegRQA7giBDgUQDUg9DMBvQDYB2ioDoQh6Cpj9Cig");
	this.shape_63.setTransform(111.7298,521.6319);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F3733C").s().p("AlzkOQAQgNAegRQA7giBDgUQDUg9DMBvQDeB5hgDlQgnBdhWBcQhPBWhfA8g");
	this.shape_64.setTransform(113.4013,521.6319);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E2633B").s().p("AmLklQAQgOAegRQA7giBDgTQDVg+DLBwQB1A/AzBoQAuBegNBwQgNBpg8BgQg9BghaA5g");
	this.shape_65.setTransform(115.8432,523.9819);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BC4E3C").s().p("AARgnIAOAHQgWAmgVAVQgLALgHACQAPgTAgg8g");
	this.shape_66.setTransform(279.525,480.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#CB9A6C").s().p("AgogwQiQgehZAgIATgIQAXgKAUgFQAhAFAaAAIAcgBIAcABIAUgBQAOAJANADIBZAXQAzANAmAHIArAQQAjAYAtAQQAJALANANQiqhWiQggg");
	this.shape_67.setTransform(265.35,253.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB9A6C").s().p("Ai8gjQAtAeA0AOQAZANAZgDIABAAQATADAQAAQBgAABRg0IARAEQhKAwhLALQgVADgTAAQhjAAhZhHg");
	this.shape_68.setTransform(316.825,268.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E0D3AC").s().p("AglAEQAfgDAggJIALACQgoAEgiALg");
	this.shape_69.setTransform(241.45,247.075);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D3AC").s().p("AiVABIAcAKQAZANAagDIAAAAQAUADAQAAQBgAABRg1IAHACQhFAshHAKQgTADgTAAQg/AAg6gdg");
	this.shape_70.setTransform(319.75,267.919);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D3AC").s().p("AhYglQAnAJAgAEQArAiA3ATIAHAJQhfgvhRgcg");
	this.shape_71.setTransform(282.4,254.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#BC4E3C").s().p("AAfgqQgeAEgTAAQgSABgNgFIAJgDQANAGAPAAQAcAAASgTIALgBQgCAQAHAPIgaBYg");
	this.shape_72.setTransform(157.325,275.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CAA87C").s().p("AlSSkQBii3A7kIQA3j2gGiwQhKB6gbAWIgLAJIgBgOQgKh3gRhTQgLg3gNgfQgkAzgdAUQgQALgJAAIgHAAIAAgHQgGiKgThuQgMhEgPgwQg+BTgMAMIgKAKIgDgOQgwkCgThTQgIATgDAiQgDAYAAAVIAAAfIgOgcQhtjUADilQgRAigIAbQgDAOgBAHIAAApIgOgmQglhigSinQgUizAOiRQgeAFgUAAQgSAAgNgFIAJgDQANAGAPAAQAdAAASgTIALgBQgBAJACAKQgNCFAQCmQAPCZAhBnQALgmAdgzIAQgcIgCAhQgOCiBoDWQAFhGAUgZIAKgLIADAOIARBRQAXBwAdCZQAWgbAxhDIAIgKIAFAMIAZBcQAYB2AICjQAggRAvhDIAGgJIAGAKIAWA8QAWBXANCNQAngxA8hlIAMgUIABAYQAMCng1D6Qg4EJhgDBQC3h7CkiBQETjYBChyIAOgYIAAAcIgCAQQgDAXgHAiQBGhKB1iFIAIgJIAXBDQBChJAkiGQAZhdANiEIABgLIAKAFIAWATQAYAbAOAqQAXhkAKhiQAPidgbhjIgFgSIAQAKQAEAAA9ArQgEhIgpiBQgZhOg1iOIgkhjIAPAGQAMAFAPAIQAdAQAUASQgNjLgNhYIgDgYIAQASIASASQAWAUAXASQgEiaAAhYIAPgJQAAB/AFCLIAAAPIgMgIQgcgVgigfQANBqALC4IACAWIgPgRQgZgcgsgWIAZBDQA5CZAZBPQAqCJAABIIAAAOIhIgyQAaB4gZC3QgNBdgUBMIgIAdIgHgdQgOhDgkghQgOCIgcBeQgoCHhGBIIgJAJIgWhCQiTCogyAwIgSARIAGgYQAIglAFgbQheCDkuDmQiZBziVBkIgZAQg");
	this.shape_73.setTransform(244.225,386.475);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F9F5EA").s().p("AheIjIgljUQgVh8gFhXQgWAbghBhQgdBQgyAhQAJhKgMhoQgTh2gHg8QgbBphOA7QAnh+gDicQgBgZgUkAQgMAdg8BFQg1A8gIAxQgPhWAYieQAcirgIhKQgRAagkAhIhBA8QgJg2AUhIIAhh/QgJAHhOAvQgyAegaAjQADgwAPgxQAUgGAIgUQAvgVApgdIALABQAZgBANgRQAzgMAzgXIArgHQBMgDBDgVQAXgDAWgFQAngDAjgLIAHACQgkAHgfAQQEoA7D+CsQEaC+AiDTQAAAGAFAHQgRgMgTgJIgRgIIBhEJQA6CtAABTIg3gmIgWgOQAfBwgWC1QgMBfgWBeIgFgVQgBiVgYhjQgfiBhQhXQABEqhaEKQggh2gQg8QgahoAAhKQgjChiaCuIiECNQhPBVgsA/QAsiogoj/g");
	this.shape_74.setTransform(260.2,343.15);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ECE3C4").s().p("AiDKwIgVjIQgNh5AAhQQgkAugkBLIg9CDQgDgbgmivQgch+AJhXQgOAegiA7QgaA0AAAlQgZhmAHitQAIjWgFg7QgeAPgdA0QgeA0gdAOQgGg+ARivQAOiSgZhbQgeA0hDBiQgyBVgCBIQABkPA6jWQg7BLgaAmQgrBBgUA7QAAi6AximQAWgHAKgUIAEgBQAJAEAMAAQAgAAAMgdQAygXAmgbIALABQAZAAANgSQAzgMAygWIAsgHQBLgDBEgWQAXgCAWgGQAngDAjgKIAHABQgkAHggAQQMxCkBYHdIACAjQgUgXgkgVIgggPIBgEIQA7CuAABSIg3gmIgWgOQAeBwgVC1QgMBggXBeQgShlg+iTQAACXhHCQQhCCIh0BoQAJgigKg/QgNhOAAgSQh2CphtBtQiLCMiZBHQA2iggUjwg");
	this.shape_75.setTransform(255.025,355.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E0D3AC").s().p("AjKM9QA3kAgMitQg0BYgjAuQgRAXgHAGQgMiWgYhbIgVg9QgmA4gfAWQgPALgHAAQgIingZh7IgYhaQhFBdgNANQgfijgXhzIgRhSQgQASgGA0QgDAaAAAWQh2jmAOivQgcAwgLAlQgGATAAAJQgmhlgSitQgTizAQiNIgRACQAJgFAFgHIAJgBQgEAWAMASQANATAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAnAAARggIAFgBQAJAEAMAAQAgAAAMgdQAxgXAngbIAKABQAZAAANgSQAzgMAzgWIArgHQBMgDBEgWQAWgCAXgGQApgDAggKQAgAGAbAAIAdgBIAbABIAVgBQAOAJANADIBkAZQA5AOAtAHQAtAjA3ATQBFBSBlAdQAYANAbgDIAAAAQATADARAAQBbAABOgwQAAB/AFCHQgcgUgbgZIgWgWQAPBmAMDSQgUgXgjgVIgggPIBgEIQA6CuAABTIg3gmIgWgOQAhB3gbDDQgNBjgUBKQgMg4gbghIgZgXQgPCXgfBmQgmB8hDBFIgWhDQicCygxAvQAKguAFgeIACgVQhKCBlHD5QikB8iVBjQBnjBA7kTg");
	this.shape_76.setTransform(247.475,375.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BC4E3C").s().p("AhhJsIipgQIgFgBIgBgFQhLj6gKiZQgFhXAPglQgniKgQimQgSi3AWh0QAFgcAZgmIASgZQg1BOAKDfQAJDRA0C3IABADIgCADIgGAWQgFAfACAwQAGCZBNEDQFiAlBigHQAqm4AVhxIABgCQAqhXAmiCQBMkEgTjdIAKA4QAJA/gCAfQgKC2g/DFQgiBpgiBFQgPBRgZD1IgXDnIAAAHIgGAAQgRACgZAAQhSAAiugPg");
	this.shape_77.setTransform(183.4132,488.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BC4E3C").s().p("AAtHBQgVg/ggg1QgVgjgWgXQg5CigIAMIgIARIgGgRQgdhTglhJQgeAhgTApIgGAOIgHgOQgZgzgLhDIg+BSIgBgVQgBhCAMgcQgoiPgRiYQgUi0AXhxQAMg5AXgiIAVgWQg7BLALDpQAJDPA0C4IABADIgCADIgEAPQgFAVgBAfIA7hMIACASIAGAmQAJAtAPAjQAYgsAbgcIAHgHIAFAJIAVAqQAYAzAVA4QAXg8AmhsIAEgKIAIAHIAiApQAkAzAaBBQAJhCAfhaIAEgMIAIAJIBkBrQARgdAcgkIANhVIABgCQAqhYAmiBQBMkDgTjdIAPgCQASDchJEAQgoCOgsBXQgGAigHAzIAAACIgBACQghArgRAdIgFAJIgHgHIhihoQgXBFgKA7QgFAdAAAQIAAAug");
	this.shape_78.setTransform(183.3433,474.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F37E3A").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_79.setTransform(183.6938,471.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3733C").s().p("AgUFPIglguQgyCOgTAsQgWg+gbg6IgXguQgWAWgUAhQgKAQgFANQgTgmgLg0IgHgsIg9BPQgBgsAGgdIAGgUQg0i7gHjUQgHjqA9hNILqgJQATDhhNELQgmCGgqBYQgGAigHA1QghApgSAhIhrhyQgaBMgKA/QgGAhAAAQQgahPgqg9g");
	this.shape_80.setTransform(183.6938,471.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#444444").s().p("AhaJpQgGioASknQALgdgIgdIgDA6QgKAbgXAUQgXAVgeAHQAAhAgEghQALg8gHgkQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhNAAipgOg");
	this.shape_81.setTransform(183.6987,488.4313);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#444444").s().p("AAAgcQAIAcgKAdg");
	this.shape_82.setTransform(176.077,500.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3D3D3D").s().p("AiBJmQgHg9gFheIgIicQgHAPgeAXQgdAWgIAPQAFgmAkiQQAbhtgJgzQgNg5hThNQhvhogZgiQgLiEALhkQAMhvAlgvILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgPABgaAAQhUAAjJgRg");
	this.shape_83.setTransform(183.6987,488.4317);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373737").s().p("AhGJrIjFgTQhRkNgFiaQgBgxAGgfIAGgVQg0i6gHjRQgHjmA9hNILqgEQATDghNEGQgmCCgqBVQgQBSgZD2IgXDnQgQABgbAAQhJAAiXgMg");
	this.shape_84.setTransform(183.6938,488.438);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BC4E3C").s().p("AwgXqQhQhSAFirIAAgDQAIk7AOi0QAXk2A1jyQCPqHF6kHQBag+BWg5QEEiuBahcQCKiKBKjYIAGABIAKgBQhLDeiMCMQhbBekICwIiwB4Ql2EDiNKDQg1DxgXE0QgNCygJE7IAAAEQgECjBMBPQBIBJCSAAQCvAAE0huQCxg/FRiVQGAiqEAjbQBQhEA6hCIArg2QBgh/AXkNQAOiigLl5QgJkwAEieQAGjHh1jtQhmjPiWibQgngogmgfQAJAAAKgDQAmAgAfAgQCXCbBoDUQB1DwgFDKQgECcAJExQALF7gPClQgXEOhiCCIgrA2Qg6BDhRBEQkCDemDCrQltChjBBDQkUBgipAAQiZgBhMhOg");
	this.shape_85.setTransform(132.8253,415.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F37E3A").s().p("AuNTEQg7g/AGjiQADksAFinQAKkoAkjSQBopRF0kCQBphJDRh/QCshpBNg+IA8ChQAkBgAbA9QAPgPAHgtQAIgsAPgPQAABkAqCJQAYBOA0CgQASgbAKgoIARhDQAACKgCBGQgDB3gKBZQAIgxAuhNQA0hZANgmQAuA/ADBjQACBxAiBFQAPgeAngfQAngeAPgeQgRCiBECyQAhBWB4DgQgTAogWAdIhFBSQhhBniLBlQjqj4hGk5Qg0CTkBBZQhsAmhwANQhwANhOgRQAMErguCxQg7DfirCeQg/ALgwAAQhbAAglgpg");
	this.shape_86.setTransform(140.3221,445.4452);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F3733C").s().p("Au5X/QhqhOAFjYQAEkvAGiqQALkvAmjaQBrpkF0kCIERi6QCHhdBNhDQC9ioBYj4QAJAEAMAAQAeAAANgaQAJgHADgIQAcgFAPgaIAHgIQAnAAARgfIAFgCQAJAFAMAAQAgAAAMgdQAugVAqgeIAKABQATAAANgLQCmCIB8D2QCFELgGDoQgECXAIEJQAIEfgCBqQgCDOgaCFQgfCghGBdIhFBTQhhBniLBlQjqj4hFk5Qg3CaiTBRQiRBQidghQAKDviYDtQhvCtjjDQQhBAMg2AAQhqAAg+gtg");
	this.shape_87.setTransform(139.8983,413.5918);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E2633B").s().p("AxlTwQAJk2ANixQAXk2A1jyQCOqOF4kFIEPi3QCGhbBIg/QBchRA9hbQBChjAuiIQAfgBARgVIAJgCQgEAXAMARQANAUAaAAQAeAAANgbQAJgHADgHQAcgFAPgaIAHgIQAmAAATggIAEgBQAJAEAMAAQAgAAAMgdQAtgUArgeIAKABIAMgBQCyCWB/DvQCKEEgGDdQgECYAIEJQAIEfgCBpQgCDOgaCFQgfCghGBeIgpA0Qg5BBhQBFQkADdmFCrQktCFimA+Qj+BfinAZQg6AIgyAAQk2AAAIlDg");
	this.shape_88.setTransform(132.8513,415.3262);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BC4E3C").s().p("AjYLFQgmhYgzi+IgDgPQgih+gOkjIgHkPIAAgCQAiiSFOjkQCohzCzheIAMgHIgBAOIgZCdQgmDAhGC0QAOCggODOQgaGFiBEOQhLChhLAAQhKAAhDicgAgPpnQktDTggCFIAHEUQAOEcAhB7IAEAPQAwC0AkBXQBACcBDAAQBCAABHiYQCDkTAYmNQAHh8gEh7IgFhkIgBgCIABgBQA+ifAmirQAWhiAKhWQjGBsikBzg");
	this.shape_89.setTransform(259.275,510.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BC4E3C").s().p("Ag4GPQgjhFgtgzIhFByIgGgMQgnhHgfhJQghAtggBEIgNAcIgBgfIgDh+IAAgzIAAgBQAiiTFOjiQCohzCzhfIAMgGIgBANIgZCeQgmC/hGC0QAEApACBHIAAACIgBACQg1BIg9AcIgEACIgDgDQhKg0g9gwQgSCEgDAbIgCAZgAiEEFIAZAeQAdAlAYArIAWiiIAKAIIAjAcIBqBNQA2gaAwhAQgChJgEglIgBgCIABgCQA+ieAmiqQAWhjAKhVQjGBsikBzQktDRggCFQAABCACBPQAdg4AggqIAIgJIAFALIAUAsQAYA1AYAuIBBhsg");
	this.shape_90.setTransform(259.275,466.125);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F37E3A").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_91.setTransform(259.225,465.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F3733C").s().p("AhtEzIgcgiIhDBvQgagxgbg6IgWgwQglAwgkBMIgDh+IAAgyQAiiSFVjmQCshzCkhXIgYCbQgmDAhIC1QAFAgACBSQgzBFg7AcQg9gsgwglIgkgcQgUCSgDAbQgagzgigsg");
	this.shape_92.setTransform(259.225,465.475);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#444444").s().p("Ah8GwQgjixAAiyIgsBBQgZAigUAUQgRicAcjCQARh0A1jqQB8hbChhfICKhOIgYCbQgnDAhHC3QASCJgSDyQgcFyh1ECQhDiigiivg");
	this.shape_93.setTransform(269.2885,502.15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3D3D3D").s().p("Ai0HWQgTguAAhLQAEhXAAgsQgIAPgUAfQgRAeAAAbQhcnjCFlwQCDhmC6hvIChhcIgYCbQgnDAhHC2QATCNgUD2QgdF6h6ECQgnBRgkAmQgjjGg/iog");
	this.shape_94.setTransform(266.982,508.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373737").s().p("AinMPQg7hchLkYQgih/gNkkIgHkLQAiiSFVjnQCshzCkhXIgYCbQgmDAhIC2QATCNgTD2QgeF6h7ECQhJCdhGAAQgwAAgthIg");
	this.shape_95.setTransform(259.225,510.7593);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,379.8,719.8);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],23.1,23.6,-201,-204.8).s().p("AANGyQgQgdgGgHIAAhnQgEgVAAgTIAAqwQAJAVAOAqIAAJxQAAATAEASIAACOg");
	this.shape.setTransform(1.4,43.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,2.8,86.8), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],6,-1.9,-31,14).s().p("AgKFfQgGgbAMlvQAMmGAABjIAFKnQgEgLgIANQgDAIgDAAQgDAAgCgEg");
	this.shape.setTransform(1.3027,34.3898);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,-1.1,2.6,71), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEC2C","#E29739"],[0,1],-7.9,0,8,0).s().p("AgBDsQABgYgMgcQgNgagWg+QggheAAgwQAAhSAshFQArhEBIgiQgnAWgbAjQgcAjgNArQgdA3AAA/QABAuAgBcQAQAuAPAkQAQAlgCAiQgDAggUAXQAEghgEgfg");
	this.shape.setTransform(8,30.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,16,60.1), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],45.5,-44,-53.7,52.2).s().p("AHFkBQAAgSAEgVIAAhzItUAAQg9AAgXAlIgBAAQAAgQAFgWQAhgXAvAAINsAAIAACNQgEATAAASIAAJ8QgKAegOAbg");
	this.shape.setTransform(48.1,43.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,96.2,87.2), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],19.5,-37.3,-17.3,34.8).s().p("AgZBZQgigJgVgNIgrgeQgZgRgVgHQBIATBRAjQBAAdAwgdQAvgdADhEQAHgZARgxIAABCQAAA/gjAoQgjAog4AAQgiAAgjgQg");
	this.shape.setTransform(17.025,10.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,34.1,21), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#4065AE"],[0,1],52.7,43.9,9.8,8.9).s().p("AgLmdIACAAIAVAfIAAJ+QgEAQgGA2QgIA7gFAdg");
	this.shape.setTransform(1.2,41.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,2.4,82.8), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEC2C","#E29739"],[0,1],28.4,0.4,-257.6,-2.8).s().p("AAKGeIgVgeIAAp/QAEgQAHg2QAGg7AGgdIAAM7g");
	this.shape.setTransform(1.175,41.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,2.4,82.8), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],0,-1.2,0,33.4).s().p("AmZAMIgRgXIMTAAIAkALQARAEANAIg");
	this.shape.setTransform(42.725,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,85.5,2.4), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],6.1,-6.6,-58.9,65.7).s().p("AgWDiQg3hLAAhdQAAgxAghcQAQgvASgpQAYg4gYglQgKgRgUgJIgEgDQgOgDgVgMQgZgNgJgDIgCgBIAVAAQBJABAeAvQAgAwgeBEQgPAkgQAuQggBbAAAuQAABWAzBEQASAmAfAeQAfAeAnAQQhWgcg1hIg");
	this.shape.setTransform(11.725,32.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,23.5,65.2), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEC2C","#E29739"],[0,1],39.1,-44.5,-190.6,179.9).s().p("AK9JuQAng7AAhGQAAgagHggQgMhVhCg5QhCg5hXgBQglABhLAYQg3ASgtAUQgkAQgiAAQg3AAglgpQgigoAAg/IAAtUItUAAIAAgYINsAAIAANsQAABJAvAgQAxAeBDgdIBTggQBcghAuABQBrAABLBLQBLBMAABqQAABQgtBBQgrA/hHAeQA/gcAmg5g");
	this.shape.setTransform(75.9,70.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,151.8,141.4), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#4065AE"],[0,1],84,-96.4,-39.6,55.6).s().p("AiSLDIAAtsQAAhJgwgfQgwgghDAeQglAQguAQQhcAgguAAQhrAAhLhLQhMhLAAhrQAAhPAthCQAshABHgdQg/AcgmA5QgoA8AABFQAAAeAIAcQAMBVBBA5QBCA6BYAAQAlAABLgZQAxgRAygVQAkgQAiAAQA5AAAjApQAjAnAABAIAANUINUAAQAvAAAKAMQALAMhEAAg");
	this.shape.setTransform(78.8702,70.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,157.8,141.5), null);


(lib.Slotcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEC2C","#E29739"],[0,1],-214.6,-192.2,0.4,4.4).s().p("AinDhIgBgFQAAgdgOghQgQgkgQguQghhbAAguQAAhrBMhLQBLhMBqAAQBPAABCAtQA/AsAeBHQgdg/g5gmQg7gohGAAQgaAAgeAHQhVANg5BBQg6BCAABYQAAAkAZBKQASA3AUAtQAPAjAAAjQAAA5goAjIgMAIQAdgnABg3g");
	this.shape.setTransform(-104.6887,-226.8675,0.679,0.679);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#9FCC48","#9CC949","#92C049","#82B44B","#6DA54C","#51954D","#3D8A4C"],[0,0.263,0.455,0.62,0.776,0.918,1],28.9,-40.8,-41.4,56.6).s().p("AnMAeQgNgLgKgMINnAAQA+AAAigkQgNAegbAVQgaAIgeAAg");
	this.shape_1.setTransform(-150.708,-205.4451,0.679,0.679);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FDEC2C","#E29739"],[0,1],-287,-261.8,37.6,35.1).s().p("AgLKOIAA1WQAKAMANALIAAU/QAAAvgMALIgCABQgJAAAAg7g");
	this.shape_2.setTransform(-183.0794,-155.4738,0.679,0.679);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDEC2C","#E29739"],[0,1],74,-68.5,-7.9,9.9).s().p("AjggRQBKg3BdAAQAxAABcAgQA+AWAaANQA3AXAmgXQAXgPAJggQARgeAMgnIAAAfQAABJgwAfQgwAfhDgeQglgPgugQQhbggguAAQhXAAhEAyQgmATgdAfQgdAfgRAnQAchWBJg1g");
	this.shape_3.setTransform(-46.2946,-139.2934,0.679,0.679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9FCC48","#9CC949","#92C049","#82B44B","#6DA54C","#51954D","#3D8A4C"],[0,0.263,0.455,0.62,0.776,0.918,1],26.8,-27.3,-177.5,178.6).s().p("AgLmXIAXgRIAAMGQgLAsgMAgg");
	this.shape_4.setTransform(-24.974,-174.8221,0.679,0.679);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#9FCC48","#9CC949","#92C049","#82B44B","#6DA54C","#51954D","#3D8A4C"],[0,0.263,0.455,0.62,0.776,0.918,1],0.4,-28.3,-2.8,257.6).s().p("Aj/AMQgQgEg2gHQg7gHgdgFIM7AAIAAACIgfAVg");
	this.shape_5.setTransform(-52.2868,-204.2059,0.679,0.679);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#9FCC48","#9CC949","#92C049","#82B44B","#6DA54C","#51954D","#3D8A4C"],[0,0.263,0.455,0.62,0.776,0.918,1],-10.4,0,10.5,0).s().p("AAnCqQg/AAgogjQgogjAAg5QAAgiAQgiIAIgZQAGgSAIgMIAegrQARgaAGgUQgRBIgkBRQgdBAAdAwQAdAvBEADQAZAHAwARg");
	this.shape_6.setTransform(-86.3727,-214.9511,0.679,0.679);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FDEC2C","#E29739"],[0,1],-129.3,60.2,72.5,0.2).s().p("AJtHhQgTgEgSAAI0+AAQgJgEAWgHQAXgIgKgFIUkAAQAWAAARAEIBzAAIAAtUQAAg9glgYQAUABASAEQAXAgAAAwIAANsg");
	this.shape_7.setTransform(-75.8945,-77.9457,0.679,0.679);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#9FCC48","#9CC949","#92C049","#82B44B","#6DA54C","#51954D","#3D8A4C"],[0,0.263,0.455,0.62,0.776,0.918,1],39.5,-37.7,-62.2,49.4).s().p("AjFAjQhEgqgihIQAWAnAjAcQAkAaAqANQA4AeA+AAQAugBBcggQAugQAkgPQAmgQAhACQAgADAXAUQgigEgdAEQgZgBgcANQgaAMg+AWQheAggwAAQhSAAhFgtg");
	this.shape_8.setTransform(-47.0925,-111.5053,0.679,0.679);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FDEC2C","#E29739"],[0,1],-80.3,-189.3,11.9,80).s().p("AnDHPIAAtsQAAg0AMAEQAMAEAAAsIAANUIBzAAQARgEAWAAIK6AAQAcAAgBAMQgBAMgaAAIq6AAQgSAAgTAEg");
	this.shape_9.setTransform(-153.2008,-76.7161,0.679,0.679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.247)").s().p("AK/P5QgNgDgMAAI1LAAQgMAAgNADIhgAAIAA49IJUAAQAyAAAVggQAVghgUguQgLgZgLgfQgWg+AAggQAAhIAzgzQA0g0BHAAQBIAAA0A0QAzAzAABIQAAAggWA+QgLAfgLAZQgUAuAVAhQAWAgAxAAIJUAAIAAJSQAAAyghAWQggAVgugUQgZgLgfgLQg+gWggAAQhIAAg0AzQgzAzAABJQAABIAzAzQA0A0BIAAQAgAAA+gWQAfgLAZgLQAugUAgAVQAhAVAAAyIAAJUg");
	this.shape_10.setTransform(-103.775,-146.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKASQgEgFAAgIQABgHAEgGQALgPAJAFQAJAFgLAJQgHAGAAACIgCANQgBACgEABIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_11.setTransform(-57.2211,4.1897,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy2, new cjs.Rectangle(-183.8,-248.5,159.9,254.1), null);


(lib.Slot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],8.4,-184.7,-1.4,78.8).s().p("AplLoQg/gsgehHQAcA/A5AmQA7AoBGAAQAcAAAegIQBVgMA5hCQA5hBABhYQAAglgZhLQgSg2gUgtQgQgkAAgiQAAg5ApgjQAogjA/AAINUAAIAAtUQABgvALgKQAMgLAABEIAANsItsAAQhJAAgfAwQggAwAeBDIAgBTQAgBcABAuQgBBrhLBLQhMBLhqAAQhPAAhCgsg");
	this.shape.setTransform(-27.5011,-166.9235,0.7325,0.7325,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EF5686","#E34E7A","#CF4063","#C43757","#C13553"],[0,0.157,0.541,0.835,1],-32.5,0,32.6,0).s().p("AlFBhQAAhKAwgfQAwgeBDAdIBTAfQBbAhAugBQBXABBEg0QAmgSAdgfQAdgfARgnQgcBWhJA1QhKA3hdAAQgxAAhcggQg/gWgZgNQg4gXglAXQgQALgKAVQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgEAOgLAVQgNAYgEALIgBABg");
	this.shape_1.setTransform(-88.0065,-70.2948,0.7325,0.7325,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],103.8,0,27.9,0).s().p("AgLloIAKgjQADgLAKgVIAANGIgXAQg");
	this.shape_2.setTransform(-49.442,-47.2958,0.7325,0.7325,-90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],43.9,-52.6,8.9,-9.7).s().p("AmdAMIAAgCIAegVIJ/AAQAPAEA3AHQA6AGAeAGg");
	this.shape_3.setTransform(-17.598,-76.7587,0.7325,0.7325,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],47.2,-80.8,19.3,-37.2).s().p("AAvBCIAUgxQAdhBgdgvQgdgvhEgDIhJgYIBBAAQA/AAAoAjQAoAjAAA5QAAAigQAjIgIAXQgGATgIAMIgeArQgSAagGAUQALgtAXg7g");
	this.shape_4.setTransform(-6.0067,-113.5278,0.7325,0.7325,-90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],82.2,-36.4,-45.4,1.5).s().p("AmcHcQgXgfAAgxIAAtsICNAAQATAEASAAIJ8AAQAYAJAhAPIq1AAQgWAAgRgEIh0AAIAANUQAAA9AmAYQgVgBgRgEg");
	this.shape_5.setTransform(-153.8004,-78.3701,0.7325,0.7325,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EF5686","#E4527F","#C24064","#B03857","#A93552"],[0,0.082,0.502,0.82,1],45.6,-33.6,11,-5.1).s().p("ADzAOQgjgbgrgNQg3gdg/AAQguAAhbAgIhTAfQglARgigDQgggDgXgTQAhADAfgEQAYABAcgMQAagNA/gWQBdggAwAAQBSAABFAtQBEAqAiBIQgWgmgjgcg");
	this.shape_6.setTransform(-117.6165,-71.1371,0.7325,0.7325,-90);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EF5686","#E34E7A","#CF4063","#C43757","#C13553"],[0,0.157,0.541,0.835,1],3.1,-4.4,-1.3,2.9).s().p("AgTABQgzgCBQAAIAeAAQgKADgZAAIgYgBg");
	this.shape_7.setTransform(-188.5823,-153.812,0.7325,0.7325,-90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EF5686","#E34E7A","#CF4063","#C43757","#C13553"],[0,0.157,0.541,0.835,1],60.3,-59.5,-289.3,283.5).s().p("AGnLCIgD2IIhzAAQgSAEgWAAIrDgHQAKgFgFgEQgGgEALgEIK5AAQASAAATgEICNAAIAAVpQAAA1gKAXQgDAIgDAAQgEAAAAgdg");
	this.shape_8.setTransform(-135.1995,-186.242,0.7325,0.7325,-90);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.247)").s().p("AgONeQg2AAgYgkQgXgjAWgxIAYg9QAYhDgBgiQABhOg4g3Qg3g3hOAAQhOAAg4A3Qg3A3AABOQAAAiAYBDIAYA9QAVAxgXAjQgWAkg2AAIqCAAIAAhoQACgOAAgNIAA21QAAgNgCgOIAAhoIa5AAIAAKDQAAA1AkAYQAjAWAxgVIA9gYQBDgYAiAAQBOAAA3A4QA3A3AABNQAABOg3A3Qg3A4hOAAQgiAAhDgYIg9gYQgxgVgjAXQgkAXAAA1IAAKDg");
	this.shape_9.setTransform(-79.3,-131.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKASQgEgFAAgIQABgHAEgGQALgPAJAFQAJAFgLAJQgHAGAAACIgCANQgBACgEABIgBAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_10.setTransform(-57.2211,4.1897,0.717,0.717);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slot, new cjs.Rectangle(-189,-218.6,219.4,224.2), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path();
	this.instance.setTransform(25.2,107.45,0.7354,0.6153,0,0,0,78.9,71);
	this.instance.alpha = 0.3086;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(85.9,26.25,0.7354,0.6153,0,0,0,12.1,32.9);

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(47.15,7,0.7354,0.6153,0,0,0,43.1,1.6);

	this.instance_3 = new lib.Path_3();
	this.instance_3.setTransform(15.2,31.65,0.7354,0.6153,0,0,0,1.6,41.7);
	this.instance_3.alpha = 0.3086;

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(3.5,62.5,0.7354,0.6153,0,0,0,17.1,10.7);

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(151.9,33,0.7354,0.6153,0,0,0,48.4,43.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#3AAEE3","#2C73B8"],[0,1],33.7,45.6,5.2,11).s().p("AgNDzQAbgjANgrQAdg3AAhAQAAgugghbIgghSQgQglAEgiQADggASgXQgDAjADAdQAAAZANAbIAhBYQAhBeAAAvQAABTgtBFQgqBEhIAiQAmgWAcgjg");
	this.shape.setTransform(115.5527,26.8895,0.7353,0.6151);

	this.instance_6 = new lib.Path_8();
	this.instance_6.setTransform(185.95,77.7,0.7354,0.6153,0,0,0,1.5,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3AAEE3","#4065AE"],[0,1],-258.8,-338.1,-120.2,-156.7).s().p("Aq5AMQg0AAAqgMQAqgLAsAAIU1AAIAPAXg");
	this.shape_1.setTransform(132.5367,150.0811,0.7353,0.6151);

	this.instance_7 = new lib.Path_10();
	this.instance_7.setTransform(186.25,124.25,0.7354,0.6153,0,0,0,1.7,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.247)").s().p("Ap0LUIAAocQAAgtgjgTQgkgUgxATIg9AUQhDATgjAAQhOAAg3guQg4guAAhCQAAhBA4guQA3guBOAAQAjAABDAUQAiAKAbAJQAxATAkgTQAjgUAAgtIAAocIKEAAQA2ABAXAdQAXAdgWAqIgXAzQgYA4AAAdQAABBA3AvQA3AuBPAAQBOAAA4guQA3gvAAhBQAAgdgXg4IgYgzQgWgqAXgdQAXgdA2gBIKFAAIAABXQgDAMAAALIAATLQAAALADAMIAABXg");
	this.shape_2.setTransform(77.275,78.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_7},{t:this.shape_1},{t:this.instance_6},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-32.8,6.1,220.2,144.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Path_0();
	this.instance.setTransform(140.2,143.3,0.6672,0.6672,90,0,0,76.5,71.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEC2C","#E29739"],[0,1],19.3,-43.6,-33.4,75.7).s().p("AlBFGQhKAAgfgwQgfgwAdhDQAQglARguQAghbAAguQAAhXgzhEQgUglgfgeQgegdgogRQBXAcA2BJQA2BKAABdQABAxghBcQgVA/gNAZQgYA4AYAlQAMASAVAKQAXAJAdAAINHAAIARAYg");
	this.shape.setTransform(51.9196,113.9134,0.667,0.667,90);

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.setTransform(58.2,150.05,0.6672,0.6672,90,0,0,1.1,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FDEC2C","#E29739"],[0,1],8.6,-116.3,-5,70.2).s().p("AipAoQAAhAAjgoQAjgoA5ABQAgAAAlAPIAXAIQATAGAMAIQAPAJAcAVQAaARAUAHQgtgMg7gWIgxgUQhBgdgvAdQgvAdgDBEQgHAZgRAwg");
	this.shape_1.setTransform(91.2906,160.6717,0.667,0.667,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FDEC2C","#E29739"],[0,1],4.3,-8.6,-33.4,81.9).s().p("AngG0IAAiNQAEgTAAgSIAAp7QAJgaAPggIAAK1QAAAWgEASIAABzINUAAQA8gBAZgkQgBAUgEASQgfAWgxAAg");
	this.shape_2.setTransform(59.2735,26.0832,0.667,0.667,90);

	this.instance_2 = new lib.Path_6();
	this.instance_2.setTransform(52.95,59.15,0.6672,0.6672,90,0,0,9,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDEC2C","#E29739"],[0,1],302.7,-128.8,-128.5,18.9).s().p("ArdKlIAAzIQAAgSgEgTIAAiNINsAAIJXAYI2rAAIAABzQAEASAAAVIAASiQAAAygMAcQgDAJgDAAQgGAAAAgxg");
	this.shape_3.setTransform(138.6716,43.2257,0.667,0.667,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.247)").s().p("Ah5O1QgygzAAhHQAAgeAVg+IAWg3QAUgtgVggQgVgggxAAIpJAAIAApIQAAgxAggVQAggVAtAUQAYALAfALQA9AVAfAAQBIAAAygyQAygzAAhHQAAhHgygyQgygzhIAAQgfAAg9AWQgfALgYAKQgtAUgggVQgggVAAgwIAApKIBeAAQANADAMAAIUzAAQAMAAAMgDIBfAAIAAYhIpJAAQgxAAgVAgQgVAgAUAtIAVA3QAWA+AAAeQAABHgzAzQgyAyhHAAQhGAAgzgyg");
	this.shape_4.setTransform(109.125,93.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(30.3,-6.4,157.7,200), null);


(lib.StarPiececopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(-85.8,356.2,0.508,0.557,0,0,0,203.3,529.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.1,61.4,292.6,415.6);


(lib.StarPiececopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(-105.9,259.5,0.5173,0.5173,0,0,0,341.2,254.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282.4,127.7,297.9,385.90000000000003);


(lib.StarPiececopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(39,261.9,0.4953,0.4953,0,0,0,230.7,186.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,169.4,285.2,369.5);


(lib.StarPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-51.15,275.5,0.5551,0.5551,0,0,0,329.7,552.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-234.1,-31.3,319.7,414.2);


(lib.Slots = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.slot3 = new lib.Symbol1copy();
	this.slot3.name = "slot3";
	this.slot3.setTransform(238.95,484.25,1,1,0,0,0,141,100.9);

	this.slot2 = new lib.Slotcopy2();
	this.slot2.name = "slot2";
	this.slot2.setTransform(25.5,469.65,0.9072,0.9072,0,0,0,-126.6,-116.7);

	this.slot0 = new lib.Symbol1();
	this.slot0.name = "slot0";
	this.slot0.setTransform(240.25,318.4,1,1,0,0,0,142.3,76.7);

	this.slot1 = new lib.Slot();
	this.slot1.name = "slot1";
	this.slot1.setTransform(45.5,314.1,0.9072,0.9072,0,0,0,-110.2,-129.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1},{t:this.slot0},{t:this.slot2},{t:this.slot3}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(10).p("EAlRAk4MhKhAAAMAAAhJvMBKhAAAg");
	this.shape.setTransform(128.4156,384.7723,0.6686,0.6686);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.instance = new lib.Symbol2copy("synched",0);
	this.instance.setTransform(100.2,390.5,0.4614,0.4614,0,0,0,189.8,359.9);
	this.instance.alpha = 0.2305;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(-36,222,328.9,358.6), null);


(lib.Pieces = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.piece2 = new lib.StarPiececopy3();
	this.piece2.name = "piece2";
	this.piece2.setTransform(609.6,494.1,1.2304,0.8514,0,0,0,-73.7,291.3);
	new cjs.ButtonHelper(this.piece2, 0, 1, 1);

	this.piece0 = new lib.StarPiececopy2();
	this.piece0.name = "piece0";
	this.piece0.setTransform(411.5,165.2,1.2304,0.8514,0,0,0,-76.4,240.8);
	new cjs.ButtonHelper(this.piece0, 0, 1, 1);

	this.piece1 = new lib.StarPiececopy();
	this.piece1.name = "piece1";
	this.piece1.setTransform(615.95,-75.35,1.2304,0.8514);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.piece3 = new lib.StarPiece();
	this.piece3.name = "piece3";
	this.piece3.setTransform(573.35,321.1,1.2304,0.8514,0,0,0,-91.8,265.8);
	new cjs.ButtonHelper(this.piece3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece3},{t:this.piece1},{t:this.piece0},{t:this.piece2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(158,68.1,716.3,584.6), null);


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
			var my2=createjs.Sound.createInstance("yes");
			
		this.my2;
		my2.play();
			
		}.bind(this);
		
		
		stage.on("drawstart", this.start, this, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Menu
	this.instance = new lib.Symbol5();
	this.instance.setTransform(-143,177);

	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(-79.05,-70.05,1,1,0,0,0,15,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape.setTransform(119.842,27.3414,0.3723,0.3723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(58.976,40.8113,0.3713,0.3713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(58.9199,44.7454,0.3723,0.3723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.1369,45.7516,0.3723,0.3723);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.1294,45.7236,0.3723,0.3723);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(48.9652,40.4393,0.3723,0.3723);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(48.9591,40.4671,0.3723,0.3723);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(48.3764,39.7719,0.3713,0.3713);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.2365,43.6186,0.3723,0.3723);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.2968,45.9098,0.3723,0.3723);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.2876,45.8726,0.3723,0.3723);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.1131,40.5975,0.3723,0.3723);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.1093,40.616,0.3723,0.3723);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.411,43.8721,0.3723,0.3723);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.3924,43.7856,0.3723,0.3723);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(48.8167,43.8435,0.3723,0.3723);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(48.8167,43.8435,0.3723,0.3723);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(43.8837,35.9508,0.3723,0.3723);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(37.8804,44.281,0.3723,0.3723);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.3491,52.0248,0.3723,0.3723);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.1886,47.1384,0.3723,0.3723);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(39.7791,41.3119,0.3723,0.3723);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(43.8558,35.8484,0.3723,0.3723);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(40.0118,37.3841,0.3723,0.3723);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.4679,50.759,0.3723,0.3723);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.2394,40.6138,0.3723,0.3723);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.1202,33.5727,0.3723,0.3723);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.3197,36.8567,0.3723,0.3723);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(115.9608,36.6333,0.3723,0.3723);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(117.6548,35.8856,0.3723,0.3723);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(116.6403,35.4668,0.3723,0.3723);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(113.876,31.4739,0.3723,0.3723);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.2475,30.9759,0.3723,0.3723);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(116.6124,30.9832,0.3723,0.3723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(116.631,32.0323,0.3723,0.3723);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(116.4914,32.023,0.3723,0.3723);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(117.6641,31.7996,0.3723,0.3723);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.4076,31.6031,0.3723,0.3723);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(114.4809,31.9672,0.3723,0.3723);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.2203,32.9817,0.3723,0.3723);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.3397,32.3625,0.3723,0.3723);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(118.0271,31.1712,0.3723,0.3723);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(118.7324,34.173,0.3723,0.3723);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(114.9859,38.0729,0.3723,0.3723);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(114.7904,37.0415,0.3723,0.3723);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(114.5453,35.3781,0.3723,0.3723);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.2918,36.1602,0.3723,0.3723);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(117.7665,32.1533,0.3723,0.3723);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(117.5617,32.0882,0.3723,0.3723);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.3942,32.1161,0.3723,0.3723);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(116.7613,32.1161,0.3723,0.3723);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.3331,32.1161,0.3723,0.3723);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(117.6269,33.2051,0.3723,0.3723);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(116.5891,33.2795,0.3723,0.3723);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.4353,33.196,0.3723,0.3723);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.4353,33.196,0.3723,0.3723);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(116.5193,32.8886,0.3723,0.3723);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(116.5286,32.8971,0.3723,0.3723);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(117.4873,33.1211,0.3723,0.3723);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(117.4873,33.1211,0.3723,0.3723);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(117.6083,32.8802,0.3723,0.3723);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(117.6083,32.8802,0.3723,0.3723);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.2389,34.1079,0.3723,0.3723);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.1912,40.3067,0.3723,0.3723);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.1418,39.2922,0.3723,0.3723);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(115.6351,47.4339,0.3723,0.3723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(115.6521,45.9173,0.3723,0.3723);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(115.5795,44.4653,0.3723,0.3723);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.2643,42.9698,0.3723,0.3723);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.2255,41.4428,0.3723,0.3723);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.1356,38.7733,0.3723,0.3723);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.1335,38.7523,0.3723,0.3723);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.0543,38.3242,0.3723,0.3723);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(112.997,43.802,0.3723,0.3723);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.4384,31.0282,0.3723,0.3723);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.1124,31.8834,0.3723,0.3723);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(101.9732,38.1939,0.3723,0.3723);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.3865,44.8374,0.3723,0.3723);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(96.7327,42.283,0.3723,0.3723);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(96.8991,39.7182,0.3723,0.3723);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.4354,41.1494,0.3723,0.3723);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.3138,39.3775,0.3723,0.3723);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(98.7327,37.5086,0.3723,0.3723);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.105,35.9524,0.3723,0.3723);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(96.8619,45.5689,0.3723,0.3723);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.3179,43.659,0.3723,0.3723);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(97.774,41.6113,0.3723,0.3723);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(94.9911,48.1977,0.3723,0.3723);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(98.742,34.2112,0.3723,0.3723);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(96.564,41.2281,0.3723,0.3723);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(96.5547,41.2095,0.3723,0.3723);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(94.9166,48.1994,0.3723,0.3723);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(94.9175,48.1985,0.3723,0.3723);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(98.7327,34.1871,0.3723,0.3723);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(98.742,34.1917,0.3723,0.3723);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.1259,42.0949,0.3723,0.3723);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.1132,42.0611,0.3723,0.3723);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.3728,29.1576,0.3723,0.3723);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.3538,32.4678,0.3723,0.3723);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.4711,30.1988,0.3723,0.3723);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(70.5033,30.0498,0.3723,0.3723);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.321,30.2825,0.3723,0.3723);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.3117,30.2732,0.3723,0.3723);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(70.5966,33.373,0.3723,0.3723);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(69.7492,33.0375,0.3723,0.3723);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(70.5,32.8235,0.3723,0.3723);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.3315,32.3953,0.3723,0.3723);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(69.7492,32.4512,0.3723,0.3723);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.3315,32.3767,0.3723,0.3723);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(69.7585,32.4419,0.3723,0.3723);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.3004,32.2669,0.3723,0.3723);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(69.7129,32.2679,0.3723,0.3723);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.3927,31.8121,0.3723,0.3723);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(69.5941,31.9188,0.3723,0.3723);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.4461,32.055,0.3723,0.3723);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(70.4746,28.7995,0.3713,0.3713);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.4286,32.7118,0.3723,0.3723);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSCDIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(86.9122,42.5219,0.3723,0.3723);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(86.8936,42.5405,0.3723,0.3723);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.2987,44.5602,0.3723,0.3723);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.2979,44.5686,0.3723,0.3723);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(106.7371,38.8454,0.3723,0.3723);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(106.7278,38.8454,0.3723,0.3723);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(106.8674,44.8487,0.3723,0.3723);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(106.8674,44.8673,0.3723,0.3723);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(64.5928,38.8454,0.3723,0.3723);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(64.5835,38.8454,0.3723,0.3723);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(64.7231,44.8487,0.3723,0.3723);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(64.7231,44.8673,0.3723,0.3723);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(50.7712,45.5418,0.3723,0.3723);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.4653,40.2757,0.3723,0.3723);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.34,37.5424,0.3723,0.3723);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(80.4993,37.4027,0.3723,0.3723);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.2704,34.4616,0.3723,0.3723);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.3635,38.6965,0.3723,0.3723);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.3821,37.9053,0.3723,0.3723);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.41,37.1794,0.3723,0.3723);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.4453,35.6715,0.3723,0.3723);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(73.8631,43.7411,0.3723,0.3723);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(67.5247,43.3781,0.3723,0.3723);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(74.5802,44.3568,0.3723,0.3723);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(66.8727,43.8432,0.3723,0.3723);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(68.0086,35.2527,0.3723,0.3723);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.027,32.6044,0.3723,0.3723);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(67.0084,32.6132,0.3723,0.3723);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.4387,37.0118,0.3723,0.3723);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.4365,36.9839,0.3723,0.3723);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(72.58,35.7305,0.3723,0.3723);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.2721,37.6098,0.3723,0.3723);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.2721,37.6285,0.3723,0.3723);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.4286,35.7404,0.3723,0.3723);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(70.5499,41.7068,0.3723,0.3723);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.1918,45.2862,0.3723,0.3723);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(71.2451,42.0831,0.3713,0.3713);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(53.9544,51.5315,0.3723,0.3723);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.1983,53.6164,0.3723,0.3723);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.1551,37.1049,0.3723,0.3723);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(49.8033,33.9217,0.3723,0.3723);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(46.8342,55.2917,0.3723,0.3723);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(46.7132,32.4977,0.3723,0.3723);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(52.8561,54.361,0.3723,0.3723);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(53.5914,33.5122,0.3723,0.3723);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.0293,44.3927,0.3723,0.3723);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.0968,44.9418,0.3723,0.3723);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.116,44.9316,0.3723,0.3723);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.2987,45.9662,0.3723,0.3723);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.3249,45.9098,0.3723,0.3723);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.1561,40.9709,0.3723,0.3723);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.1561,40.6439,0.3723,0.3723);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.4828,43.8047,0.3723,0.3723);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.4413,43.8047,0.3723,0.3723);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.4049,52.062,0.3723,0.3723);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.2817,47.1849,0.3723,0.3723);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(39.9001,41.498,0.3723,0.3723);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.0698,36.1369,0.3723,0.3723);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.3375,37.7844,0.3723,0.3723);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(40.6168,50.759,0.3723,0.3723);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.4348,40.8,0.3723,0.3723);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.3715,33.7025,0.3723,0.3723);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.1147,36.8441,0.3723,0.3723);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(117.8861,36.0934,0.3723,0.3723);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(116.8656,35.7264,0.3723,0.3723);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.1366,31.6321,0.3723,0.3723);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(115.4523,31.0904,0.3723,0.3723);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(116.7295,31.075,0.3723,0.3723);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(116.8264,32.2185,0.3723,0.3723);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(116.6961,32.2092,0.3723,0.3723);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(116.6396,31.769,0.3723,0.3723);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(114.7685,32.0501,0.3723,0.3723);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.4249,33.1763,0.3723,0.3723);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(113.553,32.5569,0.3723,0.3723);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.2547,31.3469,0.3723,0.3723);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(118.9745,34.3513,0.3723,0.3723);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.1864,38.2511,0.3723,0.3723);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(114.9952,37.2276,0.3723,0.3723);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(114.7408,35.5642,0.3723,0.3723);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(117.4966,36.3231,0.3723,0.3723);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(117.9712,32.3302,0.3723,0.3723);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(117.7572,32.2743,0.3723,0.3723);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(117.5803,32.2929,0.3723,0.3723);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(116.9567,32.2929,0.3723,0.3723);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(116.5286,32.2929,0.3723,0.3723);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(117.8239,33.3912,0.3723,0.3723);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(116.7892,33.4657,0.3723,0.3723);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(116.6291,33.3817,0.3723,0.3723);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(116.6291,33.3817,0.3723,0.3723);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(116.7147,33.0663,0.3723,0.3723);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(116.7147,33.0663,0.3723,0.3723);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(117.6827,33.302,0.3723,0.3723);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(117.6827,33.302,0.3723,0.3723);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(114.441,34.294,0.3723,0.3723);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.3902,40.4932,0.3723,0.3723);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.3372,39.4783,0.3723,0.3723);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(115.8398,47.6108,0.3723,0.3723);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(115.8486,46.0959,0.3723,0.3723);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(115.775,44.6515,0.3723,0.3723);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(115.466,43.1548,0.3723,0.3723);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.4303,41.6289,0.3723,0.3723);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(116.1906,34.9512,0.3713,0.3713);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.2731,38.8547,0.3723,0.3723);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.2483,38.5103,0.3723,0.3723);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.1943,43.988,0.3723,0.3723);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.2167,30.2267,0.3723,0.3723);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.2167,30.2267,0.3723,0.3723);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.1143,31.9486,0.3723,0.3723);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.1658,38.38,0.3723,0.3723);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.1637,44.9057,0.3723,0.3723);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(96.9284,42.4691,0.3723,0.3723);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.1039,39.9044,0.3723,0.3723);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(97.631,41.3356,0.3723,0.3723);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(98.5787,39.5452,0.3723,0.3723);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.0389,41.779,0.3723,0.3723);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(94.9457,48.3745,0.3723,0.3723);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(98.9188,34.2206,0.3723,0.3723);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(96.7409,41.405,0.3723,0.3723);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(96.7502,41.3957,0.3723,0.3723);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.0655,48.364,0.3723,0.3723);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.1036,48.4363,0.3723,0.3723);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(98.9561,34.2986,0.3723,0.3723);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(98.8828,34.187,0.3723,0.3723);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.3044,42.1746,0.3723,0.3723);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.2993,42.2426,0.3723,0.3723);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.1076,42.708,0.3723,0.3723);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.0983,42.7173,0.3723,0.3723);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(79.4941,44.7463,0.3723,0.3723);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(79.5027,44.7547,0.3723,0.3723);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(106.9326,39.0316,0.3723,0.3723);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(106.9233,39.0316,0.3723,0.3723);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.0629,45.0349,0.3723,0.3723);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.0629,45.0442,0.3723,0.3723);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_250.setTransform(64.8493,35.1025,0.3713,0.3713);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(64.7883,39.0316,0.3723,0.3723);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(64.9186,45.0349,0.3723,0.3723);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(64.9186,45.0442,0.3723,0.3723);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(50.9667,45.728,0.3723,0.3723);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(50.6608,40.4571,0.3723,0.3723);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(78.5354,37.7285,0.3723,0.3723);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(80.6948,37.5889,0.3723,0.3723);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.3966,45.4723,0.3723,0.3723);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(71.44,42.2687,0.3713,0.3713);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.0847,51.6711,0.3723,0.3723);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.282,53.7932,0.3723,0.3723);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.1737,37.2911,0.3723,0.3723);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(49.9243,34.0986,0.3723,0.3723);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(46.8435,55.4686,0.3723,0.3723);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(46.8807,32.6745,0.3723,0.3723);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(53.005,54.5657,0.3723,0.3723);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(53.5914,33.6984,0.3723,0.3723);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.2022,53.877,0.3723,0.3723);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.2115,53.8584,0.3723,0.3723);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(77.7708,49.4999,0.3713,0.3713);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(77.7536,53.4675,0.3723,0.3723);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(103.9821,60.9392,0.3723,0.3723);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.1896,59.5732,0.3723,0.3723);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.2789,45.6321,0.3723,0.3723);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.4431,45.802,0.3723,0.3723);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.4569,45.6119,0.3723,0.3723);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgTARQgIgIAAgJQAAgIAIgHQAJgIAKAAQAMAAAJAIQAHAHAAAIQAAAJgIAIQgIAGgMAAQgKAAgJgGg");
	this.shape_277.setTransform(572.75,65.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("Ag6BKQgdgWAAgnQAAgqAYgeQAZghApAAQAeAAAUAJQAaANAAAbQAAASgWAPQgJAHgdALIg4AaQAIAJAMAEQALAFAOAAQAXAAAQgKQAOgIAJAAQASAAAAARQAAAUgdAMQgYAKgbAAQgoAAgagTgAgXgoQgLAKgHAVIAngQQAVgLAPgIQgMgHgTAAQgPAAgLALg");
	this.shape_278.setTransform(555.25,57.125);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgQCHQgGgHgBgKIAAjsQAAgJAHgHQAHgGAKAAQAKAAAGAHQAHAGgBAJIAADjQAAAggXAAQgJAAgHgGg");
	this.shape_279.setTransform(540.75,52.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AhNBcQgHgGAAgJQAAgLAKgJQArgkAthFIgTABQgaAAgbgEQgVgDAAgTQAAgJAHgHQAGgHAKAAIAaACIAZACIAigBIAjgCQAVAAAAARQAAAQgOAQQgPARgUAbIgkAvIARAAQAHAAANACQANADAHAAQAKAAAHAGQAHAGAAAKQAAAKgHAGQgHAHgKAAQgHAAgNgDQgNgCgHAAQglAAghAGIgIABQgJAAgHgFg");
	this.shape_280.setTransform(526.625,57.275);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AhNBcQgHgGAAgJQAAgLAKgJQArgkAthFIgTABQgaAAgbgEQgVgDAAgTQAAgJAHgHQAGgHAKAAIAaACIAZACIAigBIAjgCQAVAAAAARQAAAQgOAQQgPARgUAbIgkAvIARAAQAHAAANACQANADAHAAQAKAAAHAGQAHAGAAAKQAAAKgHAGQgHAHgKAAQgHAAgNgDQgNgCgHAAQglAAghAGIgIABQgJAAgHgFg");
	this.shape_281.setTransform(507.775,57.275);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAiBVQgWAIgWAAQgYAAgRgLQgSgLgEgXQgHgqAAghQAAgWAFgcQAEgTAUAAQAJAAAHAGQAHAGAAAJIgCAYQgDAQAAAIQAAAYACARQACASADAMIAIACIAIACQASAAAXgGIAAgeIgBgcQAAgjADgZQADgUAVAAQAKAAAHAGQAHAGAAAKIgEA8IAAAAIAAAAIABAhIAAAjIAAALIABAKQAAAKgHAGQgHAGgKAAQgOAAgHgMg");
	this.shape_282.setTransform(489.1766,57.275);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AhNCCQgGgHAAgJIAAgvQAAgbADgzQADg1ABgaQAAgsAZACIAPgCIAZgBQAhAAAdAVQAhAZAAAjQAAArgiAZQgfAXgqAAIgPgBIAABOQAAAJgHAHQgGAGgJAAQgKAAgHgGgAgfhDQAAATgEApIAMABQAZAAATgNQASgNAAgWQAAgPgRgLQgRgLgTAAIgKAAIgHAAIAAAYg");
	this.shape_283.setTransform(471.05,52.425);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AAGA3QgFgQgFgrIgFAKIgaBCQgCAHgFAEQgHALgPABQgHABgKgPQgIgPgGgXQgGgWgLhGQgCgPAAgJQgBgKAIgFQAHgHAJAAQATAAAFASIADAYIADAXIAGArQANghAQg0QAHgWATAAQATAAAGAYIAJAuIAIAvIAbhnQAEgPASAAQAJABAIAGQAHAGAAAKIgBAEQgSBDgSA2QgEAPgNAQQgHAMgOAAQgWAAgMgpg");
	this.shape_284.setTransform(434.6,57.45);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AApBPIgbALQgMAEgIAAQgpAAgVgWQgUgWAAgsQAAgpAegcQAfgeApAAQAQAAAWAJQAZALAAAPQAAAGgDAFQgCAGgBALIgBAXQAAAgAFAOIAHARQAHAPAAACQAAAJgHAGQgHAGgJAAQgIAAgRgPgAgXgiQgSASAAAYQAAAWAIAMQAJALAQAAQAKAAAJgDQAKgEAIgHQgFgoAAgTIABgNIACgQIgGgCIgFgBQgWAAgRASg");
	this.shape_285.setTransform(412.875,57.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgwBZQgZgKAAgSQAAgRAUAAQAIAAAPAFQAPAFAIAAQAhAAAAgOQAAgJgYgKQgigQgKgGQgYgRAAgYQAAgiAlgNQAVgGAqAAQASgBAIAFQALAGAAAQQAAAfgRAAQgQAAgEgPIgOgBQgoAAAAAMQAAAHAYALQAiAPAMAJQAYARAAAXQAAAdgbAPQgWAMgfAAQgXAAgTgHg");
	this.shape_286.setTransform(394.275,57.05);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AhXBtQAAgJAGgGQAGgGAKAAQAHAAAPADQAOADALAAQAZAAAMgPQALgQACghQgIAJgLAFQgLAEgMAAQgiAAgVgWQgWgWAAgiQAAguAdgdQAdgeAxAAQAQAAAMAEQALAEAHAIQAWADAAAXQAAALgDAUQgIApgBArQgCA3gQAZQgXAig4AAQhCAAAAgbgAgahNQgOARAAAcQAAAUAIALQAHAJAQAAQANAAAOgPQANgQACgPIAIgzIgMgFIgLgCQgcAAgQATg");
	this.shape_287.setTransform(376.475,61.725);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgVB8QgHgGABgKIgBggIgBgeIACgnIACglQgBgKAIgGQAGgHAKABQAJgBAHAHQAHAGAAAKQAAAPgCAWIgBAnIAAAeIABAgQgBAKgGAGQgHAHgJAAQgKAAgHgHgAgPhWQgIgIAAgKQAAgLAIgHQAIgHAKgBQALABAIAHQAHAHABALQgBAKgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_288.setTransform(362.9,53.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AhJB2QgkgZAAghQAAgaAZAAQAYAAAAAaQAAAKARAMQARALAQAAQAGAAACgWIADg2QADgmAAg6IgBgLIgDAAIgUAAIgUAAQgKAAgHgHQgIgGAAgLQAAgXAfAAIARAAIARABIAggBIAggCQAuAAAAAaQAAAJgHAHQgHAHgKAAIgKAAIgLgBIgNAAIAAAMQAAB6gRA4QgNApggAAQggAAgfgWg");
	this.shape_289.setTransform(346.125,53.725);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("Ag6BKQgcgWAAgnQAAgqAWgeQAaghAqAAQAdAAAUAJQAaANgBAbQAAASgUAPQgKAHgdALIg5AaQAJAJALAEQAMAFAOAAQAXAAAQgKQAOgIAIAAQASAAAAARQABAUgdAMQgYAKgbAAQgoAAgagTgAgWgoQgMAKgHAVIAmgQQAXgLANgIQgLgHgSAAQgPAAgLALg");
	this.shape_290.setTransform(309.05,57.125);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AAoB9QgEgOgEgZQgCgYAAgPIAAgNIAAgNIAAgPQgBgIgIAAQgTAAgPAQQgIAJgNAYQAAA+gGANQgGAOgPAAQgKAAgHgGQgHgHAAgJQAAgEABgFQABgEABgrQgBgiABhPIABgGIABgbIgCgPIgBgQQAAgKAHgGQAHgGAKAAQARAAAFASQAEAKAAAWIgBAiIgCAhQANgMAOgGQANgGARAAQAdAAANAQQAKANACAYIABAqIAEAiIAGAhIAAAGQABAKgIAGQgHAGgKAAQgRAAgFgRg");
	this.shape_291.setTransform(289.8,52.475);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgOB3QgIgGAAgKIABgSIAAgSIgDhYIgggDQgVgCAAgUQgBgJAHgHQAGgHAKAAIAdACIgBgSIAAgRQAAgJAHgHQAHgGAKAAQAYAAAAArIAAAOIARgCQAUAAAHADQANAEABAQQgBAKgGAHQgHAGgKAAIgJAAIgIAAIgQABIADBZIAAAJIAAAJQAAAogZAAQgIAAgGgGg");
	this.shape_292.setTransform(271.15,54.275);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAjBPIgFgkQgCgSAAgRIAAgOIABgPIAAgGIAAgIQAAgPgGAAQgPAAgNATQgOATgIAcIgBAPIgCAQIgBAOIgBAPQAAAKgGAHQgHAGgKAAQgLAAgGgGQgHgHAAgKIgBgOIgBgPQAAgRACgdQADgdAAgRIgBgPIgBgQQAAgKAHgGQAHgGAKAAQAXAAABAaIAAACQAZgZAbAAQAgAAANAbQAIASAAAkIAAANIAAAKQAAANAEAVQADAVAAANQAAAKgHAGQgHAGgKAAQgVAAgCgUg");
	this.shape_293.setTransform(238.725,56.925);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgVB8QgGgGgBgKIAAggIgBgeIACgnIABglQABgKAGgGQAHgHAKABQAKgBAGAHQAHAGAAAKQAAAPgCAWIgCAnIABAeIAAAgQABAKgHAGQgGAHgKAAQgKAAgHgHgAgPhWQgIgIAAgKQAAgLAIgHQAIgHAKgBQALABAIAHQAIAHAAALQAAAKgIAIQgIAHgLAAQgKAAgIgHg");
	this.shape_294.setTransform(224.9,53.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("Ag4BIQgZgYgBgoQgBglAWgdQAagiAtAAQAiAAAUAbQATAYAAAlQAAAngWAbQgXAfgnABQgggBgXgVgAgYgcQgLAQAAAUQAAAVAMALQAJAJANAAQANAAALgLQANgLABgUQACg2gfAAIgBgBQgUAAgLAUg");
	this.shape_295.setTransform(210.1702,57.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AhJB2QgkgZAAghQAAgaAZAAQAYAAAAAaQAAAKARAMQARALAQAAQAGAAACgWIADg2QADgmAAg6IgBgLIgDAAIgUAAIgUAAQgKAAgHgHQgIgGAAgLQAAgXAfAAIARAAIARABIAggBIAggCQAuAAAAAaQAAAJgHAHQgHAHgKAAIgKAAIgLgBIgNAAIAAAMQAAB6gRA4QgNApggAAQggAAgfgWg");
	this.shape_296.setTransform(189.725,53.725);

	this.instance_2 = new lib.BRIGHTEDGELOGO();
	this.instance_2.setTransform(727,28,0.0876,0.0876);

	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(90,3,0.9696,1);

	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(97,52.05,1.2603,0.9357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slots},{t:this.pieces},{t:this.instance_2},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30.3,14.1,1095.3,641.1), null);


// stage content:
(lib.puzzani5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Game
	this.instance = new lib.Symbol12();
	this.instance.setTransform(-196.1,-86.05,1,1,0,0,0,32,38);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape.setTransform(1108.55,1158.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgXgIgMQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_1.setTransform(1098.775,1152.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_2.setTransform(1085.225,1152.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIATAAIAAB9IBGAAIAAARg");
	this.shape_3.setTransform(1075.425,1152.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_4.setTransform(1061.2,1158.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_5.setTransform(1054.525,1152.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBHIg3iOIAUAAIAlBoIAHAXIAIgXIAmhoIATAAIg3COg");
	this.shape_6.setTransform(1041.7,1152.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2BHIAAiOIA2AAIAVABQALACAHAFQAHAFAEAJQAEAJABALQAAASgMALQgMANgeABIgjAAIAAA5gAgigCIAkAAQARgBAIgHQAIgHAAgLQAAgKgEgGQgFgHgHgCQgFgBgNAAIgjAAg");
	this.shape_7.setTransform(1028.7,1152.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBFQgNgHgIgKQgHgMgBgPIASgBQABAKAFAIQAFAGAJAFQAKAEALAAQALAAAJgEQAIgDAEgFQADgGAAgGQABgHgEgFQgEgFgJgDQgGgDgSgEQgUgGgIgCQgLgGgEgIQgFgIgBgKQABgLAFgJQAHgKAMgEQALgFAPAAQAPAAAMAFQAMAFAGAKQAHAKABANIgSABQgCgOgIgHQgJgGgQAAQgQAAgJAGQgHAGgBAJQABAIAGAFQAFAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgMAFgQAAQgSAAgNgFg");
	this.shape_8.setTransform(1009.4,1152.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBHIAAh2IgqB2IgQAAIgph5IAAB5IgSAAIAAiOIAcAAIAiBkIAGAWIAHgXIAjhjIAZAAIAACOg");
	this.shape_9.setTransform(994.475,1152.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_10.setTransform(979.725,1152.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_11.setTransform(966.725,1152.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBFQgOgHgHgKQgIgMAAgPIASgBQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAIgEQAIgDAFgFQADgGAAgGQAAgHgDgFQgEgFgJgDQgGgDgTgEQgUgGgHgCQgLgGgEgIQgGgIAAgKQAAgLAHgJQAGgKAMgEQAMgFAOAAQAPAAAMAFQAMAFAHAKQAGAKABANIgSABQgCgOgIgHQgJgGgQAAQgQAAgJAGQgIAGAAAJQAAAIAHAFQAFAFAWAFQAXAFAIAEQANAFAGAJQAGAIAAAMQAAALgHALQgGAJgNAHQgMAFgPAAQgTAAgMgFg");
	this.shape_12.setTransform(953.85,1152.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJBHIAAg8Ig4hSIAXAAIAdArIANAZIAQgZIAcgrIAWAAIg6BSIAAA8g");
	this.shape_13.setTransform(940.525,1152.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBFQgMgHgIgKQgHgMgBgPIASgBQABAKAFAIQAEAGAKAFQAKAEALAAQALAAAJgEQAHgDAEgFQAEgGAAgGQAAgHgDgFQgEgFgJgDQgGgDgSgEQgVgGgHgCQgLgGgFgIQgEgIgBgKQABgLAFgJQAHgKALgEQAMgFAPAAQAPAAAMAFQAMAFAGAKQAHAKAAANIgSABQgBgOgIgHQgJgGgQAAQgQAAgJAGQgHAGgBAJQABAIAFAFQAGAFAWAFQAXAFAJAEQAMAFAGAJQAGAIAAAMQAAALgGALQgHAJgMAHQgNAFgPAAQgSAAgOgFg");
	this.shape_14.setTransform(927.15,1152.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBCQgMgHgGgNQgGgNAAgXIAAhSIATAAIAABSQAAASAEAJQAEAJAIAFQAJAFALAAQAUAAAKgKQAIgJABgbIAAhSIATAAIAABSQAAAVgGANQgEANgNAIQgNAIgUAAQgUAAgNgHg");
	this.shape_15.setTransform(907.75,1152.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgXgIgMQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_16.setTransform(893.575,1152.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_17.setTransform(879.675,1152.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_18.setTransform(860.775,1152.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgTAJgSQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAATAHANQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgRIA8AAIAAA1QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_19.setTransform(845.975,1152.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag6BHIAAiOIAxAAQAQAAAIACQANADAIAHQAMAKAFAPQAGAPAAATQAAAQgEAMQgEAMgGAJQgFAIgIAFQgHAFgKACQgKACgMAAgAgnA2IAeAAQANABAIgDQAIgDAFgFQAHgGAEgMQAEgLAAgPQAAgXgIgMQgHgMgLgEQgHgDgQAAIgeAAg");
	this.shape_20.setTransform(831.325,1152.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag0BHIAAiOIBmAAIAAARIhTAAIAAAsIBOAAIAAAQIhOAAIAAAwIBWAAIAAARg");
	this.shape_21.setTransform(817.425,1152.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgIBHIAAh9IgwAAIAAgRIBxAAIAAARIgvAAIAAB9g");
	this.shape_22.setTransform(799.275,1152.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAlBHIAAhDIhJAAIAABDIgTAAIAAiOIATAAIAAA7IBJAAIAAg7IATAAIAACOg");
	this.shape_23.setTransform(785.925,1152.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgeBBQgSgJgIgRQgJgRAAgWQAAgTAJgSQAIgTARgIQAQgJAVAAQAPAAANAFQAMAFAHAJQAHAJAEAPIgRAEQgDgLgFgGQgFgHgJgDQgIgEgLAAQgMAAgKAEQgJAEgGAGQgGAHgDAIQgGANAAAPQAAATAHANQAHAMAMAHQANAGANAAQAMAAAMgFQAMgEAGgGIAAgaIgqAAIAAgRIA8AAIAAA1QgOAKgOAHQgPAFgQAAQgUAAgRgJg");
	this.shape_24.setTransform(770.825,1152.15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgJBHIAAiOIASAAIAACOg");
	this.shape_25.setTransform(760.4,1152.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAnBHIgTgdIgNgUQgGgHgDgCQgEgEgFgBIgKAAIgWAAIAAA/IgTAAIAAiOIA+AAQAUABAKADQAKAEAFAKQAGAJAAANQAAAOgJALQgKAKgVADQAIADAEAEQAIAHAHAMIAZAmgAgrgIIApAAQAMABAHgDQAHgDAEgGQAEgGAAgGQAAgLgHgGQgIgHgQAAIgsAAg");
	this.shape_26.setTransform(751.025,1152.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag1BHIAAiOIA1AAQAQAAAKAFQAKAEAGAJQAFAJAAAKQAAAJgFAIQgFAIgKAGQANADAHAIQAHAKAAAMQAAAKgEAJQgEAIgHAFQgGAFgJACQgKACgOAAgAgiA2IAiAAIANAAQAHgBAEgDQAFgCADgGQACgFAAgHQAAgIgEgGQgEgGgHgCQgHgDgNABIghAAgAgigKIAfAAQALgBAGgBQAHgDAEgEQADgGAAgHQAAgHgDgGQgDgFgHgCQgGgCgPAAIgcAAg");
	this.shape_27.setTransform(736.675,1152.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjBAQgSgKgKgSQgJgRAAgTQgBgSAKgSQAKgSASgJQARgKASAAQATAAARAKQASAJAKASQAJASAAASQAAATgJARQgKASgSAKQgRAKgTAAQgSAAgRgKgAgdg1QgPAIgIAPQgJAPAAAPQAAAQAIAOQAJAPAPAIQAOAIAPAAQAQAAAOgIQAPgIAJgPQAIgOAAgQQAAgPgJgPQgIgPgPgIQgOgIgQAAQgPAAgOAIgAgbAfQgKgLAAgUQAAgMAEgJQAFgKAKgFQAJgFAKAAQANAAAJAHQAIAGADALIgLACQgDgHgGgEQgGgEgIAAQgKAAgHAIQgIAIAAAOQAAAPAHAIQAHAIALAAQAIAAAHgFQAGgGADgIIAMADQgEANgIAHQgKAHgOAAQgQAAgLgLg");
	this.shape_28.setTransform(716.9,1152.125);

	this.game = new lib.Game();
	this.game.name = "game";
	this.game.setTransform(426.3,243.8,1,1,0,0,0,426.3,243.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3C408C").s().p("EhJCAyoMAAAhlPMCSFAAAMAAABlPgEhCLAt3MCEWAAAMAAAhbtMiEWAAAg");
	this.shape_29.setTransform(450.05,314.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#679699").s().p("AgfDlIAAhAIA/AAIAABAgAgRB0IgRjyIAAhmIBFAAIAABmIgQDyg");
	this.shape_30.setTransform(518.525,310.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#679699").s().p("AB2DlIjvlnIAAFnIg6AAIAAnJIA+AAIDvFmIAAlmIA6AAIAAHJg");
	this.shape_31.setTransform(487.025,310.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#679699").s().p("AgeDlIAAnJIA8AAIAAHJg");
	this.shape_32.setTransform(456.05,310.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#679699").s().p("ABuDlIhglcIgOg2IgNA2IhhFcIg+AAIh6nJIA+AAIBGErQAMAwAHAuIAVhUIBXk1IBIAAIBCDnQAZBWALBMQAJgsANg4IBJklIA9AAIh+HJg");
	this.shape_33.setTransform(417.65,310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.game},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(314,191.5,811.5999999999999,1002.9000000000001);
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