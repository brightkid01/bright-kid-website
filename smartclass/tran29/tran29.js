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


(lib.Symbol99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.heli1.b1.enabled=false;
		_root.heli2.b2.enabled=false;
		_root.heli3.b3.enabled=false;
		*/
	}
	this.frame_214 = function() {
		/* stop();
		_root.heli1.b1.enabled=true;
		_root.heli2.b2.enabled=true;
		_root.heli3.b3.enabled=true;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(213).call(this.frame_214).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.shape.graphics.f().s("#373535").ss(2,1,1).p("AATgMIgUgJQgIASgKALIATAOQAKgOAJgUg");
	this.shape.setTransform(160.949,31.5915,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgTAIQALgLAHgSIAUAJQgJAUgKAOg");
	this.shape_1.setTransform(160.949,31.5915,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(2,1,1).p("AgVAAIALAUQAOgIACgCIAQgMIgQgRIgGAGg");
	this.shape_2.setTransform(157.449,35.4715,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgVAAIAVgNIAGgGIAQARIgQAMIgQAKg");
	this.shape_3.setTransform(157.449,35.4715,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(2,1,1).p("AgRAPIATgDQAGgCANgDIgIgVIggAHg");
	this.shape_4.setTransform(152.6291,37.5914,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgUgHIAhgHIAIAVIgTAFIgTADg");
	this.shape_5.setTransform(152.6291,37.5914,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_6.setTransform(162.729,15.5118,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_7.setTransform(162.729,15.5118,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_8.setTransform(162.729,20.9917,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_9.setTransform(162.729,20.9917,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(2,1,1).p("AgNAPIAWAFIAFgnIgXAAg");
	this.shape_10.setTransform(162.589,26.5316,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgNAPIAEgiIAWAAIgEAng");
	this.shape_11.setTransform(162.589,26.5316,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_12.setTransform(162.729,-0.968,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_13.setTransform(162.729,-0.968,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_14.setTransform(162.729,4.5119,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_15.setTransform(162.729,4.5119,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_16.setTransform(162.729,9.9919,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_17.setTransform(162.729,9.9919,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(2,1,1).p("AAKATIAMgTIgSgKQgIgFgJgDIgIAWQANAFADABg");
	this.shape_18.setTransform(155.4491,-14.2278,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AgFAKIgQgGIAIgWIARAIIASAKIgMASg");
	this.shape_19.setTransform(155.4491,-14.2278,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(2,1,1).p("AgEgUIgQARQALAIALARIATgNQgPgTgKgKg");
	this.shape_20.setTransform(159.629,-11.0678,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgUgDIAPgRQALAKAPASIgTANQgLgRgLgHg");
	this.shape_21.setTransform(159.629,-11.0678,0.8,0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(2,1,1).p("AAFgUIgUAJIAFAPQAEAQAAABIAWgEIgEgSg");
	this.shape_22.setTransform(162.129,-6.4479,0.8,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgKAEIgFgPIAUgJIAHATIAEASIgWAEIgEgRg");
	this.shape_23.setTransform(162.129,-6.4479,0.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_24.setTransform(139.2293,-15.5278,0.8,0.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_25.setTransform(139.2293,-15.5278,0.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_26.setTransform(144.6892,-15.5278,0.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_27.setTransform(144.6892,-15.5278,0.8,0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(2,1,1).p("AARANIADgWQgHgCgNAAIgSgBIAAAXg");
	this.shape_28.setTransform(150.2292,-15.4678,0.8,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgTALIAAgWIATAAQANAAAGACIgDAVg");
	this.shape_29.setTransform(150.2292,-15.4678,0.8,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_30.setTransform(122.7496,-15.5278,0.8,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_31.setTransform(122.7496,-15.5278,0.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_32.setTransform(128.2095,-15.5278,0.8,0.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_33.setTransform(128.2095,-15.5278,0.8,0.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_34.setTransform(133.6894,-15.5278,0.8,0.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_35.setTransform(133.6894,-15.5278,0.8,0.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_36.setTransform(106.2698,-15.5278,0.8,0.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_37.setTransform(106.2698,-15.5278,0.8,0.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_38.setTransform(111.7297,-15.5278,0.8,0.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_39.setTransform(111.7297,-15.5278,0.8,0.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_40.setTransform(117.2097,-15.5278,0.8,0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_41.setTransform(117.2097,-15.5278,0.8,0.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(2,1,1).p("AABgVQgIAKgMAXIAVAKQAJgUAJgJg");
	this.shape_42.setTransform(92.39,-9.1879,0.8,0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgSANQAMgXAHgLIASAOQgIAKgJATg");
	this.shape_43.setTransform(92.39,-9.1879,0.8,0.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").ss(2,1,1).p("AAHAKQABgCAOgIIgMgTIgfAXIAQARg");
	this.shape_44.setTransform(95.91,-13.0678,0.8,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgVAEIAggXIALATIgPAJIgMAMg");
	this.shape_45.setTransform(95.91,-13.0678,0.8,0.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAIAVQADgBAMgEIASgCIgDgWIgSADQgNADgHACg");
	this.shape_46.setTransform(100.7299,-15.1678,0.8,0.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgUgGIAUgFIASgDIADAWIgSACIgPAFg");
	this.shape_47.setTransform(100.7299,-15.1678,0.8,0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#373535").ss(2,1,1).p("AgKATIAWAAIAAglIgWAAg");
	this.shape_48.setTransform(90.6301,6.8919,0.8,0.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_49.setTransform(90.6301,6.8919,0.8,0.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#373535").ss(2,1,1).p("AgKATIAWAAIAAglIgWAAg");
	this.shape_50.setTransform(90.6301,1.432,0.8,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_51.setTransform(90.6301,1.432,0.8,0.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").ss(2,1,1).p("AgNAUIAXAAIAAgSQACgKACgGIgXgFQAAACgDARg");
	this.shape_52.setTransform(90.7901,-4.1279,0.8,0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgNAUIABgUIAEgTIAVAFIgCAQIgBASg");
	this.shape_53.setTransform(90.7901,-4.1279,0.8,0.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#373535").ss(2,1,1).p("AgKATIAWAAIAAglIgWAAg");
	this.shape_54.setTransform(90.6301,23.3716,0.8,0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_55.setTransform(90.6301,23.3716,0.8,0.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").ss(2,1,1).p("AgKATIAWAAIAAglIgWAAg");
	this.shape_56.setTransform(90.6301,17.9117,0.8,0.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_57.setTransform(90.6301,17.9117,0.8,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#373535").ss(2,1,1).p("AgKATIAWAAIAAglIgWAAg");
	this.shape_58.setTransform(90.6301,12.4318,0.8,0.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_59.setTransform(90.6301,12.4318,0.8,0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").ss(2,1,1).p("AgIgSIgNATIASAKQAFADAMAEIAIgVIgQgGg");
	this.shape_60.setTransform(97.89,36.6514,0.8,0.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgDALIgSgKIANgSIAOAIIAQAGIgIAWIgRgIg");
	this.shape_61.setTransform(97.89,36.6514,0.8,0.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#373535").ss(2,1,1).p("AAGAWIAPgRQgKgIgLgSIgUANQAOATAMALg");
	this.shape_62.setTransform(93.71,33.4715,0.8,0.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgUgIIATgNQAMASAKAIIgPARQgMgLgOgTg");
	this.shape_63.setTransform(93.71,33.4715,0.8,0.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").ss(2,1,1).p("AgLADIAHASIAVgJIgGgQQgEgNAAgDIgWAEg");
	this.shape_64.setTransform(91.2301,28.8516,0.8,0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgLADIgFgTIAXgEIADAQIAHAQIgVAJg");
	this.shape_65.setTransform(91.2301,28.8516,0.8,0.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_66.setTransform(114.1297,37.9314,0.8,0.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_67.setTransform(114.1297,37.9314,0.8,0.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_68.setTransform(108.6498,37.9314,0.8,0.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_69.setTransform(108.6498,37.9314,0.8,0.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").ss(2,1,1).p("AgPgLIgEAWIAnABIAAgWg");
	this.shape_70.setTransform(103.1299,37.8714,0.8,0.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgTALIAEgWIAjABIAAAWg");
	this.shape_71.setTransform(103.1299,37.8714,0.8,0.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_72.setTransform(130.6095,37.9314,0.8,0.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_73.setTransform(130.6095,37.9314,0.8,0.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_74.setTransform(125.1295,37.9314,0.8,0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_75.setTransform(125.1295,37.9314,0.8,0.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").ss(2,1,1).p("AATgKIglAAIAAAWIAlAAg");
	this.shape_76.setTransform(119.6496,37.9314,0.8,0.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_77.setTransform(119.6496,37.9314,0.8,0.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_78.setTransform(147.0892,37.9314,0.8,0.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_79.setTransform(147.0892,37.9314,0.8,0.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_80.setTransform(141.6093,37.9314,0.8,0.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_81.setTransform(141.6093,37.9314,0.8,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_82.setTransform(136.1294,37.9314,0.8,0.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_83.setTransform(136.1294,37.9314,0.8,0.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIgSgOQgKAPgNAJIAPASQANgMANgQg");
	this.shape_84.setTransform(175.4888,141.3299,0.8,0.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgUAEQANgKAKgPIASAPQgNAQgNALg");
	this.shape_85.setTransform(175.4888,141.3299,0.8,0.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").ss(2,1,1).p("AgVgBIAJAUIAigTIgNgSg");
	this.shape_86.setTransform(171.2688,144.5498,0.8,0.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgVgBIAegRIANASIgiATg");
	this.shape_87.setTransform(171.2688,144.5498,0.8,0.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").ss(2,1,1).p("AAUAIIgFgWIgJADIgIABQgNACgEAAIABAWQAEAAAPgCQADgBAGgBg");
	this.shape_88.setTransform(166.1889,146.2098,0.8,0.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgTgHIARgDIAIgBIAJgCIAFAVIgKADIgJABIgTACg");
	this.shape_89.setTransform(166.1889,146.2098,0.8,0.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_90.setTransform(180.0887,126.2501,0.8,0.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_91.setTransform(180.0887,126.2501,0.8,0.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(2,1,1).p("AgNAPIAXAFIAEgnIgWAAg");
	this.shape_92.setTransform(179.9087,131.77,0.8,0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgNAPIAEgiIAXABIgEAmg");
	this.shape_93.setTransform(179.9087,131.77,0.8,0.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#373535").ss(2,1,1).p("AATgNIgWgIQgEALgCAFQgGAMgDADIATAMQAFgIAFgKQACgEAGgNg");
	this.shape_94.setTransform(178.5087,136.9099,0.8,0.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgSAKIAJgPIAHgQIAUAIIgIARQgDAKgGAIg");
	this.shape_95.setTransform(178.5087,136.9099,0.8,0.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#373535").ss(2,1,1).p("AgLgSIAAAlIAXAAIAAglg");
	this.shape_96.setTransform(180.0887,109.7703,0.8,0.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_97.setTransform(180.0887,109.7703,0.8,0.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_98.setTransform(180.0887,115.2502,0.8,0.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_99.setTransform(180.0887,115.2502,0.8,0.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_100.setTransform(180.0887,120.7302,0.8,0.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_101.setTransform(180.0887,120.7302,0.8,0.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_102.setTransform(180.0887,93.2906,0.8,0.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_103.setTransform(180.0887,93.2906,0.8,0.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_104.setTransform(180.0887,98.7505,0.8,0.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_105.setTransform(180.0887,98.7505,0.8,0.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_106.setTransform(180.0887,104.2504,0.8,0.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_107.setTransform(180.0887,104.2504,0.8,0.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_108.setTransform(180.0887,76.8108,0.8,0.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_109.setTransform(180.0887,76.8108,0.8,0.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_110.setTransform(180.0887,82.2707,0.8,0.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_111.setTransform(180.0887,82.2707,0.8,0.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_112.setTransform(180.0887,87.7707,0.8,0.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_113.setTransform(180.0887,87.7707,0.8,0.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_114.setTransform(180.0887,60.3311,0.8,0.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_115.setTransform(180.0887,60.3311,0.8,0.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_116.setTransform(180.0887,65.791,0.8,0.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_117.setTransform(180.0887,65.791,0.8,0.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#373535").ss(2,1,1).p("AgLgSIAAAlIAXAAIAAglg");
	this.shape_118.setTransform(180.0887,71.2909,0.8,0.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_119.setTransform(180.0887,71.2909,0.8,0.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_120.setTransform(180.0887,43.8513,0.8,0.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_121.setTransform(180.0887,43.8513,0.8,0.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_122.setTransform(180.0887,49.3113,0.8,0.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_123.setTransform(180.0887,49.3113,0.8,0.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_124.setTransform(180.0887,54.8112,0.8,0.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_125.setTransform(180.0887,54.8112,0.8,0.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_126.setTransform(180.0887,27.3716,0.8,0.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_127.setTransform(180.0887,27.3716,0.8,0.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_128.setTransform(180.0887,32.8315,0.8,0.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_129.setTransform(180.0887,32.8315,0.8,0.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_130.setTransform(180.0887,38.3314,0.8,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_131.setTransform(180.0887,38.3314,0.8,0.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_132.setTransform(180.0887,10.8918,0.8,0.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_133.setTransform(180.0887,10.8918,0.8,0.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_134.setTransform(180.0887,16.3518,0.8,0.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_135.setTransform(180.0887,16.3518,0.8,0.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_136.setTransform(180.0887,21.8517,0.8,0.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_137.setTransform(180.0887,21.8517,0.8,0.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_138.setTransform(180.0887,-5.5879,0.8,0.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_139.setTransform(180.0887,-5.5879,0.8,0.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_140.setTransform(180.0887,-0.128,0.8,0.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_141.setTransform(180.0887,-0.128,0.8,0.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_142.setTransform(180.0887,5.3719,0.8,0.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_143.setTransform(180.0887,5.3719,0.8,0.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#373535").ss(2,1,1).p("AgEAWIAWgHIgPgkIgUALg");
	this.shape_144.setTransform(178.7887,-21.8477,0.8,0.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgRgKIATgLIAQAkIgWAHg");
	this.shape_145.setTransform(178.7887,-21.8477,0.8,0.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#373535").ss(2,1,1).p("AAKgTIgWAEQADAPAAAUIAWAAQgBgdgCgKg");
	this.shape_146.setTransform(179.9887,-16.6477,0.8,0.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgKAUQAAgUgCgPIAWgEQACAKABAdg");
	this.shape_147.setTransform(179.9887,-16.6477,0.8,0.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#373535").ss(2,1,1).p("AAMgSIgXAAIAAAlIAXAAg");
	this.shape_148.setTransform(180.0887,-11.1078,0.8,0.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_149.setTransform(180.0887,-11.1078,0.8,0.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#373535").ss(2,1,1).p("AAOAPIAHgVIgmgIIgDAWg");
	this.shape_150.setTransform(166.8489,-31.6675,0.8,0.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgUAIIADgWIAmAIIgHAVg");
	this.shape_151.setTransform(166.8489,-31.6675,0.8,0.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#373535").ss(2,1,1).p("AgMgTIgJAVQANAFARAMIANgTQgUgMgOgHg");
	this.shape_152.setTransform(171.8288,-29.7875,0.8,0.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgVACIAKgUQANAGAUAMIgOATQgQgMgNgFg");
	this.shape_153.setTransform(171.8288,-29.7875,0.8,0.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#373535").ss(2,1,1).p("AgEgVIgQARQABABALALQABACAJAMIATgOQgIgKgFgEQgKgNgCgCg");
	this.shape_154.setTransform(175.9488,-26.4076,0.8,0.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgIAIIgMgMIAQgRIAMAPIANAOIgTAOIgKgOg");
	this.shape_155.setTransform(175.9488,-26.4076,0.8,0.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_156.setTransform(150.3892,-32.0675,0.8,0.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_157.setTransform(150.3892,-32.0675,0.8,0.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_158.setTransform(155.8491,-32.0675,0.8,0.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_159.setTransform(155.8491,-32.0675,0.8,0.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_160.setTransform(161.329,-32.0675,0.8,0.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_161.setTransform(161.329,-32.0675,0.8,0.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_162.setTransform(133.9094,-32.0675,0.8,0.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_163.setTransform(133.9094,-32.0675,0.8,0.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_164.setTransform(139.3693,-32.0675,0.8,0.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_165.setTransform(139.3693,-32.0675,0.8,0.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_166.setTransform(144.8492,-32.0675,0.8,0.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_167.setTransform(144.8492,-32.0675,0.8,0.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_168.setTransform(117.4297,-32.0675,0.8,0.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_169.setTransform(117.4297,-32.0675,0.8,0.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_170.setTransform(122.8896,-32.0675,0.8,0.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_171.setTransform(122.8896,-32.0675,0.8,0.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_172.setTransform(128.3695,-32.0675,0.8,0.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_173.setTransform(128.3695,-32.0675,0.8,0.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_174.setTransform(100.9499,-32.0675,0.8,0.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_175.setTransform(100.9499,-32.0675,0.8,0.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_176.setTransform(106.4098,-32.0675,0.8,0.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_177.setTransform(106.4098,-32.0675,0.8,0.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_178.setTransform(111.8897,-32.0675,0.8,0.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_179.setTransform(111.8897,-32.0675,0.8,0.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#373535").ss(2,1,1).p("AgUgEIAJAVQAQgHAQgFIgFgVQgQAEgUAIg");
	this.shape_180.setTransform(84.5902,-31.1475,0.8,0.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgVgDQAVgJAQgEIAFAWQgQAEgQAHg");
	this.shape_181.setTransform(84.5902,-31.1475,0.8,0.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#373535").ss(2,1,1).p("AATALIAAgWIgmABIACAWg");
	this.shape_182.setTransform(89.9101,-32.0275,0.8,0.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgTgKIAngBIAAAWIgkABg");
	this.shape_183.setTransform(89.9101,-32.0275,0.8,0.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#373535").ss(2,1,1).p("AgSgKIAAAWIAlAAIAAgWg");
	this.shape_184.setTransform(95.41,-32.0675,0.8,0.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_185.setTransform(95.41,-32.0675,0.8,0.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#373535").ss(2,1,1).p("AgPARIAWAEQADgUAGgNIgUgIQgHASgEATg");
	this.shape_186.setTransform(73.9303,-19.9677,0.8,0.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgPARQAEgTAHgSIAUAIQgGANgDAUg");
	this.shape_187.setTransform(73.9303,-19.9677,0.8,0.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#373535").ss(2,1,1).p("AAUgHIgRgOIgWAfIATAMg");
	this.shape_188.setTransform(76.1503,-24.7876,0.8,0.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgTALIAWggIARAPIgUAcg");
	this.shape_189.setTransform(76.1503,-24.7876,0.8,0.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#373535").ss(2,1,1).p("AAIAJQAKgHAEgCIgMgUIgfAXIAQASg");
	this.shape_190.setTransform(79.8302,-28.6476,0.8,0.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AgVADIAfgXIAMAUIgPAJIgMAMg");
	this.shape_191.setTransform(79.8302,-28.6476,0.8,0.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_192.setTransform(73.2503,-3.5679,0.8,0.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_193.setTransform(73.2503,-3.5679,0.8,0.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#373535").ss(2,1,1).p("AgLgSIAAAlIAXAAIAAglg");
	this.shape_194.setTransform(73.2503,-9.0279,0.8,0.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_195.setTransform(73.2503,-9.0279,0.8,0.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#373535").ss(2,1,1).p("AAMgRIgWgBIgBAlIAXAAg");
	this.shape_196.setTransform(73.2703,-14.5278,0.8,0.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgLATIAAglIAXABIAAAkg");
	this.shape_197.setTransform(73.2703,-14.5278,0.8,0.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_198.setTransform(73.2503,12.9118,0.8,0.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_199.setTransform(73.2503,12.9118,0.8,0.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_200.setTransform(73.2503,7.4519,0.8,0.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_201.setTransform(73.2503,7.4519,0.8,0.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_202.setTransform(73.2503,1.952,0.8,0.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_203.setTransform(73.2503,1.952,0.8,0.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#373535").ss(2,1,1).p("AgLgSIAAAlIAXAAIAAglg");
	this.shape_204.setTransform(73.2503,29.3916,0.8,0.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_205.setTransform(73.2503,29.3916,0.8,0.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_206.setTransform(73.2503,23.9316,0.8,0.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_207.setTransform(73.2503,23.9316,0.8,0.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_208.setTransform(73.2503,18.4317,0.8,0.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_209.setTransform(73.2503,18.4317,0.8,0.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_210.setTransform(73.2503,45.8713,0.8,0.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_211.setTransform(73.2503,45.8713,0.8,0.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_212.setTransform(73.2503,40.4114,0.8,0.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_213.setTransform(73.2503,40.4114,0.8,0.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_214.setTransform(73.2503,34.9115,0.8,0.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_215.setTransform(73.2503,34.9115,0.8,0.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_216.setTransform(73.2503,62.3511,0.8,0.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_217.setTransform(73.2503,62.3511,0.8,0.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_218.setTransform(73.2503,56.8911,0.8,0.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_219.setTransform(73.2503,56.8911,0.8,0.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_220.setTransform(73.2503,51.4112,0.8,0.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_221.setTransform(73.2503,51.4112,0.8,0.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_222.setTransform(73.2503,78.8308,0.8,0.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_223.setTransform(73.2503,78.8308,0.8,0.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_224.setTransform(73.2503,73.3709,0.8,0.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_225.setTransform(73.2503,73.3709,0.8,0.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_226.setTransform(73.2503,67.891,0.8,0.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_227.setTransform(73.2503,67.891,0.8,0.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_228.setTransform(73.2503,95.3105,0.8,0.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_229.setTransform(73.2503,95.3105,0.8,0.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_230.setTransform(73.2503,89.8506,0.8,0.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_231.setTransform(73.2503,89.8506,0.8,0.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_232.setTransform(73.2503,84.3707,0.8,0.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_233.setTransform(73.2503,84.3707,0.8,0.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_234.setTransform(73.2503,111.7903,0.8,0.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_235.setTransform(73.2503,111.7903,0.8,0.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_236.setTransform(73.2503,106.3304,0.8,0.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_237.setTransform(73.2503,106.3304,0.8,0.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_238.setTransform(73.2503,100.8505,0.8,0.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_239.setTransform(73.2503,100.8505,0.8,0.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_240.setTransform(73.2503,128.2701,0.8,0.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_241.setTransform(73.2503,128.2701,0.8,0.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_242.setTransform(73.2503,122.8101,0.8,0.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_243.setTransform(73.2503,122.8101,0.8,0.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_244.setTransform(73.2503,117.3302,0.8,0.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_245.setTransform(73.2503,117.3302,0.8,0.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#373535").ss(2,1,1).p("AgEgUIgRAQIAeAZIANgTg");
	this.shape_246.setTransform(79.2902,142.6898,0.8,0.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgVgEIARgQIAaAWIgNATg");
	this.shape_247.setTransform(79.2902,142.6898,0.8,0.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#373535").ss(2,1,1).p("AABAWIATgOIgKgNQgIgOgBgCIgUALQACADAIAMQAEAIAGAJg");
	this.shape_248.setTransform(75.8103,138.6899,0.8,0.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgJAGIgKgQIAUgLIAJAPIAKAOIgTAOQgGgJgEgHg");
	this.shape_249.setTransform(75.8103,138.6899,0.8,0.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#373535").ss(2,1,1).p("AgFAVIAVgHQgBgDgEgOQgBgCgDgPIgWADQACAHACAMQAEAQACADg");
	this.shape_250.setTransform(73.7703,133.77,0.8,0.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgLACIgEgSIAWgEIAEARIAFAQIgVAIIgGgTg");
	this.shape_251.setTransform(73.7703,133.77,0.8,0.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_252.setTransform(94.73,146.5098,0.8,0.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_253.setTransform(94.73,146.5098,0.8,0.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#373535").ss(2,1,1).p("AAUANIAAgXIgKAAQgGAAgDAAIgRgCIgCAWQADABAPABg");
	this.shape_254.setTransform(89.2301,146.4298,0.8,0.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AAAAMIgSgCIACgWIARACIAJAAIAJAAIAAAXg");
	this.shape_255.setTransform(89.2301,146.4298,0.8,0.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#373535").ss(2,1,1).p("AAPASIAGgWQgCgBgOgFIgQgHIgKAVIASAHQAGADAMAEg");
	this.shape_256.setTransform(83.9502,145.3698,0.8,0.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgDALIgSgIIAKgTIAQAHIAQAFIgGAWIgSgHg");
	this.shape_257.setTransform(83.9502,145.3698,0.8,0.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_258.setTransform(111.2098,146.5098,0.8,0.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_259.setTransform(111.2098,146.5098,0.8,0.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_260.setTransform(105.7298,146.5098,0.8,0.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_261.setTransform(105.7298,146.5098,0.8,0.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_262.setTransform(100.2499,146.5098,0.8,0.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_263.setTransform(100.2499,146.5098,0.8,0.8);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_264.setTransform(127.6895,146.5098,0.8,0.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_265.setTransform(127.6895,146.5098,0.8,0.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_266.setTransform(122.2096,146.5098,0.8,0.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_267.setTransform(122.2096,146.5098,0.8,0.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_268.setTransform(116.7297,146.5098,0.8,0.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_269.setTransform(116.7297,146.5098,0.8,0.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_270.setTransform(144.1693,146.5098,0.8,0.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_271.setTransform(144.1693,146.5098,0.8,0.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_272.setTransform(138.6893,146.5098,0.8,0.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_273.setTransform(138.6893,146.5098,0.8,0.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_274.setTransform(133.2094,146.5098,0.8,0.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_275.setTransform(133.2094,146.5098,0.8,0.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_276.setTransform(160.649,146.5098,0.8,0.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_277.setTransform(160.649,146.5098,0.8,0.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_278.setTransform(155.1891,146.5098,0.8,0.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_279.setTransform(155.1891,146.5098,0.8,0.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgXIglAAIAAAXg");
	this.shape_280.setTransform(149.6892,146.5098,0.8,0.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_281.setTransform(149.6892,146.5098,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(71.3,-34,110.8,182.5), null);


(lib.Slotcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(2,1,1).p("AAQgHIgFALIgBADIAAAAIgBAAIAAABIAAABIgEANIgWgGIAFgQIAAAAIAAAAIAAAAIAHgRIABAAIAAgBIAAAAIAAgBIACgCIAUAKIgCACIAAABIAAAAg");
	this.shape.setTransform(-326.2357,4.9819,0.7281,0.7281);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AgQAQIAEgQIAAAAIAAAAIAAAAIAHgRIABgBIAAAAIAAgBIAAAAIABgCIAUAKIgBACIAAABIgBAAIAAABIgEAMIgBACIAAAAIgBAAIAAABIgBABIgDANg");
	this.shape_1.setTransform(-326.2357,4.9819,0.7281,0.7281);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#373535").ss(2,1,1).p("AgBgVIATALIgBACIgBABIAAABIgCAEIgFAJIAAABIAAAAIgBABIgEANIgVgHIADgKIACgEIAAgBIAAAAIABgBIAHgQIABgBIAAAAIAAgBIABAAg");
	this.shape_2.setTransform(-324.9798,1.651,0.7281,0.7281);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgRAPIADgKIACgEIAAgBIAAAAIABgBIAHgQIABgBIAAAAIAAgBIABAAIABgCIATALIgBACIgBABIAAABIgCAEIgFAJIAAABIAAAAIgBABIgEANg");
	this.shape_3.setTransform(-324.9798,1.651,0.7281,0.7281);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#373535").ss(2,1,1).p("AAHgSIABACIAEAPIABABIAAAAIADASIgWADIgDgPIAAgBIAAgBIgFgOIAAgBIAAAAIgBgBIAVgIIABABg");
	this.shape_4.setTransform(-298.3869,5.0365,0.7281,0.7281);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgJAGIgBgBIAAgBIgEgOIAAgBIAAAAIgBgBIAVgIIAAABIAAABIABACIAFAPIABABIAAAAIADASIgWADg");
	this.shape_5.setTransform(-298.3869,5.0365,0.7281,0.7281);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#373535").ss(2,1,1).p("AADgSIACABIAHAQIABACIAFAOIgVAHIgDgIIgCgGIgHgOIgBgCIAAAAIAAAAIgBAAIAAgCIATgLIABABIAAAAg");
	this.shape_6.setTransform(-299.3516,1.7784,0.7281,0.7281);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgGAOIgCgHIgHgMIgBgDIAAAAIAAgBIgBAAIAAgBIATgLIABABIAAAAIAAABIACACIAHAQIABACIAFAOIgVAHg");
	this.shape_7.setTransform(-299.3516,1.7784,0.7281,0.7281);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#373535").ss(2,1,1).p("AgTgHIAGAVIAIgBQABAAAHgCQALgCAGAAIgCgWg");
	this.shape_8.setTransform(-314.5684,-6.8493,0.7281,0.7281);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AgTgHIAlgHIACAXIgRACIgIABIgIACg");
	this.shape_9.setTransform(-314.5684,-6.8493,0.7281,0.7281);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#373535").ss(2,1,1).p("AgUAAIANASIAcgQIgJgUg");
	this.shape_10.setTransform(-318.9732,-5.3931,0.7281,0.7281);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgUAAIAggRIAJATIgcAQg");
	this.shape_11.setTransform(-318.9732,-5.3931,0.7281,0.7281);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#373535").ss(2,1,1).p("AAVgCIgPgSQgNAMgNAPIATAOQAJgNANgKg");
	this.shape_12.setTransform(-322.65,-2.59,0.7281,0.7281);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AgUAGQANgOANgMIAPARQgNALgJANg");
	this.shape_13.setTransform(-322.65,-2.59,0.7281,0.7281);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#373535").ss(2,1,1).p("AgEgUIgQASQALAHAMAQIASgOQgMgOgNgNg");
	this.shape_14.setTransform(-301.6815,-2.6082,0.7281,0.7281);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgUgCIAQgSQANANAMAOIgSAOQgMgQgLgHg");
	this.shape_15.setTransform(-301.6815,-2.6082,0.7281,0.7281);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#373535").ss(2,1,1).p("AgLgSIgJAUIAcAQIANgSg");
	this.shape_16.setTransform(-305.3218,-5.3931,0.7281,0.7281);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AgUACIAJgTIAgARIgNASg");
	this.shape_17.setTransform(-305.3218,-5.3931,0.7281,0.7281);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#373535").ss(2,1,1).p("AgRgNIgCAWQAFAAAMACIAHABIAJACIAFgVIgJgDg");
	this.shape_18.setTransform(-309.7449,-6.8493,0.7281,0.7281);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AAGAMIgHgBIgSgCIACgXIAbAFIAJACIgFAVg");
	this.shape_19.setTransform(-309.7449,-6.8493,0.7281,0.7281);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#373535").ss(2,1,1).p("AgVABIANAUIAegXIgPgSIgHAGg");
	this.shape_20.setTransform(-253.392,41.9862,0.7281,0.7281);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AgVABIAVgPIAHgGIAPASIgeAXg");
	this.shape_21.setTransform(-253.392,41.9862,0.7281,0.7281);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#373535").ss(2,1,1).p("AgVgDIAIAVIAjgPIgKgUg");
	this.shape_22.setTransform(-257.6331,44.4071,0.7281,0.7281);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AgVgDIAhgOIAKAUIgjAPg");
	this.shape_23.setTransform(-257.6331,44.4071,0.7281,0.7281);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#373535").ss(2,1,1).p("AAUAJIgEgWIgRADQgLACgHAAIABAWQAIAAALgCg");
	this.shape_24.setTransform(-262.3655,45.663,0.7281,0.7281);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgTgIIASgCIARgDIAEAWIgTADIgTACg");
	this.shape_25.setTransform(-262.3655,45.663,0.7281,0.7281);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#373535").ss(2,1,1).p("AgNAQIAWAEIAFgmIgWgBIgBAJg");
	this.shape_26.setTransform(-246.2023,29.5362,0.7281,0.7281);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgNAQIAEgaIABgJIAWABIgFAmg");
	this.shape_27.setTransform(-246.2023,29.5362,0.7281,0.7281);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#373535").ss(2,1,1).p("AgRALIAUALIAPgkIgVgHg");
	this.shape_28.setTransform(-247.4582,34.2687,0.7281,0.7281);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgRALIAOggIAVAHIgPAkg");
	this.shape_29.setTransform(-247.4582,34.2687,0.7281,0.7281);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#373535").ss(2,1,1).p("AgNAAIgHAGIARAQIAGgIQACgBAEgHQAKgLACgDIgUgNg");
	this.shape_30.setTransform(-249.8973,38.5097,0.7281,0.7281);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AgUAHIAHgHIAPgVIATANIgMAPIgGAIIgGAHg");
	this.shape_31.setTransform(-249.8973,38.5097,0.7281,0.7281);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#373535").ss(2,1,1).p("AABAWIAUgNQgIgJgEgGIgGgIIgGgHIgRAPg");
	this.shape_32.setTransform(-249.8427,15.5026,0.7281,0.7281);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AgUgGIARgPIAGAHIAGAIIAMAPIgUANg");
	this.shape_33.setTransform(-249.8427,15.5026,0.7281,0.7281);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#373535").ss(2,1,1).p("AgDAWIAVgIIgPgjIgUALg");
	this.shape_34.setTransform(-247.4218,19.7254,0.7281,0.7281);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgRgLIAUgKIAPAkIgVAHg");
	this.shape_35.setTransform(-247.4218,19.7254,0.7281,0.7281);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#373535").ss(2,1,1).p("AAJgTIgWAEQAEAfAAAEIAXgBQgBgJgEgdg");
	this.shape_36.setTransform(-246.1659,24.4761,0.7281,0.7281);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgNgPIAWgEIAFAmIgXABIgEgjg");
	this.shape_37.setTransform(-246.1659,24.4761,0.7281,0.7281);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#373535").ss(2,1,1).p("AAPAOIAFgWIgmgFIgBAWIAJABg");
	this.shape_38.setTransform(-262.2927,8.2765,0.7281,0.7281);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgKAKIgJgBIABgWIAmAFIgFAWg");
	this.shape_39.setTransform(-262.2927,8.2765,0.7281,0.7281);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#373535").ss(2,1,1).p("AAMASIAKgUIgjgPIgIAVg");
	this.shape_40.setTransform(-257.5784,9.5324,0.7281,0.7281);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgVAEIAIgVIAjAPIgKAUg");
	this.shape_41.setTransform(-257.5784,9.5324,0.7281,0.7281);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#373535").ss(2,1,1).p("AAHAVIAPgRIgHgGIgXgSIgNAUg");
	this.shape_42.setTransform(-253.3374,11.9896,0.7281,0.7281);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AgVAAIANgUIAXASIAHAGIgPARg");
	this.shape_43.setTransform(-253.3374,11.9896,0.7281,0.7281);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_44.setTransform(-277.3456,8.058,0.7281,0.7281);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_45.setTransform(-277.3456,8.058,0.7281,0.7281);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#373535").ss(2,1,1).p("AATgLIglAAIAAAXIAlAAg");
	this.shape_46.setTransform(-272.3583,8.058,0.7281,0.7281);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_47.setTransform(-272.3583,8.058,0.7281,0.7281);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_48.setTransform(-267.3528,8.058,0.7281,0.7281);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_49.setTransform(-267.3528,8.058,0.7281,0.7281);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_50.setTransform(-292.3985,8.058,0.7281,0.7281);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_51.setTransform(-292.3985,8.058,0.7281,0.7281);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_52.setTransform(-287.4112,8.058,0.7281,0.7281);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_53.setTransform(-287.4112,8.058,0.7281,0.7281);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_54.setTransform(-282.3875,8.058,0.7281,0.7281);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_55.setTransform(-282.3875,8.058,0.7281,0.7281);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_56.setTransform(-307.4333,8.058,0.7281,0.7281);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_57.setTransform(-307.4333,8.058,0.7281,0.7281);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#373535").ss(2,1,1).p("AATgLIglAAIAAAXIAlAAg");
	this.shape_58.setTransform(-302.446,8.058,0.7281,0.7281);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_59.setTransform(-302.446,8.058,0.7281,0.7281);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_60.setTransform(-297.4222,8.058,0.7281,0.7281);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_61.setTransform(-297.4222,8.058,0.7281,0.7281);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_62.setTransform(-322.468,8.058,0.7281,0.7281);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_63.setTransform(-322.468,8.058,0.7281,0.7281);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_64.setTransform(-317.4807,8.058,0.7281,0.7281);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_65.setTransform(-317.4807,8.058,0.7281,0.7281);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_66.setTransform(-312.4752,8.058,0.7281,0.7281);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_67.setTransform(-312.4752,8.058,0.7281,0.7281);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_68.setTransform(-337.5027,8.058,0.7281,0.7281);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_69.setTransform(-337.5027,8.058,0.7281,0.7281);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#373535").ss(2,1,1).p("AATgLIglAAIAAAXIAlAAg");
	this.shape_70.setTransform(-332.5154,8.058,0.7281,0.7281);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_71.setTransform(-332.5154,8.058,0.7281,0.7281);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_72.setTransform(-327.5099,8.058,0.7281,0.7281);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_73.setTransform(-327.5099,8.058,0.7281,0.7281);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_74.setTransform(-352.5374,8.058,0.7281,0.7281);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_75.setTransform(-352.5374,8.058,0.7281,0.7281);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_76.setTransform(-347.5501,8.058,0.7281,0.7281);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_77.setTransform(-347.5501,8.058,0.7281,0.7281);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#373535").ss(2,1,1).p("AgSgLIAAAXIAlAAIAAgXg");
	this.shape_78.setTransform(-342.5446,8.058,0.7281,0.7281);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_79.setTransform(-342.5446,8.058,0.7281,0.7281);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#373535").ss(2,1,1).p("AAHAJQALgIAEgBIgNgUIgeAXIAPASg");
	this.shape_80.setTransform(-366.571,11.9532,0.7281,0.7281);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("AgVADIAegXIANAUIgOAJIgOAMg");
	this.shape_81.setTransform(-366.571,11.9532,0.7281,0.7281);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#373535").ss(2,1,1).p("AAOgRIgjAPIAKAUIAhgOg");
	this.shape_82.setTransform(-362.3482,9.5324,0.7281,0.7281);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AgVgCIAjgPIAIAVIghAOg");
	this.shape_83.setTransform(-362.3482,9.5324,0.7281,0.7281);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#373535").ss(2,1,1).p("AgTgIIAEAWIAjgFIgBgWQgIAAgLACg");
	this.shape_84.setTransform(-357.5975,8.2765,0.7281,0.7281);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgTgIIATgDIATgCIABAWIgjAFg");
	this.shape_85.setTransform(-357.5975,8.2765,0.7281,0.7281);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#373535").ss(2,1,1).p("AAOgPIgWgEIgFAmIAXABIAAgJg");
	this.shape_86.setTransform(-373.7789,24.4033,0.7281,0.7281);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgNATIAFgmIAWAEIgEAaIAAAJg");
	this.shape_87.setTransform(-373.7789,24.4033,0.7281,0.7281);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#373535").ss(2,1,1).p("AASgKIgUgLIgPAkIAVAHg");
	this.shape_88.setTransform(-372.5048,19.6708,0.7281,0.7281);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgRAPIAPgkIAUALIgOAgg");
	this.shape_89.setTransform(-372.5048,19.6708,0.7281,0.7281);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIgRgPIgGAIIgGAHQgKAMgCADIAUANQACgFAHgJg");
	this.shape_90.setTransform(-370.0839,15.4298,0.7281,0.7281);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AgUAKIAMgQIAGgIIAGgHIARAPIgMAOIgJAOg");
	this.shape_91.setTransform(-370.0839,15.4298,0.7281,0.7281);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#373535").ss(2,1,1).p("AAAgVIgUANIAXAeIASgPg");
	this.shape_92.setTransform(-370.1203,38.4369,0.7281,0.7281);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AgUgIIAUgNIAVAcIgSAPg");
	this.shape_93.setTransform(-370.1203,38.4369,0.7281,0.7281);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAEAXIAlgIIgDgSIAAAAIgBgDIAAgBIgBAAIgMgdIgVAIIALAZg");
	this.shape_94.setTransform(-372.5594,34.7783,0.7281,0.7281);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgUAHIAOgDIgLgZIAVgIIAMAdIABAAIAAABIABADIAAAAIADASIglAIg");
	this.shape_95.setTransform(-372.5594,34.7783,0.7281,0.7281);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#373535").ss(2,1,1).p("AgIAUIAWgEQgEgfAAgEIgXABQAAAHAFAfg");
	this.shape_96.setTransform(-373.7971,29.4634,0.7281,0.7281);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgNgSIAXgBIAEAjIgWAEQgFgfAAgHg");
	this.shape_97.setTransform(-373.7971,29.4634,0.7281,0.7281);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#373535").ss(2,1,1).p("AgPgNIgEAWIAmAFIABgWIgJgBg");
	this.shape_98.setTransform(-357.6703,45.663,0.7281,0.7281);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgTAJIAEgWIAaAEIAJABIgBAWg");
	this.shape_99.setTransform(-357.6703,45.663,0.7281,0.7281);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#373535").ss(2,1,1).p("AgPAfIAmgIIgFgXIgDABIAGgRIgggOIgLAVIAcALIgZAGg");
	this.shape_100.setTransform(-362.3482,45.3354,0.7281,0.7281);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgTAIIAZgGIgbgLIAKgVIAhAOIgHARIADgBIAFAXIglAIg");
	this.shape_101.setTransform(-362.3482,45.3354,0.7281,0.7281);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#373535").ss(2,1,1).p("AgFgUIgQASIAIAFIAXASIAMgUQgJgGgFgDg");
	this.shape_102.setTransform(-366.6438,41.9498,0.7281,0.7281);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgOADIgHgFIAPgSIAOAMIAOAJIgMAUg");
	this.shape_103.setTransform(-366.6438,41.9498,0.7281,0.7281);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_104.setTransform(-342.6174,45.8996,0.7281,0.7281);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_105.setTransform(-342.6174,45.8996,0.7281,0.7281);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_106.setTransform(-347.6047,45.8996,0.7281,0.7281);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_107.setTransform(-347.6047,45.8996,0.7281,0.7281);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_108.setTransform(-352.6102,45.8996,0.7281,0.7281);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_109.setTransform(-352.6102,45.8996,0.7281,0.7281);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_110.setTransform(-327.5827,45.8996,0.7281,0.7281);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_111.setTransform(-327.5827,45.8996,0.7281,0.7281);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#373535").ss(2,1,1).p("AATgKIglAAIAAAWIAlAAg");
	this.shape_112.setTransform(-332.57,45.8996,0.7281,0.7281);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_113.setTransform(-332.57,45.8996,0.7281,0.7281);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_114.setTransform(-337.5755,45.8996,0.7281,0.7281);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_115.setTransform(-337.5755,45.8996,0.7281,0.7281);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_116.setTransform(-312.5298,45.8996,0.7281,0.7281);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_117.setTransform(-312.5298,45.8996,0.7281,0.7281);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_118.setTransform(-317.5353,45.8996,0.7281,0.7281);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_119.setTransform(-317.5353,45.8996,0.7281,0.7281);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_120.setTransform(-322.5408,45.8996,0.7281,0.7281);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_121.setTransform(-322.5408,45.8996,0.7281,0.7281);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_122.setTransform(-297.4951,45.8996,0.7281,0.7281);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_123.setTransform(-297.4951,45.8996,0.7281,0.7281);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#373535").ss(2,1,1).p("AgSAMIAlAAIAAgWIglAAg");
	this.shape_124.setTransform(-302.4824,45.8996,0.7281,0.7281);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_125.setTransform(-302.4824,45.8996,0.7281,0.7281);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_126.setTransform(-307.5061,45.8996,0.7281,0.7281);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_127.setTransform(-307.5061,45.8996,0.7281,0.7281);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_128.setTransform(-282.4603,45.8996,0.7281,0.7281);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_129.setTransform(-282.4603,45.8996,0.7281,0.7281);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_130.setTransform(-287.4476,45.8996,0.7281,0.7281);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_131.setTransform(-287.4476,45.8996,0.7281,0.7281);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_132.setTransform(-292.4531,45.8996,0.7281,0.7281);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_133.setTransform(-292.4531,45.8996,0.7281,0.7281);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_134.setTransform(-267.4256,45.8996,0.7281,0.7281);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_135.setTransform(-267.4256,45.8996,0.7281,0.7281);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#373535").ss(2,1,1).p("AATgKIglAAIAAAWIAlAAg");
	this.shape_136.setTransform(-272.4129,45.8996,0.7281,0.7281);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_137.setTransform(-272.4129,45.8996,0.7281,0.7281);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#373535").ss(2,1,1).p("AATAMIAAgWIglAAIAAAWg");
	this.shape_138.setTransform(-277.4184,45.8996,0.7281,0.7281);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgSALIAAgWIAlAAIAAAWg");
	this.shape_139.setTransform(-277.4184,45.8996,0.7281,0.7281);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#373535").ss(2,1,1).p("AgLgTIAAAmIAXAAIAAgmg");
	this.shape_140.setTransform(-298.842,63.155,0.7281,0.7281);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_141.setTransform(-298.842,63.155,0.7281,0.7281);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAgmIgXAAg");
	this.shape_142.setTransform(-298.842,58.6045,0.7281,0.7281);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgLAUIAAgnIAXAAIAAAng");
	this.shape_143.setTransform(-298.842,58.6045,0.7281,0.7281);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_144.setTransform(-298.842,54.0358,0.7281,0.7281);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_145.setTransform(-298.842,54.0358,0.7281,0.7281);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_146.setTransform(-298.842,49.4854,0.7281,0.7281);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_147.setTransform(-298.842,49.4854,0.7281,0.7281);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#373535").ss(2,1,1).p("AgLgTIAAAmIAXAAIAAgmg");
	this.shape_148.setTransform(-327.1276,63.155,0.7281,0.7281);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_149.setTransform(-327.1276,63.155,0.7281,0.7281);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAgmIgXAAg");
	this.shape_150.setTransform(-327.1276,58.6045,0.7281,0.7281);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AgLAUIAAgnIAXAAIAAAng");
	this.shape_151.setTransform(-327.1276,58.6045,0.7281,0.7281);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_152.setTransform(-327.1276,54.0358,0.7281,0.7281);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_153.setTransform(-327.1276,54.0358,0.7281,0.7281);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#373535").ss(2,1,1).p("AgLATIAXAAIAAglIgXAAg");
	this.shape_154.setTransform(-327.1276,49.4854,0.7281,0.7281);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AgLATIAAglIAXAAIAAAlg");
	this.shape_155.setTransform(-327.1276,49.4854,0.7281,0.7281);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#373535").ss(2,1,1).p("AASgIIgSgOQgOATgDAWIAWAEQACgRALgOg");
	this.shape_156.setTransform(-683.9563,103.2536,0.7281,0.7281);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AgRATQADgWAOgTIASAOQgLAOgCARg");
	this.shape_157.setTransform(-683.9563,103.2536,0.7281,0.7281);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#373535").ss(2,1,1).p("AAEgWIgWAFQAGAWAOASIARgPQgLgMgEgSg");
	this.shape_158.setTransform(-683.8289,108.5503,0.7281,0.7281);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgSgQIAWgGQAEASALAMIgSAPQgOgRgFgWg");
	this.shape_159.setTransform(-683.8289,108.5503,0.7281,0.7281);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#373535").ss(2,1,1).p("AgLgPIgKAUQAVALAWgBIAAgWQgRAAgQgIg");
	this.shape_160.setTransform(-680.0247,111.5019,0.7281,0.7281);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AgVAFIAKgUQAQAIARAAIAAAWIgDABQgUAAgUgLg");
	this.shape_161.setTransform(-680.0247,111.5019,0.7281,0.7281);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_162.setTransform(-670.3049,97.8659,0.7281,0.7281);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_163.setTransform(-670.3049,97.8659,0.7281,0.7281);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_164.setTransform(-675.2558,98.8852,0.7281,0.7281);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_165.setTransform(-675.2558,98.8852,0.7281,0.7281);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#373535").ss(2,1,1).p("AgMgIIgKAGIAMATQAKgHAXgEIgFgWIgTAEg");
	this.shape_166.setTransform(-680.3159,100.0319,0.7281,0.7281);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AgWgCIAKgFIALgFIATgEIAFAWQgXAEgKAHg");
	this.shape_167.setTransform(-680.3159,100.0319,0.7281,0.7281);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAHIAEAXg");
	this.shape_168.setTransform(-655.4158,94.7897,0.7281,0.7281);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("AgUgHIAkgIIAFAXIglAIg");
	this.shape_169.setTransform(-655.4158,94.7897,0.7281,0.7281);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAWg");
	this.shape_170.setTransform(-660.3667,95.809,0.7281,0.7281);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_171.setTransform(-660.3667,95.809,0.7281,0.7281);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_172.setTransform(-665.3176,96.8465,0.7281,0.7281);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_173.setTransform(-665.3176,96.8465,0.7281,0.7281);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAHIAFAWg");
	this.shape_174.setTransform(-640.5449,91.7136,0.7281,0.7281);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIglAIg");
	this.shape_175.setTransform(-640.5449,91.7136,0.7281,0.7281);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_176.setTransform(-645.4776,92.7329,0.7281,0.7281);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_177.setTransform(-645.4776,92.7329,0.7281,0.7281);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_178.setTransform(-650.4285,93.7522,0.7281,0.7281);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_179.setTransform(-650.4285,93.7522,0.7281,0.7281);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_180.setTransform(-625.674,88.6193,0.7281,0.7281);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_181.setTransform(-625.674,88.6193,0.7281,0.7281);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAFAVg");
	this.shape_182.setTransform(-630.6067,89.6386,0.7281,0.7281);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_183.setTransform(-630.6067,89.6386,0.7281,0.7281);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgWIglAIIAFAWg");
	this.shape_184.setTransform(-635.5576,90.6761,0.7281,0.7281);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_185.setTransform(-635.5576,90.6761,0.7281,0.7281);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_186.setTransform(-610.7849,85.5614,0.7281,0.7281);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_187.setTransform(-610.7849,85.5614,0.7281,0.7281);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_188.setTransform(-615.7358,86.5807,0.7281,0.7281);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_189.setTransform(-615.7358,86.5807,0.7281,0.7281);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_190.setTransform(-620.6867,87.6,0.7281,0.7281);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_191.setTransform(-620.6867,87.6,0.7281,0.7281);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_192.setTransform(-595.8958,82.4671,0.7281,0.7281);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_193.setTransform(-595.8958,82.4671,0.7281,0.7281);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_194.setTransform(-600.8467,83.4864,0.7281,0.7281);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_195.setTransform(-600.8467,83.4864,0.7281,0.7281);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_196.setTransform(-605.7976,84.5057,0.7281,0.7281);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_197.setTransform(-605.7976,84.5057,0.7281,0.7281);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIglAIIAFAVg");
	this.shape_198.setTransform(-581.0249,79.3728,0.7281,0.7281);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgUgGIAkgIIAGAWIgmAHg");
	this.shape_199.setTransform(-581.0249,79.3728,0.7281,0.7281);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAHIAEAXg");
	this.shape_200.setTransform(-585.9576,80.4103,0.7281,0.7281);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_201.setTransform(-585.9576,80.4103,0.7281,0.7281);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_202.setTransform(-590.9085,81.4478,0.7281,0.7281);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_203.setTransform(-590.9085,81.4478,0.7281,0.7281);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_204.setTransform(-566.154,76.3149,0.7281,0.7281);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_205.setTransform(-566.154,76.3149,0.7281,0.7281);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAHIAEAWg");
	this.shape_206.setTransform(-571.0685,77.3342,0.7281,0.7281);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_207.setTransform(-571.0685,77.3342,0.7281,0.7281);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAIIAFAVg");
	this.shape_208.setTransform(-576.0376,78.3535,0.7281,0.7281);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_209.setTransform(-576.0376,78.3535,0.7281,0.7281);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_210.setTransform(-551.2649,73.2206,0.7281,0.7281);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_211.setTransform(-551.2649,73.2206,0.7281,0.7281);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIglAIIAFAVg");
	this.shape_212.setTransform(-556.1976,74.2399,0.7281,0.7281);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_213.setTransform(-556.1976,74.2399,0.7281,0.7281);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAFAWg");
	this.shape_214.setTransform(-561.1667,75.2774,0.7281,0.7281);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIgkAIg");
	this.shape_215.setTransform(-561.1667,75.2774,0.7281,0.7281);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAXg");
	this.shape_216.setTransform(-536.3758,70.1445,0.7281,0.7281);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgUgGIAlgJIAEAXIglAHg");
	this.shape_217.setTransform(-536.3758,70.1445,0.7281,0.7281);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_218.setTransform(-541.3267,71.182,0.7281,0.7281);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_219.setTransform(-541.3267,71.182,0.7281,0.7281);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_220.setTransform(-546.2776,72.2013,0.7281,0.7281);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_221.setTransform(-546.2776,72.2013,0.7281,0.7281);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAFAVg");
	this.shape_222.setTransform(-521.505,67.0684,0.7281,0.7281);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AgVgGIAlgIIAGAVIglAIg");
	this.shape_223.setTransform(-521.505,67.0684,0.7281,0.7281);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_224.setTransform(-526.4376,68.0877,0.7281,0.7281);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_225.setTransform(-526.4376,68.0877,0.7281,0.7281);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_226.setTransform(-531.3885,69.107,0.7281,0.7281);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_227.setTransform(-531.3885,69.107,0.7281,0.7281);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgWIglAIIAFAVg");
	this.shape_228.setTransform(-506.6159,63.974,0.7281,0.7281);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgVgGIAmgIIAEAWIgkAHg");
	this.shape_229.setTransform(-506.6159,63.974,0.7281,0.7281);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAEAVg");
	this.shape_230.setTransform(-511.5486,64.9934,0.7281,0.7281);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_231.setTransform(-511.5486,64.9934,0.7281,0.7281);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIglAIIAFAXg");
	this.shape_232.setTransform(-516.5177,66.0309,0.7281,0.7281);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgVgHIAlgIIAFAXIgkAIg");
	this.shape_233.setTransform(-516.5177,66.0309,0.7281,0.7281);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_234.setTransform(-491.745,60.9161,0.7281,0.7281);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_235.setTransform(-491.745,60.9161,0.7281,0.7281);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAHIAFAWg");
	this.shape_236.setTransform(-496.6777,61.9354,0.7281,0.7281);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgVgHIAlgHIAGAVIglAIg");
	this.shape_237.setTransform(-496.6777,61.9354,0.7281,0.7281);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgFgVg");
	this.shape_238.setTransform(-501.6286,62.9547,0.7281,0.7281);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgVgGIAmgIIAEAVIgkAIg");
	this.shape_239.setTransform(-501.6286,62.9547,0.7281,0.7281);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_240.setTransform(-476.8559,57.8218,0.7281,0.7281);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_241.setTransform(-476.8559,57.8218,0.7281,0.7281);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAFAVg");
	this.shape_242.setTransform(-481.8068,58.8411,0.7281,0.7281);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_243.setTransform(-481.8068,58.8411,0.7281,0.7281);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_244.setTransform(-486.7577,59.8604,0.7281,0.7281);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_245.setTransform(-486.7577,59.8604,0.7281,0.7281);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIgkAIIAEAXg");
	this.shape_246.setTransform(-461.9668,54.7457,0.7281,0.7281);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgUgGIAkgJIAFAXIglAHg");
	this.shape_247.setTransform(-461.9668,54.7457,0.7281,0.7281);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAXg");
	this.shape_248.setTransform(-466.9177,55.765,0.7281,0.7281);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAJg");
	this.shape_249.setTransform(-466.9177,55.765,0.7281,0.7281);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_250.setTransform(-471.8686,56.8025,0.7281,0.7281);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_251.setTransform(-471.8686,56.8025,0.7281,0.7281);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIglAHIAFAWg");
	this.shape_252.setTransform(-447.0959,51.6696,0.7281,0.7281);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_253.setTransform(-447.0959,51.6696,0.7281,0.7281);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_254.setTransform(-452.0286,52.6889,0.7281,0.7281);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_255.setTransform(-452.0286,52.6889,0.7281,0.7281);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_256.setTransform(-456.9795,53.7082,0.7281,0.7281);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_257.setTransform(-456.9795,53.7082,0.7281,0.7281);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_258.setTransform(-432.225,48.5753,0.7281,0.7281);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_259.setTransform(-432.225,48.5753,0.7281,0.7281);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIglAIIAFAVg");
	this.shape_260.setTransform(-437.1577,49.5946,0.7281,0.7281);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgVgGIAmgIIAEAWIgkAHg");
	this.shape_261.setTransform(-437.1577,49.5946,0.7281,0.7281);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAHIAFAXg");
	this.shape_262.setTransform(-442.1086,50.6321,0.7281,0.7281);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgUgHIAkgIIAGAXIgmAIg");
	this.shape_263.setTransform(-442.1086,50.6321,0.7281,0.7281);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_264.setTransform(-417.3359,45.5174,0.7281,0.7281);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_265.setTransform(-417.3359,45.5174,0.7281,0.7281);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#373535").ss(2,1,1).p("AgPAPIAkgIIgEgVIglAHg");
	this.shape_266.setTransform(-422.2868,46.5367,0.7281,0.7281);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_267.setTransform(-422.2868,46.5367,0.7281,0.7281);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_268.setTransform(-427.2377,47.556,0.7281,0.7281);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_269.setTransform(-427.2377,47.556,0.7281,0.7281);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_270.setTransform(-402.4468,42.4231,0.7281,0.7281);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_271.setTransform(-402.4468,42.4231,0.7281,0.7281);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_272.setTransform(-407.3977,43.4424,0.7281,0.7281);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_273.setTransform(-407.3977,43.4424,0.7281,0.7281);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_274.setTransform(-412.3486,44.4617,0.7281,0.7281);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_275.setTransform(-412.3486,44.4617,0.7281,0.7281);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgWIglAIIAFAVg");
	this.shape_276.setTransform(-387.5759,39.3288,0.7281,0.7281);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_277.setTransform(-387.5759,39.3288,0.7281,0.7281);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#373535").ss(2,1,1).p("AARgPIglAIIAEAXIAlgIg");
	this.shape_278.setTransform(-392.5086,40.3663,0.7281,0.7281);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAJg");
	this.shape_279.setTransform(-392.5086,40.3663,0.7281,0.7281);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAHIAEAWg");
	this.shape_280.setTransform(-397.4595,41.4038,0.7281,0.7281);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_281.setTransform(-397.4595,41.4038,0.7281,0.7281);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAHIAFAWg");
	this.shape_282.setTransform(-377.6377,37.2902,0.7281,0.7281);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_283.setTransform(-377.6377,37.2902,0.7281,0.7281);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAFAVg");
	this.shape_284.setTransform(-382.5886,38.3095,0.7281,0.7281);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AgVgGIAlgIIAGAVIglAIg");
	this.shape_285.setTransform(-382.5886,38.3095,0.7281,0.7281);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_286.setTransform(-238.776,8.5313,0.7281,0.7281);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_287.setTransform(-238.776,8.5313,0.7281,0.7281);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#373535").ss(2,1,1).p("AAQgOIgkAIIAFAVIAkgHg");
	this.shape_288.setTransform(-243.7087,9.5506,0.7281,0.7281);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_289.setTransform(-243.7087,9.5506,0.7281,0.7281);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAHIAFAXg");
	this.shape_290.setTransform(-248.6596,10.5881,0.7281,0.7281);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AgUgHIAkgIIAGAXIglAIg");
	this.shape_291.setTransform(-248.6596,10.5881,0.7281,0.7281);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAWg");
	this.shape_292.setTransform(-223.8869,5.4552,0.7281,0.7281);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_293.setTransform(-223.8869,5.4552,0.7281,0.7281);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_294.setTransform(-228.8378,6.4927,0.7281,0.7281);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_295.setTransform(-228.8378,6.4927,0.7281,0.7281);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_296.setTransform(-233.7887,7.512,0.7281,0.7281);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_297.setTransform(-233.7887,7.512,0.7281,0.7281);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_298.setTransform(-208.9978,2.3791,0.7281,0.7281);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_299.setTransform(-208.9978,2.3791,0.7281,0.7281);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#373535").ss(2,1,1).p("AgQAPIAlgIIgEgVIglAIg");
	this.shape_300.setTransform(-213.9487,3.3984,0.7281,0.7281);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_301.setTransform(-213.9487,3.3984,0.7281,0.7281);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_302.setTransform(-218.8996,4.4177,0.7281,0.7281);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_303.setTransform(-218.8996,4.4177,0.7281,0.7281);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAFAVg");
	this.shape_304.setTransform(-194.1269,-0.7152,0.7281,0.7281);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_305.setTransform(-194.1269,-0.7152,0.7281,0.7281);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAXg");
	this.shape_306.setTransform(-199.0596,0.3223,0.7281,0.7281);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#373535").s().p("AgUgHIAlgIIAEAWIglAJg");
	this.shape_307.setTransform(-199.0596,0.3223,0.7281,0.7281);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIgkAIIAEAXg");
	this.shape_308.setTransform(-204.0105,1.3416,0.7281,0.7281);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#373535").s().p("AgUgGIAkgJIAFAXIglAHg");
	this.shape_309.setTransform(-204.0105,1.3416,0.7281,0.7281);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_310.setTransform(-179.256,-3.7732,0.7281,0.7281);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_311.setTransform(-179.256,-3.7732,0.7281,0.7281);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#373535").ss(2,1,1).p("AAQgOIgkAHIAFAWIAkgIg");
	this.shape_312.setTransform(-184.1887,-2.7539,0.7281,0.7281);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIgmAIg");
	this.shape_313.setTransform(-184.1887,-2.7539,0.7281,0.7281);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAFAVg");
	this.shape_314.setTransform(-189.1396,-1.7346,0.7281,0.7281);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AgVgGIAmgIIAEAVIgkAIg");
	this.shape_315.setTransform(-189.1396,-1.7346,0.7281,0.7281);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_316.setTransform(-164.3669,-6.8675,0.7281,0.7281);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_317.setTransform(-164.3669,-6.8675,0.7281,0.7281);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgWIglAIIAFAVg");
	this.shape_318.setTransform(-169.2996,-5.8482,0.7281,0.7281);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_319.setTransform(-169.2996,-5.8482,0.7281,0.7281);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAFAVg");
	this.shape_320.setTransform(-174.2687,-4.8289,0.7281,0.7281);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_321.setTransform(-174.2687,-4.8289,0.7281,0.7281);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAXg");
	this.shape_322.setTransform(-149.4778,-9.9436,0.7281,0.7281);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_323.setTransform(-149.4778,-9.9436,0.7281,0.7281);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgHIgEgXg");
	this.shape_324.setTransform(-154.4287,-8.9243,0.7281,0.7281);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_325.setTransform(-154.4287,-8.9243,0.7281,0.7281);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_326.setTransform(-159.3796,-7.8868,0.7281,0.7281);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_327.setTransform(-159.3796,-7.8868,0.7281,0.7281);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIgmAHIAFAWg");
	this.shape_328.setTransform(-134.6069,-13.0197,0.7281,0.7281);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIglAIg");
	this.shape_329.setTransform(-134.6069,-13.0197,0.7281,0.7281);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_330.setTransform(-139.5396,-12.0004,0.7281,0.7281);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_331.setTransform(-139.5396,-12.0004,0.7281,0.7281);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_332.setTransform(-144.4905,-10.9811,0.7281,0.7281);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_333.setTransform(-144.4905,-10.9811,0.7281,0.7281);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAFAVg");
	this.shape_334.setTransform(-119.736,-16.114,0.7281,0.7281);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_335.setTransform(-119.736,-16.114,0.7281,0.7281);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAEAVg");
	this.shape_336.setTransform(-124.6505,-15.0947,0.7281,0.7281);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_337.setTransform(-124.6505,-15.0947,0.7281,0.7281);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgXIglAIIAFAXg");
	this.shape_338.setTransform(-129.6196,-14.0572,0.7281,0.7281);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#373535").s().p("AgUgGIAlgJIAEAXIglAHg");
	this.shape_339.setTransform(-129.6196,-14.0572,0.7281,0.7281);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_340.setTransform(-104.8469,-19.1719,0.7281,0.7281);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_341.setTransform(-104.8469,-19.1719,0.7281,0.7281);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIglAHIAFAWg");
	this.shape_342.setTransform(-109.7796,-18.1526,0.7281,0.7281);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIglAIg");
	this.shape_343.setTransform(-109.7796,-18.1526,0.7281,0.7281);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAIIAFAVg");
	this.shape_344.setTransform(-114.7305,-17.1333,0.7281,0.7281);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_345.setTransform(-114.7305,-17.1333,0.7281,0.7281);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_346.setTransform(-89.9578,-22.2662,0.7281,0.7281);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_347.setTransform(-89.9578,-22.2662,0.7281,0.7281);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_348.setTransform(-94.9087,-21.2469,0.7281,0.7281);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_349.setTransform(-94.9087,-21.2469,0.7281,0.7281);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_350.setTransform(-99.8596,-20.2276,0.7281,0.7281);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_351.setTransform(-99.8596,-20.2276,0.7281,0.7281);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgXIgmAIIAFAXg");
	this.shape_352.setTransform(-75.0869,-25.3423,0.7281,0.7281);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_353.setTransform(-75.0869,-25.3423,0.7281,0.7281);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAXg");
	this.shape_354.setTransform(-80.0196,-24.323,0.7281,0.7281);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_355.setTransform(-80.0196,-24.323,0.7281,0.7281);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_356.setTransform(-84.9705,-23.2855,0.7281,0.7281);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_357.setTransform(-84.9705,-23.2855,0.7281,0.7281);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIglAHIAFAWg");
	this.shape_358.setTransform(-60.1978,-28.4184,0.7281,0.7281);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#373535").s().p("AgVgHIAlgHIAGAVIglAIg");
	this.shape_359.setTransform(-60.1978,-28.4184,0.7281,0.7281);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAHIAEAWg");
	this.shape_360.setTransform(-65.1305,-27.3991,0.7281,0.7281);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_361.setTransform(-65.1305,-27.3991,0.7281,0.7281);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_362.setTransform(-70.0814,-26.3798,0.7281,0.7281);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_363.setTransform(-70.0814,-26.3798,0.7281,0.7281);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_364.setTransform(-45.3269,-31.5127,0.7281,0.7281);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_365.setTransform(-45.3269,-31.5127,0.7281,0.7281);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgWIglAIIAFAVg");
	this.shape_366.setTransform(-50.2596,-30.4934,0.7281,0.7281);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#373535").s().p("AgUgGIAlgIIAFAWIgmAHg");
	this.shape_367.setTransform(-50.2596,-30.4934,0.7281,0.7281);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIglAHIAFAXg");
	this.shape_368.setTransform(-55.2105,-29.4559,0.7281,0.7281);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#373535").s().p("AgVgGIAlgIIAFAWIgkAHg");
	this.shape_369.setTransform(-55.2105,-29.4559,0.7281,0.7281);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAWg");
	this.shape_370.setTransform(-30.4378,-34.5889,0.7281,0.7281);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_371.setTransform(-30.4378,-34.5889,0.7281,0.7281);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_372.setTransform(-35.3887,-33.5513,0.7281,0.7281);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_373.setTransform(-35.3887,-33.5513,0.7281,0.7281);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_374.setTransform(-40.3396,-32.532,0.7281,0.7281);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_375.setTransform(-40.3396,-32.532,0.7281,0.7281);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIgkAIIAEAVg");
	this.shape_376.setTransform(-15.5487,-37.665,0.7281,0.7281);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_377.setTransform(-15.5487,-37.665,0.7281,0.7281);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_378.setTransform(-20.4996,-36.6457,0.7281,0.7281);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_379.setTransform(-20.4996,-36.6457,0.7281,0.7281);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_380.setTransform(-25.4505,-35.6264,0.7281,0.7281);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_381.setTransform(-25.4505,-35.6264,0.7281,0.7281);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#373535").ss(2,1,1).p("AAWAIIgFgWIglAIIAFAVg");
	this.shape_382.setTransform(-0.6779,-40.7593,0.7281,0.7281);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#373535").s().p("AgVgGIAmgIIAEAWIglAHg");
	this.shape_383.setTransform(-0.6779,-40.7593,0.7281,0.7281);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAEAVg");
	this.shape_384.setTransform(-5.6105,-39.74,0.7281,0.7281);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_385.setTransform(-5.6105,-39.74,0.7281,0.7281);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIgkAIIAEAXg");
	this.shape_386.setTransform(-10.5614,-38.7025,0.7281,0.7281);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_387.setTransform(-10.5614,-38.7025,0.7281,0.7281);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_388.setTransform(14.193,-43.8172,0.7281,0.7281);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_389.setTransform(14.193,-43.8172,0.7281,0.7281);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIglAHIAFAWg");
	this.shape_390.setTransform(9.2603,-42.7979,0.7281,0.7281);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#373535").s().p("AgVgHIAlgHIAGAVIglAIg");
	this.shape_391.setTransform(9.2603,-42.7979,0.7281,0.7281);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAIIAFAVg");
	this.shape_392.setTransform(4.3094,-41.7786,0.7281,0.7281);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_393.setTransform(4.3094,-41.7786,0.7281,0.7281);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_394.setTransform(29.0821,-46.9115,0.7281,0.7281);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_395.setTransform(29.0821,-46.9115,0.7281,0.7281);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAFAVg");
	this.shape_396.setTransform(24.1312,-45.8922,0.7281,0.7281);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_397.setTransform(24.1312,-45.8922,0.7281,0.7281);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_398.setTransform(19.1803,-44.8729,0.7281,0.7281);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_399.setTransform(19.1803,-44.8729,0.7281,0.7281);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIgkAIIAEAXg");
	this.shape_400.setTransform(43.9712,-49.9876,0.7281,0.7281);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_401.setTransform(43.9712,-49.9876,0.7281,0.7281);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgXIglAIIAEAWg");
	this.shape_402.setTransform(39.0203,-48.9683,0.7281,0.7281);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_403.setTransform(39.0203,-48.9683,0.7281,0.7281);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_404.setTransform(34.0694,-47.9308,0.7281,0.7281);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_405.setTransform(34.0694,-47.9308,0.7281,0.7281);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#373535").ss(2,1,1).p("AAWAHIgFgVIglAHIAFAWg");
	this.shape_406.setTransform(58.8421,-53.0637,0.7281,0.7281);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_407.setTransform(58.8421,-53.0637,0.7281,0.7281);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_408.setTransform(53.9094,-52.0444,0.7281,0.7281);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_409.setTransform(53.9094,-52.0444,0.7281,0.7281);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_410.setTransform(48.9585,-51.0251,0.7281,0.7281);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_411.setTransform(48.9585,-51.0251,0.7281,0.7281);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgEgWIglAIIAFAVg");
	this.shape_412.setTransform(73.713,-56.158,0.7281,0.7281);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_413.setTransform(73.713,-56.158,0.7281,0.7281);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAEAVg");
	this.shape_414.setTransform(68.7985,-55.1387,0.7281,0.7281);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_415.setTransform(68.7985,-55.1387,0.7281,0.7281);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgXIglAIIAFAXg");
	this.shape_416.setTransform(63.8294,-54.1012,0.7281,0.7281);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_417.setTransform(63.8294,-54.1012,0.7281,0.7281);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAEAWg");
	this.shape_418.setTransform(88.6021,-59.2159,0.7281,0.7281);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_419.setTransform(88.6021,-59.2159,0.7281,0.7281);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgFgVIglAHIAFAWg");
	this.shape_420.setTransform(83.6694,-58.1966,0.7281,0.7281);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_421.setTransform(83.6694,-58.1966,0.7281,0.7281);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAHIAFAWg");
	this.shape_422.setTransform(78.7003,-57.1773,0.7281,0.7281);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_423.setTransform(78.7003,-57.1773,0.7281,0.7281);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#373535").ss(2,1,1).p("AgRAJIARAOQAOgTAEgWIgWgEQgCAQgLAPg");
	this.shape_424.setTransform(97.8122,-51.3345,0.7281,0.7281);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#373535").s().p("AgRAJQALgPACgQIAWAEQgEAWgOATg");
	this.shape_425.setTransform(97.8122,-51.3345,0.7281,0.7281);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#373535").ss(2,1,1).p("AgDAXIAWgFQgGgXgOgRIgRAPQALAMAEASg");
	this.shape_426.setTransform(97.6848,-56.6495,0.7281,0.7281);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#373535").s().p("AgSgGIASgQQANARAGAXIgWAFQgEgSgLgLg");
	this.shape_427.setTransform(97.6848,-56.6495,0.7281,0.7281);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#373535").ss(2,1,1).p("AAMAQIAKgUQgUgLgXAAIAAAXQARgBAQAJg");
	this.shape_428.setTransform(93.8806,-59.58,0.7281,0.7281);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#373535").s().p("AgVAIIAAgXQAXAAAUALIgKAUQgQgJgRABg");
	this.shape_429.setTransform(93.8806,-59.58,0.7281,0.7281);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_430.setTransform(84.1609,-45.965,0.7281,0.7281);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_431.setTransform(84.1609,-45.965,0.7281,0.7281);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_432.setTransform(89.1118,-46.9843,0.7281,0.7281);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_433.setTransform(89.1118,-46.9843,0.7281,0.7281);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#373535").ss(2,1,1).p("AAXADIgMgTQgIAFgZAGIAFAWIATgFg");
	this.shape_434.setTransform(94.1719,-48.1128,0.7281,0.7281);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#373535").s().p("AgWgFQAZgGAIgFIAMATIgVAJIgTAFg");
	this.shape_435.setTransform(94.1719,-48.1128,0.7281,0.7281);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgEgVg");
	this.shape_436.setTransform(69.2718,-42.8707,0.7281,0.7281);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIgkAIg");
	this.shape_437.setTransform(69.2718,-42.8707,0.7281,0.7281);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#373535").ss(2,1,1).p("AAVAHIgEgVIglAIIAEAVg");
	this.shape_438.setTransform(74.2227,-43.89,0.7281,0.7281);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_439.setTransform(74.2227,-43.89,0.7281,0.7281);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#373535").ss(2,1,1).p("AgQAPIAlgIIgEgVIglAHg");
	this.shape_440.setTransform(79.1736,-44.9093,0.7281,0.7281);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_441.setTransform(79.1736,-44.9093,0.7281,0.7281);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAlgIIgFgXg");
	this.shape_442.setTransform(54.4009,-39.7946,0.7281,0.7281);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#373535").s().p("AgVgHIAlgIIAGAXIgmAIg");
	this.shape_443.setTransform(54.4009,-39.7946,0.7281,0.7281);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgXg");
	this.shape_444.setTransform(59.3336,-40.8139,0.7281,0.7281);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_445.setTransform(59.3336,-40.8139,0.7281,0.7281);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_446.setTransform(64.2845,-41.8514,0.7281,0.7281);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_447.setTransform(64.2845,-41.8514,0.7281,0.7281);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_448.setTransform(39.53,-36.7185,0.7281,0.7281);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_449.setTransform(39.53,-36.7185,0.7281,0.7281);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_450.setTransform(44.4445,-37.7378,0.7281,0.7281);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_451.setTransform(44.4445,-37.7378,0.7281,0.7281);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAmgIIgFgVg");
	this.shape_452.setTransform(49.4136,-38.7571,0.7281,0.7281);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_453.setTransform(49.4136,-38.7571,0.7281,0.7281);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_454.setTransform(24.6409,-33.6242,0.7281,0.7281);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_455.setTransform(24.6409,-33.6242,0.7281,0.7281);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAmgIIgFgVg");
	this.shape_456.setTransform(29.5736,-34.6435,0.7281,0.7281);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#373535").s().p("AgVgHIAlgHIAGAVIglAIg");
	this.shape_457.setTransform(29.5736,-34.6435,0.7281,0.7281);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgHIgFgXg");
	this.shape_458.setTransform(34.5427,-35.681,0.7281,0.7281);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#373535").s().p("AgUgGIAkgJIAFAXIglAHg");
	this.shape_459.setTransform(34.5427,-35.681,0.7281,0.7281);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgWg");
	this.shape_460.setTransform(9.7518,-30.548,0.7281,0.7281);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_461.setTransform(9.7518,-30.548,0.7281,0.7281);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_462.setTransform(14.7027,-31.5855,0.7281,0.7281);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_463.setTransform(14.7027,-31.5855,0.7281,0.7281);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_464.setTransform(19.6536,-32.6049,0.7281,0.7281);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_465.setTransform(19.6536,-32.6049,0.7281,0.7281);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAlgIIgFgVg");
	this.shape_466.setTransform(-5.1191,-27.4719,0.7281,0.7281);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_467.setTransform(-5.1191,-27.4719,0.7281,0.7281);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_468.setTransform(-0.1864,-28.4912,0.7281,0.7281);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_469.setTransform(-0.1864,-28.4912,0.7281,0.7281);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_470.setTransform(4.7645,-29.5105,0.7281,0.7281);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_471.setTransform(4.7645,-29.5105,0.7281,0.7281);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_472.setTransform(-19.99,-24.3776,0.7281,0.7281);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_473.setTransform(-19.99,-24.3776,0.7281,0.7281);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgEgVg");
	this.shape_474.setTransform(-15.0755,-25.3969,0.7281,0.7281);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_475.setTransform(-15.0755,-25.3969,0.7281,0.7281);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAXIAmgIIgFgXg");
	this.shape_476.setTransform(-10.1064,-26.4344,0.7281,0.7281);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#373535").s().p("AgVgHIAmgIIAEAXIglAIg");
	this.shape_477.setTransform(-10.1064,-26.4344,0.7281,0.7281);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_478.setTransform(-34.8791,-21.3197,0.7281,0.7281);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_479.setTransform(-34.8791,-21.3197,0.7281,0.7281);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAmgHIgFgWg");
	this.shape_480.setTransform(-29.9464,-22.339,0.7281,0.7281);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#373535").s().p("AgUgGIAlgIIAFAWIgmAHg");
	this.shape_481.setTransform(-29.9464,-22.339,0.7281,0.7281);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAlgIIgFgVg");
	this.shape_482.setTransform(-24.9955,-23.3583,0.7281,0.7281);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#373535").s().p("AgVgGIAlgIIAFAVIgkAIg");
	this.shape_483.setTransform(-24.9955,-23.3583,0.7281,0.7281);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_484.setTransform(-49.7682,-18.2254,0.7281,0.7281);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_485.setTransform(-49.7682,-18.2254,0.7281,0.7281);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_486.setTransform(-44.8173,-19.2447,0.7281,0.7281);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_487.setTransform(-44.8173,-19.2447,0.7281,0.7281);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_488.setTransform(-39.8664,-20.264,0.7281,0.7281);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_489.setTransform(-39.8664,-20.264,0.7281,0.7281);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAlgIIgFgXg");
	this.shape_490.setTransform(-64.6391,-15.1493,0.7281,0.7281);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#373535").s().p("AgVgHIAmgIIAEAXIgkAIg");
	this.shape_491.setTransform(-64.6391,-15.1493,0.7281,0.7281);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgWg");
	this.shape_492.setTransform(-59.7064,-16.1686,0.7281,0.7281);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_493.setTransform(-59.7064,-16.1686,0.7281,0.7281);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_494.setTransform(-54.7555,-17.2061,0.7281,0.7281);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_495.setTransform(-54.7555,-17.2061,0.7281,0.7281);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAlgHIgFgWg");
	this.shape_496.setTransform(-79.5282,-12.0732,0.7281,0.7281);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_497.setTransform(-79.5282,-12.0732,0.7281,0.7281);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_498.setTransform(-74.5955,-13.0925,0.7281,0.7281);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_499.setTransform(-74.5955,-13.0925,0.7281,0.7281);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgEgVg");
	this.shape_500.setTransform(-69.6446,-14.1118,0.7281,0.7281);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIgkAIg");
	this.shape_501.setTransform(-69.6446,-14.1118,0.7281,0.7281);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_502.setTransform(-94.3991,-8.9789,0.7281,0.7281);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_503.setTransform(-94.3991,-8.9789,0.7281,0.7281);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAmgIIgFgVg");
	this.shape_504.setTransform(-89.4664,-9.9982,0.7281,0.7281);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIglAIg");
	this.shape_505.setTransform(-89.4664,-9.9982,0.7281,0.7281);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAXIAlgIIgFgXg");
	this.shape_506.setTransform(-84.5155,-11.0357,0.7281,0.7281);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#373535").s().p("AgUgHIAkgIIAGAXIglAIg");
	this.shape_507.setTransform(-84.5155,-11.0357,0.7281,0.7281);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_508.setTransform(-109.2882,-5.921,0.7281,0.7281);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_509.setTransform(-109.2882,-5.921,0.7281,0.7281);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_510.setTransform(-104.3373,-6.9403,0.7281,0.7281);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_511.setTransform(-104.3373,-6.9403,0.7281,0.7281);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#373535").ss(2,1,1).p("AAVAIIgFgWIgkAIIAEAVg");
	this.shape_512.setTransform(-99.3864,-7.9596,0.7281,0.7281);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_513.setTransform(-99.3864,-7.9596,0.7281,0.7281);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgEgVg");
	this.shape_514.setTransform(-124.1772,-2.8267,0.7281,0.7281);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIgkAIg");
	this.shape_515.setTransform(-124.1772,-2.8267,0.7281,0.7281);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_516.setTransform(-119.2264,-3.846,0.7281,0.7281);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_517.setTransform(-119.2264,-3.846,0.7281,0.7281);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_518.setTransform(-114.2755,-4.8653,0.7281,0.7281);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_519.setTransform(-114.2755,-4.8653,0.7281,0.7281);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAlgIIgFgVg");
	this.shape_520.setTransform(-139.0481,0.2676,0.7281,0.7281);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIgmAIg");
	this.shape_521.setTransform(-139.0481,0.2676,0.7281,0.7281);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgXg");
	this.shape_522.setTransform(-134.1154,-0.7699,0.7281,0.7281);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_523.setTransform(-134.1154,-0.7699,0.7281,0.7281);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_524.setTransform(-129.1646,-1.8074,0.7281,0.7281);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_525.setTransform(-129.1646,-1.8074,0.7281,0.7281);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_526.setTransform(-153.919,3.3256,0.7281,0.7281);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_527.setTransform(-153.919,3.3256,0.7281,0.7281);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAmgHIgFgWg");
	this.shape_528.setTransform(-148.9863,2.3063,0.7281,0.7281);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_529.setTransform(-148.9863,2.3063,0.7281,0.7281);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#373535").ss(2,1,1).p("AgVgGIAFAVIAlgIIgFgVg");
	this.shape_530.setTransform(-144.0354,1.287,0.7281,0.7281);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_531.setTransform(-144.0354,1.287,0.7281,0.7281);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_532.setTransform(-168.8081,6.4199,0.7281,0.7281);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_533.setTransform(-168.8081,6.4199,0.7281,0.7281);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAlgIIgFgVg");
	this.shape_534.setTransform(-163.8754,5.4006,0.7281,0.7281);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIgmAIg");
	this.shape_535.setTransform(-163.8754,5.4006,0.7281,0.7281);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_536.setTransform(-158.9063,4.3813,0.7281,0.7281);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_537.setTransform(-158.9063,4.3813,0.7281,0.7281);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#373535").ss(2,1,1).p("AARgOIglAHIAEAXIAlgIg");
	this.shape_538.setTransform(-183.6972,9.496,0.7281,0.7281);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#373535").s().p("AgUgHIAlgIIAEAWIglAJg");
	this.shape_539.setTransform(-183.6972,9.496,0.7281,0.7281);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_540.setTransform(-178.7463,8.4585,0.7281,0.7281);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_541.setTransform(-178.7463,8.4585,0.7281,0.7281);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_542.setTransform(-173.7954,7.4392,0.7281,0.7281);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_543.setTransform(-173.7954,7.4392,0.7281,0.7281);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgFgVg");
	this.shape_544.setTransform(-198.5681,12.5721,0.7281,0.7281);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#373535").s().p("AgVgGIAmgIIAEAVIgkAIg");
	this.shape_545.setTransform(-198.5681,12.5721,0.7281,0.7281);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_546.setTransform(-193.6354,11.5528,0.7281,0.7281);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_547.setTransform(-193.6354,11.5528,0.7281,0.7281);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_548.setTransform(-188.6845,10.5335,0.7281,0.7281);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_549.setTransform(-188.6845,10.5335,0.7281,0.7281);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#373535").ss(2,1,1).p("AgQAPIAlgIIgFgVIgkAHg");
	this.shape_550.setTransform(-213.439,15.6664,0.7281,0.7281);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_551.setTransform(-213.439,15.6664,0.7281,0.7281);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgEgVg");
	this.shape_552.setTransform(-208.5245,14.6471,0.7281,0.7281);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_553.setTransform(-208.5245,14.6471,0.7281,0.7281);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAlgIIgFgXg");
	this.shape_554.setTransform(-203.5554,13.6096,0.7281,0.7281);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#373535").s().p("AgVgHIAmgIIAEAXIgkAIg");
	this.shape_555.setTransform(-203.5554,13.6096,0.7281,0.7281);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_556.setTransform(-228.3281,18.7243,0.7281,0.7281);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_557.setTransform(-228.3281,18.7243,0.7281,0.7281);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAlgHIgFgWg");
	this.shape_558.setTransform(-223.3954,17.705,0.7281,0.7281);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_559.setTransform(-223.3954,17.705,0.7281,0.7281);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgFgVg");
	this.shape_560.setTransform(-218.4445,16.6857,0.7281,0.7281);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#373535").s().p("AgVgGIAlgIIAGAVIglAIg");
	this.shape_561.setTransform(-218.4445,16.6857,0.7281,0.7281);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#373535").ss(2,1,1).p("AARgOIglAIIAEAVIAlgIg");
	this.shape_562.setTransform(-243.2172,21.8186,0.7281,0.7281);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_563.setTransform(-243.2172,21.8186,0.7281,0.7281);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_564.setTransform(-238.2663,20.7993,0.7281,0.7281);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_565.setTransform(-238.2663,20.7993,0.7281,0.7281);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_566.setTransform(-233.3154,19.78,0.7281,0.7281);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_567.setTransform(-233.3154,19.78,0.7281,0.7281);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAkgIIgEgWg");
	this.shape_568.setTransform(-377.1463,49.54,0.7281,0.7281);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_569.setTransform(-377.1463,49.54,0.7281,0.7281);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgXg");
	this.shape_570.setTransform(-372.1954,48.5207,0.7281,0.7281);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#373535").s().p("AgUgGIAlgJIAEAXIglAHg");
	this.shape_571.setTransform(-372.1954,48.5207,0.7281,0.7281);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_572.setTransform(-367.2445,47.4832,0.7281,0.7281);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_573.setTransform(-367.2445,47.4832,0.7281,0.7281);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#373535").ss(2,1,1).p("AAQgOIglAIIAFAVIAlgIg");
	this.shape_574.setTransform(-392.0171,52.6161,0.7281,0.7281);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#373535").s().p("AgVgGIAlgIIAFAVIgkAIg");
	this.shape_575.setTransform(-392.0171,52.6161,0.7281,0.7281);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_576.setTransform(-387.0845,51.5968,0.7281,0.7281);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_577.setTransform(-387.0845,51.5968,0.7281,0.7281);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_578.setTransform(-382.1336,50.5775,0.7281,0.7281);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_579.setTransform(-382.1336,50.5775,0.7281,0.7281);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_580.setTransform(-406.888,55.7104,0.7281,0.7281);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_581.setTransform(-406.888,55.7104,0.7281,0.7281);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgEgVg");
	this.shape_582.setTransform(-401.9735,54.6911,0.7281,0.7281);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIgkAIg");
	this.shape_583.setTransform(-401.9735,54.6911,0.7281,0.7281);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAkgIIgFgXg");
	this.shape_584.setTransform(-397.0044,53.6536,0.7281,0.7281);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#373535").s().p("AgVgHIAlgIIAGAXIglAIg");
	this.shape_585.setTransform(-397.0044,53.6536,0.7281,0.7281);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#373535").ss(2,1,1).p("AgQAPIAlgHIgEgWIglAIg");
	this.shape_586.setTransform(-421.7771,58.7683,0.7281,0.7281);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_587.setTransform(-421.7771,58.7683,0.7281,0.7281);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgFgWg");
	this.shape_588.setTransform(-416.8444,57.749,0.7281,0.7281);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#373535").s().p("AgVgGIAmgIIAEAWIgkAHg");
	this.shape_589.setTransform(-416.8444,57.749,0.7281,0.7281);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgFgVg");
	this.shape_590.setTransform(-411.8754,56.7297,0.7281,0.7281);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#373535").s().p("AgUgGIAkgIIAFAVIglAIg");
	this.shape_591.setTransform(-411.8754,56.7297,0.7281,0.7281);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_592.setTransform(-436.6662,61.8626,0.7281,0.7281);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_593.setTransform(-436.6662,61.8626,0.7281,0.7281);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_594.setTransform(-431.7153,60.8433,0.7281,0.7281);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_595.setTransform(-431.7153,60.8433,0.7281,0.7281);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_596.setTransform(-426.7644,59.824,0.7281,0.7281);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_597.setTransform(-426.7644,59.824,0.7281,0.7281);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#373535").ss(2,1,1).p("AAQgPIglAIIAFAXIAlgIg");
	this.shape_598.setTransform(-451.5371,64.9387,0.7281,0.7281);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIgmAJg");
	this.shape_599.setTransform(-451.5371,64.9387,0.7281,0.7281);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgWg");
	this.shape_600.setTransform(-446.6044,63.9194,0.7281,0.7281);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_601.setTransform(-446.6044,63.9194,0.7281,0.7281);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_602.setTransform(-441.6535,62.8819,0.7281,0.7281);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_603.setTransform(-441.6535,62.8819,0.7281,0.7281);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgFgWg");
	this.shape_604.setTransform(-466.4262,68.0149,0.7281,0.7281);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_605.setTransform(-466.4262,68.0149,0.7281,0.7281);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_606.setTransform(-461.4935,66.9956,0.7281,0.7281);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_607.setTransform(-461.4935,66.9956,0.7281,0.7281);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgFgVg");
	this.shape_608.setTransform(-456.5244,65.9762,0.7281,0.7281);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#373535").s().p("AgUgGIAkgIIAGAVIgmAIg");
	this.shape_609.setTransform(-456.5244,65.9762,0.7281,0.7281);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_610.setTransform(-481.2971,71.1092,0.7281,0.7281);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_611.setTransform(-481.2971,71.1092,0.7281,0.7281);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgFgVg");
	this.shape_612.setTransform(-476.3644,70.0899,0.7281,0.7281);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIglAIg");
	this.shape_613.setTransform(-476.3644,70.0899,0.7281,0.7281);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAkgIIgFgXg");
	this.shape_614.setTransform(-471.4135,69.0524,0.7281,0.7281);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_615.setTransform(-471.4135,69.0524,0.7281,0.7281);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgXg");
	this.shape_616.setTransform(-496.1862,74.1853,0.7281,0.7281);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_617.setTransform(-496.1862,74.1853,0.7281,0.7281);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_618.setTransform(-491.2353,73.1478,0.7281,0.7281);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_619.setTransform(-491.2353,73.1478,0.7281,0.7281);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_620.setTransform(-486.2844,72.1285,0.7281,0.7281);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_621.setTransform(-486.2844,72.1285,0.7281,0.7281);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgEgVg");
	this.shape_622.setTransform(-511.0753,77.2614,0.7281,0.7281);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIgkAIg");
	this.shape_623.setTransform(-511.0753,77.2614,0.7281,0.7281);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_624.setTransform(-506.1244,76.2421,0.7281,0.7281);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_625.setTransform(-506.1244,76.2421,0.7281,0.7281);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_626.setTransform(-501.1735,75.2228,0.7281,0.7281);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_627.setTransform(-501.1735,75.2228,0.7281,0.7281);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgFgVg");
	this.shape_628.setTransform(-525.9462,80.3557,0.7281,0.7281);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIgkAIg");
	this.shape_629.setTransform(-525.9462,80.3557,0.7281,0.7281);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAXIAlgIIgEgWg");
	this.shape_630.setTransform(-521.0135,79.3182,0.7281,0.7281);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_631.setTransform(-521.0135,79.3182,0.7281,0.7281);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgEgWg");
	this.shape_632.setTransform(-516.0626,78.2989,0.7281,0.7281);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#373535").s().p("AgUgHIAlgIIAEAWIgkAJg");
	this.shape_633.setTransform(-516.0626,78.2989,0.7281,0.7281);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_634.setTransform(-540.8171,83.4136,0.7281,0.7281);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_635.setTransform(-540.8171,83.4136,0.7281,0.7281);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgFgWg");
	this.shape_636.setTransform(-535.8844,82.3943,0.7281,0.7281);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_637.setTransform(-535.8844,82.3943,0.7281,0.7281);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgIIgFgVg");
	this.shape_638.setTransform(-530.9335,81.375,0.7281,0.7281);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#373535").s().p("AgVgGIAlgIIAFAVIgkAIg");
	this.shape_639.setTransform(-530.9335,81.375,0.7281,0.7281);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_640.setTransform(-555.7062,86.5079,0.7281,0.7281);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_641.setTransform(-555.7062,86.5079,0.7281,0.7281);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_642.setTransform(-550.7553,85.4886,0.7281,0.7281);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_643.setTransform(-550.7553,85.4886,0.7281,0.7281);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_644.setTransform(-545.8044,84.4693,0.7281,0.7281);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_645.setTransform(-545.8044,84.4693,0.7281,0.7281);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAkgIIgEgWg");
	this.shape_646.setTransform(-570.5953,89.584,0.7281,0.7281);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIgkAIg");
	this.shape_647.setTransform(-570.5953,89.584,0.7281,0.7281);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgHIgEgWg");
	this.shape_648.setTransform(-565.6444,88.5647,0.7281,0.7281);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_649.setTransform(-565.6444,88.5647,0.7281,0.7281);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_650.setTransform(-560.6935,87.5272,0.7281,0.7281);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_651.setTransform(-560.6935,87.5272,0.7281,0.7281);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgFgWg");
	this.shape_652.setTransform(-585.4662,92.6601,0.7281,0.7281);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#373535").s().p("AgUgGIAkgIIAGAWIglAHg");
	this.shape_653.setTransform(-585.4662,92.6601,0.7281,0.7281);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_654.setTransform(-580.5335,91.6408,0.7281,0.7281);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_655.setTransform(-580.5335,91.6408,0.7281,0.7281);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_656.setTransform(-575.5826,90.6215,0.7281,0.7281);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_657.setTransform(-575.5826,90.6215,0.7281,0.7281);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgFgVg");
	this.shape_658.setTransform(-600.3371,95.7544,0.7281,0.7281);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#373535").s().p("AgUgHIAkgHIAFAVIglAIg");
	this.shape_659.setTransform(-600.3371,95.7544,0.7281,0.7281);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAlgIIgFgVg");
	this.shape_660.setTransform(-595.4044,94.7351,0.7281,0.7281);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#373535").s().p("AgVgHIAmgHIAEAVIgkAIg");
	this.shape_661.setTransform(-595.4044,94.7351,0.7281,0.7281);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAlgIIgFgWg");
	this.shape_662.setTransform(-590.4535,93.6976,0.7281,0.7281);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#373535").s().p("AgUgHIAkgIIAGAWIgmAJg");
	this.shape_663.setTransform(-590.4535,93.6976,0.7281,0.7281);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_664.setTransform(-615.2262,98.8123,0.7281,0.7281);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_665.setTransform(-615.2262,98.8123,0.7281,0.7281);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAlgHIgFgWg");
	this.shape_666.setTransform(-610.2935,97.793,0.7281,0.7281);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#373535").s().p("AgVgGIAlgIIAGAWIglAHg");
	this.shape_667.setTransform(-610.2935,97.793,0.7281,0.7281);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_668.setTransform(-605.3244,96.7737,0.7281,0.7281);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_669.setTransform(-605.3244,96.7737,0.7281,0.7281);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_670.setTransform(-630.1153,101.9067,0.7281,0.7281);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_671.setTransform(-630.1153,101.9067,0.7281,0.7281);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgIIgEgVg");
	this.shape_672.setTransform(-625.1644,100.8874,0.7281,0.7281);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_673.setTransform(-625.1644,100.8874,0.7281,0.7281);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_674.setTransform(-620.2135,99.8681,0.7281,0.7281);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_675.setTransform(-620.2135,99.8681,0.7281,0.7281);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAXIAkgIIgFgWg");
	this.shape_676.setTransform(-644.9862,104.9828,0.7281,0.7281);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_677.setTransform(-644.9862,104.9828,0.7281,0.7281);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgWg");
	this.shape_678.setTransform(-640.0535,103.9635,0.7281,0.7281);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#373535").s().p("AgUgHIAlgIIAEAXIglAIg");
	this.shape_679.setTransform(-640.0535,103.9635,0.7281,0.7281);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgEgWg");
	this.shape_680.setTransform(-635.1026,102.926,0.7281,0.7281);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIglAHg");
	this.shape_681.setTransform(-635.1026,102.926,0.7281,0.7281);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAEAVIAlgHIgFgWg");
	this.shape_682.setTransform(-659.857,108.0589,0.7281,0.7281);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#373535").s().p("AgUgGIAkgIIAFAWIglAHg");
	this.shape_683.setTransform(-659.857,108.0589,0.7281,0.7281);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAkgHIgEgWg");
	this.shape_684.setTransform(-654.9426,107.0396,0.7281,0.7281);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#373535").s().p("AgUgGIAlgIIAEAWIgkAHg");
	this.shape_685.setTransform(-654.9426,107.0396,0.7281,0.7281);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#373535").ss(2,1,1).p("AgUgGIAFAVIAlgIIgFgVg");
	this.shape_686.setTransform(-649.9735,106.0203,0.7281,0.7281);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#373535").s().p("AgUgGIAlgIIAEAVIglAIg");
	this.shape_687.setTransform(-649.9735,106.0203,0.7281,0.7281);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAEAWIAlgIIgEgVg");
	this.shape_688.setTransform(-674.7461,111.1532,0.7281,0.7281);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#373535").s().p("AgUgHIAlgHIAEAVIglAIg");
	this.shape_689.setTransform(-674.7461,111.1532,0.7281,0.7281);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#373535").ss(2,1,1).p("AgUgHIAFAWIAlgIIgFgVg");
	this.shape_690.setTransform(-669.8134,110.1339,0.7281,0.7281);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#373535").s().p("AgUgHIAkgHIAGAVIgmAIg");
	this.shape_691.setTransform(-669.8134,110.1339,0.7281,0.7281);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#373535").ss(2,1,1).p("AgVgHIAFAWIAlgHIgFgXg");
	this.shape_692.setTransform(-664.8626,109.0964,0.7281,0.7281);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#373535").s().p("AgVgHIAmgIIAEAXIgkAIg");
	this.shape_693.setTransform(-664.8626,109.0964,0.7281,0.7281);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#373535").ss(2,1,1).p("AABgUIgSAOQAKANADAOIAWgDQgDgUgOgSg");
	this.shape_694.setTransform(76.3887,104.9646,0.7281,0.7281);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#373535").s().p("AgRgGIASgOQAOASADAUIgXADQgBgOgLgNg");
	this.shape_695.setTransform(76.3887,104.9646,0.7281,0.7281);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#373535").ss(2,1,1).p("AASgPIgVgFQgEAQgKAKIARAPQAOgQAEgUg");
	this.shape_696.setTransform(76.2249,109.8609,0.7281,0.7281);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#373535").s().p("AgRAHQAKgLAEgRIAVAGQgEAUgOAQg");
	this.shape_697.setTransform(76.2249,109.8609,0.7281,0.7281);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#373535").ss(2,1,1).p("AAVAGIgLgUQgNAHgQAAIgBAWQAUABAVgKg");
	this.shape_698.setTransform(72.7301,112.5374,0.7281,0.7281);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#373535").s().p("AgUAPIABgWQAQAAANgHIALAUQgUAJgTAAIgCAAg");
	this.shape_699.setTransform(72.7301,112.5374,0.7281,0.7281);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAHIAEgWg");
	this.shape_700.setTransform(63.0832,99.8134,0.7281,0.7281);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_701.setTransform(63.0832,99.8134,0.7281,0.7281);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAWIAkAIIAFgWg");
	this.shape_702.setTransform(68.034,100.8692,0.7281,0.7281);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_703.setTransform(68.034,100.8692,0.7281,0.7281);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#373535").ss(2,1,1).p("AgQgQIgFAWQAWAFAJAFIAMgTIgJgFIgKgDg");
	this.shape_704.setTransform(73.0031,101.9977,0.7281,0.7281);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#373535").s().p("AgVAGIAFgWIATAFIAKAEIAJAEIgMAUQgJgGgWgFg");
	this.shape_705.setTransform(73.0031,101.9977,0.7281,0.7281);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAkAIIAFgWg");
	this.shape_706.setTransform(48.2305,96.6463,0.7281,0.7281);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#373535").s().p("AgUAHIAEgWIAlAJIgFAWg");
	this.shape_707.setTransform(48.2305,96.6463,0.7281,0.7281);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAWIAlAIIAFgXg");
	this.shape_708.setTransform(53.1632,97.702,0.7281,0.7281);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#373535").s().p("AgVAHIAGgVIAlAHIgGAWg");
	this.shape_709.setTransform(53.1632,97.702,0.7281,0.7281);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAlAHIAFgWg");
	this.shape_710.setTransform(58.1141,98.7577,0.7281,0.7281);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_711.setTransform(58.1141,98.7577,0.7281,0.7281);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_712.setTransform(33.3596,93.4974,0.7281,0.7281);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_713.setTransform(33.3596,93.4974,0.7281,0.7281);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAHIAEgVg");
	this.shape_714.setTransform(38.2923,94.5349,0.7281,0.7281);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#373535").s().p("AgUAIIAFgXIAkAJIgEAWg");
	this.shape_715.setTransform(38.2923,94.5349,0.7281,0.7281);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAWIAlAIIAEgWg");
	this.shape_716.setTransform(43.2432,95.5906,0.7281,0.7281);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_717.setTransform(43.2432,95.5906,0.7281,0.7281);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_718.setTransform(18.5069,90.3303,0.7281,0.7281);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgFAVg");
	this.shape_719.setTransform(18.5069,90.3303,0.7281,0.7281);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_720.setTransform(23.4396,91.386,0.7281,0.7281);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_721.setTransform(23.4396,91.386,0.7281,0.7281);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_722.setTransform(28.3905,92.4417,0.7281,0.7281);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_723.setTransform(28.3905,92.4417,0.7281,0.7281);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAJIAEgWg");
	this.shape_724.setTransform(3.636,87.1814,0.7281,0.7281);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#373535").s().p("AgUAHIAEgWIAlAJIgEAVg");
	this.shape_725.setTransform(3.636,87.1814,0.7281,0.7281);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_726.setTransform(8.5687,88.2189,0.7281,0.7281);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_727.setTransform(8.5687,88.2189,0.7281,0.7281);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_728.setTransform(13.5196,89.2746,0.7281,0.7281);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_729.setTransform(13.5196,89.2746,0.7281,0.7281);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAlAHIAFgWg");
	this.shape_730.setTransform(-11.2349,84.0143,0.7281,0.7281);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgFAVg");
	this.shape_731.setTransform(-11.2349,84.0143,0.7281,0.7281);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAWIAlAIIAEgWg");
	this.shape_732.setTransform(-6.3022,85.07,0.7281,0.7281);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_733.setTransform(-6.3022,85.07,0.7281,0.7281);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_734.setTransform(-1.3513,86.1075,0.7281,0.7281);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_735.setTransform(-1.3513,86.1075,0.7281,0.7281);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAWIAlAIIAFgWg");
	this.shape_736.setTransform(-26.0876,80.8471,0.7281,0.7281);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_737.setTransform(-26.0876,80.8471,0.7281,0.7281);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAkAIIAFgWg");
	this.shape_738.setTransform(-21.1549,81.9028,0.7281,0.7281);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgFAXg");
	this.shape_739.setTransform(-21.1549,81.9028,0.7281,0.7281);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAkAIIAFgXg");
	this.shape_740.setTransform(-16.204,82.9586,0.7281,0.7281);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#373535").s().p("AgUAHIAEgVIAlAHIgFAWg");
	this.shape_741.setTransform(-16.204,82.9586,0.7281,0.7281);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_742.setTransform(-40.9585,77.6982,0.7281,0.7281);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_743.setTransform(-40.9585,77.6982,0.7281,0.7281);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAWIAlAHIAFgWg");
	this.shape_744.setTransform(-36.0258,78.7357,0.7281,0.7281);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#373535").s().p("AgVAIIAGgXIAlAIIgGAXg");
	this.shape_745.setTransform(-36.0258,78.7357,0.7281,0.7281);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAHIAFgWg");
	this.shape_746.setTransform(-31.0749,79.7914,0.7281,0.7281);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_747.setTransform(-31.0749,79.7914,0.7281,0.7281);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_748.setTransform(-55.8112,74.5311,0.7281,0.7281);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_749.setTransform(-55.8112,74.5311,0.7281,0.7281);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAmAIIAFgVg");
	this.shape_750.setTransform(-50.8785,75.5868,0.7281,0.7281);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_751.setTransform(-50.8785,75.5868,0.7281,0.7281);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAHIAEgVg");
	this.shape_752.setTransform(-45.9458,76.6243,0.7281,0.7281);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_753.setTransform(-45.9458,76.6243,0.7281,0.7281);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAJIAFgXg");
	this.shape_754.setTransform(-70.6821,71.3822,0.7281,0.7281);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_755.setTransform(-70.6821,71.3822,0.7281,0.7281);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_756.setTransform(-65.7494,72.4197,0.7281,0.7281);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_757.setTransform(-65.7494,72.4197,0.7281,0.7281);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_758.setTransform(-60.7985,73.4754,0.7281,0.7281);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_759.setTransform(-60.7985,73.4754,0.7281,0.7281);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgXg");
	this.shape_760.setTransform(-85.553,68.2151,0.7281,0.7281);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#373535").s().p("AgUAHIAFgVIAkAHIgEAXg");
	this.shape_761.setTransform(-85.553,68.2151,0.7281,0.7281);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_762.setTransform(-80.6203,69.2526,0.7281,0.7281);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_763.setTransform(-80.6203,69.2526,0.7281,0.7281);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_764.setTransform(-75.6694,70.3083,0.7281,0.7281);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_765.setTransform(-75.6694,70.3083,0.7281,0.7281);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgXg");
	this.shape_766.setTransform(-100.4057,65.048,0.7281,0.7281);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_767.setTransform(-100.4057,65.048,0.7281,0.7281);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#373535").ss(2,1,1).p("AAWgHIgmgHIgFAWIAmAIg");
	this.shape_768.setTransform(-95.473,66.1037,0.7281,0.7281);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#373535").s().p("AgUAIIAEgXIAmAIIgFAXg");
	this.shape_769.setTransform(-95.473,66.1037,0.7281,0.7281);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAWIAlAIIAFgWg");
	this.shape_770.setTransform(-90.5221,67.1594,0.7281,0.7281);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#373535").s().p("AgVAHIAGgWIAkAIIgFAXg");
	this.shape_771.setTransform(-90.5221,67.1594,0.7281,0.7281);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_772.setTransform(-115.2766,61.899,0.7281,0.7281);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_773.setTransform(-115.2766,61.899,0.7281,0.7281);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAlAIIAEgXg");
	this.shape_774.setTransform(-110.3439,62.9365,0.7281,0.7281);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgEAVg");
	this.shape_775.setTransform(-110.3439,62.9365,0.7281,0.7281);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#373535").ss(2,1,1).p("AAVgHIglgIIgEAXIAlAIg");
	this.shape_776.setTransform(-105.393,63.9922,0.7281,0.7281);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_777.setTransform(-105.393,63.9922,0.7281,0.7281);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_778.setTransform(-130.1474,58.7319,0.7281,0.7281);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_779.setTransform(-130.1474,58.7319,0.7281,0.7281);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAkAIIAFgVIglgIg");
	this.shape_780.setTransform(-125.1966,59.7876,0.7281,0.7281);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_781.setTransform(-125.1966,59.7876,0.7281,0.7281);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAlAIIAFgWg");
	this.shape_782.setTransform(-120.2639,60.8251,0.7281,0.7281);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_783.setTransform(-120.2639,60.8251,0.7281,0.7281);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_784.setTransform(-145.0001,55.5648,0.7281,0.7281);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_785.setTransform(-145.0001,55.5648,0.7281,0.7281);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAmAIIAFgVg");
	this.shape_786.setTransform(-140.0674,56.6205,0.7281,0.7281);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_787.setTransform(-140.0674,56.6205,0.7281,0.7281);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_788.setTransform(-135.1165,57.6762,0.7281,0.7281);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_789.setTransform(-135.1165,57.6762,0.7281,0.7281);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAHIAFgWg");
	this.shape_790.setTransform(-159.871,52.4159,0.7281,0.7281);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#373535").s().p("AgUAIIAFgXIAlAIIgGAXg");
	this.shape_791.setTransform(-159.871,52.4159,0.7281,0.7281);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIgkgIIgFAVIAlAIg");
	this.shape_792.setTransform(-154.9383,53.4534,0.7281,0.7281);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_793.setTransform(-154.9383,53.4534,0.7281,0.7281);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_794.setTransform(-149.9874,54.5091,0.7281,0.7281);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_795.setTransform(-149.9874,54.5091,0.7281,0.7281);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAIIAFgXg");
	this.shape_796.setTransform(-174.7237,49.2488,0.7281,0.7281);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#373535").s().p("AgVAIIAGgXIAkAIIgEAXg");
	this.shape_797.setTransform(-174.7237,49.2488,0.7281,0.7281);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgXg");
	this.shape_798.setTransform(-169.791,50.3045,0.7281,0.7281);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_799.setTransform(-169.791,50.3045,0.7281,0.7281);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAJIAFgXg");
	this.shape_800.setTransform(-164.8401,51.3602,0.7281,0.7281);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgFAXg");
	this.shape_801.setTransform(-164.8401,51.3602,0.7281,0.7281);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAlAIIAEgWg");
	this.shape_802.setTransform(-189.5946,46.0817,0.7281,0.7281);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_803.setTransform(-189.5946,46.0817,0.7281,0.7281);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#373535").ss(2,1,1).p("AgUAIIAkAHIAFgWIgkgIg");
	this.shape_804.setTransform(-184.6619,47.1374,0.7281,0.7281);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_805.setTransform(-184.6619,47.1374,0.7281,0.7281);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAFgXg");
	this.shape_806.setTransform(-179.711,48.1931,0.7281,0.7281);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#373535").s().p("AgVAIIAGgXIAlAJIgGAVg");
	this.shape_807.setTransform(-179.711,48.1931,0.7281,0.7281);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_808.setTransform(-204.4655,42.9327,0.7281,0.7281);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_809.setTransform(-204.4655,42.9327,0.7281,0.7281);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgWg");
	this.shape_810.setTransform(-199.5328,43.9702,0.7281,0.7281);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_811.setTransform(-199.5328,43.9702,0.7281,0.7281);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgXg");
	this.shape_812.setTransform(-194.5819,45.0259,0.7281,0.7281);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_813.setTransform(-194.5819,45.0259,0.7281,0.7281);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_814.setTransform(-219.3182,39.7656,0.7281,0.7281);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_815.setTransform(-219.3182,39.7656,0.7281,0.7281);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAkAIIAFgVIglgIg");
	this.shape_816.setTransform(-214.3855,40.8213,0.7281,0.7281);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_817.setTransform(-214.3855,40.8213,0.7281,0.7281);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_818.setTransform(-209.4346,41.877,0.7281,0.7281);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_819.setTransform(-209.4346,41.877,0.7281,0.7281);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAJIAEgXg");
	this.shape_820.setTransform(-234.1891,36.6167,0.7281,0.7281);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#373535").s().p("AgUAHIAFgWIAkAIIgEAXg");
	this.shape_821.setTransform(-234.1891,36.6167,0.7281,0.7281);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_822.setTransform(-229.2564,37.6542,0.7281,0.7281);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_823.setTransform(-229.2564,37.6542,0.7281,0.7281);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_824.setTransform(-224.3055,38.7099,0.7281,0.7281);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_825.setTransform(-224.3055,38.7099,0.7281,0.7281);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAkAJIAFgXIgkgIg");
	this.shape_826.setTransform(-244.1091,34.5053,0.7281,0.7281);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#373535").s().p("AgVAHIAGgWIAkAIIgEAXg");
	this.shape_827.setTransform(-244.1091,34.5053,0.7281,0.7281);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_828.setTransform(-239.1764,35.5428,0.7281,0.7281);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_829.setTransform(-239.1764,35.5428,0.7281,0.7281);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_830.setTransform(-367.9543,8.1672,0.7281,0.7281);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_831.setTransform(-367.9543,8.1672,0.7281,0.7281);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_832.setTransform(-382.8252,5.0001,0.7281,0.7281);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_833.setTransform(-382.8252,5.0001,0.7281,0.7281);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_834.setTransform(-377.8925,6.0558,0.7281,0.7281);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_835.setTransform(-377.8925,6.0558,0.7281,0.7281);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_836.setTransform(-372.9416,7.1115,0.7281,0.7281);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_837.setTransform(-372.9416,7.1115,0.7281,0.7281);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAkAIIAFgXg");
	this.shape_838.setTransform(-397.6961,1.8512,0.7281,0.7281);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_839.setTransform(-397.6961,1.8512,0.7281,0.7281);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_840.setTransform(-392.7634,2.8887,0.7281,0.7281);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_841.setTransform(-392.7634,2.8887,0.7281,0.7281);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_842.setTransform(-387.8125,3.9444,0.7281,0.7281);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_843.setTransform(-387.8125,3.9444,0.7281,0.7281);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAkAIIAFgXg");
	this.shape_844.setTransform(-412.5488,-1.3159,0.7281,0.7281);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#373535").s().p("AgUAHIAEgWIAmAIIgGAXg");
	this.shape_845.setTransform(-412.5488,-1.3159,0.7281,0.7281);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgXg");
	this.shape_846.setTransform(-407.6161,-0.2602,0.7281,0.7281);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#373535").s().p("AgUAHIAEgVIAlAHIgFAWg");
	this.shape_847.setTransform(-407.6161,-0.2602,0.7281,0.7281);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAWIAkAJIAFgXg");
	this.shape_848.setTransform(-402.6652,0.7955,0.7281,0.7281);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_849.setTransform(-402.6652,0.7955,0.7281,0.7281);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgWg");
	this.shape_850.setTransform(-427.4197,-4.483,0.7281,0.7281);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#373535").s().p("AgUAIIAFgXIAkAJIgEAWg");
	this.shape_851.setTransform(-427.4197,-4.483,0.7281,0.7281);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIgkgHIgFAWg");
	this.shape_852.setTransform(-422.487,-3.4273,0.7281,0.7281);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#373535").s().p("AgVAIIAGgXIAkAIIgFAXg");
	this.shape_853.setTransform(-422.487,-3.4273,0.7281,0.7281);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAkAHIAFgWg");
	this.shape_854.setTransform(-417.5361,-2.3716,0.7281,0.7281);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#373535").s().p("AgUAIIAEgXIAmAIIgGAXg");
	this.shape_855.setTransform(-417.5361,-2.3716,0.7281,0.7281);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIglgIIgEAVIAkAIg");
	this.shape_856.setTransform(-442.2724,-7.6319,0.7281,0.7281);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_857.setTransform(-442.2724,-7.6319,0.7281,0.7281);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAIIAFgWg");
	this.shape_858.setTransform(-437.3397,-6.5944,0.7281,0.7281);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_859.setTransform(-437.3397,-6.5944,0.7281,0.7281);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgWg");
	this.shape_860.setTransform(-432.407,-5.5387,0.7281,0.7281);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#373535").s().p("AgUAIIAFgXIAkAJIgEAVg");
	this.shape_861.setTransform(-432.407,-5.5387,0.7281,0.7281);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_862.setTransform(-457.1433,-10.7991,0.7281,0.7281);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_863.setTransform(-457.1433,-10.7991,0.7281,0.7281);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_864.setTransform(-452.2106,-9.7434,0.7281,0.7281);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_865.setTransform(-452.2106,-9.7434,0.7281,0.7281);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_866.setTransform(-447.2597,-8.6876,0.7281,0.7281);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_867.setTransform(-447.2597,-8.6876,0.7281,0.7281);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAIIAEgXg");
	this.shape_868.setTransform(-472.0142,-13.948,0.7281,0.7281);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_869.setTransform(-472.0142,-13.948,0.7281,0.7281);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_870.setTransform(-467.0815,-12.9105,0.7281,0.7281);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_871.setTransform(-467.0815,-12.9105,0.7281,0.7281);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_872.setTransform(-462.1306,-11.8548,0.7281,0.7281);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgFAVg");
	this.shape_873.setTransform(-462.1306,-11.8548,0.7281,0.7281);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAHIAFgWg");
	this.shape_874.setTransform(-486.8669,-17.1151,0.7281,0.7281);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_875.setTransform(-486.8669,-17.1151,0.7281,0.7281);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAWIAlAJIAFgXg");
	this.shape_876.setTransform(-481.9342,-16.0594,0.7281,0.7281);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#373535").s().p("AgVAHIAGgWIAlAIIgGAXg");
	this.shape_877.setTransform(-481.9342,-16.0594,0.7281,0.7281);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAWIAkAJIAFgXg");
	this.shape_878.setTransform(-476.9833,-15.0037,0.7281,0.7281);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#373535").s().p("AgUAHIAEgVIAlAHIgEAWg");
	this.shape_879.setTransform(-476.9833,-15.0037,0.7281,0.7281);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAkAIIAFgWg");
	this.shape_880.setTransform(-501.7378,-20.2822,0.7281,0.7281);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#373535").s().p("AgUAIIAEgXIAmAJIgGAVg");
	this.shape_881.setTransform(-501.7378,-20.2822,0.7281,0.7281);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAlAIIAEgXg");
	this.shape_882.setTransform(-496.8051,-19.2265,0.7281,0.7281);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_883.setTransform(-496.8051,-19.2265,0.7281,0.7281);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAlAIIAEgXg");
	this.shape_884.setTransform(-491.8542,-18.1708,0.7281,0.7281);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_885.setTransform(-491.8542,-18.1708,0.7281,0.7281);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_886.setTransform(-516.6087,-23.4311,0.7281,0.7281);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_887.setTransform(-516.6087,-23.4311,0.7281,0.7281);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAHIAFgVg");
	this.shape_888.setTransform(-511.6578,-22.3936,0.7281,0.7281);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_889.setTransform(-511.6578,-22.3936,0.7281,0.7281);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAkAIIAFgXg");
	this.shape_890.setTransform(-506.7251,-21.3379,0.7281,0.7281);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_891.setTransform(-506.7251,-21.3379,0.7281,0.7281);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_892.setTransform(-531.4614,-26.5982,0.7281,0.7281);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_893.setTransform(-531.4614,-26.5982,0.7281,0.7281);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_894.setTransform(-526.5287,-25.5425,0.7281,0.7281);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_895.setTransform(-526.5287,-25.5425,0.7281,0.7281);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_896.setTransform(-521.5778,-24.4868,0.7281,0.7281);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_897.setTransform(-521.5778,-24.4868,0.7281,0.7281);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAWIAkAJIAFgXg");
	this.shape_898.setTransform(-546.3322,-29.7472,0.7281,0.7281);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#373535").s().p("AgVAHIAGgVIAkAHIgFAWg");
	this.shape_899.setTransform(-546.3322,-29.7472,0.7281,0.7281);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_900.setTransform(-541.3996,-28.7097,0.7281,0.7281);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_901.setTransform(-541.3996,-28.7097,0.7281,0.7281);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_902.setTransform(-536.4487,-27.654,0.7281,0.7281);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_903.setTransform(-536.4487,-27.654,0.7281,0.7281);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAWIAlAIIAFgXg");
	this.shape_904.setTransform(-561.1849,-32.9143,0.7281,0.7281);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_905.setTransform(-561.1849,-32.9143,0.7281,0.7281);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAWIAkAIIAFgWg");
	this.shape_906.setTransform(-556.2522,-31.8586,0.7281,0.7281);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgFAXg");
	this.shape_907.setTransform(-556.2522,-31.8586,0.7281,0.7281);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_908.setTransform(-551.3013,-30.8211,0.7281,0.7281);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_909.setTransform(-551.3013,-30.8211,0.7281,0.7281);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAlAIIAEgWg");
	this.shape_910.setTransform(-576.0558,-36.0814,0.7281,0.7281);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_911.setTransform(-576.0558,-36.0814,0.7281,0.7281);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAIIAFgXg");
	this.shape_912.setTransform(-571.1231,-35.0257,0.7281,0.7281);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#373535").s().p("AgUAIIAEgXIAmAJIgGAVg");
	this.shape_913.setTransform(-571.1231,-35.0257,0.7281,0.7281);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAkAIIAFgXg");
	this.shape_914.setTransform(-566.1722,-33.97,0.7281,0.7281);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#373535").s().p("AgVAIIAGgXIAkAIIgEAXg");
	this.shape_915.setTransform(-566.1722,-33.97,0.7281,0.7281);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_916.setTransform(-590.9085,-39.2303,0.7281,0.7281);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_917.setTransform(-590.9085,-39.2303,0.7281,0.7281);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAlAIIAEgXg");
	this.shape_918.setTransform(-585.994,-38.1928,0.7281,0.7281);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_919.setTransform(-585.994,-38.1928,0.7281,0.7281);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAXIAlAHIAEgWg");
	this.shape_920.setTransform(-581.0431,-37.1371,0.7281,0.7281);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_921.setTransform(-581.0431,-37.1371,0.7281,0.7281);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_922.setTransform(-605.7794,-42.3974,0.7281,0.7281);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_923.setTransform(-605.7794,-42.3974,0.7281,0.7281);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_924.setTransform(-600.8467,-41.3417,0.7281,0.7281);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_925.setTransform(-600.8467,-41.3417,0.7281,0.7281);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgWg");
	this.shape_926.setTransform(-595.8958,-40.3042,0.7281,0.7281);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgFAWg");
	this.shape_927.setTransform(-595.8958,-40.3042,0.7281,0.7281);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAWIAlAJIAEgXg");
	this.shape_928.setTransform(-620.6503,-45.5464,0.7281,0.7281);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#373535").s().p("AgUAHIAFgWIAkAIIgEAXg");
	this.shape_929.setTransform(-620.6503,-45.5464,0.7281,0.7281);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_930.setTransform(-615.7176,-44.5088,0.7281,0.7281);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_931.setTransform(-615.7176,-44.5088,0.7281,0.7281);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAkAIIAFgVg");
	this.shape_932.setTransform(-610.7667,-43.4531,0.7281,0.7281);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_933.setTransform(-610.7667,-43.4531,0.7281,0.7281);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgXg");
	this.shape_934.setTransform(-635.503,-48.7135,0.7281,0.7281);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_935.setTransform(-635.503,-48.7135,0.7281,0.7281);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAJIAFgXg");
	this.shape_936.setTransform(-630.5703,-47.6578,0.7281,0.7281);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgEAXg");
	this.shape_937.setTransform(-630.5703,-47.6578,0.7281,0.7281);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_938.setTransform(-625.6376,-46.6203,0.7281,0.7281);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_939.setTransform(-625.6376,-46.6203,0.7281,0.7281);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAHIAFgWg");
	this.shape_940.setTransform(-650.3739,-51.8806,0.7281,0.7281);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_941.setTransform(-650.3739,-51.8806,0.7281,0.7281);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAlAIIAEgXg");
	this.shape_942.setTransform(-645.4412,-50.8249,0.7281,0.7281);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_943.setTransform(-645.4412,-50.8249,0.7281,0.7281);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAWIAkAJIAFgXg");
	this.shape_944.setTransform(-640.4903,-49.7692,0.7281,0.7281);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#373535").s().p("AgUAHIAEgWIAlAJIgFAVg");
	this.shape_945.setTransform(-640.4903,-49.7692,0.7281,0.7281);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_946.setTransform(-665.2448,-55.0295,0.7281,0.7281);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_947.setTransform(-665.2448,-55.0295,0.7281,0.7281);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAIIAFgXg");
	this.shape_948.setTransform(-660.3121,-53.992,0.7281,0.7281);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#373535").s().p("AgUAHIAEgVIAmAHIgFAXg");
	this.shape_949.setTransform(-660.3121,-53.992,0.7281,0.7281);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAWIAkAIIAFgXg");
	this.shape_950.setTransform(-655.3612,-52.9363,0.7281,0.7281);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_951.setTransform(-655.3612,-52.9363,0.7281,0.7281);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_952.setTransform(-680.0975,-58.1966,0.7281,0.7281);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_953.setTransform(-680.0975,-58.1966,0.7281,0.7281);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_954.setTransform(-675.1648,-57.1409,0.7281,0.7281);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_955.setTransform(-675.1648,-57.1409,0.7281,0.7281);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAXIAlAIIAFgWg");
	this.shape_956.setTransform(-670.2139,-56.1034,0.7281,0.7281);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgEAWg");
	this.shape_957.setTransform(-670.2139,-56.1034,0.7281,0.7281);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgFAVIAlAIIAFgVg");
	this.shape_958.setTransform(-694.9684,-61.3637,0.7281,0.7281);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_959.setTransform(-694.9684,-61.3637,0.7281,0.7281);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAEgVg");
	this.shape_960.setTransform(-690.0357,-60.308,0.7281,0.7281);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_961.setTransform(-690.0357,-60.308,0.7281,0.7281);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAlAIIAEgVg");
	this.shape_962.setTransform(-685.0848,-59.2523,0.7281,0.7281);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_963.setTransform(-685.0848,-59.2523,0.7281,0.7281);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#373535").ss(2,1,1).p("AAAAVIASgNQgKgMgCgQIgXADQAEAUANASg");
	this.shape_964.setTransform(-703.6688,-54.1922,0.7281,0.7281);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#373535").s().p("AgQgRIAVgDQADAQAJAMIgRANQgNgSgDgUg");
	this.shape_965.setTransform(-703.6688,-54.1922,0.7281,0.7281);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#373535").ss(2,1,1).p("AgSAQIAWAFQAFgRAJgJIgRgQQgNARgGAUg");
	this.shape_966.setTransform(-703.5232,-59.0885,0.7281,0.7281);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#373535").s().p("AgRAQQAFgUANgRIASAQQgKAKgFARg");
	this.shape_967.setTransform(-703.5232,-59.0885,0.7281,0.7281);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#373535").ss(2,1,1).p("AgTgEIAKATQAOgHAQAAIAAgWQgVAAgTAKg");
	this.shape_968.setTransform(-700.0285,-61.7468,0.7281,0.7281);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#373535").s().p("AgTgEQATgKAUAAIAAAWQgPAAgOAHg");
	this.shape_969.setTransform(-700.0285,-61.7468,0.7281,0.7281);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_970.setTransform(-690.3815,-49.0229,0.7281,0.7281);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_971.setTransform(-690.3815,-49.0229,0.7281,0.7281);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_972.setTransform(-695.3142,-50.0786,0.7281,0.7281);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_973.setTransform(-695.3142,-50.0786,0.7281,0.7281);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#373535").ss(2,1,1).p("AARARIAFgWQgWgGgJgFIgMATIAJAFIAKAEQACAAARAFg");
	this.shape_974.setTransform(-700.3197,-51.2071,0.7281,0.7281);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#373535").s().p("AgCAMIgKgEIgJgFIAMgTQAJAFAWAGIgFAWIgTgFg");
	this.shape_975.setTransform(-700.3197,-51.2071,0.7281,0.7281);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_976.setTransform(-675.5288,-45.8558,0.7281,0.7281);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_977.setTransform(-675.5288,-45.8558,0.7281,0.7281);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_978.setTransform(-680.4615,-46.9115,0.7281,0.7281);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_979.setTransform(-680.4615,-46.9115,0.7281,0.7281);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIgkgIIgFAVIAlAIg");
	this.shape_980.setTransform(-685.4124,-47.9672,0.7281,0.7281);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_981.setTransform(-685.4124,-47.9672,0.7281,0.7281);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgEAXg");
	this.shape_982.setTransform(-660.6579,-42.7069,0.7281,0.7281);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_983.setTransform(-660.6579,-42.7069,0.7281,0.7281);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_984.setTransform(-665.5906,-43.7444,0.7281,0.7281);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_985.setTransform(-665.5906,-43.7444,0.7281,0.7281);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#373535").ss(2,1,1).p("AgPgOIgFAVIAlAIIAFgVg");
	this.shape_986.setTransform(-670.5415,-44.8001,0.7281,0.7281);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_987.setTransform(-670.5415,-44.8001,0.7281,0.7281);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIgkgIIgFAXg");
	this.shape_988.setTransform(-645.8052,-39.5397,0.7281,0.7281);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#373535").s().p("AgUAIIAFgXIAkAIIgEAXg");
	this.shape_989.setTransform(-645.8052,-39.5397,0.7281,0.7281);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgWIglgIIgEAXg");
	this.shape_990.setTransform(-650.7197,-40.5955,0.7281,0.7281);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgFAVg");
	this.shape_991.setTransform(-650.7197,-40.5955,0.7281,0.7281);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#373535").ss(2,1,1).p("AgUAIIAkAIIAFgWIglgIg");
	this.shape_992.setTransform(-655.6706,-41.6512,0.7281,0.7281);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_993.setTransform(-655.6706,-41.6512,0.7281,0.7281);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_994.setTransform(-630.9343,-36.3908,0.7281,0.7281);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_995.setTransform(-630.9343,-36.3908,0.7281,0.7281);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgIIgEAXg");
	this.shape_996.setTransform(-635.867,-37.4283,0.7281,0.7281);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_997.setTransform(-635.867,-37.4283,0.7281,0.7281);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIgkgIIgFAXg");
	this.shape_998.setTransform(-640.8179,-38.484,0.7281,0.7281);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#373535").s().p("AgUAIIAFgXIAkAIIgEAXg");
	this.shape_999.setTransform(-640.8179,-38.484,0.7281,0.7281);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1000.setTransform(-616.0634,-33.2237,0.7281,0.7281);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1001.setTransform(-616.0634,-33.2237,0.7281,0.7281);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgFAWg");
	this.shape_1002.setTransform(-620.9961,-34.2612,0.7281,0.7281);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgFAVg");
	this.shape_1003.setTransform(-620.9961,-34.2612,0.7281,0.7281);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#373535").ss(2,1,1).p("AgPgPIgFAWIAlAIIAFgWg");
	this.shape_1004.setTransform(-625.947,-35.3169,0.7281,0.7281);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#373535").s().p("AgVAHIAGgVIAkAHIgFAWg");
	this.shape_1005.setTransform(-625.947,-35.3169,0.7281,0.7281);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1006.setTransform(-601.2108,-30.0566,0.7281,0.7281);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1007.setTransform(-601.2108,-30.0566,0.7281,0.7281);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1008.setTransform(-606.1435,-31.1123,0.7281,0.7281);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_1009.setTransform(-606.1435,-31.1123,0.7281,0.7281);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1010.setTransform(-611.0761,-32.168,0.7281,0.7281);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1011.setTransform(-611.0761,-32.168,0.7281,0.7281);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgHIgFAWg");
	this.shape_1012.setTransform(-586.3399,-26.9077,0.7281,0.7281);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1013.setTransform(-586.3399,-26.9077,0.7281,0.7281);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1014.setTransform(-591.2726,-27.9452,0.7281,0.7281);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1015.setTransform(-591.2726,-27.9452,0.7281,0.7281);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1016.setTransform(-596.2235,-29.0009,0.7281,0.7281);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1017.setTransform(-596.2235,-29.0009,0.7281,0.7281);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgEAXg");
	this.shape_1018.setTransform(-571.469,-23.7406,0.7281,0.7281);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_1019.setTransform(-571.469,-23.7406,0.7281,0.7281);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgFAXg");
	this.shape_1020.setTransform(-576.4017,-24.7963,0.7281,0.7281);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#373535").s().p("AgVAIIAGgXIAkAIIgEAXg");
	this.shape_1021.setTransform(-576.4017,-24.7963,0.7281,0.7281);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgJIgFAXg");
	this.shape_1022.setTransform(-581.3526,-25.852,0.7281,0.7281);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#373535").s().p("AgUAIIAEgXIAmAJIgGAVg");
	this.shape_1023.setTransform(-581.3526,-25.852,0.7281,0.7281);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgWIgkgIIgFAWg");
	this.shape_1024.setTransform(-556.6163,-20.5734,0.7281,0.7281);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#373535").s().p("AgUAHIAFgVIAkAHIgEAWg");
	this.shape_1025.setTransform(-556.6163,-20.5734,0.7281,0.7281);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgHIgFAWg");
	this.shape_1026.setTransform(-561.549,-21.6291,0.7281,0.7281);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#373535").s().p("AgVAHIAGgWIAlAIIgGAXg");
	this.shape_1027.setTransform(-561.549,-21.6291,0.7281,0.7281);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgIIgFAXg");
	this.shape_1028.setTransform(-566.4999,-22.6849,0.7281,0.7281);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#373535").s().p("AgVAIIAFgXIAlAIIgEAXg");
	this.shape_1029.setTransform(-566.4999,-22.6849,0.7281,0.7281);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_1030.setTransform(-541.7454,-17.4245,0.7281,0.7281);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_1031.setTransform(-541.7454,-17.4245,0.7281,0.7281);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgEAWg");
	this.shape_1032.setTransform(-546.6781,-18.462,0.7281,0.7281);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1033.setTransform(-546.6781,-18.462,0.7281,0.7281);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgIIgEAXg");
	this.shape_1034.setTransform(-551.629,-19.5177,0.7281,0.7281);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1035.setTransform(-551.629,-19.5177,0.7281,0.7281);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1036.setTransform(-526.8927,-14.2574,0.7281,0.7281);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_1037.setTransform(-526.8927,-14.2574,0.7281,0.7281);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1038.setTransform(-531.8254,-15.3131,0.7281,0.7281);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1039.setTransform(-531.8254,-15.3131,0.7281,0.7281);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1040.setTransform(-536.7763,-16.3688,0.7281,0.7281);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1041.setTransform(-536.7763,-16.3688,0.7281,0.7281);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgJIgEAXg");
	this.shape_1042.setTransform(-512.0218,-11.1085,0.7281,0.7281);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgEAVg");
	this.shape_1043.setTransform(-512.0218,-11.1085,0.7281,0.7281);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIgkgIIgFAVg");
	this.shape_1044.setTransform(-516.9545,-12.146,0.7281,0.7281);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1045.setTransform(-516.9545,-12.146,0.7281,0.7281);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_1046.setTransform(-521.9054,-13.2017,0.7281,0.7281);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_1047.setTransform(-521.9054,-13.2017,0.7281,0.7281);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgIIgFAXg");
	this.shape_1048.setTransform(-497.1509,-7.9414,0.7281,0.7281);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#373535").s().p("AgUAIIAEgXIAmAIIgFAXg");
	this.shape_1049.setTransform(-497.1509,-7.9414,0.7281,0.7281);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAIIAFgWg");
	this.shape_1050.setTransform(-502.0836,-8.9971,0.7281,0.7281);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgFAWg");
	this.shape_1051.setTransform(-502.0836,-8.9971,0.7281,0.7281);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1052.setTransform(-507.0345,-10.0346,0.7281,0.7281);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1053.setTransform(-507.0345,-10.0346,0.7281,0.7281);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgFAWg");
	this.shape_1054.setTransform(-482.2982,-4.7743,0.7281,0.7281);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_1055.setTransform(-482.2982,-4.7743,0.7281,0.7281);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgWIgkgIIgFAXg");
	this.shape_1056.setTransform(-487.2309,-5.83,0.7281,0.7281);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#373535").s().p("AgUAHIAFgVIAkAHIgEAWg");
	this.shape_1057.setTransform(-487.2309,-5.83,0.7281,0.7281);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIgkgHIgFAWg");
	this.shape_1058.setTransform(-492.1818,-6.8857,0.7281,0.7281);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#373535").s().p("AgUAHIAFgWIAkAIIgEAXg");
	this.shape_1059.setTransform(-492.1818,-6.8857,0.7281,0.7281);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1060.setTransform(-467.4273,-1.6253,0.7281,0.7281);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1061.setTransform(-467.4273,-1.6253,0.7281,0.7281);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIgkgIIgFAWg");
	this.shape_1062.setTransform(-472.36,-2.6628,0.7281,0.7281);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_1063.setTransform(-472.36,-2.6628,0.7281,0.7281);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgIIgFAXg");
	this.shape_1064.setTransform(-477.3109,-3.7186,0.7281,0.7281);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1065.setTransform(-477.3109,-3.7186,0.7281,0.7281);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1066.setTransform(-452.5746,1.5418,0.7281,0.7281);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1067.setTransform(-452.5746,1.5418,0.7281,0.7281);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1068.setTransform(-457.4891,0.4861,0.7281,0.7281);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1069.setTransform(-457.4891,0.4861,0.7281,0.7281);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgWIglgIIgEAWg");
	this.shape_1070.setTransform(-462.44,-0.5514,0.7281,0.7281);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#373535").s().p("AgUAHIAEgWIAlAJIgFAWg");
	this.shape_1071.setTransform(-462.44,-0.5514,0.7281,0.7281);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgWIglgJIgFAXg");
	this.shape_1072.setTransform(-437.7037,4.6907,0.7281,0.7281);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#373535").s().p("AgVAIIAGgXIAlAJIgGAWg");
	this.shape_1073.setTransform(-437.7037,4.6907,0.7281,0.7281);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1074.setTransform(-442.6364,3.6532,0.7281,0.7281);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1075.setTransform(-442.6364,3.6532,0.7281,0.7281);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1076.setTransform(-447.5873,2.5975,0.7281,0.7281);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1077.setTransform(-447.5873,2.5975,0.7281,0.7281);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgHIgEAWg");
	this.shape_1078.setTransform(-422.8328,7.8578,0.7281,0.7281);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgFAXg");
	this.shape_1079.setTransform(-422.8328,7.8578,0.7281,0.7281);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgWIgkgJIgFAXg");
	this.shape_1080.setTransform(-427.7655,6.8021,0.7281,0.7281);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgEAWg");
	this.shape_1081.setTransform(-427.7655,6.8021,0.7281,0.7281);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_1082.setTransform(-432.7164,5.7646,0.7281,0.7281);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_1083.setTransform(-432.7164,5.7646,0.7281,0.7281);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIgkgIIgFAXg");
	this.shape_1084.setTransform(-407.9802,11.0249,0.7281,0.7281);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1085.setTransform(-407.9802,11.0249,0.7281,0.7281);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIgkgIIgFAXg");
	this.shape_1086.setTransform(-412.9128,9.9692,0.7281,0.7281);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_1087.setTransform(-412.9128,9.9692,0.7281,0.7281);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgJIgFAXg");
	this.shape_1088.setTransform(-417.8637,8.9135,0.7281,0.7281);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_1089.setTransform(-417.8637,8.9135,0.7281,0.7281);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1090.setTransform(-393.1093,14.1738,0.7281,0.7281);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1091.setTransform(-393.1093,14.1738,0.7281,0.7281);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgHIgEAWg");
	this.shape_1092.setTransform(-398.042,13.1363,0.7281,0.7281);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#373535").s().p("AgUAIIAEgWIAlAIIgEAVg");
	this.shape_1093.setTransform(-398.042,13.1363,0.7281,0.7281);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgIIgEAXg");
	this.shape_1094.setTransform(-402.9929,12.0806,0.7281,0.7281);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1095.setTransform(-402.9929,12.0806,0.7281,0.7281);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1096.setTransform(-378.2384,17.341,0.7281,0.7281);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1097.setTransform(-378.2384,17.341,0.7281,0.7281);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1098.setTransform(-383.1893,16.2853,0.7281,0.7281);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1099.setTransform(-383.1893,16.2853,0.7281,0.7281);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgIIgFAWg");
	this.shape_1100.setTransform(-388.122,15.2478,0.7281,0.7281);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgEAXg");
	this.shape_1101.setTransform(-388.122,15.2478,0.7281,0.7281);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAkAJIAFgXIgkgIg");
	this.shape_1102.setTransform(-244.4731,45.7904,0.7281,0.7281);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#373535").s().p("AgUAHIAEgWIAmAIIgGAXg");
	this.shape_1103.setTransform(-244.4731,45.7904,0.7281,0.7281);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgIIgEAXg");
	this.shape_1104.setTransform(-249.4058,44.7347,0.7281,0.7281);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgEAXg");
	this.shape_1105.setTransform(-249.4058,44.7347,0.7281,0.7281);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1106.setTransform(-229.6022,48.9393,0.7281,0.7281);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1107.setTransform(-229.6022,48.9393,0.7281,0.7281);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIgkgHIgFAVg");
	this.shape_1108.setTransform(-234.5349,47.9018,0.7281,0.7281);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#373535").s().p("AgUAHIAEgVIAlAHIgEAWg");
	this.shape_1109.setTransform(-234.5349,47.9018,0.7281,0.7281);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgFAXg");
	this.shape_1110.setTransform(-239.4858,46.8461,0.7281,0.7281);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#373535").s().p("AgVAHIAGgWIAlAIIgGAXg");
	this.shape_1111.setTransform(-239.4858,46.8461,0.7281,0.7281);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAlAIIAEgVIgkgIg");
	this.shape_1112.setTransform(-214.7495,52.1065,0.7281,0.7281);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1113.setTransform(-214.7495,52.1065,0.7281,0.7281);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIgkgIIgFAVg");
	this.shape_1114.setTransform(-219.6822,51.0508,0.7281,0.7281);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgFAVg");
	this.shape_1115.setTransform(-219.6822,51.0508,0.7281,0.7281);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIgkgIIgFAVg");
	this.shape_1116.setTransform(-224.6331,49.995,0.7281,0.7281);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1117.setTransform(-224.6331,49.995,0.7281,0.7281);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgWIgkgJIgFAXg");
	this.shape_1118.setTransform(-199.8787,55.2554,0.7281,0.7281);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_1119.setTransform(-199.8787,55.2554,0.7281,0.7281);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1120.setTransform(-204.8113,54.2179,0.7281,0.7281);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1121.setTransform(-204.8113,54.2179,0.7281,0.7281);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1122.setTransform(-209.7622,53.1622,0.7281,0.7281);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1123.setTransform(-209.7622,53.1622,0.7281,0.7281);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#373535").ss(2,1,1).p("AgUAIIAkAHIAFgWIglgIg");
	this.shape_1124.setTransform(-185.0078,58.4225,0.7281,0.7281);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#373535").s().p("AgUAIIAEgXIAlAJIgFAWg");
	this.shape_1125.setTransform(-185.0078,58.4225,0.7281,0.7281);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgWIgkgIIgFAWg");
	this.shape_1126.setTransform(-189.9587,57.3668,0.7281,0.7281);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#373535").s().p("AgUAIIAFgWIAkAIIgEAVg");
	this.shape_1127.setTransform(-189.9587,57.3668,0.7281,0.7281);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1128.setTransform(-194.8914,56.3293,0.7281,0.7281);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1129.setTransform(-194.8914,56.3293,0.7281,0.7281);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgIIgEAXg");
	this.shape_1130.setTransform(-170.1551,61.5896,0.7281,0.7281);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgEAXg");
	this.shape_1131.setTransform(-170.1551,61.5896,0.7281,0.7281);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgIIgFAXg");
	this.shape_1132.setTransform(-175.0878,60.5339,0.7281,0.7281);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#373535").s().p("AgUAIIAEgXIAmAIIgGAXg");
	this.shape_1133.setTransform(-175.0878,60.5339,0.7281,0.7281);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIgkgIIgFAXg");
	this.shape_1134.setTransform(-180.0387,59.4782,0.7281,0.7281);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#373535").s().p("AgVAIIAGgXIAkAIIgFAXg");
	this.shape_1135.setTransform(-180.0387,59.4782,0.7281,0.7281);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAlAIIAFgVIglgIg");
	this.shape_1136.setTransform(-155.2842,64.7385,0.7281,0.7281);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#373535").s().p("AgVAHIAFgVIAmAIIgGAVg");
	this.shape_1137.setTransform(-155.2842,64.7385,0.7281,0.7281);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgEAXIAkAHIAFgWg");
	this.shape_1138.setTransform(-160.2169,63.701,0.7281,0.7281);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1139.setTransform(-160.2169,63.701,0.7281,0.7281);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#373535").ss(2,1,1).p("AgUAIIAlAIIAEgXIglgHg");
	this.shape_1140.setTransform(-165.1678,62.6453,0.7281,0.7281);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#373535").s().p("AgUAHIAEgVIAlAHIgEAWg");
	this.shape_1141.setTransform(-165.1678,62.6453,0.7281,0.7281);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIgmgIIgFAVg");
	this.shape_1142.setTransform(-140.4315,67.9056,0.7281,0.7281);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1143.setTransform(-140.4315,67.9056,0.7281,0.7281);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1144.setTransform(-145.3642,66.8499,0.7281,0.7281);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1145.setTransform(-145.3642,66.8499,0.7281,0.7281);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIgkgIIgFAWg");
	this.shape_1146.setTransform(-150.3151,65.8124,0.7281,0.7281);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1147.setTransform(-150.3151,65.8124,0.7281,0.7281);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIglgIIgEAVIAlAIg");
	this.shape_1148.setTransform(-125.5606,71.0728,0.7281,0.7281);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1149.setTransform(-125.5606,71.0728,0.7281,0.7281);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1150.setTransform(-130.4933,70.0171,0.7281,0.7281);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_1151.setTransform(-130.4933,70.0171,0.7281,0.7281);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_1152.setTransform(-135.4442,68.9613,0.7281,0.7281);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgFAVg");
	this.shape_1153.setTransform(-135.4442,68.9613,0.7281,0.7281);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgXIglgIIgFAXg");
	this.shape_1154.setTransform(-110.6897,74.2217,0.7281,0.7281);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#373535").s().p("AgVAIIAFgXIAlAIIgEAXg");
	this.shape_1155.setTransform(-110.6897,74.2217,0.7281,0.7281);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1156.setTransform(-115.6224,73.1842,0.7281,0.7281);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1157.setTransform(-115.6224,73.1842,0.7281,0.7281);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1158.setTransform(-120.5733,72.1285,0.7281,0.7281);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1159.setTransform(-120.5733,72.1285,0.7281,0.7281);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#373535").ss(2,1,1).p("AAWgHIgmgIIgFAWIAmAIg");
	this.shape_1160.setTransform(-95.837,77.3888,0.7281,0.7281);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#373535").s().p("AgVAHIAGgVIAlAHIgGAXg");
	this.shape_1161.setTransform(-95.837,77.3888,0.7281,0.7281);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgWIgkgIIgFAXg");
	this.shape_1162.setTransform(-100.7697,76.3331,0.7281,0.7281);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#373535").s().p("AgUAIIAFgXIAkAIIgEAXg");
	this.shape_1163.setTransform(-100.7697,76.3331,0.7281,0.7281);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgJIgFAXg");
	this.shape_1164.setTransform(-105.7206,75.2774,0.7281,0.7281);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#373535").s().p("AgUAIIAFgXIAkAJIgEAWg");
	this.shape_1165.setTransform(-105.7206,75.2774,0.7281,0.7281);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1166.setTransform(-80.9661,80.5377,0.7281,0.7281);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1167.setTransform(-80.9661,80.5377,0.7281,0.7281);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgHIgFAWg");
	this.shape_1168.setTransform(-85.8988,79.5002,0.7281,0.7281);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_1169.setTransform(-85.8988,79.5002,0.7281,0.7281);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAFgWIglgIIgFAWg");
	this.shape_1170.setTransform(-90.8497,78.4445,0.7281,0.7281);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#373535").s().p("AgVAHIAGgVIAkAIIgEAVg");
	this.shape_1171.setTransform(-90.8497,78.4445,0.7281,0.7281);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#373535").ss(2,1,1).p("AAVgGIgkgIIgFAVIAlAIg");
	this.shape_1172.setTransform(-66.1134,83.7048,0.7281,0.7281);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1173.setTransform(-66.1134,83.7048,0.7281,0.7281);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1174.setTransform(-71.0461,82.6491,0.7281,0.7281);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1175.setTransform(-71.0461,82.6491,0.7281,0.7281);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgWIglgIIgEAWg");
	this.shape_1176.setTransform(-75.9788,81.6116,0.7281,0.7281);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#373535").s().p("AgUAHIAEgWIAlAJIgFAVg");
	this.shape_1177.setTransform(-75.9788,81.6116,0.7281,0.7281);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIgmgIIgFAVg");
	this.shape_1178.setTransform(-51.2425,86.8719,0.7281,0.7281);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgFAVg");
	this.shape_1179.setTransform(-51.2425,86.8719,0.7281,0.7281);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1180.setTransform(-56.1752,85.8162,0.7281,0.7281);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1181.setTransform(-56.1752,85.8162,0.7281,0.7281);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1182.setTransform(-61.1261,84.7605,0.7281,0.7281);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1183.setTransform(-61.1261,84.7605,0.7281,0.7281);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAWIAkAHIAFgWg");
	this.shape_1184.setTransform(-36.3716,90.0209,0.7281,0.7281);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#373535").s().p("AgUAIIAEgXIAlAIIgFAXg");
	this.shape_1185.setTransform(-36.3716,90.0209,0.7281,0.7281);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1186.setTransform(-41.3043,88.9834,0.7281,0.7281);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#373535").s().p("AgVAHIAFgVIAlAIIgEAVg");
	this.shape_1187.setTransform(-41.3043,88.9834,0.7281,0.7281);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIglgIIgFAVg");
	this.shape_1188.setTransform(-46.2552,87.9277,0.7281,0.7281);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#373535").s().p("AgUAHIAEgVIAmAIIgGAVg");
	this.shape_1189.setTransform(-46.2552,87.9277,0.7281,0.7281);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgWIgkgIIgFAWg");
	this.shape_1190.setTransform(-21.5189,93.188,0.7281,0.7281);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1191.setTransform(-21.5189,93.188,0.7281,0.7281);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgWIglgIIgFAWg");
	this.shape_1192.setTransform(-26.4516,92.1323,0.7281,0.7281);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#373535").s().p("AgVAHIAGgVIAlAHIgGAXg");
	this.shape_1193.setTransform(-26.4516,92.1323,0.7281,0.7281);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIgmgJIgFAXg");
	this.shape_1194.setTransform(-31.4025,91.0766,0.7281,0.7281);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#373535").s().p("AgVAIIAFgXIAlAJIgEAWg");
	this.shape_1195.setTransform(-31.4025,91.0766,0.7281,0.7281);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#373535").ss(2,1,1).p("AgQgPIgFAWIAmAIIAFgWg");
	this.shape_1196.setTransform(-6.6481,96.3551,0.7281,0.7281);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#373535").s().p("AgVAHIAGgWIAkAJIgEAVg");
	this.shape_1197.setTransform(-6.6481,96.3551,0.7281,0.7281);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgWIglgHIgEAWg");
	this.shape_1198.setTransform(-11.5807,95.2994,0.7281,0.7281);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1199.setTransform(-11.5807,95.2994,0.7281,0.7281);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgXIglgHIgEAWg");
	this.shape_1200.setTransform(-16.5316,94.2437,0.7281,0.7281);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1201.setTransform(-16.5316,94.2437,0.7281,0.7281);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#373535").ss(2,1,1).p("AgQgOIgEAVIAkAIIAFgVg");
	this.shape_1202.setTransform(8.2228,99.504,0.7281,0.7281);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1203.setTransform(8.2228,99.504,0.7281,0.7281);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#373535").ss(2,1,1).p("AgUAHIAlAJIAEgWIgkgIg");
	this.shape_1204.setTransform(3.2719,98.4665,0.7281,0.7281);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#373535").s().p("AgUAHIAFgWIAkAIIgEAXg");
	this.shape_1205.setTransform(3.2719,98.4665,0.7281,0.7281);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgWIglgIIgFAWg");
	this.shape_1206.setTransform(-1.6608,97.4108,0.7281,0.7281);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#373535").s().p("AgVAIIAFgXIAlAIIgEAXg");
	this.shape_1207.setTransform(-1.6608,97.4108,0.7281,0.7281);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIglgIIgEAVg");
	this.shape_1208.setTransform(23.0755,102.6711,0.7281,0.7281);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1209.setTransform(23.0755,102.6711,0.7281,0.7281);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgFAVg");
	this.shape_1210.setTransform(18.1428,101.6154,0.7281,0.7281);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1211.setTransform(18.1428,101.6154,0.7281,0.7281);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIgmgIIgFAVg");
	this.shape_1212.setTransform(13.1919,100.5597,0.7281,0.7281);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#373535").s().p("AgVAHIAGgVIAlAIIgGAVg");
	this.shape_1213.setTransform(13.1919,100.5597,0.7281,0.7281);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgVIgmgJIgFAXg");
	this.shape_1214.setTransform(37.9464,105.8201,0.7281,0.7281);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#373535").s().p("AgUAIIAEgXIAmAJIgGAWg");
	this.shape_1215.setTransform(37.9464,105.8201,0.7281,0.7281);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1216.setTransform(33.0137,104.7826,0.7281,0.7281);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1217.setTransform(33.0137,104.7826,0.7281,0.7281);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgVIglgIIgEAVg");
	this.shape_1218.setTransform(28.0628,103.7268,0.7281,0.7281);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgFAVg");
	this.shape_1219.setTransform(28.0628,103.7268,0.7281,0.7281);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#373535").ss(2,1,1).p("AAQAQIAFgXIglgHIgFAWg");
	this.shape_1220.setTransform(52.7991,108.9872,0.7281,0.7281);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1221.setTransform(52.7991,108.9872,0.7281,0.7281);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#373535").ss(2,1,1).p("AARAQIAEgWIgkgIIgFAWg");
	this.shape_1222.setTransform(47.8664,107.9315,0.7281,0.7281);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1223.setTransform(47.8664,107.9315,0.7281,0.7281);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgVIgkgIIgFAVg");
	this.shape_1224.setTransform(42.9155,106.894,0.7281,0.7281);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#373535").s().p("AgUAHIAFgVIAkAIIgEAVg");
	this.shape_1225.setTransform(42.9155,106.894,0.7281,0.7281);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAEgWIglgIIgEAWg");
	this.shape_1226.setTransform(67.67,112.1543,0.7281,0.7281);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#373535").s().p("AgUAHIAEgWIAlAIIgEAXg");
	this.shape_1227.setTransform(67.67,112.1543,0.7281,0.7281);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#373535").ss(2,1,1).p("AAQAPIAFgWIglgIIgFAXg");
	this.shape_1228.setTransform(62.7373,111.0986,0.7281,0.7281);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#373535").s().p("AgVAIIAGgXIAkAJIgFAVg");
	this.shape_1229.setTransform(62.7373,111.0986,0.7281,0.7281);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#373535").ss(2,1,1).p("AARAPIAFgWIgmgHIgFAWg");
	this.shape_1230.setTransform(57.7864,110.0429,0.7281,0.7281);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#373535").s().p("AgUAHIAEgVIAlAIIgEAVg");
	this.shape_1231.setTransform(57.7864,110.0429,0.7281,0.7281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy3, new cjs.Rectangle(-705.9,-63.8,806.1,178.5), null);


(lib.StarIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SquarePiececopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(3).p("AEjlSQBFAAAwAwQAwAxAABEIAAFbQAABFgwAwQgwAwhFAAIpFAAQhEAAgwgwQgwgxAAhEIAAlbQAAhEAwgxQAwgwBEAAg");
	this.shape.setTransform(-328.347,484.8124,0.6897,0.6897);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkiFTQhEAAgwgwQgwgxgBhEIAAlbQABhEAwgxQAwgwBEAAIJFAAQBFAAAvAwQAxAxAABEIAAFbQAABFgxAwQgvAwhFAAg");
	this.shape_1.setTransform(-328.347,484.8124,0.6897,0.6897);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(3).p("AKiuOIAAcdQAABYg/A+Qg+A+hYAAIuZAAQhYAAg+g+Qg/g+AAhYIAA8dQAAhXA/g/QA+g+BYAAIOZAAQBYAAA+A+QA/A+AABYg");
	this.shape_2.setTransform(-328.347,524.6062,0.6897,0.6897);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnMRjQhYAAg+g+Qg/g+AAhYIAA8dQAAhXA/g/QA+g+BYAAIOZAAQBYAAA/A+QA9A+ABBYIAAcdQgBBYg9A+Qg/A+hYAAg");
	this.shape_3.setTransform(-328.347,524.6062,0.6897,0.6897);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-382.1,445.7,101.70000000000005,157.90000000000003);


(lib.RoundedSquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#292929").ss(3).p("AjDBiIGHAAQAAhRg5g4Qg6g6hRAAQhQAAg5A6Qg6A4AABRg");
	this.shape.setTransform(-455.4468,150.8117,0.6647,0.6647);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6D6D6D").s().p("AjDBiQAAhSA6g4QA5g5BQAAQBRAAA6A5QA5A4AABSg");
	this.shape_1.setTransform(-455.4468,150.8117,0.6647,0.6647);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#292929").ss(3).p("AptkHITaAAQBuAABNBNQBOBOAABsQAABthOBOQhNBNhuAAIzaAAQhtAAhNhNQhOhOAAhtQAAhsBOhOQBNhNBtAAg");
	this.shape_2.setTransform(-453.4527,175.2899,0.6647,0.6647);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#624830").s().p("AptEIQhtAAhNhNQhOhOAAhtQAAhsBOhOQBNhNBtAAITaAAQBuAABNBNQBOBOAABsQAABthOBOQhNBNhuAAg");
	this.shape_3.setTransform(-453.4527,175.2899,0.6647,0.6647);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#292929").ss(3).p("ADGCFImLAAIAAkJIGLAAg");
	this.shape_4.setTransform(-456.1614,201.9285,0.6647,0.6647);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CE633A").s().p("AjFCFIAAkJIGLAAIAAEJg");
	this.shape_5.setTransform(-456.1614,201.9285,0.6647,0.6647);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#292929").ss(3).p("EBSvgSZMil+AiWQggAHgSAcQgSAbAGAhQAHAgAcASQAbASAhgGMCl+giWQAggHASgcQATgbgHghQgHgggcgSQgbgSghAGg");
	this.shape_6.setTransform(-437.9582,174.3593,0.6647,0.6647);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5D5D5B").s().p("EhTqASOQgcgSgHggQgGghASgbQASgcAggHMCl+giWQAhgGAbASQAcASAHAgQAHAhgTAbQgSAcggAHMil+AiWQgJABgIAAQgXAAgUgNg");
	this.shape_7.setTransform(-437.9582,174.3593,0.6647,0.6647);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#292929").ss(3).p("EBSpAS2MilygjPQghgGgSgcQgSgcAHggQAHghAcgSQAbgSAhAHMClyAjPQAgAHATAcQASAbgHAhQgHAggcASQgcASgggHg");
	this.shape_8.setTransform(-456.8095,173.8354,0.6647,0.6647);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D5D5B").s().p("EBSpAS2MilygjPQghgGgSgcQgSgcAHggQAHghAcgSQAbgSAhAHMClyAjPQAgAHATAcQASAbgHAhQgHAggcASQgUANgWAAQgJAAgJgCg");
	this.shape_9.setTransform(-456.8095,173.8354,0.6647,0.6647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-825.6,88.9,747.5,169.6);


(lib.Slots = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.slot0 = new lib.Symbol1();
	this.slot0.name = "slot0";
	this.slot0.setTransform(370,592.35,0.8258,0.8258,0,0,0,72.2,77.5);
	this.slot0.alpha = 0.2305;

	this.slot1 = new lib.Slotcopy3();
	this.slot1.name = "slot1";
	this.slot1.setTransform(584.4,393.7,1,1,0,0,0,-156.6,31.6);
	this.slot1.alpha = 0.2305;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot1},{t:this.slot0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(35.1,298.3,806.1,352.7), null);


(lib.StarPiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Icon
	this.instance = new lib.StarIcon("single",0);
	this.instance.setTransform(0,-3.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Pieces = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.piece0 = new lib.SquarePiececopy();
	this.piece0.name = "piece0";
	this.piece0.setTransform(239.2,196.35,1,1,0,0,0,-137.8,11.1);
	new cjs.ButtonHelper(this.piece0, 0, 1, 1);

	this.piece1 = new lib.RoundedSquarePiece();
	this.piece1.name = "piece1";
	this.piece1.setTransform(820.4,192.25);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.piece0_1 = new lib.StarPiece();
	this.piece0_1.name = "piece0_1";
	this.piece0_1.setTransform(682.5,159.35,1,1,0,0,0,0,11.1);
	new cjs.ButtonHelper(this.piece0_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece0_1},{t:this.piece1},{t:this.piece0}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(-5.2,281.2,747.5,507.59999999999997), null);


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
	this.instance = new lib.Symbol16();
	this.instance.setTransform(-79.05,-70.05,1,1,0,0,0,15,50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape.setTransform(120.068,27.7973,0.3724,0.3724);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(60.2379,41.7345,0.3716,0.3716);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(59.1259,45.207,0.3724,0.3724);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.3403,46.2135,0.3724,0.3724);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.3328,46.1856,0.3724,0.3724);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(49.1679,40.8995,0.3724,0.3724);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(49.1618,40.9273,0.3724,0.3724);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(49.6313,40.6944,0.3716,0.3716);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.439,44.0798,0.3724,0.3724);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.5003,46.3718,0.3724,0.3724);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.4911,46.3345,0.3724,0.3724);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.3158,41.0578,0.3724,0.3724);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.3121,41.0763,0.3724,0.3724);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.6135,44.3334,0.3724,0.3724);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.5949,44.2469,0.3724,0.3724);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(49.0193,44.3048,0.3724,0.3724);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(49.0193,44.3048,0.3724,0.3724);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(44.0847,36.4095,0.3724,0.3724);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(38.0794,44.7424,0.3724,0.3724);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.5502,52.4888,0.3724,0.3724);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.3884,47.6008,0.3724,0.3724);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(39.9788,41.7724,0.3724,0.3724);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(44.0568,36.3071,0.3724,0.3724);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(40.2115,37.8433,0.3724,0.3724);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.6678,51.2226,0.3724,0.3724);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.4582,41.0741,0.3724,0.3724);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.3455,34.0307,0.3724,0.3724);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.5448,37.3157,0.3724,0.3724);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(116.1855,37.0923,0.3724,0.3724);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(117.88,36.3443,0.3724,0.3724);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(116.8651,35.9254,0.3724,0.3724);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(114.0999,31.9311,0.3724,0.3724);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.4719,31.433,0.3724,0.3724);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(116.8372,31.4403,0.3724,0.3724);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(116.8558,32.4898,0.3724,0.3724);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(116.7162,32.4805,0.3724,0.3724);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(117.8893,32.257,0.3724,0.3724);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.6324,32.0604,0.3724,0.3724);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(114.7051,32.4246,0.3724,0.3724);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.4444,33.4394,0.3724,0.3724);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.5635,32.82,0.3724,0.3724);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(118.2524,31.6283,0.3724,0.3724);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(118.958,34.6312,0.3724,0.3724);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(115.2102,38.5323,0.3724,0.3724);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(115.0147,37.5006,0.3724,0.3724);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(114.7695,35.8366,0.3724,0.3724);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.5169,36.619,0.3724,0.3724);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(117.9917,32.6108,0.3724,0.3724);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(117.7869,32.5456,0.3724,0.3724);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.6193,32.5736,0.3724,0.3724);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(116.9862,32.5736,0.3724,0.3724);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.5579,32.5736,0.3724,0.3724);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(117.8521,33.6629,0.3724,0.3724);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(116.8139,33.7374,0.3724,0.3724);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.6601,33.6538,0.3724,0.3724);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.6601,33.6538,0.3724,0.3724);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(116.7441,33.3463,0.3724,0.3724);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(116.7534,33.3548,0.3724,0.3724);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(117.7124,33.5789,0.3724,0.3724);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(117.7124,33.5789,0.3724,0.3724);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(117.8334,33.338,0.3724,0.3724);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(117.8334,33.338,0.3724,0.3724);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.463,34.566,0.3724,0.3724);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.4156,40.7668,0.3724,0.3724);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.3662,39.752,0.3724,0.3724);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(115.8596,47.8964,0.3724,0.3724);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(115.8767,46.3793,0.3724,0.3724);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(115.8041,44.9269,0.3724,0.3724);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.4887,43.4308,0.3724,0.3724);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.4499,41.9033,0.3724,0.3724);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.3603,39.2329,0.3724,0.3724);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.3582,39.212,0.3724,0.3724);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.2784,38.7837,0.3724,0.3724);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(113.2207,44.2633,0.3724,0.3724);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.6481,31.4853,0.3724,0.3724);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.3332,32.3408,0.3724,0.3724);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(102.1933,38.6533,0.3724,0.3724);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.6064,45.299,0.3724,0.3724);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(96.9511,42.7438,0.3724,0.3724);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(97.1175,40.1782,0.3724,0.3724);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.654,41.6099,0.3724,0.3724);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.5327,39.8374,0.3724,0.3724);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(98.9517,37.9679,0.3724,0.3724);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.3241,36.4111,0.3724,0.3724);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(97.0803,46.0308,0.3724,0.3724);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.5365,44.1202,0.3724,0.3724);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(97.9927,42.0719,0.3724,0.3724);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(95.2088,48.6604,0.3724,0.3724);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(98.961,34.6694,0.3724,0.3724);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(96.7823,41.6886,0.3724,0.3724);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(96.773,41.67,0.3724,0.3724);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(95.1344,48.6622,0.3724,0.3724);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(95.1352,48.6612,0.3724,0.3724);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(98.9517,34.6452,0.3724,0.3724);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(98.961,34.6498,0.3724,0.3724);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.3443,42.5556,0.3724,0.3724);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.3316,42.5219,0.3724,0.3724);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.5825,29.6141,0.3724,0.3724);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.5645,32.9253,0.3724,0.3724);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.6811,30.6556,0.3724,0.3724);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(70.713,30.5066,0.3724,0.3724);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.5304,30.7394,0.3724,0.3724);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.5211,30.7301,0.3724,0.3724);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(70.8064,33.8309,0.3724,0.3724);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(69.9587,33.4953,0.3724,0.3724);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(70.7097,33.2812,0.3724,0.3724);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.5415,32.8529,0.3724,0.3724);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(69.9587,32.9087,0.3724,0.3724);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.5415,32.8343,0.3724,0.3724);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(69.968,32.8994,0.3724,0.3724);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.5104,32.7244,0.3724,0.3724);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(69.9224,32.7254,0.3724,0.3724);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.6028,32.2694,0.3724,0.3724);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(69.8035,32.3762,0.3724,0.3724);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.6558,32.5124,0.3724,0.3724);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(71.7441,29.7149,0.3716,0.3716);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.6384,33.1694,0.3724,0.3724);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSCDIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(87.1273,42.9827,0.3724,0.3724);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(87.1087,43.0014,0.3724,0.3724);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.5113,45.0217,0.3724,0.3724);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.5105,45.0301,0.3724,0.3724);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(106.9587,39.3051,0.3724,0.3724);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(106.9494,39.3051,0.3724,0.3724);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(107.0891,45.3104,0.3724,0.3724);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(107.0891,45.329,0.3724,0.3724);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(64.8007,39.3051,0.3724,0.3724);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(64.7913,39.3051,0.3724,0.3724);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(64.931,45.3104,0.3724,0.3724);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(64.931,45.329,0.3724,0.3724);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(50.9745,46.0037,0.3724,0.3724);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.6685,40.7358,0.3724,0.3724);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.5523,38.0016,0.3724,0.3724);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(80.7123,37.8619,0.3724,0.3724);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.4801,34.9198,0.3724,0.3724);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.5732,39.1561,0.3724,0.3724);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.5918,38.3647,0.3724,0.3724);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.6197,37.6385,0.3724,0.3724);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.655,36.1301,0.3724,0.3724);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(74.0739,44.2024,0.3724,0.3724);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(67.7335,43.8393,0.3724,0.3724);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(74.7913,44.8182,0.3724,0.3724);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(67.0813,44.3045,0.3724,0.3724);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(68.2175,35.7112,0.3724,0.3724);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.2356,33.0621,0.3724,0.3724);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(67.217,33.0708,0.3724,0.3724);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.6484,37.4709,0.3724,0.3724);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.6462,37.443,0.3724,0.3724);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(72.7904,36.1892,0.3724,0.3724);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.4827,38.0691,0.3724,0.3724);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.4827,38.0877,0.3724,0.3724);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.6384,36.1991,0.3724,0.3724);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(70.7596,42.1674,0.3724,0.3724);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.4018,45.748,0.3724,0.3724);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(72.515,43.0071,0.3716,0.3716);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(54.1587,51.9953,0.3724,0.3724);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.401,54.0809,0.3724,0.3724);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.3598,37.564,0.3724,0.3724);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(50.0062,34.3798,0.3724,0.3724);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(47.0362,55.7568,0.3724,0.3724);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(46.9151,32.9553,0.3724,0.3724);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(53.0601,54.8257,0.3724,0.3724);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(53.7956,33.9701,0.3724,0.3724);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.2284,44.8542,0.3724,0.3724);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.3028,45.4035,0.3724,0.3724);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.322,45.3932,0.3724,0.3724);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.5021,46.4282,0.3724,0.3724);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.5283,46.3718,0.3724,0.3724);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.3589,41.4313,0.3724,0.3724);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.3589,41.1041,0.3724,0.3724);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.6854,44.266,0.3724,0.3724);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.6438,44.266,0.3724,0.3724);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.6061,52.526,0.3724,0.3724);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.4815,47.6473,0.3724,0.3724);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(40.0998,41.9586,0.3724,0.3724);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.2709,36.5957,0.3724,0.3724);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.5374,38.2437,0.3724,0.3724);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(40.8167,51.2226,0.3724,0.3724);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.6537,41.2603,0.3724,0.3724);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.5969,34.1605,0.3724,0.3724);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.3394,37.3031,0.3724,0.3724);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(118.1113,36.5521,0.3724,0.3724);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(117.0905,36.1851,0.3724,0.3724);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.3606,32.0894,0.3724,0.3724);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(115.6768,31.5475,0.3724,0.3724);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(116.9544,31.5321,0.3724,0.3724);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(117.0514,32.676,0.3724,0.3724);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(116.921,32.6667,0.3724,0.3724);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(116.8645,32.2263,0.3724,0.3724);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(114.9928,32.5075,0.3724,0.3724);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.649,33.6341,0.3724,0.3724);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(113.7769,33.0145,0.3724,0.3724);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.4801,31.8041,0.3724,0.3724);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(119.2001,34.8095,0.3724,0.3724);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.4108,38.7105,0.3724,0.3724);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(115.2195,37.6867,0.3724,0.3724);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(114.965,36.0228,0.3724,0.3724);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(117.7217,36.7819,0.3724,0.3724);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(118.1966,32.7877,0.3724,0.3724);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(117.9824,32.7318,0.3724,0.3724);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(117.8055,32.7505,0.3724,0.3724);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(117.1817,32.7505,0.3724,0.3724);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(116.7534,32.7505,0.3724,0.3724);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(118.0491,33.8491,0.3724,0.3724);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(117.0141,33.9236,0.3724,0.3724);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(116.854,33.8395,0.3724,0.3724);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(116.854,33.8395,0.3724,0.3724);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(116.9396,33.5241,0.3724,0.3724);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(116.9396,33.5241,0.3724,0.3724);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(117.9079,33.7599,0.3724,0.3724);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(117.9079,33.7599,0.3724,0.3724);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(114.6652,34.7522,0.3724,0.3724);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.6147,40.9534,0.3724,0.3724);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.5617,39.9382,0.3724,0.3724);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(116.0644,48.0733,0.3724,0.3724);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(116.0732,46.558,0.3724,0.3724);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(115.9996,45.1131,0.3724,0.3724);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(115.6905,43.6159,0.3724,0.3724);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.6548,42.0895,0.3724,0.3724);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(117.4902,35.8705,0.3716,0.3716);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.4978,39.3144,0.3724,0.3724);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.4723,38.9699,0.3724,0.3724);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.4181,44.4494,0.3724,0.3724);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.4358,30.6835,0.3724,0.3724);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.4358,30.6835,0.3724,0.3724);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.3334,32.406,0.3724,0.3724);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.3859,38.8395,0.3724,0.3724);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.3835,45.3674,0.3724,0.3724);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(97.1468,42.93,0.3724,0.3724);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.3223,40.3644,0.3724,0.3724);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(97.8497,41.7961,0.3724,0.3724);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(98.7977,40.0051,0.3724,0.3724);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.2577,42.2396,0.3724,0.3724);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(95.1635,48.8373,0.3724,0.3724);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(99.1379,34.6788,0.3724,0.3724);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(96.9592,41.8655,0.3724,0.3724);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(96.9685,41.8562,0.3724,0.3724);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.2833,48.8268,0.3724,0.3724);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.3214,48.8992,0.3724,0.3724);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(99.1751,34.7568,0.3724,0.3724);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(99.1018,34.6452,0.3724,0.3724);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.5229,42.6353,0.3724,0.3724);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.5179,42.7034,0.3724,0.3724);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.3228,43.1689,0.3724,0.3724);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.3135,43.1783,0.3724,0.3724);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(79.7068,45.208,0.3724,0.3724);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(79.7154,45.2163,0.3724,0.3724);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(107.1543,39.4913,0.3724,0.3724);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(107.145,39.4913,0.3724,0.3724);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.2846,45.4966,0.3724,0.3724);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.2846,45.5059,0.3724,0.3724);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_250.setTransform(66.1151,36.0219,0.3716,0.3716);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(64.9962,39.4913,0.3724,0.3724);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(65.1265,45.4966,0.3724,0.3724);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(65.1265,45.5059,0.3724,0.3724);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(51.17,46.1899,0.3724,0.3724);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(50.864,40.9173,0.3724,0.3724);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(78.7478,38.1878,0.3724,0.3724);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(80.9079,38.0482,0.3724,0.3724);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.6066,45.9342,0.3724,0.3724);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(72.7101,43.1929,0.3716,0.3716);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.2891,52.135,0.3724,0.3724);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.4848,54.2578,0.3724,0.3724);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.3784,37.7502,0.3724,0.3724);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(50.1273,34.5567,0.3724,0.3724);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(47.0455,55.9337,0.3724,0.3724);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(47.0827,33.1322,0.3724,0.3724);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(53.209,55.0306,0.3724,0.3724);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(53.7956,34.1564,0.3724,0.3724);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.421,54.3416,0.3724,0.3724);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.4303,54.323,0.3724,0.3724);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(79.0451,50.4289,0.3716,0.3716);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(77.9657,53.9319,0.3724,0.3724);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(104.2028,61.4061,0.3724,0.3724);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.3983,60.0396,0.3724,0.3724);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.4915,46.094,0.3724,0.3724);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.6558,46.264,0.3724,0.3724);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.6696,46.0738,0.3724,0.3724);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgNALQgGgEAAgHQAAgFAGgFQAGgGAIAAQAIAAAFAGQAGAEAAAGQAAAHgGAEQgGAFgHABQgIgBgGgFg");
	this.shape_277.setTransform(664.3,49.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgvBAQgEgFgBgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQANAAADAOQAUgQAbAAQAZAAgBAgIAAAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgEAFQgFAEgIAAQgHAAgEgEg");
	this.shape_278.setTransform(653.2,44.175);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgpA0QgVgOABgcQAAgfAQgVQASgYAdAAQAWAAAOAIQASAJAAATQABANgQAKQgHAFgUAIIgoASQAGAHAIADQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAAMQgBANgUAJQgRAIgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAPgHAKgGQgIgFgOAAQgJAAgJAHg");
	this.shape_279.setTransform(639.75,44.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_280.setTransform(627.075,42.075);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGAAAFAEQAFAFAAAGIAAACQAIgGAIgCQAHgCAJAAQAcAAANAYQAJASAAAdQAAAZgPASQgQASgcABQgJgBgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAyQALADAKAAQANAAAGgIQAGgIAAgNIgBgYQgEgOgLAAQgIAAgHAEg");
	this.shape_281.setTransform(614.675,47.05);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_282.setTransform(601.0742,44.225);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AglA2QgUgQAAgbQAAgXARgaQAUgeAZAAQAMAAASAHQAUAJAAALQAAAGgEAEQgEAFgHAAQgGAAgHgFQgHgGgPAAQgJAAgLASQgKASAAAMQAAANAJAHQAJAHAOAAQAIAAAMgGQAMgGACAAQAHAAAFAFQAFAEgBAGQABAKgVAKQgTAIgLAAQgaAAgSgPg");
	this.shape_283.setTransform(588,44.075);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_284.setTransform(578.625,41.225);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgLBgQgFgEAAgIIAAinQAAgIAFgFQAFgDAGAAQAIAAAEAEQAFAEAAAIIAAChQAAAWgRAAQgGABgFgFg");
	this.shape_285.setTransform(571.275,40.65);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgpA0QgVgOAAgcQAAgfARgVQASgYAdAAQAWAAAOAIQASAJAAATQAAANgOAKQgHAFgVAIIgoASQAFAHAJADQAIADAKAAQAQAAAMgHQAKgFAGgBQANABAAAMQAAANgVAJQgRAIgTAAQgcgBgTgOgAgQgdQgIAIgEAQIAbgNQAQgHAJgGQgIgFgOAAQgKAAgIAHg");
	this.shape_286.setTransform(560.75,44.1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AA0BdQgFgFAAgHIgBgaIAAgbIAAgMQgUABgbAFIgvAIIgCAaIAAAaQAAAHgGAEQgEAEgHABQgHgBgFgEQgFgEAAgIQAAgLACgZIADgjIAAgtIABguQAAgGAEgFQAGgEAHgBQAHABAEAEQAFAFAAAGIgBAcIAAAcIgBAMIgBAMIAvgIQAagFAVgCIABgsQABgJAFgMQAHgPAIgBQAHAAAFAFQAFAEAAAHIgBAEQgBAJAAAGIgBALIgBAKIgCAjIgBAiIACAaIABAbQAAAHgFAEQgFAGgGAAQgIgBgFgEg");
	this.shape_287.setTransform(544.6,41);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgpA0QgUgOAAgcQAAgfAQgVQASgYAeAAQAVAAAOAIQATAJAAATQgBANgPAKQgGAFgVAIIgoASQAFAHAJADQAIADAKAAQAQAAALgHQALgFAGgBQANABAAAMQgBANgUAJQgRAIgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_288.setTransform(516.7,44.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAcBaQgDgLgCgRQgCgSAAgLIAAgJIAAgJIAAgLQgBgFgFAAQgOAAgKALQgFAGgKASQAAAsgEAJQgFAKgKAAQgHAAgGgFQgFgEAAgHIABgHQABgCABgfIAAhQIAAgEIABgTIgBgLIgBgMQAAgGAFgFQAFgFAHABQAMAAAEANQACAHAAAPIAAAYIgBAZQAJgKAKgEQAJgEAMAAQAVAAAJALQAHAKABAQIACAfIACAXIAEAZIABAEQAAAGgFAFQgGAEgHAAQgMABgEgMg");
	this.shape_289.setTransform(502.925,40.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_290.setTransform(489.575,42.075);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgXBnQgFgFAAgGIAAgDQADgSAAgPIAAg8IgIABIgHAAQgHAAgFgEQgFgEAAgIQAAgLAMgDQAFgCAQgBIACgNQADgcAMgNQANgQAdAAQAXAAAAAQQAAAPgVAAQgPAAgHALQgFAHgBARIgBADIAYgBQAWAAAAAQQAAAQgYgBIgXABIAAAgIAAAhQAAAWgDANQgDANgMAAQgHAAgFgEg");
	this.shape_291.setTransform(466.325,41.425);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_292.setTransform(453.3742,44.225);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgiBAQgSgHAAgOQAAgMAPAAQAFAAALAEQAKADAGAAQAYAAAAgKQAAgGgSgIQgYgLgGgDQgSgNAAgRQAAgYAagJQAQgFAeAAQAMAAAGADQAHAEABAMQAAAWgMAAQgMAAgCgKIgKgBQgdAAAAAIQAAAFAQAIQAZALAIAGQASAMAAAQQAAAVgTALQgQAJgWAAQgQAAgOgFg");
	this.shape_293.setTransform(429.9,44.075);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_294.setTransform(418.075,42.075);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAYAAABAgIgBAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgHAAQgJAAgDgEg");
	this.shape_295.setTransform(406.4,44.175);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAeA4IgUAIQgJADgFAAQgdAAgPgPQgPgQAAgfQABgdAVgVQAWgVAdAAQAMAAAPAGQASAJABAKQAAAEgEADIgCANIAAAQQAAAXADAKIAGANIAFAMQAAAGgFAEQgFAEgGAAQgHAAgLgLgAgQgYQgNANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIAAgJIACgMIgEgBIgDgBQgQAAgMANg");
	this.shape_296.setTransform(393.3,44.15);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgyBiQgFgFAAgHIAAgtIAAgwQAAgagBgTIgCgYQAAgLAEgGQAGgJAJABQAGAAAFAEQAFAFAAAGIAAACQAIgGAIgCQAHgCAJAAQAcAAANAYQAJASAAAdQAAAZgPASQgQASgcABQgJgBgMgCIAAAyQAAAHgFAFQgFAFgHAAQgHAAgFgFgAgGg5QgIADgIAHIABAyQALADAKAAQANAAAGgIQAGgIAAgNIgBgYQgEgOgLAAQgIAAgHAEg");
	this.shape_297.setTransform(379.775,47.05);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgiBAQgSgHAAgOQAAgMAOAAQAGAAALAEQAKADAGAAQAYAAAAgKQAAgGgRgIQgYgLgIgDQgRgNAAgRQAAgYAagJQAQgFAdAAQANAAAFADQAJAEgBAMQABAWgMAAQgMAAgDgKIgKgBQgcAAAAAIQAAAFARAIQAYALAIAGQASAMAAAQQAAAVgUALQgPAJgWAAQgQAAgOgFg");
	this.shape_298.setTransform(355.85,44.075);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAYA8QgPAGgQAAQgRAAgMgHQgNgJgDgQQgFgeAAgXQAAgQAEgUQACgOAOAAQAHAAAFAFQAFAEAAAHIgBARIgCARQAAARABAMQABANADAIIAGACIAFABQANAAAQgEIAAgVIgBgUQAAgZADgSQACgPAOAAQAIAAAFAFQAFAEgBAHIgCArIAAAYIAAAZIABAHIAAAIQAAAHgFAEQgFAFgHAAQgKAAgFgKg");
	this.shape_299.setTransform(343.3023,44.225);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_300.setTransform(330.1742,44.225);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_301.setTransform(320.575,41.225);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgvBAQgFgFAAgHIAAhPIABgLIAAgLQAAgHAFgFQADgEAIAAQAOAAACAOQAVgQAaAAQAYAAABAgIgBAIQgBATgQAAQgPAAAAgQIgBgMQgaAEgMAYIAAA8QAAAHgFAFQgEAEgHAAQgJAAgDgEg");
	this.shape_302.setTransform(311,44.175);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAeA4IgUAIQgJADgFAAQgdAAgPgPQgPgQAAgfQABgdAVgVQAWgVAdAAQAMAAAPAGQASAJABAKQAAAEgEADIgCANIAAAQQAAAXADAKIAGANIAFAMQAAAGgFAEQgFAEgGAAQgHAAgLgLgAgQgYQgNANAAARQAAAPAGAJQAGAIAMAAQAGAAAHgCQAGgDAHgFQgEgcAAgOIAAgJIACgMIgEgBIgDgBQgQAAgMANg");
	this.shape_303.setTransform(297.9,44.15);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgSA2IgnhhQgCgEgBgDQAAgHAGgFQAFgEAHAAQAKAAAFAJQAHAPAUA2IARgpIAKgbQAGgJAKAAQAGAAAGAFQAFAEABAHQgBAEgTAsIgaA2QgBAGgEAEQgFAEgFAAQgMAAgGgNg");
	this.shape_304.setTransform(285,44);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgpA0QgUgOAAgcQAAgfAQgVQASgYAeAAQAVAAAOAIQATAJAAATQgBANgPAKQgGAFgVAIIgoASQAGAHAIADQAIADAKAAQARAAAKgHQALgFAGgBQANABAAAMQgBANgUAJQgRAIgTAAQgcgBgTgOgAgPgdQgJAIgFAQIAcgNQAPgHAKgGQgIgFgNAAQgLAAgHAHg");
	this.shape_305.setTransform(260.65,44.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAcBaQgDgLgCgRQgCgSAAgLIAAgJIAAgJIAAgLQgBgFgFAAQgOAAgKALQgFAGgKASQAAAsgEAJQgFAKgKAAQgHAAgGgFQgFgEAAgHIABgHQABgCABgfIAAhQIAAgEIABgTIgBgLIgBgMQAAgGAFgFQAFgFAHABQAMAAAEANQACAHAAAPIAAAYIgBAZQAJgKAKgEQAJgEAMAAQAVAAAJALQAHAKABAQIACAfIACAXIAEAZIABAEQAAAGgFAFQgGAEgHAAQgMABgEgMg");
	this.shape_306.setTransform(246.875,40.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgKBVQgGgEAAgHIABgNIAAgNIgCg/IgXgCQgPgBAAgOQAAgHAEgFQAFgFAHAAIAVACIAAgNIgBgMQAAgHAFgFQAFgEAHAAQARAAAAAeIAAAKIAMgBQAOAAAFACQAKADAAAMQAAAHgFAEQgEAFgIAAIgGAAIgGAAIgLABIACA/IAAAGIAAAHQAAAcgSAAQgFAAgFgEg");
	this.shape_307.setTransform(233.525,42.075);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AAZA4IgEgZQgBgNAAgMIAAgKIAAgLIABgEIAAgGQAAgKgFAAQgLAAgJANQgKAOgFATIgBALIgBAMIgBAKIgBALQAAAHgEAEQgFAFgIAAQgGAAgFgFQgFgEAAgHIgBgKIgBgLIACghIACghIAAgLIgBgLQAAgHAFgFQAFgEAHAAQAQAAABATIAAABQASgRATAAQAXAAAIATQAGANABAaIAAAJIAAAHQAAAJACAPQADAPgBAJQAAAHgEAEQgFAFgIAAQgPAAgBgPg");
	this.shape_308.setTransform(210.35,43.95);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgPBZQgEgFAAgHIgBgWIAAgXIABgbIABgaQAAgHAFgFQAFgEAHAAQAGAAAFAEQAFAFAAAHIgBAaIgCAbIABAXIAAAWQAAAHgEAFQgFAEgHAAQgHAAgFgEgAgLg9QgFgFAAgIQAAgIAFgFQAGgFAHAAQAIAAAGAFQAFAFAAAIQAAAIgFAFQgGAFgIAAQgHAAgGgFg");
	this.shape_309.setTransform(200.475,41.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgnAzQgSgRgBgcQgBgaAQgVQASgZAgAAQAZAAAOAUQANARAAAaQAAAcgPAUQgRAWgcAAQgWAAgQgQgAgRgUQgHAMAAAOQAAAPAIAIQAHAGAIAAQAKAAAIgHQAJgJAAgOQACgmgWgBQgOAAgJAOg");
	this.shape_310.setTransform(189.9242,44.225);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("Ag0BUQgZgRAAgYQAAgTARAAQARAAAAATQAAAHANAJQAMAIALAAQAEAAACgRIACgmQACgaAAgqIgBgIIgCAAIgOAAIgOAAQgHAAgFgFQgGgEAAgIQAAgRAWAAIAMABIAMAAIAXgBIAXgBQAgAAAAATQAAAGgEAFQgFAFgIAAIgHAAIgHgBIgKAAIAAAJQAABXgMAnQgJAegXAAQgXAAgWgQg");
	this.shape_311.setTransform(175.325,41.675);

	this.instance_1 = new lib.BRIGHTEDGELOGO();
	this.instance_1.setTransform(727,28,0.0876,0.0876);

	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(68.65,-223.75,0.9696,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pieces},{t:this.instance_1},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(21.1,-102.95,0.9357,0.9357);

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1));

	// Layer_3
	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#292929").ss(3).p("AQEOIQA6iGAAiSIAA+oQnsCTmZDfQmVDdkhEVQkkEZiTE5QiXFEAQFPQAOEfCLEOIUEAAQCVAACIg5QCDg2BmhjQBlhkA3iAg");
	this.shape_312.setTransform(276.6818,389.7418,0.5122,0.5122);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AuiU7QiLkOgOkfQgQlOCXlEQCTk5EkkZQEhkVGVjeQGZjfHsiSIAAeoQAACSg6CFQg3CBhlBjQhmBjiDA3QiIA4iVAAg");
	this.shape_313.setTransform(276.6818,389.8728,0.5122,0.5122);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#292929").ss(3).p("Az5mzMAn0AAAQBkAABIBHQBHBHAABlIAAGBQAABlhHBHQhIBHhkAAMgn0AAAQhlAAhHhHQhIhHAAhlIAAmBQAAhlBIhHQBHhHBlAAg");
	this.shape_314.setTransform(410.2566,320.603,0.5122,0.5122);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("Az6G0QhkAAhHhHQhHhHgBhlIAAmBQABhlBHhHQBHhHBkAAMAn1AAAQBkAABIBHQBHBHAABlIAAGBQAABlhHBHQhIBHhkAAg");
	this.shape_315.setTransform(410.2566,320.603,0.5122,0.5122);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#292929").ss(3).p("EA34gbzQjSAujODxQkAEtjsJOMhmVAK/ICqBHQDbBmD4CdQMZH0MKNUIITjQQKOj5JsjRQfCqeOHgTQCwgECLhrQCLhsAuiqIGM2xQAVhMgVhMQgThHgyg2Qg0g2hFgXQhKgZhNARg");
	this.shape_316.setTransform(674.7861,320.6736,0.5122,0.5122);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("EgzDAGxQj3icjchnIiqhHMBmVgK+QDspOEBktQDOjyDRgtQBOgRBJAYQBGAXAzA2QAzA3ATBHQAUBLgVBNImLWxQguCpiLBsQiLBsiwADQuIAT/CKeQpsDRqOD6IoSDPQsLtTsZn1g");
	this.shape_317.setTransform(675.9306,320.6039,0.5122,0.5122);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#292929").ss(3).p("AQY3sQHVDCHaFlQFSD+EzE3QCaCaBVBpIABAHQAOFfjTFLQjMFAmCEBQmCECn8CcQoPCipHAcQpIAcodhtQoKhqmajcQmajdjpkrQjyk3gRlgQgRlfDSlNQDLlBGCkDQGCkDH+icQIQiiJIgdQIhgbJLDyg");
	this.shape_318.setTransform(405.2196,421.4298,0.6402,0.6402);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AwQZwQoKhqmajcQmajdjpkrQjyk3gRlgQgRlfDSlNQDLlBGCkDQGCkDH+icQIQiiJIgdQIhgbJLDyQHVDCHaFlQFSD+EzE3QCaCaBVBpIABAHQAOFfjTFLQjMFAmCEBQmCECn8CcQoPCipHAcQh2AGh2AAQnLAAmuhXg");
	this.shape_319.setTransform(405.2196,421.4298,0.6402,0.6402);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#292929").ss(3).p("EguagE2Qg0AKgeArQgeArAJA0QAKA0ArAfQNQJLAFADMBR7AAJIAAklI00AAIFXqeIiKhHIl7LlMghoAAAIAAngIibAAIAAHgI1yAAIrnoEQgsgeg0AJg");
	this.shape_320.setTransform(379.3403,538.9207,0.5122,0.5122);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Egh3AH8QgFgCtQpMQgrgegKg0QgJg0AegsQAegrA0gKQA0gJAsAeILnIEIVyAAIAAngICbAAIAAHgMAhoAAAIF7rkICKBGIlXKeIU0AAIAAEmg");
	this.shape_321.setTransform(379.3403,539.0526,0.5122,0.5122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30.3,-78.8,1084.3,645.9), null);


// stage content:
(lib.tran29 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Game
	this.instance = new lib.Symbol99();
	this.instance.setTransform(-286.1,120,1,1,0,0,0,2,36);

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
p.nominalBounds = new cjs.Rectangle(363,191.5,751.5999999999999,446.6);
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