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


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676868").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape.setTransform(-172.7462,83.2269,0.7567,0.7567);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Al0NzQishKiEiEQiEiFhKirQhKiygBjDQABjCBKiyQBKisCEiEQCEiFCshIQCyhMDCAAQDCAACzBMQCrBICFCFQCFCEBICsQBLCyABDCQgBDDhLCyQhJCriECFQiFCEirBKQizBKjCAAQjCAAiyhKg");
	this.shape_1.setTransform(-172.7273,83.208,0.7567,0.7567);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-245.2,10.8,144.89999999999998,144.89999999999998), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676868").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape.setTransform(59.1918,-7.1293,0.8047,0.8047);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Al0NyQishIiEiFQiFiFhIirQhMiyABjDQgBjCBMiyQBIisCFiEQCEiECshKQCyhKDCAAQDDAACxBKQCtBKCECEQCECEBJCsQBLCyAADCQAADDhLCyQhJCriECFQiECFitBIQixBMjDAAQjCAAiyhMg");
	this.shape_1.setTransform(59.2119,-7.1494,0.8047,0.8047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-17.8,-84.2,154.10000000000002,154.10000000000002), null);


(lib.Symbol74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* _root.van1.b1.enabled=false;
		_root.van2.b2.enabled=false;
		_root.van3.b3.enabled=false;
		_root.van4.b4.enabled=false;
		_root.van5.b5.enabled=false;
		_root.van6.b6.enabled=false;
		_root.van7.b7.enabled=false;*/
	}
	this.frame_206 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(205).call(this.frame_206).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Slotcopy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AqvMiIVfAAIAA5DI1fAAg");
	this.shape.setTransform(-381.1798,102.1991,0.4822,0.4822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(-381.1798,102.1991,0.4822,0.4822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy7, new cjs.Rectangle(-415.3,62.6,68.30000000000001,79.30000000000001), null);


(lib.Slotcopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AqvMiIVfAAIAA5DI1fAAg");
	this.shape.setTransform(-381.1798,102.1991,0.4822,0.4822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(-381.1798,102.1991,0.4822,0.4822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy6, new cjs.Rectangle(-415.3,62.6,68.30000000000001,79.30000000000001), null);


(lib.Slotcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AKwshI1fAAIAAZDIVfAAg");
	this.shape.setTransform(-301.0802,-8.8771,0.5128,0.5128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(-301.0802,-8.8771,0.5128,0.5128);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy5, new cjs.Rectangle(-337.3,-51,72.5,84.3), null);


(lib.Slotcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AlmkpQj3DaiMEUQiREfgLE6IcMAAIAA46QltAUlKCEQk/CBj3Dag");
	this.shape.setTransform(-187.5231,115.7461,0.438,0.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AuFMeQALk7CRkeQCLkUD4jaQD3jbE/iAQFKiEFsgVIAAY7g");
	this.shape_1.setTransform(-187.519,115.7524,0.438,0.438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slotcopy3, new cjs.Rectangle(-228,79.8,81,71.89999999999999), null);


(lib.StarIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SquarePiececopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AKwshI1fAAIAAZDIVfAAg");
	this.shape.setTransform(174.751,227.592,0.4979,0.4979);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(174.751,227.592,0.4979,0.4979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,186.7,70.5,81.90000000000003);


(lib.SquarePiececopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676868").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape.setTransform(1099.0264,47.1498,0.4361,0.4361);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Al0NyQishIiEiFQiFiFhIirQhMiyABjDQgBjCBMiyQBIisCFiEQCEiECshKQCyhKDCAAQDDAACxBKQCtBKCECEQCECEBJCsQBLCyAADCQAADDhLCyQhJCriECFQiECFitBIQixBMjDAAQjCAAiyhMg");
	this.shape_1.setTransform(1099.0373,47.1389,0.4361,0.4361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1057.3,5.4,83.5,83.5);


(lib.SquarePiececopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AlmkpQj3DaiMEUQiREfgLE6IcMAAIAA46QltAUlKCEQk/CBj3Dag");
	this.shape.setTransform(329.8942,229.3273,0.5371,0.5371);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AuFMeQALk7CRkeQCLkUD4jaQD3jbE/iAQFKiEFsgVIAAY7g");
	this.shape_1.setTransform(329.8992,229.3351,0.5371,0.5371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.5,185.5,98.89999999999998,88.10000000000002);


(lib.SquarePiececopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AqvMiIVfAAIAA5DI1fAAg");
	this.shape.setTransform(206.8372,220.6108,0.4019,0.4019);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(206.8372,220.6108,0.4019,0.4019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(178.2,187.4,57.30000000000001,66.5);


(lib.SquarePiececopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").p("AKwshI1fAAIAAZDIVfAAg");
	this.shape.setTransform(174.751,227.592,0.4979,0.4979);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9E4ED").s().p("AqvMiIAA5DIVfAAIAAZDg");
	this.shape_1.setTransform(174.751,227.592,0.4979,0.4979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,186.7,70.5,81.90000000000003);


(lib.RoundedSquarePiece = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Rec
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#676868").s().p("AlPFQQiLiLAAjFQAAjECLiLQCLiLDEAAQDFAACLCLQCLCLAADEQAADFiLCLQiLCLjFAAQjEAAiLiLg");
	this.shape.setTransform(-113.3157,577.8466,0.4714,0.4714);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Al0NzQishKiEiEQiEiFhKirQhKiygBjDQABjCBKiyQBKisCEiEQCEiFCshIQCyhMDCAAQDCAACzBMQCrBICFCFQCFCEBICsQBLCyABDCQgBDDhLCyQhJCriECFQiFCEirBKQizBKjCAAQjCAAiyhKg");
	this.shape_1.setTransform(-113.3039,577.8349,0.4714,0.4714);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.4,532.7,90.30000000000001,90.29999999999995);


(lib.Slots = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.slot5 = new lib.Slotcopy7();
	this.slot5.name = "slot5";
	this.slot5.setTransform(523.95,434.45,1,1,0,0,0,-381.2,102.2);
	this.slot5.alpha = 0.2305;

	this.slot0 = new lib.Symbol1copy();
	this.slot0.name = "slot0";
	this.slot0.setTransform(270.55,647.7,0.6748,0.6748,0,0,0,-176.3,77.6);
	this.slot0.alpha = 0.2305;

	this.slot4 = new lib.Slotcopy6();
	this.slot4.name = "slot4";
	this.slot4.setTransform(428.95,433.8,1,1,0,0,0,-381.2,102.2);
	this.slot4.alpha = 0.2305;

	this.slot3 = new lib.Slotcopy5();
	this.slot3.name = "slot3";
	this.slot3.setTransform(340.6,435.75,1,1,0,0,0,-301.1,-8.9);
	this.slot3.alpha = 0.2305;

	this.slot1 = new lib.Symbol1();
	this.slot1.name = "slot1";
	this.slot1.setTransform(616.35,646.75,0.6748,0.6748,0,0,0,59.2,-7.1);
	this.slot1.alpha = 0.2305;

	this.slot2 = new lib.Slotcopy3();
	this.slot2.name = "slot2";
	this.slot2.setTransform(236,438.25,1,1,0,0,0,-187.6,115.8);
	this.slot2.alpha = 0.2305;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.slot2},{t:this.slot1},{t:this.slot3},{t:this.slot4},{t:this.slot0},{t:this.slot5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slots, new cjs.Rectangle(196.1,394.2,472.29999999999995,306.2), null);


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
	this.piece5 = new lib.SquarePiececopy5();
	this.piece5.name = "piece5";
	this.piece5.setTransform(458.65,412.85,1,1,0,0,0,178.6,227.6);
	new cjs.ButtonHelper(this.piece5, 0, 1, 1);

	this.piece1 = new lib.SquarePiececopy4();
	this.piece1.name = "piece1";
	this.piece1.setTransform(591.2,429.25,1,1,0,0,0,1099,47.1);
	new cjs.ButtonHelper(this.piece1, 0, 1, 1);

	this.piece2 = new lib.SquarePiececopy3();
	this.piece2.name = "piece2";
	this.piece2.setTransform(59.35,428.35,1,1,0,0,0,343.4,244.2);
	new cjs.ButtonHelper(this.piece2, 0, 1, 1);

	this.piece3 = new lib.SquarePiececopy2();
	this.piece3.name = "piece3";
	this.piece3.setTransform(224.35,388.35,1,1,0,0,0,206.8,220.6);
	new cjs.ButtonHelper(this.piece3, 0, 1, 1);

	this.piece4 = new lib.SquarePiececopy();
	this.piece4.name = "piece4";
	this.piece4.setTransform(329.05,412.85,1,1,0,0,0,174.8,227.6);
	new cjs.ButtonHelper(this.piece4, 0, 1, 1);

	this.piece0 = new lib.RoundedSquarePiece();
	this.piece0.name = "piece0";
	this.piece0.setTransform(752.35,425.9,1,1,0,0,0,-113.4,577.9);
	new cjs.ButtonHelper(this.piece0, 0, 1, 1);

	this.piece0_1 = new lib.StarPiece();
	this.piece0_1.name = "piece0_1";
	this.piece0_1.setTransform(682.5,159.35,1,1,0,0,0,0,11.1);
	new cjs.ButtonHelper(this.piece0_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.piece0_1},{t:this.piece0},{t:this.piece4},{t:this.piece3},{t:this.piece2},{t:this.piece1},{t:this.piece5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pieces, new cjs.Rectangle(-3.6,355.2,801.2,115.90000000000003), null);


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
	this.instance.setTransform(-94.05,-120.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AgQAeQgIgFgFgIQgEgIAAgJQAAgIAEgIQAEgIAJgFQAJgEAHAAQAJAAAIAEQAJAFAEAIQAEAIAAAIQAAAJgEAIQgFAIgIAFQgIAEgJAAQgIAAgIgEgAgNgYQgGADgFAIQgEAHAAAGQAAAHAEAHQAEAHAHAEQAGADAHAAQAIAAAGgDQAHgEAEgHQAEgHAAgHQAAgGgEgHQgFgIgGgDQgIgEgGAAQgFAAgIAEgAAJATIgEgGIgFgJIgFgBIgDAAIAAAQIgGAAIAAgkIANAAIAIABQAEACABACIABAFQAAADgCAEQgEACgEAAIADACIAKAPgAgIgBIAHAAQAEAAACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgCIgCgCIgFgBIgHAAg");
	this.shape.setTransform(119.8138,27.2906,0.3723,0.3723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A53792").s().p("AhVBxIAEgXIAFABIASADIANgBIACgcIgBhmQAAgWgDgTIgfAGIgCgSIAFgBQAYgCAOgFQARgGANgIIAHAFIgHAmIACgDQAIgLAKgHQALgIAIgCQAKgCAJABQAJABAHAGQAHAGAFAIQAFAJABAJQACAKgCAKQgCALgFALQgGAJgIAHQgHAEgLAEQgKACgKgCQgFgBgGgDQgFgEgEgGQgDgEgBgHIAAgOQABgEAEgEQADgDAGgFIAKgFQAGgCAEABQAFABAEACQAFACACAEQADACACAGQACAEgBAFQgBAGgGAEQgFADgJAAIgHAAIADAFIACABQAGABAFgBQAGgCADgEQAFgEACgFQAEgGAAgHQABgEgBgEIgFgJIgIgHQgGgDgEAAQgFgCgGABQgGAAgFADQgFACgGAFQgFAFgFAIIgJANIgDAGIgMB1IATgEQANgEAKgEIAGgDIACAWIgEABIgYAIIgXAEIgYADgAgihYIgEABIABADQADAbAAATIABBoQAAAVgDAMIAAADIABAAIANiCQABgEADgFIADgGIgFgBIAHgxIABgEQgKAGgMADgAAOgkIgCADQgBAGABADIADAJQACADADADIAFACIgEgEIgDgIQgBgEABgEIACgIIAEgHIAAAAIADgDgAAjglIgDACIgDAFIgCAEIABAEIABADIAGgMIABgDQAAgBABAAQAAgBAAgBQAAAAAAAAQgBgBAAAAgAAughIAAADIACgDIAAgEIgCgDQABADgBAEgAAthOQAIABAFAEQAEACAHAHQAFAHABAFIABABIgBgKQgBgHgEgGIAAgBQgEgHgFgDQgFgEgHgCQgGgBgIACQgHACgKAHQgIAGgIAKIgBACIADgDQAGgGAHgDIAOgEIAGAAIAIABg");
	this.shape_1.setTransform(59.7746,40.6584,0.3713,0.3713);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A53792").s().p("AhPBsIACgLQASAEASgDQAEgVAAg9QgBg3gFgsIgfAGIgBgIQAsgEAagTIgLBBQAOgdARgNQATgNAPADQAPACAKAQQAJAPgDATQgEAXgPALQgPALgUgCQgKgDgGgJQgFgJABgMQABgGALgHQALgHAGACQAIABAFAFQAGAGgCAHQAAAJgQAAQAEgGABgEQABgJgFgBQgFAAgFAFQgDAFgCAHQgBAGAEAGQADAGAGABQAOADAKgJQALgLACgPQACgKgJgLQgIgKgNgDQgNgCgMAFQgMAGgLAQQgMARgBAEIgMB8QAbgEAWgJIABALQgaAJgUACQgOADgVAAIgSgBg");
	this.shape_2.setTransform(58.8942,44.694,0.3723,0.3723);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE3338").s().p("Ah2A5IAFgCQCIgzATgQIABgBQAngWgLgBIgBgBQgRgGgbgGQg1gNgyADIgJABIACglIASADQAXgCAfABQA1ADAqAPIAAAAIAdAVQAWAZgeAXQgNAMgiASQhCAlhlAgIgKADgABKg0QAfAGgVAWQgLALgWANQgSAOiIA3IgBAFQBdgeA+giQAfgRANgLIAAAAQARgNgOgPQgHgIgNgGQgqgQg3gBIguABIgCAAIgDAAIAAABIAOAAQBCAABAAXg");
	this.shape_3.setTransform(51.1115,45.7001,0.3723,0.3723);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE3338").s().p("AhvA/QCJg0AVgQIAZgRQAUgSgUgEQgRgGgcgGQg2gNgzADIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghASQhCAkhjAgg");
	this.shape_4.setTransform(51.104,45.6721,0.3723,0.3723);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE3338").s().p("AgWBBIAFgXIADgCQBTgyALgXIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgCgEgOABIgBAAQgHAAgOADQgdAGggAPIgBAAQgQAFg/AnIgFABQgIAAgFgDQgLgHAPgQIAAgBIA5gnQBFgmBBAEIAAAAIAjAMQAbAVgtAnIgBAAIhoBJgAghggQggAPgcAWQAsgbAYgKQAigQAfgGIAVgDQguACgwAXgABdgaQgEAJgOAMIALgHQAfgcgYgMQAKAJgKARg");
	this.shape_5.setTransform(48.9399,40.388,0.3723,0.3723);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE3338").s().p("AgLAvIAsgeQAvgfAHgQQADgGgBgFQgCgLgYADQgIAAgOADQgeAGghAPQgRAFhAAoQgEAAgDgCQgFgDAHgIIA4gmQBCgmA/AEIAcAKQAVARgkAgIhoBIg");
	this.shape_6.setTransform(48.9338,40.4158,0.3723,0.3723);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE3338").s().p("Ag0DSIgKgOIAAgBQgFgZAah7IAbh2QAdhwAagWQANgLAHALIADAEIgCAFQgGAKgHAXIgGAVIgBABQgLAZgfCTQgQBKgNBGIgBABQgJAjgKAAIgDgBgAAAhDIgaBxQgZB2ADAZIAEgRIAfiUQAeiQALgbQAIgcAIgTQgOAPgeBwg");
	this.shape_7.setTransform(49.1758,39.6191,0.3713,0.3713);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE3338").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCVIgeCQQgGAZgGAAIgBAAg");
	this.shape_8.setTransform(48.2112,43.5672,0.3723,0.3723);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ah1A5IAEgBQCIgzATgRIABAAQApgXgNgDIgBAAQgSgGgbgGQg1gMgyADIgHAAIABgjIASADQAXgCAeABQA1ACAqAPIABAAIAcAVQAWAZgdAXQgOALgiASQhDAlhkAgIgJADgABKgzQAeAGgWAWQgNANgTAKQgUAQiHA0IAAAHQBegeA+giQAfgRANgLQASgOgPgQQgIgIgNgGQgqgQg2gBIgvABIgBAAIgEAAIAAADIAQAAQBCAAA/AXg");
	this.shape_9.setTransform(51.2714,45.8583,0.3723,0.3723);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAUgSgUgDQgRgHgcgGQg2gMgzACIABgTIALACIAwgBQA3ACArAPIAYARQAUAVgYASQgOALghATQhCAkhjAfg");
	this.shape_10.setTransform(51.2622,45.8211,0.3723,0.3723);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgVBBIAFgWIACgCQBUgyALgYIAAAAQACgDgCgCQgCgFgPABIAAAAQgIAAgOADQgdAGggAPIgBABQgRAFg/AnIgDABQgIAAgFgEQgLgGAOgQIABAAIA5gnQBEgmBBAEIAAAAIAjAMQAZAUgrAnIgBAAIhoBJgAgsgbQglAUgWATQA+gmARgFQAigQAegGQAPgDAJAAQAegDADAPQABAKgGAIQgFALgXASIAWgOQAcgZgPgNQgHgGgPgCIgNgBQg1AAg3Afg");
	this.shape_11.setTransform(49.0877,40.5462,0.3723,0.3723);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgKAvIArgdQAvggAHgQQADgGgBgFQgCgKgXACQgIAAgPADQgeAGghAPQgRAGhAAnQgEAAgDgCQgFgDAHgIIA4gmQBDgmA+AEIAcAKQAVARgjAgIhpBIg");
	this.shape_12.setTransform(49.084,40.5648,0.3723,0.3723);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("Ag0DSIgJgPIgBAAQgFgYAbh7IAbh2QAchwAagWQANgLAHALIACAEIgCAEQgFAKgIAXIgGAVIAAABQgLAYgfCUIgeCQIAAABQgJAjgKAAIgDgBgAAAhDIgaByQgaB4ADAYIAGgTQAKg0AUhfQAfiRALgaQAKgiAHgQQgQAMgeB1g");
	this.shape_13.setTransform(48.3857,43.8206,0.3723,0.3723);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah7IAbh0QAahmAVgZQAKgMAFAIQgGALgIAYIgGAVQgLAZgfCUIgeCQQgGAagHAAIAAAAg");
	this.shape_14.setTransform(48.367,43.7342,0.3723,0.3723);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,0,0,2.6).p("AAAjjQBZAABABDQA+BDAABdQAABeg+BDQhABDhZAAQhYAAhAhDQg+hDAAheQAAhdA+hDQBAhDBYAAg");
	this.shape_15.setTransform(48.7913,43.7921,0.3723,0.3723);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF215").s().p("AiYChQg/hDAAheQAAhdA/hDQBAhCBYAAQBZAABABCQA+BDABBdQgBBeg+BDQhABChZAAQhYAAhAhCg");
	this.shape_16.setTransform(48.7913,43.7921,0.3723,0.3723);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EE3338").s().p("AgogtIBRA0IgvAng");
	this.shape_17.setTransform(43.8586,35.8997,0.3723,0.3723);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F26C36").s().p("AhQAAICfgYIgBANQAAASADASg");
	this.shape_18.setTransform(37.8555,44.2295,0.3723,0.3723);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EE3338").s().p("AgIgrIAqAjIhDA0g");
	this.shape_19.setTransform(44.3239,51.973,0.3723,0.3723);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EE3338").s().p("AAYgiIAXA6IhdAKg");
	this.shape_20.setTransform(40.1637,47.0868,0.3723,0.3723);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EE3338").s().p("AgvgaIBfgEIgTA9g");
	this.shape_21.setTransform(39.7541,41.2606,0.3723,0.3723);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_22.setTransform(43.8306,35.7973,0.3723,0.3723);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F26C36").s().p("AhShBIClBXIghAsg");
	this.shape_23.setTransform(39.9868,37.333,0.3723,0.3723);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F26C36").s().p("AA5hAIAaAyIilBPg");
	this.shape_24.setTransform(40.4429,50.7073,0.3723,0.3723);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EE3338").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAFAHQAHAHgBAJQABAKgHAHQgFAHgIAAQgHAAgGgHg");
	this.shape_25.setTransform(98.212,40.5625,0.3723,0.3723);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AANABIgJACIAAAAQgTAAgIgEQgEgDgBgEIAAgBIABgCQAAAAABgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAACQAAAKAdgBQAEgBAHABQAKABADALIgCABQgDgLgKgBg");
	this.shape_26.setTransform(118.092,33.5217,0.3723,0.3723);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgJAOQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgFgCgHIAAgHIACAAIABAHQACAGADAEIADACQADACADgDIABAAIAFgFQAHgHAGgMIADACQgMAUgIAEQgDADgDAAIgDgBg");
	this.shape_27.setTransform(117.2916,36.8056,0.3723,0.3723);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgLACIgFgHIACgBIAGAGQAIAGARgDIABADIgMABQgKAAgHgFg");
	this.shape_28.setTransform(115.9327,36.5822,0.3723,0.3723);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AgWgNIABgCQAVAcAXAAIAAAAIAAADQgbgEgSgZg");
	this.shape_29.setTransform(117.6266,35.8345,0.3723,0.3723);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgFAJQAFgBABgEIACgGIgBgIIADgBIABAKQgBAEgDADQgCAEgEACg");
	this.shape_30.setTransform(116.6122,35.4157,0.3723,0.3723);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9D4035").s().p("AAFALIgHABIgGgIIAFAAIgBgPIAGACIAIAUIgFABg");
	this.shape_31.setTransform(113.848,31.423,0.3723,0.3723);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9D4035").s().p("AgMADIABgIIAGAJIAAgHQACgIAGgCIgCADQgBAFACAFIALgLQACARgLAHIgEABQgEAAgIgLg");
	this.shape_32.setTransform(115.2194,30.925,0.3723,0.3723);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9D4035").s().p("AgMAIIAAgDQAAgLAMgCQAWgEgPAGQgJADgBAGQgBADACADIgCABg");
	this.shape_33.setTransform(116.5842,30.9323,0.3723,0.3723);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AgBAGIACgLIABABIgCAKg");
	this.shape_34.setTransform(116.6029,31.9814,0.3723,0.3723);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAAAFIAAgJIABAAIAAAJg");
	this.shape_35.setTransform(116.4632,31.9721,0.3723,0.3723);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgCgBIgJABIgBgCIALgCQAKAAAEAIIgCABQgEgGgJAAg");
	this.shape_36.setTransform(117.6359,31.7487,0.3723,0.3723);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AgMAFIAJgIQAIgGAIAKIgCACQgGgJgHAGIgIAGg");
	this.shape_37.setTransform(116.3795,31.5522,0.3723,0.3723);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#201F1F").s().p("AAAAAIgEAAIgBgCIAFAAQAEAAACAEIgCABQgBgDgDAAg");
	this.shape_38.setTransform(114.4529,31.9162,0.3723,0.3723);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AgJAIIAJgIIAIgJIACACIgIAIIgKAJg");
	this.shape_39.setTransform(114.1923,32.9307,0.3723,0.3723);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAOAKIgHgBQgIgCgIgGQgGgEgCgDQgHgBABAGIADAGIgCABQgDgEgBgEQgCgJALACIABABIAHAGQAJAGAIACIAAAAIAFABQAHABAGgCIABACQgFACgFAAIgDAAg");
	this.shape_40.setTransform(113.3117,32.3115,0.3723,0.3723);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgMAHIALgLQALgKADAOIgDAAQgBgKgJAJIgJAKg");
	this.shape_41.setTransform(117.9989,31.1203,0.3723,0.3723);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgCAEQAJgEgLgDIABgCIAGADQAGAEgKAEg");
	this.shape_42.setTransform(118.7042,34.122,0.3723,0.3723);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB7246").s().p("AgGABQAAgJAGgBQAGAAABAJQABAJgHABQgGAAgBgJg");
	this.shape_43.setTransform(114.9578,38.0217,0.3723,0.3723);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CB7246").s().p("AgFABQAAgIAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgIg");
	this.shape_44.setTransform(114.7624,36.9904,0.3723,0.3723);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9D4035").s().p("AAAASQgCAAgDgEQgFgGAAgMIAEgKQAGgIAKALIABAOQAAAPgLAAIAAAAg");
	this.shape_45.setTransform(114.5173,35.327,0.3723,0.3723);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3338").s().p("AgFAPQgDgDAAgNIABgNIAHAGIAJAIQgHANgEACg");
	this.shape_46.setTransform(117.2637,36.1091,0.3723,0.3723);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AgBAFIACgJIABABIgCAIg");
	this.shape_47.setTransform(117.7383,32.1024,0.3723,0.3723);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAAAGIAAgLIABAAIAAALg");
	this.shape_48.setTransform(117.5336,32.0372,0.3723,0.3723);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AgBgGIABAAIACANIgBAAg");
	this.shape_49.setTransform(117.366,32.0652,0.3723,0.3723);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AgCAEIAEgIIABAAIgEAJg");
	this.shape_50.setTransform(116.7332,32.0652,0.3723,0.3723);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AgBgCIABgBIACAGIgBABg");
	this.shape_51.setTransform(116.305,32.0652,0.3723,0.3723);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_52.setTransform(117.5987,33.1541,0.3723,0.3723);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_53.setTransform(116.561,33.2285,0.3723,0.3723);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgHQAGABgBAHQgCAIgFgCQgFgBABgGQACgIAEABg");
	this.shape_54.setTransform(116.4072,33.145,0.3723,0.3723);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgBAHQgFgBABgGQACgIAEABQAGABgBAHQgCAHgEAAIgBgBg");
	this.shape_55.setTransform(116.4072,33.145,0.3723,0.3723);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AgGAOQgEgFgBgIQAAgIADgEQADgGAFgBQAEAAAEAFQADAGABAHQAAAIgDAFQgDAFgFABQgEAAgDgFgAAAgQQgFAAgCAFQgDAFAAAHQAAAHAEAFQAEAFADgBQAEAAADgFQADgGAAgGQgBgHgDgFQgDgEgEAAIAAAAg");
	this.shape_56.setTransform(116.4912,32.8377,0.3723,0.3723);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFg");
	this.shape_57.setTransform(116.5005,32.8461,0.3723,0.3723);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAFABgBAGQgCAHgEgBQgEgBABgGQACgHADABg");
	this.shape_58.setTransform(117.4591,33.0702,0.3723,0.3723);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgBAHQgEgBABgGQACgHADABQAFABgBAGQgBAGgEAAIgBAAg");
	this.shape_59.setTransform(117.4591,33.0702,0.3723,0.3723);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AgHALQgDgEgBgGQAAgGADgFQADgEAFgBQAEAAAEAEQAEAFAAAGQAAAGgDAEQgDAFgFAAIgBABQgDAAgEgFgAgHgJQgEAEABAFIAAABQAAAGAEADQADAEAEAAQAEAAADgEQADgFAAgFQAAgFgEgFQgDgEgEAAQgEABgDAEg");
	this.shape_60.setTransform(117.5801,32.8293,0.3723,0.3723);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHALQgDgEgBgGQAAgGADgEQADgFAFAAQAEAAAEAEQADAEABAGQAAAFgDAFQgDAEgFABIgBAAQgEAAgDgEg");
	this.shape_61.setTransform(117.5801,32.8293,0.3723,0.3723);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CB7246").s().p("AgFAAQAAgEAFgBQAGgBAAAGQAAAGgGAAQgFABAAgHg");
	this.shape_62.setTransform(114.2109,34.0569,0.3723,0.3723);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB7246").s().p("AgCAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgEAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAQABAFgGAAIAAAAIgCgBg");
	this.shape_63.setTransform(115.1631,40.2554,0.3723,0.3723);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9D4035").s().p("AgGAKQgDgEgBgFQAAgEADgEQADgEAEgBQADAAAEADQADAEAAAFQABAFgDAEQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_64.setTransform(115.1137,39.2409,0.3723,0.3723);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#9D4035").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAFQgEAEgFAAQgFAAgIgFg");
	this.shape_65.setTransform(115.607,47.3824,0.3723,0.3723);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB7246").s().p("AgEAHQgDgDAAgEQAAgCACgDQACgDADAAQAHgBABAJQAAAIgIABQgCAAgCgCg");
	this.shape_66.setTransform(115.6241,45.8658,0.3723,0.3723);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D4035").s().p("AgMAMIgBgVIAIgJQAIgGAIAOIADAOQAAAPgOABIgBABQgIAAgDgJg");
	this.shape_67.setTransform(115.5515,44.4139,0.3723,0.3723);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#9D4035").s().p("AgEAIQgDgDAAgFQAAgKAHgBQAHAAABALQABAEgDAEQgCADgDAAIgBABQgCAAgCgEg");
	this.shape_68.setTransform(115.2363,42.9184,0.3723,0.3723);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB7246").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_69.setTransform(115.1975,41.3915,0.3723,0.3723);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgfEiQgCgBAEgGQACgEgFiOIgSi2QgBgTgGgVIgGgRQgHgUAFgTIgFABIgHAAQgQAAgJgIIgIgKQgDgIgBgIQgEgQAIgDQAHgDAMAHQAKAFAHAAIALAAIAIAAIACgBIgFgOIgYg3QgRgCADgMIAHgLIABgBIABAAQAUABgHAUQApA9AHACQAHACAFgOIAEg7QgHgNAGgGQAEgCAEgBIABABQASAKgQANIAABBIAGABIABgBIAngVQANgIAFALQADAGAAAHQgBALgGAIQgEAFgFACIABAdQAAAHAFAEQAKgCALAEQASgFAMAeQAGAQACAQIAAABQgFAPgYAFQgNAFgZgHIgIAOQgGAIgFADIgBABIgBAAIAAAAIgCABQgHADgFgIIAHBVQACAeAOBLIAAABQAGAyATBOIAAADIgCAAIg2AEIgiACIgDABIAAAAgAg9iPIgCAMQgBAOAFAOIAGASQAGAVABATIASC2IAAAAQAECPgCAEIAAABIBUgGQgShFgHg6QgOhMgCgeIgHhaQAAgEACgBIADADQAEALAGgDIABAAIAAAAIACgBIAAgBQAEgCAGgHQAFgIADgHIABgBIACAAIAOADQAQACAHgDQAVgEAFgNQgDgSgFgOQgLgagOAFIgBABIgBgBQgJgFgLAEIgBAAIgBgBQgHgGAAgJIgBgfIACgBIAHgFQAGgHABgLQAAgGgCgEQgDgIgKAGIgpAWIgBAAIgHgCIgCAAIgBhGIABgBQADgCACgDQADgGgIgGQgMADAIAOIABABIgFA7QgFATgLgDQgGgCgXggIgWggIgBgBIABgBQACgEAAgEQgBgHgKgBQgNAQATACIABAAIAaA6IAAAAIAFARIABACIgCAAIgHADIAAgCIgRAAQgIAAgLgGQgLgFgFACQgFACADAOIAFANIAGAIQAIAIAPAAIAHAAIAKgCg");
	this.shape_70.setTransform(116.1075,38.7221,0.3723,0.3723);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFF215").s().p("AgcEcQACgEgEiOIgSi2QgBgUgGgVIgGgRQgEgOAAgPIACgMQgGACgIAAQgPAAgKgJIgGgJIgEgOQgEgPAHgCQAFgDAKAFQANAGAHABIALAAIAIgBIAAABIAEgBIgFgRIgZg5QgQgBADgKIAHgKQAMAAABAJQAAAFgCAFIAVAfQAXAgAGACQAJACAFgRIAEg7QgHgMAGgFQACgCAEAAQALAGgEAIQgCAEgEADIABBDIAHACIApgWQAMgHAEAJQACAFAAAHQgBAMgHAIIgIAFIABAeQAAAIAGAFQAMgEAKAGQARgGALAeQAGAPACAQQgFAOgWAFQgIADgQgCIgPgDQgJASgKAGIgBABIgBABIgBABQgGACgFgIQgBgCAAAAQgBgBAAgBQgBAAAAABQAAAAAAABIAHBZQACAfAOBLQAGAyATBPIg5AEIggACg");
	this.shape_71.setTransform(116.1054,38.7011,0.3723,0.3723);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9D4035").s().p("AARCBQgGAAgEABIgDABQAAgDAIgCQACAAABAAQABgBAAAAQAAAAAAgBQAAAAgBAAQgEgBgEACIgEACQAAgGAGgCIAFgBQgEgCgGADIgEACQAAgGAIgBIAIAAQgBgDgHAAIgIgBIANgGIgLABIAKgGIgMABIAMgGQgDgCgFAAIgEABIAOgIIgMABIAMgIIgMABIALgHQgFgBgFACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBgCAGgDIAGgDIgLABIAJgGIgKgBIAMgHIgMABIAMgJIgNADIAKgMIgJABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgBgHABIgGABIAMgIQACgEgPADIALgGIgKAAIALgHQgCgCgGABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgHACIALgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgNgBIANgKIgQACIALgJIgKgCIAKgLIgLAAIAGgFIgKAAIAJgFIgHgBIAGgEIgJgBIAKgGIgMAAIAIgGIgIgCIAHgEIgJgCIAIgEIgHgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAaIAHAzQABAGAFAtQACAKAAAlIAAAeQABAMgDANIgNACg");
	this.shape_72.setTransform(114.0263,38.273,0.3723,0.3723);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#9D4035").s().p("AhNCJQgMgOgBgUQgCgUAIgYQAIgYAOgXQAJgNAKgMQAJgJAPgLQAXgRAQgBQAHAAARAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThAIgGggQgcAegXARQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAIgFANQgGAPgDAQQgDANAAAQQACAYAPgBQAHgBAMgJQAOgKAKgNIgBgMQgKAKgGAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgEgIgEAAIAAAAg");
	this.shape_73.setTransform(112.9691,43.7506,0.3723,0.3723);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#EE3338").ss(0.2,0,0,2.6).p("Ag1AHIAlgKQAqgIAbAO");
	this.shape_74.setTransform(70.4122,30.9773,0.3723,0.3723);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AgCAmIgLgDIAXhQIAEBbQgFgFgLgDg");
	this.shape_75.setTransform(104.0848,31.8325,0.3723,0.3723);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3338").s().p("AhpBFIAlhBQAzhCA/gQIAogFQAjAEgaAvIgDAEQgVAWgNAKQgaAWgcAMIheAugAA0g3IAAAAQgpAKgjAiQgZAYgUAjIABgBIBAgfQApgRAmgrIABgBQAHgNgPAAg");
	this.shape_76.setTransform(101.9457,38.1427,0.3723,0.3723);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3338").s().p("AApBtQgJgBgIgFQgZgQgNgqIgCgGQgGgSAAgHIgDgPQAAgEgDgGQgEgKgGgJIgRgXQgRgWgGgUIAQgOIAAAAIAXAOQAYAQAPANIAAABQApAoARAbQAbAtgJAsIgBADQgFALgMAEIgJABIgIgBgAgVgsIABAAQAIAOAEAJQAFAKAAAJIADAJIAAAHQAAADAEAOIACAHQAKAhATALQAGAEAEAAIAGAAIAEgCQAFgigVgjQgOgXgngoIgUgPg");
	this.shape_77.setTransform(101.359,44.7859,0.3723,0.3723);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3338").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIADgEQALgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgMABQgJgBgGAFIgDAFQgCAKgHAHQgDAFgGAAIgCgBg");
	this.shape_78.setTransform(96.7054,42.2316,0.3723,0.3723);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3338").s().p("AAbAhQgEgGgbAEQgDAAgFgDQgLgGgHgPQABgLgGgJIgGgLIAGAAQAHABACAFQAAgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIAEAEQAGAEAJAEIAPACQAPAEADAHIgGAGg");
	this.shape_79.setTransform(96.8718,39.667,0.3723,0.3723);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3338").s().p("AgGABIgYAWQgBAAAFgQIAGgQQAdgXAOAOQALALgDAfQgLgkgaANg");
	this.shape_80.setTransform(97.4081,41.0981,0.3723,0.3723);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3338").s().p("AgSAKIAAgDQASABAJgIQAGgFABgFIACABQgBAGgGAEQgKAKgPAAIgEgBg");
	this.shape_81.setTransform(98.2865,39.3263,0.3723,0.3723);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAFgEABgFIACAAQgBAGgGAEQgJAJgPAAIgEAAg");
	this.shape_82.setTransform(98.7053,37.4575,0.3723,0.3723);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3338").s().p("AgRAKIAAgCQARAAAKgIQAFgFABgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_83.setTransform(99.0776,35.9013,0.3723,0.3723);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAKgJQAEgEACgFIADAAQgCAGgGAEQgJAJgPAAIgEAAg");
	this.shape_84.setTransform(96.8346,45.5174,0.3723,0.3723);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3338").s().p("AgRAKIAAgDQARABAJgIQAFgFACgFIACABQgBAGgGAEQgJAKgQAAIgDgBg");
	this.shape_85.setTransform(97.2906,43.6076,0.3723,0.3723);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3338").s().p("AgRAKIAAgCQARABAJgJQAFgFACgFIACABQgBAGgGAEQgKAKgPAAIgDgBg");
	this.shape_86.setTransform(97.7467,41.56,0.3723,0.3723);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EE3338").s().p("AglAQQgKgJAWgHQAKgEANgDIAAAAQAUgDAEAGIAAACQgBAJgYACIAAgHIAHgBQAIgBADgBQgJAAgHABIgSADQgRAFADADQAFAEAVgDQASgCATgHQAHgCAGgCQAEgDABgBQgKgJggAEQgRACgRAFQgRAEgEAFIgEgFQAEgEASgGQASgGATgCQAigEAMALIAAAAQADADgBAFQgCADgGADQgKAFgEABQgUAHgUACIgNAAQgMAAgEgDg");
	this.shape_87.setTransform(94.9638,48.1461,0.3723,0.3723);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3338").s().p("AgjANIgBgBIgBgHIAEABQAOAEALAAQATgBAVgMQAAgFgRgBIgFAAQAQADgZAMIAAAAQgTAGgGgGIgBgHQABgHAPgEQALgEANABQATAAADAIQACAEgCADIgBABQgXAPgXAAQgMAAgNgDgAgHgGQgLADgBADIACACQADACAOgEQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgBgFg");
	this.shape_88.setTransform(98.7146,34.1602,0.3723,0.3723);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EE3338").s().p("AhhC9QBah2AWiIQAHgrgBgoIgCggIgBgGIAGACQAJAEAKABQAJAAAGgBQAbgFAHgIIAGADIgiCaQgPBMgnCMIgBAFIgEgDQgMgMgsALIgqANgAASgvQgYB8hPBrQBEgXAXANQAniRAMhCIABgDIACgKIAeiFQgMAGgTAEIgQABQgHAAgJgDQAFA5gOBHg");
	this.shape_89.setTransform(96.5367,41.1768,0.3723,0.3723);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEEAA4").s().p("AAShBQAHgrAAgoIgCggQARAHATgDQAdgGAHgJIgfCIIgDATQgPBLgmCNQgNgNguALIgrAOQBah3AWiKg");
	this.shape_90.setTransform(96.5274,41.1582,0.3723,0.3723);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3338").s().p("AglASQgRgCgBgHIAAgBQAAgIAQgHQAOgFAYgFIADAAQAXgCANACQAQABACAJQAAAHgRAIQgPAGgWADIgEABIgWABIgNgBgAADgKIgDABQgWAEgOAFQgMAFAAADQABACALABQAPACASgCIAEgBQAUgDAQgGQAMgFAAgDQgBgCgLgBIgOgBIgUABg");
	this.shape_91.setTransform(94.8894,48.1478,0.3723,0.3723);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEEAA4").s().p("AgjAQQgQgCAAgGQgBgGAPgFQAOgGAWgEQAVgDAQACQAQACAAAFQABAGgPAFQgPAHgWADQgOACgMAAIgKAAg");
	this.shape_92.setTransform(94.8902,48.1469,0.3723,0.3723);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3338").s().p("AgZAQQgMgDgCgHQgBgHANgHQALgFAPgCIACgBQAOgCALADQANACABAIIAAAAQABAHgNAGQgKAGgQACIgCABIgMABIgNgCgAABgJIgBABQgPACgJAFQgJADABADQAAADAIABQAMACAMgCIABAAQAQgCAIgFQAIgDAAgDQgBgDgHgBIgMgBIgMAAg");
	this.shape_93.setTransform(98.7053,34.1361,0.3723,0.3723);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EEEAA4").s().p("AgYANQgKgCgBgGQgBgFAKgEQALgFAPgDQAOgCALACQALACABAFQAAAFgKAFQgLAGgPACIgNABIgMgBg");
	this.shape_94.setTransform(98.7146,34.1406,0.3723,0.3723);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AgCgHQAAAAAAAAIgBAHIABACQACADABABIACgEQgEgFgBgEg");
	this.shape_95.setTransform(97.0986,42.0435,0.3723,0.3723);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EEEAA4").s().p("AgBADIgCgCIACgHIAAAAQAAAEAFAFIgCAEIgDgEg");
	this.shape_96.setTransform(97.0859,42.0098,0.3723,0.3723);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3F4096").s().p("AADgCQADACACAEQgFgBgFAAIgFABQAFgLAFAFg");
	this.shape_97.setTransform(70.3466,29.1068,0.3723,0.3723);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3338").s().p("AAGAjQgbgJgGgGQADgGACgKQAEgTgGgUIAUALQAVASAKAeQABAEgCAEQgCAEgIAAIgKgBg");
	this.shape_98.setTransform(73.3275,32.4168,0.3723,0.3723);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#00A85A").s().p("AABARIgJgCQADgPgJgNIgLgLQAaADAPAXQAHAMADALQgLgFgOgDg");
	this.shape_99.setTransform(71.4448,30.1479,0.3723,0.3723);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3338").s().p("AgSAIQgCgOANgOIAIAAQAFACAHANQAJAOgFAKIgeACQgEgFgBgIg");
	this.shape_100.setTransform(70.4771,29.999,0.3723,0.3723);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3338").s().p("AgYAaQAHggAVgOQALgGAJAAIABAAIgBAAQgKARABANQABAHACADIABAAIgBAAQgEAEglAJIgBAAgAABgRQgRAOgHAdIAogMQgJgOAPgZQgMABgKAHg");
	this.shape_101.setTransform(69.2949,30.2317,0.3723,0.3723);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F4096").s().p("AAEgTQALgGAJgBQgKARABANQABAHACAEQgDACgmAKQAHghAUgNg");
	this.shape_102.setTransform(69.2856,30.2224,0.3723,0.3723);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgRACIgEgJQAQAIAPgEQAHgDAFgFQAAANgKAGIgKAEIgBAAQgMAAgGgKg");
	this.shape_103.setTransform(70.5704,33.3221,0.3723,0.3723);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCACIACgBIABgBIABgCIABAAIgBACIgCACIgCABg");
	this.shape_104.setTransform(69.723,32.9866,0.3723,0.3723);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AgGADIABgDIABgCIABABIgCADIALgCIAAAAIABAAIAAABIgMACg");
	this.shape_105.setTransform(70.4738,32.7725,0.3723,0.3723);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAAAAIAAgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_106.setTransform(71.3052,32.3444,0.3723,0.3723);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_107.setTransform(69.723,32.4002,0.3723,0.3723);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_108.setTransform(71.3052,32.3258,0.3723,0.3723);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_109.setTransform(69.7323,32.3909,0.3723,0.3723);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgKAEIACgEIAGgDQAGgDAHAGQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBQgDgBgEgBQgHgCgFAIIgBgBg");
	this.shape_110.setTransform(71.2742,32.2159,0.3723,0.3723);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AAHABQgGgFgLAIIAIgGQAIgFAFAJQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgEgDg");
	this.shape_111.setTransform(69.6867,32.217,0.3723,0.3723);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AABABQgBgCgFACIAEgBQAEgDADAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgEgBg");
	this.shape_112.setTransform(71.3665,31.7611,0.3723,0.3723);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AgFABQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAIAEgBQADAAADABQgDgBgHADIgBgBg");
	this.shape_113.setTransform(69.5679,31.8679,0.3723,0.3723);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("Ag2AVQgFgTAGgWIAkgLQApgIAeAPIADATQACAWgKARIAAgXQACgIgDgBQgCAAgEACIgDACQAHgVgLAFIgCgGQgLAMgIgLQAAABAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgGADgOgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQgCgBgIADIgGACIgCgFQgEgEgEAJIgGAJIgBgEIgHAGIABAFQABATgCAIQgEgFgCgJg");
	this.shape_114.setTransform(70.4199,32.0041,0.3723,0.3723);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AgDAnIgJgDQgDgCgKgBIgJgBQgFgBgFgIIgEgGIgDgOIgCgiIAJgFIAngEQAFgBATABIARACIALAGIABAAIAGAKIgBAVIgDANQgCAPgRAFQgFAAgCACIgDACQgIAFgJAAIgHgCgAgFgnIgnAEIgIAFIACAhIADANQAAACAEAFQAFAHAEABIAKABQAJACAEABIAJADIAGACQAIAAAIgFQAEgEAHAAQAQgFACgOIADgOIABgUIgGgKIgLgEIgRgDIgQAAIgIAAg");
	this.shape_115.setTransform(71.2722,28.6476,0.3713,0.3713);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FCD4C3").s().p("AgCAnIgJgDQgEgCgKgCIgJgBQgFgBgFgHIgEgHIgCgNIgCgiIAIgFIAngDQAFgBATABIARACIALAFIAGAKIgBAVIgDANQgCAPgQAFQgFAAgDABIgCACQgIAGgJgBg");
	this.shape_116.setTransform(70.4024,32.6608,0.3723,0.3723);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EB5C38").s().p("AgECgQgKgFgIgKQgHgKgEgNQgEgOAAgPIAJiVIgkAOIAAgZIADgBIAigKIgBgrIgDgcIAAgGIArgJIAAAGQABAPgCAUIgCAeIAzgRIAFAaIg6APIgLBMIgIA1QgCARAAAPQAAAOACAKQACAKAEAHQAFAIADACQAGADAHAAQAFAAADgDQADgCADgGQADgGACgIQABgKAAgKIgBgHIAAgBIAAABQAAAJgEAHIgFAFQgEADgDAAQgDgBgFgCIgIgEQgCgDgCgFQgCgEAAgGQAAgGACgHQACgGAEgEQAEgFAFgDQAFgDAFAAQAHAAAGADQAHAEAFAEQAGAGADAGQAEAHAAAGQAAAMgDANQgEAMgGAKQgGALgHAGQgIAGgJAAQgMAAgKgFgAAoBRQACAEACAGIABAKQAAANgCAIQgBAKgDAHIABgCQAGgMACgJQADgKAAgLQAAgEgDgEQgCgEgEgFIgHgEIAFAHgAgSCDIgEgMQgDgOAAgNQAAgLADgXIAIg1IAIgzIAEgbIAAgDIACgBIADgCIgFADIABgJIACgmIABgcIgWAFIADA/IgBANIgkALIAAACIAkgNIAAAHIAAAZIgHBoIgBAbQAAAPADALQABAFAEAHgAALBNIgFAIIgBAIIABAFIAFAGQgDgEAAgFIABgJIADgIIAFgGgAAXBQIgCADIgCAFIgBAHIABACIAAAAQACgDABgDIABgIIAJAGIABACIgCgFIgEgGIgCgBgAAQhUIgNAFIANgFIACAAQAGgDAIAAIAVgFIAAgEIglAMIAAAAg");
	this.shape_117.setTransform(86.8853,42.4705,0.3723,0.3723);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EB5C38").s().p("AgRCNQgOgSAAgfIAFhQQAEhCAAgJIglANIAAgNIAlgLIAAgSQAAghgDgaIAhgHQABAfgGAqIAhgNQAIgBANgFIADAPIgbAGQgKACgVAIQAAAOgKBBQgLBDAAASQAAAcAJAQQAJAQAQAAQANAAAGgOQAHgPAAgWQAAgIgFgJQgFgKgGAAQgEABgEAGQgDAIAAAHQAAAHAFAAQAFAAADgLIACACQAAAJgDAFQgDAEgEAAQgGABgHgGQgGgFAAgJQAAgLAIgIQAHgJAJAAQALAAAKAKQALAKAAALQAAAXgLAUQgMAVgPAAQgWAAgNgSg");
	this.shape_118.setTransform(86.8667,42.4891,0.3723,0.3723);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00A85A").s().p("AhZB2IAAAAQgDAAgFgDQgEgCgDgFIAAAAQgDgDgCgGQgCgFABgGQABgFADgDIAHgFIAIgEIAIAAQAEAAADACQADACADADIACAFQADgIACgLIAEgjIAAh+IAAAAIgGgBIgHgCIgFgBIADgQIAFABIAjAFQAQACAIgBIAGAAIgDASIgTgBIgIBKIACAAIAUADIAugEIACggIACgXQABgJAEgJQAFgIAGgGQAHgGAIgCQAIgDAIACQAGAAAFAEQAGAFADAEQAEAFABAGQACAFgBAIQgBAFgDADIgHAGIgIAEQgEACgFgBIgHgDQgDgBgCgDIgFgGIgBgDIgCAMIgJCLIAFgBIAMgCIAGgCIABAOIABAFIghACIgLABIgOADIgHABIACgQIAAgFIAVgBIgDhMIgkACQgMABgKgBIgMAAIgNBNIgGAQQgEAJgEAFQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIAAAAIAFAAIAAAAQgEAAgDgDgAhjBYIgBABIAAAHIACAEIAAgLIABgDgAA9hjQgFAEgEAHQgDAHgBAIIgCAWIgCAkIABAAIAAAHIAAAeIAAAMIAIhkQABgIADgJIAHgPIAEgGIgHAFgAgxhmIAAB2IAEgXIABgDIgBgBIABgFIAJhTIAAgBIgOgCgABPhkQgEADgDAEIgBADIABgBIAFgDIAGgBIAHADIgBgFQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgDgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAAAg");
	this.shape_119.setTransform(79.2721,44.5088,0.3723,0.3723);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00A85A").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgGAIgEQAIgEAEABQAHABADAEQACAEAAAFQgBADgCACQgDACgDAAQgEgBgBgGIACgBIADADQACAAABgFIgBgEIgEgDQgDAAgDADQgDACgBAFQgBAIACAEQACAFAEABQAKABAHgLQAIgMADgVQAEggACgtQABgugDgsIgFAAIgMgDIABgGQApAIATgCIgBAIIgTgBIgJBTIAMADQAPACANgBQAPAAAXgEQABgmADgVQADgTALgKQAMgLAPADQAKABAHAKQAGAJgBALQgBAFgHAGQgIAEgGAAQgFgBgFgFQgEgFAAgDQAAgDAFgFQAEgDAEABQAEAAABACIABADIgDAFQgCgFgDgBQgCAAgBAFQAAAEACAEQACACACABQADAAAEgFQAEgHAAgGQABgFgDgHQgDgHgGAAQgIgCgIANQgHANgDARQgDAUgDAuQgDAyAAAcQAKACANgEIABAIIgbABQgJAAgRAEIABgKIAVgBQgEhHACgQQgXADgUABQgUAAgRgCQgKBBgEAQQgEARgJALQgHAKgKAAIgEAAg");
	this.shape_120.setTransform(79.2713,44.5171,0.3723,0.3723);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00A85A").s().p("AgNAhQgFgCgGgFQgEgEgDgHQgCgGAAgHQAAgFACgIQACgGAGgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGADAOIABADIgHABIgBgBQgDgGgFgDQgFgDgIAAQgFAAgEABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgDADQgDADgEAAIgEgBIgDgEIgDgEIAAgEIABgGIAEgFIAFgDIAGgBQAFAAADABQADABAFADQAFADABADQACADAAAFQAAAHgCADQgCAFgFADIgKAFIgKACQgHAAgFgDgAgKAdQgEgCgEgDQgFgEgCgFQgCgFAAgHQAAgFADgEQADgGAFgDQAFgEAGgCQAGgCAEAAQAHAAAIAEIAGAEQgDgGgFgDQgHgGgMAAQgEAAgFADQgFACgFAFIgGALQgCAFAAAGQAAAHACAEQACAGAEADQAEAEAFADIABAAIAAAAgAANAAQAEAFAAAJQAAAIgEAEIADgBQAEgDACgEQABgDAAgEIgBgGIgEgFQgDgBgEgBIgDAAIAFACgAgHAHIAAACIACADIACADIABAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgDgCQgCgCAAgEIAAAAgAAAACIgCABIAAABIABACIACABIACgBIADgBIACgCQgCgCgEAAIgBAAg");
	this.shape_121.setTransform(106.7094,38.7942,0.3723,0.3723);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00A85A").s().p("AgVAYQgKgJABgNQAAgNAJgKQAJgLALAAQAbAAAGAZIgDAAQgIgNgPAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAPAAAAgPQgBgPgLAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgBALgIAAQgCAAgDgEQgCgEgBgDQAAgFAFgEQAFgEAEAAQAIAAAHAFQAHADAAAJQAAAKgJAGQgIAGgKAAQgMAAgIgJg");
	this.shape_122.setTransform(106.7001,38.7942,0.3723,0.3723);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00A85A").s().p("AgpBYIAFgBIAVAAQAAhVgIhTIgTAAIgEgBIAAgSIAiABQAIAAAHgCQAJgCAMgEIAHgCIAAAVIgTAFIgICnIArgDIAAAXIgFAAIhNAFIgGABgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_123.setTransform(106.8397,44.7973,0.3723,0.3723);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00A85A").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_124.setTransform(106.8397,44.8159,0.3723,0.3723);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00B0F0").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgGAAgHQAAgFACgIQADgGAFgGQAEgFAGgEQAGgDAGAAQAOAAAIAHQAJAGAEAOIAAADIgFABIgBAAIgBgBQgEgGgFgDQgFgDgHAAIgKABIgJAFIgHAIQgCACAAAEQAAAFACAFIAFAHIAIAFIAHABQAGAAADgDQADgDAAgGQAAgFgCgEIAAACQgCAHgCADQgEADgDAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgEIgCgEIgBgEQAAgEABgCQABgCADgDIAFgDIAGgBIAJABIAHAEQAFADACADQACAFAAADQAAAFgDAFQgDAFgEADIgKAFIgKACQgHAAgFgDgAgKgbQgFACgEAFQgFAGgCAFQgCAGAAAFQAAAFACAGQACAGAEADQAEAEAFADIABAAQgFgCgDgDQgDgDgEgGQgCgFAAgHQAAgDADgGQADgGAFgDQAFgEAGgCQAGgCAFAAQAHAAAHAEIAGAEQgCgGgGgDQgHgGgMAAQgEAAgFADgAANAAQAEAFAAAJQAAAJgFAEIAEgCQADgDADgEQACgEAAgDQAAgDgCgDIgEgFQgDgBgEgBIgCAAQACAAACACgAgHAHIAAACIACADIACADIACAAQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAABgBIABgBIgCAAQgDAAgCgCQgDgCAAgEIAAAAgAAAACIgBABIgBABIABACIACABIACgBIADgBIADgCQgCgCgFAAIgBAAg");
	this.shape_125.setTransform(64.5669,38.7942,0.3723,0.3723);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00B0F0").s().p("AgWAYQgJgJAAgNQAAgNAKgKQAJgLALAAQAaAAAHAZIgDAAQgHgNgQAAQgLAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAIgFABQgCACAAACQAAAFAFAAQACAAAEgCQgCALgGAAQgEAAgCgEIgDgHQAAgFAFgEQAEgEAFAAQAIAAAIAFQAGAEAAAIQAAAKgJAGQgHAGgLAAQgMAAgJgJg");
	this.shape_126.setTransform(64.5576,38.7942,0.3723,0.3723);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00B0F0").s().p("AgpBYIAbgBQgBhegIhKIgXgBIAAgSIAiABQAIAAAHgCIAWgGIAGgCIAAAVIgTAFIgICnIArgDIAAAXIg+ACIgaAEgAgOhXQAJBKAABPIAIiaIAAgCIgPABIgCAAg");
	this.shape_127.setTransform(64.6972,44.7973,0.3723,0.3723);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00B0F0").s().p("AgkBcIAbgBQAAhegKhTIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgSAFIgJCxQAaAAARgDIAAAMQguAAgMACIgUADg");
	this.shape_128.setTransform(64.6972,44.8159,0.3723,0.3723);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFF215").s().p("Ag8g3QAvgCA2ANQAbAGASAHQgFAKgeARQgOAJghAPIhYAkg");
	this.shape_129.setTransform(50.7458,45.4903,0.3723,0.3723);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFF215").s().p("AgZgcQAXgIAUgCIAQAAQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_130.setTransform(50.4399,40.2244,0.3723,0.3723);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3338").s().p("AhFAlQAtgLAvghQAYgSAPgPIAIApQg1AkgvAEg");
	this.shape_131.setTransform(78.3134,37.4912,0.3723,0.3723);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3338").s().p("AAFAJIhUAaIBShFIBNA/IgGAHQgFgEhAgXg");
	this.shape_132.setTransform(80.4727,37.3516,0.3723,0.3723);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE3338").s().p("AgSgPQATALATgFQAKgDAFgFIALAiIgpgQIgyARg");
	this.shape_133.setTransform(70.2442,34.4106,0.3723,0.3723);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_134.setTransform(70.3373,38.6453,0.3723,0.3723);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3338").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_135.setTransform(70.3559,37.8542,0.3723,0.3723);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EE3338").s().p("AgCAAQAAgDACAAQADAAABADQgBAEgDAAQgCAAAAgEg");
	this.shape_136.setTransform(70.3838,37.1282,0.3723,0.3723);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3338").s().p("AgTAUIADgqIAigCQAEgBgCAwIgPACIgDAAQgOAAgHgFg");
	this.shape_137.setTransform(70.419,35.6204,0.3723,0.3723);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EE3338").s().p("AgTAAIAggPIAHAPIghAQg");
	this.shape_138.setTransform(73.8367,43.6897,0.3723,0.3723);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3338").s().p("AgVABQAIgGABgHIAiALIgHAPg");
	this.shape_139.setTransform(67.4986,43.3268,0.3723,0.3723);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F4096").s().p("AgYAUQgEgDgBgJIgEgLIAbgUIABAAIAEAGQAMAQAUADIADAGQAAAGgJABQgGAAgIADIgJgBQgHgCgEgFIABAMQgFACgEAAQgEAAgDgEg");
	this.shape_140.setTransform(74.5538,44.3053,0.3723,0.3723);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F4096").s().p("AAJAWIABgLQgCADgGACIgDACQgFABgEgBIgOgDQgJgBAAgGIADgGQAVgDALgPIAEgHIABABIAbAUIgEAKQgBAJgEADQgDAEgFAAQgDAAgFgCg");
	this.shape_141.setTransform(66.8466,43.7918,0.3723,0.3723);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3338").s().p("AARAUQgIABgKgEIgKgEIgHgHIgLgGIgDgHQgJAAAcghIANAJIACAAIAMACQAOABAIAJIgFAJQgEAHAAAPIABAOQgBAKgFAFg");
	this.shape_142.setTransform(67.9824,35.2017,0.3723,0.3723);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3338").s().p("AgKA9QgEgCgCgNQgGgUACgQIADgKIAHgRQgGgdAGgIQABgEAEgCQAFgCAGANQADAGgBAIQAGgFgBAPQgBAJgIAFQAIARgFAYQAIAFAFAGIABACIgBABIgdAQIAAABgAgEg3IgDADIAAAAQgEAFACAPQACAOABAAIgBACQgDAFgDALIgDALQgDAPAGASIAAABQACAKACACIAZgPIgMgJIgBgBIAAgBQAEgSgDgNIgEgLIAAgCIABgBQAEgCADgEIACgFQAAgCAAgBQAAgBAAAAQgBgBAAAAQgBAAAAABIgDADIgDgCQAFgLgEgIIAAAAQgDgIgDAAIgBAAg");
	this.shape_143.setTransform(67.0009,32.5535,0.3723,0.3723);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FCD4C3").s().p("AgOAtQgGgTACgQIAKgbIgCgPQgCgQAEgFIAEgEQAEgCAFALQAFAJgGAMIAEgFQAFgDgBAKQgCAKgIADIAEALQAEAOgEASIAFAEQAGAEACADIgcARQgDgBgCgNg");
	this.shape_144.setTransform(66.9823,32.5622,0.3723,0.3723);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3338").s().p("AgvBGQgEgJADgiIADgfIAAgBIABgBQACAAAEgMQgDgTAFgRIAFgMIADABQABAGAXAAQAHAAAHgCIANgCQAHgDAAgDIADgBIADAHIAAAAQgCARAHAVQADALAEAIIAAAAQAEAZgEAUIAAABIgBABQgHABADAIQABAEACAEIABABIgBABIgGAJIAAABIhWABgAgjgSIAAAAQgEAMgDAEIgDAfQgCAdADAKIBSgCIAFgHQgDgGgBgGQgBgIAHgCQADgWgDgUQgEgGgEgOQgGgUACgSIgBgBQgCACgGACQgGACgIABQgHABgHABQgUAAgFgHQgJARADAbg");
	this.shape_145.setTransform(70.4124,36.9607,0.3723,0.3723);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFF215").s().p("AgvAcIADgfQADgBAEgNQgCgUAFgPIAFgMQABAJAegCQAfgCgCgKIAEAHQgDARAHAWQAEALAEAIQAEAYgFATQgIACADAJQABAFADAFIgGAIIhUACQgEgJACghg");
	this.shape_146.setTransform(70.4102,36.9328,0.3723,0.3723);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EE3338").s().p("AgHAiQgIgOgEgMQgEgOACgLIAAgLIgEgIQA1ARgCANIgCALQgFANgPAKQgGAJgDAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_147.setTransform(72.5537,35.6794,0.3723,0.3723);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3338").s().p("AgXA2IgCgCQgEgDACgGQgJgDAAgIIACgHQAIgLALAJIAVgcQgMgKAAgMIgBgGIgBgBIABAAIAMgSIABgBIAEACQATAQAEAIIABACIACAFIAAAAQACAMgCAJIAAABQgEAIgDAEQgUAWgSAEQgBAFgDAEIgEAEIgFABIgBAAgAgfAbQgFAKAMAEIADAAIgCADIgBACQgBAAABABQAAAAAAABQAAAAAAABQABAAAAABIABAAIADAAIADgEQACgCACgGIAAgBIABAAIALgFQAPgHALgOIABAAQACgCAEgJQACgGgCgNIgDgGQgEgIgTgPIAAAAIgLAPIACANQADAIAJAGIABABIgBABQgSAWgGAJIgBACIgBgCQgFgEgDAAQgEAAgDAEg");
	this.shape_148.setTransform(73.2457,37.5587,0.3723,0.3723);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FCD4C3").s().p("AgYAzQgDgDABgDIABgDQgJgDAAgHIABgGQAFgHAHACIAGAEIAYgeQgJgHgDgIIgDgOIANgRQAUAQAEAIIADAHQADALgDAJQgDAKgDACQgMAOgPAHIgLAFQgCAGgEAFQgDADgCAAIgDgBg");
	this.shape_149.setTransform(73.2457,37.5773,0.3723,0.3723);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#00B0F0").s().p("AgIAZIgPgEIAIgrIAmgDIABAxQgKACgKAAIgMgBg");
	this.shape_150.setTransform(70.4024,35.6893,0.3723,0.3723);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F4096").s().p("AA6AfQgOgegsgRQgIAGgNAKQgYAUgPAXIgqgNQADgPAGgLQADgFALgNIAdgqQBSgDAEABIAZAUQAaAZABAZQAKAOAAAEQAKAPgJAFIgiAJQAAgNgHgPg");
	this.shape_151.setTransform(70.5237,41.6555,0.3723,0.3723);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#ED2790").s().p("AghCQQgKgDgJgHQgIgHgGgJQgEgJAAgKQAAgNAIgLQAGgKAPgJIAFgDIABACIAAgBIADgcQgKgEgEgDQgIgFgGgJQgGgHgCgJQgDgJAAgLQAAgNAEgPQAFgOAJgLQAJgLALgGQAJgGAMAAQAJAAAEACQAFACADACIABgBIACABIAAAAIABAAIABABIABABIADACIAEAIIgEADIgHAFQAFADAFAGQAHAHAEAJQAEALAAAIQgBAOgFALQgEAMgJAIQgKALgIAEQgIAEgHABIgDAbIANgIIAUgLIAOgFIAOgBQAGAAAHADQAFADAFAHQAEAIACAFQACAHAAAJQAAAegZAXQgKALgRAGQgPAGgSAAQgMAAgJgEgAgqBWIgBAIQAAAJACAGQACAHAFAFQAEAGAGACQAFADAHAAQAOAAALgEQAMgFAJgJQAIgIAFgKQAFgJgBgJQAAgHgEgEQgEgEgFAAIgLAAIgLADIgWALIgaARIgCgCIgFgDIgDgDIABgEQACgDABgGIgDAGIgBAHIAAAAgAg2BRQgGAJAAAJQAAAIADAGQAEAHAHAGIAFAEIgBgCQgFgHgEgJQgCgHAAgLQAAgLACgGgAA3A7QAHAIAAALIgCAKQADgHAAgJQAAgHgCgGQgCgGgCgEIgHgHQgDgCgFAAIgMACQgEAAgIAEIgTAKIgaAQIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgXhXQgIAFgDAHQgGAIgCAJQgDAKAAALQAAAJACANQADAKADAFQAEAGAEADQAEADAFAAQAGAAAGgEQAEgDAFgHQAFgIADgKQACgKAAgJQAAgHgCgGQgCgGgDgFIgBgBQACADAAAGQAAAHgFAHQgHAGgHAAQgKAAgHgIQgGgHAAgLQAAgEADgFIAFgIQAFgEAEgDQAGgCAEAAQAJAAAHAEIADABIgCgCIgHgFQgGgCgFAAQgGAAgGAEgAg5g4QgEAKAAAPQAAAKACAHIAIAOIAGAGIgBgBQgEgHgCgLQgDgLAAgNQAAgMADgMIAGgQQgHALgEAKgAATg3QACAHAAAJQAAAMgDAKQgCAJgFAIQAGgGAEgKQAEgKABgLQgBgIgDgHQgCgGgFgGgAgPgzIABABIABAAIABgCIAAAAIgDgCgAgMhIIgCACIgCAFIADgEIAFgCQAFAAADADIgDgDQgCgCgEAAgAARiJIgFgJIAAgBIAFAKg");
	this.shape_152.setTransform(71.1656,45.2347,0.3723,0.3723);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#ED2790").s().p("AgxBuQgQgNAAgSQAAgWAbgRIACAEQgMAKAAAUQAAASAKAMQAKAOAQAAQAdAAAUgUQATgUAAgUQAAgJgFgGQgFgGgJAAQgKAAgNAEQgJADgOAIQgOAJgJAHIgEgDQAEgLACgUIADggQgSgEgLgPQgKgPAAgTQAAgdARgVQARgVAUAAQAMAAAJAIIgCgEIADABIAEAEIABACIgEAEQgJgJgNAAQgRAAgLASQgLASAAAXQAAAaAJAPQAIAOANAAQAPAAAKgRQALgSAAgWQAAgPgIgMQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAJAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABgBQACgDAAgEQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgDAAgCADQAAgFACgCQAAgBABgBQAAAAABAAQAAgBABAAQAAAAABAAQAIAAAAAKQAAAFgEAFQgFAFgFAAQgJAAgFgHQgEgGAAgIQAAgGAHgIQAIgHAHAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgSAAQgCAdgDANQARgJAGgFIATgKQANgGANAAQALAAAHALQAHALAAAPQAAAcgWAVQgXAWgiAAQgVAAgQgNg");
	this.shape_153.setTransform(72.0426,41.9301,0.3713,0.3713);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EE3338").s().p("AglgDIAqglIAhBRg");
	this.shape_154.setTransform(53.9289,51.4798,0.3723,0.3723);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3338").s().p("AgagjIA1gIIgNBXg");
	this.shape_155.setTransform(49.1729,53.5646,0.3723,0.3723);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DE3438").s().p("AgoADIBRgwIgmBbg");
	this.shape_156.setTransform(55.1295,37.0538,0.3723,0.3723);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3338").s().p("AgdApIAkhZIAXBhg");
	this.shape_157.setTransform(49.7779,33.8707,0.3723,0.3723);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26C36").s().p("AgZhhIAzALIgyC4g");
	this.shape_158.setTransform(46.8089,55.2398,0.3723,0.3723);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26C36").s().p("AgjhfIBHC0Ig0ALg");
	this.shape_159.setTransform(46.6879,32.4468,0.3723,0.3723);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F26C36").s().p("Ag3g9IAhgZIBOCsg");
	this.shape_160.setTransform(52.8306,54.3091,0.3723,0.3723);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F26C36").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_161.setTransform(53.5659,33.4612,0.3723,0.3723);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AhQAAICfgYIAAANQAAARACATg");
	this.shape_162.setTransform(38.0044,44.3412,0.3723,0.3723);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AhVBxIAEgWIAFABIARABIAOAAQACgNAAgOIABgzQAAgcgCgZQAAgVgDgSIgfAGIgDgTIAGAAQAVgDAQgFQAQgFAPgKIAHAHIgHAmIACgDQAHgLAKgIQAMgHAIgDQAKgCAJABQAIABAIAGQAHAFAEAJQAFAIACAKQABAJgBALQgDANgEAIQgGAKgIAGQgIAGgKACQgLACgKgCIgLgDQgFgEgDgFQgDgGgBgHQgCgGACgGQABgFADgEIAKgIIAKgFQAGgBAEAAIAJADIAHAFQAEAFABADQACAEgBAGQgCAHgGADQgEADgJAAIgIABIADADIADABQAEABAHgBQAFgBAEgDIAHgKQADgFABgIQABgEgBgFIgFgIIgIgHQgEgCgGgCQgFgBgHABIgKADQgGACgFAFQgHAHgDAGIgJANIgDAGIgMB1IATgFQAHgBAPgHIAHgDIABATIAAAFIgEABIgXAHIgXAEIgZACgAhJBnIACAAIgCgBgAgjhYIgDABIABADIADAuQACAZAAAcIgBAzQAAAVgDAMIAAADIABAAIANiCQABgEADgGIADgEIgGgCIADgTIADgVIADgNQgKAFgNAEgAAVgqIgHAGIgCAEQgCAEABAFQABADADAFQACAEADACIAFADIgEgGIgDgIQgCgEABgDIADgIIAEgHIADgDgAAigmIgCADIgDAEIgCAFIAAAEIABADIAFgHIACgFIABgDIAAgEIAAAAgAAuggIgBACIABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgCgDgAAshOQAIACAGADQAGADAEAGQAFAFACAIIABAAIgBgJQgBgIgEgHQgEgHgFgEQgGgEgGAAQgHgCgIADQgHACgJAGQgHAFgJALIgBACIACgDQAHgGAHgDQAGgCAHgBIAGgBIAIABg");
	this.shape_163.setTransform(59.071,44.8903,0.3723,0.3723);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AhPBsIABgLQATADASgCQAEgagBg4QgBg9gEgmIggAFIAAgHQAqgEAcgTIgLBBQANgcASgOQASgNAQACQAQADAJAQQAIAOgDAUQgEAXgOALQgPALgUgCQgKgDgGgJQgGgKACgLQABgGALgHQAKgGAGAAQAKADAEAEQAGAGgCAHQgBAJgPAAQAEgGABgEQABgJgGgBQgEAAgFAFQgFAGAAAGQgBAFAEAHQAEAGAFABQAOADAKgKQAKgIADgRQABgMgIgJQgJgLgMgCQgNgCgMAFQgMAGgLAQQgMASgBADIgMB8QAagDAXgKIABALQgaAIgUADQgRADgTAAIgRgBg");
	this.shape_164.setTransform(59.0902,44.8801,0.3723,0.3723);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhBhVIAwgBQA3ACArAPIAYARQATAVgYASQgNAMgiARQhBAlhjAfIABgWQCJg0AVgRIAYgRQAVgSgUgDQgRgHgcgGQg2gNgzADIABgTg");
	this.shape_165.setTransform(51.2732,45.9147,0.3723,0.3723);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhuBAQCJg0AUgRIAZgRQAVgSgVgDQgRgHgbgHQg2gMgzADIAAgTIALACIAwgCQA3ACArAQIAYARQAUAUgYATQgOALghASQhCAkhjAgg");
	this.shape_166.setTransform(51.2994,45.8583,0.3723,0.3723);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#373535").ss(3,0,0,2.6).p("AhsgBIA4gnQBCglA/AEIAcAKQAVAQgkAgIhpBIIAEgTIAsgdQAuggAHgQQAEgFgBgGQgDgKgXACQgIAAgOADQgeAGghAQQgSAFhAAnQgEAAgCgCQgFgDAHgHg");
	this.shape_167.setTransform(49.1308,40.9196,0.3723,0.3723);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AgLAvIAsgeQAugfAHgQQAEgGgBgFQgDgLgXADQgIAAgOADQgeAGghAPQgSAFhAAoQgEAAgCgCQgFgEAHgIIA4glQBCgmA/AEIAcAKQAVARgkAgIhpBIg");
	this.shape_168.setTransform(49.1308,40.5926,0.3723,0.3723);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#373535").ss(3,0,0,2.6).p("AgiAzQgaB6AEAXIAFAGQAHABAHgaQANhGAQhLQAfiUAMgZQACgKAEgLQAIgYAGgLQgFgIgLAMQgUAZgaBmg");
	this.shape_169.setTransform(48.4575,43.7533,0.3723,0.3723);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AgxDKIgFgGQgFgXAah6IAch1QAZhmAVgZQAKgMAFAIQgGALgHAYIgHAVQgLAZgfCUIgeCRQgHAZgGAAIAAAAg");
	this.shape_170.setTransform(48.416,43.7533,0.3723,0.3723);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AgIgrIAqAjIhEA0g");
	this.shape_171.setTransform(44.3798,52.0103,0.3723,0.3723);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AAYghIAXA6IhdAJg");
	this.shape_172.setTransform(40.2567,47.1334,0.3723,0.3723);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgvgaIBfgDIgTA7g");
	this.shape_173.setTransform(39.8751,41.4467,0.3723,0.3723);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AgogtIBRA0IgvAng");
	this.shape_174.setTransform(44.0447,36.0858,0.3723,0.3723);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AhShBIClBXIghAsg");
	this.shape_175.setTransform(40.3126,37.7332,0.3723,0.3723);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AA5hAIAaAxIilBQg");
	this.shape_176.setTransform(40.5918,50.7073,0.3723,0.3723);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AgNARQgFgHAAgKQAAgJAFgHQAGgHAHAAQAIAAAGAHQAFAHAAAJQAAAKgFAHQgGAHgIAAQgHAAgGgHg");
	this.shape_177.setTransform(98.4075,40.7487,0.3723,0.3723);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgagIQAAgBADAGQAGAFAVAAIAKgCQAKABADAM");
	this.shape_178.setTransform(118.3433,33.6515,0.3723,0.3723);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgOgGIAFAHQAJAGASgD");
	this.shape_179.setTransform(116.0866,36.793,0.3723,0.3723);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAWAOQgGAAgJgEQgQgHgNgS");
	this.shape_180.setTransform(117.8579,36.0423,0.3723,0.3723);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AADgMIABAJQgBAHgIAF");
	this.shape_181.setTransform(116.8375,35.6753,0.3723,0.3723);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AAFALIgHABIgHgIIAGAAIAAgQIAFADIAHAUIgEACg");
	this.shape_182.setTransform(114.1085,31.5812,0.3723,0.3723);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AAAAOQgFgBgHgKIABgIIAGAKQgBgEABgDQACgJAGgCIgCADQgBAFACAFIALgKQACAQgLAIIgDAAIgBAAg");
	this.shape_183.setTransform(115.4242,31.0395,0.3723,0.3723);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AgNAIIABgDQAAgLAMgCQAYgEgRAGQgJADgBAGQgBADABADIgCABg");
	this.shape_184.setTransform(116.7014,31.0241,0.3723,0.3723);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgFIgBAL");
	this.shape_185.setTransform(116.7983,32.1675,0.3723,0.3723);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgEIAAAJ");
	this.shape_186.setTransform(116.668,32.1582,0.3723,0.3723);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#201F1F").ss(0.8,0,0,2.6).p("AgMAGIAIgHQAIgGAHAJ");
	this.shape_187.setTransform(116.6115,31.7181,0.3723,0.3723);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgHAAIAFAAQAEAAACAD");
	this.shape_188.setTransform(114.7405,31.9991,0.3723,0.3723);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAJgIIgIAIIgKAJ");
	this.shape_189.setTransform(114.3969,33.1253,0.3723,0.3723);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgVAFQgDgEgBgDQgCgHAKACIAHAGQAJAGAIACIAGACQAHAAAGgC");
	this.shape_190.setTransform(113.525,32.5059,0.3723,0.3723);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgLAJIAKgLQAKgJACAL");
	this.shape_191.setTransform(118.2265,31.296,0.3723,0.3723);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AgFgEQAOAEgLAF");
	this.shape_192.setTransform(118.9463,34.3003,0.3723,0.3723);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgEAHQgCgCAAgEQAAgDACgDQACgDACgBQAGAAABAJQAAAKgHAAIAAAAQAAAAAAAAQgBgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_193.setTransform(115.1584,38.1999,0.3723,0.3723);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgFAAQAAgHAFgBQAGAAAAAIQAAAEgBACQgCADgDAAIAAAAQgEAAgBgJg");
	this.shape_194.setTransform(114.9671,37.1765,0.3723,0.3723);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAAASQgCAAgDgEQgGgGABgMIAEgKQAGgIAJALIACAOQAAAPgLAAIAAAAg");
	this.shape_195.setTransform(114.7127,35.5131,0.3723,0.3723);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgFAPQgDgCAAgOIAAgOIARAPQgIAOgDACg");
	this.shape_196.setTransform(117.4684,36.272,0.3723,0.3723);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_197.setTransform(117.9431,32.2792,0.3723,0.3723);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgFIAAAL");
	this.shape_198.setTransform(117.729,32.2234,0.3723,0.3723);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgGIABAN");
	this.shape_199.setTransform(117.5522,32.242,0.3723,0.3723);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgEIgDAJ");
	this.shape_200.setTransform(116.9286,32.242,0.3723,0.3723);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgDIABAH");
	this.shape_201.setTransform(116.5005,32.242,0.3723,0.3723);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAg");
	this.shape_202.setTransform(117.7957,33.3402,0.3723,0.3723);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBg");
	this.shape_203.setTransform(116.7611,33.4147,0.3723,0.3723);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AACgGQACAAABADQACACgBACQgCAIgEgBQgGgBACgHQACgIAEACg");
	this.shape_204.setTransform(116.601,33.3307,0.3723,0.3723);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AAAAIQgGgBACgHQACgIAEACQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACACgBACQgCAHgEAAIAAAAg");
	this.shape_205.setTransform(116.601,33.3307,0.3723,0.3723);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AAAgRQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAQgEAAgDgFQgEgFAAgHQgBgHADgFQADgGAFAAg");
	this.shape_206.setTransform(116.6866,33.0153,0.3723,0.3723);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AgGANQgEgFAAgHQgBgHADgFQADgGAFAAQAEAAADAFQAEAFAAAHQABAHgDAFQgDAGgFAAIgBAAQgDAAgDgFg");
	this.shape_207.setTransform(116.6866,33.0153,0.3723,0.3723);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#201F1F").ss(0.2,0,0,2.6).p("AABgGQAGABgCAGQgBADgBACQgCACgBgBQgGgBACgGQABgDACgCQABgBABAAg");
	this.shape_208.setTransform(117.6546,33.251,0.3723,0.3723);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AAAAHQgGgBACgGQABgDACgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAGABgCAGIgCAFIgDABIAAAAg");
	this.shape_209.setTransform(117.6546,33.251,0.3723,0.3723);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AgFAAQgBgEAGgCQAFAAABAGQAAAGgGABQgFgBAAgGg");
	this.shape_210.setTransform(114.413,34.243,0.3723,0.3723);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AgEAAQgBgEAFAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAAAQAAAFgFAAIAAAAQgEAAAAgFg");
	this.shape_211.setTransform(115.3621,40.4419,0.3723,0.3723);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("AgGAKQgDgEgBgFQAAgFADgEQADgEAEAAQAEAAADADQADAEABAFQAAAFgDADQgDAEgEABIgBAAQgDAAgDgDg");
	this.shape_212.setTransform(115.3092,39.4271,0.3723,0.3723);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgMARIgBgkIAMgCIAGAJQAIALABAHQgBAHgDAEQgEAFgFAAQgFAAgIgFg");
	this.shape_213.setTransform(115.8117,47.5592,0.3723,0.3723);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgEAHQgCgCAAgFQgBgHAHgCQADABACACQADADAAADQAAADgCADQgCADgDAAQgDABgCgDg");
	this.shape_214.setTransform(115.8205,46.0444,0.3723,0.3723);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AgMAMIgBgVIAIgJQAIgGAHAOIADAOQABAPgOABIgBABQgHAAgEgJg");
	this.shape_215.setTransform(115.7469,44.6,0.3723,0.3723);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("AgEAIQgDgCAAgGQgBgEADgDQACgDADgBQADAAACADQADAEAAAEQAAAMgHAAIgBAAQgCAAgCgEg");
	this.shape_216.setTransform(115.4379,43.1034,0.3723,0.3723);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("AgGARIgEgiIAHABQAIADAGALIAAALQgCAJgJAAIgGgBg");
	this.shape_217.setTransform(115.4022,41.5776,0.3723,0.3723);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AgdEaQACgDgFiOIgRi2QgBgTgGgVIgGgRIAAAAQgHgVAEgSIgMABQgQAAgJgIQgGgFgBgFIgFgQQgEgQAIgDQAGgDANAGQAMAGAFAAIAFAAIAOAAIACgBIgEgOIgZg3QgRgCADgMIAHgLIABgBIABAAQAUAAgHAVQApA9AIACQAHACAEgPIAEg6QgHgNAHgGQADgDAFAAIABAAQAKAHgCAIQgCAFgFAEIAABAIAGACIACgBIAngVQANgIAFALQACAGAAAHQgBATgPAHIABAdQAAAGAFAFQALgDALAFQARgGAMAfQAGAPACARIAAABQgFAPgXAFQgNAFgagHQgDAIgFAGQgFAGgGAEIgBACIgBAAIAAAAIgBABQgHADgGgIIAHBVQACAeAOBLQAGAyATBPIAAACIgCABQhDAFgVAAIgDACQgCAAAEgIgAg9iPIgCALQAAAOAEAPQADAFADANQAGAVABATIASC2QAFCOgDAFIBUgFQgThTgGgsQgOhMgBgeIgIhaQAAgFACAAQABAAAAABQAAAAABAAQAAAAABABQAAABAAAAQAFAKAFgCIABAAIAAAAIACgCIAAAAIAKgKIAJgOIAAgBIACAAIAOADQAQACAHgDIABAAIALgEQAMgFADgIQgDgSgGgOQgKgagPAFIgBAAIAAAAQgKgFgLADIgBABIgBgBQgGgGgBgJIAAgfIABgBQANgFABgSQAAgGgCgEQgDgIgKAGIgnAVIgBABIgCAAIgHgCIgBgBIgBgBIgBhEIABgBQADgCACgDQADgHgIgFQgEAAgBADQgDAEAFAKIAAABIgEA7IAAAAQgFATgLgDQgHgCgXggQgWgfAAgBIAAgBIAAgBQACgEAAgEQgBgIgJAAQgFAEgBAFQgBAHAMACIABAAIAaA6IAGATIgGACIgDAAIAAgBIgMAAIgFAAQgJgBgKgFQgLgFgFACQgFACAEAOIAEANIAAAAIAGAIQAJAIAOAAIAOgCIADgBg");
	this.shape_218.setTransform(116.9845,34.7988,0.3713,0.3713);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#201F1F").s().p("AgbEcQACgEgFiPIgSi2QgBgTgGgVIgGgRQgEgPABgPIACgLIgPABQgPABgKgJIgGgJQgDgGgBgIQgEgPAHgCQAFgDALAFQAMAGAHABQAGABAFgBIAIgBIAAACIAFgCIgGgRIgZg4QgQgCADgLIAHgKQAMABABAJQAAAFgCAEIAVAgQAXAgAGABQAJADAFgQIAEg8QgHgLAGgGQADgCAEAAQAKAGgEAIQgCAEgEACIABBEIAIABIABgBIAngUQAMgHAEAJQACAFAAAGQAAANgIAHIgHAGIAAAdQABAJAGAFQALgEAKAGQARgGALAeQAGAPADAQQgFAPgXADQgIADgQgCIgPgCQgIARgLAIIgBABIgBAAIgBABQgGADgFgKQgBgBgBAAQAAgBgBAAQAAgBAAABQAAAAAAABIAHBZQACAfAOBMQAGAxATBPIg5AFIgfABg");
	this.shape_219.setTransform(116.245,38.8035,0.3723,0.3723);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AARCBQgGAAgEABIgEABQABgDAIgCQACAAABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgEgBgEACIgEACQABgGAFgCIAFgBQgFgCgFACIgEADQAAgGAIgBIAIAAQgBgDgHgBIgIAAIANgGIgKABIAJgGIgNABIANgGQgDgCgFAAIgEABIAOgIIgMAAIAMgHIgMABIAKgHQgEgBgFACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAgCAFgDIAGgDIgLABIAJgGIgKgBIAMgHIgNABIANgJIgNACIALgLIgKABIAIgFIgKgBIAMgGQABgDgMADQALgIAAgCQAAgCgOADIANgIQACgEgQACIAMgFIgKAAIALgHQgBgCgHABIgGACIAKgIQAAgBgFAAIgFAAIALgGQAAgCgGABIgGACIAKgJQgCgDgDABIgEACIAJgIQgCgDgEABIgFACIAMgNIgMgBIAMgKIgQACIALgJIgKgCIAJgLIgKAAIAGgFIgJAAIAJgFIgIgBIAGgEIgIgBIAJgGIgLAAIAHgGIgIgCIAHgEIgKgCIAIgEIgGgCIAHgBIgFgHIAAAAIAOgCIgBACQgDAGACALIADAJQAIAJACAZIAGA0QACAGAFAtQADAKgBAlIAAAeQABAMgDANIgNACg");
	this.shape_220.setTransform(114.2202,38.4591,0.3723,0.3723);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AhNCJQgMgMgCgXQgBgTAIgYQAHgXAPgYQALgQAIgJQANgNALgHQAWgRARgBQAIAAAQAJIACgJQAVh1AOAZQALAVAABgQAABfgLAzQgMA7gThBIgGgfQgdAggWAPQgZASgQABIgDAAQgPAAgLgMgAAKgVIgCAAIgCACQgGAHgFAOQgGAPgDAQQgDARAAAMQACAYAPgBQAIgBALgJQANgKAKgNIAAgMQgLAKgFAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIABgFQAEgNgBgLQAAgQgJgQQgDgIgEAAIgBAAg");
	this.shape_221.setTransform(113.1663,43.9366,0.3723,0.3723);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAvIiRgtIAAgEICXgsIABAAICLAsIAAAEIiSAtgAiHAAICHApICJgpIiDgog");
	this.shape_222.setTransform(99.1893,30.1758,0.3723,0.3723);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("AiRAAICXgrICMArIiSAsg");
	this.shape_223.setTransform(99.1893,30.1758,0.3723,0.3723);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgrAEIgbgJIAGgTIBCATIBDgUIACAZQgUADgeAMIgZALQgKgKgdgMg");
	this.shape_224.setTransform(99.0869,31.8976,0.3723,0.3723);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AhoBFIAmhAQAyhCA/gQIAngFQAiAEgaAtIgDAEQgVAWgNAKQgZAVgcANIg/AfQgXAKgIAFgAgagKQgaAZgUAkIBFgiQAZgLAXgSQAMgLAUgUIABgBQAIgPgQAAIgSADIAAAAQgrAKgjAkg");
	this.shape_225.setTransform(102.1383,38.3288,0.3723,0.3723);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAtByQgJgCgHgFQgbgQgLgpIgCgGQgGgRAAgHIgDgRQAAgDgDgGQgFgLgGgIIgQgXQgRgWgGgUIgHgYIAVAMIAXANQAYAQAPAOIAAAAQApAoARAcQAaAsgIArIgBADQgHALgKADQgFACgFAAIgGgBgAgSgmIABABQAGAIAGAOQAFALAAAGIACASQAAADAFAOIACAHQAJAhAVAMQAEADAFABQAEABADgBIAFgDQAFgigVgkQgQgaglglIgbgVg");
	this.shape_226.setTransform(101.1362,44.8543,0.3723,0.3723);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AgVAfIgGgCQgBgFgGgGIgGgEIAHAAIgDgNIANAPQAFAEADgJQACgHAEgEIAEgEQAKgIAIAHQAJADAHgJQAGgGABgOIAFAEQAAAKgDAHQgEALgFgBIgLABQgKgBgGAFIgDAFQgBAKgIAHQgEAFgFAAIgCgBg");
	this.shape_227.setTransform(96.9011,42.4178,0.3723,0.3723);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AAaAhQgDgGgbAEQgDAAgGgDQgJgGgIgQQABgKgHgJIgFgLIAGAAQAHABABAFQABgGgCgHIACgCQACgBADAIIAAAMQABAMAKAFIADAEQAHAEAIAEIAPACQAPADAEAIIgHAGg");
	this.shape_228.setTransform(97.0766,39.8531,0.3723,0.3723);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AgGABIgZAWIALggQAdgXAOAOQAKALgCAfQgMgkgZANg");
	this.shape_229.setTransform(97.6037,41.2843,0.3723,0.3723);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_230.setTransform(98.5514,39.4939,0.3723,0.3723);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAPgJQgBAFgFAEQgKAKgSgB");
	this.shape_231.setTransform(98.0116,41.7276,0.3723,0.3723);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AglAPQgIgIAVgHQAKgEAMgCQAUgEADAGIAAACQgBAIgXACIAAgFQAQgBADgEQgFgCgMADIgTADQgSAFAEAEQAFAFAWgDQASgDATgGQAIgCAFgDQAFgCABgCIgBgBQgKgKggAEQgSACgRAGQgRAEgDAFIgEgDQAFgEARgGQATgHASgCQAigDALAKIABAAQACADgBAEQgCADgGACQgGAEgIACQgTAHgUADIgNABQgMAAgEgEg");
	this.shape_232.setTransform(94.9185,48.3229,0.3723,0.3723);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgiAMIgCgBIgBgFIAFABQAhAKAggTQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgFgDgLgBQgLAAgMADQgLADgBAEIACACQAFADANgEQAIgFgKABIgBgFQAVgCgGAIIgLAHIAAAAQgSAGgFgGIgCgGQABgGAOgFQAJgDAPAAQASABAEAHQACAEgCADIgBAAQgWAPgWAAIgCABQgKAAgOgEg");
	this.shape_233.setTransform(98.8914,34.1696,0.3723,0.3723);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#201F1F").s().p("AhgC+QBah3AWiIQAHgrAAgoIgDgkIAEACQAKAEAJAAQAJABAGgCQAcgGAHgHIAEACIgiCaQgPBLgmCNIgBAEIgDgDQgMgMgtALIgqAOgAARgxQgXB+hSBuQBJgaAVAPQArijAKgyIADgTIAdiCQgLAIgVAEQgGABgKAAQgKgBgHgDQAFA6gOBGg");
	this.shape_234.setTransform(96.7136,41.3536,0.3723,0.3723);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AAShBQAIgrgBgpIgCgfQAQAHAUgDQAdgGAHgJIgeCIIgDANIgBAGQgPBLgnCNQgMgNguALIgrAOQBah3AWiKg");
	this.shape_235.setTransform(96.7229,41.3443,0.3723,0.3723);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AglASQgQgDAAgGIgBgBQAAgHAQgGQAPgHAWgDIAEAAQATgDAQACQAPACACAHQAAAHgQAHQgPAGgWADIgEABIgVABIgOAAgAADgLIgDABQgWAEgOAFQgNAFAAAEQABAEAMABQAQACASgDIADAAQAVgDAPgHQANgEAAgEQAAgEgNgBIgMgBIgWABg");
	this.shape_236.setTransform(95.0383,48.3124,0.3723,0.3723);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AgjAPQgPgBgBgGQgBgGAPgFQAPgGAWgEQAUgDAQACQAQACAAAFQABAGgPAFQgPAHgVADQgNACgMAAIgMgBg");
	this.shape_237.setTransform(95.0764,48.3847,0.3723,0.3723);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AgZAPQgMgDgBgGQAAgGALgGQALgGAPgCIACgBQAPgBAKACQAMACABAHQAAAGgLAGQgJAFgRADIgCAAIgLABIgOgBgAgZgCQgIADAAAEQABAEAIABQAJACAPgBIABgBQAQgCAJgFQAIgDAAgEQAAgDgJgDQgMgCgMACIgBAAQgOACgLAGg");
	this.shape_238.setTransform(98.9287,34.2476,0.3723,0.3723);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("AgYANQgLgCAAgGQgBgFAKgEQALgGAPgCQAOgCALACQALACAAAFQABAFgKAFQgKAGgQACIgNABIgMgBg");
	this.shape_239.setTransform(98.8554,34.136,0.3723,0.3723);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#EE3338").ss(0.5,0,0,2.6).p("AAEAFQgFgFAAgFQAAABAAAAIgCAHIAFAGg");
	this.shape_240.setTransform(97.2771,42.1232,0.3723,0.3723);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AgDABIACgHIAAgBQAAAFAFAFIgCAEg");
	this.shape_241.setTransform(97.272,42.1913,0.3723,0.3723);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AgECgQgKgFgIgLQgHgKgEgMQgEgMAAgSIAFhQIADgzIACgQIglANIAAgaIAlgKIgEhMIArgKIAAAGIAAAjIgDAfIAzgSIAFAVIAAAFIgFACIg2ANIgSCBIgDAfQABAOACALQABAJAFAIQAEAIAEACQAGADAGAAQAGAAACgDQAFgCACgGQADgGABgJQACgIAAgLIgBgHIgBAIIgEAIIgFAFQgCACgEAAQgJAAgHgHQgCgDgCgFQgCgDAAgHQAAgGACgFQACgHADgEIAAAAQAFgGAFgCQAEgCAGAAQAGAAAHACQAFACAHAHQAFAEAEAHQADAGAAAHQAAAMgDAMQgDAMgGALQgFAKgIAHQgIAGgJAAQgNAAgJgFgAAoBRIAEAKIACAKQAAAJgDAMQgBALgEAFIACgCQAFgIADgLQACgMAAgKQAAgFgCgDQgBgDgGgFQgDgEgDgCQAEAFABADgAgSCDIgEgNQgDgNABgOQAAgLACgVIAIg2IAMhOIAAgEIAUgHIAOgEIAWgEIgCgFIgbAJIgVAIIgHADIABgJIAEgmIAAgcIgWAGIADA2IAAASIgBAEIgkAKIAAADIAkgNIABAHIgJCbQAAAPADALQACAJADAEIAAAAgAALBNQgDADgCAEIgBAIIABAGQABADACABIACACQgCgEAAgEIABgKIACgIQACgEAEgCIgHAFgAAXBQIgCADIgCAGIAAAHIAAACIABgBIABgHIACgIIAJAHIABABIgCgEIgDgFIgDgBg");
	this.shape_242.setTransform(87.0807,42.6566,0.3723,0.3723);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AgSCNQgNgSAAgfQAAgOAEhCQAFg3AAgUIglANIAAgOIAlgKIAAgSQAAgZgDgiIAhgHQAAAcgFAtQAXgKAKgCIAVgHIADAQIgbAFQgJACgWAIQAAAOgKBBQgLA9AAAYQAAAdAJAQQAJAPAQAAQAMAAAHgOQAGgNAAgXQAAgJgEgJQgFgJgGAAQgEAAgEAGQgDAGAAAJQAAAHAFAAQAGAAACgLIACACQAAAJgDAFQgEAFgEAAQgGAAgGgGQgGgFAAgJQAAgKAIgJQAGgIAJAAQALAAALAJQALAKAAAKQAAAZgMAUQgLAUgPAAQgWAAgOgSg");
	this.shape_243.setTransform(87.0714,42.6659,0.3723,0.3723);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AhZB2IgIgDIgHgHQgDgEgCgGQgBgEAAgGQABgEADgEIAHgFIAIgEIAIAAIAHACQAEACACADQACADABACIAAgBIAEgSIAFhNIAAhUIgBAAIgOgDIgDgBIABgQIApAGQAQACAHgBIAHAAIgDASIgSgBIgIBKIABAAIAFABQAIACAHAAQAHABAGgBIAhgEIAEg3QABgLAEgHQAEgIAHgGQAGgGAIgCQAIgDAJACQAFAAAGAEQAGAEADAFQADAFACAGQABAHAAAGQgBADgDAFQgCADgEADIgJAEIgJABIgHgDIgGgEIgDgGIgBgDIgDAMIgGBCIgCAqIgBAeIAFAAIAMgCIAFgCIADATIgsADIgVAEIACgVIAVgBIgCg0IgBgYIglACQgLABgJgBIgNAAIgIAvQgCATgDALQgDAJgDAHQgDAHgFAHQgFAGgHADQgEACgFAAIgFAAgAhXBkIABACIABAAQACABACgBIgBAAQgDgBgCgDgAhjBXIgBACIAAAHIADAEIgBgDIABgIIABgDgAA8hjQgEAEgEAHQgDAHgBAIIgEA6IABAAIgBAHIABAqIAIhkIAEgRQAEgKADgFIAEgGgAgxAQIAEgbIAAAAIAAgFIAFggIAFgzIAAgBIgOgCgABlhXIgDAIIgBADIACgCIACgDIAAgIgABOhkQgCACgDAFIgCADIABgBIAFgDIAHgBIAGADIgBgFIgDgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_244.setTransform(79.4675,44.6949,0.3723,0.3723);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AhYBxQgGgBgHgHQgFgIABgIQABgFAHgFQAJgEAEABQAHABACAEQADAFAAAEQAAACgDADIgGACQgFgBAAgHIACAAIACACQADABABgFIgBgEQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDAAgDADQgDACgBAFQgBAIACAEQABAFAEABQALABAHgLQAHgLAEgXQAFghAAgsQACgugDgrIgFAAIgMgDIABgGQAoAIAUgCIgBAIIgTgBQgHBAgDATIAMADQAPACAOgBQAPAAAXgEQABgrACgQQADgTAMgKQAMgLAPADQAKABAHAKQAGAJgBALQgCAGgHAFQgIAFgFgCQgGgBgEgEQgFgFABgDQABgEAEgEQAFgDACABQAFABABABIABADIgDAFQgCgGgDAAQgCAAgBAFQAAAEACAEQABACADABQADAAAEgFQAEgHAAgGQABgHgDgFQgDgGgGgBQgJgCgHANQgHAKgDAUQgDAUgDAuQgDAvAAAfQAIACAPgEIABAIQgSABgJAAQgMAAgOADIAAgJIAWgBQgDhIAAgQQgTAEgXABQgUAAgRgCQgKBCgEAPQgFASgIAKQgHAKgKAAIgEAAg");
	this.shape_245.setTransform(79.4761,44.7033,0.3723,0.3723);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgEgDgHQgCgFAAgIQAAgIADgFQACgHAFgFQAFgHAGgCQAFgDAGAAQAOAAAJAHQAIAGADAOIABADIgFABIgCAAIgBgCQgEgGgEgCQgFgDgHAAIgKABIgJAFIgHAHIgCAHQAAAGACAEQABAEAFADIAHAEQADACAEAAQAFAAAEgDQADgDAAgGQAAgHgCgCIgBACQgBAHgCADQgEADgEAAIgEgBIgEgEIgCgEIAAgEQgBgEACgDIAEgEIAFgDIAGgBIAJABIAIAEQADADACADQACADAAAFQAAAFgCAFQgDAFgFADQgDADgGACIgKACQgFAAgHgDgAgLAcIgHgEQgEgDgCgGQgDgGAAgGQAAgEADgFQACgFAGgEQADgDAIgDQAFgCAGAAQAJAAAFAEIAGAEQgDgGgFgDQgHgGgMAAQgFAAgFADQgEACgFAFQgEAFgCAGQgCAFAAAGQAAAHACAEQABAGAFADQAEAFAFABIAAAAgAAOAAQADAGAAAIQAAAJgFAEIAAAAIAEgCQAFgEABgDQABgCAAgFQAAgDgBgDIgFgFQgDgBgDgBIgDgBgAgIAHIABACIACADIACACIABABIAEgCIABgBIgDAAQgDAAgBgCQgDgCAAgEIAAAAgAgCADIAAABIAAACIACABIADgBIAFgDQgCgDgEAAIgCABIAAABIgBAAg");
	this.shape_246.setTransform(106.9049,38.9803,0.3723,0.3723);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgWAYQgIgIAAgOQAAgMAJgMQAKgKAKAAQAaAAAGAZIgCAAQgIgNgPAAQgLAAgKAHQgJAIAAAIQAAAMAIAHQAJAHAHAAQAPAAAAgPQAAgPgNAAQAAAAgBAAQgBAAAAAAQAAAAAAABQgBAAAAAAQgDABAAADQAAAFAFAAQACAAAEgCQgCALgGAAQgDAAgDgEIgDgHQAAgGAFgDQAFgEAEAAQAJAAAGAFQAHAEAAAIQAAAKgIAGQgJAGgJAAQgNAAgJgJg");
	this.shape_247.setTransform(106.8955,38.9803,0.3723,0.3723);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAWgGIAGgCIAAAWIgSAEIgJCpIARgBQAHAAAOgCIAFgBIAAAXIg+ABIgaAGgAgNhWQAHBJACBPIAGidQgGACgIAAIgCAAg");
	this.shape_248.setTransform(107.0352,44.9834,0.3723,0.3723);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("AgkBcIAagBQABhcgKhVIgXgBIAAgIIAeAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQguAAgMABIgUAEg");
	this.shape_249.setTransform(107.0352,44.9927,0.3723,0.3723);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AgNAhQgFgCgFgFQgFgFgDgGQgCgGAAgHQAAgFACgIQADgGAFgGQAGgGAEgDQAGgDAGAAQANAAAJAHQAKAGACAOIABADIgDAAIgCAAIgBABIgBgCQgEgGgFgDQgFgDgIAAIgJACIgKAFQgDADgDAEQgCAEAAADQAAAGACAEQACAEAEADQADADAEACQADABAEAAQAGAAADgDIACgCIABAGIgCACIAGgEIAGgGQACgEAAgEQAAgDgCgDQgCgEgCgBIgGgCIgGgBIABAEIgEgBIgCABIgBABIgBAAIgBABIAAABIAAACIADABIACgBIADgBIABgBIAAgDIACACIgCABIACAGIgEAHQgDADgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgEgEIgCgEIgBgEQAAgEABgCIAEgEIAFgEIAGgBIAJABQAEACAEACQADACADAEQACAFAAADQgBAGgCAEQgCAEgFAEIgKAFIgKACQgGAAgGgDgAgLgcIgJAIQgEAEgCAHQgDAGAAAFQAAAFADAGQACAGAEAEQADADAGADIACAAIgIgFQgEgDgDgGQgCgFAAgHQAAgDACgGQAEgGAEgDQAGgEAFgBQAFgCAFAAQAKAAAFADIAHAGQgDgHgFgEQgIgGgMAAQgGAAgEACgAgHAHIAAACIACADIACADIABAAQABAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIABgCIgCABQgCAAgDgCQgDgDABgDIAAgDgAALAVIgCgLIABgDIAAgDQACADAAAHIgBAHgAAJAKg");
	this.shape_250.setTransform(65.6474,34.95,0.3713,0.3713);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AgWAYQgJgJAAgNQAAgNAKgLQAJgKALAAQAbAAAFAZIgCAAQgIgNgQAAQgKAAgJAHQgKAIAAAIQAAAMAIAHQAIAHAIAAQAOAAAAgPQABgPgMAAQgDAAgCABQgCABAAADQAAAFAFAAIAGgCQgCALgHAAQgDAAgCgEQgDgEAAgDQAAgGAFgDQAEgEAFAAQAIAAAHAFQAHADAAAJQAAAKgIAGQgJAGgKAAQgMAAgJgJg");
	this.shape_251.setTransform(64.7623,38.9803,0.3723,0.3723);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AgpBXIAbgBQAAhVgJhSIgYgBIAAgSIAjAAIAPgCIAVgGIAHgCIAAAWIgSAEIgJCpIARgBIAVgCIAGgBIAAAXIg/ABIgaAGgAgNhWQAIBJABBPIAHiaIAAgDQgHACgIAAIgCAAg");
	this.shape_252.setTransform(64.8926,44.9834,0.3723,0.3723);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("AgkBcIAagBQAAhcgJhVIgWgBIAAgIIAdAAQAOAAAYgIIAAAKIgTAFIgICxQAaAAARgCIAAAMQgtAAgMABIgVAEg");
	this.shape_253.setTransform(64.8926,44.9927,0.3723,0.3723);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("Ag8g3QAwgCA1ANQAbAGASAHQgEAJgfASQgNAJgiAPIhZAkg");
	this.shape_254.setTransform(50.9413,45.6765,0.3723,0.3723);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AgZgcQAkgNAXADQAPgBgLAPIgOAPQgJAJgdAUIgcATg");
	this.shape_255.setTransform(50.6354,40.4059,0.3723,0.3723);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#201F1F").s().p("AhFAlQAtgLAvghQAYgSAOgPIAJApQg0AkgwAEg");
	this.shape_256.setTransform(78.5089,37.6773,0.3723,0.3723);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("AAFAJIhLAYIgJABIBShFIBNA/IgGAHQgEgChBgYg");
	this.shape_257.setTransform(80.6681,37.5377,0.3723,0.3723);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AgiCQQgLgDgHgHQgJgGgFgKQgEgIAAgLQAAgNAIgLQAHgMAOgHIAFgDIABACIAAgBIACgcQgJgEgEgDQgIgFgGgJQgGgHgDgJQgCgJAAgLQgBgPAFgNQAFgNAJgMQAIgLALgGQALgGALAAQAIAAAFACIAIAEIABgCIABABIABABIAAAAIABAAIABABIABABIABABIABAAIABABIABADIAAABIACAEIgIAGIgDACQAGADAFAGQAHAHADAJQAEAIAAALQAAANgFAMQgEALgJAJQgJAKgJAFQgIAEgHABIgDAbIAUgNIANgGQAFgDAJgCIANgBQAHAAAHADQAFAEAEAFQAEAHADAHQACAHAAAJQgBAegYAXQgMALgQAGQgNAGgTAAQgMAAgKgEgAgrBeQgBAGADAJQADAHAEAFQAFAHAEABQAGADAHAAQAPAAAKgEQAMgFAJgJQAIgJAFgKQAEgHAAgKQAAgIgEgDQgEgEgFAAIgLAAIgLADIgMAEIgXAOIgNAKIgLgIIAAAIgAg2BRQgGAIAAAKQAAAIADAGQADAHAIAGIAFAEIgCgCQgFgJgDgHQgCgIAAgKQgBgJADgIgAA3A7QAGAHAAAMIgBAJQACgIABgHQgBgHgBgGQgBgFgEgFQgDgFgEgCQgCgCgGAAIgLABIgYAKIghAVIgCAHIARgLIAZgMIAMgDIANgBQAKAAAHAHgAgYhXQgGAEgFAIQgFAHgDAKQgCALAAAKQAAAOACAIQACAJAEAGQAEAGAEADQADADAFAAQAHAAAFgEQAGgDAEgHQAEgHAEgLQACgKAAgJIgCgNQgBgGgFgFQACADAAAFQAAAHgFAHQgHAGgIAAQgKAAgGgIQgGgHAAgLQAAgFADgEQABgEAEgEQAFgFAEgCQAGgCAEAAQAJAAAHAEIADABIgCgCQgDgDgEgCQgEgCgGAAQgIAAgGAEgAg6g4QgDAMAAANQgBAIADAJQACAHAGAHIAGAGIAAgBQgFgGgCgMQgDgIAAgQQAAgMADgMQADgJAEgHQgIAJgFAMgAATg3QACAJAAAHQAAAMgDAKQgEAMgEAFQAIgIADgIQAEgIAAgNQAAgHgDgIIgHgMgAgPgzIABABIABgBIABgBIAAAAIgEgCgAgMhIIgDACIgBAEIAAABIADgEQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAFAAADADIgDgDQgDgCgEAAgAALiSIABgBIAFAJIAAABg");
	this.shape_258.setTransform(71.3704,45.4208,0.3723,0.3723);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("AgyBuQgPgNAAgSQAAgWAbgRIACAEQgNAKAAAUQABARAJANQAKANARAAQAfAAASgTQATgUAAgUQAAgJgFgGQgFgGgIAAQgOAAgKAEQgKADgNAIIgXAPIgEgCQAEgJACgWIADggQgSgEgKgPQgMgOAAgUQAAgcASgWQARgVAUAAQANAAAIAIIgCgEIADABIACACIACACIABACIgFAEQgHgJgNAAQgSAAgLASQgLARAAAYQAAAZAIAQQAJAOAMAAQAQAAAKgRQALgTAAgVQAAgOgIgNQgIgMgKAAQgFAAgDAFQgEAFAAAGQAAASAIAAIAFgDQACgDABgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADQAAgEACgDQADgDACAAQAIAAAAAKQAAAFgEAFQgFAFgGAAQgIAAgEgHQgFgGAAgIQAAgHAHgHQAHgHAIAAQAPAAANANQAMAOAAASQAAAZgRASQgQARgTAAQgCAigBAIQAMgHAKgHQADgDAQgHQAOgGALAAQAMAAAHALQAIAKgBAQQAAAcgWAVQgXAWgiAAQgWAAgQgNg");
	this.shape_259.setTransform(72.2375,42.1157,0.3713,0.3713);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgkgDIAogjIAgBNg");
	this.shape_260.setTransform(54.0592,51.6194,0.3723,0.3723);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AgZgkIAzgHIgNBXg");
	this.shape_261.setTransform(49.2567,53.7414,0.3723,0.3723);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgoADIBRgxIglBdg");
	this.shape_262.setTransform(55.1481,37.2399,0.3723,0.3723);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AgdAqIAkhaIAXBhg");
	this.shape_263.setTransform(49.8989,34.0476,0.3723,0.3723);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AgahhIA0ALIgyC4g");
	this.shape_264.setTransform(46.8182,55.4167,0.3723,0.3723);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AgjhfIBHC0Ig0AKg");
	this.shape_265.setTransform(46.8555,32.6236,0.3723,0.3723);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag2g9IAggZIBNCtg");
	this.shape_266.setTransform(52.9795,54.5139,0.3723,0.3723);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("Ag2BDIBtiYIhJCrg");
	this.shape_267.setTransform(53.5659,33.6474,0.3723,0.3723);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#3F4096").s().p("AhoAtIAAgBIgBgCIgBgDIAAgGIAAgBIAAgBIAAAAIAAgBIAAgCIAAgLIAAgFIAAAAIAAgEIAAgBIAAAAIAAgCIAAgKIAAAAIgBAAIgBAAIAAAAIgCAAIgCAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIgDAAIgGACIgHAAIgBAAIgCgBIgBAAIgBABIgDABIgBgBIAAAAIgBABIgBABIgDgCIgDABIgBAAIgBgBIAAABIAAAAIgCAAIgCAAIAAAAIgCAAIgDAAIgCAAIAAAAIAAACIAAAGIgBADIABADIAAABIgBACIABABIAAABIgBAHIAAACIAAAEIABACIAAABIAAABIAAACIAAACIgBABIgBAAIgBAAIgDgBIgBgEIAAgGIgCgDIgBgCIABgDIAAgBIAAgCIAAgCIAAAAIgBgMIAAgDIAAgBIgCgBIgBAAIAAgBIgBgFIAAgBIACgBIADgCIAAgGIAAgBIAAgBIAAgDIAAABIAAgFIABgDIgBgKIABgEIAAgBIADgCIABAAIACAAIABABIABABIABAAIAAAEIABABIABABIgBABIAAACIgBABIAAAAIABABIAAABIAAABIgBALIABACIAAABIgBADIgBACIAAABIACAAIABAAIAEAAIAGAAIABAAIACAAIACAAIAAAAIACAAIAGAAIABAAIAAAAIABgBIABABIABAAIADAAIABAAIABAAIABAAIAPgBIADAAIABgBIAAgBIAAgDIAAAAIAAgDIgBgGIAAgBIABgBIgCgJIAAgDIABgBIABgCIAAgBIgBgCIAGAAIABABIAAABIABgBIACAAIAAACIABgBIAAAHIgBABIABADIABABIAAACIAAABIAAABIgBADIAAACIABABIgBAKIABgBIAEAAIAFgBIAHAAIADgBIABAAIACABIABACIgEACIgBABIAAgBIgCAAIgBACIgBgBIgCAAIgCABIAAABIgBAAIgBgBIgEABIgBACIgBACIgCgBIgBgBIgBABIAAABIAAADIAAABIAAAFIgBABIABABIAAACIgBACIAAAAIAAACIABABIgBABIAAAHIgBAGIAAAAIAAADIgBABIAAAAIABABIgBACIABABIAAADIAAABIAAACIAAAAIgBACIgBADIgDACgAhmAFIgBABIAAAAIABABIAAABIgBAEIAAAMIAAACIAAAAIAAADIAAAAIABAAIABgHIAAgIIABgBIgBgCIABgDIAAAAIgBgBIABgBIAAgCIAAgDIgCAAgAilAZIAAgBIAAAAIAAgCIgCABIABAAIAAAAIABACgAilgqIgBADIAAACIABAHIAAAAIgBADIABAGIAAAAIgBABIABABIAAABIgCAIIgBABIgCACIABADIABABIABACIABAPIAAACIAAACIABACIABgDIgBgCIgBAAIACgDIgBgDIAAAAIABgEIAAgFIABgDIgBAAIAEgCIAEgBIAAgCIADACIABAAIABAAIAAABIAAAAIACgCIABABIABAAIADAAIgBgCIgDgBIgFAAIgEABIgBAAIgBgBIgFAAIABgCIABgDIAAgDIAAgBIABAAIgBgCIAAgBIABgLIAAAAIAAgBIAAgEIAAgCIAAAAIgBgBIAAgCIgCgBgAhmgIIAAAIIADgCIgDAAIAFgIIgBAAIAAgCIABgLIgBgDIAAgBIABgCIAAgBIAAgDIgCgEIAAgBIABAAIAAgBIgBAAIAAgCIgBAAIgBAAIAAABIgDAAIgBABIABABIACAIIAAABIAAACIABAGIAAABIgBACIABADIAAABIgBABIABABIACACIgDAAgAiPgHIABABIABAAIAAgBIABAAIACABIAAAAIACgBIACgBIACAAIAAAAIABABIAIABIAFgCIADgBIADAAIACAAIAAgBIABABIABAAIAAgBIABAAIgBAAIgQABIgBAAIAAABIgDAAIgDgBIAAAAIgBABIgBAAIgKAAgACXAsIgBAAIgDAAIgCAAIgBAAIgBgBIAAAAIgEgBIgDgCIAAgBIgBgBIgBgCIAAgBIAAgBIgBAAIgBgBIAAgBIgCgIIAAgGIABgCIAAgDIABgDIgBgCIAAgBIACgBIAAAAIAAgBIABgBIgBgBIAAgDIABAAIgBgBIAAgBIABgBIgBgFIAAAAIABgCIAAgCIABgDIABADIABAAIABAAIAAgBIABgBIAEgHIABgBIAAgBIAAgCIABAAIACgCIABgCIAAAAIACgBIACgCIABgBIABABIABgCIACgBIABAAIABAAIACAAIABABIABAAIABACIAAABIADAAIAAABIAAAAIADACIgBABIAAAAIABAFIAAABIAAABIAAAEIAAABIgBABIgCAEIAAAAIgDAEIAAACIAAABIgFADIgEACIAAAAIgBABIgBAAIgEACIgCAAIgCABIgCAAIgBgBIgBAAIgCAFIAAABIgBADIgBABIABAFIAAABIgBAAIAAAGIABACIABAAIAAABIAAABIAEACIABAAIAAABIACAAIAGAAIACAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIAAAAIAAgBIABgCIABgBIABAAIABgBIACgCIACgBIACAAIAAAAIABADIAAACIgBACIgCAEIAAABIgBAAIgBACIgCABIgBAAIgDADIgBACIgCAAIgBABIAAAAIgCAAIgBABIgBAAIgBAAIAAABIgCABgACTApIACAAIADgBIAAABIABgBIABAAIABAAIAAgBIACAAIABgBIABAAIAAAAIABgBIABgBIADgDIABAAIABAAIABgCIAAgBIACAAIABgDIgDACIAAAAIAAABIgBAAIgBABIgBABIgBAAIgBACIgCAAIgBABIAAAAIgBABIgCACIgBAAIgDAAIgKgBIgCAAIAAgCIgDgBIgBgCIAAgBIgBgBIAAABIABABIAAABIAAABIABAAIACACIAAAAIAAADIABAAIAEABIABAAIAAABIAAAAIABgBgACIAKIAAgCIABgDIACgDIABAAIADAAIABAAIABABIABgBIACAAIAEgCIAAAAIABAAIABgBIADgBIAFgDIAAgCIAAgBIACgEIACgEIAAgBIAAgDIAAABIgBACIgCAEIAAABIgBABIAAAAIAAABIgDACIgCABIAAABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCABIAAAAIgBAAIgCAAIgCACIAAAAIgBAAIgCgBIgBAAIgBgBIAAAAIAAAAIgCgBIABgCIADgEIgCAAIgCABIgCAAIABAFIAAAAIAAABIgBAAIACACIgBAAIgBABIAAACIABABIgBACIAAABIAAABIgBAAgACZgVIgBAAIgBACIgBABIgCAFIgCABIAAABIgDAHIABAAIAAAAIABABIABgBIACgBIAAAAIAAgBIACAAIAAAAIACgBIABAAIABgBIAAgBIAAAAIABgBIAAgBIABAAIACgBIAAgBIABAAIAAAAIACgBIAAgBIAAgBIACgEIAAgCIAAgCIgCgBIgBABIgBAAIgBgBIAAACIgCAAIgCAAIAAABIAAABIgBAAgACTgVIgBAAIgDAJIgBAAIAAABIAAABIABgCIABgCIABAAIACgFIAAgBIACgBIAAgBIAAgBIAAAAIABgBIAAAAIAAAAIABgBIABAAIABgBIACgBIABAAIAAgBIACgBIABAAIAAABIACgBIABAAIABABIAAgBIgCgBIgDAAIAAgBIgCAAIAAABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAgAg6ArIAAAAIgBABIgBgBIgBgBIgGAAIgBAAIgCgDIgBgDIgBgBIABgBIAAgBIgCgFIgBgBIACgCIgCgDIABgBIABgCIAAgCIgBgBIAAgBIABgCIAAAAIACgGIAAgBIABAAIAAAAIAAgBIAAgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABgDIAAgBIACgBIgBAAIAAgBIADgEIAAAAIAAgBIAAgCIACAAIAAgBIAAgBIAAgBIAAgCIABAAIADgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIACgBIACgBIAAACIAAABIACABIADAAIABABIAAAAIABABIACADIABABIABABIAAAAIABABIADAEIACAHIAAACIABAFIAAAAIgBADIABABIAAABIgBADIAAABIAAACIAAACIgCACIAAABIgBABIAAABIgBADIAAABIgBAAIgBAAIAAABIgCACIgBACIAAABIgBABIAAACIgBAAIgCABIgBAAIgBABIgDACIAAAAIgCADIgDABIgBABIgCAAIAAAAIgCABIgBABIgDACgAg6AoIABAAIAAgBIABAAIACgBIgFAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIgBgBIgBgBIgBgBIgBgBIAAAAIABACIABADIAFAAIAAAAIABABIAAgBgAg8gCIAAACIABACIgBABIgBAAIAAACIgBABIgBABIAAACIgCACIAAAEIgBAFIAAABIAAABIAAADIAAAAIgBADIABADIABACIABAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIABAAIAAgCIABABIABAAIAAgBIABAAIABAAIAAgBIABgBIABAAIAAgBIAAgBIACAAIABgBIAAgBIACgCIABAAIABgBIABgBIACgBIAAgCIABgCIAAgBIgBgBIABAAIABAAIAAgBIgBAAIACgCIAAgCIAAAAIAAgBIAAgBIAAgBIgBgBIACgCIAAgBIgBAAIAAgCIgBAAIABgBIgBgBIAAgEIAAgCIgBgBIgBgCIAAAAIgBgBIAAgBIgBAAIAAgBIgCgBIAAgCIAAAAIAAAAIgBAAIgBgBIgDgCIgBAAIgDAAIAAAAIAAAGIAAACIgDAAIgEACIAAABIgBABIgBAAIgBAEIAAABIgBAAgAhFAOIgBAAIAAADIABABIABgDIAAgBgAhEAMIAAAAIAAgCIAAAAgAg9gMIgBACIAAACIgBACIgCACIAAAAIABACIAAAAIgBACIgBACIAAADIABAAIAAgCIACgDIAAAAIAAgDIABgBIABgBIAAgEIAAgBIABAAIABgBIAAgBIABgBIAFgDIACAAIAAgEQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAFAAIACAAIAAAAIAEACIAAAAIAEACIgEgDIgBAAIgDgCIgBAAIgBAAIgBAAIgDAAIgBAAIgBgBIAAABIgBAAIgCADIgEACIAAABIgBADIgBABIABABIgBABIgBAAIAAAAgAghgOIAAACIABABIABAAIAAABIACACIAAAFIAAABIABABIABABIAAAAIAAAAIgBgEIgBgBIAAgBIAAgCIgCgEIgBgDgABVAoIgBAAIgBAAIgBgBIAAAAIgBAAIgBABIAAgBIgBAAIgCAAIgDgBIgBAAIgBABIgCABIgBgCIgBAAIAAgBIgEgDQgBgCAAgDIAAgCIABAAIACgBIAAAAIABgBIABgCIABACIACAAIACABIAAACIABAAIAAADIADAAIABABIABAAIASgCIAFgBIAAAAIABgBIABAAIABgBIADgBIACgBIABgBIAAgBIgBAAIgBgBIAAgBIAAAAIgCgBIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgCAAIgCgBIgBAAIgDgBIgBABIgBgCIgBAAIgBgBIgFgCIAAAAIgBgCIgEAAIgBgBIAAAAIgFgDIAAAAIgBgFIgCgCIAAAAIgBgIIABgBIAAAAIAAgCIACgEIACgCIAAgCIABAAIABAAIAEgFIABAAIAIgEIAAAAIAJgBIAAAAIAIAAIABABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAABIAAAAIABABIABABIAAACIAAACIgBABIAAACIgCABIgDgCIgBgBIgCAAIgBAAIgBAAIAAAAIgBgBIgCABIgDAAIgCABIgBAAIgBABIAAAAIgCAAIgBABIgDABIAAABIgBABIAAAAIgCACIgBABIAAABIgCABIgCAFIABAAIAAACIAAABIACABIABABIAAAAIACABIABAAIABABIABACIAEAAIABABIADABIABAAIAAAAIAGACIABAAIAAABIAEABIACABIABAAIABABIAAABIACAAIABAAIACABIACABIABACIABABIAAABIAAAAIACABIgBACIAAAAIABABIAAABIAAABIgBABIgCAGIgBAAIAAACIgEAAIgBABIgBABIgCAAIgBABIgBAAIgCACIgBgBIAAAAIgBAAIAAABIgCAAIgCAAIgCAAIgBAAIgBABIgBgBIgDAAIgBABIgBAAIAAgBIgCACgABYAjIABABIABgBIABAAIABAAIACAAIACAAIACAAIABAAIACgBIADAAIAAAAIAAAAIAEgCIABAAIACgBIABAAIAAgBIgBgBIgEACIgCABIAAAAIgBAAIgBAAIgXADIAAAAIABAAIABAAIABAAIABABIACgBIAAAAIABAAgABDAgIACABIABAAIABABIAAAAIACgBIgCAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAgAByAXIAAAAIABABIAAABIgCACIAAAAIgBADIACgBIACgFIABAAIgBgBIgBgBIAAAAIgBgBIgBgDIgBgBIgBgBIgDAAIABAAIAAABIABgBIABACIAAAAIABAAIAAACIACABIABABgABYAIIADACIABAAIABABIABAAIABABIACABIABAAIABAAIADABIABAAIACAAIAAAAIgCAAIgBgBIgDgBIAAAAIgGgDIgBAAIAAAAIgDgBIAAAAIgCgBIgBAAgABNgQIgCACIgBADIgBABIAAACIABgDIACgCIABgBIACgCIACgDIABAAIABgBIABgBIABAAIABAAIABgBIABAAIACgBIABAAIACgBIADgBIAAgBIABAAIABgBIADACIABAAIADABIACAAIAAABIABAAIAAgBIgCgCIAAgBIgCAAIAAgBIgFAAIgIACIgIAEIgDACIgBACIAAABIgCAAgAAtAmIgBAAIgBAAIgCgBIgBgBIgEgEIgBgBIgBgFIgCgBIAAgDIAAgBIgBgBIAAgEIABgBIAAgBIAAgBIAAgBIgBgBIAAgEIgBAAIAAABIgBABIAAAAIgBAAIAAABIgBABIAAACIgBAAIgCABIgBACIgCACIgBACIgBABIgBABIgFAFIAAAAIgDAEIAAABIgDABIgBABIgGAEIgBAAIgCgCIgBAAIgBgBIgBgBIAAgBIgBAAIAAgBIAAgBIgCgCIAAgBIAAgBIgBgDIAAgBIABAAIgBgCIAAgDIAAgCIAAgCIABgBIAAgBIgCgBIABgCIABgCIAAAAIAAgBIgBgBIABgBIAAgDIAAgEIAAAAIABgLIAAgDIgBgFIAAAAQgBgFAFAAIAAAAIAEACIABABIAAABIAAABIgBADIAAANIAAACIAAACIgBABIAAADIgBACIABAAIABACIgCABIAAAAIABABIAAABIgBACIABACIAAACIABAAIAAABIAAABIgBAEIAAAAIABABIAAABIAAAAIAAABIAAABIABACIABgBIABgBIACgBIAAgBIABAAIAAgCIADAAIAAgCIAGgEIAAAAIABgBIACgCIACgDIABgBIAAgBIABgBIAAAAIABAAIACgDIADgBIAAgCIABAAIACgCIABAAIAAgBIABAAIAAgBIAAAAIACgDIABgBIADgIIAAgCIAAAAIAAgCIABAAIAAAAIABgEIABgBIABAAIADgBIACAAIgBADIABACIAAABIgBAGIAAABIgCACIgBAGIgBABIgBABIAAACIgBABIAAABIAAADIgBABIAAAGIAAAIIAAAAIAAAEIACADIADAAIAAABIAAACIABAAIABABIADAAIACgBIABAAIACgCIABAAIABgBIABAAIACABIABADIgBACQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBABIgCABIgBABIAAAAIgCACIgDAAIgDABgAAmAeIAFAEIACAAIABAAIAAABIACgBIABAAIABAAIADgBIABgBIABAAIAAgBIABAAIAAgBIgBAAIgBACIgBAAIgDABIgBAAIgBAAIgCAAIgCgBIgCgBIgBAAIAAgBIAAAAIgBAAIgCgBIAAgCIAAAAIAAgCgAgFAdIABAAIABABIgBABIAAABIACAAIAAAAIABABIABABIADgCIABgBIABgBIADgBIACgFIABAAIAAAAIAEgFIABgBIgCACIgCABIgBABIAAAAIAAABIgBABIgBAAIgCACIAAAAIgBABIgCABIgBABIgCACIgBAAIAAABIgEgFgAgHAVIACACIgBABIAAABIABAAIAAgBIAAgBIAAgBIgBgBIAAgBIABgDIAAAAIgBgBIAAgEIAAAAIAAACIAAAEIgBAAgAAVAMIgBABIgBABIgBACIAAABIAAAAIABgBIABgCIABgBIABgBgAAfACIgBAAIgBACIgBABIABgBIABgBIABgBIAFgCIAAADIABAAIAAgDIABgBIAAgEIAAAAIABgBIACgGIAAAAIACgDIABgFIAAgBIgCACIgBACIAAADIgBAAIgCAIIAAgBIgBACIgBACIAAABIAAABIgCAAIAAABIAAAAIgCAAgAgGgWIABAIIAAABIgBAKIAAADIAAAAIABAAIAAgBIAAgCIAAgBIAAgBIAAgDIAAgEIABgIIAAAAIAAgCIAAAAIgCgBg");
	this.shape_268.setTransform(98.1748,53.8252,0.3723,0.3723);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#3F4096").s().p("AhmAsIgCgFIAAgFIgBgCIABgBIgBgBIAAgCIAAgCIAAAAIAAgCIAAgMIABgDIgBgCIABgCIAAgIIAAgEIgCAAIgBAAIgBAAIgCAAIgEABIgCgBIgCABIgFACIgHgBIgBAAIgDgBIgCABIgCABIgCgBIgBACIgDgCIgDABIgCgBIgBABIgCAAIgCgBIgBABIgBAAIgEAAQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAIAAAFIgBAFIABACIgCAEIACACIgBAHIAAACIAAAEIABADIAAADIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAgBIgBgHQgDgDAAgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAIgBgBIAAgCIgBgCIgBgNIAAgDIAAgBIgDgCIAAgEIADgDIACgHIAAgCIABAAIgBgCIAAgFIABgEIgBgFIAAgEIAAgEIADgBIADABIABADIABABIgBAFIABACIgCANIABACIgBABIgBAGIADAAIACABIAEgBIACABIADgBIADACIAAgBIABgBIABABIADAAIAFAAIACAAIABgBIABAAIAEABIACAAIAAAAIAQgDIAGABIgBgCIABgBIgBgDIABgCIgBgHIABgCIgDgLIABgCIABgBIABAAIgBgCIADAAIAAABIADAAIAAACIACgBIAAADIgBADIABADIAAACIABADIgBADIAAACIgBAMIAHgBIAFgCIACABIACgBIAEAAIgDAEIgDgBIgCACIgBgBIgGACIgBABIgCgBIgDAEIABAAIgCAEIAAAAIABABIgBAHIABAAIgBACIAAABIAAADIgBABIAAAHIgBAIIAAADIAAABIAAADIABAAIAAADIgBACIAAABIgBADgACXArIgDABIgCgBIgCAAIgBgBQgEAAgBgDIAAgBIgDgBIAAgCIgCgCIAAgBIgBgHIAAgFIABgDIAAgEIAAgDIAAgBIABgCIABgDIgBgDIACgBIgCAAIABgDIAAgEIAAgDIACABIADgBIAAgBIABgCIADgGIABgEIABAAIABgBIAAAAIACgDQABAAADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAABQABAAAAAAQAAABABAAQAAAAABAAIAAAAIABACIAAAAQACABAAAEIAAADIAAAEIgBAAIgBAFIgDADIAAACIgJAGIgBAAIgBAAIgDACIgCAAIgDACIgBgBIgDgBQgCADAAADIgBABIgBAEIgBABIABAFIgBABIABACIgBACIABADIABACIABADIAEACIAAABIAJABIAEAAIADgCIABgDIABAAIABAAIADgCIAAgBIACAAIAAgBQADgBABgEIACgBIABADIgCADIgCAEIgBAAIgBADIgCABIgEACIgBACIgBgBIgBACIgCAAIgBABIgBAAIgCACgACXgXIAAABIgBABIAAAAIgBACIgBABIgCAEIgBABIgEAJIABABIAAABIACABIAFgCIAAgBIABAAIACgBIABAAIABgCIABAAIABgBQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAIAAgBIACgCIAAgCIACgDIAAgDIgBgEIgCgBIgDAAIgBABIgEABIgBABIAAAAIgBAAgAg7ApIAAACIgDgCIgFAAIgDgFIAAgCIgCgGIABgCIgBgEIABgCIAAgEQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAAgBIABgDIABAAIABgDIgBgBIABgDIAAgBIABgCIAAgDIAAgCQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIACgEIABgBIgBgBQABAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAIgBgDQAFAAACgFIABAAIABgBIABAAIAEABIACgBIAAABIAEABIACAAIABABIAAAAIAEAFIAAABIACABIACADIACAHIAAABIABAFIgBADIABABIAAAFIgCABIAAACIgDAIIgBABIAAACIgCABIgBADIgCABIgBACIgBAAIgCADIgEACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgBgBIgEACIgBADgAgygTIAAAFIgCAAIgFADIAAACIgCABIgBAEIgBABIgBADIABABIgCABIgBADIgBADIAAABIgBACIAAABIgBABIABADIgCAEIAAACIAAAEIAAACIAAAEIAFAFIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIACAAIAAgBIACAAIAAgCIACgCIACAAIABgBIAEgEIABgCIACgBIABgEIAAgBIACgBIAAgBIABgCIgBAAIABgCIAAgDIAAgCIAAgBIABgCIgBgBIAAAAIABAAIgCgEIAAgDIgBgCIgCgCIAAAAIAAgBIgBgBIABgCIgBgBIgCAAIAAgBIAAgBIgDgCIgEgCIgCgBQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABgABVAmIgBAAIgDgBIgBABIgDgBIgFAAIAAAAIgCAAIgBAAIAAgBQgFgBAAgGIADAAIAAgBIABgBIAAABIABAAIAAAAIACAAIABABIgBABIACAAIAAACIADABIACACIAAgBIATgCIAGgBIAAgBIACAAIAAgBIAGgCIABABIAAgBIABgCIgBgBIABgBIgCgCIAAgBIgCAAIAAAAIgCgCIAAAAIgBAAIgBAAIgCgCIgBABQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgCIgBgBIgFgBIgBgBIgEgDIgBgEIgCgCIAAgHIAAgBIACgFQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIABAAIADgEIACgCIAIgDIAEgBIAFgCIAGABIAAABIABAAIACABIAAABIABACIAAADQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAgBAAIgCgEIgFAAIgCgBIgBAAIgBABIgEABIgEADIgBAAIgBABIgDABIgBAAIgBABIgCABIgBADIgCACIgBAGIAAAAIAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAAABIADACIABAAIADACIACAAIACACIADABIABABIAHABIABABIADABIADABIAAABIABABIADAAIACACIACADIAAAAIABABIABAAIAAABIABADIgBABIgCAEIgCACIAAABIgBAAIgCACIgDAAIgBABIgCABIgCAAIgCAAIAAAAIgGAAIgBABIAAgBIgCABIgDAAIgBgBIgBABgAAsAlIgDgBIgEgFIgCgEIgBgCIAAgBIgBgEIAAgDIABgEIgBgDIAAgHIgBABIgBABIgCACIgBACIgBAAIgCACIgDADIgCAEIgEADIgEAFIAAAAIgEAEIgCACIgCACIgEADIgDgCIgBAAIgBAAIABgBIgCgCIABgBIgCgCIABgBIgCAAIgBgDIABgCIgBgCIABgJIgBgBIABgDIAAgDIAAgCIAAgCIAAgEIABgLIAAgFIgBgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIACAAIABACIgBADIAAAHIAAAFIgBADIABABIgBADIAAABIAAAAIAAABIgBACIABABIgBADIABABIgBACIABACIAAAEIABABIgBADIABACIgBACIABACIADADQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIADgDIgBAAQABgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIACgBIAAgBIACgBIAFgCIAAgCIACgDQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIABgBIABgBIACgDIABAAIAAgBIABgBIABgCIAEgBIAAgBIABAAIAAgCIABAAQAAgBAAAAQABgBAAgBQAAAAABAAQAAgBAAAAIAAAAIADgIIAAAAIAAgCQABAAACgGIACAAIAAAAIACAEIgCAFIgCAEIgBAFIgCABIAAAEIgBABIAAACIgBABIAAAQIAAAAIAAABIABAAIAAACIACAFIACABIAAABIAEACIACgBIABABIADgBIADgCIACAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIgBACIgBABIgBABIgCACIgDAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAgAhNgNQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIABAAIgCACg");
	this.shape_269.setTransform(98.1841,53.8065,0.3723,0.3723);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#3F4096").s().p("AARA3IAAAAIgDAAIgBAAIgCAAIgBgBIgBAAIgDgBIgCgCIgBgBIAAAAIgCgBIAAgCIgBgBIAAgBIAAAAIgBgBIAAgBIgBgIIAAAAIAAgFIAAgBIABgCIAAgDIAAgDIAAgCIAAgBIABgBIAAgBIAAgCIAAgDIAAgBIAAAAIAAgBIAAgBIAAgBIAAgFIAAgCIABgEIADADIAAAAIABAAIABgBIADgIIABgBIAAgDIACAAIAAgBIAHgHIACABIAAgBIABgBIADgBIABAAIACAAIAAABIACAAIABACIAAABIACAAIABABIAAAAIACACIgBABIABAAIAAAFIAAAGIABABIgBABIgBAAIgBADIAAAAIgCAEIAAACIgBABIgFADIgDADIgBAAIgCABIgBAAIgDACIgBAAIgEABIgBAAIgCgBIgBAAIgBAFIAAABIAAACIgBABIAAABIAAAFIAAABIgBABIABAAIAAABIgBABIAAABIABAEIAAAAIABAAIAAABIAAABIADACIABAAIAAABIADAAIAFAAIADAAIACgBIABgBIABgBIAAAAIABAAIAAgBIAEgBIACgDIAAgBIABAAIABgBIACgCIABgBIADAAIAAAAIABACIABABIgBACIgCAEIgBACIgBABIgBAAIgBACIAAABIgBAAIgBAAIgDADIgCACIgBAAIgCABIgBAAIAAABIgCAAIAAAAIgBAAIgCACgAAOA0IABAAIABAAIACgBIAAABIABgBIADAAIAAgBIACAAIABgBIABAAIAAgBIABgBIAEgDIABAAIABAAIABgCIAAgBIABAAIABgDIgCACIAAAAIgBABIAAAAIAAABIgCABIgCAAIAAACIgCAAIgBABIgBABIgCACIgBAAIgEAAIAAAAIgKgBIgBAAIAAgCIgDgBIgCgCIAAgBIgBgBIABABIAAABIAAAAIACABIAAABIACACIAAAAIAAADIABAAIADABIABAAIAAABIACAAIAAgBgAAEAHIAAABIAAAAIAAABIABABIgBABIgBABIAAACIABABIAAABIgCACIAAABIAAACIABgCIABgDIACgDIAAAAIADAAIACAAIAAABIADgBIABAAIADgDIABAAIABAAIABgBIADgBIAEgDIAAgCIAAgBIADgDIACgEIAAgBIAAAAIAAgDIAAABIgBACIgBADIAAABIgBABIgCABIAAAAIgDACIgBACIAAABIgBAAIgBABIAAAAIgBABIgCAAIAAAAIgCABIAAAAIAAAAIgBAAIgCAAIgBACIgCAAIAAAAIgDgBIgBAAIAAgBIAAAAIgBAAIgBgBIADgGIgDABIgBAAgAATgKIgBABIgBABIgBABIgBAFIAAAAIgCABIAAABIgDAGIABABIACgBIACgBIAAAAIAAgBIACAAIAAAAIABgBIABAAIACgCIABAAIAAgBIAAAAIABAAIACAAIAAgBIAAgBIABAAIAAAAIABgBIAAgBIAAgBIADgEIAAgCIgBgCIgCgBIAAABIgCAAIAAgBIAAACIgCAAIgCAAIAAABIgBABIgBAAgAAOgKIgCACIgCADIgBAEIgBAAIAAAAIAAABIAAAAIAAAAIABAAIABgCIABgBIABgBIACgEIAAgBIABgBIAAAAIAAgBIABAAIAAgBIAAAAIAAgBIABAAIAAAAIABgBIAAAAIABgBIADgBIABAAIAAgBIACgBIAAAAIABABIAAAAIABgBIABAAIABABIABgBIgBAAIgBgBIgDAAIAAgBIgBAAIgBABIgCABIAAAAIgCACIgCABIgBABIAAABIAAABIgBAAIgBACIAAAAgAC+A2IAAAAIAAABIgCgBIgCgBIgFAAIgBAAIAAgBIgBgCIgCgDIgBgBIABgBIAAgBIgCgFIAAgCIABgBIgBgDIAAgBIABgCIAAgEIAAgCIABgBIAAgDIABgDIABAAIAAgBIAAgBIAAgCIAAgCIACgDIgBgBIAAgCIABgCIABgBIABgBIgBgBIADgDIABAAIAAgBIgBgCIACAAIAAgCIAAgBIgBgCIADAAIACgBIADgDIAAgCIABAAIABAAIABgBIABAAIABABIADAAIAEgCIAAACIAAABIACABIADAAIABABIABAAIAAABIABACIACACIABABIAAAAIACABIACAEIAAAAIACAGIAAABIAAABIABAFIAAABIgBADIABABIAAABIgBADIAAABIgBACIAAACIAAACIAAABIgBABIgBABIgBADIAAABIgBAAIgBACIgCABIgBADIgBABIAAACIgBAAIgCABIAAAAIgDACIgBABIgBAAIgCADIgDABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABgAC+AzIABAAIAAgBIABAAIACgBIABAAIgGAAIgBAAIgBABIgBgBIAAABIgBAAIgBgBIAAgBIgCgBIgCgCIAAAAIADAFIAEAAIAAAAIABABIABgBgAC8AIIAAACIABABIAAACIgBABIgCAAIAAACIAAABIgBABIAAACIgBACIAAACIAAAAIAAABIAAABIgCAFIAAABIAAAEIAAADIAAADIACACIAAAAIACABIAAAAIABAAIABAAIAFAAIABgCIABAAIABABIAAAAIAAgCIACABIABAAIAAgBIACAAIAAAAIABgBIAAgBIABgBIAAgBIADAAIAAgBIAGgFIABgBIAAgCIABgCIgBgBIAAgBIABAAIABAAIAAgBIgBAAIACgCIABgBIgBgBIAAgDIABAAIgCgBIACgCIAAgBIAAAAIgBgCIAAgBIgBAAIABgBIAAgBIgBgBIABgDIgBgCIgBgBIgBgBIAAAAIgBgBIAAgBIgBAAIgBgEIAAAAIgBAAIgFgDIgBAAIgCAAIAAAIIgFAAIgDABIgBACIgBAAIgBAEIAAABIgBAAgADMArIAAAAIABAAIABAAIABgBIgCAAgACyAaIAAAAIABACIAAABIABgDIAAgBgAC7gBIgBABIAAACIAAACIgCACIAAAEIgBADIAAABIgBACIABAAIAAAAIABgCIABgDIABAAIAAgBIgBgBIABgCIAAgBIABgBIABgEIAAgBIABAAIABgCIAFgDIACAAIAAgEQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAEAAIACAAIAAAAIAFACIABABIACABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBABIgCADIgDACIAAABIgBADIgBABIAAABIgBABIgBAAgAi6A2IgBAAIAAABIgDgCIgFAAIgBAAIgCgDIgCgEIAAgBIAAgBIgBgFIgBgBIABgCIAAgDIAAgBIAAgCIAAgDIAAgBIABgCIABgGIAAgBIACAAIAAAAIgBgBIAAgBIABgCIAAgCIABgCIAAgEIAAgCIABgBIACgBIgBAAIAAgBIACgDIABAAIAAgDIACAAIAAgCIgBgBIAAgCIACAAIADgBIACgDIAAgCIACAAIAAAAIACgBIAAAAIABABIADAAIACgBIACgBIAAACIABABIACABIADAAIAAABIABAAIAAABIACACIACACIAAABIABAAIABABIACAEIABAAIABAGIAAACIACAFIAAABIgBADIAAABIAAABIAAADIgBABIAAACIAAACIgBACIAAABIgBABIAAAAIAAABIgBADIAAABIgBAAIgCACIgBABIgCADIgBABIAAACIgBAAIgBABIgBAAIgCACIgCABIgBAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAAAIgEABIgBABIgCAAIAAAAIgCABIgBABIgBABIAAABgAi7AzIACAAIAAgBIABAAIABgBIABAAIgGAAIgBAAIgBABIAAgBIgBABIgBAAIAAgBIgBgBIgBgBIgDgCIAAAAIAEAFIADAAIABAAIAAABIABgBgAi8AIIAAADIAAACIgBABIgBAAIAAACIgBABIAAABIAAACIgBACIAAABIgBABIAAACIgBAFIAAABIAAAEIAAADIAAADIABACIABAAIABABIAAAAIABAAIACAAIAFAAIAAgCIABAAIABABIABAAIAAgCIACABIAAAAIABgBIABAAIABAAIAAgBIAAgBIABAAIAAgBIABgBIACAAIAAgBIAFgEIABgBIAAAAIABgBIAAgCIABgCIAAgBIgBgBIACAAIAAAAIAAgBIAAAAIACgCIAAgCIgBgBIABgCIgBgBIABgCIABgBIgBAAIAAgCIAAgBIgBAAIABgBIgBgBIAAgEIgBgCIgBgBIgBgBIAAAAIAAgBIAAgBIgBAAIgCgEIgBAAIAAAAIgBgBIgEgCIgBAAIgCAAIAAAIIgEAAIgDABIgBACIgBAAIgBAEIgBABIAAAAgAitArIABAAIABAAIAAAAIABgBIgCAAgAjFAZIgBAAIAAABIAAACIAAABIACgDIgBgBgAjBAGIAAAAIABACIAAAAIgBAFIAAABIABgDIABAAIAAgEIABgCIABgEIACgBIABgCIAEgDIACAAIAAgEQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBAAAAIAEAAIACAAIAAAAIAEACIABAAIADACIgEgDIgBAAIgDgCIgBAAIgBAAIAAAAIgDAAIgCAAIAAgBIgBABIgBAAIgCADQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAIAAABIgBADIgBABIAAABIAAABIgBAAIgBAAIAAAAIgBABIABACIgBACIAAAAgAihgCIAAAAIAAABIABABIABAAIACACIAAAFIAAABIABABIAAACIAAAAIABgBIgBgEIAAgCIgDgFIgCgDgADyA0IgBAAIAAgDIgBgCIAAgLIAAgBIAAgBIAAgCIAAAAIAAgFIAAgBIAAAAIAAgGIAAgBIAAgDIAAAAIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIAAgEIgBAAIgBAAIAAgBIABgCIgBgCIAAgEIAAgBIgBgBIgBgBIABgBIAEgDIACAAIABAAIABABIAAACIABACIABABIgBADIACALIAAAAIgBACIAAAAIABACIAAABIgBACIABADIAAAAIgBACIABABIABgBIAAgBIABgBIAAgBIAAgDIABAAIABgCIABgBIAAgBIACgBIABgCIAAgBIABgBIABAAIAAgCIADAAIABAAIAAgBIAAgBIACAAIABgBIACgDIAAAAIABAAIABgBIABgBIAAgBIACAAIADgCIADgBIABAAIABgBIABAAIAAABIABgBIACgBIACACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIABABIgBADIgBAAIgEAAIgDACIAAAAIgCABIgBACIgBAAIgCABIgCABIAAAAIAAAAIgBABIgCAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIgBADIgBAAIAAABIgBACIAAADIgBgBIAAABIgBABIAAABIgBACIgBAAIAAACIgBAAIgBABIAAACIAAAAIAAABIABABIgCABIAAAAIgBAGIAAABIAAABIAAAAIgBACIAAAFIAAACIABABIABABIgBACIgBADIgBAAIAAABgADzAiIAAAAIABAEIAAAJIACABIABAAIAAgBIAAAAIgBAAIAAgBIAAAAIgBgDIAAAAIABgCIAAgBIgBgCIABgBIABgCIgBgBIAAgBIACgFIAAgBIgBgBIACgBIAAAAIgCgBIgBAAIgBAAIgBgCIAAgEIAAgBIAAAAIAAAAIgBACIABABIAAACIgBACIABACIAAABIAAAAIgBAAIAAAGIAAAAgADxgMIgBABIABABIAAABIABAFIAAABIAAABIAAABIAAAAIAAAAIABAFIAAABIABAAIAAgBIgCgLIAAAAIABgDIgBgBIAAgBgAjZA0IgDgCIAAAAIgEgGIgBgBIgCgHQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAgGIAAgCIAAAAIAAgBIABgEIgCgCIAAgBIABgBIgBgDIAAgDIAAgBIgBgBIABAAIAAgCIAAAAIgBgBIABgBIAAgBIgBgDIAAgDIgBgDIAAgDIgBgBIAAAAIAAgBIgDACIgJALIgBAEIAAAAIgFAFIgEAEIAAACIgBAAIgBABIgCAAIAAACIgEADIgBACIAAAAIgCABIgEAHIgBAAIgBACIAAABIgBAAIAAABIgCAAIAAgBIgDgEIAAgDIgCgBIABgCIgBgDIgBgBIgBgBIgBgCIgBgBIAAgBIgBgBIgBgCIgCgCIAAgBIgCgFIgDgEIAAAAIgBgCIgDgCIAAAAIgEgIIgBAAIgBAAIgBAAIAAABIAAAFIgBADIgDAFIABADIgCADIgCAKIAAABIgCADIAAACIAAAAIgCAGIAAAAIgCADIAAADIAAABIgCAFIABABIABABIgDAFIgDABIgCgBIgBgBIgBgBIAAgDIAAgBIACgHIABgCIABAAIAAgDIABgEIACgCIAAgCIAAAAIABgDIAAgDIABgCIAAAAIAAgBIAAgEIABgEIADgIIgBgCIAAgBIABgBIABgBIAAgBIABgKIAAgCIgCgFIAAgBIAAgBIABgBIAAgBIgBgBIABAAIAAgCIADAAIABgBIACAAIABAAIABACIABAAIAAABIACABIAAAAIAAABIABADIAAABIABACIACAAIgBACIABAAIABABIABABIABABIABACIABABIAAABIABADIAGAHIABAAIABADIACADIABAFIAGAJIABACIACAAIACgEIAGgEIAAgCIAAAAIACgBIABgBIABgBIAAAAIABgCIAAgBIACAAIACgBIAAgDIADgCIACgBIAAgBIABgDIADgBIAAAAIADgEIAAgBIAAgBIACAAIADgGIABgBIACAAIAAAAIgBgEIgBgCIAAgBIACgDIABgEIABAAIAEABIAAABIAAgBIABABIABAAIAAACIAAABIABACIABAAIABAAIAAAIIAAAAIABABIgBABIAAABIABABIAAADIACABIgBABIgBABIAAABIAAADIABACIAAADIACAKIgBADIAAABIAAAAIABACIAAABIgBABIAAAAIABABIgBAJIACAFIAAAGIAAABIABACIAAABIABABIABABIACACIABACIAAABIgBABIgBABIgCAAIAAABgAjgAUIgBAEIAAACIAAAGIABACIAAAAIABAGIABACIAEAFIAAAAIAAgBIgBgBIgBgCIAAgBIgCgBIAAgBIAAgGIgCgFIAAgBIABgHIgBgBIAAgBgAkSAbIAAABIABAAIAAADIAAABIAAgBIACgCIACgEIgCAAIAAAAIAAADIgCgCgAk4AKIgBAAIgBADIAAACIAAACIgBADIAAADIgBACIAAACIABgCIAAgCIAFgOIABgCIgBgDgAj/AJIgBACIgCABIgCABIgBABIAAABIgCACIAAABIAAAAIgEACIgBAEIAAAAIABAAIACgBIABgEIADgBIAAgBIAAgBIABAAIACgBIAAgBIABgBIAFgFIAEgEIACgEIAAAAIAAAAIgBAAIgCAAIgDADIABAAIAAADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAABIgBAAIgBAAgAjogbIAAABIABABIABAFIgBABIgCADIABABIADACIAAABIABACIAAADIABADIAAAEIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAAAIAAAFIABADIAAAAIgBABIABACIACgCIAAgBIgBAAIgBgDIABgBIABgCIAAgCIAAgCIgCgGIAAgCIAAgCIgBgBIABgCIgCgBIABgCIABAAIAAgBIgBgCIAAgBIAAgBIAAgBIgCgBIACgBIgBgBIAAgGIgBgCIgBAAIAAgCIAAAAIgBAAgAktgNIACABIAGAIIADADIAAAAIABABIACAEIgBgEIgGgGIgBgBIAAgDIgCgBIAAgBIAAgCIgBgBIAAAAIgCgBIAAAAIgBgBIgCgDIgBgBIAAgBIAAgDIgBgBIgBAAIAAgBIgBgBIgBABIAAAAIAAABIAAAAIgBACIABADIAAADIAAAGIAAAHIgBACIAAABIgBAAIABACIAAABIgBABIADgEIABgHIAAgDIABAAIACgBgAj1gDIAAADIACgCIAGgJIABAAIABgBIABgDIgBgCIAAAAIgBAEIgCADIAAAAIgBAAIgDAFIgBABIAAACIgBgBIgBAAgACCAzIgBAAIgDgBIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgCgCAAgDIAAgCIACAAIACgBIAAAAIACgDIACACIABAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIAAAAIAAgBIgBAAIgBgBIAAgBIgBAAIgCgBIgBAAIAAgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIgBgBIAAAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgBgBIAAAAIgDgDIgCAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIADgCIAAgCIABAAIADgCIABgDIABAAIAIgEIAJgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIAAACIAAABIgCACIgCABIgCgCIgBgBIgDAAIAAAAIgBAAIgBAAIgBgBIgCABIgDAAIgBABIgCAAIgBABIAAAAIgCAAIAAABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIABAAIABABIABACIADAAIABABIADABIACAAIAAAAIAGACIABAAIAAABIAEABIABABIABAAIABABIAAABIADAAIAEABIABADIABABIAAABIAAAAIADABIgCACIABAAIABABIAAABIAAABIgCABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIAAABIgEAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgCgBIgDAAIAAABIgBAAIgBgBIgBACgACFAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIABAAIABAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgABwArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgACfAiIAAAAIABAAIAAABIAAABIAAAAIgBABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIAAgBIAAAAgACEATIAEACIAAAAIABABIADAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIgBAAIgBAAIgCgBIgBAAIgBgBIgBAAgAB2ACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIABgBIACgBIABAAIABAAIABgBIAAAAIACgBIACAAIADgBIACgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQABgBAAAAIABABIABABIABAAIAEABIABAAIAAABIABAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAIgBABIgCACIgCADIAAAAIAAAAgABDAzIgBAAIAAAAIgCgBIgBAAIgBABIgBgBIgBAAIgBAAIgDgBIgCAAIgBABIgBABIgBgCIgBAAIAAgBIgEgDQgBgCgBgDIAAgCIACAAIABgBIABAAIACgDIABACIACAAIABABIABACIABAAIAAADIADAAIABAAIAAABIAAAAIASgCIAGgBIAAAAIABgBIABAAIABgBIACgBIAEgCIgBAAIAAgBIAAAAIgBgBIAAgBIgBAAIgBAAIgBgBIAAAAIgBgBIAAgBIgBAAIgBgBIgBAAIgDAAIgCgBIgBAAIAAgBIgBAAIgBAAIgBABIgBgCIgBAAIgCgBIgDgCIgBAAIgBgCIgFAAIgFgEIgBAAIgBgGIgCgCIAAAAIAAgIIAAAAIAAAAIAAgCIACgEIACgCIAAgCIACAAIADgCIABgDIABAAIAIgEIABAAIAIgBIAAAAIAIAAIAAABIABAAIACABIAAABIAAAAIACACIAAACIgBACIAAABIgBACIgCABIgCgCIgBgBIgCAAIgBAAIgBAAIgBAAIgBgBIgCABIgDAAIAAABIgDAAIgBABIAAAAIgBAAIgBABIgDABIAAABIgBABIgBAAIgCACIgBABIAAABIgBAAIgBAFIAAAAIAAADIABABIABABIAAAAIADACIAAAAIACABIABACIADAAIACABIADABIABAAIAAAAIAGACIACAAIAAABIADABIABABIABAAIABABIAAABIADAAIADABIABACIABABIABABIAAABIAAAAIACABIgBACIABAAIABABIAAABIgBABIgBABIAAABIgBAEIgBABIgBAAIAAACIgDAAIgBABIgBABIgDAAIgBABIgBAAIAAABIAAABIgCgBIgBAAIAAABIgCAAIgDAAIgBAAIgBAAIgBABIgBgBIgEAAIAAABIgBAAIgBgBIgBACgABGAvIABgBIACAAIABAAIACAAIACAAIABAAIABAAIABgBIACAAIADAAIAAAAIAAAAIABgBIABAAIABgBIACAAIABgBIAAAAIACAAIAAgBIgBgBIgFACIgBABIAAAAIgBAAIgBAAIgGABIgBAAIgRACIABAAIABAAIACAAIABABIABAAIABgBIAAAAIABAAgAAxArIACABIABAAIAAABIACgBIgBAAIAAgCIgCAAIAAgBIgBABIAAgBIgCAAIABACgABgAiIAAAAIAAAAIABABIgBABIAAAAIAAABIgBABIAAAAIAAADIABgBIABgDIABgCIAAAAIgBgBIgBgBIABAAIgBAAgABFATIAEACIAAAAIACABIACAAIAAABIABABIABAAIABAAIAEABIABAAIACAAIAAABIAAgBIAAAAIgCAAIgBgBIgDgBIgBAAIgFgDIAAAAIgCAAIgCgBIgBAAIgBgBIgBAAgAA7gFIgDACIgBADIAAACIABgCIACgCIABgBIABgCIAAgBIACgCIABAAIAAAAIABgBIACgBIABAAIABAAIABgBIABAAIABgBIACAAIADgBIACgBIAAgBIAAAAIACgBIABABIABABIACAAIADABIABAAIABABIAAAAIAAgBIgBgBIAAgBIAAgBIgCAAIAAgBIgGAAIgDABIAAAAIgFABIgIAEIgDACIgBADIAAAAgAEpAyIgDgDIgDgFIAAgJIAAgBIAAgBIABgNIABgBIAAAAIgBgHIAAAAIABgCIAAgBIABgDIAAgBIAAAAIAAgBIgBgCIAAAAIABgBIAAgDIAAgCIAAgBIAAgCIAAgCIAAAAIAAAAIgBgCIABgDIACAAIABAAIAAAAIAAAAIADgBIABAAIABABIABACIAAABIAAAAIACABIgBACIgBABIgBAJIABABIAAAAIgBADIgBACIAAABIABABIAAAAIgCAHIAAAAIAAABIgBAEIAAAFIgBABIAAACIAAAAIAAAEIABAGIAAAAIACAAIABABIABgBIABgBIABAAIACgCIACAAIACgBIABgBIABgBIABAAIABgBIAAgBIABAAIgBgCIACAAIABgBIACgBIABgBIAAgBIAEAAIABABIAAAAIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBAAIgBAAIgBACIgBACIAAAAIgBAAIgDADIgCACIAAABIgBAAIgBAAIgCABIAAABIgBAAIAAABIgGACIAAABIAAAAIgDAAIgCACgAEmAfIAAABIAAABIABAHIABAEIACACIACgBIABAAIABgBIABAAIABAAIABAAIAEgDIACAAIAAgBIABgBIAAAAIABgCIADgCIgBAAIgBABIAAAAIgCAAIgBABIAAABIgBAAIgBABIgCACIAAgBIAAABIgCAAIgBABIgBABIgCAAIgBgBIgBAAIgBABIAAgBIgCgBIgBAAIAAgCIABAAIgBgDIAAgEIAAAAIAAgEIAAgCIAAgBIAAgBIAAgEIABgBIgBAAIAAAAgAE9AiIAAAAIACAAIAAAAIgCAAgAEpgIIAAABIAAABIAAACIAAADIgBABIABAEIAAABIgBABIAAABIAAABIgBABIABAJIAAgCIAAgCIACgGIgBgBIAAgBIABgCIAAgBIACgBIgCgCIACgKIAAAAIAAAAIAAgCIgDAAIABADIgBAAgAiFAyIgCgBIgCgEIAAgBIgBgBIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgDIgBgCIAAgBIAAgBIABgCIAAgCIAAgCIAAgEIAAgBIgBgCIABgBIAAgCIAAAAIABgGIgBAAIAAgDIAAgBIAAgBIAAgEIAAgBIAAgBIAAgDIAAgDIABgDIABgBIABAAIACABIACABIABABIAAABIAAABIAAACIABACIAAABIAAACIAAAGIAAABIgBACIABAEIAAADIgBACIAAACIABAAIgBADIgBACIABABIAAABIgBAFIAAABIAAADIABAAIAAgCIAAgBIABAAIABAAIAAgBIABgCIABgBIAAgBIABgBIABAAIAAgBIABgBIABgBIABgBIAAgEIABAAIAAAAIACgBIAAAAIABgBIADgFIABgDIAAgBIABgCIABAAIABgBIAAgEIABAAIABgBIAAAAIAAgCIADgBIABgCIACgCIAAgBIACgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIADgCIAAAAIABgCIACAAIAAACIABABIABAAIAAABIABABIAAAAIABACIABABIABABIgBAEIABADIAAAFIACAKIABAFIAAAFIABABIAAACIABABIAAABIAAACIABABIABABIAAAAIAAABIAAABIACAAIABgBIABAAIAAAAIABgBIABAAIAAAAIABgBIACgBIABgBIAAAAIABgBIABgCIABAAIABgBIADgGIADgCIADAAIAAABIABADIgBACIAAABIgBABIgCADIgBACIgBABIAAABIgBAAIAAAAIgBACIgCACIAAABIgBAAIAAABIgBABIgBABIAAAAIgCAAIgBAAIgCABIgBABIAAAAIgDABIgBAAIgBgBIgBABIgBAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgCIgBAAIgCgDIgBgDIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIgBgDIAAgDIgCgEIAAgDIgBgOIAAgBIgBgBIAAAAIgBgBIAAgBIgHAJIgEAGIAAABIgCACIgBABIAAABIAAAEIgBABIAAAAIAAABIgCAAIgCACIgBADIgCACIgBADIgBABIAAAAIgDAEIgDADIgBACIgBABIgBABIAAABIgCACIgDABgAiGAnIAAABIgBACIABABIABACIAAABIACAAIABgBIAAgBIAAgBIAAAAIABAAIAAgBIABgBIAEgGIABgBIACgBIABgBIAAgBIAAgCIABgBIABgBIAAAAIAAgBIABgBIACgDIABgBIAAgCIACAAIAAgBIAAgBIAAgBIAAABIgBAAIAAAAIAAABIgBABIgCAAIAAABIAAAAIgBABIAAACIgCADIgBACIgBABIAAABIgBACIgCAAIAAAAIgBACIgBAAIgBADIAAABIgCAAIgBABIgCABIgBgCIAAAAgAhYATIABADIAAADIABADIAAAAIABADIAAABIAAAAIAAACIAAABIABABIABACIAAACIABAAIAAAAIABACIABAAIABAAIAAAAIABABIADgBIABAAIAAAAIABgBIABgBIABAAIABgCIABAAIABgCIABAAIAAAAIABAAIABgBIAAgBIgBAAIgBABIgBABIgCAAIgBACIgCABIAAABIgCAAIAAAAIgBABIgCAAIgDgBIgBgBIAAgBIAAAAIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIgBgCIAAgBIgBAAIAAgFIgCgFIAAAAgAiGASIAAABIAAAGIgBACIABABIAAABIgBACIABADIAAAAIAAgGIABgDIAAAAIAAgBIAAgEIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgFIAAAAIABgDIgBgIIAAgBIgBgCIAAgDIgBAAIABADIAAABIgBADIABABIAAAAIgBADIABACIAAADIAAABIgBAGIABACIgBACIAAAAgAg+AcIgBABIAAACIgBABIgBABIAAAAIABgBIAAAAIACgEIACgBIAAgBIgBAAgAhoABIgCAAIAAABIgBAEIgCACIAAABIgBAFIgCACIABAAIABgCIABgBIAAgCIADgGIAGgGIABgBIABgBIgCgBIgBAAIgBADIAAABIgBAAgAhcgFIAAABIAAABIACADIgBAAIAAAAIABABIAAABIACAOIAAgFIgBgFIAAgFIgBgDIAAgCIgBgBIgBAAIAAgDIAAAAIAAgBIAAgBIgBAAIgBAAIgCABIAAAAIgBABIAAABIgBABIAAACIADgCIABgCgAgZAxIgEABIgEgBIgCAAIgFgEIAAAAIgFgFIAAgBIgCgHIAAAAIgBgHIAAgBIAAgCIgBgCIABgCIgBgCIAAgBIABAAIAAgBIAAgBIAAgCIAAgBIAAgFIgBgBIABAAIAAgEIgCgBIgCABIgBAAIgBAAIgBgBIgBAAIgCgBIgBgEIAAgBIAAAAIgCgBIABgBIABgBIAAgBIAFAAIACAAIAFAAIAAgFIgBgDIABgBIAAAAIAAAAIgBgBIAAgBIABgFIgBgCIgBAAIABgBIgBAAIgBgDIABAAIAAgEIABAAIABgCIAAgCIAFADIACACIAAABIABACIAAAEIgBABIABAAIAAAEIgBACIAAADIAAABIAAADIAAABIABABIgBABIAAABIAAABIABAAIABAAIABgBIAcAAIACABIACACIgCADIgDABIgBAAIAAAAIgBABIgBAAIgCgBIgDAAIgDABIgDABIgCgBIgBABIgBABIgDAAIgBAAIgBABIgBAAIgCAAIgBgBIgBABIgCAAIAAAAIgBAAIgBARIABAIIAAADIACAEIAAABIAAACIACACIAAABIACAAIABABIABACIAFABIAHgCIACAAIAFgCIADAAIABACIABACIgBACIgCACIgBAAIgCABIgBAAIgEABIgBABIgBABgAgmArIAEACIACAAIADABIACAAIADgCIABABIABAAIAAAAIABAAIAEgBIACgBIABgBIABABIABgBIgBAAIAAAAIgFABIgBABIgCgBIgHACIgBAAIgFgBIgBgBIgBgBIgCgBIgBAAgAgugCIABABIAAABIABgBIABgCIABAAIADAAIAAgBIABAAIADABIAAgBIACAAIADgCIACgBIgJgBIgBABIAAABIgFAAIgBgEIAAACIgIAAIgCAAIgCAAIAAACIAAABIACAAIACACIACgBIABAAIABABIABgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABgAgugkIAAADIABAAIAAACIAAABIAAABIABABIgBAFIABAAIABgCIAAgFIAAgBIAAgBIgBgCIAAgBIAAAAIAAgBIgBgBgAEggcIAAAAIAAgBIgBgCIAAgCIAFgCIAAgCQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAAAAIABgBIAAAAIAAgDIACAAIAAgCIACAAIABgBIABAAIAAAAIABgCIAAgBIABAAIAAgBIAAAAIAAgBIACgBIAAgBIAAgCIACAAIAEACIABAEIAAABIAAACIgCABIAAABIgDACIgBABIgEAFIgBABIgDABIgCADIAAAAIgBABIgBAAIgDADgAEugrIgBABIAAACIADgEIABgCIABABIABgBIAAgBIAAAAIACgBIAAgBIAAgBIgBgBIgBAAIgBACIAAADIgBAAIgBAAIgBABIAAABIgBAAg");
	this.shape_270.setTransform(78.5678,49.3463,0.3713,0.3713);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3F4096").s().p("AASA1IgDABIgCgBIgCAAIgBAAQgEgBgBgCIAAgBIgDgCIAAgCIgCgCIAAAAIgBgIIABgIIAAgDIAAgDIAAgCIABgCIABgCIgBgEIABgBIgBgBIABgCIgBgFIABgCIACAAIACAAIAAgBIABgBIAEgHIABgDIABAAIAAgBIABgBIACgDQABABADgEIABABIABgCIADgBIABABIABAAIABAAIABAAQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAAAIABACIgBAAQADACAAAEIgBACIABAEIgBABIgCAEIgCADIgBACIgIAGIgBABIgBAAIgDACIgCAAIgDACIgEgCQgCACAAADIgBACIgBAEIgBAAIABAGIgBABIAAADIABADIABADQgBAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEACIAAABIAJABIADAAIAEgCIABgCIABAAIAAAAIAEgCIAAgBIABgBIABgBQADAAABgEIABgBIABACIgBADIgCAFIgBAAIgCACIgBABIgEADIgBACIgBgBIgBACIgCAAIgBABIgBAAIgDABgAARgKIAAAAIgBABIgBABIgCAFIgBABIgBABIgEAHIABABIABABIACAAIAFgBIAAgBIABAAIABgBIACAAIABgDIABAAIABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAgBIABgBIABgCIACgEIAAgCIgBgFIgDgBIgCAAIgCABIgDACIgBABIAAAAIgBAAIAAAAIAAABIgBAAgAC9A0IAAABIgCgBIgFAAIgEgGIAAgCIgCgGIABgCIgBgDIABgDIAAgCIAAgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIAAgBIABgEIABAAIABgCIAAgBIAAgDIAAgCIABgDIAAgCIAAgCQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAIAAgCIABgBIACgCIAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDQAEABACgGIABAAIABgBIABAAIAEABIACgBIAAABIAEACIACAAIAFAFIAAABIACABIACAEIACAGIAAABIACAFIgBAEIAAABIAAAEIgBACIAAACIgBADIgBABIgCAEIgBABIAAACIgCAAIgBADIgCABIAAADIgCAAIgCACIgEACQAAABAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgEACIgBACgADGgJIABAGIgDAAIgFACIAAABIgCABIAAAFIgCABIAAACIAAACIgCACIAAADIgCACIAAABIgBADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIACACIADACIAAAAIACAAIACAAIADAAIACgBIAAgBIACAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIADAAIAAgCIAEgEIABgBIACgBIABgFIAAgBIACgBIAAAAIABgCIAAAAIAAgCIAAgBIAAgBIABgDIgBgBIABgCIgBgBIAAgBIABAAIgBgCIAAAAIgBgCIAAgDIgBgDQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAIAAAAIAAgBIgBAAIABgCIgBgBIgBAAIgBgCIABgBIgCgBIgCgBIgEgBIgBgBQgFAAAAACgAi7A0IgBABIgCgBIgFAAIgEgGIABgCIgCgGIABgCIgBgDIABgDIgBgCIAAgCQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAIAAgBIAAgEIABAAIABgCIAAgBIAAgDIAAgCIACgDIgBgCIABgCQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBAAAAIgBgCIACgBIABgCIAAgBQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAgBIAAgDQAFABABgGIABAAIACgBIABAAIADABIADgBIAAABIADACIACAAIABABIABAAIADAEIABABIABABIACAEIADAGIAAABIABAFIgBAEIABABIgBAEIgBACIAAACIgBADIgCAFIgBABIgBACIgBAAIgCADIgCABIAAADIgCAAIgCACIgBABIgCABQgBADgEAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAIgBgBIgDACIgCACgAiygJIAAAGIgDAAIgEACIgBABIgBABIgBAFIgCABIAAAEIgBACIgBADIgBACIAAABIgCADIAAABIAAABIAAACIgCAFIABACIAAADIgBACIAAAFIAGAEIABAAIACAAIAEAAIABgBIABgBIABAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACAAIABgBIABAAIABgBIACgCIACAAIABgCIADgEIABgBIACgBIACgFIgBgBIACgBIAAAAIACgCIgBAAIABgCIgBgBIAAgBIABgDIgBgBIABgCIAAgBIgBgBIABAAIgCgEIABgDIgCgDIgBgBIAAAAIgBgBIAAAAIAAgCIgCgBIgBgCIABgBIgCgBIgBgBIgEgBIgCgBQgBAAgBAAQgBAAAAABQgBAAAAAAQAAABAAAAgADyAyIAAgCIAAgBIAAgDIAAgBIAAgFIAAgEIgBAAIABgCIAAgFIAAgBIAAgCIAAgDIAAgCIAAgDIgBgBIABgCIgBgDIAAgCIAAgDIAAgBIAAgEIgCgBIACgCQgCgCAAgEIAAgBIgBgCIAEgDIABABIABAEIAAADIACALIgBACIAAADIAAACIAAADIAAACIABACIAAAAIAAAEIABAAIABgDIABgCQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgBIABgBIAAAAIABgBIAAAAIABgCIACgCIABgBIABAAIgBgCIACgBIAAgCIADAAIACgCIABAAIADgEIADgBIAAgBIABgBIAGgCIAAAAIACgBIABAAIACAAIADABIgBABIgEABIgDACIgEABIgCACIgDACIAAABIgCAAIgBACIgCAAIgBADIgBABIgCABIgBADQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBAAIAAABIgBABIgDAFIgBABIAAAEIgBABIAAAAIgBABIAAABIgCAGIABABIgCADIABADIgBACIACADIABABIgCADIgCAAIAAABgAjbAwIgEgFIgBgDIgBgFQgCgCAAgGIAAgCIABgFIgBgDIAAgIIgBgBIABgCIgBgBIABgCIgBgDIAAgEIgCgDIAAgDIgDgDIgBACIgCABIgJALIgCAEIgEAEIgFAFIgBACIgDABIAAACIgDACIgBADIgDABIgDAGQgBAAAAAAQgBAAAAABQAAAAAAABQAAABAAABIgBAAIgDgEIABgCIgBgBIABgCIgBgBIgBgDIgEgEIgBgCIgCgDIgBgDIgDgFIgDgEIgBgBIgDgDIgDgFQgCgDgBAAIgCAAIgBAAIgBAAIAAACQAAAGgBACIgDAFIABAEIgBACIgEAOIgBACIgEAJIAAADIgCAGQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEIgCgBIAAgDIACgJIABgBIAAgDQAAgDADgCIAAgDIABgDIAAgBIACgGIAAgDIAEgMIgBgDIABgBIABgCIAAgMIgBgGIABgCIgBgBIABgBQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAAAAAIACAAIABABIAAABIACABIABAEIABABIAAACIABAAIAAABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACACIAAADIACABIABADIAHAIIABADIACACIACAGIAFAJIAEAFIAAgCIADAAIABgEIADgCIADgDIAAgBIAFgEIAAgCIACAAIABgCIABABIAAgBIAAgDQADgDACAAIAAgCIADgDIABABIAAgBIADgFIAAgBIABAAIAEgGIACgBIAAABIABgCIAAgFIgBgCIACgEIAEABIABACIACACIAAABIAAABIAAAFIABABIgBABIABAAIAAACIAAAAIABAEIAAABIgBABIABABIgBADIABADIAAACIABAGIABAEIgCADIABACIABABIgBABIgBACIABABIAAAIIABAGIAAAGIABABIACADIACACIACAEIgCABgACCAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIAAgBIACgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAIgBgCIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIAAAAIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgCgDIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgCABgABDAxIgBAAIgDgBIgBABIgDgCIgFAAIgBAAIgBABIgBgBIAAgBQgFAAAAgGIADgBIAAgBIABgBIAAABIABAAIAAAAIABAAIABABIAAACIABAAIAAACIAEAAIABACIABgBIASgBIAHgBIAAgBIACAAIAAgBIAGgDIAAABIABgBIABgBIAAgBIgBgBIAAAAIgBgCIgBgBIgBgBIgBAAIgBgCIgBAAIAAAAIgCAAQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAIgBABIgFgCIgBAAIgCgBIgBABIAAgBIgBAAIgCgBIgEgDIgCgBIgFgBIAAgBIgEgCIgCgGIgBgBIgBgIIABAAIABgEQABgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBIABAAIADgDIABgCIAJgEIAEgBIAEgBIAHAAIAAABIACABIAAABIACACIgBAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAgBIgFAAIgCgBIgBAAIgBABIgEABIgEACIgCAAIgBABIgDABIgDADIgBADIgCABIgCAGIABAAIAAABQAAAAAAABQAAAAAAABQABAAAAABQABAAAAAAIAAABIAEADIABAAIACACIADAAIACABIADABIABABIAGACIABABIAEABIACABIACABIADAAIACACIACADIAAABIABABIABAAIgBABIACACIgBABIgCAFIgCACIAAAAIgCAAIgCACIgCAAIgCABIgBABIgCAAIgCAAIAAABIgHAAIAAABIgBgBIgBABIgDAAIgBgBIgBABgAEnAtIgCgEIgBgIIAAgCIABgNIABAAIAAgIIABgGIAAAAIgBgEIABgBIAAgDIABgCIgBgDIAAgBIABAAIgBgDIABgCIACACIABgCIABAAIABADIABABIgBABIgBAKIABABQAAABAAABQAAAAgBABQAAAAAAAAQAAAAgBABIAAACIAAABIgBAHIgBAJIgBACIAAAGIABAGIAAACIABABIACgBIACABIAEgDIABgBIAAABIABgBIACgBIADgCIACgBIABgBIACAAIAAgCIAAAAIAAgBIADgCIABgCIADABIAAABIAAABIgCABIAAACIgCABIgCADIgCABIgBACIgDADIgBAAIgDACIgCACIgFABIAAABIgDAAIgBACgAiJAqIABgCIAAgCIABgBIgBgBIAAgCIgBgDIABgCIAAgCIABgHIAAgBIgBgBIABgCIAAgCIAAgGIAAgBIAAgCIgBgCIABgEIAAgBIAAgEIAAgDIABgCIACABIABABIAAADIABADIAAACIAAAGIgBADIABAEIAAACIgCACIABADIgBAFIABABIgBAHIAAAFIAAAAIACgBIACAAIAAgCIACgCQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIABgDQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBIACgDIAAgCIADgCIACgDIACgCIACgFIgBgBIABAAQADgCAAgDIAAgCQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAgBIgBAAIABgBIABAAQABgBAAgBQAAgBABAAQAAAAAAgBQABAAAAAAIACAAIABgDIADgCIABgBIABAAIACACIAAAAIABABIAAACIACACIgBADIABADIAAAFIACAKIABAGIAAAEIABACIABADIABABIAAACIABABIAAABIABABIAAABIACAAIACAAIABAAIABgBQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgBIADgBIACgBIAAgBIABgCIACgCIADgFIACgBIACAAIAAACQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIABAAIgCAEIgCAEIgCAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgBABIgCACIgBACIgCAAIgDABIgDABIgCAAIAAgBIgCAAIgBgCIgBAAIgBgBQAAgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgBIgBgCIAAAAIABgBIgBgDIgBgCIAAgEIgBgDIAAgDIgCgOIAAgCIgCgEIgBgBIgJALIgCADIgCAFIgDADIABABIgBADIgBAAIAAACIgBAAIgDADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIAAAAIgDAEIgDADIgCADIAAAAIgBACQAAABAAAAQAAAAgBABQAAAAgBAAQgBAAAAABgAggAvIgCAAIgFgDIgEgGIgDgHIgBgGIAAgDIgBgCIABgCIgBgCIACgBIgBgCIAAgCIAAgCIAAgCIAAgCIAAAAIAAgFQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAIgBABIgBgBIgDABIgCgCIgBAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgCIgBgBIABgBIACAAIACAAIACABIAGAAIAAgHIgBgDIACAAIAAgBIgBgCIAAgGIgBgCIAAgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgEIABgBIAEACIAAABIABAEIAAABIgBACIABABIAAACIgCADIABADIAAAFIAAABIgBACIACADIACAAIACgBIAcAAIABABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAIgCAAIgCAAIgEAAIgFACIgDAAIgBABIgCAAIAAgBIgCABIgBAAIgBACIgEgBIgBABIgBgBIgCABIgBABIgBAHIABAEIgBAMIABADIAAACIACAFIAAAAQAAADACACIABACIACAAIACACIAGABIAHgBIACAAIAFgCIACAAIABACIgCACIgBAAIgCACIgFAAIgCABIgBgBIgGACgAEhgdIAAgCIAEgCQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAAAIABgBIAAAAIABgBIABgBIAAAAIAAgCIACAAIAAgCIABAAIABgBIABgBIABgBIABgBIABAAIAAgCIACgDQADABABAEIgDACIAAABIgBABIgBABIgBAAIgEAFIgBABIgDABIgCADIgCABIgDADg");
	this.shape_271.setTransform(77.7271,53.4156,0.3723,0.3723);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EE3338").s().p("AlTBRQgIgHgBgOQAAgNAJgKQAAAAABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQgFgCgCgDQgDgDAAgEQAAgJATgHQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQgJgDgDgHQgEgJAAgHQAAgNAHgIQAHgJAKAAIAEABIAAgBIACgDQACgIAFgFQAGgGAFAAQAHAAADADIABACIgBASIgBABIgBgCIgCgCQgDgCgDAAIgFACQgCADAAACIAAABQAFADADAIQAEAHAAAJQAAATgTAKIgJAFQgHADAAACQAAABAFACIAHABQAPADAGAHQAHAHAAAPQAAAPgKAJQgKAJgMAAQgLAAgIgIgAlJAuQgEAFAAAHQAAAFAEAFQAFAFAFgBQAFAAAEgFQAEgFAAgGQAAgNgOgBIgBAAQgFAAgDAEgAlHgdQgEADAAAGQAAAFAEAEQADAEAGAAQAEAAAEgDQADgEAAgFQAAgFgEgEQgDgEgGAAQgDAAgEADgAkJArQABgCACgJQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAAAAAAAQgEgCgCgEQgCgEAAgEQAAgGADgEQADgDAFAAQAFAAADAEQADAEAAAHQAAAIgFAKQgFAJgGAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAgAh0AhQgFgFgDgKIgDgSIgCgpIABgBIASgEQAAAAAAABQgBAPAAARQAAAeAJAAQAJAAAAghIgCgfIABAAIAQgFIABABIAAAyIgDAOQgBAGgDAHQgCAEgGAEQgFAEgGAAQgIAAgFgFgABkAlIgHgOIgBAAQgLAJgKgBQgLgBgGgHQgGgIAAgOQABgNAMgOIABAAIgBgBIgGgMQgEgLAAgMQAAgLAIgIQAIgIAKABQAKAAAGAKQAGAJAAAMIgCAJIgDAHIgFAGIgLALIAAABIANAWIABAAIAJgVIABAAIAKALIAAABIgLAUIgBACIAIANIAAABIgHALIgBAAIAAAAgAA9gFQgBAFAAAFQAAAGADADQADADAFABIAHgCQADgBADgEIAAgBIgQgYIAAgBIAAAAgABDhEQgDADgBAHIABAJIADAIIAFAIIABAAIACgCIAHgKQAEgHAAgEQAAgGgDgFQgCgFgFAAIgBAAQgEAAgEAEgAgWAjIABgXIAAgRIgBgMIgCgEIgDgEIgDgBQgDAAgDADQgDAEgBADIgBAJIgDAlIgBABIgNAAIgBgBIABgQQADgoAAgfIAAAAIARgCIAAAMIAAABIAAAAQAEgCAFAAQAGAAAFAEQAFAEACAGQAFANAAAVQAAAOgCAVIgBAAIgNABgAl+AjIABgiIgCgSIgBgEIgDgEIgDgBQgDAAgDADIgEAHIgFAuIAAABIgNAAIgBgBIABgQQACgdAAgqIABAAIAQgCIABABIgBAMIABAAQAEgCAFAAQAFAAAGAEQAFAFACAFQAEANAAAVQAAAVgCAOIAAAAIgNABgAERAjIAAgLQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBABAAAAQgGAGgGAAQgIAAgFgGQgFgGAAgKQAAgKAGgGQAHgHAJAAQAEAAAFACIABAAIAAgFQAAgFgCgDQgCgDgEAAQgKAAgJAJQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIgEgQIAAAAQAMgMANAAQALAAAHAIQAGAJAAAOIgEAyIAAABIgNACgAEAAIQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAFABQAEAAADgDQAEgCAAgFQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQgMABAAAIgAjDAhIAAAAIAEhxIAAAAQAVACAegBIAAABIgCAVIgBABIgQgBQgLgCgFABIAAABIgBAeIABAAIAWgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAVIAAAAIgWABIAAAAIAAAoIAAABgAE6AgIgEhOIABgBIAKgDIABAAIABAJIABAAIAIgHQAGgCADAAQAGAAAGADIABABIgEAVIAAABIgBgBQgFgFgHAAQgGAAgEAJIAAACIAFAvQAAABABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgRAEIgBgBgACuARQgLgQAAgWQAAgaAPgRQAOgQAVAAQAHAAAGADIABABIgEAXIgBABQgFgDgFAAQgMAAgJAJQgJAJAAAQQAAAfAbAAQAFAAADgCIABABIACASIgBACIgHACIgIABQgSAAgMgPgAF3ATQgHgMgBgOQgCgQAGgNQAHgNAMgCQANgCAIALQAHALABASIABAEIgBABIghAEIgBABQAAAHAFADQAEAEAHgBQAFAAAEgFQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAFARIAAABQgHAGgNAAQgNAAgIgLgAGJgiQgEABgDAFQgCAFAAAFIABAAIASgCIABAAQgDgOgHAAIgBAAg");
	this.shape_272.setTransform(103.9545,60.8871,0.3723,0.3723);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EE3338").s().p("AkIBMIgCAAIgCAAIAAgBIgEiPIAAgBIARgGIABABIABBIQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAJgNAKAAQAJAAAGAHQAGAJgBAMQABARgCAPIgGAdIgBABIgNgGIgBgBQAGgYAAgQQAAgXgIAAQgFABgEAFQgFAHAAAFIgCA1IAAAAgAnPBFQgFgEgCgKIgEgSIgCgpIABgBIASgEQAAAAAAAAQgBAPAAARQAAAfAJAAQAJAAAAgiIgCgeIABgBIAQgEIABABIAAAxIgCAPQgBAGgEAGQgCAFgGAEQgFAEgGAAQgIgBgFgFgAHrBIIABgiIgCgTIgCgFIgCgDIgDgBQgEAAgDADIgDAHIgFAvIgBABIgMAAIgBgBIABgQQACghAAgmIAAgBIARgBIAAABIAAAMIAAAAQAFgCAEgBQAHABAEADQAGAGACAEQAEANAAAWQAAAVgCANIgBABIgMABgAh0BIIACgpIgCgMIgCgFIgCgDIgDgBQgDAAgDADQgDAEgBADIgCAJIgCAmIgBABIgOAAIAAgBIABgQQADgpAAgeIAAgBIAQgBIAAAMIAAABIABAAQAEgCAFgBQAGABAFADQAFAFACAFQAEANAAAWQAAAOgBAUIgBABIgNABgAlxBIIABgpIgBgMIgCgFIgCgDIgEgBQgDAAgCADQgEAEgBADIgBAJIgDAmIAAABIgOAAIgBgBIABgQQADgpAAgeIAAgBIAQgBIABABIgBALIABABIAAAAQAFgCAEgBQAHABAEADQAGAFABAFQAFANAAAWQAAAOgCAUIAAABIgOABgABmBIIAAg2IAAgBIgMAAIgBAAIABgNIAAgBIALgBIABgBIAAgaQAAgOAGgJQAGgJALAAQAIAAAFAEQAGADABAKIACAGIgBACIgKAJIgBgBIgBgHIgCgGQgCgCgEAAQgCgBgCADQgDADgBADIgBAfIABAAIARAAIAAAAIgBASIgBAAIgPAAIAAAAIACAxIgRAFgAlPBBIAAAAIAEgRIABAAQAKAHAFAAQADAAAEgDQACgBAAgEQAAgEgCgDIgIgFIgGgCQgFgDgDgGQgCgGgBgJQAAgKAHgIQAHgHALAAQAJAAAIAGIAAABIgHAPIAAAAQgHgDgDAAQgDAAgEACQgCACAAAEQAAAGADACIAPAJIAEAEQAEADABAEQABAEAAAFQABAMgKAGQgIAGgLAAQgMAAgGgHgAFnBHIAAgKQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQgGAHgFAAQgJAAgFgHQgFgFAAgLQAAgKAGgHQAIgGAIAAQAFAAAEACIABAAIAAgCIABgDQAAgEgDgEQgBgDgFgBQgJAAgKAJQAAABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAIgDgPIAAgBQAMgMAMABQALAAAHAIQAGAHAAAOIgDAzIgBABIgNACgAFWAtQAAABAAAAQAAABABAAQAAABAAAAQABAAABABIAEABQAEAAAEgDQADgCAAgFQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgNABAAAKgAISBFIgChOIABgBIAKAAIAFgBIADAAQABAAAAABIgCBOIAAABIgPABgAAkBCQgGgFgDgHQgDgGgBgIIgCgOQAAgJADgKQAEgJAFgIQAHgHAKAAQAGAAAFAEQAEACAEAGQADAFABAFIAEAMIAAAMQAAAJgCAKQgEAJgGAGQgHAIgJgBQgIABgFgFgAAqAHQgCAFgCAEIgBAJIABAOIADAGIADAFQAEACADAAQADAAAEgFIADgLIAAgKQAAgHgDgIQgCgIgHAAQgEAAgDAEgAi+BFIAAgHIgBgEIAAhDIAAgBIATgBQAAAAAAABIgCBOIAAABIgIABIgIAAgAogBEIAAAAIgCgYIABAAQAHAEAKABQAEgBAGgCQAEgCAAgFQABgHgJgGIgKgFIgIgHQgEgFgBgFQgCgFAAgIQAAgIAEgGQAKgXAdAAIAFABIADAAIABABIgBAYIAAABIgKgBIgHAAIgGACIgGAFQgCACAAAFQAAAEACACIAEAEIAQAKIAEAEIAFAFIADAHIABAIQAAAIgEAHQgEAHgGADQgGAEgGABIgNACgAGQBEIgEhOIABgBIAKgCIABAAIACAJIAAAAIAIgHQAGgDAEABQAFAAAGACIABABIgDAVIgBABIAAgBQgGgFgHAAQgGAAgDAIIgBACIAGAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgRADIgBgBgADGBEIgBhtIABgBIATgBIABABIgDBMIgBAFIAAAIQABABAAAAIAggEIAAAAIAAABIgDAXIgBAAQgRAAgbABgAEOA4QgHgMgCgPQgBgQAGgNQAHgNAMgBQAOgDAGAMQAIAKABASIAAAEIAAABIgiAEIAAAAQAAAJAFADQAEAEAGgBQAGgBAEgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIAFARIAAABQgIAHgMAAQgOAAgHgLgAEfACQgDABgDAEQgCAGgBAEIABABIATgCIAAgBQgCgNgHAAIgCAAgAhIA4QgHgMgCgPQgBgRAHgMQAFgNANgBQAOgDAGAMQAIAKABASIAAAEIAAABIghAEIgBAAQAAAJAFADQAEAEAGgBQAFgBAFgEIABAAIAFARIAAABQgIAHgNAAQgNAAgHgLgAg3ACQgDABgDAEQgCAGAAAEIAAABIATgCIAAgBQgBgNgIAAIgCAAgAIQgdQgDgEAAgGQAAgEADgEQAEgFAEAAQAEAAADAFQADADABAGQgBAGgDAEQgDAFgFAAQgDgBgEgFgAjAgdQgDgEAAgGQAAgEADgEQADgFAFAAQAEAAADAFQADAFABAEQgBAFgDAFQgEAFgEAAQgDgBgEgFg");
	this.shape_273.setTransform(67.1635,59.5211,0.3723,0.3723);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#DEE99D").s().p("AktG/QimgEi1gVQlrgqhOhWQgfgogMhhQgYjBBfkZIAGgVQAPgYAvgVQCXhCGagCIDjgIQEQgIDlACQLgAIAiBqIAeBXQAhBqAHBiQAWE6jrBzQjAAlj6AcQkaAgjUAAQikAAh8gTg");
	this.shape_274.setTransform(79.2523,45.5806,0.3723,0.3723);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#CFDE56").s().p("AlPIoQi4gFjKgaQmTg0hWhqQgjgygNh3QgbjvBplbIAHgZQARgfA0gZQCohSHIgCID7gKQEugKEAADQMyAKAmCCQBBCmAMDCQAaGEkGCOQjWAtkVAjQk6AnjtAAQi2AAiJgXg");
	this.shape_275.setTransform(79.4165,45.7505,0.3723,0.3723);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#A9D046").s().p("AxVJzQhZAAhAhDQhAhDABheIAAseQgBheBAhDQBAhDBZAAMAirAAAQBZAABABDQA/BDABBeIAAMeQgBBeg/BDQhABDhZAAg");
	this.shape_276.setTransform(79.4303,45.5605,0.3723,0.3723);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgQAOQgHgGAAgHQAAgIAHgGQAHgGAJAAQALAAAGAGQAHAGAAAIQAAAHgHAGQgHAGgKAAQgJAAgHgGg");
	this.shape_277.setTransform(629.2,55.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_278.setTransform(615.075,48.225);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAjBDQgNAHgKADQgLAEgFAAQgkgBgRgSQgSgTAAgmQgBgiAbgZQAagaAjABQAOgBASAJQAXAJAAAMQgBAGgDADIgCAPIgBAUQAAAbAEANIAHAOIAGAPQAAAHgHAFQgFAGgIAAQgHgBgPgNgAgUgcQgPAPAAAUQABATAGAKQAIAKAOAAQAHgBAIgCQAIgDAIgGQgFgiABgRIABgLIABgOIgFgBIgEgBQgTgBgPARg");
	this.shape_279.setTransform(598.85,48.45);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AggBoQgRgrgWhPIgMgnQgJgcABgLQgBgIAHgGQAGgFAIgBQAOAAAGAPIAGAaIAOAvQALApALAgIAhhYIANgjQAIgUAKgLQAHgIAKAAQAHAAAHAGQAGAGAAAHQAAAHgDAFQgJAMgGAQIgLAdIgnBlQgHARgKASQgGALgLAAQgPAAgHgOg");
	this.shape_280.setTransform(580.45,45.05);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_281.setTransform(548.575,48.375);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAiBrQgDgMgDgVQgDgVAAgNIAAgLIABgLIgBgNQgBgHgGAAQgQAAgNAOQgGAHgMAVQAAA1gFALQgGAMgMAAQgJAAgGgFQgGgGAAgIIABgIQABgDABgkQgBgeABhDIABgFIAAgXIgBgNIgBgOQAAgIAGgFQAGgGAIAAQAPAAAFAQQACAIAAATIAAAdIgBAdQAKgLANgFQALgFAOAAQAZAAALAOQAIAKACAVIABAkIADAdQACAQADANIABAFQAAAIgGAGQgGAFgJAAQgPAAgEgPg");
	this.shape_282.setTransform(532.025,44.425);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgNBmQgFgGAAgHIAAgQIAAgQIgDhLIgbgCQgSgCgBgRQAAgJAGgFQAGgGAJAAIAYACIAAgPIgBgPQAAgJAGgEQAGgGAIAAQAWAAAAAkIgBANIAPgCQAQAAAHACQALAEAAAOQABAIgGAGQgGAFgJABIgHAAIgHgBIgOACIACBLIAAAIIABAIQAAAigVAAQgIAAgGgFg");
	this.shape_283.setTransform(516,45.95);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgbB7QgGgFAAgIIAAgEQAEgVAAgSIAAhIIgKABIgIABQgJAAgGgFQgGgGAAgJQAAgNAOgEQAHgCATgBIACgQQAEghANgQQAQgUAkAAQAaAAAAATQAAATgYAAQgSAAgIANQgGAJgCAUIgBAEIAcgCQAcAAAAATQAAATgdgBQgKAAgSACIgBAmIABAoQAAAagDAQQgEAQgPAAQgIAAgGgGg");
	this.shape_284.setTransform(488.075,45.175);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_285.setTransform(472.5724,48.525);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgpBNQgWgJAAgQQAAgOASAAQAHAAAMAEQANAEAHAAQAdAAAAgMQAAgHgVgJQgdgOgJgFQgUgOAAgVQAAgdAfgLQASgGAlAAQAOAAAHAEQAKAFAAAOQAAAbgOAAQgPAAgDgNIgMgBQgiAAAAAKQAAAGAUAJQAdAOALAHQAVAPAAATQAAAZgYANQgTALgaAAQgUAAgQgGg");
	this.shape_286.setTransform(444.375,48.325);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgMBmQgGgGgBgHIAAgQIABgQIgDhLIgbgCQgTgCAAgRQABgJAFgFQAGgGAIAAIAZACIAAgPIgBgPQAAgJAGgEQAGgGAIAAQAWAAAAAkIgBANIAPgCQARAAAGACQALAEAAAOQAAAIgFAGQgGAFgIABIgIAAIgHgBIgOACIADBLIAAAIIAAAIQAAAigVAAQgIAAgFgFg");
	this.shape_287.setTransform(430.2,45.95);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("Ag5BMQgFgFAAgIIAAhfIAAgOIAAgNQAAgJAGgFQAEgGAJAAQARAAADARQAZgTAgAAQAdAAAAAnIAAAKQgCAWgSAAQgTAAAAgTIgBgPQggAFgOAdIAABJQAAAIgFAGQgHAFgIAAQgJAAgFgGg");
	this.shape_288.setTransform(416.2,48.475);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AAjBDQgNAHgKADQgLAEgFAAQgkgBgSgSQgRgTAAgmQgBgiAbgZQAagaAjABQAOgBASAJQAXAJAAAMQgBAGgDADIgCAPIgBAUQAAAbAEANIAHAOIAFAPQABAHgHAFQgFAGgIAAQgHgBgPgNgAgUgcQgOAPAAAUQAAATAGAKQAIAKAOAAQAHgBAJgCQAHgDAIgGQgFgiABgRIABgLIABgOIgFgBIgEgBQgTgBgPARg");
	this.shape_289.setTransform(400.5,48.45);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("Ag9B1QgFgFAAgIIABg3IAAg5IgDg3IgCgcQAAgMAGgJQAGgKALAAQAIAAAFAFQAGAGAAAIIAAACQAJgGALgDQAJgCAJAAQAiAAAQAcQALAWAAAiQAAAfgSAVQgUAWghAAQgMAAgNgDIAAA9QAAAIgHAFQgFAGgJAAQgIAAgHgGgAgIhFQgJAEgJAJQABAeAAAeQANADAMAAQAPAAAJgJQAGgKAAgQQAAgUgBgHQgFgSgOAAQgJAAgJAEg");
	this.shape_290.setTransform(384.25,51.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgpBNQgWgJAAgQQAAgOASAAQAHAAAMAEQANAEAHAAQAdAAAAgMQAAgHgVgJQgdgOgJgFQgUgOAAgVQAAgdAfgLQASgGAlAAQAOAAAHAEQAKAFAAAOQAAAbgOAAQgPAAgDgNIgMgBQgiAAAAAKQAAAGAUAJQAdAOALAHQAVAPAAATQAAAZgYANQgTALgaAAQgUAAgQgGg");
	this.shape_291.setTransform(355.525,48.325);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAdBIQgTAIgTgBQgVAAgOgIQgQgKgDgUQgFgkAAgbQAAgUAEgYQADgRARAAQAIABAGAFQAGAGAAAHIgCAUQgCAOAAAIQAAAUABAOQACAPADALIAHACIAGABQAQAAATgFIAAgZIAAgYQAAgeACgWQADgSARAAQAJABAGAFQAGAGAAAIIgDAzIAAAdIAAAeIABAJIAAAJQAAAIgGAFQgGAFgIABQgMAAgGgMg");
	this.shape_292.setTransform(340.5019,48.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_293.setTransform(324.7224,48.525);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgSBrQgGgGABgJIgBgbIAAgaIABghIABggQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGgBAIIgBAgIgBAhIAAAaIABAbQAAAJgGAGQgFAFgIAAQgJAAgGgFgAgNhKQgHgGAAgJQAAgJAHgHQAHgGAJAAQAIAAAIAGQAGAHAAAJQAAAJgGAGQgIAHgIgBQgJABgHgHg");
	this.shape_294.setTransform(313.2,44.95);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("Ag5BMQgFgFAAgIIAAhfIABgOIAAgNQAAgJAEgFQAGgGAJAAQAQAAADARQAZgTAfAAQAeAAAAAnIAAAKQgBAWgUAAQgSAAAAgTIgBgPQggAFgOAdIAABJQAAAIgGAGQgFAFgJAAQgJAAgFgGg");
	this.shape_295.setTransform(301.7,48.475);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AAjBDQgNAHgKADQgLAEgFAAQgkgBgRgSQgTgTABgmQgBgiAbgZQAagaAjABQAOgBASAJQAXAJAAAMQAAAGgEADIgCAPIgBAUQAAAbAEANIAHAOIAGAPQAAAHgHAFQgFAGgIAAQgHgBgPgNgAgUgcQgPAPAAAUQABATAGAKQAIAKANAAQAJgBAHgCQAJgDAHgGQgFgiABgRIABgLIABgOIgFgBIgEgBQgTgBgPARg");
	this.shape_296.setTransform(286,48.45);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgVBBIgxh1QgCgFAAgEQABgHAGgGQAHgFAHAAQANAAAFALQAJASAYBAIAUgxIAOggQAFgMANAAQAHAAAHAGQAGAFAAAIQAAAGgYA0QgTAqgLAXQAAAIgGAEQgFAFgHAAQgOAAgHgPg");
	this.shape_297.setTransform(270.5,48.275);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgxA/QgZgSAAgiQAAgkAUgZQAVgdAkAAQAaAAAQAIQAXALAAAXQAAAQgSANQgJAFgYAKIgxAWQAHAIAKAEQAKADAMAAQAUAAANgIQAMgHAIAAQAPAAAAAPQAAARgYAKQgVAJgXAAQgiAAgWgRgAgTgiQgKAJgGASIAhgOQATgJAMgIQgKgFgQAAQgNAAgJAJg");
	this.shape_298.setTransform(241.375,48.375);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAiBrQgDgMgDgVQgDgVAAgNIAAgLIABgLIgBgNQgBgHgGAAQgQAAgNAOQgGAHgMAVQAAA1gFALQgGAMgMAAQgJAAgGgFQgGgGAAgIIABgIQABgDABgkQgBgeABhDIABgFIAAgXIgBgNIgBgOQAAgIAGgFQAGgGAIAAQAPAAAFAQQACAIAAATIAAAdIgBAdQAKgLANgFQALgFAOAAQAZAAALAOQAIAKACAVIABAkIADAdQACAQADANIABAFQAAAIgGAGQgGAFgJAAQgPAAgEgPg");
	this.shape_299.setTransform(224.825,44.425);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgNBmQgFgGgBgHIAAgQIABgQIgDhLIgbgCQgTgCABgRQAAgJAFgFQAGgGAIAAIAaACIgBgPIgBgPQAAgJAGgEQAGgGAIAAQAWAAAAAkIgBANIAPgCQARAAAGACQALAEABAOQgBAIgFAGQgGAFgIABIgIAAIgHgBIgOACIADBLIAAAIIAAAIQAAAigVAAQgIAAgGgFg");
	this.shape_300.setTransform(208.8,45.95);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAeBDIgEgeQgCgQAAgOIAAgMIABgNIAAgFIAAgHQAAgMgFAAQgNAAgLAQQgMAQgHAYIgBANIgBANIgBANIgBAMQAAAJgGAGQgGAFgIAAQgJAAgGgFQgGgGAAgIIAAgNIgBgNIACgoIACgmIgBgOIAAgNQAAgIAGgGQAGgFAIAAQATAAACAXIAAABQAVgVAXAAQAcAAAKAXQAHAQAAAeIAAALIAAAIQAAAMADASQADASAAALQAAAIgFAGQgGAFgJAAQgSAAgCgSg");
	this.shape_301.setTransform(181.025,48.225);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgSBrQgGgGABgJIgBgbIAAgaIABghIABggQABgIAFgGQAGgFAIAAQAJAAAFAFQAGAGgBAIIgBAgIgBAhIAAAaIABAbQAAAJgGAGQgFAFgIAAQgJAAgGgFgAgNhKQgHgGAAgJQAAgJAHgHQAHgGAJAAQAIAAAIAGQAGAHAAAJQAAAJgGAGQgIAHgIgBQgJABgHgHg");
	this.shape_302.setTransform(169.2,44.95);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgwA+QgVgVgBgiQgBgfATgZQAWgeAnAAQAdAAARAXQAQAVAAAgQAAAhgSAYQgVAaghAAQgbAAgUgSgAgVgYQgIAOAAARQAAASAKAJQAHAIALAAQAMAAAJgJQALgKABgRQABgugaAAIgBAAQgRAAgKAQg");
	this.shape_303.setTransform(156.5224,48.525);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("Ag/BlQgegVAAgcQAAgXAVAAQAUAAAAAXQAAAIAPAKQAPAKANAAQAGAAACgTIACguQACggAAgyIAAgKIgDAAIgRAAIgRAAQgJAAgGgGQgGgFAAgJQAAgUAaAAIAPAAIAOAAIAbgBIAcgBQAnAAAAAWQAAAIgFAGQgGAGgJAAIgJAAIgJgBIgLAAIgBALQAABogOAwQgLAjgcAAQgbAAgbgTg");
	this.shape_304.setTransform(139.025,45.475);

	this.instance_1 = new lib.BRIGHTEDGELOGO();
	this.instance_1.setTransform(727,28,0.0876,0.0876);

	this.pieces = new lib.Pieces();
	this.pieces.name = "pieces";
	this.pieces.setTransform(447.1,116.35,0.9696,1,0,0,0,390.3,340.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pieces},{t:this.instance_1},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.slots = new lib.Slots();
	this.slots.name = "slots";
	this.slots.setTransform(422.4,435.6,0.9357,0.9357,0,0,0,428.9,575.6);

	this.timeline.addTween(cjs.Tween.get(this.slots).wait(1));

	// Layer_3
	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#373535").ss(3).p("AEOhpIobAAIAADTIGhAAQAyAAAkgjQAkgkAAgyg");
	this.shape_305.setTransform(195.4006,431.6974,0.4835,0.4835);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#373535").ss(3).p("ACUhpImhAAIAADTIIbAAIAAhaQAAgygkgjQgkgkgyAAg");
	this.shape_306.setTransform(195.4006,421.4102,0.4835,0.4835);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#373535").ss(3).p("AiaAAQAAB8BaBYQBaBYCBACIAApbQiBADhaBYQhaBYAAB6g");
	this.shape_307.setTransform(690.6017,412.7292,0.4835,0.4835);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#373535").ss(3).p("AIdi2IAAFtQgJACgFAAItzAAQhMAAg2g2Qg2g2AAhNQAAhLA2g2QA2g2BMAAINzAAQAFAAAJABg");
	this.shape_308.setTransform(671.9009,475.7837,0.4835,0.4835);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#373535").ss(3).p("AFli3ItzAAQgJABgFAAIAAFtQAFABAJABINzAAQBMAAA2g2QA2g2AAhNQAAhLg2g2Qg2g2hMAAg");
	this.shape_309.setTransform(208.5044,475.7837,0.4835,0.4835);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(0.1,1,1).p("AgUgxIgfAtQAjAYAdAeIAngnQghgggngcg");
	this.shape_310.setTransform(293.8968,489.7338,0.4835,0.4835);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#373535").s().p("AgzgEIAfgtQAnAcAhAhIgnAmQgdgegjgYg");
	this.shape_311.setTransform(293.8968,489.7338,0.4835,0.4835);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(0.1,1,1).p("AgBg0IgsAgQAZAiARAnIAxgXQgUgqgbgog");
	this.shape_312.setTransform(298.8531,495.6692,0.4835,0.4835);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#373535").s().p("AgtgUIAsggQAbAoAUAqIgxAXQgRgngZgig");
	this.shape_313.setTransform(298.8531,495.6692,0.4835,0.4835);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(0.1,1,1).p("AASgwIg0AOQALAlAEAuIA2gEQgEgwgNgtg");
	this.shape_314.setTransform(301.4642,502.9705,0.4835,0.4835);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#373535").s().p("AgigiIA0gOQANAtAEAwIg2AEQgEgugLglg");
	this.shape_315.setTransform(301.4642,502.9705,0.4835,0.4835);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(0.1,1,1).p("AgHgaQgZAIgTAKIAYAxQAOgIAYgIQATgIAWgFIgOg0QgZAGgUAIg");
	this.shape_316.setTransform(271.5575,485.8413,0.4835,0.4835);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#373535").s().p("AgzgIQATgKAZgIQAUgJAZgFIAOA0QgWAFgTAIQgYAIgOAIg");
	this.shape_317.setTransform(271.5575,485.8413,0.4835,0.4835);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgZIAFA2IAqgDIArADIAFg2IgwgCg");
	this.shape_318.setTransform(279.3303,484.4632,0.4835,0.4835);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#373535").s().p("AAAAaIgqACIgFg1IAvgDIAwADIgGA1g");
	this.shape_319.setTransform(279.3303,484.4632,0.4835,0.4835);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(0.1,1,1).p("AglgoIgOA0QAXAFASAIQASAGAUAKIAYgwQgRgJgbgKQgUgIgZgGg");
	this.shape_320.setTransform(287.1273,485.8413,0.4835,0.4835);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#373535").s().p("AgKAZQgSgIgXgFIAOg0QAZAFAUAJQAbAKARAJIgYAwQgUgKgSgGg");
	this.shape_321.setTransform(287.1273,485.8413,0.4835,0.4835);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(0.1,1,1).p("AgiAtIA2AEQAEgrALgoIg0gOQgMApgFA0g");
	this.shape_322.setTransform(257.1723,502.9222,0.4835,0.4835);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#373535").s().p("AgiAtQAFg0AMgpIA0AOQgLAogEArg");
	this.shape_323.setTransform(257.1723,502.9222,0.4835,0.4835);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAeIAwAXQATgpAYggIgsggQgbAmgUAsg");
	this.shape_324.setTransform(259.8076,495.645,0.4835,0.4835);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#373535").s().p("AgtAeQAUgsAbgmIAsAgQgYAggTApg");
	this.shape_325.setTransform(259.8076,495.645,0.4835,0.4835);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(0.1,1,1).p("AgzAMIAnAmQAagcAmgaIgfgtQgkAagkAjg");
	this.shape_326.setTransform(264.7638,489.6975,0.4835,0.4835);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#373535").s().p("AgzAMQAkgjAkgaIAfAtQgmAagaAcg");
	this.shape_327.setTransform(264.7638,489.6975,0.4835,0.4835);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(0.1,1,1).p("AAVAyIAfgtQghgWgfggIgnAmQAjAjAlAag");
	this.shape_328.setTransform(264.7396,524.2703,0.4835,0.4835);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#373535").s().p("AgzgLIAngmQAfAgAhAWIgfAtQglgagjgjg");
	this.shape_329.setTransform(264.7396,524.2703,0.4835,0.4835);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(0.1,1,1).p("AACA1IAsggQgZgigRgnIgxAXQAVAsAaAmg");
	this.shape_330.setTransform(259.7834,518.3349,0.4835,0.4835);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#373535").s().p("AgtgdIAxgXQARAnAZAiIgsAgQgagmgVgsg");
	this.shape_331.setTransform(259.7834,518.3349,0.4835,0.4835);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(0.1,1,1).p("AgRAxIA0gOQgLglgEguIg2AEQAEAwANAtg");
	this.shape_332.setTransform(257.1723,511.0214,0.4835,0.4835);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#373535").s().p("AgigsIA2gEQAEAuALAlIg0AOQgNgtgEgwg");
	this.shape_333.setTransform(257.1723,511.0214,0.4835,0.4835);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(0.1,1,1).p("AA0AIIgYgwQgMAGgaAKQgSAHgXAGIAOA0QAfgIAOgGQAagJASgKg");
	this.shape_334.setTransform(287.079,528.1748,0.4835,0.4835);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#373535").s().p("AgzgLQAXgGASgHQAagKAMgGIAYAxQgSAIgaAKQgOAGgfAIg");
	this.shape_335.setTransform(287.079,528.1748,0.4835,0.4835);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(0.1,1,1).p("AgqgaIgFA1IBfAAIgFg1g");
	this.shape_336.setTransform(279.3061,529.4925,0.4835,0.4835);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#373535").s().p("AgvAbIAFg1IBVAAIAFA1g");
	this.shape_337.setTransform(279.3061,529.4925,0.4835,0.4835);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(0.1,1,1).p("AAmApIAOg0QgXgFgSgHQgSgHgUgKIgYAxQAUAKAZAIQATAIAZAGg");
	this.shape_338.setTransform(271.5091,528.1507,0.4835,0.4835);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#373535").s().p("AgGAbQgZgIgUgLIAYgwQAUAKASAGQASAIAXAFIgOA0QgZgGgTgIg");
	this.shape_339.setTransform(271.5091,528.1507,0.4835,0.4835);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(0.1,1,1).p("AAjgsIg2gEQgDArgMAoIA0AOQANgsAEgxg");
	this.shape_340.setTransform(301.4642,511.0698,0.4835,0.4835);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#373535").s().p("AgiAjQAMgoADgrIA2AEQgEAxgNAsg");
	this.shape_341.setTransform(301.4642,511.0698,0.4835,0.4835);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(0.1,1,1).p("AAugdIgwgXQgTAogYAhIAsAgQAcgoATgqg");
	this.shape_342.setTransform(298.8289,518.347,0.4835,0.4835);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#373535").s().p("AgtAVQAYghATgoIAwAXQgTAqgcAog");
	this.shape_343.setTransform(298.8289,518.347,0.4835,0.4835);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(0.1,1,1).p("AA0gLIgngmQgdAdgjAZIAfAtQAngdAhggg");
	this.shape_344.setTransform(293.8727,524.3066,0.4835,0.4835);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#373535").s().p("AgzAFQAjgZAdgdIAnAmQghAggnAdg");
	this.shape_345.setTransform(293.8727,524.3066,0.4835,0.4835);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAXIAuAdIAWgoQANgXAIgQIgwgYQgHAPgNAXQgSAfgDAFg");
	this.shape_346.setTransform(320.2374,529.42,0.4835,0.4835);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#373535").s().p("AgsAXIAVgkIAUgmIAwAYIgVAnIgWAog");
	this.shape_347.setTransform(320.2374,529.42,0.4835,0.4835);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(0.1,1,1).p("AgLgyIgNApQgJAXgGAQIAxAVQAIgRAIgaQAJgcAFgOg");
	this.shape_348.setTransform(323.3321,522.457,0.4835,0.4835);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#373535").s().p("AgoAeIAQgnIANgpIAzAQIgOAqIgQArg");
	this.shape_349.setTransform(323.3321,522.457,0.4835,0.4835);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(0.1,1,1).p("AghAlIA0ALQAFgSAEgaQAFgdACgPIg2gHQgJBBgFATg");
	this.shape_350.setTransform(325.2179,515.0469,0.4835,0.4835);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#373535").s().p("AgiAkQAGgSAJhBIA1AGIgGAsQgEAbgFASg");
	this.shape_351.setTransform(325.2179,515.0469,0.4835,0.4835);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(0.1,1,1).p("AgOgWQgVAPgQAHIAcAvQARgJAVgPQAMgIAZgRIgggsQgWARgMAHg");
	this.shape_352.setTransform(304.7764,546.0898,0.4835,0.4835);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#373535").s().p("AgzAAQAQgHAVgOIAigZIAgAsIglAZQgVAPgRAJg");
	this.shape_353.setTransform(304.7764,546.0898,0.4835,0.4835);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(0.1,1,1).p("AAzgKIgmgnIg/A5IAjAqg");
	this.shape_354.setTransform(310.7843,541.4237,0.4835,0.4835);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#373535").s().p("AgyAIIA/g5IAmAnIhCA8g");
	this.shape_355.setTransform(310.7843,541.4237,0.4835,0.4835);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(0.1,1,1).p("AgwAQIApAkQAJgMATgXQASgUAKgQIgtgfQgIAOgQAUQgaAegCACg");
	this.shape_356.setTransform(315.9944,535.8389,0.4835,0.4835);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#373535").s().p("AgwAQIAcggQAQgUAIgPIAtAgQgKAQgSAUIgcAig");
	this.shape_357.setTransform(315.9944,535.8389,0.4835,0.4835);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(0.1,1,1).p("AgtgXIACA2QAPgBAdgBQAbgCASgDIgHg2QgSAEhCADg");
	this.shape_358.setTransform(283.259,553.4396,0.4835,0.4835);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#373535").s().p("AgtgXQBCgDASgEIAHA2QgSADgbABIgsADg");
	this.shape_359.setTransform(283.259,553.4396,0.4835,0.4835);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(0.1,1,1).p("AgHgaQgkAJgFABIALA1QBTgVAEgBIgQgzQgQAEgZAGg");
	this.shape_360.setTransform(290.7659,552.2428,0.4835,0.4835);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#373535").s().p("AgwgQIAqgKIAogKIAPAzIhXAWg");
	this.shape_361.setTransform(290.7659,552.2428,0.4835,0.4835);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(0.1,1,1).p("AgygHIATAyQAdgKA2gaIgZgxQgaAMgMAGQgXALgQAGg");
	this.shape_362.setTransform(298.019,549.7526,0.4835,0.4835);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#373535").s().p("AgzgHQARgGAXgLIAmgSIAZAxQg3AagcAKg");
	this.shape_363.setTransform(298.019,549.7526,0.4835,0.4835);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgqIgXAwQAFADAkAQQAYAMARAGIATgyQgQgGgXgLQgkgRgDgBg");
	this.shape_364.setTransform(260.6658,549.7768,0.4835,0.4835);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#373535").s().p("AgJAZIgqgTIAZgwIAmASQAXALARAGIgUAyQgRgGgYgMg");
	this.shape_365.setTransform(260.6658,549.7768,0.4835,0.4835);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(0.1,1,1).p("AghgkIgQAzQAeAIA6AOIALg0Qg3gNgcgIg");
	this.shape_366.setTransform(267.8705,552.2428,0.4835,0.4835);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#373535").s().p("AgwAPIAQgzQAbAIA3ANIgLA0Qg6gOgdgIg");
	this.shape_367.setTransform(267.8705,552.2428,0.4835,0.4835);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgeIgHA1QASAEAbABQAOABAeACIACg2QhEgEgQgDg");
	this.shape_368.setTransform(275.4258,553.4517,0.4835,0.4835);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#373535").s().p("AAAAcQgbgBgSgEIAHg1QAQADBEAEIgCA2IgsgDg");
	this.shape_369.setTransform(275.4258,553.4517,0.4835,0.4835);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(0.1,1,1).p("AgDgyIgtAfQAKAQASAUQAJAMATAWIApgjQgSgVgKgLQgQgTgIgPg");
	this.shape_370.setTransform(242.6783,535.8631,0.4835,0.4835);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#373535").s().p("AgVARQgRgUgKgQIAtgfQAIAPARATIAbAgIgqAjIgcgig");
	this.shape_371.setTransform(242.6783,535.8631,0.4835,0.4835);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(0.1,1,1).p("AAQAyIAjgqIg+g5IgnAmg");
	this.shape_372.setTransform(247.8642,541.4479,0.4835,0.4835);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#373535").s().p("AgygLIAngmIA+A5IgjAqg");
	this.shape_373.setTransform(247.8642,541.4479,0.4835,0.4835);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(0.1,1,1).p("AgTguIggAsQANAIAZASQAVAOARAJIAbgvQgQgHgUgPQgXgQgMgIg");
	this.shape_374.setTransform(253.8963,546.114,0.4835,0.4835);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#373535").s().p("AgNAYIgmgZIAggtIAiAYQAVAPAQAHIgcAvQgRgJgUgOg");
	this.shape_375.setTransform(253.8963,546.114,0.4835,0.4835);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(0.1,1,1).p("AAUgvIg1AHQAJBCAGAWIA0gLQgFgUgJhAg");
	this.shape_376.setTransform(233.4307,515.0831,0.4835,0.4835);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#373535").s().p("AghgoIA1gHQAJBAAFAUIg0ALQgGgWgJhCg");
	this.shape_377.setTransform(233.4307,515.0831,0.4835,0.4835);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(0.1,1,1).p("AgngiQABACANAoQAJAaAHARIAxgVQgGgPgIgYQgMgkgCgFg");
	this.shape_378.setTransform(235.3165,522.4812,0.4835,0.4835);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#373535").s().p("AgZAIIgOgqIAzgQIAOApQAIAYAGAPIgxAVQgHgRgJgag");
	this.shape_379.setTransform(235.3165,522.4812,0.4835,0.4835);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(0.1,1,1).p("AAEgzIgwAZQANAaAfA0IAtgcQgcgxgNgag");
	this.shape_380.setTransform(238.4111,529.4562,0.4835,0.4835);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#373535").s().p("AgsgbIAwgYQANAaAcAxIgtAcQgfg0gNgbg");
	this.shape_381.setTransform(238.4111,529.4562,0.4835,0.4835);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAXIAuAdIAWgoQANgXAIgQIgwgYQgHAPgNAXQgSAfgDAFg");
	this.shape_382.setTransform(638.5249,529.42,0.4835,0.4835);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#373535").s().p("AgsAXIAVgkIAUgmIAwAYIgVAnIgWAog");
	this.shape_383.setTransform(638.5249,529.42,0.4835,0.4835);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(0.1,1,1).p("AgnAeIAxAVQAHgRAJgaQAJgcAFgOIgzgQQgDAKgLAfQgIAYgGAPg");
	this.shape_384.setTransform(641.6074,522.457,0.4835,0.4835);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#373535").s().p("AgnAeIAOgnIAOgpIAzAQIgOAqQgJAagHARg");
	this.shape_385.setTransform(641.6074,522.457,0.4835,0.4835);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(0.1,1,1).p("AAigoIg1gHQgJBBgFATIA0ALQAGgVAJhDg");
	this.shape_386.setTransform(643.4932,515.0469,0.4835,0.4835);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#373535").s().p("AghAkQAFgSAJhBIA1AGQgJBDgGAWg");
	this.shape_387.setTransform(643.4932,515.0469,0.4835,0.4835);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(0.1,1,1).p("AgXAvQARgJAVgPQANgIAYgRIgggsQgWARgMAHQgVAPgQAHg");
	this.shape_388.setTransform(623.0517,546.0898,0.4835,0.4835);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#373535").s().p("AgzAAQAQgHAVgOIAigZIAgAsIglAZQgVAPgRAJg");
	this.shape_389.setTransform(623.0517,546.0898,0.4835,0.4835);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(0.1,1,1).p("AAzgKIgngnIg+A5IAjAqg");
	this.shape_390.setTransform(629.0717,541.4237,0.4835,0.4835);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#373535").s().p("AgyAIIA+g5IAnAnIhCA8g");
	this.shape_391.setTransform(629.0717,541.4237,0.4835,0.4835);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(0.1,1,1).p("AgwAQIApAkQAJgMAUgXQARgUAKgQIgtgfQgIAOgRAUQgSAVgJALg");
	this.shape_392.setTransform(634.2697,535.8389,0.4835,0.4835);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#373535").s().p("AgwAQIAbggQARgUAIgPIAtAgQgKAQgSAUIgcAig");
	this.shape_393.setTransform(634.2697,535.8389,0.4835,0.4835);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(0.1,1,1).p("AAogeQgSAEhDADIACA2QAPgBAdgBQAbgCASgDg");
	this.shape_394.setTransform(601.5223,553.4396,0.4835,0.4835);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#373535").s().p("AgtgXQBDgDASgEIAGA2QgSADgbABIgsADg");
	this.shape_395.setTransform(601.5223,553.4396,0.4835,0.4835);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(0.1,1,1).p("AgwgQIALA1QBTgVAEgBIgQgzQgQAEgZAGQgkAJgFABg");
	this.shape_396.setTransform(609.0534,552.2428,0.4835,0.4835);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#373535").s().p("AgwgQIApgKIApgKIAQAzIhYAWg");
	this.shape_397.setTransform(609.0534,552.2428,0.4835,0.4835);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(0.1,1,1).p("AgygHIATAyQARgGAYgLQAOgHAbgMIgYgxQgzAZgaAKg");
	this.shape_398.setTransform(616.2943,549.7526,0.4835,0.4835);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#373535").s().p("AgygHQAagKAzgZIAYAxIgpATQgYALgRAGg");
	this.shape_399.setTransform(616.2943,549.7526,0.4835,0.4835);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgqIgXAwQAFADAkAQQAYAMARAGIAUgyQgQgGgYgLQgkgRgDgBg");
	this.shape_400.setTransform(578.9533,549.7768,0.4835,0.4835);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#373535").s().p("AgJAZIgqgTIAZgwIAmASQAXALAQAGIgTAyQgRgGgYgMg");
	this.shape_401.setTransform(578.9533,549.7768,0.4835,0.4835);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(0.1,1,1).p("AgggkIgRAzQAeAIA5AOIAMg0Qg3gNgbgIg");
	this.shape_402.setTransform(586.1579,552.2428,0.4835,0.4835);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#373535").s().p("AgwAPIAQgzQAbAIA3ANIgMA0IhWgWg");
	this.shape_403.setTransform(586.1579,552.2428,0.4835,0.4835);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgeIgHA1QASAEAbABQAOABAeACIACg2QgcgBgPgBQgYgCgRgDg");
	this.shape_404.setTransform(593.7132,553.4517,0.4835,0.4835);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#373535").s().p("AAAAcQgbgBgSgEIAHg1QARADAYACIArACIgCA2IgsgDg");
	this.shape_405.setTransform(593.7132,553.4517,0.4835,0.4835);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(0.1,1,1).p("AgDgyIgtAfQAKAQARAUQAKAMATAWIApgjQgmgqgOgYg");
	this.shape_406.setTransform(560.9536,535.8631,0.4835,0.4835);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#373535").s().p("AgVARQgRgUgKgQIAtgfQAOAYAmAqIgpAjIgdgig");
	this.shape_407.setTransform(560.9536,535.8631,0.4835,0.4835);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(0.1,1,1).p("AgLgxIgnAmIBCA9IAjgqg");
	this.shape_408.setTransform(566.1396,541.4479,0.4835,0.4835);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#373535").s().p("AgygLIAngmIA+A5IgjAqg");
	this.shape_409.setTransform(566.1396,541.4479,0.4835,0.4835);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(0.1,1,1).p("AgTguIggAsQANAIAZASQAUAPARAIIAcgvQgQgHgUgPQgXgQgMgIg");
	this.shape_410.setTransform(572.1838,546.114,0.4835,0.4835);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#373535").s().p("AgNAYIgmgZIAggtIAjAYQAUAPAQAHIgcAvQgRgJgUgOg");
	this.shape_411.setTransform(572.1838,546.114,0.4835,0.4835);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(0.1,1,1).p("AAUgvIg2AHQADAPAEAdQAEAaAFASIA1gLQgGgUgJhAg");
	this.shape_412.setTransform(551.706,515.0831,0.4835,0.4835);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#373535").s().p("AgbAEIgGgsIA1gHQAJBAAFAUIg0ALQgFgSgEgag");
	this.shape_413.setTransform(551.706,515.0831,0.4835,0.4835);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(0.1,1,1).p("AgngiQAAACAOAoQAJAaAHARIAxgVQgGgQgJgXIgNgpg");
	this.shape_414.setTransform(553.6039,522.4812,0.4835,0.4835);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#373535").s().p("AgZAIIgOgqIAzgQIANApIAPAnIgxAVQgHgRgJgag");
	this.shape_415.setTransform(553.6039,522.4812,0.4835,0.4835);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(0.1,1,1).p("AAEgzIgwAZQAHAPAlA/IAtgcQgcgxgNgag");
	this.shape_416.setTransform(556.6985,529.4562,0.4835,0.4835);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#373535").s().p("AgsgbIAwgYQANAaAcAxIgtAcIgshPg");
	this.shape_417.setTransform(556.6985,529.4562,0.4835,0.4835);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(0.1,1,1).p("AARAeIAIg1IgpgGIgIA1g");
	this.shape_418.setTransform(632.4928,345.906,0.4835,0.4835);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#373535").s().p("AgYAYIAIg1IApAGIgIA1g");
	this.shape_419.setTransform(632.4928,345.906,0.4835,0.4835);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(0.1,1,1).p("AgxAbIAAg1IBjAAIAAA1g");
	this.shape_420.setTransform(653.5507,510.7796,0.4835,0.4835);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#373535").s().p("AgxAbIAAg1IBjAAIAAA1g");
	this.shape_421.setTransform(653.5507,510.7796,0.4835,0.4835);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(0.1,1,1).p("AAOgEIAkAAIAAA1IhjAAIAGhhIA2ABIgCAoIACABIACAAg");
	this.shape_422.setTransform(644.8834,509.728,0.4835,0.4835);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#373535").s().p("AgxAxIAGhhIA2AAIgCApIACABIABAAIACABIAjAAIAAA2g");
	this.shape_423.setTransform(644.8834,509.728,0.4835,0.4835);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(0.1,1,1).p("AAhAxIg1AEIgCgYIgKhHIA1gKg");
	this.shape_424.setTransform(643.6382,501.0364,0.4835,0.4835);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#373535").s().p("AgWAdIgKhHIA1gKIAMBlIg1AEg");
	this.shape_425.setTransform(643.6382,501.0364,0.4835,0.4835);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(0.1,1,1).p("AAXAXIgBAeIg2gEIACggIAKhFIA1AJg");
	this.shape_426.setTransform(551.3675,501.2177,0.4835,0.4835);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#373535").s().p("AggAyIABghIALhFIA1AJIgKBCIgCAeg");
	this.shape_427.setTransform(551.3675,501.2177,0.4835,0.4835);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(0.1,1,1).p("AgJgvIA1gBIAGBhIhjAAIAAg2IAoAAIAAgEIABgBg");
	this.shape_428.setTransform(550.1224,509.9335,0.4835,0.4835);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#373535").s().p("AgxAxIAAg2IAoAAIAAgEIABgBIgBglIA1gBIAGBhg");
	this.shape_429.setTransform(550.1224,509.9335,0.4835,0.4835);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(0.1,1,1).p("AgxAcIAAg3IBjAAIAAA3g");
	this.shape_430.setTransform(541.443,510.961,0.4835,0.4835);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#373535").s().p("AgxAbIAAg2IBjAAIAAA2g");
	this.shape_431.setTransform(541.443,510.961,0.4835,0.4835);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(0.1,1,1).p("AgxAbIAAg1IBjAAIAAA1g");
	this.shape_432.setTransform(335.2754,510.7796,0.4835,0.4835);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#373535").s().p("AgxAbIAAg1IBjAAIAAA1g");
	this.shape_433.setTransform(335.2754,510.7796,0.4835,0.4835);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(0.1,1,1).p("AALgGIABAAIACACIAkAAIAAA1IhjAAIAGhhIA2ABIgCAog");
	this.shape_434.setTransform(326.608,509.728,0.4835,0.4835);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#373535").s().p("AgxAxIAGhhIA2AAIgCApIACABIABAAIACABIAkAAIAAA2g");
	this.shape_435.setTransform(326.608,509.728,0.4835,0.4835);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(0.1,1,1).p("AAhAxIg2AEIgBgYIgLhHIA1gKg");
	this.shape_436.setTransform(325.3629,501.0364,0.4835,0.4835);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#373535").s().p("AgVAdIgLhHIA1gKIAMBlIg2AEg");
	this.shape_437.setTransform(325.3629,501.0364,0.4835,0.4835);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(0.1,1,1).p("AAXAXIgBAeIg2gEIACggIALhFIA0AJg");
	this.shape_438.setTransform(233.0801,501.2177,0.4835,0.4835);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#373535").s().p("AggAyIABghIAMhFIA0AJIgKBCIgCAeg");
	this.shape_439.setTransform(233.0801,501.2177,0.4835,0.4835);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(0.1,1,1).p("AgxgFIAoAAIAAgEIACgBIgCglIA1gBIAGBhIhjAAg");
	this.shape_440.setTransform(231.835,509.9335,0.4835,0.4835);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#373535").s().p("AgxAxIAAg2IAoAAIAAgEIACgBIgCglIA1gBIAGBhg");
	this.shape_441.setTransform(231.835,509.9335,0.4835,0.4835);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(0.1,1,1).p("AgxAcIAAg3IBjAAIAAA3g");
	this.shape_442.setTransform(223.1676,510.961,0.4835,0.4835);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#373535").s().p("AgxAbIAAg2IBjAAIAAA2g");
	this.shape_443.setTransform(223.1676,510.961,0.4835,0.4835);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(0.1,1,1).p("AAqAiIAIg2IhbgNIgIA1g");
	this.shape_444.setTransform(654.1552,348.904,0.4835,0.4835);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#373535").s().p("AgxAVIAIg2IBbANIgIA2g");
	this.shape_445.setTransform(654.1552,348.904,0.4835,0.4835);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(0.1,1,1).p("AAqAiIAIg1IhbgOIgIA2g");
	this.shape_446.setTransform(646.2493,347.7435,0.4835,0.4835);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#373535").s().p("AgxAVIAIg2IBbANIgIA2g");
	this.shape_447.setTransform(646.2493,347.7435,0.4835,0.4835);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(0.1,1,1).p("AAqAiIAIg1IhbgOIgIA1g");
	this.shape_448.setTransform(638.3194,346.5709,0.4835,0.4835);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#373535").s().p("AgxAUIAIg1IBbAOIgIA1g");
	this.shape_449.setTransform(638.3194,346.5709,0.4835,0.4835);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(0.1,1,1).p("AgjgqIgSAzQAjALAwAXIAYgwQg2gZgjgMg");
	this.shape_450.setTransform(677.8726,353.6305,0.4835,0.4835);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#373535").s().p("Ag1AJIASgzQAjAMA2AZIgYAwQgwgXgjgLg");
	this.shape_451.setTransform(677.8726,353.6305,0.4835,0.4835);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAkIANg0QgSgFgdgGQgegFgQgDIgIA1QAPADAeAFQAaAFARAFg");
	this.shape_452.setTransform(670.1481,351.3458,0.4835,0.4835);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#373535").s().p("AgFAaIgtgIIAIg1IAuAIQAcAGATAFIgNA0QgRgFgagFg");
	this.shape_453.setTransform(670.1481,351.3458,0.4835,0.4835);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(0.1,1,1).p("AAygTIhbgOIgIA1IBbAOg");
	this.shape_454.setTransform(662.1577,350.0765,0.4835,0.4835);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#373535").s().p("AgxAUIAIg1IBbAOIgIA1g");
	this.shape_455.setTransform(662.1577,350.0765,0.4835,0.4835);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(0.1,1,1).p("AgEA2IAxgUQgFgQgPgcQgNgdgKgOIguAcQAHALAOAbQAPAgAEAJg");
	this.shape_456.setTransform(695.5337,369.4784,0.4835,0.4835);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#373535").s().p("AgXANQgOgcgHgKIAugcQAKAPANAcQAPAcAFAQIgxAUQgDgJgQggg");
	this.shape_457.setTransform(695.5337,369.4784,0.4835,0.4835);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(0.1,1,1).p("AAIA1IArghQgPgUgQgRQgUgYgMgLIgmAnQAHAGAJAJQAFAGAJALQAQAQAMASg");
	this.shape_458.setTransform(691.0489,362.8177,0.4835,0.4835);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#373535").s().p("AgUATIgOgRIgQgPIAmgnQAMALAUAYQAQARAPAUIgrAhQgMgSgQgQg");
	this.shape_459.setTransform(691.0489,362.8177,0.4835,0.4835);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(0.1,1,1).p("AAUAxIAigrQgRgNg9gqIgdAvQA4AlARAOg");
	this.shape_460.setTransform(685.0168,357.4867,0.4835,0.4835);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#373535").s().p("Ag1gCIAcgvQA+AqARANIgiArQgRgNg4gmg");
	this.shape_461.setTransform(685.0168,357.4867,0.4835,0.4835);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_462.setTransform(698.4591,393.353,0.4835,0.4835);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_463.setTransform(698.4591,393.353,0.4835,0.4835);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_464.setTransform(698.4591,385.3505,0.4835,0.4835);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_465.setTransform(698.4591,385.3505,0.4835,0.4835);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(0.1,1,1).p("AgYAGQAAAIADAOQACANAAAJIA2gEQAAgJgGgnQgFgggFgQIg1AOQAGAQAEAag");
	this.shape_466.setTransform(697.9998,377.1908,0.4835,0.4835);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#373535").s().p("AgVAcIgEgWQgDgagGgQIA0gNQAGAQAEAgQAHAmgBAJIg1AFQAAgKgCgNg");
	this.shape_467.setTransform(697.9998,377.1908,0.4835,0.4835);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_468.setTransform(698.4591,417.4572,0.4835,0.4835);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_469.setTransform(698.4591,417.4572,0.4835,0.4835);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_470.setTransform(698.4591,409.4547,0.4835,0.4835);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_471.setTransform(698.4591,409.4547,0.4835,0.4835);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgtIAABbIA3AAIAAhbg");
	this.shape_472.setTransform(698.4591,401.428,0.4835,0.4835);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_473.setTransform(698.4591,401.428,0.4835,0.4835);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_474.setTransform(698.4591,441.5373,0.4835,0.4835);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_475.setTransform(698.4591,441.5373,0.4835,0.4835);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_476.setTransform(698.4591,433.559,0.4835,0.4835);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_477.setTransform(698.4591,433.559,0.4835,0.4835);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgtIAABbIA3AAIAAhbg");
	this.shape_478.setTransform(698.4591,425.5323,0.4835,0.4835);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_479.setTransform(698.4591,425.5323,0.4835,0.4835);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_480.setTransform(698.4591,465.6416,0.4835,0.4835);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_481.setTransform(698.4591,465.6416,0.4835,0.4835);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_482.setTransform(698.4591,457.6391,0.4835,0.4835);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_483.setTransform(698.4591,457.6391,0.4835,0.4835);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgtIAABbIA3AAIAAhbg");
	this.shape_484.setTransform(698.4591,449.6124,0.4835,0.4835);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_485.setTransform(698.4591,449.6124,0.4835,0.4835);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAtIA2ABQAAg8ABgfIg2AAQAABLgBAPg");
	this.shape_486.setTransform(698.447,489.7579,0.4835,0.4835);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#373535").s().p("AgbAtIABhaIA2AAIgBBbg");
	this.shape_487.setTransform(698.447,489.7579,0.4835,0.4835);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAuIA3AAIAAhbIg3AAg");
	this.shape_488.setTransform(698.4591,481.7433,0.4835,0.4835);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_489.setTransform(698.4591,481.7433,0.4835,0.4835);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgtIAABbIA3AAIAAhbg");
	this.shape_490.setTransform(698.4591,473.7166,0.4835,0.4835);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_491.setTransform(698.4591,473.7166,0.4835,0.4835);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(0.1,1,1).p("Ag1gGIASAyQANgEAggOIAsgXIgbgug");
	this.shape_492.setTransform(686.2136,509.1356,0.4835,0.4835);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#373535").s().p("Ag1gGIBQglIAbAuIgsAXIgtASg");
	this.shape_493.setTransform(686.2136,509.1356,0.4835,0.4835);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(0.1,1,1).p("Ag0AKIAjArQAhgcAlgqIgrgjQgfAmgfAYg");
	this.shape_494.setTransform(692.8259,504.6025,0.4835,0.4835);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#373535").s().p("Ag0AKQAfgXAfgnIAqAjQgkArgiAbg");
	this.shape_495.setTransform(692.8259,504.6025,0.4835,0.4835);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(0.1,1,1).p("AgKg1QgOAzgSAeIAwAaQAUglARg5g");
	this.shape_496.setTransform(697.2019,497.9176,0.4835,0.4835);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#373535").s().p("AgqAcQASgeAPgzIA0ANQgRA5gUAlg");
	this.shape_497.setTransform(697.2019,497.9176,0.4835,0.4835);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAbIBbAAIAAg1IhbAAg");
	this.shape_498.setTransform(662.206,511.5533,0.4835,0.4835);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#373535").s().p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_499.setTransform(662.206,511.5533,0.4835,0.4835);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(0.1,1,1).p("AgtgaIAAA1IBbAAIAAg1g");
	this.shape_500.setTransform(670.2085,511.5533,0.4835,0.4835);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#373535").s().p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_501.setTransform(670.2085,511.5533,0.4835,0.4835);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(0.1,1,1).p("AgxgWIACA3QAvgCAygKIgLg1QgrAKgtAAg");
	this.shape_502.setTransform(678.3682,511.2753,0.4835,0.4835);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#373535").s().p("AgwgVQAsgBArgJIALA0QgyAKgvACg");
	this.shape_503.setTransform(678.3682,511.2753,0.4835,0.4835);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(0.1,1,1).p("AgJg1IgpAkQANAOARAVQAJAMARAYIAtgfQgTgagKgNQgRgWgOgPg");
	this.shape_504.setTransform(633.5324,478.4674,0.4835,0.4835);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#373535").s().p("AgUARQgRgUgNgOIApgkQAOAOARAXIAdAmIgtAgIgaglg");
	this.shape_505.setTransform(633.5324,478.4674,0.4835,0.4835);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(0.1,1,1).p("AAAg2IguAdQATAeAFAIIAUAqIAxgXg");
	this.shape_506.setTransform(638.0171,485.2973,0.4835,0.4835);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#373535").s().p("AgWANIgXgmIAtgdIAuBWIgwAXg");
	this.shape_507.setTransform(638.0171,485.2973,0.4835,0.4835);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(0.1,1,1).p("AgLA2IA0gOQgHgggXg9IgzAUQAXA6AGAdg");
	this.shape_508.setTransform(641.2206,492.8526,0.4835,0.4835);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#373535").s().p("AgoghIAzgUQAXA9AHAfIg0APQgGgegXg5g");
	this.shape_509.setTransform(641.2206,492.8526,0.4835,0.4835);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(0.1,1,1).p("AglgpIgQAzQAHADAkANQAZAJARAHIAWgxQgRgIgdgKg");
	this.shape_510.setTransform(613.8404,464.0701,0.4835,0.4835);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#373535").s().p("AgKAaIgrgQIAQgzIAtAQQAdAKARAIIgWAxIgqgQg");
	this.shape_511.setTransform(613.8404,464.0701,0.4835,0.4835);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(0.1,1,1).p("AAZAwIAeguQg3ghgcgQIgaAwQAbAOA0Ahg");
	this.shape_512.setTransform(621.2143,467.6241,0.4835,0.4835);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#373535").s().p("Ag2ABIAagwQAcAQA3AhIgfAuQgzghgbgOg");
	this.shape_513.setTransform(621.2143,467.6241,0.4835,0.4835);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(0.1,1,1).p("AgTgzIgiArQAaARArArIAmgoQgGgFgegaQgVgVgQgLg");
	this.shape_514.setTransform(627.8387,472.4836,0.4835,0.4835);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#373535").s().p("Ag1gIIAigrQAPALAVAVIAlAfIgmAoQgsgrgZgRg");
	this.shape_515.setTransform(627.8387,472.4836,0.4835,0.4835);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(0.1,1,1).p("AgzgRIANA0QAdgJA9gHIgHg1QgEAAgsAHQgdAEgTAGg");
	this.shape_516.setTransform(589.3855,461.8942,0.4835,0.4835);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#373535").s().p("AgzgRQATgGAdgEIAwgHIAHA1Qg9AHgdAJg");
	this.shape_517.setTransform(589.3855,461.8942,0.4835,0.4835);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(0.1,1,1).p("AAuAdIADg2IgxgDIgwADIADA1g");
	this.shape_518.setTransform(597.6056,461.1447,0.4835,0.4835);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#373535").s().p("AgtAcIgDg1IAwgDIAxADIgDA2g");
	this.shape_519.setTransform(597.6056,461.1447,0.4835,0.4835);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(0.1,1,1).p("AgsgjIgHA2QABAAAtAHQAbAEARAFIANg0QgTgGgdgEQgsgHgEgBg");
	this.shape_520.setTransform(605.862,461.9063,0.4835,0.4835);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#373535").s().p("AgFAaIgugHIAHg2IAwAIQAdAFATAFIgNA1QgSgGgagEg");
	this.shape_521.setTransform(605.862,461.9063,0.4835,0.4835);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(0.1,1,1).p("Ag1AMIAmAoQADgCAegdQAVgUAPgJIgigrQgQALgVAUQgXAWgNAKg");
	this.shape_522.setTransform(567.4088,472.4594,0.4835,0.4835);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#373535").s().p("Ag1AMIAkggQAVgUAQgLIAiArQgPAJgVAUIghAfg");
	this.shape_523.setTransform(567.4088,472.4594,0.4835,0.4835);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(0.1,1,1).p("Ag2ACIAeAuQAagQA1ggIgagvQg3AigcAPg");
	this.shape_524.setTransform(574.0091,467.6241,0.4835,0.4835);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#373535").s().p("Ag2ACIBTgxIAaAvIhPAwg");
	this.shape_525.setTransform(574.0091,467.6241,0.4835,0.4835);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(0.1,1,1).p("Ag1gHIAWAyQAcgNA5gUIgQg0IguARQgbAKgSAIg");
	this.shape_526.setTransform(581.3951,464.058,0.4835,0.4835);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#373535").s().p("Ag1gHQASgIAcgKIAtgQIAQAzQg5AUgcAMg");
	this.shape_527.setTransform(581.3951,464.058,0.4835,0.4835);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(0.1,1,1).p("AgoAnIA0APQAFgXAYhAIgygUQgZBCgGAag");
	this.shape_528.setTransform(553.9907,492.8163,0.4835,0.4835);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#373535").s().p("AgoAnQAGgaAZhCIAyAUQgYBAgFAXg");
	this.shape_529.setTransform(553.9907,492.8163,0.4835,0.4835);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAfIAwAYIAUgqQAHgNARgaIgvgcQgRAcgHAOg");
	this.shape_530.setTransform(557.1941,485.2973,0.4835,0.4835);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#373535").s().p("AguAfIAWgrIAYgqIAvAcQgRAagHANIgUAqg");
	this.shape_531.setTransform(557.1941,485.2973,0.4835,0.4835);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(0.1,1,1).p("AgyAWIAsAgQAJgMASgZQARgUANgOIgpgkQgOAOgRAXQgTAZgKANg");
	this.shape_532.setTransform(561.691,478.4311,0.4835,0.4835);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#373535").s().p("AgyAWIAegmQARgXANgOIApAkQgNAOgRAUIgbAlg");
	this.shape_533.setTransform(561.691,478.4311,0.4835,0.4835);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_534.setTransform(516.553,511.5533,0.4835,0.4835);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_535.setTransform(516.553,511.5533,0.4835,0.4835);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(0.1,1,1).p("AguAbIBdAAIAAg1IhdAAg");
	this.shape_536.setTransform(524.7368,511.5533,0.4835,0.4835);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_537.setTransform(524.7368,511.5533,0.4835,0.4835);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_538.setTransform(532.9327,511.5533,0.4835,0.4835);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_539.setTransform(532.9327,511.5533,0.4835,0.4835);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_540.setTransform(491.9047,511.5533,0.4835,0.4835);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_541.setTransform(491.9047,511.5533,0.4835,0.4835);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_542.setTransform(500.0886,511.5533,0.4835,0.4835);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#373535").s().p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_543.setTransform(500.0886,511.5533,0.4835,0.4835);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_544.setTransform(508.2966,511.5533,0.4835,0.4835);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_545.setTransform(508.2966,511.5533,0.4835,0.4835);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(0.1,1,1).p("AguAbIBdAAIAAg1IhdAAg");
	this.shape_546.setTransform(467.2686,511.5533,0.4835,0.4835);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_547.setTransform(467.2686,511.5533,0.4835,0.4835);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_548.setTransform(475.4403,511.5533,0.4835,0.4835);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_549.setTransform(475.4403,511.5533,0.4835,0.4835);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(0.1,1,1).p("AAwgaIhfAAIAAA1IBfAAg");
	this.shape_550.setTransform(483.6484,511.5533,0.4835,0.4835);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#373535").s().p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_551.setTransform(483.6484,511.5533,0.4835,0.4835);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_552.setTransform(442.6083,511.5533,0.4835,0.4835);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_553.setTransform(442.6083,511.5533,0.4835,0.4835);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_554.setTransform(450.7921,511.5533,0.4835,0.4835);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#373535").s().p("AgvAbIAAg1IBeAAIAAA1g");
	this.shape_555.setTransform(450.7921,511.5533,0.4835,0.4835);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_556.setTransform(459.0001,511.5533,0.4835,0.4835);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_557.setTransform(459.0001,511.5533,0.4835,0.4835);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_558.setTransform(417.9721,511.5533,0.4835,0.4835);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_559.setTransform(417.9721,511.5533,0.4835,0.4835);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(0.1,1,1).p("AguAbIBdAAIAAg1IhdAAg");
	this.shape_560.setTransform(426.1439,511.5533,0.4835,0.4835);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_561.setTransform(426.1439,511.5533,0.4835,0.4835);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_562.setTransform(434.3519,511.5533,0.4835,0.4835);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_563.setTransform(434.3519,511.5533,0.4835,0.4835);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_564.setTransform(393.3118,511.5533,0.4835,0.4835);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_565.setTransform(393.3118,511.5533,0.4835,0.4835);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_566.setTransform(401.5077,511.5533,0.4835,0.4835);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_567.setTransform(401.5077,511.5533,0.4835,0.4835);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(0.1,1,1).p("AAvgaIhdAAIAAA1IBdAAg");
	this.shape_568.setTransform(409.7036,511.5533,0.4835,0.4835);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_569.setTransform(409.7036,511.5533,0.4835,0.4835);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(0.1,1,1).p("AguAbIBdAAIAAg1IhdAAg");
	this.shape_570.setTransform(368.6756,511.5533,0.4835,0.4835);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_571.setTransform(368.6756,511.5533,0.4835,0.4835);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_572.setTransform(376.8474,511.5533,0.4835,0.4835);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_573.setTransform(376.8474,511.5533,0.4835,0.4835);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_574.setTransform(385.0554,511.5533,0.4835,0.4835);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_575.setTransform(385.0554,511.5533,0.4835,0.4835);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgaIAAA1IBfAAIAAg1g");
	this.shape_576.setTransform(344.0274,511.5533,0.4835,0.4835);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#373535").s().p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_577.setTransform(344.0274,511.5533,0.4835,0.4835);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_578.setTransform(352.2112,511.5533,0.4835,0.4835);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_579.setTransform(352.2112,511.5533,0.4835,0.4835);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(0.1,1,1).p("AgugaIAAA1IBdAAIAAg1g");
	this.shape_580.setTransform(360.4072,511.5533,0.4835,0.4835);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#373535").s().p("AguAbIAAg1IBdAAIAAA1g");
	this.shape_581.setTransform(360.4072,511.5533,0.4835,0.4835);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(0.1,1,1).p("AgJg1IgpAkQANAOAQAVQAKAMASAYIAsgfQgTgagKgNQgRgWgOgPg");
	this.shape_582.setTransform(315.257,478.4674,0.4835,0.4835);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#373535").s().p("AgUARQgRgUgNgOIApgkQANAOASAXIAdAmIgsAgIgbglg");
	this.shape_583.setTransform(315.257,478.4674,0.4835,0.4835);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").ss(0.1,1,1).p("AAAg2IguAdQATAeAFAIIAUAqIAxgXg");
	this.shape_584.setTransform(319.7297,485.2973,0.4835,0.4835);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#373535").s().p("AgWANIgXgmIAtgdIAuBWIgwAXg");
	this.shape_585.setTransform(319.7297,485.2973,0.4835,0.4835);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").ss(0.1,1,1).p("AAKg1IgyAUQAXA9AFAaIA0gOQgHgggXg9g");
	this.shape_586.setTransform(322.9452,492.8526,0.4835,0.4835);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#373535").s().p("AgoghIAygUQAYA9AGAfIgzAPQgGgagXg9g");
	this.shape_587.setTransform(322.9452,492.8526,0.4835,0.4835);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").ss(0.1,1,1).p("AglgpIgQAzQAdALA5AVIAVgxQgRgIgdgKg");
	this.shape_588.setTransform(295.5529,464.0701,0.4835,0.4835);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#373535").s().p("Ag1AKIAQgzIAtAQQAcAKASAIIgWAxIhVggg");
	this.shape_589.setTransform(295.5529,464.0701,0.4835,0.4835);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(0.1,1,1).p("AgcgvIgaAwQAbAOAzAhIAfguQg3ghgcgQg");
	this.shape_590.setTransform(302.9389,467.6241,0.4835,0.4835);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#373535").s().p("Ag2ABIAagwQAcAQA3AhIgfAuQgzghgbgOg");
	this.shape_591.setTransform(302.9389,467.6241,0.4835,0.4835);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(0.1,1,1).p("AgRAVQAcAbAFAEIAmgoQgIgGgcgZQgVgVgQgLIgiArQAPAKAVATg");
	this.shape_592.setTransform(309.5634,472.4836,0.4835,0.4835);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#373535").s().p("AgRAVQgVgTgPgKIAigrQAQALAVAVIAkAfIgmAoIghgfg");
	this.shape_593.setTransform(309.5634,472.4836,0.4835,0.4835);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").ss(0.1,1,1).p("AgnAjQAegJA8gHIgHg1QgDAAgsAHQgdAEgTAGg");
	this.shape_594.setTransform(271.1102,461.8942,0.4835,0.4835);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#373535").s().p("AgzgRQATgGAdgEIAwgHIAHA1Qg9AHgeAJg");
	this.shape_595.setTransform(271.1102,461.8942,0.4835,0.4835);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").ss(0.1,1,1).p("AAuAdIADg2IgxgDIgwADIADA1g");
	this.shape_596.setTransform(279.3303,461.1447,0.4835,0.4835);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#373535").s().p("AgtAcIgDg1IAwgDIAxADIgDA2g");
	this.shape_597.setTransform(279.3303,461.1447,0.4835,0.4835);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").ss(0.1,1,1).p("AgsgjIgHA2QABAAAtAHQAbAEARAFIANg0QgTgGgdgEQgsgHgEgBg");
	this.shape_598.setTransform(287.5746,461.9063,0.4835,0.4835);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#373535").s().p("AgFAaIgugHIAHg2IAwAIQAdAFATAFIgNA1QgRgGgbgEg");
	this.shape_599.setTransform(287.5746,461.9063,0.4835,0.4835);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").ss(0.1,1,1).p("Ag1AMIAmAoQAGgFAbgaQAVgUAPgJIgigrQgQALgVAUQgXAWgNAKg");
	this.shape_600.setTransform(249.1214,472.4594,0.4835,0.4835);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#373535").s().p("Ag1AMIAkggQAVgUAQgLIAiArQgPAJgVAUIghAfg");
	this.shape_601.setTransform(249.1214,472.4594,0.4835,0.4835);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").ss(0.1,1,1).p("Ag2ACIAfAuQAZgQA1ggIgagvQg3AigcAPg");
	this.shape_602.setTransform(255.7217,467.6241,0.4835,0.4835);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#373535").s().p("Ag2ACIBTgxIAaAvIhOAwg");
	this.shape_603.setTransform(255.7217,467.6241,0.4835,0.4835);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").ss(0.1,1,1).p("Ag1gHIAWAyQAcgNA5gUIgRg0IgtARQgbAKgSAIg");
	this.shape_604.setTransform(263.1198,464.058,0.4835,0.4835);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#373535").s().p("Ag1gHQASgIAbgKIAtgQIARAzQg5AUgcAMg");
	this.shape_605.setTransform(263.1198,464.058,0.4835,0.4835);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").ss(0.1,1,1).p("AgnAnIAzAPQAFgXAXhAIgxgUQgZBBgFAbg");
	this.shape_606.setTransform(235.7154,492.8163,0.4835,0.4835);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#373535").s().p("AgnAnQAFgbAYhBIAyAUQgXBAgFAXg");
	this.shape_607.setTransform(235.7154,492.8163,0.4835,0.4835);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").ss(0.1,1,1).p("AAugaIgugcQgVAlgDAFIgVArIAwAYg");
	this.shape_608.setTransform(238.9067,485.2973,0.4835,0.4835);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#373535").s().p("AgtAfIAVgrIAYgqIAuAcIgrBRg");
	this.shape_609.setTransform(238.9067,485.2973,0.4835,0.4835);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").ss(0.1,1,1).p("AgyAWIAsAgQAJgMASgZQAQgUAOgOIgqgkQgNAPgRAWQgTAZgKANg");
	this.shape_610.setTransform(243.4278,478.4311,0.4835,0.4835);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#373535").s().p("AgyAWIAdgmQARgWAOgPIApAkQgOAOgQAUIgbAlg");
	this.shape_611.setTransform(243.4278,478.4311,0.4835,0.4835);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgqIgZAvQAVAMBCAaIASgzQgcgKgNgGQgXgJgQgJg");
	this.shape_612.setTransform(199.4502,508.6884,0.4835,0.4835);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#373535").s().p("Ag0AGIAZgwQAQAJAXAJIApAQIgSAzQhCgagVgLg");
	this.shape_613.setTransform(199.4502,508.6884,0.4835,0.4835);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#000000").ss(0.1,1,1).p("AgkgiIgNA0QAzANApAEIAHg2QghgDg1gMg");
	this.shape_614.setTransform(206.9571,510.9005,0.4835,0.4835);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#373535").s().p("AgxASIANg0QA1AMAhADIgHA2QgpgEgzgNg");
	this.shape_615.setTransform(206.9571,510.9005,0.4835,0.4835);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#000000").ss(0.1,1,1).p("AgrgbIgBA2QAfACA6gBIAAg2Qg7ABgdgCg");
	this.shape_616.setTransform(214.8387,511.5388,0.4835,0.4835);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#373535").s().p("AgsAbIABg2QAdACA7gBIAAA2IgqAAIgvgBg");
	this.shape_617.setTransform(214.8387,511.5388,0.4835,0.4835);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#000000").ss(0.1,1,1).p("AAMgzIg0ANIAOAtQACAFAQAoIAxgXQgMgagEgNg");
	this.shape_618.setTransform(183.3726,492.3569,0.4835,0.4835);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#373535").s().p("AgaAHIgOgtIA0gNIAMApQAFANAMAaIgxAXIgSgtg");
	this.shape_619.setTransform(183.3726,492.3569,0.4835,0.4835);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#000000").ss(0.1,1,1).p("AAyAQQgSgSgigyIguAeQAoA3ARAUg");
	this.shape_620.setTransform(187.0475,499.2231,0.4835,0.4835);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#373535").s().p("AgwgWIAugeQAhAyATASIgpAlQgSgUgng3g");
	this.shape_621.setTransform(187.0475,499.2231,0.4835,0.4835);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#000000").ss(0.1,1,1).p("Ag0gHQA1AqAWAOIAeguQgQgIgTgPQgWgTgLgJg");
	this.shape_622.setTransform(192.6082,504.7475,0.4835,0.4835);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#373535").s().p("Ag0gHIAkgpIAiAbQATAQAQAIIgeAuQgXgOg0gqg");
	this.shape_623.setTransform(192.6082,504.7475,0.4835,0.4835);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_624.setTransform(181.9704,468.8692,0.4835,0.4835);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_625.setTransform(181.9704,468.8692,0.4835,0.4835);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_626.setTransform(181.9704,476.6299,0.4835,0.4835);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_627.setTransform(181.9704,476.6299,0.4835,0.4835);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#000000").ss(0.1,1,1).p("AgZAuIA2gFIgDhWIg2AAg");
	this.shape_628.setTransform(182.0308,484.5116,0.4835,0.4835);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#373535").s().p("AgcguIA2AAIADBXIg2AGg");
	this.shape_629.setTransform(182.0308,484.5116,0.4835,0.4835);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_630.setTransform(181.9704,445.4298,0.4835,0.4835);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_631.setTransform(181.9704,445.4298,0.4835,0.4835);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_632.setTransform(181.9704,453.2026,0.4835,0.4835);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_633.setTransform(181.9704,453.2026,0.4835,0.4835);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_634.setTransform(181.9704,461.0117,0.4835,0.4835);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_635.setTransform(181.9704,461.0117,0.4835,0.4835);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_636.setTransform(181.9704,421.9904,0.4835,0.4835);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_637.setTransform(181.9704,421.9904,0.4835,0.4835);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_638.setTransform(181.9704,429.7753,0.4835,0.4835);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_639.setTransform(181.9704,429.7753,0.4835,0.4835);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_640.setTransform(181.9704,437.5723,0.4835,0.4835);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_641.setTransform(181.9704,437.5723,0.4835,0.4835);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_642.setTransform(181.9704,398.5631,0.4835,0.4835);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_643.setTransform(181.9704,398.5631,0.4835,0.4835);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_644.setTransform(181.9704,406.3359,0.4835,0.4835);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_645.setTransform(181.9704,406.3359,0.4835,0.4835);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_646.setTransform(181.9704,414.1329,0.4835,0.4835);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_647.setTransform(181.9704,414.1329,0.4835,0.4835);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_648.setTransform(181.9704,375.1358,0.4835,0.4835);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_649.setTransform(181.9704,375.1358,0.4835,0.4835);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_650.setTransform(181.9704,382.8965,0.4835,0.4835);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_651.setTransform(181.9704,382.8965,0.4835,0.4835);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_652.setTransform(181.9704,390.7056,0.4835,0.4835);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_653.setTransform(181.9704,390.7056,0.4835,0.4835);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgrIg2gCQgCA9ABAdIA2AAQgBgdACg7g");
	this.shape_654.setTransform(182.0042,351.6601,0.4835,0.4835);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#373535").s().p("AgbAuQgBgeACg8IA2ABQgCA7ABAeg");
	this.shape_655.setTransform(182.0042,351.6601,0.4835,0.4835);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_656.setTransform(181.9704,359.4692,0.4835,0.4835);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_657.setTransform(181.9704,359.4692,0.4835,0.4835);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgsIg3AAIAABZIA3AAg");
	this.shape_658.setTransform(181.9704,367.2783,0.4835,0.4835);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#373535").s().p("AgbAtIAAhZIA3AAIAABZg");
	this.shape_659.setTransform(181.9704,367.2783,0.4835,0.4835);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#000000").ss(0.1,1,1).p("AgNgyIgYBYIA0ANIAXhVg");
	this.shape_660.setTransform(185.198,328.4141,0.4835,0.4835);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#373535").s().p("AglAmIAYhYIAzAQIgXBVg");
	this.shape_661.setTransform(185.198,328.4141,0.4835,0.4835);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#000000").ss(0.1,1,1).p("AAjglIg1gLQgLAzgFAmIA1AIQADgYANg+g");
	this.shape_662.setTransform(183.4693,336.0298,0.4835,0.4835);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#373535").s().p("AgiApQAFgmAMgzIA0ALQgNA+gDAYg");
	this.shape_663.setTransform(183.4693,336.0298,0.4835,0.4835);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#000000").ss(0.1,1,1).p("AAfgoIg1gHIgIBbIA1AEg");
	this.shape_664.setTransform(182.3814,343.7785,0.4835,0.4835);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#373535").s().p("AgeAsIAIhbIA1AHIgHBYg");
	this.shape_665.setTransform(182.3814,343.7785,0.4835,0.4835);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").ss(0.1,1,1).p("AAAg0QgPAbgIANQgOAWgIAQIAvAbQANgbAfgxg");
	this.shape_666.setTransform(194.2885,306.8001,0.4835,0.4835);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#373535").s().p("AgtAaQAIgQAOgWIAXgoIAuAdQgfAxgNAbg");
	this.shape_667.setTransform(194.2885,306.8001,0.4835,0.4835);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#000000").ss(0.1,1,1).p("AAGA1QAmhPAAgBIgwgZQgaA3gNAcg");
	this.shape_668.setTransform(190.674,313.7026,0.4835,0.4835);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#373535").s().p("AgrAfIAnhSIAwAYIgmBPg");
	this.shape_669.setTransform(190.674,313.7026,0.4835,0.4835);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#000000").ss(0.1,1,1).p("AApgeIgxgVQgZA+gHAXIAyASQAFgSAKgYQALgaAFgOg");
	this.shape_670.setTransform(187.6398,320.9193,0.4835,0.4835);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#373535").s().p("AgoAiQAHgXAZg+IAxAVIgQAoQgKAYgFASg");
	this.shape_671.setTransform(187.6398,320.9193,0.4835,0.4835);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#000000").ss(0.1,1,1).p("AAzgMIgngnQgpAtgVAVIApAlQA7hAABAAg");
	this.shape_672.setTransform(208.311,287.9905,0.4835,0.4835);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#373535").s().p("AgyAPIA+hCIAnAnIg8BAg");
	this.shape_673.setTransform(208.311,287.9905,0.4835,0.4835);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#000000").ss(0.1,1,1).p("AAygQIgqgjQgnAugSAYIAsAhQAQgYAngsg");
	this.shape_674.setTransform(203.1855,293.8655,0.4835,0.4835);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#373535").s().p("AgxATQASgYAnguIAqAjQgnAsgQAYg");
	this.shape_675.setTransform(203.1855,293.8655,0.4835,0.4835);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#000000").ss(0.1,1,1).p("AAwgUIgsggQgCADgxBIIAtAeQAGgJATgcQAPgWAKgOg");
	this.shape_676.setTransform(198.5073,300.1273,0.4835,0.4835);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#373535").s().p("AgvAXIAzhLIAsAgIgaAkIgYAlg");
	this.shape_677.setTransform(198.5073,300.1273,0.4835,0.4835);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#000000").ss(0.1,1,1).p("AA1gCIgfgtQg/ArgLAIIAgAsQALgJA+gpg");
	this.shape_678.setTransform(226.1051,272.6987,0.4835,0.4835);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#373535").s().p("Ag0AEIBKgzIAfAuQg+AogLAJg");
	this.shape_679.setTransform(226.1051,272.6987,0.4835,0.4835);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#000000").ss(0.1,1,1).p("AA0gFIghgsQguAngYASIAjAqQAWgTAugkg");
	this.shape_680.setTransform(219.8433,277.3528,0.4835,0.4835);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#373535").s().p("AgzAIIBGg5IAhAsIhEA3g");
	this.shape_681.setTransform(219.8433,277.3528,0.4835,0.4835);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#000000").ss(0.1,1,1).p("AgRgUQgVATgNAMIAmAoQAUgWAtgmIgkgpg");
	this.shape_682.setTransform(213.92,282.4661,0.4835,0.4835);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#373535").s().p("AgzALIAigfIAhgeIAkApQgtAmgUAVg");
	this.shape_683.setTransform(213.92,282.4661,0.4835,0.4835);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#000000").ss(0.1,1,1).p("AA0AIIgVgyIhSAkIAXAxg");
	this.shape_684.setTransform(246.5587,261.1906,0.4835,0.4835);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#373535").s().p("AgzgGIBSgkIAVAyIhQAjg");
	this.shape_685.setTransform(246.5587,261.1906,0.4835,0.4835);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#000000").ss(0.1,1,1).p("AA1AEIgYgwQgkARgtAZIAbAvQAogXAmgSg");
	this.shape_686.setTransform(239.5353,264.5874,0.4835,0.4835);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#373535").s().p("Ag0gCQAugZAigRIAYAwQgmASgoAXg");
	this.shape_687.setTransform(239.5353,264.5874,0.4835,0.4835);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#000000").ss(0.1,1,1).p("AA1AAIgcguIhNAuIAdAvg");
	this.shape_688.setTransform(232.7054,268.4073,0.4835,0.4835);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#373535").s().p("Ag0AAIBNguIAcAuIhMAvg");
	this.shape_689.setTransform(232.7054,268.4073,0.4835,0.4835);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgkIhXAVIAOA0IBVgVg");
	this.shape_690.setTransform(268.7771,253.6595,0.4835,0.4835);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#373535").s().p("AgxgPIBXgVIAMA0IhVAVg");
	this.shape_691.setTransform(268.7771,253.6595,0.4835,0.4835);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#000000").ss(0.1,1,1).p("AAzAOIgPg0Qg5AQgdAKIARAzQARgGAYgHQAPgFAcgHg");
	this.shape_692.setTransform(261.2582,255.7266,0.4835,0.4835);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#373535").s().p("AgygMQAdgKA5gQIAPA0IgrAMQgYAHgRAHg");
	this.shape_693.setTransform(261.2582,255.7266,0.4835,0.4835);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#000000").ss(0.1,1,1).p("AgzgJIAUAyQBNgdAGgCIgTgzQg3AWgdAKg");
	this.shape_694.setTransform(253.8601,258.241,0.4835,0.4835);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#373535").s().p("AgzgIIBUghIATAzIhTAgg");
	this.shape_695.setTransform(253.8601,258.241,0.4835,0.4835);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#000000").ss(0.1,1,1).p("AAsgdIhaAGIAEA1IBZgGg");
	this.shape_696.setTransform(291.9748,250.0813,0.4835,0.4835);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#373535").s().p("AgugXIBagGIADA1IhZAGg");
	this.shape_697.setTransform(291.9748,250.0813,0.4835,0.4835);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#000000").ss(0.1,1,1).p("AAwAWIgFg2QgfAEgOABQgbADgSAEIAIA1QAKgCBNgJg");
	this.shape_698.setTransform(284.214,250.8429,0.4835,0.4835);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#373535").s().p("AgvgUQASgEAbgCIAtgGIAFA1IhYAMg");
	this.shape_699.setTransform(284.214,250.8429,0.4835,0.4835);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#000000").ss(0.1,1,1).p("AAxATIgJg1QgSACgZAFQgsAJgBAAIAKA1QAPgCAcgHQAagFASgCg");
	this.shape_700.setTransform(276.4895,252.0276,0.4835,0.4835);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#373535").s().p("AgwgSIAtgJQAZgFASgCIAJA1QgSACgaAFIgrAJg");
	this.shape_701.setTransform(276.4895,252.0276,0.4835,0.4835);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_702.setTransform(315.4504,249.7187,0.4835,0.4835);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_703.setTransform(315.4504,249.7187,0.4835,0.4835);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_704.setTransform(307.6655,249.7187,0.4835,0.4835);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_705.setTransform(307.6655,249.7187,0.4835,0.4835);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAaIAAg1IhZACIABA1g");
	this.shape_706.setTransform(299.8443,249.767,0.4835,0.4835);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#373535").s().p("AgsgZIBZgCIAAA1IhYACg");
	this.shape_707.setTransform(299.8443,249.767,0.4835,0.4835);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_708.setTransform(338.8777,249.7187,0.4835,0.4835);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_709.setTransform(338.8777,249.7187,0.4835,0.4835);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_710.setTransform(331.1049,249.7187,0.4835,0.4835);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_711.setTransform(331.1049,249.7187,0.4835,0.4835);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_712.setTransform(323.3079,249.7187,0.4835,0.4835);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_713.setTransform(323.3079,249.7187,0.4835,0.4835);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_714.setTransform(362.3051,249.7187,0.4835,0.4835);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_715.setTransform(362.3051,249.7187,0.4835,0.4835);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_716.setTransform(354.5443,249.7187,0.4835,0.4835);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_717.setTransform(354.5443,249.7187,0.4835,0.4835);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_718.setTransform(346.7352,249.7187,0.4835,0.4835);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_719.setTransform(346.7352,249.7187,0.4835,0.4835);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_720.setTransform(385.7565,249.7187,0.4835,0.4835);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_721.setTransform(385.7565,249.7187,0.4835,0.4835);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_722.setTransform(377.9716,249.7187,0.4835,0.4835);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_723.setTransform(377.9716,249.7187,0.4835,0.4835);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_724.setTransform(370.1625,249.7187,0.4835,0.4835);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_725.setTransform(370.1625,249.7187,0.4835,0.4835);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_726.setTransform(409.1838,249.7187,0.4835,0.4835);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_727.setTransform(409.1838,249.7187,0.4835,0.4835);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_728.setTransform(401.3989,249.7187,0.4835,0.4835);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_729.setTransform(401.3989,249.7187,0.4835,0.4835);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_730.setTransform(393.614,249.7187,0.4835,0.4835);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_731.setTransform(393.614,249.7187,0.4835,0.4835);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_732.setTransform(432.6112,249.7187,0.4835,0.4835);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_733.setTransform(432.6112,249.7187,0.4835,0.4835);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_734.setTransform(424.8504,249.7187,0.4835,0.4835);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_735.setTransform(424.8504,249.7187,0.4835,0.4835);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_736.setTransform(417.0413,249.7187,0.4835,0.4835);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_737.setTransform(417.0413,249.7187,0.4835,0.4835);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_738.setTransform(456.0626,249.7187,0.4835,0.4835);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_739.setTransform(456.0626,249.7187,0.4835,0.4835);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_740.setTransform(448.2777,249.7187,0.4835,0.4835);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_741.setTransform(448.2777,249.7187,0.4835,0.4835);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_742.setTransform(440.4686,249.7187,0.4835,0.4835);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_743.setTransform(440.4686,249.7187,0.4835,0.4835);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_744.setTransform(479.4899,249.7187,0.4835,0.4835);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_745.setTransform(479.4899,249.7187,0.4835,0.4835);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_746.setTransform(471.705,249.7187,0.4835,0.4835);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_747.setTransform(471.705,249.7187,0.4835,0.4835);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_748.setTransform(463.9201,249.7187,0.4835,0.4835);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_749.setTransform(463.9201,249.7187,0.4835,0.4835);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_750.setTransform(502.9173,249.7187,0.4835,0.4835);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_751.setTransform(502.9173,249.7187,0.4835,0.4835);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_752.setTransform(495.1565,249.7187,0.4835,0.4835);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_753.setTransform(495.1565,249.7187,0.4835,0.4835);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_754.setTransform(487.3474,249.7187,0.4835,0.4835);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_755.setTransform(487.3474,249.7187,0.4835,0.4835);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgaIhZAAIAAA1IBZAAg");
	this.shape_756.setTransform(526.3687,249.7187,0.4835,0.4835);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_757.setTransform(526.3687,249.7187,0.4835,0.4835);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_758.setTransform(518.5838,249.7187,0.4835,0.4835);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_759.setTransform(518.5838,249.7187,0.4835,0.4835);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_760.setTransform(510.7747,249.7187,0.4835,0.4835);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_761.setTransform(510.7747,249.7187,0.4835,0.4835);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#000000").ss(0.1,1,1).p("AAnAgIAJg1QgfgFg9gFIgDA1QA5AFAdAFg");
	this.shape_762.setTransform(549.8807,250.0572,0.4835,0.4835);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#373535").s().p("AgvAWIADg1QA9AFAfAFIgJA1QgdgFg5gFg");
	this.shape_763.setTransform(549.8807,250.0572,0.4835,0.4835);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_764.setTransform(542.0111,249.7187,0.4835,0.4835);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_765.setTransform(542.0111,249.7187,0.4835,0.4835);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIAAg1IhZAAIAAA1g");
	this.shape_766.setTransform(534.2262,249.7187,0.4835,0.4835);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#373535").s().p("AgsAbIAAg1IBZAAIAAA1g");
	this.shape_767.setTransform(534.2262,249.7187,0.4835,0.4835);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#000000").ss(0.1,1,1).p("AAQAyIAlgoQgngighgZIghAtQAiAXAiAfg");
	this.shape_768.setTransform(571.4584,258.785,0.4835,0.4835);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#373535").s().p("AgzgEIAfgtQAiAZAmAiIglAoQghgfghgXg");
	this.shape_769.setTransform(571.4584,258.785,0.4835,0.4835);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#000000").ss(0.1,1,1).p("Ag0AFQAeANAvAbIAcguQgsgagmgRg");
	this.shape_770.setTransform(564.9065,254.5178,0.4835,0.4835);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#373535").s().p("Ag0AFIAXgxQAlARAtAaIgbAuQgxgbgdgNg");
	this.shape_771.setTransform(564.9065,254.5178,0.4835,0.4835);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#000000").ss(0.1,1,1).p("AAhAnIASgyQgrgQgtgLIgNA0QAvAMAkANg");
	this.shape_772.setTransform(557.6414,251.6045,0.4835,0.4835);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#373535").s().p("AgyAOIANg0QAtALArAQIgSAyQgkgNgvgMg");
	this.shape_773.setTransform(557.6414,251.6045,0.4835,0.4835);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#000000").ss(0.1,1,1).p("AABA1IAugeIgvhLIguAeg");
	this.shape_774.setTransform(581.3588,270.9459,0.4835,0.4835);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#373535").s().p("AgugWIAugeIAvBLIguAeg");
	this.shape_775.setTransform(581.3588,270.9459,0.4835,0.4835);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#000000").ss(0.1,1,1).p("AAEA1IAugfQgXgigjgoIgoAlQAfAjAVAhg");
	this.shape_776.setTransform(577.0191,264.4061,0.4835,0.4835);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#373535").s().p("AgwgPIAogkQAiAoAYAhIguAeQgUgggggjg");
	this.shape_777.setTransform(577.0191,264.4061,0.4835,0.4835);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#000000").ss(0.1,1,1).p("AgUgxIgfAtQAkAYAcAeIAngnQghgggngcg");
	this.shape_778.setTransform(612.1842,489.7338,0.4835,0.4835);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#373535").s().p("AgzgEIAfgtQAnAcAhAhIgnAmQgcgegkgYg");
	this.shape_779.setTransform(612.1842,489.7338,0.4835,0.4835);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#000000").ss(0.1,1,1).p("AgBg0IgsAgQAXAfATAqIAxgXQgUgqgbgog");
	this.shape_780.setTransform(617.1405,495.6692,0.4835,0.4835);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#373535").s().p("AgtgUIAsggQAbAoAUAqIgxAXQgTgqgXgfg");
	this.shape_781.setTransform(617.1405,495.6692,0.4835,0.4835);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#000000").ss(0.1,1,1).p("AASgwIg0AOQALAlAEAuIA2gEQgEgxgNgsg");
	this.shape_782.setTransform(619.7516,502.9705,0.4835,0.4835);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#373535").s().p("AgigiIA0gOQANAsAEAxIg2AEQgEgugLglg");
	this.shape_783.setTransform(619.7516,502.9705,0.4835,0.4835);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#000000").ss(0.1,1,1).p("AgzgIIAYAxQAPgIAXgIQATgJAWgEIgOg0QgZAGgUAIQgZAIgTAKg");
	this.shape_784.setTransform(589.8449,485.8413,0.4835,0.4835);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#373535").s().p("AgzgIQATgKAZgIQAUgJAZgFIAOA0QgWAEgTAJQgXAHgPAJg");
	this.shape_785.setTransform(589.8449,485.8413,0.4835,0.4835);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgZIAFA2IAqgDIArADIAFg2IgwgCg");
	this.shape_786.setTransform(597.6177,484.4632,0.4835,0.4835);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#373535").s().p("AAAAaIgqACIgFg1IAvgDIAwADIgGA1g");
	this.shape_787.setTransform(597.6177,484.4632,0.4835,0.4835);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#000000").ss(0.1,1,1).p("AglgoIgOA0QAWAEATAJQATAGAUAKIAXgwQgUgKgYgJQgUgIgZgGg");
	this.shape_788.setTransform(605.4027,485.8413,0.4835,0.4835);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#373535").s().p("AgKAZQgTgJgWgEIAOg0QAaAGASAIQAZAJAUAKIgXAwQgVgKgSgGg");
	this.shape_789.setTransform(605.4027,485.8413,0.4835,0.4835);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#000000").ss(0.1,1,1).p("AgiAtIA2AEQAEgvALgkIg0gOQgNAtgEAwg");
	this.shape_790.setTransform(575.4597,502.9222,0.4835,0.4835);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#373535").s().p("AgiAtQAEgwANgtIA0AOQgLAkgEAvg");
	this.shape_791.setTransform(575.4597,502.9222,0.4835,0.4835);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#000000").ss(0.1,1,1).p("AguAeIAxAXQATgpAYggIgsggQgaAlgWAtg");
	this.shape_792.setTransform(578.0829,495.645,0.4835,0.4835);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#373535").s().p("AgtAeQAVgtAaglIAtAgQgZAggTApg");
	this.shape_793.setTransform(578.0829,495.645,0.4835,0.4835);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#000000").ss(0.1,1,1).p("AAVgxQgnAcghAhIAnAmQAdgeAjgYg");
	this.shape_794.setTransform(583.0512,489.6975,0.4835,0.4835);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#373535").s().p("AgzAMQAhghAngcIAfAtQgjAYgdAeg");
	this.shape_795.setTransform(583.0512,489.6975,0.4835,0.4835);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#000000").ss(0.1,1,1).p("AA0AFQgkgYgcgeIgnAmQAjAjAlAag");
	this.shape_796.setTransform(583.027,524.2703,0.4835,0.4835);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#373535").s().p("AgzgLIAngmQAcAeAkAYIgfAtQglgagjgjg");
	this.shape_797.setTransform(583.027,524.2703,0.4835,0.4835);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#000000").ss(0.1,1,1).p("AACA1IAsggQgZgigRgnIgxAXQAVAsAaAmg");
	this.shape_798.setTransform(578.0708,518.3349,0.4835,0.4835);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#373535").s().p("AgtgdIAxgXQARAnAZAiIgsAgQgagmgVgsg");
	this.shape_799.setTransform(578.0708,518.3349,0.4835,0.4835);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#000000").ss(0.1,1,1).p("AgRAxIA0gOQgLglgEguIg2AEQAEAwANAtg");
	this.shape_800.setTransform(575.4597,511.0214,0.4835,0.4835);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#373535").s().p("AgigsIA2gEQAEAuALAlIg0AOQgNgtgEgwg");
	this.shape_801.setTransform(575.4597,511.0214,0.4835,0.4835);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#000000").ss(0.1,1,1).p("AA0AIIgYgwQgMAGgaAKQgQAGgZAHIAOA0QAfgIANgGQAagJATgKg");
	this.shape_802.setTransform(605.3664,528.1748,0.4835,0.4835);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#373535").s().p("AgzgLQAZgHAQgGQAagKAMgGIAYAxQgTAJgaAJQgNAGgfAIg");
	this.shape_803.setTransform(605.3664,528.1748,0.4835,0.4835);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#000000").ss(0.1,1,1).p("AgqgaIgFA1IBfAAIgFg1g");
	this.shape_804.setTransform(597.5936,529.4925,0.4835,0.4835);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#373535").s().p("AgvAbIAFg1IBVAAIAFA1g");
	this.shape_805.setTransform(597.5936,529.4925,0.4835,0.4835);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#000000").ss(0.1,1,1).p("AAmApIAOg0QgWgEgTgIQgUgHgSgKIgYAxQATAKAZAIQAUAJAZAFg");
	this.shape_806.setTransform(589.7965,528.1507,0.4835,0.4835);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#373535").s().p("AgHAbQgZgIgTgLIAYgwQASAKAUAGQATAJAWAEIgOA0QgZgGgUgIg");
	this.shape_807.setTransform(589.7965,528.1507,0.4835,0.4835);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#000000").ss(0.1,1,1).p("AAjgsIg2gEQgDApgMAqIA0AOQAMgoAFg1g");
	this.shape_808.setTransform(619.7516,511.0698,0.4835,0.4835);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#373535").s().p("AgiAjQAMgqADgpIA2AEQgFA1gMAog");
	this.shape_809.setTransform(619.7516,511.0698,0.4835,0.4835);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#000000").ss(0.1,1,1).p("AAugdIgwgXQgRAmgaAjIAsAgQAdgqASgog");
	this.shape_810.setTransform(617.1163,518.347,0.4835,0.4835);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#373535").s().p("AgtAVQAagjARgmIAwAXQgSAogdAqg");
	this.shape_811.setTransform(617.1163,518.347,0.4835,0.4835);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#000000").ss(0.1,1,1).p("AA0gLIgngmQgdAdgjAZIAfAtQAogdAgggg");
	this.shape_812.setTransform(612.148,524.3066,0.4835,0.4835);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#373535").s().p("AgzAFQAkgZAcgdIAnAmQghAggnAdg");
	this.shape_813.setTransform(612.148,524.3066,0.4835,0.4835);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#000000").ss(0.1,1,1).p("AgBg0IAxBMIgvAdIgwhMg");
	this.shape_814.setTransform(622.6649,338.0002,0.4835,0.4835);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#373535").s().p("AgugXIAtgdIAwBMIguAdg");
	this.shape_815.setTransform(622.6649,338.0002,0.4835,0.4835);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#000000").ss(0.1,1,1).p("AgWgHIgHgKIAugdIAYAmIABABIABABIACAKIAAArIhZAAIAAg2gAgJgHIABAAIAAgEIgBAEIgCARIgBgBIAAAAIgKgQg");
	this.shape_816.setTransform(626.0496,344.4071,0.4835,0.4835);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#373535").s().p("AgsAvIAAg2IAVAAIgFgKIAtgdIAYAmIABABIABABIACAKIAAArgAgLAJIAAAAIAAABIADgRIAAAAIAAgDIAAADIgPAAg");
	this.shape_817.setTransform(626.0496,344.4071,0.4835,0.4835);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAcIAAg3IBbAAIAAA3g");
	this.shape_818.setTransform(618.1076,345.35,0.4835,0.4835);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#373535").s().p("AgtAcIAAg2IBbAAIAAA2g");
	this.shape_819.setTransform(618.1076,345.35,0.4835,0.4835);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_820.setTransform(569.8023,345.1686,0.4835,0.4835);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#373535").s().p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_821.setTransform(569.8023,345.1686,0.4835,0.4835);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAtIAAhaIA2AAIAAAlIAjAAIAAA1g");
	this.shape_822.setTransform(561.8603,344.2862,0.4835,0.4835);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#373535").s().p("AgsAtIAAhaIA1AAIAAAlIAkAAIAAA1g");
	this.shape_823.setTransform(561.8603,344.2862,0.4835,0.4835);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgsIA3AAIAABZIg3AAg");
	this.shape_824.setTransform(560.9899,336.3562,0.4835,0.4835);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#373535").s().p("AgaAtIAAhZIA1AAIAABZg");
	this.shape_825.setTransform(560.9899,336.3562,0.4835,0.4835);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#000000").ss(0.1,1,1).p("AgagtIA1AAIAABbIg1AAg");
	this.shape_826.setTransform(561.1712,277.0143,0.4835,0.4835);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_827.setTransform(561.1712,277.0143,0.4835,0.4835);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#000000").ss(0.1,1,1).p("AgtgtIBaAAIAAA2IgkAAIAAAkIg2AAg");
	this.shape_828.setTransform(562.0537,269.0722,0.4835,0.4835);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#373535").s().p("AgtAuIAAhaIBaAAIAAA2IgkAAIAAAkg");
	this.shape_829.setTransform(562.0537,269.0722,0.4835,0.4835);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(0.1,1,1).p("ABigbIAAA3IjDAAIAAg3g");
	this.shape_830.setTransform(572.5222,268.2018,0.4835,0.4835);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#373535").s().p("AhhAcIAAg2IDDAAIAAA2g");
	this.shape_831.setTransform(572.5222,268.2018,0.4835,0.4835);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_832.setTransform(597.4243,345.9423,0.4835,0.4835);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_833.setTransform(597.4243,345.9423,0.4835,0.4835);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhMAAIAAA1IBMAAg");
	this.shape_834.setTransform(604.0729,345.9423,0.4835,0.4835);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_835.setTransform(604.0729,345.9423,0.4835,0.4835);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_836.setTransform(610.7457,345.9423,0.4835,0.4835);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_837.setTransform(610.7457,345.9423,0.4835,0.4835);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_838.setTransform(577.3818,345.9423,0.4835,0.4835);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_839.setTransform(577.3818,345.9423,0.4835,0.4835);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#000000").ss(0.1,1,1).p("AAngaIhMAAIAAA1IBMAAg");
	this.shape_840.setTransform(584.0304,345.9423,0.4835,0.4835);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_841.setTransform(584.0304,345.9423,0.4835,0.4835);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_842.setTransform(590.7032,345.9423,0.4835,0.4835);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_843.setTransform(590.7032,345.9423,0.4835,0.4835);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_844.setTransform(560.3976,311.0915,0.4835,0.4835);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_845.setTransform(560.3976,311.0915,0.4835,0.4835);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_846.setTransform(560.3976,319.5533,0.4835,0.4835);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_847.setTransform(560.3976,319.5533,0.4835,0.4835);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(0.1,1,1).p("AgagwIAABhIA1AAIAAhhg");
	this.shape_848.setTransform(560.3976,328.0636,0.4835,0.4835);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_849.setTransform(560.3976,328.0636,0.4835,0.4835);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_850.setTransform(560.3976,285.5366,0.4835,0.4835);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_851.setTransform(560.3976,285.5366,0.4835,0.4835);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_852.setTransform(560.3976,293.9985,0.4835,0.4835);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_853.setTransform(560.3976,293.9985,0.4835,0.4835);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_854.setTransform(560.3976,302.5087,0.4835,0.4835);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_855.setTransform(560.3976,302.5087,0.4835,0.4835);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(0.1,1,1).p("AABA1IAvgdIgwhMIgvAdg");
	this.shape_856.setTransform(593.4231,290.5775,0.4835,0.4835);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#373535").s().p("AgvgXIAvgdIAwBMIgvAdg");
	this.shape_857.setTransform(593.4231,290.5775,0.4835,0.4835);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(0.1,1,1).p("AABA1IAvgdIgwhMIgvAdg");
	this.shape_858.setTransform(589.1921,283.9288,0.4835,0.4835);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#373535").s().p("AgvgXIAvgdIAwBMIgvAdg");
	this.shape_859.setTransform(589.1921,283.9288,0.4835,0.4835);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(0.1,1,1).p("AgBg0IguAdIAxBMIAugdg");
	this.shape_860.setTransform(584.9491,277.2561,0.4835,0.4835);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#373535").s().p("AgvgXIAugdIAxBMIguAdg");
	this.shape_861.setTransform(584.9491,277.2561,0.4835,0.4835);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(0.1,1,1).p("AACA1IAugdIgwhMIgvAdg");
	this.shape_862.setTransform(606.1521,310.62,0.4835,0.4835);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#373535").s().p("AgvgXIAvgdIAvBMIgtAdg");
	this.shape_863.setTransform(606.1521,310.62,0.4835,0.4835);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgXIAwBMIAvgdIgwhMg");
	this.shape_864.setTransform(601.9333,303.9714,0.4835,0.4835);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#373535").s().p("AgvgXIAvgdIAwBMIgvAdg");
	this.shape_865.setTransform(601.9333,303.9714,0.4835,0.4835);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(0.1,1,1).p("AACA1IAugdIgwhMIgvAdg");
	this.shape_866.setTransform(597.6903,297.2986,0.4835,0.4835);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#373535").s().p("AgvgXIAugdIAwBMIguAdg");
	this.shape_867.setTransform(597.6903,297.2986,0.4835,0.4835);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(0.1,1,1).p("AgvgXIAwBMIAvgdIgwhMg");
	this.shape_868.setTransform(618.8933,330.6626,0.4835,0.4835);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#373535").s().p("AgvgXIAvgdIAwBMIguAdg");
	this.shape_869.setTransform(618.8933,330.6626,0.4835,0.4835);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(0.1,1,1).p("AABA1IAvgdIgwhMIgvAdg");
	this.shape_870.setTransform(614.6745,324.014,0.4835,0.4835);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#373535").s().p("AgvgXIAvgdIAwBMIgvAdg");
	this.shape_871.setTransform(614.6745,324.014,0.4835,0.4835);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(0.1,1,1).p("AABA1IAvgdIgxhMIguAdg");
	this.shape_872.setTransform(610.4314,317.3412,0.4835,0.4835);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#373535").s().p("AgugXIAugdIAvBMIguAdg");
	this.shape_873.setTransform(610.4314,317.3412,0.4835,0.4835);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(0.1,1,1).p("AAbAuIg1AAIAAhbIA1AAg");
	this.shape_874.setTransform(541.9265,336.5375,0.4835,0.4835);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_875.setTransform(541.9265,336.5375,0.4835,0.4835);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAuIhZAAIAAg2IAkAAIAAgkIA1AAg");
	this.shape_876.setTransform(541.044,344.4796,0.4835,0.4835);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#373535").s().p("AgsAuIAAg2IAkAAIAAgkIA2AAIAABag");
	this.shape_877.setTransform(541.044,344.4796,0.4835,0.4835);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAcIAAg3IBZAAIAAA3g");
	this.shape_878.setTransform(533.1141,345.35,0.4835,0.4835);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#373535").s().p("AgtAcIAAg2IBaAAIAAA2g");
	this.shape_879.setTransform(533.1141,345.35,0.4835,0.4835);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#000000").ss(0.1,1,1).p("AgtgaIBaAAIAAA1IhaAAg");
	this.shape_880.setTransform(484.8088,345.1686,0.4835,0.4835);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#373535").s().p("AgtAbIAAg1IBaAAIAAA1g");
	this.shape_881.setTransform(484.8088,345.1686,0.4835,0.4835);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAtIAAhaIA2AAIAAAlIAlAAIAAA1g");
	this.shape_882.setTransform(476.8668,344.2862,0.4835,0.4835);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#373535").s().p("AgtAtIAAhaIA2AAIAAAlIAlAAIAAA1g");
	this.shape_883.setTransform(476.8668,344.2862,0.4835,0.4835);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgsIA3AAIAABZIg3AAg");
	this.shape_884.setTransform(475.9843,336.3562,0.4835,0.4835);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#373535").s().p("AgaAtIAAhZIA2AAIAABZg");
	this.shape_885.setTransform(475.9843,336.3562,0.4835,0.4835);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#000000").ss(0.1,1,1).p("AgagtIA1AAIAABbIg1AAg");
	this.shape_886.setTransform(476.1656,277.0143,0.4835,0.4835);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_887.setTransform(476.1656,277.0143,0.4835,0.4835);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#000000").ss(0.1,1,1).p("AgsgtIBaAAIAAA2IglAAIAAAkIg1AAg");
	this.shape_888.setTransform(477.0481,269.0722,0.4835,0.4835);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#373535").s().p("AgtAuIAAhaIBaAAIAAA2IgkAAIAAAkg");
	this.shape_889.setTransform(477.0481,269.0722,0.4835,0.4835);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#000000").ss(0.1,1,1).p("AAuAcIhbAAIAAg3IBbAAg");
	this.shape_890.setTransform(484.9902,268.2018,0.4835,0.4835);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#373535").s().p("AgtAcIAAg2IBbAAIAAA2g");
	this.shape_891.setTransform(484.9902,268.2018,0.4835,0.4835);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#000000").ss(0.1,1,1).p("AAugaIAAA1IhbAAIAAg1g");
	this.shape_892.setTransform(533.2954,268.3832,0.4835,0.4835);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#373535").s().p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_893.setTransform(533.2954,268.3832,0.4835,0.4835);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#000000").ss(0.1,1,1).p("AAugtIAABbIg2AAIAAglIgkAAIAAg2g");
	this.shape_894.setTransform(541.2375,269.2656,0.4835,0.4835);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#373535").s().p("AgIAtIAAgkIglAAIAAg2IBaAAIAABag");
	this.shape_895.setTransform(541.2375,269.2656,0.4835,0.4835);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#000000").ss(0.1,1,1).p("AAcAuIg3AAIAAhaIA3AAg");
	this.shape_896.setTransform(542.1078,277.1956,0.4835,0.4835);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_897.setTransform(542.1078,277.1956,0.4835,0.4835);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_898.setTransform(512.4187,345.9423,0.4835,0.4835);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_899.setTransform(512.4187,345.9423,0.4835,0.4835);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_900.setTransform(519.0673,345.9423,0.4835,0.4835);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_901.setTransform(519.0673,345.9423,0.4835,0.4835);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhMAAIAAA1IBMAAg");
	this.shape_902.setTransform(525.7401,345.9423,0.4835,0.4835);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_903.setTransform(525.7401,345.9423,0.4835,0.4835);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_904.setTransform(492.4004,345.9423,0.4835,0.4835);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_905.setTransform(492.4004,345.9423,0.4835,0.4835);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_906.setTransform(499.049,345.9423,0.4835,0.4835);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_907.setTransform(499.049,345.9423,0.4835,0.4835);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhLAAIAAA1IBLAAg");
	this.shape_908.setTransform(505.7097,345.9423,0.4835,0.4835);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_909.setTransform(505.7097,345.9423,0.4835,0.4835);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_910.setTransform(475.392,311.0915,0.4835,0.4835);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_911.setTransform(475.392,311.0915,0.4835,0.4835);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_912.setTransform(475.392,319.5533,0.4835,0.4835);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_913.setTransform(475.392,319.5533,0.4835,0.4835);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#000000").ss(0.1,1,1).p("AgagwIAABhIA1AAIAAhhg");
	this.shape_914.setTransform(475.392,328.0636,0.4835,0.4835);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_915.setTransform(475.392,328.0636,0.4835,0.4835);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_916.setTransform(475.392,285.5366,0.4835,0.4835);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_917.setTransform(475.392,285.5366,0.4835,0.4835);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_918.setTransform(475.392,293.9985,0.4835,0.4835);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_919.setTransform(475.392,293.9985,0.4835,0.4835);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_920.setTransform(475.392,302.5087,0.4835,0.4835);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_921.setTransform(475.392,302.5087,0.4835,0.4835);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#000000").ss(0.1,1,1).p("AgmAbIBMAAIAAg1IhMAAg");
	this.shape_922.setTransform(505.6734,267.6095,0.4835,0.4835);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_923.setTransform(505.6734,267.6095,0.4835,0.4835);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhMAAIAAA1g");
	this.shape_924.setTransform(499.0248,267.6095,0.4835,0.4835);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_925.setTransform(499.0248,267.6095,0.4835,0.4835);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_926.setTransform(492.352,267.6095,0.4835,0.4835);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_927.setTransform(492.352,267.6095,0.4835,0.4835);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhLAAIAAA1IBLAAg");
	this.shape_928.setTransform(525.716,267.6095,0.4835,0.4835);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_929.setTransform(525.716,267.6095,0.4835,0.4835);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_930.setTransform(519.0673,267.6095,0.4835,0.4835);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_931.setTransform(519.0673,267.6095,0.4835,0.4835);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#000000").ss(0.1,1,1).p("AAnAbIAAg1IhMAAIAAA1g");
	this.shape_932.setTransform(512.3946,267.6095,0.4835,0.4835);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_933.setTransform(512.3946,267.6095,0.4835,0.4835);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#000000").ss(0.1,1,1).p("AgaAxIA1AAIAAhhIg1AAg");
	this.shape_934.setTransform(542.7002,302.4604,0.4835,0.4835);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_935.setTransform(542.7002,302.4604,0.4835,0.4835);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#000000").ss(0.1,1,1).p("AgaAxIA1AAIAAhhIg1AAg");
	this.shape_936.setTransform(542.7002,293.9864,0.4835,0.4835);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_937.setTransform(542.7002,293.9864,0.4835,0.4835);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#000000").ss(0.1,1,1).p("AgaAxIA1AAIAAhhIg1AAg");
	this.shape_938.setTransform(542.7002,285.4882,0.4835,0.4835);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_939.setTransform(542.7002,285.4882,0.4835,0.4835);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#000000").ss(0.1,1,1).p("AgagwIAABhIA1AAIAAhhg");
	this.shape_940.setTransform(542.7002,328.0152,0.4835,0.4835);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_941.setTransform(542.7002,328.0152,0.4835,0.4835);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#000000").ss(0.1,1,1).p("AgaAxIA1AAIAAhhIg1AAg");
	this.shape_942.setTransform(542.7002,319.5413,0.4835,0.4835);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_943.setTransform(542.7002,319.5413,0.4835,0.4835);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#000000").ss(0.1,1,1).p("AgaAxIA1AAIAAhhIg1AAg");
	this.shape_944.setTransform(542.7002,311.0431,0.4835,0.4835);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_945.setTransform(542.7002,311.0431,0.4835,0.4835);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#000000").ss(0.1,1,1).p("AAcAuIg3AAIAAhbIA3AAg");
	this.shape_946.setTransform(456.933,336.5375,0.4835,0.4835);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_947.setTransform(456.933,336.5375,0.4835,0.4835);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#000000").ss(0.1,1,1).p("AAuAuIhbAAIAAg2IAlAAIAAgkIA2AAg");
	this.shape_948.setTransform(456.0505,344.4796,0.4835,0.4835);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#373535").s().p("AgtAuIAAg2IAlAAIAAgkIA2AAIAABag");
	this.shape_949.setTransform(456.0505,344.4796,0.4835,0.4835);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAcIhZAAIAAg3IBZAAg");
	this.shape_950.setTransform(448.1085,345.35,0.4835,0.4835);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#373535").s().p("AgtAcIAAg2IBaAAIAAA2g");
	this.shape_951.setTransform(448.1085,345.35,0.4835,0.4835);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAbIAAg1IBaAAIAAA1g");
	this.shape_952.setTransform(399.8033,345.1686,0.4835,0.4835);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#373535").s().p("AgtAbIAAg1IBaAAIAAA1g");
	this.shape_953.setTransform(399.8033,345.1686,0.4835,0.4835);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#000000").ss(0.1,1,1).p("AgsAtIAAhaIA2AAIAAAlIAjAAIAAA1g");
	this.shape_954.setTransform(391.8733,344.2862,0.4835,0.4835);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#373535").s().p("AgsAtIAAhaIA2AAIAAAlIAkAAIAAA1g");
	this.shape_955.setTransform(391.8733,344.2862,0.4835,0.4835);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgsIA3AAIAABZIg3AAg");
	this.shape_956.setTransform(391.0029,336.3562,0.4835,0.4835);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#373535").s().p("AgaAtIAAhZIA2AAIAABZg");
	this.shape_957.setTransform(391.0029,336.3562,0.4835,0.4835);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgtIA3AAIAABbIg3AAg");
	this.shape_958.setTransform(391.1721,277.0143,0.4835,0.4835);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_959.setTransform(391.1721,277.0143,0.4835,0.4835);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#000000").ss(0.1,1,1).p("AgtgtIBbAAIAAA2IglAAIAAAkIg2AAg");
	this.shape_960.setTransform(392.0546,269.0722,0.4835,0.4835);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#373535").s().p("AgtAuIAAhaIBbAAIAAA2IglAAIAAAkg");
	this.shape_961.setTransform(392.0546,269.0722,0.4835,0.4835);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgbIAAA3IhZAAIAAg3g");
	this.shape_962.setTransform(399.9967,268.2018,0.4835,0.4835);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#373535").s().p("AgtAcIAAg2IBbAAIAAA2g");
	this.shape_963.setTransform(399.9967,268.2018,0.4835,0.4835);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAbIhaAAIAAg1IBaAAg");
	this.shape_964.setTransform(448.3019,268.3832,0.4835,0.4835);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#373535").s().p("AgtAbIAAg1IBaAAIAAA1g");
	this.shape_965.setTransform(448.3019,268.3832,0.4835,0.4835);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgtIAABbIg2AAIAAglIgjAAIAAg2g");
	this.shape_966.setTransform(456.2319,269.2656,0.4835,0.4835);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#373535").s().p("AgIAtIAAgkIgkAAIAAg2IBaAAIAABag");
	this.shape_967.setTransform(456.2319,269.2656,0.4835,0.4835);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#000000").ss(0.1,1,1).p("AAcAuIg3AAIAAhaIA3AAg");
	this.shape_968.setTransform(457.1022,277.1956,0.4835,0.4835);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#373535").s().p("AgaAuIAAhbIA2AAIAABbg");
	this.shape_969.setTransform(457.1022,277.1956,0.4835,0.4835);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhLAAIAAA1IBLAAg");
	this.shape_970.setTransform(427.4373,345.9423,0.4835,0.4835);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_971.setTransform(427.4373,345.9423,0.4835,0.4835);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_972.setTransform(434.0859,345.9423,0.4835,0.4835);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_973.setTransform(434.0859,345.9423,0.4835,0.4835);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_974.setTransform(440.7466,345.9423,0.4835,0.4835);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_975.setTransform(440.7466,345.9423,0.4835,0.4835);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhMAAIAAA1IBMAAg");
	this.shape_976.setTransform(407.3948,345.9423,0.4835,0.4835);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_977.setTransform(407.3948,345.9423,0.4835,0.4835);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_978.setTransform(414.0434,345.9423,0.4835,0.4835);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_979.setTransform(414.0434,345.9423,0.4835,0.4835);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_980.setTransform(420.7162,345.9423,0.4835,0.4835);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_981.setTransform(420.7162,345.9423,0.4835,0.4835);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgwIg3AAIAABhIA3AAg");
	this.shape_982.setTransform(390.3985,311.0915,0.4835,0.4835);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_983.setTransform(390.3985,311.0915,0.4835,0.4835);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgwIg3AAIAABhIA3AAg");
	this.shape_984.setTransform(390.3985,319.5533,0.4835,0.4835);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_985.setTransform(390.3985,319.5533,0.4835,0.4835);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgwIAABhIA3AAIAAhhg");
	this.shape_986.setTransform(390.3985,328.0636,0.4835,0.4835);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_987.setTransform(390.3985,328.0636,0.4835,0.4835);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgwIg3AAIAABhIA3AAg");
	this.shape_988.setTransform(390.3985,285.5366,0.4835,0.4835);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_989.setTransform(390.3985,285.5366,0.4835,0.4835);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgwIg3AAIAABhIA3AAg");
	this.shape_990.setTransform(390.3985,293.9985,0.4835,0.4835);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_991.setTransform(390.3985,293.9985,0.4835,0.4835);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#000000").ss(0.1,1,1).p("AAcgwIg3AAIAABhIA3AAg");
	this.shape_992.setTransform(390.3985,302.5087,0.4835,0.4835);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#373535").s().p("AgaAxIAAhhIA2AAIAABhg");
	this.shape_993.setTransform(390.3985,302.5087,0.4835,0.4835);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_994.setTransform(420.6678,267.6095,0.4835,0.4835);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_995.setTransform(420.6678,267.6095,0.4835,0.4835);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_996.setTransform(414.0192,267.6095,0.4835,0.4835);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_997.setTransform(414.0192,267.6095,0.4835,0.4835);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#000000").ss(0.1,1,1).p("AAngaIhMAAIAAA1IBMAAg");
	this.shape_998.setTransform(407.3464,267.6095,0.4835,0.4835);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_999.setTransform(407.3464,267.6095,0.4835,0.4835);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#000000").ss(0.1,1,1).p("AAnAbIAAg1IhMAAIAAA1g");
	this.shape_1000.setTransform(440.7104,267.6095,0.4835,0.4835);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1001.setTransform(440.7104,267.6095,0.4835,0.4835);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#000000").ss(0.1,1,1).p("AAnAbIAAg1IhMAAIAAA1g");
	this.shape_1002.setTransform(434.0618,267.6095,0.4835,0.4835);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1003.setTransform(434.0618,267.6095,0.4835,0.4835);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#000000").ss(0.1,1,1).p("AgmAbIBMAAIAAg1IhMAAg");
	this.shape_1004.setTransform(427.389,267.6095,0.4835,0.4835);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1005.setTransform(427.389,267.6095,0.4835,0.4835);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1006.setTransform(457.7067,302.4604,0.4835,0.4835);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1007.setTransform(457.7067,302.4604,0.4835,0.4835);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1008.setTransform(457.7067,293.9864,0.4835,0.4835);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1009.setTransform(457.7067,293.9864,0.4835,0.4835);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1010.setTransform(457.7067,285.4882,0.4835,0.4835);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1011.setTransform(457.7067,285.4882,0.4835,0.4835);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgwIAABhIA3AAIAAhhg");
	this.shape_1012.setTransform(457.7067,328.0152,0.4835,0.4835);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1013.setTransform(457.7067,328.0152,0.4835,0.4835);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1014.setTransform(457.7067,319.5413,0.4835,0.4835);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1015.setTransform(457.7067,319.5413,0.4835,0.4835);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1016.setTransform(457.7067,311.0431,0.4835,0.4835);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#373535").s().p("AgbAxIAAhhIA3AAIAABhg");
	this.shape_1017.setTransform(457.7067,311.0431,0.4835,0.4835);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#000000").ss(0.1,1,1).p("AAbAuIg1AAIAAhbIA1AAg");
	this.shape_1018.setTransform(371.9395,336.5375,0.4835,0.4835);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_1019.setTransform(371.9395,336.5375,0.4835,0.4835);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#000000").ss(0.1,1,1).p("AAtAuIhaAAIAAg2IAlAAIAAgkIA1AAg");
	this.shape_1020.setTransform(371.057,344.4796,0.4835,0.4835);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#373535").s().p("AgtAuIAAg2IAlAAIAAgkIA1AAIAABag");
	this.shape_1021.setTransform(371.057,344.4796,0.4835,0.4835);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAcIAAg3IBbAAIAAA3g");
	this.shape_1022.setTransform(363.115,345.35,0.4835,0.4835);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#373535").s().p("AgtAcIAAg2IBbAAIAAA2g");
	this.shape_1023.setTransform(363.115,345.35,0.4835,0.4835);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_1024.setTransform(314.8098,345.1686,0.4835,0.4835);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#373535").s().p("AgtAbIAAg1IBbAAIAAA1g");
	this.shape_1025.setTransform(314.8098,345.1686,0.4835,0.4835);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAtIAAhaIA2AAIAAAlIAkAAIAAA1g");
	this.shape_1026.setTransform(306.8677,344.2862,0.4835,0.4835);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#373535").s().p("AgtAtIAAhaIA2AAIAAAlIAkAAIAAA1g");
	this.shape_1027.setTransform(306.8677,344.2862,0.4835,0.4835);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgsIA3AAIAABZIg3AAg");
	this.shape_1028.setTransform(305.9973,336.3562,0.4835,0.4835);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#373535").s().p("AgbAtIAAhZIA2AAIAABZg");
	this.shape_1029.setTransform(305.9973,336.3562,0.4835,0.4835);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#000000").ss(0.1,1,1).p("AgagtIA1AAIAABbIg1AAg");
	this.shape_1030.setTransform(306.1786,277.0143,0.4835,0.4835);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_1031.setTransform(306.1786,277.0143,0.4835,0.4835);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#000000").ss(0.1,1,1).p("AgsgtIBZAAIAAA2IgkAAIAAAkIg1AAg");
	this.shape_1032.setTransform(307.0611,269.0722,0.4835,0.4835);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#373535").s().p("AgsAuIAAhaIBZAAIAAA2IgkAAIAAAkg");
	this.shape_1033.setTransform(307.0611,269.0722,0.4835,0.4835);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgbIAAA3IhZAAIAAg3g");
	this.shape_1034.setTransform(314.9911,268.2018,0.4835,0.4835);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#373535").s().p("AgtAcIAAg2IBaAAIAAA2g");
	this.shape_1035.setTransform(314.9911,268.2018,0.4835,0.4835);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#000000").ss(0.1,1,1).p("AAugaIAAA1IhaAAIAAg1g");
	this.shape_1036.setTransform(363.2963,268.3832,0.4835,0.4835);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#373535").s().p("AgtAbIAAg1IBaAAIAAA1g");
	this.shape_1037.setTransform(363.2963,268.3832,0.4835,0.4835);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#000000").ss(0.1,1,1).p("AAugtIAABbIg2AAIAAglIglAAIAAg2g");
	this.shape_1038.setTransform(371.2384,269.2656,0.4835,0.4835);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#373535").s().p("AgIAtIAAgkIglAAIAAg2IBbAAIAABag");
	this.shape_1039.setTransform(371.2384,269.2656,0.4835,0.4835);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#000000").ss(0.1,1,1).p("AAcAuIg3AAIAAhaIA3AAg");
	this.shape_1040.setTransform(372.1208,277.1956,0.4835,0.4835);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#373535").s().p("AgaAuIAAhbIA1AAIAABbg");
	this.shape_1041.setTransform(372.1208,277.1956,0.4835,0.4835);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_1042.setTransform(342.4317,345.9423,0.4835,0.4835);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_1043.setTransform(342.4317,345.9423,0.4835,0.4835);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#000000").ss(0.1,1,1).p("AAngaIhMAAIAAA1IBMAAg");
	this.shape_1044.setTransform(349.0803,345.9423,0.4835,0.4835);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1045.setTransform(349.0803,345.9423,0.4835,0.4835);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_1046.setTransform(355.7531,345.9423,0.4835,0.4835);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1047.setTransform(355.7531,345.9423,0.4835,0.4835);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBLAAIAAg1g");
	this.shape_1048.setTransform(322.3892,345.9423,0.4835,0.4835);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1049.setTransform(322.3892,345.9423,0.4835,0.4835);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#000000").ss(0.1,1,1).p("AglAbIBLAAIAAg1IhLAAg");
	this.shape_1050.setTransform(329.0378,345.9423,0.4835,0.4835);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1051.setTransform(329.0378,345.9423,0.4835,0.4835);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_1052.setTransform(335.7106,345.9423,0.4835,0.4835);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1053.setTransform(335.7106,345.9423,0.4835,0.4835);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_1054.setTransform(305.405,311.0915,0.4835,0.4835);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1055.setTransform(305.405,311.0915,0.4835,0.4835);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_1056.setTransform(305.405,319.5533,0.4835,0.4835);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1057.setTransform(305.405,319.5533,0.4835,0.4835);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#000000").ss(0.1,1,1).p("AgagwIAABhIA1AAIAAhhg");
	this.shape_1058.setTransform(305.405,328.0636,0.4835,0.4835);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1059.setTransform(305.405,328.0636,0.4835,0.4835);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_1060.setTransform(305.405,285.5366,0.4835,0.4835);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1061.setTransform(305.405,285.5366,0.4835,0.4835);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_1062.setTransform(305.405,293.9985,0.4835,0.4835);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1063.setTransform(305.405,293.9985,0.4835,0.4835);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#000000").ss(0.1,1,1).p("AAbgwIg1AAIAABhIA1AAg");
	this.shape_1064.setTransform(305.405,302.5087,0.4835,0.4835);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#373535").s().p("AgaAxIAAhhIA1AAIAABhg");
	this.shape_1065.setTransform(305.405,302.5087,0.4835,0.4835);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_1066.setTransform(335.6864,267.6095,0.4835,0.4835);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_1067.setTransform(335.6864,267.6095,0.4835,0.4835);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#000000").ss(0.1,1,1).p("AAmgaIhLAAIAAA1IBLAAg");
	this.shape_1068.setTransform(329.0378,267.6095,0.4835,0.4835);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1069.setTransform(329.0378,267.6095,0.4835,0.4835);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#000000").ss(0.1,1,1).p("AAnAbIAAg1IhMAAIAAA1g");
	this.shape_1070.setTransform(322.365,267.6095,0.4835,0.4835);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1071.setTransform(322.365,267.6095,0.4835,0.4835);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhMAAIAAA1g");
	this.shape_1072.setTransform(355.7048,267.6095,0.4835,0.4835);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_1073.setTransform(355.7048,267.6095,0.4835,0.4835);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#000000").ss(0.1,1,1).p("AgmAbIBMAAIAAg1IhMAAg");
	this.shape_1074.setTransform(349.0562,267.6095,0.4835,0.4835);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1075.setTransform(349.0562,267.6095,0.4835,0.4835);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#000000").ss(0.1,1,1).p("AAmAbIAAg1IhLAAIAAA1g");
	this.shape_1076.setTransform(342.3955,267.6095,0.4835,0.4835);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1077.setTransform(342.3955,267.6095,0.4835,0.4835);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1078.setTransform(372.7011,302.4604,0.4835,0.4835);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1079.setTransform(372.7011,302.4604,0.4835,0.4835);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1080.setTransform(372.7011,293.9864,0.4835,0.4835);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1081.setTransform(372.7011,293.9864,0.4835,0.4835);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1082.setTransform(372.7011,285.4882,0.4835,0.4835);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1083.setTransform(372.7011,285.4882,0.4835,0.4835);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgwIAABhIA3AAIAAhhg");
	this.shape_1084.setTransform(372.7011,328.0152,0.4835,0.4835);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1085.setTransform(372.7011,328.0152,0.4835,0.4835);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1086.setTransform(372.7011,319.5413,0.4835,0.4835);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1087.setTransform(372.7011,319.5413,0.4835,0.4835);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAxIA3AAIAAhhIg3AAg");
	this.shape_1088.setTransform(372.7011,311.0431,0.4835,0.4835);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#373535").s().p("AgbAxIAAhhIA2AAIAABhg");
	this.shape_1089.setTransform(372.7011,311.0431,0.4835,0.4835);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#000000").ss(0.1,1,1).p("AAcAuIg3AAIAAhbIA3AAg");
	this.shape_1090.setTransform(284.5283,336.5859,0.4835,0.4835);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#373535").s().p("AgbAuIAAhbIA2AAIAABbg");
	this.shape_1091.setTransform(284.5283,336.5859,0.4835,0.4835);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#000000").ss(0.1,1,1).p("AAuAtIhbAAIAAg2IAlAAIAAgkIA2AAg");
	this.shape_1092.setTransform(283.6459,344.528,0.4835,0.4835);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#373535").s().p("AgtAuIAAg2IAlAAIAAgkIA2AAIAABag");
	this.shape_1093.setTransform(283.6459,344.528,0.4835,0.4835);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#000000").ss(0.1,1,1).p("AgtAcIAAg3IBaAAIAAA3g");
	this.shape_1094.setTransform(275.7038,345.3983,0.4835,0.4835);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#373535").s().p("AgtAcIAAg2IBaAAIAAA2g");
	this.shape_1095.setTransform(275.7038,345.3983,0.4835,0.4835);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#000000").ss(0.1,1,1).p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_1096.setTransform(206.9934,345.217,0.4835,0.4835);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#373535").s().p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_1097.setTransform(206.9934,345.217,0.4835,0.4835);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#000000").ss(0.1,1,1).p("AAPgFIgCgBIAiAAIAAA2IhdAAIAIhfIA1AFIgDAlg");
	this.shape_1098.setTransform(198.7612,344.2258,0.4835,0.4835);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#373535").s().p("AguAwIAIhfIA1AFIgDAlIADAAIgCgBIAiAAIAAA2g");
	this.shape_1099.setTransform(198.7612,344.2258,0.4835,0.4835);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#000000").ss(0.1,1,1).p("AAkgnIgRBSIAAACIgBAGIg1gHIAAgGIAAgCIABgBIARhVg");
	this.shape_1100.setTransform(198.9425,336.1144,0.4835,0.4835);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#373535").s().p("AgjArIABgFIAAgCIAAgCIAShUIA0ALIgRBRIAAADIgBAGg");
	this.shape_1101.setTransform(198.9425,336.1144,0.4835,0.4835);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#000000").ss(0.1,1,1).p("AAtghIAGA1IhcAOIgJg1g");
	this.shape_1102.setTransform(275.4741,269.8942,0.4835,0.4835);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#373535").s().p("AgygTIBfgOIAGA1IhcAOg");
	this.shape_1103.setTransform(275.4741,269.8942,0.4835,0.4835);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#000000").ss(0.1,1,1).p("AAwgvIAABfIg2AAIAAgmIgDAAIAAABIAAAAIghAEIgFg2g");
	this.shape_1104.setTransform(283.7063,269.8217,0.4835,0.4835);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#373535").s().p("AgFAwIAAgnIgFAAIABACIgBAAIghAEIgEg2IBfgIIAABfg");
	this.shape_1105.setTransform(283.7063,269.8217,0.4835,0.4835);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#000000").ss(0.1,1,1).p("AAbAwIg1AAIAAhfIA1AAg");
	this.shape_1106.setTransform(284.7097,278.211,0.4835,0.4835);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1107.setTransform(284.7097,278.211,0.4835,0.4835);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_1108.setTransform(254.9601,345.9907,0.4835,0.4835);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#373535").s().p("AgmAbIAAg1IBMAAIAAA1g");
	this.shape_1109.setTransform(254.9601,345.9907,0.4835,0.4835);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBNAAIAAg1g");
	this.shape_1110.setTransform(261.6329,345.9907,0.4835,0.4835);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1111.setTransform(261.6329,345.9907,0.4835,0.4835);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_1112.setTransform(268.3299,345.9907,0.4835,0.4835);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1113.setTransform(268.3299,345.9907,0.4835,0.4835);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBNAAIAAg1g");
	this.shape_1114.setTransform(234.8571,345.9907,0.4835,0.4835);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1115.setTransform(234.8571,345.9907,0.4835,0.4835);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBNAAIAAg1g");
	this.shape_1116.setTransform(241.5299,345.9907,0.4835,0.4835);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1117.setTransform(241.5299,345.9907,0.4835,0.4835);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBNAAIAAg1g");
	this.shape_1118.setTransform(248.2269,345.9907,0.4835,0.4835);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#373535").s().p("AgmAbIAAg1IBNAAIAAA1g");
	this.shape_1119.setTransform(248.2269,345.9907,0.4835,0.4835);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBNAAIAAg1g");
	this.shape_1120.setTransform(214.7541,345.9907,0.4835,0.4835);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1121.setTransform(214.7541,345.9907,0.4835,0.4835);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#000000").ss(0.1,1,1).p("AgmgaIAAA1IBMAAIAAg1g");
	this.shape_1122.setTransform(221.4269,345.9907,0.4835,0.4835);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1123.setTransform(221.4269,345.9907,0.4835,0.4835);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#000000").ss(0.1,1,1).p("AglgaIAAA1IBMAAIAAg1g");
	this.shape_1124.setTransform(228.1239,345.9907,0.4835,0.4835);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#373535").s().p("AglAbIAAg1IBLAAIAAA1g");
	this.shape_1125.setTransform(228.1239,345.9907,0.4835,0.4835);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#000000").ss(0.1,1,1).p("AAwgaIgvgdIgwBUIAvAag");
	this.shape_1126.setTransform(206.945,312.6388,0.4835,0.4835);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#373535").s().p("AgvAdIAwhTIAvAcIgwBRg");
	this.shape_1127.setTransform(206.945,312.6388,0.4835,0.4835);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#000000").ss(0.1,1,1).p("AAtgeIgxgYIgoBZIAyAUg");
	this.shape_1128.setTransform(203.1976,320.0611,0.4835,0.4835);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#373535").s().p("AgsAiIAohYIAwAXIgmBWg");
	this.shape_1129.setTransform(203.1976,320.0611,0.4835,0.4835);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#000000").ss(0.1,1,1).p("AgoAoIA0AOIAdhZIgzgSg");
	this.shape_1130.setTransform(200.2964,327.8822,0.4835,0.4835);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#373535").s().p("AgoAoIAehdIAzASIgdBZg");
	this.shape_1131.setTransform(200.2964,327.8822,0.4835,0.4835);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#000000").ss(0.1,1,1).p("AA2gKIgkgqQgPAMgUAVQgfAdgEAEIAmAnQAFgFAcgcQAUgUAPgKg");
	this.shape_1132.setTransform(222.6841,293.249,0.4835,0.4835);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#373535").s().p("Ag1AOIAkgiQATgUAQgMIAjApQgOALgVAUIghAhg");
	this.shape_1133.setTransform(222.6841,293.249,0.4835,0.4835);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#000000").ss(0.1,1,1).p("AA0gPIgognQgMAOgTAXQgZAcgHAIIApAkQAGgHAYgdQATgVANgNg");
	this.shape_1134.setTransform(216.8091,299.124,0.4835,0.4835);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#373535").s().p("AgzATIAggkIAfglIAoAnIggAiIgdAjg");
	this.shape_1135.setTransform(216.8091,299.124,0.4835,0.4835);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#000000").ss(0.1,1,1).p("AgEA3IA2hMIgrgiIg4BPg");
	this.shape_1136.setTransform(211.5265,305.6033,0.4835,0.4835);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#373535").s().p("AgxAYIA4hPIArAiIg2BMg");
	this.shape_1137.setTransform(211.5265,305.6033,0.4835,0.4835);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#000000").ss(0.1,1,1).p("AA3ADIgXgwQgeAMg4AgIAaAvQA2gfAdgMg");
	this.shape_1138.setTransform(243.2948,279.1418,0.4835,0.4835);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#373535").s().p("Ag2gBQA4ggAegMIAXAwQgdAMg2Afg");
	this.shape_1139.setTransform(243.2948,279.1418,0.4835,0.4835);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#000000").ss(0.1,1,1).p("AA3AAIgbgwQgcAPg2AkIAeAuQA8goATgJg");
	this.shape_1140.setTransform(236.0418,283.2035,0.4835,0.4835);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#373535").s().p("Ag2ADQA2gkAcgPIAbAwQgTAJg8Aog");
	this.shape_1141.setTransform(236.0418,283.2035,0.4835,0.4835);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#000000").ss(0.1,1,1).p("AAQAVQAWgRAQgJIgfgtQgSALgVASQgZAUgNAJIAiArQANgJAXgVg");
	this.shape_1142.setTransform(229.1635,287.9059,0.4835,0.4835);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#373535").s().p("Ag1AIIAlgeQAWgRARgLIAfAtQgQAJgWARIgjAeg");
	this.shape_1143.setTransform(229.1635,287.9059,0.4835,0.4835);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#000000").ss(0.1,1,1).p("AA1AQIgLg1QgVAEhJASIAOA1QA8gRAfgFg");
	this.shape_1144.setTransform(266.8188,270.7041,0.4835,0.4835);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#373535").s().p("Ag0gPQBJgSAVgEIALA1QgfAFg8ARg");
	this.shape_1145.setTransform(266.8188,270.7041,0.4835,0.4835);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#000000").ss(0.1,1,1).p("AA2AMIgPg0QggAIg8AWIASAzQA2gVAjgIg");
	this.shape_1146.setTransform(258.8042,272.868,0.4835,0.4835);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#373535").s().p("Ag1gKQA8gXAfgGIAQAzQgkAIg2AVg");
	this.shape_1147.setTransform(258.8042,272.868,0.4835,0.4835);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#000000").ss(0.1,1,1).p("AggAsQAwgXAngNIgUgzQgmANgzAZg");
	this.shape_1148.setTransform(250.9468,275.6725,0.4835,0.4835);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#373535").s().p("Ag2gFQA0gZAlgMIAUAxQgnAOgwAWg");
	this.shape_1149.setTransform(250.9468,275.6725,0.4835,0.4835);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAwIA3AAIAAhfIg3AAg");
	this.shape_1150.setTransform(285.302,303.2098,0.4835,0.4835);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1151.setTransform(285.302,303.2098,0.4835,0.4835);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAwIA3AAIAAhfIg3AAg");
	this.shape_1152.setTransform(285.302,294.9293,0.4835,0.4835);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1153.setTransform(285.302,294.9293,0.4835,0.4835);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAwIA3AAIAAhfIg3AAg");
	this.shape_1154.setTransform(285.302,286.6246,0.4835,0.4835);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1155.setTransform(285.302,286.6246,0.4835,0.4835);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#000000").ss(0.1,1,1).p("AgbgvIAABfIA3AAIAAhfg");
	this.shape_1156.setTransform(285.302,328.1724,0.4835,0.4835);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1157.setTransform(285.302,328.1724,0.4835,0.4835);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAwIA3AAIAAhfIg3AAg");
	this.shape_1158.setTransform(285.302,319.8918,0.4835,0.4835);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1159.setTransform(285.302,319.8918,0.4835,0.4835);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#000000").ss(0.1,1,1).p("AgbAwIA3AAIAAhfIg3AAg");
	this.shape_1160.setTransform(285.302,311.575,0.4835,0.4835);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#373535").s().p("AgaAwIAAhfIA1AAIAABfg");
	this.shape_1161.setTransform(285.302,311.575,0.4835,0.4835);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Game, new cjs.Rectangle(30.1,-78.8,1046.5,634.8), null);


// stage content:
(lib.tran27 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Game
	this.instance = new lib.Symbol74();
	this.instance.setTransform(-228.1,50,1,1,0,0,0,12,42);

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
p.nominalBounds = new cjs.Rectangle(363,191.5,713.5999999999999,446.6);
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
		{src:"sounds/dragvanwav.mp3", id:"dragvanwav"},
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