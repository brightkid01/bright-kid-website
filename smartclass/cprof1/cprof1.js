(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Image_16 = function() {
	this.initialize(img.Image_16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.Image_17 = function() {
	this.initialize(img.Image_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,48);


(lib.BRIGHTEDGELOGO = function() {
	this.initialize(img.BRIGHTEDGELOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1601,404);


(lib.sound = function() {
	this.initialize(img.sound);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,834);// helper functions:

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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10.6,1,1).p("A1PIRMAqfgQh");
	this.shape.setTransform(136.025,283.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(10.6,1,1).p("A2UIsMAspgRX");
	this.shape_1.setTransform(142.9,280.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(10.6,1,1).p("A3ZJHMAuzgSN");
	this.shape_2.setTransform(149.8,277.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10.6,1,1).p("A4eJhMAw9gTB");
	this.shape_3.setTransform(156.675,275.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(10.6,1,1).p("A5jJ8MAzHgT3");
	this.shape_4.setTransform(163.575,272.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(10.6,1,1).p("A6oKXMA1RgUt");
	this.shape_5.setTransform(170.45,269.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(10.6,1,1).p("A7tKyMA3bgVj");
	this.shape_6.setTransform(177.35,267.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(10.6,1,1).p("A8xLMMA5jgWY");
	this.shape_7.setTransform(184.225,264.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(10.6,1,1).p("A92LnMA7tgXN");
	this.shape_8.setTransform(191.1,261.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(10.6,1,1).p("A+7MCMA93gYD");
	this.shape_9.setTransform(198,259.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(10.6,1,1).p("EggAAMdMBABgY5");
	this.shape_10.setTransform(204.875,256.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(10.6,1,1).p("EghFAM4MBCLgZv");
	this.shape_11.setTransform(211.775,253.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgiKANSMBEVgaj");
	this.shape_12.setTransform(218.65,251.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgjOANtMBGdgbZ");
	this.shape_13.setTransform(225.525,248.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgkTAOIMBIngcP");
	this.shape_14.setTransform(232.425,245.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(10.6,1,1).p("EglYAOjMBKxgdF");
	this.shape_15.setTransform(239.3,243.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgmdAO+MBM7gd7");
	this.shape_16.setTransform(246.2,240.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgniAPYMBPFgev");
	this.shape_17.setTransform(253.075,237.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgonAPzMBRPgfl");
	this.shape_18.setTransform(259.975,235);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgpsAQOMBTZggb");
	this.shape_19.setTransform(266.85,232.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgqwAQpMBVhghR");
	this.shape_20.setTransform(273.725,229.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egr1ARDMBXrgiF");
	this.shape_21.setTransform(280.625,226.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egs6AReMBZ1gi7");
	this.shape_22.setTransform(287.5,224.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egt/AR5MBb/gjx");
	this.shape_23.setTransform(294.4,221.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgvEASUMBeJgkn");
	this.shape_24.setTransform(301.275,218.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgwJASvMBgTgld");
	this.shape_25.setTransform(308.15,216.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgxOATJMBidgmR");
	this.shape_26.setTransform(315.05,213.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgySATkMBklgnH");
	this.shape_27.setTransform(321.925,210.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgzXAT/MBmvgn9");
	this.shape_28.setTransform(328.825,208.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg0cAUaMBo5goz");
	this.shape_29.setTransform(335.7,205.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg1hAU1MBrDgpp");
	this.shape_30.setTransform(342.6,202.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg2mAVPMBtNgqd");
	this.shape_31.setTransform(349.475,200.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg3rAVqMBvXgrT");
	this.shape_32.setTransform(356.35,197.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg4wAWFMBxhgsJ");
	this.shape_33.setTransform(363.25,194.825);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg50AWgMBzpgs/");
	this.shape_34.setTransform(370.125,192.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg65AW6MB1zgtz");
	this.shape_35.setTransform(377.025,189.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg7+AXVMB39gup");
	this.shape_36.setTransform(383.9,186.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg9DAXwMB6Hgvf");
	this.shape_37.setTransform(390.775,184.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg+IAYLMB8RgwV");
	this.shape_38.setTransform(397.675,181.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg/NAYmMB+bgxL");
	this.shape_39.setTransform(404.55,178.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(10.6,1,1).p("EhASAZAMCAlgx/");
	this.shape_40.setTransform(411.45,176.075);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(10.6,1,1).p("EhBWAZbMCCtgy1");
	this.shape_41.setTransform(418.325,173.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(10.6,1,1).p("EhCbAZ2MCE3gzr");
	this.shape_42.setTransform(425.225,170.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(10.6,1,1).p("EhDgAaRMCHBg0h");
	this.shape_43.setTransform(432.1,168.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,874.8,346.7);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10.6,1,1).p("AjbBWIG3ir");
	this.shape.setTransform(22,287.4875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(10.6,1,1).p("AkuB3IJdjt");
	this.shape_1.setTransform(30.275,284.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(10.6,1,1).p("AmBCXIMDkt");
	this.shape_2.setTransform(38.55,281.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10.6,1,1).p("AnUC3IOplt");
	this.shape_3.setTransform(46.85,277.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(10.6,1,1).p("AomDYIRNmv");
	this.shape_4.setTransform(55.125,274.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(10.6,1,1).p("Ap5D4ITznv");
	this.shape_5.setTransform(63.4,271.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(10.6,1,1).p("ArMEZIWZox");
	this.shape_6.setTransform(71.675,268.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(10.6,1,1).p("AsfE5IY/px");
	this.shape_7.setTransform(79.975,264.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(10.6,1,1).p("AtyFaIblqz");
	this.shape_8.setTransform(88.25,261.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(10.6,1,1).p("AvEF6IeJrz");
	this.shape_9.setTransform(96.525,258.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(10.6,1,1).p("AwXGaMAgvgMz");
	this.shape_10.setTransform(104.8,255.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(10.6,1,1).p("AxqG7MAjVgN1");
	this.shape_11.setTransform(113.1,251.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(10.6,1,1).p("Ay9HbMAl7gO1");
	this.shape_12.setTransform(121.375,248.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(10.6,1,1).p("A0QH8MAohgP3");
	this.shape_13.setTransform(129.65,245.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(10.6,1,1).p("A1iIcMArFgQ3");
	this.shape_14.setTransform(137.925,242.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(10.6,1,1).p("A21I9MAtrgR5");
	this.shape_15.setTransform(146.2,238.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(10.6,1,1).p("A4IJdMAwRgS5");
	this.shape_16.setTransform(154.5,235.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(10.6,1,1).p("A5bJ9MAy3gT5");
	this.shape_17.setTransform(162.775,232.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(10.6,1,1).p("A6uKeMA1dgU7");
	this.shape_18.setTransform(171.05,229.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(10.6,1,1).p("A8AK+MA4BgV7");
	this.shape_19.setTransform(179.325,225.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(10.6,1,1).p("A9TLfMA6ngW9");
	this.shape_20.setTransform(187.625,222.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(10.6,1,1).p("A+mL/MA9NgX9");
	this.shape_21.setTransform(195.9,219.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(10.6,1,1).p("A/5MgMA/zgY/");
	this.shape_22.setTransform(204.175,216.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(10.6,1,1).p("EghMANAMBCZgZ/");
	this.shape_23.setTransform(212.45,212.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgifANgMBE/ga/");
	this.shape_24.setTransform(220.75,209.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgjxAOBMBHjgcB");
	this.shape_25.setTransform(229.025,206.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(10.6,1,1).p("EglEAOhMBKJgdB");
	this.shape_26.setTransform(237.3,203.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgmXAPCMBMvgeD");
	this.shape_27.setTransform(245.575,199.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgnqAPiMBPVgfD");
	this.shape_28.setTransform(253.875,196.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(10.6,1,1).p("Ego9AQDMBR7ggF");
	this.shape_29.setTransform(262.15,193.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgqPAQjMBUfghF");
	this.shape_30.setTransform(270.425,190.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgriARDMBXFgiF");
	this.shape_31.setTransform(278.7,186.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egs1ARkMBZrgjH");
	this.shape_32.setTransform(286.975,183.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(10.6,1,1).p("EguIASEMBcRgkH");
	this.shape_33.setTransform(295.275,180.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgvbASlMBe3glJ");
	this.shape_34.setTransform(303.55,177.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgwtATFMBhbgmJ");
	this.shape_35.setTransform(311.825,174);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgyAATmMBkBgnL");
	this.shape_36.setTransform(320.1,170.75);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgzTAUGMBmngoL");
	this.shape_37.setTransform(328.4,167.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg0mAUmMBpNgpL");
	this.shape_38.setTransform(336.675,164.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg15AVHMBrzgqN");
	this.shape_39.setTransform(344.95,161.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg3LAVnMBuXgrN");
	this.shape_40.setTransform(353.225,157.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg4eAWIMBw9gsP");
	this.shape_41.setTransform(361.525,154.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg5xAWoMBzjgtP");
	this.shape_42.setTransform(369.8,151.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg7EAXJMB2JguR");
	this.shape_43.setTransform(378.075,148.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,766.8,306.7);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(10.6,1,1).p("AlTkaIKnI1");
	this.shape.setTransform(34.025,28.2875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(10.6,1,1).p("AmrljINXLH");
	this.shape_1.setTransform(42.8,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(10.6,1,1).p("AoDmsIQHNZ");
	this.shape_2.setTransform(51.575,42.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(10.6,1,1).p("Apan1IS1Pr");
	this.shape_3.setTransform(60.325,50.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(10.6,1,1).p("Aqyo+IVlR9");
	this.shape_4.setTransform(69.1,57.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(10.6,1,1).p("AsKqHIYVUP");
	this.shape_5.setTransform(77.875,64.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(10.6,1,1).p("AtirQIbFWh");
	this.shape_6.setTransform(86.65,72.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(10.6,1,1).p("Au5sZIdzYz");
	this.shape_7.setTransform(95.425,79.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(10.6,1,1).p("AwRthMAgjAbD");
	this.shape_8.setTransform(104.2,86.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(10.6,1,1).p("AxpuqMAjTAdV");
	this.shape_9.setTransform(112.975,93.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(10.6,1,1).p("AzAvzMAmBAfn");
	this.shape_10.setTransform(121.725,101.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(10.6,1,1).p("A0Yw8MAoxAh5");
	this.shape_11.setTransform(130.5,108.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(10.6,1,1).p("A1wyFMArhAkL");
	this.shape_12.setTransform(139.275,115.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(10.6,1,1).p("A3IzOMAuRAmd");
	this.shape_13.setTransform(148.05,123.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(10.6,1,1).p("A4f0XMAw/Aov");
	this.shape_14.setTransform(156.825,130.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(10.6,1,1).p("A531gMAzvArB");
	this.shape_15.setTransform(165.575,137.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(10.6,1,1).p("A7P2pMA2fAtT");
	this.shape_16.setTransform(174.35,144.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(10.6,1,1).p("A8m3yMA5NAvl");
	this.shape_17.setTransform(183.125,152.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(10.6,1,1).p("A9+47MA79Ax3");
	this.shape_18.setTransform(191.9,159.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(10.6,1,1).p("A/W6EMA+tA0J");
	this.shape_19.setTransform(200.675,166.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(10.6,1,1).p("EggugbNMBBdA2b");
	this.shape_20.setTransform(209.45,174.15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgiFgcVMBELA4r");
	this.shape_21.setTransform(218.225,181.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgjdgdeMBG7A69");
	this.shape_22.setTransform(226.975,188.725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egk1genMBJrA9P");
	this.shape_23.setTransform(235.75,196);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgmMgfwMBMZA/h");
	this.shape_24.setTransform(244.525,203.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egnkgg5MBPJBBz");
	this.shape_25.setTransform(253.3,210.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(10.6,1,1).p("Ego8giCMBR5BEF");
	this.shape_26.setTransform(262.075,217.875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgqUgjLMBUpBGX");
	this.shape_27.setTransform(270.85,225.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgrrgkUMBXXBIp");
	this.shape_28.setTransform(279.625,232.475);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgtDgldMBaHBK7");
	this.shape_29.setTransform(288.375,239.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgubgmmMBc3BNN");
	this.shape_30.setTransform(297.15,247.05);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgvygnvMBflBPf");
	this.shape_31.setTransform(305.925,254.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgxKgo4MBiVBRx");
	this.shape_32.setTransform(314.7,261.65);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FF0000").ss(10.6,1,1).p("EgyigqAMBlFBUB");
	this.shape_33.setTransform(323.475,268.925);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(10.6,1,1).p("Egz5grJMBnzBWT");
	this.shape_34.setTransform(332.225,276.225);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg1RgsSMBqjBYl");
	this.shape_35.setTransform(341,283.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg2pgtbMBtTBa3");
	this.shape_36.setTransform(349.775,290.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg4BgukMBwDBdJ");
	this.shape_37.setTransform(358.55,298.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg5YgvtMByxBfb");
	this.shape_38.setTransform(367.325,305.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg6wgw2MB1hBht");
	this.shape_39.setTransform(376.1,312.675);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg8Igx/MB4RBj/");
	this.shape_40.setTransform(384.875,319.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg9fgzIMB6/BmR");
	this.shape_41.setTransform(393.625,327.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(10.6,1,1).p("Eg+3g0RMB9vBoj");
	this.shape_42.setTransform(402.4,334.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FF0000").ss(10.6,1,1).p("EhAPg1aMCAfBq1");
	this.shape_43.setTransform(411.175,341.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-5.3,833,694.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiLC3QgLgMAAgVIAAjkIABghIABggQgBgVAMgMQAMgOAWAAQAnAAAHApQA+gvBMAAQBGAAAABdIgBAYQgDA2gtAAQgsAAgBguIgBgjQhOANgjBEIAACvQAAAVgNANQgNANgWAAQgVAAgNgOg");
	this.shape.setTransform(269.2,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah4CYQg7gsAAhRQAAhYAvg9QA0hFBXAAQA9AAApAUQA1AaAAA3QAAAngrAdQgUAOg7AaIh2A0QARASAYAJQAYAJAeAAQAvAAAhgTQAdgRARAAQAlAAAAAjQAAApg7AZQgxAVg3AAQhTAAg2gogAgwhUQgXAWgOAsIBPgiQAvgWAcgSQgYgOgmAAQgfAAgYAWg");
	this.shape_1.setTransform(230.575,63.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABSEBQgIgcgIg0QgFgyAAggIABgaIAAgaIAAgfQgEgSgPAAQgnAAgfAiQgQASgcAzQAAB/gMAaQgOAdgeAAQgTAAgQgNQgPgNAAgUQAAgGAEgMQACgIAChYQgChGACijIABgMIADg3QgBgLgDgWQgDgVAAgLQAAgUAOgMQAOgOAVAAQAjABAMAkQAGAVAAAtQAAAigCAlQgBAiAAAiQAZgaAegMQAcgMAhAAQA8AAAaAhQAUAaAEAzIAFBXIAGBEQAGAoAHAdIABANQAAATgPAOQgPAMgUAAQgkABgKgkg");
	this.shape_2.setTransform(190.85,54.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhuCaQg3guAAhMQAAhFAxhLQA5hVBJAAQAlAAAxAUQA7AYAAAgQABARgMANQgNAPgVAAQgOAAgWgRQgVgQgrAAQgaAAgfA1QgeAzgBAlQAAAlAbAVQAaAUAoAAQAXAAAjgSQAigSAJAAQATAAANAOQAOANAAASQAAAbg8AcQg1AYgiAAQhNAAg0gsg");
	this.shape_3.setTransform(150.2,63.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABVCiQggAPgZAIQgZAIgQAAQhUAAgrgtQgqguAAhaQgBhUBAg8QA+g8BWAAQAhAAAsASQA2AXAAAeQAAANgIAJQgEAOgCAVQgCAVAAAcQAABCAJAdIAQAkQAPAeAAAEQAAATgPAMQgOAMgTAAQgQAAgjgfgAgxhHQgkAmAAAwQAAAvARAYQARAXAhAAQAWAAATgHQAUgHARgOQgLhTAAgpQAAgLACgPQABgPADgSQgGgDgGgBQgGgCgDAAQgvAAgkAlg");
	this.shape_4.setTransform(112.65,63.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah4CYQg7gsAAhRQAAhYAvg9QA0hFBXAAQA9AAApAUQA1AaAAA3QAAAngrAdQgUAOg7AaIh2A0QARASAYAJQAYAJAeAAQAvAAAhgTQAdgRARAAQAlAAAAAjQAAApg7AZQgxAVg3AAQhTAAg2gogAgwhUQgXAWgOAsIBPgiQAvgWAcgSQgYgOgmAAQgfAAgYAWg");
	this.shape_5.setTransform(71.725,63.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghD/QgRgNAAgVIACgPIACgPIgCgxQgDghAAgRQAAgvgHhPQgJhdgBgjIgSAAQhPAAgugLQgngJAAglQAAgSANgOQAPgSAYACQAMABArAFQAjAEAWAAIBAgBIA/AAQAbAAA1ADQA2AEAaAAQAVAAAPAOQAOANAAAUQAAAUgOAPQgPANgVAAQgbAAg6gEQg4gEgdABQABAoAIBnQAHBZAAA1QAAAMADAYQACAXAAAMQAAAagLAVQgOAcgbAAQgSAAgPgNg");
	this.shape_6.setTransform(27.425,54.8647);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhuCSQgKgKABgQIAAi3IAAgaIAAgaQABgQAJgKQAJgLASAAQAfAAAGAgQAwglA9AAQA5AAAABLIAAATQgDArglAAQgjAAAAglIgCgcQg+AKgbA3IAACMQAAARgLAKQgLALgQAAQgSAAgJgMg");
	this.shape_7.setTransform(244.15,61.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhgB6QgvgkAAhAQAAhHAlgxQAqg2BGgBQAxABAgAQQAqAUAAAsQABAfgjAYQgQALgwAUIhdAqQANAPAUAHQATAHAXAAQAmAAAbgPQAWgOAPAAQAdAAAAAdQAAAggvATQgnASgtgBQhCAAgrgfgAgmhDQgSASgMAjIA/gcQAlgRAXgPQgTgLgeABQgaAAgSARg");
	this.shape_8.setTransform(213.25,61.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABBDOQgGgXgGgpQgFgoAAgaIABgVIABgVIgBgYQgCgPgNAAQgfABgYAbQgNAOgWAoQgBBmgJAVQgLAXgYAAQgQAAgMgKQgNgLAAgPQAAgGAEgJQABgGAChGQgCg5ACiCIABgJIACgtQAAgJgDgQQgCgSAAgIQAAgQALgLQALgKARAAQAcAAAJAeQAFAQABAkIgCA4QgCAcAAAbQAVgUAXgKQAWgKAbAAQAxAAAVAbQAQAUADApIADBFIAGA4QAEAfAFAYIACAKQAAAPgMALQgMAKgQAAQgdAAgJgcg");
	this.shape_9.setTransform(181.5,53.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhXB7QgtglAAg9QAAg3Aog7QAthEA7AAQAdAAAnAQQAwATAAAZQAAAOgKALQgKALgQAAQgMAAgRgNQgRgNgiAAQgVAAgZArQgZApAAAcQAAAeAWARQAUAQAgAAQATAAAbgOQAcgPAHAAQAPAAALALQALALAAAOQAAAWgwAWQgrATgbAAQg9AAgpgjg");
	this.shape_10.setTransform(148.975,61.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABECBQgaANgTAGQgUAHgNgBQhEAAghgkQgjgkAAhJQAAhCAzgwQAygxBEABQAbgBAjAPQArATAAAXQAAALgHAHQgDALgBARQgCARAAAXQAAAzAIAYIANAdQALAYAAADQAAAPgLAJQgMALgPgBQgNAAgcgZgAgng4QgdAeAAAmQAAAmAOATQANATAbAAQARAAAQgGQAPgGAOgLQgJhCAAgiIACgUIADgaIgJgEIgIgCQglAAgdAfg");
	this.shape_11.setTransform(118.925,61.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhfB6QgwgkAAhAQAAhHAlgxQAqg2BGgBQAxABAgAQQArAUAAAsQAAAfgjAYQgQALgvAUIheAqQANAPAUAHQASAHAZAAQAlAAAbgPQAXgOAOAAQAdAAAAAdQAAAggvATQgnASgsgBQhDAAgqgfgAgmhDQgTASgKAjIA/gcQAkgRAXgPQgTgLgeABQgaAAgSARg");
	this.shape_12.setTransform(86.2,61.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbDNQgNgLABgRIAAgMIACgMIgCgnIgBgoQAAglgHhAIgIhmIgOAAQg/AAgkgJQgggHAAgeQAAgOAKgLQAMgOAUABIAsAFQAcADARAAIAzgBIAzAAQAVAAArADQAqADAWAAQARAAALALQAMALAAAQQAAAQgMALQgLALgRAAQgWAAgugDQgtgDgYAAQACAgAGBSQAGBIAAAqIACAcIABAdQABAVgJARQgMAVgVAAQgOAAgNgJg");
	this.shape_13.setTransform(50.75,54.2927);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288,104.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiLC3QgLgMAAgVIAAjkIABghIABggQgBgVAMgMQAMgOAWAAQAnAAAHApQA+gvBMAAQBGAAAABdIgBAYQgDA2gtAAQgsAAgBguIgBgjQhOANgjBEIAACvQAAAVgNANQgNANgWAAQgVAAgNgOg");
	this.shape.setTransform(369.55,64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah4CYQg7gsAAhRQAAhYAvg9QA0hFBXAAQA9AAApAUQA1AaAAA3QAAAngrAdQgUAOg7AaIh2A0QARASAYAJQAYAJAeAAQAvAAAhgTQAdgRARAAQAlAAAAAjQAAApg7AZQgxAVg3AAQhTAAg2gogAgwhUQgXAWgOAsIBPgiQAvgWAcgSQgYgOgmAAQgfAAgYAWg");
	this.shape_1.setTransform(330.925,63.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfD1QgQgNAAgTIABgmIABgmQAAgqgGiLQgWgBgsgFQgsgEAAgpQAAgUANgOQAOgNAVAAQANAAAvAEIgCglIgCgjQAAgUAPgNQAOgNAVAAQAzAAAABYIgBAcQAWgDAOAAQAoAAAPAGQAcAJAAAhQAAAVgOANQgOANgVAAIgRAAIgRgBQgPAAgTADQAGCNAAAsIABARIAAAUQAABRgzAAQgSAAgOgMg");
	this.shape_2.setTransform(294.425,57.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABSEBQgIgcgIg0QgFgyAAggIABgaIAAgaIAAgfQgEgSgPAAQgnAAgeAiQgRASgcAzQAAB/gMAaQgOAdgeAAQgTAAgPgNQgQgNAAgUQAAgGAEgMQACgIAChYQgChGADijIAAgMIACg3QAAgLgCgWQgEgVAAgLQAAgUAOgMQAOgOAVAAQAjABAMAkQAGAVAAAtQAAAigBAlQgCAiAAAiQAZgaAegMQAcgMAhAAQA8AAAaAhQAUAaAFAzIADBXIAHBEQAFAoAHAdIACANQAAATgOAOQgQAMgUAAQgkABgKgkg");
	this.shape_3.setTransform(257.25,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ai0DhQAAgTAMgMQAMgMAUAAQAQAAAeAGQAdAGAXAAQAzAAAZggQAYggAEhEQgRASgXAKQgWAJgaAAQhGAAgsguQgsgtAAhGQAAhgA7g7QA8g9BmAAQAhAAAYAIQAYAIAPAQQAsAGAAAvQAAAYgHApQgPBTgDBbQgDBxgjAzQguBFh0AAQiIAAAAg2gAg2ifQgdAjAAA5QAAAqAPAVQAQAUAgAAQAcAAAdggQAbggAEgfQAHgiAJhHQgMgHgMgEQgLgDgLAAQg7AAghAng");
	this.shape_4.setTransform(216.325,73.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgsD/QgNgNAAgUIgBhBIgChAQAAgfAEgwQADgtAAgfQAAgVAOgNQANgOAWAAQATAAAOAOQAOANAAAVQAAAfgDAtQgEAwAAAfIABBAIACBBQAAAUgOANQgOAOgUAAQgVAAgOgOgAggiyQgQgQAAgVQAAgWAQgPQARgQAVABQAXgBAQAQQAQAPAAAWQAAAVgQAQQgQAOgXAAQgVAAgRgOg");
	this.shape_5.setTransform(188.35,55.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhDEoQgOgMAAgUIAAgIQAJgzAAgsIAAivIgXADIgVACQgVAAgOgNQgOgMAAgVQAAghAigKQAPgFAvgBIAEgoQAKhOAhgnQAngvBVAAQBAAAAAAuQAAAtg8AAQgqAAgUAeQgOAWgFAwIgBAKQAvgFAVAAQBBAAAAAtQAAAvhGgCQgWgBgtAEQgBAkABA6IABBeQAABBgIAlQgIAmgmAAQgTAAgPgNg");
	this.shape_6.setTransform(158.625,56.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah4CYQg7gsAAhRQAAhYAvg9QA0hFBXAAQA9AAApAUQA1AaAAA3QAAAngrAdQgUAOg7AaIh2A0QARASAYAJQAYAJAeAAQAvAAAhgTQAdgRARAAQAlAAAAAjQAAApg7AZQgxAVg3AAQhTAAg2gogAgwhUQgXAWgOAsIBPgiQAvgWAcgSQgYgOgmAAQgfAAgYAWg");
	this.shape_7.setTransform(120.125,63.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiLC3QgLgMAAgVIAAjkIABghIAAggQABgVALgMQAMgOAWAAQAnAAAHApQA+gvBMAAQBGAAAABdIgBAYQgDA2guAAQgrAAgBguIgBgjQhOANgjBEIAACvQAAAVgNANQgOANgVAAQgVAAgNgOg");
	this.shape_8.setTransform(83.9,64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgsD/QgOgNAAgUIAAhBIgChAQAAgfADgwQAEgtAAgfQAAgVANgNQAOgOAWAAQATAAAOAOQAOANAAAVQAAAfgDAtQgEAwAAAfIACBAIABBBQgBAUgOANQgNAOgUAAQgVAAgOgOgAggiyQgRgQAAgVQAAgWARgPQARgQAVABQAWgBARAQQAQAPAAAWQAAAVgQAQQgRAOgWAAQgVAAgRgOg");
	this.shape_9.setTransform(56.7,55.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai0EaQgNgOAAgVIAAmSIABgpIABgqQAAgUAOgOQANgOAVAAQAOAAAKAFQApgHAigDQAigDAaAAQAoAAA9AQQBNAVAAAbQAAAUgPAPQgOAOgUAAQgIAAgKgDQgtgPhCAAQgUAAgcADQgcADgiAGQABBDgBAxQA1gNAjAAQBBAAAwAGQAuAFAAAqQAAAVgPANQgOANgVAAQgSAAglgDQgkgCgSAAQgZAAg/AQIAADcQAAAVgQANQgQAOgVAAQgUAAgNgNg");
	this.shape_10.setTransform(24.625,55.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhuCSQgKgKABgQIAAi3IAAgaIABgaQAAgQAJgKQAKgLARAAQAfAAAGAgQAwglA9AAQA4AAABBLIAAATQgDArglAAQgjAAAAglIgCgcQg+AKgbA3IAACMQAAARgLAKQgLALgQAAQgSAAgJgMg");
	this.shape_11.setTransform(334.5,61.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhgB6QgvgkAAhAQAAhHAlgxQAqg2BGgBQAxABAgAQQAqAUAAAsQAAAfgiAYQgQALgwAUIhdAqQANAPATAHQATAHAYAAQAmAAAagPQAYgOAOAAQAdAAAAAdQAAAggvATQgnASgtgBQhCAAgrgfgAgmhDQgSASgMAjIA/gcQAmgRAWgPQgTgLgeABQgaAAgSARg");
	this.shape_12.setTransform(303.6,61.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYDEQgNgKAAgQIABgdIAAgfQAAgigEhvQgSAAgjgEQgjgEgBghQAAgQALgKQALgMARAAIAwAEIgCgeIgBgcQAAgPAMgLQALgLARAAQAoABAABGIgBAXQASgDALAAQAgAAAMAFQAWAHABAbQgBAQgKALQgLAKgSAAIgNAAIgOAAQgMAAgPACQAFBwAAAjIAAAOIABAQQAABBgpAAQgPAAgKgKg");
	this.shape_13.setTransform(274.4,56.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABBDOQgGgXgFgpQgGgoAAgaIABgVIAAgVIAAgYQgCgPgMAAQggABgYAbQgNAOgXAoQAABmgKAVQgKAXgZAAQgPAAgMgKQgNgLAAgPQAAgGADgJQACgGAChGQgBg5ACiCIAAgJIACgtQAAgJgCgQQgDgSgBgIQAAgQAMgLQAMgKAQAAQAcAAAJAeQAGAQAAAkIgCA4QgCAcAAAbQAUgUAYgKQAXgKAbAAQAwAAAUAbQARAUACApIAEBFIAFA4QAFAfAFAYIACAKQAAAPgNALQgMAKgQAAQgcAAgJgcg");
	this.shape_14.setTransform(244.65,53.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiQC0QAAgPAKgKQAJgKARAAQAMAAAYAFQAXAFATAAQApAAAUgaQATgZADg2QgOAOgSAIQgSAHgVAAQg4AAgigkQgkglAAg4QAAhMAvgvQAwgxBSAAQAaAAATAGQAUAHALANQAkAEAAAmQAAATgGAhQgMBCgCBJQgDBagbAqQglA2hdAAQhtAAAAgrgAgrh/QgYAdAAAtQAAAhANARQANAQAZAAQAWAAAXgaQAWgZADgZQAGgbAHg5QgKgFgJgDQgJgDgJAAQgvAAgaAfg");
	this.shape_15.setTransform(211.925,69.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgjDNQgLgLAAgQIgBg0IgBg0QAAgYADgmQACglABgZQgBgQAMgLQALgKAQAAQAQAAALAKQALALAAAQQAAAZgDAlQgCAmAAAYIABA0IAAA0QABAQgLALQgMAKgPAAQgRAAgLgKgAgZiOQgNgMgBgSQABgSANgMQANgMARAAQASAAANAMQANAMAAASQAAASgNAMQgNALgSAAQgRAAgNgLg");
	this.shape_16.setTransform(189.55,54.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag1DtQgMgKAAgPIABgIQAGgoABgjIAAiMIgTACIgQACQgRAAgMgKQgLgKAAgRQAAgaAbgIQANgEAlgBIADggQAIg/AageQAggmBDAAQA0AAAAAkQAAAlgwAAQgiAAgQAYQgLASgEAlIgBAIQAmgDAQAAQA1AAAAAkQAAAlg4gCQgSAAgkADQgBAdABAuIAABMQABAzgHAeQgGAegeAAQgPAAgMgKg");
	this.shape_17.setTransform(165.75,55.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhgB6QgvgkAAhAQAAhHAlgxQAqg2BGgBQAxABAgAQQAqAUAAAsQABAfgjAYQgQALgwAUIhdAqQANAPAUAHQATAHAXAAQAmAAAbgPQAWgOAPAAQAdAAAAAdQAAAggvATQgnASgtgBQhCAAgrgfgAgmhDQgSASgMAjIA/gcQAlgRAXgPQgTgLgeABQgaAAgSARg");
	this.shape_18.setTransform(134.95,61.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhvCSQgIgKgBgQIAAi3IABgaIAAgaQAAgQAKgKQAKgLAQAAQAgAAAGAgQAwglA+AAQA3AAAABLIAAATQgCArgkAAQgkAAAAglIgBgcQg/AKgbA3IAACMQAAARgLAKQgLALgRAAQgRAAgKgMg");
	this.shape_19.setTransform(105.95,61.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjDNQgLgLAAgQIgBg0IgBg0QAAgYADgmQADglgBgZQABgQAKgLQALgKASAAQAQAAALAKQAKALABAQQAAAZgDAlQgEAmAAAYIACA0IAAA0QAAAQgLALQgLAKgPAAQgRAAgLgKgAgaiOQgMgMAAgSQAAgSAMgMQAOgMARAAQASAAANAMQANAMAAASQAAASgNAMQgNALgSAAQgRAAgOgLg");
	this.shape_20.setTransform(84.2,54.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiQDhQgKgLAAgQIAAlBIABgiIAAghQAAgQALgLQALgLARAAQALAAAIAEQAggGAcgCQAbgDAVAAQAgAAAxANQA9ARAAAWQAAAQgLALQgMAMgQAAQgGAAgJgDQgjgMg1AAQgQAAgXADQgWACgbAEIAABdQAqgKAdAAQAzAAAnAFQAkAEAAAiQAAAQgMAKQgLALgRAAQgOAAgegCIgqgCQgVAAgyAMIAACxQAAAQgNALQgNALgQAAQgQAAgLgLg");
	this.shape_21.setTransform(58.55,54.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,388.4,104.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah4CYQg7gsAAhRQAAhYAvg9QA0hFBXAAQA9AAApAUQA1AaAAA3QAAAngrAdQgUAOg7AaIh2A0QARASAYAJQAYAJAeAAQAvAAAhgTQAdgRARAAQAlAAAAAjQAAApg7AZQgxAVg3AAQhTAAg2gogAgwhUQgXAWgOAsIBPgiQAvgWAcgSQgYgOgmAAQgfAAgYAWg");
	this.shape.setTransform(174.675,63.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhuCaQg3guAAhMQAAhFAyhLQA4hVBJAAQAlAAAxAUQA8AYgBAgQABARgMANQgNAPgVAAQgOAAgWgRQgVgQgrAAQgaAAgfA1QgeAzgBAlQAAAlAbAVQAZAUApAAQAXAAAjgSQAigSAJAAQATAAANAOQAOANAAASQAAAbg8AcQg1AYgiAAQhNAAg0gsg");
	this.shape_1.setTransform(135.9,63.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsD/QgOgNAAgUIgBhBIgBhAQAAgfAEgwQADgtAAgfQAAgVANgNQAPgOAUAAQAVAAANAOQAOANAAAVQAAAfgEAtQgDAwAAAfIABBAIABBBQABAUgOANQgOAOgUAAQgVAAgOgOgAggiyQgQgQgBgVQABgWAQgPQAQgQAWABQAXgBAQAQQAQAPAAAWQAAAVgQAQQgQAOgXAAQgWAAgQgOg");
	this.shape_2.setTransform(108.85,55.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghEVQgOgOgBgVIAAnlQABgVAPgNQAOgMATAAQAVAAANANQANAMABAVIAAHSQAABDgxAAQgUAAgNgNg");
	this.shape_3.setTransform(87.75,53.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhzCUQg0gxgChSQgDhMAtg9QA2hHBeAAQBGAAAqA3QAlAzAABLQAABRgrA6QgxA/hSABQhBAAgugtgAgzg7QgVAhAAArQAAArAYAWQATATAZgBQAeABAXgWQAZgYACgpQAFhwhAgBQgrAAgZAog");
	this.shape_4.setTransform(58.8684,64.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AifELQgNgOAAgSIAAhiQAAg3AHhqQAHhsAAg2QAAhbAzAEQAMgDAVgCQAVgCAfABQBEAAA8AtQBDAyAABHQAABahHA0QhAAvhWAAIgegDQgCAxAABxQAAASgNAOQgNANgUAAQgUAAgNgNgAgyi8IgPAAIAAAyQgBAngGBSQASADAGABQA2AAAkgaQAngdAAgtQAAgeglgXQgigXgoAAIgUABg");
	this.shape_5.setTransform(21.425,54.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhgB6QgvgkAAhAQAAhHAmgxQApg2BGgBQAxABAgAQQAqAUAAAsQAAAfgiAYQgQALgwAUIhdAqQAOAPASAHQAUAHAXAAQAmAAAagPQAXgOAOAAQAeAAAAAdQAAAggvATQgoASgsgBQhCAAgrgfgAgmhDQgSASgMAjIA/gcQAmgRAWgPQgTgLgeABQgaAAgSARg");
	this.shape_6.setTransform(159.5,61.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhXB7QgtglAAg9QAAg3Aog7QAthEA7AAQAdAAAnAQQAwATAAAZQAAAOgKALQgKALgQAAQgMAAgRgNQgRgNgiAAQgVAAgZArQgZApAAAcQAAAeAWARQAUAQAgAAQATAAAbgOQAcgPAHAAQAPAAALALQALALAAAOQAAAWgwAWQgrATgbAAQg9AAgpgjg");
	this.shape_7.setTransform(128.475,61.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjDNQgLgLAAgQIgBg0IgBg0QAAgYADgmQACglABgZQgBgQALgLQAMgKAQAAQARAAAKAKQAMALAAAQQgBAZgDAlQgCAmAAAYIABA0IAAA0QABAQgLALQgLAKgQAAQgRAAgLgKgAgZiOQgOgMAAgSQAAgSAOgMQANgMARAAQASAAANAMQANAMAAASQAAASgNAMQgNALgSAAQgRAAgNgLg");
	this.shape_8.setTransform(106.85,54.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbDdQgLgLAAgQIAAmEQAAgRAMgKQALgKAQAAQARAAAKAKQALAKAAARIAAF0QAAA2gnAAQgQAAgLgLg");
	this.shape_9.setTransform(89.95,53.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhcB3QgpgngChCQgCg9AkgxQArg5BLAAQA4AAAhAtQAeAoAAA9QAAA/gjAvQgnAzhBAAQg0AAglgjgAgogwQgRAbAAAjQAAAiATASQAPAOAUAAQAYAAASgQQAUgUACghQADhZgzgBQghAAgUAfg");
	this.shape_10.setTransform(66.8697,61.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah/DWQgLgLAAgPIAAhOQABgsAFhUQAGhXgBgrQABhJApADQAJgDARgBQARgBAYAAQA2AAAxAkQA2AoAAA5QAABIg5ApQg0AmhFAAIgXgCQgCAnAABaQAAAPgKALQgLAKgQAAQgPAAgLgKgAgoiWIgMAAIAAAoQgBAfgFBCIATADQArAAAdgVQAggWAAglQAAgYgegTQgcgSgfAAIgQABg");
	this.shape_11.setTransform(36.9,53.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,197.5,104.4);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8BACA").s().p("AgBAIQgJgDACgGQABgIALABQAHACgDAIQgCAHgFAAIgCgBg");
	this.shape.setTransform(70.7088,298.3072);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F06279").s().p("AAxBNQgsgJgKgPIgsg+QglgzgTgTQANAJA3A5QApAqAcAEQAgAFAIgVQAHgSgPgTQARAMAPAjQAPAkgIAKQgFAHgSAAQgNAAgSgDg");
	this.shape_1.setTransform(61.375,292.0341);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F38284").s().p("AgBANQgEgEgDgJQgEgIADgDQAFgEAIAKQAIAKgBAEQgBACgFACIgEAAIgCAAg");
	this.shape_2.setTransform(33.4613,123.045);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F38284").s().p("AgLAEQgCgEABgCQACgDALgBQAMgCABAGQAAADgJAEQgGADgGAAIAAAAQgCAAgCgEg");
	this.shape_3.setTransform(53.2469,128.3875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F38284").s().p("AgLAHQgDgFABgCQABgCAMgFQANgFABAGQAAAEgIAFQgHAGgFABIAAAAQgCAAgDgDg");
	this.shape_4.setTransform(61.2139,132.0891);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F38284").s().p("AgLAGQgDgFABgBQACgDALgEQAOgEAAAHQABADgKAFQgHAFgFABQgCAAgCgEg");
	this.shape_5.setTransform(61.0263,129.9488);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F38284").s().p("AgMAEQgCgEABgBQACgDAMgDQANgDAAAGQABAEgKAEQgIAFgFAAQgCAAgCgFg");
	this.shape_6.setTransform(57.6095,129.0632);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F38284").s().p("AgJAHQgEAAgBgGQgBgEABgBQAZgGAEAGQACADgLAEQgIAFgFAAIgCgBg");
	this.shape_7.setTransform(135.5648,61.4583);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F38284").s().p("AgMANQgEgDAIgLQAHgMADAAQADgBAFAHQAFAHgBAAQgDAFgJAGQgFAEgEAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAg");
	this.shape_8.setTransform(138.7523,65.6995);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FED6B7").s().p("AAAAIQgJgBACgIQACgJAFADQAHADABAGQABAHgGAAIgDgBg");
	this.shape_9.setTransform(53.55,44.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#77584C").s().p("AAMgcQgkg5gkgTQA8ARAiA9QAjA8gLBHQgDhEgrhBg");
	this.shape_10.setTransform(64.3801,28.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F1EFF7").s().p("AgZAGQghgGAngGQAlgHAUAKQAKAFgWAFQgKADgNAAQgMAAgQgEg");
	this.shape_11.setTransform(56.7598,275.2035);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1EFF7").s().p("AgnDWQgrgFgIgMQgGgJAagJQAcgKABgDQAAgEgMgFQgOgGgEgLQgEgOAbiLQAciLAJgPQAIgOAtgTQAtgTADAIQAPAphsFSQgDAGgQAEQgRADgBACIAZACQAaADgEAOQgDANgbAAIgQgBg");
	this.shape_12.setTransform(60.5095,248.6236);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DFDCE9").s().p("AgHAGQgIgHAHgHQAHgGAGAHQALAJgHAHQgDADgEAAQgDAAgGgGg");
	this.shape_13.setTransform(52.9517,85.1048);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C9C4D6").s().p("AgFANQgSgKAHgMQAGgNAOAHQATAJgFAOQgDAKgIAAQgFAAgHgFg");
	this.shape_14.setTransform(52.2898,85.3016);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBC0A4").s().p("AgCAUQgLgIADgRQACgSALACQALACgDAXQgCASgHAAQgCAAgCgCg");
	this.shape_15.setTransform(24.15,45.5098);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#77584C").s().p("AgbAvQgEgjATghQARghAXgDQgGAOgXBCQgOAjgHAAQgDAAgCgLg");
	this.shape_16.setTransform(35.7144,29.0857);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#554038").s().p("AhjBjQgJhDAWhFQAWhJAugtQAzgzBFAAQhBAvgsBYQgtBXAABMQgOhGAjhtQguBDgDBbQgCBSAeA1QgmgkgJhHg");
	this.shape_17.setTransform(36.7546,37.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#403631").s().p("AhuBmQgPhKAThIQAVhPA1guQA8gzBaAFQhfArgzBZQg2BfAXBrQgUgRgEg9IABg4QgTAxAOBNQALA+AYAsQgrgogPhLg");
	this.shape_18.setTransform(38.9489,39.4279);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40A6B0").s().p("AjaFhQgjgQA8k+QA7k3AgghQAbgaBogWQBigUAyAEQAWAcAWFXQAXFbgbAcQghAgiYACIgPAAQiUAAhXgmg");
	this.shape_19.setTransform(56.0139,179.1464);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F06279").s().p("AAOALQhkgJgJgLQgJgLBzANQBLAIAKAJQAFAFgXAAQgVAAgrgEg");
	this.shape_20.setTransform(39.6915,117.6112);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F06279").s().p("AAEAMQhtgYgEgKQgEgMBtAVQBrAUAGAPQADAFgOAAQgYAAhGgPg");
	this.shape_21.setTransform(79.6041,124.7764);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBC0A4").s().p("AAIAUIgQgVIgMgMQgEgFADgEQAIgLAVAYQAWAXgJALQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgEAAgGgHg");
	this.shape_22.setTransform(36.1419,124.7378);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBC0A4").s().p("AgvAVQgGgGAwgUQAugVAGAGQAHAHgwATQgkAQgMAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_23.setTransform(56.6609,134.0676);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBC0A4").s().p("Ag1AXQgEgFARgHIAlgOIAkgPQAQgHADACQAOAHg5AXQgrASgNAAQgFAAgBgCg");
	this.shape_24.setTransform(53.0909,130.7413);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBC0A4").s().p("Ag1AXQgEgFAPgIQAJgFAcgKIAkgOQASgGADACQAOAHg5AWQgsATgNAAQgEAAgBgCg");
	this.shape_25.setTransform(55.7874,132.1304);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FBC0A4").s().p("AgjAQQgNgJAlgMQAjgNAKADQARAFgoAOQgeANgLAAIgFgBg");
	this.shape_26.setTransform(49.9248,129.4963);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBC0A4").s().p("Ag3AIQgDgHAOgQQAOgRAHAAQAJAAARAFQAQADAHAEQAOAGALAXQAMAYgSAAQhggQgEgJg");
	this.shape_27.setTransform(29.8015,131.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6AC85").s().p("AggBTIhfgMQhBgJgGgGQgHgHAagkQAZgjAHAAIAhAHQAeAGAGgCQAEgBgCgNQgDgPgKgPQgHgMABgIQAAgJAIABQAeADAVAnQAWAmAJABQAKABA7gRQAxgOALAOQARgEARAEQARADgJAGQASgHAMAIQAMAIgWAJQAOgDgCAJQgBAJgPAJQgjAVhCARQg2ANgkAAQgMAAgLgBg");
	this.shape_28.setTransform(42.1677,129.97);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D4404E").s().p("AAhABQgNARgqgJQgpgIAAgOIkPggQgGAAABgKQABgJAFgFQAGgFCGAPQCGAOADAIQAHAUAgAGQAgAHAUgTQAGgGCRAgQCQAgAHAIQAGAGgFAJQgEAHgGAGIgCAAQgVAAkQhGg");
	this.shape_29.setTransform(59.7994,122.8265);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#913536").s().p("AgXApIj2gRQgHgBgdg4Qgeg3ABgHQAAgGCJALQCJALAIAKQAJALAdAGQAeAHAQgKQAPgJCRAoQCPAmABAIQh7BJgPADIgDAAQgYAAjCg5g");
	this.shape_30.setTransform(59.3996,127.2788);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EEEDF3").s().p("AiRgPQA1gkBqANQBrANAZAqIgNAZg");
	this.shape_31.setTransform(77.75,122.9543);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EEEDF3").s().p("AiAAJIABgYQAqgaBYAQQBXARAnAog");
	this.shape_32.setTransform(39.3,115.9084);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DFDCE9").s().p("AgUAmIk1g7IACgzQA1ggBnAcQBeAZBDA2QBBgnB3ACQCAACAcA7QgNAfgQAgg");
	this.shape_33.setTransform(60.025,119.1771);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BBB9C5").s().p("AgRBOIkjhTIABhBQAsggBhAoQBiApAyBJQBHg+B4gMQBwgLAYAnQgHAYgXA3g");
	this.shape_34.setTransform(60.7,114.9561);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNAEQgFgOANgHQALgGAFAQQAKAagPABIgBAAQgMAAgGgQg");
	this.shape_35.setTransform(136.0666,58.0339);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FBC0A4").s().p("AgdAqQgOgYAAgfQAAgKAEgJQAEgJAHgFQAJgGAWgBIAlgCQAHACgEAHQgEAIgTAHQgIADgLACIgJABIAJAaQAHAegKARQgGAIgFAAQgIAAgIgOg");
	this.shape_36.setTransform(131.9863,66.6475);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6AC85").s().p("AgZABIAGgQQAIAAAUgEQAMgCAEAFQAGAGgKAMQgMAQgcADQgKgDAEgRg");
	this.shape_37.setTransform(134.345,62.7442);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FBC0A4").s().p("AgUAaQgIgHATgYQARgaAIAGQAQAKgWAYQgPASgKAAQgCAAgDgBg");
	this.shape_38.setTransform(140.7161,63.4482);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F6AC85").s().p("AgYAiQgIgHAGgOIARgZQALgSAEgDQAIgIAIAIQATATgYAeQgRAWgNAAQgGAAgFgEg");
	this.shape_39.setTransform(140.0412,63.3279);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DFDCE9").s().p("AAJBFQgJgJgSg5QgSg0AAgIQAAgHAPgFQAQgGAGAHQAJAJAbBzQAAAGgKAHQgFAEgEAAQgFAAgEgEg");
	this.shape_40.setTransform(136.325,62.3792);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D4404E").s().p("AA+BiQgcgGgdgSQgOgJgignQgdghgJgBIgCBGQgKAEgEgFIgFghQgFgkgGgUQgIgYgBgWQgCgXAFgDQAVANAhAgQAdAdAYAcQAZAgAlgBQAlgCgJgdQgCgHgIgPIgIgOQAZAVAXAqQAZAvgPANQgNAMgVAAQgKAAgMgDg");
	this.shape_41.setTransform(60.3145,291.5755);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FBC0A4").s().p("AgsAtQgLgVgBgIQgBgHAngjQAighAJgGQAFgEAOAMQANAMAAAFQABAKgqAwQgnAwgGABIAAAAQgEAAgLgWg");
	this.shape_42.setTransform(125.025,81.211);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F38284").s().p("AgMAFQgDgFAMgFQAJgFADABQADABABAHQABAFgBABQgFAEgIABIgDAAQgHAAgCgFg");
	this.shape_43.setTransform(139.4652,72.2166);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBC0A4").s().p("AgZAMQAAgMAZgMQAYgNACAOQADARgcAJQgKAEgHAAQgJAAAAgHg");
	this.shape_44.setTransform(141.0648,71.507);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F38284").s().p("AgLAEQgBgEAKgEQAJgEACABQACAAABAHQAAAFgBABQgEADgHAAQgJAAgCgFg");
	this.shape_45.setTransform(139.2236,74.7409);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FBC0A4").s().p("AgTAEQgDgFAWgHQAUgHAAAJQACAPgTADIgGAAQgNAAgDgIg");
	this.shape_46.setTransform(141.0675,74.1997);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F38284").s().p("AgNAJQgEgFAMgIQAJgIAEAAQADABACAIQADAGgBACQgEAEgKACIgHACQgFAAgCgEg");
	this.shape_47.setTransform(139.2342,69.3549);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBC0A4").s().p("AgZATQgFgOAYgRQAXgSAGAIQANAQgcAUQgQAMgIAAQgHAAgCgHg");
	this.shape_48.setTransform(140.6862,68.4729);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DFDCE9").s().p("AgMBSQgNgGgTgmQgTgmAAgNQAAgQAWgdQAXgfALAKQAMAOAbAlQAgAqAAAMQAAAOggAXQgaATgNAAIgFAAg");
	this.shape_49.setTransform(116.575,90.9954);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DFDCE9").s().p("AgrA2QgTgXAEgPQAFgQAXgiQAYgkAJgFQALgFAZAVQAYAVgEAMQgGARgXAmQgcAwgLAAQgPAAgTgXg");
	this.shape_50.setTransform(18.985,129.8429);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#40A6B0").s().p("AhYDOQgagzAJgcQAihjAshtQBHi0AaAAQAUAAANBPQAMBQgPAcQgKASgWBTQgTBMgHAEIg1AEQguADgJASQAngBAaAGQAcAGAHANQAEAIghAeQgnAlgKAfQgUgGgYgyg");
	this.shape_51.setTransform(14.5383,103.575);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EC8D62").s().p("AABApQgWgEgJAEQAHgLAAgYQAAgZgKgSQAXABAMgOIAKAjIgBALQABAKAJABQgJAIADAIQADAHAJgBQgGAHABAFQABAFALAFQgPgGgSgEg");
	this.shape_52.setTransform(135.775,68.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F6AC85").s().p("AhLCjQgHgBgUgcQgVgdgGgVQAAgDAuguQAugugBgFIgEggQgEgWAAgSQAAgfAbgKQAOgFAMAAIAvgUQAygRAMASQALASgHAVQgEAKgGAGIAKAKQAIAMgEAPQAGAHgBAMQgBANgIAGQAOAbggAQQgWAMglACQgFAFg4BCQgyA6gGAAIgBAAg");
	this.shape_53.setTransform(130.9519,74.5323);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A198BC").s().p("AgJAMQg3hOALgHQARgJAxBAQAzBAgKAZQgCAEgEAAQgOAAgrg/g");
	this.shape_54.setTransform(122.7159,87.9307);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C9C4D6").s().p("AgNCDQgLgGgohJQgqhMAAgaQAAgHAkgjQAkgjALgDQAbgHA5BJQA7BKgRAmQgGANgzAlQguAigLAAIgCgBg");
	this.shape_55.setTransform(118.9565,92.1392);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A198BC").s().p("AgqBIQgWgEAzhJQAzhMAJALQAMAPgmBBQgjA/gYAAIgEgBg");
	this.shape_56.setTransform(23.6359,134.0262);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C9C4D6").s().p("AgHB1QgOgDgpgiQgqgjADgJQAGgSAqg5QAyhFAagJQAGgCAhAdQAgAbAFALQAOAcgoBIQgmBGgjAAIgHgBg");
	this.shape_57.setTransform(18.6965,131.3607);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DFDCE9").s().p("Ah0EHQgEgJAfgSQAegRgJgKQgHgJgUgEQgRgDgFgOQgGgPAYixQAZizAPgwQAOgLBJgQQBPgRAKANQANAQg4DTQg3DNgJAIQgDACAOAJQAQAKgBAJQgBAKgUAHQgUAIAAAFQgBAEAOAHQAPAIgBAMQgCARhBABIgEAAQg+AAgFgPg");
	this.shape_58.setTransform(59.78,249.827);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#554038").s().p("AgRAJQgGgJAWgJQAOgHAFAHQAFAGgRAKQgJAHgGAAQgGAAgCgFg");
	this.shape_59.setTransform(13.9508,22.2898);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#77584C").s().p("AgJAHQgCgRAGgIQAGgJAGARQAIAZgKAGIgFABQgGAAgDgPg");
	this.shape_60.setTransform(20.3304,6.6635);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#77584C").s().p("AgMAHQAEgaANgJQANgKgFAaQgHAngLAFIgDAAQgJAAAFgZg");
	this.shape_61.setTransform(16.9211,8.0428);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#554038").s().p("AguA/QgKgLgBgXQgCg6A3gcQAJgFACABQACABgDAIQgGAXAHAPQADgcASgQQARgQANAJQgPANgHATQgGAQABAPQABAHgHAKQgIALgIAEQgYALgEg3QgRAWAFAfQACAPAFALQgFAEgGAAQgGAAgFgGg");
	this.shape_62.setTransform(20.6196,7.993);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#77584C").s().p("AgVAGQgHgHAUgGQATgHAJAJQALAJgXAFQgIACgGAAQgKAAgFgFg");
	this.shape_63.setTransform(35.5763,5.2849);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#77584C").s().p("AgSAJQgJgJARgHQAQgIAMAHQAMAGgVAJQgKAFgIAAQgGAAgDgDg");
	this.shape_64.setTransform(46.2364,2.1971);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#77584C").s().p("AAjgSQAPAFgDAEQgBADgQAFQg3AOgWAMQAbhCA3AXg");
	this.shape_65.setTransform(38.3684,11.3061);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#77584C").s().p("AgxAJQAFgVAhgGQAjgGAbAZQgMAAg4AQQgNADgIAAQgOAAADgLg");
	this.shape_66.setTransform(53.3756,5.9764);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#554038").s().p("AhTAcQAQhQANgOQgYAUgVAyQgQAlgFAYQgGgTAHgmQAIgnAVgkQA1heBVANQAMAEALAOQggAAghAbQgiAcgGAgQAYgjAjgTQAmgTAZALQAQAHAUAnQhGgKg8A7Qg/A9gOBkQgRgiARhZg");
	this.shape_67.setTransform(33.5241,19.2964);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#554038").s().p("Ag8AJQAdgfAngDQAigCATAUQgjADgjAPIgbAPg");
	this.shape_68.setTransform(47.35,3.0407);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#554038").s().p("AAiAOQhGgcgpAUQgegogWgOQA8guBHATQA7AQAPAeQgFgCgIAAQgRgCgRAHQAuAHAhAsQAfAqgOAPQgYgphDgbg");
	this.shape_69.setTransform(58.3678,12.2723);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#554038").s().p("AAvgZQgvhahjgmQAugKAqAXQAoAWAdAuQBABngjB+QAAhrgohLg");
	this.shape_70.setTransform(61.5042,31.2485);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F48C8E").s().p("AABAHQgNgBgCgHQgCgHARAEQAPAEAAADQgBAEgJAAIgFAAg");
	this.shape_71.setTransform(50.895,54.8997);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F05F5E").s().p("AgtAOIgXgWIALACQAgAXAlgJQAngIAIgfQAEABAFgCIgMAeQgSAfgdAEIgIAAQgXAAgXgTg");
	this.shape_72.setTransform(52.45,53.2302);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F05F5E").s().p("AhRAKQAVADAdgLQAOgEAIgBQALgCAIAFQAIgLAZgBQAeAAAJgFQgGARg+AMQgcAGgXAAQgaAAgSgIg");
	this.shape_73.setTransform(52.25,50.9018);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F2DAD3").s().p("AgkADQAPgDA6gKQgIAPgfAFIgPABQgRAAgCgIg");
	this.shape_74.setTransform(53,52.2133);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#593D35").s().p("AhAgBICAgWQgEAdgyAOQgOAEgNAAQgfAAgQgZg");
	this.shape_75.setTransform(52.5,52.7913);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F6AC85").s().p("AgKACQgBgIAKgCQAKgDABAKQACAKgLAAIgBABQgIAAgCgIg");
	this.shape_76.setTransform(43.95,52.0053);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F6AC85").s().p("AgJACQgDgHALgDQAKgDACAIQACAGgKAFIgEACQgGAAgCgIg");
	this.shape_77.setTransform(60.6352,49.2034);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F6AC85").s().p("AgaAHQgCgCAMgFQAMgHAGgBQAFAAAKADQALADgBACQgCAEgZADIgRACQgHAAgCgCg");
	this.shape_78.setTransform(52.6585,46.6089);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#593D35").s().p("AgoAlQgVgLgFgRQAHgsAygJQAygJAaAzQgYgfgoAEQgpADgPAkQAHAPAQAKQAOAJAQABIgJABQgPAAgQgJg");
	this.shape_79.setTransform(38.225,40.2754);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgEAEQgEgEAEgEQAEgFAFAHQAEADgFAEIgEACQgCAAgCgDg");
	this.shape_80.setTransform(36.7096,40.7635);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgBAHQgMgFABgFQABgIANAEQAOAEgDAHQgCAFgFAAQgDAAgEgCg");
	this.shape_81.setTransform(41.3402,41.1885);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2D3C4B").s().p("AgaAEQgEgXAfgEQAYgDACAYQACAXgYADIgGABQgWAAgDgVg");
	this.shape_82.setTransform(38.2076,39.3913);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4B8C9D").s().p("AgmAFQgGgiAugFQAigEADAjQADAhgiAFIgKAAQgfAAgFgeg");
	this.shape_83.setTransform(38.4032,39.8476);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FEF3F3").s().p("Ag1AHQALgiAlgDQAlgDAWAkQgZAbgiACIgFAAQggAAgLgZg");
	this.shape_84.setTransform(39.275,40.8459);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FBCCCD").s().p("AgMApQgkgCgRgYQgHgLANgSQAQgWAfgDQAbgEAUAOQALAIAMAMQAKAHABAGQABAJgOAEQggAYgiAAIgCAAg");
	this.shape_85.setTransform(38.8944,40.5669);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#403631").s().p("AglBBQgEgVAigqIAigmQgUAOgTAKQgpAUgDgOQgDgQA7gZQAcgMAegJIguBOQgkA7gKAAQgDAAAAgEg");
	this.shape_86.setTransform(16.1949,25.1439);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#403631").s().p("AgoBpQgagKgQgYQgpg5A1hKQAsg/A+ARQA8ARAFA1IgYBAQgfBCgmANQgJADgKAAQgOAAgPgFg");
	this.shape_87.setTransform(23.9729,11.579);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#403631").s().p("ABXgZQgohriKghQgwgKATgMIAdgKQCWAMAxCEQAsB4g+CDQAdiLgghUg");
	this.shape_88.setTransform(59.1708,35.475);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F6937A").s().p("AgKAhQhGgGAWgqQANgaAqAJQAuAKAVA1QgYAEgXAAIgbgCg");
	this.shape_89.setTransform(38.662,36.5507);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F6AC85").s().p("AgGAlQg1gSAMgmQAKgfAjAKQARAFAPAMIAGAXQAHAZAHAHQgCAKgSABIgEAAQgQAAgQgGg");
	this.shape_90.setTransform(27.1634,46.6234);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#403631").s().p("Aj+CxQgchBAGhVQAHhdAxhDQA5hPBngWQBxgXBTArQBHAlAnBPQAiBEgCBHQgCBHgiAaQAPhLg1hAQg8hKhpASQhzAVg+BaQg5BVAPBoQgtAAgdhCg");
	this.shape_91.setTransform(45.3034,24.2879);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#593D35").s().p("AAoAYQAMgOAAgRQgagdgnAMQgnAMgMAkQAHg4AzgKQAxgKAWAoQABAQgQATQgQATgTADQAPgIAKgNg");
	this.shape_92.setTransform(62.8279,34.9088);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgDAFQgFgEAEgEQAEgFAFAFQAEADgEAEQgBABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_93.setTransform(59.9471,36.4251);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAAAHQgMgDgBgFQAAgIAOACQAOABgBAIQgBAGgHAAIgGgBg");
	this.shape_94.setTransform(64.5812,36.1135);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2D3C4B").s().p("AgZAIQgHgWAfgJQAWgGAFAXQAGAXgXAGQgHACgFAAQgRAAgFgRg");
	this.shape_95.setTransform(61.2154,34.7925);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4B8C9D").s().p("AglALQgKggAtgNQAhgJAIAiQAHAgghAKQgKAEgIAAQgYAAgIgag");
	this.shape_96.setTransform(61.496,35.2028);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FEF3F3").s().p("AgyAXQAHgqAlgLQAkgLAVAeQgCAcgkAMQgNAFgNAAQgTAAgSgLg");
	this.shape_97.setTransform(62.1,36.0076);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FBCCCD").s().p("AgvAmQgOABgDgIQgBgHAHgKQAGgPAIgLQAOgUAcgHQAdgIAWAOQATANgDANQgIAcggAOQgTAIgTAAQgRAAgRgFg");
	this.shape_98.setTransform(62.389,35.4985);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F6937A").s().p("AgkgRQAagnArAIIAXAiIgkATQgpAYgiAVQgDgkAWgfg");
	this.shape_99.setTransform(61.6014,32.9569);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FBC0A4").s().p("AgGADQgMgVAKAAQALgBAHAQQAGAOgGAHIgDABQgFAAgIgQg");
	this.shape_100.setTransform(74.0041,35.7637);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F6AC85").s().p("AghAyQADgKgFgaIgGgXQAJgRAOgNQAagaAWAXQAcAdgnAoQgPAQgPAHQgIAEgGAAQgFAAgDgEg");
	this.shape_101.setTransform(71.9145,37.9921);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#593D35").s().p("AghADQAPgKAKgCQANgCAOgBQAQAAAFAEQAFAGACAGQADAIgFgBIg3gJQgWABgPAKIAOgKg");
	this.shape_102.setTransform(38.8946,30.125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#593D35").s().p("AgvARQgBgIAEgGQAEgGARgJQATgLAKAAQAQgBAbAOQgPgFgXACQgFABgWARQgYATgCAAIgBAAQgDAAgBgHg");
	this.shape_103.setTransform(59.94,26.4354);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FBC0A4").s().p("AhkCnQhHg5AGheQAFhPAqhCQAqhAA3gPQAjgCAzAiQA9AoAfBAQAeBng7BcQgxBNg2AIQgLABgKAAQg0AAg0gqg");
	this.shape_104.setTransform(51.4965,41.3423);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F6AC85").s().p("Ah4C6QhchEAGhqQAFhNAuhBQAsg/BAgbQBBgcA8AYQBEAaAoBWQAIAQAEAZIAGAnQAPBig9BVQg1BJg6AKQgPACgQAAQhEAAhEgyg");
	this.shape_105.setTransform(48.8179,39.526);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#40A6B0").s().p("Ag1C0QgpgKgvhLQgxhagWgiIgwhKQgPgZADgIQADgJAfgKQAegJANAEQAEABALARQAPAUANANQAyAvBagBQAOACAgAiQAQARANAQQgDgQABgTQAAgmAPgNQAUgRAKgeQAKgggJgWQAXgFAdADQAaADAKAHQAFAEAEA8QADBAAJANQAUAfASApQAZA4gHAWQgKAegjAIQgOAEhSAHQgOABhWAOQgVADgSAAQgYAAgVgFg");
	this.shape_106.setTransform(52.4622,89.9847);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#40A6B0").s().p("ACiBvQgSghgFgfQgDARgCAsQgDAjgLAAQgWAAhggwQhtg2gpgtQgTgVgXg1QgZg6AJgQQAMAACGBOQCOBSAiAMQAeAKAPgOQAIAZAZA+QAQAoAAAKQgZAAgXgqg");
	this.shape_107.setTransform(91.6834,87.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2E95A8").s().p("AgpLeQhZgLhMgYQhIgXgegZQgLgJBcmMQBjmtAAhuQAsAIA3gJQAxgIAKgLQg1gIgZgGQgqgJgmgXQgQgJgjhRQgkhXgJgRQgPgbgog3QgcgnADgHQAFgKA0gRQAygRAMACQAEABAcAlQAcAnAcAMQAcALAfgCQAhgCAFABQARAGASAgQAPAbAGgEQAGgDgBggQAAghAJgJQAVgGALgcQALgegIghQAVgFBAAIQAKAQAVA9IAdBTQAIAQAbAoQAYApAAAlQABAdgdAoQggAsgCAIQgFAUAhF+QAlGpgCC5QhcAziOAAQg3AAg+gIg");
	this.shape_108.setTransform(51.9739,145.5779);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#40A6B0").s().p("AhjLuQkkgFiAiAQgMgWAwiGQBVjvAQgyQCEmuiJioIgfA+QggBBAAAPQgBALA1AnQAwAkgLAFQgOAIgrBCQgpA/gHAVQgDAJgdgXQgcgWgigmQhXhhACgwQACgvBXi3QBXi2AfgUQAZgQAzgSQA5gUAGAMQAkBQBEAKQAjAFAngJQASAEAeA2IAAgjQADgjALgCQAkgVgBgiQgHgfADgEQAMgGAoAEQAmADATAGQADABCdBVQCXBRAUAAQAOAAAkgiIA6g3QAYgVA7BVQA7BUgWAYQgoAshCAkQg+AhgiAAQgaAAh/g4Ih5g5QAbAmgMArQgFAQgjA9QgHANAAAvQgBAyAJAwQAKA/AcGCQAdGSgKASQgLAWhWAQQhTAQhjAAIgRAAg");
	this.shape_109.setTransform(64.5849,146.0165);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C9C4D6").s().p("AiKFaQgLgOAFgRIALgYQADgFgIgRQgJgSACgLQACgWASoyICCgNQCFgHAJAbQiFIoADAIQAKAXAAASQgBASgJAHQgDACAHASQAGASgRAOQgSAPg5ADIgSABQgsAAgLgOg");
	this.shape_110.setTransform(60.9742,244.5422);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D68770").s().p("AgGgQIAvhBIhOCjQgOgcAthGg");
	this.shape_111.setTransform(20.0089,109.95);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EC8D62").s().p("AhIAOQAIgvgGgeIChACIgYAsQgaAsgQAAQgQAAgQgPQgQgOgGgDQgDgCgVAhQgWAkgOACQAJgGAIgsg");
	this.shape_112.setTransform(46.6,66.45);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FBC0A4").s().p("AAVAsQgiAEgegEQg6gHgbgsQARAGAwgGQAwgFAKgIQAHgGATgbIAVgeIAHARQAIARAIACQADABAeABQAZAAADAGQAHAKgNAYQgPAbgbAJQgHAEgHAZIgFAYQgVglgRgDg");
	this.shape_113.setTransform(50.3083,76.925);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F1EFF7").s().p("AAYANQgYAAgagNQgegPAnAEQAmADARAOQAIAHgUAAIgCAAg");
	this.shape_114.setTransform(20.7771,279.5355);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F1EFF7").s().p("AhNDfQgmgOgHgOQgEgKAbgFQAegGABgDQABgDgLgHQgNgIgCgLQgDgPAxibQAvibALgMQAKgNAzgNQAygNABAJQACAJhLDDQhKC+gHAKQgEAGgQABQgSABgBABQgBABAUALQAVAMgDAJQgCAIgNAAQgLAAgSgGg");
	this.shape_115.setTransform(29.2704,253.0086);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#DFDCE9").s().p("AhcEaQg7gRgEgaQgBgKAgADQAdABgGgKIgfgiQgPgVAYgKQAJgDAoi/QArjOAQgfQAPgIBHgGQBMgGAIAPQAKARhYDkQhVDegJAFQgEADAFAIQAGALgCAJQgDAJgNAHQgNAGgCAFQgBADAJAIQAIAGgDAMQgDAJgQAAQgQAAgbgIg");
	this.shape_116.setTransform(28.3977,252.8497);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F8BACA").s().p("AgBAIQgJgDACgGQABgIALACQAHABgDAIQgCAHgFAAIgCgBg");
	this.shape_117.setTransform(6.6588,300.1822);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F06279").s().p("Ag8BPQgNgIAFgtQAGgyAbg3QgNBMAoADQAhAEAtgoQgjA7gpAiQgeAXgQAAQgEAAgEgBg");
	this.shape_118.setTransform(12.1806,294.7426);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D4404E").s().p("AhFBzQgtgOAlhqQANgmATgkQARghAHgEQgCAJgSA7QgMA3AdAIQAdAJAngiQAZgWAZgkQgIAyg3BGQgzBBglAAQgGAAgGgCg");
	this.shape_119.setTransform(13.3577,292.6383);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C9C4D6").s().p("Ah5FgQgxgQgOgUQgMgTALgPQAMgPgCgDQgHgKAEgQQAFgTAQgSQAGgHBeoiQAQgXB2AkQA7ASA4AWQjPIXgBAVQgCAZgNAKQgMAIAAADIAEAZQAAATgPAKQgIAFgNAAQgSAAgcgKg");
	this.shape_120.setTransform(30.0495,247.3636);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F6AC85").s().p("AirHGQglgOAph0QAyh3ADgQIChqEICPATIi8KoIg9BzQg9BhgoAAQgGAAgFgCg");
	this.shape_121.setTransform(24.2918,257.8809);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F6AC85").s().p("AhuCVQhUgchBg6QghgdBZgfIBGgUQAkgLAGgFQAMgMAFg/IADg8ICQAVIAFApQAHAsAOAOQAJAJA8AFQBCAFAjATQgWBOg9AvQg5ArhRAJQgTACgTAAQg7AAg9gUg");
	this.shape_122.setTransform(46.6787,75.5532);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F6AC85").s().p("AgEGaQhEgjgegkQgVgaAfl1IAjlwICogHQhYJtgFAzQgDAcAuBSQAqBMgIAGQgIAHgPAAQgcAAgwgag");
	this.shape_123.setTransform(59.576,252.0782);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123,p:{scaleX:1,scaleY:1,x:59.576,y:252.0782}},{t:this.shape_122,p:{scaleX:1,scaleY:1,x:46.6787,y:75.5532}},{t:this.shape_121,p:{scaleX:1,scaleY:1,x:24.2918,y:257.8809}},{t:this.shape_120,p:{scaleX:1,scaleY:1,x:30.0495,y:247.3636}},{t:this.shape_119,p:{scaleX:1,scaleY:1,x:13.3577,y:292.6383}},{t:this.shape_118,p:{scaleX:1,scaleY:1,x:12.1806,y:294.7426}},{t:this.shape_117,p:{scaleX:1,scaleY:1,x:6.6588,y:300.1822}},{t:this.shape_116,p:{scaleX:1,scaleY:1,x:28.3977,y:252.8497}},{t:this.shape_115,p:{scaleX:1,scaleY:1,x:29.2704,y:253.0086}},{t:this.shape_114,p:{scaleX:1,scaleY:1,x:20.7771,y:279.5355}},{t:this.shape_113,p:{scaleX:1,scaleY:1,x:50.3083,y:76.925}},{t:this.shape_112,p:{scaleX:1,scaleY:1,x:46.6,y:66.45}},{t:this.shape_111,p:{scaleX:1,scaleY:1,x:20.0089,y:109.95}},{t:this.shape_110,p:{scaleX:1,scaleY:1,x:60.9742,y:244.5422}},{t:this.shape_109,p:{scaleX:1,scaleY:1,x:64.5849,y:146.0165}},{t:this.shape_108,p:{scaleX:1,scaleY:1,x:51.9739,y:145.5779}},{t:this.shape_107,p:{scaleX:1,scaleY:1,x:91.6834,y:87.225}},{t:this.shape_106,p:{scaleX:1,scaleY:1,x:52.4622,y:89.9847}},{t:this.shape_105,p:{scaleX:1,scaleY:1,x:48.8179,y:39.526}},{t:this.shape_104,p:{scaleX:1,scaleY:1,x:51.4965,y:41.3423}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:59.94,y:26.4354}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:38.8946,y:30.125}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:71.9145,y:37.9921}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:74.0041,y:35.7637}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:61.6014,y:32.9569}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:62.389,y:35.4985}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:62.1,y:36.0076}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:61.496,y:35.2028}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:61.2154,y:34.7925}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:64.5812,y:36.1135}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:59.9471,y:36.4251}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:62.8279,y:34.9088}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:45.3034,y:24.2879}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:27.1634,y:46.6234}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:38.662,y:36.5507}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:59.1708,y:35.475}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:23.9729,y:11.579}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:16.1949,y:25.1439}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:38.8944,y:40.5669}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:39.275,y:40.8459}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:38.4032,y:39.8476}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:38.2076,y:39.3913}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:41.3402,y:41.1885}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:36.7096,y:40.7635}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:38.225,y:40.2754}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:52.6585,y:46.6089}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:60.6352,y:49.2034}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:43.95,y:52.0053}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:52.5,y:52.7913}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:53,y:52.2133}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:52.25,y:50.9018}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:52.45,y:53.2302}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:50.895,y:54.8997}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:61.5042,y:31.2485}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:58.3678,y:12.2723}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:47.35,y:3.0407}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:33.5241,y:19.2964}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:53.3756,y:5.9764}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:38.3684,y:11.3061}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:46.2364,y:2.1971}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:35.5763,y:5.2849}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:20.6196,y:7.993}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:16.9211,y:8.0428}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:20.3304,y:6.6635}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:13.9508,y:22.2898}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:59.78,y:249.827}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:18.6965,y:131.3607}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:23.6359,y:134.0262}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:118.9565,y:92.1392}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:122.7159,y:87.9307}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:130.9519,y:74.5323}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:135.775,y:68.6}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:14.5383,y:103.575}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:18.985,y:129.8429}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:116.575,y:90.9954}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:140.6862,y:68.4729}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:139.2342,y:69.3549}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:141.0675,y:74.1997}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:139.2236,y:74.7409}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:141.0648,y:71.507}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:139.4652,y:72.2166}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:125.025,y:81.211}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:60.3145,y:291.5755}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:136.325,y:62.3792}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:140.0412,y:63.3279}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:140.7161,y:63.4482}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:134.345,y:62.7442}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:131.9863,y:66.6475}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:136.0666,y:58.0339}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:60.7,y:114.9561}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:60.025,y:119.1771}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:39.3,y:115.9084}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:77.75,y:122.9543}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:59.3996,y:127.2788}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:59.7994,y:122.8265}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:42.1677,y:129.97}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:29.8015,y:131.55}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:49.9248,y:129.4963}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:55.7874,y:132.1304}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:53.0909,y:130.7413}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:56.6609,y:134.0676}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:36.1419,y:124.7378}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:79.6041,y:124.7764}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:39.6915,y:117.6112}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:56.0139,y:179.1464}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:38.9489,y:39.4279}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:36.7546,y:37.35}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:35.7144,y:29.0857}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:24.15,y:45.5098}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:52.2898,y:85.3016}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:52.9517,y:85.1048}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:60.5095,y:248.6236}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:56.7598,y:275.2035}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:64.3801,y:28.675}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:53.55,y:44.625}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:138.7523,y:65.6995}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:135.5648,y:61.4583}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:57.6095,y:129.0632}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:61.0263,y:129.9488}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:61.2139,y:132.0891}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:53.2469,y:128.3875}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:33.4613,y:123.045}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:61.375,y:292.0341}},{t:this.shape,p:{scaleX:1,scaleY:1,x:70.7088,y:298.3072}}]}).to({state:[{t:this.shape_123,p:{scaleX:0.7999,scaleY:0.7999,x:62.4358,y:232.4577}},{t:this.shape_122,p:{scaleX:0.7999,scaleY:0.7999,x:52.1199,y:91.2642}},{t:this.shape_121,p:{scaleX:0.7998,scaleY:0.7998,x:34.3455,y:237.2545}},{t:this.shape_120,p:{scaleX:0.7998,scaleY:0.7998,x:38.9505,y:228.8426}},{t:this.shape_119,p:{scaleX:0.7998,scaleY:0.7998,x:25.6003,y:265.0536}},{t:this.shape_118,p:{scaleX:0.7998,scaleY:0.7998,x:24.6589,y:266.7366}},{t:this.shape_117,p:{scaleX:0.7998,scaleY:0.7998,x:20.2425,y:271.0872}},{t:this.shape_116,p:{scaleX:0.7998,scaleY:0.7998,x:37.6294,y:233.2305}},{t:this.shape_115,p:{scaleX:0.7998,scaleY:0.7998,x:38.3274,y:233.3576}},{t:this.shape_114,p:{scaleX:0.7998,scaleY:0.7998,x:31.5344,y:254.5739}},{t:this.shape_113,p:{scaleX:0.7999,scaleY:0.7999,x:55.0231,y:92.3614}},{t:this.shape_112,p:{scaleX:0.7999,scaleY:0.7999,x:52.057,y:83.983}},{t:this.shape_111,p:{scaleX:0.7999,scaleY:0.7999,x:30.7881,y:118.7765}},{t:this.shape_110,p:{scaleX:0.7999,scaleY:0.7999,x:63.5542,y:226.4301}},{t:this.shape_109,p:{scaleX:0.7999,scaleY:0.7999,x:66.4422,y:147.6242}},{t:this.shape_108,p:{scaleX:0.7999,scaleY:0.7999,x:56.3553,y:147.2734}},{t:this.shape_107,p:{scaleX:0.7999,scaleY:0.7999,x:88.1169,y:100.5998}},{t:this.shape_106,p:{scaleX:0.7999,scaleY:0.7999,x:56.7459,y:102.8072}},{t:this.shape_105,p:{scaleX:0.7999,scaleY:0.7999,x:53.831,y:62.4477}},{t:this.shape_104,p:{scaleX:0.7999,scaleY:0.7999,x:55.9734,y:63.9005}},{t:this.shape_103,p:{scaleX:0.7999,scaleY:0.7999,x:62.727,y:51.9772}},{t:this.shape_102,p:{scaleX:0.7999,scaleY:0.7999,x:45.8939,y:54.9284}},{t:this.shape_101,p:{scaleX:0.7999,scaleY:0.7999,x:72.3048,y:61.2209}},{t:this.shape_100,p:{scaleX:0.7999,scaleY:0.7999,x:73.9762,y:59.4385}},{t:this.shape_99,p:{scaleX:0.7999,scaleY:0.7999,x:64.0559,y:57.1935}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:64.8158,y:59.392}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:64.5847,y:59.7992}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:64.1016,y:59.1555}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:63.8771,y:58.8273}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:66.5692,y:59.8839}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:62.8627,y:60.133}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:65.1669,y:58.9204}},{t:this.shape_91,p:{scaleX:0.7999,scaleY:0.7999,x:51.0199,y:50.2596}},{t:this.shape_90,p:{scaleX:0.7999,scaleY:0.7999,x:36.5106,y:68.1247}},{t:this.shape_89,p:{scaleX:0.7999,scaleY:0.7999,x:45.7077,y:60.068}},{t:this.shape_88,p:{scaleX:0.7999,scaleY:0.7999,x:62.1117,y:59.2076}},{t:this.shape_87,p:{scaleX:0.7999,scaleY:0.7999,x:33.9587,y:40.0943}},{t:this.shape_86,p:{scaleX:0.7999,scaleY:0.7999,x:27.7374,y:50.9442}},{t:this.shape_85,p:{scaleX:0.7998,scaleY:0.7998,x:46.0247,y:63.4457}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:46.3291,y:63.6688}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:45.6319,y:62.8704}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:45.4754,y:62.5054}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:47.9809,y:63.9428}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:44.2773,y:63.603}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:45.4893,y:63.2126}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:56.9029,y:68.1131}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:63.4132,y:70.3532}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:50.0682,y:72.5942}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:56.9065,y:73.2229}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:57.3064,y:72.7605}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:56.7066,y:71.7116}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:56.8666,y:73.5739}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:55.6229,y:74.9091}},{t:this.shape_70,p:{scaleX:0.7999,scaleY:0.7999,x:63.9781,y:55.827}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:61.4694,y:40.6489}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:52.6569,y:33.265}},{t:this.shape_67,p:{scaleX:0.7999,scaleY:0.7999,x:41.5982,y:46.2671}},{t:this.shape_66,p:{scaleX:0.7999,scaleY:0.7999,x:57.4765,y:35.6131}},{t:this.shape_65,p:{scaleX:0.7999,scaleY:0.7999,x:45.4729,y:39.8761}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:51.7661,y:32.5902}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:43.2397,y:35.06}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:31.2765,y:37.2261}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:28.3183,y:37.2659}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:31.0452,y:36.1627}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:25.9425,y:48.6614}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:62.599,y:230.6572}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:29.7383,y:135.9018}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:33.6891,y:138.0338}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:109.9314,y:104.5304}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:112.9384,y:101.1643}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:119.5259,y:90.4476}},{t:this.shape_52,p:{scaleX:0.7999,scaleY:0.7999,x:123.3837,y:85.7026}},{t:this.shape_51,p:{scaleX:0.7999,scaleY:0.7999,x:26.4124,y:113.6774}},{t:this.shape_50,p:{scaleX:0.7999,scaleY:0.7999,x:29.9691,y:134.6878}},{t:this.shape_49,p:{scaleX:0.7999,scaleY:0.7999,x:108.0265,y:103.6156}},{t:this.shape_48,p:{scaleX:0.7999,scaleY:0.7999,x:127.3119,y:85.6009}},{t:this.shape_47,p:{scaleX:0.7999,scaleY:0.7999,x:126.1505,y:86.3064}},{t:this.shape_46,p:{scaleX:0.7999,scaleY:0.7999,x:127.6168,y:90.1815}},{t:this.shape_45,p:{scaleX:0.7999,scaleY:0.7999,x:126.142,y:90.6144}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:127.6147,y:88.0278}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:126.3352,y:88.5954}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:114.7852,y:95.7896}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:63.0265,y:264.0497}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:123.8236,y:80.7269}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:126.796,y:81.4857}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:127.3358,y:81.5819}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:122.2399,y:81.0189}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:120.3532,y:84.1409}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:123.6169,y:77.2513}},{t:this.shape_34,p:{scaleX:0.7998,scaleY:0.7998,x:63.4649,y:122.9425}},{t:this.shape_33,p:{scaleX:0.7998,scaleY:0.7998,x:62.9251,y:126.3185}},{t:this.shape_32,p:{scaleX:0.7998,scaleY:0.7998,x:46.3491,y:123.7042}},{t:this.shape_31,p:{scaleX:0.7998,scaleY:0.7998,x:77.1016,y:129.3395}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:62.4249,y:132.7983}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:62.7446,y:129.2373}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:48.6427,y:134.9507}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:38.7522,y:136.2144}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:54.8469,y:134.5718}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:59.5358,y:136.6786}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:57.3792,y:135.5676}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:60.2345,y:138.228}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:43.8232,y:130.766}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:78.4553,y:130.6353}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:46.5312,y:124.9043}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:59.5867,y:174.1232}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:45.9373,y:62.3693}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:44.1821,y:60.7073}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:43.3502,y:54.0971}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:34.1003,y:67.2339}},{t:this.shape_14,p:{scaleX:0.7999,scaleY:0.7999,x:56.608,y:99.0614}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:57.1374,y:98.904}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:63.1825,y:229.6946}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:60.1833,y:250.9545}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:66.2784,y:53.7686}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:57.6159,y:66.5262}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:125.7651,y:83.3827}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:123.2155,y:79.9904}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:60.863,y:134.0642}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:63.5958,y:134.7725}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:63.7459,y:136.4845}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:57.3735,y:133.5237}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:41.548,y:129.2505}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:63.6147,y:264.1588}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:71.0812,y:269.1769}}]},1).to({state:[{t:this.shape_123,p:{scaleX:0.7999,scaleY:0.7999,x:62.4358,y:232.4577}},{t:this.shape_122,p:{scaleX:0.7999,scaleY:0.7999,x:52.1199,y:91.2642}},{t:this.shape_121,p:{scaleX:0.7998,scaleY:0.7998,x:34.3455,y:237.2545}},{t:this.shape_120,p:{scaleX:0.7998,scaleY:0.7998,x:38.9505,y:228.8426}},{t:this.shape_119,p:{scaleX:0.7998,scaleY:0.7998,x:25.6003,y:265.0536}},{t:this.shape_118,p:{scaleX:0.7998,scaleY:0.7998,x:24.6589,y:266.7366}},{t:this.shape_117,p:{scaleX:0.7998,scaleY:0.7998,x:20.2425,y:271.0872}},{t:this.shape_116,p:{scaleX:0.7998,scaleY:0.7998,x:37.6294,y:233.2305}},{t:this.shape_115,p:{scaleX:0.7998,scaleY:0.7998,x:38.3274,y:233.3576}},{t:this.shape_114,p:{scaleX:0.7998,scaleY:0.7998,x:31.5344,y:254.5739}},{t:this.shape_113,p:{scaleX:0.7999,scaleY:0.7999,x:55.0231,y:92.3614}},{t:this.shape_112,p:{scaleX:0.7999,scaleY:0.7999,x:52.057,y:83.983}},{t:this.shape_111,p:{scaleX:0.7999,scaleY:0.7999,x:30.7881,y:118.7765}},{t:this.shape_110,p:{scaleX:0.7999,scaleY:0.7999,x:63.5542,y:226.4301}},{t:this.shape_109,p:{scaleX:0.7999,scaleY:0.7999,x:66.4422,y:147.6242}},{t:this.shape_108,p:{scaleX:0.7999,scaleY:0.7999,x:56.3553,y:147.2734}},{t:this.shape_107,p:{scaleX:0.7999,scaleY:0.7999,x:88.1169,y:100.5998}},{t:this.shape_106,p:{scaleX:0.7999,scaleY:0.7999,x:56.7459,y:102.8072}},{t:this.shape_105,p:{scaleX:0.7999,scaleY:0.7999,x:53.831,y:62.4477}},{t:this.shape_104,p:{scaleX:0.7999,scaleY:0.7999,x:55.9734,y:63.9005}},{t:this.shape_103,p:{scaleX:0.7999,scaleY:0.7999,x:62.727,y:51.9772}},{t:this.shape_102,p:{scaleX:0.7999,scaleY:0.7999,x:45.8939,y:54.9284}},{t:this.shape_101,p:{scaleX:0.7999,scaleY:0.7999,x:72.3048,y:61.2209}},{t:this.shape_100,p:{scaleX:0.7999,scaleY:0.7999,x:73.9762,y:59.4385}},{t:this.shape_99,p:{scaleX:0.7999,scaleY:0.7999,x:64.0559,y:57.1935}},{t:this.shape_98,p:{scaleX:0.7998,scaleY:0.7998,x:64.8158,y:59.392}},{t:this.shape_97,p:{scaleX:0.7998,scaleY:0.7998,x:64.5847,y:59.7992}},{t:this.shape_96,p:{scaleX:0.7998,scaleY:0.7998,x:64.1016,y:59.1555}},{t:this.shape_95,p:{scaleX:0.7998,scaleY:0.7998,x:63.8771,y:58.8273}},{t:this.shape_94,p:{scaleX:0.7998,scaleY:0.7998,x:66.5692,y:59.8839}},{t:this.shape_93,p:{scaleX:0.7998,scaleY:0.7998,x:62.8627,y:60.133}},{t:this.shape_92,p:{scaleX:0.7998,scaleY:0.7998,x:65.1669,y:58.9204}},{t:this.shape_91,p:{scaleX:0.7999,scaleY:0.7999,x:51.0199,y:50.2596}},{t:this.shape_90,p:{scaleX:0.7999,scaleY:0.7999,x:36.5106,y:68.1247}},{t:this.shape_89,p:{scaleX:0.7999,scaleY:0.7999,x:45.7077,y:60.068}},{t:this.shape_88,p:{scaleX:0.7999,scaleY:0.7999,x:62.1117,y:59.2076}},{t:this.shape_87,p:{scaleX:0.7999,scaleY:0.7999,x:33.9587,y:40.0943}},{t:this.shape_86,p:{scaleX:0.7999,scaleY:0.7999,x:27.7374,y:50.9442}},{t:this.shape_85,p:{scaleX:0.7998,scaleY:0.7998,x:46.0247,y:63.4457}},{t:this.shape_84,p:{scaleX:0.7998,scaleY:0.7998,x:46.3291,y:63.6688}},{t:this.shape_83,p:{scaleX:0.7998,scaleY:0.7998,x:45.6319,y:62.8704}},{t:this.shape_82,p:{scaleX:0.7998,scaleY:0.7998,x:45.4754,y:62.5054}},{t:this.shape_81,p:{scaleX:0.7998,scaleY:0.7998,x:47.9809,y:63.9428}},{t:this.shape_80,p:{scaleX:0.7998,scaleY:0.7998,x:44.2773,y:63.603}},{t:this.shape_79,p:{scaleX:0.7998,scaleY:0.7998,x:45.4893,y:63.2126}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:56.9029,y:68.1131}},{t:this.shape_77,p:{scaleX:0.7998,scaleY:0.7998,x:63.4132,y:70.3532}},{t:this.shape_76,p:{scaleX:0.7998,scaleY:0.7998,x:50.0682,y:72.5942}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:56.9065,y:73.2229}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:57.3064,y:72.7605}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:56.7066,y:71.7116}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:56.8666,y:73.5739}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:55.6229,y:74.9091}},{t:this.shape_70,p:{scaleX:0.7999,scaleY:0.7999,x:63.9781,y:55.827}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:61.4694,y:40.6489}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:52.6569,y:33.265}},{t:this.shape_67,p:{scaleX:0.7999,scaleY:0.7999,x:41.5982,y:46.2671}},{t:this.shape_66,p:{scaleX:0.7999,scaleY:0.7999,x:57.4765,y:35.6131}},{t:this.shape_65,p:{scaleX:0.7999,scaleY:0.7999,x:45.4729,y:39.8761}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:51.7661,y:32.5902}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:43.2397,y:35.06}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:31.2765,y:37.2261}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:28.3183,y:37.2659}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:31.0452,y:36.1627}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:25.9425,y:48.6614}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:62.599,y:230.6572}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:29.7383,y:135.9018}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:33.6891,y:138.0338}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:109.9314,y:104.5304}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:112.9384,y:101.1643}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:119.5259,y:90.4476}},{t:this.shape_52,p:{scaleX:0.7999,scaleY:0.7999,x:123.3837,y:85.7026}},{t:this.shape_51,p:{scaleX:0.7999,scaleY:0.7999,x:26.4124,y:113.6774}},{t:this.shape_50,p:{scaleX:0.7999,scaleY:0.7999,x:29.9691,y:134.6878}},{t:this.shape_49,p:{scaleX:0.7999,scaleY:0.7999,x:108.0265,y:103.6156}},{t:this.shape_48,p:{scaleX:0.7999,scaleY:0.7999,x:127.3119,y:85.6009}},{t:this.shape_47,p:{scaleX:0.7999,scaleY:0.7999,x:126.1505,y:86.3064}},{t:this.shape_46,p:{scaleX:0.7999,scaleY:0.7999,x:127.6168,y:90.1815}},{t:this.shape_45,p:{scaleX:0.7999,scaleY:0.7999,x:126.142,y:90.6144}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:127.6147,y:88.0278}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:126.3352,y:88.5954}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:114.7852,y:95.7896}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:63.0265,y:264.0497}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:123.8236,y:80.7269}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:126.796,y:81.4857}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:127.3358,y:81.5819}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:122.2399,y:81.0189}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:120.3532,y:84.1409}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:123.6169,y:77.2513}},{t:this.shape_34,p:{scaleX:0.7998,scaleY:0.7998,x:63.4649,y:122.9425}},{t:this.shape_33,p:{scaleX:0.7998,scaleY:0.7998,x:62.9251,y:126.3185}},{t:this.shape_32,p:{scaleX:0.7998,scaleY:0.7998,x:46.3491,y:123.7042}},{t:this.shape_31,p:{scaleX:0.7998,scaleY:0.7998,x:77.1016,y:129.3395}},{t:this.shape_30,p:{scaleX:0.7998,scaleY:0.7998,x:62.4249,y:132.7983}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:62.7446,y:129.2373}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:48.6427,y:134.9507}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:38.7522,y:136.2144}},{t:this.shape_26,p:{scaleX:0.7998,scaleY:0.7998,x:54.8469,y:134.5718}},{t:this.shape_25,p:{scaleX:0.7998,scaleY:0.7998,x:59.5358,y:136.6786}},{t:this.shape_24,p:{scaleX:0.7998,scaleY:0.7998,x:57.3792,y:135.5676}},{t:this.shape_23,p:{scaleX:0.7998,scaleY:0.7998,x:60.2345,y:138.228}},{t:this.shape_22,p:{scaleX:0.7998,scaleY:0.7998,x:43.8232,y:130.766}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:78.4553,y:130.6353}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:46.5312,y:124.9043}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:59.5867,y:174.1232}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:45.9373,y:62.3693}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:44.1821,y:60.7073}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:43.3502,y:54.0971}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:34.1003,y:67.2339}},{t:this.shape_14,p:{scaleX:0.7999,scaleY:0.7999,x:56.608,y:99.0614}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:57.1374,y:98.904}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:63.1825,y:229.6946}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:60.1833,y:250.9545}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:66.2784,y:53.7686}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:57.6159,y:66.5262}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:125.7651,y:83.3827}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:123.2155,y:79.9904}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:60.863,y:134.0642}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:63.5958,y:134.7725}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:63.7459,y:136.4845}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:57.3735,y:133.5237}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:41.548,y:129.2505}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:63.6147,y:264.1588}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:71.0812,y:269.1769}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.9,304.4);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhkAVQgBgGAFgCIBggaQA3gNAsACQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgqADg4APQg+ASggAJIgCAAQgDAAgCgEg");
	this.shape.setTransform(297.2167,114.2027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDAIQgngEgbgBIhAgDIghAAQgVAAgNgEQgDgBAAgEQAAgDAEgBQAMgCASABIAfADIBGAEQBXAHAsAMIABACIgCABIhBgHg");
	this.shape_1.setTransform(297.175,126.6679);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACEAVQg+gXhCgGQhHgGg8AQQgFABgCgFQgBgGAGgBQA/gRBGAIQBHAHA7AdQAAAAAAAAQABABAAAAQAAAAAAABQAAAAgBAAIgBACIgBgBg");
	this.shape_2.setTransform(294.3123,119.0533);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABKA/QgCgEgCgIIgCgMQgDgKgJgPQgMgSgcgRQgSgMgdgKIgygSQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQBDAMApAaQAZAPANAUQAWAigGATQAAADgEAAQgDAAgBgCg");
	this.shape_3.setTransform(316.8593,123.8688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBOQgBgwgagrQgZgrgqgXIAAgCQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABABQAuARAdAwQAdAsgBAzQAAAGgFAAQgGgBAAgFg");
	this.shape_4.setTransform(321.3683,136.2438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AACBSQgmgkgmgyQgCgDACgCQADgDACADQAKAIA+BDQA9A8AQgVQAHgJgFgSQgCgHgIgTQgLgZgUgeQgthEhagyQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQArARAnAfQAlAeAbAnQAZAkAKAdQANAjgLARQgHANgNAAQgZAAgrgqg");
	this.shape_5.setTransform(333.4771,133.7031);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABVBNQgEgBABgFQABgEAEAAQALACAFgBQADAAgCgGIgEgHQgHgPgKgNQgUgYgogVQgXgMgtgRQgwgRgVgLQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIBcAfQAzAUAhAYQAhAXAQAjQAIAPgKAGQgFADgHAAQgFAAgIgCg");
	this.shape_6.setTransform(332.8045,121.8878);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABIAzQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAABQAcACASgPQAWgRgRgYQgQgXg3gHQgkgFglAFQgWACggAOQgJAEgTAMQgSAJgKAFQgEABgCgDQgCgDADgCQALgLATgLIAjgQQAcgMAcgCQA4gEArANQAVAGAOAMQATAOAAASQACAagXALQgNAGgQAAIgQgBg");
	this.shape_7.setTransform(326.9102,105.2395);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhLBCQgFgCACgEQAFgLAWgaQAVgYAXgWQAYgWAPgJQAagQAVAHQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAQgOgCgYAQQgWAOgXAXQgPAOgRAVIgfAmQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDAAg");
	this.shape_8.setTransform(320.0786,96.4403);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaCIQgFgDADgFQAjhAAJhAQALhPgXg4QAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAfA8gKBNQgJBGgkBAQgBABAAAAQAAABgBAAQgBAAAAABQgBAAAAAAIgEgCg");
	this.shape_9.setTransform(309.6066,87.3017);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyBjQgEAAgBgDQgCgJAAgTQgBgSgCgJQgFgYgOgdQgNgagSgWQgIgJgNgKIgXgRQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAtALAjBDQAQAbAHAdQAJAigFAaQgBABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIAAAAg");
	this.shape_10.setTransform(298.846,78.1198);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBCzQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIArgpQAZgYAOgUQAagkAKgyQAJgwgOgwQgPgvghgnQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgBQAmAfARAyQAPAvgHAzQgIA2gjAxQggArgzAhIgBABIgCgBg");
	this.shape_11.setTransform(289.4339,94.6117);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F4E4F").s().p("AknCYIgFgcIAVgFQAUAaAvgSQAegLAjgYIA8grQA3gnBRgzQAcgSAogTIBGgiQAegOAOgLQAYgSAJgWQACgGABgGQAEAZAPAUQAIAKAHAAQifBHh0BLQgwAfheBDQggAXgsAVIhPAkQgOgFgKghg");
	this.shape_12.setTransform(179.95,162.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F4E4F").s().p("AgLAPQiqgwgWgEIAAgkQAcAFCwA0QC5A1ASAKQgQAMgMAPQgJgIiygzg");
	this.shape_13.setTransform(22.025,250.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4F4E4F").s().p("Aj6HeQgjgDg0gIQgpgJgbgJIgTgHIgBAAQgygcgOgYQgUgfAZgoQAJgNAKgKQgJASAAATQAAAcASAYQAPATAJAEQAwAgCIAHQA1ADA0gLQA4gMAqgZQBVg1A+hjQAvhOA2iPQA/ioAcg5QAlhMAjg4QAKgPAUgZQAXgbAIgNQAWgegCgXIAVgRQAAAIAEAJIAJASQAJASAJAFQheBBhNCLQhCB5hBDOQghBrgiA+QgvBWhIAwQhOA0hfALQgWACgZAAIgpgBg");
	this.shape_14.setTransform(87.8104,227.4266);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4F4E4F").s().p("AiYAuQABgTASgRQBMAqB9gTQAygIARgTIAFgGQAGgQgTgRQAJALABAJQgIgOgcgFQgNgDgegCQhbgJhFAfQgLAFgLAIQgbAQgEAcQgGgeAggZQAZgUArgPQBdgRBNAJIAAAAQAfAJALATQAOAXgTATQgPAQgbAKQglANgvABQg0ABgvgMQgPgEgHAAQgPgBgFAKQgDAHADAFIgBAAQgRgGgNgIg");
	this.shape_15.setTransform(59.6651,256.5222);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F4E4F").s().p("Ah9A5IAEAAQAagBAxgGIA4gIQAhgFAWgLQAUgJAMgQQAOgRgHgUQgEgNgOgKQAMAHAKAJQAeAcgVAXQgOARgfAKQgVAFgZAFQg+AOgvABQgYAAgSgDg");
	this.shape_16.setTransform(69.3074,258.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#616264").s().p("AknCaIgFgcQAdgGAggSIA5giQAhgUArgeIBKgyQBQg2BUgqIBEgfQArgTAYgNQADAcAQAUQAIAKAHABQifBHh0BKQgwAgheBDQggAWgsAWIhPAkQgOgGgKggg");
	this.shape_17.setTransform(179.95,162.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#96979A").s().p("AhNA0QgSgTgDgQQAogNATgHIAagLIAagKIAUgFQANgDAHgDIAAAAQADAAAIgDQAIgCACAEIAAAAQAAgJgPAFQACgKAFgFQAGgHAJAIQAGAFAEAJQAEAIADAMQACATgDAGQgEAKgIACQgJABgHgJIAIgDIAAAAQAGAAACgEIABAAIAAAAQADgGgHgQIAAAAQADAKgBAGQAAAEgHAEIiVA3g");
	this.shape_18.setTransform(242.2068,133.3367);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#96979A").s().p("AhpAnQgJgTgCgOIAvgNIAugOIAjgMQAOAIAOgDQAXgFARgXIARgGQAIAHALASIABABQgIgEgGACQgIABgDAIIgBAHQgGgIgFgBQgHgCgDAJQgCAGAAAJIgCgCIgCgCQgHgFgFAFQgFAEAAAPQgCgEgHgCQgIAAgEADQgEAEgCAMQhAAZgnASIAAABQgLAAgLgYg");
	this.shape_19.setTransform(218.675,142.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#653F31").s().p("Al1DmQgGgCgIgOQgRgcACgZIgCgCIABgCQBDgWBSg2QBdhCAugeQA5gmBPgpQBYgtApgPIABAAQAVgKAigKIA3gRIAhgKQAQAMASgEQAXgEARgXIAGgJIAFgBQAHADAHAKIALAPIABABQgIgDgGABQgIACgDAIIgBAHQgGgIgFgBQgHgCgDAJQgCAGAAAIIgCgCIgCgBQgGgFgGAFQgGAGAAAOQgGgMgJAGQgLAIAAAUIhmAlIiVBPQhUAtg8AoIhHAxIhHAyQgcATgmAQQgPAHg2AVIAAACIgFAAIgCABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_20.setTransform(189.875,158.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#653F31").s().p("AhQAzQgUgVgBgVIA5gRIAwgSQAcgKAWgEIACgBQgCgJAGgHQAFgJAKAEQARAIAHAbQAIAcgLANQgGAIgKgDQgJgCgFgIIgBAAQhDAchGAbQgBgHgHgGg");
	this.shape_21.setTransform(242.4684,133.436);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F47A39").s().p("AhHAzQAAgNgDgEQgEgHgNAAIADgeIACghIAPACQAJgBAFgFIAKgQQAHgKAGgEQANgIAVACIAAAAIAbgBQAQgBAIAIQAEAEACAJIADANQAGAUAJAOIADAEQAPAJgBAGQgBAMgSgFIgIgEIgEgDQgFgGgGgEIgHgOQgMgOgVgIIAAABIAFACQgEADgGAIQgGAIgEADQgfAWgXgKQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAQAIAGANgBQALAAAJgFQAOgGAFgGIAIgLIAHgLQAJAGAPAVQgIgCgJAFQgGADAAAHQgFgGgFgBQgGgCgDAGQgEAGAAAKQgGgFgGADQgGAEAAAIIgBAJQgNgLgHAJQgMAQAHAYIgBAAIAAABQgOgEgGgXg");
	this.shape_22.setTransform(225.9281,139.0735);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F47A39").s().p("AAAAjQgLgGgGgPQgHgQAAgJQAAgNAGgHQAIgJAKAJQgBAcAKAQQAGAKAKAHQgEAGgIABIgDAAQgFAAgFgCg");
	this.shape_23.setTransform(223.425,146.6436);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F47A39").s().p("AAAAqQgTgMgGgMQgIgQAAgTIAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBggAPALIACAAQAAAVALAPQAGAKAVAPIANAKQgDAJgLAEQgGACgFAAQgFAAgEgDg");
	this.shape_24.setTransform(227.1,145.5253);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F47A39").s().p("AAHAnIgRgNQgVgQgEgRQgCgIAAgJIAAgEQgBgEABgEQAAgEADgCQADgCAEABQAFACADAIIACAAQAFAPATAUQAPAQALAIIAGAEQgDALgKADIgFAAQgHAAgHgFg");
	this.shape_25.setTransform(229.625,143.9241);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F47A39").s().p("AgRAgIgKgKQgRgVADgKQACgHAIABQAHABAGAFQALAJAHAKQADAFACAHQAEAFADAJIACAEQgCgMgHgOIAOANIABgBIgQgPIgDgFQAIADAIgBQAQgBgHgOQgEgKgKgJQgLgKgEgZQAcAiAIAQQAPAegLAcQgFAPgLAAQgPAAgXgeg");
	this.shape_26.setTransform(232.6552,140.5535);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#653F31").s().p("AgeBiQgPgDgMgbIgBgEQgMAFgMgcIgDgOQgCgLgFAAIgGgBQgEAAgBgDIAAgBIAAgBIADglQAAgXADgFIAAgBIAAAAIABAAIABAAQASABANgOQASgWAGgDQAIgFAPABIAXACIAUgBQAOABAEAFQAHAJAEASQAaAdAKAOQAQAagDAbQgBASgKAJQgKALgPgHQgBAIgFAGQgGAHgIgCQgEgBgFgDQgCAIgGAFQgHAFgIABQgLABgLgJQgFAKgLAAIgIgBg");
	this.shape_27.setTransform(226.7919,140.7137);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#653F31").s().p("AAYApQgLgGgPgOQgYgVgcguQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACAAIAnA0QANASARALQAVAPARgBIgGAAQgMAAgNgHg");
	this.shape_28.setTransform(183.7167,83.8188);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#653F31").s().p("Ag5DKQAngRALgGQAYgQAPgWQASgbACggQACgZgJgmQgMgzgYg9QgQgrgfhCIABgBQAlBMASAxQAbBGALA8QAJAugeAuQgOAWgaAPQgNAHgmAQIgBgCg");
	this.shape_29.setTransform(212.3476,65.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#653F31").s().p("AhvDwQgZgVgUgjQgPgYgRgpIgehCIgehAIgFACQgGABgDgBQgDAAgDgDQgNgGgEgLQgEgNAIgIQAIgJANABIAFACQAIABAFAEIABAAIBDgaQA5gYBAglQBMgtAagSQA5goAegoQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgCQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAQAxBhAbA8QAoBYAXBKQAWBKgWA5QgLAegfAWQgWARgmAPQhTAihAACIgGAAQhMAAg4gugABtjxQgJAJgdAXQgrAkg4AgQhOArgsATQg4AbgdAJQAEAJgDAIQgDAJgIAFIAVAsIAVAtQAlBVAiApQA1BCBTAFQA/ADBdggQArgQAbgVQAggaALgmQAKgfgHgpQgFgXgPguQgTg7gmhVQgqhegUgwQgIAWgUAUg");
	this.shape_30.setTransform(191.5159,63.3915);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#653F31").s().p("AhvDwQgZgVgUgjQgPgYgRgpIgehCIgehAIgFACQgGABgDgBQgDAAgDgDQgNgGgEgLQgEgNAIgIQAIgJANABIAFACQAIABAFAEIABAAIBDgaQA5gYBAglQBMgtAagSQA5goAegoQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIABgCQAAAAAAAAQAAgBABAAQAAAAAAABQAAAAABAAQAxBhAbA8QAoBYAXBKQAWBKgWA5QgLAegfAWQgWARgmAPQhTAihAACIgGAAQhMAAg4gugABtjxQgJAJgdAXQgrAkg4AgQhOArgsATQg4AbgdAJQAEAJgDAIQgDAJgIAFIAVAsIAVAtQAlBVAiApQA1BCBTAFQA/ADBdggQArgQAbgVQAggaALgmQAKgfgHgpQgFgXgPguQgTg7gmhVQgqhegUgwQgIAWgUAUg");
	this.shape_31.setTransform(191.5159,63.3915);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#653F31").s().p("AhlgHQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAVALAgAEQASACAlAAQAhAAAQgDQAggFAMgMIAAAAQgJAOghAGQgQADgiACIgVAAQg9AAgdgUg");
	this.shape_32.setTransform(184.3167,247.9343);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#653F31").s().p("AgqAKQgigGgWgLQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAUAJAeADQAQADAiACQAZABAagEQAfgFAPgMQgMANgbAGQgOADgfACIgRABQgUAAgVgDg");
	this.shape_33.setTransform(184.4417,245.4808);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#653F31").s().p("AAIAXQg4gBg7gXQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAQA4AXA4gBQBEAAAjgnIABAAQgdAthIAAIgBAAg");
	this.shape_34.setTransform(184.8438,233.0003);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#653F31").s().p("AAwAjQgPgDglgNQg9gTgigiQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAiAdAxASQAkAOAVAEQAjAIAXgHIAAAAQgNAHgRAAQgLAAgLgCg");
	this.shape_35.setTransform(135.8219,237.0198);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#653F31").s().p("AgDAcQgdgKgYgPQgegRgNgVQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQANASAaAOIAuAVQAZAMAdAEQAiAFAXgJQgUALgaAAQgaAAgfgLg");
	this.shape_36.setTransform(134.5917,240.3792);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#653F31").s().p("AArAgQgYgEgigMQglgOgJgDQgdgOgLgQQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAIACAAQAJAOAZALQAPAHAbAIQAjAOAZAFQAjAHAdgFQgRAGgUAAQgLAAgLgCg");
	this.shape_37.setTransform(139.0917,228.4529);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#653F31").s().p("AheAsQAJgaAdgVQAXgSAggNQAVgIAcgCQAkgDALAPIAAAAQgOgNgmAGQgcAEgYAKQgZAKgXARQgbAWgIAVIgBAAIgBgBg");
	this.shape_38.setTransform(137.825,153.5097);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#653F31").s().p("AhbApQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQALgXAbgRQATgNAggMQAZgLAXgCQAfgEARAMIAAABQgVgKggAGQgUAFgeANQg9AXgSAjIgBABIgBgBg");
	this.shape_39.setTransform(140.1583,162.3176);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#653F31").s().p("AAACHQgFgJgDgPIgDgZQgFgcABg4QACg5ACgPQAGgsAVgVIAAABQgQAZgHApQgDAUgBAzQgBAiACAZIADAlQADAZAFALIAAABIgBgBg");
	this.shape_40.setTransform(202.1167,146.72);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#653F31").s().p("AABCPQgNhbgBhEQgBgtADgXQAFgtATgOIABAAIgBABIgBAAQgJALgDAXIgGAlQgDAWACA4QACAoAIBgIgBABIgBgBg");
	this.shape_41.setTransform(211.2,146.125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#653F31").s().p("AgKA9Qg6gIgggKQgSgFgGgLQgWgpgzgbQgzgagvAGQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAhgFAlANQAhAMAeAWQAPALAHAIIAQAWQAKAOAJAFQASAJAjAFIA2AHQAyAIA2gDIAugEQAcgDASAAQALABAJgNIAOgWQAFgHASgKQATgIAZAOIAAABQgVgLgSAHQgRAGgOATIgGALQgEAHgEAEQgJAGgRAAIgcgBQgyAFgrAAQgrAAgigFg");
	this.shape_42.setTransform(163.0575,129.4171);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#653F31").s().p("ACCBEIgngCIhdgFQgtgDgfgIIgTgFQgKgDgGgIIgLgTQgHgMgHgFQgOgOgOgLQgZgSgggKQgfgJgfABQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQBGgGBCA2QAbAUAKAXQAKAUAuAHIBBAFIBdAEIA4ACQAmgBANgPIAPgTQAIgKALgGQAMgGAMgBQAMAAALAGIAAABQgXgLgXAPQgRALgPAXQgFAIgOADIgXAEQgMADgRAAIgKAAg");
	this.shape_43.setTransform(163.145,127.4355);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#653F31").s().p("ACGA2QgVgBg4gHQgwgFgcAAIgZAFQgSADgGgDQgGgCgFgKIgIgPQgagigrgVQgvgXgmAOQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAYgIAgAHQAcAHAXAPQAdATAWAaQAGAGAGANQADAHAWgCIAcgEQAfgDA4AHQBAAJAXAAQAMAAAfgXQAagTAWAOQgUgLgSAMQgKAHgTASQgIAGgNABIgXgBg");
	this.shape_44.setTransform(163.6583,116.9436);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7DD2F7").s().p("AACAaQgHgLgFgVIABgBQgBgPgEgHIgFgHQgBgCAHAHQAIAHAJAPQAGAJAEAJIADAJIACADQACAFgBACQABAJgIAAQgGAAgFgLg");
	this.shape_45.setTransform(260.499,147.8015);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#653F31").s().p("AAMApQgFgCgEgEQgMgSgDgcQgEgRgHgLIAAgCQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAaAPAMAbQAGAOABAFQAEAMgFAIQgCACgDAAIgFgBg");
	this.shape_46.setTransform(260.5846,147.8767);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7DD2F7").s().p("AAcATIgHgGIgfgTQgSgKgQgEQgSgIArAEQAJABAZAJQAKAEAKAJQAIAEAFAHQAFAIgFAGQgCACgDAAQgGAAgJgHg");
	this.shape_47.setTransform(261.874,137.9607);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#653F31").s().p("AAnAdQgMgGgbgTQgXgQgQgGIgQgDQAAgBgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAegPApASQAOAGALAJQAOAKABAMQACAJgFAEQgCABgDAAQgEAAgFgCg");
	this.shape_48.setTransform(261.8048,138.0907);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7DD2F7").s().p("AAeAmIgEgIQgHgJgOgHIgBAAQgTgOgIgPQgJgJADgIQAEgJAJAGQADAAAEAFIAJALQAJALAGAIQAKATAEALIACAIIgBAAg");
	this.shape_49.setTransform(280.276,77.9874);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#653F31").s().p("AAhAsQgJgNgQgMQgcgTgMgWQgCgGAAgGQABgJAGAAQALgCAKAKQAFAEAKANQAZAbABAjIgBABIgBAAIAAgBg");
	this.shape_50.setTransform(280.2458,77.9481);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7DD2F7").s().p("AADAwQABgQgEgUIgJgjIgDgJQgFgSAGgCQAHgEAGAIQAFAGACAKQAFALABAMQACAXgDAMQgHAdgDAAQgBAAAAgHg");
	this.shape_51.setTransform(282.689,92.4419);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#653F31").s().p("AAAA8IABgQQAAgSgIgaQgKghgCgMQgCgKAFgEQAFgDAJAEQASAKAEAoQAFAtgYAYIgBAAIAAgBg");
	this.shape_52.setTransform(282.6932,92.4215);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#653F31").s().p("AglAWIAkgHIASgCQALgDAHgEQAKgHgpgNQgJgDgOgCIgYgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAvADQAgAEAIAQQADAGgFADQgDADgGABIgjAFIgjAEg");
	this.shape_53.setTransform(289.4946,121.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#653F31").s().p("AAGAAQAPgbAGgeQAFgWAIgGQACgCADACQAWARgQAtQgLAegWAeIgBAAQARgbAIgZQAKgZgCgRIgCgLQgDgHgFABQgFACgDAUIgCAIQgGASgFALQgTApgeAlQgNANgOALQAsgwATgng");
	this.shape_54.setTransform(297.7536,102.8429);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#653F31").s().p("AgaAPIAOgEQAIgCAEgDQAHgFgKgEQgUgIgdgEIg6gCQBBgCAtAHIA4ALQAlAIASADIgJAAIhWgKQgCAKgGAEQgFADgKABIgTAAQgHAAAHgDg");
	this.shape_55.setTransform(318.025,109.8028);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3FADE2").s().p("AEZGEQgHgIgPgYQgOgbgJgNQgshGhCgXQhXgdhXgDQhqgEhoAUIhpAWQgjAHgyASQAAgDgDgNQgEgNgBgCQgJgQgDgBIBMgcIB2g9IAxgZQBLgrAug1QA3hCAJg4IAEgcQAIg8gzhFIgWgfQgPgYAVAKQAVAKAVAUQAXAXAQAlQAOAlABAgIABAAQABgzgZgyQgJgmgKgaIgOghQgJgQAFgHQALgMAaASQAMAHAIAGQAcAbATAlQATAkAGAqIADgLIAAgBIAIgZIACgHQABgFADgBQAEgBAEAIQACAEAAAHIABAMQADAXAAAWIAAARQAFgRgBgdQALgbADgYIABgiQgGgVAHgFQAHgEAKAdQAUBBgKA+QgEAygPArIgKAQQAZgcAIgMQAUgjAPghIAVgwQASgnAJAYQAKAcgQAnQgGAOgdAyIgrAsIABABQA3g2AxgbQARgLAQgFQARgGAFAFQAIAEgIAPQgCAFgDADIgFAGQgIACgLAHIABAAQALgEAJAAQASAAgBAGIgBAEQgBAFgDAEIgBABIgCACIgCACIgEAEQgUARgeASIAZgGIAggHQAUgEANADQAHACgBAEQgBADgGADQgNAGgeAFQA5gHAqAZQAVANAMARQARAXgMASQgJAOgeAFQgUADgbgDIgKABQAUAFAMAFQAcANgBARQgBARgegBQgUgCgngOQA0AVAXAPQAiAXAXAgQAZAfAAARQgBAUgggRQgRgVgRgQQgYgVgzgfQgGgDgJgLQgJgLgHgDQgNgIgagJIAWAKQANAGAHAGQALAIgCAIQgCAGgNABQAUAGACgNIA9ArQAcAVAUAYIASAYQAJAPACANQABAKgIgBQgHAAgHgGQgSgMgggjIAIAMIAZAlQAOAVAGASQAKAhgGAXQgEAQgOABQgMABgOgJQgSgMgTgWIgegnQgcglg2guQAIgTgKgPQgQgXglgTQgjgSgrgNQA2ATAbAUQAhAYAKAXQADAIgCAGQgDAGgJgCQgKgBgPgHIgYgKQgbgKgtgKIAMAEIAuAQQAbAKATAKQAqAVAWAoQAZAsACAuQABATgFAEIgDABQgFAAgHgIg");
	this.shape_56.setTransform(297.5255,107.1376);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#653F31").s().p("AESGEQgRgigKgQQgJgPgJgNQgegogtgZQgLgHgTgHQgSgGgNgDQhngXhSADQhmADhLAPIgvAJQgbAFgUACQgMABgfAJQgbAIgQAAIgBABIgBAAIgBgBQgCgDAAgIIgCgLQgEgRgLgLQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBABAAIAAAAIAAAAQAYgNAmgPIA/gaIAKgFIAAAAQB6g+BHhEQAxgvAcgxQAIgOAHgSIAAgBIAGgUQANg1gkhCQgGgMgLgPIgSgaIgLgNQgGgJgCgHQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAOgLAaARQASALAQARQAIAIAJAOIgRgyQgQgfgFgQQgGgQAPgGQANgFAPAGQArARAcAtQAZApAGAzQADgHABgQQABgPAEgHQACgDADACQAKAEAEAPQACAGACASIABAIQAHgaACgcIgBgeQgBgTADgKQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQATAXAIAjQAFAYAAAoQABBCgWA9IAXgpQAPgeAVgvIAJgYQAHgQAHgGQALgIAIAMQAIAKABAMQACAbgOAhQgJATgWAlQA1gxAvgHQAHgBAHACQAJACABAGQAEAQgVAQQAHAAAGADQAKAFgFAMQgFAKgSAMQgIAHgKAEIgFADIAJgCQAfgHAPgBQAagCADAHQACAFgGAHIgLAIQAeAEAQAFQAYAIAPAPQAQARAGATQAHAYgPAOQgJAJgQAEIgcAGQAZAPADAPQACAKgEAIQgEAIgJACQgFABgSgCQAmAVAfArQANASAEAJQAIAXgFAKQgFAIgNgFIgRgJQANAUAIAQQAOAfgSgBQgJgBgTgOQAMAYAFAOQAIAWAAATQgBARgIALQgKANgQAAQgcgCgfgqIgZgjQgPgWgKgMQgXgZgsgaIgJgGQAnAqAWArQAOAcABAWQADAggMAMQgDADgDAAQgJAAgJgUg");
	this.shape_57.setTransform(297.7299,107.3885);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#653F31").s().p("AAAAHQgYgEgWgJQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQBBATAdgGQgMAEgPAAQgKAAgLgCg");
	this.shape_58.setTransform(173.7417,94.0547);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#653F31").s().p("AlWCoQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIBRgcQAxgSAfgMQAkgPA5gbQBFgiAWgKQBYgnBSguQBDglAhgTIAlgXQAVgOAMgOIAAABQgSAagrAbIhHAoQhpA8hMAjQiLBAgrATQhnArhVAXIgBABIgBgCg");
	this.shape_59.setTransform(155.7667,53.6563);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#653F31").s().p("AANgJQgUgSgggHQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAiACAXAWQAXAVABAhQgFgdgYgTg");
	this.shape_60.setTransform(187.05,65.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#653F31").s().p("AAfATQgPgMgSgHQgFgCgHAGIgMAJQgEACgCgHQgBgLAHgIQAIgJALACQAHABAGAHIAMAKIALAKQAEAHgBAAIABABIAAAAIgBABIgBAAg");
	this.shape_61.setTransform(189.1688,54.4768);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#653F31").s().p("AgFAYQgFgKgBgOQgBgOACgKQADgKAFAAQAEAAAEALQAFAKABANQABAOgCALQgDAKgFAAQgEAAgEgLgAgJgQIAAAHQABAKAEAAQAEAAgBgKQgBgLgEAAQgBAAAAAAQAAAAgBABQAAAAAAABQAAABgBABg");
	this.shape_62.setTransform(190.425,59.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#653F31").s().p("AATAiQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQADgIgDgIQgCACgFgCIgPgKQAAAAgBAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAKAFQAJAEABgDIABAAIgGgLIgKgPIgFgHQgGgEgIADQgJAEAGAGQAAABAAAAQgEgCAAgFQAAgFADgEQAGgJAQANQAMAKAIARQAKAVgIAKIgCABIgBAAg");
	this.shape_63.setTransform(161.0203,73.9871);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#653F31").s().p("AA/CyIh6jBQgGgJABgGQABgEAIgJQAWgYgBgrQgBgogSgcIAAAAQAYAeAEAqQAFAugbAYIgMAJQgDADAJAOIALAOIAlA4IAkA6QAWAiAMAZQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBgBg");
	this.shape_64.setTransform(162.2256,24.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4F4E4F").s().p("AgLAPQiqgwgWgEIAAgkQAcAFCwA0QC5A1ASAKQgQAMgMAPQgJgIiygzg");
	this.shape_65.setTransform(22.025,250.275);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#616264").s().p("Aj6HeQgjgDg0gIQgpgJgbgJIgTgHIgBAAQgygcgOgYQgUgfAZgoQAhg0BLgSQBwgaBcALQAoAIALAEQAdAJAQAPQAeAcgVAYQgOARgfAKQgVAGgZAFQg/ANgvABQhDABg3gTIgMgFQAAgBgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgRgGgNgIQAAgTATgRQBLAqB/gTQAygIARgTIAFgHQAGgQgUgRQAKALABAJQgIgOgdgFQgMgDgfgCQhcgJhEAfQgLAFgMAIQgXAPgGAVQgGAXANAXQAJARAgAQQAWALAzAHQBeANBWgTQA4gNA5g0QAugkAigzQAkg2AghJQARgnAjhgQAkhgATgwQAhhTAig5QAmhDAyg4QAcggAzgoQAAAIAEAJIAJASQAJASAJAFQheBBhNCLQhCB5hBDOQghBrgiA+QgvBWhIAwQhOA0hfALQgWACgZAAIgpgBg");
	this.shape_66.setTransform(87.8104,227.4266);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#653F31").s().p("AhTHhQhRgIgdgJIgegJQgngQgNgLQgogggBgbQgBghAWgfIgTgIIlfhiIgZgIQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIAJACIAAgBQFXBeALACQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIlPhdIAAgBQACgDgDgCIgHgDQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgBgBQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBgBgBQAAAAAAAAQAAgBgBAAQAAgBgBAAIAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgBgDIABAAQABAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBIABAAQFTBhAIAFQABABAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgJgGlYhhIgUgEIgCgBIgBgBIAPAAQAbADC2A2QC7A3AOAMIAQgJQAkgTAwgIQAigGA3gDQArgCAdACQApAEAcAIQAnAMARATQAQAUgFAUQgGATgYAMQgeAQgrAHQgcAFgxADQg0AGgzgHQg4gJgogXQACAOAJAQQAKANARAJQAIAEAZAJQAzAOA5AAQAwAAA8gKQAsgIAsgdQAggWApgpQAkgnAcgxQAjg4AehOQAQgrAihhQAziZA9hnQAegzAwg2QAagdAdgXIAcgSIADgBIABAEIgBABQABAFADAHIACAIIAFAIQAJAVAPAMQh3BjhTC0QgZA3hhEPQg9CviEBJQg8AhhCAKQgjAFglAAQgdAAgegDgAg5EBQhAACgqALQgnALgWATQA3AdBOgDQAQAAAxgGQAUgDASgIQAbgLADgPQgMgahJAAIgOAAg");
	this.shape_67.setTransform(69.15,227.3363);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F47A39").s().p("AgTBnQgMgCgHgGQgLgJgJgNIgPgZQgBAAAAAAQAAgBAAABQgBAAAAAAQAAAAAAABQAPAiAKAKQgVAKgSgXQgPgSgFgYQgKgrAMgkIABAAQAIgKAMgIIAYgPIAbgTQATgLAMACIAAAAIAAgBIAIAGIAJAFQAcAPAGAQQADAHAEAWQADASAGAJIABABQAGAfgKAXQgFgDgEgKQgEgKgFgJQgHgNgBgRQgBgRAEgQIAAAAQgHAPgCAQQgDASAHAMIAMAYQAIAOAJAEQAFADAMABQAMACAGADQAOAIAEAKQAEAMgSgDIgVgEQgSgDgKgDQgRgFgHgKQgPgUgHgMIgBgBQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAFARAJANQAMAQAOAEIAVAGQgOAHgSABQgRAAgNgIQgVgMgQgiIgCgBQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQAEAPAKAOQAKANAOAIQgEAFgIAAIgHgBg");
	this.shape_68.setTransform(146.3723,176.3829);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#653F31").s().p("AgdBqQgLgDgJgJQgLAKgTgKQgRgJgHgOQgPgbgCgeQgDggAOgZIAAgCIACgCIAAgBQAKgLATgMIAggTQAUgNAIgBQAEgBAJAAIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAABQAAAAABAAIAMAGQAJADAFADQARALALAOQAHAKADAZQAKAgACAMQAEAZgMARQAEADAIACIAOADQAMADALAKQAMAMgDALQgDALg0gNQgLAKgSACQgRABgOgGIgDgBQgCAIgLABIgDAAQgIAAgIgCg");
	this.shape_69.setTransform(146.4118,176.5142);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFD130").s().p("AAEBUQgvgFgWgbQgHgJgOgXQgNgVgJgKIACgUIAAgBQAWAQAKATQAaA1AtAJQAnAIBBAAQBXABALgWQACAUgXAGQgSAFgcABIgvABIgoAAIgpgBgAh8gbIgTgHQgfgMgIgGQgSgNACgTQANAKA3AcQANAGALAIQgBAAAAAAQAAgBgBAAQAAAAAAABQAAAAgBAAIgDAEQgDADgDAAIgGgCg");
	this.shape_70.setTransform(134.872,270.6083);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F47A39").s().p("ABLB+QgygBgWgEQgpgJgSgbIgWgmQgNgVgRgLIgxgWQgrgUADgDIABgFQAHgTAQgbQAUgcAIgPIAAgBQAAgCAOAIIAPAKIAZAQQAZAQAcAKQAsAQAKgJQgDAmAdAdQAcAcAmAFQAqAFAYAXQAUASAEAVQgKAUhYAAIgZgBg");
	this.shape_71.setTransform(134.8902,264.8236);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#653F31").s().p("AAzCOQgnAAgUgEQgggHgVgSQgOgMgRgfIgSgcIADgOQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgIAGIgHgFIgMgFQgGgDgLgCIgRgEQgwgMAZg5IAxhNIAAgBIABgBIAAgCIAAgBQAEgCABABIAtAfQAjAWAZAJIAbAJQASAEAJgEIAAgBIABAAIgBABQAIAvAmAiQAMALAYADQAfAFAGACQAYAJARAOQAWARAFAUQAJAqhFAIg");
	this.shape_72.setTransform(134.7346,265.755);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F47A39").s().p("AgWBSIg2gIIgTgHQgMgEgIgBQgJgCgkAAQgbAAgRgIIgBAAIABgEIAAgUIACgTQADgjACgMIADgWIAEgWIAlACIAjACIAtgGIAVgEQgDAUATAPQAJAJAcAOQArAVAdgEIAvgJQAegEARAJQARAJALAQQAKAQABARQgUAphfAGIggABQgoAAgpgHg");
	this.shape_73.setTransform(195.9,271.024);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFD130").s().p("AgZAdQg4gGgogYIgCgBQgEAJgLAAIgBAAQgFABgHgBQgOAAgOgEQgQgDgGgJIgDgIQATAIAiABQAmACAQAFQAsANBLAFQBPAGAugPQAwgOAKgXQAAARgLAMQgKANgUAFQggAIg6ADIg8ABQgYAAgPgBg");
	this.shape_74.setTransform(195.7,278.425);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#653F31").s().p("AhMBaIgsgSQgDAJgRgBQgigCgLgEQgWgJgDgXQgCgNADgUQAEgaAAgHQABgdAJgrIABAAIAAgBIABgBQADgCAEABIAIACQAWAGAlgCIAjgGQAZgGAKAFIABAAQABAVAZASQAMAIAeAQQAUAKAggFIAzgIQAzgEAbAsQAMATgBAWQgCAYgRAPQgTAQgqAEIhBADIgfAAQhDAAgtgNg");
	this.shape_75.setTransform(195.6802,272.0802);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FCEE3A").s().p("AAfBIQghgHgUgHQgegKgagQIgSgNIgQgNIAFgPQAOglANgbQAQANAXALQALAFAgANQAeALArAFQAXADAPgGIgiBZQgOADgNAAQgLAAgKgCg");
	this.shape_76.setTransform(137.5,233.0566);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FCEE3A").s().p("AgQBNQgugDgpgRIAAguIAAhHQAZAIAqAJQAcAFANABQAYABASgGQAVgGAOgJQAKgGAMgNIgKCBIgKAHQgJAGgYAFQgbAGgaAAIgOAAg");
	this.shape_77.setTransform(184.8625,238.8711);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A4A6A9").s().p("AgQAYIgpgDQgZgDgQgJIAAgaQAOAFAUADIAiAEQAvAFAjgEQAVgCAJgFIAIgHIAJgGIgCAcIAAAAQgHAKgTAFQgLACgUACQgQACgSAAIgWgBg");
	this.shape_78.setTransform(184.4,246.6031);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A4A6A9").s().p("AAyAzIgdgCQgQgCgLgFQgqgQgQgKQgegTgHgMIANgkQAHAHAWAOQAXAQAkANQApAPAcACIARABQAKABAGgDIgLAfIgNADQgIADgKAAIgKgBg");
	this.shape_79.setTransform(135.2,238.7833);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EF503A").s().p("ACyG1IgHgFIgEgCQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgEAAgBjSQgBhlAGhAIADgPQAAgEAEgJQAEgJAAgFIAHAMQgFgNAAgPQAAgBAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAgEADgDIAEAGQAIAMARAOQgdgmgHgSIgGgQIghg4QgyhPgVgcIABgDIAFgKQADgSALgPQALgRAOgGIADgDQgRAJgMANIAAABQgQASgOAiIgXA4IgVA2QgMAigKATQgSAkgrAzQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAMgNIhBCtIgjBfQgVA7gPAkIAAABQgQAUg2gQQgogMgegSQgXgPgXgSIgFgDQAPgmAUg4IAgheQAkhmA3g3QAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIABgBIALgKQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgKAHQABgOABgGQADgKAHgHIAEgEIAEhiIAEhrIAAg2QAAgfAEgXQAtAPAlAIIBEAPQAoAHAcACQAmACAngEIACgBQATgCAEABIAAgOQAAgVACgSIAgA1IAGgEIAAAAQAGgHANgIIATgPIAUgRIATgSQASgTARgXIAAAIQAAAHgDAIQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBIACgGIAEAMIAGANIAZBDQAVA4AbBgQAcBhgEA9QgDA6gaBdQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABABQAAAAAAgBQABAAAAAAQAAAAAAgBIAPgtQgIBBgEA2IgFBVQgCA2gEAfIgCAUIgDAUQgFAPgKAGQgGADgRADQgrALgVABIgGAAQghAAgagKg");
	this.shape_80.setTransform(158.5194,218.2292);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#743131").s().p("AhUApQAeghAmgRIAwgZQAegMAXAOQgGAdhCAXQg4AVgnAAIgCAAg");
	this.shape_81.setTransform(142.675,169.8289);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FCEE3A").s().p("ABTBAIgZgCIg5gBQgjgDgSgBQgbgBgRgGIgBAAQgPgHgFgEQAOgZAKgUQANgZAJgaQAAAAAAAAQAAABAAAAQABAAAAgBQAAAAAAAAIADgDQANAAAdgDQAagCAPAAIARABIAAAAIAoAGIAhAGIACgBQAIA2ACBAIgKABIgBAAIgYgCg");
	this.shape_82.setTransform(164.625,127.2958);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FCEE3A").s().p("AhgAQIgGgUQAbgrAwgWQAagMAggBIAbgBQAIAAAPAHIACAOIAUBLQgngRhEAfQgbANgOAKQgWAPgKATQgMgmgHgeg");
	this.shape_83.setTransform(138.975,157.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FCEE3A").s().p("ABABdIgUgcQgVgZgYgPQgvgbg+gBQATgmAMgTIAUghQAjgEAQAFQAjAJAUANQATAOAVAZIALAQQAHAKAHAEIgJAVQgSAtgSAeg");
	this.shape_84.setTransform(145.8,121.3559);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FCEE3A").s().p("Agkg6QAgAEANgFQATAyAJA7QgIAGgLACQgLACgfAAQgCg9gKg5g");
	this.shape_85.setTransform(179.425,127.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FCEE3A").s().p("AAmCIQgSgBg+AAQgHgTgFgoIgCgqIAAgIQABg0ADgaQAFgsARgeIBOgLIAJgBQgJAQgCAMQgEATgCAPQgEA0AEAkQAGA3ACAcIAEAsg");
	this.shape_86.setTransform(206.175,146.575);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCEE3A").s().p("Ag0gkQAGgEAIgGIANgLQAKgIAKgCQAHgCANACQARA0AVArQgPgEgRAGQgPAGgHAJIgVAYQgLg7gTgug");
	this.shape_87.setTransform(185.925,125.475);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A4A6A9").s().p("AANgLQg0ghg2AIIALgXIANAAIAbADQAfAEAfAUQAeATAQARQALALARAaIgLATQgSgng0ggg");
	this.shape_88.setTransform(143.025,126.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A4A6A9").s().p("AgqAKIAOgQQAJgKAGgGQARgOALABIAQACIANAXQgIgHgMgBQgLgBgKAFQgFAEgGAIQgJAHgSAcIgEADg");
	this.shape_89.setTransform(188.05,131.6241);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A4A6A9").s().p("AAlAXIgegDIgcgDIgmgEIghgGQgTgFgMgHIAMgSQAGAGAKADQAQAGAoAEIBAAEIAVABQANABAIgBIAOABIArACIAAARIgcACIgdABIgegBg");
	this.shape_90.setTransform(164.025,133.625);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A4A6A9").s().p("AgggDIAPgBQAhgCALgFIACAAIABgBIADAWIgXABIgqACg");
	this.shape_91.setTransform(180.25,134.375);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EF503A").s().p("AiDHCQglgFhPgQQhfgUhVgqQAKgiAJgnIAFAQIAFAUQADAOADAHQADADACAAIAIABQAMADARgCIAdgGQAjgHAsgWQAYgMAIgHQANgLgCgOIAAgBQgKgigNgzIgVhVQgCgGgBgYQgCgUgEgJIgCgDIAKgPQAAAAABgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQgJgNARgXQAWgaAGgJQAYgiATgpQANgaAJgZQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAMgLAMgRQAEgGACgKIADgQIgBAAIgFARQgEAJgEAHIgSAVQASg0gCgjIgBAAQAAAYgKAgIgUA3QgZA/geArQgbAlgGAGIgHAHQgEAFAAADIAAABQgPgVgPgOQgBgBAAABQAKAMAMAUQAJAPAAAJQgDADgBAEQgGgEgUgJQAGAGAOAKQALAKACALIACATQAAAMACAGIAEAZQAUBMAIAmIAHATQADALgKgFQgGgDgIAAIgOABQgRACgbAOIgqAYQgZAOgdAgIgEgVIgMglQgPgugKgoQgZhigBg1QAFgsAKgfIAWg7QAihVAphEIAmhBQAWgnASgZQAcgoArANQAlAMAZAqQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgNgegXgUQgcgYgdAEIAQgfQAMgUAKACQAcAGA1ARIABACQA6AXBGgKQAGALgMANQgOAPAAAHIAABUIACABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAEgkgBgOQgBgSABgIQABgNAIgJQAIgKACgGQADgJgFgHQAWgEAYgHQADgEAFAGQAEAFABAFQABAGgJAGIgIAHQgEAHgBADIgFAkIgBAAQABAGACABIABgCQAfASAZAvQAOAaASA1QAfBcAhAzIAAAAQgMAGgOAWQAOgRAJgFQANgHADAZIAAgBQACgIAAgFQAKAFASAAIAcgCQAUgBAfgFIAygHIArgHQALgDAHADQgBAYgEA2QgEAzAAAcQAAAVgBAsQgBAnAEAaQgJACgagFIgcgEQgVgBhIAAQg0gBgjgFQgxgIghgTIACgMIACgLQAIg7gEhJQgHiOg4hmIgBAAQA2BtAECGIADBIQAAArgIAbQgDAJABAJIAIANQADADABAKQABAIgDAMIACgEIAFAJIAcBBIAGAOIgmAqQgXAbgRAOIgdAYQgbAXgEAFQgMgUgVgfIABgMIALhTQAHgyAIgiQAVhgAGhCQANidgtikIAAAAQAnCfgOCVQgEAygTBjQgTBkgEAyIgGA0IgCAMQgCAgABAQQgRABgTAAQgmAAgsgGg");
	this.shape_92.setTransform(171.825,138.8407);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#743131").s().p("AgLB1IABgrIAAg7QAAgjACgZQAHg+ABgeQACADACAJIACAQQAGApAAA+QgBBMgNAwIgFAVQgFgLABgLg");
	this.shape_93.setTransform(217.6225,146.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#653F31").s().p("ABNNPIAAAAIgBAAIgGgCIgBAAQgQgJgEgEQgDgEgBgEQgBgHACgLIACgQQABgegBgrIgChKQgChCACgtIAEgyIABgDIgBgBIABgcQACgQAFgKIAFgiIAEgPQgSglgKgRQgLgTgegxQgcgqgNgZIg4CGQgLAagIARQgPAegeAfQgPAzgwCAIgiBeQgVA6gPAjQABAUgdACQgUABgZgGQgXgFgagMIgBAAIgEgCQgggRgdgXQgIgJgDgBIgFgFIAEgMIABAAQAQg2AziVQAfhbA8gvIgCgWQAAgRAGgDQANgFACgpIgBg3QADhCABg0QAAhBAIgfIg6gTQgYgGgSgJIgJgGIAEgKIAAAAIABgDIABgBIAAgCIAHgWIAGgYQAHgUAEgDQgSg7gGgZQgWhXAAgvQADgxAFgeQAKgoAdhEQASgoAeg1IA2haQAUgqALgUQAUgjAcgIIAAgBQABgFAMgTQAKgRgBgGQgCgHALgDQAJgCATAHIBEAWIACAAQAxAOAmABQATABAZgFIAsgHIAAgBQAFAAADACQAFACADAGQACAGgBAGIgDAFIgKAIQgFAFgCAGQgEAPgCAUQAWAKAUAaQAOARAPAfQARAgAYBHQAYBFATAiQAJgDACAMQAUAGAkgEIA3gJIA3gKIA2gIIAAAAIADgBQADAAABADQAUBKgEBeQgBAkgLAwIgFAaQgEAQgGAHIgBACIgBABQgGAAgNgEQgNgEgsgCQgTgBghAAIg1AAQgmgBg1gLQgogJgPgMIACAFQAEAGABAAIADAIQACAHgDAJIAKANQAGALAHAQIAMAbIAIAVIgbAkIACAFQAAAEgBAGQABAJAJATIANAZIAbBHQAWA7AWBVQAVBRgEBEQgCAlgMAuIgIBoIgHBnQgDBDgFArQgCAWgCAIQgFATgKAEQgwARgrAAQgdAAgcgIg");
	this.shape_94.setTransform(169.4583,177.9971);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F6A338").s().p("AngDiQgHgEAAgHQAUADAdgFQA7gJBJgYQCPgtCShCQCXhECOhMQBPgrA3goQA+guAMgbQADADAAACQAGAkh4BOQg9AnhSArQg4AdheAsQiqBSiJAvQhUAdgyANQgrAMgXADQgQADgLAAQgSAAgIgGg");
	this.shape_95.setTransform(156.0142,58.12);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#616264").s().p("ABsCtQhDgPghgmQAKASATAPIABACIAFACQANAJAGACQgDAAgWAAQgfgGgPgGQgOgEgKgIIgSgPQAKAPAPAKQAEAFAGAEQgagHgRgJQgUgMgNgVIgCgDIAAAAQAFAPALAOQg3gUgMgtIgFgQIgBABQgIANAAAFQAAAKgBAAQgCAAgEgHQgKgVAAgWQgBgQAFgbIAAgFIgKAdQgWAIgIgCIAQgLQAIgGAFgHQAFgJACgHIAAgMQB/gsB6g3QAygXA5gbQgBAcAIAZQAIAcASATQgagCgXgPQgXgOgOgXIgBAAQACAHAEADQgMgJgMACQguALAUBCQAHAYAOASQARATAWADQAHABAKgCQAaAeAIAgQADALgHgEIgLgIIgVgNIgLgSIAAAAIAGAQQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIABABQAUAnAkAPQgRAJgcgGQgbgIgXgSIgCAAQAAABgBAAQAAAAAAAAQAAAAAAABQABAAAAAAQATAUAcAHQAaAcASALQgGACgMgBIgSgDQgQAAgQgDIgggJQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAHADIABABQALAGAQAEIATAGQAHAEABACQACACgIAAQgiABgRgEg");
	this.shape_96.setTransform(148.025,79.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FDD0B4").s().p("AiZDnIAGAAIAVACQAOABAGgFQABgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgNgGgWgTIgKgJQAhAJAXgQQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAIgDgDQghgQgWgbQAbAVAGAEQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAEgMgMgbQgIgTgWgVQANgCAGgHQAHgJgDgMIgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAABABQAEAgghgFQgfgEgNgTQgRgbgFgUQgEgSABgLQABgSAMgHQAUgMARAPQAMAKAJAVQAAAAAAAAQAAABAAAAQAAAAAAgBQABAAAAAAQgDgKgIgNQAeAfAsACQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIgBgDQgggfgHhHQBigvBWgvIAogXQAOgMAMgHQAIARAKAnQAKAmAIATQAMAfASAFQAMADAUgDQAMgBACAHQAEAEAAAHQABAHgDAFQgEANgNAJIgCADQgEADAAABIAAABQgCAFACAGIAHAUQAEALgBAHQABAQgfAIIgPADQgQACgNgFIgXgKQgBAAgBgBQgBAAAAAAQgBgBAAAAQAAAAAAAAIAKgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgKgBQgGAAgCAGQgBAAAAABQAAABAAAAQABABAAAAQABAAABAAIAEgBQAcAQAOACQALABALgDIAEABIALgCQACAIgEAKQgCAOgOAKIAAABIgIAFIAAAAIAIgBQgBAygkAiQgiAhgyADQgdACgPAHQgSAKgGAXIgaABQgxAAg+gRg");
	this.shape_97.setTransform(179.6942,73.3382);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EC393C").s().p("AgmCzIgthMQgcgygQgZIgVgcQgLgRgEgPQAMgJAKgcQAIgVgBgYQAAgYgIgUQgIgVgfguIgDgHQA4BEBYAmIAsASQAgALAVgCQATAVAZAjQAnA4AtBNIgBAJQgJAfg7AjIgnAXQgXAOgQAIQgbAPgNAFIgHADQgEgNgZgpg");
	this.shape_98.setTransform(172.575,25.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFD130").s().p("AngGGQAFgRAYgZQAPgPAZgWQAZgUAPgYQASgegIgYQgOhAgGgzQgPhlAPhCQARhMBEhNIAeghQAhgcAbgRIAxgeIAmgUQAXgMAPgGQAmgPATgJQA4BOBiApIAtASQAgALAVgCQATAWAZAjQAlA1A4BfIAAABIAFABIABABIAAgBIADgBIABAAIA+gLQAggEAMADQgMAlhlA/QhjA/jCBdQiqBSiJAvQhUAdgyANQgrALgSADQgTAEgOAAQgMAAgIgDg");
	this.shape_99.setTransform(155.475,39.819);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#653F31").s().p("ABkHfIgBADQgYAHgcgBQgcgCgagLIAAABQgeALg1gVQAHAEAFABQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgqAFgfgeQgbgBgkgkQgNgNgFgVIAAgBQAEgWgIAdQAAAHgCAFIgBABQgJAAgJgTQgMgbAFgbQgXAKgLgGQAAgBAAAAQgBgBAAAAQAAgBAAAAQABAAAAgBQACgCAJgGQAJgGAIgJQAGgGAEgMIABgKIgaAJIAAAAQgKAAgOAEIgWAJIgCABQg3AQgnAGQg/AKgJgWQgHgRAlgoQAWgXAkgcIAUgZQASgZAAgZQgShKgIhFQgNhqAVg+QAdhWA/g/IAggfQAegbAegTQANgJAcgOQAbgTAogQIBIgZIACACIgBABIA0AxQAfAbAaAPQAYAOApARQAjAOAYADQAKADAKgBIAGAFIAAAAIAdAlQA5BPAsBaIAbgGQATgEAXgDQAkgFAQAEQAVAFgJAWQgLAdhBAvIgoAbQgLAEgLAGQAMAWAJAhIANA9QAFAXAXAFQANADAdgBQAFAAADAGQAOAkglAYQAAAFALAjQAIAXgVAIQgHADgIACQAGANgFAOQgGAOgNAGIgBAAIgBAAQAFAYgPAfQgOAbgUAQQgYATgiAGQgkADgQAEQgbAIgHAdQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAEIgVABQgtAAg2gQg");
	this.shape_100.setTransform(155.9689,49.5172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100,p:{scaleX:1,scaleY:1,x:155.9689,y:49.5172}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:155.475,y:39.819}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:172.575,y:25.2}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:179.6942,y:73.3382}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:148.025,y:79.9}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:156.0142,y:58.12}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:169.4583,y:177.9971}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:217.6225,y:146.45}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:171.825,y:138.8407}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:180.25,y:134.375}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:164.025,y:133.625}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:188.05,y:131.6241}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:143.025,y:126.825}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:185.925,y:125.475}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:206.175,y:146.575}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:179.425,y:127.825}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:145.8,y:121.3559}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:138.975,y:157.625}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:164.625,y:127.2958}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:142.675,y:169.8289}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:158.5194,y:218.2292}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:135.2,y:238.7833}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:184.4,y:246.6031}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:184.8625,y:238.8711}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:137.5,y:233.0566}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:195.6802,y:272.0802}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:195.7,y:278.425}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:195.9,y:271.024}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:134.7346,y:265.755}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:134.8902,y:264.8236}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:134.872,y:270.6083}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:146.4118,y:176.5142}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:146.3723,y:176.3829}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:69.15,y:227.3363}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:87.8104,y:227.4266}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:22.025,y:250.275}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:162.2256,y:24.625}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:161.0203,y:73.9871}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:190.425,y:59.9}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:189.1688,y:54.4768}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:187.05,y:65.15}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:155.7667,y:53.6563}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:173.7417,y:94.0547}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:297.7299,y:107.3885}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:297.5255,y:107.1376}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:318.025,y:109.8028}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:297.7536,y:102.8429}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:289.4946,y:121.425}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:282.6932,y:92.4215}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:282.689,y:92.4419}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:280.2458,y:77.9481}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:280.276,y:77.9874}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:261.8048,y:138.0907}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:261.874,y:137.9607}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:260.5846,y:147.8767}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:260.499,y:147.8015}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:163.6583,y:116.9436}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:163.145,y:127.4355}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:163.0575,y:129.4171}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:211.2,y:146.125}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:202.1167,y:146.72}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:140.1583,y:162.3176}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:137.825,y:153.5097}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:139.0917,y:228.4529}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:134.5917,y:240.3792}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:135.8219,y:237.0198}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:184.8438,y:233.0003}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:184.4417,y:245.4808}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:184.3167,y:247.9343}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:191.5159,y:63.3915}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:191.5159,y:63.3915}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:212.3476,y:65.7}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:183.7167,y:83.8188}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:226.7919,y:140.7137}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:232.6552,y:140.5535}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:229.625,y:143.9241}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:227.1,y:145.5253}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:223.425,y:146.6436}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:225.9281,y:139.0735}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:242.4684,y:133.436}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:189.875,y:158.925}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:218.675,y:142.475}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:242.2068,y:133.3367}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:179.95,y:162.375}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:69.3074,y:258.85}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:59.6651,y:256.5222}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:87.8104,y:227.4266}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:22.025,y:250.275}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:179.95,y:162.525}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:289.4339,y:94.6117}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:298.846,y:78.1198}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:309.6066,y:87.3017}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:320.0786,y:96.4403}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:326.9102,y:105.2395}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:332.8045,y:121.8878}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:333.4771,y:133.7031}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:321.3683,y:136.2438}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:316.8593,y:123.8688}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:294.3123,y:119.0533}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:297.175,y:126.6679}},{t:this.shape,p:{scaleX:1,scaleY:1,x:297.2167,y:114.2027}}]}).to({state:[{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:160.0529,y:68.4531}},{t:this.shape_99,p:{scaleX:0.7997,scaleY:0.7997,x:159.9291,y:60.8686}},{t:this.shape_98,p:{scaleX:0.7997,scaleY:0.7997,x:173.6047,y:49.1772}},{t:this.shape_97,p:{scaleX:0.7997,scaleY:0.7997,x:179.2982,y:87.6754}},{t:this.shape_96,p:{scaleX:0.7997,scaleY:0.7997,x:153.971,y:92.9232}},{t:this.shape_95,p:{scaleX:0.7997,scaleY:0.7997,x:160.3604,y:75.5048}},{t:this.shape_94,p:{scaleX:0.7999,scaleY:0.7999,x:170.5641,y:171.039}},{t:this.shape_93,p:{scaleX:0.7999,scaleY:0.7999,x:209.0882,y:145.8061}},{t:this.shape_92,p:{scaleX:0.7999,scaleY:0.7999,x:172.457,y:139.7198}},{t:this.shape_91,p:{scaleX:0.7999,scaleY:0.7999,x:179.1958,y:136.1479}},{t:this.shape_90,p:{scaleX:0.7999,scaleY:0.7999,x:166.2182,y:135.548}},{t:this.shape_89,p:{scaleX:0.7999,scaleY:0.7999,x:185.4346,y:133.9476}},{t:this.shape_88,p:{scaleX:0.7999,scaleY:0.7999,x:149.4213,y:130.109}},{t:this.shape_87,p:{scaleX:0.7999,scaleY:0.7999,x:183.7349,y:129.0292}},{t:this.shape_86,p:{scaleX:0.7999,scaleY:0.7999,x:199.9319,y:145.9061}},{t:this.shape_85,p:{scaleX:0.7999,scaleY:0.7999,x:178.5359,y:130.9089}},{t:this.shape_84,p:{scaleX:0.7999,scaleY:0.7999,x:151.6409,y:125.7345}},{t:this.shape_83,p:{scaleX:0.7999,scaleY:0.7999,x:146.1819,y:154.7444}},{t:this.shape_82,p:{scaleX:0.7999,scaleY:0.7999,x:166.6981,y:130.4856}},{t:this.shape_81,p:{scaleX:0.7999,scaleY:0.7999,x:149.1414,y:164.5057}},{t:this.shape_80,p:{scaleX:0.7999,scaleY:0.7999,x:161.8146,y:203.2187}},{t:this.shape_79,p:{scaleX:0.7999,scaleY:0.7999,x:143.1625,y:219.6589}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:182.5152,y:225.9136}},{t:this.shape_77,p:{scaleX:0.7999,scaleY:0.7999,x:182.8851,y:219.7291}},{t:this.shape_76,p:{scaleX:0.7999,scaleY:0.7999,x:145.0022,y:215.0784}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:191.8142,y:246.46}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:191.83,y:251.5346}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:191.99,y:245.6152}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:143.0696,y:241.4011}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:143.1941,y:240.6561}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:143.1795,y:245.2828}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:152.1303,y:169.8529}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:152.0987,y:169.7479}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:90.6147,y:210.6736}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:105.5395,y:210.7458}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:52.924,y:229.0201}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:164.779,y:48.3643}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:163.8149,y:87.8466}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:187.3343,y:76.579}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:186.3294,y:72.2413}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:184.6348,y:80.7782}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:159.6128,y:71.5849}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:173.9901,y:103.8977}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:273.1621,y:114.5627}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:272.9986,y:114.362}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:289.3952,y:116.4938}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:273.1811,y:110.9269}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:266.5752,y:125.7898}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:261.4076,y:102.7681}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:261.4042,y:102.7844}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:259.4502,y:91.1922}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:259.4743,y:91.2236}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:244.701,y:139.2946}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:244.7563,y:139.1906}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:243.725,y:147.1214}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:243.6566,y:147.0613}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:165.9249,y:122.2053}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:165.5143,y:130.5973}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:165.4443,y:132.1823}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:203.9511,y:145.5461}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:196.6858,y:146.022}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:147.1284,y:158.4978}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:145.2621,y:151.4528}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:146.2753,y:211.3961}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:142.6759,y:220.9354}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:143.6599,y:218.2484}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:182.8701,y:215.0333}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:182.5485,y:225.0159}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:182.4485,y:226.9784}},{t:this.shape_31,p:{scaleX:0.7997,scaleY:0.7997,x:188.7526,y:79.7206}},{t:this.shape_30,p:{scaleX:0.7997,scaleY:0.7997,x:188.7526,y:79.7206}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:205.1449,y:81.3961}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:182.2457,y:95.8877}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:216.6975,y:141.3925}},{t:this.shape_26,p:{scaleX:0.7997,scaleY:0.7997,x:221.6535,y:141.4304}},{t:this.shape_25,p:{scaleX:0.7997,scaleY:0.7997,x:219.2301,y:144.1261}},{t:this.shape_24,p:{scaleX:0.7997,scaleY:0.7997,x:217.2107,y:145.4066}},{t:this.shape_23,p:{scaleX:0.7997,scaleY:0.7997,x:214.2717,y:146.3009}},{t:this.shape_22,p:{scaleX:0.7997,scaleY:0.7997,x:216.2735,y:140.2468}},{t:this.shape_21,p:{scaleX:0.7998,scaleY:0.7998,x:229.2356,y:135.5717}},{t:this.shape_20,p:{scaleX:0.7998,scaleY:0.7998,x:187.1712,y:155.9579}},{t:this.shape_19,p:{scaleX:0.7998,scaleY:0.7998,x:210.2055,y:142.8012}},{t:this.shape_18,p:{scaleX:0.7998,scaleY:0.7998,x:229.0264,y:135.4923}},{t:this.shape_17,p:{scaleX:0.7998,scaleY:0.7998,x:179.2331,y:158.7173}},{t:this.shape_16,p:{scaleX:0.7998,scaleY:0.7998,x:90.7406,y:235.8784}},{t:this.shape_15,p:{scaleX:0.7998,scaleY:0.7998,x:83.0286,y:234.0166}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:105.5395,y:210.7458}},{t:this.shape_13,p:{scaleX:0.7998,scaleY:0.7998,x:52.924,y:229.0201}},{t:this.shape_12,p:{scaleX:0.7998,scaleY:0.7998,x:179.2331,y:158.8372}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:266.5266,y:104.3432}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:274.0548,y:91.1521}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:282.6617,y:98.4962}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:291.0377,y:105.8058}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:296.502,y:112.8438}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:301.2165,y:126.16}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:301.7545,y:135.6104}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:292.0693,y:137.6426}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:288.4628,y:127.7444}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:270.4286,y:123.8928}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:272.7183,y:129.9833}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:272.7516,y:120.0131}}]},1).to({state:[{t:this.shape_100,p:{scaleX:0.7998,scaleY:0.7998,x:160.0529,y:68.4531}},{t:this.shape_99,p:{scaleX:0.7997,scaleY:0.7997,x:159.9291,y:60.8686}},{t:this.shape_98,p:{scaleX:0.7997,scaleY:0.7997,x:173.6047,y:49.1772}},{t:this.shape_97,p:{scaleX:0.7997,scaleY:0.7997,x:179.2982,y:87.6754}},{t:this.shape_96,p:{scaleX:0.7997,scaleY:0.7997,x:153.971,y:92.9232}},{t:this.shape_95,p:{scaleX:0.7997,scaleY:0.7997,x:160.3604,y:75.5048}},{t:this.shape_94,p:{scaleX:0.7999,scaleY:0.7999,x:170.5641,y:171.039}},{t:this.shape_93,p:{scaleX:0.7999,scaleY:0.7999,x:209.0882,y:145.8061}},{t:this.shape_92,p:{scaleX:0.7999,scaleY:0.7999,x:172.457,y:139.7198}},{t:this.shape_91,p:{scaleX:0.7999,scaleY:0.7999,x:179.1958,y:136.1479}},{t:this.shape_90,p:{scaleX:0.7999,scaleY:0.7999,x:166.2182,y:135.548}},{t:this.shape_89,p:{scaleX:0.7999,scaleY:0.7999,x:185.4346,y:133.9476}},{t:this.shape_88,p:{scaleX:0.7999,scaleY:0.7999,x:149.4213,y:130.109}},{t:this.shape_87,p:{scaleX:0.7999,scaleY:0.7999,x:183.7349,y:129.0292}},{t:this.shape_86,p:{scaleX:0.7999,scaleY:0.7999,x:199.9319,y:145.9061}},{t:this.shape_85,p:{scaleX:0.7999,scaleY:0.7999,x:178.5359,y:130.9089}},{t:this.shape_84,p:{scaleX:0.7999,scaleY:0.7999,x:151.6409,y:125.7345}},{t:this.shape_83,p:{scaleX:0.7999,scaleY:0.7999,x:146.1819,y:154.7444}},{t:this.shape_82,p:{scaleX:0.7999,scaleY:0.7999,x:166.6981,y:130.4856}},{t:this.shape_81,p:{scaleX:0.7999,scaleY:0.7999,x:149.1414,y:164.5057}},{t:this.shape_80,p:{scaleX:0.7999,scaleY:0.7999,x:161.8146,y:203.2187}},{t:this.shape_79,p:{scaleX:0.7999,scaleY:0.7999,x:143.1625,y:219.6589}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:182.5152,y:225.9136}},{t:this.shape_77,p:{scaleX:0.7999,scaleY:0.7999,x:182.8851,y:219.7291}},{t:this.shape_76,p:{scaleX:0.7999,scaleY:0.7999,x:145.0022,y:215.0784}},{t:this.shape_75,p:{scaleX:0.7998,scaleY:0.7998,x:191.8142,y:246.46}},{t:this.shape_74,p:{scaleX:0.7998,scaleY:0.7998,x:191.83,y:251.5346}},{t:this.shape_73,p:{scaleX:0.7998,scaleY:0.7998,x:191.99,y:245.6152}},{t:this.shape_72,p:{scaleX:0.7998,scaleY:0.7998,x:143.0696,y:241.4011}},{t:this.shape_71,p:{scaleX:0.7998,scaleY:0.7998,x:143.1941,y:240.6561}},{t:this.shape_70,p:{scaleX:0.7998,scaleY:0.7998,x:143.1795,y:245.2828}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:152.1303,y:169.8529}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:152.0987,y:169.7479}},{t:this.shape_67,p:{scaleX:0.7998,scaleY:0.7998,x:90.6147,y:210.6736}},{t:this.shape_66,p:{scaleX:0.7998,scaleY:0.7998,x:105.5395,y:210.7458}},{t:this.shape_65,p:{scaleX:0.7998,scaleY:0.7998,x:52.924,y:229.0201}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:164.779,y:48.3643}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:163.8149,y:87.8466}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:187.3343,y:76.579}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:186.3294,y:72.2413}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:184.6348,y:80.7782}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:159.6128,y:71.5849}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:173.9901,y:103.8977}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:273.1621,y:114.5627}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:272.9986,y:114.362}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:289.3952,y:116.4938}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:273.1811,y:110.9269}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:266.5752,y:125.7898}},{t:this.shape_52,p:{scaleX:0.7998,scaleY:0.7998,x:261.4076,y:102.7681}},{t:this.shape_51,p:{scaleX:0.7998,scaleY:0.7998,x:261.4042,y:102.7844}},{t:this.shape_50,p:{scaleX:0.7998,scaleY:0.7998,x:259.4502,y:91.1922}},{t:this.shape_49,p:{scaleX:0.7998,scaleY:0.7998,x:259.4743,y:91.2236}},{t:this.shape_48,p:{scaleX:0.7998,scaleY:0.7998,x:244.701,y:139.2946}},{t:this.shape_47,p:{scaleX:0.7998,scaleY:0.7998,x:244.7563,y:139.1906}},{t:this.shape_46,p:{scaleX:0.7998,scaleY:0.7998,x:243.725,y:147.1214}},{t:this.shape_45,p:{scaleX:0.7998,scaleY:0.7998,x:243.6566,y:147.0613}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:165.9249,y:122.2053}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:165.5143,y:130.5973}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:165.4443,y:132.1823}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:203.9511,y:145.5461}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:196.6858,y:146.022}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:147.1284,y:158.4978}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:145.2621,y:151.4528}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:146.2753,y:211.3961}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:142.6759,y:220.9354}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:143.6599,y:218.2484}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:182.8701,y:215.0333}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:182.5485,y:225.0159}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:182.4485,y:226.9784}},{t:this.shape_31,p:{scaleX:0.7997,scaleY:0.7997,x:188.7526,y:79.7206}},{t:this.shape_30,p:{scaleX:0.7997,scaleY:0.7997,x:188.7526,y:79.7206}},{t:this.shape_29,p:{scaleX:0.7998,scaleY:0.7998,x:205.1449,y:81.3961}},{t:this.shape_28,p:{scaleX:0.7998,scaleY:0.7998,x:182.2457,y:95.8877}},{t:this.shape_27,p:{scaleX:0.7998,scaleY:0.7998,x:216.6975,y:141.3925}},{t:this.shape_26,p:{scaleX:0.7997,scaleY:0.7997,x:221.6535,y:141.4304}},{t:this.shape_25,p:{scaleX:0.7997,scaleY:0.7997,x:219.2301,y:144.1261}},{t:this.shape_24,p:{scaleX:0.7997,scaleY:0.7997,x:217.2107,y:145.4066}},{t:this.shape_23,p:{scaleX:0.7997,scaleY:0.7997,x:214.2717,y:146.3009}},{t:this.shape_22,p:{scaleX:0.7997,scaleY:0.7997,x:216.2735,y:140.2468}},{t:this.shape_21,p:{scaleX:0.7998,scaleY:0.7998,x:229.2356,y:135.5717}},{t:this.shape_20,p:{scaleX:0.7998,scaleY:0.7998,x:187.1712,y:155.9579}},{t:this.shape_19,p:{scaleX:0.7998,scaleY:0.7998,x:210.2055,y:142.8012}},{t:this.shape_18,p:{scaleX:0.7998,scaleY:0.7998,x:229.0264,y:135.4923}},{t:this.shape_17,p:{scaleX:0.7998,scaleY:0.7998,x:179.2331,y:158.7173}},{t:this.shape_16,p:{scaleX:0.7998,scaleY:0.7998,x:90.7406,y:235.8784}},{t:this.shape_15,p:{scaleX:0.7998,scaleY:0.7998,x:83.0286,y:234.0166}},{t:this.shape_14,p:{scaleX:0.7998,scaleY:0.7998,x:105.5395,y:210.7458}},{t:this.shape_13,p:{scaleX:0.7998,scaleY:0.7998,x:52.924,y:229.0201}},{t:this.shape_12,p:{scaleX:0.7998,scaleY:0.7998,x:179.2331,y:158.8372}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:266.5266,y:104.3432}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:274.0548,y:91.1521}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:282.6617,y:98.4962}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:291.0377,y:105.8058}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:296.502,y:112.8438}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:301.2165,y:126.16}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:301.7545,y:135.6104}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:292.0693,y:137.6426}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:288.4628,y:127.7444}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:270.4286,y:123.8928}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:272.7183,y:129.9833}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:272.7516,y:120.0131}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,345.1,282.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBACIgBAAIAAgBIACAAIAAABIAAgBIgCAAIABgCIABgBIACABIABABIgBACIgCABg");
	this.shape.setTransform(56.15,121.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCACIAAgCIABAAIABABIAAgBIAAAAIAAgBIgBABIgBAAIAAgBIACAAIADAAIABABIgBABIgDABg");
	this.shape_1.setTransform(56.9,121.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAEIABgCIAAgCIACAAIAAAAIgBAAIAAACIABAAIAAACgAAAgBIAAAAIAAgBIAAAAIAAgBIABABIABAAIgBABg");
	this.shape_2.setTransform(57.5,121.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBADIABgBIAAAAIAAgEIACAAIAAABIgBAAIAAADIABAAIAAABg");
	this.shape_3.setTransform(57.95,121.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAACIgCAAIgBgCIABgBIACgBIADABIABABIgBACIgCABIgBgBgAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIAAAAIgBAAg");
	this.shape_4.setTransform(58.625,121.3583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAADIAAgBIAAAAIAAgBIgCAAIgBgBIAAgBIAAgBIABgBIAGAAIAAACIgBAAIAAADIABAAIAAABgAAAgBIAAABIABAAIAAgBIgBAAg");
	this.shape_5.setTransform(59.425,121.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7D6E7A").s().p("AgDAOIgGgFQgCgEAAgCIACgEIgDgEIAAgBIAMgJIABAAIACAAIAAABIAKAHIgDgCIgHgFIgBAAIgKAJIgBAAIABgBIAKgIIgBAAIgMAJIADAEQAAABgCAEQAAADAFAEIADADIADABIAAABQgCAAgCgCg");
	this.shape_6.setTransform(58.1375,118.4125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999DA0").s().p("AgEAOIgGgFQgCgEAAgCIACgEIgDgEIAAgBIANgJIAAAAIACAAIgGAGQgEADACACIABACQAAABABAAQAAABAAAAQgBAAAAAAQAAABgBAAIABAEIAGAIIACAAIAGgDQADgCAAgDIgBgEIgBgDQABgDADgBQgCACAAACIAAAEIABAEQgBADgGAEIgGADQgCAAgCgCg");
	this.shape_7.setTransform(58.2375,118.4125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999DA0").s().p("AgEAOIgGgFQgCgEAAgCIACgEIgDgEIAAgBIANgJIAAAAIACAAIAAABIAMAIIAAAAQgCACAAACIAAAEIABAEQgBADgGAEIgGADQgCAAgCgCg");
	this.shape_8.setTransform(58.2375,118.4125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0,0.2,-0.1,-0.2).s().p("AADgDIAGABIgSAGg");
	this.shape_9.setTransform(23.4,52.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,0,0.1,0.3).s().p("AAJgDIgGAFIgMABg");
	this.shape_10.setTransform(23.4,53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.3,0,-0.3,0).s().p("AgCAAIAFgGIgEANg");
	this.shape_11.setTransform(24.025,53.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.3,0,0.4,0).s().p("AABgGIADAEIgHAJg");
	this.shape_12.setTransform(24.2,53.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,-0.3,-0.2,0.4).s().p("AgHgBIAPABIgMACg");
	this.shape_13.setTransform(25.125,52.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,0.3,0.1,-0.2).s().p("AgHABIAHgCIAIADg");
	this.shape_14.setTransform(25.125,52.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,-0.1,0.2,0.2).s().p("AAIgFIgIAIIgHADg");
	this.shape_15.setTransform(25.1,52.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.2,-0.3,-0.2).s().p("AgFABIANgGIgPALg");
	this.shape_16.setTransform(25.1,52.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0,0.3,-0.3).s().p("AgDgEIAIAEIgDAEg");
	this.shape_17.setTransform(24.15,52.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,0,-0.4,0.3).s().p("AgDAEIABgIIAFAIg");
	this.shape_18.setTransform(24,52.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#929496").s().p("AgEAFIgMABIAMgGIAAgJIAIAEIANgHIgHAJIAHAEIgNADIgHAJg");
	this.shape_19.setTransform(24.175,52.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.2,0,-0.2).s().p("AADgDIAGABIgSAGg");
	this.shape_20.setTransform(27.9,51.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,-0.1,0.1,0.3).s().p("AAJgDIgGAFIgMACg");
	this.shape_21.setTransform(27.9,51.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.3,0,-0.3,0).s().p("AgCAAIAFgGIgEANg");
	this.shape_22.setTransform(28.525,52.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.3,0,0.4,0).s().p("AABgGIADAEIgHAJg");
	this.shape_23.setTransform(28.7,52.125);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,-0.3,-0.2,0.4).s().p("AgHgBIAPABIgMACg");
	this.shape_24.setTransform(29.625,51.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,0.3,0.1,-0.2).s().p("AgHABIAHgCIAIADg");
	this.shape_25.setTransform(29.625,51.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,-0.1,0.2,0.2).s().p("AAIgFIgIAIIgHADg");
	this.shape_26.setTransform(29.6,50.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.2,-0.3,-0.2).s().p("AgFAAIANgFIgPALg");
	this.shape_27.setTransform(29.6,50.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0,0.3,-0.3).s().p("AgDgDIAIACIgDAFg");
	this.shape_28.setTransform(28.65,51);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,0,-0.4,0.3).s().p("AgCAEIAAgHIAFAHg");
	this.shape_29.setTransform(28.525,51);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#929496").s().p("AgEAFIgMACIAMgHIAAgJIAIADIANgGIgHAKIAHADIgMACIgIAKg");
	this.shape_30.setTransform(28.675,51.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.1,0,0).s().p("AAAAAIADAAIgFABg");
	this.shape_31.setTransform(75.125,51.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,0,0.1,0.2).s().p("AADAAIAAABIgFAAg");
	this.shape_32.setTransform(75.125,51.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.2,0,-0.1,0.1).s().p("AgBAAIAAgBIADADg");
	this.shape_33.setTransform(75.575,51.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,0,0,0.1).s().p("AgDAAIAHAAIgEABg");
	this.shape_34.setTransform(75.8,51.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0.1,0.1,0.1).s().p("AAAgBIABACIgBABg");
	this.shape_35.setTransform(75.525,51);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.1,0,-0.1,0).s().p("AAAABIABgCIgBADg");
	this.shape_36.setTransform(75.375,51);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#929496").s().p("AAAACIgFAAIACgCIgEgCIAGABIACgCIABADIAGAAIgFABIABADg");
	this.shape_37.setTransform(75.425,51.225);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0,0.2,0.2,-0.1).s().p("AgGgCIAKACIADADg");
	this.shape_38.setTransform(71.05,50.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.1,-0.1,0,0.1).s().p("AABADIgHgFIANAFg");
	this.shape_39.setTransform(71.05,50.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.2,0.2,-0.1,-0.1).s().p("AAAgBIAFAAIgJADg");
	this.shape_40.setTransform(71.225,50.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,-0.1,0.3,0.3).s().p("AAFgBIAAACIgJABg");
	this.shape_41.setTransform(71.225,50.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.2,-0.1,-0.3,0.1).s().p("AgDAAIABgDIAGAHg");
	this.shape_42.setTransform(72.1,51.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,0.1,0.3,0).s().p("AgDgDIAFACIABAFg");
	this.shape_43.setTransform(72.15,51.125);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,-0.1,0,0.2).s().p("AgHAAIAPAAIgJABg");
	this.shape_44.setTransform(72.525,50.825);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0.1,0.3,0.1).s().p("AAAgDIACAFIgDACg");
	this.shape_45.setTransform(72,50.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.2,0,-0.2,0).s().p("AgCABIAEgEIgBAHg");
	this.shape_46.setTransform(71.7,50.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#929496").s().p("AAAADIgKACIAEgFIgIgFIALACIAEgEIADAGIALABIgJACIABAGg");
	this.shape_47.setTransform(71.825,50.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0.1,0.1,-0.3).s().p("AgIgDIANADIAEAEg");
	this.shape_48.setTransform(66.425,49.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.1,-0.1,-0.1,0.3).s().p("AABAEIgJgHIARAHg");
	this.shape_49.setTransform(66.425,49.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.2,0.2,-0.2,-0.2).s().p("AgBgCIAIAAIgNAFg");
	this.shape_50.setTransform(66.65,50.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,-0.1,0.4,0.4).s().p("AAHgCIgBAEIgMABg");
	this.shape_51.setTransform(66.65,50.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.3,-0.1,-0.4,0.2).s().p("AgEAAIABgEIAJAKg");
	this.shape_52.setTransform(67.8,50.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.2,0.1,0.4,-0.1).s().p("AgEgEIAHACIACAIg");
	this.shape_53.setTransform(67.85,50.45);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0,-0.2,0,0.2).s().p("AgJAAIATAAIgLABg");
	this.shape_54.setTransform(68.375,50.05);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0,0.3,0,-0.1).s().p("AgJABIAGgCIANACg");
	this.shape_55.setTransform(68.375,49.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0,0.4,0.1).s().p("AAAgEIADAHIgFACg");
	this.shape_56.setTransform(67.65,49.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.2,0,-0.3,-0.1).s().p("AgCABIAGgFIgDAJg");
	this.shape_57.setTransform(67.25,49.375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#929496").s().p("AgBAFIgNABIAFgGIgKgGIAPACIAGgGIAEAIIAOACIgMAEIABAHg");
	this.shape_58.setTransform(67.425,49.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.1,0,-0.3).s().p("AADgDIAGABIgSAGg");
	this.shape_59.setTransform(32.05,50.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.1,-0.1,0.1,0.3).s().p("AAJgCIgGAEIgMACg");
	this.shape_60.setTransform(32.05,50.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.3,0,-0.3,0).s().p("AgCgBIAFgFIgEANg");
	this.shape_61.setTransform(32.675,51.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.3,0,0.4,0).s().p("AABgGIADAEIgHAJg");
	this.shape_62.setTransform(32.85,51.125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.2,-0.3,-0.1,0.4).s().p("AgHgBIAPABIgMACg");
	this.shape_63.setTransform(33.775,50.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,0.3,0.1,-0.2).s().p("AgHABIAHgCIAIADg");
	this.shape_64.setTransform(33.775,50.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],-0.1,-0.1,0.2,0.2).s().p("AAIgFIgIAIIgHADg");
	this.shape_65.setTransform(33.75,49.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],0.1,0.2,-0.3,-0.2).s().p("AgFAAIANgFIgPALg");
	this.shape_66.setTransform(33.75,49.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#5A595E","#B2B0B4"],[0,0.918],-0.1,0.1,0.3,-0.2).s().p("AgDgEIAHAEIgCAFg");
	this.shape_67.setTransform(32.8,49.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#B2B0B4","#5A595E"],[0.082,1],0.1,0,-0.3,0.3).s().p("AgCAEIAAgIIAFAJg");
	this.shape_68.setTransform(32.675,49.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#929496").s().p("AgEAFIgMACIAMgHIAAgJIAIADIANgGIgHAKIAHADIgMACIgIAKg");
	this.shape_69.setTransform(32.825,50.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgEAEIgBAAIAAgBIAEgBIABABQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIgIAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAEgBQAEgBABACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBABIgFABgAAAgCIgBACIADAAIgBgCIgBAAg");
	this.shape_70.setTransform(67.55,66.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgDAEIgDgCIAEgBQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAIABgBIABgCIgBgBIgBgBIgCACIgDAAIAAgEIADAAIAAABQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAABQgCABgDAAg");
	this.shape_71.setTransform(69.15,66.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgDAHIAAgCIABAAIAAgGIAFAAIAAABIgBAAIAAAEIACAAIAAADgAgBgDIgCgBIACgCIABgBIACABIABACIgBABIgCABg");
	this.shape_72.setTransform(70.45,66.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgDAEIABAAIgBgKIAHgBIAAAEIgBAAIAAAHIABAAIAAADIgHAAg");
	this.shape_73.setTransform(71.4,66.45);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgFAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQADgCACABQAEgBACACQAAAAABABQAAABAAAAQAAABABAAQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQgDABgDAAQgCAAgDgBgAgBgBIAAABQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgBgBg");
	this.shape_74.setTransform(72.725,66.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAAAHIAAgDIABAAIAAgCIgBAAIgFAAIgCgCIgBgBIABgDIACgBIAFgBIAJAAIAAADIgCAAIAAAHIACAAIAAADgAgCgCIAAABIABABIACAAIAAgDIgBAAg");
	this.shape_75.setTransform(74.4,66.375);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(0.1).p("Ag2AMIBugCIgBgVIhuACg");
	this.shape_76.setTransform(71.05,66.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#3B3A3F","#3C3B40","#3F3E44","#45434A","#47464D"],[0,0.29,0.573,0.847,0.945],0,1.2,0,-1.1).s().p("Ag3gJIBugCIABAVIhuACg");
	this.shape_77.setTransform(71.05,66.525);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAACIgBgBIABAAIAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgBABIAAgBIABgBIABAAIABABIAAABIgCABg");
	this.shape_78.setTransform(21.625,69.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAAACIgBgBIABgBIAAABIABgBIAAAAIgBAAIAAAAIAAAAIgBAAIgBAAIABAAIABgBIABAAIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBABg");
	this.shape_79.setTransform(22.1,69.775);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAABIAAAAIAAgBIABgBIAAABIAAAAIAAAAIABAAIAAABIgCABgAgBgBIAAAAIABAAIAAAAIAAAAIAAAAg");
	this.shape_80.setTransform(22.475,69.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAAACIgBgDIABgBIAAACIACACIgCABg");
	this.shape_81.setTransform(22.775,69.475);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAAACIgBgBIAAgBIABgBIABAAIABABIAAAAIgBACgAAAAAIAAABIABgBIgBAAIAAAAg");
	this.shape_82.setTransform(23.1875,69.425);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAAABIABAAIgBAAIAAAAIgBAAIgBAAIAAgBIAAAAIAAAAIACgBIACAAIAAAAIAAAAIAAACIABgBIAAABIgCABg");
	this.shape_83.setTransform(23.675,69.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAAABIAAAAIgBAAIAAAAg");
	this.shape_84.setTransform(17.6875,65.7262);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.2,0,-0.1,0.1).s().p("AgBAAIABgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAABIgBAAIgBgCg");
	this.shape_85.setTransform(17.6813,65.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAABAAAAQAAAAAAAAIAAACg");
	this.shape_86.setTransform(23.9833,63.6929);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.2,0,-0.1,0.1).s().p("AgBABQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape_87.setTransform(23.975,63.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_88.setTransform(20.7167,64.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.2,0,-0.1,0.1).s().p("AgBABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIACABIgBACg");
	this.shape_89.setTransform(20.7083,64.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAQAAAAAAAAQgBAAAAAAQABAAAAAAQAAAAAAAAIACAAIgBABg");
	this.shape_90.setTransform(23.5429,71.9167);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.2,0,-0.1,0.1).s().p("AgBABQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgBAAIgBgBg");
	this.shape_91.setTransform(23.575,71.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBABg");
	this.shape_92.setTransform(24.255,63.175);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_93.setTransform(23.1,63.4125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_94.setTransform(23.095,63.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_95.setTransform(21.8125,63.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_96.setTransform(21.825,63.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAg");
	this.shape_97.setTransform(26.295,70.325);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_98.setTransform(26.25,69.15);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_99.setTransform(26.225,69.175);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABgBAAIAAAAIAAgBg");
	this.shape_100.setTransform(25.8833,67.9383);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABIAAAAIAAgBg");
	this.shape_101.setTransform(25.525,66.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_102.setTransform(25.125,65.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_103.setTransform(24.675,64.33);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_104.setTransform(20.3625,72.2575);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_105.setTransform(19.625,71.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_106.setTransform(19.0625,70.15);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_107.setTransform(19.075,70.175);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0.1).s().p("AAAAAIAAAAIABAAIAAAAIgBABIAAgBg");
	this.shape_108.setTransform(18.5375,69.025);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0.1).s().p("AAAAAIAAAAIABAAIAAAAIgBABIAAgBg");
	this.shape_109.setTransform(18.05,67.8575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_110.setTransform(17.55,66.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_111.setTransform(17.1,65.4625);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIAAABg");
	this.shape_112.setTransform(17.0925,65.475);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_113.setTransform(18.225,65.0075);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAIAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_114.setTransform(19.325,64.52);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_115.setTransform(25.575,71.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_116.setTransform(25.575,71.125);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_117.setTransform(24.675,71.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0,0,0.1,0).s().p("AAAABIAAgBIABAAIgBABg");
	this.shape_118.setTransform(24.675,71.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_119.setTransform(21.375,72.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAABIAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgBABg");
	this.shape_120.setTransform(22.525,72.48);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_121.setTransform(23.75,72.4375);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_122.setTransform(23.775,72.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#828284","#7C7C7F","#646368","#535257","#47464C","#403F44","#3C3B40","#3B3A3F"],[0,0.031,0.188,0.349,0.51,0.671,0.831,1],0,0,0,0,0,0.1).s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_123.setTransform(20.55,63.9625);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#47464D","#595660","#A7A6BC"],[0,0.239,1],0.1,0,0,0).s().p("AAAAAIAAAAIABAAIgBABg");
	this.shape_124.setTransform(20.5333,63.975);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#3B3A3F","#3C3B40","#403F44","#47464C","#535257","#646368","#7C7C7F","#828284","#7F7F82","#68686C","#58575E","#4E4D54","#49484F","#47464D"],[0,0.078,0.153,0.231,0.306,0.38,0.451,0.467,0.478,0.573,0.667,0.761,0.855,0.945],3.6,-0.8,-3.1,1.6).s().p("AgHArQgHgBgBgDQgHgKgLgaIgKgYIAggOIAigIIAKAZQAJAbABALQABACgEAGIgMAKIgJAGIgOAAIgMgBg");
	this.shape_125.setTransform(21.7528,67.845);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#CFCCE5","#9A95A6","#706C78","#5A5863","#53525C"],[0,0.275,0.608,0.859,1],3.7,-0.8,-3.1,1.6).s().p("AgHAsQgGgBgDgEQgGgJgLgcIgKgYIAggOIAjgIIAJAaQAKAbABALQABADgFAFQgEAFgRALIgOABIgMgBg");
	this.shape_126.setTransform(21.7591,67.82);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#47464D","#4C4A52","#5F5C66","#726F7C","#838090","#9290A2","#9D9BAF","#A5A3B8","#A7A6BC"],[0.522,0.529,0.557,0.588,0.624,0.667,0.722,0.796,1],4,-0.9,-3.3,1.7).s().p("AgIAvQgHgBgCgDQgHgLgMgdIgLgbIAjgQIAmgIIAKAcQAKAdACAMQAAAEgEAFIgNALIgKAHIgQABQgJAAgEgCg");
	this.shape_127.setTransform(21.7028,67.8071);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#A7A6BC","#A5A3B8","#9D9BAF","#9290A2","#838090","#726F7C","#5F5C66","#4C4A52","#47464D"],[0,0.204,0.278,0.333,0.376,0.412,0.443,0.471,0.478],4.1,-0.9,-3.4,1.7).s().p("AgIAwQgHgBgCgDQgHgLgNgeIgLgbIAkgQIAmgIIALAcQAKAdACANQAAAFgEAEQgDAEgLAHIgKAHIgRAAQgIAAgEgBg");
	this.shape_128.setTransform(21.725,67.7821);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgfAHQACgJACgEQAEgGAJgCQAUgEAPAJQADACAFAFQAFAGgCACIgGADQgHADgMACIgPACQgRAAgGgJg");
	this.shape_129.setTransform(50.8423,30.1599);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#6B4733").s().p("AgjAIQAAgJAEgFQAFgJAQgBIAHgBQAUAAAKALIAJAMIgCgBQABABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIAAAAIgOAFIgQAEIgKABQgTAAgJgKg");
	this.shape_130.setTransform(50.9,30.156);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgDAOQgMAAgFgCIgGgCQgCgBAEgGIAEgGQAMgKARAAQAIABAEAEQADADADAHQgDAHgKADQgHACgHAAIgDAAg");
	this.shape_131.setTransform(62.9025,30.3792);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#6B4733").s().p("AgOAPIgNgCIAAgBIgBgCIgCABIAGgLQAHgKARgDIAFgBQAOgBAGAGQAEAFACAHQgIALgXABIgDAAIgLAAg");
	this.shape_132.setTransform(62.875,30.3767);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5B5A5A").s().p("AgCAEIAAgBIACAAIABgBIAAgCIgDAAIgBAAIABgCIACgBIADABIABACIgBADIgDABgAAAAAIAAAAIACAAIAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_133.setTransform(57.675,11.95);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5B5A5A").s().p("AgCAEIAAgBIABAAIABgBIABgCQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIgBABIAAABIgBAAIAAgCIAAgBIACAAIAAAAIACABIABABIAAACIgBACIgCABg");
	this.shape_134.setTransform(58.475,11.95);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5B5A5A").s().p("AgBAGIAAgBIABAAIAAgGIACAAIAAABIgBAAIAAACIAAABIAAACIAAAAIABAAIAAABgAAAgDIAAAAIAAgBIABAAIAAABIAAAAIgBABg");
	this.shape_135.setTransform(59.175,11.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5B5A5A").s().p("AgBAGIAAgBIABAAIAAAAIAAgFIAAgEIAAgBIAAAAIACABIAAABIgBAAIAAAIIABAAIAAABg");
	this.shape_136.setTransform(59.75,11.725);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5B5A5A").s().p("AgBAEQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIACAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgDABgAgBgCIAAAEQAAAAABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_137.setTransform(60.5,11.95);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#5B5A5A").s().p("AAAAFIAAAAIABAAIAAgBIAAgIIgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAIAAACIABAAIAAAAIABAAIgBAAIAAAAIgCAAQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgBQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAFAAIAAAAIgBAAIAAAJIABAAIAAAAg");
	this.shape_138.setTransform(61.475,11.775);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#414343").s().p("AgIAzQgOgEgDgUQgCgHACgHQABgNANgVIAMgUQAHgKAGgBIABABIAAAAIgFAKQgCAGgBAHQgDASAAAJQAAAPAEAFQADADAEgBQAEgBACgDIAEgHIABgBIAAAAIABAAIAAABIAAADQgCAQgIAMQgJAMgJAAIgHgCg");
	this.shape_139.setTransform(33.4875,121.1519);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#414343").s().p("AgIAzQgOgEgDgUQgCgHACgHQABgNANgVIAMgUQAHgKAGgBIABABIAAAAIgFAKQgCAGgBAHQgDASAAAJQAAAPAEAFQADADAEgBQAEgBACgDIAEgHIABgBIAAAAIABAAIAAABIAAADQgCAQgIAMQgJAMgJAAIgHgCg");
	this.shape_140.setTransform(33.4875,121.1519);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#404648").s().p("AiyENQgIgDgDgIQgEgJAFgGIAAgCIEImIIBNhwIAAAAIACgCQADgEAGgBQAJAAAHAEQAGADAEAHQAEAIgFAEQgfAwhIBpIjtFiIgBAAQgEAFgIACIgFABQgFAAgEgCg");
	this.shape_141.setTransform(24.9668,134.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F1BDA0").s().p("Ak7B+QgEgHgEgMQgFgPgFgIQgMgWgFgNIgHgPIACgIIADgIQAFgLAIgHIAFgFQAUgRAVgBQAOAAApAIIATAFIADAAIADAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIABgBQAEgIgNgLQgHgHgMgFIgCgNQgBgKgJgZQAFgWgGgNIASgCQALAAAPAEIAaAHIAbANQAeAPAXANIAZAOIAPAJIAOAAIAsABIBVABQAFgEAIgLQAHgLAGgEIARgOQALgIAIgFIANgHIAJgIQAIgGALgDIAYgEQAHAAAMAFIABAAQAKgBAKADIAXAHIATAFQAEACADADQAFADgDACQgCAEgDACIgFACQALACAHAFQAFAEADAEQADAFgGADIACABQADAEABAFQAAAFgEACQAIABAEACQACABADAEQAEAIgNAGQgHADgFAAIgTgBQgOgCgKADIgNAEIgBAAIgBABIACABIAQAGQAGABAHgBIAAAAIAZAAQAUABAaASIADAbQAAAUgNAUIgKARQgDAGgHAGQgNALgXgCQguAFgogKQgygMg+gXIgegLIgJACIgJACIgYAHQgbAIgXALQgpARgLADQgeAJgbADQgRADgiADQghABgRAEIgfAIIgSAFQgEACgDAAQgJAAgJgMgADchqQgKAHgGACQgJAFgDADIgDADIAdgNQAPgGAIAAIADAAIgGgBIgFAAIgNAAg");
	this.shape_142.setTransform(59.275,82.8149);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A27D42").s().p("Ah5GJIgugHQgTgDgWgJQhGgfAPhQIAIgqQACgMABgZIgGgoQgGgagQgYQgVgagIgNIgDAJQgBAEgGgBQgFAAgEgDQgKgGgDgOQgBgGABgEQgHgHgEgLIgIgSQgMgggIgQIAAgBQgZg4gEgeQgHg5AQgjQAGgLAKgGIAHgHIAJgGQANgHAPgFQAOgEA2gNIAcgIIAYgHQAogMALgOQAGgQAKgOIAAAAIAQgZIAEgHQADgEAEABIAHABQgCAaACAIQADAJAEAIQAKATANAOQAIAIARANIAZAVQAQAOAeAoQAVAYADAFIABgOQABgFADgHIAFgMQADgJAHgvIAFgXQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgGgMgIgIIAAgEQAQgGAMgQIAAAAIABAAIABAAIABAAIAAABIAEADIAFAJIADAGQADACAJAEIAOAGQAQAHAOADIAdAIQAXAIAHAAQAvAFAeAUIAAAAIAJAFQACACACAHQAEALAOAVQAUAgALAcIANAdIASAdQAOAXADAIQAFAOgGAaQAJACAIAHQAIAGACAMIAAAOQABANgBAHIgBACIgCAAQgPgNgOgHQgNgGgZAAQgjAAgtACIAAAAIgTAGIABAiIgCABQAAAygBAKQgDAngJAbQgGAVgXAwQABAHgCAMIgBATQAAAIADAQQACAMgBANQAAArgkAIQgaAFgQgCQgRgCgXgLIgbgLIhPAaQgWAHghAAQgUAAgXgCg");
	this.shape_143.setTransform(54.7553,79.7875);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#575A5A").s().p("AgIgBIAAgBQAGABALADIAAABQgJgBgIgDg");
	this.shape_144.setTransform(38.975,121.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#575A5A").s().p("AACADQgJAAgkgDQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAHgBAOACIAWAAIAWABIAWABIAAABg");
	this.shape_145.setTransform(47.5125,122.4958);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#575A5A").s().p("AgZAFIAAgBIAcgEIANgCQAGAAAEgCIABABQgEACgIABIgMABIgNADIgMABIgDAAg");
	this.shape_146.setTransform(65.0875,121.6813);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgNALQgKgBgDgFQgEgFACgLIABAAIgBAKQABAEAEADIASADIASAAQAMACAEgCIAAAAIgEABIgMABIgNABIgNgBg");
	this.shape_147.setTransform(56.5636,122.1125);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgKAaQAJgDAFgTIAGgdIAAAAQABAGgCAKIgEARQgEAQgKACg");
	this.shape_148.setTransform(60.955,120.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A27D42").s().p("AAAAPQABgEgFgBQgIgEgGAJIAEgPIAIgaIACgHQABgFADgCIAAAAQAEgCAGACQAGACACAEIABAAQgDAEgFAOQgEALgCAJIgHAmQgBgOADgNg");
	this.shape_149.setTransform(42.625,118.9179);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A27D42").s().p("AgLAWQAHgtAEgOQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAIgDQADAAAEADIAAgBIAAABIABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAFgFAfIgEAYQgBgGgFgDQgEgBgDADQgDADgBAFQgDAPgDAFg");
	this.shape_150.setTransform(69.575,118.0714);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A27D42").s().p("AgTApQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAIADgSIAGgZIAIgaIACgHQABgFABgCIABAAQAEgCAGACQAHACACAEIAAAAQgDAEgFAOQgEALgCAJIgHAsQAAAAgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgCABgFAAQgIAAgCgFg");
	this.shape_151.setTransform(42.375,119.3429);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A27D42").s().p("AgPAsQgBgEACgGIADgOQAHgtAEgOQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAIgDQADgBAEADIAAAAIAAAAIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQABAEgFAgIgEAYQgDAPgEAFQgDAEgKABIgBAAIgBAAIgBAAIAAgBg");
	this.shape_152.setTransform(69.57,118.3286);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#999DA0").s().p("AgWAwQgTAAgFgLQgDgIADgYIAFgUQACgSAIgIQAKgIAVABIASABQAKABAGADQAPAGgBAQIAAAIQgBAKgEASQgEARgGAHQgFAGgMABIAAAAQgNADgPAAIgKgBg");
	this.shape_153.setTransform(57.5656,118.9556);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#414343").s().p("AgmA2QgaAAgWgCQgogFgsgTQgVgJgQgLIAAgBQgEgDAAgDQAAgEABgIIADgMQAAgKAEgOQACgEAEgCQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQApAQAsALQAgAIBEADQBFACAegDIAygHIA0gKQALgDACABQAHABgCAPIgEATIgCASQgBAMgEACIgNADQgdAJguAFQgtAGg4AAg");
	this.shape_154.setTransform(51.216,117.7938);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#695136").s().p("AgEAIQgSgBgCgOIABAAQAEAMARACQANABANgHIAAABQgLAGgNAAIgEAAg");
	this.shape_155.setTransform(25.4125,193.1285);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#695136").s().p("AgBAVIAGgEIADgCQABAAAAgBQAAAAAAAAQAAgBgBAAQAAgBgBAAQgBgCgFgBIgHAAQgEgBgDgCIAAgBQASgQAIgKIABAAQgIAKgKAKIgFAEQgEAEAIAAIAIABIAGACQABABAAAAQAAABABABQAAAAAAABQAAAAAAABQgBACgFACIgGADIAAAAIAAgBg");
	this.shape_156.setTransform(61.075,185.3583);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#695136").s().p("AgfDiQAHgSAFgbIAIguIALgxQAFgcABgVQABggACgPQADgdgCgTIgCgvQgCgdADgOQADgIAAgIQABgGgEgIQgFgJAEgIQACgGAJgIQAKgIACgFIgPAIIgIADIgIAFIgRAMIgRAMQAAABAAgBIAQgNQAKgIAHgEIAIgGIAJgEQAOgHADgBIACAAIAAACQgCAFgGAFIgKAJQgHAGgCAGQgBAFACAFIAEAIQADAGgCAMIgDAMIgBAMIABAtIACAwQAAAQgEAfIgBAYIgCAYQgCAQgGAfQgKApgEAXQgGAqgIARIAAAAIgBAAg");
	this.shape_157.setTransform(65.6625,159.975);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#695136").s().p("AgUAUQAXgPAKgKQAEgEACgEQACgHgJACIgMAEQgBABAAgBIARgGQAIAAgEAJQgCAGgLAIQgQAPgKADIgBAAIAAgBg");
	this.shape_158.setTransform(68.0946,135.1313);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#695136").s().p("AgkAqIAVgTQAMgLAHgIIARgWQANgTACgFIABAAQgEAKgKAOQgJAPgGAGQgIAJgjAfIAAAAIgBgBg");
	this.shape_159.setTransform(65.925,132.445);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#695136").s().p("AgNAVQAIgGAGgPQAIgQAFgFQABAAgBAAIgLAWQgGAPgJAGQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_160.setTransform(28.5883,189.725);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#695136").s().p("AhNDbQAGgNAJggQAIgdAGgQQAZg8ALggIANguIAOgwIANgvIAHgZQADgOABgKQAAgSAIgFQAGgFAAgBIgEgIQgFgGAAgFQgBgFAMgFIAWgHIABAAQgTAGgHAFQgEACgCADQgBADAGAGQAGAJgCAEIgCADIgJAHQgCADgBAIIgBALQgBAJgEAMIgGAZIgbBgIgMAuQgCAJgPAlQgUAygGARQgNAwgKASIAAAAIgBAAg");
	this.shape_161.setTransform(38.7,163.3875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#695136").s().p("AAtAoQgTgJgkgdQgegWgFgUIAAAAQAEAMAMAMQAHAHAQAKQAoAfAMAHIAAACIgBgBg");
	this.shape_162.setTransform(40.3083,133.1063);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#695136").s().p("AA5AnIgSgHQgfgLgLgHIgmgXQgXgRgKgMIABgBQANANAUANIAkAWQAKAHAcAMIAUAIQAMAEAJgBIAAAAIgIABIgKgBg");
	this.shape_163.setTransform(44.9875,131.5861);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#695136").s().p("AgTAsQAPgOAEgGQACgDAGgTQAHgSABgJIABgJQAAgGACgDIABAAQgDAIAAAPQgBAIgHATQgEAPgFAGIgIAIIgLAIg");
	this.shape_164.setTransform(56.6813,130.2875);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#695136").s().p("Ag6AzIAkgWQAXgOAMgKQAHgFAHgJIANgPIAOgKQAGgGgJgLQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAHAHAAAFQAAAEgHAFQgIAGgIAKQgHAJgIAHQgPAOgWANIgUAMQgOAJgHACQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBg");
	this.shape_165.setTransform(65.1683,128.355);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A27D42").s().p("AkaKRIgCgCQgJgEgSgOQgUgQgFgFIAAAAQgIgDAGgQIAHgVIADgTQACgKAHgKIAOgQIAAgBQAGgKAGgRQAHgcAFgdIAQhhIAShgIAIgoQAFgXAEgPQADgKAHgKIgBgGQgCgPAHgPQAFgLAJgRIAPgdIAAgBIgCgPQgBgJAEgGQAEgHAMgNIAAgMQAFgzAIg9IAPh0QAFgrADg+QAFhyAEgiQADgjAMgrQAHgaAIgTQAHgPAYgfQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAFAQAXAHQAFACAhAHQARADAkADQAQACAiACIAxABQAkAAAMgBQARgCAdgHIAugJQARgCAJABIABAAIADANIAHAQQAEAKACAHQABAIgGAHQgCAQADAZIADAtIACBeQAAA5gDAlQgDAfgJA+QgIA8gMBFQgKAygOA2IgEBLQgDAsgIAxIghC9QgHAtgEAkIgEAkIAAAAQgBAHAGAGIALAJQAHAJgHAJIgBACQgDAOAEAKIAEAKIAEAJIAAAAIAAAKQgBAFgFACQgCABgHgCIgNgCIgnACQgQADgQAHQgmAUgUAIQgSAGgPgCQgHgBgBgBQgCgDABgFIgBgXQgBgSAEgLQACgHAJgHQgCgHAGgKIAKgOQAEgHACgSIACgZIAGhrIgEhVIgFhYQgBgbACgPQACgTALgbQAFgKAQgcQAPgYgBgMIgDgEQgEgGADgLIAIgRQgFgKgEgPQgDgPAAgUIABgjQABglgDg7IgEgwIgCgwIAAgEIgIAaQgLAmgeBDIgyBzIgPAoIgSAnIAGAXQAEAOgCAIQgBADgEADIgHAFQABBegjBYQgLAdgeBCQgbA9gNAjIABgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQgIAOgFAVQgIAeACANIAFAVQABAMgHAJQgFAGgIAGIgGAaQgDAPABALIgBACIgCgBQgFAIgTAEIgkAFIgLABQgRAAgMgJg");
	this.shape_166.setTransform(37.8793,183.0696);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#404648").s().p("AB3BfIhRgFIgmgBQgWgCgQgFQgQgDgRgLIgNgIQgIgHgGgBQAAAIgGACQgFAAgPgDQgUgEgLgDIgMgFQgDgBgCgEIgCAAQgCgEgBgGIgGgQQgGgPAAgQQABgLAFgTQAHgUABgIQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABgCIAAgBIABAAIAAABQAIgEAdgIQAUgFAXAAQAkAAAwAVQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAABQAWAnAkASQAOAIAbAHQAdAIALAEQAWAJAKAIQALAIAHAQIAGATQADANgCAEIACgBQABAAgBABIgGABIAAAAQgSAFgcAAIgTAAg");
	this.shape_167.setTransform(61.25,247.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#404648").s().p("AgNBmQgPgCgPgHQgMgGgSgRQgOgOgEgRQgFgSAJgQIABgBQABgFADgJIASgoQAGgMADgIIAEgMIAAgBQAAgNAZgDIAXgDQAIAAARACQAdAEASAJQAXAJABANQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgDATAAAQIADAlQACAUgCAPIgEAQIgBAAIABABIgBABIgBAFIgCAAQgDAFgLAJQgIAHgRAGQgMAFgTACIgOACIgGABIgIgBg");
	this.shape_168.setTransform(9.3944,253.715);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAAgMIAkAYQgGgDgQgJIgOgKIgkAXg");
	this.shape_169.setTransform(59.85,8.175);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAHABIAGgGQAFgEgBgIIABAAQABAIgEAEQgEAGgcARg");
	this.shape_170.setTransform(61.1611,14.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#5D6162").s().p("AgFAMQgCgCgBgGQgBgGACgEQACgJAGABQAIACAAAPQgBAHgEADQgCACgCAAQgCAAgDgDg");
	this.shape_171.setTransform(40.18,19.8263);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#999DA0").s().p("AgPAqQgNgKgEgFQgIgLACgHIADgHQACgDgBgEIgIgMIAAgBIAAgBIATgOIAVgPIABABIAFAAIAAAAIABAAIAAAAIABABIARANQAKAIAJADIABABIgFAGQgDAEgBAEQAAAEADAIQADAIgCAFQgDAKgSAKIgRAKQgJgBgGgFg");
	this.shape_172.setTransform(59.275,11.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#414343").s().p("AAAA8QgjgCgWgFQgbgHgUgPQgMgJgcgfQAAAAgBAAQAAABAAgBQAAAAgBAAQAAAAAAAAIAAgBIADgEQAEgEAXgJQAVgIAKgDQAhgJAngGQAmgIAhACQAUAAAMACQASADAMAIQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAPAMAIAPQAKASgOATQgUAhg7AGQgQACgSAAIgagBg");
	this.shape_173.setTransform(54.5712,20.3396);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#414343").s().p("AiLAiQgBgDAOgKQAcgVAqgNQBCgXBNADQATAAARAKQAOAHADAFIgHARQgRgOgegEQghgEg/AKQhPAMguAcIgCABIgCgBg");
	this.shape_174.setTransform(54.1716,15.966);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A27D42").s().p("AiwBsQgYgBgJgLIgCgDQgCgRAGgNQAPghAZgXQA6g2BCgjQAwgcAhADQAgACArAVQAiARAWATQAZAUASAdIgBAKQgDAVgVAZQgPASgTAHIgCAAQgMgGgXgOQgagQgNgGQgVgKgPgCQgRgDgVAEQgMACgYAHIgmAKIgQAFIgNAFIgHACIgEADIgCABIgBAAQgHAEgaAQQgHAFgKAKIgLAKg");
	this.shape_175.setTransform(51.96,13.5896);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#6C5637").s().p("AitB6QgZgBgIgLQgOgSAKgeQASg0AygsQAggcBLgnQAggRAZgDQAOgCAQAEIAAAAIAAAAIAAgBIAMAFIARAGIAAABQApAUARAKQAgAUARASQAfAjgFAeQgDAUgWAaQgOASgUAGIgCAAQgMgFgXgOQgagQgNgHQgUgJgQgDQgRgCgVADQgMACgYAHIgmALIgQAEIgNAFIgHADIgDADIgDABIAAAAQgIADgaARQgGAEgLALIgKAJgAAYh1QgXABgjASQg+AfghAbQgtAkgYAuQgPAfADAWQAEAVAiACIAGgGIAPgOQAUgPAUgGIABgCIAAAAIADgEIAEgCIAMgEQAGgDAJgCIAPgDIAlgLIAkgJQAggGAqAVQAYANArAbQAzgcAGgpQADgSgLgTQgKgSgPgNQgdgZhNgpQgUgHgSAAIgJABg");
	this.shape_176.setTransform(51.7031,12.2164);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A27D42").s().p("AitB6QgZgBgIgLQgOgSAKgeQASg0AygsQAggcBLgnQAggRAZgDQAOgCAQAEIAAgBIAMAFIARAGIAAABQApAUARAKQAgAUARASQAfAjgFAeQgDAUgWAaQgOASgUAGIgCAAQgMgFgXgOQgagQgNgHQgUgJgQgDQgRgCgVADQgMACgYAHIgmALIgQAEIgNAFIgHADIgDADIgDABIAAAAQgIADgaARQgGAEgLALIgKAJg");
	this.shape_177.setTransform(51.7031,12.2164);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#44433F").s().p("AgDAAIABgCIAGAEIAAABQgEAAgDgDg");
	this.shape_178.setTransform(42.15,32.77);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#44433F").s().p("AACAEIgFgEIABAAIABAAIgFgEQgBgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIAMAIQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgDgCIAEADQAAAAABABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgDAAgCgCg");
	this.shape_179.setTransform(41.8283,32.125);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#484542").s().p("AAWBBIgKgHIAAgCIACAAIAAgBQgDgCgCgDIABgCIgEgDIAAgBQAAgBgBAAQAAgBgBgBQAAAAAAAAQAAgBAAAAIABgBIgBgCIgDgIIgHgDQgEAAgJAJQgLANABAKIgCgCIgCgDIgDgHIABAFIgBABIAAABIgBgBQgKgNAAgJIAAADIgBAAQgGgOAFgLIgBADIgBABIgBAAQAAgNAIgNIAIgLQAEgFAIgDQAFgGAGgEQARgNAZgMIAAABIgEADIALABIAJACIAIADIAAABQgBAAgBABQAAAAgBAAQAAAAgBAAQAAgBAAAAIgMAXQgDAGgDAVIgDAQIgBAUIAAATIAAABIAAABIACACIABABIgBABIgBAAIAAABIAAAAIACAFQAAABAAAAQgBABAAAAQAAAAAAAAQgBgBAAAAIABABIgBABIgDgBIABABIADACIAAABIgDgBIADADQAAAAAAAAQABAAAAABQgBAAAAAAQAAAAAAAAIgHgEg");
	this.shape_180.setTransform(39.536,25.275);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#F1BDA0").s().p("AAoC3QgYgBgMgLQghgfgSgKQgYgNgHgQIgFgPIgFgSQgCAPgNgHQgJgFgKgPQgKgRgHgFQgNgLgCgFQgDgHAIgLQAGgHAJgFIAEgCQgMgZADgaQACgcAQgWQAMgQAZgOQAYgPAagLQAdgMAaABQAaACAbAQQAbAPAUATIASATQAJAMAAAKQANAhgJArIgIAtIACARQACAMgCANQgCARgOATQgRAVgIANQgQAZgOAIQgNAGgRAAIgFAAg");
	this.shape_181.setTransform(51.9771,29.3232);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F1BDA0").s().p("Ag8B8QgXgNgYgWQgagYAEgSQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIACABIAQgNQAIgHAHgRQAHgSABgdQADgigBgSQgDgpABgLQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIABAAIABAAQAHgBAKACQAJACAZAIQAXAHAjASQAcAOAMAOQAGAJAEAKQAEAMgCAJQABAOgBAOQAJANAJAKIAWAVQAUAUgJAaQgIAWgXATQgUAQgaAJQgRAFgSAAQgjAAgpgXg");
	this.shape_182.setTransform(51.1689,47.5729);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182,p:{scaleX:1,scaleY:1,x:51.1689,y:47.5729}},{t:this.shape_181,p:{scaleX:1,scaleY:1,x:51.9771,y:29.3232}},{t:this.shape_180,p:{scaleX:1,scaleY:1,x:39.536,y:25.275}},{t:this.shape_179,p:{scaleX:1,scaleY:1,x:41.8283,y:32.125}},{t:this.shape_178,p:{scaleX:1,scaleY:1,x:42.15,y:32.77}},{t:this.shape_177,p:{scaleX:1,scaleY:1,x:51.7031,y:12.2164}},{t:this.shape_176,p:{scaleX:1,scaleY:1,x:51.7031,y:12.2164}},{t:this.shape_175,p:{scaleX:1,scaleY:1,x:51.96,y:13.5896}},{t:this.shape_174,p:{scaleX:1,scaleY:1,x:54.1716,y:15.966}},{t:this.shape_173,p:{scaleX:1,scaleY:1,x:54.5712,y:20.3396}},{t:this.shape_172,p:{scaleX:1,scaleY:1,x:59.275,y:11.6}},{t:this.shape_171,p:{scaleX:1,scaleY:1,x:40.18,y:19.8263}},{t:this.shape_170,p:{scaleX:1,scaleY:1,x:61.1611,y:14.5}},{t:this.shape_169,p:{scaleX:1,scaleY:1,x:59.85,y:8.175}},{t:this.shape_168,p:{scaleX:1,scaleY:1,x:9.3944,y:253.715}},{t:this.shape_167,p:{scaleX:1,scaleY:1,x:61.25,y:247.7}},{t:this.shape_166,p:{scaleX:1,scaleY:1,x:37.8793,y:183.0696}},{t:this.shape_165,p:{scaleX:1,scaleY:1,x:65.1683,y:128.355}},{t:this.shape_164,p:{scaleX:1,scaleY:1,x:56.6813,y:130.2875}},{t:this.shape_163,p:{scaleX:1,scaleY:1,x:44.9875,y:131.5861}},{t:this.shape_162,p:{scaleX:1,scaleY:1,x:40.3083,y:133.1063}},{t:this.shape_161,p:{scaleX:1,scaleY:1,x:38.7,y:163.3875}},{t:this.shape_160,p:{scaleX:1,scaleY:1,x:28.5883,y:189.725}},{t:this.shape_159,p:{scaleX:1,scaleY:1,x:65.925,y:132.445}},{t:this.shape_158,p:{scaleX:1,scaleY:1,x:68.0946,y:135.1313}},{t:this.shape_157,p:{scaleX:1,scaleY:1,x:65.6625,y:159.975}},{t:this.shape_156,p:{scaleX:1,scaleY:1,x:61.075,y:185.3583}},{t:this.shape_155,p:{scaleX:1,scaleY:1,x:25.4125,y:193.1285}},{t:this.shape_154,p:{scaleX:1,scaleY:1,x:51.216,y:117.7938}},{t:this.shape_153,p:{scaleX:1,scaleY:1,x:57.5656,y:118.9556}},{t:this.shape_152,p:{scaleX:1,scaleY:1,x:69.57,y:118.3286}},{t:this.shape_151,p:{scaleX:1,scaleY:1,x:42.375,y:119.3429}},{t:this.shape_150,p:{scaleX:1,scaleY:1,x:69.575,y:118.0714}},{t:this.shape_149,p:{scaleX:1,scaleY:1,x:42.625,y:118.9179}},{t:this.shape_148,p:{scaleX:1,scaleY:1,x:60.955,y:120.3}},{t:this.shape_147,p:{scaleX:1,scaleY:1,x:56.5636,y:122.1125}},{t:this.shape_146,p:{scaleX:1,scaleY:1,x:65.0875,y:121.6813}},{t:this.shape_145,p:{scaleX:1,scaleY:1,x:47.5125,y:122.4958}},{t:this.shape_144,p:{scaleX:1,scaleY:1,x:38.975,y:121.675}},{t:this.shape_143,p:{scaleX:1,scaleY:1,x:54.7553,y:79.7875}},{t:this.shape_142,p:{scaleX:1,scaleY:1,x:59.275,y:82.8149}},{t:this.shape_141,p:{scaleX:1,scaleY:1,x:24.9668,y:134.95}},{t:this.shape_140,p:{scaleX:1,scaleY:1,x:33.4875,y:121.1519}},{t:this.shape_139,p:{scaleX:1,scaleY:1,x:33.4875,y:121.1519}},{t:this.shape_138,p:{scaleX:1,scaleY:1,x:61.475,y:11.775}},{t:this.shape_137,p:{scaleX:1,scaleY:1,x:60.5,y:11.95}},{t:this.shape_136,p:{scaleX:1,scaleY:1,x:59.75,y:11.725}},{t:this.shape_135,p:{scaleX:1,scaleY:1,x:59.175,y:11.75}},{t:this.shape_134,p:{scaleX:1,scaleY:1,x:58.475,y:11.95}},{t:this.shape_133,p:{scaleX:1,scaleY:1,x:57.675,y:11.95}},{t:this.shape_132,p:{scaleX:1,scaleY:1,x:62.875,y:30.3767}},{t:this.shape_131,p:{scaleX:1,scaleY:1,x:62.9025,y:30.3792}},{t:this.shape_130,p:{scaleX:1,scaleY:1,x:50.9,y:30.156}},{t:this.shape_129,p:{scaleX:1,scaleY:1,x:50.8423,y:30.1599}},{t:this.shape_128,p:{scaleX:1,scaleY:1,x:21.725,y:67.7821}},{t:this.shape_127,p:{scaleX:1,scaleY:1,x:21.7028,y:67.8071}},{t:this.shape_126,p:{scaleX:1,scaleY:1,x:21.7591,y:67.82}},{t:this.shape_125,p:{scaleX:1,scaleY:1,x:21.7528,y:67.845}},{t:this.shape_124,p:{scaleX:1,scaleY:1,x:20.5333,y:63.975}},{t:this.shape_123,p:{scaleX:1,scaleY:1,x:20.55,y:63.9625}},{t:this.shape_122,p:{scaleX:1,scaleY:1,x:23.775,y:72.425}},{t:this.shape_121,p:{scaleX:1,scaleY:1,x:23.75,y:72.4375}},{t:this.shape_120,p:{scaleX:1,scaleY:1,x:22.525,y:72.48}},{t:this.shape_119,p:{scaleX:1,scaleY:1,x:21.375,y:72.475}},{t:this.shape_118,p:{scaleX:1,scaleY:1,x:24.675,y:71.8}},{t:this.shape_117,p:{scaleX:1,scaleY:1,x:24.675,y:71.8}},{t:this.shape_116,p:{scaleX:1,scaleY:1,x:25.575,y:71.125}},{t:this.shape_115,p:{scaleX:1,scaleY:1,x:25.575,y:71.1}},{t:this.shape_114,p:{scaleX:1,scaleY:1,x:19.325,y:64.52}},{t:this.shape_113,p:{scaleX:1,scaleY:1,x:18.225,y:65.0075}},{t:this.shape_112,p:{scaleX:1,scaleY:1,x:17.0925,y:65.475}},{t:this.shape_111,p:{scaleX:1,scaleY:1,x:17.1,y:65.4625}},{t:this.shape_110,p:{scaleX:1,scaleY:1,x:17.55,y:66.65}},{t:this.shape_109,p:{scaleX:1,scaleY:1,x:18.05,y:67.8575}},{t:this.shape_108,p:{scaleX:1,scaleY:1,x:18.5375,y:69.025}},{t:this.shape_107,p:{scaleX:1,scaleY:1,x:19.075,y:70.175}},{t:this.shape_106,p:{scaleX:1,scaleY:1,x:19.0625,y:70.15}},{t:this.shape_105,p:{scaleX:1,scaleY:1,x:19.625,y:71.325}},{t:this.shape_104,p:{scaleX:1,scaleY:1,x:20.3625,y:72.2575}},{t:this.shape_103,p:{scaleX:1,scaleY:1,x:24.675,y:64.33}},{t:this.shape_102,p:{scaleX:1,scaleY:1,x:25.125,y:65.575}},{t:this.shape_101,p:{scaleX:1,scaleY:1,x:25.525,y:66.75}},{t:this.shape_100,p:{scaleX:1,scaleY:1,x:25.8833,y:67.9383}},{t:this.shape_99,p:{scaleX:1,scaleY:1,x:26.225,y:69.175}},{t:this.shape_98,p:{scaleX:1,scaleY:1,x:26.25,y:69.15}},{t:this.shape_97,p:{scaleX:1,scaleY:1,x:26.295,y:70.325}},{t:this.shape_96,p:{scaleX:1,scaleY:1,x:21.825,y:63.675}},{t:this.shape_95,p:{scaleX:1,scaleY:1,x:21.8125,y:63.65}},{t:this.shape_94,p:{scaleX:1,scaleY:1,x:23.095,y:63.425}},{t:this.shape_93,p:{scaleX:1,scaleY:1,x:23.1,y:63.4125}},{t:this.shape_92,p:{scaleX:1,scaleY:1,x:24.255,y:63.175}},{t:this.shape_91,p:{scaleX:1,scaleY:1,x:23.575,y:71.9}},{t:this.shape_90,p:{scaleX:1,scaleY:1,x:23.5429,y:71.9167}},{t:this.shape_89,p:{scaleX:1,scaleY:1,x:20.7083,y:64.425}},{t:this.shape_88,p:{scaleX:1,scaleY:1,x:20.7167,y:64.425}},{t:this.shape_87,p:{scaleX:1,scaleY:1,x:23.975,y:63.7}},{t:this.shape_86,p:{scaleX:1,scaleY:1,x:23.9833,y:63.6929}},{t:this.shape_85,p:{scaleX:1,scaleY:1,x:17.6813,y:65.75}},{t:this.shape_84,p:{scaleX:1,scaleY:1,x:17.6875,y:65.7262}},{t:this.shape_83,p:{scaleX:1,scaleY:1,x:23.675,y:69.15}},{t:this.shape_82,p:{scaleX:1,scaleY:1,x:23.1875,y:69.425}},{t:this.shape_81,p:{scaleX:1,scaleY:1,x:22.775,y:69.475}},{t:this.shape_80,p:{scaleX:1,scaleY:1,x:22.475,y:69.6}},{t:this.shape_79,p:{scaleX:1,scaleY:1,x:22.1,y:69.775}},{t:this.shape_78,p:{scaleX:1,scaleY:1,x:21.625,y:69.925}},{t:this.shape_77,p:{scaleX:1,scaleY:1,x:71.05,y:66.525}},{t:this.shape_76,p:{scaleX:1,scaleY:1,x:71.05,y:66.525}},{t:this.shape_75,p:{scaleX:1,scaleY:1,x:74.4,y:66.375}},{t:this.shape_74,p:{scaleX:1,scaleY:1,x:72.725,y:66.65}},{t:this.shape_73,p:{scaleX:1,scaleY:1,x:71.4,y:66.45}},{t:this.shape_72,p:{scaleX:1,scaleY:1,x:70.45,y:66.45}},{t:this.shape_71,p:{scaleX:1,scaleY:1,x:69.15,y:66.725}},{t:this.shape_70,p:{scaleX:1,scaleY:1,x:67.55,y:66.75}},{t:this.shape_69,p:{scaleX:1,scaleY:1,x:32.825,y:50.5}},{t:this.shape_68,p:{scaleX:1,scaleY:1,x:32.675,y:49.975}},{t:this.shape_67,p:{scaleX:1,scaleY:1,x:32.8,y:49.975}},{t:this.shape_66,p:{scaleX:1,scaleY:1,x:33.75,y:49.825}},{t:this.shape_65,p:{scaleX:1,scaleY:1,x:33.75,y:49.825}},{t:this.shape_64,p:{scaleX:1,scaleY:1,x:33.775,y:50.375}},{t:this.shape_63,p:{scaleX:1,scaleY:1,x:33.775,y:50.65}},{t:this.shape_62,p:{scaleX:1,scaleY:1,x:32.85,y:51.125}},{t:this.shape_61,p:{scaleX:1,scaleY:1,x:32.675,y:51.125}},{t:this.shape_60,p:{scaleX:1,scaleY:1,x:32.05,y:50.8}},{t:this.shape_59,p:{scaleX:1,scaleY:1,x:32.05,y:50.75}},{t:this.shape_58,p:{scaleX:1,scaleY:1,x:67.425,y:49.9}},{t:this.shape_57,p:{scaleX:1,scaleY:1,x:67.25,y:49.375}},{t:this.shape_56,p:{scaleX:1,scaleY:1,x:67.65,y:49.375}},{t:this.shape_55,p:{scaleX:1,scaleY:1,x:68.375,y:49.8}},{t:this.shape_54,p:{scaleX:1,scaleY:1,x:68.375,y:50.05}},{t:this.shape_53,p:{scaleX:1,scaleY:1,x:67.85,y:50.45}},{t:this.shape_52,p:{scaleX:1,scaleY:1,x:67.8,y:50.45}},{t:this.shape_51,p:{scaleX:1,scaleY:1,x:66.65,y:50.2}},{t:this.shape_50,p:{scaleX:1,scaleY:1,x:66.65,y:50.175}},{t:this.shape_49,p:{scaleX:1,scaleY:1,x:66.425,y:49.55}},{t:this.shape_48,p:{scaleX:1,scaleY:1,x:66.425,y:49.55}},{t:this.shape_47,p:{scaleX:1,scaleY:1,x:71.825,y:50.725}},{t:this.shape_46,p:{scaleX:1,scaleY:1,x:71.7,y:50.3}},{t:this.shape_45,p:{scaleX:1,scaleY:1,x:72,y:50.3}},{t:this.shape_44,p:{scaleX:1,scaleY:1,x:72.525,y:50.825}},{t:this.shape_43,p:{scaleX:1,scaleY:1,x:72.15,y:51.125}},{t:this.shape_42,p:{scaleX:1,scaleY:1,x:72.1,y:51.125}},{t:this.shape_41,p:{scaleX:1,scaleY:1,x:71.225,y:50.925}},{t:this.shape_40,p:{scaleX:1,scaleY:1,x:71.225,y:50.925}},{t:this.shape_39,p:{scaleX:1,scaleY:1,x:71.05,y:50.425}},{t:this.shape_38,p:{scaleX:1,scaleY:1,x:71.05,y:50.425}},{t:this.shape_37,p:{scaleX:1,scaleY:1,x:75.425,y:51.225}},{t:this.shape_36,p:{scaleX:1,scaleY:1,x:75.375,y:51}},{t:this.shape_35,p:{scaleX:1,scaleY:1,x:75.525,y:51}},{t:this.shape_34,p:{scaleX:1,scaleY:1,x:75.8,y:51.275}},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:75.575,y:51.425}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:75.125,y:51.325}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:75.125,y:51.325}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:28.675,y:51.5}},{t:this.shape_29,p:{scaleX:1,scaleY:1,x:28.525,y:51}},{t:this.shape_28,p:{scaleX:1,scaleY:1,x:28.65,y:51}},{t:this.shape_27,p:{scaleX:1,scaleY:1,x:29.6,y:50.825}},{t:this.shape_26,p:{scaleX:1,scaleY:1,x:29.6,y:50.825}},{t:this.shape_25,p:{scaleX:1,scaleY:1,x:29.625,y:51.375}},{t:this.shape_24,p:{scaleX:1,scaleY:1,x:29.625,y:51.65}},{t:this.shape_23,p:{scaleX:1,scaleY:1,x:28.7,y:52.125}},{t:this.shape_22,p:{scaleX:1,scaleY:1,x:28.525,y:52.125}},{t:this.shape_21,p:{scaleX:1,scaleY:1,x:27.9,y:51.8}},{t:this.shape_20,p:{scaleX:1,scaleY:1,x:27.9,y:51.775}},{t:this.shape_19,p:{scaleX:1,scaleY:1,x:24.175,y:52.7}},{t:this.shape_18,p:{scaleX:1,scaleY:1,x:24,y:52.2}},{t:this.shape_17,p:{scaleX:1,scaleY:1,x:24.15,y:52.2}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:25.1,y:52.025}},{t:this.shape_15,p:{scaleX:1,scaleY:1,x:25.1,y:52.025}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:25.125,y:52.575}},{t:this.shape_13,p:{scaleX:1,scaleY:1,x:25.125,y:52.85}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:24.2,y:53.325}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:24.025,y:53.325}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:23.4,y:53}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:23.4,y:52.975}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:58.2375,y:118.4125}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:58.2375,y:118.4125}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:58.1375,y:118.4125}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:59.425,y:121.3}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:58.625,y:121.3583}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:57.95,y:121.25}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:57.5,y:121.225}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:56.9,y:121.35}},{t:this.shape,p:{scaleX:1,scaleY:1,x:56.15,y:121.3}}]}).to({state:[{t:this.shape_182,p:{scaleX:0.7997,scaleY:0.7997,x:51.2855,y:65.3018}},{t:this.shape_181,p:{scaleX:0.7996,scaleY:0.7996,x:52.2043,y:50.9989}},{t:this.shape_180,p:{scaleX:0.7997,scaleY:0.7997,x:42.133,y:47.6209}},{t:this.shape_179,p:{scaleX:0.7997,scaleY:0.7997,x:43.9661,y:53.0986}},{t:this.shape_178,p:{scaleX:0.7997,scaleY:0.7997,x:44.2233,y:53.6144}},{t:this.shape_177,p:{scaleX:0.7996,scaleY:0.7996,x:51.9852,y:37.3202}},{t:this.shape_176,p:{scaleX:0.7996,scaleY:0.7996,x:51.9852,y:37.3202}},{t:this.shape_175,p:{scaleX:0.7996,scaleY:0.7996,x:52.1906,y:38.4182}},{t:this.shape_174,p:{scaleX:0.7996,scaleY:0.7996,x:53.9589,y:40.3184}},{t:this.shape_173,p:{scaleX:0.7996,scaleY:0.7996,x:54.2785,y:43.8155}},{t:this.shape_172,p:{scaleX:0.7997,scaleY:0.7997,x:57.9176,y:36.6855}},{t:this.shape_171,p:{scaleX:0.7997,scaleY:0.7997,x:42.648,y:43.2638}},{t:this.shape_170,p:{scaleX:0.7997,scaleY:0.7997,x:59.4259,y:39.0045}},{t:this.shape_169,p:{scaleX:0.7997,scaleY:0.7997,x:58.3775,y:33.9466}},{t:this.shape_168,p:{scaleX:0.7997,scaleY:0.7997,x:17.8798,y:230.1469}},{t:this.shape_167,p:{scaleX:0.7997,scaleY:0.7997,x:59.347,y:225.3369}},{t:this.shape_166,p:{scaleX:0.7997,scaleY:0.7997,x:40.8082,y:173.8042}},{t:this.shape_165,p:{scaleX:0.7997,scaleY:0.7997,x:62.4803,y:129.9006}},{t:this.shape_164,p:{scaleX:0.7997,scaleY:0.7997,x:55.6935,y:131.446}},{t:this.shape_163,p:{scaleX:0.7997,scaleY:0.7997,x:46.3424,y:132.4845}},{t:this.shape_162,p:{scaleX:0.7997,scaleY:0.7997,x:42.6006,y:133.7001}},{t:this.shape_161,p:{scaleX:0.7997,scaleY:0.7997,x:41.3145,y:157.915}},{t:this.shape_160,p:{scaleX:0.7997,scaleY:0.7997,x:33.2285,y:178.9762}},{t:this.shape_159,p:{scaleX:0.7997,scaleY:0.7997,x:63.0854,y:133.1713}},{t:this.shape_158,p:{scaleX:0.7997,scaleY:0.7997,x:64.8204,y:135.3194}},{t:this.shape_157,p:{scaleX:0.7997,scaleY:0.7997,x:62.8755,y:155.1861}},{t:this.shape_156,p:{scaleX:0.7997,scaleY:0.7997,x:59.207,y:175.4843}},{t:this.shape_155,p:{scaleX:0.7997,scaleY:0.7997,x:30.6889,y:181.6979}},{t:this.shape_154,p:{scaleX:0.7996,scaleY:0.7996,x:51.5956,y:121.7405}},{t:this.shape_153,p:{scaleX:0.7997,scaleY:0.7997,x:56.5507,y:122.5342}},{t:this.shape_152,p:{scaleX:0.7997,scaleY:0.7997,x:66.1502,y:122.0328}},{t:this.shape_151,p:{scaleX:0.7997,scaleY:0.7997,x:44.4033,y:122.8439}},{t:this.shape_150,p:{scaleX:0.7997,scaleY:0.7997,x:66.1542,y:121.8272}},{t:this.shape_149,p:{scaleX:0.7997,scaleY:0.7997,x:44.6032,y:122.5041}},{t:this.shape_148,p:{scaleX:0.7997,scaleY:0.7997,x:58.9962,y:123.3278}},{t:this.shape_147,p:{scaleX:0.7997,scaleY:0.7997,x:55.4842,y:124.7774}},{t:this.shape_146,p:{scaleX:0.7997,scaleY:0.7997,x:62.3011,y:124.4325}},{t:this.shape_145,p:{scaleX:0.7997,scaleY:0.7997,x:48.2456,y:125.0839}},{t:this.shape_144,p:{scaleX:0.7997,scaleY:0.7997,x:41.4178,y:124.4275}},{t:this.shape_143,p:{scaleX:0.7997,scaleY:0.7997,x:54.1534,y:91.0628}},{t:this.shape_142,p:{scaleX:0.7997,scaleY:0.7997,x:57.9176,y:93.6337}},{t:this.shape_141,p:{scaleX:0.7997,scaleY:0.7997,x:30.2148,y:135.0441}},{t:this.shape_140,p:{scaleX:0.7997,scaleY:0.7997,x:37.1462,y:124.1406}},{t:this.shape_139,p:{scaleX:0.7997,scaleY:0.7997,x:37.1462,y:124.1406}},{t:this.shape_138,p:{scaleX:0.7998,scaleY:0.7998,x:59.2901,y:36.3938}},{t:this.shape_137,p:{scaleX:0.7998,scaleY:0.7998,x:58.5103,y:36.5338}},{t:this.shape_136,p:{scaleX:0.7998,scaleY:0.7998,x:57.9104,y:36.3538}},{t:this.shape_135,p:{scaleX:0.7998,scaleY:0.7998,x:57.4506,y:36.3738}},{t:this.shape_134,p:{scaleX:0.7998,scaleY:0.7998,x:56.8907,y:36.5338}},{t:this.shape_133,p:{scaleX:0.7998,scaleY:0.7998,x:56.2509,y:36.5338}},{t:this.shape_132,p:{scaleX:0.7997,scaleY:0.7997,x:60.5317,y:51.4122}},{t:this.shape_131,p:{scaleX:0.7997,scaleY:0.7997,x:60.5537,y:51.4142}},{t:this.shape_130,p:{scaleX:0.7997,scaleY:0.7997,x:51.0704,y:51.3741}},{t:this.shape_129,p:{scaleX:0.7997,scaleY:0.7997,x:51.0243,y:51.3772}},{t:this.shape_128,p:{scaleX:0.7998,scaleY:0.7998,x:27.4979,y:81.1886}},{t:this.shape_127,p:{scaleX:0.7998,scaleY:0.7998,x:27.4801,y:81.2086}},{t:this.shape_126,p:{scaleX:0.7998,scaleY:0.7998,x:27.5251,y:81.2189}},{t:this.shape_125,p:{scaleX:0.7998,scaleY:0.7998,x:27.5201,y:81.2389}},{t:this.shape_124,p:{scaleX:0.7997,scaleY:0.7997,x:26.9372,y:78.5681}},{t:this.shape_123,p:{scaleX:0.7997,scaleY:0.7997,x:26.8005,y:78.4081}},{t:this.shape_122,p:{scaleX:0.7997,scaleY:0.7997,x:29.5295,y:85.3252}},{t:this.shape_121,p:{scaleX:0.7997,scaleY:0.7997,x:29.3595,y:85.1852}},{t:this.shape_120,p:{scaleX:0.7996,scaleY:0.7996,x:28.6542,y:85.5073}},{t:this.shape_119,p:{scaleX:0.7996,scaleY:0.7996,x:27.7346,y:85.5033}},{t:this.shape_118,p:{scaleX:0.7996,scaleY:0.7996,x:30.3733,y:84.9636}},{t:this.shape_117,p:{scaleX:0.7997,scaleY:0.7997,x:30.2492,y:84.8255}},{t:this.shape_116,p:{scaleX:0.7996,scaleY:0.7996,x:31.093,y:84.4239}},{t:this.shape_115,p:{scaleX:0.7997,scaleY:0.7997,x:30.9689,y:84.2657}},{t:this.shape_114,p:{scaleX:0.7997,scaleY:0.7997,x:25.9709,y:79.0039}},{t:this.shape_113,p:{scaleX:0.7997,scaleY:0.7997,x:25.0913,y:79.3937}},{t:this.shape_112,p:{scaleX:0.7997,scaleY:0.7997,x:24.1857,y:79.7676}},{t:this.shape_111,p:{scaleX:0.7997,scaleY:0.7997,x:24.0417,y:79.6076}},{t:this.shape_110,p:{scaleX:0.7997,scaleY:0.7997,x:24.5515,y:80.7072}},{t:this.shape_109,p:{scaleX:0.7996,scaleY:0.7996,x:25.0759,y:81.8112}},{t:this.shape_108,p:{scaleX:0.7996,scaleY:0.7996,x:25.4657,y:82.7447}},{t:this.shape_107,p:{scaleX:0.7996,scaleY:0.7996,x:25.8955,y:83.6642}},{t:this.shape_106,p:{scaleX:0.7997,scaleY:0.7997,x:25.761,y:83.506}},{t:this.shape_105,p:{scaleX:0.7996,scaleY:0.7996,x:26.3353,y:84.5838}},{t:this.shape_104,p:{scaleX:0.7996,scaleY:0.7996,x:26.925,y:85.3294}},{t:this.shape_103,p:{scaleX:0.7996,scaleY:0.7996,x:30.3733,y:78.9905}},{t:this.shape_102,p:{scaleX:0.7996,scaleY:0.7996,x:30.7331,y:79.9861}},{t:this.shape_101,p:{scaleX:0.7996,scaleY:0.7996,x:31.053,y:80.9256}},{t:this.shape_100,p:{scaleX:0.7996,scaleY:0.7996,x:31.3395,y:81.8758}},{t:this.shape_99,p:{scaleX:0.7996,scaleY:0.7996,x:31.6127,y:82.8646}},{t:this.shape_98,p:{scaleX:0.7997,scaleY:0.7997,x:31.5086,y:82.7063}},{t:this.shape_97,p:{scaleX:0.7996,scaleY:0.7996,x:31.6687,y:83.7842}},{t:this.shape_96,p:{scaleX:0.7997,scaleY:0.7997,x:27.9701,y:78.3282}},{t:this.shape_95,p:{scaleX:0.7997,scaleY:0.7997,x:27.8101,y:78.1582}},{t:this.shape_94,p:{scaleX:0.7997,scaleY:0.7997,x:28.9857,y:78.1282}},{t:this.shape_93,p:{scaleX:0.7997,scaleY:0.7997,x:28.8397,y:77.9682}},{t:this.shape_92,p:{scaleX:0.7997,scaleY:0.7997,x:29.9133,y:77.9283}},{t:this.shape_91,p:{scaleX:0.7997,scaleY:0.7997,x:29.3695,y:84.9054}},{t:this.shape_90,p:{scaleX:0.7997,scaleY:0.7997,x:29.1938,y:84.7687}},{t:this.shape_89,p:{scaleX:0.7997,scaleY:0.7997,x:27.0771,y:78.9279}},{t:this.shape_88,p:{scaleX:0.7997,scaleY:0.7997,x:26.9338,y:78.7779}},{t:this.shape_87,p:{scaleX:0.7996,scaleY:0.7996,x:29.8136,y:78.4868}},{t:this.shape_86,p:{scaleX:0.7997,scaleY:0.7997,x:29.696,y:78.3424}},{t:this.shape_85,p:{scaleX:0.7996,scaleY:0.7996,x:24.7811,y:80.126}},{t:this.shape_84,p:{scaleX:0.7997,scaleY:0.7997,x:24.6615,y:79.9684}},{t:this.shape_83,p:{scaleX:0.7999,scaleY:0.7999,x:28.9268,y:82.1414}},{t:this.shape_82,p:{scaleX:0.7999,scaleY:0.7999,x:28.5369,y:82.3613}},{t:this.shape_81,p:{scaleX:0.7999,scaleY:0.7999,x:28.207,y:82.4013}},{t:this.shape_80,p:{scaleX:0.7999,scaleY:0.7999,x:27.967,y:82.5013}},{t:this.shape_79,p:{scaleX:0.7999,scaleY:0.7999,x:27.6671,y:82.6413}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:27.2871,y:82.7613}},{t:this.shape_77,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:79.9004}},{t:this.shape_76,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:79.9004}},{t:this.shape_75,p:{scaleX:0.7999,scaleY:0.7999,x:69.4992,y:79.9218}},{t:this.shape_74,p:{scaleX:0.7999,scaleY:0.7999,x:68.1595,y:80.1418}},{t:this.shape_73,p:{scaleX:0.7999,scaleY:0.7999,x:67.0997,y:79.9818}},{t:this.shape_72,p:{scaleX:0.7999,scaleY:0.7999,x:66.3398,y:79.9818}},{t:this.shape_71,p:{scaleX:0.7999,scaleY:0.7999,x:65.3,y:80.2017}},{t:this.shape_70,p:{scaleX:0.7999,scaleY:0.7999,x:64.0203,y:80.2217}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:36.1152,y:67.0821}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:35.9952,y:66.6621}},{t:this.shape_67,p:{scaleX:0.7999,scaleY:0.7999,x:36.0952,y:66.6621}},{t:this.shape_66,p:{scaleX:0.7999,scaleY:0.7999,x:36.8551,y:66.5421}},{t:this.shape_65,p:{scaleX:0.7999,scaleY:0.7999,x:36.8551,y:66.5421}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:36.8751,y:66.9821}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:36.8751,y:67.2021}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:36.1352,y:67.582}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:35.9952,y:67.582}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:35.4953,y:67.322}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:35.4953,y:67.2821}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:63.7916,y:66.6021}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:63.6516,y:66.1822}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:63.9716,y:66.1822}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:64.5515,y:66.5221}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:64.5515,y:66.7221}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:64.1316,y:67.0421}},{t:this.shape_52,p:{scaleX:0.7999,scaleY:0.7999,x:64.0916,y:67.0421}},{t:this.shape_51,p:{scaleX:0.7999,scaleY:0.7999,x:63.1717,y:66.8421}},{t:this.shape_50,p:{scaleX:0.7999,scaleY:0.7999,x:63.1717,y:66.8221}},{t:this.shape_49,p:{scaleX:0.7999,scaleY:0.7999,x:62.9917,y:66.3222}},{t:this.shape_48,p:{scaleX:0.7999,scaleY:0.7999,x:62.9917,y:66.3222}},{t:this.shape_47,p:{scaleX:0.7999,scaleY:0.7999,x:67.3112,y:67.2621}},{t:this.shape_46,p:{scaleX:0.7999,scaleY:0.7999,x:67.2112,y:66.9221}},{t:this.shape_45,p:{scaleX:0.7999,scaleY:0.7999,x:67.4512,y:66.9221}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:67.8711,y:67.342}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:67.5711,y:67.582}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:67.5311,y:67.582}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:66.8312,y:67.422}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:66.8312,y:67.422}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:67.0221}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:67.0221}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:70.1908,y:67.662}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:70.1508,y:67.482}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:70.2708,y:67.482}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:70.4908,y:67.702}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:70.3108,y:67.822}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:69.9508,y:67.742}},{t:this.shape_31,p:{scaleX:0.7999,scaleY:0.7999,x:69.9508,y:67.742}},{t:this.shape_30,p:{scaleX:0.7999,scaleY:0.7999,x:32.7957,y:67.882}},{t:this.shape_29,p:{scaleX:0.7999,scaleY:0.7999,x:32.6757,y:67.482}},{t:this.shape_28,p:{scaleX:0.7999,scaleY:0.7999,x:32.7757,y:67.482}},{t:this.shape_27,p:{scaleX:0.7999,scaleY:0.7999,x:33.5356,y:67.342}},{t:this.shape_26,p:{scaleX:0.7999,scaleY:0.7999,x:33.5356,y:67.342}},{t:this.shape_25,p:{scaleX:0.7999,scaleY:0.7999,x:33.5556,y:67.782}},{t:this.shape_24,p:{scaleX:0.7999,scaleY:0.7999,x:33.5556,y:68.002}},{t:this.shape_23,p:{scaleX:0.7999,scaleY:0.7999,x:32.8156,y:68.3819}},{t:this.shape_22,p:{scaleX:0.7999,scaleY:0.7999,x:32.6757,y:68.3819}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:32.1757,y:68.1219}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:32.1757,y:68.1019}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:29.1961,y:68.8418}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:29.0561,y:68.4419}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:29.1761,y:68.4419}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:29.936,y:68.3019}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:29.936,y:68.3019}},{t:this.shape_14,p:{scaleX:0.7999,scaleY:0.7999,x:29.956,y:68.7419}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:29.956,y:68.9618}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:29.2161,y:69.3418}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:29.0761,y:69.3418}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:28.5762,y:69.0818}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:28.5762,y:69.0618}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:56.4426,y:121.405}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:56.4426,y:121.405}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:56.3626,y:121.405}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:57.3925,y:123.7147}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:56.7525,y:123.7614}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:56.2126,y:123.6747}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:55.8527,y:123.6547}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:55.3727,y:123.7547}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:54.7728,y:123.7147}}]},1).to({state:[{t:this.shape_182,p:{scaleX:0.7997,scaleY:0.7997,x:51.2855,y:65.3018}},{t:this.shape_181,p:{scaleX:0.7996,scaleY:0.7996,x:52.2043,y:50.9989}},{t:this.shape_180,p:{scaleX:0.7997,scaleY:0.7997,x:42.133,y:47.6209}},{t:this.shape_179,p:{scaleX:0.7997,scaleY:0.7997,x:43.9661,y:53.0986}},{t:this.shape_178,p:{scaleX:0.7997,scaleY:0.7997,x:44.2233,y:53.6144}},{t:this.shape_177,p:{scaleX:0.7996,scaleY:0.7996,x:51.9852,y:37.3202}},{t:this.shape_176,p:{scaleX:0.7996,scaleY:0.7996,x:51.9852,y:37.3202}},{t:this.shape_175,p:{scaleX:0.7996,scaleY:0.7996,x:52.1906,y:38.4182}},{t:this.shape_174,p:{scaleX:0.7996,scaleY:0.7996,x:53.9589,y:40.3184}},{t:this.shape_173,p:{scaleX:0.7996,scaleY:0.7996,x:54.2785,y:43.8155}},{t:this.shape_172,p:{scaleX:0.7997,scaleY:0.7997,x:57.9176,y:36.6855}},{t:this.shape_171,p:{scaleX:0.7997,scaleY:0.7997,x:42.648,y:43.2638}},{t:this.shape_170,p:{scaleX:0.7997,scaleY:0.7997,x:59.4259,y:39.0045}},{t:this.shape_169,p:{scaleX:0.7997,scaleY:0.7997,x:58.3775,y:33.9466}},{t:this.shape_168,p:{scaleX:0.7997,scaleY:0.7997,x:17.8798,y:230.1469}},{t:this.shape_167,p:{scaleX:0.7997,scaleY:0.7997,x:59.347,y:225.3369}},{t:this.shape_166,p:{scaleX:0.7997,scaleY:0.7997,x:40.8082,y:173.8042}},{t:this.shape_165,p:{scaleX:0.7997,scaleY:0.7997,x:62.4803,y:129.9006}},{t:this.shape_164,p:{scaleX:0.7997,scaleY:0.7997,x:55.6935,y:131.446}},{t:this.shape_163,p:{scaleX:0.7997,scaleY:0.7997,x:46.3424,y:132.4845}},{t:this.shape_162,p:{scaleX:0.7997,scaleY:0.7997,x:42.6006,y:133.7001}},{t:this.shape_161,p:{scaleX:0.7997,scaleY:0.7997,x:41.3145,y:157.915}},{t:this.shape_160,p:{scaleX:0.7997,scaleY:0.7997,x:33.2285,y:178.9762}},{t:this.shape_159,p:{scaleX:0.7997,scaleY:0.7997,x:63.0854,y:133.1713}},{t:this.shape_158,p:{scaleX:0.7997,scaleY:0.7997,x:64.8204,y:135.3194}},{t:this.shape_157,p:{scaleX:0.7997,scaleY:0.7997,x:62.8755,y:155.1861}},{t:this.shape_156,p:{scaleX:0.7997,scaleY:0.7997,x:59.207,y:175.4843}},{t:this.shape_155,p:{scaleX:0.7997,scaleY:0.7997,x:30.6889,y:181.6979}},{t:this.shape_154,p:{scaleX:0.7996,scaleY:0.7996,x:51.5956,y:121.7405}},{t:this.shape_153,p:{scaleX:0.7997,scaleY:0.7997,x:56.5507,y:122.5342}},{t:this.shape_152,p:{scaleX:0.7997,scaleY:0.7997,x:66.1502,y:122.0328}},{t:this.shape_151,p:{scaleX:0.7997,scaleY:0.7997,x:44.4033,y:122.8439}},{t:this.shape_150,p:{scaleX:0.7997,scaleY:0.7997,x:66.1542,y:121.8272}},{t:this.shape_149,p:{scaleX:0.7997,scaleY:0.7997,x:44.6032,y:122.5041}},{t:this.shape_148,p:{scaleX:0.7997,scaleY:0.7997,x:58.9962,y:123.3278}},{t:this.shape_147,p:{scaleX:0.7997,scaleY:0.7997,x:55.4842,y:124.7774}},{t:this.shape_146,p:{scaleX:0.7997,scaleY:0.7997,x:62.3011,y:124.4325}},{t:this.shape_145,p:{scaleX:0.7997,scaleY:0.7997,x:48.2456,y:125.0839}},{t:this.shape_144,p:{scaleX:0.7997,scaleY:0.7997,x:41.4178,y:124.4275}},{t:this.shape_143,p:{scaleX:0.7997,scaleY:0.7997,x:54.1534,y:91.0628}},{t:this.shape_142,p:{scaleX:0.7997,scaleY:0.7997,x:57.9176,y:93.6337}},{t:this.shape_141,p:{scaleX:0.7997,scaleY:0.7997,x:30.2148,y:135.0441}},{t:this.shape_140,p:{scaleX:0.7997,scaleY:0.7997,x:37.1462,y:124.1406}},{t:this.shape_139,p:{scaleX:0.7997,scaleY:0.7997,x:37.1462,y:124.1406}},{t:this.shape_138,p:{scaleX:0.7998,scaleY:0.7998,x:59.2901,y:36.3938}},{t:this.shape_137,p:{scaleX:0.7998,scaleY:0.7998,x:58.5103,y:36.5338}},{t:this.shape_136,p:{scaleX:0.7998,scaleY:0.7998,x:57.9104,y:36.3538}},{t:this.shape_135,p:{scaleX:0.7998,scaleY:0.7998,x:57.4506,y:36.3738}},{t:this.shape_134,p:{scaleX:0.7998,scaleY:0.7998,x:56.8907,y:36.5338}},{t:this.shape_133,p:{scaleX:0.7998,scaleY:0.7998,x:56.2509,y:36.5338}},{t:this.shape_132,p:{scaleX:0.7997,scaleY:0.7997,x:60.5317,y:51.4122}},{t:this.shape_131,p:{scaleX:0.7997,scaleY:0.7997,x:60.5537,y:51.4142}},{t:this.shape_130,p:{scaleX:0.7997,scaleY:0.7997,x:51.0704,y:51.3741}},{t:this.shape_129,p:{scaleX:0.7997,scaleY:0.7997,x:51.0243,y:51.3772}},{t:this.shape_128,p:{scaleX:0.7998,scaleY:0.7998,x:27.4979,y:81.1886}},{t:this.shape_127,p:{scaleX:0.7998,scaleY:0.7998,x:27.4801,y:81.2086}},{t:this.shape_126,p:{scaleX:0.7998,scaleY:0.7998,x:27.5251,y:81.2189}},{t:this.shape_125,p:{scaleX:0.7998,scaleY:0.7998,x:27.5201,y:81.2389}},{t:this.shape_124,p:{scaleX:0.7997,scaleY:0.7997,x:26.9372,y:78.5681}},{t:this.shape_123,p:{scaleX:0.7997,scaleY:0.7997,x:26.8005,y:78.4081}},{t:this.shape_122,p:{scaleX:0.7997,scaleY:0.7997,x:29.5295,y:85.3252}},{t:this.shape_121,p:{scaleX:0.7997,scaleY:0.7997,x:29.3595,y:85.1852}},{t:this.shape_120,p:{scaleX:0.7996,scaleY:0.7996,x:28.6542,y:85.5073}},{t:this.shape_119,p:{scaleX:0.7996,scaleY:0.7996,x:27.7346,y:85.5033}},{t:this.shape_118,p:{scaleX:0.7996,scaleY:0.7996,x:30.3733,y:84.9636}},{t:this.shape_117,p:{scaleX:0.7997,scaleY:0.7997,x:30.2492,y:84.8255}},{t:this.shape_116,p:{scaleX:0.7996,scaleY:0.7996,x:31.093,y:84.4239}},{t:this.shape_115,p:{scaleX:0.7997,scaleY:0.7997,x:30.9689,y:84.2657}},{t:this.shape_114,p:{scaleX:0.7997,scaleY:0.7997,x:25.9709,y:79.0039}},{t:this.shape_113,p:{scaleX:0.7997,scaleY:0.7997,x:25.0913,y:79.3937}},{t:this.shape_112,p:{scaleX:0.7997,scaleY:0.7997,x:24.1857,y:79.7676}},{t:this.shape_111,p:{scaleX:0.7997,scaleY:0.7997,x:24.0417,y:79.6076}},{t:this.shape_110,p:{scaleX:0.7997,scaleY:0.7997,x:24.5515,y:80.7072}},{t:this.shape_109,p:{scaleX:0.7996,scaleY:0.7996,x:25.0759,y:81.8112}},{t:this.shape_108,p:{scaleX:0.7996,scaleY:0.7996,x:25.4657,y:82.7447}},{t:this.shape_107,p:{scaleX:0.7996,scaleY:0.7996,x:25.8955,y:83.6642}},{t:this.shape_106,p:{scaleX:0.7997,scaleY:0.7997,x:25.761,y:83.506}},{t:this.shape_105,p:{scaleX:0.7996,scaleY:0.7996,x:26.3353,y:84.5838}},{t:this.shape_104,p:{scaleX:0.7996,scaleY:0.7996,x:26.925,y:85.3294}},{t:this.shape_103,p:{scaleX:0.7996,scaleY:0.7996,x:30.3733,y:78.9905}},{t:this.shape_102,p:{scaleX:0.7996,scaleY:0.7996,x:30.7331,y:79.9861}},{t:this.shape_101,p:{scaleX:0.7996,scaleY:0.7996,x:31.053,y:80.9256}},{t:this.shape_100,p:{scaleX:0.7996,scaleY:0.7996,x:31.3395,y:81.8758}},{t:this.shape_99,p:{scaleX:0.7996,scaleY:0.7996,x:31.6127,y:82.8646}},{t:this.shape_98,p:{scaleX:0.7997,scaleY:0.7997,x:31.5086,y:82.7063}},{t:this.shape_97,p:{scaleX:0.7996,scaleY:0.7996,x:31.6687,y:83.7842}},{t:this.shape_96,p:{scaleX:0.7997,scaleY:0.7997,x:27.9701,y:78.3282}},{t:this.shape_95,p:{scaleX:0.7997,scaleY:0.7997,x:27.8101,y:78.1582}},{t:this.shape_94,p:{scaleX:0.7997,scaleY:0.7997,x:28.9857,y:78.1282}},{t:this.shape_93,p:{scaleX:0.7997,scaleY:0.7997,x:28.8397,y:77.9682}},{t:this.shape_92,p:{scaleX:0.7997,scaleY:0.7997,x:29.9133,y:77.9283}},{t:this.shape_91,p:{scaleX:0.7997,scaleY:0.7997,x:29.3695,y:84.9054}},{t:this.shape_90,p:{scaleX:0.7997,scaleY:0.7997,x:29.1938,y:84.7687}},{t:this.shape_89,p:{scaleX:0.7997,scaleY:0.7997,x:27.0771,y:78.9279}},{t:this.shape_88,p:{scaleX:0.7997,scaleY:0.7997,x:26.9338,y:78.7779}},{t:this.shape_87,p:{scaleX:0.7996,scaleY:0.7996,x:29.8136,y:78.4868}},{t:this.shape_86,p:{scaleX:0.7997,scaleY:0.7997,x:29.696,y:78.3424}},{t:this.shape_85,p:{scaleX:0.7996,scaleY:0.7996,x:24.7811,y:80.126}},{t:this.shape_84,p:{scaleX:0.7997,scaleY:0.7997,x:24.6615,y:79.9684}},{t:this.shape_83,p:{scaleX:0.7999,scaleY:0.7999,x:28.9268,y:82.1414}},{t:this.shape_82,p:{scaleX:0.7999,scaleY:0.7999,x:28.5369,y:82.3613}},{t:this.shape_81,p:{scaleX:0.7999,scaleY:0.7999,x:28.207,y:82.4013}},{t:this.shape_80,p:{scaleX:0.7999,scaleY:0.7999,x:27.967,y:82.5013}},{t:this.shape_79,p:{scaleX:0.7999,scaleY:0.7999,x:27.6671,y:82.6413}},{t:this.shape_78,p:{scaleX:0.7999,scaleY:0.7999,x:27.2871,y:82.7613}},{t:this.shape_77,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:79.9004}},{t:this.shape_76,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:79.9004}},{t:this.shape_75,p:{scaleX:0.7999,scaleY:0.7999,x:69.4992,y:79.9218}},{t:this.shape_74,p:{scaleX:0.7999,scaleY:0.7999,x:68.1595,y:80.1418}},{t:this.shape_73,p:{scaleX:0.7999,scaleY:0.7999,x:67.0997,y:79.9818}},{t:this.shape_72,p:{scaleX:0.7999,scaleY:0.7999,x:66.3398,y:79.9818}},{t:this.shape_71,p:{scaleX:0.7999,scaleY:0.7999,x:65.3,y:80.2017}},{t:this.shape_70,p:{scaleX:0.7999,scaleY:0.7999,x:64.0203,y:80.2217}},{t:this.shape_69,p:{scaleX:0.7999,scaleY:0.7999,x:36.1152,y:67.0821}},{t:this.shape_68,p:{scaleX:0.7999,scaleY:0.7999,x:35.9952,y:66.6621}},{t:this.shape_67,p:{scaleX:0.7999,scaleY:0.7999,x:36.0952,y:66.6621}},{t:this.shape_66,p:{scaleX:0.7999,scaleY:0.7999,x:36.8551,y:66.5421}},{t:this.shape_65,p:{scaleX:0.7999,scaleY:0.7999,x:36.8551,y:66.5421}},{t:this.shape_64,p:{scaleX:0.7999,scaleY:0.7999,x:36.8751,y:66.9821}},{t:this.shape_63,p:{scaleX:0.7999,scaleY:0.7999,x:36.8751,y:67.2021}},{t:this.shape_62,p:{scaleX:0.7999,scaleY:0.7999,x:36.1352,y:67.582}},{t:this.shape_61,p:{scaleX:0.7999,scaleY:0.7999,x:35.9952,y:67.582}},{t:this.shape_60,p:{scaleX:0.7999,scaleY:0.7999,x:35.4953,y:67.322}},{t:this.shape_59,p:{scaleX:0.7999,scaleY:0.7999,x:35.4953,y:67.2821}},{t:this.shape_58,p:{scaleX:0.7999,scaleY:0.7999,x:63.7916,y:66.6021}},{t:this.shape_57,p:{scaleX:0.7999,scaleY:0.7999,x:63.6516,y:66.1822}},{t:this.shape_56,p:{scaleX:0.7999,scaleY:0.7999,x:63.9716,y:66.1822}},{t:this.shape_55,p:{scaleX:0.7999,scaleY:0.7999,x:64.5515,y:66.5221}},{t:this.shape_54,p:{scaleX:0.7999,scaleY:0.7999,x:64.5515,y:66.7221}},{t:this.shape_53,p:{scaleX:0.7999,scaleY:0.7999,x:64.1316,y:67.0421}},{t:this.shape_52,p:{scaleX:0.7999,scaleY:0.7999,x:64.0916,y:67.0421}},{t:this.shape_51,p:{scaleX:0.7999,scaleY:0.7999,x:63.1717,y:66.8421}},{t:this.shape_50,p:{scaleX:0.7999,scaleY:0.7999,x:63.1717,y:66.8221}},{t:this.shape_49,p:{scaleX:0.7999,scaleY:0.7999,x:62.9917,y:66.3222}},{t:this.shape_48,p:{scaleX:0.7999,scaleY:0.7999,x:62.9917,y:66.3222}},{t:this.shape_47,p:{scaleX:0.7999,scaleY:0.7999,x:67.3112,y:67.2621}},{t:this.shape_46,p:{scaleX:0.7999,scaleY:0.7999,x:67.2112,y:66.9221}},{t:this.shape_45,p:{scaleX:0.7999,scaleY:0.7999,x:67.4512,y:66.9221}},{t:this.shape_44,p:{scaleX:0.7999,scaleY:0.7999,x:67.8711,y:67.342}},{t:this.shape_43,p:{scaleX:0.7999,scaleY:0.7999,x:67.5711,y:67.582}},{t:this.shape_42,p:{scaleX:0.7999,scaleY:0.7999,x:67.5311,y:67.582}},{t:this.shape_41,p:{scaleX:0.7999,scaleY:0.7999,x:66.8312,y:67.422}},{t:this.shape_40,p:{scaleX:0.7999,scaleY:0.7999,x:66.8312,y:67.422}},{t:this.shape_39,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:67.0221}},{t:this.shape_38,p:{scaleX:0.7999,scaleY:0.7999,x:66.6913,y:67.0221}},{t:this.shape_37,p:{scaleX:0.7999,scaleY:0.7999,x:70.1908,y:67.662}},{t:this.shape_36,p:{scaleX:0.7999,scaleY:0.7999,x:70.1508,y:67.482}},{t:this.shape_35,p:{scaleX:0.7999,scaleY:0.7999,x:70.2708,y:67.482}},{t:this.shape_34,p:{scaleX:0.7999,scaleY:0.7999,x:70.4908,y:67.702}},{t:this.shape_33,p:{scaleX:0.7999,scaleY:0.7999,x:70.3108,y:67.822}},{t:this.shape_32,p:{scaleX:0.7999,scaleY:0.7999,x:69.9508,y:67.742}},{t:this.shape_31,p:{scaleX:0.7999,scaleY:0.7999,x:69.9508,y:67.742}},{t:this.shape_30,p:{scaleX:0.7999,scaleY:0.7999,x:32.7957,y:67.882}},{t:this.shape_29,p:{scaleX:0.7999,scaleY:0.7999,x:32.6757,y:67.482}},{t:this.shape_28,p:{scaleX:0.7999,scaleY:0.7999,x:32.7757,y:67.482}},{t:this.shape_27,p:{scaleX:0.7999,scaleY:0.7999,x:33.5356,y:67.342}},{t:this.shape_26,p:{scaleX:0.7999,scaleY:0.7999,x:33.5356,y:67.342}},{t:this.shape_25,p:{scaleX:0.7999,scaleY:0.7999,x:33.5556,y:67.782}},{t:this.shape_24,p:{scaleX:0.7999,scaleY:0.7999,x:33.5556,y:68.002}},{t:this.shape_23,p:{scaleX:0.7999,scaleY:0.7999,x:32.8156,y:68.3819}},{t:this.shape_22,p:{scaleX:0.7999,scaleY:0.7999,x:32.6757,y:68.3819}},{t:this.shape_21,p:{scaleX:0.7999,scaleY:0.7999,x:32.1757,y:68.1219}},{t:this.shape_20,p:{scaleX:0.7999,scaleY:0.7999,x:32.1757,y:68.1019}},{t:this.shape_19,p:{scaleX:0.7999,scaleY:0.7999,x:29.1961,y:68.8418}},{t:this.shape_18,p:{scaleX:0.7999,scaleY:0.7999,x:29.0561,y:68.4419}},{t:this.shape_17,p:{scaleX:0.7999,scaleY:0.7999,x:29.1761,y:68.4419}},{t:this.shape_16,p:{scaleX:0.7999,scaleY:0.7999,x:29.936,y:68.3019}},{t:this.shape_15,p:{scaleX:0.7999,scaleY:0.7999,x:29.936,y:68.3019}},{t:this.shape_14,p:{scaleX:0.7999,scaleY:0.7999,x:29.956,y:68.7419}},{t:this.shape_13,p:{scaleX:0.7999,scaleY:0.7999,x:29.956,y:68.9618}},{t:this.shape_12,p:{scaleX:0.7999,scaleY:0.7999,x:29.2161,y:69.3418}},{t:this.shape_11,p:{scaleX:0.7999,scaleY:0.7999,x:29.0761,y:69.3418}},{t:this.shape_10,p:{scaleX:0.7999,scaleY:0.7999,x:28.5762,y:69.0818}},{t:this.shape_9,p:{scaleX:0.7999,scaleY:0.7999,x:28.5762,y:69.0618}},{t:this.shape_8,p:{scaleX:0.7999,scaleY:0.7999,x:56.4426,y:121.405}},{t:this.shape_7,p:{scaleX:0.7999,scaleY:0.7999,x:56.4426,y:121.405}},{t:this.shape_6,p:{scaleX:0.7999,scaleY:0.7999,x:56.3626,y:121.405}},{t:this.shape_5,p:{scaleX:0.7999,scaleY:0.7999,x:57.3925,y:123.7147}},{t:this.shape_4,p:{scaleX:0.7999,scaleY:0.7999,x:56.7525,y:123.7614}},{t:this.shape_3,p:{scaleX:0.7999,scaleY:0.7999,x:56.2126,y:123.6747}},{t:this.shape_2,p:{scaleX:0.7999,scaleY:0.7999,x:55.8527,y:123.6547}},{t:this.shape_1,p:{scaleX:0.7999,scaleY:0.7999,x:55.3727,y:123.7547}},{t:this.shape,p:{scaleX:0.7999,scaleY:0.7999,x:54.7728,y:123.7147}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96,264);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.c_mc1.b1.enabled=false;
		_root.c_mc2.b2.enabled=false;
		_root.c_mc3.b3.enabled=false;
		_root.c_mc4.b4.enabled=false;
		_root.c_mc5.b5.enabled=false;
		_root.c_mc6.b6.enabled=false;
		
		*/
	}
	this.frame_88 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(87).call(this.frame_88).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sound();
	this.instance.setTransform(9,9,0.0761,0.0761);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,9,63.5,63.5);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_3
	this.instance = new lib.Image_16();
	this.instance.setTransform(0,0,0.2347,0.2348);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,17.2,11.3), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVA4IAAhvICrAAIAABvg");
	mask.setTransform(8.575,5.625);

	// Layer_3
	this.instance = new lib.Image_17();
	this.instance.setTransform(0,0,0.2347,0.2348);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,17.2,11.3), null);


