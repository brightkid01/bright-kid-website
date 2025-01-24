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
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("EAdAgk6Mg5/AAAIAAVoQAAB0BLAxQBMAyBqgvICDgzQCRgzBJAAQCoAAB3B3QB3B3AACpQAACoh3B3Qh3B3ioAAQhJAAiRgzIiDgzQhqguhMAxQhLAxAAB0IAAVnIVnAAQB0AAAyBMQAxBMguBqIgzCDQgzCRAABJQAACoB3B3QB3B3CnAAQCoAAB3h3QB3h3AAioQAAhJgziRIgziDQguhqAxhMQAyhMB0AAIVnAAg");
	this.shape.setTransform(496.025,237.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgEeAjEQh3h3AAioQAAhJAziRIAziDQAuhqgxhMQgyhMh0AAI1nAAIAA1nQAAh0BLgxQBMgxBqAuICDAzQCRAzBJAAQCoAAB3h3QB3h3AAioQAAiph3h3Qh3h3ioAAQhJAAiRAzIiDAzQhqAvhMgyQhLgxAAh0IAA1oMA5/AAAMAAAA6AI1nAAQh0AAgyBMQgxBMAuBqIAzCDQAzCRAABJQAACoh3B3Qh3B3ioAAQinAAh3h3g");
	mask.setTransform(496.025,237.275);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgHFLQg0gegugyQg6hBghhVQgvh3APiPQAMh0BCgxQAqghA5AAQAtABAtATQAuAVAjAiIABACQCOCtgnDqQgTB2gyBWQgVAegtABQgtgBgzgcgAiekjQgpAvgJBWQgOCIAtB0QAfBRA4A+QAqAuAwAdQAxAcAoAAQAigBAPgVQAwhSAThxQAljiiIinQghgfgqgTQgqgSgoAAQhCAAgpAvg");
	this.shape_1.setTransform(298.8652,253.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(297.625,253.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("Ag7BgQgZgoAAg4QAAg3AZgoQAZgoAiAAQAjAAAZAoQAZAoAAA3QAAA4gZAoQgZAogjAAQgiAAgZgog");
	this.shape_3.setTransform(296.025,261.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E73B5").s().p("AhaCLQglg5AAhSQAAhQAlg6QAmg6A0AAQA1AAAmA6QAlA6AABQQAABSglA5QgmA6g1AAQg0AAgmg6gAhLh8QggA0AABIQAABJAgA0QAgAzArABQAtgBAfgzQAgg0AAhJQAAhIggg0Qgfg0gtAAQgrAAggA0g");
	this.shape_4.setTransform(296.025,259.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53A2D9").s().p("Ahlh8QAkg6AyAAQAwAAAiA2QAiA3AABNQABA/gZAyQgYAygmAQQhfhsgVjHg");
	this.shape_5.setTransform(297.65,259.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#538BC8").s().p("AhSCEQgjg3AAhNQAAhMAjg3QAig3AwAAQAxAAAiA3QAjA3AABMQAABOgjA2QgiA3gxAAQgwAAgig3g");
	this.shape_6.setTransform(296.025,259.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiPBAQgqicAXjvQA1gVBAATQA8ASAuAtQCNCsgnDmQgUB0gwBRQgEAHgJAHQiphGg4jRg");
	this.shape_7.setTransform(304.0753,252.7668);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AA2FZQhCgRhBhAQhKhHgmhkQgsh1AOiHQARilB4gWQAxgJA2AUQA0AUAoAnQCNCrgoDnQgTBzgwBSQgTAbgmAAQgQAAgUgFg");
	this.shape_8.setTransform(298.9132,253.4328);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AhVgBQgJgSgDgSIgBgQIANAhQAWAhAsAMQAgAJAagOQAjgTAUg4QAJAtgIAOQgcA1g8gBQhCgGgagzg");
	this.shape_9.setTransform(267.2632,238.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AguBDQgxghgIg+IABg4IAJAsQASAwArAdQAWAOAggGQAkgHAggeIAOAPQgYAqgqAOQgRAGgPAAQgbAAgZgSg");
	this.shape_10.setTransform(270.2,225.3044);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("AhGAFQgOgcgGgkIgDgeQABALAHAQQAJAeASAYQA0BKBkgCQgEAZgCAAIgTABQhhAAgqhVg");
	this.shape_11.setTransform(272.85,215.9645);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2D2D").s().p("Ag8gQQgFggAEgkIAEgeQgBANABAPQACAfAIAcQAbBYBUAjIgIATQhigcgShng");
	this.shape_12.setTransform(281.1779,209.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D2D").s().p("AiSgoQAXhGBAgcQA/gcBLA3QBLA3AIBNQhAgqhIgGQiPgLgpC7QgKh7AWhCg");
	this.shape_13.setTransform(292.8568,222.5415);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AAAhNQAygKArAVQAvAWAZAyQg6gnhwAbQhvAZgxA+QAziIBygWg");
	this.shape_14.setTransform(295.85,175.0637);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AhxALIgggXQAmAWBTACQBkABA4gtIAOAQQg1ArhYAFIgEABIgFAAQhBAAgsgWg");
	this.shape_15.setTransform(463.725,490.2521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("AhlASIgggUQA3AVBUgKQBVgJAbggIAQAOQgPASgiAMQggANgpAFIgCABQgRACgQAAQgtAAghgPg");
	this.shape_16.setTransform(461.1,448.0675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("Ah/AQQAugiBMgMIADgBQAsgGAoABQApABAaAJIgHAVQg6gUhrATQhcAQghAbg");
	this.shape_17.setTransform(447.275,412.1929);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("AioAVQAxgiBDgWIAHgBQBEgRA+ADQBEADA0AaIgKATQhRgph2AUQhpAShfA4g");
	this.shape_18.setTransform(428.35,375.5586);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("Aj8ATQA/grBTgSIAFgBQB3gZB0AQQBtAPA5ArIgNARQhRg9irACQi+ADiQBcg");
	this.shape_19.setTransform(417.925,333.0259);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAbhMQitgejGAjIBHgVQBcgVBqAEIAMABQCOAKBkAuQB4A1AuBkIgUAKQhEiTjmgog");
	this.shape_20.setTransform(423.45,294.7424);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("AAUgpQjAgWh/AqIAygYQBJgYBrAAIAHABQB+ADBfAeQBsAjAhA7IgTALQgwhYjVgXg");
	this.shape_21.setTransform(435.2,260.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("ADwWFQgmhNgCiDIgBgVQgOgrABgxQABhGApgXQAngWBEgNQBLgOAkAPIAEACQgLiYhEiMQhfjEjEiSQhXhChxhFQhAgniIhOQjIhxhVg8QiMhkhEhnIgHgKQgmhDgKhNIgDhAQAWC4ClCTQBlBZESCbQCEBMBFAqQBwBGBZBCQDUCdBgDYQBDCUAFCfIgVADQgDgJgLgEQgegNhFANQg/AMgmAUQgeARAAA9QAAAtAMAmIABACIAAAYQADCAAjBHQBBCDCwAAQCIgBBThVQCQiWgPmQQgEh7hAjJQgnh6hdjwQg5iWgWg/QgkhlgIg2QgUiIAmigQAahxBPjIQAlheARihQALhiAIi4IAAgFQABhJAUhgIAThQQgLBGgHC0QgJDAgKBfQgSClgmBhQhODFgaBvQglCdAUCEQAIA1AjBlQAWA/A5CTQBfD3AlB1QBBDMAEB+QAPGZiXCcQhZBciRAAQi9AAhHiPg");
	this.shape_22.setTransform(391.9637,379.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50616C").s().p("AAAAZQAOhLgDhcIAVgBQABCAghBcQgPAugQAUQAXhDAIgzg");
	this.shape_23.setTransform(436.0254,493.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8C5CB").s().p("ACMP7QgRi5hMjYQgJgaiDlJQhRjKgViBQgdi0A4jKQAThDAjhZIAyiDQAahIA7k7QA4koAeg/QgKAvgIBvIgODXQgWEngxB+QhMDGgbBsQgmCiAUCIQAKA/A0COQAeBUBMDEQCUGJAGCxQAJD5g1CbQgHAQgHAKQgUAxgfAkQBBjqgVjog");
	this.shape_24.setTransform(457.398,372.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#90A4AF").s().p("AJyXpQgwgFgZglQgbgnAOg4QAbhtgEigQgFi8gzidQgviViCicQiAiaixh6QhnhIiohXIkKiKQiNhPhPhKQhhhbgkhvIJUwSIQMAAQgKAwgIBvIgPDXQgWEngxB+QhNDFgaBtQgnChAVCIQAJBAA0CNQAfBVBMDEQCUGJAHCxQAJD5g2CbQgHAPgGALQgfBMg1AmQgpAdgqAAIgOgBg");
	this.shape_25.setTransform(391.4148,375.1638);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#75848E").s().p("AD1VuQgVg0gFhGQgChDgCgNQgNgpABgvQAAhDAjgSQAzgcBPgLQBagLAKAkQgFiSg8iNQhfjfjYigQh7hejKh1QjxiMg4glQiVhjhNhfQhchygRiPIJLuOIQViDQgKAvgIBvIgPDXQgWEngxB+QhNDGgaBsQgnCiAVCIQAJA/A0COQAfBUBMDEQCUGJAHCxQAKEYhECfQhXDQjWgBQjHAAg+igg");
	this.shape_26.setTransform(391.4145,378.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D2D2D").s().p("AALAQQhIgLgrAtQAMhIAggbQAcgXAlAOQAiANAdAkQAdAjAIAmQgbgmhDgKg");
	this.shape_27.setTransform(480.575,176.7601);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#50616C").s().p("AoAKyQgahqAuhXQAdg2BhhiQBBhCAigoQA5hCAnhGQASgiAmhPQBzjuBgiFQCqjnDyiHIAOAPQixD3hQE0QguCxgeEwQgQClgNA6QgWBggsAhQhAAxhlgKQg9gFh7gmQhSgaglgGQg6gKgbARQgaARgGAuIgHA6gAl4JWQAmAFBZAbQB3AlA5AGQBgAKA5gsQAogeAUhbQAMg5APifQAdknArisQBLkpCjjyQjbCGicDbQhaB9hrDiQglBMgUAlQgoBIg6BDQgiAphCBCQhWBXgbAsQgrBGAHBQQALgVARgKQAXgOAkAAQARAAATADg");
	this.shape_28.setTransform(52.2703,130.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8C5CB").s().p("AikGUQAXkaAUhuQAmjRBojYQBfjDBIg2IAUgOQiJDKhJDxQg3CygcDhQgPB7gUDDQgUCMgvAqQgIAEgMADQAZgzASjeg");
	this.shape_29.setTransform(80.375,128.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#90A4AF").s().p("Aj2KBQhYhBgIhuQgGhIA1hlQBAhpATgiQAuhUAwiDQA4ibAYgzQBujuEQiwQiJDKhKDyQg3CxgcDiQgPB7gUDCQgTCMgvAqQgpARgmAAQg9AAg3gpg");
	this.shape_30.setTransform(66.7991,128.6248);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#75848E").s().p("AnwIsQAVg3A+hDQBQhRAsgwQBOhVAxhXIBWiuQBAiDA7hdQC7kkEXibQiVDQhRD6Qg7C4gdDqQgPB/gUDIQgWCPgzAnQg/AwhogNQg4gGiDgoQhwgigtADQhEAFgKBNQgVhWAbhHg");
	this.shape_31.setTransform(52.3406,128.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#50616C").s().p("AEnAqQhYihiJhFQh5g9iZARQiZASisBeQgaAVgMAFQgMAGgHgHQgKgIAJgXQAIgTAmhEQAxhaAMgZIABgCIACgCQB6hcC0gRQC0gRDGBAQClA1BzBYIAHAGQBLA+AUA6QAKAdgEAQQgahShshRQhthQiYgxQjAg9iuAPQiuAQh2BYQgVApgnBIQglBDgHARIAYgSIACgBQCxhiCegRQCegSB+BAQDGBjBiEVIABAEQAnBjAFBhQACAwgFAdQgijzhYihg");
	this.shape_32.setTransform(142.9259,94.2455);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8C5CB").s().p("AFqBgQhSg4hoguQkriGk9ALQBwgmCPAIQCGAJCFAuQCDAtBfBFQBkBIAhBPQgMgUhDgtg");
	this.shape_33.setTransform(156.525,69.0723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#90A4AF").s().p("AD0BsQg9i3hthmQhihdjDgaQgvgGhWgFQg+gEgMgFQgigPACgdQACgcAhgRQCDgqCZAQQCKAOCGA5QB9A2BaBMQBZBMAWBIIgGENIilD6QANibg5iug");
	this.shape_34.setTransform(156.0944,94.1812);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#75848E").s().p("ABXi+Qj+iWl1DNQgkAdgHgCQgHgDAPgfQA8hrAohQQB5hcCygPQCfgNCsAyQCiAvB3BVQB6BXAcBcIiuIQQhCnekDiYg");
	this.shape_35.setTransform(143.3744,94.8409);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_36.setTransform(470.725,250.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2D").s().p("AgaBpQgUgFgGgjQgGgiALgqQALgsAWgbQAVgbAUAFQAUAGAGAiQAHAigMArQgLArgWAbQgRAXgRAAIgHgBg");
	this.shape_37.setTransform(467.4865,256.5818);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E73B5").s().p("AgxCxQghgJgHg6QgHg4AWhKQAThEAhgtQAggsAeAAQAGAAAFACQAiAIAGA+QAFA4gUBHQgUBDghAtQgfAsgfAAQgGAAgEgBgAgHh3QgeApgSA/QgTBCAFA0QAEAwAVAGQAVAGAcgnQAggqAThCQAThFgFgxQgCgXgGgOQgHgPgKgCIgFgBQgVAAgaAmg");
	this.shape_38.setTransform(467.8972,254.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53A2D9").s().p("AhBAaQAUhEAhgrQAggsAcAIQAbAIAFA3QAFA2gUBEIgEAMQgyAWhbAZQABguAOgzg");
	this.shape_39.setTransform(467.9093,250.3129);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#538BC8").s().p("AgvCnQgbgIgFg2QgFg3AThEQAVhFAggrQAggsAcAIQAbAIAFA3QAFA2gTBEQgVBFggAsQgbAkgYAAIgJgBg");
	this.shape_40.setTransform(467.9,254.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2D2D2D").s().p("Ai6FGQAhlTBRixQBFiVBUAAQAnAAAdAiQAXAcAKAqQAKArgHAuQgtEHigCIQgyArg4AYIgvARIgOADgAg4ixQhMCqggFAQBYgcBLhNQB/iCAnjjQAGgqgIgmQgJgmgUgYQgXgbgeAAQhKAAg/CNg");
	this.shape_41.setTransform(474.1735,245.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhDh1QA1huA/gTQA4gQAkA5QAkA3gMBSQgTBsgmBUQgvAvhOAhQg2AWhgAYQAjjtBBiCg");
	this.shape_42.setTransform(475.1844,237.9235);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1E1E1").s().p("AhSiMQA3iPBFgjQA9geAqA6QAqA4gNBYQgtEFidCFQgxAqg2AXIgtAQQAckqBCirg");
	this.shape_43.setTransform(474.2642,245.7107);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D2D2D").s().p("AhHgMIARgMQAYAfA0AEQAbACAXgEQgdAMggADIgPABQgzAAgQglg");
	this.shape_44.setTransform(498.025,225.8177);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D2D").s().p("AhiAgIAFgTQA/APBGgiQAkgRAXgWQgOAXgaAWQgzAug4AAQglAAgNgOg");
	this.shape_45.setTransform(499.875,216.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D2D2D").s().p("AhgA5QBDgOBFg8QAjgfAWgcQgTAmgiAmQhBBNhHAAg");
	this.shape_46.setTransform(498.275,209.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D2D2D").s().p("AhWBaQAxgPBChcQAhguAZgtQgTA0gfA1Qg9Bqg4AGg");
	this.shape_47.setTransform(494.95,204.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D2D2D").s().p("Ag2hFQAfgpAigUQAjgVAbAJQAsAQAJBMQAEAmgEAhQhAgvg2AYQg5AahOB6QgCh1BLhig");
	this.shape_48.setTransform(478.2599,218.4271);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#50616C").s().p("AiPaYQkqggkZiBQkZiCjjjSQiZiOhoibIgGgHQhAhkgihoQgchVAKgEQAoCLBnCYQBoCaCSCIQDhDQEWCAQEVCAEnAfQGMAvEeg7QCogiDuhuIBSgmQDEhXBxjUQBwjUADkfIAAgDQAMglACgVQABgOgCgQQgEgdALgkQAQg7A+iJQA5h+gXiUQgNhWhAiqQgphtgOg0QgXhYAFhEQAGhaggiIQggiNg+iMQiXlUjRhvQkriek8AUQhjAHhYAXIhFAXQiHhqk8gIQlDgJj2BpQjTBZiJCuQi1DkgmFlIgVgCQAmlsC5jpQCNiyDYhbQD9hsFCAHQE7AGCPBuQClg9DMAKQEBAND6B/QB7A/BtCWQBLBpA8CGQBACNAiCQQAhCPgHBjQgEBBAWBVQAOAyAoBsQBACoAOBbQAYCbg7CEQg8CFgQA5QgLAjAEAZQACASgBAOQgDAYgMAmQgCEmh0DZQh0DYjLBaIhRAlQi8BYh6AiQjNA6j6AAQiaAAi0gVg");
	this.shape_49.setTransform(335.5281,187.5315);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8C5CB").s().p("AI+YRQASAAAogvQAug2ArhRQB3jeAXkOQgChUAdiOQAeiUAohdQBFiZhmj0IhQixQgohdAAgwQAAiFgDgvQgHiPgbh5QhQlkj6ioQiehpkPgeQkPgdh9BLQiKhKilg4QjZhIisgEQChgKDAAlQDJAoBTBBQCeg8DCADQELADEACCQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CKQAsB/AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgCEFhdDIQhaDDigBpg");
	this.shape_50.setTransform(388.0192,174.1197);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#90A4AF").s().p("AJbZBQhMgIjrgkQj4gmi2gWQjZAZj6hHQjkhBjaiGQjQh/iVidQiWiegviPICO1TICFkKQByk3DWilQC2iODygZQDNgWDUA/QC5A2B3BdICLgzQBhggBYgLQD5geD4B+QDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB+AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQhdAphqAJQgfADgjAAQhKAAhfgLg");
	this.shape_51.setTransform(335.1442,179.8221);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#75848E").s().p("AiKaEQofg6m2loQi6iZiCi1Qh8itguiiIC86mQBnjwDHiQQCuh+DjgnQDKgkDGAnQC7AkBvBXQCshBDngIQFEgMD9CAQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB/AHBbQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQiBA8hGAeQh7A0hwAcQi2AtjkAAQibAAiwgUg");
	this.shape_52.setTransform(335.1442,188.4386);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#50616C").s().p("AFmUxQg8gUgugqQgcgZgpg2QghgsgRgRQgegbghgJQgfgHglgHQhIgPgfgOQgygWgsgyQgagdggg2QgUghglhEQgohKgRgbQgegwgUgQQgOgKgagIQgPgFgogIQhPgSgtgSQhQgfg/g5Qh3hshUh2QiUjOAtiGQAGgSAbgSQARgKAwgXQBPgmAqgcQBIgxAqg/QBAhgBOiRQAwhZBUioQBujaAvhQQBNiEAxgXQBMglCGgIQCPgKCUAdQF2BJCcD9QBYCQBBDhQBADgAaEAQA8I/iPGUIgCACQi/EJiFB2QiGB4huAAQgiAAgigMgAAK0jQh/AJhFAhQgrAVhOCFQguBPhqDTQhUCogwBaQhPCRhABhQgsBChLAzQgrAehSAmQgqAUgPAJQgZAPgEANQgkBqBnClQBUCJCVCHQA9A2BKAeQAsARBOARQApAKARAFQAdAJAQAMQAXASAfAyQATAeAoBJQAkBDAUAhQAgA0AYAdQApAuAuAUQAeANBEAOIBFAPQAmAKAhAeQAUATAiAtQApA2AZAXQArAnA3ATQBxAlCPhwQCPhxDVkmQCNmQg7o5Qgaj8g/jdQhAjghYiOQhJh3iHhSQiGhSiyghQhsgUhpAAQglAAglACg");
	this.shape_53.setTransform(110.0982,197.6828);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6ACB5").s().p("ACnOfQhBgfgvg3Qgug1gPg+QgjiHhNhSQhRhXhugIQhwgIhvgtQhqgrhPhCQhQhDgdhIQgghOAjhCQAfiqBljbQBjjXCGjDQgIBpAHBtQBQiuC9hbQCvhVDWAJQDXAICrBhQC5BnBICtIgCAUQgCChgbDfQgdDtgvDZQh0IdiTBWQhUAyhVAAQhEAAhEggg");
	this.shape_54.setTransform(99.6233,194.4785);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F598A3").s().p("ACkRGQhBgfgvg2Qgug2gPg9QgjiHhNhTQhRhXhugIQhwgIhvgtQhqgqhPhCQhQhDgdhIQgghOAjhDQAfiqBmjdQBkjYCHjEQCOjNCLh5QCYiEB1AAQCzgBBXAKQCcASBmA8QEPCfgyHrQgCCggbDgQgdDtgvDZQh0IciTBXQhUAxhVAAQhEAAhEggg");
	this.shape_55.setTransform(99.9127,177.7411);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#75848E").s().p("AASBYQBRjGhXj2QAlBGBNBrQA1BIA0BAQh+DCiJBlQhDAxiDA4QCyhdBGiwg");
	this.shape_56.setTransform(177.075,294.875);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#75848E").s().p("AgPglQAPAiAQApQgagwgFgbg");
	this.shape_57.setTransform(176.7,255.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#90A4AF").s().p("AFoUnQhWgdhMhkQgngzgRgQQghghgmgJQhmgUgogNQhCgVgzg6QgmgrhQiUQhKiHgggYQgTgPgqgLQg3gLgggIQh+gghXhOQiOiBhWiGQhxiwAmh0QAGgSAngVIBYgrQCKhFA9hdQBIhsBbitICXkpQCrlRBEghQBIgiCBgJQCOgJCSAbQF1BGCbD7QBWCNBADeQBBDeAbD8QA9I+iRGYQjWEpiOBxQhuBXhfAAQghAAgegKg");
	this.shape_58.setTransform(110.1516,197.6954);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#50616C").s().p("ADvLbQhnAAhTgoQhTgngyhIQgwhHgciSQgRhZgVjOQgilOgsiOQhLjziig6IAGgVQDWAfCODCQBTBxBmEFQA4CKAaA1QA9B3BVBrQAxA+BXBcQBJBNASAfQAeAxgYAmQgZAohGAbQhGAbhTACgAjwl0QAkCIAgEuQAUDJARBZQAbCQAuBDQAwBGBRAlQBSAmBmgDQBMgCBCgYQBCgZAVgiQASgcgZgoQgSgdhFhIQhYhegxg+QhWhsg+h5Qgbg2g4iLQhdjthEhnQh0iuing1QB+BYA8Dmg");
	this.shape_59.setTransform(568.6133,128.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8C5CB").s().p("ABcEuQhRh5hTjJQhXjcgrhdQhHichLg7QBrBJBNCIQAqBKBRDJQBODDBBBwQBmCvCRCDQiRhShwilg");
	this.shape_60.setTransform(573.15,121.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#90A4AF").s().p("AEAJ4QhIgSg0g0Qh1hzhIkgQgThLgjipQgfiagVhKQgehthDhTQhMhdhmggIgWgJQEAAlCcEZQAvBWA+CeQBDCoAcA2QBQCdBXBmQAvA4BFBEQAiAggVAgQgUAdg3ANQgbAGgcAAQggAAgigIg");
	this.shape_61.setTransform(564.1009,120.9392);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#75848E").s().p("AhDI9Qg6hUgejSQgckGgRiHQgfjyg4iFQhLiwiLgyQEAAlCbEZQAwBWA9CdQBECoAbA2QBeC3C9DHQBHBLASAdQAcAugVAhQgXAmhFAaQhHAahVABIgDAAQjRAAhkiTg");
	this.shape_62.setTransform(568.275,128.9503);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#50616C").s().p("Aj/EyQiIhPgwiKQgQgrgEgsIgCgjIABgGIAFgDQAzgdBbg7QCxhxBagiQCQg3CQAgIACABQCUBBAwArQAaAWgFATQgGAZg+gFIgCAAQhPgQheAVQheAUhWA2QhhA7hIBbQhIBbgkBuIgFANgAgqj/QhWAhitBvQhtBEgdARQAAA8AaBAQAuByBvBFQBHjKCsh7QCfhzCrAAQAoAAAmAHQAWADANgDQAJgBABgCQABgIgagUQgygmiBg7QgygKgxAAQhZAAhaAjg");
	this.shape_63.setTransform(498.2903,86.7499);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B8C5CB").s().p("Ai6AqQBBgqBDgeQDChcB0AsQhRgIh5AtQgtARkIB1QASgRAzgig");
	this.shape_64.setTransform(493.525,67.7132);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#90A4AF").s().p("AksA+QDCh7BQghQCWg+CQAfQAjAggCATQgBARgeAOQhmAehAAeQiTBYhGAVQggAKgcAAQhNAAgyhKg");
	this.shape_65.setTransform(494.7781,70.1651);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#75848E").s().p("AmvBXQgOgqgFgqIgBghQAsgZCChTQBmhBA/gfQC3hbCoAmQCuBOAgAqQAbAkhPgIQiugji8B0QjMB9hNDoQiGhOgviGg");
	this.shape_66.setTransform(498.3205,86.5175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#50616C").s().p("ArXUCIgCAAIgCgCQiOhagfmNQgSjkAWkuQAVkcA0kcQAzkbBDjHQBGjUBHg+QCzieDBgwQCugsBlA8QAYAOAZBBQAQArAiB5QBqFvBqC0QC8E/EtAzIAFABIADAEQA4Bng+COQg0B4h0B1QhoBng8AQQgdAIglABQgWAAgsgCQg7gDgZADQgrAFgXAXQgSASgSAhQgLAUgVAuQgeBCgTAfQghA2gmAdQgkAagzAVQggAMg8ASQgyAPgSAHQggANgOAOQgIAHgXApQg+Bvg/A4QhxBjilAAQgkAAgrgFgAjDzeQi5AwiuCZQhAA5hEDHQhEDGg0EdQg1ElgVEjQgUEjARDfQAPC7ApB4QApB3BAArQDCAYB9hiQBGg2BFh7QAYgqAKgKQARgRAjgOQAUgIA0gQQA6gRAfgMQAxgUAigZQAjgbAfgxQASgeAdhBQAWgvAMgWQATgiATgUQAVgVAfgJQAZgHAmAAIA0ACQAqADAWgBQAjAAAagIQA6gPBjhkQBvhwAyh0QA4iCgvhcQkyg2jAlEQhsi3hqlyQgghvgPgpQgYhDgUgMQg2gghMAAQg7AAhJATg");
	this.shape_67.setTransform(529.0788,191.8442);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6ACB5").s().p("AqCO4Qg7gbgpirQgmiegRj6QgjoSBEnnQCCBSDJA8QAbhiBWhpQBehzBzg7QCFhGB9AdQCTAhB3ClQBjDqBUCEQBsCrBpAnQhdEbjRBEQg4AShfAJQhPAHgUAMQgmAZhCCFQhECJg6ArQg5ArhqgBQg5AAgWADQgrAGggAWQgdATgiBBQgnBOgYAnQhJB5htAAQgVAAgXgFg");
	this.shape_68.setTransform(524.9053,205.8447);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F598A3").s().p("AqDStQhUgogulCQgqksAJmTQAJmfA7ktQBDlTBuhBQECibCQgoQCwgxBnBWQAuAmBOC7QAvBvBtESQBmD4BVCJQBxC2BtAoQheEcjRBEQg4ASheAJQhQAHgTAMQgmAZhDCFQhECJg6ArQg4ArhrgBQg5AAgWADQgrAGggAWQgdATgiBBQgnBOgXAnQhKB5htAAQgVAAgXgFg");
	this.shape_69.setTransform(524.9785,181.3299);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#90A4AF").s().p("ArWT3Qh/hRgklcQgfkxAsmuQAqmTBYlLQBblXBehTQCzieC/gvQCogpBgA5QAgATAzCwQBLEFAsBuQDQIRGKBCQBQCTijDbQg8BThNBBQhHA9goALQgjAJh6gEQhdgEglAlQgaAag3B2QgzBug3ApQgzAnhyAiQhrAggWAWQgHAHgnBEQgpBGgqAtQh0B5i1AAQgmAAgogFg");
	this.shape_70.setTransform(529.0944,191.8378);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#50616C").s().p("AAHAaQg+AAglgaIgZgZQAvAbBDACQA7ACA3gQIAHATQgzARg5AAg");
	this.shape_71.setTransform(457.2,520.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B5C5C").s().p("AgRAxQgqgSgegbQgmgjADgaIACgLIALACQBbANA8AWQA9AWAVAZIADADIgBAFIgDANQgEANgFAKIgCAEIgFACQgTADgPAAQgrAAgtgUgAhKgLQAgAcArARQAzASArgHQAFgMABgIQgTgUg1gRQgzgShNgNQAHAPASARg");
	this.shape_72.setTransform(358.364,664.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#828282").s().p("AgsAWQhJgrAFgjQBXANA7AUQA8AVAUAYIgDALQgEANgEAIQgQADgSAAQg3AAg6gjg");
	this.shape_73.setTransform(358.3369,664.9959);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#868787").s().p("ABqCSQgSgXg6gTQg6gUhVgNIgPgCIAGgMQAHg5AxhBQA3hJBBgXIAKgDIAEAKQBODEgVBjIgFAYgAgwg1QgpA2gKAyQCVAYA5AqQAJhbhAiiQg2AWguA9g");
	this.shape_74.setTransform(358.2811,653.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4E4E4").s().p("AAJBbQg4gmgPgeQgQghAOgoQARgvA4gnQgFgEAEgDIADgBQBNC/gVBiQgFgSg1gkg");
	this.shape_75.setTransform(362.9764,652.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B7B6B6").s().p("AAgBkQg7gVhYgNIAAAAQAHg2Aug/QA1hIBAgVQBNC/gVBiQgTgYg8gVg");
	this.shape_76.setTransform(358.5655,652.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D2D2D").s().p("AgKAAIAAgBIACgEIATAFIgCAGIAAAAg");
	this.shape_77.setTransform(369.175,669.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgEgKIAHAEIAAABIAMAEIgBAAIABAAIgEAHIgZAEg");
	this.shape_78.setTransform(368.275,670.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2D2D2D").s().p("AgKABIABgGIAUAEIgCAHg");
	this.shape_79.setTransform(369.6,667.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2D2D2D").s().p("AgIAQIAHgGIgJgDIAEgXIANASIAEAEIgBAGIgKgCIAAAAIgHAHg");
	this.shape_80.setTransform(369.775,666.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D2D2D").s().p("AgLAAIACgCIABgFIAUAHIgEAIg");
	this.shape_81.setTransform(368.925,669.775);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2D2D2D").s().p("AgKAAIABgCIAAgDIABgBIATAGIAAAAIgCAHg");
	this.shape_82.setTransform(369.4,668.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5B5C5C").s().p("AhWAsQh9gQgLgwIgCgRIALgBQDdgYDMAcIAOACIgJAXQgQAdhAAQQg5AOhNAAQguAAgrgGgAjFgSQAIANAZAJQAgAMAwAHQBXALBWgMQBUgLAVgZQhngNhpAAQhbAAhcAJg");
	this.shape_83.setTransform(324.2,661.3638);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#828282").s().p("AgIAnQhPgCg4gPQg9gRgGgbIgBgFQDcgXDLAbIgEAJQgOAahBAPQg2AMhFAAIgOAAg");
	this.shape_84.setTransform(324.075,661.3837);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#868787").s().p("ADRCMQjJgbjbAWIgKACIgCgKQgIgtAQgvQAPgvAlgqQAjgpAsgXQArgWAoABQAsACA3AlQA3AmAkA3QAaAmAIAkQAJAlgLAdIgDAIgADLB1QALgxgrhAQgigygygjQgygjgngBIgEAAQgiAAgmAVQgmAVgfAjQgfAkgPAnQgOAoAEAmQBggKBcAAQBvAABrAOg");
	this.shape_85.setTransform(324.2491,646.0979);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E4E4E4").s().p("ABhB6QhhgGhCgjQg7gegXgtQgXgpARgmQARgmAzgPQAQgDANABQBNADBQBbQBSBdgbBGIg6gHg");
	this.shape_86.setTransform(329.7078,646.0714);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B7B6B6").s().p("AjVB9QgQhaBLhUQBIhSBQADQBNADBPBbQBSBdgaBGQjLgbjcAXg");
	this.shape_87.setTransform(324.2507,646.0713);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5B5C5C").s().p("AjPA4IgEgJIAJgGQCihUDugfIAOgBIgCARQgJAthwAoQhaAhhcAMQgdAEgYAAQgyAAgLgUgAivA0QAZAGA2gIQBVgLBTgdQBXgeAXgeQjQAdiVBJg");
	this.shape_88.setTransform(278.925,665.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#828282").s().p("AjGAzQChhUDsgfIAAADQgMA4i4AvQhKATg5ADIgTABQgsAAgHgOg");
	this.shape_89.setTransform(279,665.5049);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#868787").s().p("AjLCkIgBgDQgPgrAJhGQAKhKAgg5QAphKA+gNQAxgKA9AbQA0AYAsApQAmAjATAjQAUAjgEAbIgBAJIgJABQjnAdihBVIgKAFgAg8iVQg1AMgkBBQgcAxgKBAQgKA9AKApQCdhQDfgeQgBgWgSgbQgSgdgegbQgqgngxgWQgngSghAAQgMAAgLACg");
	this.shape_90.setTransform(278.577,654.7049);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E4E4E4").s().p("AgJBiQhFgOgogiQgnghACgoQADgrAxglQBPgLBdBNQBcBLgGA9QgrAGgoAAQgrAAgmgHg");
	this.shape_91.setTransform(283.3608,648.9442);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B6B6").s().p("AjBCgQgZhHAkhsQAnh4BRgSQBOgRBkBQQBgBOgIA9QjsAfigBVg");
	this.shape_92.setTransform(278.4929,654.4929);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5B5C5C").s().p("AgzBWIgBgBIgGgFIgDgCIgBgBIgHgGIgCgDIgIgHIgFgHIAFgHQA3hIBcg5IAPgKIABASQACAXgEASQgSBAhjA7IgHADgAg4A1IALALIAFADQBWg0APg2QABgEABgLQhIAxgvA6g");
	this.shape_93.setTransform(247.6558,680.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#828282").s().p("AgrBNIgNgLQgEgCgCgEIgDgCIgGgHIgBgBQA3hGBZg4QACAXgEAOQgRA+hfA2g");
	this.shape_94.setTransform(247.8205,680.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgJAFIANgPIAGAGIgNAOg");
	this.shape_95.setTransform(241.775,686.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2D2D2D").s().p("AgHAIIANgQIACABIgNAQg");
	this.shape_96.setTransform(243.5,688.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2D2D2D").s().p("AgJAGIANgPIAGAEIgNAPg");
	this.shape_97.setTransform(242.725,687.75);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#868787").s().p("Ag+CUQgSgVgHgZQgPg3ABiPIAAgDIACgDQArhCA0ANQApAKAgA6QAcAyAEAxIABAHIgGAEQhYA2g1BGIgIALgAhPhdQgBCLAOAzQADANAKANQA0hABQgzQgGgugZgrQgbgugegHIgLgCQgfAAgcArg");
	this.shape_98.setTransform(245.9932,671.5687);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B7B6B6").s().p("AhNBoQgPg2ACiOQA5hXA9A7QA3A0AIBVQhbA4g1BIQgSgTgGgWg");
	this.shape_99.setTransform(245.9632,671.1829);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2D2D2D").s().p("AgKADIAPgMIAGAFIgOAOg");
	this.shape_100.setTransform(240.9,686.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2D2D2D").s().p("AgKAGIAEgHIAJgKIAHAJIABABIgIAGIAAAAIgHAHg");
	this.shape_101.setTransform(240.325,685.275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2D2D").s().p("AgIAGIAHgHIAIgHIACACIgPAPg");
	this.shape_102.setTransform(241.375,686.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2D2D2D").s().p("AgGAHIgCgBIAOgPIADADIgNAQg");
	this.shape_103.setTransform(242.225,687.375);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2D2D2D").s().p("AgHAIIgBgBIANgQIADADIgLAQg");
	this.shape_104.setTransform(243.25,688.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#424B4F").s().p("AnYC1QiBgggzg7IgGgHIAGgHQBliDDYhMQDahMEZgBQCzgBCLAcQCLAcAiAtIAEAEIgCAFQgGAggQAXQgvBCjLBKQjLBLjWAcQhSALhfAAQiUAAhzgdgAk/hyQjSBIhlB8QBABBCrAcQCrAbC9gZQDPgbDJhIQDJhIAsg/QAMgRAFgYQgigkh6gZQiFgcirAAIgLAAQkQACjTBHg");
	this.shape_105.setTransform(305,677.3983);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5F6B73").s().p("AmRC4Qi1geg/hIQBkiBDRhJQCyg/DlgMQDKgLCrAdQClAcAlAvQgHAegOAVQgtBAjKBKQjLBJjSAbQhZAMhWAAQhiAAhdgPg");
	this.shape_106.setTransform(305.125,677.4079);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#50616C").s().p("EgB7AgtQiLgtgWhPQgLgngChJQgCguAChpQACiLgChDQgFh1gUhOIgHgdQgqijgKhDQgQhiAEh2IgjgkQjZjZiBiiQj0kwgYjAQgRiGAGiQQAEhYAWi+QAYjVAJiKQAFhEgCiEQgDjKANhqQAViyBLiGQAJhVCHhWQB6hNCoguQCFgkBeAFQBdAGAgAtIgRANQgcgnhZgDQhagDh7AhQifArh5BMQiEBTgGBLIAAADIgBACQhKCCgVCwQgNBpADDIQACCLgEA/QgJCJgZDXQgVC8gEBYQgHCOARCEQAYC8DxEsQCACfDXDYQAfAeAIAKIADADIAAAEQgFB3APBfQALBCAqCkIAHAeQAUBPAFB3QADBEgCCMQgCBqACArQACBIAKAlQAXBUC7AqQC5AqDhgeQDRgbDIhIQDJhIAshAQBGhniTlAQglhQgRiRQgLhZgLjSQgNjpgMh1QgOh/h/i5QhMhwjMjxQh0iLg0hBQhahyg7haIgCgCQgyhJgahOIgQhAQA0CBB/CsQBKBkCvDSQDNDzBOByQCAC9AOCCQANB2AMDqQALDPALBYQARCQAkBNQBNCqATBsQASBtgoA6QguBDjLBKQjLBLjYAcQhUALhcAAQi0AAh/gqg");
	this.shape_107.setTransform(265.6669,484.889);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#50616C").s().p("Ah8A3QhSgBhDgYIgygYQCeAqDJgVQC+gVBig9IgjAgQg1AihWAUIgEABQhvAXh7ABg");
	this.shape_108.setTransform(294.725,596.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#50616C").s().p("AiYA/IgLAAQhUgGhGgaIg0gYQDUA6DmgbQDagaBPhNIgcAjQguAnhYAaIgNADQh4AciNAAQgrAAgrgDg");
	this.shape_109.setTransform(293.375,583.575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50616C").s().p("AgDgxQi7gHiABYQAOgRAggUQA/gqBTgQIAJgCQB5gTBvAcQB8AfBQBUIgPAPQhuh0jFgHg");
	this.shape_110.setTransform(254.85,441.1368);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#50616C").s().p("AlGAnQA5gsBMggIAHgCQCWg2CNAVQCPAWB4BgIgNAQQiah6i+AEQi8AFi+CCQANgRAcgXg");
	this.shape_111.setTransform(259.775,454.9189);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#50616C").s().p("AgdBOQAEhHAcgxIAbgkQgeA8gIBhg");
	this.shape_112.setTransform(229.3,559.625);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#75848E").s().p("AlxgLQCrAuCcABQD4AACkh5QgJArhHArQhLAvhoAWQhNAQhHAAQizAAiZhhg");
	this.shape_113.setTransform(293.375,585.5332);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#75848E").s().p("Ai0A6QhmgYgpgyQB+AvClgCQDTgCCRhjQgQA8hYAmQhQAkhyAJQgfACgeAAQhOAAhDgPg");
	this.shape_114.setTransform(294.725,598.5454);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8C5CB").s().p("AGxQwQhMh2gSgxQgihigpkBQgskOgKjJQgFhbhxi3Qg5hdi8kLQitj0hKiDQhzjHgGh3QA5CMCODAQA+BSDUECQCpDRBMB2QBvCrANB3QALBsAJCZIAODxQAREHAxBqQBlDbAAB2QgThChGhvg");
	this.shape_115.setTransform(317.95,537.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90A4AF").s().p("AItcfQhbgPjwgKQi/gIhOgdQhzgrgQhyQgOhqguiQIhHjiQghh8AGhiQAIh5BBh2QgLgMhfg9QhzhJhJg6QkFjNgdjQQghjjAIi5QAUj4AOjKQAVlHAjh9QBIkICuA0QAGhIBBhkQA9heBYhQQBahTBKgbQBTgeAkAzIiQVNQA5CMCODAQA9BSDUEBQCrDRBMB2QBuCrANB4QALBrAJCZIAODyQAREGAxBqQBmDegBB1Qh5hZjAggg");
	this.shape_116.setTransform(283.1131,468.2793);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#75848E").s().p("EgAxAg1QjHgqgahdQgPg3AEj1QADj4geh1Qgvi9gLg+QgRhmAFh7QiyisiWiyQkmlcgcjTQgXizAXjpQAkkiANjKQAEg/gBiAQgCiLAChEQALj8BeioQAGhGBrhMQBghFCPgxQCNgwBygFQB8gFAkA0IBtVLQA5CMCODAQA9BSDUECQCrDQBMB2QBvCrAMB4QAMBrAJCZIANDyQASEGAxBqQBFCXAVBkQAbB7gqA9QgsBBjLBJQjKBJjTAcQhdAMhXAAQh4AAhsgXg");
	this.shape_117.setTransform(265.6914,484.9623);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#868787").s().p("AhFBFQhOgtgPgvQgFgRAFgNQAEgOAOgKQAugmBCABQAtgBArAUQArATAcAiQAyA8gQBRIgBAFIgGADQgcAIgiABQhRgBhQgugAiEg8QgRALAHAUQAMAoBGAoQBLAsBNAAQAcAAAWgGQALhEgqgyQgYgegngSQgngRgpAAQg6AAgqAig");
	this.shape_118.setTransform(333.1518,706.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B7B6B6").s().p("AAgBiQg7gNg0giQgygggRggQgUgkAdgUQAoggA4gDQA0gCAxAYQAyAaAaAsQAbAxgLA8QgcAIggAAQgdAAgfgHg");
	this.shape_119.setTransform(333.1275,706.6956);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#868787").s().p("Ah0CBQhGgagagnIgDgDIABgFQAbhlBLg6QBCgyBMAAQAqAAAkAPQAjAQAZAeQA/BIgTB8IgBAFIgEACQhHArhnAAQhPAAhGgZgAhjhXQhEA0gaBcQAaAhBBAWQBAAWBHAAQBeAABBgmQAQhug3hBQgug2hNAAQhFAAg8Aug");
	this.shape_120.setTransform(376.2465,712.175);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E4E4E4").s().p("AgdBNQhngmgfhOQAugrA7gOQA5gNAyASQA2ATAeAvQAhAzgCBLIgmABQhUAAhHgZg");
	this.shape_121.setTransform(380.4057,707.9911);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7B6B6").s().p("AgeCLQiEgSgqg+QAbhlBLg3QBEgzBOAFQBQAGAsA9QAyBEgRBuQhFAqheAAQghAAgjgFg");
	this.shape_122.setTransform(376.2907,712.183);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#868787").s().p("AidCDQgpgQgPgaIgCgCIABgFQAThqBYhAQBPg6BhAAQAtAAAkAOQAkAOAXAbIACACQALAXgMAkQgLAigeAlQgpAyg9AcQg9AchFAAQg1AAgpgQgAhdhIQhSA7gSBfQANAUAkANQAkAMAtAAQAxAAAvgQQBJgZAvg6QAageAKgdQALgegHgSQgqgvhSAAQhXABhLA1g");
	this.shape_123.setTransform(427.0439,713.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E4E4E4").s().p("AjFBKQAzh7CMgkQA7gPA2ALQA3ALAfAkQAJATgJAeQgJAegYAfQhrAXhHADIgdABQhSAAhEgVg");
	this.shape_124.setTransform(427.8189,709.6432);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B7B6B6").s().p("AiUB8QgrgPgOgZQAOhMA1g3QAwgyBEgXQBBgWA9AJQA/AJAiAnQAKAVgMAiQgLAfgbAiQhPBgiEAGIgNAAQguAAgngNg");
	this.shape_125.setTransform(427.0576,713.8811);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50616C").s().p("Aj8ABQgegSgUgXIgPgUQB8BsDggKQB5gFCmgsQgYARg0ARQhpAkiMABIgJABQiUAAhcg8g");
	this.shape_126.setTransform(388.225,678.1532);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#50616C").s().p("AAFAuQhigChFgtQgVgOgRgRIgMgOQA6AvBpASQCAAVCGgqQgNANggAMQg8AYhWAAIgRgBg");
	this.shape_127.setTransform(384.45,661.9612);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#50616C").s().p("AlobmQi6gNikgoQikgohQgzQhKgvAKg0QAShcA9mDQBKnQAjjHQA+laAghJQAohaBJh+QAthQBiihQCokUBHiJQB3jjAjihIAVAFQgkCjh3DlQhICLioEUQhjCjgsBNQhJB+gnBZQggBGg9FaQglDPhHHFQg+GFgSBbQgHAlA+AoQBPAyCjAnQCfAnC1ANQDAAOCXgUQCogUBQg6QAcgVABhRQAAgzgOiPQgZjuABiSQAAj6A3jdQArirCQjIQBZh6Dkj+IAXgaQBoh0AyjCQAvi0gGjdQgFjWg0jRQg0jUhYiiIAhAqQAqA/AqBwIADAJQB0FdgUFpQgWGGiwDEIgXAaQjhD7hZB6QiPDFgqCoQg3DbAAD3QAACQAYDtQAPCbgBA0QgCBTgkAaQg/Ath0AZQhyAYiaAAQhLAAhRgGg");
	this.shape_128.setTransform(420.2879,546.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#50616C").s().p("Ai2A7QAsg8A9giQAugZAygIIAUgCQBQgGAoAeQAUAPAFAQQgagTgpgJQgugLgwAHQhyAShKBlg");
	this.shape_129.setTransform(382.75,503.7068);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B8C5CB").s().p("AlDaoQACgcgdiOQgli3gQh6Qg8nRB5lZQAsh/BJhpQAzhJBchhQB4h9AggnQBVhlA6huQCXkjgNmpQgMl4h5j+QBaClA3DWQA1DTAHDWQAHDegtC0QgxDBhnB0QjxENhWB2QiZDPgsCuQhNE1AhGTQAIBiAQCdQAIB0gQArg");
	this.shape_130.setTransform(478.6383,539.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#90A4AF").s().p("Aoba0Qhogcg6gtQg7gtAEgxQAEguBFghQAzgYBtgZIC6gpQBngZAwgbQh7AZh5gbQh0gZhchCQhchCgxhbQgyhgAIhoQAGhLABiIQABiUAFhEQAPkEBdjaQCBkUBtkJQDUoIgMigIAWiEINalyQBaCmA2DVQA2DUAHDVQAHDeguC0QgwDChoBzQjxENhXB2QiZDPgrCvQhRFDApG9QAVDkABAdQADBqgkAaQgYARgmARQiJAah9AAQiQAAiAgjg");
	this.shape_131.setTransform(438.692,544.2387);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#75848E").s().p("AnybSQjfgeiPg5Qiag+AOhDICGs2QBop/ArhiQAxhtBqi0QCCjVBChvQD5miAyjkINqneQBaCmA2DVQA2DUAHDVQAHDeguC0QgwDChoBzQjxENhXB2QiZDPgrCvQhRFDApG9QAVDkABAdQADBqgkAaQhhBGjZAQQhCAGhGAAQiJAAiXgVg");
	this.shape_132.setTransform(420.3923,545.8111);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#868787").s().p("ACcCAQhTgOhPgcIgCgBQg7glhdiSIgIgMIAOgEQBUgYBDAOQAzALAmAfQArAiAWA0QAWA2gEA8IgBAMgAiGhhQBVCCAzAhQBJAaBJANQABg0gUgtQgUgsgkgdQg0gqhMAAQgkAAgrAKg");
	this.shape_133.setTransform(439.949,673.9387);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B7B6B6").s().p("AgFBNQg6gjhciRQCZgrBXBRQBNBFgHBzQhVgPhLgbg");
	this.shape_134.setTransform(440.2543,673.8294);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#868787").s().p("AjWB6IgKgBIABgKQAGhsA/hAQA0g2BJgLQBKgKBDAnQBMAsAiBcIADAJIgJAFQiQBMizAAQg4AAgzgHgAgahoQhAAJguAvQg4A4gJBeQBtAMBlgQQBlgQBYgsQgghQhDgmQgvgagyAAQgNAAgPACg");
	this.shape_135.setTransform(480.275,675.0136);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E4E4E4").s().p("AhrBSQg4gTgHgmQgHgqA6g8QBTgkBSAlQBZAoAlBmQhJAYhOAFIgcABQg7AAgpgOg");
	this.shape_136.setTransform(484.2324,672.719);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B7B6B6").s().p("AjTBvQAGhiA3g9QAzg5BKgKQBJgKBAAoQBGArAeBVQhcAwhsASQg5AJg9AAQg0AAg1gHg");
	this.shape_137.setTransform(480.175,675.0087);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#868787").s().p("AhPChQggg8ADhLQAEhJAng4QAbglAkgRQAjgRAqAHIAHABIALA2QAOBGABAYQADAjgNAPQhFBRhdA0IgJAFgAACiHQgcAOgVAfQgiAwgFBAQgFBBAaA1QBUgxA/hJQAIgJgEgiQgDgWgMg9IgHgnIgLAAQgbAAgYAMg");
	this.shape_138.setTransform(509.6538,663.1332);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E4E4E4").s().p("AgqBnQgggQgKggQgLgmAUgyQAYgpAigUQAlgWAtAHIAWB3QAGAwgMAOIgDAEQgWAagjAIQgLACgKAAQgWAAgUgJg");
	this.shape_139.setTransform(510.5326,658.4322);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_140.setTransform(509.6369,662.9385);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_141.setTransform(509.6369,662.9385);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#50616C").s().p("AgEAtIgIgBQhBgHg0gTQg2gTgcgdIAPgPQAyAyB8AQQB7APBvgfQgPAMgjALQg3AShKAAIglgBg");
	this.shape_142.setTransform(456.475,612.63);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#50616C").s().p("AgGAsIgHgBQhGgEg0gRQg6gTgbghIARgOQAuA4CUAJQCIAIBegiQgQAOgkAOQg8AWhPAAIgkgBg");
	this.shape_143.setTransform(462.125,629.0296);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#50616C").s().p("EAKsAieIgCgBQhyhHjOmdQjOmdixoBQkXCGkEgVQkDgVjqiuQjbiji1kgQi1keh4l4QhrlPgklNQgllNArj/QAei4BFhxQBFhwBmghQG5iOJIgRQG9gNHvA6QGYAwF6BYQFKBNBtA4QCNAtBYDwQBPDVAaFNQAZExgZE/QgYE6g+DMQg7DGhiEjQhdEYgkB9Qg5DKgVCiQgXC6APC0QAIBnAcCOQAOBGACAYQACAkgMAPQhaBqiCA3QiAA3iXAAQiXAAiZg2gAgFMIQC3IUDUGjQDHGJBoBCQDlBRDRgqQDRgqCCiZQAIgJgEgjQgCgVgMg+QgciRgJhmQgPi3AYi8QAVikA5jLQAkh+BekYQBtlJAwigQA+jQAYk5QAXk7gYktQgclahUjUQhUjUh8gmIgCgBQhigzk2hKQl9hbmtgzQmTgwl0AAQqqAAnzCgQhgAfhBBtQhCBsgdCyQgqD8AkFLQAlFKBqFNQB2F0CzEbQCzEdDZChQDnCtEBASQEAATEUiHIALgFg");
	this.shape_144.setTransform(370.8443,461.9068);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B8C5CB").s().p("Aiwc2IgsiHQg+jaASlCQAPkoB1lzQBFjUAkh2QA+jOApi8QBVmJgEn4QgEo+iGkCIAaAKQBhBxA6D1QA1DeANEmQAMEVgaEQQgZERg3C4QhTETiQGpQhtFUgcDaQghEIAtEIQAKA/ASBWQAJA7gNAPQABgpgVg/g");
	this.shape_145.setTransform(534.3994,470.625);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#90A4AF").s().p("AMnfKQgChXBuhBQBAglCag0QhvARg8gjQg7gjgRhaQggitBVjyQARgyA9iYQAyh7AVhKQAmhxgRhtQgViChhg7Ih6hHQhGgqgsghQh3hcgjh4IhCknQgmitgVh7Qh4Glj4D4QhoBphoAwQhkAuhLgRQjMgujyjoQjQjHh5jVQgXDNh/CsQhyCai+B0Qiskwhpl8QhklngTlVQgSlWBGjjQBKjxCcgyQMQj8SYCKQGkAyF8BaQFABLBnA2QCIArBXDsQBNDSAbFJQAZEvgYE9QgYE6g+DPQhTEUiRGpQhtFUgcDbQghEHAtEJQAKA+ASBXQAJA6gNAQQioAlimACIgMAAQlCAAgDiqg");
	this.shape_146.setTransform(370.8901,453.1715);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#75848E").s().p("EAKwAiVQhshDjLmTQjUmki0oOQo1EUnZlkQjMiairkHQicjyhyk1Qhrkjg1k1Qg0ktAIkEQAIkKBGiqQBKi0CEgrQMQj8SYCLQGkAyF8BZQFABMBnA2QCIAqBXDtQBNDSAbFIQAZEvgYE9QgYE7g+DPQhTEUiRGpQhtFUgcDaQghEIAtEIQAKA/ASBWQAJA7gNAPQiFCbjWArQhIAOhLAAQiQAAiYg1g");
	this.shape_147.setTransform(370.8969,461.8331);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#868787").s().p("AiPAsQgTgQgMgiIgCgHIAEgFQAgggAtgOQAugOA1AHQA3AGAsAaQAtAZAXAlIAGALIgLAFQgqARgxAKQgwAJgsAAQhaAAgkgfgAhUgsQgoALgbAaQAKAYALAKQAgAbBVgBQBUgBBKgcQgVgdgngUQgmgTgugGQgOgCgPAAQgdAAgbAIg");
	this.shape_148.setTransform(235.45,652.747);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B7B6B6").s().p("AiHAjQgPgMgMghQA/hCBuAQQBsAQAsBJQhOAghcADIgLAAQhUAAghgdg");
	this.shape_149.setTransform(235.3,652.7241);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#50616C").s().p("AhlLBQgggbgShoQgLhBgRi4QgbkzggioQg3kjhpi8IgFgIIAHgGQASgNAegQQA8ggBFgQQDYgzDWCAQBwBCAvC5QAkCMgDDGQgEDwg3DwQg2DngzAdQgsAYg7ANQg5ANg3AAQhZAAgkgfgAkZqnQg1AUgpAcQBoC+A3EiQAfCnAcEzQAQCvAKBAQARBnAbAYQAkAeBkgFQBpgGBKgpQAqgXAzjYQA5jvAEjzQADjegviTQgviThbg3QiUhYiWAAQheAAhZAig");
	this.shape_150.setTransform(231.1615,586.5985);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#75848E").s().p("AhfK5QgjgegUiWIghlVQg3oZiYkRQAQgMAdgQQA6ggBDgQQDUgzDUB/QB3BHAsDUQAlCygTD5QgRDWgxC6QgvCygoAXQhMAqhrAGIgfABQhQAAghgdg");
	this.shape_151.setTransform(231.3336,586.54);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(309,0,373.70000000000005,474.6), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("AmV+kQAABJAzCRQAZBJAZA6QAvBqgxBMQgyBMh0AAI1oAAMAAAA6AMA6BAAAIAA1pQAAhzhMgyQhMgxhqAvQg6AZhIAaQiRAyhKAAQioAAh3h3Qh3h2AAipQAAioB3h3QB3h3CoAAQBKAACRAzQBIAZA6AaQBqAuBMgxQBMgxAAh0IAA1nI1oAAQh0AAgxhMQgyhMAuhqQAag6AZhJQA0iRAAhJQAAioh3h3Qh4h3ioAAQinAAh3B3Qh3B3AACog");
	this.shape.setTransform(186.65,491.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgdAAk7MAAAg6AIVpAAQBzAAAyhMQAxhMguhqQgag6gZhJQgziRAAhJQAAioB3h3QB2h3CoAAQCpAAB2B3QB4B3AACoQAABJgzCRQgaBJgaA6QguBqAyBMQAxBMB0AAIVoAAIAAVnQgBB0hLAxQhMAxhqguQg6gahIgZQiRgzhKAAQioAAh3B3Qh3B3AACoQAACpB3B2QB3B3CoAAQBKAACRgyQBIgaA6gZQBqgvBMAxQBLAyABBzIAAVpg");
	mask.setTransform(186.65,491.325);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgHFKQg0gdgugyQg6hBghhVQgvh4APiOQAMh0BCgxQAqghA5AAQAtABAtATQAuAVAjAiIABABQCPCtgnDrQgUB1gyBXQgVAegtAAQgtAAgzgdgAiekjQgpAvgJBVQgOCJAtBzQAgBRA4A/QAqAuAvAdQAxAbAoAAQAiAAAPgWQAwhRAThyQAljhiIinQghgfgqgTQgqgSgoAAQhCAAgpAvg");
	this.shape_1.setTransform(361.189,236.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(359.925,237.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("Ag7BgQgZgoABg4QgBg4AZgnQAZgoAiAAQAjAAAZAoQAZAoAAA3QAAA4gZAoQgZAogjAAQgiAAgZgog");
	this.shape_3.setTransform(358.35,244.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E73B5").s().p("AhaCLQglg6AAhRQAAhRAlg5QAmg6A0AAQA1AAAlA6QAmA5AABRQAABRgmA6QglA6g1AAQg0AAgmg6gAhLh8QggA0AABIQAABJAgA0QAfA0AsAAQAtAAAfg0QAfg0AAhJQAAhIgfg0Qgfg0gtAAQgsAAgfA0g");
	this.shape_4.setTransform(358.35,243.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53A2D9").s().p("Ahkh8QAig6AzAAQAvAAAjA2QAiA3AABMQAABAgXAyQgZAyglAQQhghsgUjHg");
	this.shape_5.setTransform(359.95,242.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#538BC8").s().p("AhSCEQgjg3AAhNQAAhMAjg3QAig3AwAAQAxAAAiA3QAjA2AABNQAABNgjA3QgiA3gxAAQgwAAgig3g");
	this.shape_6.setTransform(358.325,243.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiilLQA1gVBAATQA8ASAuAtQCNCsgnDnQgUBzgwBSQgGAIgHAFQkph7A1ong");
	this.shape_7.setTransform(366.3821,236.0668);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AA2FYQhCgRhBg/QhKhHgmhlQgsh1AOiHQARikB4gWQAxgJA2AUQA0ATAoAnQCNCsgoDnQgTBzgwBSQgTAbglgBQgRAAgUgFg");
	this.shape_8.setTransform(361.2132,236.7707);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AhVgCQgJgQgDgTIgBgQIANAhQAWAhAsAMQAgAJAagOQAjgSAUg5QAJAtgHAOQgcA0g9AAQhCgGgag0g");
	this.shape_9.setTransform(329.5705,221.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AguBDQgwghgJg+IABg4IAJAsQASAwArAdQAWAOAggGQAkgHAggeIAOAPQgYAqgqAPQgQAFgPAAQgbAAgagSg");
	this.shape_10.setTransform(332.5,208.6147);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("AhGAFQgPgcgFgkIgDgeQABALAGAQQAKAeARAYQA2BKBjgCQgEAagCAAIgUAAQhhAAgphVg");
	this.shape_11.setTransform(335.175,199.2895);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2D2D").s().p("Ag8gRQgFggAEgkIAEgcQgBAJABARQABAfAJAcQAbBYBUAjIgIATQhjgcgRhng");
	this.shape_12.setTransform(343.5158,192.7125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D2D").s().p("AiSgoQAYhGA/gcQA/gcBMA3QBKA3AIBNQhAgqhIgGQiPgLgpC6QgKh6AWhCg");
	this.shape_13.setTransform(355.1568,205.8555);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AAAhNQAygKArAVQAvAWAZAyQg6gnhwAbQhvAagwA+QAxiIBzgXg");
	this.shape_14.setTransform(358.15,158.3887);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AhxALIgggWQAmAWBTABQBkACA4guIAOARQg0AqhYAGIgFAAIgFAAQhBAAgsgWg");
	this.shape_15.setTransform(526.025,473.5771);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("AhlASIgggUQA3AVBUgKQBVgJAaggIARAOQgPASghAMQggAMgpAGIgDAAQgRADgRAAQgsAAghgPg");
	this.shape_16.setTransform(523.4,431.4042);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("Ah/APQAugiBMgMIADAAQAsgGAoABQApABAaAJIgHAVQg6gUhrATQhcAQghAbg");
	this.shape_17.setTransform(509.5625,395.5475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("AioAVQAyghBCgWIAHgCQBFgRA9ADQBEADA0AaIgKATQhSgph1AUQhpAShfA4g");
	this.shape_18.setTransform(490.65,358.859);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("Aj8ATQA/grBTgSIAFgBQB3gZB0AQQBtAPA5ArIgNARQhRg9irACQi+ADiQBcg");
	this.shape_19.setTransform(480.225,316.3666);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAchMQivgfjFAkIBHgVQBcgVBqAEIAMABQCOAKBlAuQB2A1AvBkIgTAJQhEiSjmgog");
	this.shape_20.setTransform(485.75,278.0673);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("AAUgpQjAgWh/ApIAzgXQBIgYBsAAIAGAAQB/ADBeAfQBsAjAiA7IgTALQgxhYjVgXg");
	this.shape_21.setTransform(497.5,243.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("ADwWFQgmhNgCiDIgBgVQgOgrABgwQABhHApgXQAogWBDgMQBMgPAjAQIAEABQgLiYhEiMQhfjEjEiRQhXhDhxhFQhEgqiEhLQjJhyhUg8QiMhjhEhnIgHgLQgmhCgKhNIgDhAQAWC4ClCTQBlBZESCbQCBBKBIAsQBvBFBaBDQDUCeBgDWQBDCVAFCfIgVADQgCgJgMgFQgegMhFANQhAAMglAUQgeARAAA9QAAAuAMAlIABACIABAYQACB/AjBHQBBCDCwAAQCIAABThVQCQiVgPmRQgEh6hAjKQglh1hej2Qg5iRgXhDQgjhlgIg2QgViJAmifQAahyBPjIQAlhdARihQALhhAIi4IAAgGQABhJAUhfIAThRQgLBFgHC1QgJDCgKBcQgSCmgmBgQhNDFgbBwQglCdAUCEQAIA1AjBlQAWA9A5CVQBeDzAmB6QBBDLAEB9QAPGZiXCdQhZBciRAAQi9AAhHiPg");
	this.shape_22.setTransform(454.2637,362.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50616C").s().p("AAAAZQAOhLgDhbIAVgBQABB+ghBcQgPAvgRAVQAYhDAIg0g");
	this.shape_23.setTransform(498.35,476.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8C5CB").s().p("ACMP7QgRi5hLjYQgJgaiElJQhRjKgViBQgdi1A4jJQAThEAjhYIAyiDQAahJA7k6QA4koAeg/QgKAvgIBuIgODYQgWEngxB+QhMDFgaBtQgnCiAUCHQAKBAA0COQAeBUBMDEQCUGJAGCxQAJD4g1CcIgNAZQgVAzgfAjQBBjqgVjog");
	this.shape_24.setTransform(519.6985,355.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#90A4AF").s().p("AJyXpQgwgFgZglQgbgnAOg4QAbhtgEigQgFi8gzieQgviUiCicQiAiaiwh6QhnhIiphXIkKiKQiNhPhPhKQhhhbgkhvIJUwSIQMAAQgKAwgIBuIgPDYQgVEngxB9QhODGgaBtQgnChAVCIQAJBAA0CNQAfBUBMDFQCUGJAHCxQAJD4g1CcIgOAZQgfBNg1AmQgpAdgrAAIgNgBg");
	this.shape_25.setTransform(453.7153,358.5079);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#75848E").s().p("AD1VuQgVg0gFhGQgChDgCgNQgNgpABgvQAAhCAkgUQAygcBPgKQBagLAKAkQgFiSg8iNQhfjfjYihQh7hdjKh2QjxiLg4gmQiVhihNhfQhchygRiPIJLuOIQViDQgKAvgIBuIgPDYQgVEngxB+QhODFgaBuQgnChAVCHQAJBAA0COQAfBUBMDEQCUGJAHCxQAKEYhECfQhXDQjWgBQjHABg+ihg");
	this.shape_26.setTransform(453.7145,362.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D2D2D").s().p("AALAQQhIgMgrAuQAMhIAggbQAcgXAlAOQAiANAdAkQAdAjAIAmQgbgmhDgKg");
	this.shape_27.setTransform(542.9,160.1101);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#50616C").s().p("AoAKzQgahsAuhWQAdg1BihjQBChDAhgnQA4hDAnhGQAPgaAphVQBzjuBgiFQCqjoDyiHIAOAQQixD3hQEzQguCxgeExQgQCkgNA7QgWBfgsAiQhAAwhlgKQg9gGh7gmQhUgZgjgGQg6gKgbASQgaARgGAtIgHA6gAl4JWQAmAFBZAcQB2AkA6AGQBgALA6gsQAngeAUhcQAMg4APifQAdkoArirQBLkqCjjxQjbCFicDbQhaB9hrDiQgkBLgVAmQgoBHg6BFQghAnhDBEQhWBXgbArQgrBHAHBPQALgUARgKQAXgPAkAAQARAAATADg");
	this.shape_28.setTransform(114.5806,114.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8C5CB").s().p("AikGUQAXkaAUhuQAmjRBojXQBfjEBIg2IAUgOQiJDKhJDxQg3CxgcDjQgPB6gUDDQgUCMgvAqIgUAHQAZgzASjeg");
	this.shape_29.setTransform(142.675,111.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#90A4AF").s().p("Aj2KBQhYhBgIhuQgGhHA1hmQBAhpATgiQAuhUAwiDQA4ibAYgzQBujuEQiwQiJDKhKDyQg3CwgcDjQgPB6gUDDQgTCNgvApQgpARgmAAQg9AAg3gpg");
	this.shape_30.setTransform(129.0992,111.9498);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#75848E").s().p("AnwItQAVg4A+hEQBQhPAsgxQBOhVAwhXIBXiuQBAiCA7heQC6kkEYibQiVDQhRD6Qg7C4gdDqQgQCAgUDIQgVCOg0AoQg+AvhpgMQg4gHiDgoQhwgjgtAEQhDAFgKBNQgVhWAbhGg");
	this.shape_31.setTransform(114.6906,111.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#50616C").s().p("AEnApQhYigiJhFQh6g9iYARQiZARisBfQgZAVgNAFQgMAFgHgGQgKgIAJgXQAIgTAmhEQAvhXAOgcIABgCIACgCQB6hdC0gQQC0gRDGBAQCoA2BwBXIAHAGQBLA+AUA6QAKAcgEAQQgZhShthQQhthQiYgxQjAg9iuAPQiuAPh2BZQgVApgnBIQglBDgHARIAYgTIACgBQCxhhCegSQCegRB+BAQDGBjBiEVIABAEQAnBjAFBgQADAxgGAcQgijyhYiig");
	this.shape_32.setTransform(205.2259,77.5548);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8C5CB").s().p("AFqBgQhSg4hoguQkriHk9ALQBvgmCQAJQCGAICEAvQCDAtBgBFQBkBIAhBPQgMgUhDgtg");
	this.shape_33.setTransform(218.875,52.4138);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#90A4AF").s().p("AD0BsQg9i3hthmQhihejDgZQgwgHhVgFQg+gDgMgFQgigPACgdQACgdAhgQQCDgqCaAPQCJAOCGA6QB+A1BZBNQBZBMAWBIIgGENIikD6QAMicg5itg");
	this.shape_34.setTransform(218.3944,77.5179);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#75848E").s().p("ABXi+Qj9iWl2DNQgkAegHgDQgHgDAPgeQA8hsAohQQB5hcCzgPQCegNCsAzQCiAvB3BVQB6BWAcBcIitIQQhDnekDiYg");
	this.shape_35.setTransform(205.6744,78.1419);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_36.setTransform(533.025,233.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2D").s().p("AgaBpQgUgFgGgjQgGgiALgrQALgrAWgbQAVgbAUAFQAUAFAGAiQAHAjgLAqQgLAsgXAbQgRAXgSAAIgGgBg");
	this.shape_37.setTransform(529.7898,239.9244);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E73B5").s().p("AgxCxQgggKgIg4QgHg5AWhLQAUhEAggsQAggsAfAAIAKABQAiAKAGA9QAFA4gUBHQgUBEggAsQggAsgfAAQgGAAgEgBgAgHh3QgdApgSA/QgUBBAFA1QAEAwAVAGQAVAGAcgnQAggpAThDQAUhCgGg1QgCgWgGgOQgHgOgKgDIgEgBQgWAAgaAmg");
	this.shape_38.setTransform(530.1972,238.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53A2D9").s().p("AhBAbQAUhEAhgsQAhgrAbAIQAbAIAFA2QAFA2gUBEIgDANQg5AYhVAWQABguAOgyg");
	this.shape_39.setTransform(530.2093,233.6379);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#538BC8").s().p("AgvCnQgbgIgFg2QgFg3AThEQAVhFAggrQAhgsAbAIQAbAIAFA2QAFA3gTBEQgVBFggArQgbAlgYAAIgJgBg");
	this.shape_40.setTransform(530.2,238.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2D2D2D").s().p("Ai5FGQAglTBSixQBFiVBTAAQAoAAAcAiQAYAcAJAqQAKArgHAuQgtEHifCIQgzAqg4AZIgvARIgOADgAg4ixQhMCqggFAQBYgcBLhNQB/iCAnjjQAGgqgIgmQgJgmgUgZQgXgageAAQhKAAg/CNg");
	this.shape_41.setTransform(536.4735,229.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhEh1QA2huA/gSQA3gQAlA4QAkA4gNBRQgSBqgmBXQgwAuhNAhQg2AWhgAYQAjjtBAiCg");
	this.shape_42.setTransform(537.5111,221.2472);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1E1E1").s().p("AhSiMQA3iPBFgiQA9geAqA5QAqA4gNBYQgtEFicCFQgyAqg2AXIgtAQQAckqBCirg");
	this.shape_43.setTransform(536.5642,229.0328);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D2D2D").s().p("AhGgLIAPgNQAZAfA0AEQAbACAXgEQgdAMggADIgQABQgyAAgPgkg");
	this.shape_44.setTransform(560.35,209.1427);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D2D").s().p("AhiAgIAFgUQA/AQBGgiQAkgSAXgVQgOAXgaAWQg0Aug3AAQglAAgNgOg");
	this.shape_45.setTransform(562.2,200.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D2D2D").s().p("AhgA5QBDgOBFg9QAjgeAWgcQgTAngiAlQhBBMhHABg");
	this.shape_46.setTransform(560.575,193.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D2D2D").s().p("AhWBaQAxgPBChcQAhguAZgtQgTA0ggA1Qg8Bqg4AGg");
	this.shape_47.setTransform(557.25,187.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D2D2D").s().p("Ag2hFQAfgpAigUQAjgVAbAJQAsAQAJBMQAEAmgEAhQhAgvg2AYQg5AZhOB7QgCh1BLhig");
	this.shape_48.setTransform(540.5599,201.7771);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#50616C").s().p("AiPaXQkqgfkZiCQkZiBjjjTQiYiMhpicIgGgIQhAhjgihoQgchVAKgEQAoCLBnCYQBnCZCTCJQDhDQEWCAQEVB/EnAgQGMAvEeg7QCogjDuhuIBSglQDFhXBwjUQBxjUACkgIAAgDQAMgkACgWQABgNgCgQQgDgeAKgjQARg7A9iJQA5h/gXiTQgNhWhAiqQgphtgOg1QgXhXAFhEQAGhagfiJQghiMg+iMQiXlUjRhvQkrifk8AVQhjAGhYAYIhFAWQiHhqk8gIQlDgIj2BoQjSBZiKCuQi1DlgmFlIgVgDQAmlrC5jqQCNixDYhcQD9hrFCAHQE7AHCPBtQClg9DMAKQEBAND6B/QB7A+BtCXQBLBpA8CGQBACNAiCPQAhCQgHBjQgEBBAWBUQAOAzAoBrQBACpAOBbQAYCcg7CDQg8CFgQA5QgKAiADAaQACASgBAOQgDAYgMAmQgCEmh0DZQh0DYjKBaIhSAlQi9BXh5AjQjMA6j7AAQicAAiygWg");
	this.shape_49.setTransform(397.8383,170.8814);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8C5CB").s().p("AI+YRQASAAAogvQAug1ArhSQB3jeAXkOQgChTAeiPQAeiTAnheQBFiZhmj0IhQixQgohdAAgwQAAiFgDgvQgHiOgbh5QhQllj6inQiehqkPgdQkPgeh9BMQiLhLikg3QjZhJisgEQChgKDAAmQDJAnBTBBQCeg7DCACQEMAED/CBQDRBqCZFVQBACNAhCQQAhCMgHBgQgFBQAkBzQAVBCA1CKQAsB/AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAagOAvQgCEFhdDIQhaDEigBog");
	this.shape_50.setTransform(450.3192,157.4447);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#90A4AF").s().p("AJbZBQhLgJjsgkQj3gli3gWQjZAZj6hIQjkhBjaiFQjPh/iWidQiWiegviPICO1TICFkKQByk3DWilQC2iODygZQDNgWDUA+QC5A3B3BdICMgzQBgggBYgLQD5geD4B9QDRBrCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB9AHBdQAJB7gxBuQhVC8AAAxQgBANADAYQAAAZgOAwQgDEnh0DXQhyDSjGBYQhdAphqAJQggADgkAAQhJAAhegLg");
	this.shape_51.setTransform(397.4442,163.1565);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#75848E").s().p("AiKaEQofg6m1loQi6iZiCi2Qh8itgvihIC86nQBnjvDHiQQCuh+DjgoQDKgjDGAnQC7AkBvBXQCthBDmgIQFFgMD8B/QDRBrCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB+AHBcQAJB7gxBuQhVC8AAAxQgBANADAYQAAAZgOAwQgDEnh0DXQhyDSjGBYQiBA8hGAeQh7A0hwAcQi2AujkAAQibAAiwgVg");
	this.shape_52.setTransform(397.4442,171.7693);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#50616C").s().p("AFmUxQg8gUgugqQgcgagpg2QghgrgRgRQgegbghgJIhEgPQhHgOgggOQgygXgsgxQgZgdghg2QgRgcgohKQgohIgRgcQgegwgUgQQgOgLgagHQgPgFgogJQhOgRgugSQhQgfg/g6Qh2hqhVh3QiUjOAtiGQAGgTAbgRQARgLAwgXQBQglApgcQBIgxAqg/QBAhgBOiRQAwhZBUioQBujaAvhQQBOiEAwgXQBNglCFgJQCPgJCUAdQF1BICdD+QBYCQBBDhQBADgAaD/QA8I/iPGVIgCACQi/EJiFB2QiGB4huAAQgiAAgigMgAAK0jQh+AJhGAhQgrAVhOCFQguBQhpDRQhXCtguBVQhPCShABhQgsBChLAzQgrAdhSAnQgpATgQAKQgZAPgEAMQgkBqBnCmQBVCJCUCGQA9A3BKAeQAsARBOARQAoAJASAFQAdAJAQANQAXARAfAyQATAeAoBKQBJCHAnAuQApAuAuAUQAeANBEAOQArAJAaAGQAnAKAgAeQAUATAiAtQApA1AZAYQArAnA3ATQByAlCOhwQCPhxDVkmQCNmQg7o5Qgaj9g/jdQhAjfhYiOQhJh4iHhSQiGhRiyghQhrgUhoAAQgmAAgmACg");
	this.shape_53.setTransform(172.3996,181.017);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6ACB5").s().p("ACnOeQhBgegug3Qgvg1gOg+QgjiHhNhSQhShXhugIQhwgIhvgtQhqgrhPhCQhQhDgdhIQgghOAjhCQAfiqBljbQBjjXCGjDQgIBnAHBvQBQiuC9hbQCvhVDWAJQDXAICrBgQC5BoBICtIgCAUQgCCggbDgQgdDtgvDZQh0IciTBXQhUAyhUAAQhEAAhFghg");
	this.shape_54.setTransform(161.9233,177.8085);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F598A3").s().p("ACkRGQhBgfgug2Qgvg2gOg9QgjiIhNhSQhShXhugIQhwgIhvgtQhqgrhPhBQhQhDgdhJQgghNAjhDQAfiqBmjdQBkjYCHjEQCOjNCLh5QCYiEB1AAQCygBBYAKQCcASBmA8QEPCfgyHqQgCChgbDfQgdDtgvDZQh0IdiTBXQhUAxhUAAQhEAAhFggg");
	this.shape_55.setTransform(162.2127,161.068);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#75848E").s().p("AASBYQBQjGhXj2QAmBHBNBqQA1BIA0BAQh+DCiJBlQhDAyiDA3QCyhdBGiwg");
	this.shape_56.setTransform(239.425,278.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#75848E").s().p("AgPglQAQAkAPAnQgZgvgGgcg");
	this.shape_57.setTransform(239,238.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#90A4AF").s().p("AFoUnQhWgdhMhkQgngzgRgQQghghgmgJQhmgUgogNQhCgWgzg5QgmgshQiUQhKiGgfgYQgTgPgrgLQg2gLgggJQh/gghWhOQiPiBhWiFQhxixAmhzQAGgSAngVIBYgrQCKhFA9hdQBIhtBbisICXkpQCrlRBEghQBIgiCBgJQCOgJCSAbQF1BGCbD7QBWCNBADeQBBDeAbD8QA9I+iRGYQjVEoiPBxQhuBYhfAAQggAAgfgKg");
	this.shape_58.setTransform(172.4516,181.011);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#50616C").s().p("AA1KzQhTgngyhJQgwhGgciSQgRhZgVjOQgilOgsiOQhLjziig6IAGgVQDWAfCODCQBTBxBmEFQA1CGAdA4QA9B3BVBsQAwA8BYBdQBJBNASAgQAeAxgYAmQgZAohGAbQhGAahTACIgMABQhnAAhTgogAjvl0QAjCHAgEvQAVDMAQBWQAbCQAuBDQAwBGBRAlQBTAlBlgCQBNgCBCgYQBBgZAWgiQARgcgZgoQgRgdhGhJQhYhdgxg+QhWhtg+h5Qgcg1g3iLQhdjuhEhmQh0iving0QB+BYA9Dmg");
	this.shape_59.setTransform(630.9133,112.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8C5CB").s().p("ABcEuQhRh5hTjJQhXjcgqhdQhJichKg7QBrBJBNCIQAqBKBRDJQBODDBBBwQBmCvCRCDQiRhShwilg");
	this.shape_60.setTransform(635.475,105.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#90A4AF").s().p("AEAJ4QhIgSg0gzQh0hzhJkhQgThLgjipQgfiagVhKQgehshDhTQhMhdhmghIgWgJQEAAlCcEZQAvBWA+CeQBDCoAcA2QBQCdBXBmQAvA4BGBEQAiAggWAgQgUAeg3AMQgaAGgcAAQghAAgigIg");
	this.shape_61.setTransform(626.4164,104.2465);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#75848E").s().p("AhDI9Qg6hUgejSQgckFgRiHQgfjzg4iFQhLiwiLgyQEAAlCbEZQAwBWA9CeQBECnAbA2QBeC3C9DHQBHBLASAdQAcAugVAhQgXAmhFAaQhHAahVABIgDAAQjRAAhkiTg");
	this.shape_62.setTransform(630.575,112.2503);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#50616C").s().p("Aj/EzQiIhPgwiKQgQgrgEgsIgCgkIABgGIAFgCQAhgUBthFQCyhxBZgiQCRg4CPAhIACAAQCUBDAwAqQAaAXgFASQgHAag9gGIgBAAQhQgQheAVQheAVhWA1QhhA7hIBbQhIBbgkBuIgFANgAgpkAQhXAiitBuQhYA4gyAeQAAA8AaBBQAuBwBvBGQBHjKCsh7QCfhzCrAAQApAAAlAIQAWACANgCQAJgCABgDQABgHgagUQgygmiBg6QgygLgyAAQhZAAhYAig");
	this.shape_63.setTransform(560.5903,70.0499);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B8C5CB").s().p("Ai6ArQBBgrBDgeQDChcB0AsQhRgHh5AtQgrAQkKB1QATgRAyghg");
	this.shape_64.setTransform(555.825,51.0356);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#90A4AF").s().p("AktA+QDBh6BSgiQCWg+CQAfQAiAggBATQgBARgeANQhmAehBAfQiTBYhFAVQggAKgcAAQhNAAgzhKg");
	this.shape_65.setTransform(557.1014,53.5151);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#75848E").s().p("AmvBYQgPgqgEgrIgBghQArgZCDhTQBmhBA+gfQC4hbCnAmQCvBOAgAqQAaAkhOgHQhRgRhfAVQhgAVhaA3QjNB9hNDoQiFhOgviFg");
	this.shape_66.setTransform(560.6594,69.8175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#50616C").s().p("ArXUCIgCAAIgCgBQiOhbgfmMQgSjkAWkvQAVkcA0kbQAzkcBDjHQBGjTBHg+QCzieDBgxQCugsBlA8QAYAOAZBCQAQAqAiB5QBqFwBqCzQC8E/EtAzIAFABIADAEQA3Bng9CPQgzB4h1B0QhoBng8ARQgdAHglABQgWABgsgDQg6gDgaADQgrAFgXAYQgSASgSAhQgLAUgVAtQgfBDgSAfQghA1gmAdQgkAagzAVQggAMg8ASQgwAPgUAIQggAMgOAOQgJAJgWAnQg+Bvg/A4QhxBjilAAQgnAAgogFgAjDzeQi5AwiuCaQhAA4hEDHQhEDHg0EdQg1ElgVEjQgUEjARDeQAPC8ApB3QApB4BAAqQDCAYB9hhQBGg3BFh6QAZgsAJgJQARgRAjgOQAWgJAygOQA6gSAfgMQAxgTAigZQAjgbAfgyQASgeAdhBQAVguANgWQATgjATgUQAVgVAfgIQAagHAlAAIA0ACQAsACAUgBQAjAAAagHQA6gQBjhkQBvhwAyh0QA4iCgvhcQkyg2jAlDQhsi3hqlzQgghugPgqQgYhDgTgLQg3ghhMAAQg7AAhJATg");
	this.shape_67.setTransform(591.372,175.1442);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6ACB5").s().p("AqCO4Qg7gcgpiqQgmiegQj6QgkoTBFnmQCBBRDJA8QAbhhBWhpQBehzBzg7QCFhGB9AdQCTAhB3ClQBjDqBUCDQBsCsBpAnQhdEbjRBEQg4AShfAIQhPAHgUANQgmAYhCCGQhECJg6ArQg5ArhqgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgYAmQhJB6huAAQgVAAgWgFg");
	this.shape_68.setTransform(587.2191,189.1872);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F598A3").s().p("AqDStQhUgogulCQgqktAJmSQAJmfA7ktQBDlTBuhBQECibCQgoQCwgxBnBVQAuAnBOC7QAvBvBtESQBmD4BVCJQBxC2BtAoQheEcjRBEQg4ASheAIQhQAHgTANQgmAYhDCGQhDCJg6ArQg5ArhrgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgXAmQhKB6htAAQgVAAgXgFg");
	this.shape_69.setTransform(587.2785,164.6691);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#90A4AF").s().p("ArWT3QiAhRgjlcQggkxAtmuQAqmTBXlLQBblXBehTQC0ieC/gvQCogpBgA5QAgATAzCwQBLEEArBuQDQISGLBCQBQCTijDbQg9BShNBCQhGA9gpALQgjAJh5gEQhegEglAlQgaAag3B2QgzBug2ApQg0AmhxAiQhrAggWAXQgHAHgoBEQgoBGgqAtQh0B5i1AAQglAAgpgFg");
	this.shape_70.setTransform(591.4168,175.1635);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#50616C").s().p("AAHAaQg+AAglgaIgYgZQAtAbBEACQA7ACA3gRIAHAUQgzARg5AAg");
	this.shape_71.setTransform(519.5,503.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B5C5C").s().p("AgRAxQgpgSgfgcQgmggAEgcIABgLIALACQBbANA8AWQA+AWAUAZIADAEIgBAFIgDANQgEANgFAJIgCAFIgFAAQgQAEgSAAQgrAAgtgUgAhKgMQAgAdArARQAzATArgHIAHgUQgUgVg1gRQg0gShMgMQAIAPARAPg");
	this.shape_72.setTransform(420.6852,648.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#828282").s().p("AgsAWQhJgrAFgkQBYAOA6AUQA8AVAUAXIgDAMQgDAMgFAJQgRAEgRAAQg3AAg6gkg");
	this.shape_73.setTransform(420.6369,648.3065);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#868787").s().p("ABqCSQgSgWg6gUQg5gUhWgMIgPgDIAGgMQAHg5AxhBQA3hJBBgWIAKgEIAEAKQBODDgVBlIgFAXgAgwg0QgpA2gKAxQCWAZA4AqQAJhchAiiQg2AWguA+g");
	this.shape_74.setTransform(420.5811,636.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4E4E4").s().p("AAJBcQg3gmgPgfQgRghAOgoQARgvA4gnQgFgDAEgEIADgBQBNDAgVBhQgFgRg1gkg");
	this.shape_75.setTransform(425.2942,635.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B7B6B6").s().p("AAgBkQg7gUhYgOQAHg2Aug/QA1hIBAgVQBNDAgVBhQgTgYg8gVg");
	this.shape_76.setTransform(420.8655,635.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D2D2D").s().p("AgKAAIAAgBIACgEIATAFIgCAGIAAAAg");
	this.shape_77.setTransform(431.5,652.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgEgHIAHADIAMAEIAAABIgEAHIgZAEgAADgEgAACgLIAAAAIABAHg");
	this.shape_78.setTransform(430.575,653.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2D2D2D").s().p("AgLAAIACgFIAVAEIgCAGIgBABg");
	this.shape_79.setTransform(431.9,650.95);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2D2D2D").s().p("AgIAPIAHgFIgJgDIAEgXIAOASIADADIgBAHIgKgCIAAAAIgHAHg");
	this.shape_80.setTransform(432.075,649.575);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D2D2D").s().p("AgLAAIACgCIABgFIAUAHIgCAFIgCADg");
	this.shape_81.setTransform(431.225,653.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2D2D2D").s().p("AgKAAIAAgCIABgDIAAgBIAUAFIAAABIgBADIgBAEg");
	this.shape_82.setTransform(431.7,651.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5B5C5C").s().p("AhWAtQh8gRgMgvIgCgSIALgBQDdgXDMAcIANABIgJAXQgPAdhBAQQg3AOhOAAQgxAAgogFgAjFgSQARAcBhANQBXALBVgLQBUgMAVgZQhmgNhqAAQhaAAhdAJg");
	this.shape_83.setTransform(386.5,644.6888);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#828282").s().p("AgIAnQhPgCg3gPQg+gRgGgbIgBgGQDcgXDLAcIgEAJQgOAahBAPQg2AMhFAAIgOAAg");
	this.shape_84.setTransform(386.375,644.7087);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#868787").s().p("ADRCMQjJgcjbAXIgKABIgCgKQgIgsAQgwQAPguAlgqQAjgpAsgXQArgXAoACQAsABA3AmQA2AlAlA3QAaAmAIAlQAJAkgLAeIgDAIgADLB1QAMgvgshDQgigxgygjQgygjgngCIgEAAQgiAAgmAVQgmAVgfAkQgfAkgOAnQgPAoAEAmQBggKBdAAQBuAABrAOg");
	this.shape_85.setTransform(386.5491,629.4454);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E4E4E4").s().p("ABhB7QhhgHhCgjQg7gegXgtQgXgpARglQARgnAzgOQAQgDANAAQBNADBQBbQBSBdgbBGIg6gGg");
	this.shape_86.setTransform(392.0078,629.3964);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B7B6B6").s().p("AjVB9QgQhaBLhUQBIhRBQACQBNADBPBbQBSBdgaBGQjLgbjcAXg");
	this.shape_87.setTransform(386.5507,629.3963);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5B5C5C").s().p("AjPA4IgEgJIAJgFQCjhVDtgfIAOgBIgDARQgIAshwApQhaAhhcAMQgjAEgSAAQg0AAgJgUgAivA0QAcAGAzgHQBVgLBSgeQBYgeAXgeQjRAeiUBIg");
	this.shape_88.setTransform(341.25,648.775);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#828282").s().p("AjGAzQCghUDtgfIgBADQgLA5i5AuQhJATg5ADIgUABQgrAAgHgOg");
	this.shape_89.setTransform(341.325,648.8299);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#868787").s().p("AjMChQgPgqAJhGQAKhKAgg6QAphJA+gOQAxgKA9AcQA0AXAsApQAmAjATAkQAUAigEAcIgBAIIgJABQjpAeifBUIgKAGgAg8iUQg1ALgkBBQgcAxgKBAQgKA9AKApQCehPDegeQgBgWgSgcQgSgdgegbQgqgngxgWQgngSghAAQgMAAgLADg");
	this.shape_90.setTransform(340.877,638.0318);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E4E4E4").s().p("AgJBiQhFgOgogiQgnghACgoQADgrAxglQBPgLBdBNQBcBKgGA+QgrAGgoAAQgrAAgmgHg");
	this.shape_91.setTransform(345.6608,632.2886);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B6B6").s().p("AjBCgQgZhHAjhsQAoh4BRgSQBOgRBjBQQBhBNgIA+QjtAfigBVg");
	this.shape_92.setTransform(340.8141,637.801);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5B5C5C").s().p("Ag6BQIgNgMIgNgOIAFgHQA4hJBbg5IAPgJIACASQABAagEAPQgSBBhjA5IgHAEgAg4A1IABAAIAPAOQBWgzAPg3QACgJAAgGQhIAwgvA7g");
	this.shape_93.setTransform(309.9688,663.675);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#828282").s().p("Ag+A8IgJgJIgBgBQA4hHBYg3QACAWgEAPQgRA9hfA3g");
	this.shape_94.setTransform(310.1225,663.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgJAFIAOgPIAFAFIgNAQg");
	this.shape_95.setTransform(304.075,670.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2D2D2D").s().p("AgHAIIANgQIABABIgMAQg");
	this.shape_96.setTransform(305.8,671.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2D2D2D").s().p("AgJAGIANgQIAGAFIgNAQg");
	this.shape_97.setTransform(305.025,671.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#868787").s().p("Ag+CUQgTgWgGgXQgPg2ABiRIAAgDIACgDQArhCA0ANQApAKAgA6QAcAyAFAyIAAAGIgGAEQhYA2g1BHIgIAKgAhPhcQgBCKAOAzQADANAKAOQA1hBBPgzQgGgugZgrQgbgtgegIIgLgCQgeAAgdAsg");
	this.shape_98.setTransform(308.2969,654.8687);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B7B6B6").s().p("AhNBnQgOg1ABiOQA5hXA9A7QA3A0AIBVQhaA3g2BJQgRgUgHgWg");
	this.shape_99.setTransform(308.268,654.5079);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2D2D2D").s().p("AgKAEIAPgOIADAEIADACIgOAPg");
	this.shape_100.setTransform(303.2,669.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2D2D2D").s().p("AgKAFIAEgHIAJgJIAHAJIABAAIgIAHIAAAAIgHAHg");
	this.shape_101.setTransform(302.65,668.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2D2D").s().p("AgIAGIAPgOIACACIgOAPg");
	this.shape_102.setTransform(303.675,669.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2D2D2D").s().p("AgIAGIANgPIAEADIgNAQg");
	this.shape_103.setTransform(304.575,670.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2D2D2D").s().p("AgGAHIgBAAIAMgRIADAEIgLARg");
	this.shape_104.setTransform(305.55,671.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#424B4F").s().p("AnZC1QiAgggzg7IgGgHIAGgHQBliDDYhMQDZhMEagCQCzgBCLAdQCLAcAiAtIAEAEIgBAFQgHAegQAYQgvBDjKBKQjLBKjXAcQhWAMhbAAQiUAAh0gdgAk/hyQjTBIhjB8QA/BBCrAbQCsAbC9gYQDOgbDJhIQDJhIArg/QANgSAFgYQghgjh7gZQiEgcisAAIgLAAQkRACjSBHg");
	this.shape_105.setTransform(367.3,660.7233);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5F6B73").s().p("AmRC4Qi1geg/hIQBkiBDRhKQCyg+DlgMQDKgLCrAdQClAcAlAvQgGAegPAVQgtBAjKBJQjLBKjSAbQhZAMhWAAQhiAAhdgPg");
	this.shape_106.setTransform(367.425,660.7579);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#50616C").s().p("EgB7AgtQiLgtgWhPQgLgngChJQgCguAChpQACiLgChEQgFh1gUhNIgHgeQgqiigKhDQgQhiAEh2IgjgkQjXjXiDikQjzkwgZjBQgRiFAGiQQAEhYAWi+QAYjXAJiIQAFg+gCiKQgDjKANhqQAViyBLiGQAJhVCHhWQB6hOCogtQCFgkBeAFQBdAGAgAtIgRANQgbgnhagDQhagEh6AiQifArh6BMQiEBTgGBLIAAACIgBACQhJCDgWCwQgMBnACDKQACCLgEA+QgJCKgZDXQgVC6gEBZQgHCPARCEQAYC7DxEtQCCCiDVDVIAnAnIADAEIAAAEQgFB3APBeQALBEAqCjIAHAdQAUBQAFB2QADBFgCCMQgCBqACAqQACBIAKAlQAXBVC7AqQC6ApDhgdQDQgbDJhIQDIhIAshAQAjgzgThpQgThphKiiQglhQgRiSQgLhZgLjSQgNjqgMhzQgOh/h/i5QhNhxjLjxQhziKg0hBQhbhzg7hZIgCgCQgyhJgahPIgQhAQA0CCB/CsQBMBoCtDNQDOD1BNBxQCAC9AOCCQANB1AMDqQALDQALBYQARCQAkBNQBOCpASBtQASBtgoA5QguBEjLBKQjLBKjYAcQhYAMhYAAQi0AAh/gqg");
	this.shape_107.setTransform(327.9776,468.2386);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#50616C").s().p("Ah8A3QhSgBhDgYIgygYQCeAqDJgVQC+gWBig8IgjAgQg1AihWAUIgEABQhvAXh7ABg");
	this.shape_108.setTransform(357.025,580.15);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#50616C").s().p("AiYA/IgLgBQhUgFhGgaIg0gYQDUA6DmgbQDagaBPhNIgFAKQgJANgOAMQguAnhYAZIgNAEQh2AciPAAQgyAAgkgDg");
	this.shape_109.setTransform(355.675,566.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50616C").s().p("AgDgxQi6gIiBBZQAPgSAfgUQA+gqBUgQIAIgBQB5gTBvAcQB9AfBQBUIgQAPQhth0jFgHg");
	this.shape_110.setTransform(317.15,424.4747);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#50616C").s().p("AlGAoQA5gtBMgfIAHgDQCWg2CNAWQCPAVB4BgIgNARQiah7i+AEQi8AFi+CCQANgRAcgWg");
	this.shape_111.setTransform(322.075,438.2316);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#50616C").s().p("AgdBOQAEhHAcgxIAbgkQgeA7gHBig");
	this.shape_112.setTransform(291.6,542.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#75848E").s().p("AlxgMQCpAvCeABQD4AACkh5QgJArhHArQhLAuhoAWQhNARhIAAQizAAiYhig");
	this.shape_113.setTransform(355.675,568.8685);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#75848E").s().p("Ai0A5QhmgXgpgyQB+AvClgCQDTgCCRhjQgQA8hYAmQhQAkhyAJQgeACgeAAQhOAAhEgQg");
	this.shape_114.setTransform(357.025,581.8934);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8C5CB").s().p("AGxQwQhLh2gSgxQgjhhgpkCQgrkNgLjKQgFhbhwi3Qg6hdi8kMQisjzhLiDQhzjIgGh2QA5CMCPDAQA9BTDTECQCrDQBLB2QBvCrANB3QATCyAPFEQAREGAxBrQBlDcAAB1QgShChHhvg");
	this.shape_115.setTransform(380.25,520.95);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90A4AF").s().p("AItcfQhbgPjwgKQi/gIhOgdQhzgrgQhyQgOhqguiQQhCjOgFgUQghh9AGhiQAIh5BBh1QgLgMhfg+QhyhIhJg6QkFjNgejRQghjjAIi5QAUj3AOjKQAVlHAjh9QBIkICuAzQAGhIBBhkQA+heBXhQQBZhSBLgbQBTgeAkAzIiQVMQA5CMCODBQA9BSDUEBQCrDRBMB1QBuCrANB4QATCyAPFEQASEHAwBqQBmDegBB1Qh5hZjAggg");
	this.shape_116.setTransform(345.4131,451.6194);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#75848E").s().p("EgAyAg1QjHgqgZhdQgPg3ADj1QAEj4geh0Qgwi9gKg+QgRhmAFh8QiyisiXiyQkmlcgbjTQgXizAXjpQAjkiAOjKQAEg+gCiBQgCiLADhDQALj9BeinQAGhHBqhMQBhhECPgxQCNgxBygFQB8gFAkA0IBsVLQA5CMCPDAQA9BTDUEBQCrDQBMB2QBuCrANB4QATCxAPFFQASEGAwBrQBFCXAWBkQAbB7gqA8QgtBBjKBJQjLBKjTAbQhbAMhWAAQh5AAhugXg");
	this.shape_117.setTransform(328.0071,468.2708);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#868787").s().p("AhFBFQhOgtgPgvQgKgiAcgUQAuglBCAAQAuAAAqATQArAUAcAhQAyA8gQBRIgBAGIgGABQgcAJgiAAQhRAAhQgugAiEg8QgRALAHAUQAMAnBGApQBLAsBNAAQAbAAAXgGQALhEgqgyQgYgegngSQgngRgpAAQg6AAgqAig");
	this.shape_118.setTransform(395.4511,690.025);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B7B6B6").s().p("AAgBiQg7gOgzghQgzgggSghQgTgjAdgUQAnggA5gDQA0gDAxAZQAzAZAYAtQAdAxgNA8QgbAIgfAAQgdAAgggHg");
	this.shape_119.setTransform(395.45,690.034);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#868787").s().p("Ah0CBQhFgagbgnIgDgEIABgEQAchlBKg5QBCgzBMAAQAqAAAkAQQAjAPAaAeQA9BIgSB8IgBAEIgEADQhHArhnAAQhPAAhGgZgAhjhXQhEA0gaBcQAaAhBBAWQBAAVBHAAQBeAABBglQAQhvg3hAQgug2hNAAQhFAAg8Aug");
	this.shape_120.setTransform(438.5389,695.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E4E4E4").s().p("AgdBMQhnglgfhOQAugrA7gOQA5gNAyASQA2ATAeAvQAhAygCBMIgmABQhUAAhHgag");
	this.shape_121.setTransform(442.7057,691.3161);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7B6B6").s().p("AgeCLQiEgTgqg+QAbhkBLg4QBEgzBOAGQBQAGAsA9QAyBEgRBuQhFAqheAAQghAAgjgFg");
	this.shape_122.setTransform(438.5907,695.5282);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#868787").s().p("AidCDQgpgQgPgaIgCgDIABgEQAThqBYhAQBPg6BhAAQAtAAAkAOQAkAOAXAbIACACQALAXgMAkQgLAigeAlQgpAyg9AcQg9AchFAAQg1AAgpgQgAhdhIQhSA7gSBfQANAUAkANQAkAMAtgBQAyABAugRQBJgYAvg6QAZgeALgdQALgegHgSQgqgvhSAAQhXABhLA1g");
	this.shape_123.setTransform(489.3439,697.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E4E4E4").s().p("AjFBKQAzh7CMgkQA7gPA2ALQA3ALAfAkQAJATgJAeQgJAdgYAgQhsAWhGAEIggABQhQAAhDgVg");
	this.shape_124.setTransform(490.125,692.9755);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B7B6B6").s().p("AiUB8QgqgPgPgYQAOhNA1g3QAwgyBEgXQBBgWA9AJQA/AKAiAnQAKAUgMAiQgLAfgbAiQhPBgiEAGIgNAAQguAAgngNg");
	this.shape_125.setTransform(489.3576,697.1939);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50616C").s().p("Aj8ABQgegSgUgXIgPgUQB8BrDggJQB6gFClgsQgYARg0ARQhpAkiMABIgJABQiUAAhcg8g");
	this.shape_126.setTransform(450.525,661.5032);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#50616C").s().p("AAFAuQhhgChGgtQgWgOgQgRIgMgOQA6AvBpASQCAAVCGgqQgNANggAMQg8AYhWAAIgRgBg");
	this.shape_127.setTransform(446.75,645.3112);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#50616C").s().p("AlobmQi7gNikgoQikgnhPg0QhLgvALg0QARhbA+mEQBJnOAjjIQA+lcAhhIQAohZBIh/QAshNBkikQCpkVBGiHQB2jjAkihIAVAEQgkCkh3DkQhHCJiqEXQhgCegvBRQhIB+gnBZQggBHg+FZQgkDOhIHGQg+GHgRBZQgIAlA+AoQBPAzCjAnQCfAmC2ANQDAANCXgSQCngVBQg6QAcgVABhRQABgzgPiPQgYjxAAiPQAAj7A3jcQArisCRjHQBZh7Dkj9IAXgaQBnh0AyjCQAvi0gFjeQgGjVgzjRQg0jUhZiiIAiAqQAqBAAqBwIACAIQB0FdgUFqQgVGFiwDEIgXAaQjjD9hXB4QiPDFgqCoQg3DbAAD4QAACPAYDtQAPCagBA1QgDBUgjAZQg/Auh0AYQhzAYiaAAQhRAAhKgGg");
	this.shape_128.setTransform(482.6072,529.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#50616C").s().p("Ai3A7QBRhsB6gTIATgCQBQgGAoAeQAVAPAEAQQgagTgogJQgvgLgxAIQhxARhKBlg");
	this.shape_129.setTransform(445.05,487.0493);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B8C5CB").s().p("AlDaoQACgcgdiOQgli3gQh6Qg8nQB5lbQAsh+BJhpQAzhJBchhQB4h9AggnQBVhlA6huQCXkjgNmpQgMl4h5j+QBaClA3DVQA1DUAHDVQAHDfgtCzQgxDChnB0QjxENhWB2QiZDPgsCvQhNE0AhGSQAIBjAQCdQAIBzgQAsg");
	this.shape_130.setTransform(540.9494,523);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#90A4AF").s().p("Aoba0Qhogcg6gtQg7gtAEgyQAEgtBFghQAzgZBtgYIC6gpQBngZAwgbQh7AZh5gbQh0gZhchCQhchCgxhbQgyhgAIhoQAGhLABiIQABiTAFhFQAPkEBejaQCBkUBskJQDUoJgMifIAWiEINalyQBaCmA2DVQA2DTAHDWQAHDeguC0QgwDBhoB0QjxENhXB2QiZDPgrCvQhRFDApG9QAWDlAAAcQADBpgkAaQgbAUgjAPQiJAah9AAQiQAAiAgjg");
	this.shape_131.setTransform(500.992,527.5887);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#75848E").s().p("AnybSQjfgdiPg6Qiag+AOhCICGs3QBop/ArhhQAxhuBqizQCCjVBChvQD5miAyjlINqndQBaClA2DVQA2DUAHDVQAHDeguC0QgwDChoB0QjxENhXB2QiZDPgrCuQhRFDApG9QAWDlAAAcQADBqgkAaQhhBGjZARQhAAEhEAAQiLAAiZgUg");
	this.shape_132.setTransform(482.6923,529.1473);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#868787").s().p("ACdCBQhRgNhRgeIgDgBQg8glhciSIgIgMIAOgEQCWgqBaBKQArAiAWA0QAWA2gEA8IgBAMgAiGhhQBWCDAyAgQBHAaBLANQABg0gUgtQgUgsgkgdQg1gqhLAAQglAAgqAKg");
	this.shape_133.setTransform(502.249,657.2397);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B7B6B6").s().p("AgFBNQg4gjheiRQCZgrBXBRQBNBFgHByQhPgMhRgdg");
	this.shape_134.setTransform(502.5543,657.1514);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#868787").s().p("AjWB6IgKgCIABgKQAGhrA/hAQA0g3BJgKQBKgKBDAnQBMAsAiBcIADAJIgJAFQiSBMixAAQgzAAg4gHgAgahoQhAAJguAvQg4A4gJBeQBtAMBlgQQBmgQBXgsQgghQhDgmQgvgagyAAQgNAAgPACg");
	this.shape_135.setTransform(542.575,658.3636);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E4E4E4").s().p("AhrBSQg4gTgHgmQgHgqA6g8QBTgkBSAlQBZAoAlBmQhJAYhOAFIgeABQg5AAgpgOg");
	this.shape_136.setTransform(546.5324,656.0269);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B7B6B6").s().p("AjTBvQAGhiA3g9QAzg5BKgKQBJgKBAAnQBGArAeBWQhbAwhtASQg5AJg9AAQg0AAg1gHg");
	this.shape_137.setTransform(542.475,658.3577);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#868787").s().p("AhPCgQggg7ADhLQAEhJAng4QAbgmAkgQQAkgRApAHIAHABIALA1QAOBHABAYQADAjgNAPQhDBPhfA2IgJAFgAACiIQgbAPgWAfQgiAwgFBAQgFBBAaA1QBTgwBAhKQAIgKgEghQgDgWgMg+IgHgmIgNAAQgZAAgYALg");
	this.shape_138.setTransform(571.9538,646.4582);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E4E4E4").s().p("AgqBnQgggPgKghQgLglAUgyQAXgqAkgUQAkgWAtAHIAWB4QAGAvgMAOIgDAEQgWAbgjAHQgLACgKAAQgWAAgUgJg");
	this.shape_139.setTransform(572.8326,641.7336);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgbQAogdAzAIIAWB5QAGAvgMAOQhDBPhcAzQgagwgCg7g");
	this.shape_140.setTransform(571.9369,646.2635);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgbQAogdAzAIIAWB5QAGAvgMAOQhDBPhcAzQgagwgCg7g");
	this.shape_141.setTransform(571.9369,646.2635);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#50616C").s().p("AgEAtIgIgBQhCgHgzgTQg2gTgcgdIAPgPQAyAyB8AQQB7APBvgfQgPAMgjALQg3AShKAAIglgBg");
	this.shape_142.setTransform(518.775,595.955);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#50616C").s().p("AgGAsIgHAAQhGgFg0gRQg6gTgbghIARgOQAuA5CUAIQCIAJBegjQgQAOgkAOQg8AWhSAAIghgBg");
	this.shape_143.setTransform(524.425,612.3465);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#50616C").s().p("EAKsAieIgCgBQhyhHjOmdQjPmdiwoBQkYCGkDgVQkDgUjrivQjbiji1kgQi1keh4l4QhqlPgllNQgklNAqj/QAfi4BFhwQBEhxBnghQG4iNJJgSQG9gNHvA6QGYAxF6BYQFKBMBtA5QCNAsBYDxQBODVAbFMQAYExgYE/QgYE6g+DMQg7DChiEnQheEZgjB8Qg6DKgUCiQgYC6APC0QAJBnAcCOQAOBHABAXQADAkgNAPQhaBqiCA4QiAA3iXAAQiVAAiag3gAgFMIQC3IUDUGkQDGGIBoBCQDmBRDRgqQDQgqCDiZQAIgJgEgjQgDgWgMg9QgciRgIhmQgQi3AYi8QAVikA6jKQAkiABdkWQBtlKAwifQA/jQAYk6QAXk6gZkuQgclbhTjTQhUjTh8gnIgCgBQhjgzk2hKQl9hcmtgyQmTgwlzAAQqrAAnzChQhgAfhBBsQhBBsgeCyQgpD8AkFLQAkFKBqFNQB3F0CzEcQCyEcDZCiQDoCsEAATQEBATEUiIIALgFg");
	this.shape_144.setTransform(433.1506,445.2484);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B8C5CB").s().p("Aiwc2IgsiGQg+jbARlBQAQkpB1lzQBFjTAjh2QA+jOApi9QBWmIgEn5QgEo9iGkDIAZAKQBiBxA6D1QA0DeANEmQAMEVgZEQQgZERg4C4QhTETiPGpQhtFUgcDbQgiEGAtEJQALA+ARBXQAJA6gNAQQABgqgUg+g");
	this.shape_145.setTransform(596.7079,453.95);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#90A4AF").s().p("AMnfLQgChXBuhCQA/glCbg0QhvASg8gkQg7gjgRhaQggisBVjzQARgwA9iZQAyh8AVhJQAmhygRhsQgViChhg8Ih6hHQhGgqgsghQh3hcgjh3QgtjEgVhkQgmisgVh8Qh4Glj4D4QhoBphoAxQhkAuhLgRQjMgvjyjoQjQjHh5jVQgXDNh/CsQhyCai+B1Qiskxhpl8QhklngTlVQgSlWBGjjQBKjxCcgyQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDSAbFJQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEHAtEJQAKA+ASBXQAJA6gNAQQioAlimACIgMAAQlCAAgDipg");
	this.shape_146.setTransform(433.1901,436.4819);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#75848E").s().p("EAKwAiVQhshEjLmSQjTmki1oPQo1EVnZllQjMiZirkHQicjyhyk1Qhrkjg1k1Qg0kuAIkEQAIkJBGiqQBKi1CEgqQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDSAbFJQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEHAtEJQAKA+ASBXQAJA6gNAQQiFCbjWArQhJAOhLAAQiQAAiXg1g");
	this.shape_147.setTransform(433.1969,445.1576);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#868787").s().p("AiPArQgSgOgNgkIgCgGIAFgFQAeggAugOQAvgOA0AGQA3AHAsAaQAuAZAWAlIAGALIgMAFQhVAjhhAAQhbAAgjgfgAhUgsQgoALgbAZQAJAYAMALQAgAbBVgCQBUgBBKgcQgVgcgngUQgmgUgugFQgNgCgOAAQgfAAgbAIg");
	this.shape_148.setTransform(297.75,636.06);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B7B6B6").s().p("AiHAkQgQgOgLggQA/hCBuARQBtAPArBJQhOAhhcACIgLAAQhUAAghgcg");
	this.shape_149.setTransform(297.6,636.0413);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#50616C").s().p("AhlLBQgggcgShoQgLhCgQi2Qgck1gginQg3kjhpi7IgFgIIAHgGQASgNAegRQA9ggBEgQQDYgzDWCAQBwBDAvC4QAkCNgDDGQgDDvg4DxQg2DngzAcQgsAYg7AOQg5ANg3AAQhYAAglgfgAkZqnQg2AUgoAcQBoC9A3EjQAfClAcE1QAQCvAKBAQARBnAbAXQAkAfBkgGQBpgFBLgqQApgWAzjZQA5jvAEjyQADjegviTQgviUhbg2QiUhYiWAAQhfAAhYAig");
	this.shape_150.setTransform(293.4615,569.9235);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#75848E").s().p("AhfK5QgjgegUiWIghlVQg3oaiYkQQAQgMAdgQQA6ggBDgQQDUgzDUB/QB3BHAsDUQAlCygTD5QgRDWgxC6QgvCygoAWQhMAqhrAHIgfABQhQAAghgdg");
	this.shape_151.setTransform(293.6336,569.89);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,254.1,373.7,474.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("EAk7gc/I1oAAQh0AAgxBMQgyBLAvBqIAzCDQAzCRAABJQAACph3B2Qh3B4ioAAQipAAh3h4Qh3h2AAipQAAhJAziRIAziDQAvhqgyhLQgxhMh0AAI1nAAIAAVnQAAB1hLAxQhMAxhrguQg6gahIgZQiRgzhJAAQipAAh3B3Qh3B2AACoQAACpB3B3QB3B2CpAAQBJAACRgyQBIgaA6gZQBrgvBMAyQBLAxAAB0IAAVnMA6AAAAg");
	this.shape.setTransform(445.375,541.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1FdBIAA1oQAAh0hLgxQhMgyhrAuQg6AahIAZQiRA0hJAAQipgBh3h2Qh3h3AAipQAAinB3h3QB3h3CpAAQBJAACRAzQBIAZA6AaQBrAuBMgxQBLgyAAh0IAA1oIVnAAQB0ABAxBMQAyBLgvBqIgzCDQgzCRAABJQAACpB3B3QB3B2CpABQCogBB3h2QB3h3AAipQAAhJgziRIgziDQgvhqAyhLQAxhMB0gBIVoAAMAAAA6Bg");
	mask.setTransform(445.375,541.9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgHFKQg0gdgugzQg6hAghhVQgvh4APiNQAMh1BCgyQAqggA5AAQAtAAAtAUQAuAUAjAjIABABQCOCugnDqQgTB2gyBWQgVAfgtAAQgtAAgzgegAiekjQgpAvgJBWQgOCIAtB0QAfBRA4A+QAqAuAwAcQAxAcAoAAQAiAAAPgVQAwhSAThyQAljhiIinQghgfgqgTQgqgSgoAAQhCAAgpAvg");
	this.shape_1.setTransform(298.8652,236.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgMAAgTQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAATgNAMQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(297.625,237.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("Ag7BgQgZgnAAg5QAAg3AZgoQAZgoAiAAQAjAAAZAoQAZAoAAA3QAAA4gZAoQgZAogjAAQgiAAgZgog");
	this.shape_3.setTransform(296.025,244.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E73B5").s().p("AhaCLQglg6AAhRQAAhRAlg5QAmg6A0AAQA1AAAmA6QAlA5AABRQAABRglA6QgmA6g1AAQg0AAgmg6gAhLh8QggA0AABIQAABJAgA0QAgAzArAAQAtAAAfgzQAgg0AAhJQAAhIggg0QgfgzgtgBQgrABggAzg");
	this.shape_4.setTransform(296.025,243.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53A2D9").s().p("Ahlh8QAkg7AyAAQAvAAAjA4QAiA2AABMQABBAgZAzQgYAxgmAQQhfhtgVjGg");
	this.shape_5.setTransform(297.65,242.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#538BC8").s().p("AhSCEQgjg2AAhOQAAhNAjg2QAig3AwAAQAxAAAiA3QAjA2AABNQAABOgjA2QgiA3gxAAQgwAAgig3g");
	this.shape_6.setTransform(296.025,243.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiPBAQgqicAXjvQA1gVBAATQA8ASAuAtQCNCsgnDmQgUB0gwBRQgEAHgJAHQiphGg4jRg");
	this.shape_7.setTransform(304.0753,236.0668);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AA2FZQhCgRhBhAQhKhHgmhkQgsh1AOiHQARilB4gWQAxgJA2AUQA0AUAoAnQCNCrgoDnQgTBzgwBSQgTAbgmAAQgQAAgUgFg");
	this.shape_8.setTransform(298.9132,236.7328);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AhVgCQgJgRgDgTIgBgQIANAiQAWAhAsAMQAgAJAagOQAjgTAUg4QAJAtgIAOQgbA0g9AAQhCgGgag0g");
	this.shape_9.setTransform(267.2632,221.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AguBDQgxghgIg+IABg4IAJAsQASAwArAdQAWAOAggGQAkgHAggeIAOAPQgYAqgqAOQgRAGgPAAQgbAAgZgSg");
	this.shape_10.setTransform(270.2,208.6044);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("AhGAFQgOgcgGgkIgDgeQABALAHAQQAJAeASAYQA0BKBkgCQgEAZgCAAIgTABQhhAAgqhVg");
	this.shape_11.setTransform(272.85,199.2645);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2D2D").s().p("Ag8gQQgFggAEgkIAEgeQgBANABAPQACAfAIAcQAbBYBUAjIgIATQhigcgShng");
	this.shape_12.setTransform(281.1779,192.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D2D").s().p("AiSgoQAXhGBAgcQA/gcBLA3QBLA3AIBMQhAgqhIgFQiPgMgpC7QgKh7AWhBg");
	this.shape_13.setTransform(292.8568,205.8555);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AAAhNQAygKArAVQAvAWAZAyQg6gnhwAbQhvAZgxA+QAziHBygXg");
	this.shape_14.setTransform(295.85,158.3637);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AhxALIgggXQAmAWBTACQBkABA4gtIAOARQg1AqhYAFIgEABIgFAAQhBAAgsgWg");
	this.shape_15.setTransform(463.725,473.5521);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("AhlASIgggUQA3AVBUgKQBVgJAbggIAQAOQgPASgiAMQggANgpAFIgCABQgRACgQAAQgtAAghgPg");
	this.shape_16.setTransform(461.1,431.3675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("Ah/AQQAugiBMgMIADgBQBjgNA0ASIgHAVQg6gUhrATQhcAQghAbg");
	this.shape_17.setTransform(447.275,395.4774);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("AioAVQAxghBDgWIAHgCQBEgRA+ADQBEADA0AaIgKATQhRgph2AUQhpAShfA4g");
	this.shape_18.setTransform(428.35,358.8586);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("Aj8ATQA/grBTgSIAFgBQB3gaB0ARQBtAPA5AqIgNASQhRg9irACQi+ADiQBcg");
	this.shape_19.setTransform(417.925,316.3509);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAbhMQiugejFAjIBHgVQBcgVBqAEIAMABQCOAKBkAuQB4A1AuBkIgUAKQhEiSjmgpg");
	this.shape_20.setTransform(423.45,278.0424);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("AAUgqQjAgUh/ApIAygYQBJgYBrAAIAHAAQB+AEBfAeQBsAiAhA9IgTAKQgwhYjVgYg");
	this.shape_21.setTransform(435.2,243.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("ADwWFQgmhNgCiDIgBgVQgOgrABgwQABhHApgWQAngWBEgNQBLgOAkAPIAEABQgLiYhEiNQhfjDjEiRQhYhChwhFQhGgriChKQjIhyhVg9QiMhjhEhnIgHgLQgmhCgKhNIgDhAQAWC4ClCSQBlBaESCbQCEBMBFAqQBwBFBZBDQDUCeBgDWQBDCWAFCeIgVADQgCgJgMgEQgegNhFANQg/AMgmAVQgeAQAAA8QAAAvAMAkIABADIAAAXQADCBAjBGQBBCDCwAAQCIABBThXQCQiWgPmPQgEh7hAjKQgnh5hdjxQg5iWgWg9QgkhmgIg3QgUiHAmigQAahyBPjIQAlhdARiiQALhgAIi4IAAgGQABhKAUheIAThRQgLBGgHC0QgJDAgKBeQgSCmgmBgQhODHgaBuQglCdAUCFQAIA0AjBmQAWA+A5CSQBfD4AlB2QBBDMAEB8QAPGaiXCbQhZBdiRAAQi9AAhHiPg");
	this.shape_22.setTransform(391.9637,362.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50616C").s().p("AAAAZQAOhLgDhcIAVAAQABB+ghBcQgPAvgQAVQAXhDAIg0g");
	this.shape_23.setTransform(436.0254,476.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8C5CB").s().p("ACMP6QgRi4hMjXQgJgaiDlLQhRjKgViBQgdi0A4jJQAThDAjhZIAyiDQAahIA7k7QA4knAehBQgKAwgIBvIgODYQgWEngxB9QhMDGgbBsQgmChAUCIQAKBBA0CMQAeBVBMDFQCUGJAGCxQAJD4g1CbQgHAPgHALQgUAxgfAkQBBjqgVjpg");
	this.shape_24.setTransform(457.398,355.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#90A4AF").s().p("AJyXpQgwgFgZglQgbgnAOg4QAbhtgEigQgFi8gzidQgviViCicQiAiaixh6QhnhIiohXIkKiKQiNhPhPhKQhhhbgkhvIJUwSIQMAAQgKAwgIBvIgPDXQgWEngxB+QhNDFgaBtQgnChAVCIQAJBAA0CNQAfBVBMDFQCUGIAHCxQAJD5g2CbQgHAPgGALQgfBMg1AmQgpAdgrAAIgNgBg");
	this.shape_25.setTransform(391.4148,358.4825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#75848E").s().p("AD1VuQgVg0gFhGQgChDgCgOQgNgoABgvQAAhCAjgUQAzgbBPgKQBagMAKAlQgFiSg8iOQhfjejYiiQh7hdjKh1QjxiMg4glQiVhjhNhfQhchzgRiNIJLuPIQViEQgKAwgIBvIgPDYQgWEngxB9QhNDGgaBsQgnChAVCIQAJBBA0CMQAfBVBMDFQCUGJAHCxQAKEXhECgQhXDOjWABQjHAAg+ihg");
	this.shape_26.setTransform(391.4145,362.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D2D2D").s().p("AALAQQhIgLgrAtQAMhIAggbQAcgXAlAOQAiANAdAkQAdAjAIAmQgbgmhDgKg");
	this.shape_27.setTransform(480.575,160.0601);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#50616C").s().p("AoAKzQgahrAuhXQAdg2BhhjQBBhBAigoQA5hDAnhGQASggAmhPQBzjvBgiFQCqjnDyiHIAOAPQixD4hQEzQguCxgeExQgQCkgNA6QgWBggsAiQhAAwhlgKQg9gGh7gmQhSgZglgGQg6gKgbASQgaAQgGAtIgHA7gAl4JVQAmAGBZAcQB3AkA5AGQBgAKA5grQAogeAUhcQAMg5APifQAdknArisQBLkpCjjxQjbCEicDcQhaB9hrDiQglBMgUAlQgoBHg6BFQghAnhDBEQhWBWgbAsQgsBGAIBQQALgUARgKQAXgPAlAAQAQAAATACg");
	this.shape_28.setTransform(52.2703,114.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8C5CB").s().p("AikGUQAXkaAUhuQAmjRBojXQBfjEBIg3IAUgNQiJDKhJDyQg3CwgcDjQgPB6gUDDQgUCMgvAqIgUAHQAZgyASjfg");
	this.shape_29.setTransform(80.375,111.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#90A4AF").s().p("Aj2KBQhYhBgIhuQgGhIA1hlQBAhpATgiQAuhUAwiDQA4ibAYgzQBujuEQiwQiJDKhKDyQg3CxgcDiQgPB7gUDCQgTCNgvAqQgoAQgmAAQg9AAg4gpg");
	this.shape_30.setTransform(66.7991,111.9342);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#75848E").s().p("AnwIsQAVg3A+hDQBQhRAsgwQBOhVAxhXIBWiuQBAiCA7heQC7kjEXicQiVDQhRD6Qg7C4gdDqQgPB/gUDIQgWCPgzAnQg/AwhogNQg4gGiDgoQhwgigtADQhEAFgKBNQgVhWAbhHg");
	this.shape_31.setTransform(52.3406,111.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#50616C").s().p("AEnAqQhYihiJhFQh5g9iZARQiZASisBeQgaAVgMAFQgMAGgHgHQgKgIAJgXQAIgTAmhEQAxhaAMgZIABgCIACgBQB6hdC0gRQC0gRDGBAQClA1BzBYIAHAGQBLA+AUA6QAKAdgEAQQgahShshRQhthQiYgxQjAg9iuAPQiuAQh2BYQgVApgnBIQglBDgHARIAYgSIACgBQCxhiCegRQCegSB+BAQDGBjBiEVIABAEQAnBjAFBhQACAwgFAdQgijzhYihg");
	this.shape_32.setTransform(142.9259,77.5455);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8C5CB").s().p("AFqBgQhSg4hoguQkriGk9ALQBwgmCPAIQCGAJCFAuQCDAtBfBFQBkBIAhBPQgMgUhDgtg");
	this.shape_33.setTransform(156.525,52.3723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#90A4AF").s().p("AD0BsQg9i3hthnQhihdjDgaQgvgGhWgFQg+gDgMgGQgigOACgdQACgdAhgQQCDgqCZAPQCKAOCGA6QB9A1BaBNQBZBMAWBIIgGENIilD6QANicg5itg");
	this.shape_34.setTransform(156.0944,77.5179);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#75848E").s().p("ABXi+Qj+iWl1DNQgkAdgHgCQgHgDAPgfQA8hrAohQQB5hcCygPQCfgNCsAyQCiAvB3BVQB6BXAcBcIiuIQQhCnekDiYg");
	this.shape_35.setTransform(143.3744,78.1409);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_36.setTransform(470.725,233.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2D").s().p("AgaBpQgUgFgGgjQgGgiALgqQALgsAWgbQAVgbAUAFQAUAGAGAiQAHAigMArQgLArgWAbQgRAXgRAAIgHgBg");
	this.shape_37.setTransform(467.4865,239.8818);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E73B5").s().p("AgxCwQghgIgHg5QgHg5AWhLQAThDAhgtQAggsAeAAQAGAAAFACQAiAIAGA/QAFA3gUBHQgUBEghAsQgfAsgfAAQgGAAgEgCgAgHh3QgeAqgSA+QgTBBAFA0QAEAxAVAGQAVAGAcgnQAggpAThDQAThEgFgzQgCgWgGgOQgHgPgKgCIgFgBQgVAAgaAmg");
	this.shape_38.setTransform(467.8972,238.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53A2D9").s().p("AhBAaQAUhEAhgrQAggsAcAIQAbAIAFA3QAFA2gUBEIgEANQgyAVhbAZQABguAOgzg");
	this.shape_39.setTransform(467.9093,233.6129);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#538BC8").s().p("AgvCnQgbgIgFg2QgFg2AThFQAVhFAggrQAggsAcAIQAbAIAFA2QAFA2gTBFQgVBFggArQgbAlgYAAIgJgBg");
	this.shape_40.setTransform(467.9,238.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2D2D2D").s().p("Ai6FGQAhlTBRixQBFiVBUAAQAoAAAcAiQAXAcAKAqQAKArgHAuQgtEHigCIQgyArg4AZIgvAQIgOADgAg4ixQhMCqggFAQBXgbBMhOQB/iDAnjjQAGgpgIgmQgJgngUgXQgXgbgeAAQhKgBg/COg");
	this.shape_41.setTransform(474.1735,229.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhDh1QA1huA/gTQA4gQAkA5QAkA3gMBSQgTBsgmBUQgvAvhOAhQg2AWhgAYQAjjtBBiCg");
	this.shape_42.setTransform(475.1844,221.2235);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1E1E1").s().p("AhSiMQA3iPBFgiQA9geAqA5QAqA4gNBYQgtEFidCFQgxAqg2AXIgtAQQAckqBCirg");
	this.shape_43.setTransform(474.2642,229.0328);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D2D2D").s().p("AhHgLIARgNQAYAfA0AEQAbACAXgEQgdAMggADIgQABQgyAAgQgkg");
	this.shape_44.setTransform(498.025,209.1181);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D2D").s().p("AhiAgIAFgTQA/APBGgiQAkgRAXgWQgOAXgaAWQgzAug4AAQglAAgNgOg");
	this.shape_45.setTransform(499.875,200.075);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D2D2D").s().p("AhgA5QBDgOBFg8QAjgfAWgcQgTAmgiAmQhBBNhHAAg");
	this.shape_46.setTransform(498.275,193.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D2D2D").s().p("AhWBaQAxgPBChcQAhgvAZgsQgTA0gfA1Qg9Bqg4AGg");
	this.shape_47.setTransform(494.95,187.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D2D2D").s().p("Ag2hFQAfgpAigUQAjgVAbAJQAsAQAJBMQAEAmgEAiQhAgwg2AZQg5AZhOB6QgCh1BLhig");
	this.shape_48.setTransform(478.2599,201.7271);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#50616C").s().p("AiPaYQkqggkZiBQkZiCjjjSQiZiOhoibIgGgHQhAhkgihnQgchWAKgEQAoCLBnCYQBoCaCSCIQDhDQEWCAQEVCAEnAfQGMAvEeg7QCogiDuhuIBSgmQDEhXBxjUQBwjUADkfIAAgDQAMglACgVQABgOgCgQQgEgdALgkQAQg7A+iJQA5h+gXiUQgNhWhAiqQgphtgOg0QgXhYAFhEQAGhaggiIQggiNg+iMQiXlUjRhvQkriek8AUQhjAHhYAXIhFAXQiHhqk8gIQlDgJj2BpQjTBZiJCuQi1DkgmFlIgVgCQAmlsC5jpQCNiyDYhbQD9hsFCAHQE7AGCPBuQCmg8DLAKQEBAMD6B/QB7A/BtCWQBLBpA8CGQBACNAiCQQAhCPgHBjQgEBBAWBVQAOAyAoBsQBACoAOBbQAYCbg7CEQg8CFgQA5QgLAjAEAZQACASgBAOQgDAYgMAmQgCEmh0DZQh0DYjLBaIhRAlQi8BYh6AiQjNA6j6AAQigAAiugVg");
	this.shape_49.setTransform(335.5281,170.8315);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8C5CB").s().p("AI+YRQASAAAogvQAtg1AshSQB3jeAXkOQgChUAdiOQAeiUAohdQBFiZhmj0IhQixQgohdAAgwQAAiFgDgvQgHiPgbh5QhQlkj6ioQiehpkPgeQkPgdh9BLQiKhKilg4QjZhIisgEQChgKDAAmQDJAnBTBBQCeg8DCADQELADEACCQDSBqCYFVQBACNAhCQQAhCMgHBgQgFBQAkBzQAVBCA1CKQAsB/AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgCEFhdDIQhaDDigBpIgUgQg");
	this.shape_50.setTransform(388.0192,157.4208);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#90A4AF").s().p("AJbZBQhMgIjrgkQj4gmi2gWQjZAZj6hHQjkhBjaiGQjQh/iVidQiWiegviPICO1TICFkJQByk3DWimQC2iNDygaQDNgWDUA/QC5A2B3BdICLgzQBhggBYgLQD5geD4B+QDSBqCYFVQBACNAhCQQAhCMgHBgQgFBQAkBzQAVBCA1CLQAsB+AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQhdAphqAJQgfADgjAAQhKAAhfgLg");
	this.shape_51.setTransform(335.1442,163.1221);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#75848E").s().p("AiKaEQofg6m2loQi6iZiCi1Qh8itguiiIC86mQBnjwDHiQQCuh+DjgnQDKgkDGAnQC7AkBvBXQCthBDmgIQFFgMD8CAQDSBqCYFVQBACNAhCQQAhCMgHBgQgFBQAkBzQAVBCA1CLQAsB/AHBbQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQiBA8hGAeQh7A0hwAcQi2AtjkAAQibAAiwgUg");
	this.shape_52.setTransform(335.1442,171.7386);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#50616C").s().p("AFmUxQg8gUgugqQgcgagpg1QgggrgSgRQgegcghgJQgfgHglgHQhIgPgfgOQgygWgsgyQgagdggg2QgUghglhEQgohKgRgbQgegwgUgQQgOgKgagIQgPgFgogIQhPgSgtgSQhQgfg/g5Qh3hshUh2QiUjOAtiGQAGgSAbgSQARgKAwgXQBPgmAqgcQBIgxAqg/QBAhgBOiRQAwhZBUioQBujaAvhQQBNiEAxgXQBMglCGgIQCPgKCUAdQF2BJCcD9QBYCQBBDhQBADgAaEAQA8I/iPGUIgCADQi/EJiFB2QiGB3huAAQgiAAgigMgAAK0jQh/AJhFAhQgrAVhOCFQguBPhqDTQhUCogwBaQhPCRhABhQgsBChLAzQgrAehSAmQgpAUgQAJQgZAQgEAMQgkBqBnClQBVCKCUCGQA9A2BKAeQAsARBOARQApAKARAFQAdAJAQAMQAXASAfAyQATAeAoBJQAlBEATAgQAgA1AYAcQApAuAuAUQAeAOBEANIBFAPQAmAKAhAeQAUATAiAtQApA2AZAXQArAnA3ATQBxAmCPhxQCPhwDVknQCNmQg7o5Qgaj8g/jdQhAjghYiOQhJh3iHhSQiGhSiyghQhsgUhpAAQglAAglACg");
	this.shape_53.setTransform(110.0982,180.9828);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6ACB5").s().p("ACnOfQhBgfgvg3Qgug1gPg+QgjiHhNhSQhRhXhugIQhwgIhvgtQhqgrhPhCQhQhDgdhIQgghOAjhCQAfiqBljbQBjjWCGjEQgIBpAHBtQBQiuC9hbQCvhUDWAIQDXAICrBhQC5BnBICtIgCAUQgCChgbDfQgdDtgvDZQh0IdiTBWQhUAyhVAAQhEAAhEggg");
	this.shape_54.setTransform(99.6233,177.7825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F598A3").s().p("ACkRGQhBgfgvg2Qgug2gPg9QgjiHhNhTQhRhXhugIQhwgIhvgtQhqgqhPhCQhQhDgdhIQgghOAjhDQAfiqBmjdQBkjYCHjEQCOjNCLh5QCYiEB1AAQCzgBBXAKQCcASBmA8QEPCfgyHrQgCCggbDgQgdDtgvDZQh0IciTBXQhUAxhVAAQhEAAhEggg");
	this.shape_55.setTransform(99.9127,161.0411);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#75848E").s().p("AASBXQBRjFhXj2QAlBGBNBrQA1BHA0BBQh+DBiJBmQhDAwiDA5QCyhdBGixg");
	this.shape_56.setTransform(177.075,278.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#75848E").s().p("AgPglQAPAiAQApQgagwgFgbg");
	this.shape_57.setTransform(176.7,238.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#90A4AF").s().p("AFoUnQhWgdhMhkQgngzgRgQQghghgmgJQhmgUgogNQhCgVgzg6QgmgrhQiUQhKiHgggYQgTgPgqgLQg3gLgggIQh+gghXhOQiOiBhWiGQhxiwAmh0QAGgSAngVIBYgrQCKhFA9hdQBIhsBbitICXkoQCrlSBEggQBIgjCBgJQCOgJCSAbQF1BGCbD8QBWCMBADeQBBDeAbD8QA9I+iRGYQjWEpiOBxQhuBXhfAAQghAAgegKg");
	this.shape_58.setTransform(110.1516,180.9954);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#50616C").s().p("ADvLbQhnAAhTgoQhTgngyhIQgwhHgciSQgRhZgVjOQgilOgsiOQhLjziig6IAGgVQDWAfCODCQBTBxBmEFQA4CKAaA1QA9B3BVBrQAxA+BXBcQBJBNASAfQAeAxgYAmQgZAohGAbQhGAbhTACgAjwl0QAkCIAgEuQAUDJARBZQAbCQAuBDQAwBGBRAlQBSAmBmgDQBNgCBBgYQBCgYAVgjQASgcgZgoQgSgdhFhIQhXhcgyhAQhWhsg+h5Qgbg2g4iLQhdjthEhnQh0iuing1QB+BZA8Dlg");
	this.shape_59.setTransform(568.6133,112.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8C5CB").s().p("ABcEuQhRh5hTjKQhXjbgrhdQhHichLg7QBrBJBNCIQAqBKBRDJQBODDBBBvQBmCwCRCDQiRhShwilg");
	this.shape_60.setTransform(573.15,105.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#90A4AF").s().p("AEAJ4QhIgSg0g0Qh1hzhIkgQgThLgjipQgfiagVhKQgehthDhSQhMhdhmghQgMgGgKgDQEAAlCcEZQAvBWA+CeQBDCoAcA2QBQCdBXBmQAvA4BFBEQAiAggVAgQgUAdg3ANQgbAGgcAAQggAAgigIg");
	this.shape_61.setTransform(564.1009,104.2392);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#75848E").s().p("AhDI9Qg6hUgejSQgckGgRiGQgfjzg4iFQhLiwiLgyQEAAlCbEZQAwBWA9CdQBECoAbA2QBeC2C9DIQBHBLASAdQAcAugVAhQgXAmhFAaQhHAahVABIgDAAQjRAAhkiTg");
	this.shape_62.setTransform(568.275,112.2503);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#50616C").s().p("Aj/EyQiIhPgwiJQgQgrgEgsIgCgkIABgGIAFgDQAzgeBbg6QCyhyBZghQCRg4CPAhIACAAQCUBDAwAqQAaAXgFASQgHAag9gGIgCAAQhPgQheAVQheAVhWA1QhiA7hHBbQhIBbgkBuIgFANgAgqkAQhWAiitBuQhtBFgdARQAAA8AaBBQAuBxBvBFQBHjKCsh7QCfhzCrAAQAoAAAmAIQAWACANgDQAJgBABgDQABgHgagUQgygmiBg6QgygLgxAAQhZAAhaAig");
	this.shape_63.setTransform(498.2903,70.0499);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B8C5CB").s().p("Ai6AqQBBgqBDgeQDChcB0AsQhRgIh5AuQgtAQkIB1QASgRAzgig");
	this.shape_64.setTransform(493.525,51.0356);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#90A4AF").s().p("AksA+QDCh6BQghQCWg/CQAfQAjAggCATQgBARgeAOQhmAehAAeQiTBYhGAVQggAKgcAAQhNAAgyhKg");
	this.shape_65.setTransform(494.7781,53.4789);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#75848E").s().p("AmvBXQgOgqgFgqIgBghQAtgaCBhSQBnhBA+gfQC3hbCoAmQCuBOAgAqQAbAkhPgHQhRgRheAVQhhAVhaA3QjMB9hNDoQiGhOgviGg");
	this.shape_66.setTransform(498.3205,69.8175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#50616C").s().p("ArXUCIgCAAIgCgCQiOhagfmNQgSjkAWkuQAVkcA0kbQAzkcBDjHQBGjUBHg+QCzieDBgwQCugsBlA8QAYAOAZBBQAQArAiB5QBqFvBqC0QC8E/EtAzIAFABIADAEQA4Bng+CPQg0B3h0B1QhoBng8AQQgdAIglABQgWAAgsgCQg7gDgZADQgrAFgXAYQgSARgSAhQgLAUgVAuQgfBDgSAeQghA2gmAdQgkAagzAVQggAMg8ASQgyAPgSAHQggANgOAOQgIAHgXApQg+Bvg/A4QhxBjilAAQgkAAgrgFgAjDzeQi5AxiuCZQhAA4hEDHQhEDHg0EdQg1ElgVEiQgUEjARDfQAPC7ApB4QApB3BAArQDCAYB9hiQBGg2BFh7QAZgrAJgJQARgRAjgOQAUgIA0gQQA8gRAdgMQAxgUAigZQAjgbAfgxQASgeAdhBQAWgvAMgWQATgiATgUQAVgVAfgJQAZgHAmAAIA0ACQAqADAWgBQAjAAAagHQA6gQBjhkQBvhwAyh0QA4iCgvhcQkyg2jAlDQhsi3hqlzQgghvgPgpQgYhDgUgMQg2gghMAAQg7AAhJATg");
	this.shape_67.setTransform(529.0788,175.1442);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6ACB5").s().p("AqCO4Qg7gbgpirQgmiegRj6QgjoSBEnnQCDBSDIA8QAbhiBWhpQBehzBzg7QCFhGB9AdQCTAhB3ClQBjDrBUCDQBsCrBpAnQhdEbjRBEQg4AShfAJQhPAHgUAMQgmAZhCCFQhECJg6ArQg5ArhqgBQg5AAgWADQgrAGggAWQgdATgiBBQgnBOgYAnQhJB5htAAQgVAAgXgFg");
	this.shape_68.setTransform(524.9053,189.1447);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F598A3").s().p("AqDStQhUgogulCQgqksAJmTQAJmfA7ktQBDlTBuhBQECibCQgoQCwgxBnBWQAuAmBOC7QAvBvBtETQBmD3BVCJQBxC2BtAoQheEcjRBEQg4ASheAJQhQAHgTAMQgmAZhDCFQhECJg6ArQg4ArhrgBQg5AAgWADQgrAGggAWQgdATgiBBQgnBOgXAnQhKB5htAAQgVAAgXgFg");
	this.shape_69.setTransform(524.9785,164.6299);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#90A4AF").s().p("ArWT3Qh/hRgklbQgfkxAsmvQAqmTBYlLQBblXBehTQCzieC/gvQCpgpBfA5QAgATAzCwQBLEFAsBuQDQIRGKBCQBQCTijDbQg8BThNBBQhHA9goALQgkAKh5gFQhdgEglAlQgaAag3B2QgzBug3ApQgzAnhyAiQhrAggWAWQgHAHgnBEQgpBGgqAtQh0B5i1AAQgmAAgogFg");
	this.shape_70.setTransform(529.0944,175.1422);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#50616C").s().p("AAHAaQg+AAglgaIgZgZQAvAbBDADQA7ABA3gQIAHATQgzARg5AAg");
	this.shape_71.setTransform(457.2,503.35);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B5C5C").s().p("AgRAxQgqgSgegcQgmghADgbIACgLIALABQBbAOA8AWQA9AVAVAZIADAFIgBAEIgDAOQgEANgFAIIgCAGIgFAAQgQAEgSAAQgrAAgtgUgAhKgMQAgAdArAQQAzATArgGQAFgOABgGQgTgVg1gRQgzgShNgMQAHAOASAQg");
	this.shape_72.setTransform(358.364,648.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#828282").s().p("AgsAWQhJgrAFgjQBXANA7AUQA8AVAUAYIgDALQgEANgEAIQgQADgSAAQg3AAg6gjg");
	this.shape_73.setTransform(358.3369,648.2959);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#868787").s().p("ABqCSQgSgWg6gVQg6gThVgNIgPgCIAGgMQAHg5AxhBQA3hJBBgWIAKgEIAEAKQBODEgVBjIgFAYgAgwg0QgpA1gKAyQCVAYA5ArQAJhchAiiQg2AWguA+g");
	this.shape_74.setTransform(358.2811,636.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4E4E4").s().p("AAJBcQg3gngQgeQgQghAOgoQARgvA4gnQgFgEAEgDIADgBQBNC/gVBiQgFgRg1gkg");
	this.shape_75.setTransform(362.9764,635.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B7B6B6").s().p("AAgBkQg7gVhYgNQAHg2Aug/QA1hIBAgVQBNC/gVBiQgTgYg8gVg");
	this.shape_76.setTransform(358.5655,635.925);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D2D2D").s().p("AgKAAIAAgBIACgFIATAGIgCAGIAAABg");
	this.shape_77.setTransform(369.175,652.35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgEgHIAAAAIAHADIAMAFIgBAAIABAAIgEAHIgZAFgAADgEgAACgMIAAAAIABAIg");
	this.shape_78.setTransform(368.275,653.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2D2D2D").s().p("AgKABIABgGIAUAEIgCAHg");
	this.shape_79.setTransform(369.6,650.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2D2D2D").s().p("AgIAQIAHgGIgJgDIAEgXIANASIAEAEIgBAGIgKgCIAAAAIgHAHg");
	this.shape_80.setTransform(369.775,649.525);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D2D2D").s().p("AgLAAIACgCIABgFIAUAHIgEAIg");
	this.shape_81.setTransform(368.925,653.075);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2D2D2D").s().p("AgKAAIABgCIAAgDIABgBIATAGIAAAAIgCAHg");
	this.shape_82.setTransform(369.4,651.675);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5B5C5C").s().p("AhWAsQh9gQgLgwIgCgRIALgBQDdgYDMAcIAOACIgJAXQgQAdhAAQQg5AOhNAAQguAAgrgGgAjFgSQAIANAZAJQAgAMAwAHQBXALBWgMQBUgLAVgZQhngNhpAAQhbAAhcAJg");
	this.shape_83.setTransform(324.2,644.6638);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#828282").s().p("AgIAnQhPgCg4gPQg9gRgGgbIgBgFQDcgXDLAbIgEAJQgOAahBAPQg2AMhFAAIgOAAg");
	this.shape_84.setTransform(324.075,644.6837);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#868787").s().p("ADRCLQjKgbjaAXIgKABIgCgKQgIgsAQgwQAPguAlgqQAjgpAsgXQArgXAoACQAsABA3AmQA3AmAkA2QAaAmAIAlQAJAkgLAdIgDAIgADLB1QALgxgrhBQgigygygiQgygjgngCIgEAAQgiAAgmAVQgmAVgfAkQgfAkgPAnQgOAoAEAlQBggJBcAAQBvAABrAOg");
	this.shape_85.setTransform(324.2491,629.4204);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E4E4E4").s().p("ABhB6QhhgGhCgjQg7gegXgtQgXgpARgmQARgmAzgPQAMgCARAAQBNADBQBbQBSBdgbBGIg6gHg");
	this.shape_86.setTransform(329.7078,629.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B7B6B6").s().p("AjVB9QgQhaBLhUQBIhSBQADQBNADBPBbQBSBdgaBGQjLgbjcAXg");
	this.shape_87.setTransform(324.2507,629.3713);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5B5C5C").s().p("AjPA4IgEgKIAJgFQCihUDugfIAOgBIgCARQgJAshwApQhaAhhcAMQgdAEgYAAQgyAAgLgUgAivA0QAZAFA2gHQBUgKBUgeQBWgeAYgeQjQAeiVBIg");
	this.shape_88.setTransform(278.925,648.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#828282").s().p("AjGAzQChhUDsgfIAAADQgMA4i4AvQhKATg5ADIgTABQgsAAgHgOg");
	this.shape_89.setTransform(279,648.8049);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#868787").s().p("AjLCkIgBgDQgPgrAJhFQAKhKAgg6QAphJA+gOQAxgKA9AbQA0AYAsApQAmAjATAjQAUAjgEAbIgBAJIgJABQjpAeifBUIgKAGgAg8iVQg1AMgkBBQgcAxgKBAQgKA9AKApQCdhQDfgeQgBgWgSgbQgSgdgegbQgqgngxgWQgogSghAAQgLAAgLACg");
	this.shape_90.setTransform(278.577,638.0299);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E4E4E4").s().p("AgJBiQhFgOgogiQgnghACgoQADgrAxglQBPgLBdBNQBcBLgGA9QgrAGgoAAQgrAAgmgHg");
	this.shape_91.setTransform(283.3608,632.2442);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B6B6").s().p("AjBCgQgZhHAkhsQAnh4BRgSQBOgRBkBQQBgBOgIA9QjsAfigBVg");
	this.shape_92.setTransform(278.4929,637.793);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5B5C5C").s().p("AgzBWIgBgBIgGgFIgDgDIgBAAIgHgGIgPgRIAFgHQA5hJBag5IAPgJIABASQACAXgEASQgTBBhiA5IgHAEgAg4A0IALALIAFAEQBWg0APg2QABgEABgLQhIAwgvA6g");
	this.shape_93.setTransform(247.6558,663.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#828282").s().p("AgrBNIgNgLQgEgCgCgEIgDgCIgGgHIgBgBQA3hGBZg4QACAXgEAOQgRA+hfA2g");
	this.shape_94.setTransform(247.8205,663.925);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgJAFIANgPIAGAFIgNAQg");
	this.shape_95.setTransform(241.775,670.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2D2D2D").s().p("AgHAIIANgQIACABIgNAQg");
	this.shape_96.setTransform(243.5,671.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2D2D2D").s().p("AgJAGIANgQIAGAFIgNAQg");
	this.shape_97.setTransform(242.725,671.05);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#868787").s().p("Ag+CUQgSgVgHgZQgPg2ABiQIAAgDIACgDQArhCA0ANQApAKAgA6QAcAyAEAyIABAGIgGAEQhZA2g0BHIgIAKgAhPhdQgBCLAOAzQADANAKANQA0hABQgzQgGgugZgrQgbgugegHIgLgCQgfAAgcArg");
	this.shape_98.setTransform(245.9932,654.8687);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B7B6B6").s().p("AhNBoQgOg2ABiOQA5hXA9A7QA3A0AIBVQhbA4g1BIQgSgTgGgWg");
	this.shape_99.setTransform(245.968,654.4829);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2D2D2D").s().p("AgKAEIAPgOIAGAHIgOANg");
	this.shape_100.setTransform(240.9,669.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2D2D2D").s().p("AgKAFIAEgHIAJgJIAHAJIABAAIgIAHIAAAAIgHAHg");
	this.shape_101.setTransform(240.325,668.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2D2D").s().p("AgIAGIAHgHIAIgHIACACIgPAPg");
	this.shape_102.setTransform(241.375,669.875);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2D2D2D").s().p("AgGAHIgCAAIAOgQIADADIgNAQg");
	this.shape_103.setTransform(242.225,670.675);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2D2D2D").s().p("AgHAIIgBgBIANgQIADADIgLAQg");
	this.shape_104.setTransform(243.25,671.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#424B4F").s().p("AnYC1QiBgfgzg8IgGgHIAGgHQBliDDYhMQDahMEZgBQCygBCMAcQCLAdAiAsIAEAEIgCAFQgGAggQAXQgvBCjLBKQjLBLjWAcQhSALhfAAQiVAAhygdgAk/hxQjSBHhlB8QBABBCrAcQCrAbC9gZQDPgbDJhIQDJhIAsg/QAMgRAFgYQgigkh6gZQiFgcirAAIgLAAQkRACjSBIg");
	this.shape_105.setTransform(305,660.6983);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5F6B73").s().p("AmRC4Qi1gdg/hIQBkiCDRhJQCyg/DlgMQDKgLCrAdQClAcAlAvQgHAegOAVQgtBAjKBKQjLBJjSAbQhZAMhWAAQhiAAhdgPg");
	this.shape_106.setTransform(305.125,660.7329);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#50616C").s().p("EgB7AgtQiLgtgWhPQgLgngChJQgCguAChpQACiKgChEQgFh1gUhOIgHgdQgqijgKhDQgQhiAEh2IgjgkQjXjXiDijQjzkxgZjAQgRiGAGiQQAEhYAWi+QAYjVAJiKQAFhEgCiEQgDjKANhqQAViyBLiGQAJhVCHhWQB6hNCoguQCFgkBeAFQBdAGAgAuIgRAMQgcgnhZgDQhagDh7AhQieArh6BMQiEBTgGBLIAAADIgBACQhKCDgVCwQgNBoADDIQACCLgEA/QgJCJgZDXQgVC8gEBYQgHCOARCEQAYC8DxEsQCACfDXDYIAnAoIADADIAAAEQgFB3APBfQALBCAqCkIAHAeQAUBPAFB3QADBFgCCLQgCBqACArQACBIAKAlQAXBUC7AqQC5AqDhgeQDQgbDJhIQDJhIAshAQBGhniTlAQglhQgRiRQgLhZgLjSQgNjpgMh1QgOh/h/i5QhMhwjMjxQh0iLg0hBQhahyg7haIgCgCQgyhJgahOIgQhAQA0CBB/CsQBKBkCvDSQDNDzBOByQCAC9AOCDQANB1AMDqQALDPALBYQARCQAkBNQBNCqATBsQASBtgoA6QguBDjLBKQjLBLjYAcQhUALhcAAQi0AAh/gqg");
	this.shape_107.setTransform(265.6669,468.189);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#50616C").s().p("Ah8A3QhSgBhDgYIgygXQCfAqDIgWQC+gVBig8IgjAfQg1AihWAUIgEABQhvAXh7AAg");
	this.shape_108.setTransform(294.725,580.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#50616C").s().p("AiYA/IgLgBQhUgFhGgaIg0gYQDUA6DmgbQDagaBPhNIgcAjQguAnhYAZIgNAEQh4AciNAAQgrAAgrgDg");
	this.shape_109.setTransform(293.375,566.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50616C").s().p("AgDgxQi7gHiABYQAOgRAggUQA/gqBTgQIAJgCQB5gTBvAcQB8AfBQBUIgPAPQhuh0jFgHg");
	this.shape_110.setTransform(254.85,424.4368);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#50616C").s().p("AlGAnQA5gsBMggIAHgCQCWg2CNAVQCPAWB4BgIgNARQiah7i+AEQi8AEi+CDQANgRAcgXg");
	this.shape_111.setTransform(259.775,438.2189);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#50616C").s().p("AgdBOQAEhHAcgxIAbgkQgeA8gIBhg");
	this.shape_112.setTransform(229.3,542.925);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#75848E").s().p("AlxgMQCrAvCcAAQD4ABCkh5QgJArhHArQhLAuhoAWQhNARhHAAQizAAiZhig");
	this.shape_113.setTransform(293.375,568.8583);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#75848E").s().p("Ai0A6QhmgYgpgyQB+AvClgCQDTgCCRhjQgQA8hYAmQhQAkhyAJQgfACgeAAQhOAAhDgPg");
	this.shape_114.setTransform(294.725,581.8454);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8C5CB").s().p("AGxQwQhMh2gSgxQgihigpkBQgskOgKjJQgFhbhxi3Qg5hdi8kLQitj0hKiDQhzjHgGh3QA5CMCODAQA+BTDUECQCpDQBMB2QBvCrANB3QALBsAJCZIAODxQAREHAxBqQBlDbAAB2QgThChGhvg");
	this.shape_115.setTransform(317.95,520.925);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90A4AF").s().p("AItcfQhbgPjwgKQi/gIhOgdQhzgrgQhyQgOhqguiQQhCjNgFgVQghh8AGhiQAIh5BBh2QgLgMhfg9QhyhJhKg6QkFjNgdjQQghjjAIi5QAUj4AOjKQAVlHAjh9QBIkICuA0QAGhIBBhkQA+heBXhQQBZhTBLgbQBTgeAkAzIiQVNQA5CMCODAQA9BSDUEBQCrDRBMB2QBuCrANB4QALBrAJCZIAODyQAREGAxBqQBmDegBB1Qh5hZjAggg");
	this.shape_116.setTransform(283.1131,451.5944);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#75848E").s().p("EgAxAg1QjHgqgahdQgPg3AEj1QADj4geh1Qgvi9gLg+QgRhmAFh7QiyisiWiyQkmlcgcjTQgXizAXjpQAkkiANjKQAEg/gBiAQgCiLAChDQALj9BeioQAGhGBrhMQBghFCPgxQCNgwBygFQB8gFAkA0IBtVLQA5CMCODAQA9BSDUECQCrDQBMB2QBvCrAMB4QAMBrAJCZIANDyQASEGAxBqQBFCXAVBkQAbB7gqA9QgsBBjLBJQjKBJjTAcQhdAMhXAAQh4AAhsgXg");
	this.shape_117.setTransform(265.6914,468.2623);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#868787").s().p("AhFBFQhOgtgPgvQgFgQAFgPQAEgOAOgIQAugnBCAAQAtABArATQArATAcAiQAyA8gQBQIgBAHIgGABQgcAKgigBQhRABhQgvgAiEg9QgRANAHATQAMAnBGApQBLAsBNAAQAcAAAWgHQALhDgqgyQgYgegngRQgngSgpAAQg6AAgqAhg");
	this.shape_118.setTransform(333.1518,690);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B7B6B6").s().p("AAgBiQg7gNg0giQgygggRggQgUgkAdgTQAoghA4gDQA0gCAxAYQAyAaAaAsQAbAxgLA8QgcAIggAAQgdAAgfgHg");
	this.shape_119.setTransform(333.1275,689.9956);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#868787").s().p("Ah0CBQhGgagagnIgDgDIABgFQAbhlBLg6QBCgyBMAAQAqAAAkAPQAjAQAZAeQA/BIgTB8IgBAFIgEACQhHArhnAAQhPAAhGgZgAhjhXQhEA0gaBcQAaAhBBAWQBAAWBHAAQBeAABBgmQAQhug3hBQgug2hNAAQhFAAg8Aug");
	this.shape_120.setTransform(376.2465,695.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E4E4E4").s().p("AgdBNQhngmgfhOQAugrA7gOQA5gNAyASQA2ATAeAvQAhAzgCBLIgmABQhUAAhHgZg");
	this.shape_121.setTransform(380.4057,691.2911);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7B6B6").s().p("AgeCLQiEgSgqg+QAbhlBLg3QBEgzBOAFQBQAGAsA9QAyBEgRBuQhFAqheAAQghAAgjgFg");
	this.shape_122.setTransform(376.2907,695.483);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#868787").s().p("AidCDQgpgQgPgZIgCgEIABgDQAThqBYhAQBPg7BhAAQAtAAAkAOQAkAOAXAbIACADQALAWgMAkQgLAjgeAkQgpAzg9AcQg9AbhFAAQg1AAgpgQgAhdhIQhSA7gSBgQANATAkAMQAkANAtAAQAxAAAvgQQBJgZAvg5QAZgfALgdQALgegHgSQgqguhSAAQhXAAhLA1g");
	this.shape_123.setTransform(427.0439,697.15);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E4E4E4").s().p("AjFBKQAzh8CMgjQA7gPA2AKQA3AMAfAjQAJAUgJAeQgJAdgYAgQhrAWhHAEIggABQhQAAhDgVg");
	this.shape_124.setTransform(427.8189,692.9505);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B7B6B6").s().p("AiUB8QgrgPgOgZQAOhMA1g3QAwgyBEgXQBBgWA9AJQA/AJAiAnQAKAVgMAiQgLAfgbAiQhPBgiEAGIgNAAQguAAgngNg");
	this.shape_125.setTransform(427.0576,697.1811);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50616C").s().p("Aj8ABQgegSgUgXIgPgUQB8BsDggKQB5gFCmgsQgYARg0ARQhpAkiMABIgJABQiUAAhcg8g");
	this.shape_126.setTransform(388.225,661.4532);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#50616C").s().p("AAFAuQhigChFgtQgVgOgRgRIgMgOQA6AvBpASQCAAWCGgqQgNAMggANQg8AXhWAAIgRgBg");
	this.shape_127.setTransform(384.45,645.2614);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#50616C").s().p("AlobmQi6gNikgoQikgnhQgzQhKgxAKgzQAShbA9mEQBKnPAjjHQA+lbAghJQAohaBJh+QAuhRBhigQCpkVBGiHQB3jkAjihIAVAFQgkCkh3DlQhHCJipEWQhjCigsBNQhJB+gnBYQggBHg9FbQglDOhHHFQg+GFgSBbQgHAlA+AoQBPAzCjAnQCfAlC1ANQDAAOCXgSQCogWBQg5QAcgVABhRQAAgzgOiQQgZjtABiSQAAj6A3jdQArisCQjHQBZh6Dkj/IAXgZQBoh0AyjCQAvi0gGjeQgFjUg0jTQg0jThYiiIAhApQAqBAAqBxIADAIQB0FdgUFqQgWGEiwDGIgXAZQjhD7hZB6QiPDFgqCoQg3DaAAD5QAACOAYDvQAPCagBA0QgDBUgjAZQg/Auh0AYQhyAYiaAAQhLAAhRgGg");
	this.shape_128.setTransform(420.2879,529.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#50616C").s().p("Ai2A7QAsg8A9giQAugZAygIIAUgCQBQgGAoAeQAUAPAFAQQgagTgpgJQgugLgwAIQgwAHgqAXQg5AegpA6g");
	this.shape_129.setTransform(382.75,487.0068);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B8C5CB").s().p("AlDaoQACgbgdiPQgli3gQh5Qg8nRB5laQAsh+BJhpQAzhKBchhQB4h9AggmQBVhlA6hwQCXkhgNmqQgMl4h5j+QBaClA3DWQA1DUAHDVQAHDegtC0QgxDBhnB0QjxENhWB2QiZDPgsCuQhNE1AhGSQAIBkAQCcQAIB0gQArg");
	this.shape_130.setTransform(478.6383,522.95);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#90A4AF").s().p("Aoba0Qhogcg6gtQg7gtAEgxQAEguBFghQAzgYBtgZIC6gpQBngZAwgbQh7AZh5gbQh0gZhchCQhchCgxhbQgyhgAIhoQAGhLABiIQABiUAFhEQAPkEBdjaQCBkUBtkJQDUoIgMigIAWiEINalyQBaCmA2DVQA2DUAHDVQAHDeguC0QgwDChoBzQjxENhXB2QiZDPgrCvQhRFDApG9QAVDlABAcQADBqgkAaQgYARgmARQiJAah9AAQiQAAiAgjg");
	this.shape_131.setTransform(438.692,527.5387);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#75848E").s().p("AnybSQjfgeiPg5Qiag+AOhDICGs2QBop/ArhiQAxhtBqi0QCCjVBChvQD5miAyjkINqneQBaCmA2DVQA2DUAHDVQAHDeguC0QgwDChoBzQjxENhXB2QiZDPgrCvQhRFDApG9QAVDlABAcQADBqgkAaQhhBGjZAQQhCAGhGAAQiJAAiXgVg");
	this.shape_132.setTransform(420.3923,529.1111);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#868787").s().p("ACcCAQhTgOhPgcIgCgBQg7glhdiSIgIgMIAOgEQBTgYBEAOQAyALAnAfQArAiAWA0QAWA2gEA8IgBAMgAiGhhQBVCCAzAhQBJAaBJANQABg0gUgtQgUgsgkgdQg0gqhMAAQgkAAgrAKg");
	this.shape_133.setTransform(439.949,657.2387);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B7B6B6").s().p("AgFBNQg6gkhciQQCZgrBXBRQBNBFgHBzQhTgOhNgcg");
	this.shape_134.setTransform(440.2543,657.1294);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#868787").s().p("AjWB6IgKgBIABgKQAGhsA/hAQA0g2BJgLQBKgKBDAnQBMAsAiBdIADAIIgJAFQiQBMizAAQg3AAg0gHgAgahoQhAAJguAvQg4A4gJBeQDdAaCyhaQgghQhDgmQgvgagyAAQgNAAgPACg");
	this.shape_135.setTransform(480.275,658.3136);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E4E4E4").s().p("AhrBSQg4gTgHgmQgHgqA6g8QBTgkBSAlQBZAoAlBmQhJAYhOAFIgcABQg7AAgpgOg");
	this.shape_136.setTransform(484.2324,656.019);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B7B6B6").s().p("AjTBvQAGhiA3g9QAzg5BKgKQBJgKBAAoQBGArAeBVQhcAwhsASQg5AJg9AAQg0AAg1gHg");
	this.shape_137.setTransform(480.175,658.3087);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#868787").s().p("AhPChQggg8ADhKQAEhKAng3QAbgmAkgRQAjgRAqAHIAHABIALA2QAOBGABAYQADAjgNAPQhEBQheA1IgJAFgAACiHQgcAOgVAfQgiAwgFBAQgFBBAaA1QBUgxA/hJQAIgJgEgiQgDgVgMg+IgHgnIgLAAQgbAAgYAMg");
	this.shape_138.setTransform(509.6538,646.4351);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E4E4E4").s().p("AgqBnQgggPgKghQgLgmAUgyQAYgpAigUQAlgWAtAHIAWB3QAGAwgMAOIgDAEQgWAbgjAHQgLACgKAAQgWAAgUgJg");
	this.shape_139.setTransform(510.5326,641.7322);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_140.setTransform(509.6369,646.2385);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_141.setTransform(509.6369,646.2385);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#50616C").s().p("AgEAtIgIgBQhCgHgzgTQg2gSgcgeIAPgPQAyAyB8AQQB7APBvgfQgPAMgjALQg3AShKAAIglgBg");
	this.shape_142.setTransform(456.475,595.93);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#50616C").s().p("AgGAsIgHgBQhGgEg0gRQg6gTgbghIARgOQAuA5CUAIQCIAJBegjQgQAOgkAOQg8AWhPAAIgkgBg");
	this.shape_143.setTransform(462.125,612.3296);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#50616C").s().p("EAPcAjUQiXAAiZg2IgCgBQhyhHjOmdQjOmdixoBQkXCGkEgVQkDgVjqiuQjbiji1kgQi1keh4l4QhrlOgklOQgllNArj/QAei4BFhxQBFhwBmghQG5iOJIgRQG9gNHvA6QGZAwF5BYQFKBNBtA5QCNAsBYDxQBPDVAaFMQAZExgZE/QgYE6g+DMQg7DGhiEjQhdEYgkB9Qg5DKgVCiQgXC6APC0QAIBnAcCOQAOBGACAYQACAkgMAPQhaBqiCA4QiAA2iVAAIgCAAgAgFMIQC3IUDUGkQDHGIBoBCQDlBRDRgqQDRgqCCiZQAIgJgEgjQgCgVgMg+QgciRgJhmQgPi3AYi8QAVikA5jLQAkh+BekYQBtlKAwieQA+jRAYk5QAXk7gYktQgclahUjUQhUjUh8gmIgCgBQhigzk2hKQl9hbmtgzQmTgwl0AAQqqAAnzCgQhgAfhBBtQhCBsgdCyQgqD8AkFLQAlFKBqFNQB2F0CzEbQCzEdDZChQDnCtEBASQEAATEUiHIALgFg");
	this.shape_144.setTransform(370.8443,445.207);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B8C5CB").s().p("Aiwc2IgsiHQg+jaASlCQAPkoB1lzQBFjUAkh2QA+jOApi8QBVmJgEn4QgEo9iGkDIAaAKQBhBxA6D1QA1DeANEmQAMEVgaEQQgZERg3C4QhTETiQGpQhtFUgcDaQghEIAtEIQAKA/ASBWQAJA7gNAPQABgpgVg/g");
	this.shape_145.setTransform(534.3994,453.925);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#90A4AF").s().p("AMnfKQgChXBuhBQBAglCag0QhvARg8gjQg7gjgRhaQggitBVjyQARgyA9iYQAyh7AVhKQAmhxgRhtQgViChhg7Ih6hHQhGgqgsghQh3hcgjh4IhCknQgmitgVh7Qh4Glj4D4QhoBphoAwQhkAvhLgSQjMgujyjoQjQjHh5jVQgXDNh/CsQhyCai+B1Qiskxhpl8QhklngTlVQgSlWBGjjQBKjxCcgyQMQj8SYCKQGkAyF8BaQFABLBnA2QCIArBXDsQBNDSAbFJQAZEvgYE9QgYE6g+DPQhTEUiRGpQhtFUgcDbQghEHAtEJQAKA+ASBXQAJA6gNAQQioAlimACIgMAAQlCAAgDiqg");
	this.shape_146.setTransform(370.8901,436.4715);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#75848E").s().p("EAKwAiVQhshDjLmTQjUmki0oOQo1EUnZlkQjMiairkHQicjyhyk1Qhrkjg1k1Qg0ktAIkEQAIkKBGiqQBKi0CEgrQMQj8SYCLQGkAyF8BZQFABMBnA2QCIAqBXDtQBNDSAbFIQAZEvgYE9QgYE7g+DPQhTEUiRGpQhtFUgcDaQghEIAtEIQAKA/ASBWQAJA7gNAPQiFCbjWArQhJAPhLAAQiQAAiXg2g");
	this.shape_147.setTransform(370.8969,445.1472);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#868787").s().p("AiPAsQgTgQgMgiIgCgHIAEgFQAgggAtgOQAugOA1AHQA3AGAsAaQAtAZAXAlIAGALIgLAFQgqARgxAKQgwAJgsAAQhaAAgkgfgAhUgsQgoALgbAaQAKAYALAKQAgAbBVgBQBUgBBKgcQgVgdgngUQgmgTgugGQgOgCgPAAQgdAAgbAIg");
	this.shape_148.setTransform(235.45,636.047);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B7B6B6").s().p("AiHAjQgPgMgMghQA/hCBuAQQBsAQAsBJQhOAghcADIgLAAQhUAAghgdg");
	this.shape_149.setTransform(235.3,636.0241);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#50616C").s().p("AhlLBQgggbgShoQgLhBgRi4QgbkzggioQg3kjhpi8IgFgIIAHgGQASgNAegQQA8ggBFgQQDYgzDWCAQBwBCAvC5QAkCMgDDGQgEDwg3DwQg2DngzAdQgsAYg7ANQg5ANg3AAQhZAAgkgfgAkZqnQg2AVgoAbQBoC+A3EiQAfCnAcEzQAQCvAKBAQARBnAbAYQAkAeBkgFQBpgGBKgpQAqgXAzjYQA5jvAEjzQADjegviTQgviThbg3QiUhYiWAAQhfAAhYAig");
	this.shape_150.setTransform(231.1615,569.8985);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#75848E").s().p("AhfK5QgjgegUiWIghlVQg3oZiYkRQAQgMAdgQQA6ggBDgQQDUgzDUB/QB3BHAsDUQAlCygTD5QgRDWgxC6QgvCygoAXQhMAqhrAGIgfABQhQAAghgdg");
	this.shape_151.setTransform(231.3336,569.84);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(208.1,354.9,474.6,373.70000000000005), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D2D2D").ss(2).p("AWSkzQhMgxAAh0IAA1oMg6AAAAMAAAA6BIVoAAQB0gBAyhMQAxhLgvhqQgZg6gZhJQgziRAAhJQAAioB3h4QB2h2CpAAQCoAAB3B2QB3B4AACoQAABJgzCRQgZBJgaA6QguBqAxBLQAxBMB0ABIVnAAIAA1oQAAh0BMgyQBMgxBqAuICDAzQCRAzBJAAQCoAAB3h3QB3h3AAioQAAinh3h4Qh3h3ioAAQhJAAiRAzIiDAzQhqAvhMgyg");
	this.shape.setTransform(237.275,186.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AghdBQh0gBgxhMQgxhLAuhqQAag6AZhJQAziRAAhJQAAiph3h3Qh3h2iogBQipABh2B2Qh3B3AACpQAABJAzCRQAZBJAZA6QAvBqgxBLQgyBMh0ABI1oAAMAAAg6BMA6AAAAIAAVoQAAB0BMAxQBMAyBqguICDgzQCRg0BJAAQCoABB3B2QB3B3AACoQAACoh3B3Qh3B3ioAAQhJAAiRgyIiDg0QhqguhMAxQhMAxAAB1IAAVog");
	mask.setTransform(237.275,186.65);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2D2D").s().p("AgHFLQg0gegugyQg6hBghhVQgvh4APiOQAMh0BCgxQAqghA5AAQAtABAtATQAuAVAjAiIABACQCPCtgnDqQgUB2gyBWQgVAegtABQgtgBgzgcgAiekjQgpAvgJBWQgOCIAtB0QAgBRA4A+QAqAuAvAdQAxAcAoAAQAigBAPgVQAwhTAThxQAljhiIinQghgfgqgTQgqgSgoAAQhCAAgpAvg");
	this.shape_1.setTransform(361.189,253.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgSANgMQANgNARAAQASAAANANQANAMAAASQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_2.setTransform(359.925,253.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D2D2D").s().p("Ag7BgQgZgoABg4QgBg4AZgnQAZgoAiAAQAjAAAZAoQAZAoAAA3QAAA4gZAoQgZAogjAAQgiAAgZgog");
	this.shape_3.setTransform(358.35,261.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4E73B5").s().p("AhaCLQglg5AAhSQAAhQAlg6QAmg6A0AAQA1AAAlA6QAmA6AABQQAABSgmA5QglA6g1AAQg0AAgmg6gAhLh8QggA0AABIQAABJAgA0QAfAzAsABQAtgBAfgzQAfg0AAhJQAAhIgfg0Qgfg0gtAAQgsAAgfA0g");
	this.shape_4.setTransform(358.35,259.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53A2D9").s().p("Ahkh8QAQgbAWgPQAWgQAZAAQAwAAAiA2QAiA3AABNQAAA/gXAyQgZAyglAQQhghsgUjHg");
	this.shape_5.setTransform(359.95,259.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#538BC8").s().p("AhSCEQgjg3AAhNQAAhMAjg3QAig3AwAAQAxAAAiA3QAjA3AABMQAABOgjA2QgiA3gxAAQgwAAgig3g");
	this.shape_6.setTransform(358.325,259.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiilLQA1gUBAASQA8ASAuAtQCNCsgnDnQgUBzgwBSQgFAHgIAGQkph7A1ong");
	this.shape_7.setTransform(366.3821,252.7362);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AA2FZQhCgRhBhAQhKhHgmhlQgsh0AOiIQARikB4gWQAxgJA2AUQA0ATAoAnQCNCsgoDnQgTBzgwBSQgTAbgmAAQgQAAgUgFg");
	this.shape_8.setTransform(361.2132,253.4328);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AhVgBQgJgSgDgSIgBgQIANAhQAWAhAsAMQAgAJAagOQAjgTAUg4QAJAtgHAOQgcA1g9gBQhCgGgagzg");
	this.shape_9.setTransform(329.5705,238.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AguBEQgwgigJg+IABg4IAJAsQASAwArAdQAWAPAggHQAkgHAggeIAOAPQgYAqgqAPQgQAFgQAAQgbAAgZgRg");
	this.shape_10.setTransform(332.5,225.2794);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("AhGAFQgPgcgFgkIgDgeQABALAGAQQAKAdARAZQA2BKBjgCQgEAZgCAAIgUABQhhAAgphVg");
	this.shape_11.setTransform(335.175,215.9645);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2D2D").s().p("Ag8gRQgFggAEgkIAEgcQgBAJABARQABAfAJAcQAbBYBUAjIgIATQhjgcgRhng");
	this.shape_12.setTransform(343.5158,209.3625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D2D").s().p("AiSgoQAYhGA/gcQA/gcBMA3QBKA3AIBNQhAgqhIgGQiPgLgpC6QgKh6AWhCg");
	this.shape_13.setTransform(355.1568,222.5165);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D2D2D").s().p("AAAhNQAygKArAVQAvAWAZAyQg6gnhwAbQhvAagwA+QAxiIBzgXg");
	this.shape_14.setTransform(358.15,175.0387);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AhxALIgggWQAmAWBTABQBkACA4guIAOARQg2ArhWAFIgFAAIgHAAQhAAAgrgWg");
	this.shape_15.setTransform(526.025,490.2296);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("AhlASIgggUQA3AVBUgKQBVgJAaggIARAOQgPASghAMQghANgoAFIgDAAQgRADgRAAQgsAAghgPg");
	this.shape_16.setTransform(523.4,448.0542);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("Ah+APQAugiBMgMIADAAQArgGAoABQAqABAZAJIgHAUQg5gUhsAUQhcAPghAcg");
	this.shape_17.setTransform(509.5375,412.2304);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("AioAVQAygiBCgWIAHgBQBEgRA+ADQBDACA1AbIgKATQhSgph1AUQhpAShfA4g");
	this.shape_18.setTransform(490.65,375.5525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("Aj8ATQA/grBTgSIAFgBQB3gZB0AQQBtAPA5ArIgNARQhRg9irACQi+ADiQBcg");
	this.shape_19.setTransform(480.225,333.0166);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAchMQiugejGAjIBHgVQBcgVBqAEIAMABQCOAKBlAuQB2A1AvBkIgTAJQhEiSjmgog");
	this.shape_20.setTransform(485.75,294.7174);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("AAUgpQjAgWh/AqIAzgYQBIgYBsAAIAGAAQB/ADBeAfQBsAjAiA7IgTALQgxhYjVgXg");
	this.shape_21.setTransform(497.5,260.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("ADwWFQgmhNgCiDIgBgVQgOgrABgxQABhGApgXQAogWBDgNQBLgOAkAPIAEACQgLiYhEiMQhfjEjEiSQhXhChxhFQg+gmiKhPQjIhxhVg8QiLhkhFhnIgHgKQgmhDgKhNIgDhAQAWC4ClCTQBlBZESCbQCEBMBFAqQBwBGBZBCQDUCdBgDYQBDCUAFCfIgVADQgDgJgLgEQgegNhFANQg/ALgmAVQgeAQAAA+QAAAtAMAmIABACIABAYQACB/AjBHQBBCDCwAAQCIAABThVQCQiVgPmRQgEh7hAjJQglh3hejzQg4iRgYhEQgjhlgIg2QgViIAmigQAahxBPjIQAlheARihQALhiAIi4IAAgFQABhJAUhgIAThQQgLBGgHC0QgJDCgKBdQgSClgmBgQhNDFgbBwQglCcAUCFQAIA1AjBlQAVA8A6CWQBeDyAmB6QBBDMAEB+QAPGZiXCcQhYBciSAAQi9AAhHiPg");
	this.shape_22.setTransform(454.2637,379.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#50616C").s().p("AAAAZQAOhLgDhcIAVAAQABB/ghBbQgPAugRAVQAYhCAIg0g");
	this.shape_23.setTransform(498.35,493.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8C5CB").s().p("ACMP7QgRi5hLjYQgJgZiElKQhRjKgViBQgdi1A4jJQAThEAjhYIAyiDQAahJA7k6QA4koAeg/QgKAvgIBvIgODXQgWEogxB9QhMDFgaBtQgnCiAUCIQAKA/A0COQAeBTBMDFQCUGJAGCxQAJD5g1CbIgNAZQgVA0gfAiQBBjpgVjpg");
	this.shape_24.setTransform(519.6985,372.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#90A4AF").s().p("AJyXpQgwgFgZglQgbgnAOg4QAbhtgEigQgFi8gzieQgviUiCicQiAiaiwh6QhnhIiphXIkKiKQiNhPhPhKQhhhbgkhvIJUwSIQMAAQgKAwgIBvIgPDXQgVEngxB9QhODGgaBtQgnChAVCIQAJBAA0CNQAfBUBMDFQCUGJAHCxQAJD5g1CbIgOAZQgfBNg1AmQgpAdgqAAIgOgBg");
	this.shape_25.setTransform(453.7153,375.1638);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#75848E").s().p("AD1VuQgVg0gFhGQgChDgCgNQgNgpABgvQAAhDAkgSQAygcBPgLQBagLAKAkQgFiSg8iNQhfjfjYihQh7hdjKh1QjxiMg4gmQiVhihNhfQhchygRiPIJLuOIQViDQgKAvgIBvIgPDXQgVEogxB9QhODFgaBtQgnCiAVCIQAJA/A0COQAfBTBMDFQCUGJAHCxQAKEYhECfQhXDQjWgBQjHAAg+igg");
	this.shape_26.setTransform(453.7145,378.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2D2D2D").s().p("AALAQQhIgMgrAuQAMhIAggbQAcgXAlAOQAiANAdAkQAdAjAIAmQgbgmhDgKg");
	this.shape_27.setTransform(542.9,176.7601);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#50616C").s().p("AoAKyQgahqAuhXQAdg2BihiQBChEAhgmQA4hDAnhGQAPgbAphVQBzjuBgiFQCqjnDyiHIAOAPQixD3hQE0QguCxgeEwQgQClgNA6QgWBggsAhQhAAxhlgKQg+gGh6gmQhUgagjgFQg6gKgbARQgaARgGAuIgHA6gAl4JWQAmAFBZAbQB2AlA6AGQBgAKA6gsQAngeAUhbQAMg4APigQAdknArisQBLkpCjjyQjbCGicDbQhaB8hrDjQglBMgUAlQgoBIg6BDQghAohDBDQhWBYgbArQgrBGAHBQQALgVARgKQAXgOAkAAQARAAATADg");
	this.shape_28.setTransform(114.5806,130.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8C5CB").s().p("AikGUQAXkaAUhuQAmjRBojYQBfjDBIg2IAUgOQiJDKhJDxQg3CygcDhQgPB7gUDDQgUCMgvAqQgIAEgMADQAZgzASjeg");
	this.shape_29.setTransform(142.675,128.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#90A4AF").s().p("Aj2KBQhYhBgIhvQgGhHA1hlQBAhpATgiQAuhUAwiDQA4ibAYgzQBujuEQiwQiJDKhKDyQg3CxgcDiQgPB7gUDCQgTCMgvAqQgpARgmAAQg9AAg3gpg");
	this.shape_30.setTransform(129.0992,128.6248);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#75848E").s().p("AnwIsQAVg3A+hEQBQhQAsgwQBOhVAwhXIBXiuQBAiDA7hdQC6kkEYibQiVDQhRD6Qg7C4gdDqQgQB/gUDIQgVCPg0AnQg+AwhpgNQg4gGiDgoQhwgigtADQhDAFgKBNQgVhWAbhHg");
	this.shape_31.setTransform(114.6906,128.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#50616C").s().p("AEnApQhYigiJhFQh5g9iZARQiZASisBeQgZAVgNAFQgMAFgHgGQgKgIAJgXQAIgTAmhEQAxhaAMgZIABgCIACgCQB6hcC0gRQC0gRDGBAQCmA1ByBYIAHAGQBLA+AUA6QAKAdgEAQQgZhShthRQhthQiYgxQjAg9iuAPQiuAPh2BZQgVApgnBIQglBDgHARIAagTQCxhiCegRQCegSB+BAQDGBjBiEVIABAEQAnBjAFBgQADAxgGAcQgijyhYiig");
	this.shape_32.setTransform(205.2259,94.2205);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8C5CB").s().p("AFqBgQhSg4hoguQkriGk9ALQBvgmCQAIQCFAJCFAuQCEAtBfBFQBkBIAhBPQgMgUhDgtg");
	this.shape_33.setTransform(218.875,69.0723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#90A4AF").s().p("AD0BsQg9i3hthmQhihdjDgaQgvgGhWgFQg+gEgMgFQgigPACgdQACgdAhgQQCDgqCaAPQCJAOCGA6QB+A2BZBMQBZBMAWBIIgGENIikD6QAMibg5iug");
	this.shape_34.setTransform(218.3944,94.1679);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#75848E").s().p("ABXi+Qj+iWl1DNQgkAdgHgCQgHgDAPgfQA8hrAohQQB5hcCzgPQCegNCsAyQCiAvB3BVQB6BXAcBcIitIPQhDndkDiYg");
	this.shape_35.setTransform(205.6744,94.8159);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_36.setTransform(533.025,250.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2D2D2D").s().p("AgaBpQgUgFgGgjQgGgiALgrQALgrAWgbQAVgbAUAFQAUAGAGAiQAHAigLAqQgLAsgXAbQgRAXgRAAIgHgBg");
	this.shape_37.setTransform(529.7898,256.5818);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E73B5").s().p("AgxCxQgggKgIg5QgHg4AWhKQAUhFAggsQAggsAfAAIAKABQAiAKAGA9QAFA4gUBHQgUBEggArQggAtgfAAQgGAAgEgBgAgHh3QgdApgSA/QgUBCAFA0QAEAwAVAGQAVAGAcgnQAggqAThCQAUhDgGg0QgCgWgGgOQgHgPgKgCIgEgBQgWAAgaAmg");
	this.shape_38.setTransform(530.1972,254.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#53A2D9").s().p("AhBAbQAUhEAhgsQAhgrAbAIQAbAIAFA2QAFA2gUBEIgDANQg2AXhYAXQABguAOgyg");
	this.shape_39.setTransform(530.2093,250.2879);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#538BC8").s().p("AgvCnQgbgIgFg2QgFg3AThEQAVhFAggrQAhgsAbAIQAbAIAFA2QAFA3gTBEQgVBFggArQgcAlgYAAIgIgBg");
	this.shape_40.setTransform(530.2,254.843);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2D2D2D").s().p("Ai5FGQAglTBSixQBFiVBTAAQAnAAAdAiQAYAcAJAqQAKArgHAuQgtEHifCIQgzArg4AYIgvARIgOADgAg4ixQhMCqggFAQBYgcBLhNQB/iCAnjjQAGgqgIgmQgJgmgUgZQgXgageAAQhKAAg/CNg");
	this.shape_41.setTransform(536.4735,245.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhEh1QA2huA/gSQA3gQAlA4QAkA4gNBRQgSBqgmBXQgwAuhNAhQg2AWhgAYQAjjtBAiCg");
	this.shape_42.setTransform(537.5111,237.8972);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E1E1E1").s().p("AhSiMQA3iOBFgjQA9geAqA5QAqA4gNBYQgtEGicCFQgyApg2AYIgtAPQAckqBCirg");
	this.shape_43.setTransform(536.5642,245.6857);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D2D2D").s().p("AhGgMIAPgMQAZAeA0AFQAbACAXgEQgdAMggADIgQABQgyAAgPglg");
	this.shape_44.setTransform(560.35,225.8177);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D2D").s().p("AhiAgIAFgUQA/AQBGgiQAkgSAXgVQgOAXgaAWQg0Aug3AAQglAAgNgOg");
	this.shape_45.setTransform(562.2,216.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D2D2D").s().p("AhgA6QBDgQBFg8QAjgeAWgcQgTAngiAlQhBBNhHAAg");
	this.shape_46.setTransform(560.575,209.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D2D2D").s().p("AhWBaQAxgPBChcQAhguAZgtQgTA0ggA1Qg8Bqg4AGg");
	this.shape_47.setTransform(557.25,204.375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D2D2D").s().p("Ag2hFQAfgpAigUQAjgVAbAJQAsAQAJBMQAEAmgEAhQhAgvg2AYQg5AZhOB7QgCh1BLhig");
	this.shape_48.setTransform(540.5599,218.4271);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#50616C").s().p("AiPaYQkqggkZiBQkZiCjjjSQiZiOhoibIgGgIQhAhjgihoQgchVAKgEQAoCLBnCYQBoCaCSCIQDhDQEWCAQEVCAEnAfQGMAvEeg7QCogjDuhuIBSglQDFhXBwjUQBxjUACkfIAAgDQAMglACgWQABgNgCgQQgDgeAKgjQARg7A9iJQA5h+gXiUQgNhWhAiqQgphtgOg0QgXhYAFhEQAGhagfiJQghiMg+iMQiXlUjRhvQkriek8AUQhjAHhYAXIhFAXQiHhqk8gIQlDgJj2BoQjSBaiKCuQi1DkgmFlIgVgCQAmlsC5jqQCNixDYhbQD9hsFCAHQE7AGCPBuQClg9DMAKQEBAND6B/QB7A+BtCXQBLBpA8CGQBACNAiCQQAhCPgHBjQgEBBAWBVQAOAyAoBrQBACpAOBbQAYCcg7CDQg8CFgQA5QgKAiADAaQACASgBAOQgDAYgMAmQgCEmh0DZQh0DYjKBaIhSAlQi+BYh4AiQjNA6j6AAQiaAAi0gVg");
	this.shape_49.setTransform(397.8383,187.5315);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8C5CB").s().p("AI+YRQASAAAogvQAug2ArhSQB3jeAXkNQgChUAeiOQAeiTAnheQBFiZhmj1Qg4h6gYg3QgohcAAgwQAAiFgDgvQgHiPgbh5QhQlkj6ioQiehqkPgdQkPgdh9BLQiLhLikg3QjZhJisgDQChgKDAAlQDJAoBTBBQCeg8DCADQEMADD/CCQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CKQAsB+AHBdQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgCEFhdDIQhaDDigBpg");
	this.shape_50.setTransform(450.3192,174.1197);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#90A4AF").s().p("AJbZBQhKgIjtglQj3gli3gWQjZAZj6hHQjkhCjaiFQjPh/iWidQiWiegviPICO1TICFkKQByk3DWilQC2iODygZQDNgWDUA/QC5A2B3BdQB9gvAPgEQBgggBYgLQD5geD4B+QDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB9AHBdQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQhdAphqAJQggADgkAAQhJAAhegLg");
	this.shape_51.setTransform(397.4442,179.8082);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#75848E").s().p("AiKaEQofg6m1loQi6iZiCi1Qh8itgviiIC86mQBnjwDHiQQCuh+DjgnQDKgkDGAnQC7AkBvBXQCthBDmgIQFFgMD8CAQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB+AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQiBA8hGAeQh7A0hwAcQi2AtjkAAQibAAiwgUg");
	this.shape_52.setTransform(397.4442,188.4386);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#50616C").s().p("AFlUxQg7gUgvgqQgcgagog2QghgrgSgRQgdgbgigJIhEgPQhHgOgfgOQgzgWgrgyQgagdggg2QgSgdgohIQgnhIgSgdQgdgwgVgQQgOgKgZgIQgQgFgngIQhQgSgtgSQhPgfg/g5Qh4hshUh2QiTjOAtiGQAFgSAbgSQARgKAxgYQBPglAqgcQBIgxAqg/QA/hgBOiRQAwhZBVioQBtjaAvhQQBOiEAxgXQBMglCFgJQCQgJCUAdQF1BICcD+QBZCQBADhQBADgAbEAQA8I/iQGUIgBACQjAEJiFB2QiGB4htAAQgiAAgjgMgAAK0jQh/AJhFAhQgsAVhNCFQguBQhqDRQhYCvgtBUQhOCShABgQgsBChLAzQgrAdhSAnQgsAVgNAIQgaAPgEAMQgjBqBmCmQBVCJCUCGQA9A3BLAeQAsARBOARQApAKARAFQAcAJARAMQAWARAfAyQASAdAqBLQBICHAoAuQAoAuAvAUQAdANBFAOIBEAPQAnAKAhAeQAUATAiAtQAoA1AaAYQArAnA3ATQBxAlCPhwQCPhxDUkmQCOmQg8o5Qgaj8g/jdQhAjghXiOQhKh4iGhRQiGhSizghQhrgUhpAAQglAAglACg");
	this.shape_53.setTransform(172.4086,197.667);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6ACB5").s().p("ACnOeQhBgegug3Qgvg1gOg+QgjiHhNhSQhShXhugIQhwgIhvgtQhqgrhPhCQhQhDgdhIQgghOAjhCQAfiqBljbQBjjXCGjDQgIBnAHBvQBQiuC9hbQCvhVDWAJQDXAICrBhQC5BnBICtIgCAUQgCCggbDgQgdDtgvDZQh0IciTBXQhUAyhUAAQhEAAhFghg");
	this.shape_54.setTransform(161.9233,194.4585);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F598A3").s().p("ACkRGQhBgfgug2Qgvg2gOg9QgjiIhNhSQhShXhugIQhwgIhvgtQhqgrhPhBQhQhDgdhJQgghNAjhDQAfiqBmjdQBkjYCHjEQCOjNCLh5QCYiEB1AAQCzgBBXAKQCcASBmA8QEPCfgyHqQgCChgbDfQgdDtgvDZQh0IdiTBXQhUAxhUAAQhEAAhFggg");
	this.shape_55.setTransform(162.2127,177.7211);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#75848E").s().p("AASBYQBQjGhXj2QAmBHBNBqQA2BLAzA9Qh+DCiJBlQhDAyiDA3QCyhdBGiwg");
	this.shape_56.setTransform(239.425,294.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#75848E").s().p("AgPglQAPAgAQArQgZgvgGgcg");
	this.shape_57.setTransform(239,255.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#90A4AF").s().p("AFoUnQhWgdhMhkQgngzgRgQQghghgmgJQhmgUgogNQhCgVgzg6QgmgrhQiUQhKiHgfgYQgTgPgrgLQg2gLgggIQh/gghWhPQiPiBhWiFQhxiwAmh0QAGgSAngVIBYgrQCKhFA9hdQBIhtBbisICXkpQCrlRBEghQBIgiCBgJQCOgJCSAbQF1BGCbD7QBWCNBADeQBBDeAbD8QA9I+iRGYQjWEpiOBxQhuBXheAAQghAAgfgKg");
	this.shape_58.setTransform(172.4516,197.6721);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#50616C").s().p("ADvLbQhnAAhTgoQhTgngyhIQgwhHgciSQgRhZgVjOQgilOgsiOQhLjziig6IAGgVQDWAfCODCQBTBxBmEFQA1CGAdA5QA9B2BVBsQAvA7BZBfQBIBMATAgQAeAxgYAmQgZAohGAbQhFAbhUACgAjvl0QAjCHAgEvQAVDMAQBWQAbCQAuBDQAwBGBRAlQBSAlBmgCQBNgCBCgYQBBgZAWgiQARgcgZgoQgRgdhGhJQhYhdgxg+QhWhtg+h5Qgcg1g3iLQhdjuhEhmQh0iving0QB+BYA9Dmg");
	this.shape_59.setTransform(630.9133,128.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8C5CB").s().p("ABcEuQhRh5hTjJQhXjcgqhdQhJichKg7QBrBJBNCIQAqBKBRDJQBODDBBBwQBmCvCRCDQiRhShwilg");
	this.shape_60.setTransform(635.475,121.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#90A4AF").s().p("AEAJ4QhIgSg0gzQh0hzhJkhQgThLgjipQgfiagVhJQgehthDhTQhMhdhmghIgWgJQEAAlCcEZQAvBWA+CeQBDCoAcA2QBQCdBXBmQAvA4BGBEQAiAhgWAfQgUAeg3AMQgaAGgcAAQghAAgigIg");
	this.shape_61.setTransform(626.4164,120.8965);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#75848E").s().p("AhDI9Qg6hUgejSQgckFgRiHQgfjzg4iFQhLiwiLgyQEAAlCbEZQAwBWA9CeQBECnAbA2QBeC2C9DIQBHBLASAdQAcAugVAiQgXAmhFAZQhHAbhVAAIgDAAQjRAAhkiTg");
	this.shape_62.setTransform(630.575,128.9253);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#50616C").s().p("Aj/EyQiIhPgwiJQgQgsgEgsIgCgjIABgGIAFgDQAhgTBthFQCxhxBagiQCQg3CQAgIACABQCUBCAwAqQAaAXgFASQgGAag+gGIgBAAQhQgQheAVQheAVhWA1QhhA7hIBbQhIBbgkBuIgFANgAgpkAQhXAiitBvQhtBEgdARQAAA8AaBBQAuBxBvBFQBHjKCsh7QCfhzCrAAQAoAAAmAIQAWACANgDQAJgBABgDQABgIgagTQgygniBg5QgygMgyAAQhZAAhYAjg");
	this.shape_63.setTransform(560.5903,86.7365);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B8C5CB").s().p("Ai6AqQBBgqBDgeQDChcB0AsQhRgIh5AtQgtARkIB1QASgRAzgig");
	this.shape_64.setTransform(555.825,67.7132);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#90A4AF").s().p("AktA+QDBh6BSgiQCWg+CQAfQAiAggBATQgBARgeAOQhmAehBAeQiTBYhFAVQggAKgcAAQhNAAgzhKg");
	this.shape_65.setTransform(557.1014,70.1651);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#75848E").s().p("AmvBYQgPgqgEgrIgBghQArgZCDhTQBmhBA+gfQC4hbCnAmQCvBOAgAqQAaAkhOgHQhRgRhfAVQhgAVhaA3QjNB9hNDoQiFhOgviFg");
	this.shape_66.setTransform(560.6594,86.4799);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#50616C").s().p("ArXUCIgCgBIgCgBQiOhagfmNQgSjkAWkuQAVkcA0kcQAzkbBDjHQBGjUBHg+QCzieDBgxQCugsBlA9QAYAOAZBBQAQArAiB5QBqFvBqC0QC8E/EtAzIAFAAIADAFQA3Bmg9CPQgzB4h1B1QhoBng8AQQgdAIglABQgWAAgsgCQg7gDgZADQgrAFgXAXQgSASgSAhQgLAVgVAtQgeBCgTAfQghA1gmAdQgkAbgzAVQgdALg/ATQgvAOgVAIQggANgOAOQgJAIgWAoQg+Bvg/A3QhxBkilAAQgkAAgrgFgAjDzeQi5AwiuCZQhAA5hEDHQhEDGg0EdQg1ElgVEjQgUEjARDfQAPC8ApB3QApB3BAArQDCAYB9hiQBGg2BFh7QAYgqAKgLQARgQAjgOQAUgIA0gQQA6gRAfgMQAxgUAigZQAjgbAfgxQASgeAdhBQAWgvAMgWQATgiATgUQAVgVAfgJQAagHAlAAIA0ACQApADAXgBQAjgBAagHQA6gPBjhkQBvhwAyh0QA4iCgvhcQkyg2jAlEQhsi3hqlyQgghvgPgpQgYhDgTgMQg3gghMAAQg7AAhJATg");
	this.shape_67.setTransform(591.372,191.8237);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F6ACB5").s().p("AqCO4Qg7gbgpirQgmiegQj6QgkoTBFnmQCABSDKA8QAbhiBWhpQBehzBzg7QCFhGB9AdQCTAhB3ClQBjDqBUCEQBsCrBpAnQhdEbjRBEQg4AShfAJQhPAHgUAMQgmAZhCCFQhECJg6ArQg5ArhqgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgYAnQhJB5huAAQgVAAgWgFg");
	this.shape_68.setTransform(587.2191,205.8378);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F598A3").s().p("AqDStQhUgogulCQgqktAJmSQAJmfA7ktQBDlTBuhBQECibCQgoQCwgxBnBWQAuAmBOC7QAvBvBtESQBmD4BVCJQBxC2BtAoQheEcjRBEQg4ASheAJQhQAHgTAMQgmAZhDCFQhDCJg6ArQg5ArhrgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgXAnQhKB5htAAQgVAAgXgFg");
	this.shape_69.setTransform(587.2785,181.3231);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#90A4AF").s().p("ArWT3QiAhRgjlcQggkxAtmuQAqmTBXlLQBblXBehTQC0ieC/gvQCogpBgA5QAgATAzCwQBLEEArBuQDQISGLBCQBQCTijDbQg9BThNBBQhGA9gpALQgjAJh5gEQhegEglAlQgaAag3B2QgzBug2ApQg0AmhxAjQhrAfgWAXQgHAHgoBEQgoBGgqAtQh0B5i1AAQglAAgpgFg");
	this.shape_70.setTransform(591.4168,191.8135);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#50616C").s().p("AAHAaQg+AAglgaIgYgZQAtAbBEACQA7ACA3gQIAHATQg0ARg4AAg");
	this.shape_71.setTransform(519.5,520.05);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5B5C5C").s().p("AgRAxQgpgSgfgbQgmgiAEgbIABgLIALACQBbANA8AWQA9AWAVAZIADAEIgBAFIgDANQgEANgFAJIgCAFIgFABQgRADgRAAQgrAAgtgUgAhKgLQAgAcArARQAzATArgIIAHgUQgUgUg1gRQg0gShMgNQAHAPASARg");
	this.shape_72.setTransform(420.6852,664.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#828282").s().p("AgsAWQhJgrAFgkQBXANA7AVQA8AVAUAYIgDALQgDAMgFAJQgRAEgRAAQg3AAg6gkg");
	this.shape_73.setTransform(420.6369,664.9565);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#868787").s().p("ABqCSQgSgXg6gTQg5gUhWgNIgPgCIAGgMQAHg5AxhBQA3hJBBgXIAKgDIAEAKQBODEgVBjIgFAYgAgwg1QgpA2gKAyQCWAYA4AqQAJhbhAiiQg2AWguA9g");
	this.shape_74.setTransform(420.5811,653.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E4E4E4").s().p("AAJBbQg3gmgPgeQgRghAOgoQARgvA4gnQgFgEAEgDIADgBQBNC/gVBiQgFgSg1gkg");
	this.shape_75.setTransform(425.2942,652.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B7B6B6").s().p("AAgBkQg7gVhYgNQAHg2Aug/QA1hIBAgVQBNC/gVBiQgTgYg8gVg");
	this.shape_76.setTransform(420.8655,652.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D2D2D").s().p("AgKAAIAAgBIACgEIATAFIgCAFIAAABg");
	this.shape_77.setTransform(431.5,669.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgEgIIAHAEIAMAEIAAAAIgEAIIgZAEgAACgLIAAAAIABAHg");
	this.shape_78.setTransform(430.575,670.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2D2D2D").s().p("AgLABIACgGIAVAEIgCAGIgBABg");
	this.shape_79.setTransform(431.9,667.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2D2D2D").s().p("AgIAQIAHgGIgJgDIAEgXIARAWIgBAGIgKgCIAAAAIgHAHg");
	this.shape_80.setTransform(432.075,666.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D2D2D").s().p("AgLAAIACgCIABgFIAUAHIgCAFIgCADg");
	this.shape_81.setTransform(431.225,669.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2D2D2D").s().p("AgKAAIAAgCIABgDIAAgBIAUAGIAAAAIgBADIgBAEg");
	this.shape_82.setTransform(431.7,668.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5B5C5C").s().p("AhWAsQh8gQgMgwIgCgRIALgBQDdgYDMAcIANACIgJAXQgPAdhBAQQg3AOhOAAQguAAgrgGgAjFgSQAHANAbAJQAeAMAyAHQBXALBVgMQBUgLAVgZQhlgNhqAAQhaAAheAJg");
	this.shape_83.setTransform(386.5,661.3638);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#828282").s().p("AgIAnQhPgCg3gPQg+gRgGgbIgBgFQDbgXDMAbIgEAJQgOAahBAPQg2AMhFAAIgOAAg");
	this.shape_84.setTransform(386.375,661.3785);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#868787").s().p("ADRCMQjJgbjbAWIgKABIgCgJQgIgtAQgvQAPgvAlgqQAjgpAsgXQArgWAoABQAsACA3AlQA2AmAlA2QAaAmAIAlQAJAlgLAdIgDAIgADLB1QAMgwgshCQgigxgygjQgygjgngBIgEgBQghAAgnAVQgmAWgfAjQgfAkgOAnQgPAoAEAmQBggKBcAAQBvAABrAOg");
	this.shape_85.setTransform(386.5491,646.0979);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E4E4E4").s().p("ABhB7QhhgHhCgiQg7gfgXgtQgXgpARglQARgnAzgOQAQgDANAAQBNADBQBbQBSBdgbBGIg6gGg");
	this.shape_86.setTransform(392.0078,646.0464);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B7B6B6").s().p("AjVB9QgQhZBLhUQBIhSBQACQBNADBPBbQBSBdgaBGQjMgbjbAXg");
	this.shape_87.setTransform(386.5507,646.0463);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5B5C5C").s().p("AjPA4IgEgJIAJgGQCihUDugfIAOgBIgDARQgIAshwAoQhaAjhcALQgdAEgYAAQgzAAgKgUgAivA0QAcAGAzgIQBVgLBSgdQBYgeAXgeQjSAeiTBIg");
	this.shape_88.setTransform(341.25,665.45);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#828282").s().p("AjGAzQCihUDrgfIgBADQgLA5i5AuQhJATg5ADIgUABQgrAAgHgOg");
	this.shape_89.setTransform(341.325,665.4799);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#868787").s().p("AjMChQgPgqAJhGQAKhKAgg6QAphJA+gOQAxgKA9AcQA0AXAsApQAmAjATAkQAUAigEAcIgBAIIgJABQjpAeifBVIgKAFgAg8iUQg1ALgkBBQgcAxgKBBQgKA8AKApQCehPDegeQgBgWgSgcQgSgcgegcQgqgngxgWQgngSghAAQgMAAgLADg");
	this.shape_90.setTransform(340.877,654.6818);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E4E4E4").s().p("AgJBiQhFgOgogiQgnghACgoQADgrAxglQBPgLBdBNQBcBLgGA9QgrAGgoAAQgrAAgmgHg");
	this.shape_91.setTransform(345.6608,648.9442);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B7B6B6").s().p("AjBCgQgZhHAjhsQAoh4BRgSQBOgRBjBQQBhBOgIA9QjrAfiiBVg");
	this.shape_92.setTransform(340.8141,654.468);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5B5C5C").s().p("AgzBWIgBgBIgGgFIgEgDIgQgQIgGgHIAFgHQA3hIBcg5IAPgKIACASQABAagEAPQgSBBhjA5IgHAEgAg4A1IABAAIAPAOQBWg0APg2QACgJAAgGQhIAxgvA6g");
	this.shape_93.setTransform(309.9688,680.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#828282").s().p("AgqBNIgFgDIgYgXIgBgBQA3hGBZg4QACAWgEAPQgQA8hgA4g");
	this.shape_94.setTransform(310.1225,680.625);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgJAFIAOgPIAFAGIgNAPg");
	this.shape_95.setTransform(304.075,686.925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2D2D2D").s().p("AgHAIIANgQIABABIgMAQg");
	this.shape_96.setTransform(305.8,688.35);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2D2D2D").s().p("AgJAGIANgQIAGAFIgNAQg");
	this.shape_97.setTransform(305.025,687.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#868787").s().p("Ag+CUQgTgVgGgYQgPg2ABiRIAAgDIACgCQArhCA0AMQApAKAgA6QAcAyAFAyIAAAHIgGADQhYA3g1BGIgIAKgAhPhcQgBCKAOAzQADAOAKANQAzhABRg0QgGgtgZgrQgbgugegIIgLgCQgeAAgdAsg");
	this.shape_98.setTransform(308.2969,671.5327);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B7B6B6").s().p("AhNBnQgPg1ACiOQA5hXA9A7QA3A0AIBVQhbA4g1BIQgRgTgHgXg");
	this.shape_99.setTransform(308.2632,671.1829);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2D2D2D").s().p("AgKADIAPgMIAGAFIgOAOg");
	this.shape_100.setTransform(303.2,686.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2D2D2D").s().p("AgKAGIAEgIIAJgJIAIAKIgIAFIAAABIgHAHg");
	this.shape_101.setTransform(302.65,685.275);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2D2D").s().p("AgIAHIAPgPIACACIgOAPg");
	this.shape_102.setTransform(303.675,686.55);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2D2D2D").s().p("AgIAGIANgPIAEADIgNAQg");
	this.shape_103.setTransform(304.575,687.375);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2D2D2D").s().p("AgGAIIgBgBIAMgRIABACIACACIgLARg");
	this.shape_104.setTransform(305.55,688.15);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#424B4F").s().p("AnZC1QiAgggzg7IgGgHIAGgHQBliDDYhMQDZhMEagBQCzgBCLAcQCLAcAiAtIAEAEIgBAFQgHAegQAZQgvBCjKBKQjLBLjXAcQhYALhZAAQiUAAh0gdgAk/hyQjTBIhjB8QA/BBCrAbQCsAcC9gZQDPgbDIhIQDJhIArg/QANgRAFgYQghgkh7gZQiFgcirAAIgLAAQkRACjSBHg");
	this.shape_105.setTransform(367.3,677.3983);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5F6B73").s().p("AmRC4Qi1geg/hIQBkiBDRhKQCyg+DlgMQDKgLCrAdQClAcAlAvQgHAegOAVQgtBAjKBJQjLBKjSAbQhZAMhWAAQhiAAhdgPg");
	this.shape_106.setTransform(367.425,677.4079);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#50616C").s().p("EgB7AgtQiLgtgWhPQgLgngChJQgCguAChpQACiLgChEQgFh0gUhOIgHgeQgqiigKhDQgQhiAEh2IgjgkQjXjXiDikQjzkwgZjBQgRiFAGiQQAEhYAWi+QAYjVAJiKQAFg+gCiKQgDjKANhqQAViyBLiGQAJhVCHhWQB6hNCoguQCFgkBeAFQBdAGAgAtIgRANQgbgnhagDQhZgDh7AhQifArh6BMQiEBTgGBLIAAADIgBACQhJCCgWCwQgMBnACDKQACCLgEA/QgJCJgZDXQgVC6gEBaQgHCOARCEQAYC7DxEtQCCCiDVDVIAnAnIADAEIAAAEQgFB3APBfQALBCAqCkIAHAeQAUBPAFB2QADBFgCCMQgCBqACArQACBHAKAmQAXBUC7AqQC5AqDigeQDQgbDJhIQDIhIAshAQAjgzgThpQgThphKiiQglhQgRiRQgLhagLjRQgNjqgMh0QgOh/h/i5QhNhxjLjwQhxiIg2hEQhbhyg7haIgCgCQgyhJgahPIgQg/QA0CBB/CsQBLBnCuDPQDND0BOBxQCAC9AOCCQANB1AMDqQALDQALBYQARCQAkBNQBOCqASBsQASBtgoA6QguBDjLBKQjLBLjYAcQhUALhcAAQi0AAh/gqg");
	this.shape_107.setTransform(327.9776,484.8886);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#50616C").s().p("Ah8A3QhSgBhDgYIgygYQCeAqDJgVQC+gVBig9IgjAgQg1AihWAUIgEABQhvAXh7ABg");
	this.shape_108.setTransform(357.025,596.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#50616C").s().p("AiYA/IgLAAQhUgGhGgaIg0gYQDUA5DmgbQDagZBPhNIgcAjQguAnhYAaIgNADQh4AciNAAQgrAAgrgDg");
	this.shape_109.setTransform(355.675,583.575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50616C").s().p("AgDgxQi6gIiBBZQAPgRAfgUQA+gqBUgQIAIgCQB5gTBvAcQB9AfBQBUIgQAPQhth0jFgHg");
	this.shape_110.setTransform(317.15,441.1247);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#50616C").s().p("AlGAoQA5gtBMgfIAHgDQCWg2CNAWQCPAVB4BgIgNARQiah7i+AFQi8AEi+CCQANgRAcgWg");
	this.shape_111.setTransform(322.075,454.8816);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#50616C").s().p("AgdBNQAEhGAcgxIAbgkQgeA7gHBig");
	this.shape_112.setTransform(291.6,559.625);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#75848E").s().p("AlxgMQCqAvCdABQD4AACkh5QgJArhHArQhLAuhoAWQhNARhIAAQizAAiYhig");
	this.shape_113.setTransform(355.675,585.5185);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#75848E").s().p("Ai0A6QhmgYgpgyQB+AvClgCQDTgCCRhjQgQA8hYAmQhQAkhyAJQgfACgeAAQhOAAhDgPg");
	this.shape_114.setTransform(357.025,598.5454);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8C5CB").s().p("AGxQwQhLh2gSgxQgjhhgpkDQgrkMgLjKQgFhbhwi3Qg6hdi8kLQisj1hLiCQhzjHgGh3QA5CMCPDAQA9BTDTEBQCrDRBLB2QBvCrANB3QATCyAPFEQAREGAxBrQBlDcAAB1QgShDhHhug");
	this.shape_115.setTransform(380.25,537.625);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#90A4AF").s().p("AItcfQhbgPjwgKQi/gIhOgdQhzgrgQhyQgOhqguiQQhCjOgFgUQghh8AGhiQAIh5BBh2QgLgMhfg9QhyhKhJg5QkFjNgejQQghjjAIi6QAUj3AOjKQAVlHAjh9QBIkICuA0QAGhIBBhkQA+heBXhQQBZhTBLgbQBTgeAkAzIiQVNQA5CMCODAQA9BSDUEBQCrDRBMB2QBuCrANB4QATCxAPFFQASEGAwBqQBmDegBB1Qh5hZjAggg");
	this.shape_116.setTransform(345.4131,468.2694);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#75848E").s().p("EgAyAg1QjHgrgZhdQgPg3ADj0QAEj4geh1Qgwi8gKg/QgRhlAFh8QiyisiXiyQkmlcgbjTQgXizAXjpQAjkiAOjKQAEg/gCiAQgCiLADhEQALj8BeioQAGhGBqhMQBhhFCPgxQCNgwBygFQB8gFAkA0IBsVLQA5CMCPDAQA9BSDUECQCrDQBMB2QBuCrANB4QATCxAPFFQASEGAwBqQBFCXAWBkQAbB7gqA8QgtBCjKBJQjLBJjTAcQhcAMhXAAQh4AAhtgXg");
	this.shape_117.setTransform(328.0071,484.9623);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#868787").s().p("AhFBFQhOgtgPgvQgKgiAcgTQAugmBCAAQAtAAArATQArAUAcAhQAyA8gQBRIgBAGIgGACQgdAIghAAQhRAAhQgugAiEg8QgRAMAHATQAMAnBGApQBLAsBNAAQAZAAAZgGQALhEgqgyQgYgegngRQgngSgpAAQg6AAgqAig");
	this.shape_118.setTransform(395.4511,706.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B7B6B6").s().p("AAgBiQg7gOgzghQgzgggSggQgTgkAdgUQAnggA5gDQA0gDAxAZQAzAZAYAtQAdAxgNA8QgbAIgfAAQgdAAgggHg");
	this.shape_119.setTransform(395.45,706.684);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#868787").s().p("Ah0CBQhFgagbgnIgDgDIABgFQAchlBKg5QBCgzBMAAQBWAAA1A9QA9BJgSB7IgBAFIgEADQhGAqhoAAQhPAAhGgZgAhjhXQhEA0gaBcQAaAhBBAWQBAAWBHAAQBeAABBgmQAQhvg3hAQgWgagggOQgggOglAAQhFAAg8Aug");
	this.shape_120.setTransform(438.5389,712.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#E4E4E4").s().p("AgdBNQhngmgfhOQAugrA7gOQA5gNAyASQA2ATAeAvQAhAzgCBLIgmABQhUAAhHgZg");
	this.shape_121.setTransform(442.7057,707.9911);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B7B6B6").s().p("AgeCLQiEgTgqg9QAbhlBLg4QBEgzBOAGQBQAGAsA9QAyBEgRBuQhFAqhfAAQghAAgigFg");
	this.shape_122.setTransform(438.5907,712.1686);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#868787").s().p("AidCDQgpgQgPgaIgCgCIABgFQAThqBYhAQBPg6BhAAQAtAAAkAOQAkAOAXAbIACACQALAXgMAkQgLAigeAlQgpAyg9AcQg9AchFAAQg1AAgpgQgAhdhIQhSA7gSBfQANAUAkANQAkAMAtgBQAyABAugRQBJgYAvg6QAageAKgdQALgegHgSQgqgvhSAAQhXABhLA1g");
	this.shape_123.setTransform(489.3439,713.85);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E4E4E4").s().p("AjFBKQAzh7CMgkQA7gPA2ALQA3ALAfAkQAJATgJAeQgJAegYAfQhsAWhGAEIggABQhQAAhDgVg");
	this.shape_124.setTransform(490.125,709.6255);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B7B6B6").s().p("AiUB8QgqgPgPgYQAOhNA1g3QAwgyBEgXQBBgWA9AJQA/AKAiAnQAKAVgMAhQgLAfgbAiQhPBgiEAGIgNAAQguAAgngNg");
	this.shape_125.setTransform(489.3576,713.8439);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50616C").s().p("Aj8ABQgegSgUgXIgPgUQB8BsDggKQB5gFCmgsQgYARg0ARQhpAkiMABIgJABQiUAAhcg8g");
	this.shape_126.setTransform(450.525,678.1532);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#50616C").s().p("AAFAuQhhgChGgtQgWgOgQgRIgMgOQA6AvBpASQCAAVCGgqQgNANggAMQg8AYhWAAIgRgBg");
	this.shape_127.setTransform(446.75,661.9612);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#50616C").s().p("AlobmQi7gNikgoQijgohQgzQhLgvALg0QARhZA+mGQBJnQAjjHQA+lbAhhIQAohaBIh+QAshNBkikQCpkVBGiIQB2jjAkihIAVAFQgkCkh3DkQhHCJiqEWQhiCjgtBNQhIB+gnBZQggBGg+FaQgkDPhIHFQg9GDgSBdQgIAlA+AoQBPAyCjAnQCfAnC2ANQDAANCXgTQCngUBQg6QAcgVABhRQABgzgPiPQgYjxAAiQQAAj5A3jdQArirCRjIQBYh6Dlj+IAXgaQBnh0AyjCQAvi0gFjdQgGjWgzjRQg0jUhZiiIAiAqQAqA/AqBwIACAJQB0FdgUFpQgVGGiwDEIgXAaQjjD8hXB5QiPDFgqCoQg3DbAAD3QAACQAYDtQAPCagBA1QgDBTgjAaQg/Ath0AZQhzAYiaAAQhKAAhRgGg");
	this.shape_128.setTransform(482.6072,546.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#50616C").s().p("Ai3A7QBRhtB6gSIATgCQBQgGAoAeQAVAPAEAQQgZgTgpgJQgvgLgxAHQhxAShKBlg");
	this.shape_129.setTransform(445.05,503.7068);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#B8C5CB").s().p("AlDaoQACgcgdiOQgli3gQh6Qg8nQB5laQAsh/BJhpQAzhJBchhQB4h9AggnQBVhlA6huQCXkjgNmpQgMl4h5j+QBaClA3DVQA1DUAHDVQAHDfgtCzQgxDChnB0QjxENhWB2QiZDPgsCuQhNE1AhGTQAIBiAQCdQAIB0gQArg");
	this.shape_130.setTransform(540.9494,539.65);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#90A4AF").s().p("Aoba0Qhogcg6gtQg7gtAEgxQAEguBFghQAzgZBtgYIC6gpQBngZAwgbQh7AZh5gbQh0gZhchCQhchCgxhbQgyhgAIhoQAGhLABiIQABiTAFhFQAPkEBejaQCBkUBskJQDUoIgMigIAWiEINalyQBaCmA2DVQA2DTAHDWQAHDeguC0QgwDBhoB0QjxENhXB2QiZDPgrCvQhRFDApG9QAWDlAAAcQADBqgkAaQgcATgiAPQiJAah9AAQiQAAiAgjg");
	this.shape_131.setTransform(500.992,544.2387);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#75848E").s().p("AnybSQjfgeiPg5Qiag+AOhDICGs2QBoqAArhhQAxhtBqi0QCCjVBChvQD5miAyjkINqneQBaCmA2DVQA2DTAHDWQAHDeguC0QgwDBhoB0QjxENhXB2QiZDPgrCvQhRFDApG9QAWDlAAAcQADBqgkAaQhhBGjZAQQhCAGhFAAQiJAAiYgVg");
	this.shape_132.setTransform(482.6923,545.8111);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#868787").s().p("ACdCAQhPgNhTgdIgDgBQg7glhdiSIgIgMIAOgEQCWgqBaBKQArAiAWA0QAWA2gEA8IgBAMgAiGhhQBVCCAzAhQBJAZBJAOQABg0gUgtQgUgsgkgdQg0gqhMAAQgkAAgrAKg");
	this.shape_133.setTransform(502.249,673.9147);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B7B6B6").s().p("AgFBNQg4giheiSQCZgrBXBRQBNBFgHByQhPgMhRgdg");
	this.shape_134.setTransform(502.5543,673.8014);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#868787").s().p("AjWB6IgKgBIABgLQAGhrA/hAQA0g2BJgLQBKgKBDAnQBMAsAiBcIADAJIgJAFQiSBMixAAQgzAAg4gHgAgahoQhAAJguAvQg4A4gJBeQBtAMBlgQQBmgQBXgsQgghQhDgmQgvgagyAAQgNAAgPACg");
	this.shape_135.setTransform(542.575,675.0136);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E4E4E4").s().p("AhrBSQg4gTgHgmQgHgqA6g8QBTgkBSAlQBZAoAlBmQhJAYhOAFIgcABQg7AAgpgOg");
	this.shape_136.setTransform(546.5324,672.719);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B7B6B6").s().p("AjTBvQAGhiA3g9QAzg5BKgKQBJgKBAAoQBGArAeBVQhcAwhsASQg5AJg9AAQg0AAg1gHg");
	this.shape_137.setTransform(542.475,675.0087);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#868787").s().p("AhPChQggg8ADhLQAEhJAng4QAbgmAkgQQAkgRApAHIAHABIALA1QAOBHABAYQADAjgNAPQhFBRhdA0IgJAFgAACiHQgbAOgWAfQgiAwgFBAQgFBBAaA1QBVgxA+hJQAIgKgEghQgDgWgMg9IgHgnIgLAAQgbAAgYAMg");
	this.shape_138.setTransform(571.9538,663.1082);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E4E4E4").s().p("AgqBnQgggQgKggQgLgmAUgyQAXgpAkgUQAkgWAtAHIAWB3QAGAwgMAOIgDAEQgWAagjAIQgLACgKAAQgWAAgUgJg");
	this.shape_139.setTransform(572.8326,658.4322);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_140.setTransform(571.9369,662.9385);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_141.setTransform(571.9369,662.9385);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#50616C").s().p("AgEAtIgIgBQhBgHg0gTQg2gTgcgdIAPgPQAyAyB8AQQB7APBvgfQgPAMgjALQg3AShKAAIglgBg");
	this.shape_142.setTransform(518.775,612.63);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#50616C").s().p("AgGAsIgHgBQhGgEg0gRQg6gTgbghIARgOQAuA4CUAJQCIAIBegiQgQAOgkANQg8AXhSAAIghgBg");
	this.shape_143.setTransform(524.425,629.0215);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#50616C").s().p("EAKsAieIgCgBQhyhHjOmdQjPmeiwoAQkYCGkDgVQkDgVjriuQjbiji1kgQi1keh4l4QhqlPgllNQgklNAqj/QAfi4BFhxQBEhxBnggQG4iOJJgRQG8gNHwA6QGYAwF6BYQFKBNBtA4QCNAtBYDwQBODVAbFNQAYExgYE/QgYE6g+DMQg8DIhhEhQheEYgjB9Qg6DKgUCiQgYC6APC0QAJBnAcCOQAOBGABAYQADAkgNAPQhaBpiCA4QiAA3iXAAQiWAAiZg2gAgFMIQC3IUDUGjQDGGJBoBCQDmBRDRgqQDQgqCDiZQAIgKgEgiQgDgWgMg9QgciRgIhnQgQi2AYi8QAVikA6jLQAkh+BdkYQBtlJAwigQA/jQAYk5QAXk6gZkuQgclbhTjTQhUjUh8gmIgCgBQhjgzk2hLQl9hbmtgyQmXgwlvAAQqrAAnzCgQhgAfhBBsQhBBsgeCyQgpD9AkFKQAkFLBqFMQB3F1CzEbQCyEdDZChQDoCtEAASQEBATEUiHIALgGg");
	this.shape_144.setTransform(433.1506,461.9068);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B8C5CB").s().p("Aiwc2IgsiGQg+jbARlBQAQkpB1lzQBFjUAjh1QA+jOApi9QBWmIgEn5QgEo9iGkDIAZAKQBiBxA6D1QA0DeANEmQAMEVgZEQQgZERg4C4QhTETiPGpQhtFUgcDbQgiEHAtEIQALA+ARBYQAJA5gNAQQABgqgUg+g");
	this.shape_145.setTransform(596.7079,470.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#90A4AF").s().p("AMnfLQgChXBuhBQBAgmCag0QhvASg8gkQg7gjgRhaQggisBVjzQARgwA9iZQAyh7AVhKQAmhygRhsQgViChhg8Ih6hHQhGgqgsghQh3hcgjh3QgtjEgVhkQgmisgVh8Qh4Glj4D4QhoBphoAxQhkAuhLgRQjMgvjyjnQjQjHh5jWQgXDNh/CsQhyCai+B1Qiskxhpl8QhklngTlVQgSlWBGjjQBKjxCcgyQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDTAbFIQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEIAtEIQAKA+ASBXQAJA6gNAQQioAlimACIgMAAQlCAAgDipg");
	this.shape_146.setTransform(433.1901,453.1319);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#75848E").s().p("EAKwAiVQhshEjLmSQjTmki1oOQo1EUnZlkQjMiairkHQicjyhyk1Qhrkjg1k1Qg0kuAIkEQAIkJBGiqQBKi1CEgqQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDTAbFIQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEIAtEIQAKA+ASBXQAJA6gNAQQiFCbjWArQhJAOhLAAQiQAAiXg1g");
	this.shape_147.setTransform(433.1969,461.8076);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#868787").s().p("AiPArQgTgPgMgjIgCgGIAFgFQAeggAugOQAvgOA0AGQA3AHAsAaQAuAZAWAlIAGALIgMAFQgpARgyAKQgvAJgsAAQhbAAgjgggAhUgsQgoALgbAaQAJAXAMALQAgAbBVgBQBVgBBJgcQgVgdgngUQglgUgvgFQgNgCgOAAQgfAAgbAIg");
	this.shape_148.setTransform(297.75,652.735);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B7B6B6").s().p("AiHAjQgQgOgLgfQA/hCBuAQQBtAQArBJQhOAghcADIgLAAQhUAAghgdg");
	this.shape_149.setTransform(297.6,652.7241);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#50616C").s().p("AhlLBQgggcgShnQgLhDgQi2Qgck1gginQg3kihpi8IgFgIIAHgGQASgNAegRQA9ggBEgQQDYgzDWCAQBwBDAvC5QAkCMgDDGQgDDvg4DxQg2DngzAcQgrAZg8ANQg4ANg4AAQhZAAgkgfgAkZqnQg2AUgoAcQBoC+A3EiQAfClAcE1QAQCvAKBAQARBnAbAYQAkAeBkgFQBpgGBLgqQApgWAzjZQA5jvAEjyQADjegviTQgviThbg3QiUhYiWAAQhfAAhYAig");
	this.shape_150.setTransform(293.4615,586.5735);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#75848E").s().p("AhfK5QgjgegUiWIghlVQg3oaiYkQQAQgMAdgQQA6ggBDgQQDUgzDUB/QB3BHAsDUQAlCygTD5QgRDWgxC6QgvCygoAWQhMArhrAGIghABQhPAAgggdg");
	this.shape_151.setTransform(293.6336,586.5465);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,474.6,373.7), null);


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


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2D2D2D").s().p("AgHFLQg0gegugyQg6hBghhVQgvh4APiOQAMh0BCgxQAqghA5AAQAtABAtATQAuAVAjAiIABACQCPCtgnDqQgUB2gyBWQgVAegtABQgtgBgzgcgAiekjQgpAvgJBWQgOCIAtB0QAgBRA4A+QAqAuAvAdQAxAcAoAAQAigBAPgVQAwhTAThxQAljhiIinQghgfgqgTQgqgSgoAAQhCAAgpAvg");
	this.shape.setTransform(298.839,236.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgSANgMQANgNARAAQASAAANANQANAMAAASQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_1.setTransform(297.575,237.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D2D2D").s().p("Ag7BgQgZgoABg4QgBg4AZgnQAZgoAiAAQAjAAAZAoQAZAoAAA3QAAA4gZAoQgZAogjAAQgiAAgZgog");
	this.shape_2.setTransform(296,244.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E73B5").s().p("AhaCLQglg5AAhSQAAhQAlg6QAmg6A0AAQA1AAAlA6QAmA6AABQQAABSgmA5QglA6g1AAQg0AAgmg6gAhLh8QggA0AABIQAABJAgA0QAfAzAsABQAtgBAfgzQAfg0AAhJQAAhIgfg0Qgfg0gtAAQgsAAgfA0g");
	this.shape_3.setTransform(296,243.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#53A2D9").s().p("Ahkh8QAQgbAWgPQAWgQAZAAQAwAAAiA2QAiA3AABNQAAA/gXAyQgZAyglAQQhghsgUjHg");
	this.shape_4.setTransform(297.6,242.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#538BC8").s().p("AhSCEQgjg3AAhNQAAhMAjg3QAig3AwAAQAxAAAiA3QAjA3AABMQAABOgjA2QgiA3gxAAQgwAAgig3g");
	this.shape_5.setTransform(295.975,243.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiilLQA1gUBAASQA8ASAuAtQCNCsgnDnQgUBzgwBSQgFAHgIAGQkph7A1ong");
	this.shape_6.setTransform(304.0321,236.0862);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1E1E1").s().p("AA2FZQhCgRhBhAQhKhHgmhlQgsh0AOiIQARikB4gWQAxgJA2AUQA0ATAoAnQCNCsgoDnQgTBzgwBSQgTAbgmAAQgQAAgUgFg");
	this.shape_7.setTransform(298.8632,236.7828);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2D2D2D").s().p("AhVgBQgJgSgDgSIgBgQIANAhQAWAhAsAMQAgAJAagOQAjgTAUg4QAJAtgHAOQgcA1g9gBQhCgGgagzg");
	this.shape_8.setTransform(267.2205,221.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D2D2D").s().p("AguBEQgwgigJg+IABg4IAJAsQASAwArAdQAWAPAggHQAkgHAggeIAOAPQgYAqgqAPQgQAFgQAAQgbAAgZgRg");
	this.shape_9.setTransform(270.15,208.6294);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D2D2D").s().p("AhGAFQgPgcgFgkIgDgeQABALAGAQQAKAdARAZQA2BKBjgCQgEAZgCAAIgUABQhhAAgphVg");
	this.shape_10.setTransform(272.825,199.3145);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D2D2D").s().p("Ag8gRQgFggAEgkIAEgcQgBAJABARQABAfAJAcQAbBYBUAjIgIATQhjgcgRhng");
	this.shape_11.setTransform(281.1658,192.7125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D2D2D").s().p("AiSgoQAYhGA/gcQA/gcBMA3QBKA3AIBNQhAgqhIgGQiPgLgpC6QgKh6AWhCg");
	this.shape_12.setTransform(292.8068,205.8665);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D2D2D").s().p("AAAhNQAygKArAVQAvAWAZAyQg6gnhwAbQhvAagwA+QAxiIBzgXg");
	this.shape_13.setTransform(295.8,158.3887);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#50616C").s().p("AhxALIgggWQAmAWBTABQBkACA4guIAOARQg2ArhWAFIgFAAIgHAAQhAAAgrgWg");
	this.shape_14.setTransform(463.675,473.5796);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50616C").s().p("AhlASIgggUQA3AVBUgKQBVgJAaggIARAOQgPASghAMQghANgoAFIgDAAQgRADgRAAQgsAAghgPg");
	this.shape_15.setTransform(461.05,431.4042);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#50616C").s().p("Ah+APQAugiBMgMIADAAQArgGAoABQAqABAZAJIgHAUQg5gUhsAUQhcAPghAcg");
	this.shape_16.setTransform(447.1875,395.5804);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#50616C").s().p("AioAVQAygiBCgWIAHgBQBEgRA+ADQBDACA1AbIgKATQhSgph1AUQhpAShfA4g");
	this.shape_17.setTransform(428.3,358.9025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#50616C").s().p("Aj8ATQA/grBTgSIAFgBQB3gZB0AQQBtAPA5ArIgNARQhRg9irACQi+ADiQBcg");
	this.shape_18.setTransform(417.875,316.3666);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#50616C").s().p("AAchMQiugejGAjIBHgVQBcgVBqAEIAMABQCOAKBlAuQB2A1AvBkIgTAJQhEiSjmgog");
	this.shape_19.setTransform(423.4,278.0673);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#50616C").s().p("AAUgpQjAgWh/AqIAzgYQBIgYBsAAIAGAAQB/ADBeAfQBsAjAiA7IgTALQgxhYjVgXg");
	this.shape_20.setTransform(435.15,243.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#50616C").s().p("ADwWFQgmhNgCiDIgBgVQgOgrABgxQABhGApgXQAogWBDgNQBLgOAkAPIAEACQgLiYhEiMQhfjEjEiSQhXhChxhFQg+gmiKhPQjIhxhVg8QiLhkhFhnIgHgKQgmhDgKhNIgDhAQAWC4ClCTQBlBZESCbQCEBMBFAqQBwBGBZBCQDUCdBgDYQBDCUAFCfIgVADQgDgJgLgEQgegNhFANQg/ALgmAVQgeAQAAA+QAAAtAMAmIABACIABAYQACB/AjBHQBBCDCwAAQCIAABThVQCQiVgPmRQgEh7hAjJQglh3hejzQg4iRgYhEQgjhlgIg2QgViIAmigQAahxBPjIQAlheARihQALhiAIi4IAAgFQABhJAUhgIAThQQgLBGgHC0QgJDCgKBdQgSClgmBgQhNDFgbBwQglCcAUCFQAIA1AjBlQAVA8A6CWQBeDyAmB6QBBDMAEB+QAPGZiXCcQhYBciSAAQi9AAhHiPg");
	this.shape_21.setTransform(391.9137,362.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#50616C").s().p("AAAAZQAOhLgDhcIAVAAQABB/ghBbQgPAugRAVQAYhCAIg0g");
	this.shape_22.setTransform(436,476.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8C5CB").s().p("ACMP7QgRi5hLjYQgJgZiElKQhRjKgViBQgdi1A4jJQAThEAjhYIAyiDQAahJA7k6QA4koAeg/QgKAvgIBvIgODXQgWEogxB9QhMDFgaBtQgnCiAUCIQAKA/A0COQAeBTBMDFQCUGJAGCxQAJD5g1CbIgNAZQgVA0gfAiQBBjpgVjpg");
	this.shape_23.setTransform(457.3485,355.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#90A4AF").s().p("AJyXpQgwgFgZglQgbgnAOg4QAbhtgEigQgFi8gzieQgviUiCicQiAiaiwh6QhnhIiphXIkKiKQiNhPhPhKQhhhbgkhvIJUwSIQMAAQgKAwgIBvIgPDXQgVEngxB9QhODGgaBtQgnChAVCIQAJBAA0CNQAfBUBMDFQCUGJAHCxQAJD5g1CbIgOAZQgfBNg1AmQgpAdgqAAIgOgBg");
	this.shape_24.setTransform(391.3653,358.5138);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#75848E").s().p("AD1VuQgVg0gFhGQgChDgCgNQgNgpABgvQAAhDAkgSQAygcBPgLQBagLAKAkQgFiSg8iNQhfjfjYihQh7hdjKh1QjxiMg4gmQiVhihNhfQhchygRiPIJLuOIQViDQgKAvgIBvIgPDXQgVEogxB9QhODFgaBtQgnCiAVCIQAJA/A0COQAfBTBMDFQCUGJAHCxQAKEYhECfQhXDQjWgBQjHAAg+igg");
	this.shape_25.setTransform(391.3645,362.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D2D2D").s().p("AALAQQhIgMgrAuQAMhIAggbQAcgXAlAOQAiANAdAkQAdAjAIAmQgbgmhDgKg");
	this.shape_26.setTransform(480.55,160.1101);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#50616C").s().p("AoAKyQgahqAuhXQAdg2BihiQBChEAhgmQA4hDAnhGQAPgbAphVQBzjuBgiFQCqjnDyiHIAOAPQixD3hQE0QguCxgeEwQgQClgNA6QgWBggsAhQhAAxhlgKQg+gGh6gmQhUgagjgFQg6gKgbARQgaARgGAuIgHA6gAl4JWQAmAFBZAbQB2AlA6AGQBgAKA6gsQAngeAUhbQAMg4APigQAdknArisQBLkpCjjyQjbCGicDbQhaB8hrDjQglBMgUAlQgoBIg6BDQghAohDBDQhWBYgbArQgrBGAHBQQALgVARgKQAXgOAkAAQARAAATADg");
	this.shape_27.setTransform(52.2306,114.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8C5CB").s().p("AikGUQAXkaAUhuQAmjRBojYQBfjDBIg2IAUgOQiJDKhJDxQg3CygcDhQgPB7gUDDQgUCMgvAqQgIAEgMADQAZgzASjeg");
	this.shape_28.setTransform(80.325,111.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#90A4AF").s().p("Aj2KBQhYhBgIhvQgGhHA1hlQBAhpATgiQAuhUAwiDQA4ibAYgzQBujuEQiwQiJDKhKDyQg3CxgcDiQgPB7gUDCQgTCMgvAqQgpARgmAAQg9AAg3gpg");
	this.shape_29.setTransform(66.7491,111.9748);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#75848E").s().p("AnwIsQAVg3A+hEQBQhQAsgwQBOhVAwhXIBXiuQBAiDA7hdQC6kkEYibQiVDQhRD6Qg7C4gdDqQgQB/gUDIQgVCPg0AnQg+AwhpgNQg4gGiDgoQhwgigtADQhDAFgKBNQgVhWAbhHg");
	this.shape_30.setTransform(52.3406,111.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#50616C").s().p("AEnApQhYigiJhFQh5g9iZARQiZASisBeQgZAVgNAFQgMAFgHgGQgKgIAJgXQAIgTAmhEQAxhaAMgZIABgCIACgCQB6hcC0gRQC0gRDGBAQCmA1ByBYIAHAGQBLA+AUA6QAKAdgEAQQgZhShthRQhthQiYgxQjAg9iuAPQiuAPh2BZQgVApgnBIQglBDgHARIAagTQCxhiCegRQCegSB+BAQDGBjBiEVIABAEQAnBjAFBgQADAxgGAcQgijyhYiig");
	this.shape_31.setTransform(142.8759,77.5705);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8C5CB").s().p("AFqBgQhSg4hoguQkriGk9ALQBvgmCQAIQCFAJCFAuQCEAtBfBFQBkBIAhBPQgMgUhDgtg");
	this.shape_32.setTransform(156.525,52.4223);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#90A4AF").s().p("AD0BsQg9i3hthmQhihdjDgaQgvgGhWgFQg+gEgMgFQgigPACgdQACgdAhgQQCDgqCaAPQCJAOCGA6QB+A2BZBMQBZBMAWBIIgGENIikD6QAMibg5iug");
	this.shape_33.setTransform(156.0444,77.5179);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#75848E").s().p("ABXi+Qj+iWl1DNQgkAdgHgCQgHgDAPgfQA8hrAohQQB5hcCzgPQCegNCsAyQCiAvB3BVQB6BXAcBcIitIPQhDndkDiYg");
	this.shape_34.setTransform(143.3244,78.1659);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_35.setTransform(470.675,233.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D2D2D").s().p("AgaBpQgUgFgGgjQgGgiALgrQALgrAWgbQAVgbAUAFQAUAGAGAiQAHAigLAqQgLAsgXAbQgRAXgRAAIgHgBg");
	this.shape_36.setTransform(467.4398,239.9318);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E73B5").s().p("AgxCxQgggKgIg5QgHg4AWhKQAUhFAggsQAggsAfAAIAKABQAiAKAGA9QAFA4gUBHQgUBEggArQggAtgfAAQgGAAgEgBgAgHh3QgdApgSA/QgUBCAFA0QAEAwAVAGQAVAGAcgnQAggqAThCQAUhDgGg0QgCgWgGgOQgHgPgKgCIgEgBQgWAAgaAmg");
	this.shape_37.setTransform(467.8472,238.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#53A2D9").s().p("AhBAbQAUhEAhgsQAhgrAbAIQAbAIAFA2QAFA2gUBEIgDANQg2AXhYAXQABguAOgyg");
	this.shape_38.setTransform(467.8593,233.6379);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#538BC8").s().p("AgvCnQgbgIgFg2QgFg3AThEQAVhFAggrQAhgsAbAIQAbAIAFA2QAFA3gTBEQgVBFggArQgcAlgYAAIgIgBg");
	this.shape_39.setTransform(467.85,238.193);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2D2D2D").s().p("Ai5FGQAglTBSixQBFiVBTAAQAnAAAdAiQAYAcAJAqQAKArgHAuQgtEHifCIQgzArg4AYIgvARIgOADgAg4ixQhMCqggFAQBYgcBLhNQB/iCAnjjQAGgqgIgmQgJgmgUgZQgXgageAAQhKAAg/CNg");
	this.shape_40.setTransform(474.1235,229.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhEh1QA2huA/gSQA3gQAlA4QAkA4gNBRQgSBqgmBXQgwAuhNAhQg2AWhgAYQAjjtBAiCg");
	this.shape_41.setTransform(475.1611,221.2472);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E1E1E1").s().p("AhSiMQA3iOBFgjQA9geAqA5QAqA4gNBYQgtEGicCFQgyApg2AYIgtAPQAckqBCirg");
	this.shape_42.setTransform(474.2142,229.0357);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2D2D2D").s().p("AhGgMIAPgMQAZAeA0AFQAbACAXgEQgdAMggADIgQABQgyAAgPglg");
	this.shape_43.setTransform(498,209.1677);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D2D2D").s().p("AhiAgIAFgUQA/AQBGgiQAkgSAXgVQgOAXgaAWQg0Aug3AAQglAAgNgOg");
	this.shape_44.setTransform(499.85,200.125);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D2D2D").s().p("AhgA6QBDgQBFg8QAjgeAWgcQgTAngiAlQhBBNhHAAg");
	this.shape_45.setTransform(498.225,193.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D2D2D").s().p("AhWBaQAxgPBChcQAhguAZgtQgTA0ggA1Qg8Bqg4AGg");
	this.shape_46.setTransform(494.9,187.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2D2D2D").s().p("Ag2hFQAfgpAigUQAjgVAbAJQAsAQAJBMQAEAmgEAhQhAgvg2AYQg5AZhOB7QgCh1BLhig");
	this.shape_47.setTransform(478.2099,201.7771);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#50616C").s().p("AiPaYQkqggkZiBQkZiCjjjSQiZiOhoibIgGgIQhAhjgihoQgchVAKgEQAoCLBnCYQBoCaCSCIQDhDQEWCAQEVCAEnAfQGMAvEeg7QCogjDuhuIBSglQDFhXBwjUQBxjUACkfIAAgDQAMglACgWQABgNgCgQQgDgeAKgjQARg7A9iJQA5h+gXiUQgNhWhAiqQgphtgOg0QgXhYAFhEQAGhagfiJQghiMg+iMQiXlUjRhvQkriek8AUQhjAHhYAXIhFAXQiHhqk8gIQlDgJj2BoQjSBaiKCuQi1DkgmFlIgVgCQAmlsC5jqQCNixDYhbQD9hsFCAHQE7AGCPBuQClg9DMAKQEBAND6B/QB7A+BtCXQBLBpA8CGQBACNAiCQQAhCPgHBjQgEBBAWBVQAOAyAoBrQBACpAOBbQAYCcg7CDQg8CFgQA5QgKAiADAaQACASgBAOQgDAYgMAmQgCEmh0DZQh0DYjKBaIhSAlQi+BYh4AiQjNA6j6AAQiaAAi0gVg");
	this.shape_48.setTransform(335.4883,170.8815);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8C5CB").s().p("AI+YRQASAAAogvQAug2ArhSQB3jeAXkNQgChUAeiOQAeiTAnheQBFiZhmj1Qg4h6gYg3QgohcAAgwQAAiFgDgvQgHiPgbh5QhQlkj6ioQiehqkPgdQkPgdh9BLQiLhLikg3QjZhJisgDQChgKDAAlQDJAoBTBBQCeg8DCADQEMADD/CCQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CKQAsB+AHBdQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgCEFhdDIQhaDDigBpg");
	this.shape_49.setTransform(387.9692,157.4697);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#90A4AF").s().p("AJbZBQhKgIjtglQj3gli3gWQjZAZj6hHQjkhCjaiFQjPh/iWidQiWiegviPICO1TICFkKQByk3DWilQC2iODygZQDNgWDUA/QC5A2B3BdQB9gvAPgEQBgggBYgLQD5geD4B+QDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB9AHBdQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQhdAphqAJQggADgkAAQhJAAhegLg");
	this.shape_50.setTransform(335.0942,163.1582);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#75848E").s().p("AiKaEQofg6m1loQi6iZiCi1Qh8itgviiIC86mQBnjwDHiQQCuh+DjgnQDKgkDGAnQC7AkBvBXQCthBDmgIQFFgMD8CAQDRBqCZFUQBACOAhCPQAhCNgHBgQgFBQAkByQAVBDA1CLQAsB+AHBcQAJB7gxBuQhVC8AAAxQgBAOADAXQAAAZgOAwQgDEnh0DXQhyDSjGBYQiBA8hGAeQh7A0hwAcQi2AtjkAAQibAAiwgUg");
	this.shape_51.setTransform(335.0942,171.7886);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#50616C").s().p("AFlUxQg7gUgvgqQgcgagog2QghgrgSgRQgdgbgigJIhEgPQhHgOgfgOQgzgWgrgyQgagdggg2QgSgdgohIQgnhIgSgdQgdgwgVgQQgOgKgZgIQgQgFgngIQhQgSgtgSQhPgfg/g5Qh4hshUh2QiTjOAtiGQAFgSAbgSQARgKAxgYQBPglAqgcQBIgxAqg/QA/hgBOiRQAwhZBVioQBtjaAvhQQBOiEAxgXQBMglCFgJQCQgJCUAdQF1BICcD+QBZCQBADhQBADgAbEAQA8I/iQGUIgBACQjAEJiFB2QiGB4htAAQgiAAgjgMgAAK0jQh/AJhFAhQgsAVhNCFQguBQhqDRQhYCvgtBUQhOCShABgQgsBChLAzQgrAdhSAnQgsAVgNAIQgaAPgEAMQgjBqBmCmQBVCJCUCGQA9A3BLAeQAsARBOARQApAKARAFQAcAJARAMQAWARAfAyQASAdAqBLQBICHAoAuQAoAuAvAUQAdANBFAOIBEAPQAnAKAhAeQAUATAiAtQAoA1AaAYQArAnA3ATQBxAlCPhwQCPhxDUkmQCOmQg8o5Qgaj8g/jdQhAjghXiOQhKh4iGhRQiGhSizghQhrgUhpAAQglAAglACg");
	this.shape_52.setTransform(110.0586,181.017);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F6ACB5").s().p("ACnOeQhBgegug3Qgvg1gOg+QgjiHhNhSQhShXhugIQhwgIhvgtQhqgrhPhCQhQhDgdhIQgghOAjhCQAfiqBljbQBjjXCGjDQgIBnAHBvQBQiuC9hbQCvhVDWAJQDXAICrBhQC5BnBICtIgCAUQgCCggbDgQgdDtgvDZQh0IciTBXQhUAyhUAAQhEAAhFghg");
	this.shape_53.setTransform(99.5733,177.8085);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F598A3").s().p("ACkRGQhBgfgug2Qgvg2gOg9QgjiIhNhSQhShXhugIQhwgIhvgtQhqgrhPhBQhQhDgdhJQgghNAjhDQAfiqBmjdQBkjYCHjEQCOjNCLh5QCYiEB1AAQCzgBBXAKQCcASBmA8QEPCfgyHqQgCChgbDfQgdDtgvDZQh0IdiTBXQhUAxhUAAQhEAAhFggg");
	this.shape_54.setTransform(99.8627,161.0711);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#75848E").s().p("AASBYQBQjGhXj2QAmBHBNBqQA2BLAzA9Qh+DCiJBlQhDAyiDA3QCyhdBGiwg");
	this.shape_55.setTransform(177.075,278.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#75848E").s().p("AgPglQAPAgAQArQgZgvgGgcg");
	this.shape_56.setTransform(176.65,238.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#90A4AF").s().p("AFoUnQhWgdhMhkQgngzgRgQQghghgmgJQhmgUgogNQhCgVgzg6QgmgrhQiUQhKiHgfgYQgTgPgrgLQg2gLgggIQh/gghWhPQiPiBhWiFQhxiwAmh0QAGgSAngVIBYgrQCKhFA9hdQBIhtBbisICXkpQCrlRBEghQBIgiCBgJQCOgJCSAbQF1BGCbD7QBWCNBADeQBBDeAbD8QA9I+iRGYQjWEpiOBxQhuBXheAAQghAAgfgKg");
	this.shape_57.setTransform(110.1016,181.0221);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#50616C").s().p("ADvLbQhnAAhTgoQhTgngyhIQgwhHgciSQgRhZgVjOQgilOgsiOQhLjziig6IAGgVQDWAfCODCQBTBxBmEFQA1CGAdA5QA9B2BVBsQAvA7BZBfQBIBMATAgQAeAxgYAmQgZAohGAbQhFAbhUACgAjvl0QAjCHAgEvQAVDMAQBWQAbCQAuBDQAwBGBRAlQBSAlBmgCQBNgCBCgYQBBgZAWgiQARgcgZgoQgRgdhGhJQhYhdgxg+QhWhtg+h5Qgcg1g3iLQhdjuhEhmQh0iving0QB+BYA9Dmg");
	this.shape_58.setTransform(568.5633,112.275);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B8C5CB").s().p("ABcEuQhRh5hTjJQhXjcgqhdQhJichKg7QBrBJBNCIQAqBKBRDJQBODDBBBwQBmCvCRCDQiRhShwilg");
	this.shape_59.setTransform(573.125,105.225);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#90A4AF").s().p("AEAJ4QhIgSg0gzQh0hzhJkhQgThLgjipQgfiagVhJQgehthDhTQhMhdhmghIgWgJQEAAlCcEZQAvBWA+CeQBDCoAcA2QBQCdBXBmQAvA4BGBEQAiAhgWAfQgUAeg3AMQgaAGgcAAQghAAgigIg");
	this.shape_60.setTransform(564.0664,104.2465);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#75848E").s().p("AhDI9Qg6hUgejSQgckFgRiHQgfjzg4iFQhLiwiLgyQEAAlCbEZQAwBWA9CeQBECnAbA2QBeC2C9DIQBHBLASAdQAcAugVAiQgXAmhFAZQhHAbhVAAIgDAAQjRAAhkiTg");
	this.shape_61.setTransform(568.225,112.2753);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#50616C").s().p("Aj/EyQiIhPgwiJQgQgsgEgsIgCgjIABgGIAFgDQAhgTBthFQCxhxBagiQCQg3CQAgIACABQCUBCAwAqQAaAXgFASQgGAag+gGIgBAAQhQgQheAVQheAVhWA1QhhA7hIBbQhIBbgkBuIgFANgAgpkAQhXAiitBvQhtBEgdARQAAA8AaBBQAuBxBvBFQBHjKCsh7QCfhzCrAAQAoAAAmAIQAWACANgDQAJgBABgDQABgIgagTQgygniBg5QgygMgyAAQhZAAhYAjg");
	this.shape_62.setTransform(498.2403,70.0865);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B8C5CB").s().p("Ai6AqQBBgqBDgeQDChcB0AsQhRgIh5AtQgtARkIB1QASgRAzgig");
	this.shape_63.setTransform(493.475,51.0632);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#90A4AF").s().p("AktA+QDBh6BSgiQCWg+CQAfQAiAggBATQgBARgeAOQhmAehBAeQiTBYhFAVQggAKgcAAQhNAAgzhKg");
	this.shape_64.setTransform(494.7514,53.5151);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#75848E").s().p("AmvBYQgPgqgEgrIgBghQArgZCDhTQBmhBA+gfQC4hbCnAmQCvBOAgAqQAaAkhOgHQhRgRhfAVQhgAVhaA3QjNB9hNDoQiFhOgviFg");
	this.shape_65.setTransform(498.3094,69.8299);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#50616C").s().p("ArXUCIgCgBIgCgBQiOhagfmNQgSjkAWkuQAVkcA0kcQAzkbBDjHQBGjUBHg+QCzieDBgxQCugsBlA9QAYAOAZBBQAQArAiB5QBqFvBqC0QC8E/EtAzIAFAAIADAFQA3Bmg9CPQgzB4h1B1QhoBng8AQQgdAIglABQgWAAgsgCQg7gDgZADQgrAFgXAXQgSASgSAhQgLAVgVAtQgeBCgTAfQghA1gmAdQgkAbgzAVQgdALg/ATQgvAOgVAIQggANgOAOQgJAIgWAoQg+Bvg/A3QhxBkilAAQgkAAgrgFgAjDzeQi5AwiuCZQhAA5hEDHQhEDGg0EdQg1ElgVEjQgUEjARDfQAPC8ApB3QApB3BAArQDCAYB9hiQBGg2BFh7QAYgqAKgLQARgQAjgOQAUgIA0gQQA6gRAfgMQAxgUAigZQAjgbAfgxQASgeAdhBQAWgvAMgWQATgiATgUQAVgVAfgJQAagHAlAAIA0ACQApADAXgBQAjgBAagHQA6gPBjhkQBvhwAyh0QA4iCgvhcQkyg2jAlEQhsi3hqlyQgghvgPgpQgYhDgTgMQg3gghMAAQg7AAhJATg");
	this.shape_66.setTransform(529.022,175.1737);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F6ACB5").s().p("AqCO4Qg7gbgpirQgmiegQj6QgkoTBFnmQCABSDKA8QAbhiBWhpQBehzBzg7QCFhGB9AdQCTAhB3ClQBjDqBUCEQBsCrBpAnQhdEbjRBEQg4AShfAJQhPAHgUAMQgmAZhCCFQhECJg6ArQg5ArhqgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgYAnQhJB5huAAQgVAAgWgFg");
	this.shape_67.setTransform(524.8691,189.1878);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F598A3").s().p("AqDStQhUgogulCQgqktAJmSQAJmfA7ktQBDlTBuhBQECibCQgoQCwgxBnBWQAuAmBOC7QAvBvBtESQBmD4BVCJQBxC2BtAoQheEcjRBEQg4ASheAJQhQAHgTAMQgmAZhDCFQhDCJg6ArQg5ArhrgBQg5AAgWADQgrAGggAVQgdAUgiBAQgnBPgXAnQhKB5htAAQgVAAgXgFg");
	this.shape_68.setTransform(524.9285,164.6731);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#90A4AF").s().p("ArWT3QiAhRgjlcQggkxAtmuQAqmTBXlLQBblXBehTQC0ieC/gvQCogpBgA5QAgATAzCwQBLEEArBuQDQISGLBCQBQCTijDbQg9BThNBBQhGA9gpALQgjAJh5gEQhegEglAlQgaAag3B2QgzBug2ApQg0AmhxAjQhrAfgWAXQgHAHgoBEQgoBGgqAtQh0B5i1AAQglAAgpgFg");
	this.shape_69.setTransform(529.0668,175.1635);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#50616C").s().p("AAHAaQg+AAglgaIgYgZQAtAbBEACQA7ACA3gQIAHATQg0ARg4AAg");
	this.shape_70.setTransform(457.15,503.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5B5C5C").s().p("AgRAxQgpgSgfgbQgmgiAEgbIABgLIALACQBbANA8AWQA9AWAVAZIADAEIgBAFIgDANQgEANgFAJIgCAFIgFABQgRADgRAAQgrAAgtgUgAhKgLQAgAcArARQAzATArgIIAHgUQgUgUg1gRQg0gShMgNQAHAPASARg");
	this.shape_71.setTransform(358.3352,648.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#828282").s().p("AgsAWQhJgrAFgkQBXANA7AVQA8AVAUAYIgDALQgDAMgFAJQgRAEgRAAQg3AAg6gkg");
	this.shape_72.setTransform(358.2869,648.3065);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#868787").s().p("ABqCSQgSgXg6gTQg5gUhWgNIgPgCIAGgMQAHg5AxhBQA3hJBBgXIAKgDIAEAKQBODEgVBjIgFAYgAgwg1QgpA2gKAyQCWAYA4AqQAJhbhAiiQg2AWguA9g");
	this.shape_73.setTransform(358.2311,636.55);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E4E4E4").s().p("AAJBbQg3gmgPgeQgRghAOgoQARgvA4gnQgFgEAEgDIADgBQBNC/gVBiQgFgSg1gkg");
	this.shape_74.setTransform(362.9442,635.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B7B6B6").s().p("AAgBkQg7gVhYgNQAHg2Aug/QA1hIBAgVQBNC/gVBiQgTgYg8gVg");
	this.shape_75.setTransform(358.5155,635.975);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2D2D2D").s().p("AgKAAIAAgBIACgEIATAFIgCAFIAAABg");
	this.shape_76.setTransform(369.15,652.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D2D2D").s().p("AgEgIIAHAEIAMAEIAAAAIgEAIIgZAEgAACgLIAAAAIABAHg");
	this.shape_77.setTransform(368.225,653.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2D2D2D").s().p("AgLABIACgGIAVAEIgCAGIgBABg");
	this.shape_78.setTransform(369.55,650.95);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2D2D2D").s().p("AgIAQIAHgGIgJgDIAEgXIARAWIgBAGIgKgCIAAAAIgHAHg");
	this.shape_79.setTransform(369.725,649.575);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2D2D2D").s().p("AgLAAIACgCIABgFIAUAHIgCAFIgCADg");
	this.shape_80.setTransform(368.875,653.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D2D2D").s().p("AgKAAIAAgCIABgDIAAgBIAUAGIAAAAIgBADIgBAEg");
	this.shape_81.setTransform(369.35,651.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5B5C5C").s().p("AhWAsQh8gQgMgwIgCgRIALgBQDdgYDMAcIANACIgJAXQgPAdhBAQQg3AOhOAAQguAAgrgGgAjFgSQAHANAbAJQAeAMAyAHQBXALBVgMQBUgLAVgZQhlgNhqAAQhaAAheAJg");
	this.shape_82.setTransform(324.15,644.7138);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#828282").s().p("AgIAnQhPgCg3gPQg+gRgGgbIgBgFQDbgXDMAbIgEAJQgOAahBAPQg2AMhFAAIgOAAg");
	this.shape_83.setTransform(324.025,644.7285);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#868787").s().p("ADRCMQjJgbjbAWIgKABIgCgJQgIgtAQgvQAPgvAlgqQAjgpAsgXQArgWAoABQAsACA3AlQA2AmAlA2QAaAmAIAlQAJAlgLAdIgDAIgADLB1QAMgwgshCQgigxgygjQgygjgngBIgEgBQghAAgnAVQgmAWgfAjQgfAkgOAnQgPAoAEAmQBggKBcAAQBvAABrAOg");
	this.shape_84.setTransform(324.1991,629.4479);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E4E4E4").s().p("ABhB7QhhgHhCgiQg7gfgXgtQgXgpARglQARgnAzgOQAQgDANAAQBNADBQBbQBSBdgbBGIg6gGg");
	this.shape_85.setTransform(329.6578,629.3964);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B7B6B6").s().p("AjVB9QgQhZBLhUQBIhSBQACQBNADBPBbQBSBdgaBGQjMgbjbAXg");
	this.shape_86.setTransform(324.2007,629.3963);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5B5C5C").s().p("AjPA4IgEgJIAJgGQCihUDugfIAOgBIgDARQgIAshwAoQhaAjhcALQgdAEgYAAQgzAAgKgUgAivA0QAcAGAzgIQBVgLBSgdQBYgeAXgeQjSAeiTBIg");
	this.shape_87.setTransform(278.9,648.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#828282").s().p("AjGAzQCihUDrgfIgBADQgLA5i5AuQhJATg5ADIgUABQgrAAgHgOg");
	this.shape_88.setTransform(278.975,648.8299);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#868787").s().p("AjMChQgPgqAJhGQAKhKAgg6QAphJA+gOQAxgKA9AcQA0AXAsApQAmAjATAkQAUAigEAcIgBAIIgJABQjpAeifBVIgKAFgAg8iUQg1ALgkBBQgcAxgKBBQgKA8AKApQCehPDegeQgBgWgSgcQgSgcgegcQgqgngxgWQgngSghAAQgMAAgLADg");
	this.shape_89.setTransform(278.527,638.0318);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E4E4E4").s().p("AgJBiQhFgOgogiQgnghACgoQADgrAxglQBPgLBdBNQBcBLgGA9QgrAGgoAAQgrAAgmgHg");
	this.shape_90.setTransform(283.3108,632.2942);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B7B6B6").s().p("AjBCgQgZhHAjhsQAoh4BRgSQBOgRBjBQQBhBOgIA9QjrAfiiBVg");
	this.shape_91.setTransform(278.4641,637.818);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5B5C5C").s().p("AgzBWIgBgBIgGgFIgEgDIgQgQIgGgHIAFgHQA3hIBcg5IAPgKIACASQABAagEAPQgSBBhjA5IgHAEgAg4A1IABAAIAPAOQBWg0APg2QACgJAAgGQhIAxgvA6g");
	this.shape_92.setTransform(247.6188,663.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#828282").s().p("AgqBNIgFgDIgYgXIgBgBQA3hGBZg4QACAWgEAPQgQA8hgA4g");
	this.shape_93.setTransform(247.7725,663.975);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2D2D2D").s().p("AgJAFIAOgPIAFAGIgNAPg");
	this.shape_94.setTransform(241.725,670.275);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D2D2D").s().p("AgHAIIANgQIABABIgMAQg");
	this.shape_95.setTransform(243.45,671.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2D2D2D").s().p("AgJAGIANgQIAGAFIgNAQg");
	this.shape_96.setTransform(242.675,671.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#868787").s().p("Ag+CUQgTgVgGgYQgPg2ABiRIAAgDIACgCQArhCA0AMQApAKAgA6QAcAyAFAyIAAAHIgGADQhYA3g1BGIgIAKgAhPhcQgBCKAOAzQADAOAKANQAzhABRg0QgGgtgZgrQgbgugegIIgLgCQgeAAgdAsg");
	this.shape_97.setTransform(245.9469,654.8827);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B7B6B6").s().p("AhNBnQgPg1ACiOQA5hXA9A7QA3A0AIBVQhbA4g1BIQgRgTgHgXg");
	this.shape_98.setTransform(245.9132,654.5329);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2D2D2D").s().p("AgKADIAPgMIAGAFIgOAOg");
	this.shape_99.setTransform(240.85,669.45);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2D2D2D").s().p("AgKAGIAEgIIAJgJIAIAKIgIAFIAAABIgHAHg");
	this.shape_100.setTransform(240.3,668.625);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2D2D2D").s().p("AgIAHIAPgPIACACIgOAPg");
	this.shape_101.setTransform(241.325,669.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2D2D2D").s().p("AgIAGIANgPIAEADIgNAQg");
	this.shape_102.setTransform(242.225,670.725);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2D2D2D").s().p("AgGAIIgBgBIAMgRIABACIACACIgLARg");
	this.shape_103.setTransform(243.2,671.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#424B4F").s().p("AnZC1QiAgggzg7IgGgHIAGgHQBliDDYhMQDZhMEagBQCzgBCLAcQCLAcAiAtIAEAEIgBAFQgHAegQAZQgvBCjKBKQjLBLjXAcQhYALhZAAQiUAAh0gdgAk/hyQjTBIhjB8QA/BBCrAbQCsAcC9gZQDPgbDIhIQDJhIArg/QANgRAFgYQghgkh7gZQiFgcirAAIgLAAQkRACjSBHg");
	this.shape_104.setTransform(304.95,660.7483);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5F6B73").s().p("AmRC4Qi1geg/hIQBkiBDRhKQCyg+DlgMQDKgLCrAdQClAcAlAvQgHAegOAVQgtBAjKBJQjLBKjSAbQhZAMhWAAQhiAAhdgPg");
	this.shape_105.setTransform(305.075,660.7579);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#50616C").s().p("EgB7AgtQiLgtgWhPQgLgngChJQgCguAChpQACiLgChEQgFh0gUhOIgHgeQgqiigKhDQgQhiAEh2IgjgkQjXjXiDikQjzkwgZjBQgRiFAGiQQAEhYAWi+QAYjVAJiKQAFg+gCiKQgDjKANhqQAViyBLiGQAJhVCHhWQB6hNCoguQCFgkBeAFQBdAGAgAtIgRANQgbgnhagDQhZgDh7AhQifArh6BMQiEBTgGBLIAAADIgBACQhJCCgWCwQgMBnACDKQACCLgEA/QgJCJgZDXQgVC6gEBaQgHCOARCEQAYC7DxEtQCCCiDVDVIAnAnIADAEIAAAEQgFB3APBfQALBCAqCkIAHAeQAUBPAFB2QADBFgCCMQgCBqACArQACBHAKAmQAXBUC7AqQC5AqDigeQDQgbDJhIQDIhIAshAQAjgzgThpQgThphKiiQglhQgRiRQgLhagLjRQgNjqgMh0QgOh/h/i5QhNhxjLjwQhxiIg2hEQhbhyg7haIgCgCQgyhJgahPIgQg/QA0CBB/CsQBLBnCuDPQDND0BOBxQCAC9AOCCQANB1AMDqQALDQALBYQARCQAkBNQBOCqASBsQASBtgoA6QguBDjLBKQjLBLjYAcQhUALhcAAQi0AAh/gqg");
	this.shape_106.setTransform(265.6276,468.2386);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#50616C").s().p("Ah8A3QhSgBhDgYIgygYQCeAqDJgVQC+gVBig9IgjAgQg1AihWAUIgEABQhvAXh7ABg");
	this.shape_107.setTransform(294.675,580.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#50616C").s().p("AiYA/IgLAAQhUgGhGgaIg0gYQDUA5DmgbQDagZBPhNIgcAjQguAnhYAaIgNADQh4AciNAAQgrAAgrgDg");
	this.shape_108.setTransform(293.325,566.925);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#50616C").s().p("AgDgxQi6gIiBBZQAPgRAfgUQA+gqBUgQIAIgCQB5gTBvAcQB9AfBQBUIgQAPQhth0jFgHg");
	this.shape_109.setTransform(254.8,424.4747);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#50616C").s().p("AlGAoQA5gtBMgfIAHgDQCWg2CNAWQCPAVB4BgIgNARQiah7i+AFQi8AEi+CCQANgRAcgWg");
	this.shape_110.setTransform(259.725,438.2316);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#50616C").s().p("AgdBNQAEhGAcgxIAbgkQgeA7gHBig");
	this.shape_111.setTransform(229.25,542.975);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#75848E").s().p("AlxgMQCqAvCdABQD4AACkh5QgJArhHArQhLAuhoAWQhNARhIAAQizAAiYhig");
	this.shape_112.setTransform(293.325,568.8685);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#75848E").s().p("Ai0A6QhmgYgpgyQB+AvClgCQDTgCCRhjQgQA8hYAmQhQAkhyAJQgfACgeAAQhOAAhDgPg");
	this.shape_113.setTransform(294.675,581.8954);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B8C5CB").s().p("AGxQwQhLh2gSgxQgjhhgpkDQgrkMgLjKQgFhbhwi3Qg6hdi8kLQisj1hLiCQhzjHgGh3QA5CMCPDAQA9BTDTEBQCrDRBLB2QBvCrANB3QATCyAPFEQAREGAxBrQBlDcAAB1QgShDhHhug");
	this.shape_114.setTransform(317.9,520.975);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#90A4AF").s().p("AItcfQhbgPjwgKQi/gIhOgdQhzgrgQhyQgOhqguiQQhCjOgFgUQghh8AGhiQAIh5BBh2QgLgMhfg9QhyhKhJg5QkFjNgejQQghjjAIi6QAUj3AOjKQAVlHAjh9QBIkICuA0QAGhIBBhkQA+heBXhQQBZhTBLgbQBTgeAkAzIiQVNQA5CMCODAQA9BSDUEBQCrDRBMB2QBuCrANB4QATCxAPFFQASEGAwBqQBmDegBB1Qh5hZjAggg");
	this.shape_115.setTransform(283.0631,451.6194);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#75848E").s().p("EgAyAg1QjHgrgZhdQgPg3ADj0QAEj4geh1Qgwi8gKg/QgRhlAFh8QiyisiXiyQkmlcgbjTQgXizAXjpQAjkiAOjKQAEg/gCiAQgCiLADhEQALj8BeioQAGhGBqhMQBhhFCPgxQCNgwBygFQB8gFAkA0IBsVLQA5CMCPDAQA9BSDUECQCrDQBMB2QBuCrANB4QATCxAPFFQASEGAwBqQBFCXAWBkQAbB7gqA8QgtBCjKBJQjLBJjTAcQhcAMhXAAQh4AAhtgXg");
	this.shape_116.setTransform(265.6571,468.3123);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#868787").s().p("AhFBFQhOgtgPgvQgKgiAcgTQAugmBCAAQAtAAArATQArAUAcAhQAyA8gQBRIgBAGIgGACQgdAIghAAQhRAAhQgugAiEg8QgRAMAHATQAMAnBGApQBLAsBNAAQAZAAAZgGQALhEgqgyQgYgegngRQgngSgpAAQg6AAgqAig");
	this.shape_117.setTransform(333.1011,690.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B7B6B6").s().p("AAgBiQg7gOgzghQgzgggSggQgTgkAdgUQAnggA5gDQA0gDAxAZQAzAZAYAtQAdAxgNA8QgbAIgfAAQgdAAgggHg");
	this.shape_118.setTransform(333.1,690.034);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#868787").s().p("Ah0CBQhFgagbgnIgDgDIABgFQAchlBKg5QBCgzBMAAQBWAAA1A9QA9BJgSB7IgBAFIgEADQhGAqhoAAQhPAAhGgZgAhjhXQhEA0gaBcQAaAhBBAWQBAAWBHAAQBeAABBgmQAQhvg3hAQgWgagggOQgggOglAAQhFAAg8Aug");
	this.shape_119.setTransform(376.1889,695.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#E4E4E4").s().p("AgdBNQhngmgfhOQAugrA7gOQA5gNAyASQA2ATAeAvQAhAzgCBLIgmABQhUAAhHgZg");
	this.shape_120.setTransform(380.3557,691.3411);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B7B6B6").s().p("AgeCLQiEgTgqg9QAbhlBLg4QBEgzBOAGQBQAGAsA9QAyBEgRBuQhFAqhfAAQghAAgigFg");
	this.shape_121.setTransform(376.2407,695.5186);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#868787").s().p("AidCDQgpgQgPgaIgCgCIABgFQAThqBYhAQBPg6BhAAQAtAAAkAOQAkAOAXAbIACACQALAXgMAkQgLAigeAlQgpAyg9AcQg9AchFAAQg1AAgpgQgAhdhIQhSA7gSBfQANAUAkANQAkAMAtgBQAyABAugRQBJgYAvg6QAageAKgdQALgegHgSQgqgvhSAAQhXABhLA1g");
	this.shape_122.setTransform(426.9939,697.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E4E4E4").s().p("AjFBKQAzh7CMgkQA7gPA2ALQA3ALAfAkQAJATgJAeQgJAegYAfQhsAWhGAEIggABQhQAAhDgVg");
	this.shape_123.setTransform(427.775,692.9755);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#B7B6B6").s().p("AiUB8QgqgPgPgYQAOhNA1g3QAwgyBEgXQBBgWA9AJQA/AKAiAnQAKAVgMAhQgLAfgbAiQhPBgiEAGIgNAAQguAAgngNg");
	this.shape_124.setTransform(427.0076,697.1939);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#50616C").s().p("Aj8ABQgegSgUgXIgPgUQB8BsDggKQB5gFCmgsQgYARg0ARQhpAkiMABIgJABQiUAAhcg8g");
	this.shape_125.setTransform(388.175,661.5032);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#50616C").s().p("AAFAuQhhgChGgtQgWgOgQgRIgMgOQA6AvBpASQCAAVCGgqQgNANggAMQg8AYhWAAIgRgBg");
	this.shape_126.setTransform(384.4,645.3112);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#50616C").s().p("AlobmQi7gNikgoQijgohQgzQhLgvALg0QARhZA+mGQBJnQAjjHQA+lbAhhIQAohaBIh+QAshNBkikQCpkVBGiIQB2jjAkihIAVAFQgkCkh3DkQhHCJiqEWQhiCjgtBNQhIB+gnBZQggBGg+FaQgkDPhIHFQg9GDgSBdQgIAlA+AoQBPAyCjAnQCfAnC2ANQDAANCXgTQCngUBQg6QAcgVABhRQABgzgPiPQgYjxAAiQQAAj5A3jdQArirCRjIQBYh6Dlj+IAXgaQBnh0AyjCQAvi0gFjdQgGjWgzjRQg0jUhZiiIAiAqQAqA/AqBwIACAJQB0FdgUFpQgVGGiwDEIgXAaQjjD8hXB5QiPDFgqCoQg3DbAAD3QAACQAYDtQAPCagBA1QgDBTgjAaQg/Ath0AZQhzAYiaAAQhKAAhRgGg");
	this.shape_127.setTransform(420.2572,529.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#50616C").s().p("Ai3A7QBRhtB6gSIATgCQBQgGAoAeQAVAPAEAQQgZgTgpgJQgvgLgxAHQhxAShKBlg");
	this.shape_128.setTransform(382.7,487.0568);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B8C5CB").s().p("AlDaoQACgcgdiOQgli3gQh6Qg8nQB5laQAsh/BJhpQAzhJBchhQB4h9AggnQBVhlA6huQCXkjgNmpQgMl4h5j+QBaClA3DVQA1DUAHDVQAHDfgtCzQgxDChnB0QjxENhWB2QiZDPgsCuQhNE1AhGTQAIBiAQCdQAIB0gQArg");
	this.shape_129.setTransform(478.5994,523);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#90A4AF").s().p("Aoba0Qhogcg6gtQg7gtAEgxQAEguBFghQAzgZBtgYIC6gpQBngZAwgbQh7AZh5gbQh0gZhchCQhchCgxhbQgyhgAIhoQAGhLABiIQABiTAFhFQAPkEBejaQCBkUBskJQDUoIgMigIAWiEINalyQBaCmA2DVQA2DTAHDWQAHDeguC0QgwDBhoB0QjxENhXB2QiZDPgrCvQhRFDApG9QAWDlAAAcQADBqgkAaQgcATgiAPQiJAah9AAQiQAAiAgjg");
	this.shape_130.setTransform(438.642,527.5887);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#75848E").s().p("AnybSQjfgeiPg5Qiag+AOhDICGs2QBoqAArhhQAxhtBqi0QCCjVBChvQD5miAyjkINqneQBaCmA2DVQA2DTAHDWQAHDeguC0QgwDBhoB0QjxENhXB2QiZDPgrCvQhRFDApG9QAWDlAAAcQADBqgkAaQhhBGjZAQQhCAGhFAAQiJAAiYgVg");
	this.shape_131.setTransform(420.3423,529.1611);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#868787").s().p("ACdCAQhPgNhTgdIgDgBQg7glhdiSIgIgMIAOgEQCWgqBaBKQArAiAWA0QAWA2gEA8IgBAMgAiGhhQBVCCAzAhQBJAZBJAOQABg0gUgtQgUgsgkgdQg0gqhMAAQgkAAgrAKg");
	this.shape_132.setTransform(439.899,657.2647);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B7B6B6").s().p("AgFBNQg4giheiSQCZgrBXBRQBNBFgHByQhPgMhRgdg");
	this.shape_133.setTransform(440.2043,657.1514);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#868787").s().p("AjWB6IgKgBIABgLQAGhrA/hAQA0g2BJgLQBKgKBDAnQBMAsAiBcIADAJIgJAFQiSBMixAAQgzAAg4gHgAgahoQhAAJguAvQg4A4gJBeQBtAMBlgQQBmgQBXgsQgghQhDgmQgvgagyAAQgNAAgPACg");
	this.shape_134.setTransform(480.225,658.3636);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E4E4E4").s().p("AhrBSQg4gTgHgmQgHgqA6g8QBTgkBSAlQBZAoAlBmQhJAYhOAFIgcABQg7AAgpgOg");
	this.shape_135.setTransform(484.1824,656.069);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B7B6B6").s().p("AjTBvQAGhiA3g9QAzg5BKgKQBJgKBAAoQBGArAeBVQhcAwhsASQg5AJg9AAQg0AAg1gHg");
	this.shape_136.setTransform(480.125,658.3587);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#868787").s().p("AhPChQggg8ADhLQAEhJAng4QAbgmAkgQQAkgRApAHIAHABIALA1QAOBHABAYQADAjgNAPQhFBRhdA0IgJAFgAACiHQgbAOgWAfQgiAwgFBAQgFBBAaA1QBVgxA+hJQAIgKgEghQgDgWgMg9IgHgnIgLAAQgbAAgYAMg");
	this.shape_137.setTransform(509.6038,646.4582);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E4E4E4").s().p("AgqBnQgggQgKggQgLgmAUgyQAXgpAkgUQAkgWAtAHIAWB3QAGAwgMAOIgDAEQgWAagjAIQgLACgKAAQgWAAgUgJg");
	this.shape_138.setTransform(510.4826,641.7822);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_139.setTransform(509.5869,646.2885);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B7B6B6").s().p("AhhAyQgBg4AVgyQAWgzAmgaQAogdAzAIIAWB4QAGAvgMAOQhDBPhcAzQgagvgCg8g");
	this.shape_140.setTransform(509.5869,646.2885);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#50616C").s().p("AgEAtIgIgBQhBgHg0gTQg2gTgcgdIAPgPQAyAyB8AQQB7APBvgfQgPAMgjALQg3AShKAAIglgBg");
	this.shape_141.setTransform(456.425,595.98);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#50616C").s().p("AgGAsIgHgBQhGgEg0gRQg6gTgbghIARgOQAuA4CUAJQCIAIBegiQgQAOgkANQg8AXhSAAIghgBg");
	this.shape_142.setTransform(462.075,612.3715);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#50616C").s().p("EAKsAieIgCgBQhyhHjOmdQjPmeiwoAQkYCGkDgVQkDgVjriuQjbiji1kgQi1keh4l4QhqlPgllNQgklNAqj/QAfi4BFhxQBEhxBnggQG4iOJJgRQG8gNHwA6QGYAwF6BYQFKBNBtA4QCNAtBYDwQBODVAbFNQAYExgYE/QgYE6g+DMQg8DIhhEhQheEYgjB9Qg6DKgUCiQgYC6APC0QAJBnAcCOQAOBGABAYQADAkgNAPQhaBpiCA4QiAA3iXAAQiWAAiZg2gAgFMIQC3IUDUGjQDGGJBoBCQDmBRDRgqQDQgqCDiZQAIgKgEgiQgDgWgMg9QgciRgIhnQgQi2AYi8QAVikA6jLQAkh+BdkYQBtlJAwigQA/jQAYk5QAXk6gZkuQgclbhTjTQhUjUh8gmIgCgBQhjgzk2hLQl9hbmtgyQmXgwlvAAQqrAAnzCgQhgAfhBBsQhBBsgeCyQgpD9AkFKQAkFLBqFMQB3F1CzEbQCyEdDZChQDoCtEAASQEBATEUiHIALgGg");
	this.shape_143.setTransform(370.8006,445.2568);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B8C5CB").s().p("Aiwc2IgsiGQg+jbARlBQAQkpB1lzQBFjUAjh1QA+jOApi9QBWmIgEn5QgEo9iGkDIAZAKQBiBxA6D1QA0DeANEmQAMEVgZEQQgZERg4C4QhTETiPGpQhtFUgcDbQgiEHAtEIQALA+ARBYQAJA5gNAQQABgqgUg+g");
	this.shape_144.setTransform(534.3579,453.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#90A4AF").s().p("AMnfLQgChXBuhBQBAgmCag0QhvASg8gkQg7gjgRhaQggisBVjzQARgwA9iZQAyh7AVhKQAmhygRhsQgViChhg8Ih6hHQhGgqgsghQh3hcgjh3QgtjEgVhkQgmisgVh8Qh4Glj4D4QhoBphoAxQhkAuhLgRQjMgvjyjnQjQjHh5jWQgXDNh/CsQhyCai+B1Qiskxhpl8QhklngTlVQgSlWBGjjQBKjxCcgyQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDTAbFIQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEIAtEIQAKA+ASBXQAJA6gNAQQioAlimACIgMAAQlCAAgDipg");
	this.shape_145.setTransform(370.8401,436.4819);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#75848E").s().p("EAKwAiVQhshEjLmSQjTmki1oOQo1EUnZlkQjMiairkHQicjyhyk1Qhrkjg1k1Qg0kuAIkEQAIkJBGiqQBKi1CEgqQMQj8SYCLQGkAxF8BaQFABMBnA1QCIArBXDsQBNDTAbFIQAZEvgYE9QgYE6g+DPQhTEViQGpQhuFUgcDaQghEIAtEIQAKA+ASBXQAJA6gNAQQiFCbjWArQhJAOhLAAQiQAAiXg1g");
	this.shape_146.setTransform(370.8469,445.1576);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#868787").s().p("AiPArQgTgPgMgjIgCgGIAFgFQAeggAugOQAvgOA0AGQA3AHAsAaQAuAZAWAlIAGALIgMAFQgpARgyAKQgvAJgsAAQhbAAgjgggAhUgsQgoALgbAaQAJAXAMALQAgAbBVgBQBVgBBJgcQgVgdgngUQglgUgvgFQgNgCgOAAQgfAAgbAIg");
	this.shape_147.setTransform(235.4,636.085);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#B7B6B6").s().p("AiHAjQgQgOgLgfQA/hCBuAQQBtAQArBJQhOAghcADIgLAAQhUAAghgdg");
	this.shape_148.setTransform(235.25,636.0741);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#50616C").s().p("AhlLBQgggcgShnQgLhDgQi2Qgck1gginQg3kihpi8IgFgIIAHgGQASgNAegRQA9ggBEgQQDYgzDWCAQBwBDAvC5QAkCMgDDGQgDDvg4DxQg2DngzAcQgrAZg8ANQg4ANg4AAQhZAAgkgfgAkZqnQg2AUgoAcQBoC+A3EiQAfClAcE1QAQCvAKBAQARBnAbAYQAkAeBkgFQBpgGBLgqQApgWAzjZQA5jvAEjyQADjegviTQgviThbg3QiUhYiWAAQhfAAhYAig");
	this.shape_149.setTransform(231.1115,569.9235);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#75848E").s().p("AhfK5QgjgegUiWIghlVQg3oaiYkQQAQgMAdgQQA6ggBDgQQDUgzDUB/QB3BHAsDUQAlCygTD5QgRDWgxC6QgvCygoAWQhMArhrAGIghABQhPAAgggdg");
	this.shape_150.setTransform(231.2836,569.8965);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,620.4,711.9);


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
	this.shape.setTransform(115.5613,26.9006,0.7353,0.6151);

	this.instance_6 = new lib.Path_8();
	this.instance_6.setTransform(185.95,77.7,0.7354,0.6153,0,0,0,1.5,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3AAEE3","#4065AE"],[0,1],-258.8,-338.1,-120.2,-156.7).s().p("Aq5AMQg0AAAqgMQAqgLAsAAIU1AAIAPAXg");
	this.shape_1.setTransform(132.5457,150.0953,0.7353,0.6151);

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
	this.shape.setTransform(51.9554,113.8854,0.667,0.667,90);

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.setTransform(58.2,150.05,0.6672,0.6672,90,0,0,1.1,41.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FDEC2C","#E29739"],[0,1],8.6,-116.3,-5,70.2).s().p("AipAoQAAhAAjgoQAjgoA5ABQAgAAAlAPIAXAIQATAGAMAIQAPAJAcAVQAaARAUAHQgtgMg7gWIgxgUQhBgdgvAdQgvAdgDBEQgHAZgRAwg");
	this.shape_1.setTransform(91.3274,160.6448,0.667,0.667,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FDEC2C","#E29739"],[0,1],4.3,-8.6,-33.4,81.9).s().p("AngG0IAAiNQAEgTAAgSIAAp7QAJgaAPggIAAK1QAAAWgEASIAABzINUAAQA8gBAZgkQgBAUgEASQgfAWgxAAg");
	this.shape_2.setTransform(59.3095,26.0532,0.667,0.667,90);

	this.instance_2 = new lib.Path_6();
	this.instance_2.setTransform(52.95,59.15,0.6672,0.6672,90,0,0,9,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FDEC2C","#E29739"],[0,1],302.7,-128.8,-128.5,18.9).s().p("ArdKlIAAzIQAAgSgEgTIAAiNINsAAIJXAYI2rAAIAABzQAEASAAAVIAASiQAAAygMAcQgDAJgDAAQgGAAAAgxg");
	this.shape_3.setTransform(138.7094,43.1961,0.667,0.667,90);

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
	this.instance.setTransform(-88.8,325.3,0.5151,0.5151,0,0,0,186.3,491.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.7,72.2,351.6,375.3);


(lib.StarPiececopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(-102.7,256.2,0.5717,0.5668,0,0,0,452.7,226.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-361.4,127.7,390.2,412.90000000000003);


(lib.StarPiececopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(50.85,265.35,0.5872,0.5872,0,0,0,263,186.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,155.6,400.9,427.9);


(lib.StarPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-85.25,269.05,0.5476,0.5476,0,0,0,394.7,520.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-301.3,-16.2,373.8,399.09999999999997);


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
	this.instance = new lib.Symbol9("synched",0);
	this.instance.setTransform(100.25,390.5,0.4393,0.4393,0,0,0,310.2,356.1);
	this.instance.alpha = 0.2305;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(-36,222,328.9,358.6), null);


(lib.Pieces = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.piece2 = new lib.StarPiececopy3();
	this.piece2.name = "piece2";
	this.piece2.setTransform(609.6,522.1,1.2304,0.8514,0,0,0,-73.7,291.3);
	new cjs.ButtonHelper(this.piece2, 0, 1, 1);

	this.piece0 = new lib.StarPiececopy2();
	this.piece0.name = "piece0";
	this.piece0.setTransform(449.85,147,1.2304,0.8514,0,0,0,-76.4,240.8);
	new cjs.ButtonHelper(this.piece0, 0, 1, 1);

	this.piece1 = new lib.StarPiececopy();
	this.piece1.name = "piece1";
	this.piece1.setTransform(675.15,149.6,1.2304,0.8514,0,0,0,48.1,264.2);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.piece3 = new lib.StarPiece();
	this.piece3.name = "piece3";
	this.piece3.setTransform(573.35,349.1,1.2304,0.8514,0,0,0,-91.8,265.8);
	new cjs.ButtonHelper(this.piece3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece3},{t:this.piece1},{t:this.piece0},{t:this.piece2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(99.1,50.1,882.6999999999999,605.6), null);


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
	this.shape.setTransform(119.8703,27.3921,0.3723,0.3723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(59.0275,40.9142,0.3713,0.3713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(58.9457,44.7969,0.3723,0.3723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.1623,45.803,0.3723,0.3723);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.1548,45.7751,0.3723,0.3723);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(48.9906,40.4906,0.3723,0.3723);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(48.9845,40.5184,0.3723,0.3723);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(48.427,39.8747,0.3713,0.3713);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.2619,43.67,0.3723,0.3723);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.3223,45.9613,0.3723,0.3723);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.3131,45.924,0.3723,0.3723);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.1384,40.6488,0.3723,0.3723);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.1347,40.6673,0.3723,0.3723);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.4363,43.9235,0.3723,0.3723);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.4177,43.837,0.3723,0.3723);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(48.842,43.8949,0.3723,0.3723);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(48.842,43.8949,0.3723,0.3723);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(43.9088,36.0019,0.3723,0.3723);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(37.9053,44.3324,0.3723,0.3723);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.3742,52.0765,0.3723,0.3723);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.2136,47.1899,0.3723,0.3723);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(39.8041,41.3632,0.3723,0.3723);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(43.8809,35.8995,0.3723,0.3723);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(40.0368,37.4353,0.3723,0.3723);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.4928,50.8107,0.3723,0.3723);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.2667,40.6651,0.3723,0.3723);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.1483,33.6237,0.3723,0.3723);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.3479,36.9078,0.3723,0.3723);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(115.9889,36.6844,0.3723,0.3723);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(117.6829,35.9367,0.3723,0.3723);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(116.6684,35.5179,0.3723,0.3723);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(113.9039,31.5248,0.3723,0.3723);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.2756,31.0268,0.3723,0.3723);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(116.6405,31.0341,0.3723,0.3723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(116.6591,32.0833,0.3723,0.3723);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(116.5195,32.074,0.3723,0.3723);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(117.6922,31.8506,0.3723,0.3723);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.4357,31.654,0.3723,0.3723);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(114.509,32.0181,0.3723,0.3723);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.2483,33.0327,0.3723,0.3723);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.3677,32.4134,0.3723,0.3723);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(118.0553,31.2221,0.3723,0.3723);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(118.7606,34.2241,0.3723,0.3723);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(115.0139,38.1241,0.3723,0.3723);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(114.8184,37.0927,0.3723,0.3723);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(114.5733,35.4291,0.3723,0.3723);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.3199,36.2113,0.3723,0.3723);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(117.7946,32.2043,0.3723,0.3723);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(117.5899,32.1391,0.3723,0.3723);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.4223,32.167,0.3723,0.3723);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(116.7894,32.167,0.3723,0.3723);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.3612,32.167,0.3723,0.3723);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(117.655,33.256,0.3723,0.3723);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(116.6172,33.3305,0.3723,0.3723);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.4634,33.247,0.3723,0.3723);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.4634,33.247,0.3723,0.3723);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(116.5474,32.9396,0.3723,0.3723);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(116.5567,32.948,0.3723,0.3723);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(117.5154,33.1721,0.3723,0.3723);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(117.5154,33.1721,0.3723,0.3723);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(117.6364,32.9312,0.3723,0.3723);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(117.6364,32.9312,0.3723,0.3723);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.267,34.1589,0.3723,0.3723);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.2192,40.3579,0.3723,0.3723);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.1698,39.3434,0.3723,0.3723);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(115.6631,47.4855,0.3723,0.3723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(115.6802,45.9688,0.3723,0.3723);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(115.6076,44.5168,0.3723,0.3723);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.2924,43.0212,0.3723,0.3723);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.2536,41.4941,0.3723,0.3723);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.1636,38.8245,0.3723,0.3723);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.1616,38.8035,0.3723,0.3723);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.0823,38.3754,0.3723,0.3723);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(113.025,43.8534,0.3723,0.3723);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.4646,31.0791,0.3723,0.3723);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.14,31.9343,0.3723,0.3723);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(102.0007,38.2451,0.3723,0.3723);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.414,44.8888,0.3723,0.3723);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(96.76,42.3343,0.3723,0.3723);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(96.9264,39.7695,0.3723,0.3723);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.4627,41.2007,0.3723,0.3723);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.3412,39.4288,0.3723,0.3723);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(98.7601,37.5598,0.3723,0.3723);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.1324,36.0035,0.3723,0.3723);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(96.8892,45.6204,0.3723,0.3723);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.3453,43.7104,0.3723,0.3723);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(97.8013,41.6627,0.3723,0.3723);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(95.0183,48.2493,0.3723,0.3723);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(98.7694,34.2622,0.3723,0.3723);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(96.5913,41.2794,0.3723,0.3723);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(96.582,41.2608,0.3723,0.3723);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(94.9438,48.251,0.3723,0.3723);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(94.9447,48.2501,0.3723,0.3723);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(98.7601,34.2381,0.3723,0.3723);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(98.7693,34.2427,0.3723,0.3723);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.1532,42.1462,0.3723,0.3723);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.1405,42.1125,0.3723,0.3723);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.399,29.2085,0.3723,0.3723);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.3802,32.5187,0.3723,0.3723);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.4973,30.2496,0.3723,0.3723);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(70.5295,30.1007,0.3723,0.3723);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.3472,30.3334,0.3723,0.3723);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.3379,30.3241,0.3723,0.3723);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(70.6228,33.424,0.3723,0.3723);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(69.7754,33.0885,0.3723,0.3723);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(70.5262,32.8744,0.3723,0.3723);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.3577,32.4463,0.3723,0.3723);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(69.7754,32.5021,0.3723,0.3723);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.3577,32.4276,0.3723,0.3723);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(69.7847,32.4928,0.3723,0.3723);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.3267,32.3178,0.3723,0.3723);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(69.7391,32.3189,0.3723,0.3723);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.419,31.863,0.3723,0.3723);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(69.6202,31.9697,0.3723,0.3723);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.4723,32.1059,0.3723,0.3723);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(70.5271,28.9015,0.3713,0.3713);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.4548,32.7627,0.3723,0.3723);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgUiSIADA/IgBANIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAg2g7IAAACIAkgNgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(86.9391,42.5732,0.3723,0.3723);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(86.9205,42.5918,0.3723,0.3723);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.3252,44.6116,0.3723,0.3723);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.3245,44.62,0.3723,0.3723);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(106.7648,38.8966,0.3723,0.3723);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(106.7555,38.8966,0.3723,0.3723);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(106.8951,44.9002,0.3723,0.3723);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(106.8951,44.9188,0.3723,0.3723);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(64.6188,38.8966,0.3723,0.3723);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(64.6095,38.8966,0.3723,0.3723);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(64.7491,44.9002,0.3723,0.3723);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(64.7491,44.9188,0.3723,0.3723);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(50.7966,45.5933,0.3723,0.3723);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.4907,40.3269,0.3723,0.3723);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.3665,37.5935,0.3723,0.3723);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(80.526,37.4539,0.3723,0.3723);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.2966,34.5126,0.3723,0.3723);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.3897,38.7477,0.3723,0.3723);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.4083,37.9565,0.3723,0.3723);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.4362,37.2305,0.3723,0.3723);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.4715,35.7226,0.3723,0.3723);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(73.8894,43.7925,0.3723,0.3723);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(67.5508,43.4295,0.3723,0.3723);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(74.6066,44.4082,0.3723,0.3723);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(66.8988,43.8946,0.3723,0.3723);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(68.0347,35.3038,0.3723,0.3723);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.0531,32.6554,0.3723,0.3723);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(67.0345,32.6641,0.3723,0.3723);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.4649,37.063,0.3723,0.3723);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.4627,37.035,0.3723,0.3723);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(72.6063,35.7816,0.3723,0.3723);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.2984,37.661,0.3723,0.3723);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.2984,37.6796,0.3723,0.3723);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.4548,35.7915,0.3723,0.3723);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(70.5761,41.7581,0.3723,0.3723);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.2181,45.3377,0.3723,0.3723);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(71.2976,42.1861,0.3713,0.3713);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(53.9799,51.5832,0.3723,0.3723);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.2236,53.6682,0.3723,0.3723);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.1806,37.156,0.3723,0.3723);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(49.8286,33.9728,0.3723,0.3723);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(46.8594,55.3436,0.3723,0.3723);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(46.7384,32.5487,0.3723,0.3723);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(52.8816,54.4128,0.3723,0.3723);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(53.6169,33.5632,0.3723,0.3723);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.0542,44.4441,0.3723,0.3723);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.1225,44.9933,0.3723,0.3723);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.1417,44.983,0.3723,0.3723);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.3241,46.0177,0.3723,0.3723);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.3503,45.9613,0.3723,0.3723);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.1815,41.0222,0.3723,0.3723);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.1815,40.6952,0.3723,0.3723);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.5082,43.8561,0.3723,0.3723);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.4666,43.8561,0.3723,0.3723);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.4301,52.1138,0.3723,0.3723);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.3067,47.2365,0.3723,0.3723);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(39.9251,41.5494,0.3723,0.3723);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.095,36.188,0.3723,0.3723);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.3625,37.8355,0.3723,0.3723);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(40.6418,50.8107,0.3723,0.3723);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.4622,40.8513,0.3723,0.3723);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.3996,33.7535,0.3723,0.3723);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.1428,36.8952,0.3723,0.3723);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(117.9142,36.1445,0.3723,0.3723);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(116.8937,35.7775,0.3723,0.3723);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.1646,31.683,0.3723,0.3723);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(115.4803,31.1413,0.3723,0.3723);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(116.7576,31.1259,0.3723,0.3723);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(116.8545,32.2694,0.3723,0.3723);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(116.7242,32.2601,0.3723,0.3723);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(116.6677,31.8199,0.3723,0.3723);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(114.7965,32.101,0.3723,0.3723);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.4529,33.2273,0.3723,0.3723);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(113.581,32.6078,0.3723,0.3723);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.2829,31.3978,0.3723,0.3723);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(119.0027,34.4023,0.3723,0.3723);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.2145,38.3022,0.3723,0.3723);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(115.0232,37.2787,0.3723,0.3723);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(114.7688,35.6153,0.3723,0.3723);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(117.5247,36.3742,0.3723,0.3723);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(117.9994,32.3811,0.3723,0.3723);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(117.7853,32.3253,0.3723,0.3723);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(117.6085,32.3439,0.3723,0.3723);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(116.9848,32.3439,0.3723,0.3723);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(116.5567,32.3439,0.3723,0.3723);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(117.852,33.4422,0.3723,0.3723);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(116.8173,33.5167,0.3723,0.3723);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(116.6572,33.4327,0.3723,0.3723);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(116.6572,33.4327,0.3723,0.3723);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(116.7428,33.1173,0.3723,0.3723);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(116.7428,33.1173,0.3723,0.3723);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(117.7109,33.353,0.3723,0.3723);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(117.7109,33.353,0.3723,0.3723);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(114.4691,34.3451,0.3723,0.3723);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.4183,40.5444,0.3723,0.3723);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.3653,39.5295,0.3723,0.3723);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(115.8679,47.6624,0.3723,0.3723);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(115.8767,46.1474,0.3723,0.3723);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(115.8031,44.7029,0.3723,0.3723);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(115.494,43.2062,0.3723,0.3723);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.4584,41.6803,0.3723,0.3723);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(116.2468,35.0536,0.3713,0.3713);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.3012,38.9059,0.3723,0.3723);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.2763,38.5615,0.3723,0.3723);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.2223,44.0395,0.3723,0.3723);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.2441,30.2775,0.3723,0.3723);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.2441,30.2775,0.3723,0.3723);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.1417,31.9995,0.3723,0.3723);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.1933,38.4312,0.3723,0.3723);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.1912,44.9572,0.3723,0.3723);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(96.9557,42.5205,0.3723,0.3723);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.1312,39.9556,0.3723,0.3723);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(97.6584,41.3869,0.3723,0.3723);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(98.6061,39.5964,0.3723,0.3723);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.0662,41.8303,0.3723,0.3723);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(94.9729,48.4261,0.3723,0.3723);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(98.9462,34.2716,0.3723,0.3723);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(96.7682,41.4563,0.3723,0.3723);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(96.7775,41.447,0.3723,0.3723);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.0928,48.4156,0.3723,0.3723);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.1309,48.4879,0.3723,0.3723);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(98.9834,34.3496,0.3723,0.3723);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(98.9102,34.238,0.3723,0.3723);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.3317,42.2259,0.3723,0.3723);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.3266,42.294,0.3723,0.3723);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.1345,42.7594,0.3723,0.3723);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.1252,42.7687,0.3723,0.3723);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(79.5207,44.7978,0.3723,0.3723);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(79.5293,44.8062,0.3723,0.3723);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(106.9603,39.0828,0.3723,0.3723);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(106.951,39.0828,0.3723,0.3723);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.0906,45.0863,0.3723,0.3723);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.0906,45.0956,0.3723,0.3723);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIAAgDIACACIgCABIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHgAAJAKg");
	this.shape_250.setTransform(64.9013,35.2049,0.3713,0.3713);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(64.8143,39.0828,0.3723,0.3723);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(64.9446,45.0863,0.3723,0.3723);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(64.9446,45.0956,0.3723,0.3723);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(50.9921,45.7795,0.3723,0.3723);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(50.6862,40.5084,0.3723,0.3723);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(78.562,37.7797,0.3723,0.3723);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(80.7214,37.6401,0.3723,0.3723);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.4229,45.5238,0.3723,0.3723);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(71.4925,42.3717,0.3713,0.3713);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.1102,51.7228,0.3723,0.3723);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.3074,53.845,0.3723,0.3723);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.1993,37.3422,0.3723,0.3723);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(49.9496,34.1496,0.3723,0.3723);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(46.8687,55.5205,0.3723,0.3723);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(46.906,32.7255,0.3723,0.3723);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(53.0305,54.6176,0.3723,0.3723);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(53.6169,33.7494,0.3723,0.3723);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.2295,53.9288,0.3723,0.3723);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.2388,53.9102,0.3723,0.3723);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(77.8239,49.6035,0.3713,0.3713);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(77.7801,53.5193,0.3723,0.3723);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(104.0097,60.9913,0.3723,0.3723);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.2157,59.6252,0.3723,0.3723);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.3055,45.6836,0.3723,0.3723);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.4697,45.8535,0.3723,0.3723);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.4835,45.6634,0.3723,0.3723);

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

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30.3,14.1,1095.3,644), null);


// stage content:
(lib.puzzani4 = function(mode,startPosition,loop) {
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