// stage content:
(lib.cprof1 = function(mode,startPosition,loop) {
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
		//var a=0;
		
		
		this.b1.addEventListener("click", fl_MouseClickHandler_1.bind(this));
		function fl_MouseClickHandler_1() {
			this.correct1.play();
		this.count=1;	
		
			// End your custom code
		}
		this.b2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		function fl_MouseClickHandler_2() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.correct1.play();2
			this.count=2;
			if ((this.count=1)&&(this.count=2))
			{
				this.cline1.play();
				var my1=createjs.Sound.createInstance("yes");
				this.my1;
			   my1.play();
			}
			
			// End your custom code
		}
		
		this.b3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		function fl_MouseClickHandler_3() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			this.count=3;
			//this.wrong2.play();
			var my3=createjs.Sound.createInstance("yes");
			
		this.my3;
		my3.play();
			// End your custom code
		}
		this.b4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		function fl_MouseClickHandler_4() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.correct1.play();
			this.count=4;
			if ((this.count=3) && (this.count=4))
			{
				this.cline2.play();
				var my1=createjs.Sound.createInstance("yes");
				this.my1;
			my1.play();
			}
			// End your custom code
		}
		this.b5.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.correct1.play();
			this.count=5;
			
			// End your custom code
		}
		this.b6.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		function fl_MouseClickHandler_6() {
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			//alert("Mouse clicked");
			//this.correct1.play();
			this.count=6;
			if ((this.count=5)&&(this.count=6))
			{
				this.cline3.play();
				var my1=createjs.Sound.createInstance("yes");
				this.my1;
			my1.play();
			}
			// End your custom code
		}
		
		
		
		this.mysou.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12() {
			
			
			var my12=createjs.Sound.createInstance("intro");
		this.my12;
		my12.play();
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.mysou = new lib.Symbol6();
	this.mysou.name = "mysou";
	this.mysou.setTransform(1258,15.65,1.821,2.2072);
	new cjs.ButtonHelper(this.mysou, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.mysou).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.cline2 = new lib.Symbol16();
	this.cline2.name = "cline2";
	this.cline2.setTransform(860.2,464.15,1,1,0,0,0,432.1,168.1);

	this.cline3 = new lib.Symbol15();
	this.cline3.name = "cline3";
	this.cline3.setTransform(794.2,736.2,1,1,0,0,0,378.1,148.1);

	this.cline1 = new lib.Symbol14();
	this.cline1.name = "cline1";
	this.cline1.setTransform(815.25,609.95,1,1,0,0,0,411.2,341.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cline1},{t:this.cline3},{t:this.cline2}]}).wait(1));

	// Layer_2
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAVQgLgJAAgMQAAgLALgJQAKgJAPAAQAPAAAKAIQAKAKAAALQAAAMgKAJQgLAJgOAAQgPAAgKgJg");
	this.shape_29.setTransform(589.35,181.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYAAgWIABgSIABgUIABgIIAAgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgBATIgCATQAAANgIAJQgKAIgNAAQgNAAgIgIQgJgJAAgNIgBgSIgBgUQAAgVACgmQADgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAcAAACAjIABACQAgggAjAAQApAAAQAjQAKAXAAAuIAAAQIAAANQAAARAFAbQAEAbAAARQAAANgIAIQgJAIgNAAQgbAAgDgbg");
	this.shape_30.setTransform(568.25,171.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhIBcQgggegBgzQgCgwAcglQAiguA6ABQAsgBAaAkQAXAfAAAvQAAAygbAlQgeAngzAAQgoAAgegcgAgfgkQgNAUAAAbQAAAbAPAOQALAKAQABQASgBAOgNQAQgPACgZQAChGgogBQgaAAgPAag");
	this.shape_31.setTransform(544.1212,171.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_32.setTransform(526.825,166.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag+BzQgggMAAgYQAAgWAaAAQAJAAAUAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA3AAQAXAAAKAGQAOAIAAAUQAAAogVAAQgWAAgEgSIgSgCQg0AAAAAPQAAAIAfAPQAsAUAOALQAhAWAAAdQAAAmgkATQgcAQgoAAQgdAAgZgJg");
	this.shape_33.setTransform(508.75,171.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag9BzQghgMgBgYQAAgWAaAAQALAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAcgJA3AAQAWAAAKAGQAOAIAAAUQABAogWAAQgVAAgFgSIgSgCQg0AAAAAPQAAAIAfAPQArAUAPALQAgAWABAdQgBAmgiATQgdAQgoAAQgdAAgYgJg");
	this.shape_34.setTransform(486.85,171.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_35.setTransform(463.275,171.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgpC5QgKgHAAgMIABgGQAFgfAAgcIAAhtIgOACIgNABQgNAAgJgIQgJgIAAgNQAAgUAWgHQAKgDAcAAIADgZQAGgxAVgYQAYgeA1AAQAoAAAAAdQAAAcglAAQgbAAgMATQgJAOgDAdIAAAHQAdgDANAAQApAAgBAcQAAAdgrgBQgOgBgcADQgBAWABAkIABA7QgBAogFAYQgFAXgXAAQgMAAgJgIg");
	this.shape_36.setTransform(439.35,166.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhIBcQgggegBgzQgCgwAcglQAiguA6ABQAsgBAaAkQAXAfAAAvQAAAygbAlQgeAngzAAQgoAAgegcgAgfgkQgNAUAAAbQAAAbAPAOQALAKAQABQASgBAOgNQAQgPACgZQAChGgogBQgaAAgPAag");
	this.shape_37.setTransform(416.1212,171.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhWBzQgHgIAAgNIAAiPIAAgUIAAgUQABgMAHgJQAIgIANAAQAZAAAEAZQAmgdAvAAQAsAAAAA7IAAAOQgCAhgcAAQgcAAAAgcIgCgWQgvAIgWAqIAABuQAAAMgIAJQgJAIgNAAQgOAAgHgIg");
	this.shape_38.setTransform(394.2,171.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhbCxQgIgJAAgNIAAhSIAAhVQgBgwgCgjIgEgrQABgSAHgNQAKgOAQAAQANgBAHAJQAJAIAAAMIAAACQAOgJAPgDQAOgEAPgBQAzABAXArQASAfAAA0QgBAvgbAgQgeAigxAAQgSAAgVgFIAABaQAAANgIAJQgJAHgOABQgNgBgIgHgAgMhoQgPAGgOANQADAtAAAtQAUAHASgBQAWAAANgOQALgPgBgZQABgegDgLQgGgagWAAQgOgBgNAHgAhqiKIAAABIAAgBg");
	this.shape_39.setTransform(371.3,176.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhWByQgIgHAAgNIAAiOIABgVIABgVQgBgMAIgIQAHgIAOAAQAZAAAEAZQAmgdAvAAQAtAAgBA6IAAAPQgCAigdAAQgbAAAAgdIgBgWQgxAIgVArIAABtQAAAMgJAJQgIAIgNAAQgOAAgHgJg");
	this.shape_40.setTransform(1228.9,100.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_41.setTransform(1211.925,94.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_42.setTransform(1192.175,100.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_43.setTransform(1167.325,94.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_44.setTransform(1143.375,96.45);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_45.setTransform(1100.625,94.175);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_46.setTransform(1076.675,96.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_47.setTransform(1060.275,94.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAIBGQgGgVgHg2IgGAMIgiBVQgDAJgGAGQgKAOgSABQgKAAgMgTQgMgTgHgeQgHgbgOhaQgDgUAAgLQAAgMAJgIQAJgIANAAQAXAAAGAXQADAMACASIADAfIAJA3QAQgsAVhCQAJgdAYAAQAYAAAIAgQAGAXAGAjIALA9IAiiEQAFgTAXAAQAMAAAKAIQAJAIAAAMIgBAHQgXBWgXBFQgHAUgPAVQgKAOgSAAQgcAAgPg1g");
	this.shape_48.setTransform(1038.225,100.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag9BzQgigMAAgYQAAgWAbAAQAKAAATAGQATAGAKAAQAsAAAAgSQAAgLgfgNQgsgUgNgIQgfgWAAgfQAAgsAvgQQAbgJA4AAQAVAAALAGQAPAIAAAUQgBAogVAAQgWAAgEgSQgJgCgJAAQg0AAAAAPQAAAIAfAPQAsAUAPALQAfAWAAAdQAAAmgjATQgcAQgoAAQgeAAgXgJg");
	this.shape_49.setTransform(991.9,100.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhWByQgIgHAAgNIAAiOIABgVIAAgVQAAgMAIgIQAHgIAOAAQAZAAAEAZQAmgdAvAAQAtAAgBA6IAAAPQgCAigcAAQgcAAAAgdIgBgWQgwAIgWArIAABtQAAAMgIAJQgJAIgNAAQgOAAgHgJg");
	this.shape_50.setTransform(970.85,100.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_51.setTransform(946.725,100.125);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhbCwQgJgIABgNIAAhRIAAhXQgBgvgDgjIgCgrQAAgSAIgNQAJgPAQAAQAMAAAIAJQAJAIAAAMIAAACQAPgJAOgDQAOgFAPABQAyAAAYAqQASAhAAAzQAAAwgcAfQgdAigyAAQgSAAgVgEIAABZQAAANgJAIQgIAJgNgBQgNABgJgJgAgMhoQgOAGgPANQADAtAAAtQATAGATABQAXgBAMgPQAKgOABgZQgBgdgCgMQgGgagWgBQgOABgNAGgAhpiKIgBAAIABAAg");
	this.shape_52.setTransform(922.8,105.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgVCtQgIgJAAgNIAAkvQAAgMAJgJQAJgHAMAAQANAAAIAHQAIAJAAAMIAAEjQAAAqgeAAQgMAAgJgIg");
	this.shape_53.setTransform(904.075,93.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_54.setTransform(885.225,100.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_55.setTransform(860.375,94.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhACqQgKgIAAgNQAAgUAvhlQgYgug1hdIgLgRQgFgKgBgIQAAgMAKgJQAJgJANAAQAOAAAIAKQAfAqApBTIAdg+QAPghAPgZQAJgQARAAQAMAAAKAJQAKAIgBAMQAAAGgDAIIhMCcQgcA5gOAmIgPAoQgHAVgVAAQgMAAgJgIg");
	this.shape_56.setTransform(814.9,106.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_57.setTransform(792.075,96.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgbCgQgJgJAAgMIAAgpIgBgoQAAgTACgeQACgcAAgUQAAgNAJgIQAIgIAOAAQAMAAAIAIQAJAIAAANQAAAUgCAcQgDAeAAATIABAoIABApQAAAMgJAJQgIAIgMAAQgOAAgIgIgAgUhvQgKgKAAgNQAAgOAKgJQALgKANAAQAOAAAKAKQAKAJAAAOQAAANgKAKQgKAJgOAAQgNAAgLgJg");
	this.shape_58.setTransform(775.675,94.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAtBlIgGgtQgEgYAAgWIACgSIAAgUIABgIIAAgKQAAgSgJAAQgTAAgRAYQgSAYgKAkIgCAUIgBAUIgCATIgBATQAAANgIAJQgKAIgNAAQgNAAgJgIQgIgJAAgNIgBgSIgBgUQAAgVACgmQADgmAAgVIAAgUIgBgUQAAgMAJgJQAJgIANAAQAcAAACAjIABACQAgggAjAAQApAAAQAjQAKAXAAAuIAAAQIAAANQAAARAFAbQAFAbgBARQAAANgIAIQgJAIgNAAQgbAAgDgbg");
	this.shape_59.setTransform(757.35,99.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAsBtQgcAKgdAAQgfAAgVgNQgYgPgFgdQgJg2AAgrQAAgcAHglQAEgYAaAAQAMAAAJAIQAJAIAAAMQAAAKgDAUQgDAVAAAKQAAAfACAWQACAXAEAPIALAEIAKABQAXAAAegHIgBgmIAAgkQAAgtAEghQADgaAbAAQANAAAJAIQAJAIAAAMIgEBOIAAArIAAAtIABANIABAOQAAAMgJAIQgJAIgNAAQgSAAgJgQg");
	this.shape_60.setTransform(733.4763,100.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTCAQgIgJAAgNQAAgZgGgwQgFgwAAgZQAAgOgDgJQgZAPgaAjIgDAEIgBBFIgBARIAAAPQAAAMgKAHQgJAGgNAAQgSAAgHgQQgFgLAAgYIAAhRIAAggIgBggQAAgUAHgPQAIgVAQAAQAMABAKAJQAKAJAAAMIgCATQAhgnAdABQAiAAAPAZQANgLARgHQAQgFATAAQArgBAPAsQADAIAHAzQAGAiAKBTQAAANgJAJQgJAHgNABQgZAAgFgZQgEgXgEgpQgEgtgDgTQgGgngJAAQgFAAgSAKQgSAKgJAHQAAAaAGAtQAGAwAAAYQAAANgIAJQgJAHgNAAQgMAAgJgHg");
	this.shape_61.setTransform(704.9513,100.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTCAQgIgJAAgNQAAgZgGgwQgFgwAAgZQAAgOgDgJQgZAPgaAjIgDAEIgBBFIgBARIAAAPQAAAMgKAHQgJAGgNAAQgSAAgHgQQgFgLAAgYIAAhRIAAggIgBggQAAgUAHgPQAIgVAQAAQAMABAKAJQAKAJAAAMIgCATQAhgnAdABQAiAAAPAZQANgLARgHQAQgFATAAQArgBAPAsQADAIAHAzQAGAiAKBTQAAANgJAJQgJAHgNABQgZAAgFgZQgEgXgEgpQgEgtgDgTQgGgngJAAQgFAAgSAKQgSAKgJAHQAAAaAGAtQAGAwAAAYQAAANgIAJQgJAHgNAAQgMAAgJgHg");
	this.shape_62.setTransform(670.0013,100.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhIBdQgggfgBgzQgCgvAcgnQAigsA6gBQAsAAAaAkQAXAgAAAuQAAAygbAkQgeAogzABQgoAAgegcgAgfglQgNAVAAAbQAAAaAPAOQALALAQAAQASAAAOgNQAQgPACgaQAChFgoAAQgagBgPAZg");
	this.shape_63.setTransform(639.9712,100.35);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhEBgQgjgdAAgvQAAgrAfgvQAjg1AuAAQAXAAAeAMQAlAQAAATQAAALgHAJQgIAJgMAAQgKAAgNgLQgOgKgaAAQgQAAgUAhQgTAgAAAXQAAAXARANQAQAMAZAAQAOAAAWgLQAVgLAGAAQAMAAAIAJQAJAIAAALQAAARgmARQghAQgVAAQgwAAgggcg");
	this.shape_64.setTransform(616.475,100.125);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhLBfQgkgcAAgyQAAg3AdgmQAggrA2AAQAnAAAZAMQAhARAAAiQAAAYgbATQgMAIglAQIhJAhQAKALAPAGQAPAFASAAQAeAAAUgMQATgKALAAQAWAAAAAWQAAAZgkAQQgfANgjAAQgzAAgigZgAgdg0QgPAOgJAbIAygWQAcgNASgLQgPgJgYAAQgTAAgOAOg");
	this.shape_65.setTransform(572.925,100.125);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_66.setTransform(548.075,94.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_67.setTransform(524.125,96.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAzChQgFgSgEggQgEgfAAgUIAAgRIABgQIgBgTQgCgLgJAAQgYAAgTAVQgKALgSAgQAABPgIARQgIASgTAAQgMAAgKgJQgJgIAAgMQAAgEACgIQACgFABg2QgBgsABhmIABgHIABgjIgCgUQgCgNAAgHQAAgNAJgIQAJgIANAAQAVAAAIAYQAEANAAAbIgBAtIgCAqQAQgQATgHQARgIAVAAQAmAAAQAVQAMAQADAfIACA3IAFArQADAYAEASIABAJQAAAMgJAIQgJAIgNAAQgWAAgHgWg");
	this.shape_68.setTransform(481.375,94.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhEBgQgjgdAAgvQAAgrAfgvQAjg1AuAAQAXAAAeAMQAlAQAAATQAAALgHAJQgIAJgMAAQgKAAgNgLQgOgKgaAAQgQAAgUAhQgTAgAAAXQAAAXARANQAQAMAZAAQAOAAAWgLQAVgLAGAAQAMAAAIAJQAJAIAAALQAAARgmARQghAQgVAAQgwAAgggcg");
	this.shape_69.setTransform(456.025,100.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTCZQgKgIAAgMIABgYIAAgXQAAgbgDhWIgqgDQgbgEAAgZQAAgNAIgIQAIgJAOAAIAlADIgBgXIgBgWQAAgMAJgJQAJgHANgBQAfAAAAA3IAAASQANgCAJAAQAZAAAKAEQARAFAAAWQAAAMgIAJQgJAHgNABIgLAAIgLgBIgVACQAEBXAAAcIAAAKIABANQAAAzgggBQgLAAgJgHg");
	this.shape_70.setTransform(434.325,96.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AA1BlQgUAKgPAFQgQAFgKAAQg0AAgbgdQgbgcAAg4QAAg0AogmQAngmA1AAQAVAAAbAMQAiAOgBATQAAAIgEAGIgEAWIgBAeQAAApAGASIAKAXQAJASAAADQgBAMgIAHQgKAIgLAAQgKAAgWgUgAgegsQgXAYAAAdQAAAeAKAPQALAPAWAAQAMAAANgFQAMgEAKgJQgHg0AAgZIACgRIADgUIgIgDIgGgBQgdAAgWAXg");
	this.shape_71.setTransform(411.35,100.225);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AB3CQIgNg1QgKgogMhKIghBcIgNApQgIAYgJAPQgLAUgUABQgVAAgLgZIgNgpQgQg4gOg9IgcBqIgIAyQgJAfgYAAQgPAAgJgKQgIgJABgMQAAgkAOgzIAZhUIANhEQAKguAMgQQALgQARAAQAUABAKAUQAJATAJA7QAKA5AUBCQAXhBAWhOIAMgyQAMgfAZAAQAYgBALAlQAFAPAGAoQANBdATBCQAUBEgBAGQABANgKAJQgLAIgMgBQgXAAgMghg");
	this.shape_72.setTransform(379.15,95.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape_73.setTransform(283.4166,79.1272,0.64,0.64);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_74.setTransform(178.6558,109.0625,0.64,0.64);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_75.setTransform(178.6912,109.0449,0.64,0.64);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_76.setTransform(165.3121,110.7744,0.64,0.64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_77.setTransform(165.2993,110.7264,0.64,0.64);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_78.setTransform(161.579,101.6426,0.64,0.64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_79.setTransform(161.5686,101.6905,0.64,0.64);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_80.setTransform(160.3863,107.2709,0.64,0.64);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_81.setTransform(160.3264,107.1078,0.64,0.64);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_82.setTransform(165.5871,111.0464,0.64,0.64);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_83.setTransform(165.5713,110.9824,0.64,0.64);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_84.setTransform(161.8332,101.9146,0.64,0.64);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_85.setTransform(161.8267,101.9465,0.64,0.64);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_86.setTransform(160.6263,107.5436,0.64,0.64);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_87.setTransform(160.5943,107.3949,0.64,0.64);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_88.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_89.setTransform(161.3237,107.4945,0.64,0.64);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_90.setTransform(152.8439,93.9269,0.64,0.64);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_91.setTransform(142.5241,108.2465,0.64,0.64);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_92.setTransform(153.6438,121.5582,0.64,0.64);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_93.setTransform(146.492,113.1584,0.64,0.64);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_94.setTransform(145.788,103.1426,0.64,0.64);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_95.setTransform(152.7959,93.7509,0.64,0.64);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_96.setTransform(146.188,96.3908,0.64,0.64);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_97.setTransform(146.972,119.3822,0.64,0.64);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_98.setTransform(246.2816,101.9427,0.64,0.64);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_99.setTransform(280.4567,89.839,0.64,0.64);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_100.setTransform(279.0807,95.4842,0.64,0.64);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_101.setTransform(276.7448,95.1002,0.64,0.64);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_102.setTransform(279.6567,93.8149,0.64,0.64);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_103.setTransform(277.9128,93.0949,0.64,0.64);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_104.setTransform(273.1609,86.2311,0.64,0.64);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_105.setTransform(275.5186,85.3751,0.64,0.64);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_106.setTransform(277.8648,85.3875,0.64,0.64);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_107.setTransform(277.8968,87.191,0.64,0.64);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_108.setTransform(277.6568,87.175,0.64,0.64);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_109.setTransform(279.6727,86.791,0.64,0.64);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_110.setTransform(277.5128,86.4532,0.64,0.64);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_111.setTransform(274.2009,87.079,0.64,0.64);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_112.setTransform(273.7529,88.823,0.64,0.64);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_113.setTransform(272.2391,87.7586,0.64,0.64);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_114.setTransform(280.2967,85.7107,0.64,0.64);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_115.setTransform(281.5092,90.8709,0.64,0.64);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_116.setTransform(275.0688,97.5748,0.64,0.64);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_117.setTransform(274.7328,95.8019,0.64,0.64);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_118.setTransform(274.3115,92.9424,0.64,0.64);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_119.setTransform(279.0327,94.2869,0.64,0.64);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_120.setTransform(279.8487,87.399,0.64,0.64);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_121.setTransform(279.4967,87.287,0.64,0.64);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_122.setTransform(279.2087,87.335,0.64,0.64);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_123.setTransform(278.1208,87.335,0.64,0.64);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_124.setTransform(277.3848,87.335,0.64,0.64);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_125.setTransform(279.6087,89.207,0.64,0.64);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_126.setTransform(277.8248,89.335,0.64,0.64);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_127.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_128.setTransform(277.5604,89.1914,0.64,0.64);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_129.setTransform(277.7048,88.663,0.64,0.64);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_130.setTransform(277.7208,88.6775,0.64,0.64);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_131.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_132.setTransform(279.3687,89.0627,0.64,0.64);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_133.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_134.setTransform(279.5767,88.6486,0.64,0.64);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_135.setTransform(273.7849,90.7589,0.64,0.64);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_136.setTransform(275.4218,101.4147,0.64,0.64);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_137.setTransform(275.3368,99.6707,0.64,0.64);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_138.setTransform(276.1848,113.6665,0.64,0.64);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_139.setTransform(276.2141,111.0594,0.64,0.64);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_140.setTransform(276.0894,108.5634,0.64,0.64);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_141.setTransform(275.5475,105.9926,0.64,0.64);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_142.setTransform(275.4808,103.3677,0.64,0.64);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_143.setTransform(277.0452,98.7787,0.64,0.64);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_144.setTransform(277.0416,98.7427,0.64,0.64);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_145.setTransform(273.4675,98.0068,0.64,0.64);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_146.setTransform(271.65,107.4231,0.64,0.64);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_147.setTransform(198.4915,85.4649,0.64,0.64);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_148.setTransform(256.3773,86.935,0.64,0.64);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_149.setTransform(252.7,97.7828,0.64,0.64);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_150.setTransform(251.6915,109.2029,0.64,0.64);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_151.setTransform(243.6916,104.8119,0.64,0.64);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_152.setTransform(243.9776,100.4032,0.64,0.64);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_153.setTransform(244.8995,102.8634,0.64,0.64);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_154.setTransform(246.4095,99.8175,0.64,0.64);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_155.setTransform(247.1295,96.6048,0.64,0.64);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_156.setTransform(247.7695,93.9296,0.64,0.64);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_157.setTransform(243.9136,110.4605,0.64,0.64);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_158.setTransform(244.6976,107.1773,0.64,0.64);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_159.setTransform(245.4816,103.6574,0.64,0.64);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_160.setTransform(240.6977,114.9793,0.64,0.64);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_161.setTransform(247.1455,90.9365,0.64,0.64);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_162.setTransform(243.4016,102.9986,0.64,0.64);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_163.setTransform(243.3856,102.9666,0.64,0.64);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_164.setTransform(240.5697,114.9823,0.64,0.64);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_165.setTransform(240.5712,114.9807,0.64,0.64);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_166.setTransform(247.1295,90.8951,0.64,0.64);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_167.setTransform(247.1455,90.9029,0.64,0.64);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_168.setTransform(244.3674,104.4886,0.64,0.64);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_169.setTransform(244.3456,104.4306,0.64,0.64);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_170.setTransform(198.3787,82.2494,0.64,0.64);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_171.setTransform(203.5032,87.9395,0.64,0.64);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_172.setTransform(200.2667,84.0391,0.64,0.64);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_173.setTransform(198.603,83.7831,0.64,0.64);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_174.setTransform(196.5708,84.1831,0.64,0.64);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_175.setTransform(196.5548,84.1671,0.64,0.64);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_176.setTransform(198.7635,89.4957,0.64,0.64);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_177.setTransform(197.3068,88.919,0.64,0.64);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_178.setTransform(198.5974,88.551,0.64,0.64);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_179.setTransform(200.0267,87.815,0.64,0.64);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_180.setTransform(197.3068,87.911,0.64,0.64);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_181.setTransform(200.0267,87.783,0.64,0.64);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_182.setTransform(197.3228,87.895,0.64,0.64);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_183.setTransform(199.9734,87.5942,0.64,0.64);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_184.setTransform(197.2444,87.596,0.64,0.64);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_185.setTransform(200.132,86.8124,0.64,0.64);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_186.setTransform(197.0401,86.9958,0.64,0.64);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_187.setTransform(198.5048,87.23,0.64,0.64);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_188.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_189.setTransform(198.4747,88.359,0.64,0.64);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgUiSIADA/IgBANIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAg2g7IAAACIAkgNgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_190.setTransform(226.81,105.2226,0.64,0.64);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_191.setTransform(226.778,105.2546,0.64,0.64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_192.setTransform(213.7224,108.7265,0.64,0.64);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_193.setTransform(213.7211,108.7409,0.64,0.64);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_194.setTransform(260.8892,98.9027,0.64,0.64);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_195.setTransform(260.8732,98.9027,0.64,0.64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_196.setTransform(261.1132,109.2225,0.64,0.64);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_197.setTransform(261.1132,109.2545,0.64,0.64);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_198.setTransform(188.443,98.9027,0.64,0.64);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_199.setTransform(188.427,98.9027,0.64,0.64);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_200.setTransform(188.667,109.2225,0.64,0.64);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_201.setTransform(188.667,109.2545,0.64,0.64);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_202.setTransform(164.6836,110.4139,0.64,0.64);

	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(165,110.8,0.64,0.64,0,0,0,8.6,5.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_203.setTransform(164.1577,101.3613,0.64,0.64);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_204.setTransform(212.0744,96.6628,0.64,0.64);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_205.setTransform(215.7863,96.4228,0.64,0.64);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_206.setTransform(198.2027,91.3669,0.64,0.64);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_207.setTransform(198.3627,98.6467,0.64,0.64);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_208.setTransform(198.3947,97.2868,0.64,0.64);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_209.setTransform(198.4427,96.0388,0.64,0.64);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_210.setTransform(198.5033,93.4468,0.64,0.64);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_211.setTransform(204.3786,107.3185,0.64,0.64);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_212.setTransform(193.4829,106.6945,0.64,0.64);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_213.setTransform(205.6114,108.3768,0.64,0.64);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_214.setTransform(192.3621,107.494,0.64,0.64);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_215.setTransform(194.3146,92.7269,0.64,0.64);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_216.setTransform(192.6274,88.1745,0.64,0.64);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_217.setTransform(192.5954,88.1895,0.64,0.64);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_218.setTransform(198.492,95.7508,0.64,0.64);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_219.setTransform(198.4882,95.7028,0.64,0.64);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_220.setTransform(202.173,93.5482,0.64,0.64);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_221.setTransform(203.3626,96.7788,0.64,0.64);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_222.setTransform(203.3626,96.8108,0.64,0.64);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_223.setTransform(198.4747,93.5653,0.64,0.64);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_224.setTransform(198.6832,103.8215,0.64,0.64);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_225.setTransform(199.7867,109.9745,0.64,0.64);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_226.setTransform(199.8027,111.2544,0.64,0.64);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_227.setTransform(170.1554,120.7102,0.64,0.64);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_228.setTransform(161.9796,124.2941,0.64,0.64);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_229.setTransform(172.2194,95.9108,0.64,0.64);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_230.setTransform(163.0196,90.439,0.64,0.64);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_231.setTransform(157.9157,127.174,0.64,0.64);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_232.setTransform(157.7077,87.991,0.64,0.64);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_233.setTransform(168.2675,125.5741,0.64,0.64);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_234.setTransform(169.5315,89.735,0.64,0.64);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_235.setTransform(142.7801,108.4385,0.64,0.64);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_236.setTransform(178.9952,109.3825,0.64,0.64);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_237.setTransform(179.0283,109.3649,0.64,0.64);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_238.setTransform(165.5902,111.1434,0.64,0.64);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_239.setTransform(165.6353,111.0464,0.64,0.64);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_240.setTransform(161.9072,102.5565,0.64,0.64);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_241.setTransform(161.9072,101.9943,0.64,0.64);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_242.setTransform(160.7498,107.4278,0.64,0.64);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_243.setTransform(160.6784,107.4278,0.64,0.64);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_244.setTransform(153.7398,121.6222,0.64,0.64);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_245.setTransform(146.652,113.2384,0.64,0.64);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_246.setTransform(145.996,103.4626,0.64,0.64);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_247.setTransform(153.1639,94.2469,0.64,0.64);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_248.setTransform(146.748,97.0788,0.64,0.64);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_249.setTransform(147.228,119.3822,0.64,0.64);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_250.setTransform(246.6175,102.2627,0.64,0.64);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_251.setTransform(280.8887,90.062,0.64,0.64);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_252.setTransform(277.0094,95.4625,0.64,0.64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_253.setTransform(280.0543,94.172,0.64,0.64);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_254.setTransform(278.3001,93.5412,0.64,0.64);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_255.setTransform(273.6089,86.5031,0.64,0.64);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_256.setTransform(275.8706,85.5719,0.64,0.64);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_257.setTransform(278.0661,85.5454,0.64,0.64);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_258.setTransform(278.2328,87.511,0.64,0.64);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_259.setTransform(278.0088,87.495,0.64,0.64);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_260.setTransform(277.9116,86.7384,0.64,0.64);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_261.setTransform(274.6952,87.2215,0.64,0.64);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_262.setTransform(274.1045,89.1575,0.64,0.64);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_263.setTransform(272.6058,88.0927,0.64,0.64);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_264.setTransform(280.688,86.0128,0.64,0.64);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_265.setTransform(281.9253,91.1774,0.64,0.64);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_266.setTransform(275.4136,97.8811,0.64,0.64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_267.setTransform(275.0848,96.1217,0.64,0.64);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_268.setTransform(274.6475,93.2624,0.64,0.64);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_269.setTransform(279.3847,94.5669,0.64,0.64);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_270.setTransform(280.2007,87.703,0.64,0.64);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_271.setTransform(279.8327,87.607,0.64,0.64);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_272.setTransform(279.5287,87.639,0.64,0.64);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_273.setTransform(278.4568,87.639,0.64,0.64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_274.setTransform(277.7208,87.639,0.64,0.64);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_275.setTransform(279.9474,89.527,0.64,0.64);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_276.setTransform(278.1688,89.655,0.64,0.64);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_277.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_278.setTransform(277.8936,89.5106,0.64,0.64);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_279.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_280.setTransform(278.0408,88.9684,0.64,0.64);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_281.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_282.setTransform(279.7047,89.3736,0.64,0.64);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_283.setTransform(274.1323,91.0789,0.64,0.64);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_284.setTransform(275.7639,101.7352,0.64,0.64);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_285.setTransform(275.6728,99.9907,0.64,0.64);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_286.setTransform(276.5368,113.9705,0.64,0.64);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_287.setTransform(276.5519,111.3664,0.64,0.64);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_288.setTransform(276.4254,108.8834,0.64,0.64);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_289.setTransform(275.8941,106.3106,0.64,0.64);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_290.setTransform(275.8328,103.6877,0.64,0.64);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_291.setTransform(277.2707,98.9619,0.64,0.64);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_292.setTransform(277.2816,98.9187,0.64,0.64);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_293.setTransform(273.8009,98.3268,0.64,0.64);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_294.setTransform(271.9891,107.743,0.64,0.64);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_295.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_296.setTransform(247.9615,84.0871,0.64,0.64);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_297.setTransform(247.7855,87.047,0.64,0.64);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_298.setTransform(253.0311,98.1028,0.64,0.64);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_299.setTransform(251.3084,109.3205,0.64,0.64);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_300.setTransform(244.0279,105.1319,0.64,0.64);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_301.setTransform(244.3296,100.7231,0.64,0.64);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_302.setTransform(245.2358,103.1834,0.64,0.64);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_303.setTransform(246.8649,100.1056,0.64,0.64);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_304.setTransform(245.9369,103.9455,0.64,0.64);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_305.setTransform(240.6197,115.2833,0.64,0.64);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_306.setTransform(247.4495,90.9527,0.64,0.64);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_307.setTransform(243.7056,103.3026,0.64,0.64);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_308.setTransform(243.7216,103.2866,0.64,0.64);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_309.setTransform(240.8257,115.2653,0.64,0.64);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_310.setTransform(240.8912,115.3896,0.64,0.64);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_311.setTransform(247.5135,91.0868,0.64,0.64);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_312.setTransform(247.3875,90.8949,0.64,0.64);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_313.setTransform(244.6743,104.6256,0.64,0.64);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_314.setTransform(244.6656,104.7426,0.64,0.64);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_315.setTransform(227.146,105.5426,0.64,0.64);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_316.setTransform(227.13,105.5586,0.64,0.64);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_317.setTransform(214.0583,109.0465,0.64,0.64);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_318.setTransform(214.0731,109.0609,0.64,0.64);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_319.setTransform(261.2252,99.2227,0.64,0.64);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_320.setTransform(261.2092,99.2227,0.64,0.64);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_321.setTransform(261.4492,109.5425,0.64,0.64);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_322.setTransform(261.4492,109.5585,0.64,0.64);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIACACIgCABIAAgDIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHg");
	this.shape_323.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_324.setTransform(188.779,99.2227,0.64,0.64);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_325.setTransform(189.003,109.5425,0.64,0.64);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_326.setTransform(189.003,109.5585,0.64,0.64);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_327.setTransform(165.0196,110.7339,0.64,0.64);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(165.35,111.1,0.64,0.64,0,0,0,8.5,5.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_328.setTransform(164.4937,101.6733,0.64,0.64);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_329.setTransform(212.4104,96.9828,0.64,0.64);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_330.setTransform(216.1223,96.7428,0.64,0.64);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_331.setTransform(200.1387,110.2945,0.64,0.64);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_332.setTransform(200.1387,111.5744,0.64,0.64);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_333.setTransform(170.3794,120.9502,0.64,0.64);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_334.setTransform(162.1236,124.5981,0.64,0.64);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_335.setTransform(172.2514,96.2308,0.64,0.64);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_336.setTransform(163.2276,90.7429,0.64,0.64);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_337.setTransform(157.9317,127.478,0.64,0.64);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_338.setTransform(157.9957,88.295,0.64,0.64);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_339.setTransform(168.5235,125.9261,0.64,0.64);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_340.setTransform(169.5315,90.055,0.64,0.64);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_341.setTransform(246.2176,124.7421,0.64,0.64);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_342.setTransform(246.2336,124.7101,0.64,0.64);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_343.setTransform(211.0504,124.0381,0.64,0.64);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_344.setTransform(211.0664,124.0381,0.64,0.64);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_345.setTransform(256.1533,136.882,0.64,0.64);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_346.setTransform(192.9069,134.5339,0.64,0.64);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_347.setTransform(213.6884,110.5691,0.64,0.64);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_348.setTransform(213.9707,110.8612,0.64,0.64);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_349.setTransform(213.9944,110.5345,0.64,0.64);

	this.instance_2 = new lib.BRIGHTEDGELOGO();
	this.instance_2.setTransform(1424,56,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.instance_1},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.instance},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

	// Layer_1
	this.b6 = new lib.Symbol13();
	this.b6.name = "b6";
	this.b6.setTransform(1305.7,601.5,1,1,0,0,0,144,52.1);
	new cjs.ButtonHelper(this.b6, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.b2 = new lib.Symbol10();
	this.b2.name = "b2";
	this.b2.setTransform(1325.2,951.7,1,1,0,0,0,98.8,52.1);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.b3 = new lib.Symbol7();
	this.b3.name = "b3";
	this.b3.setTransform(396.05,567.45,0.8,0.8,0,0,0,172.6,141.2);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.b4 = new lib.Symbol11();
	this.b4.name = "b4";
	this.b4.setTransform(1358.35,269.5,1,1,0,0,0,194.2,52.1);
	new cjs.ButtonHelper(this.b4, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.b5 = new lib.Symbol8();
	this.b5.name = "b5";
	this.b5.setTransform(394.8,884.5,0.8,0.8,0,0,0,72,152.2);
	new cjs.ButtonHelper(this.b5, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.b1 = new lib.Symbol5();
	this.b1.name = "b1";
	this.b1.setTransform(386.75,318.25,0.8,0.8,0,0,0,48,132);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b5},{t:this.b4},{t:this.b3},{t:this.b2},{t:this.b6}]}).wait(1));

	// Background
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(-210.1,96,1,1,0,0,0,30,44);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#3C408C").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovgEiH4BMcMEPxAAAMAAAiY3MkPxAAAg");
	this.shape_350.setTransform(960,540);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#373535").ss(1,1,1).p("ECH5BMcMkPxAAAMAAAiY3MEPxAAAg");
	this.shape_351.setTransform(959.975,539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_351},{t:this.shape_350},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,960,554.4000000000001);
// library properties:
lib.properties = {
	id: '86732ABB5FAB664BB87375E11EED3576',
	width: 1920,
	height: 1080,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image_16.png", id:"Image_16"},
		{src:"images/Image_17.png", id:"Image_17"},
		{src:"images/BRIGHTEDGELOGO.jpg", id:"BRIGHTEDGELOGO"},
		{src:"images/sound.png", id:"sound"},
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
an.compositions['86732ABB5FAB664BB87375E11EED3576'] = {
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